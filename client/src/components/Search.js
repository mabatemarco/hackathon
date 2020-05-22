import React, { useState, useEffect } from 'react'
import '../css/Search.css';
import { Link } from 'react-router-dom';


export default function Search(props) {
  const [allUsers, setAllUsers] = useState(props.allUsers)
  const [selected, setSelected] = useState([])

  useEffect(() => {
    let first = 'zzzzzzzz'
    let last = 'zzzzzzzz'
    if (props.search.split(' ').length > 1) {
      first = props.search.split(' ')[0].toLowerCase()
      last = props.search.split(' ')[1].toLowerCase()
    } else if (props.search.split(' ').length == 1) {
      first = props.search.toLowerCase()
    }
    let selected = allUsers.filter(user => {
      return user.first_name.toLowerCase().includes(first) || user.last_name.toLowerCase().includes(first) || user.username.toLowerCase().includes(first) || user.title.toLowerCase().includes(first) || user.last_name.toLowerCase().includes(last) || user.title.toLowerCase().includes(last)
    })
    setSelected(selected)
  }, [props.search])

  return (
    <div className='search'>
      <div className="search-filters">
        <div className='search-filters-options'>
          <h3>Filter Results</h3>
          <hr />
          <h4>Regional HQ</h4>
          <div className='search-filters-checkboxes'>
            <input type="checkbox" name="newYork" />
            <label for="newYork"> New York</label><br />
            <input type="checkbox" name="boston" />
            <label for="boston"> Boston</label><br />
            <input type="checkbox" name="Dublin" />
            <label for="Dublin"> Dublin</label><br />
            <input type="checkbox" name="Paris" />
            <label for="Paris"> Paris</label><br />
            <input type="checkbox" name="Tokyo" />
            <label for="Tokyo"> Tokyo</label><br />
            <input type="checkbox" name="Sydney" />
            <label for="Sydney"> Sydney</label><br />
            <input type="checkbox" name="Singapore" />
            <label for="Singapore"> Singapore</label><br />
          </div>
          <hr />
          <h4>Status</h4>
          <div className='search-filters-checkboxes'>
            <input type="checkbox" name="office" />
            <label for="office"> At the office</label><br />
            <input type="checkbox" name="home" />
            <label for="home"> Working from home</label><br />
            <input type="checkbox" name="vacation" />
            <label for="vacation"> On vacation</label><br />
          </div>
          <hr />
          <h4>Department</h4>
          <hr />
          <div className='search-filters-checkboxes'>
            <input type="checkbox" name="unavailable" />
            <label for="unavailable"> Include unavailable</label><br />
          </div>
          <hr />
        </div>
      </div>
      <div className="search-results">
        {selected.length > 0 ? selected.map(person => (
          <Link to={`/profile/${person.id}`}>
            <div className='search-results-person'>
              <div className='search-results-person-image'>
                <img src={person.image} />
              </div>
              <div className='search-results-person-content'>
                <h6>{person.first_name} {person.last_name}</h6>
                <p>{person.title}</p>
                <p>{person.city}, {person.state}</p>
              </div>
            </div>
          </Link>
        )) :
          <>
            <h3>No users were found with that info. Search again or browse through our other users.</h3>
            {allUsers.map(person => (
              <Link to={`/profile/${person.id}`}>
                <div className='search-results-person'>
                  <div className='search-results-person-image'>
                    <img src={person.image} />
                  </div>
                  <div className='search-results-person-content'>
                    <h6>{person.first_name} {person.last_name}</h6>
                    <p>{person.title}</p>
                    <p>{person.city}, {person.state}</p>
                  </div>
                </div>
              </Link>
            ))}
          </>
        }
      </div>
    </div>
  )
}
