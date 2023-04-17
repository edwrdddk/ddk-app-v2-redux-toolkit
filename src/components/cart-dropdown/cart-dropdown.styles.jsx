import styled from 'styled-components';

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from '../button/button.styles';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 78px;
  right: 20px;
  z-index: 5;
  border-radius: 13px;

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin-top: auto;
  }
`

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`
