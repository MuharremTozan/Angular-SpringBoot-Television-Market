package com.example.first.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.example.first.model.SearchModel;
import com.example.first.services.TelevisionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.first.model.Television;


@RestController
@RequestMapping("/api/v1/televisions")
public class TelevisionController {

    @Autowired
    private TelevisionService televisionService;

    @GetMapping("/getAll")
    public List<Television> getAllTelevision(){
        return televisionService.getAll();
    }


    // create employee rest api (Tutorial)
    @PostMapping("/save")
    public Television createTelevision(@RequestBody Television television) {
        return televisionService.save(television);
    }

    @GetMapping("/getAll/{id}")
    public ResponseEntity<Television> getTelevisionById(@PathVariable Long id){
        Television television = televisionService.findById(id);
        return ResponseEntity.ok(television);
    }

    @PostMapping("/update")
    public ResponseEntity<Television> updateTelevision( @RequestBody Television televisionDetails) {
        Television updatedTelevision = televisionService.save(televisionDetails);
        return ResponseEntity.ok(updatedTelevision);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteTelevision(@PathVariable Long id){
        televisionService.delete(id);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }



    @PostMapping("/search")
    private ResponseEntity<Page<Television>> searchTelevisionPaging(@RequestBody SearchModel searchModel) {
        Page<Television> result = televisionService.searchTelevisionPaging(searchModel);
        return ResponseEntity.ok(result);
    }


}
