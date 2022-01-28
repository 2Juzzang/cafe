import React from 'react';
import styled from 'styled-components';
const Button = (props) => {
  const {
    children,
    display,
    justifyContent,
    alignItems,
    width,
    height,
    margin,
    padding,
    _onSubmit,
    _onClick,
    bg,
    color,
    borderWidth,
  } = props;
  const styles = {
    display,
    justifyContent,
    alignItems,
    width,
    height,
    margin,
    padding,
    bg,
    color,
    borderWidth,
  };
  return (
    <DefaultButton {...styles} onSubmit={_onSubmit} onClick={_onClick}>
      {children}
    </DefaultButton>
  );
};
Button.defaultProps = {
  children: null,
  display: null,
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  margin: '',
  padding: '',
  bg: null,
  color: null,
  borderWidth: null,
  _onSubmit: () => {},
  _onClick: () => {},
};
const DefaultButton = styled.button`
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};
  border-width: ${(props) => props.borderWidth};
`;
export default Button;
