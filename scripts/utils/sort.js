
function getSorted(sort, medias) {
    if (sort == "popularity") {
        medias.sort((a, b) => b.likes - a.likes);
    } else if (sort == "title") {
        medias.sort((a, b) => {
            let fa = a.title.toLowerCase(),
                fb = b.title.toLowerCase();
        
            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
        })
    } else {
        medias.sort((a, b) => {
            let fa = a.date.toLowerCase(),
                fb = b.date.toLowerCase();
        
            if (fa < fb) {
                return 1;
            }
            if (fa > fb) {
                return -1;
            }
            return 0;
        })
    }
    return medias
}



