const app = Vue.createApp({
  template: "",
  data() {
    return {
      finalResult: {
        gender: {},
        picture: {
        },
        name: {
        },
        dob: {
        }
      },
    }
  },

  async created() {
    this.getUser ()
  },

  methods: {
    async getUser() {
      const res = await fetch("https://randomuser.me/api");
      const { results } = await res.json();

      console.log(results);

      this.finalResult = results[0];
    }
  }

}
);

app.mount("#app");
