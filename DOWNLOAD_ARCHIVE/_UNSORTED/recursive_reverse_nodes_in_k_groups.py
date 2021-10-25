def reverse_nodes_in_k_groups(l, k):
	current = l
	
	# advance k nodes to see if this sub-list is long enough
	for _ in range(k):
		if not current:
			return l
		current = current.next
		
	# set a return value reference and reset our `current` reference
	rv, current = l, l.next 
	
	# swap next k nodes 
	for _ in range(k - 1):
		current.next, current, rv = rv, current.next, current
		
	# recurse on the next section of the linked list 
	l.next = reverse_nodes_in_k_groups(current, k)
	
	return rv
