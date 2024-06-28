import { DataTypes } from "sequelize"
import ConnDb from "../Config/ConnDb"

const Publisher = ConnDb.define("publisher",{
    Name:DataTypes.STRING,
    Cnpj:DataTypes.STRING
})

export default Publisher