import { Component, OnInit } from '@angular/core';
import { PlaceholderService } from '../../services/placeholder.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styles: []
})
export class AllComponent implements OnInit {

  res: Observable<any>;
  constructor(
    public service: PlaceholderService,
    public router: Router
  ) { }

  ngOnInit() {
    this.res = this.service.get();
  }

  showDetail( id: number ) {

    if ( id ) {
      this.router.navigateByUrl(`/${ id }`);
    }

  }

  search( word: string ) {
    if ( word && word.trim() !== '' )  {
      this.router.navigate([`/busqueda/${word}`]);
    }
  }

}
