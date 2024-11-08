package pruebaAutentificacion.persistance.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import pruebaAutentificacion.persistance.entities.User;

public interface UserRepository extends JpaRepository<User,Integer> {
    User findByUserName(String username);
    User findUserById(Integer id);
}
