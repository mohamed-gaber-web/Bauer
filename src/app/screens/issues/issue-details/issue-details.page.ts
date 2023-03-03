import { Subscription, switchMap, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap  } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { DataService } from './../../../shared/services/data.service';
import { getIssueDetails } from 'src/app/api.constatnt';
import { issueDetails } from '../model/issueDetails.model';

@Component({
  selector: 'app-issue-details',
  templateUrl: './issue-details.page.html',
  styleUrls: ['./issue-details.page.scss'],
})
export class IssueDetailsPage implements OnInit {

  issueDetails!: issueDetails;
  sub: Subscription[] = [];
  issueIdSelect!: string;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.getIssueDetails();

  }

  async getIssueDetails() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
    });
    loading.present();

    this.route.paramMap.pipe(
        switchMap((params: ParamMap) => {
          this.issueIdSelect = params.get('issueId') || '';
          if(this.issueIdSelect) {
            return this.dataService.getItemById(`${getIssueDetails}`, this.issueIdSelect )
          } else  {
            return '';
          }
        })
      )

      .subscribe(res => {
        console.log(res)
        loading.dismiss();
        this.issueDetails = res;
      })
  }

  ionViewWillLeave() {
    this.sub.forEach(el => el.unsubscribe())
  }

}
