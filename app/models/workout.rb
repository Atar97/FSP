# == Schema Information
#
# Table name: workouts
#
#  id         :bigint(8)        not null, primary key
#  title      :string           not null
#  date       :date             not null
#  start_time :time
#  body       :text
#  route_id   :integer
#  distance   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  duration   :integer
#  user_id    :integer
#

class Workout < ApplicationRecord
  validates :title, :date, presence: :true

  belongs_to :route,
  optional: true

  belongs_to :user

end
