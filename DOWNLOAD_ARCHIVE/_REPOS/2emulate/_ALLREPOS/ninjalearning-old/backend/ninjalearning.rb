=begin
Back-End - Roadmap
  1.  Read ontology's (SPARQL endpoint)
  1.1.  Sparql client
  2.  Search engine API -or- Semantic Services
  2.1.  DBpedia (just contains triples, not data)
  2.1.1.  Get all URIs (also include categories)
  2.1.1.1.  http://lookup.dbpedia.org/api/search.asmx/KeywordSearch?QueryString=Graph%20Theory
  2.1.2.  Use URIs to get RDFs in @sp and @en only
  2.1.2.1.  http://dbpedia.org/page/<wiki_page>
  2.1.2.1.1.  http://dbpedia.org/page/Graph_theory
  3.  Web Crawling / Document extraction
  3.1.  Crawl the wikipedia and relate it to my RDF ontology 
  3.1.1.  http://en.wikipedia.org/wiki/<wiki_page>
  3.1.1.1.  http://en.wikipedia.org/wiki/Graph_theory
  4.  Save Generated RDF. (ruby)
  -- TODO the above is done (or ongoing) --
  5.  Web app
=end

siteurl ="http://en.wikipedia.org/wiki/Cut_(graph_theory)"

#require './endpoint'
require './dbpedia'
require './agraph'
require './utils'
require './crawler'
require 'linkeddata'

class RDF::Graph 
  def stats
    "\nLoaded: #{self.class}\n\t-statments: #{self.statements.count}\n\t-subjects: #{self.subjects.count}\n\t-predicates: #{self.predicates.count}\n\t-objects: #{self.objects.count}"
  end
end

#
# 1. get whole Ontology/RDF. Sparql = "select ?s ?p ?o {?s ?p ?o}"
# 2. STORE result in memory (populate the the graph G)
#
agraph = AGraph.new('admin','recrins','ninjalearning.info',8080)
graph = agraph.get_repo "ComputerScience_test"
puts graph.stats

# TODO: 3. use the classes and subclasses to FIND related information in the linked data services.
puts "3. use the classes and subclasses to FIND related information in the linked data services."

# get topics and subtopics
query = SPARQL.parse( %q(
  prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
  select ?s ?o {?s <http://www.w3.org/2000/01/rdf-schema#subClassOf> ?o}
))

# query = SPARQL.parse("select ?s ?o {?s <http://www.w3.org/2000/01/rdf-schema#subClassOf> ?o}")
query = SPARQL.parse( %q(
  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
  PREFIX owl: <http://www.w3.org/2002/07/owl#>
  
  SELECT ?s ?o
  WHERE {
    [ rdfs:subClassOf ?s
    ]
  }
  LIMIT 20
))
#query.execute(graph).each { |rr| puts "#{rr.s} - #{rr.s}" }



graph.subjects.each do |subject|
  #dbpedia = RDF::Graph.load("http://dbpedia.org/resource/")
  break; # remove later
end


# TODO: 4. MIXIN this rdf to the graph G in memory
# TODO: 5. With all the topics from [2] and [4], do a web crawling.
# TODO: 6. Extract information from HTML (if it has RDFa even better)
# TODO: 7. MIXIN extracted data [6] with the other from [4] and [2]


#=begin

terms = agraph.get_terms "ComputerScience_test" #get_ontology_terms
#nquads = []
# todo check for redirects

#terms.to_a[0..1].each do |term|
term = terms.to_a[0]
puts term
rdf = get_dbpedia_rdf term, 'ntriples'
puts "-----------"
print rdf
puts "-----------"
agraph.save_rdf(rdf,'dbpedia_test')
#end
puts ""

puts "== webcrawling =="
docrawling siteurl

puts "done"

#=end
