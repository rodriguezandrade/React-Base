import React from "react";
import { GifGridItem } from './GifGridItem';
import {  useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {
    var { data, loading } = useFetchGifs(category);

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>

            {loading && <p className="animate__animated animate__flash">Loading</p>}
            <div className="card-grid">   
                    {
                        data.map(img => (
                            <GifGridItem
                                key={img.id}
                                {...img} />
                        ))
                    }
            </div>
        </>
    )
}