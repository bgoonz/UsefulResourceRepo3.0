/**
 *
 */

/**
 * @author adrian
 *
 */
public class Subset {

  /**
   * @param args
   */
  public static void main(String[] args) {
    RandomizedQueue<String> q = new RandomizedQueue<String>();
    if(args.length != 1)
      throw new IllegalArgumentException();

    String str;
    while(!StdIn.isEmpty()){
      str = StdIn.readString();
      q.enqueue(str);
    }

    for(int j=0; j < Integer.parseInt(args[0]); j++)
      System.out.println(q.dequeue());
  }

}
