const { notFound, internalServer } = require('./error');
const add = require('./addUser');
const login = require('./login');
const getPost = require('./getPost');
const addPost = require('./addPosts');
const logout = require('./logout');
const profile = require('./getProfile');

module.exports = {
  notFound, internalServer, add, login, getPost, addPost, logout, profile,
};
