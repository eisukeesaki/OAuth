let userDb = {
  id: 1,
  username: "asuka",
  password: "letasukain"
};

class UserService {
  getUserById(id) {
    const storedUser = id === 1 ? userDb : null;

    if (storedUser)
      return storedUser;
    else
      return null;
  }

  getUser(username, password) {
    const storedUser = username === "asuka" ? userDb : null;

    if (password === storedUser.password)
      return storedUser;
    else
      return null;
  }
}

module.exports = UserService;

