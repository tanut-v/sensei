Rails.application.routes.draw do
  resources :articles, only: %i[index new show edit]

  namespace :api do
    resources :articles, only: %i[create update destroy show]
  end
end
