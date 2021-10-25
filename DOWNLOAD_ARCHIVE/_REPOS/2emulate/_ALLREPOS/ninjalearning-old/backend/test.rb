require 'linkeddata'



####
server = AllegroGraph::Server.new :username => 'admin', :password => 'recrins', :host => 'ninjalearning.info', :port => 8080
repo =AllegroGraph::Repository.new server, "ComputerScience_test"
repo.create_if_missing!

result = repo.query.perform "select ?s ?p ?o {?s ?p ?o}"
graph = RDF::Graph.new("http://ninjalearning.info:8080/repositories/ComputerScience_test") # TODO: repo name, host, port, ...
result['values'].each do |triple|
  graph << RDF::Statement.new(
    RDF::URI.new(triple[0]),
    RDF::URI.new(triple[1]),
    RDF::URI.new(triple[2]),
  )
end

query = SPARQL.parse("SELECT * WHERE { ?s http://www.w3.org/1999/02/22-rdf-syntax-ns#type ?o }")
query = SPARQL.parse("PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> SELECT distinct ?Class ?Subclass WHERE { ?Subclass rdfs:subClassOf ?Class . } Order by ?Class")
query.execute(graph)


query = SPARQL.parse( %q(
  PREFIX doap: <http://usefulinc.com/ns/doap#>
  PREFIX foaf: <http://xmlns.com/foaf/0.1/>
  
  SELECT *
  WHERE {
    [ 
      doap:name ?repo
    ]
  }
  ORDER BY DESC(?repo)
  LIMIT 20
)
)
# execute query
query.execute(doap).each do |s|
  puts "repository: #{s.repo}, person name: #{s.repo}"
end


query = SPARQL.parse( %q(
  PREFIX doap: <http://usefulinc.com/ns/doap#>
  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
  
  SELECT *
  WHERE {
    [ 
      rdfs:subClassOf ?repo
    ]
  }
  LIMIT 20
)
)
# execute query
query.execute(graph).each do |s|
  puts "repository: #{s.repo}, person name: #{s.repo}"
end

####

# RDF::Reader.open("http://dbpedia.org/page/Algorithm") do |reader|
#   reader.each_statement do |statement|
#     puts statement.inspect
#   end
# end

t = '<http://dbpedia.org/resource/Sorting_algorithm>	<http://dbpedia.org/ontology/abstract>	"En computaci\u00F3n y m, y l\u00EDmites inferiores."@es .
<http://dbpedia.org/resource/Sorting_algorithm>	<http://www.w3.org/2000/01/rdf-schema#label>	"Sortowanie"@pl .'

triples = RDF::NTriples::Reader.for(:ntriples).new(t)
triples.each_triple do |subject, predicate, object| 
  puts "#{subject} --#{predicate}--> #{object}"
  if object.has_language?
    puts object.language
  end
end


server = AllegroGraph::Server.new :username => 'admin', :password => 'recrins', :host => 'ninjalearning.info', :port => 8080
repository =AllegroGraph::Repository.new server, "test_repository_ruby"
repo =AllegroGraph::Repository.new server, "ComputerScience_test"
repository.create_if_missing!
#repository.delete!
repository.statements.create "http://dbpedia.org/resource/Sorting_algorithm", "http://www.w3.org/2000/01/rdf-schema#label", "Sortowanie@pl"
repository.statements.create "<http://dbpedia.org/resource/Sorting_algorithm>", "<http://www.w3.org/2000/01/rdf-schema#label>", "\"Sortowanie\"@pl"

###################################################
# gem install 'rdf-agraph'
# @see http://video-encoding-outputs.s3.amazonaws.com/rails-rdf-agraph.mp4
###################################################
require 'rdf-agraph'

url = "http://admin:recrins@ninjalearning.info:8080/repositories/example_#{Rails.env}"
url = "http://test:test@67.240.190.231:8080/repositories/example"
url = "http://test:test@67.240.190.231:8080/repositories/rdf_agraph_test"
url = "http://test:test@192.168.0.99:8080/repositories/rdf_agraph_test"
repo = RDF::AllegroGraph::Repository.new(url, :create => true)

url = "http://test:test@ninjalearning.info:8080/repositories/example"

repo = RDF::AllegroGraph::Repository.new(url, :create => true)

############################################################
#gem install agraph
############################################################
require 'allegro_graph'
SERVER = AllegroGraph::Server.new :username => "test", :password => "test", :host => 'ninjalearning.info', :port => 8080
REPOSITORY = AllegroGraph::Repository.new server, "rdf_agraph_test_rails"
REPOSITORY.create_if_missing!