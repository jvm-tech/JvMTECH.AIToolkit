export default class Helpers {
    static getDocumentContentUrl = (location, nodeContextPath) => {
        const port = location.port ? `:${location.port}` : '';
        return (
            location.protocol +
            "//" +
            location.hostname +
            port +
            "/ai-toolkit/page/renderPreviewPage?node=" +
            encodeURIComponent(nodeContextPath)
        );
    };

    static getDocumentContent = async (documentContentUrl) => {
        return await fetch(documentContentUrl).then((response) => {
            if (!response || !response.ok) {
                throw new Error(`AI Toolkit - Failed fetching preview: ${response.status} ${response.statusText}`);
            }
            return response.text();
        });
    };

    static getPropertyValue = (node, transientValues, propertyName) => {
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
