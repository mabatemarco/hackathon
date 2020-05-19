require 'test_helper'

class SharedinterestsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @sharedinterest = sharedinterests(:one)
  end

  test "should get index" do
    get sharedinterests_url, as: :json
    assert_response :success
  end

  test "should create sharedinterest" do
    assert_difference('Sharedinterest.count') do
      post sharedinterests_url, params: { sharedinterest: { interest_id: @sharedinterest.interest_id, user_id: @sharedinterest.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show sharedinterest" do
    get sharedinterest_url(@sharedinterest), as: :json
    assert_response :success
  end

  test "should update sharedinterest" do
    patch sharedinterest_url(@sharedinterest), params: { sharedinterest: { interest_id: @sharedinterest.interest_id, user_id: @sharedinterest.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy sharedinterest" do
    assert_difference('Sharedinterest.count', -1) do
      delete sharedinterest_url(@sharedinterest), as: :json
    end

    assert_response 204
  end
end
