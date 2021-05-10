import AutoLayout from 'bpmn-auto-layout';
import fs from 'fs';

async function test(filename) {

    let diagramXML = fs.readFileSync("./testXmls/" + filename + ".bpmn", "utf-8");

    let autoLayout = new AutoLayout();

    (async () => {
        let layoutedDiagramXML = await autoLayout.layoutProcess(diagramXML);

        fs.writeFileSync("./layoutedXmls/" + filename + "Layouted.bpmn", layoutedDiagramXML);
    })();

} // test

test("absoluteChaos");
