Rails.application.routes.draw do
  resources :users, only: [:show, :create]
  post "/signup", to: "users#create"
  get "/auth", to: "users#show"
  
  resources :reviews, only: [:index, :create, :update, :destroy]

  resources :games, only: [:index, :show]
  
# Sessions
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
