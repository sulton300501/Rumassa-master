import { Component } from '@angular/core';
import { Review } from '../../../../interfaces/review';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-in-five',
  standalone: true,
  imports: [],
  templateUrl: './home-in-five.component.html',
  styleUrl: './home-in-five.component.scss'
})
export class HomeInFiveComponent {
  
  reviews !: Review[]
  constructor(private http : HttpClient){}

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.http.get<Review[]>(`https://localhost:7245/api/Review/GetAll`)
    .subscribe((data)=>{
      this.reviews = data;
    })
  }
}

