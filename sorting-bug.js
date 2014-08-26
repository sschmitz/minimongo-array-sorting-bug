if (Meteor.isClient) {
  var coll = new Meteor.Collection();
  coll.insert({ text: 'Entry A', arr: [ { sortField: 5 } ] });
  coll.insert({ text: 'Entry B', arr: [ { sortField: 7 } ] });
  coll.insert({ text: 'Another entry', arr: [ { sortField: 1 } ] });

  Template.hello.asc = function () {
    return coll.find({ }, { sort: { 'arr.0.sortField': 1 } });
  };

  Template.hello.desc = function () {
    return coll.find({ }, { sort: { 'arr.0.sortField': -1 } });
  };

  Template.hello.sortField = function () {
    return this.arr[0].sortField;
  }
}

