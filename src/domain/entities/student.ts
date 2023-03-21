import { Entity } from "../../core/domain/Entity";
type StudentProps = {
  name: string;
  email: string;

  
}
export class Correction extends Entity<StudentProps>{
  private constructor(props: StudentProps, id?: string){
    super(props, id);// metodo do entity
  }
  // se tiver que fazer validação, faz dentro do create
  static create(props: StudentProps, id?: string){  // metodo public, lugar do construct
    const correction = new Correction(props);

    return correction;
  }

}