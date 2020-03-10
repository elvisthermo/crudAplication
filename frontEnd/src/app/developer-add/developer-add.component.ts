import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'
import {DeveloperService} from '../developer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-developer-add',
  templateUrl: './developer-add.component.html',
  styleUrls: ['./developer-add.component.css']
})

export class DeveloperAddComponent implements OnInit {
  addDeveloperForm: FormGroup; 
  faPlus = faPlus;

  constructor(private formBuilder: FormBuilder,private developerService:DeveloperService,private router: Router) {
    this.createForm();
   }

   createForm(){
     this.addDeveloperForm = this.formBuilder.group({
        name:['',Validators.required],
        email:['',Validators.required],
        telefone:['',Validators.required],
        linkenid:['',Validators.required],
        cidade:['',Validators.required],
        estado:['',Validators.required],
        turno:['',Validators.required],
        node:['',Validators.required],
        html:['',Validators.required],
        css:['',Validators.required],
        angular:['',Validators.required],
        banco_de_dados:['',Validators.required],
      
      });
   }

   /**
    * @description metodo responsavel em adicionar desenvolvedor btn
    * 
    */
   addDeveloper(name, email, telefone, linkenid, cidade, estado, turno, node, html, css, angular, banco_de_dados) {
     this.developerService.addDeveloper(name, email, telefone, linkenid, cidade, estado, turno, +node, +html, +css, +angular, +banco_de_dados)
      
     alert("Desenvolvedor cadastrado com sucesso!")
      this.router.navigate(['developer/']);
      
    }
    
  ngOnInit(): void {
  }

}
