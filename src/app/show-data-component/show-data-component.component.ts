import { Component, OnDestroy } from '@angular/core';
import { MyService } from '../my-service.service';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-show-data-component',
  templateUrl: './show-data-component.component.html',
  styleUrls: ['./show-data-component.component.scss'],
})
export class ShowDataComponentComponent implements OnDestroy {
  usersByCompany: any[] = [];
  private dataSubscription: Subscription;

  constructor(private myService: MyService) {
    this.dataSubscription = this.myService.getUsers()
      .pipe(
        map((data) => {
          const groupedUsers = data.reduce((result, user) => {
            const key = user.company.name;
            if (!result[key]) {
              result[key] = [];
            }
            result[key].push(user);
            return result;
          }, {});
          return Object.entries(groupedUsers);
        })
      )
      .subscribe((result) => {
        console.log(result);
        this.usersByCompany = result;
      });
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }
}
