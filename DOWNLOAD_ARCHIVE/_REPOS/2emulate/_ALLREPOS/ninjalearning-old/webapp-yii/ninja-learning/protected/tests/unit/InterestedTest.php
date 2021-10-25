<?php

require_once('../models/WebCrawler.php');
require_once('../models/Utils.php');

define('TEST_WEBSITE','http://stella.se.rit.edu/tests/index.html');
define('TEST_WEBSITE_LINKS','12');

// asserts -> http://www.phpunit.de/manual/3.2/en/api.html#api.assert.tables.assertions

class InterestedTest extends CTestCase 
{
//*
	function testDebug()
	{
		//$this->assertFalse(DEBUG);
		$this->assertTrue(DEBUG);
	}
	
	function testGetATagsWithSubLinksRealTut()
	{
		$w = new WebCrawler('http://www.go2linux.org/latex-simple-tutorial');
		$chaps = $w->getChapters();
		if(DEBUG) d(__LINE__,__FILE__,$chaps,'$chaps');
		
		$this->assertEquals(count($chaps), 6); //TODO - WebCrawler is considering '/' as a chapter and it is not!
		$this->assertEquals($chaps[0]['text'],'Introduction to LaTeX');
		$this->assertEquals($chaps[5]['link'],'http://www.go2linux.org/creating-tables-with-latex');
		
		// TODO - assert content - http://www.mutinydesign.co.uk/scripts/problems-encountered-with-php-dom-functions---3
		
		echo "> " . strpos("Exception",$chaps[3]['content']) . "\n";
		
		$this->assertTrue(strpos("Exception",$chaps[3]['content'])<0); // check that has not exception.
		$this->assertEquals(strlen($chaps[3]['content'])>30); // assert that there is some content.
	}	
//*/	
}

?>
