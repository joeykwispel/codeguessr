/** All interface copy in English. The Dutch file (nl/ui.ts) is typed against this one, so no key can go missing. */
export const ui = {
  meta: {
    title: 'Codeguessr · The daily tech term puzzle',
    description: 'Guess the framework, language, tool or protocol from up to six clues. A new developer puzzle every day, free, no account needed.',
    archiveTitle: 'Archive · Codeguessr',
    archiveDescription: 'Play every past Codeguessr puzzle. Archive games never touch your streak.',
    notFoundTitle: 'Page not found · Codeguessr'
  },
  nav: {
    skip: 'Skip to the puzzle',
    home: "Codeguessr, today's puzzle",
    main: 'Main',
    toLight: 'Switch to light theme',
    toDark: 'Switch to dark theme',
    archive: 'Archive',
    stats: 'Statistics',
    streak: 'Current streak: {n} days. Open statistics'
  },
  footer: {
    daily: 'A new puzzle every day at 00:00 UTC.',
    madeBy: 'Made by',
    source: 'Source'
  },
  play: {
    today: "Today's puzzle",
    puzzle: 'Puzzle #{n}',
    intro: 'Guess the tech term. Every wrong guess or skip reveals a more specific clue.',
    category: 'Category',
    clues: 'Clues',
    clue: 'Clue {n}',
    locked: 'Locked until your next turn',
    input: 'Your guess',
    placeholder: 'A language, framework, tool…',
    guess: 'Guess',
    skip: 'Skip',
    skipLabel: 'Skip this turn and reveal the next clue',
    turnsLeft: '{n} of {total} turns left',
    suggestions: 'Suggestions',
    suggestionCount: '{n} suggestions. Use the arrow keys to choose, Enter to guess.',
    noSuggestions: 'No matching terms',
    empty: 'Type a guess first.',
    unknown: '“{term}” isn’t in the term list. Try another spelling or pick a suggestion.',
    repeat: 'You already guessed {term}.',
    history: 'Your guesses',
    turn: 'Turn {n}',
    correct: 'correct',
    wrong: 'wrong',
    skipped: 'skipped',
    hard: 'Hard mode',
    hardHint: 'Four clues, four turns. Set it before your first guess.',
    newClue: 'Clue {n}: {clue}',
    wrongAnnounce: '{term} is wrong. {left} turns left.',
    skipAnnounce: 'Skipped. {left} turns left.',
    won: 'You got it!',
    wonIn: 'Solved in {n} of {total} turns.',
    lost: 'Out of turns',
    answerWas: 'The answer was',
    funFact: 'Fun fact',
    next: 'Next puzzle in',
    newAvailable: 'A new puzzle is out.',
    playNew: 'Play it',
    loading: 'Loading the puzzle…',
    error: 'The puzzle couldn’t be loaded.',
    retry: 'Try again',
    missing: 'There’s no puzzle for this day yet. Check back soon.',
    future: 'This puzzle isn’t out yet. No peeking.',
    offline: 'You’re offline; this is the bundled copy of the puzzle.',
    backToToday: 'Back to today’s puzzle',
    archiveNote: 'Archive game: it doesn’t count towards your streak or stats.'
  },
  share: {
    button: 'Share result',
    copied: 'Result copied to the clipboard.',
    failed: 'Couldn’t copy automatically. Select the text below and copy it.',
    preview: 'Your result',
    grid: 'Turn {n}: {result}'
  },
  stats: {
    title: 'Statistics',
    played: 'Played',
    winRate: 'Win %',
    streak: 'Current streak',
    maxStreak: 'Max streak',
    distribution: 'Guess distribution',
    distributionRow: 'Solved in {n}: {count}',
    history: 'Last 12 weeks',
    historySummary: 'Last 12 weeks: {won} won, {lost} lost',
    won: 'won',
    lost: 'lost',
    none: 'not played',
    day: '{date}: {result}',
    empty: 'Finish a daily puzzle to start your stats.',
    local: 'Stats are saved in this browser only.',
    close: 'Close'
  },
  notFound: {
    title: '404: term not found',
    text: 'This page doesn’t exist.',
    link: 'Play today’s puzzle'
  }
};

export type UI = typeof ui;
