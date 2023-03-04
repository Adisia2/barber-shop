# create customers
customer1 = Customer.create(name: "John Doe", email: "john@example.com", phone: "+123456789")
customer2 = Customer.create(name: "Jane Doe", email: "jane@example.com", phone: "+987654321")
customer3 = Customer.create(name: "Bob Smith", email: "bob@example.com", phone: "+555555555")

# create services
service1 = Service.create(name: "Haircut", description: "Get a stylish haircut", price: 50.0, image: "https://menshaircuts.org/wp-content/uploads/2018/02/18722314_792145410945736_3013001553364647936_n1-696x870.jpg")
service2 = Service.create(name: "Coloring", description: "Add some color to your hair", price: 80.0, image: "https://www.pinterest.com/pin/706361522822346651/")
service3 = Service.create(name: "Facial", description: "Get a refreshing facial", price: 100.0, image: "https://www.pinterest.com/pin/609885974555574963/")


# create some appointments
appointment1 = Appointment.create(date: "2023-03-10", start_time: "10:00:00", customer: customer1, service: service1, name: "John Doe", phone: "555-1234", email: "johndoe@example.com")
appointment2 = Appointment.create(date: "2023-03-15", start_time: "14:00:00", customer: customer2, service: service2, name: "Jane Smith", phone: "555-5678", email: "janesmith@example.com")
