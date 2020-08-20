const render = Render();
let level = 1
let time = 1000

const round = function (level, time) {
    let cntfrog = level
    render.renderer(level)
    render.counting(level)
    render.updateLevel(level)
    render.displayfrog(level)
    setTimeout(function () {
        if ($('#main').has('i').length) {
            render.timesUp()
            render.updateLevel('-')
            level = 1
            time = 1000
        } else {
            level++
            time += 1000
            round(level, time)
        }
    }, time)

}


$('#main').on('click', '.fa-frog', function () {
    $(this).remove()
    render.minusfrog()
})

$('#start').on('click', function(){
    round(level,time)
})



