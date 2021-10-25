def print(number)
echo = <<-JUNIT
  @Test(timeout=1000)
    public void testPuzzle#{number}(){
      assertEquals(#{number}, solver("puzzle#{"%02d" % number}.txt").moves());
    }
JUNIT
end
(1..45).each{|n| puts print(n)}
