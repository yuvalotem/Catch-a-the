const Frogame = function () {
    let setting = {
        level: 0,
        frogsnum: 0,
    }

    const getSetting = () => setting
    const frogclicked = () => setting.frogsnum--
    const levelUp = function () {
        setting.level++
        setting.frogsnum = setting.level
    }
    const newGame = () => {
        setting.level = 1
        setting.frogsnum = 1
    }
    return { getSetting, frogclicked, levelUp, newGame }
}