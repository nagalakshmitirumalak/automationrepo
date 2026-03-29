function fibonacciSeries(fab : number): number[]{

    if (fab == 0) return [];
    if (fab == 1) return [0];
    
    let series: number[] = [0, 1];

    for(let i=2; i<fab; i++){
        series[i] = (series[i-1]!) + (series[i-2]!);
    }
    return series;

}

console.log("Fibonacci Of : ", fibonacciSeries(2));