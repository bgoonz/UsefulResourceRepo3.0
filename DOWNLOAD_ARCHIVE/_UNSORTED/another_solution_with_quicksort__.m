int highestProductOf3(int arr[], int length)
{
  int hihgestl = 0;
  int hihgestr = 0;

  quicksort(arr,0,length-1);

  hihgestl = arr[0] * arr[1] * arr[length-1];
  hihgestr = arr[length-3] * arr[length-2] * arr[length-1];

  return MAX(hihgestl,hihgestr);
}