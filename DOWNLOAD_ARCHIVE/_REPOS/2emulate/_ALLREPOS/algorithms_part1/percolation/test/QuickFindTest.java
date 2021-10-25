import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

/**
 * 
 */

/**
 * @author adrian
 *
 */
public class QuickFindTest {
	private DynamicConnectivity dc;
	/**
	 * @throws java.lang.Exception
	 */
	@Before
	public void setUp() throws Exception {
		dc = new QuickFind(10);
	}

	/**
	 * Test method for {@link QuickFind#union(int, int)}.
	 */
	@Test
	public void testUnion() {
		for(int p=0; p<9; p++){
			int q = p+1;
			//System.out.printf("uf.conected(%d,%d):%s\n",p,q,uf.connected(p, q));
			assertFalse(dc.connected(p, q));
			dc.union(p, q);
			assertTrue(dc.connected(p, q));
			p++;
		}		
	}

	/**
	 * Test method for {@link QuickFind#connected(int, int)}.
	 */
	@Test
	public void testConnected() {
		for(int p=0; p<10; p++)
			for(int q=0; q<10; q++){
				if(p==q) continue;
				//System.out.printf("uf.conected(%d,%d):",p,q,uf.connected(p, q));
				assertFalse(dc.connected(p, q));				
			}
	}
	
	/**
	 * Test method for {@link QuickFind#union(int, int)}.
	 */
	@Test
	public void testImplicitUnion() {
		int p,q;
		p=1;
		q=2;
		assertFalse(dc.connected(p, q));
		dc.union(p, q);
		assertTrue(dc.connected(p, q));
		p=3;
		q=2;
		assertFalse(dc.connected(p, q));
		dc.union(p, q);
		assertTrue(dc.connected(p, q));
		assertTrue(dc.connected(1, 3));	
		p=3;
		q=4;
		assertFalse(dc.connected(p, q));
		dc.union(p, q);
		assertTrue(dc.connected(p, q));
		assertTrue(dc.connected(1, 4));			
	}		
}
