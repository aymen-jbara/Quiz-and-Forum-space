import {RQuizz} from "./RQuizz";
import {Question} from "./question";

export class QVT {

  id: string;
  description: string;
  date: Date;
  nbrQuestion: number;
  nbrQuestionMAX: number;
  isBloced :boolean;
  rquizzes: RQuizz;
  question: Question [];
}
