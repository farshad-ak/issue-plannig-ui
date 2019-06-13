import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Developer} from './developer';

@Injectable({
    providedIn: 'root'
})
export class DeveloperService {

    constructor(private httpClient: HttpClient) {
    }

    public getDeveloperList(): Observable<Developer[]> {
        return this.httpClient.get<Developer[]>('http://localhost:8765/developers');

    }
}
