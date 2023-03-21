import { Entity } from "../../core/domain/Entity";
type ChallengeProps = {
  instructionsUrl: string;
  title: string;
  
}
export class Correction extends Entity<ChallengeProps>{
  private constructor(props: ChallengeProps, id?: string){
    super(props, id);// metodo do entity
  }
  // se tiver que fazer validação, faz dentro do create
  // static pra ser chamado sem instanciar
  static create(props: ChallengeProps, id?: string){  // metodo public, lugar do construct
    const correction = new Correction(props);

    return correction;
  }

}