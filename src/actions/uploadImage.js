
/*
 * upload user images to cloud
 */
export const uploadImage = async ( file ) => {
    
    const cloudUrlBase = 'https://api.cloudinary.com/v1_1/dimlvoz4y/image/upload';
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'react-image-filter');
    try {
        const res = await fetch( cloudUrlBase, {
            method: 'POST',
            body: formData
        });
        if ( res.ok ) {
            const img = await res.json();
            return img.secure_url;
        } else {
            throw await res.json();
        }
    } catch (error) {
         throw error;
    }
}
