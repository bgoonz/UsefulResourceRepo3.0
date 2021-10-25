void towerSolution(int, char, char, char);

void towerSolution(int numDisks, char sourcePeg, char destPeg, char sparePeg)
{
	/* Case 1: if only 1 Disk exists */
	if (numDisks == 1)
	{
		printf("\nMove disk 1 from peg %c to peg %c", sourcePeg, destPeg);
		return;
	}
	// Case 2: if there is more than 1 disk
	towerSolution((numDisks - 1), sourcePeg, sparePeg, destPeg);
	// Move remaining disks from A to C
	printf("\nMove disk %d from peg %c to peg %c", numDisks, sourcePed, destPeg);
	// Move (numDisks - 1) disks from B to C using A as the sparePeg
	towerSolution((numDisks - 1), sparePeg, destPeg, sourcePeg);
}

int main()
{
	int numDisks;
	printf("Please enter the number of disks to use: ");
	scanf("%d", &numDisks);
	printf("Tower of Hanoi involved the moves :\n\n");
	towerSolution(numDisks, 'A', 'B', 'C');
	printf("\n");
	return 0;
}
