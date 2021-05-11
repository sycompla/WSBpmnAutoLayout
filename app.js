import { AutoLayout } from './lib/AutoLayout.js';
import fs from 'fs';

async function test(filename, extension) {

    let diagramXML = fs.readFileSync("./testXmls/" + filename + "." + extension, "utf-8");

    let autoLayout = new AutoLayout();

    (async () => {
        let layoutedDiagramXML = await autoLayout.layoutProcess(diagramXML);

        fs.writeFileSync("./layoutedXmls/" + filename + "Layouted.bpmn", layoutedDiagramXML);
    })();

} // test

test("a", "iflw");
