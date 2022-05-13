import Typewriter from "typewriter-effect";

export default function Typewriter() {
    return (
        <Typewriter>
            options={{
                strings: [
                    "Front end Development",
                    "UI/UX Design",
                    "Software Development",
        
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}


        </Typewriter>


    )
}