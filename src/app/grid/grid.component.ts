import { Component, OnInit,Input } from '@angular/core';
//import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
      @Input() rowData : [];
  constructor( ) { }
  columnDefs = [
        {headerName: 'login', field: 'login', sortable: true, filter: true},
        {headerName: 'id', field: 'id', sortable: true, filter: true},
        {headerName: 'node_id', field: 'node_id', sortable: true, filter: true},
        {headerName: 'avatar_url', field: 'avatar_url', sortable: true, filter: true},
        {headerName: 'url', field: 'url', sortable: true, filter: true},
        {headerName: 'html_url', field: 'html_url', sortable: true, filter: true},
        {headerName: 'followers_url', field: 'followers_url', sortable: true, filter: true},
        {headerName: 'following_url', field: 'following_url', sortable: true, filter: true},
        {headerName: 'gists_url', field: 'gists_url', sortable: true, filter: true},
        {headerName: 'starred_url', field: 'starred_url', sortable: true, filter: true},
        {headerName: 'subscriptions_url', field: 'subscriptions_url', sortable: true, filter: true},
        {headerName: 'organizations_url', field: 'organizations_url', sortable: true, filter: true},
        {headerName: 'repos_url', field: 'repos_url', sortable: true, filter: true},
        {headerName: 'events_url', field: 'events_url', sortable: true, filter: true},
        {headerName: 'received_events_url', field: 'received_events_url', sortable: true, filter: true},
        {headerName: 'type', field: 'type', sortable: true, filter: true},
        {headerName: 'site_admin', field: 'site_admin', sortable: true, filter: true},


    ];

    
  ngOnInit(): void {
  
  }
   }
    /**code for displaying dynamic columnDef headers from the variable rowData

    const gridOptions = {};
  generateColumns(data: any[]) {
  //console.log('inmethod',data);
   let columnDefinitions = [];

    data.map(object => {
    //console.log('inmethod1111',data);
      Object
        .keys(object)
        .map(key => {
          let mappedColumn = {
            headerName: key.toUpperCase(),
            field: key
          }

          columnDefinitions.push(mappedColumn);
          //console.log('datat',mappedColumn)
        })
    })
    //Remove duplicate columns
    columnDefinitions = columnDefinitions.filter((column, index, self) =>
    
      index === self.findIndex((colAtIndex) => (
        colAtIndex.field === column.field
      ))
    )
    console.log(columnDefinitions)
    return columnDefinitions;
  }
**/


