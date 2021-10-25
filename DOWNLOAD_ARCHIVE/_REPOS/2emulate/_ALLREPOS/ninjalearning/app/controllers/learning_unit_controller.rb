class LearningUnitController < ApplicationController
  def index
    @learning_units = LearningUnit.all
  end
end
