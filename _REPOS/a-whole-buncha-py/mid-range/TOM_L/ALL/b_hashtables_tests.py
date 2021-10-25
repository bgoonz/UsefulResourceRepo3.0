import unittest

from b_hashtables import (BasicHashTable,
                          hash_table_insert,
                          hash_table_remove,
                          hash_table_retrieve)


class TestBasicHashTable(unittest.TestCase):

    def test_hash_table_creation(self):
        ht = BasicHashTable(8)

        self.assertEqual(len(ht.storage), 8)
        self.assertTrue(ht.storage is not None)

    def test_hash_table_retrieval_of_initialized_value(self):
        ht = BasicHashTable(8)

        return_value = hash_table_retrieve(ht, "key-0")
        self.assertTrue(return_value is None)

    def test_hash_table_insertion_and_retrieval(self):
        ht = BasicHashTable(8)

        hash_table_insert(ht, "key-0", "new-val-0")
        return_value = hash_table_retrieve(ht, "key-0")
        self.assertTrue(return_value == "new-val-0")

    def test_hash_table_removal(self):
        ht = BasicHashTable(8)

        hash_table_insert(ht, "key-1", "new-val-1")
        hash_table_remove(ht, "key-1")
        return_value = hash_table_retrieve(ht, "key-1")
        self.assertTrue(return_value is None)


if __name__ == '__main__':
    unittest.main()
