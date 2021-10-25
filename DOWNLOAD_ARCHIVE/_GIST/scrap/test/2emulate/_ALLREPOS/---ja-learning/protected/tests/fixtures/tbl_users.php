
<?php
/**
 * This is the model class for table "tbl_users".
 *
 * The followings are the available columns in table 'tbl_users':
 * @property integer $id
 * @property string $username
 * @property string $password
 * @property string $email
 * @property string $name
 * @property string $lastname
 * @property string $created_at
 *
 * The followings are the available model relations:
 * @property Tutorials[] $tutorials
 */
	return array(
		'user1' => array(
			'username' => 'adrian',
			'password' => MD5('recrins'),
			'email' => 'adriansky@gmail.com',
			'name' => 'Adrian',
			'lastname' => 'Mejia',
		),
		'user2' => array(
			'username' => 'reina',
			'password' => MD5('carly93'),
			'email' => 'reinacrf@gmail.com',
			'name' => 'Reina',
			'lastname' => 'Rosario',
		),		
	);

?>