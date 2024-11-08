package futbol.back.controller;

import futbol.back.entities.Jugador;
import futbol.back.repository.JugadorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/jugadores")
public class JugadorController {

    @Autowired
    private JugadorRepository jugadorRepository;

    @GetMapping
    public List<Jugador> getLibros(){
        List<Jugador> jugadores = jugadorRepository.findAll();
        return jugadores;
    }
    @GetMapping("/{equipoId}")
    public List<Jugador> getJugadoresPorEquipo(@PathVariable Integer equipoId) {
        return jugadorRepository.findJugadorByEquipoCod(equipoId);
    }
}

