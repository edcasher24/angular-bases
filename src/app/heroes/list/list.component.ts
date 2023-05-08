import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public heroeNames: string[] = ['Spiderman','Hulk','Superman','Thor'];
  public nameDelete?: string;

  constructor() { }

  ngOnInit(): void {
  }

  borrarUltimo():void  {
    this.nameDelete= this.heroeNames.pop();
    console.log(this.nameDelete);
  }



}
