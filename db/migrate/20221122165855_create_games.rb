class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.string :name
      t.integer :release_year
      t.string :platform
      t.string :description
      t.integer :rating

      t.timestamps
    end
  end
end
