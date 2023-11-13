const expect = require("chai").expect;

const f = require("../f_skeleton");

describe("thenable", () => {
    it("resolves with correct value", async() => {
        const result = await f.thenable;
        expect(result).to.equal("👍");
    });
});

describe("rejectable", () => {
    it("rejects with correct value", (done) => {
        Promise.reject(f.rejectable)
            .catch((err) => err)
            .catch((err) => {
                expect(err).to.equal("👎");
                done();
            });
    });
});