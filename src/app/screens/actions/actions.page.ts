import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Subscription, switchMap } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { createActionsByUser, getActionsByUser } from 'src/app/api.constatnt';
import { DataService } from 'src/app/shared/services/data.service';
import { actionListResult } from './model/action.model';
import { LoadingController } from '@ionic/angular';
import { ToasterServive } from 'src/app/shared/services/toaster.service';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.page.html',
  styleUrls: ['./actions.page.scss'],
})
export class ActionsPage implements OnInit {

actionDetails!: actionListResult;
  sub: Subscription[] = [];
  actionIdSelect!: string;
  isModalOpen = false;
  AddActionForm!: FormGroup;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private loadingCtrl: LoadingController,
    private fb: FormBuilder,
    private toastService: ToasterServive
    ) { }

  ngOnInit() {
    this.getActionDetails();

    this.AddActionForm = this.fb.group({
      description: ['']
    })
  }

  async getActionDetails() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
    });
    loading.present();

    this.route.paramMap.pipe(
        switchMap((params: ParamMap) => {
          this.actionIdSelect = params.get('issueId') || '';
          if(this.actionIdSelect) {
            return this.dataService.getItemById(`${getActionsByUser}`, this.actionIdSelect )
          } else  {
            return '';
          }
        })
      )

      .subscribe((res: any) => {
        console.log(res)
        loading.dismiss();
        this.actionDetails = res;
      })
  }

  addNewAction() {
    this.dataService.post(`${createActionsByUser}`, {
      description: this.AddActionForm.value.description,
      issueId: this.actionIdSelect
    }).subscribe((response: any) => {
      if(response === true) {
        this.toastService.success('top', 'Action add successfuly');
        this.getActionDetails();
        this.isModalOpen = false;
        this.AddActionForm.reset();
      }
      console.log(response);
    }, err => {
      console.log(err)
      this.toastService.error('top', err.error)
    })
  }

  setOpen() {
    this.isModalOpen = true;
  }

  ionViewWillLeave() {
    this.sub.forEach(el => el.unsubscribe())
  }

}
