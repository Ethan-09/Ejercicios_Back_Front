package pruebaAutentificacion.persistance.entities;

import pruebaAutentificacion.persistance.repositories.MessageRepository;
import pruebaAutentificacion.persistance.repositories.UserRepository;

public class MessagesUserDTO {
    private int userReceiverId;
    private int userSenderId;
    private String content;

    public int getUserReceiverId() {
        return userReceiverId;
    }

    public void setUserReceiverId(int userReceiverId) {
        this.userReceiverId = userReceiverId;
    }

    public int getUserSenderId() {
        return userSenderId;
    }

    public void setUserSenderId(int userSenderId) {
        this.userSenderId = userSenderId;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    private void sendMessage(int userSenderId, int userReceiverId, String content){
    }
}
