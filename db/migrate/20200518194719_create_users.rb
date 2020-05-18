class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :title
      t.string :city
      t.string :state
      t.string :zip
      t.string :email
      t.string :first_name
      t.string :last_name
      t.text :image
      t.timestamps
    end
  end
end
