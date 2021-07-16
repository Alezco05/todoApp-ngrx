export class Todo {
  public id: number = 0;
  public texto: string = '';
  public completado: boolean = false;
  constructor(texto: string) {
    this.texto = texto;
    this.id = new Date().getTime();
    this.completado = false;
  }
}
