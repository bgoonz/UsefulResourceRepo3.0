import static org.junit.Assert.*;

import java.util.Iterator;

import org.junit.Before;
import org.junit.Test;

/**
 * 
 */

/**
 * @author adrian
 * 
 */
public class BoardTest {
  private Board b2, b3, b4;
  private final int[][] a2 = { { 1, 0 }, { 3, 2 } };
  private final int[][] a3 = { { 8, 1, 3 }, { 4, 0, 2 }, { 7, 6, 5 } };
  private final int[][] a4 = { { 1, 2, 3, 4 }, { 5, 6, 7, 8 },
      { 9, 10, 11, 12 }, { 13, 14, 15, 0 } };

  /**
   * @throws java.lang.Exception
   */
  @Before
  public void setUp() throws Exception {
    b3 = new Board(a3);
    b2 = new Board(a2);
    b4 = new Board(a4);
  }

  /**
   * Test method for {@link Board#dimension()}.
   */
  @Test
  public void testDimension2() {
    b2 = new Board(a2);
    assertEquals(2, b2.dimension());
  }

  /**
   * Test method for {@link Board#dimension()}.
   */
  @Test
  public void testDimension3() {
    assertEquals(3, b3.dimension());
  }

  /**
   * Test method for {@link Board#dimension()}.
   */
  @Test
  public void testDimension4() {
    assertEquals(4, b4.dimension());
  }

  /**
   * Test method for {@link Board#hamming()}.
   */
  @Test
  public void testHamming3() {
    assertEquals(b3.hamming(), 5);
  }

  /**
   * Test method for {@link Board#hamming()}.
   */
  @Test
  public void testHamming2() {
    assertEquals(1, b2.hamming());
  }

  /**
   * Test method for {@link Board#hamming()}.
   */
  @Test
  public void testHamming4() {
    assertEquals(0, b4.hamming());
  }

  /**
   * Test method for {@link Board#manhattan()}.
   */
  @Test
  public void testManhattan3() {
    assertEquals(10, b3.manhattan());
  }

  /**
   * Test method for {@link Board#manhattan()}.
   */
  @Test
  public void testManhattan2() {
    assertEquals(1, b2.manhattan());
  }

  /**
   * Test method for {@link Board#manhattan()}.
   */
  @Test
  public void testManhattan4() {
    assertEquals(0, b4.manhattan());
  }

  /**
   * Test method for {@link Board#isGoal()}.
   */
  @Test
  public void testIsGoal2() {
    assertEquals(false, b2.isGoal());
  }

  /**
   * Test method for {@link Board#isGoal()}.
   */
  @Test
  public void testIsGoal3() {
    assertEquals(false, b3.isGoal());
  }

  /**
   * Test method for {@link Board#isGoal()}.
   */
  @Test
  public void testIsGoal4() {
    assertEquals(true, b4.isGoal());
  }

  /**
   * Test method for {@link Board#twin()}.
   */
  // @Test
  // public void testTwin() {
  // System.out.println(b3.toString());
  // System.out.println(b3.twin().toString());
  // }

  /**
   * Test method for {@link Board#equals(java.lang.Object)}.
   */
  @Test
  public void testEqualsObjectSame() {
    assertEquals(true, b3.equals(b3));
  }

  /**
   * Test method for {@link Board#equals(java.lang.Object)}.
   */
  @Test
  public void testEqualsObjectDifferent() {
    assertEquals(false, b3.equals(b3.twin()));
  }

  /**
   * Test method for {@link Board#equals(java.lang.Object)}.
   */
  @Test
  public void testEqualsObjectDifferentLength() {
    assertEquals(false, b3.equals(b2));
  }

  /**
   * Test method for {@link Board#neighbors()}.
   */
  @Test
  public void testNeighbors3() {
    boolean[] bool = new boolean[4];

    Board n1 = new Board(new int[][] { { 8, 0, 3 }, { 4, 1, 2 }, { 7, 6, 5 } });
    Board n2 = new Board(new int[][] { { 8, 1, 3 }, { 4, 2, 0 }, { 7, 6, 5 } });
    Board n3 = new Board(new int[][] { { 8, 1, 3 }, { 4, 6, 2 }, { 7, 0, 5 } });
    Board n4 = new Board(new int[][] { { 8, 1, 3 }, { 0, 4, 2 }, { 7, 6, 5 } });
    // Iterator<Board> it = b3.neighbors().iterator();
    for (Board b : b3.neighbors()) {
      if (b.toString().equals(n1.toString())) {
        bool[0] = true;
      } else if (b.toString().equals(n2.toString())) {
        bool[1] = true;
      } else if (b.toString().equals(n3.toString())) {
        bool[2] = true;
      } else if (b.toString().equals(n4.toString())) {
        bool[3] = true;
      }
      // System.out.println(b);
    }
    for (boolean u : bool) {
      assertTrue(u);
    }
  }

  /**
   * Test method for {@link Board#neighbors()}.
   */
  @Test
  public void testNeighbors2() {
    boolean[] bool = new boolean[2];

    Board n1 = new Board(new int[][] { { 0, 1 }, { 3, 2 } });
    Board n2 = new Board(new int[][] { { 1, 2 }, { 3, 0 } });
    for (Board b : b2.neighbors()) {
      if (b.toString().equals(n1.toString())) {
        bool[0] = true;
      } else if (b.toString().equals(n2.toString())) {
        bool[1] = true;
      }
      // System.out.println(b);
    }
    for (boolean u : bool) {
      assertTrue(u);
    }
  }

  @Test(timeout = 50)
  public void testSolver() {
    int[][] a = new int[][] { { 0, 1, 3 }, { 4, 2, 5 }, { 7, 8, 6 }, };
    Solver sol = new Solver(new Board(a));
    assertEquals(4, sol.moves());
    // for(Board b: sol.solution()){
    // System.out.println(b);
    // }
    // System.out.println();
  }

  /**
   * @param string
   * @return
   */
  private Solver solver(String filename) {
    String path = "/Users/adrian/Dropbox/algorithms_part1/programs/puzzle/test/8puzzle/";
    In in = new In(path + filename);
    int N = in.readInt();
    int[][] tiles = new int[N][N];
    for (int i = 0; i < N; i++) {
      for (int j = 0; j < N; j++) {
        tiles[i][j] = in.readInt();
      }
    }
    // solve the slider puzzle
    Board initial = new Board(tiles);
    Solver solver = new Solver(initial);
    return solver;
  }

  @Test(timeout = 1000)
  public void testPuzzleUnSolvable() {
    assertEquals(false, solver("puzzle3x3-unsolvable.txt").isSolvable());
  }
  
  @Test(timeout = 1000)
  public void testPuzzleIsSolvable() {
    assertEquals(true, (new Solver(b3)).isSolvable());
  }

  @Test(timeout = 300)
  public void testPuzzle1() {
    Solver sol = solver("puzzle01.txt");
    assertEquals(1, sol.moves());
  }

  @Test(timeout = 300)
  public void testPuzzle2() {
    assertEquals(2, solver("puzzle02.txt").moves());
  }

  @Test(timeout = 300)
  public void testPuzzle3() {
    assertEquals(3, solver("puzzle03.txt").moves());
  }

  @Test(timeout = 300)
  public void testPuzzle4() {
    assertEquals(4, solver("puzzle04.txt").moves());
  }

  @Test(timeout = 300)
  public void testPuzzle5() {
    assertEquals(5, solver("puzzle05.txt").moves());
  }

  @Test(timeout = 300)
  public void testPuzzle6() {
    assertEquals(6, solver("puzzle06.txt").moves());
  }

  @Test(timeout = 300)
  public void testPuzzle7() {
    Solver sol = solver("puzzle07.txt");
    System.out.println(sol.solution());
    assertEquals(7, sol.moves());
  }

  @Test(timeout = 300)
  public void testPuzzle8() {
    assertEquals(8, solver("puzzle08.txt").moves());
  }

  @Test(timeout = 300)
  public void testPuzzle9() {
    assertEquals(9, solver("puzzle09.txt").moves());
  }

  @Test(timeout = 300)
  public void testPuzzle10() {
    assertEquals(10, solver("puzzle10.txt").moves());
  }

  @Test(timeout = 300)
  public void testPuzzle11() {
    assertEquals(11, solver("puzzle11.txt").moves());
  }

  @Test(timeout = 300)
  public void testPuzzle12() {
    assertEquals(12, solver("puzzle12.txt").moves());
  }

  @Test(timeout = 300)
  public void testPuzzle13() {
    assertEquals(13, solver("puzzle13.txt").moves());
  }
//
//  @Test(timeout = 300)
//  public void testPuzzle14() {
//    assertEquals(14, solver("puzzle14.txt").moves());
//  }
//
//  @Test(timeout = 300)
//  public void testPuzzle15() {
//    assertEquals(15, solver("puzzle15.txt").moves());
//  }
//
//  @Test(timeout = 300)
//  public void testPuzzle16() {
//    assertEquals(16, solver("puzzle16.txt").moves());
//  }
//
//  @Test(timeout = 300)
//  public void testPuzzle17() {
//    assertEquals(17, solver("puzzle17.txt").moves());
//  }
//
//  @Test(timeout = 300)
//  public void testPuzzle18() {
//    assertEquals(18, solver("puzzle18.txt").moves());
//  }
//
//  @Test(timeout = 300)
//  public void testPuzzle19() {
//    assertEquals(19, solver("puzzle19.txt").moves());
//  }
//
//  @Test(timeout = 300)
//  public void testPuzzle20() {
//    assertEquals(20, solver("puzzle20.txt").moves());
//  }
//
//  @Test(timeout = 300)
//  public void testPuzzle21() {
//    assertEquals(21, solver("puzzle21.txt").moves());
//  }
//
//  @Test(timeout = 300)
//  public void testPuzzle22() {
//    assertEquals(22, solver("puzzle22.txt").moves());
//  }
//
//  @Test(timeout = 300)
//  public void testPuzzle23() {
//    assertEquals(23, solver("puzzle23.txt").moves());
//  }
//
//  @Test(timeout = 300)
//  public void testPuzzle24() {
//    assertEquals(24, solver("puzzle24.txt").moves());
//  }
//
//  @Test(timeout = 300)
//  public void testPuzzle25() {
//    assertEquals(25, solver("puzzle25.txt").moves());
//  }
//
//  @Test(timeout = 300)
//  public void testPuzzle26() {
//    assertEquals(26, solver("puzzle26.txt").moves());
//  }
//
//  @Test(timeout = 300)
//  public void testPuzzle27() {
//    assertEquals(27, solver("puzzle27.txt").moves());
//  }
//
//  @Test(timeout = 300)
//  public void testPuzzle28() {
//    assertEquals(28, solver("puzzle28.txt").moves());
//  }
//
//  @Test(timeout = 300)
//  public void testPuzzle29() {
//    assertEquals(29, solver("puzzle29.txt").moves());
//  }
//
//  @Test(timeout = 300)
//  public void testPuzzle30() {
//    assertEquals(30, solver("puzzle30.txt").moves());
//  }
//
//  @Test(timeout = 300)
//  public void testPuzzle31() {
//    assertEquals(31, solver("puzzle31.txt").moves());
//  }
//
//  @Test(timeout = 300)
//  public void testPuzzle32() {
//    assertEquals(32, solver("puzzle32.txt").moves());
//  }
//
//  @Test(timeout = 300)
//  public void testPuzzle33() {
//    assertEquals(33, solver("puzzle33.txt").moves());
//  }
//
//  @Test(timeout = 300)
//  public void testPuzzle34() {
//    assertEquals(34, solver("puzzle34.txt").moves());
//  }
//
//  @Test(timeout = 300)
//  public void testPuzzle35() {
//    assertEquals(35, solver("puzzle35.txt").moves());
//  }
//
//  @Test(timeout = 300)
//  public void testPuzzle36() {
//    assertEquals(36, solver("puzzle36.txt").moves());
//  }
//
//  @Test(timeout = 300)
//  public void testPuzzle37() {
//    assertEquals(37, solver("puzzle37.txt").moves());
//  }
//
//  @Test(timeout = 300)
//  public void testPuzzle38() {
//    assertEquals(38, solver("puzzle38.txt").moves());
//  }
//
//  @Test(timeout = 300)
//  public void testPuzzle39() {
//    assertEquals(39, solver("puzzle39.txt").moves());
//  }
//
//  @Test(timeout = 300)
//  public void testPuzzle40() {
//    assertEquals(40, solver("puzzle40.txt").moves());
//  }
//
//  @Test(timeout = 300)
//  public void testPuzzle41() {
//    assertEquals(41, solver("puzzle41.txt").moves());
//  }
//
//  @Test(timeout = 300)
//  public void testPuzzle42() {
//    assertEquals(42, solver("puzzle42.txt").moves());
//  }
//
//  @Test(timeout = 300)
//  public void testPuzzle43() {
//    assertEquals(43, solver("puzzle43.txt").moves());
//  }
//
//  @Test(timeout = 300)
//  public void testPuzzle44() {
//    assertEquals(44, solver("puzzle44.txt").moves());
//  }
//
//  @Test(timeout = 300)
//  public void testPuzzle45() {
//    assertEquals(45, solver("puzzle45.txt").moves());
//  }
//
//  // -------- Hard ones --------
//
//  @Test(timeout = 300)
//  public void testPuzzle4x41() {
//    assertEquals(38, solver("puzzle4x4-hard1.txt").moves());
//  }
//
//  @Test(timeout = 300)
//  public void testPuzzle4x42() {
//    assertEquals(47, solver("puzzle4x4-hard2.txt").moves());
//  }
}
