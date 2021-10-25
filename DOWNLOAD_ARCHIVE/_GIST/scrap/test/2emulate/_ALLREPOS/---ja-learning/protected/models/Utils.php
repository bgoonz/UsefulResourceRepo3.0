<?php

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
	
	echo "\n#($file:$line) ". $varname . ' = ';
	var_export($var);
	echo "\n";
} 


?>
