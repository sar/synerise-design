import styled from 'styled-components';
import Typography from '@synerise/ds-typography';

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  && {
    .close-modal {
      line-height: 1;
    }
  }
`;

export const Title = styled(Typography.Title)`
  width: 100%;
  color: ${(props): string => props.theme.palette['grey-800']};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  && {
    margin: 0;
  }
`;

export const Description = styled(Typography.Text)`
  font-weight: normal;
  display: block;
  padding: 12px 0 0;
  margin: 8px 0 -14px;

  background-image: linear-gradient(
    to right,
    ${(props): string => props.theme.palette['grey-300']} 33%,
    rgba(255, 255, 255, 0) 0%
  );
  background-repeat: repeat-x;
  background-size: 4px 1px;
  background-position: top;
`;

export const ActionButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
