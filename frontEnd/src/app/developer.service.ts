import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeveloperService {
  uri = 'http://localhost:8000';

  constructor(private http: HttpClient) {}

  /**
   * @description metod de adição de novo funcionarios via btn
   */
  addDeveloper(name, email, telefone, linkenid, cidade, estado, turno, node, html, css, angular, banco_de_dados) {
    const objDeveloprer = {
      name: name,
      email: email,
      telefone: telefone,
      linkenid: linkenid,
      cidade: cidade,
      estado: estado,
      turno: turno,
      node: node,
      html: html,
      css: css,
      angular: angular,
      banco_de_dados: banco_de_dados
    }

    console.log(objDeveloprer);
    this.http.post(`${this.uri}/developers`,objDeveloprer)
    .subscribe(res => console.log("Ok"))
  }

  //   getFuncionarios() {
  //       // ==> (GET - Url no Back-End): http://localhost:8000/api/funcionarios
  //       return this
  //         .http
  //         .get(`${this.uri}/get`);
  // }

}
