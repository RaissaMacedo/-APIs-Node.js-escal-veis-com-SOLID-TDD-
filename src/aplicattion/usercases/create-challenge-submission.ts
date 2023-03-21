// caso de uso
import { Submission} from '../../domain/entities/submission'
import { ChallengesRepository } from '../repositorioes/ChallengesRepository';
import { StudentRepository } from '../repositorioes/StudentsRepository';
type CreateChallengeSubmissionRequest = { //parametros
  studentId: string;
  challengeId: string;

}

export class CreateChallengeSubmission{
  constructor(
    private studentsRepository: StudentRepository,
    private challengesRepository: ChallengesRepository
  ) {}
   // método = criação de uma submissão de um desafio
 async execute({ studentId, challengeId}: CreateChallengeSubmissionRequest){
   const student  =  await this.studentsRepository.findById(studentId)

   if(!student){
     throw new Error('Students does not exists.')
   }

   const challenge = await this.challengesRepository.findById(challengeId)

   if(!challenge){
     throw new Error('Challenge does not exists.')
   }
    const submission  =  Submission.create({
      studentId,
      challengeId,
    })

    return submission;
    


  }
}