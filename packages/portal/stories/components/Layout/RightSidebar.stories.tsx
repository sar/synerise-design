import * as React from 'react';

import Layout, { Page } from '@synerise/ds-layout';
import PageHeader from '@synerise/ds-page-header';
import Grid from '@synerise/ds-grid';
import Card from '@synerise/ds-card';
import LayoutAppMenu from './utils/AppMenu';
import LayoutNavbar from './utils/Navbar';
import * as S from './utils/Layout.styles';
import { boolean } from '@storybook/addon-knobs';

const stories = {
  rightSidebar: () => {
    const [rightOpened, setRightOpened] = React.useState(false);
    return (
      <Page appMenu={<LayoutAppMenu />} navBar={<LayoutNavbar />}>
        <Layout
          header={<PageHeader title={'Page name'} onGoBack={() => {}} />}
          right={{
            content: <S.Placeholder></S.Placeholder>,
            opened: rightOpened,
            onChange: setRightOpened,
          }}
          sidebarAnimationDisabled={boolean('Disable sidebar animation', false)}
        >
          <Grid>
            <Grid.Item xxl={24} xl={16} lg={12} md={8} sm={8} xs={4}>
              <Card>
                <S.Placeholder />
              </Card>
            </Grid.Item>
          </Grid>
        </Layout>
      </Page>
    );
  },
};

export default {
  name: 'Components/Layout/Layout',
  withoutCenter: true,
  stories,
  Component: Layout,
};
