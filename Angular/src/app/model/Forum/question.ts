import {QVT} from "./qvt";
import {Answer} from "./answer";

export class Question {
  id :string;
  typeQuestion: string;
  question : string;
  qvt : QVT;
  answer : Answer[];
}
