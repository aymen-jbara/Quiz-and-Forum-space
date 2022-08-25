package com.esprit.pidevbackend.Repository;

import com.esprit.pidevbackend.Domain.CommentPub;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentPubRepository extends JpaRepository<CommentPub,Long> {
    @Query("select count(a.id) from CommentPub a where a.user.id=:id")
    int CountAllComment(@Param("id") Long idUser);
    @Query("select count(a.id) from CommentPub a where a.user.id=:id and a.IsBlocked=true")
    int CountCommentBlocked(@Param("id") Long idUser);
    @Query("select count(a.id) from CommentPub a where a.publication.id=:idPub and a.IsBlocked=false")
    int CountComment(@Param("idPub")Long idPub);
    @Query("select c from CommentPub c where c.publication.id=:idPub and c.IsBlocked=false")
    public List<CommentPub> getAllCommentByPub(@Param("idPub")Long idPub);
}
