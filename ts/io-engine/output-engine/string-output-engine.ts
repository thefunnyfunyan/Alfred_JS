import { IOutputEngine } from './output-engine-interface';

export class StringOutputEngine extends IOutputEngine {
  public output(outputString: string) {
    console.log(outputString);
  }
}
