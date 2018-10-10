Rails.application.routes.draw do
  resource :articles, only: %i[index new show edit]
  namespace :api do
    resource :articles, only: %i[create update destroy show]
  end
end
