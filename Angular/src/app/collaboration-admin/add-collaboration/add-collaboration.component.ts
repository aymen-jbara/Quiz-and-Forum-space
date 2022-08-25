import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Collaboration } from 'src/app/model/collaboration';
import { CollaborationService } from 'src/app/service/collaboration.service';

@Component({
  selector: 'app-add-collaboration',
  templateUrl: './add-collaboration.component.html',
  styleUrls: ['./add-collaboration.component.css']
})
export class AddCollaborationComponent implements OnInit {

  idUser: any;
  collaboration : any;
  title:any;
  button: any;
  idCollaboration:any;
  formCollaboration : FormGroup;

  constructor(private formBuilder : FormBuilder ,private activatedRoute : ActivatedRoute , router : Router, 
    private collaborationService : CollaborationService) { }

  ngOnInit(): void {
    
    this.idUser = this.activatedRoute.snapshot.paramMap.get('idUser');
    console.log(this.idUser);
    
    if(this.idCollaboration){
      this.title ='Edit collaboration';
      this.button = 'Edit';

      this.collaborationService.getCollaborationById(this.idCollaboration).subscribe(
        (data)=>{
        console.log(data);
        this.collaboration = data
        });
    }else{
      this.title ='Add collaboration';
      this.button = 'Add';
    }
    this.formCollaboration = this.formBuilder.group({
      idCollaboration:[''],
      name:[''],
      description:[''],
      phone:[''],
      email:[''],
      date:[''],
      town:[''],
      picture:[''],
    })


  
  }


  AddOrEditCollaboration(){
      if(this.idCollaboration){
        this.collaborationService.updateCollaboration(this.collaboration).subscribe(
          (data)=>{
            console.log(data)
          });

        }else{
          
        this.idUser = this.activatedRoute.snapshot.paramMap.get('idUser');
          this.collaborationService.addCollaboration(this.collaboration,this.idUser).subscribe(
            (data)=>{
              console.log(data)
            }
            );
        }
      }
  
}
