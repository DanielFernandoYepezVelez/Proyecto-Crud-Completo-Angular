import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title = 'ANGULAR CRUD';
  public employees: any[] = [];
  public model: any = {};
  public model2: any = {};
  public indice: number;
  public msg = '';
  public hiddeUpdate = true;

  public addEmployee(e): void {
    e.preventDefault();

    this.employees.push(this.model);

    this.model = {};
    this.msg = 'Add Employee Successfuly!';
  }

  public deleteEmployee(e, i): void {
    e.preventDefault();

    const answer: boolean = window.confirm('Do You Wish Delete A Employee?');

    if (answer) {
      this.employees.splice(i, 1);
      this.msg = 'Employee Deleted!';
    }
  }

  public editEmployee(e, i): void {
    e.preventDefault();
    this.hiddeUpdate = false;

    this.model2.name = this.employees[i].name;
    this.model2.lastName = this.employees[i].lastName;
    this.model2.position = this.employees[i].position;
    this.model2.email = this.employees[i].email;

    this.indice = i;
  }

  public updateEmployee(e): void {
    e.preventDefault();

    const i: number = this.indice;

    for (let index = 0; index < this.employees.length; index++) {
      if (i === index) {
        this.employees[i] = this.model2;
        this.msg = 'Employee Updated Successfuly!';
        this.model2 = {};
      }
    }
    this.hiddeUpdate = true;
  }

  public closeAlert(e) {
    e.preventDefault();
    this.msg = '';
  }
}
