// Handle checkbox request for todos
const toggleCheck = async event => {

    let todoId = event.target.parentNode.id
    let inputBox = [...event.target.parentNode.children].filter(element => element.classList[0] == "data")

    try {
        // make post request
        const response = await fetch("editTodo.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ "id": todoId, "toggleCheck": true }),
        })

        // convert to json
        const data = await response.json();

        if (data["state"] == 1)
            inputBox[0].classList.add("checkedItem")
        else
            inputBox[0].classList.remove("checkedItem")
    }
    catch (err) {
        console.log(err)
    }
}