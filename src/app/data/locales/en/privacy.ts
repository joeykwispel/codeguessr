/** The privacy policy. Keep it in step with nl/privacy.ts and with what the code actually stores. */
export const privacy = {
  title: 'Privacy',
  updated: 'Last updated: 25 September 2026',
  intro:
    'Codeguessr is a free puzzle game made by Joey Oosenbrug (the Netherlands). You can play without an account, and there are no ads, no analytics and no tracking. This page explains exactly what is stored and why.',
  sections: [
    {
      heading: 'Without an account',
      paragraphs: [
        'Everything stays in your own browser (localStorage): your game progress per day, your stats, streak and history, your hard-mode setting, your language choice and a copy of recent puzzles so the game also works offline.',
        'The dark/light theme is stored in localStorage and in one cookie, jo-theme, on joeyoosenbrug.nl. It only contains the word "dark" or "light" and is shared with the other joeyoosenbrug.nl sites so they use the same theme.',
        'You can delete all of this at any time by clearing the site data for codeguessr.joeyoosenbrug.nl in your browser.'
      ]
    },
    {
      heading: 'If you sign in with Google',
      paragraphs: [
        'Signing in is optional and only used to sync your stats across devices. When you sign in, Google shares your account ID, email address, name and profile picture with the app. These are stored in the login system (Supabase Auth) and only used to show who is signed in.',
        'Your stats are stored in one database row: current and longest streak, the date you last played, games played and won, how many turns your wins took, and when the row was last updated. Nothing else is stored about you, and no one else can read it: the database only lets you read and change your own row.',
        'The legal basis is your consent (GDPR article 6(1)(a)): you choose to sign in, and you can withdraw that at any time by asking for your account to be deleted.'
      ]
    },
    {
      heading: 'Who handles the data',
      paragraphs: [
        'Supabase hosts the puzzles, the login system and the stats database. Google handles the sign-in itself. GitHub Pages hosts the website; like any web server it receives your IP address and browser details when you load a page. Fonts are hosted on this site, so no requests go to Google Fonts.',
        'Your data is never sold or shared with anyone else, and it is not used for advertising or profiling.'
      ]
    },
    {
      heading: 'How long it is kept',
      paragraphs: [
        'Data in your browser stays until you clear it. Your account and stats row stay until you ask for them to be deleted; deleting the account deletes the stats row with it.'
      ]
    },
    {
      heading: 'Your rights',
      paragraphs: [
        'You can ask to see, correct or delete your data by emailing joey.oosenbrug@gmail.com. If you think your data is handled wrongly, you can also complain to the Dutch Data Protection Authority (Autoriteit Persoonsgegevens).'
      ]
    },
    {
      heading: 'Changes',
      paragraphs: ['If this policy changes, the date at the top changes with it.']
    }
  ]
};

export type Privacy = typeof privacy;
