import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  list:any[] = [
    {
      text: 'Centro de monitoreo',
      icon: 'videocam'
    },
    {
      text: 'Cámaras',
      icon: 'widgets'
    },
    {
      text:'Registro de actividad',
      icon: 'update'
    },
    {
      text:'Analíticos',
      icon: 'signal_cellular_alt'
    }
  ];
  list2:any[] = [
    {
      text: 'Áreas',
      icon: 'insights'
    },
    {
      text:'Dispositivos',
      icon: 'view_in_ar'
    },
    {
      text:'CEDIS',
      icon: 'temple_hindu'
    },
    {
      text:'Usuarios',
      icon: 'people_alt'
    },
  ];
  list3:any[] = [
    {
      text: 'Contacto de alertas',
      icon: 'notifications'
    },
  ];


  constructor() { }

  ngOnInit(): void { }

}