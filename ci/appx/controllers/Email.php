<?php
 
class Email extends CI_Controller{
    
    public function __construct()
    {
        parent::__construct();
		header('Access-Control-Allow-Origin: *');
        header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");

        $this->load->model('register');
    }    
     
    
	function loginaccess($email){
		$email = urldecode($email);
		$data = $this->register->getuserByemail($email);
		$udata['access']=1;
		//print($data);
		$this->register->updateUserdata($udata,$data['reg_id']);
		$this->load->view('vwVerfiedEmail');
		//redirect('https://398d0028.ngrok.io/');
		
    } 
    
    

    


}