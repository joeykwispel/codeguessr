import type { PuzzleText } from '../../shared/types';

/** Clues run from hardest/vaguest to easiest/most specific. Keyed by puzzle id (data/shared/puzzles.ts). */
export const puzzles: Record<number, PuzzleText> = {
  1: {
    clues: [
      "Born inside a social network's ads team in 2011, and open-sourced two years later.",
      'Its creators argued that markup and logic belong in the same file, which upset a lot of people at first.',
      'It popularised the idea of a virtual DOM that gets diffed before the real one is touched.',
      'Hooks such as useState and useEffect replaced most of its class components.',
      'You usually write its components in JSX.',
      "Meta's JavaScript library for building user interfaces, with a Native sibling for mobile apps."
    ],
    funFact: "React ran in production on Facebook's News Feed in 2011 and on Instagram in 2012, before it was open-sourced at JSConf US in 2013."
  },
  2: {
    clues: [
      'It started as an internal project at a platform-as-a-service company called dotCloud.',
      'It made Linux namespaces and cgroups usable by people who had never heard of them.',
      'Its images are built in layers, and every instruction adds one.',
      '"It works on my machine" became "then we\'ll ship your machine".',
      'You describe an image in a file full of FROM, RUN and COPY instructions.',
      'Containers, a whale for a logo, and a Hub full of images.'
    ],
    funFact: 'Docker was first shown to the world in a five-minute lightning talk by Solomon Hykes at PyCon 2013.'
  },
  3: {
    clues: [
      'Its author joked that he names all his projects after himself; this name is British slang for an unpleasant person.',
      'It was written in about ten days, after a licence dispute over the tool the Linux kernel used before.',
      'Every copy of a repository holds the full history, so no single server is special.',
      'It stores content as objects addressed by their hash: blobs, trees and commits.',
      'rebase, cherry-pick and bisect are some of its subcommands.',
      'The version control system behind GitHub and GitLab.'
    ],
    funFact: 'Linus Torvalds started Git in April 2005, and within days it was managing its own source code.'
  },
  4: {
    clues: [
      'It began in 2006 as the personal side project of a Mozilla employee.',
      "It has topped Stack Overflow's list of most admired languages year after year.",
      'Its compiler tracks who owns every value and how long every reference lives.',
      'It promises memory safety without a garbage collector.',
      'Its packages are called crates and are managed with Cargo.',
      'Its fans call themselves Rustaceans, and its unofficial mascot is Ferris the crab.'
    ],
    funFact: "It is named after the rust fungi, which its creator Graydon Hoare called 'over-engineered for survival'."
  },
  5: {
    clues: [
      'It was built internally in 2012 while a huge mobile app struggled to load its feed quickly.',
      'In 2018 it moved to its own foundation under the Linux Foundation.',
      'Clients ask for exactly the fields they need, no more and no less.',
      'Everything is described by a strongly typed schema, and writes go through mutations.',
      'It is usually served from a single endpoint, as an alternative to REST.',
      'A query language for APIs, created at Facebook, with a pink logo and Apollo clients.'
    ],
    funFact: "The 'QL' stands for query language, but it isn't tied to any database: resolvers can fetch data from anywhere."
  },
  6: {
    clues: [
      'Its name comes from the Greek word for helmsman.',
      'It descends from an internal Google system called Borg.',
      'Its smallest deployable unit is called a pod.',
      'You declare the desired state in YAML and controllers keep reconciling towards it.',
      'Its command-line tool is kubectl, however you choose to pronounce it.',
      'Container orchestration, often shortened to k8s.'
    ],
    funFact: "The seven spokes in its logo refer to 'Project Seven of Nine', the Star Trek-inspired internal codename."
  },
  7: {
    clues: [
      'Its lead architect previously designed Turbo Pascal, Delphi and C#.',
      'Microsoft released it publicly in October 2012.',
      'Its type system is structural, and famously Turing complete.',
      'Almost everything you write in it disappears at compile time.',
      'Its files end in .ts, and you can add it to an existing codebase gradually.',
      'JavaScript with static types.'
    ],
    funFact: 'Its compiler is being ported to Go for a roughly tenfold speed-up; the native compiler ships as version 7.'
  },
  8: {
    clues: [
      'It grew out of a Berkeley research project led by Michael Stonebraker in the 1980s.',
      'Its original name said it came after Ingres.',
      'It gained SQL support in the mid-1990s and changed its name to show it.',
      'It is known for MVCC, extensions such as PostGIS, and JSONB columns.',
      'Its command-line client is psql, and its mascot is an elephant called Slonik.',
      'The open-source relational database usually shortened to Postgres.'
    ],
    funFact: "Its elephant mascot, Slonik, is named after the Russian word for 'little elephant'."
  },
  9: {
    clues: [
      'It was announced in 2015 as a joint effort by the teams behind all four major browser engines.',
      'It became a W3C Recommendation in 2019.',
      'It is a stack-based virtual machine with a compact binary format.',
      'Its text format uses S-expressions, in files ending in .wat.',
      'You compile Rust, C or C++ to it and run the result in a browser at near-native speed.',
      'Often shortened to Wasm, the fourth language of the web.'
    ],
    funFact: 'It grew out of asm.js, a strict subset of JavaScript that browsers could optimise ahead of time.'
  },
  10: {
    clues: [
      'Its creator started it as a hobby project over the Christmas holidays of 1989.',
      "That creator held the title 'Benevolent Dictator For Life' until 2018.",
      'Its style guide is known by a number: PEP 8.',
      'Indentation is not optional: it defines the blocks.',
      'import this prints its Zen, and pip installs its packages.',
      'Named after a British comedy group, not a snake.'
    ],
    funFact: "Guido van Rossum named it after Monty Python's Flying Circus; the snake logo came later."
  },
  11: {
    clues: [
      'Its second major version was a complete rewrite that shared little more than a name with the first.',
      'Google maintains it, and it has used TypeScript since that rewrite.',
      'It leans on dependency injection, decorators and, more recently, signals.',
      'Its CLI generates components, services and whole workspaces.',
      'Standalone components replaced NgModules as its default.',
      "Google's framework with a red shield logo, successor to AngularJS."
    ],
    funFact: 'Codeguessr itself is built with it, prerendered to static HTML for GitHub Pages.'
  },
  12: {
    clues: [
      "Tim Berners-Lee's first version of it had exactly one method.",
      'Version 1.1 was standardised in 1997 and kept connections open by default.',
      'Every response starts with a three-digit status code.',
      'Everyone knows 404; fewer know 418, "I\'m a teapot".',
      'Its third version runs over QUIC instead of TCP.',
      'The protocol behind every web page; add an S and it is encrypted.'
    ],
    funFact: 'Version 0.9 had a single method, GET, and no headers or status codes at all.'
  },
  13: {
    clues: [
      'An Italian developer wrote it in 2009 to speed up a real-time web analytics startup.',
      'It keeps everything in memory and does most of its work on a single thread.',
      'Besides strings it offers lists, sets, sorted sets, hashes and streams.',
      'People use it as a cache, a message broker and a rate limiter.',
      'SET, GET, EXPIRE and INCR are some of its commands.',
      'An in-memory key-value store whose name stands for REmote DIctionary Server.'
    ],
    funFact: 'Its 2024 licence change led to Valkey, a fork backed by the Linux Foundation.'
  },
  14: {
    clues: [
      'Its author announced it in 1991 as "just a hobby, won\'t be big and professional like GNU".',
      'An FTP server admin picked its name; the author wanted to call it Freax.',
      'Strictly it is only a kernel, though people usually mean a whole operating system.',
      "It runs every one of the world's 500 fastest supercomputers and every Android phone.",
      'Its distributions include Debian, Fedora, Arch and Ubuntu.',
      "Linus Torvalds' kernel, with a penguin mascot called Tux."
    ],
    funFact: 'Every system on the TOP500 supercomputer list has run it since November 2017.'
  },
  15: {
    clues: [
      'A former Google engineer who had worked with AngularJS started it in 2013.',
      "It calls itself 'the progressive framework'.",
      'Its single-file components hold template, script and style together.',
      'Version 3 added the Composition API next to the Options API.',
      'Its ecosystem includes Pinia for state and Nuxt for full-stack apps.',
      "Evan You's framework, with a green V-shaped logo."
    ],
    funFact: "Its name is French for 'view', the V in MVC."
  },
  16: {
    clues: [
      'Three engineers designed it at Google in 2007 while waiting for a large C++ build to finish.',
      'Two of them, Ken Thompson and Rob Pike, had also worked on Unix and UTF-8.',
      'It has no classes, and for its first twelve years it had no generics either.',
      'It compiles to a single static binary, and its formatter ends every style debate.',
      'Concurrency comes from goroutines and channels.',
      'The language with a gopher mascot, also called Golang.'
    ],
    funFact: 'The gopher mascot was drawn by Renée French, who also drew Glenda, the Plan 9 bunny.'
  },
  17: {
    clues: [
      'It was standardised as RFC 6455 in 2011.',
      'A connection starts as an ordinary HTTP request with an Upgrade header.',
      'After the handshake, both sides can send messages whenever they like.',
      'It is the usual choice for chat apps, live dashboards and browser multiplayer games.',
      'Its URLs start with ws:// or wss://.',
      'A full-duplex connection between browser and server over a single TCP socket.'
    ],
    funFact: "The server proves it understood the handshake by hashing the client's key with a fixed GUID, 258EAFA5-E914-47DA-95CA-C5AB0DC85B11."
  },
  18: {
    clues: [
      'Ryan Dahl presented it at JSConf EU in 2009.',
      "It took Google's V8 engine out of the browser.",
      'Its event loop is built on libuv and handles I/O without blocking.',
      'A package manager launched a year later made it huge.',
      'It lets you write servers in JavaScript, first with require() and later with ES modules.',
      'The server-side JavaScript runtime with a green hexagon logo.'
    ],
    funFact: 'Its creator later built Deno, partly to fix what he called his regrets about it.'
  },
  19: {
    clues: [
      'Douglas Crockford says he discovered it rather than invented it.',
      'It has no comments, on purpose, so nobody could use them for parsing directives.',
      'It knows only objects, arrays, strings, numbers, booleans and null.',
      'A trailing comma is a syntax error in it.',
      'In the browser you convert to and from it with stringify and parse.',
      'JavaScript Object Notation.'
    ],
    funFact: 'Its ECMA standard is numbered ECMA-404, which developers find suspiciously fitting.'
  },
  20: {
    clues: [
      'A graphics editor at The Guardian created it in 2016.',
      'It calls itself a compiler rather than a framework you ship to the browser.',
      'It has no virtual DOM: components compile to code that updates the page directly.',
      'Version 5 introduced runes such as $state and $derived.',
      "Components live in files with its own extension, and the app framework on top ends in 'Kit'.",
      "Rich Harris' 'disappearing framework', with an orange S logo."
    ],
    funFact: 'Vercel hired Rich Harris in 2021 to work on it full-time.'
  },
  21: {
    clues: [
      'It was written in 2000 for software on a US Navy guided-missile destroyer.',
      'Its source code is in the public domain, and it offers a blessing instead of a licence.',
      'A whole database lives in one ordinary file.',
      'It is probably the most widely deployed database engine: every phone and browser ships it.',
      'There is no server process; it runs inside your application as a library.',
      'The tiny embedded SQL database with a feather in its logo.'
    ],
    funFact: 'Its developers plan to support it until 2050, and the US Library of Congress recommends its file format for long-term storage.'
  },
  22: {
    clues: [
      'Bram Moolenaar first released it for the Amiga in 1991.',
      'It was charityware: users were asked to donate to children in Uganda.',
      'It is modal: normal mode for commands, insert mode for typing.',
      'The keys h, j, k and l move the cursor.',
      'How to quit it is one of the most famous questions on Stack Overflow.',
      'Vi IMproved, whose modern fork is called Neovim.'
    ],
    funFact: 'The Stack Overflow question on how to exit it has been viewed millions of times.'
  },
  23: {
    clues: [
      'JetBrains announced it in 2011, naming it after a place, just like the language it hoped to replace.',
      'It runs on the JVM and works seamlessly with Java code.',
      'Its type system tells nullable and non-null types apart.',
      'Coroutines are its answer to asynchronous code.',
      'In 2019 Google made it the preferred language for Android.',
      "JetBrains' language, in files ending in .kt."
    ],
    funFact: 'Java is named after an island, and so is it: Kotlin Island, in the Gulf of Finland.'
  },
  24: {
    clues: [
      'HashiCorp released it in 2014.',
      'A licence change in 2023 led to a fork called OpenTofu.',
      'You describe infrastructure in HCL and it works out a plan.',
      'It keeps track of what it created in a state file.',
      'plan, apply and destroy are its core commands.',
      "HashiCorp's infrastructure-as-code tool, with .tf files."
    ],
    funFact: 'IBM agreed in 2024 to buy HashiCorp for about 6.4 billion dollars.'
  },
  25: {
    clues: [
      'It started in 2006, when Twitter developers wanted apps to use accounts without asking for passwords.',
      'Version 2.0 was published as RFC 6749 in 2012.',
      'It is about authorisation, not authentication; OpenID Connect adds the identity layer.',
      'Its flows include authorization code, client credentials and device code.',
      "PKCE protects its authorization code flow for apps that can't keep a secret.",
      "The protocol behind 'Sign in with Google' that hands out access tokens."
    ],
    funFact: "Codeguessr's own Google sign-in uses its authorization code flow with PKCE, through Supabase."
  },
  26: {
    clues: [
      'Håkon Wium Lie proposed it in 1994 while working at CERN.',
      'Its first level became a W3C Recommendation in 1996.',
      'Specificity and the cascade decide which rule wins.',
      'Flexbox and Grid finally made layout sane.',
      'Recent additions include :has(), nesting and container queries.',
      'Cascading Style Sheets.'
    ],
    funFact: "For years, 'how do I centre a div' was the running joke; today the answer is 'display: grid; place-items: center'."
  },
  27: {
    clues: [
      'Adam Wathan released it in 2017, after a blog post that questioned semantic class names.',
      'Instead of components, it gives you small single-purpose classes.',
      'Critics say it brings inline styles back into the HTML; fans never want to name a class again.',
      'Its build step scans your files and only generates the classes you use.',
      'Its classes look like flex, pt-4, text-center and md:grid-cols-2.',
      'The utility-first CSS framework.'
    ],
    funFact: 'Version 4 moved its configuration out of a JavaScript file and into CSS itself.'
  },
  28: {
    clues: [
      'Igor Sysoev started it in 2002 to solve the C10k problem.',
      'It was first built for Rambler, a Russian web portal.',
      'It uses an event-driven architecture instead of a thread per connection.',
      'It is a web server, reverse proxy, load balancer and cache in one.',
      "Its name is pronounced 'engine-x'.",
      'The web server that overtook Apache as the most used on the web.'
    ],
    funFact: 'F5 Networks bought the company behind it in 2019 for 670 million dollars.'
  },
  29: {
    clues: [
      'The company 10gen built it in 2007, originally as part of a platform-as-a-service.',
      "Its name comes from the word 'humongous'.",
      'It stores documents as BSON, a binary form of JSON.',
      'You query it with find() and aggregation pipelines instead of SQL.',
      'Its managed cloud service is called Atlas.',
      'The best-known document database, with a green leaf logo.'
    ],
    funFact: "A 2010 animated video mocking it as 'web scale' became one of the best-known programming memes."
  },
  30: {
    clues: [
      'Chris Lattner started it in 2010, after creating LLVM.',
      'Apple introduced it at WWDC 2014.',
      'Optionals force you to deal with missing values.',
      'It replaced Objective-C as the default language for Apple platforms.',
      'Its Playgrounds run your code line by line as you type.',
      "Apple's language for iOS and macOS apps, with a bird logo."
    ],
    funFact: 'It was open-sourced in December 2015 and also runs on Linux and Windows.'
  },
  31: {
    clues: [
      'Tobias Koppers started it in 2012 as a side project.',
      'Instagram was one of its first big adopters.',
      'It builds a dependency graph from an entry point and emits bundles.',
      'Loaders transform files, and plugins hook into the whole compilation.',
      'Its config file is famously long, and hot module replacement came from its dev server.',
      'The JavaScript module bundler with a blue cube logo, now challenged by Vite.'
    ],
    funFact: "Its creator built it after his pull request adding code splitting to another bundler wasn't accepted."
  },
  32: {
    clues: [
      'Paul Mockapetris designed it in 1983 to replace a single shared hosts file.',
      'Thirteen named root server identities sit at the top of it.',
      'It mostly runs over UDP port 53.',
      'A, AAAA, CNAME and MX are some of its record types.',
      "A famous sysadmin haiku ends with: 'It was ___.'",
      "The internet's phone book, turning names into IP addresses."
    ],
    funFact: 'Codeguessr lives on one of its CNAME records: codeguessr points to a github.io host.'
  },
  33: {
    clues: [
      "James Gosling's team started it at Sun in 1991, under the name Oak.",
      "Its slogan was 'write once, run anywhere'.",
      'It compiles to bytecode for a virtual machine.',
      'Oracle has owned it since buying Sun in 2010.',
      'Minecraft was first written in it, and so were countless enterprise backends.',
      'The language with a coffee cup logo and public static void main.'
    ],
    funFact: "It was renamed because 'Oak' was already a trademark; the new name came from coffee."
  },
  34: {
    clues: [
      'José Valim created it in 2011 after years of working on Ruby on Rails.',
      'It compiles to bytecode for the BEAM, the Erlang virtual machine.',
      'Lightweight processes and supervisors let systems heal themselves.',
      'The pipe operator |> chains function calls.',
      'Phoenix is its best-known web framework, famous for LiveView.',
      'The functional language with a purple drop logo and .ex files.'
    ],
    funFact: 'Since version 1.17 in 2024 it has been adding a gradual, set-theoretic type system.'
  },
  35: {
    clues: [
      'It began at Sun in 2004 under another name: Hudson.',
      'It got its current name in 2011 after a dispute with Oracle.',
      'Its pipelines are written in a Groovy-based DSL.',
      'More than a thousand plugins extend it.',
      'Its mascot is a butler.',
      'The self-hosted automation server that ran CI long before GitHub Actions.'
    ],
    funFact: 'Its creator, Kohsuke Kawaguchi, wrote it because he kept breaking the build.'
  },
  36: {
    clues: [
      'A company then called Zeit released it in 2016.',
      'It began as a way to render React on the server with almost no configuration.',
      'Its pages were files in a pages folder, and later in an app folder.',
      'It introduced most developers to React Server Components.',
      'getServerSideProps and incremental static regeneration are its terms.',
      'The React framework from Vercel.'
    ],
    funFact: 'The company behind it was called Zeit until it renamed itself Vercel in 2020.'
  },
  37: {
    clues: [
      'Brian Fox wrote it in 1989 for the GNU Project.',
      'Its name is a pun on the shell it replaced, written by Stephen Bourne.',
      'Shellshock, a 2014 bug in how it handled environment variables, hit millions of servers.',
      'It is the default shell on most Linux distributions; macOS switched to zsh in 2019.',
      'Scripts start with #!/bin/… and variables look like $HOME.',
      'The Bourne Again SHell.'
    ],
    funFact: 'macOS shipped a 2007 version of it for years, because newer versions use the GPLv3 licence.'
  },
  38: {
    clues: [
      'LinkedIn built it around 2010 to move huge amounts of activity data.',
      "Its creator named it after a writer, since it is 'a system optimised for writing'.",
      'It stores messages in an append-only, partitioned, replicated log.',
      'Consumers keep track of their own offsets and can replay history.',
      'Its creators founded Confluent to sell it as a service.',
      "Apache's distributed event streaming platform, named after Franz."
    ],
    funFact: 'Jay Kreps named it after the author Franz Kafka, simply because he liked his work.'
  },
  39: {
    clues: [
      "It grew out of Stubby, Google's internal RPC system.",
      'Google open-sourced it in 2015; it is now a CNCF project.',
      'It runs over HTTP/2 and supports streaming in both directions.',
      'Services and messages are defined in .proto files.',
      'Protocol Buffers are its default serialisation format.',
      "Google's high-performance RPC framework, whose 'g' means something different in every release."
    ],
    funFact: "Every release gives the 'g' a new meaning, from 'good' and 'green' to 'gravity' and 'goose'."
  },
  40: {
    clues: [
      'Rasmus Lerdorf wrote it in 1994 to track visits to his online CV.',
      'Its creator has said he never meant to create a programming language.',
      'All of its variables start with a dollar sign.',
      'WordPress is written in it, and with it a large share of the web.',
      'Its name once stood for Personal Home Page; now it is a recursive acronym.',
      'Hypertext Preprocessor, with an elephant mascot called the elePHPant.'
    ],
    funFact: 'Version 6 was never released: its Unicode rewrite was abandoned, and the next release became 7.'
  },
  41: {
    clues: [
      'It was built at a newspaper in Lawrence, Kansas, and released in 2005.',
      "It's named after a jazz guitarist.",
      'It comes with an automatic admin interface.',
      "Its ORM, migrations and templates are built in: 'batteries included'.",
      "Its slogan: 'The web framework for perfectionists with deadlines.'",
      "Python's best-known web framework, named after Django Reinhardt."
    ],
    funFact: 'Instagram runs one of the largest deployments of it in the world.'
  },
  42: {
    clues: [
      'A committee created it in 1990 to unify the many lazy functional languages of the time.',
      'It is purely functional: functions have no side effects.',
      'It evaluates lazily, so infinite lists are no problem.',
      'Side effects are handled with monads, the subject of countless tutorials.',
      'GHC is its main compiler, and Cabal and Stack build its projects.',
      'The pure functional language named after the logician Haskell Curry.'
    ],
    funFact: 'Pandoc, the universal document converter, is written in it.'
  },
  43: {
    clues: [
      'Microsoft announced it at its Build conference in 2015.',
      'It is built on Electron, and its editor core became the Monaco editor.',
      'It introduced the Language Server Protocol.',
      'Its marketplace holds tens of thousands of extensions.',
      'Stack Overflow surveys name it the most popular developer environment year after year.',
      "Microsoft's free code editor, not to be confused with Visual Studio."
    ],
    funFact: 'Its source is MIT-licensed, but the build Microsoft ships adds telemetry and branding; VSCodium strips both.'
  },
  44: {
    clues: [
      'Its creator introduced it in a 2018 talk about ten things he regretted.',
      'Its name is an anagram of its predecessor.',
      'It is written in Rust and runs TypeScript without a build step.',
      'Scripts get no file, network or environment access unless you grant it with flags.',
      'Version 2 added full npm and package.json compatibility.',
      "Ryan Dahl's second JavaScript runtime, with a dinosaur mascot."
    ],
    funFact: "In 2024 the company behind it asked the US trademark office to cancel Oracle's 'JavaScript' trademark."
  },
  45: {
    clues: [
      'A Finnish researcher wrote it in 1995 after a password-sniffing attack on his university network.',
      'Its default port, 22, sits between the two older protocols it replaced.',
      'It made telnet and rlogin obsolete.',
      'Public-key authentication lets you log in without typing a password.',
      'It can forward ports, tunnel traffic and copy files with scp.',
      'Secure Shell.'
    ],
    funFact: 'Tatu Ylönen got port 22 by emailing IANA and asking for it; the number was his the next day.'
  },
  46: {
    clues: [
      'David Heinemeier Hansson extracted it from Basecamp in 2004.',
      'Its philosophy: convention over configuration, and don’t repeat yourself.',
      'A famous 2005 video showed how to build a blog with it in 15 minutes.',
      'ActiveRecord maps your database tables to classes.',
      'GitHub, Shopify and Basecamp run on it.',
      'The Ruby web framework usually just called Rails.'
    ],
    funFact: 'Its creator also races cars, and won his class at the 24 Hours of Le Mans in 2014.'
  },
  47: {
    clues: [
      'Anders Hejlsberg led its design at Microsoft around 2000.',
      "Its working name was Cool: 'C-like Object Oriented Language'.",
      'LINQ brought query syntax into the language itself.',
      'async/await went mainstream here before JavaScript adopted it.',
      'It runs on .NET and powers Unity games.',
      "Microsoft's language whose name is a musical note."
    ],
    funFact: "The sharp in its name is a semitone above the note; Microsoft also likes to see it as four '+' signs stacked together."
  },
  48: {
    clues: [
      'Its creator wrote an earlier search library to help his wife search her recipes.',
      'It is built on the Apache Lucene library.',
      'It stores JSON documents in inverted indexes spread across shards.',
      'It is the E in the ELK stack, together with Logstash and Kibana.',
      'Its 2021 licence change led AWS to fork it as OpenSearch.',
      'The distributed search and analytics engine from Elastic.'
    ],
    funFact: 'In 2024 it became open source again by adding the AGPL as a licence option.'
  },
  49: {
    clues: [
      'Evan You created it in 2020 while working on the next version of his framework.',
      "Its name is the French word for 'quick'.",
      'In development it serves native ES modules and skips bundling.',
      'It uses esbuild for dependencies and Rollup, now Rolldown, for production builds.',
      'It is the default for SvelteKit, Nuxt, Astro and most new React projects.',
      'The fast frontend build tool with a purple lightning bolt logo.'
    ],
    funFact: 'Vitest, its test-runner companion, reuses the same config and plugins.'
  },
  50: {
    clues: [
      'It succeeded a protocol that Netscape designed in the mid-1990s.',
      'Version 1.3, from 2018, cut the handshake down to a single round trip.',
      'It relies on certificates signed by certificate authorities to prove identity.',
      'Heartbleed was a 2014 bug in the most popular library implementing it.',
      "Let's Encrypt made its certificates free.",
      'Transport Layer Security, the S in HTTPS.'
    ],
    funFact: "People still say 'SSL', even though every SSL version has been deprecated for years."
  },
  51: {
    clues: [
      'It was created in 1993 at a university in Rio de Janeiro.',
      "Its name is the Portuguese word for 'moon'.",
      'Tables are its only data structure, used for arrays, maps and objects alike.',
      'Arrays start at index 1.',
      'Roblox, World of Warcraft add-ons and Neovim configurations use it.',
      'The small embeddable scripting language from Brazil.'
    ],
    funFact: 'Roblox built its own typed dialect of it, called Luau.'
  },
  52: {
    clues: [
      'Facebook released it in 2014.',
      'Its original selling point was that it mocked every module automatically.',
      'Snapshot testing made it famous.',
      'describe, it and expect are its core functions.',
      'It was the default test runner in create-react-app.',
      'The JavaScript testing framework whose name is a joke.'
    ],
    funFact: 'Meta handed it over to the OpenJS Foundation in 2022.'
  },
  53: {
    clues: [
      'Michael DeHaan released it in 2012.',
      'Its name comes from a faster-than-light communication device in science fiction.',
      'It is agentless: it connects to machines over SSH.',
      'Playbooks written in YAML describe the desired state.',
      'Red Hat bought the company behind it in 2015.',
      "Red Hat's agentless automation tool."
    ],
    funFact: "The word was coined by Ursula K. Le Guin in her 1966 novel Rocannon's World."
  },
  54: {
    clues: [
      "Bjarne Stroustrup started it at Bell Labs in 1979 as 'C with Classes'.",
      'Its name is a joke on the increment operator.',
      'Its templates turned out to be Turing complete, by accident.',
      'RAII ties the lifetime of a resource to the lifetime of an object.',
      'Unreal Engine, Chrome and most game engines are written in it.',
      "Stroustrup's extension of C, with a new ISO standard every three years."
    ],
    funFact: 'Its standard is revised every three years; the 2023 edition is its seventh.'
  },
  55: {
    clues: [
      'Roy Fielding defined it in his PhD dissertation in 2000.',
      'He had also co-authored the HTTP/1.1 specification.',
      'It is an architectural style, not a protocol or a standard.',
      'Statelessness and a uniform interface are among its constraints.',
      'Resources have URLs and are changed with GET, POST, PUT and DELETE.',
      'Representational State Transfer.'
    ],
    funFact: 'Fielding has complained that most APIs calling themselves by its name ignore hypermedia, one of its core constraints.'
  },
  56: {
    clues: [
      'It started in 1976 as a set of macros for the TECO editor.',
      'Richard Stallman wrote its GNU version in 1984.',
      'It is extended in, and largely written in, its own Lisp dialect.',
      "Its key bindings earned it the nickname 'Escape Meta Alt Control Shift'.",
      'Org mode, Magit and a built-in psychotherapist run inside it.',
      "Vim's eternal rival in the editor wars."
    ],
    funFact: 'M-x doctor starts an ELIZA-style therapist right inside it.'
  },
  57: {
    clues: [
      'Martin Odersky designed it at EPFL in Switzerland and released it in 2004.',
      "Its name is short for 'scalable language'.",
      'It mixes object-oriented and functional programming on the JVM.',
      'Twitter moved much of its backend from Ruby to it.',
      'Apache Spark and Akka are written in it.',
      'The JVM language whose version 3 was called Dotty during development.'
    ],
    funFact: "Its creator also wrote Java's generics and the javac compiler that shipped with them."
  },
  58: {
    clues: [
      'It was first released in 2007 by a joint venture of two British companies.',
      'It is written in Erlang.',
      'It was built to implement AMQP 0-9-1.',
      'Producers publish to exchanges, which route messages into queues.',
      'Its management interface usually lives on port 15672.',
      'The popular open-source message broker with an animal in its name.'
    ],
    funFact: 'SpringSource, part of VMware, bought it in 2010; via Pivotal and VMware it is now owned by Broadcom.'
  },
  59: {
    clues: [
      'John Resig announced it at BarCamp NYC in 2006.',
      "Its motto was 'write less, do more'.",
      'It smoothed over the differences between Internet Explorer and everything else.',
      'Its dollar-sign function selects elements with CSS selectors.',
      '$(document).ready() was the first line of countless scripts.',
      'The JavaScript library that once ran on most of the web.'
    ],
    funFact: 'Even in the 2020s it still runs on most of the top million websites.'
  },
  60: {
    clues: [
      'John Gruber created it in 2004, with help from Aaron Swartz.',
      'Its goal was plain text that reads well even before it is rendered.',
      'CommonMark set out to fix the ambiguities in its original description.',
      'A # makes a heading and asterisks add emphasis.',
      'README files on GitHub are usually written in it.',
      'The lightweight markup language, in files ending in .md.'
    ],
    funFact: "Codeguessr's README, like that of almost every repository, is written in it."
  }
};
