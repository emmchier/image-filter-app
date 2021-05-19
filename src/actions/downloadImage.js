/*
 * download image by url
 */
export const getImageByURL = async( url, fileName ) => {

    try {
        const res = await fetch( url, {
            method: 'GET'
        });
        if ( res.ok ) {
            await res.blob().then((blob) => {
                const url = window.URL.createObjectURL(
                    new Blob([blob]),
                );
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute(
                    'download',
                    fileName,
                );
                document.body.appendChild(link);
                link.click();
                link.parentNode.removeChild(link);
            });
        } else {
            throw await res.blob();
        }
    } catch (error) {
         throw error;
    }
    
};
