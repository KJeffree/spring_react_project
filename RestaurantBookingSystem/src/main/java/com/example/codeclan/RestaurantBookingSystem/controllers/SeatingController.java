package com.example.codeclan.RestaurantBookingSystem.controllers;

import com.example.codeclan.RestaurantBookingSystem.models.Seating;
import com.example.codeclan.RestaurantBookingSystem.repositories.SeatingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value="/seatings")
public class SeatingController {
    @Autowired
    SeatingRepository seatingRepository;

    @GetMapping(value="/all")
    public List<Seating> getAllSeatings() {
        return seatingRepository.findAll();
    }
}
