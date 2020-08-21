const Render = function () {
    const rendererfrogs = function (num) {
        $('#main').empty()
        $('#frogs').empty()
        $('#frogs').text(num)
        let colorArr = ['green', 'yellow', 'pink', 'red', 'purpel', 'white', 'blue', 'brown', 'black', 'orange', 'gray']
        let innerFrogs = ''
        for (let i = 0; i < num; i++) {
            let left = Math.random() * 90
            let up = Math.random() * 83
            let randColor = Math.random() * 10
            randColor = Math.round(randColor)
            innerFrogs += `<i class="fas fa-frog" style="left: ${left}%; top: ${up}%; font-size: ${up}px; color: ${colorArr[randColor]}"></i>`
        }
        $('#main').append(innerFrogs)

    }

    const renderLevel = function (lvl) {
        $('#rank').empty()
        $('#rank').text(lvl)
    }

    const renderSeconds = function (num) {
        $('#time').empty()
        $('#time').text(num)
        let bool = false
        let changeColor = setInterval(function () {
            if (num < 4 && num > 1) {
                bool ? $('#top').css('color', 'black') : $('#top').css('color', 'red')
                bool = !bool
            } else {
                clearInterval(changeColor)
            }
        }, 500);
        let time = setInterval(function () {
            num--
            if (num > 0) {
                renderSeconds(num)
            } else {
                clearInterval(time)
            }
        }, 1000);
    }

    const rendall = function (num) {
        render.rendererfrogs(num)
        render.renderLevel(num)
        render.renderSeconds(num)
        $('#start').text('Catch the frogs!')
        $('#top').css('color', 'yellow')
        setTimeout(function () {
            $('#top').css('color', 'black')
        }, 300)
    }

    const renderEndGame = function () {
        $('#main').empty()
        $('#main').append("<p class='timeup'>Aww, no more froggies for you</p>")
        $('#time').text('-')
        $('#start').text('Start')
    }

    return { rendererfrogs, renderLevel, renderSeconds, rendall, renderEndGame }
}

