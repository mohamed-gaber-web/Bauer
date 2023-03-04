import { Component, OnInit } from '@angular/core';
import { getImageBreakdown } from 'src/app/api.constatnt';

import { DataService } from './../../shared/services/data.service';

@Component({
  selector: 'app-select-breakdown',
  templateUrl: './select-breakdown.page.html',
  styleUrls: ['./select-breakdown.page.scss'],
})
export class SelectBreakdownPage implements OnInit {

  breakdownList: any = [
    {
      id: '1',
      image: 'https://www.provisioneronline.com/ext/resources/May-2013/0513np_spareparts.jpg?1367957219'
    },
    {
      id: '2',
      image: 'https://www.spare-parts-trade.com/img/home/Diesel_engine_spares_RAC-Germany_xs.jpg'
    },
    {
      id: '3',
      image: 'https://docs-demo.ionic.io/assets/madison.jpg'
    },
    {
      id: '4',
      image: 'https://www.idolz.com/wp-content/uploads/2021/04/vehicle-spare-parts-1-1.jpg'
    }
  ];
  issueSelect: any = []

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getBreakdownList();
  }

  getBreakdownList() {
    this.dataService.getList(`${getImageBreakdown}?Page=1&Size=20&moduleName=Equipment`)
    .subscribe(res => {
      console.log(res)
    })
  }

  selectImage(event: any, attachmentId: string) {
    console.log(event)
  if (event.detail.checked) {
      this.issueSelect.push(attachmentId);
    } else {
      this.issueSelect.splice(this.issueSelect.indexOf(event.target.value), 1);

    }
  console.log(this.issueSelect)
  }

}
