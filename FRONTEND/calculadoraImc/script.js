const body = document.body
const btnForm = document.querySelector("form")
btnForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const input = document.querySelector("input")
    if(input.value==""){
        body.insertAdjacentHTML("afterbegin",`
        <div class="modal-wrapper">
        <div class="modal">
        <button id="btn-close">X</button>
            <h2>Modal</h2>
            <p>feeedback</p>
        </div>
        </div>
        `)
    }
    const close = document.querySelector("#btn-close")
    close.addEventListener("click",()=>{
        const wrapper = document.querySelector(".modal-wrapper")
        wrapper.remove()
    })
})
