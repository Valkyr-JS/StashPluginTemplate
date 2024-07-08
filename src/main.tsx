import MyDetailItem from "./components/MyDataItem";
import "./styles.scss";

const { PluginApi } = window;
const { GQL, React } = PluginApi;

// DUMMY CONTENT - Replace the performer details panel at the top of the
// performer page with one that has yellow text and an additional component.
PluginApi.patch.instead(
  "PerformerDetailsPanel.DetailGroup",
  function (props, _, Original) {
    const performerID = props.performer.id;

    // DUMMY CONTENT - Get all scenes featuring the given performer and log the
    // data to the console.
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

    // Wait for the data to load before rendering. If you don't need GQL, you
    // can skip this.
    if (qScenes.loading) return [];
    console.log("qScenes: ", qScenes);

    const allScenes = qScenes.data.findScenes.scenes;
    const mostRecentScene =
      allScenes[allScenes.length - 1].title ?? "Untitled scene";

    // Return the component
    return [
      <div className="detail-group plugin-name__yellow-text">
        {props.children}
        <MyDetailItem title="Most Recent Scene" value={mostRecentScene} />
      </div>,
    ];
  }
);
