module Api
    module V1
      class UsersController < BaseController
        def index
          @users = User.all
          render @users
        end

        def show
          @user = User.find(params[:id])
        end
    end
  end
end
