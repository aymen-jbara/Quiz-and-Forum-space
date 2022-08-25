package com.esprit.pidevbackend.Web;


import com.esprit.pidevbackend.Domain.ConseilsUser;
import com.esprit.pidevbackend.Service.IConseilsService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("ConseilUser")

public class ConseilController {
    @Autowired
    IConseilsService iConseilsService ;
   // @Secured({"ROLE_USER","ROLE_ADMIN"})

    @GetMapping("Get/{idU}")
    public ConseilsUser ConseilsPersonnalisesUser( @PathVariable("idU") Long idUser){
        iConseilsService.AddConseilToUser(idUser);
        return iConseilsService.ConseilsPersonnalisesUser( idUser);
    }
   // @Secured({"ROLE_USER","ROLE_ADMIN"})

    @PostMapping("AddConseilToUser/{id}")
    public void AddConseilToUser(@PathVariable("id") Long idU){
        iConseilsService.AddConseilToUser(idU);
    }
}
