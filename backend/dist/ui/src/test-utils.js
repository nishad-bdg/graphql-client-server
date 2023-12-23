"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.render = void 0;
const React = require("react");
const react_1 = require("@testing-library/react");
const react_2 = require("@chakra-ui/react");
const AllProviders = ({ children }) => (<react_2.ChakraProvider theme={react_2.theme}>{children}</react_2.ChakraProvider>);
const customRender = (ui, options) => (0, react_1.render)(ui, { wrapper: AllProviders, ...options });
exports.render = customRender;
//# sourceMappingURL=test-utils.js.map