import React, { useState } from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './RootLayout.css'

import beaches from '../media/beaches.png'
import hills from '../media/hills.png'
import deserts from '../media/deserts.png'
import lakefront from '../media/lakefront.png'
import farms from '../media/farms.png'
import jerusalem_color from '../media/jerusalem_color.jpg'
import bangalore_color from '../media/bangalore_color.jpg'
import ankara_color from '../media/ankara_color.jpg'

const RootLayout = () => {
  let NavList = [
    {
      image: beaches,
      name: "beaches"
    },
    {
      image: hills,
      name: "hills"
    },
    {
      image: deserts,
      name: "deserts"
    },
    {
      image: lakefront,
      name: "lakefront"
    },
    {
      image: farms,
      name: "farms"
    },
  ]

  const [TopActive, setTopActive] = useState("a")
  const [StoryActive, setStoryActive] = useState("a")
  const [BeachActive, setBeachActive] = useState("a")
  const [HillActive, setHillActive] = useState("a")
  const [DesertActive, setDesertActive] = useState("a")
  const [LakefrontActive, setLakefrontActive] = useState("a")
  const [FarmActive, setFarmActive] = useState("a")
  let BEACHES_Destinations = [
    {
      image: jerusalem_color,
      className: "DestiCard",
      name: "a"
    },
    {
      image: bangalore_color,
      className: "DestiCard",
      name: "b"
    },
    {
      image: ankara_color,
      className: "DestiCard",
      name: "c"
    }
  ]
  let HILLS_Destinations = [
    {
      image: jerusalem_color,
      className: "DestiCard",
      name: "a"
    },
    {
      image: bangalore_color,
      className: "DestiCard",
      name: "b"
    },
    {
      image: ankara_color,
      className: "DestiCard",
      name: "c"
    }
  ]
  let DESERTS_Destinations = [
    {
      image: jerusalem_color,
      className: "DestiCard",
      name: "a"
    },
    {
      image: bangalore_color,
      className: "DestiCard",
      name: "b"
    },
    {
      image: ankara_color,
      className: "DestiCard",
      name: "c"
    }
  ]
  let LAKEFRONT_Destinations = [
    {
      image: jerusalem_color,
      className: "DestiCard",
      name: "a"
    },
    {
      image: bangalore_color,
      className: "DestiCard",
      name: "b"
    },
    {
      image: ankara_color,
      className: "DestiCard",
      name: "c"
    }
  ]
  let FARMS_Destinations = [
    {
      image: jerusalem_color,
      className: "DestiCard",
      name: "a"
    },
    {
      image: bangalore_color,
      className: "DestiCard",
      name: "b"
    },
    {
      image: ankara_color,
      className: "DestiCard",
      name: "c"
    }
  ]
  return (
    <div className='w-100 text-white' id='TravelPage'>
      {/* navbar - beaches, hills, deserts, lakefront, farms*/}
      <Navbar >
          <div className='w-100 d-flex flex-column align-items-center'>
          <Nav className="d-flex navbarContainer mx-auto gap-2" id='NavList'> 
          {NavList.map(item=>(
            <a className='nav-link' href={`#${item.name}`} key={`${item.name}`} >
              <img className='navIcon' src={item.image} alt={`${item.name}`} />
              <div className='my-0'>{item.name}</div>
            </a>
          ))}
          </Nav>
          </div>
      </Navbar>


      {/* cards slide */}

      {/* top destinations */}
      <div className='w-100 d-flex justify-content-center mt-2 flex-wrap'>
        <div className='display-6 mx-5 text-start w-100'>Top Travel Destinations</div>
        {
          BEACHES_Destinations.map(
            (item, i)=>(
              <div 
              className={TopActive===item.name?"DestiCard active":"DestiCard"} 
              key={`${i}${item.image}`} 
              onClick={()=>{setTopActive(item.name)}}>
                <img src={item.image} alt={`${i}${item.image}`} />
              </div>
          ))
        }
      </div>

      {/* story worthy travels */}
      <div className='w-100 d-flex justify-content-center mt-2 flex-wrap'>
        <div className='display-6 mx-5 text-start w-100'>Story worthy travels</div>
        {
          HILLS_Destinations.map(
            (item, i)=>(
              <div 
              className={StoryActive===item.name?"DestiCard active":"DestiCard"} 
              key={`${i}${item.image}`} 
              onClick={()=>{setStoryActive(item.name)}}>
                <img src={item.image} alt={`${i}${item.image}`} />
              </div>
          ))
        }
      </div>
      

      {/* Beaches */}
      <div className='w-100 d-flex justify-content-center mt-2 flex-wrap'>
        <div className='display-6 mx-5 text-start w-100' id='beaches'>Beaches</div>
        {
          BEACHES_Destinations.map(
            (item, i)=>(
              <div 
              className={BeachActive===item.name?"DestiCard active":"DestiCard"} 
              key={`${i}${item.image}`} 
              onClick={()=>{setBeachActive(item.name)}}>
                <img src={item.image} alt={`${i}${item.image}`} />
              </div>
          ))
        }
      </div>
      

      {/* hills */}
      <div className='w-100 d-flex justify-content-center mt-2 flex-wrap'>
        <div className='display-6 mx-5 text-start w-100' id='hills'>hills</div>
        {
          HILLS_Destinations.map(
            (item, i)=>(
              <div 
              className={HillActive===item.name?"DestiCard active":"DestiCard"} 
              key={`${i}${item.image}`} 
              onClick={()=>{setHillActive(item.name)}}>
                <img src={item.image} alt={`${i}${item.image}`} />
              </div>
          ))
        }
      </div>
      

      {/* deserts */}
      <div className='w-100 d-flex justify-content-center mt-2 flex-wrap'>
        <div className='display-6 mx-5 text-start w-100' id='deserts'>deserts</div>
        {
          DESERTS_Destinations.map(
            (item, i)=>(
              <div 
              className={DesertActive===item.name?"DestiCard active":"DestiCard"} 
              key={`${i}${item.image}`} 
              onClick={()=>{setDesertActive(item.name)}}>
                <img src={item.image} alt={`${i}${item.image}`} />
              </div>
          ))
        }
      </div>
      

      {/* lakefront */}
      <div className='w-100 d-flex justify-content-center mt-2 flex-wrap'>
        <div className='display-6 mx-5 text-start w-100' id='lakefront'>lakefront</div>
        {
          LAKEFRONT_Destinations.map(
            (item, i)=>(
              <div 
              className={LakefrontActive===item.name?"DestiCard active":"DestiCard"} 
              key={`${i}${item.image}`} 
              onClick={()=>{setLakefrontActive(item.name)}}>
                <img src={item.image} alt={`${i}${item.image}`} />
              </div>
          ))
        }
      </div>
      

      {/* farms */}
      <div className='w-100 d-flex justify-content-center mt-2 flex-wrap'>
        <div className='display-6 mx-5 text-start w-100' id='farms'>farms</div>
        {
          FARMS_Destinations.map(
            (item, i)=>(
              <div 
              className={FarmActive===item.name?"DestiCard active":"DestiCard"} 
              key={`${i}${item.image}`} 
              onClick={()=>{setFarmActive(item.name)}}>
                <img src={item.image} alt={`${i}${item.image}`} />
              </div>
          ))
        }
      </div>
      
      


    </div>
  )
}

export default RootLayout