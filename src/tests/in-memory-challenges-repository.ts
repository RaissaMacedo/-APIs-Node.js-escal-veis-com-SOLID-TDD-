import { ChallengesRepository } from "../aplicattion/repositorioes/ChallengesRepository";
import { Challenge } from "../domain/entities/challenge";

// banco de dados em memória

export class InMemoryChallengeRepository implements ChallengesRepository{

   public items: Challenge[] = []
   async findById(id: string): Promise<Challenge | null>{
   const  challenge =  this.items.find(challenge => challenge.id === id)

   if(!challenge){
     return null
   }

   return challenge;

  }
}