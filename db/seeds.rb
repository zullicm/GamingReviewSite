# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Game.create(name: "", release_year: , platform: "", image: "", description: "")

puts "Seeding games..."

#1
Game.create(name: "Super Mario Sunshine", release_year: 2002, platform: "Gamecube", image: "https://mario.wiki.gallery/images/thumb/5/51/Box_NA_Super_Mario_Sunshine.png/1200px-Box_NA_Super_Mario_Sunshine.png",description: "Super Mario Sunshine is a 2002 platform game developed and published by Nintendo for the GameCube. It is the second 3D game in the Super Mario series, following Super Mario 64.")

#2
Game.create(name: "The Legend of Zelda: The Wind Waker", release_year: 2002, platform: "Gamecube", image: "https://m.media-amazon.com/images/I/51W8C95QDDL.jpg", description: "The Legend of Zelda: The Wind Waker is a 2002 action-adventure game developed and published by Nintendo for the GameCube. An installment in The Legend of Zelda series, it was released in Japan in December 2002, in North America in March 2003, and in Europe in May 2003.")

#3
Game.create(name: "Mario Kart: Double Dash!!", release_year: 2003, platform: "Gamecube", image: "https://images.nintendolife.com/games/gamecube/mario_kart_double_dash/cover_large.jpg", description: "Mario Kart: Double Dash is a 2003 kart racing video game developed and published by Nintendo for the GameCube. The game is the fourth main entry in the Mario Kart series and the third for home consoles after Mario Kart 64.")

#4
Game.create(name: "Grand Theft Auto III", release_year: 2001, platform: "Multiple", image: "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/GTA3boxcover.jpg/220px-GTA3boxcover.jpg", description: "Grand Theft Auto III is a 2001 action-adventure game developed by DMA Design and published by Rockstar Games. It is the third main entry in the Grand Theft Auto series, following 1999's Grand Theft Auto 2, and the fifth instalment overall.")

#5
Game.create(name: "God of War", release_year: 2005, platform: "Playstation 2", image: "https://m.media-amazon.com/images/I/91VKfyGGkYL.jpg", description: "God of War is an action-adventure hack and slash video game developed by Santa Monica Studio and published by Sony Computer Entertainment. First released on March 22, 2005, for the PlayStation 2 console, it is the first installment in the series of the same name and the third chronologically.")

#6
Game.create(name: "The Simpsons: Hit & Run", release_year: 2003, platform: "Multiple", image: "https://upload.wikimedia.org/wikipedia/en/5/5f/The_Simpsons_Hit_and_Run_cover.png", description: "The Simpsons: Hit & Run is a 2003 action-adventure game developed by Radical Entertainment and published by Vivendi Universal Games. It is based on the American animated sitcom The Simpsons, and is the twenty-second installment in the Simpsons series of video games.")

#7
Game.create(name: "Halo 2", release_year: 2004, platform: "Xbox", image: "https://halo.wiki.gallery/images/thumb/f/ff/Halo2-Cover-Large.jpg/300px-Halo2-Cover-Large.jpg", description: "Halo 2 is a 2004 first-person shooter game developed by Bungie and published by Microsoft Game Studios for the Xbox console. Halo 2 is the second installment in the Halo franchise and the sequel to 2001's critically acclaimed Halo: Combat Evolved.")

#8
Game.create(name: "Fable", release_year: 2004, platform: "Xbox", image: "https://preview.redd.it/nrwhtr50v0t51.jpg?width=256&format=pjpg&auto=webp&s=894462d80ac59ad63eb4d78c2afd1643da3ea949", description: "Fable is an action role-playing video game, the first in the Fable series. It was developed for the Xbox, Microsoft Windows, and Mac OS X platforms by Big Blue Box Studios, a satellite developer of Lionhead Studios, and was published by Microsoft Studios. The game shipped for the Xbox in September 2004.")

#9
Game.create(name: "Shadow of the Colossus", release_year: 2005, platform: "Playstation 2", image: "https://www.mobygames.com/images/covers/l/52946-shadow-of-the-colossus-playstation-2-front-cover.jpg", description: "Shadow of the Colossus is a 2005 action-adventure game developed by Japan Studio and Team Ico, and published by Sony Computer Entertainment for the PlayStation 2.")

puts "Games Seeded!"

#-----------------------------------------------------------------------------------------------
# User.create(username: "", profile_img: "", password: "")

puts "Seeding Users..."

#1
User.create(username: "Chris", profile_img: "https://scontent-lga3-1.xx.fbcdn.net/v/t1.6435-9/60256325_2419040464793080_8991451735675371520_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=m2TFJtBms4cAX_QQaHv&_nc_ht=scontent-lga3-1.xx&oh=00_AfCz8nULmhQcebpFrbab8DBZzU6xNJh_o9K5dbwBZHimiw&oe=63B9995A", password: "1111")

#2
User.create(username: "Ray", profile_img: "https://scontent-lga3-1.xx.fbcdn.net/v/t1.18169-9/25659781_1747341402241483_7306637334490800326_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=OMNtzMRmURYAX92_Ne9&_nc_ht=scontent-lga3-1.xx&oh=00_AfDAEKzV3wO-BWUX_Hbmm2loW6T1AgIeu348Dc3vsbh_HA&oe=63B99998", password: "2222")

#3
User.create(username: "Eric", profile_img: "https://scontent-lga3-1.xx.fbcdn.net/v/t1.6435-9/75242106_428401018092376_8066531404655099904_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=UIKvOd7uQZYAX9By31g&_nc_ht=scontent-lga3-1.xx&oh=00_AfBgVmM4vN9Mwo2SSF3c8zXt4MfTbCWLMAUBD5gUKKf2Kw&oe=63B98F6F", password: "3333")


puts "Users Seeded!"

#-----------------------------------------------------------------------------------------------
# Review.create(comment: "", rating: , user_id: , game_id: )

puts "Seeding Reviews..."

#Chris - user 1 reviews
Review.create(comment: "First 3d mario I ever played, so much fun", rating: 8, user_id: 1, game_id: 1)

Review.create(comment: "Zelda Games are always fun, bias for nostalgia", rating: 9, user_id: 1, game_id: 2)

Review.create(comment: "A game where you can be on a team instead of forming hatred towards your freinds", rating: 8, user_id: 1, game_id: 3)

Review.create(comment: "Where GTA started for me. Missions were blah but running around was always fun", rating: 7, user_id: 1, game_id: 4)

Review.create(comment: "Hack and slash against the gods. Grade A badassery", rating: 10, user_id: 1, game_id: 5)

Review.create(comment: "Awesome game to take turns with friends", rating: 7, user_id: 1, game_id: 6)

Review.create(comment: "My favorites have always been FPS games and this is a classic.", rating: 9, user_id: 1, game_id: 7)

Review.create(comment: "Got bored within the first hour. Didnt pull me in fast enough", rating: 3, user_id: 1, game_id: 8)

Review.create(comment: "AM LEVI AHHHHH", rating: 8, user_id: 1, game_id: 9)


#Ray - user 2 reviews
Review.create(comment: "I love all 3d marios, was fun to go back and play one of the olders ones", rating: 7, user_id: 2, game_id: 1)

Review.create(comment: "Too hard, but I like the artstyle", rating: 4, user_id: 2, game_id: 2)

Review.create(comment: "Never liked MK cause driving was hard, I like this one cause I can just throw the items!", rating: 8, user_id: 2, game_id: 3)

Review.create(comment: "Boring with no real fun objectives", rating: 5, user_id: 2, game_id: 4)

Review.create(comment: "Button mashing got a bit boring for me. Not big into action stuff", rating: 4, user_id: 2, game_id: 5)

Review.create(comment: "Never really liked the simpsons so I didnt get much of the game", rating: 3, user_id: 2, game_id: 6)

Review.create(comment: "Not good at fps games... but still enjoyed messing around with friends!", rating: 6, user_id: 2, game_id: 7)

Review.create(comment: "Not much for story intensive rpgs but non the less enjoyed my playthru", rating: 7, user_id: 2, game_id: 8)

Review.create(comment: "What eric said", rating: 7, user_id: 2, game_id: 9)


#Eric - user 3 reviews
Review.create(comment: "OK game, controlls were janky", rating: 4, user_id: 3, game_id: 1)

Review.create(comment: "Camera was hard to control and lost my way alot because of it", rating: 6, user_id: 3, game_id: 2)

Review.create(comment: "Cool being able to pick multiple characters for one kart", rating: 7, user_id: 3, game_id: 3)

Review.create(comment: "Loved using cheats to spawn in random stuff like tanks", rating: 9, user_id: 3, game_id: 4)

Review.create(comment: "Fun game but didnt hold up", rating: 6, user_id: 3, game_id: 5)

Review.create(comment: "Like gta but the simpsons", rating: 7, user_id: 3, game_id: 6)

Review.create(comment: "Not enough advanced movement like there is nowadays in my opnion plays a bit too slow", rating: 6, user_id: 3, game_id: 7)

Review.create(comment: "Kinda like AOT", rating: 6, user_id: 3, game_id: 9)

puts "Reviews Seeded!"