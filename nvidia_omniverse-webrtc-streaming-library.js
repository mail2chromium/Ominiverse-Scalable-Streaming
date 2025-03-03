import {
  __commonJS
} from "/node_modules/.vite/deps/chunk-BUSYA2B4.js?v=5c9365cd";

// node_modules/@nvidia/omniverse-webrtc-streaming-library/dist/index.js
var require_dist = __commonJS({
  "node_modules/@nvidia/omniverse-webrtc-streaming-library/dist/index.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports["app-streamer"] = t() : e["app-streamer"] = t();
    }(exports, () => (() => {
      var e = { 355: function(e2, t2, i2) {
        "use strict";
        var n2 = this && this.__createBinding || (Object.create ? function(e3, t3, i3, n3) {
          void 0 === n3 && (n3 = i3);
          var s2 = Object.getOwnPropertyDescriptor(t3, i3);
          s2 && !("get" in s2 ? !t3.__esModule : s2.writable || s2.configurable) || (s2 = { enumerable: true, get: function() {
            return t3[i3];
          } }), Object.defineProperty(e3, n3, s2);
        } : function(e3, t3, i3, n3) {
          void 0 === n3 && (n3 = i3), e3[n3] = t3[i3];
        }), s = this && this.__exportStar || function(e3, t3) {
          for (var i3 in e3) "default" === i3 || Object.prototype.hasOwnProperty.call(t3, i3) || n2(t3, e3, i3);
        };
        Object.defineProperty(t2, "__esModule", { value: true }), s(i2(11), t2);
      }, 11: (e2, t2) => {
        "use strict";
        Object.defineProperty(t2, "__esModule", { value: true }), t2.LogImpl = void 0;
        class i2 {
          constructor(e3, t3) {
            this.module = e3, this.enabled = true, this.shouldLogToConsole = false, this.queue = [], t3 && (void 0 !== t3.enable && (this.enabled = t3.enable), void 0 !== t3.enableConsoleLogging && (this.shouldLogToConsole = t3.enableConsoleLogging)), this._nop = (e4, t4, ...i3) => {
            }, this._d = (e4, t4, ...i3) => this.handleLog("DEBUG", e4, t4, i3), this._i = (e4, t4, ...i3) => this.handleLog("INFO", e4, t4, i3), this._w = (e4, t4, ...i3) => this.handleLog("WARN", e4, t4, i3), this._e = (e4, t4, ...i3) => this.handleLog("ERROR", e4, t4, i3);
          }
          get d() {
            return this.enabled ? this.shouldLogToConsole ? console.debug.bind(console, "%s DEBUG [%s] %s@@", this.renderDate(/* @__PURE__ */ new Date())) : this._d : this._nop;
          }
          get w() {
            return this.enabled ? this.shouldLogToConsole ? console.warn.bind(console, "%s WARN  [%s] %s@@", this.renderDate(/* @__PURE__ */ new Date())) : this._w : this._nop;
          }
          get i() {
            return this.enabled ? this.shouldLogToConsole ? console.info.bind(console, "%s INFO  [%s] %s@@", this.renderDate(/* @__PURE__ */ new Date())) : this._i : this._nop;
          }
          get e() {
            return this.shouldLogToConsole ? console.error.bind(console, "%s ERROR [%s] %s@@", this.renderDate(/* @__PURE__ */ new Date())) : this._e;
          }
          setLogCallback(e3) {
            this.callback = e3, this.callback && this.queue.length && window.setTimeout(() => {
              this.executeLogCallback(true);
            });
          }
          isCallbackRegistered() {
            return !!this.callback;
          }
          sanitize(e3) {
            if (!e3) return e3;
            const t3 = [{ secretBlock: /(partnerCustomData" *: *")((\\"|[^"])*)(?=")/g, replaceStr: "$1***" }, { secretBlock: /("clientIp" *: *")(\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})(?=")/g, replaceStr: "$1***" }];
            for (const i3 of t3) e3 = e3.replace(i3.secretBlock, i3.replaceStr);
            return e3;
          }
          stringifyArgs(...e3) {
            return e3.length ? `##${JSON.stringify(e3)}` : "";
          }
          executeLogCallback(e3) {
            this.callback && this.queue.length && (this.callback(this.queue[0]), this.queue.shift(), e3 && this.queue.length && window.setTimeout(() => {
              this.executeLogCallback(true);
            }));
          }
          handleLog(e3, t3, n2, s) {
            let r = `${n2}${this.stringifyArgs(...s)}`, o = { timestamp: this.renderDate(/* @__PURE__ */ new Date()), level: e3, tag: this.module + "/" + t3, message: r };
            this.queue.push(o), this.callback ? window.setTimeout(() => {
              this.executeLogCallback(false);
            }) : this.queue.length > i2.MAX_QUEUE_SIZE && this.queue.shift();
          }
          renderDate(e3) {
            const t3 = (e4, t4, i4) => {
              const n2 = t4 - e4.length;
              if (n2 > 0) {
                let t5 = "";
                for (let e5 = 0; e5 < n2; e5++) t5 += i4;
                return t5 += e4, t5;
              }
              return e4;
            };
            let i3 = "";
            return i3 = t3(e3.getFullYear().toString(), 4, "0") + "-" + t3((e3.getMonth() + 1).toString(), 2, "0") + "-" + ((e4) => t3(e4.getDate().toString(), 2, "0"))(e3) + " " + ((e4) => t3(e4.getHours().toString(), 2, "0"))(e3) + ":" + ((e4) => t3(e4.getMinutes().toString(), 2, "0"))(e3) + ":" + ((e4) => t3(e4.getSeconds().toString(), 2, "0"))(e3) + "." + ((e4) => t3(e4.getMilliseconds().toString(), 3, "0"))(e3), i3;
          }
        }
        t2.LogImpl = i2, i2.MAX_QUEUE_SIZE = 50;
      }, 271: (e2, t2, i2) => {
        (() => {
          var t3 = { 393: (e3, t4, i3) => {
            var n3 = true, s2 = false;
            function r2(e4) {
              if (e4) switch (e4) {
                case "enable":
                case "on":
                case "1":
                case "true":
                  return true;
                case "disable":
                case "off":
                case "0":
                case "false":
                  return false;
              }
            }
            var o = i3(778), a = i3(754), d = new o.LogImpl("R", { enable: n3, Sg: s2 });
            function c() {
              return u || (u = new h()), u;
            }
            function l(e4, t5, i4) {
              const n4 = e4.g.startSpan(t5);
              return a.context.with(a.trace.setSpan(a.context.active(), n4), async () => {
                try {
                  const e5 = i4();
                  return e5 instanceof Promise ? await e5 : e5;
                } finally {
                  n4.end();
                }
              });
            }
            var u, h = class {
              constructor() {
                this.g = a.trace.getTracer("gfn-web-gamestream", "2.0");
              }
            }, p = class {
              constructor(e4, t5) {
                var i4;
                this.g = 0, this.h = this.o = false, this.promise = new Promise((e5, t6) => {
                  this.C = e5, this.m = t6;
                }), null != t5 && t5.aborted ? (this.h = true, this.m()) : (this.j = t5, this.l = this.s.bind(this), null === (i4 = this.j) || void 0 === i4 || i4.addEventListener("abort", this.l), this.g = window.setTimeout(this.v.bind(this), e4));
              }
              cancel() {
                var e4;
                null === (e4 = this.j) || void 0 === e4 || e4.removeEventListener("abort", this.l), this.g && (window.clearTimeout(this.g), this.g = 0), this.j = void 0;
              }
              s() {
                this.h = true, this.m(), this.cancel();
              }
              v() {
                this.o = true, this.C(), this.g = 0, this.cancel();
              }
            };
            function f(e4) {
              return "Xbox" === e4.os && "Edge" === e4.browser;
            }
            function v(e4) {
              return "iOS" === e4.os || "iPadOS" === e4.os;
            }
            function m(e4) {
              return !!/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(e4);
            }
            function g(e4) {
              return "0x" + ("00000000" + (e4 >>> 0).toString(16).toUpperCase()).slice(-8);
            }
            function A(e4) {
              return e4 ? "iOS" === e4.os : /iPhone|iPod/.test(navigator.userAgent);
            }
            function S(e4) {
              return "WebOS" === e4.os;
            }
            function b(e4) {
              return "ChromeOS" === e4.os;
            }
            function w(e4) {
              return "Windows" === e4.os;
            }
            function y(e4) {
              return "macOS" === e4.os;
            }
            function E(e4) {
              return "Tizen" === e4.os;
            }
            var C = { method: "GET", headers: {}, body: "", retryCount: 0, timeout: 0, keepalive: false };
            function T() {
              const e4 = a.trace.getActiveSpan();
              e4 && e4.setAttribute("error", "true");
            }
            function I(e4, t5 = C, i4, n4) {
              var s3;
              const r3 = null !== (s3 = t5.method) && void 0 !== s3 ? s3 : "GET";
              return l(c(), r3, () => {
                var s4 = t5.headers;
                const o2 = a.trace.getActiveSpan();
                if (o2) {
                  var c2 = /* @__PURE__ */ new Map([["component", "rtcutils-core"], ["component.version", "2.0"], ["http.method", r3], ["http.url", e4], ["type", ""], ["http.hostname", ""], ["http.path", ""]]);
                  try {
                    const t6 = new URL(e4);
                    c2.set("type", t6.protocol), c2.set("http.hostname", t6.hostname), c2.set("http.path", t6.pathname);
                  } catch (e5) {
                    d.e("{d988e7f}", "{997fb3a}");
                  }
                  for (const [e5, t6] of c2) o2.setAttribute(e5, t6);
                  o2.setAttributes(s4);
                }
                return function(e5, t6 = C, i5, n5) {
                  var s5, r4;
                  let o3 = void 0 === t6.retryCount ? 1 : t6.retryCount + 1;
                  const c3 = o3, l2 = null !== (s5 = t6.hg) && void 0 !== s5 ? s5 : 500;
                  let u2 = l2;
                  const h2 = null !== (r4 = t6.method) && void 0 !== r4 ? r4 : "GET";
                  let f2 = new Headers();
                  const v2 = null != n5 ? n5 : new AbortController();
                  return ((e6) => {
                    if (e6) switch (e6.type) {
                      case 1:
                        e6.token && f2.set("authorization", "GFNJWT " + e6.token);
                        break;
                      case 2:
                        e6.token && f2.set("authorization", "GFNPartnerJWT auth=" + e6.token);
                    }
                    void 0 !== t6.headers && Object.keys(t6.headers).forEach((e7) => {
                      f2.set(e7, t6.headers[e7]);
                    }), e6 = {}, a.propagation.inject(a.context.active(), e6);
                    for (const [t7, i6] of Object.entries(e6)) f2.set(t7, i6);
                  })(i5), new Promise((i6, n6) => {
                    const s6 = (e6) => {
                      T(), n6(e6);
                    }, r5 = () => {
                      if (navigator.onLine) {
                        let m2, g2 = { method: h2, headers: f2, mode: "cors", keepalive: t6.keepalive, signal: v2.signal, cache: "no-store" };
                        "GET" !== h2 && "HEAD" !== h2 && (g2.body = t6.body);
                        const A2 = [0, DOMException.NETWORK_ERR, DOMException.TIMEOUT_ERR, 503], S2 = t6.timeout ? new p(t6.timeout) : void 0, b2 = [];
                        b2.push(fetch(e5, g2)), S2 && b2.push(S2.promise), Promise.race(b2).then((t7) => {
                          if (null != S2 && S2.o) throw d.w("{d988e7f}", "{5a69b89}", e5), { code: DOMException.TIMEOUT_ERR, message: "Timeout while performing HTTP request" };
                          if (t7 instanceof globalThis.Response) return m2 = t7.status, t7.text();
                        }).then((e6) => {
                          if (!e6 && A2.includes(m2)) {
                            if (1 < o3) throw { code: m2, message: "Internal server error." };
                            d.w("{d988e7f}", "{d639e52}", m2, c3);
                          }
                          var t7 = (e6 = { status: m2, data: null != e6 ? e6 : "", Kc: c3 - o3 }).status;
                          const n7 = a.trace.getActiveSpan();
                          n7 && (n7.setAttribute("error", "false"), n7.setAttribute("http.status_code", t7.toString())), i6(e6);
                        }).catch((e6) => {
                          const i7 = (e7) => [0, DOMException.NETWORK_ERR, DOMException.TIMEOUT_ERR].includes(e7) ? (d.d("{d988e7f}", "{0a9fabe}"), 3237089282) : e7 == DOMException.ABORT_ERR ? (d.d("{d988e7f}", "{235387a}"), 15867905) : (d.w("{d988e7f}", "{f116c88}", e7), 3237089284);
                          e6 instanceof Error ? d.d("{d988e7f}", "{b6e778a}", e6.message) : d.d("{d988e7f}", "{ec768a1}", JSON.stringify(e6), e6), 0 == (e6 = ((e7) => {
                            let t7 = 0;
                            return null != e7 && e7.code ? t7 = null == e7 ? void 0 : e7.code : null != e7 && e7.name && ("AbortError" === e7.name ? t7 = DOMException.ABORT_ERR : "NetworkError" === e7.name ? t7 = DOMException.NETWORK_ERR : "TimeoutError" === e7.name && (t7 = DOMException.TIMEOUT_ERR)), t7;
                          })(e6)) && t6.keepalive && (t6.keepalive = false), A2.includes(e6) ? ((e7) => {
                            if (1 < o3) {
                              o3--, d.d("{d988e7f}", "{97555ed}", e7, o3);
                              const t7 = new p(u2, v2.signal);
                              return t7.promise.then(r5).catch((e8) => {
                                t7.h ? (e8 = { code: 15867905, Kc: c3 - o3 }, T(), n6(e8)) : (d.w("{d988e7f}", "{d3ca39d}", JSON.stringify(e8)), e8 = { code: 3237089284, Kc: c3 - o3 }, T(), n6(e8));
                              }), u2 += l2, true;
                            }
                            return false;
                          })(e6) || (d.w("{d988e7f}", "{dff1a05}", c3, e6), s6({ code: i7(e6), Kc: c3 - o3 })) : s6({ code: i7(e6), Kc: c3 - o3 });
                        }).finally(() => {
                          null == S2 || S2.cancel();
                        });
                      } else s6({ code: 3237089281, description: "No network", Kc: c3 - o3 });
                    };
                    r5();
                  });
                }(e4, t5, i4, n4);
              });
            }
            function R() {
              var e4, t5;
              return null === (t5 = null === (e4 = window.matchMedia) || void 0 === e4 ? void 0 : e4.call(window, "(pointer:coarse)")) || void 0 === t5 ? void 0 : t5.matches;
            }
            function k() {
              var e4, t5;
              return !!window.TouchEvent && (null === (t5 = null === (e4 = window.matchMedia) || void 0 === e4 ? void 0 : e4.call(window, "(any-pointer:coarse)")) || void 0 === t5 ? void 0 : t5.matches);
            }
            function P(e4) {
              return "Tizen" === e4.os || "WebOS" === e4.os;
            }
            function D() {
              let e4 = new Uint8Array(36);
              window.crypto.getRandomValues(e4);
              let t5 = "";
              for (let i4 = 0; 36 > i4; i4++) {
                let n4 = e4[i4] % 16;
                8 == i4 || 13 == i4 || 18 == i4 || 23 == i4 ? t5 += "-" : 14 == i4 ? t5 += "4" : (19 == i4 && (n4 = 3 & n4 | 8), t5 += n4.toString(16));
              }
              return d.i("{d988e7f}", "{534eaf4}", t5), t5;
            }
            function O(e4, t5) {
              for (let i4 = 0; i4 < t5.length && i4 < e4.length; ++i4) {
                const n4 = e4[i4], s3 = t5[i4];
                if (n4 > s3) return true;
                if (n4 < s3) return false;
              }
              if (e4.length < t5.length) {
                for (e4 = e4.length; e4 < t5.length; ++e4) if (0 < t5[e4]) return false;
              }
              return true;
            }
            function M(e4, t5, i4, n4, s3) {
              if ("Chrome" != e4.browser) return false;
              t5 = [t5, null != i4 ? i4 : 0, null != n4 ? n4 : 0, null != s3 ? s3 : 0];
              try {
                return O(e4.browserBestVer.split(".").map((e5) => Number.parseInt(e5)), t5);
              } catch (e5) {
                d.w("{d988e7f}", "{bcd8f94}");
              }
              return true;
            }
            function N(e4, t5, i4, n4) {
              if (!v(e4)) return false;
              try {
                return L(e4.osVer, t5, i4, n4);
              } catch (e5) {
                d.w("{d988e7f}", "{cf4149f}");
              }
              return !t5;
            }
            function L(e4, t5, i4, n4) {
              e4 = e4.replace(/[^0-9.]/, "").split(".").map((e5) => Number.parseInt(e5));
              const s3 = [i4, null != n4 ? n4 : 0];
              return 1 === e4.length && e4.push(0), t5 ? e4.every((e5, t6) => e5 === s3[t6]) : O(e4, s3);
            }
            function x(e4, t5 = 500) {
              const i4 = new AbortController();
              return window.setTimeout(() => {
                i4.abort();
              }, t5), fetch(e4, { method: "OPTIONS", signal: i4.signal }).then((e5) => e5).catch((e5) => {
                throw e5;
              });
            }
            function F(e4, t5, i4) {
              return { code: e4, description: t5, error: null !== i4 ? i4 : void 0 };
            }
            function _(e4) {
              switch (e4) {
                case "ETHERNET":
                  return "ETHERNET";
                case "WIFI":
                case "WIFI_2_4":
                  return "WIFI_2_4";
                case "WIFI_5_0":
                  return "WIFI_5_0";
                case "MOBILE":
                  return "MOBILE";
                case "MOBILE_2G":
                  return "MOBILE_2G";
                case "MOBILE_3G":
                  return "MOBILE_3G";
                case "MOBILE_4G":
                  return "MOBILE_4G";
                case "MOBILE_5G":
                  return "MOBILE_5G";
                case "OTHER":
                case "BLUETOOTH":
                case "WIMAX":
                  return "OTHER";
                default:
                  return "UNKNOWN";
              }
            }
            function U(e4) {
              return e4.replace(/(partnerCustomData" *: *")((\\"|[^"])*)(?=")/g, "$1***");
            }
            var j = class {
              constructor(e4) {
                this.s = /* @__PURE__ */ new Map(), this.sa = e4;
              }
              addListener(e4, t5) {
                var i4 = this.s.get(e4);
                void 0 !== i4 ? i4.add(t5) : ((i4 = /* @__PURE__ */ new Set()).add(t5), this.s.set(e4, i4));
              }
              removeListener(e4, t5) {
                null == (e4 = this.s.get(e4)) || e4.delete(t5);
              }
              removeAllListenersOfEvent(e4) {
                this.s.delete(e4);
              }
              removeAllListeners() {
                this.s.clear();
              }
              hasListener(e4) {
                return void 0 !== (e4 = this.s.get(e4)) && 0 < e4.size;
              }
              emit(e4, ...t5) {
                try {
                  let i4 = this.s.get(e4);
                  if (i4) for (const e5 of i4) this.sa ? e5(...t5) : window.setTimeout(e5, 0, ...t5);
                } catch (e5) {
                  console.log("Exception in emit: " + e5);
                }
              }
            };
            function G(e4, t5) {
              var i4 = q, n4 = $;
              let s3 = [];
              var r3 = e4;
              let o2 = [];
              do {
                o2.push(r3), r3 = Object.getPrototypeOf(r3);
              } while ("" != r3.name);
              o2.reverse();
              for (let e5 of o2) s3.push(e5.toString().replace(/(extends )[^ {]*\.([^ ]*[ {])/, "$1$2"));
              return s3.push(`${i4.toString()}`), t5 ? (s3.push(`${t5.toString()}`), s3.push(`onconnect = (event) => { ${t5.name}(${e4.name}, event, ${i4.name}); };`)) : s3.push(`onmessage = (event) => { ${i4.name}(${e4.name}, event); };`), s3.push(`${n4.toString()}`), s3.push(`onerror = (event) => { ${n4.name}(event); };`), URL.createObjectURL(new Blob(s3, { type: "text/javascript" }));
            }
            function B(e4, t5, i4) {
              if (!e4.prototype.nb) throw Error("Invalid Worker class provided");
              e4 = G(e4);
              const n4 = new Worker(e4);
              URL.revokeObjectURL(e4), z(n4, t5, i4);
            }
            function V(e4, t5, i4) {
              var n4 = window;
              if (void 0 === n4.SharedWorker) throw Error("SharedWorker not supported");
              if (!e4.prototype.nb) throw Error("Invalid Worker class provided");
              return e4 = G(e4, K), n4 = new n4.SharedWorker(e4), URL.revokeObjectURL(e4), z(n4, t5, i4), n4;
            }
            const H = /* @__PURE__ */ new Map();
            function W(e4) {
              if (!H.has(e4)) {
                e4.postMessage.bind(e4)({ Rb: 2, data: null });
                var t5 = window.setTimeout(() => {
                  const t6 = H.get(e4);
                  t6 && (clearTimeout(t6), H.delete(e4)), e4 instanceof Worker ? e4.terminate() : e4 instanceof MessagePort && e4.close();
                }, 150);
                H.set(e4, t5);
              }
            }
            function z(e4, t5, i4) {
              const n4 = "port" in e4 ? e4.port : e4, s3 = n4.postMessage.bind(n4);
              let r3 = false;
              const o2 = (e5) => {
                r3 || (r3 = true, d.e("{10ca8e2}", "{03baf25}", e5, typeof e5), W(n4), i4(e5));
              };
              n4.onmessage = (e5) => {
                let i5 = (e5 = e5.data).data;
                switch (e5.Rb) {
                  case 1:
                    s3({ Rb: 3, data: null });
                    break;
                  case 4:
                    t5(i5), W(n4);
                    break;
                  case 5:
                    o2(i5);
                }
              }, "onmessageerror" in n4 && (n4.onmessageerror = o2), e4.onerror = o2, s3({ Rb: 0, data: null });
            }
            function K(e4, t5, i4) {
              const n4 = globalThis;
              n4.port = t5.ports[0], n4.port.onmessage = i4.bind(self, e4);
            }
            function q(e4, t5) {
              var i4;
              const n4 = globalThis;
              n4.Od = null !== (i4 = n4.Od) && void 0 !== i4 ? i4 : {}, t5 = (i4 = t5.data).Rb, i4 = i4.data;
              let s3 = "port" in n4 ? n4.port : self;
              switch (t5) {
                case 0:
                  var r3 = new e4();
                  n4.Od[e4.name] = r3, s3.postMessage({ Rb: 1, data: null });
                  break;
                case 2:
                  null === (r3 = null === self || void 0 === self ? void 0 : self.close) || void 0 === r3 || r3.call(self);
                  break;
                case 3:
                  Promise.resolve(n4.Od[e4.name].nb()).then((e5) => {
                    s3.postMessage({ Rb: 4, data: e5 });
                  });
                  break;
                default:
                  throw Error(`Unknown message: ${t5}:${i4}`);
              }
            }
            function $(e4) {
              const t5 = globalThis;
              ("port" in t5 ? t5.port : self).postMessage({ Rb: 5, data: e4 });
            }
            function J(e4) {
              return e4.start = performance.now(), new Promise((t5) => {
                e4.Kf ? t5(e4.u) : async function(e5) {
                  var t6 = Promise, i4 = t6.all, n4 = function(e6) {
                    return new Promise((t7) => {
                      let i5 = false;
                      const n5 = (n6) => {
                        if (e6.ka) clearTimeout(e6.ka), e6.ka = 0;
                        else if (i5) return d.w("{3c72abb}", "{c1bb269}"), void Z(e6, "GL", e6.De - performance.now());
                        if (!e6.rc) {
                          var s5 = n6.Qf;
                          if (s5.startsWith("ANGLE")) {
                            var r5 = s5.split(",");
                            1 < (null == r5 ? void 0 : r5.length) && (e6.gpuDetail = r5[1].trim());
                          } else e6.gpuDetail = s5;
                          r5 = s5.toLowerCase(), s5.includes("SraKmd") ? (e6.I = true, s5.includes("SraKmd_arden") && (e6.Da = true), (s5 = /D3D11-(\d{2,}\.\d{1,}\.\d{5,}\.\d{4,})/.exec(s5)) && 1 < s5.length && (e6.v = s5[1])) : s5.includes("AMD") && r5.includes("vangogh") && (e6.Bb = true), e6.Fe = n6.Gf, e6.rc = true;
                        }
                        t7();
                      };
                      let s4 = false, r4 = false;
                      const o3 = (t8) => {
                        "string" == typeof t8 ? ee(e6, "GL", t8) : "data" in t8 ? te(e6, "GL", t8) : ie(e6, "GL", t8), r4 = true, d.e("{3c72abb}", "{9e45306}", t8);
                      };
                      let a3 = 0;
                      try {
                        self.OffscreenCanvas && (s4 = true, B(Ae, n5, o3), a3 = 150);
                      } catch (t8) {
                        r4 = true, ne(e6, "GL", t8), d.w("{3c72abb}", "{caf8cd7}", t8);
                      }
                      window.setTimeout(() => {
                        e6.rc || (e6.ka = window.setTimeout(() => {
                          e6.ka = 0, e6.De = performance.now(), r4 ? d.w("{3c72abb}", "{fbe663c}") : s4 ? (d.w("{3c72abb}", "{2577061}"), se(e6, "GL")) : (d.i("{3c72abb}", "{95c252e}"), re(e6, "GL"));
                          const t8 = new Ae().nb();
                          n5(t8), i5 = true;
                        }, a3));
                      }, 0);
                    });
                  }(e5), s3 = function(e6) {
                    return new Promise((t7) => {
                      if (navigator.userAgentData) {
                        var i5 = (i6) => {
                          i6 && (e6.sa && (clearTimeout(e6.sa), e6.sa = 0), ((t8) => {
                            var i7;
                            if (!e6.Rf) {
                              var n6 = t8.model, s5 = t8.platform, r5 = t8.platformVersion, o4 = t8.uaFullVersion, a3 = t8.bitness;
                              "" == n6 && "" == s5 && "" == r5 && "" == o4 ? e6.lb && e6.R || e6.Ka || null == a3 || e6.R && !e6.$ || (e6.o = true) : "" == a3 && "Android" != s5 && (e6.o = true), n6 && ("Xbox" === n6 ? e6.ca = true : n6.startsWith("AFT") ? (e6.ef = true, e6.N = true) : n6.includes("BRAVIA") ? (e6.N = true, e6.Ye = true) : "Chromecast" === n6 ? (e6.N = true, e6.cf = true, e6.deviceName = "CHROMECAST") : "SHIELD Android TV" === n6 ? (e6.N = true, e6.mf = true, e6.deviceName = "SHIELDTV") : n6.startsWith("MiTV") ? (e6.N = true, e6.hf = true, e6.deviceName = "MITV") : n6.startsWith("TVision") && (e6.N = true, e6.uf = true, e6.deviceName = "TVISION")), "Windows" === s5 ? e6.P = true : "macOS" === s5 ? e6.L = true : "Chrome OS" === s5 || "ChromeOS" === s5 ? e6.O = true : "Chromium OS" === s5 ? e6.ea = true : "Android" === s5 ? e6.da = true : "Linux" === s5 && ("" == r5 ? (e6.da = true, e6.vf = true) : e6.na = true), n6 = (e7) => {
                                if (e7 && "string" == typeof e7) return e7.replace(/[-._,:;|#@]/g, ".");
                              }, s5 = (t9) => e6.P && !e6.ca ? ((t10) => {
                                if (!t10 || !e6.qa || 95 > +e6.qa) return t10;
                                switch (t10.split(".").map((e7) => Number.parseInt(e7))[0]) {
                                  case 0:
                                    return "8-";
                                  case 1:
                                    return "10.0.10240";
                                  case 2:
                                    return "10.0.10586";
                                  case 3:
                                    return "10.0.14393";
                                  case 4:
                                    return "10.0.15063";
                                  case 5:
                                    return "10.0.16299";
                                  case 6:
                                    return "10.0.17134";
                                  case 7:
                                    return "10.0.17763";
                                  case 8:
                                    return "10.0.18362+";
                                  case 9:
                                    return "10.0.9";
                                  case 10:
                                    return "10.0.19041+";
                                  case 11:
                                    return "10.0.11";
                                  case 12:
                                    return "10.0.12";
                                  case 13:
                                    return "11.0.0";
                                  case 14:
                                    return "11.0.22000.0";
                                  case 15:
                                    return "11.0.22621.0";
                                  default:
                                    return "11.0.22621.0+";
                                }
                              })(t9) : t9, t8.brands && 0 < t8.brands.length && function(e7, t9) {
                                var i8;
                                e7.ra = true, t9.mobile && (e7.Cb = true);
                                var n7 = t9.brands || [];
                                t9 = 0;
                                for (const s6 of n7) {
                                  n7 = s6.brand;
                                  const r6 = s6.version;
                                  "Google Chrome" === n7 ? (e7.ta = true, e7.m = r6) : "Microsoft Edge" === n7 ? (e7.$a = true, e7.m = r6) : "Opera" === n7 ? (e7.ua = true, e7.m = r6) : "Yandex" === n7 ? (e7.ab = true, e7.m = r6) : "Chromium" === n7 ? (e7.Z = true, e7.m = null !== (i8 = e7.m) && void 0 !== i8 ? i8 : r6, e7.qa = r6) : "Android WebView" === n7 ? (e7.Je = true, e7.m = r6) : t9++;
                                }
                                2 < t9 && (e7.He = true);
                              }(e6, t8), e6.browserFullVer = n6(o4), e6.sg = r5, e6.v = null !== (i7 = e6.v) && void 0 !== i7 ? i7 : s5(n6(r5)), e6.Rf = true;
                            }
                          })(i6), t7());
                        }, n5 = false, s4 = false, r4 = 0;
                        try {
                          if (self.SharedWorker) {
                            n5 = true;
                            var o3 = V(Se, i5, (t8) => {
                              "string" == typeof t8 ? ee(e6, "HE", t8) : "data" in t8 ? te(e6, "HE", t8) : ie(e6, "HE", t8), s4 = true, d.e("{3c72abb}", "{217e106}", t8);
                            });
                            r4 = 300;
                          }
                        } catch (t8) {
                          s4 = true, d.w("{3c72abb}", "{a583546}", t8), ne(e6, "HE", t8);
                        }
                        e6.sa = window.setTimeout(() => {
                          o3 && W("port" in o3 ? o3.port : o3), s4 ? d.w("{3c72abb}", "{dbf4b42}") : n5 ? (d.w("{3c72abb}", "{0bf7a38}"), se(e6, "HE"), e6.Ze = true) : (d.i("{3c72abb}", "{7a82b59}"), re(e6, "HE")), new Se().nb().then((e7) => {
                            i5(e7);
                          });
                        }, r4);
                      } else t7();
                    });
                  }(e5), r3 = async function(e6) {
                    e6.uc = !!window.chrome && await async function() {
                      if (!window.createImageBitmap) return false;
                      const e7 = await fetch("data:image/avif;base64,AAAAGGZ0eXBhdmlmAAAAAGF2aWZtaWYxAAADm21ldGEAAAAAAAAAIWhkbHIAAAAAAAAAAHBpY3QAAAAAAAAAAAAAAAAAAAAADnBpdG0AAAAAAAEAAAAiaWxvYwAAAABEQAABAAEAAAAAA7sAAQAAAAAAAAAjAAAAI2lpbmYAAAAAAAEAAAAVaW5mZQIAAAAAAQAAYXYwMQAAAAMbaXBycAAAAvxpcGNvAAACrGNvbHJwcm9mAAACoGxjbXMEMAAAbW50clJHQiBYWVogB+UACAAJAAsAEAAFYWNzcE1TRlQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPbWAAEAAAAA0y1sY21zAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANZGVzYwAAASAAAABAY3BydAAAAWAAAAA2d3RwdAAAAZgAAAAUY2hhZAAAAawAAAAsclhZWgAAAdgAAAAUYlhZWgAAAewAAAAUZ1hZWgAAAgAAAAAUclRSQwAAAhQAAAAgZ1RSQwAAAhQAAAAgYlRSQwAAAhQAAAAgY2hybQAAAjQAAAAkZG1uZAAAAlgAAAAkZG1kZAAAAnwAAAAkbWx1YwAAAAAAAAABAAAADGVuVVMAAAAkAAAAHABHAEkATQBQACAAYgB1AGkAbAB0AC0AaQBuACAAcwBSAEcAQm1sdWMAAAAAAAAAAQAAAAxlblVTAAAAGgAAABwAUAB1AGIAbABpAGMAIABEAG8AbQBhAGkAbgAAWFlaIAAAAAAAAPbWAAEAAAAA0y1zZjMyAAAAAAABDEIAAAXe///zJQAAB5MAAP2Q///7of///aIAAAPcAADAblhZWiAAAAAAAABvoAAAOPUAAAOQWFlaIAAAAAAAACSfAAAPhAAAtsRYWVogAAAAAAAAYpcAALeHAAAY2XBhcmEAAAAAAAMAAAACZmYAAPKnAAANWQAAE9AAAApbY2hybQAAAAAAAwAAAACj1wAAVHwAAEzNAACZmgAAJmcAAA9cbWx1YwAAAAAAAAABAAAADGVuVVMAAAAIAAAAHABHAEkATQBQbWx1YwAAAAAAAAABAAAADGVuVVMAAAAIAAAAHABzAFIARwBCAAAADGF2MUOBDQwAAAAAFGlzcGUAAAAAAAAAEAAAABAAAAAoY2xhcAAAAAEAAAABAAAAAQAAAAH////xAAAAAv////EAAAACAAAAF2lwbWEAAAAAAAAAAQABBIGCA4QAAAArbWRhdBIACgkfzP/IIEBA0oAyFGW+OwPr0bIHHHHBATZPtaQ3RWTA").then((e8) => e8.blob());
                      return createImageBitmap(e7).then(() => true, () => false);
                    }();
                  }(e5), o2 = function(e6) {
                    const t7 = window.speechSynthesis;
                    if (t7) {
                      const i5 = t7.getVoices;
                      let n5 = (null == i5 ? void 0 : i5.call(t7)) || [];
                      return new Promise((s4) => {
                        if (!i5 || n5.length) X(e6, n5), s4();
                        else {
                          let r4 = 0;
                          const o3 = () => {
                            n5 = i5.call(t7);
                            const a3 = performance.now();
                            0 == n5.length && (0 == r4 || 600 > a3 - r4) ? (e6.T && clearTimeout(e6.T), e6.T = window.setTimeout(o3, 150)) : (e6.T && (clearTimeout(e6.T), e6.T = 0), X(e6, n5), s4());
                          };
                          void 0 !== t7.onvoiceschanged && (t7.onvoiceschanged = o3), window.setTimeout(() => {
                            n5 = i5.call(t7), n5.length ? o3() : (e6.T = window.setTimeout(o3, 150), r4 = performance.now());
                          }, 0);
                        }
                      });
                    }
                    return new Promise((e7) => {
                      e7();
                    });
                  }(e5), a2 = function(e6) {
                    return new Promise((t7) => {
                      var i5 = navigator.userAgent;
                      i5 && (i5 = i5.match(e6.ze)) && (e6.rg = null == i5 ? void 0 : i5[1], e6.mg = null == i5 ? void 0 : i5[2]), t7();
                    });
                  }(e5), c2 = function(e6) {
                    var t7, i5, n5, s4, r4, o3, a3, d2, c3, l3, u3, h3, p3, f2;
                    const v2 = window, m2 = v2.hasOwnProperty, g2 = v2.navigator;
                    m2.call(v2, "MSMediaKeys") ? e6.Le = true : m2.call(v2, "_firefoxTV_cachedScrollPosition") ? e6.Ne = true : void 0 !== v2.__edgeActiveElement || v2.__edgeTrackingPreventionStatistics ? e6.bb = true : v2.safari ? e6.Ve = true : v2.opr ? e6.Pe = true : v2.oprt ? e6.ge = true : g2.brave ? e6.va = true : void 0 !== v2.OperaTouch || v2.ethereum ? (e6.lb = true, e6.R = true) : v2.yandex ? e6.ya = true : v2.QuickAccess ? e6.xa = true : v2.chrome ? e6.$ = true : v2.netscape ? e6.wa = true : v2.__firefox__ ? e6.cb = true : v2.__gCrWeb ? e6.Va = true : v2.ReactNativeWebView && (e6.Re = true), void 0 !== v2.contacts || void 0 !== v2.ContactsManager ? e6.R = true : m2.call(v2, "onwebOSAccessibilityAlertDone") || v2.webOSSystem || m2.call(v2, "onwebosaccessibilityalertdone") ? e6.Af = true : v2.tizen || v2.TizenTVApiInfo || v2.addEdgeEffectONSCROLLTizenUIF || v2.tizentvwasm ? e6.Ka = true : v2.HardkeyEvent && (e6.xf = true);
                    const A2 = v2.Intl;
                    null !== (t7 = g2.mediaCapabilities) && void 0 !== t7 && t7.decodingInfo && (e6.pe = true), v2.BigInt && (e6.fg = true, v2.BigInt64Array && (e6.ie = true)), v2.PerformanceNavigationTiming && (e6.Ae = true), v2.WebAssembly && v2.WebAssembly.Exception && (e6.Me = true), v2.BroadcastChannel && (e6.je = true), v2.GPUBuffer && (e6.te = true), v2.SharedWorker && (e6.Ge = true), v2.MediaRecorder && (e6.xe = true), v2.CSSCounterStyleRule && (e6.ke = true), null != (t7 = null === (i5 = v2.ArrayBuffer) || void 0 === i5 ? void 0 : i5.prototype) && t7.hasOwnProperty("transfer") && (e6.cg = true), m2.call(v2, "ondevicelight") && (e6.qe = true), null !== (n5 = v2.AbortSignal) && void 0 !== n5 && n5.abort && (e6.bg = true), m2.call(v2, "onbeforeinput") && (e6.eg = true), A2 && (A2.DisplayNames && (e6.Pa = true), e6.ue = "pinyin" == (null === (s4 = new A2.Collator("zh", { collation: "pinyin" }).resolvedOptions()) || void 0 === s4 ? void 0 : s4.collation)), v2.Credential && (e6.oe = true), v2.LargestContentfulPaint && (e6.we = true), null !== (r4 = v2.CSS) && void 0 !== r4 && r4.registerProperty && (e6.me = true), null != (i5 = null === (o3 = v2.HTMLElement) || void 0 === o3 ? void 0 : o3.prototype) && i5.hasOwnProperty("autofocus") && (e6.se = true), g2.contacts && (e6.ne = true), v2.TrustedHTML && (e6.Ie = true), v2.WakeLock && (e6.Ke = true), null !== (a3 = v2.Promise) && void 0 !== a3 && a3.any && (e6.Ce = true), v2.FileSystemHandle && (e6.re = true), null !== (d2 = v2.Atomics) && void 0 !== d2 && d2.waitAsync && (e6.dg = true), null !== (l3 = null === (c3 = v2.CSS) || void 0 === c3 ? void 0 : c3.supports) && void 0 !== l3 && l3.call(c3, "aspect-ratio: auto") && (e6.le = true), v2.ReadableStreamBYOBReader && (e6.Ee = true), null !== (h3 = null === (u3 = v2.CSS) || void 0 === u3 ? void 0 : u3.supports) && void 0 !== h3 && h3.call(u3, "overflow: clip") && (e6.ye = true), null != (o3 = null === (p3 = v2.InputEvent) || void 0 === p3 ? void 0 : p3.prototype) && o3.hasOwnProperty("isComposing") && (e6.ve = true), p3 = null === (f2 = v2.HTMLVideoElement) || void 0 === f2 ? void 0 : f2.prototype, e6.Oe = null == p3 ? void 0 : p3.hasOwnProperty("webkitSupportsPresentationMode");
                  }(e5), l2 = function(e6) {
                    var t7, i5, n5, s4;
                    const r4 = window.RequestCrowNativeApi;
                    if (r4) {
                      let o3 = 0;
                      const a3 = new Promise((e7, t8) => {
                        o3 = window.setTimeout(() => {
                          t8("timeout");
                        }, 100);
                      }), c3 = window.zoneless, l3 = null !== (i5 = null === (t7 = null == c3 ? void 0 : c3.windowAddEventListener) || void 0 === t7 ? void 0 : t7.bind(window)) && void 0 !== i5 ? i5 : window.addEventListener.bind(window), u3 = null !== (s4 = null === (n5 = null == c3 ? void 0 : c3.windowRemoveEventListener) || void 0 === n5 ? void 0 : n5.bind(window)) && void 0 !== s4 ? s4 : window.removeEventListener.bind(window);
                      let h3;
                      return t7 = new Promise((e7) => {
                        h3 = (t8) => {
                          e7(t8.detail);
                        }, l3("CrowNativeApiEvent", h3), r4(JSON.stringify({ Wg: "RequestBrowserVersion" }));
                      }).then((t8) => {
                        var i6;
                        (t8 = null === (i6 = t8.browserVersion) || void 0 === i6 ? void 0 : i6.match(e6.ze)) && (e6.browserFullVer = null == t8 ? void 0 : t8[1], e6.m = null == t8 ? void 0 : t8[2]);
                      }), Promise.race([t7, a3]).catch(() => {
                        d.d("{3c72abb}", "{841bf6f}");
                      }).finally(() => {
                        window.clearTimeout(o3), u3("CrowNativeApiEvent", h3);
                      });
                    }
                    return Promise.resolve();
                  }(e5), u2 = function(e6) {
                    return new Promise((t7) => {
                      let i5 = false;
                      const n5 = (n6) => {
                        if (e6.pa) clearTimeout(e6.pa), e6.pa = 0;
                        else if (i5) return d.w("{3c72abb}", "{b02109c}"), void Z(e6, "Plat", e6.ag - performance.now());
                        e6.sc || ("MacIntel" === (n6 = n6.platform) ? e6.ga = true : "iPhone" === n6 ? e6.Na = true : "Win32" === n6 ? e6.ja = true : "iPad" === n6 ? e6.Nb = true : "FreeBSD amd64" === n6 ? e6.oa = true : "Windows" === n6 && (e6.ja = true, e6.aa = true), n6.startsWith("Linux") && (e6.S = true), e6.sc = true), t7();
                      };
                      let s4 = false, r4 = false;
                      const o3 = (t8) => {
                        "string" == typeof t8 ? ee(e6, "Plat", t8) : "data" in t8 ? te(e6, "Plat", t8) : ie(e6, "Plat", t8), r4 = true, d.e("{3c72abb}", "{6350135}", t8);
                      };
                      let a3 = 0;
                      try {
                        s4 = true, B(we, n5, o3), a3 = 150;
                      } catch (t8) {
                        r4 = true, ne(e6, "Plat", t8), d.w("{3c72abb}", "{79668e5}", t8);
                      }
                      window.setTimeout(() => {
                        e6.sc || (e6.pa = window.setTimeout(() => {
                          e6.pa = 0, e6.ag = performance.now(), r4 ? d.w("{3c72abb}", "{d9e1e01}") : s4 ? (d.w("{3c72abb}", "{a8d68cb}"), se(e6, "Plat")) : (d.i("{3c72abb}", "{53e2225}"), re(e6, "Plat"));
                          const t8 = new we().nb();
                          n5(t8), i5 = true;
                        }, a3));
                      }, 0);
                    });
                  }(e5), h2 = function(e6) {
                    const t7 = window;
                    t7.ApplePaySession && t7.ApplePaySession.canMakePayments && (e6.tc = true);
                  }(e5), p2 = function(e6) {
                    var t7 = navigator.plugins;
                    for (const i5 of t7) "Native Client" !== (t7 = i5.name) && (t7.startsWith("Microsoft Edge PDF") ? e6.If = true : t7.startsWith("Chrome PDF") ? e6.Bf = true : t7.startsWith("Chromium PDF") ? e6.Ef = true : t7.startsWith("PPAPI SAMSUNGHEALTH") && (e6.Ka = true));
                  }(e5);
                  navigator.maxTouchPoints && 0 < navigator.maxTouchPoints && (e5.fa = true), await i4.call(t6, [n4, s3, r3, o2, a2, c2, l2, u2, h2, p2, void 0, Q(e5), Y(e5)]).then(() => {
                    var t7, i5, n5, s4, r4, o3, a3, c3, l3, u3, h3, p3, f2, v2, m2, g2, A2, S2, b2, w2;
                    if (e5.ra && (e5.ga == e5.L && e5.ja == e5.P || (e5.o = true), (e5.O || e5.ea || e5.da || e5.na) && !e5.S && (e5.o = true), e5.m && e5.browserFullVer && !oe(e5.m, e5.browserFullVer) && (e5.ua ? e5.qa && !oe(e5.qa, e5.browserFullVer) && (e5.o = true) : e5.o = true), (e5.O && !e5.ta || e5.ea && !e5.Z) && (e5.o = true), e5.Sa ? (e5.U && !e5.P || e5.F && !e5.L) && (e5.o = true) : e5.Ta ? e5.O || (e5.o = true) : e5.Ua ? e5.o = true : e5.U || !e5.F || e5.L || (e5.o = true), e5.s = e5.ra && !e5.o, e5.W = e5.ra && e5.o), !e5.Fe && e5.$) e5.g = "Unknown", e5.h = "Unknown", e5.aa = true, e5.l = 3, e5.v = "0", e5.m = "0", e5.browserFullVer = "0", d.d("{3c72abb}", "{049d298}");
                    else if (e5.Ta) e5.g = "ChromeOS", ae(e5);
                    else if (e5.Sa) ae(e5), e5.U ? e5.g = "Windows" : e5.F ? (e5.g = "macOS", e5.j = "APPLE") : e5.s ? e5.P ? e5.g = "Windows" : e5.L ? (e5.g = "macOS", e5.j = "APPLE") : e5.O || e5.ea ? (e5.g = "ChromeOS", e5.aa = true, e5.l = 7) : e5.na && (e5.g = de(e5)) : e5.ja ? e5.g = "Windows" : e5.ga ? (e5.g = "macOS", e5.j = "APPLE") : e5.S ? e5.g = de(e5) : e5.oa ? e5.g = "FreeBSD" : (e5.g = "Unknown", e5.l = 5, d.d("{3c72abb}", "{101497c}"));
                    else if (e5.Ua) ce(e5), e5.U ? e5.g = "Windows" : e5.F ? (e5.g = "macOS", e5.j = "APPLE") : e5.Se ? (e5.g = "Android", le(e5)) : e5.S ? e5.g = de(e5) : e5.oa ? e5.g = "FreeBSD" : (e5.g = "Unknown", e5.l = 5, d.d("{3c72abb}", "{49fcccb}"));
                    else if (e5.he) e5.h = "Edge", e5.vc ? e5.s && e5.ca || e5.I ? (e5.g = "Xbox", e5.j = "MICROSOFT", e5.Da ? e5.M = "XBOXSERIES" : e5.I && (e5.M = "XBOXONE")) : e5.g = "Windows" : e5.F ? (e5.g = "macOS", e5.j = "APPLE") : e5.Qa ? (e5.g = "Android", le(e5)) : e5.s ? e5.ca ? (e5.g = "Xbox", e5.j = "MICROSOFT", e5.Da ? e5.M = "XBOXSERIES" : e5.I && (e5.M = "XBOXONE")) : e5.P ? e5.g = "Windows" : e5.L ? (e5.g = "macOS", e5.j = "APPLE") : e5.O || e5.ea ? (e5.g = "ChromeOS", e5.aa = true, e5.l = 7) : e5.da ? (e5.g = "Android", le(e5)) : e5.na && (e5.g = de(e5)) : e5.ja ? e5.g = "Windows" : e5.ga ? (e5.g = "macOS", e5.j = "APPLE") : e5.R ? (e5.g = "Android", le(e5)) : e5.S ? e5.g = de(e5) : e5.oa ? e5.g = "FreeBSD" : (e5.g = "Unknown", e5.l = 5);
                    else if (e5.U) e5.vc ? ue(e5) : (ue(e5), e5.aa = true, e5.l = 5);
                    else if (e5.F) he(e5);
                    else if (e5.Qa) pe(e5);
                    else if (e5.s && (e5.ca || e5.P) || e5.ja || e5.I) ue(e5);
                    else if (e5.s && e5.L || e5.Nb || e5.Na || e5.ga) he(e5);
                    else if (e5.s && (e5.O || e5.ea)) e5.g = "ChromeOS", ae(e5);
                    else if (e5.xf) e5.g = "ccOS", e5.j = "HKMC", e5.h = "Chromium";
                    else if (e5.s && e5.da || e5.R) pe(e5);
                    else if (e5.s && e5.na) e5.g = de(e5), e5.Cb || e5.fa ? (e5.h = "Unknown", e5.l = 3) : fe(e5) || (e5.h = "Unknown", e5.l = 5, d.d("{3c72abb}", "{54c6569}"));
                    else if (e5.Af) e5.g = "WebOS", e5.j = "LG", e5.h = "Chromium", e5.browserFullVer = null !== (S2 = e5.browserFullVer) && void 0 !== S2 ? S2 : e5.rg, e5.m = null !== (b2 = e5.m) && void 0 !== b2 ? b2 : e5.mg, e5.W = false;
                    else if (e5.Ka) {
                      if (e5.g = "Tizen", e5.h = "Samsung", null !== (w2 = window.webapis) && void 0 !== w2 && w2.productinfo) try {
                        e5.v = window.webapis.productinfo.getFirmware(), e5.deviceName = window.webapis.productinfo.getRealModel(), e5.Za = window.webapis.productinfo.getLicensedVendor();
                      } catch (e6) {
                        d.e("{3c72abb}", "{bc7dd9b}");
                      }
                      else d.e("{3c72abb}", "{844af47}"), e5.v = "0", e5.deviceName = "";
                      e5.j = "Samsung" !== e5.Za && e5.Za ? "TIZENLICENSED" : "SAMSUNG", S2 = /(([0-9]+\.)*[0-9]+)\/(([0-9]+\.)*[0-9]+)/, (b2 = navigator.userAgent) && (S2 = b2.match(S2), e5.browserFullVer = null == S2 ? void 0 : S2[0], (S2 = null == S2 ? void 0 : S2[1]) && (S2 = S2.split("."), e5.m = null == S2 ? void 0 : S2[0]));
                    } else e5.S ? e5.Ne ? (e5.g = "Android", e5.j = "AMAZON", ce(e5), e5.H = "TV") : e5.xa ? (e5.g = "Android", e5.j = "SAMSUNG", e5.h = "Samsung", le(e5)) : fe(e5) ? e5.W ? e5.g = de(e5) : !e5.Ef || e5.Bf || e5.If ? e5.S && (e5.g = "Linux") : (e5.g = de(e5), e5.h = "Chromium", e5.l = 7) : (e5.g = "Unknown", e5.h = "Unknown", e5.l = 0, d.d("{3c72abb}", "{be86380}")) : e5.oa ? (e5.g = "FreeBSD", e5.$ ? e5.h = "Chrome" : e5.wa ? ce(e5) : (e5.h = "Unknown", e5.l = 3, d.d("{3c72abb}", "{a2c16e4}"))) : e5.Va || e5.cb || e5.bb ? (e5.Na = true, he(e5), e5.l = 7) : e5.xa ? (pe(e5), e5.l = 7) : (e5.g = "Unknown", e5.h = "Unknown", e5.l = 0, d.d("{3c72abb}", "{f2eecc9}"));
                    switch (e5.W && (e5.v = "0", e5.m = "0", e5.browserFullVer = "0"), e5.Qc = performance.now(), e5.u.os = null !== (t7 = e5.g) && void 0 !== t7 ? t7 : "Unknown", e5.u.browser = null !== (i5 = e5.h) && void 0 !== i5 ? i5 : "Unknown", e5.u.osRawVer = null !== (n5 = e5.sg) && void 0 !== n5 ? n5 : "0", e5.u.osVer = null !== (s4 = e5.v) && void 0 !== s4 ? s4 : "0", e5.u.browserVer = null !== (r4 = e5.m) && void 0 !== r4 ? r4 : "0", t7 = null !== (o3 = e5.browserFullVer) && void 0 !== o3 ? o3 : void 0, e5.u.browserFullVer = null != t7 ? t7 : "0", e5.u.browserBestVer = null !== (a3 = null != t7 ? t7 : e5.u.browserVer) && void 0 !== a3 ? a3 : "0", e5.u.confidence = null !== (p3 = null !== (h3 = null !== (u3 = null !== (l3 = null !== (c3 = e5.l) && void 0 !== c3 ? c3 : "Unknown" === e5.g ? 0 : void 0) && void 0 !== l3 ? l3 : "Unknown" === e5.h ? 5 : void 0) && void 0 !== u3 ? u3 : e5.Ze ? 6 : void 0) && void 0 !== h3 ? h3 : e5.W ? 8 : void 0) && void 0 !== p3 ? p3 : 10, e5.u.forging = null !== (f2 = e5.aa) && void 0 !== f2 && f2, e5.u.spoofing = null !== (v2 = e5.W) && void 0 !== v2 && v2, e5.u.vendor = null !== (m2 = e5.j) && void 0 !== m2 ? m2 : "", e5.u.vendorFull = null !== (g2 = e5.Za) && void 0 !== g2 ? g2 : e5.u.vendor, o3 = void 0, e5.u.os) {
                      case "ChromeOS":
                        o3 = "CHROMEOS";
                        break;
                      case "Windows":
                        o3 = "WINDOWS";
                        break;
                      case "macOS":
                        o3 = "MACOS";
                        break;
                      case "Linux":
                        o3 = "LINUX";
                        break;
                      case "iOS":
                        o3 = "IOS";
                        break;
                      case "iPadOS":
                        o3 = "IPADOS";
                        break;
                      case "Tizen":
                        o3 = "TIZEN";
                        break;
                      case "WebOS":
                        o3 = "WEBOS";
                        break;
                      case "Android":
                        o3 = "ANDROID";
                        break;
                      case "Xbox":
                        o3 = "XBOX";
                        break;
                      case "SteamOS":
                        o3 = "STEAMOS";
                        break;
                      case "ccOS":
                        o3 = "CCOS";
                    }
                    e5.u.deviceOS = o3, "iPadOS" !== e5.u.os || e5.Oe ? e5.Bb ? e5.u.deviceModel = "STEAMDECK" : e5.M && (e5.u.deviceModel = e5.M) : e5.u.deviceModel = "VISIONPRO", e5.u.deviceType = null !== (A2 = e5.H) && void 0 !== A2 ? A2 : function(e6, t8) {
                      if ("STEAMDECK" === t8) return "CONSOLE";
                      switch (e6) {
                        case "iOS":
                          return "PHONE";
                        case "iPadOS":
                          return "TABLET";
                        case "Xbox":
                          return "CONSOLE";
                        case "WebOS":
                        case "Tizen":
                          return "TV";
                        default:
                          return "DESKTOP";
                      }
                    }(e5.u.os, e5.u.deviceModel), e5.u.totalTime = e5.Qc - e5.start, e5.u.gpuDetail = e5.gpuDetail;
                  });
                }(e4).then(() => {
                  e4.Kf = true, t5(e4.u);
                });
              });
            }
            function X(e4, t5) {
              if (!e4.$f) {
                for (const i4 of t5) (t5 = i4.voiceURI || "").startsWith("Chrome OS") ? e4.Ta = true : t5.startsWith("Google") ? e4.Sa = true : t5.includes("moz-tts") ? (t5.includes("android") && (e4.Se = true, e4.R = true), e4.Ua = true) : "English United States" == t5 && (e4.Qa = true), t5.includes("Microsoft") ? (e4.U = true, t5.includes("Online") ? e4.he = true : e4.vc = true) : t5.includes("com.apple") ? (e4.F = true, t5.includes("Ellen") && (e4.Qe = true)) : "Zuzana" == t5 && (e4.F = true);
                e4.We = e4.F || e4.U || e4.Sa || e4.Ta || e4.Ua || e4.Qa, e4.$f = true;
              }
            }
            function Q(e4) {
              const t5 = window;
              e4.pc = t5.matchMedia("(hover: hover)").matches, e4.qc = t5.matchMedia("(hover: none)").matches, e4.nc = t5.matchMedia("(pointer: coarse)").matches, e4.oc = t5.matchMedia("(pointer: fine)").matches;
            }
            function Y(e4) {
              return new Promise((t5) => {
                const i4 = (i5) => {
                  e4.Oa && (clearTimeout(e4.Oa), e4.Oa = 0), i5.Id && (e4.wf = i5.Id, e4.kg = i5.sd, e4.jg = i5.Nd), t5();
                };
                let n4 = false, s3 = false;
                const r3 = (t6) => {
                  "string" == typeof t6 ? ee(e4, "TV", t6) : "data" in t6 ? te(e4, "TV", t6) : ie(e4, "TV", t6), s3 = true, d.e("{3c72abb}", "{f49e1b4}", t6);
                };
                let o2, a2 = 0;
                try {
                  self.SharedWorker && (n4 = true, o2 = V(be, i4, r3), a2 = 150);
                } catch (t6) {
                  s3 = true, d.w("{3c72abb}", "{2066dd6}", t6), ne(e4, "TV", t6);
                }
                e4.Oa = window.setTimeout(() => {
                  o2 && W("port" in o2 ? o2.port : o2), s3 ? d.w("{3c72abb}", "{cdb3848}") : n4 ? (d.w("{3c72abb}", "{f01188c}"), se(e4, "TV")) : (d.i("{3c72abb}", "{db9e3f4}"), re(e4, "TV")), new be().nb().then((e5) => {
                    i4(e5);
                  });
                }, a2);
              });
            }
            function Z(e4, t5, i4) {
              e4.G ? wo(e4.G, "WorkerOverlongDelay", t5, i4.toString()) : e4.C.push({ type: "WorkerOverlongDelay", name: t5, data: i4 });
            }
            function ee(e4, t5, i4) {
              e4.G ? wo(e4.G, "WebWorkerProblem", t5, i4) : e4.C.push({ type: "ErrorString", name: t5, data: i4 });
            }
            function te(e4, t5, i4) {
              e4.G ? wo(e4.G, "WorkerMessageProblem", JSON.stringify(i4)) : e4.C.push({ type: "MessageEvent", name: t5, data: i4 });
            }
            function ie(e4, t5, i4) {
              e4.G ? wo(e4.G, "WorkerProblem", t5, `${i4.message} in ${i4.filename}@${i4.lineno}:${i4.colno}`, JSON.stringify(i4.error)) : e4.C.push({ type: "ErrorEvent", name: t5, data: i4 });
            }
            function ne(e4, t5, i4) {
              var n4;
              e4.G ? wo(e4.G, "WorkerCreateFailure", t5, null !== (n4 = null == i4 ? void 0 : i4.stack) && void 0 !== n4 ? n4 : "", JSON.stringify(i4)) : e4.C.push({ type: "WorkerCreateFailure", name: t5, data: i4 });
            }
            function se(e4, t5) {
              e4.G ? wo(e4.G, "WorkerTimeout", t5) : e4.C.push({ type: "WorkerTimeout", name: t5 });
            }
            function re(e4, t5) {
              e4.G ? wo(e4.G, "WorkerUnused", t5) : e4.C.push({ type: "WorkerUnused", name: t5 });
            }
            function oe(e4, t5) {
              if (e4 == t5) return false;
              let i4 = /^(\d+)[.]?(.*)/;
              if (e4 = i4.exec(e4), t5 = i4.exec(t5), null == e4) {
                if (null == t5) return true;
              } else if (null != t5 && e4[1] == t5[1] && "" == e4[2]) return true;
              return false;
            }
            function ae(e4) {
              e4.h = "Chrome", !e4.m && e4.we && (e4.m = e4.me ? e4.se ? e4.ne ? e4.Pa ? e4.Ie ? e4.Ke ? e4.Ce ? e4.re ? e4.dg ? e4.le ? e4.Ee ? e4.ye ? "90+" : "89" : "88" : "87" : "86" : "85" : "84" : "83" : "81" : "80" : "79" : "78" : "77");
            }
            function de(e4) {
              return e4.Bb ? "SteamOS" : "Linux";
            }
            function ce(e4) {
              e4.h = "Firefox", e4.m = e4.ue ? e4.Pa ? e4.eg ? e4.bg ? e4.qe ? "88" : "89+" : "87" : "86" : "85" : "84-";
            }
            function le(e4) {
              var t5, i4, n4, s3;
              e4.s && e4.N ? e4.H = "TV" : e4.Cb || e4.fa || !e4.wf ? e4.pc && !e4.oc || (e4.da ? e4.vf ? e4.qc && e4.nc || (e4.H = "DESKTOP") : e4.pc && e4.oc && (e4.H = "DESKTOP") : e4.qc && e4.nc || (e4.H = "DESKTOP")) : (e4.H = "TV", e4.j = null !== (i4 = null !== (t5 = e4.j) && void 0 !== t5 ? t5 : e4.kg) && void 0 !== i4 ? i4 : "", e4.deviceName = null !== (s3 = null !== (n4 = e4.deviceName) && void 0 !== n4 ? n4 : e4.jg) && void 0 !== s3 ? s3 : "UNKNOWN", e4.l = 7), e4.H || (e4.H = 600 <= (screen.width < screen.height ? screen.width : screen.height) ? "TABLET" : "PHONE");
            }
            function ue(e4) {
              e4.g = "Windows", fe(e4) || (e4.h = "Unknown", e4.l = 5, d.d("{3c72abb}", "{44ce1e0}"));
            }
            function he(e4) {
              e4.j = "APPLE", e4.s && e4.L ? (e4.g = "macOS", fe(e4) || (e4.h = "Unknown", e4.l = 5, d.d("{3c72abb}", "{b80b712}"))) : e4.ga ? e4.fa ? (e4.g = "iPadOS", me(e4)) : (e4.g = "macOS", fe(e4) || (e4.h = "Unknown", e4.l = 5, d.d("{3c72abb}", "{0f3296f}")), "Safari" == e4.h && (e4.m = e4.ve ? "16.4+" : "16.3-")) : e4.Na ? (e4.g = "iOS", me(e4)) : e4.Nb ? (e4.g = "iPadOS", me(e4)) : (e4.aa = true, e4.l = 5, e4.fa ? (e4.g = "iOS", me(e4), d.d("{3c72abb}", "{cf1c572}")) : (e4.g = "macOS", e4.h = "Unknown", d.d("{3c72abb}", "{1eb1815}")));
            }
            function pe(e4) {
              e4.g = "Android", e4.wa ? ce(e4) : e4.xa ? (e4.h = "Samsung", e4.j = "SAMSUNG") : e4.va ? e4.h = "Brave" : e4.ya ? e4.h = "Yandex" : e4.lb ? e4.h = "Opera" : e4.s ? e4.$a ? e4.h = "Edge" : e4.ua ? e4.h = "Opera" : e4.ab ? e4.h = "Yandex" : e4.ta || e4.Je ? (ae(e4), ve(e4)) : e4.Z && (e4.h = "Chromium", ve(e4)) : e4.$ ? e4.uc ? ae(e4) : e4.h = e4.fa ? "Edge" : "Silk" : (ae(e4), e4.l = 7), le(e4);
            }
            function fe(e4) {
              var t5;
              if (e4.wa) ce(e4);
              else if (e4.Pe) e4.h = "Opera";
              else if (e4.va) e4.h = "Brave";
              else if (e4.ya) e4.h = "Yandex";
              else if (e4.$) e4.I ? (e4.g = "Xbox", e4.j = "MICROSOFT", e4.h = "Edge", e4.Da ? e4.M = "XBOXSERIES" : e4.I && (e4.M = "XBOXONE")) : e4.s ? e4.ca ? (e4.g = "Xbox", e4.j = "MICROSOFT", e4.h = "Edge") : e4.$a ? e4.h = "Edge" : e4.ua ? e4.h = "Opera" : e4.ab ? e4.h = "Yandex" : e4.ta ? ae(e4) : e4.Z && !e4.He && (e4.h = "Chromium") : e4.uc ? e4.s && e4.Z ? (e4.h = "Chromium", e4.l = 9) : e4.We ? e4.h = "Chromium" : (e4.h = "Chromium", e4.l = 7) : (e4.h = "Edge", e4.g = null !== (t5 = e4.g) && void 0 !== t5 ? t5 : "Unknown", e4.l = 7);
              else if (e4.Ve || e4.tc) e4.h = "Safari";
              else {
                if (!e4.Le) return false;
                e4.I && (e4.g = "Xbox", e4.j = "MICROSOFT"), e4.h = "Edge_Legacy";
              }
              return true;
            }
            function ve(e4) {
              e4.ef ? (e4.j = "AMAZON", e4.Z && (e4.h = "Silk")) : e4.Ye ? e4.j = "SONY" : e4.cf ? e4.j = "GOOGLE" : e4.mf ? e4.j = "NVIDIA" : e4.hf ? e4.j = "XIAOMI" : e4.uf && (e4.j = "TVISION");
            }
            function me(e4) {
              e4.v = e4.fg ? e4.Pa ? e4.ie ? e4.ke ? e4.cg ? "17.4+" : "17+" : e4.Ge ? "16+" : e4.te ? e4.Qe ? "15.6+" : "15.5+" : e4.je ? "15.4+" : e4.Me ? "15.2+" : e4.Ae ? "15.1+" : "15+" : "14.5+" : e4.xe ? "14.3+" : "14+" : e4.pe ? "13+" : "12-";
              var t5 = e4.v;
              t5 = !e4.oe && !(t5.startsWith("12") || t5.startsWith("13")), e4.cb ? e4.h = "Firefox" : e4.ge ? e4.h = "Opera" : e4.va ? e4.h = "Brave" : e4.ya ? e4.h = "Yandex" : e4.bb ? e4.h = "Edge" : e4.Va ? e4.h = "Chrome" : e4.tc && !t5 ? e4.h = "Safari" : e4.Re ? e4.h = "ReactNative" : t5 ? (e4.h = "Unknown", e4.l = 7, d.d("{3c72abb}", "{5a39f60}")) : (e4.h = "Unknown", e4.l = 5, d.d("{3c72abb}", "{147d6b4}"));
            }
            function ge(e4) {
              var t5, i4 = ye;
              null === (t5 = i4.G) || void 0 === t5 || wo(t5, "TelemetryHandlerChanged"), i4.G = e4;
              for (const n4 of i4.C) switch (e4 = n4.name, t5 = n4.data, n4.type) {
                case "ErrorEvent":
                  ie(i4, e4, t5);
                  break;
                case "MessageEvent":
                  te(i4, e4, t5);
                  break;
                case "WorkerUnused":
                  re(i4, e4);
                  break;
                case "WorkerTimeout":
                  se(i4, e4);
                  break;
                case "WorkerCreateFailure":
                  ne(i4, e4, t5);
                  break;
                case "ErrorString":
                  ee(i4, e4, t5);
                  break;
                case "WorkerOverlongDelay":
                  Z(i4, e4, t5);
              }
              i4.C = [];
            }
            class Ae {
              nb() {
                const e4 = (self.OffscreenCanvas ? new OffscreenCanvas(1, 1) : document.createElement("canvas")).getContext("webgl"), t5 = e4 && e4.getExtension("WEBGL_debug_renderer_info");
                return t5 ? { sd: e4 && e4.getParameter(t5.UNMASKED_VENDOR_WEBGL), Qf: e4 && e4.getParameter(t5.UNMASKED_RENDERER_WEBGL), Gf: true } : { sd: "", Qf: "", Gf: false };
              }
            }
            class Se {
              nb() {
                const e4 = navigator.userAgentData;
                return e4 ? e4.getHighEntropyValues("platform architecture uaFullVersion platformVersion model bitness".split(" ")).then((t5) => (t5 || (t5 = {}), t5.brands || (t5.brands = e4.brands), t5.mobile || (t5.mobile = e4.mobile), t5)) : Promise.resolve(void 0);
              }
            }
            class be {
              nb() {
                let e4 = { Id: false, Nd: "", sd: "" };
                if (navigator.userAgent) {
                  var t5 = navigator.userAgent.toUpperCase();
                  const i4 = "BRAVIA TIZEN PHILIPSTV GOOGLETV CRKEY CHROMECAST SHIELDTV".split(" "), n4 = "SONY SAMSUNG PHILIPS GOOGLE GOOGLE GOOGLE NVIDIA".split(" ");
                  if (RegExp("BRAVIA|SMARTTV|SMART-TV|PHILIPSTV|GOOGLETV|CRKEY|CHROMECAST|SHIELD Android TV", "i").test(t5) && (e4.Id = true, t5 = t5.match(i4.join("|")))) for (let s3 = 0; s3 < i4.length; s3++) t5[0] == i4[s3] && (e4.Nd = i4[s3], e4.sd = n4[s3], "CRKEY" == t5[0] && (e4.Nd = "CHROMECAST"));
                }
                return Promise.resolve(e4);
              }
            }
            class we {
              nb() {
                return { platform: navigator.platform };
              }
            }
            const ye = new class {
              constructor() {
                this.Qc = this.start = 0, this.vc = this.he = this.F = this.U = this.Qa = this.Se = this.Ua = this.Sa = this.Ta = false, this.Qe = true, this.sc = this.Rf = this.rc = this.$f = this.Kf = this.Ze = this.W = this.s = this.o = this.ra = this.Fe = this.oc = this.nc = this.qc = this.pc = this.ve = this.Oe = this.ye = this.Ee = this.le = this.dg = this.re = this.Ce = this.Ke = this.Ie = this.ne = this.se = this.me = this.we = this.cg = this.ke = this.Ge = this.oe = this.tc = this.ue = this.Pa = this.eg = this.bg = this.qe = this.xe = this.te = this.je = this.Me = this.Ae = this.pe = this.ie = this.fg = this.uc = this.wf = this.N = this.vf = this.na = this.da = this.ea = this.O = this.L = this.P = this.uf = this.hf = this.mf = this.cf = this.Ye = this.ef = this.ca = this.Bb = this.Da = this.I = this.fa = this.Cb = this.He = this.Je = this.Z = this.ab = this.ua = this.$a = this.ta = this.If = this.Ef = this.Bf = this.xf = this.Ka = this.Af = this.R = this.oa = this.S = this.Nb = this.ja = this.Na = this.ga = this.Re = this.xa = this.ya = this.va = this.lb = this.ge = this.Pe = this.Ne = this.cb = this.wa = this.Va = this.$ = this.Ve = this.bb = this.Le = this.We = false, this.ag = this.De = this.pa = this.Oa = this.sa = this.ka = this.T = 0, this.gpuDetail = "", this.u = { os: "Unknown", osRawVer: "0", osVer: "0", browser: "Unknown", browserVer: "0", browserFullVer: "0", browserBestVer: "0", forging: true, spoofing: true, confidence: 0, totalTime: 0, vendor: "", gpuDetail: "" }, this.C = [], this.ze = /Chrome\/(([0-9]+)\.[0-9]+\.[0-9]+\.[0-9]+)/;
              }
            }();
            function Ee() {
              performance.mark("platformBegin");
              var e4 = ye;
              return e4.Be || (e4.Be = J(e4)), e4.Be;
            }
            var Ce = class extends j {
              constructor(e4) {
                super(e4), this.U = [];
              }
              $(e4) {
                e4 = { logModule: "R", timeStamp: e4.timestamp, logLevel: e4.level, logtag: e4.tag, logstr: e4.message }, this.hasListener("Log") ? this.emit("Log", e4) : this.U.push(e4);
              }
              addListener(e4, t5) {
                if (super.addListener(e4, t5), "Log" == e4 && 0 < this.U.length) {
                  for (const e5 of this.U) this.emit("Log", e5);
                  this.U = [];
                }
              }
            };
            function Te(e4) {
              switch (e4) {
                case "CONSOLE":
                  return "Console";
                case "TABLET":
                  return "Tablet";
                case "PHONE":
                  return "Phone";
                case "TV":
                  return "TV";
                case "LAPTOP":
                  return "Laptop";
                case "DESKTOP":
                  return "Desktop";
                default:
                  return "undefined";
              }
            }
            function Ie(e4) {
              switch (e4) {
                case "Chrome":
                  return "Chrome";
                case "Safari":
                  return "Safari";
                case "Yandex":
                  return "Yandex";
                case "Edge":
                  return "Edge";
                case "Edge_Legacy":
                  return "Edge_legacy";
                case "Firefox":
                  return "Firefox";
                case "Samsung":
                  return "Samsung";
                case "Chromium":
                  return "Chromium";
                case "Opera":
                  return "Opera";
                case "Brave":
                  return "Brave";
                case "Silk":
                  return "Silk";
                default:
                  return "undefined";
              }
            }
            function Re(e4) {
              switch (e4) {
                case "Windows":
                  return "Windows";
                case "macOS":
                  return "MacOS";
                case "ChromeOS":
                  return "ChromeOS";
                case "Linux":
                  return "Linux";
                case "iOS":
                  return "iOS";
                case "iPadOS":
                  return "iPadOS";
                case "Tizen":
                  return "Tizen";
                case "WebOS":
                  return "WebOS";
                case "Xbox":
                  return "Xbox";
                case "Android":
                  return "Android";
                case "SteamOS":
                  return "SteamOS";
                default:
                  return "undefined";
              }
            }
            class ke {
              constructor(e4) {
                e4 = this.g = e4, this.j = { os: Re(e4.os), browser: Ie(e4.browser), deviceType: Te(e4.deviceType) }, e4 = this.g, this.l = { os: Pe(Re(e4.os)), browser: Oe(Ie(e4.browser)), deviceType: De(Te(e4.deviceType)) };
              }
              get m() {
                return this.j;
              }
              get o() {
                return this.l;
              }
              get h() {
                return this.g;
              }
            }
            var Pe = (e4) => {
              switch (e4) {
                case "Windows":
                  return "WINDOWS";
                case "MacOS":
                  return "MACOS";
                case "Linux":
                  return "LINUX";
                case "ChromeOS":
                  return "CHROMEOS";
                case "iOS":
                  return "IOS";
                case "iPadOS":
                  return "IPADOS";
                case "WebOS":
                  return "WEBOS";
                case "Tizen":
                  return "TIZEN";
                case "Xbox":
                  return "XBOX";
                case "Android":
                  return "ANDROID";
                case "SteamOS":
                  return "STEAMOS";
                case "Shield":
                  return "SHIELD";
                default:
                  return "UNKNOWN";
              }
            }, De = (e4) => {
              switch (e4) {
                case "Desktop":
                default:
                  return "DESKTOP";
                case "Laptop":
                  return "LAPTOP";
                case "TV":
                  return "TV";
                case "Phone":
                  return "PHONE";
                case "Tablet":
                  return "TABLET";
                case "Console":
                  return "CONSOLE";
              }
            }, Oe = (e4) => {
              switch (e4) {
                case "Chrome":
                  return "CHROME";
                case "Safari":
                  return "SAFARI";
                case "Yandex":
                  return "YANDEX";
                case "Edge":
                  return "EDGE";
                case "Edge_legacy":
                  return "EDGE_LEGACY";
                case "Firefox":
                  return "FIREFOX";
                case "Samsung":
                  return "SAMSUNG";
                case "Chromium":
                  return "CHROMIUM";
                case "Opera":
                  return "OPERA";
                case "Brave":
                  return "BRAVE";
                case "Silk":
                  return "SILK";
                default:
                  return "UNKNOWN";
              }
            };
            let Me;
            function Ne(e4) {
              e4.splice(0, e4.length);
            }
            var Le = class extends Array {
              constructor() {
                super(), this.push = this.h;
              }
              h(...e4) {
                return e4 = Array.prototype.push.apply(this, e4), this.g && this.g(), e4;
              }
            }, xe = class {
              constructor(e4) {
                this.name = "", this.gdprLevel = "behavioral", this.parameters = e4, this.ts = (/* @__PURE__ */ new Date()).toISOString();
              }
            }, Fe = class extends xe {
              constructor(e4) {
                super(e4), this.name = "GS_DebugInfo", this.gdprLevel = "technical";
              }
            }, _e = class extends xe {
              constructor(e4) {
                super(e4), this.name = "GS_ExceptionInfo", this.gdprLevel = "technical";
              }
            }, Ue = class extends xe {
              constructor(e4) {
                super(e4), this.name = "GS_ClientMetricEvent", this.gdprLevel = "functional";
              }
            }, je = class extends xe {
              constructor(e4) {
                super(e4), this.name = "GS_Sleep_Event", this.gdprLevel = "technical";
              }
            }, Ge = class extends xe {
              constructor(e4) {
                super(e4), this.name = "GS_WsCallResult", this.gdprLevel = "functional";
              }
            }, Be = class extends xe {
              constructor(e4) {
                super(e4), this.name = "GS_HttpCallResult", this.gdprLevel = "functional";
              }
            };
            function Ve(e4, t5) {
              e4.l.length && !e4.o && (e4.o = window.setTimeout(() => function(e5) {
                if (e5.l.length && e5.m) {
                  var t6 = We(e5, e5.l);
                  e5.l = [], I(e5.m, { ...e5.L, body: t6 }).then((e6) => {
                    200 <= e6.status && 299 >= e6.status || d.e("{95feb49}", "{1dc64ee}", e6.status);
                  }).catch((e6) => {
                    d.e("{95feb49}", "{a0b4bea}", e6);
                  }).finally(() => {
                    e5.o = 0, e5.l.length && Ve(e5, 2e3);
                  });
                } else e5.o = 0;
              }(e4), t5));
            }
            function He(e4, t5) {
              if (e4.g) switch (t5.gdprLevel) {
                case "functional":
                  return "Full" === e4.g.deviceGdprFuncOptIn || "Temp" === e4.g.deviceGdprFuncOptIn;
                case "technical":
                  return "Full" === e4.g.gdprTechOptIn;
                case "behavioral":
                  return "Full" === e4.g.gdprBehOptIn;
              }
              return false;
            }
            function We(e4, t5) {
              var i4;
              (e4 = { ...e4.g, events: [] }).sentTs = (/* @__PURE__ */ new Date()).toISOString();
              for (const n4 of t5) t5 = { name: n4.name, ts: n4.ts, parameters: n4.parameters }, null === (i4 = e4.events) || void 0 === i4 || i4.push(t5);
              return JSON.stringify(e4);
            }
            var ze = class {
              constructor(e4) {
                this.telemetryEventIds = {}, this.m = "", this.l = [], this.o = 0, this.L = { method: "POST", headers: { "Content-Type": "application/json" }, body: "", retryCount: 3, timeout: 2e3 }, this.F = e4;
              }
              configure(e4) {
                if (!e4.option) return d.e("{95feb49}", "{e936979}"), false;
                if ("function" == typeof e4.option) {
                  d.i("{95feb49}", "{01ded8b}"), this.s = e4.option, this.m = void 0, this.o && (window.clearTimeout(this.o), this.o = 0);
                  for (const e5 of this.l) this.s(e5);
                  this.l = [];
                } else {
                  if ("string" != typeof e4.option) return d.e("{95feb49}", "{328a30f}"), false;
                  d.i("{95feb49}", "{c76ea37}"), this.m = e4.option, this.s = void 0, this.g && Ve(this);
                }
                return true;
              }
              updateTelemetryCommonData(e4) {
                var t5, i4, n4, s3, r3, o2, a2, c2, l2, u2;
                const h2 = null === (t5 = this.g) || void 0 === t5 ? void 0 : t5.sessionId;
                this.g = { ...e4, events: [] }, this.g.clientId = this.F.clientId, this.g.eventSchemaVer = this.F.eventSchemaVer, this.g.deviceMake = null !== (i4 = this.g.deviceMake) && void 0 !== i4 ? i4 : "undefined", this.g.deviceModel = null !== (n4 = this.g.deviceModel) && void 0 !== n4 ? n4 : "undefined", this.g.integrationId = null !== (s3 = this.g.integrationId) && void 0 !== s3 ? s3 : "undefined", this.g.userId = null !== (r3 = this.g.userId) && void 0 !== r3 ? r3 : "undefined", this.g.externalUserId = null !== (o2 = this.g.externalUserId) && void 0 !== o2 ? o2 : "undefined", this.g.idpId = null !== (a2 = this.g.idpId) && void 0 !== a2 ? a2 : "undefined", this.g.eventProtocol = null !== (l2 = null === (c2 = this.g) || void 0 === c2 ? void 0 : c2.eventProtocol) && void 0 !== l2 ? l2 : "1.5", this.g.eventSysVer = "2.0", this.g.sessionId = null !== (u2 = this.g.sessionId) && void 0 !== u2 ? u2 : h2, this.g.sessionId || (this.g.sessionId = D(), d.i("{95feb49}", "{7d66b6c}", this.g.sessionId)), this.L.headers["X-Event-Protocol"] = this.g.eventProtocol, this.m && (this.l = this.l.filter((e5) => He(this, e5)), Ve(this));
              }
              updateTelemetryEventIds(e4) {
                this.telemetryEventIds = { ...e4 };
              }
              h(e4, t5) {
                e4 = { name: e4.name, parameters: e4.parameters, gdprLevel: e4.gdprLevel, ts: e4.ts, clientConfig: this.F }, this.s ? this.s(e4) : this.m && this.g ? He(this, e4) && (t5 ? (t5 = We(this, [e4]), e4 = navigator.sendBeacon(this.m, new Blob([t5], { type: "text/plain" })), d.i("{95feb49}", "{6267b70}", e4, t5)) : (this.l.push(e4), Ve(this))) : this.l.push(e4);
              }
            };
            window.RtcUtils = window.RtcUtils || {};
            var Ke = { Ga: {}, Vb: { type: "UNKNOWN", version: "" }, Md: true, $e: false, fe: true, ee: false };
            function qe(e4) {
              var t5, i4, o2, a2, c2;
              if (d.i("{11b33a0}", "{e65e133}", JSON.stringify(e4)), function(e5) {
                var t6, i5;
                if (e5.overrideData) {
                  const o3 = new URLSearchParams(e5.overrideData.toLowerCase());
                  "lean" === o3.get("mode") && (n3 = false), s2 = (n3 = null !== (t6 = (e5 = (e6) => r2(e6 = o3.get(e6)))("log")) && void 0 !== t6 ? t6 : n3) && (null !== (i5 = e5("console")) && void 0 !== i5 ? i5 : s2);
                }
              }(e4), e4.gxtOverrideData) {
                const t6 = JSON.parse(e4.gxtOverrideData);
                if (t6.params) for (const e5 of t6.params) "pmCommunication" === e5.name && (Ke.Ga.pmCommunication = e5.value, Ke.Vb = { type: "GXT", version: e5.version });
              }
              if (e4.overrideData) {
                const n4 = new URLSearchParams(e4.overrideData.toLowerCase());
                e4 = (e5) => r2(e5 = n4.get(e5)), Ke.Md = null !== (t5 = e4("log")) && void 0 !== t5 ? t5 : Ke.Md, Ke.$e = Ke.Md && (null !== (i4 = e4("console")) && void 0 !== i4 ? i4 : Ke.$e), Ke.fe = null !== (o2 = e4("websocketsignaling")) && void 0 !== o2 ? o2 : Ke.fe, Ke.ee = null !== (a2 = e4("webrtcstreamer")) && void 0 !== a2 ? a2 : Ke.ee, Ke.hdr = null !== (c2 = e4("hdr")) && void 0 !== c2 ? c2 : Ke.hdr;
              }
            }
            var $e = class extends xe {
              constructor(e4) {
                super(e4), this.name = "GridServer_GameLaunch_Request", this.gdprLevel = "functional";
              }
            };
            const Je = { clientName: "GFN_GridServer", clientId: "93289439828086895", eventSchemaVer: "2.1" };
            function Xe(e4, t5, i4) {
              var n4, s3, r3, o2 = tt;
              return { requestedZoneAddress: e4, zoneName: "", networkSessionId: null !== (n4 = o2.telemetryEventIds.networkTestId) && void 0 !== n4 ? n4 : "", sessionId: null != i4 ? i4 : "", subSessionId: "", resumeType: t5 ? "MANUAL" : "NONE", overrideConfigType: Ke.Vb.type, overrideConfigVersion: Ke.Vb.version, result: "", codec: "UNKNOWN", ipVersion: "UNKNOWN", launchDuration: 0, networkType: o2.networkType, streamingProfileGuid: null !== (s3 = o2.telemetryEventIds.streamingProfileGuid) && void 0 !== s3 ? s3 : "", systemInfoGuid: null !== (r3 = o2.telemetryEventIds.systemInfoGuid) && void 0 !== r3 ? r3 : "", cmsId: String(o2.cmsId) };
            }
            function Qe(e4) {
              var t5 = tt;
              e4 = new Be({ callDuration: e4.callDuration, verb: e4.verb, sessionId: e4.sessionId, subSessionId: e4.subSessionId, serverId: e4.serverId, url: e4.url, overrideConfigType: Ke.Vb.type, overrideConfigVersion: Ke.Vb.version, requestStatusCode: e4.requestStatusCode, requestId: e4.requestId, networkType: t5.networkType, statusCode: e4.statusCode, cmsId: String(t5.cmsId), moduleName: "GRID_SERVER", response: e4.response }), t5.h(e4);
            }
            function Ye(e4) {
              var t5, i4, n4 = tt;
              e4.launchDuration = Math.round(e4.launchDuration), (e4 = new $e(e4)).parameters.sessionId || (e4.parameters.sessionId = n4.sessionId), e4.parameters.subSessionId || (e4.parameters.subSessionId = n4.subSessionId), e4.parameters.systemInfoGuid = null !== (t5 = n4.telemetryEventIds.systemInfoGuid) && void 0 !== t5 ? t5 : "", e4.parameters.streamingProfileGuid = null !== (i4 = n4.telemetryEventIds.streamingProfileGuid) && void 0 !== i4 ? i4 : "", n4.h(e4);
            }
            function Ze(e4, t5, i4) {
              var n4, s3, r3 = tt;
              if (50 <= r3.v) var o2 = false;
              else {
                var a2 = null !== (o2 = r3.j.get(t5)) && void 0 !== o2 ? o2 : 0;
                10 <= a2 ? o2 = false : (r3.v++, r3.j.set(t5, a2 + 1), o2 = true);
              }
              o2 && (!n4 && e4 && (n4 = e4.name + ": " + e4.message), e4 = new _e({ filename: i4, lineno: 0, stacktrace: null !== (s3 = null == e4 ? void 0 : e4.stack) && void 0 !== s3 ? s3 : "", colno: 0, handled: "TRUE", category: null != n4 ? n4 : "", message: t5, moduleName: "GRID_SERVER", sessionId: r3.sessionId, subSessionId: r3.subSessionId }), r3.h(e4));
            }
            function et(e4) {
              var t5 = tt;
              t5.subSessionId = e4, t5.j.clear(), t5.v = 0;
            }
            var tt = new class extends ze {
              constructor() {
                super(Je), this.networkType = "UNKNOWN", this.subSessionId = this.sessionId = this.cmsId = "", this.j = /* @__PURE__ */ new Map(), this.v = 0;
              }
              setNetworkType(e4) {
                this.networkType = _(e4);
              }
            }();
            function it(e4) {
              switch (e4) {
                case 15867905:
                case 15867906:
                case 15867907:
                  return true;
                default:
                  return false;
              }
            }
            function nt(e4) {
              switch (e4) {
                case "ready_for_connection":
                case "streaming":
                case "paused":
                  return true;
                default:
                  return false;
              }
            }
            function st(e4) {
              switch (e4) {
                case 1:
                  return "initializing";
                case 2:
                  return "ready_for_connection";
                case 3:
                  return "streaming";
                case 4:
                case 5:
                  return "paused";
                case 6:
                  return "resuming";
                case 7:
                  return "finished";
                default:
                  return "unknown";
              }
            }
            function rt(e4) {
              switch (e4) {
                case 3237085186:
                  return "invalid operation";
                case 15859712:
                  return "success";
                case 3237093379:
                case 3237093381:
                  return "Invalid server response";
                case 3237093384:
                  return "Exception";
                case 15867907:
                case 15867905:
                case 15867906:
                  return "cancelled";
                case 15868417:
                  return "no network";
                case 3237089282:
                  return "network error";
                default:
                  return "server error";
              }
            }
            function ot(e4, t5) {
              var i4, n4;
              return function(e5, t6) {
                if (e5["content-type"] = "application/json", void 0 !== t6.deviceOs && (e5["nv-device-os"] = t6.deviceOs), void 0 !== t6.deviceType && (e5["nv-device-type"] = t6.deviceType), void 0 !== t6.deviceMake && (e5["nv-device-make"] = t6.deviceMake), void 0 !== t6.deviceModel && (e5["nv-device-model"] = t6.deviceModel), void 0 !== t6.clientType && (e5["nv-client-type"] = t6.clientType), void 0 !== t6.clientAppVersion && (e5["nv-client-version"] = t6.clientAppVersion), void 0 !== t6.clientStreamer && (e5["nv-client-streamer"] = t6.clientStreamer), void 0 !== t6.clientId && (e5["nv-client-id"] = t6.clientId), void 0 !== t6.deviceId && (e5["x-device-id"] = t6.deviceId), void 0 !== t6.browserType && (e5["nv-browser-type"] = t6.browserType), t6.clientHeaders) for (const [i5, n5] of t6.clientHeaders) "x-nv-client-identity" !== (t6 = i5).toLowerCase() && (e5[t6.toLowerCase()] = n5);
              }(e4.o.headers, t5), e4.s.set("component", "gridserver-core"), e4.s.set("component.version", "2.0"), e4.s.set("client.name", "GFN-PC"), e4.s.set("client.version", "29.0"), e4.s.set("client.os", null !== (i4 = t5.deviceOs) && void 0 !== i4 ? i4 : ""), e4.s.set("client.os.version", null !== (n4 = t5.deviceOsVer) && void 0 !== n4 ? n4 : ""), e4.serverAddress = t5.serverAddress, e4.clientPlatformName = t5.clientPlatformName, e4.deviceId = t5.deviceId, (e4.serverAddress.startsWith("mockpm://") || "mockpm.com" === e4.serverAddress.toLocaleLowerCase()) && (e4.serverAddress = e4.serverAddress.replace("mockpm://", ""), e4.protocol = "http://"), e4.u || "browser" !== e4.clientPlatformName || Ee().then((t6) => {
                e4.u = t6;
              }), true;
            }
            function at(e4) {
              const t5 = a.trace.getActiveSpan();
              if (t5) for (const [i4, n4] of e4.s) t5.setAttribute(i4, n4);
            }
            function dt(e4, t5, i4, n4, s3) {
              const r3 = D();
              return new Promise((o2, a2) => {
                const c2 = !!s3;
                var l2 = () => {
                  var e5;
                  const i5 = { code: 3237085186, subSessionId: r3 };
                  lt(i5.code);
                  const n5 = Xe(null !== (e5 = t5.serverAddress) && void 0 !== e5 ? e5 : "", c2, s3);
                  n5.result = g(i5.code), n5.subSessionId = r3, Ye(n5), o2(i5);
                };
                if (ct(e4)) if (e4.I()) d.e("{1daeef1}", "{3753849}"), l2();
                else {
                  tt.cmsId = t5.appId, et(r3), l2 = gt(e4, t5, s3);
                  var u2 = new URL(l2).hostname;
                  e4.g = { resolve: o2, reject: a2, sessionId: s3, subSessionId: r3, Uf: n4, Jd: Number.MAX_VALUE, dd: false, Tc: i4, Kd: Xe(u2, c2), startTime: performance.now() }, a2 = At(e4, t5, c2, r3), ht(e4, c2 ? 1 : 0, l2, a2, i4).then((t6) => {
                    !c2 && 15859712 === t6.result && t6.session && d.i("{1daeef1}", "{7c01bce}", t6.session.sessionId), e4.O(t6);
                  }).catch((t6) => {
                    e4.N(t6);
                  });
                }
                else d.e("{1daeef1}", "{3781843}"), l2();
              }).catch((t6) => (e4.l.clear(), Ne(e4.h), e4.g = void 0, pt(t6, "startOrResumeSession"), lt(3237093384), { code: 3237093384, subSessionId: r3 }));
            }
            function ct(e4) {
              return -1 === e4.C.type || !!e4.C.token;
            }
            function lt(e4, t5) {
              const i4 = a.trace.getActiveSpan();
              i4 && (it(e4) ? (i4.setAttribute("error", false), i4.setAttribute("error.description", rt(e4))) : 15859712 == e4 ? i4.setAttribute("error", false) : (i4.setAttribute("error", true), i4.setAttribute("error.description", null != t5 ? t5 : rt(e4))));
            }
            function ut(e4, t5) {
              let i4 = e4.protocol;
              return t5 && e4.v.has(t5) ? void 0 !== (e4 = e4.v.get(t5)) && (i4 += e4.server, 0 != e4.port && (i4 += ":" + e4.port)) : i4 += e4.serverAddress, i4 + "/v2/session/" + t5;
            }
            function ht(e4, t5, i4, n4, s3, r3) {
              var o2;
              const c2 = (e5) => !it(e5) && (15859712 !== e5 || 3 !== t5);
              let l2 = { method: (() => {
                switch (t5) {
                  case 0:
                    return "POST";
                  case 2:
                    return "DELETE";
                  case 1:
                  case 4:
                    return "PUT";
                  default:
                    return "GET";
                }
              })(), headers: e4.o.headers, body: n4, retryCount: e4.o.retryCount, timeout: e4.o.timeout };
              2 !== t5 && 4 !== t5 || (l2.keepalive = true, e4.u && "Chrome" == e4.u.browser && !M(e4.u, 81) && (l2.keepalive = false));
              const u2 = performance.now();
              let h2 = function(e5, t6, i5) {
                return { url: e5, verb: t6, statusCode: "0", requestStatusCode: "", sessionId: null != i5 ? i5 : "", subSessionId: tt.subSessionId, requestId: "", serverId: "", callDuration: 0, response: "None" };
              }(i4, null !== (o2 = l2.method) && void 0 !== o2 ? o2 : "", r3);
              h2.statusCode = "0";
              let p2 = "";
              return I(i4, l2, e4.C, s3).then((i5) => {
                p2 = i5.data;
                var n5 = performance.now();
                if (h2.statusCode = i5.status.toString(), h2.callDuration = Math.round(n5 - u2), !i5.data) throw d.e("{1daeef1}", "{ea40865}"), new SyntaxError("The response from server does not contain any data");
                try {
                  var s4 = JSON.parse(i5.data);
                } catch (e5) {
                  throw h2.response = i5.data, e5;
                }
                if (!s4.requestStatus) throw d.e("{1daeef1}", "{862f264}", wt(i5.data)), new SyntaxError("RequestStatus missing in response");
                i5 = s4.requestStatus.serverId.toUpperCase(), h2.requestId = s4.requestStatus.requestId, h2.serverId = i5, h2.requestStatusCode = s4.requestStatus.statusDescription;
                var r4, o3, l3, f2 = 3237093632;
                if (void 0 !== (n5 = s4.requestStatus).statusCode) {
                  var v2 = n5.statusCode;
                  1 == v2 ? f2 = 15859712 : 0 < v2 && 255 > v2 && (f2 = 3237093632 + v2), 3237093636 != f2 && 3237093672 != f2 || !n5.unifiedErrorCode || (f2 = n5.unifiedErrorCode);
                }
                if (n5.unifiedErrorCode && d.i("{1daeef1}", "{d2c9cc8}", g(n5.unifiedErrorCode)), i5 = { result: f2, kd: s4, serverId: i5 }, n5 = s4.requestStatus, f2 = a.trace.getActiveSpan()) {
                  v2 = /* @__PURE__ */ new Map([["host.dc", null !== (r4 = n5.serverId) && void 0 !== r4 ? r4 : ""], ["request.id", null !== (o3 = n5.requestId) && void 0 !== o3 ? o3 : ""], ["request.status", null !== (l3 = n5.statusDescription) && void 0 !== l3 ? l3 : ""]]);
                  for (const [e5, t6] of v2) f2.setAttribute(e5, t6);
                }
                if (5 === t5) (s4 = s4.sessions) && (i5.activeSessions = vt(e4, s4));
                else if (2 !== t5) {
                  var m2;
                  (r4 = s4.session) && (i5.session = ft(e4, r4), null == (o3 = a.trace.getActiveSpan()) || o3.setAttribute("session.status", null !== (m2 = r4.status) && void 0 !== m2 ? m2 : ""), h2.sessionId = i5.session.sessionId), (s4 = s4.otherUserSessions) && (i5.activeSessions = vt(e4, s4), i5.activeSessions.length && d.d("{1daeef1}", "{ba4be1c}", i5.activeSessions.length));
                }
                return h2 && c2(i5.result) && (Qe(h2), h2 = void 0), i5;
              }).catch((e5) => {
                let t6 = { result: 3237089282 };
                const n5 = performance.now();
                if (e5.code) {
                  var s4 = 3237093384;
                  3237089281 === (e5 = e5.code) ? s4 = 15868417 : 3237089282 === e5 ? s4 = 3237089282 : 3237093377 === e5 ? s4 = 3237093377 : 3237093379 === e5 ? s4 = 3237093379 : 3237089283 === e5 ? s4 = 3237089283 : 15867905 == e5 && (s4 = 15867907), t6.result = s4;
                } else s4 = false, (e5 instanceof SyntaxError || e5 instanceof TypeError && e5.message && e5.message.includes("Cannot read property")) && (s4 = true, d.e("{1daeef1}", "{d8979bb}", e5.name, e5.message)), s4 ? (t6.result = 3237093379, d.e("{1daeef1}", "{04bcd6f}", wt(p2))) : (t6.result = 3237093384, d.e("{1daeef1}", "{94d55bb}", e5, e5.stack), Ze(e5, "performSessionRequest", "sessioncontrolimpl.ts"));
                return h2 && c2(t6.result) && (h2.callDuration = Math.round(n5 - u2), Qe(h2)), d.e("{1daeef1}", "{9c647aa}", l2.method, i4), d.e("{1daeef1}", "{200d7ba}", t6.result, rt(t6.result)), t6;
              });
            }
            function pt(e4, t5) {
              d.e("{1daeef1}", "{32f1296}", t5, e4.message), d.e("{1daeef1}", "{94d55bb}", e4, e4.stack), Ze(e4, t5, "sessioncontrolimpl.ts");
            }
            function ft(e4, t5) {
              var i4;
              let n4 = { sessionId: t5.sessionId, subSessionId: "", appId: 0, appLaunchMode: 0, state: st(t5.status), zoneAddress: "", zoneName: "", deviceId: "", gpuType: "", monitorSettings: [], connectionInfo: [], finalizedStreamingFeatures: t5.finalizedStreamingFeatures };
              if (n4.appId = t5.sessionRequestData ? t5.sessionRequestData.appId : 0, t5.connectionInfo) {
                var s3 = t5.connectionInfo;
                if ("browser" === e4.clientPlatformName) {
                  let e5 = false;
                  for (var r3 of s3) if (2 === r3.usage) {
                    e5 = true, n4.connectionInfo.push(r3);
                    const i5 = { ip: "", port: 49100, appLevelProtocol: 5, protocol: 1, usage: 14 };
                    r3 = r3.ip.split("."), i5.ip = r3[0] + "-" + r3[1] + "-" + r3[2] + "-" + r3[3], i5.ip += t5.sessionControlInfo.ip.substring(t5.sessionControlInfo.ip.indexOf(".")), d.d("{1daeef1}", "{cf7d7ea}", i5.ip), n4.connectionInfo.push(i5);
                    break;
                  }
                  e5 || (n4.connectionInfo = s3);
                } else n4.connectionInfo = s3;
              }
              switch (t5.monitorSettings && (n4.monitorSettings = t5.monitorSettings), t5.gpuType && (n4.gpuType = t5.gpuType), null === (i4 = t5.sessionRequestData) || void 0 === i4 ? void 0 : i4.appLaunchMode) {
                case 3:
                  n4.appLaunchMode = 2;
                  break;
                case 2:
                  n4.appLaunchMode = 1;
              }
              return t5.sessionControlInfo && (i4 = t5.sessionControlInfo.ip, t5 = t5.sessionControlInfo.port, i4 && t5 && (e4.v.has(n4.sessionId) && ((null == (s3 = e4.v.get(n4.sessionId)) ? void 0 : s3.server) === i4 && (null == s3 ? void 0 : s3.port) === t5 || d.i("{1daeef1}", "{f09f5be}", n4.sessionId, null == s3 ? void 0 : s3.server, null == s3 ? void 0 : s3.port, i4, t5)), e4.v.set(n4.sessionId, { server: i4, port: t5 })), n4.zoneAddress = i4, n4.zoneName = i4.split(".")[0].toUpperCase()), n4;
            }
            function vt(e4, t5) {
              return t5.map((t6) => ft(e4, t6));
            }
            function mt(e4, t5, i4, n4, s3, r3, o2) {
              const a2 = () => {
                at(e4);
                let r4 = ut(e4, t5), o3 = { action: 6, adUpdates: Array.from(e4.h) };
                d.d("{1daeef1}", "{dbca4b1}", JSON.stringify(o3)), Ne(e4.h), ht(e4, 4, r4, JSON.stringify(o3), i4, t5).then((e5) => {
                  n4(e5);
                }).catch((e5) => s3(e5));
              };
              for (var u2 = e4.h.length - 1, h2 = 0; 1 <= u2; ) 3 === e4.h[u2].adAction && 2 === e4.h[u2 - 1].adAction ? (e4.h.splice(u2 - 1, 2), h2++, u2 -= 2) : 3 === e4.h[u2 - 1].adAction ? u2-- : u2 -= 2;
              h2 && d.d("{1daeef1}", "{98a2816}", h2), h2 = false, u2 = 1e3 * e4.m.adsWaitTimeoutS;
              const f2 = e4.h.length;
              if (f2 && (4 === e4.h[f2 - 1].adAction && 1 < e4.l.size || 2 === e4.h[f2 - 1].adAction ? u2 = e4.m.adsThrottleIntervalMS : h2 = true), h2) l(c(), "AdUpdateRequest", a2);
              else {
                h2 = new Promise((t6) => {
                  e4.h.g = t6;
                });
                const v2 = new p(u2, i4.signal);
                Promise.race([v2.promise, h2]).then(() => {
                  e4.h.g = void 0, v2.cancel(), e4.h.length ? e4.h.length == f2 ? l(c(), "AdUpdateRequest", a2) : mt(e4, t5, i4, n4, s3, r3, o2) : (d.w("{1daeef1}", "{5e1dfd0}"), o2());
                }).catch((t6) => {
                  e4.h.g = void 0, v2.h ? (d.i("{1daeef1}", "{d7114d7}"), r3()) : s3(t6);
                });
              }
            }
            function gt(e4, t5, i4) {
              var n4, s3, r3;
              return i4 ? e4 = ut(e4, i4) : (i4 = null !== (n4 = t5.serverAddress) && void 0 !== n4 ? n4 : e4.serverAddress, e4 = e4.protocol + i4 + "/v2/session"), (e4 += "?keyboardLayout=" + (null !== (s3 = t5.keyboardLayout) && void 0 !== s3 ? s3 : "en_US")) + "&languageCode=" + (null !== (r3 = t5.clientLocale) && void 0 !== r3 ? r3 : "en_US");
            }
            function At(e4, t5, i4, n4) {
              var s3, r3, o2, a2, c2, l2, u2, h2, p2;
              let f2;
              switch (t5.appLaunchMode) {
                case 2:
                  d.d("{1daeef1}", "{6d5cf87}"), f2 = 3;
                  break;
                case 1:
                  f2 = 2;
                  break;
                default:
                  f2 = 1;
              }
              let v2 = null !== (o2 = null === (r3 = null === (s3 = t5.monitorSettings) || void 0 === s3 ? void 0 : s3[0]) || void 0 === r3 ? void 0 : r3.sdrHdrMode) && void 0 !== o2 ? o2 : 0;
              if (Ke.hdr) {
                v2 = 1;
                for (const e5 of t5.monitorSettings) e5.sdrHdrMode = 1;
              }
              s3 = { audioMode: 2, remoteControllersBitmap: null !== (a2 = t5.remoteControllersBitmap) && void 0 !== a2 ? a2 : 0, sdrHdrMode: v2, networkTestSessionId: null, availableSupportedControllers: [], clientVersion: "29.0", deviceHashId: e4.deviceId, internalTitle: null, clientPlatformName: e4.clientPlatformName, metaData: [{ key: "SubSessionId", value: n4 }, { key: "wssignaling", value: Ke.fe ? "1" : "0" }], surroundAudioInfo: 0, clientTimezoneOffset: null !== (c2 = t5.clientTimeZoneOffset) && void 0 !== c2 ? c2 : -6e4 * (/* @__PURE__ */ new Date()).getTimezoneOffset(), clientIdentification: "GFN-PC", parentSessionId: null, appId: t5.appId, streamerVersion: 1, clientRequestMonitorSettings: t5.monitorSettings, appLaunchMode: f2, sdkVersion: "1.0", enhancedStreamMode: 1, useOps: true, clientDisplayHdrCapabilities: null, accountLinked: null !== (l2 = t5.accountLinked) && void 0 !== l2 && l2, partnerCustomData: null !== (u2 = t5.partnerCustomData) && void 0 !== u2 ? u2 : "", enablePersistingInGameSettings: null !== (h2 = t5.enablePersistingInGameSettings) && void 0 !== h2 && h2, secureRTSPSupported: false, userAge: null !== (p2 = t5.userAge) && void 0 !== p2 ? p2 : 0, requestedStreamingFeatures: t5.streamingFeatures }, Ke.ee || "browser" === e4.clientPlatformName ? s3.metaData.push({ key: "GSStreamerType", value: "WebRTC" }) : s3.secureRTSPSupported = true;
              for (const e5 in t5.metaData) s3.metaData.push({ key: e5, value: t5.metaData[e5] });
              return e4 = i4 ? JSON.stringify({ action: 2, data: "RESUME", sessionRequestData: s3, metaData: [] }) : JSON.stringify({ sessionRequestData: s3 }), d.i("{1daeef1}", "{c6c3ed4}", i4 ? "PUT" : "POST", U(e4)), e4;
            }
            function St(e4, t5, i4, n4) {
              var s3, r3, o2;
              if (e4.g) try {
                const a2 = { code: t5, subSessionId: null !== (s3 = e4.g.subSessionId) && void 0 !== s3 ? s3 : "", session: e4.g.ug, zoneName: i4, activeSessions: n4 }, c2 = e4.g.Kd;
                c2.result = g(t5), c2.zoneName = null != i4 ? i4 : "", c2.sessionId = null !== (r3 = e4.g.sessionId) && void 0 !== r3 ? r3 : "", c2.launchDuration += performance.now() - e4.g.startTime, Ye(e4.g.Kd), lt(t5), d.d("{1daeef1}", "{c4902fa}", g(t5), null !== (o2 = e4.g.sessionId) && void 0 !== o2 ? o2 : ""), e4.g.resolve(a2), e4.g = void 0, e4.l.clear(), Ne(e4.h);
              } catch (t6) {
                e4.g && (e4.g.reject(t6), e4.g = void 0);
              }
            }
            var bt = class {
              constructor() {
                var e4, t5, i4, n4, s3, r3, o2, a2, d2, c2, l2, u2, h2, p2, f2, v2, m2, g2, A2, S2, b2, w2;
                let y2;
                this.v = /* @__PURE__ */ new Map(), this.o = { ...C }, this.C = { type: 1 }, this.s = /* @__PURE__ */ new Map(), this.protocol = "https://", this.h = new Le(), this.l = /* @__PURE__ */ new Map(), this.clientPlatformName = this.deviceId = this.serverAddress = "", y2 = 0 + (null !== (t5 = null === (e4 = Ke.Ga.pmCommunication) || void 0 === e4 ? void 0 : e4.httpConnectionTimeout) && void 0 !== t5 ? t5 : 0), y2 += null !== (n4 = null === (i4 = Ke.Ga.pmCommunication) || void 0 === i4 ? void 0 : i4.httpDataReceiveTimeout) && void 0 !== n4 ? n4 : 0, this.o.timeout = y2 ? 1e3 * y2 : 13e3, this.o.retryCount = null !== (r3 = null === (s3 = Ke.Ga.pmCommunication) || void 0 === s3 ? void 0 : s3.httpRetryCount) && void 0 !== r3 ? r3 : 3, this.o.hg = null !== (a2 = null === (o2 = Ke.Ga.pmCommunication) || void 0 === o2 ? void 0 : o2.httpBackOffDelay) && void 0 !== a2 ? a2 : 500, this.m = { wg: null !== (c2 = null === (d2 = Ke.Ga.pmCommunication) || void 0 === d2 ? void 0 : d2.pollingIntervalMin) && void 0 !== c2 ? c2 : 1e3, vg: null !== (u2 = null === (l2 = Ke.Ga.pmCommunication) || void 0 === l2 ? void 0 : l2.pollingIntervalMax) && void 0 !== u2 ? u2 : 1e4, step: null !== (p2 = null === (h2 = Ke.Ga.pmCommunication) || void 0 === h2 ? void 0 : h2.pollingIntervalStep) && void 0 !== p2 ? p2 : 1e3, Jf: null !== (v2 = null === (f2 = Ke.Ga.pmCommunication) || void 0 === f2 ? void 0 : f2.pollingQueueSizePerStep) && void 0 !== v2 ? v2 : 50, adsPollingIntervalMinMS: null !== (g2 = null === (m2 = Ke.Ga.pmCommunication) || void 0 === m2 ? void 0 : m2.adsPollingIntervalMinMS) && void 0 !== g2 ? g2 : 3e3, adsThrottleIntervalMS: null !== (S2 = null === (A2 = Ke.Ga.pmCommunication) || void 0 === A2 ? void 0 : A2.adsThrottleIntervalMS) && void 0 !== S2 ? S2 : 2e3, adsWaitTimeoutS: null !== (w2 = null === (b2 = Ke.Ga.pmCommunication) || void 0 === b2 ? void 0 : b2.adsWaitTimeoutS) && void 0 !== w2 ? w2 : 600 };
              }
              setAuthInfo(e4) {
                this.C = e4;
              }
              setNetworkType(e4) {
                tt.setNetworkType(e4);
              }
              startSession(e4, t5, i4) {
                return l(c(), "StartSession", () => (at(this), dt(this, e4, t5, i4)));
              }
              resumeSession(e4, t5, i4, n4) {
                return l(c(), "ResumeSession", () => (at(this), dt(this, t5, i4, n4, e4)));
              }
              deleteSession(e4, t5) {
                return l(c(), "DeleteSession", () => (at(this), ct(this) ? ht(this, 2, ut(this, e4), "", t5, e4).then((t6) => (15859712 == t6.result ? (this.v.delete(e4), d.d("{1daeef1}", "{6206c13}", e4)) : d.e("{1daeef1}", "{4de47e3}", e4, g(t6.result)), lt(t6.result), t6.result)).catch((e5) => (pt(e5, "deleteSession"), lt(3237093384), 3237093384)) : (d.e("{1daeef1}", "{4fed44a}"), lt(3237085186), Promise.resolve(3237085186))));
              }
              getActiveSessions(e4) {
                return l(c(), "GetSessionList", () => (at(this), ct(this) ? ht(this, 5, this.protocol + this.serverAddress + "/v2/session", "", e4).then((e5) => (lt((e5 = { code: e5.result, activeSessions: e5.activeSessions, zoneName: e5.serverId }).code), 15859712 !== e5.code ? d.e("{1daeef1}", "{9d2bb75}", g(e5.code)) : d.d("{1daeef1}", "{081857f}"), e5)).catch((e5) => (pt(e5, "getActiveSessions"), lt((e5 = { code: 3237093384 }).code), e5)) : (d.e("{1daeef1}", "{dc27839}"), lt(3237085186), Promise.resolve({ code: 3237085186 }))));
              }
              getSessionInfo(e4, t5) {
                return l(c(), "GetSession", () => ht(this, 3, ut(this, e4), "", t5, e4).then((e5) => (15859712 !== (e5 = { code: e5.result, session: e5.session, zoneName: e5.serverId }).code ? d.e("{1daeef1}", "{021d0f4}", g(e5.code)) : d.d("{1daeef1}", "{fa53c7c}"), e5)).catch((e5) => (pt(e5, "getSessionInfo"), lt((e5 = { code: 3237093384 }).code), e5)));
              }
              I() {
                return !!this.g;
              }
              updateAdState(e4) {
                if (!this.I()) return d.e("{1daeef1}", "{20d9281}"), 3237085186;
                const t5 = this.l.get(e4.adId);
                if (!t5) return d.e("{1daeef1}", "{74daa9c}", e4.adId), 3237093386;
                const i4 = function(e5) {
                  switch (e5) {
                    case 1:
                      return 2;
                    case 2:
                      return 3;
                    case 3:
                      return 4;
                    case 4:
                      return 5;
                    case 5:
                      return 6;
                    default:
                      return 0;
                  }
                }(e4.adAction);
                if (!function(e5, t6) {
                  switch (t6) {
                    case 2:
                      return 1 == e5 || 0 == e5;
                    case 3:
                    case 5:
                      return 2 == e5 || 4 == e5;
                    case 4:
                      return 3 == e5;
                    case 6:
                      return 5 != e5;
                    default:
                      return false;
                  }
                }(t5.ed, i4)) return d.e("{1daeef1}", "{09d8184}", e4.adAction, e4.adId, t5.ed), 3237093386;
                if (this.h.length) {
                  const t6 = this.h[this.h.length - 1].adId;
                  if (t6 !== e4.adId) {
                    const e5 = this.h[this.h.length - 1].adAction;
                    if (4 != e5 && 5 != e5) return d.e("{1daeef1}", "{c161587}", t6), 3237093386;
                  }
                }
                return e4.clientTimestamp || (e4.clientTimestamp = Math.round(Date.now() / 1e3)), this.h.push(e4), t5.ed = i4, this.l.set(e4.adId, t5), 15859712;
              }
              M() {
                var e4, t5;
                this.g && ht(this, 3, ut(this, null !== (e4 = this.g.sessionId) && void 0 !== e4 ? e4 : ""), "", this.g.Tc, null !== (t5 = this.g.sessionId) && void 0 !== t5 ? t5 : "").then((e5) => {
                  this.O(e5);
                }).catch((e5) => {
                  this.N(e5);
                });
              }
              N(e4) {
                d.e("{1daeef1}", "{e3be7ea}", e4.message), Ze(e4, "processSessionSetupException", "sessioncontrolimpl.ts"), St(this, 3237093384);
              }
              O(e4) {
                var t5, i4, n4;
                if (this.g) {
                  var s3 = () => {
                    St(this, r3.dd ? 15867906 : 15867905);
                  }, r3 = this.g;
                  if (e4.session && (e4.session.subSessionId = this.g.subSessionId, this.g.ug = e4.session, this.g.sessionId = e4.session.sessionId, r3.dd = 1 == e4.kd.session.seatSetupInfo.seatSetupStep), 15859712 === e4.result && e4.session) {
                    const o2 = e4.session;
                    "ready_for_connection" === o2.state || "streaming" === o2.state ? ("streaming" == o2.state && function() {
                      var e5 = tt;
                      const t6 = new Fe({ key1: "InvalidSessionStateTransition", key2: "Streaming", key3: "", key4: "", key5: "", moduleName: "GRID_SERVER", networkType: e5.networkType, overrideConfigType: Ke.Vb.type, overrideConfigVersion: Ke.Vb.version, cmsId: String(e5.cmsId), sessionId: e5.sessionId, subSessionId: e5.subSessionId });
                      e5.h(t6);
                    }(), d.i("{1daeef1}", "{30d6f44}", null !== (t5 = this.g.sessionId) && void 0 !== t5 ? t5 : ""), St(this, 15859712, e4.serverId)) : "initializing" == o2.state || "resuming" == o2.state ? (t5 = function(e5, t6, i5, n5) {
                      var s4, r4, o3, a2, d2, c2, l2 = "Configuring", u2 = 0;
                      if (t6.seatSetupInfo) switch (t6.seatSetupInfo.seatSetupStep) {
                        case 0:
                          l2 = "Connecting";
                          break;
                        case 1:
                          l2 = "InQueue", u2 = t6.seatSetupInfo.queuePosition < i5 ? t6.seatSetupInfo.queuePosition : i5;
                          break;
                        case 5:
                          l2 = "PreviousSessionCleanup";
                          break;
                        default:
                          u2 = 0;
                      }
                      if (i5 = { sessionId: t6.sessionId, subSessionId: n5, queuePosition: u2, eta: null !== (r4 = null === (s4 = t6.seatSetupInfo) || void 0 === s4 ? void 0 : s4.seatSetupEta) && void 0 !== r4 ? r4 : 0, progressState: l2, isAdsRequired: t6.sessionAdsRequired, ads: [] }, s4 = new Map(e5.l), e5.l.clear(), t6.sessionAds) for (r4 = t6.sessionAds.length, l2 = 0; l2 < r4; l2++) {
                        if (5 == (n5 = t6.sessionAds[l2]).adState || 6 == n5.adState) continue;
                        u2 = n5.adId, e5.l.set(u2, { Xg: n5.adState, ed: null !== (a2 = null === (o3 = s4.get(u2)) || void 0 === o3 ? void 0 : o3.ed) && void 0 !== a2 ? a2 : 0 }), u2 = { adId: u2, adState: n5.adState, adUrl: n5.adUrl, adLengthInSeconds: n5.adLengthInSeconds, adMediaFiles: [] };
                        const r5 = null !== (c2 = null === (d2 = n5.adMediaFiles) || void 0 === d2 ? void 0 : d2.length) && void 0 !== c2 ? c2 : 0;
                        for (let e6 = 0; e6 < r5; e6++) {
                          const t7 = n5.adMediaFiles[e6];
                          u2.adMediaFiles.push({ mediaFileUrl: t7.mediaFileUrl, encodingProfile: t7.encodingProfile });
                        }
                        i5.ads.push(u2);
                      }
                      return i5;
                    }(this, e4.kd.session, this.g.Jd, this.g.subSessionId), this.g.Uf(t5), r3.dd && (this.g.Jd = t5.queuePosition), t5.ads.length ? mt(this, null !== (i4 = r3.sessionId) && void 0 !== i4 ? i4 : "", r3.Tc, this.O.bind(this), this.N.bind(this), s3, this.M.bind(this)) : new p(function(e5, t6) {
                      let i5 = e5.m.wg;
                      return 1 === t6.seatSetupInfo.seatSetupStep && 0 != e5.m.Jf && (i5 += Math.floor(t6.seatSetupInfo.queuePosition / e5.m.Jf) * e5.m.step), t6.sessionAdsRequired && (i5 = Math.max(i5, e5.m.adsPollingIntervalMinMS)), Math.min(i5, e5.m.vg);
                    }(this, e4.kd.session), null === (n4 = this.g.Tc) || void 0 === n4 ? void 0 : n4.signal).promise.then(this.M.bind(this)).catch(s3)) : (d.e("{1daeef1}", "{ce47cd1}", wt(JSON.stringify(e4.kd))), St(this, 3237093378, e4.serverId));
                  } else 15867907 === e4.result ? s3() : St(this, e4.result, e4.serverId, e4.activeSessions);
                }
              }
            };
            function wt(e4) {
              return U(e4).replace(/("clientIp" *: *")(\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b)(?=")/g, "$1***");
            }
            var yt = { Success: 15859712, InvalidOperation: 3237085186, NetworkError: 3237089282, GetActiveSessionServerError: 3237089283, AuthTokenNotUpdated: 3237093377, SessionFinishedState: 3237093378, ResponseParseFailure: 3237093379, InvalidServerResponse: 3237093381, PutOrPostInProgress: 3237093382, GridServerNotInitialized: 3237093383, DOMExceptionInSessionControl: 3237093384, InvalidAdStateTransition: 3237093386, SessionServerErrorBegin: 3237093632, RequestForbidden: 3237093634, ServerInternalTimeout: 3237093635, ServerInternalError: 3237093636, ServerInvalidRequest: 3237093637, ServerInvalidRequestVersion: 3237093638, SessionListLimitExceeded: 3237093639, InvalidRequestDataMalformed: 3237093640, InvalidRequestDataMissing: 3237093641, RequestLimitExceeded: 3237093642, SessionLimitExceeded: 3237093643, InvalidRequestVersionOutOfDate: 3237093644, SessionEntitledTimeExceeded: 3237093645, AuthFailure: 3237093646, InvalidAuthenticationMalformed: 3237093647, InvalidAuthenticationExpired: 3237093648, InvalidAuthenticationNotFound: 3237093649, EntitlementFailure: 3237093650, InvalidAppIdNotAvailable: 3237093651, InvalidAppIdNotFound: 3237093652, InvalidSessionIdMalformed: 3237093653, InvalidSessionIdNotFound: 3237093654, EulaUnAccepted: 3237093655, MaintenanceStatus: 3237093656, ServiceUnAvailable: 3237093657, SteamGuardRequired: 3237093658, SteamLoginRequired: 3237093659, SteamGuardInvalid: 3237093660, SteamProfilePrivate: 3237093661, InvalidCountryCode: 3237093662, InvalidLanguageCode: 3237093663, MissingCountryCode: 3237093664, MissingLanguageCode: 3237093665, SessionNotPaused: 3237093666, EmailNotVerified: 3237093667, InvalidAuthenticationUnsupportedProtocol: 3237093668, InvalidAuthenticationUnknownToken: 3237093669, InvalidAuthenticationCredentials: 3237093670, SessionNotPlaying: 3237093671, InvalidServiceResponse: 3237093672, AppPatching: 3237093673, GameNotFound: 3237093674, NotEnoughCredits: 3237093675, InvitationOnlyRegistration: 3237093676, RegionNotSupportedForRegistration: 3237093677, SessionTerminatedByAnotherClient: 3237093678, DeviceIdAlreadyUsed: 3237093679, ServiceNotExist: 3237093680, SessionExpired: 3237093681, SessionLimitPerDeviceReached: 3237093682, ForwardingZoneOutOfCapacity: 3237093683, RegionNotSupportedIndefinitely: 3237093684, RegionBanned: 3237093685, RegionOnHoldForFree: 3237093686, RegionOnHoldForPaid: 3237093687, AppMaintenanceStatus: 3237093688, ResourcePoolNotConfigured: 3237093689, InsufficientVmCapacity: 3237093690, InsufficientRouteCapacity: 3237093691, InsufficientScratchSpaceCapacity: 3237093692, RequiredSeatInstanceTypeNotSupported: 3237093693, ServerSessionQueueLengthExceeded: 3237093694, RegionNotSupportedForStreaming: 3237093695, SessionForwardRequestAllocationTimeExpired: 3237093696, SessionForwardGameBinariesNotAvailable: 3237093697, GameBinariesNotAvailableInRegion: 3237093698, UekRetrievalFailed: 3237093699, EntitlementFailureForResource: 3237093700, SessionInQueueAbandoned: 3237093701, MemberTerminated: 3237093702, SessionRemovedFromQueueMaintenance: 3237093703, ZoneMaintenanceStatus: 3237093704, GuestModeCampaignDisabled: 3237093705, RegionNotSupportedAnonymousAccess: 3237093706, InstanceTypeNotSupportedInSingleRegion: 3237093707, InvalidZoneForQueuedSession: 3237093710, SessionWaitingAdsTimeExpired: 3237093711, UserCancelledWatchingAds: 3237093712, StreamingNotAllowedInLimitedMode: 3237093713, ForwardRequestJPMFailed: 3237093714, MaxSessionNumberLimitExceeded: 3237093715, GuestModePartnerCapacityDisabled: 3237093716, SessionRejectedNoCapacity: 3237093717, SessionServerErrorEnd: 3237093887, SessionSetupCancelled: 15867905, SessionSetupCancelledDuringQueuing: 15867906, RequestCancelled: 15867907, NoInternetDuringSessionSetup: 15868417 }, Et = o.Og;
            function Ct(e4) {
              var t5 = { ip: "", port: 0, protocol: "" };
              for (const i4 of e4.connectionInfo) if (14 === i4.usage) {
                t5.ip = i4.ip, t5.port = i4.port, t5.protocol = 5 === i4.appLevelProtocol ? "https" : "http", t5.resourcePath = i4.resourcePath;
                break;
              }
              t5 = { signalConnectionInfo: t5, mediaConnectionInfo: e4.connectionInfo, streamInfo: [], clientLocale: "", ...e4 };
              for (const i4 of e4.monitorSettings) t5.streamInfo.push({ width: i4.widthInPixels, height: i4.heightInPixels, fps: i4.framesPerSecond, sdrHdrMode: i4.sdrHdrMode });
              return t5;
            }
            function Tt(e4) {
              let t5 = [];
              if (e4) for (const i4 of e4) t5.push({ sessionId: i4.sessionId, appId: i4.appId, state: i4.state, appLaunchMode: i4.appLaunchMode });
              return t5;
            }
            function It(e4, t5, i4 = "") {
              d.d("{6bae601}", "{1e04fe6}", i4, t5), e4.subSessionId = t5, tt.sessionId = i4, et(t5);
              const n4 = e4.P.get(t5);
              void 0 === n4 || "" === n4 ? e4.P.set(t5, i4) : d.w("{6bae601}", "{7dd264b}", i4);
            }
            function Rt(e4) {
              return lt(e4.code, e4.description), Promise.reject(e4);
            }
            function kt(e4, t5) {
              e4.zoneAddress = t5.zoneAddress || e4.zoneAddress, e4.zoneName = t5.zoneName || e4.zoneName, e4.gpuType = t5.gpuType || e4.gpuType;
            }
            var Pt = class extends bt {
              constructor(e4, t5) {
                super(), this.subSessionId = "", this.P = /* @__PURE__ */ new Map(), this.R = false, this.L = /* @__PURE__ */ new Map(), this.S = (e5) => {
                  this.j.emit("TelemetryEvent", e5);
                }, this.T = (e5) => {
                  this.j.emit("SessionUpdate", e5), this.j.emit("ProgressUpdate", { sessionId: e5.sessionId, subSessionId: e5.subSessionId, queuePosition: e5.queuePosition, eta: e5.eta, state: e5.progressState });
                }, this.u = e4, this.j = new Ce(t5), d.isCallbackRegistered() || (this.R = true, d.setLogCallback(this.j.$.bind(this.j))), tt.configure({ option: this.S });
              }
              initialize(e4) {
                var t5;
                d.i("{6bae601}", "{6802390}", "0.66.9"), ot(this, { deviceId: null !== (t5 = e4.deviceHashId) && void 0 !== t5 ? t5 : "", ...e4, clientStreamer: e4.clientStreamer.toString() }), (e4 = tt).telemetryEventIds = {}, e4.sessionId = "", e4.subSessionId = "", e4.cmsId = "", d.d("{6bae601}", "{5af3344}");
              }
              uninitialize() {
                this.cancelSessionSetup(), this.R && d.setLogCallback(), this.j.removeAllListeners();
              }
              addListener(e4, t5) {
                this.j.addListener(e4, t5);
              }
              removeListener(e4, t5) {
                this.j.removeListener(e4, t5);
              }
              updateTelemetryEventIds(e4) {
                tt.updateTelemetryEventIds(e4);
              }
              getAllActiveSessions() {
                l(c(), "GetSessionList", () => (at(this), async function(e4) {
                  d.d("{6bae601}", "{1aef200}"), e4.serverAddress ? (await ht(e4, 5, e4.protocol + e4.serverAddress + "/v2/session", "").then((t5) => {
                    let i4 = { sessionList: Tt(t5.activeSessions) };
                    if (15859712 != t5.result) {
                      let e5 = { code: t5.result, description: rt(t5.result) };
                      i4.error = e5, d.e("{6bae601}", "{9d2bb75}", g(e5.code));
                    } else d.d("{6bae601}", "{081857f}");
                    lt(t5.result), e4.j.emit("ActiveSessionsResult", i4);
                  }).catch((t5) => {
                    d.e("{6bae601}", "{63f9b57}", t5.message), d.e("{6bae601}", "{94d55bb}", t5, t5.stack), Ze(t5, "getAllActiveSessions", "gridserver.ts"), t5 = { sessionList: [], error: { code: 3237093384, description: rt(3237093384) } }, lt(3237093384), e4.j.emit("ActiveSessionsResult", t5);
                  }), d.d("{6bae601}", "{a9e5439}")) : (e4.j.emit("ActiveSessionsResult", { sessionList: [], error: { code: 3237093383, description: "GridServer not initialized" } }), lt(3237093383));
                }(this)));
              }
              getSessionId() {
                var e4;
                return null !== (e4 = this.P.get(this.subSessionId)) && void 0 !== e4 ? e4 : "";
              }
              getSubSessionId() {
                return this.subSessionId;
              }
              putOrPostSession(e4, t5, i4) {
                return l(c(), i4 ? "PutSession" : "PostSession", () => (at(this), function(e5, t6, i5) {
                  var n4;
                  const s3 = !!i5;
                  if (It(e5, D(), i5), !e5.serverAddress) return Rt({ code: 3237093383, description: "GridServer not initialized" });
                  if (e5.F) return Rt({ code: 3237093382, description: "Previous PutOrPost call is still in progress" });
                  tt.cmsId = t6.appId, e5.zoneName = void 0, e5.zoneAddress = void 0, e5.gpuType = void 0;
                  const r3 = Xe(e5.serverAddress, s3, i5);
                  r3.networkSessionId = null !== (n4 = t6.networkSessionId) && void 0 !== n4 ? n4 : "", t6 = function(e6) {
                    var t7;
                    const i6 = { monitorSettings: [], ...e6 };
                    if (0 === i6.monitorSettings.length) for (const n5 of null !== (t7 = e6.streamParams) && void 0 !== t7 ? t7 : []) i6.monitorSettings.push({ heightInPixels: n5.height, framesPerSecond: n5.fps, widthInPixels: n5.width });
                    return i6;
                  }(t6);
                  let o2 = gt(e5, t6, i5), a2 = At(e5, t6, s3, e5.subSessionId), c2 = performance.now();
                  return new Promise((t7, n5) => {
                    const l2 = new AbortController();
                    e5.F = l2, ht(e5, s3 ? 1 : 0, o2, a2, l2, i5).then((s4) => {
                      var o3, a3, u2, h2, p2;
                      let f2;
                      r3.launchDuration = Math.round(performance.now() - c2), null !== (o3 = s4.session) && void 0 !== o3 && o3.sessionId && (r3.sessionId = null === (a3 = s4.session) || void 0 === a3 ? void 0 : a3.sessionId, i5 = null === (u2 = s4.session) || void 0 === u2 ? void 0 : u2.sessionId), e5.zoneName = s4.serverId || e5.zoneName, s4.session && (f2 = Ct(s4.session), f2.subSessionId = e5.subSessionId, kt(e5, f2)), r3.zoneName = null !== (h2 = e5.zoneName) && void 0 !== h2 ? h2 : "", l2.signal.aborted && !it(s4.result) && (s4.result = 15867905, d.d("{6bae601}", "{3ec0e11}")), 15859712 == s4.result ? (d.d("{6bae601}", "{30536f4}", i5), It(e5, e5.getSubSessionId(), i5), "ready_for_connection" == (null === (p2 = s4.session) || void 0 === p2 ? void 0 : p2.state) ? (r3.result = g(15859712), Ye(r3)) : e5.L.set(r3.sessionId, r3), lt(s4.result), t7(f2)) : (15867907 === s4.result && (s4.result = 15867905), s4 = { code: s4.result, sessionId: i5, description: rt(s4.result), sessionList: Tt(s4.activeSessions) }, d.e("{6bae601}", "{17f93f3}", g(s4.code)), r3.result = g(s4.code), Ye(r3), lt(s4.code), n5(s4));
                    }).catch((e6) => {
                      let t8 = { code: 3237093384, sessionId: i5, description: rt(3237093384) };
                      d.e("{6bae601}", "{4318505}", e6.message), d.e("{6bae601}", "{94d55bb}", e6, e6.stack), Ze(e6, "putOrPostSession", "gridserver.ts"), r3.result = g(t8.code), Ye(r3), lt(t8.code), n5(t8);
                    });
                  }).finally(() => {
                    e5.F = void 0;
                  });
                }(this, e4, i4)));
              }
              getSession(e4, t5) {
                return l(c(), "GetSession", () => (at(this), function(e5, t6, i4) {
                  return e5.serverAddress ? i4 ? new Promise((i5, n4) => {
                    var s3 = ut(e5, t6), r3 = new URL(s3).hostname;
                    (s3 = e5.L.get(t6)) ? e5.L.delete(t6) : (d.e("{6bae601}", "{bb9b2e3}", t6), s3 = Xe(r3, false, t6)), r3 = new AbortController(), e5.H = r3, e5.g = { resolve: i5, reject: n4, sessionId: t6, subSessionId: e5.subSessionId, Uf: e5.T, Jd: Number.MAX_VALUE, dd: false, Tc: r3, startTime: performance.now(), Kd: s3 }, e5.M();
                  }).then((t7) => {
                    let i5;
                    if (t7.session && (i5 = Ct(t7.session), kt(e5, i5)), 15859712 === t7.code && i5) return i5;
                    throw { code: t7.code, description: rt(t7.code) };
                  }).finally(() => {
                    e5.l.clear(), Ne(e5.h), e5.g = void 0;
                  }) : (i4 = ut(e5, t6), ht(e5, 3, i4, "", void 0, t6).then((e6) => {
                    if (lt(e6.result), 15859712 === e6.result && e6.session) return Ct(e6.session);
                    throw { code: e6.result, description: rt(e6.result) };
                  })) : Rt({ code: 3237093383, description: "GridServer not initialized" });
                }(this, e4, t5)));
              }
              sendDeleteRequest(e4) {
                return l(c(), "DeleteSession", () => (at(this), function(e5, t5) {
                  if (!e5.serverAddress) return Rt({ code: 3237093383, description: "Gridserver not initialized" });
                  let i4 = ut(e5, t5);
                  return new Promise((n4, s3) => {
                    d.d("{6bae601}", "{bbad3ce}", t5), ht(e5, 2, i4, "", void 0, t5).then((e6) => {
                      if (15859712 == e6.result) d.d("{6bae601}", "{6206c13}", t5), n4();
                      else {
                        let i5 = { code: e6.result, description: rt(e6.result), sessionId: t5 };
                        d.e("{6bae601}", "{4de47e3}", t5, g(e6.result)), s3(i5);
                      }
                      lt(e6.result);
                    }).catch((e6) => {
                      const t6 = { code: 3237093384, description: rt(3237093384) };
                      d.e("{6bae601}", "{c4f620c}", e6.message), d.e("{6bae601}", "{94d55bb}", e6, e6.stack), Ze(e6, "sendDeleteRequestImpl", "gridserver.ts"), s3(t6);
                    });
                  });
                }(this, e4)));
              }
              cancelSessionSetup() {
                var e4, t5;
                d.i("{6bae601}", "{c73e640}"), null === (e4 = this.F) || void 0 === e4 || e4.abort(), null === (t5 = this.H) || void 0 === t5 || t5.abort(), this.H = this.F = void 0;
              }
              getZoneName() {
                var e4;
                return null !== (e4 = this.zoneName) && void 0 !== e4 ? e4 : "";
              }
              getZoneAddress() {
                var e4;
                return null !== (e4 = this.zoneAddress) && void 0 !== e4 ? e4 : "";
              }
              getGpuType() {
                var e4;
                return null !== (e4 = this.gpuType) && void 0 !== e4 ? e4 : "";
              }
              I() {
                return !!this.H;
              }
            }, Dt = class extends Pt {
              constructor() {
                super();
              }
              getAllActiveSessions() {
                window.setTimeout(() => {
                  d.d("{6bae601}", "{b575263}"), this.j.emit("ActiveSessionsResult", { sessionList: [] });
                }, 1);
              }
              putOrPostSession(e4) {
                var t5;
                return d.d("{6bae601}", "{71c010f}"), It(this, D(), null !== (t5 = e4.sessionId) && void 0 !== t5 ? t5 : "PassThruSessionId"), new Promise((t6) => {
                  window.setTimeout(() => {
                    var i4;
                    let n4 = { sessionId: this.getSessionId(), subSessionId: this.getSubSessionId(), appId: parseInt(e4.appId), state: "ready_for_connection", signalConnectionInfo: { ip: "", port: 49100, protocol: "http" }, mediaConnectionInfo: [], streamInfo: [], appLaunchMode: e4.appLaunchMode ? e4.appLaunchMode : 0, zoneName: this.getZoneName(), zoneAddress: this.getZoneAddress(), gpuType: this.getGpuType(), clientLocale: "", finalizedStreamingFeatures: null !== (i4 = e4.streamingFeatures) && void 0 !== i4 ? i4 : {} };
                    if (this.serverAddress && (n4.signalConnectionInfo.ip = this.serverAddress), e4.connectionInfo) {
                      n4.mediaConnectionInfo = e4.connectionInfo;
                      for (const e5 of n4.mediaConnectionInfo) 14 === e5.usage && (n4.signalConnectionInfo.ip = e5.ip, n4.signalConnectionInfo.port = e5.port, n4.signalConnectionInfo.protocol = 5 === e5.appLevelProtocol ? "https" : "http", n4.signalConnectionInfo.resourcePath = e5.resourcePath, d.d("{6bae601}", "{c6b8e0f}", e5.ip, e5.port));
                    }
                    if (n4.signalConnectionInfo.ip || d.e("{6bae601}", "{a43f57e}"), e4.monitorSettings) for (const t7 of e4.monitorSettings) n4.streamInfo.push({ width: t7.widthInPixels, height: t7.heightInPixels, fps: t7.framesPerSecond, sdrHdrMode: t7.sdrHdrMode });
                    else for (const t7 of e4.streamParams) n4.streamInfo.push({ width: t7.width, height: t7.height, fps: t7.fps });
                    d.d("{6bae601}", "{07dc276}", n4.sessionId), t6(n4);
                  }, 1);
                });
              }
              getSession() {
                return new Promise((e4, t5) => {
                  t5({ code: -1, description: "PassthruPollingNotSupported" });
                });
              }
              sendDeleteRequest() {
                return new Promise((e4) => {
                  e4();
                });
              }
              updateAdState() {
                return -1;
              }
            }, Ot = { VIDEO: "video", AUDIO: "audio" }, Mt = { Unknown: 0, ApproachingEntitlementTimeout: 1, ApproachingIdleTimeout: 2, ApproachingSessionMaxTimeLimit: 3, ClearUserIdleTimeOut: 4 }, Nt = { allowUnconfined: false, preventNavigation: false };
            function Lt(e4) {
              if (!((15868672 ^ e4) >> 8)) return 256;
              let t5 = 32769;
              switch (e4) {
                case 15859712:
                case 15867908:
                case 15868418:
                  t5 = 0;
                  break;
                case 3237093894:
                case 3237093899:
                  t5 = 32776;
                  break;
                case 3237093898:
                  t5 = 32772;
                  break;
                case 3237093900:
                  t5 = 32773;
                  break;
                case 3237093901:
                  t5 = 32770;
                  break;
                case 15867910:
                  t5 = 1;
                  break;
                default:
                  d.d("{c00be32}", "{233ad08}", g(e4));
              }
              return t5;
            }
            function xt(e4) {
              let t5 = 15868672;
              switch (e4) {
                case 256:
                  t5 = 15868704;
                  break;
                case 257:
                  t5 = 15868705;
                  break;
                case 258:
                  t5 = 15868706;
                  break;
                case 259:
                  t5 = 15868707;
                  break;
                case 260:
                  t5 = 15868708;
                  break;
                case 261:
                  t5 = 15868709;
                  break;
                case 262:
                  t5 = 15868710;
                  break;
                case 263:
                  t5 = 15868711;
                  break;
                case 264:
                  t5 = 15868712;
                  break;
                case 265:
                  t5 = 15868713;
                  break;
                case 266:
                  t5 = 15868714;
                  break;
                case 267:
                  t5 = 15868715;
                  break;
                case 268:
                  t5 = 15868716;
                  break;
                case 269:
                  t5 = 15868719;
                  break;
                case 270:
                  t5 = 15868688;
                  break;
                case 512:
                  t5 = 15868736;
                  break;
                case 513:
                  t5 = 15868737;
                  break;
                case 514:
                  t5 = 15868738;
                  break;
                case 515:
                  t5 = 15868739;
                  break;
                case 516:
                  t5 = 15868740;
                  break;
                case 517:
                  t5 = 15868741;
                  break;
                case 518:
                  t5 = 15868742;
                  break;
                case 519:
                  t5 = 15868743;
                  break;
                case 520:
                  t5 = 15868744;
                  break;
                case 521:
                  t5 = 15868745;
                  break;
                case 33025:
                  t5 = 3237094145;
                  break;
                case 33026:
                  t5 = 3237094146;
                  break;
                case 33027:
                  t5 = 3237094147;
                  break;
                case 33028:
                  t5 = 3237094148;
                  break;
                case 33029:
                  t5 = 3237094149;
                  break;
                case 33030:
                  t5 = 3237094150;
                  break;
                case 33031:
                  t5 = 3237094151;
                  break;
                case 33032:
                  t5 = 3237094152;
                  break;
                case 33034:
                  t5 = 3237094153;
                  break;
                case 33035:
                  t5 = 3237094154;
                  break;
                case 33040:
                  t5 = 3237094155;
                  break;
                case 33041:
                  t5 = 3237094156;
                  break;
                case 33042:
                  t5 = 3237094157;
                  break;
                case 37634:
                  t5 = 15868718;
                  break;
                case 32768:
                  t5 = 3237094158;
                  break;
                case 768:
                  t5 = 15868717;
                  break;
                case 0:
                  t5 = 15868752;
                  break;
                default:
                  d.d("{c00be32}", "{1be40ed}", g(e4));
              }
              return t5;
            }
            function Ft() {
              return Ut || (Ut = new Ei()), Ut;
            }
            function _t(e4) {
              "white" === e4.h ? e4.g && (e4.g.clearColor(1, 0, 0, 1), e4.g.clear(e4.g.COLOR_BUFFER_BIT), e4.h = "red") : e4.g && (e4.g.clearColor(1, 1, 1, 1), e4.g.clear(e4.g.COLOR_BUFFER_BIT), e4.h = "white");
            }
            var Ut, jt, Gt, Bt, Vt, Ht, Wt, zt, Kt, qt, $t, Jt, Xt, Qt, Yt, Zt, ei, ti, ii, ni, si, ri, oi, ai, di, ci, li, ui, hi, pi, fi, vi, mi, gi, Ai, Si, bi, wi, yi, Ei = class {
              constructor() {
                this.g = null, this.h = "";
              }
              initialize(e4, t5) {
                this.u = t5, t5 = "ragnarok-latency-indicator";
                var i4 = document.getElementById(t5);
                if (i4 && i4 instanceof HTMLCanvasElement && i4.parentElement === e4.parentElement) e4 = i4;
                else {
                  if (i4) do {
                    t5 = "ragnarok-latency-indicator" + Math.round(1e4 * Math.random()), i4 = document.getElementById(t5);
                  } while (i4);
                  (i4 = document.createElement("canvas")).id = t5, i4.style.position = "fixed", v(this.u) ? (i4.style.bottom = "env(safe-area-inset-bottom, 0)", i4.style.right = "max(24px, env(safe-area-inset-right, 0))") : (i4.style.bottom = "0", i4.style.right = "0"), i4.style.width = "40px", i4.style.height = "40px", i4.style.zIndex = "300", i4.style.pointerEvents = "none", e4.insertAdjacentElement("afterend", i4), e4 = i4;
                }
                this.j = e4, this.j.style.display = "block", this.g = this.j.getContext("webgl"), _t(this);
              }
            }, Ci = {}, Ti = "", Ii = { type: "UNKNOWN", version: "" }, Ri = false, ki = true, Pi = false, Di = true, Oi = true, Mi = true, Ni = 0, Li = 0, xi = 0, Fi = false, _i = true, Ui = false, ji = true, Gi = false, Bi = false, Vi = false, Hi = false, Wi = true, zi = false, Ki = true, qi = true, $i = true, Ji = true, Xi = true, Qi = 0, Yi = true, Zi = true, en = {};
            function tn(e4) {
              if (e4 && (e4 = Number.parseInt(e4), !Number.isNaN(e4))) return e4;
            }
            function nn(e4) {
              var t5, i4, n4, s3, r3, o2, a2, c2, l2, u2, h2, p2, f2, v2, m2, g2, A2, S2, b2, w2, y2, E2, C2, T2, I2, R2, k2, P2, D2, O2, M2, N2, L2, x2, F2, _2, U2, j2, G2, B2, V2, H2, W2, z2, K2, q2, $2, J2, X2, Q2, Y2, Z2, ee2, te2, ie2;
              if (d.i("{fbd6ce8}", "{4acfb3a}", JSON.stringify(e4)), e4.clientConfigOverride && (Ti = e4.clientConfigOverride), e4.gxtOverrideData) {
                var ne2 = JSON.parse(e4.gxtOverrideData);
                if (ne2.params) for (var se2 of ne2.params) "ragnarok" === se2.name && (Ci = se2.value, Ii = { type: "GXT", version: se2.version });
              } else e4.remoteConfigData && e4.remoteConfigData.ragnarok && (Ci = JSON.parse(e4.remoteConfigData.ragnarok), Ii = { type: "RCONFIG", version: null !== (ne2 = e4.remoteConfigData.version) && void 0 !== ne2 ? ne2 : "" });
              if (e4.isInternalUser && (jt = e4.isInternalUser), e4.overrideData) {
                se2 = new URLSearchParams(e4.overrideData);
                let re2 = new URLSearchParams();
                for (const [e5, t6] of se2.entries()) re2.append(e5.toLowerCase(), t6);
                if ("lean" === (null === (t5 = re2.get("mode")) || void 0 === t5 ? void 0 : t5.toLowerCase()) ? (Ri = true, Gt = Mi = Oi = Di = ki = false, jt = Bt = true) : "dev" === (null === (i4 = re2.get("mode")) || void 0 === i4 ? void 0 : i4.toLowerCase()) && (jt = Bt = true), t5 = (e5) => {
                  e: {
                    if (e5 = re2.get(e5)) switch (e5.toLowerCase()) {
                      case "enable":
                      case "on":
                      case "1":
                      case "true":
                        e5 = true;
                        break e;
                      case "disable":
                      case "off":
                      case "0":
                      case "false":
                        e5 = false;
                        break e;
                    }
                    e5 = void 0;
                  }
                  return e5;
                }, ne2 = (e5) => tn(e5 = re2.get(e5)), i4 = (e5) => ((e5 = re2.get(e5)) && (e5 = Number.parseFloat(e5), !Number.isNaN(e5)) || (e5 = void 0), e5), se2 = (e5, t6) => null === (e5 = re2.get(e5)) ? t6 : e5 || void 0, Pi = (ki = null !== (n4 = t5("log")) && void 0 !== n4 ? n4 : ki) && (null !== (s3 = t5("console")) && void 0 !== s3 ? s3 : Pi), Di = null !== (r3 = t5("gamepad")) && void 0 !== r3 ? r3 : Di, Oi = null !== (o2 = t5("webrtcstats")) && void 0 !== o2 ? o2 : Oi, Mi = null !== (a2 = t5("statsupload")) && void 0 !== a2 ? a2 : Mi, Gt = null !== (c2 = t5("mic")) && void 0 !== c2 ? c2 : Gt, Vt = null !== (l2 = t5("mousefilter")) && void 0 !== l2 ? l2 : Vt, Ht = null !== (u2 = t5("unadjustedmovement")) && void 0 !== u2 ? u2 : Ht, 0 < (Ni = null !== (h2 = ne2("bitrate")) && void 0 !== h2 ? h2 : Ni) && 100 >= Ni && (Ni *= 1e3), Hi = null !== (p2 = t5("gamepadtest")) && void 0 !== p2 ? p2 : Hi, (n4 = re2.get("resolution")) && (2 == (r3 = n4.toLowerCase().split("x")).length ? (s3 = parseInt(r3[0]), r3 = parseInt(r3[1]), s3 && r3 ? (Li = s3, xi = r3) : d.e("{fbd6ce8}", "{c87835d}", n4)) : d.e("{fbd6ce8}", "{c87835d}", n4)), Qi = null !== (f2 = ne2("fps")) && void 0 !== f2 ? f2 : Qi, Fi = null !== (v2 = t5("gamepadraf")) && void 0 !== v2 ? v2 : Fi, Wt = null !== (m2 = ne2("gamepadpoll")) && void 0 !== m2 ? m2 : Wt, _i = null !== (g2 = t5("advancedgestures")) && void 0 !== g2 ? g2 : _i, Ui = null !== (A2 = t5("forcetouchdevice")) && void 0 !== A2 ? A2 : Ui, void 0 !== (f2 = t5("touch")) && (zt = f2 ? 2 : 0, Ui = f2), Gi = null !== (S2 = t5("storetouch")) && void 0 !== S2 ? S2 : Gi, Bi = null !== (b2 = t5("storetouchgesture")) && void 0 !== b2 ? b2 : Bi, ji = null !== (w2 = t5("touchwarp")) && void 0 !== w2 ? w2 : ji, Vi = null !== (y2 = t5("latency")) && void 0 !== y2 ? y2 : Vi, Kt = se2("deviceos", Kt), qt = se2("devicetype", qt), $t = se2("clientstreamer", $t), Jt = se2("clienttype", Jt), Xt = se2("clientplatformname", Xt), Qt = se2("clientid", Qt), null !== (S2 = re2.get("applaunchmode")) && (zt = tn(S2)), Wi = null !== (E2 = t5("rsdmm")) && void 0 !== E2 ? E2 : Wi, zi = null !== (C2 = t5("rsdmmtoggle")) && void 0 !== C2 ? C2 : zi, null === (T2 = t5("ioswars")) || void 0 === T2 || T2 || (Xi = Ji = Ki = $i = qi = false), qi = null !== (I2 = t5("audioreset")) && void 0 !== I2 ? I2 : qi, Ki = null !== (R2 = t5("sourcereset")) && void 0 !== R2 ? R2 : Ki, $i = null !== (k2 = t5("autoplaychange")) && void 0 !== k2 ? k2 : $i, Yt = null !== (P2 = i4("bitsperpixel")) && void 0 !== P2 ? P2 : Yt, Zt = null !== (D2 = i4("bitsperpixel1440p")) && void 0 !== D2 ? D2 : Zt, ei = null !== (O2 = t5("1440p")) && void 0 !== O2 ? O2 : ei, Bt = null !== (M2 = t5("stutter")) && void 0 !== M2 ? M2 : Bt, re2.has("meta")) {
                  ti = {};
                  for (const e5 of re2.getAll("meta")) 2 === (E2 = e5.split("~")).length && (ti[E2[0]] = E2[1]);
                }
                ii = null !== (N2 = t5("haptics")) && void 0 !== N2 ? N2 : ii, ni = null !== (L2 = t5("av1")) && void 0 !== L2 ? L2 : ni, si = null !== (ie2 = "codeclist", x2 = ie2 = (ie2 = re2.get(ie2)) ? ie2.split(",") : void 0) && void 0 !== x2 ? x2 : si, jt = null !== (F2 = t5("internaluser")) && void 0 !== F2 ? F2 : jt, ri = null !== (_2 = t5("hdr")) && void 0 !== _2 ? _2 : ri, oi = null !== (U2 = t5("sdr10")) && void 0 !== U2 ? U2 : oi, Yi = null !== (j2 = t5("hotkeys")) && void 0 !== j2 ? j2 : Yi, ai = null !== (G2 = t5("forcehotkeys")) && void 0 !== G2 ? G2 : ai, di = null !== (B2 = t5("synthesizegamepadhid")) && void 0 !== B2 ? B2 : di, ci = null !== (V2 = t5("synthesizedds4disabled")) && void 0 !== V2 ? V2 : ci, li = null !== (H2 = t5("synthesizedds5disabled")) && void 0 !== H2 ? H2 : li, ui = null !== (W2 = t5("synthesizedds4fromds5disabled")) && void 0 !== W2 ? W2 : ui, hi = null !== (z2 = t5("synthesizedds5fromds4disabled")) && void 0 !== z2 ? z2 : hi, pi = null !== (K2 = t5("synthesizedds4fromgenericenabled")) && void 0 !== K2 ? K2 : pi, fi = null !== (q2 = t5("synthesizedds5fromgenericenabled")) && void 0 !== q2 ? q2 : fi, vi = null !== ($2 = t5("synthesizedds4allgamesenabled")) && void 0 !== $2 ? $2 : vi, mi = null !== (J2 = t5("synthesizedds5allgamesenabled")) && void 0 !== J2 ? J2 : mi, gi = null !== (X2 = t5("forceserverds4")) && void 0 !== X2 ? X2 : gi, Ai = null !== (Q2 = t5("forceserverds5")) && void 0 !== Q2 ? Q2 : Ai, Si = null !== (Y2 = re2.get("cursor")) && void 0 !== Y2 ? Y2 : Si, bi = null !== (Z2 = t5("pointerlockescape")) && void 0 !== Z2 ? Z2 : bi, Zi = null !== (ee2 = t5("computepressure")) && void 0 !== ee2 ? ee2 : Zi, wi = null !== (te2 = t5("disableworkerws")) && void 0 !== te2 ? te2 : wi;
              }
              qe(e4), yi && sn();
            }
            function sn() {
              var e4 = Ci.avp;
              e4 && (Ci = { ...Ci, ...e4 }), (e4 = Ke.Ga.pmCommunication) && (e4 = e4.avp) && (Ke.Ga.pmCommunication = { ...Ke.Ga.pmCommunication, ...e4 });
            }
            function rn(e4, t5) {
              var i4, n4, s3, r3;
              e4.G.za(void 0, null !== (i4 = null == t5 ? void 0 : t5.message) && void 0 !== i4 ? i4 : "", null !== (n4 = null == t5 ? void 0 : t5.filename) && void 0 !== n4 ? n4 : "", null !== (s3 = null == t5 ? void 0 : t5.lineno) && void 0 !== s3 ? s3 : 0, null !== (r3 = null == t5 ? void 0 : t5.colno) && void 0 !== r3 ? r3 : 0, true, "WorkerError");
            }
            function on(e4) {
              e4.perf.RAFTS = 0, e4.perf.DCSend = 0, e4.perf.GetStats = 0, e4.perf.FrameInfo = 0;
            }
            function an() {
              var e4 = ln;
              e4.h = false, e4.g && (d.d("{1f5ec29}", "{76b05dd}"), e4.g.postMessage({ stopStats: true }));
            }
            function dn(e4) {
              return performance.now() - e4.j;
            }
            function cn(e4, t5) {
              var i4, n4 = ln;
              n4.h && (t5 = { webrtcStats: { type: t5, stats: e4 }, ackid: null === (i4 = n4.s) || void 0 === i4 ? void 0 : i4.g++ }, n4.g && n4.g.postMessage(t5, e4));
            }
            var ln = new class {
              constructor() {
                this.h = false, this.g = null, this.j = 0, this.o = [], this.m = [], this.v = false, this.perf = { RAFTS: 0, DCSend: 0, GetStats: 0, FrameInfo: 0 }, d.i("{1f5ec29}", "{139da36}");
                try {
                  const e4 = URL.createObjectURL(new Blob([`
var p={size:70,version:1,name:"DEPR"},r={size:80,version:3,name:"RTPV"},t={size:48,version:1,name:"RTPA"},aa={size:88,version:1,name:"TRAA"},ba={size:44,version:1,name:"TRAV"},ca={size:12,version:1,name:"VFMD"},da={size:20,version:1,name:"PFDA"},ea={size:0,version:1,name:""};function u(a,b=!1){const d=a.m+1;try{let f;a.sessionId&&(f="x-nv-sessionid."+a.sessionId);let l=a.url;b&&(l+="&reconnect=1");let e=new WebSocket(l,f);e.onopen=()=>{var c;a.h("{48fa30b}"+d);if(e===a.g){null===(c=a.j)||void 0===c?void 0:c.F();for(const g of a.l)g.stats?e.send(g.stats):e.send(JSON.stringify(g));for(const g of a.s)w(a,g);a.s=[]}};e.onclose=c=>{var g;a.h("{6406bff}"+d);e===a.g&&(null===(g=a.j)||void 0===g?void 0:g.D({error:a.u,code:c.code,reason:c.reason,wasClean:c.wasClean}),x(a),a.u=
!1)};e.onerror=()=>{a.h("{7605058}"+d);e===a.g&&(a.u=!0)};e.onmessage=c=>{if(a.j)try{let h=JSON.parse(c.data);a.o||a.h("{523f5b9}");y(a);if(!h.hb){if(void 0!==h.ack){var g=h.ack;for(let m=a.l.length-1;0<=m;m--)a.l[m].ackid<=g&&a.l.splice(m,1)}if(void 0!==h.ackid){if(a.maxReceivedAckId<h.ackid&&(a.j.v(h),a.maxReceivedAckId=h.ackid),a.g){let m=JSON.stringify({ack:a.maxReceivedAckId});a.h("{903be10}"+m);a.g.send(m)}}else void 0===h.ack&&a.j.v(h)}}catch(h){a.C("Error in local websocket message handling: "+
h+' "'+c.data+'"')}};a.g=e}catch(f){a.g=void 0,a.C("WebSocket creation exception: "+f+" for socket "+a.m)}a.m=d}function z(a){0!==a.o&&(self.clearTimeout(a.o),a.o=0)}function x(a){a.g&&(a.g.onclose=null,a.g.onerror=null,a.g.onmessage=null,a.g.onopen=null,a.g=void 0)}function y(a){z(a);a.o=self.setTimeout(()=>{var b;a.h("{6c3505a}"+(null===(b=a.g)||void 0===b?void 0:b.readyState)+"{754f60b}"+a.m);a.g||u(a,!0);y(a)},3E3)}
function w(a,b){void 0!==b.ackid&&void 0!==b.ackid&&a.l.push(b);a.g&&(b.stats?a.g.send(b.stats):a.g.send(JSON.stringify(b)))}
var fa=class{constructor(){var a=A,b=B;this.sessionId=C;this.u=!1;this.l=[];this.s=[];this.maxReceivedAckId=this.o=0;this.url="";this.m=0;this.h=a;this.C=b}initialize(a,b,d,f=!1){this.url=a;this.maxReceivedAckId=b;this.j=d;u(this,f);this.h("{fcf6f89}"+this.m)}uninitialize(a){var b;this.maxReceivedAckId=0;this.l=[];this.s=[];this.j=void 0;z(this);null===(b=this.g)||void 0===b?void 0:b.close(a);x(this);this.h("{986b258}"+a+"{754f60b}"+this.m)}send(a){this.j&&(this.g||u(this,!0),this.g&&this.g.readyState===
WebSocket.OPEN?w(this,a):this.s.push(a))}};const E=self;let F=[],I=[];function J(a){a.h&&(a.j("{890d3ae}"+a.h),a.h=0);a.g.clear()}function ha(a){var b=K;let d=b.g.get(a.type);d||(d=[],b.g.set(a.type,d));for(const f of a.stats)d.push(f)}function ia(a){switch(a){case 0:return p;case 1:return r;case 2:return t;case 3:return ba;case 4:return aa;case 5:return ca;case 6:return da;default:return ea}}
let K=new class{constructor(a){this.j=a;this.g=new Map;this.h=0;J(this)}size(){let a=0;for(let [,b]of this.g){let d=b;for(let f of d)a+=f.byteLength}return a+=9*this.g.size}write(a,b){var d=b;for(let [g,h]of this.g){b=g;var f=h,l=d,e=d;d=f.length;var c=ia(b);let m=c.name,q=new DataView(a.buffer);for(let k=0;4>k;k++)q.setUint8(e+k,m.charCodeAt(k));q.setUint8(e+4,c.version);q.setUint16(e+5,d,!0);q.setUint16(e+7,c.size,!0);l=d=l+9;e=a;c=0;for(let k of f)f=new Uint8Array(k),e.set(f,d+c),c+=k.byteLength;
d=l+c;1===b&&this.h++}return d}}(A),C="",L="",M=null,N=void 0,O=0,P=[],Q=[],R=[],S=[],T=[],U=0;function A(a){E.postMessage({log:a})}function B(a){E.postMessage({exception:a})}function V(){F=[];I=[];J(K);P=[];Q=[];R=[];S=[];T=[]}function W(a,b,d,f,l,e){for(let c=0;4>c;c++)a.setUint8(b+c,d.charCodeAt(c));a.setUint8(b+4,f);a.setUint16(b+5,l,!0);a.setUint16(b+7,e,!0)}function X(a){return 0>a?Math.max(a,-2147483648):Math.min(a,4294967295)}
function Y(){if((F.length||I.length||K.size())&&M)try{M.ackid=U;var a=JSON.stringify(M),b=a.length,d=b+2,f=new ArrayBuffer(d);const D=new DataView(f);D.setUint16(0,b);for(b=2;b<d;++b)D.setUint8(b,a.charCodeAt(b-2));var l=new Uint8Array(f),e=13*F.length,c=72*I.length,g=12*P.length,h=10*Q.length,m=12*R.length,q=16*S.length;const G=8*T.length;let v=9+l.length;e&&(v+=9+e);c&&(v+=9+c);g&&(v+=9+g);h&&(v+=9+h);m&&(v+=9+m);q&&(v+=9+q);G&&(v+=9+G);v+=K.size();const H=new ArrayBuffer(v);var k=new DataView(H);
a=0;(new Uint8Array(H)).set(l);a+=l.length;W(k,a,"BPRF",1,0,0);a+=9;if(e){W(k,a,"PERF",2,F.length,13);a+=9;l=k;d=a;for(f=0;f<F.length;f++)l.setFloat64(d,F[f].RAFTS,!0),l.setUint16(d+8,Math.min(1E3*F[f].DCSend,65535),!0),l.setUint16(d+10,Math.min(1E3*F[f].GetStats,65535),!0),l.setUint8(d+12,F[f].FrameInfo),d+=13;a+=e}if(c){W(k,a,"EVNT",1,I.length,72);a+=9;e=k;l=a;for(d=0;d<I.length;d++){e.setFloat64(l,I[d].TS,!0);l+=8;var n=I[d].eventtype;for(f=0;f<n.length&&63>f;f++)e.setUint8(l+f,n.charCodeAt(f));
e.setUint8(l+f,0);l+=64}a+=c}if(g){W(k,a,"SQEV",1,P.length,12);a+=9;c=k;n=a;for(e=0;e<P.length;e++)c.setUint8(n,P[e].qualityScore),c.setUint8(n+1,P[e].bandwidthScore),c.setUint8(n+2,P[e].latencyScore),c.setUint8(n+3,P[e].networkLossScore),c.setFloat64(n+4,P[e].timestamp,!0),n+=12;a+=g}if(h){W(k,a,"MTBD",1,Q.length,10);a+=9;g=k;c=a;for(n=0;n<Q.length;n++)g.setFloat64(c,Q[n].timestamp,!0),g.setUint16(c+8,Math.min(Q[n].duration,65535),!0),c+=10;a+=h}if(m){W(k,a,"INPT",1,R.length,12);a+=9;h=k;g=a;for(c=
0;c<R.length;c++)h.setFloat64(g,R[c].timestamp,!0),h.setUint16(g+8,Math.min(R[c].bufferedAmount,65535),!0),h.setUint16(g+10,Math.min(R[c].maxSchedulingDelay,65535),!0),g+=12;a+=m}if(q){W(k,a,"GRBG",1,S.length,16);a+=9;m=k;h=a;for(g=0;g<S.length;g++)m.setFloat64(h,S[g].timestamp,!0),m.setInt32(h+8,X(S[g].deltaUsedHeapSize),!0),m.setInt32(h+12,X(S[g].deltaTotalHeapSize),!0),h+=16;a+=q}if(G){W(k,a,"MKPT",1,T.length,8);a+=9;q=k;k=a;for(m=0;m<T.length;m++)q.setFloat64(k,T[m],!0),k+=8;a+=G}let ja=new Uint8Array(H);
K.write(ja,a);null===N||void 0===N?void 0:N.send({stats:H,ackid:U})}catch(D){B("Exception in perf/stats upload. Error : "+D.message+" stack: "+D.stack)}V()}function ka(a){E.postMessage({wsMessage:a})}function la(a){E.postMessage({wsClose:a})}function ma(){E.postMessage({wsOpen:!0})}function Z(){E.postMessage({wsOpening:!0})}function na(a,b){N=new fa;N.initialize(L,a,{v:ka,F:ma,D:la,G:Z},b);Z()}
E.onmessage=function(a){try{const b=a.data;b.initMessage?(C=b.initMessage.sessionId,E.postMessage({initialized:!0})):b.perf?F.push(b.perf):b.clientEvent?I.push(b.clientEvent):b.startStats?(M=b.startStats.statsHeader,O=self.setInterval(()=>Y(),5E3),E.postMessage({statsStarted:!0}),A("{5209d98}")):b.stopStats?(self.clearInterval(O),Y(),V(),A("{b58b6ad}")):b.webrtcStats?(b.ackid&&(U=b.ackid),b.webrtcStats.stats&&ha(b.webrtcStats)):b.sq?P.push(b.sq):b.startWebSocket?(L=b.startWebSocket.signInURL,na(b.startWebSocket.maxReceivedAckId,
b.startWebSocket.reconnect)):b.stopWebSocket?(null===N||void 0===N?void 0:N.uninitialize(),N=void 0):b.send?null===N||void 0===N?void 0:N.send(b.send):b.duration?Q.push(b.duration):b.inputChannelStats?R.push(b.inputChannelStats):b.garbageCollectionStats?S.push(b.garbageCollectionStats):b.qosMarker&&T.push(b.qosMarker)}catch(b){B("Worker onmessage exception: "+b)}};


`], { type: "text/javascript" }));
                  this.g = new Worker(e4), URL.revokeObjectURL(e4), this.g.onmessage = this.F.bind(this), this.g.onerror = this.C.bind(this), d.i("{1f5ec29}", "{62dee75}");
                } catch (e4) {
                  d.e("{1f5ec29}", "{50fa2e5}", e4.message), this.m.push({ name: "RagnarokWorkerProblem", error: JSON.stringify(e4) });
                }
              }
              startWebSocket(e4, t5, i4, n4) {
                this.l = i4, e4 = { startWebSocket: { signInURL: e4, maxReceivedAckId: t5, reconnect: n4 } }, this.g && (this.g.postMessage(e4), d.d("{1f5ec29}", "{b3f6faa}"));
              }
              stopWebSocket() {
                this.g && (d.d("{1f5ec29}", "{7ac815d}"), this.g.postMessage({ stopWebSocket: true })), this.l = void 0;
              }
              initialize(e4, t5, i4) {
                if (this.G = t5, this.s = i4, 0 < this.m.length) {
                  for (const e5 of this.m) wo(t5, e5.name, e5.error);
                  this.m = [];
                }
                if (0 < this.o.length) {
                  for (const e5 of this.o) rn(this, e5);
                  this.o = [];
                }
                this.h = false, on(this), 0 === this.j && (this.j = performance.now()), this.g ? (this.g.postMessage({ initMessage: { sessionId: e4 } }), d.d("{1f5ec29}", "{404f264}")) : d.e("{1f5ec29}", "{c62bf29}");
              }
              F(e4) {
                (e4 = e4.data).initialized ? (d.i("{1f5ec29}", "{6ccab8d}"), this.v = true) : e4.statsStarted ? (this.h = true, d.d("{1f5ec29}", "{e98d45f}")) : e4.log ? d.i("{cbf9f59}", "{0b0c6f9}", e4.log) : e4.exception ? d.i("{cbf9f59}", "{0b0c6f9}", e4.exception) : e4.wsClose ? this.l ? dd(this.l, e4.wsClose) : d.e("{1f5ec29}", "{900a6f2}") : e4.wsMessage ? this.l ? cd(this.l, e4.wsMessage) : d.e("{1f5ec29}", "{900a6f2}") : e4.wsOpening ? this.l ? d.i("{93c7910}", "{6423101}") : d.e("{1f5ec29}", "{900a6f2}") : e4.wsOpen && (this.l ? ld(this.l) : d.e("{1f5ec29}", "{900a6f2}"));
              }
              C(e4) {
                this.G ? rn(this, e4) : this.o.push(e4);
              }
            }();
            function un() {
              const e4 = Dn();
              if (e4) {
                const t5 = e4.destination.maxChannelCount;
                return e4.close(), d.i("{d988e7f}", "{fa78e0a}", t5), t5;
              }
              return d.w("{d988e7f}", "{d018fac}"), 2;
            }
            function hn(e4) {
              return e4[0] < e4[1] ? [e4[1], e4[0]] : e4;
            }
            function pn(e4, t5, i4) {
              var n4 = screen.width, s3 = screen.height, r3 = !!(1 & i4);
              const o2 = !!(2 & i4);
              var a2 = !!(4 & i4);
              if ((a2 || 8 & i4) && (n4 = 3840, s3 = 2160), t5 && 0 < t5.length) {
                [n4, s3] = hn([n4, s3]), o2 && 1366 <= n4 && 0 === e4 && (n4 = 1600, s3 = 1200);
                const i5 = n4 / s3, r4 = n4 * s3;
                return (n4 = t5.filter((e5) => 120 > e5.frameRate)).length && (t5 = n4), t5.sort((t6, n5) => {
                  var s4 = t6.resolution, o3 = n5.resolution, a3 = Math.abs(s4.width / s4.height - i5) - Math.abs(o3.width / o3.height - i5);
                  if (0.05 < Math.abs(a3)) return a3;
                  a3 = 0 === e4 ? -1 : 1;
                  const d2 = (1 === e4 ? 1 : -1) * (t6.frameRate - n5.frameRate), c2 = (s4 = s4.width * s4.height) - (o3 = o3.width * o3.height);
                  return s4 <= r4 ? o3 <= r4 ? t6.frameRate !== n5.frameRate ? d2 : a3 * c2 : -1 : o3 <= r4 ? 1 : c2 || d2;
                }), t5[0];
              }
              if (t5 = { resolution: { width: 1280, height: 720 }, frameRate: 60 }, r3) {
                let [e5, i5] = hn([n4, s3]);
                2 < e5 / i5 && (t5.resolution = { width: 1376, height: 640 });
              } else o2 ? 0 != e4 ? t5.resolution = { width: 1024, height: 768 } : ([n4] = hn([n4, s3]), t5.resolution = 1024 >= n4 ? { width: 1024, height: 768 } : 1366 > n4 ? { width: 1112, height: 834 } : { width: 1600, height: 1200 }) : (r3 = [[1920, 1200], [1920, 1080], [1280, 1024], [1600, 1200]], a2 && r3.unshift([3840, 2160]), a2 = [[1280, 800], [1280, 720], [1280, 1024], [1024, 768]], n4 = function(e5, t6) {
                if (0 == t6.length) return e5;
                class i5 {
                  constructor(e6, t7) {
                    this.w = e6, this.g = t7, this.a = e6 / t7;
                  }
                  j(e6) {
                    return 0.05 > Math.abs(e6.a - this.a) ? e6 : e6.a > this.a ? new i5(Math.floor(this.a / e6.a * e6.w), e6.g) : new i5(e6.w, Math.floor(e6.a / this.a * e6.g));
                  }
                  h() {
                    return [this.w, this.g];
                  }
                }
                t6 = t6.map((e6) => new i5(e6[0], e6[1]));
                const n5 = new i5(e5[0], e5[1]);
                e5 = t6[0];
                for (let i6 = 1; i6 < t6.length; i6++) {
                  let s4 = t6[i6];
                  Math.abs(n5.a - s4.a) < Math.abs(n5.a - e5.a) && (e5 = s4);
                }
                return (t6 = e5.j(n5)).w > e5.w ? e5.h() : t6.h();
              }(n4 = [n4, s3], 0 == e4 ? r3 : a2), t5.resolution = { width: n4[0], height: n4[1] });
              return t5;
            }
            function fn(e4) {
              var t5;
              let i4 = 0;
              return A(e4) && (i4 |= 1), (e4 ? "iPadOS" === e4.os : /^(?!.*chrome).*safari/i.test(navigator.userAgent) && !A() && R()) && (i4 |= 2), null !== (t5 = window.webapis) && void 0 !== t5 && t5.productinfo && window.webapis.productinfo.isUdPanelSupported() && (i4 |= 4), window.lge_webrtc_hevc_support && (i4 |= 8), i4;
            }
            function vn() {
              return getComputedStyle(document.documentElement) ? (getComputedStyle(document.documentElement).getPropertyValue("--sat") || (document.documentElement.style.setProperty("--sat", "env(safe-area-inset-top)"), document.documentElement.style.setProperty("--sar", "env(safe-area-inset-right)"), document.documentElement.style.setProperty("--sab", "env(safe-area-inset-bottom)"), document.documentElement.style.setProperty("--sal", "env(safe-area-inset-left)")), { top: parseInt(getComputedStyle(document.documentElement).getPropertyValue("--sat")), left: parseInt(getComputedStyle(document.documentElement).getPropertyValue("--sal")), bottom: parseInt(getComputedStyle(document.documentElement).getPropertyValue("--sab")), right: parseInt(getComputedStyle(document.documentElement).getPropertyValue("--sar")) }) : { top: 0, left: 0, bottom: 0, right: 0 };
            }
            function mn(e4, t5) {
              return 0 > e4 ? 0 : e4 > t5 ? t5 : e4;
            }
            function gn(e4) {
              var t5 = vn();
              t5.top = Math.max(t5.top, 21), t5.bottom = mn(t5.bottom, 10);
              let i4 = { x: e4.clientX, y: e4.clientY }, n4 = 0.5;
              return 0 < t5.top && e4.clientY - e4.radiusY < t5.top ? n4 -= 0.5 * (t5 = mn(t5 = (t5.top - (e4.clientY - Math.min(e4.radiusY, 21))) / e4.radiusY, 1)) * t5 : 0 < t5.bottom && e4.clientY + e4.radiusY > window.innerHeight - t5.bottom && (n4 += 0.5 * (t5 = mn(t5 = (e4.clientY + Math.min(e4.radiusY, 10) - (window.innerHeight - t5.bottom)) / e4.radiusY, 1)) * t5), i4.y = mn(i4.y - e4.radiusY + 2 * n4 * e4.radiusY, window.innerHeight), i4;
            }
            function An(e4) {
              let t5 = e4;
              if (Ci.offlineErrorsStreaming && Ci.offlineErrorsStreaming.includes(g(e4))) t5 = 15868418;
              else if (Ci.offlineErrorsSessionSetup && Ci.offlineErrorsSessionSetup.includes(g(e4))) t5 = 15868417;
              else switch (e4) {
                case 3237093906:
                case 3237093899:
                  t5 = 15868418;
                  break;
                case 3237089282:
                  t5 = 15868417;
              }
              return t5 !== e4 && d.i("{d988e7f}", "{b84d4c8}", g(e4), g(t5)), t5;
            }
            function Sn(e4, t5) {
              let i4 = e4;
              if (Ci.sleepErrorsStreaming && Ci.sleepErrorsStreaming.includes(g(e4))) i4 = 15867908;
              else if (Ci.sleepErrorsSessionSetup && Ci.sleepErrorsSessionSetup.includes(g(e4))) i4 = 15867909;
              else switch (e4) {
                case 3237093906:
                  v(t5) && (i4 = 15867908);
                  break;
                case 3237094159:
                  i4 = 15867908;
                  break;
                case 3237093654:
                  i4 = 15867909;
              }
              return i4 !== e4 && d.i("{d988e7f}", "{49e2182}", g(e4), g(i4)), i4;
            }
            function bn(e4, t5, i4, n4, s3 = 1) {
              const r3 = 4294967295 & Math.floor(e4 * s3);
              e4 = Math.floor(e4 / 4294967296 * s3), n4 ? (t5.setUint32(i4, r3, true), t5.setUint32(i4 + 4, e4, true)) : (t5.setUint32(i4, e4, false), t5.setUint32(i4 + 4, r3, false));
            }
            function wn(e4, t5) {
              let i4 = false;
              switch (e4) {
                case 3237093896:
                case 3237093897:
                case 3237093898:
                case 3237093906:
                case 3237093899:
                case 3237093901:
                case 15868418:
                case 3237094159:
                  i4 = true;
                  break;
                case 15867908:
                  v(t5) && (i4 = true);
              }
              return i4;
            }
            function yn(e4, t5) {
              return 2764800 <= (e4 *= t5) && 4953600 > e4;
            }
            function En(e4) {
              switch (e4) {
                case "H264":
                  return "H264";
                case "H265":
                  return "HEVC";
                case "AV1":
                  return "AV1";
                default:
                  return "UNKNOWN";
              }
            }
            function Cn(e4) {
              var t5;
              return e4 = b(e4) || w(e4) || y(e4) || "Linux" === e4.os || v(e4), null !== (t5 = Ci.enableCpm) && void 0 !== t5 ? t5 : e4;
            }
            function Tn(e4) {
              return void 0 !== e4 ? e4 ? "TRUE" : "FALSE" : "UNDEFINED";
            }
            function In(e4) {
              return e4 ? "MANUAL" : "NONE";
            }
            let Rn = [];
            function kn(e4) {
              return `${e4.width.toFixed()}x${e4.height.toFixed()}`;
            }
            function Pn(e4, t5, i4) {
              try {
                const n4 = document.createElement("a");
                n4.style.display = "none";
                const s3 = URL.createObjectURL(new Blob(e4, { type: i4 }));
                return n4.href = s3, n4.download = t5, document.body.appendChild(n4), n4.click(), URL.revokeObjectURL(s3), document.body.removeChild(n4), true;
              } catch (e5) {
                return d.e("{d988e7f}", "{8d57ba9}", e5), false;
              }
            }
            function Dn(e4) {
              const t5 = window.AudioContext || window.webkitAudioContext || void 0;
              if (t5) return e4 ? new t5({ sampleRate: e4 }) : new t5();
              d.w("{d988e7f}", "{b74c037}");
            }
            function On() {
              var e4;
              return !(null === (e4 = globalThis.PointerEvent) || void 0 === e4 || !e4.prototype);
            }
            const configuration = {
              iceServers: [
                {
                  urls: 'stun:stun.l.google.com:19302' // Google's public STUN server
                },
                {
                  urls: 'turn:<Host IP Address (Public)>:3478', // Example TURN server
                  username: 'admin', // TURN server credentials
                  credential: '****'
                }
              ]
            };
            
            // const peerConnection = new RTCPeerConnection(configuration);
            async function Mn(e4, t5, i4) {
              var n4;
              const s3 = new RTCPeerConnection(configuration);
              try {
                await s3.setRemoteDescription({ type: "offer", sdp: t5 }).catch((e5) => {
                  throw Error("Audio munging setRemoteDescription failed. " + e5);
                });
                const r3 = await s3.createAnswer();
                await s3.setLocalDescription({ type: "answer", sdp: null === (n4 = r3.sdp) || void 0 === n4 ? void 0 : n4.replace("opus/48000/2", "multiopus/48000/" + e4).replace("useinbandfec=1", i4) }).catch((e5) => {
                  throw Error("Audio munging setLocalDescription failed. " + e5);
                });
                const o2 = s3.getReceivers()[0];
                if (!o2.getParameters) return d.w("{d988e7f}", "{4be0bf6}"), 2;
                const { codecs: a2 } = o2.getParameters();
                if (1 !== a2.length || "audio/multiopus" !== a2[0].mimeType || a2[0].channels !== e4) throw Error("Audio munging failed " + a2[0]);
                return d.i("{d988e7f}", "{8919816}", e4, a2[0]), e4;
              } catch (t6) {
                return d.e("{d988e7f}", "{4984c00}", e4, t6), 2;
              } finally {
                s3.close();
              }
            }
            function Nn(e4) {
              var t5;
              return (null !== (t5 = Ci.usePerfNowCaptureTimestamp) && void 0 !== t5 ? t5 : !window.chrome) ? dn(ln) : e4 - ln.j;
            }
            function Ln(e4) {
              if (!e4) return 8;
              switch (null == e4 ? void 0 : e4.bitDepth) {
                case 1:
                  return 10;
                case 0:
                  return 8;
                default:
                  return d.w("{d988e7f}", "{6f291f9}", e4.bitDepth), 8;
              }
            }
            function xn(e4, t5 = false) {
              return t5 = t5 ? gn(e4) : { x: e4.clientX, y: e4.clientY }, { identifier: e4.identifier, clientX: t5.x, clientY: t5.y, deltaX: 0, deltaY: 0 };
            }
            function Fn(e4, t5, i4) {
              let n4 = false;
              const s3 = t5.changedTouches, r3 = Nn(t5.timeStamp);
              for (let t6 = 0; t6 < s3.length; t6++) {
                const o2 = s3[t6], a2 = e4.h.findIndex((e5) => e5.identifier == o2.identifier);
                -1 != a2 && (n4 = true, _t(Ft()), e4.h.splice(a2, 1), 0 === e4.h.length ? (0 !== e4.l ? (window.clearTimeout(e4.l), e4.l = 0, i4 && Ir(e4.j, e4.target, r3, xn(o2, true), e4.m)) : (2 === e4.g || 4 === e4.g) && _i && yr(e4.j, r3), e4.m = 0, e4.g = 0) : 5 === e4.g ? e4.g = 0 : 6 === e4.g && (_i && Er(e4.j), e4.g = 0));
              }
              Cr(e4.j) && n4 && t5.preventDefault();
            }
            function _n(e4, t5) {
              e4.clientX = t5.pageX - e4.j.pb, e4.clientY = t5.pageY - e4.j.vertical, e4.radiusX = t5.radiusX, e4.radiusY = t5.radiusY;
            }
            function Un(e4) {
              const t5 = gn(e4);
              e4.h = 0.01 < Math.abs(t5.y - e4.clientY), e4.clientX = t5.x, e4.clientY = t5.y;
            }
            class jn {
              constructor(e4, t5, i4) {
                this.radiusY = this.radiusX = this.clientY = this.clientX = 0, this.h = false, this.identifier = e4.identifier, this.g = t5, this.j = i4, _n(this, e4), ji ? Un(this) : this.h = false;
              }
              update(e4) {
                _n(this, e4), this.h && Un(this);
              }
            }
            class Gn {
              constructor(e4, t5, i4, n4, s3) {
                this.h = t5, this.id = e4.identifier, this.v = i4, this.l = e4.pageX, this.m = e4.pageY, this.o = e4.radiusX, this.s = e4.radiusY, this.g = n4, this.j = s3;
              }
            }
            function Bn(e4, t5, i4, n4) {
              var s3, r3 = 0;
              for (let v2 of t5) {
                if (40 < r3) return void d.e("{ec05004}", "{2faaf33}", t5.length - r3);
                var o2 = null === (s3 = e4.g.get(v2.identifier)) || void 0 === s3 ? void 0 : s3.g;
                if (void 0 === o2) d.e("{ec05004}", "{960ee4f}", v2.identifier);
                else {
                  var a2 = e4.m * v2.clientX, c2 = e4.o * v2.clientY, l2 = e4.m * v2.radiusX, u2 = e4.o * v2.radiusY, h2 = 65535 + l2, p2 = -u2;
                  if (u2 = 65535 + u2, a2 < -l2 || a2 > h2 || c2 < p2 || c2 > u2) switch (i4) {
                    case 2:
                    case 8:
                      break;
                    default:
                      continue;
                  }
                  a2 = Math.min(Math.max(a2, 0), 65535), c2 = Math.min(Math.max(c2, 0), 65535);
                  e: {
                    l2 = e4.P, h2 = i4, p2 = v2.radiusX, u2 = v2.radiusY;
                    var f2 = n4;
                    if (40 <= r3) {
                      o2 = false;
                      break e;
                    }
                    const t6 = 18 + 16 * r3;
                    l2.gb.setUint8(t6, o2), l2.gb.setUint8(t6 + 1, h2), l2.gb.setUint16(t6 + 2, a2, false), l2.gb.setUint16(t6 + 4, c2, false), l2.gb.setUint8(t6 + 6, p2), l2.gb.setUint8(t6 + 7, u2), bn(f2, l2.gb, t6 + 8, false, 1e3), o2 = true;
                  }
                  if (!o2) {
                    e4.l += t5.length - r3;
                    break;
                  }
                  r3++;
                }
              }
              0 != r3 && (r3 > t5.length ? d.w("{ec05004}", "{4e60a66}", r3, t5.length) : (r3 = 8 + 16 * (t5 = r3), (e4 = e4.P).gb.setUint16(14, r3, false), e4.gb.setUint16(16, t5, false), t5 = 10, 3 <= e4.La && (r3++, t5--), r3 = new DataView(e4.gb.buffer, t5, r3), qn(e4), qn(e4, r3) || d.e("{ec05004}", "{56a8404}")));
            }
            function Vn(e4, t5, i4) {
              var n4 = performance.now(), s3 = Nn(t5.timeStamp);
              let r3 = false, o2 = [];
              const a2 = t5.changedTouches;
              let d2 = [];
              for (let s4 = 0; s4 < a2.length; s4++) {
                const c2 = a2[s4];
                if (c2.target === e4.target) {
                  let s5 = e4.g.get(c2.identifier);
                  o2.push(c2.identifier), s5 && (r3 = true, _t(Ft()), s5.update(c2), d2.push(s5), Gi && e4.h.push(new Gn(c2, s5.g, i4, n4, t5.timeStamp)));
                }
              }
              Bn(e4, d2, i4, s3);
              for (const t6 of o2) n4 = t6, (s3 = (i4 = e4).g.get(n4)) && (i4.g.delete(n4), i4.s.delete(s3.g));
              Gi && (e4.N = 0 == e4.g.size), Cr(e4.j) && r3 && t5.preventDefault();
            }
            var Hn = /* @__PURE__ */ new Map([["Escape", 27], ["Digit0", 48], ["Digit1", 49], ["Digit2", 50], ["Digit3", 51], ["Digit4", 52], ["Digit5", 53], ["Digit6", 54], ["Digit7", 55], ["Digit8", 56], ["Digit9", 57], ["Minus", 189], ["Equal", 187], ["Backspace", 8], ["Tab", 9], ["KeyQ", 81], ["KeyW", 87], ["KeyE", 69], ["KeyR", 82], ["KeyT", 84], ["KeyY", 89], ["KeyU", 85], ["KeyI", 73], ["KeyO", 79], ["KeyP", 80], ["BracketLeft", 219], ["BracketRight", 221], ["Enter", 13], ["ControlLeft", 162], ["KeyA", 65], ["KeyS", 83], ["KeyD", 68], ["KeyF", 70], ["KeyG", 71], ["KeyH", 72], ["KeyJ", 74], ["KeyK", 75], ["KeyL", 76], ["Semicolon", 186], ["Quote", 222], ["Backquote", 192], ["ShiftLeft", 160], ["Backslash", 220], ["KeyZ", 90], ["KeyX", 88], ["KeyC", 67], ["KeyV", 86], ["KeyB", 66], ["KeyN", 78], ["KeyM", 77], ["Comma", 188], ["Period", 190], ["Slash", 191], ["ShiftRight", 161], ["NumpadMultiply", 106], ["AltLeft", 164], ["Space", 32], ["CapsLock", 20], ["F1", 112], ["F2", 113], ["F3", 114], ["F4", 115], ["F5", 116], ["F6", 117], ["F7", 118], ["F8", 119], ["F9", 120], ["F10", 121], ["Pause", 19], ["ScrollLock", 145], ["Numpad7", 103], ["Numpad8", 104], ["Numpad9", 105], ["NumpadSubtract", 109], ["Numpad4", 100], ["Numpad5", 101], ["Numpad6", 102], ["NumpadAdd", 107], ["Numpad1", 97], ["Numpad2", 98], ["Numpad3", 99], ["Numpad0", 96], ["NumpadDecimal", 110], ["PrintScreen", 42], ["IntlBackslash", 226], ["F11", 122], ["F12", 123], ["NumpadEqual", 187], ["F13", 124], ["F14", 125], ["F15", 126], ["F16", 127], ["F17", 128], ["F18", 129], ["F19", 130], ["F20", 131], ["F21", 132], ["F22", 133], ["F23", 134], ["F24", 135], ["KanaMode", 233], ["Lang2", 25], ["Lang1", 21], ["IntlRo", 194], ["Convert", 234], ["NonConvert", 235], ["IntlYen", 193], ["NumpadComma", 188], ["NumpadEnter", 13], ["ControlRight", 163], ["NumpadDivide", 111], ["PrintScreen", 42], ["AltRight", 165], ["NumLock", 144], ["Pause", 19], ["Home", 36], ["ArrowUp", 38], ["PageUp", 33], ["ArrowLeft", 37], ["ArrowRight", 39], ["End", 35], ["ArrowDown", 40], ["PageDown", 34], ["Insert", 45], ["Delete", 46], ["MetaLeft", 91], ["OSLeft", 91], ["MetaRight", 92], ["OSRight", 92], ["Lang2", 25], ["Lang1", 21], ["NumpadClear", 12], ["NumpadClearEntry", 12]]), Wn = /* @__PURE__ */ new Map([["HanjaMode", 25], ["HangulMode", 21]]), zn = /* @__PURE__ */ new Map([["1", { vkCode: 49, shift: false }], ["2", { vkCode: 50, shift: false }], ["3", { vkCode: 51, shift: false }], ["4", { vkCode: 52, shift: false }], ["5", { vkCode: 53, shift: false }], ["6", { vkCode: 54, shift: false }], ["7", { vkCode: 55, shift: false }], ["8", { vkCode: 56, shift: false }], ["9", { vkCode: 57, shift: false }], ["0", { vkCode: 48, shift: false }], ["!", { vkCode: 49, shift: true }], ["@", { vkCode: 50, shift: true }], ["#", { vkCode: 51, shift: true }], ["$", { vkCode: 52, shift: true }], ["%", { vkCode: 53, shift: true }], ["^", { vkCode: 54, shift: true }], ["&", { vkCode: 55, shift: true }], ["*", { vkCode: 56, shift: true }], ["(", { vkCode: 57, shift: true }], [")", { vkCode: 48, shift: true }], ["-", { vkCode: 189, shift: false }], ["_", { vkCode: 189, shift: true }], ["=", { vkCode: 187, shift: false }], ["+", { vkCode: 187, shift: true }], [",", { vkCode: 188, shift: false }], ["<", { vkCode: 188, shift: true }], [".", { vkCode: 190, shift: false }], [">", { vkCode: 190, shift: true }], [";", { vkCode: 186, shift: false }], [":", { vkCode: 186, shift: true }], ["/", { vkCode: 191, shift: false }], ["?", { vkCode: 191, shift: true }], ["`", { vkCode: 192, shift: false }], ["~", { vkCode: 192, shift: true }], ["[", { vkCode: 219, shift: false }], ["{", { vkCode: 219, shift: true }], ["\\", { vkCode: 220, shift: false }], ["|", { vkCode: 220, shift: true }], ["]", { vkCode: 221, shift: false }], ["}", { vkCode: 221, shift: true }], ["'", { vkCode: 222, shift: false }], ['"', { vkCode: 222, shift: true }], [" ", { vkCode: 32, shift: false }], ["A", { vkCode: 65, shift: true }], ["B", { vkCode: 66, shift: true }], ["C", { vkCode: 67, shift: true }], ["D", { vkCode: 68, shift: true }], ["E", { vkCode: 69, shift: true }], ["F", { vkCode: 70, shift: true }], ["G", { vkCode: 71, shift: true }], ["H", { vkCode: 72, shift: true }], ["I", { vkCode: 73, shift: true }], ["J", { vkCode: 74, shift: true }], ["K", { vkCode: 75, shift: true }], ["L", { vkCode: 76, shift: true }], ["M", { vkCode: 77, shift: true }], ["N", { vkCode: 78, shift: true }], ["O", { vkCode: 79, shift: true }], ["P", { vkCode: 80, shift: true }], ["Q", { vkCode: 81, shift: true }], ["R", { vkCode: 82, shift: true }], ["S", { vkCode: 83, shift: true }], ["T", { vkCode: 84, shift: true }], ["U", { vkCode: 85, shift: true }], ["V", { vkCode: 86, shift: true }], ["W", { vkCode: 87, shift: true }], ["X", { vkCode: 88, shift: true }], ["Y", { vkCode: 89, shift: true }], ["Z", { vkCode: 90, shift: true }], ["a", { vkCode: 65, shift: false }], ["b", { vkCode: 66, shift: false }], ["c", { vkCode: 67, shift: false }], ["d", { vkCode: 68, shift: false }], ["e", { vkCode: 69, shift: false }], ["f", { vkCode: 70, shift: false }], ["g", { vkCode: 71, shift: false }], ["h", { vkCode: 72, shift: false }], ["i", { vkCode: 73, shift: false }], ["j", { vkCode: 74, shift: false }], ["k", { vkCode: 75, shift: false }], ["l", { vkCode: 76, shift: false }], ["m", { vkCode: 77, shift: false }], ["n", { vkCode: 78, shift: false }], ["o", { vkCode: 79, shift: false }], ["p", { vkCode: 80, shift: false }], ["q", { vkCode: 81, shift: false }], ["r", { vkCode: 82, shift: false }], ["s", { vkCode: 83, shift: false }], ["t", { vkCode: 84, shift: false }], ["u", { vkCode: 85, shift: false }], ["v", { vkCode: 86, shift: false }], ["w", { vkCode: 87, shift: false }], ["x", { vkCode: 88, shift: false }], ["y", { vkCode: 89, shift: false }], ["z", { vkCode: 90, shift: false }]]);
            class Kn extends DataView {
              constructor(e4, t5, i4, n4) {
                super(e4, t5, i4), this.shift = 0, this.setUint8 = (e5, t6) => super.setUint8(e5 + this.shift, t6), this.setUint16 = (e5, t6, i5) => super.setUint16(e5 + this.shift, t6, i5), this.setUint32 = (e5, t6, i5) => super.setUint32(e5 + this.shift, t6, i5), this.setInt8 = (e5, t6) => super.setInt8(e5 + this.shift, t6), this.setInt16 = (e5, t6, i5) => super.setInt16(e5 + this.shift, t6, i5), this.setInt32 = (e5, t6, i5) => super.setInt32(e5 + this.shift, t6, i5), this.setFloat32 = (e5, t6, i5) => super.setFloat32(e5 + this.shift, t6, i5), this.setFloat64 = (e5, t6, i5) => super.setFloat64(e5 + this.shift, t6, i5), this.shift = null != n4 ? n4 : 0;
              }
            }
            function qn(e4, t5, i4 = true, n4 = "input_channel_v1") {
              if ("gamepad_channel_v1" != n4 && 0 < e4.ia.h && (t5 = e4.Ff(t5)), void 0 === t5) return false;
              const s3 = window.performance.now();
              var r3 = e4.Ba;
              if (r3.aa ? (_r(r3), r3 = false) : r3 = true, !r3) return false;
              if (r3 = false, 2 < e4.La && i4 && (9 > t5.byteOffset ? d.w("{57a6a4d}", "{0fc6121}") : ((t5 = new DataView(t5.buffer, t5.byteOffset - 9, 9 + t5.byteLength)).setUint8(0, 35), bn(dn(ln), t5, 1, false, 1e3))), i4 = -1, "gamepad_channel_v1" === n4 && void 0 !== e4.Zc && (i4 = e4.Zc, e4.Zc = (e4.Zc + 1) % 65536), 0 <= i4) {
                if (3 > t5.byteOffset) return d.e("{57a6a4d}", "{e9ac06c}"), false;
                (t5 = new DataView(t5.buffer, t5.byteOffset - 3, 3 + t5.byteLength)).setUint8(0, 37), t5.setUint16(1, i4);
              }
              try {
                let i5 = performance.now();
                switch (n4) {
                  case "gamepad_channel_v1":
                    e4.Aa.send(t5);
                    break;
                  case "input_channel_v1":
                    e4.Ja.send(t5);
                    break;
                  default:
                    throw Error(`Invalid input channel ${n4}`);
                }
                ud(e4.D, performance.now() - i5);
                const o2 = window.performance.now();
                e4.V.ld += 1, 5 < (t5 = o2 - s3) && (e4.V.nd += 1), 10 < t5 && (e4.V.md += 1), r3 = true;
              } catch (t6) {
                t6.stack && !t6.stack.includes("Could not send data") && (d.e("{57a6a4d}", "{7a6bf7c}", t6), Xn(e4) && e4.G.za(t6, "sendinput exception", "{57a6a4d}.ts", 0, 0, true));
              }
              return r3;
            }
            function $n(e4, t5, i4) {
              const n4 = e4.fb(22);
              n4.setUint32(0, 10, true), n4.setUint16(4, 0, false), n4.setUint16(6, -t5, false), n4.setUint16(8, 0, false), n4.setUint32(10, 0), bn(i4, n4, 14, false, 1e3);
              try {
                qn(e4, n4);
              } catch (t6) {
                d.e("{57a6a4d}", "{3d81a57}", t6), e4.G.za(t6, "send mousewheel exception", "{57a6a4d}.ts", 0, 0, true);
              }
            }
            function Jn(e4, t5, i4, n4, s3, r3, o2 = 0) {
              let a2 = e4.J.eb;
              e4 = e4.J.Wa;
              let d2 = 7;
              n4 && (d2 = 5);
              let c2 = 0;
              return 5 == d2 && (c2 = 4), t5.setUint32(i4, d2, true), t5.setUint16(i4 + 4, s3, false), t5.setUint16(i4 + 6, r3, false), t5.setUint16(i4 + 8, 0, false), t5.setUint32(i4 + 10 + c2, 0, false), bn(o2, t5, i4 + 14 + c2, false, 1e3), c2 && (t5.setUint16(i4 + 10, a2, false), t5.setUint16(i4 + 12, e4, false)), i4 + (n4 ? 26 : 22);
            }
            function Xn(e4) {
              return "open" === e4.Ja.readyState && (!e4.Aa || "open" === e4.Aa.readyState);
            }
            function Qn(e4, t5, i4, n4 = 0) {
              const s3 = e4.fb(26);
              Jn(e4, s3, 0, true, t5, i4, n4);
              try {
                Xn(e4) && qn(e4, s3);
              } catch (t6) {
                d.e("{57a6a4d}", "{dba1265}", t6), e4.G.za(t6, "send CursorPos exception", "{57a6a4d}.ts", 0, 0, true);
              }
            }
            function Yn(e4, t5, i4, n4, s3 = 0) {
              if (4 !== t5 && 3 !== t5) d.e("{57a6a4d}", "{66e269d}", t5);
              else {
                var r3 = e4.fb(18);
                r3.setUint32(0, t5, true), r3.setUint16(4, i4, false), r3.setUint16(6, n4, false), r3.setUint16(8, 0, false), bn(s3, r3, 10, false, 1e3), qn(e4, r3);
              }
            }
            function Zn(e4, t5, i4, n4, s3, r3, o2 = 0, a2 = 0) {
              e4.setUint32(t5, 12, true), e4.setUint16(t5 + 4, 26, true), e4.setUint16(t5 + 6, i4, true), e4.setUint16(t5 + 8, a2, true), e4.setUint16(t5 + 10, 20, true), e4.setUint16(t5 + 12, n4, true), e4.setUint16(t5 + 14, s3, true), e4.setInt16(t5 + 16, Math.round(32767.5 * (r3[0] + 1)) - 32768, true), e4.setInt16(t5 + 18, Math.round(32767.5 * (1 - r3[1])) - 32768, true), e4.setInt16(t5 + 20, Math.round(32767.5 * (r3[2] + 1)) - 32768, true), e4.setInt16(t5 + 22, Math.round(32767.5 * (1 - r3[3])) - 32768, true), e4.setUint16(t5 + 24, 0, true), e4.setUint16(t5 + 26, 85, true), e4.setUint16(t5 + 28, 0, true), bn(o2, e4, t5 + 30, true, 1e3);
            }
            function es(e4, t5, i4, n4, s3, r3 = 0, o2 = 0) {
              return Zn(e4 = e4.fb(38), 0, n4, t5, i4, s3, r3, o2), e4;
            }
            function ts(e4, t5, i4) {
              return (e4 = e4.fb(10)).setUint32(0, 18, true), e4.setUint8(4, t5), e4.setUint8(5, i4), e4.setUint32(6, 1), e4;
            }
            var is = class {
              constructor(e4) {
                this.g = e4;
              }
              enable() {
                this.g.Nc = true;
              }
              disable() {
                this.g.Nc = false;
              }
              updateInput(e4, t5, i4) {
                this.g.Nc && (_t(Ft()), this.g.$d = e4, this.g.ae = t5, this.g.Zd = i4, this.g.be = true);
              }
            };
            class ns {
              constructor(e4) {
                this.buttons = e4.Hb(e4.ba), this.axes = e4.Gb(e4.ba), this.Lb = e4.Ib(e4.ba), this.timestamp = performance.now();
              }
            }
            const ss = { startDelay: 0, duration: 0, weakMagnitude: 0, strongMagnitude: 0 };
            function rs(e4) {
              var t5, i4, n4, s3, r3, o2, a2 = null !== (i4 = null !== (t5 = Wt) && void 0 !== t5 ? t5 : Ci.gamepadPollInterval) && void 0 !== i4 ? i4 : 4;
              e4.qa = a2, a2 = null === (s3 = null !== (n4 = ii) && void 0 !== n4 ? n4 : Ci.allowHaptics) || void 0 === s3 || s3, e4.allowHaptics = a2, n4 = null !== (o2 = null !== (r3 = di) && void 0 !== r3 ? r3 : Ci.synthesizeGamepadHid) && void 0 !== o2 && o2, e4.T = n4;
            }
            function os(e4, t5) {
              var i4, n4;
              rs(e4), t5 = null != t5 ? t5 : 0, vi && (t5 |= 1), mi && (t5 |= 2), e4.T && t5 ? (e4.L = null !== (i4 = vi) && void 0 !== i4 ? i4 : !!(1 & t5), e4.W = null !== (n4 = mi) && void 0 !== n4 ? n4 : !!(2 & t5), as(e4, true)) : (e4.L = false, e4.W = false);
            }
            function as(e4, t5 = false) {
              var i4 = false;
              if (e4.g.Nc && !e4.g.qb) e4.g.qb ? i4 = false : (d.i("{515a922}", "{132d93a}", e4.g.Mb), e4.g.qb = true, e4.C = { Dd: "Nvidia Virtual Gamepad", state: 0, buttons: 0, Lb: 0, axes: [] }, ds(e4, e4.g.Mb, false), i4 = true);
              else if (!e4.g.Nc && e4.g.qb) e: if (e4.g.qb) {
                d.i("{515a922}", "{98ac7c2}", e4.g.Mb), e4.g.qb = false, ls(e4);
                var n4 = e4.g.Mb;
                for (var s3 of e4.h) if (s3 && 1 == s3.Ca && s3.ha === n4) {
                  i4 = false;
                  break e;
                }
                i4 = us(e4, n4);
              } else i4 = false;
              for (s3 = navigator.getGamepads(), n4 = 0; n4 < s3.length; n4++) {
                let a2 = s3[n4];
                if (a2) if (Ds(e4, a2, n4)) {
                  var r3 = e4, o2 = a2;
                  r3.h[n4].ba = o2, r3.hapticsSupported = r3.hapticsSupported || ks(o2), Ps(r3), t5 && ((r3 = (i4 = e4.h[n4]).Ca) !== (o2 = Ss(e4, a2)) && (1 === r3 ? (us(e4, i4.ha), i4.Ca = o2, i4.ha = hs(e4, o2), Os(e4, i4)) : (Ms(e4, i4), i4.Ca = o2, i4.ha = hs(e4, o2), ds(e4, n4, Rs(a2)))), i4 = true);
                } else Ts(e4, n4, true), Cs(e4, a2, n4) && (i4 = true);
                else Ts(e4, n4, true) && (i4 = true);
              }
              if (i4) {
                e4.Eb();
                for (const t6 of e4.h) 2 == (null == t6 ? void 0 : t6.Ca) && Os(e4, t6);
              }
              e4.Z = true;
            }
            function ds(e4, t5, i4) {
              t5 = e4.g.qb && t5 === e4.g.Mb ? e4.g.Mb : e4.h[t5].ha, e4.j |= 4 > t5 ? 1 << t5 : 0, t5 = 4 > t5 ? 1 << t5 + 8 : 0, e4.j = i4 ? e4.j | t5 : e4.j & ~t5;
            }
            function cs(e4) {
              const t5 = e4.buttons, i4 = e4.Lb;
              return "A:" + (4096 & t5 ? "1" : "0") + "_B:" + (8192 & t5 ? "1" : "0") + "_X:" + (16384 & t5 ? "1" : "0") + "_Y:" + (32768 & t5 ? "1" : "0") + "_LB:" + (256 & t5 ? "1" : "0") + "_LSB:" + (64 & t5 ? "1" : "0") + "_RB:" + (512 & t5 ? "1" : "0") + "_RSB:" + (128 & t5 ? "1" : "0") + "_LT:" + (255 & i4 ? "1" : "0") + "_RT:" + (65280 & i4 ? "1" : "0") + "_DU:" + (1 & t5 ? "1" : "0") + "_DD:" + (2 & t5 ? "1" : "0") + "_DL:" + (4 & t5 ? "1" : "0") + "_DR:" + (8 & t5 ? "1" : "0") + "_ST:" + (16 & t5 ? "1" : "0") + "_BA:" + (32 & t5 ? "1" : "0") + "_LS:" + (2 <= (e4 = e4.axes).length && (2 === e4[0] || 2 === e4[1]) ? "1" : "0") + "_RS:" + (4 !== e4.length || 2 !== e4[2] && 2 !== e4[3] ? "0" : "1");
            }
            function ls(e4) {
              var t5;
              e4.C && (null === (t5 = e4.G) || void 0 === t5 || yo(t5, e4.C.Dd, "0", "0", 0, false, true, e4.C.state, cs(e4.C)), e4.C = void 0);
            }
            function us(e4, t5) {
              return !(t5 === e4.g.Mb && e4.g.qb || (e4.j &= ~(4 > t5 ? 1 << t5 : 0), e4.j &= ~(4 > t5 ? 1 << t5 + 8 : 0), 0));
            }
            function hs(e4, t5) {
              let i4 = [];
              for (let n4 of e4.h) n4 && n4.Ca == t5 && (i4[n4.ha] = true);
              for (e4 = 0; i4[e4]; ) e4++;
              return e4;
            }
            function ps(e4, t5) {
              -1 < (t5 = e4.l.indexOf(t5)) && e4.l.splice(t5, 1);
            }
            function fs(e4, t5) {
              return !!("standard" == t5.mapping || e4.fa || e4.ea || ws(e4, t5) || ys(t5) || Es(e4, t5));
            }
            function vs(e4, t5) {
              var i4;
              for (let n4 of e4.h) {
                if (!n4) continue;
                let s3 = n4.ba;
                fs(e4, s3) && (1 === n4.Ca ? (t5.$c(0, s3.index, n4.ha, 0, 0, [0, 0, 0, 0], performance.now(), e4.j, s3.id), t5.Yc(1)) : null === (i4 = t5.Wc) || void 0 === i4 || i4.call(t5, s3.index, n4.ha, 0, 0, [0, 0, 0, 0], performance.now(), e4.j, s3.id));
              }
            }
            function ms(e4, t5) {
              const i4 = e4.F;
              t5 != i4 && (i4 ? (e4.m && (e4.m.stop(), e4.m.reset(), ps(e4, e4.m), e4.F = false), e4.o && e4.l.push(e4.o)) : (e4.o && (ps(e4, e4.o), vs(e4, e4.o)), e4.m && (e4.l.push(e4.m), e4.H && e4.m.start(), e4.F = true)));
            }
            function gs(e4, t5, i4 = false) {
              return e4.Z || (t5 |= 2), i4 && (t5 |= 1), t5;
            }
            function As(e4, t5, i4) {
              return { Dd: i4, state: e4.h[t5.index] ? e4.h[t5.index].Fa.state : gs(e4, 0), buttons: e4.h[t5.index] ? e4.h[t5.index].Fa.buttons : 0, Lb: e4.h[t5.index] ? e4.h[t5.index].Fa.Lb : 0, axes: e4.h[t5.index] ? e4.h[t5.index].Fa.axes : [] };
            }
            function Ss(e4, t5) {
              if (!e4.T) return 1;
              if (e4 = e4.Ka && e4.L && e4.Da && !e4.na) {
                const i4 = pi, n4 = fi;
                if (!((t5.id.includes("Vendor: 054c") || t5.id.includes("Wireless Controller") && t5.id.includes("054c") || i4 || n4) && 18 <= t5.buttons.length)) return 1;
                const s3 = t5.id.includes("Product: 09cc") || t5.id.includes("Product: 05c4") || t5.id.includes("Product: 0ba0") || t5.id.includes("Wireless Controller") && t5.id.includes("09cc");
                if (t5 = (t5.id.includes("Product: 0ce6") || t5.id.includes("Product: 0df2") || n4) && !ui, e4 && (s3 || t5 || i4)) return 2;
              }
              return 1;
            }
            function bs(e4, t5) {
              const i4 = Ss(e4, t5);
              return { ba: t5, mc: true, Ca: i4, Hb: e4.ca, Ib: e4.da, Gb: e4.aa, Fa: As(e4, t5, "Standard Gamepad"), ha: hs(e4, i4) };
            }
            function ws(e4, t5) {
              return !e4.ua && "standard" != t5.mapping && t5.id.includes("Vendor: 054c") && t5.id.includes("Product: 0ce6");
            }
            function ys(e4) {
              return "standard" != e4.mapping && e4.id.includes("Vendor: 045e") && e4.id.includes("Product: 0b13");
            }
            function Es(e4, t5) {
              return e4.S && "standard" != t5.mapping && t5.id.includes("Vendor: 045e") && t5.id.includes("Product: 0b12");
            }
            function Cs(e4, t5, i4) {
              if (fs(e4, t5)) {
                var n4 = function(e5, t6) {
                  if (e5.fa) return bs(e5, t6);
                  if (e5.ea) {
                    var i5 = Ss(e5, t6);
                    return { ba: t6, mc: true, Ca: i5, Hb: e5.Za, Ib: e5.da, Gb: e5.Ua, Fa: As(e5, t6, "Standard Gamepad"), ha: hs(e5, i5) };
                  }
                  return e5.va ? null : "standard" != t6.mapping || !t6.id.includes("Vendor: 0955") || e5.xa || e5.wa ? t6.id.includes("Vendor: 045e") && (t6.id.includes("Product: 0b13") || t6.id.includes("Product: 0b20") || t6.id.includes("Product: 0b05") || t6.id.includes("Product: 02e0") || t6.id.includes("Product: 02fd")) ? { ba: t6, mc: true, Ca: i5 = Ss(e5, t6), Hb: e5.ca, Ib: e5.da, Gb: e5.aa, Fa: As(e5, t6, "Standard Gamepad"), Gg: true, ha: hs(e5, i5) } : "standard" == t6.mapping ? bs(e5, t6) : ws(e5, t6) ? { ba: t6, mc: false, Ca: i5 = Ss(e5, t6), Hb: e5.Ta.bind(e5), Ib: e5.$.bind(e5, 3, 4), Gb: e5.sa, Fa: As(e5, t6, "Dual Sense Gamepad"), ha: hs(e5, i5) } : ys(t6) ? { ba: t6, mc: false, Ca: i5 = Ss(e5, t6), Hb: e5.ab.bind(e5), Ib: e5.$.bind(e5, 3, 4), Gb: e5.sa, Fa: As(e5, t6, "Xbox Series Gamepad"), ha: hs(e5, i5) } : Es(e5, t6) ? { ba: t6, mc: false, Ca: i5 = Ss(e5, t6), Hb: e5.Va.bind(e5), Ib: e5.$.bind(e5, 2, 5), Gb: e5.Sa, Fa: As(e5, t6, "Xbox Series Wired Gamepad"), ha: hs(e5, i5) } : (d.e("{515a922}", "{be4bfd9}", t6), null) : { ba: t6, mc: true, Ca: i5 = Ss(e5, t6), Hb: e5.ca, Ib: e5.$a, Gb: e5.aa, Fa: As(e5, t6, "Nvidia Shield Gamepad"), ha: hs(e5, i5) };
                }(e4, t5);
                if (n4) {
                  e4.hapticsSupported = e4.hapticsSupported || ks(n4.ba), Ps(e4);
                  const o2 = e4.j;
                  var s3 = e4.h[i4], r3 = e4.s;
                  const a2 = Rs(t5);
                  return e4.h[i4] = n4, void 0 === e4.I[i4] && (e4.I[i4] = 0), s3 && Ds(e4, t5, i4) ? e4.h[i4].ha = s3.ha : (0 == e4.s && (e4.gamepadPollInterval = e4.qa, Is(e4)), e4.s++, 2 === n4.Ca ? (Os(e4, n4), e4.U.set(n4.ha, i4)) : (ds(e4, i4, a2), e4.Zb.set(n4.ha, i4))), s3 = s3 ? "Changing" : "Adding", (t5 = o2 !== e4.j) ? d.i("{515a922}", "{96051ae}", s3, i4, a2, n4.ba.id) : r3 != e4.s && d.i("{515a922}", "{98be0dd}", s3, i4, n4.ba.id), t5;
                }
                for (r3 of e4.l) r3.Uc(t5);
                return Ts(e4, i4);
              }
              for (n4 of e4.l) n4.Uc(t5);
              return Ts(e4, i4);
            }
            function Ts(e4, t5, i4 = false, n4) {
              var s3, r3;
              let o2 = e4.h[t5];
              if (o2) {
                d.i("{515a922}", "{1b26b8a}", t5, o2.ba.id);
                const a2 = o2.Ca, c2 = e4.M[t5];
                if (c2) {
                  const t6 = performance.now() - c2.timestamp;
                  3e3 <= t6 && c2.axes.some((e5) => 0.5 < Math.abs(e5)) && (d.w("{515a922}", "{fde5612}", t6, c2.axes.join()), null === (s3 = e4.G) || void 0 === s3 || wo(s3, "GamepadStuck", o2.ba.id, t6.toString(), c2.axes.join()));
                }
                if (i4) {
                  const [t6, i5] = function(e5) {
                    let t7 = ["-1", "-1"];
                    return (e5 = /Vendor:[ ]+([\w\d]+).+Product:[ ]+([\w\d]+)/.exec(e5)) && 3 <= e5.length && (t7 = [e5[1], e5[2]]), t7;
                  }(o2.ba.id);
                  null === (r3 = e4.G) || void 0 === r3 || yo(r3, o2.Fa.Dd, t6, i5, o2.ba.index, !!o2.ba.g && 0 < o2.ba.g.length, null != n4 ? n4 : function(e5, t7) {
                    let i6 = false;
                    for (const n5 of e5.h) if (n5) {
                      t7 === n5.ba.index && (i6 = true);
                      break;
                    }
                    return i6;
                  }(e4, o2.ba.index), o2.Fa.state, cs(o2.Fa));
                }
                if (delete e4.h[t5], delete e4.I[t5], delete e4.M[t5], e4.hapticsSupported = function(e5) {
                  let t6 = false;
                  for (let i5 of e5.h) i5 && (t6 = t6 || ks(i5.ba));
                  return t6;
                }(e4), Ps(e4), e4.s--, 0 == e4.s && (e4.gamepadPollInterval = 100, Is(e4)), 2 !== a2) return e4.Zb.delete(o2.ha), us(e4, o2.ha);
                Ms(e4, o2), e4.U.delete(o2.ha);
              }
              return false;
            }
            function Is(e4) {
              0 != e4.N && (clearInterval(e4.N), e4.N = 0), e4.N = e4.H && !Fi ? window.setInterval(e4.Qa, e4.gamepadPollInterval) : 0;
            }
            function Rs(e4) {
              return e4.id.includes("Xbox") || e4.id.includes("xinput");
            }
            function ks(e4) {
              var t5;
              return "dual-rumble" == (null === (t5 = e4.vibrationActuator) || void 0 === t5 ? void 0 : t5.type);
            }
            function Ps(e4) {
              var t5, i4;
              e4.O = e4.H && e4.hapticsSupported;
              var n4, s3 = e4.O;
              if (e4.ta != s3 && (e4.ta = s3, e4.allowHaptics)) for (const t6 of e4.l) null === (n4 = t6.Fg) || void 0 === n4 || n4.call(t6, s3);
              if (!e4.O) {
                s3 = navigator.getGamepads();
                for (let n5 of s3) n5 && (e4.P[n5.index] = 0, e4.R[n5.index] = 0, null === (i4 = null === (t5 = n5.vibrationActuator) || void 0 === t5 ? void 0 : t5.playEffect) || void 0 === i4 || i4.call(t5, "dual-rumble", ss));
              }
            }
            function Ds(e4, t5, i4) {
              var n4, s3;
              return null != t5.id && t5.id == (null === (s3 = null === (n4 = e4.h[i4]) || void 0 === n4 ? void 0 : n4.ba) || void 0 === s3 ? void 0 : s3.id);
            }
            function Os(e4, t5) {
              var i4;
              switch (t5.Ca) {
                case 3:
                  d.e("{515a922}", "{ea001a4}", t5.ba.id);
                  break;
                case 2:
                  for (const n4 of e4.l) null === (i4 = n4.gg) || void 0 === i4 || i4.call(n4, t5.ha);
                  break;
                default:
                  d.e("{515a922}", "{36eeed4}", t5.ba.id);
              }
            }
            function Ms(e4, t5) {
              var i4;
              switch (t5.Ca) {
                case 3:
                  d.e("{515a922}", "{2b2d286}", t5.ba.id);
                  break;
                case 2:
                  for (const n4 of e4.l) null === (i4 = n4.Of) || void 0 === i4 || i4.call(n4, t5.ha);
                  break;
                default:
                  d.e("{515a922}", "{fafe5f9}", t5.ba.id);
              }
            }
            function Ns(e4) {
              switch (Number.parseFloat((null != e4 ? e4 : 0).toFixed(5))) {
                case 0.71429:
                  return 4;
                case -0.42857:
                  return 8;
                case -1:
                  return 1;
                case 0.14286:
                  return 2;
                case 1.28571:
                  return 0;
                case 1:
                  return 5;
                case -0.71429:
                  return 9;
                case 0.42857:
                  return 6;
                case -0.14286:
                  return 10;
                default:
                  return 0;
              }
            }
            function Ls(e4, t5) {
              return (0 > t5 ? 1 : 0) | (0 < t5 ? 2 : 0) | (0 > e4 ? 4 : 0) | (0 < e4 ? 8 : 0);
            }
            function xs(e4, t5, i4, n4) {
              e4.buttons |= t5, e4.Lb |= i4, 0 === e4.axes.length ? e4.axes = [n4[0], n4[1], n4[2], n4[3]] : (e4.axes[0] = 2 == e4.axes[0] || e4.axes[0] !== n4[0] ? 2 : e4.axes[0], e4.axes[1] = 2 == e4.axes[1] || e4.axes[1] !== n4[1] ? 2 : e4.axes[1], e4.axes[2] = 2 == e4.axes[2] || e4.axes[2] !== n4[2] ? 2 : e4.axes[2], e4.axes[3] = 2 == e4.axes[3] || e4.axes[3] !== n4[3] ? 2 : e4.axes[3]);
            }
            function Fs(e4, t5) {
              e: {
                for (let i4 = 0; i4 < e4.v.length; i4++) {
                  const n4 = e4.v[i4];
                  if (n4.$b === t5.$b && n4.ic === t5.ic && n4.jc === t5.jc && n4.mb === t5.mb) {
                    t5 = i4;
                    break e;
                  }
                }
                t5 = -1;
              }
              -1 !== t5 && e4.v.splice(t5, 1);
            }
            function _s(e4) {
              e4.H = true, rs(e4), Ps(e4), Di && (e4.windowAddEventListener("gamepadconnected", e4.oa), e4.windowAddEventListener("gamepaddisconnected", e4.pa), Is(e4), e4.F && e4.m.start(), as(e4, true));
            }
            function Us(e4, t5, i4, n4) {
              if (e4.O) {
                var s3 = e4.h[t5];
                if (s3) {
                  let c2 = s3.ba;
                  if (c2) if (0 != i4 || 0 != n4) {
                    var r3, o2, a2 = performance.now(), d2 = a2 - e4.ga[t5];
                    e4.P[t5] = i4 / 65535, e4.R[t5] = n4 / 65535, (!s3.Gg || 500 < d2) && (e4.ga[t5] = a2, null === (o2 = null === (r3 = c2.vibrationActuator) || void 0 === r3 ? void 0 : r3.playEffect) || void 0 === o2 || o2.call(r3, "dual-rumble", { startDelay: 0, duration: 1e3, weakMagnitude: e4.R[t5], strongMagnitude: e4.P[t5] }));
                  } else e4.ga[t5] = performance.now(), e4.P[t5] = 0, e4.R[t5] = 0, null === (d2 = null === (a2 = c2.vibrationActuator) || void 0 === a2 ? void 0 : a2.playEffect) || void 0 === d2 || d2.call(a2, "dual-rumble", ss);
                }
              }
            }
            function js(e4) {
              return rs(e4), as(e4), e4.j;
            }
            var Gs = class {
              constructor(e4, t5) {
                this.N = this.s = this.j = 0, this.gamepadPollInterval = 100, this.qa = 4, this.P = [], this.R = [], this.ga = [], this.ta = this.O = this.hapticsSupported = false, this.allowHaptics = true, this.F = this.H = false, this.ja = 0, this.Z = this.ua = this.wa = this.xa = this.S = this.fa = this.ea = this.va = this.ka = false, this.maxSchedulingDelay = 0, this.v = [], this.W = this.L = this.T = false, this.Da = true, this.na = this.bb = false, this.Zb = /* @__PURE__ */ new Map(), this.U = /* @__PURE__ */ new Map(), this.windowAddEventListener = t5 && t5.windowAddEventListener ? t5.windowAddEventListener.bind(window) : window.addEventListener.bind(window), this.windowRemoveEventListener = t5 && t5.windowRemoveEventListener ? t5.windowRemoveEventListener.bind(window) : window.removeEventListener.bind(window), this.oa = this.Na.bind(this), this.pa = this.Oa.bind(this), this.Qa = this.ra.bind(this), this.h = [], this.M = [], this.I = [], this.l = [], this.u = e4, t5 = e4.os;
                const i4 = e4.osVer;
                this.ea = (e4 = ("iOS" == t5 || "iPadOS" == t5) && "Safari" == e4.browser) && i4.startsWith("13"), this.fa = e4 && i4.startsWith("14"), this.va = e4 && "12-" == i4, this.S = "ChromeOS" == t5, this.xa = "WebOS" == t5, this.wa = "Tizen" == t5, this.ua = "Android" == t5, this.g = { Mb: 0, Nc: false, qb: false, $d: 0, ae: 0, Zd: [], be: false }, this.cb = new is(this.g), rs(this), this.Ka = !ci, os(this), d.d("{515a922}", "{b0c674b}");
              }
              cd() {
                return this.F;
              }
              Eb() {
                for (const e4 of this.l) e4.Eb(this.j);
              }
              Na(e4) {
                Cs(this, e4.gamepad, e4.gamepad.index) && this.Eb();
              }
              Oa(e4) {
                Ts(this, e4.gamepad.index, true) && this.Eb();
              }
              ca(e4) {
                return ((e4 = e4.buttons)[0].value ? 4096 : 0) | (e4[1].value ? 8192 : 0) | (e4[2].value ? 16384 : 0) | (e4[3].value ? 32768 : 0) | (e4[4].value ? 256 : 0) | (e4[5].value ? 512 : 0) | (e4[8] && e4[8].value ? 32 : 0) | (e4[9] && e4[9].value ? 16 : 0) | (e4[10] && e4[10].value ? 64 : 0) | (e4[11] && e4[11].value ? 128 : 0) | (e4[12] && e4[12].value ? 1 : 0) | (e4[13] && e4[13].value ? 2 : 0) | (e4[14] && e4[14].value ? 4 : 0) | (e4[15] && e4[15].value ? 8 : 0) | (e4[16] && e4[16].value ? 65536 : 0) | (e4[17] && e4[17].value ? 131072 : 0);
              }
              da(e4) {
                var t5, i4;
                e4 = e4.buttons;
                let n4 = Math.round(255 * (null === (t5 = e4[6]) || void 0 === t5 ? NaN : t5.value));
                return (255 & Math.round(255 * (null === (i4 = e4[7]) || void 0 === i4 ? NaN : i4.value))) << 8 | 255 & n4;
              }
              $a(e4) {
                var t5, i4;
                e4 = e4.buttons;
                let n4 = Math.round(255 * (null === (t5 = e4[7]) || void 0 === t5 ? NaN : t5.value));
                return (255 & Math.round(255 * (null === (i4 = e4[6]) || void 0 === i4 ? NaN : i4.value))) << 8 | 255 & n4;
              }
              $(e4, t5, i4) {
                return (255 & Math.round(127.5 * (i4.axes[t5] + 1))) << 8 | 255 & Math.round(127.5 * (i4.axes[e4] + 1));
              }
              aa(e4) {
                return e4.axes;
              }
              Ua(e4) {
                return [e4.axes[0], -e4.axes[1], e4.axes[2], -e4.axes[3]];
              }
              sa(e4) {
                return [e4.axes[0], e4.axes[1], e4.axes[2], e4.axes[5]];
              }
              Sa(e4) {
                return [e4.axes[0], e4.axes[1], e4.axes[3], e4.axes[4]];
              }
              Za(e4) {
                var t5, i4, n4, s3, r3, o2;
                let a2 = e4.buttons;
                return e4 = e4.axes, (null !== (t5 = a2[0]) && void 0 !== t5 && t5.value ? 4096 : 0) | (null !== (i4 = a2[1]) && void 0 !== i4 && i4.value ? 8192 : 0) | (null !== (n4 = a2[2]) && void 0 !== n4 && n4.value ? 16384 : 0) | (null !== (s3 = a2[3]) && void 0 !== s3 && s3.value ? 32768 : 0) | (null !== (r3 = a2[4]) && void 0 !== r3 && r3.value ? 256 : 0) | (null !== (o2 = a2[5]) && void 0 !== o2 && o2.value ? 512 : 0) | (0 < e4[5] ? 1 : 0) | (0 > e4[5] ? 2 : 0) | (0 > e4[4] ? 4 : 0) | (0 < e4[4] ? 8 : 0);
              }
              Ta(e4) {
                var t5, i4, n4, s3, r3, o2, a2, d2, c2, l2;
                let u2 = e4.buttons;
                return e4 = this.S ? Ls(e4.axes[6], e4.axes[7]) : Ns(e4.axes[9]), (null !== (t5 = u2[1]) && void 0 !== t5 && t5.value ? 4096 : 0) | (null !== (i4 = u2[2]) && void 0 !== i4 && i4.value ? 8192 : 0) | (null !== (n4 = u2[0]) && void 0 !== n4 && n4.value ? 16384 : 0) | (null !== (s3 = u2[3]) && void 0 !== s3 && s3.value ? 32768 : 0) | (null !== (r3 = u2[4]) && void 0 !== r3 && r3.value ? 256 : 0) | (null !== (o2 = u2[5]) && void 0 !== o2 && o2.value ? 512 : 0) | (null !== (a2 = u2[8]) && void 0 !== a2 && a2.value ? 32 : 0) | (null !== (d2 = u2[9]) && void 0 !== d2 && d2.value ? 16 : 0) | (null !== (c2 = u2[10]) && void 0 !== c2 && c2.value ? 64 : 0) | (null !== (l2 = u2[11]) && void 0 !== l2 && l2.value ? 128 : 0) | e4;
              }
              ab(e4) {
                var t5, i4, n4, s3, r3, o2, a2, d2, c2, l2;
                let u2 = e4.buttons;
                return e4 = Ns(e4.axes[9]), (null !== (t5 = u2[0]) && void 0 !== t5 && t5.value ? 4096 : 0) | (null !== (i4 = u2[1]) && void 0 !== i4 && i4.value ? 8192 : 0) | (null !== (n4 = u2[3]) && void 0 !== n4 && n4.value ? 16384 : 0) | (null !== (s3 = u2[4]) && void 0 !== s3 && s3.value ? 32768 : 0) | (null !== (r3 = u2[6]) && void 0 !== r3 && r3.value ? 256 : 0) | (null !== (o2 = u2[7]) && void 0 !== o2 && o2.value ? 512 : 0) | (null !== (a2 = u2[10]) && void 0 !== a2 && a2.value ? 32 : 0) | (null !== (d2 = u2[11]) && void 0 !== d2 && d2.value ? 16 : 0) | (null !== (c2 = u2[13]) && void 0 !== c2 && c2.value ? 64 : 0) | (null !== (l2 = u2[14]) && void 0 !== l2 && l2.value ? 128 : 0) | e4;
              }
              Va(e4) {
                var t5, i4, n4, s3, r3, o2, a2, d2, c2, l2;
                let u2 = e4.buttons;
                return e4 = Ls(e4.axes[6], e4.axes[7]), (null !== (t5 = u2[0]) && void 0 !== t5 && t5.value ? 4096 : 0) | (null !== (i4 = u2[1]) && void 0 !== i4 && i4.value ? 8192 : 0) | (null !== (n4 = u2[2]) && void 0 !== n4 && n4.value ? 16384 : 0) | (null !== (s3 = u2[3]) && void 0 !== s3 && s3.value ? 32768 : 0) | (null !== (r3 = u2[4]) && void 0 !== r3 && r3.value ? 256 : 0) | (null !== (o2 = u2[5]) && void 0 !== o2 && o2.value ? 512 : 0) | (null !== (a2 = u2[6]) && void 0 !== a2 && a2.value ? 32 : 0) | (null !== (d2 = u2[7]) && void 0 !== d2 && d2.value ? 16 : 0) | (null !== (c2 = u2[9]) && void 0 !== c2 && c2.value ? 64 : 0) | (null !== (l2 = u2[10]) && void 0 !== l2 && l2.value ? 128 : 0) | e4;
              }
              Yb() {
                for (const e4 of this.l) e4.Yb(this.g.$d, this.g.ae, this.g.Mb, this.g.Zd, this.j);
              }
              ra() {
                var e4, t5 = performance.now();
                this.ya && (this.maxSchedulingDelay = Math.max(this.maxSchedulingDelay, t5 - this.ya - this.gamepadPollInterval)), this.ya = t5, as(this);
                let i4 = t5 = 0;
                for (let c2 of this.h) {
                  if (!c2) continue;
                  const l2 = Nn(c2.ba.timestamp);
                  let u2 = c2.ba;
                  if (!fs(this, u2)) continue;
                  if (c2.ba.timestamp <= this.I[u2.index]) {
                    this.Pa && 5e3 <= performance.now() - c2.ba.timestamp && this.Pa();
                    continue;
                  }
                  this.I[u2.index] = c2.ba.timestamp;
                  const h2 = this.M[u2.index];
                  var n4, s3 = new ns(c2);
                  if ((n4 = h2) && (n4 = h2.buttons == s3.buttons && h2.Lb == s3.Lb)) {
                    e: {
                      n4 = h2.axes;
                      for (var r3 = 0; r3 < n4.length; r3++) if (0.01 < Math.abs(n4[r3] - s3.axes[r3])) {
                        n4 = true;
                        break e;
                      }
                      n4 = false;
                    }
                    n4 = !n4;
                  }
                  if (!n4) {
                    if (this.M[u2.index] = s3, s3 = c2.Ib(u2), n4 = c2.Hb(u2), r3 = c2.Gb(u2), zi) if (n4 & (f(this.u) ? 64 : 128)) {
                      if (this.ka) {
                        this.ka = false;
                        var o2 = performance.now();
                        o2 < this.ja + 500 ? (ms(this), this.ja = 0) : this.ja = o2;
                      }
                    } else this.ka = true;
                    for (let e5 of this.v) {
                      o2 = void 0;
                      var a2 = e5.$b, d2 = e5.jc;
                      const t6 = (e5.ic | a2) === n4;
                      d2 = !!(255 & d2) == 229.5 <= (255 & s3) && !!(65280 & d2) == 58752 <= (65280 & s3);
                      const i5 = !((null !== (o2 = null == h2 ? void 0 : h2.buttons) && void 0 !== o2 ? o2 : 0) & a2 || !(n4 & a2));
                      t6 && d2 && i5 && e5.mb();
                    }
                    switch (c2.Ca) {
                      case 1:
                        for (const e5 of this.l) e5.$c(i4, u2.index, c2.ha, n4, s3, r3, l2, this.j, u2.id);
                        i4++;
                        break;
                      case 2:
                        for (const t6 of this.l) null === (e4 = t6.Wc) || void 0 === e4 || e4.call(t6, u2.index, c2.ha, n4, s3, r3, c2.ba.timestamp, this.j, u2.id);
                    }
                    t5++, xs(c2.Fa, n4, s3, r3);
                  }
                }
                if (t5 && _t(Ft()), i4) for (const e5 of this.l) e5.Yc(i4);
                this.g.qb && this.g.be && (this.Yb(), this.g.be = false, this.C && xs(this.C, this.g.$d, this.g.ae, this.g.Zd));
              }
              getVirtualGamepadHandler() {
                return this.cb;
              }
            };
            function Bs(e4, t5, i4, n4) {
              var s3 = [];
              s3[0] = -0.1 < n4[0] && 0.1 > n4[0] ? 0 : n4[0], s3[1] = -0.1 < n4[1] && 0.1 > n4[1] ? 0 : n4[1], s3[2] = -0.1 < n4[2] && 0.1 > n4[2] ? 0 : n4[2], s3[3] = -0.1 < n4[3] && 0.1 > n4[3] ? 0 : n4[3], n4 = s3[e4.Vf], s3 = s3[e4.Wf];
              const r3 = 4 - 3 * Math.min(1, Math.sqrt(n4 * n4 + s3 * s3));
              e4.Hc = n4 * e4.scale / r3, e4.Ic = s3 * e4.scale / r3, t5 = !!(4224 & t5) || 58752 <= (65280 & i4), i4 = 229.5 <= (255 & i4), n4 = e4.wc, s3 = e4.xc, e4.wc = t5, e4.xc = i4, !t5 && n4 && Vs(e4, 0, false), !i4 && s3 && Vs(e4, 2, false), t5 && !n4 && Vs(e4, 0, true), i4 && !s3 && Vs(e4, 2, true);
            }
            function Vs(e4, t5, i4) {
              t5 = new MouseEvent(i4 ? e4.Bd : e4.Yd, { button: t5, buttons: (e4.wc ? 1 : 0) | (e4.xc ? 2 : 0) }), e4.df.dispatchEvent(t5);
            }
            var Hs = class {
              constructor(e4, t5) {
                this.Lc = 0, this.Bg = 8, this.vb = this.ub = this.Ic = this.Hc = 0, this.xc = this.wc = false, this.scale = 12, this.kc = "mousemove", this.Bd = "mousedown", this.Yd = "mouseup", this.Vf = 2, this.Wf = 3, this.u = t5, this.df = e4, this.Dg = this.Cg.bind(this), f(this.u) && (this.Vf = 0, this.Wf = 1);
              }
              $c(e4, t5, i4, n4, s3, r3) {
                Bs(this, n4, s3, r3);
              }
              Wc(e4, t5, i4, n4, s3) {
                Bs(this, i4, n4, s3);
              }
              Cg() {
                this.ub = Math.sign(this.ub) != Math.sign(this.Hc) ? this.Hc : this.ub + this.Hc, this.vb = Math.sign(this.vb) != Math.sign(this.Ic) ? this.Ic : this.vb + this.Ic;
                var e4 = 0;
                let t5 = 0;
                if ((1 <= this.ub || -1 >= this.ub) && (e4 = Math.trunc(this.ub), this.ub -= e4), (1 <= this.vb || -1 >= this.vb) && (t5 = Math.trunc(this.vb), this.vb -= t5), 0 != e4 || 0 != t5) {
                  let i4;
                  e4 = { movementX: e4, movementY: t5, isPrimary: true }, i4 = "pointerrawupdate" == this.kc || "pointermove" == this.kc ? new PointerEvent(this.kc, e4) : new MouseEvent("mousemove", e4), this.df.dispatchEvent(i4);
                }
              }
              start() {
                this.Lc && this.stop(), this.Lc = window.setInterval(this.Dg, this.Bg);
              }
              stop() {
                this.Lc && (clearInterval(this.Lc), this.Lc = 0);
              }
              reset() {
                this.wc && Vs(this, 0, false), this.xc && Vs(this, 2, false), this.ub = this.vb = this.Hc = this.Ic = 0, this.wc = this.xc = false;
              }
              Eb() {
              }
              Yc() {
              }
              Yb() {
              }
              Uc() {
              }
            };
            function Ws(e4) {
              return { zf: "image/x-icon", scale: 1, ...e4 };
            }
            const zs = { style: "default", Ma: "AAABAAEAICACAAEAAQAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYAAAAOAAAADAAAABwAAAAYAAAAOAAABDAAAAZwAAAHYAAAB4AAAAf+AAAH/AAAB/gAAAfwAAAH4AAAB8AAAAeAAAAHAAAABgAAAAQAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////5////8P///+D////h////wf//98P///OD///xh///8Af///AP///wAH//8AD///AB///wA///8Af///AP///wH///8D////B////w////8f////P////3/////////8=", Ha: 2, Ia: 1 }, Ks = [{ style: "none", Ma: "", Ha: 0, Ia: 0 }, zs, { style: "text", Ma: "AAABAAEAICACAAEAAQAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfvwAAAAAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAfPwAAAAAAAAAAAAAAAAAA/////////////////////////////////////+BA///Agf///z////8/////P////z////8/////P////z////8/////P////z////8/////P////z////8/////P////z////8/////P////z///+BA///Agf////////////8=", Ha: 8, Ia: 13 }, { style: "wait", Ma: "AAABAAEAICACAAEAAQAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/8AAAzzAAAHDgAABfoAAAb2AAADbAAAAfgAAABgAAAAYAAAAGAAAABgAAAAYAAAAGAAAABgAAAB+AAAA/wAAAaWAAAH/gAABWoAAA//AAAP/wAAAAAAAAAAAAA//////////////////////////////////////////+AAf//gAH//4AB//+AAf//wAP//8AD///gB///8A////gf///8P////D////w////8P////D////gf///wD///4Af//8AD///AA///gAH//4AB//+AAf//gAH///////8=", Ha: 7, Ia: 12 }, { style: "crosshair", Ma: "AAABAAEAICACAAEAAQAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAABjAAABgMAAAQBAAAIAIAACACAABAAQAAAIAAAEABAAAgAgAAIAIAABgMAAAICAAABjAAAAFAAAAAAAAA//////////////////////////////////////////////////////////////////////////////////////4////5T///53P//+97///fff//333//79+//+AAP//v37//999///fff//53P///d3///5T////j////////8=", Ha: 8, Ia: 8 }, { style: "progress", Ma: "AAABAAEAICACAAEAAQAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4AAAAiAAAAPgAAABwAAAYIAAAOCAAADAgAABwcAAAYNgAAOCoABDA+AAZwAAAHYAAAB4AAAAf+AAAH/AAAB/gAAAfwAAAH4AAAB8AAAAeAAAAHAAAABgAAAAQAAAAAAAAAAAAAAAAAAAA///////////////////////+A////gP///4D///+A///5wf//8OP//+Dj///h4///wcH/98OA//ODgP/xh4D/8AeA//AP///wAH//8AD///AB///wA///8Af///AP///wH///8D////B////w////8f////P////3/////////8=", Ha: 2, Ia: 1 }, { style: "nwse-resize", Ma: "AAABAAEAICACAAEAAQAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP4AAAB+AAAAPgAAAB4AAABuAAAA5gAAAcIAAEOAAABnAAAAdgAAAHgAAAB8AAAAfgAAAH8AAAAAAAAAAAAAA/////////////////////////////////////////////////////////////////////////////////wA///+AP///wD///+A////gP///wD//34A//88GP//GDz//wB+//8A////Af///wH///8A////AH///wA////////8=", Ha: 9, Ia: 8 }, { style: "nesw-resize", Ma: "AAABAAEAICACAAEAAQAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfwAAAH4AAAB8AAAAeAAAAHYAAABnAAAAQ4AAAAHCAAAA5gAAAG4AAAAeAAAAPgAAAH4AAAD+AAAAAAAAAAAAA////////////////////////////////////////////////////////////////////////////////wA///8Af///AP///wH///8B////AP///wB+//8YPP//PBj//34A////AP///4D///+A////AP///gD///wA///////8=", Ha: 9, Ia: 9 }, { style: "ew-resize", Ma: "AAABAAEAICACAAEAAQAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAEAABgBgAA4AcAAeAHgAPv98AH7/fgA+/3wAHgB4AA4AcAAGAGAAAgBAAAAAAAAAAAAAAAAAA//////////////////////////////////////////////////////////////////////////////////////+/3///P8///j/H//w/w//4P8H/8AAA/+AAAH/AAAA/4AAAf/AAAP/4P8H//D/D//4/x///P8///7/f//////8=", Ha: 13, Ia: 8 }, { style: "ns-resize", Ma: "AAABAAEAICACAAEAAQAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAADgAAAB8AAAA/gAAAf8AAAP/gAAAAAAAADgAAAA4AAAAOAAAADgAAAA4AAAAOAAAADgAAAA4AAAAAAAAA/+AAAH/AAAA/gAAAHwAAAA4AAAAEAAAAAAAAAAAAAA//////////////////////////////////////+/////H////g////wH///4A///8AH//+AA///AAH///g////4P///+D////g////4P///+D////g////4P///AAH//4AD///AB///4A////Af///4P////H////7////////8=", Ha: 9, Ia: 12 }, { style: "move", Ma: "AAABAAEAICACAAEAAQAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAABwAAAA+AAAAHAAAABwAAAAcAAAAHAAAABwAAAgACAAf3fwAP93+AB/d/AAIAAgAABwAAAAcAAAAHAAAABwAAAAcAAAAPgAAABwAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////////////f////j////wf///4D///8Af///wf///8H///vB7//zwef/4AAD/8AAAf+AAAD/wAAB/+AAA//zwef/+8Hv///B////wf///wB///+A////wf///+P////3///////////////////////8=", Ha: 13, Ia: 12 }, zs, { style: "pointer", Ma: "AAABAAEAICACAAEAAQAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH+AAAB/gAAA/4AAAP/AAAH/wAAB/8AAA//gAAP/4AAH/+AADttgABzbYAAY2wAAANsAAADYAAAAwAAAAMAAAAAAAAAAAAAA//////////////////////////////////////////////////////////////////////+Af///AD///wA///4AP//+AB///AAf//wAH//4AA//+AAP//AAD//gAA//wAAP/8IAH//mAH///gD///4H///+H////z////////8=", Ha: 8, Ia: 3 }, { style: "help", Ma: "AAABAAEAICACAAEAAQAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAGAAAAAAAAAAAAAAAAAAAABgAAAAYAAAYHAAAOAYAADADAABwwwAAYMMAAODDABDAZgAZwDwAHYAAAB4AAAAf+AAAH/AAAB/gAAAfwAAAH4AAAB8AAAAeAAAAHAAAABgAAAAQAAAAAAAAAAAAAAAAAAAA/////////////+f////D////5//////////n////w///58P//8PB//+D4P//hzB//wYYf98OGH/ODhh/xh8A/8Afgf/AP8P/wAH//8AD///AB///wA///8Af///AP///wH///8D////B////w////8f////P////3/////////8=", Ha: 2, Ia: 1 }];
            function qs(e4) {
              e4.preventDefault();
            }
            function $s(e4) {
              var t5, i4;
              return e4.yb() && 2 != e4.cursorType && e4.s.h && (!e4.g.rb || e4.g.yd) && (null === (i4 = null === (t5 = hd(e4.D)) || void 0 === t5 ? void 0 : t5.Db()) || void 0 === i4 || i4);
            }
            function Js(e4) {
              return 1 === e4.m || 2 === e4.m;
            }
            function Xs(e4) {
              var t5 = $s(e4);
              const i4 = Js(e4), n4 = e4.o && !e4.g.rb, s3 = e4.Ka;
              !e4.Db || !t5 || i4 && n4 === s3 ? !t5 && i4 && (document.exitPointerLock ? (e4.m = 3, document.exitPointerLock()) : e4.m = 0) : (t5 = e4.v).requestPointerLock && 3 > e4.P ? (e4.m = 1, (t5 = t5.requestPointerLock({ unadjustedMovement: n4 })) && (e4.ua = true, t5.then(() => {
                e4.m = 2, e4.Ka = n4, e4.P = 0;
              }).catch((t6) => {
                e4.m = 0, "NotSupportedError" === t6.name && n4 ? (d.i("{70cc40b}", "{08fd91e}"), e4.o = false, Xs(e4)) : ("UnknownError" == t6.name ? (e4.P++, d.w("{70cc40b}", "{9f2ba9f}", e4.P)) : d.e("{70cc40b}", "{4cdd98f}", t6.name, t6.message), lr(e4));
              }))) : e4.m = 2;
            }
            function Qs(e4) {
              var t5, i4;
              if (0 === e4.cursorType) {
                var n4 = e4.v.getBoundingClientRect(), s3 = null !== (i4 = null === (t5 = e4.v.parentElement) || void 0 === t5 ? void 0 : t5.getBoundingClientRect()) && void 0 !== i4 ? i4 : new DOMRect(0, 0, 0, 0);
                t5 = n4.left - s3.left + e4.J.ma * e4.J.Xa, n4 = n4.top - s3.top + e4.J.ma * e4.J.Ra, e4.j.style.position = "absolute", e4.j.style.left = t5 + "px", e4.j.style.top = n4 + "px", e4.j.style.zIndex = "200";
              }
            }
            function Ys(e4) {
              var t5 = e4.j.getContext("2d");
              if (t5 && (e4.h.pg = t5, t5 = window.devicePixelRatio, e4.h.wb != t5)) {
                d.i("{70cc40b}", "{b786ba9}", t5), e4.h.wb = t5, e4.h.bd = true;
                for (const t6 of e4.W.values()) t6.style = void 0;
                nr(e4);
              }
            }
            function Zs(e4, t5) {
              if (e4.T && e4.I !== t5) switch (e4.C && mr(e4), e4.I = t5, e4.C && fr(e4), t5) {
                case 1:
                  e4.H = 4;
                  break;
                case 2:
                  e4.H = 8;
                  break;
                case 3:
                  e4.H = 16;
                  break;
                default:
                  e4.H = 0;
              }
            }
            function er(e4, t5, i4, n4) {
              t5 >= e4.U.length ? d.e("{70cc40b}", "{de8eabe}", t5) : hr(e4, e4.U[t5], i4, n4);
            }
            function tr(e4) {
              e4.O && (window.clearTimeout(e4.O), e4.O = 0);
            }
            function ir(e4, t5, i4) {
              rr(e4, t5 - e4.J.Xa, i4 - e4.J.Ra);
            }
            function nr(e4) {
              e4.h.Vc = true;
            }
            function sr(e4, t5) {
              if (t5 instanceof PointerEvent) {
                if (Sr(t5)) return;
                t5.preventDefault();
              }
              let i4 = performance.now();
              if (e4.s.h && (!$s(e4) || Js(e4)) && (0 !== t5.movementX || 0 !== t5.movementY)) {
                e4.lc(true);
                var n4 = 1, s3 = 0, r3 = e4.g.rb, o2 = e4.ia.h, a2 = (t6) => {
                  if (e4.R.update(t6.movementX, t6.movementY, t6.timeStamp)) {
                    var o3 = e4.R.jf(), a3 = e4.R.kf();
                    if (r3) {
                      if (e4.g.yd) {
                        var d2 = e4.S ? e4.h.wb : 1;
                        rr(e4, e4.g.sb + o3 / d2, e4.g.tb + a3 / d2);
                      } else ir(e4, t6.offsetX, t6.offsetY);
                      e4.h.Vc = true, o3 = e4.g.sb, a3 = e4.g.tb;
                    } else e4.S && (d2 = e4.h.wb, o3 += e4.g.Sd, a3 += e4.g.Td, e4.g.Sd = o3 % d2, e4.g.Td = a3 % d2, o3 /= d2, a3 /= d2);
                    e: {
                      if (d2 = e4.ia, t6 = Nn(t6.timeStamp), 0 != s3 % n4 && 0 < d2.j) {
                        const e5 = d2.l[d2.j - 1];
                        if (e5.ib === r3 && e5.yc === i4) {
                          r3 ? (e5.x = o3, e5.y = a3) : (e5.x += o3, e5.y += a3);
                          break e;
                        }
                      }
                      d2.j == d2.l.length ? (d2.l.push({ ib: r3, x: o3, y: a3, captureTimestamp: t6, jb: 0, yc: i4 }), d2.j++) : ((d2 = d2.l[d2.j++]).ib = r3, d2.x = o3, d2.y = a3, d2.captureTimestamp = t6, d2.jb = 0, d2.yc = i4);
                    }
                    s3++;
                  }
                };
                if (t5 instanceof PointerEvent && e4.$) {
                  const i5 = t5.getCoalescedEvents();
                  if (0 == i5.length) a2(t5);
                  else {
                    t5 = e4.ia.g.length, t5 = i5.length > 2 * t5 ? 1 : Math.max(t5 - e4.ia.h - 4, 1), i5.length > t5 && (n4 = Math.ceil(i5.length / t5), e4.V.Rc += i5.length);
                    for (let e5 of i5) a2(e5);
                  }
                } else a2(t5);
                1 < e4.l.zg && 0 === o2 && e4.ia.h > o2 && (e4.ia.l[o2].jb = e4.ia.h - o2);
              }
            }
            function rr(e4, t5, i4) {
              e4.g.sb = Math.min(Math.max(t5, 0), e4.J.eb), e4.g.tb = Math.min(Math.max(i4, 0), e4.J.Wa), nr(e4);
            }
            function or(e4, t5) {
              if (e4.J.eb && e4.J.Wa) {
                const i4 = t5.Wa / e4.J.Wa;
                e4.g.sb *= t5.eb / e4.J.eb, e4.g.tb *= i4;
              }
              e4.J = t5, Qs(e4), Ys(e4);
            }
            function ar(e4) {
              return 1.499 <= e4 && 1.999 > e4 ? 2 : Math.max(1, Math.floor(e4 + 1e-3));
            }
            function dr(e4, t5) {
              const i4 = e4.g.cursor;
              if (i4.image) {
                var n4 = e4.h.wb, s3 = e4.h.pg, r3 = i4.image.width * t5;
                t5 *= i4.image.height;
                var o2 = Math.ceil(r3), a2 = Math.ceil(t5);
                o2 !== e4.j.width || a2 !== e4.j.height ? (e4.j.style.width = r3 / n4 + "px", e4.j.style.height = t5 / n4 + "px", e4.j.width = o2, e4.j.height = a2, s3.scale(1, 1), s3.imageSmoothingEnabled = false) : s3.clearRect(0, 0, e4.j.width, e4.j.height), s3.drawImage(i4.image, 0, 0, r3, t5);
              } else d.e("{70cc40b}", "{bc9bdcd}");
            }
            function cr(e4) {
              e4.h.od && (e4.h.od = false, e4.j.style.visibility = "hidden");
            }
            function lr(e4) {
              const t5 = e4.v;
              !e4.yb() || $s(e4) && !Js(e4) || 2 == e4.cursorType ? t5.style.cursor = "default" : t5.style.cursor = 0 === e4.cursorType ? "none" : e4.g.style;
            }
            function ur(e4, t5) {
              const i4 = () => {
                if (e4.g.Ac = void 0, e4.g.cursor = t5, e4.h.bd = true, 0 === e4.cursorType) nr(e4);
                else {
                  if (!t5.style) {
                    var i5 = e4.h.wb, n4 = 1, s3 = 1;
                    void 0 !== e4.Da && (s3 = (n4 = ar(i5 / t5.scale)) / i5), dr(e4, n4), i5 = e4.j.toDataURL("image/bmp"), n4 = t5.Ha * s3, s3 = t5.Ia * s3;
                    const r3 = e4.h.wb, o2 = e4.Da;
                    t5.style = o2 ? `${o2}(url(${i5}) ${r3}x) ${n4} ${s3}, auto` : `url(${i5}) ${n4} ${s3}, auto`;
                  }
                  e4.g.style = t5.style, lr(e4);
                }
              };
              if (0 !== e4.cursorType && t5.style) i4();
              else if ("none" !== t5.style) if (t5.image) 0 !== t5.image.width || 0 !== t5.image.height ? i4() : e4.g.Ac = t5.image;
              else {
                const n4 = new Image();
                t5.image = n4, !n4.decode && n4.decoding && (n4.decoding = "sync"), n4.src = `data:${t5.zf};base64,${t5.Ma}`, n4.decode ? (e4.g.Ac = n4, n4.decode().then(() => {
                  e4.g.Ac === n4 && i4();
                }).catch(() => {
                  e4.g.Ac === n4 && (e4.g.Ac = void 0, ur(e4, e4.U[1]));
                })) : i4();
              }
              else e4.g.cursor = t5, cr(e4);
            }
            function hr(e4, t5, i4, n4) {
              const s3 = "none" !== t5.style;
              !e4.g.rb && s3 && void 0 !== i4 && void 0 !== n4 && rr(e4, i4 * e4.J.eb / 65535, n4 * e4.J.Wa / 65535), e4.g.rb = s3, s3 || (e4.g.Sd = 0, e4.g.Td = 0), Xs(e4), ur(e4, t5), lr(e4);
            }
            function pr(e4) {
              0 !== e4.M && (window.clearTimeout(e4.M), e4.M = 0);
            }
            function fr(e4) {
              2 == e4.cursorType ? (e4.N.kc = gr(e4), e4.videoAddEventListener(gr(e4), e4.L ? e4.ka : e4.ja)) : 0 !== e4.I ? (e4.N.kc = "pointerrawupdate", e4.videoAddEventListener("pointerrawupdate", e4.wa)) : (e4.N.kc = gr(e4), e4.videoAddEventListener(gr(e4), e4.va));
            }
            function vr(e4) {
              if (0 < e4.F.size) {
                d.i("{70cc40b}", "{041c67f}", e4.F.size);
                for (const t5 of e4.F) e4.Ab(t5, 0);
              }
            }
            function mr(e4) {
              2 == e4.cursorType ? e4.videoRemoveEventListener(gr(e4), e4.L ? e4.ka : e4.ja) : 0 !== e4.I ? e4.videoRemoveEventListener("pointerrawupdate", e4.wa) : e4.videoRemoveEventListener(gr(e4), e4.va);
            }
            function gr(e4) {
              return e4.L ? "pointermove" : "mousemove";
            }
            var Ar = class {
              constructor(e4, t5, i4, n4, s3, r3, o2, a2, c2, l2, u2, h2) {
                var p2, f2, v2, m2, g2, A2, C2, T2, I2, R2, k2, P2, D2, O2, N2, L2, x2, F2;
                this.Ba = e4, this.s = h2, this.W = /* @__PURE__ */ new Map(), this.U = Ks.map(Ws), this.P = this.m = 0, this.Db = false, this.F = /* @__PURE__ */ new Set(), this.ua = this.Ka = this.o = this.$ = this.L = this.T = false, this.H = this.I = 0, this.ca = false, this.ra = { passive: false }, this.Z = true, this.C = false, this.O = this.M = 0, this.Sa = () => {
                  this.O = 0, $s(this) && !Js(this) && (this.Db = true, Xs(this));
                }, this.u = o2, this.D = t5, this.v = i4, this.G = s3, this.Na = r3, this.N = a2, this.V = c2, this.ia = l2, this.l = u2, n4.onmessage = (e5) => function(e6, t6) {
                  let i5 = new Uint8Array(t6.data);
                  switch (i5[0]) {
                    case 0:
                    case 1:
                      t6 = i5[1];
                      let o3 = i5[2], a3 = i5[3];
                      var n5 = i5[4];
                      let c3 = 5, l3 = () => {
                        const e7 = i5[c3] + (i5[c3 + 1] << 8);
                        return c3 += 2, e7;
                      };
                      var s4 = "";
                      0 != n5 && (s4 = i5.subarray(c3, c3 + n5), c3 += n5, s4 = new TextDecoder("utf-8").decode(s4));
                      var r4 = "";
                      let u3, h3, p3;
                      0 != (n5 = l3()) && (r4 = i5.subarray(c3, c3 + n5), c3 += n5, r4 = new TextDecoder("utf-8").decode(r4)), c3 + 4 <= i5.byteLength && (u3 = l3(), h3 = l3()), c3 + 2 <= i5.byteLength && (p3 = l3() / 100), 0 == i5[0] ? er(e6, t6, u3, h3) : function(e7, t7, i6, n6, s5, r5, o4, a4, c4) {
                        if (0 < r5.length) i6 = { Ma: r5, Ha: i6, Ia: n6, zf: s5, scale: c4 || 1 }, e7.W.set(t7, i6);
                        else if (void 0 === (i6 = e7.W.get(t7))) return void d.e("{70cc40b}", "{0196577}", t7);
                        hr(e7, i6, o4, a4);
                      }(e6, t6, o3, a3, s4, r4, u3, h3, p3);
                      break;
                    case 10:
                      e6.Na.allowUnconfined && function(e7, t7) {
                        e7.g.yd = t7, Xs(e7);
                      }(e6, 1 == i5[1]);
                  }
                }(this, e5), this.J = { eb: i4.clientWidth || window.screen.width, Wa: i4.clientHeight || window.screen.height, Sf: 1, Xa: 0, Ra: 0, videoWidth: 0, videoHeight: 0, Pc: 0, offsetX: 0, offsetY: 0, ma: 1 }, e4 = window.zoneless, this.documentAddEventListener = null !== (f2 = null === (p2 = null == e4 ? void 0 : e4.documentAddEventListener) || void 0 === p2 ? void 0 : p2.bind(document)) && void 0 !== f2 ? f2 : document.addEventListener.bind(document), this.documentRemoveEventListener = null !== (m2 = null === (v2 = null == e4 ? void 0 : e4.documentRemoveEventListener) || void 0 === v2 ? void 0 : v2.bind(document)) && void 0 !== m2 ? m2 : document.removeEventListener.bind(document), this.videoAddEventListener = null !== (T2 = null !== (A2 = null === (g2 = null == e4 ? void 0 : e4.videoAddEventListener) || void 0 === g2 ? void 0 : g2.bind(i4)) && void 0 !== A2 ? A2 : null === (C2 = null == e4 ? void 0 : e4.documentAddEventListener) || void 0 === C2 ? void 0 : C2.bind(document)) && void 0 !== T2 ? T2 : i4.addEventListener.bind(i4), this.videoRemoveEventListener = null !== (P2 = null !== (R2 = null === (I2 = null == e4 ? void 0 : e4.videoRemoveEventListener) || void 0 === I2 ? void 0 : I2.bind(i4)) && void 0 !== R2 ? R2 : null === (k2 = null == e4 ? void 0 : e4.documentRemoveEventListener) || void 0 === k2 ? void 0 : k2.bind(document)) && void 0 !== P2 ? P2 : i4.removeEventListener.bind(i4), this.fa = this.na.bind(this), this.xa = this.$a.bind(this), this.pa = this.oa.bind(this), this.ya = this.bb.bind(this), this.qa = this.Ta.bind(this), this.va = this.ab.bind(this), this.wa = this.Va.bind(this), this.ja = this.ga.bind(this), this.ka = this.Qa.bind(this), this.ta = this.Ua.bind(this), this.sa = this.Za.bind(this), this.da = this.Oa.bind(this), this.ea = this.Pa.bind(this), this.aa = !!r3.windowedStreaming, this.cursorType = null !== (O2 = null !== (D2 = function() {
                  switch (Si) {
                    case "hw":
                      return 1;
                    case "sw":
                      return 0;
                    case "free":
                      return 2;
                  }
                }()) && void 0 !== D2 ? D2 : r3.cursorType) && void 0 !== O2 ? O2 : this.aa ? 2 : 0, d.i("{70cc40b}", "{3277c0e}", this.cursorType), this.g = { rb: false, yd: 0 === this.cursorType && !r3.allowUnconfined, sb: 0, tb: 0, Sd: 0, Td: 0, style: "", cursor: this.U[0] }, this.h = { wb: 1, Vc: false, bd: false, od: false }, this.Da = ["image-set", "-webkit-image-set"].find((e5) => CSS.supports("cursor", `${e5}(url(image.bmp) 2x) 0 0, auto`)), 0 === this.cursorType ? (this.j = function(e5) {
                  let t6 = "canvasId1";
                  var i5 = document.getElementById(t6);
                  if (i5 && i5 instanceof HTMLCanvasElement && i5.parentElement === e5.parentElement) return i5;
                  if (i5) do {
                    t6 = "canvasId" + Math.round(1e4 * Math.random()), i5 = document.getElementById(t6);
                  } while (i5);
                  return (i5 = document.createElement("canvas")).id = t6, i5.style.touchAction = "none", i5.style.pointerEvents = "none", i5.style.willChange = "transform", e5.insertAdjacentElement("afterend", i5), i5;
                }(this.v), this.j.style.visibility = "hidden", this.j.style.display = "none") : this.j = document.createElement("canvas"), Qs(this), Ys(this), this.T = "onpointerrawupdate" in this.v, this.$ = (this.L = On()) && "getCoalescedEvents" in PointerEvent.prototype && "Firefox" !== o2.browser, d.i("{70cc40b}", "{f30b8ee}", this.$ ? "supported" : "not supported"), this.T && (i4 = function() {
                  const e5 = Ci.mouseCoalesceInterval;
                  if (void 0 !== e5) return (/* @__PURE__ */ new Map([[0, 0], [4, 1], [8, 2], [16, 3]])).get(e5);
                }(), void 0 !== i4 ? Zs(this, i4) : b(o2) ? Zs(this, 3) : Zs(this, 1), d.i("{70cc40b}", "{20be0c0}", this.H, void 0 !== i4 ? " (overridden)" : "")), this.o = null !== (N2 = r3.unadjustedMovement) && void 0 !== N2 ? N2 : w(this.u) ? !this.aa && M(this.u, 84, 0, 4147, 78) : b(this.u) || y(this.u) ? M(this.u, 86, 0, 4240, 198) : "Safari" === this.u.browser, r3 = b(o2) && M(this.u, 84, 0, 4147, 94) && !M(this.u, 88, 0, 4324, 139), r3 = w(this.u) || !r3 || !M(this.u, 84, 0, 4147, 94), (null !== (L2 = Vt) && void 0 !== L2 ? L2 : r3) ? this.R = new class {
                  constructor() {
                    this.l = this.j = this.o = this.m = this.F = this.C = this.s = this.h = this.g = 0, this.v = false;
                  }
                  jf() {
                    return this.g;
                  }
                  kf() {
                    return this.h;
                  }
                  update(e5, t6, i5) {
                    if (0 === e5 && 0 === t6) return this.v ? this.l = this.j = 0 : this.v = true, false;
                    if (this.v = false, 0 === this.j && 0 === this.l) {
                      if (i5 < this.s) return this.j = e5, this.l = t6, false;
                    } else e5 += this.j, t6 += this.l, this.l = this.j = 0;
                    var n5 = e5 * this.g + t6 * this.h, s4 = e5 * e5 + t6 * t6, r4 = this.g * this.g + this.h * this.h, o3 = true;
                    if (0.95 > i5 - this.s && 0 > n5 && 0 !== r4 && n5 * n5 > 0.81 * s4 * r4 && (n5 = Math.sqrt(s4) / Math.sqrt(r4), 0.5 < (n5 = Math.abs(n5 - Math.trunc(n5))) && (n5 = 1 - n5), 0.1 > n5 && (o3 = false)), n5 = e5 - this.g, s4 = t6 - this.h, o3 && (o3 = 2 * (r4 = 1 + 0.1 * Math.max(1, Math.min(16, i5 - this.s))) * Math.abs(this.C), r4 = 2 * r4 * Math.abs(this.F), !(o3 = n5 * n5 + s4 * s4 < (r4 = Math.max(8100, o3 * o3 + r4 * r4))) && (this.m || this.o))) {
                      o3 = e5 - this.m;
                      const i6 = t6 - this.o;
                      o3 = o3 * o3 + i6 * i6 < r4;
                    }
                    return o3 ? (this.C = 0.4 * this.C + 0.6 * n5, this.F = 0.4 * this.F + 0.6 * s4, this.g = e5, this.h = t6, this.s = i5, this.o = this.m = 0, true) : (this.m = e5, this.o = t6, false);
                  }
                }() : this.R = new class {
                  constructor() {
                    this.y = this.x = 0;
                  }
                  jf() {
                    return this.x;
                  }
                  kf() {
                    return this.y;
                  }
                  update(e5, t6) {
                    return this.x = e5, this.y = t6, true;
                  }
                }(), ["pointerlockchange", "mozpointerlockchange"].forEach((e5) => this.documentAddEventListener(e5, this.ta)), ["pointerlockerror", "mozpointerlockerror"].forEach((e5) => this.documentAddEventListener(e5, this.sa)), $a(this.s, 0, this.da), $a(this.s, 2, this.ea), S(this.u) || E(this.u) ? this.S = true : "Chrome" != o2.browser || M(o2, 99, 0, 4844, 44) || y(o2) ? this.S = false : this.S = true, 1 === this.cursorType && er(this, 1), this.cb = 1 === this.cursorType && (null === (F2 = null !== (x2 = bi) && void 0 !== x2 ? x2 : Ci.pointerLockEscape) || void 0 === F2 || F2), this.lb = 1 === this.cursorType && "Safari" === o2.browser, d.d("{70cc40b}", "{ec7c4c5}");
              }
              uninitialize() {
                ["pointerlockerror", "mozpointerlockerror"].forEach((e4) => this.documentRemoveEventListener(e4, this.sa)), ["pointerlockchange", "mozpointerlockchange"].forEach((e4) => this.documentRemoveEventListener(e4, this.ta)), Ja(this.s, 0, this.da), Ja(this.s, 2, this.ea), tr(this);
              }
              $a(e4) {
                Sr(e4) || (e4.preventDefault(), this.na(e4), 2 === this.cursorType && this.v.setPointerCapture(e4.pointerId));
              }
              na(e4) {
                var t5;
                null === (t5 = this.D.R) || void 0 === t5 || 2 == t5.g && (d.i("{4c846ba}", "{89b1a9f}"), tc(t5), ec(t5), ic(t5)), Xa(this.s, true), this.Db = true, t5 = Nn(e4.timeStamp), $s(this) && !Js(this) ? (Xs(this), this.g.rb && (ir(this, e4.offsetX, e4.offsetY), nr(this), Qn(this.l, this.g.sb, this.g.tb, t5))) : (this.lb && this.g.rb && (tr(this), this.O = window.setTimeout(this.Sa, 500)), _t(Ft()), this.Jb(e4.button, t5));
              }
              bb(e4) {
                Sr(e4) || (e4.preventDefault(), this.oa(e4));
              }
              oa(e4) {
                _t(Ft()), this.Ab(e4.button, Nn(e4.timeStamp));
              }
              Ta(e4) {
                this.aa && e4.target !== this.v || ($n(this.l, e4.deltaY, Nn(e4.timeStamp)), e4.preventDefault());
              }
              Qa(e4) {
                if (!Sr(e4)) {
                  if (e4.preventDefault(), -1 !== e4.button) {
                    let t5;
                    switch (e4.button) {
                      case 1:
                        t5 = 2;
                        break;
                      case 2:
                        t5 = 1;
                        break;
                      default:
                        t5 = e4.button;
                    }
                    const i4 = Nn(e4.timeStamp);
                    e4.buttons & 1 << t5 ? this.Jb(e4.button, i4) : this.Ab(e4.button, i4);
                  }
                  this.ga(e4);
                }
              }
              ga(e4) {
                ir(this, e4.offsetX, e4.offsetY), Qn(this.l, this.g.sb, this.g.tb, Nn(e4.timeStamp));
              }
              ab(e4) {
                sr(this, e4);
              }
              Va(e4) {
                const t5 = 0 < this.l.ia.h;
                sr(this, e4), !t5 && 0 < this.l.ia.h && ((e4 = performance.now() - this.l.tg) >= this.H ? qn(this.l) : function(e5, t6) {
                  e5.Kb = window.setTimeout(() => {
                    e5.Kb = 0, qn(e5);
                  }, t6);
                }(this.l, this.H - e4));
              }
              Pa(e4) {
                this.Db = e4, Xs(this), lr(this);
              }
              Ua() {
                if (document.pointerLockElement instanceof HTMLElement) this.m = 2;
                else {
                  var e4 = 2 === this.m;
                  this.m = 0, pr(this);
                  var t5 = () => {
                    d.i("{70cc40b}", "{d4b3de3}"), this.Db = false, lr(this);
                  }, i4 = this.Ba.Ya.has(27);
                  this.cb && e4 && !i4 ? this.M = window.setTimeout(() => {
                    t5(), 0 !== this.M && (pr(this), Rr(this.Ba, true));
                  }, 50) : (e4 && t5(), Rr(this.Ba, false));
                }
              }
              Za() {
                this.ua || (this.m = 0, this.o ? (this.o = false, d.e("{70cc40b}", "{7599808}"), Xs(this)) : (d.e("{70cc40b}", "{d633cd1}"), lr(this)));
              }
              yb() {
                return this.C;
              }
              Oa(e4) {
                e4 ? (this.s.j && (this.Db = true, Xs(this)), Ys(this)) : (Xs(this), 0 !== this.M && (pr(this), Rr(this.Ba, false)));
              }
              Jb(e4, t5) {
                this.F.has(e4) || (this.F.add(e4), this.l.Jb(e4, t5));
              }
              Ab(e4, t5) {
                this.F.has(e4) && (this.F.delete(e4), this.l.Ab(e4, t5));
              }
              lc(e4) {
                this.Z != e4 && (nr(this), this.Z = e4);
              }
            };
            function Sr(e4) {
              return !e4.isPrimary || "touch" === e4.pointerType || "pen" === e4.pointerType;
            }
            const br = [{ Bc: 8, fc: 128, rd: Qr(), Wb: 27, Xb: [] }, { Bc: 46, fc: 128, rd: Qr(), Wb: 27, Xb: [] }];
            function wr(e4, t5, i4, n4) {
              1 === e4.J.ma && (Hr(e4, t5, n4, i4), e4.I.delay(() => {
                e4.Jb(0, i4);
              }));
            }
            function yr(e4, t5) {
              1 === e4.J.ma && (Kr(e4.I), e4.Ab(0, t5));
            }
            function Er(e4) {
              var t5 = e4.h;
              t5.ca = false, nr(t5), 1.1 > e4.J.ma && Mr(e4, e4.J.offsetX, e4.J.offsetY, 1);
            }
            function Cr(e4) {
              return e4.aa ? (_r(e4), false) : e4.v.h;
            }
            function Tr(e4, t5) {
              if (2 === t5.length) {
                var i4 = e4.h;
                i4.ca = true, nr(i4), i4 = t5[0], t5 = t5[1];
                var n4 = Math.hypot(i4.clientX - t5.clientX, i4.clientY - t5.clientY), s3 = Math.hypot(i4.clientX - i4.deltaX - (t5.clientX - t5.deltaX), i4.clientY - i4.deltaY - (t5.clientY - t5.deltaY));
                const r3 = e4.j.getBoundingClientRect(), o2 = Vr(e4);
                n4 = n4 / s3 * e4.J.ma, n4 = Math.min(Math.max(n4, 1), 3), s3 = (i4.clientX + t5.clientX) / 2 - r3.left, s3 += e4.J.offsetX - o2.pb - (r3.width - s3) / e4.J.ma, s3 = (n4 / e4.J.ma - 1) * s3 * -1, s3 += e4.J.offsetX + (i4.deltaX + t5.deltaX) / 2;
                let a2 = (i4.clientY + t5.clientY) / 2 - r3.top;
                a2 += e4.J.offsetY - o2.vertical - (r3.height - a2) / e4.J.ma, a2 = (n4 / e4.J.ma - 1) * a2 * -1, a2 += e4.J.offsetY + (i4.deltaY + t5.deltaY) / 2, Mr(e4, s3, a2, n4);
              }
            }
            function Ir(e4, t5, i4, n4, s3) {
              switch (Kr(e4.I), s3) {
                case 1:
                  Hr(e4, t5, n4, i4), e4.I.delay(() => {
                    Wr(e4, 0, i4);
                  });
                  break;
                case 2:
                  e4.ka++, jt && 0 === e4.F && (e4.F = window.setTimeout(() => {
                    2 === e4.ka ? e4.D.toggleOnScreenStats() : 3 === e4.ka && e4.D.toggleOnScreenStats(true), Fr(e4);
                  }, 300)), Wr(e4, 2, i4);
                  break;
                case 3:
                  e4.ga++, jt && 0 === e4.F && (e4.F = window.setTimeout(() => {
                    2 === e4.ga ? e4.D.ja() : 3 === e4.ga && Ka(e4.S), Fr(e4);
                  }, 300)), Wr(e4, 1, i4);
                  break;
                case 4:
                  Wr(e4, 3, i4);
                  break;
                case 5:
                  Wr(e4, 4, i4);
              }
            }
            function Rr(e4, t5) {
              t5 && (xr(e4), d.i("{8bacfa5}", "{f46c4da}"), Yn(e4.g, 3, 27, 0), Yn(e4.g, 4, 27, 0));
            }
            function kr(e4) {
              Dr(e4), e4.fa = window.setTimeout(() => {
                e4.S.send();
              }, 350);
            }
            function Pr(e4, t5) {
              (e4.aa = t5) && 15 !== e4.m && (e4.oa = e4.m, e4.toggleUserInput(true)), t5 ? Ur(e4).forEach((t6) => e4.documentAddEventListener(t6, e4.xa)) : Ur(e4).forEach((t6) => e4.documentRemoveEventListener(t6, e4.xa));
            }
            function Dr(e4) {
              0 !== e4.fa && (window.clearTimeout(e4.fa), e4.fa = 0);
            }
            function Or(e4, t5) {
              if (!(e4.na && 20 === t5.keyCode || v(e4.u) && 20 !== t5.keyCode)) {
                var i4 = 16;
                if (e4.O && e4.ja || !t5.getModifierState("CapsLock") || (i4 |= 1), e4.$a && (i4 |= 96, t5.getModifierState("NumLock") && (i4 |= 2), t5.getModifierState("ScrollLock") && (i4 |= 4)), i4 != e4.ca) {
                  e4.ca = i4, (t5 = (e4 = e4.g).fb(5)).setUint32(0, 19, true), t5.setUint8(4, i4);
                  try {
                    qn(e4, t5), d.d("{57a6a4d}", "{56c9613}", i4.toString(2));
                  } catch (t6) {
                    d.e("{57a6a4d}", "{cbe483c}", t6), e4.G.za(t6, "LockKeys state synchronize exception", "{57a6a4d}.ts", 0, 0, true);
                  }
                }
              }
            }
            function Mr(e4, t5, i4, n4) {
              e4.J.ma = n4;
              let s3 = Vr(e4);
              s3.pb -= e4.J.Xa, s3.vertical -= e4.J.Ra;
              let r3 = Math.max(s3.vertical + Math.max(0, e4.J.Wa - e4.J.Pc + 2 * e4.J.Ra), 0), o2 = Math.max(s3.vertical, 0);
              s3.pb = Math.max(s3.pb, 0), t5 = Math.min(Math.max(t5, -1 * s3.pb), s3.pb), i4 = Math.min(Math.max(i4, -1 * r3), o2), e4.j.style.transform = `translate3d(${t5}px,${i4}px,0px) scale3d(${n4},${n4},1)`, e4.J.offsetX = t5, e4.J.offsetY = i4, or(e4.h, e4.J);
            }
            function Nr(e4, t5) {
              var i4;
              return e4.P ? e4.o && e4.kb ? null != (e4 = null !== (i4 = t5.code) && void 0 !== i4 && i4.length ? Hn.get(t5.code) : Hn.get(t5.key)) ? e4 : 0 : null != (t5 = t5.code ? Hn.get(t5.code) : Wn.get(t5.key)) ? t5 : 0 : t5.keyCode;
            }
            function Lr(e4, t5) {
              var i4 = 0;
              let n4;
              return t5.ctrlKey && !t5.code.startsWith("Control") && (i4 |= 2), t5.altKey && !t5.code.startsWith("Alt") && (i4 |= 4), t5.metaKey && !t5.code.startsWith("Meta") && (i4 |= 8), v(e4.u) && 1 === t5.key.length && ('!@#$%^&*()~_+{}|:"<>?'.includes(t5.key) ? n4 = 1 : "1234567890`-=[]\\;',./".includes(t5.key) && (n4 = 0)), void 0 === n4 && t5.shiftKey && !t5.code.startsWith("Shift") && (n4 = 1), i4 | (null != n4 ? n4 : 0);
            }
            function xr(e4) {
              if (0 < e4.Ya.size) {
                d.i("{8bacfa5}", "{7998ee8}", e4.Ya.size);
                for (const t5 of e4.Ya) Yn(e4.g, 4, t5, 0);
                e4.Ya.clear();
              }
            }
            function Fr(e4) {
              window.clearTimeout(e4.F), e4.F = 0, e4.ka = 0, e4.ga = 0;
            }
            function _r(e4) {
              Pr(e4, false), e4.M.emit("StreamingEvent", { streamingWarnings: { code: 4 } }), e4.Vd(), e4.Ba.Df();
            }
            function Ur(e4) {
              return [gr(e4.h), "pointerdown", "touchstart"];
            }
            function jr(e4, t5) {
              t5 = new TextEncoder().encode(t5), e4.sendTextInput(t5.buffer), e4.textInputElement.value = "";
            }
            function Gr(e4) {
              for (let t5 = e4.length - 1; 0 <= t5; t5--) if (void 0 === zn.get(e4.charAt(t5))) return false;
              return true;
            }
            function Br(e4, t5) {
              let i4 = false;
              16 & e4.ca && (i4 = !!(1 & e4.ca));
              for (let s3 = 0; s3 < t5.length; s3++) {
                var n4 = zn.get(t5.charAt(s3));
                if (!n4) return void d.e("{8bacfa5}", "{67554be}", t5.charAt(s3));
                const r3 = n4.vkCode;
                n4 = n4.shift ? 1 : 0, 65 <= r3 && 90 >= r3 && i4 && (n4 = ~n4), n4 && Yn(e4.g, 3, 160, 0, performance.now()), Yn(e4.g, 3, r3, n4, performance.now()), Yn(e4.g, 4, r3, n4, performance.now()), n4 && Yn(e4.g, 4, 160, 0, performance.now());
              }
              e4.textInputElement.value = "";
            }
            function Vr(e4) {
              return { pb: e4.J.eb * (e4.J.ma - 1) / 2, vertical: e4.J.Wa * (e4.J.ma - 1) / 2 };
            }
            function Hr(e4, t5, i4, n4) {
              Kr(e4.I);
              const s3 = t5.getBoundingClientRect();
              t5 = (i4.clientX - s3.left) / e4.J.ma, i4 = (i4.clientY - s3.top) / e4.J.ma, e4.lc(true), ir(e4.h, t5, i4);
              const { sb: r3, tb: o2 } = e4.h.g;
              Qn(e4.g, r3, o2, n4);
            }
            function Wr(e4, t5, i4) {
              e4.Jb(t5, i4), e4.I.delay(() => {
                e4.Ab(t5, i4);
              });
            }
            var zr = class {
              constructor(e4, t5, i4, n4, s3, r3, o2, a2, c2, l2, u2, h2, p2, f2, m2, g2, A2) {
                var S2, C2, T2, I2, R2, D2, O2, M2, N2, L2, x2, F2, _2, U2, j2, G2, B2, V2, H2, W2, z2, K2;
                this.v = f2, this.ra = false, this.Ya = /* @__PURE__ */ new Set(), this.m = 0, this.kb = false, this.P = true, this.F = 0, this.I = new Jr(), this.T = false, this.H = 0, this.ja = this.qa = false, this.fa = this.ga = this.ka = 0, this.ua = this.ta = "off", this.Z = /* @__PURE__ */ new Map(), this.W = /* @__PURE__ */ new Map(), this.pa = false, this.Ta = () => {
                  d.d("{8bacfa5}", "{9c2578a}"), kr(this);
                }, this.Sa = () => {
                  this.pa = true;
                }, this.Qa = () => {
                  this.pa = false;
                }, this.u = u2, this.D = e4, this.j = t5, this.G = s3, this.Ba = h2, this.S = p2, this.J = { eb: t5.clientWidth || window.screen.width, Wa: t5.clientHeight || window.screen.height, Sf: 1, Xa: 0, Ra: 0, videoWidth: 0, videoHeight: 0, Pc: 0, offsetX: 0, offsetY: 0, ma: 1 }, h2 = window.zoneless, this.windowAddEventListener = null !== (C2 = null === (S2 = null == h2 ? void 0 : h2.windowAddEventListener) || void 0 === S2 ? void 0 : S2.bind(window)) && void 0 !== C2 ? C2 : window.addEventListener.bind(window), this.windowRemoveEventListener = null !== (I2 = null === (T2 = null == h2 ? void 0 : h2.windowRemoveEventListener) || void 0 === T2 ? void 0 : T2.bind(window)) && void 0 !== I2 ? I2 : window.removeEventListener.bind(window), this.documentAddEventListener = null !== (D2 = null === (R2 = null == h2 ? void 0 : h2.documentAddEventListener) || void 0 === R2 ? void 0 : R2.bind(document)) && void 0 !== D2 ? D2 : document.addEventListener.bind(document), this.documentRemoveEventListener = null !== (M2 = null === (O2 = null == h2 ? void 0 : h2.documentRemoveEventListener) || void 0 === O2 ? void 0 : O2.bind(document)) && void 0 !== M2 ? M2 : document.removeEventListener.bind(document), this.videoAddEventListener = null !== (F2 = null !== (L2 = null === (N2 = null == h2 ? void 0 : h2.videoAddEventListener) || void 0 === N2 ? void 0 : N2.bind(t5)) && void 0 !== L2 ? L2 : null === (x2 = null == h2 ? void 0 : h2.documentAddEventListener) || void 0 === x2 ? void 0 : x2.bind(document)) && void 0 !== F2 ? F2 : t5.addEventListener.bind(t5), this.videoRemoveEventListener = null !== (G2 = null !== (U2 = null === (_2 = null == h2 ? void 0 : h2.videoRemoveEventListener) || void 0 === _2 ? void 0 : _2.bind(t5)) && void 0 !== U2 ? U2 : null === (j2 = null == h2 ? void 0 : h2.documentRemoveEventListener) || void 0 === j2 ? void 0 : j2.bind(document)) && void 0 !== G2 ? G2 : t5.removeEventListener.bind(t5), this.Na = this.Ka.bind(this), this.Pa = this.Oa.bind(this), this.va = this.wa.bind(this), this.sa = this.bb.bind(this), this.ea = this.da.bind(this), this.Va = this.Nb.bind(this), this.Ua = this.lb.bind(this), this.xa = this.cb.bind(this), this.ab = this.Cb.bind(this), this.L = this.Bb.bind(this), this.N = c2, this.preventNavigation = !!o2.preventNavigation, c2 = new class {
                  constructor() {
                    this.m = false, this.j = 0, this.l = Array(36);
                    for (let e5 = 0; e5 < this.g.length; e5++) this.l[e5] = { ib: false, x: 0, y: 0, captureTimestamp: 0, jb: 0, yc: 0 };
                  }
                  get g() {
                    return this.l;
                  }
                  get h() {
                    return this.j;
                  }
                }(), this.g = new class {
                  constructor(e5, t6, i5, n5, s4, r4, o3, a3) {
                    this.La = this.ud = 0, this.buffer = new ArrayBuffer(1150), this.ig = new DataView(this.buffer), this.Kg = new ArrayBuffer(658), this.gb = new DataView(this.Kg), this.Fb = new DataView(new ArrayBuffer(176)), this.Jg = new ArrayBuffer(100), this.Kb = 0, this.Ff = this.xg, this.fb = this.ng, this.Oc = [], this.Ba = e5, this.ia = t6, this.D = s4, this.J = n5, this.Ja = r4, this.Ja.onmessage = (e6) => {
                      if (e6 = new DataView(e6.data), 0 === this.La) {
                        let t7 = e6.getUint16(0, true);
                        526 == t7 ? (this.Fd = this.qg.bind(this), this.La = e6.getUint16(2, true)) : (this.Fd = this.ad.bind(this), this.La = t7), 2 == this.La ? this.ia.m = true : 2 < this.La && (this.ia.m = true, this.Ff = this.yg, this.fb = this.og), d.i("{57a6a4d}", "{68c4654}", this.La);
                      } else this.Fd(e6, 0);
                    }, this.Aa = a3, this.G = o3, this.V = i5, this.Fd = this.ad.bind(this), this.gb.setUint8(9, 34), this.gb.setUint32(10, 24, true), this.Aa && (this.Zc = 1);
                  }
                  qg(e5, t6) {
                    var i5 = e5.getUint16(t6, true);
                    if (267 === i5) this.ad(e5, t6 + 2);
                    else switch (t6 = 255 & i5) {
                      case 32:
                      case 33:
                      case 34:
                      case 35:
                      case 36:
                      case 255:
                        if (34 === (i5 = t6)) switch (i5 = e5.getUint32(1, true)) {
                          case 267:
                            this.ad(e5, 5);
                            break;
                          case 17:
                            if (6 <= (t6 = e5.getUint8(5)) && 9 >= t6) {
                              i5 = t6 - 6;
                              var n5 = e5.getUint8(8), s4 = e5.getUint8(9);
                              if (5 !== n5 || 1 & ~s4) d.w("{57a6a4d}", "{d8b7bec}", n5, s4, t6);
                              else {
                                t6 = e5.getUint8(12) << 8;
                                const r4 = e5.getUint8(13) << 8;
                                for (const o3 of this.Oc) {
                                  n5 = t6, s4 = r4;
                                  const a3 = (e5 = o3).U.get(i5);
                                  void 0 !== a3 && Us(e5, a3, n5, s4);
                                }
                              }
                            } else d.w("{57a6a4d}", "{6135ec1}", t6);
                            break;
                          default:
                            d.w("{57a6a4d}", "{25be6a3}", i5);
                        }
                        else d.d("{57a6a4d}", "{ba4ff6a}", i5);
                        break;
                      default:
                        d.w("{57a6a4d}", "{aea35b8}", i5);
                    }
                  }
                  ad(e5, t6) {
                    var i5 = e5.getUint16(t6, true);
                    if (1 == i5) if (6 > (i5 = e5.getUint16(t6 + 2, true))) d.e("{57a6a4d}", "{1527181}", i5);
                    else {
                      6 < i5 && d.w("{57a6a4d}", "{78db114}", i5), i5 = e5.getUint16(t6 + 4, true);
                      var n5 = e5.getUint16(t6 + 6, true);
                      e5 = e5.getUint16(t6 + 8, true);
                      for (const o3 of this.Oc) {
                        var s4 = n5, r4 = e5;
                        const a3 = (t6 = o3).Zb.get(i5);
                        void 0 !== a3 && Us(t6, a3, s4, r4);
                      }
                    }
                    else d.w("{57a6a4d}", "{c7cf6da}", i5);
                  }
                  Jb(e5, t6) {
                    const i5 = this.fb(18);
                    i5.setUint32(0, 8, true), i5.setUint8(4, e5 + 1), i5.setUint8(5, 0), i5.setUint32(6, 0), bn(t6, i5, 10, false, 1e3);
                    try {
                      qn(this, i5);
                    } catch (e6) {
                      d.e("{57a6a4d}", "{b258856}", e6), this.G.za(e6, "send mousedown exception", "{57a6a4d}.ts", 0, 0, true);
                    }
                  }
                  Ab(e5, t6) {
                    const i5 = this.fb(18);
                    i5.setUint32(0, 9, true), i5.setUint8(4, e5 + 1), i5.setUint8(5, 0), i5.setUint32(6, 0), bn(t6, i5, 10, false, 1e3);
                    try {
                      qn(this, i5);
                    } catch (e6) {
                      d.e("{57a6a4d}", "{c1ae1fc}", e6), this.G.za(e6, "send mouseup exception", "{57a6a4d}.ts", 0, 0, true);
                    }
                  }
                  Vd() {
                    const e5 = this.fb(10);
                    e5.setUint32(0, 2, true);
                    try {
                      this.Ja.send(e5), d.d("{57a6a4d}", "{5693344}");
                    } catch (e6) {
                      d.e("{57a6a4d}", "{ab52f04}", e6), this.G.za(e6, "heartbeat exception", "{57a6a4d}.ts", 0, 0, true);
                    }
                  }
                  xg(e5) {
                    0 !== this.Kb && (window.clearTimeout(this.Kb), this.Kb = 0);
                    var t6 = performance.now();
                    this.ud = t6;
                    for (var i5 = 1, n5 = 0; n5 < this.ia.h; ) {
                      i5 += 2;
                      var s4 = this.ia.g[n5].jb;
                      if (0 < s4) {
                        i5 += 19;
                        for (var r4 = 0; r4 < s4; r4++) i5 += 1 + (this.ia.g[n5 + r4].ib ? 26 : 22);
                        n5 += s4;
                      } else i5 += this.ia.g[n5].ib ? 26 : 22, n5++;
                    }
                    (i5 += e5 ? 2 + e5.byteLength : 0) > this.buffer.byteLength ? (i5 = new DataView(new ArrayBuffer(i5)), this.V.jd++) : i5 = new DataView(this.buffer, 0, i5), i5.setUint8(0, 255);
                    var o3 = 1;
                    for (n5 = 0; n5 < this.ia.h; ) {
                      if (s4 = o3, o3 += 2, 0 < (r4 = this.ia.g[n5]).jb) {
                        var a3 = i5, d2 = n5, c3 = t6, l3 = this.ia.g[d2], u3 = o3;
                        o3 += 19;
                        for (let e6 = 0; e6 < l3.jb; ++e6) {
                          const t7 = this.ia.g[d2 + e6];
                          a3.setUint8(o3, t7.ib ? 26 : 22), o3 = Jn(this, a3, ++o3, t7.ib, t7.x, t7.y, t7.captureTimestamp);
                        }
                        d2 = u3, u3 = o3 - u3, l3 = l3.yc, a3.setUint8(d2, 32), a3.setUint16(d2 + 1, u3, false), bn(c3, a3, d2 + 3, false, 1e3), bn(l3, a3, d2 + 11, false, 1e3), n5 += r4.jb;
                      } else o3 = Jn(this, i5, o3, r4.ib, r4.x, r4.y, r4.captureTimestamp), n5++;
                      i5.setUint16(s4, o3 - s4 - 2);
                    }
                    if (this.ia.j = 0, e5) for (i5.setUint16(o3, e5.byteLength), o3 += 2, t6 = 0; t6 < e5.byteLength; t6++) i5.setUint8(o3 + t6, e5.getUint8(t6));
                    return i5;
                  }
                  yg(e5) {
                    var t6;
                    if (e5 && e5.buffer != this.buffer) return qn(this), e5;
                    0 !== this.Kb && (window.clearTimeout(this.Kb), this.Kb = 0), this.ud = performance.now();
                    for (var i5 = 0, n5 = -1, s4 = 0; s4 < this.ia.h; s4++) 0 < this.ia.g[s4].jb ? (i5 += 9, n5 = this.ia.g[s4].jb) : 0 === n5 && (i5 += 9), i5 += 3 + (this.ia.g[s4].ib ? 26 : 22), n5--;
                    if (i5 += null !== (t6 = null == e5 ? void 0 : e5.byteLength) && void 0 !== t6 ? t6 : 0, (t6 = 9 + i5) > this.buffer.byteLength) {
                      if (t6 = new DataView(new ArrayBuffer(t6), t6 - i5, i5), this.V.jd++, e5) for (i5 = t6.byteLength - e5.byteLength, n5 = 0; n5 < e5.byteLength; n5++) t6.setUint8(i5 + n5, e5.getUint8(n5));
                    } else t6 = new DataView(this.buffer, this.buffer.byteLength - i5, i5);
                    for (e5 = 0, i5 = -1, n5 = 0; n5 < this.ia.h; n5++) 0 < (s4 = this.ia.g[n5]).jb ? (i5 = s4.jb, t6.setUint8(e5, 36), bn(s4.yc, t6, e5 + 1, false, 1e3), e5 += 9) : 0 === i5 && (t6.setUint8(e5, 36), bn(0, t6, e5 + 1, false, 1e3), e5 += 9), t6.setUint8(e5, 33), t6.setUint16(e5 + 1, s4.ib ? 26 : 22), e5 = Jn(this, t6, e5 + 3, s4.ib, s4.x, s4.y, s4.captureTimestamp), i5--;
                    return this.ia.j = 0, t6;
                  }
                  ng(e5) {
                    return new Kn(this.Jg, 0, e5);
                  }
                  og(e5) {
                    e5 += 1;
                    const t6 = this.buffer.byteLength - e5;
                    return e5 = new Kn(this.buffer, t6, e5, 1), this.ig.setUint8(t6, 34), e5;
                  }
                  sendTextInput(e5) {
                    let t6 = 0, i5 = new DataView(e5, 0, e5.byteLength), n5 = new ArrayBuffer(1021);
                    for (; t6 < e5.byteLength; ) {
                      let r4;
                      if (1016 >= e5.byteLength - t6) r4 = e5.byteLength - t6;
                      else {
                        r4 = t6 + 1016;
                        var s4 = false;
                        for (let e6 = 0; 4 > e6; e6++) {
                          if (128 != (192 & i5.getUint8(r4))) {
                            s4 = true;
                            break;
                          }
                          r4--;
                        }
                        if (!s4) {
                          d.e("{57a6a4d}", "{938b0d3}");
                          break;
                        }
                        r4 -= t6;
                      }
                      (s4 = new DataView(n5, 0, r4 + 5)).setUint8(0, 34), s4.setUint32(1, 23, true), new Uint8Array(n5).set(new Uint8Array(e5, t6, r4), 5), t6 += r4, qn(this, s4, false);
                    }
                  }
                  stop() {
                    0 < this.Ja.bufferedAmount && d.w("{57a6a4d}", "{5e5b9e5}", this.Ja.bufferedAmount), this.Aa && 0 < this.Aa.bufferedAmount && d.w("{57a6a4d}", "{1785a7c}", this.Aa.bufferedAmount);
                  }
                  get zg() {
                    return this.La;
                  }
                  get tg() {
                    return this.ud;
                  }
                  Eb(e5) {
                    qn(this, e5 = es(this, 0, 0, 0, [0, 0, 0, 0], 0, e5));
                  }
                  $c(e5, t6, i5, n5, s4, r4, o3 = 0, a3) {
                    2 < this.La ? (e5 = (this.Aa ? 12 : 9) + 41 * e5, this.Fb.setUint8(e5, 33), this.Fb.setUint16(e5 + 1, 38), Zn(this.Fb, e5 + 3, i5, n5, s4, r4, o3, a3)) : 2 == this.La ? (e5 = 1 + 40 * e5, this.Fb.setUint16(e5, 38), Zn(this.Fb, e5 + 2, i5, n5, s4, r4, o3, a3)) : qn(this, i5 = es(this, n5, s4, i5, r4, o3, a3));
                  }
                  Yb(e5, t6, i5, n5, s4 = 0) {
                    qn(this, e5 = es(this, e5, t6, i5, n5, 0, s4));
                  }
                  Yc(e5) {
                    if (!(2 > this.La || 0 >= e5)) {
                      qn(this);
                      var t6 = null;
                      2 < this.La ? t6 = new DataView(this.Fb.buffer, this.Aa ? 12 : 9, 41 * e5) : 2 == this.La && (this.Fb.setUint8(0, 255), t6 = new DataView(this.Fb.buffer, 0, 1 + 40 * e5)), t6 && (this.Aa ? qn(this, t6, true, "gamepad_channel_v1") : qn(this, t6, true));
                    }
                  }
                  Uc() {
                  }
                  Fg(e5) {
                    const t6 = this.fb(6);
                    t6.setUint32(0, 13, true), t6.setUint16(4, e5 ? 1 : 0, false), qn(this, t6);
                  }
                  gg(e5) {
                    qn(this, ts(this, 4 > e5 ? e5 + 6 : 0, 1));
                  }
                  Of(e5) {
                    qn(this, ts(this, 4 > e5 ? e5 + 6 : 0, 3));
                  }
                  Wc(e5, t6, i5, n5, s4) {
                    (e5 = this.fb(72)).setUint32(0, 17, true), e5.setUint8(4, 4 > t6 ? t6 + 6 : 0), e5.setUint8(5, 4), e5.setUint8(6, 0), e5.setUint8(7, 1), e5.setUint8(8, 127.5 * (s4[0] + 1)), e5.setUint8(9, 127.5 * (s4[1] + 1)), e5.setUint8(10, 127.5 * (s4[2] + 1)), e5.setUint8(11, 127.5 * (s4[3] + 1)), t6 = 0;
                    var r4 = !!(2 & i5);
                    const o3 = !!(8 & i5), a3 = !!(1 & i5);
                    (s4 = !!(4 & i5)) || r4 || o3 || a3 ? a3 ? t6 = o3 ? 1 : s4 ? 7 : 0 : r4 ? t6 = o3 ? 3 : s4 ? 5 : 4 : o3 ? t6 = 2 : s4 && (t6 = 6) : t6 = 8, s4 = (s4 = (256 & i5 ? 1 : 0) | (512 & i5 ? 2 : 0) | (255 & n5 ? 4 : 0) | (65280 & n5 ? 8 : 0)) | (32 & i5 ? 16 : 0) | (16 & i5 ? 32 : 0) | (64 & i5 ? 64 : 0) | (128 & i5 ? 128 : 0), r4 = (65536 & i5 ? 1 : 0) | (131072 & i5 ? 2 : 0), e5.setUint8(12, t6 | (16384 & i5 ? 16 : 0) | (4096 & i5 ? 32 : 0) | (8192 & i5 ? 64 : 0) | (32768 & i5 ? 128 : 0)), e5.setUint8(13, s4), e5.setUint8(14, r4), e5.setUint8(15, 255 & n5), e5.setUint8(16, (65280 & n5) >> 8), e5.setUint16(17, 0, true), e5.setUint8(19, 0), e5.setInt16(20, 0, true), e5.setInt16(22, 0, true), e5.setInt16(24, 0, true), e5.setInt16(26, 0, true), e5.setInt16(28, 0, true), e5.setInt16(30, 0, true), e5.setUint32(32, 0, true), e5.setUint8(36, 0), e5.setUint8(37, 11), e5.setUint8(38, 0), e5.setUint8(39, 0), e5.setUint8(40, 0), qn(this, e5);
                  }
                }(this, c2, m2, this.J, this.D, i4, this.G, g2), this.R = new Hs(this.j, this.u), this.h = new Ar(this, e4, t5, n4, s3, o2, u2, this.R, m2, c2, this.g, this.v), a2 ? Ui || k() ? (this.s = new class {
                  constructor(e5, t6, i5, n5, s4) {
                    this.target = e5, this.videoAddEventListener = t6, this.videoRemoveEventListener = i5, this.P = n5, this.j = s4, this.o = this.m = 0, this.F = { pb: 1, vertical: 1 }, this.g = /* @__PURE__ */ new Map(), this.s = /* @__PURE__ */ new Set(), this.l = 0, this.h = [], this.v = 0, this.N = true, this.M = (e6) => {
                      const t7 = performance.now(), i6 = Nn(e6.timeStamp);
                      let n6 = false;
                      this.j.lc(false);
                      const s5 = e6.changedTouches;
                      let r4 = [];
                      for (let i7 = 0; i7 < s5.length; i7++) {
                        const a3 = s5[i7];
                        if (a3.target === this.target) {
                          n6 = true, _t(Ft());
                          var o3 = a3;
                          let i8 = 0;
                          for (; this.s.has(i8); ) i8++;
                          let s6 = new jn(o3, i8, this.F);
                          this.g.set(o3.identifier, s6), this.s.add(i8), o3 = s6, r4.push(o3), Gi && this.h.push(new Gn(a3, o3.g, 1, t7, e6.timeStamp));
                        }
                      }
                      Bn(this, r4, 1, i6), Gi && Bi && 8 == this.g.size && this.N && (this.C(), this.O()), Cr(this.j) && n6 && e6.preventDefault();
                    }, this.L = (e6) => {
                      const t7 = performance.now(), i6 = Nn(e6.timeStamp);
                      let n6 = false;
                      const s5 = e6.changedTouches;
                      let r4 = [];
                      for (let i7 = 0; i7 < s5.length; i7++) {
                        const o3 = s5[i7];
                        if (o3.target === this.target) {
                          let i8 = this.g.get(o3.identifier);
                          i8 && (n6 = true, i8.update(o3), r4.push(i8), Gi && this.h.push(new Gn(o3, i8.g, 4, t7, e6.timeStamp)));
                        }
                      }
                      Bn(this, r4, 4, i6), Cr(this.j) && n6 && e6.preventDefault();
                    }, this.H = (e6) => {
                      Vn(this, e6, 8);
                    }, this.I = (e6) => {
                      Vn(this, e6, 2);
                    }, this.C = this.S.bind(this), this.O = this.R.bind(this);
                  }
                  S() {
                    const e5 = this.h.length;
                    if (e5) {
                      var t6 = this.h[e5 - 1].g - 3e4, i5 = -1;
                      for (let n5 = 0; n5 < e5 && this.h[n5].g < t6; n5++) i5 = n5;
                      this.h.splice(0, i5 + 1);
                    }
                  }
                  R() {
                    for (let e5 of this.h) d.d("{ec05004}", "{3c6a946}", e5.j.toFixed(2), e5.g.toFixed(2), e5.id, e5.h, e5.v, e5.l.toFixed(2), e5.m.toFixed(2), e5.o.toFixed(0), e5.s.toFixed(0));
                    this.h = [];
                  }
                  start() {
                    this.l = 0;
                    const e5 = { passive: false };
                    this.videoAddEventListener("touchstart", this.M, e5), this.videoAddEventListener("touchmove", this.L, e5), this.videoAddEventListener("touchcancel", this.H, e5), this.videoAddEventListener("touchend", this.I, e5), Gi && (d.d("{ec05004}", "{72764d2}", performance.now()), this.h = [], this.v = window.setInterval(this.C, 6e4)), this.j.lc(false);
                  }
                  stop() {
                    Gi && (this.v && clearTimeout(this.v), this.C(), this.O()), this.g.size && (Bn(this, Array.from(this.g.values()), 8, performance.now()), this.g.clear(), this.s.clear()), this.l && d.w("{ec05004}", "{10858ae}", this.l);
                    const e5 = { passive: false };
                    this.videoRemoveEventListener("touchstart", this.M, e5), this.videoRemoveEventListener("touchmove", this.L, e5), this.videoRemoveEventListener("touchcancel", this.H, e5), this.videoRemoveEventListener("touchend", this.I, e5);
                  }
                }(this.j, this.videoAddEventListener, this.videoRemoveEventListener, this.g, this), d.i("{8bacfa5}", "{60f3637}")) : d.w("{8bacfa5}", "{32104d3}") : d.i("{8bacfa5}", "{6be89bf}"), !Ui && !k() || P(this.u) || (this.C = new class {
                  constructor(e5, t6, i5, n5) {
                    this.target = e5, this.videoAddEventListener = t6, this.videoRemoveEventListener = i5, this.j = n5, this.h = [], this.g = this.m = this.l = 0, this.C = (e6) => {
                      let t7 = false;
                      const i6 = e6.changedTouches, n6 = Nn(e6.timeStamp);
                      for (let e7 = 0; e7 < i6.length; e7++) {
                        const s4 = i6[e7];
                        s4.target === this.target && (t7 = true, _t(Ft()), 0 === this.h.length ? (this.g = 1, this.l = window.setTimeout(() => {
                          this.l = 0, 1 === this.m && (this.g = 2, _i && wr(this.j, this.target, n6, xn(s4)));
                        }, 500)) : 1 !== this.g && (2 === this.g || 4 === this.g ? _i && yr(this.j, n6) : 6 === this.g && _i && Er(this.j), this.g = 0), this.h.push(xn(s4)), this.h.length > this.m && (this.m = this.h.length));
                      }
                      Cr(this.j) && t7 && e6.preventDefault();
                    }, this.v = (e6) => {
                      let t7 = false;
                      for (var i6 of this.h) i6.deltaX = 0, i6.deltaY = 0;
                      i6 = e6.changedTouches;
                      const n6 = Nn(e6.timeStamp);
                      let s4 = [];
                      for (let e7 = 0; e7 < i6.length; e7++) {
                        const n7 = i6[e7], a3 = this.h.findIndex((e8) => e8.identifier == n7.identifier);
                        if (-1 != a3) {
                          t7 = true;
                          var r4 = this.h[a3], o3 = n7.clientX - r4.clientX;
                          r4 = n7.clientY - r4.clientY;
                          let e8 = false;
                          0 !== this.l ? (10 < Math.abs(o3) || 10 < Math.abs(r4)) && (window.clearTimeout(this.l), this.l = 0, e8 = true) : e8 = true, e8 && (o3 = { identifier: n7.identifier, clientX: n7.clientX, clientY: n7.clientY, deltaX: o3, deltaY: r4 }, s4.push(a3), this.h[a3] = o3);
                        }
                      }
                      0 < s4.length && 0 === this.l && 0 !== this.g && (1 === this.h.length ? (1 === this.g ? this.g = 3 : 2 === this.g && (this.g = 4), _i && function(e7, t8, i7, n7) {
                        1 !== e7.J.ma || e7.kb || void 0 !== e7.s ? Mr(e7, e7.J.offsetX + n7.deltaX, e7.J.offsetY + n7.deltaY, e7.J.ma) : Hr(e7, t8, n7, i7);
                      }(this.j, this.target, n6, this.h[0])) : 2 === this.h.length ? 5 === this.g ? _i && this.j.scroll(this.target, n6, this.h) : 6 === this.g ? _i && Tr(this.j, this.h) : 1 === this.g && (0 < this.h[0].deltaY * this.h[1].deltaY && (Math.sign(this.h[0].deltaX) === Math.sign(this.h[1].deltaX) || 10 > Math.abs(this.h[0].deltaX) && 10 > Math.abs(this.h[1].deltaX)) ? (this.g = 5, _i && this.j.scroll(this.target, n6, this.h)) : (this.g = 6, _i && Tr(this.j, this.h))) : this.g = 0), Cr(this.j) && t7 && e6.preventDefault();
                    }, this.o = (e6) => {
                      Fn(this, e6, false);
                    }, this.s = (e6) => {
                      Fn(this, e6, true);
                    };
                  }
                  start() {
                    const e5 = { passive: !_i };
                    this.videoAddEventListener("touchstart", this.C, e5), this.videoAddEventListener("touchmove", this.v, e5), this.videoAddEventListener("touchcancel", this.o, e5), this.videoAddEventListener("touchend", this.s, e5);
                  }
                  stop() {
                    if (this.videoRemoveEventListener("touchstart", this.C), this.videoRemoveEventListener("touchmove", this.v), this.videoRemoveEventListener("touchcancel", this.o), this.videoRemoveEventListener("touchend", this.s), this.h = [], 0 !== this.l && (window.clearTimeout(this.l), this.l = 0), this.m = 0, _i) switch (this.g) {
                      case 6:
                        Er(this.j);
                        break;
                      case 2:
                      case 4:
                        yr(this.j, performance.now());
                    }
                    this.g = 0;
                  }
                }(this.j, this.videoAddEventListener, this.videoRemoveEventListener, this)), this.M = r3, this.ca = 0, this.$a = w(this.u), this.na = b(this.u), this.O = y(this.u), this.o = "Android" === this.u.os, this.Da = "VISIONPRO" === this.u.deviceModel, e4 = "Safari" === this.u.browser, t5 = !!o2.windowedStreaming, d.i("{8bacfa5}", "{fa2e72c}", t5 ? "on" : "off"), this.$a ? (d.d("{8bacfa5}", "{da5ae1d}"), this.$ = [20, 144, 145]) : this.na || "Linux" === this.u.os ? (d.d("{8bacfa5}", "{b7becf9}"), this.$ = []) : (d.d("{8bacfa5}", "{098ce9c}"), this.$ = [20]), this.U = this.aa = false, PerformanceObserver ? this.perf = new PerformanceObserver((e5) => function(e6, t6) {
                  t6.getEntriesByType("longtask").forEach((t7) => {
                    let i5 = Math.round(t7.duration);
                    var n5, s4 = ln;
                    s4.h && (t7 = { duration: { timestamp: t7.startTime - s4.j, duration: i5 } }, s4.g && s4.g.postMessage(t7)), null === (n5 = e6.D.h) || void 0 === n5 || ((s4 = n5.g).L = Math.max(i5, s4.L)), d.i("{8bacfa5}", "{7071359}", i5);
                  });
                }(this, e5)) : this.perf = null, $a(this.v, 2, this.va), d.d("{8bacfa5}", "{cc9c05b}"), window.ResizeObserver ? (this.Za = new ResizeObserver(() => {
                  this.da();
                }), this.Za.observe(this.j)) : this.windowAddEventListener("resize", this.ea), (v(u2) || E(u2)) && window.IntersectionObserver && (this.ya = new IntersectionObserver(() => {
                  this.da();
                }, { threshold: [1] }), this.ya.observe(this.j)), this.j.addEventListener("resize", this.ea), this.windowAddEventListener("orientationchange", this.Ta), (u2 = window.visualViewport) && (this.J.Pc = u2.height, u2.addEventListener("resize", this.Va)), this.l = l2, function(e5, t6) {
                  e5.o && (ps(e5, e5.o), vs(e5, e5.o)), e5.o = t6, e5.l.push(e5.o);
                }(this.l, this.g), this.g.Oc.push(this.l), function(e5, t6) {
                  Wi && (e5.m && ps(e5, e5.m), e5.m = t6);
                }(this.l, this.R), this.l.G = this.G, this.wa(this.v.j), $a(this.v, 0, this.sa), this.perf && PerformanceObserver.supportedEntryTypes && PerformanceObserver.supportedEntryTypes.includes("longtask") && this.perf.observe({ entryTypes: ["longtask"] }), Vi && Ft().initialize(this.j, this.u), (P(this.u) || this.o || v(this.u)) && (this.textInputElement = A2, this.o && (this.ta = null !== (V2 = null === (B2 = this.textInputElement) || void 0 === B2 ? void 0 : B2.getAttribute("autocapitalize")) && void 0 !== V2 ? V2 : "off", this.ua = null !== (W2 = null === (H2 = this.textInputElement) || void 0 === H2 ? void 0 : H2.getAttribute("autocorrect")) && void 0 !== W2 ? W2 : "off", null === (z2 = this.textInputElement) || void 0 === z2 || z2.setAttribute("autocapitalize", "off"), null === (K2 = this.textInputElement) || void 0 === K2 || K2.setAttribute("autocorrect", "off"))), (ai || Yi && (e4 || t5)) && (function(e5, t6) {
                  if (t6) for (const s4 of t6) {
                    if (!(t6 = s4.remote.code)) continue;
                    if (!(t6 = Hn.get(t6))) continue;
                    var i5 = s4.remote.modifiers, n5 = [];
                    1 & i5 && n5.push(162), 2 & i5 && n5.push(164), 4 & i5 && n5.push(91), 8 & i5 && n5.push(160), i5 = n5, n5 = s4.local.key;
                    const r4 = s4.local.code;
                    r4 ? (n5 = Hn.get(r4)) && e5.W.set(n5, { Bc: n5, fc: s4.local.modifiers, rd: Qr(), Wb: t6, Xb: i5 }) : n5 && e5.Z.set(n5, { Ld: n5, fc: s4.local.modifiers, rd: Qr(), Wb: t6, Xb: i5 });
                  }
                  else for (i5 of br) i5.Ld ? e5.Z.set(i5.Ld, i5) : i5.Bc && e5.W.set(i5.Bc, i5);
                }(this, o2.streamingHotkeys), function(e5) {
                  var t6, i5, n5, s4, r4, o3, a3;
                  for (const r5 of e5.W.values()) d.i("{8bacfa5}", "{e7c6e9b}", null === (t6 = r5.Bc) || void 0 === t6 ? void 0 : t6.toString(16), null === (i5 = r5.fc) || void 0 === i5 ? void 0 : i5.toString(16), null === (n5 = r5.Wb) || void 0 === n5 ? void 0 : n5.toString(16), null === (s4 = r5.Xb) || void 0 === s4 ? void 0 : s4.map((e6) => e6.toString(16)));
                  for (const t7 of e5.Z.values()) d.i("{8bacfa5}", "{b5e3a31}", t7.Ld, null === (r4 = t7.fc) || void 0 === r4 ? void 0 : r4.toString(16), null === (o3 = t7.Wb) || void 0 === o3 ? void 0 : o3.toString(16), null === (a3 = t7.Xb) || void 0 === a3 ? void 0 : a3.map((e6) => e6.toString(16)));
                }(this));
              }
              uninitialize() {
                var e4, t5, i4, n4, s3, r3, o2;
                Pr(this, false);
                var a2 = this.j.paused;
                if (a2 = void 0 !== a2 ? a2 ? "paused" : "playing" : "unknown", (this.j.paused || 1 > (null !== (e4 = this.j.currentTime) && void 0 !== e4 ? e4 : 1)) && wo(this.G, "VideoPaused", a2, null === (t5 = this.j.currentTime) || void 0 === t5 ? void 0 : t5.toFixed(2)), d.i("{8bacfa5}", "{fdc8bf7}", a2, this.j.currentTime), null === (i4 = this.ya) || void 0 === i4 || i4.disconnect(), null === (n4 = this.Za) || void 0 === n4 || n4.disconnect(), this.g.stop(), this.perf && this.perf.disconnect(), this.toggleUserInput(false), this.windowRemoveEventListener("resize", this.ea), this.windowRemoveEventListener("orientationchange", this.Ta), this.j.removeEventListener("resize", this.ea), null === (s3 = window.visualViewport) || void 0 === s3 || s3.removeEventListener("resize", this.Va), (e4 = this.l).s) {
                  for (var c2 of (t5 = true, e4.h)) c2 && (c2.Fa.state = gs(e4, c2.Fa.state, true), Ts(e4, c2.ba.index, true, t5), t5 = false);
                  ls(e4), e4.j = 0, e4.s = 0, e4.g.qb = false, e4.Eb(), e4.gamepadPollInterval = 100, Is(e4), e4.h = [], e4.Z = false;
                }
                -1 < (e4 = (c2 = this.g).Oc.indexOf(this.l)) && c2.Oc.splice(e4, 1), Ja(this.v, 2, this.va), this.R.stop(), ps(this.l, this.R), ps(this.l, this.g), this.T && (ps(this.l, this.N), this.N.Mc(this.j)), this.h.uninitialize(), Ja(this.v, 0, this.sa), Dr(this), null === (r3 = this.textInputElement) || void 0 === r3 || r3.setAttribute("autocapitalize", this.ta), null === (o2 = this.textInputElement) || void 0 === o2 || o2.setAttribute("autocorrect", this.ua), d.d("{8bacfa5}", "{b6b2756}");
              }
              Yb() {
                Xn(this.g) && this.l.Yb();
              }
              da() {
                var e4, t5 = this.j;
                if (!(0 >= t5.videoWidth || 0 >= t5.videoHeight)) {
                  var i4 = 0, n4 = 0;
                  if (t5.clientWidth / t5.clientHeight > t5.videoWidth / t5.videoHeight) {
                    var s3 = t5.clientHeight / t5.videoHeight, r3 = t5.videoWidth * s3, o2 = t5.videoHeight * s3;
                    n4 = (t5.clientWidth - r3) / 2;
                  } else s3 = t5.clientWidth / t5.videoWidth, r3 = t5.videoWidth * s3, o2 = t5.videoHeight * s3, i4 = (t5.clientHeight - o2) / 2;
                  var a2 = 1, d2 = 1;
                  this.J.eb && this.J.Wa && (a2 = r3 / this.J.eb, d2 = o2 / this.J.Wa), this.J.eb = r3, this.J.Wa = o2, this.J.Sf = s3, this.J.Ra = i4, this.J.Xa = n4, this.J.videoWidth = t5.videoWidth, this.J.videoHeight = t5.videoHeight, Mr(this, this.J.offsetX * a2, this.J.offsetY * d2, this.J.ma), or(this.h, this.J), null === (e4 = this.s) || void 0 === e4 || (t5 = this.J, i4 = this.j.getBoundingClientRect(), s3 = this.J.ma, e4.F = { pb: i4.left + window.pageXOffset + this.J.Xa * this.J.ma, vertical: i4.top + window.pageYOffset + this.J.Ra * this.J.ma }, e4.m = 65535 / t5.eb, e4.o = 65535 / t5.Wa, e4.m /= s3, e4.o /= s3), e4 = this.S, t5 = this.J.Xa, e4.Ra = this.J.Ra, e4.Xa = t5, kr(this);
                }
              }
              Nb() {
                this.J.Pc = window.visualViewport.height, Mr(this, this.J.offsetX, this.J.offsetY, this.J.ma);
              }
              lb() {
                d.d("{8bacfa5}", "{b6fbd34}"), history.pushState(null, document.title, location.href);
              }
              Ka(e4) {
                var t5, i4;
                let n4 = this.pa;
                this.qa = false;
                const s3 = Nn(e4.timeStamp);
                if (this.v.h) {
                  (function(e5, t6) {
                    var i5;
                    if (null !== (i5 = hd(e5.D)) && void 0 !== i5 && i5.isVisible()) return false;
                    if (e5.na) switch (t6.code) {
                      case "Tab":
                        return !t6.altKey;
                      case "ZoomToggle":
                      case "SelectTask":
                      case "BrightnessDown":
                      case "BrightnessUp":
                      case "AudioVolumeMute":
                      case "AudioVolumeDown":
                      case "AudioVolumeUp":
                        return false;
                    }
                    return true;
                  })(this, e4) && e4.preventDefault();
                  var r3, o2 = !(!this.O || !this.ja) && "CapsLock" == e4.code;
                  o2 && (n4 = n4 || o2), Or(this, e4), !(r3 = "CapsLock" == e4.code && ("Alphanumeric" == e4.key || "Katakana" == e4.key || "Hiragana" == e4.key)) && (r3 = "KanaMode" == e4.code) && (r3 = "Hiragana" == (r3 = e4.key) || "Katakana" == r3 || "Romaji" == r3 || "KanaMode" == r3), r3 = !!r3;
                  var a2 = "Lang1" == e4.code || "HangulMode" == e4.key;
                  if (n4 = n4 || r3 || a2, !this.$.includes(e4.keyCode) || r3 || o2) {
                    if (0 === (o2 = o2 ? 160 : Nr(this, e4))) this.ra = true, this.M.emit("TextComposition", { compositionText: e4.key, imeRecommendation: true });
                    else if (this.ra && (this.ra = false, this.M.emit("TextComposition", { compositionText: "" })), !this.Ya.has(o2)) {
                      this.Ya.add(o2), r3 = false;
                      var c2 = hd(this.D);
                      if (a2 = void 0, 187 == o2) {
                        var l2;
                        if (null === (l2 = (r3 = this.D).R) || void 0 === l2) var u2 = 0;
                        else 1 == l2.g ? (d.i("{4c846ba}", "{1f67b97}"), l2.g = 2, u2 = true) : u2 = false;
                        u2 ? (Dd(r3, { latencyTrigger: true }), r3 = true) : r3 = false, r3 = !r3;
                      } else if (e4.ctrlKey && e4.altKey) if (!jt && !Bt || 119 != o2 && 219 != o2) if (jt) switch (o2) {
                        case 48:
                          var h2 = "UNSUPPORTED";
                          if ((u2 = this.h).T) switch (Zs(u2, (u2.I + 1) % 4), u2.I) {
                            case 1:
                              h2 = "4ms";
                              break;
                            case 2:
                              h2 = "8ms";
                              break;
                            case 3:
                              h2 = "16ms";
                              break;
                            default:
                              h2 = "OFF";
                          }
                          pd(u2.D, "Non-vsync mouse events: " + h2), d.i("{70cc40b}", "{bac28ff}", h2);
                          break;
                        case 49:
                          this.D.Cb();
                          break;
                        case 56:
                          this.D.sendCustomMessage({ messageType: "GpuViewStartRequest", messageRecipient: "GPUViewTraceControl", data: "GpuView" }), d.i("{93c7910}", "{0915cd3}");
                          break;
                        case 68:
                          var p2;
                          null === (p2 = (u2 = this.D).R) || void 0 === p2 ? h2 = 0 : 0 == p2.g ? (p2.g = 1, d.i("{4c846ba}", "{008dc86}"), ec(p2), ic(p2), h2 = true) : h2 = false, h2 && Dd(u2, { pcmDumpTrigger: true });
                          break;
                        case 71:
                          this.Mc();
                          break;
                        case 76:
                          null == c2 || la(c2, !c2.isVisible()), Xs(this.h);
                          break;
                        case 83:
                          Ka(this.S);
                          break;
                        case 115:
                          (u2 = this.D).pa ? (an(), u2.pa = false, jd(u2), pd(u2, "Profiler: OFF, Stats: OFF")) : (Pd(u2), Gd(u2), pd(u2, "Profiler: ON, Stats: ON"));
                          break;
                        case 116:
                          Ud(u2 = this.D) ? (jd(u2), pd(u2, "Stats: OFF")) : (Gd(u2), pd(u2, "Stats: ON"));
                          break;
                        case 117:
                          this.D.toggleOnScreenStats(e4.shiftKey);
                          break;
                        case 118:
                        case 192:
                          (u2 = this.D).perfIndicator = !u2.perfIndicator, Dd(u2, { perfIndicator: { on: u2.perfIndicator } });
                          break;
                        case 120:
                          (u2 = this.h).o = !u2.o, pd(u2.D, "UnadjustedMovement: " + (u2.o ? "ON" : "OFF")), d.i("{70cc40b}", "{796c5cb}", u2.o ? "ON" : "OFF");
                          break;
                        case 189:
                          this.P = !this.P, pd(this.D, "Position dependent keys: " + (this.P ? "ON" : "OFF")), d.i("{8bacfa5}", "{61d2ab5}", this.P ? "ON" : "OFF");
                          break;
                        case 77:
                          this.D.ja();
                          break;
                        default:
                          r3 = true;
                      }
                      else r3 = true;
                      else this.D.toggleStutterIndicator();
                      else {
                        e: {
                          if ((e4.ctrlKey || e4.shiftKey || e4.metaKey || e4.altKey) && ((a2 = this.W.get(o2)) || (a2 = this.Z.get(e4.key)), a2)) {
                            128 == (l2 = a2.fc) && (l2 = this.O ? 4 : 1), p2 = e4.ctrlKey;
                            const t6 = e4.altKey, i5 = e4.metaKey, n5 = e4.shiftKey;
                            if ((1 & l2 ? p2 : !p2) && (2 & l2 ? t6 : !t6) && (4 & l2 ? i5 : !i5) && (8 & l2 ? n5 : !n5)) break e;
                          }
                          a2 = void 0;
                        }
                        if (a2) {
                          for (u2 of (c2 = Lr(this, e4), a2.rd)) c2 != (l2 = c2 & ~Yr(u2)) && (c2 = l2, Yn(this.g, 4, u2, c2, s3)), this.Ya.delete(u2);
                          for (h2 of a2.Xb) c2 |= Yr(h2), Yn(this.g, 3, h2, c2, s3);
                          for (var f2 of (Yn(this.g, 3, a2.Wb, c2, s3), Yn(this.g, 4, a2.Wb, c2, s3), a2.Xb)) c2 &= ~Yr(f2), Yn(this.g, 4, f2, c2, s3);
                          this.Ya.delete(o2);
                        } else if (null != c2 && c2.isVisible()) if (13 == o2) c2.toggle(), Xs(this.h);
                        else if (82 == o2) c2.reset(), Xs(this.h);
                        else if (65 == o2) da(c2, !c2.ac.checked);
                        else if (83 == o2) if (c2.ec.length) {
                          for (u2 = `LDAT_${(/* @__PURE__ */ new Date()).toISOString()}.csv`, h2 = ["Sample #,Total,Render,Decode,Begin,Server + Rtd + Receive,Input Callback"], f2 = 0; f2 < c2.ec.length; f2++) l2 = ga(c2.ec[f2]), h2.push([f2, l2.total, l2.Pf, l2.decode, l2.Xe, l2.Tf, l2.pf].join());
                          Pn([h2.join("\n")], u2, "text/plain") && d.i("{50c79eb}", "{690879e}", u2);
                        } else d.w("{50c79eb}", "{2884507}");
                        else 67 == o2 ? (d.i("{50c79eb}", "{d2811a7}"), c2.Sb.value = "50", c2.Tb.value = "50", Aa(c2, 0.5, 0.5)) : 77 == o2 ? c2.zb.checked = !c2.zb.checked : r3 = true;
                        else r3 = true;
                      }
                      r3 && (_t(Ft()), Yn(this.g, 3, o2, Lr(this, e4), s3)), "Hankaku" != e4.key && "Zenkaku" != e4.key || 192 != o2 || (n4 = true), this.O && e4.metaKey && !a2 && (n4 = true), this.o && this.kb && ("Backspace" == e4.code && (n4 = true), "" == e4.code && "Enter" == e4.key && (r3 = new CompositionEvent("compositionend", { data: null === (t5 = this.textInputElement) || void 0 === t5 ? void 0 : t5.value }), null === (i4 = this.textInputElement) || void 0 === i4 || i4.dispatchEvent(r3))), n4 && (Yn(this.g, 4, o2, Lr(this, e4), s3), this.Ya.delete(o2));
                    }
                  }
                }
              }
              Oa(e4) {
                let t5 = false;
                const i4 = Nn(e4.timeStamp);
                if (this.o && "" == e4.code && "Unidentified" == e4.key && !this.qa) Yn(this.g, 3, 8, 0, i4), Yn(this.g, 4, 8, 0, i4);
                else {
                  var n4 = !(!this.O || !this.ja) && "CapsLock" == e4.code;
                  n4 && (t5 = t5 || n4), Or(this, e4), this.$.includes(e4.keyCode) && !n4 || (n4 = n4 ? 160 : Nr(this, e4), t5 && (Yn(this.g, 3, n4, Lr(this, e4), i4), this.Ya.add(n4)), this.Ya.has(n4) && (this.Ya.delete(n4), _t(Ft()), Yn(this.g, 4, n4, Lr(this, e4), i4)));
                }
              }
              wa(e4) {
                d.d("{8bacfa5}", "{77df54c}", e4 ? "fullscreen" : "not fullscreen"), this.da({}), e4 ? (window.isSecureContext && (e4 = window.navigator.keyboard) && e4.lock && e4.lock("Escape F11 BrowserBack BrowserForward BrowserRefresh BrowserHome BrowserFavorites BrowserSearch BrowserStop Sleep Power WakeUp KeyT KeyZ Slash Digit1 Digit2 Digit3 Digit4 Digit5 Digit6 Digit7 Digit8 Digit9 KeyM KeyD KeyN KeyS KeyK KeyL Space PrintScreen LaunchApp1 LaunchApp2 LaunchMail Comma Semicolon ArrowLeft ArrowRight BracketLeft BracketRight KeyW KeyQ KeyR KeyY KeyO KeyP KeyF KeyG".split(" ")), this.j.onclick = null, this.j.removeAttribute("controls")) : (xr(this), vr(this.h), window.isSecureContext && (e4 = window.navigator.keyboard) && e4.unlock && e4.unlock());
              }
              toggleUserInput(e4, t5) {
                if (d.d("{8bacfa5}", "{2424824}", e4, t5), t5 = null != t5 ? t5 : 15, e4) {
                  var i4, n4, s3, r3, o2, a2, c2 = !this.yb(), l2 = (this.m ^ t5) & t5;
                  if (l2) {
                    if (this.m |= l2, 4 & l2 && _s(this.l), 1 & l2) {
                      var u2 = this.h;
                      if (!u2.C) {
                        if (u2.C = true, !v(u2.u)) {
                          if (2 == u2.cursorType && u2.L) {
                            var h2 = u2.N;
                            h2.Bd = "pointerdown", h2.Yd = "pointerup", u2.videoAddEventListener("pointerdown", u2.xa), u2.videoAddEventListener("pointerup", u2.ya);
                          } else (h2 = u2.N).Bd = "mousedown", h2.Yd = "mouseup", u2.videoAddEventListener("mousedown", u2.fa), u2.videoAddEventListener("mouseup", u2.pa);
                          "Xbox" === u2.u.os || u2.videoAddEventListener("contextmenu", qs);
                        }
                        u2.documentAddEventListener("wheel", u2.qa, u2.ra), fr(u2), 0 === u2.cursorType && (u2.j.style.display = "block"), Xs(u2), lr(u2);
                      }
                    }
                    2 & l2 && (this.documentAddEventListener("keydown", this.Na), this.documentAddEventListener("keyup", this.Pa), null === (i4 = this.textInputElement) || void 0 === i4 || i4.addEventListener("input", this.ab), null === (n4 = this.textInputElement) || void 0 === n4 || n4.addEventListener("compositionstart", this.L), null === (s3 = this.textInputElement) || void 0 === s3 || s3.addEventListener("compositionupdate", this.L), null === (r3 = this.textInputElement) || void 0 === r3 || r3.addEventListener("compositionend", this.L), this.H = 0, this.Da && (null === (o2 = this.textInputElement) || void 0 === o2 || o2.addEventListener("focus", this.Sa), null === (a2 = this.textInputElement) || void 0 === a2 || a2.addEventListener("blur", this.Qa))), 8 & l2 && (this.s && !this.kb ? this.s.start() : this.C && this.C.start()), c2 && this.preventNavigation && !this.U && (this.U = true, history.pushState(null, document.title, location.href), this.windowAddEventListener("popstate", this.Ua));
                  }
                } else {
                  var p2, f2;
                  (n4 = this.m & t5) && (this.m ^= n4, i4 = !this.yb(), 4 & n4 && ((s3 = this.l).H = false, rs(s3), Ps(s3), Di && (s3.o && vs(s3, s3.o), s3.windowRemoveEventListener("gamepadconnected", s3.oa), s3.windowRemoveEventListener("gamepaddisconnected", s3.pa), Is(s3), s3.F && (s3.m.stop(), s3.m.reset()))), 1 & n4 && (s3 = this.h).C && (vr(s3), s3.C = false, v(s3.u) || (2 == s3.cursorType && s3.L ? (s3.videoRemoveEventListener("pointerdown", s3.xa), s3.videoRemoveEventListener("pointerup", s3.ya)) : (s3.videoRemoveEventListener("mousedown", s3.fa), s3.videoRemoveEventListener("mouseup", s3.pa)), "Xbox" === s3.u.os || s3.videoRemoveEventListener("contextmenu", qs)), s3.documentRemoveEventListener("wheel", s3.qa, s3.ra), mr(s3), 0 === s3.cursorType && (s3.j.style.display = "none"), Xs(s3), lr(s3), pr(s3)), 2 & n4 && (xr(this), this.documentRemoveEventListener("keydown", this.Na), this.documentRemoveEventListener("keyup", this.Pa), null === (c2 = this.textInputElement) || void 0 === c2 || c2.removeEventListener("input", this.ab), null === (u2 = this.textInputElement) || void 0 === u2 || u2.removeEventListener("compositionstart", this.L), null === (l2 = this.textInputElement) || void 0 === l2 || l2.removeEventListener("compositionupdate", this.L), null === (h2 = this.textInputElement) || void 0 === h2 || h2.removeEventListener("compositionend", this.L), this.Da && (null === (p2 = this.textInputElement) || void 0 === p2 || p2.removeEventListener("focus", this.Sa), null === (f2 = this.textInputElement) || void 0 === f2 || f2.removeEventListener("blur", this.Qa))), 8 & n4 && (this.C && this.C.stop(), this.s && this.s.stop(), 0 !== this.F && Fr(this), (n4 = this.I).mb = void 0, qr(n4)), i4 && this.preventNavigation && this.U && (this.windowRemoveEventListener("popstate", this.Ua), history.back(), this.U = false));
                }
              }
              yb() {
                return 0 !== this.m;
              }
              bb(e4) {
                e4 ? (kr(this), d.d("{8bacfa5}", "{cb19d31}")) : (d.d("{8bacfa5}", "{8744dbe}"), xr(this), vr(this.h));
              }
              Vd() {
                void 0 !== this.oa && (this.toggleUserInput(false, 15 & ~this.oa), this.oa = void 0), this.g.Vd();
              }
              cb() {
                this.aa && _r(this);
              }
              getVirtualGamepadHandler() {
                return this.l.getVirtualGamepadHandler();
              }
              sendTextInput(e4) {
                this.g.sendTextInput(e4);
              }
              Bb(e4) {
                switch (e4.type) {
                  case "compositionstart":
                    this.H = 1;
                    break;
                  case "compositionupdate":
                    !v(this.u) && Gr(e4.data) || this.M.emit("TextComposition", { compositionText: e4.data, imeRecommendation: true });
                    break;
                  case "compositionend":
                    const t5 = this.o ? e4.data.trim() : e4.data;
                    t5.length && (e4 = v(this.u) || !Gr(e4.data), this.o && !e4 ? Br(this, t5) : jr(this, t5), e4 && this.M.emit("TextComposition", { compositionText: "" })), this.H = 0;
                }
              }
              Cb() {
                this.qa = true;
                let e4 = this.textInputElement.value;
                1 == this.H && (this.o && 1 < e4.length && (e4 = e4.charAt(e4.length - 1)), this.H = 2), this.o && Gr(e4) ? (Br(this, e4), this.H = 0) : 2 != this.H && jr(this, e4);
              }
              setVirtualKeyboardState(e4) {
                d.i("{8bacfa5}", "{60b2d45}", e4), this.kb !== e4 && (this.kb = e4, this.C && this.s && (this.kb ? (this.s.stop(), this.C.start()) : (this.C.stop(), 1 !== this.J.ma && Mr(this, 0, 0, 1), this.s.start())));
              }
              setKeyboardLayout(e4) {
                this.ja = "zh-TW" == e4;
              }
              scroll(e4, t5, i4) {
                0 < i4.length && $n(this.g, Math.sign(i4[0].deltaY), t5);
              }
              sendKeyEvent(e4) {
                Xn(this.g) && (Nr(this, e4) ? "keydown" === e4.type ? this.Ka(e4) : "keyup" === e4.type && this.Oa(e4) : "keydown" === e4.type && 1 === e4.key.length && (e4 = new TextEncoder().encode(e4.key), this.sendTextInput(e4.buffer)));
              }
              Jb(e4, t5) {
                this.h.Jb(e4, t5);
              }
              Ab(e4, t5) {
                this.h.Ab(e4, t5);
              }
              lc(e4) {
                this.h.lc(e4);
              }
              Mc() {
                jt && (this.T = !this.T, this.N.Mc(this.j), this.T ? this.l.l.push(this.N) : ps(this.l, this.N));
              }
            };
            function Kr(e4) {
              e4.h = true, qr(e4), $r(e4), e4.h = false;
            }
            function qr(e4) {
              0 !== e4.g && (window.clearTimeout(e4.g), e4.g = 0);
            }
            function $r(e4) {
              const t5 = e4.mb;
              t5 && (e4.mb = void 0, t5());
            }
            class Jr {
              constructor() {
                this.g = 0, this.h = false;
              }
              delay(e4) {
                this.h ? e4() : (Kr(this), this.mb = e4, this.g = window.setTimeout(() => {
                  this.g = 0, $r(this);
                }, Xr));
              }
            }
            var Xr = 30;
            function Qr() {
              let e4 = [];
              return e4.push(162), e4.push(163), e4.push(164), e4.push(165), e4.push(91), e4.push(92), e4.push(160), e4.push(161), e4;
            }
            function Yr(e4) {
              switch (e4) {
                case 162:
                case 163:
                  return 2;
                case 164:
                case 165:
                  return 4;
                case 91:
                case 92:
                  return 8;
                case 160:
                case 161:
                  return 1;
              }
              return 0;
            }
            function Zr(e4) {
              return e4.qualityScore = 3 * e4.qualityScore / 4 + Math.min(e4.latencyScore, e4.networkLossScore, e4.bandwidthScore) / 4, { latencyScore: e4.latencyScore, networkLossScore: e4.networkLossScore, bandwidthScore: e4.bandwidthScore, qualityScore: e4.qualityScore };
            }
            var eo = class {
              constructor(e4, t5) {
                this.maxBitrate = e4 / 1e3, this.g = t5 / 1e3, this.networkLossScore = this.bandwidthScore = this.latencyScore = this.qualityScore = 100;
              }
            };
            function to() {
              return false === Gt ? Promise.resolve(0) : window.navigator.permissions ? window.navigator.permissions.query({ name: "microphone" }).then((e4) => {
                let t5 = 2;
                return "granted" == (e4 = e4.state) ? t5 = 5 : "prompt" == e4 && (t5 = 1), t5;
              }).catch(() => 0) : Promise.resolve(0);
            }
            function io(e4, t5, i4 = true) {
              e4.h = t5, 3 === e4.h && (e4.N = true), e4.L && i4 && e4.L.emit("MicCapture", { state: e4.h });
            }
            function no(e4) {
              if (e4.initialized) if (fo) {
                e4.l = false, e4.paused = true;
                var t5 = e4.h;
                if (navigator.mediaDevices.ondevicechange = () => {
                }, e4.C) {
                  d.d("{223689a}", "{6faf5bb}");
                  let n4 = co();
                  var i4 = e4.C.getSenders()[0];
                  i4 ? i4.replaceTrack(n4.getTracks()[0]).then(() => {
                    d.d("{223689a}", "{797fa55}"), io(e4, 5, false), 3 === t5 && (e4.F = true);
                  }).catch((t6) => {
                    d.e("{223689a}", "{79f26cc}", t6), io(e4, 7, false);
                  }).finally(() => {
                    let t6 = e4.g;
                    e4.g = null, t6 && t6.getTracks().forEach((e5) => {
                      e5.stop();
                    }), io(e4, e4.h), v(e4.u) && !N(e4.u, false, 15, 4) && e4.j();
                  }) : (d.e("{223689a}", "{f7f0250}"), e4.g = null);
                } else d.e("{223689a}", "{9e75fa2}"), io(e4, 0);
              } else io(e4, 6);
            }
            function so(e4, t5) {
              var i4;
              e4.o = true, e4.s.set(t5, (null !== (i4 = e4.s.get(t5)) && void 0 !== i4 ? i4 : 0) + 1), d.d("{223689a}", "{30f8637}", t5);
            }
            async function ro(e4, t5) {
              return e4.v = true, navigator.mediaDevices.getUserMedia({ audio: t5 }).then((t6) => {
                if (d.d("{223689a}", "{b204737}"), io(e4, 5, false), e4.v = false, e4.g = t6, v(e4.u) && (t6.getTracks()[0].onended = () => {
                  e4.O = performance.now(), d.i("{223689a}", "{6b60d82}"), no(e4);
                }), e4.g.oninactive = () => {
                  d.d("{223689a}", "{eee54f1}"), e4.M.clear(), e4.g = null;
                }, e4.paused) d.d("{223689a}", "{21e76e1}"), e4.g = null, io(e4, 7);
                else {
                  var i4 = e4.C.getSenders()[0];
                  i4 ? i4.replaceTrack(t6.getTracks()[0]).then(() => {
                    var t7;
                    d.i("{223689a}", "{6c92139}");
                    const i5 = null !== (t7 = e4.Ea) && void 0 !== t7 ? t7 : e4.K;
                    if (v(e4.u) && !N(e4.u, false, 15, 4) && i5 && !i5.muted) {
                      let t8;
                      i5.srcObject && (t8 = i5.play(), d.i("{223689a}", "{23a6493}", i5.tagName)), t8 ? t8.then(() => {
                        d.d("{223689a}", "{5593cbe}"), e4.j();
                      }).catch((t9) => {
                        e4.j();
                        try {
                          wo(e4.G, "WAR: Play Error", null == t9 ? void 0 : t9.name, null == t9 ? void 0 : t9.message), d.e("{223689a}", "{69aae72}", null == t9 ? void 0 : t9.name, null == t9 ? void 0 : t9.message);
                        } catch (e5) {
                        }
                      }) : d.e("{223689a}", "{b6a6508}");
                    }
                    io(e4, 3), e4.F = false, N(e4.u, false, 15, 4) && (e4.o = false, e4.I = false);
                  }).catch((t7) => {
                    d.e("{223689a}", "{5c42246}", t7), e4.g = null, io(e4, 7);
                  }) : (d.e("{223689a}", "{f7f0250}"), e4.g = null);
                }
              }).catch((i4) => {
                var n4, s3;
                v(e4.u) && !N(e4.u, false, 15, 4) && e4.j(), e4.v = false, i4 instanceof DOMException && "NotAllowedError" === i4.name ? (d.e("{223689a}", "{3f9bd66}"), io(e4, 2), e4.I && !e4.o && so(e4, "permissionDenied")) : i4 instanceof DOMException && "NotFoundError" === i4.name ? (d.e("{223689a}", "{7f04869}"), io(e4, 4)) : (i4 instanceof DOMException && "NotReadableError" === i4.name ? (e4.M.add(null !== (n4 = t5.deviceId) && void 0 !== n4 ? n4 : "default"), d.e("{223689a}", "{af7e08c}", null !== (s3 = t5.deviceId) && void 0 !== s3 ? s3 : "default", i4.name, i4.message), navigator.mediaDevices.enumerateDevices().then((i5) => {
                  for (const n5 of i5) if ("audioinput" === n5.kind && "default" !== n5.deviceId && !e4.M.has(n5.deviceId)) {
                    d.d("{223689a}", "{655d8b0}", n5.deviceId, n5.label), t5.deviceId = n5.deviceId, ro(e4, t5);
                    break;
                  }
                }).catch((e5) => {
                  d.e("{223689a}", "{930e826}", e5.name, e5.message);
                })) : d.e("{223689a}", "{c361fc5}", i4.name, i4.message), io(e4, 7));
              });
            }
            async function oo(e4) {
              if (e4.initialized) if (fo) {
                if (e4.l = true, null == e4.g && !e4.v) {
                  e4.paused = false, io(e4, 1, false);
                  var t5 = { sampleRate: 48e3 };
                  b(e4.u) && (t5.googAutoGainControl2 = false), navigator.mediaDevices.ondevicechange = () => {
                    d.i("{223689a}", "{50d0169}", !!e4.g, e4.v), null != e4.g || e4.v || (d.d("{223689a}", "{c849290}"), oo(e4));
                  }, await ro(e4, t5), e4.H || ao(e4);
                }
              } else d.e("{223689a}", "{999b07b}"), io(e4, 6);
            }
            function ao(e4) {
              return navigator.mediaDevices.enumerateDevices().then((t5) => {
                let i4 = 0;
                d.d("{223689a}", "{fa1ec18}", JSON.stringify(t5));
                for (const e5 of t5) "audioinput" == e5.kind && i4++;
                switch (i4) {
                  case 0:
                    e4.H = "No Audio Input", e4.m.Qd++;
                    break;
                  case 1:
                    e4.H = "Built-in Microphone", e4.m.wd++;
                    break;
                  default:
                    e4.H = "Headset Microphone", e4.m.Gd++;
                }
                d.d("{223689a}", "{0d14ab6}", e4.H);
              }).catch(() => {
                d.e("{223689a}", "{21131d5}");
              });
            }
            function co() {
              let e4 = Dn(48e3);
              if (e4) {
                let t5 = e4.createMediaStreamDestination().stream.getAudioTracks()[0];
                return e4.close(), t5.enabled = true, new MediaStream([t5]);
              }
              throw Error("Mic stream is not supported");
            }
            function lo(e4) {
              if (false !== Gt) {
                if (null != e4.g) {
                  let t5 = e4.g;
                  e4.M.clear(), e4.g = null, navigator.mediaDevices && (navigator.mediaDevices.ondevicechange = () => {
                  }), t5.getTracks().forEach((e5) => {
                    e5.stop();
                  });
                }
                e4.l = false, io(e4, 5), Eo(e4.G, "AudioInputType", e4.N ? "started" : "not started", 0, e4.m.Qd, e4.m.wd, e4.m.Gd), N(e4.u, false, 15, 4) && Eo(e4.G, "LowAudioVolume", "", 0, e4.s.get("permissionDenied"), e4.s.get("visibilityChange"), e4.s.get("deviceChange")), e4.C = null, e4.L = null, e4.K = void 0, e4.Ea = void 0, e4.initialized = false, e4.m = { Qd: 0, wd: 0, Gd: 0 };
                for (const [t5] of e4.s) e4.s.set(t5, 0);
                e4.o = false, e4.F = false, e4.I = false, e4.N = false;
              }
            }
            function uo(e4) {
              return "Built-in Microphone" === e4.H;
            }
            function ho(e4, t5) {
              ao(e4).then(() => {
                0 !== t5 && N(e4.u, false, 15, 4) && !e4.o && uo(e4) && (e4.l || e4.F) && so(e4, "deviceChange");
              });
            }
            var po = class {
              constructor(e4, t5) {
                this.L = null, this.h = 0, this.l = false, this.M = /* @__PURE__ */ new Set(), this.initialized = this.P = false, this.O = 0, this.F = this.I = this.o = false, this.m = { Qd: 0, wd: 0, Gd: 0 }, this.s = /* @__PURE__ */ new Map([["permissionDenied", 0], ["visibilityChange", 0], ["deviceChange", 0]]), this.N = false, this.u = e4, this.G = t5, this.g = this.C = null, this.paused = this.v = false, N(e4, false, 15) && (this.P = true);
              }
              initialize(e4, t5, i4, n4) {
                if (false !== Gt) {
                  if (this.C = e4, this.L = t5, this.K = i4, this.Ea = n4, fo) {
                    if (null == (e4 = co())) return void d.w("{223689a}", "{360f38b}");
                    this.C.addTrack(e4.getAudioTracks()[0], e4), this.l && oo(this);
                  } else d.w("{223689a}", "{5813c2b}");
                  this.initialized = true;
                }
              }
              j() {
                var e4, t5, i4;
                if (qi && this.P) {
                  var n4 = null !== (t5 = null === (e4 = this.Ea) || void 0 === e4 ? void 0 : e4.srcObject) && void 0 !== t5 ? t5 : null === (i4 = this.K) || void 0 === i4 ? void 0 : i4.srcObject;
                  if (n4) {
                    d.i("{223689a}", "{ad4b8c2}");
                    var s3 = n4.getAudioTracks()[0];
                    s3.enabled = false, setTimeout(() => {
                      s3.enabled = true;
                    }, 0);
                  }
                }
              }
              getMicState() {
                return this.h;
              }
            }, fo = null != navigator.mediaDevices && (window.AudioContext || window.webkitAudioContext || false), vo = { clientName: "Ragnarok", clientId: "62677554106929725", eventSchemaVer: "3.2" }, mo = class extends xe {
              constructor(e4) {
                super(e4), this.name = "Streamer_Start", this.gdprLevel = "functional";
              }
            }, go = class extends xe {
              constructor(e4) {
                super(e4), this.name = "Streamer_Exit", this.gdprLevel = "functional";
              }
            }, Ao = class extends xe {
              constructor(e4) {
                super(e4), this.name = "Streamer_InputDevice", this.gdprLevel = "functional";
              }
            };
            function So(e4, t5) {
              const i4 = e4.j.get(t5);
              if (i4) {
                e4.h = i4;
                for (const t6 of e4.g) t6(e4.getCurrentNetworkType());
              } else d.d("{aac1655}", "{1e3c13d}", t5);
            }
            var bo = new class {
              constructor() {
                var e4;
                this.j = /* @__PURE__ */ new Map([["Ethernet", "ETHERNET"], ["5GHz_WiFi", "WIFI_5_0"], ["2.4GHz_WiFi", "WIFI_2_4"], ["Others", "OTHER"], ["disconnected", "UNKNOWN"], ["wifi", "WIFI"], ["ethernet", "ETHERNET"], ["none", "UNKNOWN"], ["bluetooth", "BLUETOOTH"], ["wimax", "WIMAX"], ["other", "OTHER"], ["mobile", "MOBILE"], ["unknown", "UNKNOWN"], ["NONE", "UNKNOWN"], ["UNKNOWN", "UNKNOWN"], ["ETHERNET", "ETHERNET"], ["WIFI", "WIFI"], ["NET_PROXY", "OTHER"], ["2G", "MOBILE_2G"], ["2.5G", "MOBILE_2G"], ["3G", "MOBILE_3G"], ["4G", "MOBILE_4G"]]), this.h = "UNKNOWN", this.g = [], window.addEventListener("GFNNetworkInfo", (e5) => {
                  d.d("{aac1655}", "{2925c9d}", e5.detail.state), So(this, e5.detail.state);
                });
                const t5 = navigator.connection;
                if (null != t5 && t5.type && (So(this, t5.type), t5.addEventListener("change", () => {
                  var e5;
                  const t6 = null === (e5 = navigator.connection) || void 0 === e5 ? void 0 : e5.type;
                  t6 && (d.d("{aac1655}", "{4a9e05b}", t6), So(this, t6));
                })), null !== (e4 = window.tizen) && void 0 !== e4 && e4.systeminfo) {
                  e4 = (e5) => {
                    (e5 = e5.networkType) && (d.d("{aac1655}", "{e9b5f27}", e5), So(this, e5));
                  };
                  try {
                    window.tizen.systeminfo.getPropertyValue("NETWORK", e4), window.tizen.systeminfo.addPropertyValueChangeListener("NETWORK", e4);
                  } catch (e5) {
                    d.w("{aac1655}", "{7d035ae}", e5);
                  }
                }
              }
              registerCallback(e4) {
                this.g.push(e4);
              }
              unregisterCallback(e4) {
                const t5 = this.g.findIndex((t6) => t6 == e4);
                -1 !== t5 && this.g.splice(t5, 1);
              }
              getCurrentNetworkType() {
                return this.h;
              }
            }();
            function wo(e4, t5, i4, n4, s3, r3) {
              t5 = new Fe({ key1: null != t5 ? t5 : "", key2: null != i4 ? i4 : "", key3: null != n4 ? n4 : "", key4: null != s3 ? s3 : "", key5: null != r3 ? r3 : "", moduleName: "RAGNAROK", networkType: _(bo.getCurrentNetworkType()), overrideConfigType: Ii.type, overrideConfigVersion: Ii.version, cmsId: String(e4.cmsId), sessionId: e4.sessionId, subSessionId: e4.subSessionId }), e4.h(t5);
            }
            function yo(e4, t5, i4, n4, s3, r3, o2, a2, d2) {
              50 <= e4.H || (e4.H++, t5 = new Ao({ deviceName: t5, deviceType: "GAMEPAD", vendorId: i4, productId: n4, deviceIndex: s3, reportIndex: o2 ? 0 : s3, hapticsSupported: Tn(r3), hapticsFeedbackCount: 0, state: a2, eventMapReceived: d2, eventMapProcessed: d2, sessionId: e4.sessionId, subSessionId: e4.subSessionId, cmsId: String(e4.cmsId) }), e4.h(t5));
            }
            function Eo(e4, t5, i4, n4, s3, r3, o2) {
              t5 = new Ue({ metricName: t5, moduleName: "RAGNAROK", valueInt1: s3, valueInt2: r3, valueInt3: o2, valueString: i4, valueDouble: n4, networkType: _(bo.getCurrentNetworkType()), cmsId: String(e4.cmsId), sessionId: e4.sessionId, subSessionId: e4.subSessionId }), e4.h(t5);
            }
            class Co extends ze {
              constructor() {
                super(vo), this.cmsId = this.subSessionId = this.sessionId = "", this.isResume = false, this.zoneAddress = "", this.H = 0, this.v = /* @__PURE__ */ new Map(), this.C = 0;
              }
              za(e4, t5, i4, n4, s3, r3, o2) {
                var a2;
                if (50 <= this.C) var d2 = false;
                else {
                  var c2 = null !== (d2 = this.v.get(t5)) && void 0 !== d2 ? d2 : 0;
                  10 <= c2 ? d2 = false : (this.C++, this.v.set(t5, c2 + 1), d2 = true);
                }
                d2 && (e4 instanceof DOMException && (e4 = { name: e4.name, message: e4.message }), e4 = new _e({ filename: i4, lineno: n4, stacktrace: null !== (a2 = null == e4 ? void 0 : e4.stack) && void 0 !== a2 ? a2 : "", colno: s3, handled: Tn(r3), category: null != o2 ? o2 : "", message: t5, moduleName: "RAGNAROK", sessionId: this.sessionId, subSessionId: this.subSessionId }), this.h(e4));
              }
            }
            var To = new Co();
            function Io(e4, t5) {
              e4.I.hasListener("TelemetryEvent") ? e4.I.emit("TelemetryEvent", t5) : dc(e4.j, t5);
            }
            function Ro(e4, t5) {
              let i4 = false;
              var n4;
              e4.clientShutDownCallback && (i4 = e4.clientShutDownCallback(t5), d.d("{9838627}", "{caf81d9}", i4)), i4 || (d.d("{9838627}", "{e939db1}"), e4 = e4.j, d.d("{f7c1592}", "{01dcfe5}", null === (n4 = t5.parameters) || void 0 === n4 ? void 0 : n4.sessionId), gc(e4, t5), Ac(fc(e4, e4.h.eventPayload)));
            }
            var ko = class extends Co {
              constructor(e4, t5) {
                super(), this.I = e4, this.j = t5, this.j.H = this.za.bind(this);
              }
              h(e4) {
                Io(this, { name: e4.name, gdprLevel: e4.gdprLevel, parameters: e4.parameters, ts: e4.ts, clientConfig: vo });
              }
            };
            function Po(e4, t5) {
              switch (e4) {
                case 0:
                  var i4, n4 = window.RTCPeerConnection;
                  if (n4) if (v(t5)) t5 = N(t5, false, 14, 3);
                  else {
                    switch (e4 = false, P(t5) && (e4 = true), window.chrome && ("Chrome" == t5.browser ? M(t5, 77) && (e4 = true) : e4 = true), t5.browser) {
                      case "Edge_Legacy":
                        e4 = false;
                        break;
                      case "Safari":
                        const s3 = null == n4 ? void 0 : n4.prototype;
                        if (n4 = s3 && (null === (i4 = s3.hasOwnProperty) || void 0 === i4 ? 0 : i4.call(s3, "canTrickleIceCandidates"))) e: if ("Safari" != t5.browser) n4 = false;
                        else {
                          try {
                            n4 = L(t5.browserVer, false, 16, 4);
                            break e;
                          } catch (e5) {
                            d.w("{d988e7f}", "{07fd1dd}");
                          }
                          n4 = true;
                        }
                        n4 && (e4 = true);
                    }
                    t5 = e4;
                  }
                  else t5 = false;
                  return t5;
                case 1:
                  return fo;
                default:
                  return false;
              }
            }
            function Do(e4) {
              return !(S(e4) || E(e4) || v(e4));
            }
            function Oo(e4, t5, i4) {
              var n4, s3, r3, o2;
              const a2 = 4953600 <= e4 * t5;
              var d2 = 30 === i4 ? 1.25 * i4 : Math.min(i4, 60);
              let c2 = e4 * t5 * d2;
              return yn(e4, t5) || a2 ? (e4 = null !== (s3 = null !== (n4 = Zt) && void 0 !== n4 ? n4 : Ci.bitsPerPixel1440p) && void 0 !== s3 ? s3 : 0.325, d2 = (n4 = 2073600 * d2) + (3686400 * d2 - n4) / 3, c2 = a2 ? d2 + (c2 - d2) / 12 : n4 + (c2 - n4) / 3) : e4 = null !== (o2 = null !== (r3 = Yt) && void 0 !== r3 ? r3 : Ci.bitsPerPixel) && void 0 !== o2 ? o2 : 0.3, c2 = c2 * e4 / 1200, 120 <= i4 && !a2 && (c2 = Math.min(5e4, Math.round(1.15 * c2))), [Math.round(c2), 5e4];
            }
            function Mo(e4, t5) {
              return t5 *= 1e3, t5 = 3600 * (120 === e4 ? 0.916 * t5 + 293098 : 0.678 * t5 + 910569) / 1e9 / 8, 30 === e4 && (t5 *= 0.625), Math.round(0.95 * t5);
            }
            async function No(e4) {
              let t5 = 0;
              return "iOS" === e4.os && (t5 |= 1), "iPadOS" === e4.os && (t5 |= 2), E(e4) && function() {
                var e5, t6;
                if (navigator.userAgent.includes("SamsungBrowser")) return false;
                const i4 = null === (e5 = window.webapis) || void 0 === e5 ? void 0 : e5.productinfo;
                return !(null == i4 || !i4.isUdPanelSupported()) && (e5 = null === (t6 = i4.getSmartTVServerVersion) || void 0 === t6 ? void 0 : t6.call(i4), (t6 = e5 && (t6 = e5.match(/T-INFOLINK(\d+)-(\d+)/)) ? { year: parseInt(t6[1], 10), version: parseInt(t6[2], 10) } : void 0) ? (e5 = t6.year, t6 = t6.version, d.i("{d988e7f}", "{fc40a4b}", e5, t6), 2021 === e5 || 2023 <= e5 || 2022 === e5 && 1008 <= t6) : (d.e("{d988e7f}", "{e227976}", e5), false));
              }() && (t5 |= 4), S(e4) && navigator.userAgent.includes("PWA") && window.lge_webrtc_hevc_support && (t5 |= 8), "VISIONPRO" === e4.deviceModel && (t5 |= 16), async function(e5) {
                var t6, i4, n4, s3, r3, o2, a2, c2 = screen.width, l2 = screen.height, u2 = window.devicePixelRatio, h2 = !!(4 & e5) || !!(8 & e5) || !!(16 & e5), p2 = null !== (r3 = null !== (s3 = ri) && void 0 !== s3 ? s3 : Ci.forceHdrSupport) && void 0 !== r3 && r3;
                return s3 = null !== (a2 = null !== (o2 = oi) && void 0 !== o2 ? o2 : Ci.forceSdr10Support) && void 0 !== a2 && a2, [c2, l2] = hn([c2, l2]), l2 = { width: Math.round(c2 * u2), height: Math.round(l2 * u2), fps: 60, scaleFactor: Math.round(100 * u2) }, u2 = void 0, h2 ? u2 = { width: 3840, height: 2160, fps: l2.fps } : 2 & e5 && 1366 <= c2 && (u2 = { width: 1600, height: 1200, fps: l2.fps }), e5 = [{ width: 2560, height: 1600, fps: 120 }, { width: 3840, height: 1080, fps: 120 }], h2 && e5.push({ width: 3840, height: 2160, fps: 60 }), h2 = false, p2 && (h2 = null === (t6 = window.matchMedia) || void 0 === t6 ? void 0 : t6.call(window, "(dynamic-range: high)").matches, t6 = null === (i4 = window.matchMedia) || void 0 === i4 ? void 0 : i4.call(window, "(video-dynamic-range: high)").matches, i4 = null === (n4 = window.matchMedia) || void 0 === n4 ? void 0 : n4.call(window, "(color-gamut: p3)").matches, d.i("{5083445}", "{f9f1c3b}", h2, t6, i4), h2 = (h2 || t6) && i4), n4 = un(), Lo = { displayMode: l2, maxAutoMode: u2, maxSupportedModes: e5, features: { vsync: 0, vvsync: false, hdr: h2, reflex: false, audioChannelCount: n4, bitDepth: p2 ? 10 : 8, sdrBitDepth: s3 ? 10 : 8 } };
              }(t5);
            }
            let Lo;
            function xo(e4) {
              let t5 = 0;
              return null != e4 && e4.supported && (t5 |= 1), null != e4 && e4.smooth && (t5 |= 2), null != e4 && e4.powerEfficient && (t5 |= 4), t5;
            }
            function Fo(e4, t5 = 1920, i4 = 1080, n4 = 60) {
              const s3 = navigator.mediaCapabilities;
              return s3 ? s3.decodingInfo({ type: "webrtc", video: { contentType: "video/" + e4, width: t5, height: i4, framerate: n4, bitrate: 1e3 * Oo(t5, i4, n4)[0] } }).catch((t6) => {
                d.w("{5083445}", "{f5c2155}", e4, t6);
              }) : Promise.resolve(void 0);
            }
            function _o() {
              var e4 = Go;
              return e4.l ? Promise.resolve(e4.l) : e4.g ? e4.g : e4.m();
            }
            function Uo(e4, t5) {
              return t5 && (e4.refreshRate = void 0), e4.refreshRate ? Promise.resolve(e4.refreshRate) : e4.j ? e4.j : function(e5) {
                return e5.j = new Promise((e6, t6) => {
                  let i4 = false;
                  const n4 = window.setTimeout(() => {
                    i4 = true;
                  }, 4e3), s3 = [];
                  let r3, o2 = window.innerWidth, a2 = window.innerHeight, c2 = window.screenX, l2 = window.screenY;
                  const u2 = () => {
                    window.requestAnimationFrame(() => {
                      if (i4) d.w("{5083445}", "{0b0c6f9}", "Timed out during the refreshRate loop"), window.clearTimeout(n4), t6();
                      else {
                        if (window.innerWidth != o2 || window.innerHeight != a2 || c2 != window.screenX || l2 != window.screenY) {
                          o2 = window.innerWidth, a2 = window.innerHeight, c2 = window.screenX, l2 = window.screenY;
                          var h2 = true;
                        } else h2 = false;
                        h2 ? (d.w("{5083445}", "{824b461}"), s3.length = 0, u2()) : (h2 = performance.now(), s3.length && s3[0] <= h2 - 2e3 ? (r3 = Math.floor(s3.length / 2), d.d("{5083445}", "{8c3d290}", r3, s3[s3.length - 1] - s3[0]), h2 = r3, window.clearTimeout(n4), e6(h2)) : (s3.push(h2), u2()));
                      }
                    });
                  };
                  u2();
                }).then((t6) => (e5.refreshRate = t6, e5.refreshRate), () => {
                  var t6;
                  return null !== (t6 = e5.refreshRate) && void 0 !== t6 ? t6 : 0;
                }), e5.j;
              }(e4);
            }
            async function jo() {
              return 117 <= await Uo(Go, false);
            }
            var Go = new class {
              constructor() {
                Rn.push(this.s.bind(this)), Rn.push(this.m.bind(this)), Rn.push(this.o.bind(this));
              }
              m() {
                return this.g = Fo("av1").then((e4) => this.l = e4);
              }
              o() {
                return this.h = Promise.resolve(void 0);
              }
              async s() {
                return 117 <= await Uo(this, true);
              }
            }();
            async function Bo(e4, t5) {
              var i4;
              let n4 = [];
              const s3 = null !== (i4 = si) && void 0 !== i4 ? i4 : Ci.codecList;
              if (s3) for (const e5 of s3) n4.push(e5);
              else e4 = async function(e5, t6) {
                var i5, n5, s4;
                const r3 = null !== (n5 = null !== (i5 = ni) && void 0 !== i5 ? i5 : Ci.enableAv1Support) && void 0 !== n5 ? n5 : (b(t6) || w(t6)) && "Chrome" == t6.browser;
                return i5 = null !== (s4 = Ci.enableAv1ByResolutionAndFps) && void 0 !== s4 ? s4 : 7, !(!r3 || 4953600 <= e5.width * e5.height && !(4 & i5) || yn(e5.width, e5.height) && !(2 & i5) || !(120 !== e5.fps || 1 & i5)) && (S(t6) && null != window.lge_webrtc_av1_support ? window.lge_webrtc_av1_support : !(null == (e5 = await _o()) || !e5.powerEfficient));
              }(e4, t5), t5 = async function(e5) {
                return S(e5) && null != window.lge_webrtc_hevc_support ? window.lge_webrtc_hevc_support : !(!E(e5) && (e5 = Go, null == (e5 = await (e5.v ? Promise.resolve(e5.v) : e5.h ? e5.h : e5.o())) || !e5.powerEfficient));
              }(t5), await e4 && n4.push("AV1"), await t5 && n4.push("H265"), n4.push("H264");
              return n4;
            }
            function Vo(e4, t5, i4, n4) {
              const s3 = /^([^[.]+)(?:\[(\d+)\])?\.([^:]+): *(.+)$/;
              let r3 = true;
              for (const c2 of e4.split(/\r?\n/)) {
                var o2 = s3.exec(c2);
                if (o2) {
                  var a2 = o2[1];
                  e4 = void 0 !== o2[2] ? Number.parseInt(o2[2]) : void 0;
                  const s4 = o2[4];
                  o2 = a2 + "." + o2[3];
                  const c3 = zo(t5, a2 = Ho(a2), e4), l2 = zo(i4, a2, e4);
                  c3 && l2 ? l2.has(o2) ? (d.d("{eb7c2d0}", "{2beb68f}", n4, o2, s4), c3.set(o2, s4)) : (d.w("{eb7c2d0}", "{cc4fdef}", n4, o2, s4), r3 = false) : (d.w("{eb7c2d0}", "{a649ad8}", n4, a2, e4), r3 = false);
                }
              }
              return r3;
            }
            function Ho(e4) {
              switch (e4) {
                case "video":
                case "vqos":
                case "qscore":
                case "bwe":
                case "clientPerfBr":
                case "packetPacing":
                  return "video";
                case "audio":
                case "aqos":
                case "audioBitrate":
                  return "audio";
                case "ri":
                  return "application";
                case "mic":
                  return "mic";
              }
            }
            function Wo(e4, t5, i4) {
              e4.set(i4 ? "vqos.dfc.adjustResAndFps" : "vqos.drc.enable", t5 ? "1" : "0");
            }
            function zo(e4, t5, i4) {
              var n4;
              return void 0 === t5 ? e4.ob : null === (n4 = e4.media.filter((e5) => e5.mediaType === t5)[null != i4 ? i4 : 0]) || void 0 === n4 ? void 0 : n4.attributes;
            }
            function Ko(e4, t5) {
              let i4 = `v=0
o=${e4.origin}
s=-
t=${e4.time}
`;
              const n4 = (e5, t6) => {
                for (const [n5, s3] of e5) {
                  e5 = n5;
                  const r3 = s3;
                  r3 !== t6.get(e5) && (i4 += `a=${e5}:${r3}
`);
                }
              };
              n4(e4.ob, t5.ob);
              for (const s3 of e4.media) i4 += `m=${s3.mediaType} 0 RTP/AVP
`, i4 += `a=msid:${s3.Fc}
`, e4 = t5.media.find((e5) => e5.Fc === s3.Fc), n4(s3.attributes, e4.attributes);
              return i4;
            }
            function qo(e4) {
              switch (e4) {
                case 0:
                  return 0;
                case 1:
                  return 1;
                case 2:
                  return d.w("{eb7c2d0}", "{30c875c}"), 0;
                default:
                  return d.w("{eb7c2d0}", "{7cd5754}", e4), 0;
              }
            }
            function $o(e4) {
              const t5 = e4.j - e4.g;
              return 0 != t5 ? (e4.l - e4.h) / t5 : 0;
            }
            class Jo {
              constructor() {
                this.j = this.g = this.l = this.h = 0;
              }
              update(e4, t5) {
                0 == this.h && 0 == this.g ? (this.h = e4, this.g = t5) : (this.j = t5, this.l = e4);
              }
              reset() {
                this.h = this.l, this.g = this.j;
              }
            }
            function Xo(e4, t5) {
              e4.M.innerText = Qo(e4, t5), e4.j = { value: 0, count: 0, max: 0 }, e4.l = { value: 0, count: 0, max: 0 }, e4.m.reset();
            }
            function Qo(e4, t5) {
              var i4 = `Seat: ${e4.h.zoneName} (${e4.h.Ud}) / ${e4.h.gpuType}
`, n4 = `Game: CMS ${e4.h.appId}`;
              void 0 !== e4.avgGameFps && (n4 += ` / fps ${e4.avgGameFps.toFixed()}`), i4 = i4 + (n4 + "\n") + `Stream: Current ${kn(e4.streamingResolution)}@${e4.fps} / Default: ${e4.h.streamInfo.width}x${e4.h.streamInfo.height}@${e4.h.streamInfo.fps} / Codec ${e4.codec}${e4.hdr ? " HDR" : ""} ${e4.bitDepth} bpc
Network: RTD ${e4.rtd}ms / FL ${e4.s} / PL ${e4.N} / J ${e4.H.toFixed(2)}ms / Bitrate ${e4.o.toFixed(2)}Mbps / BWU ${e4.Ob.toFixed(2)}%
QOS: frame ${e4.C} / FT ${e4.P.toFixed(2)} / D ${(1e3 * $o(e4.m)).toFixed(2)} / Q ${Math.floor(e4.v.qualityScore)} / Marker ${e4.S}
Client: ${e4.u.os} ${e4.h.clientAppVersion} ${e4.h.clientLocale} Resolution ${kn({ width: window.innerWidth * window.devicePixelRatio, height: window.innerHeight * window.devicePixelRatio })}
Input ${e4.g.qf}
`, n4 = `DC ${Zo(e4.j)}ms (${e4.j.max.toFixed(2)}ms) / Blocked ${e4.L}
`;
              const s3 = `Stats ${Zo(e4.l)}ms (${e4.l.max.toFixed(2)}ms) / FR ${e4.O} / FDR ${e4.I}
`, r3 = `Latency ${e4.v.latencyScore.toFixed(1)} / Network ${e4.v.networkLossScore.toFixed(1)} / Bandwidth ${e4.v.bandwidthScore.toFixed(1)}
`, o2 = `VP ${e4.g.tf ? "y" : "n"} / AP ${e4.g.rf ? "y" : "n"} / UI ${e4.g.yb ? "y" : "n"} / VKB ${e4.g.kb ? "y" : "n"} / MS ${e4.g.yf} / RSDMM ${+e4.g.cd}
`;
              return e4 = `KBL ${e4.g.keyboardLayout} / ALM ${+e4.g.appLaunchMode} / SWD ${e4.U ? "y" : "n"} / ${e4.cc}`, t5 && (i4 += n4 + s3 + r3 + o2 + e4), i4;
            }
            var Yo = class {
              constructor(e4, t5, i4) {
                this.o = this.fps = 0, this.Ob = 4, this.N = this.rtd = this.H = this.I = this.O = this.C = this.R = this.F = 0, this.streamingResolution = { width: 0, height: 0 }, this.L = this.P = 0, this.j = { count: 0, max: 0, value: 0 }, this.l = { count: 0, max: 0, value: 0 }, this.m = new Jo(), this.T = this.s = this.zd = 0, this.codec = "UNKNOWN", this.hdr = false, this.bitDepth = 8, this.U = false, this.cc = "", this.S = 0, this.K = e4, this.u = t5, this.h = i4, this.v = { qualityScore: 0, bandwidthScore: 0, networkLossScore: 0, latencyScore: 0 }, (e4 = document.getElementById("overlay-543d9968")) || ((e4 = document.createElement("div")).id = "overlay-543d9968", e4.style.display = "none", e4.style.position = "fixed", v(this.u) ? (e4.style.top = "env(safe-area-inset-top, 0)", e4.style.left = "max(24px, env(safe-area-inset-left, 0))") : (e4.style.top = "0", e4.style.left = "0"), e4.style.padding = "0.5em", e4.style.backgroundColor = "rgba(0,0,0,0.5)", e4.style.zIndex = "300", e4.style.fontSize = "12px", e4.style.fontFamily = "monospace", e4.style.color = "white", e4.style.whiteSpace = "pre", e4.style.lineHeight = "100%", e4.style.pointerEvents = "none", this.K.insertAdjacentElement("afterend", e4)), this.M = e4, this.g = { tf: false, rf: false, yb: false, kb: false, yf: 0, cd: false, keyboardLayout: "", appLaunchMode: 0, qf: "" };
              }
            };
            function Zo(e4) {
              let t5 = 0;
              return 0 < e4.count && (t5 = e4.value / e4.count), t5.toFixed(2);
            }
            var ea = { size: 70, version: 1, name: "DEPR" }, ta = { size: 80, version: 3, name: "RTPV" }, ia = { size: 48, version: 1, name: "RTPA" }, na = { size: 88, version: 1, name: "TRAA" }, sa = { size: 20, version: 1, name: "PFDA" };
            function ra(e4) {
              0 < e4.g.length && (cn(e4.g, 5), e4.g = []);
            }
            function oa(e4, t5) {
              const i4 = e4.K.videoWidth;
              return e4 = e4.K.videoHeight, new DOMRect(t5.x * i4, t5.y * e4, t5.width * i4, t5.height * e4);
            }
            function aa(e4) {
              const t5 = { isPrimary: true, pointerId: 1, button: 0 };
              e4.K.dispatchEvent(new PointerEvent("pointerdown", t5)), e4.K.dispatchEvent(new MouseEvent("mousedown")), window.setTimeout(() => {
                e4.K.dispatchEvent(new PointerEvent("pointerup", t5)), e4.K.dispatchEvent(new MouseEvent("mouseup"));
              }, 100);
            }
            function da(e4, t5) {
              e4.ac.checked = t5, e4.s.disabled = !t5, e4.C.disabled = !t5, e4.l.style.color = t5 ? "white" : "gray";
            }
            function ca(e4, t5 = false) {
              t5 && (e4.g.style.bottom = "5px", e4.g.style.left = "300px", e4.g.style.top = "", e4.g.style.right = "", e4.g.style.width = "150px", e4.g.style.height = "150px"), e4.o() ? (e4.m.style.display = "none", e4.g.style.border = "2px rgb(76, 175, 80) solid", e4.g.style.backgroundColor = "transparent") : (e4.m.style.display = "block", e4.g.style.border = "none", e4.g.style.backgroundColor = "rgb(105, 105, 105, 0.7)");
            }
            function la(e4, t5) {
              if (t5 !== e4.visible) {
                for (var i4 of (d.i("{50c79eb}", "{5595c14}", t5), e4.visible = t5, [e4.L, e4.g, e4.v])) i4 === e4.v && t5 ? pa(e4, "Show hotkeys" !== e4.h.value) : i4.style.display = t5 ? "block" : "none";
                var n4 = On();
                if (i4 = n4 ? "pointerdown" : "mousedown", n4 = n4 ? "pointermove" : "mousemove", t5) {
                  e4.P(), function(e5, t7) {
                    let i5 = 0, n5 = 0, s3 = 0, r3 = 0;
                    const o2 = document.onmouseup, a2 = document.onmousemove;
                    t7.onmousedown = (t8) => {
                      t8.preventDefault(), i5 = t8.clientX, n5 = t8.clientY, document.onmouseup = () => {
                        document.onmouseup = o2, document.onmousemove = a2;
                      }, document.onmousemove = (t9) => {
                        t9.preventDefault(), s3 = i5 - t9.clientX, r3 = n5 - t9.clientY, i5 = t9.clientX, n5 = t9.clientY, e5.style.top = e5.offsetTop - r3 + "px", e5.style.left = e5.offsetLeft - s3 + "px";
                      };
                    };
                  }(e4.g, e4.m), e4.O.oninput = (t7) => {
                    t7 = parseFloat(t7.target.value);
                    var i5 = e4.j;
                    0 >= t7 || 1 <= t7 ? d.e("{0c7ed7c}", "{1cbd879}", t7.toFixed(2)) : i5.m = t7, e4.S.innerHTML = (100 * t7).toFixed() + "%";
                  }, e4.ac.oninput = (t7) => {
                    da(e4, t7.target.checked);
                  }, e4.s.oninput = (t7) => {
                    e4.U.innerHTML = t7.target.value;
                  }, e4.C.oninput = (t7) => {
                    e4.W.innerHTML = t7.target.value + " ms";
                  }, e4.zb.oninput = (t7) => {
                    e4.zb.checked = t7.target.checked;
                  };
                  const t6 = (t7, i5) => {
                    i5.value = Math.max(Math.min(parseInt(t7.target.value), 100), 0).toFixed(0), Aa(e4, parseInt(e4.Sb.value || "50") / 100, parseInt(e4.Tb.value || "50") / 100);
                  };
                  e4.Sb.oninput = (i5) => t6(i5, e4.Sb), e4.Tb.oninput = (i5) => t6(i5, e4.Tb), e4.H.onclick = () => ua(e4, "Start" === e4.H.value), e4.h.onclick = () => pa(e4, "Show hotkeys" === e4.h.value), e4.g.onmouseup = e4.P.bind(e4), e4.g.onmousedown = () => {
                    e4.o() && aa(e4.j);
                  }, $a(e4.Z, 2, e4.$), e4.K.addEventListener(i4, e4.aa), e4.K.addEventListener(n4, e4.ca);
                } else ua(e4, false), e4.O.oninput = null, e4.ac.oninput = null, e4.s.oninput = null, e4.C.oninput = null, e4.zb.oninput = null, e4.Sb.oninput = null, e4.Tb.oninput = null, e4.H.onclick = null, e4.h.onclick = null, e4.g.onmouseup = null, e4.g.onmousedown = null, e4.m.onmousedown = null, Ja(e4.Z, 2, e4.$), e4.K.removeEventListener(i4, e4.aa), e4.K.removeEventListener(n4, e4.ca);
              }
            }
            function ua(e4, t5) {
              t5 && !function(e5) {
                const t6 = oa(e5, e5.l);
                return !(0 > t6.x || 0 > t6.y || t6.x + t6.width > e5.K.videoWidth || t6.y + t6.height > e5.K.videoHeight);
              }(e4.j) ? function(e5) {
                e5.R.style.display = "block", window.setTimeout(() => e5.R.style.display = "none", 5e3);
              }(e4) : t5 && e4.M ? d.e("{50c79eb}", "{89742e9}") : (function(e5, t6) {
                e5.active !== t6 && ((e5.active = t6) ? (d.i("{0c7ed7c}", "{b56e30d}"), e5.K.dispatchEvent(new Event("focus", { bubbles: true })), e5.K.addEventListener("pointerdown", e5.j), e5.K.addEventListener("mousedown", e5.j)) : (d.i("{0c7ed7c}", "{00425c2}"), e5.K.removeEventListener("pointerdown", e5.j), e5.K.removeEventListener("mousedown", e5.j), e5.g = [], e5.h = []));
              }(e4.j, t5), ca(e4), t5 ? (e4.H.value = "Stop", e4.ac.checked && (d.i("{50c79eb}", "{5974b2c}"), e4.M = true, e4.da = parseInt(e4.s.value), e4.N = window.setInterval(() => {
                0 < e4.da-- ? aa(e4.j) : (d.i("{50c79eb}", "{d37e51d}"), fa(e4), ua(e4, false));
              }, parseInt(e4.C.value)))) : (e4.H.value = "Start", e4.M && (e4.N ? (d.i("{50c79eb}", "{d340c50}"), fa(e4)) : d.w("{50c79eb}", "{6d8948b}")), va(e4), ma(e4)));
            }
            function ha(e4, t5) {
              e4.value = t5.toString(), e4.dispatchEvent(new Event("input"));
            }
            function pa(e4, t5) {
              t5 ? (e4.h.value = "Hide hotkeys", e4.v.style.display = "block") : (e4.h.value = "Show hotkeys", e4.v.style.display = "none");
            }
            function fa(e4) {
              window.clearInterval(e4.N), e4.N = 0, e4.M = false;
            }
            function va(e4) {
              0 !== e4.I && (window.clearTimeout(e4.I), e4.I = 0);
            }
            function ma(e4) {
              e4.F.innerHTML = "", e4.F.style.display = "none";
            }
            function ga(e4) {
              var t5;
              const i4 = null !== (t5 = e4.processingDuration) && void 0 !== t5 ? t5 : 0;
              return { pf: e4.Ec - e4.Ub, Tf: e4.receiveTime ? e4.receiveTime - e4.Ec : 0, Xe: e4.receiveTime && e4.processingDuration ? e4.presentationTime - e4.processingDuration - e4.receiveTime : 0, decode: i4, Pf: e4.td - e4.presentationTime, total: e4.td - e4.Ub };
            }
            function Aa(e4, t5, i4) {
              const n4 = e4.K.getBoundingClientRect(), s3 = e4.g.getBoundingClientRect(), { paddingTop: r3, paddingRight: o2, paddingBottom: a2, paddingLeft: d2 } = Ta(e4.K);
              t5 = n4.left + d2 + (n4.width - d2 - o2) * t5 - s3.width * t5, e4.g.style.top = (n4.top + r3 + (n4.height - r3 - a2) * i4 - s3.height * i4).toString() + "px", e4.g.style.left = t5.toString() + "px", e4.P();
            }
            function Sa() {
              const e4 = document.createElement("div");
              return e4.style.display = "none", e4.style.position = "absolute", e4.style.color = "white", e4.style.backgroundColor = "rgb(105, 105, 105, 0.7)", e4.style.padding = "2px", e4;
            }
            function ba(e4) {
              const t5 = document.createElement("div");
              return t5.style.width = "100%", t5.style.borderBottom = "1px dashed darkgray", t5.style.paddingBottom = "2px", t5.innerHTML = e4, t5;
            }
            function wa(e4) {
              const t5 = document.createElement("input");
              return t5.type = "button", t5.value = e4, t5.style.margin = "5px", t5.style.backgroundColor = "rgb(132, 130, 143, .7)", t5.style.color = "white", t5.style.padding = "8px 40px", t5.style.border = "none", t5.style.borderRadius = "4px", t5.style.cursor = "pointer", t5;
            }
            function ya() {
              const e4 = document.createElement("input");
              return e4.type = "checkbox", e4;
            }
            function Ea(e4) {
              const t5 = document.createElement("label");
              return t5.innerHTML = e4, t5;
            }
            function Ca(e4, t5, i4, n4 = 1) {
              const s3 = document.createElement("input");
              return s3.type = "range", s3.min = t5.toString(), s3.max = i4.toString(), s3.step = n4.toString(), s3.value = e4.toString(), s3;
            }
            function Ta(e4) {
              const t5 = (e5) => {
                if (!e5) return 0;
                const t6 = e5.length;
                return "%" === e5.substring(t6 - 1) ? parseInt(e5.substring(0, t6 - 1)) : "px" === e5.substring(t6 - 2) ? parseInt(e5.substring(0, t6 - 2)) : (d.w("{50c79eb}", "{3351f27}", e5), 0);
              };
              return { paddingTop: t5(e4.style.paddingTop), paddingRight: t5(e4.style.paddingRight), paddingBottom: t5(e4.style.paddingBottom), paddingLeft: t5(e4.style.paddingLeft) };
            }
            var Ia = class extends Map {
              constructor() {
                super([["TCP", 0], ["MDNS", 0], ["IPV6", 0], ["IPV4", 0], ["UNKNOWN", 0]]);
              }
            };
            function Ra(e4) {
              var t5, i4, n4, s3;
              e4.m = window.setInterval(() => {
                !function(e5) {
                  if (!e5.I) if (e5.I = true, 0 === e5.U) e5.C.getStats().then((t6) => {
                    e5.j = t6;
                  }).catch((t6) => Pa(e5, t6, "early")).finally(() => {
                    e5.I = false;
                  });
                  else if (1 === e5.U) if (e5.ga) {
                    const t6 = e5.C.getReceivers().find((t7) => t7.track.kind === e5.mediaType && t7.track.enabled);
                    t6 && t6.getStats().then((t7) => ka(e5, t7)).catch((t7) => Pa(e5, t7, "standard")).finally(() => {
                      e5.I = false;
                    });
                  } else !function(e6) {
                    e6.C.getStats(null).then((t6) => {
                      let i5 = false;
                      for (let n5 of t6.values()) if ("track" === n5.type && (i5 = true), ["transport", "inbound-rtp", "candidate-pair"].includes(n5.type)) {
                        "audio" === n5.kind && (e6.wa = true);
                        const t7 = e6.P.get(n5.type);
                        t7 ? t7.includes(n5.id) ? d.e("{5cea617}", "{76f5968}", n5.id) : t7.push(n5.id) : e6.P.set(n5.type, [n5.id]);
                      }
                      e6.aa = !i5, d.i("{5cea617}", "{1317761}", e6.aa ? "yes" : "no"), e6.ga = true, e6.j = t6, ka(e6, t6);
                    }).catch((t6) => Pa(e6, t6, "init")).finally(() => {
                      e6.I = false;
                    });
                  }(e5);
                  else e5.I = false;
                }(e4);
              }, null !== (t5 = Ci.getStatsInterval) && void 0 !== t5 ? t5 : 96), window.chrome && (e4.F = window.setInterval(() => {
                !function(e5) {
                  if (!e5.T) {
                    e5.T = true;
                    var t6 = () => {
                      d.i("{5cea617}", "{cf8b53f}"), e5.T = false, clearInterval(e5.F), e5.F = 0;
                    };
                    e5.C.getStats((t7) => {
                      for (var i5 of t7.result()) if ("ssrc" == i5.type) for (var n5 of i5.names()) {
                        "video" === i5.stat("mediaType") && (e5.H.ts = dn(ln), e5.H.timingFrameInfo = i5.stat("googTimingFrameInfo"), e5.H.targetDelayMs = +i5.stat("googTargetDelayMs"), e5.H.minPlayoutDelayMs = +i5.stat("googMinPlayoutDelayMs"), e5.H.currentDelayMs = +i5.stat("googCurrentDelayMs"));
                        break;
                      }
                      if (!(15 > (i5 = (t7 = e5.H).timingFrameInfo.split(",", 15)).length)) {
                        n5 = new ArrayBuffer(ea.size);
                        var s4 = new DataView(n5);
                        s4.setUint32(0, t7.targetDelayMs || 0, true), s4.setUint32(4, t7.minPlayoutDelayMs || 0, true), s4.setUint32(8, t7.currentDelayMs || 0, true), s4.setFloat64(12, dn(ln), true), s4.setFloat64(20, parseFloat(i5[3]) || 0, true), s4.setFloat64(28, parseFloat(i5[4]) || 0, true), s4.setFloat64(36, parseFloat(i5[8]) || 0, true), s4.setFloat64(44, parseFloat(i5[9]) || 0, true), s4.setFloat64(52, parseFloat(i5[10]) || 0, true), s4.setFloat64(60, parseFloat(i5[11]) || 0, true), s4.setUint8(68, parseFloat(i5[13]) || 0), s4.setUint8(69, parseFloat(i5[14]) || 0), cn([n5], 0);
                      }
                      e5.T = false;
                    }, t6).catch(t6);
                  }
                }(e4);
              }, null !== (i4 = Ci.getDeprecatedStatsInterval) && void 0 !== i4 ? i4 : 201)), null === (s3 = (n4 = e4.K).requestVideoFrameCallback) || void 0 === s3 || s3.call(n4, e4.sa);
            }
            function ka(e4, t5) {
              var i4 = performance.now();
              if (i4 >= e4.$ && "video" === e4.mediaType) {
                !function(e5, t6) {
                  var i5, n5, s4, r4 = e5.P.get("inbound-rtp");
                  if (r4 && e5.j) if (r4 = r4.map((e6) => t6.get(e6)).find((e6) => "video" === (null == e6 ? void 0 : e6.kind) || "video" === (null == e6 ? void 0 : e6.mediaType))) {
                    var o3 = (r4 = Ma(e5, t6, r4)).decoderImplementation;
                    if (null != o3 && o3.indexOf) {
                      o3 !== e5.h.cc && "unknown" !== o3 && (e5.h.cc = o3, e5.g.cc = o3);
                      const t7 = -1 !== e5.u.gpuDetail.indexOf("SwiftShader");
                      -1 === o3.indexOf("fallback") && "FFmpeg" !== o3 && !t7 || -1 !== e5.h.zc || (e5.h.zc = null !== (i5 = r4.framesDecoded) && void 0 !== i5 ? i5 : e5.l, function() {
                        var e6 = ln;
                        if (e6.h) {
                          const t8 = { clientEvent: { TS: dn(e6), eventtype: "SoftwareDecodeFallback" } };
                          e6.g && e6.g.postMessage(t8);
                        }
                      }(), i5 = "Fallback to software decode at frame " + String(e5.h.zc), d.i("{5cea617}", "{953d211}", String(e5.h.zc)), e5.g.U = true, vd(e5.Ba, i5));
                    }
                    (i5 = e5.j.get(r4.id)) ? (e5.h.bc.Zf++, (o3 = r4.codecId) && ((o3 = t6.get(o3).mimeType.toUpperCase()).includes("H265") ? e5.N = "H265" : o3.includes("AV1") ? e5.N = "AV1" : o3.includes("H264") ? e5.N = "H264" : (d.d("{5cea617}", "{4b31535}", o3), e5.N = "UNKNOWN"), e5.g.codec = e5.N), function(e6, t7, i6) {
                      var n6 = t7.packetsLost - i6.packetsLost;
                      let s5 = 100 - n6 / (t7.packetsReceived - i6.packetsReceived + n6) * 100;
                      for ((isNaN(s5) || void 0 === s5) && (s5 = 0), 0 < (t7 = t7.pliCount - i6.pliCount) && n6 && (s5 = 0), n6 = 0; n6 < t7 + 1; n6++) e6.networkLossScore = 7 * e6.networkLossScore / 8 + s5 / 8;
                    }(e5.L, r4, i5), function(e6, t7) {
                      if (t7.frameWidth && t7.frameHeight && (e6.streamingResolution = { width: t7.frameWidth, height: t7.frameHeight }), t7.framesDecoded) {
                        const i6 = e6.R, n6 = t7.timestamp;
                        i6 !== n6 && (e6.fps = Math.floor((t7.framesDecoded - e6.C) / (n6 - i6) * 1e3)), e6.C = t7.framesDecoded, t7.totalDecodeTime && (e6.m.update(t7.totalDecodeTime, t7.framesDecoded), e6.zd = 1e3 * t7.totalDecodeTime / t7.framesDecoded);
                      }
                      t7.framesReceived && (e6.O = t7.framesReceived, t7.totalInterFrameDelay && (e6.P = 1e3 * t7.totalInterFrameDelay / (t7.framesReceived - 1))), t7.framesDropped && (e6.I = t7.framesDropped), t7.packetsLost && (e6.N = t7.packetsLost), t7.pliCount && (e6.s = t7.pliCount), e6.R = t7.timestamp;
                    }(e5.g, r4), e5.l = null !== (n5 = r4.framesDecoded) && void 0 !== n5 ? n5 : 0, e5.ta = null !== (s4 = r4.packetsReceived) && void 0 !== s4 ? s4 : 0, async function(e6) {
                      const t7 = { width: screen.width * window.devicePixelRatio, height: screen.height * window.devicePixelRatio }, i6 = { width: screen.width, height: screen.height }, n6 = e6.l, s5 = e6.ua.m;
                      var r5 = e6.oa;
                      if ((r5 = !(t7.width === r5.width && t7.height === r5.height)) || (r5 = e6.ja, r5 = !(i6.width === r5.width && i6.height === r5.height)), r5 || s5 !== e6.ca) {
                        e6.oa = t7, e6.ja = i6, r5 = await Uo(Go), e6.ca = s5;
                        var o4 = `Stream[0]: Client display[-1] resolution : {physical : ${kn(t7)}@${r5}, logical : ${kn(i6)}@${r5}} at frame#${n6} topology: ${s5}`;
                        d.i("{5cea617}", "{810d0ec}", kn(t7), r5, kn(i6), r5, n6, s5), vd(e6.Ba, o4);
                      }
                    }(e5)) : e5.h.bc.Hf++;
                  } else e5.h.bc.af++;
                }(e4, t5);
                var n4, s3, r3, o2, a2, c2, l2, u2, h2, p2 = e4.g, f2 = e4.Ba, v2 = f2.K.paused, m2 = null !== (s3 = null === (n4 = f2.Ea) || void 0 === n4 ? void 0 : n4.paused) && void 0 !== s3 && s3;
                v2 = { tf: v2, rf: m2, yb: n4 = null !== (o2 = null === (r3 = f2.m) || void 0 === r3 ? void 0 : r3.yb()) && void 0 !== o2 && o2, kb: r3 = null !== (c2 = null === (a2 = f2.m) || void 0 === a2 ? void 0 : a2.kb) && void 0 !== c2 && c2, yf: a2 = f2.Da.getMicState(), cd: c2 = f2.s.cd(), keyboardLayout: o2 = f2.keyboardLayout, appLaunchMode: s3 = f2.appLaunchMode, qf: null !== (u2 = f2 = null === (l2 = f2.m) || void 0 === l2 ? void 0 : `${(f2 = l2.h).g.rb ? "local" : "alt"} ${Js(f2) ? "locked" : "unlocked"}`) && void 0 !== u2 ? u2 : "" }, p2.g = v2, function(e5, t6) {
                  var i5, n5 = e5.P.get("candidate-pair");
                  if (n5 = null == n5 ? void 0 : n5.map((e6) => t6.get(e6)).find((e6) => e6)) {
                    6 <= e5.s.length && e5.s.splice(0, 1), e5.s.push(n5);
                    var s4 = null === (i5 = e5.j) || void 0 === i5 ? void 0 : i5.get(n5.id);
                    s4 && function(e6, t7, i6) {
                      var n6, s5, r4, o3;
                      let a3 = null !== (n6 = t7.bytesReceived) && void 0 !== n6 ? n6 : 0;
                      n6 = null !== (s5 = i6.bytesReceived) && void 0 !== s5 ? s5 : 0, (t7 = null !== (r4 = t7.timestamp) && void 0 !== r4 ? r4 : 0) != (i6 = null !== (o3 = i6.timestamp) && void 0 !== o3 ? o3 : 0) && (e6.o = (a3 - n6) / (125 * (t7 - i6)));
                    }(e5.g, n5, s4);
                  }
                }(e4, t5), 0 !== e4.M && Xo(e4.g, 2 === e4.M), u2 = { avgGameFps: null !== (h2 = (p2 = e4.g).avgGameFps) && void 0 !== h2 ? h2 : 0, fps: p2.fps, rtd: p2.rtd, avgDecodeTime: 1e3 * $o(p2.m), frameLoss: p2.s - p2.T, packetLoss: p2.N, totalBandwidth: p2.F, utilizedBandwidth: p2.Ob, streamingResolution: p2.streamingResolution, codec: p2.codec, bitDepth: p2.bitDepth }, p2.T = p2.s, e4.R.emit("StreamStatsUpdate", u2), e4.j = t5, e4.$ = i4 + 1e3;
              }
              for (const [i5, d2] of e4.P.entries()) for (var g2 of (h2 = i5, p2 = d2)) if ((p2 = t5.get(g2)) && "inbound-rtp" === h2) {
                if (u2 = e4.o, "audio" === (p2 = Ma(e4, t5, p2)).kind) u2 = p2, v2 = new ArrayBuffer(ia.size), m2 = new DataView(v2), bn(u2.packetsReceived || 0, m2, 0, true), bn(u2.bytesReceived || 0, m2, 8, true), bn(u2.packetsLost || 0, m2, 16, true), m2.setFloat64(24, u2.lastPacketReceivedTimestamp || 0, true), m2.setFloat64(32, u2.jitter || 0, true), m2.setFloat64(40, dn(ln), true), cn([v2], 2), u2 = new ArrayBuffer(na.size), (v2 = new DataView(u2)).setFloat64(0, p2.audioLevel || 0, true), bn(p2.concealedSamples || 0, v2, 8, true), bn(p2.concealmentEvents || 0, v2, 16, true), bn(p2.insertedSamplesForDeceleration || 0, v2, 24, true), v2.setFloat64(32, p2.jitterBufferDelay || 0, true), bn(p2.jitterBufferEmittedCount || 0, v2, 40, true), bn(p2.removedSamplesForAcceleration || 0, v2, 48, true), bn(p2.silentConcealedSamples || 0, v2, 56, true), v2.setFloat64(64, p2.totalSamplesReceived || 0, true), v2.setFloat64(72, p2.totalSamplesDuration || 0, true), v2.setFloat64(80, dn(ln), true), cn([u2], 4);
                else if (m2 = (v2 = p2).packetsLost || 0, c2 = f2 = v2.framesDecoded || 0, o2 = l2 = v2.totalDecodeTime || 0, s3 = n4 = v2.pliCount || 0, (a2 = m2) >= (r3 = u2).o && (r3.C = a2 - r3.o, r3.o = a2), s3 >= r3.l && (r3.pliCount = s3 - r3.l, r3.l = s3), r3.framesDecoded = c2 - r3.s, 0 < r3.framesDecoded && o2 > r3.m && (r3.v = 1e3 * (o2 - r3.m) / r3.framesDecoded, r3.s = c2, r3.m = o2), r3 = new ArrayBuffer(ta.size), (a2 = new DataView(r3)).setUint32(0, f2, true), a2.setUint32(4, v2.keyFramesDecoded || 0, true), a2.setUint32(8, v2.nackCount || 0, true), a2.setInt32(12, m2, true), a2.setInt32(16, n4, true), bn(v2.bytesReceived || 0, a2, 20, true), bn(v2.packetsReceived || 0, a2, 28, true), a2.setFloat64(36, l2, true), a2.setFloat64(44, v2.totalInterFrameDelay || 0, true), a2.setFloat64(52, v2.totalSquaredInterFrameDelay || 0, true), a2.setFloat64(60, v2.totalAssemblyTime || 0, true), a2.setUint32(68, v2.framesAssembledFromMultiplePackets || 0, true), a2.setFloat64(72, dn(ln), true), cn([r3], 1), u2.sendVideoTrack(p2), p2.perFrameEntries) {
                  for (p2 = JSON.parse(p2.perFrameEntries), v2 = [], m2 = u2.h, f2 = 0; f2 < p2.length; f2++) p2[f2].frameNumber > u2.h && (l2 = new ArrayBuffer(sa.size), (n4 = new DataView(l2)).setUint32(0, p2[f2].frameNumber, true), n4.setFloat64(4, p2[f2].decodeTime, true), n4.setFloat64(12, p2[f2].assemblyTime, true), v2.push(l2)), m2 = Math.max(m2, p2[f2].frameNumber);
                  u2.h = m2, 0 < v2.length && cn(v2, 6);
                }
              }
              (g2 = performance.memory) && (t5 = g2.usedJSHeapSize, p2 = g2.totalJSHeapSize, g2 = t5 - e4.ra, h2 = p2 - e4.qa, e4.ra = t5, e4.qa = p2, 0 <= g2 && 0 <= h2 || (t5 = ln).h && (g2 = { garbageCollectionStats: { timestamp: dn(t5), deltaUsedHeapSize: g2, deltaTotalHeapSize: h2 } }, t5.g && t5.g.postMessage(g2))), t5 = e4.Ba, (g2 = ln).h && (h2 = { inputChannelStats: { timestamp: dn(g2), bufferedAmount: t5.Ja.bufferedAmount, maxSchedulingDelay: t5.s.maxSchedulingDelay } }, g2.g && g2.g.postMessage(h2)), t5.s.maxSchedulingDelay = 0, i4 >= e4.na && e4.Z && (t5 = e4.Z, g2 = new ArrayBuffer(15), (h2 = new DataView(g2)).setUint8(0, 2), h2.setUint8(1, 1), h2.setUint8(2, 1), h2.setUint32(3, t5.Eg, true), h2.setFloat64(7, t5.client, true), Na(e4, g2, "rtpmapping"), e4.Z = void 0, e4.na = i4 + 1e3), "video" === e4.mediaType && (Cn(e4.u) && (t5 = new ArrayBuffer(12), (g2 = new DataView(t5)).setUint8(0, 1), g2.setUint8(1, 1), g2.setUint16(2, e4.o.C, true), g2.setUint16(4, Math.round(e4.o.v), true), g2.setUint16(6, e4.o.framesDecoded, true), g2.setUint16(8, e4.o.pliCount, true), g2.setUint16(10, e4.o.framesDropped, true), Na(e4, t5, "clientperf")), t5 = Zr(e4.L), e4.g.v = t5, g2 = Zr(e4.L), e4.R.emit("StreamingQuality", g2), e4.xa && (t5 = e4.g, e4.R.emit("StreamingStats", { fps: t5.fps, zd: t5.zd, avgDecodeTime: 1e3 * $o(t5.m), Rg: t5.F, Ob: t5.Ob, width: t5.streamingResolution.width, height: t5.streamingResolution.height })), (t5 = ln).h && (g2 = { sq: { latencyScore: g2.latencyScore, bandwidthScore: g2.bandwidthScore, qualityScore: g2.qualityScore, networkLossScore: g2.networkLossScore, timestamp: dn(t5) } }, t5.g && t5.g.postMessage(g2))), i4 >= e4.ka && (t5 = e4.g, d.i("{4155ac9}", "{a02a36e}", t5.C, (1e3 * $o(t5.m)).toFixed(2), t5.I, t5.H.toFixed(2), t5.s, t5.rtd, t5.o.toFixed(2), t5.Ob.toFixed(2)), e4.ka = i4 + 5e3), i4 = performance.now() - i4, (t5 = ln).h && (t5.perf.GetStats += i4), (t5 = e4.g).l.value += i4, t5.l.count += 1, t5.l.max = Math.max(i4, t5.l.max), e4.wa && (e4.mediaType = "video" === e4.mediaType ? "audio" : "video");
            }
            function Pa(e4, t5, i4) {
              e4.G.za(t5, `Exception in ${i4} getStats`, "{5cea617}.ts", 0, 0, true, "getStats");
            }
            function Da(e4) {
              e4.m && (clearInterval(e4.m), e4.m = 0), e4.F && (clearInterval(e4.F), e4.F = 0), ra(e4.o);
            }
            function Oa(e4, t5, i4 = false) {
              e4.g.M.style.display = t5 ? "block" : "none", t5 ? (e4.M = i4 ? 2 : 1, Xo(e4.g, i4), e4.$ = performance.now()) : e4.M = 0;
            }
            function Ma(e4, t5, i4) {
              return e4.aa || (e4 = t5.get(i4.trackId)) && (i4 = Object.assign(e4, i4)), i4;
            }
            function Na(e4, t5, i4) {
              try {
                "open" === e4.O.readyState && e4.O.send(t5);
              } catch (t6) {
                d.e("{5cea617}", "{78e74c5}", t6), Pa(e4, t6, i4);
              }
            }
            function La(e4) {
              if (!(2 > e4.s.length)) {
                var t5 = e4.s[0], i4 = e4.s[e4.s.length - 1];
                e4 = i4.requestsSent - t5.requestsSent + i4.consentRequestsSent - t5.consentRequestsSent;
                var n4 = i4.responsesReceived - t5.responsesReceived;
                return t5 = i4.packetsReceived - t5.packetsReceived, { Mf: isNaN(e4) ? -1 : e4, Nf: isNaN(n4) ? -1 : n4, Lf: isNaN(t5) ? -1 : t5 };
              }
            }
            var xa = class {
              constructor(e4, t5, i4, n4, s3, r3, o2, a2, c2, l2) {
                var u2, h2, p2, f2, v2, m2, g2, A2, S2;
                this.pa = true, this.l = this.ta = this.F = this.m = 0, this.N = "UNKNOWN", this.ga = false, this.P = /* @__PURE__ */ new Map(), this.fa = this.rtd = this.jitter = this.W = 0, this.mediaType = "video", this.qa = this.ra = this.$ = this.M = 0, this.s = [], this.ja = { width: 0, height: 0 }, this.oa = { width: 0, height: 0 }, this.aa = this.T = this.I = false, this.ca = this.ka = this.U = this.na = 0, this.R = e4, this.Ba = t5, this.K = i4, this.C = n4, this.Cc = null !== (h2 = null === (u2 = s3.video) || void 0 === u2 ? void 0 : u2[0].Cc) && void 0 !== h2 && h2, this.maxBitrate = null !== (f2 = null === (p2 = s3.video) || void 0 === p2 ? void 0 : p2[0].Dc) && void 0 !== f2 ? f2 : 0, this.da = null !== (m2 = null === (v2 = s3.video) || void 0 === v2 ? void 0 : v2[0].gd) && void 0 !== m2 ? m2 : 0, this.bitDepth = null !== (A2 = null === (g2 = s3.video) || void 0 === g2 ? void 0 : g2[0].bitDepth) && void 0 !== A2 ? A2 : 8, this.hdr = 1 === (null === (S2 = s3.video) || void 0 === S2 ? void 0 : S2[0].Xc), this.G = r3, this.u = o2, this.ea = a2, this.ua = c2, this.H = { ts: 0, timingFrameInfo: "", targetDelayMs: 0, minPlayoutDelayMs: 0, currentDelayMs: 0 }, this.L = new eo(this.maxBitrate, this.da), this.g = new Yo(i4, this.u, this.ea), this.g.bitDepth = this.bitDepth, this.g.hdr = this.hdr, jt && (this.S = new class {
                  constructor(e5, t6) {
                    this.Z = t6, this.visible = false, this.ec = [], this.M = false, this.da = this.N = 0, this.T = { x: 0, y: 0 }, this.I = 0, this.K = e5, this.j = new class {
                      constructor(e6) {
                        this.active = false, this.m = 0.06, this.l = new DOMRect(0, 0, 0, 0), this.g = [], this.h = [], this.K = e6, this.j = this.v.bind(this);
                      }
                      o() {
                        return this.active;
                      }
                      v(e6) {
                        if (this.g.length) {
                          if (!(this.h.length && 100 > e6.timeStamp - this.h[this.h.length - 1].Ub)) for (this.h.push({ Ub: e6.timeStamp, Ec: performance.now() }); 32 < this.h.length; ) this.h.shift();
                        } else d.w("{0c7ed7c}", "{fe08a50}");
                      }
                    }(e5), this.$ = this.ga.bind(this), this.aa = this.fa.bind(this), this.ca = this.onmousemove.bind(this), t6 = Sa();
                    var i5 = ba("Latency Display Analysis Tool (LDAT)");
                    this.H = wa("Start"), this.h = wa("Show hotkeys"), t6.style.bottom = "0px", t6.style.left = "0px", t6.style.margin = "5px", this.h.style.border = "1px solid white", this.h.style.fontSize = "10px", this.h.style.padding = "5px", this.h.style.position = "absolute", this.h.style.right = "0px", t6.appendChild(i5), t6.appendChild(this.H), t6.appendChild(this.h), i5 = t6.appendChild;
                    var n5 = document.createElement("div"), s4 = this.j.m;
                    this.O = Ca(s4, 0.01, 0.2, 0.01), this.S = document.createElement("span");
                    var r4 = Ea("Activation Level"), o3 = document.createElement("span");
                    for (var a3 of (this.S.innerHTML = (100 * s4).toFixed() + "%", o3.style.paddingRight = "2px", o3.title = "% increase in luminance used to determine whether a flash occurred", o3.innerHTML = "<sup> i </sup>", n5.appendChild(r4), n5.appendChild(o3), n5.appendChild(this.O), n5.appendChild(this.S), i5.call(t6, n5), i5 = t6.appendChild, n5 = document.createElement("div"), this.l = document.createElement("div"), this.ac = ya(), this.s = Ca(20, 5, 100, 5), this.C = Ca(1e3, 500, 5e3, 100), s4 = Ea("Autofire"), r4 = Ea("# Shots"), o3 = Ea("Shot Delay"), this.U = document.createElement("span"), this.W = document.createElement("span"), this.U.innerHTML = this.s.value, this.W.innerHTML = this.C.value + " ms", this.s.id = "shot-count-slider", this.l.appendChild(r4), this.l.appendChild(this.s), this.l.appendChild(this.U), this.l.appendChild(document.createElement("br")), this.l.appendChild(o3), this.l.appendChild(this.C), this.l.appendChild(this.W), n5.appendChild(s4), n5.appendChild(this.ac), n5.appendChild(this.l), i5.call(t6, n5), t6.appendChild(function(e6) {
                      const t7 = document.createElement("div"), i6 = Ea("Loupe Position:"), n6 = Ea("X"), s5 = Ea("Y");
                      n6.style.paddingLeft = "10px", s5.style.paddingLeft = "10px", n6.style.paddingRight = "2px", s5.style.paddingRight = "2px";
                      const r5 = () => {
                        const e7 = document.createElement("input");
                        return e7.type = "number", e7.min = "0", e7.max = "100", e7.step = "1", e7.placeholder = "Int", e7.style.width = "40px", e7;
                      };
                      return e6.Sb = r5(), e6.Tb = r5(), t7.appendChild(i6), t7.appendChild(n6), t7.appendChild(e6.Sb), t7.appendChild(Ea("%")), t7.appendChild(s5), t7.appendChild(e6.Tb), t7.appendChild(Ea("%")), t7;
                    }(this)), this.zb = ya(), (i5 = document.createElement("span")).title = "Simulate mouse move event whenever a mouse click is detected.  Introduces two 300 ms delays between move events and requires a minimum shot delay of 1 sec.", i5.innerHTML = "<sup> i </sup>", t6.appendChild(Ea("Move On Click")), t6.appendChild(i5), t6.appendChild(this.zb), this.L = t6, t6 = Sa(), i5 = ba("Loupe"), this.m = document.createElement("div"), this.m.style.cursor = "move", this.m.style.width = "100%", this.m.style.height = "100%", this.m.innerHTML = "Click here to drag the loupe to the area of the screen where flashes will occur.  Then, press start.", t6.appendChild(i5), t6.appendChild(this.m), this.g = t6, (t6 = Sa()).style.position = "relative", t6.style.backgroundColor = "gray", t6.style.textAlign = "center", t6.innerHTML = "Warning: Must place loupe over video element to activate the LDAT.  Please reposition the loupe and then click start.", this.R = t6, t6 = Sa(), i5 = ba("LDAT Hot Keys"), n5 = document.createElement("ul"), t6.style.bottom = "195px", t6.style.left = "0px", t6.style.margin = "5px", n5.style.listStyle = "none", n5.style.paddingLeft = "2px", n5.style.margin = "5px", ["Enter - Start/Stop", "R - Reset", "A - Turn On/Off Auto-Fire Mode", "S - Save Log File", "C - Center Loupe on Screen"])) (s4 = document.createElement("li")).innerHTML = a3, n5.append(s4);
                    t6.appendChild(i5), t6.appendChild(n5), this.v = t6, (a3 = Sa()).style.bottom = "325px", a3.style.left = "0px", a3.style.margin = "5px", this.F = a3, e5.insertAdjacentElement("afterend", this.L), this.L.insertAdjacentElement("afterend", this.g), this.g.insertAdjacentElement("afterend", this.R), this.L.insertAdjacentElement("beforebegin", this.v), this.v.insertAdjacentElement("beforebegin", this.F), this.j.s = this.ea.bind(this), da(this, false), this.zb.checked = false, ca(this, true);
                  }
                  stop() {
                    this.L.remove(), this.g.remove(), this.R.remove(), this.v.remove(), this.F.remove(), la(this, false), this.ec = [];
                  }
                  reset() {
                    ua(this, false), ha(this.O, 0.06), ha(this.s, 20), ha(this.C, 1e3), da(this, false), this.zb.checked = false, ca(this, true), pa(this, false), this.Sb.value = "", this.Tb.value = "", this.ec = [];
                  }
                  isVisible() {
                    return this.visible;
                  }
                  toggle() {
                    ua(this, !this.o());
                  }
                  o() {
                    return this.j.o();
                  }
                  Db() {
                    return !this.isVisible() || this.o();
                  }
                  fa(e5) {
                    if (this.zb.checked && this.o() && !e5.gf) {
                      const t6 = (e6, t7) => {
                        switch (e6) {
                          case 0:
                            this.K.dispatchEvent(new PointerEvent("pointerup", t7)), this.K.dispatchEvent(new MouseEvent("mouseup", t7));
                            break;
                          case 1:
                            e6 = new PointerEvent("pointerdown", t7), t7 = new MouseEvent("mousedown", t7), e6.gf = true, t7.gf = true, this.K.dispatchEvent(e6), this.K.dispatchEvent(t7);
                            break;
                          case 2:
                            this.K.dispatchEvent(new PointerEvent("pointerrawupdate", t7)), this.K.dispatchEvent(new PointerEvent("pointermove", t7)), this.K.dispatchEvent(new MouseEvent("mousemove", t7));
                        }
                      }, i5 = { button: 2, isPrimary: true, pointerId: 1 }, n5 = { clientX: (Math.max(e5.clientX, 0) || this.T.x) + 64, clientY: Math.max(e5.clientY, 0) || this.T.y, movementX: 64, isPrimary: true };
                      t6(1, i5), window.setTimeout(() => {
                        t6(2, n5), window.setTimeout(() => {
                          n5.clientX -= 64, n5.movementX = -64, t6(2, n5), window.setTimeout(() => t6(0, i5), 300);
                        }, 300);
                      }, 300);
                    }
                  }
                  onmousemove(e5) {
                    this.T = { x: e5.clientX, y: e5.clientY };
                  }
                  P() {
                    var e5 = this.K.getBoundingClientRect();
                    const t6 = this.g.getBoundingClientRect();
                    if (this.K.style.paddingTop || this.K.style.paddingRight || this.K.style.paddingBottom || this.K.style.paddingLeft) {
                      const { paddingTop: t7, paddingRight: i5, paddingBottom: n5, paddingLeft: s4 } = Ta(this.K);
                      e5.x += s4, e5.y += t7, e5.width -= s4 + i5, e5.height -= t7 + n5;
                    }
                    t6.x = (t6.x - e5.x) / e5.width, t6.y = (t6.y - e5.y) / e5.height, t6.width /= e5.width, t6.height /= e5.height, e5 = this.j, 0 >= t6.width || 0 >= t6.height ? d.e("{0c7ed7c}", "{3e0eb8f}", t6.width, t6.height) : e5.l = t6;
                  }
                  ga() {
                    this.P();
                  }
                  ea(e5) {
                    va(this), this.ec.push(e5);
                    const t6 = ga(e5), i5 = t6.total.toFixed(), n5 = `Flash occurred at frame ${e5.presentedFrames}. Latency: ${i5} ms.`;
                    d.i("{50c79eb}", "{78905f8}", e5.presentedFrames, i5), d.d("{50c79eb}", "{d3d4a0c}", i5, t6.pf.toFixed(), t6.Tf.toFixed(), t6.Xe.toFixed(), t6.decode.toFixed(), t6.Pf.toFixed()), this.F.innerHTML = n5, this.F.style.display = "block", this.I = window.setTimeout(() => {
                      ma(this), this.I = 0;
                    }, 5e3);
                  }
                }(i4, c2)), this.C = n4, function(e5) {
                  e5.O = e5.C.createDataChannel("stats_channel", { ordered: false, reliable: false, maxRetransmits: 0 }), e5.O.binaryType = "arraybuffer", fd(e5.Ba, e5.O, { open: () => {
                    e5.U = 1;
                  }, close: () => {
                    Da(e5), e5.U = 2;
                  } }), e5.O.onmessage = (t6) => {
                    var i5 = (t6 = new DataView(t6.data)).getUint8(0);
                    if (2 <= i5) {
                      if (e5.W = t6.getFloat64(1, true) / 1e6, e5.jitter = 1e3 * t6.getFloat64(9, true), e5.rtd = t6.getFloat64(17, true), e5.g.H = e5.jitter, e5.g.rtd = e5.rtd, 3 <= i5 && (e5.fa = t6.getFloat64(25, true), e5.g.avgGameFps = e5.fa, 4 <= i5)) {
                        i5 = t6.getFloat32(33, true);
                        var n5 = t6.getFloat32(37, true), s4 = t6.getFloat32(41, true);
                        let e6 = t6.getFloat32(45, true), r4 = t6.getFloat32(49, true), o3 = t6.getFloat32(53, true), a3 = t6.getFloat32(57, true), c3 = t6.getFloat32(61, true), l3 = t6.getFloat32(65, true);
                        t6 = t6.getFloat32(69, true), d.d("{5cea617}", "{9721183}", i5, n5, s4, e6, r4, o3, a3, c3, l3, t6);
                      }
                      t6 = e5.L, i5 = e5.W, n5 = e5.g, (s4 = e5.W) && n5.o <= s4 && (n5.Ob = n5.o / s4 * 100), n5.F = s4, s4 = 100, 25 <= n5.Ob && (s4 = (i5 - t6.g) / (t6.maxBitrate - t6.g) * 100), 100 < s4 && (s4 = 100), void 0 === s4 || isNaN(s4) || 0 > s4 || (t6.bandwidthScore = 15 * t6.bandwidthScore / 16 + s4 / 16, t6.bandwidthScore = Math.min(t6.bandwidthScore, 100)), t6 = e5.L, n5 = 0, 250 > (i5 = e5.rtd) && (void 0 === (n5 = 100 * (250 - i5) / 240) || isNaN(n5)) && (n5 = 0), t6.latencyScore = 15 * t6.latencyScore / 16 + n5 / 16, t6.latencyScore = Math.min(t6.latencyScore, 100);
                    } else d.e("{5cea617}", "{4f9f4b7}", i5);
                  };
                }(this), this.xa = this.R.hasListener("StreamingStats"), this.o = new class {
                  constructor() {
                    this.j = this.framesDropped = this.l = this.pliCount = this.framesDecoded = this.m = this.s = this.o = this.v = this.C = 0, this.g = [], this.h = -1;
                  }
                  sendVideoTrack(e5) {
                    const t6 = e5.framesDropped || 0;
                    t6 >= this.j && (this.framesDropped = t6 - this.j, this.j = t6);
                    const i5 = new ArrayBuffer(44), n5 = new DataView(i5);
                    n5.setUint32(0, e5.framesDecoded || 0, true), n5.setUint32(4, t6, true), n5.setUint32(8, e5.frameHeight || 0, true), n5.setUint32(12, e5.frameWidth || 0, true), n5.setUint32(16, e5.framesReceived || 0, true), n5.setFloat64(20, e5.jitterBufferDelay || 0, true), bn(e5.jitterBufferEmittedCount || 0, n5, 28, true), n5.setFloat64(36, dn(ln), true), cn([i5], 3);
                  }
                }(), this.h = { bc: { af: 0, Hf: 0, Zf: 0 }, cc: "", zc: -1 }, this.v = { Ag: 0, droppedVideoFrames: 0, totalVideoFrames: 0 }, this.va = i4, this.V = l2, this.sa = this.ya.bind(this), Ra(this);
              }
              ya(e4, t5) {
                var i4, n4, s3, r3, o2, a2 = this.o, c2 = null !== (r3 = t5.receiveTime) && void 0 !== r3 ? r3 : 0;
                r3 = t5.presentationTime - c2, c2 = 1e3 * (null !== (o2 = t5.processingDuration) && void 0 !== o2 ? o2 : 0), o2 = void 0 !== (o2 = t5.presentationTime) ? o2 - ln.j : 0;
                const l2 = new ArrayBuffer(12), u2 = new DataView(l2);
                u2.setFloat64(0, o2, true), u2.setUint16(8, Math.min(100 * r3, 65535), true), u2.setUint16(10, Math.min(100 * c2, 65535), true), a2.g.push(l2), 120 == a2.g.length && ra(a2), null !== (i4 = this.S) && void 0 !== i4 && i4.o() && function(e5, t6, i5) {
                  e5.g.push({ presentedFrames: i5.presentedFrames, td: t6, presentationTime: i5.presentationTime, receiveTime: i5.receiveTime, processingDuration: i5.processingDuration }), t6 = oa(e5, e5.l), function(e6, t7, i6, n5, s4) {
                    return new Promise((r4, o3) => {
                      window.setTimeout(() => {
                        e: if (0 >= n5 || 0 >= s4) var a3 = -1;
                        else {
                          var c3 = new OffscreenCanvas(n5, s4).getContext("2d");
                          if (c3) {
                            try {
                              c3.drawImage(e6, t7, i6, n5, s4, 0, 0, n5, s4), a3 = c3.getImageData(0, 0, n5, s4).data;
                            } catch (e7) {
                              d.e("{0c7ed7c}", "{b16b792}", e7), a3 = -1;
                              break e;
                            }
                            var l3 = c3 = 0;
                            for (let e7 = 0; e7 < a3.length - 3; e7 += 4) c3 += 0.2126 * a3[e7] + 0.7152 * a3[e7 + 1] + 0.0722 * a3[e7 + 2], l3++;
                            a3 = c3 / l3 / 255;
                          } else d.e("{0c7ed7c}", "{b72639c}"), a3 = -1;
                        }
                        -1 === a3 && o3(-1), r4(a3);
                      }, 0);
                    });
                  }(e5.K, t6.x, t6.y, t6.width, t6.height).then((t7) => {
                    var n5, s4 = i5.presentedFrames;
                    if (e5.g.length) {
                      var r4 = e5.g[e5.g.length - 1];
                      if (s4 !== r4.presentedFrames) d.d("{0c7ed7c}", "{06323ea}", s4);
                      else {
                        for (r4.fd = t7; 32 < e5.g.length; ) e5.g.shift();
                        if (1 != e5.g.length && !((t7 = e5.g[e5.g.length - 2]).presentedFrames < s4 - 2 || void 0 === t7.fd || -1 === t7.fd) && r4.fd - t7.fd > e5.m) {
                          let i6;
                          t7 = 0;
                          const o3 = { presentedFrames: s4, td: r4.td, presentationTime: r4.presentationTime, receiveTime: r4.receiveTime, processingDuration: r4.processingDuration, Ub: 0, Ec: 0 };
                          for (; e5.h.length && e5.h[0].Ub < (null !== (n5 = r4.receiveTime) && void 0 !== n5 ? n5 : r4.presentationTime); ) t7++, i6 = e5.h.shift();
                          i6 && (1 < t7 && d.d("{0c7ed7c}", "{a4b8c55}", s4, t7), o3.Ub = i6.Ub, o3.Ec = i6.Ec, e5.s && e5.s(o3));
                        }
                      }
                    }
                  });
                }(this.S.j, e4, t5), this.Cc && t5.rtpTimestamp && t5.receiveTime && (this.Z = { Eg: t5.rtpTimestamp, client: t5.receiveTime - ln.j }), 0 != this.m && (null === (s3 = (n4 = this.K).requestVideoFrameCallback) || void 0 === s3 || s3.call(n4, this.sa));
              }
              reset() {
                Da(this), this.L = new eo(this.maxBitrate, this.da), this.g = new Yo(this.K, this.u, this.ea), this.j = void 0;
              }
              stop() {
                var e4;
                this.pa && (this.pa = false, 0 != this.m && (this.reset(), Oa(this, false)), null === (e4 = this.S) || void 0 === e4 || e4.stop(), Eo(this.G, "InboundVideoStats", this.h.cc, this.h.bc.Zf, this.h.bc.af, this.h.zc, this.h.bc.Hf));
              }
              toggleOnScreenStats(e4, t5) {
                Oa(this, null != t5 ? t5 : 0 === this.M, e4);
              }
              packetsReceived() {
                return this.ta;
              }
            };
            function Fa(e4) {
              return "tcp" === e4.protocol ? "TCP" : (e4 = e4.address || e4.relatedAddress) ? e4.endsWith(".local") ? "MDNS" : -1 !== e4.indexOf(":") ? "IPV6" : "IPV4" : "UNKNOWN";
            }
            function _a(e4) {
              var t5 = null == (e4 = e4.address || e4.relatedAddress) ? void 0 : e4.split(".");
              if (4 === (null == t5 ? void 0 : t5.length) && (e4 = parseInt(t5[0]), t5 = parseInt(t5[1]), !isNaN(e4) && !isNaN(t5))) {
                let i4 = "UNKNOWN";
                return 10 === e4 ? i4 = "10/8" : 192 === e4 && 168 === t5 ? i4 = "192.168/16" : 172 === e4 && 16 == (240 & t5) && (i4 = "172.16/12"), "UNKNOWN" !== i4 && d.d("{5cea617}", "{343589d}", i4), i4;
              }
              return d.i("{5cea617}", "{fa2d6b9}"), "UNKNOWN";
            }
            function Ua(e4, t5 = false) {
              const i4 = e4.m + 1;
              try {
                let n4;
                e4.sessionId && (n4 = "x-nv-sessionid." + e4.sessionId);
                let s3 = e4.url;
                t5 && (s3 += "&reconnect=1");
                let r3 = new WebSocket(s3, n4);
                r3.onopen = () => {
                  var t6;
                  if (e4.h("{48fa30b}" + i4), r3 === e4.g) {
                    null === (t6 = e4.j) || void 0 === t6 || ld(t6);
                    for (const t7 of e4.l) t7.stats ? r3.send(t7.stats) : r3.send(JSON.stringify(t7));
                    for (const t7 of e4.s) Va(e4, t7);
                    e4.s = [];
                  }
                }, r3.onclose = (t6) => {
                  var n5;
                  e4.h("{6406bff}" + i4), r3 === e4.g && (null === (n5 = e4.j) || void 0 === n5 || dd(n5, { error: e4.v, code: t6.code, reason: t6.reason, wasClean: t6.wasClean }), Ga(e4), e4.v = false);
                }, r3.onerror = () => {
                  e4.h("{7605058}" + i4), r3 === e4.g && (e4.v = true);
                }, r3.onmessage = (t6) => {
                  if (e4.j) try {
                    let n5 = JSON.parse(t6.data);
                    if (e4.o || e4.h("{523f5b9}"), Ba(e4), !n5.hb) {
                      if (void 0 !== n5.ack) {
                        var i5 = n5.ack;
                        for (let t7 = e4.l.length - 1; 0 <= t7; t7--) e4.l[t7].ackid <= i5 && e4.l.splice(t7, 1);
                      }
                      if (void 0 !== n5.ackid) {
                        if (e4.maxReceivedAckId < n5.ackid && (cd(e4.j, n5), e4.maxReceivedAckId = n5.ackid), e4.g) {
                          let t7 = JSON.stringify({ ack: e4.maxReceivedAckId });
                          e4.h("{903be10}" + t7), e4.g.send(t7);
                        }
                      } else void 0 === n5.ack && cd(e4.j, n5);
                    }
                  } catch (i6) {
                    e4.C("Error in local websocket message handling: " + i6 + ' "' + t6.data + '"');
                  }
                }, e4.g = r3;
              } catch (t6) {
                e4.g = void 0, e4.C("WebSocket creation exception: " + t6 + " for socket " + e4.m);
              }
              e4.m = i4;
            }
            function ja(e4) {
              0 !== e4.o && (self.clearTimeout(e4.o), e4.o = 0);
            }
            function Ga(e4) {
              e4.g && (e4.g.onclose = null, e4.g.onerror = null, e4.g.onmessage = null, e4.g.onopen = null, e4.g = void 0);
            }
            function Ba(e4) {
              ja(e4), e4.o = self.setTimeout(() => {
                var t5;
                e4.h("{6c3505a}" + (null === (t5 = e4.g) || void 0 === t5 ? void 0 : t5.readyState) + "{754f60b}" + e4.m), e4.g || Ua(e4, true), Ba(e4);
              }, 3e3);
            }
            function Va(e4, t5) {
              void 0 !== t5.ackid && void 0 !== t5.ackid && e4.l.push(t5), e4.g && (t5.stats ? e4.g.send(t5.stats) : e4.g.send(JSON.stringify(t5)));
            }
            var Ha = class {
              constructor(e4, t5) {
                this.sessionId = e4, this.v = false, this.l = [], this.s = [], this.maxReceivedAckId = this.o = 0, this.url = "", this.m = 0, this.h = t5.info, this.C = t5.exception;
              }
              initialize(e4, t5, i4, n4 = false) {
                this.url = e4, this.maxReceivedAckId = t5, this.j = i4, Ua(this, n4), this.h("{fcf6f89}" + this.m);
              }
              uninitialize(e4) {
                var t5;
                this.maxReceivedAckId = 0, this.l = [], this.s = [], this.j = void 0, ja(this), null === (t5 = this.g) || void 0 === t5 || t5.close(e4), Ga(this), this.h("{986b258}" + e4 + "{754f60b}" + this.m);
              }
              send(e4) {
                this.j && (this.g || Ua(this, true), this.g && this.g.readyState === WebSocket.OPEN ? Va(this, e4) : this.s.push(e4));
              }
            };
            function Wa(e4) {
              switch (e4) {
                case "H264":
                  return "h264";
                case "H265":
                  return "hevc";
                case "AV1":
                  return "av1";
                default:
                  return "video";
              }
            }
            var za = class {
              constructor(e4, t5) {
                this.g = e4, this.h = t5, this.streams = [];
              }
              start(e4) {
                if (1 & this.g.xd && (e4 = e4.getTransceivers().find((e5) => {
                  var t5, i4;
                  return "video" === (null === (i4 = null === (t5 = e5.receiver) || void 0 === t5 ? void 0 : t5.track) || void 0 === i4 ? void 0 : i4.kind);
                }))) {
                  const t5 = { data: new DataView(new ArrayBuffer(209715200)), size: 0, Pd: "video", lg: Wa(this.h), sf: false };
                  !function(e5, t6, i4) {
                    const { readable: n4, writable: s3 } = t6.createEncodedStreams();
                    t6 = new TransformStream({ start: () => {
                      d.i("{d7392d2}", "{b96b3ec}", i4.Pd);
                    }, flush: () => {
                    }, transform: (e6, t7) => {
                      if (!i4.sf) {
                        const t8 = new Uint8Array(e6.data);
                        if (i4.size + t8.byteLength <= i4.data.byteLength) {
                          var n5 = i4.data, s4 = i4.size, r3 = t8;
                          const e7 = r3.byteLength;
                          for (let t9 = 0; t9 < e7; ++t9) n5.setUint8(s4 + t9, r3[t9]);
                          i4.size += t8.byteLength;
                        } else i4.sf = true, d.w("{d7392d2}", "{f35b2f4}", i4.size, i4.Pd);
                      }
                      t7.enqueue(e6);
                    } }), n4.pipeThrough(t6).pipeTo(s3), e5.streams.push(i4);
                  }(this, e4.receiver, t5);
                }
              }
            };
            function Ka(e4) {
              e4.g && (e4.j = !e4.j, e4.g.style.display = e4.j ? "block" : "none");
            }
            var qa = class {
              constructor(e4, t5, i4, n4) {
                this.l = e4, this.K = t5, this.u = i4, this.G = n4, this.h = { top: -1, left: -1, bottom: -1, right: -1 }, this.Xa = this.Ra = 0, this.j = false, this.m = 0, jt && ((e4 = document.createElement("div")).style.display = "none", e4.style.position = "absolute", e4.style.color = "white", e4.style.backgroundColor = "rgb(105, 105, 105, 0.7)", e4.style.padding = "2px", e4.style.bottom = "0px", e4.style.left = "0px", e4.style.margin = "5px", this.g = e4, t5.insertAdjacentElement("afterend", this.g));
              }
              uninitialize() {
                this.g && this.g.remove();
              }
              send() {
                var e4, t5, i4;
                if (!(0 >= this.K.videoHeight || 0 >= this.K.videoWidth)) {
                  var n4 = vn(), s3 = function(e5, t6) {
                    let { width: i5, height: n5 } = { width: screen.width, height: screen.height };
                    var s4 = () => {
                      let e6;
                      switch (void 0 !== window.orientation ? e6 = window.orientation : screen.orientation && (e6 = screen.orientation.angle), e6) {
                        case 90:
                        case -90:
                        case 270:
                          return false;
                        default:
                          return true;
                      }
                    };
                    v(e5.u) && (t6.top = Math.max(t6.top, 20), s4() || (s4 = i5, i5 = n5, n5 = s4)), s4 = ((t7) => {
                      let i6 = t7.offsetTop, n6 = t7.offsetLeft;
                      for (var s5 = t7.offsetParent; s5; ) i6 += s5.offsetTop, n6 += s5.offsetLeft, s5 = s5.offsetParent;
                      s5 = t7.clientHeight;
                      let r5 = t7.clientWidth;
                      return "Android" === e5.u.os && (window.innerHeight > window.innerWidth && t7.clientHeight < t7.clientWidth || window.innerHeight < window.innerWidth && t7.clientHeight > t7.clientWidth) && (d.w("{48f82fd}", "{c9d343e}"), s5 = t7.clientWidth, r5 = t7.clientHeight), { top: i6, left: n6, bottom: Math.max(window.innerHeight - i6 - s5, 0), right: Math.max(window.innerWidth - n6 - r5, 0) };
                    })(e5.K);
                    const r4 = Math.max(n5 - window.innerHeight, 0) / 2, o2 = Math.max(i5 - window.innerWidth, 0) / 2;
                    return { top: Math.max(t6.top - r4 - s4.top - e5.Ra, 0) / (e5.K.clientHeight - 2 * e5.Ra), left: Math.max(t6.left - o2 - s4.left - e5.Xa, 0) / (e5.K.clientWidth - 2 * e5.Xa), bottom: Math.max(t6.bottom - r4 - s4.bottom - e5.Ra, 0) / (e5.K.clientHeight - 2 * e5.Ra), right: Math.max(t6.right - o2 - s4.right - e5.Xa, 0) / (e5.K.clientWidth - 2 * e5.Xa) };
                  }(this, n4);
                  if (!function(e5, t6) {
                    const i5 = Object.keys(e5), n5 = Object.keys(t6);
                    if (i5.length !== n5.length) return false;
                    for (const n6 of i5) if (e5[n6] !== t6[n6]) return false;
                    return true;
                  }(s3, this.h)) {
                    var r3 = JSON.stringify(s3, (e5, t6) => t6.toFixed ? Number(t6.toFixed(2)) : t6);
                    d.d("{48f82fd}", "{054b8b0}", JSON.stringify(n4), r3), null !== (e4 = Ci.sendInsetValueUpdateEvents) && void 0 !== e4 && e4 && 2 > this.m++ && (n4 = (e4 = (e5, t6 = 1) => {
                      for (const i5 of Object.keys(e5)) {
                        const n5 = Math.round(e5[i5] * t6);
                        e5[i5] = isNaN(n5) ? -1 : n5;
                      }
                      return e5;
                    })(Object.assign({}, n4)), e4 = e4(Object.assign({}, s3), 1e3), null === (t5 = this.G) || void 0 === t5 || Eo(t5, "InsetValueUpdate", "Original", n4.top, n4.left, n4.bottom, n4.right), null === (i4 = this.G) || void 0 === i4 || Eo(i4, "InsetValueUpdate", "Normalized", e4.top, e4.left, e4.bottom, e4.right)), this.h = Object.assign({}, s3);
                    for (const e5 of Object.keys(s3)) s3[e5] = isNaN(s3[e5]) ? 0 : s3[e5];
                    t5 = { messageType: "SAFE_ZONE", messageRecipient: "NvGridSvc:NGS", data: JSON.stringify({ safeZoneData: { type: "InsetValueUpdate", rect: s3 } }) }, this.l.sendCustomMessage(t5), jt && this.g && (this.g.innerText = "Safe Zone: \nTop: " + (100 * Math.max(this.h.top, 0)).toFixed() + "%\nRight: " + (100 * Math.max(this.h.right, 0)).toFixed() + "%\nBottom: " + (100 * Math.max(this.h.bottom, 0)).toFixed() + "%\nLeft: " + (100 * Math.max(this.h.left, 0)).toFixed() + "%");
                  }
                }
              }
            };
            function $a(e4, t5, i4) {
              e4.g.get(t5).push(i4);
            }
            function Ja(e4, t5, i4) {
              -1 !== (i4 = (e4 = e4.g.get(t5)).indexOf(i4)) && e4.splice(i4, 1);
            }
            function Xa(e4, t5) {
              if (e4.U && id(e4, t5), e4.h !== t5) {
                e4.h = t5;
                for (const i4 of e4.g.get(0)) i4(t5);
              }
            }
            function Qa(e4, t5) {
              if (e4.C !== t5) {
                e4.C = t5;
                for (const i4 of e4.g.get(3)) i4(t5);
              }
            }
            function Ya(e4, t5) {
              if (e4.s !== t5) {
                e4.s = t5;
                for (const i4 of e4.g.get(4)) i4(t5);
              }
            }
            function Za(e4, t5) {
              return e4.T ? 0.22 >= t5.level : e4.Z ? 0.2 >= t5.level : e4.W ? 0.1 >= t5.level : 0.33 >= t5.level;
            }
            function ed() {
              var e4, t5;
              return Zi && null !== (e4 = Ci.enableComputePressure) && void 0 !== e4 && e4 && (null === (t5 = globalThis.PressureObserver) || void 0 === t5 ? void 0 : t5.prototype) && PressureObserver.knownSources instanceof Array && PressureObserver.knownSources.includes("cpu");
            }
            function td(e4) {
              switch (e4) {
                case "nominal":
                default:
                  return 0;
                case "fair":
                  return 1;
                case "serious":
                  return 2;
                case "critical":
                  return 3;
              }
            }
            function id(e4, t5) {
              if (e4.v !== t5) {
                e4.v = t5;
                for (const i4 of e4.g.get(1)) i4(t5);
              }
            }
            var nd = class {
              constructor(e4) {
                var t5, i4, n4, s3;
                this.g = /* @__PURE__ */ new Map(), this.C = this.s = this.j = false, this.o = "nominal", this.U = "PHONE" === e4.deviceType || "TABLET" === e4.deviceType, this.Z = A(e4), this.W = "iPadOS" === e4.os, this.T = y(e4), this.h = this.v = document.hasFocus(), this.m = 0;
                const r3 = null !== (i4 = null === (t5 = null == (e4 = window.zoneless) ? void 0 : e4.windowAddEventListener) || void 0 === t5 ? void 0 : t5.bind(window)) && void 0 !== i4 ? i4 : window.addEventListener.bind(window), o2 = null !== (s3 = null === (n4 = null == e4 ? void 0 : e4.documentAddEventListener) || void 0 === n4 ? void 0 : n4.bind(document)) && void 0 !== s3 ? s3 : document.addEventListener.bind(document);
                this.N = this.da.bind(this), this.I = this.aa.bind(this), this.O = this.F.bind(this), this.P = this.ea.bind(this), this.R = this.fa.bind(this), this.L = this.ca.bind(this), this.H = this.$.bind(this), this.M = this.S.bind(this), r3("focus", this.N), r3("blur", this.I), ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "msfullscreenchange"].forEach((e5) => o2(e5, this.O)), o2("mouseenter", this.P), o2("mouseleave", this.R), navigator.getBattery && navigator.getBattery().then((e5) => {
                  Qa(this, !e5.charging), Ya(this, Za(this, e5)), e5.addEventListener("chargingchange", this.L), e5.addEventListener("levelchange", this.H);
                }), void 0 !== window.screen.isExtended && (this.S(), window.screen.addEventListener("change", this.M)), ed() ? (this.l = new PressureObserver((e5) => {
                  if (0 < e5.length) {
                    let t6 = "nominal";
                    for (const i5 of e5) td(i5.state) > td(t6) && (t6 = i5.state);
                    if (e5 = t6, this.o != e5) {
                      this.o = e5;
                      for (const e6 of this.g.get(5)) e6();
                    }
                  }
                }), this.l.observe("cpu")) : d.i("{0c4eeb2}", "{c70b747}"), this.g.set(0, []), this.g.set(2, []), this.g.set(1, []), this.g.set(3, []), this.g.set(4, []), this.g.set(5, []), this.F();
              }
              uninitialize() {
                var e4, t5, i4, n4, s3, r3, o2;
                const a2 = window.zoneless, c2 = null !== (t5 = null === (e4 = null == a2 ? void 0 : a2.windowRemoveEventListener) || void 0 === e4 ? void 0 : e4.bind(window)) && void 0 !== t5 ? t5 : window.removeEventListener.bind(window), l2 = null !== (n4 = null === (i4 = null == a2 ? void 0 : a2.documentRemoveEventListener) || void 0 === i4 ? void 0 : i4.bind(document)) && void 0 !== n4 ? n4 : document.removeEventListener.bind(document);
                c2("focus", this.N), c2("blur", this.I), ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "msfullscreenchange"].forEach((e5) => l2(e5, this.O)), l2("mouseenter", this.P), l2("mouseleave", this.R), navigator.getBattery && navigator.getBattery().then((e5) => {
                  e5.removeEventListener("chargingchange", this.L), e5.removeEventListener("levelchange", this.H);
                }), void 0 !== window.screen.isExtended && window.screen.removeEventListener("change", this.M), null == (e4 = null === (s3 = this.l) || void 0 === s3 ? void 0 : s3.takeRecords()) || e4.map((e5) => d.i("{0c4eeb2}", "{4f27ba0}", JSON.stringify(e5))), null === (r3 = this.l) || void 0 === r3 || r3.unobserve("cpu"), null === (o2 = this.l) || void 0 === o2 || o2.disconnect();
                for (const e5 of this.g.values()) e5.splice(0);
              }
              da() {
                Xa(this, true);
              }
              aa() {
                Xa(this, false);
              }
              F() {
                var e4 = window.document;
                if (e4 = !!(document.fullscreen || 1 == e4.webkitIsFullScreen || e4.mozFullScreen || e4.msFullscreenElement), this.j !== e4) {
                  this.j = e4;
                  for (const t5 of this.g.get(2)) t5(e4);
                }
              }
              ea() {
                id(this, true);
              }
              fa() {
                id(this, false);
              }
              ca() {
                navigator.getBattery().then((e4) => {
                  Qa(this, !e4.charging);
                });
              }
              $() {
                navigator.getBattery().then((e4) => {
                  Ya(this, Za(this, e4));
                });
              }
              S() {
                this.m = window.screen.isExtended ? 3 : 0, d.i("{0c4eeb2}", "{ee99c72}", this.m);
              }
            };
            function sd(e4) {
              return e4.split("\nm=").map((e5, t5) => (0 < t5 ? "m=" + e5 : e5).trim() + "\r\n");
            }
            function rd(e4, t5) {
              return function(e5) {
                return e5.trim().split("\n").map((e6) => e6.trim());
              }(e4).filter((e5) => 0 === e5.indexOf(t5));
            }
            function od(e4) {
              return { algorithm: (e4 = e4.substr(14).split(" "))[0].toLowerCase(), value: e4[1].toUpperCase() };
            }
            function ad(e4, t5, i4, n4) {
              let s3 = e4.split("\r\n"), r3 = -1;
              for (let e5 = 0; e5 < s3.length; e5++) if (0 === s3[e5].indexOf("m=video")) {
                r3 = e5;
                break;
              }
              if (-1 === r3) return d.e("{93c7910}", "{e0899ab}", "video"), e4;
              for (d.d("{93c7910}", "{5cc346f}", "video", r3), r3++, e4 = ";x-google-max-bitrate=" + i4 + ";x-google-min-bitrate=" + t5 + ";x-google-start-bitrate=" + n4, t5 = /* @__PURE__ */ new Set(); r3 < s3.length && 0 !== s3[r3].indexOf("m="); ) 0 === (i4 = s3[r3]).indexOf("a=rtpmap:") && 0 < i4.indexOf("H264/") ? t5.add(i4.slice(9, i4.indexOf(" "))) : 0 === i4.indexOf("a=fmtp:") && t5.has(i4.slice(7, i4.indexOf(" "))) && (s3[r3] += e4), r3++;
              return s3.join("\r\n");
            }
            function dd(e4, t5) {
              var i4, n4, s3, r3;
              if (t5.error && 0 !== e4.C) {
                var o2 = e4.G, a2 = null !== (i4 = t5.code) && void 0 !== i4 ? i4 : 0;
                i4 = null !== (s3 = null === (n4 = e4.session) || void 0 === n4 ? void 0 : n4.signalConnectionInfo.ip) && void 0 !== s3 ? s3 : "", n4 = null !== (r3 = t5.reason) && void 0 !== r3 ? r3 : "", r3 = new Ge({ retryCount: e4.ta, sessionId: o2.sessionId, subSessionId: o2.subSessionId, serverId: i4, url: e4.M, overrideConfigType: Ii.type, overrideConfigVersion: Ii.version, disconnectionReason: n4, cleanDisconnection: Tn(t5.wasClean), networkType: _(bo.getCurrentNetworkType()), statusCode: a2 ? a2.toString() : "", cmsId: String(o2.cmsId), moduleName: "RAGNAROK" }), o2.h(r3), e4.ta++, 3 >= e4.ta ? (gd(e4), Cd(e4)) : (window.clearTimeout(e4.C), e4.C = 0, d.i("{93c7910}", "{8595cb4}"), Ad(e4, { code: 3237093890 }));
              }
              t5.wasClean || e4.xa++;
            }
            function cd(e4, t5) {
              var i4;
              d.i("{93c7910}", "{39024c3}", zd(JSON.stringify(t5))), t5.ackid && e4.maxReceivedAckId < t5.ackid && (e4.maxReceivedAckId = t5.ackid), t5.peer_info ? t5.peer_info.name !== e4.name && 0 !== e4.id || (e4.id = t5.peer_info.id, d.d("{93c7910}", "{c5faf27}", e4.id)) : t5.peer_msg ? async function(e5, t6, i5) {
                var n4;
                d.d("{93c7910}", "{9978507}", t6);
                try {
                  const s3 = JSON.parse(i5);
                  if ("offer" === s3.type) {
                    e5.Sa = true;
                    let i6, r3 = s3.sdp || "";
                    d.d("{93c7910}", "{ca9a155}", zd(r3));
                    const o2 = await e5.pc;
                    if (e5.W = function(e6, t7) {
                      e6 = e6.split("\r\n");
                      var i7 = -1;
                      if (!t7.length) return "H264";
                      for (var n5 = 0; n5 < e6.length; n5++) if (e6[n5].startsWith("m=video")) {
                        i7 = n5;
                        break;
                      }
                      if (-1 === i7) return d.e("{93c7910}", "{3ab33e3}"), "H264";
                      for (i7 += 1, n5 = /* @__PURE__ */ new Set(); i7 < e6.length && !e6[i7].startsWith("m="); ) {
                        var s4 = e6[i7];
                        0 === s4.indexOf("a=rtpmap:") && ("H264" !== (s4 = s4.slice(s4.indexOf(" ") + 1, s4.indexOf("/"))) && "H265" !== s4 && "AV1" !== s4 || n5.add(s4)), i7++;
                      }
                      for (const e7 of t7) if (n5.has(e7)) return d.i("{93c7910}", "{304c3b1}", e7), e7;
                      return d.i("{93c7910}", "{81357e4}"), "H264";
                    }(r3, o2), s3.nvstSdp) {
                      const t7 = null !== (n4 = s3.nvstServerOverrides) && void 0 !== n4 ? n4 : "";
                      if (i6 = function(e6, t8, i7) {
                        var n5, s4 = e6.v, r4 = e6.u, o3 = e6.W;
                        if (t8 = function(e7) {
                          let t9, i8, n6 = { origin: "", time: "", ob: /* @__PURE__ */ new Map(), media: [] }, s5 = /* @__PURE__ */ new Map(), r5 = false;
                          const o4 = () => {
                            if (r5) {
                              if (!i8 || !t9) return d.e("{eb7c2d0}", "{adc37a7}"), false;
                              n6.media.push({ mediaType: i8, Fc: t9, attributes: s5 }), t9 = i8 = void 0;
                            } else n6.ob = s5, r5 = true;
                            return s5 = /* @__PURE__ */ new Map(), true;
                          };
                          for (const c3 of e7.split(/\r?\n/)) if (!(2 > c3.length || "=" !== c3[1])) {
                            var a4 = c3[0];
                            if (e7 = c3.substr(2), "m" == a4) {
                              if (!o4()) return;
                              i8 = e7.split(" ")[0];
                            } else if ("a" == a4) {
                              if (1 !== (a4 = e7.split(":", 2)).length) {
                                if (2 !== a4.length) return void d.e("{eb7c2d0}", "{f6bdb84}", e7);
                                if (e7 = a4[0], a4 = a4[1], "msid" === e7) {
                                  if (void 0 !== t9) return void d.e("{eb7c2d0}", "{dc7fbec}", a4);
                                  t9 = a4;
                                } else s5.set(e7, a4);
                              }
                            } else if ("t" == a4) {
                              if (r5) return void d.e("{eb7c2d0}", "{14fc069}");
                              n6.time = e7;
                            } else if ("o" == a4) {
                              if (r5) return void d.e("{eb7c2d0}", "{eb0287a}");
                              n6.origin = e7;
                            }
                          }
                          if (o4()) {
                            if ("" !== n6.time && "" !== n6.origin) return n6;
                            d.e("{eb7c2d0}", "{8e7e486}");
                          }
                        }(t8)) {
                          var a3, c2 = t8;
                          const e7 = { origin: c2.origin, time: c2.time, ob: /* @__PURE__ */ new Map(), media: [] };
                          e7.ob.set("general.clientSupportsIntraRefresh", "Safari" === r4.browser ? "0" : "1"), e7.ob.set("general.clientCapture", null !== (a3 = c2.ob.get("general.clientCapture")) && void 0 !== a3 ? a3 : "0"), e7.ob.set("runtime.serverTraceCapture", 2 .toString()), a3 = 0;
                          for (const t9 of c2.media) {
                            if (c2 = /* @__PURE__ */ new Map(), "video" === t9.mediaType && a3 < s4.video.length) {
                              var l2 = void 0, u2 = c2, h2 = s4.video[a3], p2 = r4, f2 = o3;
                              u2.set("vqos.fec.rateDropWindow", "10"), u2.set("vqos.fec.minRequiredFecPackets", "2"), u2.set("vqos.drc.minRequiredBitrateCheckEnabled", "1"), u2.set("video.dx9EnableNv12", "1"), u2.set("vqos.qpg.enable", "1"), u2.set("vqos.resControl.qp.qpg.featureSetting", 7 .toString()), u2.set("bwe.useOwdCongestionControl", "1"), u2.set("video.enableRtpNack", "1"), u2.set("vqos.bw.txRxLag.minFeedbackTxDeltaMs", "200"), u2.set("vqos.fec.repairMinPercent", "5"), u2.set("vqos.fec.repairPercent", "5"), u2.set("vqos.fec.repairMaxPercent", "35"), u2.set("vqos.drc.bitrateIirFilterFactor", "18"), u2.set("video.packetSize", "1140"), u2.set("packetPacing.minNumPacketsPerGroup", "15"), u2.set("vqos.bllFec.enable", "0");
                              var v2 = void 0, m2 = w(p2) || y(p2);
                              (null !== (v2 = Ci.enableOOFQosEnhancements) && void 0 !== v2 ? v2 : m2) && (u2.set("vqos.adjustStreamingFpsDuringOutOfFocus", "1"), u2.set("vqos.resControl.cpmRtc.ignoreOutOfFocusWindowState", "1"), u2.set("vqos.resControl.perfHistory.rtcIgnoreOutOfFocusWindowState", "1")), m2 = 120 <= h2.hc;
                              var g2 = 120 === h2.hc, S2 = 240 === h2.hc, b2 = 4953600 <= h2.Qb * h2.Pb, E2 = yn(h2.Qb, h2.Pb) || b2, C2 = 2764800 <= h2.Qb * h2.Pb;
                              if ((v2 = Cn(p2)) && u2.set("vqos.resControl.cpmRtc.featureMask", "3"), m2 && (u2.set("bwe.iirFilterFactor", "8"), u2.set("video.encoderFeatureSetting", 47 .toString()), u2.set("video.encoderPreset", 6 .toString()), u2.set("vqos.resControl.cpmRtc.badNwSkipFramesCount", " 600"), u2.set("vqos.resControl.cpmRtc.decodeTimeThresholdMs", "9"), g2 ? (u2.set("video.fbcDynamicFpsGrabTimeoutMs", "6"), u2.set("vqos.resControl.cpmRtc.serverResolutionUpdateCoolDownCount", "6000")) : S2 && (u2.set("video.fbcDynamicFpsGrabTimeoutMs", "18"), u2.set("vqos.resControl.cpmRtc.serverResolutionUpdateCoolDownCount", "12000"), u2.set("video.enableNextCaptureMode", "1"), u2.set("vqos.maxStreamFpsEstimate", "240"), u2.set("video.videoSplitEncodeStripsPerFrame", "3"), u2.set("video.updateSplitEncodeStateDynamically", "1"))), (E2 || 42e3 <= h2.Dc) && (g2 ? u2.set("packetPacing.numGroups", "3") : u2.set("packetPacing.numGroups", "5"), u2.set("packetPacing.maxDelayUs", "1000"), u2.set("packetPacing.minNumPacketsFrame", "10"), u2.set("video.rtpNackQueueLength", "1024"), u2.set("video.rtpNackQueueMaxPackets", "512"), u2.set("video.rtpNackMaxPacketCount", "25"), u2.set("vqos.drc.qpMaxResThresholdAdj", "4"), u2.set("vqos.grc.qpMaxResThresholdAdj", "4"), u2.set("vqos.drc.iirFilterFactor", "100"), u2.set("vqos.qpg.enable", "0"), u2.set("vqos.resControl.qp.qpg.featureSetting", "0"), E2 && (u2.set("video.videoSplitEncodeStripsPerFrame", "3"), u2.set("video.updateSplitEncodeStateDynamically", "1")), b2 && (u2.set("video.encoderPreset", 6 .toString()), u2.set("vqos.drc.add1440pResLevelFor4kDrcTable", "1"), u2.set("vqos.drc.minAdaptiveQpThreshold", "40"), u2.set("vqos.grc.minAdaptiveQpThreshold", "40"), u2.set("vqos.drc.upperQpThreshold", "40"), u2.set("vqos.grc.upperQpThreshold", "40"), u2.set("vqos.drc.qpMaxResThresholdAdj", "5"), u2.set("vqos.grc.qpMaxResThresholdAdj", "5"), u2.set("vqos.drc.iirFilterFactor", "100"), u2.set("vqos.fec.repairMinPercent", "0"), u2.set("vqos.qpg.enable", "0"), u2.set("vqos.resControl.qp.qpg.featureSetting", "0"))), "AV1" === f2) {
                                var T2, I2, R2, k2, P2, D2, O2, M2, L2, x2 = E2 = S2 = g2 = void 0, F2 = void 0, _2 = void 0, U2 = u2;
                                U2.set("vqos.qpg.enable", "0"), U2.set("vqos.resControl.qp.qpg.featureSetting", "0"), U2.set("vqos.drc.minQpHeadroom", "20"), U2.set("vqos.drc.lowerQpThreshold", "100"), U2.set("vqos.drc.upperQpThreshold", "200"), U2.set("vqos.drc.minAdaptiveQpThreshold", "180");
                                let e8 = Number(null !== (L2 = U2.get("vqos.drc.qpMaxResThresholdAdj")) && void 0 !== L2 ? L2 : "0");
                                U2.set("vqos.drc.qpMaxResThresholdAdj", (5 * e8).toString()), U2.set("vqos.drc.qpCodecThresholdAdj", "0"), U2.set("vqos.dfc.minQpHeadroom", null !== (M2 = U2.get("vqos.drc.minQpHeadroom")) && void 0 !== M2 ? M2 : "0"), U2.set("vqos.dfc.qpLowerLimit", null !== (O2 = U2.get("vqos.drc.lowerQpThreshold")) && void 0 !== O2 ? O2 : "0"), U2.set("vqos.dfc.qpMaxUpperLimit", null !== (D2 = U2.get("vqos.drc.upperQpThreshold")) && void 0 !== D2 ? D2 : "0"), U2.set("vqos.dfc.qpMinUpperLimit", null !== (P2 = U2.get("vqos.drc.minAdaptiveQpThreshold")) && void 0 !== P2 ? P2 : "0"), U2.set("vqos.dfc.qpMaxResThresholdAdj", null !== (k2 = U2.get("vqos.drc.qpMaxResThresholdAdj")) && void 0 !== k2 ? k2 : "0"), U2.set("vqos.dfc.qpCodecThresholdAdj", null !== (R2 = U2.get("vqos.drc.qpCodecThresholdAdj")) && void 0 !== R2 ? R2 : "0"), b2 && (U2.set("vqos.drc.minAdaptiveQpThreshold", null !== (_2 = U2.get("vqos.drc.upperQpThreshold")) && void 0 !== _2 ? _2 : "0"), U2.set("vqos.dfc.qpMinUpperLimit", null !== (F2 = U2.get("vqos.dfc.qpMaxUpperLimit")) && void 0 !== F2 ? F2 : "0")), U2.set("vqos.grc.minQpHeadroom", null !== (I2 = U2.get("vqos.drc.minQpHeadroom")) && void 0 !== I2 ? I2 : "0"), U2.set("vqos.grc.lowerQpThreshold", null !== (T2 = U2.get("vqos.drc.lowerQpThreshold")) && void 0 !== T2 ? T2 : "0"), U2.set("vqos.grc.upperQpThreshold", null !== (x2 = U2.get("vqos.drc.upperQpThreshold")) && void 0 !== x2 ? x2 : "0"), U2.set("vqos.grc.minAdaptiveQpThreshold", null !== (E2 = U2.get("vqos.drc.minAdaptiveQpThreshold")) && void 0 !== E2 ? E2 : "0"), U2.set("vqos.grc.qpMaxResThresholdAdj", null !== (S2 = U2.get("vqos.drc.qpMaxResThresholdAdj")) && void 0 !== S2 ? S2 : "0"), U2.set("vqos.grc.qpCodecThresholdAdj", null !== (g2 = U2.get("vqos.drc.qpCodecThresholdAdj")) && void 0 !== g2 ? g2 : "0"), C2 && U2.set("video.videoSplitEncodeStripsPerFrame", "23");
                              }
                              if (u2.set("video.clientViewportWd", h2.Qb.toString()), u2.set("video.clientViewportHt", h2.Pb.toString()), u2.set("video.maxFPS", h2.hc.toString()), u2.set("video.initialBitrateKbps", h2.Hd.toString()), u2.set("video.initialPeakBitrateKbps", h2.nf.toString()), u2.set("vqos.bw.maximumBitrateKbps", h2.Dc.toString()), u2.set("vqos.bw.minimumBitrateKbps", h2.gd.toString()), u2.set("video.maxNumReferenceFrames", "4"), u2.set("video.mapRtpTimestampsToFrames", h2.Cc ? "1" : "0"), A() && (u2.set("vqos.drc.stepDownMinHeight", "480"), N(p2, false, 14, 5) || (p2 = h2.Qb / h2.Pb * 100, u2.set("vqos.drc.stepDownResolutionAlignment", "16"), u2.set("vqos.drc.stepDownTargetAspectRatioX100", p2.toFixed(0)))), p2 = u2, C2 = h2.dynamicStreamingMode, (m2 || 2 === C2) && (1 !== C2 && (p2.set("vqos.drc.enable", "0"), p2.set("vqos.dfc.enable", "1")), p2.set("vqos.dfc.decodeFpsAdjPercent", "85"), p2.set("vqos.dfc.targetDownCooldownMs", "250"), p2.set("vqos.dfc.dfcAlgoVersion", 1 .toString()), p2.set("vqos.dfc.minTargetFps", "60"), v2 && p2.set("vqos.cpm.flags", "1"), p2.set("vqos.resControl.dfc.useClientFpsPerf", "0")), void 0 !== C2) switch (C2) {
                                case 3:
                                  Wo(p2, true, m2);
                                  break;
                                case 2:
                                  Wo(p2, true, true);
                                  break;
                                case 1:
                                  Wo(p2, true, false);
                                  break;
                                case 0:
                                  Wo(p2, false, m2);
                              }
                              v2 = 3, p2 = 0, m2 = 8, "H265" !== f2 && "AV1" !== f2 || (m2 = null !== (l2 = null == (f2 = Lo) ? void 0 : f2.features.hdr) && void 0 !== l2 && l2, l2 = 1 === h2.Xc, m2 && l2 ? (v2 = 4, p2 = h2.Xc, m2 = Math.max(10, Math.min((null == f2 ? void 0 : f2.features.bitDepth) || 10, h2.bitDepth))) : m2 = Math.max(8, Math.min((null == f2 ? void 0 : f2.features.sdrBitDepth) || 8, h2.bitDepth))), u2.set("video.encoderCscMode", v2.toString()), u2.set("video.dynamicRangeMode", p2.toString()), u2.set("video.bitDepth", m2.toString()), a3++;
                            }
                            "application" === t9.mediaType && (h2 = u2 = void 0, f2 = t9, (l2 = c2).set("ri.partialReliableThresholdMs", null !== (h2 = f2.attributes.get("ri.partialReliableThresholdMs")) && void 0 !== h2 ? h2 : "0"), l2.set("ri.hidDeviceMask", null !== (u2 = f2.attributes.get("ri.hidDeviceMask")) && void 0 !== u2 ? u2 : "0")), e7.media.push({ mediaType: t9.mediaType, Fc: t9.Fc, attributes: c2 });
                          }
                          var j2, G2;
                          r4 = e7, Vo(o3 = null !== (G2 = null === (j2 = Ci.nvscClientConfigFields) || void 0 === j2 ? void 0 : j2.join("\n")) && void 0 !== G2 ? G2 : "", r4, t8, "remoteconfig"), Vo(i7, r4, t8, "server"), i7 = jt && !Vo(Ti, r4, t8, "client") ? { error: 3237093917 } : function(e8, t9) {
                            let i8 = true;
                            const n6 = (e9, t10) => (e9 = e9.get(t10)) && (e9 = parseInt(e9), !Number.isNaN(e9)) ? e9 : (d.e("{eb7c2d0}", "{0a60213}", t10), i8 = false, 0);
                            e8.xd = n6(t9.ob, "general.clientCapture");
                            let s5 = 0;
                            for (const i9 of t9.media) {
                              if ("video" === i9.mediaType && s5 < e8.video.length) {
                                t9 = e8.video[s5];
                                const r5 = i9.attributes;
                                t9.Qb = n6(r5, "video.clientViewportWd"), t9.Pb = n6(r5, "video.clientViewportHt"), t9.hc = n6(r5, "video.maxFPS"), t9.Hd = n6(r5, "video.initialBitrateKbps"), t9.nf = n6(r5, "video.initialPeakBitrateKbps"), t9.Dc = n6(r5, "vqos.bw.maximumBitrateKbps"), t9.gd = n6(r5, "vqos.bw.minimumBitrateKbps"), t9.Cc = 0 < n6(r5, "video.mapRtpTimestampsToFrames"), t9.Xc = n6(r5, "video.dynamicRangeMode"), t9.bitDepth = n6(r5, "video.bitDepth"), s5++;
                              }
                              "application" === i9.mediaType && (e8.Jc.Rd = n6(i9.attributes, "ri.partialReliableThresholdMs"), e8.Jc.lf = n6(i9.attributes, "ri.hidDeviceMask"));
                            }
                            return i8;
                          }(s4, r4) ? { config: s4, Te: Ko(r4, t8) } : { error: 3237093918 };
                        } else i7 = { error: 3237093911 };
                        if (i7.config && i7.Te) return e6.v = i7.config, i7.Te;
                        Ad(e6, { code: null !== (n5 = i7.error) && void 0 !== n5 ? n5 : 3237093910 });
                      }(e5, s3.nvstSdp, t7), !i6) return;
                    }
                    e5.aa = new za(e5.v, e5.W), function(e6, t7) {
                      var i7, n5, s4, r4, o3;
                      d.d("{93c7910}", "{d79ed0a}", t7);
                      try {
                        let a3 = {};
                        Ci.enableStunServer && (a3.iceServers = [{ urls: "stun:s1.stun.gamestream.nvidia.com:19308" }]), null === (i7 = e6.aa) || void 0 === i7 || i7.g.xd && (a3.encodedInsertableStreams = true), d.d("{93c7910}", "{93106c2}", JSON.stringify(a3)), e6.ra = t7, e6.g = new RTCPeerConnection(configuration);
                        const c2 = (t8) => {
                          var i8, n6;
                          if (e6.U) {
                            var s5 = e6.U;
                            Eo(e6.G, "IceStats", "disconnected", 0, s5.Mf, s5.Nf, s5.Lf), e6.U = void 0;
                          }
                          (s5 = null === (i8 = e6.h) || void 0 === i8 ? void 0 : La(i8)) && Eo(e6.G, "IceStats", "failed", 0, s5.Mf, s5.Nf, s5.Lf), e6.l |= 16, 4 & e6.l ? e6.h && 0 == e6.h.packetsReceived() ? Ed(e6, 3237093900) : e6.h && 0 == e6.h.l ? Ed(e6, 3237093901) : Ed(e6, t8 ? 3237093906 : 3237093899) : Ed(e6, null !== (n6 = yd(e6)) && void 0 !== n6 ? n6 : 3237093894);
                        };
                        if (e6.g.onconnectionstatechange = () => {
                          e6.g ? "failed" === (d.d("{93c7910}", "{4ced155}", e6.g.connectionState), e6.g.connectionState) && (Id(e6) || c2(false)) : d.e("{93c7910}", "{648f784}");
                        }, e6.g.oniceconnectionstatechange = () => {
                          var t8;
                          if (e6.g) switch (d.d("{93c7910}", "{3a3143a}", e6.g.iceConnectionState), e6.g.iceConnectionState) {
                            case "new":
                              e6.l |= 1;
                              break;
                            case "checking":
                              e6.l |= 2;
                              break;
                            case "connected":
                              e6.U = void 0, 32 & e6.l && (e6.I.emit("StreamingEvent", { streamingState: { state: "reconnected" } }), e6.$a++), e6.l |= 4;
                              break;
                            case "completed":
                              e6.U = void 0, e6.l |= 12;
                              break;
                            case "failed":
                              c2(true);
                              break;
                            case "disconnected":
                              e6.U = null === (t8 = e6.h) || void 0 === t8 ? void 0 : La(t8), 4 & e6.l && e6.I.emit("StreamingEvent", { streamingState: { state: "reconnecting" } }), e6.l |= 32;
                              break;
                            case "closed":
                              e6.l |= 64, 32 & e6.l && Ed(e6, 3237093892);
                          }
                          else d.e("{93c7910}", "{648f784}");
                        }, e6.g.ondatachannel = (t8) => {
                          d.d("{93c7910}", "{b364db9}", t8.channel.label), "control_channel" == t8.channel.label && (fd(e6, t8.channel, { errorCode: 3237093898, open: () => {
                            var i8, n6, s5, r5;
                            e6.S = t8.channel;
                            for (const t9 of e6.ea) Sd(e6, t9);
                            d.d("{93c7910}", "{038895c}", e6.ea.length), e6.ea = [], vd(e6, `NvRtcClient Browser name: ${e6.u.browser}, Browser version: ${e6.u.browserFullVer}`), Dd(e6, { etwPrintPair: { key: "GPU Detail", value: e6.u.gpuDetail } }), Ld(e6, null !== (n6 = null === (i8 = e6.h) || void 0 === i8 ? void 0 : i8.l) && void 0 !== n6 ? n6 : 0), $a(e6.j, 0, e6.P), $a(e6.j, 1, e6.P), $a(e6.j, 2, e6.P), navigator.getBattery && (xd(e6, null !== (r5 = null === (s5 = e6.h) || void 0 === s5 ? void 0 : s5.l) && void 0 !== r5 ? r5 : 0), $a(e6.j, 4, e6.fa), $a(e6.j, 3, e6.fa)), ed() && (vd(e6, "ClientGenericMapping: {ProcCpuUsage, TotalCpuUsage}"), $a(e6.j, 5, e6.Pa)), window.requestAnimationFrame(e6.Ka);
                          } }), t8.channel.onmessage = (t9) => {
                            try {
                              var i8 = JSON.parse(t9.data);
                              if (d.d("{93c7910}", "{9371373}"), i8.exitMessage) Ed(e6, function(e7) {
                                if (e7.stopData) {
                                  var t10 = function(e8) {
                                    if (2 > e8.length) return null;
                                    const t11 = atob(e8);
                                    let i9 = 0;
                                    const n7 = () => {
                                      const e9 = 256 * t11.charCodeAt(i9) + t11.charCodeAt(i9 + 1);
                                      return i9 += 2, e9;
                                    };
                                    return 0 == n7() ? e8.length < i9 + 2 ? null : n7() : null;
                                  }(e7.stopData);
                                  if (t10 || 0 === t10) return d.d("{c00be32}", "{921626d}", t10), xt(t10);
                                }
                                if (e7.nvstResult) {
                                  switch (d.d("{c00be32}", "{f30bc33}", e7.nvstResult), t10 = 15868672, e7 = e7.nvstResult) {
                                    case 2147680256:
                                    case 2147680291:
                                      t10 = 15868704;
                                      break;
                                    case 2147680257:
                                      t10 = 15868705;
                                      break;
                                    case 2147680258:
                                      t10 = 3237093635;
                                      break;
                                    case 2147680259:
                                      t10 = 3237094152;
                                      break;
                                    case 2147680260:
                                      t10 = 15868706;
                                      break;
                                    case 2147680262:
                                      t10 = 15868707;
                                      break;
                                    case 2147680263:
                                      t10 = 15868708;
                                      break;
                                    case 2147680264:
                                      t10 = 15868736;
                                      break;
                                    case 2147680265:
                                      t10 = 15868737;
                                      break;
                                    case 2147680266:
                                      t10 = 15868738;
                                      break;
                                    case 2147680267:
                                      t10 = 15868739;
                                      break;
                                    case 2147680268:
                                      t10 = 15868741;
                                      break;
                                    case 2147680269:
                                      t10 = 15868740;
                                      break;
                                    case 2147680270:
                                      t10 = 15868742;
                                      break;
                                    case 2147680271:
                                      t10 = 3237094147;
                                      break;
                                    case 2147680275:
                                      t10 = 15868743;
                                      break;
                                    case 2147680277:
                                      t10 = 15868709;
                                      break;
                                    case 2147680278:
                                      t10 = 15868744;
                                      break;
                                    case 2147680279:
                                      t10 = 15868710;
                                      break;
                                    case 2147680280:
                                      t10 = 15868711;
                                      break;
                                    case 2147680281:
                                      t10 = 15868712;
                                      break;
                                    case 2147680283:
                                      t10 = 3237094155;
                                      break;
                                    case 2147680284:
                                      t10 = 3237094156;
                                      break;
                                    case 2147680285:
                                      t10 = 3237094157;
                                      break;
                                    case 2147680286:
                                      t10 = 3237093678;
                                      break;
                                    case 2147680287:
                                      t10 = 15868715;
                                      break;
                                    case 2147680288:
                                      t10 = 15868716;
                                      break;
                                    case 2147680289:
                                      t10 = 15868719;
                                      break;
                                    case 2147680300:
                                      t10 = 15868688;
                                      break;
                                    case 2147745794:
                                    case 2147745797:
                                    case 2147745803:
                                      t10 = 3237093892;
                                      break;
                                    case 2147745796:
                                      t10 = 3237094158;
                                      break;
                                    case 2147745804:
                                      t10 = 3237094146;
                                      break;
                                    case 2147745805:
                                      t10 = 3237094148;
                                      break;
                                    case 2147745806:
                                      t10 = 3237094149;
                                      break;
                                    case 2147745807:
                                      t10 = 3237094150;
                                      break;
                                    case 2148438786:
                                      t10 = 15868718;
                                      break;
                                    default:
                                      d.d("{c00be32}", "{094c45e}", g(e7));
                                  }
                                  return t10;
                                }
                                return e7.code ? (d.d("{c00be32}", "{6210ab0}", e7.code), xt(e7.code)) : 15868672;
                              }(i8.exitMessage));
                              else if (i8.timerNotification) {
                                var n6 = (t9 = i8).timerNotification.code;
                                switch (i8 = 0, d.d("{c00be32}", "{44bd2b6}", n6), n6) {
                                  case 1:
                                  case 2:
                                    i8 = 1;
                                    break;
                                  case 4:
                                    i8 = 2;
                                    break;
                                  case 6:
                                    i8 = 3;
                                }
                                var s5 = i8;
                                0 === s5 ? d.e("{93c7910}", "{de37ac5}", t9.timerNotification.code) : Od(e6, s5, t9.timerNotification.secondsLeft);
                              } else i8.debugMessage ? pd(e6, i8.debugMessage.message) : i8.customMessage ? e6.I.emit("CustomMessage", JSON.parse(i8.customMessage)) : i8.videoStreamProgressEvent ? e6.videoStreamProgress = i8.videoStreamProgressEvent.videoStreamProgress : d.d("{93c7910}", "{d14e0fd}");
                            } catch (t10) {
                              d.e("{93c7910}", "{a40734a}", t10), e6.G.za(t10, "Error in control_channel message handling", "{93c7910}.ts", 0, 0, true);
                            }
                          });
                        }, d.d("{93c7910}", "{d9ffda2}"), d.d("{93c7910}", "{2bd4728}"), e6.Ja = e6.g.createDataChannel("input_channel_v1", { ordered: true, reliable: true }), e6.Ja.binaryType = "arraybuffer", fd(e6, e6.Ja, { errorCode: 3237093896 }), 0 < e6.v.Jc.Rd) {
                          d.d("{93c7910}", "{ff9ae1e}");
                          let t8 = { ordered: false, maxPacketLifeTime: e6.v.Jc.Rd };
                          d.d("{93c7910}", "{9149fff}", JSON.stringify(t8)), e6.Aa = e6.g.createDataChannel("gamepad_channel_v1", t8), e6.Aa.binaryType = "arraybuffer", fd(e6, e6.Aa, { errorCode: 3237093929 });
                        }
                        if (e6.T = e6.g.createDataChannel("cursor_channel", { ordered: true, reliable: true }), e6.T.binaryType = "arraybuffer", fd(e6, e6.T, { errorCode: 3237093897 }), function(e7) {
                          var t8;
                          return -1 !== (null !== (t8 = Ci.requireDS4TrackpadForAppIds) && void 0 !== t8 ? t8 : []).indexOf(e7);
                        }(e6.session.appId) && function(e7) {
                          rs(e7), e7.na = true, as(e7, true);
                        }(e6.s), function(e7, t8) {
                          rs(e7), e7.Da = gi || !!(4 & t8), e7.bb = Ai || !!(2 & t8), as(e7, true);
                        }(e6.s, e6.v.Jc.lf), e6.m = new zr(e6, e6.K, e6.Ja, e6.T, e6.G, e6.I, e6.Nb, 2 === e6.appLaunchMode, e6.nc, e6.s, e6.u, e6.Ba, e6.ga, e6.j, e6.V, e6.Aa, e6.textInputElement), e6.oa && (e6.setKeyboardLayout(e6.keyboardLayout), e6.oa = false), Oi) {
                          d.d("{93c7910}", "{9ae428b}");
                          const t8 = { zoneName: e6.session.zoneName, clientAppVersion: null !== (n5 = e6.clientAppVersion) && void 0 !== n5 ? n5 : "", appId: e6.session.appId, Ud: null !== (s4 = e6.Ud) && void 0 !== s4 ? s4 : "", gpuType: e6.session.gpuType, streamInfo: null !== (r4 = e6.session.streamInfo[0]) && void 0 !== r4 ? r4 : { width: 0, height: 0, fps: 0 }, clientLocale: e6.session.clientLocale };
                          e6.h = new xa(e6.I, e6, e6.K, e6.g, e6.v, e6.G, e6.u, t8, e6.j, e6.V);
                        }
                        e6.g.addEventListener("icecandidate", e6.Ua), e6.g.onsignalingstatechange = () => {
                          d.i("{93c7910}", "{3236227}", e6.g.signalingState);
                        }, e6.g.onicecandidate = (t8) => Md(e6, t8), e6.g.g = (e7) => {
                          d.w("{93c7910}", "{9871b05}", e7.port, e7.url, e7.errorCode, e7.Tg);
                        }, (null !== (o3 = Gt) && void 0 !== o3 ? o3 : !S(e6.u)) && e6.Da.initialize(e6.g, e6.I, e6.K, e6.Ea), e6.g.ontrack = (t8) => {
                          var i8;
                          const n6 = t8.streams[0];
                          d.d("{93c7910}", "{47359d4}", n6.id, t8.track.kind, t8.track.id, t8.streams.length, g(e6.l));
                          let s5 = { kind: "video" === t8.track.kind ? "video" : "audio", trackId: t8.track.id };
                          "audio" !== t8.track.kind || "stream_id" !== n6.id && "app_media_stream" !== n6.id && "second_stream_id" !== n6.id && "app_audio_stream" !== n6.id || (e6.qa = t8.track.id, function(e7, t9) {
                            (t9 = function(e8) {
                              let t10 = null;
                              return (e8 = e8.getAudioTracks()).length && (t10 = e8[0]), t10;
                            }(t9)) && (t9.onunmute = () => {
                              e7.Na = false;
                            });
                          }(e6, n6), null === (i8 = e6.R) || void 0 === i8 || i8.initialize(new MediaStream(n6.getAudioTracks()))), (t8 = e6.o.find((e7) => e7.streamId === n6.id)) ? t8.tracks.push(s5) : e6.o.push({ streamId: n6.id, tracks: [s5] }), Fd(e6);
                        };
                      } catch (t8) {
                        d.e("{93c7910}", "{ff11182}", t8), e6.G.za(t8, "Exception in creating peer connection", "{93c7910}.ts", 0, 0, true);
                      }
                    }(e5, t6);
                    let a2 = Date.now();
                    r3 = function(e6, t7) {
                      return t7.split("\r\n").map((t8) => t8.startsWith("a=candidate:") ? (e6.na = true, "a=" + _d(e6, t8.substr(2))) : t8).join("\r\n");
                    }(e5, r3), r3 = function(e6, t7, i7, n5) {
                      let s4 = e6.split("\r\n"), r4 = -1;
                      for (var o3 = 0; o3 < s4.length; o3++) if (s4[o3].startsWith("m=video")) {
                        r4 = o3;
                        break;
                      }
                      if (-1 === r4) return d.e("{93c7910}", "{3ab33e3}"), e6;
                      for (r4++, o3 = r4; o3 < s4.length; o3++) if (s4[o3].startsWith("a=imageattr")) return d.d("{93c7910}", "{b38bf22}"), e6;
                      for (e6 = /* @__PURE__ */ new Set(); r4 < s4.length && !s4[r4].startsWith("m="); ) o3 = s4[r4], /a=rtpmap:.*H26[45]\//.test(o3) ? e6.add(o3.slice(9, o3.indexOf(" "))) : 0 === o3.indexOf("a=fmtp:") && (o3 = o3.slice(7, o3.indexOf(" ")), e6.has(o3) && (r4++, s4.splice(r4, 0, `a=imageattr:${o3} send [x=[960:${t7}],y=[540:${i7}],fps=[30:${n5}]]`))), r4++;
                      return s4.join("\r\n");
                    }(r3, e5.v.video[0].Qb, e5.v.video[0].Pb, e5.v.video[0].hc), d.d("{93c7910}", "{542f9d5}", zd(r3)), e5.g.setRemoteDescription({ type: s3.type, sdp: r3 }).then(() => {
                      e5.wa = Date.now() - a2, function(e6) {
                        let t7 = e6.g.getTransceivers();
                        if (0 === t7.length) d.d("{93c7910}", "{3399d9d}"), Ad(e6, { code: 3237093909 });
                        else {
                          for (const i7 of t7) "3" === i7.mid && i7.receiver.track.id !== e6.qa ? (d.i("{93c7910}", "{981392f}"), i7.receiver.track.enabled = false) : e6.$.push({ trackId: i7.receiver.track.id, kind: i7.receiver.track.kind });
                          d.d("{93c7910}", "{648ae93}", JSON.stringify(e6.$));
                        }
                      }(e5), d.d("{93c7910}", "{ab7b3af}", e5.wa), function(e6) {
                        for (const t7 of e6.o) "stream_id" === t7.streamId && 2 === e6.o.length ? t7.streamId = "app_video_stream" : "stream_id" === t7.streamId ? t7.streamId = "app_media_stream" : "second_stream_id" === t7.streamId && (t7.streamId = "app_audio_stream");
                      }(e5);
                      const n5 = function(e6) {
                        var t7 = e6.o.find((e7) => "app_media_stream" === e7.streamId);
                        if (t7) Rd(e6, t7, e6.K), d.i("{93c7910}", "{a5e354c}");
                        else {
                          t7 = e6.o.find((e7) => "app_video_stream" === e7.streamId);
                          var i7 = e6.o.find((e7) => "app_audio_stream" === e7.streamId);
                          if (t7 && i7) {
                            const n6 = { streamId: "app_media_stream", tracks: t7.tracks.concat(i7.tracks) };
                            e6.o.splice(e6.o.indexOf(t7), 1), e6.o.splice(e6.o.indexOf(i7), 1), e6.o.push(n6), Rd(e6, n6, e6.K), d.i("{93c7910}", "{e2dc4ec}");
                          } else if (t7) Rd(e6, t7, e6.K), d.i("{93c7910}", "{07f3411}");
                          else if (i7) {
                            if (!e6.Ea) return 3237093937;
                            Rd(e6, i7, e6.Ea), d.i("{93c7910}", "{243a50b}");
                          } else d.w("{93c7910}", "{c3a2679}");
                        }
                      }(e5);
                      n5 ? Ed(e5, n5) : (function(e6) {
                        var t7;
                        null === (t7 = e6.aa) || void 0 === t7 || t7.start(e6.g);
                      }(e5), function(e6) {
                        try {
                          if (e6.g && e6.sendVideoTrack) {
                            const t7 = e6.g.getTransceivers().find((e7) => "video" === e7.receiver.track.kind);
                            if (t7) {
                              let i7 = "", n6 = t7.direction;
                              "sendrecv" !== t7.direction && (t7.direction = "sendrecv", i7 = " (" + n6 + " direction is overridden by sendrecv)"), t7.sender.replaceTrack(e6.sendVideoTrack).then(() => {
                                d.i("{93c7910}", "{b54f651}", i7);
                              }).catch((e7) => {
                                t7.direction !== n6 && (t7.direction = n6), d.w("{93c7910}", "{d225159}", e7);
                              });
                            } else d.w("{93c7910}", "{8272b59}");
                          }
                        } catch (e7) {
                          d.w("{93c7910}", "{66082ec}", e7);
                        }
                      }(e5), function(e6, t7) {
                        var i7, n6, s4;
                        const r4 = e6.g.getTransceivers().find((e7) => "video" === e7.receiver.track.kind && ("recvonly" === e7.direction || "sendrecv" === e7.direction));
                        if (r4) if (RTCRtpReceiver.getCapabilities && RTCRtpSender.getCapabilities && r4.setCodecPreferences) {
                          var o3 = [t7, "flexfec-03", "rtx"];
                          if (t7 = null === (i7 = RTCRtpReceiver.getCapabilities("video")) || void 0 === i7 ? void 0 : i7.codecs, i7 = [], t7) {
                            for (const e7 of o3) (o3 = t7.filter((t8) => t8.mimeType === "video/" + e7)) && i7.push.apply(i7, o3);
                            try {
                              r4.setCodecPreferences(i7);
                            } catch (t8) {
                              kd(e6, "Failed to set codec preferences to receiver capabilities", t8);
                              try {
                                i7 = i7.concat(null !== (s4 = null === (n6 = RTCRtpSender.getCapabilities("video")) || void 0 === n6 ? void 0 : n6.codecs) && void 0 !== s4 ? s4 : []), r4.setCodecPreferences(i7);
                              } catch (t9) {
                                kd(e6, "Failed to set codec preferences to sender and receiver capabilities", t9);
                              }
                            }
                          }
                        } else d.w("{93c7910}", "{274c489}");
                      }(e5, e5.W), a2 = Date.now(), e5.g.createAnswer().then((n6) => {
                        var s4;
                        e5.ua = Date.now() - a2, d.d("{93c7910}", "{2984003}", e5.ua);
                        const o3 = e5.v.video[0].Dc.toString(), c2 = e5.v.video[0].gd.toString(), l2 = e5.v.video[0].Hd.toString();
                        d.d("{93c7910}", "{b535c15}", zd(Kd(null !== (s4 = n6.sdp) && void 0 !== s4 ? s4 : ""))), void 0 !== n6.sdp && (n6.sdp = function(e6, t7) {
                          let i7 = e6.split("\r\n"), n7 = -1;
                          for (let e7 = 0; e7 < i7.length; e7++) if (0 === i7[e7].indexOf("m=video")) {
                            n7 = e7;
                            break;
                          }
                          if (-1 === n7) return d.e("{93c7910}", "{e0899ab}", "video"), e6;
                          for (d.d("{93c7910}", "{5cc346f}", "video", n7), n7++; 0 === i7[n7].indexOf("i=") || 0 === i7[n7].indexOf("c="); ) n7++;
                          return 0 === i7[n7].indexOf("b") ? (d.d("{93c7910}", "{e77177e}", n7), i7[n7] = "b=AS:" + t7, i7.join("\r\n")) : (d.d("{93c7910}", "{3dfc348}", n7), (e6 = i7.slice(0, n7)).push("b=AS:" + t7), (e6 = e6.concat(i7.slice(n7, i7.length))).join("\r\n"));
                        }(n6.sdp, o3), window.chrome && (n6.sdp = ad(n6.sdp, c2, o3, l2)), n6.sdp = function(e6) {
                          var t7 = [];
                          let i7 = e6.split("\r\n");
                          var n7 = "-1";
                          let s5;
                          for (let e7 = 0; e7 < i7.length; e7++) 0 === i7[e7].indexOf("a=rtpmap:") ? (s5 = i7[e7].split(" ")[1], 0 === s5.indexOf("opus") && (n7 = i7[e7].split(" ")[0].slice(9), d.i("{93c7910}", "{c3dd71b}", "audio", n7))) : 0 === i7[e7].indexOf("a=fmtp:" + n7 + " ") && (t7.push(e7), n7 = "-1");
                          if (0 === t7.length) return d.e("{93c7910}", "{115f256}", "audio"), e6;
                          e6 = -1, n7 = [];
                          for (const s6 of t7) t7 = i7[s6], d.d("{93c7910}", "{9bb0e6f}", t7), t7 += ";stereo=1", d.d("{93c7910}", "{4f021eb}", t7), (n7 = n7.concat(i7.slice(e6 + 1, s6))).push(t7), e6 = s6;
                          return (n7 = n7.concat(i7.slice(e6 + 1))).join("\r\n");
                        }(n6.sdp), (s4 = function(e6) {
                          e6 = e6.split("\r\n");
                          for (var t7 = -1, i7 = 0; i7 < e6.length; i7++) if (0 === e6[i7].indexOf("m=audio")) {
                            t7 = i7;
                            break;
                          }
                          if (-1 === t7) d.d("{93c7910}", "{a939549}", "audio");
                          else {
                            for (var n7 = i7 = void 0, s5 = void 0, r4 = void 0, o4 = t7 + 1; o4 < e6.length; o4++) if (0 === e6[o4].indexOf("a=rtpmap:")) {
                              var a3 = e6[o4].split(" ")[1];
                              0 === a3.indexOf("red") ? (n7 = e6[o4].split(" ")[0].slice(9), r4 = a3.split("/")[2], d.i("{93c7910}", "{4e6ce55}", "audio", n7, r4)) : 0 === a3.indexOf("multiopus") && (i7 = e6[o4].split(" ")[0].slice(9), s5 = a3.split("/")[2], d.i("{93c7910}", "{53ebbb1}", "audio", i7, s5));
                            } else if (0 === e6[o4].indexOf("m=")) {
                              d.d("{93c7910}", "{9fc6964}", e6[o4]);
                              break;
                            }
                            if (i7) {
                              for (a3 = [], o4 = [], t7 += 1; t7 < e6.length; t7++) if (0 === e6[t7].indexOf("a=rtpmap:" + n7) || 0 === e6[t7].indexOf("a=rtcp-fb:" + n7) || 0 === e6[t7].indexOf("a=fmtp:" + n7)) o4.push(e6[t7]);
                              else if (0 === e6[t7].indexOf("a=rtpmap:" + i7) || 0 === e6[t7].indexOf("a=rtcp-fb:" + i7) || 0 === e6[t7].indexOf("a=fmtp:" + i7)) a3.push(e6[t7]);
                              else if (0 === e6[t7].indexOf("m=")) {
                                d.d("{93c7910}", "{9fc6964}", e6[t7]);
                                break;
                              }
                              return r4 && r4 !== s5 && (n7 = void 0, o4 = [], d.w("{93c7910}", "{ad53601}", r4, s5)), { Cd: n7, ff: i7, Ig: o4.join("\r\n"), Hg: a3.join("\r\n") };
                            }
                            d.d("{93c7910}", "{cf4ee2d}", "audio");
                          }
                        }(r3)) && (n6.sdp = function(e6, t7) {
                          let i7 = e6.split("\r\n"), n7 = -1, s5 = -1;
                          for (var r4 = 0; r4 < i7.length; r4++) if (0 === i7[r4].indexOf("m=audio")) {
                            n7 = r4;
                            break;
                          }
                          if (-1 === n7) return d.d("{93c7910}", "{e0899ab}", "audio"), e6;
                          r4 = i7.slice(0, n7);
                          let o4 = i7[n7].split(" ");
                          if ("0" !== o4[3]) return d.d("{93c7910}", "{794b3c6}", "audio", o4.join(" ")), e6;
                          for (t7.Cd ? (o4[3] = t7.Cd, o4[4] = t7.ff) : o4[3] = t7.ff, r4.push(o4.join(" ")), e6 = n7 + 1; e6 < i7.length; e6++) if (0 === i7[e6].indexOf("m=")) {
                            s5 = e6;
                            break;
                          }
                          return -1 === s5 && (s5 = i7.length - 1), r4 = r4.concat(i7.slice(n7 + 1, s5)), t7.Cd && (r4 = r4.concat(t7.Ig.split("\r\n"))), (r4 = (r4 = r4.concat(t7.Hg.split("\r\n"))).concat(i7.slice(s5))).join("\r\n");
                        }(n6.sdp, s4)), d.d("{93c7910}", "{1a048a7}", zd(Kd(n6.sdp)))), a2 = Date.now(), e5.g.setLocalDescription(n6).then(() => {
                          if (e5.va = Date.now() - a2, d.d("{93c7910}", "{de86c01}", e5.va), void 0 === n6.sdp || window.chrome || (n6.sdp = ad(n6.sdp, c2, o3, l2)), void 0 !== n6.sdp && i6) {
                            var s5 = sd(n6.sdp), r4 = s5.shift(), u2 = s5[0], h2 = r4, p2 = rd(u2 + h2, "a=ice-ufrag:")[0];
                            u2 = rd(u2 + h2, "a=ice-pwd:")[0], p2 = p2.substr(12), u2 = u2.substr(10), s5 = rd(s5[0] + r4, "a=fingerprint:").map(od), (r4 = sd(i6))[0] += "a=general.icePassword:" + u2 + "\r\n", r4[0] += "a=general.iceUserNameFragment:" + p2 + "\r\n", r4[0] += "a=general.dtlsFingerprint:" + s5[0].value + "\r\n", i6 = r4.join("");
                          }
                          Nd(e5, t6, { type: n6.type, sdp: n6.sdp, nvstSdp: i6 }), d.i("{93c7910}", "{bd70666}", JSON.stringify(e5.o)), Fd(e5);
                        }).catch((t7) => {
                          d.e("{93c7910}", "{ba2deaa}", t7), Ed(e5, 3237093902);
                        });
                      }).catch((e6) => {
                        d.d("{93c7910}", "{40c0f69}", e6);
                      }));
                    }).catch((t7) => {
                      d.e("{93c7910}", "{ec2853e}", t7), Ed(e5, 3237093902);
                    });
                  } else if (s3.candidate) {
                    d.d("{93c7910}", "{cf4c103}");
                    let t7 = _d(e5, s3.candidate);
                    d.d("{93c7910}", "{43e80e0}", t7), e5.g.addIceCandidate({ sdpMLineIndex: s3.sdpMLineIndex, sdpMid: s3.sdpMid, candidate: t7 }).then(() => {
                      d.d("{93c7910}", "{db0ae14}"), e5.na = true;
                    }).catch((t8) => {
                      d.e("{93c7910}", "{62f207e}", t8), wo(e5.G, "AddCandidateFailed", null == t8 ? void 0 : t8.name, null == t8 ? void 0 : t8.message);
                    }), d.d("{93c7910}", "{9454009}");
                  }
                } catch (t7) {
                  "BYE" === i5 ? Ed(e5, 15868672) : (d.e("{93c7910}", "{93367fc}", t7), e5.G.za(t7, "Invalid handlePeerMessage Response", "{93c7910}.ts", 0, 0, true));
                }
              }(e4, t5.peer_msg.from, t5.peer_msg.msg) : t5.error && ("peerRemoved" === t5.error ? (0 !== e4.F ? (t5 = null !== (i4 = yd(e4)) && void 0 !== i4 ? i4 : 3237094161, d.w("{93c7910}", "{cbb35d3}")) : t5 = 3237094159, Ed(e4, t5)) : Ed(e4, 3237094160));
            }
            function ld(e4) {
              0 !== e4.C && (window.clearTimeout(e4.C), e4.C = 0, e4.bb = Date.now() - e4.cb), e4.H || 0 !== e4.F || function(e5) {
                e5.F = window.setTimeout(() => {
                  var t5;
                  e5.F = 0, d.i("{93c7910}", "{d22df91}"), Ed(e5, null !== (t5 = yd(e5)) && void 0 !== t5 ? t5 : 3237093895);
                }, 3e4), e5.Bb = Date.now();
              }(e4);
            }
            function ud(e4, t5) {
              var i4, n4 = ln;
              n4.h && (n4.perf.DCSend += t5), null === (i4 = e4.h) || void 0 === i4 || ((e4 = i4.g).j.value += t5, e4.j.count += 1, e4.j.max = Math.max(t5, e4.j.max));
            }
            function hd(e4) {
              if (Ud(e4)) return e4.h.S;
            }
            function pd(e4, t5) {
              e4.da.innerHTML = t5, e4.da.style.display = "block", e4.N && clearTimeout(e4.N), e4.N = window.setTimeout(() => {
                e4.da.style.display = "none";
              }, 1e3);
            }
            function fd(e4, t5, i4) {
              const n4 = t5.label;
              let s3 = false;
              t5.onopen = () => {
                var t6;
                d.d("{93c7910}", "{8e9ee5d}", n4), null === (t6 = i4.open) || void 0 === t6 || t6.call(i4), i4.errorCode && Fd(e4);
              }, t5.onclosing = () => {
                d.d("{93c7910}", "{d0c8ae7}", n4), s3 = true;
              }, t5.onclose = () => {
                var t6;
                d.d("{93c7910}", "{a3c9826}", n4), null === (t6 = i4.close) || void 0 === t6 || t6.call(i4), i4.errorCode && Id(e4);
              }, t5.onerror = (r3) => {
                if (d.e("{93c7910}", "{fcd64bb}", n4), s3 && i4.errorCode) Id(e4) || Ed(e4, 15867907);
                else {
                  var o2 = t5.bufferedAmount;
                  r3 = null == r3 ? void 0 : r3.error, e4.Z || wo(e4.G, "ChannelError", n4, null == r3 ? void 0 : r3.name, null == r3 ? void 0 : r3.message, null == o2 ? void 0 : o2.toString()), d.e("{93c7910}", "{db7ae96}", n4, null == r3 ? void 0 : r3.name, null == r3 ? void 0 : r3.message), i4.errorCode && Ed(e4, i4.errorCode);
                }
              };
            }
            function vd(e4, t5) {
              Dd(e4, { etwPrint: t5 });
            }
            function md() {
              d.d("{93c7910}", "{440d709}", ln.j, performance.timeOrigin);
            }
            function gd(e4) {
              var t5 = 1;
              for (let e5 = 1; 10 > e5; e5++) t5 *= 10;
              t5 = (t5 = "" + Math.floor(Math.random() * t5)).padEnd(10, "0"), e4.name = "peer-" + t5, d.d("{93c7910}", "{f2b789d}", e4.name), e4.M = e4.L + "/sign_in?peer_id=" + e4.name + "&version=2", e4.signalingUrlQueryParameters && (e4.M += "&" + e4.signalingUrlQueryParameters), d.d("{93c7910}", "{05b8afd}", e4.M);
            }
            function Ad(e4, t5) {
              var i4, n4, s3, r3;
              e4.H || (e4.lb = Date.now() - e4.Bb, void 0 === t5 ? wi || (null === (r3 = e4.O) || void 0 === r3 || r3.uninitialize(4001), e4.O = void 0, ln.startWebSocket(e4.M, e4.maxReceivedAckId, e4, true), Mi && Pd(e4)) : function(e5) {
                var t6, i5, n5, s4, r4, o2, a2, c2, l2;
                const u2 = (e6) => {
                  var t7, i6;
                  return (null !== (t7 = null == e6 ? void 0 : e6.get("TCP")) && void 0 !== t7 ? t7 : 0) + (null !== (i6 = null == e6 ? void 0 : e6.get("IPV6")) && void 0 !== i6 ? i6 : 0);
                };
                var h2 = (e6, t7) => {
                  let i6 = 0;
                  if (t7) {
                    e6 = `${e6} local candidates:`;
                    for (const [n6, s5] of t7) i6 += s5, e6 += ` ${t7 = n6}: ${s5}`;
                    d.i("{93c7910}", "{0b0c6f9}", e6);
                  }
                  return i6;
                };
                const p2 = null === (t6 = e5.h) || void 0 === t6 ? void 0 : function(e6) {
                  let t7 = new Ia();
                  if (!e6.j) return t7;
                  for (const i6 of e6.j.values()) "local-candidate" === i6.type && (e6 = Fa(i6), t7.set(e6, t7.get(e6) + 1));
                  return t7;
                }(t6);
                t6 = h2("event", e5.ca);
                const f2 = h2("stats", p2);
                h2 = t6 - e5.Ta;
                let v2 = "";
                const m2 = null === (i5 = e5.g) || void 0 === i5 ? void 0 : i5.getReceivers().find((e6) => "video" === e6.track.kind && e6.track.enabled);
                (i5 = null === (o2 = null === (r4 = null === (s4 = null === (n5 = null == m2 ? void 0 : m2.Yg) || void 0 === n5 ? void 0 : n5.Ug) || void 0 === s4 ? void 0 : s4.getSelectedCandidatePair) || void 0 === r4 ? void 0 : r4.call(s4)) || void 0 === o2 ? void 0 : o2.local) && (v2 = `category: ${Fa(i5)}, type: ${i5.type}`), Eo(e5.G, "LocalCandidatesCategories", v2, t6, t6 - u2(e5.ca), f2, f2 - u2(p2)), n5 = null !== (c2 = null === (a2 = e5.h) || void 0 === a2 ? void 0 : function(e6) {
                  let t7 = /* @__PURE__ */ new Set();
                  if (!e6.j) return t7;
                  for (const i6 of e6.j.values()) "local-candidate" === i6.type && "IPV4" === Fa(e6 = i6) && "UNKNOWN" !== (e6 = _a(e6)) && t7.add(e6);
                  return t7;
                }(a2)) && void 0 !== c2 ? c2 : /* @__PURE__ */ new Set(), Eo(e5.G, "LocalCandidateRanges", `${null === (l2 = e5.g) || void 0 === l2 ? void 0 : l2.iceGatheringState}`, h2, null == n5 ? void 0 : n5.size, e5.ka.size, (/* @__PURE__ */ new Set([...n5, ...e5.ka])).size);
              }(e4), e4.H = true, 0 !== e4.F && (window.clearTimeout(e4.F), e4.F = 0), t5 = { sessionId: e4.session.sessionId, subSessionId: e4.session.subSessionId, streams: e4.o, streamInfo: e4.session.streamInfo, error: t5, zoneName: e4.session.zoneName, zoneAddress: e4.session.zoneAddress, gpuType: e4.session.gpuType, isResume: null !== (i4 = e4.isResume) && void 0 !== i4 && i4, bitDepth: null !== (s3 = null === (n4 = e4.h) || void 0 === n4 ? void 0 : n4.bitDepth) && void 0 !== s3 ? s3 : 8 }, e4.Ba.Gc(t5), e4.ga.send());
            }
            function Sd(e4, t5) {
              var i4;
              try {
                if ("open" === (null === (i4 = e4.S) || void 0 === i4 ? void 0 : i4.readyState)) {
                  let i5 = performance.now();
                  e4.S.send(JSON.stringify(t5)), ud(e4, performance.now() - i5);
                } else d.w("{93c7910}", "{593db1b}");
              } catch (t6) {
                d.e("{93c7910}", "{a585a6e}", t6), e4.G.za(t6, "sendControlMessage exception", "{93c7910}.ts", 0, 0, true);
              }
            }
            function bd(e4) {
              e4.m && (e4.m.uninitialize(), e4.m = void 0);
            }
            function wd(e4) {
              var t5;
              null === (t5 = e4.h) || void 0 === t5 || t5.stop();
            }
            function yd(e4) {
              var t5;
              const i4 = Td(e4);
              let n4;
              switch (e4.videoStreamProgress) {
                case 0:
                case 2:
                  break;
                case 3:
                  n4 = 3237093922;
                  break;
                case 5:
                  n4 = 3237093923;
                  break;
                case 7:
                  n4 = 3237093924;
                  break;
                default:
                  n4 = 3237093925;
              }
              if (null === (t5 = e4.h) || void 0 === t5) var s3 = void 0;
              else e: {
                if (t5.j) {
                  var r3 = s3 = 0, o2 = 0, a2 = 0;
                  for (const e5 of t5.j.values()) "candidate-pair" === e5.type && (s3 += (t5 = e5).requestsSent + t5.consentRequestsSent, r3 += t5.responsesReceived, t5.Vg && o2++, "succeeded" === t5.state && a2++);
                  if (d.i("{5cea617}", "{47c0ce7}", s3, r3), 0 < s3 && 0 === r3) {
                    s3 = 3237093926;
                    break e;
                  }
                  if (!o2) {
                    s3 = 3237093927;
                    break e;
                  }
                  if (!a2) {
                    s3 = 3237093928;
                    break e;
                  }
                }
                s3 = void 0;
              }
              return e4.id ? e4.Sa ? 15859712 !== i4 ? n4 = i4 : e4.na ? e4.Qa ? s3 ? n4 = s3 : 4 & e4.l && ("connecting" === Wd(e4.Ja) ? n4 = 3237093919 : "connecting" === Wd(e4.T) ? n4 = 3237093920 : "connecting" === Wd(e4.S) ? n4 = 3237093921 : e4.Aa && "connecting" === Wd(e4.Aa) && (n4 = 3237093936)) : n4 = 3237093903 : n4 = 3237093904 : n4 = 3237093913 : n4 = 3237093912, n4;
            }
            function Ed(e4, t5) {
              var i4;
              if (!e4.Z) {
                if (e4.Z = true, bd(e4), wd(e4), e4.H) {
                  let n4 = { sessionId: e4.session.sessionId, subSessionId: e4.session.subSessionId, error: { code: t5 }, zoneName: e4.session.zoneName, zoneAddress: e4.session.zoneAddress };
                  wo(e4.G, "SignalingState", g(t5), null === (i4 = e4.g) || void 0 === i4 ? void 0 : i4.signalingState), d.i("{93c7910}", "{89d3ea6}", e4.g.signalingState), e4.Ba.Cf(n4);
                } else Ad(e4, { code: t5 });
                d.e("{93c7910}", "{573fb24}", g(t5));
              }
            }
            function Cd(e4) {
              e4.O = new Ha(e4.session.sessionId, { info: e4.vc.bind(e4), exception: e4.uc.bind(e4) }), e4.O.initialize(e4.M, e4.maxReceivedAckId, e4);
            }
            function Td(e4) {
              const t5 = e4.o.flatMap((e5) => e5.tracks);
              for (const i4 of e4.$) if (!t5.find((e5) => e5.trackId === i4.trackId)) return "audio" === i4.kind ? 3237093914 : 3237093905;
              return d.d("{93c7910}", "{4fef10b}"), t5.length > e4.$.length && d.w("{93c7910}", "{7861bb3}"), 15859712;
            }
            function Id(e4) {
              let t5 = false;
              return window.chrome && "closed" === e4.g.signalingState && (t5 = true, Ed(e4, 15867908)), t5;
            }
            function Rd(e4, t5, i4) {
              e4 = e4.g.getTransceivers().map((e5) => e5.receiver.track), e4 = new MediaStream(e4.filter((e5) => t5.tracks.find((t6) => t6.trackId === e5.id))), i4.srcObject = e4;
            }
            function kd(e4, t5, i4) {
              d.w("{93c7910}", "{4d3c418}", t5, i4), e4.G.za(i4, t5, "{93c7910}.ts", 0, 0, true);
            }
            function Pd(e4) {
              var t5 = { stats: { from: e4.id, to: e4.ra } }, i4 = ln;
              i4.h = false, t5 = { startStats: { statsHeader: t5 } }, i4.g && (d.d("{1f5ec29}", "{6897d5e}"), i4.g.postMessage(t5)), e4.pa = true;
            }
            function Dd(e4, t5) {
              "connecting" === Wd(e4.S) ? e4.ea.push(t5) : Sd(e4, t5);
            }
            function Od(e4, t5, i4) {
              var n4;
              2 === t5 && (null === (n4 = e4.m) || void 0 === n4 || Pr(n4, true)), d.d("{93c7910}", "{5ba6173}", t5, i4), e4.I.emit("StreamingEvent", { streamingWarnings: { code: t5, secondsLeft: i4 } });
            }
            function Md(e4, t5, i4) {
              t5.candidate ? (i4 || (i4 = Fa(t5.candidate), e4.ca.set(i4, e4.ca.get(i4) + 1), "IPV4" === i4 && "UNKNOWN" !== (i4 = _a(t5.candidate)) && e4.ka.add(i4)), "tcp" === t5.candidate.protocol ? d.d("{93c7910}", "{6f19d1e}") : (d.d("{93c7910}", "{ac052fa}", t5.candidate.port, t5.candidate.protocol), Nd(e4, e4.ra, { sdpMLineIndex: t5.candidate.sdpMLineIndex, sdpMid: t5.candidate.sdpMid, candidate: t5.candidate.candidate }), e4.Qa = true)) : d.d("{93c7910}", "{a759d16}");
            }
            function Nd(e4, t5, i4) {
              const n4 = JSON.stringify(i4);
              i4 = { peer_msg: { from: e4.id, to: t5, msg: n4 }, ackid: e4.ya.g++ }, d.d("{93c7910}", "{7ecb902}", t5, n4.length, zd(Kd(JSON.stringify(i4)))), e4.O ? e4.O.send(i4) : (e4 = ln).g && e4.g.postMessage({ send: i4 });
            }
            function Ld(e4, t5) {
              let i4 = 0;
              e4.j.h && (i4 |= 2), e4.j.v && (i4 |= 1), e4.j.j && (i4 |= 16);
              const n4 = { windowState: { streamIndex: 0, frameNumber: t5, windowStateFlags: i4 } };
              d.i("{93c7910}", "{ca317d5}", i4.toString(16), t5), Dd(e4, n4);
            }
            function xd(e4, t5) {
              let i4 = 0;
              e4.j.s && (i4 |= 4), e4.j.C && (i4 |= 1);
              const n4 = { systemState: { streamIndex: 0, frameNumber: t5, systemStateFlags: i4 } };
              d.i("{93c7910}", "{455ccc0}", i4.toString(16), t5), Dd(e4, n4);
            }
            function Fd(e4) {
              0 < e4.$.length && "connecting" !== Wd(e4.S) && "connecting" !== Wd(e4.T) && "connecting" !== Wd(e4.Ja) && (!e4.Aa || "connecting" !== Wd(e4.Aa)) && 15859712 === Td(e4) && Ad(e4);
            }
            function _d(e4, t5) {
              return d.d("{93c7910}", "{2dd62a2}"), (e4 = e4.session.mediaConnectionInfo.find((e5) => 2 === e5.usage || 17 === e5.usage)) ? ((t5 = t5.split(" "))[4] = e4.ip, t5[5] = "" + e4.port, t5 = t5.join(" "), d.d("{93c7910}", "{1fbcd88}", t5), t5) : (d.d("{93c7910}", "{aee7283}"), t5);
            }
            function Ud(e4) {
              return !(!e4.h || 0 == e4.h.m);
            }
            function jd(e4) {
              var t5;
              null === (t5 = e4.h) || void 0 === t5 || 0 != t5.m && (t5.reset(), Oa(t5, false));
            }
            function Gd(e4) {
              var t5;
              null === (t5 = e4.h) || void 0 === t5 || 0 != t5.m || Ra(t5);
            }
            function Bd(e4) {
              return e4.h ? e4.h.l : 0;
            }
            function Vd(e4) {
              var t5;
              let i4 = null === (t5 = e4.h) || void 0 === t5 ? void 0 : t5.N;
              return void 0 !== i4 && "UNKNOWN" !== i4 || (i4 = e4.W), i4;
            }
            var Hd = class {
              constructor(e4, t5, i4, n4, s3, r3, o2, a2, c2, l2, u2, h2, p2, f2, v2, m2, g2, A2, S2) {
                var b2, w2;
                let y2;
                this.signalingUrlQueryParameters = S2, this.name = "", this.id = 0, this.v = { video: [], xd: 0, Jc: { Rd: 0, lf: 0 } }, this.ra = -1, this.H = this.Z = false, this.F = this.N = this.l = 0, this.pa = false, this.C = this.xa = 0, this.na = this.Qa = this.Sa = false, this.Na = true, this.stutterIndicator = this.perfIndicator = false, this.sa = 0, this.$ = [], this.o = [], this.M = "", this.ta = 0, this.ya = new class {
                  constructor() {
                    this.g = 1;
                  }
                }(), this.cb = this.ua = this.va = this.wa = 0, this.Bb = Date.now(), this.$a = this.lb = this.bb = 0, this.oa = false, this.keyboardLayout = "", this.videoStreamProgress = this.maxReceivedAckId = 0, this.ea = [], this.qa = "", this.P = this.tc.bind(this), this.fa = this.sc.bind(this), this.Pa = this.rc.bind(this), this.Ta = 0, this.ca = new Ia(), this.Ua = this.qc.bind(this), this.ka = /* @__PURE__ */ new Set(), this.W = "UNKNOWN", this.u = c2, this.K = t5, this.Ea = i4, this.Da = n4, this.I = e4, d.d("{93c7910}", "{e1ca54d}", JSON.stringify(l2)), l2.finalizedStreamingFeatures || d.w("{93c7910}", "{6f17ef5}"), this.session = l2, Ni ? (y2 = Ni, d.d("{93c7910}", "{55e5b30}", y2)) : null != u2 && u2.maxBitrateKbps && (y2 = null == u2 ? void 0 : u2.maxBitrateKbps, d.d("{93c7910}", "{965049f}", y2)), void 0 === g2 && void 0 !== (null == u2 ? void 0 : u2.drc) && (g2 = u2.drc ? 3 : 0);
                for (const e5 of l2.streamInfo) {
                  if (null != y2) var E2 = y2;
                  else i4 = Oo(e5.width, e5.height, e5.fps)[0], d.d("{93c7910}", "{aff4184}", i4), E2 = i4;
                  n4 = (i4 = this.v.video).push, S2 = void 0;
                  var C2 = E2;
                  E2 = l2.finalizedStreamingFeatures, C2 = Math.max(4e3, C2);
                  const t6 = Math.max(4e3, Math.round(C2 / 4));
                  C2 = { Qb: e5.width, Pb: e5.height, hc: e5.fps, dynamicStreamingMode: g2, Dc: C2, Hd: t6, nf: t6, Cc: true, gd: 4e3, Xc: qo(null !== (S2 = e5.sdrHdrMode) && void 0 !== S2 ? S2 : 0), bitDepth: Ln(E2) }, n4.call(i4, C2);
                }
                if (this.pc = Bo(null !== (b2 = this.session.streamInfo[0]) && void 0 !== b2 ? b2 : { width: 0, height: 0, fps: 0 }, this.u), async function() {
                  let e5 = 2;
                  var t6 = "minptime=10;useinbandfec=1;channel_mapping=0,4,1,2,3,5;num_streams=4;coupled_streams=2";
                  const i5 = Mn(6, "v=0\no=- 0 3 IN IP4 127.0.0.1\ns=-\nt=0 0\na=fingerprint:sha-256 A7:24:72:CA:6E:02:55:39:BA:66:DF:6E:CC:4C:D8:B0:1A:BF:1A:56:65:7D:F4:03:AD:7E:77:43:2A:29:EC:93\nm=audio 9 UDP/TLS/RTP/SAVPF 100 101\nc=IN IP4 0.0.0.0\na=rtcp-mux\na=sendonly\na=mid:audio\na=setup:actpass\na=ice-ufrag:ETEn\na=ice-pwd:OtSK0WpNtpUjkY4+86js7Z/l\r\na=rtpmap:100 multiopus/48000/6\r\na=fmtp:100 " + t6 + "\r\na=rtpmap:101 opus/48000/2\na=fmtp:101 minptime=10;useinbandfec=1\n", t6);
                  t6 = Mn(8, "v=0\no=- 0 3 IN IP4 127.0.0.1\ns=-\nt=0 0\na=fingerprint:sha-256 A7:24:72:CA:6E:02:55:39:BA:66:DF:6E:CC:4C:D8:B0:1A:BF:1A:56:65:7D:F4:03:AD:7E:77:43:2A:29:EC:93\nm=audio 9 UDP/TLS/RTP/SAVPF 100 101\nc=IN IP4 0.0.0.0\na=rtcp-mux\na=sendonly\na=mid:audio\na=setup:actpass\na=ice-ufrag:ETEn\na=ice-pwd:OtSK0WpNtpUjkY4+86js7Z/l\r\na=rtpmap:100 multiopus/48000/8\r\na=fmtp:100 " + (t6 = "minptime=10;useinbandfec=1;channel_mapping=0,6,1,2,3,4,5,7;num_streams=5;coupled_streams=3") + "\r\na=rtpmap:101 opus/48000/2\na=fmtp:101 minptime=10;useinbandfec=1\n", t6), await Promise.all([i5, t6]).then((t7) => {
                    e5 = Math.max(Number(t7[0]), Number(t7[1]));
                  }), d.i("{d988e7f}", "{dc7ee29}", e5);
                }(), this.G = a2, a2 = l2.appId, (g2 = Ci.disableUnadjustedMovementForAppIds) && -1 !== g2.indexOf(a2) ? (d.i("{d988e7f}", "{265cfdc}", a2), a2 = false) : a2 = Ht, this.Nb = { unadjustedMovement: a2, ...s3 }, this.Ba = e4, this.nc = r3, this.s = o2, this.R = h2, this.textInputElement = p2, this.appLaunchMode = l2.appLaunchMode, this.clientAppVersion = f2, this.isResume = v2, this.Ud = m2, A2) {
                  for (const e5 of A2) if (e5.track instanceof MediaStreamTrack && "video" === e5.track.kind) {
                    this.sendVideoTrack = e5.track;
                    break;
                  }
                }
                this.sendVideoTrack = null !== (w2 = this.sendVideoTrack) && void 0 !== w2 ? w2 : null == u2 ? void 0 : u2.sendVideoTrack, e4 = (e4 = this.session.signalConnectionInfo.protocol).replace("http", "ws"), this.L = e4 + "://" + this.session.signalConnectionInfo.ip + ":" + this.session.signalConnectionInfo.port, (e4 = this.session.signalConnectionInfo.resourcePath) && (this.L += ("/" === e4.charAt(0) ? "" : "/") + e4, "/" === this.L.charAt(this.L.length - 1) && (this.L = this.L.slice(0, -1))), ln.initialize(this.session.sessionId, this.G, this.ya), this.ga = new qa(this, t5, this.u, this.G), this.j = new nd(c2), (t5 = document.createElement("div")).style.position = "absolute", t5.style.zIndex = "300", t5.style.left = "0", t5.style.top = "0", t5.style.width = "100%", t5.style.display = "none", t5.style.fontSize = "3em", t5.style.color = "white", t5.style.backgroundColor = "gray", t5.style.textAlign = "center", this.K.insertAdjacentElement("afterend", t5), this.da = t5, this.ab = { $b: 32768, ic: 256, jc: 255, mb: this.ja.bind(this) }, this.Va = { $b: 16384, ic: 512, jc: 65280, mb: this.Cb.bind(this) }, this.Oa = { $b: 16384, ic: 512, jc: 255, mb: this.Qc.bind(this) }, this.Za = { $b: 8192, ic: 256, jc: 255, mb: this.toggleOnScreenStats.bind(this) }, this.V = { vd: 0, Ue: 0, Sc: 0, ld: 0, nd: 0, md: 0, Wd: 0, hd: 0, Rc: 0, jd: 0 }, this.Ka = this.oc.bind(this);
              }
              start() {
                !function(e4) {
                  gd(e4);
                  let t5 = 1e4;
                  Ci.signInTimeout && 0 !== Ci.signInTimeout && (t5 = Ci.signInTimeout, d.i("{93c7910}", "{4f2f101}", t5)), e4.C = window.setTimeout(() => e4.signInTimeout(), t5), e4.cb = Date.now(), Cd(e4);
                }(this), ln.j = performance.now(), md(), jt && (this.s.v.push(this.ab), this.s.v.push(this.Va), this.s.v.push(this.Oa), this.s.v.push(this.Za));
              }
              stop(e4) {
                var t5, i4, n4, s3;
                Eo(this.G, "StreamTimersAndReconnects", g(e4), 0, this.bb, this.lb, this.$a);
                const r3 = (t6) => {
                  d.i("{93c7910}", "{a848987}", t6), Eo(this.G, "PeerAPIDurationsAndMic", g(e4), this.ua, this.wa, this.va, t6);
                };
                to().then((e5) => {
                  r3(e5);
                }), Ad(this, { code: e4, description: "Session stopped before stream connected" }), this.N && (clearTimeout(this.N), this.N = 0), this.da.remove(), this.Z = true;
                try {
                  Sd(this, { exitMessage: { code: Lt(e4) } });
                } catch (e5) {
                  d.e("{93c7910}", "{d337883}", e5);
                }
                bd(this), this.Ja && this.Ja.close(), null === (t5 = this.Aa) || void 0 === t5 || t5.close(), wd(this), null === (i4 = this.g) || void 0 === i4 || i4.removeEventListener("icecandidate", this.Ua), this.g && this.g.close(), function(e5) {
                  var t6;
                  if (null === (t6 = e5.aa) || void 0 === t6) ;
                  else {
                    for (const e6 of t6.streams) {
                      var i5 = (/* @__PURE__ */ new Date()).toISOString();
                      i5 = `ragnarok-${e6.Pd}-${i5}.${e6.lg}`, Pn([new DataView(e6.data.buffer, 0, e6.size)], i5, "text/plain") && d.i("{d7392d2}", "{4b3378a}", i5);
                    }
                    t6.streams = [];
                  }
                  e5.aa = void 0;
                }(this), 0 !== this.F && (window.clearTimeout(this.F), this.F = 0), 0 !== this.C && (window.clearTimeout(this.C), this.C = 0), an(), null === (n4 = this.O) || void 0 === n4 || n4.uninitialize(), ln.stopWebSocket(), md(), function() {
                  var e5, t6 = ln;
                  t6.v || null === (e5 = t6.G) || void 0 === e5 || wo(e5, "Worker Thread Creation Failed"), t6.G = void 0, t6.s = void 0;
                }(), this.qa && this.Na && (d.e("{93c7910}", "{283a180}"), wo(this.G, "Audio track muted")), 0 < this.xa && Eo(this.G, "WebSocketClose", "", 0, this.xa, 0, 0), null === (s3 = this.R) || void 0 === s3 || s3.uninitialize(), this.ga.uninitialize(), Ja(this.j, 0, this.P), Ja(this.j, 1, this.P), Ja(this.j, 2, this.P), Ja(this.j, 4, this.fa), Ja(this.j, 3, this.fa), ed() && Ja(this.j, 5, this.Pa), this.j.uninitialize(), Fs(this.s, this.ab), Fs(this.s, this.Va), Fs(this.s, this.Oa), Fs(this.s, this.Za), this.K.srcObject = null, this.Ea && (this.Ea.srcObject = null);
              }
              signInTimeout() {
                this.C = 0, d.i("{93c7910}", "{6d6b337}"), Ad(this, { code: 3237093907 });
              }
              vc(e4) {
                d.i("{8ba4138}", "{0b0c6f9}", e4);
              }
              uc(e4) {
                this.G.za(void 0, e4, "{8ba4138}.ts", 0, 0, true), d.e("{8ba4138}", "{0b0c6f9}", e4);
              }
              setUpstreamMedia() {
                return Promise.resolve(false);
              }
              unsetUpstreamMedia() {
                return Promise.resolve(false);
              }
              stopUpstreamMedia() {
                return Promise.resolve(false);
              }
              qc(e4) {
                d.d("{93c7910}", "{4742d5e}"), e4.candidate && this.Ta++, !window.chrome && this.g && this.g.canTrickleIceCandidates && this.g.onicecandidate && Md(this, e4, true);
              }
              oc() {
                var e4, t5;
                null === (e4 = this.h) || void 0 === e4 || function(e5) {
                  var t6 = ln;
                  if (t6.h) {
                    if (0 != t6.perf.RAFTS) {
                      var i4 = { perf: t6.perf };
                      t6.g && t6.g.postMessage(i4), on(t6);
                    }
                    t6.perf.RAFTS = dn(t6);
                  }
                  if (!Ri) {
                    if (t6 = window.performance.now(), (i4 = e5.va).getVideoPlaybackQuality) {
                      var n4 = i4.getVideoPlaybackQuality();
                      i4 = { Ad: n4.totalVideoFrames, bf: n4.droppedVideoFrames };
                    } else i4 = void 0 !== i4.webkitDecodedFrameCount ? { Ad: i4.webkitDecodedFrameCount, bf: null !== (n4 = i4.webkitDroppedFrameCount) && void 0 !== n4 ? n4 : 0 } : void 0;
                    var s3 = i4;
                    if (s3) {
                      const t7 = s3.bf;
                      n4 = t7 - e5.v.droppedVideoFrames, i4 = s3.Ad - e5.v.totalVideoFrames, e5.v.droppedVideoFrames = t7, e5.v.totalVideoFrames = s3.Ad, 1 == n4 ? e5.V.Wd++ : 1 < n4 && (e5.V.hd += n4), (s3 = ln).h && (s3.perf.FrameInfo = Math.min(i4, 15) << 4 | Math.min(n4, 15));
                    }
                    e5.v.Ag = t6;
                  }
                }(e4), window.setTimeout(() => {
                  var e5, t6;
                  if (this.Z || window.requestAnimationFrame(this.Ka), null === (e5 = this.m) || void 0 === e5) ;
                  else {
                    var i4 = e5.h;
                    0 === i4.I && qn(i4.l), Di && Fi && e5.l.ra();
                  }
                  null === (t6 = this.h) || void 0 === t6 || Ri || ((e5 = window.performance.now()) > t6.V.vd + 1e4 ? (0 !== t6.V.vd && d.i("{5cea617}", "{5fa9066}", t6.V.Sc, t6.V.ld, t6.V.nd, t6.V.md, t6.v.totalVideoFrames - t6.V.Ue, t6.V.Wd, t6.V.hd, t6.V.Rc, t6.V.jd), t6.V.vd = e5, t6.V.Ue = t6.v.totalVideoFrames, t6.V.Sc = 1, t6.V.ld = 0, t6.V.nd = 0, t6.V.md = 0, t6.V.Wd = 0, t6.V.hd = 0, t6.V.Rc = 0, t6.V.jd = 0) : t6.V.Sc += 1);
                }), null === (t5 = this.m) || void 0 === t5 || function(e5) {
                  if (e5.h.Vc) {
                    e5.h.Vc = false;
                    var t6 = e5.g.sb, i4 = e5.g.tb;
                    if (0 === e5.cursorType) if (e5.Z && e5.g.rb) {
                      var n4 = ar(e5.h.wb / e5.g.cursor.scale);
                      e5.h.bd && (e5.h.bd = false, dr(e5, n4));
                      const s3 = e5.g.cursor, r3 = e5.h.wb;
                      n4 /= r3, t6 = (t6 * e5.J.ma - s3.Ha * n4) * r3, i4 = (i4 * e5.J.ma - s3.Ia * n4) * r3, e5.ca || (t6 = Math.round(t6), i4 = Math.round(i4)), e5.j.style.transform = "translate(" + t6 / r3 + "px, " + i4 / r3 + "px)", e5.h.od || (e5.h.od = true, e5.j.style.visibility = "visible");
                    } else cr(e5);
                  }
                }(t5.h);
              }
              toggleOnScreenStats(e4 = false, t5) {
                jt && (Ud(this) ? this.h.toggleOnScreenStats(e4, t5) : pd(this, "Stats is OFF. Please enable by ctrl+alt+F5/F6"));
              }
              ja() {
                var e4;
                if (null === (e4 = this.h) || void 0 === e4) ;
                else {
                  var t5 = ln;
                  if (t5.h) {
                    const e5 = { qosMarker: dn(t5) };
                    t5.g && t5.g.postMessage(e5);
                  }
                  e4.g.S++, (t5 = e4.g).M.innerText = Qo(t5, 2 === e4.M);
                }
                pd(this, "User marker added");
              }
              toggleUserInput(e4, t5) {
                this.m ? this.m.toggleUserInput(e4, t5) : d.e("{93c7910}", "{5a0e299}", e4);
              }
              getVirtualGamepadHandler() {
                var e4;
                return null === (e4 = this.m) || void 0 === e4 ? void 0 : e4.getVirtualGamepadHandler();
              }
              toggleStutterIndicator(e4) {
                this.stutterIndicator = null != e4 ? e4 : !this.stutterIndicator, Dd(this, { stutterIndicator: { on: this.stutterIndicator } });
              }
              Cb() {
                this.sa ^= 1, Dd(this, { riDeviceOverlay: { bitmap: this.sa } });
              }
              Qc() {
                var e4;
                null === (e4 = this.m) || void 0 === e4 || e4.Mc();
              }
              sendTextInput(e4) {
                var t5;
                null === (t5 = this.m) || void 0 === t5 || t5.sendTextInput(e4);
              }
              setVirtualKeyboardState(e4) {
                var t5;
                null === (t5 = this.m) || void 0 === t5 || t5.setVirtualKeyboardState(e4);
              }
              setVideoTransforms(e4, t5, i4) {
                var n4;
                if (null === (n4 = this.m) || void 0 === n4) ;
                else {
                  const s3 = window.visualViewport;
                  s3 && (n4.J.Pc = s3.height), Mr(n4, e4, t5, i4);
                }
              }
              sendCustomMessage(e4) {
                Dd(this, e4 = { customMessage: JSON.stringify(e4) });
              }
              setStreamingMaxBitrate(e4, t5, i4) {
                i4 || (Dd(this, { setMaxBitrate: { streamIndex: e4, maxBitrate: t5 } }), d.d("{93c7910}", "{6bbc1a2}", t5));
              }
              setDrcDfcState(e4, t5, i4) {
                i4 || (Dd(this, { setDrcState: { streamIndex: e4, state: !!(1 & t5) } }), Dd(this, { setDfcState: { streamIndex: e4, state: !!(2 & t5) } }), d.d("{93c7910}", "{0ed76f3}", t5));
              }
              sendKeyEvent(e4) {
                var t5;
                null === (t5 = this.m) || void 0 === t5 || t5.sendKeyEvent(e4);
              }
              setKeyboardLayout(e4) {
                this.keyboardLayout = e4, this.m ? (this.sendCustomMessage({ messageType: "kbLayout", messageRecipient: "KBLayoutChange", data: e4 }), this.m.setKeyboardLayout(e4)) : this.oa = true;
              }
              tc() {
                Ud(this) ? Ld(this, this.h.l) : d.w("{93c7910}", "{76bcede}");
              }
              sc() {
                Ud(this) ? xd(this, this.h.l) : d.w("{93c7910}", "{20ab5a1}");
              }
              rc() {
                if (Ud(this)) {
                  var e4 = this.h.l;
                  const t5 = function(e5) {
                    switch (e5.o) {
                      case "nominal":
                        return 20;
                      case "fair":
                        return 70;
                      case "serious":
                        return 85;
                      case "critical":
                        return 100;
                    }
                  }(this.j), i4 = { cpuUsage: { streamIndex: 0, frameNumber: e4, procCpuUsage: 0, totalCpuUsage: t5 } };
                  d.i("{93c7910}", "{9bb3298}", t5.toString(), e4), Dd(this, i4);
                } else d.w("{93c7910}", "{7b1f129}");
              }
            };
            function Wd(e4) {
              var t5;
              return null !== (t5 = null == e4 ? void 0 : e4.readyState) && void 0 !== t5 ? t5 : "connecting";
            }
            function zd(e4) {
              return e4.replace(/((ice-pwd|ufrag)(:|\s))((?!(\\|\s)).)*/g, "$1***");
            }
            function Kd(e4) {
              const t5 = RegExp('(candidate:[^"\\r\\n\\\\]+)(\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\b)', "g");
              let i4 = "";
              for (; i4 !== e4; ) i4 = e4, e4 = e4.replace(t5, "$1***");
              return e4;
            }
            function qd(e4) {
              d.i("{0f7a7d0}", "{206f492}"), e4.m && (window.clearInterval(e4.m), e4.m = 0);
            }
            function $d(e4) {
              qd(e4), e4.g = (/* @__PURE__ */ new Date()).getTime(), e4.j = 0, e4.l = 0, e4.h = 0, e4.sleepTime = 0, d.i("{0f7a7d0}", "{d5ff5ba}"), e4.m = window.setInterval(() => {
                try {
                  let t5 = (/* @__PURE__ */ new Date()).getTime();
                  1e4 < t5 - e4.g - 1e4 && (e4.h = t5, e4.sleepTime = e4.h - e4.g - 1e4), 1e4 < t5 - e4.g - 1e4 && 0 != e4.j ? Jd(e4, 0 < e4.g - e4.l ? "epsp" : "esp") : 36e5 < t5 - e4.g && qd(e4), e4.g = t5;
                } catch (e5) {
                }
              }, 1e4);
            }
            function Jd(e4, t5) {
              if (e4.o !== e4.subSessionId) {
                var i4 = e4.G, n4 = g(e4.j);
                t5 = new je({ eventSequence: t5, sleepTime: e4.sleepTime, error: n4, timeToSleep: e4.g - e4.l, moduleName: "RAGNAROK", cmsId: String(i4.cmsId), sessionId: e4.sessionId, subSessionId: e4.subSessionId }), i4.h(t5), e4.o = e4.subSessionId;
              }
              qd(e4);
            }
            function Xd(e4, t5) {
              if (15868704 === t5 || 15859712 === t5) return qd(e4), false;
              let i4 = (/* @__PURE__ */ new Date()).getTime();
              return e4.j = t5, e4.l = i4, d.i("{0f7a7d0}", "{425293a}", String(i4 - e4.g), e4.h), 1e4 < i4 - e4.g - 1e4 ? (e4.h = i4, e4.sleepTime = e4.h - e4.g - 1e4, Jd(e4, "pse")) : 0 !== e4.h && 2e4 > i4 - e4.h ? Jd(e4, "pspe") : 15867909 !== t5 && 15867908 !== t5 || (e4.h = i4, Jd(e4, "other")), 0 !== e4.h;
            }
            var Qd = class {
              constructor(e4) {
                this.subSessionId = this.sessionId = "", this.g = 0, this.o = "", this.sleepTime = this.h = this.m = this.l = this.j = 0, this.G = e4;
              }
            };
            function Yd(e4) {
              let t5 = document.createElement("div");
              return t5.id = e4.Ed, t5.className = "genericdiv", t5.style.display = "grid", t5.style.gridTemplateColumns = "1fr 1fr", t5.style.gridTemplateRows = "1fr 1fr", e4.visible = true, (e4 = document.createElement("p")).id = "instruction", e4.style.color = "white", e4.style.position = "fixed", e4.innerHTML = "Connect GamePads", e4.style.top = "0", t5.appendChild(e4), t5;
            }
            var Zd = class {
              constructor() {
                this.Ed = "gamepadTester", this.visible = false, this.xb = [], this.Xd = [], this.Zb = /* @__PURE__ */ new Map(), Hi && (document.body.appendChild(Yd(this)), this.start());
              }
              Eb(e4) {
                for (let t5 = 0; 4 > t5; t5++) {
                  const i4 = this.Zb.get(t5);
                  void 0 !== i4 && !(e4 & 1 << t5) && (this.xb[i4] = null, this.Zb.delete(t5));
                }
              }
              Of(e4) {
                for (let t5 = 0; t5 < this.xb.length; t5++) {
                  let i4 = this.xb[t5];
                  i4 && i4.dc && i4.ha == e4 && (this.xb[t5] = null);
                }
              }
              $c(e4, t5, i4, n4, s3, r3, o2, a2, d2) {
                this.Zb.set(i4, t5), this.xb[t5] = { index: t5, ha: i4, buttons: n4, qd: s3, axes: r3, name: d2, dc: false };
              }
              Wc(e4, t5, i4, n4, s3, r3, o2, a2) {
                this.xb[e4] = { index: e4, ha: t5, buttons: i4, qd: n4, axes: s3, name: a2, dc: true };
              }
              Uc(e4) {
                4 > e4.index && (this.Xd[e4.index] = { index: e4.index, ha: e4.index, buttons: -1, qd: -1, axes: [-1], name: e4.id, dc: false });
              }
              Mc(e4) {
                let t5 = document.getElementById(this.Ed);
                t5 ? (t5.remove(), this.xb = [], this.visible = false) : (e4.insertAdjacentElement("afterend", Yd(this)), this.start());
              }
              start() {
                let e4, t5 = document.getElementById(this.Ed);
                if (null == t5) d.e("{e13a879}", "{0c955af}");
                else {
                  var i4 = 0.49 * window.innerWidth, n4 = 0.4 * window.innerHeight, s3 = 0.3 * i4, r3 = 0.7 * i4, o2 = 0.8 * n4, a2 = 0.8 * n4, c2 = 0.07 * i4, l2 = (e5) => {
                    e5.style.position = "absolute", e5.style.width = "2%", e5.style.height = "3.5%", e5.style.backgroundColor = "red", e5.style.borderRadius = "50%", e5.style.transform = "translate(-50%, -50%)";
                  }, u2 = (e5) => {
                    let i5 = ((e6) => e6 ? { left: { X: e6.axes[0], Y: e6.axes[1] }, right: { X: e6.axes[2], Y: e6.axes[3] } } : null)(e5);
                    if (null === t5.querySelector(`.gamepad${e5.index}`).querySelector(".leftStick")) {
                      var n5 = document.createElement("div");
                      n5.className = "gamepadJoystickPointer leftStick", l2(n5), n5.style.left = `${s3 + i5.left.X * c2}px`, n5.style.top = `${o2 + i5.left.Y * c2}px`, t5.querySelector(`.gamepad${e5.index}`).querySelector(".gamepadContainer").appendChild(n5);
                    } else (n5 = t5.querySelector(`.gamepad${e5.index}`).querySelector(".leftStick")).style.opacity = "1", n5.style.left = `${s3 + c2 * i5.left.X}px`, n5.style.top = `${o2 + i5.left.Y * c2}px`;
                    null === t5.querySelector(`.gamepad${e5.index}`).querySelector(".rightStick") ? ((n5 = document.createElement("div")).className = "gamepadJoystickPointer rightStick", l2(n5), n5.style.left = `${r3 + i5.right.X * c2}px`, n5.style.top = `${a2 + i5.right.Y * c2}px`, t5.querySelector(`.gamepad${e5.index}`).querySelector(".gamepadContainer").appendChild(n5)) : ((e5 = t5.querySelector(`.gamepad${e5.index}`).querySelector(".rightStick")).style.opacity = "1", e5.style.left = (r3 + i5.right.X * c2).toString() + "px", e5.style.top = (a2 + i5.right.Y * c2).toString() + "px");
                  }, h2 = (e5, t6, i5, n5) => {
                    var s4 = e5.getContext("2d");
                    if (s4) {
                      s4.beginPath();
                      var r4 = true === i5 ? 1 : false === i5 ? 0 : i5;
                      switch (s4.fillStyle = i5 ? n5 ? "#006FCD" : "#0e7a0d" : "grey", i5 = (t7) => {
                        if (s4) {
                          var i6 = 0.12 * r4;
                          s4.rect(e5.width * t7, e5.height * (0.12 - i6 + 0.07), 0.02 * e5.width, e5.height * i6), s4.closePath(), s4.fill(), s4.beginPath(), s4.fillStyle = "grey", s4.rect(e5.width * t7, 0.07 * e5.height, 0.02 * e5.width, e5.height * (0.12 - i6));
                        }
                      }, t6) {
                        case 0:
                          s4.moveTo(0.14 * e5.width, 0.48 * e5.height), s4.lineTo(0.19 * e5.width, 0.48 * e5.height), s4.lineTo(0.165 * e5.width, 0.54 * e5.height), s4.lineTo(0.14 * e5.width, 0.48 * e5.height);
                          break;
                        case 1:
                          s4.moveTo(0.14 * e5.width, 0.66 * e5.height), s4.lineTo(0.19 * e5.width, 0.66 * e5.height), s4.lineTo(0.165 * e5.width, 0.61 * e5.height), s4.lineTo(0.14 * e5.width, 0.66 * e5.height);
                          break;
                        case 2:
                          s4.moveTo(0.09 * e5.width, 0.55 * e5.height), s4.lineTo(0.09 * e5.width, 0.61 * e5.height), s4.lineTo(0.135 * e5.width, 0.57 * e5.height), s4.lineTo(0.09 * e5.width, 0.55 * e5.height);
                          break;
                        case 3:
                          s4.moveTo(0.24 * e5.width, 0.55 * e5.height), s4.lineTo(0.24 * e5.width, 0.61 * e5.height), s4.lineTo(0.195 * e5.width, 0.57 * e5.height), s4.lineTo(0.24 * e5.width, 0.55 * e5.height);
                          break;
                        case 4:
                          s4.arc(0.7 * e5.width, 0.4 * e5.height, 0.02 * e5.width, 0, 2 * Math.PI);
                          break;
                        case 5:
                          s4.arc(0.3 * e5.width, 0.4 * e5.height, 0.02 * e5.width, 0, 2 * Math.PI);
                          break;
                        case 6:
                          s4.arc(0.3 * e5.width, 0.8 * e5.height, 0.07 * e5.width, 0, 2 * Math.PI);
                          break;
                        case 7:
                          s4.arc(0.7 * e5.width, 0.8 * e5.height, 0.07 * e5.width, 0, 2 * Math.PI);
                          break;
                        case 8:
                          s4.rect(0.13 * e5.width, 0.23 * e5.height, 0.07 * e5.width, 0.05 * e5.height);
                          break;
                        case 9:
                          s4.rect(0.815 * e5.width, 0.23 * e5.height, 0.07 * e5.width, 0.05 * e5.height);
                          break;
                        case 12:
                          s4.arc(0.85 * e5.width, 0.65 * e5.height, 0.02 * e5.width, 0, 2 * Math.PI);
                          break;
                        case 13:
                          s4.arc(0.9 * e5.width, 0.55 * e5.height, 0.02 * e5.width, 0, 2 * Math.PI);
                          break;
                        case 14:
                          s4.arc(0.8 * e5.width, 0.55 * e5.height, 0.02 * e5.width, 0, 2 * Math.PI);
                          break;
                        case 15:
                          s4.arc(0.85 * e5.width, 0.45 * e5.height, 0.02 * e5.width, 0, 2 * Math.PI);
                          break;
                        case -1:
                          i5(0.155);
                          break;
                        case -2:
                          i5(0.84);
                          break;
                        case 16:
                          if (!n5) break;
                          s4.arc(0.5 * e5.width, 0.5 * e5.height, 0.02 * e5.width, 0, 2 * Math.PI);
                          break;
                        case 17:
                          n5 && (s4.roundRect ? s4.roundRect(0.395 * e5.width, 0.085 * e5.height, 0.21 * e5.width, 0.18 * e5.height, 0.02 * e5.width) : s4.arc(0.5 * e5.width, 0.175 * e5.height, 0.02 * e5.width, 0, 2 * Math.PI));
                      }
                      s4.closePath(), s4.fill();
                    }
                  }, p2 = (e5) => {
                    if (null === t5.querySelector(`.gamepad${e5.index}`)) {
                      var s4 = document.createElement("div");
                      s4.className = `gamepad gamepad${e5.index}`, s4.style.display = "flex", s4.style.flexDirection = "column", s4.style.justifyContent = "space-between", s4.style.height = "98%";
                      var r4 = document.createElement("p");
                      r4.className = "active", r4.style.margin = "0px";
                      var o3 = document.createElement("span");
                      o3.className = "gamepadPlayerNumber", o3.style.color = "white", o3.style.background = e5.dc ? "#006FCD" : "#0e7a0d", o3.style.position = "relative", o3.style.marginRight = "0.5vw", o3.innerHTML = e5.dc ? "S" : "X", o3.style.fontSize = "1.5vw", r4.appendChild(o3), (o3 = document.createElement("span")).className = "gamepadPlayerNumber", o3.style.color = "white", o3.style.position = "relative", o3.innerHTML = `P${e5.index + 1}|${e5.name}`, o3.style.fontSize = "1.5vw", r4.appendChild(o3), s4.appendChild(r4), (e5 = document.createElement("div")).className = "gamepadContainer", e5.style.position = "relative", e5.style.width = `${i4 + 2}px`, e5.style.height = `${n4}px`, (r4 = document.createElement("canvas")).className = "canvas", r4.width = i4, r4.height = n4, r4.style.width = `${i4}px`, r4.style.height = `${n4}px`, r4.style.border = "1px solid white", e5.appendChild(r4), s4.appendChild(e5), t5.appendChild(s4), (s4 = t5.querySelector("#instruction")) && (s4.style.display = "none");
                    }
                  }, f2 = () => {
                    if (this.visible) {
                      for (let e5 = 0; e5 < this.xb.length; e5++) {
                        var i5 = this.xb[e5];
                        if (i5) {
                          var n5 = i5.dc;
                          t5.querySelector(`.gamepad${i5.index}`) || p2(i5), u2(i5);
                          let e6 = t5.querySelector(`.gamepad${i5.index}`).querySelector("canvas"), s4 = n5 ? 2 : 0;
                          for (let t6 = 0; 16 > t6; t6++) h2(e6, t6, !!(i5.buttons & 1 << t6), n5);
                          1 <= s4 && h2(e6, 16, 65536 & i5.buttons, n5), 2 <= s4 && h2(e6, 17, 131072 & i5.buttons, n5), h2(e6, -1, (255 & i5.qd) / 255, n5), h2(e6, -2, (i5.qd >> 8 & 255) / 255, n5);
                        } else this.Xd[e5] ? !t5.querySelector(`.gamepad${e5}`) && (p2(this.Xd[e5]), n5 = (i5 = t5.querySelector(`.gamepad${e5}`).querySelector("canvas")).getContext("2d")) && (n5.font = "20px Arial", n5.fillStyle = "white", n5.textAlign = "center", n5.fillText("Unsupported Gamepad", i5.width / 2, i5.height / 2)) : ((i5 = t5.querySelector(`.gamepad${e5}`)) && t5.removeChild(i5), 1 >= t5.childNodes.length && (i5 = t5.querySelector("#instruction")) && (i5.style.display = "block"));
                      }
                      e4 = window.requestAnimationFrame(f2);
                    } else window.cancelAnimationFrame(e4);
                  };
                  f2();
                }
              }
              Yc() {
              }
              Yb() {
              }
            };
            function ec(e4) {
              if (d.i("{4c846ba}", "{b11cb24}"), e4.l) {
                try {
                  e4.h = new MediaRecorder(e4.l);
                } catch (e5) {
                  return void d.e("{4c846ba}", "{0d1420e}", e5);
                }
                e4.h && (e4.h.onstart = () => {
                }, e4.h.onstop = () => {
                  d.i("{4c846ba}", "{7a944b4}");
                }, e4.h.ondataavailable = (t5) => {
                  t5.data && 0 < t5.data.size && (e4.s.push(t5.data), e4.v.push(e4.s), ++e4.m, e4.s = []);
                }, d.i("{4c846ba}", "{ffb713f}", e4.h)), e4.o = false;
              } else d.e("{4c846ba}", "{74475ae}");
            }
            function tc(e4) {
              var t5;
              null === (t5 = e4.h) || void 0 === t5 || t5.stop(), e4.h = void 0, 0 !== e4.j && (window.clearTimeout(e4.j), e4.j = 0);
            }
            function ic(e4) {
              let t5;
              if (1 == e4.g) t5 = 18e5;
              else {
                if (2 != e4.g) return;
                t5 = 3e3;
              }
              e4.h && !e4.o && (e4.h.start(), e4.o = true, e4.j = window.setTimeout(() => {
                d.i("{4c846ba}", "{2282d21}"), tc(e4);
              }, t5), d.i("{4c846ba}", "{4f438e3}"));
            }
            var nc = class {
              constructor() {
                this.o = false, this.s = [], this.v = [], this.g = this.m = this.j = 0;
              }
              initialize(e4) {
                this.l = e4;
              }
              uninitialize() {
                tc(this), this.downloadAudio(), this.l = void 0, this.g = 0;
              }
              downloadAudio() {
                if (0 != this.g) {
                  for (let e4 = 0; e4 < this.m; ++e4) Pn(this.v[e4], "audioCapture_" + e4 + ".wmv", "audio/webm") && d.i("{4c846ba}", "{c24ed3b}");
                  this.m = 0, this.v = [];
                }
              }
            };
            function sc(e4, t5) {
              e4.h = false, e4.j = false, e4.g = t5, e4.g.onversionchange = () => {
                d.w("{10dc2cc}", "{65276d8}"), e4.close(), e4.g = void 0;
              }, e4.g.onclose = () => {
                d.w("{10dc2cc}", "{342f7f8}"), e4.h = true, e4.j = true;
              };
            }
            function rc(e4) {
              return e4.l ? e4.g ? e4.h ? F(2, "Db is closing, unexpectedly: " + e4.j + ", visibility state hidden: " + ("hidden" === document.visibilityState)) : void 0 : F(1, "Db not yet open") : F(17, "Indexdb object not found");
            }
            function oc(e4, t5) {
              const i4 = rc(e4);
              return i4 ? Promise.reject(i4) : new Promise((i5, n4) => {
                try {
                  const s3 = e4.g.transaction(t5, "readwrite"), r3 = s3.objectStore(t5);
                  s3.oncomplete = () => {
                    d.i("{10dc2cc}", "{30f23d1}");
                  };
                  const o2 = r3.clear();
                  o2.onsuccess = () => {
                    i5();
                  }, o2.onerror = () => {
                    n4(F(80, "clear method failed)", s3.error));
                  };
                } catch (e5) {
                  n4(F(81, "Unexpected Exception happened in clear", e5));
                }
              });
            }
            function ac(e4, t5) {
              const i4 = rc(e4);
              return i4 ? Promise.reject(i4) : new Promise((i5, n4) => {
                try {
                  const s3 = e4.g.transaction(t5, "readonly"), r3 = s3.objectStore(t5);
                  s3.oncomplete = () => {
                    d.i("{10dc2cc}", "{59d1f78}");
                  };
                  const o2 = r3.getAll();
                  o2.onsuccess = () => {
                    i5(o2.result);
                  }, o2.onerror = () => {
                    n4(F(96, "getAll method failed", s3.error));
                  };
                } catch (e5) {
                  n4(F(97, "Unexpected Exception in getAll", e5));
                }
              });
            }
            function dc(e4, t5) {
              if (e4.g.commonData) {
                var i4 = t5.gdprLevel;
                let n4 = false;
                e4.g.commonData && ("functional" !== i4 || "Full" !== e4.g.commonData.deviceGdprFuncOptIn && "Temp" !== e4.g.commonData.deviceGdprFuncOptIn ? ("technical" === i4 && "Full" === e4.g.commonData.gdprTechOptIn || "behavioral" === i4 && "Full" === e4.g.commonData.gdprBehOptIn) && (n4 = true) : n4 = true), n4 && (window.navigator.onLine ? function(e5) {
                  var t6, i5, n5, s3;
                  null !== (t6 = e5.config) && void 0 !== t6 && t6.server && null !== (i5 = e5.config) && void 0 !== i5 && i5.version && (t6 = { method: "POST", headers: { "Content-Type": "application/json", "X-Event-Protocol": null !== (s3 = null === (n5 = e5.commonData) || void 0 === n5 ? void 0 : n5.eventProtocol) && void 0 !== s3 ? s3 : "1.5" }, body: JSON.stringify(e5.commonData), retryCount: 3, timeout: 2e3 }, d.i("{f7c1592}", "{056661f}", t6.body), I(mc(e5.config), t6).then(() => {
                  }).catch(() => {
                  }));
                }(fc(e4, t5)) : function(e5, t6) {
                  !e5.j && Sc(t6) && e5.m.then(() => e5.l.set("telemetry-events", t6)).then(() => {
                    d.i("{f7c1592}", "{f03d70b}");
                  }).catch((t7) => {
                    const i5 = !e5.F;
                    e5.F = true, pc(e5, t7, "cacheTelemetryEventInDb", i5);
                  });
                }(e4, { userId: e4.g.commonData.userId, sessionId: e4.g.commonData.sessionId, name: t5.name, eventPayload: t5 }));
              } else e4.C.push(t5);
            }
            function cc(e4) {
              var t5, i4, n4;
              return null !== (n4 = null === (i4 = null === (t5 = e4.g) || void 0 === t5 ? void 0 : t5.telemetryEventIds) || void 0 === i4 ? void 0 : i4.streamingProfileGuid) && void 0 !== n4 ? n4 : "";
            }
            function lc(e4) {
              var t5, i4, n4;
              return null !== (n4 = null === (i4 = null === (t5 = e4.g) || void 0 === t5 ? void 0 : t5.telemetryEventIds) || void 0 === i4 ? void 0 : i4.systemInfoGuid) && void 0 !== n4 ? n4 : "";
            }
            function uc(e4, t5) {
              var i4, n4, s3, r3;
              let o2 = null !== (i4 = t5.exitErrorCode) && void 0 !== i4 ? i4 : "";
              return t5.sleep ? o2 = "SleepExit" : null !== (n4 = t5.connectivity) && void 0 !== n4 && n4.startsWith("online") && (o2 = null !== (s3 = t5.connectivity) && void 0 !== s3 ? s3 : ""), { name: (i4 = new go({ zoneAddress: t5.zoneAddress, networkSessionId: null !== (r3 = t5.networkTestSessionId) && void 0 !== r3 ? r3 : "", sessionId: t5.sessionId, subSessionId: t5.subSessionId, resumeType: In(t5.isResume), overrideConfigType: Ii.type, overrideConfigVersion: Ii.version, exitReason: o2, result: t5.exitErrorCode, frameCount: t5.frameCount, codec: En(t5.codec), ipVersion: "UNKNOWN", streamDuration: Math.round(t5.streamDuration), networkType: _(bo.getCurrentNetworkType()), streamingProfileGuid: cc(e4), systemInfoGuid: lc(e4), cmsId: String(e4.I) })).name, gdprLevel: i4.gdprLevel, parameters: i4.parameters, ts: i4.ts, clientConfig: vo };
            }
            function hc(e4) {
              d.d("{f7c1592}", "{badefed}", true), function(e5) {
                e5.j || e5.m.then(() => oc(e5.l, "exit-events")).then(() => {
                  d.i("{f7c1592}", "{1b8f127}");
                }).catch((t5) => {
                  pc(e5, t5, "clearExitEventStoreInDb", !e5.s), e5.s || (e5.s = true);
                });
              }(e4), e4.h.eventPayload = void 0;
            }
            function pc(e4, t5, i4, n4) {
              var s3, r3, o2, a2;
              d.e("{f7c1592}", "{146ec91}", i4, g(t5.code), t5.description), n4 && (n4 = null !== (o2 = null !== (r3 = null === (s3 = t5.error) || void 0 === s3 ? void 0 : s3.message) && void 0 !== r3 ? r3 : t5.description) && void 0 !== o2 ? o2 : `Exception in ${i4}`, e4.H ? e4.H(t5.error, n4, "telemetryeventprocessor.ts", t5.code, 0, true, null === (a2 = t5.error) || void 0 === a2 ? void 0 : a2.name) : d.w("{f7c1592}", "{12e0846}"));
            }
            function fc(e4, t5) {
              let i4 = {};
              if (!e4.g.commonData) return i4;
              const n4 = { name: t5.name, ts: t5.ts, parameters: t5.parameters };
              return vc(i4, e4.g), (e4 = i4.commonData).clientId = t5.clientConfig.clientId, e4.eventSchemaVer = t5.clientConfig.eventSchemaVer, e4.sentTs = (/* @__PURE__ */ new Date()).toISOString(), e4.events = [n4], i4;
            }
            function vc(e4, t5) {
              e4.commonData = t5.commonData ? Object.assign({}, t5.commonData) : void 0, e4.experiments = [], e4.config = t5.config, e4.telemetryEventIds = t5.telemetryEventIds;
            }
            function mc(e4) {
              return e4.server + "/" + e4.version + "/events/json";
            }
            function gc(e4, t5) {
              var i4, n4, s3;
              e4.h.userId = null !== (n4 = null === (i4 = e4.g.commonData) || void 0 === i4 ? void 0 : i4.userId) && void 0 !== n4 ? n4 : "", e4.h.sessionId = null !== (s3 = t5.parameters.sessionId) && void 0 !== s3 ? s3 : "", e4.h.name = t5.name, e4.h.eventPayload = t5;
            }
            function Ac(e4) {
              var t5, i4;
              null !== (t5 = e4.config) && void 0 !== t5 && t5.server && null !== (i4 = e4.config) && void 0 !== i4 && i4.version && e4.experiments && (e4.commonData && (e4.commonData.sentTs = (/* @__PURE__ */ new Date()).toISOString()), t5 = JSON.stringify(e4.commonData), e4 = navigator.sendBeacon(mc(e4.config), new Blob([t5], { type: "text/plain" })), d.i("{f7c1592}", "{b9367c5}", e4, t5));
            }
            function Sc(e4) {
              return !!e4.userId && !!e4.sessionId && !!e4.name;
            }
            function bc(e4) {
              return e4.j || !Sc(e4.h) ? Promise.resolve() : e4.m.then(() => e4.l.set("exit-events", e4.h)).then(() => {
                d.i("{f7c1592}", "{5d026f8}");
              }).catch((t5) => {
                pc(e4, t5, "cacheExitEventInDb", !e4.o), e4.o || (e4.o = true);
              });
            }
            function wc(e4) {
              e4.j || window.navigator.onLine && e4.m.then(() => ac(e4.l, "telemetry-events")).then((t5) => {
                if (d.i("{f7c1592}", "{d4e574c}", t5.length), 0 < t5.length) {
                  !function(e5) {
                    e5.j || e5.m.then(() => oc(e5.l, "telemetry-events")).then(() => {
                      d.i("{f7c1592}", "{8f62936}");
                    }).catch((t6) => {
                      pc(e5, t6, "clearEventStoreInDb", !e5.v), e5.v || (e5.v = true);
                    });
                  }(e4);
                  for (const i4 of t5) i4.eventPayload && dc(e4, i4.eventPayload);
                }
              }).catch((e5) => {
                d.e("{f7c1592}", "{aaaa3de}", e5.code, e5.description);
              });
            }
            function yc(e4) {
              if (e4.g) {
                const i4 = e4.g.getSessionId(), n4 = e4.g.getSubSessionId();
                d.d("{9d1820c}", "{2fd42df}", i4, n4);
                var t5 = e4.G;
                t5.subSessionId = n4, t5.v.clear(), t5.C = 0, e4.F.subSessionId = n4, (t5 = e4.G).sessionId = i4, t5.H = 0, e4.F.sessionId = i4, (e4 = e4.m).o = false, e4.s = false, e4.F = false, e4.v = false;
              }
            }
            function Ec(e4, t5) {
              var i4, n4, s3, r3, o2, a2, d2, c2, l2, u2;
              e4.M && (e4.M = false, e4.framesDecoded = null !== (n4 = null === (i4 = e4.D) || void 0 === i4 ? void 0 : Bd(i4)) && void 0 !== n4 ? n4 : 0, i4 = { sessionId: null !== (r3 = null === (s3 = e4.g) || void 0 === s3 ? void 0 : s3.getSessionId()) && void 0 !== r3 ? r3 : "", subSessionId: null !== (a2 = null === (o2 = e4.g) || void 0 === o2 ? void 0 : o2.getSubSessionId()) && void 0 !== a2 ? a2 : "", zoneName: null !== (c2 = null === (d2 = e4.g) || void 0 === d2 ? void 0 : d2.getZoneName()) && void 0 !== c2 ? c2 : "", zoneAddress: (null === (l2 = e4.g) || void 0 === l2 ? void 0 : l2.getZoneAddress()) || e4.h.serverAddress, error: { code: t5 } }, s3 = Ic(e4, i4, performance.now() - e4.startTime), lo(e4.j), (!e4.D || (null === (u2 = e4.D) || void 0 === u2 ? 0 : u2.H)) && Tc(e4, s3), _c(e4, t5), e4.cancelSessionSetup());
            }
            function Cc(e4) {
              0 !== e4.I && (window.clearTimeout(e4.I), e4.I = 0);
            }
            function Tc(e4, t5) {
              Cc(e4);
              var i4 = e4.G;
              let n4;
              n4 = uc(i4.j, t5), Ro(i4, n4), hc(i4.j), t5 = t5.streamDuration, "hidden" === document.visibilityState && (e4.o += performance.now() - e4.L), i4 = 0, t5 && (i4 = Math.max(0, 100 * (t5 - e4.o) / t5)), Eo(e4.G, "sessionVisibilityMetrics", "", i4, Math.round(t5), Math.round(e4.o), 0), e4.o = 0, e4.L = 0;
            }
            function Ic(e4, t5, i4, n4, s3) {
              var r3, o2, a2, d2;
              return { exitErrorCode: t5.error ? g(t5.error.code) : g(15859712), sessionId: t5.sessionId, subSessionId: t5.subSessionId, zoneAddress: t5.zoneAddress, streamDuration: i4, frameCount: e4.framesDecoded, codec: null !== (o2 = null === (r3 = e4.D) || void 0 === r3 ? void 0 : Vd(r3)) && void 0 !== o2 ? o2 : "UNKNOWN", isResume: e4.isResume, connectivity: null != n4 ? n4 : "undefined", sleep: null != s3 && s3, networkTestSessionId: null !== (d2 = null === (a2 = e4.v) || void 0 === a2 ? void 0 : a2.la.networkSessionId) && void 0 !== d2 ? d2 : "" };
            }
            function Rc(e4) {
              var t5;
              Mc(e4, g(null !== (t5 = e4.S) && void 0 !== t5 ? t5 : 15867911));
              const i4 = e4.I;
              bc(e4.m).then(() => {
                i4 === e4.I && function(e5) {
                  Cc(e5), e5.I = window.setTimeout(() => Rc(e5), 12e4);
                }(e4);
              }).catch(() => {
                d.e("{9d1820c}", "{204a7ac}");
              });
            }
            function kc(e4) {
              return { code: 3237093380, description: e4 + " called before initialize" };
            }
            function Pc(e4, t5) {
              var i4, n4, s3, r3, o2, a2, c2, l2, u2, h2, p2;
              let f2 = { sessionId: null !== (n4 = null === (i4 = e4.g) || void 0 === i4 ? void 0 : i4.getSessionId()) && void 0 !== n4 ? n4 : "", subSessionId: null !== (r3 = null === (s3 = e4.g) || void 0 === s3 ? void 0 : s3.getSubSessionId()) && void 0 !== r3 ? r3 : "", error: { code: 3237089284, description: "Quitting due to exception" }, streamInfo: null === (o2 = e4.H) || void 0 === o2 ? void 0 : o2.streamInfo, zoneName: null !== (c2 = null === (a2 = e4.g) || void 0 === a2 ? void 0 : a2.getZoneName()) && void 0 !== c2 ? c2 : "", zoneAddress: null !== (u2 = null === (l2 = e4.g) || void 0 === l2 ? void 0 : l2.getZoneAddress()) && void 0 !== u2 ? u2 : "", gpuType: null !== (p2 = null === (h2 = e4.g) || void 0 === h2 ? void 0 : h2.getGpuType()) && void 0 !== p2 ? p2 : "", isResume: e4.isResume };
              e4.Gc(f2, true), d.e("{9d1820c}", "{90f98fb}", t5), e4.G.za(t5, "Exception happened in session call", "{9d1820c}.ts", 0, 0, true);
            }
            function Dc(e4, t5) {
              var i4 = D();
              e4.Gc({ sessionId: "", subSessionId: i4, error: t5, zoneName: "", zoneAddress: "", gpuType: "", isResume: e4.isResume }, true);
            }
            function Oc(e4, t5, i4, n4) {
              if (e4.H = void 0, e4.aa = false, e4.g) {
                os(e4.C, i4.la.additionalInputDevices), i4.la.remoteControllersBitmap = js(e4.C);
                try {
                  !function(e5, t6) {
                    e5.j.I = t6;
                  }(e4.G, i4.la.appId, i4.la.shortName), e4.startTime = performance.now(), $d(e4.F), d.d("{9d1820c}", "{892168d}", U(JSON.stringify(i4.la)));
                  const s3 = e4.g;
                  s3.putOrPostSession(i4.la, t5, n4).then((t6) => (yc(e4), d.d("{9d1820c}", "{92a2573}", null == t6 ? void 0 : t6.sessionId, null == t6 ? void 0 : t6.subSessionId), "ready_for_connection" === (null == t6 ? void 0 : t6.state) ? (d.d("{9d1820c}", "{2042e0a}"), e4.H = t6, new Promise((e5) => {
                    e5(t6);
                  })) : s3.getSession(t6.sessionId, true))).then((t6) => {
                    e4.H = t6, d.d("{9d1820c}", "{315afdc}", null == t6 ? void 0 : t6.sessionId), e4.startStreaming(i4);
                  }).catch((t6) => {
                    var i5, n5, r3, o2, a2, c2;
                    if (yc(e4), t6.code) {
                      15867905 != t6.code && 15867906 != t6.code || !s3.getSessionId() || e4.aa || e4.sendDeleteRequest(s3.getSessionId(), s3), d.e("{9d1820c}", "{09efe49}", g(t6.code));
                      let l2 = { sessionId: null !== (i5 = s3.getSessionId()) && void 0 !== i5 ? i5 : "", subSessionId: null !== (n5 = s3.getSubSessionId()) && void 0 !== n5 ? n5 : "", error: t6, sessionList: t6.sessionList, streamInfo: null === (r3 = e4.H) || void 0 === r3 ? void 0 : r3.streamInfo, zoneName: null !== (o2 = s3.getZoneName()) && void 0 !== o2 ? o2 : "", zoneAddress: null !== (a2 = s3.getZoneAddress()) && void 0 !== a2 ? a2 : "", gpuType: null !== (c2 = s3.getGpuType()) && void 0 !== c2 ? c2 : "", isResume: e4.isResume };
                      e4.Gc(l2, true);
                    } else Pc(e4, t6);
                  });
                } catch (t6) {
                  Pc(e4, t6);
                }
              } else e4.emit("SessionStartResult", { sessionId: "", subSessionId: "", zoneName: "", zoneAddress: "", gpuType: "", isResume: e4.isResume, error: kc(e4.isResume ? "Resume" : "Start") });
            }
            function Mc(e4, t5) {
              var i4, n4, s3, r3, o2, a2, d2, c2, l2, u2 = e4.m, h2 = null !== (n4 = null === (i4 = e4.g) || void 0 === i4 ? void 0 : i4.getSessionId()) && void 0 !== n4 ? n4 : "";
              i4 = null !== (r3 = null === (s3 = e4.g) || void 0 === s3 ? void 0 : s3.getSubSessionId()) && void 0 !== r3 ? r3 : "", s3 = (null === (o2 = e4.g) || void 0 === o2 ? void 0 : o2.getZoneAddress()) || e4.h.serverAddress, o2 = null !== (d2 = null === (a2 = e4.D) || void 0 === a2 ? void 0 : Bd(a2)) && void 0 !== d2 ? d2 : 0, a2 = null !== (l2 = null === (c2 = e4.D) || void 0 === c2 ? void 0 : Vd(c2)) && void 0 !== l2 ? l2 : "UNKNOWN", gc(u2, e4 = uc(u2, { exitErrorCode: t5, sessionId: h2, subSessionId: i4, zoneAddress: s3, streamDuration: performance.now() - e4.startTime, frameCount: o2, codec: a2, isResume: e4.isResume, connectivity: "", sleep: false, networkTestSessionId: "" }));
            }
            function Nc(e4) {
              e4.T && (window.clearTimeout(e4.T), e4.T = 0);
            }
            function Lc(e4) {
              window.removeEventListener("pagehide", e4.ja), window.removeEventListener("online", e4.ea), document.removeEventListener("visibilitychange", e4.ka), navigator.mediaDevices && navigator.mediaDevices.removeEventListener("devicechange", e4.W), S(e4.u) && (document.removeEventListener("SystemIdle", e4.ga), Nc(e4));
            }
            function xc(e4, t5) {
              e4.S = void 0, wc(e4.m), e4.M = true, window.addEventListener("pagehide", e4.ja), window.addEventListener("online", e4.ea), document.addEventListener("visibilitychange", e4.ka), navigator.mediaDevices && navigator.mediaDevices.addEventListener("devicechange", e4.W), e4.isResume = t5, e4.P && wo(e4.G, "SessionSetupInProgressError", e4.isResume ? "resume" : "start"), e4.P = true;
            }
            function Fc(e4, t5) {
              var i4, n4, s3;
              if ((t5 = { la: Object.assign({}, t5), ce: [] }).la.streamParams) for (const i5 of t5.la.streamParams) {
                const n5 = document.getElementById(i5.videoTagId);
                if (null == n5 || !(n5 instanceof HTMLVideoElement)) return void Dc(e4, { code: 3237094400, description: "Didn't find video element for videoTagId: " + i5.videoTagId });
                t5.ce.push({ K: n5 });
              }
              if (t5.la.keyboardLayout = null !== (i4 = t5.la.keyboardLayout) && void 0 !== i4 ? i4 : y(e4.u) ? "m-us" : "en_US", void 0 !== t5.la.appLaunchMode && 0 !== t5.la.appLaunchMode || (t5.la.appLaunchMode = R() || P(e4.u) || "Xbox" === e4.u.os ? 1 : 0), ti) if (t5.la.metaData) for (const e5 in ti) t5.la.metaData[e5] = ti[e5];
              else t5.la.metaData = ti;
              void 0 !== zt && (t5.la.appLaunchMode = zt, d.d("{9d1820c}", "{c4969b1}", zt));
              const r3 = !!Li && !!xi, o2 = !!Qi;
              return (r3 || o2) && (null === (n4 = t5.la.streamParams) || void 0 === n4 || n4.forEach((e5) => {
                r3 && (e5.width = Li, e5.height = xi), o2 && (e5.fps = Qi);
              }), null === (s3 = t5.la.monitorSettings) || void 0 === s3 || s3.forEach((e5) => {
                r3 && (e5.widthInPixels = Li, e5.heightInPixels = xi), o2 && (e5.framesPerSecond = Qi);
              }), r3 && d.i("{9d1820c}", "{92a6b38}", Li, xi), o2 && d.d("{9d1820c}", "{6618bcd}", Qi)), e4.v = t5, e4.v;
            }
            function _c(e4, t5) {
              e4.D && (e4.D.stop(t5), e4.D = void 0);
            }
            function Uc(e4, t5, i4) {
              var n4, s3;
              t5 = { sessionId: t5, subSessionId: null !== (s3 = null === (n4 = e4.g) || void 0 === n4 ? void 0 : n4.getSubSessionId()) && void 0 !== s3 ? s3 : "", framesDecoded: e4.framesDecoded, error: i4 }, jc(e4), v(e4.u) && e4.l && (d.d("{9d1820c}", "{b9b1288}"), e4.setMicRecordingEnabled(false)), e4.emit("SessionStopResult", t5);
            }
            function jc(e4) {
              qi && (window.ios15AudioContext && (window.ios15AudioContext.close(), window.ios15AudioContext = void 0, d.i("{9d1820c}", "{0ac2a42}")), window.ios15AudioStream = void 0, navigator.mediaDevices && e4.O && navigator.mediaDevices.removeEventListener("devicechange", e4.O));
            }
            function Gc(e4, t5) {
              e4.P = false, t5.error && (e4.M = false, Lc(e4)), e4.emit("SessionStartResult", t5);
            }
            function Bc(e4, t5, i4, n4) {
              var s3, r3, o2, a2;
              jc(e4), n4 && (null !== (s3 = n4.connectivity) && void 0 !== s3 && s3.startsWith("offline") || null !== (r3 = n4.connectivity) && void 0 !== r3 && r3.startsWith("timeout") ? (Cc(e4), Mc(e4, g(null !== (a2 = null === (o2 = t5.error) || void 0 === o2 ? void 0 : o2.code) && void 0 !== a2 ? a2 : 15867911)), bc(e4.m).catch(() => {
                d.e("{9d1820c}", "{0c2de99}");
              })) : Tc(e4, n4)), _c(e4, t5.error ? t5.error.code : 15859712), i4 ? Gc(e4, t5) : (t5.error && (i4 = wn(t5.error.code, e4.u), t5.isResumable = i4, d.i("{9d1820c}", "{723f7be}", i4)), e4.M = false, e4.P = false, Lc(e4), e4.emit("StreamStopped", t5));
            }
            function Vc(e4, t5) {
              let i4 = { errorCode: null != t5 ? t5 : 15859712, connectivity: "online" };
              if (t5 && (!((3237093888 ^ t5) >> 8) || 3237089282 === t5)) {
                let n4 = 1500;
                Ci.connectivityCheckTimeout && 0 !== Ci.connectivityCheckTimeout && (n4 = Ci.connectivityCheckTimeout, d.i("{9d1820c}", "{f9909d8}", n4)), e4 = ("http:" === window.location.protocol ? "http://" : "https://") + e4.h.serverAddress, d.i("{9d1820c}", "{df38106}", e4);
                const s3 = performance.now();
                return x(e4, n4).then((e5) => (i4.connectivity = 200 <= e5.status && 300 > e5.status || 403 == e5.status ? "online(" + String(25 * Math.ceil((performance.now() - s3) / 25)) + ")" : "offline_wrong_status(" + String(e5.status) + ")", i4)).catch((e5) => ("AbortError" === e5.name ? i4.connectivity = "timeout" : (i4.connectivity = "offline(" + e5.name + ":" + e5.message + ")", i4.errorCode = An(t5)), i4));
              }
              return Promise.resolve(i4);
            }
            performance.mark("GfnRBegin");
            var Hc = o.LogImpl;
            function Wc(e4, t5, i4) {
              var n4;
              if (4 !== e4.streamingState && 0 !== e4.streamingState) {
                var s3 = e4.streamingState;
                e4.streamingState = 4, qd(e4.l), Eo(To, "HotPlug", "", 0, e4.o, 0, 0), v(e4.u) && e4.m && (d.d("{0a9be04}", "{b9b1288}"), e4.captureMic(false)), lo(e4.g), null === (n4 = e4.D) || void 0 === n4 || n4.stop(t5), Xd(e4.l, t5) && (t5 = Sn(t5, e4.u)), function(e5, t6) {
                  let i5 = { errorCode: null != t6 ? t6 : 15859712, connectivity: "online" };
                  if (t6 && (!((3237093888 ^ t6) >> 8) || 3237089282 === t6)) {
                    let n5 = 1500;
                    Ci.connectivityCheckTimeout && 0 !== Ci.connectivityCheckTimeout && (n5 = Ci.connectivityCheckTimeout, d.i("{0a9be04}", "{f9909d8}", n5)), e5 = ("http:" === window.location.protocol ? "http://" : "https://") + e5.zoneAddress, d.i("{0a9be04}", "{df38106}", e5);
                    const s4 = performance.now();
                    return x(e5, n5).then((e6) => (i5.connectivity = 200 <= e6.status && 300 > e6.status || 403 == e6.status ? "online(" + String(25 * Math.ceil((performance.now() - s4) / 25)) + ")" : "offline_wrong_status(" + String(e6.status) + ")", i5)).catch((e6) => ("AbortError" === e6.name ? i5.connectivity = "timeout" : (i5.connectivity = "offline(" + e6.name + ":" + e6.message + ")", i5.errorCode = An(t6)), i5));
                  }
                  return Promise.resolve(i5);
                }(e4, t5).then((n5) => {
                  if (t5 = n5.errorCode, 1 !== s3) {
                    var r3, o2, a2, d2, c2 = { code: t5, isResumable: wn(t5, e4.u), reason: 3 }, l2 = /* @__PURE__ */ new Set([3237093892, 15867907, 3237093896, 3237093897, 3237093898, 3237093899, 3237093900, 3237093895, 3237093901, 3237093906, 3237093929, 15867908, 15868418, 3237094151, 3237094158]);
                    i4 ? c2.reason = 0 : l2.has(t5) ? c2.reason = 2 : 15868672 == (268435200 & t5) && (c2.reason = 1), e4.h.onStreamStopped(c2), l2 = n5.connectivity, c2 = n5 = g(t5 || 15859712), null != l2 && l2.startsWith("online") && (c2 = null != l2 ? l2 : ""), l2 = performance.now() - e4.startTime;
                    const s4 = null !== (o2 = null === (r3 = e4.D) || void 0 === r3 ? void 0 : Vd(r3)) && void 0 !== o2 ? o2 : "UNKNOWN";
                    var u2, h2, p2;
                    r3 = null !== (d2 = null === (a2 = e4.D) || void 0 === a2 ? void 0 : Bd(a2)) && void 0 !== d2 ? d2 : 0, d2 = new go({ zoneAddress: (a2 = To).zoneAddress, sessionId: a2.sessionId, subSessionId: a2.subSessionId, resumeType: In(a2.isResume), cmsId: a2.cmsId, overrideConfigType: Ii.type, overrideConfigVersion: Ii.version, exitReason: c2, result: n5, frameCount: r3, codec: En(s4), ipVersion: "UNKNOWN", streamDuration: Math.round(l2), networkType: _(bo.getCurrentNetworkType()), streamingProfileGuid: null !== (u2 = a2.telemetryEventIds.streamingProfileGuid) && void 0 !== u2 ? u2 : "", systemInfoGuid: null !== (h2 = a2.telemetryEventIds.systemInfoGuid) && void 0 !== h2 ? h2 : "", networkSessionId: null !== (p2 = a2.telemetryEventIds.networkTestId) && void 0 !== p2 ? p2 : "" }), a2.h(d2, true);
                  }
                  var f2, v2, m2, A2;
                  zc(e4), Kc(e4), e4.D = void 0, e4.startTime = 0, e4.isResume = false, e4.P = void 0, e4.C = 0, e4.o = 0, e4.sessionId = "", e4.subSessionId = "", e4.zoneAddress = "", e4.zoneName = "", e4.K = void 0, e4.Ea = void 0, e4.m = false, e4.appId = 0, e4.setSupportedHidTypes(0), e4.setGamepadRsdmm(false), e4.l.sessionId = "", e4.l.subSessionId = "", u2 = null !== (v2 = null === (f2 = null == (h2 = window.zoneless) ? void 0 : h2.windowRemoveEventListener) || void 0 === f2 ? void 0 : f2.bind(window)) && void 0 !== v2 ? v2 : window.removeEventListener.bind(window), f2 = null !== (A2 = null === (m2 = null == h2 ? void 0 : h2.documentRemoveEventListener) || void 0 === m2 ? void 0 : m2.bind(document)) && void 0 !== A2 ? A2 : document.removeEventListener.bind(document), u2("pagehide", e4.M), u2("error", e4.L), f2("visibilitychange", e4.N), navigator.mediaDevices && navigator.mediaDevices.removeEventListener("devicechange", e4.F), S(e4.u) && (f2("SystemIdle", e4.I), Kc(e4));
                });
              }
            }
            function zc(e4) {
              qi && (window.ios15AudioContext && (window.ios15AudioContext.close(), window.ios15AudioContext = void 0, d.i("{0a9be04}", "{0ac2a42}")), window.ios15AudioStream = void 0, navigator.mediaDevices && e4.s && navigator.mediaDevices.removeEventListener("devicechange", e4.s));
            }
            function Kc(e4) {
              e4.v && (window.clearTimeout(e4.v), e4.v = 0);
            }
            performance.mark("GfnNskBegin");
            window.Ragnarok = window.Ragnarok || {}, window.Ragnarok.GridApp = class extends Ce {
              constructor(e4) {
                super(), this.u = e4, this.l = this.Z = false, this.da = new Zd(), this.P = false, this.O = this.W = void 0, this.fa = false, this.R = this.L = this.T = this.I = 0, this.aa = this.M = false, this.o = 0, d.isCallbackRegistered() || d.setLogCallback(this.$.bind(this)), this.h = { clientIdentification: "GFN-PC", clientVersion: "29.0", deviceHashId: "", serverAddress: "" }, this.startTime = performance.now(), this.ja = this.ra.bind(this), this.ea = this.xa.bind(this), this.ka = this.Da.bind(this), this.ya = this.qa.bind(this), this.framesDecoded = 0, this.m = new class {
                  constructor() {
                    this.h = { userId: "", sessionId: "", eventPayload: void 0, name: "" }, this.g = {}, this.v = this.F = this.s = this.o = false, this.I = "", this.C = [], this.j = false, this.l = new class {
                      constructor() {
                        this.l = window.indexedDB, this.version = 2, this.j = this.h = false, this.name = "ragnarok", this.m = [{ Yf: "exit-events", pd: { keyPath: ["userId", "sessionId", "name"] }, Xf: "exit-event-index" }, { Yf: "telemetry-events", pd: { keyPath: ["userId", "sessionId", "name", "eventPayload.ts"] }, Xf: "telemetry-event-index" }];
                      }
                      open() {
                        return new Promise((e5, t5) => {
                          try {
                            if (this.l) {
                              let i4 = this.l.open(this.name, this.version);
                              i4.onerror = () => {
                                t5(F(18, `${this.name} db opening failed`, i4.error));
                              }, i4.onsuccess = () => {
                                sc(this, i4.result), e5();
                              }, i4.onupgradeneeded = (e6) => {
                                d.i("{10dc2cc}", "{1f70767}", e6.oldVersion, e6.newVersion), sc(this, i4.result);
                                const t6 = (e7) => {
                                  var t7;
                                  const i5 = null === (t7 = this.g) || void 0 === t7 ? void 0 : t7.createObjectStore(e7.Yf, e7.pd);
                                  e7.pd.keyPath && (null == i5 || i5.createIndex(e7.Xf, e7.pd.keyPath, { unique: true }));
                                };
                                switch (e6.oldVersion) {
                                  case 0:
                                    t6(this.m[0]);
                                  case 1:
                                    t6(this.m[1]);
                                }
                              }, i4.onblocked = () => {
                                t5(F(19, `${this.name} db blocked during opening`, i4.error));
                              };
                            } else t5(F(17, "Indexdb object not found"));
                          } catch (e6) {
                            t5(F(20, "Unexpected Exception in open", e6));
                          }
                        });
                      }
                      get(e5, t5) {
                        const i4 = rc(this);
                        return i4 ? Promise.reject(i4) : new Promise((i5, n4) => {
                          try {
                            const s3 = this.g.transaction(e5, "readonly"), r3 = s3.objectStore(e5);
                            s3.oncomplete = () => {
                              d.i("{10dc2cc}", "{82638ba}");
                            };
                            const o2 = r3.get(t5);
                            o2.onsuccess = () => {
                              i5(o2.result);
                            }, o2.onerror = () => {
                              n4(F(32, "get method failed", s3.error));
                            };
                          } catch (e6) {
                            n4(F(33, "Unexpected Exception happened in get", e6));
                          }
                        });
                      }
                      set(e5, t5) {
                        const i4 = rc(this);
                        return i4 ? Promise.reject(i4) : new Promise((i5, n4) => {
                          try {
                            const s3 = this.g.transaction(e5, "readwrite"), r3 = s3.objectStore(e5);
                            s3.oncomplete = () => {
                              d.i("{10dc2cc}", "{f993875}");
                            };
                            const o2 = r3.put(t5);
                            o2.onsuccess = () => {
                              i5();
                            }, o2.onerror = () => {
                              n4(F(48, "put method failed", s3.error));
                            };
                          } catch (e6) {
                            n4(F(49, "Unexpected Exception happened in set", e6));
                          }
                        });
                      }
                      close() {
                        var e5;
                        this.h = true, null === (e5 = this.g) || void 0 === e5 || e5.close();
                      }
                    }(), this.m = this.l.open().catch((e5) => {
                      this.j = true, pc(this, e5, "TelemetryEventProcessorConstruction", true);
                    });
                  }
                  updateEventDataElements(e5) {
                    var t5;
                    if (vc(this.g, e5), this.g.commonData) {
                      d.d("{f7c1592}", "{66f209c}");
                      for (let e6 of this.C) dc(this, e6);
                      this.C = [];
                    }
                    this.h.userId = null === (t5 = this.g.commonData) || void 0 === t5 ? void 0 : t5.userId;
                  }
                }(), this.G = new ko(this, this.m), this.F = new Qd(this.G), this.isResume = false, this.N = Nt, this.ca = new nc(), window.addEventListener("error", this.ya), e4 = window.zoneless, this.j = new po(this.u, this.G), this.O = this.j.j.bind(this.j), this.W = this.na.bind(this), this.C = new Gs(this.u, e4), Hi && (this.C.l.push(this.da), _s(this.C)), this.ga = this.oa.bind(this), ge(this.G), function(e5) {
                  var t5, i4, n4;
                  if (Ci.sendNonEssentialMetricEvents) {
                    var s3 = performance.getEntriesByName("GfnJsInitStart")[0];
                    const r3 = performance.getEntriesByName("platformBegin")[0], o2 = performance.getEntriesByName("GfnRBegin")[0], a2 = performance.getEntriesByType("navigation");
                    s3 = Math.round(null !== (t5 = null == s3 ? void 0 : s3.startTime) && void 0 !== t5 ? t5 : -1), t5 = Math.round(null !== (i4 = null == r3 ? void 0 : r3.startTime) && void 0 !== i4 ? i4 : -1), Eo(e5.G, "PerformanceTiming", "application timings", s3, t5, Math.round(null !== (n4 = null == o2 ? void 0 : o2.startTime) && void 0 !== n4 ? n4 : -1), t5 - s3), a2.length ? (i4 = a2[a2.length - 1], Eo(e5.G, "PerformanceTiming", "load timings", Math.round(i4.loadEventStart), Math.round(i4.loadEventEnd), Math.round(i4.domContentLoadedEventStart), Math.round(i4.domContentLoadedEventEnd))) : Eo(e5.G, "PerformanceTiming", "navigation timings unsupported", 0, 0, 0, 0);
                  }
                }(this), function(e5) {
                  if (navigator.mediaCapabilities) {
                    var t5 = performance.now();
                    Fo("h264").then(async (i4) => {
                      if (i4) {
                        i4 = Fo("h264; profile-level-id=640033", 2560, 1440, 60);
                        var n4 = Fo("h264; profile-level-id=64e033", 2560, 1440, 60);
                        i4 = xo(await i4), n4 = xo(await n4);
                        const o2 = performance.now() - t5;
                        var s3 = _o(), r3 = Fo("h264", 1920, 1080, 120);
                        s3 = xo(await s3), r3 = xo(await r3);
                        const a2 = await Uo(Go), c2 = await jo();
                        d.d("{9d1820c}", "{1efbc27}", a2, c2), Eo(e5.G, "DisplayCaps", "Is120FpsSupported: " + c2, a2, 0, 0, 0), Eo(e5.G, "MediaCapabilities", "codec 5.1: " + i4 + " 5.1 constrained: " + n4 + " AV1: " + s3, o2, r3, i4 | n4, Math.round(window.screen.height));
                      } else Eo(e5.G, "MediaCapabilities", "webrtc unsupported", performance.now() - t5, -1, -1, -1);
                    });
                  } else Eo(e5.G, "MediaCapabilities", "API unsupported", -1, -1, -1, -1);
                }(this), Ci.sendNonEssentialMetricEvents && Eo(this.G, "PlatformDetailsExecutionTime", "", this.u.totalTime, 0, 0, 0), bo.registerCallback((e5) => {
                  var t5;
                  null === (t5 = this.g) || void 0 === t5 || t5.setNetworkType(e5);
                }), "VISIONPRO" === this.u.deviceModel && (yi = true, sn());
              }
              qa(e4) {
                var t5;
                return d.e("{9d1820c}", "{8516485}", e4.filename, e4.lineno, e4.colno), this.G.za(e4.error, e4.error && e4.error.message ? e4.error.message : e4.message, e4.filename, e4.lineno, e4.colno, false), (null === (t5 = Ci.terminateUnhandledException) || void 0 === t5 || t5) && Ec(this, 3237093392), false;
              }
              ra() {
                var e4, t5;
                this.fa || (this.fa = true, Ec(this, (null !== (e4 = this.S) && void 0 !== e4 ? e4 : null !== (t5 = this.D) && void 0 !== t5 && t5.H) ? 15867912 : 15867905));
              }
              xa() {
                d.i("{9d1820c}", "{a9a135f}"), wc(this.m);
              }
              Da() {
                var e4;
                if (d.i("{9d1820c}", "{478a408}", document.visibilityState, !!this.D), this.D) {
                  var t5 = this.v.ce[0].K, i4 = N(this.u, false, 15, 4) && Xi, n4 = N(this.u, false, 15, 4) && this.l && Ji;
                  "hidden" === document.visibilityState ? (this.L = performance.now(), i4 && (d.i("{9d1820c}", "{cbd3b6e}"), t5.muted = true), Rc(this)) : "visible" === document.visibilityState && (this.o += performance.now() - this.L, i4 && (d.i("{9d1820c}", "{05deefa}"), t5.muted = false), n4 ? (t5 = null !== (e4 = Ci.userTerminatedMicRecorderThreshold) && void 0 !== e4 ? e4 : 2e3, this.L - this.j.O < t5 ? (d.i("{9d1820c}", "{862bd20}"), this.j.I = true, this.setMicRecordingEnabled(true)) : this.l = false) : N(this.u, false, 15, 4) && !this.j.o && uo(this.j) && this.j.F && so(this.j, "visibilityChange"));
                }
              }
              wa(e4) {
                d.d("{9d1820c}", "{972bb72}", JSON.stringify(e4)), Io(this.G, e4);
              }
              ta(e4) {
                this.emit("ActiveSessionsResult", e4);
              }
              ua(e4) {
                this.emit("ProgressUpdate", e4);
              }
              va(e4) {
                this.emit("SessionUpdate", e4);
              }
              initialize(e4, t5 = Nt) {
                var i4, n4, s3, r3, o2, a2, c2, l2, u2, h2, p2, f2, v2, g2;
                if (d.i("{9d1820c}", "{2569364}", "0.66.9"), d.d("{9d1820c}", "{e85ad66}", navigator.userAgent), !e4) return d.e("{9d1820c}", "{a98b177}"), false;
                Object.assign(this.h, e4), null === (i4 = this.g) || void 0 === i4 || i4.uninitialize(), !this.h.serverAddress || m(this.h.serverAddress) ? (d.d("{9d1820c}", "{e2d9a04}"), this.g = new Dt()) : this.g = new Pt(this.u, true), e4 = this.g, d.d("{9d1820c}", "{3c652b7}"), yc(this), e4.addListener("TelemetryEvent", this.wa.bind(this)), e4.addListener("Log", this.$.bind(this)), e4.addListener("ActiveSessionsResult", this.ta.bind(this)), e4.addListener("ProgressUpdate", this.ua.bind(this)), e4.addListener("SessionUpdate", this.va.bind(this)), this.h.clientHeaders = null !== (l2 = this.h.clientHeaders) && void 0 !== l2 ? l2 : /* @__PURE__ */ new Map(), (i4 = "NATIVE" !== (l2 = Jt || this.h.clientType || "BROWSER")) && this.h.clientHeaders.set("nv-browser-version", this.u.browserFullVer);
                var A2 = this.h.clientHeaders;
                for (var [S2] of A2) {
                  const e5 = S2;
                  Kt && "nv-device-os" === e5.toLowerCase() && A2.set(e5, Kt), qt && "nv-device-type" === e5.toLowerCase() && A2.set(e5, qt), en.deviceModel && "nv-device-model" === e5.toLowerCase() && A2.set(e5, en.deviceModel), $t && "nv-client-streamer" === e5.toLowerCase() && A2.set(e5, $t), Qt && "nv-client-id" === e5.toLowerCase() && A2.set(e5, Qt);
                }
                return S2 = { deviceOs: null !== (u2 = Kt) && void 0 !== u2 ? u2 : this.u.deviceOS, deviceOsVer: this.u.osVer, deviceType: null !== (h2 = qt) && void 0 !== h2 ? h2 : this.u.deviceType, deviceModel: null !== (p2 = en.deviceModel) && void 0 !== p2 ? p2 : this.u.deviceModel, clientIdentification: null !== (f2 = this.h.clientIdentification) && void 0 !== f2 ? f2 : "GFN-PC", clientVersion: null !== (v2 = this.h.clientVersion) && void 0 !== v2 ? v2 : "29.0", clientAppVersion: this.h.clientAppVersion, clientStreamer: null !== (g2 = $t) && void 0 !== g2 ? g2 : "WEBRTC", clientId: Qt || this.h.clientId, browserType: i4 ? this.u.browser.toUpperCase() : void 0, clientPlatformName: Xt || "browser", clientType: l2, deviceHashId: this.h.deviceHashId, serverAddress: this.h.serverAddress, authTokenCallback: this.h.authTokenCallback, clientHeaders: this.h.clientHeaders }, e4.initialize(S2), e4.setNetworkType(bo.getCurrentNetworkType()), this.N = { ...t5 }, null !== (n4 = (o2 = this.N).windowedStreaming) && void 0 !== n4 || (o2.windowedStreaming = this.h.windowedStreaming), null !== (s3 = (a2 = this.N).windowedStreaming) && void 0 !== s3 || (a2.windowedStreaming = 2 === t5.cursorType), null !== (r3 = (c2 = this.N).cursorType) && void 0 !== r3 || (c2.cursorType = this.h.cursorType), this.G.clientShutDownCallback = this.h.clientShutDownCallback, true;
              }
              downloadAudio() {
                this.ca.downloadAudio();
              }
              updateEventDataElements(e4) {
                var t5;
                d.i("{9d1820c}", "{4008dc4}", JSON.stringify(e4)), this.m.updateEventDataElements(e4), e4.telemetryEventIds && (null === (t5 = this.g) || void 0 === t5 || t5.updateTelemetryEventIds(e4.telemetryEventIds)), this.D && !this.P && Rc(this);
              }
              getActiveSessions() {
                this.g ? this.g.getAllActiveSessions() : this.emit("ActiveSessionsResult", { sessionList: [], error: kc("ActiveSessions") });
              }
              startSession(e4) {
                xc(this, false), (e4 = Fc(this, e4)) && Oc(this, 0, e4);
              }
              updateAdState(e4) {
                var t5;
                return this.g ? null === (t5 = this.g) || void 0 === t5 ? void 0 : t5.updateAdState(e4) : 3237093380;
              }
              getSession(e4) {
                this.g ? this.g.getSession(e4, false).then((e5) => {
                  var t5, i4;
                  let n4 = { sessionId: null !== (t5 = null == e5 ? void 0 : e5.sessionId) && void 0 !== t5 ? t5 : "", appId: null == e5 ? void 0 : e5.appId, subSessionId: null !== (i4 = null == e5 ? void 0 : e5.subSessionId) && void 0 !== i4 ? i4 : "", state: null == e5 ? void 0 : e5.state, status: null == e5 ? void 0 : e5.state };
                  this.emit("GetSessionResult", n4);
                }).catch((t5) => {
                  var i4, n4;
                  let s3 = { sessionId: e4, subSessionId: null !== (n4 = null === (i4 = this.g) || void 0 === i4 ? void 0 : i4.getSubSessionId()) && void 0 !== n4 ? n4 : "", error: t5 };
                  this.emit("GetSessionResult", s3);
                }) : this.emit("GetSessionResult", { sessionId: "", subSessionId: "", error: kc("GetSession") });
              }
              resume() {
                this.resumeSession(this.v.la, this.g.getSessionId());
              }
              resumeSession(e4, t5) {
                xc(this, true), (e4 = Fc(this, e4)) && Oc(this, 2, e4, t5);
              }
              stopSession(e4, t5) {
                var i4, n4, s3, r3, o2, a2, c2;
                this.g ? (void 0 !== t5 && d.i("{9d1820c}", "{ae7f61b}", g(t5)), e4 === this.g.getSessionId() || void 0 === e4 ? (15867910 === t5 ? this.aa = true : this.Z = false, lo(this.j), this.framesDecoded = null !== (n4 = null === (i4 = this.D) || void 0 === i4 ? void 0 : Bd(i4)) && void 0 !== n4 ? n4 : 0, qd(this.F), i4 = Ic(this, { sessionId: null !== (s3 = this.g.getSessionId()) && void 0 !== s3 ? s3 : "", subSessionId: null !== (r3 = this.g.getSubSessionId()) && void 0 !== r3 ? r3 : "", error: t5 ? { code: t5 } : void 0, zoneName: null !== (o2 = this.g.getZoneName()) && void 0 !== o2 ? o2 : "", zoneAddress: this.g.getZoneAddress() || this.h.serverAddress, gpuType: null !== (a2 = this.g.getGpuType()) && void 0 !== a2 ? a2 : "", isResume: this.isResume }, performance.now() - this.startTime), e4 = null !== (c2 = this.g.getSessionId()) && void 0 !== c2 ? c2 : "", this.D ? (this.M = false, Lc(this), this.D.H && Tc(this, i4), _c(this, null != t5 ? t5 : this.D.H ? 15859712 : 15867905), 15867910 === t5 ? (d.d("{9d1820c}", "{12bc45e}", e4), Uc(this, e4)) : this.sendDeleteRequest(e4, this.g)) : this.H ? Uc(this, e4) : this.cancelSessionSetup()) : e4 && this.sendDeleteRequest(e4, this.g)) : this.emit("SessionStopResult", { sessionId: "", subSessionId: "", error: kc("StopSession") });
              }
              pauseSession(e4) {
                this.stopSession(e4, 15867910);
              }
              startStreaming(e4) {
                var t5, i4, n4, s3;
                const r3 = { sessionId: null !== (i4 = null === (t5 = this.g) || void 0 === t5 ? void 0 : t5.getSessionId()) && void 0 !== i4 ? i4 : "", subSessionId: null !== (s3 = null === (n4 = this.g) || void 0 === n4 ? void 0 : n4.getSubSessionId()) && void 0 !== s3 ? s3 : "", progressState: "StartingStreamer", queuePosition: 0, eta: 0, ads: [] };
                this.emit("SessionUpdate", r3), this.emit("ProgressUpdate", { ...r3, state: r3.progressState }), t5 = m(this.h.serverAddress) ? "" : this.h.serverAddress.split(".")[0];
                const { K: o2 } = e4.ce[0];
                if (N(this.u, false, 15)) {
                  o2.ragnarokOldPlay || (o2.ragnarokOldPlay = o2.play);
                  const e5 = Ki && N(this.u, true, 15, 1);
                  o2.play = () => {
                    if (qi && (d.i("{9d1820c}", "{4a5b360}"), jc(this), function(e6) {
                      if (qi) if (window.ios15AudioContext) d.i("{9d1820c}", "{e2aba64}");
                      else {
                        var t6 = new (window.AudioContext || window.webkitAudioContext)({ latencyHint: "interactive", sampleRate: 48e3 });
                        t6.onstatechange = () => {
                          "suspended" === t6.state && (t6.resume(), e6.j.j(), d.i("{9d1820c}", "{faee684}"));
                        }, window.ios15AudioContext = t6, window.ios15AudioStream = t6.createMediaStreamDestination(), navigator.mediaDevices && e6.O && navigator.mediaDevices.addEventListener("devicechange", e6.O), d.i("{9d1820c}", "{b5f7b9b}");
                      }
                    }(this), this.j.j()), e5) {
                      d.i("{9d1820c}", "{8f5cd77}");
                      const e6 = o2.srcObject;
                      o2.srcObject = null, o2.srcObject = e6;
                    }
                    return o2.ragnarokOldPlay.apply(o2);
                  };
                }
                $i && (N(this.u, true, 15, 0) || N(this.u, true, 15, 1)) && (o2.hasAttribute("data-shouldautoplay") ? o2.setAttribute("autoplay", "") : (o2.setAttribute("data-shouldautoplay", ""), o2.removeAttribute("autoplay"))), this.D = new Hd(this, o2, void 0, this.j, this.N, this.da, this.C, this.G, this.u, this.H, e4.la.streamParams[0], this.ca, this.h.textInputElement, this.h.clientAppVersion, this.isResume, t5, void 0, void 0, e4.la.signalingUrlQueryParameters), this.D.start(), e4.la.keyboardLayout && this.D.setKeyboardLayout(e4.la.keyboardLayout), function(e5) {
                  return e5.clientShutDownCallback ? (d.d("{9838627}", "{c7dcc4e}"), function(e6) {
                    return e6.j ? Promise.resolve([]) : e6.m.then(() => ac(e6.l, "exit-events")).then((e7) => {
                      d.i("{f7c1592}", "{d938300}", e7.length);
                      let t6 = [];
                      if (0 < e7.length) for (const i5 of e7) i5.eventPayload && t6.push(i5.eventPayload);
                      return t6;
                    }).catch((t6) => (pc(e6, t6, "getCachedExitEvents", true), Promise.reject()));
                  }(e5.j).then((t6) => {
                    for (const i5 of t6) Ro(e5, i5);
                    hc(e5.j);
                  }).catch(() => {
                    d.d("{9838627}", "{41cf828}");
                  })) : (d.d("{9838627}", "{77df598}"), function(e6) {
                    return e6.j ? Promise.resolve() : e6.m.then(() => ac(e6.l, "exit-events")).then((t6) => {
                      if (d.i("{f7c1592}", "{ca568ff}", t6.length), 0 < t6.length) {
                        for (const i5 of t6) i5.eventPayload && Ac(fc(e6, i5.eventPayload));
                        hc(e6);
                      }
                    }).catch((t6) => {
                      pc(e6, t6, "sendCachedExitEvent", true);
                    });
                  }(e5.j));
                }(this.G).then(() => {
                  Rc(this);
                }).catch(() => {
                  d.e("{9d1820c}", "{c761bfd}");
                });
              }
              Gc(e4, t5) {
                var i4, n4, s3, r3, o2, a2, d2;
                if (e4.error) {
                  const n5 = Xd(this.F, e4.error.code);
                  n5 && (e4.error.code = Sn(e4.error.code, this.u)), Vc(this, null === (i4 = e4.error) || void 0 === i4 ? void 0 : i4.code).then((i5) => {
                    var s4, r4, o3;
                    this.framesDecoded = null !== (r4 = null === (s4 = this.D) || void 0 === s4 ? void 0 : Bd(s4)) && void 0 !== r4 ? r4 : 0, e4.zoneAddress || (e4.zoneAddress = this.h.serverAddress), e4.error && (e4.error.code = i5.errorCode), s4 = void 0, t5 || (s4 = Ic(this, e4, 0, i5.connectivity, n5), this.S = null === (o3 = e4.error) || void 0 === o3 ? void 0 : o3.code), Bc(this, e4, true, s4);
                  });
                } else (function(e5, t6, i5, n5, s4, r4, o3, a3, d3, c2) {
                  Io(e5, { name: (t6 = new mo({ zoneAddress: s4, networkSessionId: c2, sessionId: t6, subSessionId: i5, resumeType: In(n5), overrideConfigType: Ii.type, overrideConfigVersion: Ii.version, result: o3, codec: En(a3), ipVersion: "UNKNOWN", launchDuration: Math.round(r4), networkType: _(bo.getCurrentNetworkType()), streamingProfileGuid: cc(e5.j), systemInfoGuid: lc(e5.j), cmsId: d3 })).name, gdprLevel: t6.gdprLevel, parameters: t6.parameters, ts: t6.ts, clientConfig: vo });
                })(this.G, e4.sessionId, e4.subSessionId, this.isResume, e4.zoneAddress || this.h.serverAddress, Math.round(performance.now() - this.startTime), g(15859712), null !== (s3 = null === (n4 = this.D) || void 0 === n4 ? void 0 : Vd(n4)) && void 0 !== s3 ? s3 : "UNKNOWN", this.v ? String(null === (r3 = this.v) || void 0 === r3 ? void 0 : r3.la.appId) : "", null !== (a2 = null === (o2 = this.v) || void 0 === o2 ? void 0 : o2.la.networkSessionId) && void 0 !== a2 ? a2 : ""), this.startTime = performance.now(), "hidden" === document.visibilityState && (this.L = this.startTime), this.o = 0, this.isResume && this.l && this.setMicRecordingEnabled(true), Gc(this, e4), this.Z && (null === (d2 = this.D) || void 0 === d2 || d2.toggleUserInput(true, this.pa)), S(this.u) && document.addEventListener("SystemIdle", this.ga);
              }
              Cf(e4) {
                var t5, i4, n4;
                lo(this.j), d.d("{9d1820c}", "{a94b484}");
                let s3 = Xd(this.F, e4.error.code);
                s3 && (e4.error.code = Sn(e4.error.code, this.u)), this.framesDecoded = null !== (i4 = null === (t5 = this.D) || void 0 === t5 ? void 0 : Bd(t5)) && void 0 !== i4 ? i4 : 0, e4.zoneAddress || (e4.zoneAddress = this.h.serverAddress), Vc(this, null === (n4 = e4.error) || void 0 === n4 ? void 0 : n4.code).then((t6) => {
                  var i5;
                  e4.error.code = t6.errorCode, t6 = Ic(this, e4, performance.now() - this.startTime, t6.connectivity, s3), this.S = null === (i5 = e4.error) || void 0 === i5 ? void 0 : i5.code, Eo(this.G, "HotPlug", "", 0, this.R, 0, 0), this.R = 0, Bc(this, e4, false, t6);
                });
              }
              Df() {
                Nc(this);
              }
              sendDeleteRequest(e4, t5) {
                t5.sendDeleteRequest(e4).then(() => {
                  d.d("{9d1820c}", "{fee1eea}", e4), Uc(this, e4);
                }, (t6) => {
                  d.e("{9d1820c}", "{50e2a6e}", e4), Uc(this, e4, t6);
                });
              }
              isMicSupported() {
                return fo;
              }
              setMicRecordingEnabled(e4) {
                d.i("{9d1820c}", "{f5b2f30}", e4), e4 ? (this.l = true, oo(this.j)) : (this.l = false, no(this.j));
              }
              getMicState() {
                var e4;
                e4 = this.j, false !== Gt && (e4.v || 3 == e4.h || 2 == e4.h || 6 == e4.h || 7 == e4.h ? io(e4, e4.h) : to().then((t5) => {
                  0 !== t5 && io(e4, t5);
                }));
              }
              shouldDefaultEnableMic() {
                return Do(this.u);
              }
              sendCustomMessage(e4) {
                var t5;
                null === (t5 = this.D) || void 0 === t5 || t5.sendCustomMessage(e4);
              }
              toggleUserInput(e4, t5) {
                var i4;
                null === (i4 = this.D) || void 0 === i4 || i4.toggleUserInput(e4, t5), this.Z = e4, this.pa = t5;
              }
              toggleRsdmm(e4) {
                ms(this.C, e4);
              }
              getVirtualGamepadHandler() {
                var e4;
                return null === (e4 = this.D) || void 0 === e4 ? void 0 : e4.getVirtualGamepadHandler();
              }
              setAuthInfo(e4) {
                var t5;
                null === (t5 = this.g) || void 0 === t5 || t5.setAuthInfo(e4);
              }
              sendTextInput(e4) {
                var t5;
                null === (t5 = this.D) || void 0 === t5 || t5.sendTextInput(e4);
              }
              setVirtualKeyboardState(e4) {
                var t5;
                null === (t5 = this.D) || void 0 === t5 || t5.setVirtualKeyboardState(e4);
              }
              setVideoTransforms(e4, t5, i4) {
                var n4;
                null === (n4 = this.D) || void 0 === n4 || n4.setVideoTransforms(e4, t5, i4);
              }
              toggleOnScreenStats() {
                var e4;
                jt && (null === (e4 = this.D) || void 0 === e4 || e4.toggleOnScreenStats());
              }
              toggleStutterIndicator() {
                var e4;
                null === (e4 = this.D) || void 0 === e4 || e4.toggleStutterIndicator();
              }
              setKeyboardLayout(e4) {
                var t5;
                d.i("{9d1820c}", "{10717a6}", e4), null === (t5 = this.D) || void 0 === t5 || t5.setKeyboardLayout(e4);
              }
              sendKeyEvent(e4) {
                var t5;
                null === (t5 = this.D) || void 0 === t5 || t5.sendKeyEvent(e4);
              }
              setStreamingMaxBitrate(e4, t5 = 0) {
                var i4;
                null === (i4 = this.D) || void 0 === i4 || i4.setStreamingMaxBitrate(t5, e4);
              }
              setDrcDfcState(e4, t5 = 0) {
                var i4;
                null === (i4 = this.D) || void 0 === i4 || i4.setDrcDfcState(t5, e4 ? 3 : 0);
              }
              oa(e4) {
                var t5;
                e4.detail.idle && (null === (t5 = this.D) || void 0 === t5 || Od(t5, 2, 60), this.T = window.setTimeout(() => {
                  var e5;
                  null === (e5 = this.D) || void 0 === e5 || Ed(e5, 15867913);
                }, 6e4));
              }
              na() {
                ho(this.j, this.R), this.R++;
              }
              cancelSessionSetup() {
                !this.D && this.g && this.g.cancelSessionSetup();
              }
            }, window.Ragnarok.ChooseStreamingSettings = function(e4 = 0, t5, i4) {
              return pn(e4, t5, fn(i4));
            }, window.Ragnarok.ChooseStreamingResolution = function(e4 = 0, t5) {
              return pn(e4, t5 = null == t5 ? void 0 : t5.map((e5) => ({ resolution: e5, frameRate: 60 })), fn()).resolution;
            }, window.Ragnarok.InitializeUtils = function() {
              for (const e4 of Rn) e4();
            }, window.Ragnarok.GetSupportedAudioChannelCount = un, window.Ragnarok.GetDeviceCapabilities = No, window.Ragnarok.getSupportedCodecs = Bo, window.Ragnarok.VirtualButton = { A: 4096, B: 8192, X: 16384, Y: 32768, LB: 256, RB: 512, LT: 255, RT: 65280, BACK: 32, START: 16, STICK_LEFT: 64, STICK_RIGHT: 128, DPAD_UP: 1, DPAD_DOWN: 2, DPAD_LEFT: 4, DPAD_RIGHT: 8 }, window.Ragnarok.VirtualGamepadHandler = is, window.Ragnarok.ConfigureRagnarokSettings = nn, window.Ragnarok.CHANGELIST = "rel-66-17789033", window.Ragnarok.AuthType = { NONE: -1, JARVIS: 0, JWT_GFN: 1, JWT_PARTNER: 2 }, window.Ragnarok.performHttpRequest = I, window.Ragnarok.AddPlatformTelemetry = function(e4) {
              ge(e4);
            }, window.Ragnarok.IsFeatureSupported = Po, window.Ragnarok.CalculateMaxBitrateKbps = function(e4, t5, i4) {
              return Oo(e4, t5, i4)[0];
            }, window.Ragnarok.CalculateDataUsage = function(e4, t5) {
              return Mo(e4, t5);
            }, window.Ragnarok.LogImpl = Hc, window.Ragnarok.EVENTS = { SESSION_START_RESULT: "SessionStartResult", SESSION_STOP_RESULT: "SessionStopResult", ACTIVE_SESSIONS_RESULT: "ActiveSessionsResult", PROGRESS_UPDATE: "ProgressUpdate", SESSION_UPDATE: "SessionUpdate", STREAM_STOPPED: "StreamStopped", STREAMING_EVENT: "StreamingEvent", GETSESSIONRESULT: "GetSessionResult", GET_SESSION_RESULT: "GetSessionResult", LOG_EVENT: "Log", STREAMING_QUALITY: "StreamingQuality", MIC_CAPTURE: "MicCapture", CUSTOM_MESSAGE: "CustomMessage", TEXT_COMPOSITION: "TextComposition", STREAM_STATS_UPDATE: "StreamStatsUpdate", TELEMETRY_EVENT: "TelemetryEvent" }, window.Ragnarok.HotkeyModifier = { None: 0, Ctrl: 1, Alt: 2, Meta: 4, Shift: 8, Default: 128 }, window.Ragnarok.defaultInputConfigFlags = Nt, window.Ragnarok.StreamingProfilePreset = { BALANCED: 0, DATASAVER: 1, COMPETITIVE: 2 }, window.Ragnarok.TrackType = Ot, window.Ragnarok.STREAMING_STATE = { RECONNECTING: "reconnecting", RECONNECTED: "reconnected" }, window.Ragnarok.RNotificationCode = Mt, window.Ragnarok.ScErrorCode = yt, window.Ragnarok.configureSessionControlSettings = qe, window.Ragnarok.DeviceType = { DESKTOP: "DESKTOP", LAPTOP: "LAPTOP", TV: "TV", PHONE: "PHONE", TABLET: "TABLET", CONSOLE: "CONSOLE" }, window.Ragnarok.DeviceOS = { WINDOWS: "WINDOWS", MACOS: "MACOS", SHIELD: "SHIELD", ANDROID: "ANDROID", IOS: "IOS", IPADOS: "IPADOS", CHROMEOS: "CHROMEOS", LINUX: "LINUX", TIZEN: "TIZEN", WEBOS: "WEBOS", TVOS: "TVOS", XBOX: "XBOX", STEAMOS: "STEAMOS", CCOS: "CCOS" }, window.Ragnarok.NetworkType = { OTHER: "OTHER", ETHERNET: "ETHERNET", UNKNOWN: "UNKNOWN", WIFI: "WIFI", WIFI_2_4: "WIFI_2_4", WIFI_5_0: "WIFI_5_0", MOBILE: "MOBILE", MOBILE_2G: "MOBILE_2G", MOBILE_3G: "MOBILE_3G", MOBILE_4G: "MOBILE_4G", MOBILE_5G: "MOBILE_5G", WIMAX: "WIMAX", BLUETOOTH: "BLUETOOTH" }, window.Ragnarok.registerLogCallback = function(e4) {
              d.setLogCallback(e4);
            }, window.Ragnarok.LogLevel = Et, window.Ragnarok.createSessionControl = function(e4) {
              const t5 = new bt();
              if (ot(t5, e4)) return t5;
              throw Error("Session Control initialization failure.");
            }, window.Ragnarok.SdrHdrMode = { SDR: 0, HDR: 1, EDR: 2 }, window.Ragnarok.Usage = { UNKNOWN: 0, CONTROL: 1, VIDEO: 2, AUDIO: 3, INPUT: 4, CUSTOM: 5, USB: 6, RTSP: 7, GAMESTREAM_CONTROL: 8, GAMESTREAM_SECURE_CONTROL: 9, SESSION_CONTROL: 10, NETWORK_TEST_CONTROL: 11, RTSPRU: 12, AUDIO_INPUT: 13, SIGNALING: 14, MEDIA: 15, RTSPS: 16, BUNDLE: 17 }, window.Ragnarok.Protocol = { UNKNOWN: 0, TCP: 1, UDP: 2 }, window.Ragnarok.AppLevelProtocol = { UNKNOWN: 0, RTSP: 1, HTTP: 2, RTSPRU: 3, SOCKET: 4, HTTPS: 5, RTSPS: 6 }, window.Ragnarok.AdState = { UNKNOWN: 0, NOT_STARTED: 1, STARTED: 2, PAUSED: 3, RESUMED: 4, FINISHED: 5, CANCELED: 6 }, window.Ragnarok.AdAction = { UNKNOWN: 0, START: 1, PAUSE: 2, RESUME: 3, FINISH: 4, CANCEL: 5 }, window.Ragnarok.BitDepth = { BIT_DEPTH_8: 0, BIT_DEPTH_10: 1 }, window.Ragnarok.ClientType = { BROWSER: "BROWSER", GFNSDK: "GFNSDK", NATIVE: "NATIVE" }, window.Ragnarok.SessionState = { INITIALIZING: "initializing", READY_FOR_CONNECTION: "ready_for_connection", STREAMING: "streaming", PAUSED: "paused", RESUMING: "resuming", FINISHED: "finished", UNKNOWN: "unknown" }, window.Ragnarok.SessionProgressState = { CONNECTING: "Connecting", IN_QUEUE: "InQueue", CONFIGURING: "Configuring", PREVIOUS_SESSION_CLEANUP: "PreviousSessionCleanup", STARTING_STREAMER: "StartingStreamer" }, window.Ragnarok.AppLaunchMode = { Default: 0, GamepadFriendly: 1, TouchFriendly: 2 }, window.Ragnarok.updateSessionParameters = function(e4, t5) {
              var i4;
              t5 = JSON.parse(t5), e4.monitorSettings = null !== (i4 = t5.clientRequestMonitorSettings) && void 0 !== i4 ? i4 : [], e4.streamingFeatures = t5.requestedStreamingFeatures;
            }, window.Ragnarok.isCancelCode = it, window.Ragnarok.isResumableSessionState = nt, window.Ragnarok.getResumableSession = function(e4, t5) {
              for (const i4 of e4) if (i4.appId === t5 && nt(i4.state)) return i4;
            }, window.Ragnarok.SessionControlTelemetry = tt, window.Ragnarok.GsErrorCode = yt, window.Ragnarok.GridServerSettings = Ke, window.Ragnarok.ConfigureGridServerSettings = function(e4) {
              qe(e4);
            }, window.Ragnarok.BrowserName = { UNKNOWN: "Unknown", CHROME: "Chrome", SAFARI: "Safari", YANDEX: "Yandex", EDGE: "Edge", EDGE_LEGACY: "Edge_Legacy", FIREFOX: "Firefox", SAMSUNG: "Samsung", CHROMIUM: "Chromium", OPERA: "Opera", BRAVE: "Brave", SILK: "Silk", REACT: "ReactNative" }, window.Ragnarok.PlatformName = { UNKNOWN: "Unknown", CHROME_OS: "ChromeOS", WINDOWS: "Windows", MAC: "macOS", LINUX: "Linux", IOS: "iOS", IPADOS: "iPadOS", WEBOS: "WebOS", TIZEN: "Tizen", ANDROID: "Android", FIRETV: "FireTV", XBOX: "Xbox", FREEBSD: "FreeBSD", STEAMOS: "SteamOS", CCOS: "ccOS" }, window.Ragnarok.getPlatformDetails = Ee, window.Ragnarok.DeviceModel = { STEAMDECK: "STEAMDECK", XBOX_ONE: "XBOXONE", XBOX_SERIES: "XBOXSERIES", VISION_PRO: "VISIONPRO" }, window.Ragnarok.DeviceVendor = { APPLE: "APPLE", LG: "LG", SAMSUNG: "SAMSUNG", TIZEN_LICENSED: "TIZENLICENSED", MICROSOFT: "MICROSOFT", AMAZON: "AMAZON", HKMC: "HKMC", SONY: "SONY", PHILIPS: "PHILIPS", GOOGLE: "GOOGLE", NVIDIA: "NVIDIA", XIAOMI: "XIAOMI", TVISION: "TVISION", UNKNOWN: "" }, window.Ragnarok.CLIENT_VERSION = "29.0", window.Ragnarok.CLIENT_IDENTIFICATION = "GFN-PC", window.Ragnarok.SESSIONMODIFY_ACTION = { UNKNOWN: 0, PAUSE: 1, RESUME: 2, Pg: 3, Ng: 4, Mg: 5, Lg: 6, Qg: 7 }, window.Ragnarok.AudioFormat = { UNKNOWN: 0, STEREO: 1, UP_TO_5_1_SURROUND_PCM: 2, UP_TO_7_1_SURROUND_PCM: 3 }, window.Ragnarok.ClientStreamer = { CLASSIC: "NVIDIA-CLASSIC", WEBRTC: "WEBRTC" }, window.Ragnarok.GS_EVENTS = { ACTIVE_SESSIONS_RESULT: "ActiveSessionsResult", PROGRESS_UPDATE: "ProgressUpdate", SESSION_UPDATE: "SessionUpdate", TELEMETRY_EVENT: "TelemetryEvent", LOG_EVENT: "Log" }, window.Ragnarok.GridServer = Pt, window.Ragnarok.PassThruServer = Dt, window.Ragnarok.VsyncType = { OFF: 0, ON: 1, ADAPTIVE: 2 }, window.Ragnarok.getDeviceCapabilities = No, window.Ragnarok.serializeDeviceCapabilities = function(e4) {
              return JSON.stringify(e4);
            }, window.Ragnarok.PayloadOSType = { WINDOWS: "Windows", MACOS: "MacOS", SHIELD: "Shield", ANDROID: "Android", IOS: "iOS", IPADOS: "iPadOS", CHROMEOS: "ChromeOS", LINUX: "Linux", TIZEN: "Tizen", WEBOS: "WebOS", TVOS: "tvOS", XBOX: "Xbox", STEAMOS: "SteamOS", UNDEFINED: "undefined" }, window.Ragnarok.PayloadBrowserType = { CHROME: "Chrome", SAFARI: "Safari", YANDEX: "Yandex", EDGE: "Edge", EDGE_LEGACY: "Edge_legacy", FIREFOX: "Firefox", SAMSUNG: "Samsung", CHROMIUM: "Chromium", OPERA: "Opera", BRAVE: "Brave", SILK: "Silk", UNDEFINED: "undefined" }, window.Ragnarok.PayloadDeviceType = { DESKTOP: "Desktop", LAPTOP: "Laptop", TV: "TV", PHONE: "Phone", TABLET: "Tablet", SERVER: "Server", CONSOLE: "Console", UNDEFINED: "undefined" }, window.Ragnarok.ClientHeaderOSType = { WINDOWS: "WINDOWS", MACOS: "MACOS", SHIELD: "SHIELD", ANDROID: "ANDROID", IOS: "IOS", IPADOS: "IPADOS", CHROMEOS: "CHROMEOS", LINUX: "LINUX", TIZEN: "TIZEN", WEBOS: "WEBOS", XBOX: "XBOX", STEAMOS: "STEAMOS", UNKNOWN: "UNKNOWN" }, window.Ragnarok.ClientHeaderBrowserType = { CHROME: "CHROME", SAFARI: "SAFARI", YANDEX: "YANDEX", EDGE: "EDGE", EDGE_LEGACY: "EDGE_LEGACY", FIREFOX: "FIREFOX", SAMSUNG: "SAMSUNG", CHROMIUM: "CHROMIUM", OPERA: "OPERA", BRAVE: "BRAVE", SILK: "SILK", UNKNOWN: "UNKNOWN" }, window.Ragnarok.ClientHeaderDeviceType = { DESKTOP: "DESKTOP", LAPTOP: "LAPTOP", TV: "TV", PHONE: "PHONE", TABLET: "TABLET", CONSOLE: "CONSOLE", UNKNOWN: "UNKNOWN" }, window.Ragnarok.translatePlatformDetailsForPayload = function(e4) {
              return (null == Me ? void 0 : Me.h) != e4 && (Me = new ke(e4)), Me.m;
            }, window.Ragnarok.translatePlatformDetailsForClientHeader = function(e4) {
              return (null == Me ? void 0 : Me.h) != e4 && (Me = new ke(e4)), Me.o;
            }, window.Ragnarok.getStreamerType = function() {
              return "WEBRTC";
            }, window.Ragnarok.BrowserFeature = { Streaming: 0, MicCapture: 1 }, window.Ragnarok.isFeatureSupported = Po, window.Ragnarok.shouldDefaultEnableMic = Do, window.Ragnarok.getRecommendedBitrate = Oo, window.Ragnarok.getStreamStartParameters = function(e4) {
              const t5 = { downstreamParams: [], signalConnectionInfo: { address: "", port: 0 }, enableTouchInput: 2 === (e4 = JSON.parse(e4)).appLaunchMode, sessionId: e4.sessionId, subSessionId: e4.subSessionId, audioTagId: "", zoneAddress: e4.zoneAddress, statTelemetryInfo: { appId: e4.appId, zoneName: e4.zoneName, gpuType: e4.gpuType }, streamingFeatures: e4.finalizedStreamingFeatures };
              for (const i4 of e4.monitorSettings) t5.downstreamParams.push({ width: i4.widthInPixels, height: i4.heightInPixels, fps: i4.framesPerSecond, videoTagId: "", sdrHdrMode: i4.sdrHdrMode });
              for (const i4 of e4.connectionInfo) switch (i4.usage) {
                case 14:
                  t5.signalConnectionInfo.address = i4.ip, t5.signalConnectionInfo.port = i4.port, t5.signalConnectionInfo.secure = 5 === i4.appLevelProtocol;
                  break;
                case 2:
                case 17:
                  t5.mediaConnectionInfo = { address: i4.ip, port: i4.port };
              }
              return t5;
            }, window.Ragnarok.estimateDataUsage = Mo, window.Ragnarok.NskTelemetry = To, window.Ragnarok.createNskStreamClient = function(e4, t5, i4) {
              return new class {
                constructor(e5, t6, i5) {
                  this.u = e5, this.h = t6, this.R = i5, this.H = new Zd(), this.O = new nc(), this.startTime = this.streamingState = 0, this.isResume = false, this.o = this.C = this.v = 0, this.zoneName = this.zoneAddress = this.subSessionId = this.sessionId = "", this.m = false, this.appId = 0, this.L = (e6) => {
                    var t7;
                    return d.e("{0a9be04}", "{8516485}", e6.filename, e6.lineno, e6.colno), To.za(e6.error, e6.error && e6.error.message ? e6.error.message : e6.message, e6.filename, e6.lineno, e6.colno, false), (null === (t7 = Ci.terminateUnhandledException) || void 0 === t7 || t7) && Wc(this, 3237093392), false;
                  }, this.N = () => {
                    var e6;
                    if (d.i("{0a9be04}", "{478a408}", document.visibilityState, !!this.D), this.D) {
                      var t7 = this.K, i6 = this.Ea, n4 = t7 && i6 && N(this.u, false, 15, 4) && Xi, s3 = N(this.u, false, 15, 4) && this.m && Ji;
                      "hidden" === document.visibilityState ? (this.C = performance.now(), n4 && (d.i("{0a9be04}", "{cbd3b6e}"), t7.muted = true, i6.muted = true)) : "visible" === document.visibilityState && (n4 && (d.i("{0a9be04}", "{05deefa}"), t7.muted = false, i6.muted = false), s3 ? (t7 = null !== (e6 = Ci.userTerminatedMicRecorderThreshold) && void 0 !== e6 ? e6 : 2e3, this.C - this.g.O < t7 ? (d.i("{0a9be04}", "{862bd20}"), this.g.I = true, this.captureMic(true)) : this.m = false) : N(this.u, false, 15, 4) && !this.g.o && uo(this.g) && this.g.F && so(this.g, "visibilityChange"));
                    }
                  }, this.M = () => {
                    var e6, t7;
                    Wc(this, (null !== (e6 = this.P) && void 0 !== e6 ? e6 : null !== (t7 = this.D) && void 0 !== t7 && t7.H) ? 15867912 : 15867905);
                  }, this.F = () => {
                    ho(this.g, this.o), this.o++;
                  }, this.I = (e6) => {
                    var t7;
                    e6.detail.idle && (null === (t7 = this.D) || void 0 === t7 || Od(t7, 2, 60), this.v = window.setTimeout(() => {
                      var e7;
                      null === (e7 = this.D) || void 0 === e7 || Ed(e7, 15867913);
                    }, 6e4));
                  }, this.s = () => {
                    this.g.j();
                  }, this.j = new Gs(this.u, window.zoneless), this.g = new po(this.u, To), this.l = new Qd(To), Hi && (this.j.l.push(this.H), _s(this.j)), ge(To), function() {
                    var e6, t7, i6;
                    if (Ci.sendNonEssentialMetricEvents) {
                      var n4 = performance.getEntriesByName("GfnJsInitStart")[0];
                      const s3 = performance.getEntriesByName("platformBegin")[0], r3 = performance.getEntriesByName("GfnNskBegin")[0], o2 = performance.getEntriesByType("navigation");
                      n4 = Math.round(null !== (e6 = null == n4 ? void 0 : n4.startTime) && void 0 !== e6 ? e6 : -1), e6 = Math.round(null !== (t7 = null == s3 ? void 0 : s3.startTime) && void 0 !== t7 ? t7 : -1), Eo(To, "PerformanceTiming", "application timings", n4, e6, Math.round(null !== (i6 = null == r3 ? void 0 : r3.startTime) && void 0 !== i6 ? i6 : -1), e6 - n4), o2.length ? (t7 = o2[o2.length - 1], Eo(To, "PerformanceTiming", "load timings", Math.round(t7.loadEventStart), Math.round(t7.loadEventEnd), Math.round(t7.domContentLoadedEventStart), Math.round(t7.domContentLoadedEventEnd))) : Eo(To, "PerformanceTiming", "navigation timings unsupported", 0, 0, 0, 0);
                    }
                  }(), function() {
                    if (navigator.mediaCapabilities) {
                      var e6 = performance.now();
                      Fo("h264").then(async (t7) => {
                        if (t7) {
                          t7 = Fo("h264; profile-level-id=640033", 2560, 1440, 60);
                          var i6 = Fo("h264; profile-level-id=64e033", 2560, 1440, 60);
                          t7 = xo(await t7), i6 = xo(await i6);
                          const r3 = performance.now() - e6;
                          var n4 = _o(), s3 = Fo("h264", 1920, 1080, 120);
                          n4 = xo(await n4), s3 = xo(await s3);
                          const o2 = await Uo(Go), a2 = await jo();
                          d.d("{0a9be04}", "{1efbc27}", o2, a2), Eo(To, "DisplayCaps", "Is120FpsSupported: " + a2, o2, 0, 0, 0), Eo(To, "MediaCapabilities", "codec 5.1: " + t7 + " 5.1 constrained: " + i6 + " AV1: " + n4, r3, s3, t7 | i6, Math.round(window.screen.height));
                        } else Eo(To, "MediaCapabilities", "webrtc unsupported", performance.now() - e6, -1, -1, -1);
                      });
                    } else Eo(To, "MediaCapabilities", "API unsupported", -1, -1, -1, -1);
                  }(), Ci.sendNonEssentialMetricEvents && Eo(To, "PlatformDetailsExecutionTime", "", this.u.totalTime, 0, 0, 0), d.i("{0a9be04}", "{2569364}", "0.66.9"), d.d("{0a9be04}", "{e85ad66}", navigator.userAgent);
                }
                startStreaming(e5) {
                  var t6, i5, n4, s3, r3, o2, a2, c2, l2, u2, h2, p2, f2, v2, m2;
                  if (4 !== this.streamingState && 0 !== this.streamingState) return d.w("{0a9be04}", "{60a7ff5}"), wo(To, "SessionSetupInProgressError", e5.resume ? "resume" : "start"), 3237085186;
                  const g2 = function(e6) {
                    var t7;
                    const i6 = { errorCode: void 0, streamParams: Object.assign({}, e6), Ea: void 0, de: [] };
                    if (0 < i6.streamParams.downstreamParams.length || !e6.audioTagId) {
                      for (var n5 of i6.streamParams.downstreamParams) (e6 = document.getElementById(n5.videoTagId)) && e6 instanceof HTMLVideoElement && i6.de.push(e6);
                      if (!i6.de.length) return { errorCode: 3237094400 };
                    } else {
                      if (!((n5 = document.getElementById(e6.audioTagId)) && n5 instanceof HTMLAudioElement)) return { errorCode: 3237094401 };
                      i6.Ea = n5;
                    }
                    const s4 = !!Li && !!xi, r4 = !!Qi;
                    return (s4 || r4) && (null === (t7 = i6.streamParams.downstreamParams) || void 0 === t7 || t7.forEach((e7) => {
                      s4 && (e7.width = Li, e7.height = xi), r4 && (e7.fps = Qi);
                    }), s4 && d.i("{0a9be04}", "{92a6b38}", Li, xi), r4 && d.d("{0a9be04}", "{6618bcd}", Qi)), i6;
                  }(e5);
                  if (g2.errorCode) return g2.errorCode;
                  if (e5 = g2.streamParams, this.K = g2.de[0], this.Ea = g2.Ea, this.isResume = null !== (t6 = e5.resume) && void 0 !== t6 && t6, this.sessionId = e5.sessionId, this.subSessionId = null !== (i5 = e5.subSessionId) && void 0 !== i5 ? i5 : "", this.zoneAddress = null !== (n4 = e5.zoneAddress) && void 0 !== n4 ? n4 : "", this.zoneName = null !== (r3 = null === (s3 = e5.statTelemetryInfo) || void 0 === s3 ? void 0 : s3.zoneName) && void 0 !== r3 ? r3 : "", this.appId = null !== (a2 = null === (o2 = e5.statTelemetryInfo) || void 0 === o2 ? void 0 : o2.appId) && void 0 !== a2 ? a2 : 0, function(e6, t7, i6, n5, s4) {
                    var r4 = To;
                    r4.subSessionId = e6, r4.sessionId = t7, r4.cmsId = i6, r4.isResume = n5, r4.zoneAddress = s4;
                  }(this.subSessionId, this.sessionId, this.appId.toString(), this.isResume, this.zoneAddress), this.l.sessionId = this.sessionId, this.l.subSessionId = this.subSessionId, N(this.u, false, 15)) {
                    const e6 = this.K;
                    e6.ragnarokOldPlay || (e6.ragnarokOldPlay = this.K.play);
                    const t7 = Ki && N(this.u, true, 15, 1);
                    this.K.play = () => {
                      var i6, n5, s4;
                      if (qi && (d.i("{0a9be04}", "{4a5b360}"), zc(this), function(e7) {
                        if (qi) if (window.ios15AudioContext) d.i("{0a9be04}", "{e2aba64}");
                        else {
                          var t8 = new (window.AudioContext || window.webkitAudioContext)({ latencyHint: "interactive", sampleRate: 48e3 });
                          t8.onstatechange = () => {
                            "suspended" === t8.state && (t8.resume(), e7.g.j(), d.i("{0a9be04}", "{faee684}"));
                          }, window.ios15AudioContext = t8, window.ios15AudioStream = t8.createMediaStreamDestination(), navigator.mediaDevices && e7.s && navigator.mediaDevices.addEventListener("devicechange", e7.s), d.i("{0a9be04}", "{b5f7b9b}");
                        }
                      }(this), this.g.j()), t7) {
                        d.i("{0a9be04}", "{8f5cd77}");
                        const e7 = null !== (n5 = null === (i6 = this.K) || void 0 === i6 ? void 0 : i6.srcObject) && void 0 !== n5 ? n5 : null;
                        null !== (s4 = this.K) && void 0 !== s4 && s4.srcObject && (this.K.srcObject = null, this.K.srcObject = e7);
                      }
                      return e6.ragnarokOldPlay.apply(this.K);
                    };
                  }
                  return $i && (N(this.u, true, 15, 0) || N(this.u, true, 15, 1)) && (this.K.hasAttribute("data-shouldautoplay") ? this.K.setAttribute("autoplay", "") : (this.K.setAttribute("data-shouldautoplay", ""), this.K.removeAttribute("autoplay"))), n4 = { ip: "", port: 0, appLevelProtocol: 0, usage: 0, protocol: 0 }, e5.mediaConnectionInfo && (n4.ip = e5.mediaConnectionInfo.address, n4.port = e5.mediaConnectionInfo.port, n4.usage = 2), s3 = { ip: e5.signalConnectionInfo.address, port: e5.signalConnectionInfo.port, protocol: e5.signalConnectionInfo.secure ? "wss" : "ws" }, r3 = { width: (t6 = e5.downstreamParams[0]).width, height: t6.height, fps: t6.fps, sdrHdrMode: t6.sdrHdrMode }, i5 = { appId: this.appId, appLaunchMode: e5.enableTouchInput ? 2 : 0, clientLocale: null !== (l2 = null === (c2 = e5.statTelemetryInfo) || void 0 === c2 ? void 0 : c2.clientLocale) && void 0 !== l2 ? l2 : "", gpuType: null !== (h2 = null === (u2 = e5.statTelemetryInfo) || void 0 === u2 ? void 0 : u2.gpuType) && void 0 !== h2 ? h2 : "", mediaConnectionInfo: [n4], sessionId: this.sessionId, signalConnectionInfo: s3, state: "ready_for_connection", streamInfo: [r3], subSessionId: this.subSessionId, zoneAddress: this.zoneAddress, zoneName: this.zoneName, finalizedStreamingFeatures: e5.streamingFeatures }, c2 = { width: t6.width, height: t6.height, fps: t6.fps, maxBitrateKbps: t6.maxBitrateKbps, videoTagId: t6.videoTagId, audioTagId: e5.audioTagId }, null !== (p2 = (l2 = { ...Nt }).windowedStreaming) && void 0 !== p2 || (l2.windowedStreaming = e5.windowedStreaming), null !== (f2 = l2.cursorType) && void 0 !== f2 || (l2.cursorType = e5.cursorType), this.D = new Hd(this, this.K, this.Ea, this.g, l2, this.H, this.j, To, this.u, i5, c2, this.O, this.R.textInputElement, null === (v2 = e5.statTelemetryInfo) || void 0 === v2 ? void 0 : v2.clientAppVersion, this.isResume, null === (m2 = e5.statTelemetryInfo) || void 0 === m2 ? void 0 : m2.region, t6.dynamicStreamingMode, e5.upstreamParams), function(e6) {
                    var t7, i6, n5, s4;
                    const r4 = window.zoneless, o3 = null !== (i6 = null === (t7 = null == r4 ? void 0 : r4.windowAddEventListener) || void 0 === t7 ? void 0 : t7.bind(window)) && void 0 !== i6 ? i6 : window.addEventListener.bind(window);
                    t7 = null !== (s4 = null === (n5 = null == r4 ? void 0 : r4.documentAddEventListener) || void 0 === n5 ? void 0 : n5.bind(document)) && void 0 !== s4 ? s4 : document.addEventListener.bind(document), o3("pagehide", e6.M), o3("error", e6.L), t7("visibilitychange", e6.N), navigator.mediaDevices && navigator.mediaDevices.addEventListener("devicechange", e6.F), S(e6.u) && t7("SystemIdle", e6.I);
                  }(this), this.streamingState = 1, $d(this.l), this.startTime = performance.now(), this.D.start(), e5.keyboardLayout && this.D.setKeyboardLayout(e5.keyboardLayout), 15859712;
                }
                stopStreaming(e5) {
                  !this.D || 1 !== this.streamingState && 2 !== this.streamingState || (e5 = null != e5 ? e5 : 15859712, d.i("{0a9be04}", "{ae7f61b}", g(e5)), this.streamingState = 3, Wc(this, e5, true));
                }
                getStreamingState() {
                  return this.streamingState;
                }
                sendCustomMessage(e5) {
                  var t6;
                  return null === (t6 = this.D) || void 0 === t6 || t6.sendCustomMessage(e5), !!this.D;
                }
                setStreamingMaxBitrate(e5, t6, i5) {
                  var n4;
                  return null === (n4 = this.D) || void 0 === n4 || n4.setStreamingMaxBitrate(null != t6 ? t6 : 0, e5, i5), !!this.D;
                }
                setDynamicStreamingMode(e5, t6, i5) {
                  var n4;
                  return null === (n4 = this.D) || void 0 === n4 || n4.setDrcDfcState(null != t6 ? t6 : 0, e5, i5), !!this.D;
                }
                setKeyboardLayout(e5) {
                  var t6;
                  return null === (t6 = this.D) || void 0 === t6 || t6.setKeyboardLayout(e5), !!this.D;
                }
                setSupportedHidTypes(e5) {
                  os(this.j, e5);
                }
                setGamepadRsdmm(e5) {
                  return !!this.D && (ms(this.j, e5), true);
                }
                getVirtualInputController() {
                  return this;
                }
                getGamepadBitmap() {
                  return js(this.j);
                }
                captureUserInput(e5, t6) {
                  var i5;
                  return null === (i5 = this.D) || void 0 === i5 || i5.toggleUserInput(e5, t6), !!this.D;
                }
                sendTextInput(e5) {
                  var t6;
                  return null === (t6 = this.D) || void 0 === t6 || t6.sendTextInput(e5), !!this.D;
                }
                getMicState() {
                  return to();
                }
                captureMic(e5) {
                  return !!this.D && ((this.m = e5) ? oo(this.g) : no(this.g), true);
                }
                setVideoTransforms(e5, t6, i5) {
                  var n4;
                  return null === (n4 = this.D) || void 0 === n4 || n4.setVideoTransforms(e5, t6, i5), !!this.D;
                }
                setUpstreamMedia(e5, t6) {
                  var i5;
                  return this.D ? null === (i5 = this.D) || void 0 === i5 ? void 0 : i5.setUpstreamMedia(e5, t6) : Promise.resolve(false);
                }
                unsetUpstreamMedia(e5) {
                  var t6;
                  return this.D ? null === (t6 = this.D) || void 0 === t6 ? void 0 : t6.unsetUpstreamMedia(e5) : Promise.resolve(false);
                }
                stopUpstreamMedia(e5) {
                  var t6;
                  return this.D ? null === (t6 = this.D) || void 0 === t6 ? void 0 : t6.stopUpstreamMedia(e5) : Promise.resolve(false);
                }
                Gc(e5) {
                  var t6, i5, n4, s3, r3, o2, a2, c2;
                  let l2 = 15859712;
                  if (e5.error) l2 = e5.error.code, this.h.onStreamStartFailed(l2), Wc(this, l2);
                  else if (null !== (t6 = e5.streamInfo) && void 0 !== t6 && t6.length && null !== (i5 = e5.streams) && void 0 !== i5 && i5.length) {
                    this.streamingState = 2, t6 = { streams: [], separateAudioStream: !!e5.streams.find((e6) => {
                      const t7 = e6.tracks.find((e7) => "video" === e7.kind);
                      return e6 = e6.tracks.find((e7) => "audio" === e7.kind), !t7 && e6;
                    }) };
                    for (const a3 of e5.streamInfo) i5 = { width: a3.width, height: a3.height, fps: a3.fps, sdrHdrMode: a3.sdrHdrMode, bitDepth: null !== (n4 = e5.bitDepth) && void 0 !== n4 ? n4 : 8, codec: null === (s3 = this.D) || void 0 === s3 ? void 0 : Vd(s3), videoTagId: null !== (o2 = null === (r3 = this.K) || void 0 === r3 ? void 0 : r3.tagName) && void 0 !== o2 ? o2 : "" }, t6.streams.push(i5);
                    this.h.onStreamStarted(t6), this.isResume && this.m && this.captureMic(true);
                  } else l2 = 3237093905, d.e("{0a9be04}", "{0cfb100}"), this.h.onStreamStartFailed(l2), Wc(this, l2);
                  !function(e6, t7, i6) {
                    var n5, s4, r4, o3 = To;
                    const a3 = new mo({ zoneAddress: o3.zoneAddress, networkSessionId: null !== (n5 = o3.telemetryEventIds.networkTestId) && void 0 !== n5 ? n5 : "", sessionId: o3.sessionId, subSessionId: o3.subSessionId, resumeType: In(o3.isResume), overrideConfigType: Ii.type, overrideConfigVersion: Ii.version, result: t7, codec: En(i6), ipVersion: "UNKNOWN", launchDuration: Math.round(e6), networkType: _(bo.getCurrentNetworkType()), streamingProfileGuid: null !== (s4 = o3.telemetryEventIds.streamingProfileGuid) && void 0 !== s4 ? s4 : "", systemInfoGuid: null !== (r4 = o3.telemetryEventIds.systemInfoGuid) && void 0 !== r4 ? r4 : "", cmsId: o3.cmsId });
                    o3.h(a3);
                  }(Math.round(performance.now() - this.startTime), g(l2), null !== (c2 = null === (a2 = this.D) || void 0 === a2 ? void 0 : Vd(a2)) && void 0 !== c2 ? c2 : "UNKNOWN"), this.startTime = performance.now();
                }
                Cf(e5) {
                  Wc(this, e5.error.code);
                }
                Df() {
                  Kc(this);
                }
                emit(e5, ...t6) {
                  if (t6.length) switch (e5) {
                    case "StreamingEvent":
                      this.h.onStreamWarning(t6[0]);
                      break;
                    case "StreamingQuality":
                      this.h.onStreamQuality(t6[0]);
                      break;
                    case "MicCapture":
                      this.h.onMicStateUpdate && void 0 !== t6[0].state && this.h.onMicStateUpdate(t6[0].state);
                      break;
                    case "TextComposition":
                      this.h.onTextComposition(t6[0]);
                      break;
                    case "CustomMessage":
                      this.h.onCustomMessage && this.h.onCustomMessage(t6[0]);
                      break;
                    case "StreamStatsUpdate":
                      this.h.onStreamStatistics(t6[0]);
                  }
                }
                addListener() {
                }
                removeListener() {
                }
                removeAllListeners() {
                }
                removeAllListenersOfEvent() {
                }
                hasListener() {
                  return true;
                }
                setClientSupportsVirtualGamepad() {
                  this.j.getVirtualGamepadHandler().enable();
                }
                handleVirtualGamepadState(e5, t6, i5) {
                  this.j.getVirtualGamepadHandler().updateInput(e5, t6, i5);
                }
                setVirtualKeyboardState(e5) {
                  var t6;
                  return null === (t6 = this.D) || void 0 === t6 || t6.setVirtualKeyboardState(e5), !!this.D;
                }
                handleVirtualKeyInput(e5) {
                  var t6;
                  return null === (t6 = this.D) || void 0 === t6 || t6.sendKeyEvent(e5), !!this.D;
                }
              }(e4, t5, i4);
            }, window.Ragnarok.configureRagnarokSettings = nn, window.Ragnarok.getNetworkTypeDetector = function() {
              return bo;
            }, window.Ragnarok.RErrorCode = { Success: 15859712, AuthProviderError: 3237085185, InvalidOperation: 3237085186, NoNetwork: 3237089281, NetworkError: 3237089282, GetActiveSessionServerError: 3237089283, ExceptionHappened: 3237089284, AuthTokenNotUpdated: 3237093377, SessionFinishedState: 3237093378, ResponseParseFailure: 3237093379, GridAppNotInitialized: 3237093380, InvalidServerResponse: 3237093381, PutOrPostInProgress: 3237093382, GridServerNotInitialized: 3237093383, DOMExceptionInGridServer: 3237093384, InvalidAdStateTransition: 3237093386, SessionServerErrorBegin: 3237093632, RequestForbidden: 3237093634, ServerInternalTimeout: 3237093635, ServerInternalError: 3237093636, ServerInvalidRequest: 3237093637, ServerInvalidRequestVersion: 3237093638, SessionListLimitExceeded: 3237093639, InvalidRequestDataMalformed: 3237093640, InvalidRequestDataMissing: 3237093641, RequestLimitExceeded: 3237093642, SessionLimitExceeded: 3237093643, InvalidRequestVersionOutOfDate: 3237093644, SessionEntitledTimeExceeded: 3237093645, AuthFailure: 3237093646, InvalidAuthenticationMalformed: 3237093647, InvalidAuthenticationExpired: 3237093648, InvalidAuthenticationNotFound: 3237093649, EntitlementFailure: 3237093650, InvalidAppIdNotAvailable: 3237093651, InvalidAppIdNotFound: 3237093652, InvalidSessionIdMalformed: 3237093653, InvalidSessionIdNotFound: 3237093654, EulaUnAccepted: 3237093655, MaintenanceStatus: 3237093656, ServiceUnAvailable: 3237093657, SteamGuardRequired: 3237093658, SteamLoginRequired: 3237093659, SteamGuardInvalid: 3237093660, SteamProfilePrivate: 3237093661, InvalidCountryCode: 3237093662, InvalidLanguageCode: 3237093663, MissingCountryCode: 3237093664, MissingLanguageCode: 3237093665, SessionNotPaused: 3237093666, EmailNotVerified: 3237093667, InvalidAuthenticationUnsupportedProtocol: 3237093668, InvalidAuthenticationUnknownToken: 3237093669, InvalidAuthenticationCredentials: 3237093670, SessionNotPlaying: 3237093671, InvalidServiceResponse: 3237093672, AppPatching: 3237093673, GameNotFound: 3237093674, NotEnoughCredits: 3237093675, InvitationOnlyRegistration: 3237093676, RegionNotSupportedForRegistration: 3237093677, SessionTerminatedByAnotherClient: 3237093678, DeviceIdAlreadyUsed: 3237093679, ServiceNotExist: 3237093680, SessionExpired: 3237093681, SessionLimitPerDeviceReached: 3237093682, ForwardingZoneOutOfCapacity: 3237093683, RegionNotSupportedIndefinitely: 3237093684, RegionBanned: 3237093685, RegionOnHoldForFree: 3237093686, RegionOnHoldForPaid: 3237093687, AppMaintenanceStatus: 3237093688, ResourcePoolNotConfigured: 3237093689, InsufficientVmCapacity: 3237093690, InsufficientRouteCapacity: 3237093691, InsufficientScratchSpaceCapacity: 3237093692, RequiredSeatInstanceTypeNotSupported: 3237093693, ServerSessionQueueLengthExceeded: 3237093694, RegionNotSupportedForStreaming: 3237093695, SessionForwardRequestAllocationTimeExpired: 3237093696, SessionForwardGameBinariesNotAvailable: 3237093697, GameBinariesNotAvailableInRegion: 3237093698, UekRetrievalFailed: 3237093699, EntitlementFailureForResource: 3237093700, SessionInQueueAbandoned: 3237093701, MemberTerminated: 3237093702, SessionRemovedFromQueueMaintenance: 3237093703, ZoneMaintenanceStatus: 3237093704, GuestModeCampaignDisabled: 3237093705, RegionNotSupportedAnonymousAccess: 3237093706, InstanceTypeNotSupportedInSingleRegion: 3237093707, InvalidZoneForQueuedSession: 3237093710, SessionWaitingAdsTimeExpired: 3237093711, UserCancelledWatchingAds: 3237093712, SessionServerErrorEnd: 3237093887, StreamerErrorCategory: 3237093888, StreamErrorGeneric: 3237093889, StreamerSignInFailure: 3237093890, StreamerHangingGetFailure: 3237093891, StreamerNetworkError: 3237093892, StreamerVideoPlayError: 3237093893, StreamerIceConnectionFailed: 3237093894, StreamerGetRemotePeerTimedOut: 3237093895, StreamInputChannelError: 3237093896, StreamCursorChannelError: 3237093897, StreamControlChannelError: 3237093898, StreamerReConnectionFailed: 3237093899, StreamerNoVideoPacketsReceivedEver: 3237093900, StreamerNoVideoFramesLossyNetwork: 3237093901, StreamerSetSDPFailure: 3237093902, StreamerNoLocalCandidates: 3237093903, StreamerNoRemoteCandidates: 3237093904, StreamerNoVideoTrack: 3237093905, StreamerIceReConnectionFailed: 3237093906, StreamerSignInTimeout: 3237093907, StreamerSignInWorkerFailure: 3237093908, StreamerNoTracksReceivedInSdp: 3237093909, StreamerNvstSdpFailure: 3237093910, StreamerNvstSdpParseFailure: 3237093911, StreamerNoPeerInfo: 3237093912, StreamerNoOffer: 3237093913, StreamerNoAudioTrack: 3237093914, StreamerInvalidRemoteConfigOverride: 3237093915, StreamerInvalidServerOverride: 3237093916, StreamerInvalidClientOverride: 3237093917, StreamerConfigUpdateFailure: 3237093918, StreamerInputChannelNotOpen: 3237093919, StreamerCursorChannelNotOpen: 3237093920, StreamerControlChannelNotOpen: 3237093921, StreamerVideoAdapterInitTimeOut: 3237093922, StreamerVideoFrameProviderInitTimeOut: 3237093923, StreamerVideoEncoderInitTimeOut: 3237093924, StreamerVideoSetupTimeOut: 3237093925, StreamerNoStunResponsesReceived: 3237093926, StreamerNoNominatedCandidatePairs: 3237093927, StreamerNoSucceededCandidatePairs: 3237093928, StreamGamepadChannelError: 3237093929, StreamerGamepadChannelNotOpen: 3237093936, StreamerNeedAudioElement: 3237093937, SessionSetupCancelled: 15867905, SessionSetupCancelledDuringQueuing: 15867906, StreamerDataChannelClosing: 15867907, SystemSleepDuringStreaming: 15867908, SystemSleepDuringSessionSetup: 15867909, PauseSession: 15867910, DelayedSessionError: 15867911, WebPageClosed: 15867912, ClientDisconnectedUserIdle: 15867913, UnhandledException: 3237093392, NoInternetDuringSessionSetup: 15868417, NoInternetDuringStreaming: 15868418, StreamDisconnectedFromServer: 15868672, ServerDisconnectedNoResponse: 3237094145, ServerDisconnectedRemoteInputError: 3237094146, ServerDisconnectedFrameGrabFailed: 3237094147, ServerDisconnectedConfigUnAvailable: 3237094148, ServerDisconnectedInvalidCommand: 3237094149, ServerDisconnectedInvalidMouseState: 3237094150, ServerDisconnectedNetworkError: 3237094151, ServerDisconnectedGameLaunchFailed: 3237094152, ServerDisconnectedVideoFirstFrameSendFailed: 3237094153, ServerDisconnectedVideoNextFrameSendFailed: 3237094154, ServerDisconnectedFrameGrabTimedOut: 3237094155, ServerDisconnectedFrameEncodeTimedOut: 3237094156, ServerDisconnectedFrameSendTimedOut: 3237094157, ServerDisconnectedNetworkTimedOut: 3237094158, ServerDisconnectedPeerRemovedByServer: 3237094159, ServerDisconnectedUnknownError: 3237094160, ServerDisconnectedPeerRemovedBeforeStream: 3237094161, ServerDisconnectedIntended: 15868704, ServerDisconnectedHotKey: 15868705, ServerDisconnectedUserLoggedInDifferentAccount: 15868706, ServerDisconnectedWindowedMode: 15868707, ServerDisconnectedUserIdle: 15868708, ServerDisconnectedUnAuthorizedProcessDetected: 15868709, ServerDisconnectedMaliciousProcessDetected: 15868710, ServerDisconnectedUnKnownProcessDetected: 15868711, ServerDisconnectedMinerProcessDetected: 15868712, ServerDisconnectedStreamingUnsupported: 15868713, ServerDisconnectedAnotherClient: 15868714, ServerDisconnectedCodeIntegrityViolation: 15868715, ServerDisconnectedUnauthorizedActivityDetected: 15868716, ServerDisconnectedGameNotOwnedByUser: 15868717, ServerDisconnectedProtectedContent: 15868718, ServerDisconnectedDisplayTopologyChanged: 15868719, ServerDisconnectedAbruptly: 15868688, ServerDisconnectedUnknownFromPm: 15868736, ServerDisconnectedUserEntitledMinutesExceeded: 15868737, ServerDisconnectedClientReconnectTimeLimitExceeded: 15868738, ServerDisconnectedOperatorCommandedTermination: 15868739, ServerDisconnectedConcurrentSessionLimitExceeded: 15868740, ServerDisconnectedMaxSessionTimeLimitExceeded: 15868741, ServerDisconnectedBifrostInitiatedSessionPause: 15868742, ServerDisconnectedSystemCommandTermination: 15868743, ServerDisconnectedMultipleLogin: 15868744, ServerDisconnectedMaintenanceMode: 15868745, ServerDisconnectedMultipleTab: 15868752, InvalidVideoElement: 3237094400, InvalidAudioElement: 3237094401 }, window.Ragnarok.HidType = { NONE: 0, DS4: 1, DS5: 2 }, window.Ragnarok.InputType = { None: 0, Mouse: 1, Keyboard: 2, Gamepad: 4, Touch: 8, All: 15 }, window.Ragnarok.VideoCodecType = { H264: "H264", H265: "H265", AV1: "AV1", UNKNOWN: "UNKNOWN" }, window.Ragnarok.MicState = { UNINITIALIZED: 0, PERMISSION_PENDING: 1, PERMISSION_DENIED: 2, STARTED: 3, NO_SUITABLE_DEVICE: 4, STOPPED: 5, UNSUPPORTED: 6, ERROR: 7 }, window.Ragnarok.DynamicStreamingMode = { NONE: 0, DRC: 1, DFC: 2, ALL: 3 }, window.Ragnarok.MediaTrackKind = Ot, window.Ragnarok.StreamStopReason = { CLIENT_DISCONNECTED: 0, SERVER_DISCONNECTED: 1, NETWORK_ERROR: 2, ERROR: 3 }, window.Ragnarok.StreamWarningType = Mt, window.Ragnarok.CursorType = { SOFTWARE: 0, HARDWARE: 1, FREE: 2 }, window.Ragnarok.StreamingState = { NONE: 0, STARTING_STREAM: 1, STREAMING: 2, STOPPING_STREAM: 3, STOPPED: 4 };
          }, 134: (e3, t4, i3) => {
            "use strict";
            var n3 = i3(985);
            function s2(e4, t5, i4, s3, r3) {
              var o2 = n3.writeRtpDescription(e4.kind, t5);
              if (o2 += n3.writeIceParameters(e4.iceGatherer.getLocalParameters()), o2 += n3.writeDtlsParameters(e4.dtlsTransport.getLocalParameters(), "offer" === i4 ? "actpass" : r3 || "active"), o2 += "a=mid:" + e4.mid + "\r\n", e4.rtpSender && e4.rtpReceiver ? o2 += "a=sendrecv\r\n" : e4.rtpSender ? o2 += "a=sendonly\r\n" : e4.rtpReceiver ? o2 += "a=recvonly\r\n" : o2 += "a=inactive\r\n", e4.rtpSender) {
                var a2 = e4.rtpSender._initialTrackId || e4.rtpSender.track.id;
                e4.rtpSender._initialTrackId = a2;
                var d2 = "msid:" + (s3 ? s3.id : "-") + " " + a2 + "\r\n";
                o2 += "a=" + d2, o2 += "a=ssrc:" + e4.sendEncodingParameters[0].ssrc + " " + d2, e4.sendEncodingParameters[0].rtx && (o2 += "a=ssrc:" + e4.sendEncodingParameters[0].rtx.ssrc + " " + d2, o2 += "a=ssrc-group:FID " + e4.sendEncodingParameters[0].ssrc + " " + e4.sendEncodingParameters[0].rtx.ssrc + "\r\n");
              }
              return o2 += "a=ssrc:" + e4.sendEncodingParameters[0].ssrc + " cname:" + n3.localCName + "\r\n", e4.rtpSender && e4.sendEncodingParameters[0].rtx && (o2 += "a=ssrc:" + e4.sendEncodingParameters[0].rtx.ssrc + " cname:" + n3.localCName + "\r\n"), o2;
            }
            function r2(e4, t5) {
              var i4 = { codecs: [], headerExtensions: [], fecMechanisms: [] }, n4 = function(e5, t6) {
                e5 = parseInt(e5, 10);
                for (var i5 = 0; i5 < t6.length; i5++) if (t6[i5].payloadType === e5 || t6[i5].preferredPayloadType === e5) return t6[i5];
              }, s3 = function(e5, t6, i5, s4) {
                var r3 = n4(e5.parameters.apt, i5), o2 = n4(t6.parameters.apt, s4);
                return r3 && o2 && r3.name.toLowerCase() === o2.name.toLowerCase();
              };
              return e4.codecs.forEach(function(n5) {
                for (var r3 = 0; r3 < t5.codecs.length; r3++) {
                  var o2 = t5.codecs[r3];
                  if (n5.name.toLowerCase() === o2.name.toLowerCase() && n5.clockRate === o2.clockRate) {
                    if ("rtx" === n5.name.toLowerCase() && n5.parameters && o2.parameters.apt && !s3(n5, o2, e4.codecs, t5.codecs)) continue;
                    (o2 = JSON.parse(JSON.stringify(o2))).numChannels = Math.min(n5.numChannels, o2.numChannels), i4.codecs.push(o2), o2.rtcpFeedback = o2.rtcpFeedback.filter(function(e5) {
                      for (var t6 = 0; t6 < n5.rtcpFeedback.length; t6++) if (n5.rtcpFeedback[t6].type === e5.type && n5.rtcpFeedback[t6].parameter === e5.parameter) return true;
                      return false;
                    });
                    break;
                  }
                }
              }), e4.headerExtensions.forEach(function(e5) {
                for (var n5 = 0; n5 < t5.headerExtensions.length; n5++) {
                  var s4 = t5.headerExtensions[n5];
                  if (e5.uri === s4.uri) {
                    i4.headerExtensions.push(s4);
                    break;
                  }
                }
              }), i4;
            }
            function o(e4, t5, i4) {
              return -1 !== { offer: { setLocalDescription: ["stable", "have-local-offer"], setRemoteDescription: ["stable", "have-remote-offer"] }, answer: { setLocalDescription: ["have-remote-offer", "have-local-pranswer"], setRemoteDescription: ["have-local-offer", "have-remote-pranswer"] } }[t5][e4].indexOf(i4);
            }
            function a(e4, t5) {
              var i4 = e4.getRemoteCandidates().find(function(e5) {
                return t5.foundation === e5.foundation && t5.ip === e5.ip && t5.port === e5.port && t5.priority === e5.priority && t5.protocol === e5.protocol && t5.type === e5.type;
              });
              return i4 || e4.addRemoteCandidate(t5), !i4;
            }
            function d(e4, t5) {
              var i4 = new Error(t5);
              return i4.name = e4, i4.code = { NotSupportedError: 9, InvalidStateError: 11, InvalidAccessError: 15, TypeError: void 0, OperationError: void 0 }[e4], i4;
            }
            e3.exports = function(e4, t5) {
              function i4(t6, i5) {
                i5.addTrack(t6), i5.dispatchEvent(new e4.MediaStreamTrackEvent("addtrack", { track: t6 }));
              }
              function c(t6, i5, n4, s3) {
                var r3 = new Event("track");
                r3.track = i5, r3.receiver = n4, r3.transceiver = { receiver: n4 }, r3.streams = s3, e4.setTimeout(function() {
                  t6._dispatchEvent("track", r3);
                });
              }
              var l = function(i5) {
                var s3 = this, r3 = document.createDocumentFragment();
                if (["addEventListener", "removeEventListener", "dispatchEvent"].forEach(function(e5) {
                  s3[e5] = r3[e5].bind(r3);
                }), this.canTrickleIceCandidates = null, this.needNegotiation = false, this.localStreams = [], this.remoteStreams = [], this._localDescription = null, this._remoteDescription = null, this.signalingState = "stable", this.iceConnectionState = "new", this.connectionState = "new", this.iceGatheringState = "new", i5 = JSON.parse(JSON.stringify(i5 || {})), this.usingBundle = "max-bundle" === i5.bundlePolicy, "negotiate" === i5.rtcpMuxPolicy) throw d("NotSupportedError", "rtcpMuxPolicy 'negotiate' is not supported");
                switch (i5.rtcpMuxPolicy || (i5.rtcpMuxPolicy = "require"), i5.iceTransportPolicy) {
                  case "all":
                  case "relay":
                    break;
                  default:
                    i5.iceTransportPolicy = "all";
                }
                switch (i5.bundlePolicy) {
                  case "balanced":
                  case "max-compat":
                  case "max-bundle":
                    break;
                  default:
                    i5.bundlePolicy = "balanced";
                }
                if (i5.iceServers = function(e5, t6) {
                  var i6 = false;
                  return (e5 = JSON.parse(JSON.stringify(e5))).filter(function(e6) {
                    if (e6 && (e6.urls || e6.url)) {
                      var n4 = e6.urls || e6.url;
                      e6.url && !e6.urls && console.warn("RTCIceServer.url is deprecated! Use urls instead.");
                      var s4 = "string" == typeof n4;
                      return s4 && (n4 = [n4]), n4 = n4.filter(function(e7) {
                        return 0 !== e7.indexOf("turn:") || -1 === e7.indexOf("transport=udp") || -1 !== e7.indexOf("turn:[") || i6 ? 0 === e7.indexOf("stun:") && t6 >= 14393 && -1 === e7.indexOf("?transport=udp") : (i6 = true, true);
                      }), delete e6.url, e6.urls = s4 ? n4[0] : n4, !!n4.length;
                    }
                  });
                }(i5.iceServers || [], t5), this._iceGatherers = [], i5.iceCandidatePoolSize) for (var o2 = i5.iceCandidatePoolSize; o2 > 0; o2--) this._iceGatherers.push(new e4.RTCIceGatherer({ iceServers: i5.iceServers, gatherPolicy: i5.iceTransportPolicy }));
                else i5.iceCandidatePoolSize = 0;
                this._config = i5, this.transceivers = [], this._sdpSessionId = n3.generateSessionId(), this._sdpSessionVersion = 0, this._dtlsRole = void 0, this._isClosed = false;
              };
              Object.defineProperty(l.prototype, "localDescription", { configurable: true, get: function() {
                return this._localDescription;
              } }), Object.defineProperty(l.prototype, "remoteDescription", { configurable: true, get: function() {
                return this._remoteDescription;
              } }), l.prototype.onicecandidate = null, l.prototype.onaddstream = null, l.prototype.ontrack = null, l.prototype.onremovestream = null, l.prototype.onsignalingstatechange = null, l.prototype.oniceconnectionstatechange = null, l.prototype.onconnectionstatechange = null, l.prototype.onicegatheringstatechange = null, l.prototype.onnegotiationneeded = null, l.prototype.ondatachannel = null, l.prototype._dispatchEvent = function(e5, t6) {
                this._isClosed || (this.dispatchEvent(t6), "function" == typeof this["on" + e5] && this["on" + e5](t6));
              }, l.prototype._emitGatheringStateChange = function() {
                var e5 = new Event("icegatheringstatechange");
                this._dispatchEvent("icegatheringstatechange", e5);
              }, l.prototype.getConfiguration = function() {
                return this._config;
              }, l.prototype.getLocalStreams = function() {
                return this.localStreams;
              }, l.prototype.getRemoteStreams = function() {
                return this.remoteStreams;
              }, l.prototype._createTransceiver = function(e5, t6) {
                var i5 = this.transceivers.length > 0, n4 = { track: null, iceGatherer: null, iceTransport: null, dtlsTransport: null, localCapabilities: null, remoteCapabilities: null, rtpSender: null, rtpReceiver: null, kind: e5, mid: null, sendEncodingParameters: null, recvEncodingParameters: null, stream: null, associatedRemoteMediaStreams: [], wantReceive: true };
                if (this.usingBundle && i5) n4.iceTransport = this.transceivers[0].iceTransport, n4.dtlsTransport = this.transceivers[0].dtlsTransport;
                else {
                  var s3 = this._createIceAndDtlsTransports();
                  n4.iceTransport = s3.iceTransport, n4.dtlsTransport = s3.dtlsTransport;
                }
                return t6 || this.transceivers.push(n4), n4;
              }, l.prototype.addTrack = function(t6, i5) {
                if (this._isClosed) throw d("InvalidStateError", "Attempted to call addTrack on a closed peerconnection.");
                var n4;
                if (this.transceivers.find(function(e5) {
                  return e5.track === t6;
                })) throw d("InvalidAccessError", "Track already exists.");
                for (var s3 = 0; s3 < this.transceivers.length; s3++) this.transceivers[s3].track || this.transceivers[s3].kind !== t6.kind || (n4 = this.transceivers[s3]);
                return n4 || (n4 = this._createTransceiver(t6.kind)), this._maybeFireNegotiationNeeded(), -1 === this.localStreams.indexOf(i5) && this.localStreams.push(i5), n4.track = t6, n4.stream = i5, n4.rtpSender = new e4.RTCRtpSender(t6, n4.dtlsTransport), n4.rtpSender;
              }, l.prototype.addStream = function(e5) {
                var i5 = this;
                if (t5 >= 15025) e5.getTracks().forEach(function(t6) {
                  i5.addTrack(t6, e5);
                });
                else {
                  var n4 = e5.clone();
                  e5.getTracks().forEach(function(e6, t6) {
                    var i6 = n4.getTracks()[t6];
                    e6.addEventListener("enabled", function(e7) {
                      i6.enabled = e7.enabled;
                    });
                  }), n4.getTracks().forEach(function(e6) {
                    i5.addTrack(e6, n4);
                  });
                }
              }, l.prototype.removeTrack = function(t6) {
                if (this._isClosed) throw d("InvalidStateError", "Attempted to call removeTrack on a closed peerconnection.");
                if (!(t6 instanceof e4.RTCRtpSender)) throw new TypeError("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.");
                var i5 = this.transceivers.find(function(e5) {
                  return e5.rtpSender === t6;
                });
                if (!i5) throw d("InvalidAccessError", "Sender was not created by this connection.");
                var n4 = i5.stream;
                i5.rtpSender.stop(), i5.rtpSender = null, i5.track = null, i5.stream = null, -1 === this.transceivers.map(function(e5) {
                  return e5.stream;
                }).indexOf(n4) && this.localStreams.indexOf(n4) > -1 && this.localStreams.splice(this.localStreams.indexOf(n4), 1), this._maybeFireNegotiationNeeded();
              }, l.prototype.removeStream = function(e5) {
                var t6 = this;
                e5.getTracks().forEach(function(e6) {
                  var i5 = t6.getSenders().find(function(t7) {
                    return t7.track === e6;
                  });
                  i5 && t6.removeTrack(i5);
                });
              }, l.prototype.getSenders = function() {
                return this.transceivers.filter(function(e5) {
                  return !!e5.rtpSender;
                }).map(function(e5) {
                  return e5.rtpSender;
                });
              }, l.prototype.getReceivers = function() {
                return this.transceivers.filter(function(e5) {
                  return !!e5.rtpReceiver;
                }).map(function(e5) {
                  return e5.rtpReceiver;
                });
              }, l.prototype._createIceGatherer = function(t6, i5) {
                var n4 = this;
                if (i5 && t6 > 0) return this.transceivers[0].iceGatherer;
                if (this._iceGatherers.length) return this._iceGatherers.shift();
                var s3 = new e4.RTCIceGatherer({ iceServers: this._config.iceServers, gatherPolicy: this._config.iceTransportPolicy });
                return Object.defineProperty(s3, "state", { value: "new", writable: true }), this.transceivers[t6].bufferedCandidateEvents = [], this.transceivers[t6].bufferCandidates = function(e5) {
                  var i6 = !e5.candidate || 0 === Object.keys(e5.candidate).length;
                  s3.state = i6 ? "completed" : "gathering", null !== n4.transceivers[t6].bufferedCandidateEvents && n4.transceivers[t6].bufferedCandidateEvents.push(e5);
                }, s3.addEventListener("localcandidate", this.transceivers[t6].bufferCandidates), s3;
              }, l.prototype._gather = function(t6, i5) {
                var s3 = this, r3 = this.transceivers[i5].iceGatherer;
                if (!r3.onlocalcandidate) {
                  var o2 = this.transceivers[i5].bufferedCandidateEvents;
                  this.transceivers[i5].bufferedCandidateEvents = null, r3.removeEventListener("localcandidate", this.transceivers[i5].bufferCandidates), r3.onlocalcandidate = function(e5) {
                    if (!(s3.usingBundle && i5 > 0)) {
                      var o3 = new Event("icecandidate");
                      o3.candidate = { sdpMid: t6, sdpMLineIndex: i5 };
                      var a2 = e5.candidate, d2 = !a2 || 0 === Object.keys(a2).length;
                      if (d2) "new" !== r3.state && "gathering" !== r3.state || (r3.state = "completed");
                      else {
                        "new" === r3.state && (r3.state = "gathering"), a2.component = 1, a2.ufrag = r3.getLocalParameters().usernameFragment;
                        var c2 = n3.writeCandidate(a2);
                        o3.candidate = Object.assign(o3.candidate, n3.parseCandidate(c2)), o3.candidate.candidate = c2, o3.candidate.toJSON = function() {
                          return { candidate: o3.candidate.candidate, sdpMid: o3.candidate.sdpMid, sdpMLineIndex: o3.candidate.sdpMLineIndex, usernameFragment: o3.candidate.usernameFragment };
                        };
                      }
                      var l2 = n3.getMediaSections(s3._localDescription.sdp);
                      l2[o3.candidate.sdpMLineIndex] += d2 ? "a=end-of-candidates\r\n" : "a=" + o3.candidate.candidate + "\r\n", s3._localDescription.sdp = n3.getDescription(s3._localDescription.sdp) + l2.join("");
                      var u2 = s3.transceivers.every(function(e6) {
                        return e6.iceGatherer && "completed" === e6.iceGatherer.state;
                      });
                      "gathering" !== s3.iceGatheringState && (s3.iceGatheringState = "gathering", s3._emitGatheringStateChange()), d2 || s3._dispatchEvent("icecandidate", o3), u2 && (s3._dispatchEvent("icecandidate", new Event("icecandidate")), s3.iceGatheringState = "complete", s3._emitGatheringStateChange());
                    }
                  }, e4.setTimeout(function() {
                    o2.forEach(function(e5) {
                      r3.onlocalcandidate(e5);
                    });
                  }, 0);
                }
              }, l.prototype._createIceAndDtlsTransports = function() {
                var t6 = this, i5 = new e4.RTCIceTransport(null);
                i5.onicestatechange = function() {
                  t6._updateIceConnectionState(), t6._updateConnectionState();
                };
                var n4 = new e4.RTCDtlsTransport(i5);
                return n4.ondtlsstatechange = function() {
                  t6._updateConnectionState();
                }, n4.onerror = function() {
                  Object.defineProperty(n4, "state", { value: "failed", writable: true }), t6._updateConnectionState();
                }, { iceTransport: i5, dtlsTransport: n4 };
              }, l.prototype._disposeIceAndDtlsTransports = function(e5) {
                var t6 = this.transceivers[e5].iceGatherer;
                t6 && (delete t6.onlocalcandidate, delete this.transceivers[e5].iceGatherer);
                var i5 = this.transceivers[e5].iceTransport;
                i5 && (delete i5.onicestatechange, delete this.transceivers[e5].iceTransport);
                var n4 = this.transceivers[e5].dtlsTransport;
                n4 && (delete n4.ondtlsstatechange, delete n4.onerror, delete this.transceivers[e5].dtlsTransport);
              }, l.prototype._transceive = function(e5, i5, s3) {
                var o2 = r2(e5.localCapabilities, e5.remoteCapabilities);
                i5 && e5.rtpSender && (o2.encodings = e5.sendEncodingParameters, o2.rtcp = { cname: n3.localCName, compound: e5.rtcpParameters.compound }, e5.recvEncodingParameters.length && (o2.rtcp.ssrc = e5.recvEncodingParameters[0].ssrc), e5.rtpSender.send(o2)), s3 && e5.rtpReceiver && o2.codecs.length > 0 && ("video" === e5.kind && e5.recvEncodingParameters && t5 < 15019 && e5.recvEncodingParameters.forEach(function(e6) {
                  delete e6.rtx;
                }), e5.recvEncodingParameters.length ? o2.encodings = e5.recvEncodingParameters : o2.encodings = [{}], o2.rtcp = { compound: e5.rtcpParameters.compound }, e5.rtcpParameters.cname && (o2.rtcp.cname = e5.rtcpParameters.cname), e5.sendEncodingParameters.length && (o2.rtcp.ssrc = e5.sendEncodingParameters[0].ssrc), e5.rtpReceiver.receive(o2));
              }, l.prototype.setLocalDescription = function(e5) {
                var t6, i5, s3 = this;
                if (-1 === ["offer", "answer"].indexOf(e5.type)) return Promise.reject(d("TypeError", 'Unsupported type "' + e5.type + '"'));
                if (!o("setLocalDescription", e5.type, s3.signalingState) || s3._isClosed) return Promise.reject(d("InvalidStateError", "Can not set local " + e5.type + " in state " + s3.signalingState));
                if ("offer" === e5.type) t6 = n3.splitSections(e5.sdp), i5 = t6.shift(), t6.forEach(function(e6, t7) {
                  var i6 = n3.parseRtpParameters(e6);
                  s3.transceivers[t7].localCapabilities = i6;
                }), s3.transceivers.forEach(function(e6, t7) {
                  s3._gather(e6.mid, t7);
                });
                else if ("answer" === e5.type) {
                  t6 = n3.splitSections(s3._remoteDescription.sdp), i5 = t6.shift();
                  var a2 = n3.matchPrefix(i5, "a=ice-lite").length > 0;
                  t6.forEach(function(e6, t7) {
                    var o2 = s3.transceivers[t7], d2 = o2.iceGatherer, c2 = o2.iceTransport, l2 = o2.dtlsTransport, u2 = o2.localCapabilities, h = o2.remoteCapabilities;
                    if (!(n3.isRejected(e6) && 0 === n3.matchPrefix(e6, "a=bundle-only").length || o2.rejected)) {
                      var p = n3.getIceParameters(e6, i5), f = n3.getDtlsParameters(e6, i5);
                      a2 && (f.role = "server"), s3.usingBundle && 0 !== t7 || (s3._gather(o2.mid, t7), "new" === c2.state && c2.start(d2, p, a2 ? "controlling" : "controlled"), "new" === l2.state && l2.start(f));
                      var v = r2(u2, h);
                      s3._transceive(o2, v.codecs.length > 0, false);
                    }
                  });
                }
                return s3._localDescription = { type: e5.type, sdp: e5.sdp }, "offer" === e5.type ? s3._updateSignalingState("have-local-offer") : s3._updateSignalingState("stable"), Promise.resolve();
              }, l.prototype.setRemoteDescription = function(s3) {
                var l2 = this;
                if (-1 === ["offer", "answer"].indexOf(s3.type)) return Promise.reject(d("TypeError", 'Unsupported type "' + s3.type + '"'));
                if (!o("setRemoteDescription", s3.type, l2.signalingState) || l2._isClosed) return Promise.reject(d("InvalidStateError", "Can not set remote " + s3.type + " in state " + l2.signalingState));
                var u2 = {};
                l2.remoteStreams.forEach(function(e5) {
                  u2[e5.id] = e5;
                });
                var h = [], p = n3.splitSections(s3.sdp), f = p.shift(), v = n3.matchPrefix(f, "a=ice-lite").length > 0, m = n3.matchPrefix(f, "a=group:BUNDLE ").length > 0;
                l2.usingBundle = m;
                var g = n3.matchPrefix(f, "a=ice-options:")[0];
                return l2.canTrickleIceCandidates = !!g && g.substr(14).split(" ").indexOf("trickle") >= 0, p.forEach(function(o2, d2) {
                  var c2 = n3.splitLines(o2), p2 = n3.getKind(o2), g2 = n3.isRejected(o2) && 0 === n3.matchPrefix(o2, "a=bundle-only").length, A = c2[0].substr(2).split(" ")[2], S = n3.getDirection(o2, f), b = n3.parseMsid(o2), w = n3.getMid(o2) || n3.generateIdentifier();
                  if (g2 || "application" === p2 && ("DTLS/SCTP" === A || "UDP/DTLS/SCTP" === A)) l2.transceivers[d2] = { mid: w, kind: p2, protocol: A, rejected: true };
                  else {
                    var y, E, C, T, I, R, k, P, D;
                    !g2 && l2.transceivers[d2] && l2.transceivers[d2].rejected && (l2.transceivers[d2] = l2._createTransceiver(p2, true));
                    var O, M, N = n3.parseRtpParameters(o2);
                    g2 || (O = n3.getIceParameters(o2, f), (M = n3.getDtlsParameters(o2, f)).role = "client"), k = n3.parseRtpEncodingParameters(o2);
                    var L = n3.parseRtcpParameters(o2), x = n3.matchPrefix(o2, "a=end-of-candidates", f).length > 0, F = n3.matchPrefix(o2, "a=candidate:").map(function(e5) {
                      return n3.parseCandidate(e5);
                    }).filter(function(e5) {
                      return 1 === e5.component;
                    });
                    if (("offer" === s3.type || "answer" === s3.type) && !g2 && m && d2 > 0 && l2.transceivers[d2] && (l2._disposeIceAndDtlsTransports(d2), l2.transceivers[d2].iceGatherer = l2.transceivers[0].iceGatherer, l2.transceivers[d2].iceTransport = l2.transceivers[0].iceTransport, l2.transceivers[d2].dtlsTransport = l2.transceivers[0].dtlsTransport, l2.transceivers[d2].rtpSender && l2.transceivers[d2].rtpSender.setTransport(l2.transceivers[0].dtlsTransport), l2.transceivers[d2].rtpReceiver && l2.transceivers[d2].rtpReceiver.setTransport(l2.transceivers[0].dtlsTransport)), "offer" !== s3.type || g2) "answer" !== s3.type || g2 || (E = (y = l2.transceivers[d2]).iceGatherer, C = y.iceTransport, T = y.dtlsTransport, I = y.rtpReceiver, R = y.sendEncodingParameters, P = y.localCapabilities, l2.transceivers[d2].recvEncodingParameters = k, l2.transceivers[d2].remoteCapabilities = N, l2.transceivers[d2].rtcpParameters = L, F.length && "new" === C.state && (!v && !x || m && 0 !== d2 ? F.forEach(function(e5) {
                      a(y.iceTransport, e5);
                    }) : C.setRemoteCandidates(F)), m && 0 !== d2 || ("new" === C.state && C.start(E, O, "controlling"), "new" === T.state && T.start(M)), !r2(y.localCapabilities, y.remoteCapabilities).codecs.filter(function(e5) {
                      return "rtx" === e5.name.toLowerCase();
                    }).length && y.sendEncodingParameters[0].rtx && delete y.sendEncodingParameters[0].rtx, l2._transceive(y, "sendrecv" === S || "recvonly" === S, "sendrecv" === S || "sendonly" === S), !I || "sendrecv" !== S && "sendonly" !== S ? delete y.rtpReceiver : (D = I.track, b ? (u2[b.stream] || (u2[b.stream] = new e4.MediaStream()), i4(D, u2[b.stream]), h.push([D, I, u2[b.stream]])) : (u2.default || (u2.default = new e4.MediaStream()), i4(D, u2.default), h.push([D, I, u2.default]))));
                    else {
                      (y = l2.transceivers[d2] || l2._createTransceiver(p2)).mid = w, y.iceGatherer || (y.iceGatherer = l2._createIceGatherer(d2, m)), F.length && "new" === y.iceTransport.state && (!x || m && 0 !== d2 ? F.forEach(function(e5) {
                        a(y.iceTransport, e5);
                      }) : y.iceTransport.setRemoteCandidates(F)), P = e4.RTCRtpReceiver.getCapabilities(p2), t5 < 15019 && (P.codecs = P.codecs.filter(function(e5) {
                        return "rtx" !== e5.name;
                      })), R = y.sendEncodingParameters || [{ ssrc: 1001 * (2 * d2 + 2) }];
                      var _, U = false;
                      "sendrecv" === S || "sendonly" === S ? (U = !y.rtpReceiver, I = y.rtpReceiver || new e4.RTCRtpReceiver(y.dtlsTransport, p2), U && (D = I.track, b && "-" === b.stream || (b ? (u2[b.stream] || (u2[b.stream] = new e4.MediaStream(), Object.defineProperty(u2[b.stream], "id", { get: function() {
                        return b.stream;
                      } })), Object.defineProperty(D, "id", { get: function() {
                        return b.track;
                      } }), _ = u2[b.stream]) : (u2.default || (u2.default = new e4.MediaStream()), _ = u2.default)), _ && (i4(D, _), y.associatedRemoteMediaStreams.push(_)), h.push([D, I, _]))) : y.rtpReceiver && y.rtpReceiver.track && (y.associatedRemoteMediaStreams.forEach(function(t6) {
                        var i5 = t6.getTracks().find(function(e5) {
                          return e5.id === y.rtpReceiver.track.id;
                        });
                        i5 && function(t7, i6) {
                          i6.removeTrack(t7), i6.dispatchEvent(new e4.MediaStreamTrackEvent("removetrack", { track: t7 }));
                        }(i5, t6);
                      }), y.associatedRemoteMediaStreams = []), y.localCapabilities = P, y.remoteCapabilities = N, y.rtpReceiver = I, y.rtcpParameters = L, y.sendEncodingParameters = R, y.recvEncodingParameters = k, l2._transceive(l2.transceivers[d2], false, U);
                    }
                  }
                }), void 0 === l2._dtlsRole && (l2._dtlsRole = "offer" === s3.type ? "active" : "passive"), l2._remoteDescription = { type: s3.type, sdp: s3.sdp }, "offer" === s3.type ? l2._updateSignalingState("have-remote-offer") : l2._updateSignalingState("stable"), Object.keys(u2).forEach(function(t6) {
                  var i5 = u2[t6];
                  if (i5.getTracks().length) {
                    if (-1 === l2.remoteStreams.indexOf(i5)) {
                      l2.remoteStreams.push(i5);
                      var n4 = new Event("addstream");
                      n4.stream = i5, e4.setTimeout(function() {
                        l2._dispatchEvent("addstream", n4);
                      });
                    }
                    h.forEach(function(e5) {
                      var t7 = e5[0], n5 = e5[1];
                      i5.id === e5[2].id && c(l2, t7, n5, [i5]);
                    });
                  }
                }), h.forEach(function(e5) {
                  e5[2] || c(l2, e5[0], e5[1], []);
                }), e4.setTimeout(function() {
                  l2 && l2.transceivers && l2.transceivers.forEach(function(e5) {
                    e5.iceTransport && "new" === e5.iceTransport.state && e5.iceTransport.getRemoteCandidates().length > 0 && (console.warn("Timeout for addRemoteCandidate. Consider sending an end-of-candidates notification"), e5.iceTransport.addRemoteCandidate({}));
                  });
                }, 4e3), Promise.resolve();
              }, l.prototype.close = function() {
                this.transceivers.forEach(function(e5) {
                  e5.iceTransport && e5.iceTransport.stop(), e5.dtlsTransport && e5.dtlsTransport.stop(), e5.rtpSender && e5.rtpSender.stop(), e5.rtpReceiver && e5.rtpReceiver.stop();
                }), this._isClosed = true, this._updateSignalingState("closed");
              }, l.prototype._updateSignalingState = function(e5) {
                this.signalingState = e5;
                var t6 = new Event("signalingstatechange");
                this._dispatchEvent("signalingstatechange", t6);
              }, l.prototype._maybeFireNegotiationNeeded = function() {
                var t6 = this;
                "stable" === this.signalingState && true !== this.needNegotiation && (this.needNegotiation = true, e4.setTimeout(function() {
                  if (t6.needNegotiation) {
                    t6.needNegotiation = false;
                    var e5 = new Event("negotiationneeded");
                    t6._dispatchEvent("negotiationneeded", e5);
                  }
                }, 0));
              }, l.prototype._updateIceConnectionState = function() {
                var e5, t6 = { new: 0, closed: 0, checking: 0, connected: 0, completed: 0, disconnected: 0, failed: 0 };
                if (this.transceivers.forEach(function(e6) {
                  e6.iceTransport && !e6.rejected && t6[e6.iceTransport.state]++;
                }), e5 = "new", t6.failed > 0 ? e5 = "failed" : t6.checking > 0 ? e5 = "checking" : t6.disconnected > 0 ? e5 = "disconnected" : t6.new > 0 ? e5 = "new" : t6.connected > 0 ? e5 = "connected" : t6.completed > 0 && (e5 = "completed"), e5 !== this.iceConnectionState) {
                  this.iceConnectionState = e5;
                  var i5 = new Event("iceconnectionstatechange");
                  this._dispatchEvent("iceconnectionstatechange", i5);
                }
              }, l.prototype._updateConnectionState = function() {
                var e5, t6 = { new: 0, closed: 0, connecting: 0, connected: 0, completed: 0, disconnected: 0, failed: 0 };
                if (this.transceivers.forEach(function(e6) {
                  e6.iceTransport && e6.dtlsTransport && !e6.rejected && (t6[e6.iceTransport.state]++, t6[e6.dtlsTransport.state]++);
                }), t6.connected += t6.completed, e5 = "new", t6.failed > 0 ? e5 = "failed" : t6.connecting > 0 ? e5 = "connecting" : t6.disconnected > 0 ? e5 = "disconnected" : t6.new > 0 ? e5 = "new" : t6.connected > 0 && (e5 = "connected"), e5 !== this.connectionState) {
                  this.connectionState = e5;
                  var i5 = new Event("connectionstatechange");
                  this._dispatchEvent("connectionstatechange", i5);
                }
              }, l.prototype.createOffer = function() {
                var i5 = this;
                if (i5._isClosed) return Promise.reject(d("InvalidStateError", "Can not call createOffer after close"));
                var r3 = i5.transceivers.filter(function(e5) {
                  return "audio" === e5.kind;
                }).length, o2 = i5.transceivers.filter(function(e5) {
                  return "video" === e5.kind;
                }).length, a2 = arguments[0];
                if (a2) {
                  if (a2.mandatory || a2.optional) throw new TypeError("Legacy mandatory/optional constraints not supported.");
                  void 0 !== a2.offerToReceiveAudio && (r3 = true === a2.offerToReceiveAudio ? 1 : false === a2.offerToReceiveAudio ? 0 : a2.offerToReceiveAudio), void 0 !== a2.offerToReceiveVideo && (o2 = true === a2.offerToReceiveVideo ? 1 : false === a2.offerToReceiveVideo ? 0 : a2.offerToReceiveVideo);
                }
                for (i5.transceivers.forEach(function(e5) {
                  "audio" === e5.kind ? --r3 < 0 && (e5.wantReceive = false) : "video" === e5.kind && --o2 < 0 && (e5.wantReceive = false);
                }); r3 > 0 || o2 > 0; ) r3 > 0 && (i5._createTransceiver("audio"), r3--), o2 > 0 && (i5._createTransceiver("video"), o2--);
                var c2 = n3.writeSessionBoilerplate(i5._sdpSessionId, i5._sdpSessionVersion++);
                i5.transceivers.forEach(function(s3, r4) {
                  var o3 = s3.track, a3 = s3.kind, d2 = s3.mid || n3.generateIdentifier();
                  s3.mid = d2, s3.iceGatherer || (s3.iceGatherer = i5._createIceGatherer(r4, i5.usingBundle));
                  var c3 = e4.RTCRtpSender.getCapabilities(a3);
                  t5 < 15019 && (c3.codecs = c3.codecs.filter(function(e5) {
                    return "rtx" !== e5.name;
                  })), c3.codecs.forEach(function(e5) {
                    "H264" === e5.name && void 0 === e5.parameters["level-asymmetry-allowed"] && (e5.parameters["level-asymmetry-allowed"] = "1"), s3.remoteCapabilities && s3.remoteCapabilities.codecs && s3.remoteCapabilities.codecs.forEach(function(t6) {
                      e5.name.toLowerCase() === t6.name.toLowerCase() && e5.clockRate === t6.clockRate && (e5.preferredPayloadType = t6.payloadType);
                    });
                  }), c3.headerExtensions.forEach(function(e5) {
                    (s3.remoteCapabilities && s3.remoteCapabilities.headerExtensions || []).forEach(function(t6) {
                      e5.uri === t6.uri && (e5.id = t6.id);
                    });
                  });
                  var l3 = s3.sendEncodingParameters || [{ ssrc: 1001 * (2 * r4 + 1) }];
                  o3 && t5 >= 15019 && "video" === a3 && !l3[0].rtx && (l3[0].rtx = { ssrc: l3[0].ssrc + 1 }), s3.wantReceive && (s3.rtpReceiver = new e4.RTCRtpReceiver(s3.dtlsTransport, a3)), s3.localCapabilities = c3, s3.sendEncodingParameters = l3;
                }), "max-compat" !== i5._config.bundlePolicy && (c2 += "a=group:BUNDLE " + i5.transceivers.map(function(e5) {
                  return e5.mid;
                }).join(" ") + "\r\n"), c2 += "a=ice-options:trickle\r\n", i5.transceivers.forEach(function(e5, t6) {
                  c2 += s2(e5, e5.localCapabilities, "offer", e5.stream, i5._dtlsRole), c2 += "a=rtcp-rsize\r\n", !e5.iceGatherer || "new" === i5.iceGatheringState || 0 !== t6 && i5.usingBundle || (e5.iceGatherer.getLocalCandidates().forEach(function(e6) {
                    e6.component = 1, c2 += "a=" + n3.writeCandidate(e6) + "\r\n";
                  }), "completed" === e5.iceGatherer.state && (c2 += "a=end-of-candidates\r\n"));
                });
                var l2 = new e4.RTCSessionDescription({ type: "offer", sdp: c2 });
                return Promise.resolve(l2);
              }, l.prototype.createAnswer = function() {
                var i5 = this;
                if (i5._isClosed) return Promise.reject(d("InvalidStateError", "Can not call createAnswer after close"));
                if ("have-remote-offer" !== i5.signalingState && "have-local-pranswer" !== i5.signalingState) return Promise.reject(d("InvalidStateError", "Can not call createAnswer in signalingState " + i5.signalingState));
                var o2 = n3.writeSessionBoilerplate(i5._sdpSessionId, i5._sdpSessionVersion++);
                i5.usingBundle && (o2 += "a=group:BUNDLE " + i5.transceivers.map(function(e5) {
                  return e5.mid;
                }).join(" ") + "\r\n"), o2 += "a=ice-options:trickle\r\n";
                var a2 = n3.getMediaSections(i5._remoteDescription.sdp).length;
                i5.transceivers.forEach(function(e5, n4) {
                  if (!(n4 + 1 > a2)) {
                    if (e5.rejected) return "application" === e5.kind ? "DTLS/SCTP" === e5.protocol ? o2 += "m=application 0 DTLS/SCTP 5000\r\n" : o2 += "m=application 0 " + e5.protocol + " webrtc-datachannel\r\n" : "audio" === e5.kind ? o2 += "m=audio 0 UDP/TLS/RTP/SAVPF 0\r\na=rtpmap:0 PCMU/8000\r\n" : "video" === e5.kind && (o2 += "m=video 0 UDP/TLS/RTP/SAVPF 120\r\na=rtpmap:120 VP8/90000\r\n"), void (o2 += "c=IN IP4 0.0.0.0\r\na=inactive\r\na=mid:" + e5.mid + "\r\n");
                    var d2;
                    e5.stream && ("audio" === e5.kind ? d2 = e5.stream.getAudioTracks()[0] : "video" === e5.kind && (d2 = e5.stream.getVideoTracks()[0]), d2 && t5 >= 15019 && "video" === e5.kind && !e5.sendEncodingParameters[0].rtx && (e5.sendEncodingParameters[0].rtx = { ssrc: e5.sendEncodingParameters[0].ssrc + 1 }));
                    var c3 = r2(e5.localCapabilities, e5.remoteCapabilities);
                    !c3.codecs.filter(function(e6) {
                      return "rtx" === e6.name.toLowerCase();
                    }).length && e5.sendEncodingParameters[0].rtx && delete e5.sendEncodingParameters[0].rtx, o2 += s2(e5, c3, "answer", e5.stream, i5._dtlsRole), e5.rtcpParameters && e5.rtcpParameters.reducedSize && (o2 += "a=rtcp-rsize\r\n");
                  }
                });
                var c2 = new e4.RTCSessionDescription({ type: "answer", sdp: o2 });
                return Promise.resolve(c2);
              }, l.prototype.addIceCandidate = function(e5) {
                var t6, i5 = this;
                return e5 && void 0 === e5.sdpMLineIndex && !e5.sdpMid ? Promise.reject(new TypeError("sdpMLineIndex or sdpMid required")) : new Promise(function(s3, r3) {
                  if (!i5._remoteDescription) return r3(d("InvalidStateError", "Can not add ICE candidate without a remote description"));
                  if (e5 && "" !== e5.candidate) {
                    var o2 = e5.sdpMLineIndex;
                    if (e5.sdpMid) {
                      for (var c2 = 0; c2 < i5.transceivers.length; c2++) if (i5.transceivers[c2].mid === e5.sdpMid) {
                        o2 = c2;
                        break;
                      }
                    }
                    var l2 = i5.transceivers[o2];
                    if (!l2) return r3(d("OperationError", "Can not add ICE candidate"));
                    if (l2.rejected) return s3();
                    var u2 = Object.keys(e5.candidate).length > 0 ? n3.parseCandidate(e5.candidate) : {};
                    if ("tcp" === u2.protocol && (0 === u2.port || 9 === u2.port)) return s3();
                    if (u2.component && 1 !== u2.component) return s3();
                    if ((0 === o2 || o2 > 0 && l2.iceTransport !== i5.transceivers[0].iceTransport) && !a(l2.iceTransport, u2)) return r3(d("OperationError", "Can not add ICE candidate"));
                    var h = e5.candidate.trim();
                    0 === h.indexOf("a=") && (h = h.substr(2)), (t6 = n3.getMediaSections(i5._remoteDescription.sdp))[o2] += "a=" + (u2.type ? h : "end-of-candidates") + "\r\n", i5._remoteDescription.sdp = n3.getDescription(i5._remoteDescription.sdp) + t6.join("");
                  } else for (var p = 0; p < i5.transceivers.length && (i5.transceivers[p].rejected || (i5.transceivers[p].iceTransport.addRemoteCandidate({}), (t6 = n3.getMediaSections(i5._remoteDescription.sdp))[p] += "a=end-of-candidates\r\n", i5._remoteDescription.sdp = n3.getDescription(i5._remoteDescription.sdp) + t6.join(""), !i5.usingBundle)); p++) ;
                  s3();
                });
              }, l.prototype.getStats = function(t6) {
                if (t6 && t6 instanceof e4.MediaStreamTrack) {
                  var i5 = null;
                  if (this.transceivers.forEach(function(e5) {
                    e5.rtpSender && e5.rtpSender.track === t6 ? i5 = e5.rtpSender : e5.rtpReceiver && e5.rtpReceiver.track === t6 && (i5 = e5.rtpReceiver);
                  }), !i5) throw d("InvalidAccessError", "Invalid selector.");
                  return i5.getStats();
                }
                var n4 = [];
                return this.transceivers.forEach(function(e5) {
                  ["rtpSender", "rtpReceiver", "iceGatherer", "iceTransport", "dtlsTransport"].forEach(function(t7) {
                    e5[t7] && n4.push(e5[t7].getStats());
                  });
                }), Promise.all(n4).then(function(e5) {
                  var t7 = /* @__PURE__ */ new Map();
                  return e5.forEach(function(e6) {
                    e6.forEach(function(e7) {
                      t7.set(e7.id, e7);
                    });
                  }), t7;
                });
              }, ["RTCRtpSender", "RTCRtpReceiver", "RTCIceGatherer", "RTCIceTransport", "RTCDtlsTransport"].forEach(function(t6) {
                var i5 = e4[t6];
                if (i5 && i5.prototype && i5.prototype.getStats) {
                  var n4 = i5.prototype.getStats;
                  i5.prototype.getStats = function() {
                    return n4.apply(this).then(function(e5) {
                      var t7 = /* @__PURE__ */ new Map();
                      return Object.keys(e5).forEach(function(i6) {
                        var n5;
                        e5[i6].type = { inboundrtp: "inbound-rtp", outboundrtp: "outbound-rtp", candidatepair: "candidate-pair", localcandidate: "local-candidate", remotecandidate: "remote-candidate" }[(n5 = e5[i6]).type] || n5.type, t7.set(i6, e5[i6]);
                      }), t7;
                    });
                  };
                }
              });
              var u = ["createOffer", "createAnswer"];
              return u.forEach(function(e5) {
                var t6 = l.prototype[e5];
                l.prototype[e5] = function() {
                  var e6 = arguments;
                  return "function" == typeof e6[0] || "function" == typeof e6[1] ? t6.apply(this, [arguments[2]]).then(function(t7) {
                    "function" == typeof e6[0] && e6[0].apply(null, [t7]);
                  }, function(t7) {
                    "function" == typeof e6[1] && e6[1].apply(null, [t7]);
                  }) : t6.apply(this, arguments);
                };
              }), (u = ["setLocalDescription", "setRemoteDescription", "addIceCandidate"]).forEach(function(e5) {
                var t6 = l.prototype[e5];
                l.prototype[e5] = function() {
                  var e6 = arguments;
                  return "function" == typeof e6[1] || "function" == typeof e6[2] ? t6.apply(this, arguments).then(function() {
                    "function" == typeof e6[1] && e6[1].apply(null);
                  }, function(t7) {
                    "function" == typeof e6[2] && e6[2].apply(null, [t7]);
                  }) : t6.apply(this, arguments);
                };
              }), ["getStats"].forEach(function(e5) {
                var t6 = l.prototype[e5];
                l.prototype[e5] = function() {
                  var e6 = arguments;
                  return "function" == typeof e6[1] ? t6.apply(this, arguments).then(function() {
                    "function" == typeof e6[1] && e6[1].apply(null);
                  }) : t6.apply(this, arguments);
                };
              }), l;
            };
          }, 985: (e3) => {
            "use strict";
            var t4 = { generateIdentifier: function() {
              return Math.random().toString(36).substr(2, 10);
            } };
            t4.localCName = t4.generateIdentifier(), t4.splitLines = function(e4) {
              return e4.trim().split("\n").map(function(e5) {
                return e5.trim();
              });
            }, t4.splitSections = function(e4) {
              return e4.split("\nm=").map(function(e5, t5) {
                return (t5 > 0 ? "m=" + e5 : e5).trim() + "\r\n";
              });
            }, t4.getDescription = function(e4) {
              var i3 = t4.splitSections(e4);
              return i3 && i3[0];
            }, t4.getMediaSections = function(e4) {
              var i3 = t4.splitSections(e4);
              return i3.shift(), i3;
            }, t4.matchPrefix = function(e4, i3) {
              return t4.splitLines(e4).filter(function(e5) {
                return 0 === e5.indexOf(i3);
              });
            }, t4.parseCandidate = function(e4) {
              for (var t5, i3 = { foundation: (t5 = 0 === e4.indexOf("a=candidate:") ? e4.substring(12).split(" ") : e4.substring(10).split(" "))[0], component: parseInt(t5[1], 10), protocol: t5[2].toLowerCase(), priority: parseInt(t5[3], 10), ip: t5[4], address: t5[4], port: parseInt(t5[5], 10), type: t5[7] }, n3 = 8; n3 < t5.length; n3 += 2) switch (t5[n3]) {
                case "raddr":
                  i3.relatedAddress = t5[n3 + 1];
                  break;
                case "rport":
                  i3.relatedPort = parseInt(t5[n3 + 1], 10);
                  break;
                case "tcptype":
                  i3.tcpType = t5[n3 + 1];
                  break;
                case "ufrag":
                  i3.ufrag = t5[n3 + 1], i3.usernameFragment = t5[n3 + 1];
                  break;
                default:
                  i3[t5[n3]] = t5[n3 + 1];
              }
              return i3;
            }, t4.writeCandidate = function(e4) {
              var t5 = [];
              t5.push(e4.foundation), t5.push(e4.component), t5.push(e4.protocol.toUpperCase()), t5.push(e4.priority), t5.push(e4.address || e4.ip), t5.push(e4.port);
              var i3 = e4.type;
              return t5.push("typ"), t5.push(i3), "host" !== i3 && e4.relatedAddress && e4.relatedPort && (t5.push("raddr"), t5.push(e4.relatedAddress), t5.push("rport"), t5.push(e4.relatedPort)), e4.tcpType && "tcp" === e4.protocol.toLowerCase() && (t5.push("tcptype"), t5.push(e4.tcpType)), (e4.usernameFragment || e4.ufrag) && (t5.push("ufrag"), t5.push(e4.usernameFragment || e4.ufrag)), "candidate:" + t5.join(" ");
            }, t4.parseIceOptions = function(e4) {
              return e4.substr(14).split(" ");
            }, t4.parseRtpMap = function(e4) {
              var t5 = e4.substr(9).split(" "), i3 = { payloadType: parseInt(t5.shift(), 10) };
              return t5 = t5[0].split("/"), i3.name = t5[0], i3.clockRate = parseInt(t5[1], 10), i3.channels = 3 === t5.length ? parseInt(t5[2], 10) : 1, i3.numChannels = i3.channels, i3;
            }, t4.writeRtpMap = function(e4) {
              var t5 = e4.payloadType;
              void 0 !== e4.preferredPayloadType && (t5 = e4.preferredPayloadType);
              var i3 = e4.channels || e4.numChannels || 1;
              return "a=rtpmap:" + t5 + " " + e4.name + "/" + e4.clockRate + (1 !== i3 ? "/" + i3 : "") + "\r\n";
            }, t4.parseExtmap = function(e4) {
              var t5 = e4.substr(9).split(" ");
              return { id: parseInt(t5[0], 10), direction: t5[0].indexOf("/") > 0 ? t5[0].split("/")[1] : "sendrecv", uri: t5[1] };
            }, t4.writeExtmap = function(e4) {
              return "a=extmap:" + (e4.id || e4.preferredId) + (e4.direction && "sendrecv" !== e4.direction ? "/" + e4.direction : "") + " " + e4.uri + "\r\n";
            }, t4.parseFmtp = function(e4) {
              for (var t5, i3 = {}, n3 = e4.substr(e4.indexOf(" ") + 1).split(";"), s2 = 0; s2 < n3.length; s2++) i3[(t5 = n3[s2].trim().split("="))[0].trim()] = t5[1];
              return i3;
            }, t4.writeFmtp = function(e4) {
              var t5 = "", i3 = e4.payloadType;
              if (void 0 !== e4.preferredPayloadType && (i3 = e4.preferredPayloadType), e4.parameters && Object.keys(e4.parameters).length) {
                var n3 = [];
                Object.keys(e4.parameters).forEach(function(t6) {
                  e4.parameters[t6] ? n3.push(t6 + "=" + e4.parameters[t6]) : n3.push(t6);
                }), t5 += "a=fmtp:" + i3 + " " + n3.join(";") + "\r\n";
              }
              return t5;
            }, t4.parseRtcpFb = function(e4) {
              var t5 = e4.substr(e4.indexOf(" ") + 1).split(" ");
              return { type: t5.shift(), parameter: t5.join(" ") };
            }, t4.writeRtcpFb = function(e4) {
              var t5 = "", i3 = e4.payloadType;
              return void 0 !== e4.preferredPayloadType && (i3 = e4.preferredPayloadType), e4.rtcpFeedback && e4.rtcpFeedback.length && e4.rtcpFeedback.forEach(function(e5) {
                t5 += "a=rtcp-fb:" + i3 + " " + e5.type + (e5.parameter && e5.parameter.length ? " " + e5.parameter : "") + "\r\n";
              }), t5;
            }, t4.parseSsrcMedia = function(e4) {
              var t5 = e4.indexOf(" "), i3 = { ssrc: parseInt(e4.substr(7, t5 - 7), 10) }, n3 = e4.indexOf(":", t5);
              return n3 > -1 ? (i3.attribute = e4.substr(t5 + 1, n3 - t5 - 1), i3.value = e4.substr(n3 + 1)) : i3.attribute = e4.substr(t5 + 1), i3;
            }, t4.parseSsrcGroup = function(e4) {
              var t5 = e4.substr(13).split(" ");
              return { semantics: t5.shift(), ssrcs: t5.map(function(e5) {
                return parseInt(e5, 10);
              }) };
            }, t4.getMid = function(e4) {
              var i3 = t4.matchPrefix(e4, "a=mid:")[0];
              if (i3) return i3.substr(6);
            }, t4.parseFingerprint = function(e4) {
              var t5 = e4.substr(14).split(" ");
              return { algorithm: t5[0].toLowerCase(), value: t5[1] };
            }, t4.getDtlsParameters = function(e4, i3) {
              return { role: "auto", fingerprints: t4.matchPrefix(e4 + i3, "a=fingerprint:").map(t4.parseFingerprint) };
            }, t4.writeDtlsParameters = function(e4, t5) {
              var i3 = "a=setup:" + t5 + "\r\n";
              return e4.fingerprints.forEach(function(e5) {
                i3 += "a=fingerprint:" + e5.algorithm + " " + e5.value + "\r\n";
              }), i3;
            }, t4.parseCryptoLine = function(e4) {
              var t5 = e4.substr(9).split(" ");
              return { tag: parseInt(t5[0], 10), cryptoSuite: t5[1], keyParams: t5[2], sessionParams: t5.slice(3) };
            }, t4.writeCryptoLine = function(e4) {
              return "a=crypto:" + e4.tag + " " + e4.cryptoSuite + " " + ("object" == typeof e4.keyParams ? t4.writeCryptoKeyParams(e4.keyParams) : e4.keyParams) + (e4.sessionParams ? " " + e4.sessionParams.join(" ") : "") + "\r\n";
            }, t4.parseCryptoKeyParams = function(e4) {
              if (0 !== e4.indexOf("inline:")) return null;
              var t5 = e4.substr(7).split("|");
              return { keyMethod: "inline", keySalt: t5[0], lifeTime: t5[1], mkiValue: t5[2] ? t5[2].split(":")[0] : void 0, mkiLength: t5[2] ? t5[2].split(":")[1] : void 0 };
            }, t4.writeCryptoKeyParams = function(e4) {
              return e4.keyMethod + ":" + e4.keySalt + (e4.lifeTime ? "|" + e4.lifeTime : "") + (e4.mkiValue && e4.mkiLength ? "|" + e4.mkiValue + ":" + e4.mkiLength : "");
            }, t4.getCryptoParameters = function(e4, i3) {
              return t4.matchPrefix(e4 + i3, "a=crypto:").map(t4.parseCryptoLine);
            }, t4.getIceParameters = function(e4, i3) {
              var n3 = t4.matchPrefix(e4 + i3, "a=ice-ufrag:")[0], s2 = t4.matchPrefix(e4 + i3, "a=ice-pwd:")[0];
              return n3 && s2 ? { usernameFragment: n3.substr(12), password: s2.substr(10) } : null;
            }, t4.writeIceParameters = function(e4) {
              return "a=ice-ufrag:" + e4.usernameFragment + "\r\na=ice-pwd:" + e4.password + "\r\n";
            }, t4.parseRtpParameters = function(e4) {
              for (var i3 = { codecs: [], headerExtensions: [], fecMechanisms: [], rtcp: [] }, n3 = t4.splitLines(e4)[0].split(" "), s2 = 3; s2 < n3.length; s2++) {
                var r2 = n3[s2], o = t4.matchPrefix(e4, "a=rtpmap:" + r2 + " ")[0];
                if (o) {
                  var a = t4.parseRtpMap(o), d = t4.matchPrefix(e4, "a=fmtp:" + r2 + " ");
                  switch (a.parameters = d.length ? t4.parseFmtp(d[0]) : {}, a.rtcpFeedback = t4.matchPrefix(e4, "a=rtcp-fb:" + r2 + " ").map(t4.parseRtcpFb), i3.codecs.push(a), a.name.toUpperCase()) {
                    case "RED":
                    case "ULPFEC":
                      i3.fecMechanisms.push(a.name.toUpperCase());
                  }
                }
              }
              return t4.matchPrefix(e4, "a=extmap:").forEach(function(e5) {
                i3.headerExtensions.push(t4.parseExtmap(e5));
              }), i3;
            }, t4.writeRtpDescription = function(e4, i3) {
              var n3 = "";
              n3 += "m=" + e4 + " ", n3 += i3.codecs.length > 0 ? "9" : "0", n3 += " UDP/TLS/RTP/SAVPF ", n3 += i3.codecs.map(function(e5) {
                return void 0 !== e5.preferredPayloadType ? e5.preferredPayloadType : e5.payloadType;
              }).join(" ") + "\r\n", n3 += "c=IN IP4 0.0.0.0\r\n", n3 += "a=rtcp:9 IN IP4 0.0.0.0\r\n", i3.codecs.forEach(function(e5) {
                n3 += t4.writeRtpMap(e5), n3 += t4.writeFmtp(e5), n3 += t4.writeRtcpFb(e5);
              });
              var s2 = 0;
              return i3.codecs.forEach(function(e5) {
                e5.maxptime > s2 && (s2 = e5.maxptime);
              }), s2 > 0 && (n3 += "a=maxptime:" + s2 + "\r\n"), n3 += "a=rtcp-mux\r\n", i3.headerExtensions && i3.headerExtensions.forEach(function(e5) {
                n3 += t4.writeExtmap(e5);
              }), n3;
            }, t4.parseRtpEncodingParameters = function(e4) {
              var i3, n3 = [], s2 = t4.parseRtpParameters(e4), r2 = -1 !== s2.fecMechanisms.indexOf("RED"), o = -1 !== s2.fecMechanisms.indexOf("ULPFEC"), a = t4.matchPrefix(e4, "a=ssrc:").map(function(e5) {
                return t4.parseSsrcMedia(e5);
              }).filter(function(e5) {
                return "cname" === e5.attribute;
              }), d = a.length > 0 && a[0].ssrc, c = t4.matchPrefix(e4, "a=ssrc-group:FID").map(function(e5) {
                return e5.substr(17).split(" ").map(function(e6) {
                  return parseInt(e6, 10);
                });
              });
              c.length > 0 && c[0].length > 1 && c[0][0] === d && (i3 = c[0][1]), s2.codecs.forEach(function(e5) {
                if ("RTX" === e5.name.toUpperCase() && e5.parameters.apt) {
                  var t5 = { ssrc: d, codecPayloadType: parseInt(e5.parameters.apt, 10) };
                  d && i3 && (t5.rtx = { ssrc: i3 }), n3.push(t5), r2 && ((t5 = JSON.parse(JSON.stringify(t5))).fec = { ssrc: d, mechanism: o ? "red+ulpfec" : "red" }, n3.push(t5));
                }
              }), 0 === n3.length && d && n3.push({ ssrc: d });
              var l = t4.matchPrefix(e4, "b=");
              return l.length && (l = 0 === l[0].indexOf("b=TIAS:") ? parseInt(l[0].substr(7), 10) : 0 === l[0].indexOf("b=AS:") ? 1e3 * parseInt(l[0].substr(5), 10) * 0.95 - 16e3 : void 0, n3.forEach(function(e5) {
                e5.maxBitrate = l;
              })), n3;
            }, t4.parseRtcpParameters = function(e4) {
              var i3 = {}, n3 = t4.matchPrefix(e4, "a=ssrc:").map(function(e5) {
                return t4.parseSsrcMedia(e5);
              }).filter(function(e5) {
                return "cname" === e5.attribute;
              })[0];
              n3 && (i3.cname = n3.value, i3.ssrc = n3.ssrc);
              var s2 = t4.matchPrefix(e4, "a=rtcp-rsize");
              i3.reducedSize = s2.length > 0, i3.compound = 0 === s2.length;
              var r2 = t4.matchPrefix(e4, "a=rtcp-mux");
              return i3.mux = r2.length > 0, i3;
            }, t4.parseMsid = function(e4) {
              var i3, n3 = t4.matchPrefix(e4, "a=msid:");
              if (1 === n3.length) return { stream: (i3 = n3[0].substr(7).split(" "))[0], track: i3[1] };
              var s2 = t4.matchPrefix(e4, "a=ssrc:").map(function(e5) {
                return t4.parseSsrcMedia(e5);
              }).filter(function(e5) {
                return "msid" === e5.attribute;
              });
              return s2.length > 0 ? { stream: (i3 = s2[0].value.split(" "))[0], track: i3[1] } : void 0;
            }, t4.parseSctpDescription = function(e4) {
              var i3, n3 = t4.parseMLine(e4), s2 = t4.matchPrefix(e4, "a=max-message-size:");
              s2.length > 0 && (i3 = parseInt(s2[0].substr(19), 10)), isNaN(i3) && (i3 = 65536);
              var r2 = t4.matchPrefix(e4, "a=sctp-port:");
              if (r2.length > 0) return { port: parseInt(r2[0].substr(12), 10), protocol: n3.fmt, maxMessageSize: i3 };
              if (t4.matchPrefix(e4, "a=sctpmap:").length > 0) {
                var o = t4.matchPrefix(e4, "a=sctpmap:")[0].substr(10).split(" ");
                return { port: parseInt(o[0], 10), protocol: o[1], maxMessageSize: i3 };
              }
            }, t4.writeSctpDescription = function(e4, t5) {
              var i3 = [];
              return i3 = "DTLS/SCTP" !== e4.protocol ? ["m=" + e4.kind + " 9 " + e4.protocol + " " + t5.protocol + "\r\n", "c=IN IP4 0.0.0.0\r\n", "a=sctp-port:" + t5.port + "\r\n"] : ["m=" + e4.kind + " 9 " + e4.protocol + " " + t5.port + "\r\n", "c=IN IP4 0.0.0.0\r\n", "a=sctpmap:" + t5.port + " " + t5.protocol + " 65535\r\n"], void 0 !== t5.maxMessageSize && i3.push("a=max-message-size:" + t5.maxMessageSize + "\r\n"), i3.join("");
            }, t4.generateSessionId = function() {
              return Math.random().toString().substr(2, 21);
            }, t4.writeSessionBoilerplate = function(e4, i3, n3) {
              var s2 = void 0 !== i3 ? i3 : 2;
              return "v=0\r\no=" + (n3 || "thisisadapterortc") + " " + (e4 || t4.generateSessionId()) + " " + s2 + " IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\n";
            }, t4.writeMediaSection = function(e4, i3, n3, s2) {
              var r2 = t4.writeRtpDescription(e4.kind, i3);
              if (r2 += t4.writeIceParameters(e4.iceGatherer.getLocalParameters()), r2 += t4.writeDtlsParameters(e4.dtlsTransport.getLocalParameters(), "offer" === n3 ? "actpass" : "active"), r2 += "a=mid:" + e4.mid + "\r\n", e4.direction ? r2 += "a=" + e4.direction + "\r\n" : e4.rtpSender && e4.rtpReceiver ? r2 += "a=sendrecv\r\n" : e4.rtpSender ? r2 += "a=sendonly\r\n" : e4.rtpReceiver ? r2 += "a=recvonly\r\n" : r2 += "a=inactive\r\n", e4.rtpSender) {
                var o = "msid:" + s2.id + " " + e4.rtpSender.track.id + "\r\n";
                r2 += "a=" + o, r2 += "a=ssrc:" + e4.sendEncodingParameters[0].ssrc + " " + o, e4.sendEncodingParameters[0].rtx && (r2 += "a=ssrc:" + e4.sendEncodingParameters[0].rtx.ssrc + " " + o, r2 += "a=ssrc-group:FID " + e4.sendEncodingParameters[0].ssrc + " " + e4.sendEncodingParameters[0].rtx.ssrc + "\r\n");
              }
              return r2 += "a=ssrc:" + e4.sendEncodingParameters[0].ssrc + " cname:" + t4.localCName + "\r\n", e4.rtpSender && e4.sendEncodingParameters[0].rtx && (r2 += "a=ssrc:" + e4.sendEncodingParameters[0].rtx.ssrc + " cname:" + t4.localCName + "\r\n"), r2;
            }, t4.getDirection = function(e4, i3) {
              for (var n3 = t4.splitLines(e4), s2 = 0; s2 < n3.length; s2++) switch (n3[s2]) {
                case "a=sendrecv":
                case "a=sendonly":
                case "a=recvonly":
                case "a=inactive":
                  return n3[s2].substr(2);
              }
              return i3 ? t4.getDirection(i3) : "sendrecv";
            }, t4.getKind = function(e4) {
              return t4.splitLines(e4)[0].split(" ")[0].substr(2);
            }, t4.isRejected = function(e4) {
              return "0" === e4.split(" ", 2)[1];
            }, t4.parseMLine = function(e4) {
              var i3 = t4.splitLines(e4)[0].substr(2).split(" ");
              return { kind: i3[0], port: parseInt(i3[1], 10), protocol: i3[2], fmt: i3.slice(3).join(" ") };
            }, t4.parseOLine = function(e4) {
              var i3 = t4.matchPrefix(e4, "o=")[0].substr(2).split(" ");
              return { username: i3[0], sessionId: i3[1], sessionVersion: parseInt(i3[2], 10), netType: i3[3], addressType: i3[4], address: i3[5] };
            }, t4.isValidSDP = function(e4) {
              if ("string" != typeof e4 || 0 === e4.length) return false;
              for (var i3 = t4.splitLines(e4), n3 = 0; n3 < i3.length; n3++) if (i3[n3].length < 2 || "=" !== i3[n3].charAt(1)) return false;
              return true;
            }, e3.exports = t4;
          }, 778: (e3) => {
            "use strict";
            e3.exports = i2(355);
          }, 754: (e3) => {
            "use strict";
            e3.exports = i2(142);
          } }, n2 = {};
          function s(e3) {
            var i3 = n2[e3];
            if (void 0 !== i3) return i3.exports;
            var r2 = n2[e3] = { exports: {} };
            return t3[e3](r2, r2.exports, s), r2.exports;
          }
          s.n = (e3) => {
            var t4 = e3 && e3.__esModule ? () => e3.default : () => e3;
            return s.d(t4, { a: t4 }), t4;
          }, s.d = (e3, t4) => {
            for (var i3 in t4) s.o(t4, i3) && !s.o(e3, i3) && Object.defineProperty(e3, i3, { enumerable: true, get: t4[i3] });
          }, s.o = (e3, t4) => Object.prototype.hasOwnProperty.call(e3, t4), s.r = (e3) => {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e3, "__esModule", { value: true });
          };
          var r = {};
          (() => {
            "use strict";
            s.r(r), s.d(r, { AdAction: () => Xe, AdState: () => Je, AddPlatformTelemetry: () => Te, AppLaunchMode: () => tt, AppLevelProtocol: () => $e, AudioFormat: () => At, AuthType: () => Ee, BitDepth: () => Qe, BrowserFeature: () => xt, BrowserName: () => lt, CHANGELIST: () => ye, CLIENT_IDENTIFICATION: () => mt, CLIENT_VERSION: () => vt, CalculateDataUsage: () => ke, CalculateMaxBitrateKbps: () => Re, ChooseStreamingResolution: () => fe, ChooseStreamingSettings: () => pe, ClientHeaderBrowserType: () => Dt, ClientHeaderDeviceType: () => Ot, ClientHeaderOSType: () => Pt, ClientStreamer: () => St, ClientType: () => Ye, ConfigureGridServerSettings: () => ct, ConfigureRagnarokSettings: () => we, CursorType: () => ei, DeviceModel: () => pt, DeviceOS: () => Ge, DeviceType: () => je, DeviceVendor: () => ft, DynamicStreamingMode: () => Xt, EVENTS: () => De, GS_EVENTS: () => bt, GetDeviceCapabilities: () => ge, GetSupportedAudioChannelCount: () => me, GridApp: () => he, GridServer: () => wt, GridServerSettings: () => dt, GsErrorCode: () => at, HidType: () => Kt, HotkeyModifier: () => Oe, InitializeUtils: () => ve, InputType: () => qt, IsFeatureSupported: () => Ie, LogImpl: () => Pe, LogLevel: () => He, MediaTrackKind: () => Qt, MicState: () => Jt, NetworkType: () => Be, NskTelemetry: () => Bt, PassThruServer: () => yt, PayloadBrowserType: () => Rt, PayloadDeviceType: () => kt, PayloadOSType: () => It, PlatformName: () => ut, Protocol: () => qe, RErrorCode: () => zt, RNotificationCode: () => Fe, SESSIONMODIFY_ACTION: () => gt, STREAMING_STATE: () => xe, ScErrorCode: () => _e, SdrHdrMode: () => ze, SessionControlTelemetry: () => ot, SessionProgressState: () => et, SessionState: () => Ze, StreamStopReason: () => Yt, StreamWarningType: () => Zt, StreamingProfilePreset: () => Ne, StreamingState: () => ti, TrackType: () => Le, Usage: () => Ke, VideoCodecType: () => $t, VirtualButton: () => Se, VirtualGamepadHandler: () => be, VsyncType: () => Et, configureRagnarokSettings: () => Ht, configureSessionControlSettings: () => Ue, createNskStreamClient: () => Vt, createSessionControl: () => We, defaultInputConfigFlags: () => Me, estimateDataUsage: () => Gt, getDeviceCapabilities: () => Ct, getNetworkTypeDetector: () => Wt, getPlatformDetails: () => ht, getRecommendedBitrate: () => Ut, getResumableSession: () => rt, getStreamStartParameters: () => jt, getStreamerType: () => Lt, getSupportedCodecs: () => Ae, isCancelCode: () => nt, isFeatureSupported: () => Ft, isResumableSessionState: () => st, performHttpRequest: () => Ce, registerLogCallback: () => Ve, serializeDeviceCapabilities: () => Tt, shouldDefaultEnableMic: () => _t, translatePlatformDetailsForClientHeader: () => Nt, translatePlatformDetailsForPayload: () => Mt, updateSessionParameters: () => it });
            var e3 = {};
            s.r(e3), s.d(e3, { fixNegotiationNeeded: () => O, shimAddTrackRemoveTrack: () => P, shimAddTrackRemoveTrackWithNative: () => k, shimGetDisplayMedia: () => y, shimGetSendersWithDtmf: () => T, shimGetStats: () => I, shimGetUserMedia: () => w, shimMediaStream: () => E, shimOnTrack: () => C, shimPeerConnection: () => D, shimSenderReceiverGetStats: () => R });
            var t4 = {};
            s.r(t4), s.d(t4, { shimGetDisplayMedia: () => x, shimGetUserMedia: () => L, shimPeerConnection: () => F, shimReplaceTrack: () => _ });
            var i3 = {};
            s.r(i3), s.d(i3, { shimAddTransceiver: () => K, shimCreateAnswer: () => J, shimCreateOffer: () => $, shimGetDisplayMedia: () => j, shimGetParameters: () => q, shimGetUserMedia: () => U, shimOnTrack: () => G, shimPeerConnection: () => B, shimRTCDataChannel: () => z, shimReceiverGetStats: () => H, shimRemoveStream: () => W, shimSenderGetStats: () => V });
            var n3 = {};
            s.r(n3), s.d(n3, { shimAudioContext: () => se, shimCallbacksAPI: () => Y, shimConstraints: () => ee, shimCreateOfferLegacy: () => ne, shimGetUserMedia: () => Z, shimLocalStreamsAPI: () => X, shimRTCIceServerUrls: () => te, shimRemoteStreamsAPI: () => Q, shimTrackEventTransceiver: () => ie });
            var o = {};
            s.r(o), s.d(o, { removeAllowExtmapMixed: () => ue, shimConnectionState: () => le, shimMaxMessageSize: () => de, shimRTCIceCandidate: () => ae, shimSendThrowTypeError: () => ce });
            let a = true, d = true;
            function c(e4, t5, i4) {
              const n4 = e4.match(t5);
              return n4 && n4.length >= i4 && parseInt(n4[i4], 10);
            }
            function l(e4, t5, i4) {
              if (!e4.RTCPeerConnection) return;
              const n4 = e4.RTCPeerConnection.prototype, s2 = n4.addEventListener;
              n4.addEventListener = function(e5, n5) {
                if (e5 !== t5) return s2.apply(this, arguments);
                const r3 = (e6) => {
                  const t6 = i4(e6);
                  t6 && (n5.handleEvent ? n5.handleEvent(t6) : n5(t6));
                };
                return this._eventMap = this._eventMap || {}, this._eventMap[t5] || (this._eventMap[t5] = /* @__PURE__ */ new Map()), this._eventMap[t5].set(n5, r3), s2.apply(this, [e5, r3]);
              };
              const r2 = n4.removeEventListener;
              n4.removeEventListener = function(e5, i5) {
                if (e5 !== t5 || !this._eventMap || !this._eventMap[t5]) return r2.apply(this, arguments);
                if (!this._eventMap[t5].has(i5)) return r2.apply(this, arguments);
                const n5 = this._eventMap[t5].get(i5);
                return this._eventMap[t5].delete(i5), 0 === this._eventMap[t5].size && delete this._eventMap[t5], 0 === Object.keys(this._eventMap).length && delete this._eventMap, r2.apply(this, [e5, n5]);
              }, Object.defineProperty(n4, "on" + t5, { get() {
                return this["_on" + t5];
              }, set(e5) {
                this["_on" + t5] && (this.removeEventListener(t5, this["_on" + t5]), delete this["_on" + t5]), e5 && this.addEventListener(t5, this["_on" + t5] = e5);
              }, enumerable: true, configurable: true });
            }
            function u(e4) {
              return "boolean" != typeof e4 ? new Error("Argument type: " + typeof e4 + ". Please use a boolean.") : (a = e4, e4 ? "adapter.js logging disabled" : "adapter.js logging enabled");
            }
            function h(e4) {
              return "boolean" != typeof e4 ? new Error("Argument type: " + typeof e4 + ". Please use a boolean.") : (d = !e4, "adapter.js deprecation warnings " + (e4 ? "disabled" : "enabled"));
            }
            function p() {
              if ("object" == typeof window) {
                if (a) return;
                "undefined" != typeof console && "function" == typeof console.log && console.log.apply(console, arguments);
              }
            }
            function f(e4, t5) {
              d && console.warn(e4 + " is deprecated, please use " + t5 + " instead.");
            }
            function v(e4) {
              const { navigator: t5 } = e4, i4 = { browser: null, version: null };
              if (void 0 === e4 || !e4.navigator) return i4.browser = "Not a browser.", i4;
              if (t5.mozGetUserMedia) i4.browser = "firefox", i4.version = c(t5.userAgent, /Firefox\/(\d+)\./, 1);
              else if (t5.webkitGetUserMedia || false === e4.isSecureContext && e4.webkitRTCPeerConnection && !e4.RTCIceGatherer) i4.browser = "chrome", i4.version = c(t5.userAgent, /Chrom(e|ium)\/(\d+)\./, 2);
              else if (t5.mediaDevices && t5.userAgent.match(/Edge\/(\d+).(\d+)$/)) i4.browser = "edge", i4.version = c(t5.userAgent, /Edge\/(\d+).(\d+)$/, 2);
              else {
                if (!e4.RTCPeerConnection || !t5.userAgent.match(/AppleWebKit\/(\d+)\./)) return i4.browser = "Not a supported browser.", i4;
                i4.browser = "safari", i4.version = c(t5.userAgent, /AppleWebKit\/(\d+)\./, 1), i4.supportsUnifiedPlan = e4.RTCRtpTransceiver && "currentDirection" in e4.RTCRtpTransceiver.prototype;
              }
              return i4;
            }
            function m(e4) {
              return "[object Object]" === Object.prototype.toString.call(e4);
            }
            function g(e4) {
              return m(e4) ? Object.keys(e4).reduce(function(t5, i4) {
                const n4 = m(e4[i4]), s2 = n4 ? g(e4[i4]) : e4[i4], r2 = n4 && !Object.keys(s2).length;
                return void 0 === s2 || r2 ? t5 : Object.assign(t5, { [i4]: s2 });
              }, {}) : e4;
            }
            function A(e4, t5, i4) {
              t5 && !i4.has(t5.id) && (i4.set(t5.id, t5), Object.keys(t5).forEach((n4) => {
                n4.endsWith("Id") ? A(e4, e4.get(t5[n4]), i4) : n4.endsWith("Ids") && t5[n4].forEach((t6) => {
                  A(e4, e4.get(t6), i4);
                });
              }));
            }
            function S(e4, t5, i4) {
              const n4 = i4 ? "outbound-rtp" : "inbound-rtp", s2 = /* @__PURE__ */ new Map();
              if (null === t5) return s2;
              const r2 = [];
              return e4.forEach((e5) => {
                "track" === e5.type && e5.trackIdentifier === t5.id && r2.push(e5);
              }), r2.forEach((t6) => {
                e4.forEach((i5) => {
                  i5.type === n4 && i5.trackId === t6.id && A(e4, i5, s2);
                });
              }), s2;
            }
            const b = p;
            function w(e4) {
              const t5 = e4 && e4.navigator;
              if (!t5.mediaDevices) return;
              const i4 = v(e4), n4 = function(e5) {
                if ("object" != typeof e5 || e5.mandatory || e5.optional) return e5;
                const t6 = {};
                return Object.keys(e5).forEach((i5) => {
                  if ("require" === i5 || "advanced" === i5 || "mediaSource" === i5) return;
                  const n5 = "object" == typeof e5[i5] ? e5[i5] : { ideal: e5[i5] };
                  void 0 !== n5.exact && "number" == typeof n5.exact && (n5.min = n5.max = n5.exact);
                  const s3 = function(e6, t7) {
                    return e6 ? e6 + t7.charAt(0).toUpperCase() + t7.slice(1) : "deviceId" === t7 ? "sourceId" : t7;
                  };
                  if (void 0 !== n5.ideal) {
                    t6.optional = t6.optional || [];
                    let e6 = {};
                    "number" == typeof n5.ideal ? (e6[s3("min", i5)] = n5.ideal, t6.optional.push(e6), e6 = {}, e6[s3("max", i5)] = n5.ideal, t6.optional.push(e6)) : (e6[s3("", i5)] = n5.ideal, t6.optional.push(e6));
                  }
                  void 0 !== n5.exact && "number" != typeof n5.exact ? (t6.mandatory = t6.mandatory || {}, t6.mandatory[s3("", i5)] = n5.exact) : ["min", "max"].forEach((e6) => {
                    void 0 !== n5[e6] && (t6.mandatory = t6.mandatory || {}, t6.mandatory[s3(e6, i5)] = n5[e6]);
                  });
                }), e5.advanced && (t6.optional = (t6.optional || []).concat(e5.advanced)), t6;
              }, s2 = function(e5, s3) {
                if (i4.version >= 61) return s3(e5);
                if ((e5 = JSON.parse(JSON.stringify(e5))) && "object" == typeof e5.audio) {
                  const t6 = function(e6, t7, i5) {
                    t7 in e6 && !(i5 in e6) && (e6[i5] = e6[t7], delete e6[t7]);
                  };
                  t6((e5 = JSON.parse(JSON.stringify(e5))).audio, "autoGainControl", "googAutoGainControl"), t6(e5.audio, "noiseSuppression", "googNoiseSuppression"), e5.audio = n4(e5.audio);
                }
                if (e5 && "object" == typeof e5.video) {
                  let r3 = e5.video.facingMode;
                  r3 = r3 && ("object" == typeof r3 ? r3 : { ideal: r3 });
                  const o2 = i4.version < 66;
                  if (r3 && ("user" === r3.exact || "environment" === r3.exact || "user" === r3.ideal || "environment" === r3.ideal) && (!t5.mediaDevices.getSupportedConstraints || !t5.mediaDevices.getSupportedConstraints().facingMode || o2)) {
                    let i5;
                    if (delete e5.video.facingMode, "environment" === r3.exact || "environment" === r3.ideal ? i5 = ["back", "rear"] : "user" !== r3.exact && "user" !== r3.ideal || (i5 = ["front"]), i5) return t5.mediaDevices.enumerateDevices().then((t6) => {
                      let o3 = (t6 = t6.filter((e6) => "videoinput" === e6.kind)).find((e6) => i5.some((t7) => e6.label.toLowerCase().includes(t7)));
                      return !o3 && t6.length && i5.includes("back") && (o3 = t6[t6.length - 1]), o3 && (e5.video.deviceId = r3.exact ? { exact: o3.deviceId } : { ideal: o3.deviceId }), e5.video = n4(e5.video), b("chrome: " + JSON.stringify(e5)), s3(e5);
                    });
                  }
                  e5.video = n4(e5.video);
                }
                return b("chrome: " + JSON.stringify(e5)), s3(e5);
              }, r2 = function(e5) {
                return i4.version >= 64 ? e5 : { name: { PermissionDeniedError: "NotAllowedError", PermissionDismissedError: "NotAllowedError", InvalidStateError: "NotAllowedError", DevicesNotFoundError: "NotFoundError", ConstraintNotSatisfiedError: "OverconstrainedError", TrackStartError: "NotReadableError", MediaDeviceFailedDueToShutdown: "NotAllowedError", MediaDeviceKillSwitchOn: "NotAllowedError", TabCaptureError: "AbortError", ScreenCaptureError: "AbortError", DeviceCaptureError: "AbortError" }[e5.name] || e5.name, message: e5.message, constraint: e5.constraint || e5.constraintName, toString() {
                  return this.name + (this.message && ": ") + this.message;
                } };
              };
              if (t5.getUserMedia = (function(e5, i5, n5) {
                s2(e5, (e6) => {
                  t5.webkitGetUserMedia(e6, i5, (e7) => {
                    n5 && n5(r2(e7));
                  });
                });
              }).bind(t5), t5.mediaDevices.getUserMedia) {
                const e5 = t5.mediaDevices.getUserMedia.bind(t5.mediaDevices);
                t5.mediaDevices.getUserMedia = function(t6) {
                  return s2(t6, (t7) => e5(t7).then((e6) => {
                    if (t7.audio && !e6.getAudioTracks().length || t7.video && !e6.getVideoTracks().length) throw e6.getTracks().forEach((e7) => {
                      e7.stop();
                    }), new DOMException("", "NotFoundError");
                    return e6;
                  }, (e6) => Promise.reject(r2(e6))));
                };
              }
            }
            function y(e4, t5) {
              e4.navigator.mediaDevices && "getDisplayMedia" in e4.navigator.mediaDevices || e4.navigator.mediaDevices && ("function" == typeof t5 ? e4.navigator.mediaDevices.getDisplayMedia = function(i4) {
                return t5(i4).then((t6) => {
                  const n4 = i4.video && i4.video.width, s2 = i4.video && i4.video.height, r2 = i4.video && i4.video.frameRate;
                  return i4.video = { mandatory: { chromeMediaSource: "desktop", chromeMediaSourceId: t6, maxFrameRate: r2 || 3 } }, n4 && (i4.video.mandatory.maxWidth = n4), s2 && (i4.video.mandatory.maxHeight = s2), e4.navigator.mediaDevices.getUserMedia(i4);
                });
              } : console.error("shimGetDisplayMedia: getSourceId argument is not a function"));
            }
            function E(e4) {
              e4.MediaStream = e4.MediaStream || e4.webkitMediaStream;
            }
            function C(e4) {
              if ("object" == typeof e4 && e4.RTCPeerConnection && !("ontrack" in e4.RTCPeerConnection.prototype)) {
                Object.defineProperty(e4.RTCPeerConnection.prototype, "ontrack", { get() {
                  return this._ontrack;
                }, set(e5) {
                  this._ontrack && this.removeEventListener("track", this._ontrack), this.addEventListener("track", this._ontrack = e5);
                }, enumerable: true, configurable: true });
                const t5 = e4.RTCPeerConnection.prototype.setRemoteDescription;
                e4.RTCPeerConnection.prototype.setRemoteDescription = function() {
                  return this._ontrackpoly || (this._ontrackpoly = (t6) => {
                    t6.stream.addEventListener("addtrack", (i4) => {
                      let n4;
                      n4 = e4.RTCPeerConnection.prototype.getReceivers ? this.getReceivers().find((e5) => e5.track && e5.track.id === i4.track.id) : { track: i4.track };
                      const s2 = new Event("track");
                      s2.track = i4.track, s2.receiver = n4, s2.transceiver = { receiver: n4 }, s2.streams = [t6.stream], this.dispatchEvent(s2);
                    }), t6.stream.getTracks().forEach((i4) => {
                      let n4;
                      n4 = e4.RTCPeerConnection.prototype.getReceivers ? this.getReceivers().find((e5) => e5.track && e5.track.id === i4.id) : { track: i4 };
                      const s2 = new Event("track");
                      s2.track = i4, s2.receiver = n4, s2.transceiver = { receiver: n4 }, s2.streams = [t6.stream], this.dispatchEvent(s2);
                    });
                  }, this.addEventListener("addstream", this._ontrackpoly)), t5.apply(this, arguments);
                };
              } else l(e4, "track", (e5) => (e5.transceiver || Object.defineProperty(e5, "transceiver", { value: { receiver: e5.receiver } }), e5));
            }
            function T(e4) {
              if ("object" == typeof e4 && e4.RTCPeerConnection && !("getSenders" in e4.RTCPeerConnection.prototype) && "createDTMFSender" in e4.RTCPeerConnection.prototype) {
                const t5 = function(e5, t6) {
                  return { track: t6, get dtmf() {
                    return void 0 === this._dtmf && ("audio" === t6.kind ? this._dtmf = e5.createDTMFSender(t6) : this._dtmf = null), this._dtmf;
                  }, _pc: e5 };
                };
                if (!e4.RTCPeerConnection.prototype.getSenders) {
                  e4.RTCPeerConnection.prototype.getSenders = function() {
                    return this._senders = this._senders || [], this._senders.slice();
                  };
                  const i5 = e4.RTCPeerConnection.prototype.addTrack;
                  e4.RTCPeerConnection.prototype.addTrack = function(e5, n6) {
                    let s2 = i5.apply(this, arguments);
                    return s2 || (s2 = t5(this, e5), this._senders.push(s2)), s2;
                  };
                  const n5 = e4.RTCPeerConnection.prototype.removeTrack;
                  e4.RTCPeerConnection.prototype.removeTrack = function(e5) {
                    n5.apply(this, arguments);
                    const t6 = this._senders.indexOf(e5);
                    -1 !== t6 && this._senders.splice(t6, 1);
                  };
                }
                const i4 = e4.RTCPeerConnection.prototype.addStream;
                e4.RTCPeerConnection.prototype.addStream = function(e5) {
                  this._senders = this._senders || [], i4.apply(this, [e5]), e5.getTracks().forEach((e6) => {
                    this._senders.push(t5(this, e6));
                  });
                };
                const n4 = e4.RTCPeerConnection.prototype.removeStream;
                e4.RTCPeerConnection.prototype.removeStream = function(e5) {
                  this._senders = this._senders || [], n4.apply(this, [e5]), e5.getTracks().forEach((e6) => {
                    const t6 = this._senders.find((t7) => t7.track === e6);
                    t6 && this._senders.splice(this._senders.indexOf(t6), 1);
                  });
                };
              } else if ("object" == typeof e4 && e4.RTCPeerConnection && "getSenders" in e4.RTCPeerConnection.prototype && "createDTMFSender" in e4.RTCPeerConnection.prototype && e4.RTCRtpSender && !("dtmf" in e4.RTCRtpSender.prototype)) {
                const t5 = e4.RTCPeerConnection.prototype.getSenders;
                e4.RTCPeerConnection.prototype.getSenders = function() {
                  const e5 = t5.apply(this, []);
                  return e5.forEach((e6) => e6._pc = this), e5;
                }, Object.defineProperty(e4.RTCRtpSender.prototype, "dtmf", { get() {
                  return void 0 === this._dtmf && ("audio" === this.track.kind ? this._dtmf = this._pc.createDTMFSender(this.track) : this._dtmf = null), this._dtmf;
                } });
              }
            }
            function I(e4) {
              if (!e4.RTCPeerConnection) return;
              const t5 = e4.RTCPeerConnection.prototype.getStats;
              e4.RTCPeerConnection.prototype.getStats = function() {
                const [e5, i4, n4] = arguments;
                if (arguments.length > 0 && "function" == typeof e5) return t5.apply(this, arguments);
                if (0 === t5.length && (0 === arguments.length || "function" != typeof e5)) return t5.apply(this, []);
                const s2 = function(e6) {
                  const t6 = {};
                  return e6.result().forEach((e7) => {
                    const i5 = { id: e7.id, timestamp: e7.timestamp, type: { localcandidate: "local-candidate", remotecandidate: "remote-candidate" }[e7.type] || e7.type };
                    e7.names().forEach((t7) => {
                      i5[t7] = e7.stat(t7);
                    }), t6[i5.id] = i5;
                  }), t6;
                }, r2 = function(e6) {
                  return new Map(Object.keys(e6).map((t6) => [t6, e6[t6]]));
                };
                if (arguments.length >= 2) {
                  const n5 = function(e6) {
                    i4(r2(s2(e6)));
                  };
                  return t5.apply(this, [n5, e5]);
                }
                return new Promise((e6, i5) => {
                  t5.apply(this, [function(t6) {
                    e6(r2(s2(t6)));
                  }, i5]);
                }).then(i4, n4);
              };
            }
            function R(e4) {
              if (!("object" == typeof e4 && e4.RTCPeerConnection && e4.RTCRtpSender && e4.RTCRtpReceiver)) return;
              if (!("getStats" in e4.RTCRtpSender.prototype)) {
                const t6 = e4.RTCPeerConnection.prototype.getSenders;
                t6 && (e4.RTCPeerConnection.prototype.getSenders = function() {
                  const e5 = t6.apply(this, []);
                  return e5.forEach((e6) => e6._pc = this), e5;
                });
                const i4 = e4.RTCPeerConnection.prototype.addTrack;
                i4 && (e4.RTCPeerConnection.prototype.addTrack = function() {
                  const e5 = i4.apply(this, arguments);
                  return e5._pc = this, e5;
                }), e4.RTCRtpSender.prototype.getStats = function() {
                  const e5 = this;
                  return this._pc.getStats().then((t7) => S(t7, e5.track, true));
                };
              }
              if (!("getStats" in e4.RTCRtpReceiver.prototype)) {
                const t6 = e4.RTCPeerConnection.prototype.getReceivers;
                t6 && (e4.RTCPeerConnection.prototype.getReceivers = function() {
                  const e5 = t6.apply(this, []);
                  return e5.forEach((e6) => e6._pc = this), e5;
                }), l(e4, "track", (e5) => (e5.receiver._pc = e5.srcElement, e5)), e4.RTCRtpReceiver.prototype.getStats = function() {
                  const e5 = this;
                  return this._pc.getStats().then((t7) => S(t7, e5.track, false));
                };
              }
              if (!("getStats" in e4.RTCRtpSender.prototype) || !("getStats" in e4.RTCRtpReceiver.prototype)) return;
              const t5 = e4.RTCPeerConnection.prototype.getStats;
              e4.RTCPeerConnection.prototype.getStats = function() {
                if (arguments.length > 0 && arguments[0] instanceof e4.MediaStreamTrack) {
                  const e5 = arguments[0];
                  let t6, i4, n4;
                  return this.getSenders().forEach((i5) => {
                    i5.track === e5 && (t6 ? n4 = true : t6 = i5);
                  }), this.getReceivers().forEach((t7) => (t7.track === e5 && (i4 ? n4 = true : i4 = t7), t7.track === e5)), n4 || t6 && i4 ? Promise.reject(new DOMException("There are more than one sender or receiver for the track.", "InvalidAccessError")) : t6 ? t6.getStats() : i4 ? i4.getStats() : Promise.reject(new DOMException("There is no sender or receiver for the track.", "InvalidAccessError"));
                }
                return t5.apply(this, arguments);
              };
            }
            function k(e4) {
              e4.RTCPeerConnection.prototype.getLocalStreams = function() {
                return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, Object.keys(this._shimmedLocalStreams).map((e5) => this._shimmedLocalStreams[e5][0]);
              };
              const t5 = e4.RTCPeerConnection.prototype.addTrack;
              e4.RTCPeerConnection.prototype.addTrack = function(e5, i5) {
                if (!i5) return t5.apply(this, arguments);
                this._shimmedLocalStreams = this._shimmedLocalStreams || {};
                const n5 = t5.apply(this, arguments);
                return this._shimmedLocalStreams[i5.id] ? -1 === this._shimmedLocalStreams[i5.id].indexOf(n5) && this._shimmedLocalStreams[i5.id].push(n5) : this._shimmedLocalStreams[i5.id] = [i5, n5], n5;
              };
              const i4 = e4.RTCPeerConnection.prototype.addStream;
              e4.RTCPeerConnection.prototype.addStream = function(e5) {
                this._shimmedLocalStreams = this._shimmedLocalStreams || {}, e5.getTracks().forEach((e6) => {
                  if (this.getSenders().find((t7) => t7.track === e6)) throw new DOMException("Track already exists.", "InvalidAccessError");
                });
                const t6 = this.getSenders();
                i4.apply(this, arguments);
                const n5 = this.getSenders().filter((e6) => -1 === t6.indexOf(e6));
                this._shimmedLocalStreams[e5.id] = [e5].concat(n5);
              };
              const n4 = e4.RTCPeerConnection.prototype.removeStream;
              e4.RTCPeerConnection.prototype.removeStream = function(e5) {
                return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, delete this._shimmedLocalStreams[e5.id], n4.apply(this, arguments);
              };
              const s2 = e4.RTCPeerConnection.prototype.removeTrack;
              e4.RTCPeerConnection.prototype.removeTrack = function(e5) {
                return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, e5 && Object.keys(this._shimmedLocalStreams).forEach((t6) => {
                  const i5 = this._shimmedLocalStreams[t6].indexOf(e5);
                  -1 !== i5 && this._shimmedLocalStreams[t6].splice(i5, 1), 1 === this._shimmedLocalStreams[t6].length && delete this._shimmedLocalStreams[t6];
                }), s2.apply(this, arguments);
              };
            }
            function P(e4) {
              if (!e4.RTCPeerConnection) return;
              const t5 = v(e4);
              if (e4.RTCPeerConnection.prototype.addTrack && t5.version >= 65) return k(e4);
              const i4 = e4.RTCPeerConnection.prototype.getLocalStreams;
              e4.RTCPeerConnection.prototype.getLocalStreams = function() {
                const e5 = i4.apply(this);
                return this._reverseStreams = this._reverseStreams || {}, e5.map((e6) => this._reverseStreams[e6.id]);
              };
              const n4 = e4.RTCPeerConnection.prototype.addStream;
              e4.RTCPeerConnection.prototype.addStream = function(t6) {
                if (this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {}, t6.getTracks().forEach((e5) => {
                  if (this.getSenders().find((t7) => t7.track === e5)) throw new DOMException("Track already exists.", "InvalidAccessError");
                }), !this._reverseStreams[t6.id]) {
                  const i5 = new e4.MediaStream(t6.getTracks());
                  this._streams[t6.id] = i5, this._reverseStreams[i5.id] = t6, t6 = i5;
                }
                n4.apply(this, [t6]);
              };
              const s2 = e4.RTCPeerConnection.prototype.removeStream;
              function r2(e5, t6) {
                let i5 = t6.sdp;
                return Object.keys(e5._reverseStreams || []).forEach((t7) => {
                  const n5 = e5._reverseStreams[t7], s3 = e5._streams[n5.id];
                  i5 = i5.replace(new RegExp(s3.id, "g"), n5.id);
                }), new RTCSessionDescription({ type: t6.type, sdp: i5 });
              }
              e4.RTCPeerConnection.prototype.removeStream = function(e5) {
                this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {}, s2.apply(this, [this._streams[e5.id] || e5]), delete this._reverseStreams[this._streams[e5.id] ? this._streams[e5.id].id : e5.id], delete this._streams[e5.id];
              }, e4.RTCPeerConnection.prototype.addTrack = function(t6, i5) {
                if ("closed" === this.signalingState) throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
                const n5 = [].slice.call(arguments, 1);
                if (1 !== n5.length || !n5[0].getTracks().find((e5) => e5 === t6)) throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.", "NotSupportedError");
                if (this.getSenders().find((e5) => e5.track === t6)) throw new DOMException("Track already exists.", "InvalidAccessError");
                this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {};
                const s3 = this._streams[i5.id];
                if (s3) s3.addTrack(t6), Promise.resolve().then(() => {
                  this.dispatchEvent(new Event("negotiationneeded"));
                });
                else {
                  const n6 = new e4.MediaStream([t6]);
                  this._streams[i5.id] = n6, this._reverseStreams[n6.id] = i5, this.addStream(n6);
                }
                return this.getSenders().find((e5) => e5.track === t6);
              }, ["createOffer", "createAnswer"].forEach(function(t6) {
                const i5 = e4.RTCPeerConnection.prototype[t6], n5 = { [t6]() {
                  const e5 = arguments;
                  return arguments.length && "function" == typeof arguments[0] ? i5.apply(this, [(t7) => {
                    const i6 = r2(this, t7);
                    e5[0].apply(null, [i6]);
                  }, (t7) => {
                    e5[1] && e5[1].apply(null, t7);
                  }, arguments[2]]) : i5.apply(this, arguments).then((e6) => r2(this, e6));
                } };
                e4.RTCPeerConnection.prototype[t6] = n5[t6];
              });
              const o2 = e4.RTCPeerConnection.prototype.setLocalDescription;
              e4.RTCPeerConnection.prototype.setLocalDescription = function() {
                return arguments.length && arguments[0].type ? (arguments[0] = function(e5, t6) {
                  let i5 = t6.sdp;
                  return Object.keys(e5._reverseStreams || []).forEach((t7) => {
                    const n5 = e5._reverseStreams[t7], s3 = e5._streams[n5.id];
                    i5 = i5.replace(new RegExp(n5.id, "g"), s3.id);
                  }), new RTCSessionDescription({ type: t6.type, sdp: i5 });
                }(this, arguments[0]), o2.apply(this, arguments)) : o2.apply(this, arguments);
              };
              const a2 = Object.getOwnPropertyDescriptor(e4.RTCPeerConnection.prototype, "localDescription");
              Object.defineProperty(e4.RTCPeerConnection.prototype, "localDescription", { get() {
                const e5 = a2.get.apply(this);
                return "" === e5.type ? e5 : r2(this, e5);
              } }), e4.RTCPeerConnection.prototype.removeTrack = function(e5) {
                if ("closed" === this.signalingState) throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
                if (!e5._pc) throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.", "TypeError");
                if (e5._pc !== this) throw new DOMException("Sender was not created by this connection.", "InvalidAccessError");
                let t6;
                this._streams = this._streams || {}, Object.keys(this._streams).forEach((i5) => {
                  this._streams[i5].getTracks().find((t7) => e5.track === t7) && (t6 = this._streams[i5]);
                }), t6 && (1 === t6.getTracks().length ? this.removeStream(this._reverseStreams[t6.id]) : t6.removeTrack(e5.track), this.dispatchEvent(new Event("negotiationneeded")));
              };
            }
            function D(e4) {
              const t5 = v(e4);
              if (!e4.RTCPeerConnection && e4.webkitRTCPeerConnection && (e4.RTCPeerConnection = e4.webkitRTCPeerConnection), !e4.RTCPeerConnection) return;
              const i4 = 0 === e4.RTCPeerConnection.prototype.addIceCandidate.length;
              t5.version < 53 && ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(function(t6) {
                const i5 = e4.RTCPeerConnection.prototype[t6], n5 = { [t6]() {
                  return arguments[0] = new ("addIceCandidate" === t6 ? e4.RTCIceCandidate : e4.RTCSessionDescription)(arguments[0]), i5.apply(this, arguments);
                } };
                e4.RTCPeerConnection.prototype[t6] = n5[t6];
              });
              const n4 = e4.RTCPeerConnection.prototype.addIceCandidate;
              e4.RTCPeerConnection.prototype.addIceCandidate = function() {
                return i4 || arguments[0] ? t5.version < 78 && arguments[0] && "" === arguments[0].candidate ? Promise.resolve() : n4.apply(this, arguments) : (arguments[1] && arguments[1].apply(null), Promise.resolve());
              };
            }
            function O(e4) {
              const t5 = v(e4);
              l(e4, "negotiationneeded", (e5) => {
                const i4 = e5.target;
                if (!(t5.version < 72 || i4.getConfiguration && "plan-b" === i4.getConfiguration().sdpSemantics) || "stable" === i4.signalingState) return e5;
              });
            }
            var M = s(134), N = s.n(M);
            function L(e4) {
              const t5 = e4 && e4.navigator, i4 = t5.mediaDevices.getUserMedia.bind(t5.mediaDevices);
              t5.mediaDevices.getUserMedia = function(e5) {
                return i4(e5).catch((e6) => Promise.reject(function(e7) {
                  return { name: { PermissionDeniedError: "NotAllowedError" }[e7.name] || e7.name, message: e7.message, constraint: e7.constraint, toString() {
                    return this.name;
                  } };
                }(e6)));
              };
            }
            function x(e4) {
              "getDisplayMedia" in e4.navigator && e4.navigator.mediaDevices && (e4.navigator.mediaDevices && "getDisplayMedia" in e4.navigator.mediaDevices || (e4.navigator.mediaDevices.getDisplayMedia = e4.navigator.getDisplayMedia.bind(e4.navigator)));
            }
            function F(e4) {
              const t5 = v(e4);
              if (e4.RTCIceGatherer && (e4.RTCIceCandidate || (e4.RTCIceCandidate = function(e5) {
                return e5;
              }), e4.RTCSessionDescription || (e4.RTCSessionDescription = function(e5) {
                return e5;
              }), t5.version < 15025)) {
                const t6 = Object.getOwnPropertyDescriptor(e4.MediaStreamTrack.prototype, "enabled");
                Object.defineProperty(e4.MediaStreamTrack.prototype, "enabled", { set(e5) {
                  t6.set.call(this, e5);
                  const i5 = new Event("enabled");
                  i5.enabled = e5, this.dispatchEvent(i5);
                } });
              }
              e4.RTCRtpSender && !("dtmf" in e4.RTCRtpSender.prototype) && Object.defineProperty(e4.RTCRtpSender.prototype, "dtmf", { get() {
                return void 0 === this._dtmf && ("audio" === this.track.kind ? this._dtmf = new e4.RTCDtmfSender(this) : "video" === this.track.kind && (this._dtmf = null)), this._dtmf;
              } }), e4.RTCDtmfSender && !e4.RTCDTMFSender && (e4.RTCDTMFSender = e4.RTCDtmfSender);
              const i4 = N()(e4, t5.version);
              e4.RTCPeerConnection = function(e5) {
                return e5 && e5.iceServers && (e5.iceServers = function(e6) {
                  let t6 = false;
                  return (e6 = JSON.parse(JSON.stringify(e6))).filter((e7) => {
                    if (e7 && (e7.urls || e7.url)) {
                      var i5 = e7.urls || e7.url;
                      e7.url && !e7.urls && f("RTCIceServer.url", "RTCIceServer.urls");
                      const n4 = "string" == typeof i5;
                      return n4 && (i5 = [i5]), i5 = i5.filter((e8) => {
                        if (0 === e8.indexOf("stun:")) return false;
                        const i6 = e8.startsWith("turn") && !e8.startsWith("turn:[") && e8.includes("transport=udp");
                        return i6 && !t6 ? (t6 = true, true) : i6 && !t6;
                      }), delete e7.url, e7.urls = n4 ? i5[0] : i5, !!i5.length;
                    }
                  });
                }(e5.iceServers, t5.version), p("ICE servers after filtering:", e5.iceServers)), new i4(e5);
              }, e4.RTCPeerConnection.prototype = i4.prototype;
            }
            function _(e4) {
              e4.RTCRtpSender && !("replaceTrack" in e4.RTCRtpSender.prototype) && (e4.RTCRtpSender.prototype.replaceTrack = e4.RTCRtpSender.prototype.setTrack);
            }
            function U(e4) {
              const t5 = v(e4), i4 = e4 && e4.navigator, n4 = e4 && e4.MediaStreamTrack;
              if (i4.getUserMedia = function(e5, t6, n5) {
                f("navigator.getUserMedia", "navigator.mediaDevices.getUserMedia"), i4.mediaDevices.getUserMedia(e5).then(t6, n5);
              }, !(t5.version > 55 && "autoGainControl" in i4.mediaDevices.getSupportedConstraints())) {
                const e5 = function(e6, t7, i5) {
                  t7 in e6 && !(i5 in e6) && (e6[i5] = e6[t7], delete e6[t7]);
                }, t6 = i4.mediaDevices.getUserMedia.bind(i4.mediaDevices);
                if (i4.mediaDevices.getUserMedia = function(i5) {
                  return "object" == typeof i5 && "object" == typeof i5.audio && (i5 = JSON.parse(JSON.stringify(i5)), e5(i5.audio, "autoGainControl", "mozAutoGainControl"), e5(i5.audio, "noiseSuppression", "mozNoiseSuppression")), t6(i5);
                }, n4 && n4.prototype.getSettings) {
                  const t7 = n4.prototype.getSettings;
                  n4.prototype.getSettings = function() {
                    const i5 = t7.apply(this, arguments);
                    return e5(i5, "mozAutoGainControl", "autoGainControl"), e5(i5, "mozNoiseSuppression", "noiseSuppression"), i5;
                  };
                }
                if (n4 && n4.prototype.applyConstraints) {
                  const t7 = n4.prototype.applyConstraints;
                  n4.prototype.applyConstraints = function(i5) {
                    return "audio" === this.kind && "object" == typeof i5 && (i5 = JSON.parse(JSON.stringify(i5)), e5(i5, "autoGainControl", "mozAutoGainControl"), e5(i5, "noiseSuppression", "mozNoiseSuppression")), t7.apply(this, [i5]);
                  };
                }
              }
            }
            function j(e4, t5) {
              e4.navigator.mediaDevices && "getDisplayMedia" in e4.navigator.mediaDevices || e4.navigator.mediaDevices && (e4.navigator.mediaDevices.getDisplayMedia = function(i4) {
                if (!i4 || !i4.video) {
                  const e5 = new DOMException("getDisplayMedia without video constraints is undefined");
                  return e5.name = "NotFoundError", e5.code = 8, Promise.reject(e5);
                }
                return true === i4.video ? i4.video = { mediaSource: t5 } : i4.video.mediaSource = t5, e4.navigator.mediaDevices.getUserMedia(i4);
              });
            }
            function G(e4) {
              "object" == typeof e4 && e4.RTCTrackEvent && "receiver" in e4.RTCTrackEvent.prototype && !("transceiver" in e4.RTCTrackEvent.prototype) && Object.defineProperty(e4.RTCTrackEvent.prototype, "transceiver", { get() {
                return { receiver: this.receiver };
              } });
            }
            function B(e4) {
              const t5 = v(e4);
              if ("object" != typeof e4 || !e4.RTCPeerConnection && !e4.mozRTCPeerConnection) return;
              if (!e4.RTCPeerConnection && e4.mozRTCPeerConnection && (e4.RTCPeerConnection = e4.mozRTCPeerConnection), t5.version < 53 && ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(function(t6) {
                const i5 = e4.RTCPeerConnection.prototype[t6], n5 = { [t6]() {
                  return arguments[0] = new ("addIceCandidate" === t6 ? e4.RTCIceCandidate : e4.RTCSessionDescription)(arguments[0]), i5.apply(this, arguments);
                } };
                e4.RTCPeerConnection.prototype[t6] = n5[t6];
              }), t5.version < 68) {
                const t6 = e4.RTCPeerConnection.prototype.addIceCandidate;
                e4.RTCPeerConnection.prototype.addIceCandidate = function() {
                  return arguments[0] ? arguments[0] && "" === arguments[0].candidate ? Promise.resolve() : t6.apply(this, arguments) : (arguments[1] && arguments[1].apply(null), Promise.resolve());
                };
              }
              const i4 = { inboundrtp: "inbound-rtp", outboundrtp: "outbound-rtp", candidatepair: "candidate-pair", localcandidate: "local-candidate", remotecandidate: "remote-candidate" }, n4 = e4.RTCPeerConnection.prototype.getStats;
              e4.RTCPeerConnection.prototype.getStats = function() {
                const [e5, s2, r2] = arguments;
                return n4.apply(this, [e5 || null]).then((e6) => {
                  if (t5.version < 53 && !s2) try {
                    e6.forEach((e7) => {
                      e7.type = i4[e7.type] || e7.type;
                    });
                  } catch (t6) {
                    if ("TypeError" !== t6.name) throw t6;
                    e6.forEach((t7, n5) => {
                      e6.set(n5, Object.assign({}, t7, { type: i4[t7.type] || t7.type }));
                    });
                  }
                  return e6;
                }).then(s2, r2);
              };
            }
            function V(e4) {
              if ("object" != typeof e4 || !e4.RTCPeerConnection || !e4.RTCRtpSender) return;
              if (e4.RTCRtpSender && "getStats" in e4.RTCRtpSender.prototype) return;
              const t5 = e4.RTCPeerConnection.prototype.getSenders;
              t5 && (e4.RTCPeerConnection.prototype.getSenders = function() {
                const e5 = t5.apply(this, []);
                return e5.forEach((e6) => e6._pc = this), e5;
              });
              const i4 = e4.RTCPeerConnection.prototype.addTrack;
              i4 && (e4.RTCPeerConnection.prototype.addTrack = function() {
                const e5 = i4.apply(this, arguments);
                return e5._pc = this, e5;
              }), e4.RTCRtpSender.prototype.getStats = function() {
                return this.track ? this._pc.getStats(this.track) : Promise.resolve(/* @__PURE__ */ new Map());
              };
            }
            function H(e4) {
              if ("object" != typeof e4 || !e4.RTCPeerConnection || !e4.RTCRtpSender) return;
              if (e4.RTCRtpSender && "getStats" in e4.RTCRtpReceiver.prototype) return;
              const t5 = e4.RTCPeerConnection.prototype.getReceivers;
              t5 && (e4.RTCPeerConnection.prototype.getReceivers = function() {
                const e5 = t5.apply(this, []);
                return e5.forEach((e6) => e6._pc = this), e5;
              }), l(e4, "track", (e5) => (e5.receiver._pc = e5.srcElement, e5)), e4.RTCRtpReceiver.prototype.getStats = function() {
                return this._pc.getStats(this.track);
              };
            }
            function W(e4) {
              e4.RTCPeerConnection && !("removeStream" in e4.RTCPeerConnection.prototype) && (e4.RTCPeerConnection.prototype.removeStream = function(e5) {
                f("removeStream", "removeTrack"), this.getSenders().forEach((t5) => {
                  t5.track && e5.getTracks().includes(t5.track) && this.removeTrack(t5);
                });
              });
            }
            function z(e4) {
              e4.DataChannel && !e4.RTCDataChannel && (e4.RTCDataChannel = e4.DataChannel);
            }
            function K(e4) {
              if ("object" != typeof e4 || !e4.RTCPeerConnection) return;
              const t5 = e4.RTCPeerConnection.prototype.addTransceiver;
              t5 && (e4.RTCPeerConnection.prototype.addTransceiver = function() {
                this.setParametersPromises = [];
                const e5 = arguments[1], i4 = e5 && "sendEncodings" in e5;
                i4 && e5.sendEncodings.forEach((e6) => {
                  if ("rid" in e6 && !/^[a-z0-9]{0,16}$/i.test(e6.rid)) throw new TypeError("Invalid RID value provided.");
                  if ("scaleResolutionDownBy" in e6 && !(parseFloat(e6.scaleResolutionDownBy) >= 1)) throw new RangeError("scale_resolution_down_by must be >= 1.0");
                  if ("maxFramerate" in e6 && !(parseFloat(e6.maxFramerate) >= 0)) throw new RangeError("max_framerate must be >= 0.0");
                });
                const n4 = t5.apply(this, arguments);
                if (i4) {
                  const { sender: t6 } = n4, i5 = t6.getParameters();
                  "encodings" in i5 || (i5.encodings = e5.sendEncodings, t6.sendEncodings = e5.sendEncodings, this.setParametersPromises.push(t6.setParameters(i5).then(() => {
                    delete t6.sendEncodings;
                  }).catch(() => {
                    delete t6.sendEncodings;
                  })));
                }
                return n4;
              });
            }
            function q(e4) {
              if ("object" != typeof e4 || !e4.RTCRtpSender) return;
              const t5 = e4.RTCRtpSender.prototype.getParameters;
              t5 && (e4.RTCRtpSender.prototype.getParameters = function() {
                var e5 = t5.apply(this, arguments);
                return "sendEncodings" in this ? Object.assign({}, { encodings: this.sendEncodings }, e5) : e5;
              });
            }
            function $(e4) {
              if ("object" != typeof e4 || !e4.RTCPeerConnection) return;
              const t5 = e4.RTCPeerConnection.prototype.createOffer;
              e4.RTCPeerConnection.prototype.createOffer = function() {
                return this.setParametersPromises && this.setParametersPromises.length ? Promise.all(this.setParametersPromises).then(() => t5.apply(this, arguments)).finally(() => {
                  this.setParametersPromises = [];
                }) : t5.apply(this, arguments);
              };
            }
            function J(e4) {
              if ("object" != typeof e4 || !e4.RTCPeerConnection) return;
              const t5 = e4.RTCPeerConnection.prototype.createAnswer;
              e4.RTCPeerConnection.prototype.createAnswer = function() {
                return this.setParametersPromises && this.setParametersPromises.length ? Promise.all(this.setParametersPromises).then(() => t5.apply(this, arguments)).finally(() => {
                  this.setParametersPromises = [];
                }) : t5.apply(this, arguments);
              };
            }
            function X(e4) {
              if ("object" == typeof e4 && e4.RTCPeerConnection) {
                if ("getLocalStreams" in e4.RTCPeerConnection.prototype || (e4.RTCPeerConnection.prototype.getLocalStreams = function() {
                  return this._localStreams || (this._localStreams = []), this._localStreams;
                }), !("addStream" in e4.RTCPeerConnection.prototype)) {
                  const t5 = e4.RTCPeerConnection.prototype.addTrack;
                  e4.RTCPeerConnection.prototype.addStream = function(e5) {
                    this._localStreams || (this._localStreams = []), this._localStreams.includes(e5) || this._localStreams.push(e5), e5.getAudioTracks().forEach((i4) => t5.call(this, i4, e5)), e5.getVideoTracks().forEach((i4) => t5.call(this, i4, e5));
                  }, e4.RTCPeerConnection.prototype.addTrack = function(e5, ...i4) {
                    return i4 && i4.forEach((e6) => {
                      this._localStreams ? this._localStreams.includes(e6) || this._localStreams.push(e6) : this._localStreams = [e6];
                    }), t5.apply(this, arguments);
                  };
                }
                "removeStream" in e4.RTCPeerConnection.prototype || (e4.RTCPeerConnection.prototype.removeStream = function(e5) {
                  this._localStreams || (this._localStreams = []);
                  const t5 = this._localStreams.indexOf(e5);
                  if (-1 === t5) return;
                  this._localStreams.splice(t5, 1);
                  const i4 = e5.getTracks();
                  this.getSenders().forEach((e6) => {
                    i4.includes(e6.track) && this.removeTrack(e6);
                  });
                });
              }
            }
            function Q(e4) {
              if ("object" == typeof e4 && e4.RTCPeerConnection && ("getRemoteStreams" in e4.RTCPeerConnection.prototype || (e4.RTCPeerConnection.prototype.getRemoteStreams = function() {
                return this._remoteStreams ? this._remoteStreams : [];
              }), !("onaddstream" in e4.RTCPeerConnection.prototype))) {
                Object.defineProperty(e4.RTCPeerConnection.prototype, "onaddstream", { get() {
                  return this._onaddstream;
                }, set(e5) {
                  this._onaddstream && (this.removeEventListener("addstream", this._onaddstream), this.removeEventListener("track", this._onaddstreampoly)), this.addEventListener("addstream", this._onaddstream = e5), this.addEventListener("track", this._onaddstreampoly = (e6) => {
                    e6.streams.forEach((e7) => {
                      if (this._remoteStreams || (this._remoteStreams = []), this._remoteStreams.includes(e7)) return;
                      this._remoteStreams.push(e7);
                      const t6 = new Event("addstream");
                      t6.stream = e7, this.dispatchEvent(t6);
                    });
                  });
                } });
                const t5 = e4.RTCPeerConnection.prototype.setRemoteDescription;
                e4.RTCPeerConnection.prototype.setRemoteDescription = function() {
                  const e5 = this;
                  return this._onaddstreampoly || this.addEventListener("track", this._onaddstreampoly = function(t6) {
                    t6.streams.forEach((t7) => {
                      if (e5._remoteStreams || (e5._remoteStreams = []), e5._remoteStreams.indexOf(t7) >= 0) return;
                      e5._remoteStreams.push(t7);
                      const i4 = new Event("addstream");
                      i4.stream = t7, e5.dispatchEvent(i4);
                    });
                  }), t5.apply(e5, arguments);
                };
              }
            }
            function Y(e4) {
              if ("object" != typeof e4 || !e4.RTCPeerConnection) return;
              const t5 = e4.RTCPeerConnection.prototype, i4 = t5.createOffer, n4 = t5.createAnswer, s2 = t5.setLocalDescription, r2 = t5.setRemoteDescription, o2 = t5.addIceCandidate;
              t5.createOffer = function(e5, t6) {
                const n5 = arguments.length >= 2 ? arguments[2] : arguments[0], s3 = i4.apply(this, [n5]);
                return t6 ? (s3.then(e5, t6), Promise.resolve()) : s3;
              }, t5.createAnswer = function(e5, t6) {
                const i5 = arguments.length >= 2 ? arguments[2] : arguments[0], s3 = n4.apply(this, [i5]);
                return t6 ? (s3.then(e5, t6), Promise.resolve()) : s3;
              };
              let a2 = function(e5, t6, i5) {
                const n5 = s2.apply(this, [e5]);
                return i5 ? (n5.then(t6, i5), Promise.resolve()) : n5;
              };
              t5.setLocalDescription = a2, a2 = function(e5, t6, i5) {
                const n5 = r2.apply(this, [e5]);
                return i5 ? (n5.then(t6, i5), Promise.resolve()) : n5;
              }, t5.setRemoteDescription = a2, a2 = function(e5, t6, i5) {
                const n5 = o2.apply(this, [e5]);
                return i5 ? (n5.then(t6, i5), Promise.resolve()) : n5;
              }, t5.addIceCandidate = a2;
            }
            function Z(e4) {
              const t5 = e4 && e4.navigator;
              if (t5.mediaDevices && t5.mediaDevices.getUserMedia) {
                const e5 = t5.mediaDevices, i4 = e5.getUserMedia.bind(e5);
                t5.mediaDevices.getUserMedia = (e6) => i4(ee(e6));
              }
              !t5.getUserMedia && t5.mediaDevices && t5.mediaDevices.getUserMedia && (t5.getUserMedia = (function(e5, i4, n4) {
                t5.mediaDevices.getUserMedia(e5).then(i4, n4);
              }).bind(t5));
            }
            function ee(e4) {
              return e4 && void 0 !== e4.video ? Object.assign({}, e4, { video: g(e4.video) }) : e4;
            }
            function te(e4) {
              if (!e4.RTCPeerConnection) return;
              const t5 = e4.RTCPeerConnection;
              e4.RTCPeerConnection = function(e5, i4) {
                if (e5 && e5.iceServers) {
                  const t6 = [];
                  for (let i5 = 0; i5 < e5.iceServers.length; i5++) {
                    let n4 = e5.iceServers[i5];
                    !n4.hasOwnProperty("urls") && n4.hasOwnProperty("url") ? (f("RTCIceServer.url", "RTCIceServer.urls"), n4 = JSON.parse(JSON.stringify(n4)), n4.urls = n4.url, delete n4.url, t6.push(n4)) : t6.push(e5.iceServers[i5]);
                  }
                  e5.iceServers = t6;
                }
                return new t5(e5, i4);
              }, e4.RTCPeerConnection.prototype = t5.prototype, "generateCertificate" in t5 && Object.defineProperty(e4.RTCPeerConnection, "generateCertificate", { get: () => t5.generateCertificate });
            }
            function ie(e4) {
              "object" == typeof e4 && e4.RTCTrackEvent && "receiver" in e4.RTCTrackEvent.prototype && !("transceiver" in e4.RTCTrackEvent.prototype) && Object.defineProperty(e4.RTCTrackEvent.prototype, "transceiver", { get() {
                return { receiver: this.receiver };
              } });
            }
            function ne(e4) {
              const t5 = e4.RTCPeerConnection.prototype.createOffer;
              e4.RTCPeerConnection.prototype.createOffer = function(e5) {
                if (e5) {
                  void 0 !== e5.offerToReceiveAudio && (e5.offerToReceiveAudio = !!e5.offerToReceiveAudio);
                  const t6 = this.getTransceivers().find((e6) => "audio" === e6.receiver.track.kind);
                  false === e5.offerToReceiveAudio && t6 ? "sendrecv" === t6.direction ? t6.setDirection ? t6.setDirection("sendonly") : t6.direction = "sendonly" : "recvonly" === t6.direction && (t6.setDirection ? t6.setDirection("inactive") : t6.direction = "inactive") : true !== e5.offerToReceiveAudio || t6 || this.addTransceiver("audio"), void 0 !== e5.offerToReceiveVideo && (e5.offerToReceiveVideo = !!e5.offerToReceiveVideo);
                  const i4 = this.getTransceivers().find((e6) => "video" === e6.receiver.track.kind);
                  false === e5.offerToReceiveVideo && i4 ? "sendrecv" === i4.direction ? i4.setDirection ? i4.setDirection("sendonly") : i4.direction = "sendonly" : "recvonly" === i4.direction && (i4.setDirection ? i4.setDirection("inactive") : i4.direction = "inactive") : true !== e5.offerToReceiveVideo || i4 || this.addTransceiver("video");
                }
                return t5.apply(this, arguments);
              };
            }
            function se(e4) {
              "object" != typeof e4 || e4.AudioContext || (e4.AudioContext = e4.webkitAudioContext);
            }
            var re = s(985), oe = s.n(re);
            function ae(e4) {
              if (!e4.RTCIceCandidate || e4.RTCIceCandidate && "foundation" in e4.RTCIceCandidate.prototype) return;
              const t5 = e4.RTCIceCandidate;
              e4.RTCIceCandidate = function(e5) {
                if ("object" == typeof e5 && e5.candidate && 0 === e5.candidate.indexOf("a=") && ((e5 = JSON.parse(JSON.stringify(e5))).candidate = e5.candidate.substr(2)), e5.candidate && e5.candidate.length) {
                  const i4 = new t5(e5), n4 = oe().parseCandidate(e5.candidate), s2 = Object.assign(i4, n4);
                  return s2.toJSON = function() {
                    return { candidate: s2.candidate, sdpMid: s2.sdpMid, sdpMLineIndex: s2.sdpMLineIndex, usernameFragment: s2.usernameFragment };
                  }, s2;
                }
                return new t5(e5);
              }, e4.RTCIceCandidate.prototype = t5.prototype, l(e4, "icecandidate", (t6) => (t6.candidate && Object.defineProperty(t6, "candidate", { value: new e4.RTCIceCandidate(t6.candidate), writable: "false" }), t6));
            }
            function de(e4) {
              if (!e4.RTCPeerConnection) return;
              const t5 = v(e4);
              "sctp" in e4.RTCPeerConnection.prototype || Object.defineProperty(e4.RTCPeerConnection.prototype, "sctp", { get() {
                return void 0 === this._sctp ? null : this._sctp;
              } });
              const i4 = e4.RTCPeerConnection.prototype.setRemoteDescription;
              e4.RTCPeerConnection.prototype.setRemoteDescription = function() {
                if (this._sctp = null, "chrome" === t5.browser && t5.version >= 76) {
                  const { sdpSemantics: e5 } = this.getConfiguration();
                  "plan-b" === e5 && Object.defineProperty(this, "sctp", { get() {
                    return void 0 === this._sctp ? null : this._sctp;
                  }, enumerable: true, configurable: true });
                }
                if (function(e5) {
                  if (!e5 || !e5.sdp) return false;
                  const t6 = oe().splitSections(e5.sdp);
                  return t6.shift(), t6.some((e6) => {
                    const t7 = oe().parseMLine(e6);
                    return t7 && "application" === t7.kind && -1 !== t7.protocol.indexOf("SCTP");
                  });
                }(arguments[0])) {
                  const e5 = function(e6) {
                    const t6 = e6.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
                    if (null === t6 || t6.length < 2) return -1;
                    const i6 = parseInt(t6[1], 10);
                    return i6 != i6 ? -1 : i6;
                  }(arguments[0]), i5 = function(e6) {
                    let i6 = 65536;
                    return "firefox" === t5.browser && (i6 = t5.version < 57 ? -1 === e6 ? 16384 : 2147483637 : t5.version < 60 ? 57 === t5.version ? 65535 : 65536 : 2147483637), i6;
                  }(e5), n4 = function(e6, i6) {
                    let n5 = 65536;
                    "firefox" === t5.browser && 57 === t5.version && (n5 = 65535);
                    const s3 = oe().matchPrefix(e6.sdp, "a=max-message-size:");
                    return s3.length > 0 ? n5 = parseInt(s3[0].substr(19), 10) : "firefox" === t5.browser && -1 !== i6 && (n5 = 2147483637), n5;
                  }(arguments[0], e5);
                  let s2;
                  s2 = 0 === i5 && 0 === n4 ? Number.POSITIVE_INFINITY : 0 === i5 || 0 === n4 ? Math.max(i5, n4) : Math.min(i5, n4);
                  const r2 = {};
                  Object.defineProperty(r2, "maxMessageSize", { get: () => s2 }), this._sctp = r2;
                }
                return i4.apply(this, arguments);
              };
            }
            function ce(e4) {
              if (!e4.RTCPeerConnection || !("createDataChannel" in e4.RTCPeerConnection.prototype)) return;
              function t5(e5, t6) {
                const i5 = e5.send;
                e5.send = function() {
                  const n4 = arguments[0], s2 = n4.length || n4.size || n4.byteLength;
                  if ("open" === e5.readyState && t6.sctp && s2 > t6.sctp.maxMessageSize) throw new TypeError("Message too large (can send a maximum of " + t6.sctp.maxMessageSize + " bytes)");
                  return i5.apply(e5, arguments);
                };
              }
              const i4 = e4.RTCPeerConnection.prototype.createDataChannel;
              e4.RTCPeerConnection.prototype.createDataChannel = function() {
                const e5 = i4.apply(this, arguments);
                return t5(e5, this), e5;
              }, l(e4, "datachannel", (e5) => (t5(e5.channel, e5.target), e5));
            }
            function le(e4) {
              if (!e4.RTCPeerConnection || "connectionState" in e4.RTCPeerConnection.prototype) return;
              const t5 = e4.RTCPeerConnection.prototype;
              Object.defineProperty(t5, "connectionState", { get() {
                return { completed: "connected", checking: "connecting" }[this.iceConnectionState] || this.iceConnectionState;
              }, enumerable: true, configurable: true }), Object.defineProperty(t5, "onconnectionstatechange", { get() {
                return this._onconnectionstatechange || null;
              }, set(e5) {
                this._onconnectionstatechange && (this.removeEventListener("connectionstatechange", this._onconnectionstatechange), delete this._onconnectionstatechange), e5 && this.addEventListener("connectionstatechange", this._onconnectionstatechange = e5);
              }, enumerable: true, configurable: true }), ["setLocalDescription", "setRemoteDescription"].forEach((e5) => {
                const i4 = t5[e5];
                t5[e5] = function() {
                  return this._connectionstatechangepoly || (this._connectionstatechangepoly = (e6) => {
                    const t6 = e6.target;
                    if (t6._lastConnectionState !== t6.connectionState) {
                      t6._lastConnectionState = t6.connectionState;
                      const i5 = new Event("connectionstatechange", e6);
                      t6.dispatchEvent(i5);
                    }
                    return e6;
                  }, this.addEventListener("iceconnectionstatechange", this._connectionstatechangepoly)), i4.apply(this, arguments);
                };
              });
            }
            function ue(e4) {
              if (!e4.RTCPeerConnection) return;
              const t5 = v(e4);
              if ("chrome" === t5.browser && t5.version >= 71) return;
              if ("safari" === t5.browser && t5.version >= 605) return;
              const i4 = e4.RTCPeerConnection.prototype.setRemoteDescription;
              e4.RTCPeerConnection.prototype.setRemoteDescription = function(e5) {
                return e5 && e5.sdp && -1 !== e5.sdp.indexOf("\na=extmap-allow-mixed") && (e5.sdp = e5.sdp.split("\n").filter((e6) => "a=extmap-allow-mixed" !== e6.trim()).join("\n")), i4.apply(this, arguments);
              };
            }
            !function({ window: s2 } = {}, r2 = { shimChrome: true, shimFirefox: true, shimEdge: true, shimSafari: true }) {
              const a2 = p, d2 = v(s2), l2 = { browserDetails: d2, commonShim: o, extractVersion: c, disableLog: u, disableWarnings: h };
              switch (d2.browser) {
                case "chrome":
                  if (!e3 || !D || !r2.shimChrome) return a2("Chrome shim is not included in this adapter release."), l2;
                  if (null === d2.version) return a2("Chrome shim can not determine version, not shimming."), l2;
                  a2("adapter.js shimming chrome."), l2.browserShim = e3, w(s2), E(s2), D(s2), C(s2), P(s2), T(s2), I(s2), R(s2), O(s2), ae(s2), le(s2), de(s2), ce(s2), ue(s2);
                  break;
                case "firefox":
                  if (!i3 || !B || !r2.shimFirefox) return a2("Firefox shim is not included in this adapter release."), l2;
                  a2("adapter.js shimming firefox."), l2.browserShim = i3, U(s2), B(s2), G(s2), W(s2), V(s2), H(s2), z(s2), K(s2), q(s2), $(s2), J(s2), ae(s2), le(s2), de(s2), ce(s2);
                  break;
                case "edge":
                  if (!t4 || !F || !r2.shimEdge) return a2("MS edge shim is not included in this adapter release."), l2;
                  a2("adapter.js shimming edge."), l2.browserShim = t4, L(s2), x(s2), F(s2), _(s2), de(s2), ce(s2);
                  break;
                case "safari":
                  if (!n3 || !r2.shimSafari) return a2("Safari shim is not included in this adapter release."), l2;
                  a2("adapter.js shimming safari."), l2.browserShim = n3, te(s2), ne(s2), Y(s2), X(s2), Q(s2), ie(s2), Z(s2), se(s2), ae(s2), de(s2), ce(s2), ue(s2);
                  break;
                default:
                  a2("Unsupported browser!");
              }
            }({ window }), s(393);
            var he = Ragnarok.GridApp, pe = Ragnarok.ChooseStreamingSettings, fe = Ragnarok.ChooseStreamingResolution, ve = Ragnarok.InitializeUtils, me = Ragnarok.GetSupportedAudioChannelCount, ge = Ragnarok.GetDeviceCapabilities, Ae = Ragnarok.getSupportedCodecs, Se = Ragnarok.VirtualButton, be = Ragnarok.VirtualGamepadHandler, we = Ragnarok.ConfigureRagnarokSettings, ye = Ragnarok.CHANGELIST, Ee = Ragnarok.AuthType, Ce = Ragnarok.performHttpRequest, Te = Ragnarok.AddPlatformTelemetry, Ie = Ragnarok.IsFeatureSupported, Re = Ragnarok.CalculateMaxBitrateKbps, ke = Ragnarok.CalculateDataUsage, Pe = Ragnarok.LogImpl, De = Ragnarok.EVENTS, Oe = Ragnarok.HotkeyModifier, Me = Ragnarok.defaultInputConfigFlags, Ne = Ragnarok.StreamingProfilePreset, Le = Ragnarok.TrackType, xe = Ragnarok.STREAMING_STATE, Fe = Ragnarok.RNotificationCode, _e = Ragnarok.ScErrorCode, Ue = Ragnarok.configureSessionControlSettings, je = Ragnarok.DeviceType, Ge = Ragnarok.DeviceOS, Be = Ragnarok.NetworkType, Ve = Ragnarok.registerLogCallback, He = Ragnarok.LogLevel, We = Ragnarok.createSessionControl, ze = Ragnarok.SdrHdrMode, Ke = Ragnarok.Usage, qe = Ragnarok.Protocol, $e = Ragnarok.AppLevelProtocol, Je = Ragnarok.AdState, Xe = Ragnarok.AdAction, Qe = Ragnarok.BitDepth, Ye = Ragnarok.ClientType, Ze = Ragnarok.SessionState, et = Ragnarok.SessionProgressState, tt = Ragnarok.AppLaunchMode, it = Ragnarok.updateSessionParameters, nt = Ragnarok.isCancelCode, st = Ragnarok.isResumableSessionState, rt = Ragnarok.getResumableSession, ot = Ragnarok.SessionControlTelemetry, at = Ragnarok.GsErrorCode, dt = Ragnarok.GridServerSettings, ct = Ragnarok.ConfigureGridServerSettings, lt = Ragnarok.BrowserName, ut = Ragnarok.PlatformName, ht = Ragnarok.getPlatformDetails, pt = Ragnarok.DeviceModel, ft = Ragnarok.DeviceVendor, vt = Ragnarok.CLIENT_VERSION, mt = Ragnarok.CLIENT_IDENTIFICATION, gt = Ragnarok.SESSIONMODIFY_ACTION, At = Ragnarok.AudioFormat, St = Ragnarok.ClientStreamer, bt = Ragnarok.GS_EVENTS, wt = Ragnarok.GridServer, yt = Ragnarok.PassThruServer, Et = Ragnarok.VsyncType, Ct = Ragnarok.getDeviceCapabilities, Tt = Ragnarok.serializeDeviceCapabilities, It = Ragnarok.PayloadOSType, Rt = Ragnarok.PayloadBrowserType, kt = Ragnarok.PayloadDeviceType, Pt = Ragnarok.ClientHeaderOSType, Dt = Ragnarok.ClientHeaderBrowserType, Ot = Ragnarok.ClientHeaderDeviceType, Mt = Ragnarok.translatePlatformDetailsForPayload, Nt = Ragnarok.translatePlatformDetailsForClientHeader, Lt = Ragnarok.getStreamerType, xt = Ragnarok.BrowserFeature, Ft = Ragnarok.isFeatureSupported, _t = Ragnarok.shouldDefaultEnableMic, Ut = Ragnarok.getRecommendedBitrate, jt = Ragnarok.getStreamStartParameters, Gt = Ragnarok.estimateDataUsage, Bt = Ragnarok.NskTelemetry, Vt = Ragnarok.createNskStreamClient, Ht = Ragnarok.configureRagnarokSettings, Wt = Ragnarok.getNetworkTypeDetector, zt = Ragnarok.RErrorCode, Kt = Ragnarok.HidType, qt = Ragnarok.InputType, $t = Ragnarok.VideoCodecType, Jt = Ragnarok.MicState, Xt = Ragnarok.DynamicStreamingMode, Qt = Ragnarok.MediaTrackKind, Yt = Ragnarok.StreamStopReason, Zt = Ragnarok.StreamWarningType, ei = Ragnarok.CursorType, ti = Ragnarok.StreamingState;
          })(), e2.exports = r;
        })();
      }, 142: (e2, t2, i2) => {
        "use strict";
        i2.r(t2), i2.d(t2, { DiagConsoleLogger: () => R, DiagLogLevel: () => p, INVALID_SPANID: () => Z, INVALID_SPAN_CONTEXT: () => te, INVALID_TRACEID: () => ee, ProxyTracer: () => ye, ProxyTracerProvider: () => Ce, ROOT_CONTEXT: () => T, SamplingDecision: () => me, SpanKind: () => ge, SpanStatusCode: () => Ae, TraceFlags: () => K, ValueType: () => C, baggageEntryMetadataFromString: () => w, context: () => Oe, createContextKey: () => y, createNoopMeter: () => z, createTraceState: () => De, default: () => $e, defaultTextMapGetter: () => q, defaultTextMapSetter: () => $, diag: () => Me, isSpanContextValid: () => fe, isValidSpanId: () => pe, isValidTraceId: () => he, metrics: () => xe, propagation: () => ze, trace: () => qe });
        var n2 = "object" == typeof globalThis ? globalThis : "object" == typeof self ? self : "object" == typeof window ? window : "object" == typeof i2.g ? i2.g : {}, s = "1.4.1", r = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/, o = function(e3) {
          var t3 = /* @__PURE__ */ new Set([e3]), i3 = /* @__PURE__ */ new Set(), n3 = e3.match(r);
          if (!n3) return function() {
            return false;
          };
          var s2 = +n3[1], o2 = +n3[2], a2 = +n3[3];
          if (null != n3[4]) return function(t4) {
            return t4 === e3;
          };
          function d2(e4) {
            return i3.add(e4), false;
          }
          function c2(e4) {
            return t3.add(e4), true;
          }
          return function(e4) {
            if (t3.has(e4)) return true;
            if (i3.has(e4)) return false;
            var n4 = e4.match(r);
            if (!n4) return d2(e4);
            var l2 = +n4[1], u2 = +n4[2], h2 = +n4[3];
            return null != n4[4] || s2 !== l2 ? d2(e4) : 0 === s2 ? o2 === u2 && a2 <= h2 ? c2(e4) : d2(e4) : o2 <= u2 ? c2(e4) : d2(e4);
          };
        }(s), a = s.split(".")[0], d = Symbol.for("opentelemetry.js.api." + a), c = n2;
        function l(e3, t3, i3, n3) {
          var r2;
          void 0 === n3 && (n3 = false);
          var o2 = c[d] = null !== (r2 = c[d]) && void 0 !== r2 ? r2 : { version: s };
          if (!n3 && o2[e3]) {
            var a2 = new Error("@opentelemetry/api: Attempted duplicate registration of API: " + e3);
            return i3.error(a2.stack || a2.message), false;
          }
          return o2.version !== s ? (a2 = new Error("@opentelemetry/api: Registration of version v" + o2.version + " for " + e3 + " does not match previously registered API v" + s), i3.error(a2.stack || a2.message), false) : (o2[e3] = t3, i3.debug("@opentelemetry/api: Registered a global for " + e3 + " v" + s + "."), true);
        }
        function u(e3) {
          var t3, i3, n3 = null === (t3 = c[d]) || void 0 === t3 ? void 0 : t3.version;
          if (n3 && o(n3)) return null === (i3 = c[d]) || void 0 === i3 ? void 0 : i3[e3];
        }
        function h(e3, t3) {
          t3.debug("@opentelemetry/api: Unregistering a global for " + e3 + " v" + s + ".");
          var i3 = c[d];
          i3 && delete i3[e3];
        }
        var p, f = function() {
          function e3(e4) {
            this._namespace = e4.namespace || "DiagComponentLogger";
          }
          return e3.prototype.debug = function() {
            for (var e4 = [], t3 = 0; t3 < arguments.length; t3++) e4[t3] = arguments[t3];
            return v("debug", this._namespace, e4);
          }, e3.prototype.error = function() {
            for (var e4 = [], t3 = 0; t3 < arguments.length; t3++) e4[t3] = arguments[t3];
            return v("error", this._namespace, e4);
          }, e3.prototype.info = function() {
            for (var e4 = [], t3 = 0; t3 < arguments.length; t3++) e4[t3] = arguments[t3];
            return v("info", this._namespace, e4);
          }, e3.prototype.warn = function() {
            for (var e4 = [], t3 = 0; t3 < arguments.length; t3++) e4[t3] = arguments[t3];
            return v("warn", this._namespace, e4);
          }, e3.prototype.verbose = function() {
            for (var e4 = [], t3 = 0; t3 < arguments.length; t3++) e4[t3] = arguments[t3];
            return v("verbose", this._namespace, e4);
          }, e3;
        }();
        function v(e3, t3, i3) {
          var n3 = u("diag");
          if (n3) return i3.unshift(t3), n3[e3].apply(n3, function(e4, t4, i4) {
            if (i4 || 2 === arguments.length) for (var n4, s2 = 0, r2 = t4.length; s2 < r2; s2++) !n4 && s2 in t4 || (n4 || (n4 = Array.prototype.slice.call(t4, 0, s2)), n4[s2] = t4[s2]);
            return e4.concat(n4 || Array.prototype.slice.call(t4));
          }([], function(e4, t4) {
            var i4 = "function" == typeof Symbol && e4[Symbol.iterator];
            if (!i4) return e4;
            var n4, s2, r2 = i4.call(e4), o2 = [];
            try {
              for (; (void 0 === t4 || t4-- > 0) && !(n4 = r2.next()).done; ) o2.push(n4.value);
            } catch (e5) {
              s2 = { error: e5 };
            } finally {
              try {
                n4 && !n4.done && (i4 = r2.return) && i4.call(r2);
              } finally {
                if (s2) throw s2.error;
              }
            }
            return o2;
          }(i3), false));
        }
        !function(e3) {
          e3[e3.NONE = 0] = "NONE", e3[e3.ERROR = 30] = "ERROR", e3[e3.WARN = 50] = "WARN", e3[e3.INFO = 60] = "INFO", e3[e3.DEBUG = 70] = "DEBUG", e3[e3.VERBOSE = 80] = "VERBOSE", e3[e3.ALL = 9999] = "ALL";
        }(p || (p = {}));
        var m = function() {
          function e3() {
            function e4(e5) {
              return function() {
                for (var t4 = [], i3 = 0; i3 < arguments.length; i3++) t4[i3] = arguments[i3];
                var n3 = u("diag");
                if (n3) return n3[e5].apply(n3, function(e6, t5, i4) {
                  if (i4 || 2 === arguments.length) for (var n4, s2 = 0, r2 = t5.length; s2 < r2; s2++) !n4 && s2 in t5 || (n4 || (n4 = Array.prototype.slice.call(t5, 0, s2)), n4[s2] = t5[s2]);
                  return e6.concat(n4 || Array.prototype.slice.call(t5));
                }([], function(e6, t5) {
                  var i4 = "function" == typeof Symbol && e6[Symbol.iterator];
                  if (!i4) return e6;
                  var n4, s2, r2 = i4.call(e6), o2 = [];
                  try {
                    for (; (void 0 === t5 || t5-- > 0) && !(n4 = r2.next()).done; ) o2.push(n4.value);
                  } catch (e7) {
                    s2 = { error: e7 };
                  } finally {
                    try {
                      n4 && !n4.done && (i4 = r2.return) && i4.call(r2);
                    } finally {
                      if (s2) throw s2.error;
                    }
                  }
                  return o2;
                }(t4), false));
              };
            }
            var t3 = this;
            t3.setLogger = function(e5, i3) {
              var n3, s2, r2;
              if (void 0 === i3 && (i3 = { logLevel: p.INFO }), e5 === t3) {
                var o2 = new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
                return t3.error(null !== (n3 = o2.stack) && void 0 !== n3 ? n3 : o2.message), false;
              }
              "number" == typeof i3 && (i3 = { logLevel: i3 });
              var a2 = u("diag"), d2 = function(e6, t4) {
                function i4(i5, n4) {
                  var s3 = t4[i5];
                  return "function" == typeof s3 && e6 >= n4 ? s3.bind(t4) : function() {
                  };
                }
                return e6 < p.NONE ? e6 = p.NONE : e6 > p.ALL && (e6 = p.ALL), t4 = t4 || {}, { error: i4("error", p.ERROR), warn: i4("warn", p.WARN), info: i4("info", p.INFO), debug: i4("debug", p.DEBUG), verbose: i4("verbose", p.VERBOSE) };
              }(null !== (s2 = i3.logLevel) && void 0 !== s2 ? s2 : p.INFO, e5);
              if (a2 && !i3.suppressOverrideMessage) {
                var c2 = null !== (r2 = new Error().stack) && void 0 !== r2 ? r2 : "<failed to generate stacktrace>";
                a2.warn("Current logger will be overwritten from " + c2), d2.warn("Current logger will overwrite one already registered from " + c2);
              }
              return l("diag", d2, t3, true);
            }, t3.disable = function() {
              h("diag", t3);
            }, t3.createComponentLogger = function(e5) {
              return new f(e5);
            }, t3.verbose = e4("verbose"), t3.debug = e4("debug"), t3.info = e4("info"), t3.warn = e4("warn"), t3.error = e4("error");
          }
          return e3.instance = function() {
            return this._instance || (this._instance = new e3()), this._instance;
          }, e3;
        }(), g = function() {
          function e3(e4) {
            this._entries = e4 ? new Map(e4) : /* @__PURE__ */ new Map();
          }
          return e3.prototype.getEntry = function(e4) {
            var t3 = this._entries.get(e4);
            if (t3) return Object.assign({}, t3);
          }, e3.prototype.getAllEntries = function() {
            return Array.from(this._entries.entries()).map(function(e4) {
              var t3 = function(e5, t4) {
                var i3 = "function" == typeof Symbol && e5[Symbol.iterator];
                if (!i3) return e5;
                var n3, s2, r2 = i3.call(e5), o2 = [];
                try {
                  for (; (void 0 === t4 || t4-- > 0) && !(n3 = r2.next()).done; ) o2.push(n3.value);
                } catch (e6) {
                  s2 = { error: e6 };
                } finally {
                  try {
                    n3 && !n3.done && (i3 = r2.return) && i3.call(r2);
                  } finally {
                    if (s2) throw s2.error;
                  }
                }
                return o2;
              }(e4, 2);
              return [t3[0], t3[1]];
            });
          }, e3.prototype.setEntry = function(t3, i3) {
            var n3 = new e3(this._entries);
            return n3._entries.set(t3, i3), n3;
          }, e3.prototype.removeEntry = function(t3) {
            var i3 = new e3(this._entries);
            return i3._entries.delete(t3), i3;
          }, e3.prototype.removeEntries = function() {
            for (var t3, i3, n3 = [], s2 = 0; s2 < arguments.length; s2++) n3[s2] = arguments[s2];
            var r2 = new e3(this._entries);
            try {
              for (var o2 = function(e4) {
                var t4 = "function" == typeof Symbol && Symbol.iterator, i4 = t4 && e4[t4], n4 = 0;
                if (i4) return i4.call(e4);
                if (e4 && "number" == typeof e4.length) return { next: function() {
                  return e4 && n4 >= e4.length && (e4 = void 0), { value: e4 && e4[n4++], done: !e4 };
                } };
                throw new TypeError(t4 ? "Object is not iterable." : "Symbol.iterator is not defined.");
              }(n3), a2 = o2.next(); !a2.done; a2 = o2.next()) {
                var d2 = a2.value;
                r2._entries.delete(d2);
              }
            } catch (e4) {
              t3 = { error: e4 };
            } finally {
              try {
                a2 && !a2.done && (i3 = o2.return) && i3.call(o2);
              } finally {
                if (t3) throw t3.error;
              }
            }
            return r2;
          }, e3.prototype.clear = function() {
            return new e3();
          }, e3;
        }(), A = Symbol("BaggageEntryMetadata"), S = m.instance();
        function b(e3) {
          return void 0 === e3 && (e3 = {}), new g(new Map(Object.entries(e3)));
        }
        function w(e3) {
          return "string" != typeof e3 && (S.error("Cannot create baggage metadata from unknown type: " + typeof e3), e3 = ""), { __TYPE__: A, toString: function() {
            return e3;
          } };
        }
        function y(e3) {
          return Symbol.for(e3);
        }
        var E, C, T = new function e3(t3) {
          var i3 = this;
          i3._currentContext = t3 ? new Map(t3) : /* @__PURE__ */ new Map(), i3.getValue = function(e4) {
            return i3._currentContext.get(e4);
          }, i3.setValue = function(t4, n3) {
            var s2 = new e3(i3._currentContext);
            return s2._currentContext.set(t4, n3), s2;
          }, i3.deleteValue = function(t4) {
            var n3 = new e3(i3._currentContext);
            return n3._currentContext.delete(t4), n3;
          };
        }(), I = [{ n: "error", c: "error" }, { n: "warn", c: "warn" }, { n: "info", c: "info" }, { n: "debug", c: "debug" }, { n: "verbose", c: "trace" }], R = function() {
          function e3(e4) {
            return function() {
              for (var t4 = [], i3 = 0; i3 < arguments.length; i3++) t4[i3] = arguments[i3];
              if (console) {
                var n3 = console[e4];
                if ("function" != typeof n3 && (n3 = console.log), "function" == typeof n3) return n3.apply(console, t4);
              }
            };
          }
          for (var t3 = 0; t3 < I.length; t3++) this[I[t3].n] = e3(I[t3].c);
        }, k = (E = function(e3, t3) {
          return E = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e4, t4) {
            e4.__proto__ = t4;
          } || function(e4, t4) {
            for (var i3 in t4) Object.prototype.hasOwnProperty.call(t4, i3) && (e4[i3] = t4[i3]);
          }, E(e3, t3);
        }, function(e3, t3) {
          if ("function" != typeof t3 && null !== t3) throw new TypeError("Class extends value " + String(t3) + " is not a constructor or null");
          function i3() {
            this.constructor = e3;
          }
          E(e3, t3), e3.prototype = null === t3 ? Object.create(t3) : (i3.prototype = t3.prototype, new i3());
        }), P = function() {
          function e3() {
          }
          return e3.prototype.createHistogram = function(e4, t3) {
            return G;
          }, e3.prototype.createCounter = function(e4, t3) {
            return j;
          }, e3.prototype.createUpDownCounter = function(e4, t3) {
            return B;
          }, e3.prototype.createObservableGauge = function(e4, t3) {
            return H;
          }, e3.prototype.createObservableCounter = function(e4, t3) {
            return V;
          }, e3.prototype.createObservableUpDownCounter = function(e4, t3) {
            return W;
          }, e3.prototype.addBatchObservableCallback = function(e4, t3) {
          }, e3.prototype.removeBatchObservableCallback = function(e4) {
          }, e3;
        }(), D = function() {
        }, O = function(e3) {
          function t3() {
            return null !== e3 && e3.apply(this, arguments) || this;
          }
          return k(t3, e3), t3.prototype.add = function(e4, t4) {
          }, t3;
        }(D), M = function(e3) {
          function t3() {
            return null !== e3 && e3.apply(this, arguments) || this;
          }
          return k(t3, e3), t3.prototype.add = function(e4, t4) {
          }, t3;
        }(D), N = function(e3) {
          function t3() {
            return null !== e3 && e3.apply(this, arguments) || this;
          }
          return k(t3, e3), t3.prototype.record = function(e4, t4) {
          }, t3;
        }(D), L = function() {
          function e3() {
          }
          return e3.prototype.addCallback = function(e4) {
          }, e3.prototype.removeCallback = function(e4) {
          }, e3;
        }(), x = function(e3) {
          function t3() {
            return null !== e3 && e3.apply(this, arguments) || this;
          }
          return k(t3, e3), t3;
        }(L), F = function(e3) {
          function t3() {
            return null !== e3 && e3.apply(this, arguments) || this;
          }
          return k(t3, e3), t3;
        }(L), _ = function(e3) {
          function t3() {
            return null !== e3 && e3.apply(this, arguments) || this;
          }
          return k(t3, e3), t3;
        }(L), U = new P(), j = new O(), G = new N(), B = new M(), V = new x(), H = new F(), W = new _();
        function z() {
          return U;
        }
        !function(e3) {
          e3[e3.INT = 0] = "INT", e3[e3.DOUBLE = 1] = "DOUBLE";
        }(C || (C = {}));
        var K, q = { get: function(e3, t3) {
          if (null != e3) return e3[t3];
        }, keys: function(e3) {
          return null == e3 ? [] : Object.keys(e3);
        } }, $ = { set: function(e3, t3, i3) {
          null != e3 && (e3[t3] = i3);
        } }, J = function() {
          function e3() {
          }
          return e3.prototype.active = function() {
            return T;
          }, e3.prototype.with = function(e4, t3, i3) {
            for (var n3 = [], s2 = 3; s2 < arguments.length; s2++) n3[s2 - 3] = arguments[s2];
            return t3.call.apply(t3, function(e5, t4, i4) {
              if (i4 || 2 === arguments.length) for (var n4, s3 = 0, r2 = t4.length; s3 < r2; s3++) !n4 && s3 in t4 || (n4 || (n4 = Array.prototype.slice.call(t4, 0, s3)), n4[s3] = t4[s3]);
              return e5.concat(n4 || Array.prototype.slice.call(t4));
            }([i3], function(e5, t4) {
              var i4 = "function" == typeof Symbol && e5[Symbol.iterator];
              if (!i4) return e5;
              var n4, s3, r2 = i4.call(e5), o2 = [];
              try {
                for (; (void 0 === t4 || t4-- > 0) && !(n4 = r2.next()).done; ) o2.push(n4.value);
              } catch (e6) {
                s3 = { error: e6 };
              } finally {
                try {
                  n4 && !n4.done && (i4 = r2.return) && i4.call(r2);
                } finally {
                  if (s3) throw s3.error;
                }
              }
              return o2;
            }(n3), false));
          }, e3.prototype.bind = function(e4, t3) {
            return t3;
          }, e3.prototype.enable = function() {
            return this;
          }, e3.prototype.disable = function() {
            return this;
          }, e3;
        }(), X = "context", Q = new J(), Y = function() {
          function e3() {
          }
          return e3.getInstance = function() {
            return this._instance || (this._instance = new e3()), this._instance;
          }, e3.prototype.setGlobalContextManager = function(e4) {
            return l(X, e4, m.instance());
          }, e3.prototype.active = function() {
            return this._getContextManager().active();
          }, e3.prototype.with = function(e4, t3, i3) {
            for (var n3, s2 = [], r2 = 3; r2 < arguments.length; r2++) s2[r2 - 3] = arguments[r2];
            return (n3 = this._getContextManager()).with.apply(n3, function(e5, t4, i4) {
              if (i4 || 2 === arguments.length) for (var n4, s3 = 0, r3 = t4.length; s3 < r3; s3++) !n4 && s3 in t4 || (n4 || (n4 = Array.prototype.slice.call(t4, 0, s3)), n4[s3] = t4[s3]);
              return e5.concat(n4 || Array.prototype.slice.call(t4));
            }([e4, t3, i3], function(e5, t4) {
              var i4 = "function" == typeof Symbol && e5[Symbol.iterator];
              if (!i4) return e5;
              var n4, s3, r3 = i4.call(e5), o2 = [];
              try {
                for (; (void 0 === t4 || t4-- > 0) && !(n4 = r3.next()).done; ) o2.push(n4.value);
              } catch (e6) {
                s3 = { error: e6 };
              } finally {
                try {
                  n4 && !n4.done && (i4 = r3.return) && i4.call(r3);
                } finally {
                  if (s3) throw s3.error;
                }
              }
              return o2;
            }(s2), false));
          }, e3.prototype.bind = function(e4, t3) {
            return this._getContextManager().bind(e4, t3);
          }, e3.prototype._getContextManager = function() {
            return u(X) || Q;
          }, e3.prototype.disable = function() {
            this._getContextManager().disable(), h(X, m.instance());
          }, e3;
        }();
        !function(e3) {
          e3[e3.NONE = 0] = "NONE", e3[e3.SAMPLED = 1] = "SAMPLED";
        }(K || (K = {}));
        var Z = "0000000000000000", ee = "00000000000000000000000000000000", te = { traceId: ee, spanId: Z, traceFlags: K.NONE }, ie = function() {
          function e3(e4) {
            void 0 === e4 && (e4 = te), this._spanContext = e4;
          }
          return e3.prototype.spanContext = function() {
            return this._spanContext;
          }, e3.prototype.setAttribute = function(e4, t3) {
            return this;
          }, e3.prototype.setAttributes = function(e4) {
            return this;
          }, e3.prototype.addEvent = function(e4, t3) {
            return this;
          }, e3.prototype.setStatus = function(e4) {
            return this;
          }, e3.prototype.updateName = function(e4) {
            return this;
          }, e3.prototype.end = function(e4) {
          }, e3.prototype.isRecording = function() {
            return false;
          }, e3.prototype.recordException = function(e4, t3) {
          }, e3;
        }(), ne = y("OpenTelemetry Context Key SPAN");
        function se(e3) {
          return e3.getValue(ne) || void 0;
        }
        function re() {
          return se(Y.getInstance().active());
        }
        function oe(e3, t3) {
          return e3.setValue(ne, t3);
        }
        function ae(e3) {
          return e3.deleteValue(ne);
        }
        function de(e3, t3) {
          return oe(e3, new ie(t3));
        }
        function ce(e3) {
          var t3;
          return null === (t3 = se(e3)) || void 0 === t3 ? void 0 : t3.spanContext();
        }
        var le = /^([0-9a-f]{32})$/i, ue = /^[0-9a-f]{16}$/i;
        function he(e3) {
          return le.test(e3) && e3 !== ee;
        }
        function pe(e3) {
          return ue.test(e3) && e3 !== Z;
        }
        function fe(e3) {
          return he(e3.traceId) && pe(e3.spanId);
        }
        function ve(e3) {
          return new ie(e3);
        }
        var me, ge, Ae, Se = Y.getInstance(), be = function() {
          function e3() {
          }
          return e3.prototype.startSpan = function(e4, t3, i3) {
            if (void 0 === i3 && (i3 = Se.active()), Boolean(null == t3 ? void 0 : t3.root)) return new ie();
            var n3, s2 = i3 && ce(i3);
            return "object" == typeof (n3 = s2) && "string" == typeof n3.spanId && "string" == typeof n3.traceId && "number" == typeof n3.traceFlags && fe(s2) ? new ie(s2) : new ie();
          }, e3.prototype.startActiveSpan = function(e4, t3, i3, n3) {
            var s2, r2, o2;
            if (!(arguments.length < 2)) {
              2 === arguments.length ? o2 = t3 : 3 === arguments.length ? (s2 = t3, o2 = i3) : (s2 = t3, r2 = i3, o2 = n3);
              var a2 = null != r2 ? r2 : Se.active(), d2 = this.startSpan(e4, s2, a2), c2 = oe(a2, d2);
              return Se.with(c2, o2, void 0, d2);
            }
          }, e3;
        }(), we = new be(), ye = function() {
          function e3(e4, t3, i3, n3) {
            this._provider = e4, this.name = t3, this.version = i3, this.options = n3;
          }
          return e3.prototype.startSpan = function(e4, t3, i3) {
            return this._getTracer().startSpan(e4, t3, i3);
          }, e3.prototype.startActiveSpan = function(e4, t3, i3, n3) {
            var s2 = this._getTracer();
            return Reflect.apply(s2.startActiveSpan, s2, arguments);
          }, e3.prototype._getTracer = function() {
            if (this._delegate) return this._delegate;
            var e4 = this._provider.getDelegateTracer(this.name, this.version, this.options);
            return e4 ? (this._delegate = e4, this._delegate) : we;
          }, e3;
        }(), Ee = new (function() {
          function e3() {
          }
          return e3.prototype.getTracer = function(e4, t3, i3) {
            return new be();
          }, e3;
        }())(), Ce = function() {
          function e3() {
          }
          return e3.prototype.getTracer = function(e4, t3, i3) {
            var n3;
            return null !== (n3 = this.getDelegateTracer(e4, t3, i3)) && void 0 !== n3 ? n3 : new ye(this, e4, t3, i3);
          }, e3.prototype.getDelegate = function() {
            var e4;
            return null !== (e4 = this._delegate) && void 0 !== e4 ? e4 : Ee;
          }, e3.prototype.setDelegate = function(e4) {
            this._delegate = e4;
          }, e3.prototype.getDelegateTracer = function(e4, t3, i3) {
            var n3;
            return null === (n3 = this._delegate) || void 0 === n3 ? void 0 : n3.getTracer(e4, t3, i3);
          }, e3;
        }();
        !function(e3) {
          e3[e3.NOT_RECORD = 0] = "NOT_RECORD", e3[e3.RECORD = 1] = "RECORD", e3[e3.RECORD_AND_SAMPLED = 2] = "RECORD_AND_SAMPLED";
        }(me || (me = {})), function(e3) {
          e3[e3.INTERNAL = 0] = "INTERNAL", e3[e3.SERVER = 1] = "SERVER", e3[e3.CLIENT = 2] = "CLIENT", e3[e3.PRODUCER = 3] = "PRODUCER", e3[e3.CONSUMER = 4] = "CONSUMER";
        }(ge || (ge = {})), function(e3) {
          e3[e3.UNSET = 0] = "UNSET", e3[e3.OK = 1] = "OK", e3[e3.ERROR = 2] = "ERROR";
        }(Ae || (Ae = {}));
        var Te = "[_0-9a-z-*/]", Ie = new RegExp("^(?:[a-z]" + Te + "{0,255}|[a-z0-9]" + Te + "{0,240}@[a-z]" + Te + "{0,13})$"), Re = /^[ -~]{0,255}[!-~]$/, ke = /,|=/, Pe = function() {
          function e3(e4) {
            this._internalState = /* @__PURE__ */ new Map(), e4 && this._parse(e4);
          }
          return e3.prototype.set = function(e4, t3) {
            var i3 = this._clone();
            return i3._internalState.has(e4) && i3._internalState.delete(e4), i3._internalState.set(e4, t3), i3;
          }, e3.prototype.unset = function(e4) {
            var t3 = this._clone();
            return t3._internalState.delete(e4), t3;
          }, e3.prototype.get = function(e4) {
            return this._internalState.get(e4);
          }, e3.prototype.serialize = function() {
            var e4 = this;
            return this._keys().reduce(function(t3, i3) {
              return t3.push(i3 + "=" + e4.get(i3)), t3;
            }, []).join(",");
          }, e3.prototype._parse = function(e4) {
            e4.length > 512 || (this._internalState = e4.split(",").reverse().reduce(function(e5, t3) {
              var i3 = t3.trim(), n3 = i3.indexOf("=");
              if (-1 !== n3) {
                var s2 = i3.slice(0, n3), r2 = i3.slice(n3 + 1, t3.length);
                (function(e6) {
                  return Ie.test(e6);
                })(s2) && function(e6) {
                  return Re.test(e6) && !ke.test(e6);
                }(r2) && e5.set(s2, r2);
              }
              return e5;
            }, /* @__PURE__ */ new Map()), this._internalState.size > 32 && (this._internalState = new Map(Array.from(this._internalState.entries()).reverse().slice(0, 32))));
          }, e3.prototype._keys = function() {
            return Array.from(this._internalState.keys()).reverse();
          }, e3.prototype._clone = function() {
            var t3 = new e3();
            return t3._internalState = new Map(this._internalState), t3;
          }, e3;
        }();
        function De(e3) {
          return new Pe(e3);
        }
        var Oe = Y.getInstance(), Me = m.instance(), Ne = new (function() {
          function e3() {
          }
          return e3.prototype.getMeter = function(e4, t3, i3) {
            return U;
          }, e3;
        }())(), Le = "metrics", xe = function() {
          function e3() {
          }
          return e3.getInstance = function() {
            return this._instance || (this._instance = new e3()), this._instance;
          }, e3.prototype.setGlobalMeterProvider = function(e4) {
            return l(Le, e4, m.instance());
          }, e3.prototype.getMeterProvider = function() {
            return u(Le) || Ne;
          }, e3.prototype.getMeter = function(e4, t3, i3) {
            return this.getMeterProvider().getMeter(e4, t3, i3);
          }, e3.prototype.disable = function() {
            h(Le, m.instance());
          }, e3;
        }().getInstance(), Fe = function() {
          function e3() {
          }
          return e3.prototype.inject = function(e4, t3) {
          }, e3.prototype.extract = function(e4, t3) {
            return e4;
          }, e3.prototype.fields = function() {
            return [];
          }, e3;
        }(), _e = y("OpenTelemetry Baggage Key");
        function Ue(e3) {
          return e3.getValue(_e) || void 0;
        }
        function je() {
          return Ue(Y.getInstance().active());
        }
        function Ge(e3, t3) {
          return e3.setValue(_e, t3);
        }
        function Be(e3) {
          return e3.deleteValue(_e);
        }
        var Ve = "propagation", He = new Fe(), We = function() {
          function e3() {
            this.createBaggage = b, this.getBaggage = Ue, this.getActiveBaggage = je, this.setBaggage = Ge, this.deleteBaggage = Be;
          }
          return e3.getInstance = function() {
            return this._instance || (this._instance = new e3()), this._instance;
          }, e3.prototype.setGlobalPropagator = function(e4) {
            return l(Ve, e4, m.instance());
          }, e3.prototype.inject = function(e4, t3, i3) {
            return void 0 === i3 && (i3 = $), this._getGlobalPropagator().inject(e4, t3, i3);
          }, e3.prototype.extract = function(e4, t3, i3) {
            return void 0 === i3 && (i3 = q), this._getGlobalPropagator().extract(e4, t3, i3);
          }, e3.prototype.fields = function() {
            return this._getGlobalPropagator().fields();
          }, e3.prototype.disable = function() {
            h(Ve, m.instance());
          }, e3.prototype._getGlobalPropagator = function() {
            return u(Ve) || He;
          }, e3;
        }(), ze = We.getInstance(), Ke = "trace", qe = function() {
          function e3() {
            this._proxyTracerProvider = new Ce(), this.wrapSpanContext = ve, this.isSpanContextValid = fe, this.deleteSpan = ae, this.getSpan = se, this.getActiveSpan = re, this.getSpanContext = ce, this.setSpan = oe, this.setSpanContext = de;
          }
          return e3.getInstance = function() {
            return this._instance || (this._instance = new e3()), this._instance;
          }, e3.prototype.setGlobalTracerProvider = function(e4) {
            var t3 = l(Ke, this._proxyTracerProvider, m.instance());
            return t3 && this._proxyTracerProvider.setDelegate(e4), t3;
          }, e3.prototype.getTracerProvider = function() {
            return u(Ke) || this._proxyTracerProvider;
          }, e3.prototype.getTracer = function(e4, t3) {
            return this.getTracerProvider().getTracer(e4, t3);
          }, e3.prototype.disable = function() {
            h(Ke, m.instance()), this._proxyTracerProvider = new Ce();
          }, e3;
        }().getInstance();
        const $e = { context: Oe, diag: Me, metrics: xe, propagation: ze, trace: qe };
      }, 52: (e2, t2, i2) => {
        "use strict";
        Object.defineProperty(t2, "__esModule", { value: true });
        const n2 = i2(670), s = i2(84), r = i2(704);
        class o {
          static async connect(e3) {
            if (!o._stream) {
              const t3 = e3.streamSource;
              try {
                if ("gfn" === t3) return o._stream = new s.default(), o._stream.connect(e3.streamConfig);
                if ("direct" === t3) return o._stream = new n2.default(), o._stream.connect(e3.streamConfig);
              } catch (e4) {
                throw { action: r.eAction.start, status: r.eStatus.error, info: e4 };
              }
              throw console.error(`Stream:init: ${t3} is an invalid source`), { action: r.eAction.start, status: r.eStatus.error, info: TypeError(`Stream:init: '${t3}' is an invalid source`) };
            }
            return { action: r.eAction.start, status: r.eStatus.inProgress, info: "Starting stream" };
          }
          static async sendMessage(e3) {
            try {
              if (o._stream) return setTimeout(() => {
                var t3;
                return null === (t3 = o._stream) || void 0 === t3 ? void 0 : t3.sendMessage(e3);
              }, 100), console.debug(`Sent message to GFN app: ${e3}`), { action: r.eAction.message, status: r.eStatus.success, info: "Message was successfully sent." };
              {
                const e4 = "There is no stream controller. Please call the setup method.";
                throw console.error(`Error sending message: ${e4}`), { action: r.eAction.message, status: r.eStatus.error, info: e4 };
              }
            } catch (e4) {
              throw console.error("Error sending message: " + e4), { action: r.eAction.message, status: r.eStatus.error, info: e4 };
            }
          }
          static async start() {
            if (o._stream) return o._stream.start();
            throw { action: r.eAction.start, status: r.eStatus.error, info: "There is no stream controller. Please call the setup method." };
          }
          static async stop() {
            if (o._stream) return o._stream.stop().then((e3) => e3);
            throw { action: r.eAction.stop, status: r.eStatus.error, info: "There is no stream controller. Please call the setup method." };
          }
          static async terminate(e3 = false, t3 = false) {
            if (o._stream) return o._stream.terminate(e3).then((e4) => ("success" === (null == e4 ? void 0 : e4.status) && (o._stream = null), e4));
            throw { action: r.eAction.terminate, status: r.eStatus.error, info: "There is no stream controller. Please call the setup method." };
          }
        }
        t2.default = o;
      }, 84: (e2, t2, i2) => {
        "use strict";
        Object.defineProperty(t2, "__esModule", { value: true });
        const n2 = i2(704), s = { GFN: null, catalogClientId: null, clientId: null, cmsId: null, muteAudio: true, onUpdate: null, onStart: null, onCustomEvent: null };
        t2.default = class {
          constructor() {
            this._GFN = null, this._catalogClientId = "", this._clientId = "", this._cmsId = -9999, this._muteAudio = true;
          }
          async connect(e3) {
            if (!e3) throw { action: n2.eAction.start, status: n2.eStatus.error, info: "Invalid GFNConfig props provided. Please refer to usage documentation." };
            return e3 = { ...s, ...e3 }, this._GFN = e3.GFN, this._catalogClientId = e3.catalogClientId, this._clientId = e3.clientId, this._cmsId = e3.cmsId, this._muteAudio = e3.muteAudio, this._initialize().then(async () => {
              var t3, i3;
              await this._login();
              const s2 = await this._GFN.server.getServerInfo();
              e3.onUpdate({ action: n2.eAction.authUser, status: n2.eStatus.success, info: null === (t3 = this._GFN.currentUser) || void 0 === t3 ? void 0 : t3.displayName }), await this._stream(null === (i3 = null == s2 ? void 0 : s2.defaultZone) || void 0 === i3 ? void 0 : i3.address), console.debug("Started streaming"), this._GFN.streamer.on("started", () => {
                e3.onStart({ action: n2.eAction.start, status: n2.eStatus.success, info: "streamready" });
              }), this._GFN.streamer.on("message", (t4) => {
                console.debug(`Received message from GFN app: ${t4}`);
                const i4 = JSON.parse(t4);
                i4.event_type && i4.payload ? e3.onCustomEvent(i4) : Object.keys(i4).forEach((t5) => {
                  e3.onUpdate({ action: n2.eAction.update, status: n2.eStatus.success, info: JSON.stringify({ key: t5, value: i4[t5] }) });
                });
              });
            }).catch((e4) => {
              throw { action: n2.eAction.start, status: n2.eStatus.error, info: e4 };
            }), { action: n2.eAction.start, status: n2.eStatus.inProgress, info: "Starting stream." };
          }
          async start() {
            throw new Error("GFNStreamer::start is not defined.");
          }
          async stop() {
            throw new Error("GFNStreamer::stop is not defined.");
          }
          async terminate() {
            throw new Error("GFNStreamer::terminate is not defined.");
          }
          sendMessage(e3) {
            try {
              this._GFN.streamer.sendMessage(e3);
            } catch (e4) {
              console.error("Error sending message: " + e4);
            }
          }
          async _initialize() {
            console.debug("initialize");
            const e3 = new this._GFN.Settings({ clientId: this._clientId, catalogClientId: this._catalogClientId });
            try {
              await this._GFN.initialize(e3), console.debug("gfn init finished");
            } catch (e4) {
              console.error(`GFN Initialization Failed: ${e4.message}`);
            }
          }
          async _login() {
            console.debug("login");
            const e3 = this._GFN.auth.createLoginUrl();
            console.debug(`login ${e3}`);
            try {
              await this._GFN.auth.loginWithBrowserPopup(e3), console.debug("GFN Authorization Successful!"), console.debug(`GFN Logged in username: ${this._GFN.currentUser.displayName}`);
              const t3 = await this._GFN.server.getServerInfo();
              this._GFN.settings.vpcId || (this._GFN.settings.vpcId = t3.vpcId);
            } catch (e4) {
              throw console.error(`GFN Authorization Failed: ${e4.message}`), e4;
            }
          }
          async _stream(e3) {
            const t3 = this._cmsId, i3 = this._GFN.streamer.detectStreamingResolution(), n3 = { server: e3, appId: t3, streamParams: { width: i3.width, height: i3.height, fps: 60 }, authTokenCallback: async () => this._GFN.currentUser.authInfo.idToken.value, windowElementId: "view", enableMutedAutoPlay: this._muteAudio };
            return this._GFN.streamer.start(n3).then(() => {
              console.debug("streamer is starting...");
            }).catch((e4) => {
              console.debug(`error while starting stream. ${e4}`);
            });
          }
        };
      }, 520: (e2, t2) => {
        "use strict";
        Object.defineProperty(t2, "__esModule", { value: true }), t2.DefaultRagnarokQueryProps = void 0, t2.DefaultRagnarokQueryProps = { accessToken: "", autolaunch: true, cursor: "free", fps: 60, height: 1080, mediaport: 14109, mediaserver: "", mic: false, nucleus: "", server: "", sessionid: "", signalingport: 48322, signalingserver: "", width: 1920 }, t2.default = class {
          static query(e3) {
            return Object.keys(e3).reduce((i2, n2) => (void 0 !== t2.DefaultRagnarokQueryProps[n2] && void 0 !== e3[n2] && "width" !== n2 && "height" !== n2 && (i2 = `${i2}&${n2}=${e3[n2]}`), i2), `?resolution=${e3.width}x${e3.height}`);
          }
        };
      }, 670: (e2, t2, i2) => {
        "use strict";
        Object.defineProperty(t2, "__esModule", { value: true });
        const n2 = i2(271), s = i2(947), r = i2(473), o = i2(498), a = i2(704), d = i2(520), c = "client", l = { videoElementId: "remote-video", audioElementId: "remote-audio", authenticate: false, maxReconnects: 5, nativeTouchEvents: false, backendurl: "", connectivityTimeout: 2e3, onUpdate: null, onStart: null, onStop: null, onTerminate: null, onStreamStats: null, onCustomEvent: null, ...d.DefaultRagnarokQueryProps };
        t2.default = class {
          constructor() {
            this._ragnarokApp = null, this._backendURL = "", this._accessToken = null, this._nucleus = null, this._sessionID = null;
          }
          async connect(e3) {
            if (!e3) throw { action: a.eAction.start, status: a.eStatus.error, info: "No RagnarokConfig props provided. Please refer to usage documentation." };
            if ((e3 = { ...l, ...e3 }).maxReconnects < 0) throw { action: a.eAction.start, status: a.eStatus.error, info: `Invalid prop RagnarokConfig.maxReconnects: ${e3.maxReconnects}. Must be >= 0.` };
            const t3 = { search: d.default.query(e3) };
            try {
              this._backendURL = e3.backendurl, this._accessToken = e3.accessToken, this._nucleus = e3.nucleus, this._sessionID = e3.sessionid, 0 === e3.maxReconnects && (t3.search = `${t3.search}&disableworkerws=true`);
              const i3 = await (0, n2.getPlatformDetails)();
              e3.authenticate || (t3.search = t3.search.replace("accessToken", "accessTokenUnused")), this._ragnarokApp = new o.RagnarokApp({ maxSessionStartRetry: e3.maxReconnects, platformDetails: i3, videoElementId: e3.videoElementId, audioElementId: e3.audioElementId, messageElementId: "message-display", urlLocation: t3, authProvider: new s.DummyAuth(), logBuffer: new r.LogBuffer(512e3), onSessionStartResult: e3.onStart ? (t4, i4) => e3.onStart(a.StreamEventConverter.convert(t4, i4)) : null, onProgressUpdate: e3.onUpdate ? (t4, i4) => e3.onUpdate(a.StreamEventConverter.convert(t4, i4)) : null, onStreamStopped: null, onActiveSessionResult: null, onStreamingEvent: null, onGetSessionResult: null, onISSOUpdate: e3.onStreamStats ? (t4, i4) => e3.onStreamStats(a.StreamEventConverter.convert(t4, i4)) : null, onCustomEvent: e3.onCustomEvent, useTelemetry: false, nativeTouchEvents: e3.nativeTouchEvents, connectivityTimeout: e3.connectivityTimeout }), e3.autolaunch && await this._ragnarokApp.startButtonClick();
            } catch (e4) {
              throw r.Log.e(c, `Some error happened: ${null == e4 ? void 0 : e4.name}, ${null == e4 ? void 0 : e4.message}.`), { action: a.eAction.start, status: a.eStatus.error, info: e4 };
            }
            return { action: a.eAction.start, status: a.eStatus.inProgress, info: "Starting stream." };
          }
          sendMessage(e3) {
            const t3 = { messageType: "json", messageRecipient: "kit", data: e3 };
            this._ragnarokApp.sendCustomMessage(t3);
          }
          async stop() {
            try {
              return this._ragnarokApp.stopButtonClick(), { action: a.eAction.stop, status: a.eStatus.inProgress, info: "Stopping stream." };
            } catch (e3) {
              return { action: a.eAction.stop, status: a.eStatus.error, info: "Stopping stream." };
            }
          }
          async start() {
            try {
              return await this._ragnarokApp.startButtonClick(), { action: a.eAction.start, status: a.eStatus.inProgress, info: "Starting stream." };
            } catch (e3) {
              return { action: a.eAction.start, status: a.eStatus.error, info: e3 };
            }
          }
          _terminateStream() {
            this._ragnarokApp.stopButtonClick(false, true), this._ragnarokApp = null, this._backendURL = "", this._accessToken = null, this._nucleus = null, this._sessionID = null;
          }
          async terminate(e3) {
            if (!e3) return this._terminateStream(), { action: a.eAction.terminate, status: a.eStatus.success, info: "Session has terminated" };
            if (confirm("Terminating session will destroy all associated resources and is irrecoverable, unsaved changes will be lost, do you confirm you want to terminate it?")) {
              const t3 = this._accessToken, i3 = this._nucleus, n3 = this._sessionID, s2 = this._backendURL;
              this._terminateStream();
              let o2 = "DELETE";
              if (s2) {
                let d2 = null;
                if ("DELETE" === o2) {
                  const e4 = `https://${s2}/stream`;
                  d2 = await fetch(e4, { method: o2, headers: { Authorization: `Bearer ${t3}`, accept: "application/json", "Content-Type": "application/json" }, body: JSON.stringify({ session_id: `${n3}` }) });
                } else {
                  const e4 = `https://${s2}/logout?session_id=${n3}&server=${i3}`;
                  d2 = await fetch(e4, { method: o2, headers: { Authorization: `Bearer ${t3}` } });
                }
                if (200 !== (null == d2 ? void 0 : d2.status)) {
                  let t4 = null, i4 = null, n4 = null;
                  try {
                    t4 = await d2.setHeader("Strict-Transport-Security", "max-age=63072000; includeSubDomains").json(), n4 = t4.message, i4 = `${d2.status}: ${t4}`;
                  } catch (e4) {
                    i4 = `${d2.status}: ${d2.statusText} ${d2.url}`;
                  }
                  return r.Log.e(c, `Session termination failed due to '${n4}'`), { action: a.eAction.terminate, status: a.eStatus.error, info: i4 };
                }
              }
              return { action: a.eAction.terminate, status: a.eStatus.success, info: "Session has terminated" };
            }
            return { action: a.eAction.terminate, status: a.eStatus.canceled, info: "Termination has been cancelled" };
          }
        };
      }, 704: (e2, t2, i2) => {
        "use strict";
        Object.defineProperty(t2, "__esModule", { value: true }), t2.StreamEventConverter = t2.eStatus = t2.eAction = void 0;
        const n2 = i2(271);
        var s, r, o;
        !function(e3) {
          e3.unknown = "unknown", e3.active = "active", e3.configure = "configure", e3.connect = "connect", e3.get = "get", e3.start = "start", e3.stop = "stop", e3.stream = "stream", e3.terminate = "terminate", e3.update = "update", e3.message = "message", e3.authUser = "authUser";
        }(s = t2.eAction || (t2.eAction = {})), function(e3) {
          e3.unknown = "unknown", e3.inProgress = "inProgress", e3.success = "success", e3.canceled = "canceled", e3.error = "error", e3.warning = "warning", e3.waiting = "waiting";
        }(r = t2.eStatus || (t2.eStatus = {})), function(e3) {
          e3.sessionProgressUpdateEvent = "SessionProgressUpdateEvent", e3.streamingEvent = "StreamingEvent", e3.streamUpdateEvent = "StreamUpdateEvent", e3.startSessionResultEvent = "StartSessionResultEvent", e3.streamingTerminatedEvent = "StreamingTerminatedEvent", e3.activeSessionResultEvent = "ActiveSessionResultEvent", e3.getSessionResult = "GetSessionResult";
        }(o || (o = {}));
        class a {
          static convert(e3, t3) {
            return t3 === o.sessionProgressUpdateEvent ? a.fromSessionProgressUpdateEvent(e3) : t3 === o.activeSessionResultEvent ? a.fromActiveSessionResultEvent(e3) : t3 === o.streamingEvent ? a.fromStreamingEvent(e3) : t3 === o.streamUpdateEvent ? a.fromStreamUpdateEvent(e3) : t3 === o.getSessionResult ? a.fromGetSessionResult(e3) : t3 === o.streamingTerminatedEvent ? a.fromStreamingTerminatedEvent(e3) : t3 === o.startSessionResultEvent ? a.fromStartSessionResultEvent(e3) : { action: s.unknown, status: r.unknown, info: "An unknown event has occured." };
          }
          static fromSessionProgressUpdateEvent(e3) {
            const t3 = e3.state === n2.SessionProgressState.STARTING_STREAMER ? s.start : e3.state === n2.SessionProgressState.CONFIGURING ? s.configure : e3.state === n2.SessionProgressState.CONNECTING ? s.connect : s.unknown;
            return { action: t3, status: r.inProgress, info: `${t3}ing`, sessionId: e3.sessionId, subSessionId: e3.subSessionId, queuePosition: e3.queuePosition, eta: e3.eta };
          }
          static fromStartSessionResultEvent(e3) {
            var t3;
            return { action: s.start, status: e3.error ? r.error : r.success, info: (null === (t3 = null == e3 ? void 0 : e3.error) || void 0 === t3 ? void 0 : t3.description) || "", sessionId: e3.sessionId, subSessionId: e3.subSessionId };
          }
          static fromStreamingEvent(e3) {
            return { action: s.stream, status: r.unknown, info: "streaming" };
          }
          static fromStreamUpdateEvent(e3) {
            return { action: s.update, status: r.unknown, info: "stat-update", stats: { codec: e3.codec, fps: e3.fps, rtd: e3.rtd, avgDecodeTime: e3.avgDecodeTime, frameLoss: e3.frameLoss, packetLoss: e3.packetLoss, totalBandwidth: e3.totalBandwidth, utilizedBandwidth: e3.utilizedBandwidth, streamingResolutionHeight: e3.streamingResolution.height, streamingResolutionWidth: e3.streamingResolution.width } };
          }
          static fromStreamingTerminatedEvent(e3) {
            return { action: s.terminate, status: r.unknown, info: "terminating", sessionId: e3.sessionId, subSessionId: e3.subSessionId };
          }
          static fromActiveSessionResultEvent(e3) {
            return { action: s.active, status: r.unknown, info: "active" };
          }
          static fromGetSessionResult(e3) {
            return { action: s.get, status: r.unknown, info: "streaming", sessionId: e3.sessionId, subSessionId: e3.subSessionId };
          }
        }
        t2.StreamEventConverter = a;
      }, 947: (e2, t2, i2) => {
        "use strict";
        Object.defineProperty(t2, "__esModule", { value: true }), t2.DummyAuth = void 0;
        const n2 = i2(271);
        t2.DummyAuth = class {
          setDataForLoginType(e3) {
            console.log("initializing dummy auth");
          }
          getLoginUrl() {
            return "error";
          }
          getUserName() {
            return "Local";
          }
          getUserId() {
            return "Local";
          }
          getExternalUserId() {
            return "Local";
          }
          getDeviceId() {
            return "Local";
          }
          getIdpId() {
            return "Local";
          }
          checkTokenValidity() {
            return Promise.resolve();
          }
          respondToRedirect(e3) {
            return Promise.resolve();
          }
          getTokenCallback() {
            return () => Promise.resolve("dummy");
          }
          getAuthInfo() {
            return Promise.resolve({ type: n2.AuthType.JWT_GFN, token: "dummy" });
          }
          logout() {
            console.log("logging out of dummy auth");
          }
          startOffDeviceLogin() {
            return Promise.resolve({ verification_uri: "", user_code: "", device_code: "", expires_in: 0, interval: 0 });
          }
          pollOffDeviceLogin(e3) {
            return Promise.resolve();
          }
        };
      }, 473: (e2, t2, i2) => {
        "use strict";
        Object.defineProperty(t2, "__esModule", { value: true }), t2.Log = t2.LogBuffer = void 0;
        const n2 = i2(271);
        class s {
          constructor(e3, t3) {
            this.encoder = new TextEncoder(), this.logIndex = 0, this.full = false, this.buffer = new Uint8Array(e3 + s.FULL_MESSAGE.length), this.maxLength = e3, this.logfile = t3;
          }
          clear() {
            this.encoder = new TextEncoder(), this.logIndex = 0, this.full = false;
          }
          log(e3) {
            if (this.full) return;
            let t3 = this.encoder.encode(e3 + "\n");
            this.logIndex + t3.byteLength > this.maxLength && (this.full = true, t3 = this.encoder.encode(s.FULL_MESSAGE)), this.buffer.set(t3, this.logIndex), this.logIndex += t3.byteLength;
          }
          download() {
            const e3 = document.createElement("a");
            e3.style.display = "none";
            const t3 = new Blob([new DataView(this.buffer.buffer, 0, this.logIndex)], { type: "text/plain" }), i3 = URL.createObjectURL(t3);
            e3.href = i3, this.logfile ? e3.download = this.logfile : e3.download = `omniverse-streaming-${(/* @__PURE__ */ new Date()).toISOString()}.log`, document.body.appendChild(e3), e3.click(), URL.revokeObjectURL(i3), document.body.removeChild(e3);
          }
          setIds(e3, t3) {
            this.sessionId = e3, this.subSessionId = t3;
          }
        }
        t2.LogBuffer = s, s.FULL_MESSAGE = "Log is full\n", t2.Log = new n2.LogImpl("ows", { enable: true, enableConsoleLogging: true });
      }, 498: (e2, t2, i2) => {
        "use strict";
        Object.defineProperty(t2, "__esModule", { value: true }), t2.RagnarokApp = void 0;
        const n2 = i2(271), s = i2(473), r = i2(593), o = i2(704), a = "client";
        t2.RagnarokApp = class {
          constructor({ maxSessionStartRetry: e3, platformDetails: t3, videoElementId: i3, audioElementId: n3, messageElementId: r2, urlLocation: o2, authProvider: d, logBuffer: c, onSessionStartResult: l, onProgressUpdate: u, onStreamStopped: h, onActiveSessionResult: p, onStreamingEvent: f, onGetSessionResult: v, onISSOUpdate: m, onCustomEvent: g, useTelemetry: A = false, nativeTouchEvents: S = false, connectivityTimeout: b = 2e3 }) {
            this.tracksMap = /* @__PURE__ */ new Map(), this.totalTracks = 0, this.hasPlatformBeenSimulated = false, this.hasAppLaunchBeenSimulated = false, this.micEnabled = false, this.sessionStartRetryLeft = 0, this._hasFocus = false, o2 = o2 || location, this.sessionStartParams = {}, this.sessionId = "", this.sessionsToDelete = 0, this.sessionStartRetryLeft = e3, this.videoElement = document.getElementById(i3), this.audioElement = document.getElementById(n3), this.messageElement = document.getElementById(r2), this.logBuffer = c, this.authProvider = d, this.useTelemetry = A, this.nativeTouchEvents = S, this.connectivityTimeout = b, this.errorMap = /* @__PURE__ */ new Map(), this.buildErrorMessageMap(), this.platformDetails = t3, s.Log.i(a, `Platform details: ${this.platformDetails}`), this.instantiateGridApp(), this.setupHTMLElements(), this.queryParams = new URLSearchParams(o2.search), this._onProgressUpdate = u, this._onSessionStartResult = l, this._onStreamStopped = h, this._onActiveSessionResult = p, this._onStreamingEvent = f, this._onGetSessionResult = v, this._onISSOUpdate = m, this._onCustomEvent = g;
          }
          setupHTMLElements() {
            this.audioElement && (this.audioElement.muted = true), this.videoElement.muted = true, this.videoElement.playsInline = true, this.videoElement.autoplay = true, this.videoElement.tabIndex = -1, this.videoElement.addEventListener("contextmenu", function(e3) {
              e3.preventDefault();
            }), this.videoElement.addEventListener("keydown", this.keyUpDownEventHandler.bind(this)), this.videoElement.addEventListener("keyup", this.keyUpDownEventHandler.bind(this)), document.addEventListener("focusin", this.focusinEventHandler.bind(this)), document.addEventListener("focusout", this.focusoutEventHandler.bind(this)), this.videoElement.parentElement.addEventListener("click", this.videoElementClickedEventHandler.bind(this)), this._hasFocus = -1 === this.videoElement.parentElement.tabIndex, console.log(`Viewport has focus: ${this._hasFocus}`);
          }
          videoElementClickedEventHandler(e3) {
            this.videoElement.parentElement.focus();
          }
          focusoutEventHandler(e3) {
            e3.relatedTarget || true === this._hasFocus || (console.log("Viewport getting focus"), this._hasFocus = true, this.tracksMap.size > 0 && this.gridApp.toggleUserInput(true, n2.InputType.All));
          }
          focusinEventHandler(e3) {
            document.activeElement === this.videoElement.parentElement ? true !== this._hasFocus && (console.log("Viewport getting focus"), this._hasFocus = true, this.tracksMap.size > 0 && this.gridApp.toggleUserInput(true, n2.InputType.All)) : true === this._hasFocus && (console.log("Viewport loosing focus"), this._hasFocus = false, this.tracksMap.size > 0 && this.gridApp.toggleUserInput(false, n2.InputType.Keyboard | n2.InputType.Gamepad | n2.InputType.Touch));
          }
          keyUpDownEventHandler(e3) {
            73 == e3.keyCode && e3.ctrlKey && e3.shiftKey || 67 == e3.keyCode && e3.shiftKey && e3.metaKey || 68 == e3.keyCode && e3.ctrlKey && e3.shiftKey || "Tab" == e3.code && e3.altKey || "ZoomToggle" == e3.code || "SelectTask" == e3.code || "BrightnessDown" == e3.code || "BrightnessUp" == e3.code || "AudioVolumeMute" == e3.code || "AudioVolumeDown" == e3.code || "AudioVolumeUp" == e3.code || e3.keyCode >= 48 && e3.keyCode <= 57 || "Backspace" == e3.code || e3.preventDefault(), 86 == e3.keyCode && e3.ctrlKey && this.pasteClipboardText();
          }
          pasteClipboardText() {
            navigator.clipboard && window.isSecureContext ? navigator.clipboard.readText().then((e3) => {
              e3 && (s.Log.i(a, "Sent clipboard text to the server."), this.gridApp.sendTextInput((0, r.StringToUtf8)(e3)));
            }).catch((e3) => {
              s.Log.e(a, "Failed to read clipboard contents: " + e3);
            }) : s.Log.i(a, "Cannot read from clipboard because in insecure context.");
          }
          copyTextToClipboard(e3) {
            navigator.clipboard && window.isSecureContext ? navigator.clipboard.writeText(e3).then(() => {
              s.Log.i(a, "Copied clipboard text from the server: " + e3);
            }).catch((e4) => {
              s.Log.e(a, "Failed to write clipboard contents: " + e4);
            }) : s.Log.i(a, "Cannot write to clipboard because in insecure context.");
          }
          getQueryParam(e3) {
            return this.queryParams.get(e3);
          }
          onLogEvent(e3) {
            if (this.logBuffer) "DEBUG" !== e3.logLevel && this.logBuffer.log(`${e3.timeStamp} ${e3.logLevel} ${e3.logModule}/${e3.logtag} ${e3.logstr}`);
            else switch (e3.logLevel) {
              case "INFO":
                console.log(`${e3.timeStamp} ${e3.logLevel} ${e3.logModule}/${e3.logtag} ${e3.logstr}`);
                break;
              case "WARN":
                console.warn(`${e3.timeStamp} ${e3.logLevel} ${e3.logModule}/${e3.logtag} ${e3.logstr}`);
                break;
              case "DEBUG":
                console.debug(`${e3.timeStamp} ${e3.logLevel} ${e3.logModule}/${e3.logtag} ${e3.logstr}`);
                break;
              case "ERROR":
                console.error(`${e3.timeStamp} ${e3.logLevel} ${e3.logModule}/${e3.logtag} ${e3.logstr}`);
            }
          }
          updateEventDataElements() {
            var e3;
            null === (e3 = this.gridApp) || void 0 === e3 || e3.updateEventDataElements({ commonData: { clientId: "78589530426925203", clientVer: "2.0.45.34", clientVariant: "Release", eventSchemaVer: "23.0", eventSysVer: "0.12.2", deviceId: this.authProvider.getDeviceId(), userId: this.authProvider.getUserId(), externalUserId: this.authProvider.getExternalUserId(), idpId: this.authProvider.getIdpId(), integrationId: "undefined", sessionId: "92774af7-fbc1-488f-a090-ba49cfd13da2", deviceOS: this.getMappedDeviceOS(this.platformDetails.os), deviceOSVersion: this.platformDetails.osVer, deviceType: this.getMappedDeviceType(this.platformDetails.deviceType), deviceMake: "APPLE", deviceModel: "undefined", clientType: "Browser", browserType: this.getMappedBrowserName(this.platformDetails.browser), platform: "Web", eventProtocol: "1.4", deviceGdprFuncOptIn: "Full", deviceGdprTechOptIn: "None", deviceGdprBehOptIn: "None", gdprFuncOptIn: "Full", gdprTechOptIn: "Full", gdprBehOptIn: "Full" }, experiments: [{ id: "6376d3bf-3f62-419d-989c-2955c25f2b4e", group: "ENABLE" }, { id: "feb30a68-ee9a-44a0-a717-da2d28c81e97", group: "ENABLE" }, { id: "ea128779-32c7-45c1-94c8-c9374d64219d", group: "ENABLE" }, { id: "ac00061b-eb8d-4d6c-978a-f3ac96f8e91a", group: "ENABLE" }, { id: "21f7e7af-b5ae-4c76-b269-3cc4351671d2", group: "ENABLE" }, { id: "b205ded0-6c08-4436-b818-f0bde4633f08", group: "ENABLE" }, { id: "d639ef8f-c6c5-4931-8e75-451e9e075c62", group: "ENABLE" }, { id: "cdce276d-d611-4ef9-ba6f-a90c3e7040d4", group: "ENABLE" }, { id: "4c57b739-c860-4c5e-b3e4-9d89ff91b561", group: "ENABLE" }, { id: "86bf4cf1-b717-4f72-8414-0f40d6a32656", group: "ENABLE" }], config: { server: "https://events.gfestage.nvidia.com", version: "v1.0" }, telemetryEventIds: { streamingProfileGuid: "testClientStreamingProfileGuid", systemInfoGuid: "testClientSystemInfoGuid" } });
          }
          getMappedBrowserName(e3) {
            switch (e3) {
              case n2.BrowserName.CHROME:
                return "Chrome";
              case n2.BrowserName.SAFARI:
                return "Safari";
              case n2.BrowserName.YANDEX:
                return "Yandex";
              case n2.BrowserName.EDGE:
                return "Edge";
              case n2.BrowserName.EDGE_LEGACY:
                return "Edge_legacy";
              case n2.BrowserName.FIREFOX:
                return "Firefox";
              case n2.BrowserName.SAMSUNG:
                return "Samsung";
              case n2.BrowserName.CHROMIUM:
                return "Chromium";
              case n2.BrowserName.OPERA:
                return "Opera";
              case n2.BrowserName.BRAVE:
                return "Brave";
              case n2.BrowserName.SILK:
                return "Silk";
              case n2.BrowserName.UNKNOWN:
              case n2.BrowserName.REACT:
              default:
                return "undefined";
            }
          }
          getMappedDeviceType(e3) {
            let t3 = "undefined";
            return e3 === n2.DeviceType.CONSOLE ? t3 = "Console" : e3 === n2.DeviceType.TABLET ? t3 = "Tablet" : e3 === n2.DeviceType.PHONE ? t3 = "Phone" : e3 === n2.DeviceType.TV ? t3 = "TV" : e3 === n2.DeviceType.LAPTOP ? t3 = "Laptop" : e3 === n2.DeviceType.DESKTOP && (t3 = "Desktop"), t3;
          }
          getMappedDeviceOS(e3) {
            switch (e3.toLowerCase()) {
              case "windows":
                return "Windows";
              case "macosx":
              case "macos":
                return "MacOS";
              case "chromeos":
              case "chrome os":
                return "ChromeOS";
              case "linux":
                return "Linux";
              case "ios":
                return "iOS";
              case "ipados":
                return "iPadOS";
              case "tizen":
                return "Tizen";
              case "webos":
                return "WebOS";
              case "xbox":
                return "Xbox";
              default:
                return "undefined";
            }
          }
          setMessageElementValue(e3, t3 = false) {
            this.messageElement.textContent = e3;
          }
          instantiateGridApp() {
            s.Log.i(a, "Instantiating grid app."), this.gridApp = new n2.GridApp(this.platformDetails), this.gridApp.addListener(n2.EVENTS.SESSION_START_RESULT, this.onSessionStartResult.bind(this)), this.gridApp.addListener(n2.EVENTS.SESSION_STOP_RESULT, this.onSessionStopResult.bind(this)), this.gridApp.addListener(n2.EVENTS.ACTIVE_SESSIONS_RESULT, this.onActiveSessionResult.bind(this)), this.gridApp.addListener(n2.EVENTS.PROGRESS_UPDATE, this.onProgressUpdate.bind(this)), this.gridApp.addListener(n2.EVENTS.STREAM_STOPPED, this.onStreamStopped.bind(this)), this.gridApp.addListener(n2.EVENTS.STREAMING_EVENT, this.onStreamingEvent.bind(this)), this.gridApp.addListener(n2.EVENTS.GET_SESSION_RESULT, this.onGetSessionResult.bind(this)), this.gridApp.addListener(n2.EVENTS.CUSTOM_MESSAGE, this.onCustomMessage.bind(this)), this.gridApp.addListener(n2.EVENTS.STREAM_STATS_UPDATE, this.onISSOUpdate.bind(this)), this.gridApp.addListener(n2.EVENTS.LOG_EVENT, this.onLogEvent.bind(this));
          }
          buildErrorMessageMap() {
            this.errorMap.set(n2.RErrorCode.AuthProviderError, "Error happened during request to auth provider"), this.errorMap.set(n2.RErrorCode.NoNetwork, "No internet connection."), this.errorMap.set(n2.RErrorCode.NetworkError, "A network error occurred."), this.errorMap.set(n2.RErrorCode.GetActiveSessionServerError, "Error occurred due to GetActiveSessionServerError."), this.errorMap.set(n2.RErrorCode.ExceptionHappened, "Unexpected exception happened."), this.errorMap.set(n2.RErrorCode.AuthTokenNotUpdated, "Error occurred due to AuthTokenNotUpdated."), this.errorMap.set(n2.RErrorCode.SessionFinishedState, "Unexpected session state while polling."), this.errorMap.set(n2.RErrorCode.ResponseParseFailure, "Failed to parse server response."), this.errorMap.set(n2.RErrorCode.StreamerVideoPlayError, "Video play failure."), this.errorMap.set(n2.RErrorCode.GridAppNotInitialized, "Grid app instance was not initialized."), this.errorMap.set(n2.RErrorCode.SessionLimitExceeded, "Session Limit Exceeded."), this.errorMap.set(n2.RErrorCode.StreamErrorGeneric, "Some generic error happened in streamer."), this.errorMap.set(n2.RErrorCode.StreamerSignInFailure, "Error happened during signin request to signaling server."), this.errorMap.set(n2.RErrorCode.StreamerHangingGetFailure, "Error happened in hanging get request of peer connection."), this.errorMap.set(n2.RErrorCode.StreamerIceConnectionFailed, "Could not find valid ice candidate pair."), this.errorMap.set(n2.RErrorCode.StreamerGetRemotePeerTimedOut, "Streaming stopped as there is no remote peer."), this.errorMap.set(n2.RErrorCode.StreamInputChannelError, "Streaming stopped due to input channel error."), this.errorMap.set(n2.RErrorCode.StreamCursorChannelError, "Streaming stopped due to cursor channel error."), this.errorMap.set(n2.RErrorCode.StreamControlChannelError, "Streaming stopped due to control channel error."), this.errorMap.set(n2.RErrorCode.StreamerIceReConnectionFailed, "Reconnect attempt failed after network problem or remote peer not alive."), this.errorMap.set(n2.RErrorCode.StreamerNoVideoPacketsReceivedEver, "Streaming stopped as NoVideoPacketsReceivedEver."), this.errorMap.set(n2.RErrorCode.StreamerNoVideoFramesLossyNetwork, "Streaming stopped as NoVideoFramesLossyNetwork."), this.errorMap.set(n2.RErrorCode.StreamDisconnectedFromServer, "Stream Disconnected from server, unknown reason."), this.errorMap.set(n2.RErrorCode.ServerDisconnectedNoResponse, "Stream Disconnected from server, NoResponce."), this.errorMap.set(n2.RErrorCode.ServerDisconnectedRemoteInputError, "Stream Disconnected from server, RemoteInputError."), this.errorMap.set(n2.RErrorCode.ServerDisconnectedFrameGrabFailed, "Stream Disconnected from server, FrameGrabFailed."), this.errorMap.set(n2.RErrorCode.ServerDisconnectedConfigUnAvailable, "Stream Disconnected from server, ConfigUnAvailable."), this.errorMap.set(n2.RErrorCode.ServerDisconnectedInvalidCommand, "Stream Disconnected from server, InvalidCommand."), this.errorMap.set(n2.RErrorCode.ServerDisconnectedInvalidMouseState, "Stream Disconnected from server, InvalidMouseState."), this.errorMap.set(n2.RErrorCode.ServerDisconnectedNetworkError, "Stream Disconnected from server, NetworkError."), this.errorMap.set(n2.RErrorCode.ServerDisconnectedGameLaunchFailed, "Stream Disconnected from server, GameLaunchFailed."), this.errorMap.set(n2.RErrorCode.ServerDisconnectedVideoFirstFrameSendFailed, "Stream Disconnected from server, VideoFirstFrameSendFailed."), this.errorMap.set(n2.RErrorCode.ServerDisconnectedVideoNextFrameSendFailed, "Stream Disconnected from server, VideoNextFrameSendFailed."), this.errorMap.set(n2.RErrorCode.ServerDisconnectedFrameGrabTimedOut, "Stream Disconnected from server, FrameGrabTimedOut."), this.errorMap.set(n2.RErrorCode.ServerDisconnectedFrameEncodeTimedOut, "Stream Disconnected from server, FrameEncodeTimedOut."), this.errorMap.set(n2.RErrorCode.ServerDisconnectedFrameSendTimedOut, "Stream Disconnected from server, FrameSendTimedOut."), this.errorMap.set(n2.RErrorCode.ServerDisconnectedIntended, "Stream Disconnected from server as user quit the game."), this.errorMap.set(n2.RErrorCode.ServerDisconnectedUserLoggedInDifferentAccount, "Stream Disconnected from server, userLoggedinDifferenAccount."), this.errorMap.set(n2.RErrorCode.ServerDisconnectedWindowedMode, "Stream Disconnected from server, WindowedMode."), this.errorMap.set(n2.RErrorCode.ServerDisconnectedUserIdle, "Stream Disconnected from server, UserIdle."), this.errorMap.set(n2.RErrorCode.ServerDisconnectedUnAuthorizedProcessDetected, "Stream Disconnected from server, UnAuthorizedProcessDetected."), this.errorMap.set(n2.RErrorCode.ServerDisconnectedMaliciousProcessDetected, "Stream Disconnected from server, MaliciousProcessDetected."), this.errorMap.set(n2.RErrorCode.ServerDisconnectedUnKnownProcessDetected, "Stream Disconnected from server, UnKnownProcessDetected."), this.errorMap.set(n2.RErrorCode.ServerDisconnectedMinerProcessDetected, "Stream Disconnected from server, MinerProcessDetected."), this.errorMap.set(n2.RErrorCode.ServerDisconnectedStreamingUnsupported, "Stream Disconnected from server, StreamingUnsupported."), this.errorMap.set(n2.RErrorCode.ServerDisconnectedAnotherClient, "Stream Disconnected from server, AnotherClient."), this.errorMap.set(n2.RErrorCode.ServerDisconnectedUnknownFromPm, "Stream Disconnected from server, UnknownFromPm."), this.errorMap.set(n2.RErrorCode.ServerDisconnectedUserEntitledMinutesExceeded, "Stream Disconnected from server, UserEntitledMinutesExceeded."), this.errorMap.set(n2.RErrorCode.ServerDisconnectedClientReconnectTimeLimitExceeded, "Stream Disconnected from server, ClientReconnectTimeLimitExceeded."), this.errorMap.set(n2.RErrorCode.ServerDisconnectedOperatorCommandedTermination, "Stream Disconnected from server, OperatorCommandedTermination."), this.errorMap.set(n2.RErrorCode.ServerDisconnectedConcurrentSessionLimitExceeded, "Stream Disconnected from server, ConcurrentSessionLimitExceeded."), this.errorMap.set(n2.RErrorCode.ServerDisconnectedMaxSessionTimeLimitExceeded, "Stream Disconnected from server, MaxSessionTimeLimitExceeded."), this.errorMap.set(n2.RErrorCode.ServerDisconnectedBifrostInitiatedSessionPause, "Stream Disconnected from server, BifrostInitiatedSessionPause."), this.errorMap.set(n2.RErrorCode.ServerDisconnectedSystemCommandTermination, "Stream Disconnected from server, SystemCommandTermination."), this.errorMap.set(n2.RErrorCode.ServerDisconnectedMultipleLogin, "Stream Disconnected from server, MultipleLogin."), this.errorMap.set(n2.RErrorCode.ServerInternalError, "Session setup failed on server."), this.errorMap.set(n2.RErrorCode.RequestLimitExceeded, "You've tried to play too many games in a short period of time. Please wait a few minutes and try again."), this.errorMap.set(n2.RErrorCode.EntitlementFailure, "You are not entitled to play this game. Please check you entitlement."), this.errorMap.set(n2.RErrorCode.EntitlementFailure, "One of the micro services on Zone failed. Please check telemetry for more details."), this.errorMap.set(n2.RErrorCode.AppPatching, "Game is currently in patching state, please try again later."), this.errorMap.set(n2.RErrorCode.GameNotFound, "Requested game is not available in the zone. Please try another zone."), this.errorMap.set(n2.RErrorCode.AppMaintenanceStatus, "Requested game is under maintenance."), this.errorMap.set(n2.RErrorCode.RequiredSeatInstanceTypeNotSupported, "Required instance type for the game is not available in current zone. Please try different zone."), this.errorMap.set(n2.RErrorCode.ServerSessionQueueLengthExceeded, "We’ve reached our limit for the number of gamers who can wait for the next available rig. Please try again later"), this.errorMap.set(n2.RErrorCode.SessionTerminatedByAnotherClient, "Session setup request was terminated by another client."), this.errorMap.set(n2.RErrorCode.ServerDisconnectedGameNotOwnedByUser, "Your session ended as you do not own the requested game."), this.errorMap.set(n2.RErrorCode.SystemSleepDuringStreaming, "Your session ended as device went to sleep during streaming"), this.errorMap.set(n2.RErrorCode.SessionInQueueAbandoned, "Session abandoned during polling"), this.errorMap.set(n2.RErrorCode.NoInternetDuringSessionSetup, "Cannot connect to server."), this.errorMap.set(n2.RErrorCode.NoInternetDuringStreaming, "Cannot connect to server.");
          }
          getDisplayableErrorMessage(e3) {
            return this.errorMap.has(e3) ? this.errorMap.get(e3) : `No displayable error message found for error code ${e3}`;
          }
          handleActiveSessions(e3) {
            for (let t3 = 0; t3 < e3.length; t3++) if (this.sessionStartParams.appId == e3[t3].appId && (e3[t3].state == n2.SessionState.READY_FOR_CONNECTION || e3[t3].state == n2.SessionState.STREAMING || e3[t3].state == n2.SessionState.PAUSED)) return s.Log.i(a, "Existing session found with the appid " + e3[t3].appId + " and SessionState " + e3[t3].state), this.setMessageElementValue("Resuming previous session..."), this.sessionStartParams.appLaunchMode == n2.AppLaunchMode.TouchFriendly && e3[t3].appLaunchMode != n2.AppLaunchMode.TouchFriendly && (this.sessionStartParams.appLaunchMode = n2.AppLaunchMode.Default, s.Log.w(a, "session " + e3[t3].sessionId + " was not launched in touch friendly mode, ignoring touch input mode.")), void this.gridApp.resumeSession(this.sessionStartParams, e3[t3].sessionId);
            this.setMessageElementValue("Stopping existing sessions"), this.sessionsToDelete = e3.length;
            for (let t3 = 0; t3 < e3.length; t3++) this.gridApp.stopSession(e3[t3].sessionId);
          }
          resetTrackInfo() {
            this.totalTracks = 0, this.tracksMap.clear();
          }
          playTrack(e3, t3) {
            let i3 = t3.play();
            const r2 = (e4) => {
              for (const i4 of t3.srcObject.getTracks()) this.tracksMap.set(i4.id, e4);
            };
            if (i3) {
              let o2 = this._hasFocus;
              i3.then(() => {
                s.Log.i(a, `${e3} play succeeded.`), t3 instanceof HTMLVideoElement && (o2 ? this.gridApp.toggleUserInput(true, n2.InputType.All) : this.gridApp.toggleUserInput(true, n2.InputType.Mouse)), r2(true);
              }).catch((t4) => {
                s.Log.e(a, `${e3} play error: ${null == t4 ? void 0 : t4.name} , ${null == t4 ? void 0 : t4.message}`), r2(false), this.gridApp.stopSession(this.sessionId), this.setMessageElementValue("Play failed", true);
              });
            } else t3 instanceof HTMLVideoElement && (this._hasFocus ? this.gridApp.toggleUserInput(true, n2.InputType.All) : this.gridApp.toggleUserInput(true, n2.InputType.Mouse)), r2(true);
          }
          playMedia() {
            for (let e3 of this.startResult.streams) for (let t3 of e3.tracks) t3.kind === n2.TrackType.VIDEO && this.videoElement.srcObject ? this.playTrack(t3.trackId, this.videoElement) : t3.kind === n2.TrackType.AUDIO && this.audioElement.srcObject && this.playTrack(t3.trackId, this.audioElement);
          }
          onSessionStartResult(e3) {
            if (this.lastSessionId = e3.sessionId, this.lastSubSessionId = e3.subSessionId, e3.error) if (e3.error.code == n2.RErrorCode.SessionLimitExceeded) e3.sessionList ? (s.Log.i(a, "Session limit reached. Number of active sessions: " + e3.sessionList.length), e3.sessionList.length && this.handleActiveSessions(e3.sessionList)) : (this.setMessageElementValue("Checking for existing sessions.."), this.gridApp.getActiveSessions()), this.handleLogs(e3.sessionId, e3.subSessionId);
            else if (e3.error.code == n2.RErrorCode.SessionLimitPerDeviceReached) this.setMessageElementValue("There is an active session for this device belonging to another user. Please try again after sometime"), this.handleLogs(e3.sessionId, e3.subSessionId);
            else if (e3.error.code == n2.RErrorCode.SessionSetupCancelled || e3.error.code == n2.RErrorCode.SessionSetupCancelledDuringQueuing) this.setMessageElementValue("Session setup was cancelled, please reconfigure your session.", true);
            else {
              let t3 = this.getDisplayableErrorMessage(e3.error.code);
              if (this.sessionStartRetryLeft > 0) {
                let e4 = `
                        Connection attempt failed with error message '${t3}'. 
                        Number of retry left: ${this.sessionStartRetryLeft}. 
                        Retry in 5 seconds...`;
                s.Log.e(a, e4), this.setMessageElementValue("Connection in progress..."), this.sessionStartRetryLeft -= 1, window.setTimeout(() => this.startButtonClick(), 5e3);
              } else this.setMessageElementValue(t3 + " " + (0, r.GetHexString)(e3.error.code), true);
              this.handleLogs(e3.sessionId, e3.subSessionId);
            }
            else {
              s.Log.i(a, "client: successfully set up session: " + e3.sessionId), s.Log.i(a, "Should enable mic: " + this.getGridApp().shouldDefaultEnableMic()), this.sessionId = e3.sessionId, this.startResult = e3, s.Log.i(a, "streams: " + JSON.stringify(this.startResult.streams));
              for (let e4 of this.startResult.streams) this.totalTracks += e4.tracks.length;
              this.playMedia();
            }
            this._onSessionStartResult && this._onSessionStartResult(e3, "StartSessionResultEvent");
          }
          handleLogs(e3, t3) {
            this.logBuffer.setIds(e3, t3);
          }
          onSessionStopResult(e3) {
            this.lastSessionId = e3.sessionId, this.lastSubSessionId = e3.subSessionId, this.sessionId == e3.sessionId ? (this.sessionId = "", e3.framesDecoded > 0 ? s.Log.i(a, "Session stop result is normal") : this.setMessageElementValue("Zero frame decoded.", true)) : this.sessionsToDelete > 0 && (this.sessionsToDelete--, 0 === this.sessionsToDelete && this.begin()), this.handleLogs(e3.sessionId, e3.subSessionId);
          }
          onProgressUpdate(e3) {
            s.Log.i(a, JSON.stringify(e3));
            let t3 = "Setting up your session. state: " + e3.state;
            e3.state == n2.SessionProgressState.STARTING_STREAMER ? t3 = "Starting streamer..." : e3.state == n2.SessionProgressState.CONNECTING && (t3 = "Connecting to streamer..."), e3.queuePosition && (t3 += ". QueuePosition: " + e3.queuePosition), e3.eta > 1e3 && (t3 += ". ETA " + Math.round(e3.eta / 1e3) + "seconds"), this._onProgressUpdate && this._onProgressUpdate(e3, "SessionProgressUpdateEvent"), this.setMessageElementValue(t3);
          }
          onStreamStopped(e3) {
            if (this.lastSessionId = e3.sessionId, this.lastSubSessionId = e3.subSessionId, this.resetTrackInfo(), e3.error) {
              let t3 = this.getQueryParam("resume");
              if (e3.error.code == n2.RErrorCode.ServerDisconnectedIntended) this.setMessageElementValue("Server disconnected intended.", true);
              else if (t3 && e3.isResumable) s.Log.i(a, "Resuming after 15 secs"), this.setMessageElementValue("Resuming after 15 secs..."), window.setTimeout(() => this.gridApp.getActiveSessions(), 15e3);
              else {
                let t4 = this.getDisplayableErrorMessage(e3.error.code);
                this.setMessageElementValue(t4 + " " + (0, r.GetHexString)(e3.error.code), true);
              }
            }
            this._onStreamStopped && this._onStreamStopped(e3, "StreamingTerminatedEvent"), this.handleLogs(e3.sessionId, e3.subSessionId);
          }
          onActiveSessionResult(e3) {
            e3.error ? (s.Log.e(a, "ActiveSession request failed. Error: " + e3.error.code.toString(16).toUpperCase()), this.setMessageElementValue("Get Active session failed", true)) : (s.Log.i(a, "ActiveSession request succeeded. Number of active sessions: " + e3.sessionList.length), e3.sessionList.length ? this.handleActiveSessions(e3.sessionList) : this.begin()), this._onActiveSessionResult && this._onActiveSessionResult(e3, "ActiveSessionResultEvent");
          }
          onStreamingEvent(e3) {
            s.Log.i(a, "StreamingEvent event: " + JSON.stringify(e3)), e3.streamingState && e3.streamingState.state === n2.STREAMING_STATE.RECONNECTING && (this.setMessageElementValue("Reconnecting...", true), this._onStreamingEvent && this._onStreamingEvent(e3, "StreamingEvent"));
          }
          onGetSessionResult(e3) {
            e3.error ? (s.Log.e(a, "Cannot resume: " + e3.error.code), this.setMessageElementValue(e3.error.description + ": " + e3.error.code, true)) : (s.Log.i(a, "onGetSessionResult state: " + e3.state), e3.state == n2.SessionState.INITIALIZING || e3.state == n2.SessionState.RESUMING ? window.setTimeout(() => this.gridApp.getSession(e3.sessionId), 1e3) : e3.state == n2.SessionState.READY_FOR_CONNECTION && this.gridApp.resumeSession(this.sessionStartParams, e3.sessionId)), this._onGetSessionResult && this._onGetSessionResult(e3, "GetSessionResult");
          }
          sendCustomMessage(e3) {
            s.Log.i(a, JSON.stringify(e3)), this.gridApp.sendCustomMessage(e3);
          }
          onCustomMessage(e3) {
            "clipboard_set" in e3 ? this.copyTextToClipboard(e3.clipboard_set) : this._onCustomEvent ? (s.Log.i(a, JSON.stringify(e3)), this._onCustomEvent(e3)) : s.Log.i(a, JSON.stringify({ action: o.eAction.message, status: o.eStatus.warning, info: "Stream sent a custom message, but client has not provided an onCustomEvent handler method." }));
          }
          onISSOUpdate(e3) {
            this._onISSOUpdate && this._onISSOUpdate(e3, "StreamUpdateEvent");
          }
          downloadLogs() {
            this.logBuffer.download();
          }
          downloadAudioRecordings() {
            var e3;
            null === (e3 = this.gridApp) || void 0 === e3 || e3.downloadAudio();
          }
          getPlatformOverride(e3, t3, i3, n3, s2) {
            return "clientplatformname=" + e3 + "&clienttype=" + t3 + "&deviceos=" + i3 + "&devicetype=" + n3 + "&clientstreamer=" + s2;
          }
          getPlatformAndAppLaunchOverrides(e3, t3) {
            let i3, s2 = this.queryParams.toString(), r2 = "";
            switch (e3) {
              case 0:
                this.hasPlatformBeenSimulated && this.getPlatformOverride("", "", "", "", "");
                break;
              case 1:
                r2 = this.getPlatformOverride("Windows", n2.ClientType.NATIVE, n2.DeviceOS.WINDOWS, n2.DeviceType.DESKTOP, n2.ClientStreamer.CLASSIC);
                break;
              case 2:
                r2 = this.getPlatformOverride("MacOSX", n2.ClientType.NATIVE, n2.DeviceOS.MACOS, n2.DeviceType.DESKTOP, n2.ClientStreamer.CLASSIC);
                break;
              case 3:
                r2 = this.getPlatformOverride("Linux", n2.ClientType.NATIVE, n2.DeviceOS.ANDROID, n2.DeviceType.TABLET, n2.ClientStreamer.CLASSIC);
                break;
              case 4:
                r2 = this.getPlatformOverride("browser", n2.ClientType.BROWSER, n2.DeviceOS.IOS, n2.DeviceType.PHONE, n2.ClientStreamer.WEBRTC);
                break;
              case 5:
                r2 = this.getPlatformOverride("browser", n2.ClientType.BROWSER, n2.DeviceOS.IPADOS, n2.DeviceType.TABLET, n2.ClientStreamer.WEBRTC);
                break;
              case 6:
                r2 = this.getPlatformOverride("browser", n2.ClientType.BROWSER, n2.DeviceOS.CHROMEOS, n2.DeviceType.DESKTOP, n2.ClientStreamer.WEBRTC);
                break;
              case 7:
                r2 = this.getPlatformOverride("browser", n2.ClientType.BROWSER, n2.DeviceOS.WINDOWS, n2.DeviceType.DESKTOP, n2.ClientStreamer.WEBRTC);
                break;
              case 8:
                r2 = this.getPlatformOverride("browser", n2.ClientType.BROWSER, n2.DeviceOS.MACOS, n2.DeviceType.DESKTOP, n2.ClientStreamer.WEBRTC);
                break;
              case 9:
                r2 = this.getPlatformOverride("browser", n2.ClientType.BROWSER, n2.DeviceOS.LINUX, n2.DeviceType.DESKTOP, n2.ClientStreamer.WEBRTC);
                break;
              case 10:
                r2 = this.getPlatformOverride("browser", n2.ClientType.BROWSER, n2.DeviceOS.WEBOS, n2.DeviceType.TV, n2.ClientStreamer.WEBRTC);
                break;
              case 11:
                r2 = this.getPlatformOverride("browser", n2.ClientType.BROWSER, n2.DeviceOS.TIZEN, n2.DeviceType.TV, n2.ClientStreamer.WEBRTC);
                break;
              case 12:
                r2 = this.getPlatformOverride("browser", n2.ClientType.BROWSER, n2.DeviceOS.XBOX, n2.DeviceType.CONSOLE, n2.ClientStreamer.WEBRTC);
            }
            switch (r2 && (this.hasPlatformBeenSimulated = true, s2 += r2 + "&"), t3) {
              case 0:
                this.hasAppLaunchBeenSimulated && (i3 = n2.AppLaunchMode.Default);
                break;
              case 1:
                i3 = n2.AppLaunchMode.Default;
                break;
              case 2:
                i3 = n2.AppLaunchMode.TouchFriendly;
                break;
              case 3:
                i3 = n2.AppLaunchMode.GamepadFriendly;
            }
            return void 0 !== i3 && (this.hasAppLaunchBeenSimulated = true, s2 += "applaunchmode=" + i3 + "&"), s2.endsWith("&") || (s2 += "&"), s2 + "webrtcstreamer=enable";
          }
          configureGridApp(e3) {
            return new Promise((t3, i3) => {
              this.useTelemetry && this.updateEventDataElements();
              const r2 = { serverAddress: e3, authTokenCallback: this.authProvider.getTokenCallback(), deviceHashId: "", clientShutDownCallback: void 0 };
              let o2;
              switch (this.getQueryParam("cursor")) {
                case "hw":
                  o2 = n2.CursorType.HARDWARE;
                  break;
                case "free":
                  o2 = n2.CursorType.FREE;
                  break;
                case "sw":
                  o2 = n2.CursorType.SOFTWARE;
                default:
                  o2 = n2.CursorType.FREE;
              }
              let d = { cursorType: o2, allowUnconfined: null !== this.getQueryParam("allowunconfined") };
              s.Log.i(a, "initializing gridApp with server: " + r2.serverAddress), this.gridApp.initialize(r2, d) ? this.authProvider.getAuthInfo().then((e4) => {
                this.gridApp.setAuthInfo(e4), t3();
              }).catch(() => {
                i3();
              }) : i3();
            });
          }
          getGridApp() {
            return this.gridApp;
          }
          begin() {
            this.gridApp.startSession(this.sessionStartParams);
          }
          async startButtonClick() {
            let e3 = this.getPlatformAndAppLaunchOverrides(0, 0);
            const t3 = { remoteConfigData: { ragnarok: `{"connectivityCheckTimeout": ${this.connectivityTimeout}, "sleepErrorsStreaming": ["0xC0F2230F"]}` }, gxtOverrideData: JSON.stringify({ params: [{ name: "ragnarok", value: { enableCpm: false } }] }), overrideData: e3 };
            (0, n2.ConfigureRagnarokSettings)(t3);
            let i3 = this.getQueryParam("server");
            try {
              let e4 = this.getQueryParam("resolution").split(":"), t4 = (0, r.ToNumber)(this.getQueryParam("fps"));
              const o2 = "0";
              let d = "en-US";
              this.configureGridApp(i3).then(() => {
                s.Log.i(a, "grid app setup completed");
                const c = this.nativeTouchEvents && (0, r.IsiDevice)(this.platformDetails);
                this.sessionStartParams = { streamParams: [], appLaunchMode: c ? n2.AppLaunchMode.TouchFriendly : n2.AppLaunchMode.Default, keyboardLayout: d, shortName: "Omniverse App Streaming", accountLinked: false };
                let l = parseInt(e4[0]), u = parseInt(e4[1]), h = t4;
                const p = parseInt(o2);
                if (!l || !u) {
                  const e5 = [{ resolution: { width: 3840, height: 2160 }, frameRate: 60 }, { resolution: { width: 3440, height: 1440 }, frameRate: 60 }, { resolution: { width: 2560, height: 1600 }, frameRate: 120 }, { resolution: { width: 2560, height: 1600 }, frameRate: 60 }, { resolution: { width: 2560, height: 1440 }, frameRate: 120 }, { resolution: { width: 2560, height: 1440 }, frameRate: 60 }, { resolution: { width: 1920, height: 1200 }, frameRate: 60 }, { resolution: { width: 1920, height: 1080 }, frameRate: 60 }, { resolution: { width: 1920, height: 1080 }, frameRate: 30 }, { resolution: { width: 1920, height: 1080 }, frameRate: 120 }, { resolution: { width: 1680, height: 1050 }, frameRate: 60 }, { resolution: { width: 1600, height: 900 }, frameRate: 60 }, { resolution: { width: 1280, height: 1024 }, frameRate: 60 }, { resolution: { width: 1440, height: 900 }, frameRate: 60 }, { resolution: { width: 1366, height: 768 }, frameRate: 60 }, { resolution: { width: 1280, height: 800 }, frameRate: 60 }, { resolution: { width: 1280, height: 720 }, frameRate: 60 }, { resolution: { width: 1600, height: 1200 }, frameRate: 60 }, { resolution: { width: 1112, height: 834 }, frameRate: 60 }, { resolution: { width: 1024, height: 768 }, frameRate: 60 }, { resolution: { width: 960, height: 540 }, frameRate: 60 }], t5 = (0, n2.ChooseStreamingSettings)(n2.StreamingProfilePreset.BALANCED, e5, this.platformDetails);
                  l = t5.resolution.width, u = t5.resolution.height, s.Log.i(a, "Recommended stream settings: " + l + "x" + u + "@" + t5.frameRate), s.Log.i(a, "Capable stream settings: " + e5);
                }
                this.sessionStartParams.streamParams.push({ width: l, height: u, fps: h, maxBitrateKbps: p, drc: false, videoTagId: this.videoElement.id, audioTagId: this.audioElement.id });
                const f = this.getQueryParam("signalingserver");
                let v = [];
                if (f) {
                  const e5 = parseInt(this.getQueryParam("signalingport")), t5 = this.getQueryParam("signalingpath"), i4 = (0, r.IsValidIPv4)(f) ? n2.AppLevelProtocol.HTTP : n2.AppLevelProtocol.HTTPS;
                  v.push({ ip: f, port: e5, resourcePath: t5, usage: n2.Usage.SIGNALING, appLevelProtocol: i4, protocol: n2.Protocol.TCP });
                }
                const m = this.getQueryParam("mediaserver");
                if (m) if ((0, r.IsIPv4Address)(m) && !(0, r.IsValidIPv4)(m)) s.Log.e(a, "mediaserver query parameter is not a valid IP. value: " + m);
                else {
                  const e5 = parseInt(this.getQueryParam("mediaport"));
                  v.push({ ip: m, port: e5, usage: n2.Usage.VIDEO, appLevelProtocol: n2.AppLevelProtocol.UNKNOWN, protocol: n2.Protocol.UDP });
                }
                let g = this.getQueryParam("signalingquery");
                if (g && (this.sessionStartParams.signalingUrlQueryParameters = decodeURIComponent(g)), i3) this.sessionStartParams.connectionInfo = void 0, this.sessionStartParams.sessionId = void 0;
                else {
                  if (!v.length) {
                    const e6 = "Signaling server info is required in passthru use case. Please add signalingserver=<> to the query parameters";
                    return void this.setMessageElementValue(e6, true);
                  }
                  this.sessionStartParams.connectionInfo = v;
                  const e5 = this.getQueryParam("sessionid");
                  e5 && (this.sessionStartParams.sessionId = e5);
                }
                this.getQueryParam("accessToken") && (this.sessionStartParams.sessionId += "-Authorization.Bearer-" + this.getQueryParam("accessToken")), s.Log.i(a, "Beginning"), this.begin();
              }).catch((e5) => {
                const t5 = `Something unexpected happened: ${null == e5 ? void 0 : e5.name} ${null == e5 ? void 0 : e5.message}`;
                s.Log.e(a, t5), this.setMessageElementValue(t5, true);
              });
            } catch (e4) {
              s.Log.e(a, "Exception in start button click: " + e4);
            }
          }
          stopButtonClick(e3 = false, t3 = false) {
            this.resetTrackInfo(), this.sessionId && (e3 ? this.gridApp.pauseSession(this.sessionId) : this.gridApp.stopSession(this.sessionId)), this.setMessageElementValue("Session is stopped.");
          }
        };
      }, 593: (e2, t2, i2) => {
        "use strict";
        Object.defineProperty(t2, "__esModule", { value: true }), t2.KeyUpDownEventHandler = t2.StringToUtf8 = t2.ToNumber = t2.IsiDevice = t2.IsiOS = t2.IsTizen = t2.IsWebOS = t2.IsiPadOS = t2.IsXbox = t2.IsValidIPv4 = t2.IsIPv4Address = t2.GetRandNumericString = t2.GetHexString = t2.convertToUnsignedInt = void 0;
        const n2 = i2(271);
        function s(e3) {
          return e3 >>> 0;
        }
        function r(e3) {
          return e3.os === n2.PlatformName.IPADOS;
        }
        function o(e3) {
          return e3.os === n2.PlatformName.IOS;
        }
        t2.convertToUnsignedInt = s, t2.GetHexString = function(e3) {
          return "0x" + ("00000000" + (e3 = s(e3)).toString(16).toUpperCase()).slice(-8);
        }, t2.GetRandNumericString = function(e3) {
          let t3 = 1;
          for (let i4 = 1; i4 < e3; i4++) t3 *= 10;
          let i3 = "" + Math.floor(Math.random() * t3);
          return i3 = i3.padEnd(e3, "0"), i3;
        }, t2.IsIPv4Address = function(e3) {
          const t3 = e3.split(".");
          if (4 !== t3.length) return false;
          for (const e4 of t3) {
            const t4 = parseInt(e4);
            if (isNaN(t4)) return false;
          }
          return true;
        }, t2.IsValidIPv4 = function(e3) {
          const t3 = e3.split(".");
          if (4 !== t3.length) return false;
          for (const e4 of t3) {
            const t4 = parseInt(e4);
            if (isNaN(t4) || t4 < 0 || t4 > 255) return false;
          }
          return true;
        }, t2.IsXbox = function(e3) {
          return e3.os === n2.PlatformName.XBOX;
        }, t2.IsiPadOS = r, t2.IsWebOS = function(e3) {
          return e3.os === n2.PlatformName.WEBOS;
        }, t2.IsTizen = function(e3) {
          return e3.os === n2.PlatformName.TIZEN;
        }, t2.IsiOS = o, t2.IsiDevice = function(e3) {
          return o(e3) || r(e3);
        }, t2.ToNumber = function(e3) {
          if (e3) {
            const t3 = Number.parseInt(e3);
            if (!Number.isNaN(t3)) return t3;
          }
        }, t2.StringToUtf8 = function(e3) {
          let t3 = new TextEncoder().encode(e3), i3 = new ArrayBuffer(t3.byteLength), n3 = new DataView(i3);
          for (let e4 = 0; e4 < t3.byteLength; e4++) n3.setUint8(e4, t3[e4]);
          return i3;
        }, t2.KeyUpDownEventHandler = function(e3) {
          73 == e3.keyCode && e3.ctrlKey && e3.shiftKey || 67 == e3.keyCode && e3.shiftKey && e3.metaKey || 68 == e3.keyCode && e3.ctrlKey && e3.shiftKey || "Tab" == e3.code && e3.altKey || "ZoomToggle" == e3.code || "SelectTask" == e3.code || "BrightnessDown" == e3.code || "BrightnessUp" == e3.code || "AudioVolumeMute" == e3.code || "AudioVolumeDown" == e3.code || "AudioVolumeUp" == e3.code || e3.keyCode >= 48 && e3.keyCode <= 57 || "Backspace" == e3.code || e3.preventDefault();
        };
      } }, t = {};
      function i(n2) {
        var s = t[n2];
        if (void 0 !== s) return s.exports;
        var r = t[n2] = { exports: {} };
        return e[n2].call(r.exports, r, r.exports, i), r.exports;
      }
      i.d = (e2, t2) => {
        for (var n2 in t2) i.o(t2, n2) && !i.o(e2, n2) && Object.defineProperty(e2, n2, { enumerable: true, get: t2[n2] });
      }, i.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (e2) {
          if ("object" == typeof window) return window;
        }
      }(), i.o = (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2), i.r = (e2) => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
      };
      var n = {};
      return (() => {
        "use strict";
        var e2 = n;
        Object.defineProperty(e2, "__esModule", { value: true }), e2.eStatus = e2.eAction = e2.AppStreamer = void 0;
        const t2 = i(52);
        e2.AppStreamer = t2.default;
        const s = i(704);
        Object.defineProperty(e2, "eAction", { enumerable: true, get: function() {
          return s.eAction;
        } }), Object.defineProperty(e2, "eStatus", { enumerable: true, get: function() {
          return s.eStatus;
        } });
      })(), n;
    })());
  }
});
export default require_dist();
/*! Bundled license information:

@nvidia/omniverse-webrtc-streaming-library/dist/index.js:
  (*! For license information please see index.js.LICENSE.txt *)
*/
//# sourceMappingURL=@nvidia_omniverse-webrtc-streaming-library.js.map
