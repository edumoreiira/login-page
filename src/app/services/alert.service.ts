import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Alert } from '../models/alert.interface';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private alertSource = new BehaviorSubject<Alert>({'title': '', 'description': '', 'color': ''});
  currentAlert = this.alertSource.asObservable();

  emitAlert(message: Alert) {
    if(message.title){
      setTimeout(() => {
        this.alertSource.next(message);
      }, 500);
    }
  }

  removeAlert(){
    this.alertSource.next({
      title: '',
      description: '',
      color: ''
    })
  }
}
