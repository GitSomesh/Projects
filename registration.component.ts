import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  fullname: string ="";
  enrollmentno: string ="";
  email: string ="";
  phonenumber: string ="";
  password: string ="";
  gender: string ="";
  confirmpassword: string ="";

  constructor(private http: HttpClient) {
  }

  register()
  {
    console.log("Inside register method");
    if(this.password==""||this.confirmpassword==""||this.enrollmentno==""||this.email==""||this.phonenumber==""||this.fullname==""||this.gender=="")
    {
      alert("Please fill all the details");
    }
    else{

    
    if(this.password==this.confirmpassword)
    {
    let bodyData={
      "fullname" : this.fullname,
      "enrollmentno" : this.enrollmentno,
      "email" : this.email,
      "phonenumber" : this.phonenumber,
      "password" : this.password,
      "gender" : this.gender
       };
      console.log(" body data : ",bodyData);

    this.http.post("http://localhost:8000/user/create",bodyData).subscribe((resultData: any)=>
    {
     
    console.log(resultData);
    alert("Student Registered Successfully");
    this.fullname ='';
    this.enrollmentno ='';
    this.email ='';
    this.phonenumber='';
    this.password='';
    this.confirmpassword='';
    this.gender='';


    });
  }
  else{
    alert("Password Mismatched");
  }
}

  }
  save()
  {
    console.log("Inside save method");
    this.register();
    
  }
 
 

 

  ngOnInit(): void {
  }
  
  
   
   }

   
