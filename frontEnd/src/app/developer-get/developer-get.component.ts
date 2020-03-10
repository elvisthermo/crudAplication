import { Component, OnInit } from '@angular/core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Developer from '../Developer';
import { DeveloperService } from '../developer.service';


@Component({
  selector: 'app-developer-get',
  templateUrl: './developer-get.component.html',
  styleUrls: ['./developer-get.component.css']
})

export class DeveloperGetComponent implements OnInit {
  faTrash = faTrash;
  faEdit = faEdit;

  developers: Developer[];
  developer_id = 1;

  constructor(private developerService: DeveloperService) {

  }

  async trashDeveloprer(developer_id) {
    await this.developerService.deleteDeveloper(developer_id);

    this.developerService
    .getDevelopers()
    .subscribe((data: Developer[]) => {
      this.developers = data;
      this.ngOnInit();
    });

  }



  ngOnInit(): void {
    this.developerService
      .getDevelopers()
      .subscribe((data: Developer[]) => {
        this.developers = data;
      });

  }

}
