require 'linkeddata'
#
# http://www.ninjalearning.com/rdf/vocab
#
NL = RDF::Vocabulary.new("http://www.ninjalearning.com/rdf/vocab#")

# DC.subject, DC.description, DC.creator, DC.rights, ...

# NL.related => related resources. Eg. Algorithms - NL.related - Mathematics
# NL.strongRelated => resources about the same topic which are more general or specific. Eg. Algorithms - NL.strongRelated - ComputerScience
# NL.sameTopic => resources about the same topic. http://en.wikipedia.org/wiki/Algorithm - NL.sameTopic - http://www.cs.berkeley.edu/~vazirani/algorithms.html

#= NL.sameTopic rdf:subclassOf NL.strongRelated =
#= NL.strongRelated rdf:subclassOf NL.related =

# <http://www.ninjalearning.com/rdf/ComputerScienceOntology.owl#Algorithms>
# <http://www.w3.org/1999/02/22-rdf-syntax-ns#type>
# 

=begin
  
  BACKEND PROCESS
  
  1. get whole RDF. Sparql = "select ?s ?p ?o {?s ?p ?o}"
  2. STORE result in memory (populate the the graph G)
  3. use the classes and subclasses to FIND related information in the linked data services.
  4. MIXIN this rdf to the graph G in memory
  5. With all the topics from [2] and [4], do a web crawling.
  6. Extract information from HTML (if it has RDFa even better)
  7. MIXIN extracted data [6] with the other from [4] and [2]
  
  FRONTEND WEBAPP
  
  
  
=end 

