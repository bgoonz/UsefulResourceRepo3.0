# AllegroGraph Endpoint connection

require 'allegro_graph'
require 'set'
require './config'

# Return a set with all the classes and subclasses form the Repository
def get_ontology_terms(repositoryName = "ComputerScience")
  puts "get_ontology_terms from catalog: " + repositoryName
  # Repository management
  server = AllegroGraph::Server.new :username => $AGRAPH['user'], :password => $AGRAPH['pass'], :host => $AGRAPH['host'], :port => $AGRAPH['port']
  repository = AllegroGraph::Repository.new server, repositoryName
  repository.create_if_missing!

  # SparQL queries
  repository.query.language = :sparql
  res = repository.query.perform "SELECT distinct ?Class ?Subclass WHERE { ?Subclass rdfs:subClassOf ?Class . } Order by ?Class "

  terms = Set.new
  # I know this could be done more efficiently...
  res['values'].each do |pair|
    terms.add(clean_uri(pair[0]))
    terms.add(clean_uri(pair[1])) 
  end
  
  terms
  
end

def save_rdf (rdf, repository="ruby_test")
  
end

# Return everything after the # sign
def clean_uri url
  i = url.index('#')
  url[i+1..-2]
end
