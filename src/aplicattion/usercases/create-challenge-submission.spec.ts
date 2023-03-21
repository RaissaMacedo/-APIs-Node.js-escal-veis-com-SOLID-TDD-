import { Challenge } from "../../domain/entities/challenge";
import { Student } from "../../domain/entities/student";
import { InMemoryChallengeRepository } from "../../tests/in-memory-challenges-repository";
import { InMemoryStudentRepository } from "../../tests/in-memory-students-repository";
import { CreateChallengeSubmission } from "./create-challenge-submission";

describe('Create challenge submission use case', ()=>{
  it('should be able to create a new challenge submission', async()=>{
    const studentsRepository = new InMemoryStudentRepository();
    const challengesRepository = new InMemoryChallengeRepository();

    const student = Student.create({
      name: 'Raissa',
      email: 'raissamacedo7@gmail.com'
    })
    const challenge = Challenge.create({
      title: 'Challenge 01',
      instructionsUrl: 'https://example.com'
    })

    studentsRepository.items.push(student);
    challengesRepository.items.push(challenge)

    const sut = new CreateChallengeSubmission(
      studentsRepository,
      challengesRepository,
    )

    const response = await sut.execute({
      studentId: student.id,
      challengeId: challenge.id,
    })

    expect(response).toBeTruthy()
  })
})