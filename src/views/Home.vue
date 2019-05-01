<script>
// @ is an alias to /src
import ProjectModal from '@/components/ProjectModal'

export default {
    name: 'home',
    components: {
        ProjectModal: ProjectModal
    },
    data() {
        return {
            isModalActive: false,
            current_project: {},
            skills: {
                frontend: {
                    title: 'Frontend Development',
                    info: 'I like to make the things beautiful as well as useful. One thing that I would like to tell you, I am Bulma fan.',
                    languages: ['HTML', 'JavaScaript', 'SASS', 'CSS', 'Processing'],
                    tools: [
                        'VueJs','NuxtJs','Webpack','Bootstrap','Bulma','Vuetify','jQuery','Charts.Js'
                    ]
                },
                backend: {
                    title: 'Backend Development',
                    info: 'I like backend development more than anything else in this world. I like to create highly scalable and organized applications',
                    languages: ['PHP', 'NodeJs', 'OOP'],
                    tools: [
                        'Laravel','ExpressJs','Socket.io','Api Driven Architecture','REST','oAuth','MySql','MongoDB','Electron','Johnny-five'
                    ]
                },
                additional: {
                    title: 'Everything Else',
                    info: 'I like to research and learn a variety of new things. List could be too long but for readability purpose i am keeping it short',
                    tools: ['PhpStorm', 'Adobe XD', 'Git'],
                    others: [
                        'Agile Development','Unix Shell','Apache','Web Security Management','Website Speed Improvement','Trello','Asana','Basecamp'
                    ]
                }
            },
            projects: [
                {
                    title: 'Tweakity - Crow sourced Testing Platform',
                    info: '',
                    image: '/img/tweakity_screen_capture.png',
                    tech_stack: ['Laravel', 'MySql', 'NuxtJs', 'VueJs', 'Bulma', 'SASS']
                },
                {
                    title: 'Ollie - Smart Home Monitoring System',
                    info: '',
                    image: '/img/tweakity_screen_capture.png',
                    tech_stack: ['Node Js', 'Express Js', 'Socket.io', 'Arduino Uno', 'Gulp', 'SASS']
                },
                {
                    title: 'LocateMyArea - Crow sourced Testing Platform',
                    info: '',
                    image: '/img/tweakity_screen_capture.png',
                    tech_stack: ['Laravel', 'MySql',  'BootStrap', 'SASS']
                }
            ]
        }
    },
    methods: {
        showProject(index) {
            this.current_project = this.projects[index];
            this.isModalActive = true;
        }
    }
}
</script>


<template>
  <div>

      <div class="hero my-4 mt-6 has-text-centered">
          <h1 class="hero__title has-text-weight-semibold is-family-secondary">
                Full Stack Developer
          </h1>
          <div class="hero__info">
              I develop highly scalable and beautiful websites,
              and I am proud of what I do
          </div>
          <div class="hero__img_container my-5">
              <img class="hero__img" src="/img/profile-image-sitting.svg" alt="Lakhveer Bawa Image">
          </div>
          
          <div class="hero__illustration-container">
              <img class="hero__illustration" src="/img/hero-green.svg" alt="">
          </div>
      </div>

      <div class="greeting  py-6 has-text-centered has-text-white">
          <div class="container">
              <div class="greeting__title has-text-weight-bold is-size-2 py-3">
                  Hi, I am Lakhveer. Nice to meet you
              </div>
              <div class="greeting__info px-7">
                  I am passionate, dedicated and curious web developer, I started learning web designing almost 4 years ago as hobby,
                  I created my own websites for fun, then started to learn programming more deeply.
                  By now, I have worked with number of companies
              </div>
          </div>

      </div>
      <div class="container" style="margin-top: -90px;">
          <div class="box has-text-centered">
              <div class="columns">
                  <div class="column skills__border-right">
                      <div class="skills">
                          <div class="skills__icon_container">
                              <img class="skills__icon" src="/img/designer.svg" alt="">
                          </div>
                          <div class="skills__title has-text-primary">
                              {{ skills.frontend.title}}
                          </div>
                          <div class="skills__info">
                              {{ skills.frontend.info}}

                          </div>
                          <div class="skills__subtitle has-text-primary">
                              Languages I Use
                          </div>
                          <div class="skills__subtitle-info">
                              {{ skills.frontend.languages.join(', ')}}

                          </div>
                          <div class="skills__subtitle has-text-primary">
                              Libraries and Frameworks
                          </div>

                          <div class="skills__items">
                              <ul>
                                  <li v-for="(skill,index) in skills.frontend.tools" :key="index">{{ skill}}</li>

                              </ul>
                          </div>
                      </div>
                  </div>
                  <div class="column  skills__border-right">
                      <div class="skills">
                          <div class="skills__icon_container">
                              <img class="skills__icon" src="/img/laptop-code-solid.svg" alt="">
                          </div>
                          <div class="skills__title has-text-primary">
                              {{ skills.backend.title}}
                          </div>
                          <div class="skills__info">
                              {{ skills.backend.info}}

                          </div>
                          <div class="skills__subtitle has-text-primary">
                              Languages I Use
                          </div>
                          <div class="skills__subtitle-info">
                              {{ skills.backend.languages.join(', ')}}

                          </div>
                          <div class="skills__subtitle has-text-primary">
                              Libraries and Frameworks
                          </div>

                          <div class="skills__items">
                              <ul>
                                  <li v-for="(skill,index) in skills.backend.tools" :key="index">{{ skill}}</li>

                              </ul>
                          </div>
                      </div>
                  </div>
                  <div class="column">
                      <div class="skills">
                          <div class="skills__icon_container">
                              <img class="skills__icon" src="/img/life-ring-regular.svg" alt="">
                          </div>
                          <div class="skills__title has-text-primary">
                              {{ skills.additional.title}}
                          </div>
                          <div class="skills__info">
                              {{ skills.additional.info}}

                          </div>
                          <div class="skills__subtitle has-text-primary">
                              Languages I Use
                          </div>
                          <div class="skills__subtitle-info">
                              {{ skills.additional.tools.join(', ')}}

                          </div>
                          <div class="skills__subtitle has-text-primary">
                              Libraries and Frameworks
                          </div>

                          <div class="skills__items">
                              <ul>
                                  <li v-for="(skill,index) in skills.additional.others" :key="index">{{ skill}}</li>

                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div class="container portfolio has-text-centered my-7">
          <h1 class="portfolio__title has-text-weight-semibold is-size-1 is-family-secondary">
              My Recent Work
          </h1>
          <div class="portfolio__info">
              Here is list of few website projects created by me. want to see more?
              <a href="#">Email me</a>
          </div>
          <div class="portfolio__projects columns mt-5 pa-5">
              <div v-for="(i,index) in 3" class="column">
                  <div class="portfolio__item" @click="showProject(index)">
                      <div class="portfolio__img-container">
                          <img src="/img/tweakity_screen_capture.png" alt="" class="portfolio__img">
                      </div>
                  </div>
              </div>


          </div>
      </div>

      <footer class="footer has-background-dark has-text-white has-text-centered pa-4">
            <div class="footer__title is-family-secondary mb-4">Contact</div>

          <div class="footer__subtitle">
              I'd Love To Hear From You.
          </div>

          <div class="footer__info my-2">
              Send me a message, whether you have project, or you
              are looking for partnership or just want to say hello.
          </div>
          <div class="footer__email has-text-primary has-text-weight-semibold">
              bawa93lakhveer@gmail.com
          </div>


          <div class="footer__bar px-2 container mt-5" style="border-top:1px solid #eee;padding-top:10px;">
              <div class="columns">
                  <div class="column has-text-left">
                      <img class="footer__icon" src="/img/github-brands.svg" alt="">
                      <img class="footer__icon" src="/img/linkedin-brands.svg" alt="">

                  </div>
                  <div class="column has-text-right">
                      <img class="footer__icon" src="/img/logo.svg" alt="" style="  vertical-align: middle;"> Created by me with                       <img class="footer__icon" src="/img/heart-solid.svg" alt="" style="  vertical-align: middle;">

                  </div>
              </div>
          </div>

      </footer>
        <ProjectModal :isModalActive="isModalActive" :project="current_project"></ProjectModal>

  </div>
</template>

<style lang="scss">
    $primary: #15D17A;

    .box {
        min-height: 80vh;
    }
    .hero {
        &__title {
            font-size: 1.6rem;
            font-weight: 600;
        }
        &__info {

        }
        &__img {
            max-width: 200px;
            max-height: 200px;
            border:1px solid $primary;
            -webkit-border-radius: 100%;
            -moz-border-radius: 100%;
            border-radius: 100%;

        }
        &__illustration {

            max-width: 30%;
            height: auto;
        }

    }

    .greeting {
        background: #15d17a;
        background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPgogICAgPHN0b3Agb2Zmc2V0PSIxJSIgc3RvcC1jb2xvcj0iIzE1ZDE3YSIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM0NWM2OGEiIHN0b3Atb3BhY2l0eT0iMSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0idXJsKCNncmFkLXVjZ2ctZ2VuZXJhdGVkKSIgLz4KPC9zdmc+);
        background: -moz-linear-gradient(top, #15d17a 1%, #45c68a 100%);
        background: -webkit-linear-gradient(top, #15d17a 1%,#45c68a 100%);
        background: linear-gradient(to bottom, #15d17a 1%,#45c68a 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#15d17a', endColorstr='#45c68a',GradientType=0 );
        height: 45vh;

        &__title {
            font-size: 1.3em;
        }
    }
    .skills {
        min-height: 30vh;
        text-align: center;

        &__border-right {
            border-right: 1px solid #eee;
        }
        &__icon {

            max-width: 64px;
            height: auto;
        }
        &__title {
            font-size: 1.3rem;
            font-weight: bold;
            padding: 12px 0;
        }
        &__info {
            font-size: .90rem;
            margin: auto;
            max-width: 34ch;
            margin-bottom: .8rem;
        }
    }

    .portfolio {
        &__title {
            font-size: 1.6rem;
        }
        &__item {
            text-align: center;
            padding:10px;
            overflow: hidden;
            border: 1px solid #eee;
            -webkit-border-radius: 14px;
            -moz-border-radius: 14px;
            border-radius: 14px;
        }
        &__img-container {
            max-width: 300px;
            max-height: 300px;
            object-fit: cover;
            margin: auto;
        }
    }

    .footer {

        &__icon {
            color: white;
            width:24px;
            height: 24px;

            &:not(:last-child) {
                margin-right:15px;
            }
        }
        &__title {
            font-size: 1.6rem;
            font-weight: 600;
        }
        &__subtitle {
            font-size: 1.5rem;

        }

        &__email {
            font-size: 1.6rem;

        }
        &__bar {

        }
    }
</style>

