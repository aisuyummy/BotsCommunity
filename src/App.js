import React, { useState } from "react";
import {
  withAdaptivity,
  AppRoot,
  SplitLayout,
  SplitCol,
  ViewWidth,
  View,
  Panel,
  PanelHeader,
  Epic,
  Tabbar,
  TabbarItem
} from "@vkontakte/vkui";
import {
  Icon20UserCircleOutline,
  Icon20CompassOutline,
  Icon20ArticleBoxOutline,
  Icon20NotificationOutline
} from "@vkontakte/icons";

const App = withAdaptivity(
  ({ viewWidth }) => {
    const [activeStory, setActiveStory] = useState("catalog");
    const onStoryChange = (event) =>
      setActiveStory(event.currentTarget.dataset.story);
    const isDesktop = viewWidth >= ViewWidth.TABLET;

    return (
      <AppRoot>
        <SplitLayout header={<PanelHeader separator={false} />}>
          <SplitCol spaced={viewWidth && viewWidth > ViewWidth.MOBILE}>
            <Epic
              activeStory={activeStory}
              tabbar={
                !isDesktop && (
                  <Tabbar style={{ backgroundColor: "#d02df7" }}>
                    <TabbarItem
                      onClick={onStoryChange}
                      selected={activeStory === "profile"}
                      data-story="profile"
                    >
                      <Icon20UserCircleOutline
                        style={{ color: "#FFFFFF" }}
                        width={28}
                        height={28}
                      />
                    </TabbarItem>
                    <TabbarItem
                      onClick={onStoryChange}
                      selected={activeStory === "catalog"}
                      data-story="catalog"
                    >
                      <Icon20CompassOutline
                        style={{ color: "#FFFFFF" }}
                        width={28}
                        height={28}
                      />
                    </TabbarItem>
                    <TabbarItem
                      onClick={onStoryChange}
                      selected={activeStory === "events"}
                      data-story="events"
                    >
                      <Icon20ArticleBoxOutline
                        style={{ color: "#FFFFFF" }}
                        width={28}
                        height={28}
                      />
                    </TabbarItem>
                  </Tabbar>
                )
              }
            >
              <View id="profile" activePanel="profile">
                <Panel id="profile">
                  <PanelHeader>Профиль</PanelHeader>
                  AAAф
                </Panel>
              </View>
              <View id="catalog" activePanel="catalog">
                <Panel id="catalog">
                  <PanelHeader>Каталог</PanelHeader>
                  AAA
                </Panel>
              </View>
              <View id="events" activePanel="events">
                <Panel id="events" right={<Icon20NotificationOutline />}>
                  <PanelHeader>Мероприятия</PanelHeader>
                  AAA
                </Panel>
              </View>
            </Epic>
          </SplitCol>
        </SplitLayout>
      </AppRoot>
    );
  },
  { viewWidth: true }
);

export default App;
