package com.esprit.pidevbackend.Domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.Set;

@Entity

@NoArgsConstructor
@AllArgsConstructor
public class QVT implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String description;
    private Date date;
    private int nbrQuestion;
    private int nbrQuestionMAX;
    private boolean IsBloced;
    @OneToMany(mappedBy = "qvt")
    @JsonIgnore
    private Set<Question> questions;
    @OneToOne
    @JsonIgnore

    private RQuizz rQuizzes;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public int getNbrQuestion() {
        return nbrQuestion;
    }

    public void setNbrQuestion(int nbrQuestion) {
        this.nbrQuestion = nbrQuestion;
    }

    public int getNbrQuestionMAX() {
        return nbrQuestionMAX;
    }

    public void setNbrQuestionMAX(int nbrQuestionMAX) {
        this.nbrQuestionMAX = nbrQuestionMAX;
    }

    public boolean isBloced() {
        return IsBloced;
    }

    public void setBloced(boolean bloced) {
        IsBloced = bloced;
    }

    public Set<Question> getQuestions() {
        return questions;
    }

    public void setQuestions(Set<Question> questions) {
        this.questions = questions;
    }

    public RQuizz getrQuizzes() {
        return rQuizzes;
    }

    public void setrQuizzes(RQuizz rQuizzes) {
        this.rQuizzes = rQuizzes;
    }
}
