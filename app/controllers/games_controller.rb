class GamesController < ApplicationController
  skip_before_action :authorized
  def index
    games = Game.all
    # byebug
    render json: games
  end

  def show
    game = Game.find_by(id: params[:id])
    # byebug
    render json: game
  end



  private

  def game_params
    params.permit(:name, :release_year, :platform, :description)
  end

end
