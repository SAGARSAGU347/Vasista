import React from 'react';



function Footer() {
  return (
    <>

    <footer style={{backgroundColor:"#dce5f4"}}>
        <div className='container border-top mt-5 '>
        <div className='row mt-5 '>
        <div className='col-6  '>
        <img src="images/image.png" style={{ width: "25%" }}    />
        <p className='mt-3 sag mx-4 '>
        Ready to elevate your esports experience? Whether you need expert production, dynamic marketing, or flawless event execution, our team is here to help. Reach out today and let's create something extraordinary together.
        </p>
            
        <div className="social-icons col-8 ">
  <a><i class="fa-brands fa-facebook"></i></a>
  <a><i class="fa-brands fa-instagram"></i></a>
  <a><i class="fa-brands fa-youtube"></i></a>
  <a><i class="fa-brands fa-linkedin"></i></a>
  <a><i class="fa-brands fa-x-twitter"></i></a>

  </div>

  <ul className='d-flex justify-content-between links-foot mx-4'>

<a href='/'>Home</a>
<a href='/'>Services</a>
<a href='/'>Tournaments</a>
<a href='/'>News</a>
<a href='/'>Register</a>
<a href='/'>Contact</a>


</ul>

<p className='d-flex justify-content-start'>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;© vasista E-Sports. All Rights Reserved 2024.
</p>




        </div>

        <div className='col-6 d-flex justify-content-center'>

        <div class="contact-form">
    <h2>Get in Touch</h2>
    <form >
        <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input type="text" class="form-control" id="name" placeholder="Enter your name"/>
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Email Address</label>
            <input type="email" class="form-control" id="email" placeholder="Enter your email"/>
        </div>
        <div class="mb-3">
            <label for="message" class="form-label">Message</label>
            <textarea class="form-control" id="message" rows="3" placeholder="Enter your message"></textarea>
        </div>
        <button type="submit" class="btn btn-custom w-100">Send Message →</button>
    </form>
</div>
            
       
        
        </div>

        </div>
        </div>

    </footer>
    
    
    </>
    
  )
}

export default Footer