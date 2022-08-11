import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import courteClient from '../../assets/projects/courte-client.png'
import courteServer from '../../assets/projects/courte-server.png'
import picbeakImage from '../../assets/projects/picbeak.png'
import scaveImage from '../../assets/projects/scave.png'

const courteC = {
    title: 'Courte Client',
    gitLink: 'https://github.com/Gavriil84/Team-SpaceDuck-Frontend',
    pageLink: 'https://www.courte.app/',
    description: 'Courte is a mobile application that facilitates the use and sharing of public tennis courts with three feature, Explore, Play and Match. Developed with React Native, Expo, Native Base, GraphQL Apollo within the time constraint of 13 weeks.',
    image: courteClient,
    tech: 'React Native | Expo | Native Base | GraphQL Apollo'
}

const courteS = {
    title: 'Courte Server',
    gitLink: 'https://github.com/Gavriil84/Team-SpaceDuck-Backend',
    pageLink: 'https://www.courte.app/',
    description: 'Server of Courte is built with Node, Express, and GraphQL Apollo, and is hosted on AWS EC2 instance. In order to maintain realtime connection for location sharing on our front-end pairing feature we are using sockets. Developed within the time constraint of 13 weeks.',
    image: courteServer,
    tech: 'Node | Express | GraphQL Apollo | Firebase | AWS EC2'
}

const picbeak = {
    title: 'Picbeak',
    gitLink: 'https://github.com/ijaspreetbhatti/Team-Loon-Picbeak-Frontend',
    pageLink: 'https://www.picbeak.com/',
    description: 'Picbeak is an application that provides educational information about region-specific bird species, encouraging children to be aware of local birds and endangered species. Developed with MongoDB, Express.js, React.js and Node.js within the time constraint of 13 weeks.',
    image: picbeakImage,
    tech: 'MongoDB | Express.js | React.js | Node.js'
}

const scave = {
    title: 'Scave',
    gitLink: 'https://github.com/ijaspreetbhatti/Team-Magpie-Scave',
    pageLink: 'https://github.com/ijaspreetbhatti/Team-Magpie-Scave',
    description: 'Scave is an application that utilizes geolocation API to donate and locate disposed items in our community. Developed with HTML, CSS, JavaScript, PWA, Firebase, Webpack, jQuery within the time constraint of 13 weeks.',
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

        </ProjectContainer>
    )
}

const ProjectContainer = styled.div`
    width: 100%;
    padding: 0 5.9vw;
    flex-direction: column;
`

const ProjectTitle = styled.div`
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