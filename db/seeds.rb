# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Game.create(name: "", release_year: , platform: "", image: "", description: "")

puts "Seeding games..."

Game.create(name: "Super Mario Sunshine", release_year: 2002, platform: "Gamecube", image: "https://mario.wiki.gallery/images/thumb/5/51/Box_NA_Super_Mario_Sunshine.png/1200px-Box_NA_Super_Mario_Sunshine.png",description: "Super Mario Sunshine is a 2002 platform game developed and published by Nintendo for the GameCube. It is the second 3D game in the Super Mario series, following Super Mario 64.")

Game.create(name: "The Legend of Zelda: The Wind Waker", release_year: 2002, platform: "Gamecube", image: "https://m.media-amazon.com/images/I/51W8C95QDDL.jpg", description: "The Legend of Zelda: The Wind Waker is a 2002 action-adventure game developed and published by Nintendo for the GameCube. An installment in The Legend of Zelda series, it was released in Japan in December 2002, in North America in March 2003, and in Europe in May 2003.")


Game.create(name: "Mario Kart: Double Dash!!", release_year: 2003, platform: "Gamecube", image: "https://images.nintendolife.com/games/gamecube/mario_kart_double_dash/cover_large.jpg", description: "Mario Kart: Double Dash is a 2003 kart racing video game developed and published by Nintendo for the GameCube. The game is the fourth main entry in the Mario Kart series and the third for home consoles after Mario Kart 64.")

Game.create(name: "Grand Theft Auto III", release_year: 2001, platform: "Multiple", image: "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/GTA3boxcover.jpg/220px-GTA3boxcover.jpg", description: "Grand Theft Auto III is a 2001 action-adventure game developed by DMA Design and published by Rockstar Games. It is the third main entry in the Grand Theft Auto series, following 1999's Grand Theft Auto 2, and the fifth instalment overall.")

Game.create(name: "God of War", release_year: 2005, platform: "Playstation 2", image: "https://m.media-amazon.com/images/I/91VKfyGGkYL.jpg", description: "God of War is an action-adventure hack and slash video game developed by Santa Monica Studio and published by Sony Computer Entertainment. First released on March 22, 2005, for the PlayStation 2 console, it is the first installment in the series of the same name and the third chronologically.")

Game.create(name: "The Simpsons: Hit & Run", release_year: 2003, platform: "Multiple", image: "https://upload.wikimedia.org/wikipedia/en/5/5f/The_Simpsons_Hit_and_Run_cover.png", description: "The Simpsons: Hit & Run is a 2003 action-adventure game developed by Radical Entertainment and published by Vivendi Universal Games. It is based on the American animated sitcom The Simpsons, and is the twenty-second installment in the Simpsons series of video games.")

Game.create(name: "Halo 2", release_year: 2004, platform: "Xbox", image: "https://halo.wiki.gallery/images/thumb/f/ff/Halo2-Cover-Large.jpg/300px-Halo2-Cover-Large.jpg", description: "Halo 2 is a 2004 first-person shooter game developed by Bungie and published by Microsoft Game Studios for the Xbox console. Halo 2 is the second installment in the Halo franchise and the sequel to 2001's critically acclaimed Halo: Combat Evolved.")

Game.create(name: "Fable", release_year: 2004, platform: "Xbox", image: "https://preview.redd.it/nrwhtr50v0t51.jpg?width=256&format=pjpg&auto=webp&s=894462d80ac59ad63eb4d78c2afd1643da3ea949", description: "Fable is an action role-playing video game, the first in the Fable series. It was developed for the Xbox, Microsoft Windows, and Mac OS X platforms by Big Blue Box Studios, a satellite developer of Lionhead Studios, and was published by Microsoft Studios. The game shipped for the Xbox in September 2004.")

Game.create(name: "Shadow of the Colossus", release_year: 2005, platform: "Playstation 2", image: "https://www.mobygames.com/images/covers/l/52946-shadow-of-the-colossus-playstation-2-front-cover.jpg", description: "Shadow of the Colossus is a 2005 action-adventure game developed by Japan Studio and Team Ico, and published by Sony Computer Entertainment for the PlayStation 2.")

puts "Games Seeded!"