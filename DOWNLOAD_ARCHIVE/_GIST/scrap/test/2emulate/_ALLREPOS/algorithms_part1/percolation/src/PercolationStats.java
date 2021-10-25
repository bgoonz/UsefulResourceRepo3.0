/**
 * Program to estimate the value of the percolation 
 * threshold via Monte Carlo simulation
 */

/**
 * @author adrian
 * 
 */
public class PercolationStats {
  private double[] t;

  // private StringBuilder out;
  /**
   * perform T independent computational experiments on an N-by-N grid
   * 
   * @param N
   * @param T
   * @exception java.lang.IllegalArgumentException
   */
  public PercolationStats(int N, int T) {
    if (N < 1)
      throw new IllegalArgumentException("N should be bigger than 0.");
    if (T < 1)
      throw new IllegalArgumentException("T should be bigger than 0.");

    t = new double[T];
    // out = new StringBuilder(n+"\n");
    Percolation per;
    for (int x = 0; x < T; x++) {
      per = new Percolation(N);
      int count = 0;

      do {
        // Randomly open sites (i, j)
        int i = StdRandom.uniform(1, N + 1);
        int j = StdRandom.uniform(1, N + 1);

        if (!per.isOpen(i, j)) {
          per.open(i, j); // Open site
          count++;
        }
      } while (!per.percolates());

      t[x] = (double) count / (double) (N * N);
    }
  }

  /**
   * sample mean of percolation threshold
   * 
   * @return
   */
  public double mean() {
    return StdStats.mean(t);
  }

  /**
   * sample standard deviation of percolation threshold
   * 
   * @return
   */
  public double stddev() {
    return StdStats.stddev(t);
  }

  /**
   * returns lower bound of the 95% confidence interval
   * 
   * @return
   */
  public double confidenceLo() {
    return mean() - (1.96 * stddev() / Math.sqrt(t.length));
  }

  /**
   * returns upper bound of the 95% confidence interval
   * 
   * @return
   */
  public double confidenceHi() {
    return mean() + (1.96 * stddev() / Math.sqrt(t.length));
  }

  public static void main(String[] args) {
    int N = Integer.parseInt(args[0]);
    int T = Integer.parseInt(args[1]);

    Stopwatch sw = new Stopwatch();

    PercolationStats perStat = new PercolationStats(N, T);

    System.out.printf("mean                    = %f\n", perStat.mean());
    System.out.printf("stddev                  = %f\n", perStat.stddev());
    System.out.printf("95%% confidence interval = %f, %f\n",
        perStat.confidenceLo(), perStat.confidenceHi());

    System.out.println("------");
    System.out.printf("Total time: %f secs. (for N=%d, T=%d)",
        sw.elapsedTime(), N, T);

    // System.out.println(perStat.output());
  }
}
