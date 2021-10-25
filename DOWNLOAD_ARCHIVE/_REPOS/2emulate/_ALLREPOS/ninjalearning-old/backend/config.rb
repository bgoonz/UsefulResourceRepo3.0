require 'yaml'

$AGRAPH = YAML.load_file('config.yml')['agraph']
$AGRAPH.each_pair do |key, value|
  puts "#{key}: #{value}"
end

# $AGRAPH['user'],$AGRAPH['pass'],$AGRAPH['host'],$AGRAPH['port']
# puts "#{$AGRAPH['user']},#{$AGRAPH['pass']},#{$AGRAPH['host']},#{$AGRAPH['port']},"
