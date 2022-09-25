package com.tuise233.browserstart.controller;

import com.tuise233.browserstart.entity.UserResponse;
import com.tuise233.browserstart.entity.User;
import com.tuise233.browserstart.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserMapper userMapper;

    @GetMapping("")
    private String testGet(){
        return "Hello World";
    }

    @PostMapping("/register")
    private UserResponse register(@RequestBody User user){

        List<User> users = userMapper.findUserByUsername(user);
        if(users.size() > 0){
            return new UserResponse("fail", "该用户名已被人注册");
        }

        users = userMapper.findUserByEmail(user);
        if(users.size() > 0){
            return new UserResponse("fail", "该邮箱已被人注册");
        }

        user.setUserData("{}");
        Integer result = userMapper.registerUser(user);

        if(result < 1){
            return new UserResponse("fail", "注册失败");
        } else {
            return new UserResponse("success", "注册成功", user.getUsername());
        }
    }

    @PostMapping("/login")
    private UserResponse login(@RequestBody User user){
        if(user.getUsername() == "" || user.getPassword() == ""){
            return new UserResponse("fail", "登录参数错误");
        }

        List<User> users = userMapper.findUserByUsername(user);
        for(User u:users){
            if(user.getUsername().equals(u.getUsername())){
                if(user.getPassword().equals(u.getPassword())){
                    u.setPassword("");
                    return new UserResponse("success", "登录成功", u);
                } else {
                    return new UserResponse("fail", "登录失败，账号或密码有误");
                }
            }
        }
        return new UserResponse("fail", "登录失败，未找到该用户");
    }
}
