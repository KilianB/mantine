'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@mantine/core');
var hooks = require('@mantine/hooks');
var React = require('react');
var events = require('./events.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
function NavigationProgress({
  initialProgress = 0,
  color,
  size = 3,
  stepInterval = 500,
  transitionDuration = 300,
  exitTimeout = 500,
  exitTransitionDuration = 400,
  onFinish,
  autoReset = false,
  withinPortal = true,
  portalProps,
  zIndex = core.getDefaultZIndex("max"),
  progressLabel
}) {
  const theme = core.useMantineTheme();
  const shouldReduceMotion = hooks.useReducedMotion();
  const reducedMotion = theme.respectReducedMotion ? shouldReduceMotion : false;
  const [_progress, setProgress] = React.useState(initialProgress);
  const [mounted, setMounted] = React.useState(true);
  const [unmountProgress, setUnmountProgress] = React.useState(false);
  const resetRef = React.useRef();
  const unmountRef = React.useRef();
  const interval = hooks.useInterval(() => {
    setProgress((amount) => {
      let next = 0;
      if (amount >= 0 && amount <= 20) {
        next = 10;
      } else if (amount >= 20 && amount <= 50) {
        next = 4;
      } else if (amount >= 50 && amount <= 80) {
        next = 2;
      } else if (amount >= 80 && amount <= 99) {
        next = 0.5;
      }
      return amount + next;
    });
  }, stepInterval);
  const set = (value) => setProgress(value);
  const increment = (value) => setProgress((c) => Math.min(c + value, 100));
  const decrement = (value) => setProgress((c) => Math.max(c - value, 0));
  const start = () => {
    interval.stop();
    interval.start();
  };
  const stop = () => interval.stop();
  const reset = () => {
    setUnmountProgress(true);
    stop();
    setProgress(0);
    window.setTimeout(() => setUnmountProgress(false), 0);
  };
  const complete = () => setProgress(100);
  const cancelUnmount = () => {
    if (unmountRef.current) {
      window.clearTimeout(unmountRef.current);
      unmountRef.current = null;
    }
    if (resetRef.current) {
      window.clearTimeout(resetRef.current);
      resetRef.current = null;
    }
    setMounted(true);
  };
  hooks.useDidUpdate(() => {
    if (_progress >= 100) {
      stop();
      onFinish == null ? void 0 : onFinish();
      unmountRef.current = window.setTimeout(() => {
        unmountRef.current = null;
        setMounted(false);
        if (autoReset) {
          resetRef.current = window.setTimeout(() => {
            resetRef.current = null;
            reset();
          }, reducedMotion ? 0 : exitTransitionDuration);
        }
      }, exitTimeout);
    } else if (!mounted) {
      cancelUnmount();
    }
  }, [_progress]);
  events.useNavigationProgressEvents({ start, stop, set, increment, decrement, reset, complete });
  return /* @__PURE__ */ React__default.createElement(core.OptionalPortal, __spreadValues({
    withinPortal
  }, portalProps), !unmountProgress && /* @__PURE__ */ React__default.createElement(core.Progress, {
    radius: 0,
    value: _progress,
    size,
    color,
    styles: {
      root: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex,
        backgroundColor: "transparent",
        transitionProperty: "opacity",
        transitionTimingFunction: theme.transitionTimingFunction,
        transitionDuration: `${reducedMotion || _progress !== 100 ? 0 : exitTransitionDuration}ms`,
        opacity: mounted ? 1 : 0
      },
      bar: {
        position: "relative",
        transitionProperty: "width",
        transitionTimingFunction: theme.transitionTimingFunction,
        transitionDuration: `${reducedMotion || !mounted ? 0 : transitionDuration}ms`
      }
    },
    "aria-label": progressLabel
  }));
}

exports.NavigationProgress = NavigationProgress;
//# sourceMappingURL=NavigationProgress.js.map
