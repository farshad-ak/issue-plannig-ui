import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AssignmentList} from './assignment-list';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AssignmentService {
    constructor(private httpClient: HttpClient) {
    }

    public getAssignmentSummary(): Observable<string[]> {
        return this.httpClient.get<string[]>('http://localhost:8765/assignment/summary');
    }

    public getAssignmentList(): Observable<object> {
        return this.httpClient.get<object>('http://localhost:8765/assignments');
    }

    public makeAssignment(): Observable<object> {
        return this.httpClient.get<object>('http://localhost:8765/assignment');
    }
}
