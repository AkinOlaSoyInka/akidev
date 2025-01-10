import '../App.css';

export default function Toolbar(){

    function focusContact(){
        document.getElementById("form_name").focus();
    }
    return(
        <div className='toolbarContainer'>
            <a href='https://github.com/AkinOlaSoyInka?tab=repositories' target='_blank'>
                <div className='toolbarElement'>Projects</div>
            </a>
            <div className='toolbarElement' onClick={()=> focusContact()}>
                Get in Touch
            </div>
            <a href='https://www.linkedin.com/in/akinola-soyinka-360a2916a' target='_blank'>
                <div className='toolbarElement'> LinkedIn</div>
            </a>
            
        </div>
    )
}