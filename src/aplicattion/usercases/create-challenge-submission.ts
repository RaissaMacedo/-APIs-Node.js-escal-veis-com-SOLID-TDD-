// caso de uso
import { Submission} from '../../domain/entities/submission'
type CreateChallengeSubmissionRequest = { //parametros
  studentId: string;
  challengeId: string;

}

export class CreateChallengeSubmission{
   // método = criação de uma submissão de um desafio
  execute({ studentId, challengeId}: CreateChallengeSubmissionRequest){
    const submission  =  Submission.create({
      studentId,
      challengeId,
    })

    return submission;
    


  }
}