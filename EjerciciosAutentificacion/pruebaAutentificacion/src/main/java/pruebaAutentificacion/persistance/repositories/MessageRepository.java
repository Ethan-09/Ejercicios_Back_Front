package pruebaAutentificacion.persistance.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import pruebaAutentificacion.persistance.entities.Message;

import java.util.List;

public interface MessageRepository extends JpaRepository<Message, Integer> {
    @Query("SELECT m FROM Message m WHERE m.userReceiver.id = :id")
    List<Message> getMessagesByUserReceiverId(@Param("id") int id);

}
