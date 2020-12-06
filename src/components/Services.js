import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'

export default class Services extends Component {
 state={
     services:[
         {
             icon: <FaCocktail/>,
             title:"free cocktails",
             info: 'We can offfer free welcome cocktails '
         },
         {
            icon: <FaHiking/>,
            title:"Endless Hiking",
            info: 'We can offfer free welcome cocktails '
        },
        {
            icon: <FaShuttleVan/>,
            title:"Free Shuttle",
            info: 'We can offfer free welcome cocktails '
        },
        {
            icon: <FaBeer/>,
            title:"Strongest Beer",
            info: 'We can offfer free welcome cocktails '
        }

     ]
 }
 
    render() {
        return (
           <section className="services">
               <Title title="services"/>
               <div className="services-center">
                   {this.state.services.map((item, index)=>{
                      return <article key={index}  className="service">
                          <span> {item.icon}</span>
                           <h6>{item.title}</h6>
                             <p>{item.info}</p>
                      </article>
                   })}
               </div>
           </section>
        )
    }
}
