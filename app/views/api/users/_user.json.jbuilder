if user
  json.extract! user, :id, :email, :fname,
    :lname, :DOB, :gender, :country
end
