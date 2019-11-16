package com.bushansirgur.controller;


import com.bushansirgur.model.Seance;
import com.bushansirgur.service.SeanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "*")
@RestController

@RequestMapping("/timeTable")
public class SeanceController {

    @Autowired
    private SeanceService seanceService;

    /*---Add new seance---*/
    @PostMapping("/seance")
    public ResponseEntity<?> save(@RequestBody Seance seance) {
        long id = seanceService.save(seance);
        return ResponseEntity.ok().body("New seance has been saved with ID:" + id);
    }

    /*---Get a seance by id---*/
    @GetMapping("/seance/{id}")
    public ResponseEntity<Seance> get(@PathVariable("id") long id) {
        Seance seance = seanceService.get(id);
        return ResponseEntity.ok().body(seance);
    }

    /*---get all books---*/
    @GetMapping("/seance")
    public ResponseEntity<List<Seance>> list() {
        List<Seance> books = seanceService.list();
        return ResponseEntity.ok().body(books);
    }

    /*---Update a seance by id---*/
    @PutMapping("/seance/{id}")
    public ResponseEntity<?> update(@PathVariable("id") long id, @RequestBody Seance seance) {
        seanceService.update(id, seance);
        return ResponseEntity.ok().body("seance has been updated successfully.");
    }

    /*---Delete a seance by id---*/
    @DeleteMapping("/seance/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") long id) {
        seanceService.delete(id);
        return ResponseEntity.ok().body("seance has been deleted successfully.");
    }
}