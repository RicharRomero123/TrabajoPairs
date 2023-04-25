import { Component,OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table'
import {MatPaginator} from '@angular/material/paginator'
import {MatSort} from '@angular/material/sort'
import { NgForm } from '@angular/forms';
import {MoviesService} from '../services/movies.service'
import {MatGridListModule} from "@angular/material/grid-list";
import * as _ from 'lodash';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-peliculas-table',
  templateUrl: './peliculas-table.component.html',
  styleUrls: ['./peliculas-table.component.scss']
})
export class PeliculasTableComponent {

  @ViewChild('movieForm',{static:false})

  movieForm!:NgForm;
  movieData!:Movie;

  dataSource = new MatTableDataSource();

  displayedColumns:string[]=['id','name','photo','duration','genres','year','info','actions']

  @ViewChild(MatPaginator, {static: true})
  paginator!:MatPaginator;
  isEditMode=false;

  @ViewChild(MatSort)
  sort!:MatSort;

  onSubmit()
  {
    if(this.movieForm.form.valid)
    {
      console.log(this.movieForm.form.value);
      if(this.isEditMode)
      {
        console.log('update!');
        this.updateMovie();
        this.getAllMovies();
      }
      else
      {
        console.log('create!');
        this.addMovie();
        this.getAllMovies();
      }
      this.cancelEdit();
    }
    else
    {
      console.log('Invalid data');
    }
  }

  constructor(private moviesService:MoviesService) {

    this.movieData = {} as Movie;
  }

  ngOnInit(): void{
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAllMovies();
  }

  getAllMovies()
  {
    this.moviesService.getList().subscribe((response:any)=>{
      this.dataSource.data = response})
  }

  editItem(element: any)
  {
    this.movieData = _.cloneDeep(element);
    this.isEditMode = true;
  }

  cancelEdit(){
    this.isEditMode = false;
    this.movieForm.resetForm();
  }

  deleteItem(id:string)
  {
    this.moviesService.deleteItem(id).subscribe((response: any)=>{
      this.dataSource.data = this.dataSource.data.filter((o:any)=>{
        return o.id !== id ? o: false;
      });
    });
    console.log(this.dataSource.data)

  }

  addMovie()
  {
    this.movieData.id = 0;
    this.moviesService.createItem(this.movieData).subscribe((response:any)=>{
      this.dataSource.data.push({...response});
      this.dataSource.data = this.dataSource.data.map((o: any)=> {return 0;});
    });
  }

  updateMovie()
  {
    this.moviesService.udpdateItem(this.movieData.id,this.movieData).subscribe((response:any)=>{
      this.dataSource.data = this.dataSource.data.map((o:any) =>{
        if(o.id == response.id){
          o = response;
        }
        return 0;
      });
    });
  }


}
