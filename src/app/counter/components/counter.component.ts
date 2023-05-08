import { Component } from "@angular/core";

@Component(
  {
    selector: 'app-counter',
    template: `
        <h2> Counter: {{ counter }} </h2>
        <button class="btn btn-primary"(click)="incrementaPor(+1)">+1</button>
        <button class="btn btn-danger"(click)="reset()"> Reset </button>
        <button class="btn btn-primary"(click)="incrementaPor(-1)">-1</button>
    `
  }
)
export class CounterComponent {

  counter = 0

  incrementaPor(valor: number): void {
    this.counter += valor;
  }

  reset(): void {
    this.counter = 0;
  }

}
