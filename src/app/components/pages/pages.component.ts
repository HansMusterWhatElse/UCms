import { Title } from '@angular/platform-browser/';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PageService } from './../../services/page.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  private param: any;
  private pageBody: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ttitle: Title,
    private pageService: PageService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.param = params['page'];

      // Title
      if (this.param === undefined) {
        this.param = 'home';
        this.ttitle.setTitle('CMS');
      } else {
        this.ttitle.setTitle(this.param.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()));
      }

      // Page content
      this.pageService.getPage(this.param).subscribe(page => {
        if (page == "PageNotFound") {
          this.router.navigateByUrl('');
        }
        this.pageBody = page["content"];

      });

    });
  }

}
