"use strict";
var Discussion = (function () {
    function Discussion(_id, _observerName, _dateOfDiscussion, _Location, _colleagueName, _Subject, _Outcomes) {
        this.id = _id;
        this.observerName = _observerName;
        this.dateOfDiscussion = _dateOfDiscussion;
        this.location = _Location;
        this.colleagueName = _colleagueName;
        this.subject = _Subject;
        this.outcomes = _Outcomes;
    }
    return Discussion;
}());
exports.Discussion = Discussion;
//# sourceMappingURL=Discussion.js.map