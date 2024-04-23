package ma.emsi.calendly_backend.repositories;

import ma.emsi.calendly_backend.entities.ManyHostsOneGuestEvent;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ManyHostsOneGuestEventRepository extends JpaRepository<ManyHostsOneGuestEvent, Long> {
}
