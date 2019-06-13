import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AdminLayoutRoutes} from './admin-layout.routing';
import {DashboardComponent} from '../../dashboard/dashboard.component';
import {UserProfileComponent} from '../../user-profile/user-profile.component';
import {TableListComponent} from '../../table-list/table-list.component';
import {TypographyComponent} from '../../typography/typography.component';
import {IconsComponent} from '../../icons/icons.component';
import {MapsComponent} from '../../maps/maps.component';
import {NotificationsComponent} from '../../notifications/notifications.component';
import {UpgradeComponent} from '../../upgrade/upgrade.component';

import {
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSelectModule
} from '@angular/material';
import {AssignmentComponent} from '../../issues/assignment/assignment.component';
import {DeveloperComponent} from '../../issues/developer/developer.component';
import {BugComponent} from '../../issues/bug/bug.component';
import {StoryComponent} from '../../issues/story/story.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes),
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        HttpClientModule,
    ],
    declarations: [
        DashboardComponent,
        UserProfileComponent,
        TableListComponent,
        TypographyComponent,
        IconsComponent,
        MapsComponent,
        NotificationsComponent,
        UpgradeComponent,
        AssignmentComponent,
        DeveloperComponent,
        BugComponent,
        StoryComponent,
    ]
})

export class AdminLayoutModule {
}
