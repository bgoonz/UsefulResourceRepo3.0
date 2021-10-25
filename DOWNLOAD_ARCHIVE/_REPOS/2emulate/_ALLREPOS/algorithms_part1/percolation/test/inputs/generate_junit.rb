Dir.foreach(".") do |filename|
  next unless File.extname(filename) == '.txt'
  name = File.basename(filename, '.txt').gsub('-','_')
  
  #next unless name =~ /input/i

  size = 0
  open_cmds = []
  percolates = name =~ /no/ ? 'False' : 'True'

  File.open(filename, "r") do |file|
    size = file.readline.strip
    file.each do |line|
      break if(line == nil || line == "")
      numbers = line.match(/\W*(\d+)\W*(\d+)/)
      #puts "per.open(#{numbers[1]}, #{numbers[2]});"
      open_cmds << "per.open(#{numbers[1]}, #{numbers[2]});" if numbers
    end
  end

  test = <<-testunit
  /**
   * Test method for {@link Percolation#percolates()}.
   */  
  @Test
  public void test_#{name}() {
    per = new Percolation(#{size});
    #{open_cmds.join("\n    ")}
    assert#{percolates}(per.percolates());
  }
testunit
  puts "#{test}\r\n\r\n"

end
