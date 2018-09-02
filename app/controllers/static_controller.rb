class StaticController < ApplicationController
  def index       
    render file: 'client/dist/client/index.html'
  end
end
