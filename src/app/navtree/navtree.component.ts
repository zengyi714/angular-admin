import { Component, Input } from '@angular/core';
import { Config, Menu } from './types';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-navtree',
  templateUrl: './navtree.component.html',
  styleUrl: './navtree.component.css'
})
export class NavtreeComponent {
  options: Config = { multi: false };

  menuList: Menu[] = [
    {
      name: 'Home',
      iconClass: 'fa fa-home',
      hasMenu: false,
      active: false
    },
    {
      name: 'Responsive web',
      iconClass: 'fa fa-mobile',
      active: false,
      hasMenu: true,
      submenu: [
        { name: 'Tablets', url: '#' },
        { name: 'Mobiles', url: '#' },
        { name: 'Desktop', url: '#' }
      ]
    },
    {
      name: 'Web Browser',
      iconClass: 'fa fa-globe',
      active: false,
      hasMenu: true,
      submenu: [
        { name: 'Chrome', url: '#' },
        { name: 'Firefox', url: '#' },
        { name: 'Desktop', url: '#' }
      ]
    }
  ];



  ngOnInit() {
    // this.config = this.mergeConfig(this.options);
  }

  // mergeConfig(options: Config | undefined) {
  //   // 기본 옵션
  //   const config = {
  //     // selector: '#accordion',
  //     multi: true,
  //   };

  //   return { ...config, ...options };
  // }

  toggle(index: number) {
    // 멀티 오픈을 허용하지 않으면 타깃 이외의 모든 submenu를 클로즈한다.
    // if (!this.config.multi) {
    //   this.menus
    //     .filter((menu, i) => i !== index && menu.active)
    //     .forEach(menu => (menu.active = !menu.active));
    // }


    // Menu의 active를 반전

    if (this.menuList && this.menuList.length > index) {
      let currentMenu = this.menuList[index];
      if (currentMenu.hasMenu) {
        this.menuList[index].active = !this.menuList[index].active;
      }
    }
  }

}
