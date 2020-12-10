import React from 'react';

export const Login = (props) => {
    return (
        <div className='container'>
            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Login to Simma</h2>
                
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                <div className="row">
                    <div className="col-lg-8 mx-auto">                        
                        <form id="contactForm" name="sentMessage" novalidate="novalidate">
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>User Name</label>
                                    <input className="form-control" id="username" type="text" placeholder="User Name" required="required" data-validation-required-message="Please enter user name." />
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Password</label>
                                    <input className="form-control" id="password" type="password" placeholder="Password" required="required" data-validation-required-message="Please enter your password." />
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>                            
                            <br />                            
                            <div className="form-group"><button className="btn btn-primary btn-xl" id="loginMessageButton" type="submit">Login</button></div>                            
                        </form>
                        <div>Not Registered? <a href="#">Create an account</a></div>
                    </div>
                </div>    
        </div>
    )
}