import { Component, computed, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common'
import { RouterLink, RouterLinkActive } from '@angular/router';

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
    imports: [CommonModule, MatListModule, MatIconModule, RouterLink, RouterLinkActive, MenuItemComponent],
    templateUrl: './custom-sidenav.component.html',
    styleUrl: './custom-sidenav.component.scss'
})
export class CustomSidenavComponent {

  sideNavCollapsed=signal(false);
  @Input() set collapsed(val: boolean){
    this.sideNavCollapsed.set(val);
  }

  menuItems = signal<MenuItem[]>([
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: 'dashboard',
    },
    {
      icon: 'video_library',
      label: 'Content',
      route: 'content',
      subItems: [
        {
          icon: 'play_circle',
          label: 'Videos',
          route: 'videos',
        },
        {
          icon: 'playlist_play',
          label: 'Playlists',
          route: 'playlists',
        },
        {
          icon: 'post_add',
          label: 'Posts',
          route: 'posts',
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

  profilePicSize= computed(()=> this.sideNavCollapsed() ? '32' : '100');
}
