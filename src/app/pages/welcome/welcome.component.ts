import { animate, style } from '@angular/animations';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgxMasonryOptions } from 'ngx-masonry';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  activeSectionThree = 1
  sectionThreeItems = [
    {
      index: 1,
      title: 'Simple',
      gallery: [
        'assets/img/simple/3.jpg',
        'assets/img/simple/4.jpg',
      ],
      description: "Habitaciones ideales para quienes desean olvidarse de la rutina diaria gracias a su ambiente acogedor.",
      services: [
        {
          title: 'BAÑO PRIVADO',
          icon: 'wind'
        },
        {
          title: 'AGUA CALIENTE',
          icon: 'cloud-snow'
        },
        {
          title: 'WIFI',
          icon: 'wifi'
        },
        {
          title: 'DESAYUNO BUFFET',
          icon: 'bell'
        },
        {
          title: 'LAVANDERIA',
          icon: 'feather'
        },
        {
          title: 'TV CABLE',
          icon: 'tv'
        },
        {
          title: 'INTERCOMUNICADOR',
          icon: 'volume-2'
        },
        {
          title: 'COCHERA',
          icon: 'map-pin'
        },
        {
          title: 'RESTAURANT',
          icon: 'coffee'
        },
      ]
    },
    {
      index: 2,
      title: 'Simple ejecutiva',
      gallery: [
        'assets/img/matrimonial/14.jpg',
        'assets/img/matrimonial/20.jpg',
      ],
      description: "Habitaciones ideales para quienes desean olvidarse de la rutina diaria gracias a su ambiente acogedor.",
      services: [
        {
          title: 'BAÑO PRIVADO',
          icon: 'wind'
        },
        {
          title: 'AGUA CALIENTE',
          icon: 'cloud-snow'
        },
        {
          title: 'WIFI',
          icon: 'wifi'
        },
        {
          title: 'DESAYUNO BUFFET',
          icon: 'bell'
        },
        {
          title: 'LAVANDERIA',
          icon: 'feather'
        },
        {
          title: 'TV CABLE',
          icon: 'tv'
        },
        {
          title: 'INTERCOMUNICADOR',
          icon: 'volume-2'
        },
        {
          title: 'COCHERA',
          icon: 'map-pin'
        },
        {
          title: 'RESTAURANT',
          icon: 'coffee'
        },
      ]
    },
    {
      index: 3,
      title: 'Doble',
      gallery: [
        'assets/img/doble/9.jpg',
        'assets/img/doble/8.jpg',
        'assets/img/doble/12.jpg',
        'assets/img/doble/1.jpg',
      ],
      description: "Suele ser utilizada por amigos, o compañeros de trabajo que quieren disfrutar de las ventajas del hotel con un precio accesible.",
      services: [
        {
          title: 'BAÑO PRIVADO',
          icon: 'wind'
        },
        {
          title: 'AGUA CALIENTE',
          icon: 'cloud-snow'
        },
        {
          title: 'WIFI',
          icon: 'wifi'
        },
        {
          title: 'DESAYUNO BUFFET',
          icon: 'bell'
        },
        {
          title: 'LAVANDERIA',
          icon: 'feather'
        },
        {
          title: 'TV CABLE',
          icon: 'tv'
        },
        {
          title: 'INTERCOMUNICADOR',
          icon: 'volume-2'
        },
        {
          title: 'COCHERA',
          icon: 'map-pin'
        },
        {
          title: 'RESTAURANT',
          icon: 'coffee'
        },
      ]
    },
    {
      index: 4,
      title: 'Triple',
      gallery: [
        'assets/img/triple/18.jpg',
        'assets/img/triple/2.jpg',
        'assets/img/triple/11.jpg',
        'assets/img/triple/8.jpg',
      ],
      description: "Amplias y comodas, ideales para todos, tanto para las familias que desean vivir una estadía en Ayacucho y compartir la misma habitación, como para colegas o amigos que necesiten de confort y funcionalidad.",
      services: [
        {
          title: 'BAÑO PRIVADO',
          icon: 'wind'
        },
        {
          title: 'AGUA CALIENTE',
          icon: 'cloud-snow'
        },
        {
          title: 'WIFI',
          icon: 'wifi'
        },
        {
          title: 'DESAYUNO BUFFET',
          icon: 'bell'
        },
        {
          title: 'LAVANDERIA',
          icon: 'feather'
        },
        {
          title: 'TV CABLE',
          icon: 'tv'
        },
        {
          title: 'INTERCOMUNICADOR',
          icon: 'volume-2'
        },
        {
          title: 'COCHERA',
          icon: 'map-pin'
        },
        {
          title: 'RESTAURANT',
          icon: 'coffee'
        },
      ]
    },
    {
      index: 5,
      title: 'Matrimonial',
      gallery: [
        'assets/img/matrimonial/4.jpg',
        'assets/img/matrimonial/16.jpg',
        'assets/img/matrimonial/20.jpg',
        'assets/img/matrimonial/17.jpg',
      ],
      description: "Tiene una exquisita decoracion creando un ambiente comodo y acogedor ideal para viajes en pareja o una escapada de fin de semana, puedes elegir además, nuestra habitación matrimonial con cama doble.",
      services: [
        {
          title: 'BAÑO PRIVADO',
          icon: 'wind'
        },
        {
          title: 'AGUA CALIENTE',
          icon: 'cloud-snow'
        },
        {
          title: 'WIFI',
          icon: 'wifi'
        },
        {
          title: 'DESAYUNO BUFFET',
          icon: 'bell'
        },
        {
          title: 'LAVANDERIA',
          icon: 'feather'
        },
        {
          title: 'TV CABLE',
          icon: 'tv'
        },
        {
          title: 'INTERCOMUNICADOR',
          icon: 'volume-2'
        },
        {
          title: 'COCHERA',
          icon: 'map-pin'
        },
        {
          title: 'RESTAURANT',
          icon: 'coffee'
        },
      ]
    },
    {
      index: 6,
      title: 'Suite',
      gallery: [
        'assets/img/suite/3.jpg',
        'assets/img/suite/13.jpg',
        'assets/img/suite/8.jpg',
        'assets/img/suite/4.jpg',
      ],
      description: "Diseñada particularmente para familias, así como para parejas y amigos. La distribución espacial y la decoración de nuestras Suites no tienen comparación alguna en cuanto a espacio, comodidad, lujo y privacidad.",
      services: [
        {
          title: 'BAÑO PRIVADO',
          icon: 'wind'
        },
        {
          title: 'AGUA CALIENTE',
          icon: 'cloud-snow'
        },
        {
          title: 'WIFI',
          icon: 'wifi'
        },
        {
          title: 'DESAYUNO BUFFET',
          icon: 'bell'
        },
        {
          title: 'LAVANDERIA',
          icon: 'feather'
        },
        {
          title: 'TV CABLE',
          icon: 'tv'
        },
        {
          title: 'INTERCOMUNICADOR',
          icon: 'volume-2'
        },
        {
          title: 'COCHERA',
          icon: 'map-pin'
        },
        {
          title: 'RESTAURANT',
          icon: 'coffee'
        },
      ]
    },
  ];

  sectionFourItems = [
    {
      img: 'assets/img/espacios_comunes/23.jpg'
    },
    {
      img: 'assets/img/espacios_comunes/7.jpg'
    },
    {
      img: 'assets/img/espacios_comunes/24.jpg'
    },
    {
      img: 'assets/img/espacios_comunes/22.jpg'
    },
    {
      img: 'assets/img/espacios_comunes/27.jpg'
    },
    {
      img: 'assets/img/espacios_comunes/20.jpg'
    },
    {
      img: 'assets/img/espacios_comunes/18.jpg'
    },
    {
      img: 'assets/img/espacios_comunes/25.jpg'
    },
    {
      img: 'assets/img/espacios_comunes/5.jpg'
    },
    {
      img: 'assets/img/espacios_comunes/37.jpg'
    },
    {
      img: 'assets/img/espacios_comunes/40.jpg'
    },
    {
      img: 'assets/img/espacios_comunes/34.jpg'
    },
    {
      img: 'assets/img/espacios_comunes/39.jpg'
    },
  ];

  sectionFiveItems = [
    {
      title: "Aguas Turquesas de Millpu",
      description: "Con un total de 20 piscinas color turquesa y verde (dependiendo de la época del año), este tesoro de la naturaleza se encuentra adornado por la vegetación propia de la sierra peruana, formando un paisaje digno de una postal paradisíaca. El color de sus aguas se produce debido a la luz del sol y los minerales que arrastra el río.",
      img: "assets/img/sitios_turisticos/8.jpg",
      ltr: true
    },
    {
      title: "Laguna esmeralda",
      description: "Un nuevo atractivo eco turístico en Ayacucho esta dando mucho que hablar, se trata de la Laguna Esmeralda o Verdeccocha que se encuentra en la comunidad de Uchuraccay que pertenece a la Provincia de Huanta. Tiene una altitud de 4100 m.s.n.m por lo que el clima es poco frígida, sin embargo es ideal para aquellas personas que practican el Trekking y senderismo.",
      img: "assets/img/sitios_turisticos/3.jpg",
      ltr: false
    },
    {
      title: "Complejo arqueológico Wari",
      description: "Consta de diferentes sectores denominados 'barrios'. Las construcciones están hechas a base de piedra y barro revestidas de un enlucido fino, mayormente pintadas con rojo y blanco. Destacan varias estructuras entre ellas: Vegachayoc Moqo, Templo Mayor, Mongachayoc (galería subterránea para ser usadas como lugar de enterramientos colectivos), Cheqo Wasi (también usado como estructura funeraria), Turquesayoc (posible barrio de artesanos joyeros), entre otros.",
      img: "assets/img/sitios_turisticos/5.jpg",
      ltr: true
    },
    {
      title: "Basilica catedral",
      description: "Tiene 4 puertas de arco de medio punto (tres en la fachada principal y una en la lateral , lado norte del templo). La portada central del frontis principal está flanqueada por dobles columnas corintias sobre las que descansan pilastres que rematan cuatro esferas. En los intervalos de éstas columnas hay dos hornacinas ocupadas por estatuas de los apóstoles San Pedro y San Pablo. las torres posteriores al cuerpo del templo son de piedra al lado sur y de cal y ladrillo al lado norte.",
      img: "assets/img/sitios_turisticos/6.jpg",
      ltr: false
    },
  ];

  public masonryOptions: NgxMasonryOptions = {
    gutter: 20,
    columnWidth: 33.333,
    animations: {
      show: [
        style({ opacity: 0 }),
        animate('400ms ease-in', style({ opacity: 1 })),
      ],
      hide: [
        style({ opacity: '*' }),
        animate('400ms ease-in', style({ opacity: 0 })),
      ]
    }
  };

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  incrementSectionThreeItem(decrement = false) {
    if (decrement) {
      if (this.activeSectionThree == 1) this.activeSectionThree = this.sectionThreeItems.length
      else this.activeSectionThree--
    }
    else {
      if (this.activeSectionThree == this.sectionThreeItems.length) this.activeSectionThree = 1
      else this.activeSectionThree++
    }
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  openGalleryDialog(index) {
    const dialogRef = this.dialog.open(GalleryDialog, {
      data: {
        index: index,
        gallery: this.sectionFourItems
      },
    });
  }

}


@Component({
  selector: 'gallery-dialog',
  templateUrl: 'gallery-dialog.html',
})
export class GalleryDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }


  incrementGallery(decrement = false) {
    if (decrement) {
      if (this.data.index == 0) this.data.index = (this.data.gallery.length - 1)
      else this.data.index--
    }
    else {
      if (this.data.index == (this.data.gallery.length - 1)) this.data.index = 1
      else this.data.index++
    }
  }
}