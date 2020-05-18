class CreateMembers < ActiveRecord::Migration[6.0]
  def change
    create_table :members do |t|
      t.references :users, null: false, foreign_key: true
      t.references :groups, null: false, foreign_key: true
      t.boolean :is_admin, default: false
      t.timestamps
    end
  end
end
