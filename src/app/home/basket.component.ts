import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  droppedPhones: Array<any>;

  constructor(private toastr: ToastrService) {}

  ngOnInit() {
    this.droppedPhones = [null, null, null];
    this.loadLocalStorage();
  }

  phoneDropped(event: any, index: number) {
    const droppedPhone = event.dragData;
    // if already in the list, show error
    for (let i = 0; i < 3; i++) {
      let phone = this.droppedPhones[i];
      if (!phone) {
        continue;
      }
      if (phone.id === droppedPhone.id) {
        if (index !== i) {
          this.toastr.warning(droppedPhone.brand + ' ' + droppedPhone.model + ' already exists!');
        }
        return;
      }
    }
    this.droppedPhones[index] = event.dragData;
    this.saveLocalStorage();
    this.toastr.info('Added ' + this.droppedPhones[index].brand + ' ' + this.droppedPhones[index].model);
  }

  disableCompareButton(): boolean {
    return this.droppedPhones.filter(p => !!p).length < 2;
  }

  removePhone(index: number) {
    this.droppedPhones[index] = null;
    this.saveLocalStorage();
  }

  loadLocalStorage() {
    const data = localStorage.getItem('basket');
    if (data && data.length) {
      this.droppedPhones = JSON.parse(data);
    }
  }

  saveLocalStorage() {
    localStorage.setItem('basket', JSON.stringify(this.droppedPhones));
  }

  compare() {}
}
