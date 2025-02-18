import { Component } from '@angular/core';
import { ServiceCardsComponent } from '../../commonComponents/service-cards/service-cards.component';

@Component({
  selector: 'app-home',
  imports: [ServiceCardsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
