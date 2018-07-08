/* global Vue, VueRouter, axios */

var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      people: [
      	{
      		name: "Heidi",
      		bio: "Adores llamas",
      		bioVisible: true
      	},
      	{
      		name: "Tonja",
      		bio: "Likes pina coladas and getting caught in the rain",
      		bioVisible: true
      	},
      	{
      		name: "Gerry",
      		bio: "Makes lemonade out of lemons",
      		bioVisible: true
      	}
      ],
      newPerson: {bioVisible: true}
    };
  },
  created: function() {},
  methods: {
  	addPerson: function() {
  		this.people.push(this.newPerson);
  	},
  	deletePerson: function(person) {
  		var index = this.people.indexOf(person);
  		this.people.splice(index, 1);
  	},
  	toggleBio: function(person) {
  		// changes bioVisible to opposite boolean
  		person.bioVisible = !person.bioVisible;
  	}
  },
  computed: {}
};

var router = new VueRouter({
  routes: [{ path: "/", component: HomePage }],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router
});