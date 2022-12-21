import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import CardList from './CardList'
export const Search = () => {
  const [value, setValue] = useState('')
  const [repos, setRepos] = useState()
  const [sort, setSort] = useState()

  // const sortOptions =[Stars, watchers count, score, name,created_at, updated_at.]
  const handleChange = (value) => {
    setValue(value)
  }

  useEffect(()=>{
    if (sort && (sort === 'stars' || sort === 'updated')) {
      console.log('in if sort', sort)
      axios.get(`https://api.github.com/search/repositories?q=${value}&sort=${sort}&order=desc`)
        .then(result => setRepos(result.data.items))
    } else if (sort && repos) {
         customSort(repos, sort)
    }
    else {
     
      axios.get(`https://api.github.com/search/repositories?q=${value}`)
      .then(result => setRepos(result.data.items))
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
      .then(result => setRepos(result.data.items))
  
    }
  
  const setSortValue = () => {
    let selectElement = document.querySelector('#select1');
    console.log('sort called', selectElement.value)
     setSort(selectElement.value)
    submitValue()


  }

  const customSort = (items, sort) => {
    // switch (sort) {
    //   case "watchers_count":
    //     items.sort((a, b) =>
    //       a.watchers_count > b.watchers_count
    //         ? 1
    //         : b.watchers_count > a.watchers_count
    //           ? -1
    //           : 0
    //     );
    //     break;
    //   case "score":
    //     items.sort((a, b) =>
    //       a.score > b.score ? 1 : b.score > a.score ? -1 : 0
    //     );
    //     break;
    //   case "name":
    //     items.sort((a, b) => 
    //     (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
    //     break;
    //   case "created":
    //     items.sort((a, b) =>
    //       a.created_at > b.created_at ? 1 : b.created_at > a.created_at ? -1 : 0
    //     );
    //     break;


    //   default:
    //     break;
    // }
    // setRepos(items);
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

    setRepos(items);
  };


  return (<>
    <div class="input-group">
      <div class="form-outline">
        <input type="search" id="form1" className="form-control" value={value} onChange={(event) => handleChange(event.target.value)} />
        {/* <label class="form-label" for="form1">Search</label> */}
        <button onClick={submitValue} disabled={value===''}>
          Search
        </button>
      </div>

      <select id="select1" name="ddl" onChange={setSortValue}>
        <option value='stars'>Stars</option>
        <option value='watchers_count'>Watchers Count</option>
        <option value='score'>Score</option>
        <option value='name'>name</option>
        <option value='created'>Created at</option>
        <option value='updated'>Updated at</option>
      </select>

    </div>

    {repos && <CardList repos={repos} />}

  </>
  )
}

//export default Search
