var Person = Backbone.Model.extend({
  urlRoot: "/people",

  default: {
    first_name: "LOL",
    last_name: "LMAO"
  }
});