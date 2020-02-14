import styled from 'styled-components';
import { Tag } from '@synerise/ds-tags/dist/Tag/Tag.styles';
import { ItemLabel } from '../SimpleItem/SimpleItem.styles';
import { ItemActionsWrapper } from '../ItemActions/ItemActions.styles';
import { ItemMeta } from '../ItemMeta/ItemMeta.styles';

type ItemContainerProps = {
  opened: boolean;
  greyBackground: boolean | undefined;
};

type DraggerWrapperProps = {
  disabled: boolean;
};

export const DraggerWrapper = styled.div<DraggerWrapperProps>`
  display: flex;
  opacity: ${({ disabled }): string => (disabled ? '0.4' : '1')};
`;

export const IconWrapper = styled.div`
  display: flex;
`;

export const ItemHeaderPrefix = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const ItemHeaderSuffix = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const ItemHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: stretch;
  width: 100%;
  padding: 12px;

  ${Tag} {
    margin: 0 12px 0 0;
  }

  ${IconWrapper} {
    margin-right: 12px;
  }

  ${DraggerWrapper} {
    margin-right: 12px;
    svg {
      color: ${({ theme }): string => theme.palette['grey-400']};
      fill: ${({ theme }): string => theme.palette['grey-400']};
    }
  }

  && {
    .ant-btn {
      border-radius: 50%;
      box-sizing: border-box;
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 0;
      border: 1px solid ${({ theme }): string => theme.palette['grey-400']};
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 0 0 12px;
      transition: transform 0.2s ease;
      box-shadow: none;
      & > div {
        justify-content: center;
        margin: 0 !important;
        display: flex;
        align-items: center;
      }
    }
  }

  &:hover {
    ${ItemLabel} {
      color: ${({ theme }): string => theme.palette['grey-800']};
    }
    ${ItemActionsWrapper} {
      display: flex;
    }
    ${DraggerWrapper} {
      svg {
        color: ${({ theme }): string => theme.palette['grey-600']};
        fill: ${({ theme }): string => theme.palette['grey-600']};
      }
    }
    ${ItemMeta} {
      display: none;
    }
  }
`;

export const ContentWrapper = styled.div`
  padding: 16px 16px 24px;
  width: 100%;
  border-top: 1px solid ${({ theme }): string => theme.palette['grey-200']};
`;

export const ItemContainer = styled.div<ItemContainerProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 16px;
  border-radius: 3px;
  position: relative;
  background-color: ${({ theme, greyBackground }): string =>
    greyBackground ? theme.palette.white : theme.palette['grey-050']};
  box-shadow: ${({ greyBackground }): string => (greyBackground ? '0 4px 12px 0 rgba(35, 41, 54, 0.04)' : 'none')};

  ${ContentWrapper} {
    display: ${({ opened }): string => (opened ? 'flex' : 'none')};
  }
  ${ItemHeader} {
    .ant-btn {
      transform: ${({ opened }): string => (opened ? 'rotateZ(-180deg)' : 'rotateZ(0deg)')};
      background-color: ${({ theme, greyBackground }): string =>
        greyBackground ? theme.palette['grey-050'] : theme.palette.whte};
    }
  }
`;

export const ToggleContentWrapper = styled.div``;
