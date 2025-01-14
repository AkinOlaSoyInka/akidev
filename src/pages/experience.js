import '../App.css';
import React from 'react';
import { useState } from 'react';

export default function Experience(){
    const [focusBlock, setFocusBlock] = useState('');
    const [title, changeTitle] = useState('');

    const experience = [{
        'title': 'Graduate Software Developer',
        'org':'Accenture',
        'desc':[
            'Front End developer on a team tasked with building various web applications for Post Office',
            'Used React, Angular.js, Vue.js as well as Java on said applications. Implemented WCAG 2.1 AA accessibility standard',
            'Used Spring Boot and Maven',
            'Worked as Tech Lead of a team of 4, using the GCP platform to create a document scanner',
            'Used tools such as Cloud Storage, Cloud Run and Cloud Functions',
            'Created web application using React.js and Node.js',
            'Set up virtual machines and storage buckets',
            'Throughout the project lead daily calls, sprint planning, created and assigned tickets to other team members',
            'Lead demo of application to senior management'

        ]
    },
    {
        'title': 'Apprentice Software Developer',
        'org':'Accenture',
        'desc':[
            'As React developer working on team for Channel 4',
            'Created UI components using SASS and integrated API endpoints for video streaming analytics and login journeys',
            'Wrote automated tests for React components using Jest. Also created automated tests for iOS applications using Swift',
            'Joined team in Government sector, working on a portal to help local councils and contractors coordinate on contracts for construction projects',
            'Developed variou forms and UI components using React'
        ]
    },
    {
        'title': 'Student',
        'org':'University of East London',
        'desc':[
            'During my 3 years, learnt various computing fundamentals (Systems Development, Computer Architecture and Network Infrastructure, Database systems, Cyber Security etc)',
            'Also completed modules in Software engineering, IT Project management and Application Development',
            'For final project, created a fullstack application using React, Python, Node.js and MongoDB',
            'The purpose was to use Azure Sentiment Analysis to analyse th emotions behind posts made about Covid'
        ]
    }];

    return(
        <div className='experienceContainer'>
            <h3>Past Experience</h3>
            <div className='experienceList'>
                {experience.map((item,index) => {
                    return (<div className='experienceItem'>
                        <div className='experienceHeader'>
                            <h2>{item.title}</h2>
                            @ {item.org}
                        </div>
                        <div className='experienceBody'>
                            <ul>
                            {item.desc.map((point, index) =>{return <li key={index}>{point}</li>})}
                            </ul>
                        </div>
                    </div>)
                })}
            </div>
        </div>
    )

}