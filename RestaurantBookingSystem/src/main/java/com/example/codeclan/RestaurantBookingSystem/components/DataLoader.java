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

        Seating seating2 = new Seating(2);
        seatingRepository.save(seating2);

        Seating seating3 = new Seating(6);
        seatingRepository.save(seating3);

        Seating seating4 = new Seating(4);
        seatingRepository.save(seating4);

        Booking booking1 = new Booking(2, "18:00", "2019-07-10", "Jane Smith", "019298478", seating1);
        bookingRepository.save(booking1);
    }
}
