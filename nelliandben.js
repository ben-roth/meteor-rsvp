// Declare client links collection
Links = new Meteor.Collection("links");
if (Meteor.isClient) {
// Bind LinksTemplate to Links collection
Template.LinksTemplate.links = function () {
    return Links.find();
};
}

if (Meteor.isClient) {
// Handle LinksForm events
Template.LinksForm.events = {
    'submit': function (e, tmpl) {
        // Don't postback
        e.preventDefault();
 
        // create the new link
        var newLink = {
            firstname: tmpl.find("#firstname").value,
            lastname: tmpl.find("#lastname").value,
            description: tmpl.find("#description").value
        };
 
        // add the link to the db
        Links.insert(newLink);
    }    
};
}



/*

if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to nelliandben.";
  };

  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
*/
