import { Component } from '@angular/core';

@Component({
  selector: 'app-snapdocs',
  templateUrl: './snapdocs.component.html',
  styleUrls: ['./snapdocs.component.css']
})
export class SnapdocsComponent {
  visible = false;
  toggleCollapse(): void {
    this.visible = !this.visible;
  }
}
