import {User} from "./User";

export class ConseilUser {
  id:string
  pourCentageQVTBAD:number
  pourCentageQVTGOOD:number
  pourCentageQVTEX:number
  remarqueQVT:string
  remarquePub:string
  remarqueJaime:string
  remarqueComment:string
  user:User
}
