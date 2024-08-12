const sessionToUserMap = new Map();

function setUser(id, user) {
  sessionToUserMap.set(id, user);
}

function getUser(id, user) {
  return sessionToUserMap.get(id) || user;
}

module.exports = {
  setUser,
  getUser,
};
