class Appointment < ActiveRecord::Base
    belongs_to :customer
    belongs_to :service
  
    def print_appointment
      puts "Appointment for #{service.name} on #{date} at #{time}."
    end

    def customer
     Customer.find_by(id: customer_id) 
    end

    def service
      Service.find_by(name: service_name)
    end

  end
 
  
