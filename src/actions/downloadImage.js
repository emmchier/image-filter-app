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

//     fetch(url, {
//     method: 'GET'
//   })
//   .then((response) => response.blob())
//   .then((blob) => {
//     // Create blob link to download
//     const url = window.URL.createObjectURL(
//       new Blob([blob]),
//     );
//     const link = document.createElement('a');
//     link.href = url;
//     link.setAttribute(
//       'download',
//       fileName,
//     );

//     // Append to html link element page
//     document.body.appendChild(link);

//     // Start download
//     link.click();

//     // Clean up and remove the link
//     link.parentNode.removeChild(link);
//   });
};
