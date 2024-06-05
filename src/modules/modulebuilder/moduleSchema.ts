const initialData ={
    chapterId: null,
    type: null,
    contentContentId: null,
    contentTitle: null,
    contentDescription: null,
    contentMediaType: null,
    contentMediaUrl: null,
    contentMediaCaption: null,
    editorConfigToolboxType: null,
    editorConfigToolboxContent: null,
    runnerConfigModuleName: null,
    runnerConfigModuleConfigMatrixSize: null,
    runnerConfigModuleConfigMatrixType: null,
    runnerConfigModuleConfigTestCaseInitialState: [[5,5],[5,4],[5,4]],
    runnerConfigModuleConfigTestCaseExpectedOutput: null,
    runnerConfigModuleConfigControllerType: null
};



const keys = [
    "chapterId",
    "type",
    "contentContentId",
    "contentTitle",
    "contentDescription",
    "contentMediaType",
    "contentMediaUrl",
    "contentMediaCaption",
    "editorConfigToolboxType",
    "editorConfigToolboxContent",
    "runnerConfigModuleName",
    "runnerConfigModuleConfigMatrixSize",
    "runnerConfigModuleConfigMatrixType",
    "runnerConfigModuleConfigTestCaseInitialState",
    "runnerConfigModuleConfigTestCaseExpectedOutput",
    "runnerConfigModuleConfigControllerType"
]


const options = {
    runnerConfigModuleConfigControllerType: ["Blocks", "Code"], // Dropdown options for 'category'
};

const integerKeys = ['quantity']; // Added 'quantity' to integerKeys
