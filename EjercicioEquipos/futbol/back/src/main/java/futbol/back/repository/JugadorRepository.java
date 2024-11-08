package futbol.back.repository;

import futbol.back.entities.Jugador;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface JugadorRepository extends JpaRepository<Jugador, Integer> {
    List<Jugador> findJugadorByEquipoCod(int equipoId);
}
