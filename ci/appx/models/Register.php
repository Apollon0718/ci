<?php
  class Register extends CI_Model {
       
      public function __construct(){
          
        $this->load->database();
        
      }
      
      //API call - get a book record by isbn
      public function getuser($username,$password){  

           $query = $this->db->query("select * from tbl_registration where username='$username' and password='$password' and access='1'");
           if($query->num_rows() == 1)
           {
               return $query->result_array();
           }
           else
           {
             return 0;
          }
      }
	  public function getuserByemail($email){  

           $query = $this->db->query("select * from tbl_registration where email='$email' ");
           if($query->num_rows()> 0)
           {
               return $query->row_array();
           }
           else
           {
             return 0;
          }
      }

   
    public function add($data){
        if($this->db->insert('tbl_registration', $data)){
           return true;
        }else{
           return false;
        }
    }
	public function updateUserdata($data,$id){
        $this->db->where('reg_id', $id);
        $this->db->update('tbl_registration', $data);
    }
	public function getall(){
        $query = $this->db->get('tbl_registration');
        return $query->result_array();
        
    }  
	public function gmail($to, $subject, $message){
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