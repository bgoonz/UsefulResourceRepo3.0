import static org.junit.Assert.*;
import static org.junit.Assert.assertThat;
import static org.junit.matchers.JUnitMatchers.*;
import static org.hamcrest.CoreMatchers.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.NoSuchElementException;
import java.util.Random;

import org.junit.Before;
import org.junit.Test;

/**
 *
 */

/**
 * @author adrian
 *
 */
public class RandomizedQueueTest {

  private RandomizedQueue<String> strQueue;

  /**
   * @throws java.lang.Exception
   */
  @Before
  public void setUp() throws Exception {
    strQueue = new RandomizedQueue<String>();
  }

  @Test
  public void testIsEmpty() {
    assertTrue(strQueue.isEmpty());
  }

  @Test
  public void testSize() {
    assertTrue(strQueue.size() == 0);
  }

  @Test
  public void testIsNotEmpty() {
    strQueue.enqueue("A");
    assertFalse(strQueue.isEmpty());
  }

  @Test
  public void testSizeAndEmptyWithEnqueue() {
    strQueue.enqueue("A");
    strQueue.enqueue("B");
    strQueue.enqueue("C");
    assertEquals(strQueue.size(), 3);
    assertEquals(strQueue.isEmpty(), false);
  }

  @Test(timeout=50)
  public void testSizeAndEmptyWithQueueue() {
    strQueue.enqueue("A");
    strQueue.enqueue("B");
    strQueue.enqueue("C");
    strQueue.dequeue();
    strQueue.dequeue();
    strQueue.dequeue();
    assertEquals(strQueue.size(), 0);
    assertEquals(strQueue.isEmpty(), true);
  }

  @Test(timeout=50)
  public void testEnqueueAndQueueue() {
    strQueue.enqueue("A");
    assertEquals("A",strQueue.dequeue());
  }

  @Test(timeout=50)
  public void testIteratorEnqueueSize() {
    String ele[] = new String[]{"A","B","C","D", "E"};

    for(String e: ele)
      strQueue.enqueue(e);

    int count=0;
    Iterator<String> it = strQueue.iterator();
    while(it.hasNext()){
      it.next();
      count++;
    }

//    System.out.println(strQueue.toStr());
    assertEquals(ele.length,count);
  }

  @Test(timeout=50)
  public void testEnqueueAndQueueueWithNItems() {
    String ele[] = new String[]{"A","B","C","D", "E"};
    for(String e: ele)
      strQueue.enqueue(e);

    ArrayList<String> arr = new ArrayList<String>();
    for(String e: ele)
      arr.add(e);

    for(String e : ele){
      assertThat(arr, hasItem(strQueue.dequeue()));
    }
  }

  @Test(expected=NoSuchElementException.class)
  public void testEnqueueAndQueueueUnderflow() {
    strQueue.dequeue();
  }

  @Test(expected=UnsupportedOperationException.class)
  public void testRemoveIterator() {
    Iterator<String> it = strQueue.iterator();
    it.remove();
  }

  @Test(expected=NoSuchElementException.class)
  public void testIteratorNext() {
    Iterator<String> it = strQueue.iterator();
    it.next();
  }

  // FIXME make it random ready
  @Test(timeout=150)
  public void testIterator() {
    String ele[] = new String[]{"A","B","C","D", "E"};
    ArrayList<String> arr = new ArrayList<String>();
    for(String e: ele)
      arr.add(e);

    for(String e: ele)
      strQueue.enqueue(e);

    Iterator<String> it = strQueue.iterator();
    for(String e: ele){
      assertEquals(it.hasNext(), true);
      assertThat(arr, hasItem(it.next()));
    }
  }

  // FIXME make it random ready
//  @Test(timeout=50)
//  public void testIteratorToString() {
//    String ele[] = new String[]{"A","B","C","D", "E"};
//    StringBuilder sb = new StringBuilder();
//    for(String e: ele){
//      sb.append(e+" ");
//      strQueue.enqueue(e);
//    }
//
//    String[] expected = sb.toString().split(" ");
//    String[] actual = strQueue.toStr().split(" ");
//    Arrays.sort(expected);
//    Arrays.sort(actual);
//    for(int j=0; j<expected.length; j++){
//      assertEquals(expected[j], actual[j]);
//    }
//  }

//  @Test(timeout=150)
//  public void testCapacityIncreaseDoubling() {
//    RandomizedQueue<Integer> intQueue = new RandomizedQueue<Integer>();
//    for(int i=0; i<100; i++){
//      intQueue.enqueue(i);
//      if(i<2) assertEquals(intQueue.capacity(), 2);
//      else{
//        int nextLg = (int) Math.pow(2,Math.ceil(Math.log(i+1)/Math.log(2)));
////        System.out.println(String.format("i=%d; capacity=%d; nextLog=%d",i,intQueue.capacity(), nextLg));
//        assertEquals(intQueue.capacity(), nextLg);
//      }
//    }
//  }

//  @Test(timeout=150)
//  public void testCapacityDecreaseHalving() {
//    RandomizedQueue<Integer> intQueue = new RandomizedQueue<Integer>();
//
//    for(int i=0; i<100; i++)
//      intQueue.enqueue(i);
//
//    int capacity = 128;
//
//    for(int i=99; i>=0; i--){
//      intQueue.dequeue();
//      if(capacity/4 > intQueue.size())
//        capacity /= 2;
//      //System.out.println(String.format("i=%d; N=%d a_capacity=%d; e_capacity=%d",i,intQueue.size(), intQueue.capacity(), capacity));
//      assertEquals(intQueue.capacity(), capacity);
//    }
//  }

  @Test(timeout=150)
  public void testSimultaneousIterator() {
    String ele[] = new String[]{"A","B","C","D", "E"};

    for(String e: ele)
      strQueue.enqueue(e);

    Iterator<String> it = strQueue.iterator();
    Iterator<String> it2 = strQueue.iterator();

    for(int i=0; i< ele.length; i++){
      assertEquals(it.hasNext(), true);
      assertEquals(it2.hasNext(), true);
      it.next();
    }
    assertEquals(it.hasNext(), false);
    assertEquals(it2.hasNext(), true);

    for(int i=0; i< ele.length; i++){
      assertEquals(it2.hasNext(), true);
      it2.next();
    }
    assertEquals(it2.hasNext(), false);
  }

  @Test(timeout=200)
  public void testEnqueueDequeue() {
    RandomizedQueue<Integer> q = new RandomizedQueue<Integer>();

      for(int j=0; j<17; j++){
          q.enqueue(j);
          q.dequeue();
      }
      assertEquals(q.isEmpty(), true);
  }


  @Test(timeout=1000)
  public void testMultipleEnqueueMultipleDequeue() {
    RandomizedQueue<Integer> q = new RandomizedQueue<Integer>();

    for(int y=1; y<2+100; y++)
      for(int j=0; j<50; j++){
        for(int x=0; x<y; x++){
//          System.out.println("q << "+j);
          q.enqueue(j);
          q.sample();
        }
        for(int x=0; x<y; x++){
          int v = q.dequeue();
//          System.out.println("q >> "+ v+"\n");
        }
        assertEquals(q.isEmpty(), true);
      }
  }
  
  @Test(timeout=1000)
  public void testIteratorUniformRandomDequeu(){
    RandomizedQueue<Integer> q = new RandomizedQueue<Integer>();
    
    int N = 125;
    
    for(int h=0; h<N; h++)
      q.enqueue(h);
    
    Boolean b[] = new Boolean[N];
    for(int h=0; h<N; h++)
      b[h] = false;
    
    Iterator<Integer> it = q.iterator();
    while(it.hasNext()){
      int v = q.dequeue();
      assertEquals(false, b[v]); // not repeated
      b[v] = true;
    }
    
    for(int h=0; h<N; h++)
      assertEquals(true, b[h]);
  }

  @Test(timeout=1000)
  public void testFrecuency(){
    RandomizedQueue<Integer> q;
    
    int N = 3;
    int T = 1000;
    int t[] = new int[N];
    
    
    
    for(int j=0; j<T; j++){
      q = new RandomizedQueue<Integer>();
      for(int i=0; i<N; i++)
        q.enqueue(i);
      
//      System.out.println(q.toStr());
      
      int v=-1;
      for(int i=0; v != 0; i++){
        v = q.dequeue();
        t[v]++;
      }
    }
    
//    System.out.println();
    
    int expected = (int)(T/N);
    for(int i=0; i<N; i++){
      System.out.println(i+" = "+t[i]);
      //assertEquals(expected, t[i], 2);
    }
  }

}
