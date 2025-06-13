import { Command } from "ckeditor5-exports";
import { fetchWithErrorHandling } from "@neos-project/neos-ui-backend-connector";

export default class TranslateCommand extends Command {
    constructor(editor, toolbarConfiguration) {
        super(editor);
        this.toolbarConfiguration = toolbarConfiguration;
    }

    refresh() {
        this.isEnabled = true;
    }

    execute(options = {}) {
        const originalContent = this.editor.getData();

        const translationRequest = async () => {
            return await fetchWithErrorHandling
                .withCsrfToken((csrfToken) => ({
                    url: "/ai-toolkit/execute/" + this.toolbarConfiguration.translation.modelHandler,
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "X-Flow-Csrftoken": csrfToken,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        nodeContextPath: options.nodeContextPath,
                        promptVariables: {
                            targetLanguage:
                                "${Configuration.setting('Neos.ContentRepository.contentDimensions.language.presets.' + node.context.targetDimensions.language + '.label')}",
                            currentValue: originalContent,
                        },
                        promptTemplate: this.toolbarConfiguration.translation.promptTemplate,
                        modelPreset: this.toolbarConfiguration.translation.modelPreset
                    }),
                }))
                .then((response) => response && response.json())
                .then((data) => {
                    if (data.status === false) {
                        this.showMessage(
                            "AI Toolkit - Error 1741363232:\n\nWrong status" +
                            (data.message ? " - " + data.message : "")
                        );
                        return;
                    }

                    this.editor.setData(data.newValue);
                    options.callback();
                })
                .catch((error) => {
                    this.showMessage("AI Toolkit - Error 1741363237:\n\n" + error);
                });
        };

        translationRequest();
    }

    showMessage = (message) => {
        setTimeout(() => {
            alert(message);
        }, 50);
    };
}
