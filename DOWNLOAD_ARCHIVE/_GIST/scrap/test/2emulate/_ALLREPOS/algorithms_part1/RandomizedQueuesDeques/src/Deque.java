import java.util.Iterator;
import java.util.NoSuchElementException;

/**
 *
 */

/**
 * @author adrian
 *
 */
public class Deque<Item> implements Iterable<Item> {
  private int N;
  private Node first;
  private Node last;

  private class Node {
    private Item item;
    private Node next;
    private Node prev;
    public Node(Item item){
      if(item == null)
        throw new java.lang.NullPointerException();
      this.item = item;
      this.next = null;
      this.prev = null;
    }
  }

  // construct an empty deque
  public Deque(){
    N = 0;
    first = last = null;
  }

  // is the deque empty?
  public boolean isEmpty(){
    return size() <= 0;
  }

  // return the number of items on the deque
  public int size(){
    return N;
  }

  // insert the item at the front
  public void addFirst(Item item) {
    if(item == null)
      throw new java.lang.NullPointerException();

    Node node = new Node(item);

    if(first==null){
      first = last = node;
    } else {
      node.next = first;
      first.prev = node;
      first = node;
    }
    N++;
  }

  // insert the item at the end
  public void addLast(Item item){
    if(item == null)
      throw new java.lang.NullPointerException();

    Node node = new Node(item);

    if(last == null){
      first = last = node;
    } else {
      last.next = node;
      node.prev = last;
      last = node;
    }
    N++;
  }

  // delete and return the item at the front
  public Item removeFirst(){
    if(isEmpty())
      throw new NoSuchElementException();

    Item item = first.item;
    if(first.next != null){
      first = first.next;
      first.prev = null;
    } else {
      first = null;
    }

    if(first == null)
      last = null;

    N--;
    return item;
  }
  // delete and return the item at the end
  public Item removeLast(){
    if(isEmpty())
      throw new NoSuchElementException();

    Item item = last.item;
    if(last.prev != null){
      last = last.prev;
      last.next = null;
    } else {
      last = null;
    }

    if(last == null)
      first = null;

    N--;
    return item;
  }

  private String toStr(){
    StringBuilder sb = new StringBuilder();
    Node current = first;
    while(current != null){
      sb.append(current.item+" ");
      current = current.next;
    }
    return sb.toString();
  }

  // return an iterator over items in order from front to end
  public Iterator<Item> iterator(){
    return new LinkedListIterator();
  }

  private class LinkedListIterator implements Iterator<Item> {
    private Node current = first;

    public LinkedListIterator(){
      current = first;
    }
    /* (non-Javadoc)
     * @see java.util.Iterator#hasNext()
     */
    @Override
    public boolean hasNext() {
      return current != null;
    }

    /* (non-Javadoc)
     * @see java.util.Iterator#next()
     */
    @Override
    public Item next() {
      if (!hasNext())
        throw new NoSuchElementException();
      Item item = current.item;
      current = current.next;
      return item;
    }

    /* (non-Javadoc)
     * @see java.util.Iterator#remove()
     */
    @Override
    public void remove() {
      throw new UnsupportedOperationException();
    }
  }
}