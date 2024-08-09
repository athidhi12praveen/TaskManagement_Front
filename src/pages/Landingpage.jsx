import React from 'react'
import './Landingpage.css'
import Footer from './Footer'
import Header from './Header'

function Landingpage() {
  return (
    <>
    <Header/>
    <div className='container bg-light mt-5' style={{boxShadow:'none',border:'none',width:'100%'}}>
        <h1 className='head text-center' >Organize your work <br />and life, finally</h1>
        <p className='text-center mt-5' style={{fontSize:'20px'}}>Simplify life for both you and your team. <br /> The world’s #1 task manager list app.</p>

        <div>
  <video width="100%" controls style={{height:'80vh'}}>
    <source 
      src="https://res.cloudinary.com/imagist/video/fetch/q_auto/f_auto/https%3A%2F%2Ftodoist.com%2Fstatic%2Fhome%2Fcomplexity-slider%2Fcomplexity-video.mp4" 
      type="video/mp4" 
    />
    Your browser does not support the video tag.
  </video>
</div>

{/*carousel  */}
<section className="carousel">
        <div
          className="container bg-light"
          style={{
            backgroundColor: "white",
            borderColor: "white",
            boxShadow: "none",
          }}
        >
          <div className="row">
            <div className="col-lg-6 col-md-12 mt-5 pt-5">
              <div
                id="carouselExampleAutoplaying"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="https://static.vecteezy.com/system/resources/thumbnails/012/594/025/small_2x/animated-isolated-questionnaire-task-management-looped-flat-2d-object-4k-footage-with-alpha-channel-insert-check-marks-survey-answers-colorful-animation-for-mobile-website-social-media-video.jpg"
                      class="my-img d-block w-100 "
                      alt="no img"
                    />
                    <h1 className='mt-5' style={{ paddingLeft: "50px" }}>ADD</h1>
                    <p  style={{ paddingLeft: "50px" }}>
                      {" "}
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum beatae exercitationem enim, maiores dignissimos labore doloribus alias iure temporibus sit voluptas facere. Animi consequuntur error eaque, neque necessitatibus ducimus nisi.
                    </p>
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://media.istockphoto.com/id/1420682964/video/businessman-doing-multitask-in-office.jpg?s=640x640&k=20&c=-hi5nXsHF2h7nWwbE9eHAevK9nKon0CFDxkcEhxfOsU="
                      className="my-img d-block w-100"
                      alt="no img"
                    />
                    <h1 className='mt-5' style={{ paddingLeft: "50px" }}>EDIT</h1>
                    <p style={{ paddingLeft: "50px" }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nulla, aliquam modi nisi atque amet impedit pariatur assumenda delectus ullam eligendi cum mollitia voluptates dolor officia perferendis voluptatem at consectetur!
                    </p>
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://www.shutterstock.com/shutterstock/videos/1013504168/thumb/1.jpg?ip=x480"
                      className="my-img d-block w-100"
                      alt="no img"
                    />
                    <h1 className='mt-5' style={{ paddingLeft: "50px" }}>DELETE</h1>
                    <p style={{ paddingLeft: "50px" }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tempore aut dignissimos, excepturi laboriosam, adipisci cupiditate ducimus aperiam eveniet, velit exercitationem ad esse eligendi omnis reiciendis harum itaque eaque expedita.
                    </p>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleAutoplaying"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon bg-dark"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleAutoplaying"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon bg-dark"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
            <video width="100%" controls style={{height:'80vh'}}>
    <source 
      src="https://cdn.dribbble.com/users/549987/screenshots/17298722/media/8d7a239c966a515499177d76d6124003.mp4" 
      type="video/mp4" 
    />
  </video>
            </div>
          </div>
        </div>
      </section>
      </div>
      <section className="my-services">
        <div
          className="container text-center"
          style={{
            borderColor: "gray",
            backgroundColor: "gray",
            boxShadow: "none",
          }}
        >
          <div className="row">
            <div className="col">
              <p className="service">
                <i className="fa-solid fa-book me-3"></i>ADD TASK
              </p>
            </div>
            <div className="col">
              <p className="service">
                <i className="fa-solid fa-pen me-3"></i>
                <b>EDIT TASK</b>
              </p>
            </div>
            <div className="col">
              <p className="service">
                <i className="fa-solid fa-rotate-left me-3"></i>
                <b>VIEW TASK</b>
              </p>
            </div>
            <div className="col">
              <p className="service">
                <i className="fa-solid fa-trash me-3"></i>
                <b>DELETE TASK</b>
              </p>
            </div>
          </div>
        </div>
      </section>
    
   
    <Footer/>
    </>
  )
}

export default Landingpage