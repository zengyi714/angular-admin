import { Component, computed, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common'

/* Angular Material */
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon'

/* Componente customizado */
import { MenuItemComponent } from "../menu-item/menu-item.component";


/* Element of menu */
export type MenuItem = {
  icon: string;
  label: string;
  route?: string;
  subItems?: MenuItem[];
}

@Component({
  selector: 'app-custom-sidenav',
  imports: [CommonModule, MatListModule, MatIconModule, MenuItemComponent],
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.scss'
})
export class CustomSidenavComponent {

  sideNavCollapsed = signal(false);
  @Input() set collapsed(val: boolean) {
    this.sideNavCollapsed.set(val);
  }

  menuItems = signal<MenuItem[]>([
    {
      icon: 'dashboard',
      label: '仪表盘',
      route: 'dashboard',
    },
    {
      icon: 'settings_system_daydream',
      label: '系统管理',
      route: 'content',
      subItems: [
        {
          icon: 'person',
          label: '用户管理',
          route: 'videos',
        },
        {
          icon: 'group',
          label: '角色管理',
          route: 'playlists',
        },
        {
          icon: 'assignment_ind',
          label: '权限管理1',
          route: 'posts1',
        }
      ],
    },
    {
      icon: 'settings_system_daydream',
      label: '系统管理',
      route: 'content1',
      subItems: [        
        {
          icon: 'assignment_ind',
          label: '权限管理2',
          route: 'posts2',
        }
      ],
    },
    {
      icon: 'analytics',
      label: 'Analytics',
      route: 'analytics',
    },
    {
      icon: 'comment',
      label: 'Comments',
      route: 'comments',
    }
  ]);

  profilePicSize = computed(() => this.sideNavCollapsed() ? '32' : '100');
}
