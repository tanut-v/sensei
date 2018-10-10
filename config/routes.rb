Rails.application.routes.draw do

  namespace :api do
    resources :articles do
      resources :comments, only: %i(index create)
    end
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
