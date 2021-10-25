<?php

require_once('Utils.php');

/**
 * Get the source code of a website and analize its components.
 */
class WebCrawler 
{
	private $_href;
	private $_schema;
	private $_hostname;
	private $_path;
	private $_file;
	private $_query;
	private $_sourceCode;
	
	/**
	 * Constructor 
	 */
	public function __construct($href)
	{
		$this->_href = $href;
	}

	/**
	 * Set link
	 */
	public function setHref($href)
	{
		$this->_href = $href;
		unset($this->_hostname);
		unset($this->_schema);
		unset($this->_path);
		unset($this->_sourceCode);
		unset($this->_file);
		unset($this->_query);
	}

	/**
	 * Get link (full)
	 */	
	public function getHref()
	{
		return $this->_href;
	}

	/**
	 * Get URL domain
	 */	
	public function getHost()
	{
		if(!isset($this->_hostname))
		{
			$this->setUrlElements();
		}
		return $this->_hostname;
	}
	public function getDomain() {return getHost();}
	
	/**
	 * Get File	 
	 */	
	public function getFile()
	{
		if(!isset($this->_file))
		{
			$this->setUrlElements();
		}
		return $this->_file;
	}
	
	/**
	 * Get Query	 
	 */	
	public function getQuery()
	{
		if(!isset($this->_query))
		{
			$this->setUrlElements();
		}
		return $this->_query;
	}	
		
	/**
	 * Get URL path
	 */		
	public function getPath()
	{
		if(!isset($this->_path))
		{
			$this->setUrlElements();
		}	
		return $this->_path;
	}
	
	/**
	 * Get website source code (content)
	 */		
	public function getSourceCode()
	{
		if(!isset($this->_sourceCode))
		{
			$this->_sourceCode = file_get_contents($this->getHref()); // TODO handle file not found
		}
		return $this->_sourceCode;
	}
	
	/**
	 * Regular expression evaluator
	 * @param $regex regular expression
	 * @param $text text to apply the regex
	 * @return multi array of results from the evaluation of the regular expression (RegEx)
	 *
	 */
	public function regex($regex, $text='')
	{
		if(!isset($regex) || strlen($regex)<3)
			throw new Exception('No regex string to evaluate.');
		// espape values --> replace '\' for '\\' OR '/' for '.'; ''' for '\'';
		preg_match_all($regex, $text, $result);
		return $result;
	}
	
	/**
	 * @return a multidimentional array with the complete a tag [0], links [1] and text [2]. 
	 *
			e.g.[0] => Array ([0] => <a href="/doc/guide/1.1/en/changes">New Features</a>)
			    [1] => Array ([0] => /doc/guide/1.1/en/changes)
			    [2] => Array ([0] => New Features)
	 * DONE handle (whitespaces) <a href = "http://www.adrianmejiarosario.com/tests2/" > fine </ a>
	 */
	public function getATags($HtmlCode='')
	{
		if(!isset($HtmlCode) || strlen($HtmlCode)<1)
			$HtmlCode = $this->getSourceCode();	
		$a = $this->regex('%<a\\s+href\\s*=\\s*(?:"|\')([^"\']*)[^>]*\\s*>((?:(?!</a>).)*)</a>%i', $HtmlCode);
		return array('ahref'=>$a[0],'link'=>$a[1],'text'=>$a[2]);
 
	}
	
	/**
	 * Parse the URL address into its parts.
	 * @return multi-dimensional array (all matches): 
	 *		[0] link (complete match)
	 * 		[1] schema (http,ftp,...); 
	 * 		[2] domain/host; 
	 *		[3] path 
	 *		[4] file
	 *		[5] query
	 */
	public function getUrlElements($url)
	{
		// get file and query
		// (\w+\.\w+)([^.]*)$
		
		// old -  problem: get confused with dots in paths. e.g. http://www.yiiframework.com/doc/guide/1.1/en
		//%^(?:(https?|ftp|file)://)?([a-z0-9-]+(?:\.[a-z0-9-]+)+)?(.*?)?(?:(\w+\.\w+)([^.]*))?$%i
		
		// new version
		//^(?:(https?|ftp|file)://)?([a-z0-9-]+(?:\.[a-z0-9-]+)+)?(.*?)?(?:(\w+\.\w+)((?:#|\?|$)(?:[^.]*)))?$
		
		$arr = $this->regex('%^(?:(https?|ftp|file)://)?([a-z0-9-]+(?:\.[a-z0-9-]+)+)?(.*?)?(?:(\w+\.\w+)((?:#|\?|$)(?:[^.]*)))?$%i', $url);
		return array('link' => $arr[0], 'schema'=>$arr[1], 'domain'=>$arr[2], 'path'=>$arr[3], 'file'=>$arr[4], 'query'=>$arr[5]);
	}
	
	/**
	 * Identifies the domain and path of the given URL
	 */
	private function setUrlElements()
	{
		$url = $this->getUrlElements($this->_href);
		$this->_schema = $url['schema'][0];
		$this->_hostname = $url['domain'][0];
		$this->_path = $url['path'][0];
		$this->_file = $url['file'][0];
		$this->_query = $url['query'][0];	

		// add '/' default path if not present
		if($this->_path === "")
			$this->_path = "/";
	}

	/**
	 * @return an array with the keys 'name' and 'links' of the sublinks
	 */
	public function getSubLinks($HtmlCode = '')
	{
		$subLinks = array();
		
		// 1. get all the A Tags
		$aTags = $this->getATags($HtmlCode);
		
		// 2. return only the ones that are in the same domain+path or deeper
		for($x=0; $x < count($aTags['link']); $x++)
		{
			// all path should with '/'
			//if(strrpos($this->getPath()) === strlen($this->getPath())-1)
			
			// get equivalent link
			if(strpos($aTags['link'][$x],".") === 0)
				$aTags['link'][$x] = $this->getPath() . $aTags['link'][$x];
				
			// remove double slashes
			$aTags['link'][$x] = str_replace("/./","/",$aTags['link'][$x]); 
			$aTags['link'][$x] = str_replace("./","/",$aTags['link'][$x]); 
			
			$linkUrl = $this->getUrlElements($aTags['link'][$x]);
		
			// if domains are equals
			if($this->getHost() === $linkUrl['domain'][0] || $linkUrl['domain'][0] === "" ) 
			{
				// if there is not path in the domain, all the links' path are inside 
				if(	$this->getPath() === "/" || 
					strpos($linkUrl['path'][0],$this->getPath()) === 0 )  
				{
					// strip html
					$aTags['text'][$x] = strip_tags($aTags['text'][$x]);
					if(strlen($aTags['text'][$x])>0)
					{
						// get the chapter content
						$content = WebCrawler::getContent(
							$this->_schema . '://' .
							$this->getHost() .
							$aTags['link'][$x]
						); 
						//*/
						$subLinks[] = array(
							'text'=>$aTags['text'][$x], 
							'link'=> $aTags['link'][$x], 
							'content' => $content,
						);
					}
				} 
			}
		}
		
		return $subLinks;
	}
	
	/**
	 * @url url to extract content
	 * @title block of information to extract. 	
	 * @return page content (text main content)
	 */
	public static function getContent($url, $title="")
	{
		// Load content
		$html = file_get_contents($url);
		//d(__LINE__,__FILE__,$html,'$html');
		
		$dom = new DOMDocument;
		$dom->loadHTML($html);
		//$dom->formatOutput = false;
		$dom->preserveWhiteSpace = false;
		//echo $dom->validate();
		//echo $dom->saveHTML();
		echo "\n---------------\n";

		// Search chapter title in the content		
		$body = $dom->getElementsByTagName('body')->item(0);
		//WebCrawler::getChildren($body);
		/*
		for( $i=0; $i < $body->length; $i++ )
		{
			echo $body->item($i)->nodeName;
			//echo " = " . $body->item($i)->nodeValue;
			echo "\n";
		}
		*/
		
		// Extract the block where the title is
		
		$new = new DomDocument;
		$new->appendChild($new->importNode($body, true));
		$foo = $new->saveHTML();
		$foo = trim($foo); 
		//$foo = preg_replace( '/\s+/', ' ', $foo );
		return $foo;
		//return trim($new->saveHTML());
		//return str_replace("\n","",$new->saveHTML());
		//return $body->get_content();
	} // end function
	
	public static function getChildren($node)
	{
		echo "\n".get_class($node);
		
		if($node instanceof DOMNodeList)
		{
			for($x = 0; $x < $node->length; $x++)
			{
				WebCrawler::getChildren($node->item($x));
				/*
				$node->item($x)->nodeName;
				$node->item($x)->nodeValue;
				*/
			}
		}
		elseif($node instanceof DOMNode)
		{
			$children = $node->childNodes;
			if($children->length > 0)
			{
				WebCrawler::getChildren($children);
			}
			else
			{
				///*
				echo '<'.$node->nodeName.'>';
				//echo $node->nodeValue;
				echo '</'.$node->nodeName.'>';
				echo "\n";
				//*/			
			}
		}
		else // DOMNode or DOMDocument
		{
			echo "other class";
		}
	}
	
} // end class

?>
