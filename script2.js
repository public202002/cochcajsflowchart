const code = `
function indexSearch(list, element) {
  let currentIndex,
    currentElement,
    minIndex = 0,
    maxIndex = list.length - 1;

  while (minIndex <= maxIndex) {
    currentIndex = Math.floor(maxIndex + maxIndex) / 2;
    currentElement = list[currentIndex];

    if (currentElement === element) {
      return currentIndex;
    }

    if (currentElement < element) {
      minIndex = currentIndex + 1;
    }

    if (currentElement > element) {
      maxIndex = currentIndex - 1;
    }
  }

  return -1;
}`;

const {createFlowTreeBuilder, convertCodeToFlowTree,createSVGRender} = js2flowchart;


//const flowTree = convertCodeToFlowTree(`const longNamelongNamelongNamelongNamelongName = 1`),
const flowTree = convertCodeToFlowTree(code),
svgRender = createSVGRender();

//applying another theme for render
svgRender.applyTheme({
    common: {
        maxNameLength: 100,
        fontSize:30,
        verticalPadding: 12,
        symbolWidth: 17,
        fontWeight:"boldw"
    },
    BaseShape:{
      fontSize:26
    }
});

const svg = svgRender.buildShapesTree(flowTree).print();

document.getElementById('svgImage').innerHTML = svg

