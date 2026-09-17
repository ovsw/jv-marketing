(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/@sanity+visual-editing@5.7.3_@emotion+is-prop-valid@1.4.0_@sanity+client@7.26.2_@types+_44aa6e416023878fa62b01b3252b6fe2/node_modules/@sanity/visual-editing/dist/_chunks-es/InsertMenu.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InsertMenu",
    ()=>InsertMenu,
    "InsertMenuPopover",
    ()=>InsertMenuPopover,
    "PointerEvents",
    ()=>PointerEvents,
    "PopoverBackground",
    ()=>PopoverBackground,
    "PopoverPortal",
    ()=>PopoverPortal,
    "TelemetryContext",
    ()=>TelemetryContext,
    "events",
    ()=>events,
    "getNodeIcon",
    ()=>getNodeIcon,
    "useTelemetry",
    ()=>useTelemetry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.0_@babel+core@7.29.7_@playwright+test@1.62.1_@types+node@26.1.0_babel-plugin-_3b64392720bc9294ad1f40cae38bcee9/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.0_@babel+core@7.29.7_@playwright+test@1.62.1_@types+node@26.1.0_babel-plugin-_3b64392720bc9294ad1f40cae38bcee9/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.0_@babel+core@7.29.7_@playwright+test@1.62.1_@types+node@26.1.0_babel-plugin-_3b64392720bc9294ad1f40cae38bcee9/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__lt__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+ui@3.5.1_@emotion+is-prop-valid@1.4.0_react-dom@19.2.7_react@19.2.7__react@19.2_1f242bf9e435109ea368c6a7c7a25116/node_modules/@sanity/ui/dist/_chunks/portalProvider.js [app-client] (ecmascript) <export lt as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__c__as__TabList$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+ui@3.5.1_@emotion+is-prop-valid@1.4.0_react-dom@19.2.7_react@19.2.7__react@19.2_1f242bf9e435109ea368c6a7c7a25116/node_modules/@sanity/ui/dist/_chunks/portalProvider.js [app-client] (ecmascript) <export c as TabList>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__l__as__Tab$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+ui@3.5.1_@emotion+is-prop-valid@1.4.0_react-dom@19.2.7_react@19.2.7__react@19.2_1f242bf9e435109ea368c6a7c7a25116/node_modules/@sanity/ui/dist/_chunks/portalProvider.js [app-client] (ecmascript) <export l as Tab>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__et__as__Text$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+ui@3.5.1_@emotion+is-prop-valid@1.4.0_react-dom@19.2.7_react@19.2.7__react@19.2_1f242bf9e435109ea368c6a7c7a25116/node_modules/@sanity/ui/dist/_chunks/portalProvider.js [app-client] (ecmascript) <export et as Text>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__s__as__Grid$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+ui@3.5.1_@emotion+is-prop-valid@1.4.0_react-dom@19.2.7_react@19.2.7__react@19.2_1f242bf9e435109ea368c6a7c7a25116/node_modules/@sanity/ui/dist/_chunks/portalProvider.js [app-client] (ecmascript) <export s as Grid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__O__as__Stack$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+ui@3.5.1_@emotion+is-prop-valid@1.4.0_react-dom@19.2.7_react@19.2.7__react@19.2_1f242bf9e435109ea368c6a7c7a25116/node_modules/@sanity/ui/dist/_chunks/portalProvider.js [app-client] (ecmascript) <export O as Stack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__u__as__MenuItem$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+ui@3.5.1_@emotion+is-prop-valid@1.4.0_react-dom@19.2.7_react@19.2.7__react@19.2_1f242bf9e435109ea368c6a7c7a25116/node_modules/@sanity/ui/dist/_chunks/portalProvider.js [app-client] (ecmascript) <export u as MenuItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__at__as__Flex$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+ui@3.5.1_@emotion+is-prop-valid@1.4.0_react-dom@19.2.7_react@19.2.7__react@19.2_1f242bf9e435109ea368c6a7c7a25116/node_modules/@sanity/ui/dist/_chunks/portalProvider.js [app-client] (ecmascript) <export at as Flex>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__p__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+ui@3.5.1_@emotion+is-prop-valid@1.4.0_react-dom@19.2.7_react@19.2.7__react@19.2_1f242bf9e435109ea368c6a7c7a25116/node_modules/@sanity/ui/dist/_chunks/portalProvider.js [app-client] (ecmascript) <export p as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__b__as__TextInput$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+ui@3.5.1_@emotion+is-prop-valid@1.4.0_react-dom@19.2.7_react@19.2.7__react@19.2_1f242bf9e435109ea368c6a7c7a25116/node_modules/@sanity/ui/dist/_chunks/portalProvider.js [app-client] (ecmascript) <export b as TextInput>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__Tooltip$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+ui@3.5.1_@emotion+is-prop-valid@1.4.0_react-dom@19.2.7_react@19.2.7__react@19.2_1f242bf9e435109ea368c6a7c7a25116/node_modules/@sanity/ui/dist/_chunks/portalProvider.js [app-client] (ecmascript) <export n as Tooltip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Y__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+ui@3.5.1_@emotion+is-prop-valid@1.4.0_react-dom@19.2.7_react@19.2.7__react@19.2_1f242bf9e435109ea368c6a7c7a25116/node_modules/@sanity/ui/dist/_chunks/portalProvider.js [app-client] (ecmascript) <export Y as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__j__as__Portal$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+ui@3.5.1_@emotion+is-prop-valid@1.4.0_react-dom@19.2.7_react@19.2.7__react@19.2_1f242bf9e435109ea368c6a7c7a25116/node_modules/@sanity/ui/dist/_chunks/portalProvider.js [app-client] (ecmascript) <export j as Portal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__k__as__Popover$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+ui@3.5.1_@emotion+is-prop-valid@1.4.0_react-dom@19.2.7_react@19.2.7__react@19.2_1f242bf9e435109ea368c6a7c7a25116/node_modules/@sanity/ui/dist/_chunks/portalProvider.js [app-client] (ecmascript) <export k as Popover>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$5$2e$2$2e$1_react$40$19$2e$2$2e$7$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$Search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+icons@5.2.1_react@19.2.7/node_modules/@sanity/icons/dist/Search.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$5$2e$2$2e$1_react$40$19$2e$2$2e$7$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$ThLarge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+icons@5.2.1_react@19.2.7/node_modules/@sanity/icons/dist/ThLarge.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$5$2e$2$2e$1_react$40$19$2e$2$2e$7$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$Ulist$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+icons@5.2.1_react@19.2.7/node_modules/@sanity/icons/dist/Ulist.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$18$2e$1$2f$node_modules$2f$lodash$2d$es$2f$startCase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__startCase$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/startCase.js [app-client] (ecmascript) <export default as startCase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$is$40$19$2e$2$2e$8$2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-is@19.2.8/node_modules/react-is/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$4$2e$3_css$2d$to$2d$react$2d$native$40$3$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/styled-components@6.4.3_css-to-react-native@3.2.0_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$5$2e$2$2e$1_react$40$19$2e$2$2e$7$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$BlockContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+icons@5.2.1_react@19.2.7/node_modules/@sanity/icons/dist/BlockContent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$5$2e$2$2e$1_react$40$19$2e$2$2e$7$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$CheckmarkCircle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+icons@5.2.1_react@19.2.7/node_modules/@sanity/icons/dist/CheckmarkCircle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$5$2e$2$2e$1_react$40$19$2e$2$2e$7$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$Cube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+icons@5.2.1_react@19.2.7/node_modules/@sanity/icons/dist/Cube.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$5$2e$2$2e$1_react$40$19$2e$2$2e$7$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$Image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+icons@5.2.1_react@19.2.7/node_modules/@sanity/icons/dist/Image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$5$2e$2$2e$1_react$40$19$2e$2$2e$7$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$Number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+icons@5.2.1_react@19.2.7/node_modules/@sanity/icons/dist/Number.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$5$2e$2$2e$1_react$40$19$2e$2$2e$7$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$String$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+icons@5.2.1_react@19.2.7/node_modules/@sanity/icons/dist/String.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$5$2e$2$2e$1_react$40$19$2e$2$2e$7$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$ThList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+icons@5.2.1_react@19.2.7/node_modules/@sanity/icons/dist/ThList.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const PointerEvents = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    let children, rest, style;
    $[0] !== t0 ? ({ children, style, ...rest } = t0, $[0] = t0, $[1] = children, $[2] = rest, $[3] = style) : (children = $[1], rest = $[2], style = $[3]);
    let t1;
    $[4] !== style ? (t1 = {
        ...style,
        pointerEvents: "all"
    }, $[4] = style, $[5] = t1) : t1 = $[5];
    let t2;
    return $[6] !== children || $[7] !== rest || $[8] !== t1 ? (t2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        style: t1,
        "data-sanity-overlay-element": !0,
        ...rest,
        children
    }), $[6] = children, $[7] = rest, $[8] = t1, $[9] = t2) : t2 = $[9], t2;
};
function defineEvent(options) {
    return {
        type: "log",
        name: options.name,
        version: options.version,
        description: options.description,
        maxSampleRate: options.maxSampleRate,
        schema: void 0
    };
}
const events = {
    "Visual Editing Drag Sequence Completed": defineEvent({
        name: "Visual Editing Drag Sequence Completed",
        description: "An array is successfully reordered using drag and drop.",
        version: 1
    }),
    "Visual Editing Drag Minimap Enabled": defineEvent({
        name: "Visual Editing Drag Minimap Enabled",
        description: "The zoomed-out minimap view is enabled during a drag sequence.",
        version: 1
    }),
    "Visual Editing Context Menu Item Removed": defineEvent({
        name: "Visual Editing Context Menu Item Removed",
        description: "An item is removed using the Context Menu.",
        version: 1
    }),
    "Visual Editing Context Menu Item Duplicated": defineEvent({
        name: "Visual Editing Context Menu Item Duplicated",
        description: "An item is duplicated using the Context Menu.",
        version: 1
    }),
    "Visual Editing Context Menu Item Moved": defineEvent({
        name: "Visual Editing Context Menu Item Moved",
        description: "An item is moved using the Context Menu.",
        version: 1
    }),
    "Visual Editing Context Menu Item Inserted": defineEvent({
        name: "Visual Editing Context Menu Item Inserted",
        description: "An item is inserted using the Context Menu.",
        version: 1
    }),
    "Visual Editing Insert Menu Item Inserted": defineEvent({
        name: "Visual Editing Insert Menu Item Inserted",
        description: "An item is inserted using the Insert Menu.",
        version: 1
    }),
    "Visual Editing Overlay Clicked": defineEvent({
        name: "Visual Editing Overlay Clicked",
        description: "An Overlay is clicked.",
        version: 1
    })
}, TelemetryContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(void 0);
function useTelemetry() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(TelemetryContext);
    if (!context) throw new Error("Telemetry context is missing");
    return context;
}
function getSchemaTypeIcon(schemaType) {
    const referenceIcon = isReferenceSchemaType(schemaType) && (schemaType.to ?? []).length === 1 ? schemaType.to[0].icon : void 0;
    return schemaType.icon ?? schemaType.type?.icon ?? referenceIcon;
}
function isReferenceSchemaType(type) {
    return isRecord(type) && (type.name === "reference" || isReferenceSchemaType(type.type));
}
function isRecord(value) {
    return !!value && (typeof value == "object" || typeof value == "function");
}
function fullInsertMenuReducer(state, event) {
    return {
        query: event.type === "change query" ? event.query : state.query,
        groups: event.type === "select group" ? state.groups.map((group)=>({
                ...group,
                selected: event.name === group.name
            })) : state.groups,
        views: event.type === "toggle view" ? state.views.map((view)=>({
                ...view,
                selected: event.name === view.name
            })) : state.views
    };
}
const ALL_ITEMS_GROUP_NAME = "all-items", gridStyle = {
    gridTemplateColumns: "repeat(auto-fill, minmax(118px, 1fr))",
    alignItems: "start"
};
function InsertMenu$1(props) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(54), showIcons = props.showIcons === void 0 ? !0 : props.showIcons, showFilter = props.filter === void 0 || props.filter === "auto" ? props.schemaTypes.length > 5 : props.filter;
    let t0;
    $[0] !== props.groups || $[1] !== props.labels ? (t0 = props.groups ? [
        {
            name: ALL_ITEMS_GROUP_NAME,
            title: props.labels["insert-menu.filter.all-items"],
            selected: !0
        },
        ...props.groups.map(_temp$2)
    ] : [], $[0] = props.groups, $[1] = props.labels, $[2] = t0) : t0 = $[2];
    let t1;
    $[3] !== props.views ? (t1 = props.views ?? [
        {
            name: "list"
        }
    ], $[3] = props.views, $[4] = t1) : t1 = $[4];
    let t2;
    $[5] !== t1 ? (t2 = t1.map(_temp2$1), $[5] = t1, $[6] = t2) : t2 = $[6];
    let t3;
    $[7] !== t0 || $[8] !== t2 ? (t3 = {
        query: "",
        groups: t0,
        views: t2
    }, $[7] = t0, $[8] = t2, $[9] = t3) : t3 = $[9];
    const [state, send] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducer"])(fullInsertMenuReducer, t3);
    let T0, T1, T2, t4, t5, t6, t7, t8, t9;
    if ($[10] !== props || $[11] !== showFilter || $[12] !== showIcons || $[13] !== state.groups || $[14] !== state.query || $[15] !== state.views) {
        const filteredSchemaTypes = filterSchemaTypes(props.schemaTypes, state.query, state.groups), selectedView = state.views.find(_temp3$1), showingFilterOrViews = showFilter || state.views.length > 1, showingTabs = state.groups && state.groups.length > 0, showingAnyOptions = showingFilterOrViews || showingTabs;
        T2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__p__as__Menu$3e$__["Menu"], t9 = 0, T1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__at__as__Flex$3e$__["Flex"], t6 = "column", t7 = "fill";
        let t102;
        $[25] !== showingAnyOptions ? (t102 = showingAnyOptions ? {
            style: {
                borderBottom: "1px solid var(--card-border-color)"
            },
            paddingBottom: 1
        } : {}, $[25] = showingAnyOptions, $[26] = t102) : t102 = $[26];
        let t112;
        $[27] !== props.labels || $[28] !== showFilter || $[29] !== showingFilterOrViews || $[30] !== state.query || $[31] !== state.views ? (t112 = showingFilterOrViews ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__at__as__Flex$3e$__["Flex"], {
            flex: "none",
            align: "center",
            paddingTop: 1,
            paddingX: 1,
            gap: 1,
            children: [
                showFilter ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__lt__as__Box$3e$__["Box"], {
                    flex: 1,
                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__b__as__TextInput$3e$__["TextInput"], {
                        autoFocus: !0,
                        border: !1,
                        fontSize: 1,
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$5$2e$2$2e$1_react$40$19$2e$2$2e$7$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$Search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchIcon"],
                        onChange: (event)=>{
                            send({
                                type: "change query",
                                query: event.target.value
                            });
                        },
                        placeholder: props.labels["insert-menu.search.placeholder"],
                        value: state.query
                    })
                }) : null,
                state.views.length > 1 ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__lt__as__Box$3e$__["Box"], {
                    flex: "none",
                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ViewToggle, {
                        views: state.views,
                        onToggle: (name)=>{
                            send({
                                type: "toggle view",
                                name
                            });
                        },
                        labels: props.labels
                    })
                }) : null
            ]
        }) : null, $[27] = props.labels, $[28] = showFilter, $[29] = showingFilterOrViews, $[30] = state.query, $[31] = state.views, $[32] = t112) : t112 = $[32];
        let t122;
        $[33] !== showingTabs || $[34] !== state.groups ? (t122 = showingTabs ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__lt__as__Box$3e$__["Box"], {
            paddingTop: 1,
            paddingX: 1,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__c__as__TabList$3e$__["TabList"], {
                space: 1,
                children: state.groups.map((group_0)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__l__as__Tab$3e$__["Tab"], {
                        id: `${group_0.name}-tab`,
                        "aria-controls": `${group_0.name}-panel`,
                        label: group_0.title ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$18$2e$1$2f$node_modules$2f$lodash$2d$es$2f$startCase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__startCase$3e$__["startCase"])(group_0.name),
                        selected: group_0.selected,
                        onClick: ()=>{
                            send({
                                type: "select group",
                                name: group_0.name
                            });
                        }
                    }, group_0.name))
            })
        }) : null, $[33] = showingTabs, $[34] = state.groups, $[35] = t122) : t122 = $[35], $[36] !== t102 || $[37] !== t112 || $[38] !== t122 ? (t8 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__lt__as__Box$3e$__["Box"], {
            ...t102,
            children: [
                t112,
                t122
            ]
        }), $[36] = t102, $[37] = t112, $[38] = t122, $[39] = t8) : t8 = $[39], T0 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__lt__as__Box$3e$__["Box"], t4 = 1, t5 = filteredSchemaTypes.length === 0 ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__lt__as__Box$3e$__["Box"], {
            padding: 2,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__et__as__Text$3e$__["Text"], {
                muted: !0,
                size: 1,
                children: props.labels["insert-menu.search.no-results"]
            })
        }) : selectedView ? selectedView.name === "grid" ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__s__as__Grid$3e$__["Grid"], {
            autoRows: "auto",
            flex: 1,
            gap: 1,
            style: gridStyle,
            children: filteredSchemaTypes.map((schemaType)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(GridMenuItem, {
                    icon: showIcons ? getSchemaTypeIcon(schemaType) : void 0,
                    onClick: ()=>{
                        props.onSelect(schemaType);
                    },
                    previewImageUrl: selectedView.previewImageUrl?.(schemaType.name),
                    schemaType
                }, schemaType.name))
        }) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__O__as__Stack$3e$__["Stack"], {
            flex: 1,
            space: 1,
            children: filteredSchemaTypes.map((schemaType_0)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__u__as__MenuItem$3e$__["MenuItem"], {
                    icon: showIcons ? getSchemaTypeIcon(schemaType_0) : void 0,
                    onClick: ()=>{
                        props.onSelect(schemaType_0);
                    },
                    text: schemaType_0.title ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$18$2e$1$2f$node_modules$2f$lodash$2d$es$2f$startCase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__startCase$3e$__["startCase"])(schemaType_0.name)
                }, schemaType_0.name))
        }) : null, $[10] = props, $[11] = showFilter, $[12] = showIcons, $[13] = state.groups, $[14] = state.query, $[15] = state.views, $[16] = T0, $[17] = T1, $[18] = T2, $[19] = t4, $[20] = t5, $[21] = t6, $[22] = t7, $[23] = t8, $[24] = t9;
    } else T0 = $[16], T1 = $[17], T2 = $[18], t4 = $[19], t5 = $[20], t6 = $[21], t7 = $[22], t8 = $[23], t9 = $[24];
    let t10;
    $[40] !== T0 || $[41] !== t4 || $[42] !== t5 ? (t10 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(T0, {
        padding: t4,
        children: t5
    }), $[40] = T0, $[41] = t4, $[42] = t5, $[43] = t10) : t10 = $[43];
    let t11;
    $[44] !== T1 || $[45] !== t10 || $[46] !== t6 || $[47] !== t7 || $[48] !== t8 ? (t11 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(T1, {
        direction: t6,
        height: t7,
        children: [
            t8,
            t10
        ]
    }), $[44] = T1, $[45] = t10, $[46] = t6, $[47] = t7, $[48] = t8, $[49] = t11) : t11 = $[49];
    let t12;
    return $[50] !== T2 || $[51] !== t11 || $[52] !== t9 ? (t12 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(T2, {
        padding: t9,
        children: t11
    }), $[50] = T2, $[51] = t11, $[52] = t9, $[53] = t12) : t12 = $[53], t12;
}
function _temp3$1(view_0) {
    return view_0.selected;
}
function _temp2$1(view, index) {
    return {
        ...view,
        selected: index === 0
    };
}
function _temp$2(group) {
    return {
        ...group,
        selected: !1
    };
}
const viewToggleIcon = {
    grid: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$5$2e$2$2e$1_react$40$19$2e$2$2e$7$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$ThLarge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThLargeIcon"],
    list: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$5$2e$2$2e$1_react$40$19$2e$2$2e$7$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$Ulist$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UlistIcon"]
}, viewToggleTooltip = {
    grid: "insert-menu.toggle-grid-view.tooltip",
    list: "insert-menu.toggle-list-view.tooltip"
};
function ViewToggle(props) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11), viewIndex = props.views.findIndex(_temp4), nextView = props.views[viewIndex + 1] ?? props.views[0], t0 = props.labels[viewToggleTooltip[nextView.name]];
    let t1;
    $[0] !== t0 ? (t1 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__et__as__Text$3e$__["Text"], {
        size: 1,
        children: t0
    }), $[0] = t0, $[1] = t1) : t1 = $[1];
    const t2 = viewToggleIcon[nextView.name];
    let t3;
    $[2] !== nextView.name || $[3] !== props ? (t3 = ()=>{
        props.onToggle(nextView.name);
    }, $[2] = nextView.name, $[3] = props, $[4] = t3) : t3 = $[4];
    let t4;
    $[5] !== t2 || $[6] !== t3 ? (t4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Y__as__Button$3e$__["Button"], {
        mode: "bleed",
        icon: t2,
        onClick: t3
    }), $[5] = t2, $[6] = t3, $[7] = t4) : t4 = $[7];
    let t5;
    return $[8] !== t1 || $[9] !== t4 ? (t5 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__Tooltip$3e$__["Tooltip"], {
        content: t1,
        placement: "top",
        portal: !0,
        children: t4
    }), $[8] = t1, $[9] = t4, $[10] = t5) : t5 = $[10], t5;
}
function _temp4(view) {
    return view.selected;
}
function GridMenuItem(props) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(20), [failedToLoad, setFailedToLoad] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!1), Icon = props.icon, hasPreviewImage = !!props.previewImageUrl && !failedToLoad;
    let t0;
    $[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (t0 = {
        overflow: "hidden"
    }, $[0] = t0) : t0 = $[0];
    let t1;
    $[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (t1 = {
        backgroundColor: "var(--card-muted-bg-color)",
        paddingBottom: "66.6%",
        position: "relative"
    }, $[1] = t1) : t1 = $[1];
    let t2;
    $[2] !== Icon || $[3] !== hasPreviewImage ? (t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$is$40$19$2e$2$2e$8$2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElementType"])(Icon) && !hasPreviewImage ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__at__as__Flex$3e$__["Flex"], {
        align: "center",
        justify: "center",
        style: {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
        },
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__et__as__Text$3e$__["Text"], {
            size: 1,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Icon, {})
        })
    }) : null, $[2] = Icon, $[3] = hasPreviewImage, $[4] = t2) : t2 = $[4];
    let t3;
    $[5] !== hasPreviewImage || $[6] !== props.previewImageUrl ? (t3 = hasPreviewImage ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("img", {
        src: props.previewImageUrl,
        style: {
            objectFit: "contain",
            width: "100%",
            height: "100%",
            position: "absolute",
            inset: 0
        },
        onError: ()=>{
            setFailedToLoad(!0);
        }
    }) : null, $[5] = hasPreviewImage, $[6] = props.previewImageUrl, $[7] = t3) : t3 = $[7];
    let t4;
    $[8] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (t4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        style: {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            boxShadow: "inset 0 0 0 0.5px var(--card-fg-color)",
            opacity: 0.1
        }
    }), $[8] = t4) : t4 = $[8];
    let t5;
    $[9] !== t2 || $[10] !== t3 ? (t5 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__lt__as__Box$3e$__["Box"], {
        flex: "none",
        style: t1,
        children: [
            t2,
            t3,
            t4
        ]
    }), $[9] = t2, $[10] = t3, $[11] = t5) : t5 = $[11];
    const t6 = props.schemaType.title ?? props.schemaType.name;
    let t7;
    $[12] !== t6 ? (t7 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__lt__as__Box$3e$__["Box"], {
        flex: "none",
        paddingX: 2,
        paddingY: 1,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__et__as__Text$3e$__["Text"], {
            size: 1,
            weight: "medium",
            children: t6
        })
    }), $[12] = t6, $[13] = t7) : t7 = $[13];
    let t8;
    $[14] !== t5 || $[15] !== t7 ? (t8 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__at__as__Flex$3e$__["Flex"], {
        direction: "column",
        gap: 1,
        padding: 1,
        children: [
            t5,
            t7
        ]
    }), $[14] = t5, $[15] = t7, $[16] = t8) : t8 = $[16];
    let t9;
    return $[17] !== props.onClick || $[18] !== t8 ? (t9 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__u__as__MenuItem$3e$__["MenuItem"], {
        padding: 0,
        radius: 2,
        onClick: props.onClick,
        style: t0,
        children: t8
    }), $[17] = props.onClick, $[18] = t8, $[19] = t9) : t9 = $[19], t9;
}
function filterSchemaTypes(schemaTypes, query, groups) {
    return schemaTypes.filter((schemaType)=>passesGroupFilter(schemaType, groups) && passesQueryFilter(schemaType, query));
}
function passesQueryFilter(schemaType, query) {
    const sanitizedQuery = query.trim().toLowerCase();
    return schemaType.title ? schemaType.title?.toLowerCase().includes(sanitizedQuery) : schemaType.name.includes(sanitizedQuery);
}
function passesGroupFilter(schemaType, groups) {
    const selectedGroup = groups.find((group)=>group.selected);
    return selectedGroup ? selectedGroup.name === ALL_ITEMS_GROUP_NAME ? !0 : selectedGroup.of?.includes(schemaType.name) : !0;
}
const scrollBlockStyles = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$4$2e$3_css$2d$to$2d$react$2d$native$40$3$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  overflow-y: scroll;
  overscroll-behavior: contain;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &:before {
    content: '';
    display: block;
    height: calc(100% + 1px);
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }
`, PortalContainer = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$4$2e$3_css$2d$to$2d$react$2d$native$40$3$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"].div.withConfig({
    displayName: "PortalContainer",
    componentId: "sc-11pn4rs-0"
})([
    "height:100%;inset:0;pointer-events:all;position:fixed;width:100%;display:flex;justify-content:center;align-items:center;",
    ""
], (props)=>props.$blockScroll && scrollBlockStyles), PortalBackground = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$4$2e$3_css$2d$to$2d$react$2d$native$40$3$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"].div.withConfig({
    displayName: "PortalBackground",
    componentId: "sc-11pn4rs-1"
})([
    "background:transparent;height:100%;inset:0;position:absolute;width:100%;"
]), PopoverPortal = (props)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    let t0;
    return $[0] !== props ? (t0 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__j__as__Portal$3e$__["Portal"], {
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PopoverBackground, {
            ...props
        })
    }), $[0] = props, $[1] = t0) : t0 = $[1], t0;
}, PopoverBackground = (props)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7), { children, onDismiss, setBoundaryElement, blockScroll: t0 } = props, blockScroll = t0 === void 0 ? !0 : t0, handleClick = _temp$1;
    let t1;
    $[0] !== onDismiss ? (t1 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PortalBackground, {
        onMouseDownCapture: ()=>{
            onDismiss?.();
        }
    }), $[0] = onDismiss, $[1] = t1) : t1 = $[1];
    let t2;
    return $[2] !== blockScroll || $[3] !== children || $[4] !== setBoundaryElement || $[5] !== t1 ? (t2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(PortalContainer, {
        "data-sanity-overlay-element": !0,
        ref: setBoundaryElement,
        onClick: handleClick,
        $blockScroll: blockScroll,
        children: [
            t1,
            children
        ]
    }), $[2] = blockScroll, $[3] = children, $[4] = setBoundaryElement, $[5] = t1, $[6] = t2) : t2 = $[6], t2;
};
function _temp$1(event) {
    event.stopPropagation();
}
function getNodeIcon(option) {
    if (!option) return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$5$2e$2$2e$1_react$40$19$2e$2$2e$7$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$Cube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CubeIcon"], {});
    if (option.type === "string") return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$5$2e$2$2e$1_react$40$19$2e$2$2e$7$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$String$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StringIcon"], {});
    if (option.type === "number") return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$5$2e$2$2e$1_react$40$19$2e$2$2e$7$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$Number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NumberIcon"], {});
    const { value: node } = option;
    if ("icon" in option && option.icon) return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        dangerouslySetInnerHTML: {
            __html: option.icon
        }
    });
    const { type } = node;
    if (type === "string") return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$5$2e$2$2e$1_react$40$19$2e$2$2e$7$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$String$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StringIcon"], {});
    if (type === "boolean") return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$5$2e$2$2e$1_react$40$19$2e$2$2e$7$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$CheckmarkCircle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckmarkCircleIcon"], {});
    if (type === "number") return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$5$2e$2$2e$1_react$40$19$2e$2$2e$7$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$Number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NumberIcon"], {});
    if (type === "array" || type === "union") return (Array.isArray(node.of) ? node.of : [
        node.of
    ]).some((n)=>"name" in n && n.name === "block") ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$5$2e$2$2e$1_react$40$19$2e$2$2e$7$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$BlockContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlockContentIcon"], {}) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$5$2e$2$2e$1_react$40$19$2e$2$2e$7$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$ThList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThListIcon"], {});
    if (type === "object") {
        if (option.name === "image") return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$5$2e$2$2e$1_react$40$19$2e$2$2e$7$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$Image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageIcon"], {});
        if (option.name === "block") return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$5$2e$2$2e$1_react$40$19$2e$2$2e$7$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$String$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StringIcon"], {});
    }
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$5$2e$2$2e$1_react$40$19$2e$2$2e$7$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$Cube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CubeIcon"], {});
}
const labels = {
    "insert-menu.filter.all-items": "All",
    "insert-menu.search.no-results": "No results",
    "insert-menu.search.placeholder": "Filter types\u2026",
    "insert-menu.toggle-grid-view.tooltip": "Toggle grid view",
    "insert-menu.toggle-list-view.tooltip": "Toggle list view"
}, InsertMenu = (props)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11), { node, onSelect } = props;
    let t0;
    $[0] !== node.options?.insertMenu ? (t0 = node.options?.insertMenu || {}, $[0] = node.options?.insertMenu, $[1] = t0) : t0 = $[1];
    const insertMenuOptions = t0;
    let t1;
    $[2] !== insertMenuOptions.views ? (t1 = insertMenuOptions.views?.map(_temp), $[2] = insertMenuOptions.views, $[3] = t1) : t1 = $[3];
    const views = t1;
    let t2;
    $[4] !== node.of ? (t2 = node.of.map(_temp2), $[4] = node.of, $[5] = t2) : t2 = $[5];
    let t3;
    return $[6] !== insertMenuOptions || $[7] !== onSelect || $[8] !== t2 || $[9] !== views ? (t3 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(InsertMenu$1, {
        ...insertMenuOptions,
        labels,
        schemaTypes: t2,
        onSelect,
        views
    }), $[6] = insertMenuOptions, $[7] = onSelect, $[8] = t2, $[9] = views, $[10] = t3) : t3 = $[10], t3;
}, InsertMenuPopover = (props)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11), { node, onDismiss, onSelect, referenceElement } = props;
    let t0;
    $[0] !== node || $[1] !== onSelect ? (t0 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(InsertMenu, {
        node,
        onSelect
    }), $[0] = node, $[1] = onSelect, $[2] = t0) : t0 = $[2];
    const popoverContent = t0, width = (node.options?.insertMenu || {}).views?.some(_temp3) ? 0 : void 0;
    let t1;
    $[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (t1 = [
        "bottom"
    ], $[3] = t1) : t1 = $[3];
    let t2;
    $[4] !== popoverContent || $[5] !== referenceElement || $[6] !== width ? (t2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__k__as__Popover$3e$__["Popover"], {
        animate: !0,
        constrainSize: !0,
        content: popoverContent,
        fallbackPlacements: t1,
        open: !0,
        placement: "top",
        preventOverflow: !0,
        referenceElement,
        width
    }), $[4] = popoverContent, $[5] = referenceElement, $[6] = width, $[7] = t2) : t2 = $[7];
    let t3;
    return $[8] !== onDismiss || $[9] !== t2 ? (t3 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PopoverPortal, {
        onDismiss,
        children: t2
    }), $[8] = onDismiss, $[9] = t2, $[10] = t3) : t3 = $[10], t3;
};
function _temp(view) {
    return view.name === "grid" ? {
        ...view,
        previewImageUrl: (name)=>view.previewImageUrls?.[name]
    } : view;
}
function _temp2(type) {
    return {
        ...type,
        icon: getNodeIcon(type)
    };
}
function _temp3(view) {
    return view.name === "grid";
}
;
}),
"[project]/node_modules/.pnpm/@sanity+visual-editing@5.7.3_@emotion+is-prop-valid@1.4.0_@sanity+client@7.26.2_@types+_44aa6e416023878fa62b01b3252b6fe2/node_modules/@sanity/visual-editing/dist/_chunks-es/SharedStateContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SharedStateContext",
    ()=>SharedStateContext,
    "createOverlayController",
    ()=>createOverlayController,
    "sanityNodesExistInSameArray",
    ()=>sanityNodesExistInSameArray,
    "stegaClean",
    ()=>stegaClean,
    "testVercelStegaRegex",
    ()=>testVercelStegaRegex,
    "v4",
    ()=>v4
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$2d$csm$40$3$2e$0$2e$13_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$sanity$2b$types$40$6$2e$9$2e$1_$40$types$2b$react$40$19$2e$2$2e$17_$5f$typescript$40$6$2e$0$2e$3$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2d$csm$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+visual-editing-csm@3.0.13_@sanity+client@7.26.2_@sanity+types@6.9.1_@types+react@19.2.17__typescript@6.0.3/node_modules/@sanity/visual-editing-csm/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vercel$2b$stega$40$1$2e$1$2e$0$2f$node_modules$2f40$vercel$2f$stega$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@vercel+stega@1.1.0/node_modules/@vercel/stega/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.0_@babel+core@7.29.7_@playwright+test@1.62.1_@types+node@26.1.0_babel-plugin-_3b64392720bc9294ad1f40cae38bcee9/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
const byteToHex = [];
for(let i = 0; i < 256; ++i)byteToHex.push((i + 256).toString(16).slice(1));
function unsafeStringify(arr, offset = 0) {
    return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
    if (!getRandomValues) {
        if (typeof crypto > "u" || !crypto.getRandomValues) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        getRandomValues = crypto.getRandomValues.bind(crypto);
    }
    return getRandomValues(rnds8);
}
const randomUUID = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var native = {
    randomUUID
};
function _v4(options, buf, offset) {
    options = options || {};
    const rnds = options.random ?? options.rng?.() ?? rng();
    if (rnds.length < 16) throw new Error("Random bytes length must be >= 16");
    return rnds[6] = rnds[6] & 15 | 64, rnds[8] = rnds[8] & 63 | 128, unsafeStringify(rnds);
}
function v4(options, buf, offset) {
    return native.randomUUID && !options ? native.randomUUID() : _v4(options);
}
function getRect(element) {
    const domRect = element.getBoundingClientRect();
    return {
        x: domRect.x + scrollX,
        y: domRect.y + scrollY,
        w: domRect.width,
        h: domRect.height
    };
}
function offsetRect(rect, px, axis) {
    return axis === "x" ? {
        x: rect.x + px,
        y: rect.y,
        w: rect.w - 2 * px,
        h: rect.h
    } : {
        x: rect.x,
        y: rect.y + px,
        w: rect.w,
        h: rect.h - 2 * px
    };
}
function rayIntersect(l1, l2) {
    const { x1, y1, x2, y2 } = l1, { x1: x3, y1: y3, x2: x4, y2: y4 } = l2;
    if (x1 === x2 && y1 === y2 || x3 === x4 && y3 === y4) return !1;
    const denominator = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);
    if (denominator === 0) return !1;
    const ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denominator, ub = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / denominator;
    if (ua < 0 || ua > 1 || ub < 0 || ub > 1) return !1;
    const x = x1 + ua * (x2 - x1), y = y1 + ua * (y2 - y1);
    return {
        x,
        y
    };
}
function rectEqual(r1, r2) {
    return r1.x === r2.x && r1.y === r2.y && r1.w === r2.w && r1.h === r2.h;
}
function rayRectIntersections(line, rect) {
    const rectLines = [
        {
            x1: rect.x,
            y1: rect.y,
            x2: rect.x + rect.w,
            y2: rect.y
        },
        {
            x1: rect.x + rect.w,
            y1: rect.y,
            x2: rect.x + rect.w,
            y2: rect.y + rect.h
        },
        {
            x1: rect.x + rect.w,
            y1: rect.y + rect.h,
            x2: rect.x,
            y2: rect.y + rect.h
        },
        {
            x1: rect.x,
            y1: rect.y + rect.h,
            x2: rect.x,
            y2: rect.y
        }
    ], intersections = [];
    for(let i = 0; i < rectLines.length; i++){
        const intersection = rayIntersect(line, rectLines[i]);
        if (intersection) {
            let isDuplicate = !1;
            for(let j = 0; j < intersections.length; j++)intersections[j].x === intersection.x && intersections[j].y === intersection.y && (isDuplicate = !0);
            isDuplicate || intersections.push(intersection);
        }
    }
    return intersections.length === 0 ? !1 : intersections.sort((a, b)=>pointDist(a, {
            x: line.x1,
            y: line.y1
        }) - pointDist(b, {
            x: line.x1,
            y: line.y1
        }));
}
function pointDist(p1, p2) {
    const a = p1.x - p2.x, b = p1.y - p2.y;
    return Math.sqrt(a * a + b * b);
}
function pointInBounds(point, bounds) {
    const withinX = point.x >= bounds.x && point.x <= bounds.x + bounds.w, withinY = point.y >= bounds.y && point.y <= bounds.y + bounds.h;
    return withinX && withinY;
}
function findClosestIntersection(ray, targets, flow) {
    const rayOrigin = {
        x: ray.x1,
        y: ray.y1
    };
    if (targets.some((t)=>pointInBounds(rayOrigin, offsetRect(t, Math.min(t.w, t.h) / 10, flow === "horizontal" ? "x" : "y")))) return null;
    let closestIntersection, closestRect;
    for (const target of targets){
        const intersections = rayRectIntersections(ray, offsetRect(target, Math.min(target.w, target.h) / 10, flow === "horizontal" ? "x" : "y"));
        if (intersections) {
            const firstIntersection = intersections[0];
            closestIntersection ? pointDist(rayOrigin, firstIntersection) < pointDist(rayOrigin, closestIntersection) && (closestIntersection = firstIntersection, closestRect = target) : (closestIntersection = firstIntersection, closestRect = target);
        }
    }
    return closestRect || null;
}
function scaleRect(rect, scale, origin) {
    const { x, y, w, h } = rect, { x: originX, y: originY } = origin, newX = originX + (x - originX) * scale, newY = originY + (y - originY) * scale, newWidth = w * scale, newHeight = h * scale;
    return {
        x: newX,
        y: newY,
        w: newWidth,
        h: newHeight
    };
}
function getRectGroupXExtent(rects) {
    const minGroupX = Math.max(0, Math.min(...rects.map((r)=>r.x))), maxGroupX = Math.min(document.body.offsetWidth, Math.max(...rects.map((r)=>r.x + r.w)));
    return {
        min: minGroupX,
        max: maxGroupX,
        width: maxGroupX - minGroupX
    };
}
function getRectGroupYExtent(rects) {
    const minGroupY = Math.max(0, Math.min(...rects.map((r)=>r.y))), maxGroupY = Math.min(document.body.scrollHeight, Math.max(...rects.map((r)=>r.y + r.h)));
    return {
        min: minGroupY,
        max: maxGroupY,
        height: maxGroupY - minGroupY
    };
}
function calcTargetFlow(targets) {
    return targets.some((t1)=>targets.filter((t2)=>!rectEqual(t1, t2)).some((t2)=>t1.y === t2.y)) ? "horizontal" : "vertical";
}
function calcInsertPosition(origin, targets, flow) {
    if (flow === "horizontal") {
        const rayLeft = {
            x1: origin.x,
            y1: origin.y,
            x2: origin.x - 1e8,
            y2: origin.y
        }, rayRight = {
            x1: origin.x,
            y1: origin.y,
            x2: origin.x + 1e8,
            y2: origin.y
        };
        return {
            left: findClosestIntersection(rayLeft, targets, flow),
            right: findClosestIntersection(rayRight, targets, flow)
        };
    } else {
        const rayTop = {
            x1: origin.x,
            y1: origin.y,
            x2: origin.x,
            y2: origin.y - 1e8
        }, rayBottom = {
            x1: origin.x,
            y1: origin.y,
            x2: origin.x,
            y2: origin.y + 1e8
        };
        return {
            top: findClosestIntersection(rayTop, targets, flow),
            bottom: findClosestIntersection(rayBottom, targets, flow)
        };
    }
}
function findRectSanityData(rect, overlayGroup) {
    return overlayGroup.find((e)=>rectEqual(getRect(e.elements.element), rect))?.sanity;
}
function resolveInsertPosition(overlayGroup, insertPosition, flow) {
    return Object.values(insertPosition).every((v)=>v === null) ? null : flow === "horizontal" ? {
        left: insertPosition.left ? {
            rect: insertPosition.left,
            sanity: findRectSanityData(insertPosition.left, overlayGroup)
        } : null,
        right: insertPosition.right ? {
            rect: insertPosition.right,
            sanity: findRectSanityData(insertPosition.right, overlayGroup)
        } : null
    } : {
        top: insertPosition.top ? {
            rect: insertPosition.top,
            sanity: findRectSanityData(insertPosition.top, overlayGroup)
        } : null,
        bottom: insertPosition.bottom ? {
            rect: insertPosition.bottom,
            sanity: findRectSanityData(insertPosition.bottom, overlayGroup)
        } : null
    };
}
function calcMousePos(e) {
    const bodyBounds = document.body.getBoundingClientRect();
    return {
        x: Math.max(bodyBounds.x, Math.min(e.clientX, bodyBounds.x + bodyBounds.width)),
        y: e.clientY + window.scrollY
    };
}
function calcMousePosInverseTransform(mousePos2) {
    const body = document.body, transform = window.getComputedStyle(body).transform;
    if (transform === "none") return {
        x: mousePos2.x,
        y: mousePos2.y
    };
    const inverseMatrix = new DOMMatrix(transform).inverse(), transformedPoint = new DOMPoint(mousePos2.x, mousePos2.y).matrixTransform(inverseMatrix);
    return {
        x: transformedPoint.x,
        y: transformedPoint.y
    };
}
function buildPreviewSkeleton(mousePos2, element, scaleFactor) {
    const bounds = getRect(element), children = [
        ...element.querySelectorAll(":where(h1, h2, h3, h4, p, a, img, span, button):not(:has(*))")
    ];
    mousePos2.x <= bounds.x && (mousePos2.x = bounds.x), mousePos2.x >= bounds.x + bounds.w && (mousePos2.x = bounds.x + bounds.w), mousePos2.y >= bounds.y + bounds.h && (mousePos2.y = bounds.y + bounds.h), mousePos2.y <= bounds.y && (mousePos2.y = bounds.y);
    const childRects = children.map((child)=>{
        const rect = scaleRect(getRect(child), scaleFactor, {
            x: bounds.x,
            y: bounds.y
        });
        return {
            x: rect.x - bounds.x,
            y: rect.y - bounds.y,
            w: rect.w,
            h: rect.h,
            tagName: child.tagName
        };
    });
    return {
        offsetX: (bounds.x - mousePos2.x) * scaleFactor,
        offsetY: (bounds.y - mousePos2.y) * scaleFactor,
        w: bounds.w * scaleFactor,
        h: bounds.h * scaleFactor,
        maxWidth: bounds.w * scaleFactor * 0.75,
        childRects
    };
}
const minDragDelta = 4;
async function applyMinimapWrapperTransform(target, scaleFactor, minYScaled, handler, rectUpdateFrequency) {
    return new Promise((resolve)=>{
        target.addEventListener("transitionend", ()=>{
            setTimeout(()=>{
                handler({
                    type: "overlay/dragEndMinimapTransition"
                });
            }, rectUpdateFrequency * 2), resolve();
        }, {
            once: !0
        }), handler({
            type: "overlay/dragStartMinimapTransition"
        }), handler({
            type: "overlay/dragToggleMinimap",
            display: !0
        }), document.body.style.overflow = "hidden", document.body.style.height = "100%", document.documentElement.style.overflow = "initial", document.documentElement.style.height = "100%", setTimeout(()=>{
            target.style.transformOrigin = "50% 0px", target.style.transition = "transform 150ms ease", target.style.transform = `translate3d(0px, ${-minYScaled + scrollY}px, 0px) scale(${scaleFactor})`;
        }, 25);
    });
}
function calcMinimapTransformValues(rects, groupHeightOverride) {
    let groupHeight = groupHeightOverride || getRectGroupYExtent(rects).height;
    const padding = 100;
    groupHeight += padding * 2;
    const scaleFactor = groupHeight > window.innerHeight ? window.innerHeight / groupHeight : 1, scaledRects = rects.map((r)=>scaleRect(r, scaleFactor, {
            x: window.innerWidth / 2,
            y: 0
        })), { min: minYScaled } = getRectGroupYExtent(scaledRects);
    return {
        scaleFactor,
        minYScaled: minYScaled - padding * scaleFactor
    };
}
function calcGroupBoundsPreview(rects) {
    const groupBoundsX = getRectGroupXExtent(rects), groupBoundsY = getRectGroupYExtent(rects), offsetDist = 8, canOffsetX = groupBoundsX.min > offsetDist && groupBoundsX.min + groupBoundsX.width <= window.innerWidth - offsetDist, canOffsetY = groupBoundsY.min > offsetDist && groupBoundsY.min + groupBoundsY.height <= document.body.scrollHeight - offsetDist, canOffset = canOffsetX && canOffsetY;
    return {
        x: canOffset ? groupBoundsX.min - offsetDist : groupBoundsX.min,
        y: canOffset ? groupBoundsY.min - offsetDist : groupBoundsY.min,
        w: canOffset ? groupBoundsX.width + offsetDist * 2 : groupBoundsX.width,
        h: canOffset ? groupBoundsY.height + offsetDist * 2 : groupBoundsY.height
    };
}
async function resetMinimapWrapperTransform(endYOrigin, target, prescaleHeight2, handler, rectUpdateFrequency, previousRootStyleValues2) {
    return new Promise((resolve)=>{
        const transform = window.getComputedStyle(target).transform;
        if (new DOMMatrix(transform).a === 1) return;
        const maxScroll = prescaleHeight2 - window.innerHeight, prevScrollY = scrollY;
        endYOrigin -= window.innerHeight / 2, endYOrigin < 0 && (endYOrigin = 0), target.addEventListener("transitionend", ()=>{
            target.style.transition = "none", target.style.transform = "none", scrollTo({
                top: endYOrigin,
                behavior: "instant"
            }), setTimeout(()=>{
                handler({
                    type: "overlay/dragEndMinimapTransition"
                }), handler({
                    type: "overlay/dragToggleMinimap",
                    display: !1
                });
            }, rectUpdateFrequency * 2), resolve();
        }, {
            once: !0
        }), handler({
            type: "overlay/dragStartMinimapTransition"
        }), target.style.transform = `translateY(${Math.max(prevScrollY - endYOrigin, -maxScroll + prevScrollY)}px) scale(1)`, previousRootStyleValues2 && (document.body.style.overflow = previousRootStyleValues2.body.overflow, document.body.style.height = previousRootStyleValues2.body.height, document.documentElement.style.overflow = previousRootStyleValues2.documentElement.overflow, document.documentElement.style.height = previousRootStyleValues2.documentElement.height);
    });
}
let minimapScaleApplied = !1, mousePosInverseTransform = {
    y: 0
}, mousePos = {
    x: 0,
    y: 0
}, prescaleHeight = typeof document > "u" ? 0 : document.documentElement.scrollHeight, previousRootStyleValues = null;
function handleOverlayDrag(opts) {
    const { mouseEvent, element, overlayGroup, handler, target, onSequenceStart, onSequenceEnd } = opts;
    if (mouseEvent.button !== 0) return;
    window.focus();
    const rectUpdateFrequency = 150;
    let rects = overlayGroup.map((e)=>getRect(e.elements.element));
    const flow = element.getAttribute("data-sanity-drag-flow") || calcTargetFlow(rects), dragGroup = element.getAttribute("data-sanity-drag-group"), disableMinimap = !!element.getAttribute("data-sanity-drag-minimap-disable"), preventInsertDefault = !!element.getAttribute("data-sanity-drag-prevent-default"), documentHeightOverride = element.getAttribute("data-unstable_sanity-drag-document-height"), groupHeightOverride = element.getAttribute("data-unstable_sanity-drag-group-height");
    let insertPosition = null;
    const initialMousePos = calcMousePos(mouseEvent), scaleTarget = document.body, { minYScaled, scaleFactor } = calcMinimapTransformValues(rects, groupHeightOverride ? ~~groupHeightOverride : null);
    let sequenceStarted = !1, minimapPromptShown = !1, mousedown = !0;
    minimapScaleApplied || (previousRootStyleValues = {
        body: {
            overflow: window.getComputedStyle(document.body).overflow,
            height: window.getComputedStyle(document.body).height
        },
        documentElement: {
            overflow: window.getComputedStyle(document.documentElement).overflow,
            height: window.getComputedStyle(document.documentElement).height
        }
    }, prescaleHeight = documentHeightOverride ? ~~documentHeightOverride : document.documentElement.scrollHeight);
    const rectsInterval = setInterval(()=>{
        rects = overlayGroup.map((e)=>getRect(e.elements.element));
    }, rectUpdateFrequency), applyMinimap = ()=>{
        if (scaleFactor >= 1) return;
        const skeleton = buildPreviewSkeleton(mousePos, element, scaleFactor);
        handler({
            type: "overlay/dragUpdateSkeleton",
            skeleton
        }), handler({
            type: "overlay/dragToggleMinimapPrompt",
            display: !1
        }), applyMinimapWrapperTransform(scaleTarget, scaleFactor, minYScaled, handler, rectUpdateFrequency).then(()=>{
            setTimeout(()=>{
                handler({
                    type: "overlay/dragUpdateGroupRect",
                    groupRect: calcGroupBoundsPreview(rects)
                });
            }, rectUpdateFrequency * 2);
        });
    }, handleScroll = (e)=>{
        Math.abs(e.deltaY) >= 10 && scaleFactor < 1 && !minimapScaleApplied && !minimapPromptShown && !disableMinimap && mousedown && (handler({
            type: "overlay/dragToggleMinimapPrompt",
            display: !0
        }), minimapPromptShown = !0), e.shiftKey && !minimapScaleApplied && !disableMinimap && (window.dispatchEvent(new CustomEvent("unstable_sanity/dragApplyMinimap")), minimapScaleApplied = !0, setTimeout(()=>{
            applyMinimap();
        }, 50));
    }, handleMouseMove = (e)=>{
        if (e.preventDefault(), mousePos = calcMousePos(e), mousePosInverseTransform = calcMousePosInverseTransform(mousePos), Math.abs(pointDist(mousePos, initialMousePos)) < minDragDelta) return;
        if (!sequenceStarted) {
            const groupRect = calcGroupBoundsPreview(rects), skeleton = buildPreviewSkeleton(mousePos, element, 1);
            handler({
                type: "overlay/dragStart",
                flow
            }), handler({
                type: "overlay/dragUpdateSkeleton",
                skeleton
            }), handler({
                type: "overlay/dragUpdateGroupRect",
                groupRect
            }), sequenceStarted = !0, onSequenceStart();
        }
        handler({
            type: "overlay/dragUpdateCursorPosition",
            x: mousePos.x,
            y: mousePos.y
        }), e.shiftKey && !minimapScaleApplied && !disableMinimap && (window.dispatchEvent(new CustomEvent("unstable_sanity/dragApplyMinimap")), minimapScaleApplied = !0, setTimeout(()=>{
            applyMinimap();
        }, 50));
        const newInsertPosition = calcInsertPosition(mousePos, rects, flow);
        JSON.stringify(insertPosition) !== JSON.stringify(newInsertPosition) && (insertPosition = newInsertPosition, handler({
            type: "overlay/dragUpdateInsertPosition",
            insertPosition: resolveInsertPosition(overlayGroup, insertPosition, flow)
        }));
    }, handleMouseUp = ()=>{
        mousedown = !1, handler({
            type: "overlay/dragEnd",
            target,
            insertPosition: insertPosition ? resolveInsertPosition(overlayGroup, insertPosition, flow) : null,
            dragGroup,
            flow,
            preventInsertDefault
        }), minimapPromptShown && handler({
            type: "overlay/dragToggleMinimapPrompt",
            display: !1
        }), minimapScaleApplied || (clearInterval(rectsInterval), onSequenceEnd(), removeFrameListeners(), removeKeyListeners()), removeMouseListeners();
    }, handleKeyup = (e)=>{
        if (e.key === "Shift" && minimapScaleApplied) {
            minimapScaleApplied = !1;
            const skeleton = buildPreviewSkeleton(mousePos, element, 1 / scaleFactor);
            handler({
                type: "overlay/dragUpdateSkeleton",
                skeleton
            }), window.dispatchEvent(new CustomEvent("unstable_sanity/dragResetMinimap")), setTimeout(()=>{
                resetMinimapWrapperTransform(mousePosInverseTransform.y, scaleTarget, prescaleHeight, handler, rectUpdateFrequency, previousRootStyleValues);
            }, 50), handler({
                type: "overlay/dragUpdateGroupRect",
                groupRect: null
            }), mousedown || (clearInterval(rectsInterval), removeMouseListeners(), removeFrameListeners(), removeKeyListeners(), onSequenceEnd());
        }
    }, handleBlur = ()=>{
        handler({
            type: "overlay/dragUpdateGroupRect",
            groupRect: null
        }), window.dispatchEvent(new CustomEvent("unstable_sanity/dragResetMinimap")), setTimeout(()=>{
            resetMinimapWrapperTransform(mousePosInverseTransform.y, scaleTarget, prescaleHeight, handler, rectUpdateFrequency, previousRootStyleValues).then(()=>{
                minimapScaleApplied = !1;
            });
        }, 50), clearInterval(rectsInterval), removeMouseListeners(), removeFrameListeners(), removeKeyListeners(), onSequenceEnd();
    }, removeMouseListeners = ()=>{
        window.removeEventListener("mousemove", handleMouseMove), window.removeEventListener("wheel", handleScroll), window.removeEventListener("mouseup", handleMouseUp);
    }, removeKeyListeners = ()=>{
        window.removeEventListener("keyup", handleKeyup);
    }, removeFrameListeners = ()=>{
        window.removeEventListener("blur", handleBlur);
    };
    window.addEventListener("blur", handleBlur), window.addEventListener("keyup", handleKeyup), window.addEventListener("wheel", handleScroll), window.addEventListener("mousemove", handleMouseMove), window.addEventListener("mouseup", handleMouseUp);
}
const isElementNode$1 = (target)=>target instanceof HTMLElement || target instanceof SVGElement;
function findNonInlineElement(element) {
    const { display } = window.getComputedStyle(element);
    if (display !== "inline") return element;
    const parent = element.parentElement;
    return parent ? findNonInlineElement(parent) : null;
}
const findOverlayElement = (el)=>!el || !isElementNode$1(el) ? null : el.dataset?.sanityOverlayElement ? el : findOverlayElement(el.parentElement);
function testVercelStegaRegex(input) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vercel$2b$stega$40$1$2e$1$2e$0$2f$node_modules$2f40$vercel$2f$stega$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VERCEL_STEGA_REGEX"].lastIndex = 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vercel$2b$stega$40$1$2e$1$2e$0$2f$node_modules$2f40$vercel$2f$stega$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VERCEL_STEGA_REGEX"].test(input);
}
function stegaClean(input) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vercel$2b$stega$40$1$2e$1$2e$0$2f$node_modules$2f40$vercel$2f$stega$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VERCEL_STEGA_REGEX"].lastIndex = 0, input.replace(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vercel$2b$stega$40$1$2e$1$2e$0$2f$node_modules$2f40$vercel$2f$stega$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VERCEL_STEGA_REGEX"], "");
}
function decodeStega(str, isAltText = !1) {
    try {
        const decoded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vercel$2b$stega$40$1$2e$1$2e$0$2f$node_modules$2f40$vercel$2f$stega$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vercelStegaDecode"])(str);
        return !decoded || decoded.origin !== "sanity.io" ? null : (isAltText && (decoded.href = decoded.href?.replace(".alt", "")), decoded);
    } catch (err) {
        return console.error("Failed to decode stega for string: ", str, "with the original error: ", err), null;
    }
}
function testAndDecodeStega(str, isAltText = !1) {
    return testVercelStegaRegex(str) ? decodeStega(str, isAltText) : null;
}
const isElementNode = (node)=>node.nodeType === Node.ELEMENT_NODE, isImgElement = (el)=>el.tagName === "IMG", isTimeElement = (el)=>el.tagName === "TIME", isSvgRootElement = (el)=>el.tagName.toUpperCase() === "SVG";
function isSanityNode(node) {
    return "path" in node;
}
function findCommonPath(first, second) {
    let firstParts = first.split("."), secondParts = second.split(".");
    const maxLength = Math.min(firstParts.length, secondParts.length);
    return firstParts = firstParts.slice(0, maxLength).reverse(), secondParts = secondParts.slice(0, maxLength).reverse(), firstParts.reduce((parts, part, i)=>part === secondParts[i] ? [
            ...parts,
            part
        ] : [], []).reverse().join(".");
}
function findCommonSanityData(nodes) {
    if (!nodes.length || !nodes.map((n)=>isSanityNode(n)).every((n, _i, arr)=>n === arr[0])) return;
    if (!isSanityNode(nodes[0])) return nodes[0];
    const sanityNodes = nodes.filter(isSanityNode);
    let common = nodes[0];
    const consistentValueKeys = [
        "projectId",
        "dataset",
        "id",
        "baseUrl",
        "workspace",
        "tool"
    ];
    for(let i = 1; i < sanityNodes.length; i++){
        const node = sanityNodes[i];
        if (consistentValueKeys.some((key)=>node[key] !== common?.[key])) {
            common = void 0;
            break;
        }
        common = {
            ...common,
            path: findCommonPath(common.path, node.path)
        };
    }
    return common;
}
function findSanityNodes(el) {
    const mainResults = [];
    function createResolvedElement(element, data, reason, preventGrouping) {
        const sanity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$2d$csm$40$3$2e$0$2e$13_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$sanity$2b$types$40$6$2e$9$2e$1_$40$types$2b$react$40$19$2e$2$2e$17_$5f$typescript$40$6$2e$0$2e$3$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2d$csm$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeSanityNodeData"])(data);
        if (!sanity) return;
        const measureElement = findNonInlineElement(element);
        if (measureElement) return {
            elements: {
                element,
                measureElement
            },
            sanity,
            reason,
            preventGrouping
        };
    }
    function resolveNode(node) {
        const { nodeType, parentElement, textContent } = node;
        if (isElementNode(node) && node.dataset?.sanityEditTarget !== void 0) {
            const nodesInTarget = findSanityNodes(node), commonData = findCommonSanityData(nodesInTarget.map((node2)=>node2.type === "element" ? node2.commonSanity : void 0).filter((n)=>n !== void 0));
            if (commonData) return {
                reason: "edit-target",
                elements: {
                    element: node,
                    measureElement: node
                },
                sanity: commonData
            };
        } else if (nodeType === Node.TEXT_NODE && parentElement && textContent) {
            const data = testAndDecodeStega(textContent);
            return data ? createResolvedElement(parentElement, data, "stega-text", !0) : void 0;
        } else if (isElementNode(node)) {
            if (node.tagName === "SCRIPT" || node.tagName === "SANITY-VISUAL-EDITING") return;
            if (node.dataset?.sanity) return createResolvedElement(node, node.dataset.sanity, "data-attribute", !!(node.textContent && testVercelStegaRegex(node.textContent)));
            if (node.dataset?.sanityEditInfo) return createResolvedElement(node, node.dataset.sanityEditInfo, "data-attribute", !!(node.textContent && testVercelStegaRegex(node.textContent)));
            if (isImgElement(node)) {
                const data = testAndDecodeStega(node.alt, !0);
                return data ? createResolvedElement(node, data, "stega-attribute") : void 0;
            } else if (isTimeElement(node)) {
                const data = testAndDecodeStega(node.dateTime, !0);
                return data ? createResolvedElement(node, data, "stega-attribute") : void 0;
            } else if (isSvgRootElement(node)) {
                if (!node.ariaLabel) return;
                const data = testAndDecodeStega(node.ariaLabel, !0);
                return data ? createResolvedElement(node, data, "stega-attribute") : void 0;
            }
        }
    }
    function processNode(node, _parentGroup) {
        const resolvedElement = resolveNode(node);
        let parentGroup = _parentGroup;
        if (isElementNode(node) && node.dataset?.sanityEditGroup !== void 0 && (parentGroup = {
            type: "group",
            elements: {
                element: node,
                measureElement: node
            },
            targets: []
        }, mainResults.push(parentGroup)), resolvedElement) {
            const target = {
                elements: resolvedElement.elements,
                sanity: resolvedElement.sanity,
                reason: resolvedElement.reason
            };
            parentGroup && !resolvedElement.preventGrouping ? parentGroup.targets.push(target) : mainResults.push({
                elements: resolvedElement.elements,
                type: "element",
                targets: [
                    target
                ]
            });
        }
        if (isElementNode(node) && !isImgElement(node) && !(node.tagName === "SCRIPT" || node.tagName === "SANITY-VISUAL-EDITING")) for (const childNode of node.childNodes)processNode(childNode, parentGroup);
    }
    if (el) for (const node of el.childNodes)processNode(node, void 0);
    return mainResults.map((node)=>{
        if (node.targets.length === 0 && node.type === "group") return {
            ...node,
            commonSanity: void 0
        };
        const commonSanity = node.targets.length === 1 ? node.targets[0].sanity : findCommonSanityData(node.targets.map(({ sanity })=>sanity).filter((n)=>n !== void 0)) || node.targets[0].sanity;
        return commonSanity ? {
            ...node,
            commonSanity
        } : null;
    }).filter((node)=>node !== null);
}
function isSanityArrayPath(path) {
    const lastDotIndex = path.lastIndexOf(".");
    return path.substring(lastDotIndex, path.length).includes("[");
}
function getSanityNodeArrayPath(path) {
    if (!isSanityArrayPath(path)) return null;
    const split = path.split(".");
    return split[split.length - 1] = split[split.length - 1].replace(/\[.*?\]/g, "[]"), split.join(".");
}
function sanityNodesExistInSameArray(sanityNode1, sanityNode2) {
    return !isSanityArrayPath(sanityNode1.path) || !isSanityArrayPath(sanityNode2.path) ? !1 : getSanityNodeArrayPath(sanityNode1.path) === getSanityNodeArrayPath(sanityNode2.path);
}
function resolveDragAndDropGroup(element, sanity, elementSet, elementsMap) {
    if (!element.getAttribute("data-sanity") || element.getAttribute("data-sanity-drag-disable") || !sanity || !isSanityNode(sanity) || !isSanityArrayPath(sanity.path)) return null;
    const targetDragGroup = element.getAttribute("data-sanity-drag-group"), group = [
        ...elementSet
    ].reduce((acc, el)=>{
        const elData = elementsMap.get(el), elDragDisabled = el.getAttribute("data-sanity-drag-disable"), elDragGroup = el.getAttribute("data-sanity-drag-group"), elHasSanityAttribution = el.getAttribute("data-sanity") !== null, sharedDragGroup = targetDragGroup !== null ? targetDragGroup === elDragGroup : !0;
        return elData?.sanity && !elDragDisabled && isSanityNode(elData.sanity) && sanityNodesExistInSameArray(sanity, elData.sanity) && sharedDragGroup && elHasSanityAttribution && acc.push(elData), acc;
    }, []);
    return group.length <= 1 ? null : group;
}
function createOverlayController({ handler, overlayElement, inFrame, inPopUp, optimisticActorReady }) {
    let activated = !1;
    const elementIdMap = /* @__PURE__ */ new Map(), elementsMap = /* @__PURE__ */ new WeakMap(), elementSet = /* @__PURE__ */ new Set(), measureElements = /* @__PURE__ */ new WeakMap(), cursorMap = /* @__PURE__ */ new WeakMap();
    let ro, io, mo, activeDragSequence = !1, hoverStack = [];
    const getHoveredElement = ()=>hoverStack[hoverStack.length - 1];
    function addEventHandlers(el, handlers) {
        el.addEventListener("click", handlers.click, {
            capture: !0
        }), el.addEventListener("contextmenu", handlers.contextmenu, {
            capture: !0
        }), el.addEventListener("mousemove", handlers.mousemove, {
            once: !0,
            capture: !0
        }), el.addEventListener("mousedown", handlers.mousedown, {
            capture: !0
        });
    }
    function removeEventHandlers(el, handlers) {
        el.removeEventListener("click", handlers.click, {
            capture: !0
        }), el.removeEventListener("contextmenu", handlers.contextmenu, {
            capture: !0
        }), el.removeEventListener("mousemove", handlers.mousemove, {
            capture: !0
        }), el.removeEventListener("mousedown", handlers.mousedown, {
            capture: !0
        }), el.removeEventListener("mouseenter", handlers.mouseenter), el.removeEventListener("mouseleave", handlers.mouseleave);
    }
    function activateElement({ id, elements, handlers }) {
        const { element, measureElement } = elements;
        addEventHandlers(element, handlers), ro.observe(measureElement), handler({
            type: "element/activate",
            id
        });
    }
    function deactivateElement({ id, elements, handlers }) {
        const { element, measureElement } = elements;
        removeEventHandlers(element, handlers), ro.unobserve(measureElement), hoverStack = hoverStack.filter((el)=>el !== element), handler({
            type: "element/deactivate",
            id
        });
    }
    function setOverlayCursor(element) {
        if (!(!inFrame && !inPopUp || !optimisticActorReady)) for (const hoverstackElement of hoverStack){
            if (element === hoverstackElement) {
                const targetSanityData = elementsMap.get(element)?.sanity;
                if (!targetSanityData || !isSanityNode(targetSanityData)) return;
                if (resolveDragAndDropGroup(element, targetSanityData, elementSet, elementsMap)) {
                    const existingCursor = element.style.cursor;
                    existingCursor && cursorMap.set(element, existingCursor), handler({
                        type: "overlay/setCursor",
                        element,
                        cursor: "move"
                    });
                    continue;
                }
            }
            restoreOverlayCursor(hoverstackElement);
        }
    }
    function restoreOverlayCursor(element) {
        const previousCursor = cursorMap.get(element);
        handler({
            type: "overlay/setCursor",
            element,
            cursor: previousCursor
        });
    }
    function registerElement({ type, elements, commonSanity, targets }) {
        const { element, measureElement } = elements, eventHandlers = {
            click (event) {
                const target = event.target;
                if (element === getHoveredElement() && element.contains(target)) {
                    inFrame && (event.preventDefault(), event.stopPropagation());
                    const sanity = elementsMap.get(element)?.sanity;
                    sanity && !activeDragSequence && handler({
                        type: "element/click",
                        id,
                        sanity
                    });
                }
            },
            contextmenu (event) {
                if (!("path" in commonSanity) || !inFrame && !inPopUp || !optimisticActorReady || !commonSanity.path.split(".").pop()?.includes("[_key==")) return;
                const target = event.target;
                element === getHoveredElement() && element.contains(target) && ((inFrame || inPopUp) && (event.preventDefault(), event.stopPropagation()), handler({
                    type: "element/contextmenu",
                    id,
                    position: {
                        x: event.clientX,
                        y: event.clientY
                    },
                    sanity: commonSanity
                }));
            },
            mousedown (event) {
                if (event.preventDefault(), event.currentTarget !== hoverStack.at(-1) || element.getAttribute("data-sanity-drag-disable") || !inFrame && !inPopUp || !optimisticActorReady) return;
                const targetSanityData = elementsMap.get(element)?.sanity;
                if (!targetSanityData || !isSanityNode(targetSanityData) || !isSanityArrayPath(targetSanityData.path)) return;
                const dragGroup = resolveDragAndDropGroup(element, commonSanity, elementSet, elementsMap);
                dragGroup && handleOverlayDrag({
                    element,
                    handler,
                    mouseEvent: event,
                    overlayGroup: dragGroup,
                    target: targetSanityData,
                    onSequenceStart: ()=>{
                        activeDragSequence = !0;
                    },
                    onSequenceEnd: ()=>{
                        setTimeout(()=>{
                            activeDragSequence = !1;
                        }, 250);
                    }
                });
            },
            mousemove (event) {
                eventHandlers.mouseenter(event);
                const el = event.currentTarget;
                el && (el.addEventListener("mouseenter", eventHandlers.mouseenter), el.addEventListener("mouseleave", eventHandlers.mouseleave));
            },
            mouseenter () {
                document.querySelector("vercel-live-feedback") && element.closest("[data-vercel-edit-info]") || element.closest("[data-vercel-edit-target]") || (hoverStack.push(element), handler({
                    type: "element/mouseenter",
                    id,
                    rect: getRect(element)
                }), setOverlayCursor(element));
            },
            mouseleave (e) {
                function leave() {
                    hoverStack.pop();
                    const hoveredElement = getHoveredElement();
                    if (handler({
                        type: "element/mouseleave",
                        id
                    }), hoveredElement) {
                        setOverlayCursor(hoveredElement);
                        const overlayElement2 = elementsMap.get(hoveredElement);
                        overlayElement2 && handler({
                            type: "element/mouseenter",
                            id: overlayElement2.id,
                            rect: getRect(hoveredElement)
                        });
                    }
                    restoreOverlayCursor(element);
                }
                function addDeferredLeave(el) {
                    const deferredLeave = (e2)=>{
                        const { relatedTarget: relatedTarget2 } = e2;
                        findOverlayElement(relatedTarget2) ? relatedTarget2 && isElementNode$1(relatedTarget2) && (el.removeEventListener("mouseleave", deferredLeave), addDeferredLeave(relatedTarget2)) : (el.removeEventListener("mouseleave", deferredLeave), leave());
                    };
                    el.addEventListener("mouseleave", deferredLeave);
                }
                const { relatedTarget } = e, container = findOverlayElement(relatedTarget), isInteractiveOverlayElement = overlayElement.contains(container);
                if (isElementNode$1(container) && isInteractiveOverlayElement) return addDeferredLeave(container);
                leave();
            }
        }, id = v4(), sanityNode = {
            type,
            id,
            elements,
            sanity: commonSanity,
            handlers: eventHandlers
        };
        elementSet.add(element), measureElements.set(measureElement, element), elementIdMap.set(id, element), elementsMap.set(element, sanityNode), io?.observe(element), handler({
            type: "element/register",
            elementType: type,
            id,
            element,
            rect: getRect(element),
            sanity: commonSanity,
            dragDisabled: !!element.getAttribute("data-sanity-drag-disable"),
            targets: targets.map((target)=>({
                    sanity: target.sanity,
                    element: target.elements.element
                }))
        }), activated && activateElement(sanityNode);
    }
    function updateElement(resolvedElement) {
        const { element } = resolvedElement.elements, overlayElement2 = elementsMap.get(element);
        overlayElement2 && (elementsMap.set(element, {
            ...overlayElement2,
            sanity: resolvedElement.commonSanity
        }), handler({
            type: "element/update",
            elementType: overlayElement2.type,
            id: overlayElement2.id,
            rect: getRect(element),
            sanity: resolvedElement.commonSanity,
            targets: resolvedElement.targets.map((target)=>({
                    sanity: target.sanity,
                    element: target.elements.element
                }))
        }));
    }
    function parseElements(node) {
        const sanityNodes = findSanityNodes(node);
        for (const sanityNode of sanityNodes){
            if (sanityNode.type === "group") {
                for (const target of sanityNode.targets){
                    const overlayElement2 = elementsMap.get(target.elements.element);
                    overlayElement2 && overlayElement2.type === "element" && unregisterElement(target.elements.element);
                }
                sanityNode.targets.length === 0 && unregisterElement(sanityNode.elements.element);
            }
            if (!sanityNode.commonSanity) continue;
            const { element } = sanityNode.elements;
            elementsMap.has(element) ? updateElement(sanityNode) : registerElement(sanityNode);
        }
    }
    function unregisterElement(element) {
        const overlayElement2 = elementsMap.get(element);
        if (overlayElement2) {
            const { id, handlers } = overlayElement2;
            removeEventHandlers(element, handlers), ro.unobserve(element), elementsMap.delete(element), elementSet.delete(element), elementIdMap.delete(id), handler({
                type: "element/unregister",
                id
            });
        }
    }
    function handleMutation(mutations) {
        let mutationWasInScope = !1;
        for (const mutation of mutations){
            const { target, type } = mutation, node = type === "characterData" ? target.parentElement : target;
            if (!(node === overlayElement || overlayElement.contains(node)) && (mutationWasInScope = !0, isElementNode$1(node))) {
                const possibleGroupParent = node.parentElement?.closest("[data-sanity-edit-group]") || null, updateNodeTarget = isElementNode$1(possibleGroupParent) ? possibleGroupParent : node;
                parseElements({
                    childNodes: [
                        updateNodeTarget
                    ]
                });
            }
        }
        if (mutationWasInScope) for (const element of elementSet)element.isConnected || unregisterElement(element), elementsMap.get(element)?.type === "group" && !element.hasAttribute("data-sanity-edit-group") && unregisterElement(element);
    }
    function updateRect(el) {
        const overlayElement2 = elementsMap.get(el);
        overlayElement2 && handler({
            type: "element/updateRect",
            id: overlayElement2.id,
            rect: getRect(el)
        });
    }
    function handleResize(entries) {
        for (const entry of entries){
            const target = entry.target;
            if (isElementNode$1(target)) {
                const element = measureElements.get(target);
                if (!element) return;
                updateRect(element);
            }
        }
    }
    function handleIntersection(entries) {
        if (activated) for (const entry of entries){
            const { target } = entry, match = isElementNode$1(target) && elementsMap.get(target);
            match && (entry.isIntersecting ? activateElement(match) : deactivateElement(match));
        }
    }
    function handleBlur(event) {
        const element = findOverlayElement(event.target);
        if (element) {
            element.dataset.sanityOverlayElement === "capture" && (event.preventDefault(), event.stopPropagation());
            return;
        }
        hoverStack = [], handler({
            type: "overlay/blur"
        });
    }
    function handleExclusivePluginClosed() {
        hoverStack = [], handler({
            type: "overlay/reset-mouse-state"
        });
    }
    function handleWindowResize() {
        for (const element of elementSet)updateRect(element);
    }
    function handleKeydown(event) {
        event.key === "Escape" && (hoverStack = [], handler({
            type: "overlay/blur"
        }));
    }
    function handleWindowScroll(event) {
        const { target } = event;
        if (!(target === window.document || !isElementNode$1(target))) for (const element of elementSet)target.contains(element) && updateRect(element);
    }
    function activate() {
        activated || (io = new IntersectionObserver(handleIntersection, {
            threshold: 0.3
        }), elementSet.forEach((element)=>io.observe(element)), handler({
            type: "overlay/activate"
        }), activated = !0);
    }
    function deactivate() {
        activated && (io?.disconnect(), elementSet.forEach((element)=>{
            const overlayElement2 = elementsMap.get(element);
            overlayElement2 && deactivateElement(overlayElement2);
        }), handler({
            type: "overlay/deactivate"
        }), activated = !1);
    }
    function handleHeaderClick(event) {
        const { id } = event.detail, element = elementIdMap.get(id);
        if (!element) return;
        const sanity = elementsMap.get(element)?.sanity;
        sanity && handler({
            type: "element/click",
            id,
            sanity
        });
    }
    function destroy() {
        window.removeEventListener("click", handleBlur), window.removeEventListener("contextmenu", handleBlur), window.removeEventListener("sanity-overlay/exclusive-plugin-closed", handleExclusivePluginClosed), window.removeEventListener("sanity-overlay/label-click", handleHeaderClick), window.removeEventListener("keydown", handleKeydown), window.removeEventListener("resize", handleWindowResize), window.removeEventListener("scroll", handleWindowScroll), mo.disconnect(), ro.disconnect(), elementSet.forEach((element)=>{
            unregisterElement(element);
        }), elementIdMap.clear(), elementSet.clear(), hoverStack = [], deactivate();
    }
    function create() {
        window.addEventListener("click", handleBlur), window.addEventListener("contextmenu", handleBlur), window.addEventListener("sanity-overlay/exclusive-plugin-closed", handleExclusivePluginClosed), window.addEventListener("sanity-overlay/label-click", handleHeaderClick), window.addEventListener("keydown", handleKeydown), window.addEventListener("resize", handleWindowResize), window.addEventListener("scroll", handleWindowScroll, {
            capture: !0,
            passive: !0
        }), ro = new ResizeObserver(handleResize), mo = new MutationObserver(handleMutation), mo.observe(document.body, {
            attributes: !0,
            characterData: !0,
            childList: !0,
            subtree: !0
        }), parseElements(document.body), activate();
    }
    return window.document.fonts.ready.then(()=>{
        for (const element of elementSet)updateRect(element);
    }), create(), {
        activate,
        deactivate,
        destroy
    };
}
const SharedStateContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
;
}),
"[project]/node_modules/.pnpm/@sanity+visual-editing@5.7.3_@emotion+is-prop-valid@1.4.0_@sanity+client@7.26.2_@types+_44aa6e416023878fa62b01b3252b6fe2/node_modules/@sanity/visual-editing/dist/_chunks-es/VisualEditing.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VisualEditing",
    ()=>VisualEditing,
    "addQueryListener",
    ()=>addQueryListener,
    "comlink",
    ()=>comlink,
    "comlinkDataset",
    ()=>comlinkDataset,
    "comlinkPerspective",
    ()=>comlinkPerspective,
    "comlinkProjectId",
    ()=>comlinkProjectId,
    "comlinkVariant",
    ()=>comlinkVariant,
    "getSnapshot",
    ()=>getSnapshot,
    "setLoaderClientConfig",
    ()=>setLoaderClientConfig,
    "setLoaderComlink",
    ()=>setLoaderComlink,
    "setLoaderPerspective",
    ()=>setLoaderPerspective,
    "setLoaderVariant",
    ()=>setLoaderVariant,
    "subscribe",
    ()=>subscribe$1,
    "subscribe$1",
    ()=>subscribe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.0_@babel+core@7.29.7_@playwright+test@1.62.1_@types+node@26.1.0_babel-plugin-_3b64392720bc9294ad1f40cae38bcee9/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.0_@babel+core@7.29.7_@playwright+test@1.62.1_@types+node@26.1.0_babel-plugin-_3b64392720bc9294ad1f40cae38bcee9/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$presentation$2d$comlink$40$2$2e$2$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$sanity$2b$types$40$6$2e$9$2e$1_$40$types$2b$react$40$19$2e$2$2e$17_$2f$node_modules$2f40$sanity$2f$presentation$2d$comlink$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+presentation-comlink@2.2.0_@sanity+client@7.26.2_@sanity+types@6.9.1_@types+react@19.2.17_/node_modules/@sanity/presentation-comlink/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.0_@babel+core@7.29.7_@playwright+test@1.62.1_@types+node@26.1.0_babel-plugin-_3b64392720bc9294ad1f40cae38bcee9/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.0_@babel+core@7.29.7_@playwright+test@1.62.1_@types+node@26.1.0_babel-plugin-_3b64392720bc9294ad1f40cae38bcee9/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$SharedStateContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+visual-editing@5.7.3_@emotion+is-prop-valid@1.4.0_@sanity+client@7.26.2_@types+_44aa6e416023878fa62b01b3252b6fe2/node_modules/@sanity/visual-editing/dist/_chunks-es/SharedStateContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$2d$csm$40$3$2e$0$2e$13_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$sanity$2b$types$40$6$2e$9$2e$1_$40$types$2b$react$40$19$2e$2$2e$17_$5f$typescript$40$6$2e$0$2e$3$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2d$csm$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+visual-editing-csm@3.0.13_@sanity+client@7.26.2_@sanity+types@6.9.1_@types+react@19.2.17__typescript@6.0.3/node_modules/@sanity/visual-editing-csm/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vercel$2b$stega$40$1$2e$1$2e$0$2f$node_modules$2f40$vercel$2f$stega$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@vercel+stega@1.1.0/node_modules/@vercel/stega/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$client$40$7$2e$26$2e$2$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$_chunks$2d$es$2f$resolveEditInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+client@7.26.2/node_modules/@sanity/client/dist/_chunks-es/resolveEditInfo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__d__as__MenuGroup$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+ui@3.5.1_@emotion+is-prop-valid@1.4.0_react-dom@19.2.7_react@19.2.7__react@19.2_1f242bf9e435109ea368c6a7c7a25116/node_modules/@sanity/ui/dist/_chunks/portalProvider.js [app-client] (ecmascript) <export d as MenuGroup>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__f__as__MenuDivider$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+ui@3.5.1_@emotion+is-prop-valid@1.4.0_react-dom@19.2.7_react@19.2.7__react@19.2_1f242bf9e435109ea368c6a7c7a25116/node_modules/@sanity/ui/dist/_chunks/portalProvider.js [app-client] (ecmascript) <export f as MenuDivider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__u__as__MenuItem$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+ui@3.5.1_@emotion+is-prop-valid@1.4.0_react-dom@19.2.7_react@19.2.7__react@19.2_1f242bf9e435109ea368c6a7c7a25116/node_modules/@sanity/ui/dist/_chunks/portalProvider.js [app-client] (ecmascript) <export u as MenuItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__lt__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+ui@3.5.1_@emotion+is-prop-valid@1.4.0_react-dom@19.2.7_react@19.2.7__react@19.2_1f242bf9e435109ea368c6a7c7a25116/node_modules/@sanity/ui/dist/_chunks/portalProvider.js [app-client] (ecmascript) <export lt as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__et__as__Text$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+ui@3.5.1_@emotion+is-prop-valid@1.4.0_react-dom@19.2.7_react@19.2.7__react@19.2_1f242bf9e435109ea368c6a7c7a25116/node_modules/@sanity/ui/dist/_chunks/portalProvider.js [app-client] (ecmascript) <export et as Text>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$$__as__Spinner$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+ui@3.5.1_@emotion+is-prop-valid@1.4.0_react-dom@19.2.7_react@19.2.7__react@19.2_1f242bf9e435109ea368c6a7c7a25116/node_modules/@sanity/ui/dist/_chunks/portalProvider.js [app-client] (ecmascript) <export $ as Spinner>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__O__as__Stack$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+ui@3.5.1_@emotion+is-prop-valid@1.4.0_react-dom@19.2.7_react@19.2.7__react@19.2_1f242bf9e435109ea368c6a7c7a25116/node_modules/@sanity/ui/dist/_chunks/portalProvider.js [app-client] (ecmascript) <export O as Stack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__at__as__Flex$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+ui@3.5.1_@emotion+is-prop-valid@1.4.0_react-dom@19.2.7_react@19.2.7__react@19.2_1f242bf9e435109ea368c6a7c7a25116/node_modules/@sanity/ui/dist/_chunks/portalProvider.js [app-client] (ecmascript) <export at as Flex>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__p__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+ui@3.5.1_@emotion+is-prop-valid@1.4.0_react-dom@19.2.7_react@19.2.7__react@19.2_1f242bf9e435109ea368c6a7c7a25116/node_modules/@sanity/ui/dist/_chunks/portalProvider.js [app-client] (ecmascript) <export p as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__k__as__Popover$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+ui@3.5.1_@emotion+is-prop-valid@1.4.0_react-dom@19.2.7_react@19.2.7__react@19.2_1f242bf9e435109ea368c6a7c7a25116/node_modules/@sanity/ui/dist/_chunks/portalProvider.js [app-client] (ecmascript) <export k as Popover>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Y__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+ui@3.5.1_@emotion+is-prop-valid@1.4.0_react-dom@19.2.7_react@19.2.7__react@19.2_1f242bf9e435109ea368c6a7c7a25116/node_modules/@sanity/ui/dist/_chunks/portalProvider.js [app-client] (ecmascript) <export Y as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__W__as__Card$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+ui@3.5.1_@emotion+is-prop-valid@1.4.0_react-dom@19.2.7_react@19.2.7__react@19.2_1f242bf9e435109ea368c6a7c7a25116/node_modules/@sanity/ui/dist/_chunks/portalProvider.js [app-client] (ecmascript) <export W as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__o__as__usePrefersDark$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+ui@3.5.1_@emotion+is-prop-valid@1.4.0_react-dom@19.2.7_react@19.2.7__react@19.2_1f242bf9e435109ea368c6a7c7a25116/node_modules/@sanity/ui/dist/_chunks/portalProvider.js [app-client] (ecmascript) <export o as usePrefersDark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__st__as__useTheme_v2$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+ui@3.5.1_@emotion+is-prop-valid@1.4.0_react-dom@19.2.7_react@19.2.7__react@19.2_1f242bf9e435109ea368c6a7c7a25116/node_modules/@sanity/ui/dist/_chunks/portalProvider.js [app-client] (ecmascript) <export st as useTheme_v2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__m__as__Hotkeys$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+ui@3.5.1_@emotion+is-prop-valid@1.4.0_react-dom@19.2.7_react@19.2.7__react@19.2_1f242bf9e435109ea368c6a7c7a25116/node_modules/@sanity/ui/dist/_chunks/portalProvider.js [app-client] (ecmascript) <export m as Hotkeys>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__P__as__LayerProvider$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+ui@3.5.1_@emotion+is-prop-valid@1.4.0_react-dom@19.2.7_react@19.2.7__react@19.2_1f242bf9e435109ea368c6a7c7a25116/node_modules/@sanity/ui/dist/_chunks/portalProvider.js [app-client] (ecmascript) <export P as LayerProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__PortalProvider$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+ui@3.5.1_@emotion+is-prop-valid@1.4.0_react-dom@19.2.7_react@19.2.7__react@19.2_1f242bf9e435109ea368c6a7c7a25116/node_modules/@sanity/ui/dist/_chunks/portalProvider.js [app-client] (ecmascript) <export t as PortalProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__q__as__ThemeProvider$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+ui@3.5.1_@emotion+is-prop-valid@1.4.0_react-dom@19.2.7_react@19.2.7__react@19.2_1f242bf9e435109ea368c6a7c7a25116/node_modules/@sanity/ui/dist/_chunks/portalProvider.js [app-client] (ecmascript) <export q as ThemeProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Ft__as__studioTheme$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+ui@3.5.1_@emotion+is-prop-valid@1.4.0_react-dom@19.2.7_react@19.2.7__react@19.2_1f242bf9e435109ea368c6a7c7a25116/node_modules/@sanity/ui/dist/_chunks/portalProvider.js [app-client] (ecmascript) <export Ft as studioTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__vt__as__isHTMLAnchorElement$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+ui@3.5.1_@emotion+is-prop-valid@1.4.0_react-dom@19.2.7_react@19.2.7__react@19.2_1f242bf9e435109ea368c6a7c7a25116/node_modules/@sanity/ui/dist/_chunks/portalProvider.js [app-client] (ecmascript) <export vt as isHTMLAnchorElement>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__bt__as__isHTMLElement$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+ui@3.5.1_@emotion+is-prop-valid@1.4.0_react-dom@19.2.7_react@19.2.7__react@19.2_1f242bf9e435109ea368c6a7c7a25116/node_modules/@sanity/ui/dist/_chunks/portalProvider.js [app-client] (ecmascript) <export bt as isHTMLElement>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$4$2e$3_css$2d$to$2d$react$2d$native$40$3$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/styled-components@6.4.3_css-to-react-native@3.2.0_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+visual-editing@5.7.3_@emotion+is-prop-valid@1.4.0_@sanity+client@7.26.2_@types+_44aa6e416023878fa62b01b3252b6fe2/node_modules/@sanity/visual-editing/dist/_chunks-es/mutations.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$18$2e$1_xstate$40$5$2e$32$2e$5$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+mutate@0.18.1_xstate@5.32.5/node_modules/@sanity/mutate/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$InsertMenu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+visual-editing@5.7.3_@emotion+is-prop-valid@1.4.0_@sanity+client@7.26.2_@types+_44aa6e416023878fa62b01b3252b6fe2/node_modules/@sanity/visual-editing/dist/_chunks-es/InsertMenu.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$5$2e$2$2e$1_react$40$19$2e$2$2e$7$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$ArrowDown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+icons@5.2.1_react@19.2.7/node_modules/@sanity/icons/dist/ArrowDown.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$5$2e$2$2e$1_react$40$19$2e$2$2e$7$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$ArrowUp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+icons@5.2.1_react@19.2.7/node_modules/@sanity/icons/dist/ArrowUp.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$5$2e$2$2e$1_react$40$19$2e$2$2e$7$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$Copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+icons@5.2.1_react@19.2.7/node_modules/@sanity/icons/dist/Copy.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$5$2e$2$2e$1_react$40$19$2e$2$2e$7$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$InsertAbove$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+icons@5.2.1_react@19.2.7/node_modules/@sanity/icons/dist/InsertAbove.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$5$2e$2$2e$1_react$40$19$2e$2$2e$7$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$InsertBelow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+icons@5.2.1_react@19.2.7/node_modules/@sanity/icons/dist/InsertBelow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$5$2e$2$2e$1_react$40$19$2e$2$2e$7$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$Publish$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+icons@5.2.1_react@19.2.7/node_modules/@sanity/icons/dist/Publish.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$5$2e$2$2e$1_react$40$19$2e$2$2e$7$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$Remove$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+icons@5.2.1_react@19.2.7/node_modules/@sanity/icons/dist/Remove.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$5$2e$2$2e$1_react$40$19$2e$2$2e$7$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$Sort$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+icons@5.2.1_react@19.2.7/node_modules/@sanity/icons/dist/Sort.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$5$2e$2$2e$1_react$40$19$2e$2$2e$7$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$Unpublish$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+icons@5.2.1_react@19.2.7/node_modules/@sanity/icons/dist/Unpublish.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$5$2e$2$2e$1_react$40$19$2e$2$2e$7$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$Document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+icons@5.2.1_react@19.2.7/node_modules/@sanity/icons/dist/Document.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$5$2e$2$2e$1_react$40$19$2e$2$2e$7$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$DragHandle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+icons@5.2.1_react@19.2.7/node_modules/@sanity/icons/dist/DragHandle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$5$2e$2$2e$1_react$40$19$2e$2$2e$7$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$EllipsisVertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+icons@5.2.1_react@19.2.7/node_modules/@sanity/icons/dist/EllipsisVertical.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$5$2e$2$2e$1_react$40$19$2e$2$2e$7$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$Plug$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+icons@5.2.1_react@19.2.7/node_modules/@sanity/icons/dist/Plug.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+ui@3.5.1_@emotion+is-prop-valid@1.4.0_react-dom@19.2.7_react@19.2.7__react@19.2_1f242bf9e435109ea368c6a7c7a25116/node_modules/@sanity/ui/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$scroll$2d$into$2d$view$2d$if$2d$needed$40$3$2e$1$2e$0$2f$node_modules$2f$scroll$2d$into$2d$view$2d$if$2d$needed$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/scroll-into-view-if-needed@3.1.0/node_modules/scroll-into-view-if-needed/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$5$2e$2$2e$1_react$40$19$2e$2$2e$7$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$Expand$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+icons@5.2.1_react@19.2.7/node_modules/@sanity/icons/dist/Expand.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$comlink$40$4$2e$0$2e$1$2f$node_modules$2f40$sanity$2f$comlink$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+comlink@4.0.1/node_modules/@sanity/comlink/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$32$2e$5$2f$node_modules$2f$xstate$2f$dist$2f$raise$2d$0d6481d1$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__c__as__createActor$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/xstate@5.32.5/node_modules/xstate/dist/raise-0d6481d1.development.esm.js [app-client] (ecmascript) <export c as createActor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+visual-editing@5.7.3_@emotion+is-prop-valid@1.4.0_@sanity+client@7.26.2_@types+_44aa6e416023878fa62b01b3252b6fe2/node_modules/@sanity/visual-editing/dist/_chunks-es/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$ReplaySubject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/esm5/internal/ReplaySubject.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Subject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/esm5/internal/Subject.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$observable$2f$merge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/esm5/internal/observable/merge.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$optimistic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+visual-editing@5.7.3_@emotion+is-prop-valid@1.4.0_@sanity+client@7.26.2_@types+_44aa6e416023878fa62b01b3252b6fe2/node_modules/@sanity/visual-editing/dist/optimistic/index.js [app-client] (ecmascript) <locals>");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function isTextField(element) {
    return element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement;
}
function getTextFieldSelection(element) {
    try {
        const { selectionStart, selectionEnd, value } = element;
        return selectionStart === null || selectionEnd === null || selectionStart === selectionEnd ? null : value.slice(selectionStart, selectionEnd);
    } catch  {
        return null;
    }
}
function serializeRangesToHtml(selection) {
    let html = "";
    for(let i = 0; i < selection.rangeCount; i++){
        const container = document.createElement("div");
        container.appendChild(selection.getRangeAt(i).cloneContents()), html += container.innerHTML;
    }
    return html;
}
function cleanStegaFromCopyEvent(event) {
    if (event.defaultPrevented) return;
    const { clipboardData } = event;
    if (!clipboardData) return;
    const activeElement = document.activeElement;
    if (isTextField(activeElement)) {
        const text2 = getTextFieldSelection(activeElement);
        if (!text2 || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$SharedStateContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["testVercelStegaRegex"])(text2)) return;
        event.preventDefault(), clipboardData.setData("text/plain", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$SharedStateContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stegaClean"])(text2));
        return;
    }
    const selection = document.getSelection();
    if (!selection || selection.isCollapsed || selection.rangeCount === 0) return;
    const text = selection.toString(), html = serializeRangesToHtml(selection);
    !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$SharedStateContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["testVercelStegaRegex"])(text) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$SharedStateContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["testVercelStegaRegex"])(html) || (event.preventDefault(), clipboardData.setData("text/plain", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$SharedStateContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stegaClean"])(text)), html && clipboardData.setData("text/html", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$SharedStateContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stegaClean"])(html)));
}
function enableStegaCleanOnCopy() {
    return document.addEventListener("copy", cleanStegaFromCopyEvent), ()=>{
        document.removeEventListener("copy", cleanStegaFromCopyEvent);
    };
}
const OVERLAY_TAG = "SANITY-VISUAL-EDITING", EXPECTED_STEGA_ATTRIBUTES = {
    IMG: [
        "alt"
    ],
    TIME: [
        "datetime"
    ],
    SVG: [
        "aria-label"
    ]
};
function isElement(node) {
    return node.nodeType === Node.ELEMENT_NODE;
}
function isOverlayElement(node) {
    return isElement(node) && node.tagName.toUpperCase() === OVERLAY_TAG;
}
function isInsideOverlay(node) {
    const element = isElement(node) ? node : node.parentElement;
    return element ? element.closest("sanity-visual-editing") !== null : !1;
}
function isInsideHead(node) {
    return document.head ? document.head.contains(node) : !1;
}
function isExpectedStegaAttribute(element, attributeName) {
    return EXPECTED_STEGA_ATTRIBUTES[element.tagName.toUpperCase()]?.includes(attributeName.toLowerCase()) ?? !1;
}
function checkAttribute(element, attributeName, value, inHead, sink) {
    if (!(!value || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$SharedStateContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["testVercelStegaRegex"])(value))) {
        if (inHead) {
            sink("head", element, attributeName, value);
            return;
        }
        isExpectedStegaAttribute(element, attributeName) || sink("attribute", element, attributeName, value);
    }
}
function checkElementAttributes(element, inHead, sink) {
    const { attributes } = element;
    for(let i = 0; i < attributes.length; i++){
        const attribute = attributes[i];
        attribute && checkAttribute(element, attribute.name, attribute.value, inHead, sink);
    }
}
function checkTextNode(node, inHead, sink) {
    const parentElement = node.parentElement;
    let kind;
    if (inHead) kind = "head";
    else switch(parentElement?.tagName.toUpperCase()){
        case "SCRIPT":
            kind = "script";
            break;
        case "STYLE":
            kind = "style";
            break;
        case "TEXTAREA":
            kind = "form-value";
            break;
        default:
            return;
    }
    const value = node.textContent;
    !value || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$SharedStateContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["testVercelStegaRegex"])(value) || sink(kind, parentElement ?? void 0, void 0, value);
}
function visitNode(node, inHead, sink) {
    if (isElement(node)) {
        if (isOverlayElement(node)) return;
        checkElementAttributes(node, inHead, sink);
    } else node.nodeType === Node.TEXT_NODE && checkTextNode(node, inHead, sink);
}
function auditTree(root, inHead, sink) {
    visitNode(root, inHead, sink);
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, {
        acceptNode: (node2)=>isOverlayElement(node2) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
    });
    let node;
    for(; node = walker.nextNode();)visitNode(node, inHead, sink);
}
function checkLocation(sink) {
    const href = location.href;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$SharedStateContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["testVercelStegaRegex"])(href)) {
        sink("url", void 0, void 0, href);
        return;
    }
    try {
        const decoded = decodeURIComponent(href);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$SharedStateContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["testVercelStegaRegex"])(decoded) && sink("url", void 0, void 0, decoded);
    } catch  {}
}
function auditDocument(sink) {
    const { documentElement, head, body } = document;
    documentElement && checkElementAttributes(documentElement, !1, sink), head && auditTree(head, !0, sink), body && auditTree(body, !1, sink), checkLocation(sink);
}
function processMutation(mutation, sink) {
    const { target, type } = mutation;
    if (!(!target.isConnected || isInsideOverlay(target))) if (type === "attributes") {
        if (isElement(target) && mutation.attributeName) {
            const value = target.getAttributeNS(mutation.attributeNamespace, mutation.attributeName);
            checkAttribute(target, mutation.attributeName, value, isInsideHead(target), sink);
        }
    } else if (type === "characterData") checkTextNode(target, isInsideHead(target), sink);
    else for(let i = 0; i < mutation.addedNodes.length; i++){
        const added = mutation.addedNodes[i];
        !added || !added.isConnected || isInsideOverlay(added) || auditTree(added, isInsideHead(added), sink);
    }
}
function decodeSanity(value) {
    try {
        const decoded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vercel$2b$stega$40$1$2e$1$2e$0$2f$node_modules$2f40$vercel$2f$stega$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vercelStegaDecode"])(value);
        return !decoded || typeof decoded != "object" || decoded.origin !== "sanity.io" ? void 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$2d$csm$40$3$2e$0$2e$13_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$sanity$2b$types$40$6$2e$9$2e$1_$40$types$2b$react$40$19$2e$2$2e$17_$5f$typescript$40$6$2e$0$2e$3$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2d$csm$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeSanityNodeData"])(decoded) ?? decoded;
    } catch  {
        return;
    }
}
function scheduleIdle(callback) {
    if (typeof requestIdleCallback == "function") {
        const id2 = requestIdleCallback(callback, {
            timeout: 1e3
        });
        return ()=>cancelIdleCallback(id2);
    }
    const id = setTimeout(callback, 0);
    return ()=>clearTimeout(id);
}
function observeSuspiciousStega(onSuspiciousStega) {
    const reported = /* @__PURE__ */ new Set(), pendingReports = [], pendingMutations = [];
    let initialAuditDone = !1, cancelScheduled = null, disposed = !1;
    const sink = (kind, element, attribute, value)=>{
        const cleaned = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$SharedStateContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stegaClean"])(value), key = `${kind}|${attribute ?? ""}|${cleaned}`;
        reported.has(key) || (reported.add(key), pendingReports.push({
            kind,
            element,
            attribute,
            value,
            cleaned,
            sanity: decodeSanity(value)
        }));
    }, process = ()=>{
        if (cancelScheduled = null, !disposed) {
            if (initialAuditDone || (initialAuditDone = !0, auditDocument(sink)), pendingMutations.length > 0) {
                const mutations = pendingMutations.splice(0);
                for (const mutation of mutations)processMutation(mutation, sink);
            }
            pendingReports.length > 0 && onSuspiciousStega(pendingReports.splice(0));
        }
    }, schedule = ()=>{
        cancelScheduled || disposed || (cancelScheduled = scheduleIdle(process));
    }, observer = new MutationObserver((mutations)=>{
        for (const mutation of mutations)pendingMutations.push(mutation);
        schedule();
    });
    return observer.observe(document.documentElement, {
        attributes: !0,
        characterData: !0,
        childList: !0,
        subtree: !0
    }), schedule(), ()=>{
        disposed = !0, observer.disconnect(), cancelScheduled?.(), cancelScheduled = null;
    };
}
const listeners = /* @__PURE__ */ new Set();
function subscribe$1(listener) {
    return listeners.add(listener), ()=>{
        listeners.delete(listener);
    };
}
let environment = null;
function getSnapshot() {
    return environment;
}
function setEnvironment(nextEnvironment) {
    if (environment !== nextEnvironment) {
        environment = nextEnvironment;
        for (const onEnvironmentChange of listeners)onEnvironmentChange();
    }
}
const History = (props)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8), { comlink: comlink2, history } = props;
    let t0, t1;
    $[0] !== comlink2 || $[1] !== history ? (t0 = ()=>comlink2?.on("presentation/navigate", (data)=>{
            history?.update(data);
        }), t1 = [
        comlink2,
        history
    ], $[0] = comlink2, $[1] = history, $[2] = t0, $[3] = t1) : (t0 = $[2], t1 = $[3]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2, t3;
    return $[4] !== comlink2 || $[5] !== history ? (t2 = ()=>{
        if (history) return history.subscribe((update)=>{
            update.title = update.title || document.title, comlink2?.post("visual-editing/navigate", update);
        });
    }, t3 = [
        comlink2,
        history
    ], $[4] = comlink2, $[5] = history, $[6] = t2, $[7] = t3) : (t2 = $[6], t3 = $[7]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3), null;
}, comlinkListeners = /* @__PURE__ */ new Set();
let comlink = null, comlinkProjectId = null, comlinkDataset = null, comlinkPerspective = null, comlinkVariant = null;
function setLoaderComlink(nextComlink) {
    comlink = nextComlink;
    for (const listener of comlinkListeners)listener();
}
function setLoaderClientConfig(projectId, dataset) {
    comlinkProjectId = projectId, comlinkDataset = dataset;
    for (const listener of comlinkListeners)listener();
}
function setLoaderPerspective(perspective) {
    comlinkPerspective = perspective;
    for (const listener of comlinkListeners)listener();
}
function setLoaderVariant(variant) {
    comlinkVariant = variant;
    for (const listener of comlinkListeners)listener();
}
function subscribe(listener) {
    return comlinkListeners.add(listener), ()=>comlinkListeners.delete(listener);
}
const queryListenerStatusListeners = /* @__PURE__ */ new Set();
let hasQueryListeners = !1, queryListenerCount = 0;
function subscribeQueryListenerStatus(listener) {
    return queryListenerStatusListeners.add(listener), ()=>queryListenerStatusListeners.delete(listener);
}
function getQueryListenerStatus() {
    return hasQueryListeners;
}
function addQueryListener() {
    if (queryListenerCount++, !hasQueryListeners) {
        hasQueryListeners = !0;
        for (const listener of queryListenerStatusListeners)listener();
    }
    return ()=>{
        if (queryListenerCount--, queryListenerCount === 0 && hasQueryListeners) {
            hasQueryListeners = !1;
            for (const listener of queryListenerStatusListeners)listener();
        }
    };
}
const Meta = (props)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3), { comlink: comlink2 } = props;
    let t0, t1;
    return $[0] !== comlink2 ? (t0 = ()=>{
        const sendMeta = ()=>{
            comlink2.post("visual-editing/meta", {
                title: document.title
            });
        }, observer = new MutationObserver((t2)=>{
            const [mutation] = t2;
            mutation.target.nodeName === "TITLE" && sendMeta();
        });
        return observer.observe(document.head, {
            subtree: !0,
            characterData: !0,
            childList: !0
        }), sendMeta(), ()=>observer.disconnect();
    }, t1 = [
        comlink2
    ], $[0] = comlink2, $[1] = t0, $[2] = t1) : (t0 = $[1], t1 = $[2]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1), null;
};
function getReferenceNodeAndInsertPosition(position) {
    if (position) {
        const { top, right, bottom, left } = position;
        if (left || top) return {
            node: (left ?? top).sanity,
            position: "after"
        };
        if (right || bottom) return {
            node: (right ?? bottom).sanity,
            position: "before"
        };
    }
}
function useDragEndEvents() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4), { getDocument } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDocuments"])();
    let t0, t1;
    $[0] !== getDocument ? (t0 = ()=>{
        const handler = (e)=>{
            const { insertPosition, target, preventInsertDefault } = e.detail;
            if (preventInsertDefault) return;
            const reference = getReferenceNodeAndInsertPosition(insertPosition);
            if (reference) {
                const doc = getDocument(target.id), { node, position } = reference, { key: targetKey, hasExplicitKey } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArrayItemKeyAndParentPath"])(target), { path: arrayPath, key: referenceItemKey } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArrayItemKeyAndParentPath"])(node);
                arrayPath && referenceItemKey && referenceItemKey !== targetKey && doc.patch(async (t22)=>{
                    const { getSnapshot: getSnapshot2 } = t22, snapshot = await getSnapshot2(), elementValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["get"])(snapshot, target.path);
                    return hasExplicitKey ? [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$18$2e$1_xstate$40$5$2e$32$2e$5$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["at"])(arrayPath, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$18$2e$1_xstate$40$5$2e$32$2e$5$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["remove"])({
                            _key: targetKey
                        })),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$18$2e$1_xstate$40$5$2e$32$2e$5$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["at"])(arrayPath, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$18$2e$1_xstate$40$5$2e$32$2e$5$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["insert"])(elementValue, position, {
                            _key: referenceItemKey
                        }))
                    ] : [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$18$2e$1_xstate$40$5$2e$32$2e$5$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["at"])(arrayPath, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$18$2e$1_xstate$40$5$2e$32$2e$5$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["remove"])(~~targetKey)),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$18$2e$1_xstate$40$5$2e$32$2e$5$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["at"])(arrayPath, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$18$2e$1_xstate$40$5$2e$32$2e$5$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["insert"])(elementValue, position, referenceItemKey > targetKey ? ~~referenceItemKey - 1 : ~~referenceItemKey))
                    ];
                });
            }
        };
        return window.addEventListener("sanity/dragEnd", handler), ()=>{
            window.removeEventListener("sanity/dragEnd", handler);
        };
    }, t1 = [
        getDocument
    ], $[0] = getDocument, $[1] = t0, $[2] = t1) : (t0 = $[1], t1 = $[2]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    const dispatchDragEndEvent = _temp$a;
    let t2;
    return $[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (t2 = {
        dispatchDragEndEvent
    }, $[3] = t2) : t2 = $[3], t2;
}
function _temp$a(event) {
    const customEvent = new CustomEvent("sanity/dragEnd", {
        detail: event,
        cancelable: !0
    });
    window.dispatchEvent(customEvent);
}
const SchemaContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function useSchema() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(SchemaContext);
    if (!context) throw new Error("Schema context is missing");
    return context;
}
function getArrayRemoveAction(node, doc) {
    if (!node.type) throw new Error("Node type is missing");
    return ()=>doc.patch(async ({ getSnapshot: getSnapshot2 })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArrayRemovePatches"])(node, await getSnapshot2()));
}
function getArrayInsertAction(node, doc, insertType, position) {
    if (!node.type) throw new Error("Node type is missing");
    return ()=>doc.patch(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArrayInsertPatches"])(node, insertType, position));
}
function getDuplicateAction(node, doc) {
    if (!node.type) throw new Error("Node type is missing");
    return ()=>doc.patch(async ({ getSnapshot: getSnapshot2 })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArrayDuplicatePatches"])(node, await getSnapshot2()));
}
function getContextMenuItems(context) {
    const { node, field, parent, doc } = context;
    return field?.type === "arrayItem" ? getContextMenuArrayItems({
        node,
        field,
        doc
    }) : parent?.type === "union" ? getContextMenuUnionItems({
        node,
        parent,
        doc
    }) : Promise.resolve([]);
}
function getDuplicateItem(context) {
    const { node, doc } = context;
    return doc ? [
        {
            type: "action",
            label: "Duplicate",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$5$2e$2$2e$1_react$40$19$2e$2$2e$7$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$Copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CopyIcon"],
            action: getDuplicateAction(node, doc),
            telemetryEvent: "Visual Editing Context Menu Item Duplicated"
        }
    ] : [];
}
function getRemoveItems(context) {
    const { node, doc } = context;
    return doc ? [
        {
            type: "action",
            label: "Remove",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$5$2e$2$2e$1_react$40$19$2e$2$2e$7$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$Remove$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RemoveIcon"],
            action: getArrayRemoveAction(node, doc),
            telemetryEvent: "Visual Editing Context Menu Item Removed"
        }
    ] : [];
}
async function getMoveItems(context, withDivider = !0) {
    const { node, doc } = context;
    if (!doc) return [];
    const items = [], groupItems = [], [moveUpPatches, moveDownPatches, moveFirstPatches, moveLastPatches] = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArrayMovePatches"])(node, doc, "previous"),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArrayMovePatches"])(node, doc, "next"),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArrayMovePatches"])(node, doc, "first"),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArrayMovePatches"])(node, doc, "last")
    ]);
    return moveFirstPatches.length && groupItems.push({
        type: "action",
        label: "To top",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$5$2e$2$2e$1_react$40$19$2e$2$2e$7$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$Publish$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublishIcon"],
        action: ()=>doc.patch(moveFirstPatches),
        telemetryEvent: "Visual Editing Context Menu Item Moved"
    }), moveUpPatches.length && groupItems.push({
        type: "action",
        label: "Up",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$5$2e$2$2e$1_react$40$19$2e$2$2e$7$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$ArrowUp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowUpIcon"],
        action: ()=>doc.patch(moveUpPatches),
        telemetryEvent: "Visual Editing Context Menu Item Moved"
    }), moveDownPatches.length && groupItems.push({
        type: "action",
        label: "Down",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$5$2e$2$2e$1_react$40$19$2e$2$2e$7$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$ArrowDown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowDownIcon"],
        action: ()=>doc.patch(moveDownPatches),
        telemetryEvent: "Visual Editing Context Menu Item Moved"
    }), moveLastPatches.length && groupItems.push({
        type: "action",
        label: "To bottom",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$5$2e$2$2e$1_react$40$19$2e$2$2e$7$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$Unpublish$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnpublishIcon"],
        action: ()=>doc.patch(moveLastPatches),
        telemetryEvent: "Visual Editing Context Menu Item Moved"
    }), groupItems.length && (items.push({
        type: "group",
        label: "Move",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$5$2e$2$2e$1_react$40$19$2e$2$2e$7$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$Sort$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SortIcon"],
        items: groupItems
    }), withDivider && items.push({
        type: "divider"
    })), items;
}
async function getContextMenuArrayItems(context) {
    const { node, field, doc } = context, items = [];
    return items.push(...getDuplicateItem(context)), items.push(...getRemoveItems(context)), items.push(...await getMoveItems(context)), items.push({
        type: "action",
        label: "Insert before",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$5$2e$2$2e$1_react$40$19$2e$2$2e$7$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$InsertAbove$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InsertAboveIcon"],
        action: getArrayInsertAction(node, doc, field.name, "before"),
        telemetryEvent: "Visual Editing Context Menu Item Inserted"
    }), items.push({
        type: "action",
        label: "Insert after",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$5$2e$2$2e$1_react$40$19$2e$2$2e$7$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$InsertBelow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InsertBelowIcon"],
        action: getArrayInsertAction(node, doc, field.name, "after"),
        telemetryEvent: "Visual Editing Context Menu Item Inserted"
    }), items;
}
const InsertMenuWrapper = (props)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12), { label, parent, width, onSelect, boundaryElement } = props;
    let t0;
    $[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (t0 = [
        "left-start",
        "right",
        "left",
        "right-end",
        "left-end",
        "bottom",
        "top"
    ], $[0] = t0) : t0 = $[0];
    let t1;
    $[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (t1 = [
        4,
        4,
        4,
        4
    ], $[1] = t1) : t1 = $[1];
    let t2;
    $[2] !== boundaryElement || $[3] !== width ? (t2 = {
        arrow: !1,
        constrainSize: !0,
        floatingBoundary: boundaryElement,
        padding: 0,
        placement: "right-start",
        fallbackPlacements: t0,
        preventOverflow: !0,
        width,
        __unstable_margins: t1
    }, $[2] = boundaryElement, $[3] = width, $[4] = t2) : t2 = $[4];
    let t3;
    $[5] !== onSelect || $[6] !== parent ? (t3 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$InsertMenu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InsertMenu"], {
        node: parent,
        onSelect
    }), $[5] = onSelect, $[6] = parent, $[7] = t3) : t3 = $[7];
    let t4;
    return $[8] !== label || $[9] !== t2 || $[10] !== t3 ? (t4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__d__as__MenuGroup$3e$__["MenuGroup"], {
        fontSize: 1,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$5$2e$2$2e$1_react$40$19$2e$2$2e$7$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$InsertBelow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InsertBelowIcon"],
        padding: 2,
        popover: t2,
        space: 2,
        text: label,
        children: t3
    }), $[8] = label, $[9] = t2, $[10] = t3, $[11] = t4) : t4 = $[11], t4;
};
async function getContextMenuUnionItems(context) {
    const { doc, node, parent } = context, items = [];
    if (items.push(...getDuplicateItem(context)), items.push(...getRemoveItems(context)), items.push(...await getMoveItems(context)), parent.options?.insertMenu) {
        const width = (parent.options.insertMenu || {}).views?.some((view)=>view.name === "grid") ? 0 : void 0;
        items.push({
            type: "custom",
            component: ({ boundaryElement, sendTelemetry })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(InsertMenuWrapper, {
                    label: "Insert before",
                    onSelect: (schemaType)=>{
                        getArrayInsertAction(node, doc, schemaType.name, "before")(), sendTelemetry("Visual Editing Context Menu Item Inserted", null);
                    },
                    parent,
                    width,
                    boundaryElement
                })
        }), items.push({
            type: "custom",
            component: ({ boundaryElement, sendTelemetry })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(InsertMenuWrapper, {
                    label: "Insert after",
                    onSelect: (schemaType)=>{
                        getArrayInsertAction(node, doc, schemaType.name, "after")(), sendTelemetry("Visual Editing Context Menu Item Inserted", null);
                    },
                    parent,
                    width,
                    boundaryElement
                })
        });
    } else items.push({
        type: "group",
        label: "Insert before",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$5$2e$2$2e$1_react$40$19$2e$2$2e$7$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$InsertAbove$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InsertAboveIcon"],
        items: parent.of.filter((item)=>item.type === "unionOption").map((t)=>({
                type: "action",
                icon: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$InsertMenu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeIcon"])(t),
                label: t.name === "block" ? "Paragraph" : t.title || t.name,
                action: getArrayInsertAction(node, doc, t.name, "before"),
                telemetryEvent: "Visual Editing Context Menu Item Inserted"
            }))
    }), items.push({
        type: "group",
        label: "Insert after",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$5$2e$2$2e$1_react$40$19$2e$2$2e$7$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$InsertBelow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InsertBelowIcon"],
        items: parent.of.filter((item)=>item.type === "unionOption").map((t)=>({
                type: "action",
                label: t.name === "block" ? "Paragraph" : t.title || t.name,
                icon: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$InsertMenu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeIcon"])(t),
                action: getArrayInsertAction(node, doc, t.name, "after"),
                telemetryEvent: "Visual Editing Context Menu Item Inserted"
            }))
    });
    return items;
}
const POPOVER_MARGINS = [
    -4,
    4,
    -4,
    4
];
function ContextMenuItem(props) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(27), { node, onDismiss, boundaryElement } = props, sendTelemetry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$InsertMenu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTelemetry"])();
    let t0;
    $[0] !== node || $[1] !== onDismiss || $[2] !== sendTelemetry ? (t0 = ()=>{
        node.type === "action" && (node.action?.(), onDismiss?.(), node.telemetryEvent && sendTelemetry(node.telemetryEvent, null));
    }, $[0] = node, $[1] = onDismiss, $[2] = sendTelemetry, $[3] = t0) : t0 = $[3];
    const onClick = t0;
    if (node.type === "divider") {
        let t1;
        return $[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (t1 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__f__as__MenuDivider$3e$__["MenuDivider"], {}), $[4] = t1) : t1 = $[4], t1;
    }
    if (node.type === "action") {
        const t1 = !node.action;
        let t2;
        return $[5] !== node.hotkeys || $[6] !== node.icon || $[7] !== node.label || $[8] !== onClick || $[9] !== t1 ? (t2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__u__as__MenuItem$3e$__["MenuItem"], {
            fontSize: 1,
            hotkeys: node.hotkeys,
            icon: node.icon,
            padding: 2,
            space: 2,
            text: node.label,
            disabled: t1,
            onClick
        }), $[5] = node.hotkeys, $[6] = node.icon, $[7] = node.label, $[8] = onClick, $[9] = t1, $[10] = t2) : t2 = $[10], t2;
    }
    if (node.type === "group") {
        const t1 = node.icon;
        let t2;
        $[11] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (t2 = {
            arrow: !1,
            constrainSize: !0,
            placement: "right-start",
            fallbackPlacements: [
                "left-start",
                "right",
                "left",
                "right-end",
                "left-end",
                "bottom",
                "top"
            ],
            preventOverflow: !0,
            __unstable_margins: POPOVER_MARGINS
        }, $[11] = t2) : t2 = $[11];
        const t3 = node.label;
        let t4;
        if ($[12] !== boundaryElement || $[13] !== node.items || $[14] !== onDismiss) {
            let t52;
            $[16] !== boundaryElement || $[17] !== onDismiss ? (t52 = (item, itemIndex)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ContextMenuItem, {
                    node: item,
                    onDismiss,
                    boundaryElement
                }, itemIndex), $[16] = boundaryElement, $[17] = onDismiss, $[18] = t52) : t52 = $[18], t4 = node.items.map(t52), $[12] = boundaryElement, $[13] = node.items, $[14] = onDismiss, $[15] = t4;
        } else t4 = $[15];
        let t5;
        return $[19] !== node.icon || $[20] !== node.label || $[21] !== t4 ? (t5 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__d__as__MenuGroup$3e$__["MenuGroup"], {
            fontSize: 1,
            icon: t1,
            padding: 2,
            popover: t2,
            space: 2,
            text: t3,
            children: t4
        }), $[19] = node.icon, $[20] = node.label, $[21] = t4, $[22] = t5) : t5 = $[22], t5;
    }
    if (node.type === "custom") {
        const { component: Component } = node;
        let t1;
        return $[23] !== Component || $[24] !== boundaryElement || $[25] !== sendTelemetry ? (t1 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
            boundaryElement,
            sendTelemetry
        }), $[23] = Component, $[24] = boundaryElement, $[25] = sendTelemetry, $[26] = t1) : t1 = $[26], t1;
    }
    return null;
}
const ContextMenu = (props)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(43), { node, onDismiss, position: t0 } = props, { x, y } = t0, [boundaryElement, setBoundaryElement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), { getField } = useSchema(), { getDocument } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDocuments"])();
    let t1;
    $[0] !== getField || $[1] !== node ? (t1 = getField(node), $[0] = getField, $[1] = node, $[2] = t1) : t1 = $[2];
    const { field, parent } = t1, title = field?.title || field?.name || "Unknown type", [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(void 0);
    let t2, t3;
    $[3] !== field || $[4] !== getDocument || $[5] !== node || $[6] !== parent ? (t2 = ()=>{
        (async ()=>{
            const doc = getDocument(node.id);
            if (!doc) return;
            const items_0 = await getContextMenuItems({
                node,
                field,
                parent,
                doc
            });
            setItems(items_0);
        })();
    }, t3 = [
        field,
        node,
        parent,
        getDocument
    ], $[3] = field, $[4] = getDocument, $[5] = node, $[6] = parent, $[7] = t2, $[8] = t3) : (t2 = $[7], t3 = $[8]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    $[9] !== x || $[10] !== y ? (t4 = {
        getBoundingClientRect: ()=>({
                bottom: y,
                left: x,
                right: x,
                top: y,
                width: 0,
                height: 0
            })
    }, $[9] = x, $[10] = y, $[11] = t4) : t4 = $[11];
    const contextMenuReferenceElement = t4;
    let t5;
    $[12] !== field ? (t5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$InsertMenu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeIcon"])(field), $[12] = field, $[13] = t5) : t5 = $[13];
    const icon = t5;
    let t6;
    $[14] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (t6 = {
        minWidth: 120,
        maxWidth: 160
    }, $[14] = t6) : t6 = $[14];
    let t7;
    $[15] !== icon || $[16] !== items ? (t7 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__lt__as__Box$3e$__["Box"], {
        flex: "none",
        children: items ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__et__as__Text$3e$__["Text"], {
            size: 1,
            children: icon
        }) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$$__as__Spinner$3e$__["Spinner"], {
            size: 1
        })
    }), $[15] = icon, $[16] = items, $[17] = t7) : t7 = $[17];
    const t8 = items ? title : "Loading...";
    let t9;
    $[18] !== t8 ? (t9 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__O__as__Stack$3e$__["Stack"], {
        flex: 1,
        space: 2,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__et__as__Text$3e$__["Text"], {
            size: 1,
            weight: "semibold",
            children: t8
        })
    }), $[18] = t8, $[19] = t9) : t9 = $[19];
    let t10;
    $[20] !== t7 || $[21] !== t9 ? (t10 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__at__as__Flex$3e$__["Flex"], {
        gap: 2,
        padding: 2,
        children: [
            t7,
            t9
        ]
    }), $[20] = t7, $[21] = t9, $[22] = t10) : t10 = $[22];
    let t11;
    $[23] !== boundaryElement || $[24] !== items || $[25] !== onDismiss ? (t11 = items && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__f__as__MenuDivider$3e$__["MenuDivider"], {}),
            items.map((item, i)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ContextMenuItem, {
                    node: item,
                    onDismiss,
                    boundaryElement
                }, i))
        ]
    }), $[23] = boundaryElement, $[24] = items, $[25] = onDismiss, $[26] = t11) : t11 = $[26];
    let t12;
    $[27] !== t10 || $[28] !== t11 ? (t12 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__p__as__Menu$3e$__["Menu"], {
        style: t6,
        children: [
            t10,
            t11
        ]
    }), $[27] = t10, $[28] = t11, $[29] = t12) : t12 = $[29];
    const t13 = `${x}-${y}`;
    let t14;
    $[30] !== x || $[31] !== y ? (t14 = {
        position: "absolute",
        left: x,
        top: y
    }, $[30] = x, $[31] = y, $[32] = t14) : t14 = $[32];
    let t15;
    $[33] !== t13 || $[34] !== t14 ? (t15 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        style: t14
    }, t13), $[33] = t13, $[34] = t14, $[35] = t15) : t15 = $[35];
    let t16;
    $[36] !== contextMenuReferenceElement || $[37] !== t12 || $[38] !== t15 ? (t16 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__k__as__Popover$3e$__["Popover"], {
        __unstable_margins: POPOVER_MARGINS,
        arrow: !1,
        open: !0,
        placement: "right-start",
        referenceElement: contextMenuReferenceElement,
        content: t12,
        children: t15
    }), $[36] = contextMenuReferenceElement, $[37] = t12, $[38] = t15, $[39] = t16) : t16 = $[39];
    let t17;
    return $[40] !== onDismiss || $[41] !== t16 ? (t17 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$InsertMenu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverPortal"], {
        setBoundaryElement,
        onDismiss,
        children: t16
    }), $[40] = onDismiss, $[41] = t16, $[42] = t17) : t17 = $[42], t17;
};
function getLinkHref(href, referer) {
    try {
        const parsed = new URL(href, typeof location > "u" ? void 0 : location.origin);
        if (parsed.hash) {
            const hash = new URL(getLinkHref(parsed.hash.slice(1), referer));
            return `${parsed.origin}${parsed.pathname}${parsed.search}#${hash.pathname}${hash.search}`;
        }
        return parsed.searchParams.set("preview", referer), parsed.toString();
    } catch  {
        return href;
    }
}
const PreviewSnapshotsContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function usePreviewSnapshots() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(PreviewSnapshotsContext);
    if (!context) throw new Error("Preview Snapshots context is missing");
    return context;
}
const isReactElementOverlayComponent = (component)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(component), Root$3 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$4$2e$3_css$2d$to$2d$react$2d$native$40$3$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__W__as__Card$3e$__["Card"]).withConfig({
    displayName: "Root",
    componentId: "sc-e95gnt-0"
})([
    "background-color:var(--overlay-bg);border-radius:3px;pointer-events:none;position:absolute;will-change:transform;box-shadow:var(--overlay-box-shadow);transition:none;--overlay-bg:transparent;--overlay-box-shadow:inset 0 0 0 1px transparent;[data-overlays] &{--overlay-bg:color-mix(in srgb,transparent 95%,var(--card-focus-ring-color));--overlay-box-shadow:inset 0 0 0 2px color-mix(in srgb,transparent 50%,var(--card-focus-ring-color));}[data-fading-out] &{transition:box-shadow 1550ms,background-color 1550ms;--overlay-bg:rgba(0,0,255,0);--overlay-box-shadow:inset 0 0 0 1px transparent;}&[data-focused]{--overlay-box-shadow:inset 0 0 0 1px var(--card-focus-ring-color);}&[data-hovered]:not([data-focused]){transition:none;--overlay-box-shadow:inset 0 0 0 2px var(--card-focus-ring-color);}:link{text-decoration:none;}"
]), Actions = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$4$2e$3_css$2d$to$2d$react$2d$native$40$3$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__at__as__Flex$3e$__["Flex"]).withConfig({
    displayName: "Actions",
    componentId: "sc-e95gnt-1"
})([
    "bottom:100%;cursor:pointer;pointer-events:none;position:absolute;right:0;[data-hovered]:not([data-menu-open]) &{pointer-events:all;}[data-flipped] &{bottom:auto;top:100%;}"
]), HUD = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$4$2e$3_css$2d$to$2d$react$2d$native$40$3$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__at__as__Flex$3e$__["Flex"]).withConfig({
    displayName: "HUD",
    componentId: "sc-e95gnt-2"
})([
    "top:100%;cursor:pointer;pointer-events:none;position:absolute;left:0;gap:4px;padding:4px 0;flex-wrap:wrap;[data-hovered]:not([data-menu-open]) &{pointer-events:all;}[data-flipped] &{top:calc(100% + 2rem);}"
]), MenuWrapper = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$4$2e$3_css$2d$to$2d$react$2d$native$40$3$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__at__as__Flex$3e$__["Flex"]).withConfig({
    displayName: "MenuWrapper",
    componentId: "sc-e95gnt-3"
})([
    "margin:-0.5rem;[data-hovered]:not([data-menu-open]) &{pointer-events:all;}"
]), Tab = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$4$2e$3_css$2d$to$2d$react$2d$native$40$3$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__at__as__Flex$3e$__["Flex"]).withConfig({
    displayName: "Tab",
    componentId: "sc-e95gnt-4"
})([
    "bottom:100%;cursor:pointer;pointer-events:none;position:absolute;left:0;[data-hovered]:not([data-menu-open]) &{pointer-events:all;}[data-flipped] &{bottom:auto;top:100%;}"
]), ActionOpen = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$4$2e$3_css$2d$to$2d$react$2d$native$40$3$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__W__as__Card$3e$__["Card"]).withConfig({
    displayName: "ActionOpen",
    componentId: "sc-e95gnt-5"
})([
    "cursor:pointer;background-color:var(--card-focus-ring-color);right:0;border-radius:3px;& [data-ui='Text']{color:#fff;white-space:nowrap;}"
]), Labels = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$4$2e$3_css$2d$to$2d$react$2d$native$40$3$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__at__as__Flex$3e$__["Flex"]).withConfig({
    displayName: "Labels",
    componentId: "sc-e95gnt-6"
})([
    "display:flex;align-items:center;background-color:var(--card-focus-ring-color);right:0;border-radius:3px;& [data-ui='Text'],& [data-sanity-icon]{color:#fff;white-space:nowrap;}"
]), ExclusivePluginContainer = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$4$2e$3_css$2d$to$2d$react$2d$native$40$3$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"].div.withConfig({
    displayName: "ExclusivePluginContainer",
    componentId: "sc-e95gnt-7"
})([
    "position:absolute;inset:0;pointer-events:all;"
]);
function createIntentLink(node) {
    const { id, type, path, baseUrl, tool, workspace, perspective } = node, [url, search] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$client$40$7$2e$26$2e$2$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$_chunks$2d$es$2f$resolveEditInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEditUrl"])({
        baseUrl,
        workspace,
        tool,
        type,
        id,
        path: path ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$2d$csm$40$3$2e$0$2e$13_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$sanity$2b$types$40$6$2e$9$2e$1_$40$types$2b$react$40$19$2e$2$2e$17_$5f$typescript$40$6$2e$0$2e$3$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2d$csm$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pathToUrlString"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$client$40$7$2e$26$2e$2$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$_chunks$2d$es$2f$resolveEditInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["studioPath"].fromString(path)) : []
    }).split("?"), searchParams = new URLSearchParams(search), resolvedPerspective = perspective || searchParams.get("perspective");
    return resolvedPerspective === "drafts" ? searchParams.delete("perspective") : resolvedPerspective && searchParams.set("perspective", resolvedPerspective), `${url}?${searchParams}`;
}
const ElementOverlayInner = (props)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(60), { id, element, focused, componentResolver, node, showActions, draggable, targets, elementType, comlink: comlink2, onActivateExclusivePlugin, onMenuOpenChange, inFrame } = props, { getField, getType } = useSchema();
    let t0;
    $[0] !== getType || $[1] !== node ? (t0 = getType(node), $[0] = getType, $[1] = node, $[2] = t0) : t0 = $[2];
    const schemaType = t0;
    let t1;
    $[3] !== node ? (t1 = "path" in node ? createIntentLink(node) : node.href, $[3] = node, $[4] = t1) : t1 = $[4];
    const href = t1, previewSnapshots = usePreviewSnapshots();
    let t2;
    bb0: {
        if (!("path" in node)) {
            t2 = void 0;
            break bb0;
        }
        let t32;
        $[5] !== node || $[6] !== previewSnapshots ? (t32 = previewSnapshots.find((snapshot)=>snapshot._id === node.id)?.title, $[5] = node, $[6] = previewSnapshots, $[7] = t32) : t32 = $[7], t2 = t32;
    }
    const title = t2;
    let t3;
    $[8] !== element || $[9] !== focused || $[10] !== getField || $[11] !== getType ? (t3 = function(node_0, nodeElement) {
        const schemaType_0 = getType(node_0), { field, parent } = getField(node_0);
        if (!("id" in node_0) || !field || !schemaType_0) return;
        const type = field.value.type;
        return {
            document: schemaType_0,
            element,
            targetElement: nodeElement || element,
            field,
            focused: !!focused,
            node: node_0,
            parent,
            type
        };
    }, $[8] = element, $[9] = focused, $[10] = getField, $[11] = getType, $[12] = t3) : t3 = $[12];
    const getContext = t3;
    let t4;
    $[13] !== elementType || $[14] !== getContext || $[15] !== node ? (t4 = elementType === "element" ? getContext(node) : void 0, $[13] = elementType, $[14] = getContext, $[15] = node, $[16] = t4) : t4 = $[16];
    let t5;
    if ($[17] !== getContext || $[18] !== targets) {
        let t62;
        $[20] !== getContext ? (t62 = (target)=>getContext(target.sanity, target.element), $[20] = getContext, $[21] = t62) : t62 = $[21], t5 = targets.map(t62).filter(_temp$9), $[17] = getContext, $[18] = targets, $[19] = t5;
    } else t5 = $[19];
    let t6;
    $[22] !== t4 || $[23] !== t5 ? (t6 = {
        legacyComponentContext: t4,
        pluginContexts: t5
    }, $[22] = t4, $[23] = t5, $[24] = t6) : t6 = $[24];
    const resolverContexts = t6, customComponents = useCustomComponents(resolverContexts.legacyComponentContext, componentResolver), nodePluginCollections = useResolvedNodePlugins(resolverContexts.pluginContexts, props.plugins);
    let t7;
    $[25] !== schemaType ? (t7 = schemaType?.icon ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        dangerouslySetInnerHTML: {
            __html: schemaType.icon
        }
    }) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$5$2e$2$2e$1_react$40$19$2e$2$2e$7$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$Document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DocumentIcon"], {}), $[25] = schemaType, $[26] = t7) : t7 = $[26];
    const icon = t7, menuId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    let t8;
    $[27] !== nodePluginCollections ? (t8 = nodePluginCollections?.some(_temp2$6), $[27] = nodePluginCollections, $[28] = t8) : t8 = $[28];
    const showMenu = t8 || nodePluginCollections?.length > 1;
    let t9;
    $[29] !== id ? (t9 = ()=>{
        window.dispatchEvent(new CustomEvent("sanity-overlay/label-click", {
            detail: {
                id
            }
        }));
    }, $[29] = id, $[30] = t9) : t9 = $[30];
    const handleLabelClick = t9;
    let t10;
    $[31] !== href || $[32] !== inFrame || $[33] !== showActions ? (t10 = showActions ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Actions, {
        gap: 1,
        paddingY: 1,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Link, {
            inFrame,
            href
        })
    }) : null, $[31] = href, $[32] = inFrame, $[33] = showActions, $[34] = t10) : t10 = $[34];
    let t11;
    $[35] !== comlink2 || $[36] !== draggable || $[37] !== handleLabelClick || $[38] !== icon || $[39] !== menuId || $[40] !== nodePluginCollections || $[41] !== onActivateExclusivePlugin || $[42] !== onMenuOpenChange || $[43] !== showMenu || $[44] !== title ? (t11 = (title || showMenu) && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Tab, {
        gap: 1,
        paddingY: 1,
        onClick: handleLabelClick,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(Labels, {
            gap: 2,
            padding: 2,
            children: [
                draggable && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__lt__as__Box$3e$__["Box"], {
                    marginRight: 1,
                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__et__as__Text$3e$__["Text"], {
                        className: "drag-handle",
                        size: 0,
                        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$5$2e$2$2e$1_react$40$19$2e$2$2e$7$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$DragHandle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DragHandleIcon"], {})
                    })
                }),
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__et__as__Text$3e$__["Text"], {
                    size: 0,
                    children: icon
                }),
                title && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__et__as__Text$3e$__["Text"], {
                    size: 1,
                    weight: "medium",
                    children: title
                }),
                showMenu && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__lt__as__Box$3e$__["Box"], {
                    paddingLeft: 2,
                    onClick: _temp3$2,
                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(MenuWrapper, {
                        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["MenuButton"], {
                            id: menuId,
                            popover: {
                                animate: !0,
                                placement: "bottom-start",
                                constrainSize: !0,
                                tone: "default"
                            },
                            onOpen: ()=>{
                                onMenuOpenChange?.(!0);
                            },
                            onClose: ()=>{
                                onMenuOpenChange?.(!1);
                            },
                            button: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Y__as__Button$3e$__["Button"], {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$5$2e$2$2e$1_react$40$19$2e$2$2e$7$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$EllipsisVertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EllipsisVerticalIcon"],
                                tone: "primary",
                                padding: 2
                            }),
                            menu: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__p__as__Menu$3e$__["Menu"], {
                                paddingY: 0,
                                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$InsertMenu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerEvents"], {
                                    children: nodePluginCollections?.map((nodePluginCollection_0, index)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__O__as__Stack$3e$__["Stack"], {
                                                    role: "group",
                                                    paddingY: 1,
                                                    space: 0,
                                                    children: [
                                                        /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__u__as__MenuItem$3e$__["MenuItem"], {
                                                            paddingY: 2,
                                                            text: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__lt__as__Box$3e$__["Box"], {
                                                                paddingY: 2,
                                                                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__et__as__Text$3e$__["Text"], {
                                                                    muted: !0,
                                                                    size: 1,
                                                                    style: {
                                                                        textTransform: "capitalize"
                                                                    },
                                                                    children: `${nodePluginCollection_0.context.document.name}: ${nodePluginCollection_0.context.field?.name}`
                                                                })
                                                            }),
                                                            onClick: ()=>{
                                                                nodePluginCollection_0.context.node && comlink2?.post("visual-editing/focus", nodePluginCollection_0.context.node);
                                                            }
                                                        }),
                                                        nodePluginCollection_0.exclusive.map((exclusive)=>exclusive.component ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__u__as__MenuItem$3e$__["MenuItem"], {
                                                                paddingY: 2,
                                                                icon: exclusive.icon || /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$5$2e$2$2e$1_react$40$19$2e$2$2e$7$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$Plug$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlugIcon"], {}),
                                                                text: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__lt__as__Box$3e$__["Box"], {
                                                                    paddingY: 2,
                                                                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__et__as__Text$3e$__["Text"], {
                                                                        size: 1,
                                                                        children: exclusive.title || exclusive.name
                                                                    })
                                                                }),
                                                                onClick: ()=>onActivateExclusivePlugin?.(exclusive, nodePluginCollection_0.context)
                                                            }, exclusive.name) : null)
                                                    ]
                                                }),
                                                index < nodePluginCollections.length - 1 && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__f__as__MenuDivider$3e$__["MenuDivider"], {})
                                            ]
                                        }, nodePluginCollection_0.id))
                                })
                            })
                        })
                    })
                })
            ]
        })
    }), $[35] = comlink2, $[36] = draggable, $[37] = handleLabelClick, $[38] = icon, $[39] = menuId, $[40] = nodePluginCollections, $[41] = onActivateExclusivePlugin, $[42] = onMenuOpenChange, $[43] = showMenu, $[44] = title, $[45] = t11) : t11 = $[45];
    let t12;
    $[46] !== nodePluginCollections ? (t12 = nodePluginCollections?.map(_temp4$1), $[46] = nodePluginCollections, $[47] = t12) : t12 = $[47];
    let t13;
    $[48] !== t12 ? (t13 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(HUD, {
        children: t12
    }), $[48] = t12, $[49] = t13) : t13 = $[49];
    let t14;
    $[50] !== t10 || $[51] !== t11 || $[52] !== t13 ? (t14 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$InsertMenu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerEvents"], {
        children: [
            t10,
            t11,
            t13
        ]
    }), $[50] = t10, $[51] = t11, $[52] = t13, $[53] = t14) : t14 = $[53];
    let t15;
    $[54] !== customComponents || $[55] !== resolverContexts.legacyComponentContext ? (t15 = Array.isArray(customComponents) ? customComponents.map((t162, i)=>{
        const { component: Component_1, props: props_0 } = t162;
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component_1, {
            PointerEvents: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$InsertMenu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerEvents"],
            ...resolverContexts.legacyComponentContext,
            ...props_0
        }, i);
    }) : customComponents, $[54] = customComponents, $[55] = resolverContexts.legacyComponentContext, $[56] = t15) : t15 = $[56];
    let t16;
    return $[57] !== t14 || $[58] !== t15 ? (t16 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            t14,
            t15
        ]
    }), $[57] = t14, $[58] = t15, $[59] = t16) : t16 = $[59], t16;
}, ElementOverlay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(function(props) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(39), { draggable, focused, hovered, rect, wasMaybeCollapsed, enableScrollIntoView, inFrame } = props, ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), scrolledIntoViewRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(!1), t0 = `${rect.w}px`, t1 = `${rect.h}px`, t2 = `translate(${rect.x}px, ${rect.y}px)`;
    let t3;
    $[0] !== t0 || $[1] !== t1 || $[2] !== t2 ? (t3 = {
        width: t0,
        height: t1,
        transform: t2
    }, $[0] = t0, $[1] = t1, $[2] = t2, $[3] = t3) : t3 = $[3];
    const style = t3;
    let t4, t5;
    $[4] !== enableScrollIntoView || $[5] !== focused || $[6] !== wasMaybeCollapsed ? (t4 = ()=>{
        if (!scrolledIntoViewRef.current && !wasMaybeCollapsed && focused === !0 && ref.current && enableScrollIntoView) {
            const target = ref.current;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$scroll$2d$into$2d$view$2d$if$2d$needed$40$3$2e$1$2e$0$2f$node_modules$2f$scroll$2d$into$2d$view$2d$if$2d$needed$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(ref.current, {
                behavior: (actions)=>{
                    actions.length !== 0 && target.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                        inline: "nearest"
                    });
                },
                scrollMode: "if-needed",
                block: "center",
                inline: "nearest"
            });
        }
        scrolledIntoViewRef.current = focused === !0;
    }, t5 = [
        focused,
        wasMaybeCollapsed,
        enableScrollIntoView
    ], $[4] = enableScrollIntoView, $[5] = focused, $[6] = wasMaybeCollapsed, $[7] = t4, $[8] = t5) : (t4 = $[7], t5 = $[8]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    const [isNearTop, setIsNearTop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!1);
    let t6;
    $[9] !== hovered ? (t6 = ()=>{
        if (!ref.current || !hovered) return;
        const io = new IntersectionObserver((t72)=>{
            const [intersection] = t72;
            setIsNearTop(intersection.boundingClientRect.top < 0);
        }, {
            threshold: 1
        });
        return io.observe(ref.current), ()=>io.disconnect();
    }, $[9] = hovered, $[10] = t6) : t6 = $[10];
    let t7;
    $[11] !== hovered || $[12] !== isNearTop ? (t7 = [
        hovered,
        isNearTop
    ], $[11] = hovered, $[12] = isNearTop, $[13] = t7) : t7 = $[13], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t6, t7);
    const [activeExclusivePlugin, setActiveExclusivePlugin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t8;
    $[14] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (t8 = ()=>{
        setActiveExclusivePlugin(null), window.dispatchEvent(new CustomEvent("sanity-overlay/exclusive-plugin-closed"));
    }, $[14] = t8) : t8 = $[14];
    const closeExclusivePluginView = t8;
    let t9;
    $[15] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (t9 = (plugin, context)=>{
        setActiveExclusivePlugin({
            plugin,
            context
        });
    }, $[15] = t9) : t9 = $[15];
    const onActivateExclusivePlugin = t9, handleExclusivePluginClick = _temp5$1, ExclusivePluginComponent = activeExclusivePlugin?.plugin.component, [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!1);
    let t10;
    $[16] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (t10 = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startTransition"])(()=>setMenuOpen(!1));
    }, $[16] = t10) : t10 = $[16];
    let t11;
    $[17] !== hovered ? (t11 = [
        hovered
    ], $[17] = hovered, $[18] = t11) : t11 = $[18], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t10, t11);
    let t12;
    $[19] !== ExclusivePluginComponent || $[20] !== menuOpen ? (t12 = menuOpen || ExclusivePluginComponent ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$InsertMenu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverBackground"], {
        onDismiss: closeExclusivePluginView,
        blockScroll: menuOpen
    }) : null, $[19] = ExclusivePluginComponent, $[20] = menuOpen, $[21] = t12) : t12 = $[21];
    const t13 = focused ? "" : void 0, t14 = hovered ? "" : void 0, t15 = isNearTop ? "" : void 0, t16 = draggable ? "" : void 0, t17 = menuOpen ? "" : void 0;
    let t18;
    $[22] !== ExclusivePluginComponent || $[23] !== activeExclusivePlugin || $[24] !== hovered || $[25] !== inFrame || $[26] !== props ? (t18 = ExclusivePluginComponent ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ExclusivePluginContainer, {
        "data-sanity-overlay-element": !0,
        onClick: handleExclusivePluginClick,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ExclusivePluginComponent, {
            ...activeExclusivePlugin.context,
            closeExclusiveView: closeExclusivePluginView
        })
    }) : hovered ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ElementOverlayInner, {
        ...props,
        inFrame,
        onActivateExclusivePlugin,
        onMenuOpenChange: setMenuOpen
    }) : null, $[22] = ExclusivePluginComponent, $[23] = activeExclusivePlugin, $[24] = hovered, $[25] = inFrame, $[26] = props, $[27] = t18) : t18 = $[27];
    let t19;
    $[28] !== style || $[29] !== t13 || $[30] !== t14 || $[31] !== t15 || $[32] !== t16 || $[33] !== t17 || $[34] !== t18 ? (t19 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Root$3, {
        "data-focused": t13,
        "data-hovered": t14,
        "data-flipped": t15,
        "data-draggable": t16,
        "data-menu-open": t17,
        ref,
        style,
        children: t18
    }), $[28] = style, $[29] = t13, $[30] = t14, $[31] = t15, $[32] = t16, $[33] = t17, $[34] = t18, $[35] = t19) : t19 = $[35];
    let t20;
    return $[36] !== t12 || $[37] !== t19 ? (t20 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            t12,
            t19
        ]
    }), $[36] = t12, $[37] = t19, $[38] = t20) : t20 = $[38], t20;
});
function useResolvedNodePlugins(componentContexts, plugins) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    let t0;
    if ($[0] !== componentContexts || $[1] !== plugins) {
        let t1;
        $[3] !== plugins ? (t1 = (componentContext)=>{
            const instance = {
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$SharedStateContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["v4"])(),
                context: componentContext,
                hud: [],
                exclusive: []
            };
            return plugins?.forEach((plugin)=>{
                plugin.guard?.(componentContext) && (plugin.type === "hud" && instance.hud.push(plugin), plugin.type === "exclusive" && instance.exclusive.push(plugin));
            }), instance;
        }, $[3] = plugins, $[4] = t1) : t1 = $[4], t0 = componentContexts.map(t1), $[0] = componentContexts, $[1] = plugins, $[2] = t0;
    } else t0 = $[2];
    return t0;
}
function useCustomComponents(componentContext, componentResolver) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    let t0;
    if ($[0] !== componentContext || $[1] !== componentResolver) {
        bb0: {
            if (!componentContext) {
                t0 = void 0;
                break bb0;
            }
            const resolved = componentResolver?.(componentContext);
            if (!resolved) {
                t0 = void 0;
                break bb0;
            }
            if (isReactElementOverlayComponent(resolved)) {
                t0 = resolved;
                break bb0;
            }
            t0 = (Array.isArray(resolved) ? resolved : [
                resolved
            ]).map(_temp6$1);
        }
        $[0] = componentContext, $[1] = componentResolver, $[2] = t0;
    } else t0 = $[2];
    return t0;
}
function _temp6$1(component) {
    return typeof component == "object" && "component" in component ? component : {
        component,
        props: {}
    };
}
const Link = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(function(props) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8), { inFrame } = props, referer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(_temp7$1, _temp8$1);
    let t0;
    $[0] !== props.href || $[1] !== referer ? (t0 = getLinkHref(props.href, referer), $[0] = props.href, $[1] = referer, $[2] = t0) : t0 = $[2];
    const href = t0, t1 = inFrame ? void 0 : "_blank", t2 = inFrame ? "noopener" : "noopener noreferrer";
    let t3;
    $[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (t3 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ActionOpen, {
        padding: 2,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__et__as__Text$3e$__["Text"], {
            size: 1,
            weight: "medium",
            children: "Open in Studio"
        })
    }), $[3] = t3) : t3 = $[3];
    let t4;
    return $[4] !== href || $[5] !== t1 || $[6] !== t2 ? (t4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__lt__as__Box$3e$__["Box"], {
        as: "a",
        href,
        target: t1,
        rel: t2,
        children: t3
    }), $[4] = href, $[5] = t1, $[6] = t2, $[7] = t4) : t4 = $[7], t4;
});
function _temp$9(ctx) {
    return ctx !== void 0;
}
function _temp2$6(nodePluginCollection) {
    return nodePluginCollection.exclusive.length > 0;
}
function _temp3$2(e) {
    e.stopPropagation();
}
function _temp4$1(nodePluginCollection_1) {
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: nodePluginCollection_1.hud.map((hud)=>{
            const Component_0 = hud.component;
            return Component_0 ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component_0, {
                ...nodePluginCollection_1.context
            }, hud.name) : null;
        })
    }, nodePluginCollection_1.id);
}
function _temp5$1(event) {
    event.stopPropagation();
}
function _temp7$1(onStoreChange) {
    const handlePopState = ()=>onStoreChange();
    return window.addEventListener("popstate", handlePopState), ()=>window.removeEventListener("popstate", handlePopState);
}
function _temp8$1() {
    return window.location.href;
}
const OverlayDragGroupRect = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5), { dragGroupRect } = t0, t1 = `${dragGroupRect.y}px`, t2 = `${dragGroupRect.x}px`, t3 = `${dragGroupRect.w - 1}px`, t4 = `${dragGroupRect.h - 1}px`;
    let t5;
    return $[0] !== t1 || $[1] !== t2 || $[2] !== t3 || $[3] !== t4 ? (t5 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        style: {
            position: "absolute",
            top: t1,
            left: t2,
            width: t3,
            height: t4,
            border: "1px dashed #f0709b",
            pointerEvents: "none"
        }
    }), $[0] = t1, $[1] = t2, $[2] = t3, $[3] = t4, $[4] = t5) : t5 = $[4], t5;
}, markerThickness = 6;
function lerp(v0, v1, t) {
    return v0 * (1 - t) + v1 * t;
}
const OverlayDragInsertMarker = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4), { dragInsertPosition } = t0;
    if (dragInsertPosition === null) return;
    const flow = dragInsertPosition?.left || dragInsertPosition?.right ? "horizontal" : "vertical";
    let x = 0, y = 0, width = 0, height = 0;
    if (flow === "horizontal") {
        const { left, right } = dragInsertPosition;
        if (width = markerThickness, right && left) {
            const startX = left.rect.x + left.rect.w, endX = right.rect.x, offset = Math.min(right.rect.h, left.rect.h) * 0.0125;
            x = lerp(startX, endX, 0.5) - markerThickness / 2, y = left.rect.y + offset, height = Math.min(right.rect.h, left.rect.h) - offset * 2;
        } else if (right && !left) {
            const offset_0 = right.rect.h * 0.0125;
            x = right.rect.x - markerThickness / 2, y = right.rect.y + offset_0, height = right.rect.h - offset_0 * 2;
        } else if (left && !right) {
            const offset_1 = left.rect.h * 0.0125;
            x = left.rect.x + left.rect.w - markerThickness / 2, y = left.rect.y + offset_1, height = left.rect.h - offset_1 * 2;
        }
    } else {
        const { bottom, top } = dragInsertPosition;
        if (bottom && top) {
            const startX_0 = Math.min(top.rect.x, bottom.rect.x), startY = top.rect.y + top.rect.h, endY = bottom.rect.y, offset_2 = Math.min(bottom.rect.w, top.rect.w) * 0.0125;
            height = markerThickness, x = startX_0 + offset_2, y = lerp(startY, endY, 0.5) - markerThickness / 2, width = Math.max(bottom.rect.w, top.rect.w) - offset_2 * 2;
        } else if (bottom && !top) {
            const offset_3 = bottom.rect.w * 0.0125;
            x = bottom.rect.x + offset_3, y = bottom.rect.y - markerThickness / 2, width = bottom.rect.w - offset_3 * 2, height = markerThickness;
        } else if (top && !bottom) {
            const offset_4 = top.rect.w * 0.0125;
            x = top.rect.x + offset_4, y = top.rect.y + top.rect.h - markerThickness / 2, width = top.rect.w - offset_4 * 2, height = markerThickness;
        }
    }
    const t1 = `${width}px`, t2 = `${height}px`, t3 = `translate(${x}px, ${y}px)`;
    let t4;
    return $[0] !== t1 || $[1] !== t2 || $[2] !== t3 ? (t4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        style: {
            position: "absolute",
            width: t1,
            height: t2,
            transform: t3,
            background: "#556bfc",
            border: "2px solid white",
            borderRadius: "999px",
            zIndex: "999999"
        }
    }), $[0] = t1, $[1] = t2, $[2] = t3, $[3] = t4) : t4 = $[3], t4;
}, Root$2 = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$4$2e$3_css$2d$to$2d$react$2d$native$40$3$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"].div.withConfig({
    displayName: "Root",
    componentId: "sc-1vb3dia-0"
})([
    "--drag-preview-opacity:0.98;--drag-preview-skeleton-stroke:#ffffff;@media (prefers-color-scheme:dark){--drag-preview-skeleton-stroke:#383d51;}position:fixed;display:grid;transform:",
    ";width:",
    ";height:",
    ";z-index:9999999;opacity:var(--drag-preview-opacity);cursor:move;.drag-preview-content-wrapper{position:relative;width:100%;height:100%;container-type:inline-size;}[data-ui='card']{position:relative;width:100%;height:100%;}.drag-preview-skeleton{position:absolute;inset:0;rect{stroke:var(--drag-preview-skeleton-stroke);}}.drag-preview-handle{position:absolute;top:4cqmin;left:4cqmin;width:6cqmin;fill:var(--drag-preview-handle-fill);}"
], ({ $scaleFactor, $width, $height })=>`translate(calc(var(--drag-preview-x) - ${$width / 2}px), calc(var(--drag-preview-y) - ${$height / 2}px)) scale(${$scaleFactor})`, ({ $width })=>`${$width}px`, ({ $height })=>`${$height}px`);
function clamp(number, min, max) {
    return number < min ? min : number > max ? max : number;
}
function map(number, inMin, inMax, outMin, outMax) {
    const mapped = (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    return clamp(mapped, outMin, outMax);
}
const OverlayDragPreview = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(50), { skeleton } = t0, maxSkeletonWidth = Math.min(skeleton.maxWidth, window.innerWidth / 2), scaleFactor = skeleton.w > maxSkeletonWidth ? maxSkeletonWidth / skeleton.w : 1, offsetX = skeleton.offsetX * scaleFactor, offsetY = skeleton.offsetY * scaleFactor, prefersDark = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__o__as__usePrefersDark$3e$__["usePrefersDark"])(), theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__st__as__useTheme_v2$3e$__["useTheme_v2"])(), radius = theme.radius[~~map(skeleton.w, 0, 1920, 1, theme.radius.length - 2)];
    let T0, T1, t1, t10, t11, t12, t13, t14, t2, t3, t4, t5, t6, t7, t8, t9;
    if ($[0] !== offsetX || $[1] !== offsetY || $[2] !== prefersDark || $[3] !== radius || $[4] !== scaleFactor || $[5] !== skeleton.childRects || $[6] !== skeleton.h || $[7] !== skeleton.w) {
        const imageRects = skeleton.childRects.filter(_temp$8), textRects = skeleton.childRects.filter(_temp2$5);
        T1 = Root$2, t10 = skeleton.w, t11 = skeleton.h, t12 = offsetX, t13 = offsetY, t14 = scaleFactor, T0 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__W__as__Card$3e$__["Card"], t5 = radius, t6 = 4, t7 = "hidden", t8 = "transparent", t9 = prefersDark ? "dark" : "light", t4 = "drag-preview-content-wrapper", t2 = "drag-preview-skeleton", t3 = `0 0 ${skeleton.w} ${skeleton.h}`, t1 = [
            ...imageRects,
            ...textRects
        ], $[0] = offsetX, $[1] = offsetY, $[2] = prefersDark, $[3] = radius, $[4] = scaleFactor, $[5] = skeleton.childRects, $[6] = skeleton.h, $[7] = skeleton.w, $[8] = T0, $[9] = T1, $[10] = t1, $[11] = t10, $[12] = t11, $[13] = t12, $[14] = t13, $[15] = t14, $[16] = t2, $[17] = t3, $[18] = t4, $[19] = t5, $[20] = t6, $[21] = t7, $[22] = t8, $[23] = t9;
    } else T0 = $[8], T1 = $[9], t1 = $[10], t10 = $[11], t11 = $[12], t12 = $[13], t13 = $[14], t14 = $[15], t2 = $[16], t3 = $[17], t4 = $[18], t5 = $[19], t6 = $[20], t7 = $[21], t8 = $[22], t9 = $[23];
    let t15;
    $[24] !== t1 || $[25] !== theme.color ? (t15 = t1.map((r_1, i)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("rect", {
            x: r_1.x,
            y: r_1.y,
            width: r_1.w,
            height: r_1.h,
            fill: theme.color.skeleton.from
        }, i)), $[24] = t1, $[25] = theme.color, $[26] = t15) : t15 = $[26];
    let t16;
    $[27] !== t15 || $[28] !== t2 || $[29] !== t3 ? (t16 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("svg", {
        className: t2,
        viewBox: t3,
        children: t15
    }), $[27] = t15, $[28] = t2, $[29] = t3, $[30] = t16) : t16 = $[30];
    let t17;
    $[31] !== t16 || $[32] !== t4 ? (t17 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        className: t4,
        children: t16
    }), $[31] = t16, $[32] = t4, $[33] = t17) : t17 = $[33];
    let t18;
    $[34] !== T0 || $[35] !== t17 || $[36] !== t5 || $[37] !== t6 || $[38] !== t7 || $[39] !== t8 || $[40] !== t9 ? (t18 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(T0, {
        radius: t5,
        shadow: t6,
        overflow: t7,
        tone: t8,
        scheme: t9,
        children: t17
    }), $[34] = T0, $[35] = t17, $[36] = t5, $[37] = t6, $[38] = t7, $[39] = t8, $[40] = t9, $[41] = t18) : t18 = $[41];
    let t19;
    return $[42] !== T1 || $[43] !== t10 || $[44] !== t11 || $[45] !== t12 || $[46] !== t13 || $[47] !== t14 || $[48] !== t18 ? (t19 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(T1, {
        $width: t10,
        $height: t11,
        $offsetX: t12,
        $offsetY: t13,
        $scaleFactor: t14,
        children: t18
    }), $[42] = T1, $[43] = t10, $[44] = t11, $[45] = t12, $[46] = t13, $[47] = t14, $[48] = t18, $[49] = t19) : t19 = $[49], t19;
};
function _temp$8(r) {
    return r.tagName === "IMG";
}
function _temp2$5(r_0) {
    return r_0.tagName !== "IMG";
}
const Root$1 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$4$2e$3_css$2d$to$2d$react$2d$native$40$3$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__W__as__Card$3e$__["Card"]).withConfig({
    displayName: "Root",
    componentId: "sc-1ys1jta-0"
})([
    "position:fixed;bottom:2rem;left:2rem;"
]), OverlayMinimapPrompt = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    let t0;
    $[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (t0 = {
        zIndex: "999999"
    }, $[0] = t0) : t0 = $[0];
    let t1;
    return $[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (t1 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Root$1, {
        padding: 2,
        shadow: 2,
        radius: 2,
        style: t0,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__at__as__Flex$3e$__["Flex"], {
            align: "center",
            gap: 2,
            children: [
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__m__as__Hotkeys$3e$__["Hotkeys"], {
                    keys: [
                        "Shift"
                    ]
                }),
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__et__as__Text$3e$__["Text"], {
                    size: 1,
                    children: "Zoom Out"
                }),
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$5$2e$2$2e$1_react$40$19$2e$2$2e$7$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$Expand$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExpandIcon"], {})
            ]
        })
    }), $[1] = t1) : t1 = $[1], t1;
}, elementsReducer = (elements, message)=>{
    const { type } = message;
    switch(type){
        case "element/register":
            return elements.find((e)=>e.id === message.id) ? elements : [
                ...elements,
                {
                    id: message.id,
                    activated: !1,
                    element: message.element,
                    focused: !1,
                    hovered: !1,
                    rect: message.rect,
                    sanity: message.sanity,
                    dragDisabled: message.dragDisabled,
                    targets: message.targets,
                    elementType: message.elementType
                }
            ];
        case "element/activate":
            return elements.map((e)=>e.id === message.id ? {
                    ...e,
                    activated: !0
                } : e);
        case "element/update":
            return elements.map((e)=>e.id === message.id ? {
                    ...e,
                    sanity: message.sanity,
                    rect: message.rect,
                    targets: message.targets,
                    elementType: message.elementType
                } : e);
        case "element/unregister":
            return elements.filter((e)=>e.id !== message.id);
        case "element/deactivate":
            return elements.map((e)=>e.id === message.id ? {
                    ...e,
                    activated: !1,
                    hovered: !1
                } : e);
        case "element/mouseenter":
            return elements.map((e)=>e.id === message.id ? {
                    ...e,
                    rect: message.rect,
                    hovered: !0
                } : {
                    ...e,
                    hovered: !1
                });
        case "element/mouseleave":
            return elements.map((element)=>element.id === message.id ? {
                    ...element,
                    hovered: !1
                } : element);
        case "element/updateRect":
            return elements.map((element)=>element.id === message.id ? {
                    ...element,
                    rect: message.rect
                } : element);
        case "element/click":
            return elements.map((e)=>({
                    ...e,
                    focused: e.id === message.id && "clicked"
                }));
        case "overlay/reset-mouse-state":
            return elements.map((e)=>({
                    ...e,
                    focused: !1,
                    hovered: !1
                }));
        case "overlay/blur":
            return elements.map((e)=>({
                    ...e,
                    focused: !1
                }));
        case "presentation/blur":
            return elements.map((e)=>({
                    ...e,
                    focused: !1
                }));
        case "presentation/focus":
            {
                const clickedElement = elements.find((e)=>e.focused === "clicked");
                return elements.map((e)=>{
                    const focused = "path" in e.sanity && e.sanity.id === message.data.id && e.sanity.path === message.data.path;
                    return clickedElement && e === clickedElement && focused ? e : {
                        ...e,
                        // Mark as a dupe if another matching item has been clicked to prevent
                        // scrolling, otherwise just set focus as a boolean
                        focused: focused && clickedElement ? "duplicate" : focused
                    };
                });
            }
        default:
            return elements;
    }
};
function overlayStateReducer(state, message) {
    const { type } = message;
    let { contextMenu, focusPath, perspective, variant, isDragging, dragInsertPosition, dragShowMinimap, dragShowMinimapPrompt, dragSkeleton, dragMinimapTransition, dragGroupRect } = state, wasMaybeCollapsed = !1;
    if (type === "presentation/focus") {
        const prevFocusPath = state.focusPath;
        focusPath = message.data.path, prevFocusPath !== focusPath && (wasMaybeCollapsed = prevFocusPath.slice(focusPath.length).startsWith("["));
    }
    return type === "presentation/perspective" && (perspective = message.data.perspective, variant = message.data.variant || void 0), type === "element/contextmenu" && ("sanity" in message ? contextMenu = {
        node: message.sanity,
        position: message.position
    } : contextMenu = null), (type === "element/click" || type === "element/mouseleave" || type === "overlay/blur" || type === "presentation/blur" || type === "presentation/focus") && (contextMenu = null), type === "overlay/dragUpdateInsertPosition" && (dragInsertPosition = message.insertPosition), type === "overlay/dragStart" && (isDragging = !0), message.type === "overlay/dragUpdateSkeleton" && (dragSkeleton = message.skeleton), type === "overlay/dragEnd" && (isDragging = !1), message.type === "overlay/dragToggleMinimapPrompt" && (dragShowMinimapPrompt = message.display), type === "overlay/dragStartMinimapTransition" && (dragMinimapTransition = !0), type === "overlay/dragEndMinimapTransition" && (dragMinimapTransition = !1), type === "overlay/dragUpdateGroupRect" && (dragGroupRect = message.groupRect), type === "overlay/dragToggleMinimap" && (dragShowMinimap = message.display), {
        ...state,
        contextMenu,
        elements: elementsReducer(state.elements, message),
        dragInsertPosition,
        dragSkeleton,
        dragGroupRect,
        isDragging,
        focusPath,
        perspective,
        variant,
        wasMaybeCollapsed,
        dragShowMinimap,
        dragShowMinimapPrompt,
        dragMinimapTransition
    };
}
const PreviewSnapshotsProvider = function(props) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13), { comlink: comlink2, children } = props;
    let t0;
    $[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (t0 = [], $[0] = t0) : t0 = $[0];
    const [previewSnapshots, setPreviewSnapshots] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    $[1] !== comlink2 ? (t1 = async (signal)=>{
        if (comlink2) try {
            const response = await comlink2.fetch("visual-editing/preview-snapshots", void 0, {
                signal,
                suppressWarnings: !0
            });
            setPreviewSnapshots(response.snapshots);
        } catch  {}
    }, $[1] = comlink2, $[2] = t1) : t1 = $[2];
    const fetchPreviewSnapshots = t1;
    let t2, t3;
    $[3] !== comlink2 || $[4] !== fetchPreviewSnapshots ? (t2 = ()=>{
        if (!comlink2) return;
        const previewSapshotsFetch = new AbortController(), unsub = comlink2.onStatus(()=>{
            fetchPreviewSnapshots(previewSapshotsFetch.signal);
        }, "connected");
        return ()=>{
            previewSapshotsFetch.abort(), unsub();
        };
    }, t3 = [
        comlink2,
        fetchPreviewSnapshots
    ], $[3] = comlink2, $[4] = fetchPreviewSnapshots, $[5] = t2, $[6] = t3) : (t2 = $[5], t3 = $[6]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4, t5;
    $[7] !== comlink2 ? (t4 = ()=>comlink2?.on("presentation/preview-snapshots", (data)=>{
            setPreviewSnapshots(data.snapshots);
        }), t5 = [
        comlink2
    ], $[7] = comlink2, $[8] = t4, $[9] = t5) : (t4 = $[8], t5 = $[9]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    const context = previewSnapshots;
    let t6;
    return $[10] !== children || $[11] !== context ? (t6 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PreviewSnapshotsContext.Provider, {
        value: context,
        children
    }), $[10] = children, $[11] = context, $[12] = t6) : t6 = $[12], t6;
};
function isSanityNode(node) {
    return "path" in node;
}
function isDocumentSchemaType(type) {
    return type.type === "document";
}
function isTypeSchemaType(type) {
    return type.type === "type";
}
function popUnkeyedPathSegments(path) {
    return path.split(".").toReversed().reduce((acc, part)=>acc.length ? [
            part,
            ...acc
        ] : part.includes("[_key==") ? [
            part
        ] : [], []).join(".");
}
function getPathsWithUnresolvedTypes(elements) {
    return elements.reduce((acc, element)=>{
        const { sanity } = element;
        if (!("id" in sanity) || !sanity.path.includes("[_key==")) return acc;
        const path = popUnkeyedPathSegments(sanity.path);
        return acc.find((item)=>item.id === sanity.id && item.path === path) || acc.push({
            id: sanity.id,
            path
        }), acc;
    }, []);
}
const SchemaProvider = function(props) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(22), { comlink: comlink2, children, elements } = props;
    let t0;
    $[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (t0 = /* @__PURE__ */ new Map(), $[0] = t0) : t0 = $[0];
    const [resolvedTypes, setResolvedTypes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0), [schema, setSchema] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t1, t2;
    $[1] !== comlink2 ? (t1 = ()=>{
        if (!comlink2) return;
        const fetchSchema = async function(signal) {
            if (comlink2) try {
                const response = await comlink2.fetch("visual-editing/schema", void 0, {
                    signal,
                    suppressWarnings: !0
                });
                setSchema(response.schema);
            } catch  {}
        }, schemaFetch = new AbortController(), unsub = comlink2.onStatus(()=>{
            fetchSchema(schemaFetch.signal);
        }, "connected");
        return ()=>{
            schemaFetch.abort(), unsub();
        };
    }, t2 = [
        comlink2
    ], $[1] = comlink2, $[2] = t1, $[3] = t2) : (t1 = $[2], t2 = $[3]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    $[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (t3 = [], $[4] = t3) : t3 = $[4];
    const reportedPathsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(t3), t4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeferredValue"])(elements);
    let t5;
    $[5] !== t4 ? (t5 = getPathsWithUnresolvedTypes(t4), $[5] = t4, $[6] = t5) : t5 = $[6];
    const paths = t5, controllerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t6, t7;
    $[7] !== comlink2 || $[8] !== paths ? (t6 = ()=>{
        if (!paths.length || !comlink2) return;
        const reportPaths = async (paths_0, signal_0)=>{
            const initialReportedPaths = reportedPathsRef.current;
            try {
                reportedPathsRef.current = paths_0;
                const response_0 = await comlink2.fetch("visual-editing/schema-union-types", {
                    paths: paths_0
                }, {
                    signal: signal_0,
                    suppressWarnings: !0
                });
                if (signal_0.aborted) return;
                setResolvedTypes(response_0.types), controllerRef.current = null;
            } catch  {}
            signal_0.aborted && (reportedPathsRef.current = initialReportedPaths);
        };
        paths.some((p)=>!reportedPathsRef.current.find((t82)=>{
                const { id, path } = t82;
                return id === p.id && path === p.path;
            })) && (controllerRef.current?.abort(), controllerRef.current = new AbortController(), reportPaths(paths, controllerRef.current.signal));
    }, t7 = [
        comlink2,
        paths
    ], $[7] = comlink2, $[8] = paths, $[9] = t6, $[10] = t7) : (t6 = $[9], t7 = $[10]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t6, t7);
    let t8;
    $[11] !== schema ? (t8 = (node, _type)=>{
        const type = _type || "document";
        if (!schema || typeof node != "string" && (!isSanityNode(node) || !Array.isArray(schema))) return;
        const name = typeof node == "string" ? node : node.type, filter = type === "document" ? isDocumentSchemaType : isTypeSchemaType;
        return schema.filter(filter).find((schemaType)=>schemaType.name === name);
    }, $[11] = schema, $[12] = t8) : t8 = $[12];
    const getType = t8;
    let t9;
    $[13] !== getType || $[14] !== resolvedTypes ? (t9 = (node_0)=>{
        if (!isSanityNode(node_0)) return {
            field: void 0,
            parent: void 0
        };
        const schemaType_0 = getType(node_0);
        if (!schemaType_0) return {
            field: void 0,
            parent: void 0
        };
        function fieldFromPath(schemaType_1, path_0, parent, t102) {
            const prevPath = t102 === void 0 ? [] : t102;
            if (!schemaType_1) return {
                field: void 0,
                parent: void 0
            };
            const [next, ...rest] = path_0;
            if ("fields" in schemaType_1) {
                const objectField = schemaType_1.fields[next];
                if (!objectField && "rest" in schemaType_1) return fieldFromPath(schemaType_1.rest, path_0, schemaType_1, prevPath);
                if (!rest.length) return {
                    field: objectField,
                    parent
                };
                if (!objectField) throw new Error(`[@sanity/visual-editing] No field could be resolved at path: "${[
                    ...prevPath,
                    ...path_0
                ].join(".")}"`);
                return fieldFromPath(objectField.value, rest, schemaType_1, [
                    ...prevPath,
                    next
                ]);
            } else {
                if (schemaType_1.type === "array") return fieldFromPath(schemaType_1.of, path_0, schemaType_1, prevPath);
                if (schemaType_1.type === "arrayItem") return rest.length ? fieldFromPath(schemaType_1.value, rest, schemaType_1, [
                    ...prevPath,
                    next
                ]) : {
                    field: schemaType_1,
                    parent
                };
                if (schemaType_1.type === "union") {
                    const name_0 = next.startsWith("[_key==") ? resolvedTypes?.get(node_0.id)?.get([
                        prevPath.join("."),
                        next
                    ].filter(Boolean).join("")) : next;
                    return fieldFromPath(schemaType_1.of.find((item)=>item.type === "unionOption" ? item.name === name_0 : item), rest, schemaType_1, [
                        ...prevPath,
                        next
                    ]);
                } else {
                    if (schemaType_1.type === "unionOption") return next ? fieldFromPath(schemaType_1.value, path_0, schemaType_1, prevPath) : {
                        field: schemaType_1,
                        parent
                    };
                    if (schemaType_1.type === "inline") {
                        const type_0 = getType(schemaType_1.name, "type");
                        return fieldFromPath(type_0.value, path_0, schemaType_1, prevPath);
                    }
                }
            }
            throw new Error(`[@sanity/visual-editing] No field could be resolved at path: "${[
                ...prevPath,
                ...path_0
            ].join(".")}"`);
        }
        const nodePath = node_0.path.split(".").flatMap(_temp$7);
        try {
            return fieldFromPath(schemaType_0, nodePath, void 0);
        } catch (t112) {
            const e = t112;
            return e instanceof Error && console.warn(e.message), {
                field: void 0,
                parent: void 0
            };
        }
    }, $[13] = getType, $[14] = resolvedTypes, $[15] = t9) : t9 = $[15];
    const getField = t9;
    let t10;
    $[16] !== getField || $[17] !== getType ? (t10 = {
        getField,
        getType
    }, $[16] = getField, $[17] = getType, $[18] = t10) : t10 = $[18];
    const context = t10;
    let t11;
    return $[19] !== children || $[20] !== context ? (t11 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SchemaContext.Provider, {
        value: context,
        children
    }), $[19] = children, $[20] = context, $[21] = t11) : t11 = $[21], t11;
};
function _temp$7(part) {
    return part.includes("[") ? part.split(/(\[.+\])/, 2) : [
        part
    ];
}
const createStore = (initialState)=>{
    let state = initialState;
    const getState = ()=>state, listeners2 = /* @__PURE__ */ new Set();
    return {
        getState,
        setState: (fn)=>{
            state = fn(state), listeners2.forEach((l)=>l());
        },
        subscribe: (listener)=>(listeners2.add(listener), ()=>listeners2.delete(listener))
    };
}, store = createStore({}), SharedStateProvider = (props)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11), { comlink: comlink2, children } = props;
    let t0, t1;
    $[0] !== comlink2 ? (t0 = ()=>comlink2?.on("presentation/shared-state", _temp$6), t1 = [
        comlink2
    ], $[0] = comlink2, $[1] = t0, $[2] = t1) : (t0 = $[1], t1 = $[2]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2, t3;
    $[3] !== comlink2 ? (t2 = ()=>{
        (async function() {
            const value = await comlink2?.fetch("visual-editing/shared-state", void 0, {
                suppressWarnings: !0
            });
            value && store.setState(()=>value.state);
        })().catch(_temp2$4);
    }, t3 = [
        comlink2
    ], $[3] = comlink2, $[4] = t2, $[5] = t3) : (t2 = $[4], t3 = $[5]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    $[6] !== comlink2 ? (t4 = {
        comlink: comlink2,
        store
    }, $[6] = comlink2, $[7] = t4) : t4 = $[7];
    const value_0 = t4;
    let t5;
    return $[8] !== children || $[9] !== value_0 ? (t5 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$SharedStateContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SharedStateContext"].Provider, {
        value: value_0,
        children
    }), $[8] = children, $[9] = value_0, $[10] = t5) : t5 = $[10], t5;
};
function _temp$6(data) {
    "value" in data ? store.setState((prev)=>({
            ...prev,
            [data.key]: data.value
        })) : store.setState((prev_0)=>Object.fromEntries(Object.entries(prev_0).filter((t0)=>{
            const [key] = t0;
            return key !== data.key;
        })));
}
function _temp2$4(reason) {
    console.debug(reason), console.warn("[@sanity/visual-editing]: Failed to fetch shared state. Check your version of `sanity` is up-to-date");
}
const TelemetryProvider = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5), { children, comlink: comlink2 } = t0;
    let t1;
    $[0] !== comlink2 ? (t1 = (name, data)=>{
        if (!comlink2) return;
        const event = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$InsertMenu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["events"][name];
        if (event) comlink2.post("visual-editing/telemetry-log", {
            event,
            data
        });
        else throw new Error(`Telemetry event: ${name} does not exist`);
    }, $[0] = comlink2, $[1] = t1) : t1 = $[1];
    const log = t1;
    let t2;
    return $[2] !== children || $[3] !== log ? (t2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$InsertMenu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TelemetryContext"].Provider, {
        value: log,
        children
    }), $[2] = children, $[3] = log, $[4] = t2) : t2 = $[4], t2;
};
function useController(element, handler, inFrame, inPopUp) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7), overlayController = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(void 0), optimisticActorReady = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOptimisticActorReady"])();
    let t0, t1;
    return $[0] !== element || $[1] !== handler || $[2] !== inFrame || $[3] !== inPopUp || $[4] !== optimisticActorReady ? (t0 = ()=>{
        if (element) return overlayController.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$SharedStateContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createOverlayController"])({
            handler,
            overlayElement: element,
            inFrame,
            inPopUp,
            optimisticActorReady
        }), ()=>{
            overlayController.current?.destroy(), overlayController.current = void 0;
        };
    }, t1 = [
        element,
        handler,
        inFrame,
        inPopUp,
        optimisticActorReady
    ], $[0] = element, $[1] = handler, $[2] = inFrame, $[3] = inPopUp, $[4] = optimisticActorReady, $[5] = t0, $[6] = t1) : (t0 = $[5], t1 = $[6]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1), overlayController;
}
function usePerspectiveSync(comlink2, dispatch, onPerspectiveChange, onVariantChange) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14), handlesPerspectiveChange = !!onPerspectiveChange, handlesVariantChange = !!onVariantChange;
    let t0;
    $[0] !== dispatch || $[1] !== onPerspectiveChange || $[2] !== onVariantChange ? (t0 = (data)=>{
        dispatch({
            type: "presentation/perspective",
            data
        }), onPerspectiveChange?.(data.perspective), onVariantChange?.(data.variant || void 0);
    }, $[0] = dispatch, $[1] = onPerspectiveChange, $[2] = onVariantChange, $[3] = t0) : t0 = $[3];
    const handlePerspective = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffectEvent"])(t0);
    let t1;
    $[4] !== comlink2 || $[5] !== handlePerspective || $[6] !== handlesPerspectiveChange || $[7] !== handlesVariantChange ? (t1 = ()=>{
        const controller = new AbortController();
        comlink2?.fetch("visual-editing/fetch-perspective", {
            handlesPerspectiveChange,
            handlesVariantChange
        }, {
            signal: controller.signal,
            suppressWarnings: !0
        }).then((data_0)=>{
            handlePerspective(data_0);
        }).catch(_temp$5);
        const unsub = comlink2?.on("presentation/perspective", (data_1)=>{
            handlePerspective(data_1);
        });
        return ()=>{
            unsub?.(), controller.abort();
        };
    }, $[4] = comlink2, $[5] = handlePerspective, $[6] = handlesPerspectiveChange, $[7] = handlesVariantChange, $[8] = t1) : t1 = $[8];
    let t2;
    $[9] !== comlink2 || $[10] !== dispatch || $[11] !== handlesPerspectiveChange || $[12] !== handlesVariantChange ? (t2 = [
        comlink2,
        dispatch,
        handlesPerspectiveChange,
        handlesVariantChange
    ], $[9] = comlink2, $[10] = dispatch, $[11] = handlesPerspectiveChange, $[12] = handlesVariantChange, $[13] = t2) : t2 = $[13], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
}
function _temp$5() {}
function orderSanityNodesByPosition(elements) {
    const sorted = [
        ...elements
    ].sort((elementA, elementB)=>{
        const yDiff = elementA.rect.y - elementB.rect.y;
        return yDiff !== 0 ? yDiff : elementA.rect.x - elementB.rect.x;
    }), seen = /* @__PURE__ */ new Set();
    return sorted.reduce((acc, element)=>{
        const { sanity } = element;
        return !sanity || !("id" in sanity) || seen.has(sanity.id) || (seen.add(sanity.id), acc.push(sanity)), acc;
    }, []);
}
function useReportDocuments(comlink2, elements, perspective, variant) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8), lastReported = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(void 0);
    let t0;
    $[0] !== comlink2 ? (t0 = (documents, perspective_0, variant_0)=>{
        comlink2?.post("visual-editing/documents", {
            documents,
            perspective: perspective_0,
            variant: variant_0
        });
    }, $[0] = comlink2, $[1] = t0) : t0 = $[1];
    const reportDocuments = t0;
    let t1, t2;
    $[2] !== elements || $[3] !== perspective || $[4] !== reportDocuments || $[5] !== variant ? (t1 = ()=>{
        const orderedNodes = orderSanityNodesByPosition(elements), orderedIds = orderedNodes.map(_temp$4), lastOrderedIds = lastReported.current?.orderedIds;
        if (!lastOrderedIds || lastOrderedIds.length !== orderedIds.length || orderedIds.some((id, index)=>id !== lastOrderedIds[index]) || perspective !== lastReported.current?.perspective || variant !== lastReported.current?.variant) {
            const documentsOnPage = orderedNodes.map(_temp2$3);
            lastReported.current = {
                orderedIds,
                perspective,
                variant
            }, reportDocuments(documentsOnPage, perspective, variant);
        }
    }, t2 = [
        elements,
        perspective,
        variant,
        reportDocuments
    ], $[2] = elements, $[3] = perspective, $[4] = reportDocuments, $[5] = variant, $[6] = t1, $[7] = t2) : (t1 = $[6], t2 = $[7]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
}
function _temp2$3(node_0) {
    const { id: _id, type, projectId: _projectId, dataset: _dataset } = node_0;
    return _projectId && _dataset ? {
        _id,
        _type: type,
        _projectId,
        _dataset
    } : {
        _id,
        _type: type
    };
}
function _temp$4(node) {
    return node.id;
}
const Root = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$4$2e$3_css$2d$to$2d$react$2d$native$40$3$2e$2$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2$2e$7$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"].div.withConfig({
    displayName: "Root",
    componentId: "sc-dwbgdv-0"
})([
    "background-color:transparent;direction:ltr;inset:0;pointer-events:none;position:absolute;width:100%;height:100%;z-index:",
    ";"
], ({ $zIndex })=>$zIndex ?? "9999999");
function raf2(fn) {
    let r0, r1;
    return r0 = requestAnimationFrame(()=>{
        r1 = requestAnimationFrame(fn);
    }), ()=>{
        r0 !== void 0 && cancelAnimationFrame(r0), r1 !== void 0 && cancelAnimationFrame(r1);
    };
}
const DocumentReporter = (props)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8), { documentIds } = props;
    let t0;
    $[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (t0 = [], $[0] = t0) : t0 = $[0];
    const [uniqueIds, setUniqueIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1, t2;
    $[1] !== documentIds ? (t1 = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startTransition"])(()=>setUniqueIds((prev)=>{
                const next = Array.from(new Set(documentIds));
                return prev.length === next.length && prev.reduce(_temp$3, next)?.length === 0 ? prev : next;
            }));
    }, t2 = [
        documentIds
    ], $[1] = documentIds, $[2] = t1, $[3] = t2) : (t1 = $[2], t2 = $[3]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    const actor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOptimisticActor"])();
    let t3, t4;
    return $[4] !== actor || $[5] !== uniqueIds ? (t3 = ()=>{
        for (const id_0 of uniqueIds)actor.send({
            type: "observe",
            documentId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$client$40$7$2e$26$2e$2$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$_chunks$2d$es$2f$resolveEditInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDraftId"])(id_0)
        }), actor.send({
            type: "observe",
            documentId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$client$40$7$2e$26$2e$2$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$_chunks$2d$es$2f$resolveEditInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPublishedId"])(id_0)
        });
        return ()=>{
            for (const id_1 of uniqueIds)actor.send({
                type: "unobserve",
                documentId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$client$40$7$2e$26$2e$2$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$_chunks$2d$es$2f$resolveEditInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDraftId"])(id_1)
            }), actor.send({
                type: "unobserve",
                documentId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$client$40$7$2e$26$2e$2$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$_chunks$2d$es$2f$resolveEditInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPublishedId"])(id_1)
            });
        };
    }, t4 = [
        actor,
        uniqueIds
    ], $[4] = actor, $[5] = uniqueIds, $[6] = t3, $[7] = t4) : (t3 = $[6], t4 = $[7]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4), null;
}, OverlaysController = (props)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12), { comlink: comlink2, dispatch, inFrame, inPopUp, onDrag, overlayEnabled, rootElement } = props, { dispatchDragEndEvent } = useDragEndEvents(), sendTelemetry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$InsertMenu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTelemetry"])();
    let t0;
    $[0] !== comlink2 || $[1] !== dispatch || $[2] !== dispatchDragEndEvent || $[3] !== onDrag || $[4] !== sendTelemetry ? (t0 = (message)=>{
        if (message.type === "element/click") {
            const { sanity } = message;
            comlink2?.post("visual-editing/focus", sanity), sendTelemetry("Visual Editing Overlay Clicked", null);
        } else if (message.type === "overlay/activate") comlink2?.post("visual-editing/toggle", {
            enabled: !0
        });
        else if (message.type === "overlay/deactivate") comlink2?.post("visual-editing/toggle", {
            enabled: !1
        });
        else if (message.type === "overlay/dragEnd") {
            const { insertPosition, target, dragGroup, flow, preventInsertDefault } = message;
            dispatchDragEndEvent({
                insertPosition,
                target,
                dragGroup,
                flow,
                preventInsertDefault
            }), insertPosition && sendTelemetry("Visual Editing Drag Sequence Completed", null);
        } else if (message.type === "overlay/dragUpdateCursorPosition") {
            onDrag(message.x, message.y);
            return;
        } else if (message.type === "overlay/dragToggleMinimap" && message.display === !0) sendTelemetry("Visual Editing Drag Minimap Enabled", null);
        else if (message.type === "overlay/setCursor") {
            const { element, cursor } = message;
            cursor ? element.style.cursor = cursor : element.style.removeProperty("cursor");
        }
        dispatch(message);
    }, $[0] = comlink2, $[1] = dispatch, $[2] = dispatchDragEndEvent, $[3] = onDrag, $[4] = sendTelemetry, $[5] = t0) : t0 = $[5];
    const controller = useController(rootElement, t0, inFrame, inPopUp);
    let t1;
    $[6] !== controller.current || $[7] !== overlayEnabled ? (t1 = ()=>{
        overlayEnabled ? controller.current?.activate() : controller.current?.deactivate();
    }, $[6] = controller.current, $[7] = overlayEnabled, $[8] = t1) : t1 = $[8];
    let t2;
    return $[9] !== controller || $[10] !== overlayEnabled ? (t2 = [
        controller,
        overlayEnabled
    ], $[9] = controller, $[10] = overlayEnabled, $[11] = t2) : t2 = $[11], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2), null;
};
function Overlays(props) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(77), { comlink: comlink2, comlinkStatus, componentResolver: _componentResolver, inFrame, inPopUp, zIndex, onPerspectiveChange, onVariantChange } = props, prefersDark = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__o__as__usePrefersDark$3e$__["usePrefersDark"])();
    let t0;
    $[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (t0 = {
        contextMenu: null,
        dragInsertPosition: null,
        dragShowMinimap: !1,
        dragShowMinimapPrompt: !1,
        dragSkeleton: null,
        elements: [],
        focusPath: "",
        isDragging: !1,
        perspective: "published",
        variant: void 0,
        wasMaybeCollapsed: !1,
        dragMinimapTransition: !1,
        dragGroupRect: null
    }, $[0] = t0) : t0 = $[0];
    const [t1, dispatch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducer"])(overlayStateReducer, t0), { contextMenu, dragInsertPosition, dragShowMinimap, dragShowMinimapPrompt, dragSkeleton, elements, isDragging, perspective, variant, wasMaybeCollapsed, dragMinimapTransition, dragGroupRect } = t1, [rootElement, setRootElement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), [overlayEnabled, setOverlayEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!0);
    let t2, t3;
    $[1] !== comlink2 ? (t2 = ()=>{
        const unsubs = [
            comlink2?.on("presentation/focus", (data)=>{
                dispatch({
                    type: "presentation/focus",
                    data
                });
            }),
            comlink2?.on("presentation/blur", (data_0)=>{
                dispatch({
                    type: "presentation/blur",
                    data: data_0
                });
            }),
            comlink2?.on("presentation/toggle-overlay", ()=>{
                setOverlayEnabled(_temp2$2);
            })
        ].filter(Boolean);
        return ()=>unsubs.forEach(_temp3$1);
    }, t3 = [
        comlink2
    ], $[1] = comlink2, $[2] = t2, $[3] = t3) : (t2 = $[2], t3 = $[3]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3), usePerspectiveSync(comlink2, dispatch, onPerspectiveChange, onVariantChange), useReportDocuments(comlink2, elements, perspective, variant);
    let t4;
    $[4] !== rootElement ? (t4 = (x, y)=>{
        rootElement && (rootElement.style.setProperty("--drag-preview-x", `${x}px`), rootElement.style.setProperty("--drag-preview-y", `${y - window.scrollY}px`));
    }, $[4] = rootElement, $[5] = t4) : t4 = $[5];
    const updateDragPreviewCustomProps = t4;
    let t5, t6;
    $[6] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (t5 = ()=>{
        const handleClick = _temp4;
        let altPressed = !1;
        const handleKeyUp = (e)=>{
            isAltKey(e) && altPressed && (altPressed = !1, setOverlayEnabled(_temp5));
        }, handleKeydown = (e_0)=>{
            if (isAltKey(e_0)) {
                if (e_0.ctrlKey || e_0.metaKey || e_0.shiftKey) return;
                altPressed || (altPressed = !0, setOverlayEnabled(_temp6));
            }
            isHotkey([
                "mod",
                "\\"
            ], e_0) && setOverlayEnabled(_temp7);
        }, handleWindowBlur = ()=>{
            altPressed && (altPressed = !1, setOverlayEnabled(_temp8));
        };
        return window.addEventListener("click", handleClick), window.addEventListener("keydown", handleKeydown), window.addEventListener("keyup", handleKeyUp), window.addEventListener("blur", handleWindowBlur), ()=>{
            window.removeEventListener("click", handleClick), window.removeEventListener("keydown", handleKeydown), window.removeEventListener("keyup", handleKeyUp), window.removeEventListener("blur", handleWindowBlur);
        };
    }, t6 = [
        setOverlayEnabled
    ], $[6] = t5, $[7] = t6) : (t5 = $[6], t6 = $[7]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    const [overlaysFlash, setOverlaysFlash] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!1), [fadingOut, setFadingOut] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!1), fadeOutTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(void 0);
    let t7, t8;
    $[8] !== overlayEnabled ? (t7 = ()=>{
        if (overlayEnabled) return raf2(()=>{
            setOverlaysFlash(!0), raf2(()=>{
                setFadingOut(!0), fadeOutTimeoutRef.current = setTimeout(()=>{
                    setFadingOut(!1), setOverlaysFlash(!1);
                }, 1500);
            });
        });
        fadeOutTimeoutRef.current && (clearTimeout(fadeOutTimeoutRef.current), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startTransition"])(()=>{
            setOverlaysFlash(!1), setFadingOut(!1);
        }));
    }, t8 = [
        overlayEnabled
    ], $[8] = overlayEnabled, $[9] = t7, $[10] = t8) : (t7 = $[9], t8 = $[10]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t7, t8);
    let t9;
    $[11] !== elements ? (t9 = elements.flatMap(_temp9), $[11] = elements, $[12] = t9) : t9 = $[12];
    const documentIds = t9;
    let t10;
    $[13] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (t10 = ()=>{
        dispatch({
            type: "overlay/blur"
        });
    }, $[13] = t10) : t10 = $[13];
    const closeContextMenu = t10, optimisticActorReady = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOptimisticActorReady"])(), componentResolver = optimisticActorReady ? _componentResolver : void 0, [shouldHideActions, setShouldHideActions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!1);
    !shouldHideActions && inFrame && comlinkStatus === "connected" && setShouldHideActions(!0);
    let t11;
    bb0: {
        if (isDragging) {
            let t123;
            $[14] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (t123 = [], $[14] = t123) : t123 = $[14], t11 = t123;
            break bb0;
        }
        let t122;
        $[15] !== comlink2 || $[16] !== componentResolver || $[17] !== dragMinimapTransition || $[18] !== dragShowMinimap || $[19] !== elements || $[20] !== inFrame || $[21] !== isDragging || $[22] !== optimisticActorReady || $[23] !== props.plugins || $[24] !== shouldHideActions || $[25] !== wasMaybeCollapsed ? (t122 = elements.filter(_temp0).map((t132)=>{
            const { id, element: element_0, focused, hovered, rect, sanity, dragDisabled, targets, elementType } = t132, draggable = !dragDisabled && !!element_0.getAttribute("data-sanity") && optimisticActorReady && elements.some((e_2)=>"id" in e_2.sanity && "id" in sanity ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$SharedStateContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanityNodesExistInSameArray"])(e_2.sanity, sanity) && e_2.sanity.path !== sanity.path : !1);
            return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ElementOverlay, {
                comlink: comlink2,
                componentResolver,
                plugins: props.plugins,
                element: element_0,
                enableScrollIntoView: !isDragging && !dragMinimapTransition && !dragShowMinimap,
                id,
                focused,
                hovered,
                node: sanity,
                rect,
                showActions: !shouldHideActions,
                draggable,
                isDragging: isDragging || dragMinimapTransition,
                wasMaybeCollapsed: focused && wasMaybeCollapsed,
                targets,
                elementType,
                inFrame
            }, id);
        }), $[15] = comlink2, $[16] = componentResolver, $[17] = dragMinimapTransition, $[18] = dragShowMinimap, $[19] = elements, $[20] = inFrame, $[21] = isDragging, $[22] = optimisticActorReady, $[23] = props.plugins, $[24] = shouldHideActions, $[25] = wasMaybeCollapsed, $[26] = t122) : t122 = $[26], t11 = t122;
    }
    const elementsToRender = t11, t12 = prefersDark ? "dark" : "light", t13 = fadingOut ? "" : void 0, t14 = overlaysFlash ? "" : void 0;
    let t15;
    $[27] !== documentIds || $[28] !== perspective ? (t15 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(DocumentReporter, {
        documentIds,
        perspective
    }), $[27] = documentIds, $[28] = perspective, $[29] = t15) : t15 = $[29];
    let t16;
    $[30] !== comlink2 || $[31] !== inFrame || $[32] !== inPopUp || $[33] !== overlayEnabled || $[34] !== rootElement || $[35] !== updateDragPreviewCustomProps ? (t16 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(OverlaysController, {
        comlink: comlink2,
        dispatch,
        inFrame,
        inPopUp,
        onDrag: updateDragPreviewCustomProps,
        overlayEnabled,
        rootElement
    }), $[30] = comlink2, $[31] = inFrame, $[32] = inPopUp, $[33] = overlayEnabled, $[34] = rootElement, $[35] = updateDragPreviewCustomProps, $[36] = t16) : t16 = $[36];
    let t17;
    $[37] !== contextMenu ? (t17 = contextMenu && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ContextMenu, {
        ...contextMenu,
        onDismiss: closeContextMenu
    }), $[37] = contextMenu, $[38] = t17) : t17 = $[38];
    let t18;
    $[39] !== dragGroupRect || $[40] !== dragInsertPosition || $[41] !== dragMinimapTransition || $[42] !== dragShowMinimapPrompt || $[43] !== isDragging ? (t18 = isDragging && !dragMinimapTransition && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            dragInsertPosition && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(OverlayDragInsertMarker, {
                dragInsertPosition
            }),
            dragShowMinimapPrompt && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(OverlayMinimapPrompt, {}),
            dragGroupRect && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(OverlayDragGroupRect, {
                dragGroupRect
            })
        ]
    }), $[39] = dragGroupRect, $[40] = dragInsertPosition, $[41] = dragMinimapTransition, $[42] = dragShowMinimapPrompt, $[43] = isDragging, $[44] = t18) : t18 = $[44];
    let t19;
    $[45] !== dragSkeleton || $[46] !== isDragging ? (t19 = isDragging && dragSkeleton && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(OverlayDragPreview, {
        skeleton: dragSkeleton
    }), $[45] = dragSkeleton, $[46] = isDragging, $[47] = t19) : t19 = $[47];
    let t20;
    $[48] !== elementsToRender || $[49] !== t13 || $[50] !== t14 || $[51] !== t15 || $[52] !== t16 || $[53] !== t17 || $[54] !== t18 || $[55] !== t19 || $[56] !== zIndex ? (t20 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(Root, {
        "data-fading-out": t13,
        "data-overlays": t14,
        ref: setRootElement,
        $zIndex: zIndex,
        children: [
            t15,
            t16,
            t17,
            elementsToRender,
            t18,
            t19
        ]
    }), $[48] = elementsToRender, $[49] = t13, $[50] = t14, $[51] = t15, $[52] = t16, $[53] = t17, $[54] = t18, $[55] = t19, $[56] = zIndex, $[57] = t20) : t20 = $[57];
    let t21;
    $[58] !== comlink2 || $[59] !== t20 ? (t21 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SharedStateProvider, {
        comlink: comlink2,
        children: t20
    }), $[58] = comlink2, $[59] = t20, $[60] = t21) : t21 = $[60];
    let t22;
    $[61] !== comlink2 || $[62] !== t21 ? (t22 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PreviewSnapshotsProvider, {
        comlink: comlink2,
        children: t21
    }), $[61] = comlink2, $[62] = t21, $[63] = t22) : t22 = $[63];
    let t23;
    $[64] !== comlink2 || $[65] !== elements || $[66] !== t22 ? (t23 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SchemaProvider, {
        comlink: comlink2,
        elements,
        children: t22
    }), $[64] = comlink2, $[65] = elements, $[66] = t22, $[67] = t23) : t23 = $[67];
    let t24;
    $[68] !== rootElement || $[69] !== t23 ? (t24 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__P__as__LayerProvider$3e$__["LayerProvider"], {
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__PortalProvider$3e$__["PortalProvider"], {
            element: rootElement,
            children: t23
        })
    }), $[68] = rootElement, $[69] = t23, $[70] = t24) : t24 = $[70];
    let t25;
    $[71] !== t12 || $[72] !== t24 ? (t25 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__q__as__ThemeProvider$3e$__["ThemeProvider"], {
        scheme: t12,
        theme: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Ft__as__studioTheme$3e$__["studioTheme"],
        tone: "transparent",
        children: t24
    }), $[71] = t12, $[72] = t24, $[73] = t25) : t25 = $[73];
    let t26;
    return $[74] !== comlink2 || $[75] !== t25 ? (t26 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(TelemetryProvider, {
        comlink: comlink2,
        children: t25
    }), $[74] = comlink2, $[75] = t25, $[76] = t26) : t26 = $[76], t26;
}
function _temp0(e_1) {
    return e_1.activated || e_1.focused;
}
function _temp9(element) {
    return "id" in element.sanity ? [
        element.sanity.id
    ] : [];
}
function _temp8(enabled_3) {
    return !enabled_3;
}
function _temp7(enabled_2) {
    return !enabled_2;
}
function _temp6(enabled_1) {
    return !enabled_1;
}
function _temp5(enabled_0) {
    return !enabled_0;
}
function _temp4(event) {
    const target = event.target;
    if (((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__vt__as__isHTMLAnchorElement$3e$__["isHTMLAnchorElement"])(target) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$5$2e$1_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_react$2d$dom$40$19$2e$2$2e$7_react$40$19$2e$2$2e$7_$5f$react$40$19$2e$2_1f242bf9e435109ea368c6a7c7a25116$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2f$portalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__bt__as__isHTMLElement$3e$__["isHTMLElement"])(target) && target.closest("a")) && event.altKey) {
        event.preventDefault(), event.stopPropagation();
        const newEvent = new MouseEvent(event.type, {
            ...event,
            altKey: !1,
            bubbles: !0,
            cancelable: !0
        });
        event.target?.dispatchEvent(newEvent);
    }
}
function _temp3$1(unsub) {
    return unsub();
}
function _temp2$2(enabled) {
    return !enabled;
}
const IS_MAC = typeof window < "u" && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform), MODIFIERS = {
    alt: "altKey",
    ctrl: "ctrlKey",
    mod: IS_MAC ? "metaKey" : "ctrlKey",
    shift: "shiftKey"
};
function isHotkey(keys, event) {
    return keys.every((key)=>MODIFIERS[key] ? event[MODIFIERS[key]] : event.key === key.toUpperCase());
}
function isAltKey(event) {
    return event.key === "Alt";
}
function _temp$3(acc, prevId) {
    return acc.filter((id)=>id !== prevId);
}
const Refresh = (props)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4), { comlink: comlink2, refresh } = props, manualRefreshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0), mutationRefreshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    let t0, t1;
    return $[0] !== comlink2 || $[1] !== refresh ? (t0 = ()=>comlink2.on("presentation/refresh", (data)=>{
            if (data.source === "manual") {
                clearTimeout(manualRefreshRef.current);
                const promise = refresh(data);
                if (promise === !1) return;
                comlink2.post("visual-editing/refreshing", data);
                let timedOut = !1;
                manualRefreshRef.current = window.setTimeout(()=>{
                    comlink2.post("visual-editing/refreshed", data), timedOut = !0;
                }, 3e3), promise?.finally?.(()=>{
                    timedOut || (clearTimeout(manualRefreshRef.current), comlink2.post("visual-editing/refreshed", data));
                });
            } else if (data.source === "mutation") {
                clearTimeout(mutationRefreshRef.current);
                const promise_0 = refresh(data);
                if (promise_0 === !1) return;
                comlink2.post("visual-editing/refreshing", data), mutationRefreshRef.current = window.setTimeout(()=>{
                    const promise_1 = refresh(data);
                    promise_1 !== !1 && (comlink2.post("visual-editing/refreshing", data), promise_1?.finally?.(()=>{
                        comlink2.post("visual-editing/refreshed", data);
                    }) || comlink2.post("visual-editing/refreshed", data));
                }, 1e3), promise_0?.finally?.(()=>{
                    comlink2.post("visual-editing/refreshed", data);
                }) || comlink2.post("visual-editing/refreshed", data);
            }
        }), t1 = [
        comlink2,
        refresh
    ], $[0] = comlink2, $[1] = refresh, $[2] = t0, $[3] = t1) : (t0 = $[2], t1 = $[3]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1), null;
};
function useComlink(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9), active = t0 === void 0 ? !0 : t0, [node, setNode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(), [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    let t1, t2;
    $[0] !== active ? (t1 = ()=>{
        if (!active) return;
        const instance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$comlink$40$4$2e$0$2e$1$2f$node_modules$2f40$sanity$2f$comlink$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createNode"])({
            name: "visual-editing",
            connectTo: "presentation"
        }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$comlink$40$4$2e$0$2e$1$2f$node_modules$2f40$sanity$2f$comlink$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createNodeMachine"])().provide({
            actors: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$presentation$2d$comlink$40$2$2e$2$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$sanity$2b$types$40$6$2e$9$2e$1_$40$types$2b$react$40$19$2e$2$2e$17_$2f$node_modules$2f40$sanity$2f$presentation$2d$comlink$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createCompatibilityActors"])()
        })), unsub = instance.onStatus(()=>setStatus("connected"), "connected");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startTransition"])(()=>setNode(instance));
        const stop = instance.start();
        return ()=>{
            unsub(), stop(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startTransition"])(()=>setNode(void 0));
        };
    }, t2 = [
        active
    ], $[0] = active, $[1] = t1, $[2] = t2) : (t1 = $[1], t2 = $[2]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3, t4;
    $[3] !== status ? (t3 = ()=>{
        if (status === "connected") return;
        const controller = new AbortController();
        return window.addEventListener("message", _temp$2, {
            signal: controller.signal
        }), ()=>{
            controller.abort();
        };
    }, t4 = [
        status
    ], $[3] = status, $[4] = t3, $[5] = t4) : (t3 = $[4], t4 = $[5]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    return $[6] !== node || $[7] !== status ? (t5 = [
        node,
        status
    ], $[6] = node, $[7] = status, $[8] = t5) : t5 = $[8], t5;
}
function _temp$2(t0) {
    const { data, origin } = t0;
    data && typeof data == "object" && "domain" in data && data.domain === "sanity/channels" && "from" in data && data.from === "presentation" && "type" in data && data.type === "presentation/status" && window.parent.postMessage({
        domain: "sanity/channels",
        type: "visual-editing/status",
        data: {
            origin: location.origin
        }
    }, origin);
}
function createSharedListener(comlink2) {
    const incomingConnection$ = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$ReplaySubject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReplaySubject"](1), incomingMutations$ = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Subject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Subject"]();
    return comlink2.fetch("visual-editing/snapshot-welcome", void 0, {
        suppressWarnings: !0
    }).then((data)=>{
        incomingConnection$.next(data.event);
    }).catch(()=>{}), comlink2.on("presentation/snapshot-event", (data)=>{
        data.event.type === "reconnect" && incomingConnection$.next(data.event), data.event.type === "mutation" && incomingMutations$.next(data.event);
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$observable$2f$merge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["merge"])(incomingConnection$, incomingMutations$);
}
function useDatasetMutator(comlink2) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    let t0, t1;
    $[0] !== comlink2 ? (t0 = ()=>{
        if (!comlink2) return;
        const listener = createSharedListener(comlink2), datasetMutator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$optimistic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createDatasetMutator"])(comlink2), mutator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$32$2e$5$2f$node_modules$2f$xstate$2f$dist$2f$raise$2d$0d6481d1$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__c__as__createActor$3e$__["createActor"])(datasetMutator, {
            input: {
                client: {
                    withConfig: _temp$1
                },
                sharedListener: listener
            }
        });
        mutator.start();
        const featuresFetch = new AbortController();
        return comlink2.fetch("visual-editing/features", void 0, {
            signal: featuresFetch.signal,
            suppressWarnings: !0
        }).then((data)=>{
            data.features.optimistic && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setActor"])(mutator);
        }).catch(_temp2$1), ()=>{
            mutator.stop(), featuresFetch.abort();
        };
    }, t1 = [
        comlink2
    ], $[0] = comlink2, $[1] = t0, $[2] = t1) : (t0 = $[1], t1 = $[2]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
}
function _temp2$1() {
    console.warn("[@sanity/visual-editing] Package version mismatch detected: Please update your Sanity studio to prevent potential compatibility issues.");
}
function _temp$1() {}
const LoaderComlink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lazy"])(()=>__turbopack_context__.A("[project]/node_modules/.pnpm/@sanity+visual-editing@5.7.3_@emotion+is-prop-valid@1.4.0_@sanity+client@7.26.2_@types+_44aa6e416023878fa62b01b3252b6fe2/node_modules/@sanity/visual-editing/dist/_chunks-es/LoaderComlink.js [app-client] (ecmascript, async loader)")), VisualEditing = (props)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(44), { components, plugins, history, keepStegaOnCopy, portal: t0, refresh, zIndex, onPerspectiveChange, onVariantChange, onSuspiciousStega } = props, portal = t0 === void 0 ? !0 : t0, [inFrame, setInFrame] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), [inPopUp, setInPopUp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t1, t2;
    $[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (t1 = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startTransition"])(()=>{
            setInFrame((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$presentation$2d$comlink$40$2$2e$2$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$sanity$2b$types$40$6$2e$9$2e$1_$40$types$2b$react$40$19$2e$2$2e$17_$2f$node_modules$2f40$sanity$2f$presentation$2d$comlink$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isMaybePreviewIframe"])()), setInPopUp((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$presentation$2d$comlink$40$2$2e$2$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$sanity$2b$types$40$6$2e$9$2e$1_$40$types$2b$react$40$19$2e$2$2e$17_$2f$node_modules$2f40$sanity$2f$presentation$2d$comlink$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isMaybePreviewWindow"])());
        });
    }, t2 = [], $[0] = t1, $[1] = t2) : (t1 = $[0], t2 = $[1]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3, t4;
    $[2] !== keepStegaOnCopy ? (t3 = ()=>{
        if (!keepStegaOnCopy) return enableStegaCleanOnCopy();
    }, t4 = [
        keepStegaOnCopy
    ], $[2] = keepStegaOnCopy, $[3] = t3, $[4] = t4) : (t3 = $[3], t4 = $[4]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    $[5] !== onSuspiciousStega ? (t5 = (reports)=>onSuspiciousStega?.(reports), $[5] = onSuspiciousStega, $[6] = t5) : t5 = $[6];
    const handleSuspiciousStega = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffectEvent"])(t5), hasSuspiciousStegaCallback = typeof onSuspiciousStega == "function";
    let t6;
    $[7] !== handleSuspiciousStega || $[8] !== hasSuspiciousStegaCallback ? (t6 = ()=>{
        if (hasSuspiciousStegaCallback) return observeSuspiciousStega(handleSuspiciousStega);
    }, $[7] = handleSuspiciousStega, $[8] = hasSuspiciousStegaCallback, $[9] = t6) : t6 = $[9];
    let t7;
    $[10] !== hasSuspiciousStegaCallback ? (t7 = [
        hasSuspiciousStegaCallback
    ], $[10] = hasSuspiciousStegaCallback, $[11] = t7) : t7 = $[11], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t6, t7);
    const [portalElement, setPortalElement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t8, t9;
    $[12] !== portal ? (t8 = ()=>{
        if (portal === !1) return;
        const node = document.createElement("sanity-visual-editing");
        return document.documentElement.appendChild(node), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startTransition"])(()=>setPortalElement(node)), ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startTransition"])(()=>setPortalElement(null)), document.documentElement.contains(node) && document.documentElement.removeChild(node);
        };
    }, t9 = [
        portal
    ], $[12] = portal, $[13] = t8, $[14] = t9) : (t8 = $[13], t9 = $[14]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t8, t9);
    const [comlink2, comlinkStatus] = useComlink(inFrame === !0 || inPopUp === !0);
    useDatasetMutator(comlinkStatus === "connected" ? comlink2 : void 0);
    const hasQueryListeners2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeferredValue"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(subscribeQueryListenerStatus, getQueryListenerStatus, _temp), !1);
    let t10, t11;
    $[15] !== comlinkStatus || $[16] !== inFrame || $[17] !== inPopUp ? (t10 = ()=>{
        if (comlinkStatus === "connected") setEnvironment(inPopUp ? "presentation-window" : "presentation-iframe");
        else if (inFrame || inPopUp) {
            const timeout = setTimeout(_temp2, 1e3);
            return ()=>{
                clearTimeout(timeout), setEnvironment(null);
            };
        } else setEnvironment("standalone");
        return _temp3;
    }, t11 = [
        comlinkStatus,
        inPopUp,
        inFrame
    ], $[15] = comlinkStatus, $[16] = inFrame, $[17] = inPopUp, $[18] = t10, $[19] = t11) : (t10 = $[18], t11 = $[19]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t10, t11);
    let t12;
    $[20] !== comlink2 || $[21] !== comlinkStatus || $[22] !== components || $[23] !== inFrame || $[24] !== inPopUp || $[25] !== onPerspectiveChange || $[26] !== onVariantChange || $[27] !== plugins || $[28] !== zIndex ? (t12 = inFrame !== null && inPopUp !== null && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Overlays, {
        comlink: comlink2,
        comlinkStatus,
        componentResolver: components,
        onPerspectiveChange,
        onVariantChange,
        plugins,
        inFrame,
        inPopUp,
        zIndex
    }), $[20] = comlink2, $[21] = comlinkStatus, $[22] = components, $[23] = inFrame, $[24] = inPopUp, $[25] = onPerspectiveChange, $[26] = onVariantChange, $[27] = plugins, $[28] = zIndex, $[29] = t12) : t12 = $[29];
    let t13;
    $[30] !== comlink2 || $[31] !== history || $[32] !== refresh ? (t13 = comlink2 && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(History, {
                comlink: comlink2,
                history
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Meta, {
                comlink: comlink2
            }),
            refresh && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Refresh, {
                comlink: comlink2,
                refresh
            })
        ]
    }), $[30] = comlink2, $[31] = history, $[32] = refresh, $[33] = t13) : t13 = $[33];
    let t14;
    $[34] !== comlinkStatus || $[35] !== hasQueryListeners2 ? (t14 = comlinkStatus === "connected" && hasQueryListeners2 && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(LoaderComlink, {})
    }), $[34] = comlinkStatus, $[35] = hasQueryListeners2, $[36] = t14) : t14 = $[36];
    let t15;
    $[37] !== t12 || $[38] !== t13 || $[39] !== t14 ? (t15 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            t12,
            t13,
            t14
        ]
    }), $[37] = t12, $[38] = t13, $[39] = t14, $[40] = t15) : t15 = $[40];
    const children = t15;
    if (portal === !1 || !portalElement) return children;
    let t16;
    return $[41] !== children || $[42] !== portalElement ? (t16 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(children, portalElement), $[41] = children, $[42] = portalElement, $[43] = t16) : t16 = $[43], t16;
};
VisualEditing.displayName = "VisualEditing";
function _temp() {
    return !1;
}
function _temp2() {
    return setEnvironment("standalone");
}
function _temp3() {
    return setEnvironment(null);
}
;
}),
"[project]/node_modules/.pnpm/@sanity+visual-editing@5.7.3_@emotion+is-prop-valid@1.4.0_@sanity+client@7.26.2_@types+_44aa6e416023878fa62b01b3252b6fe2/node_modules/@sanity/visual-editing/dist/_chunks-es/context.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "actor",
    ()=>actor,
    "emptyActor",
    ()=>emptyActor,
    "isEmptyActor",
    ()=>isEmptyActor,
    "listeners",
    ()=>listeners,
    "setActor",
    ()=>setActor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$32$2e$5$2f$node_modules$2f$xstate$2f$dist$2f$xstate$2d$actors$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/xstate@5.32.5/node_modules/xstate/dist/xstate-actors.development.esm.js [app-client] (ecmascript)");
;
const emptyActor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$32$2e$5$2f$node_modules$2f$xstate$2f$dist$2f$xstate$2d$actors$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEmptyActor"])();
let actor = emptyActor;
const listeners = /* @__PURE__ */ new Set();
function isEmptyActor(actor2) {
    return actor2 === emptyActor;
}
function setActor(nextActor) {
    actor = nextActor;
    for (const onActorChange of listeners)onActorChange();
}
;
}),
"[project]/node_modules/.pnpm/@sanity+visual-editing@5.7.3_@emotion+is-prop-valid@1.4.0_@sanity+client@7.26.2_@types+_44aa6e416023878fa62b01b3252b6fe2/node_modules/@sanity/visual-editing/dist/_chunks-es/mutations.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "get",
    ()=>get,
    "getArrayDuplicatePatches",
    ()=>getArrayDuplicatePatches,
    "getArrayInsertPatches",
    ()=>getArrayInsertPatches,
    "getArrayItemKeyAndParentPath",
    ()=>getArrayItemKeyAndParentPath,
    "getArrayMovePatches",
    ()=>getArrayMovePatches,
    "getArrayRemovePatches",
    ()=>getArrayRemovePatches,
    "useDocuments",
    ()=>useDocuments,
    "useOptimisticActor",
    ()=>useOptimisticActor,
    "useOptimisticActorReady",
    ()=>useOptimisticActorReady
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.0_@babel+core@7.29.7_@playwright+test@1.62.1_@types+node@26.1.0_babel-plugin-_3b64392720bc9294ad1f40cae38bcee9/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$client$40$7$2e$26$2e$2$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$_chunks$2d$es$2f$resolveEditInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+client@7.26.2/node_modules/@sanity/client/dist/_chunks-es/resolveEditInfo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$18$2e$1_xstate$40$5$2e$32$2e$5$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+mutate@0.18.1_xstate@5.32.5/node_modules/@sanity/mutate/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$presentation$2d$comlink$40$2$2e$2$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$sanity$2b$types$40$6$2e$9$2e$1_$40$types$2b$react$40$19$2e$2$2e$17_$2f$node_modules$2f40$sanity$2f$presentation$2d$comlink$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+presentation-comlink@2.2.0_@sanity+client@7.26.2_@sanity+types@6.9.1_@types+react@19.2.17_/node_modules/@sanity/presentation-comlink/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+visual-editing@5.7.3_@emotion+is-prop-valid@1.4.0_@sanity+client@7.26.2_@types+_44aa6e416023878fa62b01b3252b6fe2/node_modules/@sanity/visual-editing/dist/_chunks-es/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.0_@babel+core@7.29.7_@playwright+test@1.62.1_@types+node@26.1.0_babel-plugin-_3b64392720bc9294ad1f40cae38bcee9/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$6$2e$9$2e$1_$40$types$2b$react$40$19$2e$2$2e$17$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+types@6.9.1_@types+react@19.2.17/node_modules/@sanity/types/lib/index.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, reKeySegment = /_key\s*==\s*['"](.*)['"]/;
function get(obj, path, defaultVal) {
    const select = typeof path == "string" ? fromString(path) : path;
    if (!Array.isArray(select)) throw new Error("Path must be an array or a string");
    let acc = obj;
    for(let i = 0; i < select.length; i++){
        const segment = select[i];
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$6$2e$9$2e$1_$40$types$2b$react$40$19$2e$2$2e$17$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isIndexSegment"])(segment)) {
            if (!Array.isArray(acc)) return defaultVal;
            acc = acc[segment];
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$6$2e$9$2e$1_$40$types$2b$react$40$19$2e$2$2e$17$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isKeySegment"])(segment)) {
            if (!Array.isArray(acc)) return defaultVal;
            acc = acc.find((item)=>item._key === segment._key);
        }
        if (typeof segment == "string" && (acc = typeof acc == "object" && acc !== null ? acc[segment] : void 0), typeof acc > "u") return defaultVal;
    }
    return acc;
}
function fromString(path) {
    if (typeof path != "string") throw new Error("Path is not a string");
    const segments = path.match(rePropName);
    if (!segments) throw new Error("Invalid path string");
    return segments.map(normalizePathSegment);
}
function normalizePathSegment(segment) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$6$2e$9$2e$1_$40$types$2b$react$40$19$2e$2$2e$17$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isIndexSegment"])(segment) ? normalizeIndexSegment(segment) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$6$2e$9$2e$1_$40$types$2b$react$40$19$2e$2$2e$17$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isKeySegment"])(segment) ? normalizeKeySegment(segment) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$types$40$6$2e$9$2e$1_$40$types$2b$react$40$19$2e$2$2e$17$2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isIndexTuple"])(segment) ? normalizeIndexTupleSegment(segment) : segment;
}
function normalizeIndexSegment(segment) {
    return Number(segment.replace(/[^\d]/g, ""));
}
function normalizeKeySegment(segment) {
    return {
        _key: segment.match(reKeySegment)[1]
    };
}
function normalizeIndexTupleSegment(segment) {
    const [from, to] = segment.split(":").map((seg)=>seg === "" ? seg : Number(seg));
    return [
        from,
        to
    ];
}
function useOptimisticActor() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(_temp, _temp2, _temp3);
}
function _temp3() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emptyActor"];
}
function _temp2() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["actor"];
}
function _temp(listener) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listeners"].add(listener), ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listeners"].delete(listener);
}
function useOptimisticActorReady() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2), actor2 = useOptimisticActor();
    let t0;
    return $[0] !== actor2 ? (t0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEmptyActor"])(actor2), $[0] = actor2, $[1] = t0) : t0 = $[1], !t0;
}
function debounce(fn, timeout) {
    let timer;
    return (...args)=>{
        clearTimeout(timer), timer = setTimeout(()=>{
            fn.apply(fn, args);
        }, timeout);
    };
}
function getDocumentsAndSnapshot(id, actor2) {
    const inFrame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$presentation$2d$comlink$40$2$2e$2$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$sanity$2b$types$40$6$2e$9$2e$1_$40$types$2b$react$40$19$2e$2$2e$17_$2f$node_modules$2f40$sanity$2f$presentation$2d$comlink$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isMaybePreviewIframe"])(), inPopUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$presentation$2d$comlink$40$2$2e$2$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$sanity$2b$types$40$6$2e$9$2e$1_$40$types$2b$react$40$19$2e$2$2e$17_$2f$node_modules$2f40$sanity$2f$presentation$2d$comlink$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isMaybePreviewWindow"])();
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEmptyActor"])(actor2) || !inFrame && !inPopUp) throw new Error("The `useDocuments` hook cannot be used in this context");
    const draftId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$client$40$7$2e$26$2e$2$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$_chunks$2d$es$2f$resolveEditInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDraftId"])(id), publishedId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$client$40$7$2e$26$2e$2$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$_chunks$2d$es$2f$resolveEditInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPublishedId"])(id), documents = actor2.getSnapshot().context?.documents, draftDoc = documents?.[draftId], publishedDoc = documents?.[publishedId], doc = draftDoc || publishedDoc;
    if (!doc) throw new Error(`Document "${id}" not found`);
    const snapshot = draftDoc.getSnapshot().context?.local || publishedDoc.getSnapshot().context?.local, snapshotPromise = new Promise((resolve)=>{
        if (snapshot) resolve(snapshot);
        else {
            const subscriber = doc.on("ready", (event)=>{
                const { snapshot: snapshot2 } = event;
                resolve(snapshot2 || null), subscriber.unsubscribe();
            });
        }
    });
    return {
        draftDoc,
        draftId,
        getSnapshot: ()=>snapshotPromise,
        publishedDoc,
        publishedId,
        /**
     * @deprecated - use `getSnapshot` instead
     */ get snapshot () {
            if (!snapshot) throw new Error(`Snapshot for document "${id}" not found`);
            return snapshot;
        }
    };
}
function createDocumentCommit(id, actor2) {
    return ()=>{
        const { draftDoc } = getDocumentsAndSnapshot(id, actor2);
        draftDoc.send({
            type: "submit"
        });
    };
}
function createDocumentGet(id, actor2) {
    return (path)=>{
        const { snapshot } = getDocumentsAndSnapshot(id, actor2);
        return path ? get(snapshot, path) : snapshot;
    };
}
function createDocumentGetSnapshot(id, actor2) {
    const { getSnapshot } = getDocumentsAndSnapshot(id, actor2);
    return getSnapshot;
}
function createDocumentPatch(id, actor2) {
    return async (patches, options)=>{
        const result = getDocumentsAndSnapshot(id, actor2), { draftDoc, draftId, getSnapshot, publishedId } = result, { commit = !0 } = options || {}, resolvedPatches = await (typeof patches == "function" ? patches({
            draftId,
            publishedId,
            /**
       * @deprecated - use `getSnapshot` instead
       */ get snapshot () {
                return result.snapshot;
            },
            getSnapshot
        }) : patches), _snapshot = await getSnapshot();
        if (!_snapshot) throw new Error(`Snapshot for document "${id}" not found`);
        draftDoc.send({
            type: "mutate",
            mutations: [
                // Attempt to create the draft document, it might not exist if the
                // snapshot was from the published document
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$18$2e$1_xstate$40$5$2e$32$2e$5$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createIfNotExists"])({
                    ..._snapshot,
                    _id: draftId
                }),
                // Patch the draft document with the resolved patches
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$18$2e$1_xstate$40$5$2e$32$2e$5$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["patch"])(draftId, resolvedPatches)
            ]
        }), commit && (typeof commit == "object" && "debounce" in commit ? debounce(()=>draftDoc.send({
                type: "submit"
            }), commit.debounce)() : draftDoc.send({
            type: "submit"
        }));
    };
}
function useDocuments() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7), actor2 = useOptimisticActor();
    let t0;
    $[0] !== actor2 ? (t0 = (documentId)=>({
            id: documentId,
            commit: createDocumentCommit(documentId, actor2),
            get: createDocumentGet(documentId, actor2),
            getSnapshot: createDocumentGetSnapshot(documentId, actor2),
            patch: createDocumentPatch(documentId, actor2)
        }), $[0] = actor2, $[1] = t0) : t0 = $[1];
    const getDocument = t0;
    let t1;
    $[2] !== actor2 ? (t1 = (id, mutations, options)=>{
        const { draftDoc } = getDocumentsAndSnapshot(id, actor2), { commit: t22 } = options || {}, commit = t22 === void 0 ? !0 : t22;
        draftDoc.send({
            type: "mutate",
            mutations
        }), commit && (typeof commit == "object" && "debounce" in commit ? debounce(()=>draftDoc.send({
                type: "submit"
            }), commit.debounce)() : draftDoc.send({
            type: "submit"
        }));
    }, $[2] = actor2, $[3] = t1) : t1 = $[3];
    const mutateDocument = t1;
    let t2;
    return $[4] !== getDocument || $[5] !== mutateDocument ? (t2 = {
        getDocument,
        mutateDocument
    }, $[4] = getDocument, $[5] = mutateDocument, $[6] = t2) : t2 = $[6], t2;
}
function whatwgRNG(length = 16) {
    const rnds8 = new Uint8Array(length);
    return crypto.getRandomValues(rnds8), rnds8;
}
const getByteHexTable = /* @__PURE__ */ (()=>{
    let table;
    return ()=>{
        if (table) return table;
        table = [];
        for(let i = 0; i < 256; ++i)table[i] = (i + 256).toString(16).slice(1);
        return table;
    };
})();
function randomKey(length) {
    const table = getByteHexTable();
    return whatwgRNG(length).reduce((str, n)=>str + table[n], "").slice(0, length);
}
function getArrayItemKeyAndParentPath(pathOrNode) {
    const elementPath = typeof pathOrNode == "string" ? pathOrNode : pathOrNode.path, lastDotIndex = elementPath.lastIndexOf("."), lastPathItem = elementPath.substring(lastDotIndex + 1, elementPath.length);
    if (!lastPathItem.indexOf("[")) throw new Error("Invalid path: not an array");
    const lastArrayIndex = elementPath.lastIndexOf("["), path = elementPath.substring(0, lastArrayIndex);
    let key, hasExplicitKey;
    if (lastPathItem.includes("_key")) {
        const startIndex = lastPathItem.indexOf('"') + 1, endIndex = lastPathItem.indexOf('"', startIndex);
        key = lastPathItem.substring(startIndex, endIndex), hasExplicitKey = !0;
    } else {
        const startIndex = lastPathItem.indexOf("[") + 1, endIndex = lastPathItem.indexOf("]", startIndex);
        key = lastPathItem.substring(startIndex, endIndex), hasExplicitKey = !1;
    }
    if (!path || !key) throw new Error("Invalid path");
    return {
        path,
        key,
        hasExplicitKey
    };
}
function getArrayDuplicatePatches(node, snapshot, position = "after") {
    const { path: arrayPath, key: itemKey } = getArrayItemKeyAndParentPath(node), duplicate = {
        ...get(snapshot, node.path),
        _key: randomKey()
    };
    return [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$18$2e$1_xstate$40$5$2e$32$2e$5$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["at"])(arrayPath, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$18$2e$1_xstate$40$5$2e$32$2e$5$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["insert"])(duplicate, position, {
            _key: itemKey
        }))
    ];
}
function getArrayRemovePatches(node, snapshot) {
    const { path: arrayPath, key: itemKey } = getArrayItemKeyAndParentPath(node), currentIndex = get(snapshot, arrayPath).findIndex((item)=>item._key === itemKey);
    return [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$18$2e$1_xstate$40$5$2e$32$2e$5$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["at"])(arrayPath, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$18$2e$1_xstate$40$5$2e$32$2e$5$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["truncate"])(currentIndex, currentIndex + 1))
    ];
}
function getArrayInsertPatches(node, insertType, position) {
    const { path: arrayPath, key: itemKey } = getArrayItemKeyAndParentPath(node), insertKey = randomKey();
    return [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$18$2e$1_xstate$40$5$2e$32$2e$5$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["at"])(arrayPath, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$18$2e$1_xstate$40$5$2e$32$2e$5$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["insert"])([
            {
                _type: insertType,
                _key: insertKey
            }
        ], position, {
            _key: itemKey
        }))
    ];
}
async function getArrayMovePatches(node, doc, moveTo) {
    if (!node.type) throw new Error("Node type is missing");
    const { path: arrayPath, key: itemKey } = getArrayItemKeyAndParentPath(node), snapshot = await doc.getSnapshot(), array = get(snapshot, arrayPath), item = get(snapshot, node.path), currentIndex = array.findIndex((item2)=>item2._key === itemKey);
    let nextIndex = -1, position = "before";
    if (moveTo === "first") {
        if (currentIndex === 0) return [];
        nextIndex = 0, position = "before";
    } else if (moveTo === "last") {
        if (currentIndex === array.length - 1) return [];
        nextIndex = -1, position = "after";
    } else if (moveTo === "next") {
        if (currentIndex === array.length - 1) return [];
        nextIndex = currentIndex, position = "after";
    } else if (moveTo === "previous") {
        if (currentIndex === 0) return [];
        nextIndex = currentIndex - 1, position = "before";
    }
    return [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$18$2e$1_xstate$40$5$2e$32$2e$5$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["at"])(arrayPath, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$18$2e$1_xstate$40$5$2e$32$2e$5$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["truncate"])(currentIndex, currentIndex + 1)),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$18$2e$1_xstate$40$5$2e$32$2e$5$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["at"])(arrayPath, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$18$2e$1_xstate$40$5$2e$32$2e$5$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["insert"])(item, position, nextIndex))
    ];
}
;
}),
"[project]/node_modules/.pnpm/@sanity+visual-editing@5.7.3_@emotion+is-prop-valid@1.4.0_@sanity+client@7.26.2_@types+_44aa6e416023878fa62b01b3252b6fe2/node_modules/@sanity/visual-editing/dist/_chunks-es/useOptimistic.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useOptimistic",
    ()=>useOptimistic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.0_@babel+core@7.29.7_@playwright+test@1.62.1_@types+node@26.1.0_babel-plugin-_3b64392720bc9294ad1f40cae38bcee9/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$client$40$7$2e$26$2e$2$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$_chunks$2d$es$2f$resolveEditInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+client@7.26.2/node_modules/@sanity/client/dist/_chunks-es/resolveEditInfo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.0_@babel+core@7.29.7_@playwright+test@1.62.1_@types+node@26.1.0_babel-plugin-_3b64392720bc9294ad1f40cae38bcee9/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+visual-editing@5.7.3_@emotion+is-prop-valid@1.4.0_@sanity+client@7.26.2_@types+_44aa6e416023878fa62b01b3252b6fe2/node_modules/@sanity/visual-editing/dist/_chunks-es/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+visual-editing@5.7.3_@emotion+is-prop-valid@1.4.0_@sanity+client@7.26.2_@types+_44aa6e416023878fa62b01b3252b6fe2/node_modules/@sanity/visual-editing/dist/_chunks-es/mutations.js [app-client] (ecmascript)");
;
;
;
;
;
function useOptimistic(passthrough, reducer) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(17), [pristine, setPristine] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!0), [optimistic, setOptimistic] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(passthrough), [lastEvent, setLastEvent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), [lastPassthrough, setLastPassthrough] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(passthrough), actor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOptimisticActor"])(), reduceStateFromActionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t0, t1;
    $[0] !== reducer ? (t0 = ()=>{
        reduceStateFromActionRef.current = (action, prevState)=>(Array.isArray(reducer) ? reducer : [
                reducer
            ]).reduce((acc, reducer_0)=>reducer_0(acc, {
                    document: action.document,
                    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$client$40$7$2e$26$2e$2$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$_chunks$2d$es$2f$resolveEditInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPublishedId"])(action.id),
                    originalId: action.id,
                    type: action.type
                }), prevState);
    }, t1 = [
        reducer
    ], $[0] = reducer, $[1] = t0, $[2] = t1) : (t0 = $[1], t1 = $[2]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInsertionEffect"])(t0, t1);
    let t2;
    $[3] !== passthrough ? (t2 = ()=>setLastPassthrough(passthrough), $[3] = passthrough, $[4] = t2) : t2 = $[4];
    const updateLastPassthroughRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(t2);
    let t3, t4;
    $[5] !== passthrough ? (t3 = ()=>{
        updateLastPassthroughRef.current = ()=>setLastPassthrough(passthrough);
    }, t4 = [
        passthrough
    ], $[5] = passthrough, $[6] = t3, $[7] = t4) : (t3 = $[6], t4 = $[7]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInsertionEffect"])(t3, t4);
    let t5, t6;
    $[8] !== actor ? (t5 = ()=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEmptyActor"])(actor)) return;
        let pristineTimeout;
        const rebasedSub = actor.on("rebased.local", (_event)=>{
            const event = {
                document: _event.document,
                id: _event.id,
                originalId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$client$40$7$2e$26$2e$2$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$_chunks$2d$es$2f$resolveEditInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPublishedId"])(_event.id),
                type: "mutate"
            };
            setOptimistic((prevState_0)=>reduceStateFromActionRef.current ? reduceStateFromActionRef.current(event, prevState_0) : prevState_0), setLastEvent(event), updateLastPassthroughRef.current(), setPristine(!1), clearTimeout(pristineTimeout);
        }), pristineSub = actor.on("pristine", ()=>{
            pristineTimeout = setTimeout(()=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startTransition"])(()=>setPristine(!0));
            }, 15e3);
        });
        return ()=>{
            rebasedSub.unsubscribe(), pristineSub.unsubscribe();
        };
    }, t6 = [
        actor
    ], $[8] = actor, $[9] = t5, $[10] = t6) : (t5 = $[9], t6 = $[10]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    let t7, t8;
    return $[11] !== lastEvent || $[12] !== lastPassthrough || $[13] !== passthrough || $[14] !== pristine ? (t7 = ()=>{
        if (!pristine) {
            if (!lastEvent) throw new Error("No last event found when syncing passthrough");
            lastPassthrough !== passthrough && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startTransition"])(()=>{
                setOptimistic(reduceStateFromActionRef.current ? reduceStateFromActionRef.current(lastEvent, passthrough) : passthrough), setLastPassthrough(passthrough);
            });
        }
    }, t8 = [
        lastEvent,
        lastPassthrough,
        passthrough,
        pristine
    ], $[11] = lastEvent, $[12] = lastPassthrough, $[13] = passthrough, $[14] = pristine, $[15] = t7, $[16] = t8) : (t7 = $[15], t8 = $[16]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t7, t8), pristine ? passthrough : optimistic;
}
;
}),
"[project]/node_modules/.pnpm/@sanity+visual-editing@5.7.3_@emotion+is-prop-valid@1.4.0_@sanity+client@7.26.2_@types+_44aa6e416023878fa62b01b3252b6fe2/node_modules/@sanity/visual-editing/dist/optimistic/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createDatasetMutator",
    ()=>createDatasetMutator,
    "createDocumentMutator",
    ()=>createDocumentMutator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+visual-editing@5.7.3_@emotion+is-prop-valid@1.4.0_@sanity+client@7.26.2_@types+_44aa6e416023878fa62b01b3252b6fe2/node_modules/@sanity/visual-editing/dist/_chunks-es/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$18$2e$1_xstate$40$5$2e$32$2e$5$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$_unstable_machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+mutate@0.18.1_xstate@5.32.5/node_modules/@sanity/mutate/dist/_unstable_machine.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$32$2e$5$2f$node_modules$2f$xstate$2f$dist$2f$xstate$2d$actors$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/xstate@5.32.5/node_modules/xstate/dist/xstate-actors.development.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$32$2e$5$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$e4ef3ed1$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__enqueueActions$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/xstate@5.32.5/node_modules/xstate/dist/log-e4ef3ed1.development.esm.js [app-client] (ecmascript) <export e as enqueueActions>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$32$2e$5$2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/xstate@5.32.5/node_modules/xstate/dist/xstate.development.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$32$2e$5$2f$node_modules$2f$xstate$2f$dist$2f$assign$2d$393c348f$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__assign$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/xstate@5.32.5/node_modules/xstate/dist/assign-393c348f.development.esm.js [app-client] (ecmascript) <export a as assign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$32$2e$5$2f$node_modules$2f$xstate$2f$dist$2f$raise$2d$0d6481d1$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__s__as__stopChild$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/xstate@5.32.5/node_modules/xstate/dist/raise-0d6481d1.development.esm.js [app-client] (ecmascript) <export s as stopChild>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$32$2e$5$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$e4ef3ed1$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__emit$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/xstate@5.32.5/node_modules/xstate/dist/log-e4ef3ed1.development.esm.js [app-client] (ecmascript) <export a as emit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$18$2e$1_xstate$40$5$2e$32$2e$5$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+mutate@0.18.1_xstate@5.32.5/node_modules/@sanity/mutate/dist/index.js [app-client] (ecmascript)");
;
;
;
;
const createDocumentMutator = (comlink)=>{
    const fetchSnapshot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$32$2e$5$2f$node_modules$2f$xstate$2f$dist$2f$xstate$2d$actors$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromPromise"])(async ({ input, signal })=>{
        const { id } = input, { snapshot } = await comlink.fetch("visual-editing/fetch-snapshot", {
            documentId: id
        }, {
            signal
        });
        return snapshot;
    }), submitMutations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$32$2e$5$2f$node_modules$2f$xstate$2f$dist$2f$xstate$2d$actors$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromPromise"])(async ({ input })=>{
        const { transactions } = input;
        for (const transaction of transactions){
            const data = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$18$2e$1_xstate$40$5$2e$32$2e$5$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SanityEncoder"].encodeTransaction(transaction);
            return comlink.post("visual-editing/mutate", data);
        }
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$18$2e$1_xstate$40$5$2e$32$2e$5$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$_unstable_machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["documentMutatorMachine"].provide({
        actions: {
            "send sync event to parent": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$32$2e$5$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$e4ef3ed1$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__enqueueActions$3e$__["enqueueActions"])(({ enqueue })=>{
                enqueue.sendParent(({ context })=>({
                        type: "sync",
                        id: context.id,
                        document: context.remote
                    })), enqueue.emit(({ context })=>({
                        type: "ready",
                        snapshot: context.local
                    }));
            })
        },
        actors: {
            "fetch remote snapshot": fetchSnapshot,
            "submit mutations as transactions": submitMutations
        }
    });
}, datasetMutatorMachine = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$32$2e$5$2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setup"])({
    types: {},
    actions: {
        "emit sync event": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$32$2e$5$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$e4ef3ed1$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__emit$3e$__["emit"])(({ event })=>((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$32$2e$5$2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assertEvent"])(event, "sync"), event)),
        "emit mutation event": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$32$2e$5$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$e4ef3ed1$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__emit$3e$__["emit"])(({ event })=>((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$32$2e$5$2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assertEvent"])(event, "mutation"), event)),
        "emit rebased event": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$32$2e$5$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$e4ef3ed1$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__emit$3e$__["emit"])(({ event })=>((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$32$2e$5$2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assertEvent"])(event, [
                "rebased.local",
                "rebased.remote"
            ]), event)),
        "emit pristine event": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$32$2e$5$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$e4ef3ed1$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__emit$3e$__["emit"])(({ event })=>((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$32$2e$5$2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assertEvent"])(event, [
                "pristine"
            ]), event)),
        "add document actor": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$32$2e$5$2f$node_modules$2f$xstate$2f$dist$2f$assign$2d$393c348f$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__assign$3e$__["assign"])({
            documents: ({ context, event, spawn })=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$32$2e$5$2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assertEvent"])(event, "observe");
                const id = event.documentId;
                return context.documents[id] ? context.documents : {
                    ...context.documents,
                    [id]: spawn("documentMutatorMachine", {
                        input: {
                            id,
                            client: context.client,
                            sharedListener: context.sharedListener || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$18$2e$1_xstate$40$5$2e$32$2e$5$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$_unstable_machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSharedListener"])(context.client)
                        },
                        id
                    })
                };
            }
        }),
        "stop remote snapshot": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$32$2e$5$2f$node_modules$2f$xstate$2f$dist$2f$raise$2d$0d6481d1$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__s__as__stopChild$3e$__["stopChild"])(({ context, event })=>((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$32$2e$5$2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assertEvent"])(event, "unobserve"), context.documents[event.documentId])),
        "remove remote snapshot from context": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$32$2e$5$2f$node_modules$2f$xstate$2f$dist$2f$assign$2d$393c348f$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__assign$3e$__["assign"])({
            documents: ({ context, event })=>{
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$32$2e$5$2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assertEvent"])(event, "unobserve"), !context.documents[event.documentId]) return context.documents;
                const { [event.documentId]: _, ...documents } = context.documents;
                return documents;
            }
        })
    },
    actors: {
        documentMutatorMachine: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$18$2e$1_xstate$40$5$2e$32$2e$5$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$_unstable_machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["documentMutatorMachine"]
    }
}).createMachine({
    /** @xstate-layout N4IgpgJg5mDOIC5QBsD2BjAhsgIhgrgLZgB2ALgMTICWsZpA2gAwC6ioADqrNWdaiXYgAHogC0ADgBMAOgkA2ACyKArBICcTdfKXSANCACeiFQHYZpgMxWV800yYqp6gIyn5AXw8G0WXAWJyCnwSGjpGViEuHj4BIVEEKUt5OSlFU1smFwkFW0sDY0T1GRUXRXkXKVN7HSYJJkUvHwxsPHQiUjIZDgAnWj4SMApCfDJMemY2JBBo3n5BaYSXeVlbKRUsiXdFSxcXfKNERSqZTbr1zVMJNyaQX1aAzpkIah6yQwp0VEJCXkmo7hzOKLRDLFwyFxaSzXKTOKQudSKCQFRDOczqCSWJjwjbHCQqRFebwgEioCBwIT3fztQJkAExebxcQuFEIZaWGRIrF7dSXKTyFSNYlUtodcjdPp0aiDelAhagBLpVmWAmc46mNwSZTyLQuFS3EWPcUvN6FTiA2LykSoq6c6wbCqVUzparKioyRFVfkq1zqNSWIkeIA */ id: "dataset-mutator",
    context: ({ input })=>({
            documents: {},
            client: input.client,
            sharedListener: input.sharedListener
        }),
    on: {
        sync: {
            actions: [
                "emit sync event"
            ]
        },
        mutation: {
            actions: [
                "emit mutation event"
            ]
        },
        "rebased.*": {
            actions: [
                "emit rebased event"
            ]
        },
        pristine: {
            actions: [
                "emit pristine event"
            ]
        },
        observe: {
            actions: [
                "add document actor"
            ]
        },
        unobserve: {
            actions: [
                "stop remote snapshot",
                "remove remote snapshot from context"
            ]
        }
    },
    initial: "pristine",
    states: {
        pristine: {}
    }
}), createDatasetMutator = (comlink)=>datasetMutatorMachine.provide({
        actors: {
            documentMutatorMachine: createDocumentMutator(comlink)
        }
    });
;
}),
"[project]/node_modules/.pnpm/@sanity+visual-editing@5.7.3_@emotion+is-prop-valid@1.4.0_@sanity+client@7.26.2_@types+_44aa6e416023878fa62b01b3252b6fe2/node_modules/@sanity/visual-editing/dist/react/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useIsPresentationTool",
    ()=>useIsPresentationTool,
    "usePresentationQuery",
    ()=>usePresentationQuery,
    "useVisualEditingEnvironment",
    ()=>useVisualEditingEnvironment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$VisualEditing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+visual-editing@5.7.3_@emotion+is-prop-valid@1.4.0_@sanity+client@7.26.2_@types+_44aa6e416023878fa62b01b3252b6fe2/node_modules/@sanity/visual-editing/dist/_chunks-es/VisualEditing.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$2d$csm$40$3$2e$0$2e$13_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$sanity$2b$types$40$6$2e$9$2e$1_$40$types$2b$react$40$19$2e$2$2e$17_$5f$typescript$40$6$2e$0$2e$3$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2d$csm$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+visual-editing-csm@3.0.13_@sanity+client@7.26.2_@sanity+types@6.9.1_@types+react@19.2.17__typescript@6.0.3/node_modules/@sanity/visual-editing-csm/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$optimistic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+visual-editing@5.7.3_@emotion+is-prop-valid@1.4.0_@sanity+client@7.26.2_@types+_44aa6e416023878fa62b01b3252b6fe2/node_modules/@sanity/visual-editing/dist/optimistic/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+visual-editing@5.7.3_@emotion+is-prop-valid@1.4.0_@sanity+client@7.26.2_@types+_44aa6e416023878fa62b01b3252b6fe2/node_modules/@sanity/visual-editing/dist/_chunks-es/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$useOptimistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+visual-editing@5.7.3_@emotion+is-prop-valid@1.4.0_@sanity+client@7.26.2_@types+_44aa6e416023878fa62b01b3252b6fe2/node_modules/@sanity/visual-editing/dist/_chunks-es/useOptimistic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+visual-editing@5.7.3_@emotion+is-prop-valid@1.4.0_@sanity+client@7.26.2_@types+_44aa6e416023878fa62b01b3252b6fe2/node_modules/@sanity/visual-editing/dist/_chunks-es/mutations.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.0_@babel+core@7.29.7_@playwright+test@1.62.1_@types+node@26.1.0_babel-plugin-_3b64392720bc9294ad1f40cae38bcee9/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.0_@babel+core@7.29.7_@playwright+test@1.62.1_@types+node@26.1.0_babel-plugin-_3b64392720bc9294ad1f40cae38bcee9/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$client$40$7$2e$26$2e$2$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$_chunks$2d$es$2f$stegaEncodeSourceMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@sanity+client@7.26.2/node_modules/@sanity/client/dist/_chunks-es/stegaEncodeSourceMap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dequal$40$2$2e$0$2e$3$2f$node_modules$2f$dequal$2f$lite$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/dequal@2.0.3/node_modules/dequal/lite/index.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
function useVisualEditingEnvironment() {
    const environment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$VisualEditing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribe"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$VisualEditing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSnapshot"], _temp$1);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeferredValue"])(environment, null);
}
function _temp$1() {
    return null;
}
function useIsPresentationTool() {
    const env = useVisualEditingEnvironment();
    return env === null ? null : env === "presentation-iframe" || env === "presentation-window";
}
function reducer(state, { type, payload }) {
    return type === "query-change" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dequal$40$2$2e$0$2e$3$2f$node_modules$2f$dequal$2f$lite$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dequal"])(state, payload) ? state : {
        ...state,
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dequal$40$2$2e$0$2e$3$2f$node_modules$2f$dequal$2f$lite$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dequal"])(state.data, payload.data) ? state.data : payload.data,
        sourceMap: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dequal$40$2$2e$0$2e$3$2f$node_modules$2f$dequal$2f$lite$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dequal"])(state.sourceMap, payload.sourceMap) ? state.sourceMap : payload.sourceMap,
        perspective: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dequal$40$2$2e$0$2e$3$2f$node_modules$2f$dequal$2f$lite$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dequal"])(state.perspective, payload.perspective) ? state.perspective : payload.perspective,
        variant: "variant" in state && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dequal$40$2$2e$0$2e$3$2f$node_modules$2f$dequal$2f$lite$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dequal"])(state.variant, payload.variant) ? state.variant : payload.variant
    } : state;
}
const initialState = {
    data: null,
    sourceMap: null,
    perspective: null,
    variant: null
}, EMPTY_QUERY_PARAMS = {}, LISTEN_HEARTBEAT_INTERVAL = 2e4;
function usePresentationQuery(props) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(25), [state, dispatch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducer"])(reducer, initialState), { query, params: t0, stega: t1 } = props, params = t0 === void 0 ? EMPTY_QUERY_PARAMS : t0, stega = t1 === void 0 ? !0 : t1, comlink2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$VisualEditing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribe$1"], _temp, _temp2), projectId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$VisualEditing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribe$1"], _temp3, _temp4), dataset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$VisualEditing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribe$1"], _temp5, _temp6), perspective = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$VisualEditing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribe$1"], _temp7, _temp8), variant = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$VisualEditing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribe$1"], _temp9, _temp0);
    let t2;
    $[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (t2 = [], $[0] = t2) : t2 = $[0], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(_temp1, t2);
    let t3;
    $[1] !== dataset || $[2] !== params || $[3] !== perspective || $[4] !== projectId || $[5] !== query || $[6] !== variant ? (t3 = (comlink_0)=>{
        !projectId || !dataset || !perspective || comlink_0.post("loader/query-listen", {
            projectId,
            dataset,
            perspective,
            variant: variant ?? void 0,
            query,
            params,
            heartbeat: LISTEN_HEARTBEAT_INTERVAL
        });
    }, $[1] = dataset, $[2] = params, $[3] = perspective, $[4] = projectId, $[5] = query, $[6] = variant, $[7] = t3) : t3 = $[7];
    const handleQueryHeartbeat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffectEvent"])(t3);
    let t4;
    $[8] !== dataset || $[9] !== params || $[10] !== projectId || $[11] !== query ? (t4 = (event)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dequal$40$2$2e$0$2e$3$2f$node_modules$2f$dequal$2f$lite$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dequal"])({
            projectId,
            dataset,
            query,
            params
        }, {
            projectId: event.projectId,
            dataset: event.dataset,
            query: event.query,
            params: event.params
        }) && dispatch({
            type: "query-change",
            payload: {
                data: event.result,
                sourceMap: event.resultSourceMap || null,
                perspective: event.perspective,
                variant: event.variant || void 0
            }
        });
    }, $[8] = dataset, $[9] = params, $[10] = projectId, $[11] = query, $[12] = t4) : t4 = $[12];
    const handleQueryChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffectEvent"])(t4);
    let t5;
    $[13] !== comlink2 || $[14] !== handleQueryChange || $[15] !== handleQueryHeartbeat ? (t5 = ()=>{
        if (!comlink2) return;
        const unsubscribe = comlink2.on("loader/query-change", handleQueryChange);
        handleQueryHeartbeat(comlink2);
        const interval = setInterval(()=>handleQueryHeartbeat(comlink2), LISTEN_HEARTBEAT_INTERVAL);
        return ()=>{
            clearInterval(interval), unsubscribe();
        };
    }, $[13] = comlink2, $[14] = handleQueryChange, $[15] = handleQueryHeartbeat, $[16] = t5) : t5 = $[16];
    let t6;
    $[17] !== comlink2 ? (t6 = [
        comlink2
    ], $[17] = comlink2, $[18] = t6) : t6 = $[18], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$playwright$2b$test$40$1$2e$62$2e$1_$40$types$2b$node$40$26$2e$1$2e$0_babel$2d$plugin$2d$_3b64392720bc9294ad1f40cae38bcee9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    let t7;
    bb0: {
        if (stega && state.sourceMap) {
            let t8;
            $[19] !== state.data || $[20] !== state.sourceMap ? (t8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$client$40$7$2e$26$2e$2$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$_chunks$2d$es$2f$stegaEncodeSourceMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stegaEncodeSourceMap"])(state.data, state.sourceMap, {
                enabled: !0,
                studioUrl: "/"
            }), $[19] = state.data, $[20] = state.sourceMap, $[21] = t8) : t8 = $[21];
            let t9;
            $[22] !== state || $[23] !== t8 ? (t9 = {
                ...state,
                data: t8
            }, $[22] = state, $[23] = t8, $[24] = t9) : t9 = $[24], t7 = t9;
            break bb0;
        }
        t7 = state;
    }
    return t7;
}
function _temp1() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$VisualEditing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addQueryListener"])();
}
function _temp0() {
    return null;
}
function _temp9() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$VisualEditing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["comlinkVariant"];
}
function _temp8() {
    return null;
}
function _temp7() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$VisualEditing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["comlinkPerspective"];
}
function _temp6() {
    return null;
}
function _temp5() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$VisualEditing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["comlinkDataset"];
}
function _temp4() {
    return null;
}
function _temp3() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$VisualEditing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["comlinkProjectId"];
}
function _temp2() {
    return null;
}
function _temp() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$5$2e$7$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$4$2e$0_$40$sanity$2b$client$40$7$2e$26$2e$2_$40$types$2b$_44aa6e416023878fa62b01b3252b6fe2$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$VisualEditing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["comlink"];
}
;
}),
]);

//# sourceMappingURL=1aw3_%40sanity_visual-editing_dist_0ycsif6._.js.map