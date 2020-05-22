class MembersController < ApplicationController
  before_action :set_member, only: [:show, :update, :destroy]
  before_action :authorize_request, except: [:index, :show]

  # GET /members
  def index
    @members = Member.all

    render json: @members
  end

  # GET /members/1
  def show
    render json: @member
  end

  # POST /members
  def create
    @member = Member.new(group_id: params[:group_id])
    @member.user_id=@current_user.id
    if @member.save
      render json: @member, status: :created
    else
      render json: @member.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /members/1
  def update
    if @member.update(member_params)
      render json: @member
    else
      render json: @member.errors, status: :unprocessable_entity
    end
  end

  # DELETE /members/1
  def destroy
    @member.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_member
      @member = Member.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def member_params
      params.require(:member).permit(:group_id, :user_id, :is_admin)
    end
end
