import React from 'react'
import styled from 'styled-components'

const Experience = () => {
    return (
        <ExperienceContainer>
            <ExperienceTitle>
                <h2>03. Experience</h2>
                <div className="line"></div>
            </ExperienceTitle>

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
                    <li><span>&#9658;</span>Assembled the company-wide labor cost budget by collecting data and estimating the total
                        cost that prevented the miscalculation of the overall budget.</li>
                    <li><span>&#9658;</span>Provided the hiring evaluation database by analyzing and organizing the past candidate's
                        data that led to an understanding of the hiring tendency of the company.</li>
                    <li><span>&#9658;</span>Coordinated the employment screening program by revamping the interview process from
                        in-person to online meetings which reduced the risk of covid-19 infection for applicants and
                        employees.</li>
                </ul>
            </Accomplishment>
        </ExperienceContainer>
    )
}

const ExperienceContainer = styled.div`
    width: 100%;
    padding: 0 5.9vw;
    flex-direction: column;
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
    margin-top: 60px;

    h4{
        margin: 0;
        font-weight: 500;
        font-size: 20px;
        color: #E37353;
    }

    p{
        margin: 0;
        font-size: 14px;
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