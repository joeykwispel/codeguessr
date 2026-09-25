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
  }
};
