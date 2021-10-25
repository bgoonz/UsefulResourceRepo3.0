while p != None:
	count = count + 1
	
	if count % k == 0:
		p = p.next <------------------added p = p.next
		pre = reverse(pre, p.next)
		p = pre.next
	else:
		p = p.next
return
