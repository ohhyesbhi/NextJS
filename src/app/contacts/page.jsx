import React from 'react'
import Contacts from './Contacts'
import ServerBasedComponent from '../serverbasedcomponent/ServerBasedComponent'

function page() {
  return (
    <div>
      <Contacts>
        <ServerBasedComponent/>
      </Contacts>
    </div>
  )
}

export default page
