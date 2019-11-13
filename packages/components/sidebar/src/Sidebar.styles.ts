import styled from 'styled-components';
import Collapse, { CollapseProps } from 'antd/lib/collapse';
import * as React from 'react';

const { Panel } = Collapse;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AntdCollapse = styled((Collapse as any) as React.ComponentType<CollapseProps>)`
  &.ant-collapse {
    background-color: rgba(11, 104, 255, 0.3);

    &,
    * {
      border-radius: 0 !important;
    }

    > .ant-collapse-item > .ant-collapse-header {
      color: ${(props): string => props.theme.palette['grey-700']};
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
      transition: 0.2s ease-in-out;

      &:hover {
        color: ${(props): string => props.theme.palette['grey-800']};
      }
    }

    .ant-collapse-content-active {
      border-top: 0;
    }

    .ant-collapse-content-box {
      padding: 0 24px 24px;
    }

    .ant-collapse-item {
      background-color: #fff;
    }
  }

  &.ant-collapse-icon-position-right > .ant-collapse-item > .ant-collapse-header {
    padding: 18px 24px;
    user-select: none;

    .ant-collapse-arrow {
      right: 24px;
    }
  }
`;

export const AntdPanel = styled(Panel)`
  .ant-collapse-content {
    background-color: white;
    border-radius: 0;
    border-color: ${(props): string => props.theme.palette['grey-800']};
  }
`;
