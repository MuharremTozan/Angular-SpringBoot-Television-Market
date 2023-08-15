import { Component, OnInit } from '@angular/core';
import { Television } from '../models/television';
import { TelevisionService } from '../services/television.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-television',
  templateUrl: './update-television.component.html',
  styleUrls: ['./update-television.component.css']
})
export class UpdateTelevisionComponent implements OnInit {
  television: Television = new Television();
  

  constructor(
    private televisionService: TelevisionService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    
    this.route.params.subscribe((params) => {
      const televisionId = +params['id']; 

      this.televisionService.getTelevisionById(televisionId).subscribe(
        (response) => {
          this.television = response; 
        }
        
      );
    });
  }

  saveTelevision() {
    this.televisionService.updateTelevision(this.television).subscribe(
      (data) => {
        this.goToTelevisionList();
      }
    );
  }

  goToTelevisionList() {
    this.router.navigate(['/televisions']);
  }

  onSubmit() {
    this.saveTelevision();
  }
}