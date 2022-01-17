import React from 'react';
import styled from 'styled-components';
const Button = (props) => {
  const {
    children,
    display,
    justifyContent,
    alignItems,
    width,
    margin,
    padding,
    _onSubmit,
    _onClick,
    bg,
  } = props;
  const styles = {
    display,
    justifyContent,
    alignItems,
    width,
    margin,
    padding,
    bg,
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
  margin: '',
  padding: '',
  bg: null,
  _onSubmit: () => {},
  _onClick: () => {},
};
const DefaultButton = styled.button`
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.bg};
`;
export default Button;
