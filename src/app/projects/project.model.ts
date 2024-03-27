export class Project {
  public position: string;
  public date: string;
  public shortDesc: string;
  public description: string[] = [];
  public about: string[] = [];
  public stack: string[] = [];
  public svgs: string[] = [];

  constructor(
    position: string,
    sDesc: string,
    desc: string[],
    about: string[],
    date: string,
    stack: string[],
    svgs: string[]
  ) {
    this.position = position;
    this.date = date;
    this.shortDesc = sDesc;
    this.description = desc;
    this.about = about;
    this.stack = stack;
    this.svgs = svgs;
  }
}
