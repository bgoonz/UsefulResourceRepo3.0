/**
 * The model. We model a percolation system using an N-by-N grid of sites.
 * Each site is either open or blocked. A full site is an open site that can
 * be connected to an open site in the top row via a chain of neighboring
 * (left, right, up, down) open sites. We say the system percolates if there
 * is a full site in the bottom row. In other words, a system percolates if
 * we fill all open sites connected to the top row and that process fills
 * some open site on the bottom row.
 */

/**
 * @author adrian
 * 
 */
public class Percolation {
  private int n;
  private boolean[][] open;
  private WeightedQuickUnionUF uf;
  private WeightedQuickUnionUF nw; // no backwash

  /**
   * Create N-by-N grid, with all sites blocked
   * 
   * @param N
   */
  public Percolation(int N) {
    n = N;
    open = new boolean[N][N];
    uf = new WeightedQuickUnionUF(N * N + 2);
    nw = new WeightedQuickUnionUF(N * N + 2);
  }

  /**
   * open site (row i, column j) if it is not already
   * 
   * @param i
   *          row from 1 to N
   * @param j
   *          column from 1 to N
   * @exception java.lang.IndexOutOfBoundsException
   *              if either i or j is outside this range
   */
  public void open(int i, int j) {
    if (isOpen(i, j))
      return;

    open[i - 1][j - 1] = true;

    int d = xyTo1D(i, j);
    checkAndOpen(i - 1, j, d);
    checkAndOpen(i + 1, j, d);
    checkAndOpen(i, j - 1, d);
    checkAndOpen(i, j + 1, d);

    // virtual top (and bottom)
    if (i == 1)
      checkAndOpen(1, j, 0); // virtual top
    if (i == n) {
      uf.union(n * n + 1, xyTo1D(i, j));
    }
  }

  private void checkAndOpen(int i, int j, int d) {
    try {
      if (isOpen(i, j)) {
        nw.union(d, xyTo1D(i, j));
        uf.union(d, xyTo1D(i, j));
      }
    } catch (IndexOutOfBoundsException e) {
      return;
    }
  }

  /**
   * is site (row i, column j) open?
   * 
   * @param i
   *          row from 1 to N
   * @param j
   *          column from 1 to N
   * @exception java.lang.IndexOutOfBoundsException
   *              if either i or j is outside this range
   * @return
   */
  public boolean isOpen(int i, int j) {
    checkBoundaries(i - 1, j - 1);
    return open[i - 1][j - 1];
  }

  /**
   * Translates from grid(x,y) to 1D array
   * 
   * @param i
   * @param j
   * @return
   */
  private int xyTo1D(int i, int j) {
    return n * (i - 1) + j;
  }

  /**
   * A full site is an open site that can be connected to an open site in the
   * top row via a chain of neighboring (left, right, up, down) open sites.
   * 
   * @param i
   *          rows from 1 to N
   * @param j
   *          columns from 1 to N
   * @exception java.lang.IndexOutOfBoundsException
   *              if either i or j is outside this range
   * @return
   */
  public boolean isFull(int i, int j) {
    checkBoundaries(i - 1, j - 1);
    return nw.connected(0, xyTo1D(i, j));
  }

  /**
   * @return does the system percolate?
   */
  public boolean percolates() {
    if (n == 1)
      return open[0][0];

    return uf.connected(0, n * n + 1);
  }

  private void checkBoundaries(int i, int j) {
    if (i >= n || j >= n || i < 0 || j < 0)
      throw new java.lang.IndexOutOfBoundsException(
          "Either i or j is outside range N");
  }
}
