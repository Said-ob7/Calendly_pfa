package ma.emsi.calendly_backend.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;

import java.util.List;

@Entity
public class OneHostManyGuestsEvent extends Event{
    @OneToMany(mappedBy = "event")
    private List<User> guests;
}
