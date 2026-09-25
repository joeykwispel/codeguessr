import termList from '../data/shared/terms.json';
import type { Term } from '../data/shared/types';
import { TermIndex, isCorrect, normalize } from './guess';

const terms = termList as Term[];
const index = new TermIndex(terms);

describe('normalize', () => {
  it('is case-insensitive and trims whitespace and surrounding punctuation', () => {
    expect(normalize('  React!  ')).toBe('react');
    expect(normalize('"Docker".')).toBe('docker');
    expect(normalize('¿Rust?')).toBe('rust');
  });

  it('ignores separators inside a name', () => {
    expect(normalize('Node.js')).toBe(normalize('nodejs'));
    expect(normalize('Node JS')).toBe(normalize('NodeJS'));
    expect(normalize('Tailwind CSS')).toBe(normalize('tailwind-css'));
  });

  it('keeps + and # so C, C++ and C# stay distinct', () => {
    expect(normalize('C++')).toBe('c++');
    expect(normalize('c#')).toBe('c#');
    expect(normalize('C')).toBe('c');
  });

  it('drops accents', () => {
    expect(normalize('Pythön')).toBe('python');
  });
});

describe('TermIndex', () => {
  it('resolves names and aliases to the canonical term', () => {
    expect(index.resolve('javascript')).toBe('JavaScript');
    expect(index.resolve('JS')).toBe('JavaScript');
    expect(index.resolve('k8s')).toBe('Kubernetes');
    expect(index.resolve('golang')).toBe('Go');
    expect(index.resolve('postgres')).toBe('PostgreSQL');
    expect(index.resolve('c sharp')).toBe('C#');
    expect(index.resolve('C++')).toBe('C++');
    expect(index.resolve('C')).toBe('C');
  });

  it('rejects unknown terms and empty input', () => {
    expect(index.resolve('Banana')).toBeNull();
    expect(index.resolve('   ')).toBeNull();
    expect(index.resolve('...')).toBeNull();
  });

  it('suggests exact, then prefix, then substring matches', () => {
    const names = index.search('type').map((s) => s.name);
    expect(names[0]).toBe('TypeScript');
    expect(index.search('script').map((s) => s.name)).toEqual(expect.arrayContaining(['JavaScript', 'TypeScript', 'CoffeeScript']));
  });

  it('shows which alias matched', () => {
    expect(index.search('k8s')[0]).toEqual({ name: 'Kubernetes', alias: 'k8s' });
  });

  it('limits the number of suggestions', () => {
    expect(index.search('a', 5)).toHaveLength(5);
  });

  it('has no alias that points to two different terms', () => {
    const seen = new Map<string, string>();
    for (const t of terms) {
      for (const label of [t.name, ...(t.aliases ?? [])]) {
        const key = normalize(label);
        expect(seen.get(key) ?? t.name, `${label} is used by ${seen.get(key)} and ${t.name}`).toBe(t.name);
        seen.set(key, t.name);
      }
    }
  });
});

describe('isCorrect', () => {
  const puzzle = { answer: 'Vue.js', aliases: ['Vue 3'] };

  it('matches the answer in any spelling', () => {
    expect(isCorrect('Vue.js', puzzle)).toBe(true);
    expect(isCorrect('vuejs', puzzle)).toBe(true);
  });

  it('matches the puzzle-specific aliases', () => {
    expect(isCorrect('vue 3', puzzle)).toBe(true);
  });

  it('rejects other terms', () => {
    expect(isCorrect('React', puzzle)).toBe(false);
  });
});
