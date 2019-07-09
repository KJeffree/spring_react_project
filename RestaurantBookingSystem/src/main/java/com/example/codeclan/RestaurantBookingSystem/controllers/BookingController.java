package com.example.codeclan.RestaurantBookingSystem.controllers;

import com.example.codeclan.RestaurantBookingSystem.models.Booking;
import com.example.codeclan.RestaurantBookingSystem.repositories.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value="/bookings")
public class BookingController {
    @Autowired
    BookingRepository bookingRepository;

    @GetMapping(value="/all")
    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }
}
