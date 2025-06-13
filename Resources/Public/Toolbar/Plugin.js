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

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/react-ui-components/index.js
  var require_react_ui_components = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/react-ui-components/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("NeosProjectPackages")().ReactUiComponents;
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-redux-store/index.js
  var require_neos_ui_redux_store = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-redux-store/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("NeosProjectPackages")().NeosUiReduxStore;
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-ckeditor5-bindings/index.js
  var require_neos_ui_ckeditor5_bindings = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-ckeditor5-bindings/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("NeosProjectPackages")().CkEditorApi;
    }
  });

  // Toolbar/CKEditor/TranslateButton.module.css
  var init_ = __esm({
    "Toolbar/CKEditor/TranslateButton.module.css"() {
    }
  });

  // Toolbar/CKEditor/TranslateButton.js
  var import_react, import_react_redux, import_react_ui_components, import_neos_ui_redux_store, CkEditorApi, TranslateButton;
  var init_TranslateButton = __esm({
    "Toolbar/CKEditor/TranslateButton.js"() {
      import_react = __toESM(require_react());
      import_react_redux = __toESM(require_react_redux());
      import_react_ui_components = __toESM(require_react_ui_components());
      import_neos_ui_redux_store = __toESM(require_neos_ui_redux_store());
      CkEditorApi = __toESM(require_neos_ui_ckeditor5_bindings());
      init_();
      TranslateButton = class extends import_react.PureComponent {
        constructor(props) {
          super(props);
          this.handleClick = () => {
            const { nodeContextPath } = this.props;
            this.setState({ icon: "spinner" });
            CkEditorApi.executeCommand("JvMTECH.AIToolkit:TranslatePlugin.Click", {
              nodeContextPath,
              callback: () => {
                this.setState({ icon: "language" });
              }
            });
          };
          this.state = {
            icon: "language"
          };
          this.setState({
            icon: "language"
          });
        }
        componentWillUnmount() {
          if (this.unsubscribe) {
            this.unsubscribe();
          }
        }
        render() {
          return /* @__PURE__ */ import_react.default.createElement("div", { className: "aitoolkit-toolbar" }, /* @__PURE__ */ import_react.default.createElement(
            import_react_ui_components.IconButton,
            {
              icon: this.state.icon,
              title: "Translate content with AI-Toolkit",
              onClick: this.handleClick
            }
          ), /* @__PURE__ */ import_react.default.createElement("div", { className: "aitoolkit-toolbar_icon" }, /* @__PURE__ */ import_react.default.createElement(import_react_ui_components.Icon, { icon: "magic" })));
        }
      };
      TranslateButton = __decorateClass([
        (0, import_react_redux.connect)((state) => ({
          nodeContextPath: import_neos_ui_redux_store.selectors.CR.Nodes.focusedNodePathSelector(state)
        }))
      ], TranslateButton);
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/ckeditor5-exports/index.js
  var require_ckeditor5_exports = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/ckeditor5-exports/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("vendor")().CkEditor5;
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

  // Toolbar/CKEditor/TranslateCommand.js
  var import_ckeditor5_exports, TranslateCommand;
  var init_TranslateCommand = __esm({
    "Toolbar/CKEditor/TranslateCommand.js"() {
      import_ckeditor5_exports = __toESM(require_ckeditor5_exports());
      init_neos_ui_backend_connector();
      TranslateCommand = class extends import_ckeditor5_exports.Command {
        constructor(editor, toolbarConfiguration) {
          super(editor);
          this.showMessage = (message) => {
            setTimeout(() => {
              alert(message);
            }, 50);
          };
          this.toolbarConfiguration = toolbarConfiguration;
        }
        refresh() {
          this.isEnabled = true;
        }
        execute(options = {}) {
          const originalContent = this.editor.getData();
          const translationRequest = async () => {
            return await fetchWithErrorHandling.withCsrfToken((csrfToken) => ({
              url: "/ai-toolkit/execute/" + this.toolbarConfiguration.translation.modelHandler,
              method: "POST",
              credentials: "include",
              headers: {
                "X-Flow-Csrftoken": csrfToken,
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                nodeContextPath: options.nodeContextPath,
                promptVariables: {
                  targetLanguage: "${String.substr(Neos.Dimension.currentValue(node, 'language').value, 0, 2)}",
                  currentValue: originalContent
                },
                promptTemplate: this.toolbarConfiguration.translation.promptTemplate,
                modelPreset: this.toolbarConfiguration.translation.modelPreset
              })
            })).then((response) => response && response.json()).then((data) => {
              if (data.status === false) {
                this.showMessage(
                  "AI Toolkit - Error 1741363232:\n\nWrong status" + (data.message ? " - " + data.message : "")
                );
                return;
              }
              this.editor.setData(data.newValue);
              options.callback();
            }).catch((error) => {
              this.showMessage("AI Toolkit - Error 1741363237:\n\n" + error);
            });
          };
          translationRequest();
        }
      };
    }
  });

  // Toolbar/CKEditor/TranslatePlugin.js
  var import_ckeditor5_exports2, TranslatePlugin_default;
  var init_TranslatePlugin = __esm({
    "Toolbar/CKEditor/TranslatePlugin.js"() {
      import_ckeditor5_exports2 = __toESM(require_ckeditor5_exports());
      init_TranslateCommand();
      TranslatePlugin_default = (toolbarConfiguration) => class TranslatePlugin extends import_ckeditor5_exports2.Plugin {
        init() {
          this.editor.commands.add(
            "JvMTECH.AIToolkit:TranslatePlugin.Click",
            new TranslateCommand(this.editor, toolbarConfiguration)
          );
        }
      };
    }
  });

  // Toolbar/manifest.js
  var manifest_exports = {};
  var init_manifest2 = __esm({
    "Toolbar/manifest.js"() {
      init_dist();
      init_TranslateButton();
      init_TranslatePlugin();
      dist_default("JvMTECH.AIToolkit:Toolbar", {}, (globalRegistry, { frontendConfiguration }) => {
        const ckEditorRegistry = globalRegistry.get("ckEditor5");
        const richtextToolbar = ckEditorRegistry.get("richtextToolbar");
        const toolbarConfiguration = frontendConfiguration["JvMTECH.AIToolkit:Toolbar"];
        if (toolbarConfiguration && toolbarConfiguration.translation) {
          richtextToolbar.set(
            "JvMTECH.AIToolkit:CKEditor.TranslateButton",
            {
              component: TranslateButton,
              isVisible: function(editorOptions) {
                var isVisible = false;
                if (editorOptions["formatting"] !== void 0 && Object.keys(editorOptions["formatting"]).length > 0) {
                  isVisible = true;
                }
                return isVisible;
              }
            },
            "start"
          );
          const config = ckEditorRegistry.get("config");
          config.set(
            "JvMTECH.AIToolkit:TranslatePlugin",
            (ckEditorConfiguration, { editorOptions }) => {
              const plugin = TranslatePlugin_default(toolbarConfiguration);
              ckEditorConfiguration.plugins = ckEditorConfiguration.plugins || [];
              ckEditorConfiguration.plugins.push(plugin);
              return ckEditorConfiguration;
            }
          );
        }
      });
    }
  });

  // Toolbar/index.js
  init_manifest2();
})();
