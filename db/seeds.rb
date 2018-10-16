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

  austin = User.find_by(email: 'austin');

  Route.destroy_all

  Route.create!([
    {city: 'Madison', distance: 1234,
      name: Faker::LordOfTheRings.location, creator_id: austin.id},
    {city: 'Madison', distance: 2345,
      name: Faker::LordOfTheRings.location, creator_id: austin.id},
    {city: 'Madison', distance: 23421,
      name: Faker::LordOfTheRings.location, creator_id: austin.id},
    {city: 'Madison', distance: 4463,
      name: Faker::LordOfTheRings.location, creator_id: austin.id},
  ])

  rf = Route.first
  rl = Route.last

  Workout.create!([
    {user_id: austin.id, title: Faker::Dune.planet, start_time: '19:23',
    body: Faker::Dune.saying, route_id: rf.id, distance: rf.distance,
    duration: 600, date: Faker::Date.backward(10)},
    {user_id: austin.id, title: Faker::Dune.planet, start_time: '19:23',
    body: Faker::Dune.saying, route_id: rl.id, distance: rl.distance,
    duration: 1000, date: Faker::Date.backward(10)},
    ])


end
