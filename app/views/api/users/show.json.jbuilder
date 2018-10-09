json.set! @user.id do
  json.extract! @user, :id, :email, :fname,
    :lname, :DOB, :gender, :city, :state
end
