package pruebaAutentificacion.controller;

import java.security.Principal;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;



@RestController
public class BasicAuthController {

    @PostMapping(path = "/login")
    public ResponseEntity<String> basicauth(Principal principal) {
        return ResponseEntity.ok().body("{\"resp\":\"ok\",\"id\":1}");
    }

}