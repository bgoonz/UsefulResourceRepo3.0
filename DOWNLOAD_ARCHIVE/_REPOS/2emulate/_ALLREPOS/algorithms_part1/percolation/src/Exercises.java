/**
 * 
 */

/**
 * @author adrian
 *
 */
public class Exercises {
  
  public static String example1(){
    int N=10;
    //QuickFindUF qf = new QuickFindUF(N);
    QuickFind qf = new QuickFind(N);
    qf.union(4, 3);
    qf.union(3, 8);
    qf.union(6, 5);
    qf.union(9, 4);
    qf.union(2, 1);
    return qf.toString();
  }
  
  public static String example2(){
    int N=10;
    //QuickFindUF qf = new QuickFindUF(N);
    QuickUnion qf = new QuickUnion(N);
    qf.union(4, 3);
    qf.union(3, 8);
    qf.union(6, 5);
    qf.union(9, 4);
    qf.union(2, 1);
    return qf.toString();
  }
  
  public static String question1(){
    int N=10;
    //QuickFindUF qf = new QuickFindUF(N);
    QuickFind qf = new QuickFind(N);
    qf.union(6,8);
    qf.union(0,1);
    qf.union(4,6);
    qf.union(8,9);
    qf.union(7,6);
    qf.union(6,0);
    return qf.toString();
  }
  
  public static String question2(){
    int N=10;
    //QuickFindUF qf = new QuickFindUF(N);
    WeightedQuickUnion qf = new WeightedQuickUnion(N);
    qf.union(9,6);
    qf.union(5,7);
    qf.union(9,1);
    qf.union(0,4);
    qf.union(1,8);
    qf.union(2,1);
    qf.union(4,7);
    qf.union(0,3);
    qf.union(9,7);
    return qf.toString();
  }  

  /**
   * @param args
   */
  public static void main(String[] args) {
    //System.out.println(example1());
//    System.out.println(question1());    
    //System.out.println(example2());
    System.out.println(question2());
  }

}
