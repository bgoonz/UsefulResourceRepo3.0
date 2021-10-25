import { minimaxBuilder } from "../../src/others/minimax.js";

describe("Minimax", () => {
  "use strict";

  it("builder should be defined", () => {
    expect(minimaxBuilder).toBeDefined();
  });

  describe("with tic tac toe", () => {
    let game = ticTacToe();

    function getAllNextStates(state) {
      const possibleMoves = game.emptyCells(state);

      return possibleMoves.map((move) => ({
        move,
        state: game.nextState(state, move),
      }));
    }

    const minimaxForX = minimaxBuilder(
      getAllNextStates,
      (state) => game.isGameOver(state),
      (state) => game.getScore(state).x - game.getScore(state).o
    );

    const minimaxForO = minimaxBuilder(
      getAllNextStates,
      (state) => game.isGameOver(state),
      (state) => game.getScore(state).o - game.getScore(state).x
    );

    it("should win versus dumb agent as first player", () => {
      let state = game.newState("x");

      while (!game.isGameOver(state)) {
        if (state.turn === "x") {
          state = game.nextState(
            state,
            minimaxForX(state, true, 5, -Infinity, Infinity).move
          );
        } else {
          const move = game.emptyCells(state)[0];
          state = game.nextState(state, move);
        }
      }

      expect(game.isGameOver(state)).toBe(true);
      expect(game.getScore(state)).toEqual({ x: 1, o: 0 });
    });

    it("should win versus dumb agent as second player", () => {
      let state = game.newState("x");

      while (!game.isGameOver(state)) {
        if (state.turn === "o") {
          state = game.nextState(
            state,
            minimaxForO(state, true, 5, -Infinity, Infinity).move
          );
        } else {
          const move = game.emptyCells(state)[0];
          state = game.nextState(state, move);
        }
      }

      expect(game.isGameOver(state)).toBe(true);
      expect(game.getScore(state)).toEqual({ x: 0, o: 1 });
    });

    it("should be a tie for two minimax agents", () => {
      let state = game.newState("x");

      while (!game.isGameOver(state)) {
        if (state.turn === "o") {
          state = game.nextState(
            state,
            minimaxForO(state, true, 5, -Infinity, Infinity).move
          );
        } else {
          state = game.nextState(
            state,
            minimaxForX(state, true, 5, -Infinity, Infinity).move
          );
        }
      }
      expect(game.isGameOver(state)).toBe(true);
      expect(game.getScore(state)).toEqual({ x: 0, o: 0 });
    });
  });

  describe("with simple game", () => {
    let game = simpleGame();

    const minimaxForA = minimaxBuilder(
      (state) =>
        [true, false].map((move) => ({
          move,
          state: game.nextState(state, move),
        })),
      (state) => game.isGameOver(state),
      (state) => game.getScore(state).A - game.getScore(state).B
    );
    const minimaxForB = minimaxBuilder(
      (state) =>
        [true, false].map((move) => ({
          move,
          state: game.nextState(state, move),
        })),
      (state) => game.isGameOver(state),
      (state) => game.getScore(state).B - game.getScore(state).A
    );

    it("should win versus dumb agent as a first player", () => {
      /*         o
              /     \
             o        o
          /    \     /  \
         o     o    o    o
        / \   / \  / \   / \
      -1   1 1  1  1 -1  1   -1
      */
      const binaryTree = [0, 0, 0, 0, 0, 0, 0, -1, 1, 1, 1, 1, -1, 1, -1];
      let state = game.newState(binaryTree);

      while (!game.isGameOver(state)) {
        if (state.turn === "A") {
          state = game.nextState(
            state,
            minimaxForA(state, true, 5, -Infinity, Infinity).move
          );
        } else {
          state = game.nextState(state, false);
        }
      }

      expect(game.isGameOver(state)).toBe(true);
      expect(game.getScore(state)).toEqual({ A: 1, B: -1 });
    });

    it("should win versus dumb agent as a second player", () => {
      /*     o
           /    \
          o      o
         /  \   /  \
        -1  -1 -1   1
       */
      const binaryTree = [0, 0, 0, -1, -1, -1, 1];
      let state = game.newState(binaryTree);

      while (!game.isGameOver(state)) {
        if (state.turn === "B") {
          state = game.nextState(
            state,
            minimaxForB(state, true, 5, -Infinity, Infinity).move
          );
        } else {
          state = game.nextState(state, false);
        }
      }

      expect(game.isGameOver(state)).toBe(true);
      expect(game.getScore(state)).toEqual({ A: -1, B: 1 });
    });
  });
});

function ticTacToe() {
  "use strict";

  function newState(turn) {
    return {
      board: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
      turn,
    };
  }

  function emptyCells({ board }) {
    const result = [];
    board.forEach((row, y) => {
      row.forEach((cell, x) => {
        if (cell === 0) {
          result.push({ x, y });
        }
      });
    });

    return result;
  }

  function getWinner({ board }) {
    const winVariants = [
      [
        { x: 0, y: 0 },
        { x: 0, y: 1 },
        { x: 0, y: 2 },
      ],
      [
        { x: 1, y: 0 },
        { x: 1, y: 1 },
        { x: 1, y: 2 },
      ],
      [
        { x: 2, y: 0 },
        { x: 2, y: 1 },
        { x: 2, y: 2 },
      ],

      [
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 2, y: 0 },
      ],
      [
        { x: 0, y: 1 },
        { x: 1, y: 1 },
        { x: 2, y: 1 },
      ],
      [
        { x: 0, y: 2 },
        { x: 1, y: 0 },
        { x: 2, y: 2 },
      ],

      [
        { x: 0, y: 0 },
        { x: 1, y: 1 },
        { x: 2, y: 2 },
      ],
      [
        { x: 2, y: 0 },
        { x: 1, y: 1 },
        { x: 2, y: 0 },
      ],
    ];

    for (const variant of winVariants) {
      const combo = variant.map(({ y, x }) => board[y][x]).join("");
      if (combo === "xxx") {
        return "x";
      } else if (combo === "ooo") {
        return "o";
      }
    }

    return null;
  }

  function allFieldsMarked({ board }) {
    return board.every((row) => row.every((cell) => cell !== 0));
  }

  function isGameOver(state) {
    return allFieldsMarked(state) || getWinner(state) !== null;
  }

  function getScore(state) {
    if (getWinner(state) === "x") {
      return { x: 1, o: 0 };
    } else if (getWinner(state) === "o") {
      return { x: 0, o: 1 };
    }

    return { x: 0, o: 0 };
  }

  function nextState({ board, turn }, { y, x }) {
    const newBoard = board.map((row) => row.slice());
    newBoard[y][x] = turn;
    return {
      board: newBoard,
      turn: turn === "x" ? "o" : "x",
    };
  }

  return {
    newState,
    getScore,
    nextState,
    isGameOver,
    emptyCells,
  };
}

/* A simple game made for the purpose of minimax testing. The game has a binary tree with end values: 1 for  player A win and -1 for player B win.
 Game starts from the root node and each player has a binary choose - "false" moves to the left child and "true" moves to the right child.
 The game ends when the very bottom leaf is reached.
       o
     /    \
    o      o
   /  \   /  \
  1  -1 -1   -1
 */
function simpleGame() {
  "use strict";

  function newState(binaryTree) {
    return {
      turn: "A",
      tree: binaryTree,
      position: 0,
    };
  }

  function nextState({ tree, position, turn }, move) {
    return {
      tree: tree,
      position: move ? position * 2 + 2 : position * 2 + 1,
      turn: turn === "A" ? "B" : "A",
    };
  }

  function isGameOver({ tree, position }) {
    return tree[position] !== 0;
  }

  function getScore({ tree, position }) {
    return {
      A: tree[position],
      B: tree[position] === 0 ? 0 : -tree[position],
    };
  }

  return {
    newState,
    nextState,
    isGameOver,
    getScore,
  };
}
