import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaceholderService } from '../../services/placeholder.service';

@Component({
  selector: 'app-by-id',
  templateUrl: './by-id.component.html',
  styles: []
})
export class ByIdComponent implements OnInit {

  one: any;
  error: string;
  constructor(
    public link: ActivatedRoute,
    public service: PlaceholderService
  ) { }

  ngOnInit() {
    const id = Number( this.link.params.value.id );
    if ( id ) {
      this.error = null;
      this.one = this.service.getOne( id )
      .subscribe( 
        ( res: any ) => this.one = res,
        ( err: any ) => this.error = err.message );

    } else {
      this.error = 'El tipo de dato a buscar no es válido';
    }
  }

}
