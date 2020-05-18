class CreateInterests < ActiveRecord::Migration[6.0]
  def change
    create_table :interests do |t|
      t.string :interest
      t.references :users, null: false, foreign_key: true
      t.timestamps
    end
  end
end
