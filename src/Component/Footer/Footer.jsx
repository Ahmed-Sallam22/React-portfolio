import React from 'react'
export default function Footer() {
return<>
<footer className='text-white text-center'>
<div className="Footer-text py-5">
        <div className="container-lg">
            <div className="row">
                <div className="col-md-4">
                    <h2 className='fw-bolder'>LOCATION</h2>
                    <p>2215 John Daniel Drive<br/>Clark, MO 65243</p>
                </div>
            <div className="col-md-4">
                <h2 className='fw-bolder'>AROUND THE WEB</h2>
                <div className='social'>
                <ul>
                    <li><a href="#Facebook"><i className="fa-brands fa-facebook-f"></i></a></li>
                    <li><a href="#twitter"><i className="fa-brands fa-linkedin"></i></a></li>
                    <li><a href="#!"><i className="fa-brands fa-instagram"></i></a></li>
                    <li><a href="#!"><i className="fa-brands fa-github"></i></a></li>
                    
                </ul>

                </div>
                

        </div>
        <div className="col-md-4">
        <h2 className='fw-bolder'>ABOUT FREELANCER</h2>
        <p>Freelance is a free to use, MIT <br/> licensed Bootstrap theme created by <br /> Route</p>
        </div>
            </div>
        </div>
        </div>
<div className="footer-social py-2  bg-black">
        <div className="container text-center text-white">
                    <small>Copyright &copy;Your Website 2021</small> 
        </div>
    </div> 
    </footer>
        </>

}
