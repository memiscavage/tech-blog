const User = require('./user');
const Blog = require('./blog');
const Comment = require('./comment');

// Creates a relationship between User and Project model, with the User having a "has many" relationship with Project model.
User.hasMany(Blog, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  
  // Creates a relationship between User and Project model, with a "belongs to" relationship of the Project to the User.
  Blog.belongsTo(User, {
    foreignKey: 'user_id'
  });

  Blog.hasMany(Comment, {
    foreignKey: 'blog_id',
    onDelete: 'CASCADE'
  });

  Comment.belongsTo(Blog, {
    foreignKey: 'blog_id',
  })

  User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });

  Comment.belongsTo(User, {
    foreignKey: 'user_id'
  })
  
  module.exports = { User, Blog, Comment };
  