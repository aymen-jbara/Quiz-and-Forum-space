package com.esprit.pidevbackend.Service;

import com.esprit.pidevbackend.Domain.*;
import com.esprit.pidevbackend.Repository.QVTRepsitory;
import com.esprit.pidevbackend.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Set;

@Service
@Transactional

public class QVTServiceImpl implements IQVTService {
    @Autowired
     QVTRepsitory qvtRepsitory;
    @Autowired
     IRQuizzService irQuizzSevice;
    @Autowired
    UserRepository userRepository;
    @Override
    public void AddQVT(QVT e) {
        qvtRepsitory.save(e);
        RQuizz z = new RQuizz();
        irQuizzSevice.AddRQuizzToQuizz(z,e.getId());
    }

    @Override
    public List<QVT> getAllQVT() {
        return qvtRepsitory.findAll();
    }

    @Override
    public void DeleteQVT(Long id) {
        qvtRepsitory.deleteById(id);
    }

    @Override
    public void UpdateQVT(QVT e) {
        qvtRepsitory.save(e);
    }

    @Override
    public void ConseilsPersonnalisesQuiz(Long idQuizz) {

        RQuizz rQuizz=irQuizzSevice.SelectRquizz(idQuizz);
        List<Long> a=qvtRepsitory.ListIdAnswerAffecteToUser();
        int BAD = 0;
        int Good = 0;
        int Ex = 0;
        for (Long t :a) {
            List<TypeAnswer> typeAnswers = qvtRepsitory.ListeAnswersQuizz(idQuizz, t);

            for (TypeAnswer type : typeAnswers) {

                if (type == TypeAnswer.BAD) {
                    BAD++;
                } else if (type == TypeAnswer.GOOD) {
                    Good++;
                } else if (type == TypeAnswer.EXCELLENT) {
                    Ex++;
                }
            }
            int total = BAD + Good + Ex;
            if (total == 0) {
                total = 1;
            }
            int PourCentageBAD = (BAD * 100) / total;
            System.out.println(BAD / total);
            int PourCentageGood = (Good * 100) / total;
            int PourCentageEX = (Ex * 100) / total;

            rQuizz.setPourCentageBAD(PourCentageBAD);
            rQuizz.setPourCentageGood(PourCentageGood);
            rQuizz.setPourCentageEx(PourCentageEX);

            String Remarque = "null";
            Note note = Note.C;
            if (PourCentageGood <= PourCentageEX && PourCentageBAD <= PourCentageEX) {
                Remarque = "R??sultat remarquables , avec seulement quelques insuffiances mineures";
                note = Note.A;

            } else if (PourCentageBAD <= PourCentageGood && PourCentageGood > PourCentageEX) {
                Remarque = "R??sultat G??n??ralement Bon , malgr?? certaines insuffiances notables";
                note = Note.B;

            } else {
                Remarque = "Un travail suppl??mentaire consid??rable est n??cessaire";
                note = Note.C;
            }
            rQuizz.setNote(note);
            rQuizz.setRemarque(Remarque);
            rQuizz.setTotalResponse(total);

        }
    }

    @Override
    public QVT GetQVTById(Long id) {
        return qvtRepsitory.findById(id).orElse(null);
    }

    @Override
    public User FindUserByUserName(String username) {
        return qvtRepsitory.FindUser(username);
    }

    @Override
    public boolean TestPasserQvt(Long idQvt, Long idUser) {
            Set<Long> as=qvtRepsitory.TestPasserQct(idQvt, idUser);
            for (Long a :as){
                if (a==idQvt){
                    return true ;
                }
            }
            return false;
    }




}
