import type { PuzzleText } from '../../shared/types';

/** Hints lopen van moeilijk/vaag naar makkelijk/specifiek. Op puzzel-id (data/shared/puzzles.ts). */
export const puzzles: Record<number, PuzzleText> = {
  1: {
    clues: [
      'Ontstaan in 2011 binnen het advertentieteam van een sociaal netwerk, en twee jaar later open source gemaakt.',
      'De makers vonden dat markup en logica in hetzelfde bestand horen, wat eerst veel mensen dwarszat.',
      'Het maakte het idee populair van een virtuele DOM die wordt vergeleken voordat de echte wordt aangeraakt.',
      'Hooks zoals useState en useEffect vervingen de meeste class-componenten.',
      'De componenten schrijf je meestal in JSX.',
      'De JavaScript-library van Meta voor gebruikersinterfaces, met een Native-broertje voor mobiele apps.'
    ],
    funFact: 'React draaide in 2011 al in productie op de nieuwsfeed van Facebook en in 2012 op Instagram, voordat het in 2013 op JSConf US open source werd.'
  },
  2: {
    clues: [
      'Het begon als intern project bij een platform-as-a-servicebedrijf dat dotCloud heette.',
      'Het maakte Linux-namespaces en cgroups bruikbaar voor mensen die er nog nooit van hadden gehoord.',
      'De images worden in lagen gebouwd, en elke instructie voegt er één toe.',
      '"Het werkt op mijn machine" werd "dan leveren we jouw machine toch mee".',
      'Je beschrijft een image in een bestand vol FROM-, RUN- en COPY-instructies.',
      'Containers, een walvis als logo en een Hub vol images.'
    ],
    funFact: 'Docker werd voor het eerst getoond in een lightning talk van vijf minuten door Solomon Hykes op PyCon 2013.'
  },
  3: {
    clues: [
      'De maker grapte dat hij al zijn projecten naar zichzelf noemt; deze naam is Brits scheldwoord voor een onaangenaam persoon.',
      'Het werd in ongeveer tien dagen geschreven, na een licentieruzie over de tool die de Linux-kernel daarvoor gebruikte.',
      'Elke kopie van een repository bevat de volledige geschiedenis, dus geen enkele server is bijzonder.',
      'Het slaat inhoud op als objecten die je aanspreekt via hun hash: blobs, trees en commits.',
      'rebase, cherry-pick en bisect zijn een paar van de subcommando’s.',
      'Het versiebeheersysteem achter GitHub en GitLab.'
    ],
    funFact: 'Linus Torvalds begon in april 2005 aan Git, en binnen een paar dagen beheerde het zijn eigen broncode.'
  },
  4: {
    clues: [
      'Het begon in 2006 als hobbyproject van een medewerker van Mozilla.',
      'Het staat jaar na jaar bovenaan de lijst met meest bewonderde talen van Stack Overflow.',
      'De compiler houdt bij wie elke waarde bezit en hoe lang elke referentie leeft.',
      'Het belooft geheugenveiligheid zonder garbage collector.',
      'Packages heten crates en beheer je met Cargo.',
      'Fans noemen zichzelf Rustaceans, en de onofficiële mascotte is Ferris de krab.'
    ],
    funFact: 'De naam komt van roestschimmels, die maker Graydon Hoare "overdreven goed gebouwd om te overleven" noemde.'
  },
  5: {
    clues: [
      'Het werd in 2012 intern gebouwd, toen een enorme mobiele app zijn feed niet snel genoeg kon laden.',
      'In 2018 kreeg het een eigen foundation onder de Linux Foundation.',
      'Clients vragen precies de velden op die ze nodig hebben, niet meer en niet minder.',
      'Alles wordt beschreven met een sterk getypeerd schema, en wijzigingen gaan via mutations.',
      'Het draait meestal op één endpoint, als alternatief voor REST.',
      'Een querytaal voor API’s, bedacht bij Facebook, met een roze logo en Apollo-clients.'
    ],
    funFact: 'De "QL" staat voor query language, maar het zit aan geen enkele database vast: resolvers halen data op waar ze maar willen.'
  },
  6: {
    clues: [
      'De naam komt van het Griekse woord voor stuurman.',
      'Het stamt af van een intern Google-systeem dat Borg heet.',
      'De kleinste eenheid die je uitrolt heet een pod.',
      'Je beschrijft de gewenste toestand in YAML en controllers blijven daar naartoe bijsturen.',
      'De command-line tool heet kubectl, hoe je het ook uitspreekt.',
      'Container-orkestratie, vaak afgekort tot k8s.'
    ],
    funFact: 'De zeven spaken in het logo verwijzen naar "Project Seven of Nine", de door Star Trek geïnspireerde interne codenaam.'
  },
  7: {
    clues: [
      'De hoofdarchitect ontwierp eerder Turbo Pascal, Delphi en C#.',
      'Microsoft bracht het in oktober 2012 publiek uit.',
      'Het typesysteem is structureel, en berucht Turing-compleet.',
      'Bijna alles wat je erin schrijft verdwijnt bij het compileren.',
      'De bestanden eindigen op .ts, en je kunt het stap voor stap aan een bestaande codebase toevoegen.',
      'JavaScript met statische types.'
    ],
    funFact: 'De compiler wordt naar Go overgezet voor een ongeveer tien keer zo snelle versie; die native compiler verschijnt als versie 7.'
  }
};
