/**
 * 
 */

/**
 * @author adrian
 * 
 */
public class QuickFind implements DynamicConnectivity {
  private int id[];

  public QuickFind(int N) {
    id = new int[N];
    for (int i = 0; i < N; i++)
      id[i] = i;
  }

  /*
   * (non-Javadoc)
   * 
   * @see DynamicConnectivity#union(int, int)
   */
  @Override
  public void union(int p, int q) {
    int pid = find(p);
    for (int i = 0; i < id.length; i++)
      if (find(i) == pid)
        id[i] = find(q);
  }

  /*
   * (non-Javadoc)
   * 
   * @see DynamicConnectivity#connected(int, int)
   */
  @Override
  public boolean connected(int p, int q) {
    return find(p) == find(q);
  }

  /**
   * component identifier for p
   * 
   * @param p
   *          (0 to N Ð 1)
   * @return identifier
   */
  private int find(int p) {
    return id[p];
  }

  /**
   * number of components
   * 
   * @return
   */
  private int count() {
    return id.length;
  }

  public String toString() {
    StringBuilder sb = new StringBuilder("");
    for (int i = 0; i < id.length; i++)
      sb.append(id[i] + " ");
    return sb.toString();
  }

  public static void main(String[] args) {
    int N = StdIn.readInt();
    DynamicConnectivity uf = new QuickFind(N);
    while (!StdIn.isEmpty()) {
      int p = StdIn.readInt();
      int q = StdIn.readInt();
      if (!uf.connected(p, q)) {
        uf.union(p, q);
        StdOut.println(p + " " + q);
      }
    }
  }

}
