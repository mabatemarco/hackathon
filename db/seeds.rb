# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

faceImages=['https://reason.org/wp-content/uploads/2018/01/guybentley.jpg', 'https://imgix.datadoghq.com/img/stephen_k.png', 'https://imgix.datadoghq.com/img/Portraits/Alexis_Le-Qyoc_02.png?auto=format', 'https://imgix.datadoghq.com/img/Portraits/Alex_Rosemblat.png?auto=format', 'https://imgix.datadoghq.com/img/stephen_k.png', 'https://imgix.datadoghq.com/img/careers/celene_c.png', 'https://imgix.datadoghq.com/img/scott_a.png', 'https://imgix.datadoghq.com/img/emily_c_opt.png', 'https://imgix.datadoghq.com/img/Lucy_W.png', 'https://imgix.datadoghq.com/img/oceane_fievet.png', 'https://imgix.datadoghq.com/img/dylan_yang_2.png', 'https://imgix.datadoghq.com/img/Daryn_S-2.png', 'https://imgix.datadoghq.com/img/Evan_P.png', 'https://imgix.datadoghq.com/img/marc-l.png', 'https://imgix.datadoghq.com/img/melissa_nelson.png', 'https://imgix.datadoghq.com/img/brendan_d.png']

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
    image: faceImages[rand(15)]
  })
end

user1=User.create({first_name: 'Jason', last_name: 'Mullings', email: 'jason@jason.com', title: 'Lead Software Dev', city: "Brooklyn", state:'NY', username: 'admin', password: 'admin1', image: 'https://previews.123rf.com/images/yupiramos/yupiramos1710/yupiramos171009600/87757491-cartoon-programmer-laptop-working-writing-code-vector-illustration.jpg'})

group1=Group.create!({
  title: 'Management',
  image: 'https://d19d5sz0wkl0lu.cloudfront.net/dims4/default/f9337d7/2147483647/resize/800x%3E/quality/90/?url=https%3A%2F%2Fatd-brightspot.s3.amazonaws.com%2Fea%2F01%2Fa1822ec64484a457f53852c8a56f%2Fadobestock-141354577.jpeg',
  private: false
})

group2=Group.create!({
  title: 'Breakdancing Enthusiasts',
  image: 'https://cf.ltkcdn.net/dance/images/orig/224281-2799x1866-breakdancer.jpg',
  private: false
})

group3=Group.create!({
  title: 'Bad Movie Club',
  image: 'https://cdn.pixabay.com/photo/2015/12/09/17/12/popcorn-1085072_960_720.jpg',
  private: false
})

group4=Group.create!({
  title: 'Rock Climbing',
  image: 'https://www.nps.gov/acad/planyourvisit/images/20140603-Climber_960.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
  private: false
})

group5=Group.create!({
  title: 'Extreme Chili Showdowns',
  image: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Chili-4.jpg',
  private: false
})

group6=Group.create!({
  title: 'Colunteering',
  image: 'https://themustardseedproject.org/wp-content/uploads/2018/09/AUGUST-2-VOLUNTEER-RECRUITMENT.png',
  private: false
})

group7=Group.create!({
  title: 'Green Thumbs',
  image: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Sungai_Buloh%27s_Gardening_masters.jpg',
  private: false
})

group8=Group.create!({
  title: 'Seltzer or soda?',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Water_bubbles_in_glass.jpg/1024px-Water_bubbles_in_glass.jpg',
  private: false
})

group9=Group.create!({
  title: 'Chessmasters',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/A_Rare_Chessboard.jpg/1280px-A_Rare_Chessboard.jpg',
  private: false
})

group10=Group.create!({
  title: 'Classic Computing',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Old_computer_3.jpg/1024px-Old_computer_3.jpg',
  private: false
})

group11=Group.create!({
  title: 'Vexillology',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Flag-map_of_the_world.svg/1920px-Flag-map_of_the_world.svg.png',
  private: false
})

group12=Group.create!({
  title: 'Needlepoint',
  image: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/1957.135_web.jpg',
  private: false
})

group13=Group.create!({
  title: 'Classical Music',
  image: 'https://www.dw.com/image/45270796_303.jpg',
  private: false
})

group14=Group.create!({
  title: 'Fly Fishing',
  image: 'https://i.pinimg.com/originals/dd/46/f2/dd46f2fd39587fde67b64b05e2e2a119.jpg',
  private: false
})

group15=Group.create!({
  title: 'Bridge',
  image: 'https://greatbridgelinks.com/wp-content/uploads/2019/06/bridge.jpg',
  private: false
})



Member.create({group_id:1, user_id:user1.id, is_admin: false})

rand(15).times{
  Member.create!(
 {group_id:1,
  user_id:rand(190)+1,
  is_admin:false
})}
rand(15).times{
  Member.create!(
 {group_id:2,
  user_id:rand(190)+1,
  is_admin:false
})}
rand(15).times{
  Member.create!(
 {group_id:3,
  user_id:rand(190)+1,
  is_admin:false
})}
rand(15).times{
  Member.create!(
 {group_id:4,
  user_id:rand(190)+1,
  is_admin:false
})}
rand(15).times{
  Member.create!(
 {group_id:5,
  user_id:rand(190)+1,
  is_admin:false
})}
rand(15).times{
  Member.create!(
 {group_id:6,
  user_id:rand(190)+1,
  is_admin:false
})}
rand(15).times{
  Member.create!(
 {group_id:7,
  user_id:rand(190)+1,
  is_admin:false
})}
rand(15).times{
  Member.create!(
 {group_id:8,
  user_id:rand(190)+1,
  is_admin:false
})}
rand(15).times{
  Member.create!(
 {group_id:9,
  user_id:rand(190)+1,
  is_admin:false
})}
rand(15).times{
  Member.create!(
 {group_id:10,
  user_id:rand(190)+1,
  is_admin:false
})}
rand(15).times{
  Member.create!(
 {group_id:11,
  user_id:rand(190)+1,
  is_admin:false
})}
rand(15).times{
  Member.create!(
 {group_id:12,
  user_id:rand(190)+1,
  is_admin:false
})}
rand(15).times{
  Member.create!(
 {group_id:13,
  user_id:rand(190)+1,
  is_admin:false
})}
rand(15).times{
  Member.create!(
 {group_id:14,
  user_id:rand(190)+1,
  is_admin:false
})}
rand(15).times{
  Member.create!(
 {group_id:15,
  user_id:rand(190)+1,
  is_admin:false
})}
