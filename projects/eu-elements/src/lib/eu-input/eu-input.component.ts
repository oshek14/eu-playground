import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'eu-input',
  templateUrl: './eu-input.component.html',
  styleUrls: ['./eu-input.component.css'],
})
export class EuInputComponent implements OnInit {
  @Input() icon: string;

  constructor() {}

  ngOnInit(): void {}
}
