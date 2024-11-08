package hospital.back.controller;


import hospital.back.entity.Patient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import hospital.back.repository.PatientRepository;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/patients")
public class PatientController {

    @Autowired
    private PatientRepository patientRepository;

    @PostMapping("/")
    public void createPatient(@RequestBody Patient patient){
        patientRepository.save(patient);
    }
    @DeleteMapping("/{id}")
    public void deletePatient(@PathVariable("id") Integer id) {
        Patient i = new Patient();
        i.setId(id);
        i.setId(id);
        patientRepository.delete(i);
    }
    @GetMapping
    public List<Patient> selectPatients() {
        List<Patient> patient = patientRepository.findAll();
        return patient;
    }
    @PutMapping("/{id}")
    public void updatePatient(@RequestBody Patient patient, @PathVariable("id")Integer id) {
        patient.setId(id);
        patientRepository.save(patient);
    }

}
