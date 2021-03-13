(function() {
    /*! nanoScrollerJS - v0.8.6 - 2015
     * http://jamesflorentino.github.com/nanoScrollerJS/
     * Copyright (c) 2015 James Florentino; Licensed MIT */
    ;
    ! function(e, t) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return t(e)
        } : t(e)
    }("undefined" != typeof window ? window : this, function(a, b) {
        function s(e) {
            var t = e.length,
                r = n.type(e);
            return "function" === r || n.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === r || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
        }

        function x(e, t, r) {
            if (n.isFunction(t)) return n.grep(e, function(e, n) {
                return !!t.call(e, n, e) !== r
            });
            if (t.nodeType) return n.grep(e, function(e) {
                return e === t !== r
            });
            if ("string" == typeof t) {
                if (w.test(t)) return n.filter(t, e, r);
                t = n.filter(t, e)
            }
            return n.grep(e, function(e) {
                return g.call(t, e) >= 0 !== r
            })
        }

        function D(e, t) {
            while ((e = e[t]) && 1 !== e.nodeType);
            return e
        }

        function G(e) {
            var t = F[e] = {};
            return n.each(e.match(E) || [], function(e, n) {
                t[n] = !0
            }), t
        }

        function I() {
            l.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), n.ready()
        }

        function K() {
            Object.defineProperty(this.cache = {}, 0, {
                get: function() {
                    return {}
                }
            }), this.expando = n.expando + K.uid++
        }

        function P(e, t, r) {
            var i;
            if (void 0 === r && 1 === e.nodeType)
                if (i = "data-" + t.replace(O, "-$1").toLowerCase(), r = e.getAttribute(i), "string" == typeof r) {
                    try {
                        r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : N.test(r) ? n.parseJSON(r) : r
                    } catch (s) {}
                    M.set(e, t, r)
                } else r = void 0;
            return r
        }

        function Z() {
            return !0
        }

        function $() {
            return !1
        }

        function _() {
            try {
                return l.activeElement
            } catch (e) {}
        }

        function jb(e, t) {
            return n.nodeName(e, "table") && n.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }

        function kb(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function lb(e) {
            var t = gb.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function mb(e, t) {
            for (var n = 0, r = e.length; r > n; n++) L.set(e[n], "globalEval", !t || L.get(t[n], "globalEval"))
        }

        function nb(e, t) {
            var r, i, s, o, u, a, f, l;
            if (1 === t.nodeType) {
                if (L.hasData(e) && (o = L.access(e), u = L.set(t, o), l = o.events)) {
                    delete u.handle, u.events = {};
                    for (s in l)
                        for (r = 0, i = l[s].length; i > r; r++) n.event.add(t, s, l[s][r])
                }
                M.hasData(e) && (a = M.access(e), f = n.extend({}, a), M.set(t, f))
            }
        }

        function ob(e, t) {
            var r = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
            return void 0 === t || t && n.nodeName(e, t) ? n.merge([e], r) : r
        }

        function pb(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && T.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }

        function sb(e, t) {
            var r, i = n(t.createElement(e)).appendTo(t.body),
                s = a.getDefaultComputedStyle && (r = a.getDefaultComputedStyle(i[0])) ? r.display : n.css(i[0], "display");
            return i.detach(), s
        }

        function tb(e) {
            var t = l,
                r = rb[e];
            return r || (r = sb(e, t), "none" !== r && r || (qb = (qb || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = qb[0].contentDocument, t.write(), t.close(), r = sb(e, t), qb.detach()), rb[e] = r), r
        }

        function xb(e, t, r) {
            var i, s, o, u, a = e.style;
            return r = r || wb(e), r && (u = r.getPropertyValue(t) || r[t]), r && ("" !== u || n.contains(e.ownerDocument, e) || (u = n.style(e, t)), vb.test(u) && ub.test(t) && (i = a.width, s = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = u, u = r.width, a.width = i, a.minWidth = s, a.maxWidth = o)), void 0 !== u ? u + "" : u
        }

        function yb(e, t) {
            return {
                get: function() {
                    return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }

        function Fb(e, t) {
            if (t in e) return t;
            var n = t[0].toUpperCase() + t.slice(1),
                r = t,
                i = Eb.length;
            while (i--)
                if (t = Eb[i] + n, t in e) return t;
            return r
        }

        function Gb(e, t, n) {
            var r = Ab.exec(t);
            return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
        }

        function Hb(e, t, r, i, s) {
            for (var o = r === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, u = 0; 4 > o; o += 2) "margin" === r && (u += n.css(e, r + R[o], !0, s)), i ? ("content" === r && (u -= n.css(e, "padding" + R[o], !0, s)), "margin" !== r && (u -= n.css(e, "border" + R[o] + "Width", !0, s))) : (u += n.css(e, "padding" + R[o], !0, s), "padding" !== r && (u += n.css(e, "border" + R[o] + "Width", !0, s)));
            return u
        }

        function Ib(e, t, r) {
            var i = !0,
                s = "width" === t ? e.offsetWidth : e.offsetHeight,
                o = wb(e),
                u = "border-box" === n.css(e, "boxSizing", !1, o);
            if (0 >= s || null == s) {
                if (s = xb(e, t, o), (0 > s || null == s) && (s = e.style[t]), vb.test(s)) return s;
                i = u && (k.boxSizingReliable() || s === e.style[t]), s = parseFloat(s) || 0
            }
            return s + Hb(e, t, r || (u ? "border" : "content"), i, o) + "px"
        }

        function Jb(e, t) {
            for (var r, i, s, o = [], u = 0, a = e.length; a > u; u++) i = e[u], i.style && (o[u] = L.get(i, "olddisplay"), r = i.style.display, t ? (o[u] || "none" !== r || (i.style.display = ""), "" === i.style.display && S(i) && (o[u] = L.access(i, "olddisplay", tb(i.nodeName)))) : (s = S(i), "none" === r && s || L.set(i, "olddisplay", s ? r : n.css(i, "display"))));
            for (u = 0; a > u; u++) i = e[u], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[u] || "" : "none"));
            return e
        }

        function Kb(e, t, n, r, i) {
            return new Kb.prototype.init(e, t, n, r, i)
        }

        function Sb() {
            return setTimeout(function() {
                Lb = void 0
            }), Lb = n.now()
        }

        function Tb(e, t) {
            var n, r = 0,
                i = {
                    height: e
                };
            for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = R[r], i["margin" + n] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i
        }

        function Ub(e, t, n) {
            for (var r, i = (Rb[t] || []).concat(Rb["*"]), s = 0, o = i.length; o > s; s++)
                if (r = i[s].call(n, t, e)) return r
        }

        function Vb(e, t, r) {
            var i, s, o, u, a, f, l, c, h = this,
                p = {},
                d = e.style,
                v = e.nodeType && S(e),
                m = L.get(e, "fxshow");
            r.queue || (a = n._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, f = a.empty.fire, a.empty.fire = function() {
                a.unqueued || f()
            }), a.unqueued++, h.always(function() {
                h.always(function() {
                    a.unqueued--, n.queue(e, "fx").length || a.empty.fire()
                })
            })), 1 === e.nodeType && ("height" in t || "width" in t) && (r.overflow = [d.overflow, d.overflowX, d.overflowY], l = n.css(e, "display"), c = "none" === l ? L.get(e, "olddisplay") || tb(e.nodeName) : l, "inline" === c && "none" === n.css(e, "float") && (d.display = "inline-block")), r.overflow && (d.overflow = "hidden", h.always(function() {
                d.overflow = r.overflow[0], d.overflowX = r.overflow[1], d.overflowY = r.overflow[2]
            }));
            for (i in t)
                if (s = t[i], Nb.exec(s)) {
                    if (delete t[i], o = o || "toggle" === s, s === (v ? "hide" : "show")) {
                        if ("show" !== s || !m || void 0 === m[i]) continue;
                        v = !0
                    }
                    p[i] = m && m[i] || n.style(e, i)
                } else l = void 0;
            if (n.isEmptyObject(p)) "inline" === ("none" === l ? tb(e.nodeName) : l) && (d.display = l);
            else {
                m ? "hidden" in m && (v = m.hidden) : m = L.access(e, "fxshow", {}), o && (m.hidden = !v), v ? n(e).show() : h.done(function() {
                    n(e).hide()
                }), h.done(function() {
                    var t;
                    L.remove(e, "fxshow");
                    for (t in p) n.style(e, t, p[t])
                });
                for (i in p) u = Ub(v ? m[i] : 0, i, h), i in m || (m[i] = u.start, v && (u.end = u.start, u.start = "width" === i || "height" === i ? 1 : 0))
            }
        }

        function Wb(e, t) {
            var r, i, s, o, u;
            for (r in e)
                if (i = n.camelCase(r), s = t[i], o = e[r], n.isArray(o) && (s = o[1], o = e[r] = o[0]), r !== i && (e[i] = o, delete e[r]), u = n.cssHooks[i], u && "expand" in u) {
                    o = u.expand(o), delete e[i];
                    for (r in o) r in e || (e[r] = o[r], t[r] = s)
                } else t[i] = s
        }

        function Xb(e, t, r) {
            var i, s, o = 0,
                u = Qb.length,
                a = n.Deferred().always(function() {
                    delete f.elem
                }),
                f = function() {
                    if (s) return !1;
                    for (var t = Lb || Sb(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, i = 1 - r, o = 0, u = l.tweens.length; u > o; o++) l.tweens[o].run(i);
                    return a.notifyWith(e, [l, i, n]), 1 > i && u ? n : (a.resolveWith(e, [l]), !1)
                },
                l = a.promise({
                    elem: e,
                    props: n.extend({}, t),
                    opts: n.extend(!0, {
                        specialEasing: {}
                    }, r),
                    originalProperties: t,
                    originalOptions: r,
                    startTime: Lb || Sb(),
                    duration: r.duration,
                    tweens: [],
                    createTween: function(t, r) {
                        var i = n.Tween(e, l.opts, t, r, l.opts.specialEasing[t] || l.opts.easing);
                        return l.tweens.push(i), i
                    },
                    stop: function(t) {
                        var n = 0,
                            r = t ? l.tweens.length : 0;
                        if (s) return this;
                        for (s = !0; r > n; n++) l.tweens[n].run(1);
                        return t ? a.resolveWith(e, [l, t]) : a.rejectWith(e, [l, t]), this
                    }
                }),
                c = l.props;
            for (Wb(c, l.opts.specialEasing); u > o; o++)
                if (i = Qb[o].call(l, e, c, l.opts)) return i;
            return n.map(c, Ub, l), n.isFunction(l.opts.start) && l.opts.start.call(e, l), n.fx.timer(n.extend(f, {
                elem: e,
                anim: l,
                queue: l.opts.queue
            })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
        }

        function qc(e) {
            return function(t, r) {
                "string" != typeof t && (r = t, t = "*");
                var i, s = 0,
                    o = t.toLowerCase().match(E) || [];
                if (n.isFunction(r))
                    while (i = o[s++]) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(r)) : (e[i] = e[i] || []).push(r)
            }
        }

        function rc(e, t, r, i) {
            function u(l) {
                var h;
                return s[l] = !0, n.each(e[l] || [], function(e, n) {
                    var a = n(t, r, i);
                    return "string" != typeof a || o || s[a] ? o ? !(h = a) : void 0 : (t.dataTypes.unshift(a), u(a), !1)
                }), h
            }
            var s = {},
                o = e === mc;
            return u(t.dataTypes[0]) || !s["*"] && u("*")
        }

        function sc(e, t) {
            var r, i, s = n.ajaxSettings.flatOptions || {};
            for (r in t) void 0 !== t[r] && ((s[r] ? e : i || (i = {}))[r] = t[r]);
            return i && n.extend(!0, e, i), e
        }

        function tc(e, t, n) {
            var r, i, s, o, u = e.contents,
                a = e.dataTypes;
            while ("*" === a[0]) a.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
            if (r)
                for (i in u)
                    if (u[i] && u[i].test(r)) {
                        a.unshift(i);
                        break
                    }
            if (a[0] in n) s = a[0];
            else {
                for (i in n) {
                    if (!a[0] || e.converters[i + " " + a[0]]) {
                        s = i;
                        break
                    }
                    o || (o = i)
                }
                s = s || o
            }
            return s ? (s !== a[0] && a.unshift(s), n[s]) : void 0
        }

        function uc(e, t, n, r) {
            var i, s, o, u, a, f = {},
                l = e.dataTypes.slice();
            if (l[1])
                for (o in e.converters) f[o.toLowerCase()] = e.converters[o];
            s = l.shift();
            while (s)
                if (e.responseFields[s] && (n[e.responseFields[s]] = t), !a && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), a = s, s = l.shift())
                    if ("*" === s) s = a;
                    else if ("*" !== a && a !== s) {
                if (o = f[a + " " + s] || f["* " + s], !o)
                    for (i in f)
                        if (u = i.split(" "), u[1] === s && (o = f[a + " " + u[0]] || f["* " + u[0]])) {
                            o === !0 ? o = f[i] : f[i] !== !0 && (s = u[0], l.unshift(u[1]));
                            break
                        }
                if (o !== !0)
                    if (o && e["throws"]) t = o(t);
                    else try {
                        t = o(t)
                    } catch (c) {
                        return {
                            state: "parsererror",
                            error: o ? c : "No conversion from " + a + " to " + s
                        }
                    }
            }
            return {
                state: "success",
                data: t
            }
        }

        function Ac(e, t, r, i) {
            var s;
            if (n.isArray(t)) n.each(t, function(t, n) {
                r || wc.test(e) ? i(e, n) : Ac(e + "[" + ("object" == typeof n ? t : "") + "]", n, r, i)
            });
            else if (r || "object" !== n.type(t)) i(e, t);
            else
                for (s in t) Ac(e + "[" + s + "]", t[s], r, i)
        }

        function Jc(e) {
            return n.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
        }
        var c = [],
            d = c.slice,
            e = c.concat,
            f = c.push,
            g = c.indexOf,
            h = {},
            i = h.toString,
            j = h.hasOwnProperty,
            k = {},
            l = a.document,
            m = "2.1.3",
            n = function(e, t) {
                return new n.fn.init(e, t)
            },
            o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            p = /^-ms-/,
            q = /-([\da-z])/gi,
            r = function(e, t) {
                return t.toUpperCase()
            };
        n.fn = n.prototype = {
            jquery: m,
            constructor: n,
            selector: "",
            length: 0,
            toArray: function() {
                return d.call(this)
            },
            get: function(e) {
                return null != e ? 0 > e ? this[e + this.length] : this[e] : d.call(this)
            },
            pushStack: function(e) {
                var t = n.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            },
            each: function(e, t) {
                return n.each(this, e, t)
            },
            map: function(e) {
                return this.pushStack(n.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function() {
                return this.pushStack(d.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (0 > e ? t : 0);
                return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: f,
            sort: c.sort,
            splice: c.splice
        }, n.extend = n.fn.extend = function() {
            var e, t, r, i, s, o, u = arguments[0] || {},
                a = 1,
                f = arguments.length,
                l = !1;
            for ("boolean" == typeof u && (l = u, u = arguments[a] || {}, a++), "object" == typeof u || n.isFunction(u) || (u = {}), a === f && (u = this, a--); f > a; a++)
                if (null != (e = arguments[a]))
                    for (t in e) r = u[t], i = e[t], u !== i && (l && i && (n.isPlainObject(i) || (s = n.isArray(i))) ? (s ? (s = !1, o = r && n.isArray(r) ? r : []) : o = r && n.isPlainObject(r) ? r : {}, u[t] = n.extend(l, o, i)) : void 0 !== i && (u[t] = i));
            return u
        }, n.extend({
            expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isFunction: function(e) {
                return "function" === n.type(e)
            },
            isArray: Array.isArray,
            isWindow: function(e) {
                return null != e && e === e.window
            },
            isNumeric: function(e) {
                return !n.isArray(e) && e - parseFloat(e) + 1 >= 0
            },
            isPlainObject: function(e) {
                return "object" !== n.type(e) || e.nodeType || n.isWindow(e) ? !1 : e.constructor && !j.call(e.constructor.prototype, "isPrototypeOf") ? !1 : !0
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            type: function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? h[i.call(e)] || "object" : typeof e
            },
            globalEval: function(a) {
                var b, c = eval;
                a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = l.createElement("script"), b.text = a, l.head.appendChild(b).parentNode.removeChild(b)) : c(a))
            },
            camelCase: function(e) {
                return e.replace(p, "ms-").replace(q, r)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t, n) {
                var r, i = 0,
                    o =
                    e.length,
                    u = s(e);
                if (n) {
                    if (u) {
                        for (; o > i; i++)
                            if (r = t.apply(e[i], n), r === !1) break
                    } else
                        for (i in e)
                            if (r = t.apply(e[i], n), r === !1) break
                } else if (u) {
                    for (; o > i; i++)
                        if (r = t.call(e[i], i, e[i]), r === !1) break
                } else
                    for (i in e)
                        if (r = t.call(e[i], i, e[i]), r === !1) break; return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(o, "")
            },
            makeArray: function(e, t) {
                var r = t || [];
                return null != e && (s(Object(e)) ? n.merge(r, "string" == typeof e ? [e] : e) : f.call(r, e)), r
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : g.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length, r = 0, i = e.length; n > r; r++) e[i++] = t[r];
                return e.length = i, e
            },
            grep: function(e, t, n) {
                for (var r, i = [], s = 0, o = e.length, u = !n; o > s; s++) r = !t(e[s], s), r !== u && i.push(e[s]);
                return i
            },
            map: function(t, n, r) {
                var i, o = 0,
                    u = t.length,
                    a = s(t),
                    f = [];
                if (a)
                    for (; u > o; o++) i = n(t[o], o, r), null != i && f.push(i);
                else
                    for (o in t) i = n(t[o], o, r), null != i && f.push(i);
                return e.apply([], f)
            },
            guid: 1,
            proxy: function(e, t) {
                var r, i, s;
                return "string" == typeof t && (r = e[t], t = e, e = r), n.isFunction(e) ? (i = d.call(arguments, 2), s = function() {
                    return e.apply(t || this, i.concat(d.call(arguments)))
                }, s.guid = e.guid = e.guid || n.guid++, s) : void 0
            },
            now: Date.now,
            support: k
        }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
            h["[object " + t + "]"] = t.toLowerCase()
        });
        var t = function(e) {
            function ot(e, t, r, i) {
                var s, u, f, l, c, d, g, y, S, x;
                if ((t ? t.ownerDocument || t : E) !== p && h(t), t = t || p, r = r || [], l = t.nodeType, "string" != typeof e || !e || 1 !== l && 9 !== l && 11 !== l) return r;
                if (!i && v) {
                    if (11 !== l && (s = Z.exec(e)))
                        if (f = s[1]) {
                            if (9 === l) {
                                if (u = t.getElementById(f), !u || !u.parentNode) return r;
                                if (u.id === f) return r.push(u), r
                            } else if (t.ownerDocument && (u = t.ownerDocument.getElementById(f)) && b(t, u) && u.id === f) return r.push(u), r
                        } else {
                            if (s[2]) return D.apply(r, t.getElementsByTagName(e)), r;
                            if ((f = s[3]) && n.getElementsByClassName) return D.apply(r, t.getElementsByClassName(f)), r
                        }
                    if (n.qsa && (!m || !m.test(e))) {
                        if (y = g = w, S = t, x = 1 !== l && e, 1 === l && "object" !== t.nodeName.toLowerCase()) {
                            d = o(e), (g = t.getAttribute("id")) ? y = g.replace(tt, "\\$&") : t.setAttribute("id", y), y = "[id='" + y + "'] ", c = d.length;
                            while (c--) d[c] = y + gt(d[c]);
                            S = et.test(e) && vt(t.parentNode) || t, x = d.join(",")
                        }
                        if (x) try {
                            return D.apply(r, S.querySelectorAll(x)), r
                        } catch (T) {} finally {
                            g || t.removeAttribute("id")
                        }
                    }
                }
                return a(e.replace(z, "$1"), t, r, i)
            }

            function ut() {
                function t(n, i) {
                    return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
                }
                var e = [];
                return t
            }

            function at(e) {
                return e[w] = !0, e
            }

            function ft(e) {
                var t = p.createElement("div");
                try {
                    return !!e(t)
                } catch (n) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function lt(e, t) {
                var n = e.split("|"),
                    i = e.length;
                while (i--) r.attrHandle[n[i]] = t
            }

            function ct(e, t) {
                var n = t && e,
                    r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || L) - (~e.sourceIndex || L);
                if (r) return r;
                if (n)
                    while (n = n.nextSibling)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function ht(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }

            function pt(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function dt(e) {
                return at(function(t) {
                    return t = +t, at(function(n, r) {
                        var i, s = e([], n.length, t),
                            o = s.length;
                        while (o--) n[i = s[o]] && (n[i] = !(r[i] = n[i]))
                    })
                })
            }

            function vt(e) {
                return e && "undefined" != typeof e.getElementsByTagName && e
            }

            function mt() {}

            function gt(e) {
                for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
                return r
            }

            function yt(e, t, n) {
                var r = t.dir,
                    i = n && "parentNode" === r,
                    s = x++;
                return t.first ? function(t, n, s) {
                    while (t = t[r])
                        if (1 === t.nodeType || i) return e(t, n, s)
                } : function(t, n, o) {
                    var u, a, f = [S, s];
                    if (o) {
                        while (t = t[r])
                            if ((1 === t.nodeType || i) && e(t, n, o)) return !0
                    } else
                        while (t = t[r])
                            if (1 === t.nodeType || i) {
                                if (a = t[w] || (t[w] = {}), (u = a[r]) && u[0] === S && u[1] === s) return f[2] = u[2];
                                if (a[r] = f, f[2] = e(t, n, o)) return !0
                            }
                }
            }

            function bt(e) {
                return e.length > 1 ? function(t, n, r) {
                    var i = e.length;
                    while (i--)
                        if (!e[i](t, n, r)) return !1;
                    return !0
                } : e[0]
            }

            function wt(e, t, n) {
                for (var r = 0, i = t.length; i > r; r++) ot(e, t[r], n);
                return n
            }

            function Et(e, t, n, r, i) {
                for (var s, o = [], u = 0, a = e.length, f = null != t; a > u; u++)(s = e[u]) && (!n || n(s, r, i)) && (o.push(s), f && t.push(u));
                return o
            }

            function St(e, t, n, r, i, s) {
                return r && !r[w] && (r = St(r)), i && !i[w] && (i = St(i, s)), at(function(s, o, u, a) {
                    var f, l, c, h = [],
                        p = [],
                        d = o.length,
                        v = s || wt(t || "*", u.nodeType ? [u] : u, []),
                        m = !e || !s && t ? v : Et(v, h, e, u, a),
                        g = n ? i || (s ? e : d || r) ? [] : o : m;
                    if (n && n(m, g, u, a), r) {
                        f = Et(g, p), r(f, [], u, a), l = f.length;
                        while (l--)(c = f[l]) && (g[p[l]] = !(m[p[l]] = c))
                    }
                    if (s) {
                        if (i || e) {
                            if (i) {
                                f = [], l = g.length;
                                while (l--)(c = g[l]) && f.push(m[l] = c);
                                i(null, g = [], f, a)
                            }
                            l = g.length;
                            while (l--)(c = g[l]) && (f = i ? H(s, c) : h[l]) > -1 && (s[f] = !(o[f] = c))
                        }
                    } else g = Et(g === o ? g.splice(d, g.length) : g), i ? i(null, o, g, a) : D.apply(o, g)
                })
            }

            function xt(e) {
                for (var t, n, i, s = e.length, o = r.relative[e[0].type], u = o || r.relative[" "], a = o ? 1 : 0, l = yt(function(e) {
                        return e === t
                    }, u, !0), c = yt(function(e) {
                        return H(t, e) > -1
                    }, u, !0), h = [

                        function(e, n, r) {
                            var i = !o && (r || n !== f) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r));
                            return t = null, i
                        }
                    ]; s > a; a++)
                    if (n = r.relative[e[a].type]) h = [yt(bt(h), n)];
                    else {
                        if (n = r.filter[e[a].type].apply(null, e[a].matches), n[w]) {
                            for (i = ++a; s > i; i++)
                                if (r.relative[e[i].type]) break;
                            return St(a > 1 && bt(h), a > 1 && gt(e.slice(0, a - 1).concat({
                                value: " " === e[a - 2].type ? "*" : ""
                            })).replace(z, "$1"), n, i > a && xt(e.slice(a, i)), s > i && xt(e = e.slice(i)), s > i && gt(e))
                        }
                        h.push(n)
                    }
                return bt(h)
            }

            function Tt(e, t) {
                var n = t.length > 0,
                    i = e.length > 0,
                    s = function(s, o, u, a, l) {
                        var c, h, d, v = 0,
                            m = "0",
                            g = s && [],
                            y = [],
                            b = f,
                            w = s || i && r.find.TAG("*", l),
                            E = S += null == b ? 1 : Math.random() || .1,
                            x = w.length;
                        for (l && (f = o !== p && o); m !== x && null != (c = w[m]); m++) {
                            if (i && c) {
                                h = 0;
                                while (d = e[h++])
                                    if (d(c, o, u)) {
                                        a.push(c);
                                        break
                                    }
                                l && (S = E)
                            }
                            n && ((c = !d && c) && v--, s && g.push(c))
                        }
                        if (v += m, n && m !== v) {
                            h = 0;
                            while (d = t[h++]) d(g, y, o, u);
                            if (s) {
                                if (v > 0)
                                    while (m--) g[m] || y[m] || (y[m] = M.call(a));
                                y = Et(y)
                            }
                            D.apply(a, y), l && !s && y.length > 0 && v + t.length > 1 && ot.uniqueSort(a)
                        }
                        return l && (S = E, f = b), g
                    };
                return n ? at(s) : s
            }
            var t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w = "sizzle" + 1 * new Date,
                E = e.document,
                S = 0,
                x = 0,
                T = ut(),
                N = ut(),
                C = ut(),
                k = function(e, t) {
                    return e === t && (c = !0), 0
                },
                L = 1 << 31,
                A = {}.hasOwnProperty,
                O = [],
                M = O.pop,
                _ = O.push,
                D = O.push,
                P = O.slice,
                H = function(e, t) {
                    for (var n = 0, r = e.length; r > n; n++)
                        if (e[n] === t) return n;
                    return -1
                },
                B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                j = "[\\x20\\t\\r\\n\\f]",
                F = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                I = F.replace("w", "w#"),
                q = "\\[" + j + "*(" + F + ")(?:" + j + "*([*^$|!~]?=)" + j + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + j + "*\\]",
                R = ":(" + F + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + q + ")*)|.*)\\)|)",
                U = new RegExp(j + "+", "g"),
                z = new RegExp("^" + j + "+|((?:^|[^\\\\])(?:\\\\.)*)" + j + "+$", "g"),
                W = new RegExp("^" + j + "*," + j + "*"),
                X = new RegExp("^" + j + "*([>+~]|" + j + ")" + j + "*"),
                V = new RegExp("=" + j + "*([^\\]'\"]*?)" + j + "*\\]", "g"),
                $ = new RegExp(R),
                J = new RegExp("^" + I + "$"),
                K = {
                    ID: new RegExp("^#(" + F + ")"),
                    CLASS: new RegExp("^\\.(" + F + ")"),
                    TAG: new RegExp("^(" + F.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + q),
                    PSEUDO: new RegExp("^" + R),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + j + "*(even|odd|(([+-]|)(\\d*)n|)" + j + "*(?:([+-]|)" + j + "*(\\d+)|))" + j + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + B + ")$", "i"),
                    needsContext: new RegExp("^" + j + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + j + "*((?:-\\d)?\\d*)" + j + "*\\)|)(?=[^-]|$)", "i")
                },
                Q = /^(?:input|select|textarea|button)$/i,
                G = /^h\d$/i,
                Y = /^[^{]+\{\s*\[native \w/,
                Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                et = /[+~]/,
                tt = /'|\\/g,
                nt = new RegExp("\\\\([\\da-f]{1,6}" + j + "?|(" + j + ")|.)", "ig"),
                rt = function(e, t, n) {
                    var r = "0x" + t - 65536;
                    return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                },
                it = function() {
                    h()
                };
            try {
                D.apply(O = P.call(E.childNodes), E.childNodes), O[E.childNodes.length].nodeType
            } catch (st) {
                D = {
                    apply: O.length ? function(e, t) {
                        _.apply(e, P.call(t))
                    } : function(e, t) {
                        var n = e.length,
                            r = 0;
                        while (e[n++] = t[r++]);
                        e.length = n - 1
                    }
                }
            }
            n = ot.support = {}, s = ot.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? "HTML" !== t.nodeName : !1
            }, h = ot.setDocument = function(e) {
                var t, i, o = e ? e.ownerDocument || e : E;
                return o !== p && 9 === o.nodeType && o.documentElement ? (p = o, d = o.documentElement, i = o.defaultView, i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", it, !1) : i.attachEvent && i.attachEvent("onunload", it)), v = !s(o), n.attributes = ft(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), n.getElementsByTagName = ft(function(e) {
                    return e.appendChild(o.createComment("")), !e.getElementsByTagName("*").length
                }), n.getElementsByClassName = Y.test(o.getElementsByClassName), n.getById = ft(function(e) {
                    return d.appendChild(e).id = w, !o.getElementsByName || !o.getElementsByName(w).length
                }), n.getById ? (r.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && v) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                }, r.filter.ID = function(e) {
                    var t = e.replace(nt, rt);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete r.find.ID, r.filter.ID = function(e) {
                    var t = e.replace(nt, rt);
                    return function(e) {
                        var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        s = t.getElementsByTagName(e);
                    if ("*" === e) {
                        while (n = s[i++]) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return s
                }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
                    return v ? t.getElementsByClassName(e) : void 0
                }, g = [], m = [], (n.qsa = Y.test(o.querySelectorAll)) && (ft(function(e) {
                    d.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + j + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + j + "*(?:value|" + B + ")"), e.querySelectorAll("[id~=" + w + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + w + "+*").length || m.push(".#.+[+~]")
                }), ft(function(e) {
                    var t = o.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + j + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                })), (n.matchesSelector = Y.test(y = d.matches || d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && ft(function(e) {
                    n.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), g.push("!=", R)
                }), m = m.length && new RegExp(m.join("|")), g = g.length && new RegExp(g.join("|")), t = Y.test(d.compareDocumentPosition), b = t || Y.test(d.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !!r && 1 === r.nodeType && !!(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r))
                } : function(e, t) {
                    if (t)
                        while (t = t.parentNode)
                            if (t === e) return !0;
                    return !1
                }, k = t ? function(e, t) {
                    if (e === t) return c = !0, 0;
                    var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return r ? r : (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & r || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === o || e.ownerDocument === E && b(E, e) ? -1 : t === o || t.ownerDocument === E && b(E, t) ? 1 : l ? H(l, e) - H(l, t) : 0 : 4 & r ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return c = !0, 0;
                    var n, r = 0,
                        i = e.parentNode,
                        s = t.parentNode,
                        u = [e],
                        a = [t];
                    if (!i || !s) return e === o ? -1 : t === o ? 1 : i ? -1 : s ? 1 : l ? H(l, e) - H(l, t) : 0;
                    if (i === s) return ct(e, t);
                    n = e;
                    while (n = n.parentNode) u.unshift(n);
                    n = t;
                    while (n = n.parentNode) a.unshift(n);
                    while (u[r] === a[r]) r++;
                    return r ? ct(u[r], a[r]) : u[r] === E ? -1 : a[r] === E ? 1 : 0
                }, o) : p
            }, ot.matches = function(e, t) {
                return ot(e, null, null, t)
            }, ot.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== p && h(e), t = t.replace(V, "='$1']"), !(!n.matchesSelector || !v || g && g.test(t) || m && m.test(t))) try {
                    var r = y.call(e, t);
                    if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                } catch (i) {}
                return ot(t, p, null, [e]).length > 0
            }, ot.contains = function(e, t) {
                return (e.ownerDocument || e) !== p && h(e), b(e, t)
            }, ot.attr = function(e, t) {
                (e.ownerDocument || e) !== p && h(e);
                var i = r.attrHandle[t.toLowerCase()],
                    s = i && A.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !v) : void 0;
                return void 0 !== s ? s : n.attributes || !v ? e.getAttribute(t) : (s = e.getAttributeNode(t)) && s.specified ? s.value : null
            }, ot.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " +
                    e)
            }, ot.uniqueSort = function(e) {
                var t, r = [],
                    i = 0,
                    s = 0;
                if (c = !n.detectDuplicates, l = !n.sortStable && e.slice(0), e.sort(k), c) {
                    while (t = e[s++]) t === e[s] && (i = r.push(s));
                    while (i--) e.splice(r[i], 1)
                }
                return l = null, e
            }, i = ot.getText = function(e) {
                var t, n = "",
                    r = 0,
                    s = e.nodeType;
                if (s) {
                    if (1 === s || 9 === s || 11 === s) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                    } else if (3 === s || 4 === s) return e.nodeValue
                } else
                    while (t = e[r++]) n += i(t);
                return n
            }, r = ot.selectors = {
                cacheLength: 50,
                createPseudo: at,
                match: K,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(nt, rt), e[3] = (e[3] || e[4] || e[5] || "").replace(nt, rt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ot.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ot.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return K.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && $.test(n) && (t = o(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(nt, rt).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = T[e + " "];
                        return t || (t = new RegExp("(^|" + j + ")" + e + "(" + j + "|$)")) && T(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, t, n) {
                        return function(r) {
                            var i = ot.attr(r, e);
                            return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(U, " ") + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                        }
                    },
                    CHILD: function(e, t, n, r, i) {
                        var s = "nth" !== e.slice(0, 3),
                            o = "last" !== e.slice(-4),
                            u = "of-type" === t;
                        return 1 === r && 0 === i ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, a) {
                            var f, l, c, h, p, d, v = s !== o ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                g = u && t.nodeName.toLowerCase(),
                                y = !a && !u;
                            if (m) {
                                if (s) {
                                    while (v) {
                                        c = t;
                                        while (c = c[v])
                                            if (u ? c.nodeName.toLowerCase() === g : 1 === c.nodeType) return !1;
                                        d = v = "only" === e && !d && "nextSibling"
                                    }
                                    return !0
                                }
                                if (d = [o ? m.firstChild : m.lastChild], o && y) {
                                    l = m[w] || (m[w] = {}), f = l[e] || [], p = f[0] === S && f[1], h = f[0] === S && f[2], c = p && m.childNodes[p];
                                    while (c = ++p && c && c[v] || (h = p = 0) || d.pop())
                                        if (1 === c.nodeType && ++h && c === t) {
                                            l[e] = [S, p, h];
                                            break
                                        }
                                } else if (y && (f = (t[w] || (t[w] = {}))[e]) && f[0] === S) h = f[1];
                                else
                                    while (c = ++p && c && c[v] || (h = p = 0) || d.pop())
                                        if ((u ? c.nodeName.toLowerCase() === g : 1 === c.nodeType) && ++h && (y && ((c[w] || (c[w] = {}))[e] = [S, h]), c === t)) break; return h -= i, h === r || h % r === 0 && h / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || ot.error("unsupported pseudo: " + e);
                        return i[w] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? at(function(e, n) {
                            var r, s = i(e, t),
                                o = s.length;
                            while (o--) r = H(e, s[o]), e[r] = !(n[r] = s[o])
                        }) : function(e) {
                            return i(e, 0, n)
                        }) : i
                    }
                },
                pseudos: {
                    not: at(function(e) {
                        var t = [],
                            n = [],
                            r = u(e.replace(z, "$1"));
                        return r[w] ? at(function(e, t, n, i) {
                            var s, o = r(e, null, i, []),
                                u = e.length;
                            while (u--)(s = o[u]) && (e[u] = !(t[u] = s))
                        }) : function(e, i, s) {
                            return t[0] = e, r(t, null, s, n), t[0] = null, !n.pop()
                        }
                    }),
                    has: at(function(e) {
                        return function(t) {
                            return ot(e, t).length > 0
                        }
                    }),
                    contains: at(function(e) {
                        return e = e.replace(nt, rt),
                            function(t) {
                                return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                            }
                    }),
                    lang: at(function(e) {
                        return J.test(e || "") || ot.error("unsupported lang: " + e), e = e.replace(nt, rt).toLowerCase(),
                            function(t) {
                                var n;
                                do
                                    if (n = v ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                                while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === d
                    },
                    focus: function(e) {
                        return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return e.disabled === !1
                    },
                    disabled: function(e) {
                        return e.disabled === !0
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !r.pseudos.empty(e)
                    },
                    header: function(e) {
                        return G.test(e.nodeName)
                    },
                    input: function(e) {
                        return Q.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: dt(function() {
                        return [0]
                    }),
                    last: dt(function(e, t) {
                        return [t - 1]
                    }),
                    eq: dt(function(e, t, n) {
                        return [0 > n ? n + t : n]
                    }),
                    even: dt(function(e, t) {
                        for (var n = 0; t > n; n += 2) e.push(n);
                        return e
                    }),
                    odd: dt(function(e, t) {
                        for (var n = 1; t > n; n += 2) e.push(n);
                        return e
                    }),
                    lt: dt(function(e, t, n) {
                        for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                        return e
                    }),
                    gt: dt(function(e, t, n) {
                        for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }, r.pseudos.nth = r.pseudos.eq;
            for (t in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) r.pseudos[t] = ht(t);
            for (t in {
                    submit: !0,
                    reset: !0
                }) r.pseudos[t] = pt(t);
            return mt.prototype = r.filters = r.pseudos, r.setFilters = new mt, o = ot.tokenize = function(e, t) {
                var n, i, s, o, u, a, f, l = N[e + " "];
                if (l) return t ? 0 : l.slice(0);
                u = e, a = [], f = r.preFilter;
                while (u) {
                    (!n || (i = W.exec(u))) && (i && (u = u.slice(i[0].length) || u), a.push(s = [])), n = !1, (i = X.exec(u)) && (n = i.shift(), s.push({
                        value: n,
                        type: i[0].replace(z, " ")
                    }), u = u.slice(n.length));
                    for (o in r.filter) !(i = K[o].exec(u)) || f[o] && !(i = f[o](i)) || (n = i.shift(), s.push({
                        value: n,
                        type: o,
                        matches: i
                    }), u = u.slice(n.length));
                    if (!n) break
                }
                return t ? u.length : u ? ot.error(e) : N(e, a).slice(0)
            }, u = ot.compile = function(e, t) {
                var n, r = [],
                    i = [],
                    s = C[e + " "];
                if (!s) {
                    t || (t = o(e)), n = t.length;
                    while (n--) s = xt(t[n]), s[w] ? r.push(s) : i.push(s);
                    s = C(e, Tt(i, r)), s.selector = e
                }
                return s
            }, a = ot.select = function(e, t, i, s) {
                var a, f, l, c, h, p = "function" == typeof e && e,
                    d = !s && o(e = p.selector || e);
                if (i = i || [], 1 === d.length) {
                    if (f = d[0] = d[0].slice(0), f.length > 2 && "ID" === (l = f[0]).type && n.getById && 9 === t.nodeType && v && r.relative[f[1].type]) {
                        if (t = (r.find.ID(l.matches[0].replace(nt, rt), t) || [])[0], !t) return i;
                        p && (t = t.parentNode), e = e.slice(f.shift().value.length)
                    }
                    a = K.needsContext.test(e) ? 0 : f.length;
                    while (a--) {
                        if (l = f[a], r.relative[c = l.type]) break;
                        if ((h = r.find[c]) && (s = h(l.matches[0].replace(nt, rt), et.test(f[0].type) && vt(t.parentNode) || t))) {
                            if (f.splice(a, 1), e = s.length && gt(f), !e) return D.apply(i, s), i;
                            break
                        }
                    }
                }
                return (p || u(e, d))(s, t, !v, i, et.test(e) && vt(t.parentNode) || t), i
            }, n.sortStable = w.split("").sort(k).join("") === w, n.detectDuplicates = !!c, h(), n.sortDetached = ft(function(e) {
                return 1 & e.compareDocumentPosition(p.createElement("div"))
            }), ft(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || lt("type|href|height|width", function(e, t, n) {
                return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), n.attributes && ft(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || lt("value", function(e, t, n) {
                return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
            }), ft(function(e) {
                return null == e.getAttribute("disabled")
            }) || lt(B, function(e, t, n) {
                var r;
                return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }), ot
        }(a);
        n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
        var u = n.expr.match.needsContext,
            v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            w = /^.[^:#\[\.,]*$/;
        n.filter = function(e, t, r) {
            var i = t[0];
            return r && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? n.find.matchesSelector(i, e) ? [i] : [] : n.find.matches(e, n.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }, n.fn.extend({
            find: function(e) {
                var t, r = this.length,
                    i = [],
                    s = this;
                if ("string" != typeof e) return this.pushStack(n(e).filter(function() {
                    for (t = 0; r > t; t++)
                        if (n.contains(s[t], this)) return !0
                }));
                for (t = 0; r > t; t++) n.find(e, s[t], i);
                return i = this.pushStack(r > 1 ? n.unique(i) : i), i.selector = this.selector ? this.selector + " " + e : e, i
            },
            filter: function(e) {
                return this.pushStack(x(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(x(this, e || [], !0))
            },
            is: function(e) {
                return !!x(this, "string" == typeof e && u.test(e) ? n(e) : e || [], !1).length
            }
        });
        var y, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            A = n.fn.init = function(e, t) {
                var r, i;
                if (!e) return this;
                if ("string" == typeof e) {
                    if (r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : z.exec(e), !r || !r[1] && t) return !t || t.jquery ? (t || y).find(e) : this.constructor(t).find(e);
                    if (r[1]) {
                        if (t = t instanceof n ? t[0] : t, n.merge(this, n.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : l, !0)), v.test(r[1]) && n.isPlainObject(t))
                            for (r in t) n.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                        return this
                    }
                    return i = l.getElementById(r[2]), i && i.parentNode && (this.length = 1, this[0] = i), this.context = l, this.selector = e, this
                }
                return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : n.isFunction(e) ? "undefined" != typeof y.ready ? y.ready(e) : e(n) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), n.makeArray(e, this))
            };
        A.prototype = n.fn, y = n(l);
        var B = /^(?:parents|prev(?:Until|All))/,
            C = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        n.extend({
            dir: function(e, t, r) {
                var i = [],
                    s = void 0 !== r;
                while ((e = e[t]) && 9 !== e.nodeType)
                    if (1 === e.nodeType) {
                        if (s && n(e).is(r)) break;
                        i.push(e)
                    }
                return i
            },
            sibling: function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            }
        }), n.fn.extend({
            has: function(e) {
                var t = n(e, this),
                    r = t.length;
                return this.filter(function() {
                    for (var e = 0; r > e; e++)
                        if (n.contains(this, t[e])) return !0
                })
            },
            closest: function(e, t) {
                for (var r, i = 0, s = this.length, o = [], a = u.test(e) || "string" != typeof e ? n(e, t || this.context) : 0; s > i; i++)
                    for (r = this[i]; r && r !== t; r = r.parentNode)
                        if (r.nodeType < 11 && (a ? a.index(r) > -1 : 1 === r.nodeType && n.find.matchesSelector(r, e))) {
                            o.push(r);
                            break
                        }
                return this.pushStack(o.length > 1 ? n.unique(o) : o)
            },
            index: function(e) {
                return e ? "string" == typeof e ? g.call(n(e), this[0]) : g.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(n.unique(n.merge(this.get(), n(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), n.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return n.dir(e, "parentNode")
            },
            parentsUntil: function(e, t, r) {
                return n.dir(e, "parentNode", r)
            },
            next: function(e) {
                return D(e, "nextSibling")
            },
            prev: function(e) {
                return D(e, "previousSibling")
            },
            nextAll: function(e) {
                return n.dir(e, "nextSibling")
            },
            prevAll: function(e) {
                return n.dir(e, "previousSibling")
            },
            nextUntil: function(e, t, r) {
                return n.dir(e, "nextSibling", r)
            },
            prevUntil: function(e, t, r) {
                return n.dir(e, "previousSibling", r)
            },
            siblings: function(e) {
                return n.sibling((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return n.sibling(e.firstChild)
            },
            contents: function(e) {
                return e.contentDocument || n.merge([], e.childNodes)
            }
        }, function(e, t) {
            n.fn[e] = function(r, i) {
                var s = n.map(this, t, r);
                return "Until" !== e.slice(-5) && (i = r), i && "string" == typeof i && (s = n.filter(i, s)), this.length > 1 && (C[e] || n.unique(s), B.test(e) && s.reverse()), this.pushStack(s)
            }
        });
        var E = /\S+/g,
            F = {};
        n.Callbacks = function(e) {
            e = "string" == typeof e ? F[e] || G(e) : n.extend({}, e);
            var t, r, i, s, o, u, a = [],
                f = !e.once && [],
                l = function(n) {
                    for (t = e.memory && n, r = !0, u = s || 0, s = 0, o = a.length, i = !0; a && o > u; u++)
                        if (a[u].apply(n[0], n[1]) === !1 && e.stopOnFalse) {
                            t = !1;
                            break
                        }
                    i = !1, a && (f ? f.length && l(f.shift()) : t ? a = [] : c.disable())
                },
                c = {
                    add: function() {
                        if (a) {
                            var r = a.length;
                            ! function u(t) {
                                n.each(t, function(t, r) {
                                    var i = n.type(r);
                                    "function" === i ? e.unique && c.has(r) || a.push(r) : r && r.length && "string" !== i && u(r)
                                })
                            }(arguments), i ? o = a.length : t && (s = r, l(t))
                        }
                        return this
                    },
                    remove: function() {
                        return a && n.each(arguments, function(e, t) {
                            var r;
                            while ((r = n.inArray(t, a, r)) > -1) a.splice(r, 1), i && (o >= r && o--, u >= r && u--)
                        }), this
                    },
                    has: function(e) {
                        return e ? n.inArray(e, a) > -1 : !!a && !!a.length
                    },
                    empty: function() {
                        return a = [], o = 0, this
                    },
                    disable: function() {
                        return a = f = t = void 0, this
                    },
                    disabled: function() {
                        return !a
                    },
                    lock: function() {
                        return f = void 0, t || c.disable(), this
                    },
                    locked: function() {
                        return !f
                    },
                    fireWith: function(e, t) {
                        return !a || r && !f || (t = t || [], t = [e, t.slice ? t.slice() : t], i ? f.push(t) : l(t)), this
                    },
                    fire: function() {
                        return c.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!r
                    }
                };
            return c
        }, n.extend({
            Deferred: function(e) {
                var t = [
                        ["resolve", "done", n.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", n.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", n.Callbacks("memory")]
                    ],
                    r = "pending",
                    i = {
                        state: function() {
                            return r
                        },
                        always: function() {
                            return s.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var e = arguments;
                            return n.Deferred(function(r) {
                                n.each(t, function(t, o) {
                                    var u = n.isFunction(e[t]) && e[t];
                                    s[o[1]](function() {
                                        var e = u && u.apply(this, arguments);
                                        e && n.isFunction(e.promise) ? e.promise().done(r.resolve).fail(r.reject).progress(r.notify) : r[o[0] + "With"](this === i ? r.promise() : this, u ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? n.extend(e, i) : i
                        }
                    },
                    s = {};
                return i.pipe = i.then, n.each(t, function(e, n) {
                    var o = n[2],
                        u = n[3];
                    i[n[1]] = o.add, u && o.add(function() {
                        r = u
                    }, t[1 ^ e][2].disable, t[2][2].lock), s[n[0]] = function() {
                        return s[n[0] + "With"](this === s ? i : this, arguments), this
                    }, s[n[0] + "With"] = o.fireWith
                }), i.promise(s), e && e.call(s, s), s
            },
            when: function(e) {
                var t = 0,
                    r = d.call(arguments),
                    i = r.length,
                    s = 1 !== i || e && n.isFunction(e.promise) ? i : 0,
                    o = 1 === s ? e : n.Deferred(),
                    u = function(e, t, n) {
                        return function(r) {
                            t[e] = this, n[e] = arguments.length > 1 ? d.call(arguments) : r, n === a ? o.notifyWith(t, n) : --s || o.resolveWith(t, n)
                        }
                    },
                    a, f, l;
                if (i > 1)
                    for (a = new Array(i), f = new Array(i), l = new Array(i); i > t; t++) r[t] && n.isFunction(r[t].promise) ? r[t].promise().done(u(t, l, r)).fail(o.reject).progress(u(t, f, a)) : --s;
                return s || o.resolveWith(l, r), o.promise()
            }
        });
        var H;
        n.fn.ready = function(e) {
            return n.ready.promise().done(e), this
        }, n.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? n.readyWait++ : n.ready(!0)
            },
            ready: function(e) {
                (e === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, e !== !0 && --n.readyWait > 0 || (H.resolveWith(l, [n]), n.fn.triggerHandler && (n(l).triggerHandler("ready"), n(l).off("ready"))))
            }
        }), n.ready.promise = function(e) {
            return H || (H = n.Deferred(), "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", I, !1), a.addEventListener("load", I, !1))), H.promise(e)
        }, n.ready.promise();
        var J = n.access = function(e, t, r, i, s, o, u) {
            var a = 0,
                f = e.length,
                l = null == r;
            if ("object" === n.type(r)) {
                s = !0;
                for (a in r) n.access(e, t, a, r[a], !0, o, u)
            } else if (void 0 !== i && (s = !0, n.isFunction(i) || (u = !0), l && (u ? (t.call(e, i), t = null) : (l = t, t = function(e, t, r) {
                    return l.call(n(e), r)
                })), t))
                for (; f > a; a++) t(e[a], r, u ? i : i.call(e[a], a, t(e[a], r)));
            return s ? e : l ? t.call(e) : f ? t(e[0], r) : o
        };
        n.acceptData = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        }, K.uid = 1, K.accepts = n.acceptData, K.prototype = {
            key: function(e) {
                if (!K.accepts(e)) return 0;
                var t = {},
                    r = e[this.expando];
                if (!r) {
                    r = K.uid++;
                    try {
                        t[this.expando] = {
                            value: r
                        }, Object.defineProperties(e, t)
                    } catch (i) {
                        t[this.expando] = r, n.extend(e, t)
                    }
                }
                return this.cache[r] || (this.cache[r] = {}), r
            },
            set: function(e, t, r) {
                var i, s = this.key(e),
                    o = this.cache[s];
                if ("string" == typeof t) o[t] = r;
                else if (n.isEmptyObject(o)) n.extend(this.cache[s], t);
                else
                    for (i in t) o[i] = t[i];
                return o
            },
            get: function(e, t) {
                var n = this.cache[this.key(e)];
                return void 0 === t ? n : n[t]
            },
            access: function(e, t, r) {
                var i;
                return void 0 === t || t && "string" == typeof t && void 0 === r ? (i = this.get(e, t), void 0 !== i ? i : this.get(e, n.camelCase(t))) : (this.set(e, t, r), void 0 !== r ? r : t)
            },
            remove: function(e, t) {
                var r, i, s, o = this.key(e),
                    u = this.cache[o];
                if (void 0 === t) this.cache[o] = {};
                else {
                    n.isArray(t) ? i = t.concat(t.map(n.camelCase)) : (s = n.camelCase(t), t in u ? i = [t, s] : (i = s, i = i in u ? [i] : i.match(E) || [])), r = i.length;
                    while (r--) delete u[i[r]]
                }
            },
            hasData: function(e) {
                return !n.isEmptyObject(this.cache[e[this.expando]] || {})
            },
            discard: function(e) {
                e[this.expando] && delete this.cache[e[this.expando]]
            }
        };
        var L = new K,
            M = new K,
            N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            O = /([A-Z])/g;
        n.extend({
            hasData: function(e) {
                return M.hasData(e) || L.hasData(e)
            },
            data: function(e, t, n) {
                return M.access(e, t, n)
            },
            removeData: function(e, t) {
                M.remove(e, t)
            },
            _data: function(e, t, n) {
                return L.access(e, t, n)
            },
            _removeData: function(e, t) {
                L.remove(e, t)
            }
        }), n.fn.extend({
            data: function(e, t) {
                var r, i, s, o = this[0],
                    u = o && o.attributes;
                if (void 0 === e) {
                    if (this.length && (s = M.get(o), 1 === o.nodeType && !L.get(o, "hasDataAttrs"))) {
                        r = u.length;
                        while (r--) u[r] && (i = u[r].name, 0 === i.indexOf("data-") && (i = n.camelCase(i.slice(5)), P(o, i, s[i])));
                        L.set(o, "hasDataAttrs", !0)
                    }
                    return s
                }
                return "object" == typeof e ? this.each(function() {
                    M.set(this, e)
                }) : J(this, function(t) {
                    var r, i = n.camelCase(e);
                    if (o && void 0 === t) {
                        if (r = M.get(o, e), void 0 !== r) return r;
                        if (r = M.get(o, i), void 0 !== r) return r;
                        if (r = P(o, i, void 0), void 0 !== r) return r
                    } else this.each(function() {
                        var n = M.get(this, i);
                        M.set(this, i, t), -1 !== e.indexOf("-") && void 0 !== n && M.set(this, e, t)
                    })
                }, null, t, arguments.length > 1, null, !0)
            },
            removeData: function(e) {
                return this.each(function() {
                    M.remove(this, e)
                })
            }
        }), n.extend({
            queue: function(e, t, r) {
                var i;
                return e ? (t = (t || "fx") + "queue", i = L.get(e, t), r && (!i || n.isArray(r) ? i = L.access(e, t, n.makeArray(r)) : i.push(r)), i || []) : void 0
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var r = n.queue(e, t),
                    i = r.length,
                    s = r.shift(),
                    o = n._queueHooks(e, t),
                    u = function() {
                        n.dequeue(e, t)
                    };
                "inprogress" === s && (s = r.shift(), i--), s && ("fx" === t && r.unshift("inprogress"), delete o.stop, s.call(e, u, o)), !i && o && o.empty.fire()
            },
            _queueHooks: function(e, t) {
                var r = t + "queueHooks";
                return L.get(e, r) || L.access(e, r, {
                    empty: n.Callbacks("once memory").add(function() {
                        L.remove(e, [t + "queue", r])
                    })
                })
            }
        }), n.fn.extend({
            queue: function(e, t) {
                var r = 2;
                return "string" != typeof e && (t = e, e = "fx", r--), arguments.length < r ? n.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                    var r = n.queue(this, e, t);
                    n._queueHooks(this, e), "fx" === e && "inprogress" !== r[0] && n.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    n.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var r, i = 1,
                    s = n.Deferred(),
                    o = this,
                    u = this
                    .length,
                    a = function() {
                        --i || s.resolveWith(o, [o])
                    };
                "string" != typeof e && (t = e, e = void 0), e = e || "fx";
                while (u--) r = L.get(o[u], e + "queueHooks"), r && r.empty && (i++, r.empty.add(a));
                return a(), s.promise(t)
            }
        });
        var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            R = ["Top", "Right", "Bottom", "Left"],
            S = function(e, t) {
                return e = t || e, "none" === n.css(e, "display") || !n.contains(e.ownerDocument, e)
            },
            T = /^(?:checkbox|radio)$/i;
        ! function() {
            var e = l.createDocumentFragment(),
                t = e.appendChild(l.createElement("div")),
                n = l.createElement("input");
            n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), k.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
        }();
        var U = "undefined";
        k.focusinBubbles = "onfocusin" in a;
        var V = /^key/,
            W = /^(?:mouse|pointer|contextmenu)|click/,
            X = /^(?:focusinfocus|focusoutblur)$/,
            Y = /^([^.]*)(?:\.(.+)|)$/;
        n.event = {
            global: {},
            add: function(e, t, r, i, s) {
                var o, u, a, f, l, c, h, p, d, v, m, g = L.get(e);
                if (g) {
                    r.handler && (o = r, r = o.handler, s = o.selector), r.guid || (r.guid = n.guid++), (f = g.events) || (f = g.events = {}), (u = g.handle) || (u = g.handle = function(t) {
                        return typeof n !== U && n.event.triggered !== t.type ? n.event.dispatch.apply(e, arguments) : void 0
                    }), t = (t || "").match(E) || [""], l = t.length;
                    while (l--) a = Y.exec(t[l]) || [], d = m = a[1], v = (a[2] || "").split(".").sort(), d && (h = n.event.special[d] || {}, d = (s ? h.delegateType : h.bindType) || d, h = n.event.special[d] || {}, c = n.extend({
                        type: d,
                        origType: m,
                        data: i,
                        handler: r,
                        guid: r.guid,
                        selector: s,
                        needsContext: s && n.expr.match.needsContext.test(s),
                        namespace: v.join(".")
                    }, o), (p = f[d]) || (p = f[d] = [], p.delegateCount = 0, h.setup && h.setup.call(e, i, v, u) !== !1 || e.addEventListener && e.addEventListener(d, u, !1)), h.add && (h.add.call(e, c), c.handler.guid || (c.handler.guid = r.guid)), s ? p.splice(p.delegateCount++, 0, c) : p.push(c), n.event.global[d] = !0)
                }
            },
            remove: function(e, t, r, i, s) {
                var o, u, a, f, l, c, h, p, d, v, m, g = L.hasData(e) && L.get(e);
                if (g && (f = g.events)) {
                    t = (t || "").match(E) || [""], l = t.length;
                    while (l--)
                        if (a = Y.exec(t[l]) || [], d = m = a[1], v = (a[2] || "").split(".").sort(), d) {
                            h = n.event.special[d] || {}, d = (i ? h.delegateType : h.bindType) || d, p = f[d] || [], a = a[2] && new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = p.length;
                            while (o--) c = p[o], !s && m !== c.origType || r && r.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, h.remove && h.remove.call(e, c));
                            u && !p.length && (h.teardown && h.teardown.call(e, v, g.handle) !== !1 || n.removeEvent(e, d, g.handle), delete f[d])
                        } else
                            for (d in f) n.event.remove(e, d + t[l], r, i, !0);
                    n.isEmptyObject(f) && (delete g.handle, L.remove(e, "events"))
                }
            },
            trigger: function(e, t, r, i) {
                var s, o, u, f, c, h, p, d = [r || l],
                    v = j.call(e, "type") ? e.type : e,
                    m = j.call(e, "namespace") ? e.namespace.split(".") : [];
                if (o = u = r = r || l, 3 !== r.nodeType && 8 !== r.nodeType && !X.test(v + n.event.triggered) && (v.indexOf(".") >= 0 && (m = v.split("."), v = m.shift(), m.sort()), c = v.indexOf(":") < 0 && "on" + v, e = e[n.expando] ? e : new n.Event(v, "object" == typeof e && e), e.isTrigger = i ? 2 : 3, e.namespace = m.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = null == t ? [e] : n.makeArray(t, [e]), p = n.event.special[v] || {}, i || !p.trigger || p.trigger.apply(r, t) !== !1)) {
                    if (!i && !p.noBubble && !n.isWindow(r)) {
                        for (f = p.delegateType || v, X.test(f + v) || (o = o.parentNode); o; o = o.parentNode) d.push(o), u = o;
                        u === (r.ownerDocument || l) && d.push(u.defaultView || u.parentWindow || a)
                    }
                    s = 0;
                    while ((o = d[s++]) && !e.isPropagationStopped()) e.type = s > 1 ? f : p.bindType || v, h = (L.get(o, "events") || {})[e.type] && L.get(o, "handle"), h && h.apply(o, t), h = c && o[c], h && h.apply && n.acceptData(o) && (e.result = h.apply(o, t), e.result === !1 && e.preventDefault());
                    return e.type = v, i || e.isDefaultPrevented() || p._default && p._default.apply(d.pop(), t) !== !1 || !n.acceptData(r) || c && n.isFunction(r[v]) && !n.isWindow(r) && (u = r[c], u && (r[c] = null), n.event.triggered = v, r[v](), n.event.triggered = void 0, u && (r[c] = u)), e.result
                }
            },
            dispatch: function(e) {
                e = n.event.fix(e);
                var t, r, i, s, o, u = [],
                    a = d.call(arguments),
                    f = (L.get(this, "events") || {})[e.type] || [],
                    l = n.event.special[e.type] || {};
                if (a[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                    u = n.event.handlers.call(this, e, f), t = 0;
                    while ((s = u[t++]) && !e.isPropagationStopped()) {
                        e.currentTarget = s.elem, r = 0;
                        while ((o = s.handlers[r++]) && !e.isImmediatePropagationStopped())(!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o, e.data = o.data, i = ((n.event.special[o.origType] || {}).handle || o.handler).apply(s.elem, a), void 0 !== i && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()))
                    }
                    return l.postDispatch && l.postDispatch.call(this, e), e.result
                }
            },
            handlers: function(e, t) {
                var r, i, s, o, u = [],
                    a = t.delegateCount,
                    f = e.target;
                if (a && f.nodeType && (!e.button || "click" !== e.type))
                    for (; f !== this; f = f.parentNode || this)
                        if (f.disabled !== !0 || "click" !== e.type) {
                            for (i = [], r = 0; a > r; r++) o = t[r], s = o.selector + " ", void 0 === i[s] && (i[s] = o.needsContext ? n(s, this).index(f) >= 0 : n.find(s, this, null, [f]).length), i[s] && i.push(o);
                            i.length && u.push({
                                elem: f,
                                handlers: i
                            })
                        }
                return a < t.length && u.push({
                    elem: this,
                    handlers: t.slice(a)
                }), u
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, t) {
                    var n, r, i, s = t.button;
                    return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || l, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || void 0 === s || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
                }
            },
            fix: function(e) {
                if (e[n.expando]) return e;
                var t, r, i, s = e.type,
                    o = e,
                    u = this.fixHooks[s];
                u || (this.fixHooks[s] = u = W.test(s) ? this.mouseHooks : V.test(s) ? this.keyHooks : {}), i =
                    u.props ? this.props.concat(u.props) : this.props, e = new n.Event(o), t = i.length;
                while (t--) r = i[t], e[r] = o[r];
                return e.target || (e.target = l), 3 === e.target.nodeType && (e.target = e.target.parentNode), u.filter ? u.filter(e, o) : e
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        return this !== _() && this.focus ? (this.focus(), !1) : void 0
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === _() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0
                    },
                    _default: function(e) {
                        return n.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function(e, t, r, i) {
                var s = n.extend(new n.Event, r, {
                    type: e,
                    isSimulated: !0,
                    originalEvent: {}
                });
                i ? n.event.trigger(s, null, t) : n.event.dispatch.call(t, s), s.isDefaultPrevented() && r.preventDefault()
            }
        }, n.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        }, n.Event = function(e, t) {
            return this instanceof n.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? Z : $) : this.type = e, t && n.extend(this, t), this.timeStamp = e && e.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(e, t)
        }, n.Event.prototype = {
            isDefaultPrevented: $,
            isPropagationStopped: $,
            isImmediatePropagationStopped: $,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = Z, e && e.preventDefault && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = Z, e && e.stopPropagation && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = Z, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, n.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, t) {
            n.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var r, i = this,
                        s = e.relatedTarget,
                        o = e.handleObj;
                    return (!s || s !== i && !n.contains(i, s)) && (e.type = o.origType, r = o.handler.apply(this, arguments), e.type = t), r
                }
            }
        }), k.focusinBubbles || n.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var r = function(e) {
                n.event.simulate(t, e.target, n.event.fix(e), !0)
            };
            n.event.special[t] = {
                setup: function() {
                    var n = this.ownerDocument || this,
                        i = L.access(n, t);
                    i || n.addEventListener(e, r, !0), L.access(n, t, (i || 0) + 1)
                },
                teardown: function() {
                    var n = this.ownerDocument || this,
                        i = L.access(n, t) - 1;
                    i ? L.access(n, t, i) : (n.removeEventListener(e, r, !0), L.remove(n, t))
                }
            }
        }), n.fn.extend({
            on: function(e, t, r, i, s) {
                var o, u;
                if ("object" == typeof e) {
                    "string" != typeof t && (r = r || t, t = void 0);
                    for (u in e) this.on(u, t, r, e[u], s);
                    return this
                }
                if (null == r && null == i ? (i = t, r = t = void 0) : null == i && ("string" == typeof t ? (i = r, r = void 0) : (i = r, r = t, t = void 0)), i === !1) i = $;
                else if (!i) return this;
                return 1 === s && (o = i, i = function(e) {
                    return n().off(e), o.apply(this, arguments)
                }, i.guid = o.guid || (o.guid = n.guid++)), this.each(function() {
                    n.event.add(this, e, i, r, t)
                })
            },
            one: function(e, t, n, r) {
                return this.on(e, t, n, r, 1)
            },
            off: function(e, t, r) {
                var i, s;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj, n(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof e) {
                    for (s in e) this.off(s, t, e[s]);
                    return this
                }
                return (t === !1 || "function" == typeof t) && (r = t, t = void 0), r === !1 && (r = $), this.each(function() {
                    n.event.remove(this, e, r, t)
                })
            },
            trigger: function(e, t) {
                return this.each(function() {
                    n.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var r = this[0];
                return r ? n.event.trigger(e, t, r, !0) : void 0
            }
        });
        var ab = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            bb = /<([\w:]+)/,
            cb = /<|&#?\w+;/,
            db = /<(?:script|style|link)/i,
            eb = /checked\s*(?:[^=]|=\s*.checked.)/i,
            fb = /^$|\/(?:java|ecma)script/i,
            gb = /^true\/(.*)/,
            hb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            ib = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        ib.optgroup = ib.option, ib.tbody = ib.tfoot = ib.colgroup = ib.caption = ib.thead, ib.th = ib.td, n.extend({
            clone: function(e, t, r) {
                var i, s, o, u, a = e.cloneNode(!0),
                    f = n.contains(e.ownerDocument, e);
                if (!(k.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || n.isXMLDoc(e)))
                    for (u = ob(a), o = ob(e), i = 0, s = o.length; s > i; i++) pb(o[i], u[i]);
                if (t)
                    if (r)
                        for (o = o || ob(e), u = u || ob(a), i = 0, s = o.length; s > i; i++) nb(o[i], u[i]);
                    else nb(e, a);
                return u = ob(a, "script"), u.length > 0 && mb(u, !f && ob(e, "script")), a
            },
            buildFragment: function(e, t, r, i) {
                for (var s, o, u, a, f, l, c = t.createDocumentFragment(), h = [], p = 0, d = e.length; d > p; p++)
                    if (s = e[p], s || 0 === s)
                        if ("object" === n.type(s)) n.merge(h, s.nodeType ? [s] : s);
                        else if (cb.test(s)) {
                    o = o || c.appendChild(t.createElement("div")), u = (bb.exec(s) || ["", ""])[1].toLowerCase(), a = ib[u] || ib._default, o.innerHTML = a[1] + s.replace(ab, "<$1></$2>") + a[2], l = a[0];
                    while (l--) o = o.lastChild;
                    n.merge(h, o.childNodes), o = c.firstChild, o.textContent = ""
                } else h.push(t.createTextNode(s));
                c.textContent = "", p = 0;
                while (s = h[p++])
                    if ((!i || -1 === n.inArray(s, i)) && (f = n.contains(s.ownerDocument, s), o = ob(c.appendChild(s), "script"), f && mb(o), r)) {
                        l = 0;
                        while (s = o[l++]) fb.test(s.type || "") && r.push(s)
                    }
                return c
            },
            cleanData: function(e) {
                for (var t, r, i, s, o = n.event.special, u = 0; void 0 !== (r = e[u]); u++) {
                    if (n.acceptData(r) && (s = r[L.expando], s && (t = L.cache[s]))) {
                        if (t.events)
                            for (i in t.events) o[i] ? n.event.remove(r, i) : n.removeEvent(r, i, t.handle);
                        L.cache[s] && delete L.cache[s]
                    }
                    delete M.cache[r[M.expando]]
                }
            }
        }), n.fn.extend({
            text: function(e) {
                return J(this, function(e) {
                    return void 0 === e ? n.text(this) : this.empty().each(function() {
                        (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = jb(this, e);
                        t.appendChild(e)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = jb(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            remove: function(e, t) {
                for (var r, i = e ? n.filter(e, this) : this, s = 0; null != (r = i[s]); s++) t || 1 !== r.nodeType || n.cleanData(ob(r)), r.parentNode && (t && n.contains(r.ownerDocument, r) && mb(ob(r, "script")), r.parentNode.removeChild(r));
                return this
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (n.cleanData(ob(e, !1)), e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                    return n.clone(this, e, t)
                })
            },
            html: function(e) {
                return J(this, function(e) {
                    var t = this[0] || {},
                        r = 0,
                        i = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !db.test(e) && !ib[(bb.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = e.replace(ab, "<$1></$2>");
                        try {
                            for (; i > r; r++) t = this[r] || {}, 1 === t.nodeType && (n.cleanData(ob(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (s) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = arguments[0];
                return this.domManip(arguments, function(t) {
                    e = this.parentNode, n.cleanData(ob(this)), e && e.replaceChild(t, this)
                }), e && (e.length || e.nodeType) ? this : this.remove()
            },
            detach: function(e) {
                return this.remove(e, !0)
            },
            domManip: function(t, r) {
                t = e.apply([], t);
                var i, s, o, u, a, f, l = 0,
                    c = this.length,
                    h = this,
                    p = c - 1,
                    d = t[0],
                    v = n.isFunction(d);
                if (v || c > 1 && "string" == typeof d && !k.checkClone && eb.test(d)) return this.each(function(e) {
                    var n = h.eq(e);
                    v && (t[0] = d.call(this, e, n.html())), n.domManip(t, r)
                });
                if (c && (i = n.buildFragment(t, this[0].ownerDocument, !1, this), s = i.firstChild, 1 === i.childNodes.length && (i = s), s)) {
                    for (o = n.map(ob(i, "script"), kb), u = o.length; c > l; l++) a = i, l !== p && (a = n.clone(a, !0, !0), u && n.merge(o, ob(a, "script"))), r.call(this[l], a, l);
                    if (u)
                        for (f = o[o.length - 1].ownerDocument, n.map(o, lb), l = 0; u > l; l++) a = o[l], fb.test(a.type || "") && !L.access(a, "globalEval") && n.contains(f, a) && (a.src ? n._evalUrl && n._evalUrl(a.src) : n.globalEval(a.textContent.replace(hb, "")))
                }
                return this
            }
        }), n.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            n.fn[e] = function(e) {
                for (var r, i = [], s = n(e), o = s.length - 1, u = 0; o >= u; u++) r = u === o ? this : this.clone(!0), n(s[u])[t](r), f.apply(i, r.get());
                return this.pushStack(i)
            }
        });
        var qb, rb = {},
            ub = /^margin/,
            vb = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"),
            wb = function(e) {
                return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : a.getComputedStyle(e, null)
            };
        ! function() {
            var e, t, r = l.documentElement,
                i = l.createElement("div"),
                s = l.createElement("div");
            if (s.style) {
                s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === s.style.backgroundClip, i.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", i.appendChild(s);

                function o() {
                    s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s.innerHTML = "", r.appendChild(i);
                    var n = a.getComputedStyle(s, null);
                    e = "1%" !== n.top, t = "4px" === n.width, r.removeChild(i)
                }
                a.getComputedStyle && n.extend(k, {
                    pixelPosition: function() {
                        return o(), e
                    },
                    boxSizingReliable: function() {
                        return null == t && o(), t
                    },
                    reliableMarginRight: function() {
                        var e, t = s.appendChild(l.createElement("div"));
                        return t.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", s.style.width = "1px", r.appendChild(i), e = !parseFloat(a.getComputedStyle(t, null).marginRight), r.removeChild(i), s.removeChild(t), e
                    }
                })
            }
        }(), n.swap = function(e, t, n, r) {
            var i, s, o = {};
            for (s in t) o[s] = e.style[s], e.style[s] = t[s];
            i = n.apply(e, r || []);
            for (s in t) e.style[s] = o[s];
            return i
        };
        var zb = /^(none|table(?!-c[ea]).+)/,
            Ab = new RegExp("^(" + Q + ")(.*)$", "i"),
            Bb = new RegExp("^([+-])=(" + Q + ")", "i"),
            Cb = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Db = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            Eb = ["Webkit", "O", "Moz", "ms"];
        n.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = xb(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": "cssFloat"
            },
            style: function(e, t, r, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var s, o, u, a = n.camelCase(t),
                        f = e.style;
                    return t = n.cssProps[a] || (n.cssProps[a] = Fb(f, a)), u = n.cssHooks[t] || n.cssHooks[a], void 0 === r ? u && "get" in u && void 0 !== (s = u.get(e, !1, i)) ? s : f[t] : (o = typeof r, "string" === o && (s = Bb.exec(r)) && (r = (s[1] + 1) * s[2] + parseFloat(n.css(e, t)), o = "number"), null != r && r === r && ("number" !== o || n.cssNumber[a] || (r += "px"), k.clearCloneStyle || "" !== r || 0 !== t.indexOf("background") || (f[t] = "inherit"), u && "set" in u && void 0 === (r = u.set(e, r, i)) || (f[t] = r)), void 0)
                }
            },
            css: function(e, t, r, i) {
                var s, o, u, a = n.camelCase(t);
                return t = n.cssProps[a] || (n.cssProps[a] = Fb(e.style, a)), u = n.cssHooks[t] || n.cssHooks[a], u && "get" in u && (s = u.get(e, !0, r)), void 0 === s && (s = xb(e, t, i)), "normal" === s && t in Db && (s = Db[t]), "" === r || r ? (o = parseFloat(s), r === !0 || n.isNumeric(o) ? o || 0 : s) : s
            }
        }), n.each(["height", "width"], function(e, t) {
            n.cssHooks[t] = {
                get: function(e, r, i) {
                    return r ? zb.test(n.css(e, "display")) && 0 === e.offsetWidth ? n.swap(e, Cb, function() {
                        return Ib(e, t, i)
                    }) : Ib(e, t, i) : void 0
                },
                set: function(e, r, i) {
                    var s = i && wb(e);
                    return Gb(e, r, i ? Hb(e, t, i, "border-box" === n.css(e, "boxSizing", !1, s), s) : 0)
                }
            }
        }), n.cssHooks.marginRight = yb(k.reliableMarginRight, function(e, t) {
            return t ? n.swap(e, {
                display: "inline-block"
            }, xb, [e, "marginRight"]) : void 0
        }), n.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            n.cssHooks[e + t] = {
                expand: function(n) {
                    for (var r = 0, i = {}, s = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + R[r] + t] = s[r] || s[r - 2] || s[0];
                    return i
                }
            }, ub.test(e) || (n.cssHooks[e + t].set = Gb)
        }), n.fn.extend({
            css: function(e, t) {
                return J(this, function(e, t, r) {
                    var i, s, o = {},
                        u = 0;
                    if (n.isArray(t)) {
                        for (i = wb(e), s = t.length; s > u; u++) o[t[u]] = n.css(e, t[u], !1, i);
                        return o
                    }
                    return void 0 !== r ? n.style(e, t, r) : n.css(e, t)
                }, e, t, arguments.length > 1)
            },
            show: function() {
                return Jb(this, !0)
            },
            hide: function() {
                return Jb(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    S(this) ? n(this).show() : n(this).hide()
                })
            }
        }), n.Tween = Kb, Kb.prototype = {
            constructor: Kb,
            init: function(e, t, r, i, s, o) {
                this.elem = e, this.prop = r, this.easing = s || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (n.cssNumber[r] ? "" : "px")
            },
            cur: function() {
                var e = Kb.propHooks[this.prop];
                return e && e.get ? e.get(this) : Kb.propHooks._default.get(this)
            },
            run: function(e) {
                var t, r = Kb.propHooks[this.prop];
                return this.pos = t = this.options.duration ? n.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), r && r.set ? r.set(this) : Kb.propHooks._default.set(this), this
            }
        }, Kb.prototype.init.prototype = Kb.prototype, Kb.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = n.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
                },
                set: function(e) {
                    n.fx.step[e.prop] ? n.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[n.cssProps[e.prop]] || n.cssHooks[e.prop]) ? n.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                }
            }
        }, Kb.propHooks.scrollTop = Kb.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, n.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }
        }, n.fx = Kb.prototype.init, n.fx.step = {};
        var Lb, Mb, Nb = /^(?:toggle|show|hide)$/,
            Ob = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"),
            Pb = /queueHooks$/,
            Qb = [Vb],
            Rb = {
                "*": [

                    function(e, t) {
                        var r = this.createTween(e, t),
                            i = r.cur(),
                            s = Ob.exec(t),
                            o = s && s[3] || (n.cssNumber[e] ? "" : "px"),
                            u = (n.cssNumber[e] || "px" !== o && +i) && Ob.exec(n.css(r.elem, e)),
                            a = 1,
                            f = 20;
                        if (u && u[3] !== o) {
                            o = o || u[3], s = s || [], u = +i || 1;
                            do a = a || ".5", u /= a, n.style(r.elem, e, u + o); while (a !== (a = r.cur() / i) && 1 !== a && --f)
                        }
                        return s && (u = r.start = +u || +i || 0, r.unit = o, r.end = s[1] ? u + (s[1] + 1) * s[2] : +s[2]), r
                    }
                ]
            };
        n.Animation = n.extend(Xb, {
                tweener: function(e, t) {
                    n.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                    for (var r, i = 0, s = e.length; s > i; i++) r = e[i], Rb[r] = Rb[r] || [], Rb[r].unshift(t)
                },
                prefilter: function(e, t) {
                    t ? Qb.unshift(e) : Qb.push(e)
                }
            }), n.speed = function(e, t, r) {
                var i = e && "object" == typeof e ? n.extend({}, e) : {
                    complete: r || !r && t || n.isFunction(e) && e,
                    duration: e,
                    easing: r && t || t && !n.isFunction(t) && t
                };
                return i.duration = n.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in n.fx.speeds ? n.fx.speeds[i.duration] : n.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                    n.isFunction(i.old) && i.old.call(this), i.queue && n.dequeue(this, i.queue)
                }, i
            }, n.fn.extend({
                fadeTo: function(e, t, n, r) {
                    return this.filter(S).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, r)
                },
                animate: function(e, t, r, i) {
                    var s = n.isEmptyObject(e),
                        o = n.speed(t, r, i),
                        u = function() {
                            var t = Xb(this, n.extend({}, e), o);
                            (s || L.get(this, "finish")) && t.stop(!0)
                        };
                    return u.finish = u, s || o.queue === !1 ? this.each(u) : this.queue(o.queue, u)
                },
                stop: function(e, t, r) {
                    var i = function(e) {
                        var t = e.stop;
                        delete e.stop, t(r)
                    };
                    return "string" != typeof e && (r = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                        var t = !0,
                            s = null != e && e + "queueHooks",
                            o = n.timers,
                            u = L.get(this);
                        if (s) u[s] && u[s].stop && i(u[s]);
                        else
                            for (s in u) u[s] && u[s].stop && Pb.test(s) && i(u[s]);
                        for (s = o.length; s--;) o[s].elem !== this || null != e && o[s].queue !== e || (o[s].anim.stop(r), t = !1, o.splice(s, 1));
                        (t || !r) && n.dequeue(this, e)
                    })
                },
                finish: function(e) {
                    return e !== !1 && (e = e || "fx"), this.each(function() {
                        var t, r = L.get(this),
                            i = r[e + "queue"],
                            s = r[e + "queueHooks"],
                            o = n.timers,
                            u = i ? i.length : 0;
                        for (r.finish = !0, n.queue(this, e, []), s && s.stop && s.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                        for (t = 0; u > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                        delete r.finish
                    })
                }
            }), n.each(["toggle", "show", "hide"], function(e, t) {
                var r = n.fn[t];
                n.fn[t] = function(e, n, i) {
                    return null == e || "boolean" == typeof e ? r.apply(this, arguments) : this.animate(Tb(t, !0), e, n, i)
                }
            }), n.each({
                slideDown: Tb("show"),
                slideUp: Tb("hide"),
                slideToggle: Tb("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(e, t) {
                n.fn[e] = function(e, n, r) {
                    return this.animate(t, e, n, r)
                }
            }), n.timers = [], n.fx.tick = function() {
                var e, t = 0,
                    r = n.timers;
                for (Lb = n.now(); t < r.length; t++) e = r[t], e() || r[t] !== e || r.splice(t--, 1);
                r.length || n.fx.stop(), Lb = void 0
            }, n.fx.timer = function(e) {
                n.timers.push(e), e() ? n.fx.start() : n.timers.pop()
            }, n.fx.interval = 13, n.fx.start = function() {
                Mb || (Mb = setInterval(n.fx.tick, n.fx.interval))
            }, n.fx.stop = function() {
                clearInterval(Mb), Mb = null
            }, n.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, n.fn.delay = function(e, t) {
                return e = n.fx ? n.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                    var r = setTimeout(t, e);
                    n.stop = function() {
                        clearTimeout(r)
                    }
                })
            },
            function() {
                var e = l.createElement("input"),
                    t = l.createElement("select"),
                    n = t.appendChild(l.createElement("option"));
                e.type = "checkbox", k.checkOn = "" !== e.value, k.optSelected = n.selected, t.disabled = !0, k.optDisabled = !n.disabled, e = l.createElement("input"), e.value = "t", e.type = "radio", k.radioValue = "t" === e.value
            }();
        var Yb, Zb, $b = n.expr.attrHandle;
        n.fn.extend({
            attr: function(e, t) {
                return J(this, n.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    n.removeAttr(this, e)
                })
            }
        }), n.extend({
            attr: function(e, t, r) {
                var i, s, o = e.nodeType;
                if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === U ? n.prop(e, t, r) : (1 === o && n.isXMLDoc(e) || (t = t.toLowerCase(), i = n.attrHooks[t] || (n.expr.match.bool.test(t) ? Zb : Yb)), void 0 === r ? i && "get" in i && null !== (s = i.get(e, t)) ? s : (s = n.find.attr(e, t), null == s ? void 0 : s) : null !== r ? i && "set" in i && void 0 !== (s = i.set(e, r, t)) ? s : (e.setAttribute(t, r + ""), r) : void n.removeAttr(e, t))
            },
            removeAttr: function(
                e, t) {
                var r, i, s = 0,
                    o = t && t.match(E);
                if (o && 1 === e.nodeType)
                    while (r = o[s++]) i = n.propFix[r] || r, n.expr.match.bool.test(r) && (e[i] = !1), e.removeAttribute(r)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!k.radioValue && "radio" === t && n.nodeName(e, "input")) {
                            var r = e.value;
                            return e.setAttribute("type", t), r && (e.value = r), t
                        }
                    }
                }
            }
        }), Zb = {
            set: function(e, t, r) {
                return t === !1 ? n.removeAttr(e, r) : e.setAttribute(r, r), r
            }
        }, n.each(n.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var r = $b[t] || n.find.attr;
            $b[t] = function(e, t, n) {
                var i, s;
                return n || (s = $b[t], $b[t] = i, i = null != r(e, t, n) ? t.toLowerCase() : null, $b[t] = s), i
            }
        });
        var _b = /^(?:input|select|textarea|button)$/i;
        n.fn.extend({
            prop: function(e, t) {
                return J(this, n.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[n.propFix[e] || e]
                })
            }
        }), n.extend({
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function(e, t, r) {
                var i, s, o, u = e.nodeType;
                if (e && 3 !== u && 8 !== u && 2 !== u) return o = 1 !== u || !n.isXMLDoc(e), o && (t = n.propFix[t] || t, s = n.propHooks[t]), void 0 !== r ? s && "set" in s && void 0 !== (i = s.set(e, r, t)) ? i : e[t] = r : s && "get" in s && null !== (i = s.get(e, t)) ? i : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        return e.hasAttribute("tabindex") || _b.test(e.nodeName) || e.href ? e.tabIndex : -1
                    }
                }
            }
        }), k.optSelected || (n.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            }
        }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            n.propFix[this.toLowerCase()] = this
        });
        var ac = /[\t\r\n\f]/g;
        n.fn.extend({
            addClass: function(e) {
                var t, r, i, s, o, u, a = "string" == typeof e && e,
                    f = 0,
                    l = this.length;
                if (n.isFunction(e)) return this.each(function(t) {
                    n(this).addClass(e.call(this, t, this.className))
                });
                if (a)
                    for (t = (e || "").match(E) || []; l > f; f++)
                        if (r = this[f], i = 1 === r.nodeType && (r.className ? (" " + r.className + " ").replace(ac, " ") : " ")) {
                            o = 0;
                            while (s = t[o++]) i.indexOf(" " + s + " ") < 0 && (i += s + " ");
                            u = n.trim(i), r.className !== u && (r.className = u)
                        }
                return this
            },
            removeClass: function(e) {
                var t, r, i, s, o, u, a = 0 === arguments.length || "string" == typeof e && e,
                    f = 0,
                    l = this.length;
                if (n.isFunction(e)) return this.each(function(t) {
                    n(this).removeClass(e.call(this, t, this.className))
                });
                if (a)
                    for (t = (e || "").match(E) || []; l > f; f++)
                        if (r = this[f], i = 1 === r.nodeType && (r.className ? (" " + r.className + " ").replace(ac, " ") : "")) {
                            o = 0;
                            while (s = t[o++])
                                while (i.indexOf(" " + s + " ") >= 0) i = i.replace(" " + s + " ", " ");
                            u = e ? n.trim(i) : "", r.className !== u && (r.className = u)
                        }
                return this
            },
            toggleClass: function(e, t) {
                var r = typeof e;
                return "boolean" == typeof t && "string" === r ? t ? this.addClass(e) : this.removeClass(e) : this.each(n.isFunction(e) ? function(r) {
                    n(this).toggleClass(e.call(this, r, this.className, t), t)
                } : function() {
                    if ("string" === r) {
                        var t, i = 0,
                            s = n(this),
                            o = e.match(E) || [];
                        while (t = o[i++]) s.hasClass(t) ? s.removeClass(t) : s.addClass(t)
                    } else(r === U || "boolean" === r) && (this.className && L.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : L.get(this, "__className__") || "")
                })
            },
            hasClass: function(e) {
                for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                    if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(ac, " ").indexOf(t) >= 0) return !0;
                return !1
            }
        });
        var bc = /\r/g;
        n.fn.extend({
            val: function(e) {
                var t, r, i, s = this[0];
                if (arguments.length) return i = n.isFunction(e), this.each(function(r) {
                    var s;
                    1 === this.nodeType && (s = i ? e.call(this, r, n(this).val()) : e, null == s ? s = "" : "number" == typeof s ? s += "" : n.isArray(s) && (s = n.map(s, function(e) {
                        return null == e ? "" : e + ""
                    })), t = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, s, "value") || (this.value = s))
                });
                if (s) return t = n.valHooks[s.type] || n.valHooks[s.nodeName.toLowerCase()], t && "get" in t && void 0 !== (r = t.get(s, "value")) ? r : (r = s.value, "string" == typeof r ? r.replace(bc, "") : null == r ? "" : r)
            }
        }), n.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = n.find.attr(e, "value");
                        return null != t ? t : n.trim(n.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, r, i = e.options, s = e.selectedIndex, o = "select-one" === e.type || 0 > s, u = o ? null : [], a = o ? s + 1 : i.length, f = 0 > s ? a : o ? s : 0; a > f; f++)
                            if (r = i[f], !(!r.selected && f !== s || (k.optDisabled ? r.disabled : null !== r.getAttribute("disabled")) || r.parentNode.disabled && n.nodeName(r.parentNode, "optgroup"))) {
                                if (t = n(r).val(), o) return t;
                                u.push(t)
                            }
                        return u
                    },
                    set: function(e, t) {
                        var r, i, s = e.options,
                            o = n.makeArray(t),
                            u = s.length;
                        while (u--) i = s[u], (i.selected = n.inArray(i.value, o) >= 0) && (r = !0);
                        return r || (e.selectedIndex = -1), o
                    }
                }
            }
        }), n.each(["radio", "checkbox"], function() {
            n.valHooks[this] = {
                set: function(e, t) {
                    return n.isArray(t) ? e.checked = n.inArray(n(e).val(), t) >= 0 : void 0
                }
            }, k.checkOn || (n.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
            n.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), n.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            },
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        });
        var cc = n.now(),
            dc = /\?/;
        n.parseJSON = function(e) {
            return JSON.parse(e + "")
        }, n.parseXML = function(e) {
            var t, r;
            if (!e || "string" != typeof e) return null;
            try {
                r = new DOMParser, t = r.parseFromString(e, "text/xml")
            } catch (i) {
                t = void 0
            }
            return (!t || t.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + e), t
        };
        var ec = /#.*$/,
            fc = /([?&])_=[^&]*/,
            gc = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            hc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            ic = /^(?:GET|HEAD)$/,
            jc = /^\/\//,
            kc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            lc = {},
            mc = {},
            nc = "*/".concat("*"),
            oc = a.location.href,
            pc = kc.exec(oc.toLowerCase()) || [];
        n.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: oc,
                type: "GET",
                isLocal: hc.test(pc[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": nc,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": n.parseJSON,
                    "text xml": n.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? sc(sc(e, n.ajaxSettings), t) : sc(n.ajaxSettings, e)
            },
            ajaxPrefilter: qc(lc),
            ajaxTransport: qc(mc),
            ajax: function(e, t) {
                function T(e, t, o, a) {
                    var l, g, y, w, E, x = t;
                    2 !== b && (b = 2, u && clearTimeout(u), r = void 0, s = a || "", S.readyState = e > 0 ? 4 : 0, l = e >= 200 && 300 > e || 304 === e, o && (w = tc(c, S, o)), w = uc(c, w, S, l), l ? (c.ifModified && (E = S.getResponseHeader("Last-Modified"), E && (n.lastModified[i] = E), E = S.getResponseHeader("etag"), E && (n.etag[i] = E)), 204 === e || "HEAD" === c.type ? x = "nocontent" : 304 === e ? x = "notmodified" : (x = w.state, g = w.data, y = w.error, l = !y)) : (y = x, (e || !x) && (x = "error", 0 > e && (e = 0))), S.status = e, S.statusText = (t || x) + "", l ? d.resolveWith(h, [g, x, S]) : d.rejectWith(h, [S, x, y]), S.statusCode(m), m = void 0, f && p.trigger(l ? "ajaxSuccess" : "ajaxError", [S, c, l ? g : y]), v.fireWith(h, [S, x]), f && (p.trigger("ajaxComplete", [S, c]), --n.active || n.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var r, i, s, o, u, a, f, l, c = n.ajaxSetup({}, t),
                    h = c.context || c,
                    p = c.context && (h.nodeType || h.jquery) ? n(h) : n.event,
                    d = n.Deferred(),
                    v = n.Callbacks("once memory"),
                    m = c.statusCode || {},
                    g = {},
                    y = {},
                    b = 0,
                    w = "canceled",
                    S = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (2 === b) {
                                if (!o) {
                                    o = {};
                                    while (t = gc.exec(s)) o[t[1].toLowerCase()] = t[2]
                                }
                                t = o[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return 2 === b ? s : null
                        },
                        setRequestHeader: function(e, t) {
                            var n = e.toLowerCase();
                            return b || (e = y[n] = y[n] || e, g[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return b || (c.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (2 > b)
                                    for (t in e) m[t] = [m[t], e[t]];
                                else S.always(e[S.status]);
                            return this
                        },
                        abort: function(e) {
                            var t = e || w;
                            return r && r.abort(t), T(0, t), this
                        }
                    };
                if (d.promise(S).complete = v.add, S.success = S.done, S.error = S.fail, c.url = ((e || c.url || oc) + "").replace(ec, "").replace(jc, pc[1] + "//"), c.type = t.method || t.type || c.method || c.type, c.dataTypes = n.trim(c.dataType || "*").toLowerCase().match(E) || [""], null == c.crossDomain && (a = kc.exec(c.url.toLowerCase()), c.crossDomain = !(!a || a[1] === pc[1] && a[2] === pc[2] && (a[3] || ("http:" === a[1] ? "80" : "443")) === (pc[3] || ("http:" === pc[1] ? "80" : "443")))), c.data && c.processData && "string" != typeof c.data && (c.data = n.param(c.data, c.traditional)), rc(lc, c, t, S), 2 === b) return S;
                f = n.event && c.global, f && 0 === n.active++ && n.event.trigger("ajaxStart"), c.type = c.type.toUpperCase(), c.hasContent = !ic.test(c.type), i = c.url, c.hasContent || (c.data && (i = c.url += (dc.test(i) ? "&" : "?") + c.data, delete c.data), c.cache === !1 && (c.url = fc.test(i) ? i.replace(fc, "$1_=" + cc++) : i + (dc.test(i) ? "&" : "?") + "_=" + cc++)), c.ifModified && (n.lastModified[i] && S.setRequestHeader("If-Modified-Since", n.lastModified[i]), n.etag[i] && S.setRequestHeader("If-None-Match", n.etag[i])), (c.data && c.hasContent && c.contentType !== !1 || t.contentType) && S.setRequestHeader("Content-Type", c.contentType), S.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + ("*" !== c.dataTypes[0] ? ", " + nc + "; q=0.01" : "") : c.accepts["*"]);
                for (l in c.headers) S.setRequestHeader(l, c.headers[l]);
                if (!c.beforeSend || c.beforeSend.call(h, S, c) !== !1 && 2 !== b) {
                    w = "abort";
                    for (l in {
                            success: 1,
                            error: 1,
                            complete: 1
                        }) S[l](c[l]);
                    if (r = rc(mc, c, t, S)) {
                        S.readyState = 1, f && p.trigger("ajaxSend", [S, c]), c.async && c.timeout > 0 && (u = setTimeout(function() {
                            S.abort("timeout")
                        }, c.timeout));
                        try {
                            b = 1, r.send(g, T)
                        } catch (x) {
                            if (!(2 > b)) throw x;
                            T(-1, x)
                        }
                    } else T(-1, "No Transport");
                    return S
                }
                return S.abort()
            },
            getJSON: function(e, t, r) {
                return n.get(e, t, r, "json")
            },
            getScript: function(e, t) {
                return n.get(e, void 0, t, "script")
            }
        }), n.each(["get", "post"], function(e, t) {
            n[t] = function(e, r, i, s) {
                return n.isFunction(r) && (s = s || i, i = r, r = void 0), n.ajax({
                    url: e,
                    type: t,
                    dataType: s,
                    data: r,
                    success: i
                })
            }
        }), n._evalUrl = function(e) {
            return n.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }, n.fn.extend({
            wrapAll: function(e) {
                var t;
                return n.isFunction(e) ? this.each(function(t) {
                    n(this).wrapAll(e.call(this, t))
                }) : (this[0] && (t = n(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    var e = this;
                    while (e.firstElementChild) e = e.firstElementChild;
                    return e
                }).append(this)), this)
            },
            wrapInner: function(e) {
                return this.each(n.isFunction(e) ? function(t) {
                    n(this).wrapInner(e.call(this, t))
                } : function() {
                    var t = n(this),
                        r = t.contents();
                    r.length ? r.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = n.isFunction(e);
                return this.each(function(r) {
                    n(this).wrapAll(t ? e.call(this, r) : e)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
                }).end()
            }
        }), n.expr.filters.hidden = function(e) {
            return e.offsetWidth <= 0 && e.offsetHeight <= 0
        }, n.expr.filters.visible = function(e) {
            return !n.expr.filters.hidden(e)
        };
        var vc = /%20/g,
            wc = /\[\]$/,
            xc = /\r?\n/g,
            yc = /^(?:submit|button|image|reset|file)$/i,
            zc = /^(?:input|select|textarea|keygen)/i;
        n.param = function(e, t) {
            var r, i = [],
                s = function(e, t) {
                    t = n.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            if (void 0 === t && (t = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(e) || e.jquery && !n.isPlainObject(e)) n.each(e, function() {
                s(this.name, this.value)
            });
            else
                for (r in e) Ac(r, e[r], t, s);
            return i.join("&").replace(vc, "+")
        }, n.fn.extend({
            serialize: function() {
                return n.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = n.prop(this, "elements");
                    return e ? n.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !n(this).is(":disabled") && zc.test(this.nodeName) && !yc.test(e) && (this.checked || !T.test(e))
                }).map(function(e, t) {
                    var r = n(this).val();
                    return null == r ? null : n.isArray(r) ? n.map(r, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(xc, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: r.replace(xc, "\r\n")
                    }
                }).get()
            }
        }), n.ajaxSettings.xhr = function() {
            try {
                return new XMLHttpRequest
            } catch (e) {}
        };
        var Bc = 0,
            Cc = {},
            Dc = {
                0: 200,
                1223: 204
            },
            Ec = n.ajaxSettings.xhr();
        a.attachEvent && a.attachEvent("onunload", function() {
            for (var e in Cc) Cc[e]()
        }), k.cors = !!Ec && "withCredentials" in Ec, k.ajax = Ec = !!Ec, n.ajaxTransport(function(e) {
            var t;
            return k.cors || Ec && !e.crossDomain ? {
                send: function(n, r) {
                    var i, s = e.xhr(),
                        o = ++Bc;
                    if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (i in e.xhrFields) s[i] = e.xhrFields[i];
                    e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (i in n) s.setRequestHeader(i, n[i]);
                    t = function(e) {
                        return function() {
                            t && (delete Cc[o], t = s.onload = s.onerror = null, "abort" === e ? s.abort() : "error" === e ? r(s.status, s.statusText) : r(Dc[s.status] || s.status, s.statusText, "string" == typeof s.responseText ? {
                                text: s.responseText
                            } : void 0, s.getAllResponseHeaders()))
                        }
                    }, s.onload = t(), s.onerror = t("error"), t = Cc[o] = t("abort");
                    try {
                        s.send(e.hasContent && e.data || null)
                    } catch (u) {
                        if (t) throw u
                    }
                },
                abort: function() {
                    t && t()
                }
            } : void 0
        }), n.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(e) {
                    return n.globalEval(e), e
                }
            }
        }), n.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
        }), n.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var t, r;
                return {
                    send: function(i, s) {
                        t = n("<script>").prop({
                            async: !0,
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", r = function(e) {
                            t.remove(), r = null, e && s("error" === e.type ? 404 : 200, e.type)
                        }), l.head.appendChild(t[0])
                    },
                    abort: function() {
                        r && r()
                    }
                }
            }
        });
        var Fc = [],
            Gc = /(=)\?(?=&|$)|\?\?/;
        n.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Fc.pop() || n.expando + "_" + cc++;
                return this[e] = !0, e
            }
        }), n.ajaxPrefilter("json jsonp", function(e, t, r) {
            var i, s, o, u = e.jsonp !== !1 && (Gc.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Gc.test(e.data) && "data");
            return u || "jsonp" === e.dataTypes[0] ? (i = e.jsonpCallback = n.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, u ? e[u] = e[u].replace(Gc, "$1" + i) : e.jsonp !== !1 && (e.url += (dc.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
                return o || n.error(i + " was not called"), o[0]
            }, e.dataTypes[0] = "json", s = a[i], a[i] = function() {
                o = arguments
            }, r.always(function() {
                a[i] = s, e[i] && (e.jsonpCallback = t.jsonpCallback, Fc.push(i)), o && n.isFunction(s) && s(o[0]), o = s = void 0
            }), "script") : void 0
        }), n.parseHTML = function(e, t, r) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (r = t, t = !1), t = t || l;
            var i = v.exec(e),
                s = !r && [];
            return i ? [t.createElement(i[1])] : (i = n.buildFragment([e], t, s), s && s.length && n(s).remove(), n.merge([], i.childNodes))
        };
        var Hc = n.fn.load;
        n.fn.load = function(e, t, r) {
            if ("string" != typeof e && Hc) return Hc.apply(this, arguments);
            var i, s, o, u = this,
                a = e.indexOf(" ");
            return a >= 0 && (i = n.trim(e.slice(a)), e = e.slice(0, a)), n.isFunction(t) ? (r = t, t = void 0) : t && "object" == typeof t && (s = "POST"), u.length > 0 && n.ajax({
                url: e,
                type: s,
                dataType: "html",
                data: t
            }).done(function(e) {
                o = arguments, u.html(i ? n("<div>").append(n.parseHTML(e)).find(i) : e)
            }).complete(r && function(e, t) {
                u.each(r, o || [e.responseText, t, e])
            }), this
        }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            n.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), n.expr.filters.animated = function(e) {
            return n.grep(n.timers, function(t) {
                return e === t.elem
            }).length
        };
        var Ic = a.document.documentElement;
        n.offset = {
            setOffset: function(e, t, r) {
                var i, s, o, u, a, f, l, c = n.css(e, "position"),
                    h = n(e),
                    p = {};
                "static" === c && (e.style.position = "relative"), a = h.offset(), o = n.css(e, "top"), f = n.css(e, "left"), l = ("absolute" === c || "fixed" === c) && (o + f).indexOf("auto") > -1, l ? (i = h.position(), u = i.top, s = i.left) : (u = parseFloat(o) || 0, s = parseFloat(f) || 0), n.isFunction(t) && (t = t.call(e, r, a)), null != t.top && (p.top = t.top - a.top + u), null != t.left && (p.left = t.left - a.left + s), "using" in t ? t.using.call(e, p) : h.css(p)
            }
        }, n.fn.extend({
            offset: function(e) {
                if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                    n.offset.setOffset(this, e, t)
                });
                var t, r, i = this[0],
                    s = {
                        top: 0,
                        left: 0
                    },
                    o = i && i.ownerDocument;
                if (o) return t = o.documentElement, n.contains(t, i) ? (typeof i.getBoundingClientRect !== U && (s = i.getBoundingClientRect()), r = Jc(o), {
                    top: s.top + r.pageYOffset - t.clientTop,
                    left: s.left + r.pageXOffset - t.clientLeft
                }) : s
            },
            position: function() {
                if (this[0]) {
                    var e, t, r = this[0],
                        i = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === n.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), n.nodeName(e[0], "html") || (i = e.offset()), i.top += n.css(e[0], "borderTopWidth", !0), i.left += n.css(e[0], "borderLeftWidth", !0)), {
                        top: t.top - i.top - n.css(r, "marginTop", !0),
                        left: t.left - i.left - n.css(r, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    var e = this.offsetParent || Ic;
                    while (e && !n.nodeName(e, "html") && "static" === n.css(e, "position")) e = e.offsetParent;
                    return e || Ic
                })
            }
        }), n.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, t) {
            var r = "pageYOffset" === t;
            n.fn[e] = function(n) {
                return J(this, function(e, n, i) {
                    var s = Jc(e);
                    return void 0 === i ? s ? s[t] : e[n] : void(s ? s.scrollTo(r ? a.pageXOffset : i, r ? i : a.pageYOffset) : e[n] = i)
                }, e, n, arguments.length, null)
            }
        }), n.each(["top", "left"], function(e, t) {
            n.cssHooks[t] = yb(k.pixelPosition, function(e, r) {
                return r ? (r = xb(e, t), vb.test(r) ? n(e).position()[t] + "px" : r) : void 0
            })
        }), n.each({
            Height: "height",
            Width: "width"
        }, function(e, t) {
            n.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function(r, i) {
                n.fn[i] = function(i, s) {
                    var o = arguments.length && (r || "boolean" != typeof i),
                        u = r || (i === !0 || s === !0 ? "margin" : "border");
                    return J(this, function(t, r, i) {
                        var s;
                        return n.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (s = t.documentElement, Math.max(t.body["scroll" + e], s["scroll" + e], t.body["offset" + e], s["offset" + e], s["client" + e])) : void 0 === i ? n.css(t, r, u) : n.style(t, r, i, u)
                    }, t, o ? i : void 0, o, null)
                }
            })
        }), n.fn.size = function() {
            return this.length
        }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return n
        });
        var Kc = a.jQuery,
            Lc = a.$;
        return n.noConflict = function(
            e) {
            return a.$ === n && (a.$ = Lc), e && a.jQuery === n && (a.jQuery = Kc), n
        }, typeof b === U && (a.jQuery = a.$ = n), n
    }),
    /*! jQuery v2.1.3 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
    function(e) {
        var t = {
            url: !1,
            callback: !1,
            target: !1,
            duration: 120,
            on: "mouseover",
            touch: !0,
            onZoomIn: !1,
            onZoomOut: !1,
            magnify: 1
        };
        e.zoom = function(t, n, r, i) {
            var s, o, u, a, f, l, c, h = e(t),
                p = h.css("position"),
                d = e(n);
            return h.css("position", /(absolute|fixed)/.test(p) ? p : "relative"), h.css("overflow", "hidden"), r.style.width = r.style.height = "", e(r).addClass("zoomImg").css({
                position: "absolute",
                top: 0,
                left: 0,
                opacity: 0,
                width: r.width * i,
                height: r.height * i,
                border: "none",
                maxWidth: "none",
                maxHeight: "none"
            }).appendTo(t), {
                init: function() {
                    o = h.outerWidth(), s = h.outerHeight(), n === h[0] ? (a = o, u = s) : (a = d.outerWidth(), u = d.outerHeight()), f = (r.width - o) / a, l = (r.height - s) / u, c = d.offset()
                },
                move: function(e) {
                    var t = e.pageX - c.left,
                        n = e.pageY - c.top;
                    n = Math.max(Math.min(n, u), 0), t = Math.max(Math.min(t, a), 0), r.style.left = t * -f + "px", r.style.top = n * -l + "px"
                }
            }
        }, e.fn.zoom = function(n) {
            return this.each(function() {
                var r = e.extend({}, t, n || {}),
                    i = r.target || this,
                    s = this,
                    o = e(s),
                    u = e(i),
                    a = document.createElement("img"),
                    f = e(a),
                    l = "mousemove.zoom",
                    c = !1,
                    h = !1,
                    p;
                if (!r.url) {
                    p = o.find("img"), p[0] && (r.url = p.data("src") || p.attr("src"));
                    if (!r.url) return
                }(function() {
                    var e = u.css("position"),
                        t = u.css("overflow");
                    o.one("zoom.destroy", function() {
                        o.off(".zoom"), u.css("position", e), u.css("overflow", t), f.remove()
                    })
                })(), a.onload = function() {
                    function n(n) {
                        t.init(), t.move(n), f.stop().fadeTo(e.support.opacity ? r.duration : 0, 1, e.isFunction(r.onZoomIn) ? r.onZoomIn.call(a) : !1)
                    }

                    function u() {
                        f.stop().fadeTo(r.duration, 0, e.isFunction(r.onZoomOut) ? r.onZoomOut.call(a) : !1)
                    }
                    var t = e.zoom(i, s, a, r.magnify);
                    r.on === "grab" ? o.on("mousedown.zoom", function(r) {
                        r.which === 1 && (e(document).one("mouseup.zoom", function() {
                            u(), e(document).off(l, t.move)
                        }), n(r), e(document).on(l, t.move), r.preventDefault())
                    }) : r.on === "click" ? o.on("click.zoom", function(r) {
                        if (c) return;
                        return c = !0, n(r), e(document).on(l, t.move), e(document).one("click.zoom", function() {
                            u(), c = !1, e(document).off(l, t.move)
                        }), !1
                    }) : r.on === "toggle" ? o.on("click.zoom", function(e) {
                        c ? u() : n(e), c = !c
                    }) : r.on === "mouseover" && (t.init(), o.on("mouseenter.zoom", n).on("mouseleave.zoom", u).on(l, t.move)), r.touch && o.on("touchstart.zoom", function(e) {
                        e.preventDefault(), h ? (h = !1, u()) : (h = !0, n(e.originalEvent.touches[0] || e.originalEvent.changedTouches[0]))
                    }).on("touchmove.zoom", function(e) {
                        e.preventDefault(), t.move(e.originalEvent.touches[0] || e.originalEvent.changedTouches[0])
                    }), e.isFunction(r.callback) && r.callback.call(a)
                }, a.src = r.url
            })
        }, e.fn.zoom.defaults = t
    }(window.jQuery),
    function() {
        function e(e) {
            function t(t, n, r, i, s, o) {
                for (; s >= 0 && o > s; s += e) {
                    var u = i ? i[s] : s;
                    r = n(r, t[u], u, t)
                }
                return r
            }
            return function(n, r, i, s) {
                r = b(r, s, 4);
                var o = !C(n) && y.keys(n),
                    u = (o || n).length,
                    a = e > 0 ? 0 : u - 1;
                return arguments.length < 3 && (i = n[o ? o[a] : a], a += e), t(n, r, i, o, a, u)
            }
        }

        function t(e) {
            return function(t, n, r) {
                n = w(n, r);
                for (var i = N(t), s = e > 0 ? 0 : i - 1; s >= 0 && i > s; s += e)
                    if (n(t[s], s, t)) return s;
                return -1
            }
        }

        function n(e, t, n) {
            return function(r, i, s) {
                var o = 0,
                    u = N(r);
                if ("number" == typeof s) e > 0 ? o = s >= 0 ? s : Math.max(s + u, o) : u = s >= 0 ? Math.min(s + 1, u) : s + u + 1;
                else if (n && s && u) return s = n(r, i), r[s] === i ? s : -1;
                if (i !== i) return s = t(l.call(r, o, u), y.isNaN), s >= 0 ? s + o : -1;
                for (s = e > 0 ? o : u - 1; s >= 0 && u > s; s += e)
                    if (r[s] === i) return s;
                return -1
            }
        }

        function r(e, t) {
            var n = M.length,
                r = e.constructor,
                i = y.isFunction(r) && r.prototype || u,
                s = "constructor";
            for (y.has(e, s) && !y.contains(t, s) && t.push(s); n--;) s = M[n], s in e && e[s] !== i[s] && !y.contains(t, s) && t.push(s)
        }
        var i = this,
            s = i._,
            o = Array.prototype,
            u = Object.prototype,
            a = Function.prototype,
            f = o.push,
            l = o.slice,
            c = u.toString,
            h = u.hasOwnProperty,
            p = Array.isArray,
            d = Object.keys,
            v = a.bind,
            m = Object.create,
            g = function() {},
            y = function(e) {
                return e instanceof y ? e : this instanceof y ? void(this._wrapped = e) : new y(e)
            };
        "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = y), exports._ = y) : i._ = y, y.VERSION = "1.8.3";
        var b = function(e, t, n) {
                if (t === void 0) return e;
                switch (null == n ? 3 : n) {
                    case 1:
                        return function(n) {
                            return e.call(t, n)
                        };
                    case 2:
                        return function(n, r) {
                            return e.call(t, n, r)
                        };
                    case 3:
                        return function(n, r, i) {
                            return e.call(t, n, r, i)
                        };
                    case 4:
                        return function(n, r, i, s) {
                            return e.call(t, n, r, i, s)
                        }
                }
                return function() {
                    return e.apply(t, arguments)
                }
            },
            w = function(e, t, n) {
                return null == e ? y.identity : y.isFunction(e) ? b(e, t, n) : y.isObject(e) ? y.matcher(e) : y.property(e)
            };
        y.iteratee = function(e, t) {
            return w(e, t, 1 / 0)
        };
        var E = function(e, t) {
                return function(n) {
                    var r = arguments.length;
                    if (2 > r || null == n) return n;
                    for (var i = 1; r > i; i++)
                        for (var s = arguments[i], o = e(s), u = o.length, a = 0; u > a; a++) {
                            var f = o[a];
                            t && n[f] !== void 0 || (n[f] = s[f])
                        }
                    return n
                }
            },
            S = function(e) {
                if (!y.isObject(e)) return {};
                if (m) return m(e);
                g.prototype = e;
                var t = new g;
                return g.prototype = null, t
            },
            x = function(e) {
                return function(t) {
                    return null == t ? void 0 : t[e]
                }
            },
            T = Math.pow(2, 53) - 1,
            N = x("length"),
            C = function(e) {
                var t = N(e);
                return "number" == typeof t && t >= 0 && T >= t
            };
        y.each = y.forEach = function(e, t, n) {
            t = b(t, n);
            var r, i;
            if (C(e))
                for (r = 0, i = e.length; i > r; r++) t(e[r], r, e);
            else {
                var s = y.keys(e);
                for (r = 0, i = s.length; i > r; r++) t(e[s[r]], s[r], e)
            }
            return e
        }, y.map = y.collect = function(e, t, n) {
            t = w(t, n);
            for (var r = !C(e) && y.keys(e), i = (r || e).length, s = Array(i), o = 0; i > o; o++) {
                var u = r ? r[o] : o;
                s[o] = t(e[u], u, e)
            }
            return s
        }, y.reduce = y.foldl = y.inject = e(1), y.reduceRight = y.foldr = e(-1), y.find = y.detect = function(e, t, n) {
            var r;
            return r = C(e) ? y.findIndex(e, t, n) : y.findKey(e, t, n), r !== void 0 && r !== -1 ? e[r] : void 0
        }, y.filter = y.select = function(e, t, n) {
            var r = [];
            return t = w(t, n), y.each(e, function(e, n, i) {
                t(e, n, i) && r.push(e)
            }), r
        }, y.reject = function(e, t, n) {
            return y.filter(e, y.negate(w(t)), n)
        }, y.every = y.all = function(e, t, n) {
            t = w(t, n);
            for (var r = !C(e) && y.keys(e), i = (r || e).length, s = 0; i > s; s++) {
                var o = r ? r[s] : s;
                if (!t(e[o], o, e)) return !1
            }
            return !0
        }, y.some = y.any = function(e, t, n) {
            t = w(t, n);
            for (var r = !C(e) && y.keys(e), i = (r || e).length, s = 0; i > s; s++) {
                var o = r ? r[s] : s;
                if (t(e[o], o, e)) return !0
            }
            return !1
        }, y.contains = y.includes = y.include = function(e, t, n, r) {
            return C(e) || (e = y.values(e)), ("number" != typeof n || r) && (n = 0), y.indexOf(e, t, n) >= 0
        }, y.invoke = function(e, t) {
            var n = l.call(arguments, 2),
                r = y.isFunction(t);
            return y.map(e, function(e) {
                var i = r ? t : e[t];
                return null == i ? i : i.apply(e, n)
            })
        }, y.pluck = function(e, t) {
            return y.map(e, y.property(t))
        }, y.where = function(e, t) {
            return y.filter(e, y.matcher(t))
        }, y.findWhere = function(e, t) {
            return y.find(e, y.matcher(t))
        }, y.max = function(e, t, n) {
            var r, i, s = -1 / 0,
                o = -1 / 0;
            if (null == t && null != e) {
                e = C(e) ? e : y.values(e);
                for (var u = 0, a = e.length; a > u; u++) r = e[u], r > s && (s = r)
            } else t = w(t, n), y.each(e, function(e, n, r) {
                i = t(e, n, r), (i > o || i === -1 / 0 && s === -1 / 0) && (s = e, o = i)
            });
            return s
        }, y.min = function(e, t, n) {
            var r, i, s = 1 / 0,
                o = 1 / 0;
            if (null == t && null != e) {
                e = C(e) ? e : y.values(e);
                for (var u = 0, a = e.length; a > u; u++) r = e[u], s > r && (s = r)
            } else t = w(t, n), y.each(e, function(e, n, r) {
                i = t(e, n, r), (o > i || 1 / 0 === i && 1 / 0 === s) && (s = e, o = i)
            });
            return s
        }, y.shuffle = function(e) {
            for (var t, n = C(e) ? e : y.values(e), r = n.length, i = Array(r), s = 0; r > s; s++) t = y.random(0, s), t !== s && (i[s] = i[t]), i[t] = n[s];
            return i
        }, y.sample = function(e, t, n) {
            return null == t || n ? (C(e) || (e = y.values(e)), e[y.random(e.length - 1)]) : y.shuffle(e).slice(0, Math.max(0, t))
        }, y.sortBy = function(e, t, n) {
            return t = w(t, n), y.pluck(y.map(e, function(e, n, r) {
                return {
                    value: e,
                    index: n,
                    criteria: t(e, n, r)
                }
            }).sort(function(e, t) {
                var n = e.criteria,
                    r = t.criteria;
                if (n !== r) {
                    if (n > r || n === void 0) return 1;
                    if (r > n || r === void 0) return -1
                }
                return e.index - t.index
            }), "value")
        };
        var k = function(e) {
            return function(t, n, r) {
                var i = {};
                return n = w(n, r), y.each(t, function(r, s) {
                    var o = n(r, s, t);
                    e(i, r, o)
                }), i
            }
        };
        y.groupBy = k(function(e, t, n) {
            y.has(e, n) ? e[n].push(t) : e[n] = [t]
        }), y.indexBy = k(function(e, t, n) {
            e[n] = t
        }), y.countBy = k(function(e, t, n) {
            y.has(e, n) ? e[n]++ : e[n] = 1
        }), y.toArray = function(e) {
            return e ? y.isArray(e) ? l.call(e) : C(e) ? y.map(e, y.identity) : y.values(e) : []
        }, y.size = function(e) {
            return null == e ? 0 : C(e) ? e.length : y.keys(e).length
        }, y.partition = function(e, t, n) {
            t = w(t, n);
            var r = [],
                i = [];
            return y.each(e, function(e, n, s) {
                (t(e, n, s) ? r : i).push(e)
            }), [r, i]
        }, y.first = y.head = y.take = function(e, t, n) {
            return null == e ? void 0 : null == t || n ? e[0] : y.initial(e, e.length - t)
        }, y.initial = function(e, t, n) {
            return l.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t)))
        }, y.last = function(e, t, n) {
            return null == e ? void 0 : null == t || n ? e[e.length - 1] : y.rest(e, Math.max(0, e.length - t))
        }, y.rest = y.tail = y.drop = function(e, t, n) {
            return l.call(e, null == t || n ? 1 : t)
        }, y.compact = function(e) {
            return y.filter(e, y.identity)
        };
        var L = function(e, t, n, r) {
            for (var i = [], s = 0, o = r || 0, u = N(e); u > o; o++) {
                var a = e[o];
                if (C(a) && (y.isArray(a) || y.isArguments(a))) {
                    t || (a = L(a, t, n));
                    var f = 0,
                        l = a.length;
                    for (i.length += l; l > f;) i[s++] = a[f++]
                } else n || (i[s++] = a)
            }
            return i
        };
        y.flatten = function(e, t) {
            return L(e, t, !1)
        }, y.without = function(e) {
            return y.difference(e, l.call(arguments, 1))
        }, y.uniq = y.unique = function(e, t, n, r) {
            y.isBoolean(t) || (r = n, n = t, t = !1), null != n && (n = w(n, r));
            for (var i = [], s = [], o = 0, u = N(e); u > o; o++) {
                var a = e[o],
                    f = n ? n(a, o, e) : a;
                t ? (o && s === f || i.push(a), s = f) : n ? y.contains(s, f) || (s.push(f), i.push(a)) : y.contains(i, a) || i.push(a)
            }
            return i
        }, y.union = function() {
            return y.uniq(L(arguments, !0, !0))
        }, y.intersection = function(e) {
            for (var t = [], n = arguments.length, r = 0, i = N(e); i > r; r++) {
                var s = e[r];
                if (!y.contains(t, s)) {
                    for (var o = 1; n > o && y.contains(arguments[o], s); o++);
                    o === n && t.push(s)
                }
            }
            return t
        }, y.difference = function(e) {
            var t = L(arguments, !0, !0, 1);
            return y.filter(e, function(e) {
                return !y.contains(t, e)
            })
        }, y.zip = function() {
            return y.unzip(arguments)
        }, y.unzip = function(e) {
            for (var t = e && y.max(e, N).length || 0, n = Array(t), r = 0; t > r; r++) n[r] = y.pluck(e, r);
            return n
        }, y.object = function(e, t) {
            for (var n = {}, r = 0, i = N(e); i > r; r++) t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
            return n
        }, y.findIndex = t(1), y.findLastIndex = t(-1), y.sortedIndex = function(e, t, n, r) {
            n = w(n, r, 1);
            for (var i = n(t), s = 0, o = N(e); o > s;) {
                var u = Math.floor((s + o) / 2);
                n(e[u]) < i ? s = u + 1 : o = u
            }
            return s
        }, y.indexOf = n(1, y.findIndex, y.sortedIndex), y.lastIndexOf = n(-1, y.findLastIndex), y.range = function(e, t, n) {
            null == t && (t = e || 0, e = 0), n = n || 1;
            for (var r = Math.max(Math.ceil((t - e) / n), 0), i = Array(r), s = 0; r > s; s++, e += n) i[s] = e;
            return i
        };
        var A = function(e, t, n, r, i) {
            if (r instanceof t) {
                var s = S(e.prototype),
                    o = e.apply(s, i);
                return y.isObject(o) ? o : s
            }
            return e.apply(n, i)
        };
        y.bind = function(e, t) {
            if (v && e.bind === v) return v.apply(e, l.call(arguments, 1));
            if (!y.isFunction(e)) throw new TypeError("Bind must be called on a function");
            var n = l.call(arguments, 2),
                r = function() {
                    return A(e, r, t, this, n.concat(l.call(arguments)))
                };
            return r
        }, y.partial = function(e) {
            var t = l.call(arguments, 1),
                n = function() {
                    for (var r = 0, i = t.length, s = Array(i), o = 0; i > o; o++) s[o] = t[o] === y ? arguments[r++] : t[o];
                    for (; r < arguments.length;) s.push(arguments[r++]);
                    return A(e, n, this, this, s)
                };
            return n
        }, y.bindAll = function(e) {
            var t, n, r = arguments.length;
            if (1 >= r) throw new Error("bindAll must be passed function names");
            for (t = 1; r > t; t++) n = arguments[t], e[n] = y.bind(e[n], e);
            return e
        }, y.memoize = function(e, t) {
            var n = function(r) {
                var i = n.cache,
                    s = "" + (t ? t.apply(this, arguments) : r);
                return y.has(i, s) || (i[s] = e.apply(this, arguments)), i[s]
            };
            return n.cache = {}, n
        }, y.delay = function(e, t) {
            var n = l.call(arguments, 2);
            return setTimeout(function() {
                return e.apply(null, n)
            }, t)
        }, y.defer = y.partial(y.delay, y, 1), y.throttle = function(e, t, n) {
            var r, i, s, o = null,
                u = 0;
            n || (n = {});
            var a = function() {
                u = n.leading === !1 ? 0 : y.now(), o = null, s = e.apply(r, i), o || (r = i = null)
            };
            return function() {
                var f = y.now();
                u || n.leading !== !1 || (u = f);
                var l = t - (f - u);
                return r = this, i = arguments, 0 >= l || l > t ? (o && (clearTimeout(o), o = null), u = f, s = e.apply(r, i), o || (r = i = null)) : o || n.trailing === !1 || (o = setTimeout(a, l)), s
            }
        }, y.debounce = function(e, t, n) {
            var r, i, s, o, u, a = function() {
                var f = y.now() - o;
                t > f && f >= 0 ? r = setTimeout(a, t - f) : (r = null, n || (u = e.apply(s, i), r || (s = i = null)))
            };
            return function() {
                s = this, i = arguments, o = y.now();
                var f = n && !r;
                return r || (r = setTimeout(a, t)), f && (u = e.apply(s, i), s = i = null), u
            }
        }, y.wrap = function(e, t) {
            return y.partial(t, e)
        }, y.negate = function(e) {
            return function() {
                return !e.apply(this, arguments)
            }
        }, y.compose = function() {
            var e = arguments,
                t = e.length - 1;
            return function() {
                for (var n = t, r = e[t].apply(this, arguments); n--;) r = e[n].call(this, r);
                return r
            }
        }, y.after = function(e, t) {
            return function() {
                return --e < 1 ? t.apply(this, arguments) : void 0
            }
        }, y.before = function(e, t) {
            var n;
            return function() {
                return --e > 0 && (n = t.apply(this, arguments)), 1 >= e && (t = null), n
            }
        }, y.once = y.partial(y.before, 2);
        var O = !{
                toString: null
            }.propertyIsEnumerable("toString"),
            M = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
        y.keys = function(e) {
            if (!y.isObject(e)) return [];
            if (d) return d(e);
            var t = [];
            for (var n in e) y.has(e, n) && t.push(n);
            return O && r(e, t), t
        }, y.allKeys = function(e) {
            if (!y.isObject(e)) return [];
            var t = [];
            for (var n in e) t.push(n);
            return O && r(e, t), t
        }, y.values = function(e) {
            for (var t = y.keys(e), n = t.length, r = Array(n), i = 0; n > i; i++) r[i] = e[t[i]];
            return r
        }, y.mapObject = function(e, t, n) {
            t = w(t, n);
            for (var r, i = y.keys(e), s = i.length, o = {}, u = 0; s > u; u++) r = i[u], o[r] = t(e[r], r, e);
            return o
        }, y.pairs = function(e) {
            for (var t = y.keys(e), n = t.length, r = Array(n), i = 0; n > i; i++) r[i] = [t[i], e[t[i]]];
            return r
        }, y.invert = function(e) {
            for (var t = {}, n = y.keys(e), r = 0, i = n.length; i > r; r++) t[e[n[r]]] = n[r];
            return t
        }, y.functions = y.methods = function(e) {
            var t = [];
            for (var n in e) y.isFunction(e[n]) && t.push(n);
            return t.sort()
        }, y.extend = E(y.allKeys), y.extendOwn = y.assign = E(y.keys), y.findKey = function(e, t, n) {
            t = w(t, n);
            for (var r, i = y.keys(e), s = 0, o = i.length; o > s; s++)
                if (r = i[s], t(e[r], r, e)) return r
        }, y.pick = function(e, t, n) {
            var r, i, s = {},
                o = e;
            if (null == o) return s;
            y.isFunction(t) ? (i = y.allKeys(o), r = b(t, n)) : (i = L(arguments, !1, !1, 1), r = function(e, t, n) {
                return t in n
            }, o = Object(o));
            for (var u = 0, a = i.length; a > u; u++) {
                var f = i[u],
                    l = o[f];
                r(l, f, o) && (s[f] = l)
            }
            return s
        }, y.omit = function(e, t, n) {
            if (y.isFunction(t)) t = y.negate(t);
            else {
                var r = y.map(L(arguments, !1, !1, 1), String);
                t = function(e, t) {
                    return !y.contains(r, t)
                }
            }
            return y.pick(e, t, n)
        }, y.defaults = E(y.allKeys, !0), y.create = function(e, t) {
            var n = S(e);
            return t && y.extendOwn(n, t), n
        }, y.clone = function(e) {
            return y.isObject(e) ? y.isArray(e) ? e.slice() : y.extend({}, e) : e
        }, y.tap = function(e, t) {
            return t(e), e
        }, y.isMatch = function(e, t) {
            var n = y.keys(t),
                r = n.length;
            if (null == e) return !r;
            for (var i = Object(e), s = 0; r > s; s++) {
                var o = n[s];
                if (t[o] !== i[o] || !(o in i)) return !1
            }
            return !0
        };
        var _ = function(e, t, n, r) {
            if (e === t) return 0 !== e || 1 / e === 1 / t;
            if (null == e || null == t) return e === t;
            e instanceof y && (e = e._wrapped), t instanceof y && (t = t._wrapped);
            var i = c.call(e);
            if (i !== c.call(t)) return !1;
            switch (i) {
                case "[object RegExp]":
                case "[object String]":
                    return "" + e == "" + t;
                case "[object Number]":
                    return +e !== +e ? +t !== +t : 0 === +e ? 1 / +e === 1 / t : +e === +t;
                case "[object Date]":
                case "[object Boolean]":
                    return +e === +t
            }
            var s = "[object Array]" === i;
            if (!s) {
                if ("object" != typeof e || "object" != typeof t) return !1;
                var o = e.constructor,
                    u = t.constructor;
                if (o !== u && !(y.isFunction(o) && o instanceof o && y.isFunction(u) && u instanceof u) && "constructor" in e && "constructor" in t) return !1
            }
            n = n || [], r = r || [];
            for (var a = n.length; a--;)
                if (n[a] === e) return r[a] === t;
            if (n.push(e), r.push(t), s) {
                if (a = e.length, a !== t.length) return !1;
                for (; a--;)
                    if (!_(e[a], t[a], n, r)) return !1
            } else {
                var f, l = y.keys(e);
                if (a = l.length, y.keys(t).length !== a) return !1;
                for (; a--;)
                    if (f = l[a], !y.has(t, f) || !_(e[f], t[f], n, r)) return !1
            }
            return n.pop(), r.pop(), !0
        };
        y.isEqual = function(e, t) {
            return _(e, t)
        }, y.isEmpty = function(e) {
            return null == e ? !0 : C(e) && (y.isArray(e) || y.isString(e) || y.isArguments(e)) ? 0 === e.length : 0 === y.keys(e).length
        }, y.isElement = function(e) {
            return !!e && 1 === e.nodeType
        }, y.isArray = p || function(e) {
            return "[object Array]" === c.call(e)
        }, y.isObject = function(e) {
            var t = typeof e;
            return "function" === t || "object" === t && !!e
        }, y.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(e) {
            y["is" + e] = function(t) {
                return c.call(t) === "[object " + e + "]"
            }
        }), y.isArguments(arguments) || (y.isArguments = function(e) {
            return y.has(e, "callee")
        }), "function" != typeof / . / && "object" != typeof Int8Array && (y.isFunction = function(e) {
            return "function" == typeof e || !1
        }), y.isFinite = function(e) {
            return isFinite(e) && !isNaN(parseFloat(e))
        }, y.isNaN = function(e) {
            return y.isNumber(e) && e !== +e
        }, y.isBoolean = function(e) {
            return e === !0 || e === !1 || "[object Boolean]" === c.call(e)
        }, y.isNull = function(e) {
            return null === e
        }, y.isUndefined = function(e) {
            return e === void 0
        }, y.has = function(e, t) {
            return null != e && h.call(e, t)
        }, y.noConflict = function() {
            return i._ = s, this
        }, y.identity = function(e) {
            return e
        }, y.constant = function(e) {
            return function() {
                return e
            }
        }, y.noop = function() {}, y.property = x, y.propertyOf = function(e) {
            return null == e ? function() {} : function(t) {
                return e[t]
            }
        }, y.matcher = y.matches = function(e) {
            return e = y.extendOwn({}, e),
                function(t) {
                    return y.isMatch(t, e)
                }
        }, y.times = function(e, t, n) {
            var r = Array(Math.max(0, e));
            t = b(t, n, 1);
            for (var i = 0; e > i; i++) r[i] = t(i);
            return r
        }, y.random = function(e, t) {
            return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
        }, y.now = Date.now || function() {
            return (new Date).getTime()
        };
        var D = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            },
            P = y.invert(D),
            H = function(e) {
                var t = function(t) {
                        return e[t]
                    },
                    n = "(?:" + y.keys(e).join("|") + ")",
                    r = RegExp(n),
                    i = RegExp(n, "g");
                return function(e) {
                    return e = null == e ? "" : "" + e, r.test(e) ? e.replace(i, t) : e
                }
            };
        y.escape = H(D), y.unescape = H(P), y.result = function(e, t, n) {
            var r = null == e ? void 0 : e[t];
            return r === void 0 && (r = n), y.isFunction(r) ? r.call(e) : r
        };
        var B = 0;
        y.uniqueId = function(e) {
            var t = ++B + "";
            return e ? e + t : t
        }, y.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var j = /(.)^/,
            F = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            I = /\\|'|\r|\n|\u2028|\u2029/g,
            q = function(e) {
                return "\\" + F[e]
            };
        y.template = function(e, t, n) {
            !t && n && (t = n), t = y.defaults({}, t, y.templateSettings);
            var r = RegExp([(t.escape || j).source, (t.interpolate || j).source, (t.evaluate || j).source].join("|") + "|$", "g"),
                i = 0,
                s = "__p+='";
            e.replace(r, function(t, n, r, o, u) {
                return s += e.slice(i, u).replace(I, q), i = u + t.length, n ? s += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? s += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : o && (s += "';\n" + o + "\n__p+='"), t
            }), s += "';\n", t.variable || (s = "with(obj||{}){\n" + s + "}\n"), s = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + s + "return __p;\n";
            try {
                var o = new Function(t.variable || "obj", "_", s)
            } catch (u) {
                throw u.source = s, u
            }
            var a = function(e) {
                    return o.call(this, e, y)
                },
                f = t.variable || "obj";
            return a.source = "function(" + f + "){\n" + s + "}", a
        }, y.chain = function(e) {
            var t = y(e);
            return t._chain = !0, t
        };
        var R = function(e, t) {
            return e._chain ? y(t).chain() : t
        };
        y.mixin = function(e) {
            y.each(y.functions(e), function(t) {
                var n = y[t] = e[t];
                y.prototype[t] = function() {
                    var e = [this._wrapped];
                    return f.apply(e, arguments), R(this, n.apply(y, e))
                }
            })
        }, y.mixin(y), y.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
            var t = o[e];
            y.prototype[e] = function() {
                var n = this._wrapped;
                return t.apply(n, arguments), "shift" !== e && "splice" !== e || 0 !== n.length || delete n[0], R(this, n)
            }
        }), y.each(["concat", "join", "slice"], function(e) {
            var t = o[e];
            y.prototype[e] = function() {
                return R(this, t.apply(this._wrapped, arguments))
            }
        }), y.prototype.value = function() {
            return this._wrapped
        }, y.prototype.valueOf = y.prototype.toJSON = y.prototype.value, y.prototype.toString = function() {
            return "" + this._wrapped
        }, "function" == typeof define && define.amd && define("underscore", [], function() {
            return y
        })
    }.call(this),
        /*!
            	Zoom 1.7.14
            	license: MIT
            	http://www.jacklmoore.com/zoom
            */
        function(e) {
            return typeof define == "function" && define.amd ? define(["jquery"], function(t) {
                return e(t, window, document)
            }) : typeof exports == "object" ? module.exports = e(require("jquery"), window, document) : e(jQuery, window, document)
        }(function(e, t, n) {
            "use strict";
            var r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w, E, S, x, T, N, C, k, L, A, O, M, _, D;
            N = {
                paneClass: "nano-pane",
                sliderClass: "nano-slider",
                contentClass: "nano-content",
                iOSNativeScrolling: !1,
                preventPageScrolling: !1,
                disableResize: !1,
                alwaysVisible: !1,
                flashDelay: 1500,
                sliderMinHeight: 20,
                sliderMaxHeight: null,
                documentContext: null,
                windowContext: null
            }, w = "scrollbar", b = "scroll", c = "mousedown", h = "mouseenter", p = "mousemove", v = "mousewheel", d = "mouseup", y = "resize", u = "drag", a = "enter", S = "up", g = "panedown", s = "DOMMouseScroll", o = "down", x = "wheel", f = "keydown", l = "keyup", E = "touchmove", r = t.navigator.appName === "Microsoft Internet Explorer" && /msie 7./i.test(t.navigator.appVersion) && t.ActiveXObject, i = null, A = t.requestAnimationFrame, T = t.cancelAnimationFrame, M = n.createElement("div").style, D = function() {
                var e, t, n, r, i, s;
                r = ["t", "webkitT", "MozT", "msT", "OT"];
                for (e = i = 0, s = r.length; i < s; e = ++i) {
                    n = r[e], t = r[e] + "ransform";
                    if (t in M) return r[e].substr(0, r[e].length - 1)
                }
                return !1
            }(), _ = function(e) {
                return D === !1 ? !1 : D === "" ? e : D + e.charAt(0).toUpperCase() + e.substr(1)
            }, O = _("transform"), k = O !== !1, C = function() {
                var e, t, r;
                return e = n.createElement("div"), t = e.style, t.position = "absolute", t.width = "100px", t.height = "100px", t.overflow = b, t.top = "-9999px", n.body.appendChild(e), r = e.offsetWidth - e.clientWidth, n.body.removeChild(e), r
            }, L = function() {
                var e, n, r;
                return n = t.navigator.userAgent, e = /(?=.+Mac OS X)(?=.+Firefox)/.test(n), e ? (r = /Firefox\/\d{2}\./.exec(n), r && (r = r[0].replace(/\D+/g, "")), e && +r > 23) : !1
            }, m = function() {
                function f(r, s) {
                    this.el = r, this.options = s, i || (i = C()), this.$el = e(this.el), this.doc = e(this.options.documentContext || n), this.win = e(this.options.windowContext || t), this.body = this.doc.find("body"), this.$content = this.$el.children("." + this.options.contentClass), this.$content.attr("tabindex", this.options.tabIndex || 0), this.content = this.$content[0], this.previousPosition = 0, this.options.iOSNativeScrolling && this.el.style.WebkitOverflowScrolling != null ? this.nativeScrolling() : this.generate(), this.createEvents(), this.addEvents(), this.reset()
                }
                return f.prototype.preventScrolling = function(e, t) {
                    if (!this.isActive) return;
                    if (e.type === s)(t === o && e.originalEvent.detail > 0 || t === S && e.originalEvent.detail < 0) && e.preventDefault();
                    else if (e.type === v) {
                        if (!e.originalEvent || !e.originalEvent.wheelDelta) return;
                        (t === o && e.originalEvent.wheelDelta < 0 || t === S && e.originalEvent.wheelDelta > 0) && e.preventDefault()
                    }
                }, f.prototype.nativeScrolling = function() {
                    this.$content.css({
                        WebkitOverflowScrolling: "touch"
                    }), this.iOSNativeScrolling = !0, this.isActive = !0
                }, f.prototype.updateScrollValues = function() {
                    var e, t;
                    e = this.content, this.maxScrollTop = e.scrollHeight - e.clientHeight, this.prevScrollTop = this.contentScrollTop || 0, this.contentScrollTop = e.scrollTop, t = this.contentScrollTop > this.previousPosition ? "down" : this.contentScrollTop < this.previousPosition ? "up" : "same", this.previousPosition = this.contentScrollTop, t !== "same" && this.$el.trigger("update", {
                        position: this.contentScrollTop,
                        maximum: this.maxScrollTop,
                        direction: t
                    }), this.iOSNativeScrolling || (this.maxSliderTop = this.paneHeight - this.sliderHeight, this.sliderTop = this.maxScrollTop === 0 ? 0 : this.contentScrollTop * this.maxSliderTop / this.maxScrollTop)
                }, f.prototype.setOnScrollStyles = function() {
                    var e;
                    k ? (e = {}, e[O] = "translate(0, " + this.sliderTop + "px)") : e = {
                        top: this.sliderTop
                    }, A ? (T && this.scrollRAF && T(this.scrollRAF), this.scrollRAF = A(function(t) {
                        return function() {
                            return t.scrollRAF = null, t.slider.css(e)
                        }
                    }(this))) : this.slider.css(e)
                }, f.prototype.createEvents = function() {
                    this.events = {
                        down: function(e) {
                            return function(t) {
                                return e.isBeingDragged = !0, e.offsetY = t.pageY - e.slider.offset().top, e.slider.is(t.target) || (e.offsetY = 0), e.pane.addClass("active"), e.doc.bind(p, e.events[u]).bind(d, e.events[S]), e.body.bind(h, e.events[a]), !1
                            }
                        }(this),
                        drag: function(e) {
                            return function(t) {
                                return e.sliderY = t.pageY - e.$el.offset().top - e.paneTop - (e.offsetY || e.sliderHeight * .5), e.scroll(), e.contentScrollTop >= e.maxScrollTop && e.prevScrollTop !== e.maxScrollTop ? e.$el.trigger("scrollend") : e.contentScrollTop === 0 && e.prevScrollTop !== 0 && e.$el.trigger("scrolltop"), !1
                            }
                        }(this),
                        up: function(e) {
                            return function(t) {
                                return e.isBeingDragged = !1, e.pane.removeClass("active"), e.doc.unbind(p, e.events[u]).unbind(d, e.events[S]), e.body.unbind(h, e.events[a]), !1
                            }
                        }(this),
                        resize: function(e) {
                            return function(t) {
                                e.reset()
                            }
                        }(this),
                        panedown: function(e) {
                            return function(t) {
                                return e.sliderY = (t.offsetY || t.originalEvent.layerY) - e.sliderHeight * .5, e.scroll(), e.events.down(t), !1
                            }
                        }(this),
                        scroll: function(e) {
                            return function(t) {
                                e.updateScrollValues();
                                if (e.isBeingDragged) return;
                                e.iOSNativeScrolling || (e.sliderY = e.sliderTop, e.setOnScrollStyles());
                                if (t == null) return;
                                e.contentScrollTop >= e.maxScrollTop ? (e.options.preventPageScrolling && e.preventScrolling(t, o), e.prevScrollTop !== e.maxScrollTop && e.$el.trigger("scrollend")) : e.contentScrollTop === 0 && (e.options.preventPageScrolling && e.preventScrolling(t, S), e.prevScrollTop !== 0 && e.$el.trigger("scrolltop"))
                            }
                        }(this),
                        wheel: function(e) {
                            return function(t) {
                                var n;
                                if (t == null) return;
                                return n = t.delta || t.wheelDelta || t.originalEvent && t.originalEvent.wheelDelta || -t.detail || t.originalEvent && -t.originalEvent
                                    .detail, n && (e.sliderY += -n / 3), e.scroll(), !1
                            }
                        }(this),
                        enter: function(e) {
                            return function(t) {
                                var n;
                                if (!e.isBeingDragged) return;
                                if ((t.buttons || t.which) !== 1) return (n = e.events)[S].apply(n, arguments)
                            }
                        }(this)
                    }
                }, f.prototype.addEvents = function() {
                    var e;
                    this.removeEvents(), e = this.events, this.options.disableResize || this.win.bind(y, e[y]), this.iOSNativeScrolling || (this.slider.bind(c, e[o]), this.pane.bind(c, e[g]).bind("" + v + " " + s, e[x])), this.$content.bind("" + b + " " + v + " " + s + " " + E, e[b])
                }, f.prototype.removeEvents = function() {
                    var e;
                    e = this.events, this.win.unbind(y, e[y]), this.iOSNativeScrolling || (this.slider.unbind(), this.pane.unbind()), this.$content.unbind("" + b + " " + v + " " + s + " " + E, e[b])
                }, f.prototype.generate = function() {
                    var e, n, r, s, o, u, a;
                    return s = this.options, u = s.paneClass, a = s.sliderClass, e = s.contentClass, !(o = this.$el.children("." + u)).length && !o.children("." + a).length && this.$el.append('<div class="' + u + '"><div class="' + a + '" /></div>'), this.pane = this.$el.children("." + u), this.slider = this.pane.find("." + a), i === 0 && L() ? (r = t.getComputedStyle(this.content, null).getPropertyValue("padding-right").replace(/[^0-9.]+/g, ""), n = {
                        right: -14,
                        paddingRight: +r + 14
                    }) : i && (n = {
                        right: -i
                    }, this.$el.addClass("has-scrollbar")), n != null && this.$content.css(n), this
                }, f.prototype.restore = function() {
                    this.stopped = !1, this.iOSNativeScrolling || this.pane.show(), this.addEvents()
                }, f.prototype.reset = function() {
                    var e, t, n, s, o, u, a, f, l, c, h, p;
                    if (this.iOSNativeScrolling) {
                        this.contentHeight = this.content.scrollHeight;
                        return
                    }
                    this.$el.find("." + this.options.paneClass).length || this.generate().stop(), this.stopped && this.restore(), e = this.content, s = e.style, o = s.overflowY, r && this.$content.css({
                        height: this.$content.height()
                    }), t = e.scrollHeight + i, c = parseInt(this.$el.css("max-height"), 10), c > 0 && (this.$el.height(""), this.$el.height(e.scrollHeight > c ? c : e.scrollHeight)), a = this.pane.outerHeight(!1), l = parseInt(this.pane.css("top"), 10), u = parseInt(this.pane.css("bottom"), 10), f = a + l + u, p = Math.round(f / t * a), p < this.options.sliderMinHeight ? p = this.options.sliderMinHeight : this.options.sliderMaxHeight != null && p > this.options.sliderMaxHeight && (p = this.options.sliderMaxHeight), o === b && s.overflowX !== b && (p += i), this.maxSliderTop = f - p, this.contentHeight = t, this.paneHeight = a, this.paneOuterHeight = f, this.sliderHeight = p, this.paneTop = l, this.slider.height(p), this.events.scroll(), this.pane.show(), this.isActive = !0, e.scrollHeight === e.clientHeight || this.pane.outerHeight(!0) >= e.scrollHeight && o !== b ? (this.pane.hide(), this.isActive = !1) : this.el.clientHeight === e.scrollHeight && o === b ? this.slider.hide() : this.slider.show(), this.pane.css({
                        opacity: this.options.alwaysVisible ? 1 : "",
                        visibility: this.options.alwaysVisible ? "visible" : ""
                    }), n = this.$content.css("position");
                    if (n === "static" || n === "relative") h = parseInt(this.$content.css("right"), 10), h && this.$content.css({
                        right: "",
                        marginRight: h
                    });
                    return this
                }, f.prototype.scroll = function() {
                    if (!this.isActive) return;
                    return this.sliderY = Math.max(0, this.sliderY), this.sliderY = Math.min(this.maxSliderTop, this.sliderY), this.$content.scrollTop(this.maxScrollTop * this.sliderY / this.maxSliderTop), this.iOSNativeScrolling || (this.updateScrollValues(), this.setOnScrollStyles()), this
                }, f.prototype.scrollBottom = function(e) {
                    if (!this.isActive) return;
                    return this.$content.scrollTop(this.contentHeight - this.$content.height() - e).trigger(v), this.stop().restore(), this
                }, f.prototype.scrollTop = function(e) {
                    if (!this.isActive) return;
                    return this.$content.scrollTop(+e).trigger(v), this.stop().restore(), this
                }, f.prototype.scrollTo = function(e) {
                    if (!this.isActive) return;
                    return this.scrollTop(this.$el.find(e).get(0).offsetTop), this
                }, f.prototype.stop = function() {
                    return T && this.scrollRAF && (T(this.scrollRAF), this.scrollRAF = null), this.stopped = !0, this.removeEvents(), this.iOSNativeScrolling || this.pane.hide(), this
                }, f.prototype.destroy = function() {
                    return this.stopped || this.stop(), !this.iOSNativeScrolling && this.pane.length && this.pane.remove(), r && this.$content.height(""), this.$content.removeAttr("tabindex"), this.$el.hasClass("has-scrollbar") && (this.$el.removeClass("has-scrollbar"), this.$content.css({
                        right: ""
                    })), this
                }, f.prototype.flash = function() {
                    if (this.iOSNativeScrolling) return;
                    if (!this.isActive) return;
                    return this.reset(), this.pane.addClass("flashed"), setTimeout(function(e) {
                        return function() {
                            e.pane.removeClass("flashed")
                        }
                    }(this), this.options.flashDelay), this
                }, f
            }(), e.fn.nanoScroller = function(t) {
                return this.each(function() {
                    var n, r;
                    (r = this.nanoscroller) || (n = e.extend({}, N, t), this.nanoscroller = r = new m(this, n));
                    if (t && typeof t == "object") {
                        e.extend(r.options, t);
                        if (t.scrollBottom != null) return r.scrollBottom(t.scrollBottom);
                        if (t.scrollTop != null) return r.scrollTop(t.scrollTop);
                        if (t.scrollTo) return r.scrollTo(t.scrollTo);
                        if (t.scroll === "bottom") return r.scrollBottom(0);
                        if (t.scroll === "top") return r.scrollTop(0);
                        if (t.scroll && t.scroll instanceof e) return r.scrollTo(t.scroll);
                        if (t.stop) return r.stop();
                        if (t.destroy) return r.destroy();
                        if (t.flash) return r.flash()
                    }
                    return r.reset()
                })
            }, e.fn.nanoScroller.Constructor = m
        }), + function(e) {
            "use strict";

            function n(n) {
                return this.each(function() {
                    var r = e(this),
                        i = r.data("bs.carousel"),
                        s = e.extend({}, t.DEFAULTS, r.data(), typeof n == "object" && n),
                        o = typeof n == "string" ? n : s.slide;
                    i || r.data("bs.carousel", i = new t(this, s)), typeof n == "number" ? i.to(n) : o ? i[o]() : s.interval && i.pause().cycle()
                })
            }
            var t = function(t, n) {
                this.$element = e(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", e.proxy(this.keydown, this)), this.options.pause == "hover" && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", e.proxy(this.pause, this)).on("mouseleave.bs.carousel", e.proxy(this.cycle, this))
            };
            t.VERSION = "3.3.4", t.TRANSITION_DURATION = 600, t.DEFAULTS = {
                    interval: 5e3,
                    pause: "hover",
                    wrap: !0,
                    keyboard: !0
                }, t.prototype.keydown = function(e) {
                    if (/input|textarea/i.test(e.target.tagName)) return;
                    switch (e.which) {
                        case 37:
                            this.prev();
                            break;
                        case 39:
                            this.next();
                            break;
                        default:
                            return
                    }
                    e.preventDefault()
                }, t
                .prototype.cycle = function(t) {
                    return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)), this
                }, t.prototype.getItemIndex = function(e) {
                    return this.$items = e.parent().children(".item"), this.$items.index(e || this.$active)
                }, t.prototype.getItemForDirection = function(e, t) {
                    var n = this.getItemIndex(t),
                        r = e == "prev" && n === 0 || e == "next" && n == this.$items.length - 1;
                    if (r && !this.options.wrap) return t;
                    var i = e == "prev" ? -1 : 1,
                        s = (n + i) % this.$items.length;
                    return this.$items.eq(s)
                }, t.prototype.to = function(e) {
                    var t = this,
                        n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
                    if (e > this.$items.length - 1 || e < 0) return;
                    return this.sliding ? this.$element.one("slid.bs.carousel", function() {
                        t.to(e)
                    }) : n == e ? this.pause().cycle() : this.slide(e > n ? "next" : "prev", this.$items.eq(e))
                }, t.prototype.pause = function(t) {
                    return t || (this.paused = !0), this.$element.find(".next, .prev").length && e.support.transition && (this.$element.trigger(e.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
                }, t.prototype.next = function() {
                    if (this.sliding) return;
                    return this.slide("next")
                }, t.prototype.prev = function() {
                    if (this.sliding) return;
                    return this.slide("prev")
                }, t.prototype.slide = function(n, r) {
                    var i = this.$element.find(".item.active"),
                        s = r || this.getItemForDirection(n, i),
                        o = this.interval,
                        u = n == "next" ? "left" : "right",
                        a = this;
                    if (s.hasClass("active")) return this.sliding = !1;
                    var f = s[0],
                        l = e.Event("slide.bs.carousel", {
                            relatedTarget: f,
                            direction: u
                        });
                    this.$element.trigger(l);
                    if (l.isDefaultPrevented()) return;
                    this.sliding = !0, o && this.pause();
                    if (this.$indicators.length) {
                        this.$indicators.find(".active").removeClass("active");
                        var c = e(this.$indicators.children()[this.getItemIndex(s)]);
                        c && c.addClass("active")
                    }
                    var h = e.Event("slid.bs.carousel", {
                        relatedTarget: f,
                        direction: u
                    });
                    return e.support.transition && this.$element.hasClass("slide") ? (s.addClass(n), s[0].offsetWidth, i.addClass(u), s.addClass(u), i.one("bsTransitionEnd", function() {
                        s.removeClass([n, u].join(" ")).addClass("active"), i.removeClass(["active", u].join(" ")), a.sliding = !1, setTimeout(function() {
                            a.$element.trigger(h)
                        }, 0)
                    }).emulateTransitionEnd(t.TRANSITION_DURATION)) : (i.removeClass("active"), s.addClass("active"), this.sliding = !1, this.$element.trigger(h)), o && this.cycle(), this
                };
            var r = e.fn.carousel;
            e.fn.carousel = n, e.fn.carousel.Constructor = t, e.fn.carousel.noConflict = function() {
                return e.fn.carousel = r, this
            };
            var i = function(t) {
                var r, i = e(this),
                    s = e(i.attr("data-target") || (r = i.attr("href")) && r.replace(/.*(?=#[^\s]+$)/, ""));
                if (!s.hasClass("carousel")) return;
                var o = e.extend({}, s.data(), i.data()),
                    u = i.attr("data-slide-to");
                u && (o.interval = !1), n.call(s, o), u && s.data("bs.carousel").to(u), t.preventDefault()
            };
            e(document).on("click.bs.carousel.data-api", "[data-slide]", i).on("click.bs.carousel.data-api", "[data-slide-to]", i), e(window).on("load", function() {
                e('[data-ride="carousel"]').each(function() {
                    var t = e(this);
                    n.call(t, t.data())
                })
            })
        }(jQuery), + function(e) {
            "use strict";

            function n(n) {
                return this.each(function() {
                    var r = e(this),
                        i = r.data("bs.tooltip"),
                        s = typeof n == "object" && n;
                    if (!i && /destroy|hide/.test(n)) return;
                    i || r.data("bs.tooltip", i = new t(this, s)), typeof n == "string" && i[n]()
                })
            }
            var t = function(e, t) {
                this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.init("tooltip", e, t)
            };
            t.VERSION = "3.3.4", t.TRANSITION_DURATION = 150, t.DEFAULTS = {
                animation: !0,
                placement: "top",
                selector: !1,
                template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                delay: 0,
                html: !1,
                container: !1,
                viewport: {
                    selector: "body",
                    padding: 0
                }
            }, t.prototype.init = function(t, n, r) {
                this.enabled = !0, this.type = t, this.$element = e(n), this.options = this.getOptions(r), this.$viewport = this.options.viewport && e(this.options.viewport.selector || this.options.viewport);
                if (this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
                var i = this.options.trigger.split(" ");
                for (var s = i.length; s--;) {
                    var o = i[s];
                    if (o == "click") this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this));
                    else if (o != "manual") {
                        var u = o == "hover" ? "mouseenter" : "focusin",
                            a = o == "hover" ? "mouseleave" : "focusout";
                        this.$element.on(u + "." + this.type, this.options.selector, e.proxy(this.enter, this)), this.$element.on(a + "." + this.type, this.options.selector, e.proxy(this.leave, this))
                    }
                }
                this.options.selector ? this._options = e.extend({}, this.options, {
                    trigger: "manual",
                    selector: ""
                }) : this.fixTitle()
            }, t.prototype.getDefaults = function() {
                return t.DEFAULTS
            }, t.prototype.getOptions = function(t) {
                return t = e.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && typeof t.delay == "number" && (t.delay = {
                    show: t.delay,
                    hide: t.delay
                }), t
            }, t.prototype.getDelegateOptions = function() {
                var t = {},
                    n = this.getDefaults();
                return this._options && e.each(this._options, function(e, r) {
                    n[e] != r && (t[e] = r)
                }), t
            }, t.prototype.enter = function(t) {
                var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
                if (n && n.$tip && n.$tip.is(":visible")) {
                    n.hoverState = "in";
                    return
                }
                n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), clearTimeout(n.timeout), n.hoverState = "in";
                if (!n.options.delay || !n.options.delay.show) return n.show();
                n.timeout = setTimeout(function() {
                    n.hoverState == "in" && n.show()
                }, n.options.delay.show)
            }, t.prototype.leave = function(t) {
                var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
                n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), clearTimeout(n.timeout), n.hoverState = "out";
                if (!n.options.delay || !n.options.delay.hide) return n.hide();
                n.timeout = setTimeout(function() {
                    n.hoverState == "out" && n.hide()
                }, n.options.delay.hide)
            }, t.prototype.show = function() {
                var n = e.Event("show.bs." + this.type);
                if (this.hasContent() && this.enabled) {
                    this.$element
                        .trigger(n);
                    var r = e.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                    if (n.isDefaultPrevented() || !r) return;
                    var i = this,
                        s = this.tip(),
                        o = this.getUID(this.type);
                    this.setContent(), s.attr("id", o), this.$element.attr("aria-describedby", o), this.options.animation && s.addClass("fade");
                    var u = typeof this.options.placement == "function" ? this.options.placement.call(this, s[0], this.$element[0]) : this.options.placement,
                        a = /\s?auto?\s?/i,
                        f = a.test(u);
                    f && (u = u.replace(a, "") || "top"), s.detach().css({
                        top: 0,
                        left: 0,
                        display: "block"
                    }).addClass(u).data("bs." + this.type, this), this.options.container ? s.appendTo(this.options.container) : s.insertAfter(this.$element);
                    var l = this.getPosition(),
                        c = s[0].offsetWidth,
                        h = s[0].offsetHeight;
                    if (f) {
                        var p = u,
                            d = this.options.container ? e(this.options.container) : this.$element.parent(),
                            v = this.getPosition(d);
                        u = u == "bottom" && l.bottom + h > v.bottom ? "top" : u == "top" && l.top - h < v.top ? "bottom" : u == "right" && l.right + c > v.width ? "left" : u == "left" && l.left - c < v.left ? "right" : u, s.removeClass(p).addClass(u)
                    }
                    var m = this.getCalculatedOffset(u, l, c, h);
                    this.applyPlacement(m, u);
                    var g = function() {
                        var e = i.hoverState;
                        i.$element.trigger("shown.bs." + i.type), i.hoverState = null, e == "out" && i.leave(i)
                    };
                    e.support.transition && this.$tip.hasClass("fade") ? s.one("bsTransitionEnd", g).emulateTransitionEnd(t.TRANSITION_DURATION) : g()
                }
            }, t.prototype.applyPlacement = function(t, n) {
                var r = this.tip(),
                    i = r[0].offsetWidth,
                    s = r[0].offsetHeight,
                    o = parseInt(r.css("margin-top"), 10),
                    u = parseInt(r.css("margin-left"), 10);
                isNaN(o) && (o = 0), isNaN(u) && (u = 0), t.top = t.top + o, t.left = t.left + u, e.offset.setOffset(r[0], e.extend({
                    using: function(e) {
                        r.css({
                            top: Math.round(e.top),
                            left: Math.round(e.left)
                        })
                    }
                }, t), 0), r.addClass("in");
                var a = r[0].offsetWidth,
                    f = r[0].offsetHeight;
                n == "top" && f != s && (t.top = t.top + s - f);
                var l = this.getViewportAdjustedDelta(n, t, a, f);
                l.left ? t.left += l.left : t.top += l.top;
                var c = /top|bottom/.test(n),
                    h = c ? l.left * 2 - i + a : l.top * 2 - s + f,
                    p = c ? "offsetWidth" : "offsetHeight";
                r.offset(t), this.replaceArrow(h, r[0][p], c)
            }, t.prototype.replaceArrow = function(e, t, n) {
                this.arrow().css(n ? "left" : "top", 50 * (1 - e / t) + "%").css(n ? "top" : "left", "")
            }, t.prototype.setContent = function() {
                var e = this.tip(),
                    t = this.getTitle();
                e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right")
            }, t.prototype.hide = function(n) {
                function o() {
                    r.hoverState != "in" && i.detach(), r.$element.removeAttr("aria-describedby").trigger("hidden.bs." + r.type), n && n()
                }
                var r = this,
                    i = e(this.$tip),
                    s = e.Event("hide.bs." + this.type);
                this.$element.trigger(s);
                if (s.isDefaultPrevented()) return;
                return i.removeClass("in"), e.support.transition && i.hasClass("fade") ? i.one("bsTransitionEnd", o).emulateTransitionEnd(t.TRANSITION_DURATION) : o(), this.hoverState = null, this
            }, t.prototype.fixTitle = function() {
                var e = this.$element;
                (e.attr("title") || typeof e.attr("data-original-title") != "string") && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
            }, t.prototype.hasContent = function() {
                return this.getTitle()
            }, t.prototype.getPosition = function(t) {
                t = t || this.$element;
                var n = t[0],
                    r = n.tagName == "BODY",
                    i = n.getBoundingClientRect();
                i.width == null && (i = e.extend({}, i, {
                    width: i.right - i.left,
                    height: i.bottom - i.top
                }));
                var s = r ? {
                        top: 0,
                        left: 0
                    } : t.offset(),
                    o = {
                        scroll: r ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
                    },
                    u = r ? {
                        width: e(window).width(),
                        height: e(window).height()
                    } : null;
                return e.extend({}, i, o, u, s)
            }, t.prototype.getCalculatedOffset = function(e, t, n, r) {
                return e == "bottom" ? {
                    top: t.top + t.height,
                    left: t.left + t.width / 2 - n / 2
                } : e == "top" ? {
                    top: t.top - r,
                    left: t.left + t.width / 2 - n / 2
                } : e == "left" ? {
                    top: t.top + t.height / 2 - r / 2,
                    left: t.left - n
                } : {
                    top: t.top + t.height / 2 - r / 2,
                    left: t.left + t.width
                }
            }, t.prototype.getViewportAdjustedDelta = function(e, t, n, r) {
                var i = {
                    top: 0,
                    left: 0
                };
                if (!this.$viewport) return i;
                var s = this.options.viewport && this.options.viewport.padding || 0,
                    o = this.getPosition(this.$viewport);
                if (/right|left/.test(e)) {
                    var u = t.top - s - o.scroll,
                        a = t.top + s - o.scroll + r;
                    u < o.top ? i.top = o.top - u : a > o.top + o.height && (i.top = o.top + o.height - a)
                } else {
                    var f = t.left - s,
                        l = t.left + s + n;
                    f < o.left ? i.left = o.left - f : l > o.width && (i.left = o.left + o.width - l)
                }
                return i
            }, t.prototype.getTitle = function() {
                var e, t = this.$element,
                    n = this.options;
                return e = t.attr("data-original-title") || (typeof n.title == "function" ? n.title.call(t[0]) : n.title), e
            }, t.prototype.getUID = function(e) {
                do e += ~~(Math.random() * 1e6); while (document.getElementById(e));
                return e
            }, t.prototype.tip = function() {
                return this.$tip = this.$tip || e(this.options.template)
            }, t.prototype.arrow = function() {
                return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
            }, t.prototype.enable = function() {
                this.enabled = !0
            }, t.prototype.disable = function() {
                this.enabled = !1
            }, t.prototype.toggleEnabled = function() {
                this.enabled = !this.enabled
            }, t.prototype.toggle = function(t) {
                var n = this;
                t && (n = e(t.currentTarget).data("bs." + this.type), n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n))), n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
            }, t.prototype.destroy = function() {
                var e = this;
                clearTimeout(this.timeout), this.hide(function() {
                    e.$element.off("." + e.type).removeData("bs." + e.type)
                })
            };
            var r = e.fn.tooltip;
            e.fn.tooltip = n, e.fn.tooltip.Constructor = t, e.fn.tooltip.noConflict = function() {
                return e.fn.tooltip = r, this
            }
        }(jQuery),
        function(e, t, n) {
            "use strict";

            function r(e, t) {
                return t = t || Error,
                    function() {
                        var n = 2,
                            r = arguments,
                            i = r[0],
                            s = "[" + (e ? e + ":" : "") + i + "] ",
                            o = r[1],
                            u, a;
                        s += o.replace(/\{\d+\}/g, function(e) {
                            var t = +e.slice(1, -1),
                                i = t + n;
                            return i < r.length ? en(r[i]) : e
                        }), s += "\nhttp://errors.angularjs.org/1.4.0/" + (e ? e + "/" : "") + i;
                        for (a = n, u = "?"; a < r.length; a++, u = "&") s += u + "p" + (a - n) + "=" + encodeURIComponent(en(r[a]));
                        return new t(s)
                    }
            }

            function x(e) {
                if (e == null || $(e)) return !1;
                var t = "length" in Object(e) && e.length;
                return e.nodeType === Vt && t ? !0 : R(e) || W(e) || t === 0 || typeof t == "number" && t > 0 && t - 1 in e
            }

            function T(e, t, n) {
                var r, i;
                if (e)
                    if (X(e))
                        for (r in e) r != "prototype" && r != "length" && r != "name" && (!e.hasOwnProperty || e.hasOwnProperty(r)) && t.call(n, e[r], r, e);
                    else if (W(e) || x(e)) {
                    var s = typeof e != "object";
                    for (r = 0, i = e.length; r < i; r++)(s || r in e) && t.call(n, e[r], r, e)
                } else if (e.forEach &&
                    e.forEach !== T) e.forEach(t, n, e);
                else if (q(e))
                    for (r in e) t.call(n, e[r], r, e);
                else if (typeof e.hasOwnProperty == "function")
                    for (r in e) e.hasOwnProperty(r) && t.call(n, e[r], r, e);
                else
                    for (r in e) u.call(e, r) && t.call(n, e[r], r, e);
                return e
            }

            function N(e, t, n) {
                var r = Object.keys(e).sort();
                for (var i = 0; i < r.length; i++) t.call(n, e[r[i]], r[i]);
                return r
            }

            function C(e) {
                return function(t, n) {
                    e(n, t)
                }
            }

            function k() {
                return ++S
            }

            function L(e, t) {
                t ? e.$$hashKey = t : delete e.$$hashKey
            }

            function A(e, t, n) {
                var r = e.$$hashKey;
                for (var i = 0, s = t.length; i < s; ++i) {
                    var o = t[i];
                    if (!I(o) && !X(o)) continue;
                    var u = Object.keys(o);
                    for (var a = 0, f = u.length; a < f; a++) {
                        var l = u[a],
                            c = o[l];
                        n && I(c) ? (I(e[l]) || (e[l] = W(c) ? [] : {}), A(e[l], [c], !0)) : e[l] = c
                    }
                }
                return L(e, r), e
            }

            function O(e) {
                return A(e, d.call(arguments, 1), !1)
            }

            function M(e) {
                return A(e, d.call(arguments, 1), !0)
            }

            function _(e) {
                return parseInt(e, 10)
            }

            function D(e, t) {
                return O(Object.create(e), t)
            }

            function P() {}

            function H(e) {
                return e
            }

            function B(e) {
                return function() {
                    return e
                }
            }

            function j(e) {
                return typeof e == "undefined"
            }

            function F(e) {
                return typeof e != "undefined"
            }

            function I(e) {
                return e !== null && typeof e == "object"
            }

            function q(e) {
                return e !== null && typeof e == "object" && !y(e)
            }

            function R(e) {
                return typeof e == "string"
            }

            function U(e) {
                return typeof e == "number"
            }

            function z(e) {
                return g.call(e) === "[object Date]"
            }

            function X(e) {
                return typeof e == "function"
            }

            function V(e) {
                return g.call(e) === "[object RegExp]"
            }

            function $(e) {
                return e && e.window === e
            }

            function J(e) {
                return e && e.$evalAsync && e.$watch
            }

            function K(e) {
                return g.call(e) === "[object File]"
            }

            function Q(e) {
                return g.call(e) === "[object FormData]"
            }

            function G(e) {
                return g.call(e) === "[object Blob]"
            }

            function Y(e) {
                return typeof e == "boolean"
            }

            function Z(e) {
                return e && X(e.then)
            }

            function tt(e) {
                return et.test(g.call(e))
            }

            function it(e) {
                return !!e && !!(e.nodeName || e.prop && e.attr && e.find)
            }

            function st(e) {
                var t = {},
                    n = e.split(","),
                    r;
                for (r = 0; r < n.length; r++) t[n[r]] = !0;
                return t
            }

            function ot(e) {
                return o(e.nodeName || e[0] && e[0].nodeName)
            }

            function ut(e, t) {
                return Array.prototype.indexOf.call(e, t) != -1
            }

            function at(e, t) {
                var n = e.indexOf(t);
                return n >= 0 && e.splice(n, 1), n
            }

            function ft(e, t, n, r) {
                function c(e, t, n, r, i) {
                    var s = ft(t, null, r, i);
                    I(t) && (r.push(t), i.push(s)), n[e] = s
                }
                if ($(e) || J(e)) throw b("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
                if (tt(t)) throw b("cpta", "Can't copy! TypedArray destination cannot be mutated.");
                if (!t) {
                    t = e;
                    if (e)
                        if (W(e)) t = ft(e, [], n, r);
                        else if (tt(e)) t = new e.constructor(e);
                    else if (z(e)) t = new Date(e.getTime());
                    else if (V(e)) t = new RegExp(e.source, e.toString().match(/[^\/]*$/)[0]), t.lastIndex = e.lastIndex;
                    else if (I(e)) {
                        var i = Object.create(y(e));
                        t = ft(e, i, n, r)
                    }
                } else {
                    if (e === t) throw b("cpi", "Can't copy! Source and destination are identical.");
                    n = n || [], r = r || [];
                    if (I(e)) {
                        var s = n.indexOf(e);
                        if (s !== -1) return r[s];
                        n.push(e), r.push(t)
                    }
                    var o, a;
                    if (W(e)) {
                        t.length = 0;
                        for (var f = 0; f < e.length; f++) o = ft(e[f], null, n, r), I(e[f]) && (n.push(e[f]), r.push(o)), t.push(o)
                    } else {
                        var l = t.$$hashKey;
                        W(t) ? t.length = 0 : T(t, function(e, n) {
                            delete t[n]
                        });
                        if (q(e))
                            for (a in e) c(a, e[a], t, n, r);
                        else if (e && typeof e.hasOwnProperty == "function")
                            for (a in e) e.hasOwnProperty(a) && c(a, e[a], t, n, r);
                        else
                            for (a in e) u.call(e, a) && c(a, e[a], t, n, r);
                        L(t, l)
                    }
                }
                return t
            }

            function lt(e, t) {
                if (W(e)) {
                    t = t || [];
                    for (var n = 0, r = e.length; n < r; n++) t[n] = e[n]
                } else if (I(e)) {
                    t = t || {};
                    for (var i in e)
                        if (i.charAt(0) !== "$" || i.charAt(1) !== "$") t[i] = e[i]
                }
                return t || e
            }

            function ct(e, t) {
                if (e === t) return !0;
                if (e === null || t === null) return !1;
                if (e !== e && t !== t) return !0;
                var r = typeof e,
                    i = typeof t,
                    s, o, u;
                if (r == i && r == "object") {
                    if (!W(e)) {
                        if (z(e)) return z(t) ? ct(e.getTime(), t.getTime()) : !1;
                        if (V(e)) return V(t) ? e.toString() == t.toString() : !1;
                        if (J(e) || J(t) || $(e) || $(t) || W(t) || z(t) || V(t)) return !1;
                        u = Xt();
                        for (o in e) {
                            if (o.charAt(0) === "$" || X(e[o])) continue;
                            if (!ct(e[o], t[o])) return !1;
                            u[o] = !0
                        }
                        for (o in t)
                            if (!(o in u) && o.charAt(0) !== "$" && t[o] !== n && !X(t[o])) return !1;
                        return !0
                    }
                    if (!W(t)) return !1;
                    if ((s = e.length) == t.length) {
                        for (o = 0; o < s; o++)
                            if (!ct(e[o], t[o])) return !1;
                        return !0
                    }
                }
                return !1
            }

            function dt(e, t, n) {
                return e.concat(d.call(t, n))
            }

            function vt(e, t) {
                return d.call(e, t || 0)
            }

            function mt(e, t) {
                var n = arguments.length > 2 ? vt(arguments, 2) : [];
                return !X(t) || t instanceof RegExp ? t : n.length ? function() {
                    return arguments.length ? t.apply(e, dt(n, arguments, 0)) : t.apply(e, n)
                } : function() {
                    return arguments.length ? t.apply(e, arguments) : t.call(e)
                }
            }

            function gt(e, r) {
                var i = r;
                return typeof e == "string" && e.charAt(0) === "$" && e.charAt(1) === "$" ? i = n : $(r) ? i = "$WINDOW" : r && t === r ? i = "$DOCUMENT" : J(r) && (i = "$SCOPE"), i
            }

            function yt(e, t) {
                return typeof e == "undefined" ? n : (U(t) || (t = t ? 2 : null), JSON.stringify(e, gt, t))
            }

            function bt(e) {
                return R(e) ? JSON.parse(e) : e
            }

            function wt(e, t) {
                var n = Date.parse("Jan 01, 1970 00:00:00 " + e) / 6e4;
                return isNaN(n) ? t : n
            }

            function Et(e, t) {
                return e = new Date(e.getTime()), e.setMinutes(e.getMinutes() + t), e
            }

            function St(e, t, n) {
                n = n ? -1 : 1;
                var r = wt(t, e.getTimezoneOffset());
                return Et(e, n * (r - e.getTimezoneOffset()))
            }

            function xt(e) {
                e = h(e).clone();
                try {
                    e.empty()
                } catch (t) {}
                var n = h("<div>").append(e).html();
                try {
                    return e[0].nodeType === Jt ? o(n) : n.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(e, t) {
                        return "<" + o(t)
                    })
                } catch (t) {
                    return o(n)
                }
            }

            function Tt(e) {
                try {
                    return decodeURIComponent(e)
                } catch (t) {}
            }

            function Nt(e) {
                var t = {},
                    n, r;
                return T((e || "").split("&"), function(e) {
                    if (e) {
                        n = e.replace(/\+/g, "%20").split("="), r = Tt(n[0]);
                        if (F(r)) {
                            var i = F(n[1]) ? Tt(n[1]) : !0;
                            u.call(t, r) ? W(t[r]) ? t[r].push(i) : t[r] = [t[r], i] : t[r] = i
                        }
                    }
                }), t
            }

            function Ct(e) {
                var t = [];
                return T(e, function(e, n) {
                    W(e) ? T(e, function(e) {
                        t.push(Lt(n, !0) + (e === !0 ? "" : "=" + Lt(e, !0)))
                    }) : t.push(Lt(n, !0) + (e === !0 ? "" : "=" + Lt(e, !0)))
                }), t.length ? t.join("&") : ""
            }

            function kt(e) {
                return Lt(e, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
            }

            function Lt(e, t) {
                return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, t ? "%20" : "+")
            }

            function Ot(e, t) {
                var n, r, i = At.length;
                for (r = 0; r < i; ++r) {
                    n = At[r] + t;
                    if (R(n = e.getAttribute(n))) return n
                }
                return null
            }

            function Mt(e, t) {
                var n, r, i = {};
                T(At, function(t) {
                    var i = t + "app";
                    !n && e.hasAttribute && e.hasAttribute(i) && (n = e, r = e.getAttribute(i))
                }), T(At, function(t) {
                    var i = t + "app",
                        s;
                    !n && (s = e.querySelector("[" + i.replace(":", "\\:") + "]")) && (n = s, r = s.getAttribute(i))
                }), n && (i.strictDi = Ot(n, "strict-di") !== null, t(n, r ? [r] : [], i))
            }

            function _t(n, r, i) {
                I(i) || (i = {});
                var s = {
                    strictDi: !1
                };
                i = O(s, i);
                var o = function() {
                        n = h(n);
                        if (n.injector()) {
                            var e = n[0] === t ? "document" : xt(n);
                            throw b("btstrpd", "App Already Bootstrapped with this Element '{0}'", e.replace(/</, "&lt;").replace(/>/, "&gt;"))
                        }
                        r = r || [], r.unshift(["$provide",
                            function(e) {
                                e.value("$rootElement", n)
                            }
                        ]), i.debugInfoEnabled && r.push(["$compileProvider",
                            function(e) {
                                e.debugInfoEnabled(!0)
                            }
                        ]), r.unshift("ng");
                        var s = rr(r, i.strictDi);
                        return s.invoke(["$rootScope", "$rootElement", "$compile", "$injector",
                            function(t, n, r, i) {
                                t.$apply(function() {
                                    n.data("$injector", i), r(n)(t)
                                })
                            }
                        ]), s
                    },
                    u = /^NG_ENABLE_DEBUG_INFO!/,
                    a = /^NG_DEFER_BOOTSTRAP!/;
                e && u.test(e.name) && (i.debugInfoEnabled = !0, e.name = e.name.replace(u, ""));
                if (e && !a.test(e.name)) return o();
                e.name = e.name.replace(a, ""), w.resumeBootstrap = function(e) {
                    return T(e, function(e) {
                        r.push(e)
                    }), o()
                }, X(w.resumeDeferredBootstrap) && w.resumeDeferredBootstrap()
            }

            function Dt() {
                e.name = "NG_ENABLE_DEBUG_INFO!" + e.name, e.location.reload()
            }

            function Pt(e) {
                var t = w.element(e).injector();
                if (!t) throw b("test", "no injector found for element argument to getTestability");
                return t.get("$$testability")
            }

            function Bt(e, t) {
                return t = t || "_", e.replace(Ht, function(e, n) {
                    return (n ? t : "") + e.toLowerCase()
                })
            }

            function It() {
                var t;
                if (jt) return;
                var r = pt();
                p = e.jQuery, F(r) && (p = r === null ? n : e[r]), p && p.fn.on ? (h = p, O(p.fn, {
                    scope: In.scope,
                    isolateScope: In.isolateScope,
                    controller: In.controller,
                    injector: In.injector,
                    inheritedData: In.inheritedData
                }), t = p.cleanData, p.cleanData = function(e) {
                    var n;
                    if (!Ft)
                        for (var r = 0, i;
                            (i = e[r]) != null; r++) n = p._data(i, "events"), n && n.$destroy && p(i).triggerHandler("$destroy");
                    else Ft = !1;
                    t(e)
                }) : h = xn, w.element = h, jt = !0
            }

            function qt(e, t, n) {
                if (!e) throw b("areq", "Argument '{0}' is {1}", t || "?", n || "required");
                return e
            }

            function Rt(e, t, n) {
                return n && W(e) && (e = e[e.length - 1]), qt(X(e), t, "not a function, got " + (e && typeof e == "object" ? e.constructor.name || "Object" : typeof e)), e
            }

            function Ut(e, t) {
                if (e === "hasOwnProperty") throw b("badname", "hasOwnProperty is not a valid {0} name", t)
            }

            function zt(e, t, n) {
                if (!t) return e;
                var r = t.split("."),
                    i, s = e,
                    o = r.length;
                for (var u = 0; u < o; u++) i = r[u], e && (e = (s = e)[i]);
                return !n && X(e) ? mt(s, e) : e
            }

            function Wt(e) {
                var t = e[0],
                    n = e[e.length - 1],
                    r = [t];
                do {
                    t = t.nextSibling;
                    if (!t) break;
                    r.push(t)
                } while (t !== n);
                return h(r)
            }

            function Xt() {
                return Object.create(null)
            }

            function Yt(e) {
                function i(e, t, n) {
                    return e[t] || (e[t] = n())
                }
                var t = r("$injector"),
                    n = r("ng"),
                    s = i(e, "angular", Object);
                return s.$$minErr = s.$$minErr || r, i(s, "module", function() {
                    var e = {};
                    return function(s, o, u) {
                        var a = function(e, t) {
                            if (e === "hasOwnProperty") throw n("badname", "hasOwnProperty is not a valid {0} name", t)
                        };
                        return a(s, "module"), o && e.hasOwnProperty(s) && (e[s] = null), i(e, s, function() {
                            function f(t, n, r, i) {
                                return i || (i = e),
                                    function() {
                                        return i[r || "push"]([t, n, arguments]), a
                                    }
                            }
                            if (!o) throw t("nomod", "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.", s);
                            var e = [],
                                n = [],
                                r = [],
                                i = f("$injector", "invoke", "push", n),
                                a = {
                                    _invokeQueue: e,
                                    _configBlocks: n,
                                    _runBlocks: r,
                                    requires: o,
                                    name: s,
                                    provider: f("$provide", "provider"),
                                    factory: f("$provide", "factory"),
                                    service: f("$provide", "service"),
                                    value: f("$provide", "value"),
                                    constant: f("$provide", "constant", "unshift"),
                                    decorator: f("$provide", "decorator"),
                                    animation: f("$animateProvider", "register"),
                                    filter: f("$filterProvider", "register"),
                                    controller: f("$controllerProvider", "register"),
                                    directive: f("$compileProvider", "directive"),
                                    config: i,
                                    run: function(e) {
                                        return r.push(e), this
                                    }
                                };
                            return u && i(u), a
                        })
                    }
                })
            }

            function Zt(e) {
                var t = [];
                return JSON.stringify(e, function(e, n) {
                    n = gt(e, n);
                    if (I(n)) {
                        if (t.indexOf(n) >= 0) return "<<already seen>>";
                        t.push(n)
                    }
                    return n
                })
            }

            function en(e) {
                return typeof e == "function" ? e.toString().replace(/ \{[\s\S]*$/, "") : typeof e == "undefined" ? "undefined" : typeof e != "string" ? Zt(e) : e
            }

            function nn(t) {
                O(t, {
                    bootstrap: _t,
                    copy: ft,
                    extend: O,
                    merge: M,
                    equals: ct,
                    element: h,
                    forEach: T,
                    injector: rr,
                    noop: P,
                    bind: mt,
                    toJson: yt,
                    fromJson: bt,
                    identity: H,
                    isUndefined: j,
                    isDefined: F,
                    isString: R,
                    isFunction: X,
                    isObject: I,
                    isNumber: U,
                    isElement: it,
                    isArray: W,
                    version: tn,
                    isDate: z,
                    lowercase: o,
                    uppercase: a,
                    callbacks: {
                        counter: 0
                    },
                    getTestability: Pt,
                    $$minErr: r,
                    $$csp: ht,
                    reloadWithDebugInfo: Dt
                }), E = Yt(e);
                try {
                    E("ngLocale")
                } catch (n) {
                    E("ngLocale", []).provider("$locale", ti)
                }
                E("ng", ["ngLocale"], ["$provide",
                    function(t) {
                        t.provider({
                            $$sanitizeUri: ns
                        }), t.provider("$compile", Er).directive({
                            a: Qs,
                            input: Ao,
                            textarea: Ao,
                            form: ro,
                            script: Tu,
                            select: ku,
                            style: Au,
                            option: Lu,
                            ngBind: _o,
                            ngBindHtml: Po,
                            ngBindTemplate: Do,
                            ngClass: jo,
                            ngClassEven: Io,
                            ngClassOdd: Fo,
                            ngCloak: qo,
                            ngController: Ro,
                            ngForm: io,
                            ngHide: yu,
                            ngIf: Wo,
                            ngInclude: Xo,
                            ngInit: $o,
                            ngNonBindable: fu,
                            ngPluralize: pu,
                            ngRepeat: du,
                            ngShow: gu,
                            ngStyle: bu,
                            ngSwitch: wu,
                            ngSwitchWhen: Eu,
                            ngSwitchDefault: Su,
                            ngOptions: hu,
                            ngTransclude: xu,
                            ngModel: iu,
                            ngList: Jo,
                            ngChange: Ho,
                            pattern: Mu,
                            ngPattern: Mu,
                            required: Ou,
                            ngRequired: Ou,
                            minlength: Du,
                            ngMinlength: Du,
                            maxlength: _u,
                            ngMaxlength: _u,
                            ngValue: Mo,
                            ngModelOptions: ou
                        }).directive({
                            ngInclude: Vo
                        }).directive(Gs).directive(Uo), t.provider({
                            $anchorScroll: ir,
                            $animate: dr,
                            $$animateQueue: pr,
                            $$AnimateRunner: hr,
                            $browser: gr,
                            $cacheFactory: yr,
                            $controller: Mr,
                            $document: _r,
                            $exceptionHandler: Dr,
                            $filter: ws,
                            $interpolate: Zr,
                            $interval: ei,
                            $http: Jr,
                            $httpParamSerializer: qr,
                            $httpParamSerializerJQLike: Rr,
                            $httpBackend: Qr,
                            $location: bi,
                            $log: wi,
                            $parse: Qi,
                            $rootScope: ts,
                            $q: Gi,
                            $$q: Yi,
                            $sce: as,
                            $sceDelegate: us,
                            $sniffer: fs,
                            $templateCache: br,
                            $templateRequest: ls,
                            $$testability: cs,
                            $timeout: hs,
                            $window: gs,
                            $$rAF: es,
                            $$asyncCallback: vr,
                            $$jqLite: Vn,
                            $$HashMap: Kn,
                            $$cookieReader: bs
                        })
                    }
                ])
            }

            function an() {
                return ++sn
            }

            function pn(e) {
                return e.replace(fn, function(e, t, n, r) {
                    return r ? n.toUpperCase() : n
                }).replace(ln, "Moz$1")
            }

            function bn(e) {
                return !vn.test(e)
            }

            function wn(e) {
                var t = e.nodeType;
                return t === Vt || !t || t === Qt
            }

            function En(e, t) {
                var n, r, i, s = t.createDocumentFragment(),
                    o = [],
                    u;
                if (bn(e)) o.push(t.createTextNode(e));
                else {
                    n = n || s.appendChild(t.createElement("div")), r = (mn.exec(e) || ["", ""])[1].toLowerCase(), i = yn[r] || yn._default, n.innerHTML = i[1] + e.replace(gn, "<$1></$2>") + i[2], u = i[0];
                    while (u--) n = n.lastChild;
                    o = dt(o, n.childNodes), n = s.firstChild, n.textContent = ""
                }
                return s.textContent = "", s.innerHTML = "", T(o, function(e) {
                    s.appendChild(e)
                }), s
            }

            function Sn(e, n) {
                n = n || t;
                var r;
                return (r = dn.exec(e)) ? [n.createElement(r[1])] : (r = En(e, n)) ? r.childNodes : []
            }

            function xn(e) {
                if (e instanceof xn) return e;
                var t;
                R(e) && (e = nt(e), t = !0);
                if (!(this instanceof xn)) {
                    if (t && e.charAt(0) != "<") throw hn("nosel", "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
                    return new xn(e)
                }
                t ? Dn(this, Sn(e)) : Dn(this, e)
            }

            function Tn(e) {
                return e.cloneNode(!0)
            }

            function Nn(e, t) {
                t || kn(e);
                if (e.querySelectorAll) {
                    var n = e.querySelectorAll("*");
                    for (var r = 0, i = n.length; r < i; r++) kn(n[r])
                }
            }

            function Cn(e, t, n, r) {
                if (F(r)) throw hn("offargs", "jqLite#off() does not support the `selector` argument");
                var i = Ln(e),
                    s = i && i.events,
                    o = i && i.handle;
                if (!o) return;
                if (!t)
                    for (t in s) t !== "$destroy" && un(e, t, o), delete s[t];
                else T(t.split(" "), function(t) {
                    if (F(n)) {
                        var r = s[t];
                        at(r || [], n);
                        if (r && r.length > 0) return
                    }
                    un(e, t, o), delete s[t]
                })
            }

            function kn(e, t) {
                var r = e.ng339,
                    i = r && rn[r];
                if (i) {
                    if (t) {
                        delete i.data[t];
                        return
                    }
                    i.handle && (i.events.$destroy && i.handle({}, "$destroy"), Cn(e)), delete rn[r], e.ng339 = n
                }
            }

            function Ln(e, t) {
                var r = e.ng339,
                    i = r && rn[r];
                return t && !i && (e.ng339 = r = an(), i = rn[r] = {
                    events: {},
                    data: {},
                    handle: n
                }), i
            }

            function An(e, t, n) {
                if (wn(e)) {
                    var r = F(n),
                        i = !r && t && !I(t),
                        s = !t,
                        o = Ln(e, !i),
                        u = o && o.data;
                    if (r) u[t] = n;
                    else {
                        if (s) return u;
                        if (i) return u && u[t];
                        O(u, t)
                    }
                }
            }

            function On(e, t) {
                return e.getAttribute ? (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + t + " ") > -1 : !1
            }

            function Mn(e, t) {
                t && e.setAttribute && T(t.split(" "), function(t) {
                    e.setAttribute("class", nt((" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + nt(t) + " ", " ")))
                })
            }

            function _n(e, t) {
                if (t && e.setAttribute) {
                    var n = (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
                    T(t.split(" "), function(e) {
                        e = nt(e), n.indexOf(" " + e + " ") === -1 && (n += e + " ")
                    }), e.setAttribute("class", nt(n))
                }
            }

            function Dn(e, t) {
                if (t)
                    if (t.nodeType) e[e.length++] = t;
                    else {
                        var n = t.length;
                        if (typeof n == "number" && t.window !== t) {
                            if (n)
                                for (var r = 0; r < n; r++) e[e.length++] = t[r]
                        } else e[e.length++] = t
                    }
            }

            function Pn(e, t) {
                return Hn(e, "$" + (t || "ngController") + "Controller")
            }

            function Hn(e, t, r) {
                e.nodeType == Qt && (e = e.documentElement);
                var i = W(t) ? t : [t];
                while (e) {
                    for (var s = 0, o = i.length; s < o; s++)
                        if ((r = h.data(e, i[s])) !== n) return r;
                    e = e.parentNode || e.nodeType === Gt && e.host
                }
            }

            function Bn(e) {
                Nn(e, !0);
                while (e.firstChild) e.removeChild(e.firstChild)
            }

            function jn(e, t) {
                t || Nn(e);
                var n = e.parentNode;
                n && n.removeChild(e)
            }

            function Fn(t, n) {
                n = n || e, n.document.readyState === "complete" ? n.setTimeout(t) : h(n).on("load", t)
            }

            function zn(e, t) {
                var n = qn[t.toLowerCase()];
                return n && Rn[ot(e)] && n
            }

            function Wn(e, t) {
                var n = e.nodeName;
                return (n === "INPUT" || n === "TEXTAREA") && Un[t]
            }

            function Xn(e, t) {
                var n = function(n, r) {
                    n.isDefaultPrevented = function() {
                        return n.defaultPrevented
                    };
                    var i = t[r || n.type],
                        s = i ? i.length : 0;
                    if (!s) return;
                    if (j(n.immediatePropagationStopped)) {
                        var o = n.stopImmediatePropagation;
                        n.stopImmediatePropagation = function() {
                            n.immediatePropagationStopped = !0, n.stopPropagation && n.stopPropagation(), o && o.call(n)
                        }
                    }
                    n.isImmediatePropagationStopped = function() {
                        return n.immediatePropagationStopped === !0
                    }, s > 1 && (i = lt(i));
                    for (var u = 0; u < s; u++) n.isImmediatePropagationStopped() || i[u].call(e, n)
                };
                return n.elem = e, n
            }

            function Vn() {
                this.$get = function() {
                    return O(xn, {
                        hasClass: function(e, t) {
                            return e.attr && (e = e[0]), On(e, t)
                        },
                        addClass: function(e, t) {
                            return e.attr && (e = e[0]), _n(e, t)
                        },
                        removeClass: function(e, t) {
                            return e.attr && (e = e[0]), Mn(e, t)
                        }
                    })
                }
            }

            function $n(e, t) {
                var n = e && e.$$hashKey;
                if (n) return typeof n == "function" && (n = e.$$hashKey()), n;
                var r = typeof e;
                return r == "function" || r == "object" && e !== null ? n = e.$$hashKey = r + ":" + (t || k)() : n = r + ":" + e, n
            }

            function Jn(e, t) {
                if (t) {
                    var n = 0;
                    this.nextUid = function() {
                        return ++n
                    }
                }
                T(e, this.put, this)
            }

            function tr(e) {
                var t = e.toString().replace(Zn, ""),
                    n = t.match(Qn);
                return n ? "function(" + (n[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn"
            }

            function nr(e, t, n) {
                var r, i, s, o;
                if (typeof e == "function") {
                    if (!(r = e.$inject)) {
                        r = [];
                        if (e.length) {
                            if (t) {
                                if (!R(n) || !n) n = e.name || tr(e);
                                throw er("strictdi", "{0} is not using explicit annotation and cannot be invoked in strict mode", n)
                            }
                            i = e.toString().replace(Zn, ""), s = i.match(Qn), T(s[1].split(Gn), function(e) {
                                e.replace(Yn, function(e, t, n) {
                                    r.push(n)
                                })
                            })
                        }
                        e.$inject = r
                    }
                } else W(e) ? (o = e.length - 1, Rt(e[o], "fn"), r = e.slice(0, o)) : Rt(e, "fn", !0);
                return r
            }

            function rr(e, t) {
                function c(e) {
                    return function(t, n) {
                        if (!I(t)) return e(t, n);
                        T(t, C(e))
                    }
                }

                function h(e, t) {
                    Ut(e, "service");
                    if (X(t) || W(t)) t = a.instantiate(t);
                    if (!t.$get) throw er("pget", "Provider '{0}' must define $get factory method.", e);
                    return u[e + i] = t
                }

                function p(e, t) {
                    return function() {
                        var r = l.invoke(t, this);
                        if (j(r)) throw er("undef", "Provider '{0}' must return a value from $get factory method.", e);
                        return r
                    }
                }

                function d(e, t, n) {
                    return h(e, {
                        $get: n !== !1 ? p(e, t) : t
                    })
                }

                function v(e, t) {
                    return d(e, ["$injector",
                        function(e) {
                            return e.instantiate(t)
                        }
                    ])
                }

                function m(e, t) {
                    return d(e, B(t), !1)
                }

                function g(e, t) {
                    Ut(e, "constant"), u[e] = t, f[e] = t
                }

                function y(e, t) {
                    var n = a.get(e + i),
                        r = n.$get;
                    n.$get = function() {
                        var e = l.invoke(r, n);
                        return l.invoke(t, null, {
                            $delegate: e
                        })
                    }
                }

                function b(e) {
                    var t = [],
                        n;
                    return T(e, function(e) {
                        function r(e) {
                            var t, n;
                            for (t = 0, n = e.length; t < n; t++) {
                                var r = e[t],
                                    i = a.get(r[0]);
                                i[r[1]].apply(i, r[2])
                            }
                        }
                        if (o.get(e)) return;
                        o.put(e, !0);
                        try {
                            R(e) ? (n = E(e), t = t.concat(b(n.requires)).concat(n._runBlocks), r(n._invokeQueue), r(n._configBlocks)) : X(e) ? t.push(a.invoke(e)) : W(e) ? t.push(a.invoke(e)) : Rt(e, "module")
                        } catch (i) {
                            throw W(e) && (e = e[e.length - 1]), i.message && i.stack && i.stack.indexOf(i.message) == -1 && (i = i.message + "\n" + i.stack), er("modulerr", "Failed to instantiate module {0} due to:\n{1}", e, i.stack || i.message || i)
                        }
                    }), t
                }

                function S(e, n) {
                    function o(t, i) {
                        if (e.hasOwnProperty(t)) {
                            if (e[t] === r) throw er("cdep", "Circular dependency found: {0}", t + " <- " + s.join(" <- "));
                            return e[t]
                        }
                        try {
                            return s.unshift(t), e[t] = r, e[t] = n(t, i)
                        } catch (o) {
                            throw e[t] === r && delete e[t], o
                        } finally {
                            s.shift()
                        }
                    }

                    function a(e, n, r, i) {
                        typeof r == "string" && (i = r, r = null);
                        var s = [],
                            u = rr.$$annotate(e, t, i),
                            a, f, l;
                        for (f = 0, a = u.length; f < a; f++) {
                            l = u[f];
                            if (typeof l != "string") throw er("itkn", "Incorrect injection token! Expected service name as string, got {0}", l);
                            s.push(r && r.hasOwnProperty(l) ? r[l] : o(l, i))
                        }
                        return W(e) && (e = e[a]), e.apply(n, s)
                    }

                    function f(e, t, n) {
                        var r = Object.create((W(e) ? e[e.length - 1] : e).prototype || null),
                            i = a(e, r, t, n);
                        return I(i) || X(i) ? i : r
                    }
                    return {
                        invoke: a,
                        instantiate: f,
                        get: o,
                        annotate: rr.$$annotate,
                        has: function(t) {
                            return u.hasOwnProperty(t + i) || e.hasOwnProperty(t)
                        }
                    }
                }
                t = t === !0;
                var r = {},
                    i = "Provider",
                    s = [],
                    o = new Jn([], !0),
                    u = {
                        $provide: {
                            provider: c(h),
                            factory: c(d),
                            service: c(v),
                            value: c(m),
                            constant: c(g),
                            decorator: y
                        }
                    },
                    a = u.$injector = S(u, function(e, t) {
                        throw w.isString(t) && s.push(t), er("unpr", "Unknown provider: {0}", s.join(" <- "))
                    }),
                    f = {},
                    l = f.$injector = S(f, function(e, t) {
                        var r = a.get(e + i, t);
                        return l.invoke(r.$get, r, n, e)
                    });
                return T(b(e), function(e) {
                    l.invoke(e || P)
                }), l
            }

            function ir() {
                var e = !0;
                this.disableAutoScrolling = function() {
                    e = !1
                }, this.$get = ["$window", "$location", "$rootScope",
                    function(t, n, r) {
                        function s(e) {
                            var t = null;
                            return Array.prototype.some.call(e, function(e) {
                                if (ot(e) === "a") return t = e, !0
                            }), t
                        }

                        function o() {
                            var e = a.yOffset;
                            if (X(e)) e = e();
                            else if (it(e)) {
                                var n = e[0],
                                    r = t.getComputedStyle(n);
                                r.position !== "fixed" ? e = 0 : e = n.getBoundingClientRect().bottom
                            } else U(e) || (e = 0);
                            return e
                        }

                        function u(e) {
                            if (e) {
                                e.scrollIntoView();
                                var n = o();
                                if (n) {
                                    var r = e.getBoundingClientRect().top;
                                    t.scrollBy(0, r - n)
                                }
                            } else t.scrollTo(0, 0)
                        }

                        function a(e) {
                            e = R(e) ? e : n.hash();
                            var t;
                            e ? (t = i.getElementById(e)) ? u(t) : (t = s(i.getElementsByName(e))) ? u(t) : e === "top" && u(null) : u(null)
                        }
                        var i = t.document;
                        return e && r.$watch(function() {
                            return n.hash()
                        }, function(t, n) {
                            if (t === n && t === "") return;
                            Fn(function() {
                                r.$evalAsync(a)
                            })
                        }), a
                    }
                ]
            }

            function ar(e, t) {
                return !e && !t ? "" : e ? t ? (W(e) && (e = e.join(" ")), W(t) && (t = t.join(" ")), e + " " + t) : e : t
            }

            function fr(e) {
                for (var t = 0; t < e.length; t++) {
                    var n = e[t];
                    if (n.nodeType === or) return n
                }
            }

            function lr(e) {
                R(e) && (e = e.split(" "));
                var t = Xt();
                return T(e, function(e) {
                    e.length && (t[e] = !0)
                }), t
            }

            function cr(e) {
                return I(e) ? e : {}
            }

            function vr() {
                this.$get = ["$$rAF", "$timeout",
                    function(e, t) {
                        return e.supported ? function(t) {
                            return e(t)
                        } : function(e) {
                            return t(e, 0, !1)
                        }
                    }
                ]
            }

            function mr(e, t, n, r) {
                function d(e) {
                    try {
                        e.apply(null, vt(arguments, 1))
                    } finally {
                        c--;
                        if (c === 0)
                            while (p.length) try {
                                p.pop()()
                            } catch (t) {
                                n.error(t)
                            }
                    }
                }

                function v(e) {
                    var t = e.indexOf("#");
                    return t === -1 ? "" : e.substr(t + 1)
                }

                function x() {
                    k(), L()
                }

                function N() {
                    try {
                        return u.state
                    } catch (e) {}
                }

                function k() {
                    m = N(), m = j(m) ? null : m, ct(m, C) && (m = C), C = m
                }

                function L() {
                    if (y === i.url() && g === m) return;
                    y = i.url(), g = m, T(E, function(e) {
                        e(i.url(), m)
                    })
                }
                var i = this,
                    s = t[0],
                    o = e.location,
                    u = e.history,
                    a = e.setTimeout,
                    f = e.clearTimeout,
                    l = {};
                i.isMock = !1;
                var c = 0,
                    p = [];
                i.$$completeOutstandingRequest = d, i.$$incOutstandingRequestCount = function() {
                    c++
                }, i.notifyWhenNoOutstandingRequests = function(e) {
                    c === 0 ? e() : p.push(e)
                };
                var m, g, y = o.href,
                    b = t.find("base"),
                    w = null;
                k(), g = m, i.url = function(t, n, s) {
                    j(s) && (s = null), o !== e.location && (o = e.location), u !== e.history && (u = e.history);
                    if (t) {
                        var a = g === s;
                        if (y === t && (!r.history || a)) return i;
                        var f = y && fi(y) === fi(t);
                        return y = t, g = s, r.history && (!f || !a) ? (u[n ? "replaceState" : "pushState"](s, "", t), k(), g = m) : (f || (w = t), n ? o.replace(t) : f ? o.hash = v(t) : o.href = t), i
                    }
                    return w || o.href.replace(/%27/g, "'")
                }, i.state = function() {
                    return m
                };
                var E = [],
                    S = !1,
                    C = null;
                i.onUrlChange = function(t) {
                    return S || (r.history && h(e).on("popstate", x), h(e).on("hashchange", x), S = !0), E.push(t), t
                }, i.$$applicationDestroyed = function() {
                    h(e).off("hashchange popstate", x)
                }, i.$$checkUrlChange = L, i.baseHref = function() {
                    var e = b.attr("href");
                    return e ? e.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
                }, i.defer = function(e, t) {
                    var n;
                    return c++, n = a(function() {
                        delete l[n], d(e)
                    }, t || 0), l[n] = !0, n
                }, i.defer.cancel = function(e) {
                    return l[e] ? (delete l[e], f(e), d(P), !0) : !1
                }
            }

            function gr() {
                this.$get = ["$window", "$log", "$sniffer", "$document",
                    function(e, t, n, r) {
                        return new mr(e, r, t, n)
                    }
                ]
            }

            function yr() {
                this.$get = function() {
                    function t(t, n) {
                        function c(e) {
                            e != f && (l ? l == e && (l = e.n) : l = e, h(e.n, e.p), h(e, f), f = e, f.n = null)
                        }

                        function h(e, t) {
                            e != t && (e && (e.p = t), t && (t.n = e))
                        }
                        if (t in e) throw r("$cacheFactory")("iid", "CacheId '{0}' is already taken!", t);
                        var i = 0,
                            s = O({}, n, {
                                id: t
                            }),
                            o = {},
                            u = n && n.capacity || Number.MAX_VALUE,
                            a = {},
                            f = null,
                            l = null;
                        return e[t] = {
                            put: function(e, t) {
                                if (j(t)) return;
                                if (u < Number.MAX_VALUE) {
                                    var n = a[e] || (a[e] = {
                                        key: e
                                    });
                                    c(n)
                                }
                                return e in o || i++, o[e] = t, i > u && this.remove(l.key), t
                            },
                            get: function(e) {
                                if (u < Number.MAX_VALUE) {
                                    var t = a[e];
                                    if (!t) return;
                                    c(t)
                                }
                                return o[e]
                            },
                            remove: function(e) {
                                if (u < Number.MAX_VALUE) {
                                    var t = a[e];
                                    if (!t) return;
                                    t == f && (f = t.p), t == l && (l = t.n), h(t.n, t.p), delete a[e]
                                }
                                delete o[e], i--
                            },
                            removeAll: function() {
                                o = {}, i = 0, a = {}, f = l = null
                            },
                            destroy: function() {
                                o = null, s = null, a = null, delete e[t]
                            },
                            info: function() {
                                return O({}, s, {
                                    size: i
                                })
                            }
                        }
                    }
                    var e = {};
                    return t.info = function() {
                        var t = {};
                        return T(e, function(e, n) {
                            t[n] = e.info()
                        }), t
                    }, t.get = function(t) {
                        return e[t]
                    }, t
                }
            }

            function br() {
                this.$get = ["$cacheFactory",
                    function(e) {
                        return e("templates")
                    }
                ]
            }

            function Er(e, r) {
                function d(e, t, n) {
                    var r = /^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,
                        i = {};
                    return T(e, function(e, s) {
                        var o = e.match(r);
                        if (!o) throw wr("iscp", "Invalid {3} for directive '{0}'. Definition: {... {1}: '{2}' ...}", t, s, e, n ? "controller bindings definition" : "isolate scope definition");
                        i[s] = {
                            mode: o[1][0],
                            collection: o[2] === "*",
                            optional: o[3] === "?",
                            attrName: o[4] || s
                        }
                    }), i
                }

                function v(e, t) {
                    var n = {
                        isolateScope: null,
                        bindToController: null
                    };
                    I(e.scope) && (e.bindToController === !0 ? (n.bindToController = d(e.scope, t, !0), n.isolateScope = {}) : n.isolateScope = d(e.scope, t, !1)), I(e.bindToController) && (n.bindToController = d(e.bindToController, t, !0));
                    if (I(n.bindToController)) {
                        var r = e.controller,
                            i = e.controllerAs;
                        if (!r) throw wr("noctrl", "Cannot bind to controller without directive '{0}'s controller.", t);
                        if (!Or(r, i)) throw wr("noident", "Cannot bind to controller without identifier for directive '{0}'.", t)
                    }
                    return n
                }

                function m(e) {
                    var t = e.charAt(0);
                    if (!t || t !== o(t)) throw wr("baddir", "Directive name '{0}' is invalid. The first character must be a lowercase letter", e);
                    if (e !== e.trim()) throw wr("baddir", "Directive name '{0}' is invalid. The name should not contain leading or trailing whitespaces", e)
                }
                var i = {},
                    s = "Directive",
                    u = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/,
                    a = /(([\w\-]+)(?:\:([^;]+))?;?)/,
                    f = st("ngSrc,ngSrcset,src,srcset"),
                    l = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
                    c = /^(on[a-z]+|formaction)$/;
                this.directive = function y(t, n) {
                    return Ut(t, "directive"), R(t) ? (m(t), qt(n, "directiveFactory"), i.hasOwnProperty(t) || (i[t] = [], e.factory(t + s, ["$injector", "$exceptionHandler",
                        function(e, n) {
                            var r = [];
                            return T(i[t], function(i, s) {
                                try {
                                    var o = e.invoke(i);
                                    X(o) ? o = {
                                        compile: B(o)
                                    } : !o.compile && o.link && (o.compile = B(o.link)), o.priority = o.priority || 0, o.index = s, o.name = o.name || t, o.require = o.require || o.controller && o.name, o.restrict = o.restrict || "EA";
                                    var u = o.$$bindings = v(o, o.name);
                                    I(u.isolateScope) && (o.$$isolateBindings = u.isolateScope), r.push(o)
                                } catch (a) {
                                    n(a)
                                }
                            }), r
                        }
                    ])), i[t].push(n)) : T(t, C(y)), this
                }, this.aHrefSanitizationWhitelist = function(e) {
                    return F(e) ? (r.aHrefSanitizationWhitelist(e), this) : r.aHrefSanitizationWhitelist()
                }, this.imgSrcSanitizationWhitelist = function(e) {
                    return F(e) ? (r.imgSrcSanitizationWhitelist(e), this) : r.imgSrcSanitizationWhitelist()
                };
                var g = !0;
                this.debugInfoEnabled = function(e) {
                    return F(e) ? (g = e, this) : g
                }, this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri",
                    function(e, r, d, v, m, y, b, w, E, S, x) {
                        function C(e, t) {
                            try {
                                e.addClass(t)
                            } catch (n) {}
                        }

                        function _(e, t, n, r, i) {
                            e instanceof h || (e = h(e)), T(e, function(t, n) {
                                t.nodeType == Jt && t.nodeValue.match(/\S+/) && (e[n] = h(t).wrap("<span></span>").parent()[0])
                            });
                            var s = j(e, t, e, n, r, i);
                            _.$$addScopeClass(e);
                            var o = null;
                            return function(n, r, i) {
                                qt(n, "scope"), i = i || {};
                                var u = i.parentBoundTranscludeFn,
                                    a = i.transcludeControllers,
                                    f = i.futureParentElement;
                                u && u.$$boundTransclude && (u = u.$$boundTransclude), o || (o = B(f));
                                var l;
                                o !== "html" ? l = h(rt(o, h("<div>").append(e).html())) : r ? l = In.clone.call(e) : l = e;
                                if (a)
                                    for (var c in a) l.data("$" + c + "Controller", a[c].instance);
                                return _.$$addScopeInfo(l, n), r && r(l, n), s && s(n, l, l, u), l
                            }
                        }

                        function B(e) {
                            var t = e && e[0];
                            return t ? ot(t) !== "foreignobject" && t.toString().match(/SVG/) ? "svg" : "html" : "html"
                        }

                        function j(e, t, r, i, s, o) {
                            function g(e, r, i, s) {
                                var o, a, f, l, c, p, d, m, g;
                                if (v) {
                                    var y = r.length;
                                    g = new Array(y);
                                    for (c = 0; c < u.length; c += 3) d = u[c], g[d] = r[d]
                                } else g = r;
                                for (c = 0, p = u.length; c < p;) {
                                    f = g[u[c++]], o = u[c++], a = u[c++];
                                    if (o) {
                                        if (o.scope) {
                                            l = e.$new(), _.$$addScopeInfo(h(f), l);
                                            var b = o.$$destroyBindings;
                                            b && (o.$$destroyBindings = null, l.$on("$destroyed", b))
                                        } else l = e;
                                        o.transcludeOnThisElement ? m = F(e, o.transclude, s, o.elementTranscludeOnThisElement) : !o.templateOnThisElement && s ? m = s : !s && t ? m = F(e, t) : m = null, o(a, l, f, i, m, o)
                                    } else a && a(e, f.childNodes, n, s)
                                }
                            }
                            var u = [],
                                a, f, l, c, p, d, v;
                            for (var m = 0; m < e.length; m++) {
                                a = new N, f = q(e[m], [], a, m === 0 ? i : n, s), l = f.length ? V(f, e[m], a, t, r, null, [], [], o) : null, l && l.scope && _.$$addScopeClass(a.$$element), p = l && l.terminal || !(c = e[m].childNodes) || !c.length ? null : j(c, l ? (l.transcludeOnThisElement || !l.templateOnThisElement) && l.transclude : t);
                                if (l || p) u.push(m, l, p), d = !0, v = v || l;
                                o = null
                            }
                            return d ? g : null
                        }

                        function F(e, t, n, r) {
                            var i = function(r, i, s, o, u) {
                                return r || (r = e.$new(!1, u), r.$$transcluded = !0), t(r, i, {
                                    parentBoundTranscludeFn: n,
                                    transcludeControllers: s,
                                    futureParentElement: o
                                })
                            };
                            return i
                        }

                        function q(e, t, n, r, i) {
                            var s = e.nodeType,
                                o = n.$attr,
                                f, l;
                            switch (s) {
                                case Vt:
                                    K(t, xr(ot(e)), "E", r, i);
                                    for (var c, h, p, d, v, m, g = e.attributes, y = 0, b = g && g.length; y < b; y++) {
                                        var w = !1,
                                            E = !1;
                                        c = g[y], h = c.name, v = nt(c.value), d = xr(h);
                                        if (m = M.test(d)) h = h.replace(Sr, "").substr(8).replace(/_(.)/g, function(e, t) {
                                            return t.toUpperCase()
                                        });
                                        var S = d.replace(/(Start|End)$/, "");
                                        Q(S) && d === S + "Start" && (w = h, E = h.substr(0, h.length - 5) + "end", h = h.substr(0, h.length - 6)), p = xr(h.toLowerCase()), o[p] = h;
                                        if (m || !n.hasOwnProperty(p)) n[p] = v, zn(e, p) && (n[p] = !0);
                                        st(e, t, v, p, m), K(t, p, "A", r, i, w, E)
                                    }
                                    l = e.className, I(l) && (l = l.animVal);
                                    if (R(l) && l !== "")
                                        while (f = a.exec(l)) p = xr(f[2]), K(t, p, "C", r, i) && (n[p] = nt(f[3])), l = l.substr(f.index + f[0].length);
                                    break;
                                case Jt:
                                    tt(t, e.nodeValue);
                                    break;
                                case Kt:
                                    try {
                                        f = u.exec(e.nodeValue), f && (p = xr(f[1]), K(t, p, "M", r, i) && (n[p] = nt(f[2])))
                                    } catch (x) {}
                            }
                            return t.sort(Z), t
                        }

                        function U(e, t, n) {
                            var r = [],
                                i = 0;
                            if (t && e.hasAttribute && e.hasAttribute(t)) {
                                do {
                                    if (!e) throw wr("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", t, n);
                                    e.nodeType == Vt && (e.hasAttribute(t) && i++, e.hasAttribute(n) && i--), r.push(e), e = e.nextSibling
                                } while (i > 0)
                            } else r.push(e);
                            return h(r)
                        }

                        function z(e, t, n) {
                            return function(r, i, s, o, u) {
                                return i = U(i[0], t, n), e(r, i, s, o, u)
                            }
                        }

                        function V(e, r, i, s, o, u, a, f, c) {
                            function tt(e, t, n, r) {
                                if (e) {
                                    n && (e = z(e, n, r)), e.require = C.require, e.directiveName = k;
                                    if (g === C || C.$$isolateScope) e = ft(e, {
                                        isolateScope: !0
                                    });
                                    a.push(e)
                                }
                                if (t) {
                                    n && (t = z(t, n, r)), t.require = C.require, t.directiveName = k;
                                    if (g === C || C.$$isolateScope) t = ft(t, {
                                        isolateScope: !0
                                    });
                                    f.push(t)
                                }
                            }

                            function it(e, t, n, r) {
                                var i;
                                if (R(t)) {
                                    var s = t.match(l),
                                        o = t.substring(s[0].length),
                                        u = s[1] || s[3],
                                        a = s[2] === "?";
                                    u === "^^" ? n = n.parent() : (i = r && r[o], i = i && i.instance);
                                    if (!i) {
                                        var f = "$" + o + "Controller";
                                        i = u ? n.inheritedData(f) : n.data(f)
                                    }
                                    if (!i && !a) throw wr("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", o, e)
                                } else if (W(t)) {
                                    i = [];
                                    for (var c = 0, h = t.length; c < h; c++) i[c] = it(e, t[c], n, r)
                                }
                                return i || null
                            }

                            function st(e, t, n, r, i, s) {
                                var o = Xt();
                                for (var u in r) {
                                    var a = r[u],
                                        f = {
                                            $scope: a === g || a.$$isolateScope ? i : s,
                                            $element: e,
                                            $attrs: t,
                                            $transclude: n
                                        },
                                        l = a.controller;
                                    l == "@" && (l = t[a.name]);
                                    var c = y(l, f, !0, a.controllerAs);
                                    o[a.name] = c, x || e.data("$" + a.name + "Controller", c.instance)
                                }
                                return o
                            }

                            function ot(e, t, s, o, u, l) {
                                function P(e, t, r) {
                                    var i;
                                    return J(e) || (r = t, t = e, e = n), x && (i = E), r || (r = x ? T.parent() : T), u(e, t, i, r, D)
                                }
                                var c, p, d, y, w, E, S, T, k;
                                r === s ? (k = i, T = i.$$element) : (T = h(s), k = new N(T, i)), g && (w = t.$new(!0)), u && (S = P, S.$$boundTransclude = u), m && (E = st(T, k, S, m, w, t)), g && (_.$$addScopeInfo(T, w, !0, !b || b !== g && b !== g.$$originalDirective), _.$$addScopeClass(T, !0), w.$$isolateBindings = g.$$isolateBindings, ht(t, k, w, w.$$isolateBindings, g, w));
                                if (E) {
                                    var L = g || v,
                                        A, O;
                                    L && E[L.name] && (A = L.$$bindings.bindToController, y = E[L.name], y && y.identifier && A && (O = y, l.$$destroyBindings = ht(t, k, y.instance, A, L)));
                                    for (c in E) {
                                        y = E[c];
                                        var M = y();
                                        M !== y.instance && (y.instance = M, T.data("$" + C.name + "Controller", M), y === O && (l.$$destroyBindings(), l.$$destroyBindings = ht(t, k, M, A, L)))
                                    }
                                }
                                for (c = 0, p = a.length; c < p; c++) d = a[c], lt(d, d.isolateScope ? w : t, T, k, d.require && it(d.directiveName, d.require, T, E), S);
                                var D = t;
                                g && (g.template || g.templateUrl === null) && (D = w), e && e(D, s.childNodes, n, u);
                                for (c = f.length - 1; c >= 0; c--) d = f[c], lt(d, d.isolateScope ? w : t, T, k, d.require && it(d.directiveName, d.require, T, E), S)
                            }
                            c = c || {};
                            var p = -Number.MAX_VALUE,
                                v, m = c.controllerDirectives,
                                g = c.newIsolateScopeDirective,
                                b = c.templateDirective,
                                w = c.nonTlbTranscludeDirective,
                                E = !1,
                                S = !1,
                                x = c.hasElementTranscludeDirective,
                                T = i.$$element = h(r),
                                C, k, L, O = u,
                                M = s,
                                D, P;
                            for (var H = 0, B = e.length; H < B; H++) {
                                C = e[H];
                                var j = C.$$start,
                                    F = C.$$end;
                                j && (T = U(r, j, F)), L = n;
                                if (p > C.priority) break;
                                if (P = C.scope) C.templateUrl || (I(P) ? (et("new/isolated scope", g || v, C, T), g = C) : et("new/isolated scope", g, C, T)), v = v || C;
                                k = C.name, !C.templateUrl && C.controller && (P = C.controller, m = m || Xt(), et("'" + k + "' controller", m[k], C, T), m[k] = C);
                                if (P = C.transclude) E = !0, C.$$tlb || (et("transclusion", w, C, T), w = C), P == "element" ? (x = !0, p = C.priority, L = T, T = i.$$element = h(t.createComment(" " + k + ": " + i[k] + " ")), r = T[0], ut(o, vt(L), r), M = _(L, s, p, O && O.name, {
                                    nonTlbTranscludeDirective: w
                                })) : (L = h(Tn(r)).contents(), T.empty(), M = _(L, s));
                                if (C.template) {
                                    S = !0, et("template", b, C, T), b = C, P = X(C.template) ? C.template(T, i) : C.template, P = A(P);
                                    if (C.replace) {
                                        O = C, bn(P) ? L = [] : L = kr(rt(C.templateNamespace, nt(P))), r = L[0];
                                        if (L.length != 1 || r.nodeType !== Vt) throw wr("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", k, "");
                                        ut(o, T, r);
                                        var V = {
                                                $attr: {}
                                            },
                                            K = q(r, [], V),
                                            Q = e.splice(H + 1, e.length - (H + 1));
                                        g && $(K), e = e.concat(K).concat(Q), G(i, V), B = e.length
                                    } else T.html(P)
                                }
                                if (C.templateUrl) S = !0, et("template", b, C, T), b = C, C.replace && (O = C), ot = Y(e.splice(H, e.length - H), T, i, o, E && M, a, f, {
                                    controllerDirectives: m,
                                    newIsolateScopeDirective: g,
                                    templateDirective: b,
                                    nonTlbTranscludeDirective: w
                                }), B = e.length;
                                else if (C.compile) try {
                                    D = C.compile(T, i, M), X(D) ? tt(null, D, j, F) : D && tt(D.pre, D.post, j, F)
                                } catch (Z) {
                                    d(Z, xt(T))
                                }
                                C.terminal && (ot.terminal = !0, p = Math.max(p, C.priority))
                            }
                            return ot.scope = v && v.scope === !0, ot.transcludeOnThisElement = E, ot.elementTranscludeOnThisElement = x, ot.templateOnThisElement = S, ot.transclude = M, c.hasElementTranscludeDirective = x, ot
                        }

                        function $(e) {
                            for (var t = 0, n = e.length; t < n; t++) e[t] = D(e[t], {
                                $$isolateScope: !0
                            })
                        }

                        function K(t, r, o, u, a, f, l) {
                            if (r === a) return null;
                            var c = null;
                            if (i.hasOwnProperty(r))
                                for (var h, p = e.get(r + s), v = 0, m = p.length; v < m; v++) try {
                                    h = p[v], (u === n || u > h.priority) && h.restrict.indexOf(o) != -1 && (f && (h = D(h, {
                                        $$start: f,
                                        $$end: l
                                    })), t.push(h), c = h)
                                } catch (g) {
                                    d(g)
                                }
                            return c
                        }

                        function Q(t) {
                            if (i.hasOwnProperty(t))
                                for (var n, r = e.get(t + s), o = 0, u = r.length; o < u; o++) {
                                    n = r[o];
                                    if (n.multiElement) return !0
                                }
                            return !1
                        }

                        function G(e, t) {
                            var n = t.$attr,
                                r = e.$attr,
                                i = e.$$element;
                            T(e, function(r, i) {
                                i.charAt(0) != "$" && (t[i] && t[i] !== r && (r += (i === "style" ? ";" : " ") + t[i]), e.$set(i, r, !0, n[i]))
                            }), T(t, function(t, s) {
                                s == "class" ? (C(i, t), e["class"] = (e["class"] ? e["class"] + " " : "") + t) : s == "style" ? (i.attr("style", i.attr("style") + ";" + t), e.style = (e.style ? e.style + ";" : "") + t) : s.charAt(0) != "$" && !e.hasOwnProperty(s) && (e[s] = t, r[s] = n[s])
                            })
                        }

                        function Y(e, t, n, r, i, s, o, u) {
                            var a = [],
                                f, l, c = t[0],
                                p = e.shift(),
                                d = D(p, {
                                    templateUrl: null,
                                    transclude: null,
                                    replace: null,
                                    $$originalDirective: p
                                }),
                                m = X(p.templateUrl) ? p.templateUrl(t, n) : p.templateUrl,
                                g = p.templateNamespace;
                            return t.empty(), v(E.getTrustedResourceUrl(m)).then(function(v) {
                                    var y, b, w, E;
                                    v = A(v);
                                    if (p.replace) {
                                        bn(v) ? w = [] : w = kr(rt(g, nt(v))), y = w[0];
                                        if (w.length != 1 || y.nodeType !== Vt) throw wr("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", p.name, m);
                                        b = {
                                            $attr: {}
                                        }, ut(r, t, y);
                                        var S = q(y, [], b);
                                        I(p.scope) && $(S), e = S.concat(e), G(n, b)
                                    } else y = c, t.html(v);
                                    e.unshift(d), f = V(e, y, n, i, t, p, s, o, u), T(r, function(e, n) {
                                        e == y && (r[n] = t[0])
                                    }), l = j(t[0].childNodes, i);
                                    while (a.length) {
                                        var x = a.shift(),
                                            N = a.shift(),
                                            k = a.shift(),
                                            L = a.shift(),
                                            O = t[0];
                                        if (x.$$destroyed) continue;
                                        if (N !== c) {
                                            var M = N.className;
                                            if (!u.hasElementTranscludeDirective || !p.replace) O = Tn(y);
                                            ut(k, h(N), O), C(h(O), M)
                                        }
                                        f.transcludeOnThisElement ? E = F(x, f.transclude, L) : E = L, f(l, x, O, r, E, f)
                                    }
                                    a = null
                                }),
                                function(t, n, r, i, s) {
                                    var o = s;
                                    if (n.$$destroyed) return;
                                    a ? a.push(n, r, i, o) : (f.transcludeOnThisElement && (o = F(n, f.transclude, s)), f(l, n, r, i, o, f))
                                }
                        }

                        function Z(e, t) {
                            var n = t.priority - e.priority;
                            return n !== 0 ? n : e.name !== t.name ? e.name < t.name ? -1 : 1 : e.index - t.index
                        }

                        function et(e, t, n, r) {
                            if (t) throw wr("multidir", "Multiple directives [{0}, {1}] asking for {2} on: {3}", t.name, n.name, e, xt(r))
                        }

                        function tt(e, t) {
                            var n = r(t, !0);
                            n && e.push({
                                priority: 0,
                                compile: function(t) {
                                    var r = t.parent(),
                                        i = !!r.length;
                                    return i && _.$$addBindingClass(r),
                                        function(t, r) {
                                            var s = r.parent();
                                            i || _.$$addBindingClass(s), _.$$addBindingInfo(s, n.expressions), t.$watch(n, function(t) {
                                                r[0].nodeValue = t
                                            })
                                        }
                                }
                            })
                        }

                        function rt(e, n) {
                            e = o(e || "html");
                            switch (e) {
                                case "svg":
                                case "math":
                                    var r = t.createElement("div");
                                    return r.innerHTML = "<" + e + ">" + n + "</" + e + ">", r.childNodes[0].childNodes;
                                default:
                                    return n
                            }
                        }

                        function it(e, t) {
                            if (t == "srcdoc") return E.HTML;
                            var n = ot(e);
                            if (t == "xlinkHref" || n == "form" && t == "action" || n != "img" && (t == "src" || t == "ngSrc")) return E.RESOURCE_URL
                        }

                        function st(e, t, n, i, s) {
                            var o = it(e, i);
                            s = f[i] || s;
                            var u = r(n, !0, o, s);
                            if (!u) return;
                            if (i === "multiple" && ot(e) === "select") throw wr("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", xt(e));
                            t.push({
                                priority: 100,
                                compile: function() {
                                    return {
                                        pre: function(t, a, f) {
                                            var l = f.$$observers || (f.$$observers = {});
                                            if (c.test(i)) throw wr("nodomevents", "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");
                                            var h = f[i];
                                            h !== n && (u = h && r(h, !0, o, s), n = h);
                                            if (!u) return;
                                            f[i] = u(t), (l[i] || (l[i] = [])).$$inter = !0, (f.$$observers && f.$$observers[i].$$scope || t).$watch(u, function(t, n) {
                                                i === "class" && t != n ? f.$updateClass(t, n) : f.$set(i, t)
                                            })
                                        }
                                    }
                                }
                            })
                        }

                        function ut(e, n, r) {
                            var i = n[0],
                                s = n.length,
                                o = i.parentNode,
                                u, a;
                            if (e)
                                for (u = 0, a = e.length; u < a; u++)
                                    if (e[u] == i) {
                                        e[u++] = r;
                                        for (var f = u, l = f + s - 1, c = e.length; f < c; f++, l++) l < c ? e[f] = e[l] : delete e[f];
                                        e.length -= s - 1, e.context === i && (e.context = r);
                                        break
                                    }
                            o && o.replaceChild(r, i);
                            var d = t.createDocumentFragment();
                            d.appendChild(i), h(r).data(h(i).data()), p ? (Ft = !0, p.cleanData([i])) : delete h.cache[i[h.expando]];
                            for (var v = 1, m = n.length; v < m; v++) {
                                var g = n[v];
                                h(g).remove(), d.appendChild(g), delete n[v]
                            }
                            n[0] = r, n.length = 1
                        }

                        function ft(e, t) {
                            return O(function() {
                                return e.apply(null, arguments)
                            }, e, t)
                        }

                        function lt(e, t, n, r, i, s) {
                            try {
                                e(t, n, r, i, s)
                            } catch (o) {
                                d(o, xt(n))
                            }
                        }

                        function ht(e, t, n, i, s, o) {
                            var u;
                            T(i, function(i, o) {
                                var a = i.attrName,
                                    f = i.optional,
                                    l = i.mode,
                                    c, h, p, d;
                                switch (l) {
                                    case "@":
                                        t.$observe(a, function(e) {
                                            n[o] = e
                                        }), t.$$observers[a].$$scope = e, t[a] && (n[o] = r(t[a])(e));
                                        break;
                                    case "=":
                                        if (f && !t[a]) return;
                                        h = m(t[a]), h.literal ? d = ct : d = function(e, t) {
                                            return e === t || e !== e && t !== t
                                        }, p = h.assign || function() {
                                            throw c = n[o] = h(e), wr("nonassign", "Expression '{0}' used with directive '{1}' is non-assignable!", t[a], s.name)
                                        }, c = n[o] = h(e);
                                        var v = function(r) {
                                            return d(r, n[o]) || (d(r, c) ? p(e, r = n[o]) : n[o] = r), c = r
                                        };
                                        v.$stateful = !0;
                                        var g;
                                        i.collection ? g = e.$watchCollection(t[a], v) : g = e.$watch(m(t[a], v), null, h.literal), u = u || [], u.push(g);
                                        break;
                                    case "&":
                                        if (!t.hasOwnProperty(a) && f) break;
                                        h = m(t[a]);
                                        if (h === P && f) break;
                                        n[o] = function(t) {
                                            return h(e, t)
                                        }
                                }
                            });
                            var a = u ? function() {
                                for (var t = 0, n = u.length; t < n; ++t) u[t]()
                            } : P;
                            return o && a !== P ? (o.$on("$destroy", a), P) : a
                        }
                        var N = function(e, t) {
                            if (t) {
                                var n = Object.keys(t),
                                    r, i, s;
                                for (r = 0, i = n.length; r < i; r++) s = n[r], this[s] = t[s]
                            } else this.$attr = {};
                            this.$$element = e
                        };
                        N.prototype = {
                            $normalize: xr,
                            $addClass: function(e) {
                                e && e.length > 0 && S.addClass(this.$$element, e)
                            },
                            $removeClass: function(e) {
                                e && e.length > 0 && S.removeClass(this.$$element, e)
                            },
                            $updateClass: function(e, t) {
                                var n = Cr(e, t);
                                n && n.length && S.addClass(this.$$element, n);
                                var r = Cr(t, e);
                                r && r.length && S.removeClass(this.$$element, r)
                            },
                            $set: function(e, t, r, i) {
                                var s = this.$$element[0],
                                    o = zn(s, e),
                                    u = Wn(s, e),
                                    a = e,
                                    f;
                                o ? (this.$$element.prop(e, t), i = o) : u && (this[u] = t, a = u), this[e] = t, i ? this.$attr[e] = i : (i = this.$attr[e], i || (this.$attr[e] = i = Bt(e, "-"))), f = ot(this.$$element);
                                if (f === "a" && e === "href" || f === "img" && e === "src") this[e] = t = x(t, e === "src");
                                else if (f === "img" && e === "srcset") {
                                    var l = "",
                                        c = nt(t),
                                        h = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,
                                        p = /\s/.test(c) ? h : /(,)/,
                                        v = c.split(p),
                                        m = Math.floor(v.length / 2);
                                    for (var g = 0; g < m; g++) {
                                        var y = g * 2;
                                        l += x(nt(v[y]), !0), l += " " + nt(v[y + 1])
                                    }
                                    var b = nt(v[g * 2]).split(/\s/);
                                    l += x(nt(b[0]), !0), b.length === 2 && (l += " " + nt(b[1])), this[e] = t = l
                                }
                                r !== !1 && (t === null || t === n ? this.$$element.removeAttr(i) : this.$$element.attr(i, t));
                                var w = this.$$observers;
                                w && T(w[a], function(e) {
                                    try {
                                        e(t)
                                    } catch (n) {
                                        d(n)
                                    }
                                })
                            },
                            $observe: function(e, t) {
                                var n = this,
                                    r = n.$$observers || (n.$$observers = Xt()),
                                    i = r[e] || (r[e] = []);
                                return i.push(t), b.$evalAsync(function() {
                                        !i.$$inter && n.hasOwnProperty(e) && t(n[e])
                                    }),
                                    function() {
                                        at(i, t)
                                    }
                            }
                        };
                        var k = r.startSymbol(),
                            L = r.endSymbol(),
                            A = k == "{{" || L == "}}" ? H : function(t) {
                                return t.replace(/\{\{/g, k).replace(/}}/g, L)
                            },
                            M = /^ngAttr[A-Z]/;
                        return _.$$addBindingInfo = g ? function(t, n) {
                            var r = t.data("$binding") || [];
                            W(n) ? r = r.concat(n) : r.push(n), t.data("$binding", r)
                        } : P, _.$$addBindingClass = g ? function(t) {
                            C(t, "ng-binding")
                        } : P, _.$$addScopeInfo = g ? function(t, n, r, i) {
                            var s = r ? i ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope";
                            t.data(s, n)
                        } : P, _.$$addScopeClass = g ? function(t, n) {
                            C(t, n ? "ng-isolate-scope" : "ng-scope")
                        } : P, _
                    }
                ]
            }

            function xr(e) {
                return pn(e.replace(Sr, ""))
            }

            function Tr(e, t, n, r) {}

            function Nr(e, t, n, r, i) {}

            function Cr(e, t) {
                var n = "",
                    r = e.split(/\s+/),
                    i = t.split(/\s+/);
                e: for (var s = 0; s < r.length; s++) {
                    var o = r[s];
                    for (var u = 0; u < i.length; u++)
                        if (o == i[u]) continue e;
                    n += (n.length > 0 ? " " : "") + o
                }
                return n
            }

            function kr(e) {
                e = h(e);
                var t = e.length;
                if (t <= 1) return e;
                while (t--) {
                    var n = e[t];
                    n.nodeType === Kt && v.call(e, t, 1)
                }
                return e
            }

            function Or(e, t) {
                if (t && R(t)) return t;
                if (R(e)) {
                    var n = Ar.exec(e);
                    if (n) return n[3]
                }
            }

            function Mr() {
                var e = {},
                    t = !1;
                this.register = function(t, n) {
                    Ut(t, "controller"), I(t) ? O(e, t) : e[t] = n
                }, this.allowGlobals = function() {
                    t = !0
                }, this.$get = ["$injector", "$window",
                    function(i, s) {
                        function o(e, t, n, i) {
                            if (!e || !I(e.$scope)) throw r("$controller")("noscp", "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", i, t);
                            e.$scope[t] = n
                        }
                        return function(r, u, a, f) {
                            var l, c, h, p;
                            a = a === !0, f && R(f) && (p = f);
                            if (R(r)) {
                                c = r.match(Ar);
                                if (!c) throw Lr("ctrlfmt", "Badly formed controller string '{0}'. Must match `__name__ as __id__` or `__name__`.", r);
                                h = c[1], p = p || c[3], r = e.hasOwnProperty(h) ? e[h] : zt(u.$scope, h, !0) || (t ? zt(s, h, !0) : n), Rt(r, h, !0)
                            }
                            if (a) {
                                var d = (W(r) ? r[r.length - 1] : r).prototype;
                                l = Object.create(d || null), p && o(u, p, l, h || r.name);
                                var v;
                                return v = O(function() {
                                    var e = i.invoke(r, l, u, h);
                                    return e !== l && (I(e) || X(e)) && (l = e, p && o(u, p, l, h || r.name)), l
                                }, {
                                    instance: l,
                                    identifier: p
                                })
                            }
                            return l = i.instantiate(r, u, h), p && o(u, p, l, h || r.name), l
                        }
                    }
                ]
            }

            function _r() {
                this.$get = ["$window",
                    function(e) {
                        return h(e.document)
                    }
                ]
            }

            function Dr() {
                this.$get = ["$log",
                    function(e) {
                        return function(t, n) {
                            e.error.apply(e, arguments)
                        }
                    }
                ]
            }

            function Ir(e) {
                return I(e) ? z(e) ? e.toISOString() : yt(e) : e
            }

            function qr() {
                this.$get = function() {
                    return function(t) {
                        if (!t) return "";
                        var n = [];
                        return N(t, function(e, t) {
                            if (e === null || j(e)) return;
                            W(e) ? T(e, function(e, r) {
                                n.push(Lt(t) + "=" + Lt(Ir(e)))
                            }) : n.push(Lt(t) + "=" + Lt(Ir(e)))
                        }), n.join("&")
                    }
                }
            }

            function Rr() {
                this.$get = function() {
                    return function(t) {
                        function r(e, t, i) {
                            if (e === null || j(e)) return;
                            W(e) ? T(e, function(e) {
                                r(e, t + "[]")
                            }) : I(e) && !z(e) ? N(e, function(e, n) {
                                r(e, t + (i ? "" : "[") + n + (i ? "" : "]"))
                            }) : n.push(Lt(t) + "=" + Lt(Ir(e)))
                        }
                        if (!t) return "";
                        var n = [];
                        return r(t, "", !0), n.join("&")
                    }
                }
            }

            function Ur(e, t) {
                if (R(e)) {
                    var n = e.replace(Fr, "").trim();
                    if (n) {
                        var r = t("Content-Type");
                        if (r && r.indexOf(Pr) === 0 || zr(n)) e = bt(n)
                    }
                }
                return e
            }

            function zr(e) {
                var t = e.match(Br);
                return t && jr[t[0]].test(e)
            }

            function Wr(e) {
                function r(e, n) {
                    e && (t[e] = t[e] ? t[e] + ", " + n : n)
                }
                var t = Xt(),
                    n;
                return R(e) ? T(e.split("\n"), function(e) {
                    n = e.indexOf(":"), r(o(nt(e.substr(0, n))), nt(e.substr(n + 1)))
                }) : I(e) && T(e, function(e, t) {
                    r(o(t), nt(e))
                }), t
            }

            function Xr(e) {
                var t;
                return function(n) {
                    t || (t = Wr(e));
                    if (n) {
                        var r = t[o(n)];
                        return r === void 0 && (r = null), r
                    }
                    return t
                }
            }

            function Vr(e, t, n, r) {
                return X(r) ? r(e, t, n) : (T(r, function(r) {
                    e = r(e, t, n)
                }), e)
            }

            function $r(e) {
                return 200 <= e && e < 300
            }

            function Jr() {
                var e = this.defaults = {
                        transformResponse: [Ur],
                        transformRequest: [

                            function(e) {
                                return I(e) && !K(e) && !G(e) && !Q(e) ?
                                    yt(e) : e
                            }
                        ],
                        headers: {
                            common: {
                                Accept: "application/json, text/plain, */*"
                            },
                            post: lt(Hr),
                            put: lt(Hr),
                            patch: lt(Hr)
                        },
                        xsrfCookieName: "XSRF-TOKEN",
                        xsrfHeaderName: "X-XSRF-TOKEN",
                        paramSerializer: "$httpParamSerializer"
                    },
                    t = !1;
                this.useApplyAsync = function(e) {
                    return F(e) ? (t = !!e, this) : t
                };
                var i = this.interceptors = [];
                this.$get = ["$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector",
                    function(s, u, f, l, c, h) {
                        function v(t) {
                            function v(e) {
                                var t = O({}, e);
                                return e.data ? t.data = Vr(e.data, e.headers, e.status, i.transformResponse) : t.data = e.data, $r(e.status) ? t : c.reject(t)
                            }

                            function m(e, t) {
                                var n, r = {};
                                return T(e, function(e, i) {
                                    X(e) ? (n = e(t), n != null && (r[i] = n)) : r[i] = e
                                }), r
                            }

                            function g(t) {
                                var n = e.headers,
                                    r = O({}, t.headers),
                                    i, s, u;
                                n = O({}, n.common, n[o(t.method)]);
                                e: for (i in n) {
                                    s = o(i);
                                    for (u in r)
                                        if (o(u) === s) continue e;
                                    r[i] = n[i]
                                }
                                return m(r, lt(t))
                            }
                            if (!w.isObject(t)) throw r("$http")("badreq", "Http request configuration must be an object.  Received: {0}", t);
                            var i = O({
                                method: "get",
                                transformRequest: e.transformRequest,
                                transformResponse: e.transformResponse,
                                paramSerializer: e.paramSerializer
                            }, t);
                            i.headers = g(t), i.method = a(i.method), i.paramSerializer = R(i.paramSerializer) ? h.get(i.paramSerializer) : i.paramSerializer;
                            var s = function(t) {
                                    var r = t.headers,
                                        i = Vr(t.data, Xr(r), n, t.transformRequest);
                                    return j(i) && T(r, function(e, t) {
                                        o(t) === "content-type" && delete r[t]
                                    }), j(t.withCredentials) && !j(e.withCredentials) && (t.withCredentials = e.withCredentials), y(t, i).then(v, v)
                                },
                                u = [s, n],
                                f = c.when(i);
                            T(d, function(e) {
                                (e.request || e.requestError) && u.unshift(e.request, e.requestError), (e.response || e.responseError) && u.push(e.response, e.responseError)
                            });
                            while (u.length) {
                                var l = u.shift(),
                                    p = u.shift();
                                f = f.then(l, p)
                            }
                            return f.success = function(e) {
                                return Rt(e, "fn"), f.then(function(t) {
                                    e(t.data, t.status, t.headers, i)
                                }), f
                            }, f.error = function(e) {
                                return Rt(e, "fn"), f.then(null, function(t) {
                                    e(t.data, t.status, t.headers, i)
                                }), f
                            }, f
                        }

                        function m(e) {
                            T(arguments, function(e) {
                                v[e] = function(t, n) {
                                    return v(O({}, n || {}, {
                                        method: e,
                                        url: t
                                    }))
                                }
                            })
                        }

                        function g(e) {
                            T(arguments, function(e) {
                                v[e] = function(t, n, r) {
                                    return v(O({}, r || {}, {
                                        method: e,
                                        url: t,
                                        data: n
                                    }))
                                }
                            })
                        }

                        function y(r, i) {
                            function y(e, n, r, i) {
                                function s() {
                                    w(n, e, r, i)
                                }
                                f && ($r(e) ? f.put(m, [e, n, Wr(r), i]) : f.remove(m)), t ? l.$applyAsync(s) : (s(), l.$$phase || l.$apply())
                            }

                            function w(e, t, n, i) {
                                t = Math.max(t, 0), ($r(t) ? o.resolve : o.reject)({
                                    data: e,
                                    status: t,
                                    headers: Xr(n),
                                    config: r,
                                    statusText: i
                                })
                            }

                            function E(e) {
                                w(e.data, e.status, lt(e.headers()), e.statusText)
                            }

                            function S() {
                                var e = v.pendingRequests.indexOf(r);
                                e !== -1 && v.pendingRequests.splice(e, 1)
                            }
                            var o = c.defer(),
                                a = o.promise,
                                f, h, d = r.headers,
                                m = b(r.url, r.paramSerializer(r.params));
                            v.pendingRequests.push(r), a.then(S, S), (r.cache || e.cache) && r.cache !== !1 && (r.method === "GET" || r.method === "JSONP") && (f = I(r.cache) ? r.cache : I(e.cache) ? e.cache : p), f && (h = f.get(m), F(h) ? Z(h) ? h.then(E, E) : W(h) ? w(h[1], h[0], lt(h[2]), h[3]) : w(h, 200, {}, "OK") : f.put(m, a));
                            if (j(h)) {
                                var g = ms(r.url) ? u()[r.xsrfCookieName || e.xsrfCookieName] : n;
                                g && (d[r.xsrfHeaderName || e.xsrfHeaderName] = g), s(r.method, m, i, y, d, r.timeout, r.withCredentials, r.responseType)
                            }
                            return a
                        }

                        function b(e, t) {
                            return t.length > 0 && (e += (e.indexOf("?") == -1 ? "?" : "&") + t), e
                        }
                        var p = f("$http");
                        e.paramSerializer = R(e.paramSerializer) ? h.get(e.paramSerializer) : e.paramSerializer;
                        var d = [];
                        return T(i, function(e) {
                            d.unshift(R(e) ? h.get(e) : h.invoke(e))
                        }), v.pendingRequests = [], m("get", "delete", "head", "jsonp"), g("post", "put", "patch"), v.defaults = e, v
                    }
                ]
            }

            function Kr() {
                return new e.XMLHttpRequest
            }

            function Qr() {
                this.$get = ["$browser", "$window", "$document",
                    function(e, t, n) {
                        return Gr(e, Kr, e.defer, t.angular.callbacks, n[0])
                    }
                ]
            }

            function Gr(e, t, r, i, s) {
                function u(e, t, n) {
                    var r = s.createElement("script"),
                        o = null;
                    return r.type = "text/javascript", r.src = e, r.async = !0, o = function(e) {
                        un(r, "load", o), un(r, "error", o), s.body.removeChild(r), r = null;
                        var u = -1,
                            a = "unknown";
                        e && (e.type === "load" && !i[t].called && (e = {
                            type: "error"
                        }), a = e.type, u = e.type === "error" ? 404 : 200), n && n(u, a)
                    }, on(r, "load", o), on(r, "error", o), s.body.appendChild(r), o
                }
                return function(s, a, f, l, c, h, p, d) {
                    function E() {
                        m && m(), g && g.abort()
                    }

                    function S(t, i, s, o, u) {
                        w !== n && r.cancel(w), m = g = null, t(i, s, o, u), e.$$completeOutstandingRequest(P)
                    }
                    e.$$incOutstandingRequestCount(), a = a || e.url();
                    if (o(s) == "jsonp") {
                        var v = "_" + (i.counter++).toString(36);
                        i[v] = function(e) {
                            i[v].data = e, i[v].called = !0
                        };
                        var m = u(a.replace("JSON_CALLBACK", "angular.callbacks." + v), v, function(e, t) {
                            S(l, e, i[v].data, "", t), i[v] = P
                        })
                    } else {
                        var g = t();
                        g.open(s, a, !0), T(c, function(e, t) {
                            F(e) && g.setRequestHeader(t, e)
                        }), g.onload = function() {
                            var t = g.statusText || "",
                                n = "response" in g ? g.response : g.responseText,
                                r = g.status === 1223 ? 204 : g.status;
                            r === 0 && (r = n ? 200 : vs(a).protocol == "file" ? 404 : 0), S(l, r, n, g.getAllResponseHeaders(), t)
                        };
                        var y = function() {
                            S(l, -1, null, null, "")
                        };
                        g.onerror = y, g.onabort = y, p && (g.withCredentials = !0);
                        if (d) try {
                            g.responseType = d
                        } catch (b) {
                            if (d !== "json") throw b
                        }
                        g.send(f)
                    }
                    if (h > 0) var w = r(E, h);
                    else Z(h) && h.then(E)
                }
            }

            function Zr() {
                var e = "{{",
                    t = "}}";
                this.startSymbol = function(t) {
                    return t ? (e = t, this) : e
                }, this.endSymbol = function(e) {
                    return e ? (t = e, this) : t
                }, this.$get = ["$parse", "$exceptionHandler", "$sce",
                    function(n, r, i) {
                        function f(e) {
                            return "\\\\\\" + e
                        }

                        function l(n) {
                            return n.replace(u, e).replace(a, t)
                        }

                        function c(e) {
                            if (e == null) return "";
                            switch (typeof e) {
                                case "string":
                                    break;
                                case "number":
                                    e = "" + e;
                                    break;
                                default:
                                    e = yt(e)
                            }
                            return e
                        }

                        function h(u, a, f, h) {
                            function T(e) {
                                try {
                                    return e = x(e), h && !F(e) ? e : c(e)
                                } catch (t) {
                                    r(Yr.interr(u, t))
                                }
                            }
                            h = !!h;
                            var p, d, v = 0,
                                m = [],
                                g = [],
                                y = u.length,
                                b, w = [],
                                E = [];
                            while (v < y) {
                                if ((p = u.indexOf(e, v)) == -1 || (d = u.indexOf(t, p + s)) == -1) {
                                    v !== y && w.push(l(u.substring(v)));
                                    break
                                }
                                v !== p && w.push(l(u.substring(v, p))), b = u.substring(p + s, d), m.push(b), g.push(n(b, T)), v = d + o, E.push(w.length), w.push("")
                            }
                            f && w.length > 1 && Yr.throwNoconcat(u);
                            if (!a || m.length) {
                                var S = function(e) {
                                        for (var t = 0, n = m.length; t < n; t++) {
                                            if (h && j(e[t])) return;
                                            w[E[t]] = e[t]
                                        }
                                        return w.join("")
                                    },
                                    x = function(e) {
                                        return f ? i.getTrusted(f, e) : i.valueOf(e)
                                    };
                                return O(function(t) {
                                    var n = 0,
                                        i = m.length,
                                        s = new Array(i);
                                    try {
                                        for (; n < i; n++) s[n] = g[n](t);
                                        return S(s)
                                    } catch (o) {
                                        r(Yr.interr(u, o))
                                    }
                                }, {
                                    exp: u,
                                    expressions: m,
                                    $$watchDelegate: function(e, t) {
                                        var n;
                                        return e.$watchGroup(g, function(i, s) {
                                            var o = S(i);
                                            X(t) && t.call(this, o, i !== s ? n : o, e), n = o
                                        })
                                    }
                                })
                            }
                        }
                        var s = e.length,
                            o = t.length,
                            u = new RegExp(e.replace(/./g, f), "g"),
                            a = new RegExp(t.replace(/./g, f), "g");
                        return h.startSymbol = function() {
                            return e
                        }, h.endSymbol = function() {
                            return t
                        }, h
                    }
                ]
            }

            function ei() {
                this.$get = ["$rootScope", "$window", "$q", "$$q",
                    function(e, t, n, r) {
                        function s(s, o, u, a) {
                            var f = arguments.length > 4,
                                l = f ? vt(arguments, 4) : [],
                                c = t.setInterval,
                                h = t.clearInterval,
                                p = 0,
                                d = F(a) && !a,
                                v = (d ? r : n).defer(),
                                m = v.promise;
                            return u = F(u) ? u : 0, m.then(null, null, f ? function() {
                                s.apply(null, l)
                            } : s), m.$$intervalId = c(function() {
                                v.notify(p++), u > 0 && p >= u && (v.resolve(p), h(m.$$intervalId), delete i[m.$$intervalId]), d || e.$apply()
                            }, o), i[m.$$intervalId] = v, m
                        }
                        var i = {};
                        return s.cancel = function(e) {
                            return e && e.$$intervalId in i ? (i[e.$$intervalId].reject("canceled"), t.clearInterval(e.$$intervalId), delete i[e.$$intervalId], !0) : !1
                        }, s
                    }
                ]
            }

            function ti() {
                this.$get = function() {
                    return {
                        id: "en-us",
                        NUMBER_FORMATS: {
                            DECIMAL_SEP: ".",
                            GROUP_SEP: ",",
                            PATTERNS: [{
                                minInt: 1,
                                minFrac: 0,
                                maxFrac: 3,
                                posPre: "",
                                posSuf: "",
                                negPre: "-",
                                negSuf: "",
                                gSize: 3,
                                lgSize: 3
                            }, {
                                minInt: 1,
                                minFrac: 2,
                                maxFrac: 2,
                                posPre: "\u00a4",
                                posSuf: "",
                                negPre: "(\u00a4",
                                negSuf: ")",
                                gSize: 3,
                                lgSize: 3
                            }],
                            CURRENCY_SYM: "$"
                        },
                        DATETIME_FORMATS: {
                            MONTH: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
                            SHORTMONTH: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
                            DAY: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
                            SHORTDAY: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),
                            AMPMS: ["AM", "PM"],
                            medium: "MMM d, y h:mm:ss a",
                            "short": "M/d/yy h:mm a",
                            fullDate: "EEEE, MMMM d, y",
                            longDate: "MMMM d, y",
                            mediumDate: "MMM d, y",
                            shortDate: "M/d/yy",
                            mediumTime: "h:mm:ss a",
                            shortTime: "h:mm a",
                            ERANAMES: ["Before Christ", "Anno Domini"],
                            ERAS: ["BC", "AD"]
                        },
                        pluralCat: function(e) {
                            return e === 1 ? "one" : "other"
                        }
                    }
                }
            }

            function si(e) {
                var t = e.split("/"),
                    n = t.length;
                while (n--) t[n] = kt(t[n]);
                return t.join("/")
            }

            function oi(e, t) {
                var n = vs(e);
                t.$$protocol = n.protocol, t.$$host = n.hostname, t.$$port = _(n.port) || ri[n.protocol] || null
            }

            function ui(e, t) {
                var n = e.charAt(0) !== "/";
                n && (e = "/" + e);
                var r = vs(e);
                t.$$path = decodeURIComponent(n && r.pathname.charAt(0) === "/" ? r.pathname.substring(1) : r.pathname), t.$$search = Nt(r.search), t.$$hash = decodeURIComponent(r.hash), t.$$path && t.$$path.charAt(0) != "/" && (t.$$path = "/" + t.$$path)
            }

            function ai(e, t) {
                if (t.indexOf(e) === 0) return t.substr(e.length)
            }

            function fi(e) {
                var t = e.indexOf("#");
                return t == -1 ? e : e.substr(0, t)
            }

            function li(e) {
                return e.replace(/(#.+)|#$/, "$1")
            }

            function ci(e) {
                return e.substr(0, fi(e).lastIndexOf("/") + 1)
            }

            function hi(e) {
                return e.substring(0, e.indexOf("/", e.indexOf("//") + 2))
            }

            function pi(e, t) {
                this.$$html5 = !0, t = t || "";
                var r = ci(e);
                oi(e, this), this.$$parse = function(e) {
                    var t = ai(r, e);
                    if (!R(t)) throw ii("ipthprfx", 'Invalid url "{0}", missing path prefix "{1}".', e, r);
                    ui(t, this), this.$$path || (this.$$path = "/"), this.$$compose()
                }, this.$$compose = function() {
                    var e = Ct(this.$$search),
                        t = this.$$hash ? "#" + kt(this.$$hash) : "";
                    this.$$url = si(this.$$path) + (e ? "?" + e : "") + t, this.$$absUrl = r + this.$$url.substr(1)
                }, this.$$parseLinkUrl = function(i, s) {
                    if (s && s[0] === "#") return this.hash(s.slice(1)), !0;
                    var o, u, a;
                    return (o = ai(e, i)) !== n ? (u = o, (o = ai(t, o)) !== n ? a = r + (ai("/", o) || o) : a = e + u) : (o = ai(r, i)) !== n ? a = r + o : r == i + "/" && (a = r), a && this.$$parse(a), !!a
                }
            }

            function di(e, t) {
                var n = ci(e);
                oi(e, this), this.$$parse = function(r) {
                    function o(e, t, n) {
                        var r = /^\/[A-Z]:(\/.*)/,
                            i;
                        return t.indexOf(n) === 0 && (t = t.replace(n, "")), r.exec(t) ? e : (i = r.exec(e), i ? i[1] : e)
                    }
                    var i = ai(e, r) || ai(n, r),
                        s;
                    i.charAt(0) === "#" ? (s = ai(t, i), j(s) && (s = i)) : s = this.$$html5 ? i : "", ui(s, this), this.$$path = o(this.$$path, s, e), this.$$compose()
                }, this.$$compose = function() {
                    var n = Ct(this.$$search),
                        r = this.$$hash ? "#" + kt(this.$$hash) : "";
                    this.$$url = si(this.$$path) + (n ? "?" + n : "") + r, this.$$absUrl = e + (this.$$url ? t + this.$$url : "")
                }, this.$$parseLinkUrl = function(t, n) {
                    return fi(e) == fi(t) ? (this.$$parse(t), !0) : !1
                }
            }

            function vi(e, t) {
                this.$$html5 = !0, di.apply(this, arguments);
                var n = ci(e);
                this.$$parseLinkUrl = function(r, i) {
                    if (i && i[0] === "#") return this.hash(i.slice(1)), !0;
                    var s, o;
                    return e == fi(r) ? s = r : (o = ai(n, r)) ? s = e + t + o : n === r + "/" && (s = n), s && this.$$parse(s), !!s
                }, this.$$compose = function() {
                    var n = Ct(this.$$search),
                        r = this.$$hash ? "#" + kt(this.$$hash) : "";
                    this.$$url = si(this.$$path) + (n ? "?" + n : "") + r, this.$$absUrl = e + t + this.$$url
                }
            }

            function gi(e) {
                return function() {
                    return this[e]
                }
            }

            function yi(e, t) {
                return function(n) {
                    return j(n) ? this[e] : (this[e] = t(n), this.$$compose(), this)
                }
            }

            function bi() {
                var e = "",
                    t = {
                        enabled: !1,
                        requireBase: !0,
                        rewriteLinks: !0
                    };
                this.hashPrefix = function(t) {
                    return F(t) ? (e = t, this) : e
                }, this.html5Mode = function(e) {
                    return Y(e) ? (t.enabled = e, this) : I(e) ? (Y(e.enabled) && (t.enabled = e.enabled), Y(e.requireBase) && (t.requireBase = e.requireBase), Y(e.rewriteLinks) && (t.rewriteLinks = e.rewriteLinks), this) : t
                }, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window",
                    function(n, r, i, s, o) {
                        function d(e, t, n) {
                            var i = u.url(),
                                s = u.$$state;
                            try {
                                r.url(e, t, n), u.$$state = r.state()
                            } catch (o) {
                                throw u.url(i), u.$$state = s, o
                            }
                        }

                        function m(e, t) {
                            n.$broadcast("$locationChangeSuccess", u.absUrl(), e, u.$$state, t)
                        }
                        var u, a, f = r.baseHref(),
                            l = r.url(),
                            c;
                        if (t.enabled) {
                            if (!f && t.requireBase) throw ii("nobase", "$location in HTML5 mode requires a <base> tag to be present!");
                            c = hi(l) + (f || "/"), a = i.history ? pi : vi
                        } else c = fi(l), a = di;
                        u = new a(c, "#" + e), u.$$parseLinkUrl(l, l), u.$$state = r.state();
                        var p = /^\s*(javascript|mailto):/i;
                        s.on("click", function(e) {
                            if (!t.rewriteLinks || e.ctrlKey || e.metaKey || e.shiftKey || e.which == 2 || e.button == 2) return;
                            var i = h(e.target);
                            while (ot(i[0]) !== "a")
                                if (i[0] === s[0] || !(i = i.parent())[0]) return;
                            var a = i.prop("href"),
                                f = i.attr("href") || i.attr("xlink:href");
                            I(a) && a.toString() === "[object SVGAnimatedString]" && (a = vs(a.animVal).href);
                            if (p.test(a)) return;
                            a && !i.attr("target") && !e.isDefaultPrevented() && u.$$parseLinkUrl(a, f) && (e.preventDefault(), u.absUrl() != r.url() && (n.$apply(), o.angular["ff-684208-preventDefault"] = !0))
                        }), li(u.absUrl()) != li(l) && r.url(u.absUrl(), !0);
                        var v = !0;
                        return r.onUrlChange(function(e, t) {
                            n.$evalAsync(function() {
                                var r = u.absUrl(),
                                    i = u.$$state,
                                    s;
                                u.$$parse(e), u.$$state = t, s = n.$broadcast("$locationChangeStart", e, r, t, i).defaultPrevented;
                                if (u
                                    .absUrl() !== e) return;
                                s ? (u.$$parse(r), u.$$state = i, d(r, !1, i)) : (v = !1, m(r, i))
                            }), n.$$phase || n.$digest()
                        }), n.$watch(function() {
                            var t = li(r.url()),
                                s = li(u.absUrl()),
                                o = r.state(),
                                a = u.$$replace,
                                f = t !== s || u.$$html5 && i.history && o !== u.$$state;
                            if (v || f) v = !1, n.$evalAsync(function() {
                                var e = u.absUrl(),
                                    r = n.$broadcast("$locationChangeStart", e, t, u.$$state, o).defaultPrevented;
                                if (u.absUrl() !== e) return;
                                r ? (u.$$parse(t), u.$$state = o) : (f && d(e, a, o === u.$$state ? null : u.$$state), m(t, o))
                            });
                            u.$$replace = !1
                        }), u
                    }
                ]
            }

            function wi() {
                var e = !0,
                    t = this;
                this.debugEnabled = function(t) {
                    return F(t) ? (e = t, this) : e
                }, this.$get = ["$window",
                    function(n) {
                        function r(e) {
                            return e instanceof Error && (e.stack ? e = e.message && e.stack.indexOf(e.message) === -1 ? "Error: " + e.message + "\n" + e.stack : e.stack : e.sourceURL && (e = e.message + "\n" + e.sourceURL + ":" + e.line)), e
                        }

                        function i(e) {
                            var t = n.console || {},
                                i = t[e] || t.log || P,
                                s = !1;
                            try {
                                s = !!i.apply
                            } catch (o) {}
                            return s ? function() {
                                var e = [];
                                return T(arguments, function(t) {
                                    e.push(r(t))
                                }), i.apply(t, e)
                            } : function(e, t) {
                                i(e, t == null ? "" : t)
                            }
                        }
                        return {
                            log: i("log"),
                            info: i("info"),
                            warn: i("warn"),
                            error: i("error"),
                            debug: function() {
                                var n = i("debug");
                                return function() {
                                    e && n.apply(t, arguments)
                                }
                            }()
                        }
                    }
                ]
            }

            function Si(e, t) {
                if (e === "__defineGetter__" || e === "__defineSetter__" || e === "__lookupGetter__" || e === "__lookupSetter__" || e === "__proto__") throw Ei("isecfld", "Attempting to access a disallowed field in Angular expressions! Expression: {0}", t);
                return e
            }

            function xi(e, t) {
                if (e) {
                    if (e.constructor === e) throw Ei("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", t);
                    if (e.window === e) throw Ei("isecwindow", "Referencing the Window in Angular expressions is disallowed! Expression: {0}", t);
                    if (e.children && (e.nodeName || e.prop && e.attr && e.find)) throw Ei("isecdom", "Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}", t);
                    if (e === Object) throw Ei("isecobj", "Referencing Object in Angular expressions is disallowed! Expression: {0}", t)
                }
                return e
            }

            function ki(e, t) {
                if (e) {
                    if (e.constructor === e) throw Ei("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", t);
                    if (e === Ti || e === Ni || e === Ci) throw Ei("isecff", "Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}", t)
                }
            }

            function _i(e, t) {
                return typeof e != "undefined" ? e : t
            }

            function Di(e, t) {
                return typeof e == "undefined" ? t : typeof t == "undefined" ? e : e + t
            }

            function Pi(e, t) {
                var n = e(t);
                return !n.$stateful
            }

            function Hi(e, t) {
                var n, r;
                switch (e.type) {
                    case Mi.Program:
                        n = !0, T(e.body, function(e) {
                            Hi(e.expression, t), n = n && e.expression.constant
                        }), e.constant = n;
                        break;
                    case Mi.Literal:
                        e.constant = !0, e.toWatch = [];
                        break;
                    case Mi.UnaryExpression:
                        Hi(e.argument, t), e.constant = e.argument.constant, e.toWatch = e.argument.toWatch;
                        break;
                    case Mi.BinaryExpression:
                        Hi(e.left, t), Hi(e.right, t), e.constant = e.left.constant && e.right.constant, e.toWatch = e.left.toWatch.concat(e.right.toWatch);
                        break;
                    case Mi.LogicalExpression:
                        Hi(e.left, t), Hi(e.right, t), e.constant = e.left.constant && e.right.constant, e.toWatch = e.constant ? [] : [e];
                        break;
                    case Mi.ConditionalExpression:
                        Hi(e.test, t), Hi(e.alternate, t), Hi(e.consequent, t), e.constant = e.test.constant && e.alternate.constant && e.consequent.constant, e.toWatch = e.constant ? [] : [e];
                        break;
                    case Mi.Identifier:
                        e.constant = !1, e.toWatch = [e];
                        break;
                    case Mi.MemberExpression:
                        Hi(e.object, t), e.computed && Hi(e.property, t), e.constant = e.object.constant && (!e.computed || e.property.constant), e.toWatch = [e];
                        break;
                    case Mi.CallExpression:
                        n = e.filter ? Pi(t, e.callee.name) : !1, r = [], T(e.arguments, function(e) {
                            Hi(e, t), n = n && e.constant, e.constant || r.push.apply(r, e.toWatch)
                        }), e.constant = n, e.toWatch = e.filter && Pi(t, e.callee.name) ? r : [e];
                        break;
                    case Mi.AssignmentExpression:
                        Hi(e.left, t), Hi(e.right, t), e.constant = e.left.constant && e.right.constant, e.toWatch = [e];
                        break;
                    case Mi.ArrayExpression:
                        n = !0, r = [], T(e.elements, function(e) {
                            Hi(e, t), n = n && e.constant, e.constant || r.push.apply(r, e.toWatch)
                        }), e.constant = n, e.toWatch = r;
                        break;
                    case Mi.ObjectExpression:
                        n = !0, r = [], T(e.properties, function(e) {
                            Hi(e.value, t), n = n && e.value.constant, e.value.constant || r.push.apply(r, e.value.toWatch)
                        }), e.constant = n, e.toWatch = r;
                        break;
                    case Mi.ThisExpression:
                        e.constant = !1, e.toWatch = []
                }
            }

            function Bi(e) {
                if (e.length != 1) return;
                var t = e[0].expression,
                    r = t.toWatch;
                return r.length !== 1 ? r : r[0] !== t ? r : n
            }

            function ji(e) {
                return e.type === Mi.Identifier || e.type === Mi.MemberExpression
            }

            function Fi(e) {
                if (e.body.length === 1 && ji(e.body[0].expression)) return {
                    type: Mi.AssignmentExpression,
                    left: e.body[0].expression,
                    right: {
                        type: Mi.NGValueParameter
                    },
                    operator: "="
                }
            }

            function Ii(e) {
                return e.body.length === 0 || e.body.length === 1 && (e.body[0].expression.type === Mi.Literal || e.body[0].expression.type === Mi.ArrayExpression || e.body[0].expression.type === Mi.ObjectExpression)
            }

            function qi(e) {
                return e.constant
            }

            function Ri(e, t) {
                this.astBuilder = e, this.$filter = t
            }

            function Ui(e, t) {
                this.astBuilder = e, this.$filter = t
            }

            function Wi(e, t, n, r) {
                xi(e, r);
                var i = t.split("."),
                    s;
                for (var o = 0; i.length > 1; o++) {
                    s = Si(i.shift(), r);
                    var u = xi(e[s], r);
                    u || (u = {}, e[s] = u), e = u
                }
                return s = Si(i.shift(), r), xi(e[s], r), e[s] = n, n
            }

            function $i(e) {
                return e == "constructor"
            }

            function Ki(e) {
                return X(e.valueOf) ? e.valueOf() : Ji.call(e)
            }

            function Qi() {
                var e = Xt(),
                    t = Xt();
                this.$get = ["$filter", "$sniffer",
                    function(r, i) {
                        function u(e, t) {
                            if (e == null || t == null) return e === t;
                            if (typeof e == "object") {
                                e = Ki(e);
                                if (typeof e == "object") return !1
                            }
                            return e === t || e !== e && t !== t
                        }

                        function a(e, t, r, i, s) {
                            var o = i.inputs,
                                a;
                            if (o.length === 1) {
                                var f = u;
                                return o = o[0], e.$watch(function(t) {
                                    var r = o(t);
                                    return u(r, f) || (a = i(t, n, n, [r]), f = r && Ki(r)), a
                                }, t, r, s)
                            }
                            var l = [],
                                c = [];
                            for (var h = 0, p = o.length; h < p; h++) l[h] = u, c[h] = null;
                            return e.$watch(function(t) {
                                var r = !1;
                                for (var s = 0, f = o.length; s < f; s++) {
                                    var h = o[s](t);
                                    if (r || (r = !u(h, l[s]))) c[s] = h, l[s] = h && Ki(h)
                                }
                                return r && (a = i(t, n, n, c)), a
                            }, t, r, s)
                        }

                        function f(e, t, n, r) {
                            var i, s;
                            return i = e.$watch(function(t) {
                                return r(t)
                            }, function(n, r, o) {
                                s = n, X(t) && t.apply(this, arguments), F(n) && o.$$postDigest(function() {
                                    F(s) && i()
                                })
                            }, n)
                        }

                        function l(e, t, n, r) {
                            function o(e) {
                                var t = !0;
                                return T(e, function(e) {
                                    F(e) || (t = !1)
                                }), t
                            }
                            var i, s;
                            return i = e.$watch(function(t) {
                                return r(t)
                            }, function(n, r, u) {
                                s = n, X(t) && t.call(this, n, r, u), o(n) && u.$$postDigest(function() {
                                    o(s) && i()
                                })
                            }, n)
                        }

                        function c(e, t, n, r) {
                            var i;
                            return i = e.$watch(function(t) {
                                return r(t)
                            }, function(n, r, s) {
                                X(t) && t.apply(this, arguments), i()
                            }, n)
                        }

                        function h(e, t) {
                            if (!t) return e;
                            var n = e.$$watchDelegate,
                                r = n !== l && n !== f,
                                i = r ? function(r, i, s, o) {
                                    var u = e(r, i, s, o);
                                    return t(u, r, i)
                                } : function(r, i, s, o) {
                                    var u = e(r, i, s, o),
                                        a = t(u, r, i);
                                    return F(u) ? a : u
                                };
                            return e.$$watchDelegate && e.$$watchDelegate !== a ? i.$$watchDelegate = e.$$watchDelegate : t.$stateful || (i.$$watchDelegate = a, i.inputs = e.inputs ? e.inputs : [e]), i
                        }
                        var s = {
                                csp: i.csp,
                                expensiveChecks: !1
                            },
                            o = {
                                csp: i.csp,
                                expensiveChecks: !0
                            };
                        return function(i, u, p) {
                            var d, v, m;
                            switch (typeof i) {
                                case "string":
                                    i = i.trim(), m = i;
                                    var g = p ? t : e;
                                    d = g[m];
                                    if (!d) {
                                        i.charAt(0) === ":" && i.charAt(1) === ":" && (v = !0, i = i.substring(2));
                                        var y = p ? o : s,
                                            b = new Oi(y),
                                            w = new zi(b, r, y);
                                        d = w.parse(i), d.constant ? d.$$watchDelegate = c : v ? d.$$watchDelegate = d.literal ? l : f : d.inputs && (d.$$watchDelegate = a), g[m] = d
                                    }
                                    return h(d, u);
                                case "function":
                                    return h(i, u);
                                default:
                                    return P
                            }
                        }
                    }
                ]
            }

            function Gi() {
                this.$get = ["$rootScope", "$exceptionHandler",
                    function(e, t) {
                        return Zi(function(t) {
                            e.$evalAsync(t)
                        }, t)
                    }
                ]
            }

            function Yi() {
                this.$get = ["$browser", "$exceptionHandler",
                    function(e, t) {
                        return Zi(function(t) {
                            e.defer(t)
                        }, t)
                    }
                ]
            }

            function Zi(e, t) {
                function s(e, t, n) {
                    function i(t) {
                        return function(n) {
                            if (r) return;
                            r = !0, t.call(e, n)
                        }
                    }
                    var r = !1;
                    return [i(t), i(n)]
                }

                function u() {
                    this.$$state = {
                        status: 0
                    }
                }

                function a(e, t) {
                    return function(n) {
                        t.call(e, n)
                    }
                }

                function f(e) {
                    var r, i, s;
                    s = e.pending, e.processScheduled = !1, e.pending = n;
                    for (var o = 0, u = s.length; o < u; ++o) {
                        i = s[o][0], r = s[o][e.status];
                        try {
                            X(r) ? i.resolve(r(e.value)) : e.status === 1 ? i.resolve(e.value) : i.reject(e.value)
                        } catch (a) {
                            i.reject(a), t(a)
                        }
                    }
                }

                function l(t) {
                    if (t.processScheduled || !t.pending) return;
                    t.processScheduled = !0, e(function() {
                        f(t)
                    })
                }

                function c() {
                    this.promise = new u, this.resolve = a(this, this.resolve), this.reject = a(this, this.reject), this.notify = a(this, this.notify)
                }

                function m(e) {
                    var t = new c,
                        n = 0,
                        r = W(e) ? [] : {};
                    return T(e, function(e, i) {
                        n++, v(e).then(function(e) {
                            if (r.hasOwnProperty(i)) return;
                            r[i] = e, --n || t.resolve(r)
                        }, function(e) {
                            if (r.hasOwnProperty(i)) return;
                            t.reject(e)
                        })
                    }), n === 0 && t.resolve(r), t.promise
                }
                var i = r("$q", TypeError),
                    o = function() {
                        return new c
                    };
                u.prototype = {
                    then: function(e, t, n) {
                        var r = new c;
                        return this.$$state.pending = this.$$state.pending || [], this.$$state.pending.push([r, e, t, n]), this.$$state.status > 0 && l(this.$$state), r.promise
                    },
                    "catch": function(e) {
                        return this.then(null, e)
                    },
                    "finally": function(e, t) {
                        return this.then(function(t) {
                            return d(t, !0, e)
                        }, function(t) {
                            return d(t, !1, e)
                        }, t)
                    }
                }, c.prototype = {
                    resolve: function(e) {
                        if (this.promise.$$state.status) return;
                        e === this.promise ? this.$$reject(i("qcycle", "Expected promise to be resolved with value other than itself '{0}'", e)) : this.$$resolve(e)
                    },
                    $$resolve: function(e) {
                        var n, r;
                        r = s(this, this.$$resolve, this.$$reject);
                        try {
                            if (I(e) || X(e)) n = e && e.then;
                            X(n) ? (this.promise.$$state.status = -1, n.call(e, r[0], r[1], this.notify)) : (this.promise.$$state.value = e, this.promise.$$state.status = 1, l(this.promise.$$state))
                        } catch (i) {
                            r[1](i), t(i)
                        }
                    },
                    reject: function(e) {
                        if (this.promise.$$state.status) return;
                        this.$$reject(e)
                    },
                    $$reject: function(e) {
                        this.promise.$$state.value = e, this.promise.$$state.status = 2, l(this.promise.$$state)
                    },
                    notify: function(n) {
                        var r = this.promise.$$state.pending;
                        this.promise.$$state.status <= 0 && r && r.length && e(function() {
                            var e, i;
                            for (var s = 0, o = r.length; s < o; s++) {
                                i = r[s][0], e = r[s][3];
                                try {
                                    i.notify(X(e) ? e(n) : n)
                                } catch (u) {
                                    t(u)
                                }
                            }
                        })
                    }
                };
                var h = function(e) {
                        var t = new c;
                        return t.reject(e), t.promise
                    },
                    p = function(t, n) {
                        var r = new c;
                        return n ? r.resolve(t) : r.reject(t), r.promise
                    },
                    d = function(t, n, r) {
                        var i = null;
                        try {
                            X(r) && (i = r())
                        } catch (s) {
                            return p(s, !1)
                        }
                        return Z(i) ? i.then(function() {
                            return p(t, n)
                        }, function(e) {
                            return p(e, !1)
                        }) : p(t, n)
                    },
                    v = function(e, t, n, r) {
                        var i = new c;
                        return i.resolve(e), i.promise.then(t, n, r)
                    },
                    g = function y(e) {
                        function n(e) {
                            t.resolve(e)
                        }

                        function r(e) {
                            t.reject(e)
                        }
                        if (!X(e)) throw i("norslvr", "Expected resolverFn, got '{0}'", e);
                        if (this instanceof y) {
                            var t = new c;
                            return e(n, r), t.promise
                        }
                        return new y(e)
                    };
                return g.defer = o, g.reject = h, g.when = v, g.all = m, g
            }

            function es() {
                this.$get = ["$window", "$timeout",
                    function(e, t) {
                        function f() {
                            for (var e = 0; e < a.length; e++) {
                                var t = a[e];
                                t && (a[e] = null, t())
                            }
                            u = a.length = 0
                        }

                        function l(e) {
                            var t = a.length;
                            return u++, a.push(e), t === 0 && (o = s(f)),
                                function() {
                                    t >= 0 && (a[t] = null, t = null, --u === 0 && o && (o(), o = null, a.length = 0))
                                }
                        }
                        var n = e.requestAnimationFrame || e.webkitRequestAnimationFrame,
                            r = e.cancelAnimationFrame || e.webkitCancelAnimationFrame || e.webkitCancelRequestAnimationFrame,
                            i = !!n,
                            s = i ? function(e) {
                                var t = n(e);
                                return function() {
                                    r(t)
                                }
                            } : function(e) {
                                var n = t(e, 16.66, !1);
                                return function() {
                                    t.cancel(n)
                                }
                            };
                        l.supported = i;
                        var o, u = 0,
                            a = [];
                        return l
                    }
                ]
            }

            function ts() {
                function s(e) {
                    function t() {
                        this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$id = k(), this.$$ChildScope = null
                    }
                    return t.prototype = e, t
                }
                var e = 10,
                    t = r("$rootScope"),
                    n = null,
                    i = null;
                this.digestTtl = function(t) {
                    return arguments.length && (e = t), e
                }, this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser",
                    function(r, o, a, f) {
                        function l(e) {
                            e.currentScope.$$destroyed = !0
                        }

                        function c() {
                            this.$id = k(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this.$root = this, this.$$destroyed = !1, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$$isolateBindings = null
                        }

                        function m(e) {
                            if (h.$$phase) throw t("inprog", "{0} already in progress", h.$$phase);
                            h.$$phase = e
                        }

                        function g() {
                            h.$$phase = null
                        }

                        function y(e, t) {
                            do e.$$watchersCount += t; while (e = e.$parent)
                        }

                        function b(e, t, n) {
                            do e.$$listenerCount[n] -= t, e.$$listenerCount[n] === 0 && delete e.$$listenerCount[n]; while (e = e.$parent)
                        }

                        function w() {}

                        function E() {
                            while (v.length) try {
                                v.shift()()
                            } catch (e) {
                                o(e)
                            }
                            i = null
                        }

                        function S() {
                            i === null && (i = f.defer(function() {
                                h.$apply(E)
                            }))
                        }
                        c.prototype = {
                            constructor: c,
                            $new: function(e, t) {
                                var n;
                                return t = t || this, e ? (n = new c, n.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = s(this)), n = new this.$$ChildScope), n.$parent = t, n.$$prevSibling = t.$$childTail, t.$$childHead ? (t.$$childTail.$$nextSibling =
                                    n, t.$$childTail = n) : t.$$childHead = t.$$childTail = n, (e || t != this) && n.$on("$destroy", l), n
                            },
                            $watch: function(e, t, r, i) {
                                var s = a(e);
                                if (s.$$watchDelegate) return s.$$watchDelegate(this, t, r, s, e);
                                var o = this,
                                    u = o.$$watchers,
                                    f = {
                                        fn: t,
                                        last: w,
                                        get: s,
                                        exp: i || e,
                                        eq: !!r
                                    };
                                return n = null, X(t) || (f.fn = P), u || (u = o.$$watchers = []), u.unshift(f), y(this, 1),
                                    function() {
                                        at(u, f) >= 0 && y(o, -1), n = null
                                    }
                            },
                            $watchGroup: function(e, t) {
                                function f() {
                                    o = !1, u ? (u = !1, t(r, r, s)) : t(r, n, s)
                                }
                                var n = new Array(e.length),
                                    r = new Array(e.length),
                                    i = [],
                                    s = this,
                                    o = !1,
                                    u = !0;
                                if (!e.length) {
                                    var a = !0;
                                    return s.$evalAsync(function() {
                                            a && t(r, r, s)
                                        }),
                                        function() {
                                            a = !1
                                        }
                                }
                                return e.length === 1 ? this.$watch(e[0], function(i, s, o) {
                                    r[0] = i, n[0] = s, t(r, i === s ? r : n, o)
                                }) : (T(e, function(e, t) {
                                    var u = s.$watch(e, function(i, u) {
                                        r[t] = i, n[t] = u, o || (o = !0, s.$evalAsync(f))
                                    });
                                    i.push(u)
                                }), function() {
                                    while (i.length) i.shift()()
                                })
                            },
                            $watchCollection: function(e, t) {
                                function v(e) {
                                    r = e;
                                    var t, n, s, o, u;
                                    if (j(r)) return;
                                    if (!I(r)) i !== r && (i = r, f++);
                                    else if (x(r)) {
                                        i !== c && (i = c, d = i.length = 0, f++), t = r.length, d !== t && (f++, i.length = d = t);
                                        for (var a = 0; a < t; a++) u = i[a], o = r[a], s = u !== u && o !== o, !s && u !== o && (f++, i[a] = o)
                                    } else {
                                        i !== h && (i = h = {}, d = 0, f++), t = 0;
                                        for (n in r) r.hasOwnProperty(n) && (t++, o = r[n], u = i[n], n in i ? (s = u !== u && o !== o, !s && u !== o && (f++, i[n] = o)) : (d++, i[n] = o, f++));
                                        if (d > t) {
                                            f++;
                                            for (n in i) r.hasOwnProperty(n) || (d--, delete i[n])
                                        }
                                    }
                                    return f
                                }

                                function m() {
                                    p ? (p = !1, t(r, r, n)) : t(r, s, n);
                                    if (o)
                                        if (!I(r)) s = r;
                                        else if (x(r)) {
                                        s = new Array(r.length);
                                        for (var e = 0; e < r.length; e++) s[e] = r[e]
                                    } else {
                                        s = {};
                                        for (var i in r) u.call(r, i) && (s[i] = r[i])
                                    }
                                }
                                v.$stateful = !0;
                                var n = this,
                                    r, i, s, o = t.length > 1,
                                    f = 0,
                                    l = a(e, v),
                                    c = [],
                                    h = {},
                                    p = !0,
                                    d = 0;
                                return this.$watch(l, m)
                            },
                            $digest: function() {
                                var r, s, u, a, l, c, v = e,
                                    y, b, S = this,
                                    x = [],
                                    T, N, C;
                                m("$digest"), f.$$checkUrlChange(), this === h && i !== null && (f.defer.cancel(i), E()), n = null;
                                do {
                                    c = !1, b = S;
                                    while (p.length) {
                                        try {
                                            C = p.shift(), C.scope.$eval(C.expression, C.locals)
                                        } catch (k) {
                                            o(k)
                                        }
                                        n = null
                                    }
                                    e: do {
                                        if (a = b.$$watchers) {
                                            l = a.length;
                                            while (l--) try {
                                                r = a[l];
                                                if (r)
                                                    if ((s = r.get(b)) !== (u = r.last) && !(r.eq ? ct(s, u) : typeof s == "number" && typeof u == "number" && isNaN(s) && isNaN(u))) c = !0, n = r, r.last = r.eq ? ft(s, null) : s, r.fn(s, u === w ? s : u, b), v < 5 && (T = 4 - v, x[T] || (x[T] = []), x[T].push({
                                                        msg: X(r.exp) ? "fn: " + (r.exp.name || r.exp.toString()) : r.exp,
                                                        newVal: s,
                                                        oldVal: u
                                                    }));
                                                    else if (r === n) {
                                                    c = !1;
                                                    break e
                                                }
                                            } catch (k) {
                                                o(k)
                                            }
                                        }
                                        if (!(y = b.$$watchersCount && b.$$childHead || b !== S && b.$$nextSibling))
                                            while (b !== S && !(y = b.$$nextSibling)) b = b.$parent
                                    } while (b = y);
                                    if ((c || p.length) && !(v--)) throw g(), t("infdig", "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}", e, x)
                                } while (c || p.length);
                                g();
                                while (d.length) try {
                                    d.shift()()
                                } catch (k) {
                                    o(k)
                                }
                            },
                            $destroy: function() {
                                if (this.$$destroyed) return;
                                var e = this.$parent;
                                this.$broadcast("$destroy"), this.$$destroyed = !0, this === h && f.$$applicationDestroyed(), y(this, -this.$$watchersCount);
                                for (var t in this.$$listenerCount) b(this, this.$$listenerCount[t], t);
                                e && e.$$childHead == this && (e.$$childHead = this.$$nextSibling), e && e.$$childTail == this && (e.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = P, this.$on = this.$watch = this.$watchGroup = function() {
                                    return P
                                }, this.$$listeners = {}, this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = this.$$watchers = null
                            },
                            $eval: function(e, t) {
                                return a(e)(this, t)
                            },
                            $evalAsync: function(e, t) {
                                !h.$$phase && !p.length && f.defer(function() {
                                    p.length && h.$digest()
                                }), p.push({
                                    scope: this,
                                    expression: e,
                                    locals: t
                                })
                            },
                            $$postDigest: function(e) {
                                d.push(e)
                            },
                            $apply: function(e) {
                                try {
                                    return m("$apply"), this.$eval(e)
                                } catch (t) {
                                    o(t)
                                } finally {
                                    g();
                                    try {
                                        h.$digest()
                                    } catch (t) {
                                        throw o(t), t
                                    }
                                }
                            },
                            $applyAsync: function(e) {
                                function n() {
                                    t.$eval(e)
                                }
                                var t = this;
                                e && v.push(n), S()
                            },
                            $on: function(e, t) {
                                var n = this.$$listeners[e];
                                n || (this.$$listeners[e] = n = []), n.push(t);
                                var r = this;
                                do r.$$listenerCount[e] || (r.$$listenerCount[e] = 0), r.$$listenerCount[e]++; while (r = r.$parent);
                                var i = this;
                                return function() {
                                    var r = n.indexOf(t);
                                    r !== -1 && (n[r] = null, b(i, 1, e))
                                }
                            },
                            $emit: function(e, t) {
                                var n = [],
                                    r, i = this,
                                    s = !1,
                                    u = {
                                        name: e,
                                        targetScope: i,
                                        stopPropagation: function() {
                                            s = !0
                                        },
                                        preventDefault: function() {
                                            u.defaultPrevented = !0
                                        },
                                        defaultPrevented: !1
                                    },
                                    a = dt([u], arguments, 1),
                                    f, l;
                                do {
                                    r = i.$$listeners[e] || n, u.currentScope = i;
                                    for (f = 0, l = r.length; f < l; f++) {
                                        if (!r[f]) {
                                            r.splice(f, 1), f--, l--;
                                            continue
                                        }
                                        try {
                                            r[f].apply(null, a)
                                        } catch (c) {
                                            o(c)
                                        }
                                    }
                                    if (s) return u.currentScope = null, u;
                                    i = i.$parent
                                } while (i);
                                return u.currentScope = null, u
                            },
                            $broadcast: function(e, t) {
                                var n = this,
                                    r = n,
                                    i = n,
                                    s = {
                                        name: e,
                                        targetScope: n,
                                        preventDefault: function() {
                                            s.defaultPrevented = !0
                                        },
                                        defaultPrevented: !1
                                    };
                                if (!n.$$listenerCount[e]) return s;
                                var u = dt([s], arguments, 1),
                                    a, f, l;
                                while (r = i) {
                                    s.currentScope = r, a = r.$$listeners[e] || [];
                                    for (f = 0, l = a.length; f < l; f++) {
                                        if (!a[f]) {
                                            a.splice(f, 1), f--, l--;
                                            continue
                                        }
                                        try {
                                            a[f].apply(null, u)
                                        } catch (c) {
                                            o(c)
                                        }
                                    }
                                    if (!(i = r.$$listenerCount[e] && r.$$childHead || r !== n && r.$$nextSibling))
                                        while (r !== n && !(i = r.$$nextSibling)) r = r.$parent
                                }
                                return s.currentScope = null, s
                            }
                        };
                        var h = new c,
                            p = h.$$asyncQueue = [],
                            d = h.$$postDigestQueue = [],
                            v = h.$$applyAsyncQueue = [];
                        return h
                    }
                ]
            }

            function ns() {
                var e = /^\s*(https?|ftp|mailto|tel|file):/,
                    t = /^\s*((https?|ftp|file|blob):|data:image\/)/;
                this.aHrefSanitizationWhitelist = function(t) {
                    return F(t) ? (e = t, this) : e
                }, this.imgSrcSanitizationWhitelist = function(e) {
                    return F(e) ? (t = e, this) : t
                }, this.$get = function() {
                    return function(r, i) {
                        var s = i ? t : e,
                            o;
                        return o = vs(r).href, o !== "" && !o.match(s) ? "unsafe:" + o : r
                    }
                }
            }

            function ss(e) {
                if (e === "self") return e;
                if (R(e)) {
                    if (e.indexOf("***") > -1) throw rs("iwcard", "Illegal sequence *** in string matcher.  String: {0}", e);
                    return e = rt(e).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), new RegExp("^" + e + "$")
                }
                if (V(e)) return new RegExp("^" + e.source + "$");
                throw rs("imatcher", 'Matchers may only be "self", string patterns or RegExp objects')
            }

            function os(e) {
                var t = [];
                return F(e) && T(e, function(e) {
                    t.push(ss(e))
                }), t
            }

            function us() {
                this.SCE_CONTEXTS = is;
                var e = ["self"],
                    t = [];
                this.resourceUrlWhitelist = function(t) {
                    return arguments.length && (e = os(t)), e
                }, this.resourceUrlBlacklist = function(e) {
                    return arguments
                        .length && (t = os(e)), t
                }, this.$get = ["$injector",
                    function(r) {
                        function s(e, t) {
                            return e === "self" ? ms(t) : !!e.exec(t.href)
                        }

                        function o(n) {
                            var r = vs(n.toString()),
                                i, o, u = !1;
                            for (i = 0, o = e.length; i < o; i++)
                                if (s(e[i], r)) {
                                    u = !0;
                                    break
                                }
                            if (u)
                                for (i = 0, o = t.length; i < o; i++)
                                    if (s(t[i], r)) {
                                        u = !1;
                                        break
                                    }
                            return u
                        }

                        function u(e) {
                            var t = function(t) {
                                this.$$unwrapTrustedValue = function() {
                                    return t
                                }
                            };
                            return e && (t.prototype = new e), t.prototype.valueOf = function() {
                                return this.$$unwrapTrustedValue()
                            }, t.prototype.toString = function() {
                                return this.$$unwrapTrustedValue().toString()
                            }, t
                        }

                        function l(e, t) {
                            var r = f.hasOwnProperty(e) ? f[e] : null;
                            if (!r) throw rs("icontext", "Attempted to trust a value in invalid context. Context: {0}; Value: {1}", e, t);
                            if (t === null || t === n || t === "") return t;
                            if (typeof t != "string") throw rs("itype", "Attempted to trust a non-string value in a content requiring a string: Context: {0}", e);
                            return new r(t)
                        }

                        function c(e) {
                            return e instanceof a ? e.$$unwrapTrustedValue() : e
                        }

                        function h(e, t) {
                            if (t === null || t === n || t === "") return t;
                            var r = f.hasOwnProperty(e) ? f[e] : null;
                            if (r && t instanceof r) return t.$$unwrapTrustedValue();
                            if (e === is.RESOURCE_URL) {
                                if (o(t)) return t;
                                throw rs("insecurl", "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}", t.toString())
                            }
                            if (e === is.HTML) return i(t);
                            throw rs("unsafe", "Attempting to use an unsafe value in a safe context.")
                        }
                        var i = function(t) {
                            throw rs("unsafe", "Attempting to use an unsafe value in a safe context.")
                        };
                        r.has("$sanitize") && (i = r.get("$sanitize"));
                        var a = u(),
                            f = {};
                        return f[is.HTML] = u(a), f[is.CSS] = u(a), f[is.URL] = u(a), f[is.JS] = u(a), f[is.RESOURCE_URL] = u(f[is.URL]), {
                            trustAs: l,
                            getTrusted: h,
                            valueOf: c
                        }
                    }
                ]
            }

            function as() {
                var e = !0;
                this.enabled = function(t) {
                    return arguments.length && (e = !!t), e
                }, this.$get = ["$parse", "$sceDelegate",
                    function(t, n) {
                        if (e && c < 8) throw rs("iequirks", "Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");
                        var r = lt(is);
                        r.isEnabled = function() {
                            return e
                        }, r.trustAs = n.trustAs, r.getTrusted = n.getTrusted, r.valueOf = n.valueOf, e || (r.trustAs = r.getTrusted = function(e, t) {
                            return t
                        }, r.valueOf = H), r.parseAs = function(n, i) {
                            var s = t(i);
                            return s.literal && s.constant ? s : t(i, function(e) {
                                return r.getTrusted(n, e)
                            })
                        };
                        var i = r.parseAs,
                            s = r.getTrusted,
                            u = r.trustAs;
                        return T(is, function(e, t) {
                            var n = o(t);
                            r[pn("parse_as_" + n)] = function(t) {
                                return i(e, t)
                            }, r[pn("get_trusted_" + n)] = function(t) {
                                return s(e, t)
                            }, r[pn("trust_as_" + n)] = function(t) {
                                return u(e, t)
                            }
                        }), r
                    }
                ]
            }

            function fs() {
                this.$get = ["$window", "$document",
                    function(e, t) {
                        var n = {},
                            r = _((/android (\d+)/.exec(o((e.navigator || {}).userAgent)) || [])[1]),
                            i = /Boxee/i.test((e.navigator || {}).userAgent),
                            s = t[0] || {},
                            u, a = /^(Moz|webkit|ms)(?=[A-Z])/,
                            f = s.body && s.body.style,
                            l = !1,
                            h = !1,
                            p;
                        if (f) {
                            for (var d in f)
                                if (p = a.exec(d)) {
                                    u = p[0], u = u.substr(0, 1).toUpperCase() + u.substr(1);
                                    break
                                }
                            u || (u = "WebkitOpacity" in f && "webkit"), l = "transition" in f || u + "Transition" in f, h = "animation" in f || u + "Animation" in f, r && (!l || !h) && (l = R(f.webkitTransition), h = R(f.webkitAnimation))
                        }
                        return {
                            history: !(!e.history || !e.history.pushState || r < 4) && !i,
                            hasEvent: function(e) {
                                if (e === "input" && c <= 11) return !1;
                                if (j(n[e])) {
                                    var t = s.createElement("div");
                                    n[e] = "on" + e in t
                                }
                                return n[e]
                            },
                            csp: ht(),
                            vendorPrefix: u,
                            transitions: l,
                            animations: h,
                            android: r
                        }
                    }
                ]
            }

            function ls() {
                this.$get = ["$templateCache", "$http", "$q",
                    function(e, t, n) {
                        function r(i, s) {
                            function a(e) {
                                if (!s) throw wr("tpload", "Failed to load template: {0} (HTTP status: {1} {2})", i, e.status, e.statusText);
                                return n.reject(e)
                            }
                            r.totalPendingRequests++;
                            var o = t.defaults && t.defaults.transformResponse;
                            W(o) ? o = o.filter(function(e) {
                                return e !== Ur
                            }) : o === Ur && (o = null);
                            var u = {
                                cache: e,
                                transformResponse: o
                            };
                            return t.get(i, u)["finally"](function() {
                                r.totalPendingRequests--
                            }).then(function(t) {
                                return e.put(i, t.data), t.data
                            }, a)
                        }
                        return r.totalPendingRequests = 0, r
                    }
                ]
            }

            function cs() {
                this.$get = ["$rootScope", "$browser", "$location",
                    function(e, t, n) {
                        var r = {};
                        return r.findBindings = function(e, t, n) {
                            var r = e.getElementsByClassName("ng-binding"),
                                i = [];
                            return T(r, function(e) {
                                var r = w.element(e).data("$binding");
                                r && T(r, function(r) {
                                    if (n) {
                                        var s = new RegExp("(^|\\s)" + rt(t) + "(\\s|\\||$)");
                                        s.test(r) && i.push(e)
                                    } else r.indexOf(t) != -1 && i.push(e)
                                })
                            }), i
                        }, r.findModels = function(e, t, n) {
                            var r = ["ng-", "data-ng-", "ng\\:"];
                            for (var i = 0; i < r.length; ++i) {
                                var s = n ? "=" : "*=",
                                    o = "[" + r[i] + "model" + s + '"' + t + '"]',
                                    u = e.querySelectorAll(o);
                                if (u.length) return u
                            }
                        }, r.getLocation = function() {
                            return n.url()
                        }, r.setLocation = function(t) {
                            t !== n.url() && (n.url(t), e.$digest())
                        }, r.whenStable = function(e) {
                            t.notifyWhenNoOutstandingRequests(e)
                        }, r
                    }
                ]
            }

            function hs() {
                this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler",
                    function(e, t, n, r, i) {
                        function o(o, u, a) {
                            X(o) || (a = u, u = o, o = P);
                            var f = vt(arguments, 3),
                                l = F(a) && !a,
                                c = (l ? r : n).defer(),
                                h = c.promise,
                                p;
                            return p = t.defer(function() {
                                try {
                                    c.resolve(o.apply(null, f))
                                } catch (t) {
                                    c.reject(t), i(t)
                                } finally {
                                    delete s[h.$$timeoutId]
                                }
                                l || e.$apply()
                            }, u), h.$$timeoutId = p, s[p] = c, h
                        }
                        var s = {};
                        return o.cancel = function(e) {
                            return e && e.$$timeoutId in s ? (s[e.$$timeoutId].reject("canceled"), delete s[e.$$timeoutId], t.defer.cancel(e.$$timeoutId)) : !1
                        }, o
                    }
                ]
            }

            function vs(e) {
                var t = e;
                return c && (ps.setAttribute("href", t), t = ps.href), ps.setAttribute("href", t), {
                    href: ps.href,
                    protocol: ps.protocol ? ps.protocol.replace(/:$/, "") : "",
                    host: ps.host,
                    search: ps.search ? ps.search.replace(/^\?/, "") : "",
                    hash: ps.hash ? ps.hash.replace(/^#/, "") : "",
                    hostname: ps.hostname,
                    port: ps.port,
                    pathname: ps.pathname.charAt(0) === "/" ? ps.pathname : "/" + ps.pathname
                }
            }

            function ms(e) {
                var t = R(e) ? vs(e) : e;
                return t.protocol === ds.protocol && t.host === ds.host
            }

            function gs() {
                this.$get = B(e)
            }

            function ys(e) {
                function s(e) {
                    try {
                        return decodeURIComponent(e)
                    } catch (t) {
                        return e
                    }
                }
                var t = e[0] || {},
                    r = {},
                    i = "";
                return function() {
                    var e, o, u, a, f, l = t.cookie || "";
                    if (l !== i) {
                        i = l, e = i.split("; "), r = {};
                        for (u = 0; u < e.length; u++) o = e[u], a = o.indexOf("="), a > 0 && (f = s(o.substring(0, a)), r[f] === n && (r[f] = s(o.substring(a + 1))))
                    }
                    return r
                }
            }

            function bs() {
                this.$get = ys
            }

            function ws(e) {
                function n(r, i) {
                    if (I(r)) {
                        var s = {};
                        return T(r, function(
                            e, t) {
                            s[t] = n(t, e)
                        }), s
                    }
                    return e.factory(r + t, i)
                }
                var t = "Filter";
                this.register = n, this.$get = ["$injector",
                    function(e) {
                        return function(n) {
                            return e.get(n + t)
                        }
                    }
                ], n("currency", Cs), n("date", zs), n("filter", Es), n("json", Ws), n("limitTo", $s), n("lowercase", Xs), n("number", ks), n("orderBy", Js), n("uppercase", Vs)
            }

            function Es() {
                return function(e, t, n) {
                    if (!x(e)) {
                        if (e == null) return e;
                        throw r("filter")("notarray", "Expected array but received: {0}", e)
                    }
                    var i = Ns(t),
                        s, o;
                    switch (i) {
                        case "function":
                            s = t;
                            break;
                        case "boolean":
                        case "null":
                        case "number":
                        case "string":
                            o = !0;
                        case "object":
                            s = xs(t, n, o);
                            break;
                        default:
                            return e
                    }
                    return Array.prototype.filter.call(e, s)
                }
            }

            function Ss(e) {
                return X(e.toString) && e.toString !== Object.prototype.toString
            }

            function xs(e, t, n) {
                var r = I(e) && "$" in e,
                    i;
                return t === !0 ? t = ct : X(t) || (t = function(e, t) {
                    return j(e) ? !1 : e === null || t === null ? e === t : I(t) || I(e) && !Ss(e) ? !1 : (e = o("" + e), t = o("" + t), e.indexOf(t) !== -1)
                }), i = function(i) {
                    return r && !I(i) ? Ts(i, e.$, t, !1) : Ts(i, e, t, n)
                }, i
            }

            function Ts(e, t, n, r, i) {
                var s = Ns(e),
                    o = Ns(t);
                if (o === "string" && t.charAt(0) === "!") return !Ts(e, t.substring(1), n, r);
                if (W(e)) return e.some(function(e) {
                    return Ts(e, t, n, r)
                });
                switch (s) {
                    case "object":
                        var u;
                        if (r) {
                            for (u in e)
                                if (u.charAt(0) !== "$" && Ts(e[u], t, n, !0)) return !0;
                            return i ? !1 : Ts(e, t, n, !1)
                        }
                        if (o === "object") {
                            for (u in t) {
                                var a = t[u];
                                if (X(a) || j(a)) continue;
                                var f = u === "$",
                                    l = f ? e : e[u];
                                if (!Ts(l, a, n, f, f)) return !1
                            }
                            return !0
                        }
                        return n(e, t);
                    case "function":
                        return !1;
                    default:
                        return n(e, t)
                }
            }

            function Ns(e) {
                return e === null ? "null" : typeof e
            }

            function Cs(e) {
                var t = e.NUMBER_FORMATS;
                return function(e, n, r) {
                    return j(n) && (n = t.CURRENCY_SYM), j(r) && (r = t.PATTERNS[1].maxFrac), e == null ? e : As(e, t.PATTERNS[1], t.GROUP_SEP, t.DECIMAL_SEP, r).replace(/\u00A4/g, n)
                }
            }

            function ks(e) {
                var t = e.NUMBER_FORMATS;
                return function(e, n) {
                    return e == null ? e : As(e, t.PATTERNS[0], t.GROUP_SEP, t.DECIMAL_SEP, n)
                }
            }

            function As(e, t, n, r, i) {
                if (I(e)) return "";
                var s = e < 0;
                e = Math.abs(e);
                var o = e === Infinity;
                if (!o && !isFinite(e)) return "";
                var u = e + "",
                    a = "",
                    f = !1,
                    l = [];
                o && (a = "\u221e");
                if (!o && u.indexOf("e") !== -1) {
                    var c = u.match(/([\d\.]+)e(-?)(\d+)/);
                    c && c[2] == "-" && c[3] > i + 1 ? e = 0 : (a = u, f = !0)
                }
                if (!o && !f) {
                    var h = (u.split(Ls)[1] || "").length;
                    j(i) && (i = Math.min(Math.max(t.minFrac, h), t.maxFrac)), e = +(Math.round(+(e.toString() + "e" + i)).toString() + "e" + -i);
                    var p = ("" + e).split(Ls),
                        d = p[0];
                    p = p[1] || "";
                    var v, m = 0,
                        g = t.lgSize,
                        y = t.gSize;
                    if (d.length >= g + y) {
                        m = d.length - g;
                        for (v = 0; v < m; v++)(m - v) % y === 0 && v !== 0 && (a += n), a += d.charAt(v)
                    }
                    for (v = m; v < d.length; v++)(d.length - v) % g === 0 && v !== 0 && (a += n), a += d.charAt(v);
                    while (p.length < i) p += "0";
                    i && i !== "0" && (a += r + p.substr(0, i))
                } else i > 0 && e < 1 && (a = e.toFixed(i), e = parseFloat(a));
                return e === 0 && (s = !1), l.push(s ? t.negPre : t.posPre, a, s ? t.negSuf : t.posSuf), l.join("")
            }

            function Os(e, t, n) {
                var r = "";
                e < 0 && (r = "-", e = -e), e = "" + e;
                while (e.length < t) e = "0" + e;
                return n && (e = e.substr(e.length - t)), r + e
            }

            function Ms(e, t, n, r) {
                return n = n || 0,
                    function(i) {
                        var s = i["get" + e]();
                        if (n > 0 || s > -n) s += n;
                        return s === 0 && n == -12 && (s = 12), Os(s, t, r)
                    }
            }

            function _s(e, t) {
                return function(n, r) {
                    var i = n["get" + e](),
                        s = a(t ? "SHORT" + e : e);
                    return r[s][i]
                }
            }

            function Ds(e, t, n) {
                var r = -1 * n,
                    i = r >= 0 ? "+" : "";
                return i += Os(Math[r > 0 ? "floor" : "ceil"](r / 60), 2) + Os(Math.abs(r % 60), 2), i
            }

            function Ps(e) {
                var t = (new Date(e, 0, 1)).getDay();
                return new Date(e, 0, (t <= 4 ? 5 : 12) - t)
            }

            function Hs(e) {
                return new Date(e.getFullYear(), e.getMonth(), e.getDate() + (4 - e.getDay()))
            }

            function Bs(e) {
                return function(t) {
                    var n = Ps(t.getFullYear()),
                        r = Hs(t),
                        i = +r - +n,
                        s = 1 + Math.round(i / 6048e5);
                    return Os(s, e)
                }
            }

            function js(e, t) {
                return e.getHours() < 12 ? t.AMPMS[0] : t.AMPMS[1]
            }

            function Fs(e, t) {
                return e.getFullYear() <= 0 ? t.ERAS[0] : t.ERAS[1]
            }

            function Is(e, t) {
                return e.getFullYear() <= 0 ? t.ERANAMES[0] : t.ERANAMES[1]
            }

            function zs(e) {
                function n(e) {
                    var n;
                    if (n = e.match(t)) {
                        var r = new Date(0),
                            i = 0,
                            s = 0,
                            o = n[8] ? r.setUTCFullYear : r.setFullYear,
                            u = n[8] ? r.setUTCHours : r.setHours;
                        n[9] && (i = _(n[9] + n[10]), s = _(n[9] + n[11])), o.call(r, _(n[1]), _(n[2]) - 1, _(n[3]));
                        var a = _(n[4] || 0) - i,
                            f = _(n[5] || 0) - s,
                            l = _(n[6] || 0),
                            c = Math.round(parseFloat("0." + (n[7] || 0)) * 1e3);
                        return u.call(r, a, f, l, c), r
                    }
                    return e
                }
                var t = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
                return function(t, r, i) {
                    var s = "",
                        o = [],
                        u, a;
                    r = r || "mediumDate", r = e.DATETIME_FORMATS[r] || r, R(t) && (t = Us.test(t) ? _(t) : n(t)), U(t) && (t = new Date(t));
                    if (!z(t) || !isFinite(t.getTime())) return t;
                    while (r) a = Rs.exec(r), a ? (o = dt(o, a, 1), r = o.pop()) : (o.push(r), r = null);
                    var f = t.getTimezoneOffset();
                    return i && (f = wt(i, t.getTimezoneOffset()), t = St(t, i, !0)), T(o, function(n) {
                        u = qs[n], s += u ? u(t, e.DATETIME_FORMATS, f) : n.replace(/(^'|'$)/g, "").replace(/''/g, "'")
                    }), s
                }
            }

            function Ws() {
                return function(e, t) {
                    return j(t) && (t = 2), yt(e, t)
                }
            }

            function $s() {
                return function(e, t, n) {
                    return Math.abs(Number(t)) === Infinity ? t = Number(t) : t = _(t), isNaN(t) ? e : (U(e) && (e = e.toString()), !W(e) && !R(e) ? e : (n = !n || isNaN(n) ? 0 : _(n), n = n < 0 && n >= -e.length ? e.length + n : n, t >= 0 ? e.slice(n, n + t) : n === 0 ? e.slice(t, e.length) : e.slice(Math.max(0, n + t), n)))
                }
            }

            function Js(e) {
                return function(t, n, r) {
                    function i(e, t) {
                        for (var r = 0; r < n.length; r++) {
                            var i = n[r](e, t);
                            if (i !== 0) return i
                        }
                        return 0
                    }

                    function s(e, t) {
                        return t ? function(t, n) {
                            return e(n, t)
                        } : e
                    }

                    function o(e) {
                        switch (typeof e) {
                            case "number":
                            case "boolean":
                            case "string":
                                return !0;
                            default:
                                return !1
                        }
                    }

                    function u(e) {
                        if (e === null) return "null";
                        if (typeof e.valueOf == "function") {
                            e = e.valueOf();
                            if (o(e)) return e
                        }
                        if (typeof e.toString == "function") {
                            e = e.toString();
                            if (o(e)) return e
                        }
                        return ""
                    }

                    function a(e, t) {
                        var n = typeof e,
                            r = typeof t;
                        return n === r && n === "object" && (e = u(e), t = u(t)), n === r ? (n === "string" && (e = e.toLowerCase(), t = t.toLowerCase()), e === t ? 0 : e < t ? -1 : 1) : n < r ? -1 : 1
                    }
                    return x(t) ? (n = W(n) ? n : [n], n.length === 0 && (n = ["+"]), n = n.map(function(t) {
                        var n = !1,
                            r = t || H;
                        if (R(t)) {
                            if (t.charAt(0) == "+" || t.charAt(0) == "-") n = t.charAt(0) == "-", t = t.substring(1);
                            if (t === "") return s(a, n);
                            r = e(t);
                            if (r.constant) {
                                var i = r();
                                return s(function(e, t) {
                                    return a(e[i], t[i])
                                }, n)
                            }
                        }
                        return s(function(e, t) {
                            return a(r(e), r(t))
                        }, n)
                    }), d.call(t).sort(s(i, r))) : t
                }
            }

            function Ks(e) {
                return X(e) && (e = {
                    link: e
                }), e.restrict = e.restrict || "AC", B(e)
            }

            function eo(e, t) {
                e.$name = t
            }

            function to(e, t, r, i, s) {
                var o = this,
                    u = [],
                    a = o.$$parentForm = e.parent().controller("form") || Ys;
                o.$error = {}, o.$$success = {}, o.$pending = n, o.$name =
                    s(t.name || t.ngForm || "")(r), o.$dirty = !1, o.$pristine = !0, o.$valid = !0, o.$invalid = !1, o.$submitted = !1, a.$addControl(o), o.$rollbackViewValue = function() {
                        T(u, function(e) {
                            e.$rollbackViewValue()
                        })
                    }, o.$commitViewValue = function() {
                        T(u, function(e) {
                            e.$commitViewValue()
                        })
                    }, o.$addControl = function(e) {
                        Ut(e.$name, "input"), u.push(e), e.$name && (o[e.$name] = e)
                    }, o.$$renameControl = function(e, t) {
                        var n = e.$name;
                        o[n] === e && delete o[n], o[t] = e, e.$name = t
                    }, o.$removeControl = function(e) {
                        e.$name && o[e.$name] === e && delete o[e.$name], T(o.$pending, function(t, n) {
                            o.$setValidity(n, null, e)
                        }), T(o.$error, function(t, n) {
                            o.$setValidity(n, null, e)
                        }), T(o.$$success, function(t, n) {
                            o.$setValidity(n, null, e)
                        }), at(u, e)
                    }, uu({
                        ctrl: this,
                        $element: e,
                        set: function(e, t, n) {
                            var r = e[t];
                            if (!r) e[t] = [n];
                            else {
                                var i = r.indexOf(n);
                                i === -1 && r.push(n)
                            }
                        },
                        unset: function(e, t, n) {
                            var r = e[t];
                            if (!r) return;
                            at(r, n), r.length === 0 && delete e[t]
                        },
                        parentForm: a,
                        $animate: i
                    }), o.$setDirty = function() {
                        i.removeClass(e, Go), i.addClass(e, Yo), o.$dirty = !0, o.$pristine = !1, a.$setDirty()
                    }, o.$setPristine = function() {
                        i.setClass(e, Go, Yo + " " + Zs), o.$dirty = !1, o.$pristine = !0, o.$submitted = !1, T(u, function(e) {
                            e.$setPristine()
                        })
                    }, o.$setUntouched = function() {
                        T(u, function(e) {
                            e.$setUntouched()
                        })
                    }, o.$setSubmitted = function() {
                        i.addClass(e, Zs), o.$submitted = !0, a.$setSubmitted()
                    }
            }

            function mo(e) {
                e.$formatters.push(function(t) {
                    return e.$isEmpty(t) ? t : t.toString()
                })
            }

            function go(e, t, n, r, i, s) {
                yo(e, t, n, r, i, s), mo(r)
            }

            function yo(e, t, n, r, i, s) {
                var u = o(t[0].type);
                if (!i.android) {
                    var a = !1;
                    t.on("compositionstart", function(e) {
                        a = !0
                    }), t.on("compositionend", function() {
                        a = !1, f()
                    })
                }
                var f = function(e) {
                    l && (s.defer.cancel(l), l = null);
                    if (a) return;
                    var i = t.val(),
                        o = e && e.type;
                    u !== "password" && (!n.ngTrim || n.ngTrim !== "false") && (i = nt(i)), (r.$viewValue !== i || i === "" && r.$$hasNativeValidators) && r.$setViewValue(i, o)
                };
                if (i.hasEvent("input")) t.on("input", f);
                else {
                    var l, c = function(e, t, n) {
                        l || (l = s.defer(function() {
                            l = null, (!t || t.value !== n) && f(e)
                        }))
                    };
                    t.on("keydown", function(e) {
                        var t = e.keyCode;
                        if (t === 91 || 15 < t && t < 19 || 37 <= t && t <= 40) return;
                        c(e, this, this.value)
                    }), i.hasEvent("paste") && t.on("paste cut", c)
                }
                t.on("change", f), r.$render = function() {
                    t.val(r.$isEmpty(r.$viewValue) ? "" : r.$viewValue)
                }
            }

            function bo(e, t) {
                if (z(e)) return e;
                if (R(e)) {
                    co.lastIndex = 0;
                    var n = co.exec(e);
                    if (n) {
                        var r = +n[1],
                            i = +n[2],
                            s = 0,
                            o = 0,
                            u = 0,
                            a = 0,
                            f = Ps(r),
                            l = (i - 1) * 7;
                        return t && (s = t.getHours(), o = t.getMinutes(), u = t.getSeconds(), a = t.getMilliseconds()), new Date(r, 0, f.getDate() + l, s, o, u, a)
                    }
                }
                return NaN
            }

            function wo(e, t) {
                return function(n, r) {
                    var i, s;
                    if (z(n)) return n;
                    if (R(n)) {
                        n.charAt(0) == '"' && n.charAt(n.length - 1) == '"' && (n = n.substring(1, n.length - 1));
                        if (so.test(n)) return new Date(n);
                        e.lastIndex = 0, i = e.exec(n);
                        if (i) return i.shift(), r ? s = {
                            yyyy: r.getFullYear(),
                            MM: r.getMonth() + 1,
                            dd: r.getDate(),
                            HH: r.getHours(),
                            mm: r.getMinutes(),
                            ss: r.getSeconds(),
                            sss: r.getMilliseconds() / 1e3
                        } : s = {
                            yyyy: 1970,
                            MM: 1,
                            dd: 1,
                            HH: 0,
                            mm: 0,
                            ss: 0,
                            sss: 0
                        }, T(i, function(e, n) {
                            n < t.length && (s[t[n]] = +e)
                        }), new Date(s.yyyy, s.MM - 1, s.dd, s.HH, s.mm, s.ss || 0, s.sss * 1e3 || 0)
                    }
                    return NaN
                }
            }

            function Eo(e, t, r, i) {
                return function(o, u, a, f, l, c, h) {
                    function g(e) {
                        return e && (!e.getTime || e.getTime() === e.getTime())
                    }

                    function y(e) {
                        return F(e) ? z(e) ? e : r(e) : n
                    }
                    So(o, u, a, f), yo(o, u, a, f, l, c);
                    var p = f && f.$options && f.$options.timezone,
                        d;
                    f.$$parserName = e, f.$parsers.push(function(e) {
                        if (f.$isEmpty(e)) return null;
                        if (t.test(e)) {
                            var i = r(e, d);
                            return p && (i = St(i, p)), i
                        }
                        return n
                    }), f.$formatters.push(function(e) {
                        if (e && !z(e)) throw nu("datefmt", "Expected `{0}` to be a date", e);
                        return g(e) ? (d = e, d && p && (d = St(d, p, !0)), h("date")(e, i, p)) : (d = null, "")
                    });
                    if (F(a.min) || a.ngMin) {
                        var v;
                        f.$validators.min = function(e) {
                            return !g(e) || j(v) || r(e) >= v
                        }, a.$observe("min", function(e) {
                            v = y(e), f.$validate()
                        })
                    }
                    if (F(a.max) || a.ngMax) {
                        var m;
                        f.$validators.max = function(e) {
                            return !g(e) || j(m) || r(e) <= m
                        }, a.$observe("max", function(e) {
                            m = y(e), f.$validate()
                        })
                    }
                }
            }

            function So(e, t, r, i) {
                var o = t[0],
                    u = i.$$hasNativeValidators = I(o.validity);
                u && i.$parsers.push(function(e) {
                    var r = t.prop(s) || {};
                    return r.badInput && !r.typeMismatch ? n : e
                })
            }

            function xo(e, t, r, i, s, o) {
                So(e, t, r, i), yo(e, t, r, i, s, o), i.$$parserName = "number", i.$parsers.push(function(e) {
                    return i.$isEmpty(e) ? null : ao.test(e) ? parseFloat(e) : n
                }), i.$formatters.push(function(e) {
                    if (!i.$isEmpty(e)) {
                        if (!U(e)) throw nu("numfmt", "Expected `{0}` to be a number", e);
                        e = e.toString()
                    }
                    return e
                });
                if (F(r.min) || r.ngMin) {
                    var u;
                    i.$validators.min = function(e) {
                        return i.$isEmpty(e) || j(u) || e >= u
                    }, r.$observe("min", function(e) {
                        F(e) && !U(e) && (e = parseFloat(e, 10)), u = U(e) && !isNaN(e) ? e : n, i.$validate()
                    })
                }
                if (F(r.max) || r.ngMax) {
                    var a;
                    i.$validators.max = function(e) {
                        return i.$isEmpty(e) || j(a) || e <= a
                    }, r.$observe("max", function(e) {
                        F(e) && !U(e) && (e = parseFloat(e, 10)), a = U(e) && !isNaN(e) ? e : n, i.$validate()
                    })
                }
            }

            function To(e, t, n, r, i, s) {
                yo(e, t, n, r, i, s), mo(r), r.$$parserName = "url", r.$validators.url = function(e, t) {
                    var n = e || t;
                    return r.$isEmpty(n) || oo.test(n)
                }
            }

            function No(e, t, n, r, i, s) {
                yo(e, t, n, r, i, s), mo(r), r.$$parserName = "email", r.$validators.email = function(e, t) {
                    var n = e || t;
                    return r.$isEmpty(n) || uo.test(n)
                }
            }

            function Co(e, t, n, r) {
                j(n.name) && t.attr("name", k());
                var i = function(e) {
                    t[0].checked && r.$setViewValue(n.value, e && e.type)
                };
                t.on("click", i), r.$render = function() {
                    var e = n.value;
                    t[0].checked = e == r.$viewValue
                }, n.$observe("value", r.$render)
            }

            function ko(e, t, n, i, s) {
                var o;
                if (F(i)) {
                    o = e(i);
                    if (!o.constant) throw r("ngModel")("constexpr", "Expected constant expression for `{0}`, but saw `{1}`.", n, i);
                    return o(t)
                }
                return s
            }

            function Lo(e, t, n, r, i, s, o, u) {
                var a = ko(u, e, "ngTrueValue", n.ngTrueValue, !0),
                    f = ko(u, e, "ngFalseValue", n.ngFalseValue, !1),
                    l = function(e) {
                        r.$setViewValue(t[0].checked, e && e.type)
                    };
                t.on("click", l), r.$render = function() {
                    t[0].checked = r.$viewValue
                }, r.$isEmpty = function(e) {
                    return e === !1
                }, r.$formatters.push(function(e) {
                    return ct(e, a)
                }), r.$parsers.push(function(e) {
                    return e ? a : f
                })
            }

            function Bo(e, t) {
                return e = "ngClass" + e, ["$animate",
                    function(n) {
                        function r(e, t) {
                            var n = [];
                            e: for (var r = 0; r < e.length; r++) {
                                var i = e[r];
                                for (var s = 0; s < t.length; s++)
                                    if (i == t[s]) continue e;
                                n.push(i)
                            }
                            return n
                        }

                        function i(e) {
                            var t = [];
                            return W(e) ? (T(e, function(e) {
                                t = t.concat(i(e))
                            }), t) : R(e) ? e.split(" ") : I(e) ? (T(e, function(e, n) {
                                e && (t = t.concat(n.split(" ")))
                            }), t) : e
                        }
                        return {
                            restrict: "AC",
                            link: function(s, o, u) {
                                function f(e) {
                                    var t = c(e, 1);
                                    u.$addClass(t)
                                }

                                function l(e) {
                                    var t = c(e, -1);
                                    u.$removeClass(t)
                                }

                                function c(e, t) {
                                    var n = o.data("$classCounts") || Xt(),
                                        r = [];
                                    return T(e, function(e) {
                                        if (t > 0 || n[e]) n[e] = (n[e] || 0) + t, n[e] === +(t > 0) && r.push(e)
                                    }), o.data("$classCounts", n), r.join(" ")
                                }

                                function h(e, t) {
                                    var i = r(t, e),
                                        s = r(e, t);
                                    i = c(i, 1), s = c(s, -1), i && i.length && n.addClass(o, i), s && s.length && n.removeClass(o, s)
                                }

                                function p(e) {
                                    if (t === !0 || s.$index % 2 === t) {
                                        var n = i(e || []);
                                        if (!a) f(n);
                                        else if (!ct(e, a)) {
                                            var r = i(a);
                                            h(r, n)
                                        }
                                    }
                                    a = lt(e)
                                }
                                var a;
                                s.$watch(u[e], p, !0), u.$observe("class", function(t) {
                                    p(s.$eval(u[e]))
                                }), e !== "ngClass" && s.$watch("$index", function(n, r) {
                                    var o = n & 1;
                                    if (o !== (r & 1)) {
                                        var a = i(s.$eval(u[e]));
                                        o === t ? f(a) : l(a)
                                    }
                                })
                            }
                        }
                    }
                ]
            }

            function uu(e) {
                function f(e, r, i) {
                    r === n ? l("$pending", e, i) : c("$pending", e, i), Y(r) ? r ? (o(t.$error, e, i), s(t.$$success, e, i)) : (s(t.$error, e, i), o(t.$$success, e, i)) : (o(t.$error, e, i), o(t.$$success, e, i)), t.$pending ? (h(tu, !0), t.$valid = t.$invalid = n, p("", null)) : (h(tu, !1), t.$valid = au(t.$error), t.$invalid = !t.$valid, p("", t.$valid));
                    var a;
                    t.$pending && t.$pending[e] ? a = n : t.$error[e] ? a = !1 : t.$$success[e] ? a = !0 : a = null, p(e, a), u.$setValidity(e, a, t)
                }

                function l(e, n, r) {
                    t[e] || (t[e] = {}), s(t[e], n, r)
                }

                function c(e, r, i) {
                    t[e] && o(t[e], r, i), au(t[e]) && (t[e] = n)
                }

                function h(e, t) {
                    t && !i[e] ? (a.addClass(r, e), i[e] = !0) : !t && i[e] && (a.removeClass(r, e), i[e] = !1)
                }

                function p(e, t) {
                    e = e ? "-" + Bt(e, "-") : "", h(Ko + e, t === !0), h(Qo + e, t === !1)
                }
                var t = e.ctrl,
                    r = e.$element,
                    i = {},
                    s = e.set,
                    o = e.unset,
                    u = e.parentForm,
                    a = e.$animate;
                i[Qo] = !(i[Ko] = r.hasClass(Ko)), t.$setValidity = f
            }

            function au(e) {
                if (e)
                    for (var t in e) return !1;
                return !0
            }
            var i = /^\/(.+)\/([a-z]*)$/,
                s = "validity",
                o = function(e) {
                    return R(e) ? e.toLowerCase() : e
                },
                u = Object.prototype.hasOwnProperty,
                a = function(e) {
                    return R(e) ? e.toUpperCase() : e
                },
                f = function(e) {
                    return R(e) ? e.replace(/[A-Z]/g, function(e) {
                        return String.fromCharCode(e.charCodeAt(0) | 32)
                    }) : e
                },
                l = function(e) {
                    return R(e) ? e.replace(/[a-z]/g, function(e) {
                        return String.fromCharCode(e.charCodeAt(0) & -33)
                    }) : e
                };
            "i" !== "I".toLowerCase() && (o = f, a = l);
            var c, h, p, d = [].slice,
                v = [].splice,
                m = [].push,
                g = Object.prototype.toString,
                y = Object.getPrototypeOf,
                b = r("ng"),
                w = e.angular || (e.angular = {}),
                E, S = 0;
            c = t.documentMode, P.$inject = [], H.$inject = [];
            var W = Array.isArray,
                et = /^\[object (Uint8(Clamped)?)|(Uint16)|(Uint32)|(Int8)|(Int16)|(Int32)|(Float(32)|(64))Array\]$/,
                nt = function(e) {
                    return R(e) ? e.trim() : e
                },
                rt = function(e) {
                    return e.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
                },
                ht = function() {
                    if (F(ht.isActive_)) return ht.isActive_;
                    var e = !!t.querySelector("[ng-csp]") || !!t.querySelector("[data-ng-csp]");
                    if (!e) try {
                        new Function("")
                    } catch (n) {
                        e = !0
                    }
                    return ht.isActive_ = e
                },
                pt = function() {
                    if (F(pt.name_)) return pt.name_;
                    var e, n, r = At.length,
                        i, s;
                    for (n = 0; n < r; ++n) {
                        i = At[n];
                        if (e = t.querySelector("[" + i.replace(":", "\\:") + "jq]")) {
                            s = e.getAttribute(i + "jq");
                            break
                        }
                    }
                    return pt.name_ = s
                },
                At = ["ng-", "data-ng-", "ng:", "x-ng-"],
                Ht = /[A-Z]/g,
                jt = !1,
                Ft, Vt = 1,
                $t = 2,
                Jt = 3,
                Kt = 8,
                Qt = 9,
                Gt = 11,
                tn = {
                    full: "1.4.0",
                    major: 1,
                    minor: 4,
                    dot: 0,
                    codeName: "jaracimrman-existence"
                };
            xn.expando = "ng339";
            var rn = xn.cache = {},
                sn = 1,
                on = function(e, t, n) {
                    e.addEventListener(t, n, !1)
                },
                un = function(e, t, n) {
                    e.removeEventListener(t, n, !1)
                };
            xn._data = function(e) {
                return this.cache[e[this.expando]] || {}
            };
            var fn = /([\:\-\_]+(.))/g,
                ln = /^moz([A-Z])/,
                cn = {
                    mouseleave: "mouseout",
                    mouseenter: "mouseover"
                },
                hn = r("jqLite"),
                dn = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
                vn = /<|&#?\w+;/,
                mn = /<([\w:]+)/,
                gn = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
                yn = {
                    option: [1, '<select multiple="multiple">', "</select>"],
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""]
                };
            yn.optgroup = yn.option, yn.tbody = yn.tfoot = yn.colgroup = yn.caption = yn.thead, yn.th = yn.td;
            var In = xn.prototype = {
                    ready: function(n) {
                        function i() {
                            if (r) return;
                            r = !0, n()
                        }
                        var r = !1;
                        t.readyState === "complete" ? setTimeout(i) : (this.on("DOMContentLoaded", i), xn(e).on("load", i))
                    },
                    toString: function() {
                        var e = [];
                        return T(this, function(t) {
                            e.push("" + t)
                        }), "[" + e.join(", ") + "]"
                    },
                    eq: function(e) {
                        return e >= 0 ? h(this[e]) : h(this[this.length + e])
                    },
                    length: 0,
                    push: m,
                    sort: [].sort,
                    splice: [].splice
                },
                qn = {};
            T("multiple,selected,checked,disabled,readOnly,required,open".split(","), function(e) {
                qn[o(e)] = e
            });
            var Rn = {};
            T("input,select,option,textarea,button,form,details".split(","), function(e) {
                Rn[e] = !0
            });
            var Un = {
                ngMinlength: "minlength",
                ngMaxlength: "maxlength",
                ngMin: "min",
                ngMax: "max",
                ngPattern: "pattern"
            };
            T({
                data: An,
                removeData: kn
            }, function(e, t) {
                xn[t] = e
            }), T({
                data: An,
                inheritedData: Hn,
                scope: function(e) {
                    return h.data(e, "$scope") || Hn(e.parentNode || e, ["$isolateScope", "$scope"])
                },
                isolateScope: function(e) {
                    return h.data(e, "$isolateScope") || h.data(e, "$isolateScopeNoTemplate")
                },
                controller: Pn,
                injector: function(e) {
                    return Hn(e, "$injector")
                },
                removeAttr: function(e, t) {
                    e.removeAttribute(t)
                },
                hasClass: On,
                css: function(e, t, n) {
                    t = pn(t);
                    if (!F(n)) return e.style[t];
                    e.style[t] = n
                },
                attr: function(e, t, r) {
                    var i = e.nodeType;
                    if (i === Jt || i === $t || i === Kt) return;
                    var s = o(t);
                    if (qn[s]) {
                        if (!F(r)) return e[t] || (e.attributes.getNamedItem(t) || P).specified ? s : n;
                        r ? (e[t] = !0, e.setAttribute(t, s)) : (e[t] = !1, e.removeAttribute(s))
                    } else if (F(r)) e.setAttribute(t, r);
                    else if (e.getAttribute) {
                        var u = e.getAttribute(t, 2);
                        return u === null ? n : u
                    }
                },
                prop: function(e, t, n) {
                    if (!F(n)) return e[t];
                    e[t] = n
                },
                text: function() {
                    function e(e, t) {
                        if (j(t)) {
                            var n = e.nodeType;
                            return n === Vt || n === Jt ? e.textContent : ""
                        }
                        e.textContent = t
                    }
                    return e.$dv = "", e
                }(),
                val: function(e, t) {
                    if (j(t)) {
                        if (e.multiple && ot(e) === "select") {
                            var n = [];
                            return T(e.options, function(e) {
                                e.selected && n.push(e.value || e.text)
                            }), n.length === 0 ? null : n
                        }
                        return e.value
                    }
                    e.value = t
                },
                html: function(e, t) {
                    if (j(t)) return e.innerHTML;
                    Nn(e, !0), e.innerHTML = t
                },
                empty: Bn
            }, function(e, t) {
                xn.prototype[t] = function(t, r) {
                    var i, s, o = this.length;
                    if (e !== Bn && (e.length == 2 && e !== On && e !== Pn ? t : r) === n) {
                        if (I(t)) {
                            for (i = 0; i < o; i++)
                                if (e === An) e(this[i], t);
                                else
                                    for (s in t) e(this[i], s, t[s]);
                            return this
                        }
                        var u = e.$dv,
                            a = u === n ? Math.min(o, 1) : o;
                        for (var f = 0; f < a; f++) {
                            var l = e(this[f], t, r);
                            u = u ? u + l : l
                        }
                        return u
                    }
                    for (i = 0; i < o; i++) e(this[i], t, r);
                    return this
                }
            }), T({
                removeData: kn,
                on: function Pu(e, t, n, r) {
                    if (F(r)) throw hn("onargs", "jqLite#on() does not support the `selector` or `eventData` parameters");
                    if (!wn(e)) return;
                    var i = Ln(e, !0),
                        s = i.events,
                        o = i.handle;
                    o || (o = i.handle = Xn(e, s));
                    var u = t.indexOf(" ") >= 0 ? t.split(" ") : [t],
                        a = u.length;
                    while (a--) {
                        t = u[a];
                        var f = s[t];
                        f || (s[t] = [], t === "mouseenter" || t === "mouseleave" ? Pu(e, cn[t], function(e) {
                            var n = this,
                                r = e.relatedTarget;
                            (!r || r !== n && !n.contains(r)) && o(e, t)
                        }) : t !== "$destroy" && on(e, t, o), f = s[t]), f.push(n)
                    }
                },
                off: Cn,
                one: function(e, t, n) {
                    e = h(e), e.on(t, function r() {
                        e.off(t, n), e.off(t, r)
                    }), e.on(t, n)
                },
                replaceWith: function(e, t) {
                    var n, r = e.parentNode;
                    Nn(e), T(new xn(t), function(t) {
                        n ? r.insertBefore(t, n.nextSibling) : r.replaceChild(t, e), n = t
                    })
                },
                children: function(e) {
                    var t = [];
                    return T(e.childNodes, function(e) {
                        e.nodeType === Vt && t.push(e)
                    }), t
                },
                contents: function(e) {
                    return e.contentDocument || e.childNodes || []
                },
                append: function(e, t) {
                    var n = e.nodeType;
                    if (n !== Vt && n !== Gt) return;
                    t = new xn(t);
                    for (var r = 0, i = t.length; r < i; r++) {
                        var s = t[r];
                        e.appendChild(s)
                    }
                },
                prepend: function(e, t) {
                    if (e.nodeType === Vt) {
                        var n = e.firstChild;
                        T(new xn(t), function(t) {
                            e.insertBefore(t, n)
                        })
                    }
                },
                wrap: function(e, t) {
                    t = h(t).eq(0).clone()[0];
                    var n = e.parentNode;
                    n && n.replaceChild(t, e), t.appendChild(e)
                },
                remove: jn,
                detach: function(e) {
                    jn(e, !0)
                },
                after: function(e, t) {
                    var n = e,
                        r = e.parentNode;
                    t = new xn(t);
                    for (var i = 0, s = t.length; i < s; i++) {
                        var o = t[i];
                        r.insertBefore(o, n.nextSibling), n = o
                    }
                },
                addClass: _n,
                removeClass: Mn,
                toggleClass: function(e, t, n) {
                    t && T(t.split(" "), function(t) {
                        var r = n;
                        j(r) && (r = !On(e, t)), (r ? _n : Mn)(e, t)
                    })
                },
                parent: function(e) {
                    var t = e.parentNode;
                    return t && t.nodeType !== Gt ? t : null
                },
                next: function(e) {
                    return e.nextElementSibling
                },
                find: function(e, t) {
                    return e.getElementsByTagName ? e.getElementsByTagName(t) : []
                },
                clone: Tn,
                triggerHandler: function(e, t, n) {
                    var r, i, s, o = t.type || t,
                        u = Ln(e),
                        a = u && u.events,
                        f = a && a[o];
                    f && (r = {
                        preventDefault: function() {
                            this.defaultPrevented = !0
                        },
                        isDefaultPrevented: function() {
                            return this.defaultPrevented === !0
                        },
                        stopImmediatePropagation: function() {
                            this.immediatePropagationStopped = !0
                        },
                        isImmediatePropagationStopped: function() {
                            return this.immediatePropagationStopped === !0
                        },
                        stopPropagation: P,
                        type: o,
                        target: e
                    }, t.type && (r = O(r, t)), i = lt(f), s = n ? [r].concat(n) : [r], T(i, function(t) {
                        r.isImmediatePropagationStopped() || t.apply(e, s)
                    }))
                }
            }, function(e, t) {
                xn.prototype[t] = function(t, n, r) {
                    var i;
                    for (var s = 0, o = this.length; s < o; s++) j(i) ? (i = e(this[s], t, n, r), F(i) && (i = h(i))) : Dn(i, e(this[s], t, n, r));
                    return F(i) ? i : this
                }, xn.prototype.bind = xn.prototype.on, xn.prototype.unbind = xn.prototype.off
            }), Jn.prototype = {
                put: function(e, t) {
                    this[$n(e, this.nextUid)] = t
                },
                get: function(e) {
                    return this[$n(e, this.nextUid)]
                },
                remove: function(e) {
                    var t = this[e = $n(e, this.nextUid)];
                    return delete this[e], t
                }
            };
            var Kn = [

                    function() {
                        this.$get = [

                            function() {
                                return Jn
                            }
                        ]
                    }
                ],
                Qn = /^function\s*[^\(]*\(\s*([^\)]*)\)/m,
                Gn = /,/,
                Yn = /^\s*(_?)(\S+?)\1\s*$/,
                Zn = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,
                er = r("$injector");
            rr.$$annotate = nr;
            var sr = r("$animate"),
                or = 1,
                ur = "ng-animate",
                hr = function() {
                    this.$get = ["$q", "$$rAF",
                        function(e, t) {
                            function n() {}
                            return n.all = P, n.chain = P, n.prototype = {
                                end: P,
                                cancel: P,
                                resume: P,
                                pause: P,
                                complete: P,
                                then: function(n, r) {
                                    return e(function(e) {
                                        t(function() {
                                            e()
                                        })
                                    }).then(n, r)
                                }
                            }, n
                        }
                    ]
                },
                pr = function() {
                    var e = new Jn,
                        t = [];
                    this.$get = ["$$AnimateRunner", "$rootScope",
                        function(n, r) {
                            function i(n, i, s) {
                                var o = e.get(n),
                                    u;
                                o || (e.put(n, o = {}), t.push(n)), i && T(i.split(" "), function(e) {
                                    e && (o[e] = !0)
                                }), s && T(s.split(" "), function(e) {
                                    e && (o[e] = !1)
                                });
                                if (t.length > 1) return;
                                r.$$postDigest(function() {
                                    T(t, function(t) {
                                        var n = e.get(t);
                                        if (n) {
                                            var r = lr(t.attr("class")),
                                                i = "",
                                                s = "";
                                            T(n, function(e, t) {
                                                var n = !!r[t];
                                                e !== n && (e ? i += (i.length ? " " : "") + t : s += (s.length ? " " : "") + t)
                                            }), T(t, function(e) {
                                                i && _n(e, i), s && Mn(e, s)
                                            }), e.remove(t)
                                        }
                                    }), t.length = 0
                                })
                            }
                            return {
                                enabled: P,
                                on: P,
                                off: P,
                                pin: P,
                                push: function(e, t, r, s) {
                                    return s && s(), r = r || {}, r.from && e.css(r.from), r.to && e.css(r.to), (r.addClass || r.removeClass) && i(e, r.addClass, r.removeClass), new n
                                }
                            }
                        }
                    ]
                },
                dr = ["$provide",
                    function(e) {
                        var t = this;
                        this.$$registeredAnimations = Object.create(null), this.register = function(n, r) {
                            if (n && n.charAt(0) !== ".") throw sr("notcsel", "Expecting class selector starting with '.' got '{0}'.", n);
                            var i = n + "-animation";
                            t.$$registeredAnimations[n.substr(1)] = i, e.factory(i, r)
                        }, this.classNameFilter = function(e) {
                            if (arguments.length === 1) {
                                this.$$classNameFilter = e instanceof RegExp ? e : null;
                                if (this.$$classNameFilter) {
                                    var t = new RegExp("(\\s+|\\/)" + ur + "(\\s+|\\/)");
                                    if (t.test(this.$$classNameFilter.toString())) throw sr("nongcls", '$animateProvider.classNameFilter(regex) prohibits accepting a regex value which matches/contains the "{0}" CSS class.', ur)
                                }
                            }
                            return this.$$classNameFilter
                        }, this.$get = ["$$animateQueue",
                            function(e) {
                                function t(e, t, n) {
                                    if (n) {
                                        var r = fr(n);
                                        r && !r.parentNode && !r.previousElementSibling && (n = null)
                                    }
                                    n ? n.after(e) : t.prepend(e)
                                }
                                return {
                                    on: e.on,
                                    off: e.off,
                                    pin: e.pin,
                                    enabled: e.enabled,
                                    cancel: function(e) {
                                        e.end && e.end()
                                    },
                                    enter: function(n, r, i, s) {
                                        return r = r && h(r), i = i && h(i), r = r || i.parent(), t(n, r, i), e.push(n, "enter", cr(s))
                                    },
                                    move: function(n, r, i, s) {
                                        return r = r && h(r), i = i && h(i), r = r || i.parent(), t(n, r, i), e.push(n, "move", cr(s))
                                    },
                                    leave: function(t, n) {
                                        return e.push(t, "leave", cr(n), function() {
                                            t.remove()
                                        })
                                    },
                                    addClass: function(t, n, r) {
                                        return r = cr(r), r.addClass = ar(r.addclass, n), e.push(t, "addClass", r)
                                    },
                                    removeClass: function(t, n, r) {
                                        return r = cr(r), r.removeClass = ar(r.removeClass, n), e.push(t, "removeClass", r)
                                    },
                                    setClass: function(t, n, r, i) {
                                        return i = cr(i), i.addClass = ar(i.addClass, n), i.removeClass = ar(i.removeClass, r), e.push(t, "setClass", i)
                                    },
                                    animate: function(t, n, r, i, s) {
                                        return s = cr(s), s.from = s.from ? O(s.from, n) : n, s.to = s.to ? O(s.to, r) : r, i = i || "ng-inline-animate", s.tempClasses = ar(s.tempClasses, i), e.push(t, "animate", s)
                                    }
                                }
                            }
                        ]
                    }
                ],
                wr = r("$compile");
            Er.$inject = ["$provide", "$$sanitizeUriProvider"];
            var Sr = /^((?:x|data)[\:\-_])/i,
                Lr = r("$controller"),
                Ar = /^(\S+)(\s+as\s+(\w+))?$/,
                Pr = "application/json",
                Hr = {
                    "Content-Type": Pr + ";charset=utf-8"
                },
                Br = /^\[|^\{(?!\{)/,
                jr = {
                    "[": /]$/,
                    "{": /}$/
                },
                Fr = /^\)\]\}',?\n/,
                Yr = w.$interpolateMinErr = r("$interpolate");
            Yr.throwNoconcat = function(e) {
                throw Yr("noconcat", "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce", e)
            }, Yr.interr = function(e, t) {
                return Yr("interr", "Can't interpolate: {0}\n{1}", e, t.toString())
            };
            var ni = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
                ri = {
                    http: 80,
                    https: 443,
                    ftp: 21
                },
                ii = r("$location"),
                mi = {
                    $$html5: !1,
                    $$replace: !1,
                    absUrl: gi("$$absUrl"),
                    url: function(e) {
                        if (j(e)) return this.$$url;
                        var t = ni.exec(e);
                        return (t[1] || e === "") && this.path(decodeURIComponent(t[1])), (t[2] || t[1] || e === "") && this.search(t[3] || ""), this.hash(t[5] || ""), this
                    },
                    protocol: gi("$$protocol"),
                    host: gi("$$host"),
                    port: gi("$$port"),
                    path: yi("$$path", function(e) {
                        return e = e !== null ? e.toString() : "", e.charAt(0) == "/" ? e : "/" + e
                    }),
                    search: function(e, t) {
                        switch (arguments.length) {
                            case 0:
                                return this.$$search;
                            case 1:
                                if (R(e) || U(e)) e = e.toString(), this.$$search = Nt(e);
                                else {
                                    if (!I(e)) throw ii("isrcharg", "The first argument of the `$location#search()` call must be a string or an object.");
                                    e = ft(e, {}), T(e, function(t, n) {
                                        t == null && delete e[n]
                                    }), this.$$search = e
                                }
                                break;
                            default:
                                j(t) || t === null ? delete this.$$search[e] : this.$$search[e] = t
                        }
                        return this.$$compose(), this
                    },
                    hash: yi("$$hash", function(e) {
                        return e !== null ? e.toString() : ""
                    }),
                    replace: function() {
                        return this.$$replace = !0, this
                    }
                };
            T([vi, di, pi], function(e) {
                e.prototype = Object.create(mi), e.prototype.state = function(t) {
                    if (!arguments.length) return this.$$state;
                    if (e !== pi || !this.$$html5) throw ii("nostate", "History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API");
                    return this.$$state = j(t) ? null : t, this
                }
            });
            var Ei = r("$parse"),
                Ti = Function.prototype.call,
                Ni = Function.prototype.apply,
                Ci = Function.prototype.bind,
                Li = Xt();
            T("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function(e) {
                Li[e] = !0
            });
            var Ai = {
                    n: "\n",
                    f: "\f",
                    r: "\r",
                    t: "	",
                    v: "",
                    "'": "'",
                    '"': '"'
                },
                Oi = function(e) {
                    this.options = e
                };
            Oi.prototype = {
                constructor: Oi,
                lex: function(e) {
                    this.text = e, this.index = 0, this.tokens = [];
                    while (this.index < this.text.length) {
                        var t = this.text.charAt(this.index);
                        if (t === '"' || t === "'") this.readString(t);
                        else if (this.isNumber(t) || t === "." && this.isNumber(this.peek())) this.readNumber();
                        else if (this.isIdent(t)) this.readIdent();
                        else if (this.is(t, "(){}[].,;:?")) this.tokens.push({
                            index: this.index,
                            text: t
                        }), this.index++;
                        else if (this.isWhitespace(t)) this.index++;
                        else {
                            var n = t + this.peek(),
                                r = n + this.peek(2),
                                i = Li[t],
                                s = Li[n],
                                o = Li[r];
                            if (i || s || o) {
                                var u = o ? r : s ? n : t;
                                this.tokens.push({
                                    index: this.index,
                                    text: u,
                                    operator: !0
                                }), this.index += u.length
                            } else this.throwError("Unexpected next character ", this.index, this.index + 1)
                        }
                    }
                    return this.tokens
                },
                is: function(e, t) {
                    return t.indexOf(e) !== -1
                },
                peek: function(e) {
                    var t = e || 1;
                    return this.index + t < this.text.length ? this.text.charAt(this.index + t) : !1
                },
                isNumber: function(e) {
                    return "0" <= e && e <= "9" && typeof e == "string"
                },
                isWhitespace: function(e) {
                    return e === " " || e === "\r" || e === "	" || e === "\n" || e === "" || e === "\u00a0"
                },
                isIdent: function(e) {
                    return "a" <= e && e <= "z" || "A" <= e && e <= "Z" || "_" === e || e === "$"
                },
                isExpOperator: function(e) {
                    return e === "-" || e === "+" || this.isNumber(e)
                },
                throwError: function(e, t, n) {
                    n = n || this.index;
                    var r = F(t) ? "s " + t + "-" + this.index + " [" + this.text.substring(t, n) + "]" : " " + n;
                    throw Ei("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", e, r, this.text)
                },
                readNumber: function() {
                    var e = "",
                        t = this.index;
                    while (this.index < this.text.length) {
                        var n = o(this.text.charAt(this.index));
                        if (n == "." || this.isNumber(n)) e += n;
                        else {
                            var r = this.peek();
                            if (n == "e" && this.isExpOperator(r)) e += n;
                            else if (this.isExpOperator(n) && r && this.isNumber(r) && e.charAt(e.length - 1) == "e") e += n;
                            else {
                                if (!this.isExpOperator(n) || !!r && !!this.isNumber(r) || e.charAt(e.length - 1) != "e") break;
                                this.throwError("Invalid exponent")
                            }
                        }
                        this.index++
                    }
                    this.tokens.push({
                        index: t,
                        text: e,
                        constant: !0,
                        value: Number(e)
                    })
                },
                readIdent: function() {
                    var e = this.index;
                    while (this.index < this.text.length) {
                        var t = this.text.charAt(this.index);
                        if (!this.isIdent(t) && !this.isNumber(t)) break;
                        this.index++
                    }
                    this.tokens.push({
                        index: e,
                        text: this.text.slice(e, this.index),
                        identifier: !0
                    })
                },
                readString: function(e) {
                    var t = this.index;
                    this.index++;
                    var n = "",
                        r = e,
                        i = !1;
                    while (this.index < this.text.length) {
                        var s = this.text.charAt(this.index);
                        r += s;
                        if (i) {
                            if (s === "u") {
                                var o = this.text.substring(this.index + 1, this.index + 5);
                                o.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + o + "]"), this.index += 4, n += String.fromCharCode(parseInt(o, 16))
                            } else {
                                var u = Ai[s];
                                n += u || s
                            }
                            i = !1
                        } else if (s === "\\") i = !0;
                        else {
                            if (s === e) {
                                this.index++, this.tokens.push({
                                    index: t,
                                    text: r,
                                    constant: !0,
                                    value: n
                                });
                                return
                            }
                            n += s
                        }
                        this.index++
                    }
                    this.throwError("Unterminated quote", t)
                }
            };
            var Mi = function(e, t) {
                this.lexer = e, this.options = t
            };
            Mi.Program = "Program", Mi.ExpressionStatement = "ExpressionStatement", Mi.AssignmentExpression = "AssignmentExpression", Mi.ConditionalExpression = "ConditionalExpression", Mi.LogicalExpression = "LogicalExpression", Mi.BinaryExpression = "BinaryExpression", Mi.UnaryExpression = "UnaryExpression", Mi.CallExpression = "CallExpression", Mi.MemberExpression = "MemberExpression", Mi.Identifier = "Identifier", Mi.Literal = "Literal", Mi.ArrayExpression = "ArrayExpression", Mi.Property = "Property", Mi.ObjectExpression = "ObjectExpression", Mi.ThisExpression = "ThisExpression", Mi.NGValueParameter = "NGValueParameter", Mi.prototype = {
                ast: function(e) {
                    this.text = e, this.tokens = this.lexer.lex(e);
                    var t = this.program();
                    return this.tokens.length !== 0 && this.throwError("is an unexpected token", this.tokens[0]), t
                },
                program: function() {
                    var e = [];
                    for (;;) {
                        this.tokens.length > 0 && !this.peek("}", ")", ";", "]") && e.push(this.expressionStatement());
                        if (!this.expect(";")) return {
                            type: Mi.Program,
                            body: e
                        }
                    }
                },
                expressionStatement: function() {
                    return {
                        type: Mi.ExpressionStatement,
                        expression: this.filterChain()
                    }
                },
                filterChain: function() {
                    var e = this.expression(),
                        t;
                    while (t = this.expect("|")) e = this.filter(e);
                    return e
                },
                expression: function() {
                    return this.assignment()
                },
                assignment: function() {
                    var e = this.ternary();
                    return this.expect("=") && (e = {
                        type: Mi.AssignmentExpression,
                        left: e,
                        right: this.assignment(),
                        operator: "="
                    }), e
                },
                ternary: function() {
                    var e = this.logicalOR(),
                        t, n;
                    if (this.expect("?")) {
                        t = this.expression();
                        if (this.consume(":")) return n = this.expression(), {
                            type: Mi.ConditionalExpression,
                            test: e,
                            alternate: t,
                            consequent: n
                        }
                    }
                    return e
                },
                logicalOR: function() {
                    var e = this.logicalAND();
                    while (
                        this.expect("||")) e = {
                        type: Mi.LogicalExpression,
                        operator: "||",
                        left: e,
                        right: this.logicalAND()
                    };
                    return e
                },
                logicalAND: function() {
                    var e = this.equality();
                    while (this.expect("&&")) e = {
                        type: Mi.LogicalExpression,
                        operator: "&&",
                        left: e,
                        right: this.equality()
                    };
                    return e
                },
                equality: function() {
                    var e = this.relational(),
                        t;
                    while (t = this.expect("==", "!=", "===", "!==")) e = {
                        type: Mi.BinaryExpression,
                        operator: t.text,
                        left: e,
                        right: this.relational()
                    };
                    return e
                },
                relational: function() {
                    var e = this.additive(),
                        t;
                    while (t = this.expect("<", ">", "<=", ">=")) e = {
                        type: Mi.BinaryExpression,
                        operator: t.text,
                        left: e,
                        right: this.additive()
                    };
                    return e
                },
                additive: function() {
                    var e = this.multiplicative(),
                        t;
                    while (t = this.expect("+", "-")) e = {
                        type: Mi.BinaryExpression,
                        operator: t.text,
                        left: e,
                        right: this.multiplicative()
                    };
                    return e
                },
                multiplicative: function() {
                    var e = this.unary(),
                        t;
                    while (t = this.expect("*", "/", "%")) e = {
                        type: Mi.BinaryExpression,
                        operator: t.text,
                        left: e,
                        right: this.unary()
                    };
                    return e
                },
                unary: function() {
                    var e;
                    return (e = this.expect("+", "-", "!")) ? {
                        type: Mi.UnaryExpression,
                        operator: e.text,
                        prefix: !0,
                        argument: this.unary()
                    } : this.primary()
                },
                primary: function() {
                    var e;
                    this.expect("(") ? (e = this.filterChain(), this.consume(")")) : this.expect("[") ? e = this.arrayDeclaration() : this.expect("{") ? e = this.object() : this.constants.hasOwnProperty(this.peek().text) ? e = ft(this.constants[this.consume().text]) : this.peek().identifier ? e = this.identifier() : this.peek().constant ? e = this.constant() : this.throwError("not a primary expression", this.peek());
                    var t;
                    while (t = this.expect("(", "[", ".")) t.text === "(" ? (e = {
                        type: Mi.CallExpression,
                        callee: e,
                        arguments: this.parseArguments()
                    }, this.consume(")")) : t.text === "[" ? (e = {
                        type: Mi.MemberExpression,
                        object: e,
                        property: this.expression(),
                        computed: !0
                    }, this.consume("]")) : t.text === "." ? e = {
                        type: Mi.MemberExpression,
                        object: e,
                        property: this.identifier(),
                        computed: !1
                    } : this.throwError("IMPOSSIBLE");
                    return e
                },
                filter: function(e) {
                    var t = [e],
                        n = {
                            type: Mi.CallExpression,
                            callee: this.identifier(),
                            arguments: t,
                            filter: !0
                        };
                    while (this.expect(":")) t.push(this.expression());
                    return n
                },
                parseArguments: function() {
                    var e = [];
                    if (this.peekToken().text !== ")")
                        do e.push(this.expression()); while (this.expect(","));
                    return e
                },
                identifier: function() {
                    var e = this.consume();
                    return e.identifier || this.throwError("is not a valid identifier", e), {
                        type: Mi.Identifier,
                        name: e.text
                    }
                },
                constant: function() {
                    return {
                        type: Mi.Literal,
                        value: this.consume().value
                    }
                },
                arrayDeclaration: function() {
                    var e = [];
                    if (this.peekToken().text !== "]")
                        do {
                            if (this.peek("]")) break;
                            e.push(this.expression())
                        } while (this.expect(","));
                    return this.consume("]"), {
                        type: Mi.ArrayExpression,
                        elements: e
                    }
                },
                object: function() {
                    var e = [],
                        t;
                    if (this.peekToken().text !== "}")
                        do {
                            if (this.peek("}")) break;
                            t = {
                                type: Mi.Property,
                                kind: "init"
                            }, this.peek().constant ? t.key = this.constant() : this.peek().identifier ? t.key = this.identifier() : this.throwError("invalid key", this.peek()), this.consume(":"), t.value = this.expression(), e.push(t)
                        } while (this.expect(","));
                    return this.consume("}"), {
                        type: Mi.ObjectExpression,
                        properties: e
                    }
                },
                throwError: function(e, t) {
                    throw Ei("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", t.text, e, t.index + 1, this.text, this.text.substring(t.index))
                },
                consume: function(e) {
                    if (this.tokens.length === 0) throw Ei("ueoe", "Unexpected end of expression: {0}", this.text);
                    var t = this.expect(e);
                    return t || this.throwError("is unexpected, expecting [" + e + "]", this.peek()), t
                },
                peekToken: function() {
                    if (this.tokens.length === 0) throw Ei("ueoe", "Unexpected end of expression: {0}", this.text);
                    return this.tokens[0]
                },
                peek: function(e, t, n, r) {
                    return this.peekAhead(0, e, t, n, r)
                },
                peekAhead: function(e, t, n, r, i) {
                    if (this.tokens.length > e) {
                        var s = this.tokens[e],
                            o = s.text;
                        if (o === t || o === n || o === r || o === i || !t && !n && !r && !i) return s
                    }
                    return !1
                },
                expect: function(e, t, n, r) {
                    var i = this.peek(e, t, n, r);
                    return i ? (this.tokens.shift(), i) : !1
                },
                constants: {
                    "true": {
                        type: Mi.Literal,
                        value: !0
                    },
                    "false": {
                        type: Mi.Literal,
                        value: !1
                    },
                    "null": {
                        type: Mi.Literal,
                        value: null
                    },
                    "undefined": {
                        type: Mi.Literal,
                        value: n
                    },
                    "this": {
                        type: Mi.ThisExpression
                    }
                }
            }, Ri.prototype = {
                compile: function(e, t) {
                    var r = this,
                        i = this.astBuilder.ast(e);
                    this.state = {
                        nextId: 0,
                        filters: {},
                        expensiveChecks: t,
                        fn: {
                            vars: [],
                            body: [],
                            own: {}
                        },
                        assign: {
                            vars: [],
                            body: [],
                            own: {}
                        },
                        inputs: []
                    }, Hi(i, r.$filter);
                    var s = "",
                        o;
                    this.stage = "assign";
                    if (o = Fi(i)) {
                        this.state.computing = "assign";
                        var u = this.nextId();
                        this.recurse(o, u), s = "fn.assign=" + this.generateFunction("assign", "s,v,l")
                    }
                    var a = Bi(i.body);
                    r.stage = "inputs", T(a, function(e, t) {
                        var n = "fn" + t;
                        r.state[n] = {
                            vars: [],
                            body: [],
                            own: {}
                        }, r.state.computing = n;
                        var i = r.nextId();
                        r.recurse(e, i), r.return_(i), r.state.inputs.push(n), e.watchId = t
                    }), this.state.computing = "fn", this.stage = "main", this.recurse(i);
                    var f = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + s + this.watchFns() + "return fn;",
                        l = (new Function("$filter", "ensureSafeMemberName", "ensureSafeObject", "ensureSafeFunction", "ifDefined", "plus", "text", f))(this.$filter, Si, xi, ki, _i, Di, e);
                    return this.state = this.stage = n, l.literal = Ii(i), l.constant = qi(i), l
                },
                USE: "use",
                STRICT: "strict",
                watchFns: function() {
                    var e = [],
                        t = this.state.inputs,
                        n = this;
                    return T(t, function(t) {
                        e.push("var " + t + "=" + n.generateFunction(t, "s"))
                    }), t.length && e.push("fn.inputs=[" + t.join(",") + "];"), e.join("")
                },
                generateFunction: function(e, t) {
                    return "function(" + t + "){" + this.varsPrefix(e) + this.body(e) + "};"
                },
                filterPrefix: function() {
                    var e = [],
                        t = this;
                    return T(this.state.filters, function(n, r) {
                        e.push(n + "=$filter(" + t.escape(r) + ")")
                    }), e.length ? "var " + e.join(",") + ";" : ""
                },
                varsPrefix: function(e) {
                    return this.state[e].vars.length ? "var " + this.state[e].vars.join(",") + ";" : ""
                },
                body: function(e) {
                    return this.state[e].body.join("")
                },
                recurse: function(e, t, r, i, s, o) {
                    var u, a, f = this,
                        l, c;
                    i = i || P;
                    if (!o && F(e.watchId)) {
                        t = t || this.nextId(), this.if_("i", this.lazyAssign(t, this.computedMember("i", e.watchId)), this.lazyRecurse(e, t, r, i, s, !0));
                        return
                    }
                    switch (e.type) {
                        case Mi.Program:
                            T(e.body, function(t, r) {
                                f.recurse(t.expression, n, n, function(e) {
                                    a = e
                                }), r !== e.body.length - 1 ? f.current().body.push(a, ";") : f.return_(a)
                            });
                            break;
                        case Mi.Literal:
                            c = this.escape(e.value), this.
                            assign(t, c), i(c);
                            break;
                        case Mi.UnaryExpression:
                            this.recurse(e.argument, n, n, function(e) {
                                a = e
                            }), c = e.operator + "(" + this.ifDefined(a, 0) + ")", this.assign(t, c), i(c);
                            break;
                        case Mi.BinaryExpression:
                            this.recurse(e.left, n, n, function(e) {
                                u = e
                            }), this.recurse(e.right, n, n, function(e) {
                                a = e
                            }), e.operator === "+" ? c = this.plus(u, a) : e.operator === "-" ? c = this.ifDefined(u, 0) + e.operator + this.ifDefined(a, 0) : c = "(" + u + ")" + e.operator + "(" + a + ")", this.assign(t, c), i(c);
                            break;
                        case Mi.LogicalExpression:
                            t = t || this.nextId(), f.recurse(e.left, t), f.if_(e.operator === "&&" ? t : f.not(t), f.lazyRecurse(e.right, t)), i(t);
                            break;
                        case Mi.ConditionalExpression:
                            t = t || this.nextId(), f.recurse(e.test, t), f.if_(t, f.lazyRecurse(e.alternate, t), f.lazyRecurse(e.consequent, t)), i(t);
                            break;
                        case Mi.Identifier:
                            t = t || this.nextId(), r && (r.context = f.stage === "inputs" ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", e.name) + "?l:s"), r.computed = !1, r.name = e.name), Si(e.name), f.if_(f.stage === "inputs" || f.not(f.getHasOwnProperty("l", e.name)), function() {
                                f.if_(f.stage === "inputs" || "s", function() {
                                    s && s !== 1 && f.if_(f.not(f.nonComputedMember("s", e.name)), f.lazyAssign(f.nonComputedMember("s", e.name), "{}")), f.assign(t, f.nonComputedMember("s", e.name))
                                })
                            }, t && f.lazyAssign(t, f.nonComputedMember("l", e.name))), (f.state.expensiveChecks || $i(e.name)) && f.addEnsureSafeObject(t), i(t);
                            break;
                        case Mi.MemberExpression:
                            u = r && (r.context = this.nextId()) || this.nextId(), t = t || this.nextId(), f.recurse(e.object, u, n, function() {
                                f.if_(f.notNull(u), function() {
                                    if (e.computed) a = f.nextId(), f.recurse(e.property, a), f.addEnsureSafeMemberName(a), s && s !== 1 && f.if_(f.not(f.computedMember(u, a)), f.lazyAssign(f.computedMember(u, a), "{}")), c = f.ensureSafeObject(f.computedMember(u, a)), f.assign(t, c), r && (r.computed = !0, r.name = a);
                                    else {
                                        Si(e.property.name), s && s !== 1 && f.if_(f.not(f.nonComputedMember(u, e.property.name)), f.lazyAssign(f.nonComputedMember(u, e.property.name), "{}")), c = f.nonComputedMember(u, e.property.name);
                                        if (f.state.expensiveChecks || $i(e.property.name)) c = f.ensureSafeObject(c);
                                        f.assign(t, c), r && (r.computed = !1, r.name = e.property.name)
                                    }
                                    i(t)
                                })
                            }, !!s);
                            break;
                        case Mi.CallExpression:
                            t = t || this.nextId(), e.filter ? (a = f.filter(e.callee.name), l = [], T(e.arguments, function(e) {
                                var t = f.nextId();
                                f.recurse(e, t), l.push(t)
                            }), c = a + "(" + l.join(",") + ")", f.assign(t, c), i(t)) : (a = f.nextId(), u = {}, l = [], f.recurse(e.callee, a, u, function() {
                                f.if_(f.notNull(a), function() {
                                    f.addEnsureSafeFunction(a), T(e.arguments, function(e) {
                                        f.recurse(e, f.nextId(), n, function(e) {
                                            l.push(f.ensureSafeObject(e))
                                        })
                                    }), u.name ? (f.state.expensiveChecks || f.addEnsureSafeObject(u.context), c = f.member(u.context, u.name, u.computed) + "(" + l.join(",") + ")") : c = a + "(" + l.join(",") + ")", c = f.ensureSafeObject(c), f.assign(t, c), i(t)
                                })
                            }));
                            break;
                        case Mi.AssignmentExpression:
                            a = this.nextId(), u = {};
                            if (!ji(e.left)) throw Ei("lval", "Trying to assing a value to a non l-value");
                            this.recurse(e.left, n, u, function() {
                                f.if_(f.notNull(u.context), function() {
                                    f.recurse(e.right, a), f.addEnsureSafeObject(f.member(u.context, u.name, u.computed)), c = f.member(u.context, u.name, u.computed) + e.operator + a, f.assign(t, c), i(t || c)
                                })
                            }, 1);
                            break;
                        case Mi.ArrayExpression:
                            l = [], T(e.elements, function(e) {
                                f.recurse(e, f.nextId(), n, function(e) {
                                    l.push(e)
                                })
                            }), c = "[" + l.join(",") + "]", this.assign(t, c), i(c);
                            break;
                        case Mi.ObjectExpression:
                            l = [], T(e.properties, function(e) {
                                f.recurse(e.value, f.nextId(), n, function(t) {
                                    l.push(f.escape(e.key.type === Mi.Identifier ? e.key.name : "" + e.key.value) + ":" + t)
                                })
                            }), c = "{" + l.join(",") + "}", this.assign(t, c), i(c);
                            break;
                        case Mi.ThisExpression:
                            this.assign(t, "s"), i("s");
                            break;
                        case Mi.NGValueParameter:
                            this.assign(t, "v"), i("v")
                    }
                },
                getHasOwnProperty: function(e, t) {
                    var n = e + "." + t,
                        r = this.current().own;
                    return r.hasOwnProperty(n) || (r[n] = this.nextId(!1, e + "&&(" + this.escape(t) + " in " + e + ")")), r[n]
                },
                assign: function(e, t) {
                    if (!e) return;
                    return this.current().body.push(e, "=", t, ";"), e
                },
                filter: function(e) {
                    return this.state.filters.hasOwnProperty(e) || (this.state.filters[e] = this.nextId(!0)), this.state.filters[e]
                },
                ifDefined: function(e, t) {
                    return "ifDefined(" + e + "," + this.escape(t) + ")"
                },
                plus: function(e, t) {
                    return "plus(" + e + "," + t + ")"
                },
                return_: function(e) {
                    this.current().body.push("return ", e, ";")
                },
                if_: function(e, t, n) {
                    if (e === !0) t();
                    else {
                        var r = this.current().body;
                        r.push("if(", e, "){"), t(), r.push("}"), n && (r.push("else{"), n(), r.push("}"))
                    }
                },
                not: function(e) {
                    return "!(" + e + ")"
                },
                notNull: function(e) {
                    return e + "!=null"
                },
                nonComputedMember: function(e, t) {
                    return e + "." + t
                },
                computedMember: function(e, t) {
                    return e + "[" + t + "]"
                },
                member: function(e, t, n) {
                    return n ? this.computedMember(e, t) : this.nonComputedMember(e, t)
                },
                addEnsureSafeObject: function(e) {
                    this.current().body.push(this.ensureSafeObject(e), ";")
                },
                addEnsureSafeMemberName: function(e) {
                    this.current().body.push(this.ensureSafeMemberName(e), ";")
                },
                addEnsureSafeFunction: function(e) {
                    this.current().body.push(this.ensureSafeFunction(e), ";")
                },
                ensureSafeObject: function(e) {
                    return "ensureSafeObject(" + e + ",text)"
                },
                ensureSafeMemberName: function(e) {
                    return "ensureSafeMemberName(" + e + ",text)"
                },
                ensureSafeFunction: function(e) {
                    return "ensureSafeFunction(" + e + ",text)"
                },
                lazyRecurse: function(e, t, n, r, i, s) {
                    var o = this;
                    return function() {
                        o.recurse(e, t, n, r, i, s)
                    }
                },
                lazyAssign: function(e, t) {
                    var n = this;
                    return function() {
                        n.assign(e, t)
                    }
                },
                stringEscapeRegex: /[^ a-zA-Z0-9]/g,
                stringEscapeFn: function(e) {
                    return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                },
                escape: function(e) {
                    if (R(e)) return "'" + e.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";
                    if (U(e)) return e.toString();
                    if (e === !0) return "true";
                    if (e === !1) return "false";
                    if (e === null) return "null";
                    if (typeof e == "undefined") return "undefined";
                    throw Ei("esc", "IMPOSSIBLE")
                },
                nextId: function(e, t) {
                    var n = "v" + this.state.nextId++;
                    return e || this.current().vars.push(n + (t ? "=" + t : "")), n
                },
                current: function() {
                    return this.state[this.state.computing]
                }
            }, Ui.prototype = {
                compile: function(e, t) {
                    var n = this,
                        r = this.astBuilder.ast(e);
                    this.expression = e, this.expensiveChecks = t, Hi(r, n.$filter);
                    var i, s;
                    if (i = Fi(r)) s = this.recurse(i);
                    var o = Bi(r.body),
                        u;
                    o && (u = [], T(o, function(e, t) {
                        var r = n.recurse(e);
                        e.input = r, u.push(r), e.watchId = t
                    }));
                    var a = [];
                    T(r.body, function(e) {
                        a.push(n.recurse(e.expression))
                    });
                    var f =
                        r.body.length === 0 ? function() {} : r.body.length === 1 ? a[0] : function(e, t) {
                            var n;
                            return T(a, function(r) {
                                n = r(e, t)
                            }), n
                        };
                    return s && (f.assign = function(e, t, n) {
                        return s(e, n, t)
                    }), u && (f.inputs = u), f.literal = Ii(r), f.constant = qi(r), f
                },
                recurse: function(e, t, r) {
                    var i, s, o = this,
                        u, a;
                    if (e.input) return this.inputs(e.input, e.watchId);
                    switch (e.type) {
                        case Mi.Literal:
                            return this.value(e.value, t);
                        case Mi.UnaryExpression:
                            return s = this.recurse(e.argument), this["unary" + e.operator](s, t);
                        case Mi.BinaryExpression:
                            return i = this.recurse(e.left), s = this.recurse(e.right), this["binary" + e.operator](i, s, t);
                        case Mi.LogicalExpression:
                            return i = this.recurse(e.left), s = this.recurse(e.right), this["binary" + e.operator](i, s, t);
                        case Mi.ConditionalExpression:
                            return this["ternary?:"](this.recurse(e.test), this.recurse(e.alternate), this.recurse(e.consequent), t);
                        case Mi.Identifier:
                            return Si(e.name, o.expression), o.identifier(e.name, o.expensiveChecks || $i(e.name), t, r, o.expression);
                        case Mi.MemberExpression:
                            return i = this.recurse(e.object, !1, !!r), e.computed || (Si(e.property.name, o.expression), s = e.property.name), e.computed && (s = this.recurse(e.property)), e.computed ? this.computedMember(i, s, t, r, o.expression) : this.nonComputedMember(i, s, o.expensiveChecks, t, r, o.expression);
                        case Mi.CallExpression:
                            return u = [], T(e.arguments, function(e) {
                                u.push(o.recurse(e))
                            }), e.filter && (s = this.$filter(e.callee.name)), e.filter || (s = this.recurse(e.callee, !0)), e.filter ? function(e, r, i, o) {
                                var a = [];
                                for (var f = 0; f < u.length; ++f) a.push(u[f](e, r, i, o));
                                var l = s.apply(n, a, o);
                                return t ? {
                                    context: n,
                                    name: n,
                                    value: l
                                } : l
                            } : function(e, n, r, i) {
                                var a = s(e, n, r, i),
                                    f;
                                if (a.value != null) {
                                    xi(a.context, o.expression), ki(a.value, o.expression);
                                    var l = [];
                                    for (var c = 0; c < u.length; ++c) l.push(xi(u[c](e, n, r, i), o.expression));
                                    f = xi(a.value.apply(a.context, l), o.expression)
                                }
                                return t ? {
                                    value: f
                                } : f
                            };
                        case Mi.AssignmentExpression:
                            return i = this.recurse(e.left, !0, 1), s = this.recurse(e.right),
                                function(e, n, r, u) {
                                    var a = i(e, n, r, u),
                                        f = s(e, n, r, u);
                                    return xi(a.value, o.expression), a.context[a.name] = f, t ? {
                                        value: f
                                    } : f
                                };
                        case Mi.ArrayExpression:
                            return u = [], T(e.elements, function(e) {
                                    u.push(o.recurse(e))
                                }),
                                function(e, n, r, i) {
                                    var s = [];
                                    for (var o = 0; o < u.length; ++o) s.push(u[o](e, n, r, i));
                                    return t ? {
                                        value: s
                                    } : s
                                };
                        case Mi.ObjectExpression:
                            return u = [], T(e.properties, function(e) {
                                    u.push({
                                        key: e.key.type === Mi.Identifier ? e.key.name : "" + e.key.value,
                                        value: o.recurse(e.value)
                                    })
                                }),
                                function(e, n, r, i) {
                                    var s = {};
                                    for (var o = 0; o < u.length; ++o) s[u[o].key] = u[o].value(e, n, r, i);
                                    return t ? {
                                        value: s
                                    } : s
                                };
                        case Mi.ThisExpression:
                            return function(e) {
                                return t ? {
                                    value: e
                                } : e
                            };
                        case Mi.NGValueParameter:
                            return function(e, n, r, i) {
                                return t ? {
                                    value: r
                                } : r
                            }
                    }
                },
                "unary+": function(e, t) {
                    return function(n, r, i, s) {
                        var o = e(n, r, i, s);
                        return F(o) ? o = +o : o = 0, t ? {
                            value: o
                        } : o
                    }
                },
                "unary-": function(e, t) {
                    return function(n, r, i, s) {
                        var o = e(n, r, i, s);
                        return F(o) ? o = -o : o = 0, t ? {
                            value: o
                        } : o
                    }
                },
                "unary!": function(e, t) {
                    return function(n, r, i, s) {
                        var o = !e(n, r, i, s);
                        return t ? {
                            value: o
                        } : o
                    }
                },
                "binary+": function(e, t, n) {
                    return function(r, i, s, o) {
                        var u = e(r, i, s, o),
                            a = t(r, i, s, o),
                            f = Di(u, a);
                        return n ? {
                            value: f
                        } : f
                    }
                },
                "binary-": function(e, t, n) {
                    return function(r, i, s, o) {
                        var u = e(r, i, s, o),
                            a = t(r, i, s, o),
                            f = (F(u) ? u : 0) - (F(a) ? a : 0);
                        return n ? {
                            value: f
                        } : f
                    }
                },
                "binary*": function(e, t, n) {
                    return function(r, i, s, o) {
                        var u = e(r, i, s, o) * t(r, i, s, o);
                        return n ? {
                            value: u
                        } : u
                    }
                },
                "binary/": function(e, t, n) {
                    return function(r, i, s, o) {
                        var u = e(r, i, s, o) / t(r, i, s, o);
                        return n ? {
                            value: u
                        } : u
                    }
                },
                "binary%": function(e, t, n) {
                    return function(r, i, s, o) {
                        var u = e(r, i, s, o) % t(r, i, s, o);
                        return n ? {
                            value: u
                        } : u
                    }
                },
                "binary===": function(e, t, n) {
                    return function(r, i, s, o) {
                        var u = e(r, i, s, o) === t(r, i, s, o);
                        return n ? {
                            value: u
                        } : u
                    }
                },
                "binary!==": function(e, t, n) {
                    return function(r, i, s, o) {
                        var u = e(r, i, s, o) !== t(r, i, s, o);
                        return n ? {
                            value: u
                        } : u
                    }
                },
                "binary==": function(e, t, n) {
                    return function(r, i, s, o) {
                        var u = e(r, i, s, o) == t(r, i, s, o);
                        return n ? {
                            value: u
                        } : u
                    }
                },
                "binary!=": function(e, t, n) {
                    return function(r, i, s, o) {
                        var u = e(r, i, s, o) != t(r, i, s, o);
                        return n ? {
                            value: u
                        } : u
                    }
                },
                "binary<": function(e, t, n) {
                    return function(r, i, s, o) {
                        var u = e(r, i, s, o) < t(r, i, s, o);
                        return n ? {
                            value: u
                        } : u
                    }
                },
                "binary>": function(e, t, n) {
                    return function(r, i, s, o) {
                        var u = e(r, i, s, o) > t(r, i, s, o);
                        return n ? {
                            value: u
                        } : u
                    }
                },
                "binary<=": function(e, t, n) {
                    return function(r, i, s, o) {
                        var u = e(r, i, s, o) <= t(r, i, s, o);
                        return n ? {
                            value: u
                        } : u
                    }
                },
                "binary>=": function(e, t, n) {
                    return function(r, i, s, o) {
                        var u = e(r, i, s, o) >= t(r, i, s, o);
                        return n ? {
                            value: u
                        } : u
                    }
                },
                "binary&&": function(e, t, n) {
                    return function(r, i, s, o) {
                        var u = e(r, i, s, o) && t(r, i, s, o);
                        return n ? {
                            value: u
                        } : u
                    }
                },
                "binary||": function(e, t, n) {
                    return function(r, i, s, o) {
                        var u = e(r, i, s, o) || t(r, i, s, o);
                        return n ? {
                            value: u
                        } : u
                    }
                },
                "ternary?:": function(e, t, n, r) {
                    return function(i, s, o, u) {
                        var a = e(i, s, o, u) ? t(i, s, o, u) : n(i, s, o, u);
                        return r ? {
                            value: a
                        } : a
                    }
                },
                value: function(e, t) {
                    return function() {
                        return t ? {
                            context: n,
                            name: n,
                            value: e
                        } : e
                    }
                },
                identifier: function(e, t, r, i, s) {
                    return function(o, u, a, f) {
                        var l = u && e in u ? u : o;
                        i && i !== 1 && l && !l[e] && (l[e] = {});
                        var c = l ? l[e] : n;
                        return t && xi(c, s), r ? {
                            context: l,
                            name: e,
                            value: c
                        } : c
                    }
                },
                computedMember: function(e, t, n, r, i) {
                    return function(s, o, u, a) {
                        var f = e(s, o, u, a),
                            l, c;
                        return f != null && (l = t(s, o, u, a), Si(l, i), r && r !== 1 && f && !f[l] && (f[l] = {}), c = f[l], xi(c, i)), n ? {
                            context: f,
                            name: l,
                            value: c
                        } : c
                    }
                },
                nonComputedMember: function(e, t, r, i, s, o) {
                    return function(u, a, f, l) {
                        var c = e(u, a, f, l);
                        s && s !== 1 && c && !c[t] && (c[t] = {});
                        var h = c != null ? c[t] : n;
                        return (r || $i(t)) && xi(h, o), i ? {
                            context: c,
                            name: t,
                            value: h
                        } : h
                    }
                },
                inputs: function(e, t) {
                    return function(n, r, i, s) {
                        return s ? s[t] : e(n, r, i)
                    }
                }
            };
            var zi = function(e, t, n) {
                this.lexer = e, this.$filter = t, this.options = n, this.ast = new Mi(this.lexer), this.astCompiler = n.csp ? new Ui(this.ast, t) : new Ri(this.ast, t)
            };
            zi.prototype = {
                constructor: zi,
                parse: function(e) {
                    return this.astCompiler.compile(e, this.options.expensiveChecks)
                }
            };
            var Xi = Xt(),
                Vi = Xt(),
                Ji = Object.prototype.valueOf,
                rs = r("$sce"),
                is = {
                    HTML: "html",
                    CSS: "css",
                    URL: "url",
                    RESOURCE_URL: "resourceUrl",
                    JS: "js"
                },
                wr = r("$compile"),
                ps = t.createElement("a"),
                ds = vs(e.location.href);
            ys.$inject = ["$document"], ws.$inject = ["$provide"], Cs.$inject = ["$locale"], ks.$inject = ["$locale"];
            var Ls = ".",
                qs = {
                    yyyy: Ms("FullYear", 4),
                    yy: Ms("FullYear", 2, 0, !0),
                    y: Ms("FullYear", 1),
                    MMMM: _s("Month"),
                    MMM: _s("Month", !0),
                    MM: Ms("Month", 2, 1),
                    M: Ms("Month", 1, 1),
                    dd: Ms("Date", 2),
                    d: Ms("Date", 1),
                    HH: Ms("Hours", 2),
                    H: Ms("Hours", 1),
                    hh: Ms("Hours", 2, -12),
                    h: Ms("Hours", 1, -12),
                    mm: Ms("Minutes", 2),
                    m: Ms("Minutes", 1),
                    ss: Ms("Seconds", 2),
                    s: Ms("Seconds", 1),
                    sss: Ms("Milliseconds", 3),
                    EEEE: _s("Day"),
                    EEE: _s("Day", !0),
                    a: js,
                    Z: Ds,
                    ww: Bs(2),
                    w: Bs(1),
                    G: Fs,
                    GG: Fs,
                    GGG: Fs,
                    GGGG: Is
                },
                Rs = /((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,
                Us = /^\-?\d+$/;
            zs.$inject = ["$locale"];
            var Xs = B(o),
                Vs = B(a);
            Js.$inject = ["$parse"];
            var Qs = B({
                    restrict: "E",
                    compile: function(e, t) {
                        if (!t.href && !t.xlinkHref) return function(e, t) {
                            if (t[0].nodeName.toLowerCase() !== "a") return;
                            var n = g.call(t.prop("href")) === "[object SVGAnimatedString]" ? "xlink:href" : "href";
                            t.on("click", function(e) {
                                t.attr(n) || e.preventDefault()
                            })
                        }
                    }
                }),
                Gs = {};
            T(qn, function(e, t) {
                function n(e, n, i) {
                    e.$watch(i[r], function(n) {
                        i.$set(t, !!n)
                    })
                }
                if (e == "multiple") return;
                var r = xr("ng-" + t),
                    i = n;
                e === "checked" && (i = function(e, t, i) {
                    i.ngModel !== i[r] && n(e, t, i)
                }), Gs[r] = function() {
                    return {
                        restrict: "A",
                        priority: 100,
                        link: i
                    }
                }
            }), T(Un, function(e, t) {
                Gs[t] = function() {
                    return {
                        priority: 100,
                        link: function(e, n, r) {
                            if (t === "ngPattern" && r.ngPattern.charAt(0) == "/") {
                                var s = r.ngPattern.match(i);
                                if (s) {
                                    r.$set("ngPattern", new RegExp(s[1], s[2]));
                                    return
                                }
                            }
                            e.$watch(r[t], function(n) {
                                r.$set(t, n)
                            })
                        }
                    }
                }
            }), T(["src", "srcset", "href"], function(e) {
                var t = xr("ng-" + e);
                Gs[t] = function() {
                    return {
                        priority: 99,
                        link: function(n, r, i) {
                            var s = e,
                                o = e;
                            e === "href" && g.call(r.prop("href")) === "[object SVGAnimatedString]" && (o = "xlinkHref", i.$attr[o] = "xlink:href", s = null), i.$observe(t, function(t) {
                                if (!t) {
                                    e === "href" && i.$set(o, null);
                                    return
                                }
                                i.$set(o, t), c && s && r.prop(s, i[o])
                            })
                        }
                    }
                }
            });
            var Ys = {
                    $addControl: P,
                    $$renameControl: eo,
                    $removeControl: P,
                    $setValidity: P,
                    $setDirty: P,
                    $setPristine: P,
                    $setSubmitted: P
                },
                Zs = "ng-submitted";
            to.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
            var no = function(e) {
                    return ["$timeout",
                        function(t) {
                            var r = {
                                name: "form",
                                restrict: e ? "EAC" : "E",
                                controller: to,
                                compile: function(i, s) {
                                    i.addClass(Go).addClass(Ko);
                                    var o = s.name ? "name" : e && s.ngForm ? "ngForm" : !1;
                                    return {
                                        pre: function(r, i, s, u) {
                                            if (!("action" in s)) {
                                                var a = function(e) {
                                                    r.$apply(function() {
                                                        u.$commitViewValue(), u.$setSubmitted()
                                                    }), e.preventDefault()
                                                };
                                                on(i[0], "submit", a), i.on("$destroy", function() {
                                                    t(function() {
                                                        un(i[0], "submit", a)
                                                    }, 0, !1)
                                                })
                                            }
                                            var f = u.$$parentForm;
                                            o && (Wi(r, u.$name, u, u.$name), s.$observe(o, function(e) {
                                                if (u.$name === e) return;
                                                Wi(r, u.$name, n, u.$name), f.$$renameControl(u, e), Wi(r, u.$name, u, u.$name)
                                            })), i.on("$destroy", function() {
                                                f.$removeControl(u), o && Wi(r, s[o], n, u.$name), O(u, Ys)
                                            })
                                        }
                                    }
                                }
                            };
                            return r
                        }
                    ]
                },
                ro = no(),
                io = no(!0),
                so = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,
                oo = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
                uo = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
                ao = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,
                fo = /^(\d{4})-(\d{2})-(\d{2})$/,
                lo = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
                co = /^(\d{4})-W(\d\d)$/,
                ho = /^(\d{4})-(\d\d)$/,
                po = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
                vo = {
                    text: go,
                    date: Eo("date", fo, wo(fo, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
                    "datetime-local": Eo("datetimelocal", lo, wo(lo, ["yyyy", "MM", "dd", "HH", "mm", "ss", "sss"]), "yyyy-MM-ddTHH:mm:ss.sss"),
                    time: Eo("time", po, wo(po, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
                    week: Eo("week", co, bo, "yyyy-Www"),
                    month: Eo("month", ho, wo(ho, ["yyyy", "MM"]), "yyyy-MM"),
                    number: xo,
                    url: To,
                    email: No,
                    radio: Co,
                    checkbox: Lo,
                    hidden: P,
                    button: P,
                    submit: P,
                    reset: P,
                    file: P
                },
                Ao = ["$browser", "$sniffer", "$filter", "$parse",
                    function(e, t, n, r) {
                        return {
                            restrict: "E",
                            require: ["?ngModel"],
                            link: {
                                pre: function(i, s, u, a) {
                                    a[0] && (vo[o(u.type)] || vo.text)(i, s, u, a[0], t, e, n, r)
                                }
                            }
                        }
                    }
                ],
                Oo = /^(true|false|\d+)$/,
                Mo = function() {
                    return {
                        restrict: "A",
                        priority: 100,
                        compile: function(e, t) {
                            return Oo.test(t.ngValue) ? function(t, n, r) {
                                r.$set("value", t.$eval(r.ngValue))
                            } : function(t, n, r) {
                                t.$watch(r.ngValue, function(t) {
                                    r.$set("value", t)
                                })
                            }
                        }
                    }
                },
                _o = ["$compile",
                    function(e) {
                        return {
                            restrict: "AC",
                            compile: function(r) {
                                return e.$$addBindingClass(r),
                                    function(r, i, s) {
                                        e.$$addBindingInfo(i, s.ngBind), i = i[0], r.$watch(s.ngBind, function(t) {
                                            i.textContent = t === n ? "" : t
                                        })
                                    }
                            }
                        }
                    }
                ],
                Do = ["$interpolate", "$compile",
                    function(e, t) {
                        return {
                            compile: function(i) {
                                return t.$$addBindingClass(i),
                                    function(i, s, o) {
                                        var u = e(s.attr(o.$attr.ngBindTemplate));
                                        t.$$addBindingInfo(s, u.expressions), s = s[0], o.$observe("ngBindTemplate", function(e) {
                                            s.textContent = e === n ? "" : e
                                        })
                                    }
                            }
                        }
                    }
                ],
                Po = ["$sce", "$parse", "$compile",
                    function(e, t, n) {
                        return {
                            restrict: "A",
                            compile: function(i, s) {
                                var o = t(s.ngBindHtml),
                                    u = t(s.ngBindHtml, function(t) {
                                        return (t || "").toString()
                                    });
                                return n.$$addBindingClass(i),
                                    function(r, i, s) {
                                        n.$$addBindingInfo(i, s.ngBindHtml), r.$watch(u, function() {
                                            i.html(e.getTrustedHtml(o(r)) || "")
                                        })
                                    }
                            }
                        }
                    }
                ],
                Ho = B({
                    restrict: "A",
                    require: "ngModel",
                    link: function(e, t, n, r) {
                        r.$viewChangeListeners.push(function() {
                            e.$eval(n.ngChange)
                        })
                    }
                }),
                jo = Bo("", !0),
                Fo = Bo("Odd", 0),
                Io = Bo("Even", 1),
                qo = Ks({
                    compile: function(e, t) {
                        t.$set("ngCloak", n), e.removeClass("ng-cloak")
                    }
                }),
                Ro = [

                    function() {
                        return {
                            restrict: "A",
                            scope: !0,
                            controller: "@",
                            priority: 500
                        }
                    }
                ],
                Uo = {},
                zo = {
                    blur: !0,
                    focus: !0
                };
            T("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(e) {
                var t = xr("ng-" + e);
                Uo[t] = ["$parse", "$rootScope",
                    function(n, r) {
                        return {
                            restrict: "A",
                            compile: function(i, s) {
                                var o = n(s[t], null, !0);
                                return function(n, i) {
                                    i.on(e, function(t) {
                                        var i = function() {
                                            o(n, {
                                                $event: t
                                            })
                                        };
                                        zo[e] && r.$$phase ? n.$evalAsync(i) : n.$apply(i)
                                    })
                                }
                            }
                        }
                    }
                ]
            });
            var Wo = ["$animate",
                    function(e) {
                        return {
                            multiElement: !0,
                            transclude: "element",
                            priority: 600,
                            terminal: !0,
                            restrict: "A",
                            $$tlb: !0,
                            link: function(n, r, i, s, o) {
                                var u, a, f;
                                n.$watch(i.ngIf, function(s) {
                                    s ? a || o(function(n, s) {
                                        a = s, n[n.length++] = t.createComment(" end ngIf: " + i.ngIf + " "), u = {
                                            clone: n
                                        }, e.enter(n, r.parent(), r)
                                    }) : (f && (f.remove(), f = null), a && (a.$destroy(), a = null), u && (f = Wt(u.clone), e.leave(f).then(function() {
                                        f = null
                                    }), u = null))
                                })
                            }
                        }
                    }
                ],
                Xo = ["$templateRequest", "$anchorScroll", "$animate", "$sce",
                    function(e, t, n, r) {
                        return {
                            restrict: "ECA",
                            priority: 400,
                            terminal: !0,
                            transclude: "element",
                            controller: w.noop,
                            compile: function(i, s) {
                                var o = s.ngInclude || s.src,
                                    u = s.onload || "",
                                    a = s.autoscroll;
                                return function(i, s, f, l, c) {
                                    var h = 0,
                                        p, d, v, m = function() {
                                            d && (d.remove(), d = null), p && (p.$destroy(), p = null), v && (n.leave(v).then(function() {
                                                d = null
                                            }), d = v, v = null)
                                        };
                                    i.$watch(r.parseAsResourceUrl(o), function(o) {
                                        var f = function() {
                                                F(a) && (!a || i.$eval(a)) && t()
                                            },
                                            d = ++h;
                                        o ? (e(o, !0).then(function(e) {
                                            if (d !== h) return;
                                            var t = i.$new();
                                            l.template = e;
                                            var r = c(t, function(e) {
                                                m(), n.enter(e, null, s).then(f)
                                            });
                                            p = t, v = r, p.$emit("$includeContentLoaded", o), i.$eval(u)
                                        }, function() {
                                            d === h && (m(), i.$emit("$includeContentError", o))
                                        }), i.$emit("$includeContentRequested", o)) : (m(), l.template = null)
                                    })
                                }
                            }
                        }
                    }
                ],
                Vo = ["$compile",
                    function(e) {
                        return {
                            restrict: "ECA",
                            priority: -400,
                            require: "ngInclude",
                            link: function(n, r, i, s) {
                                if (/SVG/.test(r[0].toString())) {
                                    r.empty(), e(En(s.template, t).childNodes)(n, function(t) {
                                        r.append(t)
                                    }, {
                                        futureParentElement: r
                                    });
                                    return
                                }
                                r.html(s.template), e(r.contents())(n)
                            }
                        }
                    }
                ],
                $o = Ks({
                    priority: 450,
                    compile: function() {
                        return {
                            pre: function(e, t, n) {
                                e.$eval(n.ngInit)
                            }
                        }
                    }
                }),
                Jo = function() {
                    return {
                        restrict: "A",
                        priority: 100,
                        require: "ngModel",
                        link: function(e, t, r, i) {
                            var s = t.attr(r.$attr.ngList) || ", ",
                                o = r.ngTrim !== "false",
                                u = o ? nt(s) : s,
                                a = function(e) {
                                    if (j(e)) return;
                                    var t = [];
                                    return e && T(e.split(u), function(e) {
                                        e && t.push(o ? nt(e) : e)
                                    }), t
                                };
                            i.$parsers.push(a), i.$formatters.push(function(e) {
                                return W(e) ? e.join(s) : n
                            }), i.$isEmpty = function(e) {
                                return !e || !e.length
                            }
                        }
                    }
                },
                Ko = "ng-valid",
                Qo = "ng-invalid",
                Go = "ng-pristine",
                Yo = "ng-dirty",
                Zo = "ng-untouched",
                eu = "ng-touched",
                tu = "ng-pending",
                nu = new r("ngModel"),
                ru = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate",
                    function(e, t, r, i, s, o, u, a, f, l) {
                        this.$viewValue = Number.NaN, this.$modelValue = Number.NaN, this.$$rawModelValue = n, this.$validators = {}, this.$asyncValidators = {}, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$untouched = !0, this.$touched = !1, this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$error = {}, this.$$success = {}, this.$pending = n, this.$name = l(r.name || "", !1)(e);
                        var c = s(r.ngModel),
                            h = c.assign,
                            p = c,
                            d = h,
                            v = null,
                            m, g = this;
                        this.$$setOptions = function(e) {
                            g.$options = e;
                            if (e && e.getterSetter) {
                                var t = s(r.ngModel + "()"),
                                    n = s(r.ngModel + "($$$p)");
                                p = function(e) {
                                    var n = c(e);
                                    return X(n) && (n = t(e)), n
                                }, d = function(e, t) {
                                    X(c(e)) ? n(e, {
                                        $$$p: g.$modelValue
                                    }) : h(e, g.$modelValue)
                                }
                            } else if (!c.assign) throw nu("nonassign", "Expression '{0}' is non-assignable. Element: {1}", r.ngModel, xt(i))
                        }, this.$render = P, this.$isEmpty = function(e) {
                            return j(e) || e === "" || e === null || e !== e
                        };
                        var y = i.inheritedData("$formController") || Ys,
                            b = 0;
                        uu({
                            ctrl: this,
                            $element: i,
                            set: function(e, t) {
                                e[t] = !0
                            },
                            unset: function(e, t) {
                                delete e[t]
                            },
                            parentForm: y,
                            $animate: o
                        }), this.$setPristine = function() {
                            g.$dirty = !1, g.$pristine = !0, o.removeClass(i, Yo), o.addClass(i, Go)
                        }, this.$setDirty = function() {
                            g.$dirty = !0, g.$pristine = !1, o.removeClass(i, Go), o.addClass(i, Yo), y.$setDirty()
                        }, this.$setUntouched = function() {
                            g.$touched = !1, g.$untouched = !0, o.setClass(i, Zo, eu)
                        }, this.$setTouched = function() {
                            g.$touched = !0, g.$untouched = !1, o.setClass(i, eu, Zo)
                        }, this.$rollbackViewValue = function() {
                            u.cancel(v), g.$viewValue = g.$$lastCommittedViewValue, g.$render()
                        }, this.$validate = function() {
                            if (U(g.$modelValue) && isNaN(g.$modelValue)) return;
                            var e = g.$$lastCommittedViewValue,
                                t = g.$$rawModelValue,
                                r = g.$valid,
                                i = g.$modelValue,
                                s = g.$options && g.$options.allowInvalid;
                            g.$$runValidators(t, e, function(e) {
                                !s && r !== e && (g.$modelValue = e ? t : n, g.$modelValue !== i && g.$$writeModelToScope())
                            })
                        }, this.$$runValidators = function(e, t, r) {
                            function s() {
                                var e = g.$$parserName || "parse";
                                return m !== n ? (m || (T(g.$validators, function(e, t) {
                                    a(t, null)
                                }), T(g.$asyncValidators, function(e, t) {
                                    a(t, null)
                                })), a(e, m), m) : (a(e, null), !0)
                            }

                            function o() {
                                var n = !0;
                                return T(g.$validators, function(r, i) {
                                    var s = r(e, t);
                                    n = n && s, a(i, s)
                                }), n ? !0 : (T(g.$asyncValidators, function(e, t) {
                                    a(t, null)
                                }), !1)
                            }

                            function u() {
                                var r = [],
                                    i = !0;
                                T(g.$asyncValidators, function(s, o) {
                                    var u = s(e, t);
                                    if (!Z(u)) throw nu("$asyncValidators", "Expected asynchronous validator to return a promise but got '{0}' instead.", u);
                                    a(o, n), r.push(u.then(function() {
                                        a(o, !0)
                                    }, function(e) {
                                        i = !1, a(o, !1)
                                    }))
                                }), r.length ? f.all(r).then(function() {
                                    l(i)
                                }, P) : l(!0)
                            }

                            function a(e, t) {
                                i === b && g.$setValidity(e, t)
                            }

                            function l(e) {
                                i === b && r(e)
                            }
                            b++;
                            var i = b;
                            if (!s()) {
                                l(!1);
                                return
                            }
                            if (!o()) {
                                l(!1);
                                return
                            }
                            u()
                        }, this.$commitViewValue = function() {
                            var e = g.$viewValue;
                            u.cancel(v);
                            if (g.$$lastCommittedViewValue === e && (e !== "" || !g.$$hasNativeValidators)) return;
                            g.$$lastCommittedViewValue = e, g.$pristine && this.$setDirty(), this.$$parseAndValidate()
                        }, this.$$parseAndValidate = function() {
                            function u() {
                                g.$modelValue !== s && g.$$writeModelToScope()
                            }
                            var t = g.$$lastCommittedViewValue,
                                r = t;
                            m = j(r) ? n : !0;
                            if (m)
                                for (var i = 0; i < g.$parsers.length; i++) {
                                    r = g.$parsers[i](r);
                                    if (j(r)) {
                                        m = !1;
                                        break
                                    }
                                }
                            U(g.$modelValue) && isNaN(g.$modelValue) && (g.$modelValue = p(e));
                            var s = g.$modelValue,
                                o = g.$options && g.$options.allowInvalid;
                            g.$$rawModelValue = r, o && (g.$modelValue = r, u()), g.$$runValidators(r, g.$$lastCommittedViewValue, function(e) {
                                o || (g.$modelValue = e ? r : n, u())
                            })
                        }, this.$$writeModelToScope = function() {
                            d(e, g.$modelValue), T(g.$viewChangeListeners, function(e) {
                                try {
                                    e()
                                } catch (n) {
                                    t(n)
                                }
                            })
                        }, this.$setViewValue = function(e, t) {
                            g.$viewValue = e, (!g.$options || g.$options.updateOnDefault) && g.$$debounceViewValueCommit(t)
                        }, this.$$debounceViewValueCommit = function(t) {
                            var n = 0,
                                r = g.$options,
                                i;
                            r && F(r.debounce) && (i = r.debounce, U(i) ? n = i : U(i[t]) ? n = i[t] : U(i["default"]) && (n = i["default"])), u.cancel(v), n ? v = u(function() {
                                g.$commitViewValue()
                            }, n) : a.$$phase ? g.$commitViewValue() : e.$apply(function() {
                                g.$commitViewValue()
                            })
                        }, e.$watch(function() {
                            var r = p(e);
                            if (r !== g.$modelValue && (g.$modelValue === g.$modelValue || r === r)) {
                                g.$modelValue = g.$$rawModelValue = r, m = n;
                                var i = g.$formatters,
                                    s = i.length,
                                    o = r;
                                while (s--) o = i[s](o);
                                g.$viewValue !== o && (g.$viewValue = g.$$lastCommittedViewValue = o, g.$render(), g.$$runValidators(r, o, P))
                            }
                            return r
                        })
                    }
                ],
                iu = ["$rootScope",
                    function(e) {
                        return {
                            restrict: "A",
                            require: ["ngModel", "^?form", "^?ngModelOptions"],
                            controller: ru,
                            priority: 1,
                            compile: function(n) {
                                return n.addClass(Go).addClass(Zo).addClass(Ko), {
                                    pre: function(t, n, r, i) {
                                        var s = i[0],
                                            o = i[1] || Ys;
                                        s.$$setOptions(i[2] && i[2].$options), o.$addControl(s), r.$observe("name", function(e) {
                                            s.$name !== e && o.$$renameControl(s, e)
                                        }), t.$on("$destroy", function() {
                                            o.$removeControl(s)
                                        })
                                    },
                                    post: function(n, r, i, s) {
                                        var o = s[0];
                                        o.$options && o.$options.updateOn && r.on(o.$options.updateOn, function(e) {
                                            o.$$debounceViewValueCommit(e && e.type)
                                        }), r.on("blur", function(t) {
                                            if (o.$touched) return;
                                            e.$$phase ? n.$evalAsync(o.$setTouched) : n.$apply(o.$setTouched)
                                        })
                                    }
                                }
                            }
                        }
                    }
                ],
                su = /(\s+|^)default(\s+|$)/,
                ou = function() {
                    return {
                        restrict: "A",
                        controller: ["$scope", "$attrs",
                            function(e, t) {
                                var r = this;
                                this.$options = ft(e.$eval(t.ngModelOptions)), this.$options.updateOn !== n ? (this.$options.updateOnDefault = !1, this.$options.updateOn = nt(this.$options.updateOn.replace(su, function() {
                                    return r.$options.updateOnDefault = !0, " "
                                }))) : this.$options.updateOnDefault = !0
                            }
                        ]
                    }
                },
                fu = Ks({
                    terminal: !0,
                    priority: 1e3
                }),
                lu = r("ngOptions"),
                cu = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
                hu = ["$compile", "$parse",
                    function(e, n) {
                        function r(e, t, r) {
                            function S(e, t, n, r, i) {
                                this.selectValue = e, this.viewValue = t, this.label = n, this.group = r, this.disabled = i
                            }
                            var i = e.match(cu);
                            if (!i) throw lu("iexp", "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}", e, xt(t));
                            var s = i[5] || i[7],
                                o = i[6],
                                u = / as /.test(i[0]) && i[1],
                                a = i[9],
                                f = n(i[2] ? i[1] : s),
                                l = u && n(u),
                                c = l || f,
                                h = a && n(a),
                                p = a ? function(e, t) {
                                    return h(r, t)
                                } : function(t) {
                                    return $n(t)
                                },
                                d = function(e, t) {
                                    return p(e, E(e, t))
                                },
                                v = n(i[2] || i[1]),
                                m = n(i[3] || ""),
                                g = n(i[4] || ""),
                                y = n(i[8]),
                                b = {},
                                E = o ? function(e, t) {
                                    return b[o] = t, b[s] = e, b
                                } : function(e) {
                                    return b[s] = e, b
                                };
                            return {
                                trackBy: a,
                                getTrackByValue: d,
                                getWatchables: n(y, function(e) {
                                    var t = [];
                                    return e = e || [], Object.keys(e).forEach(function(s) {
                                        var o = E(e[s], s),
                                            u = p(e[s], o);
                                        t.push(u);
                                        if (i[2] || i[1]) {
                                            var a = v(r, o);
                                            t.push(a)
                                        }
                                        if (i[4]) {
                                            var f = g(r, o);
                                            t.push(f)
                                        }
                                    }), t
                                }),
                                getOptions: function() {
                                    var e = [],
                                        t = {},
                                        n = y(r) || [],
                                        i;
                                    if (!o && x(n)) i = n;
                                    else {
                                        i = [];
                                        for (var s in n) n.hasOwnProperty(s) && s.charAt(0) !== "$" && i.push(s)
                                    }
                                    var u = i.length;
                                    for (var f = 0; f < u; f++) {
                                        var l = n === i ? f : i[f],
                                            h = n[l],
                                            b = E(h, l),
                                            T = c(r, b),
                                            N = p(T, b),
                                            C = v(r, b),
                                            k = m(r, b),
                                            L = g(r, b),
                                            A = new S(N, T, C, k, L);
                                        e.push(A), t[N] = A
                                    }
                                    return {
                                        items: e,
                                        selectValueMap: t,
                                        getOptionFromViewValue: function(e) {
                                            return t[d(e)]
                                        },
                                        getViewValueFromOption: function(e) {
                                            return a ? w.copy(e.viewValue) : e.viewValue
                                        }
                                    }
                                }
                            }
                        }
                        var i = t.createElement("option"),
                            s = t.createElement("optgroup");
                        return {
                            restrict: "A",
                            terminal: !0,
                            require: ["select", "?ngModel"],
                            link: function(t, n, u, a) {
                                function C(e, t) {
                                    e.element = t, t.disabled = e.disabled, e.value !== t.value && (t.value = e.selectValue), e.label !== t.label && (t.label = e.label, t.textContent = e.label)
                                }

                                function k(e, t, n, r) {
                                    var i;
                                    return t && o(t.nodeName) === n ? i = t : (i = r.cloneNode(!1), t ? e.insertBefore(i, t) : e.appendChild(i)), i
                                }

                                function L(e) {
                                    var t;
                                    while (e) t = e.nextSibling, jn(e), e = t
                                }

                                function A(e) {
                                    var t = p && p[0],
                                        n = y && y[0];
                                    if (t || n)
                                        while (e && (e === t || e === n)) e = e.nextSibling;
                                    return e
                                }

                                function O() {
                                    var e = b && l.readValue();
                                    b = w.getOptions();
                                    var t = {},
                                        r = n[0].firstChild;
                                    g && n.prepend(p), r = A(r), b.items.forEach(function(o) {
                                        var u, a, f;
                                        o.group ? (u = t[o.group], u || (a = k(n[0], r, "optgroup", s), r = a.nextSibling, a.label = o.group, u = t[o.group] = {
                                            groupElement: a,
                                            currentOptionElement: a.firstChild
                                        }), f = k(u.groupElement, u.currentOptionElement, "option", i), C(o, f), u.currentOptionElement = f.nextSibling) : (f = k(n[0], r, "option", i), C(o, f), r = f.nextSibling)
                                    }), Object.keys(t).forEach(function(e) {
                                        L(t[e].currentOptionElement)
                                    }), L(r), f.$render();
                                    if (!f.$isEmpty(e)) {
                                        var o = l.readValue();
                                        if (w.trackBy && !ct(e, o) || e !== o) f.$setViewValue(o), f.$render()
                                    }
                                }
                                var f = a[1];
                                if (!f) return;
                                var l = a[0],
                                    c = u.multiple,
                                    p;
                                for (var d = 0, v = n.children(), m = v.length; d < m; d++)
                                    if (v[d].value === "") {
                                        p = v.eq(d);
                                        break
                                    }
                                var g = !!p,
                                    y = h(i.cloneNode(!1));
                                y.val("?");
                                var b, w = r(u.ngOptions, n, t),
                                    E = function() {
                                        g || n.prepend(p), n.val(""), p.prop("selected", !0), p.attr("selected", !0)
                                    },
                                    S = function() {
                                        g || p.remove()
                                    },
                                    x = function() {
                                        n.prepend(y), n.val("?"), y.prop("selected", !0), y.attr("selected", !0)
                                    },
                                    N = function() {
                                        y.remove()
                                    };
                                c ? (f.$isEmpty = function(e) {
                                    return !e || e.length === 0
                                }, l.writeValue = function(t) {
                                    b.items.forEach(function(e) {
                                        e.element.selected = !1
                                    }), t && t.forEach(function(e) {
                                        var t = b.getOptionFromViewValue(e);
                                        t && !t.disabled && (t.element.selected = !0)
                                    })
                                }, l.readValue = function() {
                                    var t = n.val() || [],
                                        r = [];
                                    return T(t, function(e) {
                                        var t = b.selectValueMap[e];
                                        t.disabled || r.push(b.getViewValueFromOption(t))
                                    }), r
                                }, w.trackBy && t.$watchCollection(function() {
                                    if (W(f.$viewValue)) return f.$viewValue.map(function(e) {
                                        return w.getTrackByValue(e)
                                    })
                                }, function() {
                                    f.$render()
                                })) : (l.writeValue = function(t) {
                                    var r = b.getOptionFromViewValue(t);
                                    r && !r.disabled ? n[0].value !== r.selectValue && (N(), S(), n[0].value = r.selectValue, r.element.selected = !0, r.element.setAttribute("selected", "selected")) : t === null || g ? (N(), E()) : (S(), x())
                                }, l.readValue = function() {
                                    var t = b.selectValueMap[n.val()];
                                    return t && !t.disabled ? (S(), N(), b.getViewValueFromOption(t)) : null
                                }, w.trackBy && t.$watch(function() {
                                    return w.getTrackByValue(f.$viewValue)
                                }, function() {
                                    f.$render()
                                })), g ? (p.remove(), e(p)(t), p.removeClass("ng-scope")) : p = h(i.cloneNode(!1)), O(), t.$watchCollection(w.getWatchables, O)
                            }
                        }
                    }
                ],
                pu = ["$locale", "$interpolate", "$log",
                    function(e, t, n) {
                        var r = /{}/g,
                            i = /^when(Minus)?(.+)$/;
                        return {
                            link: function(s, u, a) {
                                function b(e) {
                                    u.text(e || "")
                                }
                                var f = a.count,
                                    l = a.$attr.when && u.attr(a.$attr.when),
                                    c = a.offset || 0,
                                    h = s.$eval(l) || {},
                                    p = {},
                                    d = t.startSymbol(),
                                    v = t.endSymbol(),
                                    m = d + f + "-" + c + v,
                                    g = w.noop,
                                    y;
                                T(a, function(e, t) {
                                    var n = i.exec(t);
                                    if (n) {
                                        var r = (n[1] ? "-" : "") + o(n[2]);
                                        h[r] = u.attr(a.$attr[t])
                                    }
                                }), T(h, function(e, n) {
                                    p[n] = t(e.replace(r, m))
                                }), s.$watch(f, function(r) {
                                    var i = parseFloat(r),
                                        o = isNaN(i);
                                    !o && !(i in h) && (i = e.pluralCat(i - c));
                                    if (i !== y && !(o && U(y) && isNaN(y))) {
                                        g();
                                        var u = p[i];
                                        j(u) ? (r != null && n.debug("ngPluralize: no rule defined for '" + i + "' in " + l), g = P, b()) : g = s.$watch(u, b), y = i
                                    }
                                })
                            }
                        }
                    }
                ],
                du = ["$parse", "$animate",
                    function(e, i) {
                        var s = "$$NG_REMOVED",
                            o = r("ngRepeat"),
                            u = function(e, t, n, r, i, s, o) {
                                e[n] = r, i && (e[i] = s), e.$index = t, e.$first = t === 0, e.$last = t === o - 1, e.$middle = !e.$first && !e
                                    .$last, e.$odd = !(e.$even = (t & 1) === 0)
                            },
                            a = function(e) {
                                return e.clone[0]
                            },
                            f = function(e) {
                                return e.clone[e.clone.length - 1]
                            };
                        return {
                            restrict: "A",
                            multiElement: !0,
                            transclude: "element",
                            priority: 1e3,
                            terminal: !0,
                            $$tlb: !0,
                            compile: function(l, c) {
                                var p = c.ngRepeat,
                                    d = t.createComment(" end ngRepeat: " + p + " "),
                                    v = p.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                                if (!v) throw o("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", p);
                                var m = v[1],
                                    g = v[2],
                                    y = v[3],
                                    b = v[4];
                                v = m.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);
                                if (!v) throw o("iidexp", "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", m);
                                var w = v[3] || v[1],
                                    E = v[2];
                                if (y && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(y) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(y))) throw o("badident", "alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.", y);
                                var S, N, C, k, L = {
                                    $id: $n
                                };
                                return b ? S = e(b) : (C = function(e, t) {
                                        return $n(t)
                                    }, k = function(e) {
                                        return e
                                    }),
                                    function(t, r, l, c, v) {
                                        S && (N = function(e, n, r) {
                                            return E && (L[E] = e), L[w] = n, L.$index = r, S(t, L)
                                        });
                                        var m = Xt();
                                        t.$watchCollection(g, function(l) {
                                            var c, g, b = r[0],
                                                S, L = Xt(),
                                                A, O, M, _, D, P, H, B, j;
                                            y && (t[y] = l);
                                            if (x(l)) P = l, D = N || C;
                                            else {
                                                D = N || k, P = [];
                                                for (var F in l) l.hasOwnProperty(F) && F.charAt(0) !== "$" && P.push(F)
                                            }
                                            A = P.length, B = new Array(A);
                                            for (c = 0; c < A; c++) {
                                                O = l === P ? c : P[c], M = l[O], _ = D(O, M, c);
                                                if (m[_]) H = m[_], delete m[_], L[_] = H, B[c] = H;
                                                else {
                                                    if (L[_]) throw T(B, function(e) {
                                                        e && e.scope && (m[e.id] = e)
                                                    }), o("dupes", "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}", p, _, M);
                                                    B[c] = {
                                                        id: _,
                                                        scope: n,
                                                        clone: n
                                                    }, L[_] = !0
                                                }
                                            }
                                            for (var I in m) {
                                                H = m[I], j = Wt(H.clone), i.leave(j);
                                                if (j[0].parentNode)
                                                    for (c = 0, g = j.length; c < g; c++) j[c][s] = !0;
                                                H.scope.$destroy()
                                            }
                                            for (c = 0; c < A; c++) {
                                                O = l === P ? c : P[c], M = l[O], H = B[c];
                                                if (H.scope) {
                                                    S = b;
                                                    do S = S.nextSibling; while (S && S[s]);
                                                    a(H) != S && i.move(Wt(H.clone), null, h(b)), b = f(H), u(H.scope, c, w, M, E, O, A)
                                                } else v(function(t, n) {
                                                    H.scope = n;
                                                    var r = d.cloneNode(!1);
                                                    t[t.length++] = r, i.enter(t, null, h(b)), b = r, H.clone = t, L[H.id] = H, u(H.scope, c, w, M, E, O, A)
                                                })
                                            }
                                            m = L
                                        })
                                    }
                            }
                        }
                    }
                ],
                vu = "ng-hide",
                mu = "ng-hide-animate",
                gu = ["$animate",
                    function(e) {
                        return {
                            restrict: "A",
                            multiElement: !0,
                            link: function(t, n, r) {
                                t.$watch(r.ngShow, function(r) {
                                    e[r ? "removeClass" : "addClass"](n, vu, {
                                        tempClasses: mu
                                    })
                                })
                            }
                        }
                    }
                ],
                yu = ["$animate",
                    function(e) {
                        return {
                            restrict: "A",
                            multiElement: !0,
                            link: function(t, n, r) {
                                t.$watch(r.ngHide, function(r) {
                                    e[r ? "addClass" : "removeClass"](n, vu, {
                                        tempClasses: mu
                                    })
                                })
                            }
                        }
                    }
                ],
                bu = Ks(function(e, t, n) {
                    e.$watch(n.ngStyle, function(n, r) {
                        r && n !== r && T(r, function(e, n) {
                            t.css(n, "")
                        }), n && t.css(n)
                    }, !0)
                }),
                wu = ["$animate",
                    function(e) {
                        return {
                            require: "ngSwitch",
                            controller: ["$scope",
                                function() {
                                    this.cases = {}
                                }
                            ],
                            link: function(n, r, i, s) {
                                var o = i.ngSwitch || i.on,
                                    u = [],
                                    a = [],
                                    f = [],
                                    l = [],
                                    c = function(e, t) {
                                        return function() {
                                            e.splice(t, 1)
                                        }
                                    };
                                n.$watch(o, function(r) {
                                    var i, o;
                                    for (i = 0, o = f.length; i < o; ++i) e.cancel(f[i]);
                                    f.length = 0;
                                    for (i = 0, o = l.length; i < o; ++i) {
                                        var h = Wt(a[i].clone);
                                        l[i].$destroy();
                                        var p = f[i] = e.leave(h);
                                        p.then(c(f, i))
                                    }
                                    a.length = 0, l.length = 0, (u = s.cases["!" + r] || s.cases["?"]) && T(u, function(n) {
                                        n.transclude(function(r, i) {
                                            l.push(i);
                                            var s = n.element;
                                            r[r.length++] = t.createComment(" end ngSwitchWhen: ");
                                            var o = {
                                                clone: r
                                            };
                                            a.push(o), e.enter(r, s.parent(), s)
                                        })
                                    })
                                })
                            }
                        }
                    }
                ],
                Eu = Ks({
                    transclude: "element",
                    priority: 1200,
                    require: "^ngSwitch",
                    multiElement: !0,
                    link: function(e, t, n, r, i) {
                        r.cases["!" + n.ngSwitchWhen] = r.cases["!" + n.ngSwitchWhen] || [], r.cases["!" + n.ngSwitchWhen].push({
                            transclude: i,
                            element: t
                        })
                    }
                }),
                Su = Ks({
                    transclude: "element",
                    priority: 1200,
                    require: "^ngSwitch",
                    multiElement: !0,
                    link: function(e, t, n, r, i) {
                        r.cases["?"] = r.cases["?"] || [], r.cases["?"].push({
                            transclude: i,
                            element: t
                        })
                    }
                }),
                xu = Ks({
                    restrict: "EAC",
                    link: function(e, t, n, i, s) {
                        if (!s) throw r("ngTransclude")("orphan", "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}", xt(t));
                        s(function(e) {
                            t.empty(), t.append(e)
                        })
                    }
                }),
                Tu = ["$templateCache",
                    function(e) {
                        return {
                            restrict: "E",
                            terminal: !0,
                            compile: function(t, n) {
                                if (n.type == "text/ng-template") {
                                    var r = n.id,
                                        i = t[0].text;
                                    e.put(r, i)
                                }
                            }
                        }
                    }
                ],
                Nu = {
                    $setViewValue: P,
                    $render: P
                },
                Cu = ["$element", "$scope", "$attrs",
                    function(e, r, i) {
                        var s = this,
                            o = new Jn;
                        s.ngModelCtrl = Nu, s.unknownOption = h(t.createElement("option")), s.renderUnknownOption = function(t) {
                            var n = "? " + $n(t) + " ?";
                            s.unknownOption.val(n), e.prepend(s.unknownOption), e.val(n)
                        }, r.$on("$destroy", function() {
                            s.renderUnknownOption = P
                        }), s.removeUnknownOption = function() {
                            s.unknownOption.parent() && s.unknownOption.remove()
                        }, s.readValue = function() {
                            return s.removeUnknownOption(), e.val()
                        }, s.writeValue = function(n) {
                            s.hasOption(n) ? (s.removeUnknownOption(), e.val(n), n === "" && s.emptyOption.prop("selected", !0)) : n == null && s.emptyOption ? (s.removeUnknownOption(), e.val("")) : s.renderUnknownOption(n)
                        }, s.addOption = function(e, t) {
                            Ut(e, '"option value"'), e === "" && (s.emptyOption = t);
                            var n = o.get(e) || 0;
                            o.put(e, n + 1)
                        }, s.removeOption = function(e) {
                            var t = o.get(e);
                            t && (t === 1 ? (o.remove(e), e === "" && (s.emptyOption = n)) : o.put(e, t - 1))
                        }, s.hasOption = function(e) {
                            return !!o.get(e)
                        }
                    }
                ],
                ku = function() {
                    return {
                        restrict: "E",
                        require: ["select", "?ngModel"],
                        controller: Cu,
                        link: function(e, t, n, r) {
                            var i = r[1];
                            if (!i) return;
                            var s = r[0];
                            s.ngModelCtrl = i, i.$render = function() {
                                s.writeValue(i.$viewValue)
                            }, t.on("change", function() {
                                e.$apply(function() {
                                    i.$setViewValue(s.readValue())
                                })
                            });
                            if (n.multiple) {
                                s.readValue = function() {
                                    var n = [];
                                    return T(t.find("option"), function(e) {
                                        e.selected && n.push(e.value)
                                    }), n
                                }, s.writeValue = function(n) {
                                    var r = new Jn(n);
                                    T(t.find("option"), function(e) {
                                        e.selected = F(r.get(e.value))
                                    })
                                };
                                var o, u = NaN;
                                e.$watch(function() {
                                    u === i.$viewValue && !ct(o, i.$viewValue) && (o = lt(i.$viewValue), i.$render()), u = i.$viewValue
                                }), i.$isEmpty = function(e) {
                                    return !e || e.length === 0
                                }
                            }
                        }
                    }
                },
                Lu = ["$interpolate",
                    function(e) {
                        function t(e) {
                            e[0].hasAttribute("selected") && (e[0].selected = !0)
                        }
                        return {
                            restrict: "E",
                            priority: 100,
                            compile: function(n, r) {
                                if (j(r.value)) {
                                    var i = e(n.text(), !0);
                                    i || r.$set("value", n.text())
                                }
                                return function(e, n, r) {
                                    var s = "$selectController",
                                        o = n.parent(),
                                        u = o.data(s) || o.parent().data(s);
                                    u && u.ngModelCtrl && (i ? e.$watch(i, function(i, s) {
                                        r.$set("value", i), s !== i && u.removeOption(s), u.addOption(i, n), u.ngModelCtrl.$render(), t(n)
                                    }) : (u.addOption(r.value, n), u.ngModelCtrl.$render(), t(n)), n.on("$destroy", function() {
                                        u.removeOption(r.value), u.ngModelCtrl.$render()
                                    }))
                                }
                            }
                        }
                    }
                ],
                Au = B({
                    restrict: "E",
                    terminal: !1
                }),
                Ou = function() {
                    return {
                        restrict: "A",
                        require: "?ngModel",
                        link: function(e, t, n, r) {
                            if (!r) return;
                            n.required = !0, r.$validators.required = function(e, t) {
                                return !n.required || !r.$isEmpty(t)
                            }, n.$observe("required", function() {
                                r.$validate()
                            })
                        }
                    }
                },
                Mu = function() {
                    return {
                        restrict: "A",
                        require: "?ngModel",
                        link: function(e, t, i, s) {
                            if (!s) return;
                            var o, u = i.ngPattern || i.pattern;
                            i.$observe("pattern", function(e) {
                                R(e) && e.length > 0 && (e = new RegExp("^" + e + "$"));
                                if (e && !e.test) throw r("ngPattern")("noregexp", "Expected {0} to be a RegExp but was {1}. Element: {2}", u, e, xt(t));
                                o = e || n, s.$validate()
                            }), s.$validators.pattern = function(e) {
                                return s.$isEmpty(e) || j(o) || o.test(e)
                            }
                        }
                    }
                },
                _u = function() {
                    return {
                        restrict: "A",
                        require: "?ngModel",
                        link: function(e, t, n, r) {
                            if (!r) return;
                            var i = -1;
                            n.$observe("maxlength", function(e) {
                                var t = _(e);
                                i = isNaN(t) ? -1 : t, r.$validate()
                            }), r.$validators.maxlength = function(e, t) {
                                return i < 0 || r.$isEmpty(t) || t.length <= i
                            }
                        }
                    }
                },
                Du = function() {
                    return {
                        restrict: "A",
                        require: "?ngModel",
                        link: function(e, t, n, r) {
                            if (!r) return;
                            var i = 0;
                            n.$observe("minlength", function(e) {
                                i = _(e) || 0, r.$validate()
                            }), r.$validators.minlength = function(e, t) {
                                return r.$isEmpty(t) || t.length >= i
                            }
                        }
                    }
                };
            if (e.angular.bootstrap) {
                console.log("WARNING: Tried to load angular more than once.");
                return
            }
            It(), nn(w), h(t).ready(function() {
                Mt(t, _t)
            })
        }(window, document), !window.angular.$$csp() && window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>'),
        function(e, t, n) {
            "use strict";

            function s() {
                function e(e, n) {
                    return t.extend(Object.create(e), n)
                }

                function r(e, t) {
                    var n = t.caseInsensitiveMatch,
                        r = {
                            originalPath: e,
                            regexp: e
                        },
                        i = r.keys = [];
                    return e = e.replace(/([().])/g, "\\$1").replace(/(\/)?:(\w+)([\?\*])?/g, function(e, t, n, r) {
                        var s = r === "?" ? r : null,
                            o = r === "*" ? r : null;
                        return i.push({
                            name: n,
                            optional: !!s
                        }), t = t || "", "" + (s ? "" : t) + "(?:" + (s ? t : "") + (o && "(.+?)" || "([^/]+)") + (s || "") + ")" + (s || "")
                    }).replace(/([\/$\*])/g, "\\$1"), r.regexp = new RegExp("^" + e + "$", n ? "i" : ""), r
                }
                var n = {};
                this.when = function(e, i) {
                    var s = t.copy(i);
                    t.isUndefined(s.reloadOnSearch) && (s.reloadOnSearch = !0), t.isUndefined(s.caseInsensitiveMatch) && (s.caseInsensitiveMatch = this.caseInsensitiveMatch), n[e] = t.extend(s, e && r(e, s));
                    if (e) {
                        var o = e[e.length - 1] == "/" ? e.substr(0, e.length - 1) : e + "/";
                        n[o] = t.extend({
                            redirectTo: e
                        }, r(o, s))
                    }
                    return this
                }, this.caseInsensitiveMatch = !1, this.otherwise = function(e) {
                    return typeof e == "string" && (e = {
                        redirectTo: e
                    }), this.when(null, e), this
                }, this.$get = ["$rootScope", "$location", "$routeParams", "$q", "$injector", "$templateRequest", "$sce",
                    function(r, s, o, u, a, f, l) {
                        function v(e, t) {
                            var n = t.keys,
                                r = {};
                            if (!t.regexp) return null;
                            var i = t.regexp.exec(e);
                            if (!i) return null;
                            for (var s = 1, o = i.length; s < o; ++s) {
                                var u = n[s - 1],
                                    a = i[s];
                                u && a && (r[u.name] = a)
                            }
                            return r
                        }

                        function m(e) {
                            var n = d.current;
                            h = y(), p = h && n && h.$$route === n.$$route && t.equals(h.pathParams, n.pathParams) && !h.reloadOnSearch && !c, !p && (n || h) && r.$broadcast("$routeChangeStart", h, n).defaultPrevented && e && e.preventDefault()
                        }

                        function g() {
                            var e = d.current,
                                n = h;
                            if (p) e.params = n.params, t.copy(e.params, o), r.$broadcast("$routeUpdate", e);
                            else if (n || e) c = !1, d.current = n, n && n.redirectTo && (t.isString(n.redirectTo) ? s.path(b(n.redirectTo, n.params)).search(n.params).replace() : s.url(n.redirectTo(n.pathParams, s.path(), s.search())).replace()), u.when(n).then(function() {
                                if (n) {
                                    var e = t.extend({}, n.resolve),
                                        r, i;
                                    return t.forEach(e, function(n, r) {
                                        e[r] = t.isString(n) ? a.get(n) : a.invoke(n, null, null, r)
                                    }), t.isDefined(r = n.template) ? t.isFunction(r) && (r = r(n.params)) : t.isDefined(i = n.templateUrl) && (t.isFunction(i) && (i = i(n.params)), i = l.getTrustedResourceUrl(i), t.isDefined(i) && (n.loadedTemplateUrl = i, r = f(i))), t.isDefined(r) && (e.$template = r), u.all(e)
                                }
                            }).then(function(i) {
                                n == d.current && (n && (n.locals = i, t.copy(n.params, o)), r.$broadcast("$routeChangeSuccess", n, e))
                            }, function(t) {
                                n == d.current && r.$broadcast("$routeChangeError", n, e, t)
                            })
                        }

                        function y() {
                            var r, i;
                            return t.forEach(n, function(n, o) {
                                !i && (r = v(s.path(), n)) && (i = e(n, {
                                    params: t.extend({}, s.search(), r),
                                    pathParams: r
                                }), i.$$route = n)
                            }), i || n[null] && e(n[null], {
                                params: {},
                                pathParams: {}
                            })
                        }

                        function b(e, n) {
                            var r = [];
                            return t.forEach((e || "").split(":"), function(e, t) {
                                if (t === 0) r.push(e);
                                else {
                                    var i = e.match(/(\w+)(?:[?*])?(.*)/),
                                        s = i[1];
                                    r.push(n[s]), r.push(i[2] || ""), delete n[s]
                                }
                            }), r.join("")
                        }
                        var c = !1,
                            h, p, d = {
                                routes: n,
                                reload: function() {
                                    c = !0, r.$evalAsync(function() {
                                        m(), g()
                                    })
                                },
                                updateParams: function(e) {
                                    if (!this.current || !this.current.$$route) throw i("norout", "Tried updating route when with no current route");
                                    e = t.extend({}, this.current.params, e), s.path(b(this.current.$$route.originalPath, e)), s.search(e)
                                }
                            };
                        return r.$on("$locationChangeStart", m), r.$on("$locationChangeSuccess", g), d
                    }
                ]
            }

            function o() {
                this.$get = function() {
                    return {}
                }
            }

            function u(e, n, r) {
                return {
                    restrict: "ECA",
                    terminal: !0,
                    priority: 400,
                    transclude: "element",
                    link: function(i, s, o, u, a) {
                        function d() {
                            c && (r.cancel(c), c = null), f && (f.$destroy(), f = null), l && (c = r.leave(l), c.then(function() {
                                c = null
                            }), l = null)
                        }

                        function v() {
                            var o = e.current && e.current.locals,
                                u = o && o.$template;
                            if (t.isDefined(u)) {
                                var c = i.$new(),
                                    v = e.current,
                                    m = a(c, function(e) {
                                        r.enter(e, null, l || s).then(function() {
                                            t.isDefined(h) && (!h || i.$eval(h)) && n()
                                        }), d()
                                    });
                                l = m, f = v.scope = c, f.$emit("$viewContentLoaded"), f.$eval(p)
                            } else d()
                        }
                        var f, l, c, h = o.autoscroll,
                            p = o.onload || "";
                        i.$on("$routeChangeSuccess", v), v()
                    }
                }
            }

            function a(e, t, n) {
                return {
                    restrict: "ECA",
                    priority: -400,
                    link: function(r, i) {
                        var s = n.current,
                            o = s.locals;
                        i.html(o.$template);
                        var u = e(i.contents());
                        if (s.controller) {
                            o.$scope = r;
                            var a = t(s.controller, o);
                            s.controllerAs &&
                                (r[s.controllerAs] = a), i.data("$ngControllerController", a), i.children().data("$ngControllerController", a)
                        }
                        u(r)
                    }
                }
            }
            var r = t.module("ngRoute", ["ng"]).provider("$route", s),
                i = t.$$minErr("ngRoute");
            r.provider("$routeParams", o), r.directive("ngView", u), r.directive("ngView", a), u.$inject = ["$route", "$anchorScroll", "$animate"], a.$inject = ["$compile", "$controller", "$route"]
        }(window, window.angular),
        function(e, t, n) {
            "use strict";

            function s(e) {
                return e != null && e !== "" && e !== "hasOwnProperty" && i.test("." + e)
            }

            function o(e, t) {
                if (!s(t)) throw r("badmember", 'Dotted member path "@{0}" is invalid.', t);
                var i = t.split(".");
                for (var o = 0, u = i.length; o < u && e !== n; o++) {
                    var a = i[o];
                    e = e !== null ? e[a] : n
                }
                return e
            }

            function u(e, n) {
                n = n || {}, t.forEach(n, function(e, t) {
                    delete n[t]
                });
                for (var r in e) e.hasOwnProperty(r) && (r.charAt(0) !== "$" || r.charAt(1) !== "$") && (n[r] = e[r]);
                return n
            }
            var r = t.$$minErr("$resource"),
                i = /^(\.[a-zA-Z_$@][0-9a-zA-Z_$@]*)+$/;
            t.module("ngResource", ["ng"]).provider("$resource", function() {
                var e = this;
                this.defaults = {
                    stripTrailingSlashes: !0,
                    actions: {
                        get: {
                            method: "GET"
                        },
                        save: {
                            method: "POST"
                        },
                        query: {
                            method: "GET",
                            isArray: !0
                        },
                        remove: {
                            method: "DELETE"
                        },
                        "delete": {
                            method: "DELETE"
                        }
                    }
                }, this.$get = ["$http", "$q",
                    function(i, s) {
                        function p(e) {
                            return d(e, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
                        }

                        function d(e, t) {
                            return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, t ? "%20" : "+")
                        }

                        function v(t, n) {
                            this.template = t, this.defaults = l({}, e.defaults, n), this.urlParams = {}
                        }

                        function m(p, d, g, y) {
                            function w(e, t) {
                                var n = {};
                                return t = l({}, d, t), f(t, function(t, r) {
                                    h(t) && (t = t()), n[r] = t && t.charAt && t.charAt(0) == "@" ? o(e, t.substr(1)) : t
                                }), n
                            }

                            function E(e) {
                                return e.resource
                            }

                            function S(e) {
                                u(e || {}, this)
                            }
                            var b = new v(p, y);
                            return g = l({}, e.defaults.actions, g), S.prototype.toJSON = function() {
                                var e = l({}, this);
                                return delete e.$promise, delete e.$resolved, e
                            }, f(g, function(e, o) {
                                var p = /^(POST|PUT|PATCH)$/i.test(e.method);
                                S[o] = function(d, v, m, g) {
                                    var y = {},
                                        x, T, N;
                                    switch (arguments.length) {
                                        case 4:
                                            N = g, T = m;
                                        case 3:
                                        case 2:
                                            if (!h(v)) {
                                                y = d, x = v, T = m;
                                                break
                                            }
                                            if (h(d)) {
                                                T = d, N = v;
                                                break
                                            }
                                            T = v, N = m;
                                        case 1:
                                            h(d) ? T = d : p ? x = d : y = d;
                                            break;
                                        case 0:
                                            break;
                                        default:
                                            throw r("badargs", "Expected up to 4 arguments [params, data, success, error], got {0} arguments", arguments.length)
                                    }
                                    var C = this instanceof S,
                                        k = C ? x : e.isArray ? [] : new S(x),
                                        L = {},
                                        A = e.interceptor && e.interceptor.response || E,
                                        O = e.interceptor && e.interceptor.responseError || n;
                                    f(e, function(e, t) {
                                        t != "params" && t != "isArray" && t != "interceptor" && (L[t] = c(e))
                                    }), p && (L.data = x), b.setUrlParams(L, l({}, w(x, e.params || {}), y), e.url);
                                    var M = i(L).then(function(n) {
                                        var i = n.data,
                                            s = k.$promise;
                                        if (i) {
                                            if (t.isArray(i) !== !!e.isArray) throw r("badcfg", "Error in resource configuration for action `{0}`. Expected response to contain an {1} but got an {2} (Request: {3} {4})", o, e.isArray ? "array" : "object", t.isArray(i) ? "array" : "object", L.method, L.url);
                                            e.isArray ? (k.length = 0, f(i, function(e) {
                                                typeof e == "object" ? k.push(new S(e)) : k.push(e)
                                            })) : (u(i, k), k.$promise = s)
                                        }
                                        return k.$resolved = !0, n.resource = k, n
                                    }, function(e) {
                                        return k.$resolved = !0, (N || a)(e), s.reject(e)
                                    });
                                    return M = M.then(function(e) {
                                        var t = A(e);
                                        return (T || a)(t, e.headers), t
                                    }, O), C ? M : (k.$promise = M, k.$resolved = !1, k)
                                }, S.prototype["$" + o] = function(e, t, n) {
                                    h(e) && (n = t, t = e, e = {});
                                    var r = S[o].call(this, e, this, t, n);
                                    return r.$promise || r
                                }
                            }), S.bind = function(e) {
                                return m(p, l({}, d, e), g)
                            }, S
                        }
                        var a = t.noop,
                            f = t.forEach,
                            l = t.extend,
                            c = t.copy,
                            h = t.isFunction;
                        return v.prototype = {
                            setUrlParams: function(e, n, i) {
                                var s = this,
                                    o = i || s.template,
                                    u, a, l = s.urlParams = {};
                                f(o.split(/\W/), function(e) {
                                    if (e === "hasOwnProperty") throw r("badname", "hasOwnProperty is not a valid parameter name.");
                                    !(new RegExp("^\\d+$")).test(e) && e && (new RegExp("(^|[^\\\\]):" + e + "(\\W|$)")).test(o) && (l[e] = !0)
                                }), o = o.replace(/\\:/g, ":"), n = n || {}, f(s.urlParams, function(e, r) {
                                    u = n.hasOwnProperty(r) ? n[r] : s.defaults[r], t.isDefined(u) && u !== null ? (a = p(u), o = o.replace(new RegExp(":" + r + "(\\W|$)", "g"), function(e, t) {
                                        return a + t
                                    })) : o = o.replace(new RegExp("(/?):" + r + "(\\W|$)", "g"), function(e, t, n) {
                                        return n.charAt(0) == "/" ? n : t + n
                                    })
                                }), s.defaults.stripTrailingSlashes && (o = o.replace(/\/+$/, "") || "/"), o = o.replace(/\/\.(?=\w+($|\?))/, "."), e.url = o.replace(/\/\\\./, "/."), f(n, function(t, n) {
                                    s.urlParams[n] || (e.params = e.params || {}, e.params[n] = t)
                                })
                            }
                        }, m
                    }
                ]
            })
        }(window, window.angular),
        function(e, t, n) {
            "use strict";

            function b(e, t, n) {
                if (!e) throw ngMinErr("areq", "Argument '{0}' is {1}", t || "?", n || "required");
                return e
            }

            function w(e, t) {
                return !e && !t ? "" : e ? t ? (u(e) && (e = e.join(" ")), u(t) && (t = t.join(" ")), e + " " + t) : e : t
            }

            function E(e) {
                var t = {};
                return e && (e.to || e.from) && (t.to = e.to, t.from = e.from), t
            }

            function S(e, t, n) {
                var r = "";
                return e = u(e) ? e : e && a(e) && e.length ? e.split(/\s+/) : [], o(e, function(e, i) {
                    e && e.length > 0 && (r += i > 0 ? " " : "", r += n ? t + e : e + t)
                }), r
            }

            function x(e, t) {
                var n = e.indexOf(t);
                t >= 0 && e.splice(n, 1)
            }

            function T(e) {
                if (e instanceof s) switch (e.length) {
                    case 0:
                        return [];
                    case 1:
                        if (e[0].nodeType === d) return e;
                        break;
                    default:
                        return s(N(e))
                }
                if (e.nodeType === d) return s(e)
            }

            function N(e) {
                if (!e[0]) return e;
                for (var t = 0; t < e.length; t++) {
                    var n = e[t];
                    if (n.nodeType == d) return n
                }
            }

            function C(e, t, n) {
                o(t, function(t) {
                    e.addClass(t, n)
                })
            }

            function k(e, t, n) {
                o(t, function(t) {
                    e.removeClass(t, n)
                })
            }

            function L(e) {
                return function(t, n) {
                    n.addClass && (C(e, t, n.addClass), n.addClass = null), n.removeClass && (k(e, t, n.removeClass), n.removeClass = null)
                }
            }

            function A(e) {
                e = e || {};
                if (!e.$$prepared) {
                    var t = e.domOperation || r;
                    e.domOperation = function() {
                        e.$$domOperationFired = !0, t(), t = r
                    }, e.$$prepared = !0
                }
                return e
            }

            function O(e, t) {
                M(e, t), _(e, t)
            }

            function M(e, t) {
                t.from && (e.css(t.from), t.from = null)
            }

            function _(e, t) {
                t.to && (e.css(t.to), t.to = null)
            }

            function D(e, t, n) {
                var r = (t.addClass || "") + " " + (n.addClass || ""),
                    s = (t.removeClass || "") + " " + (n.removeClass || ""),
                    o = P(e.attr("class"), r, s);
                return i(t, n), o.addClass ? t.addClass = o.addClass : t.addClass = null, o.removeClass ? t.removeClass = o.removeClass : t.removeClass = null, t
            }

            function P(e, t, n) {
                function f(e) {
                    a(e) && (e = e.split(" "));
                    var t = {};
                    return o(e, function(e) {
                        e.length && (t[e] = !0)
                    }), t
                }
                var r = 1,
                    i = -1,
                    s = {};
                e = f(e), t = f(t), o(t, function(e, t) {
                    s[t] = r
                }), n = f(n), o(n, function(e, t) {
                    s[t] = s[t] === r ? null : i
                });
                var u = {
                    addClass: "",
                    removeClass: ""
                };
                return o(s, function(t, n) {
                    var s, o;
                    t === r ? (s = "addClass", o = !e[n]) : t === i && (s = "removeClass", o = e[n]), o && (u[s].length && (u[s] += " "), u[s] += n)
                }), u
            }

            function H(e) {
                return e instanceof t.element ? e[0] : e
            }

            function ot(e, t, n) {
                var r = Object.create(null),
                    i = e.getComputedStyle(t) || {};
                return o(n, function(e, t) {
                    var n = i[e];
                    if (n) {
                        var s = n.charAt(0);
                        if (s === "-" || s === "+" || s >= 0) n = ut(n);
                        n === 0 && (n = null), r[t] = n
                    }
                }), r
            }

            function ut(e) {
                var t = 0,
                    n = e.split(/\s*,\s*/);
                return o(n, function(e) {
                    e.charAt(e.length - 1) == "s" && (e = e.substring(0, e.length - 1)), e = parseFloat(e) || 0, t = t ? Math.max(e, t) : e
                }), t
            }

            function at(e) {
                return e === 0 || e != null
            }

            function ft(e, t) {
                var n = I,
                    r = e + "s";
                return t ? n += z : r += " linear all", [n, r]
            }

            function lt(e) {
                return [tt, e + "s"]
            }

            function ct(e, t) {
                var n = t ? et : nt;
                return [n, e + "s"]
            }

            function ht(e, t) {
                var n = t ? "-" + t + "s" : "";
                return dt(e, [nt, n]), [nt, n]
            }

            function pt(e, t) {
                var n = t ? "paused" : "",
                    r = R + J;
                return dt(e, [r, n]), [r, n]
            }

            function dt(e, t) {
                var n = t[0],
                    r = t[1];
                e.style[n] = r
            }

            function vt() {
                var e = Object.create(null);
                return {
                    flush: function() {
                        e = Object.create(null)
                    },
                    count: function(t) {
                        var n = e[t];
                        return n ? n.total : 0
                    },
                    get: function(t) {
                        var n = e[t];
                        return n && n.value
                    },
                    put: function(t, n) {
                        e[t] ? e[t].total++ : e[t] = {
                            total: 1,
                            value: n
                        }
                    }
                }
            }
            var r = t.noop,
                i = t.extend,
                s = t.element,
                o = t.forEach,
                u = t.isArray,
                a = t.isString,
                f = t.isObject,
                l = t.isUndefined,
                c = t.isDefined,
                h = t.isFunction,
                p = t.isElement,
                d = 1,
                v = 8,
                m = "ng-animate",
                g = "$$ngAnimateChildren",
                y = function(e) {
                    return e && e.then ? !0 : !1
                },
                B = ["$$rAF",
                    function(e) {
                        function r(e) {
                            t.push([].concat(e)), i()
                        }

                        function i() {
                            if (!t.length) return;
                            var r = [];
                            for (var o = 0; o < t.length; o++) {
                                var u = t[o];
                                s(u), u.length && r.push(u)
                            }
                            t = r, n || e(function() {
                                n || i()
                            })
                        }

                        function s(e) {
                            var t = e.shift();
                            t()
                        }
                        var t = [],
                            n;
                        return r.waitUntilQuiet = function(t) {
                            n && n(), n = e(function() {
                                n = null, t(), i()
                            })
                        }, r
                    }
                ],
                j = [

                    function() {
                        return function(e, n, r) {
                            var i = r.ngAnimateChildren;
                            t.isString(i) && i.length === 0 ? n.data(g, !0) : r.$observe("ngAnimateChildren", function(e) {
                                e = e === "on" || e === "true", n.data(g, e)
                            })
                        }
                    }
                ],
                F = "",
                I, q, R, U;
            e.ontransitionend === n && e.onwebkittransitionend !== n ? (F = "-webkit-", I = "WebkitTransition", q = "webkitTransitionEnd transitionend") : (I = "transition", q = "transitionend"), e.onanimationend === n && e.onwebkitanimationend !== n ? (F = "-webkit-", R = "WebkitAnimation", U = "webkitAnimationEnd animationend") : (R = "animation", U = "animationend");
            var z = "Duration",
                W = "Property",
                X = "Delay",
                V = "TimingFunction",
                $ = "IterationCount",
                J = "PlayState",
                K = 3,
                Q = 1.5,
                G = 1e3,
                Y = 10,
                Z = 9999,
                et = R + X,
                tt = R + z,
                nt = I + X,
                rt = I + z,
                it = {
                    transitionDuration: rt,
                    transitionDelay: nt,
                    transitionProperty: I + W,
                    animationDuration: tt,
                    animationDelay: et,
                    animationIterationCount: R + $
                },
                st = {
                    transitionDuration: rt,
                    transitionDelay: nt,
                    animationDuration: tt,
                    animationDelay: et
                },
                mt = ["$animateProvider",
                    function(e) {
                        var t = vt(),
                            n = vt();
                        this.$get = ["$window", "$$jqLite", "$$AnimateRunner", "$timeout", "$document", "$sniffer", "$$rAFScheduler",
                            function(e, r, i, s, a, f, l) {
                                function p(e, t) {
                                    var n = "$$ngAnimateParentKey",
                                        r = e.parentNode,
                                        i = r[n] || (r[n] = ++h);
                                    return i + "-" + e.getAttribute("class") + "-" + t
                                }

                                function d(n, r, i, s) {
                                    var o = t.get(i);
                                    return o || (o = ot(e, n, s), o.animationIterationCount === "infinite" && (o.animationIterationCount = 1)), t.put(i, o), o
                                }

                                function v(i, s, o, u) {
                                    var a;
                                    if (t.count(o) > 0) {
                                        a = n.get(o);
                                        if (!a) {
                                            var f = S(s, "-stagger");
                                            r.addClass(i, f), a = ot(e, i, u), a.animationDuration = Math.max(a.animationDuration, 0), a.transitionDuration = Math.max(a.transitionDuration, 0), r.removeClass(i, f), n.put(o, a)
                                        }
                                    }
                                    return a || {}
                                }

                                function y(e) {
                                    g.push(e), l.waitUntilQuiet(function() {
                                        t.flush(), n.flush();
                                        var e = m.offsetWidth + 1;
                                        for (var r = 0; r < g.length; r++) g[r](e);
                                        g.length = 0
                                    })
                                }

                                function b(e, t, n) {
                                    var r = d(e, t, n, it),
                                        i = r.animationDelay,
                                        s = r.transitionDelay;
                                    return r.maxDelay = i && s ? Math.max(i, s) : i || s, r.maxDuration = Math.max(r.animationDuration * r.animationIterationCount, r.transitionDuration), r
                                }

                                function w(e, n) {
                                    function bt() {
                                        Et()
                                    }

                                    function wt() {
                                        Et(!0)
                                    }

                                    function Et(t) {
                                        if (m || w && g) return;
                                        m = !0, g = !1, r.removeClass(e, z), r.removeClass(e, $), pt(a, !1), ht(a, !1), o(l, function(e) {
                                            a.style[e[0]] = ""
                                        }), c(e, n), O(e, n), n.onDone && n.onDone(), T && T.complete(!t)
                                    }

                                    function St(e) {
                                        yt.blockTransition && ht(a, e), yt.blockKeyframeAnimation && pt(a, !!e)
                                    }

                                    function xt() {
                                        return T = new i({
                                            end: bt,
                                            cancel: wt
                                        }), Et(), {
                                            $$willAnimate: !1,
                                            start: function() {
                                                return T
                                            },
                                            end: bt
                                        }
                                    }

                                    function Tt() {
                                        function h() {
                                            if (m) return;
                                            St(!1), o(l, function(e) {
                                                var t = e[0],
                                                    n = e[1];
                                                a.style[t] = n
                                            }), c(e, n), r.addClass(e, $);
                                            if (yt.recalculateTimingStyles) {
                                                X = a.className + " " + z, Y = p(a, X), mt = b(a, X, Y), gt = mt.maxDelay, C = Math.max(gt, 0), L = mt.maxDuration;
                                                if (L === 0) {
                                                    Et();
                                                    return
                                                }
                                                yt.hasTransitions = mt.transitionDuration > 0, yt.hasAnimations = mt.animationDuration > 0
                                            }
                                            if (yt.applyTransitionDelay || yt.applyAnimationDelay) {
                                                gt = typeof n.delay != "boolean" && at(n.delay) ? parseFloat(n.delay) : gt, C = Math.max(gt, 0);
                                                var u;
                                                yt.applyTransitionDelay && (mt.transitionDelay = gt, u = ct(gt), l.push(u), a.style[u[0]] = u[1]), yt.applyAnimationDelay && (mt.animationDelay = gt, u = ct(gt, !0), l.push(u), a.style[u[0]] = u[1])
                                            }
                                            k = C * G, D = L * G;
                                            if (n.easing) {
                                                var f, h = n.easing;
                                                yt.hasTransitions && (f = I + V, l.push([f, h]), a.style[f] = h), yt.hasAnimations && (f = R + V, l.push([f, h]), a.style[f] = h)
                                            }
                                            mt.transitionDuration && i.push(q), mt.animationDuration && i.push(U), t = Date.now(), e.on(i.join(" "), v), s(d, k + Q * D), _(e, n)
                                        }

                                        function d() {
                                            Et()
                                        }

                                        function v(e) {
                                            e.stopPropagation();
                                            var n = e.originalEvent || e,
                                                r = n.$manualTimeStamp || n.timeStamp || Date.now(),
                                                i = parseFloat(n.elapsedTime.toFixed(K));
                                            Math.max(r - t, 0) >= k && i >= L && (w = !0, Et())
                                        }
                                        if (m) return;
                                        var t, i = [],
                                            u = function(e) {
                                                if (!w) {
                                                    g = !e;
                                                    if (mt.animationDuration) {
                                                        var t = pt(a, g);
                                                        g ? l.push(t) : x(l, t)
                                                    }
                                                } else g && e && (g = !1, Et())
                                            },
                                            f = ut > 0 && (mt.transitionDuration && et.transitionDuration === 0 || mt.animationDuration && et.animationDuration === 0) && Math.max(et.animationDelay, et.transitionDelay);
                                        f ? s(h, Math.floor(f * ut * G), !1) : h(), N.resume = function() {
                                            u(!0)
                                        }, N.pause = function() {
                                            u(!1)
                                        }
                                    }
                                    var a = H(e);
                                    n = A(n);
                                    var l = [],
                                        h = e.attr("class"),
                                        d = E(n),
                                        m, g, w, T, N, C, k, L, D;
                                    if (n.duration === 0 || !f.animations && !f.transitions) return xt();
                                    var P = n.event && u(n.event) ? n.event.join(" ") : n.event,
                                        B = P && n.structural,
                                        j = "",
                                        F = "";
                                    B ? j = S(P, "ng-", !0) : P && (j = P), n.addClass && (F += S(n.addClass, "-add")), n.removeClass && (F.length && (F += " "), F += S(n.removeClass, "-remove")), n.applyClassesEarly && F.length && (c(e, n), F = "");
                                    var z = [j, F]
                                        .join(" ").trim(),
                                        X = h + " " + z,
                                        $ = S(z, "-active"),
                                        J = d.to && Object.keys(d.to).length > 0;
                                    if (!J && !z) return xt();
                                    var Y, et;
                                    if (n.stagger > 0) {
                                        var tt = parseFloat(n.stagger);
                                        et = {
                                            transitionDelay: tt,
                                            animationDelay: tt,
                                            transitionDuration: 0,
                                            animationDuration: 0
                                        }
                                    } else Y = p(a, X), et = v(a, z, Y, st);
                                    r.addClass(e, z);
                                    var nt;
                                    if (n.transitionStyle) {
                                        var rt = [I, n.transitionStyle];
                                        dt(a, rt), l.push(rt)
                                    }
                                    if (n.duration >= 0) {
                                        nt = a.style[I].length > 0;
                                        var it = ft(n.duration, nt);
                                        dt(a, it), l.push(it)
                                    }
                                    if (n.keyframeStyle) {
                                        var ot = [R, n.keyframeStyle];
                                        dt(a, ot), l.push(ot)
                                    }
                                    var ut = et ? n.staggerIndex >= 0 ? n.staggerIndex : t.count(Y) : 0,
                                        vt = ut === 0;
                                    vt && ht(a, Z);
                                    var mt = b(a, X, Y),
                                        gt = mt.maxDelay;
                                    C = Math.max(gt, 0), L = mt.maxDuration;
                                    var yt = {};
                                    yt.hasTransitions = mt.transitionDuration > 0, yt.hasAnimations = mt.animationDuration > 0, yt.hasTransitionAll = yt.hasTransitions && mt.transitionProperty == "all", yt.applyTransitionDuration = J && (yt.hasTransitions && !yt.hasTransitionAll || yt.hasAnimations && !yt.hasTransitions), yt.applyAnimationDuration = n.duration && yt.hasAnimations, yt.applyTransitionDelay = at(n.delay) && (yt.applyTransitionDuration || yt.hasTransitions), yt.applyAnimationDelay = at(n.delay) && yt.hasAnimations, yt.recalculateTimingStyles = F.length > 0;
                                    if (yt.applyTransitionDuration || yt.applyAnimationDuration) L = n.duration ? parseFloat(n.duration) : L, yt.applyTransitionDuration && (yt.hasTransitions = !0, mt.transitionDuration = L, nt = a.style[I + W].length > 0, l.push(ft(L, nt))), yt.applyAnimationDuration && (yt.hasAnimations = !0, mt.animationDuration = L, l.push(lt(L)));
                                    return L === 0 && !yt.recalculateTimingStyles ? xt() : (n.duration == null && mt.transitionDuration > 0 && (yt.recalculateTimingStyles = yt.recalculateTimingStyles || vt), k = C * G, D = L * G, n.skipBlocking || (yt.blockTransition = mt.transitionDuration > 0, yt.blockKeyframeAnimation = mt.animationDuration > 0 && et.animationDelay > 0 && et.animationDuration === 0), M(e, n), yt.blockTransition || ht(a, !1), St(L), {
                                        $$willAnimate: !0,
                                        end: bt,
                                        start: function() {
                                            if (m) return;
                                            return N = {
                                                end: bt,
                                                cancel: wt,
                                                resume: null,
                                                pause: null
                                            }, T = new i(N), y(Tt), T
                                        }
                                    })
                                }
                                var c = L(r),
                                    h = 0,
                                    m = H(a).body,
                                    g = [];
                                return w
                            }
                        ]
                    }
                ],
                gt = ["$$animationProvider",
                    function(e) {
                        e.drivers.push("$$animateCssDriver");
                        var t = "ng-animate-shim",
                            n = "ng-anchor",
                            i = "ng-anchor-out",
                            u = "ng-anchor-in";
                        this.$get = ["$animateCss", "$rootScope", "$$AnimateRunner", "$rootElement", "$document", "$sniffer",
                            function(e, f, l, c, h, p) {
                                function g(e) {
                                    return e.replace(/\bng-\S+\b/g, "")
                                }

                                function y(e, t) {
                                    return a(e) && (e = e.split(" ")), a(t) && (t = t.split(" ")), e.filter(function(e) {
                                        return t.indexOf(e) === -1
                                    }).join(" ")
                                }

                                function b(r, a, f) {
                                    function w(e) {
                                        var t = {},
                                            n = H(e).getBoundingClientRect();
                                        return o(["width", "height", "top", "left"], function(e) {
                                            var r = n[e];
                                            switch (e) {
                                                case "top":
                                                    r += d.scrollTop;
                                                    break;
                                                case "left":
                                                    r += d.scrollLeft
                                            }
                                            t[e] = Math.floor(r) + "px"
                                        }), t
                                    }

                                    function E() {
                                        var t = e(c, {
                                            addClass: i,
                                            delay: !0,
                                            from: w(a)
                                        });
                                        return t.$$willAnimate ? t : null
                                    }

                                    function S(e) {
                                        return e.attr("class") || ""
                                    }

                                    function x() {
                                        var t = g(S(f)),
                                            n = y(t, h),
                                            r = y(h, t),
                                            s = e(c, {
                                                to: w(f),
                                                addClass: u + " " + n,
                                                removeClass: i + " " + r,
                                                delay: !0
                                            });
                                        return s.$$willAnimate ? s : null
                                    }

                                    function T() {
                                        c.remove(), a.removeClass(t), f.removeClass(t)
                                    }
                                    var c = s(H(a).cloneNode(!0)),
                                        h = g(S(c));
                                    a.addClass(t), f.addClass(t), c.addClass(n), m.append(c);
                                    var p, v = E();
                                    if (!v) {
                                        p = x();
                                        if (!p) return T()
                                    }
                                    var b = v || p;
                                    return {
                                        start: function() {
                                            function n() {
                                                t && t.end()
                                            }
                                            var e, t = b.start();
                                            return t.done(function() {
                                                t = null;
                                                if (!p) {
                                                    p = x();
                                                    if (p) return t = p.start(), t.done(function() {
                                                        t = null, T(), e.complete()
                                                    }), t
                                                }
                                                T(), e.complete()
                                            }), e = new l({
                                                end: n,
                                                cancel: n
                                            }), e
                                        }
                                    }
                                }

                                function w(e, t, n, r) {
                                    var i = E(e),
                                        s = E(t),
                                        u = [];
                                    o(r, function(e) {
                                        var t = e.out,
                                            r = e["in"],
                                            i = b(n, t, r);
                                        i && u.push(i)
                                    });
                                    if (!i && !s && u.length === 0) return;
                                    return {
                                        start: function() {
                                            function n() {
                                                o(e, function(e) {
                                                    e.end()
                                                })
                                            }
                                            var e = [];
                                            i && e.push(i.start()), s && e.push(s.start()), o(u, function(t) {
                                                e.push(t.start())
                                            });
                                            var t = new l({
                                                end: n,
                                                cancel: n
                                            });
                                            return l.all(e, function(e) {
                                                t.complete(e)
                                            }), t
                                        }
                                    }
                                }

                                function E(t) {
                                    var n = t.element,
                                        r = t.options || {};
                                    t.structural ? (r.structural = r.applyClassesEarly = !0, r.event = t.event, r.event === "leave" && (r.onDone = r.domOperation)) : r.event = null;
                                    var i = e(n, r);
                                    return i.$$willAnimate ? i : null
                                }
                                if (!p.animations && !p.transitions) return r;
                                var d = H(h).body,
                                    v = H(c),
                                    m = s(d.parentNode === v ? d : v);
                                return function(t) {
                                    return t.from && t.to ? w(t.from, t.to, t.classes, t.anchors) : E(t)
                                }
                            }
                        ]
                    }
                ],
                yt = ["$animateProvider",
                    function(e) {
                        this.$get = ["$injector", "$$AnimateRunner", "$$rAFMutex", "$$jqLite",
                            function(t, n, i, s) {
                                function l(n) {
                                    n = u(n) ? n : n.split(" ");
                                    var r = [],
                                        i = {};
                                    for (var s = 0; s < n.length; s++) {
                                        var o = n[s],
                                            a = e.$$registeredAnimations[o];
                                        a && !i[o] && (r.push(t.get(a)), i[o] = !0)
                                    }
                                    return r
                                }
                                var a = L(s);
                                return function(e, t, i, s) {
                                    function y() {
                                        s.domOperation(), a(e, s)
                                    }

                                    function b(e, t, i, s, o) {
                                        var a;
                                        switch (i) {
                                            case "animate":
                                                a = [t, s.from, s.to, o];
                                                break;
                                            case "setClass":
                                                a = [t, u, c, o];
                                                break;
                                            case "addClass":
                                                a = [t, u, o];
                                                break;
                                            case "removeClass":
                                                a = [t, c, o];
                                                break;
                                            default:
                                                a = [t, o]
                                        }
                                        a.push(s);
                                        var f = e.apply(e, a);
                                        if (f) {
                                            h(f.start) && (f = f.start());
                                            if (f instanceof n) f.done(o);
                                            else if (h(f)) return f
                                        }
                                        return r
                                    }

                                    function w(e, t, i, s, u) {
                                        var a = [];
                                        return o(s, function(s) {
                                            var o = s[u];
                                            if (!o) return;
                                            a.push(function() {
                                                var s, u, a = !1,
                                                    f = function(e) {
                                                        a || (a = !0, (u || r)(e), s.complete(!e))
                                                    };
                                                return s = new n({
                                                    end: function() {
                                                        f()
                                                    },
                                                    cancel: function() {
                                                        f(!0)
                                                    }
                                                }), u = b(o, e, t, i, function(e) {
                                                    var t = e === !1;
                                                    f(t)
                                                }), s
                                            })
                                        }), a
                                    }

                                    function E(e, t, r, i, s) {
                                        var u = w(e, t, r, i, s);
                                        if (u.length === 0) {
                                            var a, f;
                                            s === "beforeSetClass" ? (a = w(e, "removeClass", r, i, "beforeRemoveClass"), f = w(e, "addClass", r, i, "beforeAddClass")) : s === "setClass" && (a = w(e, "removeClass", r, i, "removeClass"), f = w(e, "addClass", r, i, "addClass")), a && (u = u.concat(a)), f && (u = u.concat(f))
                                        }
                                        if (u.length === 0) return;
                                        return function(t) {
                                            var r = [];
                                            return u.length && o(u, function(e) {
                                                    r.push(e())
                                                }), r.length ? n.all(r, t) : t(),
                                                function(t) {
                                                    o(r, function(e) {
                                                        t ? e.cancel() : e.end()
                                                    })
                                                }
                                        }
                                    }
                                    arguments.length === 3 && f(i) && (s = i, i = null), s = A(s), i || (i = e.attr("class") || "", s.addClass && (i += " " + s.addClass), s.removeClass && (i += " " + s.removeClass));
                                    var u = s.addClass,
                                        c = s.removeClass,
                                        p = l(i),
                                        d, v;
                                    if (p.length) {
                                        var m, g;
                                        t == "leave" ? (g = "leave", m = "afterLeave") : (g = "before" + t.charAt(0).toUpperCase() + t.substr(1), m = t), t !== "enter" && t !== "move" && (d = E(e, t, s, p, g)), v = E(e, t, s, p, m)
                                    }
                                    if (!d && !v) return;
                                    return {
                                        start: function() {
                                            function a(t) {
                                                o = !0, y(), O(e, s), u.complete(t)
                                            }

                                            function f(e) {
                                                o || ((t || r)(e), a(e))
                                            }
                                            var t, i = [];
                                            d && i.push(function(e) {
                                                t = d(e)
                                            }), i.length ? i.push(function(e) {
                                                y(), e(!0)
                                            }) : y(), v && i.push(function(e) {
                                                t = v(e)
                                            });
                                            var o = !1,
                                                u = new n({
                                                    end: function() {
                                                        f()
                                                    },
                                                    cancel: function() {
                                                        f(!0)
                                                    }
                                                });
                                            return n.chain(i, a), u
                                        }
                                    }
                                }
                            }
                        ]
                    }
                ],
                bt = ["$$animationProvider",
                    function(e) {
                        e.drivers.push("$$animateJsDriver"), this.$get = ["$$animateJs", "$$AnimateRunner",
                            function(e, t) {
                                function n(t) {
                                    var n = t.element,
                                        r = t.event,
                                        i = t.options,
                                        s = t.classes;
                                    return e(n, r, s, i)
                                }
                                return function(r) {
                                    if (r.from && r.to) {
                                        var i = n(r.from),
                                            s = n(r.to);
                                        if (!i && !s) return;
                                        return {
                                            start: function() {
                                                function r() {
                                                    return function() {
                                                        o(e, function(e) {
                                                            e.end()
                                                        })
                                                    }
                                                }

                                                function u(e) {
                                                    n.complete(e)
                                                }
                                                var e = [];
                                                i && e.push(i.start()), s && e.push(s.start()), t.all(e, u);
                                                var n = new t({
                                                    end: r(),
                                                    cancel: r()
                                                });
                                                return n
                                            }
                                        }
                                    }
                                    return n(r)
                                }
                            }
                        ]
                    }
                ],
                wt = "data-ng-animate",
                Et = "$ngAnimatePin",
                St = ["$animateProvider",
                    function(e) {
                        function a(e, t, n, i) {
                            return r[e].some(function(e) {
                                return e(t, n, i)
                            })
                        }

                        function h(e, t) {
                            e = e || {};
                            var n = (e.addClass || "").length > 0,
                                r = (e.removeClass || "").length > 0;
                            return t ? n && r : n || r
                        }
                        var t = 1,
                            n = 2,
                            r = this.rules = {
                                skip: [],
                                cancel: [],
                                join: []
                            };
                        r.join.push(function(e, t, n) {
                            return !t.structural && h(t.options)
                        }), r.skip.push(function(e, t, n) {
                            return !t.structural && !h(t.options)
                        }), r.skip.push(function(e, t, n) {
                            return n.event == "leave" && t.structural
                        }), r.skip.push(function(e, t, n) {
                            return n.structural && !t.structural
                        }), r.cancel.push(function(e, t, n) {
                            return n.structural && t.structural
                        }), r.cancel.push(function(e, t, r) {
                            return r.state === n && t.structural
                        }), r.cancel.push(function(e, t, n) {
                            var r = t.options,
                                i = n.options;
                            return r.addClass && r.addClass === i.removeClass || r.removeClass && r.removeClass === i.addClass
                        }), this.$get = ["$$rAF", "$rootScope", "$rootElement", "$document", "$$HashMap", "$$animation", "$$AnimateRunner", "$templateRequest", "$$jqLite",
                            function(r, v, m, y, w, E, S, x, C) {
                                function R(e, t) {
                                    return D(e, t, {})
                                }

                                function U(e, t) {
                                    var n = H(e),
                                        r = [],
                                        i = j[t];
                                    return i && o(i, function(e) {
                                        e.node.contains(n) && r.push(e.callback)
                                    }), r
                                }

                                function z(e, t, n, i) {
                                    r(function() {
                                        o(U(t, e), function(e) {
                                            e(t, n, i)
                                        })
                                    })
                                }

                                function W(e, r, i) {
                                    function L(t, n, r, i) {
                                        z(n, e, r, i), t.progress(n, r, i)
                                    }

                                    function P(t) {
                                        q(e, i), O(e, i), i.domOperation(), l.complete(!t)
                                    }
                                    var s, o;
                                    e = T(e), e && (s = H(e), o = e.parent()), i = A(i);
                                    var l = new S;
                                    if (!s) return P(), l;
                                    u(i.addClass) && (i.addClass = i.addClass.join(" ")), u(i.removeClass) && (i.removeClass = i.removeClass.join(" ")), i.from && !f(i.from) && (i.from = null), i.to && !f(i.to) && (i.to = null);
                                    var c = [s.className, i.addClass, i.removeClass].join(" ");
                                    if (!I(c)) return P(), l;
                                    var p = ["enter", "move", "leave"].indexOf(r) >= 0,
                                        d = !_ || M.get(s),
                                        m = !d && k.get(s) || {},
                                        g = !!m.state;
                                    !d && (!g || m.state != t) && (d = !K(e, o, r));
                                    if (d) return P(), l;
                                    p && X(e);
                                    var y = {
                                        structural: p,
                                        element: e,
                                        event: r,
                                        close: P,
                                        options: i,
                                        runner: l
                                    };
                                    if (g) {
                                        var b = a("skip", e, y, m);
                                        if (b) return m.state === n ? (P(), l) : (D(e, m.options, i), m.runner);
                                        var w = a("cancel", e, y, m);
                                        if (w) m.state === n ? m.runner.end() : m.structural ? m.close() : D(e, y.options, m.options);
                                        else {
                                            var x = a("join", e, y, m);
                                            if (x) {
                                                if (m.state !== n) return r = y.event = m.event, i = D(e, m.options, y.options), l;
                                                R(e, i)
                                            }
                                        }
                                    } else R(e, i);
                                    var N = y.structural;
                                    N || (N = y.event === "animate" && Object.keys(y.options.to || {}).length > 0 || h(y.options));
                                    if (!N) return P(), V(e), l;
                                    p && J(o);
                                    var C = (m.counter || 0) + 1;
                                    return y.counter = C, Q(e, t, y), v.$$postDigest(function() {
                                        var t = k.get(s),
                                            o = !t;
                                        t = t || {};
                                        var u = e.parent() || [],
                                            a = u.length > 0 && (t.event === "animate" || t.structural || h(t.options));
                                        if (o || t.counter !== C || !a) {
                                            o && (q(e, i), O(e, i));
                                            if (o || p && t.event !== r) i.domOperation(), l.end();
                                            a || V(e);
                                            return
                                        }
                                        r = !t.structural && h(t.options, !0) ? "setClass" : t.event, t.structural && J(u), Q(e, n);
                                        var f = E(e, r, t.options);
                                        f.done(function(t) {
                                            P(!t);
                                            var n = k.get(s);
                                            n && n.counter === C && V(H(e)), L(l, r, "close", {})
                                        }), l.setHost(f), L(l, r, "start", {})
                                    }), l
                                }

                                function X(e) {
                                    var r = H(e),
                                        i = r.querySelectorAll("[" + wt + "]");
                                    o(i, function(e) {
                                        var r = parseInt(e.getAttribute(wt)),
                                            i = k.get(e);
                                        switch (r) {
                                            case n:
                                                i.runner.end();
                                            case t:
                                                i && k.remove(e)
                                        }
                                    })
                                }

                                function V(e) {
                                    var t = H(e);
                                    t.removeAttribute(wt), k.remove(t)
                                }

                                function $(e, t) {
                                    return H(e) === H(t)
                                }

                                function J(e) {
                                    function i(e, t) {
                                        if (t.structural || !h(t.options)) return;
                                        t.state === n && t.runner.end(), V(e)
                                    }
                                    var t = H(e);
                                    do {
                                        if (!t || t.nodeType !== d) break;
                                        var r = k.get(t);
                                        r && i(t, r), t = t.parentNode
                                    } while (!0)
                                }

                                function K(e, t, n) {
                                    var r = !1,
                                        i = !1,
                                        s = !1,
                                        o, u = e.data(Et);
                                    u && (t = u);
                                    while (t && t.length) {
                                        i || (i = $(t, m));
                                        var a = t[0];
                                        if (a.nodeType !== d) break;
                                        var f = k.get(a) || {};
                                        s || (s = f.structural || M.get(a));
                                        if (l(o) || o === !0) {
                                            var h = t.data(g);
                                            c(h) && (o = h)
                                        }
                                        if (s && o === !1) break;
                                        i || (i = $(t, m), i || (u = t.data(Et), u && (t = u))), r || (r = $(t, B)), t = t.parent()
                                    }
                                    var p = !s || o;
                                    return p && i && r
                                }

                                function Q(e, t, n) {
                                    n = n || {}, n.state = t;
                                    var r = H(e);
                                    r.setAttribute(wt, t);
                                    var s = k.get(r),
                                        o = s ? i(s, n) : n;
                                    k.put(r, o)
                                }
                                var k = new w,
                                    M = new w,
                                    _ = null,
                                    P = v.$watch(function() {
                                        return x.totalPendingRequests === 0
                                    }, function(e) {
                                        if (!e) return;
                                        P(), v.$$postDigest(function() {
                                            v.$$postDigest(function() {
                                                _ === null && (_ = !0)
                                            })
                                        })
                                    }),
                                    B = s(y[0].body),
                                    j = {},
                                    F = e.classNameFilter(),
                                    I = F ? function(e) {
                                        return F.test(e)
                                    } : function() {
                                        return !0
                                    },
                                    q = L(C);
                                return {
                                    on: function(e, t, n) {
                                        var r = N(t);
                                        j[e] = j[e] || [], j[e].push({
                                            node: r,
                                            callback: n
                                        })
                                    },
                                    off: function(e, t, n) {
                                        function i(e, t, n) {
                                            var r = N(t);
                                            return e.filter(function(e) {
                                                var t = e.node === r && (!n || e.callback === n);
                                                return !t
                                            })
                                        }
                                        var r = j[e];
                                        if (!r) return;
                                        j[e] = arguments.length === 1 ? null : i(r, t, n)
                                    },
                                    pin: function(e, t) {
                                        b(p(e), "element", "not an element"), b(p(t), "parentElement", "not an element"), e.data(Et, t)
                                    },
                                    push: function(e, t, n, r) {
                                        return n = n || {}, n.domOperation = r, W(e, t, n)
                                    },
                                    enabled: function(e, t) {
                                        var n = arguments.length;
                                        if (n === 0) t = !!_;
                                        else {
                                            var r = p(e);
                                            if (!r) t = _ = !!e;
                                            else {
                                                var i = H(e),
                                                    s = M.get(i);
                                                n === 1 ? t = !s : (t = !!t, t ? s && M.remove(i) : M.put(i, !0))
                                            }
                                        }
                                        return t
                                    }
                                }
                            }
                        ]
                    }
                ],
                xt = ["$$rAF",
                    function(e) {
                        return function() {
                            var t = !1;
                            return e(function() {
                                    t = !0
                                }),
                                function(n) {
                                    t ? n() : e(n)
                                }
                        }
                    }
                ],
                Tt = ["$q", "$$rAFMutex",
                    function(e, t) {
                        function u(e) {
                            this.setHost(e), this._doneCallbacks = [], this._runInAnimationFrame = t(), this._state = 0
                        }
                        var n = 0,
                            i = 1,
                            s = 2;
                        return u.chain = function(e, t) {
                            function r() {
                                if (n === e.length) {
                                    t(!0);
                                    return
                                }
                                e[n](function(e) {
                                    if (e === !1) {
                                        t(!1);
                                        return
                                    }
                                    n++, r()
                                })
                            }
                            var n = 0;
                            r()
                        }, u.all = function(e, t) {
                            function i(i) {
                                r = r && i, ++n === e.length && t(r)
                            }
                            var n = 0,
                                r = !0;
                            o(e, function(e) {
                                e.done(i)
                            })
                        }, u.prototype = {
                            setHost: function(e) {
                                this.host = e || {}
                            },
                            done: function(e) {
                                this._state === s ? e() : this._doneCallbacks.push(e)
                            },
                            progress: r,
                            getPromise: function() {
                                if (!this.promise) {
                                    var t = this;
                                    this.promise = e(function(e, n) {
                                        t.done(function(t) {
                                            t === !1 ? n() : e()
                                        })
                                    })
                                }
                                return this.promise
                            },
                            then: function(e, t) {
                                return this.getPromise().then(e, t)
                            },
                            "catch": function(e) {
                                return this.getPromise()["catch"](e)
                            },
                            "finally": function(e) {
                                return this.getPromise()["finally"](e)
                            },
                            pause: function() {
                                this.host.pause && this.host.pause()
                            },
                            resume: function() {
                                this.host.resume && this.host.resume()
                            },
                            end: function() {
                                this.host.end && this.host.end(), this._resolve(!0)
                            },
                            cancel: function() {
                                this.host.cancel && this.host.cancel(), this._resolve(!1)
                            },
                            complete: function(e) {
                                var t = this;
                                t._state === n && (t._state = i, t._runInAnimationFrame(function() {
                                    t._resolve(e)
                                }))
                            },
                            _resolve: function(e) {
                                this._state !== s && (o(this._doneCallbacks, function(t) {
                                    t(e)
                                }), this._doneCallbacks.length = 0, this._state = s)
                            }
                        }, u
                    }
                ],
                Nt = ["$animateProvider",
                    function(e) {
                        function i(e, t) {
                            e.data(r, t)
                        }

                        function u(e) {
                            e.removeData(r)
                        }

                        function a(e) {
                            return e.data(r)
                        }
                        var t = "ng-animate-ref",
                            n = this.drivers = [],
                            r = "$$animationRunner";
                        this.$get = ["$$jqLite", "$rootScope", "$injector", "$$AnimateRunner", "$$rAFScheduler",
                            function(e, r, f, l, c) {
                                var h = [],
                                    p = L(e),
                                    d = 0,
                                    v = 0,
                                    g = [];
                                return function(y, b, E) {
                                    function k(e) {
                                        var n = "[" + t + "]",
                                            r = e.hasAttribute(t) ? [e] : e.querySelectorAll(n),
                                            i = [];
                                        return o(r, function(e) {
                                            var n = e.getAttribute(t);
                                            n && n.length && i.push(e)
                                        }), i
                                    }

                                    function L(e) {
                                        var n = [],
                                            r = {};
                                        o(e, function(e, i) {
                                            var u = e.element,
                                                a = H(u),
                                                f = e.event,
                                                l = ["enter", "move"].indexOf(f) >= 0,
                                                c = e.structural ? k(a) : [];
                                            if (c.length) {
                                                var h = l ? "to" : "from";
                                                o(c, function(e) {
                                                    var n = e.getAttribute(t);
                                                    r[n] = r[n] || {}, r[n][h] = {
                                                        animationID: i,
                                                        element: s(e)
                                                    }
                                                })
                                            } else n.push(e)
                                        });
                                        var i = {},
                                            u = {};
                                        return o(r, function(t, r) {
                                            var s = t.from,
                                                o = t.to;
                                            if (!s || !o) {
                                                var a = s ? s.animationID : o.animationID,
                                                    f = a.toString();
                                                i[f] || (i[f] = !0, n.push(e[a]));
                                                return
                                            }
                                            var l = e[s.animationID],
                                                c = e[o.animationID],
                                                h = s.animationID.toString();
                                            if (!u[h]) {
                                                var p = u[h] = {
                                                    structural: !0,
                                                    beforeStart: function() {
                                                        l.beforeStart(), c.beforeStart()
                                                    },
                                                    close: function() {
                                                        l.close(), c.close()
                                                    },
                                                    classes: M(l.classes, c.classes),
                                                    from: l,
                                                    to: c,
                                                    anchors: []
                                                };
                                                p.classes.length ? n.push(p) : (n.push(l), n.push(c))
                                            }
                                            u[h].anchors.push({
                                                out: s.element,
                                                "in": o.element
                                            })
                                        }), n
                                    }

                                    function M(e, t) {
                                        e = e.split(" "), t = t.split(" ");
                                        var n = [];
                                        for (var r = 0; r < e.length; r++) {
                                            var i = e[r];
                                            if (i.substring(0, 3) === "ng-") continue;
                                            for (var s = 0; s < t.length; s++)
                                                if (i === t[s]) {
                                                    n.push(i);
                                                    break
                                                }
                                        }
                                        return n.join(" ")
                                    }

                                    function _(e) {
                                        for (var t = n.length - 1; t >= 0; t--) {
                                            var r = n[t];
                                            if (!f.has(r)) continue;
                                            var i = f.get(r),
                                                s = i(e);
                                            if (s) return s
                                        }
                                    }

                                    function D() {
                                        y.addClass(m), N && e.addClass(y, N)
                                    }

                                    function P(e, t) {
                                        function n(e) {
                                            a(e).setHost(t)
                                        }
                                        e.from && e.to ? (n(e.from.element), n(e.to.element)) : n(e.element)
                                    }

                                    function B() {
                                        var e = a(y);
                                        e && (b !== "leave" || !E.$$domOperationFired) && e.end()
                                    }

                                    function j(t) {
                                        y.off("$destroy", B), u(y), p(y, E), O(y, E), E.domOperation(), N && e.removeClass(y, N), y.removeClass(m), x.complete(!t)
                                    }
                                    E = A(E);
                                    var S = ["enter", "move", "leave"].indexOf(b) >= 0,
                                        x = new l({
                                            end: function() {
                                                j()
                                            },
                                            cancel: function() {
                                                j(!0)
                                            }
                                        });
                                    if (!n.length) return j(), x;
                                    i(y, x);
                                    var T = w(y.attr("class"), w(E.addClass, E.removeClass)),
                                        N = E.tempClasses;
                                    N && (T += " " + N, E.tempClasses = null);
                                    var C;
                                    return S || (C = d, d += 1), h.push({
                                        element: y,
                                        classes: T,
                                        event: b,
                                        classBasedIndex: C,
                                        structural: S,
                                        options: E,
                                        beforeStart: D,
                                        close: j
                                    }), y.on("$destroy", B), h.length > 1 ? x : (r.$$postDigest(function() {
                                        v = d, d = 0, g.length = 0;
                                        var e = [];
                                        o(h, function(t) {
                                            a(t.element) && e.push(t)
                                        }), h.length = 0, o(L(e), function(e) {
                                            function t() {
                                                e.beforeStart();
                                                var t, n = e.close,
                                                    r = e.anchors ? e.from.element || e.to.element : e.element;
                                                if (a(r)) {
                                                    var i = _(e);
                                                    i && (t = i.start)
                                                }
                                                if (!t) n();
                                                else {
                                                    var s = t();
                                                    s.done(function(e) {
                                                        n(!e)
                                                    }), P(e, s)
                                                }
                                            }
                                            e.structural ? t() : (g.push({
                                                node: H(e.element),
                                                fn: t
                                            }), e.classBasedIndex === v - 1 && (g = g.sort(function(e, t) {
                                                return t.node.contains(e.node)
                                            }).map(function(e) {
                                                return e.fn
                                            }), c(g)))
                                        })
                                    }), x)
                                }
                            }
                        ]
                    }
                ];
            t.module("ngAnimate", []).directive("ngAnimateChildren", j).factory("$$rAFMutex", xt).factory("$$rAFScheduler", B).factory("$$AnimateRunner", Tt).provider("$$animateQueue", St).provider("$$animation", Nt).provider("$animateCss", mt).provider("$$animateCssDriver", gt).provider("$$animateJs", yt).provider("$$animateJsDriver", bt)
        }(window, window.angular),
        function(e, t, n) {
            "use strict";

            function i() {
                this.$get = ["$$sanitizeUri",
                    function(e) {
                        return function(t) {
                            var n = [];
                            return O(t, P(n, function(t, n) {
                                return !/^unsafe/.test(e(t, n))
                            })), n.join("")
                        }
                    }
                ]
            }

            function s(e) {
                var n = [],
                    r = P(n, t.noop);
                return r.chars(e), n.join("")
            }

            function A(e, n) {
                var r = {},
                    i = e.split(","),
                    s;
                for (s = 0; s < i.length; s++) r[n ? t.lowercase(i[s]) : i[s]] = !0;
                return r
            }

            function O(e, n) {
                function S(e, r, i, s) {
                    r = t.lowercase(r);
                    if (w[r])
                        while (v.last() && E[v.last()]) T("", v.last());
                    b[r] && v.last() == r && T("", r), s = m[r] || !!s, s || v.push(r);
                    var o = {};
                    i.replace(a, function(e, t, n, r, i) {
                        var s = n || r || i || "";
                        o[t] = _(s)
                    }), n.start && n.start(r, o, s)
                }

                function T(e, r) {
                    var i = 0,
                        s;
                    r = t.lowercase(r);
                    if (r)
                        for (i = v.length - 1; i >= 0; i--)
                            if (v[i] == r) break;
                    if (i >= 0) {
                        for (s = v.length - 1; s >= i; s--) n.end && n.end(v[s]);
                        v.length = i
                    }
                }
                typeof e != "string" && (e === null || typeof e == "undefined" ? e = "" : e = "" + e);
                var i, s, d, v = [],
                    g = e,
                    y;
                v.last = function() {
                    return v[v.length - 1]
                };
                while (e) {
                    y = "", s = !0, !v.last() || !x[v.last()] ? (e.indexOf("<!--") === 0 ? (i = e.indexOf("--", 4), i >= 0 && e.lastIndexOf("-->", i) === i && (n.comment && n.comment(e.substring(4, i)), e = e.substring(i + 3), s = !1)) : h.test(e) ? (d = e.match(h), d && (e = e.replace(d[0], ""), s = !1)) : l.test(e) ? (d = e.match(u), d && (e = e.substring(d[0].length), d[0].replace(u, T), s = !1)) : f.test(e) && (d = e.match(o), d ? (d[4] && (e = e.substring(d[0].length), d[0].replace(o, S)), s = !1) : (y += "<", e = e.substring(1))), s && (i = e.indexOf("<"), y += i < 0 ? e : e.substring(0, i), e = i < 0 ? "" : e.substring(i), n.chars && n.chars(_(y)))) : (e = e.replace(new RegExp("([\\W\\w]*)<\\s*\\/\\s*" + v.last() + "[^>]*>", "i"), function(e, t) {
                        return t = t.replace(c, "$1").replace(p, "$1"), n.chars && n.chars(_(t)), ""
                    }), T("", v.last()));
                    if (e == g) throw r("badparse", "The sanitizer was unable to parse the following block of html: {0}", e);
                    g = e
                }
                T()
            }

            function _(e) {
                return e ? (M.innerHTML = e.replace(/</g, "&lt;"), M.textContent) : ""
            }

            function D(e) {
                return e.replace(/&/g, "&amp;").replace(d, function(e) {
                    var t = e.charCodeAt(0),
                        n = e.charCodeAt(1);
                    return "&#" + ((t - 55296) * 1024 + (n - 56320) + 65536) + ";"
                }).replace(v, function(e) {
                    return "&#" + e.charCodeAt(0) + ";"
                }).replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }

            function P(e, n) {
                var r = !1,
                    i = t.bind(e, e.push);
                return {
                    start: function(e, s, o) {
                        e = t.lowercase(e), !r && x[e] && (r = e), !r && T[e] === !0 && (i("<"), i(e), t.forEach(s, function(r, s) {
                            var o = t.lowercase(s),
                                u = e === "img" && o === "src" || o === "background";
                            L[o] === !0 && (N[o] !== !0 || n(r, u)) && (i(" "), i(s), i('="'), i(D(r)), i('"'))
                        }), i(o ? "/>" : ">"))
                    },
                    end: function(e) {
                        e = t.lowercase(e), !r && T[e] === !0 && (i("</"), i(e), i(">")), e == r && (r = !1)
                    },
                    chars: function(e) {
                        r || i(D(e))
                    }
                }
            }
            var r = t.$$minErr("$sanitize"),
                o = /^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/,
                u = /^<\/\s*([\w:-]+)[^>]*>/,
                a = /([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,
                f = /^</,
                l = /^<\//,
                c = /<!--(.*?)-->/g,
                h = /<!DOCTYPE([^>]*?)>/i,
                p = /<!\[CDATA\[(.*?)]]>/g,
                d = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
                v = /([^\#-~| |!])/g,
                m = A("area,br,col,hr,img,wbr"),
                g = A("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
                y = A("rp,rt"),
                b = t.extend({}, y, g),
                w = t.extend({}, g, A("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),
                E = t.extend({}, y, A("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),
                S = A("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan,use"),
                x = A("script,style"),
                T = t.extend({}, m, w, E, b, S),
                N = A("background,cite,href,longdesc,src,usemap,xlink:href"),
                C = A("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,target,title,type,valign,value,vspace,width"),
                k = A("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan", !0),
                L = t.extend({}, N, k, C),
                M = document.createElement("pre");
            t.module("ngSanitize", []).provider("$sanitize", i), t.module("ngSanitize").filter("linky", ["$sanitize",
                function(e) {
                    var n = /((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/,
                        r = /^mailto:/;
                    return function(i, o) {
                        function h(e) {
                            if (!e) return;
                            f.push(s(e))
                        }

                        function p(e, n) {
                            f.push("<a "), t.isDefined(o) && f.push('target="', o, '" '), f.push('href="', e.replace(/"/g, "&quot;"), '">'), h(n), f.push("</a>")
                        }
                        if (!i) return i;
                        var u, a = i,
                            f = [],
                            l, c;
                        while (u = a.match(n)) l = u[0], !u[2] && !u[4] && (l = (u[3] ? "http://" : "mailto:") + l), c = u.index, h(a.substr(0, c)), p(l, u[0].replace(r, "")), a = a.substring(c + u[0].length);
                        return h(a), e(f.join(""))
                    }
                }
            ])
        }(window, window.angular),
        function(e, t, n) {
            "use strict";

            function u(e) {
                function t(e, t) {
                    if (e) return r(e) ? e.indexOf(t) >= 0 : e.hasOwnProperty(t)
                }
                return ["$animate",
                    function(e) {
                        return {
                            restrict: "AE",
                            transclude: "element",
                            terminal: !0,
                            require: "^^ngMessages",
                            link: function(n, i, s, o, u) {
                                var a = i[0],
                                    f, l = s.ngMessage || s.when,
                                    c = s.ngMessageExp || s.whenExp,
                                    h = function(e) {
                                        f = e ? r(e) ? e : e.split(/[\s,]+/) : null, o.reRender()
                                    };
                                c ? (h(n.$eval(c)), n.$watchCollection(c, h)) : h(l);
                                var p, d;
                                o.register(a, d = {
                                    test: function(e) {
                                        return t(f, e)
                                    },
                                    attach: function() {
                                        p || u(n, function(t) {
                                            e.enter(t, null, i), p = t, p.on("$destroy", function() {
                                                p && (o.deregister(a), d.detach())
                                            })
                                        })
                                    },
                                    detach: function() {
                                        if (p) {
                                            var t = p;
                                            p = null, e.leave(t)
                                        }
                                    }
                                })
                            }
                        }
                    }
                ]
            }
            var r = t.isArray,
                i = t.forEach,
                s = t.isString,
                o = t.element;
            t.module("ngMessages", []).directive("ngMessages", ["$animate",
                function(e) {
                    function r(e, t) {
                        return s(t) && t.length === 0 || o(e.$eval(t))
                    }

                    function o(e) {
                        return s(e) ? e.length : !!e
                    }
                    var t = "ng-active",
                        n = "ng-inactive";
                    return {
                        require: "ngMessages",
                        restrict: "AE",
                        controller: ["$element", "$scope", "$attrs",
                            function(s, u, a) {
                                function d(e, t) {
                                    var n = t,
                                        r = [];
                                    while (n && n !== e) {
                                        var i = n.$$ngMessageNode;
                                        if (i && i.length) return c[i];
                                        n.childNodes.length && r.indexOf(n) == -1 ? (r.push(n), n = n.childNodes[n.childNodes.length - 1]) : n = n.previousSibling || n.parentNode
                                    }
                                }

                                function v(e, t, n) {
                                    var r = c[n];
                                    if (!f.head) f.head = r;
                                    else {
                                        var i = d(e, t);
                                        i ? (r.next = i.next, i.next = r) : (r.next = f.head, f.head = r)
                                    }
                                }

                                function m(e, t, n) {
                                    var r = c[n],
                                        i = d(e, t);
                                    i ? i.next = r.next : f.head = r.next
                                }
                                var f = this,
                                    l = 0,
                                    c = this.messages = {},
                                    h, p;
                                this.render = function(l) {
                                    l = l || {}, h = !1, p = l;
                                    var c = r(u, a.ngMessagesMultiple) || r(u, a.multiple),
                                        d = [],
                                        v = {},
                                        m = f.head,
                                        g = !1,
                                        y = 0;
                                    while (m != null) {
                                        y++;
                                        var b = m.message,
                                            w = !1;
                                        g || i(l, function(e, t) {
                                            if (!w && o(e) && b.test(t)) {
                                                if (v[t]) return;
                                                v[t] = !0, w = !0, b.attach()
                                            }
                                        }), w ? g = !c : d.push(b), m = m.next
                                    }
                                    i(d, function(e) {
                                        e.detach()
                                    }), d.length !== y ? e.setClass(s, t, n) : e.setClass(s, n, t)
                                }, u.$watchCollection(a.ngMessages || a["for"], f.render), this.reRender = function() {
                                    h || (h = !0, u.$evalAsync(function() {
                                        h && p && f.render(p)
                                    }))
                                }, this.register = function(e, t) {
                                    var n = l.toString();
                                    c[n] = {
                                            message: t
                                        }, v(s[0], e, n), e.$$ngMessageNode =
                                        n, l++, f.reRender()
                                }, this.deregister = function(e) {
                                    var t = e.$$ngMessageNode;
                                    delete e.$$ngMessageNode, m(s[0], e, t), delete c[t], f.reRender()
                                }
                            }
                        ]
                    }
                }
            ]).directive("ngMessagesInclude", ["$templateRequest", "$document", "$compile",
                function(e, t, n) {
                    return {
                        restrict: "AE",
                        require: "^^ngMessages",
                        link: function(r, i, s) {
                            var u = s.ngMessagesInclude || s.src;
                            e(u).then(function(e) {
                                n(e)(r, function(e) {
                                    i.after(e);
                                    var n = o(t[0].createComment(" ngMessagesInclude: " + u + " "));
                                    i.after(n), i.remove()
                                })
                            })
                        }
                    }
                }
            ]).directive("ngMessage", u("AE")).directive("ngMessageExp", u("A"))
        }(window, window.angular),
        function() {
            "use strict";

            function e(e, t, n) {
                e.section = "e_market", e.legendCtrl.hide(), this.CATEGORIES = n, t.parent && (this.showIcon = !0), this.angle = 0, this.onMouseover = function(e) {
                    this.info = e.name
                }, this.onMouseout = function() {
                    this.info = null
                }, this.getAngle = function() {
                    return this.showIcon ? 1.57079633 : 0
                }, _.bindAll(this, "onMouseout", "onMouseover", "getAngle")
            }

            function t(e) {
                var t = [],
                    n = [],
                    r;
                for (r = 0; r < e.length; r++) r % 2 == 0 ? t.push(e[r]) : n.push(e[r]);
                return [t, n]
            }

            function n(e, n, r, i, s, o, u, a, f) {
                e.section = "e_market";
                var l = this;
                this.order = a.order, this.products = i, this.productLists = t(i);
                var c, h = _.pluck(i, "id");
                this.categories = _(s).filter(function(e) {
                    return e.id == r.category ? (c = e, !1) : !0
                }), this.category = c, this.category = _.chain(s).filter(function(e) {
                    return e.id == r.category
                }).first().value(), e.legendCtrl.setLegend("e_market", this), this.fetchSiblings = function() {
                    this.next = this.previous = null;
                    var e = h.indexOf(this.product.id);
                    e > 0 && (this.previous = i[e - 1]), h.length > e + 1 && (this.next = i[e + 1])
                }, this.setProduct = function(e) {
                    this.object = this.product = e, this.qty = 1, this.product && u(function() {
                        l.fetchSiblings()
                    }), n.$broadcast("video:reset")
                }, this.nextProduct = function() {
                    n.$broadcast("slide:next")
                }, this.previousProduct = function() {
                    n.$broadcast("slide:previous")
                }, this.jump = function(e) {
                    if (this.product.id == e.id) return;
                    this.next = e, u(function() {
                        l.nextProduct()
                    })
                }, this.more = function() {
                    e.lightboxCtrl.setLightbox("product", this.product)
                };
                if (i.length > 0)
                    if ("product" in f.search()) {
                        var p = f.search().product;
                        this.setProduct(_.find(i, function(e) {
                            return e.id == p
                        }))
                    } else this.setProduct(i[0]);
                this.qtyUp = function() {
                    var e = this.product.getStock();
                    e && e.quantity > this.qty && this.qty++
                }, this.qtyDown = function() {
                    if (this.qty == 1) return;
                    this.qty--
                }, this.setColor = function(e) {
                    this.product.setColor(e), this.checkQty()
                }, this.setSize = function(e) {
                    this.product.setSize(e), this.checkQty()
                }, this.checkQty = function() {
                    this.qty == 0 && (this.qty = 1);
                    var e = this.product.getStock();
                    e && this.qty > e.quantity && (this.qty = e.quantity)
                }, this.addItem = function() {
                    if (!this.product.color || !this.product.size) {
                        this.invalidSelection = !0;
                        return
                    }
                    this.invalidSelection = !1, a.addItem(this.product.getStock(), this.qty).$promise.then(function(e) {
                        l.addedItem = e, l.rollerIndex = 0
                    })
                }, this.hideCart = function() {
                    this.addedItem = null
                }, this.rollerIndex = 0, this.rollerDirection = null, this.rollerUp = function() {
                    this.rollerIndex > 0 && (this.rollerIndex--, this.rollerDirection = "up")
                }, this.rollerDown = function() {
                    this.rollerIndex + 1 < this.order.items.length && (this.rollerIndex++, this.rollerDirection = "down")
                }
            }

            function r(e, t) {
                var n = this;
                this.results = null, this.search = function() {
                    this.results = t.query({
                        search: e.query
                    })
                }, e.$watch("query", function(e) {
                    e ? n.search() : n.results = null
                })
            }

            function i(e) {
                return {
                    enter: function(t, n) {
                        var r;
                        t.scope().legend ? r = t.scope().legend.data : r = t.scope();
                        if (r.rollerDirection && r.rollerDirection == "up") return e(t, {
                            from: {
                                top: "-100%"
                            },
                            to: {
                                top: 0
                            },
                            duration: .3
                        });
                        if (r.rollerDirection && r.rollerDirection == "down") return e(t, {
                            from: {
                                top: "100%"
                            },
                            to: {
                                top: 0
                            },
                            duration: .3
                        });
                        n()
                    },
                    leave: function(t, n) {
                        var r;
                        t.scope().legend ? r = t.scope().legend.data : r = t.scope();
                        if (r.rollerDirection && r.rollerDirection == "up") return e(t, {
                            from: {
                                top: 0
                            },
                            to: {
                                top: "100%"
                            },
                            duration: .3
                        });
                        if (r.rollerDirection && r.rollerDirection == "down") return e(t, {
                            from: {
                                top: 0
                            },
                            to: {
                                top: "-100%"
                            },
                            duration: .3
                        });
                        n()
                    }
                }
            }

            function s(e) {
                return {
                    scope: {
                        image: "="
                    },
                    link: function(t, n, r) {
                        n.addClass("img-container");
                        var i = n.find("img");
                        e(function() {
                            n.zoom({
                                magnify: 3,
                                onZoomIn: function() {
                                    i.hide()
                                },
                                onZoomOut: function() {
                                    i.show()
                                }
                            })
                        })
                    },
                    template: '<img ng-src="{{ image.image.url }}" alt="{{ image.image.alt_text }}">'
                }
            }

            function o(e) {
                var t = {
                    controller: "CategoriesController",
                    controllerAs: "ctrl",
                    resolve: {
                        categories: ["Category", "$route",
                            function(e, t) {
                                return e.query(t.current.params).$promise
                            }
                        ]
                    },
                    templateUrl: "e_market/categories.html"
                };
                e.when("/e-market", t).when("/e-market/:parent", t).when("/e-market/:category/products", {
                    controller: "ProductsController",
                    controllerAs: "ctrl",
                    resolve: {
                        products: ["$route", "Product",
                            function(e, t) {
                                return t.query(e.current.params).$promise
                            }
                        ],
                        categories: ["$route", "Category",
                            function(e, t) {
                                return t.siblings({
                                    id: e.current.params.category
                                }).$promise
                            }
                        ]
                    },
                    templateUrl: "e_market/products.html"
                })
            }
            e.$inject = ["$rootScope", "$routeParams", "categories"], n.$inject = ["$rootScope", "$scope", "$routeParams", "products", "categories", "Product", "$timeout", "Cart", "$location"], r.$inject = ["$scope", "Product"], i.$inject = ["$animateCss"], s.$inject = ["$timeout"], o.$inject = ["$routeProvider"], angular.module("mofa.e_market", []).controller("CategoriesController", e).controller("ProductsController", n).controller("ProductSearchController", r).animation(".item", i).directive("carouselZoomImg", s).config(o)
        }(),
        function() {
            "use strict";

            function e(e, t) {
                var n = this;
                e.section = "human_garden", e.legendCtrl.hide(), this.MONTHS = t.MONTHS, this.onMouseover = function(e) {
                    n.info = e.title
                }, this.onMouseout = function(e) {
                    n.info = null
                }
            }

            function t(e, t, n, r, i, s, o, u) {
                e.section = "human_garden";
                var a = this;
                this.sliderCtrl = null, e.legendCtrl.setLegend("events", this), this.MONTHS = s.MONTHS, this.fetchSiblings = function() {
                    this.event.previous ? this.previous = u.get({
                        id: this.event.previous
                    }) : this.previous = null, this.event.next ? this.next = u.get({
                        id: this.event.next
                    }) : this.next = null
                }, this.setEvent = function(e) {
                    a.object = a.event = e, e ? (a.eventDate = new Date(a.event.datetime), a.month = a.event.getMonth(), a.day = a.eventDate.getDate(), a.year = a.eventDate.getFullYear(), a.fetchSiblings(), a.updateLists(a.month.index)) : (a.day = n.day, a.month = s.MONTHS[n.month - 1], a.year = n.year, a.updateLists(n.month))
                }, this.updateLists = function(t) {
                    var n = s.splitLists(t);
                    this.list1 = n[0], this.list2 = n[1], this.daysInMonth = s.daysInMonth(t), e.$broadcast("mRecircle")
                }, this.nextEvent = function() {
                    t.$broadcast("slide:next")
                }, this.previousEvent = function() {
                    t.$broadcast("slide:previous")
                }, this.more = function() {
                    e.lightboxCtrl.setLightbox("event", {
                        event: this.event,
                        month: this.month
                    })
                }, this.setEvent(o)
            }

            function n(e, t) {
                var n = this;
                this.results = null, this.search = function() {
                    this.results = t.query({
                        search: e.query
                    })
                }, e.$watch("query", function(e) {
                    e ? n.search() : n.results = null
                })
            }

            function r(e) {
                var t = {
                    controller: "EventsDayController",
                    controllerAs: "ctrl",
                    resolve: {
                        event: ["$route", "$q", "Event", "dateUtils",
                            function(e, t, n, r) {
                                var i = e.current.params.month,
                                    s = {
                                        month: i
                                    };
                                return "year" in e.current.params ? s.year = e.current.params.year : (s.year = r.getYear(), e.current.params.year = s.year), "day" in e.current.params && (s.day = e.current.params.day, e.current.params.day = s.day), t(function(e, t) {
                                    n.getLast(s, function(t) {
                                        e(t)
                                    }, function(n) {
                                        n.status == 404 ? e(null) : t(), e(null)
                                    })
                                })
                            }
                        ]
                    },
                    templateUrl: "events/day.html"
                };
                e.when("/human-garden", {
                    controller: "EventsController",
                    controllerAs: "ctrl",
                    templateUrl: "events/month.html"
                }).when("/human-garden/event/:event", {
                    controller: "EventsDayController",
                    controllerAs: "ctrl",
                    resolve: {
                        event: ["$route", "Event",
                            function(e, t) {
                                return t.get({
                                    id: e.current.params.event
                                }).$promise
                            }
                        ]
                    },
                    templateUrl: "events/day.html"
                }).when("/human-garden/:year/:month/:day", t).when("/human-garden/:year/:month", t).when("/human-garden/:month", t)
            }
            e.$inject = ["$rootScope", "dateUtils"], t.$inject = ["$rootScope", "$scope", "$routeParams", "$timeout", "$location", "dateUtils", "event", "Event"], n.$inject = ["$scope", "Event"], r.$inject = ["$routeProvider"], angular.module("mofa.events", ["mofa.utils"]).controller("EventsController", e).controller("EventsDayController", t).controller("EventSearchController", n).config(r)
        }(),
        function() {
            "use strict";

            function n(t) {
                this.PAGES = e, t.section = "galleries", t.legendCtrl.hide(), this.onMouseover = function(e) {
                    this.info = e
                }, this.onMouseout = function() {
                    this.info = null
                }
            }

            function r(e, n) {
                this.category = n.category, this.PAGES = t, e.section = "galleries", e.legendCtrl.hide(), this.onMouseover = function(e) {
                    this.info = e
                }, this.onMouseout = function() {
                    this.info = null
                }
            }

            function i(e) {
                var t = [],
                    n = [],
                    r;
                for (r = 0; r < e.length; r++) r % 2 == 0 ? t.push(e[r]) : n.push(e[r]);
                return [t, n]
            }

            function s(n, r, s, o, u, a, f, l) {
                var c = this;
                this.articles = l, this.articleLists = i(l), this.category = s.category, this.subcategory = s.subcategory, this.SUBCATEGORIES = t, this.CATEGORIES = e, this.order = "most recent", n.section = "galleries", n.legendCtrl.setLegend("galleries", this), this.fetchSiblings = function() {
                    this.article.next ? this.next = f.get({
                        id: this.article.next,
                        subcategory: this.subcategory
                    }) : this.next = null
                }, this.setArticle = function(e) {
                    u(function() {
                        c.object = c.article = e, c.article && (c.fetchSiblings(), "short_description" in c.article && (c.article.short_description = o.trustAsHtml(e.short_description)), "content" in c.article && (c.article.content = o.trustAsHtml(e.content))), r.$broadcast("video:reset")
                    })
                }, this.nextArticle = function() {
                    r.$broadcast("slide:next")
                }, this.previousArticle = function() {
                    r.$broadcast("slide:previous")
                }, this.more = function() {
                    r.$broadcast("stopPlaying"), n.lightboxCtrl.setLightbox("article", {
                        article: this.article,
                        category: this.category
                    })
                }, this.jump = function(e) {
                    if (this.article.id == e.id) return;
                    this.next = e, u(function() {
                        c.nextArticle()
                    })
                }, this.setArticle(a)
            }

            function o(e, t) {
                var n = this;
                this.results = null, this.search = function() {
                    this.results = t.query({
                        search: e.query
                    })
                }, e.$watch("query", function(e) {
                    e ? n.search() : n.results = null
                })
            }

            function u(e) {
                e.when("/galleries", {
                    controller: "GalleriesController",
                    controllerAs: "ctrl",
                    templateUrl: "galleries/index.html"
                }).when("/galleries/:category", {
                    controller: "CategoryController",
                    controllerAs: "ctrl",
                    templateUrl: "galleries/category.html"
                }).when("/galleries/:category/whateva", {
                    controller: "SubcategoryController",
                    controllerAs: "ctrl",
                    templateUrl: "galleries/subcategory.html",
                    resolve: {
                        article: ["$route", "$q", "Article",
                            function(e, t, n) {
                                return t(function(t, r) {
                                    n.mostRecent(e.current.params, function(e) {
                                        t(e)
                                    }, function() {
                                        t(null)
                                    })
                                })
                            }
                        ],
                        articles: ["$route", "$q", "Article",
                            function(e, t, n) {
                                return n.query(e.current.params).$promise
                            }
                        ]
                    }
                }).when("/galleries/:category/:subcategory", {
                    controller: "SubcategoryController",
                    controllerAs: "ctrl",
                    templateUrl: "galleries/subcategory.html",
                    resolve: {
                        article: ["$route", "$q", "$location", "Article",
                            function(e, t, n, r) {
                                return "article" in n.search() ? r.get({
                                    id: n.search().article
                                }).$promise : t(function(t, n) {
                                    r.mostRecent(e.current.params, function(e) {
                                        t(e)
                                    }, function() {
                                        t(null)
                                    })
                                })
                            }
                        ],
                        articles: ["$route", "$q", "Article",
                            function(e, t, n) {
                                return n.query(e.current.params).$promise
                            }
                        ]
                    }
                })
            }
            var e = ["read", "watch", "listen", "see"],
                t = ["whateva", "science", "food", "human", "spirit", "nature", "tech"];
            n.$inject = ["$rootScope"], r.$inject = ["$rootScope", "$routeParams"], s.$inject = ["$rootScope", "$scope", "$routeParams", "$sce", "$timeout", "article", "Article", "articles"], o.$inject = ["$scope", "Article"], u.$inject = ["$routeProvider"], angular.module("mofa.galleries", []).controller("GalleriesController", n).controller("CategoryController", r).controller("SubcategoryController", s).controller("ArticleSearchController", o).config(u)
        }(),
        function() {
            "use strict";

            function e(e, t) {
                t.id ? e.path("/checkout/shipping") : e.path("/checkout/authenticate")
            }

            function t(e, t, n, r, i) {
                r.order.hasItems() || i.path("/cart"), e.section = "checkout", e.legendCtrl.hide();
                var s = this;
                this.step = "authenticate", this.angle = 1.57079633, this.user = new t, this.continue = function() {
                    this.loading = !0, this.user.$auth(function(e) {
                        n.setUser(e), r.getCurrent(), i.path("/checkout/shipping")
                    }, function(e) {
                        "data" in e && "detail" in e.data && (s.error = e.data.detail), s.loading = !1
                    })
                }
            }

            function n(e, t, n, r, i) {
                e.section = "checkout", e.legendCtrl.hide(), i.isLogged("/checkout/authenticate"), this.shippingMethods = ["USPS Ground Shipping : FREE", "USPS Priority Shipping: $10"], this.countries = ["United States"], this.step = "shipping", this.angle = 0, this.order = r.order, this.continue = function() {
                    t.error = null, this.loading = !0, this.order.$update(function() {
                        n.path("/checkout/billing")
                    }, function() {
                        console.log("Error", arguments)
                    })
                }
            }

            function r(e, t, n, r, i) {
                e.section = "checkout", e.legendCtrl.hide(), this.step = "billing", this.angle = -1.57079633, this.view = "billing-address", this.order = r.order, this.card = {}, this.countries = ["United States"], this.cardInfo = function() {
                    this.view = "card-info"
                }, this.continue = function() {
                    t.error = null, e.checkoutErr = null, this.loading = !0, this.order.$update(function() {
                        n.path("/checkout/review")
                    }, function() {
                        console.log("Error", arguments)
                    })
                }, this.billAsShippingClick = function() {
                    this.order.bill_as_shipping ? r.order.copyBillingAddress() : r.order.emptyBillingAddress()
                }
            }

            function i(e, t, n, r) {
                e.section = "checkout", e.legendCtrl.hide();
                var i = this;
                r.pending ? r.order.$promise.finally(function(e) {
                    r.order.isReady() || n.path("/checkout")
                }) : r.order.isReady() || n.path("/checkout"), this.complete = !1, this.step = "review", this.angle = -4.71238899, this.order = r.order, this.checkout = function() {
                    r.submit(function() {
                        i.complete = !0
                    }, function(t) {
                        if (angular.isString(t)) switch (t) {
                            case "invalid-payment-data":
                                r.clearPaymentData(), e.checkoutErr = "Invalid payment information!", n.path("/checkout/billing")
                        }
                    })
                }, this.rollerIndex = 0, this.rollerDirection = null, this.rollerUp = function() {
                    this.rollerIndex > 0 && (this.rollerIndex--, this.rollerDirection = "up")
                }, this.rollerDown = function() {
                    this.rollerIndex + 1 < this.order.items.length && (this.rollerIndex++, this.rollerDirection = "down")
                }
            }

            function s(e, t, n, r, i) {
                e.section = "checkout", e.legendCtrl.hide(), this.order = r.order, this.rollerIndex = 0, this.rollerDirection = null, this.rollerUp = function() {
                    this.rollerIndex > 0 && (this.rollerIndex--, this.rollerDirection = "up")
                }, this.rollerDown = function() {
                    this.rollerIndex + 1 < this.order.items.length && (this.rollerIndex++, this.rollerDirection = "down")
                }, this.removeItem = function() {
                    r.removeItem(this.rollerIndex), this.rollerIndex = 0
                }, this.applyCoupon = function() {
                    var e = this;
                    this.couponErr = !1, this.coupon != undefined && this.coupon.trim() != "" ? i.applyCoupon({
                        coupon: this.coupon
                    }, function(t) {
                        e.forceCoupon = !1, r.order = t, e.order = t
                    }, function(t) {
                        "detail" in t.data && (e.couponErr = t.data.detail)
                    }) : this.couponErr = "Enter your coupon please."
                }
            }

            function o(e) {
                e.when("/checkout/review", {
                    controller: "ReviewController",
                    controllerAs: "ctrl",
                    templateUrl: "orders/checkout_review.html"
                }).when("/cart", {
                    controller: "CartController",
                    controllerAs: "ctrl",
                    templateUrl: "orders/cart.html"
                }).when("/checkout/billing", {
                    controller: "BillingController",
                    controllerAs: "ctrl",
                    templateUrl: "orders/checkout_billing.html"
                }).when("/checkout/shipping", {
                    controller: "ShippingController",
                    controllerAs: "ctrl",
                    templateUrl: "orders/checkout_shipping.html"
                }).when("/checkout/authenticate", {
                    controller: "AuthenticateController",
                    controllerAs: "ctrl",
                    templateUrl: "orders/checkout_authenticate.html"
                }).when("/checkout", {
                    controller: "CheckoutController",
                    controllerAs: "ctrl",
                    resolve: {
                        user: ["Session",
                            function(e) {
                                return e.getCurrent()
                            }
                        ]
                    },
                    templateUrl: "orders/checkout.html"
                })
            }
            e.$inject = ["$location", "user"], t.$inject = ["$rootScope", "User", "Session", "Cart", "$location"], n.$inject = ["$rootScope", "$scope", "$location", "Cart", "Session"], r.$inject = ["$rootScope", "$scope", "$location", "Cart", "$timeout"], i.$inject = ["$rootScope", "$scope", "$location", "Cart"], s.$inject = ["$rootScope", "$scope", "$location", "Cart", "Order"], o.$inject = ["$routeProvider"], angular.module("mofa.orders", []).controller("CheckoutController", e).controller("AuthenticateController", t).controller("ShippingController", n).controller("BillingController", r).controller("ReviewController", i).controller("CartController", s).config(o)
        }(),
        function() {
            "use strict";

            function e(e, t) {
                this.page = t, e.pageTitle = this.page.title, e.legendCtrl.hide(), e.section = "pages"
            }

            function t(e, t) {
                this.page = t, e.section = "pages", e.pageTitle = this.page.title, e.legendCtrl.hide(), e.lightboxCtrl.setLightbox("page", this.page)
            }

            function n(e, t, n, r, i) {
                var s = this;
                e.pageTitle = "Mo-News Signup", e.section = "mo-news", e.legendCtrl.hide(), this.subscribe = function() {
                    this.loading = !0, this.subscriber.$save(function() {
                        s.thanks = !0, s.loading = !1
                    }, function() {
                        s.thanks = !0, s.loading = !1
                    })
                }, this.reset = function() {
                    this.subscriber = new i, this.loading = !1, this.thanks = !1, t.$broadcast("circle:emit-scope")
                }, t.$on("circle:scope", function(e, t) {
                    t.$$childHead.signupForm.$setPristine()
                }), this.back = function() {
                    n.history.length > 0 ? n.history.back() : r.path("/")
                }, this.reset()
            }

            function r(e, t, n, r, i, s) {
                var o = this;
                e.pageTitle = "Submit Content", e.section = "contact", e.legendCtrl.hide(), this.submit = function() {
                    this.loading = !0, this.thanks = !0, n.post(s("/submit-content/"), this.info).success(function() {
                        o.thanks = !0
                    }).finally(function() {
                        o.loading = !1
                    })
                }, this.reset = function() {
                    this.info = {}, this.thanks = !1, t.$broadcast("circle:emit-scope")
                }, t.$on("circle:scope", function(e, t) {
                    t.$$childHead.form.$setPristine()
                }), this.back = function() {
                    i.history.length > 0 ? i.history.back() : r.path("/")
                }, this.back = function() {
                    i.history.length > 0 ? i.history.back() : r.path("/")
                }, this.reset()
            }

            function i(e) {
                e.when("/p/:page", {
                    controller: "PagesController",
                    controllerAs: "ctrl",
                    templateUrl: "pages/view.html",
                    resolve: {
                        page: ["$route", "$q", "Page",
                            function(e, t, n) {
                                return t(function(t, r) {
                                    n.query({
                                        name: e.current.params.page
                                    }, function(e) {
                                        t(e[0])
                                    })
                                })
                            }
                        ]
                    }
                }).when("/lp/:page", {
                    controller: "LightPageController",
                    controllerAs: "ctrl",
                    templateUrl: "pages/empty.html",
                    resolve: {
                        page: ["$route", "$q", "Page",
                            function(e, t, n) {
                                return t(function(t, r) {
                                    n.query({
                                        name: e.current.params.page
                                    }, function(e) {
                                        t(e[0])
                                    })
                                })
                            }
                        ]
                    }
                }).when("/mo-news/sign-up", {
                    controller: "MoNewsSignupController",
                    controllerAs: "ctrl",
                    templateUrl: "pages/mo_news.html"
                }).when("/submit-content", {
                    controller: "SubmitContentController",
                    controllerAs: "ctrl",
                    templateUrl: "pages/submit_content.html"
                })
            }
            e.$inject = ["$rootScope", "page"], t.$inject = ["$rootScope", "page"], n.$inject = ["$rootScope", "$scope", "$window", "$location", "Subscriber"], r.$inject = ["$rootScope", "$scope", "$http", "$location", "$window", "api"], i.$inject = ["$routeProvider"], angular.module("mofa.pages", []).controller("PagesController", e).controller("LightPageController", t).controller("MoNewsSignupController", n).controller("SubmitContentController", r).config(i)
        }(),
        function() {
            "use strict";

            function e(e, t, n, r, i) {
                e.section = "account", e.legendCtrl.hide();
                var s = this;
                this.angle = 1.57079633, this.user = new t, this.continue = function() {
                    this.loading = !0, this.user.$auth(function(e) {
                        n.setUser(e), r.getCurrent(), i.path("/ur-account")
                    }, function(e) {
                        "data" in e && "detail" in e.data && (s.error = e.data.detail), s.loading = !1
                    })
                }
            }

            function t(e, t, n) {
                n.isLogged("/ur-account/auth"), e.section = "account", e.legendCtrl.hide();
                var r = this;
                this.step = "profile", this.angle = 1.57079633, this.user = angular.copy(n.user), this.update = function() {
                    n.user.email = this.user.email, n.user.phone = this.user.phone, n.user.password = this.user.password, n.user.$update(function() {
                        r.user = angular.copy(n.user)
                    })
                }
            }

            function n(e, t, n, r) {
                n.isLogged("/ur-account/auth"), e.section = "account", e.legendCtrl.hide();
                var i = this;
                this.step = "shipping", this.angle = 4.71238899, this.countries = ["United States"], this.user = angular.copy(n.user), this.update = function() {
                    n.user.shipping_full_name = this.user.shipping_full_name, n.user.shipping_address = this.user.shipping_address, n.user.shipping_city = this.user.shipping_city, n.user.shipping_state = this.user.shipping_state, n.user.shipping_zip = this.user.shipping_zip, n.user.shipping_country = this.user.shipping_country, n.user.$update(function() {
                        i.user = angular.copy(n.user), r.updateShipping(n.user)
                    })
                }
            }

            function r(e, t, n, r) {
                n.isLogged("/ur-account/auth"), e.section = "account", e.legendCtrl.hide();
                var i = this;
                this.step = "billing", this.angle = -1.57079633, this.countries = ["United States"], this.user = angular.copy(n.user), this.update = function() {
                    n.user.billing_full_name = this.user.billing_full_name, n.user.billing_address = this.user.billing_address, n.user.billing_city = this.user.billing_city, n.user.billing_state = this.user.billing_state, n.user.billing_zip = this.user.billing_zip, n.user.billing_country = this.user.billing_country, n.user.$update(function() {
                        i.user = angular.copy(n.user), r.updateBilling(n.user)
                    })
                }
            }

            function i(e, t, n, r, i) {
                r.isLogged("/ur-account/auth"), e.section = "account", e.legendCtrl.hide();
                var s = this;
                this.step = "orders", this.angle = -3.14159266, this.orders = i, this.setOrder = function(e) {
                    n(function() {
                        s.object = s.order = e, s.rollerIndex = 0;
                        var t = _.indexOf(s.orders, e);
                        s.orders[t - 1] ? s.previous = s.orders[t - 1] : s.previous = null, s.orders[t + 1] ? s.next = s.orders[t + 1] : s.next = null
                    })
                }, this.orders.length > 0 && this.setOrder(this.orders[0]), this.nextOrder = function() {
                    t.$broadcast("slide:next")
                }, this.previousOrder = function() {
                    t.$broadcast("slide:previous")
                }, this.rollerIndex = 0, this.rollerDirection = null, this.rollerUp = function() {
                    this.rollerIndex > 0 && (this.rollerIndex--, this.rollerDirection = "up")
                }, this.rollerDown = function() {
                    this.rollerIndex + 1 < this.order.items.length && (this.rollerIndex++, this.rollerDirection = "down")
                }
            }

            function s(e) {
                e.when("/ur-account", {
                    controller: "AccountController",
                    controllerAs: "ctrl",
                    resolve: {
                        user: ["Session",
                            function(e) {
                                return e.getCurrent()
                            }
                        ]
                    },
                    templateUrl: "users/account.html"
                }).when("/ur-account/shipping", {
                    controller: "AccountShippingController",
                    controllerAs: "ctrl",
                    resolve: {
                        user: ["Session",
                            function(e) {
                                return e.getCurrent()
                            }
                        ]
                    },
                    templateUrl: "users/account_shipping.html"
                }).when("/ur-account/billing", {
                    controller: "AccountBillingController",
                    controllerAs: "ctrl",
                    resolve: {
                        user: ["Session",
                            function(e) {
                                return e.getCurrent()
                            }
                        ]
                    },
                    templateUrl: "users/account_billing.html"
                }).when("/ur-account/orders", {
                    controller: "AccountOrdersController",
                    controllerAs: "ctrl",
                    resolve: {
                        orders: ["Order",
                            function(e) {
                                return e.query({
                                    submitted: "True"
                                }).$promise
                            }
                        ]
                    },
                    templateUrl: "users/account_orders.html"
                }).when("/ur-account/auth", {
                    controller: "AccountAuthController",
                    controllerAs: "ctrl",
                    templateUrl: "users/account_auth.html"
                })
            }
            e.$inject = ["$rootScope", "User", "Session", "Cart", "$location"], t.$inject = ["$rootScope", "$scope", "Session"], n.$inject = ["$rootScope", "$scope", "Session", "Cart"], r.$inject = ["$rootScope", "$scope", "Session", "Cart"], i.$inject = ["$rootScope", "$scope", "$timeout", "Session", "orders"], s.$inject = ["$routeProvider"], angular.module("mofa.users", []).controller("AccountController", t).controller("AccountShippingController", n).controller("AccountBillingController", r).controller("AccountAuthController", e).controller("AccountOrdersController", i).config(s)
        }(),
        function() {
            "use strict";

            function e(e, t, n) {
                var r = angular.element(e);
                return {
                    scope: {
                        elements: "@",
                        sElements: "@",
                        circleClass: "@",
                        angle: "@",
                        sAngle: "@",
                        padding: "@",
                        sPadding: "@",
                        vPadding: "@",
                        legend: "@",
                        ctrl: "=",
                        three: "@",
                        extra: "@"
                    },
                    transclude: !0,
                    controller: ["$scope", "STATIC_URL",
                        function(e, t) {
                            e.STATIC_URL = t
                        }
                    ],
                    link: function(e, i, s) {
                        n(e, {
                            angle: 0,
                            sAngle: .26,
                            tAnngle: .2,
                            padding: 350,
                            sPadding: 40,
                            tPadding: 40,
                            vPadding: 150,
                            legend: !1
                        });
                        var o = e.recircle = function() {
                            t(function() {
                                window.M.recircle(i), window.M.contentCenter()
                            })
                        };
                        r.on("resize", o), e.$on("$destroy", function() {
                            r.off("resize", o)
                        }), e.$on("mRecircle", o), t(function() {
                            window.M.updateBG()
                        }, 500), e.elements || e.recircle(), e.$on("circle:emit-scope", function(t) {
                            e.$emit("circle:scope", e)
                        })
                    },
                    templateUrl: function(e, t) {
                        return t.three ? "directives/circle_3.html" : "directives/circle.html"
                    }
                }
            }

            function t() {
                return {
                    scope: {
                        ctrl: "=",
                        template: "@",
                        onSlideFinish: "&",
                        onAnimationStart: "&",
                        onAnimationEnd: "&"
                    },
                    link: function(e, t, n) {
                        t.attr("id", "event-slide"), e.previous = function() {
                            var n = t.find(".current"),
                                r = t.find(".previous"),
                                i = _.after(2, function() {
                                    n.css("left", 0), r.css("left", "-100%"), e.onSlideFinish({
                                        data: e.ctrl.previous
                                    }), e.onAnimationEnd()
                                });
                            n.animate({
                                left: "100%"
                            }, i), r.animate({
                                left: 0
                            }, i), e.onAnimationStart()
                        }, e.next = function() {
                            var n = t.find(".current"),
                                r = t.find(".next"),
                                i = _.after(2, function() {
                                    n.css("left", 0), r.css("left", "100%"), e.onSlideFinish({
                                        data: e.ctrl.next
                                    }), e.onAnimationEnd()
                                });
                            n.animate({
                                left: "-100%"
                            }, i), r.animate({
                                left: 0
                            }, i), e.onAnimationStart()
                        }, e.$on("slide:next", e.next), e.$on("slide:previous", e.previous)
                    },
                    templateUrl: "directives/m_circle_slides.html"
                }
            }

            function n() {
                return {
                    scope: {
                        ctrl: "=",
                        data: "=",
                        template: "="
                    },
                    template: '<ng-include src="template"></ng-include>'
                }
            }

            function r(e) {
                return {
                    scope: {
                        selected: "="
                    },
                    link: function(t, n, r) {
                        var i = 2015,
                            s = (new Date).getFullYear() + 1,
                            o;
                        t.years = [];
                        for (o = s; o >= i; o--) t.years.push(o);
                        t.$watch("visible", function(t) {
                            t &&
                                e(function() {
                                    n.find(".nano").nanoScroller()
                                })
                        }), t.setYear = function(e) {
                            t.selected = e, t.visible = !1
                        }
                    },
                    templateUrl: "directives/year_select.html"
                }
            }

            function i(e) {
                return {
                    scope: {
                        selected: "="
                    },
                    link: function(t, n, r) {
                        t.orders = ["most recent"], t.$watch("visible", function(t) {
                            t && e(function() {
                                n.find(".nano").nanoScroller()
                            })
                        }), t.setOrder = function(e) {
                            t.selected = e, t.visible = !1
                        }
                    },
                    templateUrl: "directives/order_select.html"
                }
            }

            function s(e) {
                return {
                    require: "ngModel",
                    scope: {
                        options: "=",
                        empty: "@"
                    },
                    link: function(t, n, r, i) {
                        i.$render = function() {
                            t.selected = i.$modelValue
                        }, t.$watch("visible", function(t) {
                            t && e(function() {
                                n.find(".nano").nanoScroller()
                            })
                        }), t.changeOption = function(e) {
                            t.visible = !1, t.selected = e, i.$setViewValue(e)
                        }
                    },
                    templateUrl: "directives/mf_select.html"
                }
            }

            function o() {
                return {
                    scope: {
                        link: "=",
                        height: "@"
                    },
                    link: function(e, t, n) {
                        function r() {
                            var t = e.link;
                            e.playing = !1, e.height || (e.height = "100%"), t.search("youtube") > -1 ? (angular.forEach(t.split("?")[1].split("&"), function(e) {
                                e = e.split("="), e[0] == "v" && (t = e[1])
                            }), t = "https://www.youtube.com/embed/" + t) : t.search("vimeo") > -1 && (t = t.split("?")[0].split("/"), t = t[t.length - 1], t = "https://player.vimeo.com/video/" + t), e.url = t + "?autoplay=1"
                        }
                        e.$watch("link", function() {
                            e.playing = !1, r()
                        }), e.$on("stopPlaying", function(t) {
                            e.playing = !1
                        })
                    },
                    templateUrl: "directives/media_video.html"
                }
            }

            function u() {
                return {
                    scope: {
                        link: "="
                    },
                    link: function(e, t, n) {
                        e.$watch("link", function() {
                            e.playing = !1
                        })
                    },
                    templateUrl: "directives/media_audio.html"
                }
            }

            function a() {
                return {
                    require: "ngModel",
                    link: function(e, t, n, r) {
                        var i = r.$validators.match = function(t, r) {
                            var i = e.$eval(n.passwordMatch);
                            return i == t
                        };
                        e.$watch(n.passwordMatch, function(t) {
                            r.$setValidity("match", i(e.match, t))
                        })
                    }
                }
            }

            function f(e) {
                e.classNameFilter("/^(hvr-pop)/")
            }
            r.$inject = ["$timeout"], i.$inject = ["$timeout"], s.$inject = ["$timeout"], angular.module("mofa.directives", []).directive("mCircle", ["$window", "$timeout", "defaults", e]).directive("mCircleSlides", t).directive("mSlide", n).directive("yearSelect", r).directive("orderSelect", i).directive("mfSelect", s).directive("mediaVideo", o).directive("mediaAudio", u).directive("passwordMatch", a).config(["$animateProvider", f])
        }(),
        function() {
            "use strict";

            function e(e, t, n) {
                var r = e(t("/events/:id/"), {
                    id: "@id"
                }, {
                    getLast: {
                        url: t("/events/last/")
                    }
                });
                return r.prototype.getMonth = function() {
                    var e = new Date(this.datetime);
                    return n.MONTHS[e.getMonth()]
                }, r
            }

            function t(e, t) {
                var n = e(t("/articles/:id/"), {
                    id: "@id"
                }, {
                    mostRecent: {
                        url: t("/articles/most_recent/"),
                        method: "GET"
                    }
                });
                return n
            }

            function n(e, t) {
                var n = e(t("/pages/:id/"), {
                    id: "@id"
                });
                return n
            }

            function r(e, t) {
                var n = e(t("/subscribers/:id/"), {
                    id: "@id"
                });
                return n
            }

            function i(e, t) {
                var n = e(t("/categories/:id/"), {
                    id: "@id"
                }, {
                    siblings: {
                        url: t("/categories/:id/siblings/"),
                        method: "GET",
                        isArray: !0
                    }
                });
                return n.prototype.getLink = function() {
                    var e = "/e-market/" + this.id;
                    return this.has_children || (e += "/products"), e
                }, n
            }

            function s(e, t) {
                var n = e(t("/products/:id/"), {
                    id: "@id"
                });
                return n.prototype.setColor = function(e) {
                    this.color = e
                }, n.prototype.setSize = function(e) {
                    this.size = e
                }, n.prototype.getImage = function() {
                    var e = null,
                        t = this.color,
                        n = this.size;
                    return t && (e = _.chain(this.stocks).filter(function(e) {
                        return e.image != null
                    }).find(function(e) {
                        var r = e.color.id == t.id;
                        return r && n ? e.size.id == n.id : r
                    }).value()), e ? e : _.first(this.images)
                }, n.prototype.getSizes = function() {
                    var e = this.color,
                        t = _.chain(this.stocks);
                    return e && (t = t.filter(function(t) {
                        return t.color.id == e.id
                    })), t.map(function(e) {
                        return e.size
                    }).uniq(function(e) {
                        return e.id
                    }).value()
                }, n.prototype.getColors = function() {
                    return _.chain(this.stocks).map(function(e) {
                        return e.color
                    }).uniq(function(e) {
                        return e.id
                    }).value()
                }, n.prototype.getStock = function() {
                    var e = this.color,
                        t = this.size;
                    return !e || !t ? null : _.chain(this.stocks).find(function(n) {
                        return n.color.id == e.id && n.size.id == t.id
                    }).value()
                }, n
            }

            function o(e, t, n, r) {
                var i = e(t("/orders/:id/"), {
                    id: "@id"
                }, {
                    getCurrent: {
                        url: t("/orders/current/"),
                        method: "GET"
                    },
                    update: {
                        method: "PUT"
                    },
                    submit: {
                        url: t("/orders/submit/"),
                        method: "POST"
                    },
                    applyCoupon: {
                        url: t("/orders/apply_coupon/"),
                        method: "POST"
                    }
                });
                return i.prototype.getSubtotal = function(e) {
                    var t = this.items[e];
                    return t.quantity * t.price
                }, i.prototype.getSubtotal = function() {
                    return _.reduce(this.items, function(e, t) {
                        return e + t.price * t.quantity
                    }, 0)
                }, i.prototype.getTotal = function() {
                    if (this.submitted) return this.total;
                    var e = this.getSubtotal();
                    return this.voucher && (e -= this.discount), e += this.getTax(e), e += this.getShipping(), e
                }, i.prototype.getTax = function(e) {
                    return this.submitted ? this.tax : (typeof e == "undefined" && (e = this.getSubtotal()), e * r / 100)
                }, i.prototype.getShipping = function() {
                    return this.submitted ? this.shipping : this.shipping_method ? this.shipping_method.search(/FREE/ig) > -1 ? 0 : 10 : 0
                }, i.prototype.hasShipping = function() {
                    return this.shipping_full_name && this.shipping_address && this.shipping_city && this.shipping_state && this.shipping_zip && this.shipping_country
                }, i.prototype.hasBilling = function() {
                    var e = this.bill_as_shipping || this.billing_full_name && this.billing_address && this.billing_city && this.billing_state && this.billing_zip && this.billing_country,
                        t = !0;
                    return e && t
                }, i.prototype.hasItems = function() {
                    return this.items && this.items.length > 0
                }, i.prototype.isReady = function() {
                    var e = this.user && n.user && this.user == n.user.id,
                        t = this.card_number && this.card_month && this.card_year && this.card_cvv;
                    return e && this.hasItems() && t && this.hasShipping() && this.hasBilling()
                }, i.prototype.copyBillingAddress = function() {
                    this.billing_full_name = this.shipping_full_name, this.billing_address = this.shipping_address, this.billing_city = this.shipping_city, this.billing_state = this.shipping_state, this.billing_zip = this.shipping_zip, this.billing_country = this.shipping_country
                }, i.prototype.emptyBillingAddress = function() {
                    n.isLogged() ? (this.billing_full_name = n.user.billing_full_name, this.billing_address = n.user.billing_address, this.billing_city = n.user.billing_city, this.billing_state = n.user.billing_state, this.billing_zip = n.user.billing_zip, this.billing_country = n.user.billing_country) : (this.billing_full_name = "", this.billing_address = "", this.billing_city = "", this.billing_state = "", this.billing_zip = "", this
                        .billing_country = "")
                }, i
            }

            function u(e, t) {
                var n = e(t("/orders/items/:id/"), {
                    id: "@id"
                }, {
                    add: {
                        url: t("/orders/items/add/"),
                        method: "POST"
                    }
                });
                return n
            }

            function a(e, t) {
                var n = e(t("/users/:id/"), {
                    id: "@id"
                }, {
                    getCurrent: {
                        url: t("/users/current/"),
                        method: "GET"
                    },
                    auth: {
                        url: t("/users/auth/"),
                        method: "POST"
                    },
                    update: {
                        method: "PUT"
                    }
                });
                return n
            }

            function f(e) {
                e.defaults.stripTrailingSlashes = !1
            }
            e.$inject = ["$resource", "api", "dateUtils"], t.$inject = ["$resource", "api"], n.$inject = ["$resource", "api"], r.$inject = ["$resource", "api"], i.$inject = ["$resource", "api"], s.$inject = ["$resource", "api"], o.$inject = ["$resource", "api", "Session", "taxValue"], u.$inject = ["$resource", "api"], a.$inject = ["$resource", "api"], f.$inject = ["$resourceProvider"], angular.module("mofa.resources", ["mofa.utils"]).factory("Event", e).factory("Article", t).factory("Page", n).factory("Subscriber", r).factory("Category", i).factory("Product", s).factory("Order", o).factory("Item", u).factory("User", a).config(f)
        }(),
        function() {
            "use strict";

            function e() {
                return function(e, t) {
                    for (var n in t) e[n] == undefined && (e[n] = t[n])
                }
            }

            function t() {
                return {
                    MONTHS: [{
                        title: "January",
                        image: "jan",
                        index: 1
                    }, {
                        title: "February",
                        image: "feb",
                        index: 2
                    }, {
                        title: "March",
                        image: "mar",
                        index: 3
                    }, {
                        title: "April",
                        image: "apr",
                        index: 4
                    }, {
                        title: "May",
                        image: "may",
                        index: 5
                    }, {
                        title: "June",
                        image: "jun",
                        index: 6
                    }, {
                        title: "July",
                        image: "jul",
                        index: 7
                    }, {
                        title: "August",
                        image: "aug",
                        index: 8
                    }, {
                        title: "September",
                        image: "sept",
                        index: 9
                    }, {
                        title: "October",
                        image: "oct",
                        index: 10
                    }, {
                        title: "November",
                        image: "nov",
                        index: 11
                    }, {
                        title: "December",
                        image: "dec",
                        index: 12
                    }],
                    daysInMonth: function(e, t) {
                        t = t || this.getYear();
                        var n = new Date(t, e, 0);
                        return n.getDate()
                    },
                    splitLists: function(e, t) {
                        var n = this.daysInMonth(e, t),
                            r = [],
                            i = [],
                            s = !0,
                            o, u = Math.round(n / 2) + (n > 28 && n % 2 == 0 ? 1 : 0),
                            a = !1;
                        for (o = 1; o <= 30; o++) o % 2 == 0 ? i.push(o) : r.push(o), o == 16 && r.push(this.MONTHS[e - 1]);
                        return i.push(31), [r, i]
                    },
                    getYear: function() {
                        return (new Date).getFullYear()
                    }
                }
            }

            function n() {
                return function(e) {
                    return "/api" + e
                }
            }

            function r(e, t) {
                function n() {
                    this.order = null, this.pending = !1
                }
                return n.prototype.getCurrent = function(t) {
                    var n = this;
                    this.pending = !0, this.order = e.getCurrent(function(e) {
                        n.pending = !1, t && t(e)
                    })
                }, n.prototype.addItem = function(e, n) {
                    var r = {
                        product: e.product,
                        stock: e.id,
                        quantity: n
                    };
                    return t.add(r, _.bind(this.onItemAdded, this), function() {
                        console.log("Error saving data!")
                    })
                }, n.prototype.onItemAdded = function(e) {
                    var t = _.find(this.order.items, function(t, n) {
                        return t.id == e.id
                    });
                    t ? t.quantity = e.quantity : this.order.items.push(e)
                }, n.prototype.removeItem = function(e) {
                    var n = new t(this.order.items[e]),
                        r = this;
                    n.$delete(function() {
                        r.order.items.splice(e, 1)
                    })
                }, n.prototype.updateItem = function() {}, n.prototype.submit = function(e, t) {
                    var n = this;
                    this.order.$submit(function() {
                        n.getCurrent(function(t) {
                            e && e(t)
                        })
                    }, function(e) {
                        "detail" in e.data ? t && t(e.data.detail) : t(e.data)
                    })
                }, n.prototype.clearPaymentData = function() {
                    this.order.card_number = null, this.order.card_month = null, this.order.card_year = null, this.order.card_cvv = null
                }, n.prototype.updateShipping = function(e) {
                    this.order.shipping_full_name = e.shipping_full_name, this.order.shipping_address = e.shipping_address, this.order.shipping_city = e.shipping_city, this.order.shipping_state = e.shipping_state, this.order.shipping_zip = e.shipping_zip, this.order.shipping_country = e.shipping_country, this.order.$update()
                }, n.prototype.updateBilling = function(e) {
                    this.order.billing_full_name = e.billing_full_name, this.order.billing_address = e.billing_address, this.order.billing_city = e.billing_city, this.order.billing_state = e.billing_state, this.order.billing_zip = e.billing_zip, this.order.billing_country = e.billing_country, this.order.$update()
                }, new n
            }

            function i(e, t) {
                function n() {
                    this.user = t.getCurrent()
                }
                return n.prototype.getCurrent = function() {
                    return this.user ? this.user.$resolved ? this.user : this.user.$promise : this.user
                }, n.prototype.setUser = function(e) {
                    this.user = e
                }, n.prototype.isLogged = function(t) {
                    return t && (!this.user || !this.user.id) && e.path(t), this.user && this.user.id
                }, new n
            }

            function s(e, t) {
                e.getCurrent()
            }
            r.$inject = ["Order", "Item"], i.$inject = ["$location", "User"], s.$inject = ["Cart", "Session"], angular.module("mofa.utils", []).factory("defaults", [e]).factory("dateUtils", [t]).factory("api", n).service("Cart", r).service("Session", i).run(s)
        }(),
        function() {
            "use strict";

            function e(e) {}

            function t(e) {
                e.section = "home", e.legendCtrl.hide();
                var t = this;
                this.PAGES = [{
                    name: "Galleries",
                    icon: "a",
                    url: "/galleries"
                }, {
                    name: "About",
                    icon: "d",
                    url: "/p/about"
                }, {
                    name: "e_market",
                    icon: "c",
                    url: "/e-market"
                }, {
                    name: "events",
                    icon: "b",
                    url: "/human-garden"
                }], this.info = null, this.onMouseover = function(e) {
                    this.info = e.name
                }, this.onMouseout = function(e) {
                    this.info = null
                }
            }

            function n(e) {
                e.legendCtrl = this, this.show = !1, this.setLegend = function(e, t) {
                    var n = "legend/" + e + ".html";
                    n != this.element ? this.element = n : this.show = !0, this.data = t
                }, this.loaded = function() {
                    this.show = !0
                }, this.hide = function() {
                    this.show = !1
                }
            }

            function r(e, t) {
                var n = this;
                e.lightboxCtrl = this, this.show = !1, this.element = null, this.setLightbox = function(e, t) {
                    var n = "lightbox/" + e + ".html";
                    n != this.element ? this.element = n : this.setShow(!0), this.data = t
                }, this.loaded = function() {
                    this.setShow(!0), t(function() {
                        angular.element("#lightbox .nano").nanoScroller()
                    }, 1e3)
                }, this.hide = function() {
                    this.show && this.setShow(!1)
                }, this.setShow = function(e) {
                    t(function() {
                        n.show = e, n.show || t(function() {
                            n.element = null
                        }, 1e3)
                    })
                }, this.carousel = function() {
                    angular.element(".carousel").carousel()
                }
            }

            function i(e, t, n, r, i) {
                var s = this;
                this.searching = !1, this.search = function() {
                    this.searching = !0, n.get(i("/search/"), {
                        params: {
                            search: this.query
                        }
                    }).then(function(e) {
                        s.results = e.data
                    }, function() {
                        console.log("Failure!")
                    }).finally(function() {
                        s.searching = !1
                    }), e.lightboxCtrl.setLightbox("search", this)
                }
            }

            function s(e, t, n, r, i) {
                e.when("/", {
                    controller: "HomeController",
                    templateUrl: "home.html",
                    controllerAs: "ctrl"
                }).otherwise("/"), i.defaults.xsrfCookieName = "csrftoken", i.defaults.xsrfHeaderName = "X-CSRFToken", n.resourceUrlWhitelist(["self", "https://www.youtube.com/embed/**", "https://player.vimeo.com/video/**"]), t.html5Mode(!0), r.enabled(!1)
            }

            function o(e, t, n, r, i) {
                e.lightboxShow = !1, angular.forEach(window
                    .TEMPLATE_CACHE,
                    function(e, n) {
                        t.put(n + ".html", e)
                    }), n(function() {
                    e.loaded = !0
                }), e.STATIC_URL = r
            }
            window.template = function(e) {
                return e
            }, e.$inject = ["$rootScope"], t.$inject = ["$rootScope"], n.$inject = ["$rootScope"], r.$inject = ["$rootScope", "$timeout"], i.$inject = ["$rootScope", "$scope", "$http", "$location", "api"], s.$inject = ["$routeProvider", "$locationProvider", "$sceDelegateProvider", "$sceProvider", "$httpProvider"], o.$inject = ["$rootScope", "$templateCache", "$timeout", "STATIC_URL"], angular.module("mofa", ["ngRoute", "ngResource", "ngAnimate", "ngSanitize", "ngMessages", "mofa.settings", "mofa.directives", "mofa.utils", "mofa.resources", "mofa.events", "mofa.galleries", "mofa.pages", "mofa.e_market", "mofa.orders", "mofa.users"]).controller("BaseController", e).controller("HomeController", t).controller("LegendController", n).controller("LightboxController", r).controller("GlobalSearchController", i).config(s).run(o)
        }(), window.M = window.M || {},
        function() {
            function t() {
                var e = $("#nav"),
                    t = e.find("nav");
                t.css("margin-top", (e.height() - t.position().top) / 2 - t.height())
            }
            _.templateSettings = {
                interpolate: /\{\{(.+?)\}\}/g
            };
            var e = [];
            window.M.updateBG = function() {
                _.each(e, function(e) {
                    e()
                })
            }, window.M.recircle = function(t) {
                e = [];
                var n = $(window);
                t.find(".circle").each(function(t) {
                    var r = $(this),
                        i = r.data(),
                        s = r.hasClass("inner"),
                        o = s ? r.parent() : n,
                        u = o.width(),
                        a = o.height(),
                        f = r.find("> ng-include .r"),
                        l = parseFloat(i.angle),
                        c = 2 * Math.PI / f.length,
                        h = s ? a : a - i.vPadding,
                        p = u - parseInt(i.padding) * 2,
                        d, v = {
                            width: n.width(),
                            height: n.height()
                        },
                        m = 0,
                        g = r.parents(".view");
                    v.width <= 1400 && !s && (p = u - i.padding, i.legend && (m = i.padding / 2 - 50)), r.show(), p = p > h ? h : p, d = p / 2, r.css({
                        width: p,
                        height: p,
                        left: (u - p) / 2 - m,
                        top: (a - p) / 2
                    }), f.each(function() {
                        function s() {
                            var e = t.offset(),
                                n = g.offset();
                            i.css({
                                width: v.width,
                                height: v.height,
                                top: -e.top + n.top,
                                left: -e.left + n.left
                            })
                        }
                        var t = $(this),
                            n = t.width(),
                            r = t.height(),
                            i = t.find(".o");
                        t.show(), t.css({
                            left: d + d * Math.cos(l) - n / 2,
                            top: d + d * Math.sin(l) - r / 2
                        }), l += c, e.push(s)
                    }), window.M.updateBG(), $('[data-toggle="tooltip"]').tooltip()
                })
            }, window.M.animateSVG = function(e, t) {
                function i(e) {
                    return e * Math.PI / 180
                }

                function s(e) {
                    return Math.round(f + f * Math.cos(i(e)))
                }

                function o(e) {
                    return Math.round(f + f * Math.sin(i(e)))
                }

                function l(e, n, r) {
                    return (t ? !e : e) ? n : r
                }
                var n = e.find(".circle").first(),
                    r = $('<svg width="100%" height="100%"><path fill="#6f268c" stroke="none" /></svg>').appendTo(n),
                    u = r.find("path"),
                    a = r.width(),
                    f = a / 2;
                u.attr({
                    r: 360
                });
                var c = _.template("M{{ w }} {{ r }} A{{ r }} {{ r }}, 0 {{ l }} {{ sw }}, {{ x }} {{ y }} L {{ r }} {{ r }} Z");
                u.attr({
                    r: 0
                }), u.animate({
                    r: 359
                }, {
                    duration: 1e3,
                    easing: "linear",
                    step: function(e) {
                        console.log(e), u.attr("d", c({
                            l: l(e > 180, 1, 0),
                            sw: 0,
                            w: a,
                            r: f,
                            x: s(t ? e : 360 - e),
                            y: o(t ? e : 360 - e)
                        }))
                    },
                    complete: function() {
                        r.hide()
                    }
                })
            }, window.M.contentCenter = function() {
                setTimeout(function() {
                    var e = $(".view.ng-enter"),
                        t;
                    e.length == 0 ? t = $(".circle .content") : t = e.find(".circle .content");
                    if (t.length == 0) return;
                    var n = t.find(".circle-container"),
                        r = t.height(),
                        i = n.height();
                    i > 0 && i < r && n.css("margin-top", (r - i) / 2), n.addClass("visible")
                }, 300)
            }, t(), $(window).on("resize", _.debounce(t, 200))
        }(), jQuery(function(e) {
            e(document).on("mouseenter", ".r.effect", function() {
                var t = e(this);
                t.data("removing", !1), _.delay(function() {
                    t.data("removing") || t.addClass("visible")
                }, 300)
            }).on("mouseleave", ".r.effect", function() {
                var t = e(this);
                t.data("removing", !0), t.removeClass("visible")
            })
        })
}.call(this);
