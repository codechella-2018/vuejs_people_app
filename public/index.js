/* global Vue, VueRouter, axios */

var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      people: [],
      newPerson: {bioVisible: true}
    };
  },
  created: function() {
  	axios.get("/api/people.json").then(function(response) {
  		this.people = response.data;
  		console.log(this.people);
  	}.bind(this));
  },
  methods: {
  	addPerson: function() {
  		var clientParams = {
  			name: this.newPerson.name,
  			bio: this.newPerson.bio
  		}
  		axios.post("/api/people", clientParams).then(function(response){
  			this.people.push(response.data);
  			this.newPerson.name = "";
  			this.newPerson.bio = ""
  		}.bind(this));
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