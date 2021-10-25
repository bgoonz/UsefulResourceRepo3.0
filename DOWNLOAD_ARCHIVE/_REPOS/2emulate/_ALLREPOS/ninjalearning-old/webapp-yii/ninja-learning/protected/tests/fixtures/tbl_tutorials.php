<?php

$time = date('Y-m-d H:i:s');
$name = 'Stella Test';
$link = 'http://stella.se.rit.edu/tests/';

return array(
	'tutorial1' => array(
		'user_id' => 1,
		'name' => $name,
		'link' => $link,
		'accessed' => '1986-01-01 00:00:00',
		'created_at' => $time,		
	),
	'tutorial2' => array(
		'user_id' => 1,
		'name' => $name.'2',
		'link' => $link.'doc',
		'accessed' => '1986-01-01 00:00:00',
		'created_at' => $time,		
	),
	'QnxTutorial' => array(
		'user_id' => 2,
		'name' => 'Qnx Tutorial (test fixture)',
		'link' => 'http://www.qnx.com/developers/docs/6.4.1/neutrino/bookset.html',
		'accessed' => '1986-01-01 00:00:00',
		'created_at' => $time,		
	),
);

?>