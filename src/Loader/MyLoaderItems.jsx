import React from "react"
import ContentLoader from "react-content-loader"

const MyLoaderItems = (props) => (
  <ContentLoader 
    speed={3}
    width={232}
    height={365}
    viewBox="0 0 232 365"
    backgroundColor="#b3b3b3"
    foregroundColor="#ffffff"
    {...props}
  >
    <rect x="16" y="19" rx="20" ry="20" width="200" height="275" /> 
    <rect x="41" y="310" rx="3" ry="3" width="150" height="10" /> 
    <rect x="56" y="331" rx="3" ry="3" width="120" height="10" />
  </ContentLoader>
)

export default MyLoaderItems