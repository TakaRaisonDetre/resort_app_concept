import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../context'
import Title from '../components/Title'

// get all unique values of types
const getUnique = (items, value)=>{
    return [...new Set(items.map(item => item[value]))]
}

export default function RoomsFilter({rooms}) {
 
    const context = useContext(RoomContext);
    const {handleChange, type, capacity, 
        price, minPrice, maxPrice, 
        minSize, maxSize,
    breakfast, pets} = context;
// get unique types
let types = getUnique(rooms, 'type');
// add all
types = ['all', ...types];
// map to jsx
types = types.map((item,index)=>{
    return <option value={item} key={index}>{item}</option>
})

let people = getUnique(rooms, "capacity");
people=people.map((item, index)=>{
return <option key={index} value={item}>{item}</option>
})
    return (
        <section className="filter-container">
          <Title title="search rooms"/>
          <form className="filter-form">
              {/* select type */}
              <div className="form-group">
                  <label htmlFor="type">room type</label>
                  <select className="form-control" 
                  name="type" id="type" value={type}
                  onChange={handleChange}>
                  
                  {types}

                  </select>
              
               </div>
                {/* end select type */}

                  {/* select guest */}
              <div className="form-group">
                  <label htmlFor="capacity">guests</label>
                  <select className="form-control" 
                  name="capacity" id="capacity" value={capacity}
                  onChange={handleChange}>
                  
                  {people}

                  </select>
              
               </div>
                {/* end select guest */}

                {/* room price */}
                 <div className="form-group">
                     <label htmlFor="price">
                         Room price ${price}
                     </label>
                     <input type="range" name="price" min ={minPrice} max={maxPrice} id ="price" value={price} onChange={handleChange} className="form-control"/>
                 </div>
                 {/* end price */}
                {/* size  */}
                <div className="form-group">
                <label htmlFor="size">
                    Room Size
                     </label>
                     <div className="size-inputs">
                         <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className="size-input"/>
                         <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} className="size-input"/>
                     </div>
                </div>
                {/* end of size  */}
                {/* extra */}
 <div className="form-group">
     <div className="single-extra">
         <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange}/>
         <label htmlFor="breakfast">breakfast</label>
         <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange}/>
         <label htmlFor="pets">Pets</label>
     </div>
 </div>
                {/* end extra */}
          </form>
        </section>
        
    )
}
