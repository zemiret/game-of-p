import dictionary from 'app/assets/dictionary.json';

export class Words {
  public static lookupBaseHref = 'https://sjp.pwn.pl/szukaj/';

  static selectRandom(): string {
    return dictionary[Math.floor(Math.random() * dictionary.length)];
  }

  static selectBatch(amount: number): string[] {
    let wordsBag = new Set<string>();

    for (let i = 0; i < amount; i++) {
      let word = this.selectRandom();
      while (wordsBag.has(word)) {
        word = this.selectRandom();
      }
      wordsBag.add(word);
    }

    return Array.from(wordsBag);
  }
}
