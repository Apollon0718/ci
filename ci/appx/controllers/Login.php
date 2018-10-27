<?php
header('Access-Control-Allow-Origin: *');
require(APPPATH.'/libraries/REST_Controller.php');
 
class Login extends REST_Controller{
    
    public function __construct()
    {
        parent::__construct();

        $this->load->model('register');
    }

    //API - client sends isbn and on valid isbn book information is sent back
	function dologin_get(){
        $username  = $this->get('username');
        $password  = $this->get('password');
        
        if(!$username && !$password){
            $this->response("Please fill required fields", 400);
            exit;
        }
        $result = $this->register->getuser($username,$password);
        if($result){
            $this->response($result, 200); 
            exit;
        } 
        else{
             $this->response("Please Enter valid username and password!!", 401);
            exit;
        }
    }
	


}