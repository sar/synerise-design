import styled from 'styled-components';
import { macro } from '@synerise/ds-typography';

export const Header = styled.div`
  background: #ffffff;
  padding: 20px 24px;
  display: flex;
  justify-content: space-between;
`;

export const Size = styled.div`
  ${macro.medium};
  color: #fff;
  b {
    ${macro.h400};
    color: inherit;
  }
`;

export const Title = styled.div`
  ${macro.small};
  color: ${(props): string => props.theme.palette['grey-800']};
  padding: 0 24px 0 0;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  > * {
    margin-left: 8px;
    min-width: 32px;
  }
`;

export const Icon = styled.div`
  transition: all 0.5s ease;
  position: absolute;
  left: 4px;
  z-index: 1;
  //pointer-events: none;
`;

export const Input = styled.div<{ isOpen?: boolean }>`
  transition: all 0.2s ease;
  overflow: hidden;
  position: relative;
  right: 0;

  > div {
    margin: 0;
  }
`;

export const InputWrapper = styled.div<{ isOpen?: boolean; searchValue: string | undefined }>`
  ${(props): string => (props.searchValue !== '' || props.isOpen ? `width: 100%` : 'width: 30px')};
  transition: all 0.5s ease;
  position: relative;
  display: flex;
  align-items: center;
  direction: ltr;

  ${Input} {
    opacity: ${(props): string => (props.searchValue || props.isOpen ? '1 !important' : '0')};
    width: ${(props): string => (props.searchValue || props.isOpen ? 'auto' : '0')};
  }

  & {
    input {
      padding-left: 32px;
      ${(props): string =>
        props.searchValue !== '' || props.isOpen ? `cursor: initial!important;` : 'cursor: pointer!important'};
    }
  }

  .search-input {
    width: 0;
  }
`;
