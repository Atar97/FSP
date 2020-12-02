# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_12_01_224322) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bracket_matchups", force: :cascade do |t|
    t.bigint "bracket_id"
    t.bigint "matchup_id"
    t.string "choice"
    t.boolean "correct"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["bracket_id"], name: "index_bracket_matchups_on_bracket_id"
    t.index ["matchup_id"], name: "index_bracket_matchups_on_matchup_id"
  end

  create_table "brackets", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "choices_matchups", id: false, force: :cascade do |t|
    t.bigint "choice_id", null: false
    t.bigint "matchup_id", null: false
  end

  create_table "markers", force: :cascade do |t|
    t.integer "route_id", null: false
    t.float "lat", null: false
    t.float "lng", null: false
    t.integer "sequence", null: false
    t.boolean "last", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["route_id"], name: "index_markers_on_route_id"
  end

  create_table "matchups", force: :cascade do |t|
    t.integer "round"
    t.string "choices"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "routes", force: :cascade do |t|
    t.integer "creator_id", null: false
    t.string "city", null: false
    t.integer "distance", null: false
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "image_url"
    t.index ["city"], name: "index_routes_on_city"
    t.index ["creator_id"], name: "index_routes_on_creator_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "fname", null: false
    t.string "lname", null: false
    t.date "DOB", null: false
    t.string "gender"
    t.string "session_token", null: false
    t.string "password_digest", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "country"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token"
  end

  create_table "workouts", force: :cascade do |t|
    t.string "title", null: false
    t.date "date", null: false
    t.time "start_time"
    t.text "body"
    t.integer "route_id"
    t.integer "distance"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "duration"
    t.integer "user_id"
    t.index ["route_id"], name: "index_workouts_on_route_id"
    t.index ["user_id"], name: "index_workouts_on_user_id"
  end

end
