package back.libreria.repositories;

import back.libreria.entities.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository <Book,Integer> {
}
