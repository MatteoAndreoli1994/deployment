import React from 'react'
import GIF from "./Images/GIF.gif"
import styled from 'styled-components'

const VideoContainer = styled.div`
width: 100%;

img{
    width: 100%;
    height: 100%
}
`


const CoverVideo = () => {
  return (
   <VideoContainer>
        <img src={GIF} />
   </VideoContainer>
  )
}

export default CoverVideo