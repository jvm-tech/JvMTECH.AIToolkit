import manifest from "@neos-project/neos-ui-extensibility";
import TranslateButton from "./CKEditor/TranslateButton";
import TranslatePlugin from "./CKEditor/TranslatePlugin";

manifest("JvMTECH.AIToolkit:Toolbar", {}, (globalRegistry, {frontendConfiguration}) => {
    const ckEditorRegistry = globalRegistry.get("ckEditor5");
    const richtextToolbar = ckEditorRegistry.get("richtextToolbar");

    const toolbarConfiguration = frontendConfiguration["JvMTECH.AIToolkit:Toolbar"];

    if (toolbarConfiguration && toolbarConfiguration.translation) {
        richtextToolbar.set(
            "JvMTECH.AIToolkit:CKEditor.TranslateButton",
            {
                component: TranslateButton,
                isVisible: function (editorOptions) {
                    var isVisible = false;
                    if (
                        editorOptions["formatting"] !== undefined &&
                        Object.keys(editorOptions["formatting"]).length > 0
                    ) {
                        isVisible = true;
                    }
                    return isVisible;
                },
            },
            "start"
        );

        const config = ckEditorRegistry.get("config");
        config.set(
            "JvMTECH.AIToolkit:TranslatePlugin",
            (ckEditorConfiguration, {editorOptions}) => {
                const plugin = TranslatePlugin(toolbarConfiguration);
                ckEditorConfiguration.plugins = ckEditorConfiguration.plugins || [];
                ckEditorConfiguration.plugins.push(plugin);
                return ckEditorConfiguration;
            }
        );
    }
});
