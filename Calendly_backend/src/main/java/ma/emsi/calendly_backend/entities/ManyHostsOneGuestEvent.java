package ma.emsi.calendly_backend.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

import java.util.ArrayList;
import java.util.List;

@Entity
public class ManyHostsOneGuestEvent extends Event {
    @ManyToOne
    private User creator;
    @OneToMany
    private List<User> collaborators;

    @ManyToOne
    @JoinColumn(name = "guest_id")
    private User guest;

}
