import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const students = [
      { id: 0,  name: 'Mr.Sai'},
      { id: 11, name: 'Mr.Kiran' },
      { id: 12, name: 'Ms.Dharani' },
      { id: 13, name: 'Mr.Suresh' },
      { id: 14, name: 'Mr.Kushal' },
      { id: 15, name: 'Ms.Kumari' },
      { id: 16, name: 'Mr.Murthy' },
      { id: 17, name: 'Mr.shiva' },
      { id: 18, name: 'Dr Anudeep' },
      { id: 19, name: 'Mr.Karthik' },
      { id: 20, name: 'Mr.Ramesh' }
    ];
    return {students};
  }
}