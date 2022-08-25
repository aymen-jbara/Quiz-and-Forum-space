package com.esprit.pidevbackend.Service;

import com.esprit.pidevbackend.Domain.QVT;
import com.esprit.pidevbackend.Domain.User;

import java.util.List;
import java.util.Set;

public interface IQVTService {

    public void AddQVT(QVT e);
    public List<QVT> getAllQVT();
    public void DeleteQVT(Long id);
    public void UpdateQVT(QVT e);
    public void ConseilsPersonnalisesQuiz(Long idQuizz);
    QVT GetQVTById(Long id);
    User FindUserByUserName(String username);
    boolean TestPasserQvt (Long idQvt, Long idUser);
}
