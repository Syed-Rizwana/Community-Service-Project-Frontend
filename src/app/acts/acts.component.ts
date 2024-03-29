import { Component } from '@angular/core';
import { AuthserviceService } from '../authservice.service';
@Component({
  selector: 'app-acts',
  templateUrl: './acts.component.html',
  styleUrls: ['./acts.component.css']
})
export class ActsComponent {
  isDropdownOpen: boolean = false;
  username:string="";
  constructor(private authService: AuthserviceService) {}
  ngOnInit() {
    this.authService.username$.subscribe(username => {
      this.username = username; // Update the login username
    });
  }
  //isDropdownOpen: boolean = false;
  isReadClicked: boolean = false;
  isComplaintDropdownOpen:boolean=false;
  isInspirationsDropdownOpen:boolean=false;
  readData: any;
  openDropdown(event: MouseEvent, dropdownType: string) {
    if (dropdownType === 'complaint') {
      this.isComplaintDropdownOpen = true;
    } else if (dropdownType === 'ins') {
      this.isInspirationsDropdownOpen = true;
    }
  }
  
  closeDropdown(event: MouseEvent, dropdownType: string) {
    if (dropdownType === 'complaint') {
      this.isComplaintDropdownOpen = false;
    } else if (dropdownType === 'ins') {
      this.isInspirationsDropdownOpen = false;
    }
  }
  
}
