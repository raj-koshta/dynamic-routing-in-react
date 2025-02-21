import React from 'react'
import { NavLink, useNavigate, useRouteError } from 'react-router-dom'
import "../index.css"
import { Button } from 'bootstrap';

const ErrorPage = () => {

    const error = useRouteError();

    const nevigate = useNavigate();

    const handleGoBack = () =>{
        nevigate(-1);
    }

    if (error.status == "404")

        return (
            <section className=" main-div">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 ">
                            <div className="col-sm-10 col-sm-offset-1  text-center">
                                <div className="four_zero_four_bg">
                                    <h1 className="text-center ">404</h1>
                                </div>

                                <div className="contant_box_404">
                                    <h3 className="h2">
                                        Look like you're lost
                                    </h3>

                                    <p>the page you are looking for not avaible!</p>

                                    <NavLink onClick={handleGoBack} className="btn" style={{marginRight: "25px"}}>Back</NavLink>
                                    <NavLink to="/loader-n-useloaderdata-in-react/" className="btn">Go to Home</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )

    return (
        <div className='main-div'>
            <div className='div'>
                <h1 className=" text-5xl font-bold">Error Page</h1>
            </div>
        </div>
    )
}

export default ErrorPage
