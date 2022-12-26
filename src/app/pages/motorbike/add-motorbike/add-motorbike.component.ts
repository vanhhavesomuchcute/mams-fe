import { Motorbike } from './../../motorbike.model';
import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { ReactiveFormsModule, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-motorbike',
  templateUrl: './add-motorbike.component.html'
})
export class AddMotorbikeComponent implements OnInit {
  motorbike: Motorbike = {
    id: 0,
    name: '',
    description: '',
    image: '',
    importImvoice: 0,
    salePrice: 0,
    motorbikeTypeId: 0,
    brandId: 0,
    createTime: '',
    updateTime: ''
  };
  addMotorbikeForm: FormGroup;

  constructor(public modalRef: MdbModalRef<AddMotorbikeComponent>) {}

  ngOnInit() {
    this.addMotorbikeForm = new FormGroup({
      name : new FormControl('', [Validators.required]),
      description : new FormControl('', ),
      importPrice : new FormControl('', ),
      salePrice : new FormControl('', ),
      brand : new FormControl('', ),
      image : new FormControl('', )
    })
  }

  onSubmit() {
    console.log(this.addMotorbikeForm);

  }

}

