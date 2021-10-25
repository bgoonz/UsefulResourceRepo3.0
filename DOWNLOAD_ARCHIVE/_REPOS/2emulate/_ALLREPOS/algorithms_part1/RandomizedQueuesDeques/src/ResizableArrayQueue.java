import java.util.Iterator;
import java.util.NoSuchElementException;


/**
 *
 */

/**
 * @author adrian
 *
 */
public class ResizableArrayQueue<Item> implements Iterable<Item> {
  private Item[] a;
  private int N;
  private int head;
  private int tail;

  @SuppressWarnings("unchecked")
  public ResizableArrayQueue()           // construct an empty randomized queue
  {
    a = (Item[]) new Object[2];
    N = head = tail = 0;
  }

  public boolean isEmpty()           // is the queue empty?
  {
    return size() == 0;
  }

  public int size()                  // return the number of items on the queue
  {
    return N;
  }

  private void resize(int capacity) {
    if(capacity < N || capacity < 1)
      return;
    @SuppressWarnings("unchecked")
    Item[] tmp = (Item[]) new Object[capacity];
    for(int i=0; i<N; i++)
      tmp[i] = a[head+i];
    a = tmp;
    head=0;
    tail=N;
//    System.out.println("resize="+a.length);
  }

  public void enqueue(Item item)     // add the item
  {
    if(N >= a.length)
      resize(2*a.length);
    a[tail++] = item;
    N++;
  }

  public Item dequeue()              // delete and return a random item
  {
    if (isEmpty())
      throw new NoSuchElementException("Queue underflow");

    if(N==a.length/4)
      resize(a.length/2);

    N--;
    return a[head++];
  }

  public Item sample()               // return (but do not delete) a random item
  {
    return null;
  }

  public Iterator<Item> iterator()   // return an independent iterator over items in random order
  {
    return new TheIterator();
  }

  private class TheIterator implements Iterator<Item> {
    private int current;

    public TheIterator(){
      current = head;
    }

    /* (non-Javadoc)
     * @see java.util.Iterator#hasNext()
     */
    @Override
    public boolean hasNext() {
      return current <= tail;
    }

    /* (non-Javadoc)
     * @see java.util.Iterator#next()
     */
    @Override
    public Item next() {
      if(isEmpty())
        throw new NoSuchElementException();
      if(hasNext())
        return a[current++];
      return null;
    }

    /* (non-Javadoc)
     * @see java.util.Iterator#remove()
     */
    @Override
    public void remove() {
      throw new UnsupportedOperationException();
    }


  }

  // FIXME: make it private before submitting homework

  public int capacity(){
    return a.length;
  }

  public String toStr(){
    StringBuilder sb = new StringBuilder();
    for(Item i : a){
      if(i!=null){
        sb.append(i.toString());
        sb.append(" ");
      }
    }
    return sb.toString();
  }

}
