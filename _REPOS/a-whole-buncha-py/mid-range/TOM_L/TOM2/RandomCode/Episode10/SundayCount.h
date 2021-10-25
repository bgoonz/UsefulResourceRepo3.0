#pragma once

#include <iostream>

namespace dsa {
	namespace sundays {

		class SundayCount {
		public:
			int tnd; // total number of days
			int dcm; // days in the current month
			int year; // track the year
			int month; // track the month
			int fsun; // counter for the first sundays

			SundayCount(); // constructor
			~SundayCount(); // destructor

		};

	}
}
