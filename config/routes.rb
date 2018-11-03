Rails.application.routes.draw do
  devise_for :users
  resources :users
  root to:"pages#index"
  get 'inicio' => 'pages#inicio'
  get 'servicios' => 'pages#Services'
  get 'Login&Register' => 'pages#Login_Register'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format:'json'} do
    namespace :v1 do
        resources :users, only: [:index,:show]
    end
  end
end
