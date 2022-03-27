// import all models
const Post = require('./Post');
const User = require('./User');
const Comment = require('./Comment');

// create associations
// User.hasMany(Post, {
//   foreignKey: 'user_id'
// });

Post.belongsTo(User, {
  foreignKey: 'userId'
});

Comment.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'SET NULL'
});

// Comment.belongsTo(Post, {
//   foreignKey: 'post_id',
//   onDelete: 'SET NULL'
// });

// User.hasMany(Comment, {
//   foreignKey: 'user_id',
//   onDelete: 'SET NULL'
// });

Post.hasMany(Comment, {
  foreignKey: 'postId'
});

module.exports = { User, Post, Comment };
