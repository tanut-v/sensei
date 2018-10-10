Rails.application.routes.draw do
  resources :articles, only: %w(show, new, index)

  namespace :api do
    resources :articles
  end
end
