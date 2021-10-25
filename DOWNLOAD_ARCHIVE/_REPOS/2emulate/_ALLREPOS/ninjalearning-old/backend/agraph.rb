# AllegroGraph Endpoint connection
# 

require 'allegro_graph'
require 'linkeddata'
require 'set'
require './config'

class AGraph
  attr_accessor :username, :password, :host, :port
  
  ##
  # Constructor
  # 192.168.0.99 | 67.240.190.231
  def initialize(user,pass,host,port)
    @username = user
    @password = pass
    @host = host
    @port = port
    @server = AllegroGraph::Server.new :username => @username, :password => @password, :host => @host, :port => @port
  end
  
  def set_repository(repositoryName='test_ruby')
    @repository = AllegroGraph::Repository.new @server, repositoryName
    @repository.create_if_missing!
  end
  
  def set_repository=(repositoryName)
    set_repository repositoryName
  end
  
  # Return a RDF::Graph with the whole repo.
  def get_repo (repoName='ComputerScience_test')
    puts "get_repo"
    set_repository repoName
    puts "set_repository #{@repository}"
    result = @repository.query.perform "select ?s ?p ?o {?s ?p ?o} order by ?s"
    #puts "@repository.query.perform #{result}"
    
    graph = RDF::Graph.new("http://ninjalearning.info:8080/repositories/ComputerScience_test") # TODO: repo name, host, port, ...
    
    result['values'].each do |triple|
      graph << RDF::Statement.new(
        RDF::URI.new(triple[0]),
        RDF::URI.new(triple[1]),
        RDF::URI.new(triple[2]),
      )
    end
    graph
  end
  
  ##
  # Get classes and subclasses
  def get_terms(repositoryName='ComputerScience_test')
    repo = set_repository(repositoryName)
    
    # SparQL queries
    @repository.query.language = :sparql
    res = @repository.query.perform "SELECT distinct ?Class ?Subclass WHERE { ?Subclass rdfs:subClassOf ?Class . } Order by ?Class "
    terms = Set.new
    # I know this could be done more efficiently...
    res['values'].each do |pair|
      terms.add(pair[0])
      terms.add(pair[1]) 
    end
    terms    
  end
  
  def add (triples, repositoryName=false)
    if repositoryName
      self.set_repository repositoryName
    end

    #@repository.transaction do
      #triples.each do |triple|
        puts "@repository.statements.create #{triples[0]}, #{triples[1]}, #{triples[2]}"
        @repository.statements.create triples[0], triples[1], triples[2]
      #end
    #end
    
  end
  
  ##
  # Save rdf triples to agraph
  # @param rdf RDF file
  # @param repo repository name
  def save_rdf(rdf, repo)
    # load triples from string
    triples = RDF::NTriples::Reader.for(:ntriples).new(rdf)
    t=[]
    triples.each_triple do |subject, predicate, object| 

      #check language
      lang = ""
      begin
        lang = object.language
      rescue
      end

      if lang==:en || lang=="" || lang==:sp
          t = nil
          t = []

          if lang != ""
            t << "<#{subject}>"
            t << "<#{predicate}>"
            t << "\"#{object}\"@#{lang}"
          else
            t << "<#{subject}>"
            t << "<#{predicate}>"
            t << "<#{object}>"
          end  

          print t
          puts ""
          self.add(t,repo)
      else
        puts "#{subject} --#{predicate}--> #{object}"
        puts lang if not lang==""
      end
    end
  end
  
  def insert(graph)
    @repository.transaction do
      graph.dump(:ntriples).split(/\n/).each do |line|
        triples = line.split(/ /)
        statements.create triples[0], triples[1], triples[2]
      end
    end
  end
  
end


# test
ag = AGraph.new($AGRAPH['user'],$AGRAPH['pass'],$AGRAPH['host'],$AGRAPH['port'])
ag.set_repository = "bestbuy_test"

graph = RDF::Graph.new
graph << RDF::RDFa::Reader.open("http://www.bestbuy.com/shop/ipad+xoom+-windows")
puts graph.statements.count

#ag.insert(graph)
