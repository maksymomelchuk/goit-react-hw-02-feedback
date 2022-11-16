import styled from '@emotion/styled';

export const Button = styled.button`
  margin-right: 10px;
  width: 130px;
  height: 40px;
  color: #000;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5) 7px 7px 20px 0px
      rgba(0, 0, 0, 0.1),
    4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;

  background: #d3d3d3;
  border: none;
  z-index: 1;

  :after {
    position: absolute;
    content: '';
    width: 100%;
    height: 0;
    top: 0;
    left: 0;
    z-index: -1;
    border-radius: 5px;
    background-color: #c3c3c3;
    background-image: linear-gradient(350deg, #f6d03a 10%, #1056b1 74%);
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5) 7px 7px 20px 0px
        rgba(0, 0, 0, 0.1),
      4px 4px 5px 0px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }
  :hover {
    color: #fff;
  }
  :hover:after {
    top: auto;
    bottom: 0;
    height: 100%;
  }
  :active {
    top: 2px;
  }
`;
