"use strict";
exports.__esModule = true;
exports.useWindowSize = void 0;
var react_1 = require("react");
exports.useWindowSize = function () {
    var _a = react_1.useState(false), isMobile = _a[0], setIsMobile = _a[1];
    var checkScreenSize = function () {
        return window.innerWidth > 960 ? setIsMobile(false) : setIsMobile(true);
    };
    react_1.useEffect(function () {
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return function () { return window.removeEventListener('resize', checkScreenSize); };
    }, []);
    return isMobile;
};
