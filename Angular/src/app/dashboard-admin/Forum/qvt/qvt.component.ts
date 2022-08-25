import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {QuestionService} from "../../../service/ForumService/question.service";
import {RQuizzServiceService} from "../../../service/ForumService/rquizz-service.service";
import {QVTServiceService} from "../../../service/ForumService/qvtservice.service";
import {QVT} from "../../../model/Forum/qvt";
import {RQuizz} from "../../../model/Forum/RQuizz";
import {Question} from "../../../model/Forum/question";
import swal from "sweetalert";
import {ChartType} from "chart.js";
import {ModalDirective} from "ngx-bootstrap/modal";

@Component({
  selector: 'app-qvt',
  templateUrl: './qvt.component.html',
  styleUrls: ['./qvt.component.css']
})
export class QVTComponent implements OnInit{

  constructor(private activatedRoute:ActivatedRoute,private questionService:QuestionService,private rQuizzService:RQuizzServiceService,private qvtService:QVTServiceService,private router:Router) {}

  qvt = new QVT();
  newQvt= new QVT();
  ListRQuizz : RQuizz[];
  ListQVT : QVT [];
  question = new Question();
  rquiz=new RQuizz();


  ngOnInit(): void {


    this.qvtService.getListQVT().subscribe(
      (data) => {this.ListQVT = data ,console.log(data) });

    this.rQuizzService.getListRQuizz().subscribe(
      (data) =>{ this.ListRQuizz = data,console.log(data) });



  }


  deleteQVT(qvt: QVT) {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this QVT!',
      icon: 'warning',
      buttons: ['Cancel', 'Confirm'],
      dangerMode: true,
    })
      .then((willDelete) => {

        if (willDelete) {
          this.qvtService.deleteQVT(String(qvt.id));
          let i = this.ListQVT.indexOf(qvt);
          console.log(qvt.id);
          this.qvtService.deleteQVT(String(qvt.id)).subscribe(
            () => this.ListQVT.splice(i, 1)
          );
          swal('QVT has been deleted!', {
            icon: 'success',
          });
        }
      });
  }


  onSubmit(){
    this.qvtService.addQVT(this.qvt).subscribe();
    this.ListQVT.push(this.qvt);

  }

  onSubmitQuestion(qvt:QVT){

    this.qvtService.deleteQVT(String(qvt.id));
    let i = this.ListQVT.indexOf(qvt);
    console.log(qvt.id);
    this.questionService.addQuestion(this.question,String(qvt.id)).subscribe()

  }
  // Pie
  //public pieChartLabels: string[] = ['%BAD', '%GOOD', '%EXCELENT'];
  public pieChartType:ChartType  = 'pie';
  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  Uapdate(){
    this.qvtService.Update(this.newQvt).subscribe();

  }

  up(id:string){
    this.qvtService.GetQvtById(id).subscribe(
      d=>{
        this.newQvt=d;
        console.log(this.newQvt)
      }
    )
  }

  getRQuizz(id:string){
    this.rQuizzService.getRQuizz(id).subscribe(
      (data) => {this.rquiz = data ,console.log(data) });

  }




  @ViewChild('successModal') public successModal: ModalDirective;
  @ViewChild('infoModal') public infoModal: ModalDirective;

}
