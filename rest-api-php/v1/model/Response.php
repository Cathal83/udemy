<?php

class Response{

    // Private variables to store response
    private $_success;
    private $_httpStatusCode;
    private $_messages = array();
    private $_data;
    // can cache a response to a request, but do not want to use with all responses (security tokens). Prevents same calls to database.
    private $_toCache = false;
    private $_responseData = array();

    // Getters and Setters
    public function setSuccess($success){
        // Dont add $ when using the variable. Only when declaring
        $this->_success = $success;
    }
    
    public function setHttpStatusCode($httpStatusCode){
        // Dont add $ when using the variable. Only when declaring
        $this->_httpStatusCode = $httpStatusCode;
    } 

    public function addMessage($message){
        // Dont add $ when using the variable. Only when declaring
        $this->_messages[] = $message;
    } 

    public function setData($data){
        // Dont add $ when using the variable. Only when declaring
        $this->_data = $data;
    } 

    public function toCache($toCache){
        // Dont add $ when using the variable. Only when declaring
        $this->_toCache = $toCache;
    } 

    public function send(){
        // Always return a json response
        header('Content-type: application/json;charset=utf-8');

        if($this->_toCache == true){
            header('Cache-control: max-age=60');
        } else {
            header('Cache-control: no-cahce, no-store');
        }

        if(($this->_success !== false && $this->_success !== true) || !is_numeric($this->_httpStatusCode)){
            http_response_code(500);
            $this->_responseData['statusCode'] = 500;
            $this->_responseData['success'] = false;
            $this->addMessage('Response creation error');
            $this->_responseData['messages'] = $this->_messages;
        } else {
            http_response_code($this->_httpStatusCode);
            $this->_responseData['statusCode'] = $this->_httpStatusCode;
            $this->_responseData['success'] = $this->_success;
            $this->_responseData['messages'] = $this->_messages;
            $this->_responseData['data'] = $this->_data;
        }

        // Turns the response data into json    
        echo json_encode($this->_responseData);
    }

}