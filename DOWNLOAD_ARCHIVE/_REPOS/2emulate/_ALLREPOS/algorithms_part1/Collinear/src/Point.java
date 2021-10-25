/*************************************************************************
 * Name:
 * Email:
 *
 * Compilation:  javac Point.java
 * Execution:
 * Dependencies: StdDraw.java
 *
 * Description: An immutable data type for points in the plane.
 *
 *************************************************************************/

import java.util.Comparator;

public class Point implements Comparable<Point> {

  /**
   * compare points by slope
   */
  public final Comparator<Point> SLOPE_ORDER = new BySlopeOrder();

  private final int x; // x coordinate
  private final int y; // y coordinate

  // create the point (x, y)
  public Point(int x, int y) {
    /* DO NOT MODIFY */
    this.x = x;
    this.y = y;
  }

  /**
   * The SLOPE_ORDER comparator should compare points by the slopes they make
   * with the invoking point
   */
  private class BySlopeOrder implements Comparator<Point> {
    @Override
    public int compare(Point p, Point r) {
      double ps = Point.this.slopeTo(p);
      double pr = Point.this.slopeTo(r);
      if(ps > pr)
        return 1;
      else if(ps < pr)
        return -1;
      else
        return 0;
    }
  }

  /**
   * Slope between this point and that point
   * 
   * Treat the slope of a horizontal line segment as positive zero.
   * 
   * Treat the slope of a vertical line segment as positive infinity.
   * 
   * Treat the slope of a degenerate line segment (between a point and itself)
   * as negative infinity.
   * 
   * @param r
   * @return
   */
  public double slopeTo(Point r) {
    // same point
    if((r.y == this.y) && (r.x == this.x) )
      return Double.NEGATIVE_INFINITY;
    
    // vertical
    if(r.x == this.x)
      return Double.POSITIVE_INFINITY;
    
    // horizontal
    if(r.y == this.y)
      return 0;
    
    double d = r.y - this.y;
    double n = r.x - this.x;
    
    return d/n;
  }

  // is this point lexicographically smaller than that one?
  // comparing y-coordinates and breaking ties by x-coordinates
  public int compareTo(Point that) {
    if(this.y > that.y)
      return 1;
    else if(this.y < that.y)
      return -1;
    else if(this.x > that.x)
      return 1;
    else if(this.x < that.x)
      return -1;
    else
      return 0;
  }

  /**
   * draw line between this point and that point to standard drawing
   * 
   * call drawTo() once for each line segment discovered
   * 
   * @param that
   */
  public void drawTo(Point that) {
    /* DO NOT MODIFY */
    StdDraw.line(this.x, this.y, that.x, that.y);
    System.out.printf("drawTo (%d,%d) -> (%d,%d) \n",this.x, this.y, that.x, that.y);
  }

  /**
   * plot this point to standard drawing
   * 
   * call draw() once for each point in the input file
   * 
   */
  public void draw() {
    /* DO NOT MODIFY */
    StdDraw.point(x, y);
    System.out.println("draw"+this);
  }

  // return string representation of this point
  public String toString() {
    /* DO NOT MODIFY */
    return "(" + x + ", " + y + ")";
  }

  // unit test
  public static void main(String[] args) {
    /* YOUR CODE HERE */
  }
}