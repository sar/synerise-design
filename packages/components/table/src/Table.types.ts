import { TableProps } from 'antd/lib/table';
import * as React from 'react';
import { SELECTION_ALL, SELECTION_INVERT } from './Table';

export type AntTableProps<T> = Omit<TableProps<T>, 'title' | 'subTitle' | 'onSearch' | 'itemsMenu' | 'search'>;

export type Selection = {
  key: string;
  label: string;
  onClick: () => void;
};

export type SelectionItem = typeof SELECTION_ALL | typeof SELECTION_INVERT | Selection;

export interface RowSelection<T> {
  fixed?: boolean;
  selectedRowKeys: React.ReactText[];
  selections?: SelectionItem[];
  onChange: (selectedRowKeys: React.ReactText[], selectedRows: T[]) => void;
}

export interface Filter {
  tooltips: {
    default: string;
    clear: string;
    define: string;
    list: string;
  };
  openedLabel: string;
  key: string;
  icon: React.ReactNode;
  showList: () => void;
  show: () => void;
  handleClear: () => void;
  selected?: {
    name: string;
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface DSTableProps<T extends any> extends AntTableProps<T> {
  title?: string | React.ReactNode;
  onSearch?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  itemsMenu?: string | React.ReactNode;
  search?: string;
  cellSize?: string | 'medium' | 'small';
  roundedHeader?: boolean;
  selection?: RowSelection<T>;
  filters?: Filter[];
  searchComponent?: React.ReactNode;
}
