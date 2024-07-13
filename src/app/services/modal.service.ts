import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Modal } from '../models/modal.interface';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modalSubject = new Subject<Modal>();
  private resultSubject = new Subject<boolean>();

  openModal(data: Modal): Observable<boolean> {
    this.modalSubject.next(data);
    return this.resultSubject.asObservable();
  }

  getModalData(): Observable<Modal>{
    return this.modalSubject.asObservable();
  }

  closeModal(result: boolean): void {
    this.resultSubject.next(result);
  }
}
