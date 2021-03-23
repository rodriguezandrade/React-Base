import React, { useState } from 'react'
import AddCategory from './components/AddCategory'


const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball'])

    // const handleAdd = () => {
    //     setCategories(cat => ['Hello Moto', ...cat]);
    // }

    return (
        <>
            <h2>GiffExpertApp</h2>
            <AddCategory/>
            <hr /> 
            <ol>
                {
                    categories.map(item => {
                        return <li key={item}>{item}</li>
                    })  
                }
            </ol>
        </>
    )
}

export default GifExpertApp;