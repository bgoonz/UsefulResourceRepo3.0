#!/usr/bin/env python

# Create Unittests for both modules
# Make sure each class/method includes a docstring
# Make sure entire script conforms to PEP8 guidelines
# To test, run the script in the terminal.


# Standard Python Library
import unittest

# Local Imports
from puppy import Puppy, Leech
from arithmetic import SimpleOperations, Complex


case1 = SimpleOperations(3, 2)
case2 = Complex(3, 2)
case3 = Puppy('James', 5)
case4 = Leech('Jonathan', 10, True)


class ArithmeticTest(unittest.TestCase):
    """Test if classes/methods are working."""
    def test_add(self):
        self.assertEqual(case1.add(), 5)

    def test_subtract(self):
        self.assertEqual(case1.subtract(), 1)

    def test_multiply(self):
        self.assertEqual(case1.multiply(), 6)

    def test_divide(self):
        self.assertEqual(case1.divide(), 1.5)

    def test_exponentiation(self):
        self.assertEqual(case2.exponentiation(), 9)

    def test_nth_root(self):
        self.assertAlmostEqual(round(case2.nth_root()), 2)


class PuppyTest(unittest.TestCase):
    """Test if classes/methods are working."""
    def test_make_upper(self):
        self.assertEqual(case3.make_upper(), 'JAMES')

    def test_show_name(self):
        self.assertEqual(case3.show_name().split()[-1], 'James')

    def test_pet_puppy(self):
        self.assertIn('Jonathan', case4.pet_puppy())


if __name__ == "__main__":
    unittest.main()
