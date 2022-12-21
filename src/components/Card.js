

export const Card =(props)=>{

    console.log("props in card",props)
    return (
    //     <div className="outerBox">
    //     <a href={props.link}>
    //         <img src={props.avatar} />
    //     </a>
    //     <div>
    //       <div className="title">{props.name}</div>
    //       <div className="description">{props.description}</div>
    //     </div>
    //   </div>

<div class="card" style={{width:"20%"}}>
<h5 class="card-title">{props.name}</h5>
<img class="card-img-top" alt="..." src={props.avatar} />
<div class="card-body">
 
  <p class="card-text">{props.description}</p>
  {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
</div>
</div>
    )
}
