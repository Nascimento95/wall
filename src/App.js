import React from 'react'

import users from './users.json'
import Card from './components/Card'

class App extends React.Component {
  render() {
    return (
        
        <div className="row tab ">
          <p>the Wall</p>
          {users.map(name => name =  
          <div className="col-6 mt-4 border border-1"> 
            <div className=" d-flex align-items-center">
              <img  src={name.picture}/>  
              <h1 className="ms-5">{name.name}</h1> 
            </div>
            <p>{name.about}</p>
          </div> )}
        </div>
    )
  }
}

export default App