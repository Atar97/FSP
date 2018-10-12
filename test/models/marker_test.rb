# == Schema Information
#
# Table name: markers
#
#  id         :bigint(8)        not null, primary key
#  route_id   :integer          not null
#  lat        :float            not null
#  lng        :float            not null
#  sequence   :integer          not null
#  last       :boolean          default(FALSE)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class MarkerTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
