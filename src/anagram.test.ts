import { anagram } from "./anagram";


describe(':anagram tests', () => {
  describe('invalid file', () => {
    it('Should return a message if an invalid file was submitted', () => {
      const filePath = './Data/example3.txt';

      const response = anagram(filePath);

      expect(response).toBe('./Data/example3.txt not found');
    })
  })
});