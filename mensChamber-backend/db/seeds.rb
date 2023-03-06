puts "🌱 Seeding spices..."

# Create sample customers
customer1 = Customer.create(name: "John Doe", email: "johndoe@example.com", phone: "555-1234")
customer2 = Customer.create(name: "Jane Smith", email: "janesmith@example.com", phone: "555-5678")

# Create sample services
service1 = Service.create(name: "Haircut", description: "Includes shampoo and blow-dry", price: 50.00, image: "https://i.pinimg.com/originals/19/67/af/1967afb4fb68d241d3b9f67f71304192.jpg")
service2 = Service.create(name: "Color", description: "Includes single-process color", price: 100.00, image: "https://i1.wp.com/therighthairstyles.com/wp-content/uploads/2013/12/1-black-high-top-fade.jpg?resize=500%2C529&ssl=1")

# Create sample appointments
appointment1 = Appointment.create(name: "John Doe", email: "johndoe@example.com", phone: "555-1234", service: "Haircut", date: DateTime.new(2023, 3, 15, 10, 0, 0), customer: customer1, service: service1)
appointment2 = Appointment.create(name: "Jane Smith", email: "janesmith@example.com", phone: "555-5678", service: "Color", date: DateTime.new(2023, 3, 16, 14, 0, 0), customer: customer2, service: service2)

puts "✅ Done seeding!"

