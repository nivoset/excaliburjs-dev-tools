export class DevTool {
    public pane: unknown
    public tabs: unknown;
    public pickerSystem: unknown;

    constructor(public engine: unknown) {
        console.log("This tool is deprecated, use the new dev tools chrome extension instead");
    }

    /**
     * Add any event listeners relevant to the devtool
     */
    public addListeners() {
    }

    public selectEntityById(id: number) {
    }

    /**
     * `update()` is called periodically over time
     * @param devtool 
     */
    public update(devtool: DevTool) {
    }

}