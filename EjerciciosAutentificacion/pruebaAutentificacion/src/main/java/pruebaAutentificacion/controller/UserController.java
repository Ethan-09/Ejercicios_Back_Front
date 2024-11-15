package pruebaAutentificacion.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import pruebaAutentificacion.persistance.entities.User;
import pruebaAutentificacion.persistance.repositories.UserRepository;

import java.util.List;

@RestController
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping(path = "/users")
    public List<User> getUsers (){
        List<User> users = userRepository.findAll();
        return users;
    }
    @GetMapping(path ="/users/{id}")
    public User getUserById(Integer id){
        User user = userRepository.findUserById(id);
        return user;
    }
}
