class GroupsController < ApplicationController
  before_action :set_group, only: [:show, :update, :destroy]
  before_action :authorize_request, except: [:index, :show]

  # GET /groups
  def index
    @groups = Group.all

    render json: @groups, include: :users
  end

  # GET /groups/1
  def show
    render json: @group, include: [{members: {include: {user: {include: :groups}}}}, {posts: {include: :user}}] 
  end

  # POST /groups
  def create
    @group = Group.new(group_params)

    if @group.save
      if @group.private==true
      @member = Member.new({user_id: @current_user.id, group_id: @group.id, is_admin: true})

      if @member.save
        render json: @group, status: :created
      else
        render json: @member.errors, status: :unprocessable_entity
      end
    else
      @member = Member.new({user_id: @current_user.id, group_id: @group.id, is_admin: false})

      if @member.save
        render json: @group, status: :created
      else
        render json: @member.errors, status: :unprocessable_entity
      end
    end
    else
      render json: @group.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /groups/1
  def update
    if @group.update(group_params)
      render json: @group
    else
      render json: @group.errors, status: :unprocessable_entity
    end
  end

  # DELETE /groups/1
  def destroy
    @group.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_group
      @group = Group.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def group_params
      params.require(:group).permit(:title, :description, :image, :private)
    end
end
