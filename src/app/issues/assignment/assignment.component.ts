import {Component, OnInit} from '@angular/core';
import {AssignmentService} from '../service/assignment/assignment.service';
import {AssignmentList} from '../service/assignment/assignment-list';
import {DeveloperService} from '../service/developer/developer.service';
import {Developer} from '../service/developer/developer';

@Component({
    selector: 'app-assignment',
    templateUrl: './assignment.component.html',
    styleUrls: ['./assignment.component.scss']
})
export class AssignmentComponent implements OnInit {
    data: string[];
    isLoadingResults = true;

    displayedColumns: string[] = ['story-id',
        'title',
        'creationDate',
        'developerName',
        'point'];

    assignment_list: {};

    developerList: Developer[];

    constructor(private assignmentService: AssignmentService, private developerService: DeveloperService) {
    }

    ngOnInit() {
        this.assignmentService.getAssignmentSummary().subscribe((res) => {
            this.data = res
            this.isLoadingResults = false;
        });

        this.assignmentService.getAssignmentList().subscribe(res => {
            this.assignment_list = res;
            this.developerService.getDeveloperList().subscribe(res2 => {
                this.developerList = res2;
                console.table(this.developerList);
            });

        });
    }

    public getDeveloperName(id: any): string {
        let developert: any;
        developert = this.developerList.filter(developer =>
            developer.id === id
        );


        return developert.name;


    }

}
