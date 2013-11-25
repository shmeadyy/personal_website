require 'sinatra'

get '/' do
	erb :index
end

get '/about' do
	erb :about
end

get '/resume' do
	erb :resume
end

get '/portfolio' do
	erb :portfolio
end
