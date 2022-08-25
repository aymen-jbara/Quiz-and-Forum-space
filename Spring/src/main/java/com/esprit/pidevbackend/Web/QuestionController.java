package com.esprit.pidevbackend.Web;


import com.esprit.pidevbackend.Domain.Answer;
import com.esprit.pidevbackend.Domain.Question;
import com.esprit.pidevbackend.Domain.TypeAnswer;
import com.esprit.pidevbackend.Repository.AnswerRepository;
import com.esprit.pidevbackend.Service.IAnswerService;
import com.esprit.pidevbackend.Service.IQuestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = ("*"))
@RestController
@RequestMapping("Question")

public class QuestionController {
@Autowired
IQuestionService iQuestionService;
@Autowired
    IAnswerService iAnswerService;
@Autowired
    AnswerRepository answerRepository;
   // @Secured({"ROLE_ADMIN"})

    @PostMapping("/Add")
    public void AddQuestion( @RequestBody Question e) {
        iQuestionService.AddQuestion(e);
    }
   // @Secured({"ROLE_USER","ROLE_ADMIN"})

    @GetMapping("/Get")
    public List<Question> getAllQuestion() {
        return iQuestionService.getAllQuestion();
    }
   // @Secured({"ROLE_ADMIN"})

    @PutMapping("/Put")
    public void UpdateQuestion(@RequestBody Question e) {
        iQuestionService.UpdateQuestion(e);
    }
   // @Secured({"ROLE_ADMIN"})

    @DeleteMapping("/Delete/{id}")
    public void DeleteQuestion( @PathVariable("id") Long id) {

        iQuestionService.DeleteQuestion(id);
    }
   // @Secured({"ROLE_ADMIN"})

    @PutMapping("/AddQuestionToQuizz/{idQuizz}")
    public void AddQuestionToQuizz(@RequestBody Question e, @PathVariable("idQuizz") Long idQuizz) {
        iQuestionService.AddQuestionToQuizz(e, idQuizz);
        Answer a =new Answer((long) 1,TypeAnswer.BAD,false,e);
        Answer a1 =new Answer((long)2,TypeAnswer.GOOD,false,e);
        Answer a2 =new Answer((long)3,TypeAnswer.EXCELLENT,false,e);
        iAnswerService.AddAnswerToQuestion(a,e.getId());
        iAnswerService.AddAnswerToQuestion(a1,e.getId());
        iAnswerService.AddAnswerToQuestion(a2,e.getId());

    }
    @GetMapping("/GetQuestion/{idqvt}")
    public List<Question> findAllQuestionByQVT(@PathVariable("idqvt") Long idQVT) {
        return iQuestionService.findAllQuestionByQVT(idQVT);
    }

}
