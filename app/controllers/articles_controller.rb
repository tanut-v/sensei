class ArticlesController < ActionController::Base

	def index
		@article = Article.order('id')
	end

	def show
		@article = Article.find(params[:id])
	end
	
	def new
		article = Article.new
	end

	def create
		article = Article.new(allowed_params)

		if article.save
			flash.now[:success] = "Save success! Add new article."
			redirect_to article_path
		else
			render 'new'
		end
	end

	def edit
		@article = Article.find(params[:id])
	end

	def update
		@article = Article.find(params[:id])
		if @article.update_attributes(allowed_params)
			flash.now[:success] = "Save success! Edit article detail."
			redirect_to articles_path
		else
			render 'new'
		end
	end

	def destroy
		@article = Article.find(params[:id])
		@article.destroy
		flash.now[:success] = "Delete success!"
		redirect_to articles_path
  end
  
  private
	def allowed_params
		params.require(:article).permit(:firstname, :last_name, :age, :avatar)
	end

end
