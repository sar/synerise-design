import * as React from 'react';
import { action } from '@storybook/addon-actions';

import List from '@synerise/ds-list';

import Icon from '@synerise/ds-icon';
import FileM from '@synerise/ds-icon/dist/icons/FileM';
import ArrowRightCircleM from '@synerise/ds-icon/dist/icons/ArrowRightCircleM';

import Dropdown from '@synerise/ds-dropdown';

interface Props {
  onSearchChange: (value: string) => void;
  data: any;
  onClickAction: () => void;
}

const OverlayExample1: React.FC<Props> = ({ onSearchChange, data, onClickAction }) => {
  return (
    <Dropdown.Wrapper>
      <Dropdown.SearchInput onSearchChange={onSearchChange} placeholder="Search" value="" />
      <Dropdown.BackAction label="Attributes" onClick={() => alert('BackAction clicked')} />
      <List
        dataSource={data}
        renderItem={item => (
          <List.Item onSelect={action('onSelect')} icon={<Icon component={<FileM />} />}>
            {(item as any).text}
          </List.Item>
        )}
      />
      <Dropdown.BottomAction onClickAction={onClickAction} icon={<ArrowRightCircleM />}>
        Add folder
      </Dropdown.BottomAction>
    </Dropdown.Wrapper>
  );
};

export default OverlayExample1;
