import roles from "@/data/roles"
import { Role } from "@/types/models"
import { useState } from "react"

const Hero = () => {

    const [activeProfession, setActiveProfession] = useState<Role>(roles[0])
    return(
        <div >
            <div className= "upper-part">
                <div className="left-section">
                    <h1 className="upper-part-text-h1">Phenom for {activeProfession.name}</h1>
                    <h2 className="upper-part-text-h2">{activeProfession.highlightText}</h2>
                    <button>Book a Demo</button>
                </div>
                <div className="right-section">
                    <img src={activeProfession.imageUrl}/>
                </div>
            </div>
            <div className= "lower-part">{activeProfession.discription}</div>
        </div>
    )
}

export default Hero;