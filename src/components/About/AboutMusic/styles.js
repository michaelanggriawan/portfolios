import styled from 'styled-components';
import {color1 } from './variable';
import { Flex } from './grid';
import media from './media';

export const MusicPlayerContainer = styled(Flex)`
  border: 2px solid ${color1};
  padding: 20px;
  align-content: center;
  width: 495px;
  font-size:20px;
  ${media.tablet`
    width: initial;
  `}
`;


export const PlayButton = styled(Flex)`
  width: 50px;
  height: 50px;
  border: 2px solid ${color1};
  border-radius: 50%;
  margin-right: 30px;
  flex-grow: 0;
  flex-shrink: 0;
  justify-content: center;
  align-content: center;
  cursor: pointer;
  p {
    margin: auto;
  }
`;
