Rails.application.routes.draw do
  namespace :api do
    resources :todos, only: [:index, :show, :create, :update, :destroy], defaults: {format: :json}
  end

  root to: 'static_pages#root'
end
