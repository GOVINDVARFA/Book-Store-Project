import React from 'react'
import list from './MenuApi'
import Card from './Card'

const Main = ({handleChange}) => {
  return (
    <div>
        <section>
            {list.map((item)=>{
                return <Card item={item}  handleChange={handleChange}/>
            })}
        </section>
    </div>
  )
}
export default Main;

