export class Experience {
  public position: string;
  public jobType: string;
  public company: string;
  public date: string;
  public description: string;
  public imgPath: string;
  public stack: string[] = [];

  constructor(
    position: string,
    jobType: string,
    company: string,
    desc: string,
    date: string,
    imgPath: string,
    stack: string[]
  ) {
    this.position = position;
    this.jobType = jobType;
    this.company = company;
    this.date = date;
    this.description = desc;
    this.imgPath = imgPath;
    this.stack = stack;
  }
}
