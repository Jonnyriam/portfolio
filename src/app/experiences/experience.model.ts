export class Experience {
  public position: string;
  public jobType: string;
  public company: string;
  public date: string;
  public shortDesc: string;
  public description: string[] = [];
  public about: string[] = [];
  public imgPath: string;
  public stack: string[] = [];

  constructor(
    position: string,
    jobType: string,
    company: string,
    sDesc: string,
    desc: string[],
    about: string[],
    date: string,
    imgPath: string,
    stack: string[]
  ) {
    this.position = position;
    this.jobType = jobType;
    this.company = company;
    this.date = date;
    this.shortDesc = sDesc;
    this.description = desc;
    this.about = about;
    this.imgPath = imgPath;
    this.stack = stack;
  }
}
