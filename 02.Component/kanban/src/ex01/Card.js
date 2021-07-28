import React from 'react';

export default function CardList({ title }){
    return(
        <div className='Card'>
          <div className='Card__Title'>{title}</div>
          <div className='Card__Details'>
            { description }
            <TaskList tasks={tasks} />
          </div>
        </div>
    )
}