class CreateMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.string :name
      t.string :year_released
      t.integer :rating

      t.timestamps
    end
  end
end
