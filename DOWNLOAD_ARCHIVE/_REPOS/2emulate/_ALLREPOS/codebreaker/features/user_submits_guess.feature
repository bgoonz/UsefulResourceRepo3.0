Feature: user submits guess

  The user submits a guess of the fours numbers. 
  The game marks the guess with + and - signs.
  
  For each guess that is in the exact possition the system displays + and
  for each elements that matches the code (in any order) the system displays -.
  The displays is sorted in a way that the + signs goes before the - signs.
  
  Scenario Outline: submits guess
    Given the secret code is "<code>"
    When I guess "<guess>"
    Then the mark should be "<mark>"

  Scenario: all numbers correct in different orders
    | code  | guess | mark  |
    | 1234  | 1234  | ++++  |
    | 1234  | 1243  | ++--  |
    | 1234  | 1423  | +---  |
    | 1234  | 4321  | ----  |
