class ApplicationController < Sinatra::Base
    set default_content_type: "application/json"

     # CREATE
  post '/customers' do
    customer = Customer.create(params)
    customer.to_json
  end
 get "/customers" do 
  customer= Customer.all
  customer.to_json
 end
  # READ
  get '/customers/:id' do
    customer = Customer.find_by(id: params[:id])
    customer ? customer.to_json : {message: 'Customer not found'}.to_json
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

# CRUD Operations for Appointments
 # CREATE
 post '/appointments' do
  appointment = Appointment.create(
    date: params[:date],
    start_time: params[:start_time],
    customer_id: params[:customer_id],
    service_id: params[:service_id],
    name: params[:name],
    phone: params[:phone],
    email: params[:email],
    service: params[:service]
  )
  appointment.to_json
end

  # READ ALL
  get '/appointments' do
    appointments = Appointment.all
    appointments.to_json
  end

  # READ ONE
  get '/appointments/:id' do
    appointment = Appointment.find(params[:id])
    appointment.to_json
  end

  # UPDATE
  patch '/appointments/:id' do
    appointment = Appointment.find(params[:id])
    appointment.update(customer_id: params[:customer_id], service_id: params[:service_id], date: params[:date], time: params[:time])
    appointment.to_json
  end

  # DELETE
  delete '/appointments/:id' do
    appointment = Appointment.find(params[:id])
    appointment.destroy
    appointment.to_json
  end

  # CRUD Operations for Services
  get '/services' do
    services = Service.all
    services.to_json(include:[:customers, :appointments])
  end

  get '/services/:id' do
    service = Service.find_by(id: params[:id])
    if service
      service.to_json
    else
      halt 404, { message:'Service not found' }.to_json
    end
  end

  post '/services' do
    service = Service.create(params)
    status 201
    service.to_json
  end

  patch '/services/:id' do
    service = Service.find_by(id: params[:id])
    if service
      service.update(params.except(:_method))
      service.to_json
    else
      halt 404, { message:'Service not found' }.to_json
    end
  end

  delete '/services/:id' do
    service = Service.find_by(id: params[:id])
    if service
      service.destroy
      status 204
    else
      halt 404, { message:'Service not found' }.to_json
    end
  end

end