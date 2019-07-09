package com.example.codeclan.RestaurantBookingSystem;

import com.example.codeclan.RestaurantBookingSystem.models.Booking;
import com.example.codeclan.RestaurantBookingSystem.models.Seating;
import com.example.codeclan.RestaurantBookingSystem.repositories.BookingRepository;
import com.example.codeclan.RestaurantBookingSystem.repositories.SeatingRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class RestaurantBookingSystemApplicationTests {

	@Autowired
	SeatingRepository seatingRepository;

	@Autowired
	BookingRepository bookingRepository;

	@Test
	public void contextLoads() {
	}

	@Test
	public void canAddSeating(){
		Seating seating1 = new Seating(4);
		seatingRepository.save(seating1);
	}

	@Test
	public void canAddSeatingAndBooking() {
		Seating seating1 = new Seating(4);
		seatingRepository.save(seating1);

		Booking booking1 = new Booking(2, "18:00", "12/01/2001", "Jane Smith", "019298478", seating1);
		bookingRepository.save(booking1);
	}

}
