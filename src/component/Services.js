import React, { Component } from 'react'
import Title  from './Title'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'

export default class Services extends Component {
    state={
        services:[
            {
                icons: <FaCocktail/>,
                title: "free cocktails",
                info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, voluptate. Voluptas tenetur sed voluptatum error.'
            },
            {
                icons: <FaHiking/>,
                title: "Endless Hiking",
                info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, voluptate. Voluptas tenetur sed voluptatum error.'
            },
            {
                icons: <FaShuttleVan/>,
                title: "Free Shuttle",
                info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, voluptate. Voluptas tenetur sed voluptatum error.'
            },
            {
                icons: <FaBeer/>,
                title: "Strongest Beer",
                info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, voluptate. Voluptas tenetur sed voluptatum error.'
            }
        ]
    }
  render() {
      let mapServices = this.state.services.map((item,index)=>{
          return <article key={index} className="service">
            <span>{item.icons}</span>
            <h6>{item.title}</h6>
            <p>{item.info}</p>
          </article>
      })
      
    return (
      <div>
          <section className="services">
             <Title title="services" />
             <div className="services-center">
             {mapServices}
             </div>
          </section>
        
      </div>
    )
  }
}
