// 深拷贝
const obj1 = {
    age: 20,
    name: '',
    address: {
        city: 'beijing',
    },
    arr: ['a', 'b', 'c']
}
const obj2 = deepClone(obj1)
obj2.address.city = 'shanghai'
obj2.arr[0] = 'ai'
console.log(obj2)
console.log(obj1.address.city) //深拷贝不变
console.log(obj1.arr[0]) //深拷贝不变
    /**
     * 
     * @param {*} obj 
     */
function deepClone(obj = {}) {
    if (typeof obj !== 'object' || obj == null) {
        //obj 是 null，或者不是对象和数组，直接返回
        return obj
    }
    //初始化返回结果
    let result
    if (obj instanceof Array) {
        result = []
    } else {
        result = {}
    }
    for (let key in obj) {
        //保证key不是原型的属性
        if (obj.hasOwnProperty(key)) {
            // 递归
            result[key] = deepClone(obj[key])
        }
    }
    // 返回结果
    return result
}