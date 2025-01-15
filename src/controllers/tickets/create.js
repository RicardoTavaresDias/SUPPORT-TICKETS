//Importando a biblioteca do node o randomUUID indetificado unico para ID
import { randomUUID } from "node:crypto"

export function create({ request, response, database }){
  // Destruturação das informações recebidas
  const { equipment, description, user_name } = request.body 

  const ticket = {
    id: randomUUID(), //indentificador id
    //informação padrão pedido do usuario
    equipment,
    description,
    user_name,
    //opções importante no projeto para rastreio
    status: "open",
    created_at: new Date(),
    update_at: new Date(),
  }

    database.insert("tickets", ticket)
  
  return response.writeHead(201).end(JSON.stringify(ticket))
}