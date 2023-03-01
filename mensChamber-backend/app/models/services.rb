
class Service < ActiveRecord::Base
  has_many :appointments
  has_many :customers, through: :appointments

  def book_appointment(customer, date, time)
    Appointment.create(customer:customer, date:date, time:time, service:self)
  end

  def print_all_appointments
    appointments.each do |appointment|
      appointment.print_appointment
    end
  end

  def customers
    Customer.joins(:appointments).where(appointments:{service_id: id})
  end
end
