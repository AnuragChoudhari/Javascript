const object1 = {
    fname: 'jhon',
    lname: 'boston',
    age: 10
};

const o1Proxy = new Proxy(object1, {
    get(target, prop){
        if(prop in target) return target[prop];
        return false;
    },
    set(target,prop,value){
        if(!(prop in target)) throw new Error(`${prop} does not exist`);
        switch(prop){
            case 'fname':
            case 'lname':
                if (typeof value !== 'string') throw new Error(`${prop} must be an string`)
            break;
            case 'age':
                if(typeof value !== 'number')
                    throw new Error(`${prop} must be a number`);
                if(value<=0) throw new Error(`${prop} must be zero`);
        }
        target[prop] = value
    }
});

o1Proxy.age = 10;
o1Proxy.fname = 22;

console.log(o1Proxy.fname)