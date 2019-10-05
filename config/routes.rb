Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'base#index'

  namespace :api do
    namespace :v1 do
      post 'login', to: 'sessions#login'
      resources :reports, only: %i(index show create update)
    end
  end

  get '*path', to: 'base#index'
end