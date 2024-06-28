import React from "react";
import { Link } from "react-router-dom";

function Contact() {
    return (
        <>
            <div className="flex flex-col items-center justify-center mt-20">
                <div className="bg-gray-200 p-5 rounded-lg text-center mt-10">
                    <h1 className="font-bold text-center mb-2 text-3xl">Drop me an email at:</h1>
                    <h2 className="text-blue-800 underline text-center text-xl cursor-pointer">ozameet300905@gmail.com</h2>
                    <h1 className="text-center mt-7 text-lg font-semibold text-blue-600">OR</h1>
                    <br></br>
                    <div className="items-center justify-center">
                    <Link to="https://www.linkedin.com/in/meetoza30" target="_blank" className=" items-center bg-blue-500 px-3 py-1 rounded-lg text-white mt-5 hover:bg-blue-700">Connect with me on <span className=" font-bold">LinkedIn</span></Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
