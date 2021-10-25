header(
	h1('Heading2'),
	h2('Subheading2'));

nav(
	ul({ 'class': 'breadcrumbs' },
		li(a({ href: '/' }, 'Home2')),
		li(a({ href: '/section/'}, 'Section2')),
		li(a('Subject'))));

article(
	p('Lorem ipsum2...'));

footer('Footer stuff2');
