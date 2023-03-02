
# Create some customers
customer1 = Customer.create(name: "John Smith", email: "john@example.com", phone: "555-1234")
# customer2 = Customer.create(name: "Jane Doe", email: "jane@example.com", phone: "555-5678")

# Create some services
service1 = Service.create(name: "Haircut", description: "Get a stylish haircut from our professional stylists.", price: 50.0)
# service2 = Service.create(name: "Massage", description: "Relax and unwind with a soothing massage from our experienced therapists.", price: 80.0)

# Create some appointments
appointment1 = Appointment.create(date: Date.today, start_time: Time.now, customer: customer1, service: service1)
# appointment2 = Appointment.create(date: Date.tomorrow, start_time: Time.now + 1.hour, customer: customer2, service: service2)
# appointment3 = Appointment.create(date: Date.today, start_time: Time.now + 2.hours, customer: customer1, service: service2)
