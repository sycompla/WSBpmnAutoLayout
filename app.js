import AutoLayout from 'bpmn-auto-layout';
import fs from 'fs';

async function test() {

    let diagramXML = fs.readFileSync("./testXmls/chaos.bpmn", "utf-8");

    let autoLayout = new AutoLayout();

    (async () => {
        let layoutedDiagramXML = await autoLayout.layoutProcess(diagramXML);

        fs.writeFileSync("./layoutedXmls/chaosLayouted.bpmn", layoutedDiagramXML);
    })();

} // test

test();
