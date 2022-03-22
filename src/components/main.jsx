import React, { useState } from "react";
import { GallaryData } from "./gallaryData";

const Main = () => {
  let [current, setCurrent] = useState(0);
  let length = GallaryData.length;

const next=()=>{
    setCurrent(current === length-1 ? 0 : current+1)
    
    
}
const previous =()=>{
  setCurrent(current === 0 ? length-1 : current-1 )
}

// setTimeout(next, 3000);

  return (
    <React.Fragment>
      <div className="gallary-container">
        {GallaryData.map((img, index) => {
          return (
            <div key={img.id} className={current === index ? "main-img active fade" : "main-img"}>
              <img src={img.imgSrc} alt={img.imgAlt} />
            </div>
          );
        })}
        <span className="prev" onClick={previous}>&#10094;</span>
        <span className="next" onClick={next}>&#10095;</span>
      </div>
    </React.Fragment>
  );
};

export default Main;

// class Main extends Component {
//   state = {
//     pics: [
//       {
//         id: 1,
//         imgSrc: "../Main_pic.jpg",
//         imgAlt: "Main Pic",
//       },
//       {
//         id: 2,
//         imgSrc: "../pic3.jpg",
//         imgAlt: "Pic3",
//       },
//       {
//         id: 3,
//         imgSrc: "../pic4.jpg",
//         imgAlt: "Pic4",
//       },
//     ],
//   };

//   slideShow = () => {

//     const [current , setCurrent ] =useState(0)
//     let length = this.state.pics.length

//     return (
//       <div className="gallary-container">
//         {this.state.pics.map((x) => (
//           <div key={x.id}  className="main-img">
//             <img src={x.imgSrc} alt={x.imgAlt} />
//           </div>
//         ))}
//         <span className="prev" >
//           &#10094;
//         </span>
//         <span className="next" >
//           &#10095;
//         </span>
//       </div>
//     );
//   };

//   render() {
//     return <React.Fragment>{this.slideShow()}</React.Fragment>;
//   }
// }

// export default Main;
