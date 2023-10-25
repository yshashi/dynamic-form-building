import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { registerFormControls } from './constants/register-form.constant';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DynamicFormComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'dynamic-form-building';
  registerFormControls = registerFormControls;

  ngOnInit(): void {
  }
}
