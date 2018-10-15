Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'
  get 'api/users/demo', to: 'api/users#demo_user'

  namespace :api, defaults: {format: :json}  do
    resources :users, only: [:create, :show] do
      resources :workouts, only: [:index, :create]
    end
    resource :session, only: [:create, :destroy]
    resources :routes, except: [:new, :edit] do
      resources :markers, only: [:index]
    end
    resources :markers, only: [:create, :destroy]
    resources :workouts, only: [:destroy, :show, :update]
  end
  get 'api/my_routes/', to: 'api/routes#myindex'

end
