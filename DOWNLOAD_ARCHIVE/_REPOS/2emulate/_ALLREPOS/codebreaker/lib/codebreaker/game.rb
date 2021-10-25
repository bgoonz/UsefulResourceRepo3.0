module Codebreaker
  class Game
    def initialize(output)
      @output = output
    end

    def start
      @output.puts "Welcome to Codebreaker!"
      @output.puts "Enter your best guess:"
    end
  end
end


