import { Component } from '@angular/core';
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatIcon} from "@angular/material/icon";
import {FormControl, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-search-bar-content',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    MatIcon,
    ReactiveFormsModule

  ],
  templateUrl: './search-bar-content.component.html',
  styleUrl: './search-bar-content.component.css'
})
export class SearchBarContentComponent {
  searchControl = new FormControl('');

  onSearch() {
    console.log(this.searchControl.value);
  }
}
