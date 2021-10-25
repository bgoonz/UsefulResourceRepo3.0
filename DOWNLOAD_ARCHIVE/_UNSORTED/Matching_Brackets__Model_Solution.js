#include <stdio.h>
#include <stdlib.h>

struct stack {
	char *data;
	int top;
	int capacity;
};

struct stack *stack_new(int capacity)
{
	struct stack *s = malloc(sizeof(struct stack));
	s->data = malloc(sizeof(char) * capacity);
	s->capacity = capacity;
	s->top = -1;

	return s;
}

void stack_destroy(struct stack *s)
{
	free(s->data);
	free(s);
}

int stack_push(struct stack *s, char c)
{
	if (s->top == s->capacity - 1) {
		return 0;
	}

	s->data[++(s->top)] = c;

	return 1;
}

char stack_pop(struct stack *s)
{
	if (s->top == -1) {
		return '\0';
	}

	return s->data[(s->top)--];
}

int stack_is_empty(struct stack *s)
{
	return s->top == -1;
}

int test_brackets(char *s)
{
	struct stack *stack = stack_new(100);
	char c;

	for (char *p = s; *p != '\0'; p++) {
		switch (*p) {
			case '[':
				stack_push(stack, ']');
				break;
			case '(':
				stack_push(stack, ')');
				break;
			case '{':
				stack_push(stack, '}');
				break;
			case ')': // fallthru
			case '}': // fallthru
			case ']':
				c = stack_pop(stack);
				if (c != *p) {
					return 0; // MISMATCH
				}
				break;
		}
	}
	
	if (!stack_is_empty(stack)) {
		return 0; // MISMATCH
	}

	return 1; // MATCH
}

int main(void)
{
	char *tests[] = {
		"[]",
		"{}",
		"()",
		"([])",
		"({[]})",
		"({{]})",
		"({[}])",
		"(()",
		"{}}",
		"[",
		"]",
		"foo();",
		"a = [1, 2, 3, 4];",
		"bar(a,b) { for (let i = 0; i < 10; i++) console.log(i); }",
		"baz(a,b) { for (let i = 0; i < 10; i++) { console.log(i); }",
		NULL
	};

	for (char **p = tests; *p != NULL; p++) {
		if (!test_brackets(*p)) {
			printf("MIS-");
		}
		printf("MATCHED: %s\n", *p);
	}

	return 0;
}

