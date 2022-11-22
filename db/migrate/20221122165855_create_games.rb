class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.string :name
      t.string :release_date
      t.string :platform
      t.string :description
      t.integer :rating

      t.timestamps
    end
  end
end
