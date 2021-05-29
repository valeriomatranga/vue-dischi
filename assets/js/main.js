/* Descrizione:
Attraverso una chiamata ajax all’API di boolean https://flynn.boolean.careers/exercises/api/array/music avremo a disposizione una decina di dischi musicali.
Utilizzando vue, stampiamo a schermo una card per ogni album.

BONUS: Creare una select con tutti i generi dei dischi. In base a cosa scegliamo nella select, vedremo i corrispondenti cd.

BONUS 2: Ordinare i dischi per anno di uscita.
 */const app = new Vue({

    el:"#app",

    data:{
        url:"https://flynn.boolean.careers/exercises/api/array/music",
        albums:'',
        genereMusicale:'All',
    },

    methods:{
        
        
    },
    
    mounted(){
        const album = this.url;
        //console.log(album);
    
        axios
        .get(album)
        .then(resp =>{
            this.albums = resp.data.response
            //console.log(this.albums);
            this.albums = this.albums.sort((precedente,successivo) => successivo.year - precedente.year);
        }).catch(e =>{
            console.error(e)
        })
            

    },

    computed:{
        categoria(){
            if (this.genereMusicale === 'All'){
                return this.albums
            }else{
                return this.albums.filter(album => {
                    return album.genre === this.genereMusicale
                })
            }
        }
    }

})