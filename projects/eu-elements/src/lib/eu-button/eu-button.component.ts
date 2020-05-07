import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'eu-button',
  templateUrl: './eu-button.component.html',
  styleUrls: ['./eu-button.component.css'],
})
export class EuButtonComponent implements OnInit {
  @ViewChild('hoverBackdrop', { read: ElementRef }) hoverBackdrop: ElementRef;

  @Input() size: string;
  @Input() type: string;
  @Input() icon: string;
  @Input() position: string;

  hoverActive: Boolean;
  disabled: Boolean;

  constructor() {
    this.size = 'small';
    this.type = 'primary';
    this.position = 'center';
    this.hoverActive = false;
    this.disabled = false;
  }

  ngOnInit(): void {
    this.disabled = this.type === 'disabled';
  }

  mouseEnter(e): void {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left; //x position within the btn.
    const y = e.clientY - rect.top; //y position within the btn.
    this.hoverBackdrop.nativeElement.style.left = `${x}px`;
    this.hoverBackdrop.nativeElement.style.top = `${y}px`;
    this.hoverActive = true;
  }

  mouseLeave(e): void {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left; //x position within the btn.
    const y = e.clientY - rect.top; //y position within the btn.
    this.hoverBackdrop.nativeElement.style.left = `${x}px`;
    this.hoverBackdrop.nativeElement.style.top = `${y}px`;
    this.hoverActive = false;
  }

  getBtnClasses(): string {
    return `btn-${this.size} btn-${this.type} btn-${this.position}`;
  }
}
