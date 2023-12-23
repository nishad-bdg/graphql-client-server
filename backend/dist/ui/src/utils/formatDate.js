"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const date_fns_1 = require("date-fns");
const formatDate = (time) => {
    if (!time) {
        return;
    }
    return (0, date_fns_1.format)(new Date(time), "Pp");
};
exports.default = formatDate;
//# sourceMappingURL=formatDate.js.map