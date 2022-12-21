import React, { useCallback } from 'react'
import { useEffect, useState,useMemo } from 'react';
import axios from 'axios';
import ErrorBoundary from './ErrorBoundary'
import CardList from './CardList'
export const Search = () => {
  const [value, setValue] = useState('')
  const [repos, setRepos] = useState()
  const [sort, setSort] = useState()
  const [error, setError] = useState(false);

  const handleChange = (value) => {
    setValue(value)
  }

  useEffect(()=>{
    if(value !== ''){
    if (sort && (sort === 'stars' || sort === 'updated')) {
      console.log('in if sort', sort)
      axios.get(`https://api.github.com/search/repositories?q=${value}&sort=${sort}&order=desc`)
        .then(result => setRepos(result.data.items)).catch((error) => {
          console.error(error);
          //setLoading(false);
          setError(true);
        });
    } else if (sort && repos) {
         customSort(repos, sort)
    }
    
}

  },[sort,repos])

  const submitValue = async () => {

  //   if (sort && (sort === 'stars' || sort === 'updated')) {
  //     console.log('in if sort', sort)
  //     axios.get(`https://api.github.com/search/repositories?q=${value}&sort=${sort}&order=desc`)
  //       .then(result => setRepos(result.data.items))
  //   } else if (sort && repos) {
  //        customSort(repos, sort)
  //   }
  //   else {
     
  //     axios.get(`https://api.github.com/search/repositories?q=${value}`)
  //     .then(result => setRepos(result.data.items))
  // }

 
     
      axios.get(`https://api.github.com/search/repositories?q=${value}`)
      .then(result => setRepos(result.data.items)).catch((error) => {
        console.error(error);
        //setLoading(false);
        setError(true);
      });
  
    }
  
  const setSortValue = () => {
    let selectElement = document.querySelector('#select1');
    console.log('sort called', selectElement.value)
     setSort(selectElement.value)
    submitValue()


  }

  const customSort = (items, sort) => {
    
    switch (sort) {
      case "watchers_count":
        items.sort((a, b) =>
          a.watchers_count - b.watchers_count
           
        );
        break;
      case "score":
        items.sort((b,a) =>
        a.score > b.score ? 1 : b.score > a.score ? -1 : 0
        );
        break;
      case "name":
        items.sort((a, b) => 
        (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
        break;
      case "created":
        items.sort((a, b) =>
          a.created_at - b.created_at
        );
        break;


      default:
        break;


    }
    
    setRepos([])
    setRepos([...items ]);
  };
 
  if(error){
    return (<ErrorBoundary/>)
  }

  return (<>
   
    <div class="bs-example">
    <nav class="navbar navbar-expand-md navbar-light bg-light">
        <a href="#" class="navbar-brand">Dice</a>
        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            {/* <span class="navbar-toggler-icon"></span> */}
            <i class="fa fa-search"></i>
        </button>

        <div class="collapse navbar-collapse justify-content-center" id="navbarCollapse">
            <div class="navbar-nav">
                
                <div class="nav-item dropdown">
                    {/* {/* {/* <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Sort</a>  */}
                    
                   
                   

                  
                </div>
    
            </div>
            <form class="form-inline" >
                <div class="input-group">                    
                
                    <input type="text" class="form-control" placeholder="Search for a Github repository..." value={value} onChange={(event) => handleChange(event.target.value)}/>
                    <div class="input-group-append">
                        <button type="button" class="btn btn-secondary" onClick={submitValue}><i class="fa fa-search"></i></button>
                    </div>
                </div>
            </form>

            <select id="select1" name="ddl" onChange={setSortValue}>
                            <option value=''>Sort</option>
                            <option value='stars'>Stars</option>
                            <option value='watchers_count'>Watchers Count</option>
                            <option value='score'>Score</option>
                            <option value='name'>name</option>
                            <option value='created'>Created at</option>
                            <option value='updated'>Updated at</option>
                    </select> 
           
        </div>
    </nav>
</div>

    

    {repos && <CardList repos={repos} />}
    
  </>
  )
}

//export default Search
