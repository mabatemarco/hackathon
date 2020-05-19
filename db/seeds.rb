# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'csv'
CSV.foreach(Rails.root.join('lib/MOCK_DATA.csv'), headers: true) do |row|
  
  User.create({
    first_name: row[0],
    last_name: row[1],
    email: row[2],
    title: row[3],
    city: row[4],
    state: row[5],
    zip: row[6],
    username: row[7],
    password: row[8],
    image: 'https://reason.org/wp-content/uploads/2018/01/guybentley.jpg'
  })
end

group1=Group.create!({
  title: 'Management',
  description: 'For Managers',
  private: false
})

group2=Group.create!({
  title: 'Workers',
  description: 'The people who do the jobs',
  private: false
})

group3=Group.create!({
  title: 'Butterflies',
  description: 'Colorful dancers of the air',
  private: false
})

10.times{
  Member.create!(
 {group_id:1,
  user_id:rand(100)+1,
  is_admin:false
})}
12.times{
  Member.create!(
 {group_id:2,
  user_id:rand(100)+1,
  is_admin:false
})}
14.times{
  Member.create!(
 {group_id:3,
  user_id:rand(100)+1,
  is_admin:false
})}