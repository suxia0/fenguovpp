! function() {
	"use strict";
	(t => {
		const {
			screen: {
				width: e,
				height: a
			},
			navigator: {
				language: n
			},
			location: r,
			localStorage: i,
			document: c,
			history: o
		} = t, {
			hostname: s,
			pathname: u,
			search: l
		} = r, {
			currentScript: d
		} = c;
		if (!d) return;
		const m = "data-",
			f = d.getAttribute.bind(d),
			p = f(m + "website-id"),
			h = f(m + "host-url"),
			y = "false" !== f(m + "auto-track"),
			g = f(m + "domains") || "",
			b = g.split(",").map((t => t.trim())),
			v = `${h?h.replace(/\/$/,""):d.src.split("/").slice(0,-1).join("/")}/api/send`,
			S = `${e}x${a}`,
			w = /data-umami-event-([\w-_]+)/,
			N = m + "umami-event",
			T = 300,
			A = () => ({
				website: p,
				hostname: s,
				screen: S,
				language: n,
				title: encodeURIComponent(R),
				url: encodeURI(I),
				referrer: encodeURI(L)
			}),
			U = (t, e, a) => {
				a && (L = I, I = (t => {
					try {
						return new URL(t).pathname
					} catch (e) {
						return t
					}
				})(a.toString()), I !== L && setTimeout(j, T))
			},
			$ = () => i && i.getItem("umami.disabled") || g && !b.includes(s),
			O = async (t, e = "event") => {
				if ($()) return;
				const a = {
					"Content-Type": "application/json"
				};
				void 0 !== x && (a["x-umami-cache"] = x);
				try {
					const n = await fetch(v, {
							method: "POST",
							body: JSON.stringify({
								type: e,
								payload: t
							}),
							headers: a
						}),
						r = await n.text();
					return x = r
				} catch {}
			}, j = (t, e) => O("string" == typeof t ? {
				...A(),
				name: t,
				data: "object" == typeof e ? e : void 0
			} : "object" == typeof t ? t : "function" == typeof t ? t(A()) : A()), k = t => O({
				...A(),
				data: t
			}, "identify");
		t.umami || (t.umami = {
			track: j,
			identify: k
		});
		let x, E, I = `${u}${l}`,
			L = c.referrer,
			R = c.title;
		if (y && !$()) {
			(() => {
				const t = (t, e, a) => {
					const n = t[e];
					return (...e) => (a.apply(null, e), n.apply(t, e))
				};
				o.pushState = t(o, "pushState", U), o.replaceState = t(o, "replaceState", U)
			})(), (() => {
				const t = new MutationObserver((([t]) => {
						R = t && t.target ? t.target.text : void 0
					})),
					e = c.querySelector("head > title");
				e && t.observe(e, {
					subtree: !0,
					characterData: !0,
					childList: !0
				})
			})(), c.addEventListener("click", (async t => {
				const e = t => ["BUTTON", "A"].includes(t),
					a = async t => {
						const e = t.getAttribute.bind(t),
							a = e(N);
						if (a) {
							const n = {};
							return t.getAttributeNames().forEach((t => {
								const a = t.match(w);
								a && (n[a[1]] = e(t))
							})), j(a, n)
						}
					}, n = t.target, i = e(n.tagName) ? n : ((t, a) => {
						let n = t;
						for (let t = 0; t < a; t++) {
							if (e(n.tagName)) return n;
							if (n = n.parentElement, !n) return null
						}
					})(n, 10);
				if (!i) return a(n); {
					const {
						href: e,
						target: n
					} = i, c = i.getAttribute(N);
					if (c)
						if ("A" === i.tagName) {
							const o = "_blank" === n || t.ctrlKey || t.shiftKey || t.metaKey || t
								.button && 1 === t.button;
							if (c && e) return o || t.preventDefault(), a(i).then((() => {
								o || (r.href = e)
							}))
						} else if ("BUTTON" === i.tagName) return a(i)
				}
			}), !0);
			const t = () => {
				"complete" !== c.readyState || E || (j(), E = !0)
			};
			c.addEventListener("readystatechange", t, !0), t()
		}
	})(window)
}();