/*
 * get array image list from service
 */
const IMAGE_BASE_URL = 'https://storage.googleapis.com/nanlabs-engineering-technical-interviews/imgix-samples-list.json';

export const getImageList = async() => {
 
     try {
        const results = await fetch(IMAGE_BASE_URL);
        const data = await results.json();
        const imageList = await data.map( list => {
            return {
                url: list.url,
                name: list.name
            }
        });
        console.log(imageList);
        return imageList;
        
     } catch (error) {
         console.log('error get image list', error);
     }
}


