import type { Privacy } from '../en/privacy';

export const privacy: Privacy = {
  title: 'Privacy',
  updated: 'Laatst bijgewerkt: 25 september 2026',
  intro:
    'Codeguessr is een gratis puzzelspel, gemaakt door Joey Oosenbrug (Nederland). Je kunt spelen zonder account, en er zijn geen advertenties, geen analytics en geen tracking. Op deze pagina staat precies wat er wordt opgeslagen en waarom.',
  sections: [
    {
      heading: 'Zonder account',
      paragraphs: [
        'Alles blijft in je eigen browser (localStorage): je voortgang per dag, je statistieken, reeks en geschiedenis, je instelling voor moeilijke modus, je taalkeuze en een kopie van recente puzzels, zodat het spel ook offline werkt.',
        'Het donkere of lichte thema wordt bewaard in localStorage en in één cookie, jo-theme, op joeyoosenbrug.nl. Daar staat alleen het woord "dark" of "light" in, en het wordt gedeeld met de andere joeyoosenbrug.nl-sites zodat die hetzelfde thema gebruiken.',
        'Je kunt dit allemaal op elk moment verwijderen door in je browser de sitegegevens van codeguessr.joeyoosenbrug.nl te wissen.'
      ]
    },
    {
      heading: 'Als je inlogt met Google',
      paragraphs: [
        'Inloggen is optioneel en dient alleen om je statistieken op je apparaten gelijk te houden. Als je inlogt, deelt Google je account-ID, e-mailadres, naam en profielfoto met de app. Die worden opgeslagen in het inlogsysteem (Supabase Auth) en alleen gebruikt om te tonen wie er is ingelogd.',
        'Je statistieken staan in één databaserij: huidige en langste reeks, de datum waarop je voor het laatst speelde, gespeelde en gewonnen spellen, in hoeveel beurten je won, en wanneer de rij voor het laatst is bijgewerkt. Verder wordt er niets over je opgeslagen, en niemand anders kan het lezen: de database laat je alleen je eigen rij lezen en wijzigen.',
        'De grondslag is je toestemming (AVG artikel 6, lid 1, onder a): je kiest er zelf voor om in te loggen, en je kunt die toestemming altijd intrekken door te vragen of je account wordt verwijderd.'
      ]
    },
    {
      heading: 'Wie de gegevens verwerkt',
      paragraphs: [
        'Supabase host de puzzels, het inlogsysteem en de database met statistieken. Google verzorgt het inloggen zelf. GitHub Pages host de website; zoals elke webserver ontvangt die je IP-adres en browsergegevens als je een pagina laadt. De lettertypes staan op deze site zelf, dus er gaan geen verzoeken naar Google Fonts.',
        'Je gegevens worden nooit verkocht of met anderen gedeeld, en niet gebruikt voor advertenties of profilering.'
      ]
    },
    {
      heading: 'Hoe lang het wordt bewaard',
      paragraphs: [
        'Gegevens in je browser blijven staan tot je ze wist. Je account en statistieken blijven bewaard tot je vraagt ze te verwijderen; als je account wordt verwijderd, gaat je statistiekenrij mee.'
      ]
    },
    {
      heading: 'Jouw rechten',
      paragraphs: [
        'Je kunt vragen je gegevens in te zien, te corrigeren of te verwijderen door te mailen naar joey.oosenbrug@gmail.com. Vind je dat er verkeerd met je gegevens wordt omgegaan, dan kun je ook een klacht indienen bij de Autoriteit Persoonsgegevens.'
      ]
    },
    {
      heading: 'Wijzigingen',
      paragraphs: ['Als dit beleid verandert, verandert de datum bovenaan mee.']
    }
  ]
};
