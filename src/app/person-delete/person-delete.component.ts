import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../services/people.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../models/person.model';

@Component({
  selector: 'app-person-delete',
  templateUrl: './person-delete.component.html',
  styleUrls: ['./person-delete.component.scss']
})
export class PersonDeleteComponent implements OnInit {
  person: Person = {
    name: '',
    email: ''
  };
  isLoading = true;
  errorMessage: string = '';

  constructor(
    private peopleService: PeopleService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.loadPerson(id);
  }

  loadPerson(id: number): void {
    this.peopleService.getPerson(id).subscribe(
      (person) => {
        this.person = person;
        this.isLoading = false;
      },
      (error) => {
        this.errorMessage = 'Error loading person details';
        this.isLoading = false;
      }
    );
  }

  confirmDelete(): void {
    if (this.person.id !== undefined) {
      this.peopleService.deletePerson(this.person.id).subscribe(
        () => {
          this.router.navigate(['/']);
        },
        (error) => {
          this.errorMessage = 'Error deleting person';
        }
      );
    } else {
      this.errorMessage = 'Invalid person ID';
    }
  }

  cancel(): void {
    this.router.navigate(['/']);
  }
}