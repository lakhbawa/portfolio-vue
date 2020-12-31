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
                    info: 'I like to make things beautiful as well as user-friendly. I give more importance to usability than outside look of any website',
                    languages: ['HTML', 'JavaScaript', 'SASS', 'CSS', 'Processing'],
                    tools: [
                        'VueJs','NuxtJs','Angular', 'Webpack','Bootstrap','Bulma','Vuetify','jQuery','Charts.Js'
                    ]
                },
                backend: {
                    title: 'Backend Development',
                    info: 'I like backend development more than anything else in this world. I like to create highly scalable and organized applications',
                    languages: ['PHP', 'NodeJs', 'Java', 'TypeScript'],
                    tools: [
                        'Laravel','Symfony', 'ExpressJs','Socket.io','Api Driven Architecture','REST','oAuth','MySql','MongoDB'
                    ]
                },
                additional: {
                    title: 'Everything Else',
                    info: 'I like to research and learn a variety of new things. List could be too long but for readability purpose i am keeping it short',
                    tools: ['PhpStorm', 'Adobe XD',, 'Figma', 'Git'],
                    others: [
                        'Agile Development','Unix Shell','Web Security Management','Website Speed Improvement','Trello','Asana','Basecamp'
                    ]
                }
            },
            projects: [
                {
                    title: 'Castkro - Where Talent Meets Opportunity',
                    info: 'Castkro is platform to connect talented Performers (eg. Actor, Actors, Directors) with the Content Creators and Casting Directors. On Castkro, the talent may range from scriptwriters to Lead actors.',
                    image: '/img/portfolio/castkro_homepage_screenshot.jpg',
                    full: '/img/portfolio/castkro_full_page.jpg',
                    tech_stack: ['Laravel', 'MySql', 'NuxtJs', 'VueJs', 'Vuetify', 'SASS', 'Docker', 'Digital Ocean'],
                    url: 'https://www.castkro.com'
                },
                {
                    title: 'Tweakity - Crowd sourced Testing Platform',
                    info: 'Tweakity is a communication channel for developers and users. It focus upon making the relationship between developers and users more strong and productive',
                    image: '/img/portfolio/tweakity.png',
                    full: '/img/portfolio/tweakity-hd.png',
                    tech_stack: ['Laravel', 'MySql', 'NuxtJs', 'VueJs', 'Bulma', 'SASS'],
                    url: 'http://tweakity.com'
                },
                {
                    title: 'Ollie - Smart Home Monitoring System',
                    info: '',
                    image: '/img/portfolio/ollie.png',
                    full: '/img/portfolio/ollie-hd.png',
                    tech_stack: ['Node Js', 'Express Js', 'Socket.io', 'Arduino Uno', 'Gulp', 'SASS']
                },
                {
                    title: 'LocateMyArea - Crow sourced Testing Platform',
                    info: '',
                    image: '/img/portfolio/locatemyarea.png',
                    full: '/img/portfolio/locatemyarea-hd.png',
                    tech_stack: ['Laravel', 'MySql',  'BootStrap', 'SASS']
                }
            ]
        }
    },
    methods: {
        showProject(index) {
            this.current_project = this.projects[index];
            this.isModalActive = true;
        },
        goToBottom(){
            window.scrollTo(0,document.body.scrollHeight);
        }
    }
}
</script>


<template>
  <div>

      <section class="hero my-4 mt-6 has-text-centered">
          <h2 class="is-hidden" ref="introduction">Lakhveer Bawa - Full Stack Web Developer</h2>
          <h2 class="hero__title is-family-secondary fade-in">
                Full Stack Web Developer
          </h2>
          <div class="hero__info fade-in">
              I develop highly scalable, beautiful and secure websites, <br>
              and I am proud of what I do
          </div>
          <div class="hero__img_container my-5">
              <img class="hero__img" src="/img/my_photo2.png" alt="Lakhveer Bawa Image">
          </div>
          
          <div class="hero__illustration-container">
              <img class="hero__illustration" src="/img/hero-green.svg" alt="Web Development illustration">
          </div>
      </section>

      <section class="greeting has-text-centered has-text-white">
          <h2 class="is-hidden" ref="greet">Who am I</h2>

          <div class="container greeting__message">
              <div class="greeting__title is-family-secondary has-text-weight-bold is-size-2 py-3">
                  Hi, I am Lakhveer. Nice to meet you
              </div>
              <div class="greeting__info px-7 fade-in">
                  I am passionate, dedicated and curious web developer, I started learning web designing almost 4 years ago as hobby,
                  I created my own websites for fun, then started to learn programming more deeply.
                  By now, I have worked with number of companies such as <strong class="has-text-white">Hatch2web</strong>, <strong class="has-text-white">Itmatic</strong> and others
              </div>
          </div>

      </section>
      <section class="container skills__container fade-in" style="">
          <h2 class="is-hidden" ref="skills">My Skills</h2>

          <div class="box has-text-centered">
              <div class="columns">
                  <section class="column skills__border-right">
                      <h2 class="is-hidden ">Frontend Skills</h2>

                      <div class="skills">
                          <div class="skills__icon_container">
                              <img class="skills__icon" src="/img/designer.svg" alt="Frontend Development Symbol">
                          </div>
                          <div class="skills__title has-text-primary">
                              {{ skills.frontend.title}}
                          </div>
                          <div class="skills__info">
                              {{ skills.frontend.info}}

                          </div>
                          <div class="skills__subtitle has-text-primary">
                              Tools I Use
                          </div>
                          <div class="skills__subtitle-info">
                              {{ skills.frontend.languages.join(', ')}}

                          </div>
                          <div class="skills__subtitle has-text-primary">
                              Other Skills
                          </div>

                          <div class="skills__items">
                              <ul>
                                  <li v-for="(skill,index) in skills.frontend.tools" :key="index">{{ skill}}</li>

                              </ul>
                          </div>
                      </div>
                  </section>
                  <section class="column  skills__border-right">
                      <h2 class="is-hidden ">Backend Skills</h2>

                      <div class="skills">
                          <div class="skills__icon_container">
                              <img class="skills__icon" src="/img/laptop-code-solid.svg" alt="backend symbol">
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
                  </section>
                  <section class="column">
                      <h2 class="is-hidden ">Other Skills</h2>

                      <div class="skills">
                          <div class="skills__icon_container">
                              <img class="skills__icon" src="/img/life-ring-regular.svg" alt="Other Skills Symbol">
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
                  </section>
              </div>
          </div>
      </section>

      <section class="container portfolio has-text-centered my-7 fade-in">
          <h2 class="is-hidden">My Recent Work</h2>

          <div class="portfolio__title has-text-weight-semibold is-size-1 is-family-secondary">
              My Recent Work
          </div>
          <div class="portfolio__info">
              Here is list of few website projects created by me. want to see more?
              <a  @click="goToBottom">Email me</a>
          </div>
          <div class="portfolio__projects columns mt-5 pa-5">
              <div v-for="(project,index) in projects" :key="index" class="column is-flex">
                  <div class="portfolio__item" @click="showProject(index)">
                      <div class="portfolio__img-container">
                          <img :src="project.image" alt="" class="portfolio__img">
                      </div>
                  </div>
              </div>


          </div>
      </section>

      <footer class="footer has-background-dark has-text-white has-text-centered pa-4">
          <h2 class="is-hidden" id="contactme">Contact Details</h2>

          <div class="footer__title is-family-secondary mb-4">Contact</div>

          <div class="footer__subtitle">
              I'd Love To Hear From You.
          </div>

          <div class="footer__info my-2">
              Send me a message, whether you have project, or you
              are looking for partnership or just want to say hello.
          </div>
          <div class="footer__email has-text-primary has-text-weight-semibold">
              bawa93lakhveer@gmail.com | +91-9501992079
          </div>


          <div class="footer__bar px-2 container mt-5" style="border-top:1px solid #eee;padding-top:10px;">
              <div class="columns">
                  <div class="column has-text-left">
                      <a href="https://github.com/bawa93" target="_blank">
                      <img class="footer__icon" src="/img/github-brands.svg" alt="Github Link">
                      </a>
                        &nbsp;&nbsp;
                      <a href="https://www.linkedin.com/in/bawageek/" target="_blank">
                       <img class="footer__icon" src="/img/linkedin-brands.svg" alt="Linkedin Link">
                      </a>
                      
                     

                  </div>
                  <div class="column has-text-right">
                      <img class="footer__icon" src="/img/logo.svg" alt="Lakhveerbawa.com logo" style="  vertical-align: middle;"> Created by me with                       <img class="footer__icon" src="/img/heart-solid.svg" alt="" style="  vertical-align: middle;">

                  </div>
              </div>
          </div>

      </footer>
        <ProjectModal :isModalActive="isModalActive" :project="current_project"></ProjectModal>

  </div>
</template>

<style lang="scss">
    $primary: #15D17A;
    $family-secondary: 'Kanit', sans-serif;


    .box {
        min-height: 80vh;
    }
    .hero {
        &__title {
            font-size: 2.5rem;
            font-weight: 700;
        }
        &__info {
            font-size: 1.3em;
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

            max-width: 50%;
            height: auto;
        }

    }

    .greeting {
        margin-top:-20px;
        background: #15d17a;
        background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPgogICAgPHN0b3Agb2Zmc2V0PSIxJSIgc3RvcC1jb2xvcj0iIzE1ZDE3YSIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM0NWM2OGEiIHN0b3Atb3BhY2l0eT0iMSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0idXJsKCNncmFkLXVjZ2ctZ2VuZXJhdGVkKSIgLz4KPC9zdmc+);
        background: -moz-linear-gradient(top, #15d17a 1%, #45c68a 100%);
        background: -webkit-linear-gradient(top, #15d17a 1%,#45c68a 100%);
        background: linear-gradient(to bottom, #15d17a 1%,#45c68a 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#15d17a', endColorstr='#45c68a',GradientType=0 );
        &__message {
            padding-top: 7rem;
            padding-bottom: 14rem;

        }
        &__title {
            font-size: 2.3em;
            padding-bottom: 1em;
        }
        &__info {
            max-width: 100ch;
            margin: auto;
            line-height: 1.6;
            font-size: 1.15rem;
        }
    }
    .skills {
        min-height: 30vh;
        text-align: center;
        padding-top: 2rem;

        &__container {
            margin-top: -7rem;
        }
        &__border-right {
            border-right: 1px solid #eee;
        }
        &__subtitle {
            font-weight: 500;
            font-size: 1rem;
            padding-top: .5rem;
            padding-bottom: .5rem;

        }
        &__icon {
            &_container {
                padding-bottom: 1rem;
            }

            width: 64px;
            height: 64px;

            fill: red;
        }
        &__title {
            font-size: 1.3rem;
            font-weight: 600;
            padding: 1rem 0;
            font-family: $family-secondary;
        }
        &__info {
            font-size: .90rem;
            margin: auto;
            max-width: 34ch;
            margin-bottom: .8rem;
            height: 90px;
            line-height: 1.6;
        }
        ul {
            padding-top: 1rem;
            li {
                padding-bottom: .3rem;
            }
        }
    }

    .portfolio {
        &__title {
            font-size: 1.6rem;
        }
        &__info {
            font-size: 1.1rem;

        }
        &__item {
            cursor: pointer;
            text-align: center;
            padding:10px;
            overflow: hidden;
            border: 1px solid #eee;
            -webkit-border-radius: 14px;
            -moz-border-radius: 14px;
            border-radius: 14px;
            margin: auto;
        }
        &__img-container {
            max-width: 300px;
            max-height: 300px;
            object-fit: cover;
            margin: auto;
        }
        &__img {
            object-fit: cover;
            height: 300px;
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
    .fade-in {
        animation: fade-in 1.4s;
    }
</style>

