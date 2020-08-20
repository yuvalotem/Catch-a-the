const Render = function () {
    const renderer = function (num) {
        $('#main').empty()
        let innerFrogs = ''
        for (let i = 0; i < num; i++) {
            let left = Math.random()*100
            let up = Math.random()*100
            innerFrogs += `<i class="fas fa-frog" style="left: ${left}%; top: ${up}%;"></i>`
        }
        $('#main').append(innerFrogs)
    }

    const timesUp = function () {
        $('#main').empty()
        $('#main').append("<p class='timeup'>time is up</p>")
    }

    const counting = function(num){
        $('#time').empty()
        $('#time').text(num)
        let time = setInterval(function(){
            num--
            if(num != 0){
            $('#time').empty()
            $('#time').text(num)
            counting(num)
            }else{
                $('#time').text('0')
                clearInterval(time)
            }
         }, 1000);
    }

    const updateLevel = function(lvl){
        $('#rank').empty()
        $('#rank').text(lvl)
    }

    const displayfrog = function(frogs){
        $('#frogs').empty()
        $('#frogs').text(frogs)
    }

    const minusfrog = function(){
        let frognum = parseInt($('#frogs').text())
        frognum--
        $('#frogs').text(frognum)
    }

    return {renderer, timesUp, counting, updateLevel, displayfrog, minusfrog}
}

//<i class="fas fa-frog"></i>
// $(innerFrogs).css('top', up)
//$(innerFrogs).css(left, left)