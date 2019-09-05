import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '🤸‍♂ CircleFit';

  items = [
    {
      id: 1,
      name: 'Tottenham',
      size: 'Large',
      img: 'https://images-na.ssl-images-amazon.com/images/I/71ISRedV-dL._UX522_.jpg'
    },
    {
      id: 1,
      name: 'Arsenal',
      size: 'Medium',
      img: 'https://images.sportsdirect.com/images/products/37708708_l.jpg'
    },
    {
      id: 1,
      name: 'Chelsea',
      size: 'Small',
      img: 'https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/625408.jpg'
    }
  ];
}
