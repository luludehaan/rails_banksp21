class AccountsController < ApplicationController
  skip_before_action :verify_authenticity_token 
  def index
    @accounts = current_user.accounts 
    render component: "Accounts", props: { user: current_user, accounts: @accounts }
  end
  def show
    @account = current_user.accounts.find(params[:id])
  end
  def new
    @account = current_user.accounts.new
    render component: "AccountNew", props: { user: current_user, account: @account }
  end
  def create
    @account = current_user.accounts.new(account_params)
    if @account.save
      flash[:success] = "Account Created"
      redirect_to root_path
    else
      flash[:error] = "Error #{@account.errors.full_messages.join("\n")}"
      render component: "AccountNew", props: { user: current_user, account: @account }
    end
  end
  def edit
  end
  private 
    def account_params
      params.require(:account).permit(:name, :balance)
    end
end