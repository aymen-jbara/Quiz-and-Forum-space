package com.esprit.pidevbackend.Web;


import com.esprit.pidevbackend.Domain.QVT;
import com.esprit.pidevbackend.Domain.Question;
import com.esprit.pidevbackend.Domain.User;
import com.esprit.pidevbackend.Repository.QVTRepsitory;
import com.esprit.pidevbackend.Service.*;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("QVT")

public class QVTController {
    @Autowired
     IQVTService iqvtService;
    @Autowired
    IRQuizzService irQuizzService;
    @Autowired
    IQuestionService iQuestionService;
    @Autowired
    IAnswerService iAnswerService;
    @Autowired
    QVTRepsitory qvtRepsitory;
   // @Secured({"ROLE_ADMIN"})

    @PostMapping("/Add")
    public void AddQVT( @RequestBody QVT e) {
        e.setNbrQuestionMAX(0);
        iqvtService.AddQVT(e);
    }
   // @Secured({"ROLE_USER","ROLE_ADMIN"})

    @GetMapping("/Get")
    public List<QVT> getAllQVT() {
        return iqvtService.getAllQVT();
    }
   // @Secured({"ROLE_ADMIN"})

    @PutMapping("/Put")
    public void UpdateQVT(@RequestBody QVT e) {
        iqvtService.UpdateQVT(e);
    }
   // @Secured({"ROLE_ADMIN"})

    @DeleteMapping("/Delete/{id}")
    public void DeleteQVT(@PathVariable("id") Long id) {
        QVT qvt=qvtRepsitory.findById(id).orElse(null);

        List<Question> quet= iQuestionService.findAllQuestionByQVT(qvt.getId());
        for (Question question:quet) {
            iQuestionService.DeleteQuestion(question.getId());
        }
        iqvtService.DeleteQVT(id);

    }
   // @Secured({"ROLE_USER","ROLE_ADMIN"})

    @GetMapping("/C/{id}")
    public void ConseilsPersonnalisesQuiz(@PathVariable("id") Long idQuizz) {
         iqvtService.ConseilsPersonnalisesQuiz(idQuizz);
    }
    @GetMapping("GetById/{id}")
    public QVT GetQVTById(@PathVariable("id") Long id) {
        return iqvtService.GetQVTById(id);
    }
    @GetMapping("Getuser/{name}")
    public User FindUserByUserName(@PathVariable("name") String username) {

        return iqvtService.FindUserByUserName(username);
    }
@GetMapping("test/{idQvt}/{idU}")
    public boolean TestPasserQvt(@PathVariable("idQvt") Long idQvt, @PathVariable("idU") Long idUser) {
    return iqvtService.TestPasserQvt(idQvt, idUser);
}


    }
