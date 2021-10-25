require 'yaml'
require 'set'

def validate(html)
  html = html.gsub("\"/sites/default/files/", "\"http://adrianmejiarosario.com/sites/default/files/")
  html = html.gsub("'","\\\\'")
end

def tag_var_name (tag)
  "tag_"+tag.gsub(/[^a-zA-Z0-9]/,"_")
end

tags_set = Set.new

yml = open('dr_node.yml') { |f| YAML.load f }

File.open('output_seed.rb','w') do |f|
  # create all posts
  posts = ""
  tags = ""
  yml.each_with_index do |p,i|
    posts += "p#{i} = adrian.posts.create("+
    "title: '#{p['title'].gsub("'","\\\\'")}', "+
    "content: '#{validate(p['body_value'])}', " +
    "created_at: '#{Time.at(p['created'])}', " +
    "updated_at: '#{Time.at(p['changed'])}' " +
    ")\n"
    
    p['tags'].split(/\s?,\s?/).each do |t|
      t = t.gsub(/\s+/," ").downcase.strip #remove extra spaces
      tvar = tag_var_name(t)
      
      posts += "p#{i}.tags << #{tvar}\n"
      tags += "#{tvar} = Tag.create(:name=>\"#{t}\")\n" unless tags_set.include? tvar
      tags_set.add(tvar)
    end
  end
  f.write "# Tags\n"
  f.write tags
  f.write "\n# Posts\n"
  f.write posts
  
end
