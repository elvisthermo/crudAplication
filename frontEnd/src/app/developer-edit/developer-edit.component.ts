import { Component, OnInit } from '@angular/core';
import {DeveloperService} from '../developer.service'
import Developer from '../Developer';
import { ActivatedRoute } from '@angular/router';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-developer-edit',
  templateUrl: './developer-edit.component.html',
  styleUrls: ['./developer-edit.component.css']
})
export class DeveloperEditComponent implements OnInit {
  id: number;
  private sub: any;
  developers:Developer;
  addDeveloperForm: FormGroup; 
  faPlus = faPlus;

  constructor(private developerService:DeveloperService,private route: ActivatedRoute,private formBuilder: FormBuilder,private router: Router) {
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
  addDeveloper(_id,name, email, telefone, linkenid, cidade, estado, turno, node, html, css, angular,banco_de_dados) {
    this.developerService.updateDeveloper(_id,name, email, telefone, linkenid, cidade, estado, turno, +node, +html, +css, +angular, +banco_de_dados)
     
    alert("Desenvolvedor atualizado com sucesso!")
     this.router.navigate(['developer/']);
     
   }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(params['id']);      
   });

   this.developerService
   .getDevelopersById(this.id)
   .subscribe((data: Developer) => {
     this.developers = data;
     console.log(this.developers);
   });



  }

}
