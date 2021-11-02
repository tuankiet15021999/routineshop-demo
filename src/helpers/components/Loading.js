import React from 'react'

const Loading = ({display})=>{
    console.log(display);
    return (
        <div class={"lds-dual-ring "+ display}></div>
    )
}

export default Loading