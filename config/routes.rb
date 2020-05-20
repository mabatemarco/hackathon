Rails.application.routes.draw do
 
  resources :events
  resources :interests
  resources :groups do
    resources :posts
    resources :events
  end
  resources :users

  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
