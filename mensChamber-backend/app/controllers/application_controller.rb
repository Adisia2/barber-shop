class ApplicationController < Sinatra::Base
  set default_content_type: "application/json"

  # CREATE
  post '/customers' do
    customer = Customer.create(
      name: params[:name],
      email: params[:email],
      phone: params[:phone]
    
      

    )
    customer.to_json
  end

  post '/services' do
    service = Service.create(
      name: params[:name],
      description: params[:description],
      price: params[:price],
      image: params[:image]
      
    )
    service.to_json
  end

  post '/appointments/' do
    appointment = Appointment.create(
      name: params[:name],
      phone: params[:phone],
      email: params[:email],
      service: params[:service],
      date: params[:date_time],
      customer_id: params[:customer_id],
      service_id: params[:service_id]
    )
    appointment.to_json
  end

  # READ
  get "/customers" do 
    customer= Customer.all
    customer.to_json
   end

   get '/customers/:id' do
    customer = Customer.find_by(id: params[:id])
    customer ? customer.to_json : {message: 'Customer not found'}.to_json
  end

  get '/services' do
    services = Service.all
    services.to_json
  end

  get '/services/:id' do
    service = Service.find(params[:id])
    service.to_json
  end

  get '/appointments' do
    appointments = Appointment.all
    appointments.to_json
  end

  get '/appointments/:id' do
    appointment = Appointment.find(params[:id])
    appointment.to_json
  end

  # UPDATE
  patch '/customers/:id' do
    customer = Customer.find_by(id: params[:id])
    if customer
      customer.update(params)
      customer.to_json
    else
      {message: 'Customer not found'}.to_json
    end
  end

  patch '/services/:id' do
    service = Service.find(params[:id])
    service.update(params)
    service.to_json
  end

  patch '/appointments/:id' do
    appointment = Appointment.find(params[:id])
    appointment.update(
      name: params[:name],
      phone: params[:phone],
      email: params[:email],
      service: params[:service],
      date_time: params[:date_time],
      customer_id: params[:customer_id],
      service_id: params[:service_id]
    )
    appointment.to_json
  end

  # DELETE
  delete '/customers/:id' do
    customer = Customer.find_by(id: params[:id])
    if customer
      customer.destroy
      {message: 'Customer deleted'}.to_json
    else
      {message: 'Customer not found'}.to_json
    end
  end

  delete '/services/:id' do
    service = Service.find(params[:id])
    service.destroy
    { message: 'Service deleted' }.to_json
  end

  delete '/appointments/:id' do
    appointment = Appointment.find(params[:id])
    appointment.destroy
    { message: 'Appointment deleted' }.to_json
  end
end

