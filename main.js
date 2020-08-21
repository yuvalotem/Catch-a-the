const render = Render();
const frogy = Frogame()
let data = frogy.getSetting();

const round = function () {
    render.rendall(data.level)
    setTimeout(function () {
        if (data.frogsnum > 0) {
            frogy.newGame()
            render.renderEndGame()
        } else {
            frogy.levelUp()
            round()
        }
    }, data.level * 1000)

}

$('#main').on('click', '.fa-frog', function () {
    frogy.frogclicked()
    render.rendererfrogs(data.frogsnum)
})

$('#start').on('click', function () {
    frogy.newGame()
    round()
})



