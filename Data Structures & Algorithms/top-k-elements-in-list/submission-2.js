class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        //    Method 1 Sorting
        // const count = {};
        // for (const num of nums) {
        //     count[num] = (count[num] || 0) + 1;
        // }
        // const arr = Object.entries(count).map(([num, freq]) => [freq, parseInt(num)]);
        // arr.sort((a, b) => b[0] - a[0]);

        // return arr.slice(0, k).map((p) => p[1]);

        // Method 2 Bucket sort
        const count = {};
        const freq = Array.from({ length: nums.length + 1 }, () => []);

        for (let n of nums) {
            count[n] = (count[n] || 0) + 1;
        }
        for (let n in count) {
            freq[count[n]].push(parseInt(n));
        }
        let res = [];
        for (let i = freq.length - 1; i > 0; i--) {
            for (const n of freq[i]) {
                res.push(n);
                if (res.length === k) {
                    return res;
                }
            }
        }
    }
}
