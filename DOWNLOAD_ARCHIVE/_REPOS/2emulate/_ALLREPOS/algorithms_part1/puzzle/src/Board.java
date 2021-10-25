import java.util.*;

/**
 * 
 */

/**
 * @author adrian
 * 
 */
public class Board {
  private int[][] b;
  private int N;

  public Board(int[][] blocks) // construct a board from an N-by-N array of
                               // blocks
                               // (where blocks[i][j] = block in row i, column
                               // j)
  {
    this.b = blocks;
    this.N = blocks.length;
  }

  public int dimension() // board dimension N
  {
    return N;
  }

  public int hamming() // number of blocks out of place
  {
    int h = 0, c = 1;
    for (int x = 0; x < N; x++)
      for (int y = 0; y < N; y++)
        if (c++ != b[x][y])
          h++;
    return h - 1;
  }

  public int manhattan() // sum of Manhattan distances between blocks and goal
  {
    int h = 0, c = 1;
    for (int x = 0; x < N; x++)
      for (int y = 0; y < N; y++)
        if (c++ != b[x][y]) {
          for (int p = 0; p < N; p++)
            for (int r = 0; r < N; r++)
              if ((c - 1) == b[p][r]) {
                h += Math.abs(x - p) + Math.abs(y - r);
              }
          if (c == N * N)
            break;
        }
    return h;
  }

  public boolean isGoal() // is this board the goal board?
  {
    return this.hamming() == 0;
  }

  // a board obtained by exchanging two adjacent blocks in the same row
  public Board twin() {
    int y, x1, x2;

    int[][] n = new int[N][N];

    y = StdRandom.uniform(N);
    x1 = StdRandom.uniform(N);
    if (x1 == 0)
      x1 += 1;
    x1 %= N;

    x2 = x1 + 1;
    if (x2 == 0)
      x2 += 1;
    x2 %= N;

    for (int r = 0; r < N; r++)
      for (int c = 0; c < N; c++)
        n[r][c] = b[r][c];

    int t = n[y][x1];
    n[y][x1] = n[y][x2];
    n[y][x2] = t;

    return new Board(n);
  }

  public boolean equals(Object x) // does this board equal y?
  {
    if (x == this)
      return true;
    if (x == null)
      return false;
    if (x.getClass() != this.getClass())
      return false;

    Board n = (Board) x;
    if (n.toString().equals(this.toString()))
      return true;
    else
      return false;
  }

  public Iterable<Board> neighbors() // all neighboring boards
  {
    return new Neighbors();
  }

  public String toString() {
    StringBuilder s = new StringBuilder();
    s.append(N + "\n");
    for (int i = 0; i < N; i++) {
      for (int j = 0; j < N; j++) {
        s.append(String.format("%2d ", b[i][j]));
      }
      s.append("\n");
    }
    return s.toString();
  }
  
  private class Neighbors implements Iterable<Board>{
    @Override
    public Iterator<Board> iterator() {
      return new NeighborIterator();
    }
  }
  
  private class NeighborIterator implements Iterator<Board>{
    private ArrayList<Board> neighbors;
    private int p;
    
    public NeighborIterator(){
      neighbors = new ArrayList<Board>();
      p = 0;
      
      for(int x=0; x<N; x++)
        for(int y=0; y<N; y++)
          if(b[x][y] == 0){
            if(x-1 >= 0){
              int[][] newarr = cloneArray(b);
              exch(newarr,x,y,x-1,y);
              neighbors.add(new Board(newarr));
            }
            if(x+1 < N){
              int[][] newarr = cloneArray(b);
              exch(newarr,x,y,x+1,y);
              neighbors.add(new Board(newarr));
            }
            if(y-1 >= 0){
              int[][] newarr = cloneArray(b);
              exch(newarr,x,y-1,x,y);
              neighbors.add(new Board(newarr));
            }
            if(y+1 < N){
              int[][] newarr = cloneArray(b);
              exch(newarr,x,y+1,x,y);
              neighbors.add(new Board(newarr));
            }
            return;
          }
    }
    
    private void exch(int[][] arr, int x, int y, int i, int j){
      int t = arr[x][y];
      arr[x][y] = arr[i][j];
      arr[i][j] = t;
    }
    private int[][] cloneArray(int[][] arr){
      int[][] narr = new int[arr.length][arr.length];
      for (int i = 0; i < arr.length; i++) {
        for (int j = 0; j < arr.length; j++) {
          narr[i][j] = arr[i][j];
        }
      }
      return narr;
    }
    
    public boolean hasNext() {
      return p < neighbors.size();
    }
    
    public Board next() {
      return neighbors.get(p++);
    }
    
    public void remove() {
      throw new UnsupportedOperationException();
    }
  }
  
}
