class RemoveUserFromInterests < ActiveRecord::Migration[6.0]
  def change
    remove_reference :interests, :user, null: false, foreign_key: true
  end
end
