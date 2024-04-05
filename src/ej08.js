import { OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID } from './modules/omdb-wrapper.js';



    let resultado1 = await OMDBSearchByPage("cars", 1);
    let resultado2 = await OMDBSearchComplete("cars");
    let resultado3 = await OMDBGetByImdbID('tt0317219'); 

    console.log(resultado1);
    console.log(resultado2);
    console.log(resultado3);
