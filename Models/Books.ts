import ConnDb from "../Config/ConnDb";
import {DataTypes} from "sequelize"
import Category from "./Category";


const Books = ConnDb.define("books",{
  Name:{type:DataTypes.STRING, allowNull:false },
  Image:{type:DataTypes.STRING, allowNull:false },
  Author:{type:DataTypes.STRING, allowNull:false },
  amount:{type:DataTypes.INTEGER, allowNull:false }

})


//relacionamentos
//configurar tabela para receber uma chave estrangeira
Category.hasOne(Books)
//configurar tabela estrangeira para ficar ligada tabela principal
Category.belongsTo(Category)

export default Books