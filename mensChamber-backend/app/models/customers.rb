class Customer < ActiveRecord::Base
  has_many :appointments, dependent: :destroy
  has_many :services, through: :appointments

  def booked_appointment
    appointments.joins(:service).order(date: :desc).first
  end

  def cancel_appointment(appointment)
    appointment.destroy
  end
end

  