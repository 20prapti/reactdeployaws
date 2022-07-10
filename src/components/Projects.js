// Import Assets
import uniswap from '../assets/uniswap.png';
import compound from '../assets/compound.png';
import aave from '../assets/aave.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>CRIME REPORTING SYSTEM</h3>
                    <img src={uniswap} alt="Uniswap Swap Page" />
                    <p>This is a open source crime reporting website which helps the
people to justify themselves through laws . It can be accessed by
all the visiting clients.

                    </p>

                    <a href="" target="_blank" className="button">Site</a>
                    <a href="https://github.com/20prapti/CrimeReportingSystem.git" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>CUIANS COMMUNITY</h3>
                    <img src={compound} alt="Compound Landing Page" />
                    <p>This is an online vedio confrencing app based on react , javascript and typescript . This has advance
                        features which maked the host to enable the polling questions  , various rights of screen sharing , audio and vedio sharing,
                        breakdown of groups , etc. 
                    </p>

                    <a href="" target="_blank" className="button">Site</a>
                    <a href="hhttps://github.com/20prapti/cuians_community.git" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>CHAT APP</h3>
                    <img src={aave} alt="Aave Landing Page" />
                    <p>This is an chat app based on REACT , TYPESCRIPT AND JAVASCRIPT . This is an online chat application which helps the
users to communicate among themselves . 
                    </p>


                    <a href="" target="_blank" className="button">Site</a>
                    <a href="https://github.com/20prapti/chatApp.git" target="_blank" className="button">Code</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;