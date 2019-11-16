package com.bushansirgur.dao;

import java.util.List;

import com.bushansirgur.model.Seance;

public interface SeanceDao {

    long save(Seance seance);

    Seance get(long id);

    List<Seance> list();

    void update(long id, Seance seance);

    void delete(long id);

}
