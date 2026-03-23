function namedArray(nArr : String[]){

    for(let name of nArr){
        console.log(name);
    }

    console.log("Number of persons", nArr.length);

    console.log("Index of Sai : ", nArr.indexOf("Sai"));
    
}

namedArray(["Nikhil", "Sushma", "Shreya"]);