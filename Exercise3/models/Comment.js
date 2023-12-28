const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
const User = require("./User");
const Post = require("./Post");

class Comment extends Model {}
//Sequelize will create this table if it doesn't exist on startup
Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "id",
      },
    },
    //This has been problem.
    // postId: {
    //     type: DataTypes.INTEGER,
    //     references:{
    //       model:Post,
    //       key:'id'
    //     }
    //   },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "comments", //use lowercase plural format
    timestamps: true,
    freezeTableName: true,
  }
);
module.exports = Comment;
