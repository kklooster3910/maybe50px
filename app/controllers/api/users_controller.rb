
class Api::UsersController < ApplicationController 
    def create
        @user = User.new(user_params)
        debugger
        if @user.save
            login(@user)
            render :home #unsure on this, figure this out tonight, at the latest
        else
            json: @user.errors.full_messages, status: 422
        end
    end

    def show
        @user = User.find(params[:id])
        render :show
    end    

    # def destroy -- maybe implement this at some point in the future

    # end

    private

    def user_params
        params.require(:user).permit(:username, :email, :password)
    end
    
end