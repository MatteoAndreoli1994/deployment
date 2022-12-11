import React from 'react'
import Gif from "./Images/Gif.gif"
import styled from 'styled-components'

const VideoContainer = styled.div`
width: 100%;



img{
    width: 100%;
    height: auto;
}
`


const CoverVideo = () => {
  return (
   <VideoContainer>
        <img src={Gif} />
   </VideoContainer>
  )
}

export default CoverVideo