const DELAY = 1;

let history = [

];

const algorithms = {
    "selection":(array)=>{
        history = [];
        let logCopy = [];
        let tmp;
        for (let i = 0; i < array.length; i++){
            for (let j = i + 1; j < array.length; j++){
                if (array[j] < array[i]){
                    tmp = array[i];
                    array[i] = array[j];
                    array[j] = tmp;
                }
                logCopy = [...array];
                history.push(logCopy);
            }
        }
        return array
    }
}

let logPointer = 0;

function sortArray(array, algorithm = (array)=>{return array}){
    algorithm(array);
    renderNextStep();
}

function renderNextStep(){
    graphVis.data = history[logPointer];
    graphVis.render();
    logPointer++;
    if (logPointer <= history.length - 1){
        setTimeout(
            renderNextStep,
            DELAY
        )
    } else {
        logPointer = 0;
    }
}