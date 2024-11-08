package pruebaAutentificacion.controller;

import java.security.Principal;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import pruebaAutentificacion.persistance.entities.User;
import pruebaAutentificacion.persistance.repositories.UserRepository;


@RestController
public class BasicAuthController {
        @Autowired
        private UserRepository userRepository;


    @PostMapping(path = "/login")
    public ResponseEntity<String> basicauth(Principal principal) {
        return ResponseEntity.ok().body("{\"resp\":\"ok\"}");
    }
    @GetMapping(path = "/users")
    public List<User> getUsers (){
        List<User> users = userRepository.findAll();
        return users;
    }


}