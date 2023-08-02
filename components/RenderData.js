import React from 'react';

const RenderData = ({data}) => {
    console.log(data)
    return (
        <div>
      
            <div className='p-4 m-4 border rounded-xl border-white '>
                <div className='grid grid-flow-row'>
                    <h1>{data.name}</h1>
                    <p>{data.id}</p>
                </div>
            </div>
        </div>
    );
}

export default RenderData;
