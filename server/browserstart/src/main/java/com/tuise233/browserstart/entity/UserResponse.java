package com.tuise233.browserstart.entity;

import lombok.Data;

@Data
public class UserResponse {
    private String type;
    private String message;
    private User entity;

    public UserResponse(String type, String message, User entity){
        this.type = type;
        this.message = message;
        this.entity = entity;
    }

    public UserResponse(String type, String message, String username){
        this.type = type;
        this.message = message;
        this.entity = new User(username);
    }

    public UserResponse(String type, String message){
        this.type = type;
        this.message = message;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public User getEntity(){ return entity; }

    public void setEntity(User entity) { this.entity = entity; }
}
