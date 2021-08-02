import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userInput: string = "";

  mock: string[] = ["First", "Second"]

  remove(value: number) {
    let temp: string[] = this.mock;
    temp.splice(value, 1)
    this.mock = temp;
  }

  addList() {
    if(this.userInput !== "") {
      this.mock.push(this.userInput)
      this.userInput = ""
    }
  }
}
