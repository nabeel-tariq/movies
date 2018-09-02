class Api::V1::MoviesController < ApplicationController
  before_action :set_movie, only: [ :show, :destroy, :update]
  
  def index
    @movies = Movie.all
      render json: {
      movies: @movies
    }
  end

  def create
    @movie = Movie.create!(movies_params)
    render json: {
      id: @movie.id,
      name: @movie.name,
      year: @movie.year_released,
      rating: @movie.rating
    }
  end

  def show
    render json: {
      id: @movie.id,
      name: @movie.name,
      year: @movie.year_released,
      rating: @movie.rating
    }
  end
  
  def destroy
    @movie.destroy
    @movies = Movie.all
      render json: {
      movies: @movies
    }
  end

  def update
    @movie.update(movies_params)
    render json: {
      id: @movie.id,
      name: @movie.name,
      year: @movie.year_released,
      rating: @movie.rating
    }
  end
  
  private
  def set_movie
    @movie = Movie.find(params[:id])
  end

  def movies_params
    params.permit( :name, :year_released, :rating)
  end

end