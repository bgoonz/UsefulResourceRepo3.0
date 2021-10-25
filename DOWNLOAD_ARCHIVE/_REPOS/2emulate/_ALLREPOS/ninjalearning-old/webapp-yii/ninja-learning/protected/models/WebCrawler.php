<?php

require_once('Utils.php');


/**
 * Get the source code of a website and analize its components.
 */
class WebCrawler 
{
	/**
	 * tutorial URL (schema+domain+path)
	 */
	public $root;
	
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
	 * Set website elements
	 */
	public function setHref($href)
	{
		$this->_href = $href;
		unset($this->root);
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
	 * Get File	name (e.g. index.php)
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
	 * Get Query string (e.g. ?pid=31&uid=1	)
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
	 * Identifies the domain and path of the already given URL
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
		
		// Save link
		$this->root = $this->_schema . $this->_hostname . $this->_path;
			
 		// TODO -  In some cases the filename looks like the path. e.g. http://www.go2linux.org/latex-simple-tutorial	
		
		if(DEBUG) d(__LINE__,__FILE__, $this->root, 'link.root');
		if(DEBUG) d(__LINE__,__FILE__, $this->_file, '$this->_file');
		
		// if is not a path, move the last element to filename		
		if(empty($this->_file)){
			try{
				$cont = @file_get_contents($this->root."/");
				if(DEBUG) d(__LINE__,__FILE__, $cont, '$cont');
				
				/*
				if(strlen($cont)<1)
					throw new Exception("not valid");
				*/
				
				//$cont = file_get_contents($this->root);
				//d(__LINE__,__FILE__, $cont, '$cont');
				
			}catch(Exception $e){
				// if is not a path, make it a filename.
				if(DEBUG) d(__LINE__,__FILE__, $e->getMessage(), '$e.message');
				$pos = strrpos($this->_path,"/")+1;
				$this->_file = substr($this->_path, $pos);
				$this->_path = substr($this->_path,0,$pos);
				
				if(DEBUG) echo "file=".$this->_file . "\n";
				if(DEBUG) echo "path=".$this->_path . "\n";
			}
		}
		
		
		if(DEBUG) echo $this->root;
	}
	
	public function getRoot()
	{
		$this->root = $this->_schema . $this->_hostname . $this->_path;
		return $this->root;
	}
	
	/**
	 * Parse the URL address into its parts.
	 * @return multi-dimensional array (all matches): 
	 *		[0] link (complete match)
	 * 		[1] schema (http,ftp,...); 
	 * 		[2] domain/host (www.adrianmejiarosario.com)
	 *		[3] path  (/test/)
	 *		[4] file  (index.php)
	 *		[5] query (?pid=12)
	 */
	public function getUrlElements($url)
	{
		$arr = regex('%^((?:https?|ftp|file)://)?([a-z0-9-]+(?:\.[a-z0-9-]+)+)?(.*?)?(?:(\w+\.\w+)((?:#|\?|$)(?:[^.]*)))?$%i', $url);
		
		// TODO -  In some cases the filename looks like the path. e.g. http://www.go2linux.org/latex-simple-tutorial
		
		return array('link' => $arr[0], 'schema'=>$arr[1], 'domain'=>$arr[2], 'path'=>$arr[3], 'file'=>$arr[4], 'query'=>$arr[5]);
	}
	
	public function getFullLink($url)
	{
		//echo ' L158 getContent.url = '.$url;
		//validate URL
		$surl = $this->getUrlElements($url);
		if(	empty($surl['schema'][0]) || 
			empty($surl['domain'][0]) 
		)
		{
			$this->setUrlElements();
			$url = $this->_schema.$this->_hostname.$surl['path'][0].$surl['file'][0];
		}
		return $url;		
	}
	
	/**
	 * @url url to extract content
	 * @title block of information to extract. 	
	 * @return page content (text main content)
	 */
	public function getContent($url, $title="")
	{
		$url = $this->getFullLink($url);
	
		// Load content
		$html = file_get_contents($url);
		//d(__LINE__,__FILE__,$html,'$html');
		
		$dom = new DOMDocument;
		@$dom->loadHTML($html);
		//$dom->formatOutput = false;
		$dom->preserveWhiteSpace = false;
		//echo $dom->validate();
		//echo $dom->saveHTML();
		//echo "\n---------------\n";

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
	
	/**
	  @return a multidimentional array with the complete a tag [0], links [1] and text [2]. 
	 
			e.g.[0] => Array ([0] => <a href="/doc/guide/1.1/en/changes">New Features</a>)
			    [1] => Array ([0] => /doc/guide/1.1/en/changes)
			    [2] => Array ([0] => New Features)
	  DONE handle (whitespaces) <a href = "http://www.adrianmejiarosario.com/tests2/" > fine </ a>
	 */
	public function getATags($HtmlCode='')
	{
		if(!isset($HtmlCode) || strlen($HtmlCode)<1)
			$HtmlCode = $this->getSourceCode();	
		$a = regex('%<a\\s+href\\s*=\\s*(?:"|\')([^"\']*)[^>]*\\s*>((?:(?!</a>).)*)</a>%i', $HtmlCode);
		return array('ahref'=>$a[0],'link'=>$a[1],'text'=>$a[2]);
 	}
 	
    /**
	 * @return an array with the keys 'name', 'links', and the 'content' (if getContent is true) of the sublinks
	 */
	public function getSubLinks($HtmlCode = '', $getContent = false)
	{
		$subLinks = array();
		
		// 1. get all the A Tags
		$chapURLs = $this->getATags($HtmlCode); // get all the HTML A tags in the website
		if(DEBUG) d(__LINE__,__FILE__,$chapURLs, 'getATags');
		
		// 2. return only the ones that are in the same domain+path or deeper
		for($x=0; $x < count($chapURLs['link']); $x++)
		{
			
			// process links with dots "."
			if(strpos($chapURLs['link'][$x],".") === 0) // if link starts with '.'  e.g. href="./index.html"
				$chapURLs['link'][$x] = $this->getPath() . $chapURLs['link'][$x]; // subtitute '.' with current path
				
			// remove double slashes
			$chapURLs['link'][$x] = str_replace("/./","/",$chapURLs['link'][$x]); 
			$chapURLs['link'][$x] = str_replace("./","/",$chapURLs['link'][$x]); 
			
			
			// get url elements
			$chapURL = $this->getUrlElements($chapURLs['link'][$x]); // get all the elements in a specific URL
			
			if(DEBUG) d(__LINE__,__FILE__, $chapURL['link'],'link in process');
		
			// if domains are equals
			if($this->getHost() === $chapURL['domain'][0] || $chapURL['domain'][0] === "" ) 
			{
				// if there is not path in the domain, all the links' path are inside 
				if(	$this->getPath() === "/" || 
					strpos($chapURL['path'][0],$this->getPath()) === 0)  
				{
					if( $chapURL['path'][0] != "/" && $chapURL['path'][0] != $this->getPath() ) // avoid the same tut link in the chapters
					{
						$chapURLs['text'][$x] = strip_tags($chapURLs['text'][$x]); // strip html tags
						
						// if it has some content besides HTML tags save it, otherwise discard it.
						if(strlen($chapURLs['text'][$x])>0)
						{
							// get the chapter content, be aware that the $chapURLs['link'][$x] could have the a full URL.
							$content = 'Content not loaded';
							
							try{
								if($getContent){
									$content = $this->getContent($chapURL['link'][0]); 
								}
								//* debugging purposes
								else {
									if(DEBUG) echo "-x content will not be loaded by user decision.";			
								}
								//*/
							//*
							} catch(Exception $e) {
								// TODO think in a way to handle this exception BETTER.
								$content = 'Exception: ' . $e->getMessage();
								
								//* debugging purposes
									if(DEBUG) echo "-x content will not be loaded by error: " . $content . ".\n";			
								//*/							
							}
							//*/
							
							//check if it has been already saved.
							$new = true;
							foreach($subLinks as $s)
							{
								if($s['link'] == $chapURLs['link'][$x]){
									$new = false;
									break;
								}
							}
							
							if($new)
							{
								// save the link (chapter)
								$subLinks[] = array(
									'text'=>$chapURLs['text'][$x], 
									'link'=> $chapURLs['link'][$x], 
									'content' => $content,
								);
								//* debugging purposes
								if(DEBUG) echo "-! content LOADED successfully. \n";
								//*/							
							}
							//* debugging purposes
							else {
								if(DEBUG) echo "-x the links has been already saved. \n";			
							}
							//*/
							
	
						}
						//* debugging purposes
						else {
							if(DEBUG) echo "-x no link information/text. \n";			
						}
						//*/
					}
					//* debugging purposes
					else {
						if(DEBUG) echo "\n-x link is '/'. \n";			
					}	
								
				} 
				//* debugging purposes
				else {
				if(DEBUG) {
					echo "-x different paths. \n";
					echo "Tutotrial URL: " . $this->getPath();			
					echo "\nChapter URL: " . $chapURL['path'][0];
					echo "\n";			
					}
				}
				//*/				
				
			} // end // if domains are equals
			//* debugging purposes
			else {
				if(DEBUG) echo "-x different domain. \n";			
			}
			//*/
		}
		
		return $subLinks;
	}
	
    /**
	 * @return an array with the keys 'name', 'links', and the 'content' of the sublinks
	 */	
	public function getChapters()
	{
		return $this->getSubLinks('',true);
	}
	
	
	
} // end class

?>
