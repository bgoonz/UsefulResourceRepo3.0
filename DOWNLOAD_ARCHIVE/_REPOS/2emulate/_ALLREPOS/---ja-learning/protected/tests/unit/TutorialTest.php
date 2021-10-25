<?php

class TutorialTest extends CDbTestCase
{
	public $fixtures = array(
		'users' => 'User',
		'tutorials' => 'Tutorial',
		'tutorialUserAssignment' => ':tbl_tutorials_users'
	);
	
	public function testCreate()
	{
		$time = date('Y-m-d H:i:s');
		$name = 'Stella Test Tutorial';
		$link = 'http://stella.se.rit.edu/tests/';
		
		$tut = new Tutorial;
		$tut->setAttributes(array(
			'user_id' => 1,
			'name' => $name,
			'link' => $link,
			'accessed' => '1986-01-01 00:00:00',
			'created_at' => $time,			
		));
		// save and assertions
		$this->assertTrue($tut->save());
		$rtut = Tutorial::model()->findByPk($tut->id);
		$this->assertTrue($rtut instanceof Tutorial);
		$this->assertEquals($rtut->name, $name);
		$this->assertEquals($rtut->link, $link);
		$this->assertEquals($rtut->created_at, $time);		
		
	}
	
	public function testRead()
	{
		$tut = $this->tutorials('tutorial1');
		$this->assertTrue($tut instanceof Tutorial);
		$this->assertEquals('Stella Test',$tut->name);
	}
	
	public function testUpdate()
	{
		$tut = $this->tutorials('tutorial2');
		$tut->name = 'updated name';
		$tut->link = 'http://www.adrianmejiarosario.com';
		$this->assertTrue($tut->save());
		// assert
		$rtut = Tutorial::model()->findByPk($tut->id);
		$this->assertTrue($rtut instanceof Tutorial);
		$this->assertEquals($rtut->name, 'updated name');
		$this->assertEquals($rtut->link, 'http://www.adrianmejiarosario.com');
	}
	
	public function testDelete()
	{
		$tut = $this->tutorials('tutorial2');
		$id = $tut->id;
		$this->assertTrue($tut->delete());
		// assert
		$rtut = Tutorial::model()->findByPk($id);
		$this->assertEquals(NULL,$rtut);	
	}

	public function testCRUD()
	{
		$time = date('Y-m-d H:i:s');
		$name = 'Stella Test';
		$link = 'http://stella.se.rit.edu/tests/';
		
		//echo $time;
		
		//-----------
		// test Create
		//-----------
		$tut = new Tutorial;
		$tut->setAttributes(array(
			'user_id' => 1,
			'name' => $name,
			'link' => $link,
			'accessed' => '1986-01-01 00:00:00',
			'created_at' => $time,
		));
		//$tut->save();
		$this->assertTrue($tut->save());
		
		//-----------
		// test Read
		//-----------
		$rtut = Tutorial::model()->findByPk($tut->id);
		$this->assertTrue($rtut instanceof Tutorial);
		$this->assertEquals($rtut->name, $name);
		$this->assertEquals($rtut->link, $link);
		$this->assertEquals($rtut->created_at, $time);
		
		//-----------
		// test Update
		//-----------
		$updated = 'updated' . $name;
		$tut->name = $updated;
		$this->assertTrue($tut->save());
		// test update
		$rtut = Tutorial::model()->findByPk($tut->id);
		$this->assertTrue($rtut instanceof Tutorial);
		$this->assertEquals($rtut->name, $updated);
		$this->assertEquals($rtut->link, $link);
		$this->assertEquals($rtut->created_at, $time);
		
		
		//-----------
		// test Chapter were created
		//-----------	
		
		// TODO

		//*
		//-----------
		// test Delete
		//-----------	
		$id = $tut->id;
		$this->assertTrue($tut->delete());
		$deleted = Tutorial::model()->findByPk($id);
		$this->assertEquals(NULL,$deleted);
		//*/
	}
}
	
?>