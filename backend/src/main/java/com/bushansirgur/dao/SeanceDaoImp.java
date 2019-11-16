package com.bushansirgur.dao;

import java.util.List;

import com.bushansirgur.model.Seance;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;



@Repository
public class SeanceDaoImp implements SeanceDao {

    @Autowired
    private SessionFactory sessionFactory;

    @Override
    public long save(Seance seance) {
        sessionFactory.getCurrentSession().save(seance);
        return seance.getId();
    }

    @Override
    public Seance get(long id) {
        return sessionFactory.getCurrentSession().get(Seance.class, id);
    }

    @Override
    public List<Seance> list() {
        List list = sessionFactory.getCurrentSession().createQuery("from Seance").list();
        return list;
    }

    @Override
    public void update(long id, Seance seance) {
        Session session = sessionFactory.getCurrentSession();
        Seance seance2 = session.byId(Seance.class).load(id);
        seance2.setMatiere(seance.getMatiere());
        seance2.setJour(seance.getJour());
        session.flush();
    }

    @Override
    public void delete(long id) {
        Seance seance = sessionFactory.getCurrentSession().byId(Seance.class).load(id);
        sessionFactory.getCurrentSession().delete(seance);
    }

}
