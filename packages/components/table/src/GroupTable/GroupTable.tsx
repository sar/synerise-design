import * as React from 'react';

import Table, { ColumnsType } from 'antd/lib/table';
import { GroupType as GroupByType } from '@synerise/ds-column-manager/dist/ColumnManager.types';
import { DSTableProps } from '../Table.types';
import GroupTableBody from './GroupTableBody/GroupTableBody';
import '../style/index.less';
import GroupTableHeader from './GroupTableHeader/GroupTableHeader';

type SortOrderType = 'ascend' | 'descend' | boolean;

export type GroupColumnsType<T> = ColumnsType<T> & {
  sortOrder: SortOrderType;
  key: React.ReactText;
  render: Function;
  dataIndex: React.ReactText;
};

export type GroupType<T> = {
  column: string;
  value: React.ReactText | boolean | object;
  key: React.ReactText;
  rows: T[];
  groupType: GroupByType;
};

const EMPTY_COLUMN = {
  sortOrder: false,
};

const getNextSortOrder = (current: SortOrderType): SortOrderType => {
  const SORT_ORDER_MAP = {
    ascend: 'descend',
    descend: false,
    false: 'ascend',
  };

  return SORT_ORDER_MAP[String(current)];
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function GroupTable<T extends GroupType<T>>(
  props: DSTableProps<T> & { addItem?: (column: string, value: React.ReactText | boolean | object) => void }
): React.ReactElement {
  const { selection, rowKey, dataSource, columns, cellSize, roundedHeader, addItem } = props;
  const [expandedGroups, setExpandedGroups] = React.useState<React.ReactText[]>(
    dataSource?.map(group => group.key) || []
  );

  const [data, setData] = React.useState<T[]>(dataSource || []);
  const [tableColumns, setColumns] = React.useState<GroupColumnsType<T>[]>([]);

  React.useEffect(() => {
    setData(dataSource || []);
    setExpandedGroups(dataSource?.map(group => group.key) || []);
  }, [dataSource]);

  React.useEffect(() => {
    const normalizedColumns = columns?.map(column => ({
      ...EMPTY_COLUMN,
      ...column,
    }));
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    setColumns(normalizedColumns || []);
  }, [columns]);

  const activeColumn = React.useMemo(() => {
    return data?.length ? data[0].column : undefined;
  }, [data]);

  const toggleExpand = React.useCallback(
    (groupKey: React.ReactText) => {
      if (expandedGroups.indexOf(groupKey) >= 0) {
        setExpandedGroups(expandedGroups.filter(key => key !== groupKey));
      } else {
        setExpandedGroups([...expandedGroups, groupKey]);
      }
    },
    [expandedGroups, setExpandedGroups]
  );

  const allItems = React.useMemo<T[]>(() => {
    const result: T[] = [];
    dataSource && dataSource.forEach(group => group.rows.forEach(row => result.push(row)));
    return result;
  }, [dataSource]);

  const getActiveGroup = React.useCallback(
    (key: React.ReactText) => {
      const active = data.find((row: T): boolean => row.key === key);
      if (active) {
        const { rows, ...activeGroup } = active;
        return activeGroup;
      }
      return undefined;
    },
    [data]
  );

  const sortColumn = React.useCallback(
    column => {
      const currentSortOrder = tableColumns.find(col => col.key === column.key)?.sortOrder || false;
      const nextSortOrder = getNextSortOrder(currentSortOrder);

      const sortedColumns = dataSource?.map(group => {
        const rows = group.rows.sort(column.props.column.sorter);
        if (nextSortOrder === 'descend') {
          rows.reverse();
        }
        return {
          ...group,
          rows,
        };
      });
      const updatedColumns = tableColumns.map(col => {
        if (col.key === column.key) {
          return {
            ...col,
            sortOrder: nextSortOrder,
          };
        }
        return {
          ...col,
          sortOrder: false,
        };
      });
      setColumns(updatedColumns);
      setData(sortedColumns || []);
    },
    [dataSource, tableColumns]
  );

  return (
    <div className={`ds-table ds-table-cell-size-${cellSize} ${roundedHeader ? 'ds-table-rounded' : ''}`}>
      <Table<T>
        {...props}
        dataSource={data}
        columns={tableColumns as ColumnsType<T>}
        /* eslint-disable-next-line @typescript-eslint/ban-ts-ignore */
        // @ts-ignore
        components={{
          header: {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            row: (header: any): JSX.Element => (
              <GroupTableHeader header={header} activeColumnKey={activeColumn} sortColumn={sortColumn} />
            ),
          },
          body: {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            row: (record: any): JSX.Element => {
              const activeGroup = getActiveGroup(record['data-row-key']);
              return (
                <GroupTableBody
                  group={record}
                  selection={selection}
                  rowKey={rowKey}
                  allItems={allItems}
                  expanded={expandedGroups.indexOf(record['data-row-key']) >= 0}
                  expandGroup={toggleExpand}
                  columns={tableColumns}
                  addItem={addItem}
                  activeGroup={activeGroup}
                />
              );
            },
          },
        }}
        /* eslint-disable-next-line @typescript-eslint/ban-ts-ignore */
        // @ts-ignore
        rowSelection={
          selection && {
            ...selection,
            columnWidth: 72,
          }
        }
      />
    </div>
  );
}

export default GroupTable;