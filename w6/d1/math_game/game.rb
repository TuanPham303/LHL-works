require 'pry'
require './players'
require './questions'

class Game

  def self.start
    @question = Questions.new
    @player1 = Players.new('Player 1')
    @player2 = Players.new('Player 2')
    @present_player = @player1

    while @present_player.lives != 0 do
      @number_1 = @question.random_number
      @number_2 = @question.random_number
      @answer = @number_1 + @number_2

      puts "#{@present_player.name} score: #{@present_player.score} lives: #{@present_player.lives}"
      puts "What is the sum of #{@number_1} and #{@number_2}?"
      @player_answer = gets.chomp
      @player_answer = @player_answer.to_i
      
      if @player_answer == @answer
        @present_player.get_point
      else
        @present_player.lose_live
      end

      if @present_player == @player1
        @present_player = @player2
      else
        @present_player = @player1
      end
    end

    if @player1.score == 0
      puts "Player 2 wins with score of #{@player2.score}"
    else
      puts "Player 1 wins with score of #{@player1.score}"
    end
  end
  
end 

Game.start