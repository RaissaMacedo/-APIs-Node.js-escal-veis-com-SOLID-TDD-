import { Entity } from "../../core/domain/Entity";
type CorrectionProps = {
  grade: number;
  submissionId: string;
  createAt: Date;
}
export class Correction extends Entity<CorrectionProps>{
  private constructor(props: CorrectionProps, id?: string){
    super(props, id);// metodo do entity
  }
  // se tiver que fazer validação, faz dentro do create
  static create(props: CorrectionProps, id?: string){  // metodo public, lugar do construct
    const correction = new Correction(props);

    return correction;
  }

}