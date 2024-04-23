package ma.emsi.calendly_backend.repositories;

import ma.emsi.calendly_backend.entities.Meeting;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MeetingRepository extends JpaRepository<Meeting, Long> {
    @Override
    List<Meeting> findAll();
}
