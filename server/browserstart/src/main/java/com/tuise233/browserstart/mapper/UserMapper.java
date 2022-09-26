package com.tuise233.browserstart.mapper;

import com.tuise233.browserstart.entity.User;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

@Mapper
public interface UserMapper {
    @Insert("INSERT INTO users (username, password, email, userData) VALUES (#{username}, #{password}, #{email}, #{userData})")
    Integer registerUser(User user);

    @Select("SELECT * FROM users WHERE username = #{username}")
    List<User> findUserByUsername(User user);

    @Select("SELECT * FROM users WHERE email = #{email}")
    List<User> findUserByEmail(User user);

    @Update("UPDATE users SET userData = #{userData} WHERE username = #{username}")
    Integer updateUserData(User user);
}
