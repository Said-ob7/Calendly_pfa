package ma.emsi.calendly_backend.services;

import ma.emsi.calendly_backend.entities.Meeting;
import ma.emsi.calendly_backend.repositories.MeetingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Optional;

@Service
public class MeetingService {
    private final MeetingRepository meetingRepository;

    @Autowired
    public MeetingService(MeetingRepository meetingRepository) {
        this.meetingRepository = meetingRepository;
    }
    public List<Meeting> getAllMeetings() {
        return meetingRepository.findAll();
    }

    public Optional<Meeting> getMeetingById(Long id) {
        return meetingRepository.findById(id);
    }
    public Meeting createMeeting(Meeting meeting) {
        // Call Zoom API to create a meeting and retrieve meeting link
        String zoomApiKey = "your-zoom-api-key";
        String zoomApiSecret = "your-zoom-api-secret";
        String zoomCreateMeetingUrl = "https://api.zoom.us/v2/users/me/meetings"; // Example URL, adjust as needed

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response = restTemplate.postForEntity(zoomCreateMeetingUrl, null, String.class);

        if (response.getStatusCode().is2xxSuccessful()) {
            // Parse response to extract meeting link
            String meetingLink = extractMeetingLinkFromResponse(response.getBody());

            // Set meeting link to the Meeting object
            meeting.setMeetingLink(meetingLink);

            // Save the meeting to your database
            return meetingRepository.save(meeting);
        } else {
            // Handle API error
            throw new RuntimeException("Failed to create meeting");
        }
    }

    public Meeting updateMeeting(Long id, Meeting updatedMeeting) {
        updatedMeeting.setId(id);

        // Implement logic to update meeting details in Zoom (e.g., create a new meeting with updated details)
        String zoomApiKey = "your-zoom-api-key";
        String zoomApiSecret = "your-zoom-api-secret";
        String zoomUpdateMeetingUrl = "https://api.zoom.us/v2/meetings/{meetingId}"; // Example URL, adjust as needed

        // Use RestTemplate or another HTTP client to make a request to Zoom API
        // Update meeting details (e.g., topic, start time, duration, etc.)

        // After updating in Zoom, you may update your local database with the new details
        return meetingRepository.save(updatedMeeting);
    }

    public void deleteMeeting(Long id) {
        // Implement logic to delete the meeting in Zoom
        String zoomApiKey = "your-zoom-api-key";
        String zoomApiSecret = "your-zoom-api-secret";
        String zoomDeleteMeetingUrl = "https://api.zoom.us/v2/meetings/{meetingId}"; // Example URL, adjust as needed

        // Use RestTemplate or another HTTP client to make a request to Zoom API
        // Delete the meeting by its ID

        // After deleting in Zoom, you can delete the meeting from your local database
        meetingRepository.deleteById(id);
    }

    private String extractMeetingLinkFromResponse(String responseBody) {
        // Parse JSON response to extract meeting link
        // Implement this method based on the structure of the Zoom API response
        return null; // Placeholder, replace with actual implementation
    }
}
