function A(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var j = { exports: {} },
  u = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var m = Symbol.for("react.element"),
  F = Symbol.for("react.portal"),
  U = Symbol.for("react.fragment"),
  q = Symbol.for("react.strict_mode"),
  L = Symbol.for("react.profiler"),
  M = Symbol.for("react.provider"),
  B = Symbol.for("react.context"),
  G = Symbol.for("react.forward_ref"),
  H = Symbol.for("react.suspense"),
  W = Symbol.for("react.memo"),
  J = Symbol.for("react.lazy"),
  C = Symbol.iterator;
function K(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (C && e[C]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var $ = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  x = Object.assign,
  P = {};
function d(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = P),
    (this.updater = r || $);
}
d.prototype.isReactComponent = {};
d.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
d.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function I() {}
I.prototype = d.prototype;
function b(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = P),
    (this.updater = r || $);
}
var g = (b.prototype = new I());
g.constructor = b;
x(g, d.prototype);
g.isPureReactComponent = !0;
var O = Array.isArray,
  T = Object.prototype.hasOwnProperty,
  E = { current: null },
  N = { key: !0, ref: !0, __self: !0, __source: !0 };
function z(e, t, r) {
  var n,
    o = {},
    i = null,
    s = null;
  if (t != null)
    for (n in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      T.call(t, n) && !N.hasOwnProperty(n) && (o[n] = t[n]);
  var l = arguments.length - 2;
  if (l === 1) o.children = r;
  else if (1 < l) {
    for (var c = Array(l), a = 0; a < l; a++) c[a] = arguments[a + 2];
    o.children = c;
  }
  if (e && e.defaultProps)
    for (n in ((l = e.defaultProps), l)) o[n] === void 0 && (o[n] = l[n]);
  return { $$typeof: m, type: e, key: i, ref: s, props: o, _owner: E.current };
}
function Q(e, t) {
  return {
    $$typeof: m,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function w(e) {
  return typeof e == "object" && e !== null && e.$$typeof === m;
}
function Y(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (r) {
      return t[r];
    })
  );
}
var k = /\/+/g;
function S(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Y("" + e.key)
    : t.toString(36);
}
function v(e, t, r, n, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (i) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case m:
          case F:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = n === "" ? "." + S(s, 0) : n),
      O(o)
        ? ((r = ""),
          e != null && (r = e.replace(k, "$&/") + "/"),
          v(o, t, r, "", function (a) {
            return a;
          }))
        : o != null &&
          (w(o) &&
            (o = Q(
              o,
              r +
                (!o.key || (s && s.key === o.key)
                  ? ""
                  : ("" + o.key).replace(k, "$&/") + "/") +
                e,
            )),
          t.push(o)),
      1
    );
  if (((s = 0), (n = n === "" ? "." : n + ":"), O(e)))
    for (var l = 0; l < e.length; l++) {
      i = e[l];
      var c = n + S(i, l);
      s += v(i, t, r, c, o);
    }
  else if (((c = K(e)), typeof c == "function"))
    for (e = c.call(e), l = 0; !(i = e.next()).done; )
      (i = i.value), (c = n + S(i, l++)), (s += v(i, t, r, c, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      ))
    );
  return s;
}
function h(e, t, r) {
  if (e == null) return e;
  var n = [],
    o = 0;
  return (
    v(e, n, "", "", function (i) {
      return t.call(r, i, o++);
    }),
    n
  );
}
function X(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (r) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = r));
        },
        function (r) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = r));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var f = { current: null },
  _ = { transition: null },
  Z = {
    ReactCurrentDispatcher: f,
    ReactCurrentBatchConfig: _,
    ReactCurrentOwner: E,
  };
u.Children = {
  map: h,
  forEach: function (e, t, r) {
    h(
      e,
      function () {
        t.apply(this, arguments);
      },
      r,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      h(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      h(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!w(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
u.Component = d;
u.Fragment = U;
u.Profiler = L;
u.PureComponent = b;
u.StrictMode = q;
u.Suspense = H;
u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Z;
u.cloneElement = function (e, t, r) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var n = x({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = E.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (c in t)
      T.call(t, c) &&
        !N.hasOwnProperty(c) &&
        (n[c] = t[c] === void 0 && l !== void 0 ? l[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) n.children = r;
  else if (1 < c) {
    l = Array(c);
    for (var a = 0; a < c; a++) l[a] = arguments[a + 2];
    n.children = l;
  }
  return { $$typeof: m, type: e.type, key: o, ref: i, props: n, _owner: s };
};
u.createContext = function (e) {
  return (
    (e = {
      $$typeof: B,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: M, _context: e }),
    (e.Consumer = e)
  );
};
u.createElement = z;
u.createFactory = function (e) {
  var t = z.bind(null, e);
  return (t.type = e), t;
};
u.createRef = function () {
  return { current: null };
};
u.forwardRef = function (e) {
  return { $$typeof: G, render: e };
};
u.isValidElement = w;
u.lazy = function (e) {
  return { $$typeof: J, _payload: { _status: -1, _result: e }, _init: X };
};
u.memo = function (e, t) {
  return { $$typeof: W, type: e, compare: t === void 0 ? null : t };
};
u.startTransition = function (e) {
  var t = _.transition;
  _.transition = {};
  try {
    e();
  } finally {
    _.transition = t;
  }
};
u.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
u.useCallback = function (e, t) {
  return f.current.useCallback(e, t);
};
u.useContext = function (e) {
  return f.current.useContext(e);
};
u.useDebugValue = function () {};
u.useDeferredValue = function (e) {
  return f.current.useDeferredValue(e);
};
u.useEffect = function (e, t) {
  return f.current.useEffect(e, t);
};
u.useId = function () {
  return f.current.useId();
};
u.useImperativeHandle = function (e, t, r) {
  return f.current.useImperativeHandle(e, t, r);
};
u.useInsertionEffect = function (e, t) {
  return f.current.useInsertionEffect(e, t);
};
u.useLayoutEffect = function (e, t) {
  return f.current.useLayoutEffect(e, t);
};
u.useMemo = function (e, t) {
  return f.current.useMemo(e, t);
};
u.useReducer = function (e, t, r) {
  return f.current.useReducer(e, t, r);
};
u.useRef = function (e) {
  return f.current.useRef(e);
};
u.useState = function (e) {
  return f.current.useState(e);
};
u.useSyncExternalStore = function (e, t, r) {
  return f.current.useSyncExternalStore(e, t, r);
};
u.useTransition = function () {
  return f.current.useTransition();
};
u.version = "18.2.0";
j.exports = u;
var ee = j.exports;
const y = A(ee);
var D = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  R = y.createContext && y.createContext(D),
  p =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (p =
          Object.assign ||
          function (e) {
            for (var t, r = 1, n = arguments.length; r < n; r++) {
              t = arguments[r];
              for (var o in t)
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            }
            return e;
          }),
        p.apply(this, arguments)
      );
    },
  te =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var r = {};
      for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) &&
          t.indexOf(n) < 0 &&
          (r[n] = e[n]);
      if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
          t.indexOf(n[o]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
            (r[n[o]] = e[n[o]]);
      return r;
    };
function V(e) {
  return (
    e &&
    e.map(function (t, r) {
      return y.createElement(t.tag, p({ key: r }, t.attr), V(t.child));
    })
  );
}
function ne(e) {
  return function (t) {
    return y.createElement(re, p({ attr: p({}, e.attr) }, t), V(e.child));
  };
}
function re(e) {
  var t = function (r) {
    var n = e.attr,
      o = e.size,
      i = e.title,
      s = te(e, ["attr", "size", "title"]),
      l = o || r.size || "1em",
      c;
    return (
      r.className && (c = r.className),
      e.className && (c = (c ? c + " " : "") + e.className),
      y.createElement(
        "svg",
        p(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          r.attr,
          n,
          s,
          {
            className: c,
            style: p(p({ color: e.color || r.color }, r.style), e.style),
            height: l,
            width: l,
            xmlns: "http://www.w3.org/2000/svg",
          },
        ),
        i && y.createElement("title", null, i),
        e.children,
      )
    );
  };
  return R !== void 0
    ? y.createElement(R.Consumer, null, function (r) {
        return t(r);
      })
    : t(D);
}
export { ne as G, y as R, ee as r };
