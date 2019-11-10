
require "unirest"
class WordsController < ApplicationController
  
  

  def randomWord()
   
  response = Unirest.get "https://wordsapiv1.p.mashape.com/words/soliloquy",
  headers:{
    "X-Mashape-Key" => "45ed4fb452msh00100a67afbd6dcp1ea6afjsn61004ace6df5",
    "Accept" => "application/json"
  }
  end
  # GET /words
  def index
    @words = Word.all
    randomWord
    render json: @words
  end

  # GET /words/1
  def show
    render json: @word
  end

  # POST /words
  def create
    @word = Word.new(word_params)

    if @word.save
      render json: @word, status: :created, location: @word
    else
      render json: @word.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:user).permit(:username)
    end
end
