package com.bushansirgur.service;

import com.bushansirgur.model.Seance;

import java.util.List;

public interface SeanceService {
    long save(Seance Seance);
    Seance get(long id);
    List<Seance> list();
    void update(long id, Seance Seance);
    void delete(long id);
}
