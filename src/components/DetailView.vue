<template>
  <div class="mdl-grid">
    <div class="mdl-cell mdl-cell--8-col">
      <div class="picture">
        <img :src="this.pictures.url" />
      </div>
      <div class="info">
        <span>{{ this.pictures.info }}</span>
      </div>
    </div>
    <div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet">
      <div class="comment">
        <span>{{ this.pictures.comment }}</span>
      </div>
      <div class="actions">
        <router-link class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" to="/post">
          ANSWER
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    pictures: {
      url: '',
      info: '',
      comment: ''
    }
  }),
  created () {
    let key = this.$route.params.id
    this.$root.$firebaseRefs.cat.child(key).once('value')
      .then(snapshot => snapshot.val())
      .then(data => {
        this.pictures.url = data.url
        this.pictures.info = data.info
        this.pictures.comment = data.comment
      })
  }
}
</script>
<style scoped>
  .picture > img {
    color: #fff;
    width:100%;
  }
  .info {
    text-align: right;
    padding: 5px;
    color: #555;
    font-size: 10px;
  }
  .comment {
    padding: 10px;
    color: #555;
  }
  .actions {
    text-align: center;
  }
</style>
