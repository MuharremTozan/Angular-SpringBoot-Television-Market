import { Component } from '@angular/core';
import { Television } from '../models/television';
import { TelevisionService } from '../services/television.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-television',
  templateUrl: './create-television.component.html',
  styleUrls: ['./create-television.component.css']
})
export class CreateTelevisionComponent {

  television: Television = new Television();
  constructor(private televisionService: TelevisionService,
    private router: Router){
    
  }

  saveTelevision(){
    this.televisionService.createTelevision(this.television).subscribe(data => {console.log(data);
    this.goToTelevisionList();
  },
  error => console.log(error));
  }

  goToTelevisionList(){
    this.router.navigate(['/televisions']);
  }

  onSubmit(){
    console.log(this.television);
    this.saveTelevision();
  }
}
