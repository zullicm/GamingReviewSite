class ReviewsController < ApplicationController
  skip_before_action :authorized, only: :index

  def index
    reviews = Review.all
    render json: reviews
  end

  def create
    review = Review.create(review_params)
    render json: review, status: :created
  end

  def update
    review = Review.find_by(id: params[:id])
    review.update(review_params)
    render json: review
  end

  def destroy
    review = Review.find_by(id: params[:id])
    if review
      review.destroy
      render json: review 
    else
      render json: { error: "Review not found" }, status: :not_found
    end
  end

  private

  def review_params
    params.permit(:comment, :rating, :user_id, :game_id)
  end

end
