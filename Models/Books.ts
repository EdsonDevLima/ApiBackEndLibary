import ConnDb from "../Config/ConnDb";
import {DataTypes} from "sequelize"


const Books = ConnDb.define("books",{
  Name:{type:DataTypes.STRING, allowNull:false },
  Image:{type:DataTypes.STRING, allowNull:false },
  Author:{type:DataTypes.STRING, allowNull:false },
  amount:{type:DataTypes.INTEGER, allowNull:false }

})


export default Books