package ma.emsi.calendly_backend.repositories;

import ma.emsi.calendly_backend.entities.OneHostManyGuestsEvent;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OneHostManyGuestsEventRepository extends JpaRepository<OneHostManyGuestsEvent, Long> {
}
