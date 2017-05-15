'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports['default'] = {
    toggle: function toggle(_ref) {
        var node = _ref.node;
        return {
            animation: { rotateZ: node.toggled ? 90 : 0 },
            duration: 300
        };
    },
    drawer: function drawer() {
        return (/* props */{
                enter: {
                    animation: 'slideDown',
                    duration: 300
                },
                leave: {
                    animation: 'slideUp',
                    duration: 300
                }
            }
        );
    }
};
module.exports = exports['default'];