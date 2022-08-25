package com.esprit.pidevbackend.Service;

import com.esprit.pidevbackend.Domain.RatingForum;
import com.esprit.pidevbackend.Domain.User;
import com.esprit.pidevbackend.Repository.RatingRepository;
import com.esprit.pidevbackend.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class RatingServiceImpl implements IRatingService {
    @Autowired
    RatingRepository ratingRepository;
    @Autowired
    UserRepository accountRepo;
    @Override
    public void AjouterRatingToUser(RatingForum r, Long idUser) {
        ratingRepository.save(r);
        User user =accountRepo.findById(idUser).orElse(null);
        user.setRatingForum(r);

    }

    @Override
    public Float calculRating() {
        return (ratingRepository.calculRatingSUM()/Float.valueOf(ratingRepository.calculRatingCOUNT()));
    }

    @Override
    public int findRatingByUser(Long idUser) {
        return ratingRepository.findRatingByUser(idUser);
    }

}
