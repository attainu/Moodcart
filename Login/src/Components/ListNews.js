import React from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";

const ListNews = ({ snews, flippy, mode }) => {
  if (snews !== undefined) {
    return (
      <Flippy
        flipOnHover={false}
        flipOnClick={true}
        mode={mode}
        flipDirection='horizontal'
        ref={(r) => (flippy = r)}
        className='flips'
        style={{
          textAlign: "left",
          width: "400px",
          height: "500px",
          margin: "20px",
          transition: "2s",
          paddingRight: "10px",
          overflow: "hidden",
          position: "inherit",
        }}>
        <FrontSide
          style={{
            background: "#4481eb",
            color: "white",
            position: "relative",
            padding: "0px",
          }}>
          <img
            src={snews.image}
            alt='img'
            style={{
              width: "390px",
              height: "200px",
              background: "#4481eb",
              color: "white",
            }}
          />
          <div style={{ margin: "5px" }}>
            <h4>
              <span style={{ fontWeight: "bold" }}>Title: </span>
              {snews.title}
            </h4>
            <p>
              <span style={{ fontWeight: "bold" }}>Description: </span>
              {snews.description}
            </p>
          </div>
        </FrontSide>
        <BackSide style={{ color: "white", background: "#4481eb" }}>
          <p>{snews.summarization}</p>
        </BackSide>
      </Flippy>
    );
  } else {
    return <h1>Hello</h1>;
  }
};

// const ListNews = ({ snews, ...restProps }) => {
//   const [collapse, setCollapse] = useState(false);
//   const [status, setStatus] = useState("Closed");
//   const onEntering = () => setStatus("Opening...");
//   const onEntered = () => setStatus("Opened");
//   const onExiting = () => setStatus("Closing...");
//   const onExited = () => setStatus("Closed");
//   const toggle = () => setCollapse(!collapse);
//   if (toggle) {
//     console.log("yes");
//   } else {
//     console.log("no");
//   }

//   if (snews != undefined) {
//     return (
//       <div>
//         <Card style={{ width: "400px", height: "500px" }}>
//           !toggle ?
//           {
//             <Card>
//               <Collapse
//                 isOpen={collapse}
//                 onEntering={onEntering}
//                 onEntered={onEntered}
//                 onExiting={onExiting}
//                 onExited={onExited}>
//                 {!snews.summarization ? snews.description : snews.summarization}
//               </Collapse>
//             </Card>
//           }
//           :
//           {
//             <Card>
//               <img
//                 top
//                 style={{ width: "400px", height: "200px" }}
//                 src={snews.image}
//                 alt='Card image cap'
//               />
//               <CardBody style={{ textAlign: "left" }}>
//                 <h5>title:{snews.title}</h5>
//                 <CardText>description:{snews.description}</CardText>
//               </CardBody>
//               <Button
//                 color='primary'
//                 onClick={toggle}
//                 style={{ marginBottom: "1rem" }}>
//                 Toggle
//               </Button>
//             </Card>
//           }
//         </Card>
//         <h5>Current state: {status}</h5>
//       </div>
//     );
//   }
// };

export default ListNews;
