package futbol.back.controller;

import futbol.back.entities.Equipo;
import futbol.back.entities.Jugador;
import futbol.back.repository.EquipoRepository;
import futbol.back.repository.JugadorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/equipos")
public class EquipoController {

    @Autowired
    private EquipoRepository equipoRepository;

    @GetMapping
    public List<Equipo> getLibros(){
        List<Equipo> equipos = equipoRepository.findAll();
        return equipos;
    }
}
