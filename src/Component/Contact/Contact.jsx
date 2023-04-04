import React from "react";

export default function Contact() {
  return (
    <>
      <div id="pro" className="contact py-5">
        <div className="container mt-5">
          <div className="content position-relative pb-4 mb-5">
            <h2 className=" text-center fw-bold">CONTACT ME</h2>
            <div className="lines d-flex align-items-center justify-content-center">
                    <div className="line"></div>
                    <i className="fa-solid fa-star fa-2xl px-3"></i>
                    <div className="line"></div>
            </div>
          </div>
          <div className="row">
            <div className="frm w-75 mx-auto">
              <div className="form-group py-4">
                <label className="" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  onKeyUp={uservalidation}
                  onChange={hideLabel}
                  placeholder="Name"
                  className="form-control fs-4"
                input/> 
              </div>
              <div id="validation-name" class="alert alert-danger  d-none text-center mt-2" role="alert">
            Special characters and numbers not allowed
        </div>
              <div className="form-group py-4">
                <label className="" htmlFor="email">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  onKeyUp={ emailvalidation}
                  onChange={hideLabel}
                  placeholder="Email Address"
                  className="form-control fs-4"
                />
                
              </div>
              <div id="validation-email"  class="alert alert-danger text-center mt-2 d-none" role="alert">
            Email not valid *exemple@yyy.zzz
        </div>
              <div className="form-group py-4">
                <label className="" htmlFor="phone">
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  onKeyUp={phonevalidation}
                  onChange={hideLabel}
                  placeholder="Phone Number"
                  className="form-control fs-4"
                />
                
              </div>
              <div id="validation-phone" class="alert alert-danger d-none text-center mt-2"  role="alert">
                Enter valid Phone Number
            </div>
              <div className="form-group py-4">
                <label className="" htmlFor="msg">
                  Message
                </label>
                <textarea
                  name=""
                  id="msg"
                  onChange={hideLabel}
                  cols="30"
                  rows="4"
                  placeholder="Message"
                  className="form-control fs-4"
                ></textarea>
              </div>
              <div className="btns py-4">
                <button className="btn py-3 px-4 text-white fs-5">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )

  function hideLabel() {
    document
      .querySelectorAll(
        ".contact .form-group input , .contact .form-group textarea "
      )
      .forEach((inpt) => {
        console.log(inpt);
        if (inpt.value.length > 0) {
          document
            .querySelectorAll(".contact .form-group label")
            .forEach((e) => {
              console.log(e);
              if (inpt.getAttribute("id") === e.getAttribute("for")) {
                console.log(e);
                e.classList.add("target");
              }
            });
        } else {
          document
            .querySelectorAll(".contact .form-group label")
            .forEach((e) => {
              if (inpt.getAttribute("id") === e.getAttribute("for")) {
                e.classList.remove("target");
              }
            });
        }
      });
  }

  function uservalidation(){
    let username=document.getElementById("name").value;
    let namecheck=/^[a-zA-Z]{3,}$/
    if(namecheck.test(username)){
        document.getElementById("validation-name").classList.replace('d-block','d-none');
    }
    else{
        document.getElementById("validation-name").classList.replace('d-none','d-block');
        return false
    }
    }
    function emailvalidation(){
        let email=document.getElementById("email").value;
        let emailcheck=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{1,4}$/
        if(emailcheck.test(email)){
            document.getElementById("validation-email").classList.replace('d-block','d-none');
        }
        else{
            document.getElementById("validation-email").classList.replace('d-none','d-block');
            return false
        }
        }
        function phonevalidation(){
            let phone=document.getElementById("phone").value;
                let phonecheck=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{4}[-\s\.]?[0-9]{4,7}$/im
            if(phonecheck.test(phone)){
                document.getElementById("validation-phone").classList.replace('d-block','d-none');
            }
            else{
                document.getElementById("validation-phone").classList.replace('d-none','d-block');
                return false
            }
            }
}
