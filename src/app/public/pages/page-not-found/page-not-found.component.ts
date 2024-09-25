import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent  implements OnInit {
  protected invalidUrl: string = '';
  private route: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router);

  constructor() {
    this.invalidUrl = '';
  }
  ngOnInit():void {
    this.invalidUrl = this.route.snapshot.url[0].path;
  }

  protected onNavigateHome() {
    this.router.navigate(['home']).then();
  }
}
