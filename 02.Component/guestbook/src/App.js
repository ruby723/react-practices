import React,{useRef} from 'react';
import GuestBook from './GuestBook';
import './assets/scss/App.scss';

export default function App() {

    const outterRef = useRef(null);
    const innerRef = useRef(null);

    function onScroll(e){
        if(outterRef.scrollTop - outterRef)
        console.log(outterRef.current.scrollTop, ":", outterRef.current.clientHeight, ":", innerRef.current.clientHeight );
    }

    return (
        <div
                ref={ ref => outterRef.current = ref }
                className={'App'}
                onScroll={ onScroll }>
                <div ref={ ref => innerRef.current = ref }>
            <GuestBook />
            </div>
        </div>
    )
}