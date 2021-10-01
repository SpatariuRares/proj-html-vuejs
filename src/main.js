import Vue from 'vue'
import App from './App.vue'
import "bootstrap"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons' 
import { faAddressBook } from '@fortawesome/free-solid-svg-icons' 
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons' 
import { faTimes } from '@fortawesome/free-solid-svg-icons' 
import { faSquareFull } from '@fortawesome/free-solid-svg-icons' 

import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faTiktok } from '@fortawesome/free-brands-svg-icons'
import { faAtlassian } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome' 

library.add(faSquareFull)
library.add(faTimes)
library.add(faCommentAlt)
library.add(faFacebookF)
library.add(faTwitter)
library.add(faInstagram)
library.add(faYoutube)
library.add(faLinkedinIn)
library.add(faTiktok)

library.add(faAtlassian)
library.add(faAddressBook)
library.add(faArrowRight)
library.add(faPhoneAlt)
library.add(faSpinner)
library.add(faChevronDown)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
