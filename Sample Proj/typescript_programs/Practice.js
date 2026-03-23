function namedArray(nArr) {
    for (var _i = 0, nArr_1 = nArr; _i < nArr_1.length; _i++) {
        var name_1 = nArr_1[_i];
        console.log(name_1);
    }
    console.log("Number of persons", nArr.length);
    console.log("Index of Sai : ", nArr.indexOf("Sai"));
}
namedArray(["Nikhil", "Sushma", "Shreya"]);
