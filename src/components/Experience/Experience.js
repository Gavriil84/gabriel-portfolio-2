import React from 'react'
import styled from 'styled-components'

const Experience = () => {
    return (
        <ExperienceContainer>
            <ExperienceTitle>
                <h2>03. Experience</h2>
                <div className="line"></div>
            </ExperienceTitle>

            <JobWrapper>
                <JobTitle>
                    <h4>Front-end Developer @ Langara College</h4>
                    <p>Feb 2022 - Apr 2022 | Part-time</p>
                </JobTitle>
                <Accomplishment>
                    <ul>
                        <li><span>&#9658;</span>Utilized Next.js to redevelop a redesigned WMDD Program showcase website.</li>
                        <li><span>&#9658;</span>Used packages like styled-components and react-slick to create a fast and user-friendly interface</li>
                        <li><span>&#9658;</span>Migrated Next.js app deployment from Vercel to Amazon AWS EC2.</li>
                    </ul>
                </Accomplishment>

                <JobTitle>
                    <h4>HR Generalist @ Toyotsu Logistics</h4>
                    <p>Apr 2016 - Feb 2021 | Full-time</p>
                </JobTitle>
                <Accomplishment>
                    <ul>
                        <li><span>&#9658;</span>Analyzed the latest applicants' trends by collecting data from recruitment agents and
                            related sites which facilitated narrowing down the target demographic.</li>
                        <li><span>&#9658;</span>Taught TBP (Toyota Business Practices) to employees by conducting medium-term training
                            that enabled problem-solving awareness to take root.</li>
                        <li><span>&#9658;</span>Provided the hiring evaluation database by analyzing and organizing the past candidate's
                            data that led to an understanding of the hiring tendency of the company.</li>
                    </ul>
                </Accomplishment>
            </JobWrapper>
        </ExperienceContainer>
    )
}

const ExperienceContainer = styled.div`
    width: 100%;
    padding: 0 5.9vw;
    flex-direction: column;

    @media (min-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`

const JobWrapper = styled.div`
@media (min-width: 768px) {
    width: 70vw;
    margin: 0 auto;
}
`

const ExperienceTitle = styled.div`
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
        width: 160px;
    }
`
const JobTitle = styled.div`
    width: 100%;
    color: #fff;
    margin-top: 30px;

    h4{
        margin: 0;
        font-weight: 500;
        font-size: 20px;
        color: #E37353;
    }

    p{
        margin: 0;
        font-size: 14px;
        color: #030F28;
    }
`

const Accomplishment = styled.div`
    width: 100%;
    color: #fff;



    ul{
        margin-top: 30px;
        padding: 0;
        list-style: none;

        li{
            margin-bottom: 10px;

            span{
                font-size: 10px;
                padding-right: 5px;
                color:#030F28;
            }
        }
    }
    `

export default Experience