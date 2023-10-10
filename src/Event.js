
import { useEffect, useRef } from "react"

function Event(props) {
    const event_ref = useRef()
    const { innerWidth: width, innerHeight: height } = window;
    let dist;
    useEffect(
        () => {
        }
    )

    if(event_ref.current) {
        let x_value = event_ref.current.offsetLeft;
        let y_value = event_ref.current.offsetTop;
        dist = Math.sqrt(Math.pow(x_value - props.mousePosition.x, 2) + Math.pow(y_value - props.mousePosition.y, 2))
    } else {
        dist = 0
    }
    let col = 1/(dist/width) * 255
    console.log(col)
    return <>
    <div 
    style={{ filter: "blur(" + (dist/width) * 12 + "px)", top: props.position[1] + "%", left: props.position[0] + "%", color: "rgba("+ 0 + ", " + 0 +", " + 0 + ", " + col + ")"}}
    ref = {event_ref} className="event_item" onPointerOver={()=> {props.setHandHover(true); props.setFocalDist(0.001)}} onPointerOut={()=>{props.setHandHover(false)}} onClick={()=>{props.setOpen(true)}}>
        <h1> {props.year}</h1>
    <h2>
        {props.title}
    </h2>
    <h1>
        8:30PM - 9:30PM
    </h1>
    <h3>

    </h3>
    </div>

    </>
}
export default Event