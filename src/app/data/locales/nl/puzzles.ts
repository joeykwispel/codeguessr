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
  },
  8: {
    clues: [
      'Het groeide in de jaren tachtig uit een onderzoeksproject in Berkeley onder leiding van Michael Stonebraker.',
      'De oorspronkelijke naam zei dat het na Ingres kwam.',
      'Halverwege de jaren negentig kreeg het SQL-ondersteuning en een naam die dat liet zien.',
      'Het staat bekend om MVCC, extensies zoals PostGIS en JSONB-kolommen.',
      'De command-line client heet psql, en de mascotte is een olifant die Slonik heet.',
      'De open-source relationele database die meestal Postgres wordt genoemd.'
    ],
    funFact: 'De olifantmascotte Slonik is vernoemd naar het Russische woord voor "olifantje".'
  },
  9: {
    clues: [
      'Het werd in 2015 aangekondigd als gezamenlijk project van de teams achter alle vier grote browser-engines.',
      'In 2019 werd het een W3C Recommendation.',
      'Het is een stack-gebaseerde virtuele machine met een compact binair formaat.',
      'Het tekstformaat gebruikt S-expressions, in bestanden die op .wat eindigen.',
      'Je compileert Rust, C of C++ ernaartoe en draait het resultaat bijna op native snelheid in de browser.',
      'Vaak afgekort tot Wasm, de vierde taal van het web.'
    ],
    funFact: 'Het groeide uit asm.js, een strikte subset van JavaScript die browsers vooraf konden optimaliseren.'
  },
  10: {
    clues: [
      'De maker begon eraan als hobbyproject in de kerstvakantie van 1989.',
      'Die maker had tot 2018 de titel "Benevolent Dictator For Life".',
      'De stijlgids staat bekend onder een nummer: PEP 8.',
      'Inspringen is niet optioneel: het bepaalt de blokken.',
      'import this toont de Zen ervan, en pip installeert de packages.',
      'Vernoemd naar een Britse comedygroep, niet naar een slang.'
    ],
    funFact: 'Guido van Rossum noemde het naar Monty Python’s Flying Circus; het slangenlogo kwam later.'
  },
  11: {
    clues: [
      'De tweede grote versie was een complete herschrijving die met de eerste weinig meer dan de naam deelde.',
      'Google onderhoudt het, en sinds die herschrijving gebruikt het TypeScript.',
      'Het leunt op dependency injection, decorators en sinds kort signals.',
      'De CLI genereert componenten, services en hele workspaces.',
      'Standalone componenten vervingen NgModules als standaard.',
      'Het framework van Google met een rood schildlogo, opvolger van AngularJS.'
    ],
    funFact: 'Codeguessr zelf is ermee gebouwd, vooraf gerenderd naar statische HTML voor GitHub Pages.'
  },
  12: {
    clues: [
      'De eerste versie van Tim Berners-Lee had precies één methode.',
      'Versie 1.1 werd in 1997 gestandaardiseerd en hield verbindingen standaard open.',
      'Elk antwoord begint met een statuscode van drie cijfers.',
      'Iedereen kent 404; minder mensen kennen 418, "I\'m a teapot".',
      'De derde versie draait over QUIC in plaats van TCP.',
      'Het protocol achter elke webpagina; met een S erachter is het versleuteld.'
    ],
    funFact: 'Versie 0.9 had één methode, GET, en helemaal geen headers of statuscodes.'
  },
  13: {
    clues: [
      'Een Italiaanse developer schreef het in 2009 om een startup voor realtime webanalyse te versnellen.',
      'Het houdt alles in het geheugen en doet het meeste werk op één thread.',
      'Naast strings biedt het lists, sets, sorted sets, hashes en streams.',
      'Mensen gebruiken het als cache, message broker en rate limiter.',
      'SET, GET, EXPIRE en INCR zijn een paar van de commando’s.',
      'Een in-memory key-value store waarvan de naam staat voor REmote DIctionary Server.'
    ],
    funFact: 'Een licentiewijziging in 2024 leidde tot Valkey, een fork met steun van de Linux Foundation.'
  },
  14: {
    clues: [
      'De maker kondigde het in 1991 aan als "gewoon een hobby, wordt niet groot en professioneel zoals GNU".',
      'Een beheerder van een FTP-server koos de naam; de maker wilde het Freax noemen.',
      'Strikt genomen is het alleen een kernel, al bedoelen mensen meestal een heel besturingssysteem.',
      'Het draait op alle 500 snelste supercomputers ter wereld en op elke Android-telefoon.',
      'Distributies zijn onder meer Debian, Fedora, Arch en Ubuntu.',
      'De kernel van Linus Torvalds, met een pinguïn als mascotte: Tux.'
    ],
    funFact: 'Sinds november 2017 draait elk systeem op de TOP500-lijst van supercomputers erop.'
  },
  15: {
    clues: [
      'Een oud-medewerker van Google die met AngularJS had gewerkt, begon het in 2013.',
      'Het noemt zichzelf "het progressieve framework".',
      'Single-file componenten bevatten template, script en stijl samen.',
      'Versie 3 voegde de Composition API toe naast de Options API.',
      'Het ecosysteem heeft Pinia voor state en Nuxt voor full-stack apps.',
      'Het framework van Evan You, met een groen V-vormig logo.'
    ],
    funFact: 'De naam is Frans voor "view", de V in MVC.'
  },
  16: {
    clues: [
      'Drie engineers ontwierpen het in 2007 bij Google, terwijl ze wachtten tot een grote C++-build klaar was.',
      'Twee van hen, Ken Thompson en Rob Pike, werkten ook aan Unix en UTF-8.',
      'Het heeft geen classes, en de eerste twaalf jaar ook geen generics.',
      'Het compileert naar één statische binary, en de formatter beslecht elke stijldiscussie.',
      'Concurrency komt van goroutines en channels.',
      'De taal met een gopher als mascotte, ook wel Golang genoemd.'
    ],
    funFact: 'De gopher is getekend door Renée French, die ook Glenda tekende, het konijn van Plan 9.'
  },
  17: {
    clues: [
      'Het werd in 2011 gestandaardiseerd als RFC 6455.',
      'Een verbinding begint als gewoon HTTP-verzoek met een Upgrade-header.',
      'Na de handshake kunnen beide kanten berichten sturen wanneer ze willen.',
      'Het is de gebruikelijke keuze voor chat-apps, live dashboards en multiplayergames in de browser.',
      'De URL’s beginnen met ws:// of wss://.',
      'Een full-duplex verbinding tussen browser en server over één TCP-socket.'
    ],
    funFact: 'De server bewijst dat hij de handshake begreep door de sleutel van de client te hashen met een vaste GUID, 258EAFA5-E914-47DA-95CA-C5AB0DC85B11.'
  },
  18: {
    clues: [
      'Ryan Dahl presenteerde het in 2009 op JSConf EU.',
      'Het haalde de V8-engine van Google uit de browser.',
      'De event loop is gebouwd op libuv en handelt I/O af zonder te blokkeren.',
      'Een package manager die een jaar later verscheen, maakte het enorm populair.',
      'Je schrijft er servers mee in JavaScript, eerst met require() en later met ES modules.',
      'De server-side JavaScript-runtime met een groen zeshoekig logo.'
    ],
    funFact: 'De maker bouwde later Deno, deels om op te lossen wat hij zijn spijtpunten erover noemde.'
  },
  19: {
    clues: [
      'Douglas Crockford zegt dat hij het ontdekte in plaats van uitvond.',
      'Het heeft bewust geen commentaar, zodat niemand dat kon misbruiken voor parse-instructies.',
      'Het kent alleen objecten, arrays, strings, getallen, booleans en null.',
      'Een komma na het laatste element is er een syntaxfout.',
      'In de browser zet je ernaar en ervan om met stringify en parse.',
      'JavaScript Object Notation.'
    ],
    funFact: 'De ECMA-standaard ervan heeft nummer ECMA-404, wat developers verdacht toepasselijk vinden.'
  },
  20: {
    clues: [
      'Een graphics-redacteur bij The Guardian maakte het in 2016.',
      'Het noemt zichzelf een compiler, niet een framework dat je naar de browser stuurt.',
      'Het heeft geen virtuele DOM: componenten compileren naar code die de pagina direct bijwerkt.',
      'Versie 5 introduceerde runes zoals $state en $derived.',
      'Componenten staan in bestanden met een eigen extensie, en het app-framework erbovenop eindigt op "Kit".',
      'Het "verdwijnende framework" van Rich Harris, met een oranje S als logo.'
    ],
    funFact: 'Vercel nam Rich Harris in 2021 aan om er fulltime aan te werken.'
  },
  21: {
    clues: [
      'Het werd in 2000 geschreven voor software op een geleidewapenjager van de Amerikaanse marine.',
      'De broncode is publiek domein, en in plaats van een licentie krijg je een zegen.',
      'Een hele database staat in één gewoon bestand.',
      'Het is waarschijnlijk de meest gebruikte database-engine: elke telefoon en browser heeft het aan boord.',
      'Er is geen serverproces; het draait als library binnen je applicatie.',
      'De kleine ingebedde SQL-database met een veer in het logo.'
    ],
    funFact: 'De makers willen het tot 2050 ondersteunen, en de Amerikaanse Library of Congress raadt het bestandsformaat aan voor langdurige opslag.'
  },
  22: {
    clues: [
      'Bram Moolenaar bracht het in 1991 voor het eerst uit, voor de Amiga.',
      'Het was charityware: gebruikers werd gevraagd te doneren aan kinderen in Oeganda.',
      'Het werkt met modi: normal mode voor commando’s, insert mode voor typen.',
      'De toetsen h, j, k en l bewegen de cursor.',
      'Hoe je het afsluit is een van de bekendste vragen op Stack Overflow.',
      'Vi IMproved, met een moderne fork die Neovim heet.'
    ],
    funFact: 'De Stack Overflow-vraag over hoe je het afsluit, is miljoenen keren bekeken.'
  },
  23: {
    clues: [
      'JetBrains kondigde het in 2011 aan en vernoemde het naar een plek, net als de taal die het wilde vervangen.',
      'Het draait op de JVM en werkt naadloos samen met Java-code.',
      'Het typesysteem maakt onderscheid tussen nullable en non-null types.',
      'Coroutines zijn het antwoord op asynchrone code.',
      'In 2019 maakte Google het de voorkeurstaal voor Android.',
      'De taal van JetBrains, in bestanden die op .kt eindigen.'
    ],
    funFact: 'Java is vernoemd naar een eiland, en dit ook: Kotlin, een eiland in de Finse Golf.'
  },
  24: {
    clues: [
      'HashiCorp bracht het in 2014 uit.',
      'Een licentiewijziging in 2023 leidde tot een fork die OpenTofu heet.',
      'Je beschrijft infrastructuur in HCL en het berekent een plan.',
      'Het houdt in een state-bestand bij wat het heeft aangemaakt.',
      'plan, apply en destroy zijn de belangrijkste commando’s.',
      'De infrastructure-as-codetool van HashiCorp, met .tf-bestanden.'
    ],
    funFact: 'IBM sprak in 2024 af HashiCorp te kopen voor ongeveer 6,4 miljard dollar.'
  },
  25: {
    clues: [
      'Het begon in 2006, toen developers bij Twitter wilden dat apps accounts konden gebruiken zonder om wachtwoorden te vragen.',
      'Versie 2.0 verscheen in 2012 als RFC 6749.',
      'Het gaat over autorisatie, niet authenticatie; OpenID Connect voegt de identiteitslaag toe.',
      'De flows zijn onder meer authorization code, client credentials en device code.',
      'PKCE beschermt de authorization code flow voor apps die geen geheim kunnen bewaren.',
      'Het protocol achter "Inloggen met Google" dat access tokens uitdeelt.'
    ],
    funFact: 'De Google-login van Codeguessr zelf gebruikt de authorization code flow met PKCE, via Supabase.'
  },
  26: {
    clues: [
      'Håkon Wium Lie stelde het in 1994 voor, toen hij bij CERN werkte.',
      'Het eerste level werd in 1996 een W3C Recommendation.',
      'Specificiteit en de cascade bepalen welke regel wint.',
      'Flexbox en Grid maakten layout eindelijk begrijpelijk.',
      'Recente toevoegingen zijn :has(), nesting en container queries.',
      'Cascading Style Sheets.'
    ],
    funFact: 'Jarenlang was "hoe centreer ik een div" de vaste grap; nu is het antwoord "display: grid; place-items: center".'
  },
  27: {
    clues: [
      'Adam Wathan bracht het in 2017 uit, na een blogpost die semantische classnamen ter discussie stelde.',
      'In plaats van componenten krijg je kleine classes met één doel.',
      'Critici vinden dat het inline styles terugbrengt in de HTML; fans willen nooit meer een class bedenken.',
      'De build-stap scant je bestanden en genereert alleen de classes die je gebruikt.',
      'De classes zien eruit als flex, pt-4, text-center en md:grid-cols-2.',
      'Het utility-first CSS-framework.'
    ],
    funFact: 'Versie 4 verhuisde de configuratie van een JavaScript-bestand naar CSS zelf.'
  },
  28: {
    clues: [
      'Igor Sysoev begon er in 2002 aan om het C10k-probleem op te lossen.',
      'Het werd eerst gebouwd voor Rambler, een Russisch webportaal.',
      'Het werkt event-driven in plaats van met een thread per verbinding.',
      'Het is webserver, reverse proxy, load balancer en cache in één.',
      'De naam spreek je uit als "engine-x".',
      'De webserver die Apache inhaalde als meest gebruikte op het web.'
    ],
    funFact: 'F5 Networks kocht het bedrijf erachter in 2019 voor 670 miljoen dollar.'
  },
  29: {
    clues: [
      'Het bedrijf 10gen bouwde het in 2007, oorspronkelijk als onderdeel van een platform-as-a-service.',
      'De naam komt van het Engelse woord "humongous".',
      'Het slaat documenten op als BSON, een binaire vorm van JSON.',
      'Je bevraagt het met find() en aggregation pipelines in plaats van SQL.',
      'De beheerde clouddienst heet Atlas.',
      'De bekendste documentdatabase, met een groen blaadje als logo.'
    ],
    funFact: 'Een animatievideo uit 2010 die het bespotte als "web scale" werd een van de bekendste programmeermemes.'
  },
  30: {
    clues: [
      'Chris Lattner begon er in 2010 aan, nadat hij LLVM had gemaakt.',
      'Apple presenteerde het op WWDC 2014.',
      'Optionals dwingen je om met ontbrekende waarden om te gaan.',
      'Het verving Objective-C als standaardtaal voor Apple-platformen.',
      'Playgrounds voeren je code regel voor regel uit terwijl je typt.',
      'De taal van Apple voor iOS- en macOS-apps, met een vogel als logo.'
    ],
    funFact: 'Het werd in december 2015 open source en draait ook op Linux en Windows.'
  },
  31: {
    clues: [
      'Tobias Koppers begon er in 2012 aan als hobbyproject.',
      'Instagram was een van de eerste grote gebruikers.',
      'Het bouwt een dependency graph vanaf een entry point en levert bundles op.',
      'Loaders zetten bestanden om, en plugins haken in op de hele compilatie.',
      'Het configbestand is berucht lang, en hot module replacement kwam uit de dev-server ervan.',
      'De JavaScript module bundler met een blauwe kubus als logo, nu uitgedaagd door Vite.'
    ],
    funFact: 'De maker bouwde het nadat zijn pull request voor code splitting in een andere bundler niet werd geaccepteerd.'
  },
  32: {
    clues: [
      'Paul Mockapetris ontwierp het in 1983 als vervanging van één gedeeld hosts-bestand.',
      'Bovenaan staan dertien benoemde root-server-identiteiten.',
      'Het draait meestal over UDP-poort 53.',
      'A, AAAA, CNAME en MX zijn een paar van de recordtypes.',
      'Een beroemde sysadmin-haiku eindigt met: "It was ___."',
      'Het telefoonboek van internet, dat namen omzet in IP-adressen.'
    ],
    funFact: 'Codeguessr woont op een van de CNAME-records ervan: codeguessr wijst naar een github.io-host.'
  },
  33: {
    clues: [
      'Het team van James Gosling begon er in 1991 aan bij Sun, onder de naam Oak.',
      'De slogan was "write once, run anywhere".',
      'Het compileert naar bytecode voor een virtuele machine.',
      'Oracle is sinds de overname van Sun in 2010 de eigenaar.',
      'Minecraft werd er oorspronkelijk in geschreven, net als talloze enterprise-backends.',
      'De taal met een koffiekop als logo en public static void main.'
    ],
    funFact: 'Het kreeg een nieuwe naam omdat "Oak" al een merknaam was; de nieuwe naam komt van koffie.'
  },
  34: {
    clues: [
      'José Valim maakte het in 2011, na jaren werk aan Ruby on Rails.',
      'Het compileert naar bytecode voor de BEAM, de virtuele machine van Erlang.',
      'Lichtgewicht processen en supervisors laten systemen zichzelf herstellen.',
      'De pipe-operator |> koppelt functieaanroepen aan elkaar.',
      'Phoenix is het bekendste webframework ervoor, beroemd om LiveView.',
      'De functionele taal met een paarse druppel als logo en .ex-bestanden.'
    ],
    funFact: 'Sinds versie 1.17 in 2024 krijgt het stap voor stap een verzamelingstheoretisch typesysteem.'
  },
  35: {
    clues: [
      'Het begon in 2004 bij Sun onder een andere naam: Hudson.',
      'In 2011 kreeg het de huidige naam, na een conflict met Oracle.',
      'De pipelines schrijf je in een DSL op basis van Groovy.',
      'Meer dan duizend plugins breiden het uit.',
      'De mascotte is een butler.',
      'De zelfgehoste automatiseringsserver die al CI draaide lang voor GitHub Actions.'
    ],
    funFact: 'De maker, Kohsuke Kawaguchi, schreef het omdat hij steeds de build brak.'
  },
  36: {
    clues: [
      'Een bedrijf dat toen Zeit heette, bracht het in 2016 uit.',
      'Het begon als manier om React op de server te renderen met bijna geen configuratie.',
      'Pagina’s waren bestanden in een pages-map, en later in een app-map.',
      'De meeste developers leerden React Server Components erdoor kennen.',
      'getServerSideProps en incremental static regeneration zijn termen ervan.',
      'Het React-framework van Vercel.'
    ],
    funFact: 'Het bedrijf erachter heette Zeit tot het zich in 2020 Vercel ging noemen.'
  },
  37: {
    clues: [
      'Brian Fox schreef het in 1989 voor het GNU-project.',
      'De naam is een woordgrap op de shell die het verving, geschreven door Stephen Bourne.',
      'Shellshock, een bug uit 2014 in hoe het met omgevingsvariabelen omging, trof miljoenen servers.',
      'Het is de standaardshell op de meeste Linux-distributies; macOS stapte in 2019 over op zsh.',
      'Scripts beginnen met #!/bin/… en variabelen zien eruit als $HOME.',
      'De Bourne Again SHell.'
    ],
    funFact: 'macOS leverde jarenlang een versie uit 2007 mee, omdat nieuwere versies onder de GPLv3-licentie vallen.'
  },
  38: {
    clues: [
      'LinkedIn bouwde het rond 2010 om enorme hoeveelheden activiteitsdata te verplaatsen.',
      'De maker noemde het naar een schrijver, omdat het "een systeem is dat geoptimaliseerd is voor schrijven".',
      'Het slaat berichten op in een append-only, gepartitioneerde, gerepliceerde log.',
      'Consumers houden zelf hun offset bij en kunnen de geschiedenis opnieuw afspelen.',
      'De makers richtten Confluent op om het als dienst te verkopen.',
      'Het gedistribueerde event-streamingplatform van Apache, vernoemd naar Franz.'
    ],
    funFact: 'Jay Kreps vernoemde het naar schrijver Franz Kafka, simpelweg omdat hij zijn werk mooi vond.'
  },
  39: {
    clues: [
      'Het groeide uit Stubby, het interne RPC-systeem van Google.',
      'Google maakte het in 2015 open source; nu is het een CNCF-project.',
      'Het draait over HTTP/2 en ondersteunt streaming in beide richtingen.',
      'Services en berichten definieer je in .proto-bestanden.',
      'Protocol Buffers zijn het standaard serialisatieformaat.',
      'Het snelle RPC-framework van Google, waarvan de "g" in elke release iets anders betekent.'
    ],
    funFact: 'Elke release geeft de "g" een nieuwe betekenis, van "good" en "green" tot "gravity" en "goose".'
  },
  40: {
    clues: [
      'Rasmus Lerdorf schreef het in 1994 om bezoeken aan zijn online cv bij te houden.',
      'De maker heeft gezegd dat hij nooit van plan was een programmeertaal te maken.',
      'Alle variabelen beginnen met een dollarteken.',
      'WordPress is erin geschreven, en daarmee een groot deel van het web.',
      'De naam stond ooit voor Personal Home Page; nu is het een recursief acroniem.',
      'Hypertext Preprocessor, met een olifant als mascotte: de elePHPant.'
    ],
    funFact: 'Versie 6 is nooit verschenen: de Unicode-herschrijving werd gestaakt en de volgende release werd 7.'
  },
  41: {
    clues: [
      'Het werd gebouwd bij een krant in Lawrence, Kansas, en in 2005 uitgebracht.',
      'Het is vernoemd naar een jazzgitarist.',
      'Het levert automatisch een beheerinterface mee.',
      'ORM, migraties en templates zitten er allemaal in: "batteries included".',
      'De slogan: "The web framework for perfectionists with deadlines."',
      'Het bekendste webframework voor Python, vernoemd naar Django Reinhardt.'
    ],
    funFact: 'Instagram draait een van de grootste installaties ervan ter wereld.'
  },
  42: {
    clues: [
      'Een commissie maakte het in 1990 om de vele luie functionele talen van die tijd samen te brengen.',
      'Het is puur functioneel: functies hebben geen bijwerkingen.',
      'Het evalueert lui, dus oneindige lijsten zijn geen probleem.',
      'Bijwerkingen lopen via monads, het onderwerp van talloze tutorials.',
      'GHC is de belangrijkste compiler, en Cabal en Stack bouwen de projecten.',
      'De puur functionele taal vernoemd naar logicus Haskell Curry.'
    ],
    funFact: 'Pandoc, de universele documentconverter, is erin geschreven.'
  },
  43: {
    clues: [
      'Microsoft kondigde het in 2015 aan op de Build-conferentie.',
      'Het is gebouwd op Electron, en de editor-kern werd de Monaco-editor.',
      'Het introduceerde het Language Server Protocol.',
      'De marketplace heeft tienduizenden extensies.',
      'Stack Overflow-enquêtes noemen het jaar na jaar de populairste ontwikkelomgeving.',
      'De gratis code-editor van Microsoft, niet te verwarren met Visual Studio.'
    ],
    funFact: 'De broncode valt onder MIT, maar de versie van Microsoft voegt telemetrie en branding toe; VSCodium haalt beide weg.'
  },
  44: {
    clues: [
      'De maker introduceerde het in 2018 in een talk over tien dingen waar hij spijt van had.',
      'De naam is een anagram van de voorganger.',
      'Het is geschreven in Rust en draait TypeScript zonder build-stap.',
      'Scripts krijgen geen toegang tot bestanden, netwerk of omgeving tenzij je die met flags toestaat.',
      'Versie 2 voegde volledige compatibiliteit met npm en package.json toe.',
      'De tweede JavaScript-runtime van Ryan Dahl, met een dinosaurus als mascotte.'
    ],
    funFact: 'In 2024 vroeg het bedrijf erachter het Amerikaanse merkenbureau om Oracles merk "JavaScript" te schrappen.'
  },
  45: {
    clues: [
      'Een Finse onderzoeker schreef het in 1995, na een aanval waarbij wachtwoorden op zijn universiteitsnetwerk werden afgeluisterd.',
      'De standaardpoort, 22, ligt tussen die van de twee oudere protocollen die het verving.',
      'Het maakte telnet en rlogin overbodig.',
      'Met public-key-authenticatie log je in zonder wachtwoord te typen.',
      'Het kan poorten doorsturen, verkeer tunnelen en bestanden kopiëren met scp.',
      'Secure Shell.'
    ],
    funFact: 'Tatu Ylönen kreeg poort 22 door IANA te mailen en erom te vragen; de volgende dag was het nummer van hem.'
  },
  46: {
    clues: [
      'David Heinemeier Hansson haalde het in 2004 uit Basecamp.',
      'De filosofie: convention over configuration, en don’t repeat yourself.',
      'Een beroemde video uit 2005 liet zien hoe je er in 15 minuten een blog mee bouwt.',
      'ActiveRecord koppelt je databasetabellen aan classes.',
      'GitHub, Shopify en Basecamp draaien erop.',
      'Het Ruby-webframework dat meestal gewoon Rails heet.'
    ],
    funFact: 'De maker racet ook auto’s, en won in 2014 zijn klasse in de 24 uur van Le Mans.'
  },
  47: {
    clues: [
      'Anders Hejlsberg leidde rond 2000 het ontwerp ervan bij Microsoft.',
      'De werknaam was Cool: "C-like Object Oriented Language".',
      'LINQ bracht query-syntax naar de taal zelf.',
      'async/await werd hier gemeengoed, voordat JavaScript het overnam.',
      'Het draait op .NET en drijft Unity-games aan.',
      'De taal van Microsoft waarvan de naam een muzieknoot is.'
    ],
    funFact: 'Het kruis in de naam is een halve toon hoger dan de noot; Microsoft ziet er ook graag vier gestapelde plustekens in.'
  },
  48: {
    clues: [
      'De maker schreef eerder een zoekbibliotheek om zijn vrouw te helpen haar recepten te doorzoeken.',
      'Het is gebouwd op de Apache Lucene-library.',
      'Het slaat JSON-documenten op in inverted indexes, verdeeld over shards.',
      'Het is de E in de ELK-stack, samen met Logstash en Kibana.',
      'Een licentiewijziging in 2021 zette AWS ertoe aan het te forken als OpenSearch.',
      'De gedistribueerde zoek- en analyse-engine van Elastic.'
    ],
    funFact: 'In 2024 werd het weer open source door de AGPL als licentieoptie toe te voegen.'
  },
  49: {
    clues: [
      'Evan You maakte het in 2020, terwijl hij aan de volgende versie van zijn framework werkte.',
      'De naam is het Franse woord voor "snel".',
      'Tijdens ontwikkeling serveert het native ES modules en slaat het bundelen over.',
      'Het gebruikt esbuild voor dependencies en Rollup, nu Rolldown, voor productiebuilds.',
      'Het is de standaard voor SvelteKit, Nuxt, Astro en de meeste nieuwe React-projecten.',
      'De snelle frontend-buildtool met een paarse bliksemschicht als logo.'
    ],
    funFact: 'Vitest, de bijbehorende testrunner, gebruikt dezelfde config en plugins.'
  },
  50: {
    clues: [
      'Het volgde een protocol op dat Netscape halverwege de jaren negentig ontwierp.',
      'Versie 1.3 uit 2018 bracht de handshake terug tot één round trip.',
      'Het vertrouwt op certificaten, ondertekend door certificaatautoriteiten, om identiteit te bewijzen.',
      'Heartbleed was een bug uit 2014 in de populairste library die het implementeert.',
      'Let’s Encrypt maakte de certificaten ervoor gratis.',
      'Transport Layer Security, de S in HTTPS.'
    ],
    funFact: 'Mensen zeggen nog steeds "SSL", terwijl alle SSL-versies al jaren zijn afgeschaft.'
  },
  51: {
    clues: [
      'Het werd in 1993 gemaakt aan een universiteit in Rio de Janeiro.',
      'De naam is het Portugese woord voor "maan".',
      'Tables zijn de enige datastructuur, voor arrays, maps en objecten tegelijk.',
      'Arrays beginnen bij index 1.',
      'Roblox, add-ons voor World of Warcraft en Neovim-configuraties gebruiken het.',
      'De kleine inbedbare scripttaal uit Brazilië.'
    ],
    funFact: 'Roblox bouwde er een eigen getypeerd dialect van, Luau.'
  },
  52: {
    clues: [
      'Facebook bracht het in 2014 uit.',
      'Het oorspronkelijke verkoopargument was dat het elke module automatisch mockte.',
      'Snapshot testing maakte het beroemd.',
      'describe, it en expect zijn de kernfuncties.',
      'Het was de standaard testrunner in create-react-app.',
      'Het JavaScript-testframework waarvan de naam een grap is.'
    ],
    funFact: 'Meta droeg het in 2022 over aan de OpenJS Foundation.'
  },
  53: {
    clues: [
      'Michael DeHaan bracht het in 2012 uit.',
      'De naam komt van een apparaat uit sciencefiction dat sneller dan het licht communiceert.',
      'Het is agentless: het maakt via SSH verbinding met machines.',
      'Playbooks in YAML beschrijven de gewenste toestand.',
      'Red Hat kocht het bedrijf erachter in 2015.',
      'De agentless automatiseringstool van Red Hat.'
    ],
    funFact: 'Het woord werd bedacht door Ursula K. Le Guin, in haar roman Rocannon’s World uit 1966.'
  },
  54: {
    clues: [
      'Bjarne Stroustrup begon er in 1979 aan bij Bell Labs, als "C with Classes".',
      'De naam is een grap over de increment-operator.',
      'De templates bleken per ongeluk Turing-compleet te zijn.',
      'RAII koppelt de levensduur van een resource aan die van een object.',
      'Unreal Engine, Chrome en de meeste game-engines zijn erin geschreven.',
      'De uitbreiding van C door Stroustrup, met om de drie jaar een nieuwe ISO-standaard.'
    ],
    funFact: 'De standaard wordt elke drie jaar herzien; de editie van 2023 is de zevende.'
  },
  55: {
    clues: [
      'Roy Fielding beschreef het in 2000 in zijn proefschrift.',
      'Hij was ook medeauteur van de HTTP/1.1-specificatie.',
      'Het is een architectuurstijl, geen protocol of standaard.',
      'Statelessness en een uniforme interface horen bij de eisen ervan.',
      'Resources hebben URL’s en je wijzigt ze met GET, POST, PUT en DELETE.',
      'Representational State Transfer.'
    ],
    funFact: 'Fielding klaagt dat de meeste API’s die zich ernaar noemen hypermedia negeren, een van de kerneisen.'
  },
  56: {
    clues: [
      'Het begon in 1976 als een verzameling macro’s voor de TECO-editor.',
      'Richard Stallman schreef de GNU-versie in 1984.',
      'Je breidt het uit in, en het is grotendeels geschreven in, een eigen Lisp-dialect.',
      'De sneltoetsen leverden de bijnaam "Escape Meta Alt Control Shift" op.',
      'Org mode, Magit en een ingebouwde psychotherapeut draaien erin.',
      'De eeuwige rivaal van Vim in de editor wars.'
    ],
    funFact: 'M-x doctor start een therapeut in ELIZA-stijl, gewoon in de editor.'
  },
  57: {
    clues: [
      'Martin Odersky ontwierp het aan de EPFL in Zwitserland en bracht het in 2004 uit.',
      'De naam is kort voor "scalable language".',
      'Het combineert objectgeoriënteerd en functioneel programmeren op de JVM.',
      'Twitter verhuisde een groot deel van zijn backend van Ruby ernaartoe.',
      'Apache Spark en Akka zijn erin geschreven.',
      'De JVM-taal waarvan versie 3 tijdens de ontwikkeling Dotty heette.'
    ],
    funFact: 'De maker schreef ook de generics van Java en de javac-compiler die daarmee kwam.'
  },
  58: {
    clues: [
      'Het werd in 2007 voor het eerst uitgebracht door een joint venture van twee Britse bedrijven.',
      'Het is geschreven in Erlang.',
      'Het werd gebouwd om AMQP 0-9-1 te implementeren.',
      'Producers publiceren naar exchanges, die berichten naar queues routeren.',
      'De beheerinterface draait meestal op poort 15672.',
      'De populaire open-source message broker met een dier in de naam.'
    ],
    funFact: 'SpringSource, onderdeel van VMware, kocht het in 2010; via Pivotal en VMware is Broadcom nu de eigenaar.'
  },
  59: {
    clues: [
      'John Resig kondigde het in 2006 aan op BarCamp NYC.',
      'Het motto was "write less, do more".',
      'Het streek de verschillen tussen Internet Explorer en de rest glad.',
      'De dollarteken-functie selecteert elementen met CSS-selectors.',
      '$(document).ready() was de eerste regel van talloze scripts.',
      'De JavaScript-library die ooit op het grootste deel van het web draaide.'
    ],
    funFact: 'Zelfs in de jaren 2020 draait het nog op het merendeel van de miljoen grootste websites.'
  },
  60: {
    clues: [
      'John Gruber maakte het in 2004, met hulp van Aaron Swartz.',
      'Het doel was platte tekst die al goed leest voordat hij wordt omgezet.',
      'CommonMark wilde de onduidelijkheden in de oorspronkelijke beschrijving oplossen.',
      'Een # maakt een kop en sterretjes geven nadruk.',
      'README-bestanden op GitHub zijn meestal erin geschreven.',
      'De lichtgewicht opmaaktaal, in bestanden die op .md eindigen.'
    ],
    funFact: 'De README van Codeguessr is, zoals die van bijna elke repository, erin geschreven.'
  }
};
