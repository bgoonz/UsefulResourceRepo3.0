/**
 * 
 */

/**
 * @author adrian
 *
 */
public class WeightedQuickUnion implements DynamicConnectivity {
	private int[] id;
	private int[] sz;
	
	public WeightedQuickUnion(int N){
		id = new int[N];
		sz = new int[N];
		for(int i=0; i < N; i++){
			id[i] = i;
			sz[i] = 1;
		}
		System.out.printf("%d-%d: %s\n",0,0,toString());
	}
	
	/**
	 * Find root
	 * @param i
	 * @return
	 */
	private int find(int i){
		while(i != id[i]){
			//id[i] = id[id[i]]; // path compression
			i = id[i];
		}
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
		
		if(sz[findp] < sz[findq]){
			id[findp] = findq;
			sz[findq] += sz[findp];
		} else {
			id[findq] = findp;
			sz[findp] += sz[findq];
		}
		System.out.printf("%d-%d: %s\n",p,q,toString());
	}

	/* (non-Javadoc)
	 * @see DynamicConnectivity#connected(int, int)
	 */
	@Override
	public boolean connected(int p, int q) {
		return find(p) == find(q);
	}
	
  public String toString() {
    StringBuilder sb = new StringBuilder("");
    for (int i = 0; i < id.length; i++)
      sb.append(id[i] + " ");
    return sb.toString();
  }
}
