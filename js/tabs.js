document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.steps__btn').forEach(function(step){
        step.addEventListener('click', function(event){
            const path = event.currentTarget.dataset.path
            console.log(path)
            
            document.querySelectorAll('.step-content').forEach(function(stepContent) {
                stepContent.classList.remove('step-content-active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('step-content-active')
        })
    })
})

