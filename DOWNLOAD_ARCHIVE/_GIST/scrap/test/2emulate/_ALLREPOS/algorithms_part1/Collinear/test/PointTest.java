import static org.junit.Assert.*;

import java.util.*;

import org.junit.Before;
import org.junit.Test;

/**
 * 
 */

/**
 * @author adrian
 * 
 */
public class PointTest {
  private Point p;

  /**
   * @throws java.lang.Exception
   */
  @Before
  public void setUp() throws Exception {
    p = new Point(1,1);
  }


  // Slope. To begin, implement the slopeTo() method. Be sure to consider a
  // variety of corner cases, including horizontal, vertical, and degenerate
  // line segments.

  @Test
  public void testRegularSlope() {
    Point r = new Point(2,2);
    double slope = p.slopeTo(r);
    assertEquals(1, slope,0.1);
  }
  
  @Test
  public void testVerticalSlope() {
    Point r = new Point(1,2);
    double slope = p.slopeTo(r);
    assertEquals(Double.POSITIVE_INFINITY, slope,0.1);
    assertNotSame(Double.NEGATIVE_INFINITY, slope);
  }
  
  @Test
  public void testSlopeToVertical(){
    Point p = new Point(20, 494);
    Point q = new Point(20, 425);
    Double slope = p.slopeTo(q);
    assertEquals(Double.POSITIVE_INFINITY, slope, 0.1);
    assertNotSame(Double.NEGATIVE_INFINITY, slope);
  }


  @Test
  public void testHorizontalSlope() {
    Point r = new Point(2,1);
    double slope = p.slopeTo(r);
    assertEquals(0, slope,0.1);
  }
  
  // same point appear, for the slopeTo()
  @Test
  public void testSamePointSlope() {
    Point r = new Point(1,1);
    double slope = p.slopeTo(r);
    assertEquals(Double.NEGATIVE_INFINITY, slope,0.1);
  }
  
  @Test
  public void testSamePointCompareTo(){
    Point r = new Point(1,1);
    int c = p.compareTo(r);
    assertEquals(0, c);
  }
  
  @Test
  public void testBiggerBothCompareTo(){
    Point r = new Point(2,2);
    int c = p.compareTo(r);
    assertEquals(-1, c);
  }
  
  @Test
  public void testBiggerYCompareTo(){
    Point r = new Point(1,2);
    int c = p.compareTo(r);
    assertEquals(-1, c);
  }
  
  @Test
  public void testBiggerXCompareTo(){
    Point r = new Point(2,1);
    int c = p.compareTo(r);
    assertEquals(-1, c);
  }
  
  @Test
  public void testSmallerYCompareTo(){
    Point r = new Point(1,0);
    int c = p.compareTo(r);
    assertEquals(1, c);
  }
  
  @Test
  public void testSmallerXCompareTo(){
    Point r = new Point(0,1);
    int c = p.compareTo(r);
    assertEquals(1, c);
  }
  
  @Test
  public void testSmallerBothCompareTo(){
    Point r = new Point(0,0);
    int c = p.compareTo(r);
    assertEquals(1, c);
  }
  
  @Test
  public void testAllCompareTo(){
    Point r = new Point(32000,10000);
    Point h = new Point(18000,10000);
    int c;
    c= h.compareTo(h);
    assertEquals(0, c);
    c= h.compareTo(r);
    assertEquals(-1, c);
    c= r.compareTo(h);
    assertEquals(1, c);
  }
  
  @Test
  public void testSorting2(){
    ArrayList<Point> p = new ArrayList<Point>();
    p.add(new Point(32000,10000));
    p.add(new Point(18000,10000));
    
    Collections.sort(p);
    
    ArrayList<Point> expected = new ArrayList<Point>();
    expected.add(new Point(18000,10000));
    expected.add(new Point(32000,10000));
    
    assertEquals(expected.toString(),p.toString());
  }
  
  @Test
  public void testSorting3(){
    ArrayList<Point> p = new ArrayList<Point>();
    p.add(new Point(32000,10000));
    p.add(new Point(19000,10000));
    p.add(new Point(18000,10000));
    
    Collections.sort(p);
    
    ArrayList<Point> expected = new ArrayList<Point>();
    expected.add(new Point(18000,10000));
    expected.add(new Point(19000,10000));
    expected.add(new Point(32000,10000));
    
    assertEquals(expected.toString(),p.toString());
  }
  
  @Test
  public void testSorting(){
    ArrayList<Point> p = new ArrayList<Point>();
    p.add(new Point(19000,10000));
    p.add(new Point(18000,10000));
    p.add(new Point(32000,10000));
    p.add(new Point(21000,10000));
    
    Collections.sort(p);
    
    ArrayList<Point> expected = new ArrayList<Point>();
    expected.add(new Point(18000,10000));
    expected.add(new Point(19000,10000));
    expected.add(new Point(21000,10000));
    expected.add(new Point(32000,10000));
    
    assertEquals(expected.toString(),p.toString());
  }
  
  
  @Test
  public void testBySlopeOrder(){
    Point p22 = new Point(2,2);
    Point p31 = new Point(3,1);
    Point p42 = new Point(4,2);
    Point p13 = new Point(1,3);
    Point p11 = new Point(1,1);
    
    Point points[] = new Point[]{p22,p31,p42,p13,p11};
    Arrays.sort(points, p.SLOPE_ORDER);
    
    assertEquals(new Point[]{p11,p31,p42,p22,p13}, points);
  }
  
//  @Test void testBySlopeOrderVerticalDiagonalHorizontal(){
//    Point p11 = new Point(1,1);
//    Point p22 = new Point(2,2);
//    Point p31 = new Point(3,1);
//    Point p42 = new Point(4,2);
//    Point p13 = new Point(1,3);
//    
//    Point points[] = new Point[]{p22,p31,p42,p13,p11};    
//  }
  

  // do not print permutations of points on a line segment (e.g., if you output
  // p→q→r→s, do not also output either s→r→q→p or p→r→q→s)

  // for full credit in Fast.java, do not print or plot subsegments of a line
  // segment containing 5 or more points (e.g., if you output p→q→r→s→t, do not
  // also output either p→q→s→t or q→r→s→t); you may print out such subsegments
  // in Brute.java.

  // My program fails only on (some) vertical line segments. What could be going
  // wrong? Are you dividing by zero? With integers, this produces a runtime
  // exception. With floating-point numbers, 1.0/0.0 is positive infinity and
  // -1.0/0.0 is negative infinity. You may also use the constants
  // Double.POSITIVE_INFINITY and Double.NEGATIVE_INFINITY.

  // Note that while (x == y) is guaranteed to be true, Arrays.sort() treats
  // negative zero as strictly less than positive zero. Thus, to make the
  // specification precise, we require you to return positive zero for
  // horizontal line segments.

}
