
import {add,setCacheData,getCacheData,clearCacheData} from "./cacheUtils";

const setup = {
    testKey:'abc',
    testValue:"abc"
}


describe('cacheUtils',()=>{

    beforeEach(()=>{
        clearCacheData([setup.testKey])
    })
    it('should add 1+1 = 2', function () {
        expect(add(1,1)).toBe(2)
    });

    it('should setcache return false', function () {
        setCacheData(setup.testKey,setup.testValue)
        expect(getCacheData(setup.testKey)).toBe(setup.testValue)

    });

    it('should getcache with no exist key', function () {
        setCacheData(setup.testKey,setup.testValue)
        expect(getCacheData(setup.testKey)).toBe(setup.testValue)
    });


    it('should setcachedata correctly', function () {
        setCacheData("a","1");
        expect(getCacheData('a')).toBe("1")
        clearCacheData(['a'])
        expect(getCacheData('a')).toBeNull();
    });

})