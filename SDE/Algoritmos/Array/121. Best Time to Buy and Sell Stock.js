/**
 * @param {number[]} prices
 * @return {number}
 */

const complexity = {
    1: 'O(n^2)', // Quadratic Time
    2: 'O(n)', // Linear Time
    3: 'O(n)' // Linear Time

}



const maxProfit = (prices, complexity ) => {
    switch (complexity) {
        case 1:

            /* 1. 🐢 Fuerza bruta — O(n²) */
            let maxProfit = 0;

            for (let i = 0; i < prices.length; i++) {
                for (let j = i + 1; j < prices.length; j++) {
                    const profit = prices[ j ] - prices[ i ];
                    if (profit > maxProfit) {
                        maxProfit = profit;
                    }
                }
            }
            return maxProfit;

        case 2:
            /* 2. 🧠 Optimización con variables — O(n) */
            let minPrice = Infinity;
            let optimizedProfit = 0;
            for (let i = 0; i < prices.length; i++) {
                if (prices[ i ] < minPrice) {
                    minPrice = prices[ i ];
                } else {
                    const profit = prices[ i ] - minPrice;
                    if (profit > optimizedProfit) {
                        optimizedProfit = profit;
                    }
                }
            }
            return optimizedProfit;

        case 3:
            /* 3. ⚡ Versión aún más concisa — también O(n) */
            let conciseMin = prices[ 0 ];
            let conciseMaxProfit = 0;
            for (let i = 1; i < prices.length; i++) {
                conciseMaxProfit = Math.max(conciseMaxProfit, prices[ i ] - conciseMin);
                conciseMin = Math.min(conciseMin, prices[ i ]);
            }
            return conciseMaxProfit;

        default:
            throw new Error("Invalid complexity level. Use 1, 2, or 3.");
    }
};

/* Test Cases */
console.log(maxProfit([7,1,5,3,6,4], 1))
console.log(maxProfit([7,1,5,3,6,4], 2))
console.log(maxProfit([7,1,5,3,6,4], 3))

console.log(maxProfit([7,6,4,3,1], 1))
console.log(maxProfit([7,6,4,3,1], 2))
console.log(maxProfit([7,6,4,3,1], 3))


