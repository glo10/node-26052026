import { describe, it, expect } from "vitest";
import { findAll } from '../src/teams'
/**
 * describe() englobe plusieurs test
 *  Sert à regrouper plusieurs tests
 * it() ou son alias test() effectue les tests
 */
describe("Testing teams", () => {
  describe("Testing findAll()", () => {
    it.only("Should have 3 teams", () => {
        // ARRANGE
        // ACT
        const result = findAll().length
        // ASSERT
        expect(result).toBe(3)
    });
    it.only("Should be an array", () => {
        expect(Array.isArray(findAll())).toBe(true)
    });
  });
  describe.skip("Testing findOne()", () => {
    it("Should have a team when id is 1", () => {});
    it("Should have a team like { id, name }", () => {});
    it("Should have an error when id is 4", () => {});
  });
});
