class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const n = nums.length;
        // Method 1 Brute force
        // for(let i=0; i<n; i++){
        //     for(let j=i+1; j<n; j++){
        //         if(nums[i] + nums[j] === target){
        //             return [i,j]
        //         }
        //     }
        // }

        // Method 2 Hash Map
        // const map = new Map();
        // for (let i = 0; i < n; i++) {
        //     const diff = target - nums[i];
        //     if (map.has(diff)) {
        //         return [map.get(diff), i];
        //     }
        //     map.set(nums[i], i);
        // }
        // return;

        // Method 3 Object
        // const indices = {};
        // for (let i = 0; i < n; i++) {
        //     const diff = target - nums[i];
        //     if (indices[diff] !== undefined) {
        //         return [indices[diff], i];
        //     }
        //     indices[nums[i]] = i;
        // }
        // return [];

        // Method 4 Two Pointer
        const arr = nums.map((num, index) => [num, index]);

        arr.sort((a, b) => a[0] - b[0]);
        let left = 0;
        let right = arr.length - 1;

        while (left < right) {
            const sum = arr[left][0] + arr[right][0];

            if (sum === target) {
                return [arr[left][1], arr[right][1]];
            }

            if (sum < target) {
                left++;
            } else {
                right--;
            }
        }

        return [];
    }
}
