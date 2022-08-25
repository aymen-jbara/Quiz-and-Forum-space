package com.esprit.pidevbackend.Web;

import com.esprit.pidevbackend.Domain.RatingForum;
import com.esprit.pidevbackend.Domain.User;
import com.esprit.pidevbackend.Service.IRatingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("Rating")
public class RatingForumController {
    @Autowired
    IRatingService iRatingService;

    @PutMapping("/Put/{id}")
    void AjouterRatingToUser(@RequestBody RatingForum r,@PathVariable("id") Long idUser){
        iRatingService.AjouterRatingToUser(r,idUser);
    }
    @GetMapping("Get/{id}")
    public int findRatingByUser(@PathVariable("id") Long idUser) {
        return iRatingService.findRatingByUser(idUser);
    }
    @GetMapping("GetCalcul")
    public Float calculRating() {
        return iRatingService.calculRating();
    }


    }
