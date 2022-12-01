class GamesController < ApplicationController
  skip_before_action :authorized
  def index
    games = Game.all
    render json: games, include: ['reviews', 'reviews.user']
  end

  def show
    game = Game.find_by(id: params[:id])
    render json: game, include: ['reviews', 'reviews.user']
  end



  private

  def game_params
    params.permit(:name, :release_year, :platform, :description)
  end

end
