import { expect } from "chai"
import { spy, stub } from "sinon"

describe("la de da", function () {
    describe("should barf", function () {
        it("if no logger defined on test class", function () {
            let badClass = {}
            expect(() => !badClass).to.throw()
        })
    })
})