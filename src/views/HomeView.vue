<script setup>
import { BIconGithub, BIconTwitter, BIconEnvelope } from 'bootstrap-icons-vue'

</script>

<template>
  <div class="p-2">
    <div class="flex place-content-center mx-auto">
      <div
        class="bg-slate-800 duration-300 p-4 rounded-lg flex items-center md:w-1/2 flex-col gap-3 hover:shadow-lg hover:shadow-slate-700">
        <div class="flex items-center flex-col min-w-[30%]">
          <img class="rounded-xl mx-auto max-w-[8.5rem]" src="/src/assets/img/IMG_0664.jpg" loading="lazy"
            alt="Portfolio Profile Image" />
          <div class="my-2">
            <table class="table-auto overflow-scroll">
              <tr>
                <td class="min-w-[1.8rem]">
                  <BIconGithub />
                </td>
                <td>
                  <a target="_blank" class="underline-animate" href="https://github.com/NayAungLin910">
                    NayAungLin910
                  </a>
                </td>
              </tr>
              <tr>
                <td class="min-w-[1.8rem]">
                  <BIconTwitter />
                </td>
                <td>
                  <a target="_blank" class="underline-animate" href="https://twitter.com/nayaunglin5454">
                    Nay Aung Lin
                  </a>
                </td>
              </tr>
              <tr>
                <td class="min-w-[1.8rem]">
                  <BIconEnvelope />
                </td>
                <td>
                  <a target="" class="underline-animate" href="">
                    nayaung54545454@gmail.com
                  </a>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div class="text-justify">
          Thanks for checking out my portfolio! Hope you’re having a great day! 😊

          I graduated with a BSc in Computing in 2024 and passed the JLPT N2 in the same year.
          I can confidently communicate in English and Japanese at a business level.

          I also have experience fixing bugs assigned on Backlog in a project built with Nuxt(Vue), consuming APIs from
          Laravel (PHP).
          In that project, I actively engaged in communication between Japanese and Myanmar developer teams through
          Backlog.

          Please kindly check out some of my projects below.
        </div>
      </div>
    </div>


    <!-- Section 1 -->
    <section class="my-4 project-card sec-1">
      <div
        class="bg-slate-800 duration-300 rounded-lg flex items-center md:w-2/3 flex-col md:flex-row hover:shadow-lg hover:shadow-slate-700">
        <img
          class="max-w-[22rem] h-60 mt-2 md:mt-0 rounded-lg md:rounded-tl-lg md:rounded-bl-lg md:rounded-br-none md:rounded-tr-none"
          src="/src/assets/img/mirai_project_screenshot.png" loading="lazy"
          alt="The project NightKite's quick UI showcase gif.">
        <div class="p-3 text-justify">
          <p class="text-xl mx-auto text-center">
            <span class="underline-animate">
              Mirai: School Management System
            </span>
          </p>
          <p class="mt-2">
            The project was developed for a Japanese client using Nuxt (Vue) with Laravel (PHP).
            Almost all of the project information is in Japanese.

            Users can manage various school, student, and fee-related information with simple navigation.

            Unfortunately, I cannot share the Git repository for this project, as it is the private property of the
            client and the software house.
          </p>
        </div>
      </div>
    </section>

    <div class="text-center p-3 mb-7 text-lg bg-slate-800">
      ⚠️ Please note that the projects below ⬇️ are developed for personal training and are not written for acutal clients nor have they been deployed and used.
    </div>

    <!-- Section 2 -->
    <section class="my-4 project-card sec-2 flex place-content-end">
      <a href="https://github.com/NayAungLin910/nightkite" target="_blank"
        class="bg-slate-800 duration-300 rounded-lg flex items-center md:w-2/3 flex-col md:flex-row hover:shadow-lg hover:shadow-slate-700">
        <img
          class="max-w-[22rem] mt-2 md:mt-0 rounded-lg md:rounded-tl-lg md:rounded-bl-lg md:rounded-br-none md:rounded-tr-none"
          src="/src/assets/img/nightkite-showcase.gif" loading="lazy"
          alt="The project NightKite's quick UI showcase gif.">
        <div class="p-3 text-justify">
          <p class="text-xl mx-auto text-center">
            <span class="underline-animate">
              NightKite: An Article Website
            </span>
          </p>
          <p class="mt-2">
            NightKite is a small article website project developed using Laravel. The project lets the user write
            articles
            and publish them. It also supports user authentication that can let serveral writers write their own
            articles
            too.
          </p>
        </div>
      </a>
    </section>

    <!-- Section 2 -->
    <section class="my-4 project-card sec-2 flex">
      <a href="https://github.com/NayAungLin910/nightkite" target="_blank"
        class="bg-slate-800 duration-300 rounded-lg flex flex-col-reverse items-center md:w-2/3 md:flex-row hover:shadow-lg hover:shadow-slate-700">
        <div class="p-3 text-justify">
          <p class="text-xl mx-auto text-center">
            <span class="underline-animate">
              BlueMail: Newsletters and Article Website
            </span>
          </p>
          <p class="mt-2">
            BlueMail is a website where articles can be written to be shown on the website. And those can
            also be written in newsletter form so that it can be sent to the users who subscribed. The Myanmar
            language option is also supported.
          </p>
        </div>
        <img
          class="max-w-[22rem] mt-2 md:mt-0 rounded-lg md:rounded-tr-lg md:rounded-br-lg md:rounded-bl-none md:rounded-tl-none"
          src="/src/assets/img/bluemail-showcase.gif" loading="lazy"
          alt="The project NightKite's quick UI showcase gif.">
      </a>
    </section>

    <!-- Section 3 -->
    <section class="my-4 project-card sec-3 flex place-content-end">
      <a href="https://github.com/NayAungLin910/blue_mail" target="_blank"
        class="bg-slate-800 duration-300 rounded-lg flex items-center md:w-2/3 flex-col md:flex-row hover:shadow-lg hover:shadow-slate-700">
        <img
          class="max-w-[22rem] mt-2 md:mt-0 rounded-lg md:rounded-tl-lg md:rounded-bl-lg md:rounded-br-none md:rounded-tr-none"
          src="/src/assets/img/connect-showcase.gif" loading="lazy"
          alt="The project NightKite's quick UI showcase gif.">
        <div class="p-3 text-justify">
          <p class="text-xl mx-auto text-center">
            <span class="underline-animate">
              Connect: CRM Web Application
            </span>
          </p>
          <p class="mt-2">
            Connect Customer Relationship Management is a small full-stack CRM web application. The app can be used to
            manage the customer information especially
            elements like various stages of leads, contacts and also other kinds of resources.
          </p>
        </div>
      </a>
    </section>

    <!-- Animated Blocks -->
    <div class="wrapper">
      <span class="box-1"></span>
      <span class="box-2"></span>
      <span class="box-3"></span>
      <span class="box-4"></span>
      <span class="box-5"></span>
      <span class="box-6"></span>
      <span class="box-7"></span>
      <span class="box-8"></span>
      <span class="box-9"></span>
      <span class="box-10"></span>
    </div>

  </div>
</template>
