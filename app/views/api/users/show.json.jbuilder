json.users do
  json.set! @user.id do
    json.partial! 'api/users/user', user: @user
  end
end

json.session do
  json.id @user.id
end
# {users: 1: {userobject} session:{id: 1}}
