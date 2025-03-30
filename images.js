function previewImage(showing){
    const file = showing.target.files[0];
    const reader = new FileReader();

    reader.onload = function theResult(result){
        const imgElement = document.getElementById('previewImage');
        const container = document.getElementById('imageUploadcontainer');
            imgElement.src = result. target.result;
            imgElement.style.display = 'block';
            container. classList.add ('has-image');
            
    };
    
}