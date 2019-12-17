import styled from 'styled-components';
import TooltipExtendedProps from './Tooltip.types';

export const TooltipDescription = styled.div<TooltipExtendedProps>`
  line-height: 1.45;
  letter-spacing: 0.1px;
`;

export const TooltipTitle = styled.div<TooltipExtendedProps>`
  margin-bottom: ${(props): string => (props.type === 'icon' || props.type === 'tutorial' ? '8px' : '0px')};
  font-size: ${(props): string => props.theme.variables['font-size-lg']};
`;

export const TooltipComponent = styled.div<TooltipExtendedProps>`
  color: ${(props): string => props.theme.palette['grey-200']};
`;