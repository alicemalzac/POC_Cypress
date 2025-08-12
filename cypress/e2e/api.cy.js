describe("PetStore API Tests", () => {
  it("should retrieve available pets by status successfully", () => {
    const status = "available";
    cy.api_request("GET", `/pet/findByStatus?status=${status}`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.length).to.be.greaterThan(0);
      const firstPet = response.body[0];
      expect(firstPet).to.have.property("id");
      expect(firstPet).to.have.property("name");
      expect(firstPet.status).to.eq(status);
    });
  });

  it("should return 404 for a non-existent pet ID", () => {
    const nonExistentPetId = 999999;
    cy.api_request("GET", `/pet/${nonExistentPetId}`, { failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(404);
      expect(response.body.message).to.eq("Pet not found");
    });
  });
});