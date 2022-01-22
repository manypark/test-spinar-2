import { Component, OnInit } from '@angular/core';

@Component({
  selector    : 'app-activitys',
  templateUrl : './activitys.component.html',
  styleUrls   : ['./activitys.component.css']
})

export class ActivitysComponent implements OnInit {

  list:any[] = [
    {
      title : 'Infraccion en los lineamientos',
      desc  : 'Área de descargar - Cámara 2',
      date  : '12:33 hoy',
      pic   : 'assets/img/image1.jpeg'
    },
    {
      title : 'Personal fuera de horario',
      desc  : 'Área de descargar - Cámara 2',
      date  : '12:33 hoy',
      pic   : 'assets/img/image2.jpeg'
    },
    {
      title : 'La mercancia salio de la zona designada',
      desc  : 'Área de descargar - Cámara 2',
      date  : '12:33 hoy',
      pic   : 'assets/img/image3.jpeg'
    },
    {
      title : 'Infraccion en los lineamientos',
      desc  : 'Área de descargar - Cámara 2',
      date  : '12:33 hoy',
      pic   : 'assets/img/image1.jpeg'
    },
    {
      title : 'Personal fuera de horario',
      desc  : 'Área de descargar - Cámara 2',
      date  : '12:33 hoy',
      pic   : 'assets/img/image2.jpeg'
    },
    {
      title : 'La mercancia salio de la zona designada',
      desc  : 'Área de descargar - Cámara 2',
      date  : '12:33 hoy',
      pic   : 'assets/img/image3.jpeg'
    },
    {
      title : 'Infraccion en los lineamientos',
      desc  : 'Área de descargar - Cámara 2',
      date  : '12:33 hoy',
      pic   : 'assets/img/image1.jpeg'
    },
    {
      title : 'Personal fuera de horario',
      desc  : 'Área de descargar - Cámara 2',
      date  : '12:33 hoy',
      pic   : 'assets/img/image2.jpeg'
    },
    {
      title : 'La mercancia salio de la zona designada',
      desc  : 'Área de descargar - Cámara 2',
      date  : '12:33 hoy',
      pic   : 'assets/img/image3.jpeg'
    },
    {
      title : 'Infraccion en los lineamientos',
      desc  : 'Área de descargar - Cámara 2',
      date  : '12:33 hoy',
      pic   : 'assets/img/image1.jpeg'
    },
    {
      title : 'Personal fuera de horario',
      desc  : 'Área de descargar - Cámara 2',
      date  : '12:33 hoy',
      pic   : 'assets/img/image2.jpeg'
    },
    {
      title : 'La mercancia salio de la zona designada',
      desc  : 'Área de descargar - Cámara 2',
      date  : '12:33 hoy',
      pic   : 'assets/img/image3.jpeg'
    }
  ];

  constructor() { }

  ngOnInit(): void { }

}
