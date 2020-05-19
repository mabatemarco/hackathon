# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_05_19_030502) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "groups", force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.text "image"
    t.boolean "private", default: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "interests", force: :cascade do |t|
    t.string "interest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "members", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "group_id", null: false
    t.boolean "is_admin", default: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["group_id"], name: "index_members_on_group_id"
    t.index ["user_id"], name: "index_members_on_user_id"
  end

  create_table "sharedinterests", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "interest_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["interest_id"], name: "index_sharedinterests_on_interest_id"
    t.index ["user_id"], name: "index_sharedinterests_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "title"
    t.string "city"
    t.string "state"
    t.string "zip"
    t.string "email"
    t.string "first_name"
    t.string "last_name"
    t.text "image"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "members", "groups"
  add_foreign_key "members", "users"
  add_foreign_key "sharedinterests", "interests"
  add_foreign_key "sharedinterests", "users"
end
