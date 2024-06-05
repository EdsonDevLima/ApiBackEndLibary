import ConnDb from "../Config/ConnDb";
import { DataTypes } from "sequelize";

const Users = ConnDb.define("Users",{
  UserName:DataTypes.STRING,
  Email:DataTypes.STRING,
  PasswordHash:DataTypes.STRING
})


export default Users