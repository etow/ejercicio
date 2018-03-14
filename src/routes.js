import Desarrollo from '@/components/view/Desarrollo.vue';


const routes = [
  {path:'/desarrollo/:area', component:Desarrollo, name: 'desarrollo', props:true},
  { path: "*", component:Desarrollo, name: 'desarrollo', props:true}
]

export default routes;