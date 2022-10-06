const app = new Vue({
  el: "#app",
  data: {
    display_health: 100,
    display_shield: 100,
    display_hunger: 100,
    display_thirst: 100,
    userMoney: 10000,
    userCard: 10000,
    userJob: "백사회 회장",
    userName: "준영",
    randomBoxCount: '10',
    userCount: '100',
    userPing: '20',
    userFps: '60',
    userOwnNumber: '1',
    userPhoneNumber: '01012345678',
    year: '',
    month: '',
    date: '',
    hour: '',
    minute: '',
    second: '',
  },
  methods: {
		UPDATE: function (data) {
			Object.keys(data).map((key) => {
				this[key] = data[key];
			});
		},
	},
  created: function() {
    window.addEventListener('message', (event) => {
      const { data } = event;
      if (!data.type) {
        return
      }

      (async () => {
        this[data.type](data.data)
      })();
    });
    
    setInterval(() => {
      var date = new Date();
      this.year = date.getFullYear();
      this.month = ("0" + (1 + date.getMonth())).slice(-2);
      this.date = ("0"+ date.getDate()).slice(-2);
      this.hour = date.getHours();
      this.minute = date.getMinutes();
      this.second = date.getSeconds();
    }, 1000);
  },
})