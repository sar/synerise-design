import * as React from 'react';

import Grid from '@synerise/ds-grid';
import Description, { DescriptionRow } from '@synerise/ds-description';
import * as S from './Grid.styles';
import { object } from '@storybook/addon-knobs';
import GridPreview from './GridPreview';

const DEFAULT_GRID = [{xxl: 8, xl: 6, lg: 4, md: 4, sm: 8, xs: 3},{xxl: 6, xl: 2, lg: 1, md: 4, sm: 4, xs: 3}]

const stories = {
  customGrid: () => {
    const data = object('Set grid configuration', DEFAULT_GRID);

    return (
      <div style={{width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, padding: 24}}>
        <GridPreview />
        <Grid>
          {data.map(item => {
            return (
              <Grid.Item {...item}>
                <S.GridItem>
                  <Description type="inline">
                    <DescriptionRow label={'XXL'} value={`Span ${item.xxl} of 24`}/>
                    <DescriptionRow label={'XL'} value={`Span ${item.xl} of 16`}/>
                    <DescriptionRow label={'LG'} value={`Span ${item.lg} of 12`}/>
                    <DescriptionRow label={'MD'} value={`Span ${item.md} of 8`}/>
                    <DescriptionRow label={'SM'} value={`Span ${item.sm} of 8`}/>
                    <DescriptionRow label={'XS'} value={`Span ${item.xs} of 3`}/>
                  </Description>
                </S.GridItem>
              </Grid.Item>
            )
          })}
        </Grid>
      </div>
    )
  },
};

export default {
  name: 'Components/Grid',
  config: {},
  stories,
  Component: Grid,
}
