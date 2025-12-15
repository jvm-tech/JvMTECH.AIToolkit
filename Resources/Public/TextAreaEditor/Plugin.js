(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if (decorator = decorators[i])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result)
      __defProp(target, key, result);
    return result;
  };

  // node_modules/@neos-project/neos-ui-extensibility/dist/manifest.js
  var init_manifest = __esm({
    "node_modules/@neos-project/neos-ui-extensibility/dist/manifest.js"() {
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/createConsumerApi.js
  var init_createConsumerApi = __esm({
    "node_modules/@neos-project/neos-ui-extensibility/dist/createConsumerApi.js"() {
      init_manifest();
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js
  function readFromConsumerApi(key) {
    return (...args) => {
      if (window["@Neos:HostPluginAPI"] && window["@Neos:HostPluginAPI"][`@${key}`]) {
        return window["@Neos:HostPluginAPI"][`@${key}`](...args);
      }
      throw new Error("You are trying to read from a consumer api that hasn't been initialized yet!");
    };
  }
  var init_readFromConsumerApi = __esm({
    "node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js"() {
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/registry/AbstractRegistry.js
  var init_AbstractRegistry = __esm({
    "node_modules/@neos-project/neos-ui-extensibility/dist/registry/AbstractRegistry.js"() {
    }
  });

  // node_modules/@neos-project/positional-array-sorter/dist/positionalArraySorter.js
  var init_positionalArraySorter = __esm({
    "node_modules/@neos-project/positional-array-sorter/dist/positionalArraySorter.js"() {
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js
  var init_SynchronousRegistry = __esm({
    "node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js"() {
      init_AbstractRegistry();
      init_positionalArraySorter();
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousMetaRegistry.js
  var init_SynchronousMetaRegistry = __esm({
    "node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousMetaRegistry.js"() {
      init_SynchronousRegistry();
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/registry/index.js
  var init_registry = __esm({
    "node_modules/@neos-project/neos-ui-extensibility/dist/registry/index.js"() {
      init_SynchronousRegistry();
      init_SynchronousMetaRegistry();
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/index.js
  var dist_default;
  var init_dist = __esm({
    "node_modules/@neos-project/neos-ui-extensibility/dist/index.js"() {
      init_createConsumerApi();
      init_readFromConsumerApi();
      init_registry();
      dist_default = readFromConsumerApi("manifest");
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react/index.js
  var require_react = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("vendor")().React;
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react-redux/index.js
  var require_react_redux = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react-redux/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("vendor")().reactRedux;
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/prop-types/index.js
  var require_prop_types = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/prop-types/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("vendor")().PropTypes;
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/react-ui-components/index.js
  var require_react_ui_components = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/react-ui-components/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("NeosProjectPackages")().ReactUiComponents;
    }
  });

  // node_modules/lodash.unescape/index.js
  var require_lodash = __commonJS({
    "node_modules/lodash.unescape/index.js"(exports, module) {
      var INFINITY = 1 / 0;
      var symbolTag = "[object Symbol]";
      var reEscapedHtml = /&(?:amp|lt|gt|quot|#39|#96);/g;
      var reHasEscapedHtml = RegExp(reEscapedHtml.source);
      var htmlUnescapes = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'",
        "&#96;": "`"
      };
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      function basePropertyOf(object) {
        return function(key) {
          return object == null ? void 0 : object[key];
        };
      }
      var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
      var objectProto = Object.prototype;
      var objectToString = objectProto.toString;
      var Symbol2 = root.Symbol;
      var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
      var symbolToString = symbolProto ? symbolProto.toString : void 0;
      function baseToString(value) {
        if (typeof value == "string") {
          return value;
        }
        if (isSymbol(value)) {
          return symbolToString ? symbolToString.call(value) : "";
        }
        var result = value + "";
        return result == "0" && 1 / value == -INFINITY ? "-0" : result;
      }
      function isObjectLike(value) {
        return !!value && typeof value == "object";
      }
      function isSymbol(value) {
        return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
      }
      function toString(value) {
        return value == null ? "" : baseToString(value);
      }
      function unescape2(string) {
        string = toString(string);
        return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;
      }
      module.exports = unescape2;
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-backend-connector/index.js
  var neos_ui_backend_connector_default, fetchWithErrorHandling;
  var init_neos_ui_backend_connector = __esm({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-backend-connector/index.js"() {
      init_readFromConsumerApi();
      neos_ui_backend_connector_default = readFromConsumerApi("NeosProjectPackages")().NeosUiBackendConnectorDefault;
      ({ fetchWithErrorHandling } = readFromConsumerApi("NeosProjectPackages")().NeosUiBackendConnector);
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-decorators/index.js
  var require_neos_ui_decorators = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-decorators/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("NeosProjectPackages")().NeosUiDecorators;
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-redux-store/index.js
  var require_neos_ui_redux_store = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-redux-store/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("NeosProjectPackages")().NeosUiReduxStore;
    }
  });

  // node_modules/lucide-react/dist/esm/shared/src/utils.js
  var toKebabCase, mergeClasses;
  var init_utils = __esm({
    "node_modules/lucide-react/dist/esm/shared/src/utils.js"() {
      toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
      mergeClasses = (...classes) => classes.filter((className, index, array) => {
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
      }).join(" ").trim();
    }
  });

  // node_modules/lucide-react/dist/esm/defaultAttributes.js
  var defaultAttributes;
  var init_defaultAttributes = __esm({
    "node_modules/lucide-react/dist/esm/defaultAttributes.js"() {
      defaultAttributes = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round"
      };
    }
  });

  // node_modules/lucide-react/dist/esm/Icon.js
  var import_react, Icon;
  var init_Icon = __esm({
    "node_modules/lucide-react/dist/esm/Icon.js"() {
      import_react = __toESM(require_react());
      init_defaultAttributes();
      init_utils();
      Icon = (0, import_react.forwardRef)(
        ({
          color = "currentColor",
          size = 24,
          strokeWidth = 2,
          absoluteStrokeWidth,
          className = "",
          children,
          iconNode,
          ...rest
        }, ref) => {
          return (0, import_react.createElement)(
            "svg",
            {
              ref,
              ...defaultAttributes,
              width: size,
              height: size,
              stroke: color,
              strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
              className: mergeClasses("lucide", className),
              ...rest
            },
            [
              ...iconNode.map(([tag, attrs]) => (0, import_react.createElement)(tag, attrs)),
              ...Array.isArray(children) ? children : [children]
            ]
          );
        }
      );
    }
  });

  // node_modules/lucide-react/dist/esm/createLucideIcon.js
  var import_react2, createLucideIcon;
  var init_createLucideIcon = __esm({
    "node_modules/lucide-react/dist/esm/createLucideIcon.js"() {
      import_react2 = __toESM(require_react());
      init_utils();
      init_Icon();
      createLucideIcon = (iconName, iconNode) => {
        const Component = (0, import_react2.forwardRef)(
          ({ className, ...props }, ref) => (0, import_react2.createElement)(Icon, {
            ref,
            iconNode,
            className: mergeClasses(`lucide-${toKebabCase(iconName)}`, className),
            ...props
          })
        );
        Component.displayName = `${iconName}`;
        return Component;
      };
    }
  });

  // node_modules/lucide-react/dist/esm/icons/check.js
  var Check;
  var init_check = __esm({
    "node_modules/lucide-react/dist/esm/icons/check.js"() {
      init_createLucideIcon();
      Check = createLucideIcon("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
    }
  });

  // node_modules/lucide-react/dist/esm/icons/circle-x.js
  var CircleX;
  var init_circle_x = __esm({
    "node_modules/lucide-react/dist/esm/icons/circle-x.js"() {
      init_createLucideIcon();
      CircleX = createLucideIcon("CircleX", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
        ["path", { d: "m9 9 6 6", key: "z0biqf" }]
      ]);
    }
  });

  // node_modules/lucide-react/dist/esm/icons/sparkles.js
  var Sparkles;
  var init_sparkles = __esm({
    "node_modules/lucide-react/dist/esm/icons/sparkles.js"() {
      init_createLucideIcon();
      Sparkles = createLucideIcon("Sparkles", [
        [
          "path",
          {
            d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
            key: "4pj2yx"
          }
        ],
        ["path", { d: "M20 3v4", key: "1olli1" }],
        ["path", { d: "M22 5h-4", key: "1gvqau" }],
        ["path", { d: "M4 17v2", key: "vumght" }],
        ["path", { d: "M5 18H3", key: "zchphs" }]
      ]);
    }
  });

  // node_modules/lucide-react/dist/esm/lucide-react.js
  var init_lucide_react = __esm({
    "node_modules/lucide-react/dist/esm/lucide-react.js"() {
      init_circle_x();
      init_sparkles();
      init_check();
    }
  });

  // Components/GenerateButton.js
  var import_react3, GenerateButton, styles, keyframes, styleSheet, GenerateButton_default;
  var init_GenerateButton = __esm({
    "Components/GenerateButton.js"() {
      import_react3 = __toESM(require_react());
      init_lucide_react();
      GenerateButton = ({ onClick }) => {
        const [state, setState] = (0, import_react3.useState)("idle");
        const [isHovered, setIsHovered] = (0, import_react3.useState)(false);
        const startGenerating = (0, import_react3.useCallback)(() => {
          if (state !== "idle")
            return;
          setState("generating");
        }, [state]);
        const complete = (0, import_react3.useCallback)(() => {
          setState("transitioning");
          setTimeout(() => {
            setState("complete");
            setTimeout(() => {
              setState("idle");
            }, 2e3);
          }, 150);
        }, []);
        const error = (0, import_react3.useCallback)(() => {
          setState("error");
          setTimeout(() => {
            setState("idle");
          }, 2e3);
        }, []);
        const reset = (0, import_react3.useCallback)(() => {
          setState("idle");
        }, []);
        const handleClick = (0, import_react3.useCallback)(() => {
          if (state !== "idle")
            return;
          startGenerating();
          onClick?.(
            () => complete(),
            () => error(),
            () => reset()
          );
        }, [state, onClick, startGenerating, complete, error, reset]);
        const isGenerating = state === "generating" || state === "transitioning";
        return /* @__PURE__ */ import_react3.default.createElement(
          "button",
          {
            onClick: handleClick,
            onMouseEnter: () => setIsHovered(true),
            onMouseLeave: () => setIsHovered(false),
            disabled: state !== "idle",
            style: {
              ...styles.button,
              backgroundColor: state === "generating" ? "#ff8700" : state === "complete" ? "#00a338" : state === "error" ? "#dc2626" : isHovered ? "#00adee" : "#3f3f3f"
            }
          },
          /* @__PURE__ */ import_react3.default.createElement("div", { style: styles.contentWrapper }, /* @__PURE__ */ import_react3.default.createElement("div", { style: styles.iconWrapper }, /* @__PURE__ */ import_react3.default.createElement(
            Sparkles,
            {
              style: {
                ...styles.icon,
                animation: isGenerating ? "sparkle 1s ease-in-out infinite" : "none",
                opacity: state === "complete" || state === "error" ? 0 : 1,
                transition: "opacity 0.2s ease"
              }
            }
          ), /* @__PURE__ */ import_react3.default.createElement(
            Check,
            {
              style: {
                ...styles.icon,
                animation: state === "complete" ? "scaleIn 0.3s ease forwards" : "none",
                opacity: state === "complete" ? 1 : 0,
                transition: "opacity 0.2s ease"
              }
            }
          ), /* @__PURE__ */ import_react3.default.createElement(
            CircleX,
            {
              style: {
                ...styles.icon,
                animation: state === "error" ? "scaleIn 0.3s ease forwards" : "none",
                opacity: state === "error" ? 1 : 0,
                transition: "opacity 0.2s ease"
              }
            }
          )), /* @__PURE__ */ import_react3.default.createElement(
            "span",
            {
              style: {
                ...styles.text,
                opacity: state === "transitioning" ? 0 : 1
              }
            },
            state === "complete" ? "Done" : state === "error" ? "Error" : isGenerating ? "Generating..." : "Generate"
          ))
        );
      };
      styles = {
        button: {
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "8px 16px",
          border: "none",
          color: "white",
          fontSize: "14px",
          fontWeight: "500",
          cursor: "pointer",
          outline: "none",
          minWidth: "120px",
          height: "36px",
          transition: "background-color 0s",
          "&:disabled": {
            cursor: "default"
          }
        },
        contentWrapper: {
          position: "relative",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          zIndex: 1
        },
        iconWrapper: {
          width: "16px",
          height: "16px",
          position: "relative"
        },
        icon: {
          width: "16px",
          height: "16px",
          color: "white",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)"
        },
        text: {
          transition: "opacity 0.2s ease",
          userSelect: "none"
        }
      };
      keyframes = `
  @keyframes sparkle {
    0% { transform: translate(-50%, -50%) scale(1) rotate(0deg); }
    50% { transform: translate(-50%, -50%) scale(1.2) rotate(180deg); }
    100% { transform: translate(-50%, -50%) scale(1) rotate(360deg); }
  }
  
  @keyframes scaleIn {
    0% { transform: translate(-50%, -50%) scale(0); }
    50% { transform: translate(-50%, -50%) scale(1.2); }
    100% { transform: translate(-50%, -50%) scale(1); }
  }
`;
      styleSheet = document.createElement("style");
      styleSheet.textContent = keyframes;
      document.head.appendChild(styleSheet);
      GenerateButton_default = GenerateButton;
    }
  });

  // Common/Helpers.js
  var Helpers;
  var init_Helpers = __esm({
    "Common/Helpers.js"() {
      Helpers = class {
      };
      Helpers.getDocumentContentUrl = (location, nodeContextPath) => {
        const port = location.port ? `:${location.port}` : '';
        return location.protocol + "//" + location.hostname + port + "/ai-toolkit/page/renderPreviewPage?node=" + encodeURIComponent(nodeContextPath);
      };
      Helpers.getDocumentContent = async (documentContentUrl) => {
        return await fetch(documentContentUrl).then((response) => {
          if (!response || !response.ok) {
            throw new Error(`AI Toolkit - Failed fetching preview: ${response.status} ${response.statusText}`);
          }
          return response.text();
        });
      };
      Helpers.getPropertyValue = (node, transientValues, propertyName) => {
        let value;
        try {
          if (transientValues && transientValues[propertyName] && transientValues[propertyName]["value"]) {
            value = transientValues[propertyName]["value"]["__identity"];
          } else {
            value = node["properties"][propertyName]["__identity"];
          }
        } catch (error) {
          console.error("AI Toolkit Error 1734685171:", error);
        }
        return value;
      };
    }
  });

  // TextAreaEditor/TextAreaEditor.js
  var import_react4, import_react_redux, import_prop_types, import_react_ui_components, import_lodash, import_neos_ui_decorators, import_neos_ui_redux_store, TextArea;
  var init_TextAreaEditor = __esm({
    "TextAreaEditor/TextAreaEditor.js"() {
      import_react4 = __toESM(require_react());
      import_react_redux = __toESM(require_react_redux());
      import_prop_types = __toESM(require_prop_types());
      import_react_ui_components = __toESM(require_react_ui_components());
      import_lodash = __toESM(require_lodash());
      init_neos_ui_backend_connector();
      import_neos_ui_decorators = __toESM(require_neos_ui_decorators());
      import_neos_ui_redux_store = __toESM(require_neos_ui_redux_store());
      init_GenerateButton();
      init_Helpers();
      TextArea = class extends import_react4.PureComponent {
        constructor() {
          super(...arguments);
          this.state = {
            isBusy: false
          };
          this.showMessage = (message) => {
            setTimeout(() => {
              alert(message);
            }, 50);
          };
          this.generateText = async (setButtonCompleteState, setButtonErrorState, resetButtonState) => {
            if (typeof setButtonCompleteState !== "function") {
              setButtonCompleteState = () => ({});
            }
            if (typeof setButtonErrorState !== "function") {
              setButtonErrorState = () => ({});
            }
            if (typeof resetButtonState !== "function") {
              resetButtonState = () => ({});
            }
            const { value, commit, options, nodeContextPath, documentNodePath, getNodeByContextPath, transientValues } = this.props;
            const documentNode = getNodeByContextPath(documentNodePath);
            const node = getNodeByContextPath(nodeContextPath);
            const promptVariables = options && options.promptVariables ? options.promptVariables : [];
            const modelHandler = options && options.modelHandler ? options.modelHandler : "textToText";
            const modelPreset = options && options.modelPreset ? options.modelPreset : "default";
            const promptTemplate = options && options.promptTemplate ? options.promptTemplate : "";
            const forceMaxLength = options && options.forceMaxLength ? options.forceMaxLength : 0;
            const forceMaxLengthAttempts = options && options.forceMaxLengthAttempts ? options.forceMaxLengthAttempts : 0;
            const forceMaxLengthCut = options && options.forceMaxLengthCut ? options.forceMaxLengthCut : "";
            const dummy = options && options.dummy ? options.dummy : false;
            const debug = options && options.debug ? options.debug : false;
            this.setState({ isBusy: true });
            try {
              const nodeUri = Helpers.getDocumentContentUrl(document.location, nodeContextPath);
              fetchWithErrorHandling.withCsrfToken((csrfToken) => ({
                url: "/ai-toolkit/execute/" + modelHandler,
                method: "POST",
                credentials: "include",
                headers: {
                  "X-Flow-Csrftoken": csrfToken,
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  promptVariables,
                  modelPreset,
                  nodeContextPath,
                  nodeUri,
                  currentValue: value,
                  transientValues,
                  promptTemplate,
                  forceMaxLength,
                  forceMaxLengthAttempts,
                  forceMaxLengthCut,
                  dummy,
                  debug
                })
              })).then((response) => response && response.json()).then((data) => {
                if (data.status === false) {
                  this.showMessage("AI Toolkit - Error 1734687655:\n\nWrong status");
                  setButtonErrorState();
                  return;
                }
                if (debug && data.prompt) {
                  console.debug("prompt", data.prompt);
                }
                commit(data.newValue);
                setButtonCompleteState();
              }).catch((error) => {
                setButtonErrorState();
                this.showMessage("AI Toolkit - Error 1733928796:\n\n" + error);
              }).finally(() => {
                this.setState({ isBusy: false });
              });
            } catch (error) {
              this.showMessage("AI Toolkit - Error 1733928803:\n\n" + error);
              this.setState({ isBusy: false });
              setButtonErrorState();
            }
          };
        }
        render() {
          const { id, value, commit, options, className, i18nRegistry } = this.props;
          const finalOptions = Object.assign({}, this.constructor.defaultOptions, options);
          const placeholder = finalOptions.placeholder && i18nRegistry.translate((0, import_lodash.default)(finalOptions.placeholder));
          const showAiButton = !(finalOptions.readonly || finalOptions.disabled);
          return /* @__PURE__ */ import_react4.default.createElement("div", null, /* @__PURE__ */ import_react4.default.createElement("div", { style: { display: "flex", marginBottom: "0.3rem" }, className }, /* @__PURE__ */ import_react4.default.createElement("div", { style: { flexGrow: 1 } }, /* @__PURE__ */ import_react4.default.createElement(
            import_react_ui_components.TextArea,
            {
              id,
              value: value === null ? "" : value,
              className,
              onChange: commit,
              disabled: finalOptions.disabled,
              maxLength: finalOptions.maxlength,
              readOnly: finalOptions.readonly,
              placeholder,
              minRows: finalOptions.minRows,
              maxRows: finalOptions.maxRows,
              expandedRows: finalOptions.expandedRows
            }
          ))), showAiButton ? /* @__PURE__ */ import_react4.default.createElement(GenerateButton_default, { onClick: this.generateText }) : null);
        }
      };
      TextArea.propTypes = {
        id: import_prop_types.default.string,
        value: import_prop_types.default.string,
        highlight: import_prop_types.default.bool,
        commit: import_prop_types.default.func.isRequired,
        options: import_prop_types.default.object,
        validationErrors: import_prop_types.default.array,
        i18nRegistry: import_prop_types.default.object.isRequired
      };
      TextArea.defaultOptions = {
        disabled: false,
        maxlength: null,
        readonly: false,
        placeholder: "",
        minRows: 2,
        maxRows: 24,
        expandedRows: 6
      };
      TextArea = __decorateClass([
        (0, import_react_redux.connect)((state) => ({
          nodeContextPath: import_neos_ui_redux_store.selectors.CR.Nodes.focusedNodePathSelector(state),
          getNodeByContextPath: import_neos_ui_redux_store.selectors.CR.Nodes.nodeByContextPath(state),
          documentNodePath: (((state || {}).cr || {}).nodes || {}).documentNode,
          transientValues: import_neos_ui_redux_store.selectors.UI.Inspector.transientValues(state)
        })),
        (0, import_neos_ui_decorators.neos)((globalRegistry) => ({
          i18nRegistry: globalRegistry.get("i18n")
        }))
      ], TextArea);
    }
  });

  // TextAreaEditor/manifest.js
  var manifest_exports = {};
  var init_manifest2 = __esm({
    "TextAreaEditor/manifest.js"() {
      init_dist();
      init_TextAreaEditor();
      dist_default("JvMTECH.AIToolkit:TextAreaEditor", {}, (globalRegistry) => {
        const editorsRegistry = globalRegistry.get("inspector").get("editors");
        editorsRegistry.set("JvMTECH.AIToolkit/TextAreaEditor", {
          component: TextArea
        });
      });
    }
  });

  // TextAreaEditor/index.js
  init_manifest2();
})();
/*! Bundled license information:

lucide-react/dist/esm/shared/src/utils.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/defaultAttributes.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/Icon.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/createLucideIcon.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/check.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/circle-x.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/sparkles.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/lucide-react.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
