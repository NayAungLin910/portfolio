<script setup>
import { BIconGithub } from 'bootstrap-icons-vue'

</script>

<template>
  <div class="p-2">
    <div class="flex place-content-center mx-auto">
      <div
        class="bg-slate-800 hover:bg-slate-700/60 duration-300 p-4 rounded-lg flex items-center md:w-1/2 flex-col md:flex-row gap-3 hover:shadow-lg hover:shadow-slate-700">
        <div class="flex items-center flex-col min-w-[30%]">
          <img class="rounded-full mx-auto max-w-[8.5rem]" src="/src/assets/img/profile-image.webp" loading="lazy"
            alt="Portfolio Profile Image" />
          <div class="my-2">
            <table class="table-auto">
              <tr>
                <td class="min-w-[1.8rem]">
                  <BIconGithub />
                </td>
                <td>
                  <a target="_blank"
                    class="underline-animate"
                    href="https://github.com/NayAungLin910">
                    NayAungLin910
                  </a>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div class="text-justify min-w-[50%]">
          Welcome to my portfolio! Hope you are having a nice day 😊! I am just a university student learning
          passionately about full-stack web development. And so far, it has been a blessing 🤘! Please kindly
          check out some of the projects I posted on my github repositories below. ありがとうございます 🙇‍♂️!
        </div>
      </div>
    </div>
  </div>
</template>
