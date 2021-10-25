import static org.junit.Assert.*;

import java.util.ArrayList;

import org.junit.Before;
import org.junit.Test;

/**
 * 
 */

/**
 * @author adrian
 *
 */
public class BruteTest {
  private Brute p;

  /**
   * @throws java.lang.Exception
   */
  @Before
  public void setUp() throws Exception {
    p = new Brute();
  }

//  @Test
//  public void testInput1() {
//    int N = 1;
//    Point[] ps = new Point[N];
//    ps[0] = new Point(16000,16000);
//    ArrayList<ArrayList<Point>> r = p.collinear(ps);
//    assertEquals(null, r);
//  }
  
//  @Test
//  public void testInput2() {
//    int N = 2, i=0;
//    Point[] ps = new Point[N];
//    ps[i++] = new Point(16000,16000);
//    ps[i++] = new Point(10000,16000);
//    ArrayList<ArrayList<Point>> r = p.collinear(ps);
//    assertEquals(null, r);
//  }
  
//  @Test
//  public void testInput6() {
//    int N = 6;
//    int i=0;
//    Point[] ps = new Point[N];
//    ps[i++] = new Point(19000,10000);
//    ps[i++] = new Point(18000,10000);
//    ps[i++] = new Point(32000,10000);
//    ps[i++] = new Point(21000,10000);
//    ps[i++] = new Point(1234,5678);
//    ps[i++] = new Point(14000,10000);
//    ArrayList<ArrayList<Point>> r = p.collinear(ps);
//    
//    ArrayList<ArrayList<Point>> expected = new ArrayList<ArrayList<Point>>();
//    
//    ArrayList<Point> p;
//    
//    p = new ArrayList<Point>();
//    p.add(new Point(14000,10000));
//    p.add(new Point(18000,10000));
//    p.add(new Point(19000,10000));
//    p.add(new Point(21000,10000));
//    expected.add(p);
//    
//    p = new ArrayList<Point>();
//    p.add(new Point(14000,10000));
//    p.add(new Point(18000,10000));
//    p.add(new Point(19000,10000));
//    p.add(new Point(32000,10000));
//    expected.add(p);
//    
//    p = new ArrayList<Point>();
//    p.add(new Point(14000,10000));
//    p.add(new Point(18000,10000));
//    p.add(new Point(21000,10000));
//    p.add(new Point(32000,10000));
//    expected.add(p);
//
//    p = new ArrayList<Point>();
//    p.add(new Point(14000,10000));
//    p.add(new Point(19000,10000));
//    p.add(new Point(21000,10000));
//    p.add(new Point(32000,10000));
//    expected.add(p);
//    
//    p = new ArrayList<Point>();
//    p.add(new Point(18000,10000));
//    p.add(new Point(19000,10000));
//    p.add(new Point(21000,10000));
//    p.add(new Point(32000,10000));
//    expected.add(p);
//    
//    assertEquals(expected.size(), r.size());
//    assertEquals(expected.toString(), r.toString());
//  }

}
