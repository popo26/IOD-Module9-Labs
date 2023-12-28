let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

const User = require("./User")
const Post = require("./Post")
const Like = require("./Like")



const User_Post  = sequelizeInstance.define("user_post", {}, { timestamps: false });
// Define associations
User.belongsToMany(Post, { through: Like });
Post.belongsToMany(User, { through: Like });

// // Option - associate the User and Post models with the Like model directly
// Like.belongsTo(User);
// Like.belongsTo(Post);

module.exports = User_Post;