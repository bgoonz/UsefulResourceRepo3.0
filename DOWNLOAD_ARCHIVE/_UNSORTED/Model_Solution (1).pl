#include <stdio.h>
 
void insertionSort(int arr[], int n)
{
  // iterate through our array
  // keep a reference to the current element
  // keep a secondary index j for the element that we're comparing our current element with
  
  // now we want to compare our current element with the element indexed by the secondary index
  // inside a while loop
    // check if arr[j] is greater than our current element
    // if so, insert that larger element
    // decrement our index j
  
  int i, j, key;
  
  for (i = 1; i < n; i++) {
    key = arr[i];
    j = i - 1;
    
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
}
// Do not change anything after this line 
void printArray(int arr[], int n)
{
  for (int i = 0; i < n; i++) {
    printf("%d\n", arr[i]);
  }
}

int main(int argc, char* argv[])
{
  int arr[] = {100, 55, 4, 98, 10, 18, 90, 95, 43, 11, 47, 67, 89, 42, 49, 79};
  int n = sizeof(arr)/sizeof(arr[0]);
 
  insertionSort(arr, n);
  printArray(arr, n);
 
  return 0;
}