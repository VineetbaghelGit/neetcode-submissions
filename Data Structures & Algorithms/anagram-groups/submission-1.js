class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // Method 1
        // const res = {}
        // for(let s of strs){
        //     const sorted = s.split('').sort().join("")
        //     if(!res[sorted]){
        //         res[sorted] =[]
        //     }
        //     res[sorted].push(s)
        // }
        // return Object.values(res)

        // Method 2 Map
        const map = new Map()
        for(let s of strs){
            const key = s.split("").sort().join('')
            if(!map.has(key)){
                map.set(key,[])
            }
            map.get(key).push(s)
        }
        return [...map.values()]
    }
}
