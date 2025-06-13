import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { IconButton, Icon } from "@neos-project/react-ui-components";
import { selectors } from "@neos-project/neos-ui-redux-store";
import * as CkEditorApi from "@neos-project/neos-ui-ckeditor5-bindings";
import "./TranslateButton.module.css";

@connect((state) => ({
    nodeContextPath: selectors.CR.Nodes.focusedNodePathSelector(state),
}))
export default class TranslateButton extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            icon: "language",
        };

        this.setState({
            icon: "language",
        });
    }

    componentWillUnmount() {
        // Clean up subscription
        if (this.unsubscribe) {
            this.unsubscribe();
        }
    }

    handleClick = () => {
        const { nodeContextPath } = this.props;

        this.setState({ icon: "spinner" });
        CkEditorApi.executeCommand("JvMTECH.AIToolkit:TranslatePlugin.Click", {
            nodeContextPath,
            callback: () => {
                this.setState({ icon: "language" });
            },
        });
    };

    render() {
        return (
            <div className="aitoolkit-toolbar">
                <IconButton
                    icon={this.state.icon}
                    title="Translate content with AI-Toolkit"
                    onClick={this.handleClick}
                />
                <div className="aitoolkit-toolbar_icon">
                    <Icon icon="magic" />
                </div>
            </div>
        );
    }
}
