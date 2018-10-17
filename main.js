const Brad = Object.create(null, {
  firstName: {
    value: "Brad",
    writable: false
  },
  lastName: {
    value: "Davis",
    writable: false
  },
  dob: {
    value: "12/1/1981",
    writable: false
  },
  pob: {
    value: "Columbus, Ohio",
    writable: false
  },
  city: {
    value: "Spring Hill",
    writable: true
  },
  state: {
    value: "Tennessee",
    writable: true
  },
  toString: {
    value: function () {
      return `${this.firstName} ${this.lastName} was born in ${this.pob}. He was born on ${this.dob}. He currently lives in ${this.city}, ${this.state}.`
    }
  }
});



console.log(Brad.toString());
Brad.city = "Franklin";
Brad.firstName = "Bob";
Brad.state = "Kentucky";
console.log(Object.getOwnPropertyDescriptor(Brad, 'state'));
console.log(Brad.toString());