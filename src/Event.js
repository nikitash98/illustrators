


function Event(props) {
    return <>
    <div className="event_item" onPointerOver={()=> {props.setHandHover(true)}} onPointerOut={()=>{props.setHandHover(false)}}>

    <h1>
        {props.title}
    </h1>
    <h3>

    </h3>
    </div>

    </>
}
export default Event