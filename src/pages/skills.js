import React from 'react'
import '../App.css';

export default function Skills(){
    let array = [
        {
            name:'React, Vue, Angular',
            desc: 'Worked on various projects, creating responsive forms, sending analytics and implementing designs for various user journeys. Created numerous login journeys, implementing designs provided by UI/UX teams'
        },
        {
            name:'Node',
            desc: 'At university, created middleware using Express(Node) as part of an application to use sentiment analysis on Reddit posts during the COVID-19 lockdown'
        },
        {
            name:'Google Cloud',
            desc: 'Led team that created an application that leveraged tools in GCP Suite (CloudRun, Cloud Functions, GCS, Document AI) to demonstrate the capacity of using cloud services to create innovative solutions. Also set up GCS buckets in which records would be stored'
        },
        {
            name:'SQL',
            desc: 'Managed various complex databases, some of which contain millions of records. Integrated with various web applications via API endpoints'
        },
        {
            name:'Spanish',
            desc: 'Con más de 10 años de aprendizaje, incluyendo varias nota excelentes en la secundaria y el bachillerato, he logrado un nivel de fluidez notable. También ayudo a personas de origen hispana a mejorar sus habilidades de locutor'
        },
    ]

    return (
        <div className='skillSection'>
        <h3>Main Skills</h3>
        <div className='skillsContainer'>
            {array.map((item) => {
                return(
                    <div className='skillElement'>
                        <span className='skillTitle'>{item.name}</span>
                        <span className='skillDesc'>{item.desc}</span>
                    </div>
                )
            })}
        </div>
        </div>
    )
}