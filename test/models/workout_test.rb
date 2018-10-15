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
#

require 'test_helper'

class WorkoutTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
