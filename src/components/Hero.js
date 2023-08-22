import heroImg from "../images/heroimage.png"

function Hero() {
    return(
        <section className="herocontainer">
            <img className="heroimg" src={heroImg} alt={"Heroimage"} />
                <h1 className="heroHeading">Online Experience</h1>
                <p className="heropara">
                    Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </p>
        </section>
    )
}

export default Hero