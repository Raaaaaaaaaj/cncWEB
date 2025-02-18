import { Component ,Input } from '@angular/core';

@Component({
  selector: 'app-service-cards',
  imports: [],
  templateUrl: './service-cards.component.html',
  styleUrl: './service-cards.component.css'
})
export class ServiceCardsComponent {
  @Input() serviceCardHead: string = ''
  @Input() serviceCardHead2: string = ''
  @Input() serviceButtonLink: string = ''
  @Input() serviceImage: string = 'assets/Images/service1.png'; // Default image
}
