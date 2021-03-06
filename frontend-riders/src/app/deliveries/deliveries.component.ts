import { DeliveriesService } from './../services/deliveries.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deliveries',
  templateUrl: './deliveries.component.html',
  styleUrls: ['./deliveries.component.css']
})
export class DeliveriesComponent implements OnInit {
  assignedDeliveries = null;
  pastDeliveries = null;

  constructor(private deliveriesService: DeliveriesService) { }

  ngOnInit(): void {
    this.retrieveAssignedDeliveries();
    this.retrievePastDeliveries();
  }

  retrieveAssignedDeliveries() {
    this.deliveriesService.getAssignedDeliveries().subscribe((res) => {
      this.assignedDeliveries = res;
    });
  }

  retrievePastDeliveries() {
    this.deliveriesService.getDeliveryHistory().subscribe((res) => {
      this.pastDeliveries = res;
    });
  }

}
