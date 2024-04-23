package ma.emsi.calendly_backend.repositories;

import ma.emsi.calendly_backend.entities.OneToOneEvent;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OneToOneEventRepository extends JpaRepository<OneToOneEvent, Long> {
    @Override
    List<OneToOneEvent> findAll();
}
