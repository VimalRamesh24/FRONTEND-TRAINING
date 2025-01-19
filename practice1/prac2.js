document.addEventListener('keydown',function(event){
    if((event.ctrlKey || event.metakey) && event.key ==='a'){
        alert('Pressed Ctrl + A !');
    }
})