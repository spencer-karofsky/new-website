module.exports = [
"[project]/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MLVisualization$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/MLVisualization.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RoboticsVisualization$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/RoboticsVisualization.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SWEVisualization$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SWEVisualization.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const focusContent = {
    ML: {
        title: "Designing ML from first principles.",
        description: "I connect mathematical insight to models that solve practical problems."
    },
    SWE: {
        title: "Reliable software, end to end.",
        description: "I build dependable software, from RAG pipelines to internal tools, that teams rely on every day."
    },
    Robotics: {
        title: "Physical AI, built from the ground up.",
        description: "I connect perception, planning, and control to robots that act reliably in the real world."
    }
};
function RoverScene({ progress }) {
    const roverX = 12 + progress * 62;
    const roverY = 68 - Math.sin(progress * Math.PI) * 36;
    const rotation = 12 + progress * 38;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "scene",
        "aria-label": "Animated rover navigating around obstacles",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "scene-svg",
                viewBox: "0 0 520 260",
                role: "img",
                "aria-labelledby": "scene-title",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                        id: "scene-title",
                        children: "A rover follows a curved path around stationary obstacles"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pattern", {
                                id: "grid",
                                width: "32",
                                height: "32",
                                patternUnits: "userSpaceOnUse",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M 32 0 L 0 0 0 32",
                                    className: "grid-line",
                                    fill: "none"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                                id: "soft-shadow",
                                x: "-50%",
                                y: "-50%",
                                width: "200%",
                                height: "200%",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feDropShadow", {
                                    dx: "0",
                                    dy: "4",
                                    stdDeviation: "5",
                                    floodColor: "#6d88a2",
                                    floodOpacity: ".16"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        width: "520",
                        height: "260",
                        rx: "20",
                        fill: "url(#grid)"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M 62 190 C 110 190, 118 142, 178 142 S 250 204, 300 164 S 355 72, 436 64",
                        className: "path-line"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M 62 190 C 110 190, 118 142, 178 142 S 250 204, 300 164 S 355 72, 436 64",
                        pathLength: "1",
                        strokeDasharray: "1",
                        strokeDashoffset: 1 - progress,
                        className: "path-progress"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        className: "obstacle",
                        filter: "url(#soft-shadow)",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "142",
                            y: "64",
                            width: "44",
                            height: "38",
                            rx: "7"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        className: "obstacle",
                        filter: "url(#soft-shadow)",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "286",
                            y: "192",
                            width: "58",
                            height: "35",
                            rx: "7"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        className: "obstacle",
                        filter: "url(#soft-shadow)",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "370",
                            y: "114",
                            width: "66",
                            height: "42",
                            rx: "7"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "62",
                        cy: "190",
                        r: "5",
                        className: "start-point"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "436",
                        cy: "64",
                        r: "8",
                        className: "goal-ring"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "436",
                        cy: "64",
                        r: "3",
                        className: "goal-point"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "450",
                        y: "68",
                        className: "goal-label",
                        children: "Goal"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        transform: `translate(${roverX * 5.2}, ${roverY * 2.6}) rotate(${rotation})`,
                        filter: "url(#soft-shadow)",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "-25",
                                y: "-17",
                                width: "50",
                                height: "34",
                                rx: "11",
                                className: "rover-body"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "-33",
                                y: "-13",
                                width: "8",
                                height: "12",
                                rx: "3",
                                className: "rover-wheel"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "-33",
                                y: "3",
                                width: "8",
                                height: "12",
                                rx: "3",
                                className: "rover-wheel"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "25",
                                y: "-13",
                                width: "8",
                                height: "12",
                                rx: "3",
                                className: "rover-wheel"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 140,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "25",
                                y: "3",
                                width: "8",
                                height: "12",
                                rx: "3",
                                className: "rover-wheel"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 148,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "2",
                                cy: "0",
                                r: "7",
                                className: "rover-camera"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 156,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M 5 -7 L 18 -15",
                                className: "heading-line"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "scene-footer",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "PATH FOLLOWING"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            Math.round(progress * 100),
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
function Home() {
    const [focus, setFocus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("SWE");
    const content = focusContent[focus];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        const previousRestoration = window.history.scrollRestoration;
        const root = document.documentElement;
        const previousScrollBehavior = root.style.scrollBehavior;
        let animationFrame = 0;
        window.history.scrollRestoration = "manual";
        const resetToTop = ()=>{
            root.style.scrollBehavior = "auto";
            window.scrollTo(0, 0);
            cancelAnimationFrame(animationFrame);
            animationFrame = requestAnimationFrame(()=>{
                window.scrollTo(0, 0);
                root.style.scrollBehavior = previousScrollBehavior;
            });
        };
        resetToTop();
        window.addEventListener("pageshow", resetToTop);
        return ()=>{
            window.removeEventListener("pageshow", resetToTop);
            cancelAnimationFrame(animationFrame);
            window.history.scrollRestoration = previousRestoration;
            root.style.scrollBehavior = previousScrollBehavior;
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "page-shell",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "home-screen",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "site-header",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                className: "wordmark",
                                children: "Spencer Karofsky"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 209,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                "aria-label": "Main navigation",
                                className: "main-nav",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#work",
                                        children: "Work"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 214,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#about",
                                        children: "About"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 215,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/resume.pdf",
                                        children: "Resume"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 216,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 213,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 208,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "focus-control",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "focus-label",
                                children: "Explore by focus"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 221,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "focus-tabs",
                                role: "group",
                                "aria-label": "Portfolio focus",
                                children: [
                                    "SWE",
                                    "Robotics",
                                    "ML"
                                ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        "aria-pressed": focus === item,
                                        className: focus === item ? "focus-tab active" : "focus-tab",
                                        onClick: ()=>setFocus(item),
                                        children: item
                                    }, item, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 229,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 223,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 220,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "hero",
                        id: "about",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hero-copy",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "eyebrow",
                                        children: focus === "Robotics" ? "FOCUS" : "PORTFOLIO"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 244,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        children: content.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 248,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "hero-description",
                                        children: content.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 249,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: "work-link",
                                        href: "#work",
                                        children: [
                                            "View my work ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "aria-hidden": "true",
                                                children: "→"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 254,
                                                columnNumber: 28
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 253,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 243,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hero-visual",
                                children: focus === "ML" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MLVisualization$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 260,
                                    columnNumber: 13
                                }, this) : focus === "SWE" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SWEVisualization$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 262,
                                    columnNumber: 13
                                }, this) : focus === "Robotics" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RoboticsVisualization$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 264,
                                    columnNumber: 13
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "placeholder-visual",
                                    "aria-hidden": "true",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "visual-caption",
                                        children: "FEATURED WORK"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 267,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 266,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 258,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 242,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 207,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "work-section",
                id: "work",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "section-heading",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "eyebrow",
                                children: "SELECTED WORK"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 276,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#contact",
                                children: [
                                    "All projects ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "aria-hidden": "true",
                                        children: "→"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 278,
                                        columnNumber: 26
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 277,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 275,
                        columnNumber: 9
                    }, this),
                    focus === "ML" || focus === "SWE" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/dall-e-2",
                        className: "project-placeholder",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "project-index",
                                children: "01"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 284,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: "DALL·E 2 from scratch"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 287,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "A DALL·E 2-style text-to-image pipeline built independently in about 9,800 lines of code and pre-trained on AWS SageMaker."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 288,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 286,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "project-category",
                                children: focus
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 294,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 283,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "project-empty",
                        children: "Robotics projects are on the way."
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 297,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 274,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "site-footer",
                id: "contact",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Spencer Karofsky"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 302,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "footer-links",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "mailto:spencerkarofsky@gmail.com",
                                children: "Email ↗"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 305,
                                columnNumber: 3
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://www.linkedin.com/in/spencer-karofsky",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "LinkedIn ↗"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 306,
                                columnNumber: 3
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 304,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 301,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 206,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/MLVisualization.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MLVisualization
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
// Virtual canvas matches the old SVG viewBox so sizes carry over.
const VIEW_W = 640;
const VIEW_H = 360;
const DIST = 640;
const FOCAL = 640;
const LOOP = 18; // seconds
// Camera: a low orbit where the two groups overlap in depth, then a sweep to
// straight overhead, where the data's main plane faces the viewer.
const YAW_START = 1.35;
const YAW_DRIFT = 0.25;
const YAW_FLAT = -0.38;
const PITCH_3D = 0.42;
const PITCH_FLAT = 1.56;
const NEUTRAL = [
    164,
    168,
    187
];
const PALETTES = [
    [
        [
            128,
            153,
            237
        ],
        [
            154,
            170,
            241
        ],
        [
            104,
            133,
            219
        ]
    ],
    [
        [
            242,
            123,
            105
        ],
        [
            255,
            149,
            128
        ],
        [
            217,
            103,
            91
        ]
    ]
];
const CENTROID_RGB = [
    "128,153,237",
    "242,123,105"
];
function createRandom(seed) {
    let state = seed >>> 0;
    return ()=>{
        state += 0x6d2b79f5;
        let value = state;
        value = Math.imul(value ^ value >>> 15, value | 1);
        value ^= value + Math.imul(value ^ value >>> 7, value | 61);
        return ((value ^ value >>> 14) >>> 0) / 4294967296;
    };
}
function gaussian(random) {
    const u1 = Math.max(random(), 0.0001);
    const u2 = random();
    return Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
}
// Two groups separated along u. From the opening camera angle u points into
// the screen, so they read as one cloud until the view flattens.
function makeCluster(seed, cu, cv, count) {
    const random = createRandom(seed);
    return Array.from({
        length: count
    }, ()=>{
        const nu = gaussian(random);
        const nv = gaussian(random);
        const nw = gaussian(random);
        const v = cv + nv * 46;
        return {
            u: cu + nu * 44,
            v,
            w: 0.35 * (v - cv) + nw * 52,
            shade: Math.floor(random() * 3),
            r2d: 0.95 + random() * 0.5,
            o2d: 0.82 + random() * 0.18
        };
    });
}
const DATA = [
    ...makeCluster(18, -105, 12, 190),
    ...makeCluster(82, 105, -12, 190)
];
function runKMeans() {
    let c = [
        [
            -60,
            -80
        ],
        [
            90,
            50
        ]
    ];
    const steps = [];
    for(let it = 0; it < 5; it += 1){
        const assign = new Uint8Array(DATA.length);
        const sum = [
            [
                0,
                0,
                0
            ],
            [
                0,
                0,
                0
            ]
        ];
        DATA.forEach((p, i)=>{
            const d0 = (p.u - c[0][0]) ** 2 + (p.v - c[0][1]) ** 2;
            const d1 = (p.u - c[1][0]) ** 2 + (p.v - c[1][1]) ** 2;
            const k = d0 <= d1 ? 0 : 1;
            assign[i] = k;
            sum[k][0] += p.u;
            sum[k][1] += p.v;
            sum[k][2] += 1;
        });
        steps.push({
            c: c.map((x)=>[
                    x[0],
                    x[1]
                ]),
            assign
        });
        const prev = c;
        c = sum.map((s, k)=>s[2] ? [
                s[0] / s[2],
                s[1] / s[2]
            ] : prev[k]);
    }
    return steps;
}
const STEPS = runKMeans();
const FINAL_CENTROIDS = STEPS[STEPS.length - 1].c;
const K_START = 8.6;
const K_STEP = 1.05;
// ---------------------------------------------------------------- math
function clamp(x, lo, hi) {
    return Math.min(hi, Math.max(lo, x));
}
function lerp(a, b, t) {
    return a + (b - a) * t;
}
function smoother(x) {
    const t = clamp(x, 0, 1);
    return t * t * t * (t * (t * 6 - 15) + 10);
}
function ramp(t, a, b) {
    return smoother((t - a) / (b - a));
}
function mixRGB(a, b, t) {
    return [
        lerp(a[0], b[0], t),
        lerp(a[1], b[1], t),
        lerp(a[2], b[2], t)
    ];
}
function sub(a, b) {
    return [
        a[0] - b[0],
        a[1] - b[1],
        a[2] - b[2]
    ];
}
function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
function cross(a, b) {
    return [
        a[1] * b[2] - a[2] * b[1],
        a[2] * b[0] - a[0] * b[2],
        a[0] * b[1] - a[1] * b[0]
    ];
}
function makeCamera(yaw, pitch) {
    const cp = Math.cos(pitch);
    const sp = Math.sin(pitch);
    const sy = Math.sin(yaw);
    const cy = Math.cos(yaw);
    const pos = [
        DIST * cp * sy,
        DIST * sp,
        DIST * cp * cy
    ];
    const fwd = [
        -cp * sy,
        -sp,
        -cp * cy
    ];
    const right = [
        cy,
        0,
        -sy
    ];
    return {
        pos,
        right,
        up: cross(right, fwd),
        fwd
    };
}
function project(cam, p) {
    const d = sub(p, cam.pos);
    const z = Math.max(1, dot(d, cam.fwd));
    return [
        VIEW_W / 2 + FOCAL * dot(d, cam.right) / z,
        VIEW_H / 2 - FOCAL * dot(d, cam.up) / z,
        z
    ];
}
// ---------------------------------------------------------------- drawing
function arrow(ctx, a, b, color, width) {
    const dx = b[0] - a[0];
    const dy = b[1] - a[1];
    const l = Math.hypot(dx, dy) || 1;
    const ux = dx / l;
    const uy = dy / l;
    const head = 7;
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.beginPath();
    ctx.moveTo(a[0], a[1]);
    ctx.lineTo(b[0] - ux * head * 0.7, b[1] - uy * head * 0.7);
    ctx.stroke();
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(b[0], b[1]);
    ctx.lineTo(b[0] - ux * head - uy * head * 0.5, b[1] - uy * head + ux * head * 0.5);
    ctx.lineTo(b[0] - ux * head + uy * head * 0.5, b[1] - uy * head - ux * head * 0.5);
    ctx.closePath();
    ctx.fill();
}
function gridFade(u, v) {
    const d = Math.hypot(u / 300, v / 190);
    if (d >= 1) return 0;
    return d < 0.7 ? 1 : 1 - (d - 0.7) / 0.3;
}
function drawGrid(ctx, P, alpha) {
    const BUCKETS = 6;
    const buckets = Array.from({
        length: BUCKETS
    }, ()=>[]);
    const push = (u1, v1, u2, v2)=>{
        const a = gridFade((u1 + u2) / 2, (v1 + v2) / 2);
        if (a <= 0.02) return;
        const pa = P([
            u1,
            0,
            v1
        ]);
        const pb = P([
            u2,
            0,
            v2
        ]);
        buckets[Math.min(BUCKETS - 1, Math.floor(a * BUCKETS))].push([
            pa[0],
            pa[1],
            pb[0],
            pb[1]
        ]);
    };
    for(let u = -320; u <= 320; u += 40)for(let v = -200; v < 200; v += 40)push(u, v, u, v + 40);
    for(let v = -200; v <= 200; v += 40)for(let u = -320; u < 320; u += 40)push(u, v, u + 40, v);
    ctx.lineWidth = 0.75;
    ctx.lineCap = "butt";
    buckets.forEach((segs, b)=>{
        if (!segs.length) return;
        ctx.strokeStyle = `rgba(211,202,225,${0.07 * alpha * (b + 0.5) / BUCKETS})`;
        ctx.beginPath();
        for (const [ax, ay, bx, by] of segs){
            ctx.moveTo(ax, ay);
            ctx.lineTo(bx, by);
        }
        ctx.stroke();
    });
    ctx.lineCap = "round";
}
function drawGlow(ctx, x, y, r, rgb, a) {
    if (a <= 0.01) return;
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, `rgba(${rgb},${0.2 * a})`);
    g.addColorStop(1, `rgba(${rgb},0)`);
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
}
function MLVisualization() {
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");
        if (!canvas || !ctx) return;
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        let scale = 1;
        const render = (t, intro)=>{
            // ---- timeline
            const forward = ramp(t, 5, 8);
            const back = ramp(t, 15.8, 18);
            const flatPhase = t < 15.8;
            const view = flatPhase ? forward : 1 - back;
            const yaw3d = YAW_START - YAW_DRIFT * (1 - Math.cos(Math.PI * Math.min(t, 5) / 5)) / 2;
            const yaw = flatPhase ? lerp(yaw3d, YAW_FLAT, forward) : lerp(YAW_FLAT, YAW_START, back);
            const pitch = lerp(PITCH_3D, PITCH_FLAT, view) + 0.04 * Math.sin(2 * Math.PI * t / LOOP) * (1 - view);
            const flat = flatPhase ? ramp(t, 5.6, 8) : 1 - ramp(t, 15.8, 17.8);
            const axesAlpha = 1 - ramp(t, 5, 6.5) + ramp(t, 16.6, 18);
            const gridAlpha = ramp(t, 6.8, 8.2) * (1 - ramp(t, 15.6, 16.6));
            const glowAlpha = ramp(t, 13, 14.2) * (1 - ramp(t, 15.4, 16.2));
            const colorKeep = 1 - ramp(t, 15.5, 16.3);
            // ---- k-means state
            let prevAssign = null;
            let curAssign = null;
            let blend = 0;
            if (t >= K_START) {
                const k = Math.min(STEPS.length - 1, Math.floor((t - K_START) / K_STEP));
                const u = t >= K_START + STEPS.length * K_STEP ? 1 : (t - K_START - k * K_STEP) / K_STEP;
                prevAssign = k === 0 ? null : STEPS[k - 1].assign;
                curAssign = STEPS[k].assign;
                blend = smoother((u - 0.45) / 0.35);
            }
            const cam = makeCamera(yaw, pitch);
            const P = (p)=>project(cam, p);
            ctx.setTransform(scale, 0, 0, scale, 0, 0);
            ctx.clearRect(0, 0, VIEW_W, VIEW_H);
            ctx.globalAlpha = intro;
            ctx.lineJoin = "round";
            ctx.lineCap = "round";
            // ---- glows
            const origin = P([
                0,
                0,
                0
            ]);
            drawGlow(ctx, origin[0], origin[1], 230, "146,159,224", axesAlpha);
            FINAL_CENTROIDS.forEach((c, j)=>{
                const p = P([
                    c[0],
                    0,
                    c[1]
                ]);
                drawGlow(ctx, p[0], p[1], 160, CENTROID_RGB[j], glowAlpha);
            });
            // ---- flat grid on the data plane
            if (gridAlpha > 0.01) drawGrid(ctx, P, gridAlpha);
            // ---- 3D frame: basis vectors
            if (axesAlpha > 0.01) {
                const a = 0.65 * axesAlpha;
                ctx.setLineDash([
                    4,
                    5
                ]);
                ctx.strokeStyle = `rgba(193,190,207,${0.34 * 0.58 * a * 1.6})`;
                ctx.lineWidth = 1.3;
                for (const end of [
                    [
                        -100,
                        0,
                        0
                    ],
                    [
                        0,
                        -110,
                        0
                    ],
                    [
                        0,
                        0,
                        -95
                    ]
                ]){
                    const q = P(end);
                    ctx.beginPath();
                    ctx.moveTo(origin[0], origin[1]);
                    ctx.lineTo(q[0], q[1]);
                    ctx.stroke();
                }
                ctx.setLineDash([]);
                ctx.globalAlpha = intro * a;
                arrow(ctx, origin, P([
                    0,
                    125,
                    0
                ]), "#c2b4d6", 1.8);
                arrow(ctx, origin, P([
                    120,
                    0,
                    0
                ]), "#90a6ed", 1.8);
                arrow(ctx, origin, P([
                    0,
                    0,
                    110
                ]), "#ff8877", 1.8);
                ctx.fillStyle = "#eee6e5";
                ctx.beginPath();
                ctx.arc(origin[0], origin[1], 2.2, 0, Math.PI * 2);
                ctx.fill();
                ctx.globalAlpha = intro;
            }
            // ---- points
            for(let i = 0; i < DATA.length; i += 1){
                const d = DATA[i];
                const [x, y, z] = P([
                    d.u,
                    d.w * (1 - flat),
                    d.v
                ]);
                const depth = clamp(0.5 + (DIST - z) / 260, 0, 1);
                const r = lerp(1.05 + depth * 0.85, d.r2d, flat);
                const o = lerp(0.56 + depth * 0.36, d.o2d, flat);
                let rgb = NEUTRAL;
                if (curAssign) {
                    const from = prevAssign ? PALETTES[prevAssign[i]][d.shade] : NEUTRAL;
                    rgb = mixRGB(from, PALETTES[curAssign[i]][d.shade], blend);
                }
                rgb = mixRGB(NEUTRAL, rgb, colorKeep);
                ctx.fillStyle = `rgba(${Math.round(rgb[0])},${Math.round(rgb[1])},${Math.round(rgb[2])},${o})`;
                ctx.beginPath();
                ctx.arc(x, y, r, 0, Math.PI * 2);
                ctx.fill();
            }
        };
        const staticTime = 14.5;
        const resize = ()=>{
            const rect = canvas.getBoundingClientRect();
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            canvas.width = Math.max(1, Math.round(rect.width * dpr));
            canvas.height = Math.max(1, Math.round(rect.height * dpr));
            scale = canvas.width / VIEW_W;
            if (reduceMotion) render(staticTime, 1);
        };
        resize();
        const ro = new ResizeObserver(resize);
        ro.observe(canvas);
        if (reduceMotion) return ()=>ro.disconnect();
        let frame = 0;
        let last = 0;
        let clock = 0;
        const loop = (now)=>{
            const dt = last ? Math.min(0.05, (now - last) / 1000) : 0;
            last = now;
            clock += dt;
            render(clock % LOOP, smoother(clock / 1.2));
            frame = window.requestAnimationFrame(loop);
        };
        const startLoop = ()=>{
            if (frame) return;
            last = 0;
            frame = window.requestAnimationFrame(loop);
        };
        const stopLoop = ()=>{
            window.cancelAnimationFrame(frame);
            frame = 0;
        };
        // Pause while scrolled out of view; the clock resumes where it left off.
        const io = new IntersectionObserver(([entry])=>entry.isIntersecting ? startLoop() : stopLoop());
        io.observe(canvas);
        return ()=>{
            stopLoop();
            io.disconnect();
            ro.disconnect();
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
        className: "ml-visualization",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
            ref: canvasRef,
            className: "ml-canvas",
            role: "img",
            "aria-label": "Illustration: a 3D point cloud rotates, flattens onto a plane, and separates into two colored clusters. Not actual model output."
        }, void 0, false, {
            fileName: "[project]/src/components/MLVisualization.tsx",
            lineNumber: 402,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/MLVisualization.tsx",
        lineNumber: 401,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/RoboticsVisualization.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RoboticsVisualization
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
// The scene is authored in the old SVG coordinates (560 x 360, y down)
// and lifted into 3D: svg x -> world X, svg y -> world Z, height -> world Y.
const VIEW_W = 560;
const VIEW_H = 360;
const CENTER = [
    280,
    180
];
const FOCAL = 540;
const REF_DEPTH = 520;
const route = "M 145 285 C 205 254, 252 245, 286 199 S 310 107, 366 82";
const GOAL = [
    366,
    82
];
const lapMs = 14000;
const orbitMs = 28000;
const LIGHT = norm([
    -0.55,
    0.75,
    -0.4
]);
const SHADOW_DIR = [
    0.81,
    0.59
];
const ROCK_DARK = [
    38,
    35,
    50
];
const ROCK_LIGHT = [
    176,
    170,
    194
];
const SHELL = [
    217,
    211,
    223
];
const PLATE = [
    97,
    89,
    112
];
const WHEEL = [
    48,
    43,
    59
];
const WHEEL_SIDE = [
    68,
    62,
    80
];
const ROVER_SCALE = 1.2;
const CORAL = "#ff8877";
const PERIWINKLE = "#929fe0";
const terrain = [
    ...[
        "M-20 55C20 26 38 43 66 27S113 7 134-18",
        "M-15 67C23 39 43 55 72 39S117 19 143-7",
        "M-8 79C30 51 50 68 79 52S125 31 151 4",
        "M-2 91C38 64 57 81 87 65S133 44 160 15"
    ].map((d)=>({
            d,
            opacity: 0.62
        })),
    ...[
        "M422 0C439 34 462 44 491 38S542 21 577 45",
        "M414 0C432 42 457 54 490 48S544 31 581 57",
        "M405 0C424 50 453 64 490 58S547 41 586 69"
    ].map((d)=>({
            d,
            opacity: 0.48
        })),
    ...[
        "M-18 301C19 278 36 291 54 316S91 356 125 371",
        "M-15 286C27 260 45 276 65 302S101 345 139 359",
        "M-8 271C35 244 55 261 75 288S113 330 151 345"
    ].map((d)=>({
            d,
            opacity: 0.52
        }))
];
// Each contour ring becomes a terrace, stacked `step` units above the last.
const rocks = [
    {
        step: 13,
        offset: [
            0,
            0
        ],
        rings: [
            "M185 62c13-12 32-11 42 1l10 14c8 12 4 28-8 36l-17 10c-15 8-34 1-38-15l-4-17c-3-12 4-22 15-29Z",
            "M189 69c10-9 25-8 32 2l7 10c6 9 3 21-6 27l-13 8c-11 6-25 1-28-11l-3-13c-2-9 3-17 11-23Z",
            "M194 77c7-6 17-5 22 2l5 7c4 6 2 14-4 18l-9 5c-8 4-17 1-19-8l-2-9c-1-6 2-11 7-15Z"
        ]
    },
    {
        step: 14,
        offset: [
            0,
            0
        ],
        rings: [
            "M353 145c12-13 33-14 45-2l11 11c11 11 9 30-5 38l-20 12c-15 9-35 2-40-15l-5-17c-3-10 3-21 14-27Z",
            "M359 152c9-10 25-11 34-2l8 8c8 8 7 22-4 28l-15 9c-11 7-26 2-30-11l-4-13c-2-8 2-15 11-19Z",
            "M365 159c7-7 17-8 23-1l5 5c5 5 4 14-3 18l-11 6c-8 5-18 1-21-8l-3-9c-1-5 2-9 10-11Z"
        ]
    },
    {
        step: 12,
        offset: [
            0,
            0
        ],
        rings: [
            "M-14 192c18-13 36-8 45 8l8 16c6 13 0 29-14 34l-18 7c-16 6-32-6-32-23v-20c0-9 3-17 11-22Z",
            "M-7 201c13-9 26-5 32 6l6 12c4 10 0 21-10 25l-14 5c-12 4-23-5-23-17v-15c0-7 3-12 9-16Z"
        ]
    },
    {
        // Sits on the straight line from start to goal, so the route visibly
        // bends under it instead of curving for no reason.
        step: 11,
        offset: [
            117,
            60
        ],
        rings: [
            "M81 112c10-10 27-12 39-5l9 7c10 8 10 23 0 31l-13 10c-13 9-31 3-35-12l-4-14c-2-7 0-13 4-17Z",
            "M86 117c8-7 20-9 29-4l7 5c7 6 7 17 0 23l-10 7c-9 7-22 2-25-9l-3-10c-1-5 0-9 2-12Z",
            "M92 122c5-4 13-6 19-3l5 4c4 3 4 10 0 14l-7 5c-6 4-14 1-16-6l-2-6c-1-3 0-6 1-8Z"
        ]
    },
    {
        step: 12,
        offset: [
            0,
            0
        ],
        rings: [
            "M461 133c11-9 28-8 38 2l9 10c8 10 5 25-6 32l-15 8c-13 7-29 0-32-14l-3-17c-2-8 2-16 9-21Z",
            "M466 139c8-6 20-5 27 2l7 7c6 7 4 18-4 23l-11 6c-9 5-21 0-23-10l-2-12c-1-6 2-12 6-16Z",
            "M472 145c5-4 12-3 16 1l5 5c4 4 3 11-3 14l-8 5c-7 3-14 0-15-7l-2-9c0-4 2-7 7-9Z"
        ]
    }
];
function sub(a, b) {
    return [
        a[0] - b[0],
        a[1] - b[1],
        a[2] - b[2]
    ];
}
function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
function cross(a, b) {
    return [
        a[1] * b[2] - a[2] * b[1],
        a[2] * b[0] - a[0] * b[2],
        a[0] * b[1] - a[1] * b[0]
    ];
}
function norm(a) {
    const l = Math.hypot(a[0], a[1], a[2]) || 1;
    return [
        a[0] / l,
        a[1] / l,
        a[2] / l
    ];
}
function world(x, y, h = 0) {
    return [
        x - CENTER[0],
        h,
        y - CENTER[1]
    ];
}
function mix(a, b, t) {
    return a.map((v, i)=>v + (b[i] - v) * t);
}
function rgba(c, a = 1) {
    return `rgba(${c.map((v)=>Math.round(Math.min(255, v))).join(",")},${a})`;
}
function clamp(x, lo, hi) {
    return Math.min(hi, Math.max(lo, x));
}
function makeCamera(target, yaw, pitch, dist) {
    const cp = Math.cos(pitch);
    const pos = [
        target[0] + dist * cp * Math.sin(yaw),
        target[1] + dist * Math.sin(pitch),
        target[2] + dist * cp * Math.cos(yaw)
    ];
    const fwd = norm(sub(target, pos));
    const right = norm(cross(fwd, [
        0,
        1,
        0
    ]));
    const up = cross(right, fwd);
    return {
        pos,
        right,
        up,
        fwd
    };
}
function project(cam, p) {
    const d = sub(p, cam.pos);
    const z = Math.max(1, dot(d, cam.fwd));
    return [
        VIEW_W / 2 + FOCAL * dot(d, cam.right) / z,
        VIEW_H / 2 - FOCAL * dot(d, cam.up) / z,
        z
    ];
}
function samplePath(el, step, closed = false) {
    const length = el.getTotalLength();
    const count = Math.max(8, Math.ceil(length / step));
    const last = closed ? count - 1 : count;
    const points = [];
    for(let i = 0; i <= last; i += 1){
        const p = el.getPointAtLength(length * i / count);
        points.push([
            p.x,
            p.y
        ]);
    }
    return points;
}
function centroidOf(pts) {
    let x = 0;
    let y = 0;
    for (const p of pts){
        x += p[0];
        y += p[1];
    }
    return [
        x / pts.length,
        y / pts.length
    ];
}
function circlePts(c, r, n = 40) {
    return Array.from({
        length: n
    }, (_, i)=>{
        const a = i / n * Math.PI * 2;
        return [
            c[0] + Math.cos(a) * r,
            c[1] + Math.sin(a) * r
        ];
    });
}
function chamferRect(s0, s1, f0, f1, c) {
    return [
        [
            s0 + c,
            f0
        ],
        [
            s1 - c,
            f0
        ],
        [
            s1,
            f0 + c
        ],
        [
            s1,
            f1 - c
        ],
        [
            s1 - c,
            f1
        ],
        [
            s0 + c,
            f1
        ],
        [
            s0,
            f1 - c
        ],
        [
            s0,
            f0 + c
        ]
    ];
}
function tracePoly(ctx, pts, close = true) {
    ctx.beginPath();
    pts.forEach(([x, y], i)=>i ? ctx.lineTo(x, y) : ctx.moveTo(x, y));
    if (close) ctx.closePath();
}
function gridFade(x, y) {
    const d = Math.hypot((x - 280) / 280, (y - 180) / 180);
    if (d >= 1) return 0;
    return d < 0.72 ? 1 - 0.2 * d / 0.72 : 0.8 * (1 - (d - 0.72) / 0.28);
}
function drawGrid(ctx, P) {
    const buckets = Array.from({
        length: 6
    }, ()=>[]);
    const push = (x1, y1, x2, y2)=>{
        const a = gridFade((x1 + x2) / 2, (y1 + y2) / 2);
        if (a <= 0.02) return;
        const [ax, ay] = P(x1, y1);
        const [bx, by] = P(x2, y2);
        buckets[Math.min(5, Math.floor(a * 6))].push([
            ax,
            ay,
            bx,
            by
        ]);
    };
    for(let x = 0; x <= VIEW_W; x += 28){
        for(let y = 0; y < VIEW_H; y += 28)push(x, y, x, y + 28);
    }
    for(let y = 0; y <= VIEW_H; y += 28){
        for(let x = 0; x < VIEW_W; x += 28)push(x, y, x + 28, y);
    }
    ctx.lineCap = "butt";
    ctx.lineWidth = 0.7;
    buckets.forEach((segs, b)=>{
        if (!segs.length) return;
        ctx.strokeStyle = `rgba(226,220,235,${0.07 * (b + 0.5) / 6})`;
        ctx.beginPath();
        for (const [ax, ay, bx, by] of segs){
            ctx.moveTo(ax, ay);
            ctx.lineTo(bx, by);
        }
        ctx.stroke();
    });
    ctx.lineCap = "round";
}
function drawRock(ctx, P, camPos, rock) {
    rock.rings.forEach(({ pts, centroid, bottom, top }, level)=>{
        const walls = [];
        for(let j = 0; j < pts.length; j += 1){
            const a = pts[j];
            const b = pts[(j + 1) % pts.length];
            const mx = (a[0] + b[0]) / 2;
            const my = (a[1] + b[1]) / 2;
            let nx = b[1] - a[1];
            let nz = a[0] - b[0];
            if ((mx - centroid[0]) * nx + (my - centroid[1]) * nz < 0) {
                nx = -nx;
                nz = -nz;
            }
            const len = Math.hypot(nx, nz) || 1;
            nx /= len;
            nz /= len;
            const toCamX = camPos[0] - (mx - CENTER[0]);
            const toCamZ = camPos[2] - (my - CENTER[1]);
            if (nx * toCamX + nz * toCamZ <= 0) continue;
            walls.push({
                quad: [
                    P(a[0], a[1], bottom),
                    P(b[0], b[1], bottom),
                    P(b[0], b[1], top),
                    P(a[0], a[1], top)
                ],
                depth: P(mx, my, (bottom + top) / 2)[2],
                lit: Math.max(0, nx * LIGHT[0] + nz * LIGHT[2])
            });
        }
        walls.sort((q, r)=>r.depth - q.depth);
        ctx.lineWidth = 0.6;
        for (const wall of walls){
            const color = rgba(mix(ROCK_DARK, ROCK_LIGHT, 0.1 + 0.36 * wall.lit + 0.04 * level));
            ctx.fillStyle = color;
            ctx.strokeStyle = color;
            tracePoly(ctx, wall.quad);
            ctx.fill();
            ctx.stroke();
        }
        tracePoly(ctx, pts.map(([x, y])=>P(x, y, top)));
        ctx.fillStyle = rgba(mix(ROCK_DARK, ROCK_LIGHT, 0.36 + 0.1 * level));
        ctx.fill();
        ctx.strokeStyle = "rgba(226,220,235,0.26)";
        ctx.lineWidth = 0.8;
        ctx.stroke();
    });
}
function drawRover(ctx, P, camPos, pos, t) {
    const side = [
        -t[1],
        t[0]
    ];
    // Local rover coords: s = sideways, f = forward, h = height.
    const S = ROVER_SCALE;
    const at = (s, f, h)=>[
            pos[0] + S * (s * side[0] + f * t[0]),
            pos[1] + S * (s * side[1] + f * t[1]),
            S * h
        ];
    const faces = [];
    const face = (local, n, color)=>{
        const pts3 = local.map(([s, f, h])=>at(s, f, h));
        let cx = 0;
        let cy = 0;
        let ch = 0;
        for (const p of pts3){
            cx += p[0];
            cy += p[1];
            ch += p[2];
        }
        cx /= pts3.length;
        cy /= pts3.length;
        ch /= pts3.length;
        const nw = [
            n[0] * side[0] + n[1] * t[0],
            n[2],
            n[0] * side[1] + n[1] * t[1]
        ];
        const toCam = [
            camPos[0] - (cx - CENTER[0]),
            camPos[1] - ch,
            camPos[2] - (cy - CENTER[1])
        ];
        if (dot(nw, toCam) <= 0) return;
        const lit = 0.55 + 0.45 * Math.max(0, dot(nw, LIGHT));
        faces.push({
            pts: pts3.map(([x, y, h])=>P(x, y, h)),
            depth: P(cx, cy, ch)[2],
            fill: rgba(color.map((v)=>v * lit))
        });
    };
    const prism = (poly, h0, h1, color)=>{
        const [cs, cf] = centroidOf(poly);
        poly.forEach((a, j)=>{
            const b = poly[(j + 1) % poly.length];
            let ns = b[1] - a[1];
            let nf = a[0] - b[0];
            if (((a[0] + b[0]) / 2 - cs) * ns + ((a[1] + b[1]) / 2 - cf) * nf < 0) {
                ns = -ns;
                nf = -nf;
            }
            const l = Math.hypot(ns, nf) || 1;
            face([
                [
                    a[0],
                    a[1],
                    h0
                ],
                [
                    b[0],
                    b[1],
                    h0
                ],
                [
                    b[0],
                    b[1],
                    h1
                ],
                [
                    a[0],
                    a[1],
                    h1
                ]
            ], [
                ns / l,
                nf / l,
                0
            ], color);
        });
        face(poly.map(([s, f])=>[
                s,
                f,
                h1
            ]), [
            0,
            0,
            1
        ], color);
    };
    const wheel = (sIn, sOut, fc, r)=>{
        const n = 10;
        const ring = Array.from({
            length: n
        }, (_, i)=>{
            const a = i / n * Math.PI * 2;
            return [
                fc + Math.cos(a) * r,
                r + Math.sin(a) * r
            ];
        });
        ring.forEach((a, i)=>{
            const b = ring[(i + 1) % n];
            const am = (i + 0.5) / n * Math.PI * 2;
            face([
                [
                    sIn,
                    a[0],
                    a[1]
                ],
                [
                    sOut,
                    a[0],
                    a[1]
                ],
                [
                    sOut,
                    b[0],
                    b[1]
                ],
                [
                    sIn,
                    b[0],
                    b[1]
                ]
            ], [
                0,
                Math.cos(am),
                Math.sin(am)
            ], WHEEL);
        });
        face(ring.map(([f, h])=>[
                sOut,
                f,
                h
            ]), [
            Math.sign(sOut),
            0,
            0
        ], WHEEL_SIDE);
    };
    for (const fc of [
        -8,
        7
    ]){
        wheel(9, 12, fc, 3.5);
        wheel(-9, -12, fc, 3.5);
    }
    prism(chamferRect(-8, 8, -14, 14, 3.5), 3, 10, SHELL);
    prism(chamferRect(-5.5, 5.5, -9, 10, 2.2), 10, 12, PLATE);
    faces.sort((a, b)=>b.depth - a.depth);
    ctx.lineWidth = 0.4;
    for (const f of faces){
        ctx.fillStyle = f.fill;
        ctx.strokeStyle = f.fill;
        tracePoly(ctx, f.pts);
        ctx.fill();
        ctx.stroke();
    }
    ctx.fillStyle = PERIWINKLE;
    tracePoly(ctx, [
        at(-3, 10, 10.05),
        at(0, 15, 10.05),
        at(3, 10, 10.05)
    ].map((p)=>P(...p)));
    ctx.fill();
    const [sx, sy, sz] = P(...at(0, 3, 12.1));
    const k = REF_DEPTH / sz;
    ctx.beginPath();
    ctx.arc(sx, sy, 3.1 * k * S, 0, Math.PI * 2);
    ctx.fillStyle = CORAL;
    ctx.strokeStyle = "rgba(255,136,119,0.38)";
    ctx.lineWidth = 3 * k * S;
    ctx.stroke();
    ctx.fill();
}
function RoboticsVisualization() {
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const geometryRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const canvas = canvasRef.current;
        const root = geometryRef.current;
        const ctx = canvas?.getContext("2d");
        if (!canvas || !root || !ctx) return;
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        // Sample every authored path once; the render loop only projects points.
        const routeEl = root.querySelector('[data-role="route"]');
        if (!routeEl) return;
        const routeLen = routeEl.getTotalLength();
        const routeLine = samplePath(routeEl, 3);
        const routeMarks = Array.from({
            length: Math.floor(routeLen / 9) + 1
        }, (_, i)=>{
            const p = routeEl.getPointAtLength(i * 9);
            return {
                s: i * 9,
                pt: [
                    p.x,
                    p.y
                ]
            };
        });
        const terrainLines = Array.from(root.querySelectorAll('[data-role="terrain"]')).map((el, i)=>({
                pts: samplePath(el, 4),
                opacity: terrain[i].opacity
            }));
        const rockGeo = rocks.map((def, r)=>{
            const els = root.querySelectorAll(`[data-rock="${r}"]`);
            const rings = Array.from(els).map((el, k)=>{
                const pts = samplePath(el, 5, true).map(([x, y])=>[
                        x + def.offset[0],
                        y + def.offset[1]
                    ]);
                return {
                    pts,
                    centroid: centroidOf(pts),
                    bottom: k * def.step,
                    top: (k + 1) * def.step
                };
            });
            return {
                rings,
                center: rings[0].centroid,
                height: rings.length * def.step
            };
        });
        let scale = 1;
        let target = null;
        const render = (time, dt)=>{
            const progress = time % lapMs / lapMs;
            const d = routeLen * progress;
            const p = routeEl.getPointAtLength(d);
            const behind = routeEl.getPointAtLength(Math.max(0, d - 1));
            const ahead = routeEl.getPointAtLength(Math.min(routeLen, d + 1));
            const screenAngle = Math.atan2(ahead.y - behind.y, ahead.x - behind.x);
            const tangent = [
                Math.cos(screenAngle),
                Math.sin(screenAngle)
            ];
            const rover = [
                p.x,
                p.y
            ];
            // Drone camera: a slow arc that swings, dips and pulls back, loosely
            // tracking the rover so the parallax on the rocks stays readable.
            const phase = time % orbitMs / orbitMs * Math.PI * 2;
            const desired = world(CENTER[0] + (rover[0] - CENTER[0]) * 0.35, CENTER[1] + (rover[1] - CENTER[1]) * 0.35);
            if (!target) {
                target = desired;
            } else {
                const k = 1 - Math.exp(-dt * 1.4);
                const prev = target;
                target = prev.map((v, i)=>v + (desired[i] - v) * k);
            }
            const cam = makeCamera(target, 0.62 * Math.sin(phase), 1.0 + 0.18 * Math.sin(2 * phase + 0.6), 515 + 50 * Math.cos(phase));
            const P = (x, y, h = 0)=>project(cam, world(x, y, h));
            const size = (z)=>REF_DEPTH / z;
            ctx.setTransform(scale, 0, 0, scale, 0, 0);
            ctx.clearRect(0, 0, VIEW_W, VIEW_H);
            ctx.lineJoin = "round";
            ctx.lineCap = "round";
            // Ground layer
            drawGrid(ctx, P);
            ctx.lineWidth = 0.8;
            for (const line of terrainLines){
                ctx.strokeStyle = `rgba(193,183,211,${0.16 * line.opacity})`;
                tracePoly(ctx, line.pts.map(([x, y])=>P(x, y)), false);
                ctx.stroke();
            }
            ctx.strokeStyle = "rgba(146,159,224,0.12)";
            ctx.lineWidth = 5;
            tracePoly(ctx, routeLine.map(([x, y])=>P(x, y)), false);
            ctx.stroke();
            for (const mark of routeMarks){
                const [x, y, z] = P(mark.pt[0], mark.pt[1]);
                ctx.fillStyle = mark.s < d ? "rgba(146,159,224,0.28)" : "rgba(146,159,224,0.95)";
                ctx.beginPath();
                ctx.arc(x, y, 1.05 * size(z), 0, Math.PI * 2);
                ctx.fill();
            }
            const breathe = 0.55 + 0.45 * (0.5 + 0.5 * Math.sin(time / 3400 * Math.PI * 2));
            const [gx, gy, gz] = P(GOAL[0], GOAL[1]);
            const gs = size(gz);
            const glow = ctx.createRadialGradient(gx, gy, 0, gx, gy, 34 * gs);
            glow.addColorStop(0, `rgba(146,159,224,${0.3 * breathe})`);
            glow.addColorStop(1, "rgba(146,159,224,0)");
            ctx.fillStyle = glow;
            ctx.beginPath();
            ctx.arc(gx, gy, 34 * gs, 0, Math.PI * 2);
            ctx.fill();
            ctx.save();
            ctx.shadowColor = "rgba(146,159,224,0.55)";
            ctx.shadowBlur = 7 * scale * gs;
            tracePoly(ctx, circlePts(GOAL, 14).map(([x, y])=>P(x, y)));
            ctx.fillStyle = "rgba(23,21,31,0.78)";
            ctx.fill();
            ctx.strokeStyle = PERIWINKLE;
            ctx.lineWidth = 3 * gs;
            ctx.stroke();
            ctx.restore();
            tracePoly(ctx, circlePts(GOAL, 7, 24).map(([x, y])=>P(x, y)));
            ctx.fillStyle = PERIWINKLE;
            ctx.fill();
            // Contact shadows
            ctx.save();
            ctx.shadowColor = "rgba(4,3,10,0.55)";
            ctx.shadowBlur = 14 * scale;
            ctx.fillStyle = "rgba(6,5,12,0.35)";
            for (const rock of rockGeo){
                const off = rock.height * 0.6;
                tracePoly(ctx, rock.rings[0].pts.map(([x, y])=>P(x + off * SHADOW_DIR[0], y + off * SHADOW_DIR[1])));
                ctx.fill();
            }
            const side = [
                -tangent[1],
                tangent[0]
            ];
            tracePoly(ctx, chamferRect(-11, 11, -16, 16, 4).map(([s, f])=>P(rover[0] + ROVER_SCALE * (s * side[0] + f * tangent[0] + 4 * SHADOW_DIR[0]), rover[1] + ROVER_SCALE * (s * side[1] + f * tangent[1] + 4 * SHADOW_DIR[1]))));
            ctx.fill();
            ctx.restore();
            // Everything with height, painted far to near
            const drawables = [
                ...rockGeo.map((rock)=>({
                        depth: P(rock.center[0], rock.center[1], rock.height * 0.5)[2],
                        draw: ()=>drawRock(ctx, P, cam.pos, rock)
                    })),
                {
                    depth: P(rover[0], rover[1], 6 * ROVER_SCALE)[2],
                    draw: ()=>drawRover(ctx, P, cam.pos, rover, tangent)
                },
                {
                    depth: gz,
                    draw: ()=>{
                        const [tx, ty] = P(GOAL[0], GOAL[1], 64);
                        const beam = ctx.createLinearGradient(gx, gy, tx, ty);
                        beam.addColorStop(0, `rgba(146,159,224,${0.55 * breathe})`);
                        beam.addColorStop(1, "rgba(146,159,224,0)");
                        ctx.strokeStyle = beam;
                        ctx.lineWidth = 2.2 * gs;
                        ctx.beginPath();
                        ctx.moveTo(gx, gy);
                        ctx.lineTo(tx, ty);
                        ctx.stroke();
                    }
                }
            ];
            drawables.sort((a, b)=>b.depth - a.depth).forEach((o)=>o.draw());
        };
        const staticTime = lapMs * 0.62;
        const resize = ()=>{
            const rect = canvas.getBoundingClientRect();
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            canvas.width = Math.max(1, Math.round(rect.width * dpr));
            canvas.height = Math.max(1, Math.round(rect.height * dpr));
            scale = canvas.width / VIEW_W;
            if (reduceMotion) {
                target = null;
                render(staticTime, 0);
            }
        };
        resize();
        const ro = new ResizeObserver(resize);
        ro.observe(canvas);
        if (reduceMotion) return ()=>ro.disconnect();
        let frame = 0;
        let last = 0;
        let clock = 0;
        const loop = (now)=>{
            const dt = last ? Math.min(0.05, (now - last) / 1000) : 0;
            last = now;
            clock += dt * 1000;
            render(clock, dt);
            frame = window.requestAnimationFrame(loop);
        };
        const startLoop = ()=>{
            if (frame) return;
            last = 0;
            frame = window.requestAnimationFrame(loop);
        };
        const stopLoop = ()=>{
            window.cancelAnimationFrame(frame);
            frame = 0;
        };
        // Pause while scrolled out of view; the clock resumes where it left off.
        const io = new IntersectionObserver(([entry])=>entry.isIntersecting ? startLoop() : stopLoop());
        io.observe(canvas);
        return ()=>{
            stopLoop();
            io.disconnect();
            ro.disconnect();
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
        className: "robotics-visualization",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: "robotics-canvas",
                role: "img",
                "aria-label": "A drone-view camera circles above a rover as it drives around rock obstacles toward a glowing goal."
            }, void 0, false, {
                fileName: "[project]/src/components/RoboticsVisualization.tsx",
                lineNumber: 651,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ref: geometryRef,
                className: "robotics-geometry",
                "aria-hidden": "true",
                focusable: "false",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        "data-role": "route",
                        d: route
                    }, void 0, false, {
                        fileName: "[project]/src/components/RoboticsVisualization.tsx",
                        lineNumber: 660,
                        columnNumber: 9
                    }, this),
                    terrain.map((line, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            "data-role": "terrain",
                            d: line.d
                        }, `t-${i}`, false, {
                            fileName: "[project]/src/components/RoboticsVisualization.tsx",
                            lineNumber: 662,
                            columnNumber: 11
                        }, this)),
                    rocks.map((rock, r)=>rock.rings.map((d, k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                "data-rock": r,
                                d: d
                            }, `r-${r}-${k}`, false, {
                                fileName: "[project]/src/components/RoboticsVisualization.tsx",
                                lineNumber: 665,
                                columnNumber: 36
                            }, this)))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/RoboticsVisualization.tsx",
                lineNumber: 659,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/RoboticsVisualization.tsx",
        lineNumber: 650,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/SWEVisualization.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SWEVisualization
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
// Virtual canvas matches the Robotics scene.
const VIEW_W = 560;
const VIEW_H = 360;
const FOCAL = 525;
const REF_DEPTH = 525;
const NEAR = 30;
// The city runs on a 20 second timeline. Its first 2.5 seconds are only the opening
// hover, so that part is compressed: the cube spins up, then its panels break off.
const CITY_LOOP = 20;
const OPEN_T = 1.3; // seconds the cube spins up before its panels break off
const OPEN_SKIP = 2.5 - OPEN_T;
const LOOP = CITY_LOOP - OPEN_SKIP; // seconds
// Editor window geometry, in world units on the ground plane.
const CHAR = 3.6;
const ROW = 8;
const TITLE = 13;
const GUTTER = 16;
const PAD = 8;
const BAR = 3;
const ROWS = 10;
const WIN_H = TITLE + ROWS * ROW + 6;
const FONT_PX = 10;
const BLUE = [
    144,
    166,
    237
];
const LILAC = [
    194,
    180,
    214
];
const CREAM = [
    238,
    230,
    229
];
const CORAL = [
    255,
    136,
    119
];
const PERIWINKLE = [
    146,
    159,
    224
];
const MUTED = [
    170,
    165,
    178
];
const PALETTE = [
    BLUE,
    LILAC,
    CREAM,
    CORAL,
    BLUE,
    LILAC
];
const DARK = [
    30,
    28,
    42
];
const LIGHT = [
    132,
    126,
    152
];
const LIGHT_DIR = norm([
    -0.55,
    0.75,
    -0.4
]);
const MONO = 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace';
// ---------------------------------------------------------------- math
function clamp(x, lo, hi) {
    return Math.min(hi, Math.max(lo, x));
}
function lerp(a, b, t) {
    return a + (b - a) * t;
}
function smooth01(x) {
    const t = clamp(x, 0, 1);
    return t * t * (3 - 2 * t);
}
function smoother(x) {
    const t = clamp(x, 0, 1);
    return t * t * t * (t * (t * 6 - 15) + 10);
}
function ramp(t, a, b) {
    return smoother((t - a) / (b - a));
}
function mod(x, m) {
    return (x % m + m) % m;
}
function mix(a, b, t) {
    return [
        lerp(a[0], b[0], t),
        lerp(a[1], b[1], t),
        lerp(a[2], b[2], t)
    ];
}
function rgba(c, a = 1) {
    return `rgba(${Math.round(c[0])},${Math.round(c[1])},${Math.round(c[2])},${a})`;
}
function sub(a, b) {
    return [
        a[0] - b[0],
        a[1] - b[1],
        a[2] - b[2]
    ];
}
function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
function cross(a, b) {
    return [
        a[1] * b[2] - a[2] * b[1],
        a[2] * b[0] - a[0] * b[2],
        a[0] * b[1] - a[1] * b[0]
    ];
}
function norm(a) {
    const l = Math.hypot(a[0], a[1], a[2]) || 1;
    return [
        a[0] / l,
        a[1] / l,
        a[2] / l
    ];
}
function hash(a, b, c) {
    const s = Math.sin(a * 127.1 + b * 311.7 + c * 74.7) * 43758.5453;
    return s - Math.floor(s);
}
function createRandom(seed) {
    let state = seed >>> 0;
    return ()=>{
        state += 0x6d2b79f5;
        let value = state;
        value = Math.imul(value ^ value >>> 15, value | 1);
        value ^= value + Math.imul(value ^ value >>> 7, value | 61);
        return ((value ^ value >>> 14) >>> 0) / 4294967296;
    };
}
function makeCamera(target, yaw, pitch, dist) {
    const cp = Math.cos(pitch);
    const sp = Math.sin(pitch);
    const sy = Math.sin(yaw);
    const cy = Math.cos(yaw);
    const pos = [
        target[0] + dist * cp * sy,
        target[1] + dist * sp,
        target[2] + dist * cp * cy
    ];
    const fwd = [
        -cp * sy,
        -sp,
        -cp * cy
    ];
    const right = [
        cy,
        0,
        -sy
    ];
    return {
        pos,
        right,
        up: cross(right, fwd),
        fwd
    };
}
function project(cam, p) {
    const d = sub(p, cam.pos);
    const z = dot(d, cam.fwd);
    const zs = Math.max(1, z);
    return [
        VIEW_W / 2 + FOCAL * dot(d, cam.right) / zs,
        VIEW_H / 2 - FOCAL * dot(d, cam.up) / zs,
        z
    ];
}
const random = createRandom(47);
const pick = (items)=>items[Math.floor(random() * items.length)];
const FILE_SPECS = [
    {
        key: "sql",
        name: "ingest.sql",
        first: 12,
        rows: [
            0,
            "INSERT INTO features (user_id, embedding)",
            "SELECT id, embed(body) FROM events",
            "WHERE ts > now() - INTERVAL '1 day';",
            null,
            0,
            2,
            2,
            0,
            2
        ],
        start: 4.5,
        fall: 16.8
    },
    {
        key: "tf",
        name: "main.tf",
        first: 41,
        rows: [
            0,
            'resource "cloud_instance" "gpu_node" {',
            '  machine_type = "gpu-a100-8x"',
            "  count = var.node_count",
            2,
            2,
            4,
            4,
            2,
            0
        ],
        start: 5.4,
        fall: 16.6
    },
    {
        key: "cu",
        name: "matmul.cu",
        first: 27,
        rows: [
            "__global__ void matmul(float* A, float* B, float* C) {",
            "  int row = blockIdx.y * blockDim.y + threadIdx.y;",
            2,
            2,
            4,
            4,
            "  C[row * N + col] = sum;",
            0,
            null,
            0
        ],
        start: 6.3,
        fall: 16.4
    },
    {
        key: "py",
        name: "server.py",
        first: 58,
        rows: [
            0,
            '@app.post("/predict")',
            "async def predict(req: Request):",
            '    return {"y": model(await req.json())}',
            null,
            0,
            4,
            4,
            8,
            4
        ],
        start: 7.2,
        fall: 16.2
    },
    {
        key: "yml",
        name: "deploy.yml",
        first: 19,
        rows: [
            2,
            "    runs-on: ubuntu-latest",
            4,
            "      - run: docker build -t api .",
            "      - run: kubectl apply -f k8s/",
            6,
            6,
            4,
            2,
            2
        ],
        start: 8.1,
        fall: 16.0
    }
];
function buildRows(spec, w) {
    return spec.rows.map((r, i)=>{
        const v = TITLE + ROW * (i + 0.5) + 2;
        const color = pick([
            BLUE,
            LILAC,
            CREAM,
            CORAL,
            CREAM
        ]);
        if (typeof r === "string") {
            const lead = r.length - r.trimStart().length;
            return {
                v,
                text: r.trimStart(),
                lead,
                color,
                bars: []
            };
        }
        const bars = [];
        if (typeof r === "number") {
            let u = GUTTER + PAD + r * CHAR;
            const count = 3 + Math.floor(random() * 5);
            for(let b = 0; b < count && u < w - PAD - 10; b += 1){
                const len = 8 + random() * 26;
                const u1 = Math.min(w - PAD, u + len);
                bars.push({
                    u0: u,
                    u1,
                    color: pick(PALETTE),
                    opacity: 0.5 + random() * 0.35
                });
                u = u1 + 4 + random() * 4;
            }
        }
        return {
            v,
            lead: 0,
            color,
            bars
        };
    });
}
function widthOf(spec) {
    const longest = Math.max(...spec.rows.map((r)=>typeof r === "string" ? r.length : 0));
    return Math.max(150, longest * CHAR + GUTTER + PAD * 2);
}
// Back row: storage, data center, GPU hall. Front row: API campus, shipping yard.
function layoutFiles() {
    const widths = FILE_SPECS.map(widthOf);
    const gap = 22;
    const place = (keys, cz)=>{
        const ws = keys.map((k)=>widths[FILE_SPECS.findIndex((f)=>f.key === k)]);
        let x = -(ws.reduce((a, b)=>a + b, 0) + gap * (ws.length - 1)) / 2;
        return keys.map((k, i)=>{
            const cx = x + ws[i] / 2;
            x += ws[i] + gap;
            return {
                key: k,
                cx,
                cz,
                w: ws[i]
            };
        });
    };
    const spots = [
        ...place([
            "sql",
            "tf",
            "cu"
        ], -62),
        ...place([
            "py",
            "yml"
        ], 62)
    ];
    // The opening desktop: a tighter, straight three-row layout seen up close.
    const deskGap = 16;
    const deskRows = [
        [
            "sql",
            "tf"
        ],
        [
            "py",
            "cu"
        ],
        [
            "yml"
        ]
    ];
    const desk = {};
    deskRows.forEach((keys, r)=>{
        const ws = keys.map((k)=>widths[FILE_SPECS.findIndex((f)=>f.key === k)]);
        let x = -(ws.reduce((a, b)=>a + b, 0) + deskGap * (ws.length - 1)) / 2;
        keys.forEach((k, i)=>{
            desk[k] = [
                x + ws[i] / 2,
                (r - 1) * (WIN_H + 14)
            ];
            x += ws[i] + deskGap;
        });
    });
    return FILE_SPECS.map((spec)=>{
        const spot = spots.find((s)=>s.key === spec.key);
        return {
            ...spec,
            w: spot.w,
            cx: spot.cx,
            cz: spot.cz,
            deskX: desk[spec.key][0],
            deskZ: desk[spec.key][1],
            rowsData: buildRows(spec, spot.w)
        };
    });
}
const FILES = layoutFiles();
// Opening: the five files are the faces of one glass cube (server.py is the lid).
// The cube spins up, and its panels break off one after another, flying out
// tangentially along curving paths and settling flat onto their lots. At the end of
// the loop the whole thing plays in reverse, so the cube reassembles and spins down.
const CUBE = 110;
const CUBE_LIFT = 10;
const SPIN_START = 0.1;
const SPIN_UP = 1.1;
const OMEGA = 5; // peak spin, radians per second
const THETA0 = 0.6; // resting angle, so two sides of the cube show
const FLY = 0.85;
const RELEASE = {
    py: 1.3,
    yml: 1.36,
    cu: 1.42,
    tf: 1.48,
    sql: 1.54
};
const FACE_NORMAL = {
    sql: [
        -1,
        0
    ],
    tf: [
        0,
        -1
    ],
    cu: [
        1,
        0
    ],
    yml: [
        0,
        1
    ],
    py: [
        0,
        1
    ]
};
function spinAngle(tau) {
    const x = clamp((tau - SPIN_START) / SPIN_UP, 0, 1);
    return THETA0 + OMEGA * SPIN_UP * (x ** 3 - x ** 4 / 2) + OMEGA * Math.max(0, tau - SPIN_START - SPIN_UP);
}
function spinRate(tau) {
    const x = clamp((tau - SPIN_START) / SPIN_UP, 0, 1);
    return OMEGA * x * x * (3 - 2 * x);
}
function rot2(p, a) {
    const c = Math.cos(a);
    const s = Math.sin(a);
    return [
        p[0] * c + p[1] * s,
        -p[0] * s + p[1] * c
    ];
}
function attachedPose(f, theta) {
    const N = rot2(FACE_NORMAL[f.key], theta);
    const psi = Math.atan2(N[0], N[1]);
    if (f.key === "py") return {
        c: [
            0,
            CUBE_LIFT + CUBE,
            0
        ],
        psi,
        phi: 0,
        w: CUBE,
        hgt: CUBE
    };
    return {
        c: [
            N[0] * CUBE / 2,
            CUBE_LIFT + CUBE / 2,
            N[1] * CUBE / 2
        ],
        psi,
        phi: Math.PI / 2,
        w: CUBE,
        hgt: CUBE
    };
}
function panelPose(f, tau) {
    const r = RELEASE[f.key];
    if (tau <= r) return attachedPose(f, spinAngle(tau));
    const th = spinAngle(r);
    const a = attachedPose(f, th);
    const b = attachedPose(f, th + 0.02);
    // leave along the direction of motion; the lid, at the center, heads for its lot
    let T = [
        b.c[0] - a.c[0],
        b.c[2] - a.c[2]
    ];
    if (f.key === "py") T = [
        f.cx,
        f.cz
    ];
    const tl = Math.hypot(T[0], T[1]) || 1;
    T = [
        T[0] / tl,
        T[1] / tl
    ];
    // keep turning the same way, easing out to the lot's orientation
    const dir = Math.sign(Math.atan2(Math.sin(b.psi - a.psi), Math.cos(b.psi - a.psi))) || 1;
    const turn = Math.PI * 2;
    const spinTravel = OMEGA * FLY; // how far it would turn at full spin during the flight
    let target = dir > 0 ? Math.ceil(a.psi / turn) * turn : Math.floor(a.psi / turn) * turn;
    if (Math.abs(target - a.psi) < spinTravel / 3) target += dir * turn;
    const delta = target - a.psi;
    const k = Math.min(3, spinTravel / Math.abs(delta)); // start at the cube's spin rate
    const u = clamp((tau - r) / FLY, 0, 1);
    const e = 1 - (1 - u) * (1 - u); // leaves at speed, lands gently
    const p0 = [
        a.c[0],
        a.c[2]
    ];
    // the first control point sets the launch speed to match the spinning face
    const launch = f.key === "py" ? 6 : OMEGA * (CUBE / 2) * FLY / 6;
    const p1 = [
        p0[0] + T[0] * launch,
        p0[1] + T[1] * launch
    ];
    const p3 = [
        f.cx,
        f.cz
    ];
    const p2 = [
        lerp(p1[0], p3[0], 0.65),
        lerp(p1[1], p3[1], 0.65)
    ];
    const m = 1 - e;
    const bx = m * m * m * p0[0] + 3 * m * m * e * p1[0] + 3 * m * e * e * p2[0] + e * e * e * p3[0];
    const bz = m * m * m * p0[1] + 3 * m * m * e * p1[1] + 3 * m * e * e * p2[1] + e * e * e * p3[1];
    const lift = f.key === "py" ? 30 : 16;
    const turnEase = k * (u ** 3 - 2 * u ** 2 + u) + 3 * u ** 2 - 2 * u ** 3;
    return {
        c: [
            bx,
            lerp(a.c[1], 0, e) + lift * Math.sin(Math.PI * u) ** 2,
            bz
        ],
        psi: a.psi + delta * turnEase,
        phi: a.phi * (1 - smooth01(u * 1.8)),
        w: lerp(CUBE, f.w, smoother(u)),
        hgt: lerp(CUBE, WIN_H, smoother(u))
    };
}
const PER_ROW = 0.17;
const GLASS_HI = [
    70,
    66,
    96
];
const GLASS_LO = [
    34,
    31,
    48
];
const FILE_BY_KEY = Object.fromEntries(FILES.map((f)=>[
        f.key,
        f
    ]));
// Lot-local coordinates once a window has settled.
const lotX = (f, u)=>f.cx - f.w / 2 + u;
const lotZ = (f, v)=>f.cz - WIN_H / 2 + v;
const rowV = (i)=>TITLE + ROW * (i + 0.5) + 2;
const ITEMS = [];
// Storage: silos rising where the pipeline's rows were.
{
    const f = FILE_BY_KEY.sql;
    const silos = [
        [
            0.2,
            0.36,
            13,
            46
        ],
        [
            0.42,
            0.3,
            11,
            58
        ],
        [
            0.65,
            0.38,
            14,
            40
        ],
        [
            0.85,
            0.33,
            10,
            52
        ],
        [
            0.32,
            0.72,
            12,
            34
        ],
        [
            0.56,
            0.75,
            10,
            44
        ],
        [
            0.78,
            0.74,
            9,
            30
        ]
    ];
    silos.forEach(([u, v, r, h], i)=>{
        ITEMS.push({
            type: "silo",
            cx: lotX(f, u * f.w),
            cz: lotZ(f, v * WIN_H),
            r,
            h,
            start: f.start + i * 0.12,
            dur: 1.1,
            fall: f.fall + i * 0.05
        });
    });
}// Data center: each group of code rows extrudes into a long, low rack hall.
{
    const f = FILE_BY_KEY.tf;
    const groups = [
        [
            1,
            3,
            15
        ],
        [
            4,
            6,
            17
        ],
        [
            7,
            9,
            14
        ]
    ];
    groups.forEach(([a, b, h], i)=>{
        ITEMS.push({
            type: "box",
            x0: lotX(f, GUTTER + 4),
            x1: lotX(f, f.w - PAD),
            z0: lotZ(f, rowV(a) - ROW / 2),
            z1: lotZ(f, rowV(b) + ROW / 2 - 3),
            h,
            deco: "racks",
            roof: "fans",
            color: PERIWINKLE,
            tint: PERIWINKLE,
            tintAmt: 0.04,
            start: f.start + i * 0.18,
            dur: 1.1,
            fall: f.fall + i * 0.06
        });
    });
}// GPU hall: its own building beside the data center, running hot.
{
    const f = FILE_BY_KEY.cu;
    const groups = [
        [
            0,
            3,
            22
        ],
        [
            5,
            9,
            19
        ]
    ];
    groups.forEach(([a, b, h], i)=>{
        ITEMS.push({
            type: "box",
            x0: lotX(f, GUTTER + 4),
            x1: lotX(f, f.w - PAD),
            z0: lotZ(f, rowV(a) - ROW / 2),
            z1: lotZ(f, rowV(b) + ROW / 2 - 3),
            h,
            deco: "vents",
            roof: "hot",
            color: CORAL,
            tint: CORAL,
            tintAmt: 0.05,
            start: f.start + i * 0.2,
            dur: 1.1,
            fall: f.fall + i * 0.06
        });
    });
}// API campus: the tower is drawn from the file itself; offices sit beside it.
const TOWER_W = 46;
const TOWER_H = 150;
{
    const f = FILE_BY_KEY.py;
    const offices = [
        [
            8,
            44,
            20,
            70,
            58
        ],
        [
            f.w - 46,
            f.w - 8,
            40,
            94,
            46
        ]
    ];
    offices.forEach(([u0, u1, v0, v1, h], i)=>{
        ITEMS.push({
            type: "box",
            x0: lotX(f, u0),
            x1: lotX(f, u1),
            z0: lotZ(f, v0),
            z1: lotZ(f, v1),
            h,
            deco: "strips",
            roof: "none",
            color: BLUE,
            tint: BLUE,
            tintAmt: 0.06,
            start: f.start + 0.7 + i * 0.2,
            dur: 1.1,
            fall: f.fall
        });
    });
}// Shipping yard: every line becomes a row of stacked containers under a gantry crane.
{
    const f = FILE_BY_KEY.yml;
    for(let i = 1; i < ROWS - 1; i += 1){
        const v = rowV(i);
        for(let u = GUTTER + 8; u + 12 < f.w - 10; u += 13.5){
            if (random() < 0.15) continue;
            const levels = 1 + Math.floor(random() * 3);
            const color = pick([
                CORAL,
                BLUE,
                LILAC,
                CREAM,
                BLUE
            ]);
            for(let level = 0; level < levels; level += 1){
                ITEMS.push({
                    type: "container",
                    x0: lotX(f, u),
                    x1: lotX(f, u + 12),
                    z0: lotZ(f, v - 2.6),
                    z1: lotZ(f, v + 2.6),
                    level,
                    color,
                    start: f.start + i * 0.06 + level * 0.22 + u / f.w * 0.12,
                    dur: 0.6,
                    fall: f.fall + level * 0.05
                });
            }
        }
    }
    ITEMS.push({
        type: "crane",
        f,
        start: f.start + 0.4,
        dur: 1,
        fall: f.fall
    });
}// Ordinary city fabric around the districts, packed tight so blocks read as one city.
// Blocks in front of the districts stay low so the camera can see over them;
// the skyline behind is taller.
function addFabric(x0, x1, z0, z1, band) {
    if (random() < 0.12) return;
    const split = x1 - x0 > 26 && random() < 0.5 ? x0 + 11 + random() * (x1 - x0 - 22) : null;
    const spans = split ? [
        [
            x0,
            split - 1
        ],
        [
            split + 1,
            x1
        ]
    ] : [
        [
            x0,
            x1
        ]
    ];
    for (const [a, b] of spans){
        const r = Math.hypot((a + b) / 2 / 380, (z0 + z1) / 2 / 290);
        ITEMS.push({
            type: "box",
            x0: a,
            x1: b,
            z0,
            z1,
            h: band === "front" ? 6 + random() * 10 : band === "side" ? 8 + random() * 18 : 14 + random() ** 1.4 * 40 + (1 - r) * 12,
            deco: "dots",
            roof: "none",
            color: pick(PALETTE),
            tint: DARK,
            tintAmt: 0,
            start: 8.6 + r * 0.9,
            dur: 1.2,
            fall: 15.6 + (1 - r) * 0.4
        });
    }
}
for(let x = -380; x < 380; x += 40){
    for(let z = -148; z > -300; z -= 32)addFabric(x, x + 34, z, z + 26, "back");
    for(let z = 122; z < 290; z += 32)addFabric(x, x + 34, z, z + 26, "front");
}
for (const [x0, x1] of [
    [
        -376,
        -342
    ],
    [
        -338,
        -304
    ],
    [
        304,
        338
    ],
    [
        342,
        376
    ]
]){
    for(let z = -110; z < 110; z += 32)addFabric(x0, x1, z, z + 26, "side");
}
function route(pts) {
    const cum = [
        0
    ];
    for(let i = 1; i < pts.length; i += 1){
        cum.push(cum[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]));
    }
    return {
        pts,
        cum,
        len: cum[cum.length - 1]
    };
}
function along(r, s) {
    for(let i = 1; i < r.pts.length; i += 1){
        if (s <= r.cum[i]) {
            const u = (s - r.cum[i - 1]) / (r.cum[i] - r.cum[i - 1] || 1);
            return [
                lerp(r.pts[i - 1][0], r.pts[i][0], u),
                lerp(r.pts[i - 1][1], r.pts[i][1], u)
            ];
        }
    }
    return r.pts[r.pts.length - 1];
}
const S = FILE_BY_KEY.sql;
const D = FILE_BY_KEY.tf;
const G = FILE_BY_KEY.cu;
const A = FILE_BY_KEY.py;
const Y = FILE_BY_KEY.yml;
const BACK = -12;
const FRONT = 12;
const TOWER_BACK = A.cz - TOWER_W / 2 - 1;
const TOWER_FRONT = A.cz + TOWER_W / 2 + 1;
const WAVE_SPEED = 60;
const pulse = (pts, t0, speed, count, color, box = false, spacing = 9)=>({
        r: route(pts),
        t0,
        speed,
        count,
        spacing,
        color,
        box
    });
const arrive = (p)=>p.t0 + p.r.len / p.speed;
const STORE_PULSE = pulse([
    [
        S.cx,
        BACK
    ],
    [
        S.cx,
        0
    ],
    [
        D.cx,
        0
    ],
    [
        D.cx,
        BACK
    ]
], 8.6, 200, 6, CREAM);
const DC_T = arrive(STORE_PULSE);
const DC_PULSE = pulse([
    [
        D.cx,
        BACK
    ],
    [
        D.cx,
        0
    ],
    [
        G.cx,
        0
    ],
    [
        G.cx,
        BACK
    ]
], DC_T + 0.15, 200, 6, PERIWINKLE);
const GPU_T = arrive(DC_PULSE);
const GPU_PULSE = pulse([
    [
        G.cx,
        BACK
    ],
    [
        G.cx,
        0
    ],
    [
        A.cx,
        0
    ],
    [
        A.cx,
        TOWER_BACK
    ]
], GPU_T + 0.15, 200, 7, PERIWINKLE);
const TOWER_T = arrive(GPU_PULSE);
const BEACON_T = TOWER_T + (TOWER_H + 12) / WAVE_SPEED;
const OUT_PULSES = [
    -1,
    1
].map((side)=>pulse([
        [
            A.cx,
            TOWER_FRONT
        ],
        [
            A.cx,
            116
        ],
        [
            side * 380,
            116
        ]
    ], TOWER_T + 0.8, 160, 6, CORAL, false, 11));
// A deploy rolls in from the shipping yard to the tower.
const DEPLOY_PULSE = pulse([
    [
        Y.cx,
        FRONT
    ],
    [
        Y.cx,
        0
    ],
    [
        A.cx + 30,
        0
    ],
    [
        A.cx + 30,
        TOWER_BACK + 4
    ]
], 9.6, 70, 1, LILAC, true);
const DEPLOY_T = arrive(DEPLOY_PULSE);
const PULSES = [
    STORE_PULSE,
    DC_PULSE,
    GPU_PULSE,
    ...OUT_PULSES,
    DEPLOY_PULSE
];
const AMBIENT = [
    {
        r: route([
            [
                -380,
                -116
            ],
            [
                380,
                -116
            ]
        ]),
        speed: 24,
        color: CREAM,
        count: 5,
        phase: 0.4
    },
    {
        r: route([
            [
                380,
                -116
            ],
            [
                -380,
                -116
            ]
        ]),
        speed: 20,
        color: LILAC,
        count: 4,
        phase: 0.9
    }
];
function bump(t, t0, rise = 0.25, decay = 1.6) {
    if (t < t0) return 0;
    return Math.min(1, (t - t0) / rise) * Math.exp(-Math.max(0, t - t0 - rise) / decay);
}
const size = (z)=>REF_DEPTH / Math.max(NEAR, z);
function tracePoly(ctx, pts) {
    ctx.beginPath();
    pts.forEach(([x, y], i)=>i ? ctx.lineTo(x, y) : ctx.moveTo(x, y));
    ctx.closePath();
}
function bilerp(q, u, v) {
    const bx = lerp(q[0][0], q[1][0], u);
    const by = lerp(q[0][1], q[1][1], u);
    const tx = lerp(q[3][0], q[2][0], u);
    const ty = lerp(q[3][1], q[2][1], u);
    return [
        lerp(bx, tx, v),
        lerp(by, ty, v)
    ];
}
function drawGlow(ctx, x, y, r, c, a) {
    if (a <= 0.01 || r <= 0) return;
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, rgba(c, a));
    g.addColorStop(1, rgba(c, 0));
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
}
// Text laid along a direction on screen, sized to span exactly a to b.
function drawText(ctx, text, a, b, color, alpha, glowPx = 0) {
    const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
    if (len < 2 || alpha <= 0.01) return;
    const measured = ctx.measureText(text).width || 1;
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = rgba(color);
    if (glowPx > 0) {
        ctx.shadowColor = rgba(color, 0.55);
        ctx.shadowBlur = glowPx;
    }
    ctx.translate(a[0], a[1]);
    ctx.rotate(Math.atan2(b[1] - a[1], b[0] - a[0]));
    ctx.scale(len / measured, len / measured);
    ctx.fillText(text, 0, 0);
    ctx.restore();
}
function wallColor(lit, tint, tintAmt, lift = 0) {
    return mix(mix(DARK, LIGHT, 0.1 + 0.32 * lit + lift), tint, tintAmt);
}
// The tower lights floor by floor once compute arrives, then stays lit while serving.
function towerWave(h, t) {
    if (t < TOWER_T) return 0;
    const waveH = (t - TOWER_T) * WAVE_SPEED - 12;
    return Math.exp(-((h - waveH) ** 2) / (2 * 14 * 14));
}
function towerBase(t) {
    return 0.3 + 0.3 * ramp(t, TOWER_T + 1.2, BEACON_T + 0.5);
}
function boxWalls(env, x0, x1, z0, z1, h0, h1) {
    const { P, cam } = env;
    const defs = [
        [
            x0,
            z1,
            x1,
            z1,
            0,
            1
        ],
        [
            x1,
            z0,
            x0,
            z0,
            0,
            -1
        ],
        [
            x1,
            z1,
            x1,
            z0,
            1,
            0
        ],
        [
            x0,
            z0,
            x0,
            z1,
            -1,
            0
        ]
    ];
    const walls = [];
    defs.forEach(([ax, az, bx, bz, nx, nz], face)=>{
        const mx = (ax + bx) / 2;
        const mz = (az + bz) / 2;
        if (nx * (cam[0] - mx) + nz * (cam[2] - mz) <= 0) return;
        const q = [
            P(ax, h0, az),
            P(bx, h0, bz),
            P(bx, h1, bz),
            P(ax, h1, az)
        ];
        if (q.some((p)=>p[2] < NEAR)) return;
        walls.push({
            q,
            depth: P(mx, (h0 + h1) / 2, mz)[2],
            lit: Math.max(0, nx * LIGHT_DIR[0] + nz * LIGHT_DIR[2]),
            len: Math.hypot(bx - ax, bz - az),
            face
        });
    });
    return walls.sort((a, b)=>b.depth - a.depth);
}
function decorateWall(env, w, h0, h1, deco, color, seed, alpha, wave = false) {
    const { ctx, time, t, act } = env;
    const k = size(w.q[0][2]);
    const hgt = h1 - h0;
    if (deco === "dots") {
        const cols = Math.floor(w.len / 5);
        const rows = Math.floor((hgt - 2.5) / 5.5);
        if (cols < 1 || rows < 1) return;
        ctx.fillStyle = rgba(mix(color, CREAM, 0.35));
        for(let r = 0; r < rows; r += 1){
            const v = (2.5 + r * 5.5 + 1.5) / hgt;
            for(let c = 0; c < cols; c += 1){
                const lit = hash(seed, w.face * 97 + r * 13 + c, Math.floor(time * 0.25 + hash(seed, r, c) * 8));
                if (lit > 0.36) continue;
                const [px, py] = bilerp(w.q, (c + 0.5) / cols, v);
                ctx.globalAlpha = alpha * 0.7;
                ctx.fillRect(px - 0.65 * k, py - 0.9 * k, 1.3 * k, 1.8 * k);
            }
        }
    } else if (deco === "strips") {
        ctx.lineWidth = 1.2 * k;
        for(let r = 0, hRow = h0 + 4; hRow < h1 - 2.5; r += 1, hRow += 7){
            const v = (hRow - h0) / hgt;
            let u = 0.06;
            let n = 0;
            while(u < 0.9){
                const u1 = Math.min(0.94, u + 0.1 + hash(seed, w.face * 31 + r, n) * 0.22);
                const c = PALETTE[Math.floor(hash(seed, r, n + 7) * PALETTE.length)];
                const base = towerBase(t);
                const a = wave ? base + (1 - base) * towerWave(hRow, t) : 0.55;
                const p0 = bilerp(w.q, u, v);
                const p1 = bilerp(w.q, u1, v);
                ctx.globalAlpha = alpha * a;
                ctx.strokeStyle = rgba(mix(c, CREAM, 0.25));
                ctx.beginPath();
                ctx.moveTo(p0[0], p0[1]);
                ctx.lineTo(p1[0], p1[1]);
                ctx.stroke();
                u = u1 + 0.05;
                n += 1;
            }
        }
    } else if (deco === "racks") {
        if (hgt < 6) return;
        const cols = Math.floor(w.len / 4);
        for (const v of [
            0.3,
            0.62
        ]){
            for(let c = 0; c < cols; c += 1){
                const on = hash(seed, c + v * 100, Math.floor(time * (2.5 + 3 * act.dc) + hash(c, seed, v) * 6));
                if (on > 0.3 + 0.4 * act.dc) continue;
                const [px, py] = bilerp(w.q, (c + 0.5) / cols, v);
                ctx.globalAlpha = alpha * clamp(0.4 + 0.6 * act.dc, 0, 1);
                ctx.fillStyle = rgba(c % 3 === 0 ? CREAM : PERIWINKLE);
                ctx.fillRect(px - 0.55 * k, py - 0.55 * k, 1.1 * k, 1.1 * k);
            }
        }
    } else if (deco === "vents") {
        const cols = Math.floor(w.len / 5);
        ctx.lineWidth = 1 * k;
        ctx.strokeStyle = rgba(CORAL);
        for(let c = 0; c < cols; c += 1){
            const u = (c + 0.5) / cols;
            const p0 = bilerp(w.q, u, 0.2);
            const p1 = bilerp(w.q, u, 0.8);
            ctx.globalAlpha = alpha * clamp((0.2 + 0.8 * act.gpu) * (0.5 + 0.5 * (0.5 + 0.5 * Math.sin(time * 2.2 + c * 0.7 + seed))), 0, 1);
            ctx.beginPath();
            ctx.moveTo(p0[0], p0[1]);
            ctx.lineTo(p1[0], p1[1]);
            ctx.stroke();
        }
    }
}
function decorateRoof(env, q, w, d, roof, seed, alpha) {
    if (roof === "none") return;
    const { ctx, time, act } = env;
    const k = size(q[0][2]);
    const cols = Math.max(1, Math.floor(w / 10));
    const rows = Math.max(1, Math.floor(d / 9));
    const hot = roof === "hot";
    for(let r = 0; r < rows; r += 1){
        for(let c = 0; c < cols; c += 1){
            const [px, py] = bilerp(q, (c + 0.5) / cols, (r + 0.5) / rows);
            const s = 3.4 * k;
            ctx.globalAlpha = alpha;
            ctx.fillStyle = rgba(mix(DARK, LIGHT, 0.18));
            ctx.fillRect(px - s / 2, py - s / 2, s, s);
            ctx.strokeStyle = "rgba(226,220,235,0.22)";
            ctx.lineWidth = 0.5 * k;
            ctx.strokeRect(px - s / 2, py - s / 2, s, s);
            const pulse = 0.5 + 0.5 * Math.sin(time * (hot ? 3 : 1.4) + hash(seed, r, c) * 6);
            const level = hot ? act.gpu : act.dc;
            if (hot) {
                ctx.globalAlpha = alpha * clamp(0.3 + 0.8 * level, 0, 1) * pulse;
                drawGlow(ctx, px, py, 4 * k, CORAL, 0.5);
            }
            ctx.globalAlpha = alpha * clamp((0.3 + 0.7 * level) * (0.5 + 0.5 * pulse), 0, 1);
            ctx.fillStyle = rgba(hot ? CORAL : PERIWINKLE);
            ctx.fillRect(px - 0.5 * k, py - 0.5 * k, 1 * k, 1 * k);
        }
    }
}
function drawBox(env, x0, x1, z0, z1, h0, h1, o) {
    const { ctx, P } = env;
    if (h1 - h0 < 0.05) return;
    for (const w of boxWalls(env, x0, x1, z0, z1, h0, h1)){
        const c = rgba(wallColor(w.lit, o.tint, o.tintAmt, o.lift ?? 0));
        ctx.globalAlpha = o.alpha;
        ctx.fillStyle = c;
        ctx.strokeStyle = c;
        ctx.lineWidth = 0.5;
        tracePoly(ctx, w.q);
        ctx.fill();
        ctx.stroke();
        decorateWall(env, w, h0, h1, o.deco, o.color, o.seed, o.alpha, o.wave);
    }
    const roof = [
        P(x0, h1, z0),
        P(x1, h1, z0),
        P(x1, h1, z1),
        P(x0, h1, z1)
    ];
    if (roof.some((p)=>p[2] < NEAR)) return;
    ctx.globalAlpha = o.alpha;
    ctx.fillStyle = rgba(mix(mix(DARK, LIGHT, 0.36 + (o.lift ?? 0)), o.roofTint ?? o.tint, o.roofTint ? 0.3 : o.tintAmt));
    tracePoly(ctx, roof);
    ctx.fill();
    ctx.strokeStyle = "rgba(226,220,235,0.2)";
    ctx.lineWidth = 0.7;
    ctx.stroke();
    decorateRoof(env, roof, x1 - x0, z1 - z0, o.roof, o.seed, o.alpha);
}
function drawSilo(env, cx, cz, r, h, alpha) {
    const { ctx, P, cam } = env;
    const n = 20;
    const angles = Array.from({
        length: n
    }, (_, i)=>i / n * Math.PI * 2);
    const sides = [];
    angles.forEach((a0)=>{
        const a1 = a0 + Math.PI * 2 / n;
        const am = a0 + Math.PI / n;
        const nx = Math.cos(am);
        const nz = Math.sin(am);
        const mx = cx + nx * r;
        const mz = cz + nz * r;
        if (nx * (cam[0] - mx) + nz * (cam[2] - mz) <= 0) return;
        const ax = cx + Math.cos(a0) * r;
        const az = cz + Math.sin(a0) * r;
        const bx = cx + Math.cos(a1) * r;
        const bz = cz + Math.sin(a1) * r;
        const q = [
            P(ax, 0, az),
            P(bx, 0, bz),
            P(bx, h, bz),
            P(ax, h, az)
        ];
        if (q.some((p)=>p[2] < NEAR)) return;
        sides.push({
            q,
            depth: P(mx, h / 2, mz)[2],
            lit: Math.max(0, nx * LIGHT_DIR[0] + nz * LIGHT_DIR[2])
        });
    });
    sides.sort((a, b)=>b.depth - a.depth);
    ctx.globalAlpha = alpha;
    ctx.lineWidth = 0.5;
    for (const s of sides){
        const c = rgba(wallColor(s.lit, LILAC, 0.08, 0.02));
        ctx.fillStyle = c;
        ctx.strokeStyle = c;
        tracePoly(ctx, s.q);
        ctx.fill();
        ctx.stroke();
    }
    // bands brighten as a batch of data leaves storage
    ctx.strokeStyle = rgba(mix([
        226,
        220,
        235
    ], CREAM, env.act.store), 0.22 + 0.5 * env.act.store);
    ctx.lineWidth = 0.7;
    for (const f of [
        0.33,
        0.66
    ]){
        for (const s of sides){
            const a = bilerp(s.q, 0, f);
            const b = bilerp(s.q, 1, f);
            ctx.beginPath();
            ctx.moveTo(a[0], a[1]);
            ctx.lineTo(b[0], b[1]);
            ctx.stroke();
        }
    }
    const top = angles.map((a)=>P(cx + Math.cos(a) * r, h, cz + Math.sin(a) * r));
    if (top.some((p)=>p[2] < NEAR)) return;
    ctx.fillStyle = rgba(mix(mix(DARK, LIGHT, 0.4), LILAC, 0.12));
    tracePoly(ctx, top);
    ctx.fill();
    ctx.strokeStyle = "rgba(226,220,235,0.26)";
    ctx.stroke();
    const c = P(cx, h, cz);
    ctx.fillStyle = rgba(mix(DARK, LIGHT, 0.2));
    ctx.beginPath();
    ctx.arc(c[0], c[1], r * 0.25 * size(c[2]), 0, Math.PI * 2);
    ctx.fill();
}
function drawCrane(env, f, rise, alpha) {
    const { ctx, P, time } = env;
    const H = 36 * rise;
    const xa = lotX(f, 10);
    const xb = lotX(f, f.w - 10);
    const za = lotZ(f, 8);
    const zb = lotZ(f, WIN_H - 6);
    const o = {
        deco: "none",
        roof: "none",
        color: CREAM,
        tint: LILAC,
        tintAmt: 0.25,
        seed: 3,
        alpha,
        lift: 0.1
    };
    for (const x of [
        xa,
        xb
    ])for (const z of [
        za,
        zb
    ])drawBox(env, x - 1, x + 1, z - 1, z + 1, 0, H, o);
    drawBox(env, xa - 1, xb + 1, za - 1.2, za + 1.2, H - 2.4, H, o);
    drawBox(env, xa - 1, xb + 1, zb - 1.2, zb + 1.2, H - 2.4, H, o);
    if (rise < 0.95) return;
    // trolley with a hanging container
    const u = 0.5 + 0.42 * Math.sin(time * 0.5);
    const x = lerp(xa + 12, xb - 12, u);
    const zm = (za + zb) / 2;
    const hook = H - 12 - 4 * (0.5 + 0.5 * Math.sin(time * 0.9));
    const top = P(x, H - 2.4, zm);
    const bottom = P(x, hook + 5, zm);
    ctx.globalAlpha = alpha;
    ctx.strokeStyle = "rgba(210,204,220,0.6)";
    ctx.lineWidth = 0.5 * size(top[2]);
    ctx.beginPath();
    ctx.moveTo(top[0], top[1]);
    ctx.lineTo(bottom[0], bottom[1]);
    ctx.stroke();
    drawBox(env, x - 6, x + 6, zm - 2.6, zm + 2.6, hook, hook + 5, {
        ...o,
        tint: CORAL,
        tintAmt: 0.35,
        lift: 0.05
    });
}
function poseAxes(p) {
    const U = [
        Math.cos(p.psi),
        0,
        -Math.sin(p.psi)
    ];
    const V = [
        Math.sin(p.psi) * Math.cos(p.phi),
        -Math.sin(p.phi),
        Math.cos(p.psi) * Math.cos(p.phi)
    ];
    return {
        U,
        V,
        n: cross(V, U)
    };
}
function poseMapper(f, p) {
    const { U, V } = poseAxes(p);
    return (u, v)=>{
        const a = (u / f.w - 0.5) * p.w;
        const b = (v / WIN_H - 0.5) * p.hgt;
        return [
            p.c[0] + U[0] * a + V[0] * b,
            p.c[1] + U[1] * a + V[1] * b,
            p.c[2] + U[2] * a + V[2] * b
        ];
    };
}
// The API file stands up on its front edge and becomes the tower's facade.
function towerMapper(f, p) {
    const w = lerp(f.w, TOWER_W, p);
    const L = lerp(WIN_H, TOWER_H, p);
    const hinge = lerp(f.cz + WIN_H / 2, f.cz + TOWER_W / 2, p);
    const th = p * Math.PI / 2;
    return (u, v)=>{
        const d = (WIN_H - v) / WIN_H * L;
        return [
            f.cx + (u / f.w - 0.5) * w,
            d * Math.sin(th),
            hinge - d * Math.cos(th)
        ];
    };
}
function drawWindow(env, f, M, o) {
    const { ctx, P, time } = env;
    const Q = (u, v)=>{
        const [x, h, z] = M(u, v);
        return P(x, h, z);
    };
    const corners = [
        Q(0, WIN_H),
        Q(f.w, WIN_H),
        Q(f.w, 0),
        Q(0, 0)
    ];
    if (corners.some((p)=>p[2] < NEAR)) return;
    const k = size(corners[0][2]);
    // glass sheet with a gentle glow; it turns opaque as the API file becomes a facade
    if (o.panel > 0.01) {
        const facadeC = mix(DARK, LIGHT, 0.2);
        const g = ctx.createLinearGradient(corners[3][0], corners[3][1], corners[1][0], corners[1][1]);
        g.addColorStop(0, rgba(mix(GLASS_HI, facadeC, o.facade), lerp(0.42, 0.94, o.facade)));
        g.addColorStop(1, rgba(mix(GLASS_LO, facadeC, o.facade), lerp(0.26, 0.94, o.facade)));
        ctx.save();
        ctx.globalAlpha = o.panel * o.fade;
        ctx.fillStyle = g;
        ctx.shadowColor = rgba(PERIWINKLE, 0.22 * (1 - o.facade));
        ctx.shadowBlur = 18 * env.scale;
        tracePoly(ctx, corners);
        ctx.fill();
        ctx.restore();
        // top-edge highlight catching the light
        const hi0 = Q(1.5, 0.4);
        const hi1 = Q(f.w - 1.5, 0.4);
        ctx.globalAlpha = o.panel * o.fade * (1 - o.facade);
        ctx.strokeStyle = "rgba(255,255,255,0.22)";
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.moveTo(hi0[0], hi0[1]);
        ctx.lineTo(hi1[0], hi1[1]);
        ctx.stroke();
        const titleA = o.panel * (1 - o.facade) * o.fade * (o.chrome ?? 1);
        if (titleA > 0.01) {
            ctx.globalAlpha = titleA;
            ctx.fillStyle = "rgba(255,255,255,0.05)";
            tracePoly(ctx, [
                Q(0, TITLE),
                Q(f.w, TITLE),
                Q(f.w, 0),
                Q(0, 0)
            ]);
            ctx.fill();
            [
                CORAL,
                LILAC,
                PERIWINKLE
            ].forEach((c, i)=>{
                const p = Q(7 + i * 6, TITLE / 2);
                ctx.fillStyle = rgba(c, 0.85);
                ctx.beginPath();
                ctx.arc(p[0], p[1], 1.5 * size(p[2]), 0, Math.PI * 2);
                ctx.fill();
            });
            const nameW = f.name.length * CHAR * 0.85;
            drawText(ctx, f.name, Q(f.w / 2 - nameW / 2, TITLE / 2 + 0.4), Q(f.w / 2 + nameW / 2, TITLE / 2 + 0.4), MUTED, titleA * 0.8);
        }
    }
    if (o.frame > 0.01) {
        ctx.globalAlpha = o.frame * o.fade;
        ctx.strokeStyle = `rgba(226,220,235,${0.22 + 0.12 * o.panel * (1 - o.facade)})`;
        ctx.lineWidth = 0.8;
        tracePoly(ctx, corners);
        ctx.stroke();
    }
    // rows: gutter numbers, readable code, bars, typed out one row at a time
    const glowPx = o.glow * 3 * env.scale;
    let cursor = null;
    f.rowsData.forEach((row, i)=>{
        const tail = i >= ROWS - 2 ? i === ROWS - 1 ? 0.3 : 0.6 : 1;
        const rp = clamp((o.typeT - i * PER_ROW) / PER_ROW, 0, 1);
        if (rp <= 0) return;
        let end = GUTTER + PAD + row.lead * CHAR;
        if (o.text > 0.01) {
            const num = String(f.first + i);
            const nw = num.length * CHAR * 0.8;
            drawText(ctx, num, Q(GUTTER - 3 - nw, row.v), Q(GUTTER - 3, row.v), MUTED, o.text * 0.45 * tail * o.fade);
            if (row.text) {
                const u0 = GUTTER + PAD + row.lead * CHAR;
                const n = Math.ceil(row.text.length * rp);
                drawText(ctx, row.text.slice(0, n), Q(u0, row.v), Q(u0 + n * CHAR, row.v), row.color, o.text * 0.9 * tail * o.fade, glowPx);
                end = u0 + n * CHAR;
            }
        }
        if (o.rows > 0.01 && row.bars.length) {
            if (glowPx > 0) {
                ctx.save();
                ctx.shadowBlur = glowPx;
            }
            row.bars.forEach((b, j)=>{
                const grow = clamp(rp * row.bars.length - j, 0, 1);
                if (grow <= 0) return;
                const uEnd = lerp(b.u0 + BAR / 2, b.u1 - BAR / 2, grow);
                end = uEnd + BAR / 2;
                const a = Q(b.u0 + BAR / 2, row.v);
                const e = Q(uEnd, row.v);
                if (glowPx > 0) ctx.shadowColor = rgba(b.color, 0.5);
                const base = towerBase(env.t);
                const lit = o.wave ? base + (1 - base) * towerWave(M(0, row.v)[1], env.t) : 1;
                ctx.globalAlpha = o.rows * b.opacity * tail * lit * o.fade;
                ctx.strokeStyle = rgba(o.wave ? mix(b.color, CREAM, 0.25) : b.color);
                ctx.lineWidth = BAR * k * lerp(1, 0.55, o.facade) * (o.ink ?? 1);
                ctx.beginPath();
                ctx.moveTo(a[0], a[1]);
                ctx.lineTo(e[0], e[1]);
                ctx.stroke();
            });
            if (glowPx > 0) ctx.restore();
        }
        cursor = {
            u: end + 1.5,
            v: row.v
        };
    });
    // blinking cursor: solid while typing, blinking once the file is written
    const c = cursor;
    if (c && o.text > 0.01 && o.glow > 0.01 && o.typeT < ROWS * PER_ROW + 1.2) {
        const typing = o.typeT < ROWS * PER_ROW;
        const blink = typing ? 1 : mod(time * 1.6, 1) < 0.55 ? 1 : 0;
        if (blink) {
            const a = Q(c.u, c.v - 3.2);
            const b = Q(c.u, c.v + 3.2);
            ctx.save();
            ctx.globalAlpha = o.text * o.fade * 0.9 * o.glow;
            ctx.strokeStyle = rgba(CREAM);
            ctx.shadowColor = rgba(PERIWINKLE, 0.7);
            ctx.shadowBlur = 6 * env.scale;
            ctx.lineWidth = 1.1 * size(a[2]);
            ctx.beginPath();
            ctx.moveTo(a[0], a[1]);
            ctx.lineTo(b[0], b[1]);
            ctx.stroke();
            ctx.restore();
        }
    }
    ctx.globalAlpha = 1;
}
function drawTower(env, f, p, text, fade, panel, rows) {
    const { ctx, P, cam, time } = env;
    const x0 = f.cx - TOWER_W / 2;
    const x1 = f.cx + TOWER_W / 2;
    const z0 = f.cz - TOWER_W / 2;
    const z1 = f.cz + TOWER_W / 2;
    const bodyA = smooth01((p - 0.6) / 0.4) * fade;
    const M = towerMapper(f, p);
    // plane normal decides whether the facade faces the camera
    const th = p * Math.PI / 2;
    const n = [
        0,
        Math.cos(th),
        Math.sin(th)
    ];
    const mid = M(f.w / 2, WIN_H / 2);
    const facadeVisible = dot(n, sub(cam, mid)) > 0;
    const o = {
        deco: "strips",
        roof: "none",
        color: BLUE,
        tint: BLUE,
        tintAmt: 0.05,
        seed: 11,
        alpha: bodyA,
        wave: true
    };
    const walls = bodyA > 0.01 ? boxWalls(env, x0, x1, z0, z1, 0, TOWER_H).filter((w)=>w.face !== 0) : [];
    const facade = {
        depth: P(f.cx, TOWER_H / 2, z1)[2]
    };
    const order = [
        ...walls.map((w)=>({
                depth: w.depth,
                w
            })),
        ...facadeVisible ? [
            {
                depth: facade.depth,
                w: null
            }
        ] : []
    ];
    order.sort((a, b)=>b.depth - a.depth);
    for (const item of order){
        if (item.w) {
            const c = rgba(wallColor(item.w.lit, BLUE, 0.05));
            ctx.globalAlpha = bodyA;
            ctx.fillStyle = c;
            ctx.strokeStyle = c;
            ctx.lineWidth = 0.5;
            tracePoly(ctx, item.w.q);
            ctx.fill();
            ctx.stroke();
            decorateWall(env, item.w, 0, TOWER_H, "strips", BLUE, 11, bodyA, true);
        } else {
            drawWindow(env, f, M, {
                panel,
                frame: 1 - p,
                rows,
                text,
                facade: p,
                wave: p > 0.9,
                fade,
                typeT: Infinity,
                glow: 0
            });
        }
    }
    if (bodyA <= 0.01) return;
    const roof = [
        P(x0, TOWER_H, z0),
        P(x1, TOWER_H, z0),
        P(x1, TOWER_H, z1),
        P(x0, TOWER_H, z1)
    ];
    if (roof.some((q)=>q[2] < NEAR)) return;
    ctx.globalAlpha = bodyA;
    ctx.fillStyle = rgba(mix(DARK, LIGHT, 0.38));
    tracePoly(ctx, roof);
    ctx.fill();
    ctx.strokeStyle = "rgba(226,220,235,0.2)";
    ctx.lineWidth = 0.7;
    ctx.stroke();
    // crown, spire, beacon
    const crownA = smooth01((p - 0.85) / 0.15) * fade;
    drawBox(env, f.cx - 14, f.cx + 14, f.cz - 14, f.cz + 14, TOWER_H, TOWER_H + 20 * crownA, {
        ...o,
        alpha: crownA
    });
    if (crownA < 0.05) return;
    const s0 = P(f.cx, TOWER_H + 20, f.cz);
    const s1 = P(f.cx, TOWER_H + 34, f.cz);
    if (s0[2] < NEAR || s1[2] < NEAR) return;
    const k = size(s1[2]);
    ctx.globalAlpha = crownA;
    ctx.strokeStyle = "rgba(210,204,220,0.8)";
    ctx.lineWidth = 0.9 * k;
    ctx.beginPath();
    ctx.moveTo(s0[0], s0[1]);
    ctx.lineTo(s1[0], s1[1]);
    ctx.stroke();
    const flash = bump(env.t, BEACON_T, 0.15, 1.1);
    const breathe = (0.55 + 0.45 * (0.5 + 0.5 * Math.sin(time / 3.4 * Math.PI * 2))) * (1 + 1.2 * flash);
    const beamTop = P(f.cx, TOWER_H + 80, f.cz);
    const beam = ctx.createLinearGradient(s1[0], s1[1], beamTop[0], beamTop[1]);
    beam.addColorStop(0, rgba(PERIWINKLE, 0.5 * breathe));
    beam.addColorStop(1, rgba(PERIWINKLE, 0));
    ctx.strokeStyle = beam;
    ctx.lineWidth = 2 * k;
    ctx.beginPath();
    ctx.moveTo(s1[0], s1[1]);
    ctx.lineTo(beamTop[0], beamTop[1]);
    ctx.stroke();
    drawGlow(ctx, s1[0], s1[1], 18 * k * (1 + flash), PERIWINKLE, Math.min(0.8, 0.35 * breathe));
    ctx.fillStyle = rgba(PERIWINKLE);
    ctx.beginPath();
    ctx.arc(s1[0], s1[1], 2 * k, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
}
function drawGrid(ctx, P, fog, alpha) {
    const BUCKETS = 6;
    const buckets = Array.from({
        length: BUCKETS
    }, ()=>[]);
    const push = (x1, z1, x2, z2)=>{
        const a = fog((x1 + x2) / 2, (z1 + z2) / 2);
        if (a <= 0.02) return;
        const pa = P(x1, 0, z1);
        const pb = P(x2, 0, z2);
        if (pa[2] < NEAR || pb[2] < NEAR) return;
        buckets[Math.min(BUCKETS - 1, Math.floor(a * BUCKETS))].push([
            pa[0],
            pa[1],
            pb[0],
            pb[1]
        ]);
    };
    for(let x = -384; x <= 384; x += 32)for(let z = -288; z < 288; z += 32)push(x, z, x, z + 32);
    for(let z = -288; z <= 288; z += 32)for(let x = -384; x < 384; x += 32)push(x, z, x + 32, z);
    ctx.lineWidth = 0.7;
    ctx.lineCap = "butt";
    buckets.forEach((segs, b)=>{
        if (!segs.length) return;
        ctx.strokeStyle = `rgba(226,220,235,${0.07 * alpha * (b + 0.5) / BUCKETS})`;
        ctx.beginPath();
        for (const [ax, ay, bx, by] of segs){
            ctx.moveTo(ax, ay);
            ctx.lineTo(bx, by);
        }
        ctx.stroke();
    });
    ctx.lineCap = "round";
}
function SWEVisualization() {
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");
        if (!canvas || !ctx) return;
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        let scale = 1;
        const render = (loopT, time)=>{
            // City time: the opening hover is compressed into OPEN_T seconds.
            const t = loopT < OPEN_T ? loopT * 2.5 / OPEN_T : loopT + OPEN_SKIP;
            // ---- timeline
            const view = ramp(t, 2.5, 5) * (1 - ramp(t, 16, 19.2));
            const panel = 1 - ramp(t, 4, 4.8) + ramp(t, 17.2, 18.2);
            const frame = lerp(1, 0.4, ramp(t, 4, 5) * (1 - ramp(t, 17.2, 18.2)));
            const traffic = view * ramp(t, 8.3, 8.8) * (1 - ramp(t, 15.8, 16.4));
            // A slow partial orbit: swing out while tilting down, sweep across the city,
            // then return to the starting heading while rising back overhead.
            const yaw = -0.3 * ramp(t, 2.5, 5.5) + 0.6 * smooth01((t - 5) / 11) - 0.3 * ramp(t, 16, 19.5) + 0.07 * Math.sin(2 * Math.PI * loopT / LOOP) * (1 - view);
            const pitch = lerp(0.85, 0.66, view) + 0.05 * Math.sin(2 * Math.PI * t / CITY_LOOP) * view;
            const target = [
                0,
                lerp(52, 34, view),
                0
            ];
            const cam = makeCamera(target, yaw, pitch, lerp(470, 660, view));
            const P = (x, h, z)=>project(cam, [
                    x,
                    h,
                    z
                ]);
            const fogFar = lerp(560, 400, view);
            const fogNear = fogFar * 0.55;
            const fog = (x, z)=>smooth01((fogFar - Math.hypot(x - target[0], z - target[2])) / (fogFar - fogNear));
            const act = {
                store: bump(t, STORE_PULSE.t0 - 0.4, 0.3, 0.8),
                dc: 0.25 + 0.75 * bump(t, DC_T) + 0.25 * ramp(t, DC_T, DC_T + 0.6),
                gpu: 0.25 + 0.75 * bump(t, GPU_T) + 0.25 * ramp(t, GPU_T, GPU_T + 0.6)
            };
            const env = {
                ctx,
                P,
                cam: cam.pos,
                time,
                t,
                act,
                scale
            };
            ctx.setTransform(scale, 0, 0, scale, 0, 0);
            ctx.clearRect(0, 0, VIEW_W, VIEW_H);
            ctx.globalAlpha = 1;
            ctx.lineJoin = "round";
            ctx.lineCap = "round";
            ctx.font = `${FONT_PX}px ${MONO}`;
            ctx.textBaseline = "middle";
            ctx.textAlign = "left";
            const riseOf = (start, dur, fall)=>ramp(t, start, start + dur) * (1 - ramp(t, fall, fall + 1));
            // ---- ground glows under each district
            const glowAt = (f, c, r, a)=>{
                const q = P(f.cx, 0, f.cz);
                if (q[2] > NEAR) drawGlow(ctx, q[0], q[1], r * size(q[2]), c, a);
            };
            glowAt(A, PERIWINKLE, 150, (0.1 + 0.12 * towerBase(t)) * riseOf(A.start, 1.2, A.fall));
            glowAt(D, PERIWINKLE, 110, 0.14 * act.dc * riseOf(D.start, 1.2, D.fall));
            glowAt(G, CORAL, 100, 0.16 * act.gpu * riseOf(G.start, 1.2, G.fall));
            glowAt(S, LILAC, 90, (0.06 + 0.1 * act.store) * riseOf(S.start, 1.2, S.fall));
            if (view > 0.01) drawGrid(ctx, P, fog, view);
            // a deploy landing: a ring spreads from the tower's base
            const deployAge = t - DEPLOY_T;
            if (deployAge > 0 && deployAge < 1.4 && traffic > 0.01) {
                const ring = Array.from({
                    length: 48
                }, (_, i)=>{
                    const a = i / 48 * Math.PI * 2;
                    const r = 30 + deployAge * 42;
                    return P(A.cx + Math.cos(a) * r, 0.5, A.cz + Math.sin(a) * r);
                });
                if (ring.every((q)=>q[2] > NEAR)) {
                    ctx.globalAlpha = (1 - deployAge / 1.4) * 0.7 * traffic;
                    ctx.strokeStyle = rgba(LILAC);
                    ctx.lineWidth = 1.2;
                    tracePoly(ctx, ring);
                    ctx.stroke();
                    ctx.globalAlpha = 1;
                }
            }
            // ---- files: floating windows that settle into lots
            const towerP = ramp(t, A.start, A.start + 1.2) * (1 - ramp(t, A.fall, A.fall + 1.2));
            // The opening plays forward from the start of the loop and in reverse at the end.
            const tau = loopT < LOOP / 2 ? loopT : LOOP - loopT;
            const spin = clamp(spinRate(tau) / OMEGA, 0, 1) * (tau < RELEASE.sql + 0.3 ? 1 : 0);
            if (spin > 0.01) {
                const g = P(0, 0, 0);
                drawGlow(ctx, g[0], g[1], 130 * size(g[2]), PERIWINKLE, 0.22 * spin);
            }
            const sheets = FILES.map((f)=>{
                const pose = panelPose(f, tau);
                const M = poseMapper(f, pose);
                const { n } = poseAxes(pose);
                const facing = dot(n, sub(cam.pos, pose.c)) > 0;
                const flight = clamp((tau - RELEASE[f.key]) / FLY, 0, 1);
                return {
                    f,
                    pose,
                    M,
                    facing,
                    flight,
                    depth: P(pose.c[0], pose.c[1], pose.c[2])[2]
                };
            });
            // soft shadows on the ground beneath the cube and flying panels
            for (const { f, M } of sheets){
                const corners = [
                    M(0, WIN_H),
                    M(f.w, WIN_H),
                    M(f.w, 0),
                    M(0, 0)
                ];
                const avgH = corners.reduce((acc, c)=>acc + c[1], 0) / 4;
                if (avgH <= 0.3) continue;
                const q = corners.map(([x, h, z])=>P(x + 4 + h * 0.25, 0, z + 5 + h * 0.3));
                if (q.some((c)=>c[2] < NEAR)) continue;
                ctx.save();
                ctx.globalAlpha = 0.28 * Math.min(1, avgH / 10) * fog(f.cx, f.cz);
                ctx.shadowColor = "rgba(4,3,10,0.6)";
                ctx.shadowBlur = 12 * scale;
                ctx.fillStyle = "rgba(6,5,12,0.5)";
                tracePoly(ctx, q);
                ctx.fill();
                ctx.restore();
            }
            sheets.sort((a, b)=>b.depth - a.depth);
            for (const { f, pose, M, facing, flight } of sheets){
                const fade = fog(f.cx, f.cz);
                // Code is already written; it goes into the city and the panels return empty.
                // Only the side of a panel facing the camera shows its code.
                const opening = t < 12;
                const appear = ramp(loopT, 0.05, 0.4) * (facing ? 1 : 0);
                const rowsA = opening ? (1 - ramp(t, f.start - 0.1, f.start + 0.6)) * appear : 0;
                const textA = opening ? (1 - ramp(t, f.start - 0.4, f.start + 0.3)) * appear : 0;
                const typeT = Infinity;
                const glow = 1 - flight;
                if (f.key === "py" && towerP > 0.001) {
                    // drawn as the standing facade with the tower
                    drawWindow(env, f, M, {
                        panel: 0,
                        frame,
                        rows: 0,
                        text: 0,
                        facade: 0,
                        wave: false,
                        fade,
                        typeT,
                        glow: 0
                    });
                    continue;
                }
                drawWindow(env, f, M, {
                    panel: facing ? panel : panel * 0.7,
                    frame,
                    rows: f.key === "py" ? opening ? appear : 0 : clamp(rowsA, 0, 1),
                    text: clamp(textA, 0, 1),
                    facade: 0,
                    wave: false,
                    fade,
                    typeT,
                    glow,
                    chrome: facing ? 1 : 0,
                    ink: pose.w / f.w
                });
            }
            // ---- everything with height, painted far to near
            const drawables = [];
            if (towerP > 0.001) {
                const fade = fog(A.cx, A.cz);
                const textA = t < 12 ? clamp(1 - ramp(t, A.start - 0.1, A.start + 0.5), 0, 1) : 0;
                const plane = Math.max(panel, towerP);
                const rows = t < 12 ? 1 : 1 - ramp(t, A.fall + 0.5, A.fall + 1.1);
                drawables.push({
                    depth: P(A.cx, TOWER_H * 0.4 * towerP, A.cz)[2],
                    draw: ()=>drawTower(env, A, towerP, textA, fade, plane, rows)
                });
            }
            ITEMS.forEach((it, idx)=>{
                const rise = riseOf(it.start, it.dur, it.fall);
                if (rise <= 0.005) return;
                if (it.type === "silo") {
                    const a = fog(it.cx, it.cz) * smooth01(rise * 4);
                    if (a <= 0.02) return;
                    drawables.push({
                        depth: P(it.cx, it.h * rise / 2, it.cz)[2],
                        draw: ()=>drawSilo(env, it.cx, it.cz, it.r * lerp(0.6, 1, rise), it.h * rise, a)
                    });
                } else if (it.type === "box") {
                    const cx = (it.x0 + it.x1) / 2;
                    const cz = (it.z0 + it.z1) / 2;
                    const a = fog(cx, cz) * smooth01(rise * 4);
                    if (a <= 0.02) return;
                    drawables.push({
                        depth: P(cx, it.h * rise / 2, cz)[2],
                        draw: ()=>drawBox(env, it.x0, it.x1, it.z0, it.z1, 0, it.h * rise, {
                                deco: rise > 0.6 ? it.deco : "none",
                                roof: rise > 0.8 ? it.roof : "none",
                                color: it.color,
                                tint: it.tint,
                                tintAmt: it.tintAmt,
                                seed: idx,
                                alpha: a
                            })
                    });
                } else if (it.type === "container") {
                    const cx = (it.x0 + it.x1) / 2;
                    const cz = (it.z0 + it.z1) / 2;
                    const a = fog(cx, cz) * rise;
                    if (a <= 0.02) return;
                    const h0 = it.level * 5.4 + (1 - rise) * 18;
                    drawables.push({
                        depth: P(cx, h0 + 2.5, cz)[2],
                        draw: ()=>drawBox(env, it.x0, it.x1, it.z0, it.z1, h0, h0 + 5, {
                                deco: "none",
                                roof: "none",
                                color: it.color,
                                tint: it.color,
                                tintAmt: 0.32,
                                seed: idx,
                                alpha: a,
                                roofTint: it.color
                            })
                    });
                } else {
                    const a = fog(it.f.cx, it.f.cz) * smooth01(rise * 3);
                    if (a <= 0.02) return;
                    drawables.push({
                        depth: P(it.f.cx, 18 * rise, it.f.cz)[2] - 5,
                        draw: ()=>drawCrane(env, it.f, rise, a)
                    });
                }
            });
            if (traffic > 0.01) {
                const light = (x, z, tail, color, box, a)=>{
                    const [px, py, pz] = P(x, box ? 2 : 1.2, z);
                    if (pz < NEAR) return;
                    drawables.push({
                        depth: pz,
                        draw: ()=>{
                            const k = size(pz);
                            ctx.globalAlpha = a;
                            if (tail) {
                                const q = P(tail[0], 1.2, tail[1]);
                                if (q[2] > NEAR) {
                                    const g = ctx.createLinearGradient(q[0], q[1], px, py);
                                    g.addColorStop(0, rgba(color, 0));
                                    g.addColorStop(1, rgba(color, 0.9));
                                    ctx.strokeStyle = g;
                                    ctx.lineWidth = 1.5 * k;
                                    ctx.beginPath();
                                    ctx.moveTo(q[0], q[1]);
                                    ctx.lineTo(px, py);
                                    ctx.stroke();
                                }
                            }
                            drawGlow(ctx, px, py, 3.6 * k, color, 0.35);
                            ctx.fillStyle = rgba(color);
                            if (box) ctx.fillRect(px - 2.2 * k, py - 1.4 * k, 4.4 * k, 2.8 * k);
                            else {
                                ctx.beginPath();
                                ctx.arc(px, py, 1.2 * k, 0, Math.PI * 2);
                                ctx.fill();
                            }
                            ctx.globalAlpha = 1;
                        }
                    });
                };
                for (const pl of PULSES){
                    for(let i = 0; i < pl.count; i += 1){
                        const s = (t - pl.t0) * pl.speed - i * pl.spacing;
                        if (s <= 0 || s >= pl.r.len) continue;
                        const [x, z] = along(pl.r, s);
                        const a = fog(x, z) * traffic * Math.min(1, (pl.r.len - s) / 12, s / 6);
                        if (a <= 0.02) continue;
                        light(x, z, pl.box ? null : along(pl.r, Math.max(0, s - 14)), pl.color, pl.box, a);
                    }
                }
                for (const fl of AMBIENT){
                    for(let i = 0; i < fl.count; i += 1){
                        const s = mod(time * fl.speed + (i / fl.count + fl.phase) * fl.r.len, fl.r.len);
                        const [x, z] = along(fl.r, s);
                        const a = 0.5 * fog(x, z) * traffic * Math.min(1, s / 16, (fl.r.len - s) / 16);
                        if (a <= 0.02) continue;
                        light(x, z, null, fl.color, false, a);
                    }
                }
            }
            drawables.sort((a, b)=>b.depth - a.depth).forEach((d)=>d.draw());
            ctx.globalAlpha = 1;
        };
        const resize = ()=>{
            const rect = canvas.getBoundingClientRect();
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            canvas.width = Math.max(1, Math.round(rect.width * dpr));
            canvas.height = Math.max(1, Math.round(rect.height * dpr));
            scale = canvas.width / VIEW_W;
            if (reduceMotion) render(12 - OPEN_SKIP, 12 - OPEN_SKIP);
        };
        resize();
        canvas.classList.add("is-ready");
        const ro = new ResizeObserver(resize);
        ro.observe(canvas);
        if (reduceMotion) return ()=>ro.disconnect();
        let frameId = 0;
        let last = 0;
        let clock = 0;
        const loop = (now)=>{
            const dt = last ? Math.min(0.05, (now - last) / 1000) : 0;
            last = now;
            clock += dt;
            render(clock % LOOP, clock);
            frameId = window.requestAnimationFrame(loop);
        };
        const startLoop = ()=>{
            if (frameId) return;
            last = 0;
            frameId = window.requestAnimationFrame(loop);
        };
        const stopLoop = ()=>{
            window.cancelAnimationFrame(frameId);
            frameId = 0;
        };
        // Pause while scrolled out of view; the clock resumes where it left off.
        const io = new IntersectionObserver(([entry])=>entry.isIntersecting ? startLoop() : stopLoop());
        io.observe(canvas);
        return ()=>{
            stopLoop();
            io.disconnect();
            ro.disconnect();
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
        className: "swe-visualization",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
            ref: canvasRef,
            className: "swe-canvas",
            role: "img",
            "aria-label": "A spinning glass cube of five code files breaks apart onto a city grid and each becomes its own district: silos, a data center, a GPU hall, a central tower with offices, and a shipping yard, with light flowing between them as the camera circles."
        }, void 0, false, {
            fileName: "[project]/src/components/SWEVisualization.tsx",
            lineNumber: 1594,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/SWEVisualization.tsx",
        lineNumber: 1593,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_0hbr9a4._.js.map