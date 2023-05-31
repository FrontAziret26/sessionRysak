import styled from "@emotion/styled";
import { Button } from "@mui/material";


export const Modal = ({ value, onChange, setOpenModal,saveHandler }) => {
  return (
    <ModalContainer>
     <div>
     <input type="text" value={value} onChange={onChange} />
      <Button variant="contained" onClick={saveHandler}>Save</Button>
      <Button variant="contained" onClick={() => setOpenModal(false)}>Cancel</Button>
   
      
     </div>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  position: fixed;
  z-index: 1;
  top: 25%;
  left: 37%;

  background-color: aqua;
  width: 400px;
  height: 100px;
  border-radius: 10px;
  border: 1px solid red;
`;
