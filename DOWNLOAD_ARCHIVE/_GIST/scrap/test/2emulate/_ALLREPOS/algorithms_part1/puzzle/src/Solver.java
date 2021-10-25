import java.util.ArrayList;
import java.util.Comparator;
import java.util.Stack;

/**
 * 
 */

/**
 * @author adrian
 * 
 */
public class Solver {
  Stack<Board> gameTree;
  private int moves;
  private boolean solvable;

  // find a solution to the initial board (using the A* algorithm)
  public Solver(Board initial) {
    MinPQ<SearchNode> pq = new MinPQ<SearchNode>();
    gameTree = new Stack<Board>();
    moves = 0;
    solvable = false;
    SearchNode sn;

    pq.insert(new SearchNode(initial, moves, null));
    pq.insert(new SearchNode(initial.twin(), moves, null));
    moves++;
    // System.out.println(sn);

    while (true) {
      SearchNode searchNode = pq.delMin();
      gameTree.add(searchNode.board());
//      System.out.println("--vvv--");
//      System.out.println(searchNode);
//      System.out.println("--^^^--");

      if (searchNode.board().hamming() == 0) {
        moves = searchNode.moves();
        // TODO detect if twin or real node...
        solvable = true;
        break;
      }
      for (Board b : searchNode.board().neighbors()) {
        if(searchNode.parent() == null || !b.equals(searchNode.parent().board())){
          pq.insert(new SearchNode(b, moves, searchNode));
        }
      }
      moves++;
    }

  }

  // is the initial board solvable?
  public boolean isSolvable() {
    return solvable;
  }

  // min number of moves to solve initial board; -1 if no solution
  public int moves() {
    return moves;
  }

  // sequence of boards in a shortest solution; null if no solution
  public Iterable<Board> solution() {
    return gameTree;
  }

  // solve a slider puzzle (given below)
  public static void main(String[] args) {
    // create initial board from file
    In in = new In(args[0]);
    int N = in.readInt();
    int[][] blocks = new int[N][N];
    for (int i = 0; i < N; i++)
      for (int j = 0; j < N; j++)
        blocks[i][j] = in.readInt();
    Board initial = new Board(blocks);

    // solve the puzzle
    Solver solver = new Solver(initial);

    // print solution to standard output
    if (!solver.isSolvable())
      StdOut.println("No solution possible");
    else {
      StdOut.println("Minimum number of moves = " + solver.moves());
      for (Board board : solver.solution())
        StdOut.println(board);
    }
  }

  private class SearchNode implements Comparable<SearchNode> {
    private Board board;
    private int moves;
    private SearchNode parent;
  
    public SearchNode(Board board, int moves, SearchNode parent) {
      this.board = board;
      this.moves = moves;
      this.parent = parent;
    }
  
    public int priority() {
      return board.manhattan()*2 + moves;
    }
  
    public Board board() {
      return this.board;
    }
  
    public int moves() {
      return this.moves;
    }
  
    public SearchNode parent() {
      return this.parent;
    }
  
    @Override
    public int compareTo(SearchNode sn) {
      if (this.priority() > sn.priority())
        return 1;
      else if (this.priority() < sn.priority())
        return -1;
      else
        return 0;
    }
  
    public String toString() {
      StringBuilder sb = new StringBuilder();
      sb.append("Move: " + this.moves);
      sb.append("\npriority = " + this.priority());
      sb.append("\nmanhattan = " + this.board.manhattan());
      sb.append("\nhamming = " + this.board.hamming());
      sb.append("\n" + this.board.toString());
      return sb.toString();
    }
  }
}
