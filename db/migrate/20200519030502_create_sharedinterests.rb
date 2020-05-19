class CreateSharedinterests < ActiveRecord::Migration[6.0]
  def change
    create_table :sharedinterests do |t|
      t.references :user, null: false, foreign_key: true
      t.references :interest, null: false, foreign_key: true

      t.timestamps
    end
  end
end
