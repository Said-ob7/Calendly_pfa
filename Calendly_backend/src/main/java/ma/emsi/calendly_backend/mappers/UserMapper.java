package ma.emsi.calendly_backend.mappers;

import ma.emsi.calendly_backend.dtos.SignUpDto;
import ma.emsi.calendly_backend.dtos.UserDto;
import ma.emsi.calendly_backend.entities.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserDto toUserDto(User user);

    @Mapping(target = "password", ignore = true)
    User signUpToUser(SignUpDto signUpDto);

}