import { Component, OnInit } from '@angular/core';
import Developer from '../Developer';
import { DeveloperService } from '../developer.service'

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.css']
})

export class GraphicComponent implements OnInit {

  developers: Developer[];
  labels = [];
  data_html = [];
  data_css = [];
  data_node = [];
  data_angular = [];
  data_banco_de_dados = [];

  constructor(private developerService: DeveloperService) {
    this.developerService
      .getDevelopers()
      .subscribe((data: Developer[]) => {
        this.developers = data;
        this.ngOnInit();
      });

  }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: [{
          ticks: {
              beginAtZero: true
          }
      }]
  }

  };

  public barChartLabels = this.labels;
  public barChartType = 'bar';
  public barChartLegend = true; public barChartData = [  
    { data: this.data_node, label: 'Node', backgroundColor: "#589352", hoverBackgroundColor: "#6A9266",  ticks:{min: 0} },
    { data: this.data_angular, label: 'Angular', backgroundColor: "#d60030", hoverBackgroundColor: "#D13759",ticks:{min: 0} },
    { data: this.data_html, label: 'HTML', backgroundColor: "#dd4b25", hoverBackgroundColor: "#DB5A38",ticks:{min: 0} },
    { data: this.data_css, label: 'CSS', backgroundColor: "#289ed8", hoverBackgroundColor: "#64B1D8",ticks:{min: 0} },
    { data: this.data_banco_de_dados, label: 'Banco de dados' },
    
  ];

  ngOnInit(): void {
    this.developerService
      .getDevelopers()
      .subscribe((data: Developer[]) => {
        this.developers = data;
      });
    console.log(this.developers);

    this.developers.map((d, i) => {
      this.labels.push(d.name);
      this.data_html.push(d.html);
      this.data_css.push(d.css);
      this.data_node.push(d.node);
      this.data_angular.push(d.angular);
      this.data_banco_de_dados.push(d.banco_de_dados);

    });


  }

}
