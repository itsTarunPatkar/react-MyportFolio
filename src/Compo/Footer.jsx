import React from 'react'

function Footer() {
  return (
    
    <>
 
<div className="" style={{width:'100%'}}>

  <footer className="text-center text-white" style={{backgroundImage: "linear-gradient(to top, #093576, #114992, #165faf, #1775cd, #128deb)"}}>
 
    <div className="container d-flex flex-column">
 
      


      <section class=" mt-5 container d-flex flex-column ">
        <div class="row d-flex justify-content-center">
          <div class="col-lg-8">
            <p>
            "Thank you for exploring my portfolio. If you'd like to connect, discuss opportunities, or explore potential collaborations, please feel free to reach out. I'm always open to new ventures and partnerships that can contribute to our shared success. Let's connect and make things happen."

            </p>
          </div>
        </div>
      </section>
    

      <hr className="my-5" />
 
      <section className="d-flex justify-content-center  mb-5" >
     
        <a href="https://www.instagram.com/world.tarun/" style={{fontSize:""}} className="text-white me-4" >
          <i style={{fontSize:"3rem"}} className="fab fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/tarunpatkar" className="text-white me-4">
          <i style={{fontSize:"3rem"}} className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/itsTarunPatkar" className="text-white me-4">
          <i style={{fontSize:"3rem"}} className="fab fa-github"></i>
        </a>
      </section>
     
    </div>
   

   
    <div
         className="text-center p-3 mb-1"
         style={{background:"transparent",}}
         >
      © 2023 Copyright: Tarun Kumar Patkar

      
    </div>
  
  </footer>

</div>

    
    </>
  )
}

export default Footer