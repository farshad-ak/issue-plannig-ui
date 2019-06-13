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

        this.getAssignmentList();

    }

    public createAssignment() {
        this.assignmentService.makeAssignment().subscribe(res => {
            console.log(res);
            console.log('ok')
        })
    }

    public getAssignmentList() {
        this.assignmentService.getAssignmentList().subscribe(res => {
            this.assignment_list = res;
            this.developerService.getDeveloperList().subscribe(res2 => {
                this.addDeveloperNames(res, res2);
            });

        });
    }

    addDeveloperNames(assignments, developers): any {
        let assignmentsKeys = Object.keys(assignments);
        for (let assignmentKey of assignmentsKeys) {
            let assignmentValues = assignments[assignmentKey]; // Array
            assignments[assignmentKey] = this.namingBaziArray(assignmentValues, developers);
        }
        return assignments;
    }

    namingBaziArray(assignmentValues, developers): any[] {
        let a = [];
        for (let assignmentValue of assignmentValues) {
            assignmentValue.developerName = this.getDeveloperName(assignmentValue.developerId, developers);
            a.push(assignmentValue);
        }
        return a;
    }

    getDeveloperName(developerId, dev): string {
        let newDeveloperArray = dev.filter((d) => {
            return developerId == d.id
        });
        return (newDeveloperArray.length > 0) ? newDeveloperArray[0].name : null;
    }

}
