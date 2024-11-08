package futbol.back.entities;

import java.util.List;

public class JugadorEquipoDTO {

    private List<Jugador> jugadores;
    public JugadorEquipoDTO(List<Jugador> jugadores) {
        this.jugadores = jugadores;
    }

    public List<Jugador> getJugadores() {
        return jugadores;
    }
    public List<Jugador> getJugadoresPorEquipo(Integer equipoId){

        return jugadores;
    }

}
