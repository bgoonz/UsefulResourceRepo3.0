#include "SundayCount.h"

namespace dsa {
	namespace sundays {

		SundayCount::SundayCount()
		{
			year = 1901;
			tnd = 1;
			month = 1;
			fsun = 0;
			dcm = 0;
		}

		SundayCount::~SundayCount()
		{
			std::cout << "Destroyed!!" << std::endl;
		}
	}
}
