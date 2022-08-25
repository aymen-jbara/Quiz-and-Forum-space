import { Component, OnInit } from '@angular/core';
import { Collaboration } from 'src/app/model/collaboration';
import { CollaborationService } from 'src/app/service/collaboration.service';

@Component({
  selector: 'app-list-collaboration',
  templateUrl: './list-collaboration.component.html',
  styleUrls: ['./list-collaboration.component.css']
})
export class ListCollaborationComponent implements OnInit {
  c : Collaboration[];
  idCollaboration : number;
  constructor(private collaborationService: CollaborationService ) { }

  ngOnInit(): void {
    this.collaborationService.getAllColaboration().subscribe(
      (data)=>{ 
        console.log(data);
        this.c=data
      });
  }

   deleteCollabora(idCollaboration:number){
     this.collaborationService.deleteCollaboration(idCollaboration).subscribe(
       (data)=>{
       console.log(data);
     })
   }

   /*
     deleteCollabora(idCollaboration:number){
     this.collaborationService.deleteCollaboration(idCollaboration).subscribe(
       ()=>this.collaborationService.getAllColaboration().subscribe(data=>{this.c}

     ))    


       }
       */

}
