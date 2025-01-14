import * as React from 'react';
import Scrollbar from '@synerise/ds-scrollbar';
import { AngleLeftS, AngleRightS, CloseS } from '@synerise/ds-icon';
import theme from '@synerise/ds-core/dist/js/DSProvider/ThemeProvider/theme';
import * as S from './Layout.styles';
import { LayoutProps } from './Layout.types';

const DEFAULT_SIDEBAR_WIDTH = 320;

const Layout: React.FC<LayoutProps> = ({
  header,
  left,
  right,
  children,
  className,
  styles,
  subheader,
  fullPage = false,
  sidebarAnimationDisabled,
}) => {
  const leftSidebarWidth = React.useMemo(() => left?.width || DEFAULT_SIDEBAR_WIDTH, [left]);
  const rightSidebarWidth = React.useMemo(() => right?.width || DEFAULT_SIDEBAR_WIDTH, [right]);

  return (
    <S.LayoutContainer className={`ds-layout ${className || ''}`}>
      {header ? <S.LayoutHeader className="ds-layout__header">{header}</S.LayoutHeader> : null}
      <S.LayoutContent>
        <S.LayoutBody>
          <>
            {left ? (
              <S.LayoutSidebarWrapper
                opened={!!left?.opened}
                openedWidth={leftSidebarWidth}
                animationDisabled={!!sidebarAnimationDisabled}
              >
                <S.LayoutSidebar
                  className="ds-layout__sidebar"
                  style={styles && styles.left}
                  opened={!!left.opened}
                  openedWidth={leftSidebarWidth}
                  animationDisabled={!!sidebarAnimationDisabled}
                >
                  <Scrollbar absolute>
                    <S.LayoutSidebarInner style={styles && styles.leftInner}>{left?.content}</S.LayoutSidebarInner>
                  </Scrollbar>
                </S.LayoutSidebar>
                <S.SidebarButton
                  withSubheader={Boolean(subheader)}
                  onClick={(): void => left?.onChange(!left?.opened)}
                  opened={!!left?.opened}
                  bothOpened={left?.opened && right?.opened}
                >
                  <S.ArrowIcon component={<AngleRightS />} color={theme.palette.white} />
                  <S.CloseIcon component={<CloseS />} color={theme.palette.white} />
                </S.SidebarButton>
              </S.LayoutSidebarWrapper>
            ) : null}
          </>
          <S.LayoutMain
            className="ds-layout__main"
            data-popup-container
            style={styles && styles.main}
            leftOpened={!!left?.opened}
            rightOpened={!!right?.opened}
            leftSidebarWidth={leftSidebarWidth}
            rightSidebarWidth={rightSidebarWidth}
          >
            <S.LayoutSubheader>{subheader}</S.LayoutSubheader>
            <Scrollbar absolute>
              <S.LayoutMainInner fullPage={fullPage} style={styles && styles.mainInner}>
                {children}
              </S.LayoutMainInner>
            </Scrollbar>
          </S.LayoutMain>
          <>
            {right ? (
              <S.LayoutSidebarWrapper
                opened={!!right?.opened}
                right
                openedWidth={rightSidebarWidth}
                animationDisabled={!!sidebarAnimationDisabled}
              >
                <S.LayoutSidebar
                  className="ds-layout__sidebar ds-layout__sidebar--right"
                  style={styles && styles.right}
                  opened={!!right?.opened}
                  openedWidth={rightSidebarWidth}
                  animationDisabled={!!sidebarAnimationDisabled}
                >
                  <Scrollbar absolute>
                    <S.LayoutSidebarInner style={styles && styles.rightInner}>{right?.content}</S.LayoutSidebarInner>
                  </Scrollbar>
                </S.LayoutSidebar>
                <S.SidebarButton
                  withSubheader={Boolean(subheader)}
                  onClick={(): void => right?.onChange(!right?.opened)}
                  right
                  opened={!!right?.opened}
                  bothOpened={left?.opened && right?.opened}
                >
                  <S.ArrowIcon component={<AngleLeftS />} color={theme.palette.white} />
                  <S.CloseIcon component={<CloseS />} color={theme.palette.white} />
                </S.SidebarButton>
              </S.LayoutSidebarWrapper>
            ) : null}
          </>
        </S.LayoutBody>
      </S.LayoutContent>
    </S.LayoutContainer>
  );
};

export default Layout;
