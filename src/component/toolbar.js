import '../App.css';

export default function Toolbar(){
    return(
        <div className='toolbarContainer'>
            <div className='toolbarElement'>
               <a href='https://github.com/AkinOlaSoyInka?tab=repositories' target='_blank'>Projects</a>
            </div>
            <div className='toolbarElement'>
                Get in Touch
            </div>
            <div className='toolbarElement'>
                <a href='https://www.linkedin.com/in/akinola-soyinka-360a2916a' target='_blank'>LinkedIn</a>
            </div>
        </div>
    )
}