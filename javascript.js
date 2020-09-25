let node = document.getElementById("judul"); 
for(let i = 0; i < 4; i++) {
    node.innerHTML = node.innerHTML + '<h3>Artikel ' +(i+1) +'</h3>';
    if (i == 0) {
        isi_paragraph = '<p>lorem ipsum</p>';
    } else if (i == 1) {
        isi_paragraph = '<p>dmkamdakmdkam</p>';
    } else if (i == 2) {
        isi_paragraph = '<p>kacau</p>';
    } else {
        isi_paragraph = 'aduh';
    }
    node.innerHTML = node.innerHTML + isi_paragraph;
}
//comment testing/
//test codingan cidut/
