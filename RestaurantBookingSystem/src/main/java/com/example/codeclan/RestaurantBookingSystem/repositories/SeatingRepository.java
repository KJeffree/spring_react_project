package com.example.codeclan.RestaurantBookingSystem.repositories;

import com.example.codeclan.RestaurantBookingSystem.models.Seating;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
@Repository
public interface SeatingRepository extends JpaRepository<Seating, Long> {
}
