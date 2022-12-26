import { Motorbike } from './../../motorbike.model';
import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { ReactiveFormsModule, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-motorbike',
  templateUrl: './add-motorbike.component.html'
})
export class AddMotorbikeComponent implements OnInit {
  addMotorbikeForm: FormGroup;
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

  constructor(public modalRef: MdbModalRef<AddMotorbikeComponent>) {}

  ngOnInit() {
    this.addMotorbikeForm = new FormGroup({
      name : new FormControl('', [Validators.required]),
      description : new FormControl('', ),
      importPrice : new FormControl('', [Validators.required]),
      salePrice : new FormControl('', [Validators.required]),
      brand : new FormControl('', [Validators.required]),
      image : new FormControl('', )
    })
  }

  onSubmit() {
    console.log(this.addMotorbikeForm);

  }

}

