class OrdersController < ApplicationController
  before_action :authenticate_user!
  protect_from_forgery except: :execute
  before_action :set_order, only: [:show, :execute, :event]
  before_action :check_creator, only: :show

  # GET /orders
  # GET /orders.json
  def index
    @orders = if current_user.admin?
      Order.all
    else
      Order.completed.sold_items_by current_user
    end

    @orders_bought = Order.completed.bought_items_by current_user
  end

  # GET /orders/1
  # GET /orders/1.json
  def show
  end

  # GET /orders/1/execute
  def execute
    respond_to do |format|
      if @order.executed_payment?(params)
        format.html { redirect_to item_path(@order.orderable), flash: {success: 'Orden creada satisfactoriamente.'} }
        format.json { head :ok }
      else
        status = @order.paypal_errors ? { error: @order.paypal_errors } : { alert: "Orden cancelada." }
        format.html { redirect_to item_path(@order.orderable), flash: status }
        format.json { render json: status, status: :unprocessable_entity }
      end
    end
  end

  # GET /orders/:id/event/:event
  def event
    event = params[:event]

    respond_to do |format|
      if @order.send("#{event}!")
        format.html { redirect_to @order, flash: {success: "La orden ejecutó correctamente la acción de '#{t(event)}'."}}
        format.json { render action: 'show', status: :created, location: @order }
      else
        format.html { redirect_to @order, flash: {error: @order.errors.full_messages.join(". ") } }
        format.json { render json: @order.errors, status: :unprocessable_entity }
      end
    end
  end

  # POST /orders
  # POST /orders.json
  def create
    @order = Order.new(order_params)
    @order.user = current_user

    respond_to do |format|
      if @order.save
        format.html { redirect_to @order.approval_url }
        format.json { render action: 'show', status: :created, location: @order }
      else
        format.html { redirect_to item_path(@order.orderable), flash: {error: @order.errors.full_messages.join(". ") } }
        format.json { render json: @order.errors, status: :unprocessable_entity }
      end
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_order
      @order = Order.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def order_params
      params.require(:order).permit(:user_id, :amount, :description, :orderable_id, :orderable_type, :action)
    end

    def check_creator
      return true if current_user.admin?
      unless @order.item.user == current_user
        err_msg = 'Orden accessible solo por vendedor.'
        flash[:error] = err_msg
        respond_to do |format|
          format.html { redirect_to orders_path }
          format.json { render json: err_msg, status: :unprocessable_entity }
        end
      end
    end
end
