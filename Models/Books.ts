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
Books.belongsTo(Category,{foreignKey:{name:"CategoryId",allowNull:false}})
//configurar tabela estrangeira para ficar ligada tabela principal
//uma categoria para muitos livros
Category.hasMany(Books,{foreignKey:"CategoryId"})

export default Books