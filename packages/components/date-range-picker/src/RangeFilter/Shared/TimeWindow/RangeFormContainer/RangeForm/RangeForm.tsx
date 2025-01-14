import * as React from 'react';
import Select from '@synerise/ds-select';
import Icon, { CloseS } from '@synerise/ds-icon';

import theme from '@synerise/ds-core/dist/js/DSProvider/ThemeProvider/theme';
import TimePicker from '@synerise/ds-time-picker';
import { DateLimitMode, RangeFormProps } from './RangeForm.types';
import * as S from './RangeForm.styles';
import { getDisabledTimeOptions } from '../../../../../RangePicker/utils';

export const FORM_MODES: Record<string, DateLimitMode> = {
  HOUR: 'Hour',
  RANGE: 'Range',
};
const RangeForm: React.FC<RangeFormProps> = ({
  onModeChange,
  disabled,
  startDate,
  endDate,
  onStartChange,
  onEndChange,
  onExactHourSelect,
  onRangeDelete,
  valueSelectionModes = [FORM_MODES.RANGE, FORM_MODES.HOUR],
  mode = valueSelectionModes[0],
  timePickerProps,
  texts,
}) => {
  const [start, setStart] = React.useState<Date | undefined>(startDate);
  const [end, setEnd] = React.useState<Date | undefined>(endDate);
  const areStartAndEndValid = React.useMemo(() => !!start && !!end, [start, end]);
  const getPopupContainer = React.useCallback(
    (node: HTMLElement): HTMLElement => (node.parentElement != null ? node.parentElement : document.body),
    []
  );
  React.useEffect(() => {
    setStart(startDate);
    setEnd(endDate);
  }, [startDate, endDate]);

  const singleHourPicker = React.useMemo(() => {
    return (
      <TimePicker
        disabled={disabled}
        clearTooltip={texts?.clear}
        onChange={(date): void => {
          date && onExactHourSelect(date);
        }}
        value={start}
        dropdownProps={{
          getPopupContainer,
        }}
        disabledHours={[]}
        disabledMinutes={[]}
        disabledSeconds={[]}
        {...timePickerProps}
      />
    );
  }, [start, onExactHourSelect, getPopupContainer, texts, timePickerProps, disabled]);
  const renderRangePicker = React.useCallback(() => {
    return (
      <>
        <TimePicker
          disabled={disabled}
          clearTooltip={texts?.clear}
          onChange={(date?: Date): void => {
            setStart(date);
            date && onStartChange(date);
          }}
          value={start}
          dropdownProps={{
            getPopupContainer,
          }}
          disabledHours={areStartAndEndValid ? getDisabledTimeOptions(start, 'HOURS', null, end) : []}
          disabledMinutes={areStartAndEndValid ? getDisabledTimeOptions(start, 'MINUTES', null, end) : []}
          disabledSeconds={areStartAndEndValid ? getDisabledTimeOptions(start, 'SECONDS', null, end) : []}
          {...timePickerProps}
        />
        <S.Separator>-</S.Separator>
        <TimePicker
          disabled={disabled}
          clearTooltip={texts?.clear}
          onChange={(date?: Date): void => {
            setEnd(date);
            date && onEndChange(date);
          }}
          value={end}
          dropdownProps={{
            getPopupContainer,
          }}
          disabledHours={areStartAndEndValid ? getDisabledTimeOptions(end, 'HOURS', start, null) : []}
          disabledMinutes={areStartAndEndValid ? getDisabledTimeOptions(end, 'MINUTES', start, null) : []}
          disabledSeconds={areStartAndEndValid ? getDisabledTimeOptions(end, 'SECONDS', start, null) : []}
          {...timePickerProps}
        />
      </>
    );
  }, [
    areStartAndEndValid,
    start,
    end,
    onStartChange,
    onEndChange,
    getPopupContainer,
    texts,
    timePickerProps,
    disabled,
  ]);
  const limitModeSelect = React.useMemo(
    () =>
      valueSelectionModes.length > 1 ? (
        <Select
          value={mode}
          disabled={disabled}
          onChange={(value): void => {
            onModeChange(value as DateLimitMode);
          }}
          getPopupContainer={getPopupContainer}
        >
          {valueSelectionModes.map(modeName => (
            <Select.Option key={modeName} value={modeName}>
              {modeName}
            </Select.Option>
          ))}
        </Select>
      ) : null,
    [mode, onModeChange, getPopupContainer, valueSelectionModes, disabled]
  );
  return (
    <S.Container>
      <S.Row justifyContent="flex-start">
        {limitModeSelect}
        {mode === FORM_MODES.HOUR ? singleHourPicker : renderRangePicker()}
        {!!onRangeDelete && !disabled && (
          <S.RemoveIconWrapper onClick={onRangeDelete}>
            <Icon component={<CloseS />} color={theme.palette['red-600']} />
          </S.RemoveIconWrapper>
        )}
      </S.Row>
    </S.Container>
  );
};

export default RangeForm;
