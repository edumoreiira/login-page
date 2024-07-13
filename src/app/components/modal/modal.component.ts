import { Component } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from "../button/button.component";
import { ButtonStatus } from '../../models/button.interface';
import { fadeInOut, parentAnimations, popUp } from '../../animations/transition-animations';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
  animations: [popUp, fadeInOut, parentAnimations]
})
export class ModalComponent {
  title = "Titulo"
  description = "Descricao"
  buttonName1 = "botao1"
  buttonName2 = "botao2"
  buttonStatus: ButtonStatus = "default";
  isModalVisible = false;

  constructor(private modalService: ModalService) {
    this.modalService.getModalData()
    .subscribe(data => {
      this.title = data.title;
      this.description = data.description;
      this.buttonName1 = data.buttonName1;
      this.buttonName2 = data.buttonName2;
      this.buttonStatus = data.buttonStatus ? data.buttonStatus : "default";
      this.isModalVisible = true;
    });
  }

  handleModalClose(isOk: boolean){
    this.isModalVisible = false;
    this.modalService.closeModal(isOk);
  }

}
