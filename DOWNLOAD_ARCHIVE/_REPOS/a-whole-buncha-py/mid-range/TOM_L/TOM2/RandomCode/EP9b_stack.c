#include <stdio.h>
#include <stdlib.h>
#include <stdint.h>
#include <string.h>
#include "stack.h"

void sNew(stack *s, int elemSize, void (*freefn)(void *))
{
	assert(s->elemSize > 0);
	s->elemSize = elemSize;
	s->logicalLength = 0;
	s->allocatedLength = 8;
	s->elems = malloc(8 * elemSize);
	assert(s->elems != NULL);
}


void sDispose(stack *s)
{
	if (s->freefn != NULL)
	{
		for(int i = 0; i < s->logicalLength; i++)
		{
			s->freefn((char *)s->elems + i * s->elemSize);
		}
	}
	free(s->elems);
}


void sPush(stack *s, void *elemAddress)
{
	if(s->logicalLength == s->allocatedLength)
		sGrow(s);
	void *target = (char*)s->elems + s->logicalLength * s->elemSize;
	memcpy(target, elemAddress, s->elemSize);
	s->logicalLength++;
}


void sPop(stack *s, void *elemAddress)
{
	s->logicalLength--;
	void *source = (char*)s->elems + s->logicalLength * s->elemSize;
	memcpy(elemAddress, source, s->elemSize);
}


static void sGrow(stack *s)
{
	s->allocatedLength *= 2;
	s->elems = realloc(s->elems, s->allocatedLength * s->elemSize);
}
