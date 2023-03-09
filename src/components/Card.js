
//com
export const Card =(props)=>{

    console.log("props in card",props)
    return (
        <div className="outerBox">
            <div className="title">{props.name}</div>
        <a href={props.link} >
            <img src={props.avatar} />
        </a>
        <div>
        
          <div className="description">{props.description}</div>
        </div>
      </div>


    )
}
