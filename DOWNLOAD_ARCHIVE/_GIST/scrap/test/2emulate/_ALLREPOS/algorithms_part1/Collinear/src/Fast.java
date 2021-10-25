import java.util.*;

/**
 * 
 * A faster, sorting-based solution. Remarkably, it is possible to solve the
 * problem much faster than the brute-force solution described above. Given a
 * point p, the following method determines whether p participates in a set of
 * 4 or more collinear points.
 * 
 * Think of p as the origin. For each other point q, determine the slope it
 * makes with p. Sort the points according to the slopes they makes with p.
 * Check if any 3 (or more) adjacent points in the sorted order have equal
 * slopes with respect to p. If so, these points, together with p, are
 * collinear. Applying this method for each of the N points in turn yields an
 * efficient algorithm to the problem. The algorithm solves the problem
 * because points that have equal slopes with respect to p are collinear, and
 * sorting brings such points together. The algorithm is fast because the
 * bottleneck operation is sorting.
 * 
 * Write a program Fast.java that implements this algorithm. The order of
 * growth of the running time of your program should be N2 log N in the worst
 * case and it should use space proportional to N.
 * 
 */

/**
 * @author adrian
 * 
 */
public class Fast {
  private Set<Set<Point>> results;
  private Point[] points;
  
  public Fast(){
    
  }
  
  private Fast(Point[] points){
    this.points = points;
    collinear(points);
  }
  
  private void collinear(Point[] points){
    results = new HashSet<Set<Point>>();
    
    // iterate through all points N
    for(Point p: points){
      Arrays.sort(points, p.SLOPE_ORDER);
      
      Set<Point> collinear = new HashSet<Point>();
      Double prevSlope = null;
      Point prevPoint = p;
      boolean foundEquals = false;
      
      collinear.add(p);
      
      for(Point x: points){
        if(x == p) continue;
        
        double slope = p.slopeTo(x);
        if(foundEquals && slope != prevSlope)
          break;
        else {
          if(prevSlope!=null && slope == prevSlope){
            collinear.add(x);
            collinear.add(prevPoint);
            foundEquals = true;
          }
          prevSlope = slope;
          prevPoint = x;
        }
      }
      
      if(collinear.size() >= 4){
        results.add(collinear);
      }
    }
  }
  
  private String toStr(){
    StringBuilder sb = new StringBuilder();
    for(Set<Point> alp : results){
      boolean first = true;
      Point[] ps = alp.toArray(new Point[0]);
      Arrays.sort(ps);
      for(Point p : ps){
        if(!first)
          sb.append(" -> ");
        sb.append(p);
        first = false;
      }
      sb.append("\n");
    }
    return sb.toString();
  }
  
  private void draw(){
    // rescale coordinates and turn on animation mode
    StdDraw.setXscale(0, 32768);
    StdDraw.setYscale(0, 32768);
    StdDraw.show(0);
    
    for(Point p: points){
      p.draw();
    }
    // display to screen all at once
    StdDraw.show(0);
    
//    Set<String> h = new HashSet<String>();
    
    // draw segments
    for(Set<Point> alp : results){
      Point[] ps = alp.toArray(new Point[0]);
      Arrays.sort(ps);
      ps[0].drawTo(ps[ps.length-1]);
    }
    StdDraw.show(0);
  }

  /**
   * @param args
   */
  public static void main(String[] args) {
    if(args.length != 1)
      throw new IllegalArgumentException("No file name.");
    
    int i[] = In.readInts(args[0]);
    Point ps[] = new Point[i[0]];
    
    int j=0;
    for(int h=0; (h+2) < i.length; h+=2)
      ps[j++] = new Point(i[h+1],i[h+2]);
    
    Fast f = new Fast(ps);
    System.out.println(f.toStr());
    f.draw();
  }

}
