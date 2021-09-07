<template>
  <div id="app">
    <div class="input-group mb-4">
      <span class="input-group-text">Workspace List</span>
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          {{select_workspace.name}}
        </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" >
          <li v-for="(item,index) in workspaces" v-bind:key="index"><a class="dropdown-item" @click.prevent="selectWorkspace(item)">{{item.name}}</a></li>
        </ul>
      </div>
      <span class="input-group-text">Users in Workspace</span>
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
          {{select_user.name}}
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
          <li v-for="(item,index) in users" v-bind:key="index"><a class="dropdown-item" @click.prevent="selectUser(item)">{{item.name}}</a></li>
        </ul>
      </div>
    </div>
    <div class="input-group">
      <span class="input-group-text">Message</span>
      <textarea class="form-control" aria-label="With textarea" v-model="message_text"></textarea>
      <button type="button" class="btn btn-secondary" @click.p.prevent="sendMessage()">Send DM button</button>
    </div>
  </div>
</template>

<script>
//import { InstallProvider } from '@slack/oauth'
import ApiService from "@/services/api.service";

import { mapActions }from "vuex/dist/vuex.mjs";
import ApiURL from "@/config/api-url-list";

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      workspaces: [
          {
            name: 'work1'
          },
          {
            name: 'work2'
          },
          {
            name: 'work3'
          }
      ],
      users:[
          {
            name: 'user1'
          },
          {
            name: 'user2'
          },
          {
            name: 'user3'
          }
      ],
      installer: {},
      url: '',
      app: {},
      select_workspace: {name: 'select workspace'},
      select_user: {name: 'select user'},
      message_text: ''
    }
  },
  methods: {
    ...mapActions(['getWorkspaceList','getUserList', 'postMessage']),
    async sendMessage(){
      if (this.select_user.id !== 'all') {
        let result = await this.postMessage({ token: this.select_workspace.token, id: this.select_user.id, text: this.message_text})
        console.log(result)
      } else {
        this.users.map( async item => {
          console.log(item)
          if ( item.id !== 'all')
            await this.postMessage({ token: this.select_workspace.token, id: item.id, text: this.message_text})
        })
      }
    },
    async selectUser(item) {
        this.select_user = item
    },
    async makeUser(item) {
      let result = item.data.members
      console.log(result.unshift({name:'전체',id:'all'}))
      return result
    },
    async selectWorkspace( item ){
      this.select_workspace = item
      this.users = await this.makeUser(await this.getUserList(item))
    },
    async makeWorkspace( items ){
      let result = items.data.workspace
      return result.map( item => {
        return { name: item.team.name, id: item.team.id, token: item.bot.token }
      })
    },
    async initialize(){
      ApiService.init( ApiURL.cpc_host )
      this.workspaces = await this.makeWorkspace(await this.getWorkspaceList())
    },
  },
  async mounted() {
    await this.initialize()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
  margin-left: 30px;
  width: 80%;
}
</style>
