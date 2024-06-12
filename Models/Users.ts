import ConnDb from "../Config/ConnDb";
import { DataTypes } from "sequelize";
import roles from "./Roles";

const Users = ConnDb.define("Users",{
  UserName:DataTypes.STRING,
  Email:DataTypes.STRING,
  PasswordHash:DataTypes.STRING
})

Users.hasOne(roles)
roles.belongsTo(Users)




export default Users