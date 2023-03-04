import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { issueListResult } from '../model/issue.model';
import { LoadingController } from '@ionic/angular';
import { StorageService } from 'src/app/shared/services/storage.service';
import { Permissions } from 'src/app/shared/constants/permissions';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.page.html',
  styleUrls: ['./issues.page.scss'],
})
export class IssuesPage implements OnInit {

  sub: Subscription[] = [];
  issueList!: issueListResult;
  userInfo: any;
  permissions = Permissions;

  constructor(
    private route: ActivatedRoute,
    private storageService: StorageService,
    private authService: AuthService
    ) { }

  ngOnInit() {
    this.getAllIissue();
    this.authService.userInfo.subscribe(res => {
      this.userInfo = res
    })
  }

  getAllIissue() {
    this.sub.push(
      this.route.data.subscribe((response: any) => {
        this.issueList = response.issue;
      })
    );
  }

  ionViewWillLeave() {
    this.sub.forEach(el => el.unsubscribe());
  }

  ngOnDestroy() {
    console.log('leaving component');
    this.userInfo = {};
  }

}
