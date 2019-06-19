const fse = require('fs-extra')
const dir = 'temp'
fse.pathExists(dir)
    .then((exists) => {
        console.log(exists)
        if (exists) {
            fse.remove(dir)
                .then(() => {
                    console.log('success!')
                })
        }
        fse.ensureDir(dir)
            .then(() => {
                console.log("create")
            })
    })
    .catch(err => {
        console.error(err)
    })