// import React, { useEffect, useState } from 'react';

// const ContactPopUp = ({ isOpen, onClose, children }) => {
//   const [hrWidth, setHrWidth] = useState('10px');

//   useEffect(() => {
//     if (isOpen) {
//       setHrWidth('100%');
//     } else {
//       setHrWidth('10px');
//     }
//   }, [isOpen]);

//   if (!isOpen) return null;

//   return (
//     <div className="modal d-block" tabIndex="-1" role="dialog">
//       <div className="modal-dialog" role="document">
//         <div className="modal-content">
//           <div className="modal-header">
//             <h5 className="modal-title">We will contact you soon!</h5>
//           </div>
//           <hr className="popupBorder" style={{ width: hrWidth }} />
//           <div className="modal-body">
//             {children}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactPopUp;
