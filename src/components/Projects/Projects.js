import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import courteClient from '../../assets/projects/courte-client.png'
import courteServer from '../../assets/projects/courte-server.png'
import picbeakImage from '../../assets/projects/picbeak.png'
import scaveImage from '../../assets/projects/scave.png'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const courteC = {
    title: 'Courte Client',
    gitLink: 'https://github.com/Gavriil84/Team-SpaceDuck-Frontend',
    pageLink: 'https://www.courte.app/',
    description: 'Courte is a mobile application that facilitates the use and sharing of public tennis courts with three feature, Explore, Play and Match.',
    image: courteClient,
    tech: 'React Native | Expo | Native Base | GraphQL Apollo'
}

const courteS = {
    title: 'Courte Server',
    gitLink: 'https://github.com/Gavriil84/Team-SpaceDuck-Backend',
    pageLink: 'https://www.courte.app/',
    description: 'Server of Courte is hosted on AWS EC2 instance. To maintain realtime connection for location sharing on our front-end pairing feature we are using sockets.',
    image: courteServer,
    tech: 'Node | Express | GraphQL Apollo | Firebase | AWS EC2'
}

const picbeak = {
    title: 'Picbeak',
    gitLink: 'https://github.com/ijaspreetbhatti/Team-Loon-Picbeak-Frontend',
    pageLink: 'https://www.picbeak.com/',
    description: 'Picbeak is an application that provides educational information about region-specific bird species, encouraging children to be aware of local birds and endangered species.',
    image: picbeakImage,
    tech: 'MongoDB | Express.js | React.js | Node.js'
}

const scave = {
    title: 'Scave',
    gitLink: 'https://github.com/ijaspreetbhatti/Team-Magpie-Scave',
    pageLink: 'https://github.com/ijaspreetbhatti/Team-Magpie-Scave',
    description: 'Scave is an application that utilizes geolocation API to donate and locate disposed items in our community.',
    image: scaveImage,
    tech: 'HTML | CSS | JavaScript | PWA | Firebase | Webpack | jQuery'
}

const Projects = () => {
    return (
        <ProjectContainer>
            <ProjectTitle>
                <h2>02. Projects</h2>
                <div className="line"></div>
            </ProjectTitle>

            <CardContainer>

                <Carousel
                    showThumbs={false}
                    showStatus={false}
                >
                    <Card
                        title={courteC.title}
                        gitLink={courteC.gitLink}
                        pageLink={courteC.pageLink}
                        description={courteC.description}
                        image={courteC.image}
                        tech={courteC.tech}
                    />

                    <Card
                        title={courteS.title}
                        gitLink={courteS.gitLink}
                        pageLink={courteS.pageLink}
                        description={courteS.description}
                        image={courteS.image}
                        tech={courteS.tech}
                    />

                    <Card
                        title={picbeak.title}
                        gitLink={picbeak.gitLink}
                        pageLink={picbeak.pageLink}
                        description={picbeak.description}
                        image={picbeak.image}
                        tech={picbeak.tech}
                    />

                    <Card
                        title={scave.title}
                        gitLink={scave.gitLink}
                        pageLink={scave.pageLink}
                        description={scave.description}
                        image={scave.image}
                        tech={scave.tech}
                    />
                </Carousel>
            </CardContainer>

        </ProjectContainer>
    )
}

const ProjectContainer = styled.div`
    width: 100%;
    flex-direction: column;
    overflow: hidden;
`

const CardContainer = styled.div`
    padding: 0 5vw;

    @media (min-width: 768px) {
        padding: 0 25vw;
    }

    .carousel-root{
        display: flex;
        justify-content: center;
        align-items: center;

        .carousel-slider{
            height: 550px!important;

            .control-dots{
                @media (max-width: 768px) {
                    bottom: -13px;
                }
            }
        }

        .slide {
            height: 550px!important;
            display: flex;
            justify-content: center;
            align-items: center;

            @media (max-width: 768px) {
                height: 600px!important;
            }
        }

        @media (max-width: 768px) {
            .control-arrow {
                display: none;
            }

            .slide .selected{
                margin: 0;
                padding: 0;
            }
        }
    }
`

const ProjectTitle = styled.div`
    padding: 0 5.9vw;
    margin-top: 100px;
    margin-bottom: 35px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    width: 100%;

    .line{
        margin-left: 10px;
        width:50%; 
        height:1px; 
        background: #fff
    }

    h2{
        margin: 0;
        color: #fff;
        font-weight: 500;
        width: 140px;
    }
`

export default Projects