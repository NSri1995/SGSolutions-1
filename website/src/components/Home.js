import React from 'react';
import './Navbar.css';
function Home(props) {
    return (
        <div className="homeText">
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 max-auto" >
                            <div className="row">
                                <div className="col-lg-6 order-1 order-lg-2"> 
                                <h4>Grow your business with <strong style={{color:"red"}}>SG Solutions</strong></h4>
                                <span className="my-2"> We are the team of motivated and passionate people </span>
                                <span className="my-2">who work for your business requirements and provide  </span>
                                <span className="my-2"> solutions to all your needs at a single platform.</span>
                                {/* <div className="blue-btn">
                                    <a to="/products" className="first-link">Get started</a>
                                </div>  */}
                                </div>
                                 <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&w=350&q=80"  alt="home img" />
                                </div> 
                            </div>
                        </div>

                    </div>
                </div>

            </section>

        </div>
    );
}

export default Home;