import { Plugin } from "ckeditor5-exports";
import TranslateCommand from "./TranslateCommand";

export default (toolbarConfiguration) =>
    class TranslatePlugin extends Plugin {
        init() {
            this.editor.commands.add(
                "JvMTECH.AIToolkit:TranslatePlugin.Click",
                new TranslateCommand(this.editor, toolbarConfiguration)
            );
        }
    };
