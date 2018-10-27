<?php

class Employee_Model extends CI_Model{

    function __construct(){
        
        parent::__construct();
        $this->load->database();
        $this->load->library('session');
    }
    
    //insert employee details to employee table
    public function insertEmployee($data){
        
        return $this->db->insert('employee',$data);
      
    }
    
    public function loginUser($username, $password){
        //$this->db->where(array('username' = >$username, 'password' => $password));
        $query = $this->db->get_where('employee', array('username' => $username, 'password' => $password,'status'=> 0));   //status sholud be 1
        
        if($query->num_rows() == 1){
            
            $userArr = array();
            foreach($query->result() as $row){
                $userArr[0] = $row->emp_id;
                $userArr[1] = $row->emp_name;
                
            }
            $userData = array(
                'emp_id' => $userArr[0],
                'emp_name' => $userArr[1],
                'logged_in'=> TRUE
            );
            $this->session->set_userdata($userData);
            
            return $query->result();
        }else{
            return false;
        }
    }
    
    
    //send confirm mail
    public function sendEmail($receiver){
        $from = "info@pangeainfosys.com";    //senders email address
        $subject = 'Verify email address';  //email subjectink to the user, inside message body
        $message = 'Dear User,<br><br> Please click on the below activation link to verify your email address<br><br>
        <a href=\'http://www.localhost/codeigniter/Signup_Controller/confirmEmail/'.md5($receiver).'\'>http://www.localhost/codeigniter/Signup_Controller/confirmEmail/'. md5($receiver) .'</a><br><br>Thanks';
        
        
        /*
        config email settings
        $config['protocol'] = 'smtp';
        $config['smtp_host'] = 'smtp.rediffmailpro.com';
        $config['smtp_port'] = '587';
        $config['smtp_user'] = 'noreply@ramagum.com';
        $config['smtp_pass'] = 'Rama@2016';  //sender's password
        $config['mailtype'] = 'html';
        $config['charset'] = 'iso-8859-1';
        $config['wordwrap'] = 'TRUE';
        $config['newline'] = "\r\n"; 
        
        $this->load->library('email', $config);
		$this->email->initialize($config);
        //send email
        $this->email->from($from);
        $this->email->to($receiver);
        $this->email->subject($subject);
        $this->email->message($message);
        
        if($this->email->send()){
			//for testing
            echo "sent to: ".$receiver."<br>";
			echo "from: ".$from. "<br>";
			echo "protocol: ". $config['protocol']."<br>";
			echo "message: ".$message;
            return true;
        }else{
            echo "email send failed";
            return false;
        }
		*/
		//$this->load->library('email');

		$config['smtp_host']    = 'smtp.fatcow.com';

		$config['smtp_port']    = 587;

		$config['smtp_user']    = 'info@pangeainfosys.com';

		$config['smtp_pass']    = 'Prime@264';
        $config['mailtype'] = 'html';
        $config['charset'] = 'iso-8859-1';
        $config['wordwrap'] = 'TRUE';
        $config['newline'] = "\r\n"; 
        
        $this->load->library('email', $config);

		$this->email->initialize($config);

		$this->email->from($from,'Rama');

		$this->email->to($receiver);

		$this->email->subject($subject);

		$this->email->message($message);

		

		if($this->email->send()) {

			

			echo 'Sent';

		} else {

			

			echo  'Not Sent';

		}
        
       
    }
    
    //activate account
    function verifyEmail($key){
        $data = array('status' => 1);
        $this->db->where('md5(email)',$key);
        return $this->db->update('employee', $data);    //update status as 1 to make active user
    }
	//gmail("it.rinkalpatel@gmail.com",$subject,$message);
	
function gmail($to, $subject, $message){
	//path to PHPMailer class
    require_once('class.phpmailer.php');
    // optional, gets called from within class.phpmailer.php if not already loaded
    include("class.smtp.php"); 

    $mail = new PHPMailer();
    $mail->CharSet = "UTF-8";
    // telling the class to use SMTP
    $mail->IsSMTP();
    // enables SMTP debug information (for testing)
    // 1 = errors and messages
    // 2 = messages only
    $mail->SMTPDebug  = 0;
    // enable SMTP authentication
    $mail->SMTPAuth   = true;
    // sets the prefix to the servier
//    $mail->SMTPSecure = "ssl";
    // sets GMAIL as the SMTP server
//    $mail->Host       = "smtp.gmail.com";
    $mail->Host       = "smtp.fatcow.com";
    // set the SMTP port for the GMAIL server
    $mail->Port       = 587;
    // GMAIL username
    $mail->Username   = "info@pangeainfosys.com";
    // GMAIL password
    $mail->Password   = "Prime@264";
    //Set reply-to email this is your own email, not the gmail account 
    //used for sending emails
    $mail->SetFrom('info@pangeainfosys.com');
    $mail->FromName = "Pangea";
    // Mail Subject
    $mail->Subject    = $subject;

    //Main message
    $mail->MsgHTML($message);

    //Your email, here you will receive the messages from this form. 
    //This must be different from the one you use to send emails, 
    //so we will just pass email from functions arguments
    $mail->AddAddress($to, "");
    if(!$mail->Send()) 
    {
        //couldn't send
        //return false;
        echo "couldn't send";
    } 
    else 
    {
        //successfully sent
        //return true;
		echo "successfully sent";
    }
}
    
}

?>