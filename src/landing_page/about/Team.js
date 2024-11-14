import React from 'react';

function Team() {
    return(<div className='container'>
        <div className='row p-5 mt-5 border-top'>
           <h1 className='  mt-5   text-center'>People
           </h1>

         
        <div className='row p-5 text-muted fs-6 ' style={{lineHeight:"1.8", fontSize:"1.2em"}}>
           <div className='col-6 p-5 text-center'>
               <img src='images/teamOwner2.png' style={{borderRadius:"100%",width:"90%"}}/>
               <h4 className='mt-5'> Sandeep Vasista </h4>
               <h6>Founder, CEO</h6>
           </div>
           <div className='col-6 p-5'>
               <p>Sandeep bootstrapped and founded GameForge in 2018 to tackle the challenges he faced during his years as a competitive gamer and eSports enthusiast. Today, GameForge has redefined the eSports ecosystem in India, bringing a new level of accessibility and excitement to gamers nationwide.</p>
               <p>He is an active member of the Indian eSports Federation (IESF) and contributes to the Gaming Standards Council (GSC), working to set fair standards in competitive gaming.</p>
               <p>When he’s not gaming, Sandeep finds balance through mountain biking.</p>
               <p className='text-ceo'>Connect on <a href=''>Homepage</a> / <a href=''> GamingQna </a> / <a href=''>Twitter</a></p>
           </div>


           </div>


           
           
           
           
           </div>   


       </div>
   );
}

export default Team;