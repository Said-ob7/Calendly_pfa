package ma.emsi.calendly_backend.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToOne;
import lombok.Data;

@Entity @Data
public class OneToOneEvent extends Event{
    @OneToOne
    private User guest;
}
