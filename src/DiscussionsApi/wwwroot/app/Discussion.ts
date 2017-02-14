export class Discussion {
  id: number;
  observerName: string;
  dateOfDiscussion: string;
  location: string;
  colleagueName: string;
  subject: string;
  outcomes: string;

  constructor(_id: number, _observerName: string, _dateOfDiscussion: string, _Location: string, _colleagueName: string,
              _Subject: string, _Outcomes: string) {
    this.id = _id;
    this.observerName = _observerName;
    this.dateOfDiscussion = _dateOfDiscussion;
    this.location = _Location;
    this.colleagueName = _colleagueName;
    this.subject = _Subject;
    this.outcomes = _Outcomes;
  }
}
