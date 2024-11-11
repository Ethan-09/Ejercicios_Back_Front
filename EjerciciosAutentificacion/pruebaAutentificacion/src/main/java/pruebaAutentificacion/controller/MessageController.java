package pruebaAutentificacion.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pruebaAutentificacion.persistance.entities.Message;
import pruebaAutentificacion.persistance.entities.MessagesUserDTO;
import pruebaAutentificacion.persistance.entities.User;
import pruebaAutentificacion.persistance.repositories.MessageRepository;
import pruebaAutentificacion.persistance.repositories.UserRepository;

import java.util.List;

@RestController
public class MessageController {
    @Autowired
    private MessageRepository messageRepository;

    @Autowired
    private UserRepository userRepository;

    @GetMapping(path = "/messages")
    public List<Message> getMessages (){
        List<Message> messages = messageRepository.findAll();
        return messages;
    }
    @GetMapping(path ="/messages/{id}")
    public List<Message> getMessagesByUserId(@PathVariable Integer id){
        // TODO por que aqui no vienen los datos del usario que recibe
        List<Message> messages = messageRepository.getMessagesByUserReceiverId(id);
        return messages;
    }
    @PostMapping("/messages")
    public ResponseEntity<String> postMessage(@RequestBody MessagesUserDTO msg) {

        User userSender = userRepository.findUserById(msg.getUserSenderId());
        User userReceiver = userRepository.findUserById(msg.getUserReceiverId());

        Message message = new Message();
        message.setContent(msg.getContent());
        message.setUserReceiver(userReceiver);
        message.setUserSender(userSender);
        messageRepository.save(message);
        return ResponseEntity.ok("Mensaje enviado");
    }
}
