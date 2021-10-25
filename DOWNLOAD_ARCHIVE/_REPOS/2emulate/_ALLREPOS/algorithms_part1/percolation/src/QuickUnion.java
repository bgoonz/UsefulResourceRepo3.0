/**
 * 
 */

/**
 * @author adrian
 *
 */
public class QuickUnion implements DynamicConnectivity {
	private int[] id;
	
	public QuickUnion(int N){
		id = new int[N];
		for(int i=0; i < N; i++) 
		  id[i] = i;
	}
	
	/**
	 * Find root
	 * @param i
	 * @return
	 */
	private int find(int i){
		while(i != id[i]) 
		  i = id[i];
		return i;
	}

	/* (non-Javadoc)
	 * @see DynamicConnectivity#union(int, int)
	 */
	@Override
	public void union(int p, int q) {
	  int findp = find(p);
	  int findq = find(q);
	  if(findp == findq) return;
		id[findq] = findp;
		System.out.println(p+"-"+q+": "+toString());
	}
	
  public String toString() {
    StringBuilder sb = new StringBuilder("");
    for (int i = 0; i < id.length; i++)
      sb.append(id[i] + " ");
    return sb.toString();
  }

	/* (non-Javadoc)
	 * @see DynamicConnectivity#connected(int, int)
	 */
	@Override
	public boolean connected(int p, int q) {
		return find(p) == find(q);
	}

}
