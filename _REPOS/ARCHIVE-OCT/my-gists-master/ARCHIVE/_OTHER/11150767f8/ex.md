The exploration here is of the "Separation of Concerns" or "Separation of Capabilities" pattern (SoC), where the goal is to express the creation/usage of a promise (capability #1) in a different location in code (and time!) than the resolution (capability #2) of that promise.

Specifically, the goal is to bind the DOM event handler (which requires the "trigger" as its event callback) in a different location/time than the expression of where that trigger's "promise" fits into a bigger async flow (the chain of `then(..)`s).

With promises (the second snippet), you have to do this extraction of the trigger, which I argue is an uglier anti-pattern.

With asynquence (the first snippet), you use iterable-sequences, which are externally controllable, to achieve the desired SoC.

**I think iterable-sequences are a more appropriate pattern for this SoC than promise-trigger-extraction.**
