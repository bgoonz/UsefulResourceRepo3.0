# == Schema Information
#
# Table name: payment_notifications
#
#  id              :integer          not null, primary key
#  params          :text
#  payment_status  :string(255)      default("unprocessed")
#  transaction_id  :string(255)
#  contribution_id :integer
#  created_at      :datetime
#  updated_at      :datetime
#

require 'spec_helper'

describe PaymentNotification do
  pending "add some examples to (or delete) #{__FILE__}"
end
