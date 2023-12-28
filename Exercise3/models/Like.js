const { DataTypes, Model } = require("sequelize");
const dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
const User = require("./User");
const Post = require("./Post");

class Like extends Model {}

Like.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "id",
      },
    },
    postId: {
      type: DataTypes.INTEGER,
      references: {
        model: Post,
        key: "id",
      },
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "likes",
    timestamps: true,
    freezeTableName: true,
  }
);

User.belongsToMany(Post, { through: Like, foreignKey: "userId" });
Post.belongsToMany(User, { through: Like, foreignKey: "postId" });

module.exports = Like;

////NOT working

// // Define the Like model
// const Like = sequelizeInstance.define('Like', {
//   // Define attributes of the Like model
//   id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true,
//   },
// });

// // Define associations between User, Post, and Like models
// User.belongsToMany(Post, { through: Like });
// Post.belongsToMany(User, { through: Like });

// // Sync the model with the database
// sequelizeInstance.sync();

// // Export the Like model for use in other parts of your application
// module.exports = Like;
