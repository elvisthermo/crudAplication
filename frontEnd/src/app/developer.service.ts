import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeveloperService {
  uri = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  /**
   * @description metod de adição de novo funcionarios via btn front end
   */
  addDeveloper(name, email, telefone, linkenid, cidade, estado, turno, node, html, css, angular, banco_de_dados) {
    const objDeveloprer = {
      name,
      email,
      telefone,
      linkenid,
      cidade,
      estado,
      turno,
      node,
      html,
      css,
      angular,
      banco_de_dados
    }

    console.log(objDeveloprer);
    this.http.post(`${this.uri}/developers`, objDeveloprer)
      .subscribe(res => console.log("Ok"))
  }

  /**
   * listar funcionarios front end
   */
  getDevelopers() {
    return this
      .http
      .get(`${this.uri}/developers`);
  }

  getDevelopersById(id) {
    return this
      .http
      .get(`${this.uri}/developers/${id}`);
  }

  updateDeveloper(_id,name, email, telefone, linkenid, cidade, estado, turno, node, html, css, angular, banco_de_dados) {
    const objDeveloprer = {
      _id,
      name,
      email,
      telefone,
      linkenid,
      cidade,
      estado,
      turno,
      node,
      html,
      css,
      angular,
      banco_de_dados
    }

    return this
      .http
      .put(`${this.uri}/developers/`,objDeveloprer).subscribe(res => {
        return this.getDevelopers();
       
      })
  }

  deleteDeveloper(id) {
    this.http
    .delete(`${this.uri}/developers/${id}`)
    .subscribe(res => {
      return this.getDevelopers();
     
    })



    
  }


}
