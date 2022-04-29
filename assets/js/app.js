const app = new Vue({
    el: '#app',
    data: {
        my_data: null,
    },
    methods: {},
    mounted() {
        this.my_data = []
        this.emails = []
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(response => {
                //console.log(this);
                //console.log(response);
                //console.log(response.data)
                this.my_data.push(response.data)
                    //console.log(this.my_data);
            })
        }
    }
})