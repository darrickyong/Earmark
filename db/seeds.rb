# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create(name: "Darrick Yong", password: "123456", email: "darrickyong@earmark.com")
User.create(name: "John Doe", password: "123456", email: "johndoe@earmark.com")
User.create(name: "Jane Doe", password: "123456", email: "janedoe@earmark.com")
User.create(name: "Harry Potter", password: "123456", email: "harrypotter@earmark.com")
User.create(name: "JSON Wong", password: "123456", email: "jsonwong@earmark.com")
User.create(name: "Poofey Yong", password: "123456", email: "poofeyyong@earmark.com")
User.create(name: "DemoUser", password: "123456", email: "demo@earmark.com")

Expense.create(name: "Saturday dinner", amount: 2000, owner_id: 7, date: "2020-04-25")
Expense.create(name: "Wednesday dinner", amount: 3000, owner_id: 1, date: "2020-04-29")
Expense.create(name: "Saturday dinner", amount: 4000, owner_id: 7, date: "2020-04-18")
