module Api
  class ArticlesController < ApplicationController
    def show
      @article = Article.find(params[:id])

      render json: @article
    end

    def create
      @article = Article.new(article_params)

      if @article.save
        render json: @article, status: 201
      else
        render json: {'result': 'error'}
      end
    end

    def update
      @article = Article.find(params[:id])

      if @article.update(article_params)
        render json: {'result': 'success'}
      else
        render json: {'result': 'error'}
      end
    end

    def destroy
      @article = Article.find(params[:id])

      if @article.destroy
        render json: {'result': 'success'}
      else
        render json: {'result': 'error'}
      end
    end

    private

    def article_params
      params.permit(:title, :content, :image_url)
    end
  end
end
