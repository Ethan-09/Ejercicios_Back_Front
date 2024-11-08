package futbol.back.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="jugador")
public class Jugador {
	@Id
	private int jugadorCod;
	private int equipoCod;
	private String nombre;
	private String apellidos;
	private int demarcacion;
	private int nacionalidad;
	private int numeroCamiseta;
	private int calidad;
	private int velocidad;
	private int vision;
	private String nombre_jugador;
	private String descripcion;
	
	public int getEquipoCod() {
		return equipoCod;
	}
	public void setEquipoCod(int equipoCod) {
		this.equipoCod = equipoCod;
	}
	public int getJugadorCod() {
		return jugadorCod;
	}
	public void setJugadorCod(int jugadorCod) {
		this.jugadorCod = jugadorCod;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getApellidos() {
		return apellidos;
	}
	public void setApellidos(String apellidos) {
		this.apellidos = apellidos;
	}
	public int getDemarcacion() {
		return demarcacion;
	}
	public void setDemarcacion(int demarcacion) {
		this.demarcacion = demarcacion;
	}
	public int getNacionalidad() {
		return nacionalidad;
	}
	public void setNacionalidad(int nacionalidad) {
		this.nacionalidad = nacionalidad;
	}
	public int getNumeroCamiseta() {
		return numeroCamiseta;
	}
	public void setNumero_camiseta(int numeroCamiseta) {
		this.numeroCamiseta = numeroCamiseta;
	}
	public int getCalidad() {
		return calidad;
	}
	public void setCalidad(int calidad) {
		this.calidad = calidad;
	}
	public int getVelocidad() {
		return velocidad;
	}
	public void setVelocidad(int velocidad) {
		this.velocidad = velocidad;
	}
	public int getVision() {
		return vision;
	}
	public void setVision(int vision) {
		this.vision = vision;
	}
	public String getNombre_jugador() {
		return nombre_jugador;
	}
	public void setNombre_jugador(String nombre_jugador) {
		this.nombre_jugador = nombre_jugador;
	}
	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	
	
}
