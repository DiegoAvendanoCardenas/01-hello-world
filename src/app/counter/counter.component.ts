import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  counter = 0;
  activeDecrease = false;

  increase(){
    this.counter++;
    // Re-enable the decrease button
    this.activeDecrease = false;
  }

  decrease(){
    this.counter--;
    // Disable the decrease button if counter reaches zero
    if (this.counter === 0) {
      this.activeDecrease = true;
    }
  }

  inactiveDecrease() {
    this.activeDecrease = !this.activeDecrease;
  }
}
