package com.bushansirgur.service;

import com.bushansirgur.dao.SeanceDao;
import com.bushansirgur.model.Seance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
@Service
@Transactional(readOnly = true)

public class SeanceSerciveImp implements SeanceService{
 
        @Autowired
        private SeanceDao seanceDao;

        @Transactional
        @Override
        public long save(Seance seance) {
            return seanceDao.save(seance);
        }

        @Override
        public Seance get(long id) {
            return seanceDao.get(id);
        }

        @Override
        public List<Seance> list() {
            return seanceDao.list();
        }

        @Transactional
        @Override
        public void update(long id, Seance Seance) {
            seanceDao.update(id, Seance);
        }

        @Transactional
        @Override
        public void delete(long id) {
            seanceDao.delete(id);
        }

    }


