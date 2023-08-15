package com.example.first.services;

import com.example.first.exception.ResourceNotFoundException;
import com.example.first.model.SearchModel;
import com.example.first.model.Television;
import com.example.first.repository.TelevisionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;


import java.util.ArrayList;
import java.util.List;


@Service
public class TelevisionService {

    @Autowired
    private TelevisionRepository televisionRepository;

    public List<Television> getAll() {
        return televisionRepository.findAll();
    }

    public Television save(Television television){
        return televisionRepository.save(television);
    }


    public Television findById(Long id) {
        return televisionRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Television not exist with id :" + id));

    }
    public void delete(Long id) {
        Television television = findById(id);
        televisionRepository.delete(television);
    }


    public Page<Television> searchTelevisionPaging(SearchModel searchModel) {

        List<Sort.Order> orders = new ArrayList<>();

        int rowCount = 100;
        if (searchModel.getPagingModel().getPageSize() != null) {
            rowCount = Integer.valueOf(searchModel.getPagingModel().getPageSize());
        }
        int pageNumber=0;
        if(searchModel.getPagingModel().getPageIndex() != null ){
            pageNumber = Integer.valueOf(searchModel.getPagingModel().getPageIndex());
        }

        orders.add(new Sort.Order(getSortDirection(searchModel.getPagingModel().getSortDir()), searchModel.getPagingModel().getSortName()));

        Pageable pageable = PageRequest.of(pageNumber, rowCount, Sort.by(orders));

        Page<Television> models = televisionRepository.findAll(pageable);

        return models;
    }


    private Sort.Direction getSortDirection(String direction) {
        if (direction.equals("asc")) {
            return Sort.Direction.ASC;
        } else if (direction.equals("desc")) {
            return Sort.Direction.DESC;
        }
        return Sort.Direction.ASC;
    }



}
