class BooksController < ApplicationController
	def index
		render json: Book.all
	end
	def search
		author = params[:author]
		title = params[:title]
		
		unless author.blank?
			@book_list = Book.where(author:/.*#{author}.*/i)
		end

		unless title.blank?
			@book_list = Book.where(title: /.*#{title}.*/i)
		end

		render json: @book_list 

	end
end
