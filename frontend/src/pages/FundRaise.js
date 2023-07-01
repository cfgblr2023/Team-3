import React, { useEffect, useRef } from 'react';
import './FundRaise.css';
import { useNavigate } from 'react-router-dom';

export const FundRaise = () => {
    const formRef = useRef(null);
    const navigate = useNavigate()
    useEffect(() => {
        const loadRazorpayButton = () => {
            const existingScript = document.getElementById('razorpay-script');

            if (!existingScript) {
                const script = document.createElement('script');
                script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
                script.id = 'razorpay-script';
                script.setAttribute('data-payment_button_id', 'pl_LTOJkhtiLHypcl');
                script.async = true;
                script.onerror = () => {
                    console.error('Error loading Razorpay script.');
                };

                formRef.current.appendChild(script);
            }
        };

        loadRazorpayButton();
    }, []);

    const handleDoneClick = () => {
        navigate('/')
    };

    return (
        <div className="donation-page">
            <div className="form">
                <h1 className="heading">Let's Make A Change Together!</h1>
                <div className="discription">
                    <h2 className="des">
                        Giving is not just about making a donation,
                        <br />
                        it's about making a difference.
                        <br />
                        Any help or donation,
                        <br />
                        no matter how small or big,
                        <br />
                        will be deeply appreciated and is much needed.
                    </h2>
                </div>
                <form className="payment" ref={formRef}>
                    {/* The Razorpay payment button script will be dynamically added here */}
                </form>
                <div id="btn-wrapper">
                    <button slot="button" type="button" className="btn footer-btn" id="done-btn" onClick={handleDoneClick}>
                        DONE!!
                    </button>
                </div>
            </div>
        </div>
    );
};