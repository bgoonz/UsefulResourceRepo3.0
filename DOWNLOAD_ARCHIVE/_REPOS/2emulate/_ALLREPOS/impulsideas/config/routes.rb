Impulsideas::Application.routes.draw do
  post 'ipn_notifications/:contribution_id', to: 'payment_notifications#create', as: 'ipn_notifications'

  get "contact_form/new"
  get "contact_form/create"
  get "about/faq"
  get "about/faq_en"
  get "about/index"
  get "about/main"
  get "about/terms"
  get "about/terms_en"
  get "about/landing"
  get 'about', to: 'about#index', as: 'about'

  #resources :items
  resources :contact_form, only: :create
  resources :payment_notifications

  mount RedactorRails::Engine => '/redactor_rails'

  resources :projects do
    #resources :contributions
    resources :items, shallow: true
    get 'orders', on: :member
  end

  resources :orders, except: [:update, :destroy, :new, :edit] do
    get 'execute', on: :member
    get 'event/:event' => 'orders#event', on: :member, as: 'event'
  end

  get 'items', to: 'items#index', as: 'items'

  devise_for :users, controllers: { :omniauth_callbacks => "users/omniauth_callbacks",
                                    :registrations => "registrations"  }

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  root 'about#main'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
