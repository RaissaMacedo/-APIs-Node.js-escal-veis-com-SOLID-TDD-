import { Challenge} from '../../domain/entities/challenge'
// contratos de abstração entre as camadas
export interface ChallengesRepository {
  findById(id: string): Promise<Challenge | null>;
}