#include "SundayCount.h"

#define DEBUG 0

#if DEBUG
#define LOG(x) std::cout << x << std::endl
#define PAUSE system("PAUSE");
#else
#define LOG(x)
#define PAUSE
#endif

using namespace dsa;
using namespace sundays;
int main()
{
	SundayCount sc = SundayCount(); // construc a new Sunday Count object
	int days[] = { 0, 1, 2, 3, 4, 5, 6 }; // 7 days of the week 
	
	// while year is below 2001
	while (sc.year < 2001)
	{
		sc.month = 1; // res4et the month to 1 (jan)
		while (sc.month < 13) // while we are in month less than 13
		{
			sc.dcm = 1; // days in cal month
			int cutoff = 1; // month cutoff period

			if (sc.month == 4 | sc.month == 6 | sc.month == 9 | sc.month == 11) // ARP, JUN, SEP, NOV
				cutoff = 30;
			else if (sc.month == 2) // feb
			{
				if (sc.year % 4 == 0 && sc.year % 100 != 0 || sc.year % 400 == 0)
					cutoff = 29;
				else
					cutoff = 28;
			}
			else
				cutoff = 31;

			// days in cal month loop
			while (sc.dcm < cutoff)
			{
				if (sc.dcm == 1 & days[sc.tnd % 7] == days[3]) // if we are on the first day of the month and it is a sunday
				{
					sc.fsun++; // add 1 to the fsun counter
					LOG("There is a first sunday in " << sc.month);	
				//	system("PAUSE");
				}
				LOG(sc.dcm << " " << days[sc.tnd % 7]);

				sc.dcm++; // add one to days in cal month
				sc.tnd++;
			} // end of day loop

			sc.month++; // add one to the month count
			LOG("\n\n " << sc.month);

		} // end of month loop

		sc.year++; // add one to the year counter

	} // end of year loop
	sc.year++;
	std::cout << "The number of first sundays: " << sc.fsun << std::endl;

	PAUSE
	return 0;
}
