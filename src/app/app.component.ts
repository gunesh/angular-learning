import { Component, VERSION } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  constructor(private router: Router) {
    console.log('Constructor:');
  }

  ngOnInit() {
    console.log('ngOnInit:');
  }
  columns = [
    { title: 'Adı', field: 'name' },
    { title: 'Soyadı', field: 'surname' },
    { title: 'Doğum Yılı', field: 'birthYear', type: 'numeric' },
    {
      title: 'Doğum Yeri',
      field: 'birthCity',
      lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
    },
  ];
  data = [{ name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 }];
  title = 'My Table';
  menuItems = [
    {
      key: 'classification/#',
      label: 'Classification',
      icon: 'tasks',
      value: 5,
      submenus: [
        {
          key: 'classification',
          label: 'Digital Mapping',
          value: 6,
          submenus: null,
        },
        {
          key: 'classification/#/digital-classification',
          label: 'Classification',
          value: 7,
          submenus: null,
        },
      ],
    },
    {
      key: 'ingestion/#',
      label: 'Ingestion',
      icon: 'archive',
      value: 11,
      submenus: [
        {
          key: 'ingestion/#/dashboard/adThenaIngestion',
          label: 'Dashboard',
          value: 12,
          submenus: null,
        },
        {
          key: 'ingestion/#/summaryView',
          label: 'Ingestion Summary',
          value: 13,
          submenus: null,
        },
        {
          key: 'ingestion/#/manualIngestion',
          label: 'Declarative Files',
          value: 14,
          submenus: null,
        },
      ],
    },
  ];

  showMenuBar = false;
  onSubMenuClick(key) {
    // this.router.navigate([key]);
    this.router.navigateByUrl(key);
  }
}
