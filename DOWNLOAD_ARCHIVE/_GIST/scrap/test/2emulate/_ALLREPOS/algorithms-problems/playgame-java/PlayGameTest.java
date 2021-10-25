import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

public class PlayGameTest {

    protected PlayGame solution;

    @Before
    public void setUp() {
        solution = new PlayGame();
    }

    @Test(timeout = 2000)
    public void testCase0() {
        int[] you = new int[]{5, 15, 100, 1, 5};
        int[] computer = new int[]{5, 15, 100, 1, 5};

        int expected = 120;
        int actual = solution.saveCreatures(you, computer);

        Assert.assertEquals(expected, actual);
    }

    @Test(timeout = 2000)
    public void testCase1() {
        int[] you = new int[]{1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000};
        int[] computer = new int[]{1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000};

        int expected = 0;
        int actual = solution.saveCreatures(you, computer);

        Assert.assertEquals(expected, actual);
    }

    @Test(timeout = 2000)
    public void testCase2() {
        int[] you = new int[]{1, 3, 5, 7, 9, 11, 13, 15, 17, 19};
        int[] computer = new int[]{2, 4, 6, 8, 10, 12, 14, 16, 18, 20};

        int expected = 99;
        int actual = solution.saveCreatures(you, computer);

        Assert.assertEquals(expected, actual);
    }

    @Test(timeout = 2000)
    public void testCase3() {
        int[] you = new int[]{2, 3, 4, 5, 6, 7, 8, 9, 10, 11};
        int[] computer = new int[]{10, 9, 8, 7, 6, 5, 4, 3, 2, 1};

        int expected = 65;
        int actual = solution.saveCreatures(you, computer);

        Assert.assertEquals(expected, actual);
    }

    @Test(timeout = 2000)
    public void testCase4() {
        int[] you = new int[]{651, 321, 106, 503, 227, 290, 915, 549, 660, 115, 491, 378, 495, 789, 507, 381, 685, 530, 603, 394, 7, 704, 101, 620, 859, 490, 744, 495, 379, 781, 550, 356, 950, 628, 177, 373, 132, 740, 946, 609, 29, 329, 57, 636, 132, 843, 860, 594, 718, 849};
        int[] computer = new int[]{16, 127, 704, 614, 218, 67, 169, 621, 340, 319, 366, 658, 798, 803, 524, 608, 794, 896, 145, 627, 401, 253, 137, 851, 67, 426, 571, 302, 546, 225, 311, 111, 804, 135, 284, 784, 890, 786, 740, 612, 360, 852, 228, 859, 229, 249, 540, 979, 55, 82};

        int expected = 25084;
        int actual = solution.saveCreatures(you, computer);

        Assert.assertEquals(expected, actual);
    }

}
