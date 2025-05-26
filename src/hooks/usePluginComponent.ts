import { useEffect, useState } from "react";

/** React hook that returns whether a given Stash plugin API component is ready
 * for use. */
const usePluginComponent = (componentName: "BooleanSetting") => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!!window.PluginApi.components[componentName]) {
        setReady(true);
        clearInterval(interval);
      }
    }, 100);
  }, []);

  return ready;
};

export default usePluginComponent;
