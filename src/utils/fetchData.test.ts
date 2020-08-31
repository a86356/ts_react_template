import {fetchData} from "./fetchData";

describe("fetchdata",()=>{
    it('should async fetchdata return {success:true}', function (done) {
        fetchData((data:any)=>{
            expect(data).toEqual({success:true})
            done()
        })
    });
})