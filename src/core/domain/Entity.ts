// comportamentos padroes entre todas as entidades
import crypto from 'crypto'
export abstract class Entity<T>{
  protected _id: string;
  public props: T

  // acessar o id externamente
  get id(){
    return this._id;
  }
    constructor(props: T, id?: string){
      // essas entidades sao referencias p entidade
      this.props = props; 
      this._id  = id ?? crypto.randomUUID(); // se o id n for passado, vai ser gerado
    }
}