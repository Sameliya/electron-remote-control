import styled from 'styled-components';
import headerImg from '../../assets/header.png';
import {useEffect, useState} from "react";

const ipcRenderer = (window as any).ipcRenderer;

const Main = () => {
  const [Code, setCode] = useState('');
  const [validata, setValidata] = useState(1)
  useEffect(() => {
    ipcRenderer.login(setCode)
  },[])
  return (
    <Container>
      <UserPanel>
        <UserHeader>
          <RoundImg src={headerImg} alt="用户头像"/>
        </UserHeader>
      </UserPanel>
      <ControlPanel>
        <ControlCode>
          <ControlCodeContainer>
            <ControlCodeTitle>本机控制码</ControlCodeTitle>
            <ControlCodeText>{Code}</ControlCodeText>
          </ControlCodeContainer>
          <ControlCodeContainer>
            <ControlCodeTitle>校验码</ControlCodeTitle>
            <ControlCodeText>XXX XXX XXX</ControlCodeText>
          </ControlCodeContainer>
        </ControlCode>
        <Control>
          <form>
            <LabelText>
              <label htmlFor="control_code">受控端控制码</label>
            </LabelText>
            <Input type="text" id="control_code"/>
            <LabelText>
              <label htmlFor="validate_code">校验码</label>
            </LabelText>
            <Input type="text" id="validate_code"/>
            <ButtonContainer>
              <Button>远程协同</Button>
            </ButtonContainer>
          </form>
        </Control>
      </ControlPanel>
    </Container>
  );
};
export default Main;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const UserPanel = styled.div`
  width: 30%;
  box-shadow: -1px 3px 18px -1px rgb(0 0 0 / 10%);
`;

const ControlPanel = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const ControlCode = styled.div`
  width: 50%;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1rem 0 1rem;
`;

const Control = styled.div`
  flex: 1;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const UserHeader = styled.div`
  height: 30vw;
  width: 30vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RoundImg = styled.img`
  height: 15vw;
  width: 15vw;
  border-radius: 50%;
`;

const LabelText = styled.div`
  width: 100%;
  font-size: 2rem;
  color: gray;
`;

const ButtonContainer = styled.div`
  width: 100%;
  margin-top: 2rem;
  text-align: center;
`;
const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  font-size: 2.5rem;
  border: none;
  color: #273346;
  padding: 1rem;
  background-color: #f8f8fa;
`;

const Button = styled.button`
  height: 3rem;
  width: 10rem;
  font-size: 1.2rem;
  border-radius: 4rem;
  color: #1890ff;
  border: 1px solid transparent;
  /* text-shadow: 0 -1px 0 rgb(0 0 0 / 12%); */
  box-shadow: 0 2px #0000000b;
  outline: none;

  &:hover {
    color: #fff;
    border-color: #1890ff;
    background-color: #1890ff;
  }
`;

const ControlCodeContainer = styled.div`
  width: 100%;
`

const ControlCodeTitle = styled.span`
  display: inline-block;
  width: 100%;
  font-size: 2rem;
  color: gray;
`
const ControlCodeText = styled.span`
  font-size: 1.6rem;
  color: #000;
`
