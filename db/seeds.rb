# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
  User.destroy_all

  User.create!([
    {email: 'austin', password: 'password',
      fname: 'Austin', lname: 'Cotant', DOB: '5/5/1991',
    gender: 'M', country: 'USA'},
    {email: 'Sam', password: 'password',
      fname: 'Sam', lname: 'Hacker', DOB: '24/6/1993',
    gender: 'M', country: 'USA'}
    ])

    10.times do
      User.create_demo_user
    end

end
