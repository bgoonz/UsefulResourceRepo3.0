<?php

/**
 * This is the model class for table "tbl_chapters".
 *
 * The followings are the available columns in table 'tbl_chapters':
 * @property integer $id
 * @property integer $tutorial_id
 * @property string $name
 * @property string $link
 * @property string $accessed
 * @property string $created_at
 *
 * The followings are the available model relations:
 * @property Tutorials $tutorial
 */
 
	$time = date('Y-m-d H:i:s');
	return array(
		'chap1' => array(
			'tutorial_id' => 3,
			'name' =>'System Architecture',
			'link' =>'/developers/docs/6.4.1/neutrino/sys_arch/about.html',
		),
		'chap2' => array(
			'tutorial_id' => 2,
			'name' =>'Chap tut 2',
			'link' =>'/developers/docs/6.4.1/neutrino/sys_arch/about.html',
		),
		'chap3' => array(
			'tutorial_id' => 1,
			'name' =>'Chap tut 1',
			'link' =>'/developers/docs/6.4.1/neutrino/sys_arch/about.html',
		),
	);

?>