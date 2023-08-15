import { Component } from '@angular/core';
import { Television } from '../models/television';
import { ActivatedRoute } from '@angular/router';
import { TelevisionService } from '../services/television.service';

@Component({
  selector: 'app-television-details',
  templateUrl: './television-details.component.html',
  styleUrls: ['./television-details.component.css']
})
export class TelevisionDetailsComponent {
  id?: number
  television?: Television
  constructor(private route: ActivatedRoute, private televisionService: TelevisionService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.television = new Television();
    this.televisionService.getTelevisionById(this.id!).subscribe(data => {
      this.television = data;
  });
}
}
