class InterestsController < ApplicationController
  before_action :set_interest, only: [:show, :update, :destroy]
  before_action :authorize_request, except: [:index, :show]

  # GET /interests
  def index
    @interests = Interest.all

    render json: @interests
  end

  # GET /interests/[name]
  def show
    render json: @interest, include: :users
  end

  # POST /interests
  def create
    if interest.exists?(interest: params[:id])
      @interest = Interest.find_by(interst: params[:id])
      @sharedinterest = Sharedinterest.new({user_id: @current_user.id, interest_id: @interest.id})
      if @interest.save
        render json: @interest, status: :created
      else
        render json: @interest.errors, status: :unprocessable_entity
      end
    else 
      @interest = Interest.new(interest_params)
      @sharedinterest = Sharedinterest.new({user_id: @current_user.id, interest_id: @interest.id})
      if @interest.save
        render json: @interest, status: :created
      else
        render json: @interest.errors, status: :unprocessable_entity
      end
    end
  end

  # PATCH/PUT /interests/1
  def update
    if @interest.update(interest_params)
      render json: @interest
    else
      render json: @interest.errors, status: :unprocessable_entity
    end
  end

  # DELETE /interests/1
  def destroy
    @interest.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_interest
      @interest = Interest.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def interest_params
      params.require(:interest).permit(:user_id, :interest)
    end
end
