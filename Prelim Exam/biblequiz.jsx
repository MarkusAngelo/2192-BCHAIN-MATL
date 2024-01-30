import "../App.css";
const show = true;

export default function BibleQuiz(){
    
    return(
    <>
    <div>
        <h3>The Bible Quiz</h3>
        <hr />
        <ol>
            <li>
                The bible consists of the Old and New Testaments
                <p className={`${show === true ? "show" : "hide"}`}><TrueOrFalse answer="true"  /></p>
            </li>
            <li>
                Moses led the Israelites out of Egypt
        
                <p className={`${show === true ? "show" : "hide"}`}><TrueOrFalse answer="true" /></p>
            </li>
            <li>
                The Sermon on the Mount is found in the Book of Luke
                <p className={`${show === true ? "show" : "hide"}`}><TrueOrFalse answer="false" /></p>
            </li>
        </ol>
    </div>

    </>
    )

function True(){
    return <h4 className="correct" >Correct!</h4>
}

function False(){
    return <h4 className="wrong" >Incorrect</h4>
}

function TrueOrFalse(props){
    const isCorrect = props.answer;
    return isCorrect === "true" ? <True /> : <False />
}



}