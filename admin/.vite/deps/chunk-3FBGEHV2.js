import {
  require_react
} from "./chunk-4SFRHSJ3.js";
import {
  __toESM
} from "./chunk-EQCVQC35.js";

// node_modules/@restart/hooks/esm/useMergedRefs.js
var import_react = __toESM(require_react());
var toFnRef = (ref) => !ref || typeof ref === "function" ? ref : (value) => {
  ref.current = value;
};
function mergeRefs(refA, refB) {
  const a = toFnRef(refA);
  const b = toFnRef(refB);
  return (value) => {
    if (a) a(value);
    if (b) b(value);
  };
}
function useMergedRefs(refA, refB) {
  return (0, import_react.useMemo)(() => mergeRefs(refA, refB), [refA, refB]);
}
var useMergedRefs_default = useMergedRefs;

// node_modules/@restart/hooks/esm/useEventCallback.js
var import_react3 = __toESM(require_react());

// node_modules/@restart/hooks/esm/useCommittedRef.js
var import_react2 = __toESM(require_react());
function useCommittedRef(value) {
  const ref = (0, import_react2.useRef)(value);
  (0, import_react2.useEffect)(() => {
    ref.current = value;
  }, [value]);
  return ref;
}
var useCommittedRef_default = useCommittedRef;

// node_modules/@restart/hooks/esm/useEventCallback.js
function useEventCallback(fn) {
  const ref = useCommittedRef_default(fn);
  return (0, import_react3.useCallback)(function(...args) {
    return ref.current && ref.current(...args);
  }, [ref]);
}

// node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (e.includes(n)) continue;
    t[n] = r[n];
  }
  return t;
}

// node_modules/dom-helpers/esm/querySelectorAll.js
var toArray = Function.prototype.bind.call(Function.prototype.call, [].slice);
function qsa(element, selector) {
  return toArray(element.querySelectorAll(selector));
}

// node_modules/@restart/ui/esm/DataKey.js
var ATTRIBUTE_PREFIX = `data-rr-ui-`;
var PROPERTY_PREFIX = `rrUi`;
function dataAttr(property) {
  return `${ATTRIBUTE_PREFIX}${property}`;
}
function dataProp(property) {
  return `${PROPERTY_PREFIX}${property}`;
}

// node_modules/@restart/hooks/esm/useMounted.js
var import_react4 = __toESM(require_react());
function useMounted() {
  const mounted = (0, import_react4.useRef)(true);
  const isMounted = (0, import_react4.useRef)(() => mounted.current);
  (0, import_react4.useEffect)(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);
  return isMounted.current;
}

// node_modules/@restart/hooks/esm/usePrevious.js
var import_react5 = __toESM(require_react());
function usePrevious(value) {
  const ref = (0, import_react5.useRef)(null);
  (0, import_react5.useEffect)(() => {
    ref.current = value;
  });
  return ref.current;
}

// node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, e2) {
    return t2.__proto__ = e2, t2;
  }, _setPrototypeOf(t, e);
}

// node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o);
}

// node_modules/@restart/hooks/esm/useIsomorphicEffect.js
var import_react6 = __toESM(require_react());
var isReactNative = typeof global !== "undefined" && // @ts-ignore
global.navigator && // @ts-ignore
global.navigator.product === "ReactNative";
var isDOM = typeof document !== "undefined";
var useIsomorphicEffect_default = isDOM || isReactNative ? import_react6.useLayoutEffect : import_react6.useEffect;

export {
  _objectWithoutPropertiesLoose,
  _inheritsLoose,
  qsa,
  useMergedRefs_default,
  dataAttr,
  dataProp,
  useEventCallback,
  useMounted,
  usePrevious,
  useIsomorphicEffect_default
};
//# sourceMappingURL=chunk-3FBGEHV2.js.map
