#ifndef STACK__H__
#define STACK__H__

/* stack.h */
typedef struct {
	void *elems;
  int elemSize;
	int logicalLength;
	int allocatedLength;
	void (*freefn)(void *);
} stack;

void sNew(stack *s, int elemSize, void (*freefn)(void *));
void sDispose(stack *s);
void sPush(stack *s, void *elemAddress);
void sPop(stack *s, void *elemAddress);
static void sGrow(stack *s);
#endif
