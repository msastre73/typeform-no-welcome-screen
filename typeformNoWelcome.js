window.tf = (function () {
  "use strict";
  var e = {
      6664: function (e, t, n) {
        var o =
            (this && this.__assign) ||
            function () {
              return (o =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, o = arguments.length; n < o; n++)
                    for (var r in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, r) &&
                        (e[r] = t[r]);
                  return e;
                }).apply(this, arguments);
            },
          r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, o) {
                  void 0 === o && (o = n),
                    Object.defineProperty(e, o, {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    });
                }
              : function (e, t, n, o) {
                  void 0 === o && (o = n), (e[o] = t[n]);
                }),
          i =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  });
                }
              : function (e, t) {
                  e.default = t;
                }),
          a =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e)
                for (var n in e)
                  "default" !== n &&
                    Object.prototype.hasOwnProperty.call(e, n) &&
                    r(t, e, n);
              return i(t, e), t;
            };
        Object.defineProperty(t, "__esModule", { value: !0 });
        var u = n(6654),
          c = a(n(1920));
        function d(e) {
          void 0 === e && (e = !1),
            u.initializePopovers(e),
            u.initializePopups(e),
            u.initializeSidetabs(e),
            u.initializeSliders(e),
            u.initializeWidgets(e);
        }
        var s = function () {
          return d(!1);
        };
        (e.exports = o(o({}, c), {
          load: s,
          reload: function () {
            return d(!0);
          },
        })),
          document.addEventListener("DOMContentLoaded", s, !1),
          ("interactive" !== document.readyState &&
            "complete" !== document.readyState) ||
            s();
      },
      8027: function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.FORM_BASE_URL =
            t.POPUP_SIZE =
            t.SLIDER_WIDTH =
            t.SLIDER_POSITION =
            t.SIDETAB_ATTRIBUTE =
            t.WIDGET_ATTRIBUTE =
            t.SLIDER_ATTRIBUTE =
            t.POPUP_ATTRIBUTE =
            t.POPOVER_ATTRIBUTE =
              void 0),
          (t.POPOVER_ATTRIBUTE = "data-tf-popover"),
          (t.POPUP_ATTRIBUTE = "data-tf-popup"),
          (t.SLIDER_ATTRIBUTE = "data-tf-slider"),
          (t.WIDGET_ATTRIBUTE = "data-tf-widget"),
          (t.SIDETAB_ATTRIBUTE = "data-tf-sidetab"),
          (t.SLIDER_POSITION = "right"),
          (t.SLIDER_WIDTH = 800),
          (t.POPUP_SIZE = 100),
          (t.FORM_BASE_URL = "https://form.typeform.com");
      },
      7528: function (e, t, n) {
        var o =
          (this && this.__assign) ||
          function () {
            return (o =
              Object.assign ||
              function (e) {
                for (var t, n = 1, o = arguments.length; n < o; n++)
                  for (var r in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e;
              }).apply(this, arguments);
          };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.createPopover = void 0);
        var r = n(6797),
          i = n(1320),
          a = function (e) {
            return !!e.parentNode;
          },
          u = function (e, t) {
            var n = e.parentNode;
            n && (n.removeChild(e), n.appendChild(t));
          },
          c = function (e, t) {
            void 0 === e && (e = "div"),
              void 0 === t && (t = "typeform-popover-button-icon");
            var n = document.createElement(e);
            return (
              (n.className = t),
              (n.innerHTML = "&times;"),
              (n.dataset.testid = t),
              n
            );
          },
          d = { buttonColor: "#3a7685" };
        t.createPopover = function (e, t) {
          void 0 === t && (t = {});
          var n,
            s,
            l,
            f,
            p,
            m,
            v = o(o({}, d), t),
            b = r.createIframe(e, "popover", v),
            y = b.iframe,
            h = b.embedId,
            g = (function (e, t) {
              var n = document.createElement("div");
              return (
                (n.className = "typeform-popover"),
                (n.dataset.testid = "typeform-popover"),
                r.setElementSize(n, { width: e, height: t })
              );
            })(v.width, v.height),
            _ = (function () {
              var e = document.createElement("div");
              return (
                (e.className = "typeform-popover-wrapper"),
                (e.dataset.testid = "typeform-popover-wrapper"),
                e
              );
            })(),
            O =
              ((n = v.customIcon),
              (s = v.buttonColor || d.buttonColor),
              (l = r.getTextColor(s)),
              ((f = document.createElement("div")).className =
                "typeform-popover-button-icon"),
              (f.innerHTML = n
                ? "<img alt='popover trigger icon button' src='" + n + "'/>"
                : '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"\n    xmlns="http://www.w3.org/2000/svg">\n      <path d="M21 0H0V9L10.5743 24V16.5H21C22.6567 16.5 24 15.1567 24 13.5V3C24 1.34325 22.6567 0 21 0ZM7.5\n    9.75C6.672 9.75 6 9.07875 6 8.25C6 7.42125 6.672 6.75 7.5 6.75C8.328 6.75 9 7.42125 9 8.25C9 9.07875 8.328 9.75\n    7.5 9.75ZM12.75 9.75C11.922 9.75 11.25 9.07875 11.25 8.25C11.25 7.42125 11.922 6.75 12.75 6.75C13.578 6.75 14.25\n    7.42125 14.25 8.25C14.25 9.07875 13.578 9.75 12.75 9.75ZM18 9.75C17.172 9.75 16.5 9.07875 16.5 8.25C16.5 7.42125\n    17.172 6.75 18 6.75C18.828 6.75 19.5 7.42125 19.5 8.25C19.5 9.07875 18.828 9.75 18 9.75Z" fill="' +
                  l +
                  '"></path>\n    </svg>'),
              (f.dataset.testid = "default-icon"),
              f),
            w = (function () {
              var e = document.createElement("div");
              e.className = "typeform-spinner";
              var t = document.createElement("div");
              return (
                (t.className = "typeform-popover-button-icon"),
                (t.dataset.testid = "spinner-icon"),
                t.append(e),
                t
              );
            })(),
            P = c(),
            E = c("a", "typeform-popover-close"),
            j = (function (e) {
              var t = r.getTextColor(e),
                n = document.createElement("button");
              return (
                (n.className = "typeform-popover-button"),
                (n.dataset.testid = "typeform-popover-button"),
                (n.style.backgroundColor = e),
                (n.style.color = t),
                n
              );
            })(v.buttonColor || d.buttonColor);
          (v.container || document.body).append(g),
            _.append(y),
            g.append(j),
            g.append(E),
            j.append(O);
          var T = function () {
            p &&
              p.parentNode &&
              (p.classList.add("closing"),
              setTimeout(function () {
                r.unmountElement(p);
              }, 250));
          };
          v.tooltip &&
            v.tooltip.length > 0 &&
            ((p = (function (e, t) {
              var n = document.createElement("span");
              (n.className = "typeform-popover-tooltip-close"),
                (n.dataset.testid = "typeform-popover-tooltip-close"),
                (n.innerHTML = "&times;"),
                (n.onclick = t);
              var o = document.createElement("div");
              (o.className = "typeform-popover-tooltip-text"),
                (o.innerHTML = e);
              var r = document.createElement("div");
              return (
                (r.className = "typeform-popover-tooltip"),
                (r.dataset.testid = "typeform-popover-tooltip"),
                r.appendChild(o),
                r.appendChild(n),
                r
              );
            })(v.tooltip, T)),
            g.append(p)),
            v.notificationDays &&
              (v.enableSandbox || i.canBuildNotificationDot(e)) &&
              ((m = i.buildNotificationDot()), j.append(m)),
            (y.onload = function () {
              g.classList.add("open"),
                (_.style.opacity = "1"),
                (E.style.opacity = "1"),
                u(w, P),
                r.addCustomKeyboardListener(I);
            });
          var C = function () {
              a(_) ||
                (T(),
                m &&
                  (m.classList.add("closing"),
                  v.notificationDays &&
                    !v.enableSandbox &&
                    i.saveNotificationDotHideUntilTime(e, v.notificationDays),
                  setTimeout(function () {
                    r.unmountElement(m);
                  }, 250)),
                setTimeout(function () {
                  g.append(_),
                    (_.style.opacity = "0"),
                    (E.style.opacity = "0"),
                    u(O, w);
                }));
            },
            I = function () {
              a(g) &&
                setTimeout(function () {
                  r.unmountElement(_), g.classList.remove("open"), u(P, O);
                }, 250);
            };
          r.setAutoClose(h, v.autoClose, I);
          var S = function () {
            a(_) ? I() : C();
          };
          return (
            (j.onclick = S),
            (E.onclick = I),
            v.open && !a(_) && r.handleCustomOpen(C, v.open, v.openValue),
            {
              open: C,
              close: I,
              toggle: S,
              refresh: function () {
                var e;
                null === (e = y.contentWindow) ||
                  void 0 === e ||
                  e.location.reload();
              },
              unmount: function () {
                r.unmountElement(g);
              },
            }
          );
        };
      },
      1797: function (e, t, n) {
        var o =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, o) {
                  void 0 === o && (o = n),
                    Object.defineProperty(e, o, {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    });
                }
              : function (e, t, n, o) {
                  void 0 === o && (o = n), (e[o] = t[n]);
                }),
          r =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var n in e)
                "default" === n ||
                  Object.prototype.hasOwnProperty.call(t, n) ||
                  o(t, e, n);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          r(n(7528), t),
          r(n(6100), t);
      },
      1320: function (e, t) {
        var n =
          (this && this.__assign) ||
          function () {
            return (n =
              Object.assign ||
              function (e) {
                for (var t, n = 1, o = arguments.length; n < o; n++)
                  for (var r in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e;
              }).apply(this, arguments);
          };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.buildNotificationDot =
            t.canBuildNotificationDot =
            t.saveNotificationDotHideUntilTime =
              void 0);
        var o = "tfNotificationData",
          r = function () {
            var e = localStorage.getItem(o);
            return e ? JSON.parse(e) : {};
          },
          i = function (e) {
            e && localStorage.setItem(o, JSON.stringify(e));
          };
        (t.saveNotificationDotHideUntilTime = function (e, t) {
          var o,
            a = new Date();
          a.setDate(a.getDate() + t),
            i(
              n(n({}, r()), (((o = {})[e] = { hideUntilTime: a.getTime() }), o))
            );
        }),
          (t.canBuildNotificationDot = function (e) {
            var t = (function (e) {
              var t;
              return (
                (null === (t = r()[e]) || void 0 === t
                  ? void 0
                  : t.hideUntilTime) || 0
              );
            })(e);
            return (
              new Date().getTime() > t &&
              (t &&
                (function (e) {
                  var t = r();
                  delete t[e], i(t);
                })(e),
              !0)
            );
          }),
          (t.buildNotificationDot = function () {
            var e = document.createElement("span");
            return (
              (e.className = "typeform-popover-unread-dot"),
              (e.dataset.testid = "typeform-popover-unread-dot"),
              e
            );
          });
      },
      6100: function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      9630: function (e, t, n) {
        var o =
          (this && this.__rest) ||
          function (e, t) {
            var n = {};
            for (var o in e)
              Object.prototype.hasOwnProperty.call(e, o) &&
                t.indexOf(o) < 0 &&
                (n[o] = e[o]);
            if (
              null != e &&
              "function" == typeof Object.getOwnPropertySymbols
            ) {
              var r = 0;
              for (o = Object.getOwnPropertySymbols(e); r < o.length; r++)
                t.indexOf(o[r]) < 0 &&
                  Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
                  (n[o[r]] = e[o[r]]);
            }
            return n;
          };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.createPopup = void 0);
        var r = n(6797),
          i = n(8027),
          a = function (e) {
            return !!e.parentNode;
          };
        t.createPopup = function (e, t) {
          if ((void 0 === t && (t = {}), !r.hasDom()))
            return {
              open: function () {},
              close: function () {},
              toggle: function () {},
              refresh: function () {},
              unmount: function () {},
            };
          var n = t.width,
            u = t.height,
            c = t.size,
            d = void 0 === c ? i.POPUP_SIZE : c,
            s = o(t, ["width", "height", "size"]),
            l = r.createIframe(e, "popup", s),
            f = l.iframe,
            p = l.embedId,
            m = document.body.style.overflow,
            v = (function () {
              var e = document.createElement("div");
              return (
                (e.className = "typeform-popup"), (e.style.opacity = "0"), e
              );
            })(),
            b = (function () {
              var e = document.createElement("div");
              return (e.className = "typeform-spinner"), e;
            })(),
            y = (function (e, t, n) {
              var o = document.createElement("div");
              return (
                (o.className = "typeform-iframe-wrapper"),
                (o.style.opacity = "0"),
                r.isDefined(e) && r.isDefined(t)
                  ? r.setElementSize(o, { width: e, height: t })
                  : ((o.style.width = "calc(" + n + "% - 80px)"),
                    (o.style.height = "calc(" + n + "% - 80px)"),
                    o)
              );
            })(n, u, d);
          y.append(f), v.append(b), v.append(y);
          var h = s.container || document.body;
          f.onload = function () {
            (y.style.opacity = "1"),
              setTimeout(function () {
                b.style.display = "none";
              }, 250),
              r.addCustomKeyboardListener(_);
          };
          var g = function () {
              a(v) ||
                (h.append(v),
                (document.body.style.overflow = "hidden"),
                setTimeout(function () {
                  v.style.opacity = "1";
                }));
            },
            _ = function () {
              a(v) &&
                ((v.style.opacity = "0"),
                (y.style.opacity = "0"),
                (document.body.style.overflow = m),
                setTimeout(function () {
                  O(), (b.style.display = "block");
                }, 250));
            };
          y.append(
            (function (e) {
              var t = document.createElement("a");
              return (
                (t.className = "typeform-close"),
                (t.innerHTML = "&times;"),
                (t.onclick = e),
                t
              );
            })(_)
          ),
            r.setAutoClose(p, s.autoClose, _);
          var O = function () {
            r.unmountElement(v);
          };
          return (
            s.open && !a(v) && r.handleCustomOpen(g, s.open, s.openValue),
            {
              open: g,
              close: _,
              toggle: function () {
                a(v) ? _() : g();
              },
              refresh: function () {
                var e;
                null === (e = f.contentWindow) ||
                  void 0 === e ||
                  e.location.reload();
              },
              unmount: O,
            }
          );
        };
      },
      5970: function (e, t, n) {
        var o =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, o) {
                  void 0 === o && (o = n),
                    Object.defineProperty(e, o, {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    });
                }
              : function (e, t, n, o) {
                  void 0 === o && (o = n), (e[o] = t[n]);
                }),
          r =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var n in e)
                "default" === n ||
                  Object.prototype.hasOwnProperty.call(t, n) ||
                  o(t, e, n);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          r(n(9630), t),
          r(n(7394), t);
      },
      7394: function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      382: function (e, t, n) {
        var o =
          (this && this.__assign) ||
          function () {
            return (o =
              Object.assign ||
              function (e) {
                for (var t, n = 1, o = arguments.length; n < o; n++)
                  for (var r in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e;
              }).apply(this, arguments);
          };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.createSidetab = void 0);
        var r = n(6797),
          i = { buttonColor: "#3a7685", buttonText: "Launch me" },
          a = function (e) {
            return !!e.parentNode;
          },
          u = function (e, t) {
            void 0 === e && (e = "div"),
              void 0 === t && (t = "typeform-sidetab-button-icon");
            var n = document.createElement(e);
            return (
              (n.className = t),
              (n.innerHTML = "&times;"),
              (n.dataset.testid = t),
              n
            );
          },
          c = function (e, t) {
            var n = e.parentNode;
            n && (n.removeChild(e), n.appendChild(t));
          };
        t.createSidetab = function (e, t) {
          void 0 === t && (t = {});
          var n,
            d,
            s,
            l,
            f,
            p,
            m,
            v = o(o({}, i), t),
            b = r.createIframe(e, "side-tab", v),
            y = b.iframe,
            h = b.embedId,
            g =
              ((n = v.width),
              (d = v.height),
              ((s = document.createElement("div")).className =
                "typeform-sidetab"),
              (s.dataset.testid = "typeform-sidetab"),
              r.setElementSize(s, { width: n, height: d })),
            _ = (function () {
              var e = document.createElement("div");
              return (
                (e.className = "typeform-sidetab-wrapper"),
                (e.dataset.testid = "typeform-sidetab-wrapper"),
                e
              );
            })(),
            O = (function () {
              var e = document.createElement("div");
              e.className = "typeform-spinner";
              var t = document.createElement("div");
              return (
                (t.className = "typeform-sidetab-button-icon"),
                (t.dataset.testid = "spinner-icon"),
                t.append(e),
                t
              );
            })(),
            w = (function (e) {
              var t = r.getTextColor(e),
                n = document.createElement("button");
              return (
                (n.className = "typeform-sidetab-button"),
                (n.style.backgroundColor = e),
                (n.style.color = t),
                n
              );
            })(v.buttonColor || i.buttonColor),
            P = (function (e) {
              var t = document.createElement("span");
              return (
                (t.className = "typeform-sidetab-button-text"),
                (t.innerHTML = e),
                t
              );
            })(v.buttonText || i.buttonText),
            E =
              ((l = v.customIcon),
              (f = v.buttonColor || i.buttonColor),
              (p = r.getTextColor(f)),
              ((m = document.createElement("div")).className =
                "typeform-sidetab-button-icon"),
              (m.innerHTML = l
                ? "<img alt='sidetab trigger icon button' src='" +
                  l +
                  '\' style="max-width: 100%; max-height: 100%" />'
                : '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path d="M21 0H0V9L10.5743 24V16.5H21C22.6567 16.5 24 15.1567 24 13.5V3C24 1.34325 22.6567 0 21 0ZM7.5 9.75C6.672 9.75 6 9.07875 6 8.25C6 7.42125 6.672 6.75 7.5 6.75C8.328 6.75 9 7.42125 9 8.25C9 9.07875 8.328 9.75 7.5 9.75ZM12.75 9.75C11.922 9.75 11.25 9.07875 11.25 8.25C11.25 7.42125 11.922 6.75 12.75 6.75C13.578 6.75 14.25 7.42125 14.25 8.25C14.25 9.07875 13.578 9.75 12.75 9.75ZM18 9.75C17.172 9.75 16.5 9.07875 16.5 8.25C16.5 7.42125 17.172 6.75 18 6.75C18.828 6.75 19.5 7.42125 19.5 8.25C19.5 9.07875 18.828 9.75 18 9.75Z" fill="' +
                  p +
                  '"></path>\n</svg>'),
              (m.dataset.testid = "default-icon"),
              m),
            j = u(),
            T = u("a", "typeform-sidetab-close");
          document.body.append(g),
            _.append(y),
            g.append(w),
            g.append(T),
            w.append(E),
            w.append(P),
            setTimeout(function () {
              g.classList.add("ready");
            }, 250),
            (y.onload = function () {
              g.classList.add("open"), c(O, j), r.addCustomKeyboardListener(I);
            });
          var C = function () {
              a(_) || (g.append(_), c(E, O));
            },
            I = function () {
              a(_) &&
                (g.classList.remove("open"),
                setTimeout(function () {
                  r.unmountElement(_), c(j, E);
                }, 250));
            };
          r.setAutoClose(h, v.autoClose, I);
          var S = function () {
            a(_) ? I() : C();
          };
          return (
            (w.onclick = S),
            (T.onclick = I),
            v.open && !a(_) && r.handleCustomOpen(C, v.open, v.openValue),
            {
              open: C,
              close: I,
              toggle: S,
              refresh: function () {
                var e;
                null === (e = y.contentWindow) ||
                  void 0 === e ||
                  e.location.reload();
              },
              unmount: function () {
                r.unmountElement(g);
              },
            }
          );
        };
      },
      1434: function (e, t, n) {
        var o =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, o) {
                  void 0 === o && (o = n),
                    Object.defineProperty(e, o, {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    });
                }
              : function (e, t, n, o) {
                  void 0 === o && (o = n), (e[o] = t[n]);
                }),
          r =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var n in e)
                "default" === n ||
                  Object.prototype.hasOwnProperty.call(t, n) ||
                  o(t, e, n);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          r(n(382), t),
          r(n(7668), t);
      },
      7668: function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      2603: function (e, t, n) {
        var o =
          (this && this.__rest) ||
          function (e, t) {
            var n = {};
            for (var o in e)
              Object.prototype.hasOwnProperty.call(e, o) &&
                t.indexOf(o) < 0 &&
                (n[o] = e[o]);
            if (
              null != e &&
              "function" == typeof Object.getOwnPropertySymbols
            ) {
              var r = 0;
              for (o = Object.getOwnPropertySymbols(e); r < o.length; r++)
                t.indexOf(o[r]) < 0 &&
                  Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
                  (n[o[r]] = e[o[r]]);
            }
            return n;
          };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.createSlider = void 0);
        var r = n(6797),
          i = n(8027),
          a = function (e) {
            return !!e.parentNode;
          };
        t.createSlider = function (e, t) {
          if ((void 0 === t && (t = {}), !r.hasDom()))
            return {
              open: function () {},
              close: function () {},
              toggle: function () {},
              refresh: function () {},
              unmount: function () {},
            };
          var n = t.position,
            u = void 0 === n ? i.SLIDER_POSITION : n,
            c = t.width,
            d = void 0 === c ? i.SLIDER_WIDTH : c,
            s = o(t, ["position", "width"]),
            l = r.createIframe(e, "slider", s),
            f = l.iframe,
            p = l.embedId,
            m = document.body.style.overflow,
            v = (function (e) {
              var t = document.createElement("div");
              return (
                (t.className = "typeform-slider " + e),
                (t.style.opacity = "0"),
                t
              );
            })(u),
            b = (function () {
              var e = document.createElement("div");
              return (e.className = "typeform-spinner"), e;
            })(),
            y = (function (e, t) {
              var n = document.createElement("div");
              return (
                (n.className = "typeform-iframe-wrapper"),
                (n.style[e] = "-100%"),
                r.setElementSize(n, { width: t })
              );
            })(u, d);
          y.append(f), v.append(b), v.append(y);
          var h = s.container || document.body;
          f.onload = function () {
            (y.style[u] = "0"),
              setTimeout(function () {
                b.style.display = "none";
              }, 500),
              r.addCustomKeyboardListener(_);
          };
          var g = function () {
              a(v) ||
                (h.append(v),
                (document.body.style.overflow = "hidden"),
                setTimeout(function () {
                  v.style.opacity = "1";
                }));
            },
            _ = function () {
              a(v) &&
                ((v.style.opacity = "0"),
                (y.style[u] = "-100%"),
                (document.body.style.overflow = m),
                setTimeout(function () {
                  v.parentNode.removeChild(v), (b.style.display = "block");
                }, 500));
            };
          return (
            r.setAutoClose(p, s.autoClose, _),
            y.append(
              (function (e) {
                var t = document.createElement("a");
                return (
                  (t.className = "typeform-close"),
                  (t.innerHTML = "&times;"),
                  (t.onclick = e),
                  t
                );
              })(_)
            ),
            s.open && !a(v) && r.handleCustomOpen(g, s.open, s.openValue),
            {
              open: g,
              close: _,
              toggle: function () {
                a(v) ? _() : g();
              },
              refresh: function () {
                var e;
                null === (e = f.contentWindow) ||
                  void 0 === e ||
                  e.location.reload();
              },
              unmount: function () {
                r.unmountElement(v);
              },
            }
          );
        };
      },
      4071: function (e, t, n) {
        var o =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, o) {
                  void 0 === o && (o = n),
                    Object.defineProperty(e, o, {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    });
                }
              : function (e, t, n, o) {
                  void 0 === o && (o = n), (e[o] = t[n]);
                }),
          r =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var n in e)
                "default" === n ||
                  Object.prototype.hasOwnProperty.call(t, n) ||
                  o(t, e, n);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          r(n(2603), t),
          r(n(3162), t);
      },
      3162: function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      718: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.createWidget = void 0);
        var o = n(6797),
          r = n(8554),
          i = n(2313);
        t.createWidget = function (e, t) {
          if (!o.hasDom())
            return { refresh: function () {}, unmount: function () {} };
          var n = t;
          t.inlineOnMobile ||
            (!t.forceTouch && !o.isFullscreen()) ||
            ((n.enableFullscreen = !0), (n.forceTouch = !0));
          var a,
            u = o.createIframe(e, "widget", n),
            c = u.embedId,
            d = u.iframe,
            s = i.buildWidget(d, t.width, t.height);
          if (
            ((t.container.innerHTML = ""),
            t.container.append(s),
            n.enableFullscreen)
          ) {
            var l = t.container;
            window.addEventListener(
              "message",
              r.getWelcomeScreenHiddenHandler(c, l)
            );
            var f =
              (((a = document.createElement("a")).className =
                "typeform-widget-close"),
              (a.innerHTML = "&times;"),
              a);
            (f.onclick = function () {
              l.classList.remove("typeform-widget-fullscreen"),
                (t.container.innerHTML = ""),
                t.container.append(s),
                l.append(f);
            }),
              l.append(f);
          }
          return {
            refresh: function () {
              var e;
              return null === (e = d.contentWindow) || void 0 === e
                ? void 0
                : e.location.reload();
            },
            unmount: function () {
              return o.unmountElement(s);
            },
          };
        };
      },
      1419: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.buildWidget = void 0);
        var o = n(6797);
        t.buildWidget = function (e, t, n) {
          var r = document.createElement("div");
          return (
            (r.className = "typeform-widget"),
            r.append(e),
            o.setElementSize(r, { width: t, height: n })
          );
        };
      },
      2313: function (e, t, n) {
        var o =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, o) {
                  void 0 === o && (o = n),
                    Object.defineProperty(e, o, {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    });
                }
              : function (e, t, n, o) {
                  void 0 === o && (o = n), (e[o] = t[n]);
                }),
          r =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var n in e)
                "default" === n ||
                  Object.prototype.hasOwnProperty.call(t, n) ||
                  o(t, e, n);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), r(n(1419), t);
      },
      9321: function (e, t, n) {
        var o =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, o) {
                  void 0 === o && (o = n),
                    Object.defineProperty(e, o, {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    });
                }
              : function (e, t, n, o) {
                  void 0 === o && (o = n), (e[o] = t[n]);
                }),
          r =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var n in e)
                "default" === n ||
                  Object.prototype.hasOwnProperty.call(t, n) ||
                  o(t, e, n);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          r(n(718), t),
          r(n(4058), t);
      },
      4058: function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      1920: function (e, t, n) {
        var o =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, o) {
                  void 0 === o && (o = n),
                    Object.defineProperty(e, o, {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    });
                }
              : function (e, t, n, o) {
                  void 0 === o && (o = n), (e[o] = t[n]);
                }),
          r =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var n in e)
                "default" === n ||
                  Object.prototype.hasOwnProperty.call(t, n) ||
                  o(t, e, n);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          r(n(1797), t),
          r(n(5970), t),
          r(n(4071), t),
          r(n(9321), t),
          r(n(1434), t);
      },
      5455: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.buildOptionsFromAttributes = void 0);
        var o = n(6797);
        t.buildOptionsFromAttributes = function (e) {
          return o.loadOptionsFromAttributes(e, {
            source: "string",
            medium: "string",
            mediumVersion: "string",
            open: "string",
            openValue: "integer",
            hideFooter: "boolean",
            hideHeaders: "boolean",
            opacity: "integer",
            disableTracking: "boolean",
            onReady: "function",
            onSubmit: "function",
            onQuestionChanged: "function",
            transitiveSearchParams: "array",
            hidden: "record",
            chat: "boolean",
            buttonColor: "string",
            customIcon: "string",
            width: "integer",
            height: "integer",
            size: "integer",
            buttonText: "string",
            position: "string",
            enableSandbox: "boolean",
            tooltip: "string",
            notificationDays: "integer",
            autoClose: "integerOrBoolean",
            shareGaInstance: "boolean",
            forceTouch: "boolean",
            enableFullscreen: "boolean",
            inlineOnMobile: "boolean",
          });
        };
      },
      6654: function (e, t, n) {
        var o =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, o) {
                  void 0 === o && (o = n),
                    Object.defineProperty(e, o, {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    });
                }
              : function (e, t, n, o) {
                  void 0 === o && (o = n), (e[o] = t[n]);
                }),
          r =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var n in e)
                "default" === n ||
                  Object.prototype.hasOwnProperty.call(t, n) ||
                  o(t, e, n);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          r(n(8806), t),
          r(n(8933), t),
          r(n(7833), t),
          r(n(5361), t),
          r(n(2103), t);
      },
      8806: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.initializePopovers = void 0);
        var o = n(1797),
          r = n(8027),
          i = n(7308);
        t.initializePopovers = function (e) {
          void 0 === e && (e = !1),
            i.initialize(
              r.POPOVER_ATTRIBUTE,
              "popover.css",
              e,
              function (e, t, n) {
                var r = o.createPopover(e, t).toggle;
                n.onclick = r;
              }
            );
        };
      },
      8933: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.initializePopups = void 0);
        var o = n(5970),
          r = n(8027),
          i = n(7308);
        t.initializePopups = function (e) {
          void 0 === e && (e = !1),
            i.initialize(r.POPUP_ATTRIBUTE, "popup.css", e, function (e, t, n) {
              var r = o.createPopup(e, t).toggle;
              n.onclick = r;
            });
        };
      },
      2103: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.initializeSidetabs = void 0);
        var o = n(1434),
          r = n(8027),
          i = n(7308);
        t.initializeSidetabs = function (e) {
          void 0 === e && (e = !1),
            i.initialize(
              r.SIDETAB_ATTRIBUTE,
              "sidetab.css",
              e,
              function (e, t) {
                o.createSidetab(e, t);
              }
            );
        };
      },
      7833: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.initializeSliders = void 0);
        var o = n(4071),
          r = n(8027),
          i = n(7308);
        t.initializeSliders = function (e) {
          void 0 === e && (e = !1),
            i.initialize(
              r.SLIDER_ATTRIBUTE,
              "slider.css",
              e,
              function (e, t, n) {
                var r = o.createSlider(e, t).toggle;
                n.onclick = r;
              }
            );
        };
      },
      5361: function (e, t, n) {
        var o =
          (this && this.__assign) ||
          function () {
            return (o =
              Object.assign ||
              function (e) {
                for (var t, n = 1, o = arguments.length; n < o; n++)
                  for (var r in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e;
              }).apply(this, arguments);
          };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.initializeWidgets = void 0);
        var r = n(9321),
          i = n(8027),
          a = n(7308);
        t.initializeWidgets = function (e) {
          void 0 === e && (e = !1),
            a.initialize(
              i.WIDGET_ATTRIBUTE,
              "widget.css",
              e,
              function (e, t, n) {
                r.createWidget(e, o(o({}, t), { container: n }));
              }
            );
        };
      },
      7308: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.initialize = void 0);
        var o = n(6797),
          r = n(5455);
        t.initialize = function (e, t, n, i) {
          void 0 === n && (n = !1);
          var a = document.querySelectorAll("[" + e + "]");
          a.length > 0 && o.includeCss(t),
            Array.from(a).forEach(function (t, o) {
              if (n || "true" !== t.dataset.tfLoaded) {
                var a = t.getAttribute(e);
                if (!a)
                  throw new Error(
                    "Invalid " + e + "=" + a + " for embed #" + o
                  );
                i(a, r.buildOptionsFromAttributes(t), t),
                  (t.dataset.tfLoaded = "true");
              }
            });
        };
      },
      3626: function (e, t, n) {
        var o =
          (this && this.__assign) ||
          function () {
            return (o =
              Object.assign ||
              function (e) {
                for (var t, n = 1, o = arguments.length; n < o; n++)
                  for (var r in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e;
              }).apply(this, arguments);
          };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.buildIframeSrc = void 0);
        var r = n(8027),
          i = n(4527),
          a = n(2346),
          u = n(2698),
          c = {
            widget: "embed-widget",
            popup: "popup-blank",
            slider: "popup-drawer",
            popover: "popup-popover",
            "side-tab": "popup-side-panel",
          };
        t.buildIframeSrc = function (e) {
          var t = e.formId,
            n = e.type,
            d = e.embedId,
            s = e.options,
            l = (function (e, t, n) {
              var r = u.getTransitiveSearchParams(n.transitiveSearchParams),
                i = {
                  "typeform-embed-id": t,
                  "typeform-embed": c[e],
                  "typeform-source": n.source,
                  "typeform-medium": n.medium,
                  "typeform-medium-version": n.mediumVersion + '&test',
                  "embed-hide-footer": n.hideFooter ? "true" : void 0,
                  "embed-hide-headers": n.hideHeaders ? "true" : void 0,
                  "embed-opacity": n.opacity,
                  "disable-tracking":
                    n.disableTracking || n.enableSandbox ? "true" : void 0,
                  "disable-auto-focus": n.disableAutoFocus ? "true" : void 0,
                  "__dangerous-disable-submissions": n.enableSandbox
                    ? "true"
                    : void 0,
                  "share-ga-instance": n.shareGaInstance ? "true" : void 0,
                  "force-touch": n.forceTouch ? "true" : void 0,
                  "add-placeholder-ws":
                    "widget" === e && n.enableFullscreen ? "true" : void 0,
                };
              return o(o({}, i), r);
            })(
              n,
              d,
              (function (e) {
                return o(
                  o(
                    {},
                    {
                      source:
                        null ===
                          (t =
                            null === window || void 0 === window
                              ? void 0
                              : window.location) || void 0 === t
                          ? void 0
                          : t.hostname.replace(/^www\./, ""),
                      medium: "embed-sdk",
                      mediumVersion: "next",
                    }
                  ),
                  i.removeUndefinedKeys(e)
                );
                var t;
              })(s)
            ),
            f = (function (e, t) {
              void 0 === t && (t = !1);
              var n = t ? "c" : "to";
              return new URL(r.FORM_BASE_URL + "/" + n + "/" + e);
            })(t, s.chat);
          if (
            (Object.entries(l)
              .filter(function (e) {
                var t = e[1];
                return a.isDefined(t);
              })
              .forEach(function (e) {
                var t = e[0],
                  n = e[1];
                f.searchParams.set(t, n);
              }),
            s.hidden)
          ) {
            var p = new URL(r.FORM_BASE_URL);
            Object.entries(s.hidden)
              .filter(function (e) {
                var t = e[1];
                return a.isDefined(t);
              })
              .forEach(function (e) {
                var t = e[0],
                  n = e[1];
                p.searchParams.set(t, n);
              });
            var m = p.searchParams.toString();
            m && (f.hash = m);
          }
          return f.href;
        };
      },
      8972: function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.handleCustomOpen = void 0),
          (t.handleCustomOpen = function (e, t, n) {
            switch (t) {
              case "load":
                e();
                break;
              case "exit":
                n &&
                  (function (e, t) {
                    var n = 0,
                      o = function (r) {
                        r.clientY < e && r.clientY < n
                          ? (document.removeEventListener("mousemove", o), t())
                          : (n = r.clientY);
                      };
                    document.addEventListener("mousemove", o);
                  })(n, e);
                break;
              case "time":
                setTimeout(function () {
                  e();
                }, n);
                break;
              case "scroll":
                n &&
                  (function (e, t) {
                    var n = function () {
                      var o =
                          window.pageYOffset ||
                          document.documentElement.scrollTop,
                        r = document.documentElement.clientTop || 0,
                        i = document.documentElement.scrollHeight,
                        a = o - r,
                        u = (a / i) * 100,
                        c = a + window.innerHeight >= i;
                      (u >= e || c) &&
                        (t(), document.removeEventListener("scroll", n));
                    };
                    document.addEventListener("scroll", n);
                  })(n, e);
            }
          });
      },
      1553: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.createIframe = void 0);
        var o = n(3626),
          r = n(6797),
          i = n(8866),
          a = n(8554),
          u = n(2256),
          c = n(7144);
        t.createIframe = function (e, t, n) {
            var d = i.generateEmbedId(),
            s = o.buildIframeSrc({
              formId: e,
              embedId: d,
              type: t,
              options: n,
            }),
            l = document.createElement("iframe");
          return (
            (l.src = s),
            (l.dataset.testid = "iframe"),
            l.addEventListener("load", u.triggerIframeRedraw, { once: !0 }),
            window.addEventListener(
              "message",
              a.getFormReadyHandler(d, n.onReady)
            ),
            window.addEventListener(
              "message",
              a.getFormQuestionChangedHandler(d, n.onQuestionChanged)
            ),
            window.addEventListener(
              "message",
              a.getFormSubmitHandler(d, n.onSubmit)
            ),
            "widget" !== t &&
              window.addEventListener(
                "message",
                c.dispatchCustomKeyEventFromIframe
              ),
            n.shareGaInstance &&
              window.addEventListener(
                "message",
                a.getFormReadyHandler(d, function () {
                  r.setupGaInstance(l, d);
                })
              ),
            { iframe: l, embedId: d }
          );
        };
      },
      8866: function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.generateEmbedId = void 0),
          (t.generateEmbedId = function () {
            var e = Math.random();
            return String(e).split(".")[1];
          });
      },
      8554: function (e, t) {
        var n =
          (this && this.__rest) ||
          function (e, t) {
            var n = {};
            for (var o in e)
              Object.prototype.hasOwnProperty.call(e, o) &&
                t.indexOf(o) < 0 &&
                (n[o] = e[o]);
            if (
              null != e &&
              "function" == typeof Object.getOwnPropertySymbols
            ) {
              var r = 0;
              for (o = Object.getOwnPropertySymbols(e); r < o.length; r++)
                t.indexOf(o[r]) < 0 &&
                  Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
                  (n[o[r]] = e[o[r]]);
            }
            return n;
          };
        function o(e, t, o) {
          return function (r) {
            var i = r.data,
              a = i.type,
              u = i.embedId,
              c = n(i, ["type", "embedId"]);
            a === e && u === t && (null == o || o(c));
          };
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getFormEventHandler =
            t.getWelcomeScreenHiddenHandler =
            t.getFormSubmitHandler =
            t.getFormQuestionChangedHandler =
            t.getFormReadyHandler =
              void 0),
          (t.getFormReadyHandler = function (e, t) {
            return o("form-ready", e, t);
          }),
          (t.getFormQuestionChangedHandler = function (e, t) {
            return o("form-screen-changed", e, t);
          }),
          (t.getFormSubmitHandler = function (e, t) {
            return o("form-submit", e, t);
          }),
          (t.getWelcomeScreenHiddenHandler = function (e, t) {
            return o("welcome-screen-hidden", e, function () {
              t.classList.add("typeform-widget-fullscreen");
            });
          }),
          (t.getFormEventHandler = o);
      },
      339: function (e, t, n) {
        var o =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, o) {
                  void 0 === o && (o = n),
                    Object.defineProperty(e, o, {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    });
                }
              : function (e, t, n, o) {
                  void 0 === o && (o = n), (e[o] = t[n]);
                }),
          r =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var n in e)
                "default" === n ||
                  Object.prototype.hasOwnProperty.call(t, n) ||
                  o(t, e, n);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          r(n(1553), t),
          r(n(7144), t);
      },
      7144: function (e, t) {
        var n =
            (this && this.__awaiter) ||
            function (e, t, n, o) {
              return new (n || (n = Promise))(function (r, i) {
                function a(e) {
                  try {
                    c(o.next(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function u(e) {
                  try {
                    c(o.throw(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function c(e) {
                  var t;
                  e.done
                    ? r(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(a, u);
                }
                c((o = o.apply(e, t || [])).next());
              });
            },
          o =
            (this && this.__generator) ||
            function (e, t) {
              var n,
                o,
                r,
                i,
                a = {
                  label: 0,
                  sent: function () {
                    if (1 & r[0]) throw r[1];
                    return r[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (i = { next: u(0), throw: u(1), return: u(2) }),
                "function" == typeof Symbol &&
                  (i[Symbol.iterator] = function () {
                    return this;
                  }),
                i
              );
              function u(i) {
                return function (u) {
                  return (function (i) {
                    if (n)
                      throw new TypeError("Generator is already executing.");
                    for (; a; )
                      try {
                        if (
                          ((n = 1),
                          o &&
                            (r =
                              2 & i[0]
                                ? o.return
                                : i[0]
                                ? o.throw || ((r = o.return) && r.call(o), 0)
                                : o.next) &&
                            !(r = r.call(o, i[1])).done)
                        )
                          return r;
                        switch (
                          ((o = 0), r && (i = [2 & i[0], r.value]), i[0])
                        ) {
                          case 0:
                          case 1:
                            r = i;
                            break;
                          case 4:
                            return a.label++, { value: i[1], done: !1 };
                          case 5:
                            a.label++, (o = i[1]), (i = [0]);
                            continue;
                          case 7:
                            (i = a.ops.pop()), a.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (r =
                                  (r = a.trys).length > 0 && r[r.length - 1]) ||
                                (6 !== i[0] && 2 !== i[0])
                              )
                            ) {
                              a = 0;
                              continue;
                            }
                            if (
                              3 === i[0] &&
                              (!r || (i[1] > r[0] && i[1] < r[3]))
                            ) {
                              a.label = i[1];
                              break;
                            }
                            if (6 === i[0] && a.label < r[1]) {
                              (a.label = r[1]), (r = i);
                              break;
                            }
                            if (r && a.label < r[2]) {
                              (a.label = r[2]), a.ops.push(i);
                              break;
                            }
                            r[2] && a.ops.pop(), a.trys.pop();
                            continue;
                        }
                        i = t.call(e, a);
                      } catch (e) {
                        (i = [6, e]), (o = 0);
                      } finally {
                        n = r = 0;
                      }
                    if (5 & i[0]) throw i[1];
                    return { value: i[0] ? i[1] : void 0, done: !0 };
                  })([i, u]);
                };
              }
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.dispatchCustomKeyEventFromIframe =
            t.removeCustomKeyboardListener =
            t.addCustomKeyboardListener =
              void 0);
        var r = "Escape",
          i = function (e, i) {
            return n(void 0, void 0, void 0, function () {
              return o(this, function (n) {
                return (
                  e.code === r &&
                    "function" == typeof i &&
                    (i(), t.removeCustomKeyboardListener()),
                  [2]
                );
              });
            });
          };
        (t.addCustomKeyboardListener = function (e) {
          return window.document.addEventListener("keydown", function (t) {
            return i(t, e);
          });
        }),
          (t.removeCustomKeyboardListener = function () {
            return window.document.removeEventListener("keydown", i);
          }),
          (t.dispatchCustomKeyEventFromIframe = function (e) {
            "form-close" === e.data.type &&
              window.document.dispatchEvent(
                new KeyboardEvent("keydown", { code: r })
              );
          });
      },
      2256: function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.triggerIframeRedraw = void 0),
          (t.triggerIframeRedraw = function () {
            this.style.transform = "translateZ(0)";
          });
      },
      8939: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getTextColor = void 0);
        var o = n(2938);
        t.getTextColor = function (e) {
          if (!e) return "#FFFFFF";
          var t = e.startsWith("#")
              ? o.hexRgb(e)
              : (function (e) {
                  var t = { red: 0, green: 0, blue: 0 },
                    n = e.match(/\d+/g);
                  return (
                    n &&
                      ((t.red = parseInt(n[0], 10)),
                      (t.green = parseInt(n[0], 10)),
                      (t.blue = parseInt(n[0], 10))),
                    t
                  );
                })(e),
            n = t.red,
            r = t.green,
            i = t.blue;
          return Math.round((299 * n + 587 * r + 114 * i) / 1e3) > 125
            ? "#000000"
            : "#FFFFFF";
        };
      },
      2698: function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getTransitiveSearchParams = void 0),
          (t.getTransitiveSearchParams = function (e) {
            var t = new URL(window.location.href),
              n = {};
            return (
              e &&
                e.length > 0 &&
                e.forEach(function (e) {
                  t.searchParams.has(e) && (n[e] = t.searchParams.get(e));
                }),
              n
            );
          });
      },
      8252: function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.hasDom = void 0),
          (t.hasDom = function () {
            return (
              "undefined" != typeof document && "undefined" != typeof window
            );
          });
      },
      2938: function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.hexRgb = void 0);
        var n = new RegExp("[^#a-f\\d]", "gi"),
          o = new RegExp(
            "^#?[a-f\\d]{3}[a-f\\d]?$|^#?[a-f\\d]{6}([a-f\\d]{2})?$",
            "i"
          );
        t.hexRgb = function (e) {
          if ("string" != typeof e || n.test(e) || !o.test(e))
            throw new TypeError("Expected a valid hex string");
          8 === (e = e.replace(/^#/, "")).length && (e = e.slice(0, 6)),
            4 === e.length && (e = e.slice(0, 3)),
            3 === e.length && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]);
          var t = Number.parseInt(e, 16);
          return { red: t >> 16, green: (t >> 8) & 255, blue: 255 & t };
        };
      },
      9071: function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.includeCss = void 0),
          (t.includeCss = function (e) {
            var t = (function (e) {
              return "https://embed.typeform.com/next/css/" + e;
            })(e);
            if (!document.querySelector('link[href="' + t + '"]')) {
              var n = document.createElement("link");
              (n.rel = "stylesheet"), (n.href = t), document.head.append(n);
            }
          });
      },
      6797: function (e, t, n) {
        var o =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, o) {
                  void 0 === o && (o = n),
                    Object.defineProperty(e, o, {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    });
                }
              : function (e, t, n, o) {
                  void 0 === o && (o = n), (e[o] = t[n]);
                }),
          r =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var n in e)
                "default" === n ||
                  Object.prototype.hasOwnProperty.call(t, n) ||
                  o(t, e, n);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          r(n(3626), t),
          r(n(339), t),
          r(n(8252), t),
          r(n(9071), t),
          r(n(2346), t),
          r(n(7377), t),
          r(n(6563), t),
          r(n(4527), t),
          r(n(9533), t),
          r(n(1451), t),
          r(n(8972), t),
          r(n(4748), t),
          r(n(4392), t),
          r(n(8939), t);
      },
      2346: function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isDefined = void 0),
          (t.isDefined = function (e) {
            return null != e;
          });
      },
      7377: function (e, t) {
        var n =
          (this && this.__assign) ||
          function () {
            return (n =
              Object.assign ||
              function (e) {
                for (var t, n = 1, o = arguments.length; n < o; n++)
                  for (var r in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e;
              }).apply(this, arguments);
          };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.loadOptionsFromAttributes =
            t.transformAttributeValue =
            t.camelCaseToKebabCase =
              void 0),
          (t.camelCaseToKebabCase = function (e) {
            return e
              .split("")
              .map(function (e, t) {
                return e.toUpperCase() === e
                  ? (0 !== t ? "-" : "") + e.toLowerCase()
                  : e;
              })
              .join("");
          });
        var o = function (e) {
            return "" === e || "yes" === e || "true" === e;
          },
          r = function (e) {
            var t = e ? parseInt(e, 10) : NaN;
            return isNaN(t) ? void 0 : t;
          },
          i = "%ESCAPED_COMMA%";
        (t.transformAttributeValue = function (e, t) {
          var a;
          switch (t) {
            case "string":
              return (function (e) {
                return e || void 0;
              })(e);
            case "boolean":
              return o(e);
            case "integer":
              return r(e);
            case "function":
              return (function (e) {
                var t = e && e in window ? window[e] : void 0;
                return "function" == typeof t ? t : void 0;
              })(e);
            case "array":
              return (function (e) {
                if (e)
                  return e
                    .replace(/\s/g, "")
                    .replace(/\\,/g, i)
                    .split(",")
                    .filter(function (e) {
                      return !!e;
                    })
                    .map(function (e) {
                      return e.replace(i, ",");
                    });
              })(e);
            case "record":
              return (function (e) {
                if (e)
                  return e
                    .replace(/\\,/g, i)
                    .split(",")
                    .filter(function (e) {
                      return !!e;
                    })
                    .map(function (e) {
                      return e.replace(i, ",");
                    })
                    .reduce(function (e, t) {
                      var o,
                        r = t.match(/^([^=]+)=(.*)$/);
                      if (r) {
                        var i = r[1],
                          a = r[2];
                        return n(n({}, e), (((o = {})[i.trim()] = a), o));
                      }
                      return e;
                    }, {});
              })(e);
            case "integerOrBoolean":
              return null !== (a = r(e)) && void 0 !== a ? a : o(e);
            default:
              throw new Error("Invalid attribute transformation " + t);
          }
        }),
          (t.loadOptionsFromAttributes = function (e, o) {
            return Object.keys(o).reduce(function (r, i) {
              var a;
              return n(
                n({}, r),
                (((a = {})[i] = t.transformAttributeValue(
                  e.getAttribute("data-tf-" + t.camelCaseToKebabCase(i)),
                  o[i]
                )),
                a)
              );
            }, {});
          });
      },
      6563: function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isFullscreen = t.isMobile = t.isBigScreen = void 0),
          (t.isBigScreen = function () {
            return window.screen.width >= 1024 && window.screen.height >= 768;
          }),
          (t.isMobile = function () {
            return /mobile|tablet|android/i.test(
              navigator.userAgent.toLowerCase()
            );
          }),
          (t.isFullscreen = function () {
            return t.isMobile() && !t.isBigScreen();
          });
      },
      4527: function (e, t, n) {
        var o =
          (this && this.__assign) ||
          function () {
            return (o =
              Object.assign ||
              function (e) {
                for (var t, n = 1, o = arguments.length; n < o; n++)
                  for (var r in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e;
              }).apply(this, arguments);
          };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.removeUndefinedKeys = void 0);
        var r = n(2346);
        t.removeUndefinedKeys = function (e) {
          return Object.entries(e)
            .filter(function (e) {
              var t = e[1];
              return r.isDefined(t);
            })
            .reduce(function (e, t) {
              var n,
                r = t[0],
                i = t[1];
              return o(o({}, e), (((n = {})[r] = i), n));
            }, {});
        };
      },
      4748: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.setAutoClose = void 0);
        var o = n(8554);
        t.setAutoClose = function (e, t, n) {
          if (t && n) {
            var r = "number" == typeof t ? t : 0;
            window.addEventListener(
              "message",
              o.getFormSubmitHandler(e, function () {
                return setTimeout(n, r);
              })
            );
          }
        };
      },
      9533: function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.setElementSize = void 0),
          (t.setElementSize = function (e, t) {
            var n = t.width,
              o = t.height;
            return (
              n && (e.style.width = n + "px"),
              o && (e.style.height = o + "px"),
              e
            );
          });
      },
      4392: function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.setupGaInstance = t.sendGaIdMessage = void 0),
          (t.sendGaIdMessage = function (e, t, n) {
            var o = { embedId: e, gaClientId: t };
            setTimeout(function () {
              n &&
                n.contentWindow &&
                n.contentWindow.postMessage(
                  { type: "ga-client-id", data: o },
                  "*"
                );
            }, 0);
          }),
          (t.setupGaInstance = function (e, n) {
            try {
              (0, window[window.GoogleAnalyticsObject])(function (o) {
                var r = o.get("clientId");
                t.sendGaIdMessage(n, r, e);
              });
            } catch (e) {
              console.error(
                "Whoops! You enabled the shareGaInstance feature but the google analytics object has not been found.\n      Make sure to include Google Analytics Javascript code before the Typeform Embed Javascript code in your page. Error: " +
                  e
              );
            }
          });
      },
      1451: function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.unmountElement = void 0),
          (t.unmountElement = function (e) {
            var t;
            null === (t = e.parentNode) || void 0 === t || t.removeChild(e);
          });
      },
    },
    t = {};
  return (function n(o) {
    if (t[o]) return t[o].exports;
    var r = (t[o] = { exports: {} });
    return e[o].call(r.exports, r, r.exports, n), r.exports;
  })(6664);
})();
