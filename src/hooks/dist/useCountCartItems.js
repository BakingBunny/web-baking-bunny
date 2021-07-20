"use strict";
exports.__esModule = true;
exports.useCountCartItems = void 0;
var react_1 = require("react");
var cartSlice_1 = require("../store/cartSlice");
var hooks_1 = require("../store/hooks");
exports.useCountCartItems = function () {
    var cartList = hooks_1.useAppSelector(cartSlice_1.products);
    var _a = react_1.useState(0), countCartItems = _a[0], setCountCartItems = _a[1];
    react_1.useEffect(function () {
        setCountCartItems(cartList.reduce(function (total, item) {
            return total + item.qty;
        }, 0));
    }, [cartList]);
    return countCartItems;
};
