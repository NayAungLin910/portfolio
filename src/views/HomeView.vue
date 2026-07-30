<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import { BIconGithub, BIconEnvelope, BIconLine } from 'bootstrap-icons-vue'
import 'flag-icons/css/flag-icons.min.css';

const locale = ref('en')
const translations = {
  en: {
    nameLabel: 'Name:',
    dobLabel: 'DOB:',
    countryLabel: 'Country:',
    genderLabel: 'Gender:',
    basicInfoTitle: 'Basic Info ℹ️',
    certificatesTitle: 'Certificates 📜',
    certificateItem: 'JLPT N1 (Japanese Language Proficiency Test)',
    familiarTechnologiesTitle: 'Familiar Technologies 💻',
    familiarTechnologiesContent: 'JavaScript, TypeScript, Laravel, Vue, React, Java, MySQL',
    educationTitle: 'Education 📚',
    educationItem: 'ECC Computer College (Graduating in 2028)',
    socialsTitle: 'Socials 🪪',
    hobbiesTitle: 'Hobbies 🏅',
    hobby1: 'Soccer ⚽',
    hobby2: 'Gaming 🕹️',
    introText: 'Thanks for checking out my portfolio, the content below shows a project that I was actively tasked with fixing bugs of some screens and other projects that I have built for learning by myself. So please do check out the content below! And I hope you are having a wonderful day!',
    project1Title: 'Mirai: School Management System',
    project1Desc: 'The project was developed for a Japanese client using Nuxt (Vue) with Laravel (PHP). Almost all of the project information is in Japanese. Users can manage various school, student, and fee-related information with simple navigation. Unfortunately, I cannot share the Git repository for this project, as it is the private property of the client and the software house.',
    warningText: '⚠️ Please note that the projects below ⬇️ are developed for personal training and are not written for actual clients nor have they been deployed and used.',
    project2Title: 'NightKite: An Article Website',
    project2Desc: 'NightKite is a small article website project developed using Laravel. The project lets the user write articles and publish them. It also supports user authentication that can let several writers write their own articles too.',
    project3Title: 'BlueMail: Newsletters and Article Website',
    project3Desc: 'BlueMail is a website where articles can be written to be shown on the website. And those can also be written in newsletter form so that it can be sent to the users who subscribed. The Myanmar language option is also supported.',
    project4Title: 'Connect: CRM Web Application',
    project4Desc: 'Connect Customer Relationship Management is a small full-stack CRM web application. The app can be used to manage the customer information especially elements like various stages of leads, contacts and also other kinds of resources.',
    buttonEnglish: 'EN',
    buttonJapanese: '日本語'
  },
  ja: {
    nameLabel: '名前:',
    dobLabel: '生年月日:',
    countryLabel: '国:',
    genderLabel: '性別:',
    basicInfoTitle: '基本情報 ℹ️',
    certificatesTitle: '認定書 📜',
    certificateItem: 'JLPT N1（日本語能力試験）',
    familiarTechnologiesTitle: '得意な技術 💻',
    familiarTechnologiesContent: 'JavaScript、TypeScript、Laravel、Vue、React、Java、MySQL',
    educationTitle: '学歴 📚',
    educationItem: 'ECCコンピューターカレッジ（2028年卒業予定）',
    socialsTitle: 'ソーシャル 🪪',
    hobbiesTitle: '趣味 🏅',
    hobby1: 'サッカー ⚽',
    hobby2: 'ゲーム 🕹️',
    introText: 'ポートフォリオをご覧いただきありがとうございます。以下のコンテンツは、バグ修正を担当した画面や独学で作成したプロジェクトを紹介しています。ぜひご覧ください。素敵な一日をお過ごしください！',
    project1Title: 'Mirai: スクール管理システム',
    project1Desc: 'このプロジェクトはNuxt（Vue）とLaravel（PHP）を使用して日本のクライアント向けに開発されました。プロジェクト情報のほとんどは日本語です。ユーザーは学校、学生、料金関連の情報を簡単に管理できます。このプロジェクトのGitリポジトリはクライアントとソフトウェア会社の所有物であるため、共有できません。',
    warningText: '⚠️ 以下のプロジェクトは全て個人の練習用に開発されたもので、実際のクライアント向けではなく、展開や運用はされていません。',
    project2Title: 'NightKite: 記事ウェブサイト',
    project2Desc: 'NightKiteはLaravelで開発された小さな記事ウェブサイトプロジェクトです。ユーザーは記事を書いて公開できます。複数のライターがそれぞれの記事を書けるユーザー認証もサポートしています。',
    project3Title: 'BlueMail: ニュースレター・記事ウェブサイト',
    project3Desc: 'BlueMailはウェブサイト上に記事を表示できるサイトです。ニュースレター形式でも書けて、登録したユーザーに送信できます。ミャンマー語にも対応しています。',
    project4Title: 'Connect: CRMウェブアプリケーション',
    project4Desc: 'Connect Customer Relationship Managementは小さなフルスタックCRMウェブアプリです。リードや連絡先など、さまざまな顧客情報やリソースの管理に使用できます。',
    buttonEnglish: 'EN',
    buttonJapanese: '日本語'
  }
}
const t = computed(() => translations[locale.value])
const theme = ref('dark')
const cardThemeClass = computed(() => theme.value === 'dark'
  ? 'bg-slate-900 text-white hover:shadow-cyan-500'
  : 'bg-slate-100 text-slate-900 hover:shadow-slate-400'
)
const warningThemeClass = computed(() => theme.value === 'dark'
  ? 'bg-slate-900 text-white'
  : 'bg-slate-100 text-slate-900'
)
const themeBackgroundClass = computed(() => theme.value === 'dark'
  ? 'bg-slate-800 text-white'
  : 'bg-slate-300 text-slate-900'
)

// apply theme to <html> and <body> so global background and text color follow the switch
function applyThemeToDocument(value) {
  try {
    const doc = document.documentElement
    const body = document.body
    if (!doc || !body) return
    // use colors close to Tailwind's slate palettes
    if (value === 'dark') {
      // Tailwind `bg-slate-800` (#1e293b) with light text
      doc.style.backgroundColor = '#1e293b'
      doc.style.color = '#f8fafc'
      body.style.backgroundColor = '#1e293b'
      body.style.color = '#f8fafc'
    } else {
      // Exact Tailwind `bg-slate-300` representation using CSS variable for opacity
      // .bg-slate-300 {
      //   --tw-bg-opacity: 1;
      //   background-color: rgb(203 213 225 / var(--tw-bg-opacity));
      // }
      doc.style.setProperty('--tw-bg-opacity', '1')
      doc.style.backgroundColor = 'rgb(203 213 225 / var(--tw-bg-opacity))'
      doc.style.color = '#0f172a'
      body.style.setProperty('--tw-bg-opacity', '1')
      body.style.backgroundColor = 'rgb(203 213 225 / var(--tw-bg-opacity))'
      body.style.color = '#0f172a'
    }
    body.style.minHeight = '100vh'
    body.style.margin = '0'
  } catch (e) {
    // ignore when server-side rendering or DOM not available
  }
}

onMounted(() => applyThemeToDocument(theme.value))
const stopThemeWatch = watch(theme, (val) => applyThemeToDocument(val))
onBeforeUnmount(() => stopThemeWatch())

function handleSectionMouseMove(event) {
  const rect = event.currentTarget.getBoundingClientRect()
  const rx = (event.clientX - rect.left) / rect.width
  const ry = (event.clientY - rect.top) / rect.height

  const ease = (v) => Math.pow(Math.max(0, v), 1.6)
  const top = ease(1 - ry)
  const bottom = ease(ry)
  const left = ease(1 - rx)
  const right = ease(rx)

  // apply per-element CSS variables so each .section is independent
  const el = event.currentTarget
  el.style.setProperty('--border-top', top.toFixed(3))
  el.style.setProperty('--border-right', right.toFixed(3))
  el.style.setProperty('--border-bottom', bottom.toFixed(3))
  el.style.setProperty('--border-left', left.toFixed(3))
}

function resetSectionShadow(event) {
  const el = event ? event.currentTarget : null
  if (el) {
    el.style.setProperty('--border-top', '0')
    el.style.setProperty('--border-right', '0')
    el.style.setProperty('--border-bottom', '0')
    el.style.setProperty('--border-left', '0')
  }
}
</script>

<template>
    <div :class="['min-h-screen', themeBackgroundClass]">
      <div class="">
        <div
          class="fixed top-4 right-4 z-50 flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/90 px-3 py-2 shadow-lg shadow-slate-950/50 backdrop-blur-sm">
        <button class="rounded-full px-3 py-1 text-sm transition"
          :class="locale === 'en' ? 'bg-sky-500 text-slate-900' : 'bg-slate-800 text-white hover:bg-slate-700'"
          @click="locale = 'en'">
          {{ t.buttonEnglish }}
        </button>
        <button class="rounded-full px-3 py-1 text-sm transition"
          :class="locale === 'ja' ? 'bg-emerald-400 text-slate-900' : 'bg-slate-800 text-white hover:bg-slate-700'"
          @click="locale = 'ja'">
          {{ t.buttonJapanese }}
        </button>
        <button class="rounded-full px-3 py-1 text-sm transition"
          :class="theme === 'light' ? 'bg-sky-500 text-slate-900' : 'bg-slate-800 text-white hover:bg-slate-700'"
          @click="theme = 'light'">
          White
        </button>
        <button class="rounded-full px-3 py-1 text-sm transition"
          :class="theme === 'dark' ? 'bg-emerald-400 text-slate-900' : 'bg-slate-800 text-white hover:bg-slate-700'"
          @click="theme = 'dark'">
          Black
        </button>
      </div>
      <div
        :class="['mx-auto text-center duration-300 p-4 rounded-lg flex md:w-1/2 flex-col gap-3 hover:shadow-lg card-hover-shadow relative z-10', cardThemeClass]">
        <div class="flex flex-col">
          <div class=" flex flex-row justify-around">
            <img class="rounded-xl max-w-[10rem]" src="/src/assets/img/IMG_0664.jpg" loading="lazy"
              alt="Portfolio Profile Image" />
            <div class="section" style="--border-color: 14, 165, 233" @mousemove="handleSectionMouseMove"
              @mouseleave="resetSectionShadow">
              <p class="text-center">{{ t.basicInfoTitle }}</p>
              <table>
                <tr>
                  <td class="text-left pr-4 align-top">
                    {{ t.nameLabel }}
                  </td>
                  <td class="text-left">
                    <span>Nay Aung Lin</span>
                  </td>
                </tr>
                <tr>
                  <td class="text-left pr-4 align-top">
                    {{ t.dobLabel }}
                  </td>
                  <td class="text-left">
                    <span>2002-04-30</span>
                  </td>
                </tr>
                <tr>
                  <td class="text-left pr-4 align-top">
                    {{ t.countryLabel }}
                  </td>
                  <td class="text-left">
                    <span><span class="fi fi-mm"></span> Myanmar</span>
                  </td>
                </tr>
                <tr>
                  <td class="text-left pr-4 align-top">
                    {{ t.genderLabel }}
                  </td>
                  <td class="text-left">
                    Male
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div class="flex flex-row justify-around text-left mt-4 gap-[5px]">
            <div class="section w-fit" style="--border-color: 236, 72, 153" @mousemove="handleSectionMouseMove"
              @mouseleave="resetSectionShadow">
              <p class="text-center">{{ t.certificatesTitle }}</p>
              <ul class="list-disc pl-5 marker:text-sky-500">
                <li>
                  {{ t.certificateItem }}
                </li>
              </ul>
            </div>
            <div class="section w-fit" style="--border-color: 16, 185, 129" @mousemove="handleSectionMouseMove"
              @mouseleave="resetSectionShadow">
              <p class="text-center">{{ t.familiarTechnologiesTitle }}</p>
              {{ t.familiarTechnologiesContent }}
            </div>
          </div>
          <div class="flex flex-row justify-around text-left mt-4 gap-[5px]">
            <div class="section w-fit" style="--border-color: 99, 72, 153" @mousemove="handleSectionMouseMove"
              @mouseleave="resetSectionShadow">
              <p class="text-center">{{ t.educationTitle }}</p>
              <ul class="list-disc pl-5 marker:text-sky-500">
                <li>
                  {{ t.educationItem }}
                </li>
              </ul>
            </div>
            <div class="section w-fit" style="--border-color: 23, 72, 122" @mousemove="handleSectionMouseMove"
              @mouseleave="resetSectionShadow">
              <p class="text-center">{{ t.socialsTitle }}</p>
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
                    <BIconEnvelope />
                  </td>
                  <td>
                    <a target="_blank" class="underline-animate" href="mailto:nayaung54545454@gmail.com">
                      nayaung54545454@gmail.com
                    </a>
                  </td>
                </tr>
                <tr>
                  <td class="min-w-[1.8rem]">
                    <BIconLine />
                  </td>
                  <td>
                    <a target="_blank" class="underline-animate" href="https://line.me/ti/p/~07089936517">
                      070-8993-6517
                    </a>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div class="flex flex-row justify-around text-left mt-4 gap-[5px]">
            <div class="section w-fit" style="--border-color: 99, 72, 153" @mousemove="handleSectionMouseMove"
              @mouseleave="resetSectionShadow">
              <p class="text-center">{{ t.hobbiesTitle }}</p>
              <ul class="list-disc pl-5 marker:text-sky-500">
                <li>
                  {{ t.hobby1 }}
                </li>
                <li>
                  {{ t.hobby2 }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="my-2">{{ t.introText }}</div>
      </div>
    </div>


    <!-- Section 1 -->
    <section class="z-20 my-4 project-card sec-1">
      <div
        :class="[cardThemeClass, 'duration-300 rounded-lg relative z-10 flex items-center md:w-2/3 flex-col md:flex-row hover:shadow-lg card-hover-shadow']">
        <img
          class="max-w-[22rem] h-60 mt-2 md:mt-0 rounded-lg md:rounded-tl-lg md:rounded-bl-lg md:rounded-br-none md:rounded-tr-none"
          src="/src/assets/img/mirai_project_screenshot.png" loading="lazy"
          alt="The project NightKite's quick UI showcase gif.">
        <div class="p-3 text-justify text-sm">
          <p class="text-xl mx-auto text-center">
            <span class="underline-animate">
              {{ t.project1Title }}
            </span>
          </p>
          <p class="mt-2">
            {{ t.project1Desc }}
          </p>
        </div>
      </div>
    </section>

    <div :class="[' z-30 text-center p-3 mb-7 text-lg', warningThemeClass]">
      {{ t.warningText }}
    </div>

    <!-- Section 2 -->
    <section class=" z-20 my-4 project-card sec-2 flex place-content-end">
      <a href="https://github.com/NayAungLin910/nightkite" target="_blank"
        :class="[cardThemeClass, 'duration-300 rounded-lg relative z-10 flex items-center md:w-2/3 flex-col md:flex-row hover:shadow-lg card-hover-shadow']">
        <img
          class="max-w-[22rem] mt-2 md:mt-0 rounded-lg md:rounded-tl-lg md:rounded-bl-lg md:rounded-br-none md:rounded-tr-none"
          src="/src/assets/img/nightkite-showcase.gif" loading="lazy"
          alt="The project NightKite's quick UI showcase gif.">
        <div class="p-3 text-justify text-sm">
          <p class="text-xl mx-auto text-center">
            <span class="underline-animate">
              {{ t.project2Title }}
            </span>
          </p>
          <p class="mt-2">
            {{ t.project2Desc }}
          </p>
        </div>
      </a>
    </section>

    <!-- Section 2 -->
    <section class=" z-20 my-4 project-card sec-2 flex">
      <a href="https://github.com/NayAungLin910/blue_mail" target="_blank"
        :class="[cardThemeClass, 'duration-300 rounded-lg relative z-10 flex flex-col-reverse items-center md:w-2/3 md:flex-row hover:shadow-lg card-hover-shadow']">
        <div class="p-3 text-justify text-sm">
          <p class="text-xl mx-auto text-center">
            <span class="underline-animate">
              {{ t.project3Title }}
            </span>
          </p>
          <p class="mt-2">
            {{ t.project3Desc }}
          </p>
        </div>
        <img
          class="max-w-[22rem] mt-2 md:mt-0 rounded-lg md:rounded-tr-lg md:rounded-br-lg md:rounded-bl-none md:rounded-tl-none"
          src="/src/assets/img/bluemail-showcase.gif" loading="lazy"
          alt="The project NightKite's quick UI showcase gif.">
      </a>
    </section>

    <!-- Section 3 -->
    <section class="z-20 my-4 project-card sec-3 flex place-content-end">
      <a href="https://github.com/NayAungLin910/connect-crm" target="_blank"
        :class="[cardThemeClass, 'duration-300 rounded-lg relative z-10 flex items-center md:w-2/3 flex-col md:flex-row hover:shadow-lg card-hover-shadow']">
        <img
          class="max-w-[22rem] mt-2 md:mt-0 rounded-lg md:rounded-tl-lg md:rounded-bl-lg md:rounded-br-none md:rounded-tr-none"
          src="/src/assets/img/connect-showcase.gif" loading="lazy"
          alt="The project NightKite's quick UI showcase gif.">
        <div class="p-3 text-justify text-sm">
          <p class="text-xl mx-auto text-center">
            <span class="underline-animate">
              {{ t.project4Title }}
            </span>
          </p>
          <p class="mt-2">
            {{ t.project4Desc }}
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
