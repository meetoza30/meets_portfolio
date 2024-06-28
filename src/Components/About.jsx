import React from "react";
import html from './html.jpg'
import css from './css.jpg'
import js from './js.jpg'
import tailwind from './tailwind.jpg'
import cpp from './cpp.jpg'
import react from './react.jpg'
import java from './java.jpg'
import git from './git.jpg'

export default function About() {
    return (
        <>
        <h1 className="text-blue-700 text-center font-bold text-3xl mt-6">My Skills Stack</h1>
        <div className=" grid-cols-4 grid max-h-60 max-w-full mt-10">
            <img src={html} className="w-60 h-50"></img>
            <img src={css} className="w-60 h-50"></img>
            <img src={js} className="w-60 h-50"></img>
            <img src={tailwind} className="w-60 h-50"></img>
            <img src={react} className="w-60 h-50"></img>
            <img src={git} className="w-60 h-50"></img>
           
            <img src={cpp} className="w-60 h-50"></img>
            <img src={java} className="w-60 h-50 grid-cols-2"></img>
        </div>
        </>
    );
}