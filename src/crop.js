import sharp from 'sharp';
import config from './config.js';

export default function cropImage (img) {
    return new Promise(( resolve, reject ) => {
        sharp(img).extract(config).toFile('temp/result.png')
            .then(function(new_file_info) {
               resolve();
            })
            .catch(function(err) {
                reject(err);
            });
    })
}
