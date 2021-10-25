Dir['*.txt'].each do |filename|
  name = filename.gsub('.txt', '').capitalize

  next unless name =~ /input/i

  size = 0
  open_cmds = []

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
  @Test
  public void test#{name}() {
    int N = #{size};
    int i=0;
    Point[] ps = new Point[N];
    per = new Percolation(#{size});
    #{open_cmds.join("\n    ")}
    assert#{percolates}(per.percolates());
  }
testunit
  puts "#{test}\r\n\r\n"

end
