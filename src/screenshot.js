import screenshot from 'screenshot-desktop';

const takeScreenshot = () => {
    const params = {
        filename: 'temp/screenshot.png',
        format: 'png'
    }

    return new Promise((resolve, reject) => {
        screenshot(params).then((img) => {
            resolve(img);
        }).catch((error) => {
            reject(error);
        })
    })
}

export default takeScreenshot;
