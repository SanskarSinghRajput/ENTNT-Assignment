import { useState } from 'react'
import './Dashboard.css'
import Header from './Header'
import Sidebar from './Sidebar'
import DataGraph from './DataGraph'

const Dashboard = () => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }
  
    return (
      <div className='grid-container'>
        <Header OpenSidebar={OpenSidebar}/>
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
        <DataGraph />
      </div>
    )
}

export default Dashboard

