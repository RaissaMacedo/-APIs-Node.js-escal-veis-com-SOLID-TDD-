import { Entity } from "../../core/domain/Entity";
type SubmissionProps = {
  challengeId: string; // desafio especifico
  studentId: string; // aluno especifico
  createAt?: Date; // e horario especifico

  
}
export class Submission extends Entity<SubmissionProps>{
  private constructor(props: SubmissionProps, id?: string){
    super(props, id);// metodo do entity
  }
  // se tiver que fazer validação, faz dentro do create
  static create(props: SubmissionProps, id?: string){  // metodo public, lugar do construct
    const submission = new Submission({
      ...props,
      createAt: props.createAt ?? new Date(),

    }, id);

    return submission;
  }

}