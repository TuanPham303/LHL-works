class Players
  attr_reader :name, :score, :lives
  # attr_writer 

  def initialize(name)
    @name = name
    @score = 0
    @lives = 3
  end
  
  def lose_live
    @lives -= 1
  end

  def get_point
    @score += 1
  end
end 