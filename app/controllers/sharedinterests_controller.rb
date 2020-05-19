class SharedinterestsController < ApplicationController
  before_action :set_sharedinterest, only: [:show, :update, :destroy]

  # GET /sharedinterests
  def index
    @sharedinterests = Sharedinterest.all

    render json: @sharedinterests
  end

  # GET /sharedinterests/1
  def show
    render json: @sharedinterest
  end

  # POST /sharedinterests
  def create
    @sharedinterest = Sharedinterest.new(sharedinterest_params)

    if @sharedinterest.save
      render json: @sharedinterest, status: :created
    else
      render json: @sharedinterest.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /sharedinterests/1
  def update
    if @sharedinterest.update(sharedinterest_params)
      render json: @sharedinterest
    else
      render json: @sharedinterest.errors, status: :unprocessable_entity
    end
  end

  # DELETE /sharedinterests/1
  def destroy
    @sharedinterest.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_sharedinterest
      @sharedinterest = Sharedinterest.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def sharedinterest_params
      params.require(:sharedinterest).permit(:user_id, :interest_id)
    end
end
