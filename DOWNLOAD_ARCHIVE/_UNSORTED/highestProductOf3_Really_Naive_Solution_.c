#include <stdio.h>
#include <stdlib.h>
#include <assert.h>

#define MAX(a, b) (((a) > (b)) ? (a) : (b))
#define MIN(a, b) (((a) < (b)) ? (a) : (b))
#define SIZE(arr) (sizeof(arr) / sizeof(arr[0]))

int highestProductOf3(int arr[], int length)
{
  //int negArr[SIZE(arr)];
  int accumulator = 0;
  for (int i = 0; i < length; i++)
  {
    for (int j = 0; j < length; j++)
    {
      for (int k = 0; k < length; k++)
      {
        if(i != j && i != k && j != k)
        {
          if ((arr[i] * arr[j] * arr[k]) > accumulator)
          {
            accumulator = (arr[i] * arr[j] * arr[k]);
            printf("Accumulator Changed to: %d\n", accumulator);
          }
        }        
      }
    }
  }
  printf("Accumulator Final Value is: %d\n", accumulator);
  return accumulator;
}

int main(int argc, char *argv)
{
  int arr1[] = {-10, -10, 1, 3, 2};
  int arr2[] = {1, 10, -5, 1, -100};
  int arr3[] = {5, -20, 19, 16, 4};

  printf("Highest product of arr1 is: %d\n", highestProductOf3(arr1, SIZE(arr1)));
  printf("Highest product of arr2 is: %d\n", highestProductOf3(arr2, SIZE(arr2)));
  printf("Highest product of arr3 is: %d\n", highestProductOf3(arr3, SIZE(arr3)));

  return 0;
}