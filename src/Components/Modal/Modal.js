// import { useEffect, useState } from "react";
// import { Modal, Button } from "react-bootstrap";

// export default function MyVerticallyCenteredModal(props) {
//     const key = props.productkey;
//     const [product, setProduct] = useState({})
//         // fetch(`http://localhost:5252/singleProduct/${key}`)
//         // .then(res => res.json())
//         // .then(pd => setProduct(pd[0]))
//     return (
//       <Modal
//         {...props}
//         size="lg"
//         aria-labelledby="contained-modal-title-vcenter"
//         centered
//       >
//         <Modal.Header closeButton>
//           <Modal.Title id="contained-modal-title-vcenter">
//             Product Details
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <h4>{product.name}</h4>
//           <p>
//             Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
//             dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
//             consectetur ac, vestibulum at eros.
//           </p>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button onClick={props.onHide}>Close</Button>
//         </Modal.Footer>
//       </Modal>
//     );
//   }