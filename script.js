function Ch(e, t) {
    for (var r = 0; r < t.length; r++) {
        const o = t[r];
        if (typeof o != "string" && !Array.isArray(o)) {
            for (const n in o)
                if (n !== "default" && !(n in e)) {
                    const i = Object.getOwnPropertyDescriptor(o, n);
                    i && Object.defineProperty(e, n, i.get ? i : {
                        enumerable: !0,
                        get: ()=>o[n]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const n of document.querySelectorAll('link[rel="modulepreload"]'))
        o(n);
    new MutationObserver(n=>{
        for (const i of n)
            if (i.type === "childList")
                for (const a of i.addedNodes)
                    a.tagName === "LINK" && a.rel === "modulepreload" && o(a)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function r(n) {
        const i = {};
        return n.integrity && (i.integrity = n.integrity),
        n.referrerPolicy && (i.referrerPolicy = n.referrerPolicy),
        n.crossOrigin === "use-credentials" ? i.credentials = "include" : n.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin",
        i
    }
    function o(n) {
        if (n.ep)
            return;
        n.ep = !0;
        const i = r(n);
        fetch(n.href, i)
    }
}
)();
var vT = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function yc(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
function mT(e) {
    if (e.__esModule)
        return e;
    var t = e.default;
    if (typeof t == "function") {
        var r = function o() {
            return this instanceof o ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments)
        };
        r.prototype = t.prototype
    } else
        r = {};
    return Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.keys(e).forEach(function(o) {
        var n = Object.getOwnPropertyDescriptor(e, o);
        Object.defineProperty(r, o, n.get ? n : {
            enumerable: !0,
            get: function() {
                return e[o]
            }
        })
    }),
    r
}
var Th = {
    exports: {}
}
  , us = {}
  , Nh = {
    exports: {}
}
  , G = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bi = Symbol.for("react.element")
  , H1 = Symbol.for("react.portal")
  , W1 = Symbol.for("react.fragment")
  , $1 = Symbol.for("react.strict_mode")
  , U1 = Symbol.for("react.profiler")
  , V1 = Symbol.for("react.provider")
  , G1 = Symbol.for("react.context")
  , K1 = Symbol.for("react.forward_ref")
  , X1 = Symbol.for("react.suspense")
  , Q1 = Symbol.for("react.memo")
  , J1 = Symbol.for("react.lazy")
  , Qd = Symbol.iterator;
function Y1(e) {
    return e === null || typeof e != "object" ? null : (e = Qd && e[Qd] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var zh = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , Fh = Object.assign
  , Rh = {};
function ln(e, t, r) {
    this.props = e,
    this.context = t,
    this.refs = Rh,
    this.updater = r || zh
}
ln.prototype.isReactComponent = {};
ln.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
ln.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function Dh() {}
Dh.prototype = ln.prototype;
function bc(e, t, r) {
    this.props = e,
    this.context = t,
    this.refs = Rh,
    this.updater = r || zh
}
var wc = bc.prototype = new Dh;
wc.constructor = bc;
Fh(wc, ln.prototype);
wc.isPureReactComponent = !0;
var Jd = Array.isArray
  , jh = Object.prototype.hasOwnProperty
  , kc = {
    current: null
}
  , Ih = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Ah(e, t, r) {
    var o, n = {}, i = null, a = null;
    if (t != null)
        for (o in t.ref !== void 0 && (a = t.ref),
        t.key !== void 0 && (i = "" + t.key),
        t)
            jh.call(t, o) && !Ih.hasOwnProperty(o) && (n[o] = t[o]);
    var s = arguments.length - 2;
    if (s === 1)
        n.children = r;
    else if (1 < s) {
        for (var l = Array(s), u = 0; u < s; u++)
            l[u] = arguments[u + 2];
        n.children = l
    }
    if (e && e.defaultProps)
        for (o in s = e.defaultProps,
        s)
            n[o] === void 0 && (n[o] = s[o]);
    return {
        $$typeof: bi,
        type: e,
        key: i,
        ref: a,
        props: n,
        _owner: kc.current
    }
}
function Z1(e, t) {
    return {
        $$typeof: bi,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function xc(e) {
    return typeof e == "object" && e !== null && e.$$typeof === bi
}
function ey(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(r) {
        return t[r]
    })
}
var Yd = /\/+/g;
function Ys(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? ey("" + e.key) : t.toString(36)
}
function na(e, t, r, o, n) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var a = !1;
    if (e === null)
        a = !0;
    else
        switch (i) {
        case "string":
        case "number":
            a = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case bi:
            case H1:
                a = !0
            }
        }
    if (a)
        return a = e,
        n = n(a),
        e = o === "" ? "." + Ys(a, 0) : o,
        Jd(n) ? (r = "",
        e != null && (r = e.replace(Yd, "$&/") + "/"),
        na(n, t, r, "", function(u) {
            return u
        })) : n != null && (xc(n) && (n = Z1(n, r + (!n.key || a && a.key === n.key ? "" : ("" + n.key).replace(Yd, "$&/") + "/") + e)),
        t.push(n)),
        1;
    if (a = 0,
    o = o === "" ? "." : o + ":",
    Jd(e))
        for (var s = 0; s < e.length; s++) {
            i = e[s];
            var l = o + Ys(i, s);
            a += na(i, t, r, l, n)
        }
    else if (l = Y1(e),
    typeof l == "function")
        for (e = l.call(e),
        s = 0; !(i = e.next()).done; )
            i = i.value,
            l = o + Ys(i, s++),
            a += na(i, t, r, l, n);
    else if (i === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return a
}
function Ri(e, t, r) {
    if (e == null)
        return e;
    var o = []
      , n = 0;
    return na(e, o, "", "", function(i) {
        return t.call(r, i, n++)
    }),
    o
}
function ty(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(r) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = r)
        }, function(r) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = r)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var Ue = {
    current: null
}
  , ia = {
    transition: null
}
  , ry = {
    ReactCurrentDispatcher: Ue,
    ReactCurrentBatchConfig: ia,
    ReactCurrentOwner: kc
};
G.Children = {
    map: Ri,
    forEach: function(e, t, r) {
        Ri(e, function() {
            t.apply(this, arguments)
        }, r)
    },
    count: function(e) {
        var t = 0;
        return Ri(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return Ri(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!xc(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
G.Component = ln;
G.Fragment = W1;
G.Profiler = U1;
G.PureComponent = bc;
G.StrictMode = $1;
G.Suspense = X1;
G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ry;
G.cloneElement = function(e, t, r) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var o = Fh({}, e.props)
      , n = e.key
      , i = e.ref
      , a = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref,
        a = kc.current),
        t.key !== void 0 && (n = "" + t.key),
        e.type && e.type.defaultProps)
            var s = e.type.defaultProps;
        for (l in t)
            jh.call(t, l) && !Ih.hasOwnProperty(l) && (o[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l])
    }
    var l = arguments.length - 2;
    if (l === 1)
        o.children = r;
    else if (1 < l) {
        s = Array(l);
        for (var u = 0; u < l; u++)
            s[u] = arguments[u + 2];
        o.children = s
    }
    return {
        $$typeof: bi,
        type: e.type,
        key: n,
        ref: i,
        props: o,
        _owner: a
    }
}
;
G.createContext = function(e) {
    return e = {
        $$typeof: G1,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: V1,
        _context: e
    },
    e.Consumer = e
}
;
G.createElement = Ah;
G.createFactory = function(e) {
    var t = Ah.bind(null, e);
    return t.type = e,
    t
}
;
G.createRef = function() {
    return {
        current: null
    }
}
;
G.forwardRef = function(e) {
    return {
        $$typeof: K1,
        render: e
    }
}
;
G.isValidElement = xc;
G.lazy = function(e) {
    return {
        $$typeof: J1,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: ty
    }
}
;
G.memo = function(e, t) {
    return {
        $$typeof: Q1,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
G.startTransition = function(e) {
    var t = ia.transition;
    ia.transition = {};
    try {
        e()
    } finally {
        ia.transition = t
    }
}
;
G.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.")
}
;
G.useCallback = function(e, t) {
    return Ue.current.useCallback(e, t)
}
;
G.useContext = function(e) {
    return Ue.current.useContext(e)
}
;
G.useDebugValue = function() {}
;
G.useDeferredValue = function(e) {
    return Ue.current.useDeferredValue(e)
}
;
G.useEffect = function(e, t) {
    return Ue.current.useEffect(e, t)
}
;
G.useId = function() {
    return Ue.current.useId()
}
;
G.useImperativeHandle = function(e, t, r) {
    return Ue.current.useImperativeHandle(e, t, r)
}
;
G.useInsertionEffect = function(e, t) {
    return Ue.current.useInsertionEffect(e, t)
}
;
G.useLayoutEffect = function(e, t) {
    return Ue.current.useLayoutEffect(e, t)
}
;
G.useMemo = function(e, t) {
    return Ue.current.useMemo(e, t)
}
;
G.useReducer = function(e, t, r) {
    return Ue.current.useReducer(e, t, r)
}
;
G.useRef = function(e) {
    return Ue.current.useRef(e)
}
;
G.useState = function(e) {
    return Ue.current.useState(e)
}
;
G.useSyncExternalStore = function(e, t, r) {
    return Ue.current.useSyncExternalStore(e, t, r)
}
;
G.useTransition = function() {
    return Ue.current.useTransition()
}
;
G.version = "18.2.0";
Nh.exports = G;
var b = Nh.exports;
const ro = yc(b)
  , Un = Ch({
    __proto__: null,
    default: ro
}, [b]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oy = b
  , ny = Symbol.for("react.element")
  , iy = Symbol.for("react.fragment")
  , ay = Object.prototype.hasOwnProperty
  , sy = oy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , ly = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Oh(e, t, r) {
    var o, n = {}, i = null, a = null;
    r !== void 0 && (i = "" + r),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
    for (o in t)
        ay.call(t, o) && !ly.hasOwnProperty(o) && (n[o] = t[o]);
    if (e && e.defaultProps)
        for (o in t = e.defaultProps,
        t)
            n[o] === void 0 && (n[o] = t[o]);
    return {
        $$typeof: ny,
        type: e,
        key: i,
        ref: a,
        props: n,
        _owner: sy.current
    }
}
us.Fragment = iy;
us.jsx = Oh;
us.jsxs = Oh;
Th.exports = us;
var B = Th.exports;
const uy = yc(B)
  , cy = Ch({
    __proto__: null,
    default: uy
}, [B]);
var Kl = {}
  , Lh = {
    exports: {}
}
  , ct = {}
  , Mh = {
    exports: {}
}
  , qh = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(z, D) {
        var M = z.length;
        z.push(D);
        e: for (; 0 < M; ) {
            var C = M - 1 >>> 1
              , j = z[C];
            if (0 < n(j, D))
                z[C] = D,
                z[M] = j,
                M = C;
            else
                break e
        }
    }
    function r(z) {
        return z.length === 0 ? null : z[0]
    }
    function o(z) {
        if (z.length === 0)
            return null;
        var D = z[0]
          , M = z.pop();
        if (M !== D) {
            z[0] = M;
            e: for (var C = 0, j = z.length, H = j >>> 1; C < H; ) {
                var Q = 2 * (C + 1) - 1
                  , ae = z[Q]
                  , Se = Q + 1
                  , Le = z[Se];
                if (0 > n(ae, M))
                    Se < j && 0 > n(Le, ae) ? (z[C] = Le,
                    z[Se] = M,
                    C = Se) : (z[C] = ae,
                    z[Q] = M,
                    C = Q);
                else if (Se < j && 0 > n(Le, M))
                    z[C] = Le,
                    z[Se] = M,
                    C = Se;
                else
                    break e
            }
        }
        return D
    }
    function n(z, D) {
        var M = z.sortIndex - D.sortIndex;
        return M !== 0 ? M : z.id - D.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function() {
            return i.now()
        }
    } else {
        var a = Date
          , s = a.now();
        e.unstable_now = function() {
            return a.now() - s
        }
    }
    var l = []
      , u = []
      , d = 1
      , c = null
      , f = 3
      , h = !1
      , p = !1
      , m = !1
      , w = typeof setTimeout == "function" ? setTimeout : null
      , v = typeof clearTimeout == "function" ? clearTimeout : null
      , g = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function y(z) {
        for (var D = r(u); D !== null; ) {
            if (D.callback === null)
                o(u);
            else if (D.startTime <= z)
                o(u),
                D.sortIndex = D.expirationTime,
                t(l, D);
            else
                break;
            D = r(u)
        }
    }
    function x(z) {
        if (m = !1,
        y(z),
        !p)
            if (r(l) !== null)
                p = !0,
                $(S);
            else {
                var D = r(u);
                D !== null && te(x, D.startTime - z)
            }
    }
    function S(z, D) {
        p = !1,
        m && (m = !1,
        v(E),
        E = -1),
        h = !0;
        var M = f;
        try {
            for (y(D),
            c = r(l); c !== null && (!(c.expirationTime > D) || z && !Y()); ) {
                var C = c.callback;
                if (typeof C == "function") {
                    c.callback = null,
                    f = c.priorityLevel;
                    var j = C(c.expirationTime <= D);
                    D = e.unstable_now(),
                    typeof j == "function" ? c.callback = j : c === r(l) && o(l),
                    y(D)
                } else
                    o(l);
                c = r(l)
            }
            if (c !== null)
                var H = !0;
            else {
                var Q = r(u);
                Q !== null && te(x, Q.startTime - D),
                H = !1
            }
            return H
        } finally {
            c = null,
            f = M,
            h = !1
        }
    }
    var _ = !1
      , k = null
      , E = -1
      , I = 5
      , F = -1;
    function Y() {
        return !(e.unstable_now() - F < I)
    }
    function R() {
        if (k !== null) {
            var z = e.unstable_now();
            F = z;
            var D = !0;
            try {
                D = k(!0, z)
            } finally {
                D ? O() : (_ = !1,
                k = null)
            }
        } else
            _ = !1
    }
    var O;
    if (typeof g == "function")
        O = function() {
            g(R)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var V = new MessageChannel
          , Z = V.port2;
        V.port1.onmessage = R,
        O = function() {
            Z.postMessage(null)
        }
    } else
        O = function() {
            w(R, 0)
        }
        ;
    function $(z) {
        k = z,
        _ || (_ = !0,
        O())
    }
    function te(z, D) {
        E = w(function() {
            z(e.unstable_now())
        }, D)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(z) {
        z.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        p || h || (p = !0,
        $(S))
    }
    ,
    e.unstable_forceFrameRate = function(z) {
        0 > z || 125 < z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : I = 0 < z ? Math.floor(1e3 / z) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return f
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return r(l)
    }
    ,
    e.unstable_next = function(z) {
        switch (f) {
        case 1:
        case 2:
        case 3:
            var D = 3;
            break;
        default:
            D = f
        }
        var M = f;
        f = D;
        try {
            return z()
        } finally {
            f = M
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(z, D) {
        switch (z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            z = 3
        }
        var M = f;
        f = z;
        try {
            return D()
        } finally {
            f = M
        }
    }
    ,
    e.unstable_scheduleCallback = function(z, D, M) {
        var C = e.unstable_now();
        switch (typeof M == "object" && M !== null ? (M = M.delay,
        M = typeof M == "number" && 0 < M ? C + M : C) : M = C,
        z) {
        case 1:
            var j = -1;
            break;
        case 2:
            j = 250;
            break;
        case 5:
            j = 1073741823;
            break;
        case 4:
            j = 1e4;
            break;
        default:
            j = 5e3
        }
        return j = M + j,
        z = {
            id: d++,
            callback: D,
            priorityLevel: z,
            startTime: M,
            expirationTime: j,
            sortIndex: -1
        },
        M > C ? (z.sortIndex = M,
        t(u, z),
        r(l) === null && z === r(u) && (m ? (v(E),
        E = -1) : m = !0,
        te(x, M - C))) : (z.sortIndex = j,
        t(l, z),
        p || h || (p = !0,
        $(S))),
        z
    }
    ,
    e.unstable_shouldYield = Y,
    e.unstable_wrapCallback = function(z) {
        var D = f;
        return function() {
            var M = f;
            f = D;
            try {
                return z.apply(this, arguments)
            } finally {
                f = M
            }
        }
    }
}
)(qh);
Mh.exports = qh;
var dy = Mh.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hh = b
  , st = dy;
function N(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++)
        t += "&args[]=" + encodeURIComponent(arguments[r]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Wh = new Set
  , Vn = {};
function yo(e, t) {
    Ko(e, t),
    Ko(e + "Capture", t)
}
function Ko(e, t) {
    for (Vn[e] = t,
    e = 0; e < t.length; e++)
        Wh.add(t[e])
}
var nr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , Xl = Object.prototype.hasOwnProperty
  , fy = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , Zd = {}
  , ef = {};
function py(e) {
    return Xl.call(ef, e) ? !0 : Xl.call(Zd, e) ? !1 : fy.test(e) ? ef[e] = !0 : (Zd[e] = !0,
    !1)
}
function hy(e, t, r, o) {
    if (r !== null && r.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return o ? !1 : r !== null ? !r.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function gy(e, t, r, o) {
    if (t === null || typeof t > "u" || hy(e, t, r, o))
        return !0;
    if (o)
        return !1;
    if (r !== null)
        switch (r.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function Ve(e, t, r, o, n, i, a) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = o,
    this.attributeNamespace = n,
    this.mustUseProperty = r,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = i,
    this.removeEmptyString = a
}
var ze = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    ze[e] = new Ve(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    ze[t] = new Ve(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    ze[e] = new Ve(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    ze[e] = new Ve(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    ze[e] = new Ve(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    ze[e] = new Ve(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    ze[e] = new Ve(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    ze[e] = new Ve(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    ze[e] = new Ve(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var Sc = /[\-:]([a-z])/g;
function _c(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Sc, _c);
    ze[t] = new Ve(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Sc, _c);
    ze[t] = new Ve(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Sc, _c);
    ze[t] = new Ve(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    ze[e] = new Ve(e,1,!1,e.toLowerCase(),null,!1,!1)
});
ze.xlinkHref = new Ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    ze[e] = new Ve(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function Bc(e, t, r, o) {
    var n = ze.hasOwnProperty(t) ? ze[t] : null;
    (n !== null ? n.type !== 0 : o || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (gy(t, r, n, o) && (r = null),
    o || n === null ? py(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r)) : n.mustUseProperty ? e[n.propertyName] = r === null ? n.type === 3 ? !1 : "" : r : (t = n.attributeName,
    o = n.attributeNamespace,
    r === null ? e.removeAttribute(t) : (n = n.type,
    r = n === 3 || n === 4 && r === !0 ? "" : "" + r,
    o ? e.setAttributeNS(o, t, r) : e.setAttribute(t, r))))
}
var dr = Hh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , Di = Symbol.for("react.element")
  , Co = Symbol.for("react.portal")
  , To = Symbol.for("react.fragment")
  , Ec = Symbol.for("react.strict_mode")
  , Ql = Symbol.for("react.profiler")
  , $h = Symbol.for("react.provider")
  , Uh = Symbol.for("react.context")
  , Pc = Symbol.for("react.forward_ref")
  , Jl = Symbol.for("react.suspense")
  , Yl = Symbol.for("react.suspense_list")
  , Cc = Symbol.for("react.memo")
  , yr = Symbol.for("react.lazy")
  , Vh = Symbol.for("react.offscreen")
  , tf = Symbol.iterator;
function yn(e) {
    return e === null || typeof e != "object" ? null : (e = tf && e[tf] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var fe = Object.assign, Zs;
function Pn(e) {
    if (Zs === void 0)
        try {
            throw Error()
        } catch (r) {
            var t = r.stack.trim().match(/\n( *(at )?)/);
            Zs = t && t[1] || ""
        }
    return `
` + Zs + e
}
var el = !1;
function tl(e, t) {
    if (!e || el)
        return "";
    el = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var o = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    o = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                o = u
            }
            e()
        }
    } catch (u) {
        if (u && o && typeof u.stack == "string") {
            for (var n = u.stack.split(`
`), i = o.stack.split(`
`), a = n.length - 1, s = i.length - 1; 1 <= a && 0 <= s && n[a] !== i[s]; )
                s--;
            for (; 1 <= a && 0 <= s; a--,
            s--)
                if (n[a] !== i[s]) {
                    if (a !== 1 || s !== 1)
                        do
                            if (a--,
                            s--,
                            0 > s || n[a] !== i[s]) {
                                var l = `
` + n[a].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)),
                                l
                            }
                        while (1 <= a && 0 <= s);
                    break
                }
        }
    } finally {
        el = !1,
        Error.prepareStackTrace = r
    }
    return (e = e ? e.displayName || e.name : "") ? Pn(e) : ""
}
function vy(e) {
    switch (e.tag) {
    case 5:
        return Pn(e.type);
    case 16:
        return Pn("Lazy");
    case 13:
        return Pn("Suspense");
    case 19:
        return Pn("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = tl(e.type, !1),
        e;
    case 11:
        return e = tl(e.type.render, !1),
        e;
    case 1:
        return e = tl(e.type, !0),
        e;
    default:
        return ""
    }
}
function Zl(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case To:
        return "Fragment";
    case Co:
        return "Portal";
    case Ql:
        return "Profiler";
    case Ec:
        return "StrictMode";
    case Jl:
        return "Suspense";
    case Yl:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case Uh:
            return (e.displayName || "Context") + ".Consumer";
        case $h:
            return (e._context.displayName || "Context") + ".Provider";
        case Pc:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case Cc:
            return t = e.displayName || null,
            t !== null ? t : Zl(e.type) || "Memo";
        case yr:
            t = e._payload,
            e = e._init;
            try {
                return Zl(e(t))
            } catch {}
        }
    return null
}
function my(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return Zl(t);
    case 8:
        return t === Ec ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function jr(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function Gh(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function yy(e) {
    var t = Gh(e) ? "checked" : "value"
      , r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , o = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof r < "u" && typeof r.get == "function" && typeof r.set == "function") {
        var n = r.get
          , i = r.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return n.call(this)
            },
            set: function(a) {
                o = "" + a,
                i.call(this, a)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: r.enumerable
        }),
        {
            getValue: function() {
                return o
            },
            setValue: function(a) {
                o = "" + a
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function ji(e) {
    e._valueTracker || (e._valueTracker = yy(e))
}
function Kh(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var r = t.getValue()
      , o = "";
    return e && (o = Gh(e) ? e.checked ? "true" : "false" : e.value),
    e = o,
    e !== r ? (t.setValue(e),
    !0) : !1
}
function Ea(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function eu(e, t) {
    var r = t.checked;
    return fe({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: r ?? e._wrapperState.initialChecked
    })
}
function rf(e, t) {
    var r = t.defaultValue == null ? "" : t.defaultValue
      , o = t.checked != null ? t.checked : t.defaultChecked;
    r = jr(t.value != null ? t.value : r),
    e._wrapperState = {
        initialChecked: o,
        initialValue: r,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function Xh(e, t) {
    t = t.checked,
    t != null && Bc(e, "checked", t, !1)
}
function tu(e, t) {
    Xh(e, t);
    var r = jr(t.value)
      , o = t.type;
    if (r != null)
        o === "number" ? (r === 0 && e.value === "" || e.value != r) && (e.value = "" + r) : e.value !== "" + r && (e.value = "" + r);
    else if (o === "submit" || o === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? ru(e, t.type, r) : t.hasOwnProperty("defaultValue") && ru(e, t.type, jr(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function of(e, t, r) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var o = t.type;
        if (!(o !== "submit" && o !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        r || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    r = e.name,
    r !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    r !== "" && (e.name = r)
}
function ru(e, t, r) {
    (t !== "number" || Ea(e.ownerDocument) !== e) && (r == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + r && (e.defaultValue = "" + r))
}
var Cn = Array.isArray;
function qo(e, t, r, o) {
    if (e = e.options,
    t) {
        t = {};
        for (var n = 0; n < r.length; n++)
            t["$" + r[n]] = !0;
        for (r = 0; r < e.length; r++)
            n = t.hasOwnProperty("$" + e[r].value),
            e[r].selected !== n && (e[r].selected = n),
            n && o && (e[r].defaultSelected = !0)
    } else {
        for (r = "" + jr(r),
        t = null,
        n = 0; n < e.length; n++) {
            if (e[n].value === r) {
                e[n].selected = !0,
                o && (e[n].defaultSelected = !0);
                return
            }
            t !== null || e[n].disabled || (t = e[n])
        }
        t !== null && (t.selected = !0)
    }
}
function ou(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(N(91));
    return fe({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function nf(e, t) {
    var r = t.value;
    if (r == null) {
        if (r = t.children,
        t = t.defaultValue,
        r != null) {
            if (t != null)
                throw Error(N(92));
            if (Cn(r)) {
                if (1 < r.length)
                    throw Error(N(93));
                r = r[0]
            }
            t = r
        }
        t == null && (t = ""),
        r = t
    }
    e._wrapperState = {
        initialValue: jr(r)
    }
}
function Qh(e, t) {
    var r = jr(t.value)
      , o = jr(t.defaultValue);
    r != null && (r = "" + r,
    r !== e.value && (e.value = r),
    t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
    o != null && (e.defaultValue = "" + o)
}
function af(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function Jh(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function nu(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Jh(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Ii, Yh = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, r, o, n) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, r, o, n)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (Ii = Ii || document.createElement("div"),
        Ii.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = Ii.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function Gn(e, t) {
    if (t) {
        var r = e.firstChild;
        if (r && r === e.lastChild && r.nodeType === 3) {
            r.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Dn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , by = ["Webkit", "ms", "Moz", "O"];
Object.keys(Dn).forEach(function(e) {
    by.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        Dn[t] = Dn[e]
    })
});
function Zh(e, t, r) {
    return t == null || typeof t == "boolean" || t === "" ? "" : r || typeof t != "number" || t === 0 || Dn.hasOwnProperty(e) && Dn[e] ? ("" + t).trim() : t + "px"
}
function eg(e, t) {
    e = e.style;
    for (var r in t)
        if (t.hasOwnProperty(r)) {
            var o = r.indexOf("--") === 0
              , n = Zh(r, t[r], o);
            r === "float" && (r = "cssFloat"),
            o ? e.setProperty(r, n) : e[r] = n
        }
}
var wy = fe({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function iu(e, t) {
    if (t) {
        if (wy[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(N(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(N(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(N(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(N(62))
    }
}
function au(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var su = null;
function Tc(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var lu = null
  , Ho = null
  , Wo = null;
function sf(e) {
    if (e = xi(e)) {
        if (typeof lu != "function")
            throw Error(N(280));
        var t = e.stateNode;
        t && (t = hs(t),
        lu(e.stateNode, e.type, t))
    }
}
function tg(e) {
    Ho ? Wo ? Wo.push(e) : Wo = [e] : Ho = e
}
function rg() {
    if (Ho) {
        var e = Ho
          , t = Wo;
        if (Wo = Ho = null,
        sf(e),
        t)
            for (e = 0; e < t.length; e++)
                sf(t[e])
    }
}
function og(e, t) {
    return e(t)
}
function ng() {}
var rl = !1;
function ig(e, t, r) {
    if (rl)
        return e(t, r);
    rl = !0;
    try {
        return og(e, t, r)
    } finally {
        rl = !1,
        (Ho !== null || Wo !== null) && (ng(),
        rg())
    }
}
function Kn(e, t) {
    var r = e.stateNode;
    if (r === null)
        return null;
    var o = hs(r);
    if (o === null)
        return null;
    r = o[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (o = !o.disabled) || (e = e.type,
        o = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !o;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (r && typeof r != "function")
        throw Error(N(231, t, typeof r));
    return r
}
var uu = !1;
if (nr)
    try {
        var bn = {};
        Object.defineProperty(bn, "passive", {
            get: function() {
                uu = !0
            }
        }),
        window.addEventListener("test", bn, bn),
        window.removeEventListener("test", bn, bn)
    } catch {
        uu = !1
    }
function ky(e, t, r, o, n, i, a, s, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(r, u)
    } catch (d) {
        this.onError(d)
    }
}
var jn = !1
  , Pa = null
  , Ca = !1
  , cu = null
  , xy = {
    onError: function(e) {
        jn = !0,
        Pa = e
    }
};
function Sy(e, t, r, o, n, i, a, s, l) {
    jn = !1,
    Pa = null,
    ky.apply(xy, arguments)
}
function _y(e, t, r, o, n, i, a, s, l) {
    if (Sy.apply(this, arguments),
    jn) {
        if (jn) {
            var u = Pa;
            jn = !1,
            Pa = null
        } else
            throw Error(N(198));
        Ca || (Ca = !0,
        cu = u)
    }
}
function bo(e) {
    var t = e
      , r = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (r = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? r : null
}
function ag(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function lf(e) {
    if (bo(e) !== e)
        throw Error(N(188))
}
function By(e) {
    var t = e.alternate;
    if (!t) {
        if (t = bo(e),
        t === null)
            throw Error(N(188));
        return t !== e ? null : e
    }
    for (var r = e, o = t; ; ) {
        var n = r.return;
        if (n === null)
            break;
        var i = n.alternate;
        if (i === null) {
            if (o = n.return,
            o !== null) {
                r = o;
                continue
            }
            break
        }
        if (n.child === i.child) {
            for (i = n.child; i; ) {
                if (i === r)
                    return lf(n),
                    e;
                if (i === o)
                    return lf(n),
                    t;
                i = i.sibling
            }
            throw Error(N(188))
        }
        if (r.return !== o.return)
            r = n,
            o = i;
        else {
            for (var a = !1, s = n.child; s; ) {
                if (s === r) {
                    a = !0,
                    r = n,
                    o = i;
                    break
                }
                if (s === o) {
                    a = !0,
                    o = n,
                    r = i;
                    break
                }
                s = s.sibling
            }
            if (!a) {
                for (s = i.child; s; ) {
                    if (s === r) {
                        a = !0,
                        r = i,
                        o = n;
                        break
                    }
                    if (s === o) {
                        a = !0,
                        o = i,
                        r = n;
                        break
                    }
                    s = s.sibling
                }
                if (!a)
                    throw Error(N(189))
            }
        }
        if (r.alternate !== o)
            throw Error(N(190))
    }
    if (r.tag !== 3)
        throw Error(N(188));
    return r.stateNode.current === r ? e : t
}
function sg(e) {
    return e = By(e),
    e !== null ? lg(e) : null
}
function lg(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = lg(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var ug = st.unstable_scheduleCallback
  , uf = st.unstable_cancelCallback
  , Ey = st.unstable_shouldYield
  , Py = st.unstable_requestPaint
  , ye = st.unstable_now
  , Cy = st.unstable_getCurrentPriorityLevel
  , Nc = st.unstable_ImmediatePriority
  , cg = st.unstable_UserBlockingPriority
  , Ta = st.unstable_NormalPriority
  , Ty = st.unstable_LowPriority
  , dg = st.unstable_IdlePriority
  , cs = null
  , $t = null;
function Ny(e) {
    if ($t && typeof $t.onCommitFiberRoot == "function")
        try {
            $t.onCommitFiberRoot(cs, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var Nt = Math.clz32 ? Math.clz32 : Ry
  , zy = Math.log
  , Fy = Math.LN2;
function Ry(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (zy(e) / Fy | 0) | 0
}
var Ai = 64
  , Oi = 4194304;
function Tn(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function Na(e, t) {
    var r = e.pendingLanes;
    if (r === 0)
        return 0;
    var o = 0
      , n = e.suspendedLanes
      , i = e.pingedLanes
      , a = r & 268435455;
    if (a !== 0) {
        var s = a & ~n;
        s !== 0 ? o = Tn(s) : (i &= a,
        i !== 0 && (o = Tn(i)))
    } else
        a = r & ~n,
        a !== 0 ? o = Tn(a) : i !== 0 && (o = Tn(i));
    if (o === 0)
        return 0;
    if (t !== 0 && t !== o && !(t & n) && (n = o & -o,
    i = t & -t,
    n >= i || n === 16 && (i & 4194240) !== 0))
        return t;
    if (o & 4 && (o |= r & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= o; 0 < t; )
            r = 31 - Nt(t),
            n = 1 << r,
            o |= e[r],
            t &= ~n;
    return o
}
function Dy(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function jy(e, t) {
    for (var r = e.suspendedLanes, o = e.pingedLanes, n = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
        var a = 31 - Nt(i)
          , s = 1 << a
          , l = n[a];
        l === -1 ? (!(s & r) || s & o) && (n[a] = Dy(s, t)) : l <= t && (e.expiredLanes |= s),
        i &= ~s
    }
}
function du(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function fg() {
    var e = Ai;
    return Ai <<= 1,
    !(Ai & 4194240) && (Ai = 64),
    e
}
function ol(e) {
    for (var t = [], r = 0; 31 > r; r++)
        t.push(e);
    return t
}
function wi(e, t, r) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - Nt(t),
    e[t] = r
}
function Iy(e, t) {
    var r = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var o = e.eventTimes;
    for (e = e.expirationTimes; 0 < r; ) {
        var n = 31 - Nt(r)
          , i = 1 << n;
        t[n] = 0,
        o[n] = -1,
        e[n] = -1,
        r &= ~i
    }
}
function zc(e, t) {
    var r = e.entangledLanes |= t;
    for (e = e.entanglements; r; ) {
        var o = 31 - Nt(r)
          , n = 1 << o;
        n & t | e[o] & t && (e[o] |= t),
        r &= ~n
    }
}
var ee = 0;
function pg(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var hg, Fc, gg, vg, mg, fu = !1, Li = [], Br = null, Er = null, Pr = null, Xn = new Map, Qn = new Map, wr = [], Ay = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function cf(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        Br = null;
        break;
    case "dragenter":
    case "dragleave":
        Er = null;
        break;
    case "mouseover":
    case "mouseout":
        Pr = null;
        break;
    case "pointerover":
    case "pointerout":
        Xn.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Qn.delete(t.pointerId)
    }
}
function wn(e, t, r, o, n, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: r,
        eventSystemFlags: o,
        nativeEvent: i,
        targetContainers: [n]
    },
    t !== null && (t = xi(t),
    t !== null && Fc(t)),
    e) : (e.eventSystemFlags |= o,
    t = e.targetContainers,
    n !== null && t.indexOf(n) === -1 && t.push(n),
    e)
}
function Oy(e, t, r, o, n) {
    switch (t) {
    case "focusin":
        return Br = wn(Br, e, t, r, o, n),
        !0;
    case "dragenter":
        return Er = wn(Er, e, t, r, o, n),
        !0;
    case "mouseover":
        return Pr = wn(Pr, e, t, r, o, n),
        !0;
    case "pointerover":
        var i = n.pointerId;
        return Xn.set(i, wn(Xn.get(i) || null, e, t, r, o, n)),
        !0;
    case "gotpointercapture":
        return i = n.pointerId,
        Qn.set(i, wn(Qn.get(i) || null, e, t, r, o, n)),
        !0
    }
    return !1
}
function yg(e) {
    var t = oo(e.target);
    if (t !== null) {
        var r = bo(t);
        if (r !== null) {
            if (t = r.tag,
            t === 13) {
                if (t = ag(r),
                t !== null) {
                    e.blockedOn = t,
                    mg(e.priority, function() {
                        gg(r)
                    });
                    return
                }
            } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function aa(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var r = pu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (r === null) {
            r = e.nativeEvent;
            var o = new r.constructor(r.type,r);
            su = o,
            r.target.dispatchEvent(o),
            su = null
        } else
            return t = xi(r),
            t !== null && Fc(t),
            e.blockedOn = r,
            !1;
        t.shift()
    }
    return !0
}
function df(e, t, r) {
    aa(e) && r.delete(t)
}
function Ly() {
    fu = !1,
    Br !== null && aa(Br) && (Br = null),
    Er !== null && aa(Er) && (Er = null),
    Pr !== null && aa(Pr) && (Pr = null),
    Xn.forEach(df),
    Qn.forEach(df)
}
function kn(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    fu || (fu = !0,
    st.unstable_scheduleCallback(st.unstable_NormalPriority, Ly)))
}
function Jn(e) {
    function t(n) {
        return kn(n, e)
    }
    if (0 < Li.length) {
        kn(Li[0], e);
        for (var r = 1; r < Li.length; r++) {
            var o = Li[r];
            o.blockedOn === e && (o.blockedOn = null)
        }
    }
    for (Br !== null && kn(Br, e),
    Er !== null && kn(Er, e),
    Pr !== null && kn(Pr, e),
    Xn.forEach(t),
    Qn.forEach(t),
    r = 0; r < wr.length; r++)
        o = wr[r],
        o.blockedOn === e && (o.blockedOn = null);
    for (; 0 < wr.length && (r = wr[0],
    r.blockedOn === null); )
        yg(r),
        r.blockedOn === null && wr.shift()
}
var $o = dr.ReactCurrentBatchConfig
  , za = !0;
function My(e, t, r, o) {
    var n = ee
      , i = $o.transition;
    $o.transition = null;
    try {
        ee = 1,
        Rc(e, t, r, o)
    } finally {
        ee = n,
        $o.transition = i
    }
}
function qy(e, t, r, o) {
    var n = ee
      , i = $o.transition;
    $o.transition = null;
    try {
        ee = 4,
        Rc(e, t, r, o)
    } finally {
        ee = n,
        $o.transition = i
    }
}
function Rc(e, t, r, o) {
    if (za) {
        var n = pu(e, t, r, o);
        if (n === null)
            pl(e, t, o, Fa, r),
            cf(e, o);
        else if (Oy(n, e, t, r, o))
            o.stopPropagation();
        else if (cf(e, o),
        t & 4 && -1 < Ay.indexOf(e)) {
            for (; n !== null; ) {
                var i = xi(n);
                if (i !== null && hg(i),
                i = pu(e, t, r, o),
                i === null && pl(e, t, o, Fa, r),
                i === n)
                    break;
                n = i
            }
            n !== null && o.stopPropagation()
        } else
            pl(e, t, o, null, r)
    }
}
var Fa = null;
function pu(e, t, r, o) {
    if (Fa = null,
    e = Tc(o),
    e = oo(e),
    e !== null)
        if (t = bo(e),
        t === null)
            e = null;
        else if (r = t.tag,
        r === 13) {
            if (e = ag(t),
            e !== null)
                return e;
            e = null
        } else if (r === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return Fa = e,
    null
}
function bg(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (Cy()) {
        case Nc:
            return 1;
        case cg:
            return 4;
        case Ta:
        case Ty:
            return 16;
        case dg:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var xr = null
  , Dc = null
  , sa = null;
function wg() {
    if (sa)
        return sa;
    var e, t = Dc, r = t.length, o, n = "value"in xr ? xr.value : xr.textContent, i = n.length;
    for (e = 0; e < r && t[e] === n[e]; e++)
        ;
    var a = r - e;
    for (o = 1; o <= a && t[r - o] === n[i - o]; o++)
        ;
    return sa = n.slice(e, 1 < o ? 1 - o : void 0)
}
function la(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function Mi() {
    return !0
}
function ff() {
    return !1
}
function dt(e) {
    function t(r, o, n, i, a) {
        this._reactName = r,
        this._targetInst = n,
        this.type = o,
        this.nativeEvent = i,
        this.target = a,
        this.currentTarget = null;
        for (var s in e)
            e.hasOwnProperty(s) && (r = e[s],
            this[s] = r ? r(i) : i[s]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Mi : ff,
        this.isPropagationStopped = ff,
        this
    }
    return fe(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var r = this.nativeEvent;
            r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1),
            this.isDefaultPrevented = Mi)
        },
        stopPropagation: function() {
            var r = this.nativeEvent;
            r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
            this.isPropagationStopped = Mi)
        },
        persist: function() {},
        isPersistent: Mi
    }),
    t
}
var un = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, jc = dt(un), ki = fe({}, un, {
    view: 0,
    detail: 0
}), Hy = dt(ki), nl, il, xn, ds = fe({}, ki, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ic,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== xn && (xn && e.type === "mousemove" ? (nl = e.screenX - xn.screenX,
        il = e.screenY - xn.screenY) : il = nl = 0,
        xn = e),
        nl)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : il
    }
}), pf = dt(ds), Wy = fe({}, ds, {
    dataTransfer: 0
}), $y = dt(Wy), Uy = fe({}, ki, {
    relatedTarget: 0
}), al = dt(Uy), Vy = fe({}, un, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), Gy = dt(Vy), Ky = fe({}, un, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), Xy = dt(Ky), Qy = fe({}, un, {
    data: 0
}), hf = dt(Qy), Jy = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, Yy = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, Zy = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function eb(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Zy[e]) ? !!t[e] : !1
}
function Ic() {
    return eb
}
var tb = fe({}, ki, {
    key: function(e) {
        if (e.key) {
            var t = Jy[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = la(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Yy[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ic,
    charCode: function(e) {
        return e.type === "keypress" ? la(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? la(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , rb = dt(tb)
  , ob = fe({}, ds, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , gf = dt(ob)
  , nb = fe({}, ki, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ic
})
  , ib = dt(nb)
  , ab = fe({}, un, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , sb = dt(ab)
  , lb = fe({}, ds, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , ub = dt(lb)
  , cb = [9, 13, 27, 32]
  , Ac = nr && "CompositionEvent"in window
  , In = null;
nr && "documentMode"in document && (In = document.documentMode);
var db = nr && "TextEvent"in window && !In
  , kg = nr && (!Ac || In && 8 < In && 11 >= In)
  , vf = " "
  , mf = !1;
function xg(e, t) {
    switch (e) {
    case "keyup":
        return cb.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function Sg(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var No = !1;
function fb(e, t) {
    switch (e) {
    case "compositionend":
        return Sg(t);
    case "keypress":
        return t.which !== 32 ? null : (mf = !0,
        vf);
    case "textInput":
        return e = t.data,
        e === vf && mf ? null : e;
    default:
        return null
    }
}
function pb(e, t) {
    if (No)
        return e === "compositionend" || !Ac && xg(e, t) ? (e = wg(),
        sa = Dc = xr = null,
        No = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return kg && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var hb = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function yf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!hb[e.type] : t === "textarea"
}
function _g(e, t, r, o) {
    tg(o),
    t = Ra(t, "onChange"),
    0 < t.length && (r = new jc("onChange","change",null,r,o),
    e.push({
        event: r,
        listeners: t
    }))
}
var An = null
  , Yn = null;
function gb(e) {
    jg(e, 0)
}
function fs(e) {
    var t = Ro(e);
    if (Kh(t))
        return e
}
function vb(e, t) {
    if (e === "change")
        return t
}
var Bg = !1;
if (nr) {
    var sl;
    if (nr) {
        var ll = "oninput"in document;
        if (!ll) {
            var bf = document.createElement("div");
            bf.setAttribute("oninput", "return;"),
            ll = typeof bf.oninput == "function"
        }
        sl = ll
    } else
        sl = !1;
    Bg = sl && (!document.documentMode || 9 < document.documentMode)
}
function wf() {
    An && (An.detachEvent("onpropertychange", Eg),
    Yn = An = null)
}
function Eg(e) {
    if (e.propertyName === "value" && fs(Yn)) {
        var t = [];
        _g(t, Yn, e, Tc(e)),
        ig(gb, t)
    }
}
function mb(e, t, r) {
    e === "focusin" ? (wf(),
    An = t,
    Yn = r,
    An.attachEvent("onpropertychange", Eg)) : e === "focusout" && wf()
}
function yb(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return fs(Yn)
}
function bb(e, t) {
    if (e === "click")
        return fs(t)
}
function wb(e, t) {
    if (e === "input" || e === "change")
        return fs(t)
}
function kb(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Ft = typeof Object.is == "function" ? Object.is : kb;
function Zn(e, t) {
    if (Ft(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var r = Object.keys(e)
      , o = Object.keys(t);
    if (r.length !== o.length)
        return !1;
    for (o = 0; o < r.length; o++) {
        var n = r[o];
        if (!Xl.call(t, n) || !Ft(e[n], t[n]))
            return !1
    }
    return !0
}
function kf(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function xf(e, t) {
    var r = kf(e);
    e = 0;
    for (var o; r; ) {
        if (r.nodeType === 3) {
            if (o = e + r.textContent.length,
            e <= t && o >= t)
                return {
                    node: r,
                    offset: t - e
                };
            e = o
        }
        e: {
            for (; r; ) {
                if (r.nextSibling) {
                    r = r.nextSibling;
                    break e
                }
                r = r.parentNode
            }
            r = void 0
        }
        r = kf(r)
    }
}
function Pg(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Pg(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function Cg() {
    for (var e = window, t = Ea(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var r = typeof t.contentWindow.location.href == "string"
        } catch {
            r = !1
        }
        if (r)
            e = t.contentWindow;
        else
            break;
        t = Ea(e.document)
    }
    return t
}
function Oc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function xb(e) {
    var t = Cg()
      , r = e.focusedElem
      , o = e.selectionRange;
    if (t !== r && r && r.ownerDocument && Pg(r.ownerDocument.documentElement, r)) {
        if (o !== null && Oc(r)) {
            if (t = o.start,
            e = o.end,
            e === void 0 && (e = t),
            "selectionStart"in r)
                r.selectionStart = t,
                r.selectionEnd = Math.min(e, r.value.length);
            else if (e = (t = r.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var n = r.textContent.length
                  , i = Math.min(o.start, n);
                o = o.end === void 0 ? i : Math.min(o.end, n),
                !e.extend && i > o && (n = o,
                o = i,
                i = n),
                n = xf(r, i);
                var a = xf(r, o);
                n && a && (e.rangeCount !== 1 || e.anchorNode !== n.node || e.anchorOffset !== n.offset || e.focusNode !== a.node || e.focusOffset !== a.offset) && (t = t.createRange(),
                t.setStart(n.node, n.offset),
                e.removeAllRanges(),
                i > o ? (e.addRange(t),
                e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = r; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof r.focus == "function" && r.focus(),
        r = 0; r < t.length; r++)
            e = t[r],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var Sb = nr && "documentMode"in document && 11 >= document.documentMode
  , zo = null
  , hu = null
  , On = null
  , gu = !1;
function Sf(e, t, r) {
    var o = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    gu || zo == null || zo !== Ea(o) || (o = zo,
    "selectionStart"in o && Oc(o) ? o = {
        start: o.selectionStart,
        end: o.selectionEnd
    } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(),
    o = {
        anchorNode: o.anchorNode,
        anchorOffset: o.anchorOffset,
        focusNode: o.focusNode,
        focusOffset: o.focusOffset
    }),
    On && Zn(On, o) || (On = o,
    o = Ra(hu, "onSelect"),
    0 < o.length && (t = new jc("onSelect","select",null,t,r),
    e.push({
        event: t,
        listeners: o
    }),
    t.target = zo)))
}
function qi(e, t) {
    var r = {};
    return r[e.toLowerCase()] = t.toLowerCase(),
    r["Webkit" + e] = "webkit" + t,
    r["Moz" + e] = "moz" + t,
    r
}
var Fo = {
    animationend: qi("Animation", "AnimationEnd"),
    animationiteration: qi("Animation", "AnimationIteration"),
    animationstart: qi("Animation", "AnimationStart"),
    transitionend: qi("Transition", "TransitionEnd")
}
  , ul = {}
  , Tg = {};
nr && (Tg = document.createElement("div").style,
"AnimationEvent"in window || (delete Fo.animationend.animation,
delete Fo.animationiteration.animation,
delete Fo.animationstart.animation),
"TransitionEvent"in window || delete Fo.transitionend.transition);
function ps(e) {
    if (ul[e])
        return ul[e];
    if (!Fo[e])
        return e;
    var t = Fo[e], r;
    for (r in t)
        if (t.hasOwnProperty(r) && r in Tg)
            return ul[e] = t[r];
    return e
}
var Ng = ps("animationend")
  , zg = ps("animationiteration")
  , Fg = ps("animationstart")
  , Rg = ps("transitionend")
  , Dg = new Map
  , _f = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function qr(e, t) {
    Dg.set(e, t),
    yo(t, [e])
}
for (var cl = 0; cl < _f.length; cl++) {
    var dl = _f[cl]
      , _b = dl.toLowerCase()
      , Bb = dl[0].toUpperCase() + dl.slice(1);
    qr(_b, "on" + Bb)
}
qr(Ng, "onAnimationEnd");
qr(zg, "onAnimationIteration");
qr(Fg, "onAnimationStart");
qr("dblclick", "onDoubleClick");
qr("focusin", "onFocus");
qr("focusout", "onBlur");
qr(Rg, "onTransitionEnd");
Ko("onMouseEnter", ["mouseout", "mouseover"]);
Ko("onMouseLeave", ["mouseout", "mouseover"]);
Ko("onPointerEnter", ["pointerout", "pointerover"]);
Ko("onPointerLeave", ["pointerout", "pointerover"]);
yo("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
yo("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
yo("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
yo("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
yo("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
yo("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Nn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , Eb = new Set("cancel close invalid load scroll toggle".split(" ").concat(Nn));
function Bf(e, t, r) {
    var o = e.type || "unknown-event";
    e.currentTarget = r,
    _y(o, t, void 0, e),
    e.currentTarget = null
}
function jg(e, t) {
    t = (t & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
        var o = e[r]
          , n = o.event;
        o = o.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var a = o.length - 1; 0 <= a; a--) {
                    var s = o[a]
                      , l = s.instance
                      , u = s.currentTarget;
                    if (s = s.listener,
                    l !== i && n.isPropagationStopped())
                        break e;
                    Bf(n, s, u),
                    i = l
                }
            else
                for (a = 0; a < o.length; a++) {
                    if (s = o[a],
                    l = s.instance,
                    u = s.currentTarget,
                    s = s.listener,
                    l !== i && n.isPropagationStopped())
                        break e;
                    Bf(n, s, u),
                    i = l
                }
        }
    }
    if (Ca)
        throw e = cu,
        Ca = !1,
        cu = null,
        e
}
function ne(e, t) {
    var r = t[wu];
    r === void 0 && (r = t[wu] = new Set);
    var o = e + "__bubble";
    r.has(o) || (Ig(t, e, 2, !1),
    r.add(o))
}
function fl(e, t, r) {
    var o = 0;
    t && (o |= 4),
    Ig(r, e, o, t)
}
var Hi = "_reactListening" + Math.random().toString(36).slice(2);
function ei(e) {
    if (!e[Hi]) {
        e[Hi] = !0,
        Wh.forEach(function(r) {
            r !== "selectionchange" && (Eb.has(r) || fl(r, !1, e),
            fl(r, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Hi] || (t[Hi] = !0,
        fl("selectionchange", !1, t))
    }
}
function Ig(e, t, r, o) {
    switch (bg(t)) {
    case 1:
        var n = My;
        break;
    case 4:
        n = qy;
        break;
    default:
        n = Rc
    }
    r = n.bind(null, t, r, e),
    n = void 0,
    !uu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (n = !0),
    o ? n !== void 0 ? e.addEventListener(t, r, {
        capture: !0,
        passive: n
    }) : e.addEventListener(t, r, !0) : n !== void 0 ? e.addEventListener(t, r, {
        passive: n
    }) : e.addEventListener(t, r, !1)
}
function pl(e, t, r, o, n) {
    var i = o;
    if (!(t & 1) && !(t & 2) && o !== null)
        e: for (; ; ) {
            if (o === null)
                return;
            var a = o.tag;
            if (a === 3 || a === 4) {
                var s = o.stateNode.containerInfo;
                if (s === n || s.nodeType === 8 && s.parentNode === n)
                    break;
                if (a === 4)
                    for (a = o.return; a !== null; ) {
                        var l = a.tag;
                        if ((l === 3 || l === 4) && (l = a.stateNode.containerInfo,
                        l === n || l.nodeType === 8 && l.parentNode === n))
                            return;
                        a = a.return
                    }
                for (; s !== null; ) {
                    if (a = oo(s),
                    a === null)
                        return;
                    if (l = a.tag,
                    l === 5 || l === 6) {
                        o = i = a;
                        continue e
                    }
                    s = s.parentNode
                }
            }
            o = o.return
        }
    ig(function() {
        var u = i
          , d = Tc(r)
          , c = [];
        e: {
            var f = Dg.get(e);
            if (f !== void 0) {
                var h = jc
                  , p = e;
                switch (e) {
                case "keypress":
                    if (la(r) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    h = rb;
                    break;
                case "focusin":
                    p = "focus",
                    h = al;
                    break;
                case "focusout":
                    p = "blur",
                    h = al;
                    break;
                case "beforeblur":
                case "afterblur":
                    h = al;
                    break;
                case "click":
                    if (r.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    h = pf;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    h = $y;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    h = ib;
                    break;
                case Ng:
                case zg:
                case Fg:
                    h = Gy;
                    break;
                case Rg:
                    h = sb;
                    break;
                case "scroll":
                    h = Hy;
                    break;
                case "wheel":
                    h = ub;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    h = Xy;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    h = gf
                }
                var m = (t & 4) !== 0
                  , w = !m && e === "scroll"
                  , v = m ? f !== null ? f + "Capture" : null : f;
                m = [];
                for (var g = u, y; g !== null; ) {
                    y = g;
                    var x = y.stateNode;
                    if (y.tag === 5 && x !== null && (y = x,
                    v !== null && (x = Kn(g, v),
                    x != null && m.push(ti(g, x, y)))),
                    w)
                        break;
                    g = g.return
                }
                0 < m.length && (f = new h(f,p,null,r,d),
                c.push({
                    event: f,
                    listeners: m
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (f = e === "mouseover" || e === "pointerover",
                h = e === "mouseout" || e === "pointerout",
                f && r !== su && (p = r.relatedTarget || r.fromElement) && (oo(p) || p[ir]))
                    break e;
                if ((h || f) && (f = d.window === d ? d : (f = d.ownerDocument) ? f.defaultView || f.parentWindow : window,
                h ? (p = r.relatedTarget || r.toElement,
                h = u,
                p = p ? oo(p) : null,
                p !== null && (w = bo(p),
                p !== w || p.tag !== 5 && p.tag !== 6) && (p = null)) : (h = null,
                p = u),
                h !== p)) {
                    if (m = pf,
                    x = "onMouseLeave",
                    v = "onMouseEnter",
                    g = "mouse",
                    (e === "pointerout" || e === "pointerover") && (m = gf,
                    x = "onPointerLeave",
                    v = "onPointerEnter",
                    g = "pointer"),
                    w = h == null ? f : Ro(h),
                    y = p == null ? f : Ro(p),
                    f = new m(x,g + "leave",h,r,d),
                    f.target = w,
                    f.relatedTarget = y,
                    x = null,
                    oo(d) === u && (m = new m(v,g + "enter",p,r,d),
                    m.target = y,
                    m.relatedTarget = w,
                    x = m),
                    w = x,
                    h && p)
                        t: {
                            for (m = h,
                            v = p,
                            g = 0,
                            y = m; y; y = So(y))
                                g++;
                            for (y = 0,
                            x = v; x; x = So(x))
                                y++;
                            for (; 0 < g - y; )
                                m = So(m),
                                g--;
                            for (; 0 < y - g; )
                                v = So(v),
                                y--;
                            for (; g--; ) {
                                if (m === v || v !== null && m === v.alternate)
                                    break t;
                                m = So(m),
                                v = So(v)
                            }
                            m = null
                        }
                    else
                        m = null;
                    h !== null && Ef(c, f, h, m, !1),
                    p !== null && w !== null && Ef(c, w, p, m, !0)
                }
            }
            e: {
                if (f = u ? Ro(u) : window,
                h = f.nodeName && f.nodeName.toLowerCase(),
                h === "select" || h === "input" && f.type === "file")
                    var S = vb;
                else if (yf(f))
                    if (Bg)
                        S = wb;
                    else {
                        S = yb;
                        var _ = mb
                    }
                else
                    (h = f.nodeName) && h.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (S = bb);
                if (S && (S = S(e, u))) {
                    _g(c, S, r, d);
                    break e
                }
                _ && _(e, f, u),
                e === "focusout" && (_ = f._wrapperState) && _.controlled && f.type === "number" && ru(f, "number", f.value)
            }
            switch (_ = u ? Ro(u) : window,
            e) {
            case "focusin":
                (yf(_) || _.contentEditable === "true") && (zo = _,
                hu = u,
                On = null);
                break;
            case "focusout":
                On = hu = zo = null;
                break;
            case "mousedown":
                gu = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                gu = !1,
                Sf(c, r, d);
                break;
            case "selectionchange":
                if (Sb)
                    break;
            case "keydown":
            case "keyup":
                Sf(c, r, d)
            }
            var k;
            if (Ac)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var E = "onCompositionStart";
                        break e;
                    case "compositionend":
                        E = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        E = "onCompositionUpdate";
                        break e
                    }
                    E = void 0
                }
            else
                No ? xg(e, r) && (E = "onCompositionEnd") : e === "keydown" && r.keyCode === 229 && (E = "onCompositionStart");
            E && (kg && r.locale !== "ko" && (No || E !== "onCompositionStart" ? E === "onCompositionEnd" && No && (k = wg()) : (xr = d,
            Dc = "value"in xr ? xr.value : xr.textContent,
            No = !0)),
            _ = Ra(u, E),
            0 < _.length && (E = new hf(E,e,null,r,d),
            c.push({
                event: E,
                listeners: _
            }),
            k ? E.data = k : (k = Sg(r),
            k !== null && (E.data = k)))),
            (k = db ? fb(e, r) : pb(e, r)) && (u = Ra(u, "onBeforeInput"),
            0 < u.length && (d = new hf("onBeforeInput","beforeinput",null,r,d),
            c.push({
                event: d,
                listeners: u
            }),
            d.data = k))
        }
        jg(c, t)
    })
}
function ti(e, t, r) {
    return {
        instance: e,
        listener: t,
        currentTarget: r
    }
}
function Ra(e, t) {
    for (var r = t + "Capture", o = []; e !== null; ) {
        var n = e
          , i = n.stateNode;
        n.tag === 5 && i !== null && (n = i,
        i = Kn(e, r),
        i != null && o.unshift(ti(e, i, n)),
        i = Kn(e, t),
        i != null && o.push(ti(e, i, n))),
        e = e.return
    }
    return o
}
function So(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function Ef(e, t, r, o, n) {
    for (var i = t._reactName, a = []; r !== null && r !== o; ) {
        var s = r
          , l = s.alternate
          , u = s.stateNode;
        if (l !== null && l === o)
            break;
        s.tag === 5 && u !== null && (s = u,
        n ? (l = Kn(r, i),
        l != null && a.unshift(ti(r, l, s))) : n || (l = Kn(r, i),
        l != null && a.push(ti(r, l, s)))),
        r = r.return
    }
    a.length !== 0 && e.push({
        event: t,
        listeners: a
    })
}
var Pb = /\r\n?/g
  , Cb = /\u0000|\uFFFD/g;
function Pf(e) {
    return (typeof e == "string" ? e : "" + e).replace(Pb, `
`).replace(Cb, "")
}
function Wi(e, t, r) {
    if (t = Pf(t),
    Pf(e) !== t && r)
        throw Error(N(425))
}
function Da() {}
var vu = null
  , mu = null;
function yu(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var bu = typeof setTimeout == "function" ? setTimeout : void 0
  , Tb = typeof clearTimeout == "function" ? clearTimeout : void 0
  , Cf = typeof Promise == "function" ? Promise : void 0
  , Nb = typeof queueMicrotask == "function" ? queueMicrotask : typeof Cf < "u" ? function(e) {
    return Cf.resolve(null).then(e).catch(zb)
}
: bu;
function zb(e) {
    setTimeout(function() {
        throw e
    })
}
function hl(e, t) {
    var r = t
      , o = 0;
    do {
        var n = r.nextSibling;
        if (e.removeChild(r),
        n && n.nodeType === 8)
            if (r = n.data,
            r === "/$") {
                if (o === 0) {
                    e.removeChild(n),
                    Jn(t);
                    return
                }
                o--
            } else
                r !== "$" && r !== "$?" && r !== "$!" || o++;
        r = n
    } while (r);
    Jn(t)
}
function Cr(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function Tf(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var r = e.data;
            if (r === "$" || r === "$!" || r === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                r === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var cn = Math.random().toString(36).slice(2)
  , Ht = "__reactFiber$" + cn
  , ri = "__reactProps$" + cn
  , ir = "__reactContainer$" + cn
  , wu = "__reactEvents$" + cn
  , Fb = "__reactListeners$" + cn
  , Rb = "__reactHandles$" + cn;
function oo(e) {
    var t = e[Ht];
    if (t)
        return t;
    for (var r = e.parentNode; r; ) {
        if (t = r[ir] || r[Ht]) {
            if (r = t.alternate,
            t.child !== null || r !== null && r.child !== null)
                for (e = Tf(e); e !== null; ) {
                    if (r = e[Ht])
                        return r;
                    e = Tf(e)
                }
            return t
        }
        e = r,
        r = e.parentNode
    }
    return null
}
function xi(e) {
    return e = e[Ht] || e[ir],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function Ro(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(N(33))
}
function hs(e) {
    return e[ri] || null
}
var ku = []
  , Do = -1;
function Hr(e) {
    return {
        current: e
    }
}
function ie(e) {
    0 > Do || (e.current = ku[Do],
    ku[Do] = null,
    Do--)
}
function re(e, t) {
    Do++,
    ku[Do] = e.current,
    e.current = t
}
var Ir = {}
  , Ae = Hr(Ir)
  , Qe = Hr(!1)
  , fo = Ir;
function Xo(e, t) {
    var r = e.type.contextTypes;
    if (!r)
        return Ir;
    var o = e.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === t)
        return o.__reactInternalMemoizedMaskedChildContext;
    var n = {}, i;
    for (i in r)
        n[i] = t[i];
    return o && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = n),
    n
}
function Je(e) {
    return e = e.childContextTypes,
    e != null
}
function ja() {
    ie(Qe),
    ie(Ae)
}
function Nf(e, t, r) {
    if (Ae.current !== Ir)
        throw Error(N(168));
    re(Ae, t),
    re(Qe, r)
}
function Ag(e, t, r) {
    var o = e.stateNode;
    if (t = t.childContextTypes,
    typeof o.getChildContext != "function")
        return r;
    o = o.getChildContext();
    for (var n in o)
        if (!(n in t))
            throw Error(N(108, my(e) || "Unknown", n));
    return fe({}, r, o)
}
function Ia(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ir,
    fo = Ae.current,
    re(Ae, e),
    re(Qe, Qe.current),
    !0
}
function zf(e, t, r) {
    var o = e.stateNode;
    if (!o)
        throw Error(N(169));
    r ? (e = Ag(e, t, fo),
    o.__reactInternalMemoizedMergedChildContext = e,
    ie(Qe),
    ie(Ae),
    re(Ae, e)) : ie(Qe),
    re(Qe, r)
}
var Jt = null
  , gs = !1
  , gl = !1;
function Og(e) {
    Jt === null ? Jt = [e] : Jt.push(e)
}
function Db(e) {
    gs = !0,
    Og(e)
}
function Wr() {
    if (!gl && Jt !== null) {
        gl = !0;
        var e = 0
          , t = ee;
        try {
            var r = Jt;
            for (ee = 1; e < r.length; e++) {
                var o = r[e];
                do
                    o = o(!0);
                while (o !== null)
            }
            Jt = null,
            gs = !1
        } catch (n) {
            throw Jt !== null && (Jt = Jt.slice(e + 1)),
            ug(Nc, Wr),
            n
        } finally {
            ee = t,
            gl = !1
        }
    }
    return null
}
var jo = []
  , Io = 0
  , Aa = null
  , Oa = 0
  , pt = []
  , ht = 0
  , po = null
  , Zt = 1
  , er = "";
function Gr(e, t) {
    jo[Io++] = Oa,
    jo[Io++] = Aa,
    Aa = e,
    Oa = t
}
function Lg(e, t, r) {
    pt[ht++] = Zt,
    pt[ht++] = er,
    pt[ht++] = po,
    po = e;
    var o = Zt;
    e = er;
    var n = 32 - Nt(o) - 1;
    o &= ~(1 << n),
    r += 1;
    var i = 32 - Nt(t) + n;
    if (30 < i) {
        var a = n - n % 5;
        i = (o & (1 << a) - 1).toString(32),
        o >>= a,
        n -= a,
        Zt = 1 << 32 - Nt(t) + n | r << n | o,
        er = i + e
    } else
        Zt = 1 << i | r << n | o,
        er = e
}
function Lc(e) {
    e.return !== null && (Gr(e, 1),
    Lg(e, 1, 0))
}
function Mc(e) {
    for (; e === Aa; )
        Aa = jo[--Io],
        jo[Io] = null,
        Oa = jo[--Io],
        jo[Io] = null;
    for (; e === po; )
        po = pt[--ht],
        pt[ht] = null,
        er = pt[--ht],
        pt[ht] = null,
        Zt = pt[--ht],
        pt[ht] = null
}
var nt = null
  , rt = null
  , se = !1
  , Tt = null;
function Mg(e, t) {
    var r = mt(5, null, null, 0);
    r.elementType = "DELETED",
    r.stateNode = t,
    r.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [r],
    e.flags |= 16) : t.push(r)
}
function Ff(e, t) {
    switch (e.tag) {
    case 5:
        var r = e.type;
        return t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        nt = e,
        rt = Cr(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        nt = e,
        rt = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (r = po !== null ? {
            id: Zt,
            overflow: er
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: r,
            retryLane: 1073741824
        },
        r = mt(18, null, null, 0),
        r.stateNode = t,
        r.return = e,
        e.child = r,
        nt = e,
        rt = null,
        !0) : !1;
    default:
        return !1
    }
}
function xu(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Su(e) {
    if (se) {
        var t = rt;
        if (t) {
            var r = t;
            if (!Ff(e, t)) {
                if (xu(e))
                    throw Error(N(418));
                t = Cr(r.nextSibling);
                var o = nt;
                t && Ff(e, t) ? Mg(o, r) : (e.flags = e.flags & -4097 | 2,
                se = !1,
                nt = e)
            }
        } else {
            if (xu(e))
                throw Error(N(418));
            e.flags = e.flags & -4097 | 2,
            se = !1,
            nt = e
        }
    }
}
function Rf(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    nt = e
}
function $i(e) {
    if (e !== nt)
        return !1;
    if (!se)
        return Rf(e),
        se = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !yu(e.type, e.memoizedProps)),
    t && (t = rt)) {
        if (xu(e))
            throw qg(),
            Error(N(418));
        for (; t; )
            Mg(e, t),
            t = Cr(t.nextSibling)
    }
    if (Rf(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(N(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var r = e.data;
                    if (r === "/$") {
                        if (t === 0) {
                            rt = Cr(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        r !== "$" && r !== "$!" && r !== "$?" || t++
                }
                e = e.nextSibling
            }
            rt = null
        }
    } else
        rt = nt ? Cr(e.stateNode.nextSibling) : null;
    return !0
}
function qg() {
    for (var e = rt; e; )
        e = Cr(e.nextSibling)
}
function Qo() {
    rt = nt = null,
    se = !1
}
function qc(e) {
    Tt === null ? Tt = [e] : Tt.push(e)
}
var jb = dr.ReactCurrentBatchConfig;
function Pt(e, t) {
    if (e && e.defaultProps) {
        t = fe({}, t),
        e = e.defaultProps;
        for (var r in e)
            t[r] === void 0 && (t[r] = e[r]);
        return t
    }
    return t
}
var La = Hr(null)
  , Ma = null
  , Ao = null
  , Hc = null;
function Wc() {
    Hc = Ao = Ma = null
}
function $c(e) {
    var t = La.current;
    ie(La),
    e._currentValue = t
}
function _u(e, t, r) {
    for (; e !== null; ) {
        var o = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        o !== null && (o.childLanes |= t)) : o !== null && (o.childLanes & t) !== t && (o.childLanes |= t),
        e === r)
            break;
        e = e.return
    }
}
function Uo(e, t) {
    Ma = e,
    Hc = Ao = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (Xe = !0),
    e.firstContext = null)
}
function kt(e) {
    var t = e._currentValue;
    if (Hc !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        Ao === null) {
            if (Ma === null)
                throw Error(N(308));
            Ao = e,
            Ma.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            Ao = Ao.next = e;
    return t
}
var no = null;
function Uc(e) {
    no === null ? no = [e] : no.push(e)
}
function Hg(e, t, r, o) {
    var n = t.interleaved;
    return n === null ? (r.next = r,
    Uc(t)) : (r.next = n.next,
    n.next = r),
    t.interleaved = r,
    ar(e, o)
}
function ar(e, t) {
    e.lanes |= t;
    var r = e.alternate;
    for (r !== null && (r.lanes |= t),
    r = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        r = e.alternate,
        r !== null && (r.childLanes |= t),
        r = e,
        e = e.return;
    return r.tag === 3 ? r.stateNode : null
}
var br = !1;
function Vc(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function Wg(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function tr(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function Tr(e, t, r) {
    var o = e.updateQueue;
    if (o === null)
        return null;
    if (o = o.shared,
    J & 2) {
        var n = o.pending;
        return n === null ? t.next = t : (t.next = n.next,
        n.next = t),
        o.pending = t,
        ar(e, r)
    }
    return n = o.interleaved,
    n === null ? (t.next = t,
    Uc(o)) : (t.next = n.next,
    n.next = t),
    o.interleaved = t,
    ar(e, r)
}
function ua(e, t, r) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (r & 4194240) !== 0)) {
        var o = t.lanes;
        o &= e.pendingLanes,
        r |= o,
        t.lanes = r,
        zc(e, r)
    }
}
function Df(e, t) {
    var r = e.updateQueue
      , o = e.alternate;
    if (o !== null && (o = o.updateQueue,
    r === o)) {
        var n = null
          , i = null;
        if (r = r.firstBaseUpdate,
        r !== null) {
            do {
                var a = {
                    eventTime: r.eventTime,
                    lane: r.lane,
                    tag: r.tag,
                    payload: r.payload,
                    callback: r.callback,
                    next: null
                };
                i === null ? n = i = a : i = i.next = a,
                r = r.next
            } while (r !== null);
            i === null ? n = i = t : i = i.next = t
        } else
            n = i = t;
        r = {
            baseState: o.baseState,
            firstBaseUpdate: n,
            lastBaseUpdate: i,
            shared: o.shared,
            effects: o.effects
        },
        e.updateQueue = r;
        return
    }
    e = r.lastBaseUpdate,
    e === null ? r.firstBaseUpdate = t : e.next = t,
    r.lastBaseUpdate = t
}
function qa(e, t, r, o) {
    var n = e.updateQueue;
    br = !1;
    var i = n.firstBaseUpdate
      , a = n.lastBaseUpdate
      , s = n.shared.pending;
    if (s !== null) {
        n.shared.pending = null;
        var l = s
          , u = l.next;
        l.next = null,
        a === null ? i = u : a.next = u,
        a = l;
        var d = e.alternate;
        d !== null && (d = d.updateQueue,
        s = d.lastBaseUpdate,
        s !== a && (s === null ? d.firstBaseUpdate = u : s.next = u,
        d.lastBaseUpdate = l))
    }
    if (i !== null) {
        var c = n.baseState;
        a = 0,
        d = u = l = null,
        s = i;
        do {
            var f = s.lane
              , h = s.eventTime;
            if ((o & f) === f) {
                d !== null && (d = d.next = {
                    eventTime: h,
                    lane: 0,
                    tag: s.tag,
                    payload: s.payload,
                    callback: s.callback,
                    next: null
                });
                e: {
                    var p = e
                      , m = s;
                    switch (f = t,
                    h = r,
                    m.tag) {
                    case 1:
                        if (p = m.payload,
                        typeof p == "function") {
                            c = p.call(h, c, f);
                            break e
                        }
                        c = p;
                        break e;
                    case 3:
                        p.flags = p.flags & -65537 | 128;
                    case 0:
                        if (p = m.payload,
                        f = typeof p == "function" ? p.call(h, c, f) : p,
                        f == null)
                            break e;
                        c = fe({}, c, f);
                        break e;
                    case 2:
                        br = !0
                    }
                }
                s.callback !== null && s.lane !== 0 && (e.flags |= 64,
                f = n.effects,
                f === null ? n.effects = [s] : f.push(s))
            } else
                h = {
                    eventTime: h,
                    lane: f,
                    tag: s.tag,
                    payload: s.payload,
                    callback: s.callback,
                    next: null
                },
                d === null ? (u = d = h,
                l = c) : d = d.next = h,
                a |= f;
            if (s = s.next,
            s === null) {
                if (s = n.shared.pending,
                s === null)
                    break;
                f = s,
                s = f.next,
                f.next = null,
                n.lastBaseUpdate = f,
                n.shared.pending = null
            }
        } while (!0);
        if (d === null && (l = c),
        n.baseState = l,
        n.firstBaseUpdate = u,
        n.lastBaseUpdate = d,
        t = n.shared.interleaved,
        t !== null) {
            n = t;
            do
                a |= n.lane,
                n = n.next;
            while (n !== t)
        } else
            i === null && (n.shared.lanes = 0);
        go |= a,
        e.lanes = a,
        e.memoizedState = c
    }
}
function jf(e, t, r) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var o = e[t]
              , n = o.callback;
            if (n !== null) {
                if (o.callback = null,
                o = r,
                typeof n != "function")
                    throw Error(N(191, n));
                n.call(o)
            }
        }
}
var $g = new Hh.Component().refs;
function Bu(e, t, r, o) {
    t = e.memoizedState,
    r = r(o, t),
    r = r == null ? t : fe({}, t, r),
    e.memoizedState = r,
    e.lanes === 0 && (e.updateQueue.baseState = r)
}
var vs = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? bo(e) === e : !1
    },
    enqueueSetState: function(e, t, r) {
        e = e._reactInternals;
        var o = We()
          , n = zr(e)
          , i = tr(o, n);
        i.payload = t,
        r != null && (i.callback = r),
        t = Tr(e, i, n),
        t !== null && (zt(t, e, n, o),
        ua(t, e, n))
    },
    enqueueReplaceState: function(e, t, r) {
        e = e._reactInternals;
        var o = We()
          , n = zr(e)
          , i = tr(o, n);
        i.tag = 1,
        i.payload = t,
        r != null && (i.callback = r),
        t = Tr(e, i, n),
        t !== null && (zt(t, e, n, o),
        ua(t, e, n))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var r = We()
          , o = zr(e)
          , n = tr(r, o);
        n.tag = 2,
        t != null && (n.callback = t),
        t = Tr(e, n, o),
        t !== null && (zt(t, e, o, r),
        ua(t, e, o))
    }
};
function If(e, t, r, o, n, i, a) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(o, i, a) : t.prototype && t.prototype.isPureReactComponent ? !Zn(r, o) || !Zn(n, i) : !0
}
function Ug(e, t, r) {
    var o = !1
      , n = Ir
      , i = t.contextType;
    return typeof i == "object" && i !== null ? i = kt(i) : (n = Je(t) ? fo : Ae.current,
    o = t.contextTypes,
    i = (o = o != null) ? Xo(e, n) : Ir),
    t = new t(r,i),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = vs,
    e.stateNode = t,
    t._reactInternals = e,
    o && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = n,
    e.__reactInternalMemoizedMaskedChildContext = i),
    t
}
function Af(e, t, r, o) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, o),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(r, o),
    t.state !== e && vs.enqueueReplaceState(t, t.state, null)
}
function Eu(e, t, r, o) {
    var n = e.stateNode;
    n.props = r,
    n.state = e.memoizedState,
    n.refs = $g,
    Vc(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? n.context = kt(i) : (i = Je(t) ? fo : Ae.current,
    n.context = Xo(e, i)),
    n.state = e.memoizedState,
    i = t.getDerivedStateFromProps,
    typeof i == "function" && (Bu(e, t, i, r),
    n.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (t = n.state,
    typeof n.componentWillMount == "function" && n.componentWillMount(),
    typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(),
    t !== n.state && vs.enqueueReplaceState(n, n.state, null),
    qa(e, r, n, o),
    n.state = e.memoizedState),
    typeof n.componentDidMount == "function" && (e.flags |= 4194308)
}
function Sn(e, t, r) {
    if (e = r.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (r._owner) {
            if (r = r._owner,
            r) {
                if (r.tag !== 1)
                    throw Error(N(309));
                var o = r.stateNode
            }
            if (!o)
                throw Error(N(147, e));
            var n = o
              , i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(a) {
                var s = n.refs;
                s === $g && (s = n.refs = {}),
                a === null ? delete s[i] : s[i] = a
            }
            ,
            t._stringRef = i,
            t)
        }
        if (typeof e != "string")
            throw Error(N(284));
        if (!r._owner)
            throw Error(N(290, e))
    }
    return e
}
function Ui(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(N(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function Of(e) {
    var t = e._init;
    return t(e._payload)
}
function Vg(e) {
    function t(v, g) {
        if (e) {
            var y = v.deletions;
            y === null ? (v.deletions = [g],
            v.flags |= 16) : y.push(g)
        }
    }
    function r(v, g) {
        if (!e)
            return null;
        for (; g !== null; )
            t(v, g),
            g = g.sibling;
        return null
    }
    function o(v, g) {
        for (v = new Map; g !== null; )
            g.key !== null ? v.set(g.key, g) : v.set(g.index, g),
            g = g.sibling;
        return v
    }
    function n(v, g) {
        return v = Fr(v, g),
        v.index = 0,
        v.sibling = null,
        v
    }
    function i(v, g, y) {
        return v.index = y,
        e ? (y = v.alternate,
        y !== null ? (y = y.index,
        y < g ? (v.flags |= 2,
        g) : y) : (v.flags |= 2,
        g)) : (v.flags |= 1048576,
        g)
    }
    function a(v) {
        return e && v.alternate === null && (v.flags |= 2),
        v
    }
    function s(v, g, y, x) {
        return g === null || g.tag !== 6 ? (g = xl(y, v.mode, x),
        g.return = v,
        g) : (g = n(g, y),
        g.return = v,
        g)
    }
    function l(v, g, y, x) {
        var S = y.type;
        return S === To ? d(v, g, y.props.children, x, y.key) : g !== null && (g.elementType === S || typeof S == "object" && S !== null && S.$$typeof === yr && Of(S) === g.type) ? (x = n(g, y.props),
        x.ref = Sn(v, g, y),
        x.return = v,
        x) : (x = ga(y.type, y.key, y.props, null, v.mode, x),
        x.ref = Sn(v, g, y),
        x.return = v,
        x)
    }
    function u(v, g, y, x) {
        return g === null || g.tag !== 4 || g.stateNode.containerInfo !== y.containerInfo || g.stateNode.implementation !== y.implementation ? (g = Sl(y, v.mode, x),
        g.return = v,
        g) : (g = n(g, y.children || []),
        g.return = v,
        g)
    }
    function d(v, g, y, x, S) {
        return g === null || g.tag !== 7 ? (g = lo(y, v.mode, x, S),
        g.return = v,
        g) : (g = n(g, y),
        g.return = v,
        g)
    }
    function c(v, g, y) {
        if (typeof g == "string" && g !== "" || typeof g == "number")
            return g = xl("" + g, v.mode, y),
            g.return = v,
            g;
        if (typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
            case Di:
                return y = ga(g.type, g.key, g.props, null, v.mode, y),
                y.ref = Sn(v, null, g),
                y.return = v,
                y;
            case Co:
                return g = Sl(g, v.mode, y),
                g.return = v,
                g;
            case yr:
                var x = g._init;
                return c(v, x(g._payload), y)
            }
            if (Cn(g) || yn(g))
                return g = lo(g, v.mode, y, null),
                g.return = v,
                g;
            Ui(v, g)
        }
        return null
    }
    function f(v, g, y, x) {
        var S = g !== null ? g.key : null;
        if (typeof y == "string" && y !== "" || typeof y == "number")
            return S !== null ? null : s(v, g, "" + y, x);
        if (typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
            case Di:
                return y.key === S ? l(v, g, y, x) : null;
            case Co:
                return y.key === S ? u(v, g, y, x) : null;
            case yr:
                return S = y._init,
                f(v, g, S(y._payload), x)
            }
            if (Cn(y) || yn(y))
                return S !== null ? null : d(v, g, y, x, null);
            Ui(v, y)
        }
        return null
    }
    function h(v, g, y, x, S) {
        if (typeof x == "string" && x !== "" || typeof x == "number")
            return v = v.get(y) || null,
            s(g, v, "" + x, S);
        if (typeof x == "object" && x !== null) {
            switch (x.$$typeof) {
            case Di:
                return v = v.get(x.key === null ? y : x.key) || null,
                l(g, v, x, S);
            case Co:
                return v = v.get(x.key === null ? y : x.key) || null,
                u(g, v, x, S);
            case yr:
                var _ = x._init;
                return h(v, g, y, _(x._payload), S)
            }
            if (Cn(x) || yn(x))
                return v = v.get(y) || null,
                d(g, v, x, S, null);
            Ui(g, x)
        }
        return null
    }
    function p(v, g, y, x) {
        for (var S = null, _ = null, k = g, E = g = 0, I = null; k !== null && E < y.length; E++) {
            k.index > E ? (I = k,
            k = null) : I = k.sibling;
            var F = f(v, k, y[E], x);
            if (F === null) {
                k === null && (k = I);
                break
            }
            e && k && F.alternate === null && t(v, k),
            g = i(F, g, E),
            _ === null ? S = F : _.sibling = F,
            _ = F,
            k = I
        }
        if (E === y.length)
            return r(v, k),
            se && Gr(v, E),
            S;
        if (k === null) {
            for (; E < y.length; E++)
                k = c(v, y[E], x),
                k !== null && (g = i(k, g, E),
                _ === null ? S = k : _.sibling = k,
                _ = k);
            return se && Gr(v, E),
            S
        }
        for (k = o(v, k); E < y.length; E++)
            I = h(k, v, E, y[E], x),
            I !== null && (e && I.alternate !== null && k.delete(I.key === null ? E : I.key),
            g = i(I, g, E),
            _ === null ? S = I : _.sibling = I,
            _ = I);
        return e && k.forEach(function(Y) {
            return t(v, Y)
        }),
        se && Gr(v, E),
        S
    }
    function m(v, g, y, x) {
        var S = yn(y);
        if (typeof S != "function")
            throw Error(N(150));
        if (y = S.call(y),
        y == null)
            throw Error(N(151));
        for (var _ = S = null, k = g, E = g = 0, I = null, F = y.next(); k !== null && !F.done; E++,
        F = y.next()) {
            k.index > E ? (I = k,
            k = null) : I = k.sibling;
            var Y = f(v, k, F.value, x);
            if (Y === null) {
                k === null && (k = I);
                break
            }
            e && k && Y.alternate === null && t(v, k),
            g = i(Y, g, E),
            _ === null ? S = Y : _.sibling = Y,
            _ = Y,
            k = I
        }
        if (F.done)
            return r(v, k),
            se && Gr(v, E),
            S;
        if (k === null) {
            for (; !F.done; E++,
            F = y.next())
                F = c(v, F.value, x),
                F !== null && (g = i(F, g, E),
                _ === null ? S = F : _.sibling = F,
                _ = F);
            return se && Gr(v, E),
            S
        }
        for (k = o(v, k); !F.done; E++,
        F = y.next())
            F = h(k, v, E, F.value, x),
            F !== null && (e && F.alternate !== null && k.delete(F.key === null ? E : F.key),
            g = i(F, g, E),
            _ === null ? S = F : _.sibling = F,
            _ = F);
        return e && k.forEach(function(R) {
            return t(v, R)
        }),
        se && Gr(v, E),
        S
    }
    function w(v, g, y, x) {
        if (typeof y == "object" && y !== null && y.type === To && y.key === null && (y = y.props.children),
        typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
            case Di:
                e: {
                    for (var S = y.key, _ = g; _ !== null; ) {
                        if (_.key === S) {
                            if (S = y.type,
                            S === To) {
                                if (_.tag === 7) {
                                    r(v, _.sibling),
                                    g = n(_, y.props.children),
                                    g.return = v,
                                    v = g;
                                    break e
                                }
                            } else if (_.elementType === S || typeof S == "object" && S !== null && S.$$typeof === yr && Of(S) === _.type) {
                                r(v, _.sibling),
                                g = n(_, y.props),
                                g.ref = Sn(v, _, y),
                                g.return = v,
                                v = g;
                                break e
                            }
                            r(v, _);
                            break
                        } else
                            t(v, _);
                        _ = _.sibling
                    }
                    y.type === To ? (g = lo(y.props.children, v.mode, x, y.key),
                    g.return = v,
                    v = g) : (x = ga(y.type, y.key, y.props, null, v.mode, x),
                    x.ref = Sn(v, g, y),
                    x.return = v,
                    v = x)
                }
                return a(v);
            case Co:
                e: {
                    for (_ = y.key; g !== null; ) {
                        if (g.key === _)
                            if (g.tag === 4 && g.stateNode.containerInfo === y.containerInfo && g.stateNode.implementation === y.implementation) {
                                r(v, g.sibling),
                                g = n(g, y.children || []),
                                g.return = v,
                                v = g;
                                break e
                            } else {
                                r(v, g);
                                break
                            }
                        else
                            t(v, g);
                        g = g.sibling
                    }
                    g = Sl(y, v.mode, x),
                    g.return = v,
                    v = g
                }
                return a(v);
            case yr:
                return _ = y._init,
                w(v, g, _(y._payload), x)
            }
            if (Cn(y))
                return p(v, g, y, x);
            if (yn(y))
                return m(v, g, y, x);
            Ui(v, y)
        }
        return typeof y == "string" && y !== "" || typeof y == "number" ? (y = "" + y,
        g !== null && g.tag === 6 ? (r(v, g.sibling),
        g = n(g, y),
        g.return = v,
        v = g) : (r(v, g),
        g = xl(y, v.mode, x),
        g.return = v,
        v = g),
        a(v)) : r(v, g)
    }
    return w
}
var Jo = Vg(!0)
  , Gg = Vg(!1)
  , Si = {}
  , Ut = Hr(Si)
  , oi = Hr(Si)
  , ni = Hr(Si);
function io(e) {
    if (e === Si)
        throw Error(N(174));
    return e
}
function Gc(e, t) {
    switch (re(ni, t),
    re(oi, e),
    re(Ut, Si),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : nu(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = nu(t, e)
    }
    ie(Ut),
    re(Ut, t)
}
function Yo() {
    ie(Ut),
    ie(oi),
    ie(ni)
}
function Kg(e) {
    io(ni.current);
    var t = io(Ut.current)
      , r = nu(t, e.type);
    t !== r && (re(oi, e),
    re(Ut, r))
}
function Kc(e) {
    oi.current === e && (ie(Ut),
    ie(oi))
}
var le = Hr(0);
function Ha(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var r = t.memoizedState;
            if (r !== null && (r = r.dehydrated,
            r === null || r.data === "$?" || r.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var vl = [];
function Xc() {
    for (var e = 0; e < vl.length; e++)
        vl[e]._workInProgressVersionPrimary = null;
    vl.length = 0
}
var ca = dr.ReactCurrentDispatcher
  , ml = dr.ReactCurrentBatchConfig
  , ho = 0
  , de = null
  , _e = null
  , Ee = null
  , Wa = !1
  , Ln = !1
  , ii = 0
  , Ib = 0;
function De() {
    throw Error(N(321))
}
function Qc(e, t) {
    if (t === null)
        return !1;
    for (var r = 0; r < t.length && r < e.length; r++)
        if (!Ft(e[r], t[r]))
            return !1;
    return !0
}
function Jc(e, t, r, o, n, i) {
    if (ho = i,
    de = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    ca.current = e === null || e.memoizedState === null ? Mb : qb,
    e = r(o, n),
    Ln) {
        i = 0;
        do {
            if (Ln = !1,
            ii = 0,
            25 <= i)
                throw Error(N(301));
            i += 1,
            Ee = _e = null,
            t.updateQueue = null,
            ca.current = Hb,
            e = r(o, n)
        } while (Ln)
    }
    if (ca.current = $a,
    t = _e !== null && _e.next !== null,
    ho = 0,
    Ee = _e = de = null,
    Wa = !1,
    t)
        throw Error(N(300));
    return e
}
function Yc() {
    var e = ii !== 0;
    return ii = 0,
    e
}
function Ot() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Ee === null ? de.memoizedState = Ee = e : Ee = Ee.next = e,
    Ee
}
function xt() {
    if (_e === null) {
        var e = de.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = _e.next;
    var t = Ee === null ? de.memoizedState : Ee.next;
    if (t !== null)
        Ee = t,
        _e = e;
    else {
        if (e === null)
            throw Error(N(310));
        _e = e,
        e = {
            memoizedState: _e.memoizedState,
            baseState: _e.baseState,
            baseQueue: _e.baseQueue,
            queue: _e.queue,
            next: null
        },
        Ee === null ? de.memoizedState = Ee = e : Ee = Ee.next = e
    }
    return Ee
}
function ai(e, t) {
    return typeof t == "function" ? t(e) : t
}
function yl(e) {
    var t = xt()
      , r = t.queue;
    if (r === null)
        throw Error(N(311));
    r.lastRenderedReducer = e;
    var o = _e
      , n = o.baseQueue
      , i = r.pending;
    if (i !== null) {
        if (n !== null) {
            var a = n.next;
            n.next = i.next,
            i.next = a
        }
        o.baseQueue = n = i,
        r.pending = null
    }
    if (n !== null) {
        i = n.next,
        o = o.baseState;
        var s = a = null
          , l = null
          , u = i;
        do {
            var d = u.lane;
            if ((ho & d) === d)
                l !== null && (l = l.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                o = u.hasEagerState ? u.eagerState : e(o, u.action);
            else {
                var c = {
                    lane: d,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                l === null ? (s = l = c,
                a = o) : l = l.next = c,
                de.lanes |= d,
                go |= d
            }
            u = u.next
        } while (u !== null && u !== i);
        l === null ? a = o : l.next = s,
        Ft(o, t.memoizedState) || (Xe = !0),
        t.memoizedState = o,
        t.baseState = a,
        t.baseQueue = l,
        r.lastRenderedState = o
    }
    if (e = r.interleaved,
    e !== null) {
        n = e;
        do
            i = n.lane,
            de.lanes |= i,
            go |= i,
            n = n.next;
        while (n !== e)
    } else
        n === null && (r.lanes = 0);
    return [t.memoizedState, r.dispatch]
}
function bl(e) {
    var t = xt()
      , r = t.queue;
    if (r === null)
        throw Error(N(311));
    r.lastRenderedReducer = e;
    var o = r.dispatch
      , n = r.pending
      , i = t.memoizedState;
    if (n !== null) {
        r.pending = null;
        var a = n = n.next;
        do
            i = e(i, a.action),
            a = a.next;
        while (a !== n);
        Ft(i, t.memoizedState) || (Xe = !0),
        t.memoizedState = i,
        t.baseQueue === null && (t.baseState = i),
        r.lastRenderedState = i
    }
    return [i, o]
}
function Xg() {}
function Qg(e, t) {
    var r = de
      , o = xt()
      , n = t()
      , i = !Ft(o.memoizedState, n);
    if (i && (o.memoizedState = n,
    Xe = !0),
    o = o.queue,
    Zc(Zg.bind(null, r, o, e), [e]),
    o.getSnapshot !== t || i || Ee !== null && Ee.memoizedState.tag & 1) {
        if (r.flags |= 2048,
        si(9, Yg.bind(null, r, o, n, t), void 0, null),
        Pe === null)
            throw Error(N(349));
        ho & 30 || Jg(r, t, n)
    }
    return n
}
function Jg(e, t, r) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: r
    },
    t = de.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    de.updateQueue = t,
    t.stores = [e]) : (r = t.stores,
    r === null ? t.stores = [e] : r.push(e))
}
function Yg(e, t, r, o) {
    t.value = r,
    t.getSnapshot = o,
    ev(t) && tv(e)
}
function Zg(e, t, r) {
    return r(function() {
        ev(t) && tv(e)
    })
}
function ev(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var r = t();
        return !Ft(e, r)
    } catch {
        return !0
    }
}
function tv(e) {
    var t = ar(e, 1);
    t !== null && zt(t, e, 1, -1)
}
function Lf(e) {
    var t = Ot();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ai,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = Lb.bind(null, de, e),
    [t.memoizedState, e]
}
function si(e, t, r, o) {
    return e = {
        tag: e,
        create: t,
        destroy: r,
        deps: o,
        next: null
    },
    t = de.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    de.updateQueue = t,
    t.lastEffect = e.next = e) : (r = t.lastEffect,
    r === null ? t.lastEffect = e.next = e : (o = r.next,
    r.next = e,
    e.next = o,
    t.lastEffect = e)),
    e
}
function rv() {
    return xt().memoizedState
}
function da(e, t, r, o) {
    var n = Ot();
    de.flags |= e,
    n.memoizedState = si(1 | t, r, void 0, o === void 0 ? null : o)
}
function ms(e, t, r, o) {
    var n = xt();
    o = o === void 0 ? null : o;
    var i = void 0;
    if (_e !== null) {
        var a = _e.memoizedState;
        if (i = a.destroy,
        o !== null && Qc(o, a.deps)) {
            n.memoizedState = si(t, r, i, o);
            return
        }
    }
    de.flags |= e,
    n.memoizedState = si(1 | t, r, i, o)
}
function Mf(e, t) {
    return da(8390656, 8, e, t)
}
function Zc(e, t) {
    return ms(2048, 8, e, t)
}
function ov(e, t) {
    return ms(4, 2, e, t)
}
function nv(e, t) {
    return ms(4, 4, e, t)
}
function iv(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function av(e, t, r) {
    return r = r != null ? r.concat([e]) : null,
    ms(4, 4, iv.bind(null, t, e), r)
}
function ed() {}
function sv(e, t) {
    var r = xt();
    t = t === void 0 ? null : t;
    var o = r.memoizedState;
    return o !== null && t !== null && Qc(t, o[1]) ? o[0] : (r.memoizedState = [e, t],
    e)
}
function lv(e, t) {
    var r = xt();
    t = t === void 0 ? null : t;
    var o = r.memoizedState;
    return o !== null && t !== null && Qc(t, o[1]) ? o[0] : (e = e(),
    r.memoizedState = [e, t],
    e)
}
function uv(e, t, r) {
    return ho & 21 ? (Ft(r, t) || (r = fg(),
    de.lanes |= r,
    go |= r,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    Xe = !0),
    e.memoizedState = r)
}
function Ab(e, t) {
    var r = ee;
    ee = r !== 0 && 4 > r ? r : 4,
    e(!0);
    var o = ml.transition;
    ml.transition = {};
    try {
        e(!1),
        t()
    } finally {
        ee = r,
        ml.transition = o
    }
}
function cv() {
    return xt().memoizedState
}
function Ob(e, t, r) {
    var o = zr(e);
    if (r = {
        lane: o,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    dv(e))
        fv(t, r);
    else if (r = Hg(e, t, r, o),
    r !== null) {
        var n = We();
        zt(r, e, o, n),
        pv(r, t, o)
    }
}
function Lb(e, t, r) {
    var o = zr(e)
      , n = {
        lane: o,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (dv(e))
        fv(t, n);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer,
        i !== null))
            try {
                var a = t.lastRenderedState
                  , s = i(a, r);
                if (n.hasEagerState = !0,
                n.eagerState = s,
                Ft(s, a)) {
                    var l = t.interleaved;
                    l === null ? (n.next = n,
                    Uc(t)) : (n.next = l.next,
                    l.next = n),
                    t.interleaved = n;
                    return
                }
            } catch {} finally {}
        r = Hg(e, t, n, o),
        r !== null && (n = We(),
        zt(r, e, o, n),
        pv(r, t, o))
    }
}
function dv(e) {
    var t = e.alternate;
    return e === de || t !== null && t === de
}
function fv(e, t) {
    Ln = Wa = !0;
    var r = e.pending;
    r === null ? t.next = t : (t.next = r.next,
    r.next = t),
    e.pending = t
}
function pv(e, t, r) {
    if (r & 4194240) {
        var o = t.lanes;
        o &= e.pendingLanes,
        r |= o,
        t.lanes = r,
        zc(e, r)
    }
}
var $a = {
    readContext: kt,
    useCallback: De,
    useContext: De,
    useEffect: De,
    useImperativeHandle: De,
    useInsertionEffect: De,
    useLayoutEffect: De,
    useMemo: De,
    useReducer: De,
    useRef: De,
    useState: De,
    useDebugValue: De,
    useDeferredValue: De,
    useTransition: De,
    useMutableSource: De,
    useSyncExternalStore: De,
    useId: De,
    unstable_isNewReconciler: !1
}
  , Mb = {
    readContext: kt,
    useCallback: function(e, t) {
        return Ot().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: kt,
    useEffect: Mf,
    useImperativeHandle: function(e, t, r) {
        return r = r != null ? r.concat([e]) : null,
        da(4194308, 4, iv.bind(null, t, e), r)
    },
    useLayoutEffect: function(e, t) {
        return da(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return da(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var r = Ot();
        return t = t === void 0 ? null : t,
        e = e(),
        r.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, r) {
        var o = Ot();
        return t = r !== void 0 ? r(t) : t,
        o.memoizedState = o.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        o.queue = e,
        e = e.dispatch = Ob.bind(null, de, e),
        [o.memoizedState, e]
    },
    useRef: function(e) {
        var t = Ot();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: Lf,
    useDebugValue: ed,
    useDeferredValue: function(e) {
        return Ot().memoizedState = e
    },
    useTransition: function() {
        var e = Lf(!1)
          , t = e[0];
        return e = Ab.bind(null, e[1]),
        Ot().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, r) {
        var o = de
          , n = Ot();
        if (se) {
            if (r === void 0)
                throw Error(N(407));
            r = r()
        } else {
            if (r = t(),
            Pe === null)
                throw Error(N(349));
            ho & 30 || Jg(o, t, r)
        }
        n.memoizedState = r;
        var i = {
            value: r,
            getSnapshot: t
        };
        return n.queue = i,
        Mf(Zg.bind(null, o, i, e), [e]),
        o.flags |= 2048,
        si(9, Yg.bind(null, o, i, r, t), void 0, null),
        r
    },
    useId: function() {
        var e = Ot()
          , t = Pe.identifierPrefix;
        if (se) {
            var r = er
              , o = Zt;
            r = (o & ~(1 << 32 - Nt(o) - 1)).toString(32) + r,
            t = ":" + t + "R" + r,
            r = ii++,
            0 < r && (t += "H" + r.toString(32)),
            t += ":"
        } else
            r = Ib++,
            t = ":" + t + "r" + r.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , qb = {
    readContext: kt,
    useCallback: sv,
    useContext: kt,
    useEffect: Zc,
    useImperativeHandle: av,
    useInsertionEffect: ov,
    useLayoutEffect: nv,
    useMemo: lv,
    useReducer: yl,
    useRef: rv,
    useState: function() {
        return yl(ai)
    },
    useDebugValue: ed,
    useDeferredValue: function(e) {
        var t = xt();
        return uv(t, _e.memoizedState, e)
    },
    useTransition: function() {
        var e = yl(ai)[0]
          , t = xt().memoizedState;
        return [e, t]
    },
    useMutableSource: Xg,
    useSyncExternalStore: Qg,
    useId: cv,
    unstable_isNewReconciler: !1
}
  , Hb = {
    readContext: kt,
    useCallback: sv,
    useContext: kt,
    useEffect: Zc,
    useImperativeHandle: av,
    useInsertionEffect: ov,
    useLayoutEffect: nv,
    useMemo: lv,
    useReducer: bl,
    useRef: rv,
    useState: function() {
        return bl(ai)
    },
    useDebugValue: ed,
    useDeferredValue: function(e) {
        var t = xt();
        return _e === null ? t.memoizedState = e : uv(t, _e.memoizedState, e)
    },
    useTransition: function() {
        var e = bl(ai)[0]
          , t = xt().memoizedState;
        return [e, t]
    },
    useMutableSource: Xg,
    useSyncExternalStore: Qg,
    useId: cv,
    unstable_isNewReconciler: !1
};
function Zo(e, t) {
    try {
        var r = ""
          , o = t;
        do
            r += vy(o),
            o = o.return;
        while (o);
        var n = r
    } catch (i) {
        n = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: e,
        source: t,
        stack: n,
        digest: null
    }
}
function wl(e, t, r) {
    return {
        value: e,
        source: null,
        stack: r ?? null,
        digest: t ?? null
    }
}
function Pu(e, t) {
    try {
        console.error(t.value)
    } catch (r) {
        setTimeout(function() {
            throw r
        })
    }
}
var Wb = typeof WeakMap == "function" ? WeakMap : Map;
function hv(e, t, r) {
    r = tr(-1, r),
    r.tag = 3,
    r.payload = {
        element: null
    };
    var o = t.value;
    return r.callback = function() {
        Va || (Va = !0,
        Au = o),
        Pu(e, t)
    }
    ,
    r
}
function gv(e, t, r) {
    r = tr(-1, r),
    r.tag = 3;
    var o = e.type.getDerivedStateFromError;
    if (typeof o == "function") {
        var n = t.value;
        r.payload = function() {
            return o(n)
        }
        ,
        r.callback = function() {
            Pu(e, t)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (r.callback = function() {
        Pu(e, t),
        typeof o != "function" && (Nr === null ? Nr = new Set([this]) : Nr.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: a !== null ? a : ""
        })
    }
    ),
    r
}
function qf(e, t, r) {
    var o = e.pingCache;
    if (o === null) {
        o = e.pingCache = new Wb;
        var n = new Set;
        o.set(t, n)
    } else
        n = o.get(t),
        n === void 0 && (n = new Set,
        o.set(t, n));
    n.has(r) || (n.add(r),
    e = ow.bind(null, e, t, r),
    t.then(e, e))
}
function Hf(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function Wf(e, t, r, o, n) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = n,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    r.flags |= 131072,
    r.flags &= -52805,
    r.tag === 1 && (r.alternate === null ? r.tag = 17 : (t = tr(-1, 1),
    t.tag = 2,
    Tr(r, t, 1))),
    r.lanes |= 1),
    e)
}
var $b = dr.ReactCurrentOwner
  , Xe = !1;
function Me(e, t, r, o) {
    t.child = e === null ? Gg(t, null, r, o) : Jo(t, e.child, r, o)
}
function $f(e, t, r, o, n) {
    r = r.render;
    var i = t.ref;
    return Uo(t, n),
    o = Jc(e, t, r, o, i, n),
    r = Yc(),
    e !== null && !Xe ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~n,
    sr(e, t, n)) : (se && r && Lc(t),
    t.flags |= 1,
    Me(e, t, o, n),
    t.child)
}
function Uf(e, t, r, o, n) {
    if (e === null) {
        var i = r.type;
        return typeof i == "function" && !ld(i) && i.defaultProps === void 0 && r.compare === null && r.defaultProps === void 0 ? (t.tag = 15,
        t.type = i,
        vv(e, t, i, o, n)) : (e = ga(r.type, null, o, t, t.mode, n),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (i = e.child,
    !(e.lanes & n)) {
        var a = i.memoizedProps;
        if (r = r.compare,
        r = r !== null ? r : Zn,
        r(a, o) && e.ref === t.ref)
            return sr(e, t, n)
    }
    return t.flags |= 1,
    e = Fr(i, o),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function vv(e, t, r, o, n) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (Zn(i, o) && e.ref === t.ref)
            if (Xe = !1,
            t.pendingProps = o = i,
            (e.lanes & n) !== 0)
                e.flags & 131072 && (Xe = !0);
            else
                return t.lanes = e.lanes,
                sr(e, t, n)
    }
    return Cu(e, t, r, o, n)
}
function mv(e, t, r) {
    var o = t.pendingProps
      , n = o.children
      , i = e !== null ? e.memoizedState : null;
    if (o.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            re(Lo, tt),
            tt |= r;
        else {
            if (!(r & 1073741824))
                return e = i !== null ? i.baseLanes | r : r,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                re(Lo, tt),
                tt |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            o = i !== null ? i.baseLanes : r,
            re(Lo, tt),
            tt |= o
        }
    else
        i !== null ? (o = i.baseLanes | r,
        t.memoizedState = null) : o = r,
        re(Lo, tt),
        tt |= o;
    return Me(e, t, n, r),
    t.child
}
function yv(e, t) {
    var r = t.ref;
    (e === null && r !== null || e !== null && e.ref !== r) && (t.flags |= 512,
    t.flags |= 2097152)
}
function Cu(e, t, r, o, n) {
    var i = Je(r) ? fo : Ae.current;
    return i = Xo(t, i),
    Uo(t, n),
    r = Jc(e, t, r, o, i, n),
    o = Yc(),
    e !== null && !Xe ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~n,
    sr(e, t, n)) : (se && o && Lc(t),
    t.flags |= 1,
    Me(e, t, r, n),
    t.child)
}
function Vf(e, t, r, o, n) {
    if (Je(r)) {
        var i = !0;
        Ia(t)
    } else
        i = !1;
    if (Uo(t, n),
    t.stateNode === null)
        fa(e, t),
        Ug(t, r, o),
        Eu(t, r, o, n),
        o = !0;
    else if (e === null) {
        var a = t.stateNode
          , s = t.memoizedProps;
        a.props = s;
        var l = a.context
          , u = r.contextType;
        typeof u == "object" && u !== null ? u = kt(u) : (u = Je(r) ? fo : Ae.current,
        u = Xo(t, u));
        var d = r.getDerivedStateFromProps
          , c = typeof d == "function" || typeof a.getSnapshotBeforeUpdate == "function";
        c || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== o || l !== u) && Af(t, a, o, u),
        br = !1;
        var f = t.memoizedState;
        a.state = f,
        qa(t, o, a, n),
        l = t.memoizedState,
        s !== o || f !== l || Qe.current || br ? (typeof d == "function" && (Bu(t, r, d, o),
        l = t.memoizedState),
        (s = br || If(t, r, s, o, f, l, u)) ? (c || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(),
        typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()),
        typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = o,
        t.memoizedState = l),
        a.props = o,
        a.state = l,
        a.context = u,
        o = s) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
        o = !1)
    } else {
        a = t.stateNode,
        Wg(e, t),
        s = t.memoizedProps,
        u = t.type === t.elementType ? s : Pt(t.type, s),
        a.props = u,
        c = t.pendingProps,
        f = a.context,
        l = r.contextType,
        typeof l == "object" && l !== null ? l = kt(l) : (l = Je(r) ? fo : Ae.current,
        l = Xo(t, l));
        var h = r.getDerivedStateFromProps;
        (d = typeof h == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== c || f !== l) && Af(t, a, o, l),
        br = !1,
        f = t.memoizedState,
        a.state = f,
        qa(t, o, a, n);
        var p = t.memoizedState;
        s !== c || f !== p || Qe.current || br ? (typeof h == "function" && (Bu(t, r, h, o),
        p = t.memoizedState),
        (u = br || If(t, r, u, o, f, p, l) || !1) ? (d || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(o, p, l),
        typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(o, p, l)),
        typeof a.componentDidUpdate == "function" && (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = o,
        t.memoizedState = p),
        a.props = o,
        a.state = p,
        a.context = l,
        o = u) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
        o = !1)
    }
    return Tu(e, t, r, o, i, n)
}
function Tu(e, t, r, o, n, i) {
    yv(e, t);
    var a = (t.flags & 128) !== 0;
    if (!o && !a)
        return n && zf(t, r, !1),
        sr(e, t, i);
    o = t.stateNode,
    $b.current = t;
    var s = a && typeof r.getDerivedStateFromError != "function" ? null : o.render();
    return t.flags |= 1,
    e !== null && a ? (t.child = Jo(t, e.child, null, i),
    t.child = Jo(t, null, s, i)) : Me(e, t, s, i),
    t.memoizedState = o.state,
    n && zf(t, r, !0),
    t.child
}
function bv(e) {
    var t = e.stateNode;
    t.pendingContext ? Nf(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Nf(e, t.context, !1),
    Gc(e, t.containerInfo)
}
function Gf(e, t, r, o, n) {
    return Qo(),
    qc(n),
    t.flags |= 256,
    Me(e, t, r, o),
    t.child
}
var Nu = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function zu(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function wv(e, t, r) {
    var o = t.pendingProps, n = le.current, i = !1, a = (t.flags & 128) !== 0, s;
    if ((s = a) || (s = e !== null && e.memoizedState === null ? !1 : (n & 2) !== 0),
    s ? (i = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (n |= 1),
    re(le, n & 1),
    e === null)
        return Su(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (a = o.children,
        e = o.fallback,
        i ? (o = t.mode,
        i = t.child,
        a = {
            mode: "hidden",
            children: a
        },
        !(o & 1) && i !== null ? (i.childLanes = 0,
        i.pendingProps = a) : i = ws(a, o, 0, null),
        e = lo(e, o, r, null),
        i.return = t,
        e.return = t,
        i.sibling = e,
        t.child = i,
        t.child.memoizedState = zu(r),
        t.memoizedState = Nu,
        e) : td(t, a));
    if (n = e.memoizedState,
    n !== null && (s = n.dehydrated,
    s !== null))
        return Ub(e, t, a, o, s, n, r);
    if (i) {
        i = o.fallback,
        a = t.mode,
        n = e.child,
        s = n.sibling;
        var l = {
            mode: "hidden",
            children: o.children
        };
        return !(a & 1) && t.child !== n ? (o = t.child,
        o.childLanes = 0,
        o.pendingProps = l,
        t.deletions = null) : (o = Fr(n, l),
        o.subtreeFlags = n.subtreeFlags & 14680064),
        s !== null ? i = Fr(s, i) : (i = lo(i, a, r, null),
        i.flags |= 2),
        i.return = t,
        o.return = t,
        o.sibling = i,
        t.child = o,
        o = i,
        i = t.child,
        a = e.child.memoizedState,
        a = a === null ? zu(r) : {
            baseLanes: a.baseLanes | r,
            cachePool: null,
            transitions: a.transitions
        },
        i.memoizedState = a,
        i.childLanes = e.childLanes & ~r,
        t.memoizedState = Nu,
        o
    }
    return i = e.child,
    e = i.sibling,
    o = Fr(i, {
        mode: "visible",
        children: o.children
    }),
    !(t.mode & 1) && (o.lanes = r),
    o.return = t,
    o.sibling = null,
    e !== null && (r = t.deletions,
    r === null ? (t.deletions = [e],
    t.flags |= 16) : r.push(e)),
    t.child = o,
    t.memoizedState = null,
    o
}
function td(e, t) {
    return t = ws({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function Vi(e, t, r, o) {
    return o !== null && qc(o),
    Jo(t, e.child, null, r),
    e = td(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function Ub(e, t, r, o, n, i, a) {
    if (r)
        return t.flags & 256 ? (t.flags &= -257,
        o = wl(Error(N(422))),
        Vi(e, t, a, o)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (i = o.fallback,
        n = t.mode,
        o = ws({
            mode: "visible",
            children: o.children
        }, n, 0, null),
        i = lo(i, n, a, null),
        i.flags |= 2,
        o.return = t,
        i.return = t,
        o.sibling = i,
        t.child = o,
        t.mode & 1 && Jo(t, e.child, null, a),
        t.child.memoizedState = zu(a),
        t.memoizedState = Nu,
        i);
    if (!(t.mode & 1))
        return Vi(e, t, a, null);
    if (n.data === "$!") {
        if (o = n.nextSibling && n.nextSibling.dataset,
        o)
            var s = o.dgst;
        return o = s,
        i = Error(N(419)),
        o = wl(i, o, void 0),
        Vi(e, t, a, o)
    }
    if (s = (a & e.childLanes) !== 0,
    Xe || s) {
        if (o = Pe,
        o !== null) {
            switch (a & -a) {
            case 4:
                n = 2;
                break;
            case 16:
                n = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                n = 32;
                break;
            case 536870912:
                n = 268435456;
                break;
            default:
                n = 0
            }
            n = n & (o.suspendedLanes | a) ? 0 : n,
            n !== 0 && n !== i.retryLane && (i.retryLane = n,
            ar(e, n),
            zt(o, e, n, -1))
        }
        return sd(),
        o = wl(Error(N(421))),
        Vi(e, t, a, o)
    }
    return n.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = nw.bind(null, e),
    n._reactRetry = t,
    null) : (e = i.treeContext,
    rt = Cr(n.nextSibling),
    nt = t,
    se = !0,
    Tt = null,
    e !== null && (pt[ht++] = Zt,
    pt[ht++] = er,
    pt[ht++] = po,
    Zt = e.id,
    er = e.overflow,
    po = t),
    t = td(t, o.children),
    t.flags |= 4096,
    t)
}
function Kf(e, t, r) {
    e.lanes |= t;
    var o = e.alternate;
    o !== null && (o.lanes |= t),
    _u(e.return, t, r)
}
function kl(e, t, r, o, n) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: o,
        tail: r,
        tailMode: n
    } : (i.isBackwards = t,
    i.rendering = null,
    i.renderingStartTime = 0,
    i.last = o,
    i.tail = r,
    i.tailMode = n)
}
function kv(e, t, r) {
    var o = t.pendingProps
      , n = o.revealOrder
      , i = o.tail;
    if (Me(e, t, o.children, r),
    o = le.current,
    o & 2)
        o = o & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && Kf(e, r, t);
                else if (e.tag === 19)
                    Kf(e, r, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        o &= 1
    }
    if (re(le, o),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (n) {
        case "forwards":
            for (r = t.child,
            n = null; r !== null; )
                e = r.alternate,
                e !== null && Ha(e) === null && (n = r),
                r = r.sibling;
            r = n,
            r === null ? (n = t.child,
            t.child = null) : (n = r.sibling,
            r.sibling = null),
            kl(t, !1, n, r, i);
            break;
        case "backwards":
            for (r = null,
            n = t.child,
            t.child = null; n !== null; ) {
                if (e = n.alternate,
                e !== null && Ha(e) === null) {
                    t.child = n;
                    break
                }
                e = n.sibling,
                n.sibling = r,
                r = n,
                n = e
            }
            kl(t, !0, r, null, i);
            break;
        case "together":
            kl(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function fa(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function sr(e, t, r) {
    if (e !== null && (t.dependencies = e.dependencies),
    go |= t.lanes,
    !(r & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(N(153));
    if (t.child !== null) {
        for (e = t.child,
        r = Fr(e, e.pendingProps),
        t.child = r,
        r.return = t; e.sibling !== null; )
            e = e.sibling,
            r = r.sibling = Fr(e, e.pendingProps),
            r.return = t;
        r.sibling = null
    }
    return t.child
}
function Vb(e, t, r) {
    switch (t.tag) {
    case 3:
        bv(t),
        Qo();
        break;
    case 5:
        Kg(t);
        break;
    case 1:
        Je(t.type) && Ia(t);
        break;
    case 4:
        Gc(t, t.stateNode.containerInfo);
        break;
    case 10:
        var o = t.type._context
          , n = t.memoizedProps.value;
        re(La, o._currentValue),
        o._currentValue = n;
        break;
    case 13:
        if (o = t.memoizedState,
        o !== null)
            return o.dehydrated !== null ? (re(le, le.current & 1),
            t.flags |= 128,
            null) : r & t.child.childLanes ? wv(e, t, r) : (re(le, le.current & 1),
            e = sr(e, t, r),
            e !== null ? e.sibling : null);
        re(le, le.current & 1);
        break;
    case 19:
        if (o = (r & t.childLanes) !== 0,
        e.flags & 128) {
            if (o)
                return kv(e, t, r);
            t.flags |= 128
        }
        if (n = t.memoizedState,
        n !== null && (n.rendering = null,
        n.tail = null,
        n.lastEffect = null),
        re(le, le.current),
        o)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        mv(e, t, r)
    }
    return sr(e, t, r)
}
var xv, Fu, Sv, _v;
xv = function(e, t) {
    for (var r = t.child; r !== null; ) {
        if (r.tag === 5 || r.tag === 6)
            e.appendChild(r.stateNode);
        else if (r.tag !== 4 && r.child !== null) {
            r.child.return = r,
            r = r.child;
            continue
        }
        if (r === t)
            break;
        for (; r.sibling === null; ) {
            if (r.return === null || r.return === t)
                return;
            r = r.return
        }
        r.sibling.return = r.return,
        r = r.sibling
    }
}
;
Fu = function() {}
;
Sv = function(e, t, r, o) {
    var n = e.memoizedProps;
    if (n !== o) {
        e = t.stateNode,
        io(Ut.current);
        var i = null;
        switch (r) {
        case "input":
            n = eu(e, n),
            o = eu(e, o),
            i = [];
            break;
        case "select":
            n = fe({}, n, {
                value: void 0
            }),
            o = fe({}, o, {
                value: void 0
            }),
            i = [];
            break;
        case "textarea":
            n = ou(e, n),
            o = ou(e, o),
            i = [];
            break;
        default:
            typeof n.onClick != "function" && typeof o.onClick == "function" && (e.onclick = Da)
        }
        iu(r, o);
        var a;
        r = null;
        for (u in n)
            if (!o.hasOwnProperty(u) && n.hasOwnProperty(u) && n[u] != null)
                if (u === "style") {
                    var s = n[u];
                    for (a in s)
                        s.hasOwnProperty(a) && (r || (r = {}),
                        r[a] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Vn.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
        for (u in o) {
            var l = o[u];
            if (s = n != null ? n[u] : void 0,
            o.hasOwnProperty(u) && l !== s && (l != null || s != null))
                if (u === "style")
                    if (s) {
                        for (a in s)
                            !s.hasOwnProperty(a) || l && l.hasOwnProperty(a) || (r || (r = {}),
                            r[a] = "");
                        for (a in l)
                            l.hasOwnProperty(a) && s[a] !== l[a] && (r || (r = {}),
                            r[a] = l[a])
                    } else
                        r || (i || (i = []),
                        i.push(u, r)),
                        r = l;
                else
                    u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                    s = s ? s.__html : void 0,
                    l != null && s !== l && (i = i || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Vn.hasOwnProperty(u) ? (l != null && u === "onScroll" && ne("scroll", e),
                    i || s === l || (i = [])) : (i = i || []).push(u, l))
        }
        r && (i = i || []).push("style", r);
        var u = i;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
;
_v = function(e, t, r, o) {
    r !== o && (t.flags |= 4)
}
;
function _n(e, t) {
    if (!se)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var r = null; t !== null; )
                t.alternate !== null && (r = t),
                t = t.sibling;
            r === null ? e.tail = null : r.sibling = null;
            break;
        case "collapsed":
            r = e.tail;
            for (var o = null; r !== null; )
                r.alternate !== null && (o = r),
                r = r.sibling;
            o === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : o.sibling = null
        }
}
function je(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , r = 0
      , o = 0;
    if (t)
        for (var n = e.child; n !== null; )
            r |= n.lanes | n.childLanes,
            o |= n.subtreeFlags & 14680064,
            o |= n.flags & 14680064,
            n.return = e,
            n = n.sibling;
    else
        for (n = e.child; n !== null; )
            r |= n.lanes | n.childLanes,
            o |= n.subtreeFlags,
            o |= n.flags,
            n.return = e,
            n = n.sibling;
    return e.subtreeFlags |= o,
    e.childLanes = r,
    t
}
function Gb(e, t, r) {
    var o = t.pendingProps;
    switch (Mc(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return je(t),
        null;
    case 1:
        return Je(t.type) && ja(),
        je(t),
        null;
    case 3:
        return o = t.stateNode,
        Yo(),
        ie(Qe),
        ie(Ae),
        Xc(),
        o.pendingContext && (o.context = o.pendingContext,
        o.pendingContext = null),
        (e === null || e.child === null) && ($i(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        Tt !== null && (Mu(Tt),
        Tt = null))),
        Fu(e, t),
        je(t),
        null;
    case 5:
        Kc(t);
        var n = io(ni.current);
        if (r = t.type,
        e !== null && t.stateNode != null)
            Sv(e, t, r, o, n),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!o) {
                if (t.stateNode === null)
                    throw Error(N(166));
                return je(t),
                null
            }
            if (e = io(Ut.current),
            $i(t)) {
                o = t.stateNode,
                r = t.type;
                var i = t.memoizedProps;
                switch (o[Ht] = t,
                o[ri] = i,
                e = (t.mode & 1) !== 0,
                r) {
                case "dialog":
                    ne("cancel", o),
                    ne("close", o);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    ne("load", o);
                    break;
                case "video":
                case "audio":
                    for (n = 0; n < Nn.length; n++)
                        ne(Nn[n], o);
                    break;
                case "source":
                    ne("error", o);
                    break;
                case "img":
                case "image":
                case "link":
                    ne("error", o),
                    ne("load", o);
                    break;
                case "details":
                    ne("toggle", o);
                    break;
                case "input":
                    rf(o, i),
                    ne("invalid", o);
                    break;
                case "select":
                    o._wrapperState = {
                        wasMultiple: !!i.multiple
                    },
                    ne("invalid", o);
                    break;
                case "textarea":
                    nf(o, i),
                    ne("invalid", o)
                }
                iu(r, i),
                n = null;
                for (var a in i)
                    if (i.hasOwnProperty(a)) {
                        var s = i[a];
                        a === "children" ? typeof s == "string" ? o.textContent !== s && (i.suppressHydrationWarning !== !0 && Wi(o.textContent, s, e),
                        n = ["children", s]) : typeof s == "number" && o.textContent !== "" + s && (i.suppressHydrationWarning !== !0 && Wi(o.textContent, s, e),
                        n = ["children", "" + s]) : Vn.hasOwnProperty(a) && s != null && a === "onScroll" && ne("scroll", o)
                    }
                switch (r) {
                case "input":
                    ji(o),
                    of(o, i, !0);
                    break;
                case "textarea":
                    ji(o),
                    af(o);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof i.onClick == "function" && (o.onclick = Da)
                }
                o = n,
                t.updateQueue = o,
                o !== null && (t.flags |= 4)
            } else {
                a = n.nodeType === 9 ? n : n.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = Jh(r)),
                e === "http://www.w3.org/1999/xhtml" ? r === "script" ? (e = a.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof o.is == "string" ? e = a.createElement(r, {
                    is: o.is
                }) : (e = a.createElement(r),
                r === "select" && (a = e,
                o.multiple ? a.multiple = !0 : o.size && (a.size = o.size))) : e = a.createElementNS(e, r),
                e[Ht] = t,
                e[ri] = o,
                xv(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (a = au(r, o),
                    r) {
                    case "dialog":
                        ne("cancel", e),
                        ne("close", e),
                        n = o;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        ne("load", e),
                        n = o;
                        break;
                    case "video":
                    case "audio":
                        for (n = 0; n < Nn.length; n++)
                            ne(Nn[n], e);
                        n = o;
                        break;
                    case "source":
                        ne("error", e),
                        n = o;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        ne("error", e),
                        ne("load", e),
                        n = o;
                        break;
                    case "details":
                        ne("toggle", e),
                        n = o;
                        break;
                    case "input":
                        rf(e, o),
                        n = eu(e, o),
                        ne("invalid", e);
                        break;
                    case "option":
                        n = o;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!o.multiple
                        },
                        n = fe({}, o, {
                            value: void 0
                        }),
                        ne("invalid", e);
                        break;
                    case "textarea":
                        nf(e, o),
                        n = ou(e, o),
                        ne("invalid", e);
                        break;
                    default:
                        n = o
                    }
                    iu(r, n),
                    s = n;
                    for (i in s)
                        if (s.hasOwnProperty(i)) {
                            var l = s[i];
                            i === "style" ? eg(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                            l != null && Yh(e, l)) : i === "children" ? typeof l == "string" ? (r !== "textarea" || l !== "") && Gn(e, l) : typeof l == "number" && Gn(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Vn.hasOwnProperty(i) ? l != null && i === "onScroll" && ne("scroll", e) : l != null && Bc(e, i, l, a))
                        }
                    switch (r) {
                    case "input":
                        ji(e),
                        of(e, o, !1);
                        break;
                    case "textarea":
                        ji(e),
                        af(e);
                        break;
                    case "option":
                        o.value != null && e.setAttribute("value", "" + jr(o.value));
                        break;
                    case "select":
                        e.multiple = !!o.multiple,
                        i = o.value,
                        i != null ? qo(e, !!o.multiple, i, !1) : o.defaultValue != null && qo(e, !!o.multiple, o.defaultValue, !0);
                        break;
                    default:
                        typeof n.onClick == "function" && (e.onclick = Da)
                    }
                    switch (r) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        o = !!o.autoFocus;
                        break e;
                    case "img":
                        o = !0;
                        break e;
                    default:
                        o = !1
                    }
                }
                o && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return je(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            _v(e, t, e.memoizedProps, o);
        else {
            if (typeof o != "string" && t.stateNode === null)
                throw Error(N(166));
            if (r = io(ni.current),
            io(Ut.current),
            $i(t)) {
                if (o = t.stateNode,
                r = t.memoizedProps,
                o[Ht] = t,
                (i = o.nodeValue !== r) && (e = nt,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        Wi(o.nodeValue, r, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && Wi(o.nodeValue, r, (e.mode & 1) !== 0)
                    }
                i && (t.flags |= 4)
            } else
                o = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(o),
                o[Ht] = t,
                t.stateNode = o
        }
        return je(t),
        null;
    case 13:
        if (ie(le),
        o = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (se && rt !== null && t.mode & 1 && !(t.flags & 128))
                qg(),
                Qo(),
                t.flags |= 98560,
                i = !1;
            else if (i = $i(t),
            o !== null && o.dehydrated !== null) {
                if (e === null) {
                    if (!i)
                        throw Error(N(318));
                    if (i = t.memoizedState,
                    i = i !== null ? i.dehydrated : null,
                    !i)
                        throw Error(N(317));
                    i[Ht] = t
                } else
                    Qo(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                je(t),
                i = !1
            } else
                Tt !== null && (Mu(Tt),
                Tt = null),
                i = !0;
            if (!i)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = r,
        t) : (o = o !== null,
        o !== (e !== null && e.memoizedState !== null) && o && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || le.current & 1 ? Be === 0 && (Be = 3) : sd())),
        t.updateQueue !== null && (t.flags |= 4),
        je(t),
        null);
    case 4:
        return Yo(),
        Fu(e, t),
        e === null && ei(t.stateNode.containerInfo),
        je(t),
        null;
    case 10:
        return $c(t.type._context),
        je(t),
        null;
    case 17:
        return Je(t.type) && ja(),
        je(t),
        null;
    case 19:
        if (ie(le),
        i = t.memoizedState,
        i === null)
            return je(t),
            null;
        if (o = (t.flags & 128) !== 0,
        a = i.rendering,
        a === null)
            if (o)
                _n(i, !1);
            else {
                if (Be !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (a = Ha(e),
                        a !== null) {
                            for (t.flags |= 128,
                            _n(i, !1),
                            o = a.updateQueue,
                            o !== null && (t.updateQueue = o,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            o = r,
                            r = t.child; r !== null; )
                                i = r,
                                e = o,
                                i.flags &= 14680066,
                                a = i.alternate,
                                a === null ? (i.childLanes = 0,
                                i.lanes = e,
                                i.child = null,
                                i.subtreeFlags = 0,
                                i.memoizedProps = null,
                                i.memoizedState = null,
                                i.updateQueue = null,
                                i.dependencies = null,
                                i.stateNode = null) : (i.childLanes = a.childLanes,
                                i.lanes = a.lanes,
                                i.child = a.child,
                                i.subtreeFlags = 0,
                                i.deletions = null,
                                i.memoizedProps = a.memoizedProps,
                                i.memoizedState = a.memoizedState,
                                i.updateQueue = a.updateQueue,
                                i.type = a.type,
                                e = a.dependencies,
                                i.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                r = r.sibling;
                            return re(le, le.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                i.tail !== null && ye() > en && (t.flags |= 128,
                o = !0,
                _n(i, !1),
                t.lanes = 4194304)
            }
        else {
            if (!o)
                if (e = Ha(a),
                e !== null) {
                    if (t.flags |= 128,
                    o = !0,
                    r = e.updateQueue,
                    r !== null && (t.updateQueue = r,
                    t.flags |= 4),
                    _n(i, !0),
                    i.tail === null && i.tailMode === "hidden" && !a.alternate && !se)
                        return je(t),
                        null
                } else
                    2 * ye() - i.renderingStartTime > en && r !== 1073741824 && (t.flags |= 128,
                    o = !0,
                    _n(i, !1),
                    t.lanes = 4194304);
            i.isBackwards ? (a.sibling = t.child,
            t.child = a) : (r = i.last,
            r !== null ? r.sibling = a : t.child = a,
            i.last = a)
        }
        return i.tail !== null ? (t = i.tail,
        i.rendering = t,
        i.tail = t.sibling,
        i.renderingStartTime = ye(),
        t.sibling = null,
        r = le.current,
        re(le, o ? r & 1 | 2 : r & 1),
        t) : (je(t),
        null);
    case 22:
    case 23:
        return ad(),
        o = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== o && (t.flags |= 8192),
        o && t.mode & 1 ? tt & 1073741824 && (je(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : je(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(N(156, t.tag))
}
function Kb(e, t) {
    switch (Mc(t),
    t.tag) {
    case 1:
        return Je(t.type) && ja(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return Yo(),
        ie(Qe),
        ie(Ae),
        Xc(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return Kc(t),
        null;
    case 13:
        if (ie(le),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(N(340));
            Qo()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return ie(le),
        null;
    case 4:
        return Yo(),
        null;
    case 10:
        return $c(t.type._context),
        null;
    case 22:
    case 23:
        return ad(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var Gi = !1
  , Ie = !1
  , Xb = typeof WeakSet == "function" ? WeakSet : Set
  , A = null;
function Oo(e, t) {
    var r = e.ref;
    if (r !== null)
        if (typeof r == "function")
            try {
                r(null)
            } catch (o) {
                ve(e, t, o)
            }
        else
            r.current = null
}
function Ru(e, t, r) {
    try {
        r()
    } catch (o) {
        ve(e, t, o)
    }
}
var Xf = !1;
function Qb(e, t) {
    if (vu = za,
    e = Cg(),
    Oc(e)) {
        if ("selectionStart"in e)
            var r = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                r = (r = e.ownerDocument) && r.defaultView || window;
                var o = r.getSelection && r.getSelection();
                if (o && o.rangeCount !== 0) {
                    r = o.anchorNode;
                    var n = o.anchorOffset
                      , i = o.focusNode;
                    o = o.focusOffset;
                    try {
                        r.nodeType,
                        i.nodeType
                    } catch {
                        r = null;
                        break e
                    }
                    var a = 0
                      , s = -1
                      , l = -1
                      , u = 0
                      , d = 0
                      , c = e
                      , f = null;
                    t: for (; ; ) {
                        for (var h; c !== r || n !== 0 && c.nodeType !== 3 || (s = a + n),
                        c !== i || o !== 0 && c.nodeType !== 3 || (l = a + o),
                        c.nodeType === 3 && (a += c.nodeValue.length),
                        (h = c.firstChild) !== null; )
                            f = c,
                            c = h;
                        for (; ; ) {
                            if (c === e)
                                break t;
                            if (f === r && ++u === n && (s = a),
                            f === i && ++d === o && (l = a),
                            (h = c.nextSibling) !== null)
                                break;
                            c = f,
                            f = c.parentNode
                        }
                        c = h
                    }
                    r = s === -1 || l === -1 ? null : {
                        start: s,
                        end: l
                    }
                } else
                    r = null
            }
        r = r || {
            start: 0,
            end: 0
        }
    } else
        r = null;
    for (mu = {
        focusedElem: e,
        selectionRange: r
    },
    za = !1,
    A = t; A !== null; )
        if (t = A,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            A = e;
        else
            for (; A !== null; ) {
                t = A;
                try {
                    var p = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (p !== null) {
                                var m = p.memoizedProps
                                  , w = p.memoizedState
                                  , v = t.stateNode
                                  , g = v.getSnapshotBeforeUpdate(t.elementType === t.type ? m : Pt(t.type, m), w);
                                v.__reactInternalSnapshotBeforeUpdate = g
                            }
                            break;
                        case 3:
                            var y = t.stateNode.containerInfo;
                            y.nodeType === 1 ? y.textContent = "" : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(N(163))
                        }
                } catch (x) {
                    ve(t, t.return, x)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    A = e;
                    break
                }
                A = t.return
            }
    return p = Xf,
    Xf = !1,
    p
}
function Mn(e, t, r) {
    var o = t.updateQueue;
    if (o = o !== null ? o.lastEffect : null,
    o !== null) {
        var n = o = o.next;
        do {
            if ((n.tag & e) === e) {
                var i = n.destroy;
                n.destroy = void 0,
                i !== void 0 && Ru(t, r, i)
            }
            n = n.next
        } while (n !== o)
    }
}
function ys(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var r = t = t.next;
        do {
            if ((r.tag & e) === e) {
                var o = r.create;
                r.destroy = o()
            }
            r = r.next
        } while (r !== t)
    }
}
function Du(e) {
    var t = e.ref;
    if (t !== null) {
        var r = e.stateNode;
        switch (e.tag) {
        case 5:
            e = r;
            break;
        default:
            e = r
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function Bv(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    Bv(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[Ht],
    delete t[ri],
    delete t[wu],
    delete t[Fb],
    delete t[Rb])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function Ev(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Qf(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || Ev(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function ju(e, t, r) {
    var o = e.tag;
    if (o === 5 || o === 6)
        e = e.stateNode,
        t ? r.nodeType === 8 ? r.parentNode.insertBefore(e, t) : r.insertBefore(e, t) : (r.nodeType === 8 ? (t = r.parentNode,
        t.insertBefore(e, r)) : (t = r,
        t.appendChild(e)),
        r = r._reactRootContainer,
        r != null || t.onclick !== null || (t.onclick = Da));
    else if (o !== 4 && (e = e.child,
    e !== null))
        for (ju(e, t, r),
        e = e.sibling; e !== null; )
            ju(e, t, r),
            e = e.sibling
}
function Iu(e, t, r) {
    var o = e.tag;
    if (o === 5 || o === 6)
        e = e.stateNode,
        t ? r.insertBefore(e, t) : r.appendChild(e);
    else if (o !== 4 && (e = e.child,
    e !== null))
        for (Iu(e, t, r),
        e = e.sibling; e !== null; )
            Iu(e, t, r),
            e = e.sibling
}
var Te = null
  , Ct = !1;
function hr(e, t, r) {
    for (r = r.child; r !== null; )
        Pv(e, t, r),
        r = r.sibling
}
function Pv(e, t, r) {
    if ($t && typeof $t.onCommitFiberUnmount == "function")
        try {
            $t.onCommitFiberUnmount(cs, r)
        } catch {}
    switch (r.tag) {
    case 5:
        Ie || Oo(r, t);
    case 6:
        var o = Te
          , n = Ct;
        Te = null,
        hr(e, t, r),
        Te = o,
        Ct = n,
        Te !== null && (Ct ? (e = Te,
        r = r.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r)) : Te.removeChild(r.stateNode));
        break;
    case 18:
        Te !== null && (Ct ? (e = Te,
        r = r.stateNode,
        e.nodeType === 8 ? hl(e.parentNode, r) : e.nodeType === 1 && hl(e, r),
        Jn(e)) : hl(Te, r.stateNode));
        break;
    case 4:
        o = Te,
        n = Ct,
        Te = r.stateNode.containerInfo,
        Ct = !0,
        hr(e, t, r),
        Te = o,
        Ct = n;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!Ie && (o = r.updateQueue,
        o !== null && (o = o.lastEffect,
        o !== null))) {
            n = o = o.next;
            do {
                var i = n
                  , a = i.destroy;
                i = i.tag,
                a !== void 0 && (i & 2 || i & 4) && Ru(r, t, a),
                n = n.next
            } while (n !== o)
        }
        hr(e, t, r);
        break;
    case 1:
        if (!Ie && (Oo(r, t),
        o = r.stateNode,
        typeof o.componentWillUnmount == "function"))
            try {
                o.props = r.memoizedProps,
                o.state = r.memoizedState,
                o.componentWillUnmount()
            } catch (s) {
                ve(r, t, s)
            }
        hr(e, t, r);
        break;
    case 21:
        hr(e, t, r);
        break;
    case 22:
        r.mode & 1 ? (Ie = (o = Ie) || r.memoizedState !== null,
        hr(e, t, r),
        Ie = o) : hr(e, t, r);
        break;
    default:
        hr(e, t, r)
    }
}
function Jf(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var r = e.stateNode;
        r === null && (r = e.stateNode = new Xb),
        t.forEach(function(o) {
            var n = iw.bind(null, e, o);
            r.has(o) || (r.add(o),
            o.then(n, n))
        })
    }
}
function Bt(e, t) {
    var r = t.deletions;
    if (r !== null)
        for (var o = 0; o < r.length; o++) {
            var n = r[o];
            try {
                var i = e
                  , a = t
                  , s = a;
                e: for (; s !== null; ) {
                    switch (s.tag) {
                    case 5:
                        Te = s.stateNode,
                        Ct = !1;
                        break e;
                    case 3:
                        Te = s.stateNode.containerInfo,
                        Ct = !0;
                        break e;
                    case 4:
                        Te = s.stateNode.containerInfo,
                        Ct = !0;
                        break e
                    }
                    s = s.return
                }
                if (Te === null)
                    throw Error(N(160));
                Pv(i, a, n),
                Te = null,
                Ct = !1;
                var l = n.alternate;
                l !== null && (l.return = null),
                n.return = null
            } catch (u) {
                ve(n, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            Cv(t, e),
            t = t.sibling
}
function Cv(e, t) {
    var r = e.alternate
      , o = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (Bt(t, e),
        At(e),
        o & 4) {
            try {
                Mn(3, e, e.return),
                ys(3, e)
            } catch (m) {
                ve(e, e.return, m)
            }
            try {
                Mn(5, e, e.return)
            } catch (m) {
                ve(e, e.return, m)
            }
        }
        break;
    case 1:
        Bt(t, e),
        At(e),
        o & 512 && r !== null && Oo(r, r.return);
        break;
    case 5:
        if (Bt(t, e),
        At(e),
        o & 512 && r !== null && Oo(r, r.return),
        e.flags & 32) {
            var n = e.stateNode;
            try {
                Gn(n, "")
            } catch (m) {
                ve(e, e.return, m)
            }
        }
        if (o & 4 && (n = e.stateNode,
        n != null)) {
            var i = e.memoizedProps
              , a = r !== null ? r.memoizedProps : i
              , s = e.type
              , l = e.updateQueue;
            if (e.updateQueue = null,
            l !== null)
                try {
                    s === "input" && i.type === "radio" && i.name != null && Xh(n, i),
                    au(s, a);
                    var u = au(s, i);
                    for (a = 0; a < l.length; a += 2) {
                        var d = l[a]
                          , c = l[a + 1];
                        d === "style" ? eg(n, c) : d === "dangerouslySetInnerHTML" ? Yh(n, c) : d === "children" ? Gn(n, c) : Bc(n, d, c, u)
                    }
                    switch (s) {
                    case "input":
                        tu(n, i);
                        break;
                    case "textarea":
                        Qh(n, i);
                        break;
                    case "select":
                        var f = n._wrapperState.wasMultiple;
                        n._wrapperState.wasMultiple = !!i.multiple;
                        var h = i.value;
                        h != null ? qo(n, !!i.multiple, h, !1) : f !== !!i.multiple && (i.defaultValue != null ? qo(n, !!i.multiple, i.defaultValue, !0) : qo(n, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    n[ri] = i
                } catch (m) {
                    ve(e, e.return, m)
                }
        }
        break;
    case 6:
        if (Bt(t, e),
        At(e),
        o & 4) {
            if (e.stateNode === null)
                throw Error(N(162));
            n = e.stateNode,
            i = e.memoizedProps;
            try {
                n.nodeValue = i
            } catch (m) {
                ve(e, e.return, m)
            }
        }
        break;
    case 3:
        if (Bt(t, e),
        At(e),
        o & 4 && r !== null && r.memoizedState.isDehydrated)
            try {
                Jn(t.containerInfo)
            } catch (m) {
                ve(e, e.return, m)
            }
        break;
    case 4:
        Bt(t, e),
        At(e);
        break;
    case 13:
        Bt(t, e),
        At(e),
        n = e.child,
        n.flags & 8192 && (i = n.memoizedState !== null,
        n.stateNode.isHidden = i,
        !i || n.alternate !== null && n.alternate.memoizedState !== null || (nd = ye())),
        o & 4 && Jf(e);
        break;
    case 22:
        if (d = r !== null && r.memoizedState !== null,
        e.mode & 1 ? (Ie = (u = Ie) || d,
        Bt(t, e),
        Ie = u) : Bt(t, e),
        At(e),
        o & 8192) {
            if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !d && e.mode & 1)
                for (A = e,
                d = e.child; d !== null; ) {
                    for (c = A = d; A !== null; ) {
                        switch (f = A,
                        h = f.child,
                        f.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Mn(4, f, f.return);
                            break;
                        case 1:
                            Oo(f, f.return);
                            var p = f.stateNode;
                            if (typeof p.componentWillUnmount == "function") {
                                o = f,
                                r = f.return;
                                try {
                                    t = o,
                                    p.props = t.memoizedProps,
                                    p.state = t.memoizedState,
                                    p.componentWillUnmount()
                                } catch (m) {
                                    ve(o, r, m)
                                }
                            }
                            break;
                        case 5:
                            Oo(f, f.return);
                            break;
                        case 22:
                            if (f.memoizedState !== null) {
                                Zf(c);
                                continue
                            }
                        }
                        h !== null ? (h.return = f,
                        A = h) : Zf(c)
                    }
                    d = d.sibling
                }
            e: for (d = null,
            c = e; ; ) {
                if (c.tag === 5) {
                    if (d === null) {
                        d = c;
                        try {
                            n = c.stateNode,
                            u ? (i = n.style,
                            typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = c.stateNode,
                            l = c.memoizedProps.style,
                            a = l != null && l.hasOwnProperty("display") ? l.display : null,
                            s.style.display = Zh("display", a))
                        } catch (m) {
                            ve(e, e.return, m)
                        }
                    }
                } else if (c.tag === 6) {
                    if (d === null)
                        try {
                            c.stateNode.nodeValue = u ? "" : c.memoizedProps
                        } catch (m) {
                            ve(e, e.return, m)
                        }
                } else if ((c.tag !== 22 && c.tag !== 23 || c.memoizedState === null || c === e) && c.child !== null) {
                    c.child.return = c,
                    c = c.child;
                    continue
                }
                if (c === e)
                    break e;
                for (; c.sibling === null; ) {
                    if (c.return === null || c.return === e)
                        break e;
                    d === c && (d = null),
                    c = c.return
                }
                d === c && (d = null),
                c.sibling.return = c.return,
                c = c.sibling
            }
        }
        break;
    case 19:
        Bt(t, e),
        At(e),
        o & 4 && Jf(e);
        break;
    case 21:
        break;
    default:
        Bt(t, e),
        At(e)
    }
}
function At(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var r = e.return; r !== null; ) {
                    if (Ev(r)) {
                        var o = r;
                        break e
                    }
                    r = r.return
                }
                throw Error(N(160))
            }
            switch (o.tag) {
            case 5:
                var n = o.stateNode;
                o.flags & 32 && (Gn(n, ""),
                o.flags &= -33);
                var i = Qf(e);
                Iu(e, i, n);
                break;
            case 3:
            case 4:
                var a = o.stateNode.containerInfo
                  , s = Qf(e);
                ju(e, s, a);
                break;
            default:
                throw Error(N(161))
            }
        } catch (l) {
            ve(e, e.return, l)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function Jb(e, t, r) {
    A = e,
    Tv(e)
}
function Tv(e, t, r) {
    for (var o = (e.mode & 1) !== 0; A !== null; ) {
        var n = A
          , i = n.child;
        if (n.tag === 22 && o) {
            var a = n.memoizedState !== null || Gi;
            if (!a) {
                var s = n.alternate
                  , l = s !== null && s.memoizedState !== null || Ie;
                s = Gi;
                var u = Ie;
                if (Gi = a,
                (Ie = l) && !u)
                    for (A = n; A !== null; )
                        a = A,
                        l = a.child,
                        a.tag === 22 && a.memoizedState !== null ? ep(n) : l !== null ? (l.return = a,
                        A = l) : ep(n);
                for (; i !== null; )
                    A = i,
                    Tv(i),
                    i = i.sibling;
                A = n,
                Gi = s,
                Ie = u
            }
            Yf(e)
        } else
            n.subtreeFlags & 8772 && i !== null ? (i.return = n,
            A = i) : Yf(e)
    }
}
function Yf(e) {
    for (; A !== null; ) {
        var t = A;
        if (t.flags & 8772) {
            var r = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Ie || ys(5, t);
                        break;
                    case 1:
                        var o = t.stateNode;
                        if (t.flags & 4 && !Ie)
                            if (r === null)
                                o.componentDidMount();
                            else {
                                var n = t.elementType === t.type ? r.memoizedProps : Pt(t.type, r.memoizedProps);
                                o.componentDidUpdate(n, r.memoizedState, o.__reactInternalSnapshotBeforeUpdate)
                            }
                        var i = t.updateQueue;
                        i !== null && jf(t, i, o);
                        break;
                    case 3:
                        var a = t.updateQueue;
                        if (a !== null) {
                            if (r = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    r = t.child.stateNode;
                                    break;
                                case 1:
                                    r = t.child.stateNode
                                }
                            jf(t, a, r)
                        }
                        break;
                    case 5:
                        var s = t.stateNode;
                        if (r === null && t.flags & 4) {
                            r = s;
                            var l = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                l.autoFocus && r.focus();
                                break;
                            case "img":
                                l.src && (r.src = l.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var d = u.memoizedState;
                                if (d !== null) {
                                    var c = d.dehydrated;
                                    c !== null && Jn(c)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(N(163))
                    }
                Ie || t.flags & 512 && Du(t)
            } catch (f) {
                ve(t, t.return, f)
            }
        }
        if (t === e) {
            A = null;
            break
        }
        if (r = t.sibling,
        r !== null) {
            r.return = t.return,
            A = r;
            break
        }
        A = t.return
    }
}
function Zf(e) {
    for (; A !== null; ) {
        var t = A;
        if (t === e) {
            A = null;
            break
        }
        var r = t.sibling;
        if (r !== null) {
            r.return = t.return,
            A = r;
            break
        }
        A = t.return
    }
}
function ep(e) {
    for (; A !== null; ) {
        var t = A;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var r = t.return;
                try {
                    ys(4, t)
                } catch (l) {
                    ve(t, r, l)
                }
                break;
            case 1:
                var o = t.stateNode;
                if (typeof o.componentDidMount == "function") {
                    var n = t.return;
                    try {
                        o.componentDidMount()
                    } catch (l) {
                        ve(t, n, l)
                    }
                }
                var i = t.return;
                try {
                    Du(t)
                } catch (l) {
                    ve(t, i, l)
                }
                break;
            case 5:
                var a = t.return;
                try {
                    Du(t)
                } catch (l) {
                    ve(t, a, l)
                }
            }
        } catch (l) {
            ve(t, t.return, l)
        }
        if (t === e) {
            A = null;
            break
        }
        var s = t.sibling;
        if (s !== null) {
            s.return = t.return,
            A = s;
            break
        }
        A = t.return
    }
}
var Yb = Math.ceil
  , Ua = dr.ReactCurrentDispatcher
  , rd = dr.ReactCurrentOwner
  , yt = dr.ReactCurrentBatchConfig
  , J = 0
  , Pe = null
  , we = null
  , Ne = 0
  , tt = 0
  , Lo = Hr(0)
  , Be = 0
  , li = null
  , go = 0
  , bs = 0
  , od = 0
  , qn = null
  , Ke = null
  , nd = 0
  , en = 1 / 0
  , Qt = null
  , Va = !1
  , Au = null
  , Nr = null
  , Ki = !1
  , Sr = null
  , Ga = 0
  , Hn = 0
  , Ou = null
  , pa = -1
  , ha = 0;
function We() {
    return J & 6 ? ye() : pa !== -1 ? pa : pa = ye()
}
function zr(e) {
    return e.mode & 1 ? J & 2 && Ne !== 0 ? Ne & -Ne : jb.transition !== null ? (ha === 0 && (ha = fg()),
    ha) : (e = ee,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : bg(e.type)),
    e) : 1
}
function zt(e, t, r, o) {
    if (50 < Hn)
        throw Hn = 0,
        Ou = null,
        Error(N(185));
    wi(e, r, o),
    (!(J & 2) || e !== Pe) && (e === Pe && (!(J & 2) && (bs |= r),
    Be === 4 && kr(e, Ne)),
    Ye(e, o),
    r === 1 && J === 0 && !(t.mode & 1) && (en = ye() + 500,
    gs && Wr()))
}
function Ye(e, t) {
    var r = e.callbackNode;
    jy(e, t);
    var o = Na(e, e === Pe ? Ne : 0);
    if (o === 0)
        r !== null && uf(r),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = o & -o,
    e.callbackPriority !== t) {
        if (r != null && uf(r),
        t === 1)
            e.tag === 0 ? Db(tp.bind(null, e)) : Og(tp.bind(null, e)),
            Nb(function() {
                !(J & 6) && Wr()
            }),
            r = null;
        else {
            switch (pg(o)) {
            case 1:
                r = Nc;
                break;
            case 4:
                r = cg;
                break;
            case 16:
                r = Ta;
                break;
            case 536870912:
                r = dg;
                break;
            default:
                r = Ta
            }
            r = Av(r, Nv.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = r
    }
}
function Nv(e, t) {
    if (pa = -1,
    ha = 0,
    J & 6)
        throw Error(N(327));
    var r = e.callbackNode;
    if (Vo() && e.callbackNode !== r)
        return null;
    var o = Na(e, e === Pe ? Ne : 0);
    if (o === 0)
        return null;
    if (o & 30 || o & e.expiredLanes || t)
        t = Ka(e, o);
    else {
        t = o;
        var n = J;
        J |= 2;
        var i = Fv();
        (Pe !== e || Ne !== t) && (Qt = null,
        en = ye() + 500,
        so(e, t));
        do
            try {
                tw();
                break
            } catch (s) {
                zv(e, s)
            }
        while (!0);
        Wc(),
        Ua.current = i,
        J = n,
        we !== null ? t = 0 : (Pe = null,
        Ne = 0,
        t = Be)
    }
    if (t !== 0) {
        if (t === 2 && (n = du(e),
        n !== 0 && (o = n,
        t = Lu(e, n))),
        t === 1)
            throw r = li,
            so(e, 0),
            kr(e, o),
            Ye(e, ye()),
            r;
        if (t === 6)
            kr(e, o);
        else {
            if (n = e.current.alternate,
            !(o & 30) && !Zb(n) && (t = Ka(e, o),
            t === 2 && (i = du(e),
            i !== 0 && (o = i,
            t = Lu(e, i))),
            t === 1))
                throw r = li,
                so(e, 0),
                kr(e, o),
                Ye(e, ye()),
                r;
            switch (e.finishedWork = n,
            e.finishedLanes = o,
            t) {
            case 0:
            case 1:
                throw Error(N(345));
            case 2:
                Kr(e, Ke, Qt);
                break;
            case 3:
                if (kr(e, o),
                (o & 130023424) === o && (t = nd + 500 - ye(),
                10 < t)) {
                    if (Na(e, 0) !== 0)
                        break;
                    if (n = e.suspendedLanes,
                    (n & o) !== o) {
                        We(),
                        e.pingedLanes |= e.suspendedLanes & n;
                        break
                    }
                    e.timeoutHandle = bu(Kr.bind(null, e, Ke, Qt), t);
                    break
                }
                Kr(e, Ke, Qt);
                break;
            case 4:
                if (kr(e, o),
                (o & 4194240) === o)
                    break;
                for (t = e.eventTimes,
                n = -1; 0 < o; ) {
                    var a = 31 - Nt(o);
                    i = 1 << a,
                    a = t[a],
                    a > n && (n = a),
                    o &= ~i
                }
                if (o = n,
                o = ye() - o,
                o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * Yb(o / 1960)) - o,
                10 < o) {
                    e.timeoutHandle = bu(Kr.bind(null, e, Ke, Qt), o);
                    break
                }
                Kr(e, Ke, Qt);
                break;
            case 5:
                Kr(e, Ke, Qt);
                break;
            default:
                throw Error(N(329))
            }
        }
    }
    return Ye(e, ye()),
    e.callbackNode === r ? Nv.bind(null, e) : null
}
function Lu(e, t) {
    var r = qn;
    return e.current.memoizedState.isDehydrated && (so(e, t).flags |= 256),
    e = Ka(e, t),
    e !== 2 && (t = Ke,
    Ke = r,
    t !== null && Mu(t)),
    e
}
function Mu(e) {
    Ke === null ? Ke = e : Ke.push.apply(Ke, e)
}
function Zb(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var r = t.updateQueue;
            if (r !== null && (r = r.stores,
            r !== null))
                for (var o = 0; o < r.length; o++) {
                    var n = r[o]
                      , i = n.getSnapshot;
                    n = n.value;
                    try {
                        if (!Ft(i(), n))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (r = t.child,
        t.subtreeFlags & 16384 && r !== null)
            r.return = t,
            t = r;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function kr(e, t) {
    for (t &= ~od,
    t &= ~bs,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var r = 31 - Nt(t)
          , o = 1 << r;
        e[r] = -1,
        t &= ~o
    }
}
function tp(e) {
    if (J & 6)
        throw Error(N(327));
    Vo();
    var t = Na(e, 0);
    if (!(t & 1))
        return Ye(e, ye()),
        null;
    var r = Ka(e, t);
    if (e.tag !== 0 && r === 2) {
        var o = du(e);
        o !== 0 && (t = o,
        r = Lu(e, o))
    }
    if (r === 1)
        throw r = li,
        so(e, 0),
        kr(e, t),
        Ye(e, ye()),
        r;
    if (r === 6)
        throw Error(N(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    Kr(e, Ke, Qt),
    Ye(e, ye()),
    null
}
function id(e, t) {
    var r = J;
    J |= 1;
    try {
        return e(t)
    } finally {
        J = r,
        J === 0 && (en = ye() + 500,
        gs && Wr())
    }
}
function vo(e) {
    Sr !== null && Sr.tag === 0 && !(J & 6) && Vo();
    var t = J;
    J |= 1;
    var r = yt.transition
      , o = ee;
    try {
        if (yt.transition = null,
        ee = 1,
        e)
            return e()
    } finally {
        ee = o,
        yt.transition = r,
        J = t,
        !(J & 6) && Wr()
    }
}
function ad() {
    tt = Lo.current,
    ie(Lo)
}
function so(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var r = e.timeoutHandle;
    if (r !== -1 && (e.timeoutHandle = -1,
    Tb(r)),
    we !== null)
        for (r = we.return; r !== null; ) {
            var o = r;
            switch (Mc(o),
            o.tag) {
            case 1:
                o = o.type.childContextTypes,
                o != null && ja();
                break;
            case 3:
                Yo(),
                ie(Qe),
                ie(Ae),
                Xc();
                break;
            case 5:
                Kc(o);
                break;
            case 4:
                Yo();
                break;
            case 13:
                ie(le);
                break;
            case 19:
                ie(le);
                break;
            case 10:
                $c(o.type._context);
                break;
            case 22:
            case 23:
                ad()
            }
            r = r.return
        }
    if (Pe = e,
    we = e = Fr(e.current, null),
    Ne = tt = t,
    Be = 0,
    li = null,
    od = bs = go = 0,
    Ke = qn = null,
    no !== null) {
        for (t = 0; t < no.length; t++)
            if (r = no[t],
            o = r.interleaved,
            o !== null) {
                r.interleaved = null;
                var n = o.next
                  , i = r.pending;
                if (i !== null) {
                    var a = i.next;
                    i.next = n,
                    o.next = a
                }
                r.pending = o
            }
        no = null
    }
    return e
}
function zv(e, t) {
    do {
        var r = we;
        try {
            if (Wc(),
            ca.current = $a,
            Wa) {
                for (var o = de.memoizedState; o !== null; ) {
                    var n = o.queue;
                    n !== null && (n.pending = null),
                    o = o.next
                }
                Wa = !1
            }
            if (ho = 0,
            Ee = _e = de = null,
            Ln = !1,
            ii = 0,
            rd.current = null,
            r === null || r.return === null) {
                Be = 1,
                li = t,
                we = null;
                break
            }
            e: {
                var i = e
                  , a = r.return
                  , s = r
                  , l = t;
                if (t = Ne,
                s.flags |= 32768,
                l !== null && typeof l == "object" && typeof l.then == "function") {
                    var u = l
                      , d = s
                      , c = d.tag;
                    if (!(d.mode & 1) && (c === 0 || c === 11 || c === 15)) {
                        var f = d.alternate;
                        f ? (d.updateQueue = f.updateQueue,
                        d.memoizedState = f.memoizedState,
                        d.lanes = f.lanes) : (d.updateQueue = null,
                        d.memoizedState = null)
                    }
                    var h = Hf(a);
                    if (h !== null) {
                        h.flags &= -257,
                        Wf(h, a, s, i, t),
                        h.mode & 1 && qf(i, u, t),
                        t = h,
                        l = u;
                        var p = t.updateQueue;
                        if (p === null) {
                            var m = new Set;
                            m.add(l),
                            t.updateQueue = m
                        } else
                            p.add(l);
                        break e
                    } else {
                        if (!(t & 1)) {
                            qf(i, u, t),
                            sd();
                            break e
                        }
                        l = Error(N(426))
                    }
                } else if (se && s.mode & 1) {
                    var w = Hf(a);
                    if (w !== null) {
                        !(w.flags & 65536) && (w.flags |= 256),
                        Wf(w, a, s, i, t),
                        qc(Zo(l, s));
                        break e
                    }
                }
                i = l = Zo(l, s),
                Be !== 4 && (Be = 2),
                qn === null ? qn = [i] : qn.push(i),
                i = a;
                do {
                    switch (i.tag) {
                    case 3:
                        i.flags |= 65536,
                        t &= -t,
                        i.lanes |= t;
                        var v = hv(i, l, t);
                        Df(i, v);
                        break e;
                    case 1:
                        s = l;
                        var g = i.type
                          , y = i.stateNode;
                        if (!(i.flags & 128) && (typeof g.getDerivedStateFromError == "function" || y !== null && typeof y.componentDidCatch == "function" && (Nr === null || !Nr.has(y)))) {
                            i.flags |= 65536,
                            t &= -t,
                            i.lanes |= t;
                            var x = gv(i, s, t);
                            Df(i, x);
                            break e
                        }
                    }
                    i = i.return
                } while (i !== null)
            }
            Dv(r)
        } catch (S) {
            t = S,
            we === r && r !== null && (we = r = r.return);
            continue
        }
        break
    } while (!0)
}
function Fv() {
    var e = Ua.current;
    return Ua.current = $a,
    e === null ? $a : e
}
function sd() {
    (Be === 0 || Be === 3 || Be === 2) && (Be = 4),
    Pe === null || !(go & 268435455) && !(bs & 268435455) || kr(Pe, Ne)
}
function Ka(e, t) {
    var r = J;
    J |= 2;
    var o = Fv();
    (Pe !== e || Ne !== t) && (Qt = null,
    so(e, t));
    do
        try {
            ew();
            break
        } catch (n) {
            zv(e, n)
        }
    while (!0);
    if (Wc(),
    J = r,
    Ua.current = o,
    we !== null)
        throw Error(N(261));
    return Pe = null,
    Ne = 0,
    Be
}
function ew() {
    for (; we !== null; )
        Rv(we)
}
function tw() {
    for (; we !== null && !Ey(); )
        Rv(we)
}
function Rv(e) {
    var t = Iv(e.alternate, e, tt);
    e.memoizedProps = e.pendingProps,
    t === null ? Dv(e) : we = t,
    rd.current = null
}
function Dv(e) {
    var t = e;
    do {
        var r = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (r = Kb(r, t),
            r !== null) {
                r.flags &= 32767,
                we = r;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                Be = 6,
                we = null;
                return
            }
        } else if (r = Gb(r, t, tt),
        r !== null) {
            we = r;
            return
        }
        if (t = t.sibling,
        t !== null) {
            we = t;
            return
        }
        we = t = e
    } while (t !== null);
    Be === 0 && (Be = 5)
}
function Kr(e, t, r) {
    var o = ee
      , n = yt.transition;
    try {
        yt.transition = null,
        ee = 1,
        rw(e, t, r, o)
    } finally {
        yt.transition = n,
        ee = o
    }
    return null
}
function rw(e, t, r, o) {
    do
        Vo();
    while (Sr !== null);
    if (J & 6)
        throw Error(N(327));
    r = e.finishedWork;
    var n = e.finishedLanes;
    if (r === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    r === e.current)
        throw Error(N(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var i = r.lanes | r.childLanes;
    if (Iy(e, i),
    e === Pe && (we = Pe = null,
    Ne = 0),
    !(r.subtreeFlags & 2064) && !(r.flags & 2064) || Ki || (Ki = !0,
    Av(Ta, function() {
        return Vo(),
        null
    })),
    i = (r.flags & 15990) !== 0,
    r.subtreeFlags & 15990 || i) {
        i = yt.transition,
        yt.transition = null;
        var a = ee;
        ee = 1;
        var s = J;
        J |= 4,
        rd.current = null,
        Qb(e, r),
        Cv(r, e),
        xb(mu),
        za = !!vu,
        mu = vu = null,
        e.current = r,
        Jb(r),
        Py(),
        J = s,
        ee = a,
        yt.transition = i
    } else
        e.current = r;
    if (Ki && (Ki = !1,
    Sr = e,
    Ga = n),
    i = e.pendingLanes,
    i === 0 && (Nr = null),
    Ny(r.stateNode),
    Ye(e, ye()),
    t !== null)
        for (o = e.onRecoverableError,
        r = 0; r < t.length; r++)
            n = t[r],
            o(n.value, {
                componentStack: n.stack,
                digest: n.digest
            });
    if (Va)
        throw Va = !1,
        e = Au,
        Au = null,
        e;
    return Ga & 1 && e.tag !== 0 && Vo(),
    i = e.pendingLanes,
    i & 1 ? e === Ou ? Hn++ : (Hn = 0,
    Ou = e) : Hn = 0,
    Wr(),
    null
}
function Vo() {
    if (Sr !== null) {
        var e = pg(Ga)
          , t = yt.transition
          , r = ee;
        try {
            if (yt.transition = null,
            ee = 16 > e ? 16 : e,
            Sr === null)
                var o = !1;
            else {
                if (e = Sr,
                Sr = null,
                Ga = 0,
                J & 6)
                    throw Error(N(331));
                var n = J;
                for (J |= 4,
                A = e.current; A !== null; ) {
                    var i = A
                      , a = i.child;
                    if (A.flags & 16) {
                        var s = i.deletions;
                        if (s !== null) {
                            for (var l = 0; l < s.length; l++) {
                                var u = s[l];
                                for (A = u; A !== null; ) {
                                    var d = A;
                                    switch (d.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Mn(8, d, i)
                                    }
                                    var c = d.child;
                                    if (c !== null)
                                        c.return = d,
                                        A = c;
                                    else
                                        for (; A !== null; ) {
                                            d = A;
                                            var f = d.sibling
                                              , h = d.return;
                                            if (Bv(d),
                                            d === u) {
                                                A = null;
                                                break
                                            }
                                            if (f !== null) {
                                                f.return = h,
                                                A = f;
                                                break
                                            }
                                            A = h
                                        }
                                }
                            }
                            var p = i.alternate;
                            if (p !== null) {
                                var m = p.child;
                                if (m !== null) {
                                    p.child = null;
                                    do {
                                        var w = m.sibling;
                                        m.sibling = null,
                                        m = w
                                    } while (m !== null)
                                }
                            }
                            A = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && a !== null)
                        a.return = i,
                        A = a;
                    else
                        e: for (; A !== null; ) {
                            if (i = A,
                            i.flags & 2048)
                                switch (i.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Mn(9, i, i.return)
                                }
                            var v = i.sibling;
                            if (v !== null) {
                                v.return = i.return,
                                A = v;
                                break e
                            }
                            A = i.return
                        }
                }
                var g = e.current;
                for (A = g; A !== null; ) {
                    a = A;
                    var y = a.child;
                    if (a.subtreeFlags & 2064 && y !== null)
                        y.return = a,
                        A = y;
                    else
                        e: for (a = g; A !== null; ) {
                            if (s = A,
                            s.flags & 2048)
                                try {
                                    switch (s.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        ys(9, s)
                                    }
                                } catch (S) {
                                    ve(s, s.return, S)
                                }
                            if (s === a) {
                                A = null;
                                break e
                            }
                            var x = s.sibling;
                            if (x !== null) {
                                x.return = s.return,
                                A = x;
                                break e
                            }
                            A = s.return
                        }
                }
                if (J = n,
                Wr(),
                $t && typeof $t.onPostCommitFiberRoot == "function")
                    try {
                        $t.onPostCommitFiberRoot(cs, e)
                    } catch {}
                o = !0
            }
            return o
        } finally {
            ee = r,
            yt.transition = t
        }
    }
    return !1
}
function rp(e, t, r) {
    t = Zo(r, t),
    t = hv(e, t, 1),
    e = Tr(e, t, 1),
    t = We(),
    e !== null && (wi(e, 1, t),
    Ye(e, t))
}
function ve(e, t, r) {
    if (e.tag === 3)
        rp(e, e, r);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                rp(t, e, r);
                break
            } else if (t.tag === 1) {
                var o = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Nr === null || !Nr.has(o))) {
                    e = Zo(r, e),
                    e = gv(t, e, 1),
                    t = Tr(t, e, 1),
                    e = We(),
                    t !== null && (wi(t, 1, e),
                    Ye(t, e));
                    break
                }
            }
            t = t.return
        }
}
function ow(e, t, r) {
    var o = e.pingCache;
    o !== null && o.delete(t),
    t = We(),
    e.pingedLanes |= e.suspendedLanes & r,
    Pe === e && (Ne & r) === r && (Be === 4 || Be === 3 && (Ne & 130023424) === Ne && 500 > ye() - nd ? so(e, 0) : od |= r),
    Ye(e, t)
}
function jv(e, t) {
    t === 0 && (e.mode & 1 ? (t = Oi,
    Oi <<= 1,
    !(Oi & 130023424) && (Oi = 4194304)) : t = 1);
    var r = We();
    e = ar(e, t),
    e !== null && (wi(e, t, r),
    Ye(e, r))
}
function nw(e) {
    var t = e.memoizedState
      , r = 0;
    t !== null && (r = t.retryLane),
    jv(e, r)
}
function iw(e, t) {
    var r = 0;
    switch (e.tag) {
    case 13:
        var o = e.stateNode
          , n = e.memoizedState;
        n !== null && (r = n.retryLane);
        break;
    case 19:
        o = e.stateNode;
        break;
    default:
        throw Error(N(314))
    }
    o !== null && o.delete(t),
    jv(e, r)
}
var Iv;
Iv = function(e, t, r) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Qe.current)
            Xe = !0;
        else {
            if (!(e.lanes & r) && !(t.flags & 128))
                return Xe = !1,
                Vb(e, t, r);
            Xe = !!(e.flags & 131072)
        }
    else
        Xe = !1,
        se && t.flags & 1048576 && Lg(t, Oa, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var o = t.type;
        fa(e, t),
        e = t.pendingProps;
        var n = Xo(t, Ae.current);
        Uo(t, r),
        n = Jc(null, t, o, e, n, r);
        var i = Yc();
        return t.flags |= 1,
        typeof n == "object" && n !== null && typeof n.render == "function" && n.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        Je(o) ? (i = !0,
        Ia(t)) : i = !1,
        t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null,
        Vc(t),
        n.updater = vs,
        t.stateNode = n,
        n._reactInternals = t,
        Eu(t, o, e, r),
        t = Tu(null, t, o, !0, i, r)) : (t.tag = 0,
        se && i && Lc(t),
        Me(null, t, n, r),
        t = t.child),
        t;
    case 16:
        o = t.elementType;
        e: {
            switch (fa(e, t),
            e = t.pendingProps,
            n = o._init,
            o = n(o._payload),
            t.type = o,
            n = t.tag = sw(o),
            e = Pt(o, e),
            n) {
            case 0:
                t = Cu(null, t, o, e, r);
                break e;
            case 1:
                t = Vf(null, t, o, e, r);
                break e;
            case 11:
                t = $f(null, t, o, e, r);
                break e;
            case 14:
                t = Uf(null, t, o, Pt(o.type, e), r);
                break e
            }
            throw Error(N(306, o, ""))
        }
        return t;
    case 0:
        return o = t.type,
        n = t.pendingProps,
        n = t.elementType === o ? n : Pt(o, n),
        Cu(e, t, o, n, r);
    case 1:
        return o = t.type,
        n = t.pendingProps,
        n = t.elementType === o ? n : Pt(o, n),
        Vf(e, t, o, n, r);
    case 3:
        e: {
            if (bv(t),
            e === null)
                throw Error(N(387));
            o = t.pendingProps,
            i = t.memoizedState,
            n = i.element,
            Wg(e, t),
            qa(t, o, null, r);
            var a = t.memoizedState;
            if (o = a.element,
            i.isDehydrated)
                if (i = {
                    element: o,
                    isDehydrated: !1,
                    cache: a.cache,
                    pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
                    transitions: a.transitions
                },
                t.updateQueue.baseState = i,
                t.memoizedState = i,
                t.flags & 256) {
                    n = Zo(Error(N(423)), t),
                    t = Gf(e, t, o, r, n);
                    break e
                } else if (o !== n) {
                    n = Zo(Error(N(424)), t),
                    t = Gf(e, t, o, r, n);
                    break e
                } else
                    for (rt = Cr(t.stateNode.containerInfo.firstChild),
                    nt = t,
                    se = !0,
                    Tt = null,
                    r = Gg(t, null, o, r),
                    t.child = r; r; )
                        r.flags = r.flags & -3 | 4096,
                        r = r.sibling;
            else {
                if (Qo(),
                o === n) {
                    t = sr(e, t, r);
                    break e
                }
                Me(e, t, o, r)
            }
            t = t.child
        }
        return t;
    case 5:
        return Kg(t),
        e === null && Su(t),
        o = t.type,
        n = t.pendingProps,
        i = e !== null ? e.memoizedProps : null,
        a = n.children,
        yu(o, n) ? a = null : i !== null && yu(o, i) && (t.flags |= 32),
        yv(e, t),
        Me(e, t, a, r),
        t.child;
    case 6:
        return e === null && Su(t),
        null;
    case 13:
        return wv(e, t, r);
    case 4:
        return Gc(t, t.stateNode.containerInfo),
        o = t.pendingProps,
        e === null ? t.child = Jo(t, null, o, r) : Me(e, t, o, r),
        t.child;
    case 11:
        return o = t.type,
        n = t.pendingProps,
        n = t.elementType === o ? n : Pt(o, n),
        $f(e, t, o, n, r);
    case 7:
        return Me(e, t, t.pendingProps, r),
        t.child;
    case 8:
        return Me(e, t, t.pendingProps.children, r),
        t.child;
    case 12:
        return Me(e, t, t.pendingProps.children, r),
        t.child;
    case 10:
        e: {
            if (o = t.type._context,
            n = t.pendingProps,
            i = t.memoizedProps,
            a = n.value,
            re(La, o._currentValue),
            o._currentValue = a,
            i !== null)
                if (Ft(i.value, a)) {
                    if (i.children === n.children && !Qe.current) {
                        t = sr(e, t, r);
                        break e
                    }
                } else
                    for (i = t.child,
                    i !== null && (i.return = t); i !== null; ) {
                        var s = i.dependencies;
                        if (s !== null) {
                            a = i.child;
                            for (var l = s.firstContext; l !== null; ) {
                                if (l.context === o) {
                                    if (i.tag === 1) {
                                        l = tr(-1, r & -r),
                                        l.tag = 2;
                                        var u = i.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var d = u.pending;
                                            d === null ? l.next = l : (l.next = d.next,
                                            d.next = l),
                                            u.pending = l
                                        }
                                    }
                                    i.lanes |= r,
                                    l = i.alternate,
                                    l !== null && (l.lanes |= r),
                                    _u(i.return, r, t),
                                    s.lanes |= r;
                                    break
                                }
                                l = l.next
                            }
                        } else if (i.tag === 10)
                            a = i.type === t.type ? null : i.child;
                        else if (i.tag === 18) {
                            if (a = i.return,
                            a === null)
                                throw Error(N(341));
                            a.lanes |= r,
                            s = a.alternate,
                            s !== null && (s.lanes |= r),
                            _u(a, r, t),
                            a = i.sibling
                        } else
                            a = i.child;
                        if (a !== null)
                            a.return = i;
                        else
                            for (a = i; a !== null; ) {
                                if (a === t) {
                                    a = null;
                                    break
                                }
                                if (i = a.sibling,
                                i !== null) {
                                    i.return = a.return,
                                    a = i;
                                    break
                                }
                                a = a.return
                            }
                        i = a
                    }
            Me(e, t, n.children, r),
            t = t.child
        }
        return t;
    case 9:
        return n = t.type,
        o = t.pendingProps.children,
        Uo(t, r),
        n = kt(n),
        o = o(n),
        t.flags |= 1,
        Me(e, t, o, r),
        t.child;
    case 14:
        return o = t.type,
        n = Pt(o, t.pendingProps),
        n = Pt(o.type, n),
        Uf(e, t, o, n, r);
    case 15:
        return vv(e, t, t.type, t.pendingProps, r);
    case 17:
        return o = t.type,
        n = t.pendingProps,
        n = t.elementType === o ? n : Pt(o, n),
        fa(e, t),
        t.tag = 1,
        Je(o) ? (e = !0,
        Ia(t)) : e = !1,
        Uo(t, r),
        Ug(t, o, n),
        Eu(t, o, n, r),
        Tu(null, t, o, !0, e, r);
    case 19:
        return kv(e, t, r);
    case 22:
        return mv(e, t, r)
    }
    throw Error(N(156, t.tag))
}
;
function Av(e, t) {
    return ug(e, t)
}
function aw(e, t, r, o) {
    this.tag = e,
    this.key = r,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = o,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function mt(e, t, r, o) {
    return new aw(e,t,r,o)
}
function ld(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function sw(e) {
    if (typeof e == "function")
        return ld(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === Pc)
            return 11;
        if (e === Cc)
            return 14
    }
    return 2
}
function Fr(e, t) {
    var r = e.alternate;
    return r === null ? (r = mt(e.tag, t, e.key, e.mode),
    r.elementType = e.elementType,
    r.type = e.type,
    r.stateNode = e.stateNode,
    r.alternate = e,
    e.alternate = r) : (r.pendingProps = t,
    r.type = e.type,
    r.flags = 0,
    r.subtreeFlags = 0,
    r.deletions = null),
    r.flags = e.flags & 14680064,
    r.childLanes = e.childLanes,
    r.lanes = e.lanes,
    r.child = e.child,
    r.memoizedProps = e.memoizedProps,
    r.memoizedState = e.memoizedState,
    r.updateQueue = e.updateQueue,
    t = e.dependencies,
    r.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    r.sibling = e.sibling,
    r.index = e.index,
    r.ref = e.ref,
    r
}
function ga(e, t, r, o, n, i) {
    var a = 2;
    if (o = e,
    typeof e == "function")
        ld(e) && (a = 1);
    else if (typeof e == "string")
        a = 5;
    else
        e: switch (e) {
        case To:
            return lo(r.children, n, i, t);
        case Ec:
            a = 8,
            n |= 8;
            break;
        case Ql:
            return e = mt(12, r, t, n | 2),
            e.elementType = Ql,
            e.lanes = i,
            e;
        case Jl:
            return e = mt(13, r, t, n),
            e.elementType = Jl,
            e.lanes = i,
            e;
        case Yl:
            return e = mt(19, r, t, n),
            e.elementType = Yl,
            e.lanes = i,
            e;
        case Vh:
            return ws(r, n, i, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case $h:
                    a = 10;
                    break e;
                case Uh:
                    a = 9;
                    break e;
                case Pc:
                    a = 11;
                    break e;
                case Cc:
                    a = 14;
                    break e;
                case yr:
                    a = 16,
                    o = null;
                    break e
                }
            throw Error(N(130, e == null ? e : typeof e, ""))
        }
    return t = mt(a, r, t, n),
    t.elementType = e,
    t.type = o,
    t.lanes = i,
    t
}
function lo(e, t, r, o) {
    return e = mt(7, e, o, t),
    e.lanes = r,
    e
}
function ws(e, t, r, o) {
    return e = mt(22, e, o, t),
    e.elementType = Vh,
    e.lanes = r,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function xl(e, t, r) {
    return e = mt(6, e, null, t),
    e.lanes = r,
    e
}
function Sl(e, t, r) {
    return t = mt(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = r,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function lw(e, t, r, o, n) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = ol(0),
    this.expirationTimes = ol(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = ol(0),
    this.identifierPrefix = o,
    this.onRecoverableError = n,
    this.mutableSourceEagerHydrationData = null
}
function ud(e, t, r, o, n, i, a, s, l) {
    return e = new lw(e,t,r,s,l),
    t === 1 ? (t = 1,
    i === !0 && (t |= 8)) : t = 0,
    i = mt(3, null, null, t),
    e.current = i,
    i.stateNode = e,
    i.memoizedState = {
        element: o,
        isDehydrated: r,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    Vc(i),
    e
}
function uw(e, t, r) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Co,
        key: o == null ? null : "" + o,
        children: e,
        containerInfo: t,
        implementation: r
    }
}
function Ov(e) {
    if (!e)
        return Ir;
    e = e._reactInternals;
    e: {
        if (bo(e) !== e || e.tag !== 1)
            throw Error(N(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (Je(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(N(171))
    }
    if (e.tag === 1) {
        var r = e.type;
        if (Je(r))
            return Ag(e, r, t)
    }
    return t
}
function Lv(e, t, r, o, n, i, a, s, l) {
    return e = ud(r, o, !0, e, n, i, a, s, l),
    e.context = Ov(null),
    r = e.current,
    o = We(),
    n = zr(r),
    i = tr(o, n),
    i.callback = t ?? null,
    Tr(r, i, n),
    e.current.lanes = n,
    wi(e, n, o),
    Ye(e, o),
    e
}
function ks(e, t, r, o) {
    var n = t.current
      , i = We()
      , a = zr(n);
    return r = Ov(r),
    t.context === null ? t.context = r : t.pendingContext = r,
    t = tr(i, a),
    t.payload = {
        element: e
    },
    o = o === void 0 ? null : o,
    o !== null && (t.callback = o),
    e = Tr(n, t, a),
    e !== null && (zt(e, n, a, i),
    ua(e, n, a)),
    a
}
function Xa(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function op(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var r = e.retryLane;
        e.retryLane = r !== 0 && r < t ? r : t
    }
}
function cd(e, t) {
    op(e, t),
    (e = e.alternate) && op(e, t)
}
function cw() {
    return null
}
var Mv = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function dd(e) {
    this._internalRoot = e
}
xs.prototype.render = dd.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(N(409));
    ks(e, t, null, null)
}
;
xs.prototype.unmount = dd.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        vo(function() {
            ks(null, e, null, null)
        }),
        t[ir] = null
    }
}
;
function xs(e) {
    this._internalRoot = e
}
xs.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = vg();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var r = 0; r < wr.length && t !== 0 && t < wr[r].priority; r++)
            ;
        wr.splice(r, 0, e),
        r === 0 && yg(e)
    }
}
;
function fd(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Ss(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function np() {}
function dw(e, t, r, o, n) {
    if (n) {
        if (typeof o == "function") {
            var i = o;
            o = function() {
                var u = Xa(a);
                i.call(u)
            }
        }
        var a = Lv(t, o, e, 0, null, !1, !1, "", np);
        return e._reactRootContainer = a,
        e[ir] = a.current,
        ei(e.nodeType === 8 ? e.parentNode : e),
        vo(),
        a
    }
    for (; n = e.lastChild; )
        e.removeChild(n);
    if (typeof o == "function") {
        var s = o;
        o = function() {
            var u = Xa(l);
            s.call(u)
        }
    }
    var l = ud(e, 0, !1, null, null, !1, !1, "", np);
    return e._reactRootContainer = l,
    e[ir] = l.current,
    ei(e.nodeType === 8 ? e.parentNode : e),
    vo(function() {
        ks(t, l, r, o)
    }),
    l
}
function _s(e, t, r, o, n) {
    var i = r._reactRootContainer;
    if (i) {
        var a = i;
        if (typeof n == "function") {
            var s = n;
            n = function() {
                var l = Xa(a);
                s.call(l)
            }
        }
        ks(t, a, e, n)
    } else
        a = dw(r, t, e, n, o);
    return Xa(a)
}
hg = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var r = Tn(t.pendingLanes);
            r !== 0 && (zc(t, r | 1),
            Ye(t, ye()),
            !(J & 6) && (en = ye() + 500,
            Wr()))
        }
        break;
    case 13:
        vo(function() {
            var o = ar(e, 1);
            if (o !== null) {
                var n = We();
                zt(o, e, 1, n)
            }
        }),
        cd(e, 1)
    }
}
;
Fc = function(e) {
    if (e.tag === 13) {
        var t = ar(e, 134217728);
        if (t !== null) {
            var r = We();
            zt(t, e, 134217728, r)
        }
        cd(e, 134217728)
    }
}
;
gg = function(e) {
    if (e.tag === 13) {
        var t = zr(e)
          , r = ar(e, t);
        if (r !== null) {
            var o = We();
            zt(r, e, t, o)
        }
        cd(e, t)
    }
}
;
vg = function() {
    return ee
}
;
mg = function(e, t) {
    var r = ee;
    try {
        return ee = e,
        t()
    } finally {
        ee = r
    }
}
;
lu = function(e, t, r) {
    switch (t) {
    case "input":
        if (tu(e, r),
        t = r.name,
        r.type === "radio" && t != null) {
            for (r = e; r.parentNode; )
                r = r.parentNode;
            for (r = r.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < r.length; t++) {
                var o = r[t];
                if (o !== e && o.form === e.form) {
                    var n = hs(o);
                    if (!n)
                        throw Error(N(90));
                    Kh(o),
                    tu(o, n)
                }
            }
        }
        break;
    case "textarea":
        Qh(e, r);
        break;
    case "select":
        t = r.value,
        t != null && qo(e, !!r.multiple, t, !1)
    }
}
;
og = id;
ng = vo;
var fw = {
    usingClientEntryPoint: !1,
    Events: [xi, Ro, hs, tg, rg, id]
}
  , Bn = {
    findFiberByHostInstance: oo,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom"
}
  , pw = {
    bundleType: Bn.bundleType,
    version: Bn.version,
    rendererPackageName: Bn.rendererPackageName,
    rendererConfig: Bn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: dr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = sg(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: Bn.findFiberByHostInstance || cw,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Xi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Xi.isDisabled && Xi.supportsFiber)
        try {
            cs = Xi.inject(pw),
            $t = Xi
        } catch {}
}
ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fw;
ct.createPortal = function(e, t) {
    var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!fd(t))
        throw Error(N(200));
    return uw(e, t, null, r)
}
;
ct.createRoot = function(e, t) {
    if (!fd(e))
        throw Error(N(299));
    var r = !1
      , o = ""
      , n = Mv;
    return t != null && (t.unstable_strictMode === !0 && (r = !0),
    t.identifierPrefix !== void 0 && (o = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (n = t.onRecoverableError)),
    t = ud(e, 1, !1, null, null, r, !1, o, n),
    e[ir] = t.current,
    ei(e.nodeType === 8 ? e.parentNode : e),
    new dd(t)
}
;
ct.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(N(188)) : (e = Object.keys(e).join(","),
        Error(N(268, e)));
    return e = sg(t),
    e = e === null ? null : e.stateNode,
    e
}
;
ct.flushSync = function(e) {
    return vo(e)
}
;
ct.hydrate = function(e, t, r) {
    if (!Ss(t))
        throw Error(N(200));
    return _s(null, e, t, !0, r)
}
;
ct.hydrateRoot = function(e, t, r) {
    if (!fd(e))
        throw Error(N(405));
    var o = r != null && r.hydratedSources || null
      , n = !1
      , i = ""
      , a = Mv;
    if (r != null && (r.unstable_strictMode === !0 && (n = !0),
    r.identifierPrefix !== void 0 && (i = r.identifierPrefix),
    r.onRecoverableError !== void 0 && (a = r.onRecoverableError)),
    t = Lv(t, null, e, 1, r ?? null, n, !1, i, a),
    e[ir] = t.current,
    ei(e),
    o)
        for (e = 0; e < o.length; e++)
            r = o[e],
            n = r._getVersion,
            n = n(r._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [r, n] : t.mutableSourceEagerHydrationData.push(r, n);
    return new xs(t)
}
;
ct.render = function(e, t, r) {
    if (!Ss(t))
        throw Error(N(200));
    return _s(null, e, t, !1, r)
}
;
ct.unmountComponentAtNode = function(e) {
    if (!Ss(e))
        throw Error(N(40));
    return e._reactRootContainer ? (vo(function() {
        _s(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[ir] = null
        })
    }),
    !0) : !1
}
;
ct.unstable_batchedUpdates = id;
ct.unstable_renderSubtreeIntoContainer = function(e, t, r, o) {
    if (!Ss(r))
        throw Error(N(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(N(38));
    return _s(e, t, r, !1, o)
}
;
ct.version = "18.2.0-next-9e3b772b8-20220608";
function qv() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qv)
        } catch (e) {
            console.error(e)
        }
}
qv(),
Lh.exports = ct;
var pd = Lh.exports;
const Qi = yc(pd);
var ip = pd;
Kl.createRoot = ip.createRoot,
Kl.hydrateRoot = ip.hydrateRoot;
const hw = "modulepreload"
  , gw = function(e) {
    return "/" + e
}
  , ap = {}
  , Bs = function(t, r, o) {
    let n = Promise.resolve();
    if (r && r.length > 0) {
        const i = document.getElementsByTagName("link");
        n = Promise.all(r.map(a=>{
            if (a = gw(a),
            a in ap)
                return;
            ap[a] = !0;
            const s = a.endsWith(".css")
              , l = s ? '[rel="stylesheet"]' : "";
            if (!!o)
                for (let c = i.length - 1; c >= 0; c--) {
                    const f = i[c];
                    if (f.href === a && (!s || f.rel === "stylesheet"))
                        return
                }
            else if (document.querySelector(`link[href="${a}"]${l}`))
                return;
            const d = document.createElement("link");
            if (d.rel = s ? "stylesheet" : hw,
            s || (d.as = "script",
            d.crossOrigin = ""),
            d.href = a,
            document.head.appendChild(d),
            s)
                return new Promise((c,f)=>{
                    d.addEventListener("load", c),
                    d.addEventListener("error", ()=>f(new Error(`Unable to preload CSS for ${a}`)))
                }
                )
        }
        ))
    }
    return n.then(()=>t()).catch(i=>{
        const a = new Event("vite:preloadError",{
            cancelable: !0
        });
        if (a.payload = i,
        window.dispatchEvent(a),
        !a.defaultPrevented)
            throw i
    }
    )
}
  , vw = ["Top", "Right", "Bottom", "Left"];
function _i(e, t, ...r) {
    const [o,n=o,i=o,a=n] = r
      , s = [o, n, i, a]
      , l = {};
    for (let u = 0; u < s.length; u += 1)
        if (s[u] || s[u] === 0) {
            const d = e + vw[u] + t;
            l[d] = s[u]
        }
    return l
}
function qu(...e) {
    return _i("border", "Width", ...e)
}
function Hu(...e) {
    return _i("border", "Style", ...e)
}
function Wu(...e) {
    return _i("border", "Color", ...e)
}
const mw = ["none", "hidden", "dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset"];
function Bi(e) {
    return mw.includes(e)
}
function yw(...e) {
    return Bi(e[0]) ? {
        ...Hu(e[0]),
        ...e[1] && qu(e[1]),
        ...e[2] && Wu(e[2])
    } : {
        ...qu(e[0]),
        ...e[1] && Hu(e[1]),
        ...e[2] && Wu(e[2])
    }
}
function bw(...e) {
    return Bi(e[0]) ? {
        borderLeftStyle: e[0],
        ...e[1] && {
            borderLeftWidth: e[1]
        },
        ...e[2] && {
            borderLeftColor: e[2]
        }
    } : {
        borderLeftWidth: e[0],
        ...e[1] && {
            borderLeftStyle: e[1]
        },
        ...e[2] && {
            borderLeftColor: e[2]
        }
    }
}
function ww(...e) {
    return Bi(e[0]) ? {
        borderBottomStyle: e[0],
        ...e[1] && {
            borderBottomWidth: e[1]
        },
        ...e[2] && {
            borderBottomColor: e[2]
        }
    } : {
        borderBottomWidth: e[0],
        ...e[1] && {
            borderBottomStyle: e[1]
        },
        ...e[2] && {
            borderBottomColor: e[2]
        }
    }
}
function kw(...e) {
    return Bi(e[0]) ? {
        borderRightStyle: e[0],
        ...e[1] && {
            borderRightWidth: e[1]
        },
        ...e[2] && {
            borderRightColor: e[2]
        }
    } : {
        borderRightWidth: e[0],
        ...e[1] && {
            borderRightStyle: e[1]
        },
        ...e[2] && {
            borderRightColor: e[2]
        }
    }
}
function xw(...e) {
    return Bi(e[0]) ? {
        borderTopStyle: e[0],
        ...e[1] && {
            borderTopWidth: e[1]
        },
        ...e[2] && {
            borderTopColor: e[2]
        }
    } : {
        borderTopWidth: e[0],
        ...e[1] && {
            borderTopStyle: e[1]
        },
        ...e[2] && {
            borderTopColor: e[2]
        }
    }
}
function Sw(e, t=e, r=e, o=t) {
    return {
        borderBottomRightRadius: r,
        borderBottomLeftRadius: o,
        borderTopRightRadius: t,
        borderTopLeftRadius: e
    }
}
const _w = e=>typeof e == "string" && /(\d+(\w+|%))/.test(e)
  , Ji = e=>typeof e == "number" && !Number.isNaN(e)
  , Bw = e=>e === "initial"
  , sp = e=>e === "auto"
  , Ew = e=>e === "none"
  , Pw = ["content", "fit-content", "max-content", "min-content"]
  , _l = e=>Pw.some(t=>e === t) || _w(e);
function Cw(...e) {
    const t = e.length === 1
      , r = e.length === 2
      , o = e.length === 3;
    if (t) {
        const [n] = e;
        if (Bw(n))
            return {
                flexGrow: 0,
                flexShrink: 1,
                flexBasis: "auto"
            };
        if (sp(n))
            return {
                flexGrow: 1,
                flexShrink: 1,
                flexBasis: "auto"
            };
        if (Ew(n))
            return {
                flexGrow: 0,
                flexShrink: 0,
                flexBasis: "auto"
            };
        if (Ji(n))
            return {
                flexGrow: n,
                flexShrink: 1,
                flexBasis: 0
            };
        if (_l(n))
            return {
                flexGrow: 1,
                flexShrink: 1,
                flexBasis: n
            }
    }
    if (r) {
        const [n,i] = e;
        if (Ji(i))
            return {
                flexGrow: n,
                flexShrink: i,
                flexBasis: 0
            };
        if (_l(i))
            return {
                flexGrow: n,
                flexShrink: 1,
                flexBasis: i
            }
    }
    if (o) {
        const [n,i,a] = e;
        if (Ji(n) && Ji(i) && (sp(a) || _l(a)))
            return {
                flexGrow: n,
                flexShrink: i,
                flexBasis: a
            }
    }
    return {}
}
function Tw(e, t=e) {
    return {
        columnGap: e,
        rowGap: t
    }
}
const Nw = /var\(.*\)/gi;
function zw(e) {
    return e === void 0 || typeof e == "number" || typeof e == "string" && !Nw.test(e)
}
const Fw = /^[a-zA-Z0-9\-_\\#;]+$/
  , Rw = /^-moz-initial$|^auto$|^initial$|^inherit$|^revert$|^unset$|^span \d+$|^\d.*/;
function Bl(e) {
    return e !== void 0 && typeof e == "string" && Fw.test(e) && !Rw.test(e)
}
function Dw(...e) {
    if (e.some(i=>!zw(i)))
        return {};
    const t = e[0] !== void 0 ? e[0] : "auto"
      , r = e[1] !== void 0 ? e[1] : Bl(t) ? t : "auto"
      , o = e[2] !== void 0 ? e[2] : Bl(t) ? t : "auto"
      , n = e[3] !== void 0 ? e[3] : Bl(r) ? r : "auto";
    return {
        gridRowStart: t,
        gridColumnStart: r,
        gridRowEnd: o,
        gridColumnEnd: n
    }
}
function jw(...e) {
    return _i("margin", "", ...e)
}
function Iw(e, t=e) {
    return {
        marginBlockStart: e,
        marginBlockEnd: t
    }
}
function Aw(e, t=e) {
    return {
        marginInlineStart: e,
        marginInlineEnd: t
    }
}
function Ow(...e) {
    return _i("padding", "", ...e)
}
function Lw(e, t=e) {
    return {
        paddingBlockStart: e,
        paddingBlockEnd: t
    }
}
function Mw(e, t=e) {
    return {
        paddingInlineStart: e,
        paddingInlineEnd: t
    }
}
function qw(e, t=e) {
    return {
        overflowX: e,
        overflowY: t
    }
}
function Hw(...e) {
    const [t,r=t,o=t,n=r] = e;
    return {
        top: t,
        right: r,
        bottom: o,
        left: n
    }
}
function Ww(e, t, r) {
    return {
        outlineWidth: e,
        ...t && {
            outlineStyle: t
        },
        ...r && {
            outlineColor: r
        }
    }
}
function $w(...e) {
    return Vw(e) ? {
        transitionDelay: e[0],
        transitionDuration: e[0],
        transitionProperty: e[0],
        transitionTimingFunction: e[0]
    } : Gw(e).reduce((r,[o,n="0s",i="0s",a="ease"],s)=>(s === 0 ? (r.transitionProperty = o,
    r.transitionDuration = n,
    r.transitionDelay = i,
    r.transitionTimingFunction = a) : (r.transitionProperty += `, ${o}`,
    r.transitionDuration += `, ${n}`,
    r.transitionDelay += `, ${i}`,
    r.transitionTimingFunction += `, ${a}`),
    r), {})
}
const Uw = ["-moz-initial", "inherit", "initial", "revert", "unset"];
function Vw(e) {
    return e.length === 1 && Uw.includes(e[0])
}
function Gw(e) {
    return e.length === 1 && Array.isArray(e[0]) ? e[0] : [e]
}
function Kw(e, ...t) {
    if (t.length === 0)
        return Qw(e) ? {
            textDecorationStyle: e
        } : {
            textDecorationLine: e
        };
    const [r,o,n] = t;
    return {
        textDecorationLine: e,
        ...r && {
            textDecorationStyle: r
        },
        ...o && {
            textDecorationColor: o
        },
        ...n && {
            textDecorationThickness: n
        }
    }
}
const Xw = ["dashed", "dotted", "double", "solid", "wavy"];
function Qw(e) {
    return Xw.includes(e)
}
const El = typeof window > "u" ? global : window
  , Pl = "@griffel/";
function Jw(e, t) {
    return El[Symbol.for(Pl + e)] || (El[Symbol.for(Pl + e)] = t),
    El[Symbol.for(Pl + e)]
}
const $u = Jw("DEFINITION_LOOKUP_TABLE", {})
  , va = "data-make-styles-bucket"
  , Uu = "f"
  , Vu = 7
  , hd = "___"
  , Yw = hd.length + Vu
  , Zw = 0
  , ek = 1
  , tk = {
    all: 1,
    animation: 1,
    background: 1,
    backgroundPosition: 1,
    border: 1,
    borderBlock: 1,
    borderBlockEnd: 1,
    borderBlockStart: 1,
    borderBottom: 1,
    borderColor: 1,
    borderImage: 1,
    borderInline: 1,
    borderInlineEnd: 1,
    borderInlineStart: 1,
    borderLeft: 1,
    borderRadius: 1,
    borderRight: 1,
    borderStyle: 1,
    borderTop: 1,
    borderWidth: 1,
    caret: 1,
    columns: 1,
    columnRule: 1,
    containIntrinsicSize: 1,
    container: 1,
    flex: 1,
    flexFlow: 1,
    font: 1,
    gap: 1,
    grid: 1,
    gridArea: 1,
    gridColumn: 1,
    gridRow: 1,
    gridTemplate: 1,
    inset: 1,
    insetBlock: 1,
    insetInline: 1,
    lineClamp: 1,
    listStyle: 1,
    margin: 1,
    marginBlock: 1,
    marginInline: 1,
    mask: 1,
    maskBorder: 1,
    motion: 1,
    offset: 1,
    outline: 1,
    overflow: 1,
    overscrollBehavior: 1,
    padding: 1,
    paddingBlock: 1,
    paddingInline: 1,
    placeItems: 1,
    placeContent: 1,
    placeSelf: 1,
    scrollMargin: 1,
    scrollMarginBlock: 1,
    scrollMarginInline: 1,
    scrollPadding: 1,
    scrollPaddingBlock: 1,
    scrollPaddingInline: 1,
    scrollSnapMargin: 1,
    scrollTimeline: 1,
    textDecoration: 1,
    textEmphasis: 1,
    transition: 1
};
function ui(e) {
    for (var t = 0, r, o = 0, n = e.length; n >= 4; ++o,
    n -= 4)
        r = e.charCodeAt(o) & 255 | (e.charCodeAt(++o) & 255) << 8 | (e.charCodeAt(++o) & 255) << 16 | (e.charCodeAt(++o) & 255) << 24,
        r = (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16),
        r ^= r >>> 24,
        t = (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
    switch (n) {
    case 3:
        t ^= (e.charCodeAt(o + 2) & 255) << 16;
    case 2:
        t ^= (e.charCodeAt(o + 1) & 255) << 8;
    case 1:
        t ^= e.charCodeAt(o) & 255,
        t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16)
    }
    return t ^= t >>> 13,
    t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16),
    ((t ^ t >>> 15) >>> 0).toString(36)
}
function rk(e) {
    const t = e.length;
    if (t === Vu)
        return e;
    for (let r = t; r < Vu; r++)
        e += "0";
    return e
}
function Hv(e, t, r=[]) {
    return hd + rk(ui(e + t))
}
function Wv(e, t) {
    let r = "";
    for (const o in e) {
        const n = e[o];
        if (n) {
            const i = Array.isArray(n);
            t === "rtl" ? r += (i ? n[1] : n) + " " : r += (i ? n[0] : n) + " "
        }
    }
    return r.slice(0, -1)
}
function Qa(e, t) {
    const r = {};
    for (const o in e) {
        const n = Wv(e[o], t);
        if (n === "") {
            r[o] = "";
            continue
        }
        const i = Hv(n, t)
          , a = i + " " + n;
        $u[i] = [e[o], t],
        r[o] = a
    }
    return r
}
const lp = {};
function W() {
    let e = null
      , t = ""
      , r = "";
    const o = new Array(arguments.length);
    for (let u = 0; u < arguments.length; u++) {
        const d = arguments[u];
        if (typeof d == "string" && d !== "") {
            const c = d.indexOf(hd);
            if (c === -1)
                t += d + " ";
            else {
                const f = d.substr(c, Yw);
                c > 0 && (t += d.slice(0, c)),
                r += f,
                o[u] = f
            }
        }
    }
    if (r === "")
        return t.slice(0, -1);
    const n = lp[r];
    if (n !== void 0)
        return t + n;
    const i = [];
    for (let u = 0; u < arguments.length; u++) {
        const d = o[u];
        if (d) {
            const c = $u[d];
            c && (i.push(c[Zw]),
            e = c[ek])
        }
    }
    const a = Object.assign.apply(Object, [{}].concat(i));
    let s = Wv(a, e);
    const l = Hv(s, e, o);
    return s = l + " " + s,
    lp[r] = s,
    $u[l] = [a, e],
    t + s
}
function ok(e) {
    return Array.isArray(e) ? e : [e]
}
function nk(e, t, r) {
    const o = [];
    if (r[va] = t,
    e)
        for (const i in r)
            e.setAttribute(i, r[i]);
    function n(i) {
        return e != null && e.sheet ? e.sheet.insertRule(i, e.sheet.cssRules.length) : o.push(i)
    }
    return {
        elementAttributes: r,
        insertRule: n,
        element: e,
        bucketName: t,
        cssRules() {
            return e != null && e.sheet ? Array.from(e.sheet.cssRules).map(i=>i.cssText) : o
        }
    }
}
const ik = ["r", "d", "l", "v", "w", "f", "i", "h", "a", "s", "k", "t", "m", "c"]
  , up = ik.reduce((e,t,r)=>(e[t] = r,
e), {});
function ak(e, t, r, o, n={}) {
    const i = e === "m"
      , a = i ? e + n.m : e;
    if (!o.stylesheets[a]) {
        const s = t && t.createElement("style")
          , l = nk(s, e, {
            ...o.styleElementAttributes,
            ...i && {
                media: n.m
            }
        });
        o.stylesheets[a] = l,
        t && s && t.head.insertBefore(s, sk(t, r, e, o, n))
    }
    return o.stylesheets[a]
}
function sk(e, t, r, o, n) {
    const i = up[r];
    let a = d=>i - up[d.getAttribute(va)]
      , s = e.head.querySelectorAll(`[${va}]`);
    if (r === "m" && n) {
        const d = e.head.querySelectorAll(`[${va}="${r}"]`);
        d.length && (s = d,
        a = c=>o.compareMediaQueries(n.m, c.media))
    }
    const l = s.length;
    let u = l - 1;
    for (; u >= 0; ) {
        const d = s.item(u);
        if (a(d) > 0)
            return d.nextSibling;
        u--
    }
    return l > 0 ? s.item(0) : t ? t.nextSibling : null
}
function cp(e, t) {
    try {
        e.insertRule(t)
    } catch {}
}
let lk = 0;
const uk = (e,t)=>e < t ? -1 : e > t ? 1 : 0;
function ck(e=typeof document > "u" ? void 0 : document, t={}) {
    const {unstable_filterCSSRule: r, insertionPoint: o, styleElementAttributes: n, compareMediaQueries: i=uk} = t
      , a = {
        insertionCache: {},
        stylesheets: {},
        styleElementAttributes: Object.freeze(n),
        compareMediaQueries: i,
        id: `d${lk++}`,
        insertCSSRules(s) {
            for (const l in s) {
                const u = s[l];
                for (let d = 0, c = u.length; d < c; d++) {
                    const [f,h] = ok(u[d])
                      , p = ak(l, e, o || null, a, h);
                    a.insertionCache[f] || (a.insertionCache[f] = l,
                    r ? r(f) && cp(p, f) : cp(p, f))
                }
            }
        }
    };
    return a
}
const Es = ()=>{
    const e = {};
    return function(r, o) {
        e[r.id] === void 0 && (r.insertCSSRules(o),
        e[r.id] = !0)
    }
}
;
function $v(e) {
    return e.reduce(function(t, r) {
        var o = r[0]
          , n = r[1];
        return t[o] = n,
        t[n] = o,
        t
    }, {})
}
function dk(e) {
    return typeof e == "boolean"
}
function fk(e) {
    return typeof e == "function"
}
function zn(e) {
    return typeof e == "number"
}
function pk(e) {
    return e === null || typeof e > "u"
}
function hk(e) {
    return e && typeof e == "object"
}
function gk(e) {
    return typeof e == "string"
}
function ma(e, t) {
    return e.indexOf(t) !== -1
}
function vk(e) {
    return parseFloat(e) === 0 ? e : e[0] === "-" ? e.slice(1) : "-" + e
}
function Yi(e, t, r, o) {
    return t + vk(r) + o
}
function mk(e) {
    var t = e.indexOf(".");
    if (t === -1)
        e = 100 - parseFloat(e) + "%";
    else {
        var r = e.length - t - 2;
        e = 100 - parseFloat(e),
        e = e.toFixed(r) + "%"
    }
    return e
}
function Uv(e) {
    return e.replace(/ +/g, " ").split(" ").map(function(t) {
        return t.trim()
    }).filter(Boolean).reduce(function(t, r) {
        var o = t.list
          , n = t.state
          , i = (r.match(/\(/g) || []).length
          , a = (r.match(/\)/g) || []).length;
        return n.parensDepth > 0 ? o[o.length - 1] = o[o.length - 1] + " " + r : o.push(r),
        n.parensDepth += i - a,
        {
            list: o,
            state: n
        }
    }, {
        list: [],
        state: {
            parensDepth: 0
        }
    }).list
}
function dp(e) {
    var t = Uv(e);
    if (t.length <= 3 || t.length > 4)
        return e;
    var r = t[0]
      , o = t[1]
      , n = t[2]
      , i = t[3];
    return [r, i, n, o].join(" ")
}
function yk(e) {
    return !dk(e) && !pk(e)
}
function bk(e) {
    for (var t = [], r = 0, o = 0, n = !1; o < e.length; )
        !n && e[o] === "," ? (t.push(e.substring(r, o).trim()),
        o++,
        r = o) : e[o] === "(" ? (n = !0,
        o++) : (e[o] === ")" && (n = !1),
        o++);
    return r != o && t.push(e.substring(r, o + 1)),
    t
}
var T = {
    padding: function(t) {
        var r = t.value;
        return zn(r) ? r : dp(r)
    },
    textShadow: function(t) {
        var r = t.value
          , o = bk(r).map(function(n) {
            return n.replace(/(^|\s)(-*)([.|\d]+)/, function(i, a, s, l) {
                if (l === "0")
                    return i;
                var u = s === "" ? "-" : "";
                return "" + a + u + l
            })
        });
        return o.join(",")
    },
    borderColor: function(t) {
        var r = t.value;
        return dp(r)
    },
    borderRadius: function(t) {
        var r = t.value;
        if (zn(r))
            return r;
        if (ma(r, "/")) {
            var o = r.split("/")
              , n = o[0]
              , i = o[1]
              , a = T.borderRadius({
                value: n.trim()
            })
              , s = T.borderRadius({
                value: i.trim()
            });
            return a + " / " + s
        }
        var l = Uv(r);
        switch (l.length) {
        case 2:
            return l.reverse().join(" ");
        case 4:
            {
                var u = l[0]
                  , d = l[1]
                  , c = l[2]
                  , f = l[3];
                return [d, u, f, c].join(" ")
            }
        default:
            return r
        }
    },
    background: function(t) {
        var r = t.value
          , o = t.valuesToConvert
          , n = t.isRtl
          , i = t.bgImgDirectionRegex
          , a = t.bgPosDirectionRegex;
        if (zn(r))
            return r;
        var s = r.replace(/(url\(.*?\))|(rgba?\(.*?\))|(hsl\(.*?\))|(#[a-fA-F0-9]+)|((^| )(\D)+( |$))/g, "").trim();
        return r = r.replace(s, T.backgroundPosition({
            value: s,
            valuesToConvert: o,
            isRtl: n,
            bgPosDirectionRegex: a
        })),
        T.backgroundImage({
            value: r,
            valuesToConvert: o,
            bgImgDirectionRegex: i
        })
    },
    backgroundImage: function(t) {
        var r = t.value
          , o = t.valuesToConvert
          , n = t.bgImgDirectionRegex;
        return !ma(r, "url(") && !ma(r, "linear-gradient(") ? r : r.replace(n, function(i, a, s) {
            return i.replace(s, o[s])
        })
    },
    backgroundPosition: function(t) {
        var r = t.value
          , o = t.valuesToConvert
          , n = t.isRtl
          , i = t.bgPosDirectionRegex;
        return r.replace(n ? /^((-|\d|\.)+%)/ : null, function(a, s) {
            return mk(s)
        }).replace(i, function(a) {
            return o[a]
        })
    },
    backgroundPositionX: function(t) {
        var r = t.value
          , o = t.valuesToConvert
          , n = t.isRtl
          , i = t.bgPosDirectionRegex;
        return zn(r) ? r : T.backgroundPosition({
            value: r,
            valuesToConvert: o,
            isRtl: n,
            bgPosDirectionRegex: i
        })
    },
    transition: function(t) {
        var r = t.value
          , o = t.propertiesToConvert;
        return r.split(/,\s*/g).map(function(n) {
            var i = n.split(" ");
            return i[0] = o[i[0]] || i[0],
            i.join(" ")
        }).join(", ")
    },
    transitionProperty: function(t) {
        var r = t.value
          , o = t.propertiesToConvert;
        return r.split(/,\s*/g).map(function(n) {
            return o[n] || n
        }).join(", ")
    },
    transform: function(t) {
        var r = t.value
          , o = "[^\\u0020-\\u007e]"
          , n = "(?:(?:(?:\\[0-9a-f]{1,6})(?:\\r\\n|\\s)?)|\\\\[^\\r\\n\\f0-9a-f])"
          , i = "((?:-?" + ("(?:[0-9]*\\.[0-9]+|[0-9]+)(?:\\s*(?:em|ex|px|cm|mm|in|pt|pc|deg|rad|grad|ms|s|hz|khz|%)|" + ("-?" + ("(?:[_a-z]|" + o + "|" + n + ")") + ("(?:[_a-z0-9-]|" + o + "|" + n + ")") + "*") + ")?") + ")|(?:inherit|auto))"
          , a = new RegExp("(translateX\\s*\\(\\s*)" + i + "(\\s*\\))","gi")
          , s = new RegExp("(translate\\s*\\(\\s*)" + i + "((?:\\s*,\\s*" + i + "){0,1}\\s*\\))","gi")
          , l = new RegExp("(translate3d\\s*\\(\\s*)" + i + "((?:\\s*,\\s*" + i + "){0,2}\\s*\\))","gi")
          , u = new RegExp("(rotate[ZY]?\\s*\\(\\s*)" + i + "(\\s*\\))","gi");
        return r.replace(a, Yi).replace(s, Yi).replace(l, Yi).replace(u, Yi)
    }
};
T.objectPosition = T.backgroundPosition;
T.margin = T.padding;
T.borderWidth = T.padding;
T.boxShadow = T.textShadow;
T.webkitBoxShadow = T.boxShadow;
T.mozBoxShadow = T.boxShadow;
T.WebkitBoxShadow = T.boxShadow;
T.MozBoxShadow = T.boxShadow;
T.borderStyle = T.borderColor;
T.webkitTransform = T.transform;
T.mozTransform = T.transform;
T.WebkitTransform = T.transform;
T.MozTransform = T.transform;
T.transformOrigin = T.backgroundPosition;
T.webkitTransformOrigin = T.transformOrigin;
T.mozTransformOrigin = T.transformOrigin;
T.WebkitTransformOrigin = T.transformOrigin;
T.MozTransformOrigin = T.transformOrigin;
T.webkitTransition = T.transition;
T.mozTransition = T.transition;
T.WebkitTransition = T.transition;
T.MozTransition = T.transition;
T.webkitTransitionProperty = T.transitionProperty;
T.mozTransitionProperty = T.transitionProperty;
T.WebkitTransitionProperty = T.transitionProperty;
T.MozTransitionProperty = T.transitionProperty;
T["text-shadow"] = T.textShadow;
T["border-color"] = T.borderColor;
T["border-radius"] = T.borderRadius;
T["background-image"] = T.backgroundImage;
T["background-position"] = T.backgroundPosition;
T["background-position-x"] = T.backgroundPositionX;
T["object-position"] = T.objectPosition;
T["border-width"] = T.padding;
T["box-shadow"] = T.textShadow;
T["-webkit-box-shadow"] = T.textShadow;
T["-moz-box-shadow"] = T.textShadow;
T["border-style"] = T.borderColor;
T["-webkit-transform"] = T.transform;
T["-moz-transform"] = T.transform;
T["transform-origin"] = T.transformOrigin;
T["-webkit-transform-origin"] = T.transformOrigin;
T["-moz-transform-origin"] = T.transformOrigin;
T["-webkit-transition"] = T.transition;
T["-moz-transition"] = T.transition;
T["transition-property"] = T.transitionProperty;
T["-webkit-transition-property"] = T.transitionProperty;
T["-moz-transition-property"] = T.transitionProperty;
var Vv = $v([["paddingLeft", "paddingRight"], ["marginLeft", "marginRight"], ["left", "right"], ["borderLeft", "borderRight"], ["borderLeftColor", "borderRightColor"], ["borderLeftStyle", "borderRightStyle"], ["borderLeftWidth", "borderRightWidth"], ["borderTopLeftRadius", "borderTopRightRadius"], ["borderBottomLeftRadius", "borderBottomRightRadius"], ["padding-left", "padding-right"], ["margin-left", "margin-right"], ["border-left", "border-right"], ["border-left-color", "border-right-color"], ["border-left-style", "border-right-style"], ["border-left-width", "border-right-width"], ["border-top-left-radius", "border-top-right-radius"], ["border-bottom-left-radius", "border-bottom-right-radius"]])
  , wk = ["content"]
  , fp = $v([["ltr", "rtl"], ["left", "right"], ["w-resize", "e-resize"], ["sw-resize", "se-resize"], ["nw-resize", "ne-resize"]])
  , kk = new RegExp("(^|\\W|_)((ltr)|(rtl)|(left)|(right))(\\W|_|$)","g")
  , xk = new RegExp("(left)|(right)");
function Gv(e) {
    return Object.keys(e).reduce(function(t, r) {
        var o = e[r];
        if (gk(o) && (o = o.trim()),
        ma(wk, r))
            return t[r] = o,
            t;
        var n = Gu(r, o)
          , i = n.key
          , a = n.value;
        return t[i] = a,
        t
    }, Array.isArray(e) ? [] : {})
}
function Gu(e, t) {
    var r = /\/\*\s?@noflip\s?\*\//.test(t)
      , o = r ? e : Sk(e)
      , n = r ? t : _k(o, t);
    return {
        key: o,
        value: n
    }
}
function Sk(e) {
    return Vv[e] || e
}
function _k(e, t) {
    if (!yk(t))
        return t;
    if (hk(t))
        return Gv(t);
    var r = zn(t), o = fk(t), n = r || o ? t : t.replace(/ !important.*?$/, ""), i = !r && n.length !== t.length, a = T[e], s;
    return a ? s = a({
        value: n,
        valuesToConvert: fp,
        propertiesToConvert: Vv,
        isRtl: !0,
        bgImgDirectionRegex: kk,
        bgPosDirectionRegex: xk
    }) : s = fp[n] || n,
    i ? s + " !important" : s
}
const Bk = /[A-Z]/g
  , Ek = /^ms-/
  , Cl = {};
function Pk(e) {
    return "-" + e.toLowerCase()
}
function Fn(e) {
    if (Object.prototype.hasOwnProperty.call(Cl, e))
        return Cl[e];
    if (e.substr(0, 2) === "--")
        return e;
    const t = e.replace(Bk, Pk);
    return Cl[e] = Ek.test(t) ? "-" + t : t
}
function Kv(e) {
    return e.charAt(0) === "&" ? e.slice(1) : e
}
var Wn = "-moz-"
  , Et = "-webkit-"
  , Xv = "comm"
  , Ps = "rule"
  , gd = "decl"
  , Ck = "@media"
  , Tk = "@import"
  , Nk = "@supports"
  , zk = "@keyframes"
  , Qv = "@layer"
  , Jv = Math.abs
  , Cs = String.fromCharCode
  , Fk = Object.assign;
function Rk(e, t) {
    return qe(e, 0) ^ 45 ? (((t << 2 ^ qe(e, 0)) << 2 ^ qe(e, 1)) << 2 ^ qe(e, 2)) << 2 ^ qe(e, 3) : 0
}
function Yv(e) {
    return e.trim()
}
function Zv(e, t) {
    return (e = t.exec(e)) ? e[0] : e
}
function Ge(e, t, r) {
    return e.replace(t, r)
}
function em(e, t, r) {
    return e.indexOf(t, r)
}
function qe(e, t) {
    return e.charCodeAt(t) | 0
}
function ci(e, t, r) {
    return e.slice(t, r)
}
function qt(e) {
    return e.length
}
function tm(e) {
    return e.length
}
function ao(e, t) {
    return t.push(e),
    e
}
function Dk(e, t) {
    return e.map(t).join("")
}
var Ts = 1
  , tn = 1
  , rm = 0
  , lt = 0
  , ue = 0
  , dn = "";
function Ns(e, t, r, o, n, i, a, s) {
    return {
        value: e,
        root: t,
        parent: r,
        type: o,
        props: n,
        children: i,
        line: Ts,
        column: tn,
        length: a,
        return: "",
        siblings: s
    }
}
function Tl(e, t) {
    return Fk(Ns("", null, null, "", null, null, 0, e.siblings), e, {
        length: -e.length
    }, t)
}
function jk() {
    return ue
}
function Ik() {
    return ue = lt > 0 ? qe(dn, --lt) : 0,
    tn--,
    ue === 10 && (tn = 1,
    Ts--),
    ue
}
function bt() {
    return ue = lt < rm ? qe(dn, lt++) : 0,
    tn++,
    ue === 10 && (tn = 1,
    Ts++),
    ue
}
function uo() {
    return qe(dn, lt)
}
function ya() {
    return lt
}
function zs(e, t) {
    return ci(dn, e, t)
}
function Ja(e) {
    switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
        return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
        return 4;
    case 58:
        return 3;
    case 34:
    case 39:
    case 40:
    case 91:
        return 2;
    case 41:
    case 93:
        return 1
    }
    return 0
}
function om(e) {
    return Ts = tn = 1,
    rm = qt(dn = e),
    lt = 0,
    []
}
function nm(e) {
    return dn = "",
    e
}
function ba(e) {
    return Yv(zs(lt - 1, Ku(e === 91 ? e + 2 : e === 40 ? e + 1 : e)))
}
function Ak(e) {
    return nm(Lk(om(e)))
}
function Ok(e) {
    for (; (ue = uo()) && ue < 33; )
        bt();
    return Ja(e) > 2 || Ja(ue) > 3 ? "" : " "
}
function Lk(e) {
    for (; bt(); )
        switch (Ja(ue)) {
        case 0:
            ao(im(lt - 1), e);
            break;
        case 2:
            ao(ba(ue), e);
            break;
        default:
            ao(Cs(ue), e)
        }
    return e
}
function Mk(e, t) {
    for (; --t && bt() && !(ue < 48 || ue > 102 || ue > 57 && ue < 65 || ue > 70 && ue < 97); )
        ;
    return zs(e, ya() + (t < 6 && uo() == 32 && bt() == 32))
}
function Ku(e) {
    for (; bt(); )
        switch (ue) {
        case e:
            return lt;
        case 34:
        case 39:
            e !== 34 && e !== 39 && Ku(ue);
            break;
        case 40:
            e === 41 && Ku(e);
            break;
        case 92:
            bt();
            break
        }
    return lt
}
function qk(e, t) {
    for (; bt() && e + ue !== 57; )
        if (e + ue === 84 && uo() === 47)
            break;
    return "/*" + zs(t, lt - 1) + "*" + Cs(e === 47 ? e : bt())
}
function im(e) {
    for (; !Ja(uo()); )
        bt();
    return zs(e, lt)
}
function am(e) {
    return nm(wa("", null, null, null, [""], e = om(e), 0, [0], e))
}
function wa(e, t, r, o, n, i, a, s, l) {
    for (var u = 0, d = 0, c = a, f = 0, h = 0, p = 0, m = 1, w = 1, v = 1, g = 0, y = "", x = n, S = i, _ = o, k = y; w; )
        switch (p = g,
        g = bt()) {
        case 40:
            if (p != 108 && qe(k, c - 1) == 58) {
                em(k += Ge(ba(g), "&", "&\f"), "&\f", Jv(u ? s[u - 1] : 0)) != -1 && (v = -1);
                break
            }
        case 34:
        case 39:
        case 91:
            k += ba(g);
            break;
        case 9:
        case 10:
        case 13:
        case 32:
            k += Ok(p);
            break;
        case 92:
            k += Mk(ya() - 1, 7);
            continue;
        case 47:
            switch (uo()) {
            case 42:
            case 47:
                ao(Hk(qk(bt(), ya()), t, r, l), l);
                break;
            default:
                k += "/"
            }
            break;
        case 123 * m:
            s[u++] = qt(k) * v;
        case 125 * m:
        case 59:
        case 0:
            switch (g) {
            case 0:
            case 125:
                w = 0;
            case 59 + d:
                v == -1 && (k = Ge(k, /\f/g, "")),
                h > 0 && qt(k) - c && ao(h > 32 ? hp(k + ";", o, r, c - 1, l) : hp(Ge(k, " ", "") + ";", o, r, c - 2, l), l);
                break;
            case 59:
                k += ";";
            default:
                if (ao(_ = pp(k, t, r, u, d, n, s, y, x = [], S = [], c, i), i),
                g === 123)
                    if (d === 0)
                        wa(k, t, _, _, x, i, c, s, S);
                    else
                        switch (f === 99 && qe(k, 3) === 110 ? 100 : f) {
                        case 100:
                        case 108:
                        case 109:
                        case 115:
                            wa(e, _, _, o && ao(pp(e, _, _, 0, 0, n, s, y, n, x = [], c, S), S), n, S, c, s, o ? x : S);
                            break;
                        default:
                            wa(k, _, _, _, [""], S, 0, s, S)
                        }
            }
            u = d = h = 0,
            m = v = 1,
            y = k = "",
            c = a;
            break;
        case 58:
            c = 1 + qt(k),
            h = p;
        default:
            if (m < 1) {
                if (g == 123)
                    --m;
                else if (g == 125 && m++ == 0 && Ik() == 125)
                    continue
            }
            switch (k += Cs(g),
            g * m) {
            case 38:
                v = d > 0 ? 1 : (k += "\f",
                -1);
                break;
            case 44:
                s[u++] = (qt(k) - 1) * v,
                v = 1;
                break;
            case 64:
                uo() === 45 && (k += ba(bt())),
                f = uo(),
                d = c = qt(y = k += im(ya())),
                g++;
                break;
            case 45:
                p === 45 && qt(k) == 2 && (m = 0)
            }
        }
    return i
}
function pp(e, t, r, o, n, i, a, s, l, u, d, c) {
    for (var f = n - 1, h = n === 0 ? i : [""], p = tm(h), m = 0, w = 0, v = 0; m < o; ++m)
        for (var g = 0, y = ci(e, f + 1, f = Jv(w = a[m])), x = e; g < p; ++g)
            (x = Yv(w > 0 ? h[g] + " " + y : Ge(y, /&\f/g, h[g]))) && (l[v++] = x);
    return Ns(e, t, r, n === 0 ? Ps : s, l, u, d, c)
}
function Hk(e, t, r, o) {
    return Ns(e, t, r, Xv, Cs(jk()), ci(e, 2, -2), 0, o)
}
function hp(e, t, r, o, n) {
    return Ns(e, t, r, gd, ci(e, 0, o), ci(e, o + 1, -1), o, n)
}
function rn(e, t) {
    for (var r = "", o = 0; o < e.length; o++)
        r += t(e[o], o, e, t) || "";
    return r
}
function sm(e, t, r, o) {
    switch (e.type) {
    case Qv:
        if (e.children.length)
            break;
    case Tk:
    case gd:
        return e.return = e.return || e.value;
    case Xv:
        return "";
    case zk:
        return e.return = e.value + "{" + rn(e.children, o) + "}";
    case Ps:
        if (!qt(e.value = e.props.join(",")))
            return ""
    }
    return qt(r = rn(e.children, o)) ? e.return = e.value + "{" + r + "}" : ""
}
function lm(e) {
    var t = tm(e);
    return function(r, o, n, i) {
        for (var a = "", s = 0; s < t; s++)
            a += e[s](r, o, n, i) || "";
        return a
    }
}
function um(e) {
    return function(t) {
        t.root || (t = t.return) && e(t)
    }
}
const Wk = e=>{
    switch (e.type) {
    case Ps:
        if (typeof e.props == "string")
            return;
        e.props = e.props.map(t=>t.indexOf(":global(") === -1 ? t : Ak(t).reduce((r,o,n,i)=>{
            if (o === "")
                return r;
            if (o === ":" && i[n + 1] === "global") {
                const a = i[n + 2].slice(1, -1) + " ";
                return r.unshift(a),
                i[n + 1] = "",
                i[n + 2] = "",
                r
            }
            return r.push(o),
            r
        }
        , []).join(""))
    }
}
;
function cm(e, t, r) {
    switch (Rk(e, t)) {
    case 5103:
        return Et + "print-" + e + e;
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
        return Et + e + e;
    case 4215:
        if (qe(e, 9) === 102 || qe(e, t + 1) === 116)
            return Et + e + e;
        break;
    case 4789:
        return Wn + e + e;
    case 5349:
    case 4246:
    case 6968:
        return Et + e + Wn + e + e;
    case 6187:
        if (!Zv(e, /grab/))
            return Ge(Ge(Ge(e, /(zoom-|grab)/, Et + "$1"), /(image-set)/, Et + "$1"), e, "") + e;
    case 5495:
    case 3959:
        return Ge(e, /(image-set\([^]*)/, Et + "$1$`$1");
    case 4095:
    case 3583:
    case 4068:
    case 2532:
        return Ge(e, /(.+)-inline(.+)/, Et + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
        if (qt(e) - 1 - t > 6)
            switch (qe(e, t + 1)) {
            case 102:
                if (qe(e, t + 3) === 108)
                    return Ge(e, /(.+:)(.+)-([^]+)/, "$1" + Et + "$2-$3$1" + Wn + (qe(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
            case 115:
                return ~em(e, "stretch") ? cm(Ge(e, "stretch", "fill-available"), t) + e : e
            }
        break
    }
    return e
}
function dm(e, t, r, o) {
    if (e.length > -1 && !e.return)
        switch (e.type) {
        case gd:
            e.return = cm(e.value, e.length);
            return;
        case Ps:
            if (e.length)
                return Dk(e.props, function(n) {
                    switch (Zv(n, /(::plac\w+|:read-\w+)/)) {
                    case ":read-only":
                    case ":read-write":
                        return rn([Tl(e, {
                            props: [Ge(n, /:(read-\w+)/, ":" + Wn + "$1")]
                        })], o);
                    case "::placeholder":
                        return rn([Tl(e, {
                            props: [Ge(n, /:(plac\w+)/, ":" + Et + "input-$1")]
                        }), Tl(e, {
                            props: [Ge(n, /:(plac\w+)/, ":" + Wn + "$1")]
                        })], o)
                    }
                    return ""
                })
        }
}
function $k(e) {
    switch (e.type) {
    case "@container":
    case Ck:
    case Nk:
    case Qv:
        return !0
    }
    return !1
}
const Uk = e=>{
    $k(e) && Array.isArray(e.children) && e.children.sort((t,r)=>t.props[0] > r.props[0] ? 1 : -1)
}
;
function Vk() {}
function vd(e, t) {
    const r = [];
    return rn(am(e), lm([Wk, t ? Uk : Vk, dm, sm, um(o=>r.push(o))])),
    r
}
const Gk = /,( *[^ &])/g;
function Kk(e) {
    return "&" + Kv(e.replace(Gk, ",&$1"))
}
function gp(e, t, r) {
    let o = t;
    return r.length > 0 && (o = r.reduceRight((n,i)=>`${Kk(i)} { ${n} }`, t)),
    `${e}{${o}}`
}
function vp(e) {
    const {className: t, media: r, layer: o, selectors: n, support: i, property: a, rtlClassName: s, rtlProperty: l, rtlValue: u, value: d, container: c} = e
      , f = `.${t}`
      , h = Array.isArray(d) ? `${d.map(m=>`${Fn(a)}: ${m}`).join(";")};` : `${Fn(a)}: ${d};`;
    let p = gp(f, h, n);
    if (l && s) {
        const m = `.${s}`
          , w = Array.isArray(u) ? `${u.map(v=>`${Fn(l)}: ${v}`).join(";")};` : `${Fn(l)}: ${u};`;
        p += gp(m, w, n)
    }
    return r && (p = `@media ${r} { ${p} }`),
    o && (p = `@layer ${o} { ${p} }`),
    i && (p = `@supports ${i} { ${p} }`),
    c && (p = `@container ${c} { ${p} }`),
    vd(p, !0)
}
function fm(e) {
    let t = "";
    for (const r in e) {
        const o = e[r];
        typeof o != "string" && typeof o != "number" || (t += Fn(r) + ":" + o + ";")
    }
    return t
}
function mp(e) {
    let t = "";
    for (const r in e)
        t += `${r}{${fm(e[r])}}`;
    return t
}
function yp(e, t) {
    const r = `@keyframes ${e} {${t}}`
      , o = [];
    return rn(am(r), lm([sm, dm, um(n=>o.push(n))])),
    o
}
function bp(e, t) {
    return e.length === 0 ? t : `${e} and ${t}`
}
function Xk(e) {
    return e.substr(0, 6) === "@media"
}
function Qk(e) {
    return e.substr(0, 6) === "@layer"
}
const Jk = /^(:|\[|>|&)/;
function Yk(e) {
    return Jk.test(e)
}
function Zk(e) {
    return e.substr(0, 9) === "@supports"
}
function ex(e) {
    return e.substring(0, 10) === "@container"
}
function tx(e) {
    return e != null && typeof e == "object" && Array.isArray(e) === !1
}
const wp = {
    "us-w": "w",
    "us-v": "i",
    nk: "l",
    si: "v",
    cu: "f",
    ve: "h",
    ti: "a"
};
function kp(e, t, r, o, n) {
    if (r)
        return "m";
    if (t || o)
        return "t";
    if (n)
        return "c";
    if (e.length > 0) {
        const i = e[0].trim();
        if (i.charCodeAt(0) === 58)
            return wp[i.slice(4, 8)] || wp[i.slice(3, 5)] || "d"
    }
    return "d"
}
function Zi({container: e, media: t, layer: r, property: o, selector: n, support: i, value: a}) {
    const s = ui(n + e + t + r + i + o + a.trim());
    return Uu + s
}
function xp(e, t, r, o, n) {
    const i = e + t + r + o + n
      , a = ui(i)
      , s = a.charCodeAt(0);
    return s >= 48 && s <= 57 ? String.fromCharCode(s + 17) + a.slice(1) : a
}
function Sp(e) {
    return e.replace(/>\s+/g, ">")
}
function rx(e, t) {
    const r = JSON.stringify(t, null, 2);
    " ".repeat(2) + "",
    " ".repeat(4) + "",
    " ".repeat(6) + `"${e}": ${r.split(`
`).map((o,n)=>" ".repeat(n === 0 ? 0 : 6) + o).join(`
`)}`,
    " ".repeat(4) + "",
    " ".repeat(2) + "",
    e.indexOf("&")
}
function _p(e, t, r, o) {
    e[t] = o ? [r, o] : r
}
function Bp(e, t) {
    return t ? [e, t] : e
}
function Nl(e, t, r, o, n) {
    var i;
    let a;
    t === "m" && n && (a = {
        m: n
    }),
    (i = e[t]) !== null && i !== void 0 || (e[t] = []),
    r && e[t].push(Bp(r, a)),
    o && e[t].push(Bp(o, a))
}
function Xr(e, t=[], r="", o="", n="", i="", a={}, s={}, l) {
    for (const u in e) {
        if (tk.hasOwnProperty(u)) {
            e[u];
            continue
        }
        const d = e[u];
        if (d != null) {
            if (typeof d == "string" || typeof d == "number") {
                const c = Sp(t.join(""))
                  , f = xp(c, i, r, n, u)
                  , h = Zi({
                    container: i,
                    media: r,
                    layer: o,
                    value: d.toString(),
                    support: n,
                    selector: c,
                    property: u
                })
                  , p = l && {
                    key: u,
                    value: l
                } || Gu(u, d)
                  , m = p.key !== u || p.value !== d
                  , w = m ? Zi({
                    container: i,
                    value: p.value.toString(),
                    property: p.key,
                    selector: c,
                    media: r,
                    layer: o,
                    support: n
                }) : void 0
                  , v = m ? {
                    rtlClassName: w,
                    rtlProperty: p.key,
                    rtlValue: p.value
                } : void 0
                  , g = kp(t, o, r, n, i)
                  , [y,x] = vp({
                    className: h,
                    media: r,
                    layer: o,
                    selectors: t,
                    property: u,
                    support: n,
                    container: i,
                    value: d,
                    ...v
                });
                _p(a, f, h, w),
                Nl(s, g, y, x, r)
            } else if (u === "animationName") {
                const c = Array.isArray(d) ? d : [d]
                  , f = []
                  , h = [];
                for (const p of c) {
                    const m = mp(p)
                      , w = mp(Gv(p))
                      , v = Uu + ui(m);
                    let g;
                    const y = yp(v, m);
                    let x = [];
                    m === w ? g = v : (g = Uu + ui(w),
                    x = yp(g, w));
                    for (let S = 0; S < y.length; S++)
                        Nl(s, "k", y[S], x[S], r);
                    f.push(v),
                    h.push(g)
                }
                Xr({
                    animationName: f.join(", ")
                }, t, r, o, n, i, a, s, h.join(", "))
            } else if (Array.isArray(d)) {
                if (d.length === 0)
                    continue;
                const c = Sp(t.join(""))
                  , f = xp(c, i, r, n, u)
                  , h = Zi({
                    container: i,
                    media: r,
                    layer: o,
                    value: d.map(_=>(_ ?? "").toString()).join(";"),
                    support: n,
                    selector: c,
                    property: u
                })
                  , p = d.map(_=>Gu(u, _));
                if (!!p.some(_=>_.key !== p[0].key))
                    continue;
                const w = p[0].key !== u || p.some((_,k)=>_.value !== d[k])
                  , v = w ? Zi({
                    container: i,
                    value: p.map(_=>{
                        var k;
                        return ((k = _ == null ? void 0 : _.value) !== null && k !== void 0 ? k : "").toString()
                    }
                    ).join(";"),
                    property: p[0].key,
                    selector: c,
                    layer: o,
                    media: r,
                    support: n
                }) : void 0
                  , g = w ? {
                    rtlClassName: v,
                    rtlProperty: p[0].key,
                    rtlValue: p.map(_=>_.value)
                } : void 0
                  , y = kp(t, o, r, n, i)
                  , [x,S] = vp({
                    className: h,
                    media: r,
                    layer: o,
                    selectors: t,
                    property: u,
                    support: n,
                    container: i,
                    value: d,
                    ...g
                });
                _p(a, f, h, v),
                Nl(s, y, x, S, r)
            } else if (tx(d))
                if (Yk(u))
                    Xr(d, t.concat(Kv(u)), r, o, n, i, a, s);
                else if (Xk(u)) {
                    const c = bp(r, u.slice(6).trim());
                    Xr(d, t, c, o, n, i, a, s)
                } else if (Qk(u)) {
                    const c = (o ? `${o}.` : "") + u.slice(6).trim();
                    Xr(d, t, r, c, n, i, a, s)
                } else if (Zk(u)) {
                    const c = bp(n, u.slice(9).trim());
                    Xr(d, t, r, o, c, i, a, s)
                } else if (ex(u)) {
                    const c = u.slice(10).trim();
                    Xr(d, t, r, o, n, c, a, s)
                } else
                    rx(u, d)
        }
    }
    return [a, s]
}
function ox(e) {
    const t = {}
      , r = {};
    for (const o in e) {
        const n = e[o]
          , [i,a] = Xr(n);
        t[o] = i,
        Object.keys(a).forEach(s=>{
            r[s] = (r[s] || []).concat(a[s])
        }
        )
    }
    return [t, r]
}
function nx(e, t=Es) {
    const r = t();
    let o = null
      , n = null
      , i = null
      , a = null;
    function s(l) {
        const {dir: u, renderer: d} = l;
        o === null && ([o,n] = ox(e));
        const c = u === "ltr";
        return c ? i === null && (i = Qa(o, u)) : a === null && (a = Qa(o, u)),
        r(d, n),
        c ? i : a
    }
    return s
}
function ix(e, t) {
    const r = `${e} {${fm(t)}}`;
    return vd(r, !1)[0]
}
function ax(e) {
    return e.reduce((t,r)=>{
        if (typeof r == "string") {
            const o = vd(r, !1);
            for (const n of o)
                t.push(n);
            return t
        }
        for (const o in r) {
            const n = r[o]
              , i = ix(o, n);
            t.push(i)
        }
        return t
    }
    , [])
}
function sx(e, t=Es) {
    const r = t()
      , o = Array.isArray(e) ? e : [e];
    function n(i) {
        r(i.renderer, {
            d: ax(o)
        })
    }
    return n
}
function pm(e, t, r=Es) {
    const o = r();
    let n = null
      , i = null;
    function a(s) {
        const {dir: l, renderer: u} = s
          , d = l === "ltr";
        return d ? n === null && (n = Qa(e, l)) : i === null && (i = Qa(e, l)),
        o(u, t),
        d ? n : i
    }
    return a
}
function lx(e, t, r, o=Es) {
    const n = o();
    function i(a) {
        const {dir: s, renderer: l} = a
          , u = s === "ltr" ? e : t || e;
        return n(l, Array.isArray(r) ? {
            r
        } : r),
        u
    }
    return i
}
const Mo = {
    border: yw,
    borderLeft: bw,
    borderBottom: ww,
    borderRight: kw,
    borderTop: xw,
    borderColor: Wu,
    borderStyle: Hu,
    borderRadius: Sw,
    borderWidth: qu,
    flex: Cw,
    gap: Tw,
    gridArea: Dw,
    margin: jw,
    marginBlock: Iw,
    marginInline: Aw,
    padding: Ow,
    paddingBlock: Lw,
    paddingInline: Mw,
    overflow: qw,
    inset: Hw,
    outline: Ww,
    transition: $w,
    textDecoration: Kw
};
function ux() {
    return typeof window < "u" && !!(window.document && window.document.createElement)
}
const Ep = Un.useInsertionEffect ? Un.useInsertionEffect : void 0
  , Fs = ()=>{
    const e = {};
    return function(r, o) {
        if (Ep && ux()) {
            Ep(()=>{
                r.insertCSSRules(o)
            }
            , [r, o]);
            return
        }
        e[r.id] === void 0 && (r.insertCSSRules(o),
        e[r.id] = !0)
    }
}
  , cx = b.createContext(ck());
function fn() {
    return b.useContext(cx)
}
const hm = b.createContext("ltr")
  , dx = ({children: e, dir: t})=>b.createElement(hm.Provider, {
    value: t
}, e);
function md() {
    return b.useContext(hm)
}
function gm(e) {
    const t = nx(e, Fs);
    return function() {
        const o = md()
          , n = fn();
        return t({
            dir: o,
            renderer: n
        })
    }
}
function fx(e) {
    const t = sx(e, Fs);
    return function() {
        const n = {
            renderer: fn()
        };
        return t(n)
    }
}
function U(e, t) {
    const r = pm(e, t, Fs);
    return function() {
        const n = md()
          , i = fn();
        return r({
            dir: n,
            renderer: i
        })
    }
}
function Ce(e, t, r) {
    const o = lx(e, t, r, Fs);
    return function() {
        const i = md()
          , a = fn();
        return o({
            dir: i,
            renderer: a
        })
    }
}
function px(e, t) {
    if (t) {
        const r = Object.keys(t).reduce((o,n)=>`${o}--${n}: ${t[n]}; `, "");
        return `${e} { ${r} }`
    }
    return `${e} {}`
}
const vm = Symbol("fui.slotRenderFunction")
  , Rs = Symbol("fui.slotElementType");
function pe(e, t) {
    const {defaultProps: r, elementType: o} = t
      , n = yd(e)
      , i = {
        ...r,
        ...n,
        [Rs]: o
    };
    return n && typeof n.children == "function" && (i[vm] = n.children,
    i.children = r == null ? void 0 : r.children),
    i
}
function He(e, t) {
    if (!(e === null || e === void 0 && !t.renderByDefault))
        return pe(e, t)
}
function yd(e) {
    return typeof e == "string" || typeof e == "number" || Array.isArray(e) || b.isValidElement(e) ? {
        children: e
    } : e
}
function hx(e) {
    return e !== null && typeof e == "object" && !Array.isArray(e) && !b.isValidElement(e)
}
function Pp(e) {
    return !!(e != null && e.hasOwnProperty(Rs))
}
const oe = (...e)=>{
    const t = {};
    for (const r of e) {
        const o = Array.isArray(r) ? r : Object.keys(r);
        for (const n of o)
            t[n] = 1
    }
    return t
}
  , gx = oe(["onAuxClick", "onAnimationEnd", "onAnimationStart", "onCopy", "onCut", "onPaste", "onCompositionEnd", "onCompositionStart", "onCompositionUpdate", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onInput", "onSubmit", "onLoad", "onError", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyUp", "onAbort", "onCanPlay", "onCanPlayThrough", "onDurationChange", "onEmptied", "onEncrypted", "onEnded", "onLoadedData", "onLoadedMetadata", "onLoadStart", "onPause", "onPlay", "onPlaying", "onProgress", "onRateChange", "onSeeked", "onSeeking", "onStalled", "onSuspend", "onTimeUpdate", "onVolumeChange", "onWaiting", "onClick", "onClickCapture", "onContextMenu", "onDoubleClick", "onDrag", "onDragEnd", "onDragEnter", "onDragExit", "onDragLeave", "onDragOver", "onDragStart", "onDrop", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseOut", "onMouseOver", "onMouseUp", "onMouseUpCapture", "onSelect", "onTouchCancel", "onTouchEnd", "onTouchMove", "onTouchStart", "onScroll", "onWheel", "onPointerCancel", "onPointerDown", "onPointerEnter", "onPointerLeave", "onPointerMove", "onPointerOut", "onPointerOver", "onPointerUp", "onGotPointerCapture", "onLostPointerCapture"])
  , vx = oe(["accessKey", "children", "className", "contentEditable", "dir", "draggable", "hidden", "htmlFor", "id", "lang", "ref", "role", "style", "tabIndex", "title", "translate", "spellCheck", "name"])
  , mx = oe(["itemID", "itemProp", "itemRef", "itemScope", "itemType"])
  , xe = oe(vx, gx, mx)
  , yx = oe(xe, ["form"])
  , mm = oe(xe, ["height", "loop", "muted", "preload", "src", "width"])
  , bx = oe(mm, ["poster"])
  , wx = oe(xe, ["start"])
  , kx = oe(xe, ["value"])
  , xx = oe(xe, ["download", "href", "hrefLang", "media", "rel", "target", "type"])
  , Sx = oe(xe, ["dateTime"])
  , Ds = oe(xe, ["autoFocus", "disabled", "form", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "type", "value"])
  , _x = oe(Ds, ["accept", "alt", "autoCapitalize", "autoComplete", "checked", "dirname", "form", "height", "inputMode", "list", "max", "maxLength", "min", "multiple", "pattern", "placeholder", "readOnly", "required", "src", "step", "size", "type", "value", "width"])
  , Bx = oe(Ds, ["autoCapitalize", "cols", "dirname", "form", "maxLength", "placeholder", "readOnly", "required", "rows", "wrap"])
  , Ex = oe(Ds, ["form", "multiple", "required"])
  , Px = oe(xe, ["selected", "value"])
  , Cx = oe(xe, ["cellPadding", "cellSpacing"])
  , Tx = xe
  , Nx = oe(xe, ["colSpan", "rowSpan", "scope"])
  , zx = oe(xe, ["colSpan", "headers", "rowSpan", "scope"])
  , Fx = oe(xe, ["span"])
  , Rx = oe(xe, ["span"])
  , Dx = oe(xe, ["disabled", "form"])
  , jx = oe(xe, ["acceptCharset", "action", "encType", "encType", "method", "noValidate", "target"])
  , Ix = oe(xe, ["allow", "allowFullScreen", "allowPaymentRequest", "allowTransparency", "csp", "height", "importance", "referrerPolicy", "sandbox", "src", "srcDoc", "width"])
  , Ax = oe(xe, ["alt", "crossOrigin", "height", "src", "srcSet", "useMap", "width"])
  , Ox = oe(xe, ["open", "onCancel", "onClose"]);
function Lx(e, t, r) {
    const o = Array.isArray(t)
      , n = {}
      , i = Object.keys(e);
    for (const a of i)
        (!o && t[a] || o && t.indexOf(a) >= 0 || a.indexOf("data-") === 0 || a.indexOf("aria-") === 0) && (!r || (r == null ? void 0 : r.indexOf(a)) === -1) && (n[a] = e[a]);
    return n
}
const Mx = {
    label: yx,
    audio: mm,
    video: bx,
    ol: wx,
    li: kx,
    a: xx,
    button: Ds,
    input: _x,
    textarea: Bx,
    select: Ex,
    option: Px,
    table: Cx,
    tr: Tx,
    th: Nx,
    td: zx,
    colGroup: Fx,
    col: Rx,
    fieldset: Dx,
    form: jx,
    iframe: Ix,
    img: Ax,
    time: Sx,
    dialog: Ox
};
function ym(e, t, r) {
    const o = e && Mx[e] || xe;
    return o.as = 1,
    Lx(t, o, r)
}
const qx = ({primarySlotTagName: e, props: t, excludedPropNames: r})=>({
    root: {
        style: t.style,
        className: t.className
    },
    primary: ym(e, t, [...r || [], "style", "className"])
})
  , Oe = (e,t,r)=>{
    var o;
    return ym((o = t.as) !== null && o !== void 0 ? o : e, t, r)
}
;
function wo() {
    return typeof window < "u" && !!(window.document && window.document.createElement)
}
function bm(e, t) {
    const r = b.useRef(void 0)
      , o = b.useCallback((i,a)=>(r.current !== void 0 && t(r.current),
    r.current = e(i, a),
    r.current), [t, e])
      , n = b.useCallback(()=>{
        r.current !== void 0 && (t(r.current),
        r.current = void 0)
    }
    , [t]);
    return b.useEffect(()=>n, [n]),
    [o, n]
}
const Hx = e=>(e(0),
0)
  , Wx = e=>e;
function $x() {
    const e = wo();
    return bm(e ? requestAnimationFrame : Hx, e ? cancelAnimationFrame : Wx)
}
function Ux(e) {
    return typeof e == "function"
}
const js = e=>{
    const [t,r] = b.useState(()=>e.defaultState === void 0 ? e.initialState : Vx(e.defaultState) ? e.defaultState() : e.defaultState)
      , o = b.useRef(e.state);
    b.useEffect(()=>{
        o.current = e.state
    }
    , [e.state]);
    const n = b.useCallback(i=>{
        Ux(i) && i(o.current)
    }
    , []);
    return Gx(e.state) ? [e.state, n] : [t, r]
}
;
function Vx(e) {
    return typeof e == "function"
}
const Gx = e=>{
    const [t] = b.useState(()=>e !== void 0);
    return t
}
  , wm = {
    current: 0
}
  , Kx = b.createContext(void 0);
function km() {
    var e;
    return (e = b.useContext(Kx)) !== null && e !== void 0 ? e : wm
}
function Xx() {
    const e = km() !== wm
      , [t,r] = b.useState(e);
    return wo() && e && b.useLayoutEffect(()=>{
        r(!1)
    }
    , []),
    t
}
const Rt = wo() ? b.useLayoutEffect : b.useEffect
  , ot = e=>{
    const t = b.useRef(()=>{
        throw new Error("Cannot call an event handler while rendering")
    }
    );
    return Rt(()=>{
        t.current = e
    }
    , [e]),
    b.useCallback((...r)=>{
        const o = t.current;
        return o(...r)
    }
    , [t])
}
;
function Qx() {
    const e = b.useRef(!0);
    return e.current ? (e.current = !1,
    !0) : e.current
}
const xm = b.createContext(void 0);
xm.Provider;
function Jx() {
    return b.useContext(xm) || ""
}
function pn(e="fui-", t) {
    const r = km()
      , o = Jx()
      , n = Un.useId;
    if (n) {
        const i = n()
          , a = b.useMemo(()=>i.replace(/:/g, ""), [i]);
        return t || `${o}${e}${a}`
    }
    return b.useMemo(()=>t || `${o}${e}${++r.current}`, [o, e, t, r])
}
function Ar(...e) {
    const t = b.useCallback(r=>{
        t.current = r;
        for (const o of e)
            typeof o == "function" ? o(r) : o && (o.current = r)
    }
    , [...e]);
    return t
}
const Sm = b.createContext(void 0)
  , Yx = Sm.Provider
  , _m = b.createContext(void 0)
  , Zx = ""
  , e2 = _m.Provider;
function t2() {
    var e;
    return (e = b.useContext(_m)) !== null && e !== void 0 ? e : Zx
}
const Bm = b.createContext(void 0)
  , r2 = {}
  , o2 = Bm.Provider;
function n2() {
    var e;
    return (e = b.useContext(Bm)) !== null && e !== void 0 ? e : r2
}
const Em = b.createContext(void 0)
  , i2 = {
    targetDocument: typeof document == "object" ? document : void 0,
    dir: "ltr"
}
  , a2 = Em.Provider;
function It() {
    var e;
    return (e = b.useContext(Em)) !== null && e !== void 0 ? e : i2
}
const Pm = b.createContext(void 0)
  , s2 = Pm.Provider;
function Cm() {
    var e;
    return (e = b.useContext(Pm)) !== null && e !== void 0 ? e : {}
}
const bd = b.createContext(void 0)
  , l2 = ()=>{}
  , u2 = bd.Provider
  , Fe = e=>{
    var t, r;
    return (r = (t = b.useContext(bd)) === null || t === void 0 ? void 0 : t[e]) !== null && r !== void 0 ? r : l2
}
  , Tm = b.createContext(void 0);
Tm.Provider;
function c2() {
    return b.useContext(Tm)
}
function Ya() {
    return bm(setTimeout, clearTimeout)
}
function Lt(e, t) {
    return (...r)=>{
        e == null || e(...r),
        t == null || t(...r)
    }
}
function Za(e, t) {
    var r;
    const o = e;
    var n;
    return !!(!(o == null || (r = o.ownerDocument) === null || r === void 0) && r.defaultView && o instanceof o.ownerDocument.defaultView[(n = t == null ? void 0 : t.constructorName) !== null && n !== void 0 ? n : "HTMLElement"])
}
function Nm(e) {
    return !!e.type.isFluentTriggerComponent
}
function zm(e, t) {
    return typeof e == "function" ? e(t) : e ? Fm(e, t) : e || null
}
function Fm(e, t) {
    if (!b.isValidElement(e) || e.type === b.Fragment)
        throw new Error("A trigger element must be a single element for this component. Please ensure that you're not using React Fragments.");
    if (Nm(e)) {
        const r = Fm(e.props.children, t);
        return b.cloneElement(e, void 0, r)
    } else
        return b.cloneElement(e, t)
}
function wd(e) {
    return b.isValidElement(e) ? Nm(e) ? wd(e.props.children) : e : null
}
function d2(e) {
    return e && !!e._virtual
}
function f2(e) {
    return d2(e) && e._virtual.parent || null
}
function p2(e, t={}) {
    if (!e)
        return null;
    if (!t.skipVirtual) {
        const r = f2(e);
        if (r)
            return r
    }
    return (e == null ? void 0 : e.parentNode) || null
}
function Cp(e, t) {
    if (!e)
        return;
    const r = e;
    r._virtual || (r._virtual = {}),
    r._virtual.parent = t
}
function h2(e, t) {
    return {
        ...t,
        [Rs]: e
    }
}
function Rm(e, t) {
    return function(o, n, i, a, s) {
        return Pp(n) ? t(h2(o, n), null, i, a, s) : Pp(o) ? t(o, n, i, a, s) : e(o, n, i, a, s)
    }
}
function Dm(e) {
    const {as: t, [Rs]: r, [vm]: o, ...n} = e
      , i = n
      , a = typeof r == "string" ? t ?? r : r;
    return typeof a != "string" && t && (i.as = t),
    {
        elementType: a,
        props: i,
        renderFunction: o
    }
}
const co = cy
  , g2 = (e,t,r)=>{
    const {elementType: o, renderFunction: n, props: i} = Dm(e)
      , a = {
        ...i,
        ...t
    };
    return n ? co.jsx(b.Fragment, {
        children: n(o, a)
    }, r) : co.jsx(o, a, r)
}
  , v2 = (e,t,r)=>{
    const {elementType: o, renderFunction: n, props: i} = Dm(e)
      , a = {
        ...i,
        ...t
    };
    return n ? co.jsx(b.Fragment, {
        children: n(o, {
            ...a,
            children: co.jsxs(b.Fragment, {
                children: a.children
            }, void 0)
        })
    }, r) : co.jsxs(o, a, r)
}
  , q = Rm(co.jsx, g2)
  , ut = Rm(co.jsxs, v2)
  , Xu = b.createContext(void 0)
  , m2 = {}
  , y2 = Xu.Provider
  , b2 = ()=>b.useContext(Xu) ? b.useContext(Xu) : m2
  , w2 = U({
    root: {
        mc9l5x: "f1w7gpdv",
        Bg96gwp: "fez10in",
        ycbfsm: "fg4l7m0"
    },
    rtl: {
        Bz10aip: "f13rod7r"
    }
}, {
    d: [".f1w7gpdv{display:inline;}", ".fez10in{line-height:0;}", ".f13rod7r{-webkit-transform:scaleX(-1);-moz-transform:scaleX(-1);-ms-transform:scaleX(-1);transform:scaleX(-1);}"],
    t: ["@media (forced-colors: active){.fg4l7m0{forced-color-adjust:auto;}}"]
})
  , jm = (e,t)=>{
    const {title: r, primaryFill: o="currentColor", ...n} = e
      , i = {
        ...n,
        title: void 0,
        fill: o
    }
      , a = w2()
      , s = b2();
    return i.className = W(a.root, (t == null ? void 0 : t.flipInRtl) && (s == null ? void 0 : s.textDirection) === "rtl" && a.rtl, i.className),
    r && (i["aria-label"] = r),
    !i["aria-label"] && !i["aria-labelledby"] ? i["aria-hidden"] = !0 : i.role = "img",
    i
}
  , Re = (e,t,r,o)=>{
    const n = t === "1em" ? "20" : t
      , i = b.forwardRef((a,s)=>{
        const l = {
            ...jm(a, {
                flipInRtl: o == null ? void 0 : o.flipInRtl
            }),
            ref: s,
            width: t,
            height: t,
            viewBox: `0 0 ${n} ${n}`,
            xmlns: "http://www.w3.org/2000/svg"
        };
        return b.createElement("svg", l, ...r.map(u=>b.createElement("path", {
            d: u,
            fill: l.fill
        })))
    }
    );
    return i.displayName = e,
    i
}
  , yT = Re("ChevronDownRegular", "1em", ["M15.85 7.65c.2.2.2.5 0 .7l-5.46 5.49a.55.55 0 0 1-.78 0L4.15 8.35a.5.5 0 1 1 .7-.7L10 12.8l5.15-5.16c.2-.2.5-.2.7 0Z"])
  , bT = Re("ChevronLeftFilled", "1em", ["M12.27 15.8a.75.75 0 0 1-1.06-.03l-5-5.25a.75.75 0 0 1 0-1.04l5-5.25a.75.75 0 1 1 1.08 1.04L7.8 10l4.5 4.73c.29.3.28.78-.02 1.06Z"])
  , k2 = Re("ChevronLeftRegular", "1em", ["M12.35 15.85a.5.5 0 0 1-.7 0L6.16 10.4a.55.55 0 0 1 0-.78l5.49-5.46a.5.5 0 1 1 .7.7L7.2 10l5.16 5.15c.2.2.2.5 0 .7Z"])
  , wT = Re("ChevronRightFilled", "1em", ["M7.73 4.2a.75.75 0 0 1 1.06.03l5 5.25c.28.3.28.75 0 1.04l-5 5.25a.75.75 0 1 1-1.08-1.04L12.2 10l-4.5-4.73a.75.75 0 0 1 .02-1.06Z"])
  , x2 = Re("ChevronRightRegular", "1em", ["M7.65 4.15c.2-.2.5-.2.7 0l5.49 5.46c.21.22.21.57 0 .78l-5.49 5.46a.5.5 0 0 1-.7-.7L12.8 10 7.65 4.85a.5.5 0 0 1 0-.7Z"])
  , kT = Re("ClipboardRegular", "1em", ["M7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5v12c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 0 1 4 16.5v-12C4 3.67 4.67 3 5.5 3h1.59ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM7.09 4H5.5a.5.5 0 0 0-.5.5v12c0 .28.22.5.5.5h9a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5h-1.59c-.2.58-.76 1-1.41 1h-3a1.5 1.5 0 0 1-1.41-1Z"])
  , xT = Re("DismissCircleFilled", "1em", ["M10 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16ZM7.8 7.11a.5.5 0 0 0-.63.06l-.06.07a.5.5 0 0 0 .06.64L9.3 10l-2.12 2.12-.06.07a.5.5 0 0 0 .06.64l.07.06c.2.13.47.11.64-.06L10 10.7l2.12 2.12.07.06c.2.13.46.11.64-.06l.06-.07a.5.5 0 0 0-.06-.64L10.7 10l2.12-2.12.06-.07a.5.5 0 0 0-.06-.64l-.07-.06a.5.5 0 0 0-.64.06L10 9.3 7.88 7.17l-.07-.06Z"])
  , S2 = Re("FilmstripRegular", "1em", ["M2 6.5A2.5 2.5 0 0 1 4.5 4h11A2.5 2.5 0 0 1 18 6.5v7a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 13.5v-7ZM4.5 5C3.67 5 3 5.67 3 6.5v7c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5h-11ZM15 6.5a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0v-1Zm.5 5.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5ZM15 9.5a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0v-1ZM4.5 6a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5ZM4 12.5a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0v-1ZM4.5 9a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5Z"])
  , _2 = Re("FlagRegular", "1em", ["M4.5 13h11a.5.5 0 0 0 .42-.78L13.1 8l2.82-4.22A.5.5 0 0 0 15.5 3H4a.5.5 0 0 0-.5.5v14a.5.5 0 0 0 1 0V13Zm0-1V4h10.07l-2.49 3.72a.5.5 0 0 0 0 .56L14.57 12H4.5Z"])
  , B2 = Re("GridRegular", "1em", ["M7.5 11c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5h-4A1.5 1.5 0 0 1 2 16.5v-4c0-.83.67-1.5 1.5-1.5h4Zm9 0c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5h-4a1.5 1.5 0 0 1-1.5-1.5v-4c0-.83.67-1.5 1.5-1.5h4Zm-9 1h-4a.5.5 0 0 0-.5.5v4c0 .28.22.5.5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5Zm9 0h-4a.5.5 0 0 0-.5.5v4c0 .28.22.5.5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5Zm-9-10C8.33 2 9 2.67 9 3.5v4C9 8.33 8.33 9 7.5 9h-4A1.5 1.5 0 0 1 2 7.5v-4C2 2.67 2.67 2 3.5 2h4Zm9 0c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5h-4A1.5 1.5 0 0 1 11 7.5v-4c0-.83.67-1.5 1.5-1.5h4Zm-9 1h-4a.5.5 0 0 0-.5.5v4c0 .28.22.5.5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5Zm9 0h-4a.5.5 0 0 0-.5.5v4c0 .28.22.5.5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5Z"])
  , ST = Re("InfoFilled", "1em", ["M18 10a8 8 0 1 0-16 0 8 8 0 0 0 16 0ZM9.5 8.91a.5.5 0 0 1 1 0V13.6a.5.5 0 0 1-1 0V8.9Zm-.25-2.16a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Z"])
  , E2 = Re("InfoRegular", "1em", ["M10.5 8.91a.5.5 0 0 0-1 .09v4.6a.5.5 0 0 0 1-.1V8.91Zm.3-2.16a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0ZM18 10a8 8 0 1 0-16 0 8 8 0 0 0 16 0ZM3 10a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"])
  , P2 = Re("MoviesAndTvRegular", "1em", ["M16.13 5.38 7.03 8h9.47c.28 0 .5.22.5.5v7a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 15.5V8.57l-.26-.9a2.5 2.5 0 0 1 1.71-3.09L13.1 2.1a2.5 2.5 0 0 1 3.1 1.7l.27.97a.5.5 0 0 1-.34.62ZM3.84 7.88l.6-.17L5.9 5.2l-1.16.33A1.5 1.5 0 0 0 3.7 7.4l.14.48Zm2-.57 2.11-.61L9.4 4.2l-2.13.61-.02.04-1.42 2.46Zm5.62-1.63 1.44-2.5-2.12.62-.03.05L9.34 6.3l2.12-.62Zm2.68-2.65c0 .02 0 .03-.02.04l-1.27 2.22 2.52-.73-.14-.48a1.5 1.5 0 0 0-1.09-1.05ZM4 9v6.5c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5V9H4Z"])
  , _T = Re("PersonSupportRegular", "1em", ["M10 14.5a2 2 0 0 1-2-1.84 6 6 0 1 1 7.98-6.16c.02.28-.2.5-.48.5a.54.54 0 0 1-.52-.5 5 5 0 1 0-6.8 5.16A2 2 0 1 1 10 14.5ZM5 12h.1c.39.38.82.72 1.3 1H5a1 1 0 0 0-1 1c0 1.3.62 2.28 1.67 2.95A8.16 8.16 0 0 0 10 18c1.74 0 3.26-.36 4.33-1.05A3.36 3.36 0 0 0 16 14a1 1 0 0 0-1-1h-2.04a3.02 3.02 0 0 0 0-1H15a2 2 0 0 1 2 2c0 1.7-.83 2.97-2.13 3.8A9.14 9.14 0 0 1 10 19a9.14 9.14 0 0 1-4.87-1.2A4.35 4.35 0 0 1 3 14a2 2 0 0 1 2-2Zm9-5a4 4 0 0 1-1.87 3.39 3 3 0 0 0-.93-.64 3 3 0 1 0-2.4 0 3 3 0 0 0-.93.64A4.01 4.01 0 0 1 6 7a4 4 0 1 1 8 0Z"])
  , Im = Re("SearchRegular", "1em", ["M8.5 3a5.5 5.5 0 0 1 4.23 9.02l4.12 4.13a.5.5 0 0 1-.63.76l-.07-.06-4.13-4.12A5.5 5.5 0 1 1 8.5 3Zm0 1a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z"])
  , C2 = Re("Dismiss20Regular", "20", ["m4.09 4.22.06-.07a.5.5 0 0 1 .63-.06l.07.06L10 9.29l5.15-5.14a.5.5 0 0 1 .63-.06l.07.06c.18.17.2.44.06.63l-.06.07L10.71 10l5.14 5.15c.18.17.2.44.06.63l-.06.07a.5.5 0 0 1-.63.06l-.07-.06L10 10.71l-5.15 5.14a.5.5 0 0 1-.63.06l-.07-.06a.5.5 0 0 1-.06-.63l.06-.07L9.29 10 4.15 4.85a.5.5 0 0 1-.06-.63l.06-.07-.06.07Z"])
  , T2 = Re("Navigation24Regular", "24", ["M2.75 18h18.5a.75.75 0 0 1 .1 1.5H2.75a.75.75 0 0 1-.1-1.5h18.6-18.5Zm0-6.5h18.5a.75.75 0 0 1 .1 1.5H2.75a.75.75 0 0 1-.1-1.5h18.6-18.5Zm0-6.5h18.5a.75.75 0 0 1 .1 1.5H2.75a.75.75 0 0 1-.1-1.49h18.6-18.5Z"])
  , N2 = (e,t)=>q(a2, {
    value: t.provider,
    children: q(Yx, {
        value: t.theme,
        children: q(e2, {
            value: t.themeClassName,
            children: q(u2, {
                value: t.customStyleHooks_unstable,
                children: q(o2, {
                    value: t.tooltip,
                    children: q(dx, {
                        dir: t.textDirection,
                        children: q(y2, {
                            value: t.iconDirection,
                            children: q(s2, {
                                value: t.overrides_unstable,
                                children: ut(e.root, {
                                    children: [wo() ? null : q("style", {
                                        dangerouslySetInnerHTML: {
                                            __html: e.serverStyleProps.cssRule
                                        },
                                        ...e.serverStyleProps.attributes
                                    }), e.root.children]
                                })
                            })
                        })
                    })
                })
            })
        })
    })
});
var z2 = typeof WeakRef < "u"
  , Am = class {
    constructor(e) {
        z2 && typeof e == "object" ? this._weakRef = new WeakRef(e) : this._instance = e
    }
    deref() {
        var e, t;
        let r;
        return this._weakRef ? (r = (e = this._weakRef) == null ? void 0 : e.deref(),
        r || delete this._weakRef) : (r = this._instance,
        (t = r == null ? void 0 : r.isDisposed) != null && t.call(r) && delete this._instance),
        r
    }
}
  , Dt = "keyborg:focusin";
function F2(e) {
    const t = e.HTMLElement
      , r = t.prototype.focus;
    let o = !1;
    return t.prototype.focus = function() {
        o = !0
    }
    ,
    e.document.createElement("button").focus(),
    t.prototype.focus = r,
    o
}
var zl = !1;
function Vt(e) {
    const t = e.focus;
    t.__keyborgNativeFocus ? t.__keyborgNativeFocus.call(e) : e.focus()
}
function R2(e) {
    const t = e;
    zl || (zl = F2(t));
    const r = t.HTMLElement.prototype.focus;
    if (r.__keyborgNativeFocus)
        return;
    t.HTMLElement.prototype.focus = a;
    const o = s=>{
        const l = s.relatedTarget
          , u = s.currentTarget;
        u.contains(l) || (u.removeEventListener("focusin", n, !0),
        u.removeEventListener("focusout", o, !0))
    }
      , n = s=>{
        var l;
        const u = s.target;
        if (!u)
            return;
        if (u.shadowRoot) {
            u.shadowRoot.addEventListener("focusin", n, !0),
            u.shadowRoot.addEventListener("focusout", o, !0);
            return
        }
        const d = {
            relatedTarget: s.relatedTarget || void 0
        }
          , c = new CustomEvent(Dt,{
            cancelable: !0,
            bubbles: !0,
            composed: !0,
            detail: d
        });
        c.details = d,
        (zl || i.lastFocusedProgrammatically) && (d.isFocusedProgrammatically = u === ((l = i.lastFocusedProgrammatically) == null ? void 0 : l.deref()),
        i.lastFocusedProgrammatically = void 0),
        u.dispatchEvent(c)
    }
      , i = t.__keyborgData = {
        focusInHandler: n
    };
    t.document.addEventListener("focusin", t.__keyborgData.focusInHandler, !0);
    function a() {
        const s = t.__keyborgData;
        return s && (s.lastFocusedProgrammatically = new Am(this)),
        r.apply(this, arguments)
    }
    a.__keyborgNativeFocus = r
}
function D2(e) {
    const t = e
      , r = t.HTMLElement.prototype
      , o = r.focus.__keyborgNativeFocus
      , n = t.__keyborgData;
    n && (t.document.removeEventListener("focusin", n.focusInHandler, !0),
    delete t.__keyborgData),
    o && (r.focus = o)
}
var j2 = 500
  , Om = 0
  , I2 = class {
    constructor() {
        this.__keyborgCoreRefs = {},
        this._isNavigatingWithKeyboard = !1
    }
    add(e) {
        const t = e.id;
        t in this.__keyborgCoreRefs || (this.__keyborgCoreRefs[t] = new Am(e))
    }
    remove(e) {
        delete this.__keyborgCoreRefs[e],
        Object.keys(this.__keyborgCoreRefs).length === 0 && (this._isNavigatingWithKeyboard = !1)
    }
    setVal(e) {
        if (this._isNavigatingWithKeyboard !== e) {
            this._isNavigatingWithKeyboard = e;
            for (const t of Object.keys(this.__keyborgCoreRefs)) {
                const o = this.__keyborgCoreRefs[t].deref();
                o ? o.update(e) : this.remove(t)
            }
        }
    }
    getVal() {
        return this._isNavigatingWithKeyboard
    }
}
  , Mt = new I2
  , A2 = class {
    constructor(e, t) {
        this._onFocusIn = o=>{
            if (this._isMouseUsedTimer || Mt.getVal())
                return;
            const n = o.detail;
            n.relatedTarget && (n.isFocusedProgrammatically || n.isFocusedProgrammatically === void 0 || Mt.setVal(!0))
        }
        ,
        this._onMouseDown = o=>{
            if (o.buttons === 0 || o.clientX === 0 && o.clientY === 0 && o.screenX === 0 && o.screenY === 0)
                return;
            const n = this._win;
            n && (this._isMouseUsedTimer && n.clearTimeout(this._isMouseUsedTimer),
            this._isMouseUsedTimer = n.setTimeout(()=>{
                delete this._isMouseUsedTimer
            }
            , 1e3)),
            Mt.setVal(!1)
        }
        ,
        this._onKeyDown = o=>{
            var n, i;
            const a = Mt.getVal()
              , s = o.keyCode
              , l = this._triggerKeys;
            if (!a && (!l || l.has(s))) {
                const u = (n = this._win) == null ? void 0 : n.document.activeElement;
                if (u && (u.tagName === "INPUT" || u.tagName === "TEXTAREA" || u.contentEditable === "true"))
                    return;
                Mt.setVal(!0)
            } else
                a && ((i = this._dismissKeys) != null && i.has(s)) && this._scheduleDismiss()
        }
        ,
        this.id = "c" + ++Om,
        this._win = e;
        const r = e.document;
        if (t) {
            const o = t.triggerKeys
              , n = t.dismissKeys;
            o != null && o.length && (this._triggerKeys = new Set(o)),
            n != null && n.length && (this._dismissKeys = new Set(n))
        }
        r.addEventListener(Dt, this._onFocusIn, !0),
        r.addEventListener("mousedown", this._onMouseDown, !0),
        e.addEventListener("keydown", this._onKeyDown, !0),
        R2(e),
        Mt.add(this)
    }
    dispose() {
        const e = this._win;
        if (e) {
            this._isMouseUsedTimer && (e.clearTimeout(this._isMouseUsedTimer),
            this._isMouseUsedTimer = void 0),
            this._dismissTimer && (e.clearTimeout(this._dismissTimer),
            this._dismissTimer = void 0),
            D2(e);
            const t = e.document;
            t.removeEventListener(Dt, this._onFocusIn, !0),
            t.removeEventListener("mousedown", this._onMouseDown, !0),
            e.removeEventListener("keydown", this._onKeyDown, !0),
            delete this._win,
            Mt.remove(this.id)
        }
    }
    isDisposed() {
        return !!this._win
    }
    update(e) {
        var t, r;
        const o = (r = (t = this._win) == null ? void 0 : t.__keyborg) == null ? void 0 : r.refs;
        if (o)
            for (const n of Object.keys(o))
                kd.update(o[n], e)
    }
    _scheduleDismiss() {
        const e = this._win;
        if (e) {
            this._dismissTimer && (e.clearTimeout(this._dismissTimer),
            this._dismissTimer = void 0);
            const t = e.document.activeElement;
            this._dismissTimer = e.setTimeout(()=>{
                this._dismissTimer = void 0;
                const r = e.document.activeElement;
                t && r && t === r && Mt.setVal(!1)
            }
            , j2)
        }
    }
}
  , kd = class Lm {
    constructor(t, r) {
        this._cb = [],
        this._id = "k" + ++Om,
        this._win = t;
        const o = t.__keyborg;
        o ? (this._core = o.core,
        o.refs[this._id] = this) : (this._core = new A2(t,r),
        t.__keyborg = {
            core: this._core,
            refs: {
                [this._id]: this
            }
        })
    }
    static create(t, r) {
        return new Lm(t,r)
    }
    static dispose(t) {
        t.dispose()
    }
    static update(t, r) {
        t._cb.forEach(o=>o(r))
    }
    dispose() {
        var t;
        const r = (t = this._win) == null ? void 0 : t.__keyborg;
        r != null && r.refs[this._id] && (delete r.refs[this._id],
        Object.keys(r.refs).length === 0 && (r.core.dispose(),
        delete this._win.__keyborg)),
        this._cb = [],
        delete this._core,
        delete this._win
    }
    isNavigatingWithKeyboard() {
        return Mt.getVal()
    }
    subscribe(t) {
        this._cb.push(t)
    }
    unsubscribe(t) {
        const r = this._cb.indexOf(t);
        r >= 0 && this._cb.splice(r, 1)
    }
    setVal(t) {
        Mt.setVal(t)
    }
}
;
function xd(e, t) {
    return kd.create(e, t)
}
function Sd(e) {
    kd.dispose(e)
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
const rr = "data-tabster"
  , Mm = "data-tabster-dummy"
  , O2 = "tabster:deloser"
  , qm = "tabster:modalizer:active"
  , Hm = "tabster:modalizer:inactive"
  , L2 = "tabster:modalizer:focusin"
  , M2 = "tabster:modalizer:focusout"
  , q2 = "tabster:modalizer:beforefocusout"
  , Qu = "tabster:mover"
  , Wm = "tabster:focusin"
  , $m = "tabster:focusout"
  , Um = "tabster:movefocus"
  , _d = ["a[href]", "button:not([disabled])", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])", "*[tabindex]", "*[contenteditable]"].join(", ")
  , H2 = {
    Any: 0,
    Accessible: 1,
    Focusable: 2
}
  , W2 = {
    History: 0,
    DeloserDefault: 1,
    RootDefault: 2,
    DeloserFirst: 3,
    RootFirst: 4
}
  , Xt = {
    Invisible: 0,
    PartiallyVisible: 1,
    Visible: 2
}
  , di = {
    Source: 0,
    Target: 1
}
  , Qr = {
    Both: 0,
    Vertical: 1,
    Horizontal: 2,
    Grid: 3,
    GridLinear: 4
}
  , Vm = {
    Unlimited: 0,
    Limited: 1,
    LimitedTrapFocus: 2
}
  , Gm = {
    Auto: 0,
    Inside: 1,
    Outside: 2
};
var $n = Object.freeze({
    __proto__: null,
    TabsterAttributeName: rr,
    TabsterDummyInputAttributeName: Mm,
    DeloserEventName: O2,
    ModalizerActiveEventName: qm,
    ModalizerInactiveEventName: Hm,
    ModalizerFocusInEventName: L2,
    ModalizerFocusOutEventName: M2,
    ModalizerBeforeFocusOutEventName: q2,
    MoverEventName: Qu,
    FocusInEventName: Wm,
    FocusOutEventName: $m,
    MoveFocusEventName: Um,
    FocusableSelector: _d,
    ObservedElementAccesibilities: H2,
    RestoreFocusOrders: W2,
    Visibilities: Xt,
    RestorerTypes: di,
    MoverDirections: Qr,
    GroupperTabbabilities: Vm,
    SysDummyInputsPositions: Gm
});
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
function $e(e, t) {
    var r;
    return (r = e.storageEntry(t)) === null || r === void 0 ? void 0 : r.tabster
}
function Km(e, t, r) {
    var o, n;
    const i = r || e._noop ? void 0 : t.getAttribute(rr);
    let a = e.storageEntry(t), s;
    if (i)
        if (i !== ((o = a == null ? void 0 : a.attr) === null || o === void 0 ? void 0 : o.string))
            try {
                const c = JSON.parse(i);
                if (typeof c != "object")
                    throw new Error(`Value is not a JSON object, got '${i}'.`);
                s = {
                    string: i,
                    object: c
                }
            } catch {}
        else
            return;
    else if (!a)
        return;
    a || (a = e.storageEntry(t, !0)),
    a.tabster || (a.tabster = {});
    const l = a.tabster || {}
      , u = ((n = a.attr) === null || n === void 0 ? void 0 : n.object) || {}
      , d = (s == null ? void 0 : s.object) || {};
    for (const c of Object.keys(u))
        if (!d[c]) {
            if (c === "root") {
                const f = l[c];
                f && e.root.onRoot(f, !0)
            }
            switch (c) {
            case "deloser":
            case "root":
            case "groupper":
            case "modalizer":
            case "restorer":
            case "mover":
                const f = l[c];
                f && (f.dispose(),
                delete l[c]);
                break;
            case "observed":
                delete l[c],
                e.observedElement && e.observedElement.onObservedElementUpdate(t);
                break;
            case "focusable":
            case "outline":
            case "uncontrolled":
            case "sys":
                delete l[c];
                break
            }
        }
    for (const c of Object.keys(d)) {
        const f = d.sys;
        switch (c) {
        case "deloser":
            l.deloser ? l.deloser.setProps(d.deloser) : e.deloser && (l.deloser = e.deloser.createDeloser(t, d.deloser));
            break;
        case "root":
            l.root ? l.root.setProps(d.root) : l.root = e.root.createRoot(t, d.root, f),
            e.root.onRoot(l.root);
            break;
        case "modalizer":
            l.modalizer ? l.modalizer.setProps(d.modalizer) : e.modalizer && (l.modalizer = e.modalizer.createModalizer(t, d.modalizer, f));
            break;
        case "restorer":
            l.restorer ? l.restorer.setProps(d.restorer) : e.restorer && d.restorer && (l.restorer = e.restorer.createRestorer(t, d.restorer));
            break;
        case "focusable":
            l.focusable = d.focusable;
            break;
        case "groupper":
            l.groupper ? l.groupper.setProps(d.groupper) : e.groupper && (l.groupper = e.groupper.createGroupper(t, d.groupper, f));
            break;
        case "mover":
            l.mover ? l.mover.setProps(d.mover) : e.mover && (l.mover = e.mover.createMover(t, d.mover, f));
            break;
        case "observed":
            e.observedElement && (l.observed = d.observed,
            e.observedElement.onObservedElementUpdate(t));
            break;
        case "uncontrolled":
            l.uncontrolled = d.uncontrolled;
            break;
        case "outline":
            e.outline && (l.outline = d.outline);
            break;
        case "sys":
            l.sys = d.sys;
            break;
        default:
            console.error(`Unknown key '${c}' in data-tabster attribute value.`)
        }
    }
    s ? a.attr = s : (Object.keys(l).length === 0 && (delete a.tabster,
    delete a.attr),
    e.storageEntry(t, !1))
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
function $2(e) {
    const t = e();
    try {
        if (t.EventTarget)
            return new t.EventTarget
    } catch (r) {
        if (!(r instanceof TypeError))
            throw r
    }
    return t.document.createElement("div")
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
let Ju;
const Tp = typeof DOMRect < "u" ? DOMRect : class {
    constructor(e, t, r, o) {
        this.left = e || 0,
        this.top = t || 0,
        this.right = (e || 0) + (r || 0),
        this.bottom = (t || 0) + (o || 0)
    }
}
;
let U2 = 0;
try {
    document.createTreeWalker(document, NodeFilter.SHOW_ELEMENT),
    Ju = !1
} catch {
    Ju = !0
}
const Fl = 100;
function fr(e) {
    const t = e();
    let r = t.__tabsterInstanceContext;
    return r || (r = {
        elementByUId: {},
        basics: {
            Promise: t.Promise || void 0,
            WeakRef: t.WeakRef || void 0
        },
        containerBoundingRectCache: {},
        lastContainerBoundingRectCacheId: 0,
        fakeWeakRefs: [],
        fakeWeakRefsStarted: !1
    },
    t.__tabsterInstanceContext = r),
    r
}
function V2(e) {
    const t = e.__tabsterInstanceContext;
    t && (t.elementByUId = {},
    delete t.WeakRef,
    t.containerBoundingRectCache = {},
    t.containerBoundingRectCacheTimer && e.clearTimeout(t.containerBoundingRectCacheTimer),
    t.fakeWeakRefsTimer && e.clearTimeout(t.fakeWeakRefsTimer),
    t.fakeWeakRefs = [],
    delete e.__tabsterInstanceContext)
}
function G2(e) {
    const t = e.__tabsterInstanceContext;
    return new ((t == null ? void 0 : t.basics.WeakMap) || WeakMap)
}
function K2(e) {
    return !!e.querySelector(_d)
}
class Xm {
    constructor(t) {
        this._target = t
    }
    deref() {
        return this._target
    }
    static cleanup(t, r) {
        return t._target ? r || !Ed(t._target.ownerDocument, t._target) ? (delete t._target,
        !0) : !1 : !0
    }
}
class it {
    constructor(t, r, o) {
        const n = fr(t);
        let i;
        n.WeakRef ? i = new n.WeakRef(r) : (i = new Xm(r),
        n.fakeWeakRefs.push(i)),
        this._ref = i,
        this._data = o
    }
    get() {
        const t = this._ref;
        let r;
        return t && (r = t.deref(),
        r || delete this._ref),
        r
    }
    getData() {
        return this._data
    }
}
function Qm(e, t) {
    const r = fr(e);
    r.fakeWeakRefs = r.fakeWeakRefs.filter(o=>!Xm.cleanup(o, t))
}
function Jm(e) {
    const t = fr(e);
    t.fakeWeakRefsStarted || (t.fakeWeakRefsStarted = !0,
    t.WeakRef = eS(t)),
    t.fakeWeakRefsTimer || (t.fakeWeakRefsTimer = e().setTimeout(()=>{
        t.fakeWeakRefsTimer = void 0,
        Qm(e),
        Jm(e)
    }
    , 2 * 60 * 1e3))
}
function X2(e) {
    const t = fr(e);
    t.fakeWeakRefsStarted = !1,
    t.fakeWeakRefsTimer && (e().clearTimeout(t.fakeWeakRefsTimer),
    t.fakeWeakRefsTimer = void 0,
    t.fakeWeakRefs = [])
}
function Bd(e, t, r) {
    if (t.nodeType !== Node.ELEMENT_NODE)
        return;
    const o = Ju ? r : {
        acceptNode: r
    };
    return e.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, o, !1)
}
function Ym(e, t) {
    let r = t.__tabsterCacheId;
    const o = fr(e)
      , n = r ? o.containerBoundingRectCache[r] : void 0;
    if (n)
        return n.rect;
    const i = t.ownerDocument && t.ownerDocument.documentElement;
    if (!i)
        return new Tp;
    let a = 0
      , s = 0
      , l = i.clientWidth
      , u = i.clientHeight;
    if (t !== i) {
        const c = t.getBoundingClientRect();
        a = Math.max(a, c.left),
        s = Math.max(s, c.top),
        l = Math.min(l, c.right),
        u = Math.min(u, c.bottom)
    }
    const d = new Tp(a < l ? a : -1,s < u ? s : -1,a < l ? l - a : 0,s < u ? u - s : 0);
    return r || (r = "r-" + ++o.lastContainerBoundingRectCacheId,
    t.__tabsterCacheId = r),
    o.containerBoundingRectCache[r] = {
        rect: d,
        element: t
    },
    o.containerBoundingRectCacheTimer || (o.containerBoundingRectCacheTimer = window.setTimeout(()=>{
        o.containerBoundingRectCacheTimer = void 0;
        for (const c of Object.keys(o.containerBoundingRectCache))
            delete o.containerBoundingRectCache[c].element.__tabsterCacheId;
        o.containerBoundingRectCache = {}
    }
    , 50)),
    d
}
function Np(e, t, r) {
    const o = Zm(t);
    if (!o)
        return !1;
    const n = Ym(e, o)
      , i = t.getBoundingClientRect()
      , a = i.height * (1 - r)
      , s = Math.max(0, n.top - i.top)
      , l = Math.max(0, i.bottom - n.bottom)
      , u = s + l;
    return u === 0 || u <= a
}
function Q2(e, t, r) {
    const o = Zm(t);
    if (o) {
        const n = Ym(e, o)
          , i = t.getBoundingClientRect();
        r ? o.scrollTop += i.top - n.top : o.scrollTop += i.bottom - n.bottom
    }
}
function Zm(e) {
    const t = e.ownerDocument;
    if (t) {
        for (let r = e.parentElement; r; r = r.parentElement)
            if (r.scrollWidth > r.clientWidth || r.scrollHeight > r.clientHeight)
                return r;
        return t.documentElement
    }
    return null
}
function J2(e) {
    e.__shouldIgnoreFocus = !0
}
function e0(e) {
    return !!e.__shouldIgnoreFocus
}
function Y2(e) {
    const t = new Uint32Array(4);
    if (e.crypto && e.crypto.getRandomValues)
        e.crypto.getRandomValues(t);
    else if (e.msCrypto && e.msCrypto.getRandomValues)
        e.msCrypto.getRandomValues(t);
    else
        for (let o = 0; o < t.length; o++)
            t[o] = 4294967295 * Math.random();
    const r = [];
    for (let o = 0; o < t.length; o++)
        r.push(t[o].toString(36));
    return r.push("|"),
    r.push((++U2).toString(36)),
    r.push("|"),
    r.push(Date.now().toString(36)),
    r.join("")
}
function ka(e, t) {
    const r = fr(e);
    let o = t.__tabsterElementUID;
    return o || (o = t.__tabsterElementUID = Y2(e())),
    !r.elementByUId[o] && Ed(t.ownerDocument, t) && (r.elementByUId[o] = new it(e,t)),
    o
}
function zp(e, t) {
    const r = fr(e);
    for (const o of Object.keys(r.elementByUId)) {
        const n = r.elementByUId[o]
          , i = n && n.get();
        i && t && !t.contains(i) || delete r.elementByUId[o]
    }
}
function Ed(e, t) {
    var r;
    return !!(!((r = e == null ? void 0 : e.body) === null || r === void 0) && r.contains(t))
}
function t0(e, t) {
    const r = e.matches || e.matchesSelector || e.msMatchesSelector || e.webkitMatchesSelector;
    return r && r.call(e, t)
}
function Z2(e) {
    const t = fr(e);
    if (t.basics.Promise)
        return t.basics.Promise;
    throw new Error("No Promise defined.")
}
function eS(e) {
    return e.basics.WeakRef
}
let tS = 0;
class Ei {
    constructor(t, r, o) {
        const n = t.getWindow;
        this._tabster = t,
        this._element = new it(n,r),
        this._props = {
            ...o
        },
        this.id = "i" + ++tS
    }
    getElement() {
        return this._element.get()
    }
    getProps() {
        return this._props
    }
    setProps(t) {
        this._props = {
            ...t
        }
    }
}
class es {
    constructor(t, r, o, n, i) {
        var a;
        this._focusIn = d=>{
            if (this._fixedTarget) {
                const f = this._fixedTarget.get();
                f && Vt(f);
                return
            }
            const c = this.input;
            if (this.onFocusIn && c) {
                const f = d.relatedTarget;
                this.onFocusIn(this, this._isBackward(!0, c, f), f)
            }
        }
        ,
        this._focusOut = d=>{
            if (this._fixedTarget)
                return;
            this.useDefaultAction = !1;
            const c = this.input;
            if (this.onFocusOut && c) {
                const f = d.relatedTarget;
                this.onFocusOut(this, this._isBackward(!1, c, f), f)
            }
        }
        ;
        const s = t()
          , l = s.document.createElement("i");
        l.tabIndex = 0,
        l.setAttribute("role", "none"),
        l.setAttribute(Mm, ""),
        l.setAttribute("aria-hidden", "true");
        const u = l.style;
        u.position = "fixed",
        u.width = u.height = "1px",
        u.opacity = "0.001",
        u.zIndex = "-1",
        u.setProperty("content-visibility", "hidden"),
        J2(l),
        this.input = l,
        this.isFirst = o.isFirst,
        this.isOutside = r,
        this._isPhantom = (a = o.isPhantom) !== null && a !== void 0 ? a : !1,
        this._fixedTarget = i,
        l.addEventListener("focusin", this._focusIn),
        l.addEventListener("focusout", this._focusOut),
        l.__tabsterDummyContainer = n,
        this._isPhantom && (this._disposeTimer = s.setTimeout(()=>{
            delete this._disposeTimer,
            this.dispose()
        }
        , 0),
        this._clearDisposeTimeout = ()=>{
            this._disposeTimer && (s.clearTimeout(this._disposeTimer),
            delete this._disposeTimer),
            delete this._clearDisposeTimeout
        }
        )
    }
    dispose() {
        var t;
        this._clearDisposeTimeout && this._clearDisposeTimeout();
        const r = this.input;
        r && (delete this._fixedTarget,
        delete this.onFocusIn,
        delete this.onFocusOut,
        delete this.input,
        r.removeEventListener("focusin", this._focusIn),
        r.removeEventListener("focusout", this._focusOut),
        delete r.__tabsterDummyContainer,
        (t = r.parentElement) === null || t === void 0 || t.removeChild(r))
    }
    setTopLeft(t, r) {
        var o;
        const n = (o = this.input) === null || o === void 0 ? void 0 : o.style;
        n && (n.top = `${t}px`,
        n.left = `${r}px`)
    }
    _isBackward(t, r, o) {
        return t && !o ? !this.isFirst : !!(o && r.compareDocumentPosition(o) & Node.DOCUMENT_POSITION_FOLLOWING)
    }
}
const Is = {
    Root: 1,
    Modalizer: 2,
    Mover: 3,
    Groupper: 4
};
class on {
    constructor(t, r, o, n, i, a) {
        this._element = r,
        this._instance = new oS(t,r,this,o,n,i,a)
    }
    _setHandlers(t, r) {
        this._onFocusIn = t,
        this._onFocusOut = r
    }
    moveOut(t) {
        var r;
        (r = this._instance) === null || r === void 0 || r.moveOut(t)
    }
    moveOutWithDefaultAction(t, r) {
        var o;
        (o = this._instance) === null || o === void 0 || o.moveOutWithDefaultAction(t, r)
    }
    getHandler(t) {
        return t ? this._onFocusIn : this._onFocusOut
    }
    setTabbable(t) {
        var r;
        (r = this._instance) === null || r === void 0 || r.setTabbable(this, t)
    }
    dispose() {
        this._instance && (this._instance.dispose(this),
        delete this._instance),
        delete this._onFocusIn,
        delete this._onFocusOut
    }
    static moveWithPhantomDummy(t, r, o, n, i) {
        var a;
        const l = new es(t.getWindow,!0,{
            isPhantom: !0,
            isFirst: !0
        }).input;
        if (l) {
            let u, d;
            if (r.tagName === "BODY")
                u = r,
                d = o && n || !o && !n ? r.firstElementChild : null;
            else {
                o && (!n || n && !t.focusable.isFocusable(r, !1, !0, !0)) ? (u = r,
                d = n ? r.firstElementChild : null) : (u = r.parentElement,
                d = o && n || !o && !n ? r : r.nextElementSibling);
                let c, f;
                do
                    c = o && n || !o && !n ? d == null ? void 0 : d.previousElementSibling : d,
                    f = (a = c == null ? void 0 : c.__tabsterDummyContainer) === null || a === void 0 ? void 0 : a.get(),
                    f === r ? d = o && n || !o && !n ? c : c == null ? void 0 : c.nextElementSibling : f = void 0;
                while (f)
            }
            u && Rr({
                by: "root",
                owner: u,
                next: null,
                relatedEvent: i
            }) && (u.insertBefore(l, d),
            Vt(l))
        }
    }
    static addPhantomDummyWithTarget(t, r, o, n) {
        const a = new es(t.getWindow,!0,{
            isPhantom: !0,
            isFirst: !0
        },void 0,new it(t.getWindow,n)).input;
        if (a) {
            let s, l;
            K2(r) && !o ? (s = r,
            l = r.firstElementChild) : (s = r.parentElement,
            l = o ? r : r.nextElementSibling),
            s == null || s.insertBefore(a, l)
        }
    }
}
class rS {
    constructor(t) {
        this._updateQueue = new Set,
        this._lastUpdateQueueTime = 0,
        this._changedParents = new WeakSet,
        this._dummyElements = [],
        this._dummyCallbacks = new WeakMap,
        this._domChanged = r=>{
            var o;
            this._changedParents.has(r) || (this._changedParents.add(r),
            !this._updateDummyInputsTimer && (this._updateDummyInputsTimer = (o = this._win) === null || o === void 0 ? void 0 : o.call(this).setTimeout(()=>{
                delete this._updateDummyInputsTimer;
                for (const n of this._dummyElements) {
                    const i = n.get();
                    if (i) {
                        const a = this._dummyCallbacks.get(i);
                        if (a) {
                            const s = i.parentElement;
                            (!s || this._changedParents.has(s)) && a()
                        }
                    }
                }
                this._changedParents = new WeakSet
            }
            , Fl)))
        }
        ,
        this._win = t
    }
    add(t, r) {
        !this._dummyCallbacks.has(t) && this._win && (this._dummyElements.push(new it(this._win,t)),
        this._dummyCallbacks.set(t, r),
        this.domChanged = this._domChanged)
    }
    remove(t) {
        this._dummyElements = this._dummyElements.filter(r=>{
            const o = r.get();
            return o && o !== t
        }
        ),
        this._dummyCallbacks.delete(t),
        this._dummyElements.length === 0 && delete this.domChanged
    }
    dispose() {
        var t;
        const r = (t = this._win) === null || t === void 0 ? void 0 : t.call(this);
        this._updateTimer && (r == null || r.clearTimeout(this._updateTimer),
        delete this._updateTimer),
        this._updateDummyInputsTimer && (r == null || r.clearTimeout(this._updateDummyInputsTimer),
        delete this._updateDummyInputsTimer),
        this._changedParents = new WeakSet,
        this._dummyCallbacks = new WeakMap,
        this._dummyElements = [],
        this._updateQueue.clear(),
        delete this.domChanged,
        delete this._win
    }
    updatePositions(t) {
        this._win && (this._updateQueue.add(t),
        this._lastUpdateQueueTime = Date.now(),
        this._scheduledUpdatePositions())
    }
    _scheduledUpdatePositions() {
        var t;
        this._updateTimer || (this._updateTimer = (t = this._win) === null || t === void 0 ? void 0 : t.call(this).setTimeout(()=>{
            if (delete this._updateTimer,
            this._lastUpdateQueueTime + Fl <= Date.now()) {
                const r = new Map
                  , o = [];
                for (const n of this._updateQueue)
                    o.push(n(r));
                this._updateQueue.clear();
                for (const n of o)
                    n();
                r.clear()
            } else
                this._scheduledUpdatePositions()
        }
        , Fl))
    }
}
class oS {
    constructor(t, r, o, n, i, a, s) {
        this._wrappers = [],
        this._isOutside = !1,
        this._transformElements = new Set,
        this._onFocusIn = (h,p,m)=>{
            this._onFocus(!0, h, p, m)
        }
        ,
        this._onFocusOut = (h,p,m)=>{
            this._onFocus(!1, h, p, m)
        }
        ,
        this.moveOut = h=>{
            var p;
            const m = this._firstDummy
              , w = this._lastDummy;
            if (m && w) {
                this._ensurePosition();
                const v = m.input
                  , g = w.input
                  , y = (p = this._element) === null || p === void 0 ? void 0 : p.get();
                if (v && g && y) {
                    let x;
                    h ? (v.tabIndex = 0,
                    x = v) : (g.tabIndex = 0,
                    x = g),
                    x && Vt(x)
                }
            }
        }
        ,
        this.moveOutWithDefaultAction = (h,p)=>{
            var m;
            const w = this._firstDummy
              , v = this._lastDummy;
            if (w && v) {
                this._ensurePosition();
                const g = w.input
                  , y = v.input
                  , x = (m = this._element) === null || m === void 0 ? void 0 : m.get();
                if (g && y && x) {
                    let S;
                    h ? !w.isOutside && this._tabster.focusable.isFocusable(x, !0, !0, !0) ? S = x : (w.useDefaultAction = !0,
                    g.tabIndex = 0,
                    S = g) : (v.useDefaultAction = !0,
                    y.tabIndex = 0,
                    S = y),
                    S && Rr({
                        by: "root",
                        owner: x,
                        next: null,
                        relatedEvent: p
                    }) && Vt(S)
                }
            }
        }
        ,
        this.setTabbable = (h,p)=>{
            var m, w;
            for (const g of this._wrappers)
                if (g.manager === h) {
                    g.tabbable = p;
                    break
                }
            const v = this._getCurrent();
            if (v) {
                const g = v.tabbable ? 0 : -1;
                let y = (m = this._firstDummy) === null || m === void 0 ? void 0 : m.input;
                y && (y.tabIndex = g),
                y = (w = this._lastDummy) === null || w === void 0 ? void 0 : w.input,
                y && (y.tabIndex = g)
            }
        }
        ,
        this._addDummyInputs = ()=>{
            this._addTimer || (this._addTimer = this._getWindow().setTimeout(()=>{
                delete this._addTimer,
                this._ensurePosition(),
                this._addTransformOffsets()
            }
            , 0))
        }
        ,
        this._addTransformOffsets = ()=>{
            this._tabster._dummyObserver.updatePositions(this._computeTransformOffsets)
        }
        ,
        this._computeTransformOffsets = h=>{
            var p, m;
            const w = ((p = this._firstDummy) === null || p === void 0 ? void 0 : p.input) || ((m = this._lastDummy) === null || m === void 0 ? void 0 : m.input)
              , v = this._transformElements
              , g = new Set;
            let y = 0
              , x = 0;
            const S = this._getWindow();
            for (let _ = w; _ && _.nodeType === Node.ELEMENT_NODE; _ = _.parentElement) {
                let k = h.get(_);
                if (k === void 0) {
                    const E = S.getComputedStyle(_).transform;
                    E && E !== "none" && (k = {
                        scrollTop: _.scrollTop,
                        scrollLeft: _.scrollLeft
                    }),
                    h.set(_, k || null)
                }
                k && (g.add(_),
                v.has(_) || _.addEventListener("scroll", this._addTransformOffsets),
                y += k.scrollTop,
                x += k.scrollLeft)
            }
            for (const _ of v)
                g.has(_) || _.removeEventListener("scroll", this._addTransformOffsets);
            return this._transformElements = g,
            ()=>{
                var _, k;
                (_ = this._firstDummy) === null || _ === void 0 || _.setTopLeft(y, x),
                (k = this._lastDummy) === null || k === void 0 || k.setTopLeft(y, x)
            }
        }
        ;
        const l = r.get();
        if (!l)
            throw new Error("No element");
        this._tabster = t,
        this._getWindow = t.getWindow,
        this._callForDefaultAction = s;
        const u = l.__tabsterDummy;
        if ((u || this)._wrappers.push({
            manager: o,
            priority: n,
            tabbable: !0
        }),
        u)
            return u;
        l.__tabsterDummy = this;
        const d = i == null ? void 0 : i.dummyInputsPosition
          , c = l.tagName;
        this._isOutside = d ? d === Gm.Outside : (a || c === "UL" || c === "OL" || c === "TABLE") && !(c === "LI" || c === "TD" || c === "TH"),
        this._firstDummy = new es(this._getWindow,this._isOutside,{
            isFirst: !0
        },r),
        this._lastDummy = new es(this._getWindow,this._isOutside,{
            isFirst: !1
        },r);
        const f = this._firstDummy.input;
        f && t._dummyObserver.add(f, this._addDummyInputs),
        this._firstDummy.onFocusIn = this._onFocusIn,
        this._firstDummy.onFocusOut = this._onFocusOut,
        this._lastDummy.onFocusIn = this._onFocusIn,
        this._lastDummy.onFocusOut = this._onFocusOut,
        this._element = r,
        this._addDummyInputs()
    }
    dispose(t, r) {
        var o, n, i, a;
        if ((this._wrappers = this._wrappers.filter(l=>l.manager !== t && !r)).length === 0) {
            delete ((o = this._element) === null || o === void 0 ? void 0 : o.get()).__tabsterDummy;
            for (const d of this._transformElements)
                d.removeEventListener("scroll", this._addTransformOffsets);
            this._transformElements.clear();
            const l = this._getWindow();
            this._addTimer && (l.clearTimeout(this._addTimer),
            delete this._addTimer);
            const u = (n = this._firstDummy) === null || n === void 0 ? void 0 : n.input;
            u && this._tabster._dummyObserver.remove(u),
            (i = this._firstDummy) === null || i === void 0 || i.dispose(),
            (a = this._lastDummy) === null || a === void 0 || a.dispose()
        }
    }
    _onFocus(t, r, o, n) {
        var i;
        const a = this._getCurrent();
        a && (!r.useDefaultAction || this._callForDefaultAction) && ((i = a.manager.getHandler(t)) === null || i === void 0 || i(r, o, n))
    }
    _getCurrent() {
        return this._wrappers.sort((t,r)=>t.tabbable !== r.tabbable ? t.tabbable ? -1 : 1 : t.priority - r.priority),
        this._wrappers[0]
    }
    _ensurePosition() {
        var t, r, o;
        const n = (t = this._element) === null || t === void 0 ? void 0 : t.get()
          , i = (r = this._firstDummy) === null || r === void 0 ? void 0 : r.input
          , a = (o = this._lastDummy) === null || o === void 0 ? void 0 : o.input;
        if (!(!n || !i || !a))
            if (this._isOutside) {
                const s = n.parentElement;
                if (s) {
                    const l = n.nextElementSibling;
                    l !== a && s.insertBefore(a, l),
                    n.previousElementSibling !== i && s.insertBefore(i, n)
                }
            } else {
                n.lastElementChild !== a && n.appendChild(a);
                const s = n.firstElementChild;
                s && s !== i && n.insertBefore(i, s)
            }
    }
}
function r0(e) {
    let t = null;
    for (let r = e.lastElementChild; r; r = r.lastElementChild)
        t = r;
    return t || void 0
}
function nS(e, t) {
    let r = e
      , o = null;
    for (; r && !o; )
        o = t ? r.previousElementSibling : r.nextElementSibling,
        r = r.parentElement;
    return o || void 0
}
function Or(e, t, r) {
    const o = document.createEvent("HTMLEvents");
    return o.initEvent(t, !0, !0),
    o.details = r,
    e.dispatchEvent(o),
    !o.defaultPrevented
}
function Rr(e) {
    return Or(e.owner, Um, e)
}
function Rl(e, t, r, o) {
    const n = e.storageEntry(t, !0);
    let i = !1;
    if (!n.aug) {
        if (o === void 0)
            return i;
        n.aug = {}
    }
    if (o === void 0) {
        if (r in n.aug) {
            const a = n.aug[r];
            delete n.aug[r],
            a === null ? t.removeAttribute(r) : t.setAttribute(r, a),
            i = !0
        }
    } else {
        let a;
        r in n.aug || (a = t.getAttribute(r)),
        a !== void 0 && a !== o && (n.aug[r] = a,
        o === null ? t.removeAttribute(r) : t.setAttribute(r, o),
        i = !0)
    }
    return o === void 0 && Object.keys(n.aug).length === 0 && (delete n.aug,
    e.storageEntry(t, !1)),
    i
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
function o0(e, t) {
    const r = JSON.stringify(e);
    return t === !0 ? r : {
        [rr]: r
    }
}
function iS(e, t) {
    for (const r of Object.keys(t)) {
        const o = t[r];
        o ? e[r] = o : delete e[r]
    }
}
function aS(e, t, r) {
    let o;
    if (r) {
        const n = e.getAttribute(rr);
        if (n)
            try {
                o = JSON.parse(n)
            } catch {}
    }
    o || (o = {}),
    iS(o, t),
    Object.keys(o).length > 0 ? e.setAttribute(rr, o0(o, !0)) : e.removeAttribute(rr)
}
class Fp extends on {
    constructor(t, r, o, n) {
        super(t, r, Is.Root, n, void 0, !0),
        this._onDummyInputFocus = i=>{
            var a;
            if (i.useDefaultAction)
                this._setFocused(!1);
            else {
                this._tabster.keyboardNavigation.setNavigatingWithKeyboard(!0);
                const s = this._element.get();
                if (s) {
                    this._setFocused(!0);
                    const l = this._tabster.focusedElement.getFirstOrLastTabbable(i.isFirst, {
                        container: s,
                        ignoreAccessibility: !0
                    });
                    if (l) {
                        Vt(l);
                        return
                    }
                }
                (a = i.input) === null || a === void 0 || a.blur()
            }
        }
        ,
        this._setHandlers(this._onDummyInputFocus),
        this._tabster = t,
        this._setFocused = o
    }
}
class sS extends Ei {
    constructor(t, r, o, n, i) {
        super(t, r, n),
        this._isFocused = !1,
        this._setFocused = l=>{
            var u;
            if (this._setFocusedTimer && (this._tabster.getWindow().clearTimeout(this._setFocusedTimer),
            delete this._setFocusedTimer),
            this._isFocused === l)
                return;
            const d = this._element.get();
            d && (l ? (this._isFocused = !0,
            (u = this._dummyManager) === null || u === void 0 || u.setTabbable(!1),
            Or(this._tabster.root.eventTarget, "focus", {
                element: d
            })) : this._setFocusedTimer = this._tabster.getWindow().setTimeout(()=>{
                var c;
                delete this._setFocusedTimer,
                this._isFocused = !1,
                (c = this._dummyManager) === null || c === void 0 || c.setTabbable(!0),
                Or(this._tabster.root.eventTarget, "blur", {
                    element: d
                })
            }
            , 0))
        }
        ,
        this._onFocusIn = l=>{
            const u = this._tabster.getParent
              , d = this._element.get();
            let c = l.target;
            do {
                if (c === d) {
                    this._setFocused(!0);
                    return
                }
                c = c && u(c)
            } while (c)
        }
        ,
        this._onFocusOut = ()=>{
            this._setFocused(!1)
        }
        ,
        this._onDispose = o;
        const a = t.getWindow;
        this.uid = ka(a, r),
        this._sys = i,
        (t.controlTab || t.rootDummyInputs) && this.addDummyInputs();
        const s = a();
        s.document.addEventListener("focusin", this._onFocusIn),
        s.document.addEventListener("focusout", this._onFocusOut),
        this._add()
    }
    addDummyInputs() {
        this._dummyManager || (this._dummyManager = new Fp(this._tabster,this._element,this._setFocused,this._sys))
    }
    dispose() {
        var t;
        this._onDispose(this);
        const r = this._tabster.getWindow();
        r.document.removeEventListener("focusin", this._onFocusIn),
        r.document.removeEventListener("focusout", this._onFocusOut),
        this._setFocusedTimer && (r.clearTimeout(this._setFocusedTimer),
        delete this._setFocusedTimer),
        (t = this._dummyManager) === null || t === void 0 || t.dispose(),
        this._remove()
    }
    moveOutWithDefaultAction(t, r) {
        const o = this._dummyManager;
        if (o)
            o.moveOutWithDefaultAction(t, r);
        else {
            const n = this.getElement();
            n && Fp.moveWithPhantomDummy(this._tabster, n, !0, t, r)
        }
    }
    _add() {}
    _remove() {}
}
class ce {
    constructor(t, r) {
        this._autoRootWaiting = !1,
        this._roots = {},
        this._forceDummy = !1,
        this.rootById = {},
        this._autoRootCreate = ()=>{
            var o;
            const n = this._win().document
              , i = n.body;
            if (i) {
                this._autoRootUnwait(n);
                const a = this._autoRoot;
                if (a)
                    return aS(i, {
                        root: a
                    }, !0),
                    Km(this._tabster, i),
                    (o = $e(this._tabster, i)) === null || o === void 0 ? void 0 : o.root
            } else
                this._autoRootWaiting || (this._autoRootWaiting = !0,
                n.addEventListener("readystatechange", this._autoRootCreate))
        }
        ,
        this._onRootDispose = o=>{
            delete this._roots[o.id]
        }
        ,
        this._tabster = t,
        this._win = t.getWindow,
        this._autoRoot = r,
        this.eventTarget = $2(this._win),
        t.queueInit(()=>{
            this._autoRoot && this._autoRootCreate()
        }
        )
    }
    _autoRootUnwait(t) {
        t.removeEventListener("readystatechange", this._autoRootCreate),
        this._autoRootWaiting = !1
    }
    dispose() {
        const t = this._win();
        this._autoRootUnwait(t.document),
        delete this._autoRoot,
        Object.keys(this._roots).forEach(r=>{
            this._roots[r] && (this._roots[r].dispose(),
            delete this._roots[r])
        }
        ),
        this.rootById = {}
    }
    createRoot(t, r, o) {
        const n = new sS(this._tabster,t,this._onRootDispose,r,o);
        return this._roots[n.id] = n,
        this._forceDummy && n.addDummyInputs(),
        n
    }
    addDummyInputs() {
        this._forceDummy = !0;
        const t = this._roots;
        for (const r of Object.keys(t))
            t[r].addDummyInputs()
    }
    static getRootByUId(t, r) {
        const o = t().__tabsterInstance;
        return o && o.root.rootById[r]
    }
    static getTabsterContext(t, r, o) {
        o === void 0 && (o = {});
        var n, i, a, s;
        if (!r.ownerDocument)
            return;
        const {checkRtl: l, referenceElement: u} = o
          , d = t.getParent;
        t.drainInitQueue();
        let c, f, h, p, m = !1, w, v, g, y, x = u || r;
        const S = {};
        for (; x && (!c || l); ) {
            const k = $e(t, x);
            if (l && g === void 0) {
                const R = x.dir;
                R && (g = R.toLowerCase() === "rtl")
            }
            if (!k) {
                x = d(x);
                continue
            }
            const E = x.tagName;
            (k.uncontrolled || E === "IFRAME" || E === "WEBVIEW") && (y = x),
            !p && (!((n = k.focusable) === null || n === void 0) && n.excludeFromMover) && !h && (m = !0);
            const I = k.modalizer
              , F = k.groupper
              , Y = k.mover;
            !f && I && (f = I),
            !h && F && (!f || I) && (f ? (!F.isActive() && F.getProps().tabbability && f.userId !== ((i = t.modalizer) === null || i === void 0 ? void 0 : i.activeId) && (f = void 0,
            h = F),
            v = F) : h = F),
            !p && Y && (!f || I) && (!F || x !== r) && (p = Y,
            w = !!h && h !== F),
            k.root && (c = k.root),
            !((a = k.focusable) === null || a === void 0) && a.ignoreKeydown && Object.assign(S, k.focusable.ignoreKeydown),
            x = d(x)
        }
        if (!c) {
            const k = t.root;
            k._autoRoot && !((s = r.ownerDocument) === null || s === void 0) && s.body && (c = k._autoRootCreate())
        }
        return h && !p && (w = !0),
        c ? {
            root: c,
            modalizer: f,
            groupper: h,
            mover: p,
            groupperBeforeMover: w,
            modalizerInGroupper: v,
            rtl: l ? !!g : void 0,
            uncontrolled: y,
            excludedFromMover: m,
            ignoreKeydown: k=>!!S[k.key]
        } : void 0
    }
    static getRoot(t, r) {
        var o;
        const n = t.getParent;
        for (let i = r; i; i = n(i)) {
            const a = (o = $e(t, i)) === null || o === void 0 ? void 0 : o.root;
            if (a)
                return a
        }
    }
    onRoot(t, r) {
        r ? delete this.rootById[t.uid] : this.rootById[t.uid] = t
    }
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
class n0 {
    constructor() {
        this._callbacks = []
    }
    dispose() {
        this._callbacks = [],
        delete this._val
    }
    subscribe(t) {
        const r = this._callbacks;
        r.indexOf(t) < 0 && r.push(t)
    }
    subscribeFirst(t) {
        const r = this._callbacks
          , o = r.indexOf(t);
        o >= 0 && r.splice(o, 1),
        r.unshift(t)
    }
    unsubscribe(t) {
        const r = this._callbacks.indexOf(t);
        r >= 0 && this._callbacks.splice(r, 1)
    }
    setVal(t, r) {
        this._val !== t && (this._val = t,
        this._callCallbacks(t, r))
    }
    getVal() {
        return this._val
    }
    trigger(t, r) {
        this._callCallbacks(t, r)
    }
    _callCallbacks(t, r) {
        this._callbacks.forEach(o=>o(t, r))
    }
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
class lS {
    constructor(t) {
        this._tabster = t
    }
    dispose() {}
    getProps(t) {
        const r = $e(this._tabster, t);
        return r && r.focusable || {}
    }
    isFocusable(t, r, o, n) {
        return t0(t, _d) && (r || t.tabIndex !== -1) ? (o || this.isVisible(t)) && (n || this.isAccessible(t)) : !1
    }
    isVisible(t) {
        if (!t.ownerDocument || t.nodeType !== Node.ELEMENT_NODE || t.offsetParent === null && t.ownerDocument.body !== t)
            return !1;
        const r = t.ownerDocument.defaultView;
        if (!r)
            return !1;
        const o = t.ownerDocument.body.getBoundingClientRect();
        return !(o.width === 0 && o.height === 0 || r.getComputedStyle(t).visibility === "hidden")
    }
    isAccessible(t) {
        var r;
        for (let o = t; o; o = o.parentElement) {
            const n = $e(this._tabster, o);
            if (this._isHidden(o) || !((r = n == null ? void 0 : n.focusable) === null || r === void 0 ? void 0 : r.ignoreAriaDisabled) && this._isDisabled(o))
                return !1
        }
        return !0
    }
    _isDisabled(t) {
        return t.hasAttribute("disabled")
    }
    _isHidden(t) {
        var r;
        const o = t.getAttribute("aria-hidden");
        return !!(o && o.toLowerCase() === "true" && !(!((r = this._tabster.modalizer) === null || r === void 0) && r.isAugmented(t)))
    }
    findFirst(t, r) {
        return this.findElement({
            ...t
        }, r)
    }
    findLast(t, r) {
        return this.findElement({
            isBackward: !0,
            ...t
        }, r)
    }
    findNext(t, r) {
        return this.findElement({
            ...t
        }, r)
    }
    findPrev(t, r) {
        return this.findElement({
            ...t,
            isBackward: !0
        }, r)
    }
    findDefault(t, r) {
        return this.findElement({
            ...t,
            acceptCondition: o=>this.isFocusable(o, t.includeProgrammaticallyFocusable) && !!this.getProps(o).isDefault
        }, r) || null
    }
    findAll(t) {
        return this._findElements(!0, t) || []
    }
    findElement(t, r) {
        const o = this._findElements(!1, t, r);
        return o && o[0]
    }
    _findElements(t, r, o) {
        var n, i, a;
        const {container: s, currentElement: l=null, includeProgrammaticallyFocusable: u, useActiveModalizer: d, ignoreAccessibility: c, modalizerId: f, isBackward: h, onElement: p} = r;
        o || (o = {});
        const m = [];
        let {acceptCondition: w} = r;
        const v = !!w;
        if (!s)
            return null;
        w || (w = S=>this.isFocusable(S, u, !1, c));
        const g = {
            container: s,
            modalizerUserId: f === void 0 && d ? (n = this._tabster.modalizer) === null || n === void 0 ? void 0 : n.activeId : f || ((a = (i = ce.getTabsterContext(this._tabster, s)) === null || i === void 0 ? void 0 : i.modalizer) === null || a === void 0 ? void 0 : a.userId),
            from: l || s,
            isBackward: h,
            acceptCondition: w,
            hasCustomCondition: v,
            includeProgrammaticallyFocusable: u,
            ignoreAccessibility: c,
            cachedGrouppers: {}
        }
          , y = Bd(s.ownerDocument, s, S=>this._acceptElement(S, g));
        if (!y)
            return null;
        const x = S=>{
            var _, k;
            const E = (_ = g.foundElement) !== null && _ !== void 0 ? _ : g.foundBackward;
            return E && m.push(E),
            t ? E && (g.found = !1,
            delete g.foundElement,
            delete g.foundBackward,
            delete g.fromCtx,
            g.from = E,
            p && !p(E)) ? !1 : !!(E || S) : (E && o && (o.uncontrolled = (k = ce.getTabsterContext(this._tabster, E)) === null || k === void 0 ? void 0 : k.uncontrolled),
            !!(S && !E))
        }
        ;
        if (l || (o.outOfDOMOrder = !0),
        l)
            y.currentNode = l;
        else if (h) {
            const S = r0(s);
            if (!S)
                return null;
            if (this._acceptElement(S, g) === NodeFilter.FILTER_ACCEPT && !x(!0))
                return g.skippedFocusable && (o.outOfDOMOrder = !0),
                m;
            y.currentNode = S
        }
        do
            h ? y.previousNode() : y.nextNode();
        while (x());
        return g.skippedFocusable && (o.outOfDOMOrder = !0),
        m.length ? m : null
    }
    _acceptElement(t, r) {
        var o, n, i, a;
        if (r.found)
            return NodeFilter.FILTER_ACCEPT;
        const s = r.foundBackward;
        if (s && (t === s || !s.contains(t)))
            return r.found = !0,
            r.foundElement = s,
            NodeFilter.FILTER_ACCEPT;
        const l = r.container;
        if (t === l)
            return NodeFilter.FILTER_SKIP;
        if (!l.contains(t) || t.__tabsterDummyContainer || !((o = r.rejectElementsFrom) === null || o === void 0) && o.contains(t))
            return NodeFilter.FILTER_REJECT;
        const u = r.currentCtx = ce.getTabsterContext(this._tabster, t);
        if (!u)
            return NodeFilter.FILTER_SKIP;
        if (e0(t))
            return this.isFocusable(t, void 0, !0, !0) && (r.skippedFocusable = !0),
            NodeFilter.FILTER_SKIP;
        if (!r.hasCustomCondition && (t.tagName === "IFRAME" || t.tagName === "WEBVIEW"))
            return ((n = u.modalizer) === null || n === void 0 ? void 0 : n.userId) === ((i = this._tabster.modalizer) === null || i === void 0 ? void 0 : i.activeId) ? (r.found = !0,
            r.rejectElementsFrom = r.foundElement = t,
            NodeFilter.FILTER_ACCEPT) : NodeFilter.FILTER_REJECT;
        if (!r.ignoreAccessibility && !this.isAccessible(t))
            return this.isFocusable(t, !1, !0, !0) && (r.skippedFocusable = !0),
            NodeFilter.FILTER_REJECT;
        let d, c = r.fromCtx;
        c || (c = r.fromCtx = ce.getTabsterContext(this._tabster, r.from));
        const f = c == null ? void 0 : c.mover;
        let h = u.groupper
          , p = u.mover;
        if (d = (a = this._tabster.modalizer) === null || a === void 0 ? void 0 : a.acceptElement(t, r),
        d !== void 0 && (r.skippedFocusable = !0),
        d === void 0 && (h || p || f)) {
            const m = h == null ? void 0 : h.getElement()
              , w = f == null ? void 0 : f.getElement();
            let v = p == null ? void 0 : p.getElement();
            v && (w != null && w.contains(v)) && l.contains(w) && (!m || !p || w.contains(m)) && (p = f,
            v = w),
            m && (m === l || !l.contains(m)) && (h = void 0),
            v && !l.contains(v) && (p = void 0),
            h && p && (v && m && !m.contains(v) ? p = void 0 : h = void 0),
            h && (d = h.acceptElement(t, r)),
            p && (d = p.acceptElement(t, r))
        }
        return d === void 0 && (d = r.acceptCondition(t) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP,
        d === NodeFilter.FILTER_SKIP && this.isFocusable(t, !1, !0, !0) && (r.skippedFocusable = !0)),
        d === NodeFilter.FILTER_ACCEPT && !r.found && (r.isBackward ? (r.foundBackward = t,
        d = NodeFilter.FILTER_SKIP) : (r.found = !0,
        r.foundElement = t)),
        d
    }
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
const K = {
    Tab: 9,
    Enter: 13,
    Esc: 27,
    Space: 32,
    PageUp: 33,
    PageDown: 34,
    End: 35,
    Home: 36,
    Left: 37,
    Up: 38,
    Right: 39,
    Down: 40
};
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
function uS(e, t) {
    var r;
    const o = e.getParent;
    let n = t;
    do {
        const i = (r = $e(e, n)) === null || r === void 0 ? void 0 : r.uncontrolled;
        if (i && e.uncontrolled.isUncontrolledCompletely(n, !!i.completely))
            return n;
        n = o(n)
    } while (n)
}
class he extends n0 {
    constructor(t, r) {
        super(),
        this._init = ()=>{
            const o = this._win()
              , n = o.document;
            n.addEventListener(Dt, this._onFocusIn, !0),
            n.addEventListener("focusout", this._onFocusOut, !0),
            o.addEventListener("keydown", this._onKeyDown, !0);
            const i = n.activeElement;
            i && i !== n.body && this._setFocusedElement(i),
            this.subscribe(this._onChanged)
        }
        ,
        this._onFocusIn = o=>{
            this._setFocusedElement(o.target, o.details.relatedTarget, o.details.isFocusedProgrammatically)
        }
        ,
        this._onFocusOut = o=>{
            this._setFocusedElement(void 0, o.relatedTarget)
        }
        ,
        this._validateFocusedElement = o=>{}
        ,
        this._onKeyDown = o=>{
            if (o.keyCode !== K.Tab || o.ctrlKey)
                return;
            const n = this.getVal();
            if (!n || !n.ownerDocument || n.contentEditable === "true")
                return;
            const i = this._tabster
              , a = i.controlTab
              , s = ce.getTabsterContext(i, n);
            if (!s || s.ignoreKeydown(o))
                return;
            const l = o.shiftKey
              , u = he.findNextTabbable(i, s, void 0, n, void 0, l, !0)
              , d = s.root.getElement();
            if (!d)
                return;
            const c = u == null ? void 0 : u.element
              , f = uS(i, n);
            if (c) {
                const h = u.uncontrolled;
                if (s.uncontrolled || h != null && h.contains(n)) {
                    if (!u.outOfDOMOrder && h === s.uncontrolled || f && !f.contains(c))
                        return;
                    on.addPhantomDummyWithTarget(i, n, l, c);
                    return
                }
                if (h || c.tagName === "IFRAME") {
                    Rr({
                        by: "root",
                        owner: d,
                        next: c,
                        relatedEvent: o
                    }) && on.moveWithPhantomDummy(this._tabster, h ?? c, !1, l, o);
                    return
                }
                (a || u != null && u.outOfDOMOrder) && Rr({
                    by: "root",
                    owner: d,
                    next: c,
                    relatedEvent: o
                }) && (o.preventDefault(),
                o.stopImmediatePropagation(),
                Vt(c))
            } else
                !f && Rr({
                    by: "root",
                    owner: d,
                    next: null,
                    relatedEvent: o
                }) && s.root.moveOutWithDefaultAction(l, o)
        }
        ,
        this._onChanged = (o,n)=>{
            var i, a;
            if (o)
                Or(o, Wm, n);
            else {
                const s = (i = this._lastVal) === null || i === void 0 ? void 0 : i.get();
                if (s) {
                    const l = {
                        ...n
                    }
                      , u = ce.getTabsterContext(this._tabster, s)
                      , d = (a = u == null ? void 0 : u.modalizer) === null || a === void 0 ? void 0 : a.userId;
                    d && (l.modalizerId = d),
                    Or(s, $m, l)
                }
            }
        }
        ,
        this._tabster = t,
        this._win = r,
        t.queueInit(this._init)
    }
    dispose() {
        super.dispose();
        const t = this._win();
        t.document.removeEventListener(Dt, this._onFocusIn, !0),
        t.document.removeEventListener("focusout", this._onFocusOut, !0),
        t.removeEventListener("keydown", this._onKeyDown, !0),
        this.unsubscribe(this._onChanged),
        delete he._lastResetElement,
        delete this._nextVal,
        delete this._lastVal
    }
    static forgetMemorized(t, r) {
        var o, n;
        let i = he._lastResetElement
          , a = i && i.get();
        a && r.contains(a) && delete he._lastResetElement,
        a = (n = (o = t._nextVal) === null || o === void 0 ? void 0 : o.element) === null || n === void 0 ? void 0 : n.get(),
        a && r.contains(a) && delete t._nextVal,
        i = t._lastVal,
        a = i && i.get(),
        a && r.contains(a) && delete t._lastVal
    }
    getFocusedElement() {
        return this.getVal()
    }
    getLastFocusedElement() {
        var t;
        let r = (t = this._lastVal) === null || t === void 0 ? void 0 : t.get();
        return (!r || r && !Ed(r.ownerDocument, r)) && (this._lastVal = r = void 0),
        r
    }
    focus(t, r, o) {
        return this._tabster.focusable.isFocusable(t, r, !1, o) ? (t.focus(),
        !0) : !1
    }
    focusDefault(t) {
        const r = this._tabster.focusable.findDefault({
            container: t
        });
        return r ? (this._tabster.focusedElement.focus(r),
        !0) : !1
    }
    getFirstOrLastTabbable(t, r) {
        var o;
        const {container: n, ignoreAccessibility: i} = r;
        let a;
        if (n) {
            const s = ce.getTabsterContext(this._tabster, n);
            s && (a = (o = he.findNextTabbable(this._tabster, s, n, void 0, void 0, !t, i)) === null || o === void 0 ? void 0 : o.element)
        }
        return a && !(n != null && n.contains(a)) && (a = void 0),
        a || void 0
    }
    _focusFirstOrLast(t, r) {
        const o = this.getFirstOrLastTabbable(t, r);
        return o ? (this.focus(o, !1, !0),
        !0) : !1
    }
    focusFirst(t) {
        return this._focusFirstOrLast(!0, t)
    }
    focusLast(t) {
        return this._focusFirstOrLast(!1, t)
    }
    resetFocus(t) {
        if (!this._tabster.focusable.isVisible(t))
            return !1;
        if (this._tabster.focusable.isFocusable(t, !0, !0, !0))
            this.focus(t);
        else {
            const r = t.getAttribute("tabindex")
              , o = t.getAttribute("aria-hidden");
            t.tabIndex = -1,
            t.setAttribute("aria-hidden", "true"),
            he._lastResetElement = new it(this._win,t),
            this.focus(t, !0, !0),
            this._setOrRemoveAttribute(t, "tabindex", r),
            this._setOrRemoveAttribute(t, "aria-hidden", o)
        }
        return !0
    }
    _setOrRemoveAttribute(t, r, o) {
        o === null ? t.removeAttribute(r) : t.setAttribute(r, o)
    }
    _setFocusedElement(t, r, o) {
        var n, i;
        if (this._tabster._noop)
            return;
        const a = {
            relatedTarget: r
        };
        if (t) {
            const l = (n = he._lastResetElement) === null || n === void 0 ? void 0 : n.get();
            if (he._lastResetElement = void 0,
            l === t || e0(t))
                return;
            a.isFocusedProgrammatically = o;
            const u = ce.getTabsterContext(this._tabster, t)
              , d = (i = u == null ? void 0 : u.modalizer) === null || i === void 0 ? void 0 : i.userId;
            d && (a.modalizerId = d)
        }
        const s = this._nextVal = {
            element: t ? new it(this._win,t) : void 0,
            details: a
        };
        t && t !== this._val && this._validateFocusedElement(t),
        this._nextVal === s && this.setVal(t, a),
        this._nextVal = void 0
    }
    setVal(t, r) {
        super.setVal(t, r),
        t && (this._lastVal = new it(this._win,t))
    }
    static findNextTabbable(t, r, o, n, i, a, s) {
        const l = o || r.root.getElement();
        if (!l)
            return null;
        let u = null;
        const d = he._isTabbingTimer
          , c = t.getWindow();
        d && c.clearTimeout(d),
        he.isTabbing = !0,
        he._isTabbingTimer = c.setTimeout(()=>{
            delete he._isTabbingTimer,
            he.isTabbing = !1
        }
        , 0);
        const f = r.modalizer
          , h = r.groupper
          , p = r.mover
          , m = w=>{
            var v;
            if (u = w.findNextTabbable(n, i, a, s),
            n && !(u != null && u.element)) {
                const g = w !== f && ((v = w.getElement()) === null || v === void 0 ? void 0 : v.parentElement);
                if (g) {
                    const y = ce.getTabsterContext(t, n, {
                        referenceElement: g
                    });
                    if (y) {
                        const x = w.getElement()
                          , S = a ? x : x && r0(x) || x;
                        S && (u = he.findNextTabbable(t, y, o, S, g, a, s),
                        u && (u.outOfDOMOrder = !0))
                    }
                }
            }
        }
        ;
        if (h && p)
            m(r.groupperBeforeMover ? h : p);
        else if (h)
            m(h);
        else if (p)
            m(p);
        else if (f)
            m(f);
        else {
            const w = {
                container: l,
                currentElement: n,
                referenceElement: i,
                ignoreAccessibility: s,
                useActiveModalizer: !0
            }
              , v = {};
            u = {
                element: t.focusable[a ? "findPrev" : "findNext"](w, v),
                outOfDOMOrder: v.outOfDOMOrder,
                uncontrolled: v.uncontrolled
            }
        }
        return u
    }
}
he.isTabbing = !1;
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
class cS extends on {
    constructor(t, r, o, n) {
        super(o, t, Is.Groupper, n, !0),
        this._setHandlers((i,a,s)=>{
            var l, u;
            const d = t.get()
              , c = i.input;
            if (d && c) {
                const f = ce.getTabsterContext(o, c);
                if (f) {
                    let h;
                    h = (l = r.findNextTabbable(s || void 0, void 0, a, !0)) === null || l === void 0 ? void 0 : l.element,
                    h || (h = (u = he.findNextTabbable(o, f, void 0, i.isOutside ? c : nS(d, !a), void 0, a, !0)) === null || u === void 0 ? void 0 : u.element),
                    h && Vt(h)
                }
            }
        }
        )
    }
}
class dS extends Ei {
    constructor(t, r, o, n, i) {
        super(t, r, n),
        this._shouldTabInside = !1,
        this.makeTabbable(!1),
        this._onDispose = o,
        t.controlTab || (this.dummyManager = new cS(this._element,this,t,i))
    }
    dispose() {
        var t;
        this._onDispose(this),
        this._element.get(),
        (t = this.dummyManager) === null || t === void 0 || t.dispose(),
        delete this.dummyManager,
        delete this._first
    }
    findNextTabbable(t, r, o, n) {
        var i;
        const a = this.getElement();
        if (!a)
            return null;
        const s = ((i = t == null ? void 0 : t.__tabsterDummyContainer) === null || i === void 0 ? void 0 : i.get()) === a;
        if (!this._shouldTabInside && t && a.contains(t) && !s)
            return {
                element: void 0,
                outOfDOMOrder: !0
            };
        const l = this.getFirst(!0);
        if (!t || !a.contains(t) || s)
            return {
                element: l,
                outOfDOMOrder: !0
            };
        const u = this._tabster;
        let d = null, c = !1, f;
        if (this._shouldTabInside && l) {
            const h = {
                container: a,
                currentElement: t,
                referenceElement: r,
                ignoreAccessibility: n,
                useActiveModalizer: !0
            }
              , p = {};
            d = u.focusable[o ? "findPrev" : "findNext"](h, p),
            c = !!p.outOfDOMOrder,
            !d && this._props.tabbability === Vm.LimitedTrapFocus && (d = u.focusable[o ? "findLast" : "findFirst"]({
                container: a,
                ignoreAccessibility: n,
                useActiveModalizer: !0
            }, p),
            c = !0),
            f = p.uncontrolled
        }
        return {
            element: d,
            uncontrolled: f,
            outOfDOMOrder: c
        }
    }
    makeTabbable(t) {
        this._shouldTabInside = t || !this._props.tabbability
    }
    isActive(t) {
        var r;
        const o = this.getElement() || null;
        let n = !0;
        for (let a = o == null ? void 0 : o.parentElement; a; a = a.parentElement) {
            const s = (r = $e(this._tabster, a)) === null || r === void 0 ? void 0 : r.groupper;
            s && (s._shouldTabInside || (n = !1))
        }
        let i = n ? this._props.tabbability ? this._shouldTabInside : !1 : void 0;
        if (i && t) {
            const a = this._tabster.focusedElement.getFocusedElement();
            a && (i = a !== this.getFirst(!0))
        }
        return i
    }
    getFirst(t) {
        var r;
        const o = this.getElement();
        let n;
        if (o) {
            if (t && this._tabster.focusable.isFocusable(o))
                return o;
            n = (r = this._first) === null || r === void 0 ? void 0 : r.get(),
            n || (n = this._tabster.focusable.findFirst({
                container: o,
                useActiveModalizer: !0
            }) || void 0,
            n && this.setFirst(n))
        }
        return n
    }
    setFirst(t) {
        t ? this._first = new it(this._tabster.getWindow,t) : delete this._first
    }
    acceptElement(t, r) {
        var o;
        const n = r.cachedGrouppers
          , i = (o = this.getElement()) === null || o === void 0 ? void 0 : o.parentElement
          , a = i && ce.getTabsterContext(this._tabster, i)
          , s = a == null ? void 0 : a.groupper
          , l = a != null && a.groupperBeforeMover ? s : void 0;
        let u;
        const d = h=>{
            let p = n[h.id], m;
            return p ? m = p.isActive : (m = this.isActive(!0),
            p = n[h.id] = {
                isActive: m
            }),
            m
        }
        ;
        if (l && (u = l.getElement(),
        !d(l) && u && r.container !== u && r.container.contains(u)))
            return r.skippedFocusable = !0,
            NodeFilter.FILTER_REJECT;
        const c = d(this)
          , f = this.getElement();
        if (f && c !== !0) {
            if (f === t && s && (u || (u = s.getElement()),
            u && !d(s) && r.container.contains(u) && u !== r.container) || f !== t && f.contains(t))
                return r.skippedFocusable = !0,
                NodeFilter.FILTER_REJECT;
            const h = n[this.id];
            let p;
            if ("first"in h ? p = h.first : p = h.first = this.getFirst(!0),
            p && r.acceptCondition(p))
                return r.rejectElementsFrom = f,
                r.skippedFocusable = !0,
                p !== r.from ? (r.found = !0,
                r.foundElement = p,
                NodeFilter.FILTER_ACCEPT) : NodeFilter.FILTER_REJECT
        }
    }
}
class fS {
    constructor(t, r) {
        this._current = {},
        this._grouppers = {},
        this._init = ()=>{
            const o = this._win();
            this._tabster.focusedElement.subscribeFirst(this._onFocus),
            o.document.addEventListener("mousedown", this._onMouseDown, !0),
            o.addEventListener("keydown", this._onKeyDown, !0)
        }
        ,
        this._onGroupperDispose = o=>{
            delete this._grouppers[o.id]
        }
        ,
        this._onFocus = o=>{
            o && this._updateCurrent(o, !0, !0)
        }
        ,
        this._onMouseDown = o=>{
            o.target && this._updateCurrent(o.target, !0)
        }
        ,
        this._onKeyDown = o=>{
            if (o.keyCode !== K.Enter && o.keyCode !== K.Esc || o.ctrlKey || o.altKey || o.shiftKey || o.metaKey)
                return;
            const n = this._tabster.focusedElement.getFocusedElement();
            n && this.handleKeyPress(n, o)
        }
        ,
        this._tabster = t,
        this._win = r,
        t.queueInit(this._init)
    }
    dispose() {
        const t = this._win();
        this._handleKeyPressTimer && (t.clearTimeout(this._handleKeyPressTimer),
        delete this._handleKeyPressTimer),
        this._current = {},
        this._updateTimer && (t.clearTimeout(this._updateTimer),
        delete this._updateTimer),
        this._tabster.focusedElement.unsubscribe(this._onFocus),
        t.document.removeEventListener("mousedown", this._onMouseDown, !0),
        t.removeEventListener("keydown", this._onKeyDown, !0),
        Object.keys(this._grouppers).forEach(r=>{
            this._grouppers[r] && (this._grouppers[r].dispose(),
            delete this._grouppers[r])
        }
        )
    }
    createGroupper(t, r, o) {
        const n = new dS(this._tabster,t,this._onGroupperDispose,r,o);
        this._grouppers[n.id] = n;
        const i = this._tabster.focusedElement.getFocusedElement();
        return i && t.contains(i) && !this._updateTimer && (this._updateTimer = this._win().setTimeout(()=>{
            delete this._updateTimer,
            i === this._tabster.focusedElement.getFocusedElement() && this._updateCurrent(i, !0, !0)
        }
        , 0)),
        n
    }
    forgetCurrentGrouppers() {
        this._current = {}
    }
    _updateCurrent(t, r, o) {
        var n;
        this._updateTimer && (this._win().clearTimeout(this._updateTimer),
        delete this._updateTimer);
        const i = {};
        let a = !0;
        for (let s = t; s; s = s.parentElement) {
            const l = (n = $e(this._tabster, s)) === null || n === void 0 ? void 0 : n.groupper;
            if (l) {
                if (i[l.id] = !0,
                a && o && s !== t && (a = !1),
                r || !a) {
                    this._current[l.id] = l;
                    const u = l.isActive() || t !== s && (!l.getProps().delegated || l.getFirst(!1) !== t);
                    l.makeTabbable(u)
                }
                a = !1
            }
        }
        for (const s of Object.keys(this._current)) {
            const l = this._current[s];
            l.id in i || (l.makeTabbable(!1),
            l.setFirst(void 0),
            delete this._current[s])
        }
    }
    handleKeyPress(t, r, o) {
        const n = this._tabster
          , i = ce.getTabsterContext(n, t)
          , a = i == null ? void 0 : i.modalizerInGroupper;
        let s = (i == null ? void 0 : i.groupper) || a;
        if (i && s) {
            const l = this._win();
            if (this._handleKeyPressTimer && (l.clearTimeout(this._handleKeyPressTimer),
            delete this._handleKeyPressTimer),
            i.ignoreKeydown(r))
                return;
            let u;
            const d = s.getElement();
            if (r.keyCode === K.Enter)
                d && (t === d || s.getProps().delegated && t === s.getFirst(!1)) && (u = n.focusable.findNext({
                    container: d,
                    currentElement: t,
                    useActiveModalizer: !0
                })),
                u && d && Rr({
                    by: "groupper",
                    owner: d,
                    next: u,
                    relatedEvent: r
                }) && (r.preventDefault(),
                r.stopImmediatePropagation(),
                u.focus());
            else if (r.keyCode === K.Esc) {
                const c = n.focusedElement.getFocusedElement();
                this._handleKeyPressTimer = l.setTimeout(()=>{
                    var f;
                    if (delete this._handleKeyPressTimer,
                    c === n.focusedElement.getFocusedElement() && s && d && d.contains(t)) {
                        if (t !== d || o)
                            u = s.getFirst(!0);
                        else {
                            const h = d.parentElement
                              , p = h ? ce.getTabsterContext(n, h) : void 0;
                            s = p == null ? void 0 : p.groupper,
                            u = s == null ? void 0 : s.getFirst(!0)
                        }
                        u && Rr({
                            by: "groupper",
                            owner: d,
                            next: u,
                            relatedEvent: r
                        }) && (s && (s.makeTabbable(!1),
                        a && ((f = n.modalizer) === null || f === void 0 || f.setActive(void 0))),
                        u.focus())
                    }
                }
                , 0)
            }
        }
    }
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
class pS extends n0 {
    constructor(t) {
        super(),
        this._onChange = r=>{
            this.setVal(r, void 0)
        }
        ,
        this._keyborg = xd(t()),
        this._keyborg.subscribe(this._onChange)
    }
    dispose() {
        super.dispose(),
        this._keyborg && (this._keyborg.unsubscribe(this._onChange),
        Sd(this._keyborg),
        delete this._keyborg)
    }
    setNavigatingWithKeyboard(t) {
        var r;
        (r = this._keyborg) === null || r === void 0 || r.setVal(t)
    }
    isNavigatingWithKeyboard() {
        var t;
        return !!(!((t = this._keyborg) === null || t === void 0) && t.isNavigatingWithKeyboard())
    }
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
let hS = 0;
const Dl = "aria-hidden";
class gS extends on {
    constructor(t, r, o) {
        super(r, t, Is.Modalizer, o),
        this._setHandlers((n,i)=>{
            var a, s, l;
            const u = t.get()
              , d = u && ((a = ce.getRoot(r, u)) === null || a === void 0 ? void 0 : a.getElement())
              , c = n.input;
            let f;
            if (d && c) {
                const h = (s = c.__tabsterDummyContainer) === null || s === void 0 ? void 0 : s.get()
                  , p = ce.getTabsterContext(r, h || c);
                p && (f = (l = he.findNextTabbable(r, p, d, c, void 0, i, !0)) === null || l === void 0 ? void 0 : l.element),
                f && Vt(f)
            }
        }
        )
    }
}
class vS extends Ei {
    constructor(t, r, o, n, i, a) {
        super(t, r, n),
        this._wasFocused = 0,
        this.userId = n.id,
        this._onDispose = o,
        this._activeElements = a,
        t.controlTab || (this.dummyManager = new gS(this._element,t,i))
    }
    makeActive(t) {
        if (this._isActive !== t) {
            this._isActive = t;
            const r = this.getElement();
            if (r) {
                const o = this._activeElements
                  , n = o.map(i=>i.get()).indexOf(r);
                t ? n < 0 && o.push(new it(this._tabster.getWindow,r)) : n >= 0 && o.splice(n, 1)
            }
            this.triggerFocusEvent(t ? qm : Hm)
        }
    }
    focused(t) {
        return t || (this._wasFocused = ++hS),
        this._wasFocused
    }
    setProps(t) {
        t.id && (this.userId = t.id),
        this._props = {
            ...t
        }
    }
    dispose() {
        var t;
        this.makeActive(!1),
        this._onDispose(this),
        (t = this.dummyManager) === null || t === void 0 || t.dispose(),
        delete this.dummyManager,
        this._activeElements = [],
        this._remove()
    }
    isActive() {
        return !!this._isActive
    }
    contains(t) {
        var r;
        return !!(!((r = this.getElement()) === null || r === void 0) && r.contains(t))
    }
    findNextTabbable(t, r, o, n) {
        var i, a;
        if (!this.getElement())
            return null;
        const l = this._tabster;
        let u = null, d = !1, c;
        const f = t && ((i = ce.getRoot(l, t)) === null || i === void 0 ? void 0 : i.getElement());
        if (f) {
            const h = {
                container: f,
                currentElement: t,
                referenceElement: r,
                ignoreAccessibility: n,
                useActiveModalizer: !0
            }
              , p = {};
            u = l.focusable[o ? "findPrev" : "findNext"](h, p),
            !u && this._props.isTrapped && (!((a = l.modalizer) === null || a === void 0) && a.activeId) ? (u = l.focusable[o ? "findLast" : "findFirst"]({
                container: f,
                ignoreAccessibility: n,
                useActiveModalizer: !0
            }, p),
            d = !0) : d = !!p.outOfDOMOrder,
            c = p.uncontrolled
        }
        return {
            element: u,
            uncontrolled: c,
            outOfDOMOrder: d
        }
    }
    triggerFocusEvent(t, r) {
        const o = this.getElement();
        let n = !1;
        if (o) {
            const i = r ? this._activeElements.map(a=>a.get()) : [o];
            for (const a of i)
                a && !Or(a, t, {
                    id: this.userId,
                    element: o,
                    eventName: t
                }) && (n = !0)
        }
        return n
    }
    _remove() {}
}
class mS {
    constructor(t, r, o) {
        this._onModalizerDispose = i=>{
            const a = i.id
              , s = i.userId
              , l = this._parts[s];
            delete this._modalizers[a],
            l && (delete l[a],
            Object.keys(l).length === 0 && (delete this._parts[s],
            this.activeId === s && this.setActive(void 0)))
        }
        ,
        this._onKeyDown = i=>{
            var a;
            if (i.keyCode !== K.Esc)
                return;
            const s = this._tabster
              , l = s.focusedElement.getFocusedElement();
            if (l) {
                const u = ce.getTabsterContext(s, l)
                  , d = u == null ? void 0 : u.modalizer;
                if (u && !u.groupper && (d != null && d.isActive()) && !u.ignoreKeydown(i)) {
                    const c = d.userId;
                    if (c) {
                        const f = this._parts[c];
                        if (f) {
                            const h = Object.keys(f).map(p=>{
                                var m;
                                const w = f[p]
                                  , v = w.getElement();
                                let g;
                                return v && (g = (m = $e(this._tabster, v)) === null || m === void 0 ? void 0 : m.groupper),
                                w && v && g ? {
                                    el: v,
                                    focusedSince: w.focused(!0)
                                } : {
                                    focusedSince: 0
                                }
                            }
                            ).filter(p=>p.focusedSince > 0).sort((p,m)=>p.focusedSince > m.focusedSince ? -1 : p.focusedSince < m.focusedSince ? 1 : 0);
                            if (h.length) {
                                const p = h[0].el;
                                p && ((a = s.groupper) === null || a === void 0 || a.handleKeyPress(p, i, !0))
                            }
                        }
                    }
                }
            }
        }
        ,
        this._onFocus = (i,a)=>{
            var s, l;
            const u = i && ce.getTabsterContext(this._tabster, i);
            if (!u || !i)
                return;
            const d = this._augMap;
            for (let f = i; f; f = f.parentElement)
                d.has(f) && (d.delete(f),
                Rl(this._tabster, f, Dl));
            const c = u.modalizer;
            if ((l = c || ((s = $e(this._tabster, i)) === null || s === void 0 ? void 0 : s.modalizer)) === null || l === void 0 || l.focused(),
            (c == null ? void 0 : c.userId) === this.activeId) {
                this.currentIsOthersAccessible = c == null ? void 0 : c.getProps().isOthersAccessible;
                return
            }
            if (a.isFocusedProgrammatically || this.currentIsOthersAccessible || c != null && c.getProps().isAlwaysAccessible)
                this.setActive(c);
            else {
                const f = this._win();
                f.clearTimeout(this._restoreModalizerFocusTimer),
                this._restoreModalizerFocusTimer = f.setTimeout(()=>this._restoreModalizerFocus(i), 100)
            }
        }
        ,
        this._tabster = t,
        this._win = t.getWindow,
        this._modalizers = {},
        this._parts = {},
        this._augMap = new WeakMap,
        this._aug = [],
        this._alwaysAccessibleSelector = r,
        this._accessibleCheck = o,
        this.activeElements = [],
        t.controlTab || t.root.addDummyInputs(),
        this._win().addEventListener("keydown", this._onKeyDown, !0),
        t.queueInit(()=>{
            this._tabster.focusedElement.subscribe(this._onFocus)
        }
        )
    }
    dispose() {
        const t = this._win();
        t.removeEventListener("keydown", this._onKeyDown, !0),
        Object.keys(this._modalizers).forEach(r=>{
            this._modalizers[r] && (this._modalizers[r].dispose(),
            delete this._modalizers[r])
        }
        ),
        t.clearTimeout(this._restoreModalizerFocusTimer),
        t.clearTimeout(this._hiddenUpdateTimer),
        this._parts = {},
        delete this.activeId,
        this.activeElements = [],
        this._augMap = new WeakMap,
        this._aug = [],
        this._tabster.focusedElement.unsubscribe(this._onFocus)
    }
    createModalizer(t, r, o) {
        var n;
        const i = new vS(this._tabster,t,this._onModalizerDispose,r,o,this.activeElements)
          , a = i.id
          , s = r.id;
        this._modalizers[a] = i;
        let l = this._parts[s];
        return l || (l = this._parts[s] = {}),
        l[a] = i,
        t.contains((n = this._tabster.focusedElement.getFocusedElement()) !== null && n !== void 0 ? n : null) && (s !== this.activeId ? this.setActive(i) : i.makeActive(!0)),
        i
    }
    isAugmented(t) {
        return this._augMap.has(t)
    }
    hiddenUpdate() {
        this._hiddenUpdateTimer || (this._hiddenUpdateTimer = this._win().setTimeout(()=>{
            delete this._hiddenUpdateTimer,
            this._hiddenUpdate()
        }
        , 250))
    }
    setActive(t) {
        const r = t == null ? void 0 : t.userId
          , o = this.activeId;
        if (o !== r) {
            if (this.activeId = r,
            o) {
                const n = this._parts[o];
                if (n)
                    for (const i of Object.keys(n))
                        n[i].makeActive(!1)
            }
            if (r) {
                const n = this._parts[r];
                if (n)
                    for (const i of Object.keys(n))
                        n[i].makeActive(!0)
            }
            this.currentIsOthersAccessible = t == null ? void 0 : t.getProps().isOthersAccessible,
            this.hiddenUpdate()
        }
    }
    focus(t, r, o) {
        const n = ce.getTabsterContext(this._tabster, t)
          , i = n == null ? void 0 : n.modalizer;
        if (i) {
            this.setActive(i);
            const a = i.getProps()
              , s = i.getElement();
            if (s) {
                if (r === void 0 && (r = a.isNoFocusFirst),
                !r && this._tabster.keyboardNavigation.isNavigatingWithKeyboard() && this._tabster.focusedElement.focusFirst({
                    container: s
                }) || (o === void 0 && (o = a.isNoFocusDefault),
                !o && this._tabster.focusedElement.focusDefault(s)))
                    return !0;
                this._tabster.focusedElement.resetFocus(s)
            }
        }
        return !1
    }
    acceptElement(t, r) {
        var o;
        const n = r.modalizerUserId
          , i = (o = r.currentCtx) === null || o === void 0 ? void 0 : o.modalizer;
        if (n)
            for (const s of this.activeElements) {
                const l = s.get();
                if (l && (t.contains(l) || l === t))
                    return NodeFilter.FILTER_SKIP
            }
        const a = n === (i == null ? void 0 : i.userId) || !n && (i != null && i.getProps().isAlwaysAccessible) ? void 0 : NodeFilter.FILTER_SKIP;
        return a !== void 0 && (r.skippedFocusable = !0),
        a
    }
    _hiddenUpdate() {
        var t;
        const r = this._tabster
          , o = r.getWindow().document.body
          , n = this.activeId
          , i = this._parts
          , a = []
          , s = []
          , l = this._alwaysAccessibleSelector
          , u = l ? Array.from(o.querySelectorAll(l)) : []
          , d = [];
        for (const v of Object.keys(i)) {
            const g = i[v];
            for (const y of Object.keys(g)) {
                const x = g[y]
                  , S = x.getElement()
                  , k = x.getProps().isAlwaysAccessible;
                S && (v === n ? (d.push(S),
                this.currentIsOthersAccessible || a.push(S)) : k ? u.push(S) : s.push(S))
            }
        }
        const c = this._augMap
          , f = a.length > 0 ? [...a, ...u] : void 0
          , h = []
          , p = new WeakMap
          , m = (v,g)=>{
            var y;
            const x = v.tagName;
            if (x === "SCRIPT" || x === "STYLE")
                return;
            let S = !1;
            c.has(v) ? g ? S = !0 : (c.delete(v),
            Rl(r, v, Dl)) : g && !(!((y = this._accessibleCheck) === null || y === void 0) && y.call(this, v, d)) && Rl(r, v, Dl, "true") && (c.set(v, !0),
            S = !0),
            S && (h.push(new it(r.getWindow,v)),
            p.set(v, !0))
        }
          , w = v=>{
            for (let g = v.firstElementChild; g; g = g.nextElementSibling) {
                let y = !1
                  , x = !1;
                if (f) {
                    for (const S of f) {
                        if (g === S) {
                            y = !0;
                            break
                        }
                        if (g.contains(S)) {
                            x = !0;
                            break
                        }
                    }
                    x ? w(g) : y || m(g, !0)
                } else
                    m(g, !1)
            }
        }
        ;
        f || u.forEach(v=>m(v, !1)),
        s.forEach(v=>m(v, !0)),
        o && w(o),
        (t = this._aug) === null || t === void 0 || t.map(v=>v.get()).forEach(v=>{
            v && !p.get(v) && m(v, !1)
        }
        ),
        this._aug = h,
        this._augMap = p
    }
    _restoreModalizerFocus(t) {
        const r = t == null ? void 0 : t.ownerDocument;
        if (!t || !r)
            return;
        const o = ce.getTabsterContext(this._tabster, t)
          , n = o == null ? void 0 : o.modalizer
          , i = this.activeId;
        if (!n && !i || n && i === n.userId)
            return;
        const a = o == null ? void 0 : o.root.getElement();
        if (a) {
            let s = this._tabster.focusable.findFirst({
                container: a,
                useActiveModalizer: !0
            });
            if (s) {
                if (t.compareDocumentPosition(s) & document.DOCUMENT_POSITION_PRECEDING && (s = this._tabster.focusable.findLast({
                    container: a,
                    useActiveModalizer: !0
                }),
                !s))
                    throw new Error("Something went wrong.");
                this._tabster.focusedElement.focus(s);
                return
            }
        }
        t.blur()
    }
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
const yS = ["input", "textarea", "*[contenteditable]"].join(", ");
class bS extends on {
    constructor(t, r, o, n) {
        super(r, t, Is.Mover, n),
        this._onFocusDummyInput = i=>{
            var a, s;
            const l = this._element.get()
              , u = i.input;
            if (l && u) {
                const d = ce.getTabsterContext(this._tabster, l);
                let c;
                d && (c = (a = he.findNextTabbable(this._tabster, d, void 0, u, void 0, !i.isFirst, !0)) === null || a === void 0 ? void 0 : a.element);
                const f = (s = this._getMemorized()) === null || s === void 0 ? void 0 : s.get();
                f && (c = f),
                c && Vt(c)
            }
        }
        ,
        this._tabster = r,
        this._getMemorized = o,
        this._setHandlers(this._onFocusDummyInput)
    }
}
const jl = 1
  , Rp = 2
  , Dp = 3;
class wS extends Ei {
    constructor(t, r, o, n, i) {
        var a;
        super(t, r, n),
        this._visible = {},
        this._onIntersection = l=>{
            for (const u of l) {
                const d = u.target
                  , c = ka(this._win, d);
                let f, h = this._fullyVisible;
                if (u.intersectionRatio >= .25 ? (f = u.intersectionRatio >= .75 ? Xt.Visible : Xt.PartiallyVisible,
                f === Xt.Visible && (h = c)) : f = Xt.Invisible,
                this._visible[c] !== f) {
                    f === void 0 ? (delete this._visible[c],
                    h === c && delete this._fullyVisible) : (this._visible[c] = f,
                    this._fullyVisible = h);
                    const p = this.getState(d);
                    p && Or(d, Qu, p)
                }
            }
        }
        ,
        this._win = t.getWindow,
        this.visibilityTolerance = (a = n.visibilityTolerance) !== null && a !== void 0 ? a : .8,
        (this._props.trackState || this._props.visibilityAware) && (this._intersectionObserver = new IntersectionObserver(this._onIntersection,{
            threshold: [0, .25, .5, .75, 1]
        }),
        this._observeState()),
        this._onDispose = o;
        const s = ()=>n.memorizeCurrent ? this._current : void 0;
        t.controlTab || (this.dummyManager = new bS(this._element,t,s,i))
    }
    dispose() {
        var t;
        this._onDispose(this),
        this._intersectionObserver && (this._intersectionObserver.disconnect(),
        delete this._intersectionObserver),
        delete this._current,
        delete this._fullyVisible,
        delete this._allElements,
        delete this._updateQueue,
        this._unobserve && (this._unobserve(),
        delete this._unobserve);
        const r = this._win();
        this._setCurrentTimer && (r.clearTimeout(this._setCurrentTimer),
        delete this._setCurrentTimer),
        this._updateTimer && (r.clearTimeout(this._updateTimer),
        delete this._updateTimer),
        (t = this.dummyManager) === null || t === void 0 || t.dispose(),
        delete this.dummyManager
    }
    setCurrent(t) {
        t ? this._current = new it(this._win,t) : this._current = void 0,
        (this._props.trackState || this._props.visibilityAware) && !this._setCurrentTimer && (this._setCurrentTimer = this._win().setTimeout(()=>{
            var r;
            delete this._setCurrentTimer;
            const o = [];
            this._current !== this._prevCurrent && (o.push(this._current),
            o.push(this._prevCurrent),
            this._prevCurrent = this._current);
            for (const n of o) {
                const i = n == null ? void 0 : n.get();
                if (i && ((r = this._allElements) === null || r === void 0 ? void 0 : r.get(i)) === this) {
                    const a = this._props;
                    if (i && (a.visibilityAware !== void 0 || a.trackState)) {
                        const s = this.getState(i);
                        s && Or(i, Qu, s)
                    }
                }
            }
        }
        ))
    }
    getCurrent() {
        var t;
        return ((t = this._current) === null || t === void 0 ? void 0 : t.get()) || null
    }
    findNextTabbable(t, r, o, n) {
        var i;
        const a = this.getElement()
          , s = a && ((i = t == null ? void 0 : t.__tabsterDummyContainer) === null || i === void 0 ? void 0 : i.get()) === a;
        if (!a)
            return null;
        let l = null, u = !1, d;
        if (this._props.tabbable || s || t && !a.contains(t)) {
            const c = {
                currentElement: t,
                referenceElement: r,
                container: a,
                ignoreAccessibility: n,
                useActiveModalizer: !0
            }
              , f = {};
            l = this._tabster.focusable[o ? "findPrev" : "findNext"](c, f),
            u = !!f.outOfDOMOrder,
            d = f.uncontrolled
        }
        return {
            element: l,
            uncontrolled: d,
            outOfDOMOrder: u
        }
    }
    acceptElement(t, r) {
        var o, n, i;
        if (!he.isTabbing)
            return !((o = r.currentCtx) === null || o === void 0) && o.excludedFromMover ? NodeFilter.FILTER_REJECT : void 0;
        const {memorizeCurrent: a, visibilityAware: s, hasDefault: l=!0} = this._props
          , u = this.getElement();
        if (u && (a || s || l) && (!u.contains(r.from) || ((n = r.from.__tabsterDummyContainer) === null || n === void 0 ? void 0 : n.get()) === u)) {
            let d;
            if (a) {
                const c = (i = this._current) === null || i === void 0 ? void 0 : i.get();
                c && r.acceptCondition(c) && (d = c)
            }
            if (!d && l && (d = this._tabster.focusable.findDefault({
                container: u,
                useActiveModalizer: !0
            })),
            !d && s && (d = this._tabster.focusable.findElement({
                container: u,
                useActiveModalizer: !0,
                isBackward: r.isBackward,
                acceptCondition: c=>{
                    var f;
                    const h = ka(this._win, c)
                      , p = this._visible[h];
                    return u !== c && !!(!((f = this._allElements) === null || f === void 0) && f.get(c)) && r.acceptCondition(c) && (p === Xt.Visible || p === Xt.PartiallyVisible && (s === Xt.PartiallyVisible || !this._fullyVisible))
                }
            })),
            d)
                return r.found = !0,
                r.foundElement = d,
                r.rejectElementsFrom = u,
                r.skippedFocusable = !0,
                NodeFilter.FILTER_ACCEPT
        }
    }
    _observeState() {
        const t = this.getElement();
        if (this._unobserve || !t || typeof MutationObserver > "u")
            return;
        const r = this._win()
          , o = this._allElements = new WeakMap
          , n = this._tabster.focusable;
        let i = this._updateQueue = [];
        const a = new MutationObserver(h=>{
            for (const p of h) {
                const m = p.target
                  , w = p.removedNodes
                  , v = p.addedNodes;
                if (p.type === "attributes")
                    p.attributeName === "tabindex" && i.push({
                        element: m,
                        type: Rp
                    });
                else {
                    for (let g = 0; g < w.length; g++)
                        i.push({
                            element: w[g],
                            type: Dp
                        });
                    for (let g = 0; g < v.length; g++)
                        i.push({
                            element: v[g],
                            type: jl
                        })
                }
            }
            c()
        }
        )
          , s = (h,p)=>{
            var m, w;
            const v = o.get(h);
            v && p && ((m = this._intersectionObserver) === null || m === void 0 || m.unobserve(h),
            o.delete(h)),
            !v && !p && (o.set(h, this),
            (w = this._intersectionObserver) === null || w === void 0 || w.observe(h))
        }
          , l = h=>{
            const p = n.isFocusable(h);
            o.get(h) ? p || s(h, !0) : p && s(h)
        }
          , u = h=>{
            const {mover: p} = f(h);
            if (p && p !== this)
                if (p.getElement() === h && n.isFocusable(h))
                    s(h);
                else
                    return;
            const m = Bd(r.document, h, w=>{
                const {mover: v, groupper: g} = f(w);
                if (v && v !== this)
                    return NodeFilter.FILTER_REJECT;
                const y = g == null ? void 0 : g.getFirst(!0);
                return g && g.getElement() !== w && y && y !== w ? NodeFilter.FILTER_REJECT : (n.isFocusable(w) && s(w),
                NodeFilter.FILTER_SKIP)
            }
            );
            if (m)
                for (m.currentNode = h; m.nextNode(); )
                    ;
        }
          , d = h=>{
            o.get(h) && s(h, !0);
            for (let m = h.firstElementChild; m; m = m.nextElementSibling)
                d(m)
        }
          , c = ()=>{
            !this._updateTimer && i.length && (this._updateTimer = r.setTimeout(()=>{
                delete this._updateTimer;
                for (const {element: h, type: p} of i)
                    switch (p) {
                    case Rp:
                        l(h);
                        break;
                    case jl:
                        u(h);
                        break;
                    case Dp:
                        d(h);
                        break
                    }
                i = this._updateQueue = []
            }
            , 0))
        }
          , f = h=>{
            const p = {};
            for (let m = h; m; m = m.parentElement) {
                const w = $e(this._tabster, m);
                if (w && (w.groupper && !p.groupper && (p.groupper = w.groupper),
                w.mover)) {
                    p.mover = w.mover;
                    break
                }
            }
            return p
        }
        ;
        i.push({
            element: t,
            type: jl
        }),
        c(),
        a.observe(t, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["tabindex"]
        }),
        this._unobserve = ()=>{
            a.disconnect()
        }
    }
    getState(t) {
        const r = ka(this._win, t);
        if (r in this._visible) {
            const o = this._visible[r] || Xt.Invisible;
            return {
                isCurrent: this._current ? this._current.get() === t : void 0,
                visibility: o
            }
        }
    }
}
function kS(e, t, r, o, n, i, a, s) {
    const l = r < n ? n - r : a < e ? e - a : 0
      , u = o < i ? i - o : s < t ? t - s : 0;
    return l === 0 ? u : u === 0 ? l : Math.sqrt(l * l + u * u)
}
class xS {
    constructor(t, r) {
        this._init = ()=>{
            this._win().addEventListener("keydown", this._onKeyDown, !0),
            this._tabster.focusedElement.subscribe(this._onFocus)
        }
        ,
        this._onMoverDispose = o=>{
            delete this._movers[o.id]
        }
        ,
        this._onFocus = o=>{
            var n;
            let i = o
              , a = o;
            for (let s = o == null ? void 0 : o.parentElement; s; s = s.parentElement) {
                const l = (n = $e(this._tabster, s)) === null || n === void 0 ? void 0 : n.mover;
                l && (l.setCurrent(a),
                i = void 0),
                !i && this._tabster.focusable.isFocusable(s) && (i = a = s)
            }
        }
        ,
        this._onKeyDown = async o=>{
            var n, i, a, s;
            this._ignoredInputTimer && (this._win().clearTimeout(this._ignoredInputTimer),
            delete this._ignoredInputTimer),
            (n = this._ignoredInputResolve) === null || n === void 0 || n.call(this, !1);
            let l = o.keyCode;
            if (o.ctrlKey || o.altKey || o.shiftKey || o.metaKey)
                return;
            switch (l) {
            case K.Down:
            case K.Right:
            case K.Up:
            case K.Left:
            case K.PageDown:
            case K.PageUp:
            case K.Home:
            case K.End:
                break;
            default:
                return
            }
            const u = this._tabster
              , d = u.focusedElement.getFocusedElement();
            if (!d || await this._isIgnoredInput(d, l))
                return;
            const c = ce.getTabsterContext(u, d, {
                checkRtl: !0
            });
            if (!c || !c.mover || c.excludedFromMover || c.ignoreKeydown(o))
                return;
            const f = c.mover
              , h = f.getElement();
            if (c.groupperBeforeMover) {
                const R = c.groupper;
                if (R && !R.isActive(!0)) {
                    for (let O = (i = R.getElement()) === null || i === void 0 ? void 0 : i.parentElement; O && O !== h; O = O.parentElement)
                        if (!((s = (a = $e(u, O)) === null || a === void 0 ? void 0 : a.groupper) === null || s === void 0) && s.isActive(!0))
                            return
                } else
                    return
            }
            if (!h)
                return;
            const p = u.focusable
              , m = f.getProps()
              , w = m.direction || Qr.Both
              , v = w === Qr.Both
              , g = v || w === Qr.Vertical
              , y = v || w === Qr.Horizontal
              , x = w === Qr.GridLinear
              , S = x || w === Qr.Grid
              , _ = m.cyclic;
            let k, E, I, F = 0, Y = 0;
            if (S && (I = d.getBoundingClientRect(),
            F = Math.ceil(I.left),
            Y = Math.floor(I.right)),
            c.rtl && (l === K.Right ? l = K.Left : l === K.Left && (l = K.Right)),
            l === K.Down && g || l === K.Right && (y || S))
                if (k = p.findNext({
                    currentElement: d,
                    container: h,
                    useActiveModalizer: !0
                }),
                k && S) {
                    const R = Math.ceil(k.getBoundingClientRect().left);
                    !x && Y > R && (k = void 0)
                } else
                    !k && _ && (k = p.findFirst({
                        container: h,
                        useActiveModalizer: !0
                    }));
            else if (l === K.Up && g || l === K.Left && (y || S))
                if (k = p.findPrev({
                    currentElement: d,
                    container: h,
                    useActiveModalizer: !0
                }),
                k && S) {
                    const R = Math.floor(k.getBoundingClientRect().right);
                    !x && R > F && (k = void 0)
                } else
                    !k && _ && (k = p.findLast({
                        container: h,
                        useActiveModalizer: !0
                    }));
            else if (l === K.Home)
                S ? p.findElement({
                    container: h,
                    currentElement: d,
                    useActiveModalizer: !0,
                    isBackward: !0,
                    acceptCondition: R=>{
                        var O;
                        if (!p.isFocusable(R))
                            return !1;
                        const V = Math.ceil((O = R.getBoundingClientRect().left) !== null && O !== void 0 ? O : 0);
                        return R !== d && F <= V ? !0 : (k = R,
                        !1)
                    }
                }) : k = p.findFirst({
                    container: h,
                    useActiveModalizer: !0
                });
            else if (l === K.End)
                S ? p.findElement({
                    container: h,
                    currentElement: d,
                    useActiveModalizer: !0,
                    acceptCondition: R=>{
                        var O;
                        if (!p.isFocusable(R))
                            return !1;
                        const V = Math.ceil((O = R.getBoundingClientRect().left) !== null && O !== void 0 ? O : 0);
                        return R !== d && F >= V ? !0 : (k = R,
                        !1)
                    }
                }) : k = p.findLast({
                    container: h,
                    useActiveModalizer: !0
                });
            else if (l === K.PageUp) {
                if (p.findElement({
                    currentElement: d,
                    container: h,
                    useActiveModalizer: !0,
                    isBackward: !0,
                    acceptCondition: R=>p.isFocusable(R) ? Np(this._win, R, f.visibilityTolerance) ? (k = R,
                    !1) : !0 : !1
                }),
                S && k) {
                    const R = Math.ceil(k.getBoundingClientRect().left);
                    p.findElement({
                        currentElement: k,
                        container: h,
                        useActiveModalizer: !0,
                        acceptCondition: O=>{
                            if (!p.isFocusable(O))
                                return !1;
                            const V = Math.ceil(O.getBoundingClientRect().left);
                            return F < V || R >= V ? !0 : (k = O,
                            !1)
                        }
                    })
                }
                E = !1
            } else if (l === K.PageDown) {
                if (p.findElement({
                    currentElement: d,
                    container: h,
                    useActiveModalizer: !0,
                    acceptCondition: R=>p.isFocusable(R) ? Np(this._win, R, f.visibilityTolerance) ? (k = R,
                    !1) : !0 : !1
                }),
                S && k) {
                    const R = Math.ceil(k.getBoundingClientRect().left);
                    p.findElement({
                        currentElement: k,
                        container: h,
                        useActiveModalizer: !0,
                        isBackward: !0,
                        acceptCondition: O=>{
                            if (!p.isFocusable(O))
                                return !1;
                            const V = Math.ceil(O.getBoundingClientRect().left);
                            return F > V || R <= V ? !0 : (k = O,
                            !1)
                        }
                    })
                }
                E = !0
            } else if (S) {
                const R = l === K.Up
                  , O = F
                  , V = Math.ceil(I.top)
                  , Z = Y
                  , $ = Math.floor(I.bottom);
                let te, z, D = 0;
                p.findAll({
                    container: h,
                    currentElement: d,
                    isBackward: R,
                    onElement: M=>{
                        const C = M.getBoundingClientRect()
                          , j = Math.ceil(C.left)
                          , H = Math.ceil(C.top)
                          , Q = Math.floor(C.right)
                          , ae = Math.floor(C.bottom);
                        if (R && V < ae || !R && $ > H)
                            return !0;
                        const Se = Math.ceil(Math.min(Z, Q)) - Math.floor(Math.max(O, j))
                          , Le = Math.ceil(Math.min(Z - O, Q - j));
                        if (Se > 0 && Le >= Se) {
                            const _t = Se / Le;
                            _t > D && (te = M,
                            D = _t)
                        } else if (D === 0) {
                            const _t = kS(O, V, Z, $, j, H, Q, ae);
                            (z === void 0 || _t < z) && (z = _t,
                            te = M)
                        } else if (D > 0)
                            return !1;
                        return !0
                    }
                }),
                k = te
            }
            k && Rr({
                by: "mover",
                owner: h,
                next: k,
                relatedEvent: o
            }) && (E !== void 0 && Q2(this._win, k, E),
            o.preventDefault(),
            o.stopImmediatePropagation(),
            Vt(k))
        }
        ,
        this._tabster = t,
        this._win = r,
        this._movers = {},
        t.queueInit(this._init)
    }
    dispose() {
        var t;
        const r = this._win();
        this._tabster.focusedElement.unsubscribe(this._onFocus),
        (t = this._ignoredInputResolve) === null || t === void 0 || t.call(this, !1),
        this._ignoredInputTimer && (r.clearTimeout(this._ignoredInputTimer),
        delete this._ignoredInputTimer),
        r.removeEventListener("keydown", this._onKeyDown, !0),
        Object.keys(this._movers).forEach(o=>{
            this._movers[o] && (this._movers[o].dispose(),
            delete this._movers[o])
        }
        )
    }
    createMover(t, r, o) {
        const n = new wS(this._tabster,t,this._onMoverDispose,r,o);
        return this._movers[n.id] = n,
        n
    }
    async _isIgnoredInput(t, r) {
        var o;
        if (t.getAttribute("aria-expanded") === "true" && t.hasAttribute("aria-activedescendant"))
            return !0;
        if (t0(t, yS)) {
            let n = 0, i = 0, a = 0, s;
            if (t.tagName === "INPUT" || t.tagName === "TEXTAREA") {
                const l = t.type;
                if (a = (t.value || "").length,
                l === "email" || l === "number") {
                    if (a) {
                        const d = (o = t.ownerDocument.defaultView) === null || o === void 0 ? void 0 : o.getSelection();
                        if (d) {
                            const c = d.toString().length
                              , f = r === K.Left || r === K.Up;
                            if (d.modify("extend", f ? "backward" : "forward", "character"),
                            c !== d.toString().length)
                                return d.modify("extend", f ? "forward" : "backward", "character"),
                                !0;
                            a = 0
                        }
                    }
                } else {
                    const d = t.selectionStart;
                    if (d === null)
                        return l === "hidden";
                    n = d || 0,
                    i = t.selectionEnd || 0
                }
            } else
                t.contentEditable === "true" && (s = new (Z2(this._win))(l=>{
                    this._ignoredInputResolve = p=>{
                        delete this._ignoredInputResolve,
                        l(p)
                    }
                    ;
                    const u = this._win();
                    this._ignoredInputTimer && u.clearTimeout(this._ignoredInputTimer);
                    const {anchorNode: d, focusNode: c, anchorOffset: f, focusOffset: h} = u.getSelection() || {};
                    this._ignoredInputTimer = u.setTimeout(()=>{
                        var p, m, w;
                        delete this._ignoredInputTimer;
                        const {anchorNode: v, focusNode: g, anchorOffset: y, focusOffset: x} = u.getSelection() || {};
                        if (v !== d || g !== c || y !== f || x !== h) {
                            (p = this._ignoredInputResolve) === null || p === void 0 || p.call(this, !1);
                            return
                        }
                        if (n = y || 0,
                        i = x || 0,
                        a = ((m = t.textContent) === null || m === void 0 ? void 0 : m.length) || 0,
                        v && g && t.contains(v) && t.contains(g) && v !== t) {
                            let S = !1;
                            const _ = k=>{
                                if (k === v)
                                    S = !0;
                                else if (k === g)
                                    return !0;
                                const E = k.textContent;
                                if (E && !k.firstChild) {
                                    const F = E.length;
                                    S ? g !== v && (i += F) : (n += F,
                                    i += F)
                                }
                                let I = !1;
                                for (let F = k.firstChild; F && !I; F = F.nextSibling)
                                    I = _(F);
                                return I
                            }
                            ;
                            _(t)
                        }
                        (w = this._ignoredInputResolve) === null || w === void 0 || w.call(this, !0)
                    }
                    , 0)
                }
                ));
            if (s && !await s || n !== i || n > 0 && (r === K.Left || r === K.Up || r === K.Home) || n < a && (r === K.Right || r === K.Down || r === K.End))
                return !0
        }
        return !1
    }
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
function SS(e, t, r, o) {
    if (typeof MutationObserver > "u")
        return ()=>{}
        ;
    const n = t.getWindow;
    let i;
    const a = d=>{
        var c, f, h, p, m;
        for (const w of d) {
            const v = w.target
              , g = w.removedNodes
              , y = w.addedNodes;
            if (w.type === "attributes")
                w.attributeName === rr && r(t, v);
            else {
                for (let x = 0; x < g.length; x++)
                    s(g[x], !0),
                    (f = (c = t._dummyObserver).domChanged) === null || f === void 0 || f.call(c, v);
                for (let x = 0; x < y.length; x++)
                    s(y[x]),
                    (p = (h = t._dummyObserver).domChanged) === null || p === void 0 || p.call(h, v)
            }
        }
        (m = t.modalizer) === null || m === void 0 || m.hiddenUpdate()
    }
    ;
    function s(d, c) {
        i || (i = fr(n).elementByUId),
        l(d, c);
        const f = Bd(e, d, h=>l(h, c));
        if (f)
            for (; f.nextNode(); )
                ;
    }
    function l(d, c) {
        var f;
        if (!d.getAttribute)
            return NodeFilter.FILTER_SKIP;
        const h = d.__tabsterElementUID;
        return h && i && (c ? delete i[h] : (f = i[h]) !== null && f !== void 0 || (i[h] = new it(n,d))),
        ($e(t, d) || d.hasAttribute(rr)) && r(t, d, c),
        NodeFilter.FILTER_SKIP
    }
    const u = new MutationObserver(a);
    return o && s(n().document.body),
    u.observe(e, {
        childList: !0,
        subtree: !0,
        attributes: !0,
        attributeFilter: [rr]
    }),
    ()=>{
        u.disconnect()
    }
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
class _S {
    constructor(t) {
        this._isUncontrolledCompletely = t
    }
    isUncontrolledCompletely(t, r) {
        var o;
        const n = (o = this._isUncontrolledCompletely) === null || o === void 0 ? void 0 : o.call(this, t, r);
        return n === void 0 ? r : n
    }
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
const ts = "restorer:restorefocus"
  , BS = 10;
class ES extends Ei {
    constructor(t, r, o) {
        var n;
        if (super(t, r, o),
        this._hasFocus = !1,
        this._onFocusOut = i=>{
            var a;
            const s = (a = this._element) === null || a === void 0 ? void 0 : a.get();
            s && i.relatedTarget === null && s.dispatchEvent(new Event(ts,{
                bubbles: !0
            })),
            s && !s.contains(i.relatedTarget) && (this._hasFocus = !1)
        }
        ,
        this._onFocusIn = ()=>{
            this._hasFocus = !0
        }
        ,
        this._props.type === di.Source) {
            const i = (n = this._element) === null || n === void 0 ? void 0 : n.get();
            i == null || i.addEventListener("focusout", this._onFocusOut),
            i == null || i.addEventListener("focusin", this._onFocusIn)
        }
    }
    dispose() {
        var t, r;
        if (this._props.type === di.Source) {
            const o = (t = this._element) === null || t === void 0 ? void 0 : t.get();
            o == null || o.removeEventListener("focusout", this._onFocusOut),
            o == null || o.removeEventListener("focusin", this._onFocusIn),
            this._hasFocus && ((r = this._tabster.getWindow().document.body) === null || r === void 0 || r.dispatchEvent(new Event(ts,{
                bubbles: !0
            })))
        }
    }
}
class PS {
    constructor(t) {
        this._history = [],
        this._restoreFocusTimeout = 0,
        this._onRestoreFocus = r=>{
            const o = this._getWindow();
            this._restoreFocusTimeout && o.clearTimeout(this._restoreFocusTimeout),
            this._restoreFocusTimeout = o.setTimeout(()=>this._restoreFocus(r.target))
        }
        ,
        this._onFocusIn = r=>{
            var o;
            if (!r)
                return;
            const n = $e(this._tabster, r);
            ((o = n == null ? void 0 : n.restorer) === null || o === void 0 ? void 0 : o.getProps().type) === di.Target && this._addToHistory(r)
        }
        ,
        this._restoreFocus = r=>{
            var o, n, i;
            const a = this._getWindow().document;
            if (a.activeElement !== a.body || !this._keyboardNavState.isNavigatingWithKeyboard() && a.body.contains(r))
                return;
            let s = this._history.pop();
            for (; s && !a.body.contains((n = (o = s.get()) === null || o === void 0 ? void 0 : o.parentElement) !== null && n !== void 0 ? n : null); )
                s = this._history.pop();
            (i = s == null ? void 0 : s.get()) === null || i === void 0 || i.focus()
        }
        ,
        this._tabster = t,
        this._getWindow = t.getWindow,
        this._getWindow().addEventListener(ts, this._onRestoreFocus),
        this._keyboardNavState = t.keyboardNavigation,
        this._focusedElementState = t.focusedElement,
        this._focusedElementState.subscribe(this._onFocusIn)
    }
    dispose() {
        const t = this._getWindow();
        this._focusedElementState.unsubscribe(this._onFocusIn),
        t.removeEventListener(ts, this._onRestoreFocus),
        this._restoreFocusTimeout && t.clearTimeout(this._restoreFocusTimeout)
    }
    _addToHistory(t) {
        var r;
        ((r = this._history[this._history.length - 1]) === null || r === void 0 ? void 0 : r.get()) !== t && (this._history.length > BS && this._history.shift(),
        this._history.push(new it(this._getWindow,t)))
    }
    createRestorer(t, r) {
        const o = new ES(this._tabster,t,r);
        return r.type === di.Target && t.ownerDocument.activeElement === t && this._addToHistory(t),
        o
    }
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
class CS {
    constructor(t) {
        this.keyboardNavigation = t.keyboardNavigation,
        this.focusedElement = t.focusedElement,
        this.focusable = t.focusable,
        this.root = t.root,
        this.uncontrolled = t.uncontrolled,
        this.core = t
    }
}
class TS {
    constructor(t, r) {
        var o, n;
        this._forgetMemorizedElements = [],
        this._wrappers = new Set,
        this._initQueue = [],
        this._version = "5.2.0",
        this._noop = !1,
        this.getWindow = ()=>{
            if (!this._win)
                throw new Error("Using disposed Tabster.");
            return this._win
        }
        ,
        this._storage = G2(t),
        this._win = t;
        const i = this.getWindow;
        this.keyboardNavigation = new pS(i),
        this.focusedElement = new he(this,i),
        this.focusable = new lS(this),
        this.root = new ce(this,r == null ? void 0 : r.autoRoot),
        this.uncontrolled = new _S((r == null ? void 0 : r.checkUncontrolledCompletely) || (r == null ? void 0 : r.checkUncontrolledTrappingFocus)),
        this.controlTab = (o = r == null ? void 0 : r.controlTab) !== null && o !== void 0 ? o : !0,
        this.rootDummyInputs = !!(r != null && r.rootDummyInputs),
        this._dummyObserver = new rS(i),
        this.getParent = (n = r == null ? void 0 : r.getParent) !== null && n !== void 0 ? n : a=>a.parentElement,
        this.internal = {
            stopObserver: ()=>{
                this._unobserve && (this._unobserve(),
                delete this._unobserve)
            }
            ,
            resumeObserver: a=>{
                if (!this._unobserve) {
                    const s = i().document;
                    this._unobserve = SS(s, this, Km, a)
                }
            }
        },
        Jm(i),
        this.queueInit(()=>{
            this.internal.resumeObserver(!0)
        }
        )
    }
    _mergeProps(t) {
        var r;
        t && (this.getParent = (r = t.getParent) !== null && r !== void 0 ? r : this.getParent)
    }
    createTabster(t, r) {
        const o = new CS(this);
        return t || this._wrappers.add(o),
        this._mergeProps(r),
        o
    }
    disposeTabster(t, r) {
        r ? this._wrappers.clear() : this._wrappers.delete(t),
        this._wrappers.size === 0 && this.dispose()
    }
    dispose() {
        var t, r, o, n, i, a, s, l;
        this.internal.stopObserver();
        const u = this._win;
        u == null || u.clearTimeout(this._initTimer),
        delete this._initTimer,
        this._initQueue = [],
        this._forgetMemorizedElements = [],
        u && this._forgetMemorizedTimer && (u.clearTimeout(this._forgetMemorizedTimer),
        delete this._forgetMemorizedTimer),
        (t = this.outline) === null || t === void 0 || t.dispose(),
        (r = this.crossOrigin) === null || r === void 0 || r.dispose(),
        (o = this.deloser) === null || o === void 0 || o.dispose(),
        (n = this.groupper) === null || n === void 0 || n.dispose(),
        (i = this.mover) === null || i === void 0 || i.dispose(),
        (a = this.modalizer) === null || a === void 0 || a.dispose(),
        (s = this.observedElement) === null || s === void 0 || s.dispose(),
        (l = this.restorer) === null || l === void 0 || l.dispose(),
        this.keyboardNavigation.dispose(),
        this.focusable.dispose(),
        this.focusedElement.dispose(),
        this.root.dispose(),
        this._dummyObserver.dispose(),
        X2(this.getWindow),
        zp(this.getWindow),
        this._storage = new WeakMap,
        this._wrappers.clear(),
        u && (V2(u),
        delete u.__tabsterInstance,
        delete this._win)
    }
    storageEntry(t, r) {
        const o = this._storage;
        let n = o.get(t);
        return n ? r === !1 && Object.keys(n).length === 0 && o.delete(t) : r === !0 && (n = {},
        o.set(t, n)),
        n
    }
    forceCleanup() {
        this._win && (this._forgetMemorizedElements.push(this._win.document.body),
        !this._forgetMemorizedTimer && (this._forgetMemorizedTimer = this._win.setTimeout(()=>{
            delete this._forgetMemorizedTimer;
            for (let t = this._forgetMemorizedElements.shift(); t; t = this._forgetMemorizedElements.shift())
                zp(this.getWindow, t),
                he.forgetMemorized(this.focusedElement, t)
        }
        , 0),
        Qm(this.getWindow, !0)))
    }
    queueInit(t) {
        var r;
        this._win && (this._initQueue.push(t),
        this._initTimer || (this._initTimer = (r = this._win) === null || r === void 0 ? void 0 : r.setTimeout(()=>{
            delete this._initTimer,
            this.drainInitQueue()
        }
        , 0)))
    }
    drainInitQueue() {
        if (!this._win)
            return;
        const t = this._initQueue;
        this._initQueue = [],
        t.forEach(r=>r())
    }
}
function NS(e, t) {
    let r = jS(e);
    return r ? r.createTabster(!1, t) : (r = new TS(e,t),
    e.__tabsterInstance = r,
    r.createTabster())
}
function zS(e) {
    const t = e.core;
    return t.groupper || (t.groupper = new fS(t,t.getWindow)),
    t.groupper
}
function BT(e) {
    const t = e.core;
    return t.mover || (t.mover = new xS(t,t.getWindow)),
    t.mover
}
function FS(e, t, r) {
    const o = e.core;
    return o.modalizer || (o.modalizer = new mS(o,t,r)),
    o.modalizer
}
function RS(e) {
    const t = e.core;
    return t.restorer || (t.restorer = new PS(t)),
    t.restorer
}
function DS(e, t) {
    e.core.disposeTabster(e, t)
}
function jS(e) {
    return e.__tabsterInstance
}
const As = ()=>{
    const {targetDocument: e} = It()
      , t = (e == null ? void 0 : e.defaultView) || void 0
      , r = b.useMemo(()=>t ? NS(t, {
        autoRoot: {},
        controlTab: !1,
        getParent: p2,
        checkUncontrolledTrappingFocus: o=>{
            var n;
            return !!(!((n = o.firstElementChild) === null || n === void 0) && n.hasAttribute("data-is-focus-trap-zone-bumper"))
        }
    }) : null, [t]);
    return Rt(()=>()=>{
        r && DS(r)
    }
    , [r]),
    r
}
  , Yu = e=>(As(),
o0(e))
  , IS = e=>{
    const t = As();
    return t && zS(t),
    Yu({
        groupper: {
            tabbability: AS(e == null ? void 0 : e.tabBehavior)
        },
        focusable: {
            ignoreKeydown: e == null ? void 0 : e.ignoreDefaultKeydown
        }
    })
}
  , AS = e=>{
    switch (e) {
    case "unlimited":
        return $n.GroupperTabbabilities.Unlimited;
    case "limited":
        return $n.GroupperTabbabilities.Limited;
    case "limited-trap-focus":
        return $n.GroupperTabbabilities.LimitedTrapFocus;
    default:
        return
    }
}
  , i0 = ()=>{
    const e = As()
      , {targetDocument: t} = It()
      , r = b.useCallback((s,l)=>(e == null ? void 0 : e.focusable.findAll({
        container: s,
        acceptCondition: l
    })) || [], [e])
      , o = b.useCallback(s=>e == null ? void 0 : e.focusable.findFirst({
        container: s
    }), [e])
      , n = b.useCallback(s=>e == null ? void 0 : e.focusable.findLast({
        container: s
    }), [e])
      , i = b.useCallback((s,l={})=>{
        if (!e || !t)
            return null;
        const {container: u=t.body} = l;
        return e.focusable.findNext({
            currentElement: s,
            container: u
        })
    }
    , [e, t])
      , a = b.useCallback((s,l={})=>{
        if (!e || !t)
            return null;
        const {container: u=t.body} = l;
        return e.focusable.findPrev({
            currentElement: s,
            container: u
        })
    }
    , [e, t]);
    return {
        findAllFocusable: r,
        findFirstFocusable: o,
        findLastFocusable: n,
        findNextFocusable: i,
        findPrevFocusable: a
    }
}
  , jp = "data-fui-focus-visible"
  , a0 = "data-fui-focus-within";
function OS(e, t) {
    if (s0(e))
        return ()=>{}
        ;
    const r = {
        current: void 0
    }
      , o = xd(t);
    function n(l) {
        o.isNavigatingWithKeyboard() && Za(l) && (r.current = l,
        l.setAttribute(jp, ""))
    }
    function i() {
        r.current && (r.current.removeAttribute(jp),
        r.current = void 0)
    }
    o.subscribe(l=>{
        l || i()
    }
    );
    const a = l=>{
        i();
        const u = l.composedPath()[0];
        n(u)
    }
      , s = l=>{
        (!l.relatedTarget || Za(l.relatedTarget) && !e.contains(l.relatedTarget)) && i()
    }
    ;
    return e.addEventListener(Dt, a),
    e.addEventListener("focusout", s),
    e.focusVisible = !0,
    n(t.document.activeElement),
    ()=>{
        i(),
        e.removeEventListener(Dt, a),
        e.removeEventListener("focusout", s),
        delete e.focusVisible,
        Sd(o)
    }
}
function s0(e) {
    return e ? e.focusVisible ? !0 : s0(e == null ? void 0 : e.parentElement) : !1
}
function l0(e={}) {
    const t = It()
      , r = b.useRef(null);
    var o;
    const n = (o = e.targetDocument) !== null && o !== void 0 ? o : t.targetDocument;
    return b.useEffect(()=>{
        if (n != null && n.defaultView && r.current)
            return OS(r.current, n.defaultView)
    }
    , [r, n]),
    r
}
function LS(e, t) {
    const r = xd(t);
    r.subscribe(i=>{
        i || Ip(e)
    }
    );
    const o = i=>{
        r.isNavigatingWithKeyboard() && Ap(i.target) && MS(e)
    }
      , n = i=>{
        (!i.relatedTarget || Ap(i.relatedTarget) && !e.contains(i.relatedTarget)) && Ip(e)
    }
    ;
    return e.addEventListener(Dt, o),
    e.addEventListener("focusout", n),
    ()=>{
        e.removeEventListener(Dt, o),
        e.removeEventListener("focusout", n),
        Sd(r)
    }
}
function MS(e) {
    e.setAttribute(a0, "")
}
function Ip(e) {
    e.removeAttribute(a0)
}
function Ap(e) {
    return e ? !!(e && typeof e == "object" && "classList"in e && "contains"in e) : !1
}
function qS() {
    const {targetDocument: e} = It()
      , t = b.useRef(null);
    return b.useEffect(()=>{
        if (e != null && e.defaultView && t.current)
            return LS(t.current, e.defaultView)
    }
    , [t, e]),
    t
}
const u0 = (e={})=>{
    const {trapFocus: t, alwaysFocusable: r, legacyTrapFocus: o} = e
      , n = As();
    n && (FS(n),
    RS(n));
    const i = pn("modal-", e.id)
      , a = Yu({
        restorer: {
            type: $n.RestorerTypes.Source
        },
        ...t && {
            modalizer: {
                id: i,
                isOthersAccessible: !t,
                isAlwaysAccessible: r,
                isTrapped: o && t
            }
        }
    })
      , s = Yu({
        restorer: {
            type: $n.RestorerTypes.Target
        }
    });
    return {
        modalAttributes: a,
        triggerAttributes: s
    }
}
  , L = {
    2: "#050505",
    4: "#0a0a0a",
    6: "#0f0f0f",
    8: "#141414",
    10: "#1a1a1a",
    12: "#1f1f1f",
    14: "#242424",
    16: "#292929",
    18: "#2e2e2e",
    20: "#333333",
    22: "#383838",
    24: "#3d3d3d",
    26: "#424242",
    28: "#474747",
    30: "#4d4d4d",
    32: "#525252",
    34: "#575757",
    36: "#5c5c5c",
    38: "#616161",
    40: "#666666",
    42: "#6b6b6b",
    44: "#707070",
    46: "#757575",
    48: "#7a7a7a",
    50: "#808080",
    52: "#858585",
    54: "#8a8a8a",
    56: "#8f8f8f",
    58: "#949494",
    60: "#999999",
    62: "#9e9e9e",
    64: "#a3a3a3",
    66: "#a8a8a8",
    68: "#adadad",
    70: "#b3b3b3",
    72: "#b8b8b8",
    74: "#bdbdbd",
    76: "#c2c2c2",
    78: "#c7c7c7",
    80: "#cccccc",
    82: "#d1d1d1",
    84: "#d6d6d6",
    86: "#dbdbdb",
    88: "#e0e0e0",
    90: "#e6e6e6",
    92: "#ebebeb",
    94: "#f0f0f0",
    96: "#f5f5f5",
    98: "#fafafa"
}
  , gr = {
    5: "rgba(255, 255, 255, 0.05)",
    10: "rgba(255, 255, 255, 0.1)",
    20: "rgba(255, 255, 255, 0.2)",
    30: "rgba(255, 255, 255, 0.3)",
    40: "rgba(255, 255, 255, 0.4)",
    50: "rgba(255, 255, 255, 0.5)",
    60: "rgba(255, 255, 255, 0.6)",
    70: "rgba(255, 255, 255, 0.7)",
    80: "rgba(255, 255, 255, 0.8)",
    90: "rgba(255, 255, 255, 0.9)"
}
  , vr = {
    5: "rgba(0, 0, 0, 0.05)",
    10: "rgba(0, 0, 0, 0.1)",
    20: "rgba(0, 0, 0, 0.2)",
    30: "rgba(0, 0, 0, 0.3)",
    40: "rgba(0, 0, 0, 0.4)",
    50: "rgba(0, 0, 0, 0.5)",
    60: "rgba(0, 0, 0, 0.6)",
    70: "rgba(0, 0, 0, 0.7)",
    80: "rgba(0, 0, 0, 0.8)",
    90: "rgba(0, 0, 0, 0.9)"
}
  , be = "#ffffff"
  , HS = "#000000"
  , WS = {
    shade50: "#130204",
    shade40: "#230308",
    shade30: "#420610",
    shade20: "#590815",
    shade10: "#690a19",
    primary: "#750b1c",
    tint10: "#861b2c",
    tint20: "#962f3f",
    tint30: "#ac4f5e",
    tint40: "#d69ca5",
    tint50: "#e9c7cd",
    tint60: "#f9f0f2"
}
  , c0 = {
    shade50: "#200205",
    shade40: "#3b0509",
    shade30: "#6e0811",
    shade20: "#960b18",
    shade10: "#b10e1c",
    primary: "#c50f1f",
    tint10: "#cc2635",
    tint20: "#d33f4c",
    tint30: "#dc626d",
    tint40: "#eeacb2",
    tint50: "#f6d1d5",
    tint60: "#fdf3f4"
}
  , $S = {
    shade50: "#210809",
    shade40: "#3f1011",
    shade30: "#751d1f",
    shade20: "#9f282b",
    shade10: "#bc2f32",
    primary: "#d13438",
    tint10: "#d7494c",
    tint20: "#dc5e62",
    tint30: "#e37d80",
    tint40: "#f1bbbc",
    tint50: "#f8dadb",
    tint60: "#fdf6f6"
}
  , US = {
    shade50: "#230900",
    shade40: "#411200",
    shade30: "#7a2101",
    shade20: "#a62d01",
    shade10: "#c43501",
    primary: "#da3b01",
    tint10: "#de501c",
    tint20: "#e36537",
    tint30: "#e9835e",
    tint40: "#f4bfab",
    tint50: "#f9dcd1",
    tint60: "#fdf6f3"
}
  , VS = {
    shade50: "#200d03",
    shade40: "#3d1805",
    shade30: "#712d09",
    shade20: "#9a3d0c",
    shade10: "#b6480e",
    primary: "#ca5010",
    tint10: "#d06228",
    tint20: "#d77440",
    tint30: "#df8e64",
    tint40: "#efc4ad",
    tint50: "#f7dfd2",
    tint60: "#fdf7f4"
}
  , GS = {
    shade50: "#271002",
    shade40: "#4a1e04",
    shade30: "#8a3707",
    shade20: "#bc4b09",
    shade10: "#de590b",
    primary: "#f7630c",
    tint10: "#f87528",
    tint20: "#f98845",
    tint30: "#faa06b",
    tint40: "#fdcfb4",
    tint50: "#fee5d7",
    tint60: "#fff9f5"
}
  , KS = {
    shade50: "#291600",
    shade40: "#4d2a00",
    shade30: "#8f4e00",
    shade20: "#c26a00",
    shade10: "#e67e00",
    primary: "#ff8c00",
    tint10: "#ff9a1f",
    tint20: "#ffa83d",
    tint30: "#ffba66",
    tint40: "#ffddb3",
    tint50: "#ffedd6",
    tint60: "#fffaf5"
}
  , XS = {
    shade50: "#251a00",
    shade40: "#463100",
    shade30: "#835b00",
    shade20: "#b27c00",
    shade10: "#d39300",
    primary: "#eaa300",
    tint10: "#edad1c",
    tint20: "#efb839",
    tint30: "#f2c661",
    tint40: "#f9e2ae",
    tint50: "#fcefd3",
    tint60: "#fefbf4"
}
  , QS = {
    primary: "#fde300",
    shade10: "#e4cc00",
    shade20: "#c0ad00",
    shade30: "#817400",
    shade40: "#4c4400",
    shade50: "#282400",
    tint10: "#fde61e",
    tint20: "#fdea3d",
    tint30: "#feee66",
    tint40: "#fef7b2",
    tint50: "#fffad6",
    tint60: "#fffef5"
}
  , JS = {
    shade50: "#1f1900",
    shade40: "#3a2f00",
    shade30: "#6c5700",
    shade20: "#937700",
    shade10: "#ae8c00",
    primary: "#c19c00",
    tint10: "#c8a718",
    tint20: "#d0b232",
    tint30: "#dac157",
    tint40: "#ecdfa5",
    tint50: "#f5eece",
    tint60: "#fdfbf2"
}
  , YS = {
    shade50: "#181202",
    shade40: "#2e2103",
    shade30: "#553e06",
    shade20: "#745408",
    shade10: "#89640a",
    primary: "#986f0b",
    tint10: "#a47d1e",
    tint20: "#b18c34",
    tint30: "#c1a256",
    tint40: "#e0cea2",
    tint50: "#efe4cb",
    tint60: "#fbf8f2"
}
  , ZS = {
    shade50: "#170e07",
    shade40: "#2b1a0e",
    shade30: "#50301a",
    shade20: "#6c4123",
    shade10: "#804d29",
    primary: "#8e562e",
    tint10: "#9c663f",
    tint20: "#a97652",
    tint30: "#bb8f6f",
    tint40: "#ddc3b0",
    tint50: "#edded3",
    tint60: "#faf7f4"
}
  , e_ = {
    shade50: "#0c1501",
    shade40: "#162702",
    shade30: "#294903",
    shade20: "#376304",
    shade10: "#427505",
    primary: "#498205",
    tint10: "#599116",
    tint20: "#6ba02b",
    tint30: "#85b44c",
    tint40: "#bdd99b",
    tint50: "#dbebc7",
    tint60: "#f6faf0"
}
  , t_ = {
    shade50: "#002111",
    shade40: "#003d20",
    shade30: "#00723b",
    shade20: "#009b51",
    shade10: "#00b85f",
    primary: "#00cc6a",
    tint10: "#19d279",
    tint20: "#34d889",
    tint30: "#5ae0a0",
    tint40: "#a8f0cd",
    tint50: "#cff7e4",
    tint60: "#f3fdf8"
}
  , r_ = {
    shade50: "#031a02",
    shade40: "#063004",
    shade30: "#0b5a08",
    shade20: "#0e7a0b",
    shade10: "#11910d",
    primary: "#13a10e",
    tint10: "#27ac22",
    tint20: "#3db838",
    tint30: "#5ec75a",
    tint40: "#a7e3a5",
    tint50: "#cef0cd",
    tint60: "#f2fbf2"
}
  , d0 = {
    shade50: "#031403",
    shade40: "#052505",
    shade30: "#094509",
    shade20: "#0c5e0c",
    shade10: "#0e700e",
    primary: "#107c10",
    tint10: "#218c21",
    tint20: "#359b35",
    tint30: "#54b054",
    tint40: "#9fd89f",
    tint50: "#c9eac9",
    tint60: "#f1faf1"
}
  , o_ = {
    shade50: "#021102",
    shade40: "#032003",
    shade30: "#063b06",
    shade20: "#085108",
    shade10: "#0a5f0a",
    primary: "#0b6a0b",
    tint10: "#1a7c1a",
    tint20: "#2d8e2d",
    tint30: "#4da64d",
    tint40: "#9ad29a",
    tint50: "#c6e7c6",
    tint60: "#f0f9f0"
}
  , n_ = {
    shade50: "#001d1f",
    shade40: "#00373a",
    shade30: "#00666d",
    shade20: "#008b94",
    shade10: "#00a5af",
    primary: "#00b7c3",
    tint10: "#18bfca",
    tint20: "#32c8d1",
    tint30: "#58d3db",
    tint40: "#a6e9ed",
    tint50: "#cef3f5",
    tint60: "#f2fcfd"
}
  , i_ = {
    shade50: "#001516",
    shade40: "#012728",
    shade30: "#02494c",
    shade20: "#026467",
    shade10: "#037679",
    primary: "#038387",
    tint10: "#159195",
    tint20: "#2aa0a4",
    tint30: "#4cb4b7",
    tint40: "#9bd9db",
    tint50: "#c7ebec",
    tint60: "#f0fafa"
}
  , a_ = {
    shade50: "#000f12",
    shade40: "#001b22",
    shade30: "#00333f",
    shade20: "#004555",
    shade10: "#005265",
    primary: "#005b70",
    tint10: "#0f6c81",
    tint20: "#237d92",
    tint30: "#4496a9",
    tint40: "#94c8d4",
    tint50: "#c3e1e8",
    tint60: "#eff7f9"
}
  , s_ = {
    shade50: "#001322",
    shade40: "#002440",
    shade30: "#004377",
    shade20: "#005ba1",
    shade10: "#006cbf",
    primary: "#0078d4",
    tint10: "#1a86d9",
    tint20: "#3595de",
    tint30: "#5caae5",
    tint40: "#a9d3f2",
    tint50: "#d0e7f8",
    tint60: "#f3f9fd"
}
  , l_ = {
    shade50: "#000c16",
    shade40: "#00172a",
    shade30: "#002c4e",
    shade20: "#003b6a",
    shade10: "#00467e",
    primary: "#004e8c",
    tint10: "#125e9a",
    tint20: "#286fa8",
    tint30: "#4a89ba",
    tint40: "#9abfdc",
    tint50: "#c7dced",
    tint60: "#f0f6fa"
}
  , u_ = {
    shade50: "#0d1126",
    shade40: "#182047",
    shade30: "#2c3c85",
    shade20: "#3c51b4",
    shade10: "#4760d5",
    primary: "#4f6bed",
    tint10: "#637cef",
    tint20: "#778df1",
    tint30: "#93a4f4",
    tint40: "#c8d1fa",
    tint50: "#e1e6fc",
    tint60: "#f7f9fe"
}
  , c_ = {
    shade50: "#00061d",
    shade40: "#000c36",
    shade30: "#001665",
    shade20: "#001e89",
    shade10: "#0023a2",
    primary: "#0027b4",
    tint10: "#173bbd",
    tint20: "#3050c6",
    tint30: "#546fd2",
    tint40: "#a3b2e8",
    tint50: "#ccd5f3",
    tint60: "#f2f4fc"
}
  , d_ = {
    shade50: "#120f25",
    shade40: "#221d46",
    shade30: "#3f3682",
    shade20: "#5649b0",
    shade10: "#6656d1",
    primary: "#7160e8",
    tint10: "#8172eb",
    tint20: "#9184ee",
    tint30: "#a79cf1",
    tint40: "#d2ccf8",
    tint50: "#e7e4fb",
    tint60: "#f9f8fe"
}
  , f_ = {
    shade50: "#0f0717",
    shade40: "#1c0e2b",
    shade30: "#341a51",
    shade20: "#46236e",
    shade10: "#532982",
    primary: "#5c2e91",
    tint10: "#6b3f9e",
    tint20: "#7c52ab",
    tint30: "#9470bd",
    tint40: "#c6b1de",
    tint50: "#e0d3ed",
    tint60: "#f7f4fb"
}
  , p_ = {
    shade50: "#160418",
    shade40: "#29072e",
    shade30: "#4c0d55",
    shade20: "#671174",
    shade10: "#7a1589",
    primary: "#881798",
    tint10: "#952aa4",
    tint20: "#a33fb1",
    tint30: "#b55fc1",
    tint40: "#d9a7e0",
    tint50: "#eaceef",
    tint60: "#faf2fb"
}
  , h_ = {
    shade50: "#1f091d",
    shade40: "#3a1136",
    shade30: "#6d2064",
    shade20: "#932b88",
    shade10: "#af33a1",
    primary: "#c239b3",
    tint10: "#c94cbc",
    tint20: "#d161c4",
    tint30: "#da7ed0",
    tint40: "#edbbe7",
    tint50: "#f5daf2",
    tint60: "#fdf5fc"
}
  , g_ = {
    shade50: "#1c0b1f",
    shade40: "#35153a",
    shade30: "#63276d",
    shade20: "#863593",
    shade10: "#9f3faf",
    primary: "#b146c2",
    tint10: "#ba58c9",
    tint20: "#c36bd1",
    tint30: "#cf87da",
    tint40: "#e6bfed",
    tint50: "#f2dcf5",
    tint60: "#fcf6fd"
}
  , v_ = {
    shade50: "#24091b",
    shade40: "#441232",
    shade30: "#80215d",
    shade20: "#ad2d7e",
    shade10: "#cd3595",
    primary: "#e43ba6",
    tint10: "#e750b0",
    tint20: "#ea66ba",
    tint30: "#ef85c8",
    tint40: "#f7c0e3",
    tint50: "#fbddf0",
    tint60: "#fef6fb"
}
  , m_ = {
    shade50: "#1f0013",
    shade40: "#390024",
    shade30: "#6b0043",
    shade20: "#91005a",
    shade10: "#ac006b",
    primary: "#bf0077",
    tint10: "#c71885",
    tint20: "#ce3293",
    tint30: "#d957a8",
    tint40: "#eca5d1",
    tint50: "#f5cee6",
    tint60: "#fcf2f9"
}
  , y_ = {
    shade50: "#13000c",
    shade40: "#240017",
    shade30: "#43002b",
    shade20: "#5a003b",
    shade10: "#6b0045",
    primary: "#77004d",
    tint10: "#87105d",
    tint20: "#98246f",
    tint30: "#ad4589",
    tint40: "#d696c0",
    tint50: "#e9c4dc",
    tint60: "#faf0f6"
}
  , b_ = {
    shade50: "#141313",
    shade40: "#252323",
    shade30: "#444241",
    shade20: "#5d5958",
    shade10: "#6e6968",
    primary: "#7a7574",
    tint10: "#8a8584",
    tint20: "#9a9594",
    tint30: "#afabaa",
    tint40: "#d7d4d4",
    tint50: "#eae8e8",
    tint60: "#faf9f9"
}
  , w_ = {
    shade50: "#0f0e0e",
    shade40: "#1c1b1a",
    shade30: "#343231",
    shade20: "#474443",
    shade10: "#54514f",
    primary: "#5d5a58",
    tint10: "#706d6b",
    tint20: "#84817e",
    tint30: "#9e9b99",
    tint40: "#cecccb",
    tint50: "#e5e4e3",
    tint60: "#f8f8f8"
}
  , k_ = {
    shade50: "#111314",
    shade40: "#1f2426",
    shade30: "#3b4447",
    shade20: "#505c60",
    shade10: "#5f6d71",
    primary: "#69797e",
    tint10: "#79898d",
    tint20: "#89989d",
    tint30: "#a0adb2",
    tint40: "#cdd6d8",
    tint50: "#e4e9ea",
    tint60: "#f8f9fa"
}
  , x_ = {
    shade50: "#090a0b",
    shade40: "#111315",
    shade30: "#202427",
    shade20: "#2b3135",
    shade10: "#333a3f",
    primary: "#394146",
    tint10: "#4d565c",
    tint20: "#626c72",
    tint30: "#808a90",
    tint40: "#bcc3c7",
    tint50: "#dbdfe1",
    tint60: "#f6f7f8"
}
  , et = {
    red: $S,
    green: d0,
    darkOrange: US,
    yellow: QS,
    berry: h_,
    lightGreen: r_,
    marigold: XS
}
  , Il = {
    darkRed: WS,
    cranberry: c0,
    pumpkin: VS,
    peach: KS,
    gold: JS,
    brass: YS,
    brown: ZS,
    forest: e_,
    seafoam: t_,
    darkGreen: o_,
    lightTeal: n_,
    teal: i_,
    steel: a_,
    blue: s_,
    royalBlue: l_,
    cornflower: u_,
    navy: c_,
    lavender: d_,
    purple: f_,
    grape: p_,
    lilac: g_,
    pink: v_,
    magenta: m_,
    plum: y_,
    beige: b_,
    mink: w_,
    platinum: k_,
    anchor: x_
}
  , Ze = {
    cranberry: c0,
    green: d0,
    orange: GS
}
  , S_ = ["red", "green", "darkOrange", "yellow", "berry", "lightGreen", "marigold"]
  , __ = ["darkRed", "cranberry", "pumpkin", "peach", "gold", "brass", "brown", "forest", "seafoam", "darkGreen", "lightTeal", "teal", "steel", "blue", "royalBlue", "cornflower", "navy", "lavender", "purple", "grape", "lilac", "pink", "magenta", "plum", "beige", "mink", "platinum", "anchor"]
  , Os = {
    success: "green",
    warning: "orange",
    danger: "cranberry"
}
  , Pi = S_.reduce((e,t)=>{
    const r = t.slice(0, 1).toUpperCase() + t.slice(1)
      , o = {
        [`colorPalette${r}Background1`]: et[t].tint60,
        [`colorPalette${r}Background2`]: et[t].tint40,
        [`colorPalette${r}Background3`]: et[t].primary,
        [`colorPalette${r}Foreground1`]: et[t].shade10,
        [`colorPalette${r}Foreground2`]: et[t].shade30,
        [`colorPalette${r}Foreground3`]: et[t].primary,
        [`colorPalette${r}BorderActive`]: et[t].primary,
        [`colorPalette${r}Border1`]: et[t].tint40,
        [`colorPalette${r}Border2`]: et[t].primary
    };
    return Object.assign(e, o)
}
, {});
Pi.colorPaletteYellowForeground1 = et.yellow.shade30;
Pi.colorPaletteRedForegroundInverted = et.red.tint20;
Pi.colorPaletteGreenForegroundInverted = et.green.tint20;
Pi.colorPaletteYellowForegroundInverted = et.yellow.tint40;
const B_ = __.reduce((e,t)=>{
    const r = t.slice(0, 1).toUpperCase() + t.slice(1)
      , o = {
        [`colorPalette${r}Background2`]: Il[t].tint40,
        [`colorPalette${r}Foreground2`]: Il[t].shade30,
        [`colorPalette${r}BorderActive`]: Il[t].primary
    };
    return Object.assign(e, o)
}
, {})
  , E_ = {
    ...Pi,
    ...B_
}
  , Ls = Object.entries(Os).reduce((e,[t,r])=>{
    const o = t.slice(0, 1).toUpperCase() + t.slice(1)
      , n = {
        [`colorStatus${o}Background1`]: Ze[r].tint60,
        [`colorStatus${o}Background2`]: Ze[r].tint40,
        [`colorStatus${o}Background3`]: Ze[r].primary,
        [`colorStatus${o}Foreground1`]: Ze[r].shade10,
        [`colorStatus${o}Foreground2`]: Ze[r].shade30,
        [`colorStatus${o}Foreground3`]: Ze[r].primary,
        [`colorStatus${o}ForegroundInverted`]: Ze[r].tint30,
        [`colorStatus${o}BorderActive`]: Ze[r].primary,
        [`colorStatus${o}Border1`]: Ze[r].tint40,
        [`colorStatus${o}Border2`]: Ze[r].primary
    };
    return Object.assign(e, n)
}
, {});
Ls.colorStatusWarningForeground1 = Ze[Os.warning].shade20;
Ls.colorStatusWarningForeground3 = Ze[Os.warning].shade20;
Ls.colorStatusWarningBorder2 = Ze[Os.warning].shade20;
const P_ = e=>({
    colorNeutralForeground1: L[14],
    colorNeutralForeground1Hover: L[14],
    colorNeutralForeground1Pressed: L[14],
    colorNeutralForeground1Selected: L[14],
    colorNeutralForeground2: L[26],
    colorNeutralForeground2Hover: L[14],
    colorNeutralForeground2Pressed: L[14],
    colorNeutralForeground2Selected: L[14],
    colorNeutralForeground2BrandHover: e[80],
    colorNeutralForeground2BrandPressed: e[70],
    colorNeutralForeground2BrandSelected: e[80],
    colorNeutralForeground3: L[38],
    colorNeutralForeground3Hover: L[26],
    colorNeutralForeground3Pressed: L[26],
    colorNeutralForeground3Selected: L[26],
    colorNeutralForeground3BrandHover: e[80],
    colorNeutralForeground3BrandPressed: e[70],
    colorNeutralForeground3BrandSelected: e[80],
    colorNeutralForeground4: L[44],
    colorNeutralForegroundDisabled: L[74],
    colorNeutralForegroundInvertedDisabled: gr[40],
    colorBrandForegroundLink: e[70],
    colorBrandForegroundLinkHover: e[60],
    colorBrandForegroundLinkPressed: e[40],
    colorBrandForegroundLinkSelected: e[70],
    colorNeutralForeground2Link: L[26],
    colorNeutralForeground2LinkHover: L[14],
    colorNeutralForeground2LinkPressed: L[14],
    colorNeutralForeground2LinkSelected: L[14],
    colorCompoundBrandForeground1: e[80],
    colorCompoundBrandForeground1Hover: e[70],
    colorCompoundBrandForeground1Pressed: e[60],
    colorBrandForeground1: e[80],
    colorBrandForeground2: e[70],
    colorBrandForeground2Hover: e[60],
    colorBrandForeground2Pressed: e[30],
    colorNeutralForeground1Static: L[14],
    colorNeutralForegroundStaticInverted: be,
    colorNeutralForegroundInverted: be,
    colorNeutralForegroundInvertedHover: be,
    colorNeutralForegroundInvertedPressed: be,
    colorNeutralForegroundInvertedSelected: be,
    colorNeutralForegroundInverted2: be,
    colorNeutralForegroundOnBrand: be,
    colorNeutralForegroundInvertedLink: be,
    colorNeutralForegroundInvertedLinkHover: be,
    colorNeutralForegroundInvertedLinkPressed: be,
    colorNeutralForegroundInvertedLinkSelected: be,
    colorBrandForegroundInverted: e[100],
    colorBrandForegroundInvertedHover: e[110],
    colorBrandForegroundInvertedPressed: e[100],
    colorBrandForegroundOnLight: e[80],
    colorBrandForegroundOnLightHover: e[70],
    colorBrandForegroundOnLightPressed: e[50],
    colorBrandForegroundOnLightSelected: e[60],
    colorNeutralBackground1: be,
    colorNeutralBackground1Hover: L[96],
    colorNeutralBackground1Pressed: L[88],
    colorNeutralBackground1Selected: L[92],
    colorNeutralBackground2: L[98],
    colorNeutralBackground2Hover: L[94],
    colorNeutralBackground2Pressed: L[86],
    colorNeutralBackground2Selected: L[90],
    colorNeutralBackground3: L[96],
    colorNeutralBackground3Hover: L[92],
    colorNeutralBackground3Pressed: L[84],
    colorNeutralBackground3Selected: L[88],
    colorNeutralBackground4: L[94],
    colorNeutralBackground4Hover: L[98],
    colorNeutralBackground4Pressed: L[96],
    colorNeutralBackground4Selected: be,
    colorNeutralBackground5: L[92],
    colorNeutralBackground5Hover: L[96],
    colorNeutralBackground5Pressed: L[94],
    colorNeutralBackground5Selected: L[98],
    colorNeutralBackground6: L[90],
    colorNeutralBackgroundInverted: L[16],
    colorNeutralBackgroundStatic: L[20],
    colorNeutralBackgroundAlpha: gr[50],
    colorNeutralBackgroundAlpha2: gr[80],
    colorSubtleBackground: "transparent",
    colorSubtleBackgroundHover: L[96],
    colorSubtleBackgroundPressed: L[88],
    colorSubtleBackgroundSelected: L[92],
    colorSubtleBackgroundLightAlphaHover: gr[70],
    colorSubtleBackgroundLightAlphaPressed: gr[50],
    colorSubtleBackgroundLightAlphaSelected: "transparent",
    colorSubtleBackgroundInverted: "transparent",
    colorSubtleBackgroundInvertedHover: vr[10],
    colorSubtleBackgroundInvertedPressed: vr[30],
    colorSubtleBackgroundInvertedSelected: vr[20],
    colorTransparentBackground: "transparent",
    colorTransparentBackgroundHover: "transparent",
    colorTransparentBackgroundPressed: "transparent",
    colorTransparentBackgroundSelected: "transparent",
    colorNeutralBackgroundDisabled: L[94],
    colorNeutralBackgroundInvertedDisabled: gr[10],
    colorNeutralStencil1: L[90],
    colorNeutralStencil2: L[98],
    colorNeutralStencil1Alpha: vr[10],
    colorNeutralStencil2Alpha: vr[5],
    colorBackgroundOverlay: vr[40],
    colorScrollbarOverlay: vr[50],
    colorBrandBackground: e[80],
    colorBrandBackgroundHover: e[70],
    colorBrandBackgroundPressed: e[40],
    colorBrandBackgroundSelected: e[60],
    colorCompoundBrandBackground: e[80],
    colorCompoundBrandBackgroundHover: e[70],
    colorCompoundBrandBackgroundPressed: e[60],
    colorBrandBackgroundStatic: e[80],
    colorBrandBackground2: e[160],
    colorBrandBackground2Hover: e[150],
    colorBrandBackground2Pressed: e[130],
    colorBrandBackgroundInverted: be,
    colorBrandBackgroundInvertedHover: e[160],
    colorBrandBackgroundInvertedPressed: e[140],
    colorBrandBackgroundInvertedSelected: e[150],
    colorNeutralStrokeAccessible: L[38],
    colorNeutralStrokeAccessibleHover: L[34],
    colorNeutralStrokeAccessiblePressed: L[30],
    colorNeutralStrokeAccessibleSelected: e[80],
    colorNeutralStroke1: L[82],
    colorNeutralStroke1Hover: L[78],
    colorNeutralStroke1Pressed: L[70],
    colorNeutralStroke1Selected: L[74],
    colorNeutralStroke2: L[88],
    colorNeutralStroke3: L[94],
    colorNeutralStrokeSubtle: L[88],
    colorNeutralStrokeOnBrand: be,
    colorNeutralStrokeOnBrand2: be,
    colorNeutralStrokeOnBrand2Hover: be,
    colorNeutralStrokeOnBrand2Pressed: be,
    colorNeutralStrokeOnBrand2Selected: be,
    colorBrandStroke1: e[80],
    colorBrandStroke2: e[140],
    colorBrandStroke2Hover: e[120],
    colorBrandStroke2Pressed: e[80],
    colorBrandStroke2Contrast: e[140],
    colorCompoundBrandStroke: e[80],
    colorCompoundBrandStrokeHover: e[70],
    colorCompoundBrandStrokePressed: e[60],
    colorNeutralStrokeDisabled: L[88],
    colorNeutralStrokeInvertedDisabled: gr[40],
    colorTransparentStroke: "transparent",
    colorTransparentStrokeInteractive: "transparent",
    colorTransparentStrokeDisabled: "transparent",
    colorNeutralStrokeAlpha: vr[5],
    colorNeutralStrokeAlpha2: gr[20],
    colorStrokeFocus1: be,
    colorStrokeFocus2: HS,
    colorNeutralShadowAmbient: "rgba(0,0,0,0.12)",
    colorNeutralShadowKey: "rgba(0,0,0,0.14)",
    colorNeutralShadowAmbientLighter: "rgba(0,0,0,0.06)",
    colorNeutralShadowKeyLighter: "rgba(0,0,0,0.07)",
    colorNeutralShadowAmbientDarker: "rgba(0,0,0,0.20)",
    colorNeutralShadowKeyDarker: "rgba(0,0,0,0.24)",
    colorBrandShadowAmbient: "rgba(0,0,0,0.30)",
    colorBrandShadowKey: "rgba(0,0,0,0.25)"
})
  , C_ = {
    borderRadiusNone: "0",
    borderRadiusSmall: "2px",
    borderRadiusMedium: "4px",
    borderRadiusLarge: "6px",
    borderRadiusXLarge: "8px",
    borderRadiusCircular: "10000px"
}
  , T_ = {
    curveAccelerateMax: "cubic-bezier(0.9,0.1,1,0.2)",
    curveAccelerateMid: "cubic-bezier(1,0,1,1)",
    curveAccelerateMin: "cubic-bezier(0.8,0,0.78,1)",
    curveDecelerateMax: "cubic-bezier(0.1,0.9,0.2,1)",
    curveDecelerateMid: "cubic-bezier(0,0,0,1)",
    curveDecelerateMin: "cubic-bezier(0.33,0,0.1,1)",
    curveEasyEaseMax: "cubic-bezier(0.8,0,0.2,1)",
    curveEasyEase: "cubic-bezier(0.33,0,0.67,1)",
    curveLinear: "cubic-bezier(0,0,1,1)"
}
  , N_ = {
    durationUltraFast: "50ms",
    durationFaster: "100ms",
    durationFast: "150ms",
    durationNormal: "200ms",
    durationGentle: "250ms",
    durationSlow: "300ms",
    durationSlower: "400ms",
    durationUltraSlow: "500ms"
}
  , z_ = {
    fontSizeBase100: "10px",
    fontSizeBase200: "12px",
    fontSizeBase300: "14px",
    fontSizeBase400: "16px",
    fontSizeBase500: "20px",
    fontSizeBase600: "24px",
    fontSizeHero700: "28px",
    fontSizeHero800: "32px",
    fontSizeHero900: "40px",
    fontSizeHero1000: "68px"
}
  , F_ = {
    lineHeightBase100: "14px",
    lineHeightBase200: "16px",
    lineHeightBase300: "20px",
    lineHeightBase400: "22px",
    lineHeightBase500: "28px",
    lineHeightBase600: "32px",
    lineHeightHero700: "36px",
    lineHeightHero800: "40px",
    lineHeightHero900: "52px",
    lineHeightHero1000: "92px"
}
  , R_ = {
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightSemibold: 600,
    fontWeightBold: 700
}
  , D_ = {
    fontFamilyBase: "'Segoe UI', 'Segoe UI Web (West European)', -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif",
    fontFamilyMonospace: "Consolas, 'Courier New', Courier, monospace",
    fontFamilyNumeric: "Bahnschrift, 'Segoe UI', 'Segoe UI Web (West European)', -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif"
}
  , ge = {
    none: "0",
    xxs: "2px",
    xs: "4px",
    sNudge: "6px",
    s: "8px",
    mNudge: "10px",
    m: "12px",
    l: "16px",
    xl: "20px",
    xxl: "24px",
    xxxl: "32px"
}
  , j_ = {
    spacingHorizontalNone: ge.none,
    spacingHorizontalXXS: ge.xxs,
    spacingHorizontalXS: ge.xs,
    spacingHorizontalSNudge: ge.sNudge,
    spacingHorizontalS: ge.s,
    spacingHorizontalMNudge: ge.mNudge,
    spacingHorizontalM: ge.m,
    spacingHorizontalL: ge.l,
    spacingHorizontalXL: ge.xl,
    spacingHorizontalXXL: ge.xxl,
    spacingHorizontalXXXL: ge.xxxl
}
  , I_ = {
    spacingVerticalNone: ge.none,
    spacingVerticalXXS: ge.xxs,
    spacingVerticalXS: ge.xs,
    spacingVerticalSNudge: ge.sNudge,
    spacingVerticalS: ge.s,
    spacingVerticalMNudge: ge.mNudge,
    spacingVerticalM: ge.m,
    spacingVerticalL: ge.l,
    spacingVerticalXL: ge.xl,
    spacingVerticalXXL: ge.xxl,
    spacingVerticalXXXL: ge.xxxl
}
  , A_ = {
    strokeWidthThin: "1px",
    strokeWidthThick: "2px",
    strokeWidthThicker: "3px",
    strokeWidthThickest: "4px"
}
  , ea = {
    colorNeutralForeground1: "var(--colorNeutralForeground1)",
    colorNeutralForeground1Hover: "var(--colorNeutralForeground1Hover)",
    colorNeutralForeground1Pressed: "var(--colorNeutralForeground1Pressed)",
    colorNeutralForeground1Selected: "var(--colorNeutralForeground1Selected)",
    colorNeutralForeground2: "var(--colorNeutralForeground2)",
    colorNeutralForeground2Hover: "var(--colorNeutralForeground2Hover)",
    colorNeutralForeground2Pressed: "var(--colorNeutralForeground2Pressed)",
    colorNeutralForeground2Selected: "var(--colorNeutralForeground2Selected)",
    colorNeutralForeground2BrandHover: "var(--colorNeutralForeground2BrandHover)",
    colorNeutralForeground2BrandPressed: "var(--colorNeutralForeground2BrandPressed)",
    colorNeutralForeground2BrandSelected: "var(--colorNeutralForeground2BrandSelected)",
    colorNeutralForeground3: "var(--colorNeutralForeground3)",
    colorNeutralForeground3Hover: "var(--colorNeutralForeground3Hover)",
    colorNeutralForeground3Pressed: "var(--colorNeutralForeground3Pressed)",
    colorNeutralForeground3Selected: "var(--colorNeutralForeground3Selected)",
    colorNeutralForeground3BrandHover: "var(--colorNeutralForeground3BrandHover)",
    colorNeutralForeground3BrandPressed: "var(--colorNeutralForeground3BrandPressed)",
    colorNeutralForeground3BrandSelected: "var(--colorNeutralForeground3BrandSelected)",
    colorNeutralForeground4: "var(--colorNeutralForeground4)",
    colorNeutralForegroundDisabled: "var(--colorNeutralForegroundDisabled)",
    colorBrandForegroundLink: "var(--colorBrandForegroundLink)",
    colorBrandForegroundLinkHover: "var(--colorBrandForegroundLinkHover)",
    colorBrandForegroundLinkPressed: "var(--colorBrandForegroundLinkPressed)",
    colorBrandForegroundLinkSelected: "var(--colorBrandForegroundLinkSelected)",
    colorNeutralForeground2Link: "var(--colorNeutralForeground2Link)",
    colorNeutralForeground2LinkHover: "var(--colorNeutralForeground2LinkHover)",
    colorNeutralForeground2LinkPressed: "var(--colorNeutralForeground2LinkPressed)",
    colorNeutralForeground2LinkSelected: "var(--colorNeutralForeground2LinkSelected)",
    colorCompoundBrandForeground1: "var(--colorCompoundBrandForeground1)",
    colorCompoundBrandForeground1Hover: "var(--colorCompoundBrandForeground1Hover)",
    colorCompoundBrandForeground1Pressed: "var(--colorCompoundBrandForeground1Pressed)",
    colorNeutralForegroundOnBrand: "var(--colorNeutralForegroundOnBrand)",
    colorNeutralForegroundInverted: "var(--colorNeutralForegroundInverted)",
    colorNeutralForegroundInvertedHover: "var(--colorNeutralForegroundInvertedHover)",
    colorNeutralForegroundInvertedPressed: "var(--colorNeutralForegroundInvertedPressed)",
    colorNeutralForegroundInvertedSelected: "var(--colorNeutralForegroundInvertedSelected)",
    colorNeutralForegroundInverted2: "var(--colorNeutralForegroundInverted2)",
    colorNeutralForegroundStaticInverted: "var(--colorNeutralForegroundStaticInverted)",
    colorNeutralForegroundInvertedLink: "var(--colorNeutralForegroundInvertedLink)",
    colorNeutralForegroundInvertedLinkHover: "var(--colorNeutralForegroundInvertedLinkHover)",
    colorNeutralForegroundInvertedLinkPressed: "var(--colorNeutralForegroundInvertedLinkPressed)",
    colorNeutralForegroundInvertedLinkSelected: "var(--colorNeutralForegroundInvertedLinkSelected)",
    colorNeutralForegroundInvertedDisabled: "var(--colorNeutralForegroundInvertedDisabled)",
    colorBrandForeground1: "var(--colorBrandForeground1)",
    colorBrandForeground2: "var(--colorBrandForeground2)",
    colorBrandForeground2Hover: "var(--colorBrandForeground2Hover)",
    colorBrandForeground2Pressed: "var(--colorBrandForeground2Pressed)",
    colorNeutralForeground1Static: "var(--colorNeutralForeground1Static)",
    colorBrandForegroundInverted: "var(--colorBrandForegroundInverted)",
    colorBrandForegroundInvertedHover: "var(--colorBrandForegroundInvertedHover)",
    colorBrandForegroundInvertedPressed: "var(--colorBrandForegroundInvertedPressed)",
    colorBrandForegroundOnLight: "var(--colorBrandForegroundOnLight)",
    colorBrandForegroundOnLightHover: "var(--colorBrandForegroundOnLightHover)",
    colorBrandForegroundOnLightPressed: "var(--colorBrandForegroundOnLightPressed)",
    colorBrandForegroundOnLightSelected: "var(--colorBrandForegroundOnLightSelected)",
    colorNeutralBackground1: "var(--colorNeutralBackground1)",
    colorNeutralBackground1Hover: "var(--colorNeutralBackground1Hover)",
    colorNeutralBackground1Pressed: "var(--colorNeutralBackground1Pressed)",
    colorNeutralBackground1Selected: "var(--colorNeutralBackground1Selected)",
    colorNeutralBackground2: "var(--colorNeutralBackground2)",
    colorNeutralBackground2Hover: "var(--colorNeutralBackground2Hover)",
    colorNeutralBackground2Pressed: "var(--colorNeutralBackground2Pressed)",
    colorNeutralBackground2Selected: "var(--colorNeutralBackground2Selected)",
    colorNeutralBackground3: "var(--colorNeutralBackground3)",
    colorNeutralBackground3Hover: "var(--colorNeutralBackground3Hover)",
    colorNeutralBackground3Pressed: "var(--colorNeutralBackground3Pressed)",
    colorNeutralBackground3Selected: "var(--colorNeutralBackground3Selected)",
    colorNeutralBackground4: "var(--colorNeutralBackground4)",
    colorNeutralBackground4Hover: "var(--colorNeutralBackground4Hover)",
    colorNeutralBackground4Pressed: "var(--colorNeutralBackground4Pressed)",
    colorNeutralBackground4Selected: "var(--colorNeutralBackground4Selected)",
    colorNeutralBackground5: "var(--colorNeutralBackground5)",
    colorNeutralBackground5Hover: "var(--colorNeutralBackground5Hover)",
    colorNeutralBackground5Pressed: "var(--colorNeutralBackground5Pressed)",
    colorNeutralBackground5Selected: "var(--colorNeutralBackground5Selected)",
    colorNeutralBackground6: "var(--colorNeutralBackground6)",
    colorNeutralBackgroundInverted: "var(--colorNeutralBackgroundInverted)",
    colorNeutralBackgroundStatic: "var(--colorNeutralBackgroundStatic)",
    colorNeutralBackgroundAlpha: "var(--colorNeutralBackgroundAlpha)",
    colorNeutralBackgroundAlpha2: "var(--colorNeutralBackgroundAlpha2)",
    colorSubtleBackground: "var(--colorSubtleBackground)",
    colorSubtleBackgroundHover: "var(--colorSubtleBackgroundHover)",
    colorSubtleBackgroundPressed: "var(--colorSubtleBackgroundPressed)",
    colorSubtleBackgroundSelected: "var(--colorSubtleBackgroundSelected)",
    colorSubtleBackgroundLightAlphaHover: "var(--colorSubtleBackgroundLightAlphaHover)",
    colorSubtleBackgroundLightAlphaPressed: "var(--colorSubtleBackgroundLightAlphaPressed)",
    colorSubtleBackgroundLightAlphaSelected: "var(--colorSubtleBackgroundLightAlphaSelected)",
    colorSubtleBackgroundInverted: "var(--colorSubtleBackgroundInverted)",
    colorSubtleBackgroundInvertedHover: "var(--colorSubtleBackgroundInvertedHover)",
    colorSubtleBackgroundInvertedPressed: "var(--colorSubtleBackgroundInvertedPressed)",
    colorSubtleBackgroundInvertedSelected: "var(--colorSubtleBackgroundInvertedSelected)",
    colorTransparentBackground: "var(--colorTransparentBackground)",
    colorTransparentBackgroundHover: "var(--colorTransparentBackgroundHover)",
    colorTransparentBackgroundPressed: "var(--colorTransparentBackgroundPressed)",
    colorTransparentBackgroundSelected: "var(--colorTransparentBackgroundSelected)",
    colorNeutralBackgroundDisabled: "var(--colorNeutralBackgroundDisabled)",
    colorNeutralBackgroundInvertedDisabled: "var(--colorNeutralBackgroundInvertedDisabled)",
    colorNeutralStencil1: "var(--colorNeutralStencil1)",
    colorNeutralStencil2: "var(--colorNeutralStencil2)",
    colorNeutralStencil1Alpha: "var(--colorNeutralStencil1Alpha)",
    colorNeutralStencil2Alpha: "var(--colorNeutralStencil2Alpha)",
    colorBackgroundOverlay: "var(--colorBackgroundOverlay)",
    colorScrollbarOverlay: "var(--colorScrollbarOverlay)",
    colorBrandBackground: "var(--colorBrandBackground)",
    colorBrandBackgroundHover: "var(--colorBrandBackgroundHover)",
    colorBrandBackgroundPressed: "var(--colorBrandBackgroundPressed)",
    colorBrandBackgroundSelected: "var(--colorBrandBackgroundSelected)",
    colorCompoundBrandBackground: "var(--colorCompoundBrandBackground)",
    colorCompoundBrandBackgroundHover: "var(--colorCompoundBrandBackgroundHover)",
    colorCompoundBrandBackgroundPressed: "var(--colorCompoundBrandBackgroundPressed)",
    colorBrandBackgroundStatic: "var(--colorBrandBackgroundStatic)",
    colorBrandBackground2: "var(--colorBrandBackground2)",
    colorBrandBackground2Hover: "var(--colorBrandBackground2Hover)",
    colorBrandBackground2Pressed: "var(--colorBrandBackground2Pressed)",
    colorBrandBackgroundInverted: "var(--colorBrandBackgroundInverted)",
    colorBrandBackgroundInvertedHover: "var(--colorBrandBackgroundInvertedHover)",
    colorBrandBackgroundInvertedPressed: "var(--colorBrandBackgroundInvertedPressed)",
    colorBrandBackgroundInvertedSelected: "var(--colorBrandBackgroundInvertedSelected)",
    colorNeutralStrokeAccessible: "var(--colorNeutralStrokeAccessible)",
    colorNeutralStrokeAccessibleHover: "var(--colorNeutralStrokeAccessibleHover)",
    colorNeutralStrokeAccessiblePressed: "var(--colorNeutralStrokeAccessiblePressed)",
    colorNeutralStrokeAccessibleSelected: "var(--colorNeutralStrokeAccessibleSelected)",
    colorNeutralStroke1: "var(--colorNeutralStroke1)",
    colorNeutralStroke1Hover: "var(--colorNeutralStroke1Hover)",
    colorNeutralStroke1Pressed: "var(--colorNeutralStroke1Pressed)",
    colorNeutralStroke1Selected: "var(--colorNeutralStroke1Selected)",
    colorNeutralStroke2: "var(--colorNeutralStroke2)",
    colorNeutralStroke3: "var(--colorNeutralStroke3)",
    colorNeutralStrokeSubtle: "var(--colorNeutralStrokeSubtle)",
    colorNeutralStrokeOnBrand: "var(--colorNeutralStrokeOnBrand)",
    colorNeutralStrokeOnBrand2: "var(--colorNeutralStrokeOnBrand2)",
    colorNeutralStrokeOnBrand2Hover: "var(--colorNeutralStrokeOnBrand2Hover)",
    colorNeutralStrokeOnBrand2Pressed: "var(--colorNeutralStrokeOnBrand2Pressed)",
    colorNeutralStrokeOnBrand2Selected: "var(--colorNeutralStrokeOnBrand2Selected)",
    colorBrandStroke1: "var(--colorBrandStroke1)",
    colorBrandStroke2: "var(--colorBrandStroke2)",
    colorBrandStroke2Hover: "var(--colorBrandStroke2Hover)",
    colorBrandStroke2Pressed: "var(--colorBrandStroke2Pressed)",
    colorBrandStroke2Contrast: "var(--colorBrandStroke2Contrast)",
    colorCompoundBrandStroke: "var(--colorCompoundBrandStroke)",
    colorCompoundBrandStrokeHover: "var(--colorCompoundBrandStrokeHover)",
    colorCompoundBrandStrokePressed: "var(--colorCompoundBrandStrokePressed)",
    colorNeutralStrokeDisabled: "var(--colorNeutralStrokeDisabled)",
    colorNeutralStrokeInvertedDisabled: "var(--colorNeutralStrokeInvertedDisabled)",
    colorTransparentStroke: "var(--colorTransparentStroke)",
    colorTransparentStrokeInteractive: "var(--colorTransparentStrokeInteractive)",
    colorTransparentStrokeDisabled: "var(--colorTransparentStrokeDisabled)",
    colorNeutralStrokeAlpha: "var(--colorNeutralStrokeAlpha)",
    colorNeutralStrokeAlpha2: "var(--colorNeutralStrokeAlpha2)",
    colorStrokeFocus1: "var(--colorStrokeFocus1)",
    colorStrokeFocus2: "var(--colorStrokeFocus2)",
    colorNeutralShadowAmbient: "var(--colorNeutralShadowAmbient)",
    colorNeutralShadowKey: "var(--colorNeutralShadowKey)",
    colorNeutralShadowAmbientLighter: "var(--colorNeutralShadowAmbientLighter)",
    colorNeutralShadowKeyLighter: "var(--colorNeutralShadowKeyLighter)",
    colorNeutralShadowAmbientDarker: "var(--colorNeutralShadowAmbientDarker)",
    colorNeutralShadowKeyDarker: "var(--colorNeutralShadowKeyDarker)",
    colorBrandShadowAmbient: "var(--colorBrandShadowAmbient)",
    colorBrandShadowKey: "var(--colorBrandShadowKey)",
    colorPaletteRedBackground1: "var(--colorPaletteRedBackground1)",
    colorPaletteRedBackground2: "var(--colorPaletteRedBackground2)",
    colorPaletteRedBackground3: "var(--colorPaletteRedBackground3)",
    colorPaletteRedBorderActive: "var(--colorPaletteRedBorderActive)",
    colorPaletteRedBorder1: "var(--colorPaletteRedBorder1)",
    colorPaletteRedBorder2: "var(--colorPaletteRedBorder2)",
    colorPaletteRedForeground1: "var(--colorPaletteRedForeground1)",
    colorPaletteRedForeground2: "var(--colorPaletteRedForeground2)",
    colorPaletteRedForeground3: "var(--colorPaletteRedForeground3)",
    colorPaletteRedForegroundInverted: "var(--colorPaletteRedForegroundInverted)",
    colorPaletteGreenBackground1: "var(--colorPaletteGreenBackground1)",
    colorPaletteGreenBackground2: "var(--colorPaletteGreenBackground2)",
    colorPaletteGreenBackground3: "var(--colorPaletteGreenBackground3)",
    colorPaletteGreenBorderActive: "var(--colorPaletteGreenBorderActive)",
    colorPaletteGreenBorder1: "var(--colorPaletteGreenBorder1)",
    colorPaletteGreenBorder2: "var(--colorPaletteGreenBorder2)",
    colorPaletteGreenForeground1: "var(--colorPaletteGreenForeground1)",
    colorPaletteGreenForeground2: "var(--colorPaletteGreenForeground2)",
    colorPaletteGreenForeground3: "var(--colorPaletteGreenForeground3)",
    colorPaletteGreenForegroundInverted: "var(--colorPaletteGreenForegroundInverted)",
    colorPaletteDarkOrangeBackground1: "var(--colorPaletteDarkOrangeBackground1)",
    colorPaletteDarkOrangeBackground2: "var(--colorPaletteDarkOrangeBackground2)",
    colorPaletteDarkOrangeBackground3: "var(--colorPaletteDarkOrangeBackground3)",
    colorPaletteDarkOrangeBorderActive: "var(--colorPaletteDarkOrangeBorderActive)",
    colorPaletteDarkOrangeBorder1: "var(--colorPaletteDarkOrangeBorder1)",
    colorPaletteDarkOrangeBorder2: "var(--colorPaletteDarkOrangeBorder2)",
    colorPaletteDarkOrangeForeground1: "var(--colorPaletteDarkOrangeForeground1)",
    colorPaletteDarkOrangeForeground2: "var(--colorPaletteDarkOrangeForeground2)",
    colorPaletteDarkOrangeForeground3: "var(--colorPaletteDarkOrangeForeground3)",
    colorPaletteYellowBackground1: "var(--colorPaletteYellowBackground1)",
    colorPaletteYellowBackground2: "var(--colorPaletteYellowBackground2)",
    colorPaletteYellowBackground3: "var(--colorPaletteYellowBackground3)",
    colorPaletteYellowBorderActive: "var(--colorPaletteYellowBorderActive)",
    colorPaletteYellowBorder1: "var(--colorPaletteYellowBorder1)",
    colorPaletteYellowBorder2: "var(--colorPaletteYellowBorder2)",
    colorPaletteYellowForeground1: "var(--colorPaletteYellowForeground1)",
    colorPaletteYellowForeground2: "var(--colorPaletteYellowForeground2)",
    colorPaletteYellowForeground3: "var(--colorPaletteYellowForeground3)",
    colorPaletteYellowForegroundInverted: "var(--colorPaletteYellowForegroundInverted)",
    colorPaletteBerryBackground1: "var(--colorPaletteBerryBackground1)",
    colorPaletteBerryBackground2: "var(--colorPaletteBerryBackground2)",
    colorPaletteBerryBackground3: "var(--colorPaletteBerryBackground3)",
    colorPaletteBerryBorderActive: "var(--colorPaletteBerryBorderActive)",
    colorPaletteBerryBorder1: "var(--colorPaletteBerryBorder1)",
    colorPaletteBerryBorder2: "var(--colorPaletteBerryBorder2)",
    colorPaletteBerryForeground1: "var(--colorPaletteBerryForeground1)",
    colorPaletteBerryForeground2: "var(--colorPaletteBerryForeground2)",
    colorPaletteBerryForeground3: "var(--colorPaletteBerryForeground3)",
    colorPaletteMarigoldBackground1: "var(--colorPaletteMarigoldBackground1)",
    colorPaletteMarigoldBackground2: "var(--colorPaletteMarigoldBackground2)",
    colorPaletteMarigoldBackground3: "var(--colorPaletteMarigoldBackground3)",
    colorPaletteMarigoldBorderActive: "var(--colorPaletteMarigoldBorderActive)",
    colorPaletteMarigoldBorder1: "var(--colorPaletteMarigoldBorder1)",
    colorPaletteMarigoldBorder2: "var(--colorPaletteMarigoldBorder2)",
    colorPaletteMarigoldForeground1: "var(--colorPaletteMarigoldForeground1)",
    colorPaletteMarigoldForeground2: "var(--colorPaletteMarigoldForeground2)",
    colorPaletteMarigoldForeground3: "var(--colorPaletteMarigoldForeground3)",
    colorPaletteLightGreenBackground1: "var(--colorPaletteLightGreenBackground1)",
    colorPaletteLightGreenBackground2: "var(--colorPaletteLightGreenBackground2)",
    colorPaletteLightGreenBackground3: "var(--colorPaletteLightGreenBackground3)",
    colorPaletteLightGreenBorderActive: "var(--colorPaletteLightGreenBorderActive)",
    colorPaletteLightGreenBorder1: "var(--colorPaletteLightGreenBorder1)",
    colorPaletteLightGreenBorder2: "var(--colorPaletteLightGreenBorder2)",
    colorPaletteLightGreenForeground1: "var(--colorPaletteLightGreenForeground1)",
    colorPaletteLightGreenForeground2: "var(--colorPaletteLightGreenForeground2)",
    colorPaletteLightGreenForeground3: "var(--colorPaletteLightGreenForeground3)",
    colorPaletteAnchorBackground2: "var(--colorPaletteAnchorBackground2)",
    colorPaletteAnchorBorderActive: "var(--colorPaletteAnchorBorderActive)",
    colorPaletteAnchorForeground2: "var(--colorPaletteAnchorForeground2)",
    colorPaletteBeigeBackground2: "var(--colorPaletteBeigeBackground2)",
    colorPaletteBeigeBorderActive: "var(--colorPaletteBeigeBorderActive)",
    colorPaletteBeigeForeground2: "var(--colorPaletteBeigeForeground2)",
    colorPaletteBlueBackground2: "var(--colorPaletteBlueBackground2)",
    colorPaletteBlueBorderActive: "var(--colorPaletteBlueBorderActive)",
    colorPaletteBlueForeground2: "var(--colorPaletteBlueForeground2)",
    colorPaletteBrassBackground2: "var(--colorPaletteBrassBackground2)",
    colorPaletteBrassBorderActive: "var(--colorPaletteBrassBorderActive)",
    colorPaletteBrassForeground2: "var(--colorPaletteBrassForeground2)",
    colorPaletteBrownBackground2: "var(--colorPaletteBrownBackground2)",
    colorPaletteBrownBorderActive: "var(--colorPaletteBrownBorderActive)",
    colorPaletteBrownForeground2: "var(--colorPaletteBrownForeground2)",
    colorPaletteCornflowerBackground2: "var(--colorPaletteCornflowerBackground2)",
    colorPaletteCornflowerBorderActive: "var(--colorPaletteCornflowerBorderActive)",
    colorPaletteCornflowerForeground2: "var(--colorPaletteCornflowerForeground2)",
    colorPaletteCranberryBackground2: "var(--colorPaletteCranberryBackground2)",
    colorPaletteCranberryBorderActive: "var(--colorPaletteCranberryBorderActive)",
    colorPaletteCranberryForeground2: "var(--colorPaletteCranberryForeground2)",
    colorPaletteDarkGreenBackground2: "var(--colorPaletteDarkGreenBackground2)",
    colorPaletteDarkGreenBorderActive: "var(--colorPaletteDarkGreenBorderActive)",
    colorPaletteDarkGreenForeground2: "var(--colorPaletteDarkGreenForeground2)",
    colorPaletteDarkRedBackground2: "var(--colorPaletteDarkRedBackground2)",
    colorPaletteDarkRedBorderActive: "var(--colorPaletteDarkRedBorderActive)",
    colorPaletteDarkRedForeground2: "var(--colorPaletteDarkRedForeground2)",
    colorPaletteForestBackground2: "var(--colorPaletteForestBackground2)",
    colorPaletteForestBorderActive: "var(--colorPaletteForestBorderActive)",
    colorPaletteForestForeground2: "var(--colorPaletteForestForeground2)",
    colorPaletteGoldBackground2: "var(--colorPaletteGoldBackground2)",
    colorPaletteGoldBorderActive: "var(--colorPaletteGoldBorderActive)",
    colorPaletteGoldForeground2: "var(--colorPaletteGoldForeground2)",
    colorPaletteGrapeBackground2: "var(--colorPaletteGrapeBackground2)",
    colorPaletteGrapeBorderActive: "var(--colorPaletteGrapeBorderActive)",
    colorPaletteGrapeForeground2: "var(--colorPaletteGrapeForeground2)",
    colorPaletteLavenderBackground2: "var(--colorPaletteLavenderBackground2)",
    colorPaletteLavenderBorderActive: "var(--colorPaletteLavenderBorderActive)",
    colorPaletteLavenderForeground2: "var(--colorPaletteLavenderForeground2)",
    colorPaletteLightTealBackground2: "var(--colorPaletteLightTealBackground2)",
    colorPaletteLightTealBorderActive: "var(--colorPaletteLightTealBorderActive)",
    colorPaletteLightTealForeground2: "var(--colorPaletteLightTealForeground2)",
    colorPaletteLilacBackground2: "var(--colorPaletteLilacBackground2)",
    colorPaletteLilacBorderActive: "var(--colorPaletteLilacBorderActive)",
    colorPaletteLilacForeground2: "var(--colorPaletteLilacForeground2)",
    colorPaletteMagentaBackground2: "var(--colorPaletteMagentaBackground2)",
    colorPaletteMagentaBorderActive: "var(--colorPaletteMagentaBorderActive)",
    colorPaletteMagentaForeground2: "var(--colorPaletteMagentaForeground2)",
    colorPaletteMinkBackground2: "var(--colorPaletteMinkBackground2)",
    colorPaletteMinkBorderActive: "var(--colorPaletteMinkBorderActive)",
    colorPaletteMinkForeground2: "var(--colorPaletteMinkForeground2)",
    colorPaletteNavyBackground2: "var(--colorPaletteNavyBackground2)",
    colorPaletteNavyBorderActive: "var(--colorPaletteNavyBorderActive)",
    colorPaletteNavyForeground2: "var(--colorPaletteNavyForeground2)",
    colorPalettePeachBackground2: "var(--colorPalettePeachBackground2)",
    colorPalettePeachBorderActive: "var(--colorPalettePeachBorderActive)",
    colorPalettePeachForeground2: "var(--colorPalettePeachForeground2)",
    colorPalettePinkBackground2: "var(--colorPalettePinkBackground2)",
    colorPalettePinkBorderActive: "var(--colorPalettePinkBorderActive)",
    colorPalettePinkForeground2: "var(--colorPalettePinkForeground2)",
    colorPalettePlatinumBackground2: "var(--colorPalettePlatinumBackground2)",
    colorPalettePlatinumBorderActive: "var(--colorPalettePlatinumBorderActive)",
    colorPalettePlatinumForeground2: "var(--colorPalettePlatinumForeground2)",
    colorPalettePlumBackground2: "var(--colorPalettePlumBackground2)",
    colorPalettePlumBorderActive: "var(--colorPalettePlumBorderActive)",
    colorPalettePlumForeground2: "var(--colorPalettePlumForeground2)",
    colorPalettePumpkinBackground2: "var(--colorPalettePumpkinBackground2)",
    colorPalettePumpkinBorderActive: "var(--colorPalettePumpkinBorderActive)",
    colorPalettePumpkinForeground2: "var(--colorPalettePumpkinForeground2)",
    colorPalettePurpleBackground2: "var(--colorPalettePurpleBackground2)",
    colorPalettePurpleBorderActive: "var(--colorPalettePurpleBorderActive)",
    colorPalettePurpleForeground2: "var(--colorPalettePurpleForeground2)",
    colorPaletteRoyalBlueBackground2: "var(--colorPaletteRoyalBlueBackground2)",
    colorPaletteRoyalBlueBorderActive: "var(--colorPaletteRoyalBlueBorderActive)",
    colorPaletteRoyalBlueForeground2: "var(--colorPaletteRoyalBlueForeground2)",
    colorPaletteSeafoamBackground2: "var(--colorPaletteSeafoamBackground2)",
    colorPaletteSeafoamBorderActive: "var(--colorPaletteSeafoamBorderActive)",
    colorPaletteSeafoamForeground2: "var(--colorPaletteSeafoamForeground2)",
    colorPaletteSteelBackground2: "var(--colorPaletteSteelBackground2)",
    colorPaletteSteelBorderActive: "var(--colorPaletteSteelBorderActive)",
    colorPaletteSteelForeground2: "var(--colorPaletteSteelForeground2)",
    colorPaletteTealBackground2: "var(--colorPaletteTealBackground2)",
    colorPaletteTealBorderActive: "var(--colorPaletteTealBorderActive)",
    colorPaletteTealForeground2: "var(--colorPaletteTealForeground2)",
    colorStatusSuccessBackground1: "var(--colorStatusSuccessBackground1)",
    colorStatusSuccessBackground2: "var(--colorStatusSuccessBackground2)",
    colorStatusSuccessBackground3: "var(--colorStatusSuccessBackground3)",
    colorStatusSuccessForeground1: "var(--colorStatusSuccessForeground1)",
    colorStatusSuccessForeground2: "var(--colorStatusSuccessForeground2)",
    colorStatusSuccessForeground3: "var(--colorStatusSuccessForeground3)",
    colorStatusSuccessForegroundInverted: "var(--colorStatusSuccessForegroundInverted)",
    colorStatusSuccessBorderActive: "var(--colorStatusSuccessBorderActive)",
    colorStatusSuccessBorder1: "var(--colorStatusSuccessBorder1)",
    colorStatusSuccessBorder2: "var(--colorStatusSuccessBorder2)",
    colorStatusWarningBackground1: "var(--colorStatusWarningBackground1)",
    colorStatusWarningBackground2: "var(--colorStatusWarningBackground2)",
    colorStatusWarningBackground3: "var(--colorStatusWarningBackground3)",
    colorStatusWarningForeground1: "var(--colorStatusWarningForeground1)",
    colorStatusWarningForeground2: "var(--colorStatusWarningForeground2)",
    colorStatusWarningForeground3: "var(--colorStatusWarningForeground3)",
    colorStatusWarningForegroundInverted: "var(--colorStatusWarningForegroundInverted)",
    colorStatusWarningBorderActive: "var(--colorStatusWarningBorderActive)",
    colorStatusWarningBorder1: "var(--colorStatusWarningBorder1)",
    colorStatusWarningBorder2: "var(--colorStatusWarningBorder2)",
    colorStatusDangerBackground1: "var(--colorStatusDangerBackground1)",
    colorStatusDangerBackground2: "var(--colorStatusDangerBackground2)",
    colorStatusDangerBackground3: "var(--colorStatusDangerBackground3)",
    colorStatusDangerForeground1: "var(--colorStatusDangerForeground1)",
    colorStatusDangerForeground2: "var(--colorStatusDangerForeground2)",
    colorStatusDangerForeground3: "var(--colorStatusDangerForeground3)",
    colorStatusDangerForegroundInverted: "var(--colorStatusDangerForegroundInverted)",
    colorStatusDangerBorderActive: "var(--colorStatusDangerBorderActive)",
    colorStatusDangerBorder1: "var(--colorStatusDangerBorder1)",
    colorStatusDangerBorder2: "var(--colorStatusDangerBorder2)",
    borderRadiusNone: "var(--borderRadiusNone)",
    borderRadiusSmall: "var(--borderRadiusSmall)",
    borderRadiusMedium: "var(--borderRadiusMedium)",
    borderRadiusLarge: "var(--borderRadiusLarge)",
    borderRadiusXLarge: "var(--borderRadiusXLarge)",
    borderRadiusCircular: "var(--borderRadiusCircular)",
    fontFamilyBase: "var(--fontFamilyBase)",
    fontFamilyMonospace: "var(--fontFamilyMonospace)",
    fontFamilyNumeric: "var(--fontFamilyNumeric)",
    fontSizeBase100: "var(--fontSizeBase100)",
    fontSizeBase200: "var(--fontSizeBase200)",
    fontSizeBase300: "var(--fontSizeBase300)",
    fontSizeBase400: "var(--fontSizeBase400)",
    fontSizeBase500: "var(--fontSizeBase500)",
    fontSizeBase600: "var(--fontSizeBase600)",
    fontSizeHero700: "var(--fontSizeHero700)",
    fontSizeHero800: "var(--fontSizeHero800)",
    fontSizeHero900: "var(--fontSizeHero900)",
    fontSizeHero1000: "var(--fontSizeHero1000)",
    fontWeightRegular: "var(--fontWeightRegular)",
    fontWeightMedium: "var(--fontWeightMedium)",
    fontWeightSemibold: "var(--fontWeightSemibold)",
    fontWeightBold: "var(--fontWeightBold)",
    lineHeightBase100: "var(--lineHeightBase100)",
    lineHeightBase200: "var(--lineHeightBase200)",
    lineHeightBase300: "var(--lineHeightBase300)",
    lineHeightBase400: "var(--lineHeightBase400)",
    lineHeightBase500: "var(--lineHeightBase500)",
    lineHeightBase600: "var(--lineHeightBase600)",
    lineHeightHero700: "var(--lineHeightHero700)",
    lineHeightHero800: "var(--lineHeightHero800)",
    lineHeightHero900: "var(--lineHeightHero900)",
    lineHeightHero1000: "var(--lineHeightHero1000)",
    shadow2: "var(--shadow2)",
    shadow4: "var(--shadow4)",
    shadow8: "var(--shadow8)",
    shadow16: "var(--shadow16)",
    shadow28: "var(--shadow28)",
    shadow64: "var(--shadow64)",
    shadow2Brand: "var(--shadow2Brand)",
    shadow4Brand: "var(--shadow4Brand)",
    shadow8Brand: "var(--shadow8Brand)",
    shadow16Brand: "var(--shadow16Brand)",
    shadow28Brand: "var(--shadow28Brand)",
    shadow64Brand: "var(--shadow64Brand)",
    strokeWidthThin: "var(--strokeWidthThin)",
    strokeWidthThick: "var(--strokeWidthThick)",
    strokeWidthThicker: "var(--strokeWidthThicker)",
    strokeWidthThickest: "var(--strokeWidthThickest)",
    spacingHorizontalNone: "var(--spacingHorizontalNone)",
    spacingHorizontalXXS: "var(--spacingHorizontalXXS)",
    spacingHorizontalXS: "var(--spacingHorizontalXS)",
    spacingHorizontalSNudge: "var(--spacingHorizontalSNudge)",
    spacingHorizontalS: "var(--spacingHorizontalS)",
    spacingHorizontalMNudge: "var(--spacingHorizontalMNudge)",
    spacingHorizontalM: "var(--spacingHorizontalM)",
    spacingHorizontalL: "var(--spacingHorizontalL)",
    spacingHorizontalXL: "var(--spacingHorizontalXL)",
    spacingHorizontalXXL: "var(--spacingHorizontalXXL)",
    spacingHorizontalXXXL: "var(--spacingHorizontalXXXL)",
    spacingVerticalNone: "var(--spacingVerticalNone)",
    spacingVerticalXXS: "var(--spacingVerticalXXS)",
    spacingVerticalXS: "var(--spacingVerticalXS)",
    spacingVerticalSNudge: "var(--spacingVerticalSNudge)",
    spacingVerticalS: "var(--spacingVerticalS)",
    spacingVerticalMNudge: "var(--spacingVerticalMNudge)",
    spacingVerticalM: "var(--spacingVerticalM)",
    spacingVerticalL: "var(--spacingVerticalL)",
    spacingVerticalXL: "var(--spacingVerticalXL)",
    spacingVerticalXXL: "var(--spacingVerticalXXL)",
    spacingVerticalXXXL: "var(--spacingVerticalXXXL)",
    durationUltraFast: "var(--durationUltraFast)",
    durationFaster: "var(--durationFaster)",
    durationFast: "var(--durationFast)",
    durationNormal: "var(--durationNormal)",
    durationGentle: "var(--durationGentle)",
    durationSlow: "var(--durationSlow)",
    durationSlower: "var(--durationSlower)",
    durationUltraSlow: "var(--durationUltraSlow)",
    curveAccelerateMax: "var(--curveAccelerateMax)",
    curveAccelerateMid: "var(--curveAccelerateMid)",
    curveAccelerateMin: "var(--curveAccelerateMin)",
    curveDecelerateMax: "var(--curveDecelerateMax)",
    curveDecelerateMid: "var(--curveDecelerateMid)",
    curveDecelerateMin: "var(--curveDecelerateMin)",
    curveEasyEaseMax: "var(--curveEasyEaseMax)",
    curveEasyEase: "var(--curveEasyEase)",
    curveLinear: "var(--curveLinear)"
};
function Op(e, t, r="") {
    return {
        [`shadow2${r}`]: `0 0 2px ${e}, 0 1px 2px ${t}`,
        [`shadow4${r}`]: `0 0 2px ${e}, 0 2px 4px ${t}`,
        [`shadow8${r}`]: `0 0 2px ${e}, 0 4px 8px ${t}`,
        [`shadow16${r}`]: `0 0 2px ${e}, 0 8px 16px ${t}`,
        [`shadow28${r}`]: `0 0 8px ${e}, 0 14px 28px ${t}`,
        [`shadow64${r}`]: `0 0 8px ${e}, 0 32px 64px ${t}`
    }
}
const O_ = e=>{
    const t = P_(e);
    return {
        ...C_,
        ...z_,
        ...F_,
        ...D_,
        ...R_,
        ...A_,
        ...j_,
        ...I_,
        ...N_,
        ...T_,
        ...t,
        ...E_,
        ...Ls,
        ...Op(t.colorNeutralShadowAmbient, t.colorNeutralShadowKey),
        ...Op(t.colorBrandShadowAmbient, t.colorBrandShadowKey, "Brand")
    }
}
  , L_ = {
    10: "#061724",
    20: "#082338",
    30: "#0a2e4a",
    40: "#0c3b5e",
    50: "#0e4775",
    60: "#0f548c",
    70: "#115ea3",
    80: "#0f6cbd",
    90: "#2886de",
    100: "#479ef5",
    110: "#62abf5",
    120: "#77b7f7",
    130: "#96c6fa",
    140: "#b4d6fa",
    150: "#cfe4fa",
    160: "#ebf3fc"
}
  , M_ = O_(L_)
  , f0 = {
    root: "fui-FluentProvider"
}
  , q_ = pm({
    root: {
        sj55zd: "f19n0e5",
        De3pzq: "fxugw4r",
        fsow6f: ["f1o700av", "fes3tcz"],
        Bahqtrf: "fk6fouc",
        Be2twd7: "fkhj508",
        Bhrd7zp: "figsok6",
        Bg96gwp: "f1i3iumi"
    }
}, {
    d: [".f19n0e5{color:var(--colorNeutralForeground1);}", ".fxugw4r{background-color:var(--colorNeutralBackground1);}", ".f1o700av{text-align:left;}", ".fes3tcz{text-align:right;}", ".fk6fouc{font-family:var(--fontFamilyBase);}", ".fkhj508{font-size:var(--fontSizeBase300);}", ".figsok6{font-weight:var(--fontWeightRegular);}", ".f1i3iumi{line-height:var(--lineHeightBase300);}"]
})
  , H_ = e=>{
    const t = fn()
      , r = q_({
        dir: e.dir,
        renderer: t
    });
    return e.root.className = W(f0.root, e.themeClassName, r.root, e.root.className),
    e
}
  , W_ = b.useInsertionEffect ? b.useInsertionEffect : Rt
  , $_ = (e,t)=>{
    if (!e)
        return;
    const r = e.createElement("style");
    return Object.keys(t).forEach(o=>{
        r.setAttribute(o, t[o])
    }
    ),
    e.head.appendChild(r),
    r
}
  , U_ = (e,t)=>{
    const r = e.sheet;
    r && (r.cssRules.length > 0 && r.deleteRule(0),
    r.insertRule(t, 0))
}
  , V_ = e=>{
    const {targetDocument: t, theme: r, rendererAttributes: o} = e
      , n = b.useRef()
      , i = pn(f0.root)
      , a = o
      , s = b.useMemo(()=>px(`.${i}`, r), [r, i]);
    return G_(t, i),
    W_(()=>{
        const l = t == null ? void 0 : t.getElementById(i);
        return l ? n.current = l : (n.current = $_(t, {
            ...a,
            id: i
        }),
        n.current && U_(n.current, s)),
        ()=>{
            var u;
            (u = n.current) === null || u === void 0 || u.remove()
        }
    }
    , [i, t, s, a]),
    {
        styleTagId: i,
        rule: s
    }
}
;
function G_(e, t) {
    b.useState(()=>{
        if (!e)
            return;
        const r = e.getElementById(t);
        r && e.head.append(r)
    }
    )
}
const K_ = {}
  , X_ = (e,t)=>{
    const r = It()
      , o = Q_()
      , n = Cm()
      , i = b.useContext(bd) || K_
      , {applyStylesToPortals: a=!0, customStyleHooks_unstable: s, dir: l=r.dir, targetDocument: u=r.targetDocument, theme: d, overrides_unstable: c={}} = e
      , f = Al(o, d)
      , h = Al(n, c)
      , p = Al(i, s)
      , m = fn();
    var w;
    const {styleTagId: v, rule: g} = V_({
        theme: f,
        targetDocument: u,
        rendererAttributes: (w = m.styleElementAttributes) !== null && w !== void 0 ? w : {}
    });
    return {
        applyStylesToPortals: a,
        customStyleHooks_unstable: p,
        dir: l,
        targetDocument: u,
        theme: f,
        overrides_unstable: h,
        themeClassName: v,
        components: {
            root: "div"
        },
        root: pe(Oe("div", {
            ...e,
            dir: l,
            ref: Ar(t, l0({
                targetDocument: u
            }))
        }), {
            elementType: "div"
        }),
        serverStyleProps: {
            cssRule: g,
            attributes: {
                ...m.styleElementAttributes,
                id: v
            }
        }
    }
}
;
function Al(e, t) {
    return e && t ? {
        ...e,
        ...t
    } : e || t
}
function Q_() {
    return b.useContext(Sm)
}
function J_(e) {
    const {applyStylesToPortals: t, customStyleHooks_unstable: r, dir: o, root: n, targetDocument: i, theme: a, themeClassName: s, overrides_unstable: l} = e
      , u = b.useMemo(()=>({
        dir: o,
        targetDocument: i
    }), [o, i])
      , [d] = b.useState(()=>({}))
      , c = b.useMemo(()=>({
        textDirection: o
    }), [o]);
    return {
        customStyleHooks_unstable: r,
        overrides_unstable: l,
        provider: u,
        textDirection: o,
        iconDirection: c,
        tooltip: d,
        theme: a,
        themeClassName: t ? n.className : s
    }
}
const p0 = b.forwardRef((e,t)=>{
    const r = X_(e, t);
    H_(r);
    const o = J_(r);
    return N2(r, o)
}
);
p0.displayName = "FluentProvider";
var h0 = {
    exports: {}
}
  , g0 = {};
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    var t, r, o, n;
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function() {
            return i.now()
        }
    } else {
        var a = Date
          , s = a.now();
        e.unstable_now = function() {
            return a.now() - s
        }
    }
    if (typeof window > "u" || typeof MessageChannel != "function") {
        var l = null
          , u = null
          , d = function() {
            if (l !== null)
                try {
                    var C = e.unstable_now();
                    l(!0, C),
                    l = null
                } catch (j) {
                    throw setTimeout(d, 0),
                    j
                }
        };
        t = function(C) {
            l !== null ? setTimeout(t, 0, C) : (l = C,
            setTimeout(d, 0))
        }
        ,
        r = function(C, j) {
            u = setTimeout(C, j)
        }
        ,
        o = function() {
            clearTimeout(u)
        }
        ,
        e.unstable_shouldYield = function() {
            return !1
        }
        ,
        n = e.unstable_forceFrameRate = function() {}
    } else {
        var c = window.setTimeout
          , f = window.clearTimeout;
        if (typeof console < "u") {
            var h = window.cancelAnimationFrame;
            typeof window.requestAnimationFrame != "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),
            typeof h != "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")
        }
        var p = !1
          , m = null
          , w = -1
          , v = 5
          , g = 0;
        e.unstable_shouldYield = function() {
            return e.unstable_now() >= g
        }
        ,
        n = function() {}
        ,
        e.unstable_forceFrameRate = function(C) {
            0 > C || 125 < C ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : v = 0 < C ? Math.floor(1e3 / C) : 5
        }
        ;
        var y = new MessageChannel
          , x = y.port2;
        y.port1.onmessage = function() {
            if (m !== null) {
                var C = e.unstable_now();
                g = C + v;
                try {
                    m(!0, C) ? x.postMessage(null) : (p = !1,
                    m = null)
                } catch (j) {
                    throw x.postMessage(null),
                    j
                }
            } else
                p = !1
        }
        ,
        t = function(C) {
            m = C,
            p || (p = !0,
            x.postMessage(null))
        }
        ,
        r = function(C, j) {
            w = c(function() {
                C(e.unstable_now())
            }, j)
        }
        ,
        o = function() {
            f(w),
            w = -1
        }
    }
    function S(C, j) {
        var H = C.length;
        C.push(j);
        e: for (; ; ) {
            var Q = H - 1 >>> 1
              , ae = C[Q];
            if (ae !== void 0 && 0 < E(ae, j))
                C[Q] = j,
                C[H] = ae,
                H = Q;
            else
                break e
        }
    }
    function _(C) {
        return C = C[0],
        C === void 0 ? null : C
    }
    function k(C) {
        var j = C[0];
        if (j !== void 0) {
            var H = C.pop();
            if (H !== j) {
                C[0] = H;
                e: for (var Q = 0, ae = C.length; Q < ae; ) {
                    var Se = 2 * (Q + 1) - 1
                      , Le = C[Se]
                      , _t = Se + 1
                      , xo = C[_t];
                    if (Le !== void 0 && 0 > E(Le, H))
                        xo !== void 0 && 0 > E(xo, Le) ? (C[Q] = xo,
                        C[_t] = H,
                        Q = _t) : (C[Q] = Le,
                        C[Se] = H,
                        Q = Se);
                    else if (xo !== void 0 && 0 > E(xo, H))
                        C[Q] = xo,
                        C[_t] = H,
                        Q = _t;
                    else
                        break e
                }
            }
            return j
        }
        return null
    }
    function E(C, j) {
        var H = C.sortIndex - j.sortIndex;
        return H !== 0 ? H : C.id - j.id
    }
    var I = []
      , F = []
      , Y = 1
      , R = null
      , O = 3
      , V = !1
      , Z = !1
      , $ = !1;
    function te(C) {
        for (var j = _(F); j !== null; ) {
            if (j.callback === null)
                k(F);
            else if (j.startTime <= C)
                k(F),
                j.sortIndex = j.expirationTime,
                S(I, j);
            else
                break;
            j = _(F)
        }
    }
    function z(C) {
        if ($ = !1,
        te(C),
        !Z)
            if (_(I) !== null)
                Z = !0,
                t(D);
            else {
                var j = _(F);
                j !== null && r(z, j.startTime - C)
            }
    }
    function D(C, j) {
        Z = !1,
        $ && ($ = !1,
        o()),
        V = !0;
        var H = O;
        try {
            for (te(j),
            R = _(I); R !== null && (!(R.expirationTime > j) || C && !e.unstable_shouldYield()); ) {
                var Q = R.callback;
                if (typeof Q == "function") {
                    R.callback = null,
                    O = R.priorityLevel;
                    var ae = Q(R.expirationTime <= j);
                    j = e.unstable_now(),
                    typeof ae == "function" ? R.callback = ae : R === _(I) && k(I),
                    te(j)
                } else
                    k(I);
                R = _(I)
            }
            if (R !== null)
                var Se = !0;
            else {
                var Le = _(F);
                Le !== null && r(z, Le.startTime - j),
                Se = !1
            }
            return Se
        } finally {
            R = null,
            O = H,
            V = !1
        }
    }
    var M = n;
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(C) {
        C.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        Z || V || (Z = !0,
        t(D))
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return O
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return _(I)
    }
    ,
    e.unstable_next = function(C) {
        switch (O) {
        case 1:
        case 2:
        case 3:
            var j = 3;
            break;
        default:
            j = O
        }
        var H = O;
        O = j;
        try {
            return C()
        } finally {
            O = H
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = M,
    e.unstable_runWithPriority = function(C, j) {
        switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            C = 3
        }
        var H = O;
        O = C;
        try {
            return j()
        } finally {
            O = H
        }
    }
    ,
    e.unstable_scheduleCallback = function(C, j, H) {
        var Q = e.unstable_now();
        switch (typeof H == "object" && H !== null ? (H = H.delay,
        H = typeof H == "number" && 0 < H ? Q + H : Q) : H = Q,
        C) {
        case 1:
            var ae = -1;
            break;
        case 2:
            ae = 250;
            break;
        case 5:
            ae = 1073741823;
            break;
        case 4:
            ae = 1e4;
            break;
        default:
            ae = 5e3
        }
        return ae = H + ae,
        C = {
            id: Y++,
            callback: j,
            priorityLevel: C,
            startTime: H,
            expirationTime: ae,
            sortIndex: -1
        },
        H > Q ? (C.sortIndex = H,
        S(F, C),
        _(I) === null && C === _(F) && ($ ? o() : $ = !0,
        r(z, H - Q))) : (C.sortIndex = ae,
        S(I, C),
        Z || V || (Z = !0,
        t(D))),
        C
    }
    ,
    e.unstable_wrapCallback = function(C) {
        var j = O;
        return function() {
            var H = O;
            O = j;
            try {
                return C.apply(this, arguments)
            } finally {
                O = H
            }
        }
    }
}
)(g0);
h0.exports = g0;
var Lp = h0.exports;
const Y_ = e=>r=>{
    const o = b.useRef(r.value)
      , n = b.useRef(0)
      , i = b.useRef();
    return i.current || (i.current = {
        value: o,
        version: n,
        listeners: []
    }),
    Rt(()=>{
        o.current = r.value,
        n.current += 1,
        Lp.unstable_runWithPriority(Lp.unstable_NormalPriority, ()=>{
            i.current.listeners.forEach(a=>{
                a([n.current, r.value])
            }
            )
        }
        )
    }
    , [r.value]),
    b.createElement(e, {
        value: i.current
    }, r.children)
}
  , Z_ = e=>{
    const t = b.createContext({
        value: {
            current: e
        },
        version: {
            current: -1
        },
        listeners: []
    });
    return t.Provider = Y_(t.Provider),
    delete t.Consumer,
    t
}
  , e5 = (e,t)=>{
    const r = b.useContext(e)
      , {value: {current: o}, version: {current: n}, listeners: i} = r
      , a = t(o)
      , [s,l] = b.useReducer((u,d)=>{
        if (!d)
            return [o, a];
        if (d[0] <= n)
            return ta(u[1], a) ? u : [o, a];
        try {
            if (ta(u[0], d[1]))
                return u;
            const c = t(d[1]);
            return ta(u[1], c) ? u : [d[1], c]
        } catch {}
        return [u[0], u[1]]
    }
    , [o, a]);
    return ta(s[1], a) || l(void 0),
    Rt(()=>(i.push(l),
    ()=>{
        const u = i.indexOf(l);
        i.splice(u, 1)
    }
    ), [i]),
    s[1]
}
;
function t5(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
const ta = typeof Object.is == "function" ? Object.is : t5;
function r5(e) {
    const t = b.useContext(e);
    return t.version ? t.version.current !== -1 : !1
}
const xa = "Enter"
  , ra = " "
  , ET = "Tab"
  , PT = "ArrowDown"
  , CT = "ArrowLeft"
  , TT = "ArrowRight"
  , NT = "ArrowUp"
  , zT = "Delete"
  , v0 = "Escape";
function m0(e, t) {
    const {disabled: r, disabledFocusable: o=!1, ["aria-disabled"]: n, onClick: i, onKeyDown: a, onKeyUp: s, ...l} = t ?? {}
      , u = typeof n == "string" ? n === "true" : n
      , d = r || o || u
      , c = ot(p=>{
        d ? (p.preventDefault(),
        p.stopPropagation()) : i == null || i(p)
    }
    )
      , f = ot(p=>{
        if (a == null || a(p),
        p.isDefaultPrevented())
            return;
        const m = p.key;
        if (d && (m === xa || m === ra)) {
            p.preventDefault(),
            p.stopPropagation();
            return
        }
        if (m === ra) {
            p.preventDefault();
            return
        } else
            m === xa && (p.preventDefault(),
            p.currentTarget.click())
    }
    )
      , h = ot(p=>{
        if (s == null || s(p),
        p.isDefaultPrevented())
            return;
        const m = p.key;
        if (d && (m === xa || m === ra)) {
            p.preventDefault(),
            p.stopPropagation();
            return
        }
        m === ra && (p.preventDefault(),
        p.currentTarget.click())
    }
    );
    if (e === "button" || e === void 0)
        return {
            ...l,
            disabled: r && !o,
            "aria-disabled": o ? !0 : u,
            onClick: o ? void 0 : c,
            onKeyUp: o ? void 0 : s,
            onKeyDown: o ? void 0 : a
        };
    {
        const p = {
            role: "button",
            tabIndex: r && !o ? void 0 : 0,
            ...l,
            onClick: c,
            onKeyUp: h,
            onKeyDown: f,
            "aria-disabled": r || o || u
        };
        return e === "a" && d && (p.href = void 0),
        p
    }
}
const Mp = "data-popper-is-intersecting"
  , qp = "data-popper-escaped"
  , Hp = "data-popper-reference-hidden"
  , o5 = "data-popper-placement"
  , n5 = ["top", "right", "bottom", "left"]
  , mo = Math.min
  , gt = Math.max
  , rs = Math.round
  , Lr = e=>({
    x: e,
    y: e
})
  , i5 = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , a5 = {
    start: "end",
    end: "start"
};
function Zu(e, t, r) {
    return gt(e, mo(t, r))
}
function lr(e, t) {
    return typeof e == "function" ? e(t) : e
}
function ur(e) {
    return e.split("-")[0]
}
function hn(e) {
    return e.split("-")[1]
}
function Pd(e) {
    return e === "x" ? "y" : "x"
}
function Cd(e) {
    return e === "y" ? "height" : "width"
}
function gn(e) {
    return ["top", "bottom"].includes(ur(e)) ? "y" : "x"
}
function Td(e) {
    return Pd(gn(e))
}
function s5(e, t, r) {
    r === void 0 && (r = !1);
    const o = hn(e)
      , n = Td(e)
      , i = Cd(n);
    let a = n === "x" ? o === (r ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
    return t.reference[i] > t.floating[i] && (a = os(a)),
    [a, os(a)]
}
function l5(e) {
    const t = os(e);
    return [ec(e), t, ec(t)]
}
function ec(e) {
    return e.replace(/start|end/g, t=>a5[t])
}
function u5(e, t, r) {
    const o = ["left", "right"]
      , n = ["right", "left"]
      , i = ["top", "bottom"]
      , a = ["bottom", "top"];
    switch (e) {
    case "top":
    case "bottom":
        return r ? t ? n : o : t ? o : n;
    case "left":
    case "right":
        return t ? i : a;
    default:
        return []
    }
}
function c5(e, t, r, o) {
    const n = hn(e);
    let i = u5(ur(e), r === "start", o);
    return n && (i = i.map(a=>a + "-" + n),
    t && (i = i.concat(i.map(ec)))),
    i
}
function os(e) {
    return e.replace(/left|right|bottom|top/g, t=>i5[t])
}
function d5(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}
function y0(e) {
    return typeof e != "number" ? d5(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}
function ns(e) {
    return {
        ...e,
        top: e.y,
        left: e.x,
        right: e.x + e.width,
        bottom: e.y + e.height
    }
}
function Wp(e, t, r) {
    let {reference: o, floating: n} = e;
    const i = gn(t)
      , a = Td(t)
      , s = Cd(a)
      , l = ur(t)
      , u = i === "y"
      , d = o.x + o.width / 2 - n.width / 2
      , c = o.y + o.height / 2 - n.height / 2
      , f = o[s] / 2 - n[s] / 2;
    let h;
    switch (l) {
    case "top":
        h = {
            x: d,
            y: o.y - n.height
        };
        break;
    case "bottom":
        h = {
            x: d,
            y: o.y + o.height
        };
        break;
    case "right":
        h = {
            x: o.x + o.width,
            y: c
        };
        break;
    case "left":
        h = {
            x: o.x - n.width,
            y: c
        };
        break;
    default:
        h = {
            x: o.x,
            y: o.y
        }
    }
    switch (hn(t)) {
    case "start":
        h[a] -= f * (r && u ? -1 : 1);
        break;
    case "end":
        h[a] += f * (r && u ? -1 : 1);
        break
    }
    return h
}
const f5 = async(e,t,r)=>{
    const {placement: o="bottom", strategy: n="absolute", middleware: i=[], platform: a} = r
      , s = i.filter(Boolean)
      , l = await (a.isRTL == null ? void 0 : a.isRTL(t));
    let u = await a.getElementRects({
        reference: e,
        floating: t,
        strategy: n
    })
      , {x: d, y: c} = Wp(u, o, l)
      , f = o
      , h = {}
      , p = 0;
    for (let m = 0; m < s.length; m++) {
        const {name: w, fn: v} = s[m]
          , {x: g, y, data: x, reset: S} = await v({
            x: d,
            y: c,
            initialPlacement: o,
            placement: f,
            strategy: n,
            middlewareData: h,
            rects: u,
            platform: a,
            elements: {
                reference: e,
                floating: t
            }
        });
        if (d = g ?? d,
        c = y ?? c,
        h = {
            ...h,
            [w]: {
                ...h[w],
                ...x
            }
        },
        S && p <= 50) {
            p++,
            typeof S == "object" && (S.placement && (f = S.placement),
            S.rects && (u = S.rects === !0 ? await a.getElementRects({
                reference: e,
                floating: t,
                strategy: n
            }) : S.rects),
            {x: d, y: c} = Wp(u, f, l)),
            m = -1;
            continue
        }
    }
    return {
        x: d,
        y: c,
        placement: f,
        strategy: n,
        middlewareData: h
    }
}
;
async function nn(e, t) {
    var r;
    t === void 0 && (t = {});
    const {x: o, y: n, platform: i, rects: a, elements: s, strategy: l} = e
      , {boundary: u="clippingAncestors", rootBoundary: d="viewport", elementContext: c="floating", altBoundary: f=!1, padding: h=0} = lr(t, e)
      , p = y0(h)
      , w = s[f ? c === "floating" ? "reference" : "floating" : c]
      , v = ns(await i.getClippingRect({
        element: (r = await (i.isElement == null ? void 0 : i.isElement(w))) == null || r ? w : w.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
        boundary: u,
        rootBoundary: d,
        strategy: l
    }))
      , g = c === "floating" ? {
        ...a.floating,
        x: o,
        y: n
    } : a.reference
      , y = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(s.floating))
      , x = await (i.isElement == null ? void 0 : i.isElement(y)) ? await (i.getScale == null ? void 0 : i.getScale(y)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }
      , S = ns(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
        rect: g,
        offsetParent: y,
        strategy: l
    }) : g);
    return {
        top: (v.top - S.top + p.top) / x.y,
        bottom: (S.bottom - v.bottom + p.bottom) / x.y,
        left: (v.left - S.left + p.left) / x.x,
        right: (S.right - v.right + p.right) / x.x
    }
}
const p5 = e=>({
    name: "arrow",
    options: e,
    async fn(t) {
        const {x: r, y: o, placement: n, rects: i, platform: a, elements: s, middlewareData: l} = t
          , {element: u, padding: d=0} = lr(e, t) || {};
        if (u == null)
            return {};
        const c = y0(d)
          , f = {
            x: r,
            y: o
        }
          , h = Td(n)
          , p = Cd(h)
          , m = await a.getDimensions(u)
          , w = h === "y"
          , v = w ? "top" : "left"
          , g = w ? "bottom" : "right"
          , y = w ? "clientHeight" : "clientWidth"
          , x = i.reference[p] + i.reference[h] - f[h] - i.floating[p]
          , S = f[h] - i.reference[h]
          , _ = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u));
        let k = _ ? _[y] : 0;
        (!k || !await (a.isElement == null ? void 0 : a.isElement(_))) && (k = s.floating[y] || i.floating[p]);
        const E = x / 2 - S / 2
          , I = k / 2 - m[p] / 2 - 1
          , F = mo(c[v], I)
          , Y = mo(c[g], I)
          , R = F
          , O = k - m[p] - Y
          , V = k / 2 - m[p] / 2 + E
          , Z = Zu(R, V, O)
          , $ = !l.arrow && hn(n) != null && V != Z && i.reference[p] / 2 - (V < R ? F : Y) - m[p] / 2 < 0
          , te = $ ? V < R ? V - R : V - O : 0;
        return {
            [h]: f[h] + te,
            data: {
                [h]: Z,
                centerOffset: V - Z - te,
                ...$ && {
                    alignmentOffset: te
                }
            },
            reset: $
        }
    }
})
  , h5 = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "flip",
        options: e,
        async fn(t) {
            var r, o;
            const {placement: n, middlewareData: i, rects: a, initialPlacement: s, platform: l, elements: u} = t
              , {mainAxis: d=!0, crossAxis: c=!0, fallbackPlacements: f, fallbackStrategy: h="bestFit", fallbackAxisSideDirection: p="none", flipAlignment: m=!0, ...w} = lr(e, t);
            if ((r = i.arrow) != null && r.alignmentOffset)
                return {};
            const v = ur(n)
              , g = ur(s) === s
              , y = await (l.isRTL == null ? void 0 : l.isRTL(u.floating))
              , x = f || (g || !m ? [os(s)] : l5(s));
            !f && p !== "none" && x.push(...c5(s, m, p, y));
            const S = [s, ...x]
              , _ = await nn(t, w)
              , k = [];
            let E = ((o = i.flip) == null ? void 0 : o.overflows) || [];
            if (d && k.push(_[v]),
            c) {
                const R = s5(n, a, y);
                k.push(_[R[0]], _[R[1]])
            }
            if (E = [...E, {
                placement: n,
                overflows: k
            }],
            !k.every(R=>R <= 0)) {
                var I, F;
                const R = (((I = i.flip) == null ? void 0 : I.index) || 0) + 1
                  , O = S[R];
                if (O)
                    return {
                        data: {
                            index: R,
                            overflows: E
                        },
                        reset: {
                            placement: O
                        }
                    };
                let V = (F = E.filter(Z=>Z.overflows[0] <= 0).sort((Z,$)=>Z.overflows[1] - $.overflows[1])[0]) == null ? void 0 : F.placement;
                if (!V)
                    switch (h) {
                    case "bestFit":
                        {
                            var Y;
                            const Z = (Y = E.map($=>[$.placement, $.overflows.filter(te=>te > 0).reduce((te,z)=>te + z, 0)]).sort(($,te)=>$[1] - te[1])[0]) == null ? void 0 : Y[0];
                            Z && (V = Z);
                            break
                        }
                    case "initialPlacement":
                        V = s;
                        break
                    }
                if (n !== V)
                    return {
                        reset: {
                            placement: V
                        }
                    }
            }
            return {}
        }
    }
};
function $p(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}
function Up(e) {
    return n5.some(t=>e[t] >= 0)
}
const Vp = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "hide",
        options: e,
        async fn(t) {
            const {rects: r} = t
              , {strategy: o="referenceHidden", ...n} = lr(e, t);
            switch (o) {
            case "referenceHidden":
                {
                    const i = await nn(t, {
                        ...n,
                        elementContext: "reference"
                    })
                      , a = $p(i, r.reference);
                    return {
                        data: {
                            referenceHiddenOffsets: a,
                            referenceHidden: Up(a)
                        }
                    }
                }
            case "escaped":
                {
                    const i = await nn(t, {
                        ...n,
                        altBoundary: !0
                    })
                      , a = $p(i, r.floating);
                    return {
                        data: {
                            escapedOffsets: a,
                            escaped: Up(a)
                        }
                    }
                }
            default:
                return {}
            }
        }
    }
};
async function g5(e, t) {
    const {placement: r, platform: o, elements: n} = e
      , i = await (o.isRTL == null ? void 0 : o.isRTL(n.floating))
      , a = ur(r)
      , s = hn(r)
      , l = gn(r) === "y"
      , u = ["left", "top"].includes(a) ? -1 : 1
      , d = i && l ? -1 : 1
      , c = lr(t, e);
    let {mainAxis: f, crossAxis: h, alignmentAxis: p} = typeof c == "number" ? {
        mainAxis: c,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: 0,
        crossAxis: 0,
        alignmentAxis: null,
        ...c
    };
    return s && typeof p == "number" && (h = s === "end" ? p * -1 : p),
    l ? {
        x: h * d,
        y: f * u
    } : {
        x: f * u,
        y: h * d
    }
}
const v5 = function(e) {
    return e === void 0 && (e = 0),
    {
        name: "offset",
        options: e,
        async fn(t) {
            var r, o;
            const {x: n, y: i, placement: a, middlewareData: s} = t
              , l = await g5(t, e);
            return a === ((r = s.offset) == null ? void 0 : r.placement) && (o = s.arrow) != null && o.alignmentOffset ? {} : {
                x: n + l.x,
                y: i + l.y,
                data: {
                    ...l,
                    placement: a
                }
            }
        }
    }
}
  , m5 = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "shift",
        options: e,
        async fn(t) {
            const {x: r, y: o, placement: n} = t
              , {mainAxis: i=!0, crossAxis: a=!1, limiter: s={
                fn: w=>{
                    let {x: v, y: g} = w;
                    return {
                        x: v,
                        y: g
                    }
                }
            }, ...l} = lr(e, t)
              , u = {
                x: r,
                y: o
            }
              , d = await nn(t, l)
              , c = gn(ur(n))
              , f = Pd(c);
            let h = u[f]
              , p = u[c];
            if (i) {
                const w = f === "y" ? "top" : "left"
                  , v = f === "y" ? "bottom" : "right"
                  , g = h + d[w]
                  , y = h - d[v];
                h = Zu(g, h, y)
            }
            if (a) {
                const w = c === "y" ? "top" : "left"
                  , v = c === "y" ? "bottom" : "right"
                  , g = p + d[w]
                  , y = p - d[v];
                p = Zu(g, p, y)
            }
            const m = s.fn({
                ...t,
                [f]: h,
                [c]: p
            });
            return {
                ...m,
                data: {
                    x: m.x - r,
                    y: m.y - o
                }
            }
        }
    }
}
  , y5 = function(e) {
    return e === void 0 && (e = {}),
    {
        options: e,
        fn(t) {
            const {x: r, y: o, placement: n, rects: i, middlewareData: a} = t
              , {offset: s=0, mainAxis: l=!0, crossAxis: u=!0} = lr(e, t)
              , d = {
                x: r,
                y: o
            }
              , c = gn(n)
              , f = Pd(c);
            let h = d[f]
              , p = d[c];
            const m = lr(s, t)
              , w = typeof m == "number" ? {
                mainAxis: m,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...m
            };
            if (l) {
                const y = f === "y" ? "height" : "width"
                  , x = i.reference[f] - i.floating[y] + w.mainAxis
                  , S = i.reference[f] + i.reference[y] - w.mainAxis;
                h < x ? h = x : h > S && (h = S)
            }
            if (u) {
                var v, g;
                const y = f === "y" ? "width" : "height"
                  , x = ["top", "left"].includes(ur(n))
                  , S = i.reference[c] - i.floating[y] + (x && ((v = a.offset) == null ? void 0 : v[c]) || 0) + (x ? 0 : w.crossAxis)
                  , _ = i.reference[c] + i.reference[y] + (x ? 0 : ((g = a.offset) == null ? void 0 : g[c]) || 0) - (x ? w.crossAxis : 0);
                p < S ? p = S : p > _ && (p = _)
            }
            return {
                [f]: h,
                [c]: p
            }
        }
    }
}
  , b5 = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "size",
        options: e,
        async fn(t) {
            const {placement: r, rects: o, platform: n, elements: i} = t
              , {apply: a=()=>{}
            , ...s} = lr(e, t)
              , l = await nn(t, s)
              , u = ur(r)
              , d = hn(r)
              , c = gn(r) === "y"
              , {width: f, height: h} = o.floating;
            let p, m;
            u === "top" || u === "bottom" ? (p = u,
            m = d === (await (n.isRTL == null ? void 0 : n.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (m = u,
            p = d === "end" ? "top" : "bottom");
            const w = h - l[p]
              , v = f - l[m]
              , g = !t.middlewareData.shift;
            let y = w
              , x = v;
            if (c) {
                const _ = f - l.left - l.right;
                x = d || g ? mo(v, _) : _
            } else {
                const _ = h - l.top - l.bottom;
                y = d || g ? mo(w, _) : _
            }
            if (g && !d) {
                const _ = gt(l.left, 0)
                  , k = gt(l.right, 0)
                  , E = gt(l.top, 0)
                  , I = gt(l.bottom, 0);
                c ? x = f - 2 * (_ !== 0 || k !== 0 ? _ + k : gt(l.left, l.right)) : y = h - 2 * (E !== 0 || I !== 0 ? E + I : gt(l.top, l.bottom))
            }
            await a({
                ...t,
                availableWidth: x,
                availableHeight: y
            });
            const S = await n.getDimensions(i.floating);
            return f !== S.width || h !== S.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};
function Mr(e) {
    return b0(e) ? (e.nodeName || "").toLowerCase() : "#document"
}
function at(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function $r(e) {
    var t;
    return (t = (b0(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}
function b0(e) {
    return e instanceof Node || e instanceof at(e).Node
}
function cr(e) {
    return e instanceof Element || e instanceof at(e).Element
}
function Gt(e) {
    return e instanceof HTMLElement || e instanceof at(e).HTMLElement
}
function Gp(e) {
    return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof at(e).ShadowRoot
}
function Ci(e) {
    const {overflow: t, overflowX: r, overflowY: o, display: n} = St(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + o + r) && !["inline", "contents"].includes(n)
}
function w5(e) {
    return ["table", "td", "th"].includes(Mr(e))
}
function Nd(e) {
    const t = zd()
      , r = St(e);
    return r.transform !== "none" || r.perspective !== "none" || (r.containerType ? r.containerType !== "normal" : !1) || !t && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !t && (r.filter ? r.filter !== "none" : !1) || ["transform", "perspective", "filter"].some(o=>(r.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some(o=>(r.contain || "").includes(o))
}
function k5(e) {
    let t = an(e);
    for (; Gt(t) && !Ms(t); ) {
        if (Nd(t))
            return t;
        t = an(t)
    }
    return null
}
function zd() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
function Ms(e) {
    return ["html", "body", "#document"].includes(Mr(e))
}
function St(e) {
    return at(e).getComputedStyle(e)
}
function qs(e) {
    return cr(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.pageXOffset,
        scrollTop: e.pageYOffset
    }
}
function an(e) {
    if (Mr(e) === "html")
        return e;
    const t = e.assignedSlot || e.parentNode || Gp(e) && e.host || $r(e);
    return Gp(t) ? t.host : t
}
function w0(e) {
    const t = an(e);
    return Ms(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Gt(t) && Ci(t) ? t : w0(t)
}
function tc(e, t, r) {
    var o;
    t === void 0 && (t = []),
    r === void 0 && (r = !0);
    const n = w0(e)
      , i = n === ((o = e.ownerDocument) == null ? void 0 : o.body)
      , a = at(n);
    return i ? t.concat(a, a.visualViewport || [], Ci(n) ? n : [], a.frameElement && r ? tc(a.frameElement) : []) : t.concat(n, tc(n, [], r))
}
function k0(e) {
    const t = St(e);
    let r = parseFloat(t.width) || 0
      , o = parseFloat(t.height) || 0;
    const n = Gt(e)
      , i = n ? e.offsetWidth : r
      , a = n ? e.offsetHeight : o
      , s = rs(r) !== i || rs(o) !== a;
    return s && (r = i,
    o = a),
    {
        width: r,
        height: o,
        $: s
    }
}
function x0(e) {
    return cr(e) ? e : e.contextElement
}
function Go(e) {
    const t = x0(e);
    if (!Gt(t))
        return Lr(1);
    const r = t.getBoundingClientRect()
      , {width: o, height: n, $: i} = k0(t);
    let a = (i ? rs(r.width) : r.width) / o
      , s = (i ? rs(r.height) : r.height) / n;
    return (!a || !Number.isFinite(a)) && (a = 1),
    (!s || !Number.isFinite(s)) && (s = 1),
    {
        x: a,
        y: s
    }
}
const x5 = Lr(0);
function S0(e) {
    const t = at(e);
    return !zd() || !t.visualViewport ? x5 : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}
function S5(e, t, r) {
    return t === void 0 && (t = !1),
    !r || t && r !== at(e) ? !1 : t
}
function fi(e, t, r, o) {
    t === void 0 && (t = !1),
    r === void 0 && (r = !1);
    const n = e.getBoundingClientRect()
      , i = x0(e);
    let a = Lr(1);
    t && (o ? cr(o) && (a = Go(o)) : a = Go(e));
    const s = S5(i, r, o) ? S0(i) : Lr(0);
    let l = (n.left + s.x) / a.x
      , u = (n.top + s.y) / a.y
      , d = n.width / a.x
      , c = n.height / a.y;
    if (i) {
        const f = at(i)
          , h = o && cr(o) ? at(o) : o;
        let p = f.frameElement;
        for (; p && o && h !== f; ) {
            const m = Go(p)
              , w = p.getBoundingClientRect()
              , v = St(p)
              , g = w.left + (p.clientLeft + parseFloat(v.paddingLeft)) * m.x
              , y = w.top + (p.clientTop + parseFloat(v.paddingTop)) * m.y;
            l *= m.x,
            u *= m.y,
            d *= m.x,
            c *= m.y,
            l += g,
            u += y,
            p = at(p).frameElement
        }
    }
    return ns({
        width: d,
        height: c,
        x: l,
        y: u
    })
}
function _5(e) {
    let {rect: t, offsetParent: r, strategy: o} = e;
    const n = Gt(r)
      , i = $r(r);
    if (r === i)
        return t;
    let a = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , s = Lr(1);
    const l = Lr(0);
    if ((n || !n && o !== "fixed") && ((Mr(r) !== "body" || Ci(i)) && (a = qs(r)),
    Gt(r))) {
        const u = fi(r);
        s = Go(r),
        l.x = u.x + r.clientLeft,
        l.y = u.y + r.clientTop
    }
    return {
        width: t.width * s.x,
        height: t.height * s.y,
        x: t.x * s.x - a.scrollLeft * s.x + l.x,
        y: t.y * s.y - a.scrollTop * s.y + l.y
    }
}
function B5(e) {
    return Array.from(e.getClientRects())
}
function _0(e) {
    return fi($r(e)).left + qs(e).scrollLeft
}
function E5(e) {
    const t = $r(e)
      , r = qs(e)
      , o = e.ownerDocument.body
      , n = gt(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth)
      , i = gt(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
    let a = -r.scrollLeft + _0(e);
    const s = -r.scrollTop;
    return St(o).direction === "rtl" && (a += gt(t.clientWidth, o.clientWidth) - n),
    {
        width: n,
        height: i,
        x: a,
        y: s
    }
}
function P5(e, t) {
    const r = at(e)
      , o = $r(e)
      , n = r.visualViewport;
    let i = o.clientWidth
      , a = o.clientHeight
      , s = 0
      , l = 0;
    if (n) {
        i = n.width,
        a = n.height;
        const u = zd();
        (!u || u && t === "fixed") && (s = n.offsetLeft,
        l = n.offsetTop)
    }
    return {
        width: i,
        height: a,
        x: s,
        y: l
    }
}
function C5(e, t) {
    const r = fi(e, !0, t === "fixed")
      , o = r.top + e.clientTop
      , n = r.left + e.clientLeft
      , i = Gt(e) ? Go(e) : Lr(1)
      , a = e.clientWidth * i.x
      , s = e.clientHeight * i.y
      , l = n * i.x
      , u = o * i.y;
    return {
        width: a,
        height: s,
        x: l,
        y: u
    }
}
function Kp(e, t, r) {
    let o;
    if (t === "viewport")
        o = P5(e, r);
    else if (t === "document")
        o = E5($r(e));
    else if (cr(t))
        o = C5(t, r);
    else {
        const n = S0(e);
        o = {
            ...t,
            x: t.x - n.x,
            y: t.y - n.y
        }
    }
    return ns(o)
}
function B0(e, t) {
    const r = an(e);
    return r === t || !cr(r) || Ms(r) ? !1 : St(r).position === "fixed" || B0(r, t)
}
function T5(e, t) {
    const r = t.get(e);
    if (r)
        return r;
    let o = tc(e, [], !1).filter(s=>cr(s) && Mr(s) !== "body")
      , n = null;
    const i = St(e).position === "fixed";
    let a = i ? an(e) : e;
    for (; cr(a) && !Ms(a); ) {
        const s = St(a)
          , l = Nd(a);
        !l && s.position === "fixed" && (n = null),
        (i ? !l && !n : !l && s.position === "static" && !!n && ["absolute", "fixed"].includes(n.position) || Ci(a) && !l && B0(e, a)) ? o = o.filter(d=>d !== a) : n = s,
        a = an(a)
    }
    return t.set(e, o),
    o
}
function N5(e) {
    let {element: t, boundary: r, rootBoundary: o, strategy: n} = e;
    const a = [...r === "clippingAncestors" ? T5(t, this._c) : [].concat(r), o]
      , s = a[0]
      , l = a.reduce((u,d)=>{
        const c = Kp(t, d, n);
        return u.top = gt(c.top, u.top),
        u.right = mo(c.right, u.right),
        u.bottom = mo(c.bottom, u.bottom),
        u.left = gt(c.left, u.left),
        u
    }
    , Kp(t, s, n));
    return {
        width: l.right - l.left,
        height: l.bottom - l.top,
        x: l.left,
        y: l.top
    }
}
function z5(e) {
    return k0(e)
}
function F5(e, t, r) {
    const o = Gt(t)
      , n = $r(t)
      , i = r === "fixed"
      , a = fi(e, !0, i, t);
    let s = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const l = Lr(0);
    if (o || !o && !i)
        if ((Mr(t) !== "body" || Ci(n)) && (s = qs(t)),
        o) {
            const u = fi(t, !0, i, t);
            l.x = u.x + t.clientLeft,
            l.y = u.y + t.clientTop
        } else
            n && (l.x = _0(n));
    return {
        x: a.left + s.scrollLeft - l.x,
        y: a.top + s.scrollTop - l.y,
        width: a.width,
        height: a.height
    }
}
function Xp(e, t) {
    return !Gt(e) || St(e).position === "fixed" ? null : t ? t(e) : e.offsetParent
}
function E0(e, t) {
    const r = at(e);
    if (!Gt(e))
        return r;
    let o = Xp(e, t);
    for (; o && w5(o) && St(o).position === "static"; )
        o = Xp(o, t);
    return o && (Mr(o) === "html" || Mr(o) === "body" && St(o).position === "static" && !Nd(o)) ? r : o || k5(e) || r
}
const R5 = async function(e) {
    let {reference: t, floating: r, strategy: o} = e;
    const n = this.getOffsetParent || E0
      , i = this.getDimensions;
    return {
        reference: F5(t, await n(r), o),
        floating: {
            x: 0,
            y: 0,
            ...await i(r)
        }
    }
};
function D5(e) {
    return St(e).direction === "rtl"
}
const j5 = {
    convertOffsetParentRelativeRectToViewportRelativeRect: _5,
    getDocumentElement: $r,
    getClippingRect: N5,
    getOffsetParent: E0,
    getElementRects: R5,
    getClientRects: B5,
    getDimensions: z5,
    getScale: Go,
    isElement: cr,
    isRTL: D5
}
  , I5 = (e,t,r)=>{
    const o = new Map
      , n = {
        platform: j5,
        ...r
    }
      , i = {
        ...n.platform,
        _c: o
    };
    return f5(e, t, {
        ...n,
        platform: i
    })
}
;
function P0(e) {
    const t = e.split("-");
    return {
        side: t[0],
        alignment: t[1]
    }
}
const A5 = e=>e.nodeName === "HTML" ? e : e.parentNode || e.host
  , O5 = e=>{
    var t;
    return e.nodeType !== 1 ? {} : ((t = e.ownerDocument) === null || t === void 0 ? void 0 : t.defaultView).getComputedStyle(e, null)
}
  , Hs = e=>{
    const t = e && A5(e);
    if (!t)
        return document.body;
    switch (t.nodeName) {
    case "HTML":
    case "BODY":
        return t.ownerDocument.body;
    case "#document":
        return t.body
    }
    const {overflow: r, overflowX: o, overflowY: n} = O5(t);
    return /(auto|scroll|overlay)/.test(r + n + o) ? t : Hs(t)
}
  , L5 = e=>{
    var t;
    const r = Hs(e);
    return r ? r !== ((t = r.ownerDocument) === null || t === void 0 ? void 0 : t.body) : !1
}
;
function Fd(e, t) {
    if (t === "window")
        return e == null ? void 0 : e.ownerDocument.documentElement;
    if (t === "clippingParents")
        return "clippingAncestors";
    if (t === "scrollParent") {
        let r = Hs(e);
        return r.nodeName === "BODY" && (r = e == null ? void 0 : e.ownerDocument.documentElement),
        r
    }
    return t
}
function M5(e, t) {
    return typeof e == "number" || typeof e == "object" && e !== null ? Ol(e, t) : typeof e == "function" ? r=>{
        const o = e(r);
        return Ol(o, t)
    }
    : {
        mainAxis: t
    }
}
const Ol = (e,t)=>{
    if (typeof e == "number")
        return {
            mainAxis: e + t
        };
    var r;
    return {
        ...e,
        mainAxis: ((r = e.mainAxis) !== null && r !== void 0 ? r : 0) + t
    }
}
;
function q5(e, t) {
    if (typeof e == "number")
        return e;
    const {start: r, end: o, ...n} = e
      , i = n
      , a = t ? "end" : "start"
      , s = t ? "start" : "end";
    return e[a] && (i.left = e[a]),
    e[s] && (i.right = e[s]),
    i
}
const H5 = e=>({
    above: "top",
    below: "bottom",
    before: e ? "right" : "left",
    after: e ? "left" : "right"
})
  , W5 = ()=>({
    start: "start",
    end: "end",
    top: "start",
    bottom: "end",
    center: void 0
})
  , $5 = (e,t)=>{
    const r = e === "above" || e === "below"
      , o = t === "top" || t === "bottom";
    return r && o || !r && !o
}
  , C0 = (e,t,r)=>{
    const o = $5(t, e) ? "center" : e
      , n = t && H5(r)[t]
      , i = o && W5()[o];
    return n && i ? `${n}-${i}` : n
}
  , U5 = ()=>({
    top: "above",
    bottom: "below",
    right: "after",
    left: "before"
})
  , V5 = e=>e === "above" || e === "below" ? {
    start: "start",
    end: "end"
} : {
    start: "top",
    end: "bottom"
}
  , G5 = e=>{
    const {side: t, alignment: r} = P0(e)
      , o = U5()[t]
      , n = r && V5(o)[r];
    return {
        position: o,
        alignment: n
    }
}
  , K5 = {
    above: {
        position: "above",
        align: "center"
    },
    "above-start": {
        position: "above",
        align: "start"
    },
    "above-end": {
        position: "above",
        align: "end"
    },
    below: {
        position: "below",
        align: "center"
    },
    "below-start": {
        position: "below",
        align: "start"
    },
    "below-end": {
        position: "below",
        align: "end"
    },
    before: {
        position: "before",
        align: "center"
    },
    "before-top": {
        position: "before",
        align: "top"
    },
    "before-bottom": {
        position: "before",
        align: "bottom"
    },
    after: {
        position: "after",
        align: "center"
    },
    "after-top": {
        position: "after",
        align: "top"
    },
    "after-bottom": {
        position: "after",
        align: "bottom"
    }
};
function T0(e) {
    return e == null ? {} : typeof e == "string" ? K5[e] : e
}
function Ll(e, t, r) {
    const o = b.useRef(!0)
      , [n] = b.useState(()=>({
        value: e,
        callback: t,
        facade: {
            get current() {
                return n.value
            },
            set current(i) {
                const a = n.value;
                if (a !== i) {
                    if (n.value = i,
                    r && o.current)
                        return;
                    n.callback(i, a)
                }
            }
        }
    }));
    return Rt(()=>{
        o.current = !1
    }
    , []),
    n.callback = t,
    n.facade
}
function X5(e) {
    let t;
    return ()=>(t || (t = new Promise(r=>{
        Promise.resolve().then(()=>{
            t = void 0,
            r(e())
        }
        )
    }
    )),
    t)
}
function Q5(e) {
    const {arrow: t, middlewareData: r} = e;
    if (!r.arrow || !t)
        return;
    const {x: o, y: n} = r.arrow;
    Object.assign(t.style, {
        left: `${o}px`,
        top: `${n}px`
    })
}
function J5(e) {
    var t, r, o;
    const {container: n, placement: i, middlewareData: a, strategy: s, lowPPI: l, coordinates: u, useTransform: d=!0} = e;
    if (!n)
        return;
    n.setAttribute(o5, i),
    n.removeAttribute(Mp),
    a.intersectionObserver.intersecting && n.setAttribute(Mp, ""),
    n.removeAttribute(qp),
    !((t = a.hide) === null || t === void 0) && t.escaped && n.setAttribute(qp, ""),
    n.removeAttribute(Hp),
    !((r = a.hide) === null || r === void 0) && r.referenceHidden && n.setAttribute(Hp, "");
    const c = ((o = n.ownerDocument.defaultView) === null || o === void 0 ? void 0 : o.devicePixelRatio) || 1
      , f = Math.round(u.x * c) / c
      , h = Math.round(u.y * c) / c;
    if (Object.assign(n.style, {
        position: s
    }),
    d) {
        Object.assign(n.style, {
            transform: l ? `translate(${f}px, ${h}px)` : `translate3d(${f}px, ${h}px, 0)`
        });
        return
    }
    Object.assign(n.style, {
        left: `${f}px`,
        top: `${h}px`
    })
}
const Y5 = e=>{
    switch (e) {
    case "always":
    case !0:
        return {
            applyMaxWidth: !0,
            applyMaxHeight: !0
        };
    case "width-always":
    case "width":
        return {
            applyMaxWidth: !0,
            applyMaxHeight: !1
        };
    case "height-always":
    case "height":
        return {
            applyMaxWidth: !1,
            applyMaxHeight: !0
        };
    default:
        return !1
    }
}
;
function Z5() {
    return {
        name: "coverTarget",
        fn: e=>{
            const {placement: t, rects: r, x: o, y: n} = e
              , i = P0(t).side
              , a = {
                x: o,
                y: n
            };
            switch (i) {
            case "bottom":
                a.y -= r.reference.height;
                break;
            case "top":
                a.y += r.reference.height;
                break;
            case "left":
                a.x += r.reference.width;
                break;
            case "right":
                a.x -= r.reference.width;
                break
            }
            return a
        }
    }
}
function eB(e) {
    const {hasScrollableElement: t, flipBoundary: r, container: o, fallbackPositions: n=[], isRtl: i} = e
      , a = n.reduce((s,l)=>{
        const {position: u, align: d} = T0(l)
          , c = C0(d, u, i);
        return c && s.push(c),
        s
    }
    , []);
    return h5({
        ...t && {
            boundary: "clippingAncestors"
        },
        ...r && {
            altBoundary: !0,
            boundary: Fd(o, r)
        },
        fallbackStrategy: "bestFit",
        ...a.length && {
            fallbackPlacements: a
        }
    })
}
function tB() {
    return {
        name: "intersectionObserver",
        fn: async e=>{
            const t = e.rects.floating
              , r = await nn(e, {
                altBoundary: !0
            })
              , o = r.top < t.height && r.top > 0
              , n = r.bottom < t.height && r.bottom > 0;
            return {
                data: {
                    intersecting: o || n
                }
            }
        }
    }
}
const rB = e=>({
    name: "resetMaxSize",
    fn({middlewareData: t, elements: r}) {
        var o;
        if (!((o = t.resetMaxSize) === null || o === void 0) && o.maxSizeAlreadyReset)
            return {};
        const {applyMaxWidth: n, applyMaxHeight: i} = e;
        return n && (r.floating.style.removeProperty("box-sizing"),
        r.floating.style.removeProperty("max-width"),
        r.floating.style.removeProperty("width")),
        i && (r.floating.style.removeProperty("box-sizing"),
        r.floating.style.removeProperty("max-height"),
        r.floating.style.removeProperty("height")),
        {
            data: {
                maxSizeAlreadyReset: !0
            },
            reset: {
                rects: !0
            }
        }
    }
});
function oB(e, t) {
    const {container: r, overflowBoundary: o} = t;
    return b5({
        ...o && {
            altBoundary: !0,
            boundary: Fd(r, o)
        },
        apply({availableHeight: n, availableWidth: i, elements: a, rects: s}) {
            const l = (c,f,h)=>{
                if (c && (a.floating.style.setProperty("box-sizing", "border-box"),
                a.floating.style.setProperty(`max-${f}`, `${h}px`),
                s.floating[f] > h)) {
                    a.floating.style.setProperty(f, `${h}px`);
                    const p = f === "width" ? "x" : "y";
                    a.floating.style.getPropertyValue(`overflow-${p}`) || a.floating.style.setProperty(`overflow-${p}`, "auto")
                }
            }
              , {applyMaxWidth: u, applyMaxHeight: d} = e;
            l(u, "width", i),
            l(d, "height", n)
        }
    })
}
function nB(e) {
    return !e || typeof e == "number" || typeof e == "object" ? e : ({rects: {floating: t, reference: r}, placement: o})=>{
        const {position: n, alignment: i} = G5(o);
        return e({
            positionedRect: t,
            targetRect: r,
            position: n,
            alignment: i
        })
    }
}
function iB(e) {
    const t = nB(e);
    return v5(t)
}
function aB(e) {
    const {hasScrollableElement: t, disableTether: r, overflowBoundary: o, container: n, overflowBoundaryPadding: i, isRtl: a} = e;
    return m5({
        ...t && {
            boundary: "clippingAncestors"
        },
        ...r && {
            crossAxis: r === "all",
            limiter: y5({
                crossAxis: r !== "all",
                mainAxis: !1
            })
        },
        ...i && {
            padding: q5(i, a)
        },
        ...o && {
            altBoundary: !0,
            boundary: Fd(n, o)
        }
    })
}
const Qp = "--fui-match-target-size";
function sB() {
    return {
        name: "matchTargetSize",
        fn: async e=>{
            const {rects: {reference: t, floating: r}, elements: {floating: o}, middlewareData: {matchTargetSize: {matchTargetSizeAttempt: n=!1}={}}} = e;
            if (t.width === r.width || n)
                return {};
            const {width: i} = t;
            return o.style.setProperty(Qp, `${i}px`),
            o.style.width || (o.style.width = `var(${Qp})`),
            {
                data: {
                    matchTargetSizeAttempt: !0
                },
                reset: {
                    rects: !0
                }
            }
        }
    }
}
function Jp(e) {
    const t = [];
    let r = e;
    for (; r; ) {
        const o = Hs(r);
        if (e.ownerDocument.body === o) {
            t.push(o);
            break
        }
        t.push(o),
        r = o
    }
    return t
}
function lB(e) {
    const {container: t, target: r, arrow: o, strategy: n, middleware: i, placement: a, useTransform: s=!0} = e;
    let l = !1;
    if (!r || !t)
        return {
            updatePosition: ()=>{}
            ,
            dispose: ()=>{}
        };
    let u = !0;
    const d = new Set
      , c = t.ownerDocument.defaultView;
    Object.assign(t.style, {
        position: "fixed",
        left: 0,
        top: 0,
        margin: 0
    });
    const f = ()=>{
        l || (u && (Jp(t).forEach(m=>d.add(m)),
        Za(r) && Jp(r).forEach(m=>d.add(m)),
        d.forEach(m=>{
            m.addEventListener("scroll", h, {
                passive: !0
            })
        }
        ),
        u = !1),
        Object.assign(t.style, {
            position: n
        }),
        I5(r, t, {
            placement: a,
            middleware: i,
            strategy: n
        }).then(({x: m, y: w, middlewareData: v, placement: g})=>{
            l || (Q5({
                arrow: o,
                middlewareData: v
            }),
            J5({
                container: t,
                middlewareData: v,
                placement: g,
                coordinates: {
                    x: m,
                    y: w
                },
                lowPPI: ((c == null ? void 0 : c.devicePixelRatio) || 1) <= 1,
                strategy: n,
                useTransform: s
            }))
        }
        ).catch(m=>{}
        ))
    }
      , h = X5(()=>f())
      , p = ()=>{
        l = !0,
        c && (c.removeEventListener("scroll", h),
        c.removeEventListener("resize", h)),
        d.forEach(m=>{
            m.removeEventListener("scroll", h)
        }
        ),
        d.clear()
    }
    ;
    return c && (c.addEventListener("scroll", h, {
        passive: !0
    }),
    c.addEventListener("resize", h)),
    h(),
    {
        updatePosition: h,
        dispose: p
    }
}
function uB(e) {
    const t = b.useRef(null)
      , r = b.useRef(null)
      , o = b.useRef(null)
      , n = b.useRef(null)
      , i = b.useRef(null)
      , {enabled: a=!0} = e
      , s = cB(e)
      , l = b.useCallback(()=>{
        t.current && t.current.dispose(),
        t.current = null;
        var h;
        const p = (h = o.current) !== null && h !== void 0 ? h : r.current;
        a && wo() && p && n.current && (t.current = lB({
            container: n.current,
            target: p,
            arrow: i.current,
            ...s(n.current, i.current)
        }))
    }
    , [a, s])
      , u = ot(h=>{
        o.current = h,
        l()
    }
    );
    b.useImperativeHandle(e.positioningRef, ()=>({
        updatePosition: ()=>{
            var h;
            return (h = t.current) === null || h === void 0 ? void 0 : h.updatePosition()
        }
        ,
        setTarget: h=>{
            e.target,
            u(h)
        }
    }), [e.target, u]),
    Rt(()=>{
        var h;
        u((h = e.target) !== null && h !== void 0 ? h : null)
    }
    , [e.target, u]),
    Rt(()=>{
        l()
    }
    , [l]);
    const d = Ll(null, h=>{
        r.current !== h && (r.current = h,
        l())
    }
    )
      , c = Ll(null, h=>{
        n.current !== h && (n.current = h,
        l())
    }
    )
      , f = Ll(null, h=>{
        i.current !== h && (i.current = h,
        l())
    }
    );
    return {
        targetRef: d,
        containerRef: c,
        arrowRef: f
    }
}
function cB(e) {
    const {align: t, arrowPadding: r, autoSize: o, coverTarget: n, flipBoundary: i, offset: a, overflowBoundary: s, pinned: l, position: u, unstable_disableTether: d, positionFixed: c, strategy: f, overflowBoundaryPadding: h, fallbackPositions: p, useTransform: m, matchTargetSize: w} = e
      , {dir: v, targetDocument: g} = It()
      , y = v === "rtl"
      , x = f ?? c ? "fixed" : "absolute"
      , S = Y5(o);
    return b.useCallback((_,k)=>{
        const E = L5(_)
          , I = [S && rB(S), w && sB(), a && iB(a), n && Z5(), !l && eB({
            container: _,
            flipBoundary: i,
            hasScrollableElement: E,
            isRtl: y,
            fallbackPositions: p
        }), aB({
            container: _,
            hasScrollableElement: E,
            overflowBoundary: s,
            disableTether: d,
            overflowBoundaryPadding: h,
            isRtl: y
        }), S && oB(S, {
            container: _,
            overflowBoundary: s
        }), tB(), k && p5({
            element: k,
            padding: r
        }), Vp({
            strategy: "referenceHidden"
        }), Vp({
            strategy: "escaped"
        }), !1].filter(Boolean);
        return {
            placement: C0(t, u, y),
            middleware: I,
            strategy: x,
            useTransform: m
        }
    }
    , [t, r, S, n, d, i, y, a, s, l, u, x, h, p, m, w, g])
}
function dB(e) {
    return Za(e) ? {
        element: e
    } : typeof e == "object" ? e === null ? {
        element: null
    } : e : {}
}
var N0 = ()=>b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner.current
  , fB = ()=>!1
  , Yp = new WeakSet;
function pB(e, t) {
    const r = N0();
    b.useEffect(()=>{
        if (!Yp.has(r)) {
            Yp.add(r),
            e();
            return
        }
        return e()
    }
    , t)
}
var Zp = new WeakSet;
function hB(e, t) {
    return b.useMemo(()=>{
        const r = N0();
        return Zp.has(r) ? e() : (Zp.add(r),
        null)
    }
    , t)
}
function gB(e, t) {
    var r;
    const o = fB() && !1
      , n = o ? hB : b.useMemo
      , i = o ? pB : b.useEffect
      , [a,s] = (r = n(()=>e(), t)) != null ? r : [null, ()=>null];
    return i(()=>s, t),
    a
}
const vB = U({
    root: {
        qhf8xq: "f1euv43f",
        Bhzewxz: "f15twtuk",
        oyh7mz: ["f1vgc2s3", "f1e31b4d"],
        j35jbq: ["f1e31b4d", "f1vgc2s3"],
        Bj3rh1h: "f494woh"
    }
}, {
    d: [".f1euv43f{position:absolute;}", ".f15twtuk{top:0;}", ".f1vgc2s3{left:0;}", ".f1e31b4d{right:0;}", ".f494woh{z-index:1000000;}"]
})
  , eh = Un.useInsertionEffect
  , mB = e=>{
    const {targetDocument: t, dir: r} = It()
      , o = c2()
      , n = l0()
      , i = vB()
      , a = t2()
      , s = W(a, i.root, e.className)
      , l = o ?? (t == null ? void 0 : t.body)
      , u = gB(()=>{
        if (l === void 0 || e.disabled)
            return [null, ()=>null];
        const d = l.ownerDocument.createElement("div");
        return l.appendChild(d),
        [d, ()=>d.remove()]
    }
    , [l]);
    return eh ? eh(()=>{
        if (!u)
            return;
        const d = s.split(" ").filter(Boolean);
        return u.classList.add(...d),
        u.setAttribute("dir", r),
        n.current = u,
        ()=>{
            u.classList.remove(...d),
            u.removeAttribute("dir")
        }
    }
    , [s, r, u, n]) : b.useMemo(()=>{
        u && (u.className = s,
        u.setAttribute("dir", r),
        n.current = u)
    }
    , [s, r, u, n]),
    u
}
  , yB = e=>{
    const {element: t, className: r} = dB(e.mountNode)
      , o = b.useRef(null)
      , n = mB({
        disabled: !!t,
        className: r
    })
      , i = t ?? n
      , a = {
        children: e.children,
        mountNode: i,
        virtualParentRootRef: o
    };
    return b.useEffect(()=>{
        if (!i)
            return;
        const s = o.current
          , l = i.contains(s);
        if (s && !l)
            return Cp(i, s),
            ()=>{
                Cp(i, void 0)
            }
    }
    , [o, i]),
    a
}
  , bB = e=>b.createElement("span", {
    hidden: !0,
    ref: e.virtualParentRootRef
}, e.mountNode && pd.createPortal(e.children, e.mountNode))
  , Rd = e=>{
    const t = yB(e);
    return bB(t)
}
;
Rd.displayName = "Portal";
const wB = 6
  , kB = 4
  , xB = e=>{
    var t, r, o, n;
    const i = n2()
      , a = Xx()
      , {targetDocument: s} = It()
      , [l,u] = Ya()
      , {appearance: d="normal", children: c, content: f, withArrow: h=!1, positioning: p="above", onVisibleChange: m, relationship: w, showDelay: v=250, hideDelay: g=250, mountNode: y} = e
      , [x,S] = js({
        state: e.visible,
        initialState: !1
    })
      , _ = b.useCallback((z,D)=>{
        u(),
        S(M=>(D.visible !== M && (m == null || m(z, D)),
        D.visible))
    }
    , [u, S, m])
      , k = {
        withArrow: h,
        positioning: p,
        showDelay: v,
        hideDelay: g,
        relationship: w,
        visible: x,
        shouldRenderTooltip: x,
        appearance: d,
        mountNode: y,
        components: {
            content: "div"
        },
        content: pe(f, {
            defaultProps: {
                role: "tooltip"
            },
            elementType: "div"
        })
    };
    k.content.id = pn("tooltip-", k.content.id);
    const E = {
        enabled: k.visible,
        arrowPadding: 2 * kB,
        position: "above",
        align: "center",
        offset: 4,
        ...T0(k.positioning)
    };
    k.withArrow && (E.offset = M5(E.offset, wB));
    const {targetRef: I, containerRef: F, arrowRef: Y} = uB(E);
    k.content.ref = Ar(k.content.ref, F),
    k.arrowRef = Y,
    Rt(()=>{
        if (x) {
            var z;
            const D = {
                hide: C=>_(void 0, {
                    visible: !1,
                    documentKeyboardEvent: C
                })
            };
            (z = i.visibleTooltip) === null || z === void 0 || z.hide(),
            i.visibleTooltip = D;
            const M = C=>{
                C.key === v0 && !C.defaultPrevented && (D.hide(C),
                C.preventDefault())
            }
            ;
            return s == null || s.addEventListener("keydown", M, {
                capture: !0
            }),
            ()=>{
                i.visibleTooltip === D && (i.visibleTooltip = void 0),
                s == null || s.removeEventListener("keydown", M, {
                    capture: !0
                })
            }
        }
    }
    , [i, s, x, _]);
    const R = b.useRef(!1)
      , O = b.useCallback(z=>{
        if (z.type === "focus" && R.current) {
            R.current = !1;
            return
        }
        const D = i.visibleTooltip ? 0 : k.showDelay;
        l(()=>{
            _(z, {
                visible: !0
            })
        }
        , D),
        z.persist()
    }
    , [l, _, k.showDelay, i])
      , [V] = b.useState(()=>{
        const z = M=>{
            var C;
            !((C = M.detail) === null || C === void 0) && C.isFocusedProgrammatically && (R.current = !0)
        }
        ;
        let D = null;
        return M=>{
            D == null || D.removeEventListener(Dt, z),
            M == null || M.addEventListener(Dt, z),
            D = M
        }
    }
    )
      , Z = b.useCallback(z=>{
        let D = k.hideDelay;
        z.type === "blur" && (D = 0,
        R.current = (s == null ? void 0 : s.activeElement) === z.target),
        l(()=>{
            _(z, {
                visible: !1
            })
        }
        , D),
        z.persist()
    }
    , [l, _, k.hideDelay, s]);
    k.content.onPointerEnter = Lt(k.content.onPointerEnter, u),
    k.content.onPointerLeave = Lt(k.content.onPointerLeave, Z),
    k.content.onFocus = Lt(k.content.onFocus, u),
    k.content.onBlur = Lt(k.content.onBlur, Z);
    const $ = wd(c)
      , te = {};
    return w === "label" ? typeof k.content.children == "string" ? te["aria-label"] = k.content.children : (te["aria-labelledby"] = k.content.id,
    k.shouldRenderTooltip = !0) : w === "description" && (te["aria-describedby"] = k.content.id,
    k.shouldRenderTooltip = !0),
    a && (k.shouldRenderTooltip = !1),
    k.children = zm(c, {
        ...te,
        ...$ == null ? void 0 : $.props,
        ref: Ar($ == null ? void 0 : $.ref, V, E.target === void 0 ? I : void 0),
        onPointerEnter: ot(Lt($ == null || (t = $.props) === null || t === void 0 ? void 0 : t.onPointerEnter, O)),
        onPointerLeave: ot(Lt($ == null || (r = $.props) === null || r === void 0 ? void 0 : r.onPointerLeave, Z)),
        onFocus: ot(Lt($ == null || (o = $.props) === null || o === void 0 ? void 0 : o.onFocus, O)),
        onBlur: ot(Lt($ == null || (n = $.props) === null || n === void 0 ? void 0 : n.onBlur, Z))
    }),
    k
}
  , SB = e=>ut(b.Fragment, {
    children: [e.children, e.shouldRenderTooltip && q(Rd, {
        mountNode: e.mountNode,
        children: ut(e.content, {
            children: [e.withArrow && q("div", {
                ref: e.arrowRef,
                className: e.arrowClassName
            }), e.content.children]
        })
    })]
})
  , _B = {
    content: "fui-Tooltip__content"
}
  , BB = U({
    root: {
        mc9l5x: "fjseox",
        B7ck84d: "f1ewtqcl",
        B2u0y6b: "f132xexn",
        Bceei9c: "f158kwzp",
        Bahqtrf: "fk6fouc",
        Be2twd7: "fy9rknc",
        Bg96gwp: "fwrc4pm",
        Btd35i7: "fokg9q4",
        Bbmb7ep: ["f1aa9q02", "f16jpd5f"],
        Beyfa6y: ["f16jpd5f", "f1aa9q02"],
        B7oj6ja: ["f1jar5jt", "fyu767a"],
        Btl43ni: ["fyu767a", "f1jar5jt"],
        B4j52fo: "f5ogflp",
        Bekrc4i: ["f1hqa2wf", "finvdd3"],
        Bn0qgzm: "f1f09k3d",
        ibv6hh: ["finvdd3", "f1hqa2wf"],
        icvyot: "fzkkow9",
        vrafjx: ["fcdblym", "fjik90z"],
        oivjwe: "fg706s2",
        wvpqe5: ["fjik90z", "fcdblym"],
        g2u3we: "fghlq4f",
        h3c5rm: ["f1gn591s", "fjscplz"],
        B9xav0g: "fb073pr",
        zhjwy3: ["fjscplz", "f1gn591s"],
        z8tnut: "f10ra9hq",
        z189sj: ["fd9xhir", "f1jlaasf"],
        Byoj8tv: "f1d7kygh",
        uwmqm3: ["f1jlaasf", "fd9xhir"],
        De3pzq: "fxugw4r",
        sj55zd: "f19n0e5",
        Bhu2qc9: "fxeb0a7"
    },
    visible: {
        mc9l5x: "ftgm304"
    },
    inverted: {
        De3pzq: "fg3r6xk",
        sj55zd: "fonrgv7"
    },
    arrow: {
        qhf8xq: "f1euv43f",
        De3pzq: "f1u2r49w",
        Bcdw1i0: "fd7fpy0",
        Bj3rh1h: "f1bsuimh",
        a9b677: "f1ekdpwm",
        Bqenvij: "f83vc9z",
        Ftih45: "f1wl9k8s",
        B1puzpu: "f1wkw4r9",
        Brfgrao: "f1j7ml58",
        Bcvre1j: "fyl8oag",
        Ccq8qp: "frdoeuz",
        Baz25je: "fb81m9q",
        cmx5o7: "f1ljr5q2",
        B4f6apu: "fyfemzf",
        m598lv: "focyt6c",
        Bk5zm6e: "fnhxbxj",
        y0oebl: "fdw6hkg",
        qa3bma: "f11yjt3y",
        Bqjgrrk: "f1172wan",
        Budzafs: ["f9e5op9", "f112wvtl"],
        Hv9wc6: ["f1500xdc", "f1it0ps5"],
        hl6cv3: "f1773hnp",
        c8svkw: "fw7o64x",
        yayu3t: "f1v7783n",
        nr3p0k: "f1f0d6v",
        rhl9o9: "fh2hsk5",
        wiz9v7: "f1gj3y7g",
        B6q6orb: "f11yvu4",
        ndpsmx: "f17lejdj"
    }
}, {
    d: [".fjseox{display:none;}", ".f1ewtqcl{box-sizing:border-box;}", ".f132xexn{max-width:240px;}", ".f158kwzp{cursor:default;}", ".fk6fouc{font-family:var(--fontFamilyBase);}", ".fy9rknc{font-size:var(--fontSizeBase200);}", ".fwrc4pm{line-height:var(--lineHeightBase200);}", ".fokg9q4{overflow-wrap:break-word;}", ".f1aa9q02{border-bottom-right-radius:var(--borderRadiusMedium);}", ".f16jpd5f{border-bottom-left-radius:var(--borderRadiusMedium);}", ".f1jar5jt{border-top-right-radius:var(--borderRadiusMedium);}", ".fyu767a{border-top-left-radius:var(--borderRadiusMedium);}", ".f5ogflp{border-top-width:1px;}", ".f1hqa2wf{border-right-width:1px;}", ".finvdd3{border-left-width:1px;}", ".f1f09k3d{border-bottom-width:1px;}", ".fzkkow9{border-top-style:solid;}", ".fcdblym{border-right-style:solid;}", ".fjik90z{border-left-style:solid;}", ".fg706s2{border-bottom-style:solid;}", ".fghlq4f{border-top-color:var(--colorTransparentStroke);}", ".f1gn591s{border-right-color:var(--colorTransparentStroke);}", ".fjscplz{border-left-color:var(--colorTransparentStroke);}", ".fb073pr{border-bottom-color:var(--colorTransparentStroke);}", ".f10ra9hq{padding-top:4px;}", ".fd9xhir{padding-right:11px;}", ".f1jlaasf{padding-left:11px;}", ".f1d7kygh{padding-bottom:6px;}", ".fxugw4r{background-color:var(--colorNeutralBackground1);}", ".f19n0e5{color:var(--colorNeutralForeground1);}", ".fxeb0a7{filter:drop-shadow(0 0 2px var(--colorNeutralShadowAmbient)) drop-shadow(0 4px 8px var(--colorNeutralShadowKey));}", ".ftgm304{display:block;}", ".fg3r6xk{background-color:var(--colorNeutralBackgroundStatic);}", ".fonrgv7{color:var(--colorNeutralForegroundStaticInverted);}", ".f1euv43f{position:absolute;}", ".f1u2r49w{background-color:inherit;}", ".fd7fpy0{visibility:hidden;}", ".f1bsuimh{z-index:-1;}", ".f1ekdpwm{width:8.484px;}", ".f83vc9z{height:8.484px;}", '.f1wl9k8s::before{content:"";}', ".f1wkw4r9::before{visibility:visible;}", ".f1j7ml58::before{position:absolute;}", ".fyl8oag::before{box-sizing:border-box;}", ".frdoeuz::before{width:inherit;}", ".fb81m9q::before{height:inherit;}", ".f1ljr5q2::before{background-color:inherit;}", ".fyfemzf::before{border-right-width:1px;}", ".focyt6c::before{border-right-style:solid;}", ".fnhxbxj::before{border-right-color:var(--colorTransparentStroke);}", ".fdw6hkg::before{border-bottom-width:1px;}", ".f11yjt3y::before{border-bottom-style:solid;}", ".f1172wan::before{border-bottom-color:var(--colorTransparentStroke);}", ".f9e5op9::before{border-bottom-right-radius:var(--borderRadiusSmall);}", ".f112wvtl::before{border-bottom-left-radius:var(--borderRadiusSmall);}", ".f1500xdc::before{transform:rotate(var(--fui-positioning-angle)) translate(0, 50%) rotate(45deg);}", ".f1it0ps5::before{transform:rotate(var(--fui-positioning-angle)) translate(0, 50%) rotate(-45deg);}", '[data-popper-placement^="top"] .f1773hnp{bottom:-1px;}', '[data-popper-placement^="top"] .fw7o64x{--fui-positioning-angle:0;}', '[data-popper-placement^="right"] .f1v7783n{left:-1px;}', '[data-popper-placement^="right"] .f1f0d6v{--fui-positioning-angle:90deg;}', '[data-popper-placement^="bottom"] .fh2hsk5{top:-1px;}', '[data-popper-placement^="bottom"] .f1gj3y7g{--fui-positioning-angle:180deg;}', '[data-popper-placement^="left"] .f11yvu4{right:-1px;}', '[data-popper-placement^="left"] .f17lejdj{--fui-positioning-angle:270deg;}']
})
  , EB = e=>{
    const t = BB();
    return e.content.className = W(_B.content, t.root, e.appearance === "inverted" && t.inverted, e.visible && t.visible, e.content.className),
    e.arrowClassName = t.arrow,
    e
}
  , pi = e=>{
    const t = xB(e);
    return EB(t),
    Fe("useTooltipStyles_unstable")(t),
    SB(t)
}
;
pi.displayName = "Tooltip";
pi.isFluentTriggerComponent = !0;
const PB = e=>{
    const {iconOnly: t, iconPosition: r} = e;
    return ut(e.root, {
        children: [r !== "after" && e.icon && q(e.icon, {}), !t && e.root.children, r === "after" && e.icon && q(e.icon, {})]
    })
}
  , z0 = b.createContext(void 0)
  , CB = {};
z0.Provider;
const TB = ()=>{
    var e;
    return (e = b.useContext(z0)) !== null && e !== void 0 ? e : CB
}
  , NB = (e,t)=>{
    const {size: r} = TB()
      , {appearance: o="secondary", as: n="button", disabled: i=!1, disabledFocusable: a=!1, icon: s, iconPosition: l="before", shape: u="rounded", size: d=r ?? "medium"} = e
      , c = He(s, {
        elementType: "span"
    });
    return {
        appearance: o,
        disabled: i,
        disabledFocusable: a,
        iconPosition: l,
        shape: u,
        size: d,
        iconOnly: !!(c != null && c.children && !e.children),
        components: {
            root: "button",
            icon: "span"
        },
        root: pe(Oe(n, m0(e.as, e)), {
            elementType: "button",
            defaultProps: {
                ref: t,
                type: "button"
            }
        }),
        icon: c
    }
}
  , th = {
    root: "fui-Button",
    icon: "fui-Button__icon"
}
  , zB = Ce("r1alrhcs", null, {
    r: [".r1alrhcs{align-items:center;box-sizing:border-box;display:inline-flex;justify-content:center;text-decoration-line:none;vertical-align:middle;margin:0;overflow:hidden;background-color:var(--colorNeutralBackground1);color:var(--colorNeutralForeground1);border:var(--strokeWidthThin) solid var(--colorNeutralStroke1);font-family:var(--fontFamilyBase);outline-style:none;padding:5px var(--spacingHorizontalM);min-width:96px;border-radius:var(--borderRadiusMedium);font-size:var(--fontSizeBase300);font-weight:var(--fontWeightSemibold);line-height:var(--lineHeightBase300);transition-duration:var(--durationFaster);transition-property:background,border,color;transition-timing-function:var(--curveEasyEase);}", ".r1alrhcs:hover{background-color:var(--colorNeutralBackground1Hover);border-color:var(--colorNeutralStroke1Hover);color:var(--colorNeutralForeground1Hover);cursor:pointer;}", ".r1alrhcs:hover:active{background-color:var(--colorNeutralBackground1Pressed);border-color:var(--colorNeutralStroke1Pressed);color:var(--colorNeutralForeground1Pressed);outline-style:none;}", ".r1alrhcs[data-fui-focus-visible]{border-color:var(--colorStrokeFocus2);border-radius:var(--borderRadiusMedium);border-width:1px;outline:var(--strokeWidthThick) solid var(--colorTransparentStroke);box-shadow:0 0 0 var(--strokeWidthThin) var(--colorStrokeFocus2) inset;z-index:1;}"],
    s: ["@media screen and (prefers-reduced-motion: reduce){.r1alrhcs{transition-duration:0.01ms;}}", "@media (forced-colors: active){.r1alrhcs:focus{border-color:ButtonText;}.r1alrhcs:hover{background-color:HighlightText;border-color:Highlight;color:Highlight;forced-color-adjust:none;}.r1alrhcs:hover:active{background-color:HighlightText;border-color:Highlight;color:Highlight;forced-color-adjust:none;}}", "@supports (-moz-appearance:button){.r1alrhcs[data-fui-focus-visible]{box-shadow:0 0 0 calc(var(--strokeWidthThin) + 0.25px) var(--colorStrokeFocus2) inset;}}"]
})
  , FB = Ce("rywnvv2", null, [".rywnvv2{align-items:center;display:inline-flex;justify-content:center;font-size:20px;height:20px;width:20px;--fui-Button__icon--spacing:var(--spacingHorizontalSNudge);}"])
  , RB = U({
    outline: {
        De3pzq: "f1c21dwh",
        Jwef8y: "fjxutwb",
        iro3zm: "fwiml72"
    },
    primary: {
        De3pzq: "ffp7eso",
        g2u3we: "f1p3nwhy",
        h3c5rm: ["f11589ue", "f1pdflbu"],
        B9xav0g: "f1q5o8ev",
        zhjwy3: ["f1pdflbu", "f11589ue"],
        sj55zd: "f1phragk",
        Jwef8y: "f15wkkf3",
        Bgoe8wy: "f1s2uweq",
        Bwzppfd: ["fr80ssc", "fecsdlb"],
        oetu4i: "f1ukrpxl",
        gg5e9n: ["fecsdlb", "fr80ssc"],
        Bi91k9c: "f1rq72xc",
        iro3zm: "fnp9lpt",
        b661bw: "f1h0usnq",
        Bk6r4ia: ["fs4ktlq", "fx2bmrt"],
        B9zn80p: "f16h9ulv",
        Bpld233: ["fx2bmrt", "fs4ktlq"],
        B2d53fq: "f1d6v5y2",
        Bsw6fvg: "f1rirnrt",
        Bjwas2f: "f1uu00uk",
        Bn1d65q: ["fkvaka8", "f9a0qzu"],
        Bxeuatn: "f1ux7til",
        n51gp8: ["f9a0qzu", "fkvaka8"],
        Bbusuzp: "f1lkg8j3",
        ycbfsm: "fkc42ay",
        Bqrx1nm: "fq7113v",
        pgvf35: "ff1wgvm",
        Bh7lczh: ["fiob0tu", "f1x4h75k"],
        dpv3f4: "f1j6scgf",
        Bpnjhaq: ["f1x4h75k", "fiob0tu"],
        ze5xyy: "f4xjyn1",
        g2kj27: "fbgcvur",
        Bf756sw: "f1ks1yx8",
        Bow2dr7: ["f1o6qegi", "fmxjhhp"],
        Bvhedfk: "fcnxywj",
        Gye4lf: ["fmxjhhp", "f1o6qegi"],
        pc6evw: "f9ddjv3"
    },
    secondary: {},
    subtle: {
        De3pzq: "fhovq9v",
        g2u3we: "f1p3nwhy",
        h3c5rm: ["f11589ue", "f1pdflbu"],
        B9xav0g: "f1q5o8ev",
        zhjwy3: ["f1pdflbu", "f11589ue"],
        sj55zd: "fkfq4zb",
        Jwef8y: "f1t94bn6",
        Bgoe8wy: "f1s2uweq",
        Bwzppfd: ["fr80ssc", "fecsdlb"],
        oetu4i: "f1ukrpxl",
        gg5e9n: ["fecsdlb", "fr80ssc"],
        Bi91k9c: "fnwyq0v",
        Bk3fhr4: "ft1hn21",
        Bmfj8id: "fuxngvv",
        Bbdnnc7: "fy5bs14",
        iro3zm: "fsv2rcd",
        b661bw: "f1h0usnq",
        Bk6r4ia: ["fs4ktlq", "fx2bmrt"],
        B9zn80p: "f16h9ulv",
        Bpld233: ["fx2bmrt", "fs4ktlq"],
        B2d53fq: "f1omzyqd",
        em6i61: "f1dfjoow",
        vm6p8p: "f1j98vj9",
        x3br3k: "fj8yq94",
        ze5xyy: "f4xjyn1",
        Bx3q9su: "f1et0tmh",
        pc6evw: "f9ddjv3",
        xd2cci: "f1wi8ngl"
    },
    transparent: {
        De3pzq: "f1c21dwh",
        g2u3we: "f1p3nwhy",
        h3c5rm: ["f11589ue", "f1pdflbu"],
        B9xav0g: "f1q5o8ev",
        zhjwy3: ["f1pdflbu", "f11589ue"],
        sj55zd: "fkfq4zb",
        Jwef8y: "fjxutwb",
        Bgoe8wy: "f1s2uweq",
        Bwzppfd: ["fr80ssc", "fecsdlb"],
        oetu4i: "f1ukrpxl",
        gg5e9n: ["fecsdlb", "fr80ssc"],
        Bi91k9c: "f139oj5f",
        Bk3fhr4: "ft1hn21",
        Bmfj8id: "fuxngvv",
        iro3zm: "fwiml72",
        b661bw: "f1h0usnq",
        Bk6r4ia: ["fs4ktlq", "fx2bmrt"],
        B9zn80p: "f16h9ulv",
        Bpld233: ["fx2bmrt", "fs4ktlq"],
        B2d53fq: "f1fg1p5m",
        em6i61: "f1dfjoow",
        vm6p8p: "f1j98vj9",
        Bqrx1nm: "f1tme0vf",
        ze5xyy: "f4xjyn1",
        g2kj27: "f18onu3q",
        pc6evw: "f9ddjv3"
    },
    circular: {
        Bbmb7ep: ["f8fbkgy", "f1nfllo7"],
        Beyfa6y: ["f1nfllo7", "f8fbkgy"],
        B7oj6ja: ["f1djnp8u", "f1s8kh49"],
        Btl43ni: ["f1s8kh49", "f1djnp8u"]
    },
    rounded: {},
    square: {
        Bbmb7ep: ["fzi6hpg", "fyowgf4"],
        Beyfa6y: ["fyowgf4", "fzi6hpg"],
        B7oj6ja: ["f3fg2lr", "f13av6d4"],
        Btl43ni: ["f13av6d4", "f3fg2lr"]
    },
    small: {
        Bf4jedk: "fh7ncta",
        z8tnut: "f1khb0e9",
        z189sj: ["f1vdfbxk", "f1f5gg8d"],
        Byoj8tv: "f1jnq6q7",
        uwmqm3: ["f1f5gg8d", "f1vdfbxk"],
        Bbmb7ep: ["f1aa9q02", "f16jpd5f"],
        Beyfa6y: ["f16jpd5f", "f1aa9q02"],
        B7oj6ja: ["f1jar5jt", "fyu767a"],
        Btl43ni: ["fyu767a", "f1jar5jt"],
        Be2twd7: "fy9rknc",
        Bhrd7zp: "figsok6",
        Bg96gwp: "fwrc4pm"
    },
    smallWithIcon: {
        Byoj8tv: "f1brlhvm",
        z8tnut: "f1sl3k7w"
    },
    medium: {},
    large: {
        Bf4jedk: "f14es27b",
        z8tnut: "fp9bwmr",
        z189sj: ["fjodcmx", "fhx4nu"],
        Byoj8tv: "f150uoa4",
        uwmqm3: ["fhx4nu", "fjodcmx"],
        Bbmb7ep: ["f1aa9q02", "f16jpd5f"],
        Beyfa6y: ["f16jpd5f", "f1aa9q02"],
        B7oj6ja: ["f1jar5jt", "fyu767a"],
        Btl43ni: ["fyu767a", "f1jar5jt"],
        Be2twd7: "fod5ikn",
        Bhrd7zp: "fl43uef",
        Bg96gwp: "faaz57k"
    },
    largeWithIcon: {
        Byoj8tv: "fy7v416",
        z8tnut: "f1a1bwwz"
    }
}, {
    d: [".f1c21dwh{background-color:var(--colorTransparentBackground);}", ".ffp7eso{background-color:var(--colorBrandBackground);}", ".f1p3nwhy{border-top-color:transparent;}", ".f11589ue{border-right-color:transparent;}", ".f1pdflbu{border-left-color:transparent;}", ".f1q5o8ev{border-bottom-color:transparent;}", ".f1phragk{color:var(--colorNeutralForegroundOnBrand);}", ".fhovq9v{background-color:var(--colorSubtleBackground);}", ".fkfq4zb{color:var(--colorNeutralForeground2);}", ".f8fbkgy{border-bottom-right-radius:var(--borderRadiusCircular);}", ".f1nfllo7{border-bottom-left-radius:var(--borderRadiusCircular);}", ".f1djnp8u{border-top-right-radius:var(--borderRadiusCircular);}", ".f1s8kh49{border-top-left-radius:var(--borderRadiusCircular);}", ".fzi6hpg{border-bottom-right-radius:var(--borderRadiusNone);}", ".fyowgf4{border-bottom-left-radius:var(--borderRadiusNone);}", ".f3fg2lr{border-top-right-radius:var(--borderRadiusNone);}", ".f13av6d4{border-top-left-radius:var(--borderRadiusNone);}", ".fh7ncta{min-width:64px;}", ".f1khb0e9{padding-top:3px;}", ".f1vdfbxk{padding-right:var(--spacingHorizontalS);}", ".f1f5gg8d{padding-left:var(--spacingHorizontalS);}", ".f1jnq6q7{padding-bottom:3px;}", ".f1aa9q02{border-bottom-right-radius:var(--borderRadiusMedium);}", ".f16jpd5f{border-bottom-left-radius:var(--borderRadiusMedium);}", ".f1jar5jt{border-top-right-radius:var(--borderRadiusMedium);}", ".fyu767a{border-top-left-radius:var(--borderRadiusMedium);}", ".fy9rknc{font-size:var(--fontSizeBase200);}", ".figsok6{font-weight:var(--fontWeightRegular);}", ".fwrc4pm{line-height:var(--lineHeightBase200);}", ".f1brlhvm{padding-bottom:1px;}", ".f1sl3k7w{padding-top:1px;}", ".f14es27b{min-width:96px;}", ".fp9bwmr{padding-top:8px;}", ".fjodcmx{padding-right:var(--spacingHorizontalL);}", ".fhx4nu{padding-left:var(--spacingHorizontalL);}", ".f150uoa4{padding-bottom:8px;}", ".fod5ikn{font-size:var(--fontSizeBase400);}", ".fl43uef{font-weight:var(--fontWeightSemibold);}", ".faaz57k{line-height:var(--lineHeightBase400);}", ".fy7v416{padding-bottom:7px;}", ".f1a1bwwz{padding-top:7px;}"],
    h: [".fjxutwb:hover{background-color:var(--colorTransparentBackgroundHover);}", ".fwiml72:hover:active{background-color:var(--colorTransparentBackgroundPressed);}", ".f15wkkf3:hover{background-color:var(--colorBrandBackgroundHover);}", ".f1s2uweq:hover{border-top-color:transparent;}", ".fr80ssc:hover{border-right-color:transparent;}", ".fecsdlb:hover{border-left-color:transparent;}", ".f1ukrpxl:hover{border-bottom-color:transparent;}", ".f1rq72xc:hover{color:var(--colorNeutralForegroundOnBrand);}", ".fnp9lpt:hover:active{background-color:var(--colorBrandBackgroundPressed);}", ".f1h0usnq:hover:active{border-top-color:transparent;}", ".fs4ktlq:hover:active{border-right-color:transparent;}", ".fx2bmrt:hover:active{border-left-color:transparent;}", ".f16h9ulv:hover:active{border-bottom-color:transparent;}", ".f1d6v5y2:hover:active{color:var(--colorNeutralForegroundOnBrand);}", ".f1t94bn6:hover{background-color:var(--colorSubtleBackgroundHover);}", ".fnwyq0v:hover{color:var(--colorNeutralForeground2Hover);}", ".ft1hn21:hover .fui-Icon-filled{display:inline;}", ".fuxngvv:hover .fui-Icon-regular{display:none;}", ".fy5bs14:hover .fui-Button__icon{color:var(--colorNeutralForeground2BrandHover);}", ".fsv2rcd:hover:active{background-color:var(--colorSubtleBackgroundPressed);}", ".f1omzyqd:hover:active{color:var(--colorNeutralForeground2Pressed);}", ".f1dfjoow:hover:active .fui-Icon-filled{display:inline;}", ".f1j98vj9:hover:active .fui-Icon-regular{display:none;}", ".fj8yq94:hover:active .fui-Button__icon{color:var(--colorNeutralForeground2BrandPressed);}", ".f139oj5f:hover{color:var(--colorNeutralForeground2BrandHover);}", ".f1fg1p5m:hover:active{color:var(--colorNeutralForeground2BrandPressed);}"],
    m: [["@media (forced-colors: active){.f1rirnrt{background-color:Highlight;}}", {
        m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f1uu00uk{border-top-color:HighlightText;}}", {
        m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f9a0qzu{border-left-color:HighlightText;}.fkvaka8{border-right-color:HighlightText;}}", {
        m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f1ux7til{border-bottom-color:HighlightText;}}", {
        m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f1lkg8j3{color:HighlightText;}}", {
        m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.fkc42ay{forced-color-adjust:none;}}", {
        m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.fq7113v:hover{background-color:HighlightText;}}", {
        m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.ff1wgvm:hover{border-top-color:Highlight;}}", {
        m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f1x4h75k:hover{border-left-color:Highlight;}.fiob0tu:hover{border-right-color:Highlight;}}", {
        m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f1j6scgf:hover{border-bottom-color:Highlight;}}", {
        m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f4xjyn1:hover{color:Highlight;}}", {
        m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.fbgcvur:hover:active{background-color:HighlightText;}}", {
        m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f1ks1yx8:hover:active{border-top-color:Highlight;}}", {
        m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f1o6qegi:hover:active{border-right-color:Highlight;}.fmxjhhp:hover:active{border-left-color:Highlight;}}", {
        m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.fcnxywj:hover:active{border-bottom-color:Highlight;}}", {
        m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f9ddjv3:hover:active{color:Highlight;}}", {
        m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f1et0tmh:hover .fui-Button__icon{color:Highlight;}}", {
        m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f1wi8ngl:hover:active .fui-Button__icon{color:Highlight;}}", {
        m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f1tme0vf:hover{background-color:var(--colorTransparentBackground);}}", {
        m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f18onu3q:hover:active{background-color:var(--colorTransparentBackground);}}", {
        m: "(forced-colors: active)"
    }]]
})
  , DB = U({
    base: {
        De3pzq: "f1bg9a2p",
        g2u3we: "f1jj8ep1",
        h3c5rm: ["f15xbau", "fy0fskl"],
        B9xav0g: "f4ikngz",
        zhjwy3: ["fy0fskl", "f15xbau"],
        sj55zd: "f1s2aq7o",
        Bceei9c: "fdrzuqr",
        Bfinmwp: "f15x8b5r",
        Jwef8y: "f1falr9n",
        Bgoe8wy: "f12mpcsy",
        Bwzppfd: ["f1gwvigk", "f18rmfxp"],
        oetu4i: "f1jnshp0",
        gg5e9n: ["f18rmfxp", "f1gwvigk"],
        Bi91k9c: "fvgxktp",
        eoavqd: "fphbwmw",
        Bk3fhr4: "f19vpps7",
        Bmfj8id: "fv5swzo",
        Bbdnnc7: "f1al02dq",
        iro3zm: "f1t6o4dc",
        b661bw: "f10ztigi",
        Bk6r4ia: ["f1ft5sdu", "f1gzf82w"],
        B9zn80p: "f12zbtn2",
        Bpld233: ["f1gzf82w", "f1ft5sdu"],
        B2d53fq: "fcvwxyo",
        c3iz72: "f8w4c43",
        em6i61: "f1ol4fw6",
        vm6p8p: "f1q1lw4e",
        x3br3k: "f1dwjv2g"
    },
    highContrast: {
        Bsw6fvg: "f4lkoma",
        Bjwas2f: "fg455y9",
        Bn1d65q: ["f1rvyvqg", "f14g86mu"],
        Bxeuatn: "f1cwzwz",
        n51gp8: ["f14g86mu", "f1rvyvqg"],
        Bbusuzp: "f1dcs8yz",
        G867l3: "fjwq6ea",
        gdbnj: ["f1lr3nhc", "f1mbxvi6"],
        mxns5l: "fn5gmvv",
        o3nasb: ["f1mbxvi6", "f1lr3nhc"],
        Bqrx1nm: "f1vmkb5g",
        pgvf35: "f53ppgq",
        Bh7lczh: ["f1663y11", "f80fkiy"],
        dpv3f4: "f18v5270",
        Bpnjhaq: ["f80fkiy", "f1663y11"],
        ze5xyy: "f1kc2mi9",
        g2kj27: "f1y0svfh",
        Bf756sw: "fihuait",
        Bow2dr7: ["fnxhupq", "fyd6l6x"],
        Bvhedfk: "fx507ft",
        Gye4lf: ["fyd6l6x", "fnxhupq"],
        pc6evw: "fb3rf2x"
    },
    outline: {
        De3pzq: "f1c21dwh",
        Jwef8y: "f9ql6rf",
        iro3zm: "f3h1zc4"
    },
    primary: {
        g2u3we: "f1p3nwhy",
        h3c5rm: ["f11589ue", "f1pdflbu"],
        B9xav0g: "f1q5o8ev",
        zhjwy3: ["f1pdflbu", "f11589ue"],
        Bgoe8wy: "f1s2uweq",
        Bwzppfd: ["fr80ssc", "fecsdlb"],
        oetu4i: "f1ukrpxl",
        gg5e9n: ["fecsdlb", "fr80ssc"],
        b661bw: "f1h0usnq",
        Bk6r4ia: ["fs4ktlq", "fx2bmrt"],
        B9zn80p: "f16h9ulv",
        Bpld233: ["fx2bmrt", "fs4ktlq"]
    },
    secondary: {},
    subtle: {
        De3pzq: "f1c21dwh",
        g2u3we: "f1p3nwhy",
        h3c5rm: ["f11589ue", "f1pdflbu"],
        B9xav0g: "f1q5o8ev",
        zhjwy3: ["f1pdflbu", "f11589ue"],
        Jwef8y: "f9ql6rf",
        Bgoe8wy: "f1s2uweq",
        Bwzppfd: ["fr80ssc", "fecsdlb"],
        oetu4i: "f1ukrpxl",
        gg5e9n: ["fecsdlb", "fr80ssc"],
        iro3zm: "f3h1zc4",
        b661bw: "f1h0usnq",
        Bk6r4ia: ["fs4ktlq", "fx2bmrt"],
        B9zn80p: "f16h9ulv",
        Bpld233: ["fx2bmrt", "fs4ktlq"]
    },
    transparent: {
        De3pzq: "f1c21dwh",
        g2u3we: "f1p3nwhy",
        h3c5rm: ["f11589ue", "f1pdflbu"],
        B9xav0g: "f1q5o8ev",
        zhjwy3: ["f1pdflbu", "f11589ue"],
        Jwef8y: "f9ql6rf",
        Bgoe8wy: "f1s2uweq",
        Bwzppfd: ["fr80ssc", "fecsdlb"],
        oetu4i: "f1ukrpxl",
        gg5e9n: ["fecsdlb", "fr80ssc"],
        iro3zm: "f3h1zc4",
        b661bw: "f1h0usnq",
        Bk6r4ia: ["fs4ktlq", "fx2bmrt"],
        B9zn80p: "f16h9ulv",
        Bpld233: ["fx2bmrt", "fs4ktlq"]
    }
}, {
    d: [".f1bg9a2p{background-color:var(--colorNeutralBackgroundDisabled);}", ".f1jj8ep1{border-top-color:var(--colorNeutralStrokeDisabled);}", ".f15xbau{border-right-color:var(--colorNeutralStrokeDisabled);}", ".fy0fskl{border-left-color:var(--colorNeutralStrokeDisabled);}", ".f4ikngz{border-bottom-color:var(--colorNeutralStrokeDisabled);}", ".f1s2aq7o{color:var(--colorNeutralForegroundDisabled);}", ".fdrzuqr{cursor:not-allowed;}", ".f15x8b5r .fui-Button__icon{color:var(--colorNeutralForegroundDisabled);}", ".f1c21dwh{background-color:var(--colorTransparentBackground);}", ".f1p3nwhy{border-top-color:transparent;}", ".f11589ue{border-right-color:transparent;}", ".f1pdflbu{border-left-color:transparent;}", ".f1q5o8ev{border-bottom-color:transparent;}"],
    h: [".f1falr9n:hover{background-color:var(--colorNeutralBackgroundDisabled);}", ".f12mpcsy:hover{border-top-color:var(--colorNeutralStrokeDisabled);}", ".f1gwvigk:hover{border-right-color:var(--colorNeutralStrokeDisabled);}", ".f18rmfxp:hover{border-left-color:var(--colorNeutralStrokeDisabled);}", ".f1jnshp0:hover{border-bottom-color:var(--colorNeutralStrokeDisabled);}", ".fvgxktp:hover{color:var(--colorNeutralForegroundDisabled);}", ".fphbwmw:hover{cursor:not-allowed;}", ".f19vpps7:hover .fui-Icon-filled{display:none;}", ".fv5swzo:hover .fui-Icon-regular{display:inline;}", ".f1al02dq:hover .fui-Button__icon{color:var(--colorNeutralForegroundDisabled);}", ".f1t6o4dc:hover:active{background-color:var(--colorNeutralBackgroundDisabled);}", ".f10ztigi:hover:active{border-top-color:var(--colorNeutralStrokeDisabled);}", ".f1ft5sdu:hover:active{border-right-color:var(--colorNeutralStrokeDisabled);}", ".f1gzf82w:hover:active{border-left-color:var(--colorNeutralStrokeDisabled);}", ".f12zbtn2:hover:active{border-bottom-color:var(--colorNeutralStrokeDisabled);}", ".fcvwxyo:hover:active{color:var(--colorNeutralForegroundDisabled);}", ".f8w4c43:hover:active{cursor:not-allowed;}", ".f1ol4fw6:hover:active .fui-Icon-filled{display:none;}", ".f1q1lw4e:hover:active .fui-Icon-regular{display:inline;}", ".f1dwjv2g:hover:active .fui-Button__icon{color:var(--colorNeutralForegroundDisabled);}", ".f9ql6rf:hover{background-color:var(--colorTransparentBackground);}", ".f3h1zc4:hover:active{background-color:var(--colorTransparentBackground);}", ".f1s2uweq:hover{border-top-color:transparent;}", ".fr80ssc:hover{border-right-color:transparent;}", ".fecsdlb:hover{border-left-color:transparent;}", ".f1ukrpxl:hover{border-bottom-color:transparent;}", ".f1h0usnq:hover:active{border-top-color:transparent;}", ".fs4ktlq:hover:active{border-right-color:transparent;}", ".fx2bmrt:hover:active{border-left-color:transparent;}", ".f16h9ulv:hover:active{border-bottom-color:transparent;}"],
    m: [["@media (forced-colors: active){.f4lkoma{background-color:ButtonFace;}}", {
        m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.fg455y9{border-top-color:GrayText;}}", {
        m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f14g86mu{border-left-color:GrayText;}.f1rvyvqg{border-right-color:GrayText;}}", {
        m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f1cwzwz{border-bottom-color:GrayText;}}", {
        m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f1dcs8yz{color:GrayText;}}", {
        m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.fjwq6ea:focus{border-top-color:GrayText;}}", {
        m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f1lr3nhc:focus{border-right-color:GrayText;}.f1mbxvi6:focus{border-left-color:GrayText;}}", {
        m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.fn5gmvv:focus{border-bottom-color:GrayText;}}", {
        m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f1vmkb5g:hover{background-color:ButtonFace;}}", {
        m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f53ppgq:hover{border-top-color:GrayText;}}", {
        m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f1663y11:hover{border-right-color:GrayText;}.f80fkiy:hover{border-left-color:GrayText;}}", {
        m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f18v5270:hover{border-bottom-color:GrayText;}}", {
        m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f1kc2mi9:hover{color:GrayText;}}", {
        m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f1y0svfh:hover:active{background-color:ButtonFace;}}", {
        m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.fihuait:hover:active{border-top-color:GrayText;}}", {
        m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.fnxhupq:hover:active{border-right-color:GrayText;}.fyd6l6x:hover:active{border-left-color:GrayText;}}", {
        m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.fx507ft:hover:active{border-bottom-color:GrayText;}}", {
        m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.fb3rf2x:hover:active{color:GrayText;}}", {
        m: "(forced-colors: active)"
    }]]
})
  , jB = U({
    circular: {
        kdpuga: ["fanj13w", "f1gou5sz"],
        Bw81rd7: ["f1gou5sz", "fanj13w"],
        B6xbmo0: ["fulf6x3", "foeb2x"],
        dm238s: ["foeb2x", "fulf6x3"]
    },
    rounded: {},
    square: {
        kdpuga: ["f1ndz5i7", "f1co4qro"],
        Bw81rd7: ["f1co4qro", "f1ndz5i7"],
        B6xbmo0: ["f146y5a9", "f1k2ftg"],
        dm238s: ["f1k2ftg", "f146y5a9"]
    },
    primary: {
        B8q5s1w: "f17t0x8g",
        Bci5o5g: ["f194v5ow", "fk7jm04"],
        n8qw10: "f1qgg65p",
        Bdrgwmp: ["fk7jm04", "f194v5ow"],
        j6ew2k: ["fhgccpy", "fjo7pq6"],
        he4mth: "f32wu9k",
        Byr4aka: "fu5nqqq",
        lks7q5: ["f13prjl2", "f1nl83rv"],
        Bnan3qt: "f1czftr5",
        k1dn9: ["f1nl83rv", "f13prjl2"],
        Boium3a: ["f12k37oa", "fdnykm2"],
        tm8e47: "fr96u23"
    },
    small: {
        kdpuga: ["fg3gtdo", "fwii5mg"],
        Bw81rd7: ["fwii5mg", "fg3gtdo"],
        B6xbmo0: ["f1palphq", "f12nxie7"],
        dm238s: ["f12nxie7", "f1palphq"]
    },
    medium: {},
    large: {
        kdpuga: ["ft3lys4", "f1la4x2g"],
        Bw81rd7: ["f1la4x2g", "ft3lys4"],
        B6xbmo0: ["f156y0zm", "fakimq4"],
        dm238s: ["fakimq4", "f156y0zm"]
    }
}, {
    d: [".fanj13w[data-fui-focus-visible]{border-bottom-right-radius:var(--borderRadiusCircular);}", ".f1gou5sz[data-fui-focus-visible]{border-bottom-left-radius:var(--borderRadiusCircular);}", ".fulf6x3[data-fui-focus-visible]{border-top-right-radius:var(--borderRadiusCircular);}", ".foeb2x[data-fui-focus-visible]{border-top-left-radius:var(--borderRadiusCircular);}", ".f1ndz5i7[data-fui-focus-visible]{border-bottom-right-radius:var(--borderRadiusNone);}", ".f1co4qro[data-fui-focus-visible]{border-bottom-left-radius:var(--borderRadiusNone);}", ".f146y5a9[data-fui-focus-visible]{border-top-right-radius:var(--borderRadiusNone);}", ".f1k2ftg[data-fui-focus-visible]{border-top-left-radius:var(--borderRadiusNone);}", ".f17t0x8g[data-fui-focus-visible]{border-top-color:var(--colorStrokeFocus2);}", ".f194v5ow[data-fui-focus-visible]{border-right-color:var(--colorStrokeFocus2);}", ".fk7jm04[data-fui-focus-visible]{border-left-color:var(--colorStrokeFocus2);}", ".f1qgg65p[data-fui-focus-visible]{border-bottom-color:var(--colorStrokeFocus2);}", ".fhgccpy[data-fui-focus-visible]{box-shadow:var(--shadow2),0 0 0 var(--strokeWidthThin) var(--colorStrokeFocus2) inset,0 0 0 var(--strokeWidthThick) var(--colorNeutralForegroundOnBrand) inset;}", ".fjo7pq6[data-fui-focus-visible]{box-shadow:var(--shadow2),0 0 0 var(--strokeWidthThin) var(--colorStrokeFocus2) inset,0 0 0 var(--strokeWidthThick) var(--colorNeutralForegroundOnBrand) inset;}", ".f32wu9k[data-fui-focus-visible]:hover{box-shadow:var(--shadow2),0 0 0 var(--strokeWidthThin) var(--colorStrokeFocus2) inset;}", ".fu5nqqq[data-fui-focus-visible]:hover{border-top-color:var(--colorStrokeFocus2);}", ".f13prjl2[data-fui-focus-visible]:hover{border-right-color:var(--colorStrokeFocus2);}", ".f1nl83rv[data-fui-focus-visible]:hover{border-left-color:var(--colorStrokeFocus2);}", ".f1czftr5[data-fui-focus-visible]:hover{border-bottom-color:var(--colorStrokeFocus2);}", ".fg3gtdo[data-fui-focus-visible]{border-bottom-right-radius:var(--borderRadiusSmall);}", ".fwii5mg[data-fui-focus-visible]{border-bottom-left-radius:var(--borderRadiusSmall);}", ".f1palphq[data-fui-focus-visible]{border-top-right-radius:var(--borderRadiusSmall);}", ".f12nxie7[data-fui-focus-visible]{border-top-left-radius:var(--borderRadiusSmall);}", ".ft3lys4[data-fui-focus-visible]{border-bottom-right-radius:var(--borderRadiusLarge);}", ".f1la4x2g[data-fui-focus-visible]{border-bottom-left-radius:var(--borderRadiusLarge);}", ".f156y0zm[data-fui-focus-visible]{border-top-right-radius:var(--borderRadiusLarge);}", ".fakimq4[data-fui-focus-visible]{border-top-left-radius:var(--borderRadiusLarge);}"],
    t: ["@supports (-moz-appearance:button){.f12k37oa[data-fui-focus-visible]{box-shadow:var(--shadow2),0 0 0 calc(var(--strokeWidthThin) + 0.25px) var(--colorStrokeFocus2) inset,0 0 0 var(--strokeWidthThick) var(--colorNeutralForegroundOnBrand) inset;}.fdnykm2[data-fui-focus-visible]{box-shadow:var(--shadow2),0 0 0 calc(var(--strokeWidthThin) + 0.25px) var(--colorStrokeFocus2) inset,0 0 0 var(--strokeWidthThick) var(--colorNeutralForegroundOnBrand) inset;}}", "@supports (-moz-appearance:button){.fr96u23[data-fui-focus-visible]:hover{box-shadow:var(--shadow2),0 0 0 calc(var(--strokeWidthThin) + 0.25px) var(--colorStrokeFocus2) inset;}}"]
})
  , IB = U({
    small: {
        z8tnut: "f1sl3k7w",
        z189sj: ["f136y8j8", "f10xn8zz"],
        Byoj8tv: "f1brlhvm",
        uwmqm3: ["f10xn8zz", "f136y8j8"],
        Bf4jedk: "f17fgpbq",
        B2u0y6b: "f1jt17bm"
    },
    medium: {
        z8tnut: "f1sbtcvk",
        z189sj: ["fwiuce9", "f15vdbe4"],
        Byoj8tv: "fdghr9",
        uwmqm3: ["f15vdbe4", "fwiuce9"],
        Bf4jedk: "fwbmr0d",
        B2u0y6b: "f44c6la"
    },
    large: {
        z8tnut: "f1a1bwwz",
        z189sj: ["f18k1jr3", "f1rtp3s9"],
        Byoj8tv: "fy7v416",
        uwmqm3: ["f1rtp3s9", "f18k1jr3"],
        Bf4jedk: "f12clzc2",
        B2u0y6b: "fjy1crr"
    }
}, {
    d: [".f1sl3k7w{padding-top:1px;}", ".f136y8j8{padding-right:1px;}", ".f10xn8zz{padding-left:1px;}", ".f1brlhvm{padding-bottom:1px;}", ".f17fgpbq{min-width:24px;}", ".f1jt17bm{max-width:24px;}", ".f1sbtcvk{padding-top:5px;}", ".fwiuce9{padding-right:5px;}", ".f15vdbe4{padding-left:5px;}", ".fdghr9{padding-bottom:5px;}", ".fwbmr0d{min-width:32px;}", ".f44c6la{max-width:32px;}", ".f1a1bwwz{padding-top:7px;}", ".f18k1jr3{padding-right:7px;}", ".f1rtp3s9{padding-left:7px;}", ".fy7v416{padding-bottom:7px;}", ".f12clzc2{min-width:40px;}", ".fjy1crr{max-width:40px;}"]
})
  , AB = U({
    small: {
        Be2twd7: "fe5j1ua",
        Bqenvij: "fjamq6b",
        a9b677: "f64fuq3",
        Bqrlyyl: "fbaiahx"
    },
    medium: {},
    large: {
        Be2twd7: "f1rt2boy",
        Bqenvij: "frvgh55",
        a9b677: "fq4mcun",
        Bqrlyyl: "f1exjqw5"
    },
    before: {
        t21cq0: ["f1nizpg2", "f1a695kz"]
    },
    after: {
        Frg6f3: ["f1a695kz", "f1nizpg2"]
    }
}, {
    d: [".fe5j1ua{font-size:20px;}", ".fjamq6b{height:20px;}", ".f64fuq3{width:20px;}", ".fbaiahx{--fui-Button__icon--spacing:var(--spacingHorizontalXS);}", ".f1rt2boy{font-size:24px;}", ".frvgh55{height:24px;}", ".fq4mcun{width:24px;}", ".f1exjqw5{--fui-Button__icon--spacing:var(--spacingHorizontalSNudge);}", ".f1nizpg2{margin-right:var(--fui-Button__icon--spacing);}", ".f1a695kz{margin-left:var(--fui-Button__icon--spacing);}"]
})
  , OB = e=>{
    const t = zB()
      , r = FB()
      , o = RB()
      , n = DB()
      , i = jB()
      , a = IB()
      , s = AB()
      , {appearance: l, disabled: u, disabledFocusable: d, icon: c, iconOnly: f, iconPosition: h, shape: p, size: m} = e;
    return e.root.className = W(th.root, t, l && o[l], o[m], c && m === "small" && o.smallWithIcon, c && m === "large" && o.largeWithIcon, o[p], (u || d) && n.base, (u || d) && n.highContrast, l && (u || d) && n[l], l === "primary" && i.primary, i[m], i[p], f && a[m], e.root.className),
    e.icon && (e.icon.className = W(th.icon, r, !!e.root.children && s[h], s[m], e.icon.className)),
    e
}
  , jt = b.forwardRef((e,t)=>{
    const r = NB(e, t);
    return OB(r),
    Fe("useButtonStyles_unstable")(r),
    PB(r)
}
);
jt.displayName = "Button";
const F0 = b.createContext(void 0);
F0.Provider;
const LB = ()=>b.useContext(F0);
function MB(e, t) {
    return qB(LB(), e, t)
}
function qB(e, t, r) {
    if (!e)
        return t;
    t = {
        ...t
    };
    const {generatedControlId: o, hintId: n, labelFor: i, labelId: a, required: s, validationMessageId: l, validationState: u} = e;
    if (o) {
        var d, c;
        (c = (d = t).id) !== null && c !== void 0 || (d.id = o)
    }
    if (a && (!(r != null && r.supportsLabelFor) || i !== t.id)) {
        var f, h, p;
        (p = (f = t)[h = "aria-labelledby"]) !== null && p !== void 0 || (f[h] = a)
    }
    if ((l || n) && (t["aria-describedby"] = [l, n, t == null ? void 0 : t["aria-describedby"]].filter(Boolean).join(" ")),
    u === "error") {
        var m, w, v;
        (v = (m = t)[w = "aria-invalid"]) !== null && v !== void 0 || (m[w] = !0)
    }
    if (s)
        if (r != null && r.supportsRequired) {
            var g, y;
            (y = (g = t).required) !== null && y !== void 0 || (g.required = !0)
        } else {
            var x, S, _;
            (_ = (x = t)[S = "aria-required"]) !== null && _ !== void 0 || (x[S] = !0)
        }
    if (r != null && r.supportsSize) {
        var k, E;
        (E = (k = t).size) !== null && E !== void 0 || (k.size = e.size)
    }
    return t
}
const HB = (e,t)=>{
    const {disabled: r=!1, required: o=!1, weight: n="regular", size: i="medium"} = e;
    return {
        disabled: r,
        required: He(o === !0 ? "*" : o || void 0, {
            defaultProps: {
                "aria-hidden": "true"
            },
            elementType: "span"
        }),
        weight: n,
        size: i,
        components: {
            root: "label",
            required: "span"
        },
        root: pe(Oe("label", {
            ref: t,
            ...e
        }), {
            elementType: "label"
        })
    }
}
  , WB = e=>ut(e.root, {
    children: [e.root.children, e.required && q(e.required, {})]
})
  , rh = {
    root: "fui-Label",
    required: "fui-Label__required"
}
  , $B = U({
    root: {
        Bahqtrf: "fk6fouc",
        sj55zd: "f19n0e5"
    },
    disabled: {
        sj55zd: "f1s2aq7o"
    },
    required: {
        sj55zd: "f1whyuy6",
        uwmqm3: ["fycuoez", "f8wuabp"]
    },
    requiredDisabled: {
        sj55zd: "f1s2aq7o"
    },
    small: {
        Be2twd7: "fy9rknc",
        Bg96gwp: "fwrc4pm"
    },
    medium: {
        Be2twd7: "fkhj508",
        Bg96gwp: "f1i3iumi"
    },
    large: {
        Be2twd7: "fod5ikn",
        Bg96gwp: "faaz57k",
        Bhrd7zp: "fl43uef"
    },
    semibold: {
        Bhrd7zp: "fl43uef"
    }
}, {
    d: [".fk6fouc{font-family:var(--fontFamilyBase);}", ".f19n0e5{color:var(--colorNeutralForeground1);}", ".f1s2aq7o{color:var(--colorNeutralForegroundDisabled);}", ".f1whyuy6{color:var(--colorPaletteRedForeground3);}", ".fycuoez{padding-left:4px;}", ".f8wuabp{padding-right:4px;}", ".fy9rknc{font-size:var(--fontSizeBase200);}", ".fwrc4pm{line-height:var(--lineHeightBase200);}", ".fkhj508{font-size:var(--fontSizeBase300);}", ".f1i3iumi{line-height:var(--lineHeightBase300);}", ".fod5ikn{font-size:var(--fontSizeBase400);}", ".faaz57k{line-height:var(--lineHeightBase400);}", ".fl43uef{font-weight:var(--fontWeightSemibold);}"]
})
  , UB = e=>{
    const t = $B();
    return e.root.className = W(rh.root, t.root, e.disabled && t.disabled, t[e.size], e.weight === "semibold" && t.semibold, e.root.className),
    e.required && (e.required.className = W(rh.required, t.required, e.disabled && t.requiredDisabled, e.required.className)),
    e
}
  , rc = b.forwardRef((e,t)=>{
    const r = HB(e, t);
    return UB(r),
    Fe("useLabelStyles_unstable")(r),
    WB(r)
}
);
rc.displayName = "Label";
const VB = (e,t)=>{
    e = MB(e, {
        supportsLabelFor: !0,
        supportsRequired: !0,
        supportsSize: !0
    });
    const r = Cm();
    var o;
    const {size: n="medium", appearance: i=(o = r.inputDefaultAppearance) !== null && o !== void 0 ? o : "outline", onChange: a} = e
      , [s,l] = js({
        state: e.value,
        defaultState: e.defaultValue,
        initialState: ""
    })
      , u = qx({
        props: e,
        primarySlotTagName: "input",
        excludedPropNames: ["size", "onChange", "value", "defaultValue"]
    })
      , d = {
        size: n,
        appearance: i,
        components: {
            root: "span",
            input: "input",
            contentBefore: "span",
            contentAfter: "span"
        },
        input: pe(e.input, {
            defaultProps: {
                type: "text",
                ref: t,
                ...u.primary
            },
            elementType: "input"
        }),
        contentAfter: He(e.contentAfter, {
            elementType: "span"
        }),
        contentBefore: He(e.contentBefore, {
            elementType: "span"
        }),
        root: pe(e.root, {
            defaultProps: u.root,
            elementType: "span"
        })
    };
    return d.input.value = s,
    d.input.onChange = ot(c=>{
        const f = c.target.value;
        a == null || a(c, {
            value: f
        }),
        l(f)
    }
    ),
    d
}
  , GB = e=>ut(e.root, {
    children: [e.contentBefore && q(e.contentBefore, {}), q(e.input, {}), e.contentAfter && q(e.contentAfter, {})]
})
  , oa = {
    root: "fui-Input",
    input: "fui-Input__input",
    contentBefore: "fui-Input__contentBefore",
    contentAfter: "fui-Input__contentAfter"
}
  , KB = Ce("r1jtohuq", "rl1z2p5", {
    r: [".r1jtohuq{display:inline-flex;align-items:center;flex-wrap:nowrap;gap:var(--spacingHorizontalXXS);border-radius:var(--borderRadiusMedium);position:relative;box-sizing:border-box;min-height:32px;padding:0 var(--spacingHorizontalMNudge);font-family:var(--fontFamilyBase);font-size:var(--fontSizeBase300);font-weight:var(--fontWeightRegular);line-height:var(--lineHeightBase300);background-color:var(--colorNeutralBackground1);border:1px solid var(--colorNeutralStroke1);border-bottom-color:var(--colorNeutralStrokeAccessible);}", '.r1jtohuq::after{box-sizing:border-box;content:"";position:absolute;left:-1px;bottom:-1px;right:-1px;height:max(2px, var(--borderRadiusMedium));border-bottom-left-radius:var(--borderRadiusMedium);border-bottom-right-radius:var(--borderRadiusMedium);border-bottom:2px solid var(--colorCompoundBrandStroke);clip-path:inset(calc(100% - 2px) 0 0 0);transform:scaleX(0);transition-property:transform;transition-duration:var(--durationUltraFast);transition-delay:var(--curveAccelerateMid);}', ".r1jtohuq:focus-within::after{transform:scaleX(1);transition-property:transform;transition-duration:var(--durationNormal);transition-delay:var(--curveDecelerateMid);}", ".r1jtohuq:focus-within:active::after{border-bottom-color:var(--colorCompoundBrandStrokePressed);}", ".r1jtohuq:focus-within{outline:2px solid transparent;}", ".rl1z2p5{display:inline-flex;align-items:center;flex-wrap:nowrap;gap:var(--spacingHorizontalXXS);border-radius:var(--borderRadiusMedium);position:relative;box-sizing:border-box;min-height:32px;padding:0 var(--spacingHorizontalMNudge);font-family:var(--fontFamilyBase);font-size:var(--fontSizeBase300);font-weight:var(--fontWeightRegular);line-height:var(--lineHeightBase300);background-color:var(--colorNeutralBackground1);border:1px solid var(--colorNeutralStroke1);border-bottom-color:var(--colorNeutralStrokeAccessible);}", '.rl1z2p5::after{box-sizing:border-box;content:"";position:absolute;right:-1px;bottom:-1px;left:-1px;height:max(2px, var(--borderRadiusMedium));border-bottom-right-radius:var(--borderRadiusMedium);border-bottom-left-radius:var(--borderRadiusMedium);border-bottom:2px solid var(--colorCompoundBrandStroke);clip-path:inset(calc(100% - 2px) 0 0 0);transform:scaleX(0);transition-property:transform;transition-duration:var(--durationUltraFast);transition-delay:var(--curveAccelerateMid);}', ".rl1z2p5:focus-within::after{transform:scaleX(1);transition-property:transform;transition-duration:var(--durationNormal);transition-delay:var(--curveDecelerateMid);}", ".rl1z2p5:focus-within:active::after{border-bottom-color:var(--colorCompoundBrandStrokePressed);}", ".rl1z2p5:focus-within{outline:2px solid transparent;}"],
    s: ["@media screen and (prefers-reduced-motion: reduce){.r1jtohuq::after{transition-duration:0.01ms;transition-delay:0.01ms;}}", "@media screen and (prefers-reduced-motion: reduce){.r1jtohuq:focus-within::after{transition-duration:0.01ms;transition-delay:0.01ms;}}", "@media screen and (prefers-reduced-motion: reduce){.rl1z2p5::after{transition-duration:0.01ms;transition-delay:0.01ms;}}", "@media screen and (prefers-reduced-motion: reduce){.rl1z2p5:focus-within::after{transition-duration:0.01ms;transition-delay:0.01ms;}}"]
})
  , XB = U({
    small: {
        sshi5w: "f1pha7fy",
        uwmqm3: ["fk8j09s", "fdw0yi8"],
        z189sj: ["fdw0yi8", "fk8j09s"],
        Bahqtrf: "fk6fouc",
        Be2twd7: "fy9rknc",
        Bhrd7zp: "figsok6",
        Bg96gwp: "fwrc4pm"
    },
    medium: {},
    large: {
        sshi5w: "f1w5jphr",
        uwmqm3: ["f1uw59to", "fw5db7e"],
        z189sj: ["fw5db7e", "f1uw59to"],
        Bahqtrf: "fk6fouc",
        Be2twd7: "fod5ikn",
        Bhrd7zp: "figsok6",
        Bg96gwp: "faaz57k",
        i8kkvl: "f1rjii52",
        Belr9w4: "f1r7g2jn"
    },
    outline: {},
    outlineInteractive: {
        Bgoe8wy: "fvcxoqz",
        Bwzppfd: ["f1ub3y4t", "f1m52nbi"],
        oetu4i: "f1l4zc64",
        gg5e9n: ["f1m52nbi", "f1ub3y4t"],
        Drbcw7: "f8vnjqi",
        udz0bu: ["fz1etlk", "f1hc16gm"],
        Be8ivqh: "f1klwx88",
        ofdepl: ["f1hc16gm", "fz1etlk"]
    },
    underline: {
        De3pzq: "f1c21dwh",
        Bbmb7ep: ["f1krrbdw", "f1deotkl"],
        Beyfa6y: ["f1deotkl", "f1krrbdw"],
        B7oj6ja: ["f10ostut", "f1ozlkrg"],
        Btl43ni: ["f1ozlkrg", "f10ostut"],
        icvyot: "f1ern45e",
        vrafjx: ["f1n71otn", "f1deefiw"],
        wvpqe5: ["f1deefiw", "f1n71otn"],
        Eqx8gd: ["f1n6gb5g", "f15yvnhg"],
        B1piin3: ["f15yvnhg", "f1n6gb5g"]
    },
    underlineInteractive: {
        oetu4i: "f1l4zc64",
        Be8ivqh: "f1klwx88",
        B3778ie: ["f1nf3wye", "feulmo5"],
        d9w3h3: ["feulmo5", "f1nf3wye"],
        Bl18szs: ["f18vqdqu", "f53nyzz"],
        B4j8arr: ["f53nyzz", "f18vqdqu"]
    },
    filled: {
        g2u3we: "fghlq4f",
        h3c5rm: ["f1gn591s", "fjscplz"],
        B9xav0g: "fb073pr",
        zhjwy3: ["fjscplz", "f1gn591s"]
    },
    filledInteractive: {
        q7v0qe: "ftmjh5b",
        kmh5ft: ["f17blpuu", "fsrcdbj"],
        nagaa4: "f1tpwn32",
        B1yhkcb: ["fsrcdbj", "f17blpuu"]
    },
    invalid: {
        tvckwq: "fs4k3qj",
        gk2u95: ["fcee079", "fmyw78r"],
        hhx65j: "f1fgmyf4",
        Bxowmz0: ["fmyw78r", "fcee079"]
    },
    "filled-darker": {
        De3pzq: "f16xq7d1"
    },
    "filled-lighter": {
        De3pzq: "fxugw4r"
    },
    "filled-darker-shadow": {
        De3pzq: "f16xq7d1",
        E5pizo: "fyed02w"
    },
    "filled-lighter-shadow": {
        De3pzq: "fxugw4r",
        E5pizo: "fyed02w"
    },
    disabled: {
        Bceei9c: "fdrzuqr",
        De3pzq: "f1c21dwh",
        g2u3we: "f1jj8ep1",
        h3c5rm: ["f15xbau", "fy0fskl"],
        B9xav0g: "f4ikngz",
        zhjwy3: ["fy0fskl", "f15xbau"],
        Bjwas2f: "fg455y9",
        Bn1d65q: ["f1rvyvqg", "f14g86mu"],
        Bxeuatn: "f1cwzwz",
        n51gp8: ["f14g86mu", "f1rvyvqg"],
        Bsft5z2: "fhr9occ",
        Bduesf4: "f99w1ws"
    }
}, {
    d: [".f1pha7fy{min-height:24px;}", ".fk8j09s{padding-left:var(--spacingHorizontalSNudge);}", ".fdw0yi8{padding-right:var(--spacingHorizontalSNudge);}", ".fk6fouc{font-family:var(--fontFamilyBase);}", ".fy9rknc{font-size:var(--fontSizeBase200);}", ".figsok6{font-weight:var(--fontWeightRegular);}", ".fwrc4pm{line-height:var(--lineHeightBase200);}", ".f1w5jphr{min-height:40px;}", ".f1uw59to{padding-left:var(--spacingHorizontalM);}", ".fw5db7e{padding-right:var(--spacingHorizontalM);}", ".fod5ikn{font-size:var(--fontSizeBase400);}", ".faaz57k{line-height:var(--lineHeightBase400);}", ".f1rjii52{column-gap:var(--spacingHorizontalSNudge);}", ".f1r7g2jn{row-gap:var(--spacingHorizontalSNudge);}", ".f1c21dwh{background-color:var(--colorTransparentBackground);}", ".f1krrbdw{border-bottom-right-radius:0;}", ".f1deotkl{border-bottom-left-radius:0;}", ".f10ostut{border-top-right-radius:0;}", ".f1ozlkrg{border-top-left-radius:0;}", ".f1ern45e{border-top-style:none;}", ".f1n71otn{border-right-style:none;}", ".f1deefiw{border-left-style:none;}", ".f1n6gb5g::after{left:0;}", ".f15yvnhg::after{right:0;}", ".f1nf3wye::after{border-bottom-right-radius:0;}", ".feulmo5::after{border-bottom-left-radius:0;}", ".f18vqdqu::after{border-top-right-radius:0;}", ".f53nyzz::after{border-top-left-radius:0;}", ".fghlq4f{border-top-color:var(--colorTransparentStroke);}", ".f1gn591s{border-right-color:var(--colorTransparentStroke);}", ".fjscplz{border-left-color:var(--colorTransparentStroke);}", ".fb073pr{border-bottom-color:var(--colorTransparentStroke);}", ".fs4k3qj:not(:focus-within),.fs4k3qj:hover:not(:focus-within){border-top-color:var(--colorPaletteRedBorder2);}", ".fcee079:not(:focus-within),.fcee079:hover:not(:focus-within){border-right-color:var(--colorPaletteRedBorder2);}", ".fmyw78r:not(:focus-within),.fmyw78r:hover:not(:focus-within){border-left-color:var(--colorPaletteRedBorder2);}", ".f1fgmyf4:not(:focus-within),.f1fgmyf4:hover:not(:focus-within){border-bottom-color:var(--colorPaletteRedBorder2);}", ".f16xq7d1{background-color:var(--colorNeutralBackground3);}", ".fxugw4r{background-color:var(--colorNeutralBackground1);}", ".fyed02w{box-shadow:var(--shadow2);}", ".fdrzuqr{cursor:not-allowed;}", ".f1jj8ep1{border-top-color:var(--colorNeutralStrokeDisabled);}", ".f15xbau{border-right-color:var(--colorNeutralStrokeDisabled);}", ".fy0fskl{border-left-color:var(--colorNeutralStrokeDisabled);}", ".f4ikngz{border-bottom-color:var(--colorNeutralStrokeDisabled);}", ".fhr9occ::after{content:unset;}"],
    h: [".fvcxoqz:hover{border-top-color:var(--colorNeutralStroke1Hover);}", ".f1ub3y4t:hover{border-right-color:var(--colorNeutralStroke1Hover);}", ".f1m52nbi:hover{border-left-color:var(--colorNeutralStroke1Hover);}", ".f1l4zc64:hover{border-bottom-color:var(--colorNeutralStrokeAccessibleHover);}", ".ftmjh5b:hover,.ftmjh5b:focus-within{border-top-color:var(--colorTransparentStrokeInteractive);}", ".f17blpuu:hover,.f17blpuu:focus-within{border-right-color:var(--colorTransparentStrokeInteractive);}", ".fsrcdbj:hover,.fsrcdbj:focus-within{border-left-color:var(--colorTransparentStrokeInteractive);}", ".f1tpwn32:hover,.f1tpwn32:focus-within{border-bottom-color:var(--colorTransparentStrokeInteractive);}"],
    a: [".f8vnjqi:active,.f8vnjqi:focus-within{border-top-color:var(--colorNeutralStroke1Pressed);}", ".fz1etlk:active,.fz1etlk:focus-within{border-right-color:var(--colorNeutralStroke1Pressed);}", ".f1hc16gm:active,.f1hc16gm:focus-within{border-left-color:var(--colorNeutralStroke1Pressed);}", ".f1klwx88:active,.f1klwx88:focus-within{border-bottom-color:var(--colorNeutralStrokeAccessiblePressed);}"],
    m: [["@media (forced-colors: active){.fg455y9{border-top-color:GrayText;}}", {
        m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f14g86mu{border-left-color:GrayText;}.f1rvyvqg{border-right-color:GrayText;}}", {
        m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f1cwzwz{border-bottom-color:GrayText;}}", {
        m: "(forced-colors: active)"
    }]],
    w: [".f99w1ws:focus-within{outline-style:none;}"]
})
  , QB = Ce("rvp2gzh", null, [".rvp2gzh{box-sizing:border-box;flex-grow:1;min-width:0;border-style:none;padding:0 var(--spacingHorizontalXXS);color:var(--colorNeutralForeground1);background-color:transparent;outline-style:none;font-family:inherit;font-size:inherit;font-weight:inherit;line-height:inherit;}", ".rvp2gzh::-webkit-input-placeholder{color:var(--colorNeutralForeground4);opacity:1;}", ".rvp2gzh::-moz-placeholder{color:var(--colorNeutralForeground4);opacity:1;}", ".rvp2gzh:-ms-input-placeholder{color:var(--colorNeutralForeground4);opacity:1;}", ".rvp2gzh::placeholder{color:var(--colorNeutralForeground4);opacity:1;}"])
  , JB = U({
    large: {
        uwmqm3: ["fk8j09s", "fdw0yi8"],
        z189sj: ["fdw0yi8", "fk8j09s"]
    },
    disabled: {
        sj55zd: "f1s2aq7o",
        De3pzq: "f1c21dwh",
        Bceei9c: "fdrzuqr",
        yvdlaj: "fahhnxm"
    }
}, {
    d: [".fk8j09s{padding-left:var(--spacingHorizontalSNudge);}", ".fdw0yi8{padding-right:var(--spacingHorizontalSNudge);}", ".f1s2aq7o{color:var(--colorNeutralForegroundDisabled);}", ".f1c21dwh{background-color:var(--colorTransparentBackground);}", ".fdrzuqr{cursor:not-allowed;}", ".fahhnxm::-webkit-input-placeholder{color:var(--colorNeutralForegroundDisabled);}", ".fahhnxm::-moz-placeholder{color:var(--colorNeutralForegroundDisabled);}"]
})
  , YB = Ce("r1572tok", null, [".r1572tok{box-sizing:border-box;color:var(--colorNeutralForeground3);display:flex;}", ".r1572tok>svg{font-size:20px;}"])
  , ZB = U({
    disabled: {
        sj55zd: "f1s2aq7o"
    },
    small: {
        kwki1k: "f3u2cy0"
    },
    medium: {},
    large: {
        kwki1k: "fa420co"
    }
}, {
    d: [".f1s2aq7o{color:var(--colorNeutralForegroundDisabled);}", ".f3u2cy0>svg{font-size:16px;}", ".fa420co>svg{font-size:24px;}"]
})
  , e3 = e=>{
    const {size: t, appearance: r} = e
      , o = e.input.disabled
      , n = `${e.input["aria-invalid"]}` == "true"
      , i = r.startsWith("filled")
      , a = XB()
      , s = JB()
      , l = ZB();
    e.root.className = W(oa.root, KB(), a[t], a[r], !o && r === "outline" && a.outlineInteractive, !o && r === "underline" && a.underlineInteractive, !o && i && a.filledInteractive, i && a.filled, !o && n && a.invalid, o && a.disabled, e.root.className),
    e.input.className = W(oa.input, QB(), t === "large" && s.large, o && s.disabled, e.input.className);
    const u = [YB(), o && l.disabled, l[t]];
    return e.contentBefore && (e.contentBefore.className = W(oa.contentBefore, ...u, e.contentBefore.className)),
    e.contentAfter && (e.contentAfter.className = W(oa.contentAfter, ...u, e.contentAfter.className)),
    e
}
  , Dd = b.forwardRef((e,t)=>{
    const r = VB(e, t);
    return e3(r),
    Fe("useInputStyles_unstable")(r),
    GB(r)
}
);
Dd.displayName = "Input";
const t3 = ()=>b.createElement("svg", {
    className: "fui-Spinner__Progressbar"
}, b.createElement("circle", {
    className: "fui-Spinner__Track"
}), b.createElement("circle", {
    className: "fui-Spinner__Tail"
}))
  , R0 = b.createContext(void 0)
  , r3 = {};
R0.Provider;
const o3 = ()=>{
    var e;
    return (e = b.useContext(R0)) !== null && e !== void 0 ? e : r3
}
  , n3 = (e,t)=>{
    const {size: r} = o3()
      , {appearance: o="primary", labelPosition: n="after", size: i=r ?? "medium", delay: a=0} = e
      , s = pn("spinner")
      , {role: l="progressbar", tabIndex: u, ...d} = e
      , c = pe(Oe("div", {
        ref: t,
        role: l,
        ...d
    }, ["size"]), {
        elementType: "div"
    })
      , [f,h] = b.useState(!0)
      , [p,m] = Ya();
    b.useEffect(()=>{
        if (!(a <= 0))
            return h(!1),
            p(()=>{
                h(!0)
            }
            , a),
            ()=>{
                m()
            }
    }
    , [p, m, a]);
    const w = He(e.label, {
        defaultProps: {
            id: s
        },
        renderByDefault: !1,
        elementType: rc
    })
      , v = He(e.spinner, {
        renderByDefault: !0,
        defaultProps: {
            children: b.createElement(t3, null),
            tabIndex: u
        },
        elementType: "span"
    });
    return w && c && !c["aria-labelledby"] && (c["aria-labelledby"] = w.id),
    {
        appearance: o,
        delay: a,
        labelPosition: n,
        size: i,
        shouldRenderSpinner: f,
        components: {
            root: "div",
            spinner: "span",
            label: rc
        },
        root: c,
        spinner: v,
        label: w
    }
}
  , i3 = e=>{
    const {labelPosition: t, shouldRenderSpinner: r} = e;
    return ut(e.root, {
        children: [e.label && r && (t === "above" || t === "before") && q(e.label, {}), e.spinner && r && q(e.spinner, {}), e.label && r && (t === "below" || t === "after") && q(e.label, {})]
    })
}
  , Ml = {
    root: "fui-Spinner",
    spinner: "fui-Spinner__spinner",
    label: "fui-Spinner__label"
}
  , a3 = U({
    root: {
        mc9l5x: "f22iagw",
        Bt984gj: "f122n59",
        Brf1p80: "f4d9j23",
        Bg96gwp: "fez10in",
        i8kkvl: "f4px1ci",
        Belr9w4: "fn67r4l"
    },
    horizontal: {
        Beiy3e4: "f1063pyq"
    },
    vertical: {
        Beiy3e4: "f1vx9l62"
    }
}, {
    d: [".f22iagw{display:flex;}", ".f122n59{align-items:center;}", ".f4d9j23{justify-content:center;}", ".fez10in{line-height:0;}", ".f4px1ci{column-gap:8px;}", ".fn67r4l{row-gap:8px;}", ".f1063pyq{flex-direction:row;}", ".f1vx9l62{flex-direction:column;}"]
})
  , s3 = U({
    spinnerSVG: {
        B3aqqti: "f1or16p5",
        Brovlpu: "f1grzc83",
        Bxa1mx5: "f19shzzi",
        Bwaue66: ["f5tbecn", "f15qb8s7"],
        fyp1ls: "fn4mtlg",
        ag6ruv: "f1y80fxs",
        osj692: "f1r2crtq",
        aq5vjd: "f1wsi8sr",
        tlu9e1: "f1bkm2qd",
        J3u96z: "f1urqz7h",
        d32isg: "f1da2vov",
        Bsvqbuc: "f11rfva0",
        b3s3i5: "f1exc66"
    },
    "extra-tiny": {
        Bah9ito: "f1x2gjcb",
        ut6tcf: "f1vjiaua",
        B7p06xz: "fv1u54w",
        B807ibg: "f1oebb0s"
    },
    tiny: {
        Bah9ito: "f1j4wmu2",
        ut6tcf: "f1vppzuq",
        B7p06xz: "fv1u54w",
        B807ibg: "fngtx1d"
    },
    "extra-small": {
        Bah9ito: "fmpqlna",
        ut6tcf: "f15z5jzu",
        B7p06xz: "fv1u54w",
        B807ibg: "fadawes"
    },
    small: {
        Bah9ito: "fo52gbo",
        ut6tcf: "f1b41i3v",
        B7p06xz: "fv1u54w",
        B807ibg: "f1xqyyrl"
    },
    medium: {
        Bah9ito: "f1aiqagr",
        ut6tcf: "f1wtx80b",
        B7p06xz: "f1flujpd",
        B807ibg: "f1u06hy7"
    },
    large: {
        Bah9ito: "f1trdq7b",
        ut6tcf: "f9e0mc5",
        B7p06xz: "f1flujpd",
        B807ibg: "f13pmvhl"
    },
    "extra-large": {
        Bah9ito: "f89rf2a",
        ut6tcf: "f1w2xg3q",
        B7p06xz: "f1flujpd",
        B807ibg: "fmn74v6"
    },
    huge: {
        Bah9ito: "f1rx7k5y",
        ut6tcf: "f1vtyt49",
        B7p06xz: "f1owbg48",
        B807ibg: "f1fr1izd"
    }
}, {
    f: [".f1or16p5:focus{outline-width:3px;}", ".f1grzc83:focus{outline-style:solid;}", ".f19shzzi:focus{outline-color:transparent;}"],
    k: ["@keyframes fb7n1on{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}", "@keyframes f1gx3jof{0%{transform:rotate(0deg);}100%{transform:rotate(-360deg);}}"],
    d: [".f5tbecn>svg{animation-name:fb7n1on;}", ".f15qb8s7>svg{animation-name:f1gx3jof;}", ".fn4mtlg>svg{animation-duration:3s;}", ".f1y80fxs>svg{animation-iteration-count:infinite;}", ".f1r2crtq>svg{animation-timing-function:linear;}", ".f1wsi8sr>svg{background-color:transparent;}", ".f1da2vov>svg>circle{cx:50%;}", ".f11rfva0>svg>circle{cy:50%;}", ".f1exc66>svg>circle{fill:none;}", ".f1x2gjcb>svg{height:16px;}", ".f1vjiaua>svg{width:16px;}", ".fv1u54w>svg>circle{stroke-width:var(--strokeWidthThick);}", ".f1oebb0s>svg>circle{r:7px;}", ".f1j4wmu2>svg{height:20px;}", ".f1vppzuq>svg{width:20px;}", ".fngtx1d>svg>circle{r:9px;}", ".fmpqlna>svg{height:24px;}", ".f15z5jzu>svg{width:24px;}", ".fadawes>svg>circle{r:11px;}", ".fo52gbo>svg{height:28px;}", ".f1b41i3v>svg{width:28px;}", ".f1xqyyrl>svg>circle{r:13px;}", ".f1aiqagr>svg{height:32px;}", ".f1wtx80b>svg{width:32px;}", ".f1flujpd>svg>circle{stroke-width:var(--strokeWidthThicker);}", ".f1u06hy7>svg>circle{r:14.5px;}", ".f1trdq7b>svg{height:36px;}", ".f9e0mc5>svg{width:36px;}", ".f13pmvhl>svg>circle{r:16.5px;}", ".f89rf2a>svg{height:40px;}", ".f1w2xg3q>svg{width:40px;}", ".fmn74v6>svg>circle{r:18.5px;}", ".f1rx7k5y>svg{height:44px;}", ".f1vtyt49>svg{width:44px;}", ".f1owbg48>svg>circle{stroke-width:var(--strokeWidthThickest);}", ".f1fr1izd>svg>circle{r:20px;}"],
    m: [["@media screen and (prefers-reduced-motion: reduce){.f1bkm2qd>svg{animation-duration:0.01ms;}}", {
        m: "screen and (prefers-reduced-motion: reduce)"
    }], ["@media screen and (prefers-reduced-motion: reduce){.f1urqz7h>svg{animation-iteration-count:1;}}", {
        m: "screen and (prefers-reduced-motion: reduce)"
    }]]
})
  , l3 = U({
    inverted: {
        gwg7kz: "f1jvpmnu",
        Bvrehnu: "fq8a5sv",
        Bidp6o: "f1b4lwqj",
        cq3kgi: "f1najlst",
        Btwiser: "fjxod4",
        B8001xd: "fu3xdw0",
        Bdordwa: ["f1ttdh6v", "fmyjox0"],
        Bo2mdfu: "f1eseayc",
        E10nrc: "folzdkc",
        Bwl7w15: "fhlfkde",
        Bksq7rz: "f1esql28"
    },
    primary: {
        gwg7kz: "f11ditju",
        B8k2rxp: "f1m9nikz",
        Bvrehnu: "fq8a5sv",
        Bidp6o: "f1b4lwqj",
        cq3kgi: "f1najlst",
        Btwiser: "fjxod4",
        B8001xd: "fu3xdw0",
        Bdordwa: ["f1ttdh6v", "fmyjox0"],
        Bo2mdfu: "f1eseayc",
        E10nrc: "folzdkc",
        Bwl7w15: "fhlfkde",
        Bksq7rz: "f13qeqtg",
        y14cdu: "flglbw1"
    }
}, {
    d: [".f1jvpmnu>svg>circle.fui-Spinner__Tail{stroke:var(--colorNeutralStrokeOnBrand2);}", ".fq8a5sv>svg>circle.fui-Spinner__Tail{animation-name:f1v1ql0f;}", ".f1b4lwqj>svg>circle.fui-Spinner__Tail{animation-duration:1.5s;}", ".f1najlst>svg>circle.fui-Spinner__Tail{animation-iteration-count:infinite;}", ".fjxod4>svg>circle.fui-Spinner__Tail{animation-timing-function:var(--curveEasyEase);}", ".fu3xdw0>svg>circle.fui-Spinner__Tail{stroke-linecap:round;}", ".f1ttdh6v>svg>circle.fui-Spinner__Tail{transform:rotate(-90deg);}", ".fmyjox0>svg>circle.fui-Spinner__Tail{transform:rotate(90deg);}", ".f1eseayc>svg>circle.fui-Spinner__Tail{transform-origin:50% 50%;}", ".f1esql28>svg>circle.fui-Spinner__Track{stroke:rgba(255, 255, 255, 0.2);}", ".f11ditju>svg>circle.fui-Spinner__Tail{stroke:var(--colorBrandStroke1);}", ".f13qeqtg>svg>circle.fui-Spinner__Track{stroke:var(--colorBrandStroke2Contrast);}"],
    k: ["@keyframes f1v1ql0f{0%{stroke-dasharray:1,150;stroke-dashoffset:0;}50%{stroke-dasharray:90,150;stroke-dashoffset:-35;}100%{stroke-dasharray:90,150;stroke-dashoffset:-124;}}"],
    m: [["@media screen and (prefers-reduced-motion: reduce){.folzdkc>svg>circle.fui-Spinner__Tail{animation-duration:0.01ms;}}", {
        m: "screen and (prefers-reduced-motion: reduce)"
    }], ["@media screen and (prefers-reduced-motion: reduce){.fhlfkde>svg>circle.fui-Spinner__Tail{animation-iteration-count:1;}}", {
        m: "screen and (prefers-reduced-motion: reduce)"
    }], ["@media screen and (forced-colors: active){.f1m9nikz>svg>circle.fui-Spinner__Tail{stroke:var(--colorNeutralStrokeOnBrand2);}}", {
        m: "screen and (forced-colors: active)"
    }], ["@media screen and (forced-colors: active){.flglbw1>svg>circle.fui-Spinner__Track{stroke:var(--colorNeutralBackgroundInverted);}}", {
        m: "screen and (forced-colors: active)"
    }]]
})
  , u3 = U({
    inverted: {
        sj55zd: "f15aqcq"
    },
    primary: {},
    "extra-tiny": {
        Bahqtrf: "fk6fouc",
        Be2twd7: "fkhj508",
        Bhrd7zp: "figsok6",
        Bg96gwp: "f1i3iumi"
    },
    tiny: {
        Bahqtrf: "fk6fouc",
        Be2twd7: "fkhj508",
        Bhrd7zp: "figsok6",
        Bg96gwp: "f1i3iumi"
    },
    "extra-small": {
        Bahqtrf: "fk6fouc",
        Be2twd7: "fkhj508",
        Bhrd7zp: "figsok6",
        Bg96gwp: "f1i3iumi"
    },
    small: {
        Bahqtrf: "fk6fouc",
        Be2twd7: "fkhj508",
        Bhrd7zp: "figsok6",
        Bg96gwp: "f1i3iumi"
    },
    medium: {
        Bahqtrf: "fk6fouc",
        Be2twd7: "fod5ikn",
        Bhrd7zp: "fl43uef",
        Bg96gwp: "faaz57k"
    },
    large: {
        Bahqtrf: "fk6fouc",
        Be2twd7: "fod5ikn",
        Bhrd7zp: "fl43uef",
        Bg96gwp: "faaz57k"
    },
    "extra-large": {
        Bahqtrf: "fk6fouc",
        Be2twd7: "fod5ikn",
        Bhrd7zp: "fl43uef",
        Bg96gwp: "faaz57k"
    },
    huge: {
        Bahqtrf: "fk6fouc",
        Be2twd7: "f1pp30po",
        Bhrd7zp: "fl43uef",
        Bg96gwp: "f106mvju"
    }
}, {
    d: [".f15aqcq{color:rgba(255, 255, 255, 1);}", ".fk6fouc{font-family:var(--fontFamilyBase);}", ".fkhj508{font-size:var(--fontSizeBase300);}", ".figsok6{font-weight:var(--fontWeightRegular);}", ".f1i3iumi{line-height:var(--lineHeightBase300);}", ".fod5ikn{font-size:var(--fontSizeBase400);}", ".fl43uef{font-weight:var(--fontWeightSemibold);}", ".faaz57k{line-height:var(--lineHeightBase400);}", ".f1pp30po{font-size:var(--fontSizeBase500);}", ".f106mvju{line-height:var(--lineHeightBase500);}"]
})
  , c3 = e=>{
    const {labelPosition: t, size: r, appearance: o="primary"} = e
      , n = a3()
      , i = s3()
      , a = u3()
      , s = l3();
    return e.root.className = W(Ml.root, n.root, (t === "above" || t === "below") && n.vertical, (t === "before" || t === "after") && n.horizontal, e.root.className),
    e.spinner && (e.spinner.className = W(Ml.spinner, i.spinnerSVG, i[r], s[o], e.spinner.className)),
    e.label && (e.label.className = W(Ml.label, a[r], a[o], e.label.className)),
    e
}
  , D0 = b.forwardRef((e,t)=>{
    const r = n3(e, t);
    return c3(r),
    Fe("useSpinnerStyles_unstable")(r),
    i3(r)
}
);
D0.displayName = "Spinner";
const d3 = (e,t)=>{
    const {wrap: r, truncate: o, block: n, italic: i, underline: a, strikethrough: s, size: l, font: u, weight: d, align: c} = e;
    return {
        align: c ?? "start",
        block: n ?? !1,
        font: u ?? "base",
        italic: i ?? !1,
        size: l ?? 300,
        strikethrough: s ?? !1,
        truncate: o ?? !1,
        underline: a ?? !1,
        weight: d ?? "regular",
        wrap: r ?? !0,
        components: {
            root: "span"
        },
        root: pe(Oe("span", {
            ref: t,
            ...e
        }), {
            elementType: "span"
        })
    }
}
  , f3 = e=>q(e.root, {})
  , p3 = {
    root: "fui-Text"
}
  , h3 = U({
    root: {
        Bahqtrf: "fk6fouc",
        Be2twd7: "fkhj508",
        Bg96gwp: "f1i3iumi",
        Bhrd7zp: "figsok6",
        fsow6f: "fpgzoln",
        mc9l5x: "f1w7gpdv",
        Huce71: "f6juhto",
        B68tc82: "f1mtd64y",
        Bmxbyg5: "f1y7q3j9",
        ygn44y: "f2jf649"
    },
    nowrap: {
        Huce71: "fz5stix",
        B68tc82: "f1p9o1ba",
        Bmxbyg5: "f1sil6mw"
    },
    truncate: {
        ygn44y: "f1cmbuwj"
    },
    block: {
        mc9l5x: "ftgm304"
    },
    italic: {
        B80ckks: "f1j4dglz"
    },
    underline: {
        w71qe1: "f13mvf36"
    },
    strikethrough: {
        w71qe1: "fv5q2k7"
    },
    strikethroughUnderline: {
        w71qe1: "f1drk4o6"
    },
    base100: {
        Be2twd7: "f13mqy1h",
        Bg96gwp: "fcpl73t"
    },
    base200: {
        Be2twd7: "fy9rknc",
        Bg96gwp: "fwrc4pm"
    },
    base400: {
        Be2twd7: "fod5ikn",
        Bg96gwp: "faaz57k"
    },
    base500: {
        Be2twd7: "f1pp30po",
        Bg96gwp: "f106mvju"
    },
    base600: {
        Be2twd7: "f1x0m3f5",
        Bg96gwp: "fb86gi6"
    },
    hero700: {
        Be2twd7: "fojgt09",
        Bg96gwp: "fcen8rp"
    },
    hero800: {
        Be2twd7: "fccw675",
        Bg96gwp: "f1ebx5kk"
    },
    hero900: {
        Be2twd7: "f15afnhw",
        Bg96gwp: "fr3w3wp"
    },
    hero1000: {
        Be2twd7: "fpyltcb",
        Bg96gwp: "f1ivgwrt"
    },
    monospace: {
        Bahqtrf: "f1fedwem"
    },
    numeric: {
        Bahqtrf: "f1uq0ln5"
    },
    weightMedium: {
        Bhrd7zp: "fdj6btp"
    },
    weightSemibold: {
        Bhrd7zp: "fl43uef"
    },
    weightBold: {
        Bhrd7zp: "flh3ekv"
    },
    alignCenter: {
        fsow6f: "f17mccla"
    },
    alignEnd: {
        fsow6f: "f12ymhq5"
    },
    alignJustify: {
        fsow6f: "f1j59e10"
    }
}, {
    d: [".fk6fouc{font-family:var(--fontFamilyBase);}", ".fkhj508{font-size:var(--fontSizeBase300);}", ".f1i3iumi{line-height:var(--lineHeightBase300);}", ".figsok6{font-weight:var(--fontWeightRegular);}", ".fpgzoln{text-align:start;}", ".f1w7gpdv{display:inline;}", ".f6juhto{white-space:normal;}", ".f1mtd64y{overflow-x:visible;}", ".f1y7q3j9{overflow-y:visible;}", ".f2jf649{text-overflow:clip;}", ".fz5stix{white-space:nowrap;}", ".f1p9o1ba{overflow-x:hidden;}", ".f1sil6mw{overflow-y:hidden;}", ".f1cmbuwj{text-overflow:ellipsis;}", ".ftgm304{display:block;}", ".f1j4dglz{font-style:italic;}", ".f13mvf36{text-decoration-line:underline;}", ".fv5q2k7{text-decoration-line:line-through;}", ".f1drk4o6{text-decoration-line:line-through underline;}", ".f13mqy1h{font-size:var(--fontSizeBase100);}", ".fcpl73t{line-height:var(--lineHeightBase100);}", ".fy9rknc{font-size:var(--fontSizeBase200);}", ".fwrc4pm{line-height:var(--lineHeightBase200);}", ".fod5ikn{font-size:var(--fontSizeBase400);}", ".faaz57k{line-height:var(--lineHeightBase400);}", ".f1pp30po{font-size:var(--fontSizeBase500);}", ".f106mvju{line-height:var(--lineHeightBase500);}", ".f1x0m3f5{font-size:var(--fontSizeBase600);}", ".fb86gi6{line-height:var(--lineHeightBase600);}", ".fojgt09{font-size:var(--fontSizeHero700);}", ".fcen8rp{line-height:var(--lineHeightHero700);}", ".fccw675{font-size:var(--fontSizeHero800);}", ".f1ebx5kk{line-height:var(--lineHeightHero800);}", ".f15afnhw{font-size:var(--fontSizeHero900);}", ".fr3w3wp{line-height:var(--lineHeightHero900);}", ".fpyltcb{font-size:var(--fontSizeHero1000);}", ".f1ivgwrt{line-height:var(--lineHeightHero1000);}", ".f1fedwem{font-family:var(--fontFamilyMonospace);}", ".f1uq0ln5{font-family:var(--fontFamilyNumeric);}", ".fdj6btp{font-weight:var(--fontWeightMedium);}", ".fl43uef{font-weight:var(--fontWeightSemibold);}", ".flh3ekv{font-weight:var(--fontWeightBold);}", ".f17mccla{text-align:center;}", ".f12ymhq5{text-align:end;}", ".f1j59e10{text-align:justify;}"]
})
  , g3 = e=>{
    const t = h3();
    return e.root.className = W(p3.root, t.root, e.wrap === !1 && t.nowrap, e.truncate && t.truncate, e.block && t.block, e.italic && t.italic, e.underline && t.underline, e.strikethrough && t.strikethrough, e.underline && e.strikethrough && t.strikethroughUnderline, e.size === 100 && t.base100, e.size === 200 && t.base200, e.size === 400 && t.base400, e.size === 500 && t.base500, e.size === 600 && t.base600, e.size === 700 && t.hero700, e.size === 800 && t.hero800, e.size === 900 && t.hero900, e.size === 1e3 && t.hero1000, e.font === "monospace" && t.monospace, e.font === "numeric" && t.numeric, e.weight === "medium" && t.weightMedium, e.weight === "semibold" && t.weightSemibold, e.weight === "bold" && t.weightBold, e.align === "center" && t.alignCenter, e.align === "end" && t.alignEnd, e.align === "justify" && t.alignJustify, e.root.className),
    e
}
;
function jd(e) {
    const {useStyles: t, className: r, displayName: o} = e
      , n = b.forwardRef((i,a)=>{
        const s = t()
          , l = d3(i, a);
        return g3(l),
        l.root.className = W(r, l.root.className, s.root, i.className),
        f3(l)
    }
    );
    return n.displayName = o,
    n
}
const v3 = {
    root: "fui-Body2"
}
  , m3 = U({
    root: {
        Bahqtrf: "fk6fouc",
        Be2twd7: "fod5ikn",
        Bhrd7zp: "figsok6",
        Bg96gwp: "faaz57k"
    }
}, {
    d: [".fk6fouc{font-family:var(--fontFamilyBase);}", ".fod5ikn{font-size:var(--fontSizeBase400);}", ".figsok6{font-weight:var(--fontWeightRegular);}", ".faaz57k{line-height:var(--lineHeightBase400);}"]
})
  , y3 = jd({
    useStyles: m3,
    className: v3.root,
    displayName: "Body2"
})
  , b3 = {
    root: "fui-Caption1"
}
  , w3 = U({
    root: {
        Bahqtrf: "fk6fouc",
        Be2twd7: "fy9rknc",
        Bhrd7zp: "figsok6",
        Bg96gwp: "fwrc4pm"
    }
}, {
    d: [".fk6fouc{font-family:var(--fontFamilyBase);}", ".fy9rknc{font-size:var(--fontSizeBase200);}", ".figsok6{font-weight:var(--fontWeightRegular);}", ".fwrc4pm{line-height:var(--lineHeightBase200);}"]
})
  , k3 = jd({
    useStyles: w3,
    className: b3.root,
    displayName: "Caption1"
})
  , x3 = {
    root: "fui-Subtitle2"
}
  , S3 = U({
    root: {
        Bahqtrf: "fk6fouc",
        Be2twd7: "fod5ikn",
        Bhrd7zp: "fl43uef",
        Bg96gwp: "faaz57k"
    }
}, {
    d: [".fk6fouc{font-family:var(--fontFamilyBase);}", ".fod5ikn{font-size:var(--fontSizeBase400);}", ".fl43uef{font-weight:var(--fontWeightSemibold);}", ".faaz57k{line-height:var(--lineHeightBase400);}"]
})
  , _3 = jd({
    useStyles: S3,
    className: x3.root,
    displayName: "Subtitle2"
})
  , Jr = "__fluentDisableScrollElement";
function B3() {
    const {targetDocument: e} = It();
    return b.useCallback(()=>{
        if (e)
            return E3(e.body)
    }
    , [e])
}
function E3(e) {
    var t;
    const {clientWidth: r} = e.ownerDocument.documentElement;
    var o;
    const n = (o = (t = e.ownerDocument.defaultView) === null || t === void 0 ? void 0 : t.innerWidth) !== null && o !== void 0 ? o : 0;
    return P3(e),
    e[Jr].count === 0 && (e.style.overflow = "hidden",
    e.style.paddingRight = `${n - r}px`),
    e[Jr].count++,
    ()=>{
        e[Jr].count--,
        e[Jr].count === 0 && (e.style.overflow = e[Jr].previousOverflowStyle,
        e.style.paddingRight = e[Jr].previousPaddingRightStyle)
    }
}
function P3(e) {
    var t, r, o;
    (o = (t = e)[r = Jr]) !== null && o !== void 0 || (t[r] = {
        count: 0,
        previousOverflowStyle: e.style.overflow,
        previousPaddingRightStyle: e.style.paddingRight
    })
}
function C3(e, t) {
    const {findFirstFocusable: r} = i0()
      , {targetDocument: o} = It()
      , n = b.useRef(null);
    return b.useEffect(()=>{
        if (!e)
            return;
        const i = n.current && r(n.current);
        if (i)
            i.focus();
        else {
            var a;
            (a = n.current) === null || a === void 0 || a.focus()
        }
    }
    , [r, e, t, o]),
    n
}
const T3 = {
    open: !1,
    inertTrapFocus: !1,
    modalType: "modal",
    isNestedDialog: !1,
    dialogRef: {
        current: null
    },
    requestOpenChange() {}
}
  , Id = Z_(void 0)
  , N3 = Id.Provider
  , Yt = e=>e5(Id, (t=T3)=>e(t))
  , z3 = !1
  , j0 = b.createContext(void 0)
  , I0 = j0.Provider
  , F3 = ()=>{
    var e;
    return (e = b.useContext(j0)) !== null && e !== void 0 ? e : z3
}
  , R3 = e=>{
    const {children: t, modalType: r="modal", onOpenChange: o, inertTrapFocus: n=!1} = e
      , [i,a] = D3(t)
      , [s,l] = js({
        state: e.open,
        defaultState: e.defaultOpen,
        initialState: !1
    })
      , u = ot(m=>{
        o == null || o(m.event, m),
        m.event.isDefaultPrevented() || l(m.open)
    }
    )
      , d = C3(s, r)
      , c = B3()
      , f = !!(s && r !== "non-modal");
    Rt(()=>{
        if (f)
            return c()
    }
    , [c, f]);
    const {modalAttributes: h, triggerAttributes: p} = u0({
        trapFocus: r !== "non-modal",
        legacyTrapFocus: !n
    });
    return {
        components: {
            backdrop: "div"
        },
        inertTrapFocus: n,
        open: s,
        modalType: r,
        content: a,
        trigger: i,
        requestOpenChange: u,
        dialogTitleId: pn("dialog-title-"),
        isNestedDialog: r5(Id),
        dialogRef: d,
        modalAttributes: r !== "non-modal" ? h : void 0,
        triggerAttributes: p
    }
}
;
function D3(e) {
    const t = b.Children.toArray(e);
    switch (t.length) {
    case 2:
        return t;
    case 1:
        return [void 0, t[0]];
    default:
        return [void 0, void 0]
    }
}
function j3(e, t) {
    if (e == null)
        return {};
    var r = {}, o = Object.keys(e), n, i;
    for (i = 0; i < o.length; i++)
        n = o[i],
        !(t.indexOf(n) >= 0) && (r[n] = e[n]);
    return r
}
function oc(e, t) {
    return oc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, n) {
        return o.__proto__ = n,
        o
    }
    ,
    oc(e, t)
}
function I3(e, t) {
    e.prototype = Object.create(t.prototype),
    e.prototype.constructor = e,
    oc(e, t)
}
var A0 = {
    exports: {}
}
  , A3 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  , O3 = A3
  , L3 = O3;
function O0() {}
function L0() {}
L0.resetWarningCache = O0;
var M3 = function() {
    function e(o, n, i, a, s, l) {
        if (l !== L3) {
            var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw u.name = "Invariant Violation",
            u
        }
    }
    e.isRequired = e;
    function t() {
        return e
    }
    var r = {
        array: e,
        bigint: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: t,
        element: e,
        elementType: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t,
        checkPropTypes: L0,
        resetWarningCache: O0
    };
    return r.PropTypes = r,
    r
};
A0.exports = M3();
var vt = A0.exports;
const oh = {
    disabled: !1
}
  , M0 = ro.createContext(null);
var q3 = function(t) {
    return t.scrollTop
}
  , Rn = "unmounted"
  , Yr = "exited"
  , Zr = "entering"
  , Bo = "entered"
  , nc = "exiting"
  , pr = function(e) {
    I3(t, e);
    function t(o, n) {
        var i;
        i = e.call(this, o, n) || this;
        var a = n, s = a && !a.isMounting ? o.enter : o.appear, l;
        return i.appearStatus = null,
        o.in ? s ? (l = Yr,
        i.appearStatus = Zr) : l = Bo : o.unmountOnExit || o.mountOnEnter ? l = Rn : l = Yr,
        i.state = {
            status: l
        },
        i.nextCallback = null,
        i
    }
    t.getDerivedStateFromProps = function(n, i) {
        var a = n.in;
        return a && i.status === Rn ? {
            status: Yr
        } : null
    }
    ;
    var r = t.prototype;
    return r.componentDidMount = function() {
        this.updateStatus(!0, this.appearStatus)
    }
    ,
    r.componentDidUpdate = function(n) {
        var i = null;
        if (n !== this.props) {
            var a = this.state.status;
            this.props.in ? a !== Zr && a !== Bo && (i = Zr) : (a === Zr || a === Bo) && (i = nc)
        }
        this.updateStatus(!1, i)
    }
    ,
    r.componentWillUnmount = function() {
        this.cancelNextCallback()
    }
    ,
    r.getTimeouts = function() {
        var n = this.props.timeout, i, a, s;
        return i = a = s = n,
        n != null && typeof n != "number" && (i = n.exit,
        a = n.enter,
        s = n.appear !== void 0 ? n.appear : a),
        {
            exit: i,
            enter: a,
            appear: s
        }
    }
    ,
    r.updateStatus = function(n, i) {
        if (n === void 0 && (n = !1),
        i !== null)
            if (this.cancelNextCallback(),
            i === Zr) {
                if (this.props.unmountOnExit || this.props.mountOnEnter) {
                    var a = this.props.nodeRef ? this.props.nodeRef.current : Qi.findDOMNode(this);
                    a && q3(a)
                }
                this.performEnter(n)
            } else
                this.performExit();
        else
            this.props.unmountOnExit && this.state.status === Yr && this.setState({
                status: Rn
            })
    }
    ,
    r.performEnter = function(n) {
        var i = this
          , a = this.props.enter
          , s = this.context ? this.context.isMounting : n
          , l = this.props.nodeRef ? [s] : [Qi.findDOMNode(this), s]
          , u = l[0]
          , d = l[1]
          , c = this.getTimeouts()
          , f = s ? c.appear : c.enter;
        if (!n && !a || oh.disabled) {
            this.safeSetState({
                status: Bo
            }, function() {
                i.props.onEntered(u)
            });
            return
        }
        this.props.onEnter(u, d),
        this.safeSetState({
            status: Zr
        }, function() {
            i.props.onEntering(u, d),
            i.onTransitionEnd(f, function() {
                i.safeSetState({
                    status: Bo
                }, function() {
                    i.props.onEntered(u, d)
                })
            })
        })
    }
    ,
    r.performExit = function() {
        var n = this
          , i = this.props.exit
          , a = this.getTimeouts()
          , s = this.props.nodeRef ? void 0 : Qi.findDOMNode(this);
        if (!i || oh.disabled) {
            this.safeSetState({
                status: Yr
            }, function() {
                n.props.onExited(s)
            });
            return
        }
        this.props.onExit(s),
        this.safeSetState({
            status: nc
        }, function() {
            n.props.onExiting(s),
            n.onTransitionEnd(a.exit, function() {
                n.safeSetState({
                    status: Yr
                }, function() {
                    n.props.onExited(s)
                })
            })
        })
    }
    ,
    r.cancelNextCallback = function() {
        this.nextCallback !== null && (this.nextCallback.cancel(),
        this.nextCallback = null)
    }
    ,
    r.safeSetState = function(n, i) {
        i = this.setNextCallback(i),
        this.setState(n, i)
    }
    ,
    r.setNextCallback = function(n) {
        var i = this
          , a = !0;
        return this.nextCallback = function(s) {
            a && (a = !1,
            i.nextCallback = null,
            n(s))
        }
        ,
        this.nextCallback.cancel = function() {
            a = !1
        }
        ,
        this.nextCallback
    }
    ,
    r.onTransitionEnd = function(n, i) {
        this.setNextCallback(i);
        var a = this.props.nodeRef ? this.props.nodeRef.current : Qi.findDOMNode(this)
          , s = n == null && !this.props.addEndListener;
        if (!a || s) {
            setTimeout(this.nextCallback, 0);
            return
        }
        if (this.props.addEndListener) {
            var l = this.props.nodeRef ? [this.nextCallback] : [a, this.nextCallback]
              , u = l[0]
              , d = l[1];
            this.props.addEndListener(u, d)
        }
        n != null && setTimeout(this.nextCallback, n)
    }
    ,
    r.render = function() {
        var n = this.state.status;
        if (n === Rn)
            return null;
        var i = this.props
          , a = i.children;
        i.in,
        i.mountOnEnter,
        i.unmountOnExit,
        i.appear,
        i.enter,
        i.exit,
        i.timeout,
        i.addEndListener,
        i.onEnter,
        i.onEntering,
        i.onEntered,
        i.onExit,
        i.onExiting,
        i.onExited,
        i.nodeRef;
        var s = j3(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
        return ro.createElement(M0.Provider, {
            value: null
        }, typeof a == "function" ? a(n, s) : ro.cloneElement(ro.Children.only(a), s))
    }
    ,
    t
}(ro.Component);
pr.contextType = M0;
pr.propTypes = {};
function _o() {}
pr.defaultProps = {
    in: !1,
    mountOnEnter: !1,
    unmountOnExit: !1,
    appear: !1,
    enter: !0,
    exit: !0,
    onEnter: _o,
    onEntering: _o,
    onEntered: _o,
    onExit: _o,
    onExiting: _o,
    onExited: _o
};
pr.UNMOUNTED = Rn;
pr.EXITED = Yr;
pr.ENTERING = Zr;
pr.ENTERED = Bo;
pr.EXITING = nc;
const H3 = pr
  , W3 = void 0
  , q0 = b.createContext(void 0)
  , $3 = q0.Provider
  , U3 = ()=>{
    var e;
    return (e = b.useContext(q0)) !== null && e !== void 0 ? e : W3
}
  , V3 = (e,t)=>{
    const {content: r, trigger: o} = e;
    return q(N3, {
        value: t.dialog,
        children: ut(I0, {
            value: t.dialogSurface,
            children: [o, q(H3, {
                mountOnEnter: !0,
                unmountOnExit: !0,
                in: e.open,
                nodeRef: e.dialogRef,
                appear: !0,
                timeout: 250,
                children: n=>q($3, {
                    value: n,
                    children: r
                })
            })]
        })
    })
}
;
function G3(e) {
    const {modalType: t, open: r, dialogRef: o, dialogTitleId: n, isNestedDialog: i, inertTrapFocus: a, requestOpenChange: s, modalAttributes: l, triggerAttributes: u} = e;
    return {
        dialog: {
            open: r,
            modalType: t,
            dialogRef: o,
            dialogTitleId: n,
            isNestedDialog: i,
            inertTrapFocus: a,
            modalAttributes: l,
            triggerAttributes: u,
            requestOpenChange: s
        },
        dialogSurface: !1
    }
}
const hi = b.memo(e=>{
    const t = R3(e)
      , r = G3(t);
    return V3(t, r)
}
);
hi.displayName = "Dialog";
const K3 = e=>{
    const t = F3()
      , {children: r, disableButtonEnhancement: o=!1, action: n=t ? "close" : "open"} = e
      , i = wd(r)
      , a = Yt(c=>c.requestOpenChange)
      , {triggerAttributes: s} = u0()
      , l = ot(c=>{
        var f, h;
        i == null || (f = (h = i.props).onClick) === null || f === void 0 || f.call(h, c),
        c.isDefaultPrevented() || a({
            event: c,
            type: "triggerClick",
            open: n === "open"
        })
    }
    )
      , u = {
        ...i == null ? void 0 : i.props,
        ref: i == null ? void 0 : i.ref,
        onClick: l,
        ...s
    }
      , d = m0((i == null ? void 0 : i.type) === "button" || (i == null ? void 0 : i.type) === "a" ? i.type : "div", {
        ...u,
        type: "button"
    });
    return {
        children: zm(r, o ? u : d)
    }
}
  , X3 = e=>e.children
  , Ti = e=>{
    const t = K3(e);
    return X3(t)
}
;
Ti.displayName = "DialogTrigger";
Ti.isFluentTriggerComponent = !0;
const Q3 = (e,t)=>{
    const {position: r="end", fluid: o=!1} = e;
    return {
        components: {
            root: "div"
        },
        root: pe(Oe("div", {
            ref: t,
            ...e
        }), {
            elementType: "div"
        }),
        position: r,
        fluid: o
    }
}
  , J3 = e=>q(e.root, {})
  , Y3 = {
    root: "fui-DialogActions"
}
  , Z3 = Ce("r78gbj", null, {
    r: [".r78gbj{column-gap:8px;row-gap:8px;height:fit-content;box-sizing:border-box;display:flex;grid-row-start:3;grid-row-end:3;}"],
    s: ["@media screen and (max-width: 480px){.r78gbj{flex-direction:column;justify-self:stretch;}}"]
})
  , e4 = U({
    gridPositionEnd: {
        Bdqf98w: "f1a7i8kp",
        Br312pm: "fd46tj4",
        Bw0ie65: "fsyjsko",
        B6n781s: "f1f41i0t",
        Bv5d0be: "f1jaqex3",
        v4ugfu: "f2ao6jk"
    },
    gridPositionStart: {
        Bdqf98w: "fsxvdwy",
        Br312pm: "fwpfdsa",
        Bw0ie65: "f1e2fz10",
        Bojbm9c: "f11ihkml",
        Bv5d0be: "fce5bvx",
        v4ugfu: "f2ao6jk"
    },
    fluidStart: {
        Bw0ie65: "fsyjsko"
    },
    fluidEnd: {
        Br312pm: "fwpfdsa"
    }
}, {
    d: [".f1a7i8kp{justify-self:end;}", ".fd46tj4{grid-column-start:2;}", ".fsyjsko{grid-column-end:4;}", ".fsxvdwy{justify-self:start;}", ".fwpfdsa{grid-column-start:1;}", ".f1e2fz10{grid-column-end:2;}"],
    m: [["@media screen and (max-width: 480px){.f1f41i0t{grid-column-start:1;}}", {
        m: "screen and (max-width: 480px)"
    }], ["@media screen and (max-width: 480px){.f1jaqex3{grid-row-start:4;}}", {
        m: "screen and (max-width: 480px)"
    }], ["@media screen and (max-width: 480px){.f2ao6jk{grid-row-end:auto;}}", {
        m: "screen and (max-width: 480px)"
    }], ["@media screen and (max-width: 480px){.f11ihkml{grid-column-end:4;}}", {
        m: "screen and (max-width: 480px)"
    }], ["@media screen and (max-width: 480px){.fce5bvx{grid-row-start:3;}}", {
        m: "screen and (max-width: 480px)"
    }]]
})
  , t4 = e=>{
    const t = Z3()
      , r = e4();
    return e.root.className = W(Y3.root, t, e.position === "start" && r.gridPositionStart, e.position === "end" && r.gridPositionEnd, e.fluid && e.position === "start" && r.fluidStart, e.fluid && e.position === "end" && r.fluidEnd, e.root.className),
    e
}
  , Ad = b.forwardRef((e,t)=>{
    const r = Q3(e, t);
    return t4(r),
    Fe("useDialogActionsStyles_unstable")(r),
    J3(r)
}
);
Ad.displayName = "DialogActions";
const r4 = (e,t)=>{
    var r;
    return {
        components: {
            root: "div"
        },
        root: pe(Oe((r = e.as) !== null && r !== void 0 ? r : "div", {
            ref: t,
            ...e
        }), {
            elementType: "div"
        })
    }
}
  , o4 = e=>q(e.root, {})
  , n4 = {
    root: "fui-DialogBody"
}
  , i4 = Ce("r71plkv", null, {
    r: [".r71plkv{overflow-x:unset;overflow-y:unset;column-gap:8px;row-gap:8px;display:grid;max-height:calc(100vh - 2 * 24px);box-sizing:border-box;grid-template-rows:auto 1fr;grid-template-columns:1fr 1fr auto;}"],
    s: ["@media screen and (max-width: 480px){.r71plkv{max-width:100vw;grid-template-rows:auto 1fr auto;}}"]
})
  , a4 = e=>{
    const t = i4();
    return e.root.className = W(n4.root, t, e.root.className),
    e
}
  , Od = b.forwardRef((e,t)=>{
    const r = r4(e, t);
    return a4(r),
    Fe("useDialogBodyStyles_unstable")(r),
    o4(r)
}
);
Od.displayName = "DialogBody";
const nh = {
    root: "fui-DialogTitle",
    action: "fui-DialogTitle__action"
}
  , s4 = Ce("rztv7rx", "rt0yqbx", [".rztv7rx{font-family:var(--fontFamilyBase);font-size:var(--fontSizeBase500);font-weight:var(--fontWeightSemibold);line-height:var(--lineHeightBase500);margin-top:0;margin-right:0;margin-bottom:0;margin-left:0;grid-row-start:1;grid-row-end:1;grid-column-start:1;grid-column-end:3;}", ".rt0yqbx{font-family:var(--fontFamilyBase);font-size:var(--fontSizeBase500);font-weight:var(--fontWeightSemibold);line-height:var(--lineHeightBase500);margin-top:0;margin-left:0;margin-bottom:0;margin-right:0;grid-row-start:1;grid-row-end:1;grid-column-start:1;grid-column-end:3;}"])
  , l4 = U({
    rootWithoutAction: {
        Bw0ie65: "fsyjsko"
    }
}, {
    d: [".fsyjsko{grid-column-end:4;}"]
})
  , u4 = Ce("r13kcrze", null, [".r13kcrze{grid-row-start:1;grid-row-end:1;grid-column-start:3;justify-self:end;align-self:start;}"])
  , c4 = Ce("r51tj", "rgre5d", {
    r: [".r51tj{overflow-x:visible;overflow-y:visible;padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;position:relative;box-sizing:content-box;background-color:inherit;color:inherit;font-family:inherit;font-size:inherit;cursor:pointer;line-height:0;-webkit-appearance:button;text-align:unset;}", ".r51tj:focus{outline-style:none;}", ".r51tj:focus-visible{outline-style:none;}", ".r51tj[data-fui-focus-visible]{border-top-color:transparent;border-right-color:transparent;border-bottom-color:transparent;border-left-color:transparent;}", '.r51tj[data-fui-focus-visible]::after{content:"";position:absolute;pointer-events:none;z-index:1;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-width:2px;border-right-width:2px;border-bottom-width:2px;border-left-width:2px;border-bottom-right-radius:var(--borderRadiusMedium);border-bottom-left-radius:var(--borderRadiusMedium);border-top-right-radius:var(--borderRadiusMedium);border-top-left-radius:var(--borderRadiusMedium);border-top-color:var(--colorStrokeFocus2);border-right-color:var(--colorStrokeFocus2);border-bottom-color:var(--colorStrokeFocus2);border-left-color:var(--colorStrokeFocus2);top:calc(2px * -1);right:calc(2px * -1);bottom:calc(2px * -1);left:calc(2px * -1);}', ".rgre5d{overflow-x:visible;overflow-y:visible;padding-top:0;padding-left:0;padding-bottom:0;padding-right:0;border-top-style:none;border-left-style:none;border-bottom-style:none;border-right-style:none;position:relative;box-sizing:content-box;background-color:inherit;color:inherit;font-family:inherit;font-size:inherit;cursor:pointer;line-height:0;-webkit-appearance:button;text-align:unset;}", ".rgre5d:focus{outline-style:none;}", ".rgre5d:focus-visible{outline-style:none;}", ".rgre5d[data-fui-focus-visible]{border-top-color:transparent;border-left-color:transparent;border-bottom-color:transparent;border-right-color:transparent;}", '.rgre5d[data-fui-focus-visible]::after{content:"";position:absolute;pointer-events:none;z-index:1;border-top-style:solid;border-left-style:solid;border-bottom-style:solid;border-right-style:solid;border-top-width:2px;border-left-width:2px;border-bottom-width:2px;border-right-width:2px;border-bottom-left-radius:var(--borderRadiusMedium);border-bottom-right-radius:var(--borderRadiusMedium);border-top-left-radius:var(--borderRadiusMedium);border-top-right-radius:var(--borderRadiusMedium);border-top-color:var(--colorStrokeFocus2);border-left-color:var(--colorStrokeFocus2);border-bottom-color:var(--colorStrokeFocus2);border-right-color:var(--colorStrokeFocus2);top:calc(2px * -1);left:calc(2px * -1);bottom:calc(2px * -1);right:calc(2px * -1);}'],
    s: ["@media (forced-colors: active){.r51tj[data-fui-focus-visible]::after{border-top-color:Highlight;border-right-color:Highlight;border-bottom-color:Highlight;border-left-color:Highlight;}}", "@media (forced-colors: active){.rgre5d[data-fui-focus-visible]::after{border-top-color:Highlight;border-left-color:Highlight;border-bottom-color:Highlight;border-right-color:Highlight;}}"]
})
  , d4 = e=>{
    const t = s4()
      , r = u4()
      , o = l4();
    return e.root.className = W(nh.root, t, !e.action && o.rootWithoutAction, e.root.className),
    e.action && (e.action.className = W(nh.action, r, e.action.className)),
    e
}
  , f4 = (e,t)=>{
    const {action: r} = e
      , o = Yt(i=>i.modalType)
      , n = c4();
    return {
        components: {
            root: "h2",
            action: "div"
        },
        root: pe(Oe("h2", {
            ref: t,
            id: Yt(i=>i.dialogTitleId),
            ...e
        }), {
            elementType: "h2"
        }),
        action: He(r, {
            renderByDefault: o === "non-modal",
            defaultProps: {
                children: b.createElement(Ti, {
                    disableButtonEnhancement: !0,
                    action: "close"
                }, b.createElement("button", {
                    type: "button",
                    className: n,
                    "aria-label": "close"
                }, b.createElement(C2, null)))
            },
            elementType: "div"
        })
    }
}
  , p4 = e=>ut(b.Fragment, {
    children: [q(e.root, {
        children: e.root.children
    }), e.action && q(e.action, {})]
})
  , Ld = b.forwardRef((e,t)=>{
    const r = f4(e, t);
    return d4(r),
    Fe("useDialogTitleStyles_unstable")(r),
    p4(r)
}
);
Ld.displayName = "DialogTitle";
const H0 = (e,t)=>{
    const r = Yt(f=>f.modalType)
      , o = Yt(f=>f.isNestedDialog)
      , n = U3()
      , i = Yt(f=>f.modalAttributes)
      , a = Yt(f=>f.dialogRef)
      , s = Yt(f=>f.requestOpenChange)
      , l = Yt(f=>f.dialogTitleId)
      , u = ot(f=>{
        if (hx(e.backdrop)) {
            var h, p;
            (h = (p = e.backdrop).onClick) === null || h === void 0 || h.call(p, f)
        }
        r === "modal" && !f.isDefaultPrevented() && s({
            event: f,
            open: !1,
            type: "backdropClick"
        })
    }
    )
      , d = ot(f=>{
        var h;
        (h = e.onKeyDown) === null || h === void 0 || h.call(e, f),
        f.key === v0 && !f.isDefaultPrevented() && (s({
            event: f,
            open: !1,
            type: "escapeKeyDown"
        }),
        f.preventDefault())
    }
    )
      , c = He(e.backdrop, {
        renderByDefault: r !== "non-modal",
        defaultProps: {
            "aria-hidden": "true"
        },
        elementType: "div"
    });
    return c && (c.onClick = u),
    {
        components: {
            backdrop: "div",
            root: "div"
        },
        backdrop: c,
        isNestedDialog: o,
        transitionStatus: n,
        mountNode: e.mountNode,
        root: pe(Oe("div", {
            tabIndex: -1,
            "aria-modal": r !== "non-modal",
            role: r === "alert" ? "alertdialog" : "dialog",
            "aria-labelledby": e["aria-label"] ? void 0 : l,
            ...e,
            ...i,
            onKeyDown: d,
            ref: Ar(t, a)
        }), {
            elementType: "div"
        })
    }
}
  , W0 = (e,t)=>ut(Rd, {
    mountNode: e.mountNode,
    children: [e.backdrop && q(e.backdrop, {}), q(I0, {
        value: t.dialogSurface,
        children: q(e.root, {})
    })]
})
  , ih = {
    root: "fui-DialogSurface",
    backdrop: "fui-DialogSurface__backdrop"
}
  , h4 = Ce("rhhzfde", "r1n1tr5u", {
    r: [".rhhzfde{top:0;right:0;bottom:0;left:0;padding-top:24px;padding-right:24px;padding-bottom:24px;padding-left:24px;margin-top:auto;margin-right:auto;margin-bottom:auto;margin-left:auto;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;overflow-x:unset;overflow-y:unset;border-top-width:1px;border-right-width:1px;border-bottom-width:1px;border-left-width:1px;border-top-color:var(--colorTransparentStroke);border-right-color:var(--colorTransparentStroke);border-bottom-color:var(--colorTransparentStroke);border-left-color:var(--colorTransparentStroke);border-bottom-right-radius:var(--borderRadiusXLarge);border-bottom-left-radius:var(--borderRadiusXLarge);border-top-right-radius:var(--borderRadiusXLarge);border-top-left-radius:var(--borderRadiusXLarge);display:block;-webkit-user-select:unset;-moz-user-select:unset;-ms-user-select:unset;user-select:unset;visibility:unset;position:fixed;height:fit-content;max-width:600px;max-height:100vh;box-sizing:border-box;background-color:var(--colorNeutralBackground1);color:var(--colorNeutralForeground1);}", ".rhhzfde:focus{outline-style:none;}", ".rhhzfde:focus-visible{outline-style:none;}", ".rhhzfde[data-fui-focus-visible]{border-top-color:transparent;border-right-color:transparent;border-bottom-color:transparent;border-left-color:transparent;}", '.rhhzfde[data-fui-focus-visible]::after{content:"";position:absolute;pointer-events:none;z-index:1;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-width:2px;border-right-width:2px;border-bottom-width:2px;border-left-width:2px;border-bottom-right-radius:var(--borderRadiusMedium);border-bottom-left-radius:var(--borderRadiusMedium);border-top-right-radius:var(--borderRadiusMedium);border-top-left-radius:var(--borderRadiusMedium);border-top-color:var(--colorStrokeFocus2);border-right-color:var(--colorStrokeFocus2);border-bottom-color:var(--colorStrokeFocus2);border-left-color:var(--colorStrokeFocus2);top:calc(2px * -1);right:calc(2px * -1);bottom:calc(2px * -1);left:calc(2px * -1);}', ".r1n1tr5u{top:0;left:0;bottom:0;right:0;padding-top:24px;padding-left:24px;padding-bottom:24px;padding-right:24px;margin-top:auto;margin-left:auto;margin-bottom:auto;margin-right:auto;border-top-style:solid;border-left-style:solid;border-bottom-style:solid;border-right-style:solid;overflow-x:unset;overflow-y:unset;border-top-width:1px;border-left-width:1px;border-bottom-width:1px;border-right-width:1px;border-top-color:var(--colorTransparentStroke);border-left-color:var(--colorTransparentStroke);border-bottom-color:var(--colorTransparentStroke);border-right-color:var(--colorTransparentStroke);border-bottom-left-radius:var(--borderRadiusXLarge);border-bottom-right-radius:var(--borderRadiusXLarge);border-top-left-radius:var(--borderRadiusXLarge);border-top-right-radius:var(--borderRadiusXLarge);display:block;-webkit-user-select:unset;-moz-user-select:unset;-ms-user-select:unset;user-select:unset;visibility:unset;position:fixed;height:fit-content;max-width:600px;max-height:100vh;box-sizing:border-box;background-color:var(--colorNeutralBackground1);color:var(--colorNeutralForeground1);}", ".r1n1tr5u:focus{outline-style:none;}", ".r1n1tr5u:focus-visible{outline-style:none;}", ".r1n1tr5u[data-fui-focus-visible]{border-top-color:transparent;border-left-color:transparent;border-bottom-color:transparent;border-right-color:transparent;}", '.r1n1tr5u[data-fui-focus-visible]::after{content:"";position:absolute;pointer-events:none;z-index:1;border-top-style:solid;border-left-style:solid;border-bottom-style:solid;border-right-style:solid;border-top-width:2px;border-left-width:2px;border-bottom-width:2px;border-right-width:2px;border-bottom-left-radius:var(--borderRadiusMedium);border-bottom-right-radius:var(--borderRadiusMedium);border-top-left-radius:var(--borderRadiusMedium);border-top-right-radius:var(--borderRadiusMedium);border-top-color:var(--colorStrokeFocus2);border-left-color:var(--colorStrokeFocus2);border-bottom-color:var(--colorStrokeFocus2);border-right-color:var(--colorStrokeFocus2);top:calc(2px * -1);left:calc(2px * -1);bottom:calc(2px * -1);right:calc(2px * -1);}'],
    s: ["@media (forced-colors: active){.rhhzfde[data-fui-focus-visible]::after{border-top-color:Highlight;border-right-color:Highlight;border-bottom-color:Highlight;border-left-color:Highlight;}}", "@media screen and (max-width: 480px){.rhhzfde{max-width:100vw;}}", "@media (forced-colors: active){.r1n1tr5u[data-fui-focus-visible]::after{border-top-color:Highlight;border-left-color:Highlight;border-bottom-color:Highlight;border-right-color:Highlight;}}", "@media screen and (max-width: 480px){.r1n1tr5u{max-width:100vw;}}"]
})
  , g4 = U({
    animated: {
        abs64n: "fk73vx1",
        B3o57yi: "fc397y7",
        Bmy1vo4: "f1b86uth",
        Bkqvd7p: "f18ad807",
        E5pizo: "f1yzz98r",
        Bz10aip: "f15ofi6c"
    },
    unmounted: {},
    entering: {},
    entered: {
        E5pizo: "f10nrhrw",
        Bz10aip: "f186d0ee",
        abs64n: "f5p0z4x"
    },
    idle: {},
    exiting: {
        Bkqvd7p: "f1mfizis"
    },
    exited: {}
}, {
    d: [".fk73vx1{opacity:0;}", ".fc397y7{transition-duration:var(--durationGentle);}", ".f1b86uth{transition-property:opacity,transform,box-shadow;}", ".f18ad807{transition-timing-function:var(--curveDecelerateMid);}", ".f1yzz98r{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.1);}", ".f15ofi6c{transform:scale(0.85) translateZ(0);}", ".f10nrhrw{box-shadow:var(--shadow64);}", ".f186d0ee{transform:scale(1) translateZ(0);}", ".f5p0z4x{opacity:1;}", ".f1mfizis{transition-timing-function:var(--curveAccelerateMin);}"]
})
  , v4 = Ce("raidwwn", "r17vltcu", [".raidwwn{top:0px;right:0px;bottom:0px;left:0px;background-color:rgba(0, 0, 0, 0.4);position:fixed;transition-duration:var(--durationGentle);transition-timing-function:var(--curveLinear);transition-property:opacity;will-change:opacity;opacity:0;}", ".r17vltcu{top:0px;left:0px;bottom:0px;right:0px;background-color:rgba(0, 0, 0, 0.4);position:fixed;transition-duration:var(--durationGentle);transition-timing-function:var(--curveLinear);transition-property:opacity;will-change:opacity;opacity:0;}"])
  , m4 = U({
    nestedDialogBackdrop: {
        De3pzq: "f1c21dwh"
    },
    unmounted: {},
    entering: {},
    entered: {
        abs64n: "f5p0z4x"
    },
    idle: {},
    exiting: {
        Bkqvd7p: "f1mfizis"
    },
    exited: {}
}, {
    d: [".f1c21dwh{background-color:var(--colorTransparentBackground);}", ".f5p0z4x{opacity:1;}", ".f1mfizis{transition-timing-function:var(--curveAccelerateMin);}"]
})
  , y4 = e=>{
    const {isNestedDialog: t, root: r, backdrop: o, transitionStatus: n} = e
      , i = h4()
      , a = g4()
      , s = v4()
      , l = m4();
    return r.className = W(ih.root, i, n && a.animated, n && a[n], r.className),
    o && (o.className = W(ih.backdrop, s, t && l.nestedDialogBackdrop, n && l[n], o.className)),
    e
}
;
function $0(e) {
    return {
        dialogSurface: !0
    }
}
const Md = b.forwardRef((e,t)=>{
    const r = H0(e, t)
      , o = $0();
    return y4(r),
    Fe("useDialogSurfaceStyles_unstable")(r),
    W0(r, o)
}
);
Md.displayName = "DialogSurface";
const b4 = (e,t)=>{
    var r;
    return {
        components: {
            root: "div"
        },
        root: pe(Oe((r = e.as) !== null && r !== void 0 ? r : "div", {
            ref: t,
            ...e
        }), {
            elementType: "div"
        })
    }
}
  , w4 = e=>q(e.root, {})
  , k4 = {
    root: "fui-DialogContent"
}
  , x4 = Ce("r1e0mpcm", "r1equu0b", [".r1e0mpcm{padding-top:var(--strokeWidthThick);padding-right:var(--strokeWidthThick);padding-bottom:var(--strokeWidthThick);padding-left:var(--strokeWidthThick);margin-top:calc(var(--strokeWidthThick) * -1);margin-right:calc(var(--strokeWidthThick) * -1);margin-bottom:calc(var(--strokeWidthThick) * -1);margin-left:calc(var(--strokeWidthThick) * -1);font-family:var(--fontFamilyBase);font-size:var(--fontSizeBase300);font-weight:var(--fontWeightRegular);line-height:var(--lineHeightBase300);overflow-y:auto;min-height:32px;box-sizing:border-box;grid-row-start:2;grid-row-end:2;grid-column-start:1;grid-column-end:4;}", ".r1equu0b{padding-top:var(--strokeWidthThick);padding-left:var(--strokeWidthThick);padding-bottom:var(--strokeWidthThick);padding-right:var(--strokeWidthThick);margin-top:calc(var(--strokeWidthThick) * -1);margin-left:calc(var(--strokeWidthThick) * -1);margin-bottom:calc(var(--strokeWidthThick) * -1);margin-right:calc(var(--strokeWidthThick) * -1);font-family:var(--fontFamilyBase);font-size:var(--fontSizeBase300);font-weight:var(--fontWeightRegular);line-height:var(--lineHeightBase300);overflow-y:auto;min-height:32px;box-sizing:border-box;grid-row-start:2;grid-row-end:2;grid-column-start:1;grid-column-end:4;}"])
  , S4 = e=>{
    const t = x4();
    return e.root.className = W(k4.root, t, e.root.className),
    e
}
  , qd = b.forwardRef((e,t)=>{
    const r = b4(e, t);
    return S4(r),
    Fe("useDialogContentStyles_unstable")(r),
    w4(r)
}
);
qd.displayName = "DialogContent";
const _4 = (e,{referenceLabel: t, referenceId: r},o)=>{
    const {checkbox: n={}, onSelectionChange: i, floatingAction: a, onClick: s, onKeyDown: l} = e
      , {findAllFocusable: u} = i0()
      , d = b.useRef(null)
      , [c,f] = js({
        state: e.selected,
        defaultState: e.defaultSelected,
        initialState: !1
    })
      , h = [e.selected, e.defaultSelected, i].some(_=>typeof _ < "u")
      , [p,m] = b.useState(!1)
      , w = b.useCallback(_=>{
        if (!o.current)
            return !1;
        const k = u(o.current)
          , E = _.target
          , I = k.some(Y=>Y.contains(E))
          , F = (d == null ? void 0 : d.current) === E;
        return I && !F
    }
    , [o, u])
      , v = b.useCallback(_=>{
        if (w(_))
            return;
        const k = !c;
        f(k),
        i && i(_, {
            selected: k
        })
    }
    , [i, c, f, w])
      , g = b.useCallback(_=>{
        [xa].includes(_.key) && (_.preventDefault(),
        v(_))
    }
    , [v])
      , y = b.useMemo(()=>{
        if (!h || a)
            return;
        const _ = {};
        return r ? _["aria-labelledby"] = r : t && (_["aria-label"] = t),
        He(n, {
            defaultProps: {
                ref: d,
                type: "checkbox",
                checked: c,
                onChange: k=>v(k),
                onFocus: ()=>m(!0),
                onBlur: ()=>m(!1),
                ..._
            },
            elementType: "input"
        })
    }
    , [n, a, c, h, v, r, t])
      , x = b.useMemo(()=>{
        if (a)
            return He(a, {
                defaultProps: {
                    ref: d
                },
                elementType: "div"
            })
    }
    , [a])
      , S = b.useMemo(()=>h ? {
        onClick: Lt(s, v),
        onKeyDown: Lt(l, g)
    } : null, [h, v, s, l, g]);
    return {
        selected: c,
        selectable: h,
        selectFocused: p,
        selectableCardProps: S,
        checkboxSlot: y,
        floatingActionSlot: x
    }
}
  , U0 = b.createContext(void 0)
  , ic = {
    selectableA11yProps: {
        referenceId: void 0,
        setReferenceId() {},
        referenceLabel: void 0,
        setReferenceLabel() {}
    }
}
  , B4 = U0.Provider
  , V0 = ()=>{
    var e;
    return (e = b.useContext(U0)) !== null && e !== void 0 ? e : ic
}
  , E4 = {
    off: void 0,
    "no-tab": "limited-trap-focus",
    "tab-exit": "limited",
    "tab-only": "unlimited"
}
  , P4 = ({focusMode: e="off", ...t})=>{
    const r = ["onClick", "onDoubleClick", "onMouseUp", "onMouseDown", "onPointerUp", "onPointerDown", "onTouchStart", "onTouchEnd", "onDragStart", "onDragEnd"].some(i=>t[i])
      , n = {
        ...IS({
            tabBehavior: E4[r ? "no-tab" : e]
        }),
        tabIndex: 0
    };
    return {
        interactive: r,
        focusAttributes: !r && e === "off" ? null : n
    }
}
  , C4 = (e,t)=>{
    const {appearance: r="filled", orientation: o="vertical", size: n="medium"} = e
      , [i,a] = b.useState(ic.selectableA11yProps.referenceId)
      , [s,l] = b.useState(ic.selectableA11yProps.referenceId)
      , u = qS()
      , {selectable: d, selected: c, selectableCardProps: f, selectFocused: h, checkboxSlot: p, floatingActionSlot: m} = _4(e, {
        referenceId: i,
        referenceLabel: s
    }, u)
      , w = Ar(u, t)
      , {interactive: v, focusAttributes: g} = P4(e);
    return {
        appearance: r,
        orientation: o,
        size: n,
        interactive: v,
        selectable: d,
        selectFocused: h,
        selected: c,
        selectableA11yProps: {
            setReferenceId: a,
            referenceId: i,
            referenceLabel: s,
            setReferenceLabel: l
        },
        components: {
            root: "div",
            floatingAction: "div",
            checkbox: "input"
        },
        root: pe(Oe("div", {
            ref: w,
            role: "group",
            ...g,
            ...e,
            ...f
        }), {
            elementType: "div"
        }),
        floatingAction: m,
        checkbox: p
    }
}
  , T4 = (e,t)=>q(e.root, {
    children: ut(B4, {
        value: t,
        children: [e.checkbox ? q(e.checkbox, {}) : null, e.floatingAction ? q(e.floatingAction, {}) : null, e.root.children]
    })
})
  , ac = {
    root: "fui-CardPreview",
    logo: "fui-CardPreview__logo"
}
  , N4 = U({
    root: {
        qhf8xq: "f10pi13n",
        pnb5jt: "f1rzl30s",
        Elg2ur: "f1chxnfo",
        B184ckt: "f17xb19f"
    },
    logo: {
        qhf8xq: "f1euv43f",
        B5kzvoi: "f1gcvs1y",
        oyh7mz: ["f1t6tvco", "ffrfxm3"],
        a9b677: "f1szoe96",
        Bqenvij: "f1d2rq10"
    }
}, {
    d: [".f10pi13n{position:relative;}", ".f1rzl30s>:not(.fui-CardPreview__logo){display:block;}", ".f1chxnfo>:not(.fui-CardPreview__logo){height:100%;}", ".f17xb19f>:not(.fui-CardPreview__logo){width:100%;}", ".f1euv43f{position:absolute;}", ".f1gcvs1y{bottom:12px;}", ".f1t6tvco{left:12px;}", ".ffrfxm3{right:12px;}", ".f1szoe96{width:32px;}", ".f1d2rq10{height:32px;}"]
})
  , z4 = e=>{
    const t = N4();
    return e.root.className = W(ac.root, t.root, e.root.className),
    e.logo && (e.logo.className = W(ac.logo, t.logo, e.logo.className)),
    e
}
  , Eo = {
    root: "fui-CardHeader",
    image: "fui-CardHeader__image",
    header: "fui-CardHeader__header",
    description: "fui-CardHeader__description",
    action: "fui-CardHeader__action"
}
  , F4 = U({
    root: {
        Bkc6ea2: "fkufhic",
        mc9l5x: "f13qh94s",
        t4k1zu: "f8a668j",
        Bt984gj: "f122n59"
    },
    image: {
        mc9l5x: "ftuwxu6",
        t21cq0: ["fql5097", "f6yss9k"],
        Br312pm: "fwpfdsa",
        Ijaq50: "fldnz9j"
    },
    header: {
        Br312pm: "fd46tj4",
        Ijaq50: "f16hsg94",
        mc9l5x: "f22iagw"
    },
    description: {
        Br312pm: "fd46tj4",
        Ijaq50: "faunodf",
        mc9l5x: "f22iagw"
    },
    action: {
        Frg6f3: ["f6yss9k", "fql5097"],
        Br312pm: "fis13di",
        Ijaq50: "fldnz9j"
    }
}, {
    d: [".fkufhic{--fui-CardHeader--gap:12px;}", ".f13qh94s{display:grid;}", ".f8a668j{grid-auto-columns:min-content 1fr min-content;}", ".f122n59{align-items:center;}", ".ftuwxu6{display:inline-flex;}", ".fql5097{margin-right:var(--fui-CardHeader--gap);}", ".f6yss9k{margin-left:var(--fui-CardHeader--gap);}", ".fwpfdsa{grid-column-start:1;}", ".fldnz9j{grid-row-start:span 2;}", ".fd46tj4{grid-column-start:2;}", ".f16hsg94{grid-row-start:1;}", ".f22iagw{display:flex;}", ".faunodf{grid-row-start:2;}", ".fis13di{grid-column-start:3;}"]
})
  , R4 = e=>{
    const t = F4();
    return e.root.className = W(Eo.root, t.root, e.root.className),
    e.image && (e.image.className = W(Eo.image, t.image, e.image.className)),
    e.header && (e.header.className = W(Eo.header, t.header, e.header.className)),
    e.description && (e.description.className = W(Eo.description, t.description, e.description.className)),
    e.action && (e.action.className = W(Eo.action, t.action, e.action.className)),
    e
}
  , ql = {
    root: "fui-Card",
    floatingAction: "fui-Card__floatingAction",
    checkbox: "fui-Card__checkbox"
}
  , D4 = U({
    root: {
        B68tc82: "f1p9o1ba",
        Bmxbyg5: "f1sil6mw",
        Bbmb7ep: ["fifeqxg", "f899z7z"],
        Beyfa6y: ["f899z7z", "fifeqxg"],
        B7oj6ja: ["f4h3tyx", "f18ur2pz"],
        Btl43ni: ["f18ur2pz", "f4h3tyx"],
        z8tnut: "f1lplnzb",
        z189sj: ["f10m5gbb", "f1k04kkk"],
        Byoj8tv: "fhftqfp",
        uwmqm3: ["f1k04kkk", "f10m5gbb"],
        i8kkvl: "fxsr4vj",
        Belr9w4: "fcvsdzp",
        mc9l5x: "f22iagw",
        qhf8xq: "f10pi13n",
        B7ck84d: "f1ewtqcl",
        sj55zd: "f19n0e5",
        E3zdtr: "f1mdlcz9",
        bn5sak: "frwkxtg",
        Eqx8gd: ["f1n6gb5g", "f15yvnhg"],
        B1piin3: ["f15yvnhg", "f1n6gb5g"],
        By385i5: "fo72kxq",
        Bsft5z2: "f13zj6fq",
        B80jsxd: "f1nwj1ja",
        Bm2nyyq: "f8rth92",
        Barhvk9: ["flthirb", "ftkbnf5"],
        Bw17bha: "f1lh990p",
        vfts7: ["ftkbnf5", "flthirb"],
        xrcqlc: "f6czdpx",
        Ihftqj: ["f13hvwk3", "f1en4csx"],
        Bcgy8vk: "f1i1u9k0",
        Bhxzhr1: ["f1en4csx", "f13hvwk3"],
        B3778ie: ["f1qnomq5", "f2fl922"],
        d9w3h3: ["f2fl922", "f1qnomq5"],
        Bl18szs: ["f1anhtl", "f1n2zcl3"],
        B4j8arr: ["f1n2zcl3", "f1anhtl"],
        B2jhnfs: "f16v3d5c",
        wiictr: "f1su8t2g"
    },
    focused: {
        Brovlpu: "ftqa4ok",
        B486eqv: "f2hkw1w",
        B8q5s1w: "f8hki3x",
        Bci5o5g: ["f1d2448m", "ffh67wi"],
        n8qw10: "f1bjia2o",
        Bdrgwmp: ["ffh67wi", "f1d2448m"],
        Bb7d1vk: "f226i61",
        zhwhgb: ["f13kzufm", "fsx75g8"],
        dhy2o1: "flujwa2",
        Gfyso: ["fsx75g8", "f13kzufm"],
        Bm4h7ae: "f15bsgw9",
        B7ys5i9: "f14e48fq",
        Busjfv9: "f18yb2kv",
        Bhk32uz: "fd6o370",
        Bf4ptjt: "fh1cnn4",
        kclons: ["fy7oxxb", "f184ne2d"],
        Bhdgwq3: "fpukqih",
        Blkhhs4: ["f184ne2d", "fy7oxxb"],
        Bqtpl0w: "f99gebs",
        clg4pj: ["f13b0oaq", "f8t2bz6"],
        hgwjuy: "f1jvq617",
        Bonggc9: ["f8t2bz6", "f13b0oaq"],
        B1tsrr9: ["f11unbnk", "fbd201q"],
        Dah5zi: ["fbd201q", "f11unbnk"],
        Bkh64rk: ["f12nqxso", "f1uguk4w"],
        qqdqy8: ["f1uguk4w", "f12nqxso"],
        B6dhp37: "f1dvezut",
        i03rao: ["fd0oaoj", "f1cwg4i8"],
        Boxcth7: "fjvm52t",
        Bsom6fd: ["f1cwg4i8", "fd0oaoj"],
        J0r882: "f15fr7a0",
        Bule8hv: ["fwsq40z", "fy0y4wt"],
        Bjwuhne: "f34ld9f",
        Ghsupd: ["fy0y4wt", "fwsq40z"]
    },
    selectableFocused: {
        Brovlpu: "ftqa4ok",
        B486eqv: "f2hkw1w",
        Bssx7fj: "f1b1k54r",
        uh7if5: ["f4ne723", "fqqcjud"],
        clntm0: "fh7aioi",
        Dlk2r6: ["fqqcjud", "f4ne723"],
        Bm3wd5j: "f1k55ka9",
        Bbrhkcr: ["fgclinu", "f16pcs8n"],
        f1oku: "fycbxed",
        aywvf2: ["f16pcs8n", "fgclinu"],
        B2j2mmj: "ffht0p2",
        wigs8: "f1p0ul1q",
        pbfy6t: "f1c901ms",
        B0v4ure: "f1alokd7",
        ghq09: "f78i1la",
        B24cy0v: ["f1kvsw7t", "f1bw8brt"],
        Bwckmig: "f8k7e5g",
        Bvwlmkc: ["f1bw8brt", "f1kvsw7t"],
        Bbgo44z: "f125hn41",
        Bil7v7r: ["fgxkx34", "f1v56tyl"],
        skfxo0: "fdxas6f",
        jo1ztg: ["f1v56tyl", "fgxkx34"],
        Ba3ybja: ["fxwickw", "f1ia5cve"],
        az1dzo: ["f1ia5cve", "fxwickw"],
        vppk2z: ["f194aguw", "fqicc6c"],
        B6352mv: ["fqicc6c", "f194aguw"],
        nr063g: "fq4eyks",
        Blmvk6g: ["f1ya6x16", "ftuszwa"],
        Bsiemmq: "f1e2iu44",
        B98u21t: ["ftuszwa", "f1ya6x16"],
        B2pnrqr: "f1amxum7",
        B29w5g4: ["f1cec8w7", "f554mv0"],
        Bhhzhcn: "f1sj6kbr",
        Bec0n69: ["f554mv0", "f1cec8w7"]
    },
    orientationHorizontal: {
        Beiy3e4: "f1063pyq",
        Bt984gj: "f122n59",
        Bnoktp0: "fpfyeui",
        Idhjb2: "fwi74qw",
        ihgzqh: ["ffcmwrh", "f6ppoih"],
        Bgp6ld0: ["f1dc9p14", "fd933vt"],
        Bbucpmy: "f18esqgw"
    },
    orientationVertical: {
        Beiy3e4: "f1vx9l62",
        Bt4kzjz: ["fobhde4", "fx5r7kn"],
        B1ou843: ["fx5r7kn", "fobhde4"],
        y1433z: "f19chtn8",
        B7egwnw: "fuvs6re",
        B49b4xf: "fy4glsf"
    },
    sizeSmall: {
        B7balbw: "f1pi9uxy",
        B1h88n7: "f1h1zgly"
    },
    sizeMedium: {
        B7balbw: "frsmuga",
        B1h88n7: "fuldkky"
    },
    sizeLarge: {
        B7balbw: "f1qua4xo",
        B1h88n7: "fimkt6v"
    },
    filled: {
        De3pzq: "fxugw4r",
        E5pizo: "f1whvlc6",
        B0n5ga8: "f16gxe2i",
        s924m2: ["fpgykix", "fzybk4o"],
        B1q35kw: "f1osi826",
        Gp14am: ["fzybk4o", "fpgykix"]
    },
    filledInteractive: {
        Bceei9c: "f1k6fduh",
        De3pzq: "fxugw4r",
        E5pizo: "f1whvlc6",
        B0n5ga8: "f16gxe2i",
        s924m2: ["fpgykix", "fzybk4o"],
        B1q35kw: "f1osi826",
        Gp14am: ["fzybk4o", "fpgykix"],
        Jwef8y: "f1knas48",
        Bvxd0ez: "f1m145df",
        ecr2s2: "fb40n2d"
    },
    filledInteractiveSelected: {
        De3pzq: "f1nfm20t",
        B0n5ga8: "f16eln5f",
        s924m2: ["fa2okxs", "fg4zq3l"],
        B1q35kw: "ff6932p",
        Gp14am: ["fg4zq3l", "fa2okxs"],
        Jwef8y: "f1kz6goq"
    },
    filledAlternative: {
        De3pzq: "f1dmdbja",
        E5pizo: "f1whvlc6",
        B0n5ga8: "f16gxe2i",
        s924m2: ["fpgykix", "fzybk4o"],
        B1q35kw: "f1osi826",
        Gp14am: ["fzybk4o", "fpgykix"]
    },
    filledAlternativeInteractive: {
        Bceei9c: "f1k6fduh",
        De3pzq: "f1dmdbja",
        E5pizo: "f1whvlc6",
        B0n5ga8: "f16gxe2i",
        s924m2: ["fpgykix", "fzybk4o"],
        B1q35kw: "f1osi826",
        Gp14am: ["fzybk4o", "fpgykix"],
        Jwef8y: "f1uvynv3",
        Bvxd0ez: "f1m145df",
        ecr2s2: "f1yhgkbh"
    },
    filledAlternativeInteractiveSelected: {
        De3pzq: "fjxa0vh",
        B0n5ga8: "f16eln5f",
        s924m2: ["fa2okxs", "fg4zq3l"],
        B1q35kw: "ff6932p",
        Gp14am: ["fg4zq3l", "fa2okxs"],
        Jwef8y: "fehi0vp"
    },
    outline: {
        De3pzq: "f1c21dwh",
        E5pizo: "f1couhl3",
        B0n5ga8: "ft83z1f",
        s924m2: ["f1g4150c", "f192dr6e"],
        B1q35kw: "f1qnawh6",
        Gp14am: ["f192dr6e", "f1g4150c"]
    },
    outlineInteractive: {
        Bceei9c: "f1k6fduh",
        De3pzq: "f1c21dwh",
        E5pizo: "f1couhl3",
        B0n5ga8: "ft83z1f",
        s924m2: ["f1g4150c", "f192dr6e"],
        B1q35kw: "f1qnawh6",
        Gp14am: ["f192dr6e", "f1g4150c"],
        Jwef8y: "fjxutwb",
        Be0v6ae: "f1llr77y",
        B5kxglz: ["fzk0khw", "fjj8tog"],
        B3pwyw6: "fb1u8ub",
        Bymgtzf: ["fjj8tog", "fzk0khw"],
        ecr2s2: "fophhak",
        dmfk: "f1uohb70",
        B4ofi8: ["f1jm7v1n", "f1bus3rq"],
        jgq6uv: "f1fbu7rr",
        Baxewws: ["f1bus3rq", "f1jm7v1n"]
    },
    outlineInteractiveSelected: {
        De3pzq: "f1q9pm1r",
        B0n5ga8: "f16eln5f",
        s924m2: ["fa2okxs", "fg4zq3l"],
        B1q35kw: "ff6932p",
        Gp14am: ["fg4zq3l", "fa2okxs"],
        Jwef8y: "fg59vm4"
    },
    subtle: {
        De3pzq: "fhovq9v",
        E5pizo: "f1couhl3",
        B0n5ga8: "f16gxe2i",
        s924m2: ["fpgykix", "fzybk4o"],
        B1q35kw: "f1osi826",
        Gp14am: ["fzybk4o", "fpgykix"]
    },
    subtleInteractive: {
        Bceei9c: "f1k6fduh",
        De3pzq: "fhovq9v",
        E5pizo: "f1couhl3",
        B0n5ga8: "f16gxe2i",
        s924m2: ["fpgykix", "fzybk4o"],
        B1q35kw: "f1osi826",
        Gp14am: ["fzybk4o", "fpgykix"],
        Jwef8y: "f1t94bn6",
        ecr2s2: "f1wfn5kd"
    },
    subtleInteractiveSelected: {
        De3pzq: "fq5gl1p",
        B0n5ga8: "f16eln5f",
        s924m2: ["fa2okxs", "fg4zq3l"],
        B1q35kw: "ff6932p",
        Gp14am: ["fg4zq3l", "fa2okxs"],
        Jwef8y: "f1uqaxdt"
    },
    highContrastSelected: {
        ycbfsm: "fkc42ay",
        Bsw6fvg: "f1rirnrt",
        Bbusuzp: "f1lkg8j3",
        xgfqdd: "f1nkj0oa",
        Bmmdzwq: "fey3rwa",
        zkpvhj: ["f5jhx11", "fff9uym"],
        B20bydw: "fm7n0jy",
        Bwwwggl: ["fff9uym", "f5jhx11"]
    },
    highContrastInteractive: {
        h1vhog: "fpfvv3l",
        kslmdy: "f1oamsm6",
        Baaf6ca: "f1il21bs",
        x9zz3d: "fnn5dk0",
        Bmmdzwq: "fey3rwa",
        zkpvhj: ["f5jhx11", "fff9uym"],
        B20bydw: "fm7n0jy",
        Bwwwggl: ["fff9uym", "f5jhx11"]
    },
    select: {
        qhf8xq: "f1euv43f",
        Bhzewxz: "fqclxi7",
        j35jbq: ["fiv86kb", "f36uhnt"],
        Bj3rh1h: "f19g0ac"
    },
    hiddenCheckbox: {
        B68tc82: "f1p9o1ba",
        Bmxbyg5: "f1sil6mw",
        a9b677: "frkrog8",
        Bqenvij: "f1mpe4l3",
        qhf8xq: "f1euv43f",
        Bh84pgu: "fmf1zke",
        Bgl5zvf: "f1wch0ki",
        Huce71: "fz5stix"
    }
}, {
    d: [".f1p9o1ba{overflow-x:hidden;}", ".f1sil6mw{overflow-y:hidden;}", ".fifeqxg{border-bottom-right-radius:var(--fui-Card--border-radius);}", ".f899z7z{border-bottom-left-radius:var(--fui-Card--border-radius);}", ".f4h3tyx{border-top-right-radius:var(--fui-Card--border-radius);}", ".f18ur2pz{border-top-left-radius:var(--fui-Card--border-radius);}", ".f1lplnzb{padding-top:var(--fui-Card--size);}", ".f10m5gbb{padding-right:var(--fui-Card--size);}", ".f1k04kkk{padding-left:var(--fui-Card--size);}", ".fhftqfp{padding-bottom:var(--fui-Card--size);}", ".fxsr4vj{column-gap:var(--fui-Card--size);}", ".fcvsdzp{row-gap:var(--fui-Card--size);}", ".f22iagw{display:flex;}", ".f10pi13n{position:relative;}", ".f1ewtqcl{box-sizing:border-box;}", ".f19n0e5{color:var(--colorNeutralForeground1);}", ".f1mdlcz9::after{position:absolute;}", ".frwkxtg::after{top:0;}", ".f1n6gb5g::after{left:0;}", ".f15yvnhg::after{right:0;}", ".fo72kxq::after{bottom:0;}", '.f13zj6fq::after{content:"";}', ".f1nwj1ja::after{pointer-events:none;}", ".f8rth92::after{border-top-style:solid;}", ".flthirb::after{border-right-style:solid;}", ".ftkbnf5::after{border-left-style:solid;}", ".f1lh990p::after{border-bottom-style:solid;}", ".f6czdpx::after{border-top-width:var(--strokeWidthThin);}", ".f13hvwk3::after{border-right-width:var(--strokeWidthThin);}", ".f1en4csx::after{border-left-width:var(--strokeWidthThin);}", ".f1i1u9k0::after{border-bottom-width:var(--strokeWidthThin);}", ".f1qnomq5::after{border-bottom-right-radius:var(--fui-Card--border-radius);}", ".f2fl922::after{border-bottom-left-radius:var(--fui-Card--border-radius);}", ".f1anhtl::after{border-top-right-radius:var(--fui-Card--border-radius);}", ".f1n2zcl3::after{border-top-left-radius:var(--fui-Card--border-radius);}", ".f16v3d5c>.fui-CardHeader,.f16v3d5c>.fui-CardFooter{flex-shrink:0;}", ".f1su8t2g>:not(.fui-CardPreview):not(.fui-CardHeader):not(.fui-CardFooter){flex-grow:1;}", ".f8hki3x[data-fui-focus-visible]{border-top-color:transparent;}", ".f1d2448m[data-fui-focus-visible]{border-right-color:transparent;}", ".ffh67wi[data-fui-focus-visible]{border-left-color:transparent;}", ".f1bjia2o[data-fui-focus-visible]{border-bottom-color:transparent;}", '.f15bsgw9[data-fui-focus-visible]::after{content:"";}', ".f14e48fq[data-fui-focus-visible]::after{position:absolute;}", ".f18yb2kv[data-fui-focus-visible]::after{pointer-events:none;}", ".fd6o370[data-fui-focus-visible]::after{z-index:1;}", ".fh1cnn4[data-fui-focus-visible]::after{border-top-style:solid;}", ".fy7oxxb[data-fui-focus-visible]::after{border-right-style:solid;}", ".f184ne2d[data-fui-focus-visible]::after{border-left-style:solid;}", ".fpukqih[data-fui-focus-visible]::after{border-bottom-style:solid;}", ".f99gebs[data-fui-focus-visible]::after{border-top-width:var(--strokeWidthThick);}", ".f13b0oaq[data-fui-focus-visible]::after{border-right-width:var(--strokeWidthThick);}", ".f8t2bz6[data-fui-focus-visible]::after{border-left-width:var(--strokeWidthThick);}", ".f1jvq617[data-fui-focus-visible]::after{border-bottom-width:var(--strokeWidthThick);}", ".f11unbnk[data-fui-focus-visible]::after{border-bottom-right-radius:var(--fui-Card--border-radius);}", ".fbd201q[data-fui-focus-visible]::after{border-bottom-left-radius:var(--fui-Card--border-radius);}", ".f12nqxso[data-fui-focus-visible]::after{border-top-right-radius:var(--fui-Card--border-radius);}", ".f1uguk4w[data-fui-focus-visible]::after{border-top-left-radius:var(--fui-Card--border-radius);}", ".f1dvezut[data-fui-focus-visible]::after{border-top-color:var(--colorStrokeFocus2);}", ".fd0oaoj[data-fui-focus-visible]::after{border-right-color:var(--colorStrokeFocus2);}", ".f1cwg4i8[data-fui-focus-visible]::after{border-left-color:var(--colorStrokeFocus2);}", ".fjvm52t[data-fui-focus-visible]::after{border-bottom-color:var(--colorStrokeFocus2);}", ".f15fr7a0[data-fui-focus-visible]::after{top:calc(0px - var(--strokeWidthThick) - -2px);}", ".fwsq40z[data-fui-focus-visible]::after{right:calc(0px - var(--strokeWidthThick) - -2px);}", ".fy0y4wt[data-fui-focus-visible]::after{left:calc(0px - var(--strokeWidthThick) - -2px);}", ".f34ld9f[data-fui-focus-visible]::after{bottom:calc(0px - var(--strokeWidthThick) - -2px);}", ".f1b1k54r[data-fui-focus-within]:focus-within{border-top-color:transparent;}", ".f4ne723[data-fui-focus-within]:focus-within{border-right-color:transparent;}", ".fqqcjud[data-fui-focus-within]:focus-within{border-left-color:transparent;}", ".fh7aioi[data-fui-focus-within]:focus-within{border-bottom-color:transparent;}", '.ffht0p2[data-fui-focus-within]:focus-within::after{content:"";}', ".f1p0ul1q[data-fui-focus-within]:focus-within::after{position:absolute;}", ".f1c901ms[data-fui-focus-within]:focus-within::after{pointer-events:none;}", ".f1alokd7[data-fui-focus-within]:focus-within::after{z-index:1;}", ".f78i1la[data-fui-focus-within]:focus-within::after{border-top-style:solid;}", ".f1kvsw7t[data-fui-focus-within]:focus-within::after{border-right-style:solid;}", ".f1bw8brt[data-fui-focus-within]:focus-within::after{border-left-style:solid;}", ".f8k7e5g[data-fui-focus-within]:focus-within::after{border-bottom-style:solid;}", ".f125hn41[data-fui-focus-within]:focus-within::after{border-top-width:var(--strokeWidthThick);}", ".fgxkx34[data-fui-focus-within]:focus-within::after{border-right-width:var(--strokeWidthThick);}", ".f1v56tyl[data-fui-focus-within]:focus-within::after{border-left-width:var(--strokeWidthThick);}", ".fdxas6f[data-fui-focus-within]:focus-within::after{border-bottom-width:var(--strokeWidthThick);}", ".fxwickw[data-fui-focus-within]:focus-within::after{border-bottom-right-radius:var(--fui-Card--border-radius);}", ".f1ia5cve[data-fui-focus-within]:focus-within::after{border-bottom-left-radius:var(--fui-Card--border-radius);}", ".f194aguw[data-fui-focus-within]:focus-within::after{border-top-right-radius:var(--fui-Card--border-radius);}", ".fqicc6c[data-fui-focus-within]:focus-within::after{border-top-left-radius:var(--fui-Card--border-radius);}", ".fq4eyks[data-fui-focus-within]:focus-within::after{border-top-color:var(--colorStrokeFocus2);}", ".f1ya6x16[data-fui-focus-within]:focus-within::after{border-right-color:var(--colorStrokeFocus2);}", ".ftuszwa[data-fui-focus-within]:focus-within::after{border-left-color:var(--colorStrokeFocus2);}", ".f1e2iu44[data-fui-focus-within]:focus-within::after{border-bottom-color:var(--colorStrokeFocus2);}", ".f1amxum7[data-fui-focus-within]:focus-within::after{top:calc(0px - var(--strokeWidthThick) - -2px);}", ".f1cec8w7[data-fui-focus-within]:focus-within::after{right:calc(0px - var(--strokeWidthThick) - -2px);}", ".f554mv0[data-fui-focus-within]:focus-within::after{left:calc(0px - var(--strokeWidthThick) - -2px);}", ".f1sj6kbr[data-fui-focus-within]:focus-within::after{bottom:calc(0px - var(--strokeWidthThick) - -2px);}", ".f1063pyq{flex-direction:row;}", ".f122n59{align-items:center;}", ".fpfyeui>.fui-CardPreview{margin-top:calc(var(--fui-Card--size) * -1);}", ".fwi74qw>.fui-CardPreview{margin-bottom:calc(var(--fui-Card--size) * -1);}", '.ffcmwrh>:not([aria-hidden="true"]).fui-CardPreview:first-of-type{margin-left:calc(var(--fui-Card--size) * -1);}', '.f6ppoih>:not([aria-hidden="true"]).fui-CardPreview:first-of-type{margin-right:calc(var(--fui-Card--size) * -1);}', '.f1dc9p14>:not([aria-hidden="true"]).fui-CardPreview:last-of-type{margin-right:calc(var(--fui-Card--size) * -1);}', '.fd933vt>:not([aria-hidden="true"]).fui-CardPreview:last-of-type{margin-left:calc(var(--fui-Card--size) * -1);}', ".f18esqgw>.fui-CardHeader:last-of-type,.f18esqgw>.fui-CardFooter:last-of-type{flex-grow:1;}", ".f1vx9l62{flex-direction:column;}", ".fobhde4>.fui-CardPreview{margin-left:calc(var(--fui-Card--size) * -1);}", ".fx5r7kn>.fui-CardPreview{margin-right:calc(var(--fui-Card--size) * -1);}", '.f19chtn8>:not([aria-hidden="true"]).fui-CardPreview:first-of-type{margin-top:calc(var(--fui-Card--size) * -1);}', ".fuvs6re>.fui-Card__floatingAction+.fui-CardPreview{margin-top:calc(var(--fui-Card--size) * -1);}", '.fy4glsf>:not([aria-hidden="true"]).fui-CardPreview:last-of-type{margin-bottom:calc(var(--fui-Card--size) * -1);}', ".f1pi9uxy{--fui-Card--size:8px;}", ".f1h1zgly{--fui-Card--border-radius:var(--borderRadiusSmall);}", ".frsmuga{--fui-Card--size:12px;}", ".fuldkky{--fui-Card--border-radius:var(--borderRadiusMedium);}", ".f1qua4xo{--fui-Card--size:16px;}", ".fimkt6v{--fui-Card--border-radius:var(--borderRadiusLarge);}", ".fxugw4r{background-color:var(--colorNeutralBackground1);}", ".f1whvlc6{box-shadow:var(--shadow4);}", ".f16gxe2i::after{border-top-color:var(--colorTransparentStroke);}", ".fpgykix::after{border-right-color:var(--colorTransparentStroke);}", ".fzybk4o::after{border-left-color:var(--colorTransparentStroke);}", ".f1osi826::after{border-bottom-color:var(--colorTransparentStroke);}", ".f1k6fduh{cursor:pointer;}", ".f1nfm20t{background-color:var(--colorNeutralBackground1Selected);}", ".f16eln5f::after{border-top-color:var(--colorNeutralStroke1Selected);}", ".fa2okxs::after{border-right-color:var(--colorNeutralStroke1Selected);}", ".fg4zq3l::after{border-left-color:var(--colorNeutralStroke1Selected);}", ".ff6932p::after{border-bottom-color:var(--colorNeutralStroke1Selected);}", ".f1dmdbja{background-color:var(--colorNeutralBackground2);}", ".fjxa0vh{background-color:var(--colorNeutralBackground2Selected);}", ".f1c21dwh{background-color:var(--colorTransparentBackground);}", ".f1couhl3{box-shadow:none;}", ".ft83z1f::after{border-top-color:var(--colorNeutralStroke1);}", ".f1g4150c::after{border-right-color:var(--colorNeutralStroke1);}", ".f192dr6e::after{border-left-color:var(--colorNeutralStroke1);}", ".f1qnawh6::after{border-bottom-color:var(--colorNeutralStroke1);}", ".f1q9pm1r{background-color:var(--colorTransparentBackgroundSelected);}", ".fhovq9v{background-color:var(--colorSubtleBackground);}", ".fq5gl1p{background-color:var(--colorSubtleBackgroundSelected);}", ".f1euv43f{position:absolute;}", ".fqclxi7{top:4px;}", ".fiv86kb{right:4px;}", ".f36uhnt{left:4px;}", ".f19g0ac{z-index:1;}", ".frkrog8{width:1px;}", ".f1mpe4l3{height:1px;}", ".fmf1zke{clip:rect(0 0 0 0);}", ".f1wch0ki{clip-path:inset(50%);}", ".fz5stix{white-space:nowrap;}"],
    f: [".ftqa4ok:focus{outline-style:none;}"],
    i: [".f2hkw1w:focus-visible{outline-style:none;}"],
    m: [["@media (forced-colors: active){.f226i61[data-fui-focus-visible]::after{border-top-color:Highlight;}}", {
        m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f13kzufm[data-fui-focus-visible]::after{border-right-color:Highlight;}.fsx75g8[data-fui-focus-visible]::after{border-left-color:Highlight;}}", {
        m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.flujwa2[data-fui-focus-visible]::after{border-bottom-color:Highlight;}}", {
        m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f1k55ka9[data-fui-focus-within]:focus-within::after{border-top-color:Highlight;}}", {
        m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f16pcs8n[data-fui-focus-within]:focus-within::after{border-left-color:Highlight;}.fgclinu[data-fui-focus-within]:focus-within::after{border-right-color:Highlight;}}", {
        m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.fycbxed[data-fui-focus-within]:focus-within::after{border-bottom-color:Highlight;}}", {
        m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.fkc42ay{forced-color-adjust:none;}}", {
        m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f1rirnrt{background-color:Highlight;}}", {
        m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f1lkg8j3{color:HighlightText;}}", {
        m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f1nkj0oa .fui-CardPreview,.f1nkj0oa .fui-CardFooter{forced-color-adjust:auto;}}", {
        m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.fey3rwa::after{border-top-color:Highlight;}}", {
        m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f5jhx11::after{border-right-color:Highlight;}.fff9uym::after{border-left-color:Highlight;}}", {
        m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.fm7n0jy::after{border-bottom-color:Highlight;}}", {
        m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.fpfvv3l:hover,.fpfvv3l :active{forced-color-adjust:none;}}", {
        m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f1oamsm6:hover,.f1oamsm6 :active{background-color:Highlight;}}", {
        m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.f1il21bs:hover,.f1il21bs :active{color:HighlightText;}}", {
        m: "(forced-colors: active)"
    }], ["@media (forced-colors: active){.fnn5dk0:hover .fui-CardPreview,.fnn5dk0 :active .fui-CardPreview,.fnn5dk0:hover .fui-CardFooter,.fnn5dk0 :active .fui-CardFooter{forced-color-adjust:auto;}}", {
        m: "(forced-colors: active)"
    }]],
    h: [".f1knas48:hover{background-color:var(--colorNeutralBackground1Hover);}", ".f1m145df:hover{box-shadow:var(--shadow8);}", ".f1kz6goq:hover{background-color:var(--colorNeutralBackground1Selected);}", ".f1uvynv3:hover{background-color:var(--colorNeutralBackground2Hover);}", ".fehi0vp:hover{background-color:var(--colorNeutralBackground2Selected);}", ".fjxutwb:hover{background-color:var(--colorTransparentBackgroundHover);}", ".f1llr77y:hover::after{border-top-color:var(--colorNeutralStroke1Hover);}", ".fzk0khw:hover::after{border-right-color:var(--colorNeutralStroke1Hover);}", ".fjj8tog:hover::after{border-left-color:var(--colorNeutralStroke1Hover);}", ".fb1u8ub:hover::after{border-bottom-color:var(--colorNeutralStroke1Hover);}", ".fg59vm4:hover{background-color:var(--colorTransparentBackgroundSelected);}", ".f1t94bn6:hover{background-color:var(--colorSubtleBackgroundHover);}", ".f1uqaxdt:hover{background-color:var(--colorSubtleBackgroundSelected);}"],
    a: [".fb40n2d:active{background-color:var(--colorNeutralBackground1Pressed);}", ".f1yhgkbh:active{background-color:var(--colorNeutralBackground2Pressed);}", ".fophhak:active{background-color:var(--colorTransparentBackgroundPressed);}", ".f1uohb70:active::after{border-top-color:var(--colorNeutralStroke1Pressed);}", ".f1jm7v1n:active::after{border-right-color:var(--colorNeutralStroke1Pressed);}", ".f1bus3rq:active::after{border-left-color:var(--colorNeutralStroke1Pressed);}", ".f1fbu7rr:active::after{border-bottom-color:var(--colorNeutralStroke1Pressed);}", ".f1wfn5kd:active{background-color:var(--colorSubtleBackgroundPressed);}"]
})
  , j4 = e=>{
    const t = D4()
      , r = {
        horizontal: t.orientationHorizontal,
        vertical: t.orientationVertical
    }
      , o = {
        small: t.sizeSmall,
        medium: t.sizeMedium,
        large: t.sizeLarge
    }
      , n = {
        filled: t.filled,
        "filled-alternative": t.filledAlternative,
        outline: t.outline,
        subtle: t.subtle
    }
      , i = {
        filled: t.filledInteractiveSelected,
        "filled-alternative": t.filledAlternativeInteractiveSelected,
        outline: t.outlineInteractiveSelected,
        subtle: t.subtleInteractiveSelected
    }
      , a = {
        filled: t.filledInteractive,
        "filled-alternative": t.filledAlternativeInteractive,
        outline: t.outlineInteractive,
        subtle: t.subtleInteractive
    }
      , s = e.interactive || e.selectable
      , l = b.useMemo(()=>e.selectable ? e.selectFocused ? t.selectableFocused : "" : t.focused, [e.selectFocused, e.selectable, t.focused, t.selectableFocused]);
    return e.root.className = W(ql.root, t.root, r[e.orientation], o[e.size], n[e.appearance], s && a[e.appearance], e.selected && i[e.appearance], l, s && t.highContrastInteractive, e.selected && t.highContrastSelected, e.root.className),
    e.floatingAction && (e.floatingAction.className = W(ql.floatingAction, t.select, e.floatingAction.className)),
    e.checkbox && (e.checkbox.className = W(ql.checkbox, t.hiddenCheckbox, e.checkbox.className)),
    e
}
;
function I4({selectableA11yProps: e}) {
    return {
        selectableA11yProps: e
    }
}
const G0 = b.forwardRef((e,t)=>{
    const r = C4(e, t)
      , o = I4(r);
    return j4(r),
    T4(r, o)
}
);
G0.displayName = "Card";
function A4(e) {
    function t(r) {
        return b.isValidElement(r) && !!r.props.id
    }
    return b.Children.toArray(e).find(t)
}
function O4(e, t, r) {
    return e || (t != null && t.props.id ? t.props.id : r)
}
const L4 = (e,t)=>{
    const {image: r, header: o, description: n, action: i} = e
      , {selectableA11yProps: {referenceId: a, setReferenceId: s}} = V0()
      , l = b.useRef(null)
      , u = b.useRef(!1)
      , d = pn(Eo.header, a)
      , c = He(o, {
        renderByDefault: !0,
        defaultProps: {
            ref: l,
            id: u.current ? void 0 : a
        },
        elementType: "div"
    });
    return b.useEffect(()=>{
        var f;
        const h = u.current || (f = l.current) === null || f === void 0 ? void 0 : f.id
          , p = A4(c == null ? void 0 : c.children);
        u.current = !!p,
        s(O4(h, p, d))
    }
    , [d, o, c, s]),
    {
        components: {
            root: "div",
            image: "div",
            header: "div",
            description: "div",
            action: "div"
        },
        root: pe(Oe("div", {
            ref: t,
            ...e
        }), {
            elementType: "div"
        }),
        image: He(r, {
            elementType: "div"
        }),
        header: c,
        description: He(n, {
            elementType: "div"
        }),
        action: He(i, {
            elementType: "div"
        })
    }
}
  , M4 = e=>ut(e.root, {
    children: [e.image && q(e.image, {}), q(e.header, {}), e.description && q(e.description, {}), e.action && q(e.action, {})]
})
  , K0 = b.forwardRef((e,t)=>{
    const r = L4(e, t);
    return R4(r),
    M4(r)
}
);
K0.displayName = "CardHeader";
const q4 = (e,t)=>{
    const {logo: r} = e
      , {selectableA11yProps: {referenceLabel: o, referenceId: n, setReferenceLabel: i, setReferenceId: a}} = V0()
      , s = Ar(t, b.useRef(null));
    return b.useEffect(()=>{
        if (!(o && n) && s.current && s.current.parentNode) {
            const l = s.current.parentNode.querySelector(`.${ac.root} > img`);
            if (l) {
                const u = l.getAttribute("aria-label")
                  , d = l.getAttribute("aria-describedby");
                d ? a(d) : l.alt ? i(l.alt) : u && i(u)
            }
        }
    }
    , [i, o, s, n, a]),
    {
        components: {
            root: "div",
            logo: "div"
        },
        root: pe(Oe("div", {
            ref: s,
            ...e
        }), {
            elementType: "div"
        }),
        logo: He(r, {
            elementType: "div"
        })
    }
}
  , H4 = e=>ut(e.root, {
    children: [e.root.children, e.logo && q(e.logo, {})]
})
  , X0 = b.forwardRef((e,t)=>{
    const r = q4(e, t);
    return z4(r),
    H4(r)
}
);
X0.displayName = "CardPreview";
const W4 = ()=>{
    var e;
    const t = It()
      , r = b.useRef(!1)
      , o = wo() && ((e = t.targetDocument) === null || e === void 0 ? void 0 : e.defaultView)
      , n = b.useCallback(i=>{
        r.current = i.matches
    }
    , []);
    return Rt(()=>{
        if (!o || !o.matchMedia)
            return;
        const i = o.matchMedia("screen and (prefers-reduced-motion: reduce)");
        return i.matches && (r.current = !0),
        i.addEventListener("change", n),
        ()=>i.removeEventListener("change", n)
    }
    , [n, o]),
    r.current
}
  , $4 = e=>Q0(e) ? e.computedStyleMap() : U4(e)
  , Q0 = e=>!!(typeof CSS < "u" && CSS.number && e.computedStyleMap)
  , U4 = e=>{
    var t, r;
    const o = wo() && ((r = (t = e.ownerDocument) === null || t === void 0 ? void 0 : t.defaultView) !== null && r !== void 0 ? r : window);
    return o ? o.getComputedStyle(e, null) : {
        getPropertyValue: n=>""
    }
}
;
function ah(e) {
    const t = e.trim();
    if (t.includes("auto"))
        return 0;
    if (t.endsWith("ms")) {
        const r = Number(t.replace("ms", ""));
        return isNaN(r) ? 0 : r
    }
    return Number(t.slice(0, -1).replace(",", ".")) * 1e3
}
const V4 = (e,t)=>{
    const r = e.getAll(t);
    return r.length > 0 ? r.map(({value: o, unit: n})=>`${o}${n}`) : ["0"]
}
  , G4 = (e,t)=>{
    const r = e.getPropertyValue(t);
    return r ? r.split(",") : ["0"]
}
  , sh = (e,t)=>{
    const r = Math.max(e.length, t.length)
      , o = [];
    if (r === 0)
        return 0;
    for (let n = 0; n < r; n++) {
        const i = ah(e[n] || "0")
          , a = ah(t[n] || "0");
        o.push(i + a)
    }
    return Math.max(...o)
}
  , K4 = e=>{
    const t = Q0(e)
      , r = $4(e)
      , o = a=>t ? V4(r, a) : G4(r, a)
      , n = sh(o("transition-duration"), o("transition-delay"))
      , i = sh(o("animation-duration"), o("animation-delay"));
    return Math.max(n, i)
}
  , X4 = e=>{
    const t = b.useRef(!0);
    return t.current && e ? (t.current = !1,
    !0) : t.current
}
;
function Q4(e, t={}) {
    const {animateOnFirstMount: r, duration: o} = {
        animateOnFirstMount: !1,
        ...t
    }
      , [n,i] = b.useState(e && r ? "entering" : e ? "idle" : "unmounted")
      , [a,s] = b.useState(!r && e)
      , [l,u] = Ya()
      , [d,c] = Ya()
      , [f,h] = $x()
      , [p,m] = b.useState(null)
      , w = W4()
      , v = Qx()
      , g = X4(!!p)
      , y = b.useRef(e).current
      , x = w || g && y && !r
      , S = b.useCallback(E=>{
        E && m(E)
    }
    , [])
      , _ = b.useCallback(E=>(d(()=>f(E), 0),
    ()=>{
        c(),
        h()
    }
    ), [h, c, f, d])
      , k = b.useCallback(()=>{
        i(e ? "entered" : "exited"),
        _(()=>i(e ? "idle" : "unmounted"))
    }
    , [_, e]);
    return b.useEffect(()=>{
        if (!v) {
            if (x) {
                i(e ? "idle" : "unmounted"),
                s(e);
                return
            }
            if (i(e ? "entering" : "exiting"),
            !!p)
                return _(()=>{
                    s(e),
                    _(()=>{
                        const E = o || K4(p);
                        if (E === 0) {
                            k();
                            return
                        }
                        l(()=>k(), E)
                    }
                    )
                }
                ),
                ()=>u()
        }
    }
    , [p, x, k, e]),
    b.useMemo(()=>({
        ref: S,
        type: n,
        active: a,
        canRender: e || n !== "unmounted"
    }), [a, n, e])
}
function J0(e, t) {
    const r = typeof e == "object"
      , o = Q4(r ? !1 : e, t);
    return r ? e : o
}
const J4 = U({
    reduced: {
        Hwfdqs: "f1bggi9a"
    }
}, {
    m: [["@media screen and (prefers-reduced-motion: reduce){.f1bggi9a{transition-duration:0.01ms!important;}}", {
        m: "screen and (prefers-reduced-motion: reduce)"
    }]]
});
const sc = (e,t)=>{
    const {reduced: r} = J4()
      , o = b.useMemo(()=>!t.enter && !t.exit ? "" : e.active || e.type === "idle" ? t.enter : e.active ? "" : t.exit, [e.active, e.type, t.enter, t.exit]);
    return b.useEffect(()=>void 0, [t]),
    W(t.default, o, t[e.type], r)
}
;
function Y0(e) {
    const {open: t=!1, size: r="small", position: o="start"} = e;
    return {
        size: r,
        position: o,
        open: t
    }
}
const Y4 = Ce("rivxbo", "r1trjn1z", [".rivxbo{top:0px;right:0px;bottom:0px;left:0px;position:fixed;background-color:rgba(0, 0, 0, 0.4);}", ".r1trjn1z{top:0px;left:0px;bottom:0px;right:0px;position:fixed;background-color:rgba(0, 0, 0, 0.4);}"])
  , Z4 = U({
    nested: {
        De3pzq: "f1c21dwh"
    }
}, {
    d: [".f1c21dwh{background-color:var(--colorTransparentBackground);}"]
})
  , eE = e=>{
    const t = Y4()
      , r = Z4();
    return e.backdrop && (e.backdrop.className = W(t, e.isNestedDialog && r.nested, e.backdrop.className)),
    e
}
  , lc = b.forwardRef((e,t)=>{
    const r = H0(e, t)
      , o = $0();
    return eE(r),
    W0(r, o)
}
);
lc.displayName = "OverlayDrawerSurface";
const tE = (e,t)=>{
    const {open: r, size: o, position: n} = Y0(e)
      , {modalType: i="modal", inertTrapFocus: a, defaultOpen: s=!1, onOpenChange: l} = e
      , u = J0(r)
      , d = yd(e.backdrop)
      , f = pe({
        ...e,
        backdrop: i !== "non-modal" && d !== null ? {
            ...d
        } : null
    }, {
        elementType: lc,
        defaultProps: {
            ref: Ar(t, u.ref)
        }
    })
      , h = pe({
        open: !0,
        defaultOpen: s,
        onOpenChange: l,
        inertTrapFocus: a,
        modalType: i,
        children: null
    }, {
        elementType: hi
    });
    return {
        components: {
            root: lc,
            dialog: hi
        },
        root: f,
        dialog: h,
        size: o,
        position: n,
        motion: u
    }
}
  , rE = e=>e.motion.canRender ? q(e.dialog, {
    children: q(e.root, {})
}) : null
  , oE = U({
    entering: {
        Bkqvd7p: "f18ad807"
    },
    exiting: {
        Bkqvd7p: "f1mfizis"
    },
    reducedMotion: {
        Hwfdqs: "f5e8c63"
    },
    start: {
        Bekrc4i: ["f5tn483", "f1ojsxk5"],
        vrafjx: ["fcdblym", "fjik90z"],
        h3c5rm: ["f1gn591s", "fjscplz"],
        oyh7mz: ["f1vgc2s3", "f1e31b4d"],
        j35jbq: ["fvfyk4", "frppm18"]
    },
    end: {
        ibv6hh: ["f1ojsxk5", "f5tn483"],
        wvpqe5: ["fjik90z", "fcdblym"],
        zhjwy3: ["fjscplz", "f1gn591s"],
        j35jbq: ["f1e31b4d", "f1vgc2s3"],
        oyh7mz: ["frppm18", "fvfyk4"]
    },
    small: {
        Bjr0ffy: "f1exhnwo"
    },
    medium: {
        Bjr0ffy: "fqofjzu"
    },
    large: {
        Bjr0ffy: "fce6y3m"
    },
    full: {
        Bjr0ffy: "fsdmzs6"
    }
}, {
    d: [".f18ad807{transition-timing-function:var(--curveDecelerateMid);}", ".f1mfizis{transition-timing-function:var(--curveAccelerateMin);}", ".f5tn483{border-right-width:var(--strokeWidthThin);}", ".f1ojsxk5{border-left-width:var(--strokeWidthThin);}", ".fcdblym{border-right-style:solid;}", ".fjik90z{border-left-style:solid;}", ".f1gn591s{border-right-color:var(--colorTransparentStroke);}", ".fjscplz{border-left-color:var(--colorTransparentStroke);}", ".f1vgc2s3{left:0;}", ".f1e31b4d{right:0;}", ".fvfyk4{right:auto;}", ".frppm18{left:auto;}", ".f1exhnwo{--fui-Drawer--size:320px;}", ".fqofjzu{--fui-Drawer--size:592px;}", ".fce6y3m{--fui-Drawer--size:940px;}", ".fsdmzs6{--fui-Drawer--size:100vw;}"],
    m: [["@media screen and (prefers-reduced-motion: reduce){.f5e8c63{transition-duration:0.001ms;}}", {
        m: "screen and (prefers-reduced-motion: reduce)"
    }]]
})
  , Z0 = U({
    small: {
        B3o57yi: "fc397y7"
    },
    medium: {
        B3o57yi: "f78771"
    },
    large: {
        B3o57yi: "f9ymmep"
    },
    full: {
        B3o57yi: "f1loko9l"
    }
}, {
    d: [".fc397y7{transition-duration:var(--durationGentle);}", ".f78771{transition-duration:var(--durationSlow);}", ".f9ymmep{transition-duration:var(--durationSlower);}", ".f1loko9l{transition-duration:var(--durationUltraSlow);}"]
})
  , e1 = ({position: e, size: t, motion: r})=>{
    const o = oE()
      , n = Z0();
    return W(o[e], n[t], o[t], o.reducedMotion, r.type === "entering" && o.entering, r.type === "exiting" && o.exiting)
}
  , lh = {
    root: "fui-OverlayDrawer",
    backdrop: "fui-OverlayDrawer__backdrop"
}
  , nE = Ce("r1vxc6jp", "r1uky7bi", {
    r: [".r1vxc6jp{overflow-x:hidden;overflow-y:hidden;width:var(--fui-Drawer--size);max-width:100vw;height:auto;max-height:100vh;box-sizing:border-box;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;background-color:var(--colorNeutralBackground1);color:var(--colorNeutralForeground1);position:fixed;top:0;bottom:0;}", ".r1vxc6jp:focus{outline-style:none;}", ".r1vxc6jp:focus-visible{outline-style:none;}", ".r1vxc6jp[data-fui-focus-visible]{border-top-color:transparent;border-right-color:transparent;border-bottom-color:transparent;border-left-color:transparent;}", '.r1vxc6jp[data-fui-focus-visible]::after{content:"";position:absolute;pointer-events:none;z-index:1;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-width:2px;border-right-width:2px;border-bottom-width:2px;border-left-width:2px;border-bottom-right-radius:var(--borderRadiusMedium);border-bottom-left-radius:var(--borderRadiusMedium);border-top-right-radius:var(--borderRadiusMedium);border-top-left-radius:var(--borderRadiusMedium);border-top-color:var(--colorStrokeFocus2);border-right-color:var(--colorStrokeFocus2);border-bottom-color:var(--colorStrokeFocus2);border-left-color:var(--colorStrokeFocus2);top:calc(2px * -1);right:calc(2px * -1);bottom:calc(2px * -1);left:calc(2px * -1);}', ".r1uky7bi{overflow-x:hidden;overflow-y:hidden;width:var(--fui-Drawer--size);max-width:100vw;height:auto;max-height:100vh;box-sizing:border-box;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;background-color:var(--colorNeutralBackground1);color:var(--colorNeutralForeground1);position:fixed;top:0;bottom:0;}", ".r1uky7bi:focus{outline-style:none;}", ".r1uky7bi:focus-visible{outline-style:none;}", ".r1uky7bi[data-fui-focus-visible]{border-top-color:transparent;border-left-color:transparent;border-bottom-color:transparent;border-right-color:transparent;}", '.r1uky7bi[data-fui-focus-visible]::after{content:"";position:absolute;pointer-events:none;z-index:1;border-top-style:solid;border-left-style:solid;border-bottom-style:solid;border-right-style:solid;border-top-width:2px;border-left-width:2px;border-bottom-width:2px;border-right-width:2px;border-bottom-left-radius:var(--borderRadiusMedium);border-bottom-right-radius:var(--borderRadiusMedium);border-top-left-radius:var(--borderRadiusMedium);border-top-right-radius:var(--borderRadiusMedium);border-top-color:var(--colorStrokeFocus2);border-left-color:var(--colorStrokeFocus2);border-bottom-color:var(--colorStrokeFocus2);border-right-color:var(--colorStrokeFocus2);top:calc(2px * -1);left:calc(2px * -1);bottom:calc(2px * -1);right:calc(2px * -1);}'],
    s: ["@media (forced-colors: active){.r1vxc6jp[data-fui-focus-visible]::after{border-top-color:Highlight;border-right-color:Highlight;border-bottom-color:Highlight;border-left-color:Highlight;}}", "@media (forced-colors: active){.r1uky7bi[data-fui-focus-visible]::after{border-top-color:Highlight;border-left-color:Highlight;border-bottom-color:Highlight;border-right-color:Highlight;}}"]
})
  , iE = U({
    start: {
        Bz10aip: "f1d8gkik"
    },
    end: {
        Bz10aip: "f1g0pcr8"
    }
}, {
    d: [".f1d8gkik{transform:translate3D(calc(var(--fui-Drawer--size) * -1), 0, 0);}", ".f1g0pcr8{transform:translate3D(calc(var(--fui-Drawer--size) * 1), 0, 0);}"]
})
  , aE = U({
    default: {
        abs64n: "fk73vx1",
        E5pizo: "ff88big",
        Bmy1vo4: "f1neo61",
        Es3by: "f1ytgekk"
    },
    enter: {
        abs64n: "f5p0z4x",
        Bz10aip: "f87uvqx",
        E5pizo: "f10nrhrw"
    }
}, {
    d: [".fk73vx1{opacity:0;}", ".ff88big{box-shadow:0px var(--colorTransparentBackground);}", ".f1neo61{transition-property:transform,box-shadow,opacity;}", ".f1ytgekk{will-change:transform,box-shadow,opacity;}", ".f5p0z4x{opacity:1;}", ".f87uvqx{transform:translate3D(0, 0, 0);}", ".f10nrhrw{box-shadow:var(--shadow64);}"]
})
  , sE = U({
    default: {
        abs64n: "fk73vx1",
        Bmy1vo4: "f13u1uyl",
        Bkqvd7p: "f17wnm97",
        Es3by: "f1gqqdtu"
    },
    enter: {
        abs64n: "f5p0z4x"
    }
}, {
    d: [".fk73vx1{opacity:0;}", ".f13u1uyl{transition-property:opacity;}", ".f17wnm97{transition-timing-function:var(--curveEasyEase);}", ".f1gqqdtu{will-change:opacity;}", ".f5p0z4x{opacity:1;}"]
})
  , lE = e=>{
    const t = e1(e)
      , r = nE()
      , o = iE()
      , n = Z0()
      , i = sc(e.motion, aE())
      , a = sc(e.motion, sE())
      , s = e.root.backdrop;
    return e.root.className = W(lh.root, t, r, o[e.position], i, e.root.className),
    s && (s.className = W(lh.backdrop, a, n[e.size], s.className)),
    e
}
  , t1 = b.forwardRef((e,t)=>{
    const r = tE(e, t);
    return lE(r),
    Fe("useDrawerOverlayStyles_unstable")(r),
    Fe("useOverlayDrawerStyles_unstable")(r),
    rE(r)
}
);
t1.displayName = "OverlayDrawer";
const uE = (e,t)=>{
    const {size: r, position: o, open: n} = Y0(e)
      , {separator: i=!1} = e
      , a = J0(n);
    return {
        components: {
            root: "div"
        },
        root: pe(Oe("div", {
            ...e,
            ref: Ar(t, a.ref)
        }), {
            elementType: "div"
        }),
        size: r,
        position: o,
        separator: i,
        motion: a
    }
}
  , cE = e=>e.motion.canRender ? q(e.root, {}) : null
  , dE = {
    root: "fui-InlineDrawer"
}
  , fE = Ce("r46ju4x", null, [".r46ju4x{overflow-x:hidden;overflow-y:hidden;width:var(--fui-Drawer--size);max-width:100vw;height:auto;max-height:100vh;box-sizing:border-box;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;background-color:var(--colorNeutralBackground1);color:var(--colorNeutralForeground1);position:relative;}"])
  , pE = U({
    separatorStart: {
        Bekrc4i: ["f1hqa2wf", "finvdd3"],
        vrafjx: ["fcdblym", "fjik90z"],
        h3c5rm: ["fa8zu9y", "f17e9lqh"]
    },
    separatorEnd: {
        ibv6hh: ["finvdd3", "f1hqa2wf"],
        wvpqe5: ["fjik90z", "fcdblym"],
        zhjwy3: ["f17e9lqh", "fa8zu9y"]
    },
    start: {
        Bz10aip: "f1d8gkik"
    },
    end: {
        Bz10aip: "f1h1g6jt"
    }
}, {
    d: [".f1hqa2wf{border-right-width:1px;}", ".finvdd3{border-left-width:1px;}", ".fcdblym{border-right-style:solid;}", ".fjik90z{border-left-style:solid;}", ".fa8zu9y{border-right-color:var(--colorNeutralBackground3);}", ".f17e9lqh{border-left-color:var(--colorNeutralBackground3);}", ".f1d8gkik{transform:translate3D(calc(var(--fui-Drawer--size) * -1), 0, 0);}", ".f1h1g6jt{transform:translate3D(var(--fui-Drawer--size), 0, 0);}"]
})
  , hE = U({
    default: {
        abs64n: "fk73vx1",
        Bmy1vo4: "f15rjlgw",
        Es3by: "f1blt7p"
    },
    enter: {
        abs64n: "f5p0z4x",
        Bz10aip: "f87uvqx"
    }
}, {
    d: [".fk73vx1{opacity:0;}", ".f15rjlgw{transition-property:opacity,transform;}", ".f1blt7p{will-change:opacity,transform;}", ".f5p0z4x{opacity:1;}", ".f87uvqx{transform:translate3D(0, 0, 0);}"]
})
  , gE = e=>{
    const t = fE()
      , r = e1(e)
      , o = pE()
      , n = sc(e.motion, hE())
      , i = b.useMemo(()=>{
        if (e.separator)
            return e.position === "start" ? o.separatorStart : o.separatorEnd
    }
    , [e.position, e.separator, o.separatorEnd, o.separatorStart]);
    return e.root.className = W(dE.root, t, r, i, o[e.position], n, e.root.className),
    e
}
  , r1 = b.forwardRef((e,t)=>{
    const r = uE(e, t);
    return gE(r),
    Fe("useDrawerInlineStyles_unstable")(r),
    Fe("useInlineDrawerStyles_unstable")(r),
    cE(r)
}
);
r1.displayName = "InlineDrawer";
const vE = (e,t)=>{
    const r = e.type === "inline" ? r1 : t1;
    return {
        components: {
            root: r
        },
        root: pe(yd({
            ref: t,
            ...e
        }), {
            elementType: r
        })
    }
}
  , mE = e=>q(e.root, {})
  , yE = {
    root: "fui-Drawer"
}
  , bE = e=>(e.root.className = W(yE.root, e.root.className),
e)
  , o1 = b.forwardRef((e,t)=>{
    const r = vE(e, t);
    return bE(r),
    Fe("useDrawerStyles_unstable")(r),
    mE(r)
}
);
o1.displayName = "Drawer";
const wE = (e,t)=>({
    components: {
        root: "div"
    },
    root: pe(Oe("div", {
        ref: t,
        ...e
    }), {
        elementType: "div"
    })
})
  , kE = e=>q(e.root, {})
  , xE = {
    root: "fui-DrawerBody"
}
  , SE = Ce("r10z3gsy", "r1ppc5ap", [".r10z3gsy{margin-top:-1px;margin-right:0;margin-bottom:-1px;margin-left:0;padding-top:1px;padding-right:var(--spacingHorizontalXXL);padding-bottom:1px;padding-left:var(--spacingHorizontalXXL);overflow-x:auto;overflow-y:auto;flex-grow:1;flex-shrink:1;flex-basis:0;align-self:stretch;background-image:linear-gradient(to top, var(--colorNeutralBackground1), var(--colorNeutralBackground1)),linear-gradient(to top, var(--colorNeutralBackground1), var(--colorNeutralBackground1)),linear-gradient(to top, var(--colorNeutralStroke1), var(--colorNeutralBackground1)),linear-gradient(to bottom, var(--colorNeutralStroke1), var(--colorNeutralBackground1));-webkit-background-position:bottom center,top center,bottom center,top center;background-position:bottom center,top center,bottom center,top center;background-repeat:no-repeat;background-color:var(--colorNeutralBackground1);background-size:100% 2px,100% 2px,100% 1px,100% 1px;background-attachment:local,local,scroll,scroll;}", ".r10z3gsy:last-child{padding-bottom:calc(var(--spacingHorizontalXXL) + 1px);}", ".r10z3gsy:first-child{padding-top:calc(var(--spacingHorizontalXXL) + 1px);}", ".r1ppc5ap{margin-top:-1px;margin-left:0;margin-bottom:-1px;margin-right:0;padding-top:1px;padding-left:var(--spacingHorizontalXXL);padding-bottom:1px;padding-right:var(--spacingHorizontalXXL);overflow-x:auto;overflow-y:auto;flex-grow:1;flex-shrink:1;flex-basis:0;align-self:stretch;background-image:linear-gradient(to top, var(--colorNeutralBackground1), var(--colorNeutralBackground1)),linear-gradient(to top, var(--colorNeutralBackground1), var(--colorNeutralBackground1)),linear-gradient(to top, var(--colorNeutralStroke1), var(--colorNeutralBackground1)),linear-gradient(to bottom, var(--colorNeutralStroke1), var(--colorNeutralBackground1));-webkit-background-position:bottom center,top center,bottom center,top center;background-position:bottom center,top center,bottom center,top center;background-repeat:no-repeat;background-color:var(--colorNeutralBackground1);background-size:100% 2px,100% 2px,100% 1px,100% 1px;background-attachment:local,local,scroll,scroll;}", ".r1ppc5ap:last-child{padding-bottom:calc(var(--spacingHorizontalXXL) + 1px);}", ".r1ppc5ap:first-child{padding-top:calc(var(--spacingHorizontalXXL) + 1px);}"])
  , _E = e=>{
    const t = SE();
    return e.root.className = W(xE.root, t, e.root.className),
    e
}
  , n1 = b.forwardRef((e,t)=>{
    const r = wE(e, t);
    return _E(r),
    Fe("useDrawerBodyStyles_unstable")(r),
    kE(r)
}
);
n1.displayName = "DrawerBody";
const BE = (e,t)=>({
    components: {
        root: "header"
    },
    root: pe(Oe("header", {
        ref: t,
        ...e
    }), {
        elementType: "header"
    })
})
  , EE = e=>q(e.root, {})
  , PE = {
    root: "fui-DrawerHeader"
}
  , CE = Ce("rh4hr5f", "r116c7xc", [".rh4hr5f{padding-top:var(--spacingVerticalXXL);padding-right:var(--spacingHorizontalXXL);padding-bottom:var(--spacingVerticalS);padding-left:var(--spacingHorizontalXXL);column-gap:var(--spacingHorizontalS);row-gap:var(--spacingHorizontalS);width:100%;max-width:100%;align-self:stretch;display:flex;flex-direction:column;box-sizing:border-box;}", ".r116c7xc{padding-top:var(--spacingVerticalXXL);padding-left:var(--spacingHorizontalXXL);padding-bottom:var(--spacingVerticalS);padding-right:var(--spacingHorizontalXXL);column-gap:var(--spacingHorizontalS);row-gap:var(--spacingHorizontalS);width:100%;max-width:100%;align-self:stretch;display:flex;flex-direction:column;box-sizing:border-box;}"])
  , TE = e=>{
    const t = CE();
    return e.root.className = W(PE.root, t, e.root.className),
    e
}
  , i1 = b.forwardRef((e,t)=>{
    const r = BE(e, t);
    return TE(r),
    Fe("useDrawerHeaderStyles_unstable")(r),
    EE(r)
}
);
i1.displayName = "DrawerHeader";
/**
 * @remix-run/router v1.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function gi() {
    return gi = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var o in r)
                Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
        }
        return e
    }
    ,
    gi.apply(this, arguments)
}
var _r;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)(_r || (_r = {}));
const uh = "popstate";
function NE(e) {
    e === void 0 && (e = {});
    function t(o, n) {
        let {pathname: i, search: a, hash: s} = o.location;
        return uc("", {
            pathname: i,
            search: a,
            hash: s
        }, n.state && n.state.usr || null, n.state && n.state.key || "default")
    }
    function r(o, n) {
        return typeof n == "string" ? n : is(n)
    }
    return FE(t, r, null, e)
}
function me(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function Hd(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function zE() {
    return Math.random().toString(36).substr(2, 8)
}
function ch(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function uc(e, t, r, o) {
    return r === void 0 && (r = null),
    gi({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? vn(t) : t, {
        state: r,
        key: t && t.key || o || zE()
    })
}
function is(e) {
    let {pathname: t="/", search: r="", hash: o=""} = e;
    return r && r !== "?" && (t += r.charAt(0) === "?" ? r : "?" + r),
    o && o !== "#" && (t += o.charAt(0) === "#" ? o : "#" + o),
    t
}
function vn(e) {
    let t = {};
    if (e) {
        let r = e.indexOf("#");
        r >= 0 && (t.hash = e.substr(r),
        e = e.substr(0, r));
        let o = e.indexOf("?");
        o >= 0 && (t.search = e.substr(o),
        e = e.substr(0, o)),
        e && (t.pathname = e)
    }
    return t
}
function FE(e, t, r, o) {
    o === void 0 && (o = {});
    let {window: n=document.defaultView, v5Compat: i=!1} = o
      , a = n.history
      , s = _r.Pop
      , l = null
      , u = d();
    u == null && (u = 0,
    a.replaceState(gi({}, a.state, {
        idx: u
    }), ""));
    function d() {
        return (a.state || {
            idx: null
        }).idx
    }
    function c() {
        s = _r.Pop;
        let w = d()
          , v = w == null ? null : w - u;
        u = w,
        l && l({
            action: s,
            location: m.location,
            delta: v
        })
    }
    function f(w, v) {
        s = _r.Push;
        let g = uc(m.location, w, v);
        r && r(g, w),
        u = d() + 1;
        let y = ch(g, u)
          , x = m.createHref(g);
        try {
            a.pushState(y, "", x)
        } catch (S) {
            if (S instanceof DOMException && S.name === "DataCloneError")
                throw S;
            n.location.assign(x)
        }
        i && l && l({
            action: s,
            location: m.location,
            delta: 1
        })
    }
    function h(w, v) {
        s = _r.Replace;
        let g = uc(m.location, w, v);
        r && r(g, w),
        u = d();
        let y = ch(g, u)
          , x = m.createHref(g);
        a.replaceState(y, "", x),
        i && l && l({
            action: s,
            location: m.location,
            delta: 0
        })
    }
    function p(w) {
        let v = n.location.origin !== "null" ? n.location.origin : n.location.href
          , g = typeof w == "string" ? w : is(w);
        return me(v, "No window.location.(origin|href) available to create URL for href: " + g),
        new URL(g,v)
    }
    let m = {
        get action() {
            return s
        },
        get location() {
            return e(n, a)
        },
        listen(w) {
            if (l)
                throw new Error("A history only accepts one active listener");
            return n.addEventListener(uh, c),
            l = w,
            ()=>{
                n.removeEventListener(uh, c),
                l = null
            }
        },
        createHref(w) {
            return t(n, w)
        },
        createURL: p,
        encodeLocation(w) {
            let v = p(w);
            return {
                pathname: v.pathname,
                search: v.search,
                hash: v.hash
            }
        },
        push: f,
        replace: h,
        go(w) {
            return a.go(w)
        }
    };
    return m
}
var dh;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)(dh || (dh = {}));
function RE(e, t, r) {
    r === void 0 && (r = "/");
    let o = typeof t == "string" ? vn(t) : t
      , n = vi(o.pathname || "/", r);
    if (n == null)
        return null;
    let i = a1(e);
    DE(i);
    let a = null;
    for (let s = 0; a == null && s < i.length; ++s)
        a = WE(i[s], UE(n));
    return a
}
function a1(e, t, r, o) {
    t === void 0 && (t = []),
    r === void 0 && (r = []),
    o === void 0 && (o = "");
    let n = (i,a,s)=>{
        let l = {
            relativePath: s === void 0 ? i.path || "" : s,
            caseSensitive: i.caseSensitive === !0,
            childrenIndex: a,
            route: i
        };
        l.relativePath.startsWith("/") && (me(l.relativePath.startsWith(o), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + o + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        l.relativePath = l.relativePath.slice(o.length));
        let u = Dr([o, l.relativePath])
          , d = r.concat(l);
        i.children && i.children.length > 0 && (me(i.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')),
        a1(i.children, t, d, u)),
        !(i.path == null && !i.index) && t.push({
            path: u,
            score: qE(u, i.index),
            routesMeta: d
        })
    }
    ;
    return e.forEach((i,a)=>{
        var s;
        if (i.path === "" || !((s = i.path) != null && s.includes("?")))
            n(i, a);
        else
            for (let l of s1(i.path))
                n(i, a, l)
    }
    ),
    t
}
function s1(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[r,...o] = t
      , n = r.endsWith("?")
      , i = r.replace(/\?$/, "");
    if (o.length === 0)
        return n ? [i, ""] : [i];
    let a = s1(o.join("/"))
      , s = [];
    return s.push(...a.map(l=>l === "" ? i : [i, l].join("/"))),
    n && s.push(...a),
    s.map(l=>e.startsWith("/") && l === "" ? "/" : l)
}
function DE(e) {
    e.sort((t,r)=>t.score !== r.score ? r.score - t.score : HE(t.routesMeta.map(o=>o.childrenIndex), r.routesMeta.map(o=>o.childrenIndex)))
}
const jE = /^:\w+$/
  , IE = 3
  , AE = 2
  , OE = 1
  , LE = 10
  , ME = -2
  , fh = e=>e === "*";
function qE(e, t) {
    let r = e.split("/")
      , o = r.length;
    return r.some(fh) && (o += ME),
    t && (o += AE),
    r.filter(n=>!fh(n)).reduce((n,i)=>n + (jE.test(i) ? IE : i === "" ? OE : LE), o)
}
function HE(e, t) {
    return e.length === t.length && e.slice(0, -1).every((o,n)=>o === t[n]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function WE(e, t) {
    let {routesMeta: r} = e
      , o = {}
      , n = "/"
      , i = [];
    for (let a = 0; a < r.length; ++a) {
        let s = r[a]
          , l = a === r.length - 1
          , u = n === "/" ? t : t.slice(n.length) || "/"
          , d = cc({
            path: s.relativePath,
            caseSensitive: s.caseSensitive,
            end: l
        }, u);
        if (!d)
            return null;
        Object.assign(o, d.params);
        let c = s.route;
        i.push({
            params: o,
            pathname: Dr([n, d.pathname]),
            pathnameBase: QE(Dr([n, d.pathnameBase])),
            route: c
        }),
        d.pathnameBase !== "/" && (n = Dr([n, d.pathnameBase]))
    }
    return i
}
function cc(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[r,o] = $E(e.path, e.caseSensitive, e.end)
      , n = t.match(r);
    if (!n)
        return null;
    let i = n[0]
      , a = i.replace(/(.)\/+$/, "$1")
      , s = n.slice(1);
    return {
        params: o.reduce((u,d,c)=>{
            let {paramName: f, isOptional: h} = d;
            if (f === "*") {
                let m = s[c] || "";
                a = i.slice(0, i.length - m.length).replace(/(.)\/+$/, "$1")
            }
            const p = s[c];
            return h && !p ? u[f] = void 0 : u[f] = VE(p || "", f),
            u
        }
        , {}),
        pathname: i,
        pathnameBase: a,
        pattern: e
    }
}
function $E(e, t, r) {
    t === void 0 && (t = !1),
    r === void 0 && (r = !0),
    Hd(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let o = []
      , n = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:(\w+)(\?)?/g, (a,s,l)=>(o.push({
        paramName: s,
        isOptional: l != null
    }),
    l ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (o.push({
        paramName: "*"
    }),
    n += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? n += "\\/*$" : e !== "" && e !== "/" && (n += "(?:(?=\\/|$))"),
    [new RegExp(n,t ? void 0 : "i"), o]
}
function UE(e) {
    try {
        return decodeURI(e)
    } catch (t) {
        return Hd(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
        e
    }
}
function VE(e, t) {
    try {
        return decodeURIComponent(e)
    } catch (r) {
        return Hd(!1, 'The value for the URL param "' + t + '" will not be decoded because' + (' the string "' + e + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + r + ").")),
        e
    }
}
function vi(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let r = t.endsWith("/") ? t.length - 1 : t.length
      , o = e.charAt(r);
    return o && o !== "/" ? null : e.slice(r) || "/"
}
function GE(e, t) {
    t === void 0 && (t = "/");
    let {pathname: r, search: o="", hash: n=""} = typeof e == "string" ? vn(e) : e;
    return {
        pathname: r ? r.startsWith("/") ? r : KE(r, t) : t,
        search: JE(o),
        hash: YE(n)
    }
}
function KE(e, t) {
    let r = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(n=>{
        n === ".." ? r.length > 1 && r.pop() : n !== "." && r.push(n)
    }
    ),
    r.length > 1 ? r.join("/") : "/"
}
function Hl(e, t, r, o) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(o) + "].  Please separate it out to the ") + ("`to." + r + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}
function XE(e) {
    return e.filter((t,r)=>r === 0 || t.route.path && t.route.path.length > 0)
}
function l1(e, t) {
    let r = XE(e);
    return t ? r.map((o,n)=>n === e.length - 1 ? o.pathname : o.pathnameBase) : r.map(o=>o.pathnameBase)
}
function u1(e, t, r, o) {
    o === void 0 && (o = !1);
    let n;
    typeof e == "string" ? n = vn(e) : (n = gi({}, e),
    me(!n.pathname || !n.pathname.includes("?"), Hl("?", "pathname", "search", n)),
    me(!n.pathname || !n.pathname.includes("#"), Hl("#", "pathname", "hash", n)),
    me(!n.search || !n.search.includes("#"), Hl("#", "search", "hash", n)));
    let i = e === "" || n.pathname === "", a = i ? "/" : n.pathname, s;
    if (a == null)
        s = r;
    else {
        let c = t.length - 1;
        if (!o && a.startsWith("..")) {
            let f = a.split("/");
            for (; f[0] === ".."; )
                f.shift(),
                c -= 1;
            n.pathname = f.join("/")
        }
        s = c >= 0 ? t[c] : "/"
    }
    let l = GE(n, s)
      , u = a && a !== "/" && a.endsWith("/")
      , d = (i || a === ".") && r.endsWith("/");
    return !l.pathname.endsWith("/") && (u || d) && (l.pathname += "/"),
    l
}
const Dr = e=>e.join("/").replace(/\/\/+/g, "/")
  , QE = e=>e.replace(/\/+$/, "").replace(/^\/*/, "/")
  , JE = e=>!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e
  , YE = e=>!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function ZE(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
const c1 = ["post", "put", "patch", "delete"];
new Set(c1);
const eP = ["get", ...c1];
new Set(eP);
/**
 * React Router v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function mi() {
    return mi = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var o in r)
                Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
        }
        return e
    }
    ,
    mi.apply(this, arguments)
}
const Ws = b.createContext(null)
  , d1 = b.createContext(null)
  , Ur = b.createContext(null)
  , $s = b.createContext(null)
  , Vr = b.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , f1 = b.createContext(null);
function tP(e, t) {
    let {relative: r} = t === void 0 ? {} : t;
    Ni() || me(!1);
    let {basename: o, navigator: n} = b.useContext(Ur)
      , {hash: i, pathname: a, search: s} = Vs(e, {
        relative: r
    })
      , l = a;
    return o !== "/" && (l = a === "/" ? o : Dr([o, a])),
    n.createHref({
        pathname: l,
        search: s,
        hash: i
    })
}
function Ni() {
    return b.useContext($s) != null
}
function ko() {
    return Ni() || me(!1),
    b.useContext($s).location
}
function p1(e) {
    b.useContext(Ur).static || b.useLayoutEffect(e)
}
function Us() {
    let {isDataRoute: e} = b.useContext(Vr);
    return e ? gP() : rP()
}
function rP() {
    Ni() || me(!1);
    let e = b.useContext(Ws)
      , {basename: t, future: r, navigator: o} = b.useContext(Ur)
      , {matches: n} = b.useContext(Vr)
      , {pathname: i} = ko()
      , a = JSON.stringify(l1(n, r.v7_relativeSplatPath))
      , s = b.useRef(!1);
    return p1(()=>{
        s.current = !0
    }
    ),
    b.useCallback(function(u, d) {
        if (d === void 0 && (d = {}),
        !s.current)
            return;
        if (typeof u == "number") {
            o.go(u);
            return
        }
        let c = u1(u, JSON.parse(a), i, d.relative === "path");
        e == null && t !== "/" && (c.pathname = c.pathname === "/" ? t : Dr([t, c.pathname])),
        (d.replace ? o.replace : o.push)(c, d.state, d)
    }, [t, o, a, i, e])
}
function oP() {
    let {matches: e} = b.useContext(Vr)
      , t = e[e.length - 1];
    return t ? t.params : {}
}
function Vs(e, t) {
    let {relative: r} = t === void 0 ? {} : t
      , {future: o} = b.useContext(Ur)
      , {matches: n} = b.useContext(Vr)
      , {pathname: i} = ko()
      , a = JSON.stringify(l1(n, o.v7_relativeSplatPath));
    return b.useMemo(()=>u1(e, JSON.parse(a), i, r === "path"), [e, a, i, r])
}
function nP(e, t) {
    return iP(e, t)
}
function iP(e, t, r, o) {
    Ni() || me(!1);
    let {navigator: n} = b.useContext(Ur)
      , {matches: i} = b.useContext(Vr)
      , a = i[i.length - 1]
      , s = a ? a.params : {};
    a && a.pathname;
    let l = a ? a.pathnameBase : "/";
    a && a.route;
    let u = ko(), d;
    if (t) {
        var c;
        let w = typeof t == "string" ? vn(t) : t;
        l === "/" || (c = w.pathname) != null && c.startsWith(l) || me(!1),
        d = w
    } else
        d = u;
    let f = d.pathname || "/"
      , h = l === "/" ? f : f.slice(l.length) || "/"
      , p = RE(e, {
        pathname: h
    })
      , m = cP(p && p.map(w=>Object.assign({}, w, {
        params: Object.assign({}, s, w.params),
        pathname: Dr([l, n.encodeLocation ? n.encodeLocation(w.pathname).pathname : w.pathname]),
        pathnameBase: w.pathnameBase === "/" ? l : Dr([l, n.encodeLocation ? n.encodeLocation(w.pathnameBase).pathname : w.pathnameBase])
    })), i, r, o);
    return t && m ? b.createElement($s.Provider, {
        value: {
            location: mi({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, d),
            navigationType: _r.Pop
        }
    }, m) : m
}
function aP() {
    let e = hP()
      , t = ZE(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , r = e instanceof Error ? e.stack : null
      , n = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return b.createElement(b.Fragment, null, b.createElement("h2", null, "Unexpected Application Error!"), b.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), r ? b.createElement("pre", {
        style: n
    }, r) : null, null)
}
const sP = b.createElement(aP, null);
class lP extends b.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, r) {
        return r.location !== t.location || r.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : r.error,
            location: r.location,
            revalidation: t.revalidation || r.revalidation
        }
    }
    componentDidCatch(t, r) {
        console.error("React Router caught the following error during render", t, r)
    }
    render() {
        return this.state.error !== void 0 ? b.createElement(Vr.Provider, {
            value: this.props.routeContext
        }, b.createElement(f1.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function uP(e) {
    let {routeContext: t, match: r, children: o} = e
      , n = b.useContext(Ws);
    return n && n.static && n.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (n.staticContext._deepestRenderedBoundaryId = r.route.id),
    b.createElement(Vr.Provider, {
        value: t
    }, o)
}
function cP(e, t, r, o) {
    var n;
    if (t === void 0 && (t = []),
    r === void 0 && (r = null),
    o === void 0 && (o = null),
    e == null) {
        var i;
        if ((i = r) != null && i.errors)
            e = r.matches;
        else
            return null
    }
    let a = e
      , s = (n = r) == null ? void 0 : n.errors;
    if (s != null) {
        let d = a.findIndex(c=>c.route.id && (s == null ? void 0 : s[c.route.id]));
        d >= 0 || me(!1),
        a = a.slice(0, Math.min(a.length, d + 1))
    }
    let l = !1
      , u = -1;
    if (r && o && o.v7_partialHydration)
        for (let d = 0; d < a.length; d++) {
            let c = a[d];
            if ((c.route.HydrateFallback || c.route.hydrateFallbackElement) && (u = d),
            c.route.id) {
                let {loaderData: f, errors: h} = r
                  , p = c.route.loader && f[c.route.id] === void 0 && (!h || h[c.route.id] === void 0);
                if (c.route.lazy || p) {
                    l = !0,
                    u >= 0 ? a = a.slice(0, u + 1) : a = [a[0]];
                    break
                }
            }
        }
    return a.reduceRight((d,c,f)=>{
        let h, p = !1, m = null, w = null;
        r && (h = s && c.route.id ? s[c.route.id] : void 0,
        m = c.route.errorElement || sP,
        l && (u < 0 && f === 0 ? (vP("route-fallback", !1),
        p = !0,
        w = null) : u === f && (p = !0,
        w = c.route.hydrateFallbackElement || null)));
        let v = t.concat(a.slice(0, f + 1))
          , g = ()=>{
            let y;
            return h ? y = m : p ? y = w : c.route.Component ? y = b.createElement(c.route.Component, null) : c.route.element ? y = c.route.element : y = d,
            b.createElement(uP, {
                match: c,
                routeContext: {
                    outlet: d,
                    matches: v,
                    isDataRoute: r != null
                },
                children: y
            })
        }
        ;
        return r && (c.route.ErrorBoundary || c.route.errorElement || f === 0) ? b.createElement(lP, {
            location: r.location,
            revalidation: r.revalidation,
            component: m,
            error: h,
            children: g(),
            routeContext: {
                outlet: null,
                matches: v,
                isDataRoute: !0
            }
        }) : g()
    }
    , null)
}
var h1 = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e
}(h1 || {})
  , as = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseLoaderData = "useLoaderData",
    e.UseActionData = "useActionData",
    e.UseRouteError = "useRouteError",
    e.UseNavigation = "useNavigation",
    e.UseRouteLoaderData = "useRouteLoaderData",
    e.UseMatches = "useMatches",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e.UseRouteId = "useRouteId",
    e
}(as || {});
function dP(e) {
    let t = b.useContext(Ws);
    return t || me(!1),
    t
}
function fP(e) {
    let t = b.useContext(d1);
    return t || me(!1),
    t
}
function pP(e) {
    let t = b.useContext(Vr);
    return t || me(!1),
    t
}
function g1(e) {
    let t = pP()
      , r = t.matches[t.matches.length - 1];
    return r.route.id || me(!1),
    r.route.id
}
function hP() {
    var e;
    let t = b.useContext(f1)
      , r = fP(as.UseRouteError)
      , o = g1(as.UseRouteError);
    return t !== void 0 ? t : (e = r.errors) == null ? void 0 : e[o]
}
function gP() {
    let {router: e} = dP(h1.UseNavigateStable)
      , t = g1(as.UseNavigateStable)
      , r = b.useRef(!1);
    return p1(()=>{
        r.current = !0
    }
    ),
    b.useCallback(function(n, i) {
        i === void 0 && (i = {}),
        r.current && (typeof n == "number" ? e.navigate(n) : e.navigate(n, mi({
            fromRouteId: t
        }, i)))
    }, [e, t])
}
const ph = {};
function vP(e, t, r) {
    !t && !ph[e] && (ph[e] = !0)
}
function ft(e) {
    me(!1)
}
function mP(e) {
    let {basename: t="/", children: r=null, location: o, navigationType: n=_r.Pop, navigator: i, static: a=!1, future: s} = e;
    Ni() && me(!1);
    let l = t.replace(/^\/*/, "/")
      , u = b.useMemo(()=>({
        basename: l,
        navigator: i,
        static: a,
        future: mi({
            v7_relativeSplatPath: !1
        }, s)
    }), [l, s, i, a]);
    typeof o == "string" && (o = vn(o));
    let {pathname: d="/", search: c="", hash: f="", state: h=null, key: p="default"} = o
      , m = b.useMemo(()=>{
        let w = vi(d, l);
        return w == null ? null : {
            location: {
                pathname: w,
                search: c,
                hash: f,
                state: h,
                key: p
            },
            navigationType: n
        }
    }
    , [l, d, c, f, h, p, n]);
    return m == null ? null : b.createElement(Ur.Provider, {
        value: u
    }, b.createElement($s.Provider, {
        children: r,
        value: m
    }))
}
function yP(e) {
    let {children: t, location: r} = e;
    return nP(dc(t), r)
}
new Promise(()=>{}
);
function dc(e, t) {
    t === void 0 && (t = []);
    let r = [];
    return b.Children.forEach(e, (o,n)=>{
        if (!b.isValidElement(o))
            return;
        let i = [...t, n];
        if (o.type === b.Fragment) {
            r.push.apply(r, dc(o.props.children, i));
            return
        }
        o.type !== ft && me(!1),
        !o.props.index || !o.props.children || me(!1);
        let a = {
            id: o.props.id || i.join("-"),
            caseSensitive: o.props.caseSensitive,
            element: o.props.element,
            Component: o.props.Component,
            index: o.props.index,
            path: o.props.path,
            loader: o.props.loader,
            action: o.props.action,
            errorElement: o.props.errorElement,
            ErrorBoundary: o.props.ErrorBoundary,
            hasErrorBoundary: o.props.ErrorBoundary != null || o.props.errorElement != null,
            shouldRevalidate: o.props.shouldRevalidate,
            handle: o.props.handle,
            lazy: o.props.lazy
        };
        o.props.children && (a.children = dc(o.props.children, i)),
        r.push(a)
    }
    ),
    r
}
/**
 * React Router DOM v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ss() {
    return ss = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var o in r)
                Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
        }
        return e
    }
    ,
    ss.apply(this, arguments)
}
function v1(e, t) {
    if (e == null)
        return {};
    var r = {}, o = Object.keys(e), n, i;
    for (i = 0; i < o.length; i++)
        n = o[i],
        !(t.indexOf(n) >= 0) && (r[n] = e[n]);
    return r
}
function bP(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function wP(e, t) {
    return e.button === 0 && (!t || t === "_self") && !bP(e)
}
const kP = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"]
  , xP = ["aria-current", "caseSensitive", "className", "end", "style", "to", "unstable_viewTransition", "children"]
  , SP = b.createContext({
    isTransitioning: !1
})
  , _P = "startTransition"
  , hh = Un[_P];
function BP(e) {
    let {basename: t, children: r, future: o, window: n} = e
      , i = b.useRef();
    i.current == null && (i.current = NE({
        window: n,
        v5Compat: !0
    }));
    let a = i.current
      , [s,l] = b.useState({
        action: a.action,
        location: a.location
    })
      , {v7_startTransition: u} = o || {}
      , d = b.useCallback(c=>{
        u && hh ? hh(()=>l(c)) : l(c)
    }
    , [l, u]);
    return b.useLayoutEffect(()=>a.listen(d), [a, d]),
    b.createElement(mP, {
        basename: t,
        children: r,
        location: s.location,
        navigationType: s.action,
        navigator: a,
        future: o
    })
}
const EP = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
  , PP = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , CP = b.forwardRef(function(t, r) {
    let {onClick: o, relative: n, reloadDocument: i, replace: a, state: s, target: l, to: u, preventScrollReset: d, unstable_viewTransition: c} = t, f = v1(t, kP), {basename: h} = b.useContext(Ur), p, m = !1;
    if (typeof u == "string" && PP.test(u) && (p = u,
    EP))
        try {
            let y = new URL(window.location.href)
              , x = u.startsWith("//") ? new URL(y.protocol + u) : new URL(u)
              , S = vi(x.pathname, h);
            x.origin === y.origin && S != null ? u = S + x.search + x.hash : m = !0
        } catch {}
    let w = tP(u, {
        relative: n
    })
      , v = zP(u, {
        replace: a,
        state: s,
        target: l,
        preventScrollReset: d,
        relative: n,
        unstable_viewTransition: c
    });
    function g(y) {
        o && o(y),
        y.defaultPrevented || v(y)
    }
    return b.createElement("a", ss({}, f, {
        href: p || w,
        onClick: m || i ? o : g,
        ref: r,
        target: l
    }))
})
  , TP = b.forwardRef(function(t, r) {
    let {"aria-current": o="page", caseSensitive: n=!1, className: i="", end: a=!1, style: s, to: l, unstable_viewTransition: u, children: d} = t
      , c = v1(t, xP)
      , f = Vs(l, {
        relative: c.relative
    })
      , h = ko()
      , p = b.useContext(d1)
      , {navigator: m} = b.useContext(Ur)
      , w = p != null && FP(f) && u === !0
      , v = m.encodeLocation ? m.encodeLocation(f).pathname : f.pathname
      , g = h.pathname
      , y = p && p.navigation && p.navigation.location ? p.navigation.location.pathname : null;
    n || (g = g.toLowerCase(),
    y = y ? y.toLowerCase() : null,
    v = v.toLowerCase());
    const x = v !== "/" && v.endsWith("/") ? v.length - 1 : v.length;
    let S = g === v || !a && g.startsWith(v) && g.charAt(x) === "/", _ = y != null && (y === v || !a && y.startsWith(v) && y.charAt(v.length) === "/"), k = {
        isActive: S,
        isPending: _,
        isTransitioning: w
    }, E = S ? o : void 0, I;
    typeof i == "function" ? I = i(k) : I = [i, S ? "active" : null, _ ? "pending" : null, w ? "transitioning" : null].filter(Boolean).join(" ");
    let F = typeof s == "function" ? s(k) : s;
    return b.createElement(CP, ss({}, c, {
        "aria-current": E,
        className: I,
        ref: r,
        style: F,
        to: l,
        unstable_viewTransition: u
    }), typeof d == "function" ? d(k) : d)
});
var fc;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmit = "useSubmit",
    e.UseSubmitFetcher = "useSubmitFetcher",
    e.UseFetcher = "useFetcher",
    e.useViewTransitionState = "useViewTransitionState"
}
)(fc || (fc = {}));
var gh;
(function(e) {
    e.UseFetcher = "useFetcher",
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(gh || (gh = {}));
function NP(e) {
    let t = b.useContext(Ws);
    return t || me(!1),
    t
}
function zP(e, t) {
    let {target: r, replace: o, state: n, preventScrollReset: i, relative: a, unstable_viewTransition: s} = t === void 0 ? {} : t
      , l = Us()
      , u = ko()
      , d = Vs(e, {
        relative: a
    });
    return b.useCallback(c=>{
        if (wP(c, r)) {
            c.preventDefault();
            let f = o !== void 0 ? o : is(u) === is(d);
            l(e, {
                replace: f,
                state: n,
                preventScrollReset: i,
                relative: a,
                unstable_viewTransition: s
            })
        }
    }
    , [u, l, d, o, n, r, e, i, a, s])
}
function FP(e, t) {
    t === void 0 && (t = {});
    let r = b.useContext(SP);
    r == null && me(!1);
    let {basename: o} = NP(fc.useViewTransitionState)
      , n = Vs(e, {
        relative: t.relative
    });
    if (!r.isTransitioning)
        return !1;
    let i = vi(r.currentLocation.pathname, o) || r.currentLocation.pathname
      , a = vi(r.nextLocation.pathname, o) || r.nextLocation.pathname;
    return cc(n.pathname, a) != null || cc(n.pathname, i) != null
}
const eo = ({to: e, title: t, icon: r, onClick: o=null, or: n=!1})=>B.jsx(TP, {
    end: !0,
    to: e,
    onClick: o,
    className: ({isActive: i})=>i || n ? "active bg-gray-100 rounded-md" : "",
    children: B.jsxs(jt, {
        className: "w-full !justify-start !py-2 !ps-0",
        appearance: "subtle",
        children: [B.jsx("div", {
            className: "active-nav-indicator",
            children: B.jsx("span", {})
        }), r, B.jsx("span", {
            className: "ms-2",
            children: t
        })]
    })
});
eo.propTypes = {
    to: vt.string,
    title: vt.string,
    icon: vt.element,
    onClick: vt.func,
    or: vt.bool
};
const m1 = ({toggleOpen: e, isOpen: t})=>{
    const r = Us()
      , [o,n] = b.useState("");
    return B.jsx(hi, {
        open: t,
        children: B.jsx(Md, {
            className: "!mx-4 sm:!mx-auto",
            children: B.jsxs(Od, {
                children: [B.jsx(Ld, {
                    children: "Search movies, series"
                }), B.jsx(qd, {
                    children: B.jsx(Dd, {
                        onChange: i=>n(i.target.value),
                        onKeyDown: i=>{
                            i.key === "Enter" && (e(),
                            r(`/search?q=${o}`))
                        }
                        ,
                        size: "large",
                        className: "w-full my-4",
                        contentBefore: B.jsx(Im, {}),
                        placeholder: "Search"
                    })
                }), B.jsxs(Ad, {
                    children: [B.jsx(Ti, {
                        disableButtonEnhancement: !0,
                        children: B.jsx(jt, {
                            onClick: e,
                            appearance: "secondary",
                            children: "Close"
                        })
                    }), B.jsx(jt, {
                        appearance: "primary",
                        onClick: ()=>{
                            e(),
                            r(`/search?q=${o}`)
                        }
                        ,
                        children: "Search"
                    })]
                })]
            })
        })
    })
}
;
m1.propTypes = {
    toggleOpen: vt.func,
    isOpen: vt.bool
};
const RP = gm({
    root: {
        ...Mo.overflow("hidden"),
        display: "flex",
        height: "100vh",
        backgroundColor: "#fff"
    },
    content: {
        ...Mo.flex(1)
    }
})
  , DP = ({children: e})=>{
    const t = ko()
      , r = RP()
      , o = ()=>window.innerWidth >= 768
      , [n,i] = b.useState(o)
      , [a,s] = b.useState("inline")
      , [l,u] = b.useState(!1)
      , d = ()=>u(f=>!f);
    b.useEffect(()=>{
        const f = ()=>i(o);
        return window.addEventListener("resize", f),
        ()=>window.removeEventListener("resize", f)
    }
    , []);
    const c = b.useCallback(({matches: f})=>s(f ? "overlay" : "inline"), [s]);
    return b.useEffect(()=>{
        const f = window.matchMedia("(max-width: 720px)");
        return f.matches && s("overlay"),
        f.addEventListener("change", c),
        ()=>f.removeEventListener("change", c)
    }
    , [c]),
    B.jsxs("div", {
        className: `${r.root} select-none`,
        children: [B.jsxs(o1, {
            type: a,
            className: "!border-r-1 !border-gray-200",
            position: "start",
            open: n,
            onOpenChange: (f,{open: h})=>i(h),
            children: [B.jsxs(i1, {
                className: "!p-0",
                children: [B.jsx("img", {
                    className: "object-cover h-24",
                    src: "https://w0.peakpx.com/wallpaper/506/235/HD-wallpaper-white-hexagon-geometric-shapes-white-aesthetic.jpg",
                    alt: ""
                }), B.jsx("div", {
                    className: "absolute inset-0 flex items-center justify-center h-24",
                    children: B.jsx("h5", {
                        className: "text-xl font-semibold text-gray-700 p-4 rounded-lg border-gray-400",
                        children: "MFree TV"
                    })
                })]
            }), B.jsx(n1, {
                className: "!px-2 !mt-0 !bg-gray-50",
                children: B.jsxs("div", {
                    className: "my-4 flex flex-col gap-y-1",
                    children: [B.jsx(eo, {
                        to: "/movies",
                        or: t.pathname === "/",
                        title: "Movies",
                        icon: B.jsx(P2, {
                            className: "h-5 w-5"
                        }),
                        onClick: ()=>{
                            o() || i(!1)
                        }
                    }), B.jsx(eo, {
                        to: "/series",
                        title: "Series",
                        icon: B.jsx(S2, {
                            className: "h-5 w-5"
                        }),
                        onClick: ()=>{
                            o() || i(!1)
                        }
                    }), B.jsx(eo, {
                        to: "/genres",
                        title: "Genres",
                        icon: B.jsx(B2, {
                            className: "h-5 w-5"
                        }),
                        onClick: ()=>{
                            o() || i(!1)
                        }
                    }), B.jsx(eo, {
                        to: "/countries",
                        title: "Countries",
                        icon: B.jsx(_2, {
                            className: "h-5 w-5"
                        }),
                        onClick: ()=>{
                            o() || i(!1)
                        }
                    }), B.jsx(eo, {
                        to: "/genres/73",
                        title: "Explicit",
                        icon: B.jsx("svg", {
                            className: "h-5 w-5 fill-current text-gray-700",
                            xmlns: "http://www.w3.org/2000/svg",
                            height: "24",
                            viewBox: "0 -960 960 960",
                            width: "24",
                            children: B.jsx("path", {
                                d: "M380-300h200v-40H420v-120h160v-40H420v-120h160v-40H380v360ZM224.615-160Q197-160 178.5-178.5 160-197 160-224.615v-510.77Q160-763 178.5-781.5 197-800 224.615-800h510.77Q763-800 781.5-781.5 800-763 800-735.385v510.77Q800-197 781.5-178.5 763-160 735.385-160h-510.77Zm0-40h510.77q9.23 0 16.923-7.692Q760-215.385 760-224.615v-510.77q0-9.23-7.692-16.923Q744.615-760 735.385-760h-510.77q-9.23 0-16.923 7.692Q200-744.615 200-735.385v510.77q0 9.23 7.692 16.923Q215.385-200 224.615-200ZM200-760v560-560Z"
                            })
                        }),
                        onClick: ()=>{
                            o() || i(!1)
                        }
                    }), B.jsx(eo, {
                        to: "/about",
                        title: "About",
                        icon: B.jsx(E2, {
                            className: "h-5 w-5"
                        }),
                        onClick: ()=>{
                            o() || i(!1)
                        }
                    })]
                })
            })]
        }), B.jsx("div", {
            className: r.content,
            children: B.jsxs("div", {
                className: "flex flex-col h-full",
                children: [B.jsxs("div", {
                    className: "flex items-center justify-between px-3 py-1 shadow",
                    children: [B.jsx(jt, {
                        onClick: ()=>i(!n),
                        appearance: "subtle",
                        size: "large",
                        icon: B.jsx(T2, {})
                    }), B.jsx("h5", {
                        className: "text-xl font-semibold text-gray-700",
                        children: "MFree TV"
                    }), B.jsx(pi, {
                        content: "Search",
                        relationship: "label",
                        children: B.jsx(jt, {
                            onClick: d,
                            appearance: "subtle",
                            size: "large",
                            icon: B.jsx(Im, {})
                        })
                    })]
                }), B.jsx("div", {
                    className: "flex-1 overflow-y-auto pb-20 md:pb-2 grid",
                    children: e
                })]
            })
        }), B.jsx(m1, {
            isOpen: l,
            toggleOpen: d
        })]
    })
}
;
function y1(e, t) {
    return function() {
        return e.apply(t, arguments)
    }
}
const {toString: jP} = Object.prototype
  , {getPrototypeOf: Wd} = Object
  , Gs = (e=>t=>{
    const r = jP.call(t);
    return e[r] || (e[r] = r.slice(8, -1).toLowerCase())
}
)(Object.create(null))
  , Kt = e=>(e = e.toLowerCase(),
t=>Gs(t) === e)
  , Ks = e=>t=>typeof t === e
  , {isArray: mn} = Array
  , yi = Ks("undefined");
function IP(e) {
    return e !== null && !yi(e) && e.constructor !== null && !yi(e.constructor) && wt(e.constructor.isBuffer) && e.constructor.isBuffer(e)
}
const b1 = Kt("ArrayBuffer");
function AP(e) {
    let t;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && b1(e.buffer),
    t
}
const OP = Ks("string")
  , wt = Ks("function")
  , w1 = Ks("number")
  , Xs = e=>e !== null && typeof e == "object"
  , LP = e=>e === !0 || e === !1
  , Sa = e=>{
    if (Gs(e) !== "object")
        return !1;
    const t = Wd(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
}
  , MP = Kt("Date")
  , qP = Kt("File")
  , HP = Kt("Blob")
  , WP = Kt("FileList")
  , $P = e=>Xs(e) && wt(e.pipe)
  , UP = e=>{
    let t;
    return e && (typeof FormData == "function" && e instanceof FormData || wt(e.append) && ((t = Gs(e)) === "formdata" || t === "object" && wt(e.toString) && e.toString() === "[object FormData]"))
}
  , VP = Kt("URLSearchParams")
  , GP = e=>e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function zi(e, t, {allOwnKeys: r=!1}={}) {
    if (e === null || typeof e > "u")
        return;
    let o, n;
    if (typeof e != "object" && (e = [e]),
    mn(e))
        for (o = 0,
        n = e.length; o < n; o++)
            t.call(null, e[o], o, e);
    else {
        const i = r ? Object.getOwnPropertyNames(e) : Object.keys(e)
          , a = i.length;
        let s;
        for (o = 0; o < a; o++)
            s = i[o],
            t.call(null, e[s], s, e)
    }
}
function k1(e, t) {
    t = t.toLowerCase();
    const r = Object.keys(e);
    let o = r.length, n;
    for (; o-- > 0; )
        if (n = r[o],
        t === n.toLowerCase())
            return n;
    return null
}
const x1 = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global
  , S1 = e=>!yi(e) && e !== x1;
function pc() {
    const {caseless: e} = S1(this) && this || {}
      , t = {}
      , r = (o,n)=>{
        const i = e && k1(t, n) || n;
        Sa(t[i]) && Sa(o) ? t[i] = pc(t[i], o) : Sa(o) ? t[i] = pc({}, o) : mn(o) ? t[i] = o.slice() : t[i] = o
    }
    ;
    for (let o = 0, n = arguments.length; o < n; o++)
        arguments[o] && zi(arguments[o], r);
    return t
}
const KP = (e,t,r,{allOwnKeys: o}={})=>(zi(t, (n,i)=>{
    r && wt(n) ? e[i] = y1(n, r) : e[i] = n
}
, {
    allOwnKeys: o
}),
e)
  , XP = e=>(e.charCodeAt(0) === 65279 && (e = e.slice(1)),
e)
  , QP = (e,t,r,o)=>{
    e.prototype = Object.create(t.prototype, o),
    e.prototype.constructor = e,
    Object.defineProperty(e, "super", {
        value: t.prototype
    }),
    r && Object.assign(e.prototype, r)
}
  , JP = (e,t,r,o)=>{
    let n, i, a;
    const s = {};
    if (t = t || {},
    e == null)
        return t;
    do {
        for (n = Object.getOwnPropertyNames(e),
        i = n.length; i-- > 0; )
            a = n[i],
            (!o || o(a, e, t)) && !s[a] && (t[a] = e[a],
            s[a] = !0);
        e = r !== !1 && Wd(e)
    } while (e && (!r || r(e, t)) && e !== Object.prototype);
    return t
}
  , YP = (e,t,r)=>{
    e = String(e),
    (r === void 0 || r > e.length) && (r = e.length),
    r -= t.length;
    const o = e.indexOf(t, r);
    return o !== -1 && o === r
}
  , ZP = e=>{
    if (!e)
        return null;
    if (mn(e))
        return e;
    let t = e.length;
    if (!w1(t))
        return null;
    const r = new Array(t);
    for (; t-- > 0; )
        r[t] = e[t];
    return r
}
  , eC = (e=>t=>e && t instanceof e)(typeof Uint8Array < "u" && Wd(Uint8Array))
  , tC = (e,t)=>{
    const o = (e && e[Symbol.iterator]).call(e);
    let n;
    for (; (n = o.next()) && !n.done; ) {
        const i = n.value;
        t.call(e, i[0], i[1])
    }
}
  , rC = (e,t)=>{
    let r;
    const o = [];
    for (; (r = e.exec(t)) !== null; )
        o.push(r);
    return o
}
  , oC = Kt("HTMLFormElement")
  , nC = e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(r, o, n) {
    return o.toUpperCase() + n
})
  , vh = (({hasOwnProperty: e})=>(t,r)=>e.call(t, r))(Object.prototype)
  , iC = Kt("RegExp")
  , _1 = (e,t)=>{
    const r = Object.getOwnPropertyDescriptors(e)
      , o = {};
    zi(r, (n,i)=>{
        let a;
        (a = t(n, i, e)) !== !1 && (o[i] = a || n)
    }
    ),
    Object.defineProperties(e, o)
}
  , aC = e=>{
    _1(e, (t,r)=>{
        if (wt(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
            return !1;
        const o = e[r];
        if (wt(o)) {
            if (t.enumerable = !1,
            "writable"in t) {
                t.writable = !1;
                return
            }
            t.set || (t.set = ()=>{
                throw Error("Can not rewrite read-only method '" + r + "'")
            }
            )
        }
    }
    )
}
  , sC = (e,t)=>{
    const r = {}
      , o = n=>{
        n.forEach(i=>{
            r[i] = !0
        }
        )
    }
    ;
    return mn(e) ? o(e) : o(String(e).split(t)),
    r
}
  , lC = ()=>{}
  , uC = (e,t)=>(e = +e,
Number.isFinite(e) ? e : t)
  , Wl = "abcdefghijklmnopqrstuvwxyz"
  , mh = "0123456789"
  , B1 = {
    DIGIT: mh,
    ALPHA: Wl,
    ALPHA_DIGIT: Wl + Wl.toUpperCase() + mh
}
  , cC = (e=16,t=B1.ALPHA_DIGIT)=>{
    let r = "";
    const {length: o} = t;
    for (; e--; )
        r += t[Math.random() * o | 0];
    return r
}
;
function dC(e) {
    return !!(e && wt(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator])
}
const fC = e=>{
    const t = new Array(10)
      , r = (o,n)=>{
        if (Xs(o)) {
            if (t.indexOf(o) >= 0)
                return;
            if (!("toJSON"in o)) {
                t[n] = o;
                const i = mn(o) ? [] : {};
                return zi(o, (a,s)=>{
                    const l = r(a, n + 1);
                    !yi(l) && (i[s] = l)
                }
                ),
                t[n] = void 0,
                i
            }
        }
        return o
    }
    ;
    return r(e, 0)
}
  , pC = Kt("AsyncFunction")
  , hC = e=>e && (Xs(e) || wt(e)) && wt(e.then) && wt(e.catch)
  , P = {
    isArray: mn,
    isArrayBuffer: b1,
    isBuffer: IP,
    isFormData: UP,
    isArrayBufferView: AP,
    isString: OP,
    isNumber: w1,
    isBoolean: LP,
    isObject: Xs,
    isPlainObject: Sa,
    isUndefined: yi,
    isDate: MP,
    isFile: qP,
    isBlob: HP,
    isRegExp: iC,
    isFunction: wt,
    isStream: $P,
    isURLSearchParams: VP,
    isTypedArray: eC,
    isFileList: WP,
    forEach: zi,
    merge: pc,
    extend: KP,
    trim: GP,
    stripBOM: XP,
    inherits: QP,
    toFlatObject: JP,
    kindOf: Gs,
    kindOfTest: Kt,
    endsWith: YP,
    toArray: ZP,
    forEachEntry: tC,
    matchAll: rC,
    isHTMLForm: oC,
    hasOwnProperty: vh,
    hasOwnProp: vh,
    reduceDescriptors: _1,
    freezeMethods: aC,
    toObjectSet: sC,
    toCamelCase: nC,
    noop: lC,
    toFiniteNumber: uC,
    findKey: k1,
    global: x1,
    isContextDefined: S1,
    ALPHABET: B1,
    generateString: cC,
    isSpecCompliantForm: dC,
    toJSONObject: fC,
    isAsyncFn: pC,
    isThenable: hC
};
function X(e, t, r, o, n) {
    Error.call(this),
    Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack,
    this.message = e,
    this.name = "AxiosError",
    t && (this.code = t),
    r && (this.config = r),
    o && (this.request = o),
    n && (this.response = n)
}
P.inherits(X, Error, {
    toJSON: function() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: P.toJSONObject(this.config),
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
        }
    }
});
const E1 = X.prototype
  , P1 = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e=>{
    P1[e] = {
        value: e
    }
}
);
Object.defineProperties(X, P1);
Object.defineProperty(E1, "isAxiosError", {
    value: !0
});
X.from = (e,t,r,o,n,i)=>{
    const a = Object.create(E1);
    return P.toFlatObject(e, a, function(l) {
        return l !== Error.prototype
    }, s=>s !== "isAxiosError"),
    X.call(a, e.message, t, r, o, n),
    a.cause = e,
    a.name = e.name,
    i && Object.assign(a, i),
    a
}
;
const gC = null;
function hc(e) {
    return P.isPlainObject(e) || P.isArray(e)
}
function C1(e) {
    return P.endsWith(e, "[]") ? e.slice(0, -2) : e
}
function yh(e, t, r) {
    return e ? e.concat(t).map(function(n, i) {
        return n = C1(n),
        !r && i ? "[" + n + "]" : n
    }).join(r ? "." : "") : t
}
function vC(e) {
    return P.isArray(e) && !e.some(hc)
}
const mC = P.toFlatObject(P, {}, null, function(t) {
    return /^is[A-Z]/.test(t)
});
function Qs(e, t, r) {
    if (!P.isObject(e))
        throw new TypeError("target must be an object");
    t = t || new FormData,
    r = P.toFlatObject(r, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, function(m, w) {
        return !P.isUndefined(w[m])
    });
    const o = r.metaTokens
      , n = r.visitor || d
      , i = r.dots
      , a = r.indexes
      , l = (r.Blob || typeof Blob < "u" && Blob) && P.isSpecCompliantForm(t);
    if (!P.isFunction(n))
        throw new TypeError("visitor must be a function");
    function u(p) {
        if (p === null)
            return "";
        if (P.isDate(p))
            return p.toISOString();
        if (!l && P.isBlob(p))
            throw new X("Blob is not supported. Use a Buffer instead.");
        return P.isArrayBuffer(p) || P.isTypedArray(p) ? l && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p
    }
    function d(p, m, w) {
        let v = p;
        if (p && !w && typeof p == "object") {
            if (P.endsWith(m, "{}"))
                m = o ? m : m.slice(0, -2),
                p = JSON.stringify(p);
            else if (P.isArray(p) && vC(p) || (P.isFileList(p) || P.endsWith(m, "[]")) && (v = P.toArray(p)))
                return m = C1(m),
                v.forEach(function(y, x) {
                    !(P.isUndefined(y) || y === null) && t.append(a === !0 ? yh([m], x, i) : a === null ? m : m + "[]", u(y))
                }),
                !1
        }
        return hc(p) ? !0 : (t.append(yh(w, m, i), u(p)),
        !1)
    }
    const c = []
      , f = Object.assign(mC, {
        defaultVisitor: d,
        convertValue: u,
        isVisitable: hc
    });
    function h(p, m) {
        if (!P.isUndefined(p)) {
            if (c.indexOf(p) !== -1)
                throw Error("Circular reference detected in " + m.join("."));
            c.push(p),
            P.forEach(p, function(v, g) {
                (!(P.isUndefined(v) || v === null) && n.call(t, v, P.isString(g) ? g.trim() : g, m, f)) === !0 && h(v, m ? m.concat(g) : [g])
            }),
            c.pop()
        }
    }
    if (!P.isObject(e))
        throw new TypeError("data must be an object");
    return h(e),
    t
}
function bh(e) {
    const t = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(o) {
        return t[o]
    })
}
function $d(e, t) {
    this._pairs = [],
    e && Qs(e, this, t)
}
const T1 = $d.prototype;
T1.append = function(t, r) {
    this._pairs.push([t, r])
}
;
T1.toString = function(t) {
    const r = t ? function(o) {
        return t.call(this, o, bh)
    }
    : bh;
    return this._pairs.map(function(n) {
        return r(n[0]) + "=" + r(n[1])
    }, "").join("&")
}
;
function yC(e) {
    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}
function N1(e, t, r) {
    if (!t)
        return e;
    const o = r && r.encode || yC
      , n = r && r.serialize;
    let i;
    if (n ? i = n(t, r) : i = P.isURLSearchParams(t) ? t.toString() : new $d(t,r).toString(o),
    i) {
        const a = e.indexOf("#");
        a !== -1 && (e = e.slice(0, a)),
        e += (e.indexOf("?") === -1 ? "?" : "&") + i
    }
    return e
}
class wh {
    constructor() {
        this.handlers = []
    }
    use(t, r, o) {
        return this.handlers.push({
            fulfilled: t,
            rejected: r,
            synchronous: o ? o.synchronous : !1,
            runWhen: o ? o.runWhen : null
        }),
        this.handlers.length - 1
    }
    eject(t) {
        this.handlers[t] && (this.handlers[t] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(t) {
        P.forEach(this.handlers, function(o) {
            o !== null && t(o)
        })
    }
}
const z1 = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1
}
  , bC = typeof URLSearchParams < "u" ? URLSearchParams : $d
  , wC = typeof FormData < "u" ? FormData : null
  , kC = typeof Blob < "u" ? Blob : null
  , xC = {
    isBrowser: !0,
    classes: {
        URLSearchParams: bC,
        FormData: wC,
        Blob: kC
    },
    protocols: ["http", "https", "file", "blob", "url", "data"]
}
  , F1 = typeof window < "u" && typeof document < "u"
  , SC = (e=>F1 && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product)
  , _C = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function"
  , BC = Object.freeze(Object.defineProperty({
    __proto__: null,
    hasBrowserEnv: F1,
    hasStandardBrowserEnv: SC,
    hasStandardBrowserWebWorkerEnv: _C
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Wt = {
    ...BC,
    ...xC
};
function EC(e, t) {
    return Qs(e, new Wt.classes.URLSearchParams, Object.assign({
        visitor: function(r, o, n, i) {
            return Wt.isNode && P.isBuffer(r) ? (this.append(o, r.toString("base64")),
            !1) : i.defaultVisitor.apply(this, arguments)
        }
    }, t))
}
function PC(e) {
    return P.matchAll(/\w+|\[(\w*)]/g, e).map(t=>t[0] === "[]" ? "" : t[1] || t[0])
}
function CC(e) {
    const t = {}
      , r = Object.keys(e);
    let o;
    const n = r.length;
    let i;
    for (o = 0; o < n; o++)
        i = r[o],
        t[i] = e[i];
    return t
}
function R1(e) {
    function t(r, o, n, i) {
        let a = r[i++];
        const s = Number.isFinite(+a)
          , l = i >= r.length;
        return a = !a && P.isArray(n) ? n.length : a,
        l ? (P.hasOwnProp(n, a) ? n[a] = [n[a], o] : n[a] = o,
        !s) : ((!n[a] || !P.isObject(n[a])) && (n[a] = []),
        t(r, o, n[a], i) && P.isArray(n[a]) && (n[a] = CC(n[a])),
        !s)
    }
    if (P.isFormData(e) && P.isFunction(e.entries)) {
        const r = {};
        return P.forEachEntry(e, (o,n)=>{
            t(PC(o), n, r, 0)
        }
        ),
        r
    }
    return null
}
function TC(e, t, r) {
    if (P.isString(e))
        try {
            return (t || JSON.parse)(e),
            P.trim(e)
        } catch (o) {
            if (o.name !== "SyntaxError")
                throw o
        }
    return (r || JSON.stringify)(e)
}
const Ud = {
    transitional: z1,
    adapter: ["xhr", "http"],
    transformRequest: [function(t, r) {
        const o = r.getContentType() || ""
          , n = o.indexOf("application/json") > -1
          , i = P.isObject(t);
        if (i && P.isHTMLForm(t) && (t = new FormData(t)),
        P.isFormData(t))
            return n && n ? JSON.stringify(R1(t)) : t;
        if (P.isArrayBuffer(t) || P.isBuffer(t) || P.isStream(t) || P.isFile(t) || P.isBlob(t))
            return t;
        if (P.isArrayBufferView(t))
            return t.buffer;
        if (P.isURLSearchParams(t))
            return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1),
            t.toString();
        let s;
        if (i) {
            if (o.indexOf("application/x-www-form-urlencoded") > -1)
                return EC(t, this.formSerializer).toString();
            if ((s = P.isFileList(t)) || o.indexOf("multipart/form-data") > -1) {
                const l = this.env && this.env.FormData;
                return Qs(s ? {
                    "files[]": t
                } : t, l && new l, this.formSerializer)
            }
        }
        return i || n ? (r.setContentType("application/json", !1),
        TC(t)) : t
    }
    ],
    transformResponse: [function(t) {
        const r = this.transitional || Ud.transitional
          , o = r && r.forcedJSONParsing
          , n = this.responseType === "json";
        if (t && P.isString(t) && (o && !this.responseType || n)) {
            const a = !(r && r.silentJSONParsing) && n;
            try {
                return JSON.parse(t)
            } catch (s) {
                if (a)
                    throw s.name === "SyntaxError" ? X.from(s, X.ERR_BAD_RESPONSE, this, null, this.response) : s
            }
        }
        return t
    }
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: Wt.classes.FormData,
        Blob: Wt.classes.Blob
    },
    validateStatus: function(t) {
        return t >= 200 && t < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0
        }
    }
};
P.forEach(["delete", "get", "head", "post", "put", "patch"], e=>{
    Ud.headers[e] = {}
}
);
const Vd = Ud
  , NC = P.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"])
  , zC = e=>{
    const t = {};
    let r, o, n;
    return e && e.split(`
`).forEach(function(a) {
        n = a.indexOf(":"),
        r = a.substring(0, n).trim().toLowerCase(),
        o = a.substring(n + 1).trim(),
        !(!r || t[r] && NC[r]) && (r === "set-cookie" ? t[r] ? t[r].push(o) : t[r] = [o] : t[r] = t[r] ? t[r] + ", " + o : o)
    }),
    t
}
  , kh = Symbol("internals");
function En(e) {
    return e && String(e).trim().toLowerCase()
}
function _a(e) {
    return e === !1 || e == null ? e : P.isArray(e) ? e.map(_a) : String(e)
}
function FC(e) {
    const t = Object.create(null)
      , r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let o;
    for (; o = r.exec(e); )
        t[o[1]] = o[2];
    return t
}
const RC = e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function $l(e, t, r, o, n) {
    if (P.isFunction(o))
        return o.call(this, t, r);
    if (n && (t = r),
    !!P.isString(t)) {
        if (P.isString(o))
            return t.indexOf(o) !== -1;
        if (P.isRegExp(o))
            return o.test(t)
    }
}
function DC(e) {
    return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t,r,o)=>r.toUpperCase() + o)
}
function jC(e, t) {
    const r = P.toCamelCase(" " + t);
    ["get", "set", "has"].forEach(o=>{
        Object.defineProperty(e, o + r, {
            value: function(n, i, a) {
                return this[o].call(this, t, n, i, a)
            },
            configurable: !0
        })
    }
    )
}
class Js {
    constructor(t) {
        t && this.set(t)
    }
    set(t, r, o) {
        const n = this;
        function i(s, l, u) {
            const d = En(l);
            if (!d)
                throw new Error("header name must be a non-empty string");
            const c = P.findKey(n, d);
            (!c || n[c] === void 0 || u === !0 || u === void 0 && n[c] !== !1) && (n[c || l] = _a(s))
        }
        const a = (s,l)=>P.forEach(s, (u,d)=>i(u, d, l));
        return P.isPlainObject(t) || t instanceof this.constructor ? a(t, r) : P.isString(t) && (t = t.trim()) && !RC(t) ? a(zC(t), r) : t != null && i(r, t, o),
        this
    }
    get(t, r) {
        if (t = En(t),
        t) {
            const o = P.findKey(this, t);
            if (o) {
                const n = this[o];
                if (!r)
                    return n;
                if (r === !0)
                    return FC(n);
                if (P.isFunction(r))
                    return r.call(this, n, o);
                if (P.isRegExp(r))
                    return r.exec(n);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(t, r) {
        if (t = En(t),
        t) {
            const o = P.findKey(this, t);
            return !!(o && this[o] !== void 0 && (!r || $l(this, this[o], o, r)))
        }
        return !1
    }
    delete(t, r) {
        const o = this;
        let n = !1;
        function i(a) {
            if (a = En(a),
            a) {
                const s = P.findKey(o, a);
                s && (!r || $l(o, o[s], s, r)) && (delete o[s],
                n = !0)
            }
        }
        return P.isArray(t) ? t.forEach(i) : i(t),
        n
    }
    clear(t) {
        const r = Object.keys(this);
        let o = r.length
          , n = !1;
        for (; o--; ) {
            const i = r[o];
            (!t || $l(this, this[i], i, t, !0)) && (delete this[i],
            n = !0)
        }
        return n
    }
    normalize(t) {
        const r = this
          , o = {};
        return P.forEach(this, (n,i)=>{
            const a = P.findKey(o, i);
            if (a) {
                r[a] = _a(n),
                delete r[i];
                return
            }
            const s = t ? DC(i) : String(i).trim();
            s !== i && delete r[i],
            r[s] = _a(n),
            o[s] = !0
        }
        ),
        this
    }
    concat(...t) {
        return this.constructor.concat(this, ...t)
    }
    toJSON(t) {
        const r = Object.create(null);
        return P.forEach(this, (o,n)=>{
            o != null && o !== !1 && (r[n] = t && P.isArray(o) ? o.join(", ") : o)
        }
        ),
        r
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map(([t,r])=>t + ": " + r).join(`
`)
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(t) {
        return t instanceof this ? t : new this(t)
    }
    static concat(t, ...r) {
        const o = new this(t);
        return r.forEach(n=>o.set(n)),
        o
    }
    static accessor(t) {
        const o = (this[kh] = this[kh] = {
            accessors: {}
        }).accessors
          , n = this.prototype;
        function i(a) {
            const s = En(a);
            o[s] || (jC(n, a),
            o[s] = !0)
        }
        return P.isArray(t) ? t.forEach(i) : i(t),
        this
    }
}
Js.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
P.reduceDescriptors(Js.prototype, ({value: e},t)=>{
    let r = t[0].toUpperCase() + t.slice(1);
    return {
        get: ()=>e,
        set(o) {
            this[r] = o
        }
    }
}
);
P.freezeMethods(Js);
const or = Js;
function Ul(e, t) {
    const r = this || Vd
      , o = t || r
      , n = or.from(o.headers);
    let i = o.data;
    return P.forEach(e, function(s) {
        i = s.call(r, i, n.normalize(), t ? t.status : void 0)
    }),
    n.normalize(),
    i
}
function D1(e) {
    return !!(e && e.__CANCEL__)
}
function Fi(e, t, r) {
    X.call(this, e ?? "canceled", X.ERR_CANCELED, t, r),
    this.name = "CanceledError"
}
P.inherits(Fi, X, {
    __CANCEL__: !0
});
function IC(e, t, r) {
    const o = r.config.validateStatus;
    !r.status || !o || o(r.status) ? e(r) : t(new X("Request failed with status code " + r.status,[X.ERR_BAD_REQUEST, X.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],r.config,r.request,r))
}
const AC = Wt.hasStandardBrowserEnv ? {
    write(e, t, r, o, n, i) {
        const a = [e + "=" + encodeURIComponent(t)];
        P.isNumber(r) && a.push("expires=" + new Date(r).toGMTString()),
        P.isString(o) && a.push("path=" + o),
        P.isString(n) && a.push("domain=" + n),
        i === !0 && a.push("secure"),
        document.cookie = a.join("; ")
    },
    read(e) {
        const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
        return t ? decodeURIComponent(t[3]) : null
    },
    remove(e) {
        this.write(e, "", Date.now() - 864e5)
    }
} : {
    write() {},
    read() {
        return null
    },
    remove() {}
};
function OC(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}
function LC(e, t) {
    return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e
}
function j1(e, t) {
    return e && !OC(t) ? LC(e, t) : t
}
const MC = Wt.hasStandardBrowserEnv ? function() {
    const t = /(msie|trident)/i.test(navigator.userAgent)
      , r = document.createElement("a");
    let o;
    function n(i) {
        let a = i;
        return t && (r.setAttribute("href", a),
        a = r.href),
        r.setAttribute("href", a),
        {
            href: r.href,
            protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
            host: r.host,
            search: r.search ? r.search.replace(/^\?/, "") : "",
            hash: r.hash ? r.hash.replace(/^#/, "") : "",
            hostname: r.hostname,
            port: r.port,
            pathname: r.pathname.charAt(0) === "/" ? r.pathname : "/" + r.pathname
        }
    }
    return o = n(window.location.href),
    function(a) {
        const s = P.isString(a) ? n(a) : a;
        return s.protocol === o.protocol && s.host === o.host
    }
}() : function() {
    return function() {
        return !0
    }
}();
function qC(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return t && t[1] || ""
}
function HC(e, t) {
    e = e || 10;
    const r = new Array(e)
      , o = new Array(e);
    let n = 0, i = 0, a;
    return t = t !== void 0 ? t : 1e3,
    function(l) {
        const u = Date.now()
          , d = o[i];
        a || (a = u),
        r[n] = l,
        o[n] = u;
        let c = i
          , f = 0;
        for (; c !== n; )
            f += r[c++],
            c = c % e;
        if (n = (n + 1) % e,
        n === i && (i = (i + 1) % e),
        u - a < t)
            return;
        const h = d && u - d;
        return h ? Math.round(f * 1e3 / h) : void 0
    }
}
function xh(e, t) {
    let r = 0;
    const o = HC(50, 250);
    return n=>{
        const i = n.loaded
          , a = n.lengthComputable ? n.total : void 0
          , s = i - r
          , l = o(s)
          , u = i <= a;
        r = i;
        const d = {
            loaded: i,
            total: a,
            progress: a ? i / a : void 0,
            bytes: s,
            rate: l || void 0,
            estimated: l && a && u ? (a - i) / l : void 0,
            event: n
        };
        d[t ? "download" : "upload"] = !0,
        e(d)
    }
}
const WC = typeof XMLHttpRequest < "u"
  , $C = WC && function(e) {
    return new Promise(function(r, o) {
        let n = e.data;
        const i = or.from(e.headers).normalize();
        let {responseType: a, withXSRFToken: s} = e, l;
        function u() {
            e.cancelToken && e.cancelToken.unsubscribe(l),
            e.signal && e.signal.removeEventListener("abort", l)
        }
        let d;
        if (P.isFormData(n)) {
            if (Wt.hasStandardBrowserEnv || Wt.hasStandardBrowserWebWorkerEnv)
                i.setContentType(!1);
            else if ((d = i.getContentType()) !== !1) {
                const [m,...w] = d ? d.split(";").map(v=>v.trim()).filter(Boolean) : [];
                i.setContentType([m || "multipart/form-data", ...w].join("; "))
            }
        }
        let c = new XMLHttpRequest;
        if (e.auth) {
            const m = e.auth.username || ""
              , w = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
            i.set("Authorization", "Basic " + btoa(m + ":" + w))
        }
        const f = j1(e.baseURL, e.url);
        c.open(e.method.toUpperCase(), N1(f, e.params, e.paramsSerializer), !0),
        c.timeout = e.timeout;
        function h() {
            if (!c)
                return;
            const m = or.from("getAllResponseHeaders"in c && c.getAllResponseHeaders())
              , v = {
                data: !a || a === "text" || a === "json" ? c.responseText : c.response,
                status: c.status,
                statusText: c.statusText,
                headers: m,
                config: e,
                request: c
            };
            IC(function(y) {
                r(y),
                u()
            }, function(y) {
                o(y),
                u()
            }, v),
            c = null
        }
        if ("onloadend"in c ? c.onloadend = h : c.onreadystatechange = function() {
            !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(h)
        }
        ,
        c.onabort = function() {
            c && (o(new X("Request aborted",X.ECONNABORTED,e,c)),
            c = null)
        }
        ,
        c.onerror = function() {
            o(new X("Network Error",X.ERR_NETWORK,e,c)),
            c = null
        }
        ,
        c.ontimeout = function() {
            let w = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
            const v = e.transitional || z1;
            e.timeoutErrorMessage && (w = e.timeoutErrorMessage),
            o(new X(w,v.clarifyTimeoutError ? X.ETIMEDOUT : X.ECONNABORTED,e,c)),
            c = null
        }
        ,
        Wt.hasStandardBrowserEnv && (s && P.isFunction(s) && (s = s(e)),
        s || s !== !1 && MC(f))) {
            const m = e.xsrfHeaderName && e.xsrfCookieName && AC.read(e.xsrfCookieName);
            m && i.set(e.xsrfHeaderName, m)
        }
        n === void 0 && i.setContentType(null),
        "setRequestHeader"in c && P.forEach(i.toJSON(), function(w, v) {
            c.setRequestHeader(v, w)
        }),
        P.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials),
        a && a !== "json" && (c.responseType = e.responseType),
        typeof e.onDownloadProgress == "function" && c.addEventListener("progress", xh(e.onDownloadProgress, !0)),
        typeof e.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", xh(e.onUploadProgress)),
        (e.cancelToken || e.signal) && (l = m=>{
            c && (o(!m || m.type ? new Fi(null,e,c) : m),
            c.abort(),
            c = null)
        }
        ,
        e.cancelToken && e.cancelToken.subscribe(l),
        e.signal && (e.signal.aborted ? l() : e.signal.addEventListener("abort", l)));
        const p = qC(f);
        if (p && Wt.protocols.indexOf(p) === -1) {
            o(new X("Unsupported protocol " + p + ":",X.ERR_BAD_REQUEST,e));
            return
        }
        c.send(n || null)
    }
    )
}
  , gc = {
    http: gC,
    xhr: $C
};
P.forEach(gc, (e,t)=>{
    if (e) {
        try {
            Object.defineProperty(e, "name", {
                value: t
            })
        } catch {}
        Object.defineProperty(e, "adapterName", {
            value: t
        })
    }
}
);
const Sh = e=>`- ${e}`
  , UC = e=>P.isFunction(e) || e === null || e === !1
  , I1 = {
    getAdapter: e=>{
        e = P.isArray(e) ? e : [e];
        const {length: t} = e;
        let r, o;
        const n = {};
        for (let i = 0; i < t; i++) {
            r = e[i];
            let a;
            if (o = r,
            !UC(r) && (o = gc[(a = String(r)).toLowerCase()],
            o === void 0))
                throw new X(`Unknown adapter '${a}'`);
            if (o)
                break;
            n[a || "#" + i] = o
        }
        if (!o) {
            const i = Object.entries(n).map(([s,l])=>`adapter ${s} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build"));
            let a = t ? i.length > 1 ? `since :
` + i.map(Sh).join(`
`) : " " + Sh(i[0]) : "as no adapter specified";
            throw new X("There is no suitable adapter to dispatch the request " + a,"ERR_NOT_SUPPORT")
        }
        return o
    }
    ,
    adapters: gc
};
function Vl(e) {
    if (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
        throw new Fi(null,e)
}
function _h(e) {
    return Vl(e),
    e.headers = or.from(e.headers),
    e.data = Ul.call(e, e.transformRequest),
    ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1),
    I1.getAdapter(e.adapter || Vd.adapter)(e).then(function(o) {
        return Vl(e),
        o.data = Ul.call(e, e.transformResponse, o),
        o.headers = or.from(o.headers),
        o
    }, function(o) {
        return D1(o) || (Vl(e),
        o && o.response && (o.response.data = Ul.call(e, e.transformResponse, o.response),
        o.response.headers = or.from(o.response.headers))),
        Promise.reject(o)
    })
}
const Bh = e=>e instanceof or ? e.toJSON() : e;
function sn(e, t) {
    t = t || {};
    const r = {};
    function o(u, d, c) {
        return P.isPlainObject(u) && P.isPlainObject(d) ? P.merge.call({
            caseless: c
        }, u, d) : P.isPlainObject(d) ? P.merge({}, d) : P.isArray(d) ? d.slice() : d
    }
    function n(u, d, c) {
        if (P.isUndefined(d)) {
            if (!P.isUndefined(u))
                return o(void 0, u, c)
        } else
            return o(u, d, c)
    }
    function i(u, d) {
        if (!P.isUndefined(d))
            return o(void 0, d)
    }
    function a(u, d) {
        if (P.isUndefined(d)) {
            if (!P.isUndefined(u))
                return o(void 0, u)
        } else
            return o(void 0, d)
    }
    function s(u, d, c) {
        if (c in t)
            return o(u, d);
        if (c in e)
            return o(void 0, u)
    }
    const l = {
        url: i,
        method: i,
        data: i,
        baseURL: a,
        transformRequest: a,
        transformResponse: a,
        paramsSerializer: a,
        timeout: a,
        timeoutMessage: a,
        withCredentials: a,
        withXSRFToken: a,
        adapter: a,
        responseType: a,
        xsrfCookieName: a,
        xsrfHeaderName: a,
        onUploadProgress: a,
        onDownloadProgress: a,
        decompress: a,
        maxContentLength: a,
        maxBodyLength: a,
        beforeRedirect: a,
        transport: a,
        httpAgent: a,
        httpsAgent: a,
        cancelToken: a,
        socketPath: a,
        responseEncoding: a,
        validateStatus: s,
        headers: (u,d)=>n(Bh(u), Bh(d), !0)
    };
    return P.forEach(Object.keys(Object.assign({}, e, t)), function(d) {
        const c = l[d] || n
          , f = c(e[d], t[d], d);
        P.isUndefined(f) && c !== s || (r[d] = f)
    }),
    r
}
const A1 = "1.6.3"
  , Gd = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e,t)=>{
    Gd[e] = function(o) {
        return typeof o === e || "a" + (t < 1 ? "n " : " ") + e
    }
}
);
const Eh = {};
Gd.transitional = function(t, r, o) {
    function n(i, a) {
        return "[Axios v" + A1 + "] Transitional option '" + i + "'" + a + (o ? ". " + o : "")
    }
    return (i,a,s)=>{
        if (t === !1)
            throw new X(n(a, " has been removed" + (r ? " in " + r : "")),X.ERR_DEPRECATED);
        return r && !Eh[a] && (Eh[a] = !0,
        console.warn(n(a, " has been deprecated since v" + r + " and will be removed in the near future"))),
        t ? t(i, a, s) : !0
    }
}
;
function VC(e, t, r) {
    if (typeof e != "object")
        throw new X("options must be an object",X.ERR_BAD_OPTION_VALUE);
    const o = Object.keys(e);
    let n = o.length;
    for (; n-- > 0; ) {
        const i = o[n]
          , a = t[i];
        if (a) {
            const s = e[i]
              , l = s === void 0 || a(s, i, e);
            if (l !== !0)
                throw new X("option " + i + " must be " + l,X.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (r !== !0)
            throw new X("Unknown option " + i,X.ERR_BAD_OPTION)
    }
}
const vc = {
    assertOptions: VC,
    validators: Gd
}
  , mr = vc.validators;
class ls {
    constructor(t) {
        this.defaults = t,
        this.interceptors = {
            request: new wh,
            response: new wh
        }
    }
    request(t, r) {
        typeof t == "string" ? (r = r || {},
        r.url = t) : r = t || {},
        r = sn(this.defaults, r);
        const {transitional: o, paramsSerializer: n, headers: i} = r;
        o !== void 0 && vc.assertOptions(o, {
            silentJSONParsing: mr.transitional(mr.boolean),
            forcedJSONParsing: mr.transitional(mr.boolean),
            clarifyTimeoutError: mr.transitional(mr.boolean)
        }, !1),
        n != null && (P.isFunction(n) ? r.paramsSerializer = {
            serialize: n
        } : vc.assertOptions(n, {
            encode: mr.function,
            serialize: mr.function
        }, !0)),
        r.method = (r.method || this.defaults.method || "get").toLowerCase();
        let a = i && P.merge(i.common, i[r.method]);
        i && P.forEach(["delete", "get", "head", "post", "put", "patch", "common"], p=>{
            delete i[p]
        }
        ),
        r.headers = or.concat(a, i);
        const s = [];
        let l = !0;
        this.interceptors.request.forEach(function(m) {
            typeof m.runWhen == "function" && m.runWhen(r) === !1 || (l = l && m.synchronous,
            s.unshift(m.fulfilled, m.rejected))
        });
        const u = [];
        this.interceptors.response.forEach(function(m) {
            u.push(m.fulfilled, m.rejected)
        });
        let d, c = 0, f;
        if (!l) {
            const p = [_h.bind(this), void 0];
            for (p.unshift.apply(p, s),
            p.push.apply(p, u),
            f = p.length,
            d = Promise.resolve(r); c < f; )
                d = d.then(p[c++], p[c++]);
            return d
        }
        f = s.length;
        let h = r;
        for (c = 0; c < f; ) {
            const p = s[c++]
              , m = s[c++];
            try {
                h = p(h)
            } catch (w) {
                m.call(this, w);
                break
            }
        }
        try {
            d = _h.call(this, h)
        } catch (p) {
            return Promise.reject(p)
        }
        for (c = 0,
        f = u.length; c < f; )
            d = d.then(u[c++], u[c++]);
        return d
    }
    getUri(t) {
        t = sn(this.defaults, t);
        const r = j1(t.baseURL, t.url);
        return N1(r, t.params, t.paramsSerializer)
    }
}
P.forEach(["delete", "get", "head", "options"], function(t) {
    ls.prototype[t] = function(r, o) {
        return this.request(sn(o || {}, {
            method: t,
            url: r,
            data: (o || {}).data
        }))
    }
});
P.forEach(["post", "put", "patch"], function(t) {
    function r(o) {
        return function(i, a, s) {
            return this.request(sn(s || {}, {
                method: t,
                headers: o ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: i,
                data: a
            }))
        }
    }
    ls.prototype[t] = r(),
    ls.prototype[t + "Form"] = r(!0)
});
const Ba = ls;
class Kd {
    constructor(t) {
        if (typeof t != "function")
            throw new TypeError("executor must be a function.");
        let r;
        this.promise = new Promise(function(i) {
            r = i
        }
        );
        const o = this;
        this.promise.then(n=>{
            if (!o._listeners)
                return;
            let i = o._listeners.length;
            for (; i-- > 0; )
                o._listeners[i](n);
            o._listeners = null
        }
        ),
        this.promise.then = n=>{
            let i;
            const a = new Promise(s=>{
                o.subscribe(s),
                i = s
            }
            ).then(n);
            return a.cancel = function() {
                o.unsubscribe(i)
            }
            ,
            a
        }
        ,
        t(function(i, a, s) {
            o.reason || (o.reason = new Fi(i,a,s),
            r(o.reason))
        })
    }
    throwIfRequested() {
        if (this.reason)
            throw this.reason
    }
    subscribe(t) {
        if (this.reason) {
            t(this.reason);
            return
        }
        this._listeners ? this._listeners.push(t) : this._listeners = [t]
    }
    unsubscribe(t) {
        if (!this._listeners)
            return;
        const r = this._listeners.indexOf(t);
        r !== -1 && this._listeners.splice(r, 1)
    }
    static source() {
        let t;
        return {
            token: new Kd(function(n) {
                t = n
            }
            ),
            cancel: t
        }
    }
}
const GC = Kd;
function KC(e) {
    return function(r) {
        return e.apply(null, r)
    }
}
function XC(e) {
    return P.isObject(e) && e.isAxiosError === !0
}
const mc = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(mc).forEach(([e,t])=>{
    mc[t] = e
}
);
const QC = mc;
function O1(e) {
    const t = new Ba(e)
      , r = y1(Ba.prototype.request, t);
    return P.extend(r, Ba.prototype, t, {
        allOwnKeys: !0
    }),
    P.extend(r, t, null, {
        allOwnKeys: !0
    }),
    r.create = function(n) {
        return O1(sn(e, n))
    }
    ,
    r
}
const ke = O1(Vd);
ke.Axios = Ba;
ke.CanceledError = Fi;
ke.CancelToken = GC;
ke.isCancel = D1;
ke.VERSION = A1;
ke.toFormData = Qs;
ke.AxiosError = X;
ke.Cancel = ke.CanceledError;
ke.all = function(t) {
    return Promise.all(t)
}
;
ke.spread = KC;
ke.isAxiosError = XC;
ke.mergeConfig = sn;
ke.AxiosHeaders = or;
ke.formToJSON = e=>R1(P.isHTMLForm(e) ? new FormData(e) : e);
ke.getAdapter = I1.getAdapter;
ke.HttpStatusCode = QC;
ke.default = ke;
const Po = ()=>B.jsx("div", {
    className: "flex items-center justify-center h-full",
    children: B.jsx(D0, {
        size: "huge"
    })
})
  , L1 = ({isOpen: e})=>{
    const t = Us()
      , [r,o] = b.useState("")
      , n = [{
        prompt: "ကမ္ဘာမီးလောင်",
        ans: "သားကောင်ချနင်း",
        fun: "မီးရောင်ရ"
    }, {
        prompt: "ကိုယ်ထင်",
        ans: "ခုတင်ရွှေနန်း",
        fun: "ကိုယ့်လင်"
    }, {
        prompt: "ကြာကြာဝါးမည့်သွား",
        ans: "အရိုးကြည့်ရှောင်",
        fun: "သွားတိုက်"
    }, {
        prompt: "ခါချဉ်ကောင် မာန်ကြီးလို့ တောင်ကြီးဖြိုမည့်ကြံ",
        ans: "ခါးကမသန်",
        fun: "ခြေထောက်နဲ့ ကန်"
    }, {
        prompt: "ငှက်မသိက ဆက်ရက်ကို ချိုးထင်၊ အချက်မသိက",
        ans: "သမက်ကို သူခိုးထင်",
        fun: "နတ်ကို အမျိုးထင်"
    }, {
        prompt: "တော်သလင်းနေ",
        ans: "ပုစွန်သေ",
        fun: "အလွမ်းပြေ"
    }, {
        prompt: "ထန်းသီးကြွေခိုက်",
        ans: "ကျီးနင်းခိုက်",
        fun: "ခြင်ထကိုက်"
    }, {
        prompt: "ဒူးလောက်တင်မှ",
        ans: "ရင်လောက်ကျ",
        fun: "ဖင်ကောက်ရ"
    }, {
        prompt: "မပြည့်သည့်အိုး",
        ans: "ဘောင်ဘင်ခတ်",
        fun: "ထပ်ဖြည့်"
    }, {
        prompt: "မသိလျှင်မေး",
        ans: "မစင်လျှင်ဆေး",
        fun: "မသင်လျှင်အေး"
    }, {
        prompt: "မသိလျှင်မေး",
        ans: "မစင်လျှင်ဆေး",
        fun: "မသင်လျှင်အေး"
    }, {
        prompt: "မင်းမှာသစ္စာ",
        ans: "လူမှာကတိ",
        fun: "သူ့မှာမရှိ"
    }, {
        prompt: "ကုသိုလ်လည်းရ",
        ans: "ဝမ်းလည်းဝ",
        fun: "-"
    }, {
        prompt: "ကျွဲပါး",
        ans: "စောင်းတီး",
        fun: "ပိတ်ရိုက်"
    }, {
        prompt: "ခလုတ်ထိမှ",
        ans: "အမိတ",
        fun: "မီးလင်း"
    }, {
        prompt: "ငါးစိမ်းမြင်",
        ans: "ငါးကင်ပစ်",
        fun: "မစားချင်"
    }, {
        prompt: "ဆရာမပြ",
        ans: "နည်းမကျ",
        fun: "မကြည့်ရ"
    }]
      , [i,a] = b.useState({
        prompt: "",
        ans: "",
        fun: ""
    });
    b.useEffect(()=>{
        a(n[Math.floor(Math.random() * n.length)])
    }
    , []);
    const s = ()=>{
        r == i.ans ? localStorage.setItem("explicit_challenge", (Date.now() + 90 * 24 * 60 * 60 * 1e3).toString()) : alert("Please try again."),
        window.location.reload()
    }
    ;
    return B.jsx(hi, {
        open: e,
        children: B.jsx(Md, {
            className: "!mx-4 sm:!mx-auto",
            children: B.jsxs(Od, {
                children: [B.jsx(Ld, {
                    children: "လူကြီးဖြစ်ကြောင်း အတည်ပြုခြင်း"
                }), B.jsxs(qd, {
                    children: [B.jsx("br", {}), B.jsx("p", {
                        children: "မြန်မာ စကားပုံ ကွက်လပ်ဖြည့်ပါ။"
                    }), B.jsx("br", {}), B.jsx(_3, {
                        children: i.prompt
                    }), B.jsx(Dd, {
                        onChange: l=>o(l.target.value),
                        onKeyDown: l=>{
                            l.key === "Enter" && s()
                        }
                        ,
                        size: "large",
                        className: "w-full my-4",
                        placeholder: i.fun
                    })]
                }), B.jsxs(Ad, {
                    children: [B.jsx(Ti, {
                        disableButtonEnhancement: !0,
                        children: B.jsx(jt, {
                            appearance: "secondary",
                            onClick: ()=>t("/"),
                            children: "Cancel"
                        })
                    }), B.jsx(jt, {
                        appearance: "primary",
                        onClick: s,
                        children: "Submit"
                    })]
                })]
            })
        })
    })
}
;
L1.propTypes = {
    isOpen: vt.bool
};
const M1 = gm({
    main: {
        ...Mo.gap("16px"),
        display: "flex",
        flexWrap: "wrap"
    },
    card: {
        width: "400px",
        maxWidth: "100%",
        height: "fit-content"
    },
    caption: {
        color: ea.colorNeutralForeground3
    },
    smallRadius: {
        ...Mo.borderRadius(ea.borderRadiusSmall)
    },
    grayBackground: {
        backgroundColor: ea.colorNeutralBackground3
    },
    logoBadge: {
        ...Mo.padding("5px"),
        ...Mo.borderRadius(ea.borderRadiusSmall),
        backgroundColor: "#FFF",
        boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.14), 0px 0px 2px rgba(0, 0, 0, 0.12)"
    }
})
  , JC = e=>{
    const t = M1()
      , r = ()=>window.innerWidth >= 768 ? e.video.poster_url : e.video.thumbnail_url
      , [o,n] = b.useState(r);
    b.useEffect(()=>{
        const a = ()=>n(r);
        return window.addEventListener("resize", a),
        ()=>window.removeEventListener("resize", a)
    }
    , []);
    const i = a=>parseFloat(a) % 1 === 0 ? parseInt(a) : parseFloat(a).toFixed(1);
    return B.jsxs(G0, {
        className: t.card,
        ...e,
        children: [B.jsx(X0, {
            className: t.grayBackground,
            logo: B.jsx("h4", {
                className: `${t.logoBadge} text-center font-semibold`,
                children: i(e.video.rating)
            }),
            children: B.jsx("img", {
                className: `${t.smallRadius} object-cover max-h-[230px] min-w-[180px] md:min-h-[8rem] md:max-h-[8rem]`,
                src: o,
                onError: ()=>{
                    n(e.video.thumbnail_url)
                }
                ,
                alt: ""
            })
        }), B.jsx(K0, {
            className: "!inline-block",
            header: B.jsx("h1", {
                className: "truncate",
                children: e.video.title
            }),
            description: B.jsx(k3, {
                className: t.caption,
                children: B.jsxs("div", {
                    className: "flex",
                    children: [B.jsx("span", {
                        children: e.video.release
                    }), B.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "16",
                        height: "16",
                        fill: "currentColor",
                        className: "bi bi-dot",
                        viewBox: "0 0 16 16",
                        children: B.jsx("path", {
                            d: "M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
                        })
                    }), B.jsx("span", {
                        children: e.video.video_quality
                    })]
                })
            })
        })]
    })
}
  , YC = ({video: e, onMovieClicked: t})=>{
    const r = M1();
    return B.jsx("div", {
        className: r.main,
        children: B.jsx(JC, {
            video: e,
            selected: !1,
            onClick: t
        })
    })
}
  , ZC = "/assets/FluentSystemIcons-Filled-VYwQIqyf.ttf"
  , eT = "/assets/FluentSystemIcons-Filled-3B1rAFPZ.woff"
  , tT = "/assets/FluentSystemIcons-Filled-QNRWS_1f.woff2"
  , rT = "/assets/FluentSystemIcons-Regular-5lG_Ps0T.ttf"
  , oT = "/assets/FluentSystemIcons-Regular-YVuavYEK.woff"
  , nT = "/assets/FluentSystemIcons-Regular-rH4h0zWm.woff2"
  , iT = "/assets/FluentSystemIcons-Resizable-IgrgfWjH.ttf"
  , aT = "/assets/FluentSystemIcons-Resizable-6rFJ9GmH.woff"
  , sT = "/assets/FluentSystemIcons-Resizable-x70gsEOE.woff2"
  , Gl = {
    0: "FluentSystemIconsFilled",
    1: "FluentSystemIconsRegular",
    2: "FluentSystemIcons"
}
  , lT = fx(`
@font-face {
    font-family: ${Gl[0]};
    font-display: "block";
    src: url(${JSON.stringify(tT)}) format("woff2"),
    url(${JSON.stringify(eT)}) format("woff"),
    url(${JSON.stringify(ZC)}) format("truetype");
}
@font-face {
    font-family: ${Gl[1]};
    font-display: "block";
    src: url(${JSON.stringify(nT)}) format("woff2"),
    url(${JSON.stringify(oT)}) format("woff"),
    url(${JSON.stringify(rT)}) format("truetype");
}
@font-face {
    font-family: ${Gl[2]};
    font-display: "block";
    src: url(${JSON.stringify(sT)}) format("woff2"),
    url(${JSON.stringify(aT)}) format("woff"),
    url(${JSON.stringify(iT)}) format("truetype");
}
`)
  , uT = U({
    0: {
        Bahqtrf: "f9dzkbp"
    },
    1: {
        Bahqtrf: "f1krtbx5"
    },
    2: {
        Bahqtrf: "f1sxfq9t"
    },
    root: {
        mc9l5x: "f14t3ns0",
        B80ckks: "fmd4ok8",
        Bg96gwp: "fne0op0",
        ycbfsm: "fg4l7m0"
    }
}, {
    d: [".f9dzkbp{font-family:FluentSystemIconsFilled;}", ".f1krtbx5{font-family:FluentSystemIconsRegular;}", ".f1sxfq9t{font-family:FluentSystemIcons;}", ".f14t3ns0{display:inline-block;}", ".fmd4ok8{font-style:normal;}", ".fne0op0{line-height:1em;}"],
    t: ["@media (forced-colors: active){.fg4l7m0{forced-color-adjust:auto;}}"]
});
function Xd(e, t, r, o, n) {
    const i = a=>{
        lT();
        const s = uT()
          , l = W(s.root, s[r], a.className)
          , u = jm({
            ...a,
            className: l
        }, {
            flipInRtl: n == null ? void 0 : n.flipInRtl
        });
        return a.primaryFill && (u.style = {
            ...u.style,
            color: a.primaryFill
        }),
        o && (u.style = {
            ...u.style,
            fontSize: o
        }),
        b.createElement("i", Object.assign({}, u), t)
    }
    ;
    return i.displayName = e,
    i.codepoint = t,
    i
}
const cT = Xd("ArrowClockwiseRegular", "", 2, void 0)
  , FT = Xd("ArrowDownloadRegular", "", 2, void 0)
  , dT = Xd("CloudOff48Regular", "", 1, 48)
  , q1 = ({title: e="Failed to connect.", onRefreshButtonClick: t})=>B.jsxs("div", {
    className: "flex flex-col items-center justify-center h-full text-center",
    children: [B.jsx(dT, {}), B.jsx("h3", {
        className: "text-xl font-semibold mt-2 mb-6",
        children: e
    }), B.jsx(jt, {
        onClick: t,
        size: "large",
        icon: B.jsx(cT, {}),
        children: "Refresh"
    })]
});
q1.propTypes = {
    title: vt.string,
    onRefreshButtonClick: vt.func
};
const to = ({apiRoute: e, hasQuery: t=!1, extraIdName: r=null})=>{
    const o = ko()
      , n = new URLSearchParams(o.search);
    let i = parseInt(n.get("page"));
    i = isNaN(i) ? 1 : i > 0 ? i : 1;
    const a = oP()
      , s = r == null ? null : a[r]
      , l = n.get("q")
      , u = b.useRef(null)
      , [d,c] = b.useState(!1)
      , [f,h] = b.useState(null)
      , p = Us()
      , m = b.useCallback(()=>{
        let y = `https://api.awsfluent.workers.dev/v3/${e}`;
        s != null && (y += `/${s}`),
        y += `?page=${i}`,
        t && (y = y + `&q=${l}`),
        ke.get(y).then(x=>{
            const S = u.current;
            S && S.parentNode.scrollTo({
                top: 0
            }),
            h(x.data)
        }
        ).catch(x=>c(!0))
    }
    , [e, i, t, l])
      , [w,v] = b.useState(!1)
      , g = b.useCallback(()=>{
        e == "genres" && s == 73 && parseInt(localStorage.getItem("explicit_challenge") || "0") < Date.now() ? v(!0) : m()
    }
    , [m]);
    return b.useEffect(()=>g(), [g, m]),
    d ? B.jsx(q1, {
        onRefreshButtonClick: ()=>{
            c(!1),
            m()
        }
    }) : f ? B.jsxs("div", {
        ref: u,
        children: [t && B.jsxs("div", {
            className: "m-4",
            children: [B.jsx("span", {
                className: "font-semibold",
                children: "Search : "
            }), l]
        }), B.jsx("div", {
            className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 m-4",
            children: f.map(y=>B.jsx(YC, {
                video: y,
                onMovieClicked: ()=>p(y.is_series ? `/series/${y.id}` : `/movies/${y.id}`)
            }, y.id))
        }), f.length === 0 && B.jsxs("p", {
            className: "px-4 py-2",
            children: ["No movies found at page ", i, "."]
        }), B.jsxs("div", {
            className: "flex items-center justify-between p-3",
            children: [B.jsx(pi, {
                content: "Previous page",
                relationship: "label",
                children: B.jsx(jt, {
                    disabled: i == 1,
                    onClick: ()=>p(`/${e}` + (s == null ? "" : `/${s}`) + `?page=${i - 1}` + (t ? `&q=${l}` : "")),
                    size: "large",
                    icon: B.jsx(k2, {}),
                    children: "Previous"
                })
            }), B.jsxs(y3, {
                as: "h3",
                children: ["Page : ", i]
            }), B.jsx(pi, {
                content: "Next page",
                relationship: "label",
                children: B.jsx(jt, {
                    disabled: f.length === 0,
                    onClick: ()=>p(`/${e}` + (s == null ? "" : `/${s}`) + `?page=${i + 1}` + (t ? `&q=${l}` : "")),
                    size: "large",
                    icon: B.jsx(x2, {}),
                    iconPosition: "after",
                    children: "Next"
                })
            })]
        })]
    }) : w ? B.jsx(L1, {
        isOpen: !0
    }) : B.jsx(Po, {})
}
;
to.propTypes = {
    apiRoute: vt.string,
    hasQuery: vt.bool
};
const Ph = b.lazy(()=>Bs(()=>import("./VideoDetail-o09rUCFS.js").then(e=>e.V), __vite__mapDeps([0, 1])).then(({VideoDetail: e})=>({
    default: e
})))
  , fT = b.lazy(()=>Bs(()=>import("./About-qYiWFrAh.js"), __vite__mapDeps([2, 1])).then(({About: e})=>({
    default: e
})))
  , pT = b.lazy(()=>Bs(()=>import("./Genres-SGjqFJnk.js"), __vite__mapDeps([])).then(({Genres: e})=>({
    default: e
})))
  , hT = b.lazy(()=>Bs(()=>import("./Countries-YpOP2Xjj.js"), __vite__mapDeps([])).then(({Countries: e})=>({
    default: e
})));
function gT() {
    return B.jsx(p0, {
        theme: M_,
        children: B.jsx(BP, {
            children: B.jsx(DP, {
                children: B.jsxs(yP, {
                    children: [B.jsx(ft, {
                        path: "/",
                        element: B.jsx(to, {
                            apiRoute: "movies"
                        })
                    }), B.jsx(ft, {
                        path: "/movies",
                        element: B.jsx(to, {
                            apiRoute: "movies"
                        }, "movies")
                    }), B.jsx(ft, {
                        path: "/series",
                        element: B.jsx(to, {
                            apiRoute: "series"
                        }, "series")
                    }), B.jsx(ft, {
                        path: "/search",
                        element: B.jsx(to, {
                            apiRoute: "search",
                            hasQuery: !0
                        }, "search")
                    }), B.jsx(ft, {
                        path: "/genres/:genreId",
                        element: B.jsx(to, {
                            apiRoute: "genres",
                            extraIdName: "genreId"
                        }, "videos_by_genre")
                    }), B.jsx(ft, {
                        path: "/countries/:countryId",
                        element: B.jsx(to, {
                            apiRoute: "countries",
                            extraIdName: "countryId"
                        }, "videos_by_country")
                    }), B.jsx(ft, {
                        path: "/about",
                        element: B.jsx(b.Suspense, {
                            fallback: B.jsx(Po, {}),
                            children: B.jsx(fT, {})
                        })
                    }), B.jsx(ft, {
                        path: "/genres",
                        element: B.jsx(b.Suspense, {
                            fallback: B.jsx(Po, {}),
                            children: B.jsx(pT, {})
                        })
                    }), B.jsx(ft, {
                        path: "/countries",
                        element: B.jsx(b.Suspense, {
                            fallback: B.jsx(Po, {}),
                            children: B.jsx(hT, {})
                        })
                    }), B.jsx(ft, {
                        path: "/movies/:videoId",
                        element: B.jsx(b.Suspense, {
                            fallback: B.jsx(Po, {}),
                            children: B.jsx(Ph, {
                                apiRoute: "movies"
                            }, "movies")
                        })
                    }), B.jsx(ft, {
                        path: "/series/:videoId",
                        element: B.jsx(b.Suspense, {
                            fallback: B.jsx(Po, {}),
                            children: B.jsx(Ph, {
                                apiRoute: "series"
                            }, "series")
                        })
                    })]
                })
            })
        })
    })
}
Kl.createRoot(document.getElementById("root")).render(B.jsx(ro.StrictMode, {
    children: B.jsx(gT, {})
}));
export {PB as $, i0 as A, jt as B, yT as C, m0 as D, Ar as E, xa as F, x2 as G, wT as H, k2 as I, bT as J, Ce as K, v0 as L, ET as M, CT as N, TT as O, Rd as P, wd as Q, Lt as R, ra as S, $n as T, zm as U, PT as V, Za as W, MB as X, Cm as Y, qx as Z, U as _, ot as a, Xd as a0, Bs as a1, mT as a2, vt as a3, vT as a4, yc as a5, B as a6, gm as a7, Mo as a8, ea as a9, G0 as aa, K0 as ab, oP as ac, Us as ad, ke as ae, q1 as af, FT as ag, y3 as ah, Po as ai, IS as aj, zT as ak, H3 as al, NT as am, ST as an, xT as ao, _3 as ap, k3 as aq, X0 as ar, kT as as, _T as at, jd as au, As as b, Re as c, BT as d, Yu as e, RS as f, p2 as g, o0 as h, q as i, ut as j, NB as k, OB as l, W as m, Fe as n, He as o, pn as p, pe as q, b as r, Oe as s, Z_ as t, It as u, e5 as v, r5 as w, T0 as x, uB as y, js as z};
function __vite__mapDeps(indexes) {
    if (!__vite__mapDeps.viteFileDeps) {
        __vite__mapDeps.viteFileDeps = ["assets/VideoDetail-o09rUCFS.js", "assets/Body1-nQPyf7Wl.js", "assets/About-qYiWFrAh.js"]
    }
    return indexes.map((i)=>__vite__mapDeps.viteFileDeps[i])
}

