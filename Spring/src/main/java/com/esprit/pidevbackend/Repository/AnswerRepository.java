package com.esprit.pidevbackend.Repository;


import com.esprit.pidevbackend.Domain.Answer;
import com.esprit.pidevbackend.Domain.TypeAnswer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Set;

@Repository
public interface AnswerRepository extends JpaRepository<Answer,Long> {
    @Query("select a from Answer a where a.question.id=:id")
    public List<Answer> findAllAnswerForQuestion(@Param("id") Long idQue);
    @Query("select a from Answer a join a.users u where u.id=:id ")
    public List<Answer> findAllAnswerByUser(@Param("id") Long idUser);

    @Query("select a from Answer a join a.users u  where a.question.qvt.id=:idQ and u.id=:id ")
    public Set<Answer> findAllAnswerAffecteToUser(@Param("id") Long idUser ,@Param("idQ")  Long idQvt);
    @Modifying
    @Transactional
    @Query(nativeQuery = true,value = "delete a from answer_users a where a.answers_id=?1 and a.users_id=?2")
    void DeleteAffectation(Long idAnswer,Long idUser);

@Query("select a.id from Answer a where  a.question.id=:id")
    public List<Long> findIdAnswerByTypeAnswer( @Param("id") Long id) ;

    @Query("select a.id from User a join a.answers t where t.id=:id")
    public Set<Long> findUserByAnswer(@Param("id") Long idAnswer);
}
