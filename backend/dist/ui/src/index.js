"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@chakra-ui/react");
const React = require("react");
const ReactDOM = require("react-dom/client");
const App_1 = require("./App");
const reportWebVitals_1 = require("./reportWebVitals");
const serviceWorker = require("./serviceWorker");
const graphql_ws_1 = require("graphql-ws");
const urql_1 = require("urql");
const container = document.getElementById("root");
if (!container)
    throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(container);
const wsClient = (0, graphql_ws_1.createClient)({
    url: "ws://localhost:3001/graphql",
});
const client = new urql_1.Client({
    url: "http://localhost:3001/graphql",
    exchanges: [
        urql_1.cacheExchange,
        urql_1.fetchExchange,
        (0, urql_1.subscriptionExchange)({
            forwardSubscription(request) {
                const input = { ...request, query: request.query || "" };
                return {
                    subscribe(sink) {
                        const unsubscribe = wsClient.subscribe(input, sink);
                        return { unsubscribe };
                    },
                };
            },
        }),
    ],
});
root.render(<React.StrictMode>
    <react_1.ColorModeScript />
    <urql_1.Provider value={client}>
      <App_1.App />
    </urql_1.Provider>
  </React.StrictMode>);
serviceWorker.unregister();
(0, reportWebVitals_1.default)();
//# sourceMappingURL=index.js.map