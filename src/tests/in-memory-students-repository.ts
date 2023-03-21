import { StudentRepository } from "../aplicattion/repositorioes/StudentsRepository";
import { Student } from "../domain/entities/student";

// banco de dados em memória

export class InMemoryStudentRepository implements StudentRepository{

   public items: Student[] = []
   async findById(id: string): Promise<Student | null>{
   const  student =  this.items.find(student => student.id === id)

   if(!student){
     return null
   }

   return student;

  }
}