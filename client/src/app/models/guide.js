window.Guide = Backbone.Model.extend({

  urlRoot: '/api/guides',

  defaults: {
    title: ""
  },

  createGuide: function() {

  }

  // login: function(user, router) {
  //   $.ajax({
  //     url: "/api/users/login",
  //     type: "POST",
  //     data: user,
  //     contentType: 'application/json',
  //     success: function(data) {
  //       window.localStorage.setItem("_user.token", data.token);
  //       window.localStorage.setItem("_user.name", JSON.parse(user).username);
  //       router.navigate('/', { trigger: true });
  //     },
  //     error: function(err) { console.log(err.status + " " + err.statusText); }
  //   });
  // },

  // signup: function(router) {
  //   this.save(undefined, {
  //     url: "/api/users/signup",
  //     success: function(data) {
  //       window.localStorage.setItem("_user.token", data.attributes.token);
  //       window.localStorage.setItem("_user.name", data.attributes.username);
  //       router.navigate('/', { trigger: true });
  //     },
  //     error: function() { console.log("User signup error"); }
  //   });
  // }

});