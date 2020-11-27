import { TableCell } from '@synerise/ds-table';
import { action } from '@storybook/addon-actions';
import { InfoFillS, LockM, VarTypeStringM, VarTypeBooleanM, VarTypeListM } from '@synerise/ds-icon/dist/icons';
import Select from '@synerise/ds-select';
import Button from '@synerise/ds-button';
import { Tag } from '@synerise/ds-tags';
import Icon from '@synerise/ds-icon';
import Avatar from '@synerise/ds-avatar';
import Switch from '@synerise/ds-switch/dist/Switch';
import Tooltip from '@synerise/ds-tooltip/dist/Tooltip';
import * as React from 'react';
import Checkbox from '@synerise/ds-checkbox/dist';
import theme from '@synerise/ds-core/dist/js/DSProvider/ThemeProvider/theme';
import { IconLabelCell, LabelsWithShowMore } from '@synerise/ds-table/dist/Cell';
import Badge from '@synerise/ds-badge';

export const RELATIONS = [
  {
    fieldName: 'Milk',
    key: 0,
    icon: { component: <VarTypeStringM />, color: theme.palette['grey-600'] },
  },
  {
    fieldName: 'Oil',
    key: 1,
    icon: { component: <VarTypeStringM />, color: theme.palette['grey-600'] },
  },
  {
    fieldName: 'Apple',
    key: 2,
    icon: { component: <VarTypeStringM />, color: theme.palette['grey-600'] },
  },
  {
    fieldName: 'Banana',
    key: 3,
    icon: { component: <VarTypeStringM />, color: theme.palette['grey-600'] },
  },
  {
    fieldName: 'Bread',
    key: 4,
    icon: { component: <VarTypeStringM />, color: theme.palette['grey-600'] },
  },
  {
    fieldName: 'Orange',
    key: 5,
    icon: { component: <VarTypeStringM />, color: theme.palette['grey-600'] },
  },
  {
    fieldName: 'Eggs',
    key: 6,
    icon: { component: <VarTypeStringM />, color: theme.palette['grey-600'] },
  },
  {
    fieldName: 'Beer',
    key: 7,
    icon: { component: <VarTypeStringM />, color: theme.palette['grey-600'] },
  },
  {
    fieldName: 'Cheese',
    key: 8,
    icon: { component: <VarTypeStringM />, color: theme.palette['grey-600'] },
  },
  {
    fieldName: 'Pasta',
    key: 9,
    icon: { component: <VarTypeStringM />, color: theme.palette['grey-600'] },
  },
  {
    fieldName: 'Rice',
    key: 10,
    icon: { component: <VarTypeStringM />, color: theme.palette['grey-600'] },
  },
];

export const COLUMNS_WITH_TRIGGERS = [
  {
    title: 'Select',
    dataIndex: 'select',
    key: 'key',
    width: 254,
    textWrap: 'word-break',
    ellipsis: true,
    icon: { component: <VarTypeListM /> },
    iconTooltip: { component: <InfoFillS /> },
    render: select => (
      <Select value={select.value}>
        {select.options.map((option: string) => (
          <Select.Option value={option}>{option}</Select.Option>
        ))}
      </Select>
    ),
  },
  {
    title: 'Button',
    dataIndex: 'age',
    key: 'age',
    width: 254,
    textWrap: 'word-break',
    ellipsis: true,
    icon: { component: <VarTypeListM /> },
    iconTooltip: { component: <InfoFillS /> },
    render: age => (
      <Button type="secondary" onClick={() => alert(age)}>
        Show age
      </Button>
    ),
  },
  {
    width: 254,
    title: 'Multiple buttons',
    icon: { component: <VarTypeListM /> },
    iconTooltip: { component: <InfoFillS /> },
    render: () => (
      <TableCell.ActionCell gapSize={8} contentAlign={'left'}>
        <Button onClick={action('click')} type="custom-color" color="green">
          Accept
        </Button>
        <Button onClick={action('click')} type="secondary">
          Decline
        </Button>
      </TableCell.ActionCell>
    ),
  },
  {
    title: 'Editable row',
    dataIndex: 'editable',
    key: 'editable',
    width: 254,
    textWrap: 'word-break',
    ellipsis: true,
    icon: { component: <VarTypeListM /> },
    iconTooltip: { component: <InfoFillS /> },
    render: editable => <TableCell.EditableCell value={editable} placeholder={'No data'} onChange={console.log} />,
  },
  {
    title: 'Copyable',
    dataIndex: 'name',
    key: 'name',
    width: 254,
    textWrap: 'word-break',
    ellipsis: true,
    icon: { component: <VarTypeListM /> },
    iconTooltip: { component: <InfoFillS /> },
    render: name => <TableCell.CopyableCell value={name} confirmMessage="Copied to clipboard!" tooltipTimeout={2000} />,
  },
  {
    title: 'Checkbox',
    key: 'checked',
    dataIndex: 'checked',
    width: 120,
    icon: { component: <VarTypeBooleanM /> },
    iconTooltip: { component: <InfoFillS /> },
    render: checked => <Checkbox withoutPadding checked={checked} />,
  },
  {
    width: 254,
    render: () => (
      <TableCell.ActionCell>
        <Button onClick={action('click')} type="secondary" mode="split">
          Edit rule
        </Button>
      </TableCell.ActionCell>
    ),
  },
];

export const COLUMNS_WITH_LABELS = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: 254,
    textWrap: 'word-break',
    ellipsis: true,
    key: 'name',
    icon: { component: <VarTypeStringM /> },
    iconTooltip: { component: <InfoFillS /> },
    sorter: (a, b) => a.name < b.name,
  },
  {
    title: 'Relations',
    dataIndex: 'relations',
    width: 400,
    textWrap: 'word-break',
    ellipsis: true,
    key: 'relations',
    render: () => (
      <LabelsWithShowMore
        items={RELATIONS}
        numberOfVisibleItems={2}
        labelKey={'fieldName'}
        texts={{
          modalTitle: 'Products',
          tooltip: 'Show more',
          searchPlaceholder: 'Search',
          searchClear: 'Clear',
          records: 'records',
        }}
        renderItem={(label, item: { key: number; icon: object }) => {
          return <IconLabelCell label={label} icon={item.icon} />;
        }}
      />
    ),
  },
];

export const COLUMNS_WITH_ICONS = [
  {
    title: 'Name with flag',
    key: 'country',
    dataIndex: 'country',
    width: 254,
    icon: { component: <VarTypeStringM /> },
    iconTooltip: { component: <InfoFillS /> },
    sorter: (a, b) => a.country < b.country,
    render: (country, record) => {
      return <TableCell.FlagLabelCell countryCode={country} label={record.name} />;
    },
  },
  {
    title: 'Name with star',
    key: 'active',
    dataIndex: 'active',
    width: 254,
    icon: { component: <VarTypeStringM /> },
    iconTooltip: { component: <InfoFillS /> },
    sorter: (a, b) => a.active - b.active,
    render: (active, record) => {
      return (
        <TableCell.StarCell active={active} onClick={action('Click start')}>
          {record.name}
        </TableCell.StarCell>
      );
    },
  },
  {
    title: 'Name with icon and star',
    key: 'name',
    dataIndex: 'name',
    width: 254,
    icon: { component: <VarTypeStringM /> },
    iconTooltip: { component: <InfoFillS /> },
    render: (name, record) => {
      return (
        <TableCell.StarCell active={record.active} onClick={action('Click start')}>
          <TableCell.IconLabelCell label={name} icon={{ component: <VarTypeStringM />, color: '#6a7580' }} />
        </TableCell.StarCell>
      );
    },
  },
  {
    title: 'Icon with label',
    dataIndex: 'name',
    width: 254,
    textWrap: 'word-break',
    ellipsis: true,
    icon: { component: <VarTypeStringM /> },
    iconTooltip: { component: <InfoFillS /> },
    render: (name, record) => (
      <TableCell.IconLabelCell icon={{ component: <VarTypeStringM />, color: '#6a7580' }} label={name} />
    ),
  },
];

export const COLUMNS_WITH_STATUSES = [
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    width: 254,
    textWrap: 'word-break',
    ellipsis: true,
    icon: { component: <VarTypeBooleanM /> },
    tooltip: { title: 'Tooltip', description: 'Description' },
    render: status => <TableCell.StatusLabelCell status={status} label={status} />,
  },
  {
    title: 'Tag',
    dataIndex: 'tag',
    key: 'tag',
    width: 254,
    textWrap: 'word-break',
    ellipsis: true,
    icon: { component: <VarTypeStringM /> },
    iconTooltip: { component: <InfoFillS /> },
    render: tag => <Tag shape={tag.shape} name={tag.label} />,
  },
  {
    title: 'Tag with icon',
    dataIndex: 'tag',
    key: 'tag',
    width: 254,
    textWrap: 'word-break',
    ellipsis: true,
    icon: { component: <VarTypeStringM /> },
    iconTooltip: { component: <InfoFillS /> },
    render: tag => (
      <TableCell.TagIconCell>
        <Tag shape={tag.shape} name={tag.label} />
        <Icon component={<LockM />} color="#949ea6" />
      </TableCell.TagIconCell>
    ),
  },
  {
    title: 'Enabled',
    dataIndex: 'enabled',
    key: 'enabled',
    width: 254,
    textWrap: 'word-break',
    ellipsis: true,
    icon: { component: <VarTypeBooleanM /> },
    iconTooltip: { component: <InfoFillS /> },
    render: enabled => (
      <Tooltip title={enabled ? 'Switch off' : 'Switch on'} placement={'topLeft'}>
        <Switch onChange={action('Status change')} checked={enabled} label="" />
      </Tooltip>
    ),
  },
];

export const COLUMNS_WITH_AVATARS = [
  {
    title: 'Avatar',
    dataIndex: 'avatar',
    key: 'avatar',
    width: 254,
    textWrap: 'word-break',
    ellipsis: true,
    icon: { component: <VarTypeListM /> },
    iconTooltip: { component: <InfoFillS /> },
    render: avatar => (
      <Badge status="active">
        <Avatar
          hasStatus={true}
          backgroundColor="red"
          backgroundColorHue="050"
          size="medium"
          iconComponent={<Icon component={avatar.icon} color="red" />}
          shape={'circle'}
        >
          {avatar.initials}
        </Avatar>
      </Badge>
    ),
  },
  {
    title: 'Icon Avatar Label',
    dataIndex: 'avatar',
    key: 'avatar',
    width: 120,
    textWrap: 'word-break',
    ellipsis: true,
    icon: { component: <VarTypeListM /> },
    iconTooltip: { component: <InfoFillS /> },
    render: avatar => (
      <TableCell.AvatarLabelCell
        icon={<Icon component={<LockM />} color={theme.palette['grey-500']} />}
        avatar={
          <Badge status="active">
            <Avatar hasStatus={true} backgroundColor="green" backgroundColorHue="400" size="medium" shape={'square'}>
              {avatar.initials}
            </Avatar>
          </Badge>
        }
        title={avatar.title}
      />
    ),
  },
  {
    title: 'Avatar M with title',
    dataIndex: 'avatar',
    key: 'avatar',
    width: 254,
    textWrap: 'word-break',
    ellipsis: true,
    icon: { component: <VarTypeListM /> },
    iconTooltip: { component: <InfoFillS /> },
    render: avatar => (
      <TableCell.AvatarLabelCell
        avatarAction={action('Avatar Action')}
        avatar={
          <Badge status="active">
            <Avatar
              hasStatus={true}
              backgroundColor="red"
              backgroundColorHue="050"
              size="medium"
              iconComponent={<Icon component={avatar.icon} color="red" />}
              shape={'circle'}
            >
              {avatar.initials}
            </Avatar>
          </Badge>
        }
        title={avatar.title}
      />
    ),
  },
  {
    title: 'Avatar L with title ',
    dataIndex: 'avatar',
    key: 'avatar',
    width: 254,
    textWrap: 'word-break',
    ellipsis: true,
    icon: { component: <VarTypeListM /> },
    iconTooltip: { component: <InfoFillS /> },
    render: avatar => (
      <TableCell.AvatarLabelCell
        avatarSize="large"
        avatar={
          <Badge status="active">
            <Avatar
              hasStatus={true}
              backgroundColor="red"
              backgroundColorHue="050"
              size="large"
              iconComponent={<Icon component={avatar.icon} color="red" />}
              shape={'circle'}
            >
              {avatar.initials}
            </Avatar>
          </Badge>
        }
        title={avatar.titleLarg}
      />
    ),
  },
  {
    title: 'Avatar with title and description',
    dataIndex: 'avatar',
    key: 'avatar',
    width: 254,
    textWrap: 'word-break',
    ellipsis: true,
    icon: { component: <VarTypeListM /> },
    iconTooltip: { component: <InfoFillS /> },
    render: avatar => (
      <TableCell.AvatarLabelCell
        avatarSize="large"
        avatar={
          <Badge status="active">
            <Avatar
              hasStatus={true}
              backgroundColor="red"
              backgroundColorHue="050"
              size="large"
              iconComponent={<Icon component={avatar.icon} color="red" />}
              shape={'circle'}
            >
              {avatar.initials}
            </Avatar>
          </Badge>
        }
        title={avatar.titleLarg}
        labels={avatar.label}
      />
    ),
  },
  {
    title: 'Avatar with title and meta',
    dataIndex: 'avatar',
    key: 'avatar',
    width: 254,
    textWrap: 'word-break',
    ellipsis: true,
    icon: { component: <VarTypeListM /> },
    iconTooltip: { component: <InfoFillS /> },
    render: avatar => (
      <TableCell.AvatarLabelCell
        avatar={
          <Badge status="active">
            <Avatar
              hasStatus={true}
              backgroundColor="red"
              backgroundColorHue="050"
              size="large"
              iconComponent={<Icon component={avatar.icon} color="red" />}
              shape={'circle'}
            >
              {avatar.initials}
            </Avatar>
          </Badge>
        }
        title={avatar.titleLarg}
        labels={avatar.labels}
      />
    ),
  },
];

export const COLUMNS = [
  ...COLUMNS_WITH_LABELS,
  ...COLUMNS_WITH_ICONS,
  ...COLUMNS_WITH_AVATARS,
  ...COLUMNS_WITH_STATUSES,
  ...COLUMNS_WITH_TRIGGERS,
];
