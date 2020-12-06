import { Component, OnInit } from '@angular/core';

interface News {
  image: string;
  alt: string;
  headline: string;
  description: string;
}

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  array: News[] = [
    {
      image: 'assets/image/thumbs_up.jpg',
      alt: 'tango',
      headline: "Działamy dalej zgodnie z wytycznymi!",
      description: 'Wszystkie zajęcia odbywają się planowo według grafiku.\n' +
        'Kochani codziennie Wasi ulubieni instruktorzy, pracownicy recepcji i cała ekipa STJ dokłada wszelkich starań, by to miejsce było dla Was pełne radości, uśmiechu i pozytywnej energii, którą wynosicie po zajęciach.'
    },
    {
      image: 'assets/image/medical_plus.png',
      alt: 'tango',
      headline: "Covid - obostrzenia w szkole tańca",
      description: 'Uwaga!, wszyscy kursanci są zobowiązani o noszenie maseczek w całym okresie przebywania na terenie szkoły tańca z wyłączeniem czasu trwania zajęć.'
    },
    {
      image: 'assets/image/tango2.jpg',
      alt: 'tango',
      headline: "Nowe zajęcia w naszej szkole!!!",
      description: 'Od grudnia ruszają nowe zajęcia z niedostępnych wcześniej stylów, a mianowicie: \br -Tango \n -Rumba \n -Burleska \nZapisz się już dziś!'
    },
    {
      image: 'assets/image/swieta.jpg',
      alt: 'tango',
      headline: "Mikołajkowe zajęcia online",
      description: 'Z okazji mikołajek zapraszamy na specjalne DARMOWE zjęcia online. Nauczycie się nia nich niezwykłej, świątecznej choreografii.'
    },
    {
      image: 'assets/image/buty_taneczne.png',
      alt: 'tango',
      headline: "Grudniowa promocja na buty taneczne",
      description: 'Z okazji zbliżających się Świąt promocje nawet do 20% na wybrane buty taneczne. Zamów już dziś!'
    },
    {
      image: 'assets/image/dancer_lady.jpg',
      alt: 'tango',
      headline: "Poznaj naszą nową instruktorkę",
      description: 'Niesamowita i energiczna Kinga sprawi, że każde zajęcia będą niezwykłe. Długo nie zapomnisz swojej pierwszej godziny z nią!'
    }
  ];

  immutableArray = this.array;
}
