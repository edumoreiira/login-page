import { Component, EventEmitter, input, Output } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  title = "Titulo"
  description = "Descricao"
  buttonName1 = "botao1"
  buttonName2 = "botao2"
  isModalVisible = false;

  constructor(private modalService: ModalService) {
    this.modalService.getModalData().subscribe(data => {
      this.title = data.title;
      this.description = data.description;
      this.buttonName1 = data.buttonName1;
      this.buttonName2 = data.buttonName2;
      this.isModalVisible = true;
    });
  }

  handleModalClose(isOk: boolean){
    this.isModalVisible = false;
    this.modalService.closeModal(isOk);
  }

}
