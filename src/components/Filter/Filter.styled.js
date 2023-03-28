import styled from 'styled-components';

export const Input = styled.input`
  width: ${p => p.theme.sizes[1]}px;
  padding: ${p => p.theme.space[2]}px;

  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.normal};
`;
export const Title = styled.h3`
  width: ${p => p.theme.sizes[2]}px;
  padding: ${p => p.theme.space[4]}px 0;
  margin: 0 auto;

  font-size: ${p => p.theme.fontSizes.ml};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-transform: capitalize;
`;
