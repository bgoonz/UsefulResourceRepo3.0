import static org.junit.Assert.*;

import java.util.Iterator;
import java.util.NoSuchElementException;

import org.junit.Before;
import org.junit.Test;

/**
 * 
 */

/**
 * @author adrian
 *
 */
public class DequeTest {
  
  private Deque<String> strDeque;

  /**
   * @throws java.lang.Exception
   */
  @Before
  public void setUp() throws Exception {
    strDeque = new Deque<String>();
  }

  /**
   * Test method for {@link Deque#isEmpty()}.
   */
  @Test
  public void testIsEmpty() {
    assertTrue(strDeque.isEmpty());
  }

  /**
   * Test method for {@link Deque#isEmpty()}.
   */
  @Test
  public void testIsNotEmpty() {
    strDeque.addFirst("A");
    assertFalse(strDeque.isEmpty());
  }  

  /**
   * Test method for {@link Deque#size()}.
   */
  @Test
  public void testSize() {
    assertTrue(strDeque.size() == 0);
  }
  
  /**
   * Test method for {@link Deque#size()}.
   */
  @Test
  public void testSizeAndEmptyWithAddFirst() {
    strDeque.addFirst("A");
    strDeque.addFirst("B");
    strDeque.addFirst("C");    
    assertEquals(strDeque.size(), 3);
    assertEquals(strDeque.isEmpty(), false);
  }  
  
  /**
   * Test method for {@link Deque#size()}.
   */
  @Test
  public void testSizeAddFirst() {
    strDeque.addFirst("A");
    assertTrue(strDeque.size() == 1);
    strDeque.addFirst("B");
    assertTrue(strDeque.size() == 2);
    strDeque.addFirst("C");
    assertTrue(strDeque.size() == 3);    
  }
  
  /**
   * Test method for {@link Deque#size()}.
   */
  @Test
  public void testSizeAddLast() {
    strDeque.addLast("A");
    assertTrue(strDeque.size() == 1);
    strDeque.addLast("B");
    assertTrue(strDeque.size() == 2);
    strDeque.addLast("C");
    assertTrue(strDeque.size() == 3);    
  }  

  /**
   * Test method for {@link Deque#addFirst(java.lang.Object)}.
   */
  @Test(expected=NullPointerException.class)
  public void testAddFirst() {
    strDeque.addFirst(null);
  }

  /**
   * Test method for {@link Deque#addFirst(java.lang.Object)}.
   */
  @Test(timeout=200)
  public void testAddFirstAndRemoveLast() {
    Deque<Integer> q = new Deque<Integer>();
    
    for(int j=0; j<50; j++){
      q.addFirst(j);
      assertEquals(j,(int)q.removeLast());
    }
    assertEquals(q.isEmpty(), true);
  }
  
  @Test(timeout=200)
  public void testAddFirstAndRemoveFirst() {
    Deque<Integer> q = new Deque<Integer>();
    
    for(int j=0; j<50; j++){
      q.addFirst(j);
      assertEquals((int)q.removeFirst(), (int)j);
    }
    assertEquals(q.isEmpty(), true);
  }
  
  @Test(timeout=200)
  public void testAddLastAndRemoveLast() {
    Deque<Integer> q = new Deque<Integer>();
    
    for(int j=0; j<50; j++){
      q.addLast(j);
      assertEquals((int)q.removeLast(), (int)j);
    }
    assertEquals(q.isEmpty(), true);
  }
  
  @Test(timeout=200)
  public void testAddLastAndRemoveFirst() {
    Deque<Integer> q = new Deque<Integer>();
    
    for(int j=0; j<50; j++){
      q.addLast(j);
      assertEquals((int)q.removeFirst(), (int)j);
    }
    assertEquals(q.isEmpty(), true);
  }
  
  @Test(timeout=200)
  public void testAddFirstAddLastRemoveFirstRemoveLast() {
    Deque<Integer> q = new Deque<Integer>();
    
    for(int j=0; j<4; j++)
      q.addLast(j);
    
    for(int j=10; j<14; j++)
      q.addFirst(j);
    
    q.addFirst(100);
    q.addLast(5);
    
    // q = {13,12,11,10,0,1,2,3}
    
    assertEquals(100,(int)q.removeFirst());
    assertEquals(5,(int)q.removeLast());
    
    assertEquals(13,(int)q.removeFirst());
    assertEquals(3,(int)q.removeLast());
    
    for(int j=0; j<2; j++)
      assertEquals(2-j,(int)q.removeLast());
    
    for(int j=0; j<3; j++)
      assertEquals(12-j,(int)q.removeFirst());
    
    assertEquals(0,(int)q.removeLast());
    
    assertEquals(q.isEmpty(), true);
    
    for(int j=0; j<50; j++)
      q.addLast(j);
    
    for(int j=0; j<50; j++)
      assertEquals(49-j ,(int)q.removeLast());
    
  }
  
  /**
   * Test method for {@link Deque#addLast(java.lang.Object)}.
   */
  @Test(expected=NullPointerException.class)
  public void testAddLast() {
    strDeque.addLast(null);
  }

  /**
   * Test method for {@link Deque#removeFirst()}.
   */
  @Test(expected=NoSuchElementException.class)
  public void testRemoveFirst() {
    strDeque.removeFirst();
  }

  /**
   * Test method for {@link Deque#removeLast()}.
   */
  @Test(expected=NoSuchElementException.class)
  public void testRemoveLast() {
    strDeque.removeLast();
  }

  /**
   * Test method for {@link Deque#iterator()}.
   */
  @Test(expected=UnsupportedOperationException.class)
  public void testRemoveIterator() {
    Iterator<String> it = strDeque.iterator();
    it.remove();
  }

  /**
   * Test method for {@link Deque#iterator()}.
   */
  @Test(expected=NoSuchElementException.class)
  public void testIteratorNext() {
    Iterator<String> it = strDeque.iterator();
    it.next();
  }
  
  /**
   * Test method for {@link Deque#addFirst()}.
   */
  @Test
  public void testAddFirstWithIterator() {
    strDeque.addFirst("A");
    strDeque.addFirst("B");
    strDeque.addFirst("C");
    Iterator<String> it = strDeque.iterator();
//    assertEquals(strDeque.toString(), "C B A ");
    assertTrue(it.hasNext());
    assertTrue(it.next() == "C");
    assertTrue(it.hasNext());
    assertTrue(it.next() == "B");
    assertTrue(it.hasNext());
    assertTrue(it.next() == "A");
    assertEquals(it.hasNext(), false);
  }

  
  @Test(expected=UnsupportedOperationException.class)
  public void testIteratorRemoveException() {
    strDeque.addFirst("A");
    Iterator<String> it = strDeque.iterator();
    it.remove();   
  }  
  
  /**
   * Test method for {@link Deque#addLast(java.lang.Object)}.
   */
  @Test
  public void testAddLastWithIterator() {
    strDeque.addLast("A");
    strDeque.addLast("B");
    strDeque.addLast("C");
    Iterator<String> it = strDeque.iterator();
    assertTrue(it.hasNext());
    assertEquals(it.next(), "A");
    assertEquals(it.hasNext(), true);
    assertEquals(it.next(), "B");
    assertEquals(it.hasNext(), true);
    assertEquals(it.next(), "C");
    assertEquals(it.hasNext(), false);
  }
  
  @Test
  public void testRemoveFirstSizeAndEmpty() {
    strDeque.addFirst("A");
    strDeque.removeFirst();
    assertEquals(0,strDeque.size());
    assertEquals(true,strDeque.isEmpty());
  } 
  
  @Test
  public void testRemoveLastSizeAndEmpty() {
    strDeque.addFirst("A");
    strDeque.removeLast();
    assertEquals(0,strDeque.size());
    assertEquals(true,strDeque.isEmpty());
  }   
  
  @Test
  public void testRemoveFirstWithAddFirst() {
    strDeque.addFirst("A");
    strDeque.addFirst("B");
    strDeque.addFirst("C");
    assertEquals("C",strDeque.removeFirst());
    assertEquals("B",strDeque.removeFirst());
    assertEquals("A",strDeque.removeFirst());
  }
  
  @Test
  public void testRemoveLastWithAddFirst() {
    strDeque.addFirst("A");
    strDeque.addFirst("B");
    strDeque.addFirst("C");
    assertEquals("A",strDeque.removeLast());
    assertEquals("B",strDeque.removeLast());
    assertEquals("C",strDeque.removeLast());
  }
  
  @Test
  public void testRemoveLastWithAddLast() {
    strDeque.addLast("A");
    strDeque.addLast("B");
    strDeque.addLast("C");
    assertEquals("C",strDeque.removeLast());
    assertEquals("B",strDeque.removeLast());
    assertEquals("A",strDeque.removeLast());
  }
  
  /*
   * TODO
   * 
Test 6: Calls to addFirst(), addLast(), removeFirst(), and removeLast()
  *     5 random calls (p1 = 0.4, p2 = 0.4, p3 = 0.1, p4 = 0.1)
  *    50 random calls (p1 = 0.4, p2 = 0.4, p3 = 0.1, p4 = 0.1)
  *   500 random calls (p1 = 0.4, p2 = 0.4, p3 = 0.1, p4 = 0.1)
  *  1000 random calls (p1 = 0.4, p2 = 0.4, p3 = 0.1, p4 = 0.1)
  *     5 random calls (p1 = 0.1, p2 = 0.1, p3 = 0.4, p4 = 0.4)
  *    50 random calls (p1 = 0.1, p2 = 0.1, p3 = 0.4, p4 = 0.4)
    Failed on removeFirst() operation 9
    student   value = 2
    reference value = 8
  *   500 random calls (p1 = 0.1, p2 = 0.1, p3 = 0.4, p4 = 0.4)
    Failed on removeFirst() operation 28
    student   value = 23
    reference value = 26
  *  1000 random calls (p1 = 0.1, p2 = 0.1, p3 = 0.4, p4 = 0.4)
    Failed on removeLast() operation 11
    student   value = 0
    reference value = 10
==> FAILED

Test 10: Check iterator() after intermixed calls to addFirst(), addLast(), removeFirst(), and removeLast()
      -  student   solution has 2 non-null entries
      -  reference solution has 1 non-null entries
      -  1 extra entry in student solution: 12
      iterator failed after applying operation 13
==> FAILED

 
Test 4a-4e: Measuring total memory usage after inserting N items 
 and then deleting all but one item.

                 N        bytes
----------------------------------------------------------
=> FAILED        8          424   (1.1x)
=> FAILED       64         3112   (8.1x)
=> FAILED      256        12328  (32.1x)
=> FAILED     1024        49192 (128.1x)
=> FAILED     4096       196648 (512.1x)
==> 0/5 tests passed

Memory of Deque after adding N = 2^i items:
 * Student memory = 71498.91  (R^2 = 0.000)
 * 

Test 6: Checking for loitering by adding 100 strings and deleting them:
 * loitering detected on 99 of 100 removeFirst() operations
 * loitering detected on 99 of 100 removeLast() operations
==> FAILED
 
   */
  
}
