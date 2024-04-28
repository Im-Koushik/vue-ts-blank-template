import app from './app'
import PrimeVue from 'primevue/config'
import router from './router';
import './style.css'

import 'primevue/resources/primevue.min.css'            // core 
import 'primevue/resources/themes/saga-blue/theme.css'  // theme
import 'primeicons/primeicons.css'                      // icons
import '/node_modules/primeflex/primeflex.css'          // PrimeFlex



app.use(PrimeVue);
app.use(router)
app.mount('#app');