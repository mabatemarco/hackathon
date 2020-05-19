Rails.application.routes.draw do
  resources :posts
  resources :sharedinterests
  resources :members
  resources :interests
  resources :groups
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
