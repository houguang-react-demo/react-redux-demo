const initState = {
    initValue: "输入",
    list: ["a"]
}

const reducer = (state = initState, action) => {

    let newState = JSON.parse(JSON.stringify(state));
    if (action.type === "change") {
        newState.initValue = action.value;
    }

    if (action.type === "add") {
        newState.list.push(newState.initValue)
        newState.initValue = ""
    }

    return newState
}

export default reducer