import app from './app.js'
import { sequelize } from './database/database.js'

async function main(){
    try{
    await sequelize.sync({force:true})
    console.log('Servidor conectado')
    app.listen(3000)
    console.log('Servidor escuchando',3000)
    } catch(error){
        console.error('No es posible conectarse al servidor',error)

    }


}
main()