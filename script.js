const parentList = document.querySelector(".parentList")
const inputbar = document.getElementById("inputBar")
const submitBtn = document.querySelector(".submitBtn")
const filterBtn = document.getElementById("filterBtn")

let List = []

submitBtn.addEventListener("click", () => {
    if (inputbar.value === "") return

    const newList = document.createElement("li")
    const newSpan = document.createElement("span")
    const deleteBtn = document.createElement("button")
    const ID = List.length + 1

    newSpan.textContent = inputbar.value
    deleteBtn.textContent = "Delete"
    deleteBtn.onclick = () => {
        deleteList(ID);
        newList.remove()
    }
    newList.appendChild(newSpan)
    newList.appendChild(deleteBtn)
    parentList.appendChild(newList)
    List.push({ id: ID, text: inputbar.value })
    inputbar.value = ""
})

function deleteList(id) {
    List = List.filter(item => item.id !== id)
}
