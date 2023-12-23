"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Counter = void 0;
const framer_motion_1 = require("framer-motion");
const react_1 = require("react");
const Counter = ({ from, to }) => {
    const nodeRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        const node = nodeRef.current;
        if (node) {
            const controls = (0, framer_motion_1.animate)(from, to, {
                duration: 1,
                onUpdate(value) {
                    node.textContent = parseInt(value.toFixed(0)).toLocaleString();
                },
            });
            return () => controls.stop();
        }
    }, [from, to]);
    return <div ref={nodeRef}/>;
};
exports.Counter = Counter;
//# sourceMappingURL=Counter.js.map