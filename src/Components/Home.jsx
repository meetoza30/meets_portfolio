import React from "react";
import meet_traditional from './meet_traditional.jpg'

export default function Home() {
    return (
        <>
            <div className="h-24 w-full">
                <h1 className="mt-5 text-blue-700 text-5xl font-bold text-center">
                    Hey! This is Meet<span className="text-red-500 text-5xl font-bold">.</span>
                </h1>
            </div>

            <div className="mt-10 flex flex-col items-center md:flex-row md:items-center  md:justify-evenly">
                <img src={meet_traditional} className="h-80 w-80" alt="Meet Traditional" />

                <div className="bg-blue-200 p-5 mt-5 md:mt-0 md:ml-5 max-w-md">
                    <p className="text-xl font-semibold">
                    I'm Meet Oza, an <span className="text-blue-800 font-bold">engineering undergraduate</span> from Pune, Maharashtra, India. At 19 years old, I am deeply passionate about Technology and Video Production. I have substantial experience as a Content Strategist and Video Editor, specializing in short-form video editing. In addition to my video production skills, I have practical expertise in various programming languages and technologies, including C++, Java, HTML, CSS, JavaScript, and ReactJS
                    </p>
                </div>
            </div>
        </>
    );
}
