import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../services/people.service';
import { Person } from '../models/person.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {
  people: Person[] = [];
  isLoading = true;

  constructor(
    private peopleService: PeopleService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadPeople();
  }

  loadPeople(): void {
    this.isLoading = true;
    this.peopleService.getAllPeople().subscribe(
      (people) => {
        this.people = people;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error loading people:', error);
        this.isLoading = false;
      }
    );
  }

  editPerson(id: number): void {
    this.router.navigate(['/edit', id]);
  }

  deletePerson(id: number): void {
    this.router.navigate(['/delete', id]);
  }
}