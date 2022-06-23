import styled from 'styled-components';

interface IFlex {
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?:
    | 'stretch'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'start'
    | 'end'
    | 'baseline';
  alignContent?:
    | 'normal'
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  bgc?: string;
  gap?: string;
  flex?: string | number;
}

const Flex = styled.div<IFlex>`
  display: flex;
  flex: ${(props) => props.flex};
  align-items: ${(props) => props.alignItems};
  align-content: ${(props) => props.alignContent};
  justify-content: ${(props) => props.justify};
  flex-direction: ${(props) => props.direction};
  flex-wrap: ${(props) => props.wrap};
  background-color: ${(props) => props.bgc};
  gap: ${(props) => props.gap};
`;

export default Flex;
