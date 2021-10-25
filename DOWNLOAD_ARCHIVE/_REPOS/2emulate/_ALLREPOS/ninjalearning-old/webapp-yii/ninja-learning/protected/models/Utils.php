<?php

//define('DEBUG',false);
define('DEBUG',false);
define('DP','if(DEBUG) d(__LINE__,__FILE__,');

/**
 * Regular expression evaluator
 * @param $regex regular expression
 * @param $text text to apply the regex
 * @return multi array of results from the evaluation of the regular expression (RegEx)
 *
 */
function regex($regex, $text="")
{
	/*
	d(__LINE__,__FILE__, $regex, '$regex');
	d(__LINE__,__FILE__, $text, '$text');
	//*/
	if(empty($regex))
		throw new Exception('No regex string to evaluate.');
	// espape values --> replace '\' for '\\' OR '/' for '.'; ''' for '\'';
	
	
	try {
		preg_match_all($regex, $text, $result);	
	} catch(Exception $e){
		if(DEBUG) {
			echo 'exception: ', $e->getMessage(), "\n";
			d(__LINE__,__FILE__, $regex, '$regex');
			d(__LINE__,__FILE__, $text, '$text');
		}
		throw $e;	
	}

	
	
	
	return $result;
}

/**
 * Here is a simple function to find the position of the next occurrence of needle in haystack, but searching backwards  (lastIndexOf type function)
 */
function rstrpos ($haystack, $needle, $offset)
{
    $size = strlen ($haystack);
    $pos = strpos (strrev($haystack), strrev($needle), $size - $offset);
   
    if ($pos === false)
        return false;
   
    return $size - $pos - strlen($needle);
}

/*
 * Debug print
 */
function d($line,$file,$var, $varname="variable")
{
	// example of use:
	// d(__LINE__,__FILE__, $variable, '$variable')
	if(DEBUG) {
		echo "\n#($file:$line) ". $varname . ' = ';
		var_export($var);
		echo "\n";
	}
} 


?>
