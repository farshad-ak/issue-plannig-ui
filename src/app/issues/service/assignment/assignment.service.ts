import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AssignmentSummary} from './assignment-summary';

@Injectable({
    providedIn: 'root'
})
export class AssignmentService {

    constructor(private httpClient: HttpClient) {
    }

    public getAssignmentSummary() {
        return this.httpClient.get<AssignmentSummary>('http://localhost:8765/assignment/summary');
    }
}
