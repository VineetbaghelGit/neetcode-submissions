class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false
        // Method 1
        // const sortedStr1 = s.split('').sort().join('')
        // const sortedStr2 = t.split('').sort().join('')
        // return sortedStr1 === sortedStr2

        // Method 2
        const map1 = new Map()
        const map2 = new Map()

        for(let i=0; i<s.length; i++){
            map1.set(s[i], map1.get(s[i]) ? map1.get(s[i])+1: 1)
            map2.set(t[i], map2.get(t[i]) ? map2.get(t[i])+1: 1)
        }
        for(const [key,value] of map1){
            if(map2.get(key) !== value){
                return  false
            }
        }
        return true
    }
}
