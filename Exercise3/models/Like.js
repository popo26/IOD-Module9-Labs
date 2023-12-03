const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
const User = require("./User");
const Post = require("./Post");


class Like extends Model {}
//Sequelize will create this table if it doesn't exist on startup
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
      references:{
        model:User,
        key:'id'
      }
    },
    postId: {
        type: DataTypes.INTEGER,
        references:{
          model:Post,
          key:'id'
        }
      },
   
  },
  {
    sequelize: sequelizeInstance,
    modelName: "likes", //use lowercase plural format
    timestamps: true,
    freezeTableName: true,
  }
);
module.exports = Like;
