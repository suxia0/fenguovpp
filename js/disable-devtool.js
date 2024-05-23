! function(e, t) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define &&
		define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).DisableDevtool = t()
}(this, function() {
	"use strict";

	function o(e) {
		return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
			return typeof e
		} : function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ?
				"symbol" : typeof e
		})(e)
	}

	function i(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function r(e, t) {
		for (var n = 0; n < t.length; n++) {
			var i = t[n];
			i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object
				.defineProperty(e, i.key, i)
		}
	}

	function u(e, t, n) {
		t && r(e.prototype, t), n && r(e, n), Object.defineProperty(e, "prototype", {
			writable: !1
		})
	}

	function e(e, t, n) {
		t in e ? Object.defineProperty(e, t, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = n
	}

	function n(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError(
			"Super expression must either be null or a function");
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				writable: !0,
				configurable: !0
			}
		}), Object.defineProperty(e, "prototype", {
			writable: !1
		}), t && a(e, t)
	}

	function c(e) {
		return (c = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}

	function a(e, t) {
		return (a = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}

	function H(e, t) {
		if (t && ("object" == typeof t || "function" == typeof t)) return t;
		if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
		t = e;
		if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return t
	}

	function l(n) {
		var i = function() {
			if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
			} catch (e) {
				return !1
			}
		}();
		return function() {
			var e, t = c(n);
			return H(this, i ? (e = c(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this,
				arguments))
		}
	}

	function f(e, t) {
		(null == t || t > e.length) && (t = e.length);
		for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
		return i
	}

	function s(e, t) {
		var n, i = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
		if (!i) {
			if (Array.isArray(e) || (i = function(e, t) {
					if (e) {
						if ("string" == typeof e) return f(e, t);
						var n = Object.prototype.toString.call(e).slice(8, -1);
						return "Map" === (n = "Object" === n && e.constructor ? e.constructor.name : n) ||
							"Set" === n ? Array.from(e) : "Arguments" === n ||
							/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? f(e, t) : void 0
					}
				}(e)) || t && e && "number" == typeof e.length) return i && (e = i), n = 0, {
				s: t = function() {},
				n: function() {
					return n >= e.length ? {
						done: !0
					} : {
						done: !1,
						value: e[n++]
					}
				},
				e: function(e) {
					throw e
				},
				f: t
			};
			throw new TypeError(
				"Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
				)
		}
		var o, r = !0,
			u = !1;
		return {
			s: function() {
				i = i.call(e)
			},
			n: function() {
				var e = i.next();
				return r = e.done, e
			},
			e: function(e) {
				u = !0, o = e
			},
			f: function() {
				try {
					r || null == i.return || i.return()
				} finally {
					if (u) throw o
				}
			}
		}
	}

	function t() {
		if (d.url) window.location.href = d.url;
		else if (d.rewriteHTML) try {
			document.documentElement.innerHTML = d.rewriteHTML
		} catch (e) {
			document.documentElement.innerText = d.rewriteHTML
		} else {
			try {
				window.opener = null, window.open("", "_self"), window.close(), window.history.back()
			} catch (e) {
				console.log(e)
			}
			setTimeout(function() {
				window.location.href = d.timeOutUrl ||
					"https://theajack.github.io/disable-devtool/404.html?h=".concat(encodeURIComponent(
						location.host))
			}, 500)
		}
	}
	var d = {
			md5: "",
			ondevtoolopen: t,
			ondevtoolclose: null,
			url: "",
			timeOutUrl: "",
			tkName: "ddtk",
			interval: 500,
			disableMenu: !0,
			stopIntervalTime: 5e3,
			clearIntervalWhenDevOpenTrigger: !1,
			detectors: [0, 1, 3, 4, 5, 6, 7],
			clearLog: !0,
			disableSelect: !1,
			disableCopy: !1,
			disableCut: !1,
			disablePaste: !1,
			ignore: null,
			disableIframeParents: !0,
			seo: !0,
			rewriteHTML: ""
		},
		U = ["detectors", "ondevtoolclose", "ignore"];

	function q(e) {
		var t, n = 0 < arguments.length && void 0 !== e ? e : {};
		for (t in d) {
			var i = t;
			void 0 === n[i] || o(d[i]) !== o(n[i]) && -1 === U.indexOf(i) || (d[i] = n[i])
		}
		"function" == typeof d.ondevtoolclose && !0 === d.clearIntervalWhenDevOpenTrigger && (d
			.clearIntervalWhenDevOpenTrigger = !1, console.warn(
				"【DISABLE-DEVTOOL】clearIntervalWhenDevOpenTrigger 在使用 ondevtoolclose 时无效"))
	}

	function v() {
		return (new Date).getTime()
	}

	function z(e) {
		var t = v();
		return e(), v() - t
	}

	function B(n, i) {
		function e(t) {
			return function() {
				n && n();
				var e = t.apply(void 0, arguments);
				return i && i(), e
			}
		}
		var t = window.alert,
			o = window.confirm,
			r = window.prompt;
		try {
			window.alert = e(t), window.confirm = e(o), window.prompt = e(r)
		} catch (e) {}
	}
	var p = {
		iframe: !1,
		pc: !1,
		qqBrowser: !1,
		firefox: !1,
		macos: !1,
		edge: !1,
		oldEdge: !1,
		ie: !1,
		iosChrome: !1,
		iosEdge: !1,
		chrome: !1,
		seoBot: !1,
		mobile: !1
	};

	function W() {
		function e(e) {
			return -1 !== t.indexOf(e)
		}
		var t = navigator.userAgent.toLowerCase(),
			n = function() {
				var e = navigator,
					t = e.platform,
					e = e.maxTouchPoints;
				if ("number" == typeof e) return 1 < e;
				if ("string" == typeof t) {
					e = t.toLowerCase();
					if (/(mac|win)/i.test(e)) return !1;
					if (/(android|iphone|ipad|ipod|arch)/i.test(e)) return !0
				}
				return /(iphone|ipad|ipod|ios|android)/i.test(navigator.userAgent.toLowerCase())
			}(),
			i = !!window.top && window !== window.top,
			o = !n,
			r = e("qqbrowser"),
			u = e("firefox"),
			c = e("macintosh"),
			a = e("edge"),
			l = a && !e("chrome"),
			f = l || e("trident") || e("msie"),
			s = e("crios"),
			d = e("edgios"),
			v = e("chrome") || s,
			h = !n &&
			/(googlebot|baiduspider|bingbot|applebot|petalbot|yandexbot|bytespider|chrome\-lighthouse|moto g power)/i
			.test(t);
		Object.assign(p, {
			iframe: i,
			pc: o,
			qqBrowser: r,
			firefox: u,
			macos: c,
			edge: a,
			oldEdge: l,
			ie: f,
			iosChrome: s,
			iosEdge: d,
			chrome: v,
			seoBot: h,
			mobile: n
		})
	}

	function M() {
		for (var e = function() {
				for (var e = {}, t = 0; t < 500; t++) e["".concat(t)] = "".concat(t);
				return e
			}(), t = [], n = 0; n < 50; n++) t.push(e);
		return t
	}
	var h, y, K, b = window.console || {
		log: function() {},
		table: function() {},
		clear: function() {}
	};

	function w() {
		d.clearLog && K()
	}
	var V = "",
		F = !1;

	function X() {
		var e = d.ignore;
		if (e) {
			if ("function" == typeof e) return e();
			if (0 !== e.length) {
				var t = location.href;
				if (V === t) return F;
				V = t;
				var n, i = !1,
					o = s(e);
				try {
					for (o.s(); !(n = o.n()).done;) {
						var r = n.value;
						if ("string" == typeof r) {
							if (-1 !== t.indexOf(r)) {
								i = !0;
								break
							}
						} else if (r.test(t)) {
							i = !0;
							break
						}
					}
				} catch (e) {
					o.e(e)
				} finally {
					o.f()
				}
				return F = i
			}
		}
	}
	var N = function() {
		return !1
	};

	function g(n) {
		var t, e, i = 74,
			o = 73,
			r = 85,
			u = 83,
			c = 123,
			a = p.macos ? function(e, t) {
				return e.metaKey && e.altKey && (t === o || t === i)
			} : function(e, t) {
				return e.ctrlKey && e.shiftKey && (t === o || t === i)
			},
			l = p.macos ? function(e, t) {
				return e.metaKey && e.altKey && t === r || e.metaKey && t === u
			} : function(e, t) {
				return e.ctrlKey && (t === u || t === r)
			};
		n.addEventListener("keydown", function(e) {
				var t = (e = e || n.event).keyCode || e.which;
				if (t === c || a(e, t) || l(e, t)) return T(n, e)
			}, !0), t = n, d.disableMenu && t.addEventListener("contextmenu", function(e) {
				if ("touch" !== e.pointerType) return T(t, e)
			}), e = n, d.disableSelect && m(e, "selectstart"), e = n, d.disableCopy && m(e, "copy"), e = n, d
			.disableCut && m(e, "cut"), e = n, d.disablePaste && m(e, "paste")
	}

	function m(t, e) {
		t.addEventListener(e, function(e) {
			return T(t, e)
		})
	}

	function T(e, t) {
		if (!X() && !N()) return (t = t || e.event).returnValue = !1, t.preventDefault(), !1
	}
	var O, D = !1,
		S = {};

	function $(e) {
		S[e] = !1
	}

	function G() {
		for (var e in S)
			if (S[e]) return D = !0;
		return D = !1
	}(_ = O = O || {})[_.Unknown = -1] = "Unknown", _[_.RegToString = 0] = "RegToString", _[_.DefineId = 1] =
		"DefineId", _[_.Size = 2] = "Size", _[_.DateToString = 3] = "DateToString", _[_.FuncToString = 4] =
		"FuncToString", _[_.Debugger = 5] = "Debugger", _[_.Performance = 6] = "Performance", _[_.DebugLib = 7] =
		"DebugLib";
	var k = function() {
			function n(e) {
				var t = e.type,
					e = e.enabled,
					e = void 0 === e || e;
				i(this, n), this.type = O.Unknown, this.enabled = !0, this.type = t, this.enabled = e, this
					.enabled && (t = this, Z.push(t), this.init())
			}
			return u(n, [{
				key: "onDevToolOpen",
				value: function() {
					var e;
					console.warn("You don't have permission to use DEVTOOL!【type = ".concat(this
							.type, "】")), d.clearIntervalWhenDevOpenTrigger && ne(), window
						.clearTimeout(Q), d.ondevtoolopen(this.type, t), e = this.type, S[e] = !0
				}
			}, {
				key: "init",
				value: function() {}
			}]), n
		}(),
		Y = function() {
			n(t, k);
			var e = l(t);

			function t() {
				return i(this, t), e.call(this, {
					type: O.DebugLib
				})
			}
			return u(t, [{
				key: "init",
				value: function() {}
			}, {
				key: "detect",
				value: function() {
					var e;
					(!0 === (null == (e = null == (e = window.eruda) ? void 0 : e._devTools) ?
							void 0 : e._isShow) || window._vcOrigConsole && window.document
						.querySelector("#__vconsole.vc-toggle")) && this.onDevToolOpen()
				}
			}], [{
				key: "isUsing",
				value: function() {
					return !!window.eruda || !!window._vcOrigConsole
				}
			}]), t
		}(),
		J = 0,
		Q = 0,
		Z = [],
		ee = 0;

	function te(o) {
		function e() {
			l = !0
		}

		function t() {
			l = !1
		}
		var n, i, r, u, c, a, l = !1;

		function f() {
			(a[u] === r ? i : n)()
		}
		B(e, t), n = t, i = e, void 0 !== (a = document).hidden ? (r = "hidden", c = "visibilitychange", u =
				"visibilityState") : void 0 !== a.mozHidden ? (r = "mozHidden", c = "mozvisibilitychange", u =
				"mozVisibilityState") : void 0 !== a.msHidden ? (r = "msHidden", c = "msvisibilitychange", u =
				"msVisibilityState") : void 0 !== a.webkitHidden && (r = "webkitHidden", c =
				"webkitvisibilitychange", u = "webkitVisibilityState"), a.removeEventListener(c, f, !1), a
			.addEventListener(c, f, !1), J = window.setInterval(function() {
				if (!(o.isSuspend || l || X())) {
					var e, t, n = s(Z);
					try {
						for (n.s(); !(e = n.n()).done;) {
							var i = e.value;
							$(i.type), i.detect(ee++)
						}
					} catch (e) {
						n.e(e)
					} finally {
						n.f()
					}
					w(), "function" == typeof d.ondevtoolclose && (t = D, !G() && t && d.ondevtoolclose())
				}
			}, d.interval), Q = setTimeout(function() {
				p.pc || Y.isUsing() || ne()
			}, d.stopIntervalTime)
	}

	function ne() {
		window.clearInterval(J)
	}
	var P = 8;

	function ie(e) {
		for (var t = function(e, t) {
				e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
				for (var n = 1732584193, i = -271733879, o = -1732584194, r = 271733878, u = 0; u < e
					.length; u += 16) {
					var c = n,
						a = i,
						l = o,
						f = r;
					n = E(n, i, o, r, e[u + 0], 7, -680876936), r = E(r, n, i, o, e[u + 1], 12, -389564586), o =
						E(o, r, n, i, e[u + 2], 17, 606105819), i = E(i, o, r, n, e[u + 3], 22, -1044525330),
						n = E(n, i, o, r, e[u + 4], 7, -176418897), r = E(r, n, i, o, e[u + 5], 12, 1200080426),
						o = E(o, r, n, i, e[u + 6], 17, -1473231341), i = E(i, o, r, n, e[u + 7], 22, -
						45705983), n = E(n, i, o, r, e[u + 8], 7, 1770035416), r = E(r, n, i, o, e[u + 9], 12, -
							1958414417), o = E(o, r, n, i, e[u + 10], 17, -42063), i = E(i, o, r, n, e[u + 11],
							22, -1990404162), n = E(n, i, o, r, e[u + 12], 7, 1804603682), r = E(r, n, i, o, e[
							u + 13], 12, -40341101), o = E(o, r, n, i, e[u + 14], 17, -1502002290), i = E(i, o,
							r, n, e[u + 15], 22, 1236535329), n = j(n, i, o, r, e[u + 1], 5, -165796510), r = j(
							r, n, i, o, e[u + 6], 9, -1069501632), o = j(o, r, n, i, e[u + 11], 14, 643717713),
						i = j(i, o, r, n, e[u + 0], 20, -373897302), n = j(n, i, o, r, e[u + 5], 5, -701558691),
						r = j(r, n, i, o, e[u + 10], 9, 38016083), o = j(o, r, n, i, e[u + 15], 14, -660478335),
						i = j(i, o, r, n, e[u + 4], 20, -405537848), n = j(n, i, o, r, e[u + 9], 5, 568446438),
						r = j(r, n, i, o, e[u + 14], 9, -1019803690), o = j(o, r, n, i, e[u + 3], 14, -
							187363961), i = j(i, o, r, n, e[u + 8], 20, 1163531501), n = j(n, i, o, r, e[u +
							13], 5, -1444681467), r = j(r, n, i, o, e[u + 2], 9, -51403784), o = j(o, r, n, i,
							e[u + 7], 14, 1735328473), i = j(i, o, r, n, e[u + 12], 20, -1926607734), n = I(n,
							i, o, r, e[u + 5], 4, -378558), r = I(r, n, i, o, e[u + 8], 11, -2022574463), o = I(
							o, r, n, i, e[u + 11], 16, 1839030562), i = I(i, o, r, n, e[u + 14], 23, -35309556),
						n = I(n, i, o, r, e[u + 1], 4, -1530992060), r = I(r, n, i, o, e[u + 4], 11,
						1272893353), o = I(o, r, n, i, e[u + 7], 16, -155497632), i = I(i, o, r, n, e[u + 10],
							23, -1094730640), n = I(n, i, o, r, e[u + 13], 4, 681279174), r = I(r, n, i, o, e[
							u + 0], 11, -358537222), o = I(o, r, n, i, e[u + 3], 16, -722521979), i = I(i, o, r,
							n, e[u + 6], 23, 76029189), n = I(n, i, o, r, e[u + 9], 4, -640364487), r = I(r, n,
							i, o, e[u + 12], 11, -421815835), o = I(o, r, n, i, e[u + 15], 16, 530742520), i =
						I(i, o, r, n, e[u + 2], 23, -995338651), n = L(n, i, o, r, e[u + 0], 6, -198630844), r =
						L(r, n, i, o, e[u + 7], 10, 1126891415), o = L(o, r, n, i, e[u + 14], 15, -1416354905),
						i = L(i, o, r, n, e[u + 5], 21, -57434055), n = L(n, i, o, r, e[u + 12], 6, 1700485571),
						r = L(r, n, i, o, e[u + 3], 10, -1894986606), o = L(o, r, n, i, e[u + 10], 15, -
						1051523), i = L(i, o, r, n, e[u + 1], 21, -2054922799), n = L(n, i, o, r, e[u + 8], 6,
							1873313359), r = L(r, n, i, o, e[u + 15], 10, -30611744), o = L(o, r, n, i, e[u +
							6], 15, -1560198380), i = L(i, o, r, n, e[u + 13], 21, 1309151649), n = L(n, i, o,
							r, e[u + 4], 6, -145523070), r = L(r, n, i, o, e[u + 11], 10, -1120210379), o = L(o,
							r, n, i, e[u + 2], 15, 718787259), i = L(i, o, r, n, e[u + 9], 21, -343485551), n =
						C(n, c), i = C(i, a), o = C(o, l), r = C(r, f)
				}
				return Array(n, i, o, r)
			}(function(e) {
				for (var t = Array(), n = (1 << P) - 1, i = 0; i < e.length * P; i += P) t[i >> 5] |= (e
					.charCodeAt(i / P) & n) << i % 32;
				return t
			}(e), e.length * P), n = "0123456789abcdef", i = "", o = 0; o < 4 * t.length; o++) i += n.charAt(t[o >>
			2] >> o % 4 * 8 + 4 & 15) + n.charAt(t[o >> 2] >> o % 4 * 8 & 15);
		return i
	}

	function x(e, t, n, i, o, r) {
		return C((t = C(C(t, e), C(i, r))) << o | t >>> 32 - o, n)
	}

	function E(e, t, n, i, o, r, u) {
		return x(t & n | ~t & i, e, t, o, r, u)
	}

	function j(e, t, n, i, o, r, u) {
		return x(t & i | n & ~i, e, t, o, r, u)
	}

	function I(e, t, n, i, o, r, u) {
		return x(t ^ n ^ i, e, t, o, r, u)
	}

	function L(e, t, n, i, o, r, u) {
		return x(n ^ (t | ~i), e, t, o, r, u)
	}

	function C(e, t) {
		var n = (65535 & e) + (65535 & t);
		return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
	}
	var _ = function() {
			n(t, k);
			var e = l(t);

			function t() {
				return i(this, t), e.call(this, {
					type: O.RegToString,
					enabled: p.qqBrowser || p.firefox
				})
			}
			return u(t, [{
				key: "init",
				value: function() {
					var t = this;
					this.lastTime = 0, this.reg = /./, h(this.reg), this.reg.toString = function() {
						var e;
						return p.qqBrowser ? (e = (new Date).getTime(), t.lastTime && e - t
								.lastTime < 100 ? t.onDevToolOpen() : t.lastTime = e) : p
							.firefox && t.onDevToolOpen(), ""
					}
				}
			}, {
				key: "detect",
				value: function() {
					h(this.reg)
				}
			}]), t
		}(),
		oe = function() {
			n(t, k);
			var e = l(t);

			function t() {
				return i(this, t), e.call(this, {
					type: O.DefineId
				})
			}
			return u(t, [{
				key: "init",
				value: function() {
					var e = this;
					this.div = document.createElement("div"), this.div.__defineGetter__("id",
						function() {
							e.onDevToolOpen()
						}), Object.defineProperty(this.div, "id", {
						get: function() {
							e.onDevToolOpen()
						}
					})
				}
			}, {
				key: "detect",
				value: function() {
					h(this.div)
				}
			}]), t
		}(),
		re = function() {
			n(t, k);
			var e = l(t);

			function t() {
				return i(this, t), e.call(this, {
					type: O.Size,
					enabled: !p.iframe && !p.edge
				})
			}
			return u(t, [{
				key: "init",
				value: function() {
					var e = this;
					this.checkWindowSizeUneven(), window.addEventListener("resize", function() {
						setTimeout(function() {
							e.checkWindowSizeUneven()
						}, 100)
					}, !0)
				}
			}, {
				key: "detect",
				value: function() {}
			}, {
				key: "checkWindowSizeUneven",
				value: function() {
					var e = function() {
						if (ue(window.devicePixelRatio)) return window.devicePixelRatio;
						var e = window.screen;
						return !(ue(e) || !e.deviceXDPI || !e.logicalXDPI) && e.deviceXDPI / e
							.logicalXDPI
					}();
					if (!1 !== e) {
						var t = 200 < window.outerWidth - window.innerWidth * e,
							e = 300 < window.outerHeight - window.innerHeight * e;
						if (t || e) return this.onDevToolOpen(), !1;
						$(this.type)
					}
					return !0
				}
			}]), t
		}();

	function ue(e) {
		return null != e
	}
	var A, ce = function() {
			n(t, k);
			var e = l(t);

			function t() {
				return i(this, t), e.call(this, {
					type: O.DateToString,
					enabled: !p.iosChrome && !p.iosEdge
				})
			}
			return u(t, [{
				key: "init",
				value: function() {
					var e = this;
					this.count = 0, this.date = new Date, this.date.toString = function() {
						return e.count++, ""
					}
				}
			}, {
				key: "detect",
				value: function() {
					this.count = 0, h(this.date), w(), 2 <= this.count && this.onDevToolOpen()
				}
			}]), t
		}(),
		ae = function() {
			n(t, k);
			var e = l(t);

			function t() {
				return i(this, t), e.call(this, {
					type: O.FuncToString,
					enabled: !p.iosChrome && !p.iosEdge
				})
			}
			return u(t, [{
				key: "init",
				value: function() {
					var e = this;
					this.count = 0, this.func = function() {}, this.func.toString = function() {
						return e.count++, ""
					}
				}
			}, {
				key: "detect",
				value: function() {
					this.count = 0, h(this.func), w(), 2 <= this.count && this.onDevToolOpen()
				}
			}]), t
		}(),
		le = function() {
			n(t, k);
			var e = l(t);

			function t() {
				return i(this, t), e.call(this, {
					type: O.Debugger,
					enabled: p.iosChrome || p.iosEdge
				})
			}
			return u(t, [{
				key: "detect",
				value: function() {
					var e = v();
					100 < v() - e && this.onDevToolOpen()
				}
			}]), t
		}(),
		fe = function() {
			n(t, k);
			var e = l(t);

			function t() {
				return i(this, t), e.call(this, {
					type: O.Performance,
					enabled: p.chrome || !p.mobile
				})
			}
			return u(t, [{
				key: "init",
				value: function() {
					this.maxPrintTime = 0, this.largeObjectArray = M()
				}
			}, {
				key: "detect",
				value: function() {
					var e = this,
						t = z(function() {
							y(e.largeObjectArray)
						}),
						n = z(function() {
							h(e.largeObjectArray)
						});
					if (this.maxPrintTime = Math.max(this.maxPrintTime, n), w(), 0 === t || 0 ===
						this.maxPrintTime) return !1;
					t > 10 * this.maxPrintTime && this.onDevToolOpen()
				}
			}]), t
		}(),
		se = (e(A = {}, O.RegToString, _), e(A, O.DefineId, oe), e(A, O.Size, re), e(A, O.DateToString, ce), e(A, O
			.FuncToString, ae), e(A, O.Debugger, le), e(A, O.Performance, fe), e(A, O.DebugLib, Y), A);
	var R = Object.assign(function(e) {
		function t() {
			var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "";
			return {
				success: !e,
				reason: e
			}
		}
		if (R.isRunning) return t("already running");
		if (W(), K = p.ie ? (h = function() {
				return b.log.apply(b, arguments)
			}, y = function() {
				return b.table.apply(b, arguments)
			}, function() {
				return b.clear()
			}) : (h = b.log, y = b.table, b.clear), q(e), d.md5 && ie(function(e) {
				var t = window.location.search,
					n = window.location.hash;
				if ("" !== (t = "" === t && "" !== n ? "?".concat(n.split("?")[1]) : t) && void 0 !==
					t) {
					n = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"), e = t.substr(1).match(n);
					if (null != e) return unescape(e[2])
				}
				return ""
			}(d.tkName)) === d.md5) return t("token passed");
		if (d.seo && p.seoBot) return t("seobot");
		R.isRunning = !0, te(R);
		var n = R,
			i = (N = function() {
				return n.isSuspend
			}, window.top),
			o = window.parent;
		if (g(window), d.disableIframeParents && i && o && i !== window) {
			for (; o !== i;) g(o), o = o.parent;
			g(i)
		}
		return ("all" === d.detectors ? Object.keys(se) : d.detectors).forEach(function(e) {
			new se[e]
		}), t()
	}, {
		isRunning: !1,
		isSuspend: !1,
		md5: ie,
		version: "0.3.7",
		DetectorType: O,
		isDevToolOpened: G
	});
	_ = function() {
		if ("undefined" == typeof window || !window.document) return null;
		var n = document.querySelector("[disable-devtool-auto]");
		if (!n) return null;
		var i = ["disable-menu", "disable-select", "disable-copy", "disable-cut", "disable-paste", "clear-log"],
			o = ["interval"],
			r = {};
		return ["md5", "url", "tk-name", "detectors"].concat(i, o).forEach(function(e) {
			var t = n.getAttribute(e);
			null !== t && (-1 !== o.indexOf(e) ? t = parseInt(t) : -1 !== i.indexOf(e) ? t = "false" !==
				t : "detector" === e && "all" !== t && (t = t.split(" ")), r[function(e) {
					if (-1 === e.indexOf("-")) return e;
					var t = !1;
					return e.split("").map(function(e) {
						return "-" === e ? (t = !0, "") : t ? (t = !1, e
						.toUpperCase()) : e
					}).join("")
				}(e)] = t)
		}), r
	}();
	return _ && R(_), R
});