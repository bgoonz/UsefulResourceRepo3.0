<?php

class ChapterTest extends CDbTestCase
{
	public $fixtures = array(
		'users' => 'User',
		'chapters' => 'Chapter',
		//'tutorials' => 'Tutorial',
	);
	
	public function testGetTutorialName()
	{
		$this->assertTrue($this->chapters('chap1')->getProjectName() == 'Qnx Tutorial (test fixture)');
		$this->assertTrue($this->chapters('chap2')->getProjectName() == 'Stella Test2');
		$this->assertTrue($this->chapters('chap3')->getProjectName() == 'Stella Test');
	}

	//** placeholder of a test 
	public function testCRUD()
	{
		// vars
		$time = date('Y-m-d H:i:s');
		$chapname = "chapter 1";
		$chaplink = "http://stella.se.rit.edu/tests/chaplink";
		$name = 'Stella Test';
		$link = 'http://stella.se.rit.edu/tests/';
	
		// create tut
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
		// test Create
		//-----------
		$chap = new Chapter;
		$chap->setAttributes(array(
			'tutorial_id' => $tut->id,
			'name' => $chapname,
			'link' => $chaplink,
			'accessed' => '1986-01-01 00:00:00',
			'created_at' => $time,
		));
		$this->assertTrue($chap->save());
		
		
		//-----------
		// test Create (with default times)
		//-----------
		$chap2 = new Chapter;
		$chap2->setAttributes(array(
			'tutorial_id' => $tut->id,
			'name' => $chapname.'2',
			'link' => $chaplink.'/2',
			//'accessed' => '1986-01-01 00:00:00',
			//'created_at' => $time,
		));
		$this->assertTrue($chap2->save());		
		
		//--------------
		// Test delete
		//-------------
		
		//save id before deleting them
		$id1 = $chap->id;
		$id2 = $chap2->id;
		//delete chapters
		$this->assertTrue($chap->delete());
		$this->assertTrue($chap2->delete());
		//check if the were indeed deleted
		$d1 = Chapter::model()->findByPk($id1);
		$d2 = Chapter::model()->findByPk($id2);
		// assert that the deleted chapters were not found
		$this->assertEquals(NULL,$d1);
		$this->assertEquals(NULL,$d2);				
		
	}
}

?>