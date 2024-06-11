import { DataTypes } from "sequelize";
import ConnDb from "../Config/ConnDb";

const Category = ConnDb.define("category",{Name:DataTypes.STRING})

export default Category
