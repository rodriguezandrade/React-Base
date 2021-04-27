import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import { GifGrid }  from './components/GifGrid'


const GifExpertApp = () => {
 
    const [categories, setCategories] = useState(['Baleadas'])
 
    return (
        <>
            <h2>GiffExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr /> 
            <ol>
                {
                    categories.map(category => {
                     return <GifGrid
                      key={category}
                      category={category} 
                      ></GifGrid>
                    })  
                }
            </ol>
        </>
    )
}

export default GifExpertApp;