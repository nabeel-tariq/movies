class Movie < ApplicationRecord
  validates_presence_of :name, :year_released, :rating
end
