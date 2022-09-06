import { Navbar } from 'responsive-navbar-react'
import 'responsive-navbar-react/dist/index.css'

const ResNav = () =>{
    const props = {
        items: [
          {
            text: 'Home',
            link: '/'
          },
          {
            text: 'Search Activities',
            link: '/searchactivity'
          },
          {
            text: 'Find a Aged Care Home',
            link: '/findhome'
          },
          {
            text: 'Entitled Government Benefits',
            link: '/benefits'
          }
        ],
        logo: {
          text: 'Careworx'
        },
        style: {
          barStyles: {
            background: '#0C80E6'
          },
          sidebarStyles: {
            background: '#222',
            buttonColor: 'white'
          }
        }
    }
    return (
        <div className="home">
            <Navbar {...props}/>
        </div>  
    )
    

};

export default ResNav;