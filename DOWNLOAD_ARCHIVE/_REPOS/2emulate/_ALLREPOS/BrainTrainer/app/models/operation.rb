class Operation < ActiveRecord::Base
  belongs_to :exercise
  
  attr_accessible :align, :numbers, :operator
  
  @@op_pattern = /\A([\+\-\*\/\^])(\d+)?\Z/
  
  validates :align, :numbers, :operator, presence: true
  validates :align, inclusion: { in: %w(horizontal vertical)}
  validates :operator, format: { with: @@op_pattern, 
    message: "The only operations allowed are: +, -, *, /, and ^. Additionally you can add numbers after the operators and no spaces." }
    
  def answer
    m = @@op_pattern.match self.operator
    if m[2].nil?
      self.numbers.split(",").collect{|n| n=n.to_i}.inject { |r,e|  r = r.send(m[1], e) }
    else
      self.numbers.split(",").collect{|n| n=n.to_i}.inject(m[2].to_i) { |r,e|  r = r.send(m[1], e) }
    end
  end
  
end
