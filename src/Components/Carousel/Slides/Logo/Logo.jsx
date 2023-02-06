import React from "react"
import "../../../CSS/logo.css"

const Logo = () =>{
  return(
    <div className="box">
      <div className="stains"></div>
      <div className="point">
        <div className="whiteLine">
          <div className="shadowLine"></div>
        </div>
      </div>
      <div className="rightWing">
        <div className="rightTopCircle"></div>
        <div className="rightTopCircleBorder"></div>
        <div className="rightBottomCircle"></div>
        <div className="rightBottomCircleBorder"></div>
      </div>
      <div className="leftWing">
        <div className="leftTopCircle"></div>
        <div className="leftTopCircleBorder"></div>
        <div className="leftBottomCircle"></div>
        <div className="leftBottomCircleBorder"></div>
      </div>
      <div className="rightStrips">
        <div className="topTriangle"></div>
        <div className="topTriangleBorder"></div>
        <div className="centerTriangle"></div>
        <div className="centerTriangleBorder"></div>
        <div className="bottomTriangle"></div>
        <div className="bottomTriangleBorder"></div>
      </div>
      <div className="leftStrips">
        <div className="topTriangle"></div>
        <div className="topTriangleBorder"></div>
        <div className="centerTriangle"></div>
        <div className="centerTriangleBorder"></div>
        <div className="bottomTriangle"></div>
        <div className="bottomTriangleBorder"></div>
      </div>
      <div className="cloud">
        <div className="cloudFormBlackBorder"></div>
        <div className="cloudForm"></div>
        <div className="cloudFormBorder"></div>
        <div className="topTipBorder"></div>
        <div className="topTip"></div>
        <div className="circleLeftCircle"></div>
        <div className="circleLeftFormBlackBorder"></div>
        <div className="circleLeftFormBorder"></div>
        <div className="circleRightCircle"></div>
        <div className="circleRightFormBlackBorder"></div>
        <div className="circleRightFormBorder"></div>
        <div className="circleBottomLeftBorder"></div>
        <div className="circleBottomLeftFormWhiteCircle"></div>
        <div className="circleBottomLeftFormWhiteBox"></div>
        <div className="circleBottomRightBorder"></div>
        <div className="circleBottomRightFormWhiteCircle"></div>
        <div className="circleBottomRightFormWhiteBox"></div>
        <div className="name">
          Bienvenido
        </div>
      </div>
      <div className="lines"></div>
    </div>
  )
}

export { Logo }