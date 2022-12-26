import { AddMotorbikeComponent } from './add-motorbike/add-motorbike.component';
import { Motorbike } from './../motorbike.model';
import {
  Component,
  OnInit,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ModalConfig, ModalComponent } from '../../_metronic/partials';
import { MAMSService } from '../mams.service';
import { Observable, Subject } from 'rxjs';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-motorbike',
  templateUrl: './motorbike.component.html',
  styleUrls: ['./motorbike.component.scss'],
})
export class MotorbikeComponent implements OnInit {
  // motorbikes: Motorbike[] = [];
  motorbikes$ = new Observable<Motorbike[]>();
  modalRef: MdbModalRef<AddMotorbikeComponent> | null = null;

  constructor(
    private motorbikeService: MAMSService,
    private cdr: ChangeDetectorRef,
    private modalService: MdbModalService
  ) {}

  ngOnInit(): void {
    this.motorbikes$ = this.motorbikeService.getAll();
  }

  openModal() {
    this.modalRef = this.modalService.open(AddMotorbikeComponent);
  }

}
