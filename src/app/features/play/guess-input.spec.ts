import { Component } from '@angular/core';
import { render, screen, fireEvent } from '@testing-library/angular';
import { GuessInput } from './guess-input';

async function setup() {
  const submitted = vi.fn();
  const skipped = vi.fn();
  await render(GuessInput, { inputs: { turnsLeft: 6, turns: 6 }, on: { submitted, skipped } });
  const field = screen.getByRole('combobox', { name: 'Your guess' }) as HTMLInputElement;
  fireEvent.focus(field);
  return { field, submitted, skipped };
}

describe('GuessInput (combobox)', () => {
  it('opens suggestions while typing and moves through them with the arrow keys', async () => {
    const { field } = await setup();
    fireEvent.input(field, { target: { value: 'kube' } });
    expect(field.getAttribute('aria-expanded')).toBe('true');
    fireEvent.keyDown(field, { key: 'ArrowDown' });
    const active = field.getAttribute('aria-activedescendant')!;
    expect(document.getElementById(active)?.textContent).toContain('Kubernetes');
    expect(document.getElementById(active)?.getAttribute('aria-selected')).toBe('true');
  });

  it('wraps around with ArrowUp from the top', async () => {
    const { field } = await setup();
    fireEvent.input(field, { target: { value: 'script' } });
    fireEvent.keyDown(field, { key: 'ArrowUp' });
    const options = screen.getAllByRole('option');
    expect(field.getAttribute('aria-activedescendant')).toBe(`guess-option-${options.length - 1}`);
  });

  it('Enter on a suggestion submits its canonical name', async () => {
    const { field, submitted } = await setup();
    fireEvent.input(field, { target: { value: 'k8s' } });
    fireEvent.keyDown(field, { key: 'ArrowDown' });
    fireEvent.keyDown(field, { key: 'Enter' });
    expect(submitted).toHaveBeenCalledWith('Kubernetes');
  });

  it('Enter without a highlighted suggestion submits the typed text', async () => {
    const { field, submitted } = await setup();
    fireEvent.input(field, { target: { value: 'whatever' } });
    fireEvent.submit(field.form!);
    expect(submitted).toHaveBeenCalledWith('whatever');
  });

  it('Escape closes the list first and clears the field second', async () => {
    const { field } = await setup();
    fireEvent.input(field, { target: { value: 'rea' } });
    fireEvent.keyDown(field, { key: 'Escape' });
    expect(field.getAttribute('aria-expanded')).toBe('false');
    expect(field.value).toBe('rea');
    fireEvent.keyDown(field, { key: 'Escape' });
    expect(field.value).toBe('');
  });

  it('skip emits without submitting a guess', async () => {
    const { submitted, skipped } = await setup();
    fireEvent.click(screen.getByRole('button', { name: /skip this turn/i }));
    expect(skipped).toHaveBeenCalled();
    expect(submitted).not.toHaveBeenCalled();
  });
});

@Component({
  imports: [GuessInput],
  template: `<app-guess-input #input [turnsLeft]="6" [turns]="6" (submitted)="input.clear()" />`
})
class Host {}

describe('GuessInput inside a page', () => {
  it('clears the field right away when the page accepts a guess', async () => {
    const { fixture } = await render(Host);
    const field = screen.getByRole('combobox', { name: 'Your guess' }) as HTMLInputElement;
    fireEvent.focus(field);
    fireEvent.input(field, { target: { value: 'Java' } });
    // submit straight away, without a render in between (a fast typist pressing Enter)
    fireEvent.submit(field.form!);
    expect(field.value).toBe('');
    await fixture.whenStable();
    expect(field.value).toBe('');
  });
});
