import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularApp';
   
  data: any[] = [
    { userId: 1, title: "Angular", completed: false },
  ];

  searchText = '';
  constructor(private userService: UserService) {
    this.userService.getUsers()
      .subscribe((resp: any) => { // Use the any type for resp
        console.log(resp);
        this.data = resp;
      });
  }
}
