import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { issueListResult } from '../model/issue.model';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.page.html',
  styleUrls: ['./issues.page.scss'],
})
export class IssuesPage implements OnInit {

  sub: Subscription[] = [];
  issueList!: issueListResult;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.getAllIissue();
  }

  getAllIissue() {
    this.sub.push(
      this.route.data.subscribe((response: any) => {
        this.issueList = response.issue;
      })
    );
  }

  ionViewWillLeave() {
    this.sub.forEach(el => el.unsubscribe())
  }

}
