export class Clock {
  // horas y minutos
  private hora: number;
  private minuto: number;
  // 
  // calculamos las horas
  private calculoH = (h: number, m: number): number => {
    // dividimos los minutos entre 60 para calular cuantas horas hay
    const contarM = Math.floor(m / 60);
    // sumamos las horas que hay con los minutos sacados anteriormente
    // hay que tener en cuenta las 24h para ello usamos %24
    const contarH = (h + contarM) % 24;
    if (contarH < 0) return 24 - Math.abs(contarH % 24);
    return contarH % 24;
  }

  // asignamos valor  a hora y minuto para posteriormente usarlo
  public constructor(hora: number, minuto?: number) {
    // Usamos el calculo H y M explicado anteriormente
    this.minuto = this.calculoM(minuto ?? 0);
    this.hora = this.calculoH(hora, minuto ?? 0);
  }

  // calculamos los minutos
  private calculoM = (input: number): number => {
    if (input < 0) return 60 - Math.abs(input % 60);
      return input % 60;
  }

  // pasmos las horas y minutos(number) a string
  public toString(): string {
    const tts = (hm: number): string => hm < 10 ? '0' + hm : hm + '';
    return tts(this.hora) + ':' + tts(this.minuto);
  }
  // restar los minutos
  public minus(minutos: number): Clock {
    return new Clock(this.hora, this.minuto - minutos);
  }

  // sumar los minutos 
  public plus(minutos: number): Clock {
    return new Clock(this.hora, this.minuto + minutos);
  }

  // comparamos
  public equals(otros: Clock): boolean {
    return this.hora == otros.hora && this.minuto == otros.minuto;
  }
}