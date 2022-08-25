package com.esprit.pidevbackend.Service;

import com.esprit.pidevbackend.Domain.RatingForum;

public interface IRatingService {
    void AjouterRatingToUser(RatingForum r , Long idUser);
    Float calculRating();
    int findRatingByUser(Long idUser);
}
