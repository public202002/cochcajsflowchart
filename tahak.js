/**
* Access APIs when js2flowchart injected into HTML page
*/
const {convertCodeToFlowTree, convertFlowTreeToSvg} = window.js2flowchart;

/**
* or import from node_modules 
*/ 
import {convertCodeToFlowTree, convertFlowTreeToSvg} from 'js2flowchart';//way 1
import * as js2flowchart from 'js2flowchart';//way 2


const svg = js2flowchart.convertCodeToSvg(code);


const {convertCodeToFlowTree, convertFlowTreeToSvg} = js2flowchart;
const flowTree = convertCodeToFlowTree(code);
const svg = convertFlowTreeToSvg(flowTree);//XML string


const {createFlowTreeBuilder, createSVGRender} = js2flowchart;
const flowTreeBuilder = createFlowTreeBuilder(),
    svgRender = createSVGRender();
const flowTree = flowTreeBuilder.build(code),
    shapesTree = svgRender.buildShapesTree(flowTree);
const svg = shapesTree.print();//XML string


ABSTRACTION_LEVELS interface.
   FUNCTION
   FUNCTION_DEPENDENCIES
   CLASS
   IMPORT
   EXPORT
const {
    ABSTRACTION_LEVELS,  createFlowTreeBuilder, convertFlowTreeToSvg
} = js2flowchart;
const flowTreeBuilder = createFlowTreeBuilder();
//you can pass one level or multiple levels
flowTreeBuilder.setAbstractionLevel([
    ABSTRACTION_LEVELS.IMPORT,
    ABSTRACTION_LEVELS.EXPORT
]);
const flowTree = flowTreeBuilder.build(code);
const svg = convertFlowTreeToSvg(flowTree);
   

flowTreeBuilder.setAbstractionLevel({
    defined: [TOKEN_TYPES.CALL_EXPRESSION],
    custom: [
        getCustomFunctionDeclaration(),
        getCustomAssignmentExpression(),
        getCustomVariableDeclarator()
    ]
})



const { createPresentationGenerator } = js2flowchart;
const presentationGenerator = createPresentationGenerator(code);
const slides = presentationGenerator.buildSlides();//array of SVGs


svgRender.applyLightTheme() to apply light scheme.
There are next predefined color schemes:
   DEFAULT: applyDefaultTheme
   BLACK_AND_WHITE: applyBlackAndWhiteTheme
   BLURRED: applyBlurredTheme
   LIGHT: applyLightTheme
   const {createSVGRender, convertCodeToFlowTree} = js2flowchart;
   const flowTree = convertCodeToFlowTree(code),
       svgRender = createSVGRender();
   //applying another theme for render
   svgRender.applyLightTheme();   
   const svg = svgRender.buildShapesTree(flowTree).print();



   svgRender.applyColorBasedTheme({
    strokeColor: '#555',
    defaultFillColor: '#fff',
    textColor: '#333',
    arrowFillColor: '#444',
    rectangleFillColor: '#bbdefb',
    rectangleDotFillColor: '#ede7f6',
    functionFillColor: '#c8e6c9',
    rootCircleFillColor: '#fff9c4',
    loopFillColor: '#d1c4e9',
    conditionFillColor: '#e1bee7',
    destructedNodeFillColor: '#ffecb3',
    classFillColor: '#b2dfdb',
    debuggerFillColor: '#ffcdd2',
    exportFillColor: '#b3e5fc',
    throwFillColor: '#ffccbc',
    tryFillColor: '#FFE082',
    objectFillColor: '#d1c4e9',
    callFillColor: '#dcedc8',
    debugModeFillColor: '#666'
 });



svgRender.applyTheme({}). You can apply styles above of current theme, overriding only that behaviour you need. Let's take an example with Return statement.
svgRender.applyTheme({
    common: {
        maxNameLength: 100
    },
    ReturnStatement: {
        fillColor: 'red',
        roundBorder: 10
    }
});
// ! https://github.com/Bogdan-Lyashenko/js-code-to-svg-flowchart/blob/master/src/render/svg/appearance/themes/DefaultBaseTheme.js
//     /src/render/svg/appearance/themes/DefaultBaseTheme.js


const {
    convertCodeToFlowTree,
    createSVGRender,
    createShapesTreeEditor
} = js2flowchart;
const flowTree = convertCodeToFlowTree(code),
    svgRender = createSVGRender();
    shapesTree = svgRender.buildShapesTree(flowTree);
const shapesTreeEditor = createShapesTreeEditor(shapesTree);
shapesTreeEditor.blurShapeBranch(
    (shape) => shape.getName() === '(devFlag)'
);
const svg = shapesTreeEditor.print();