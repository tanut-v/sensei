module Api
  class ArticlesController < ApplicationController
    def show
      @article = Article.find(params[:id])

      render :json
    end

    def create
      @article = Article.new(article_params)

      if @article.save
        render json: @article
      else
        render json: {'result': 'error'}
      end
    end

    def update

    end

    def destroy

    end

    private

    def article_params
      params.permit(:title, :content, :image_url)
    end
  end
end
