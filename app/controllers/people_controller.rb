class PeopleController < ApplicationController
  # def index
  #   @people = Person.all
  #   respond_to do |f|
  #     f.json { render json: @people}
  #   end
  # end


def index 
  render json: Person.all
end

end