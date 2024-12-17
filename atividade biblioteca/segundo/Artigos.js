export class Artigos extends Material {
   #referencias = []
   #localizacao

   constructor(referencias, localizacao, autor, data_publicacao, categoria) {
      super(autor, data_publicacao, categoria);
      this.#referencias.push(referencias);
      this.#localizacao = localizacao
   }

   set setReferencias(referencia) {
      this.#referencias.push(referencia);
   }

   get getReferencias() {
      return this.#referencias;
   }

   set setLocalizacoes(localizacao) {
      this.#localizacao = localizacao;
   }

   get getLocalizacoes() {
      return this.#localizacao;
   }

   toString() {
      return `Artigo[${super.toString()}, 
              referencias: ${this.#referencias}, 
              localização:${this.#localizacao}]`;
   }
}