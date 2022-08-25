package com.esprit.pidevbackend.Repository;

import com.esprit.pidevbackend.Domain.Opinion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface OpinionRepository extends JpaRepository<Opinion,Long> {

    @Query("select o.rating from RatingForum  o where o.user.id=:id")
    int FindByUser(@Param("id") Long idUser);

}
