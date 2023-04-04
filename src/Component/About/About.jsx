import React from 'react'

export default function About() {
  return <>
    <div className="about py-5">
        <div className="container py-5">
        <div className="content position-relative pb-4 text-center">
              <h2 className='text-center fw-bold text-white'>ABOUT</h2>
            <div className="lines d-flex align-items-center justify-content-center ">
          <div className="line"></div>
          <i className="fa-solid fa-star fa-2xl px-3 text-white"></i>
          <div className="line"></div>
          </div>
            </div>
            <div className="about-content mt-5 w-75 mx-auto">
                <div className="row">
                  <div className="col-md-6">
                    <div className="child">
                      <p className=' lh-lg fs-5 text-white'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <p className=' lh-lg fs-5 text-white' >You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>

                  </div>
                </div>
            </div>
        </div>
      </div>
  
  </>
}
