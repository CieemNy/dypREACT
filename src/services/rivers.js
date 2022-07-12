const rivers = {
    nile: {
        continent: 'Africa',
        length: '6,650km',
        outflow: 'Mediterranean'
    },
    amazon: {
        continent: 'South America',
        length: '6,575km',
        outflow: 'Atlantic Ocean'
    },
    yangtze: {
        continent: 'Asia',
        length: '6,300km',
        outflow: 'East China Sea'
    },
    mississippi: {
        continent: 'North America',
        length: '6,275km',
        outflow: 'Gulf of Mexico'
    },
}

export function getRiverInformation(name){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(
                rivers[name]
            )
        }, 2000)
    })
}