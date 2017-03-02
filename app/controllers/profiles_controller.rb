class ProfilesController < ApplicationController
  
  # When the user makes a GET to /users/:user_id/profile/new
  def new
    # Render blank profile details form
    @profile = Profile.new
    
  end
end