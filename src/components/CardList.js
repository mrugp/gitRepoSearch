import React from 'react'
import { Card } from './Card'
 const CardList = (props) => {

    console.log(props)
    return (
        <>
        {props.repos.map((repo,index)=>{
           return(  
            <Card 
            avatar={repo.owner.avatar_url}
            name={repo.name}
            description={repo.description}
            key={repo.id}
            
              />)
        })}
        </>
    )
}

export default React.memo(CardList)
