import java.util.*;

/**
 * Brute force. Write a program Brute.java that examines 4 points at a time
 * and checks whether they all lie on the same line segment, printing out any
 * such line segments to standard output and drawing them using standard
 * drawing. To check whether the 4 points p, q, r, and s are collinear, check
 * whether the slopes between p and q, between p and r, and between p and s
 * are all equal.
 * 
 * The order of growth of the running time of your program should be N4 in the
 * worst case and it should use space proportional to N.
 */

/**
 * @author adrian
 * 
 */
public class Brute {
  private ArrayList<ArrayList<Point>> results;
  private Point[] points;
  
  public Brute(){
    
  }
  
  private Brute(Point[] points){
    this.points = points;
    collinear(points);
  }
  
  private void collinear(Point[] points){
    results = new ArrayList<ArrayList<Point>>();

    int l = points.length;
    if(l<4){
      return;
    }
    
    
    Arrays.sort(points);
    
    for(int a=0; a<l; a++)
      for(int b=a+1; b<l; b++)
        for(int c=b+1; c<l; c++)
          for(int d=c+1; d<l; d++){
            double ab = points[a].slopeTo(points[b]);
            double ac = points[a].slopeTo(points[c]);
            double ad = points[a].slopeTo(points[d]);
            if(ab == ac && ac == ad){
              ArrayList<Point> p = new ArrayList<Point>();
              p.add(points[a]);
              p.add(points[b]);
              p.add(points[c]);
              p.add(points[d]);
              results.add(p);
            }
          }
  }
  
  private String toStr(){
    StringBuilder sb = new StringBuilder();
    for(ArrayList<Point> alp : results){
      boolean first = true;
      for(Point p : alp){
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
    for(ArrayList<Point> alp : results){
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
    
    Brute p = new Brute(ps);
    System.out.println(p.toStr());
    p.draw();
  }

}
