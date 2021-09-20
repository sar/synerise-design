import { boolean, select, text } from '@storybook/addon-knobs';
import {
  Check3M, DuplicateS,
  InfoFillM,
  WarningFillM,
} from '@synerise/ds-icon/dist/icons';
import * as React from 'react';
import Tooltip from '@synerise/ds-tooltip';
import Icon from '@synerise/ds-icon';
import Button from '@synerise/ds-button';
import UnorderedList from '@synerise/ds-unordered-list';
import Alert from '@synerise/ds-alert';
import Toast from '@synerise/ds-alert/dist/Toast/Toast';
import {
  AnimationContainer,
  FirstButtonWrapper, IconOrderWrapper,
  NumberWrapper,
  OrderWrapper,
  Wrapper,
} from '@synerise/ds-alert/dist/Toast/Toast.styles';



const decorator = storyFn => (
  <div
    style={{
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    {storyFn()}
  </div>
);
const req = require.context('@synerise/ds-icon/dist/icons', false, /index.js/);
const iconsRaw = req(req.keys()[0]);
const iconsNames = Object.keys(iconsRaw);
const getDefaultProps = () => ({
  customIcon: boolean('Set custom symbol', false),
});
const SECTION_COLOR_TYPES = ['success', 'warning' , 'negative' , 'neutral' ,'informative'];
const typeOfContent = ['unorderedList', 'button', ''];
const CUSTOM_COLORS = [
  '',
  'blue',
  'grey',
  'red',
  'green',
  'yellow',
  'pink',
  'mars',
  'orange',
  'fern',
  'cyan',
  'purple',
  'violet',
];


const additionalAlertMapper = {
  success: {color:'green',colorIcon: 'white',icon: <Check3M />},
  warning: {color:'yellow',colorIcon: 'black',icon: <WarningFillM />},
  negative: {color:'red',colorIcon: 'white',icon: <WarningFillM />},
  neutral: {color:'grey',colorIcon: 'grey',icon: <InfoFillM/>},
  informative:{color:'blue',colorIcon: 'blue',icon: <InfoFillM/>},
};

const stories = {
  WithCloseIcon: () => {
    const message = text('Message', 'Campaign saved!');
    const type = select('Set type', SECTION_COLOR_TYPES, 'negative');
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'bottom',
          alignItems: 'bottom',
        }}>
        <Toast
          message={message}
          type={type}
          withClose
          color={additionalAlertMapper[type].color}
          colorIcon={additionalAlertMapper[type].colorIcon}
        />
      </div>
    );
  },
  WithExpander: () => {
    const message = text('Message', 'Campaign saved!');
    const type = select('Set type', SECTION_COLOR_TYPES, 'negative');
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'bottom',
          alignItems: 'bottom',
        }}>
        <Toast
          message={message}
          type={type}
          expander
          color={additionalAlertMapper[type].color}
          colorIcon={additionalAlertMapper[type].colorIcon}
        />
      </div>
    );
  },
  WithActionButton: () => {
    const message = text('Message', 'Campaign saved!');
    const type = select('Set type', SECTION_COLOR_TYPES, 'negative');
    const description = text('Description', 'No response from server, try again later');
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'bottom',
          alignItems: 'bottom',
        }}>
        <Toast
          message={message}
          type={type}
          color={additionalAlertMapper[type].color}
          colorIcon={additionalAlertMapper[type].colorIcon}
          description={description}
          expanded
          expandedContent={<FirstButtonWrapper>
            <Button type="tertiary-white" mode="label">
              Button
            </Button>
          </FirstButtonWrapper>}
        />
      </div>
    );
  },
}
export default {
  name: 'Components/Alert/Toast/ActionButtons',
  config: {},
  decorator,
  stories,
  Component: Alert,
};