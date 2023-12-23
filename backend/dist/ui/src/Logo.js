"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logo = void 0;
const React = require("react");
const react_1 = require("@chakra-ui/react");
const TeamSeasLogo_png_1 = require("./TeamSeasLogo.png");
exports.Logo = (0, react_1.forwardRef)((props, ref) => {
    return <react_1.chakra.img src={TeamSeasLogo_png_1.default} ref={ref} {...props}/>;
});
//# sourceMappingURL=Logo.js.map