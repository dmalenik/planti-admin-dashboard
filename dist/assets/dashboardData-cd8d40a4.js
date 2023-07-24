import { r as L } from "./reactIcons-c203e6d7.js";
var x = { exports: {} },
  g = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var b = L,
  T = Symbol.for("react.element"),
  U = Symbol.for("react.fragment"),
  j = Object.prototype.hasOwnProperty,
  N = b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  C = { key: !0, ref: !0, __self: !0, __source: !0 };
function v(a, e, s) {
  var o,
    c = {},
    i = null,
    n = null;
  s !== void 0 && (i = "" + s),
    e.key !== void 0 && (i = "" + e.key),
    e.ref !== void 0 && (n = e.ref);
  for (o in e) j.call(e, o) && !C.hasOwnProperty(o) && (c[o] = e[o]);
  if (a && a.defaultProps)
    for (o in ((e = a.defaultProps), e)) c[o] === void 0 && (c[o] = e[o]);
  return { $$typeof: T, type: a, key: i, ref: n, props: c, _owner: N.current };
}
g.Fragment = U;
g.jsx = v;
g.jsxs = v;
x.exports = g;
var t = x.exports;
const V = "modulepreload",
  B = function (a, e) {
    return new URL(a, e).href;
  },
  I = {},
  r = function (e, s, o) {
    if (!s || s.length === 0) return e();
    const c = document.getElementsByTagName("link");
    return Promise.all(
      s.map((i) => {
        if (((i = B(i, o)), i in I)) return;
        I[i] = !0;
        const n = i.endsWith(".css"),
          D = n ? '[rel="stylesheet"]' : "";
        if (!!o)
          for (let d = c.length - 1; d >= 0; d--) {
            const u = c[d];
            if (u.href === i && (!n || u.rel === "stylesheet")) return;
          }
        else if (document.querySelector(`link[href="${i}"]${D}`)) return;
        const m = document.createElement("link");
        if (
          ((m.rel = n ? "stylesheet" : V),
          n || ((m.as = "script"), (m.crossOrigin = "")),
          (m.href = i),
          document.head.appendChild(m),
          n)
        )
          return new Promise((d, u) => {
            m.addEventListener("load", d),
              m.addEventListener("error", () =>
                u(new Error(`Unable to preload CSS for ${i}`)),
              );
          });
      }),
    ).then(() => e());
  },
  l = (a) => {
    const e = [];
    for (let s = 1; s <= a; s++) e.push(crypto.randomUUID());
    return e;
  },
  M =
    "" +
    new URL("activitycards-sun_and_plants-6ae73b25.webp", import.meta.url).href,
  $ = "" + new URL("activitycards-leaf-8adbc634.webp", import.meta.url).href,
  k = "" + new URL("activitycards-leaves-33513f40.webp", import.meta.url).href,
  h = l(3),
  q = [
    {
      id: h[0],
      portrait: { src: M, alt: "Sun and Plants Customer Image" },
      details: { name: "Sun and Plants", status: "Ordered a new plant" },
      duration: "2 min ago",
    },
    {
      id: h[1],
      portrait: { src: $, alt: "Some Customer Image" },
      details: { name: "Sun and Plants", status: "Ordered a new plant" },
      duration: "2 min ago",
    },
    {
      id: h[2],
      portrait: { src: k, alt: "Some 2nd Customer Image" },
      details: { name: "Sun and Plants", status: "Ordered a new plant" },
      duration: "2 min ago",
    },
  ],
  { BsArrowRightShort: F } = await r(
    () => import("./index.esm-73773eb3.js"),
    ["./index.esm-73773eb3.js", "./reactIcons-c203e6d7.js"],
    import.meta.url,
  ),
  H = {
    title: { text: "Recent Activity" },
    action: { text: "See All", icon: t.jsx(F, { className: "icon" }) },
  },
  { BsArrowRightShort: W } = await r(
    () => import("./index.esm-73773eb3.js"),
    ["./index.esm-73773eb3.js", "./reactIcons-c203e6d7.js"],
    import.meta.url,
  ),
  G = {
    title: { text: "My Listings" },
    action: { text: "See All", icon: t.jsx(W, { className: "icon" }) },
  },
  Q =
    "" +
    new URL("listingcards-annual_vince-4b71c4e2.webp", import.meta.url).href,
  z =
    "" +
    new URL("listingcards-palace_and_plants-3bbdf6e0.webp", import.meta.url)
      .href,
  J =
    "" +
    new URL("listingcards-mountains_view-4c42174e.webp", import.meta.url).href,
  { AiFillHeart: R, AiOutlineHeart: K } = await r(
    () => import("./index.esm-aa776ee3.js"),
    ["./index.esm-aa776ee3.js", "./reactIcons-c203e6d7.js"],
    import.meta.url,
  ),
  y = l(3),
  Y = [
    {
      id: y[0],
      icon: t.jsx(R, { className: "icon" }),
      img: { src: Q, alt: "Annual Vince" },
      title: "Annual Vince",
    },
    {
      id: y[1],
      icon: t.jsx(K, { className: "icon" }),
      img: { src: z, alt: "Palace and Plants" },
      title: "Palace and Plants",
    },
    {
      id: y[2],
      icon: t.jsx(R, { className: "icon" }),
      img: { src: J, alt: "Mountains View" },
      title: "Mountains View",
    },
  ],
  S = "" + new URL("topsellers-waterfall-b5cb998b.webp", import.meta.url).href,
  P =
    "" +
    new URL("topsellers-mountains_and_flowers-e0a66258.webp", import.meta.url)
      .href,
  O = "" + new URL("topsellers-flowers-fac7b7c4.webp", import.meta.url).href,
  { BsArrowRightShort: X } = await r(
    () => import("./index.esm-73773eb3.js"),
    ["./index.esm-73773eb3.js", "./reactIcons-c203e6d7.js"],
    import.meta.url,
  ),
  p = l(4),
  Z = {
    id: p[0],
    type: "featuredSellers",
    heading: {
      title: { text: "Featured Sellers" },
      action: { text: "See All", icon: t.jsx(X, { className: "icon" }) },
    },
    card: {
      users: [
        { id: p[1], src: S, alt: "Plants and Waterfall" },
        { id: p[2], src: P, alt: "Flowers and Mountains" },
        { id: p[3], src: O, alt: "Some Img 2" },
      ],
      text: {
        results: { quantity: 28.456, product: "Plants ", action: "sold" },
        sellers: {
          role: "Sellers",
          quantity: 26,
          date: { type: " Days", digit: 31 },
        },
      },
    },
  },
  { BsArrowRightShort: tt } = await r(
    () => import("./index.esm-73773eb3.js"),
    ["./index.esm-73773eb3.js", "./reactIcons-c203e6d7.js"],
    import.meta.url,
  ),
  _ = l(4),
  et = {
    id: _[0],
    type: "topSellers",
    heading: {
      title: { text: "Top Sellers" },
      action: { text: "See All", icon: t.jsx(tt, { className: "icon" }) },
    },
    card: {
      users: [
        { id: _[1], src: S, alt: "Plants and Waterfall" },
        { id: _[2], src: P, alt: "Flowers and Mountains" },
        { id: _[3], src: O, alt: "Some Img 2" },
      ],
      text: {
        results: { quantity: 14.456, product: "Plants ", action: "sold" },
        sellers: {
          role: "Sellers",
          quantity: 21,
          date: { type: " Days", digit: 7 },
        },
      },
    },
  },
  { BsQuestionCircle: rt } = await r(
    () => import("./index.esm-73773eb3.js"),
    ["./index.esm-73773eb3.js", "./reactIcons-c203e6d7.js"],
    import.meta.url,
  ),
  it = {
    title: "Help Center",
    description:
      "Having troubles in Planti, please contact us for more questions",
    btnText: "Go to Help Center",
    icon: t.jsx(rt, { className: "icon" }),
  },
  { IoMdSpeedometer: ot } = await r(
    () => import("./index.esm-5f0d7bb8.js"),
    ["./index.esm-5f0d7bb8.js", "./reactIcons-c203e6d7.js"],
    import.meta.url,
  ),
  { MdDeliveryDining: at, MdOutlineExplore: st } = await r(
    () => import("./index.esm-48cf540f.js"),
    ["./index.esm-48cf540f.js", "./reactIcons-c203e6d7.js"],
    import.meta.url,
  ),
  { BsTrophy: nt } = await r(
    () => import("./index.esm-73773eb3.js"),
    ["./index.esm-73773eb3.js", "./reactIcons-c203e6d7.js"],
    import.meta.url,
  ),
  w = l(4),
  lt = {
    type: "menuDiv",
    title: "QUICK MENU",
    listItems: [
      {
        id: w[0],
        icon: t.jsx(ot, { className: "icon" }),
        description: "Dashboard",
      },
      {
        id: w[1],
        icon: t.jsx(at, { className: "icon" }),
        description: "My Orders",
      },
      {
        id: w[2],
        icon: t.jsx(st, { className: "icon" }),
        description: "Explore",
      },
      {
        id: w[3],
        icon: t.jsx(nt, { className: "icon" }),
        description: "Products",
      },
    ],
  },
  { AiOutlinePieChart: ct } = await r(
    () => import("./index.esm-aa776ee3.js"),
    ["./index.esm-aa776ee3.js", "./reactIcons-c203e6d7.js"],
    import.meta.url,
  ),
  { BiTrendingUp: mt } = await r(
    () => import("./index.esm-77d4550b.js"),
    ["./index.esm-77d4550b.js", "./reactIcons-c203e6d7.js"],
    import.meta.url,
  ),
  { MdOutlinePermContactCalendar: dt } = await r(
    () => import("./index.esm-48cf540f.js"),
    ["./index.esm-48cf540f.js", "./reactIcons-c203e6d7.js"],
    import.meta.url,
  ),
  { BsCreditCard2Front: ut } = await r(
    () => import("./index.esm-73773eb3.js"),
    ["./index.esm-73773eb3.js", "./reactIcons-c203e6d7.js"],
    import.meta.url,
  ),
  f = l(4),
  pt = {
    type: "settingsDiv",
    title: "SETTINGS",
    listItems: [
      {
        id: f[0],
        icon: t.jsx(ct, { className: "icon" }),
        description: "Charts",
      },
      {
        id: f[1],
        icon: t.jsx(mt, { className: "icon" }),
        description: "Trends",
      },
      {
        id: f[2],
        icon: t.jsx(dt, { className: "icon" }),
        description: "Contact",
      },
      {
        id: f[3],
        icon: t.jsx(ut, { className: "icon" }),
        description: "Billing",
      },
    ],
  },
  _t = "" + new URL("adminbar-admin-3a8a7b6e.webp", import.meta.url).href,
  { BiSearchAlt: wt } = await r(
    () => import("./index.esm-77d4550b.js"),
    ["./index.esm-77d4550b.js", "./reactIcons-c203e6d7.js"],
    import.meta.url,
  ),
  { TbMessageCircle: ft } = await r(
    () => import("./index.esm-0fec6dcf.js"),
    ["./index.esm-0fec6dcf.js", "./reactIcons-c203e6d7.js"],
    import.meta.url,
  ),
  { IoMdNotificationsOutline: gt } = await r(
    () => import("./index.esm-5f0d7bb8.js"),
    ["./index.esm-5f0d7bb8.js", "./reactIcons-c203e6d7.js"],
    import.meta.url,
  ),
  E = l(2),
  ht = {
    title: {
      heading: "Welcome to Planti",
      description: "Hello, Dmitriy. Welcome back!",
    },
    searchBar: {
      type: "text",
      id: "SearchBar",
      name: "SearchBar",
      icon: t.jsx(wt, { className: "icon" }),
    },
    adminDiv: {
      icons: [
        t.jsx(ft, { className: "icon" }, E[0]),
        t.jsx(gt, { className: "icon" }, E[1]),
      ],
      img: { src: _t, alt: "Admin Image" },
    },
  },
  yt = "" + new URL("rainyVideo_crop_720-8df6f693.mp4", import.meta.url).href,
  It = "" + new URL("rainyVideoPoster-720db000.webp", import.meta.url).href,
  Rt = {
    title: "Create and sell extraordinary products",
    description:
      "The world's fast growing industry today are natural made products",
    actions: { action1: "Exlore More", action2: "Top Sellers" },
    video: { src: yt, poster: It },
  },
  Et = "" + new URL("rightcard-flower-8cba7430.webp", import.meta.url).href,
  { BsArrowRightShort: At } = await r(
    () => import("./index.esm-73773eb3.js"),
    ["./index.esm-73773eb3.js", "./reactIcons-c203e6d7.js"],
    import.meta.url,
  ),
  A = l(2),
  xt = {
    text: {
      heading: "My Stats",
      stats: [
        { id: A[0], type: "Orders", date: "Today", quantity: 4 },
        { id: A[1], type: "Orders", date: "This Month", quantity: 127 },
      ],
      link: {
        action: "Go to my orders",
        icon: t.jsx(At, { className: "icon" }),
      },
    },
    image: { src: Et, alt: "Flowers Image" },
  },
  Pt = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        activityCards: q,
        activityHeading: H,
        adminBar: ht,
        featuredSellers: Z,
        helpCenter: it,
        leftCard: Rt,
        listingCards: Y,
        listingsHeading: G,
        quickMenu: lt,
        rightCard: xt,
        settingsMenu: pt,
        topSellers: et,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  );
export { r as _, it as h, Pt as i, t as j };
