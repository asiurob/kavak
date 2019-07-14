import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaceholderService } from '../../services/placeholder.service';

@Component({
  selector: 'app-by-word',
  templateUrl: './by-word.component.html',
  styles: []
})
export class ByWordComponent implements OnInit {

  lot: any;
  error: string;
  look: string;
  constructor(
    public link: ActivatedRoute,
    public service: PlaceholderService,
    public router: Router
  ) { }

  ngOnInit() {
    const word =  this.link.params.value.word;
    if ( word ) {
      this.look = word;
      this.search( word );
    }
  }

  showDetail( id: number ) {
    if ( id ) {
      this.router.navigateByUrl(`/${ id }`);
    }
  }

  search( word: string ) {
    this.service.resolve( word )
      .subscribe(
        ( res: any ) => this.lot = res,
        ( err: any ) => this.error = err.message );
    this.router.navigate([`/busqueda/${word}`]);
  }
}
