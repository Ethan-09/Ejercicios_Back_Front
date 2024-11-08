package pruebaAutentificacion.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import pruebaAutentificacion.persistance.entities.Message;
import pruebaAutentificacion.persistance.repositories.MessageRepository;

import java.util.List;

@RestController
public class MessageController {
    @Autowired
    private MessageRepository messageRepository;

    @GetMapping(path = "/messages")
    public List<Message> getMessages (){
        List<Message> messages = messageRepository.findAll();
        return messages;
    }
    @GetMapping(path ="/users/{id}")
    public List<Message> getMessagesByUserId(Integer id){
        List<Message> messages = messageRepository.getMessagesByUserReceiverId(id);
        return messages;
    }
}
