import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Student }           from './student';

@Injectable()
export class StudentSearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<Student[]> {
    return this.http
               .get(`api/students/?name=${term}`)
               .map(response => response.json().data as Student[]);
  }
}