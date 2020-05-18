class CreateGroups < ActiveRecord::Migration[6.0]
  def change
    create_table :groups do |t|
      t.string :title
      t.text :description
      t.text :image
      t.boolean :private, default: false
      t.timestamps
    end
  end
end
