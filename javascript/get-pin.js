function getPINs(str) {
    let splitted = str.split('')

    let result = []

    for(let i = 0; i < splitted.length; i++) {
        switch(splitted[i]) {
            case '1':
                result.push('1','2','4')
        }
    }
}