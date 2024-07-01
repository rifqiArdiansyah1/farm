"use client"

import { Typewriter } from "react-simple-typewriter";

const Typer = ({ words }) => {
    return (
        <div className="flex justify-center items-center font-bold p-8 text-2xl">
            <Typewriter
                cursor
                cursorStyle="_"
                cursorBlinking
                cursorColor="#000000"
                delaySpeed={1200}
                deleteSpeed={50}
                loop={0}
                typeSpeed={100}
                words={words}
            />
        </div>
    )
}

export default Typer;