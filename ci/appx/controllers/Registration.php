<?php
//header('Access-Control-Allow-Origin: *');
require(APPPATH.'/libraries/REST_Controller.php');
 
class Registration extends REST_Controller{
    
    public function __construct()
    {
        parent::__construct();
		header('Access-Control-Allow-Origin: *');
        header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
		//$this->load->library('../controllers/email');
        $this->load->model('register');
    }    
     
    //API - create a new book item in database.
    function doregister_post(){

         $firstname      = $this->post('firstname');
         $lastname     = $this->post('lastname');
         $username    = $this->post('username');
         $email  = $this->post('email');
         $password  = $this->post('password');
         $confirmpassword  = $this->post('confirmpassword');
		 /*$result = array('success'=>true);
		$this->response($result, 200);  */
		$regdata = $this->register->getuserByemail($email);
		if($regdata['reg_id']>0){
			$this->response("Email already exist",404);
		}else{			
			if($confirmpassword==$password){
				 if(!$firstname || !$lastname || !$username || !$confirmpassword){
						$this->response("Please fill required fields", 400);

				 }else{

					$result = $this->register->add(array("firstname"=>$firstname, "lastname"=>$lastname, "username"=>$username, "email"=>$email, "password"=>$confirmpassword, "access"=>0));

					if($result === 0){

						$this->response("Your information could not be saved. Try again.", 404);

					}else{
						
						$this->signupemail($email);
						//$result = array("success"=>true);
						$this->response("success", 200); 			   
					}
				}
			}else{
				$this->response("Mismatch in password",404);
			}
		}
         
    }
	//API -  Fetch All books
    function all_get(){
        $result = $this->register->getall();
        if($result){
            $this->response($result, 200); 
        } 
        else{
            $this->response("No record found", 404);
        }
    }    
	function signupemail($to){
		 //send confirm mail
		 $id=$to;
		 $subject = 'Verify email address';  //email subjectink to the user, inside message body
        $message = 'Dear User,<br><br> Please click on the below activation link to verify your email address<br><br>
        <a class="btn btn-success" href=\'http://192.168.0.113/emailverifier/email/loginaccess/'.urlencode($to).'\'>Login Here.</a><br><br>Thanks';
      
                $this->register->gmail($to,$subject,$message);
                    
                   
	}
    


}