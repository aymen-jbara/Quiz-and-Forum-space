import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalDirective} from "ngx-bootstrap/modal";
import {AnswerServiceService} from "../../../service/ForumService/answer-service.service";
import {QuestionService} from "../../../service/ForumService/question.service";
import {QVTServiceService} from "../../../service/ForumService/qvtservice.service";
import {ActivatedRoute} from "@angular/router";
import {QVT} from "../../../model/Forum/qvt";
import {Question} from "../../../model/Forum/question";
import {Answer} from "../../../model/Forum/answer";
import {timer} from "rxjs";
import {PublicationService} from "../../../service/ForumService/publication.service";
import {Publication} from "../../../model/Forum/publication";
import {AuthService} from "../../../service/ForumService/auth.service";
import {User} from "../../../model/Forum/User";
import swal from "sweetalert";
import {LikeService} from "../../../service/ForumService/like.service";
import {interval} from "rxjs";
import {RQuizz} from "../../../model/Forum/RQuizz";
import {RQuizzServiceService} from "../../../service/ForumService/rquizz-service.service";
import {ChartType} from "chart.js";
import {CommentPubService} from "../../../service/ForumService/comment-pub.service";
import {CommentPub} from "../../../model/Forum/comment-pub";
import {RatingForum} from "../../../model/Forum/RatingForum";
import {Opinion} from "../../../model/Forum/opinion";
import {ConseilUser} from "../../../model/Forum/conseil-user";
import {NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels} from "@techiediaries/ngx-qrcode";


const counterSecond = timer(0, 1000);

@Component({
  selector: 'app-qvtcote-client',
  templateUrl: './qvtcote-client.component.html',
  styleUrls: ['./qvtcote-client.component.css']
})
export class QVTCoteClientComponent implements OnInit {
  @ViewChild('myModal') public myModal: ModalDirective;
  @ViewChild('infoModal') public infoModal: ModalDirective;
  @ViewChild('largeModal') public largeModal: ModalDirective;
  @ViewChild('OpinionModal') public OpinionModal: ModalDirective;





  constructor(private commentPubService:CommentPubService,private likeService: LikeService,private rQuizzService:RQuizzServiceService, private authService: AuthService, private publicationService: PublicationService, private answerService: AnswerServiceService, private questionService: QuestionService, private qvtService: QVTServiceService, private route: ActivatedRoute,) {
  }

  ListQVT: QVT [];
  ListQuestion: Question [];
  ListAnswer: Answer[];
  ListPub: Publication[];
  ListpubByUser: Publication[];
  pub = new Publication();
  Test: boolean;
  i: number = 0;
  j: number = 0;
  a: number = 0;
  progress: string = "0";
  ListRQuizz : RQuizz[];
  ListCommetPub:CommentPub[];
  counter = 30;
  user: User=new User();
  interval$: any
  Comment:CommentPub=new CommentPub();


  ngOnInit(): void {
    //get List Quizz
    this.GetAllQVT()
    this.GetResponsQVT()
    this.GetUserRating();
    // get All Publication
    this.GetAllPublication();
    this.GetAnswer();
    this.getListComment();
    this.CalculRating()
    this.GetAllOpinion();
  }




  GetResponsQVT(){
    this.rQuizzService.getListRQuizz().subscribe(
      (data) => {
        this.ListRQuizz = data, console.log(data)
      });
  }

  GetAllQVT(){
    this.qvtService.getListQVT().subscribe(
      (data) => {
        this.ListQVT = data , console.log(data)
      });
  }

  GetUserRating(){
    this.authService.GetUser().subscribe(
      (data) => {
        this.user = data , this.publicationService.getListPubByUser(this.user.id).subscribe(
          (data) => {
            this.ListpubByUser = data , console.log(data)
          }),
          console.log(this.user),this.GetRating();

      });}


GetAllPublication(){
  this.publicationService.getListPublication().subscribe(
    (data) => {
      this.ListPub = data , console.log(data)
    });
}

  GetAnswer() {
    this.answerService.getListAnswer().subscribe(
      (data) => {
        this.ListAnswer = data , console.log(data)
      });
    // this.getListIdAnswer(id);

  }

  GetQuestion(id: string) {
    this.questionService.getListQuestion(id).subscribe(
      (data) => {
        this.ListQuestion = data , console.log(data)
      });
  }

  addPublication() {
    this.publicationService.addPublication(this.pub, this.user.id).subscribe();
    console.log(this.pub.statut)

  }

  deletePub(pub: Publication) {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this Publication!',
      icon: 'warning',
      buttons: ['Cancel', 'Confirm'],
      dangerMode: true,
    })
      .then((willDelete) => {

        if (willDelete) {
          this.qvtService.deleteQVT(String(pub.id));
          let i = this.ListPub.indexOf(pub);
          console.log(pub.id);
          this.publicationService.DeletePublication(String(pub.id)).subscribe(
            () => this.ListPub.splice(i, 1)
          );
          swal('Publication has been deleted!', {
            icon: 'success',
          });
        }
      });
  }

  nbrLike: number;

  getnbrLike(id: string) {
    // @ts-ignore
    this.likeService.getListAnswer(id).subscribe(
      (data) => {
        this.nbrLike = data , console.log(data)
      });
  }

  selected: string

  //event handler for the radio button's change event
  radioChangeHandler(event: any) {
//update the ui
    this.selected = event.target.value;
  }

  radioChangeHandler1(event: string) {
//update the ui
    this.selected = event;
    this.a++;
  }


  AddResponseUser(idA: string) {
    this.answerService.AddResponseUser(this.user.id, idA).subscribe();
  }

  ConseilQuizz(id: string) {
    this.qvtService.getconseilQuiz(id).subscribe();
    console.log(id)
  }

  TestPasserQuiz(idQ: string, idU: string) {
    this.qvtService.TestPasserQuiz(idQ, idU).subscribe((data) => {// @ts-ignore
      this.Test = data , console.log(data)
    });
  }

  getPdf(idq: string) {
    this.answerService.getPDF(this.user.id, idq).subscribe();
  }

  changeTest() {
    this.Test = false;
  }

  NextPage() {
    if (this.ListQuestion.length!=this.i){
      this.i += 1;
      this.getProgressPercent();
      this.resetCounter();
      this.startCounter();
      this.test();
    }
    else{
      this.stopCounter();
      this.counter = 30;
    }

  }

  PrecedentPage() {
    this.i -= 1;
  }

  startCounter() {
    this.interval$ = interval(1000)
      .subscribe(val => {
        this.counter--;
        if (this.counter === 0) {
          this.i++;
          this.counter = 30;
        }
      });
    setTimeout(() => {
      this.interval$.unsubscribe()
    }, 3000000);
  }

  stopCounter() {
    this.interval$.unsubscribe();
    this.counter = 0;
  }

  resetCounter() {
    this.stopCounter();
    this.counter = 30;
    this.startCounter;
  }

  getProgressPercent() {
    this.progress =((this.a / this.ListQuestion.length) * 100).toString();
    return this.progress;
  }
  close(){
    this.a=0;
    this.i=0;
    this.counter = 30;
    this.testimg=false;
    this.progress="0";
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
  nextQvt(){
if (this.ListQVT.length===this.j){
  this.j=0;
}
else this.j++;
  }
  precedentQvt(){
    if (0===this.j){
      this.j=this.ListQVT.length;
    }
    else this.j--;
  }
  Desaffecteion(idQ:string){
    this.answerService.Desaffectaion(this.user.id, idQ).subscribe();
  }
  testimg:boolean
  test(){
    if ( this.ListQVT[this.j].nbrQuestionMAX==this.i){
      this.testimg=true;
    }
    else {
    this.testimg=false;}
      }

  getListComment(){
    return this.commentPubService.getListComment().subscribe(
      data=>{(this.ListCommetPub=data,console.log(data))}

    )
  }

  CountComment(Pub:Publication) {
    this.commentPubService.CountComment(Pub.id).subscribe(
      data=>{this.pub.nbrComment=data,console.log(data)}
    )
  }


    testComment:boolean
  addComment(idPub:string,event: KeyboardEvent) {
    if (event.keyCode == 13) {
      console.log(this.Comment.description)
      this.commentPubService.AddCommentPub(this.Comment,this.user.id,idPub).subscribe(
        data=>{// @ts-ignore
          (this.testComment=data,console.log(data))}
      );
      this.ListCommetPub.push(this.Comment)
    }
  }
  DeleteCommentPub(com:CommentPub){
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this Comment!',
      icon: 'warning',
      buttons: ['Cancel', 'Confirm'],
      dangerMode: true,
    })
      .then((willDelete) => {

        if (willDelete) {
       //   this.qvtService.deleteQVT(String(com.id));
          let i = this.ListCommetPub.indexOf(com);
          console.log(com.id);
          this.commentPubService.DeleteCommentPub(com.id).subscribe( () => this.ListCommetPub.splice(i, 1));
          swal('Comment has been deleted!', {
            icon: 'success',
          });
        }
      });
  }


  title = "star-angular";
  stars = [1, 2, 3, 4, 5];
  rating:any = 0;
  hoverState = 0;

  enter(k:any) {
    this.hoverState = k;
    // console.log(i);
  }

  leave(event:any) {
    this.hoverState = 0;
  }

  updateRating(k:any) {
    this.rating = k;
    this.addRatingToUser(k);

    console.log(k);

  }
R:RatingForum=new RatingForum();
  addRatingToUser(raty:any){
    //this.user.rating.rating=raty;
    console.log(this.user.ratingForum)
    this.R.rating=raty;
    this.R.id=this.user.ratingForum.id;
  //  this.R.rating=5;
    this.qvtService.addRatingToUser( this.user.id,this.R).subscribe();
  }
  GetRating(){
    console.log(this.user)
    this.qvtService.FindRatingByUser(this.user.id).subscribe(
      data=>{this.rating=data,console.log(data)}
    );
  }
  StarRating:number;
  CalculRating(){
    this.qvtService.CalculRating().subscribe(
      data=>{this.StarRating=data,console.log(data)}
    )

  }
  ListOpinion:Opinion[];

  GetAllOpinion(){
    this.qvtService.getListOpinion().subscribe(
      data=>{this.ListOpinion=data}
    )

  }
  op:Opinion=new Opinion();
  AddOpinion() {
      this.qvtService.AddOpinionToUser(this.op, this.user.id).subscribe()
  }

  conseilUser:ConseilUser=new ConseilUser();
  GetConseilsUser(){
   this.qvtService.GetConseilsUser(this.user.id).subscribe(
     data=>{this.conseilUser=data,console.log(data)}
   )
  }
  p: number = 1
  pageOp:number=1





  elementType= NgxQrcodeElementTypes.URL
  correctionLevel=NgxQrcodeErrorCorrectionLevels.HIGH
  value=""
  }




