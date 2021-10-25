header(
	h1('Heading'),
	h2('Subheading'));

nav(
	ul({ 'class': 'breadcrumbs' },
		li(a({ href: '/' }, 'Home')),
		li(a({ href: '/section/'}, 'Section')),
		li(a('Subject'))));

article(
	p('Lorem ipsum...'));

footer('Footer stuff');