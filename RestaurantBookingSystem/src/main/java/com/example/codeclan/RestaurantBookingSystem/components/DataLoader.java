package com.example.codeclan.RestaurantBookingSystem.components;

import com.example.codeclan.RestaurantBookingSystem.models.Booking;
import com.example.codeclan.RestaurantBookingSystem.models.Seating;
import com.example.codeclan.RestaurantBookingSystem.repositories.BookingRepository;
import com.example.codeclan.RestaurantBookingSystem.repositories.SeatingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    SeatingRepository seatingRepository;

    @Autowired
    BookingRepository bookingRepository;

    public DataLoader() {

    }

    public void run(ApplicationArguments args) {
        Seating seating1 = new Seating(4);
        seatingRepository.save(seating1);

        Booking booking1 = new Booking(2, "18:00", "12/01/2001", "Jane Smith", "019298478", seating1);
        bookingRepository.save(booking1);
    }
}
