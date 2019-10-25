"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SvgParser = function SvgParser(props) {
  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      childNodes = _useState2[0],
      setChildNodes = _useState2[1]; // Wait for ref to exist


  (0, _react.useEffect)(function () {
    // Check theres even a child
    if (props.children) {
      if (props.children.ref.current) {
        var child = props.children.ref.current; // Check that the child node is SVG

        if (child.nodeName !== 'svg') {
          throw new Error('The child must be an svg element');
        } // Get al child nodes


        var nodes = child.childNodes;
        var nodeIds = []; // set allowed nodes

        var allowedNodes = props.allowedShapes; // Insert a unique id to all child nodes

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = nodes.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _step$value = _slicedToArray(_step.value, 2),
                i = _step$value[0],
                node = _step$value[1];

            if (allowedNodes.includes(node.nodeName)) {
              var nodeId = "svg-node-".concat(i);
              node.id = nodeId;
              nodeIds.push(nodeId);
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        setChildNodes(nodeIds);
      }
    }
  }, [props.children]); // Listen for nodes to be added

  (0, _react.useEffect)(function () {
    // onClick Function
    var onElementClicked =
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(e) {
        var change;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return props.onElementClicked(e);

              case 2:
                change = _context.sent;

                if (change) {
                  e.target.style.fill = props.activeColor;
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function onElementClicked(_x) {
        return _ref.apply(this, arguments);
      };
    }(); // On hover in function


    var onElementHoverIn = function onElementHoverIn(e) {
      e.target.style.stroke = props.hoverBorderColor;
      props.onElementHover(e);
    }; // On hover out function


    var onElementHoverOut = function onElementHoverOut(e) {
      e.target.style.stroke = props.defaultHoverBorder;
      props.onElementHover(e);
    }; // add event listeners


    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = childNodes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var element = _step2.value;
        var node = document.querySelector("#".concat(element));
        node.style.fill = 'transparent';
        node.style.cursor = 'pointer'; // Set click listener only if prop is received

        if (props.onElementClicked) {
          node.addEventListener('click', onElementClicked);
        } // set hover listeners only if porp is received


        if (props.onElementHover) {
          node.addEventListener('mouseover', onElementHoverIn);
          node.addEventListener('mouseout', onElementHoverOut);
        }
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
          _iterator2["return"]();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    return function () {
      // Remove event listeners
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = childNodes[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var element = _step3.value;
          var node = document.querySelector("#".concat(element)); // Set click listener only if prop is received

          if (props.onElementClicked) {
            node.addEventListener('click', onElementClicked);
          }

          if (props.onElementHover) {
            node.removeEventListener('mouseover', onElementHoverIn);
            node.removeEventListener('mouseout', onElementHoverOut);
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
            _iterator3["return"]();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    };
  }, [childNodes, props]);
  return props.children || null;
};

SvgParser.defaultProps = {
  hoverBorderColor: '#009cff82',
  defaultHoverBorder: 'black',
  activeColor: '#009cff82',
  allowedShapes: ['polygon', 'rect', 'circle']
};
SvgParser.propTypes = {
  onElementHover: _propTypes["default"].func,
  onElementClicked: _propTypes["default"].func,
  hoverBorderColor: _propTypes["default"].string,
  defaultHoverBorder: _propTypes["default"].string,
  activeColor: _propTypes["default"].string,
  children: _propTypes["default"].element.isRequired,
  allowedShapes: _propTypes["default"].array
};
var _default = SvgParser;
exports["default"] = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFxQyxpQkFBckM7QUFDRDtBQUNGO0FBWlU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWFaLEtBYkQ7QUFjRCxHQW5ERCxFQW1ERyxDQUFDLFVBQUQsRUFBYSxLQUFiLENBbkRIO0FBcURBLFNBQU8sS0FBSyxDQUFDLFFBQU4sSUFBa0IsSUFBekI7QUFDRCxDQTFGRDs7QUE0RkEsU0FBUyxDQUFDLFlBQVYsR0FBeUI7QUFDdkIsRUFBQSxnQkFBZ0IsRUFBRSxXQURLO0FBRXZCLEVBQUEsa0JBQWtCLEVBQUUsT0FGRztBQUd2QixFQUFBLFdBQVcsRUFBRSxXQUhVO0FBSXZCLEVBQUEsYUFBYSxFQUFFLENBQUMsU0FBRCxFQUFZLE1BQVosRUFBb0IsUUFBcEI7QUFKUSxDQUF6QjtBQU9BLFNBQVMsQ0FBQyxTQUFWLEdBQXNCO0FBQ3BCLEVBQUEsY0FBYyxFQUFFLHNCQUFVLElBRE47QUFFcEIsRUFBQSxnQkFBZ0IsRUFBRSxzQkFBVSxJQUZSO0FBR3BCLEVBQUEsZ0JBQWdCLEVBQUUsc0JBQVUsTUFIUjtBQUlwQixFQUFBLGtCQUFrQixFQUFFLHNCQUFVLE1BSlY7QUFLcEIsRUFBQSxXQUFXLEVBQUUsc0JBQVUsTUFMSDtBQU1wQixFQUFBLFFBQVEsRUFBRSxzQkFBVSxPQUFWLENBQWtCLFVBTlI7QUFPcEIsRUFBQSxhQUFhLEVBQUUsc0JBQVU7QUFQTCxDQUF0QjtlQVVlLFMiLCJmaWxlIjoibGliLmRpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuXHJcbmNvbnN0IFN2Z1BhcnNlciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtjaGlsZE5vZGVzLCBzZXRDaGlsZE5vZGVzXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICAvLyBXYWl0IGZvciByZWYgdG8gZXhpc3RcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gQ2hlY2sgdGhlcmVzIGV2ZW4gYSBjaGlsZFxyXG4gICAgaWYgKHByb3BzLmNoaWxkcmVuKSB7XHJcbiAgICAgIGlmIChwcm9wcy5jaGlsZHJlbi5yZWYuY3VycmVudCkge1xyXG4gICAgICAgIGNvbnN0IGNoaWxkID0gcHJvcHMuY2hpbGRyZW4ucmVmLmN1cnJlbnRcclxuICAgICAgICAvLyBDaGVjayB0aGF0IHRoZSBjaGlsZCBub2RlIGlzIFNWR1xyXG4gICAgICAgIGlmIChjaGlsZC5ub2RlTmFtZSAhPT0gJ3N2ZycpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGNoaWxkIG11c3QgYmUgYW4gc3ZnIGVsZW1lbnQnKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gR2V0IGFsIGNoaWxkIG5vZGVzXHJcbiAgICAgICAgY29uc3Qgbm9kZXMgPSBjaGlsZC5jaGlsZE5vZGVzXHJcbiAgICAgICAgY29uc3Qgbm9kZUlkcyA9IFtdXHJcblxyXG4gICAgICAgIC8vIHNldCBhbGxvd2VkIG5vZGVzXHJcbiAgICAgICAgY29uc3QgYWxsb3dlZE5vZGVzID0gcHJvcHMuYWxsb3dlZFNoYXBlc1xyXG5cclxuICAgICAgICAvLyBJbnNlcnQgYSB1bmlxdWUgaWQgdG8gYWxsIGNoaWxkIG5vZGVzXHJcbiAgICAgICAgZm9yIChjb25zdCBbaSwgbm9kZV0gb2Ygbm9kZXMuZW50cmllcygpKSB7XHJcbiAgICAgICAgICBpZiAoYWxsb3dlZE5vZGVzLmluY2x1ZGVzKG5vZGUubm9kZU5hbWUpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vZGVJZCA9IGBzdmctbm9kZS0ke2l9YFxyXG4gICAgICAgICAgICBub2RlLmlkID0gbm9kZUlkXHJcbiAgICAgICAgICAgIG5vZGVJZHMucHVzaChub2RlSWQpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRDaGlsZE5vZGVzKG5vZGVJZHMpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbcHJvcHMuY2hpbGRyZW5dKVxyXG5cclxuICAvLyBMaXN0ZW4gZm9yIG5vZGVzIHRvIGJlIGFkZGVkXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIG9uQ2xpY2sgRnVuY3Rpb25cclxuICAgIGNvbnN0IG9uRWxlbWVudENsaWNrZWQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAvLyBzZXQgYmFja2dyb3VuZCBjb2xvciBvZiBlbGVtZW50XHJcbiAgICAgIGNvbnN0IGNoYW5nZSA9IGF3YWl0IHByb3BzLm9uRWxlbWVudENsaWNrZWQoZSlcclxuICAgICAgaWYgKGNoYW5nZSkge1xyXG4gICAgICAgIGUudGFyZ2V0LnN0eWxlLmZpbGwgPSBwcm9wcy5hY3RpdmVDb2xvclxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBPbiBob3ZlciBpbiBmdW5jdGlvblxyXG4gICAgY29uc3Qgb25FbGVtZW50SG92ZXJJbiA9IChlKSA9PiB7XHJcbiAgICAgIGUudGFyZ2V0LnN0eWxlLnN0cm9rZSA9IHByb3BzLmhvdmVyQm9yZGVyQ29sb3JcclxuICAgICAgcHJvcHMub25FbGVtZW50SG92ZXIoZSlcclxuICAgIH1cclxuICAgIC8vIE9uIGhvdmVyIG91dCBmdW5jdGlvblxyXG4gICAgY29uc3Qgb25FbGVtZW50SG92ZXJPdXQgPSAoZSkgPT4ge1xyXG4gICAgICBlLnRhcmdldC5zdHlsZS5zdHJva2UgPSBwcm9wcy5kZWZhdWx0SG92ZXJCb3JkZXJcclxuICAgICAgcHJvcHMub25FbGVtZW50SG92ZXIoZSlcclxuICAgIH1cclxuICAgIC8vIGFkZCBldmVudCBsaXN0ZW5lcnNcclxuICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBjaGlsZE5vZGVzKSB7XHJcbiAgICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtlbGVtZW50fWApXHJcbiAgICAgIG5vZGUuc3R5bGUuZmlsbCA9ICd0cmFuc3BhcmVudCdcclxuICAgICAgbm9kZS5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcidcclxuXHJcbiAgICAgIC8vIFNldCBjbGljayBsaXN0ZW5lciBvbmx5IGlmIHByb3AgaXMgcmVjZWl2ZWRcclxuICAgICAgaWYgKHByb3BzLm9uRWxlbWVudENsaWNrZWQpIHtcclxuICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25FbGVtZW50Q2xpY2tlZClcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gc2V0IGhvdmVyIGxpc3RlbmVycyBvbmx5IGlmIHBvcnAgaXMgcmVjZWl2ZWRcclxuICAgICAgaWYgKHByb3BzLm9uRWxlbWVudEhvdmVyKSB7XHJcbiAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBvbkVsZW1lbnRIb3ZlckluKVxyXG4gICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBvbkVsZW1lbnRIb3Zlck91dClcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIC8vIFJlbW92ZSBldmVudCBsaXN0ZW5lcnNcclxuICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGNoaWxkTm9kZXMpIHtcclxuICAgICAgICBjb25zdCBub2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7ZWxlbWVudH1gKVxyXG4gICAgICAgIC8vIFNldCBjbGljayBsaXN0ZW5lciBvbmx5IGlmIHByb3AgaXMgcmVjZWl2ZWRcclxuICAgICAgICBpZiAocHJvcHMub25FbGVtZW50Q2xpY2tlZCkge1xyXG4gICAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uRWxlbWVudENsaWNrZWQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwcm9wcy5vbkVsZW1lbnRIb3Zlcikge1xyXG4gICAgICAgICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBvbkVsZW1lbnRIb3ZlckluKVxyXG4gICAgICAgICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIG9uRWxlbWVudEhvdmVyT3V0KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFtjaGlsZE5vZGVzLCBwcm9wc10pXHJcblxyXG4gIHJldHVybiBwcm9wcy5jaGlsZHJlbiB8fCBudWxsXHJcbn1cclxuXHJcblN2Z1BhcnNlci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgaG92ZXJCb3JkZXJDb2xvcjogJyMwMDljZmY4MicsXHJcbiAgZGVmYXVsdEhvdmVyQm9yZGVyOiAnYmxhY2snLFxyXG4gIGFjdGl2ZUNvbG9yOiAnIzAwOWNmZjgyJyxcclxuICBhbGxvd2VkU2hhcGVzOiBbJ3BvbHlnb24nLCAncmVjdCcsICdjaXJjbGUnXVxyXG59XHJcblxyXG5TdmdQYXJzZXIucHJvcFR5cGVzID0ge1xyXG4gIG9uRWxlbWVudEhvdmVyOiBQcm9wVHlwZXMuZnVuYyxcclxuICBvbkVsZW1lbnRDbGlja2VkOiBQcm9wVHlwZXMuZnVuYyxcclxuICBob3ZlckJvcmRlckNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGRlZmF1bHRIb3ZlckJvcmRlcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICBhY3RpdmVDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLmVsZW1lbnQuaXNSZXF1aXJlZCxcclxuICBhbGxvd2VkU2hhcGVzOiBQcm9wVHlwZXMuYXJyYXlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3ZnUGFyc2VyXHJcbiJdfQ==