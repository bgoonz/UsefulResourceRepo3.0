# DBpedia
require 'open-uri'
require 'rexml/document'
require 'set' #@see http://www.ruby-doc.org/stdlib-1.9.3/libdoc/set/rdoc/Set.html#method-c-5B-5D
require './utils'

#module DBpedia

  ##
  # Get DBpedia RDF related to the `term`
  def get_dbpedia_rdf(uri, type="ntriples")
    puts "get_dbpedia_urls from the term : " + clean_uri(uri)
    
    term = clean_uri uri
    cterm = term.capitalize.dup
    urls = Set.new
    xml = ""
    rdf = ""
    href = ""
    not_found_string = "No further information is available."

    dbpedia_search_urls = [
      'http://dbpedia.org/resource/', #exact match <wiki page name>
      [
        'http://lookup.dbpedia.org/api/search.asmx/KeywordSearch?QueryString=', # keyword search
        'http://lookup.dbpedia.org/api/search.asmx/PrefixSearch?QueryClass=&MaxHits=5&QueryString=' # prefix search and autocompletition
      ]
    ]
    
    found = true
    begin
      href = dbpedia_search_urls[0]+cterm
      puts href
      xml = REXML::Document.new(open(href).read)
    rescue Exception
      puts '**not exact matching found. ' + $!
      found = false
    end
      
    if found and not xml.include? not_found_string
      puts '*exact match: ' + dbpedia_search_urls[0]+cterm
      rdf = _get_dbpedia_rdf dbpedia_search_urls[0]+cterm, type
    else
      # if not exact match found
      dbpedia_search_urls[1].each do |lookup|
        href = lookup+cterm
        puts href
        xml = REXML::Document.new(open(href).read)
        puts '*search match: '+href
      end
      xml.each_element('ArrayOfResult/Result[1]//URI[1]') do |url|
        rdf =  _get_dbpedia_rdf url.text, type
      end
    end
      rdf << "#{uri}\t<http://www.w3.org/2002/07/owl#sameAs>\t<#{href}> .\n"
  end

  # Get RDF from URLS
  def _get_dbpedia_rdf(dbpedia_url, type="ntriples")
    puts "_get_dbpedia_rdf: "+ dbpedia_url
    #urls.each do |url|
    #print url + "\n"
    nurl = dbpedia_url.dup #url.dup
    nurl['resource']='data'
    nurl.concat('.'+type) # n3, rdf, json, ntriples
    #puts nurl
    rdf_xml = open(nurl).read
    #print rdf_xml
    rdf_xml
    #break #remove 
    #end
  end
#end

#puts get_dbpedia_rdf "algorithm"
#puts get_dbpedia_rdf "algorithms"