import { Student} from '../../domain/entities/student'
// contratos de abstração entre as camadas
export interface StudentRepository {
  findById(id: string): Promise<Student | null>;
}