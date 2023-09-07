import { fetchGET } from "./method-verbs";

const collectionMock = "reviews";
const queryMock = {
  query: {
    name: "Sergio",
  },
};

describe("Test method verbs", () => {
  it("should call function fetchGET", () => {
    const result = fetchGET(collectionMock, queryMock);
    expect(result).toBeDefined();
  });
});
