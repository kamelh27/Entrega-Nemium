const details = document.querySelectorAll('details')

details.forEach((details)=>{
    details.querySelector('summary').addEventListener('click', expand)
})

function expand(){
    details.forEach((details)=>{
        details.removeAttribute('open')
    })
}