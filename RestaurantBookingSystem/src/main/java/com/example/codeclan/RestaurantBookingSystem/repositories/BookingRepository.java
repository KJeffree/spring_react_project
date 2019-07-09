package com.example.codeclan.RestaurantBookingSystem.repositories;

import com.example.codeclan.RestaurantBookingSystem.models.Booking;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {
}
