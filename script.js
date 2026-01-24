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
    const toggleBtn = document.createElement("div")
    const ID = List.length + 1

    newSpan.textContent = inputbar.value
    deleteBtn.classList.add("deleteBtn")
    deleteBtn.textContent = "Delete"
    deleteBtn.onclick = () => {
        deleteList(ID);
        newList.remove()
    }
    toggleBtn.onclick = () => {
        toggleList(ID)
        toggleBtn.classList.toggle("done")
        newList.classList.toggle("done")
    }
    toggleBtn.classList.add("toggleBtn")
    newList.appendChild(toggleBtn)
    newList.appendChild(newSpan)
    newList.appendChild(deleteBtn)
    newList.classList.add("List")
    parentList.appendChild(newList)
    List.push({ id: ID, text: inputbar.value, done: false })
    inputbar.value = ""
})

function deleteList(id) {
    List = List.filter(item => item.id !== id)
}

function toggleList(id) {
    List = List.map(item => item.id === id ? { ...item, done: !item.done } : item)
}