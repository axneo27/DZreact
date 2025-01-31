import './App.css'
import React from 'react'

function AppFunction() {

  return (
    <>
      <div className="container">
        <div className="textInfo">
          <h1>Rivne, Ukraine</h1>
          <p>
          Rivne is a city in western Ukraine and the administrative center of Rivne Oblast. Located on the upper
          Pripet River, it is the historic region of Volhynia. Rivne has a population of 246,000. It was founded in 1283.
          </p>
        </div>
        <div className="images">
          <div className="firstrow">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/56-101-0116_%D0%A0%D1%96%D0%B2%D0%BD%D0%B5_DSC_6063_%D0%9A%D0%BE%D1%81%D1%82%D0%B5%D0%BB_%D1%81%D0%B2%D1%8F%D1%82%D0%BE%D0%B3%D0%BE_%D0%90%D0%BD%D1%82%D0%BE%D0%BD%D1%96%D1%8F.jpg/1599px-56-101-0116_%D0%A0%D1%96%D0%B2%D0%BD%D0%B5_DSC_6063_%D0%9A%D0%BE%D1%81%D1%82%D0%B5%D0%BB_%D1%81%D0%B2%D1%8F%D1%82%D0%BE%D0%B3%D0%BE_%D0%90%D0%BD%D1%82%D0%BE%D0%BD%D1%96%D1%8F.jpg" alt="" />
            <img src="https://www.omnivagant.com/wp-content/uploads/2019/08/023A8462-2.jpg" alt="" />
          </div>
          <div className="secondrow">
            <img src="https://ukrainetrek.com/images/rivne-ukraine-city-views-20.jpg" alt="" />
            <img src="https://travels.in.ua/api/Photo/PhotoStreamCIL/831" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}


class AppClass extends React.Component {
  render() {
    return <div className="container">
    <div className="textInfo">
      <h1>Rivne, Ukraine</h1>
      <p>
      Rivne is a city in western Ukraine and the administrative center of Rivne Oblast. Located on the upper
      Pripet River, it is the historic region of Volhynia. Rivne has a population of 246,000. It was founded in 1283.
      </p>
    </div>
    <div className="images">
      <div className="firstrow">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/56-101-0116_%D0%A0%D1%96%D0%B2%D0%BD%D0%B5_DSC_6063_%D0%9A%D0%BE%D1%81%D1%82%D0%B5%D0%BB_%D1%81%D0%B2%D1%8F%D1%82%D0%BE%D0%B3%D0%BE_%D0%90%D0%BD%D1%82%D0%BE%D0%BD%D1%96%D1%8F.jpg/1599px-56-101-0116_%D0%A0%D1%96%D0%B2%D0%BD%D0%B5_DSC_6063_%D0%9A%D0%BE%D1%81%D1%82%D0%B5%D0%BB_%D1%81%D0%B2%D1%8F%D1%82%D0%BE%D0%B3%D0%BE_%D0%90%D0%BD%D1%82%D0%BE%D0%BD%D1%96%D1%8F.jpg" alt="" />
        <img src="https://www.omnivagant.com/wp-content/uploads/2019/08/023A8462-2.jpg" alt="" />
      </div>
      <div className="secondrow">
        <img src="https://ukrainetrek.com/images/rivne-ukraine-city-views-20.jpg" alt="" />
        <img src="https://travels.in.ua/api/Photo/PhotoStreamCIL/831" alt="" />
      </div>
    </div>
  </div>;
  }
}

function AppFunction2() {
  return (
    <>
      <div className="container">
        <div className="textInfo">
          <h1>Apollo 8: The Thrilling Story of the First Mission to the Moon</h1>
          <h1 id="author">by Jeffrey Kluger</h1>
          <h3>Genre: History, Nonfinction, Science, Space</h3>
          <h3>Number of pages: 320</h3>
        </div>
      <div className="book">
        <img src="https://m.media-amazon.com/images/I/71-DK-hws-L._SY522_.jpg" alt="" id="bookImg"/>
        <div className="commentaries">
          <p>
          In August 1968, NASA made a bold decision: in just sixteen weeks, the United States would launch humankind's first flight to the moon. Only the year before, three astronauts had burned to death in their spacecraft, and since then the Apollo program had suffered one setback after another. Meanwhile, the Russians were winning the space race, the Cold War was getting hotter by the month, and President Kennedy's promise to put a man on the moon by the end of the decade seemed sure to be broken. But when Frank Borman, Jim Lovell and Bill Anders were summoned to a secret meeting and told of the dangerous mission, they instantly signed on. Apollo 8 takes us from Mission Control to the astronaut's homes, and the race to prepare an untested rocket for an unprecedented journey paves the way for the hair-raising trip to the moon. And when the mission is over-after the first view of the far side of the moon, the first earth-rise, and the first re-entry through the earth's atmosphere following a flight to deep space-the impossible dream of walking on the moon suddenly seems within reach.
          </p>
        </div>
      </div>
      </div>
    </>
  )
}

class AppClass2 extends React.Component {
  render() {
    return <div className="container">
    <div className="textInfo">
      <h1>Apollo 8: The Thrilling Story of the First Mission to the Moon</h1>
      <h1 id="author">by Jeffrey Kluger</h1>
      <h3>Genre: History, Nonfinction, Science, Space</h3>
      <h3>Number of pages: 320</h3>
    </div>
  <div className="book">
    <img src="https://m.media-amazon.com/images/I/71-DK-hws-L._SY522_.jpg" alt="" id="bookImg"/>
    <div className="commentaries">
      <p>
      In August 1968, NASA made a bold decision: in just sixteen weeks, the United States would launch humankind's first flight to the moon. Only the year before, three astronauts had burned to death in their spacecraft, and since then the Apollo program had suffered one setback after another. Meanwhile, the Russians were winning the space race, the Cold War was getting hotter by the month, and President Kennedy's promise to put a man on the moon by the end of the decade seemed sure to be broken. But when Frank Borman, Jim Lovell and Bill Anders were summoned to a secret meeting and told of the dangerous mission, they instantly signed on. Apollo 8 takes us from Mission Control to the astronaut's homes, and the race to prepare an untested rocket for an unprecedented journey paves the way for the hair-raising trip to the moon. And when the mission is over-after the first view of the far side of the moon, the first earth-rise, and the first re-entry through the earth's atmosphere following a flight to deep space-the impossible dream of walking on the moon suddenly seems within reach.
      </p>
    </div>
  </div>
  </div>;
  }
}

export default AppClass2

