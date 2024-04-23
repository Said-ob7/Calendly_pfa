package ma.emsi.calendly_backend.services;

import ma.emsi.calendly_backend.entities.OneToOneEvent;
import ma.emsi.calendly_backend.repositories.OneToOneEventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Optional;

@Service
public class OneToOneEventService {
    private final OneToOneEventRepository eventRepository;

    @Autowired
    public OneToOneEventService(OneToOneEventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }

    public List<OneToOneEvent> getAllEvents() {
        return eventRepository.findAll();
    }

    public Optional<OneToOneEvent> getEventById(Long id) {
        return eventRepository.findById(id);
    }

    public OneToOneEvent createEvent(OneToOneEvent event) {
        // Generate Zoom meeting link
        String zoomMeetingLink = generateZoomMeetingLink(event);
        event.setEventLink(zoomMeetingLink);

        // Save the event
        return eventRepository.save(event);
    }

    public OneToOneEvent updateEvent(Long id, OneToOneEvent updatedEvent) {
        updatedEvent.setId(id);
        return eventRepository.save(updatedEvent);
    }

    public void deleteEvent(Long id) {
        eventRepository.deleteById(id);
    }

    private String generateZoomMeetingLink(OneToOneEvent event) {
        // Call Zoom API to create a meeting and retrieve meeting link
        String zoomApiKey = "your-zoom-api-key";
        String zoomApiSecret = "your-zoom-api-secret";
        String zoomCreateMeetingUrl = "https://api.zoom.us/v2/users/me/meetings"; // Example URL, adjust as needed

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response = restTemplate.postForEntity(zoomCreateMeetingUrl, null, String.class);

        if (response.getStatusCode().is2xxSuccessful()) {
            // Parse response to extract meeting link
            String meetingLink = extractMeetingLinkFromResponse(response.getBody());
            return meetingLink;
        } else {
            // Handle API error
            throw new RuntimeException("Failed to create Zoom meeting");
        }
    }

    private String extractMeetingLinkFromResponse(String responseBody) {
        // Parse JSON response to extract meeting link
        // Implement this method based on the structure of the Zoom API response
        return null; // Placeholder, replace with actual implementation
    }
}
