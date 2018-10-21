# == Schema Information
#
# Table name: routes
#
#  id         :bigint(8)        not null, primary key
#  creator_id :integer          not null
#  city       :string           not null
#  distance   :integer          not null
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  image_url  :text
#

require 'test_helper'

class RouteTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
