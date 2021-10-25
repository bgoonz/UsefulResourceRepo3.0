require 'rdf'

#
# new graph
#
g = RDF::Graph.new

#
# create an statament
#
g << RDF::Statement.new(
    RDF::URI.new("https://github.com/amejiarosario/---ja-learning"),
    RDF::URI.new("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),
    RDF::URI.new("http://usefulinc.com/ns/doap#GitRepository")
  )

#
# create another statements with common vocabularies
#
project = RDF::Node.new("project1")
g << RDF::Statement.new(project, RDF.type, RDF::DOAP.Project)
g << RDF::Statement.new(project, RDF::DOAP.repository, RDF::URI.new("https://github.com/amejiarosario/---ja-learning"))

#
# Printing Graph in N-Triple format
#
puts g.dump(:ntriples) # N-Triples

=begin output:
  <https://github.com/amejiarosario/---ja-learning> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://usefulinc.com/ns/doap#GitRepository> .
  _:g2161413980 <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://usefulinc.com/ns/doap#Project> .
  _:g2161413980 <http://usefulinc.com/ns/doap#repository> <https://github.com/amejiarosario/---ja-learning> .
=end

#
# Printing Graph in Turtle format
#
require 'rdf/turtle'
puts g.dump(:ttl, :standard_prefixes => true)

=begin output:
@prefix doap: <http://usefulinc.com/ns/doap#> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .

<https://github.com/amejiarosario/---ja-learning> a doap:GitRepository .

 [ a doap:Project;
    doap:repository <https://github.com/amejiarosario/---ja-learning>] .
=end

#
# Writing results into a file
#
RDF::Turtle::Writer.open('example1.ttl') { |w| w << g }
puts File.read('example1.ttl')

=begin output:
<https://github.com/amejiarosario/---ja-learning> a <http://usefulinc.com/ns/doap#GitRepository> .

 [ a <http://usefulinc.com/ns/doap#Project>;
    <http://usefulinc.com/ns/doap#repository> <https://github.com/amejiarosario/---ja-learning>] .
=end

#
# Finding formats
#
require 'rdf/rdfa'
require 'rdf/rdfxml'
require 'rdf/ntriples'
require 'rdf/turtle'
RDF::Format.to_a.map(&:to_sym).each { |format| puts "#{format} => #{RDF::Reader.for(format)} || #{RDF::Writer.for(format)}" }

=begin output:
  ntriples => RDF::NTriples::Reader || RDF::NTriples::Writer
  turtle => RDF::Turtle::Reader || RDF::Turtle::Writer
  ttl => RDF::Turtle::Reader || RDF::Turtle::Writer
  rdfa => RDF::RDFa::Reader || RDF::RDFa::Writer
  lite => RDF::RDFa::Reader || RDF::RDFa::Writer
  html => RDF::RDFa::Reader || RDF::RDFa::Writer
  xhtml => RDF::RDFa::Reader || RDF::RDFa::Writer
  svg => RDF::RDFa::Reader || RDF::RDFa::Writer
  rdfxml => RDF::RDFXML::Reader || RDF::RDFXML::Writer
  xml => RDF::RDFXML::Reader || RDF::RDFXML::Writer  
=end

#
# Open a URL and use format detection to find a writer
#
puts RDF::Graph.load('http://greggkellogg.net/foaf').dump(
  :ttl, 
  :base_uri => 'http://greggkellogg.net/foaf',
  :standard_prefixes => true
  )
  
=begin output:
@base <http://greggkellogg.net/foaf> .
@prefix cert: <http://www.w3.org/ns/auth/cert#> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .
@prefix owl: <http://www.w3.org/2002/07/owl#> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix rsa: <http://www.w3.org/ns/auth/rsa#> .

<> a foaf:PersonalProfileDocument;
   foaf:maker <#me>;
   foaf:primaryTopic <#me> .

<#cert> a rsa:RSAPublicKey;
   cert:identity <#me>;
   rsa:modulus <#modulus>;
   rsa:public_exponent <#public_exponent> .

<http://ar.to/#self> a foaf:Person;
   foaf:name "Arto Bendiken" .

<http://bhuga.net/#ben> a foaf:Person;
   foaf:name "Ben Lavender" .

<#modulus> cert:hex "CE21A3C1936F794C61D0960BC82E54040731556E6444B449F0AA7DCB1481CF8081279116BCCD04FDA0DF5D6AB8924C2350690AD44D9B3A539FC7B34D00D54D10C35AF0A6608A96AF60993B89FEC8146A7B5E2C84BA416DA51E0EC03C52CDBDBE0937A3B7A43DDF4B0D58ED09ECEFE7EE21CFEF869132E255F2B620DD7896C257452C8AD93FC9BDC815ED6561D3AE6C1B5A2B69ECCBA88E5BE093879D0A2B0C88928EB8824C598AED7DCDE71D11F9EF364FF89BB245F412B7093C07AE032445B48564EF341E22E842BCFDAB678197FFF612CB9BBD53CD8E8FD5D214F51E385363CC7C7691058C0AB6C7D86B89BC6D1574FC91E8351AB17920FFF5134C6A6E9BAF" .

<#public_exponent> cert:decimal "65537" .

<http://manu.sporny.org/foaf.rdf> a foaf:Person;
   foaf:name "Manu Sporny" .

<http://moustaki.org/foaf.rdf> a foaf:Person;
   foaf:name "Yves Raimond" .

<http://www.aelius.com/njh/foaf.rdf> a foaf:Person;
   foaf:name "Nick Humfrey" .

<http://www.ivan-herman.net/foaf.rdf> a foaf:Person;
   foaf:name "Ivan Herman" .

<http://github.com/gkellogg> a foaf:OnlineAccount;
   foaf:accountName "gkellogg";
   foaf:accountServiceHomepage <http://github.com/>;
   foaf:name "GitHub";
   foaf:page <http://github.com/gkellogg> .

<http://twitter.com/gkellogg> a foaf:OnlineAccount;
   foaf:accountName "gkellogg";
   foaf:accountServiceHomepage <http://twitter.com/>;
   foaf:name "Twitter";
   foaf:page <http://twitter.com/gkellogg> .

<#me> a foaf:Person;
   rdfs:isDefinedBy <>;
   owl:sameAs <http://foaf.me/gkellogg#me>;
   foaf:account <http://twitter.com/gkellogg>,
     <http://github.com/gkellogg>;
   foaf:currentProject <http://rdf.kellogg-assoc.com/>;
   foaf:depiction <http://www.gravatar.com/avatar/42f948adff3afaa52249d963117af7c8.png>;
   foaf:homepage <http://greggkellogg.net/>;
   foaf:interest <http://greggkellogg.net/pages/photography>,
     <http://greggkellogg.net/category/diving>,
     <http://greggkellogg.net/category/ruby-on-rails>,
     <http://greggkellogg.net/category/rdf>,
     <http://greggkellogg.net/category/media>;
   foaf:knows <http://ar.to/#self>,
     <http://bhuga.net/#ben>,
     <http://manu.sporny.org/foaf.rdf>,
     <http://moustaki.org/foaf.rdf>,
     <http://www.aelius.com/njh/foaf.rdf>,
     <http://www.ivan-herman.net/foaf.rdf>;
   foaf:mbox_sha1sum "35bc44e6d0070e5ad50ccbe0d24403c96af2b9bd";
   foaf:name "Gregg Kellogg";
   foaf:pastProject "Cafex Corporation",
     "Xippix Inc.",
     <http://connectedmediaexperience.org/>,
     <http://dbpedia.org/resource/EO_Personal_Communicator/>,
     <http://dbpedia.org/resource/ChaCha_(search_engine)>,
     <http://dbpedia.org/resource/Gracenote>,
     <http://dbpedia.org/resource/Macy%27s_West>,
     <http://dbpedia.org/resource/NeXT>,
     <http://dbpedia.org/resource/Siterra>,
     <http://www.microunity.com/>;
   foaf:topic_interest <http://dbpedia.org/resource/Javascript>,
     <http://dbpedia.org/resource/JSON-LD>,
     <http://dbpedia.org/resource/Mach_(kernel)>,
     <http://dbpedia.org/resource/Music>,
     <http://dbpedia.org/resource/PenPoint>,
     <http://dbpedia.org/resource/RDFa>,
     <http://dbpedia.org/resource/Resource_Description_Framework>,
     <http://dbpedia.org/resource/Ruby_(programming_language)>,
     <http://dbpedia.org/resource/Semantic_Web>,
     <http://dbpedia.org/resource/Unix> .
=end

#
# Read a RDF and iterate through each statement
#
RDF::Turtle::Reader.open("http://greggkellogg.net/github-lod/doap.ttl") do |reader|
  reader.each { |st| puts st.inspect }
end

=begin output:
#<RDF::Statement:0x80ea2344(<http://greggkellogg.net/foaf#me> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://xmlns.com/foaf/0.1/Person> .)>
#<RDF::Statement:0x80e9e0f0(<http://greggkellogg.net/foaf#me> <http://xmlns.com/foaf/0.1/homepage> <http://greggkellogg.net/> .)>
#<RDF::Statement:0x80e98d80(<http://greggkellogg.net/foaf#me> <http://www.w3.org/2000/01/rdf-schema#isDefinedBy> <http://greggkellogg.net/foaf.rdf> .)>
#<RDF::Statement:0x80e91e90(_:g2162774420 <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://usefulinc.com/ns/doap#Project> .)>
#<RDF::Statement:0x80e8d160(_:g2162774420 <http://purl.org/dc/terms/creator> <http://greggkellogg.net/foaf#me> .)>
#<RDF::Statement:0x80e891a0(_:g2162774420 <http://usefulinc.com/ns/doap#bug-database> <https://github.com/gkellogg/github-lod/issues> .)>
#<RDF::Statement:0x80e82d14(_:g2162774420 <http://usefulinc.com/ns/doap#description> Provides DOAP, schema.org and FOAF representations of schema.org repositories .)>
#<RDF::Statement:0x80e7f510(_:g2162774420 <http://usefulinc.com/ns/doap#developer> <http://greggkellogg.net/foaf#me> .)>
#<RDF::Statement:0x80e7ae34(_:g2162774420 <http://usefulinc.com/ns/doap#documenter> <http://greggkellogg.net/foaf#me> .)>
#<RDF::Statement:0x80e73530(_:g2162774420 <http://usefulinc.com/ns/doap#homepage>  .)>
#<RDF::Statement:0x80e6b894(_:g2162774420 <http://usefulinc.com/ns/doap#maintainer> <http://greggkellogg.net/foaf#me> .)>
#<RDF::Statement:0x80e66f9c(_:g2162774420 <http://usefulinc.com/ns/doap#name> github-lod .)>
#<RDF::Statement:0x80e6311c(_:g2162774420 <http://usefulinc.com/ns/doap#programming-language> Ruby .)>
#<RDF::Statement:0x80e5f3a0(_:g2162774420 <http://usefulinc.com/ns/doap#repository> <https://github.com/gkellogg/github-lod> .)>
#<RDF::Statement:0x80e5ae18(_:g2162774420 <http://usefulinc.com/ns/doap#wiki> <https://github.com/gkellogg/github-lod/wiki> .)>
#<RDF::Statement:0x80e57100(_:g2162774420 <http://xmlns.com/foaf/0.1/maker> <http://greggkellogg.net/foaf#me> .)>
#<RDF::Statement:0x80e54e64(<http://greggkellogg.net/foaf#me> <http://xmlns.com/foaf/0.1/developer> _:g2162774420 .)>
#<RDF::Statement:0x80e4eb2c(<http://greggkellogg.net/foaf#me> <http://xmlns.com/foaf/0.1/mbox> <mailto:gregg@kellogg-assoc.com> .)>
#<RDF::Statement:0x80e46db4(<http://greggkellogg.net/foaf#me> <http://xmlns.com/foaf/0.1/mbox_sha1sum> 35bc44e6d0070e5ad50ccbe0d24403c96af2b9bd .)>
#<RDF::Statement:0x80e417d8(<http://greggkellogg.net/foaf#me> <http://xmlns.com/foaf/0.1/name> Gregg Kellogg .)>
=end

#
# Basic Graph Pattern (BGP)
#
include RDF
# load RDF
doap = RDF::Graph.load("http://greggkellogg.net/github-lod/doap.ttl")
#
# Write query with RDF::Query
#
query = Query.new(
  :person => {
    RDF.type => FOAF.Person,
    FOAF.name => :name,
    FOAF.mbox => :email,
  }
)
# Execute query
query.execute(doap).each do |s|
  puts "name: #{s.name}, email: #{s.email}"
end

=begin output:
  name: Gregg Kellogg, email: mailto:gregg@kellogg-assoc.com
=end

#
# Write query with RDF::Pattern
#
query = Query.new do
  pattern [:project, DOAP.developer, :person]
  pattern [:person, FOAF.name, :name]
end
# execute query
query.execute(doap).each do |s|
  puts "project: #{s.project}, person name: #{s.name}"
end
=begin
  project: _:g2162103880, person name: Gregg Kellogg
=end

#
# SPARQL
#
require 'sparql'
file = "https://raw.github.com/gkellogg/github-lod/master/dumps/github-lod.nt"
doap = Graph.load(file)
# write Sparql query
query = SPARQL.parse( %q(
  PREFIX doap: <http://usefulinc.com/ns/doap#>
  PREFIX foaf: <http://xmlns.com/foaf/0.1/>
  
  SELECT ?repo ?name
  WHERE {
    [ a doap:Project;
      doap:name ?repo;
      doap:developer [
        a foaf:Person;
        foaf:name ?name
      ]
    ]
  }
  ORDER BY DESC(?repo)
  LIMIT 20
)
)
# execute query
query.execute(doap).each do |s|
  puts "repository: #{s.repo}, person name: #{s.name}"
end
=begin output:
repository: zeros, person name: Dave Beckett
repository: yql-tables, person name: Dave Beckett
repository: youtube-g, person name: Pius Uzamere
repository: xls-split, person name: Leigh Dodds
repository: www.twolame.org, person name: Nicholas Humfrey
repository: wmata, person name: Pius Uzamere
repository: webid-spec, person name: Stephane Corlosquet
repository: wavemetatools, person name: Nicholas Humfrey
repository: watir-webdriver, person name: Ben Lavender
repository: unlicense.org, person name: Arto Bendiken
repository: twolame, person name: Nicholas Humfrey
repository: turtle, person name: Dave Beckett
repository: ts2mpa, person name: Nicholas Humfrey
repository: triplet-ruby, person name: Nicholas Humfrey
repository: tracklist-converter, person name: Nicholas Humfrey
repository: tor-ruby, person name: Arto Bendiken
repository: temporals, person name: Pius Uzamere
repository: tele-arena-scripts, person name: Ben Lavender
repository: target, person name: Yves Raimond
repository: tamarind, person name: Pius Uzamere  
=end

#
# RDF Behavior
#
require 'github-api-client'
class GitHub::User
  include RDF::Enumerable
  def each
    u = RDF::URI("http://github.com/#{login}")
    yield RDF::Statement.new(u, RDF::FOAF.name, name)
    yield RDF::Statement.new(u, RDF::mbox, RDF::URI("mailto:#{email}")) unless email.nil?
  end
end

u = GitHub::User.get('amejiarosario')
puts u.dump(:ttl, :standard_prefixes => true)
=begin output
@prefix foaf: <http://xmlns.com/foaf/0.1/> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .

<http://github.com/amejiarosario> rdf:mbox <mailto:adriansky@gmail.com>;
   foaf:name "Adrian" .
=end

# based on: http://www.slideshare.net/gkellogg1/ruby-semweb-20111206