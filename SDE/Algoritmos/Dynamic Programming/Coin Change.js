/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    // Base case: if amount is 0, no coins needed
    if (amount === 0) return 0;
    
    // Create DP array initialized with amount + 1 (impossible value)
    // dp[i] represents minimum coins needed to make amount i
    const dp = new Array(amount + 1).fill(amount + 1);
    
    // Base case: 0 amount requires 0 coins
    dp[0] = 0;
    
    // Fill the DP array
    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            if (coin <= i) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    
    // Return result: if dp[amount] is still amount + 1, it's impossible
    return dp[amount] > amount ? -1 : dp[amount];
};