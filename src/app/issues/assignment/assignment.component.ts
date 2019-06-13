import {Component, OnInit} from '@angular/core';
import {AssignmentService} from '../service/assignment/assignment.service';

@Component({
    selector: 'app-assignment',
    templateUrl: './assignment.component.html',
    styleUrls: ['./assignment.component.scss']
})
export class AssignmentComponent implements OnInit {

    constructor(private assignmentService: AssignmentService) {
    }

    ngOnInit() {
        this.assignmentService.getAssignmentSummary().subscribe((res) => {
            console.log(res);
        });
    }

}
