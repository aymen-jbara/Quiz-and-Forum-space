package com.esprit.pidevbackend.Repository;

import com.esprit.pidevbackend.Domain.RatingForum;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface RatingRepository extends JpaRepository<RatingForum,Long> {
    @Query("select r.rating from RatingForum r where r.user.id=:id ")
    int findRatingByUser(@Param("id") Long idUser);
    @Query(value = "select count (r) from RatingForum r")
    public int calculRatingCOUNT();
    @Query(value = "select SUM (r.rating) from RatingForum r")
    public int calculRatingSUM();


    }
