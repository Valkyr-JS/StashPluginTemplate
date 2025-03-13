import React from "react";
import MyDetailItem from "./components/MyDetailItem";
import "./styles.scss";

const { PluginApi } = window;
const { GQL } = PluginApi;

// Replace the performer details panel at the top of the performer page with one
// that has yellow text and an additional component.
PluginApi.patch.instead(
  "PerformerDetailsPanel.DetailGroup",
  function (props, _, Original) {
    const performerID = props.performer.id;

    // Get all scenes featuring the given performer and log the data to the
    // console.
    const qScenes = GQL.useFindScenesQuery({
      variables: {
        filter: { per_page: -1, sort: "date" },
        scene_filter: {
          performers: {
            modifier: CriterionModifier.Includes,
            value: [performerID],
          },
        },
      },
    });

    // Get library configuration to access the user's plugin settings.
    const qConfig = GQL.useConfigurationQuery();

    // Wait for all data to load before rendering. If you don't need GQL, you
    // can skip this.
    if (qScenes.loading || qConfig.loading) return [];
    console.log("qScenes: ", qScenes);

    // Get the title of the most recent scene to use in our custom component. As
    // the title is not a required field in the Stash database, we need to
    // provide a fallback.
    const allScenes = qScenes.data.findScenes.scenes;
    const mostRecentScene =
      allScenes[allScenes.length - 1].title ?? "Untitled scene";

    // If the user has toggled the plugin off via the config settings, render
    // the original component unchanged.
    if (!qConfig.data.configuration.plugins.YourPluginID?.enablePlugin) {
      return [<Original {...props} />];
    }

    // Return the component
    return [
      <div className="detail-group plugin-name__yellow-text">
        {props.children}
        <MyDetailItem title="Most Recent Scene" value={mostRecentScene} />
      </div>,
    ];
  }
);
